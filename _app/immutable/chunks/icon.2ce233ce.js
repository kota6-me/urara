import{a0 as i}from"./index.f6309bb4.js";import{w as o}from"./index.4811f077.js";function v(s){const e=s-1;return e*e*e+1}function w(s,{delay:e=0,duration:m=400,easing:p=v,x:l=0,y:b=0,opacity:u=0}={}){const a=getComputedStyle(s),n=+a.opacity,g=a.transform==="none"?"":a.transform,d=n*(1-u),[x,y]=i(l),[h,f]=i(b);return{delay:e,duration:m,easing:p,css:(r,k)=>`
			transform: ${g} translate(${(1-r)*x}${y}, ${(1-r)*h}${f});
			opacity: ${n-d*k}`}}const _={},A=o([]),S=o([]),Z=o({}),$=[{name:"cmyk",text:"🖨 Light"},{name:"dracula",text:"🧛 Dark"},{name:"valentine",text:"🌸 Valentine"},{name:"aqua",text:"💦 Aqua"},{name:"synthwave",text:"🌃 Synthwave"},{name:"night",text:"🌃 Night"},{name:"lofi",text:"🎶 Lo-Fi"},{name:"lemonade",text:"🍋 Lemonade"},{name:"cupcake",text:"🧁 Cupcake"},{name:"garden",text:"🏡 Garden"},{name:"retro",text:"🌇 Retro"},{name:"black",text:"🖤 Black"}],O={},U={nav:[{text:"Introduction",link:"/hello-world"}]},C={nav:[{text:"Feed",link:"/atom.xml"},{text:"Sitemap",link:"/sitemap.xml"}]},I={locales:"ja-JP",options:{year:"2-digit",weekday:"long",month:"short",day:"numeric"}},c=["透明な君は<br>僕を指差してた―。<br><sub>——「少女レイ」</sub>","明日も僕は夢うつつ<br>このまま僕は消えていいのに<br><sub>——「自傷無色」</sub>","死にゆく様を それを美と呼ぶな<br>散る為に咲く花なんて無いだろ<br><sub>——「生きるよすが」</sub>","栄光と挫折の人生 見上げれば高き壁<br>だけど僕は弱くない その手伸ばせ<br><sub>——「人生」</sub>","「ごめんね。ちっとも上手に生きてあげられなくて」と伝えて<br><sub>——「ザムザ」</sub>","蹲って膝をついた夜に<br>「最低だった」を押し付けたい。嗚呼！<sub>——「天使の翼。」</sub>","だからずっと、そうずっと<br>今を笑って魅せた<br>蒼い蒼い絶頂の夜まで。<sub>——「天使の翼。」</sub>"],t={protocol:{}.URARA_SITE_PROTOCOL??!1?"http://":"https://",domain:{}.URARA_SITE_DOMAIN??"note.r1tsu.com",title:"Notebook",subtitle:"Ritsu Yuzaki's blog site.",lang:"ja-JP",description:"Powered by Urara, The Svelte engine.",author:{avatar:"/assets/ritsu.png",name:"Ritsu Yuzaki",status:"🖥",bio:"限界高校生<br>兼<br>エンジニア<br><br><br>"+c[~~(Math.random()*c.length)]},themeColor:"#ffce53"},L={src:t.protocol+t.domain+"/asetts/Zone.png",sizes:"500x500",type:"image/png"},P={180:{src:t.protocol+t.domain+"/assets/Zone.png",sizes:"180x180",type:"image/png"},192:{src:t.protocol+t.domain+"/assets/Zone.png",sizes:"192x192",type:"image/png"},512:{src:t.protocol+t.domain+"/assets/Zone.png",sizes:"512x512",type:"image/png"}},T={192:{src:t.protocol+t.domain+"/assets/Zone.png",sizes:"192x192",type:"image/png"},512:{src:t.protocol+t.domain+"/assets/Zone.png",sizes:"512x512",type:"image/png"}};export{P as a,U as b,$ as c,w as d,A as e,L as f,S as g,O as h,I as i,C as j,T as m,_ as p,t as s,Z as t};
