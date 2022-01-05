(()=>{var e={2318:(e,t,r)=>{"use strict";r(5363),r(71);var n=r(8880),o=r(9592),a=r(3673);function i(e,t,r,n,o,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const s=(0,a.aZ)({name:"App"});var l=r(4260);const c=(0,l.Z)(s,[["render",i]]),u=c;var d=r(3822),p=r(7083),f=r(9582);const h=[{path:"/",name:"Home",meta:{requiresAuth:!0},component:()=>Promise.all([r.e(736),r.e(934)]).then(r.bind(r,6934)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(429)]).then(r.bind(r,9429))}]},{path:"/cart",meta:{requiresAuth:!0},component:()=>Promise.all([r.e(736),r.e(934)]).then(r.bind(r,6934)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(649)]).then(r.bind(r,7649))}]},{path:"/chat",meta:{requiresAuth:!0},component:()=>Promise.all([r.e(736),r.e(934)]).then(r.bind(r,6934)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(416)]).then(r.bind(r,8416))}]},{path:"/login",component:()=>Promise.all([r.e(736),r.e(561)]).then(r.bind(r,9561)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(724)]).then(r.bind(r,1724))}]},{path:"/register",component:()=>Promise.all([r.e(736),r.e(561)]).then(r.bind(r,9561)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(348)]).then(r.bind(r,7348))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(193)]).then(r.bind(r,2193))}],m=h,v=(0,p.BC)((function({store:e}){const t=f.PO,r=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:t("/")});return r.beforeEach(((e,t,r)=>{e.matched.some((e=>e.meta.requiresAuth))?localStorage.getItem("token")?r():r({path:"/login",query:{redirect:e.fullPath}}):r()})),r}));async function g(e,t){const n="function"===typeof d["default"]?await(0,d["default"])({}):d["default"],{storeKey:a}=await Promise.resolve().then(r.bind(r,3822)),i="function"===typeof v?await v({store:n}):v;n.$router=i;const s=e(u);return s.use(o.Z,t),{app:s,store:n,storeKey:a,router:i}}var b=r(4434);const y={config:{},plugins:{Notify:b.Z}},w="/";async function P({app:e,router:t,store:r,storeKey:n},o){let a=!1;const i=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},s=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=i(e);null!==t&&(window.location.href=t)},l=window.location.href.replace(window.location.origin,"");for(let u=0;!1===a&&u<o.length;u++)try{await o[u]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:l,publicPath:w})}catch(c){return c&&c.url?void s(c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&(e.use(t),e.use(r,n),e.mount("#q-app"))}g(n.ri,y).then((e=>Promise.all([Promise.resolve().then(r.bind(r,5474)),Promise.resolve().then(r.bind(r,1174))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));P(e,r)}))))},5474:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,api:()=>i});var n=r(7083),o=r(52),a=r.n(o);const i=a().create({baseURL:"https://api.example.com"}),s=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},1174:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,socket:()=>a});var n=r(7083),o=r(7804);const a=(0,o.io)("/",{autoConnect:!0}),i=(0,n.xr)((({app:e,store:t})=>{a.on("resp-message",(function(e){t.commit("chat/newMessage",e)})),a.on("stored-messages",(function(e){t.commit("chat/newMessages",e)})),e.config.globalProperties.$socket=a}))},937:()=>{},3822:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>A});var n={};r.r(n),r.d(n,{isAuthenticated:()=>d});var o={};r.r(o),r.d(o,{removeToken:()=>f,setJwtToken:()=>p});var a={};r.r(a),r.d(a,{getMessages:()=>g});var i={};r.r(i),r.d(i,{emptyChat:()=>y,newMessage:()=>b,newMessages:()=>w});var s={};r.r(s),r.d(s,{someAction:()=>P});var l=r(7083),c=r(3617);function u(){return{token:null}}function d(){return e=>!!e.token}function p(e,t){e.token=t}function f(e){e.token=null}var h=r(937);const m={namespaced:!0,getters:n,mutations:o,actions:h,state:u};function v(){return{messages:[]}}function g(){return state.messages}function b(e,t){e.messages.push(t)}function y(e){e.messages=[]}function w(e,t){e.messages=t}function P(){}const k={namespaced:!0,getters:a,mutations:i,actions:s,state:v},A=(0,l.h)((function(){const e=(0,c.MT)({modules:{authentication:m,chat:k},strict:!1});return e}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{193:"c0aa8529",348:"008b5495",416:"0836ca1b",429:"5e6ccef3",561:"d0bd7ea5",649:"4bab7fe0",724:"f7d06603",934:"976fd642"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"31d6cfe0",348:"3184d35f",429:"37c64160",724:"4a1c5784",736:"25dee4ca",934:"3c770394"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="front:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode.removeChild(o),n(l)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return o();e(n,s,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={348:1,429:1,724:1,934:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,l=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,l]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var u=l(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return r.O(u)},n=self["webpackChunkfront"]=self["webpackChunkfront"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(2318)));n=r.O(n)})();