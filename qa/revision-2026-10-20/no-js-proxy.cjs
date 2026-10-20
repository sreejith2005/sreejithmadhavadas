const http=require('node:http');
http.createServer((req,res)=>{
 const request=http.request({hostname:'127.0.0.1',port:3011,path:req.url,method:req.method,headers:{...req.headers,host:'localhost:3011','accept-encoding':'identity'}},response=>{
  const chunks=[];response.on('data',c=>chunks.push(c));response.on('end',()=>{
   let body=Buffer.concat(chunks);const headers={...response.headers};delete headers['content-length'];delete headers['transfer-encoding'];delete headers.etag;headers['cache-control']='no-store';
   if((headers['content-type']||'').includes('text/html'))body=Buffer.from(body.toString().replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,''));
   res.writeHead(response.statusCode,headers);res.end(body);
  });
 });request.on('error',()=>{res.writeHead(502);res.end('Preview unavailable')});req.pipe(request);
}).listen(3013,'127.0.0.1',()=>console.log('Application scripts suppressed: http://localhost:3013'));
