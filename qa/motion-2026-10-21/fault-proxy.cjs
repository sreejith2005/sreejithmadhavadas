const http = require('node:http');
const modes = {3012:'no-js',3013:'autoplay-rejection',3014:'media-failure',3015:'preference-simulation'};
const preferenceScript = `(() => {
 const original = window.matchMedia.bind(window); let reduced=false; const queries=[];
 window.matchMedia = q => {
  const m=original(q); if(!q.includes('prefers-reduced-motion')) return m;
  const matches=()=>original(q.replace(/\\(prefers-reduced-motion:\\s*(reduce|no-preference)\\)/g,(_,v)=>(v==='reduce')===reduced?'(min-width: 0px)':'(max-width: 0px)')).matches;
  Object.defineProperty(m,'matches',{get:matches}); queries.push(m); return m;
 };
 document.addEventListener('DOMContentLoaded',()=>{
  const button=document.createElement('button'); button.id='qa-motion'; button.textContent='Simulate reduced motion';
  button.style='position:fixed;top:90px;left:12px;z-index:1000;padding:12px;background:white;color:black;border:2px solid blue';
  button.onclick=()=>{ const previous=queries.map(m=>m.matches); reduced=!reduced; document.documentElement.dataset.qaReduced=String(reduced); queries.forEach((m,i)=>{if(previous[i]!==m.matches)m.dispatchEvent(new MediaQueryListEvent('change',{matches:m.matches,media:m.media}));}); button.textContent=reduced?'Simulate normal motion':'Simulate reduced motion'; };
  document.body.append(button);
 });
})();`;
for(const [port,mode] of Object.entries(modes)) http.createServer((req,res)=>{
 if(mode==='media-failure' && req.url.includes('.mp4')){res.writeHead(404);res.end('QA intentional media failure');return;}
 const upstream=http.request({hostname:'127.0.0.1',port:3011,path:req.url,headers:{...req.headers,host:'localhost:3011','accept-encoding':'identity'}},r=>{
  const chunks=[];r.on('data',c=>chunks.push(c));r.on('end',()=>{
   let body=Buffer.concat(chunks);const headers={...r.headers};delete headers['content-length'];delete headers['transfer-encoding'];delete headers.etag;headers['cache-control']='no-store';
   if((headers['content-type']||'').includes('text/html')){
    let html=body.toString();
    if(mode==='no-js')html=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'');
    if(mode==='autoplay-rejection')html=html.replace('<head>','<head><script>HTMLMediaElement.prototype.play=function(){this.dataset.qaAttempts=String(Number(this.dataset.qaAttempts||0)+1);return Promise.reject(new DOMException("QA rejection","NotAllowedError"))}</script>');
    if(mode==='preference-simulation')html=html.replace('<head>','<head><script>'+preferenceScript+'</script>');
    body=Buffer.from(html);
   }
   res.writeHead(r.statusCode,headers);res.end(body);
  });
 });upstream.on('error',()=>{res.writeHead(502);res.end('Preview unavailable');});req.pipe(upstream);
}).listen(Number(port),'127.0.0.1',()=>console.log(mode+': '+port));
