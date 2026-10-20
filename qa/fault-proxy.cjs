// Local-only fault-injection proxy for the production preview. No production source changes.
const http = require('node:http');
const fs = require('node:fs');
const modes = { 3006: 'no-js', 3007: 'autoplay-rejection', 3008: 'media-failure', 3009: 'reduced-motion-simulation', 3010: 'visibility-simulation' };
for (const [port, mode] of Object.entries(modes)) {
 http.createServer((req,res) => {
  if(mode === 'media-failure' && req.url.includes('.mp4')) {
   res.writeHead(404,{'Content-Type':'text/plain'}); res.end('Intentional local QA media failure'); return;
  }
  const up=http.request({hostname:'127.0.0.1',port:3005,path:req.url,method:req.method,headers:{...req.headers,host:'localhost:3005','accept-encoding':'identity'}}, response => {
   const chunks=[]; response.on('data', c=>chunks.push(c)); response.on('end',()=>{
    let body=Buffer.concat(chunks); const headers={...response.headers}; delete headers['content-length']; delete headers['transfer-encoding']; delete headers.etag; headers['cache-control']='no-store';
    if((headers['content-type']||'').includes('text/html')) {
     let html=body.toString();
     if(mode==='no-js') html=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'');
     if(mode==='autoplay-rejection') html=html.replace('<head>','<head><script>HTMLMediaElement.prototype.play=function(){this.dataset.qaPlayAttempts=String(Number(this.dataset.qaPlayAttempts||0)+1);return Promise.reject(new DOMException("Intentional QA rejection","NotAllowedError"))};</script>');
     if(mode==='reduced-motion-simulation') {
      const script='const originalMatchMedia=window.matchMedia.bind(window);window.matchMedia=function(q){const m=originalMatchMedia(q);if(q.includes("prefers-reduced-motion")){Object.defineProperty(m,"matches",{value:q.includes("no-preference")?false:true});}return m;};document.documentElement.dataset.qaReducedMotion="simulated";setTimeout(()=>{document.documentElement.dataset.qaMotionPreference=String(window.matchMedia("(prefers-reduced-motion: reduce)").matches);},1500);';
      html=html.replace('<head>','<head><script>'+script+'</script>');
      html=html.replace('</head>','<style>*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.footer-video{opacity:0!important}</style></head>');
     }
     if(mode==='visibility-simulation') {
      const script='let qaHidden=false;Object.defineProperty(document,"hidden",{get:()=>qaHidden});setTimeout(()=>{const button=document.createElement("button");button.textContent="Simulate background tab";button.style="position:fixed;top:8px;left:8px;z-index:10000;padding:12px;background:white;color:black";button.onclick=()=>{qaHidden=!qaHidden;document.documentElement.dataset.qaHidden=String(qaHidden);button.textContent=qaHidden?"Simulate foreground tab":"Simulate background tab";document.dispatchEvent(new Event("visibilitychange"));};document.body.append(button);},1500);';
      html=html.replace('<head>','<head><script>'+script+'</script>');
     }
     body=Buffer.from(html);
    }
    res.writeHead(response.statusCode,headers);res.end(body);
   });
  }); up.on('error', e=>{res.writeHead(502);res.end(e.message)}); req.pipe(up);
 }).listen(Number(port),'127.0.0.1',()=>console.log(`QA ${mode}: http://localhost:${port}`));
}
