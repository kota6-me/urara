import{a1 as p,a2 as b}from"./index.85533aa3.js";import{w as c}from"./index.a9b6117b.js";function v(a){const e=a-1;return e*e*e+1}function R(a,{delay:e=0,duration:s=400,easing:o=b}={}){const n=+getComputedStyle(a).opacity;return{delay:e,duration:s,easing:o,css:i=>`opacity: ${i*n}`}}function S(a,{delay:e=0,duration:s=400,easing:o=v,x:n=0,y:i=0,opacity:g=0}={}){const r=getComputedStyle(a),m=+r.opacity,u=r.transform==="none"?"":r.transform,d=m*(1-g),[x,y]=p(n),[f,h]=p(i);return{delay:e,duration:s,easing:o,css:(l,k)=>`
			transform: ${u} translate(${(1-l)*x}${y}, ${(1-l)*f}${h});
			opacity: ${m-d*k}`}}const _={},$=c([]),A=c([]),C=c({}),O=[{name:"cmyk",text:"🖨 Light"},{name:"dracula",text:"🧛 Dark"},{name:"valentine",text:"🌸 Valentine"},{name:"aqua",text:"💦 Aqua"},{name:"synthwave",text:"🌃 Synthwave"},{name:"night",text:"🌃 Night"},{name:"lofi",text:"🎶 Lo-Fi"},{name:"lemonade",text:"🍋 Lemonade"},{name:"cupcake",text:"🧁 Cupcake"},{name:"garden",text:"🏡 Garden"},{name:"retro",text:"🌇 Retro"},{name:"black",text:"🖤 Black"}],U={},L={nav:[{text:"Get Started",link:"/hello-world"},{text:"Elements",link:"/hello-world/elements"}]},P={nav:[{text:"Feed",link:"/atom.xml"},{text:"Sitemap",link:"/sitemap.xml"}]},T={locales:"ja-JP",options:{year:"2-digit",weekday:"long",month:"short",day:"numeric"}},t={protocol:{}.URARA_SITE_PROTOCOL??!1?"http://":"https://",domain:{}.URARA_SITE_DOMAIN??"note.r1tsu.com",title:"Notebook",subtitle:"Ritsu Yuzaki's blog site.",lang:"ja-JP",description:"Powered by Urara, The Svelte engine.",author:{avatar:"/assets/ritsu.png",name:"由崎律 (Ritsu Yuzaki)",status:"🖥",bio:"限界高校生 兼 エンジニア"},themeColor:"#ffce53"},j={src:t.protocol+t.domain+"/favicon.png",sizes:"500x500",type:"image/png"},E={180:{src:t.protocol+t.domain+"/assets/ritsu.png",sizes:"180x180",type:"image/png"},192:{src:t.protocol+t.domain+"/assets/ritsu.png",sizes:"192x192",type:"image/png"},512:{src:t.protocol+t.domain+"/assets/ritsu.png",sizes:"512x512",type:"image/png"}},I={192:{src:t.protocol+t.domain+"/assets/ritsu.png",sizes:"192x192",type:"image/png"},512:{src:t.protocol+t.domain+"/assets/ritsu.png",sizes:"512x512",type:"image/png"}};export{E as a,L as b,O as c,S as d,$ as e,j as f,A as g,U as h,R as i,T as j,P as k,I as m,_ as p,t as s,C as t};
