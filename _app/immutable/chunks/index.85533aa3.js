function b(){}const W=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function st(t){return t()}function Z(){return Object.create(null)}function E(t){t.forEach(st)}function L(t){return typeof t=="function"}function Qt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let H;function Ut(t,e){return H||(H=document.createElement("a")),H.href=e,t===H.href}function yt(t){return Object.keys(t).length===0}function gt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Vt(t,e,n){t.$$.on_destroy.push(gt(e,n))}function Xt(t,e,n,i){if(t){const s=rt(t,e,n,i);return t[0](s)}}function rt(t,e,n,i){return t[1]&&i?pt(n.ctx.slice(),t[1](i(e))):n.ctx}function Yt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function Zt(t,e,n,i,s,c){if(s){const r=rt(e,n,i,c);t.p(r,s)}}function te(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ee(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ne(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const ot=typeof window<"u";let I=ot?()=>window.performance.now():()=>Date.now(),J=ot?t=>requestAnimationFrame(t):b;const N=new Set;function lt(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&J(lt)}function K(t){let e;return N.size===0&&J(lt),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}let z=!1;function bt(){z=!0}function xt(){z=!1}function $t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function wt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:$t(1,s,h=>e[n[h]].claim_order,a))-1;i[l]=n[_]+1;const u=_+1;n[u]=l,s=Math.max(u,s)}const c=[],r=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<c.length&&r[l].claim_order>=c[a].claim_order;)a++;const _=a<c.length?c[a]:null;t.insertBefore(r[l],_)}}function Et(t,e){t.appendChild(e)}function ct(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=Q("style");return Tt(ct(t),e),e.sheet}function Tt(t,e){return Et(t.head||t,e),e.sheet}function Nt(t,e){if(z){for(wt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function At(t,e,n){t.insertBefore(e,n||null)}function kt(t,e,n){z&&!n?Nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function ie(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Q(t){return document.createElement(t)}function Mt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function U(t){return document.createTextNode(t)}function se(){return U(" ")}function re(){return U("")}function oe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function at(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function St(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:at(t,i,e[i])}function jt(t,e){Object.keys(e).forEach(n=>{Ct(t,n,e[n])})}function Ct(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:at(t,e,n)}function le(t){return/-/.test(t)?jt:St}function Dt(t){return Array.from(t.childNodes)}function ut(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ft(t,e,n,i,s=!1){ut(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Lt(t,e,n,i){return ft(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ce(t,e,n){return Lt(t,e,n,Q)}function Ht(t,e){return ft(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>U(e),!0)}function ae(t){return Ht(t," ")}function tt(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function ue(t,e){const n=tt(t,"HTML_TAG_START",0),i=tt(t,"HTML_TAG_END",n);if(n===i)return new et(void 0,e);ut(t);const s=t.splice(n,i-n+1);C(s[0]),C(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new et(c,e)}function fe(t,e){e=""+e,t.data!==e&&(t.data=e)}function _e(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function de(t,e,n){t.classList[n?"add":"remove"](e)}function Ot(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function he(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Pt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Mt(n.nodeName):this.e=Q(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(C)}}class et extends Pt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)kt(this.t,this.n[n],e)}}function me(t,e){return new t(e)}const P=new Map;let q=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Rt(t,e){const n={stylesheet:vt(e),rules:{}};return P.set(t,n),n}function R(t,e,n,i,s,c,r,o=0){const l=16.666/i;let a=`{
`;for(let p=0;p<=1;p+=l){const y=e+(n-e)*c(p);a+=p*100+`%{${r(y,1-y)}}
`}const _=a+`100% {${r(n,1-n)}}
}`,u=`__svelte_${qt(_)}_${o}`,h=ct(t),{stylesheet:f,rules:d}=P.get(h)||Rt(h,t);d[u]||(d[u]=!0,f.insertRule(`@keyframes ${u} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${u} ${i}ms linear ${s}ms 1 both`,q+=1,u}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),q-=s,q||Bt())}function Bt(){J(()=>{q||(P.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&C(e)}),P.clear())})}let D;function j(t){D=t}function V(){if(!D)throw new Error("Function called outside component initialization");return D}function pe(t){V().$$.on_mount.push(t)}function ye(t){V().$$.after_update.push(t)}function ge(t){V().$$.on_destroy.push(t)}const T=[],nt=[];let A=[];const it=[],_t=Promise.resolve();let G=!1;function dt(){G||(G=!0,_t.then(ht))}function be(){return dt(),_t}function k(t){A.push(t)}const F=new Set;let v=0;function ht(){if(v!==0)return;const t=D;do{try{for(;v<T.length;){const e=T[v];v++,j(e),zt(e.$$)}}catch(e){throw T.length=0,v=0,e}for(j(null),T.length=0,v=0;nt.length;)nt.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];F.has(n)||(F.add(n),n())}A.length=0}while(T.length);for(;it.length;)it.pop()();G=!1,F.clear(),j(t)}function zt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}function Ft(t){const e=[],n=[];A.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),A=e}let S;function X(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function w(t,e,n){t.dispatchEvent(Ot(`${e?"intro":"outro"}${n}`))}const O=new Set;let g;function xe(){g={r:0,c:[],p:g}}function $e(){g.r||E(g.c),g=g.p}function Gt(t,e){t&&t.i&&(O.delete(t),t.i(e))}function we(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),g.c.push(()=>{O.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Y={duration:0};function Ee(t,e,n){const i={direction:"in"};let s=e(t,n,i),c=!1,r,o,l=0;function a(){r&&B(t,r)}function _(){const{delay:h=0,duration:f=300,easing:d=W,tick:m=b,css:p}=s||Y;p&&(r=R(t,0,1,f,h,d,p,l++)),m(0,1);const y=I()+h,M=y+f;o&&o.abort(),c=!0,k(()=>w(t,!0,"start")),o=K(x=>{if(c){if(x>=M)return m(1,0),w(t,!0,"end"),a(),c=!1;if(x>=y){const $=d((x-y)/f);m($,1-$)}}return c})}let u=!1;return{start(){u||(u=!0,B(t),L(s)?(s=s(i),X().then(_)):_())},invalidate(){u=!1},end(){c&&(a(),c=!1)}}}function ve(t,e,n){const i={direction:"out"};let s=e(t,n,i),c=!0,r;const o=g;o.r+=1;function l(){const{delay:a=0,duration:_=300,easing:u=W,tick:h=b,css:f}=s||Y;f&&(r=R(t,1,0,_,a,u,f));const d=I()+a,m=d+_;k(()=>w(t,!1,"start")),K(p=>{if(c){if(p>=m)return h(0,1),w(t,!1,"end"),--o.r||E(o.c),!1;if(p>=d){const y=u((p-d)/_);h(1-y,y)}}return c})}return L(s)?X().then(()=>{s=s(i),l()}):l(),{end(a){a&&s.tick&&s.tick(1,0),c&&(r&&B(t,r),c=!1)}}}function Te(t,e,n,i){const s={direction:"both"};let c=e(t,n,s),r=i?0:1,o=null,l=null,a=null;function _(){a&&B(t,a)}function u(f,d){const m=f.b-r;return d*=Math.abs(m),{a:r,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:p=W,tick:y=b,css:M}=c||Y,x={start:I()+d,b:f};f||(x.group=g,g.r+=1),o||l?l=x:(M&&(_(),a=R(t,r,f,m,d,p,M)),f&&y(0,1),o=u(x,m),k(()=>w(t,f,"start")),K($=>{if(l&&$>l.start&&(o=u(l,m),l=null,w(t,o.b,"start"),M&&(_(),a=R(t,r,o.b,o.duration,0,p,c.css))),o){if($>=o.end)y(r=o.b,1-r),w(t,o.b,"end"),l||(o.b?_():--o.group.r||E(o.group.c)),o=null;else if($>=o.start){const mt=$-o.start;r=o.a+o.d*p(mt/o.duration),y(r,1-r)}}return!!(o||l)}))}return{run(f){L(c)?X().then(()=>{c=c(s),h(f)}):h(f)},end(){_(),o=l=null}}}const Ne=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Ae(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],o=e[c];if(o){for(const l in r)l in o||(i[l]=1);for(const l in o)s[l]||(n[l]=o[l],s[l]=1);t[c]=o}else for(const l in r)s[l]=1}for(const r in i)r in n||(n[r]=void 0);return n}function ke(t){return typeof t=="object"&&t!==null?t:{}}const Wt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Wt];function Me(t){t&&t.c()}function Se(t,e){t&&t.l(e)}function It(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||k(()=>{const r=t.$$.on_mount.map(st).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...r):E(r),t.$$.on_mount=[]}),c.forEach(k)}function Jt(t,e){const n=t.$$;n.fragment!==null&&(Ft(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Kt(t,e){t.$$.dirty[0]===-1&&(T.push(t),dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function je(t,e,n,i,s,c,r,o=[-1]){const l=D;j(t);const a=t.$$={fragment:null,ctx:[],props:c,update:b,not_equal:s,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Z(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(u,h,...f)=>{const d=f.length?f[0]:h;return a.ctx&&s(a.ctx[u],a.ctx[u]=d)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](d),_&&Kt(t,u)),h}):[],a.update(),_=!0,E(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){bt();const u=Dt(e.target);a.fragment&&a.fragment.l(u),u.forEach(C)}else a.fragment&&a.fragment.c();e.intro&&Gt(t.$$.fragment),It(t,e.target,e.anchor,e.customElement),xt(),ht()}j(l)}class Ce{$destroy(){Jt(this,1),this.$destroy=b}$on(e,n){if(!L(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Te as $,It as A,Jt as B,he as C,Nt as D,b as E,ie as F,de as G,oe as H,k as I,E as J,Ne as K,Ee as L,ve as M,Xt as N,Zt as O,te as P,Yt as Q,Vt as R,Ce as S,Ut as T,pt as U,Ae as V,ke as W,ee as X,et as Y,ue as Z,ge as _,se as a,le as a0,ne as a1,W as a2,kt as b,ae as c,we as d,re as e,$e as f,Gt as g,C as h,je as i,ye as j,Q as k,ce as l,Dt as m,at as n,pe as o,_e as p,U as q,Ht as r,Qt as s,be as t,fe as u,xe as v,nt as w,me as x,Me as y,Se as z};