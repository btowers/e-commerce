"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[934],{6934:(e,t,o)=>{o.r(t),o.d(t,{default:()=>H});var l=o(3673),a=o(2323);const r=(0,l.Uk)(" Coderhouse eCommerce "),n={class:"q-gutter-sm row items-center no-wrap"},u=(0,l.Uk)("Logout");function i(e,t,o,i,s,c){const p=(0,l.up)("q-btn"),m=(0,l.up)("q-toolbar-title"),d=(0,l.up)("q-space"),w=(0,l.up)("q-tooltip"),f=(0,l.up)("q-toolbar"),g=(0,l.up)("q-header"),h=(0,l.up)("q-icon"),k=(0,l.up)("q-item-section"),q=(0,l.up)("q-item-label"),b=(0,l.up)("q-item"),Z=(0,l.up)("q-list"),_=(0,l.up)("q-scroll-area"),Q=(0,l.up)("q-drawer"),W=(0,l.up)("router-view"),y=(0,l.up)("q-page-container"),v=(0,l.up)("q-layout"),C=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.j4)(v,{view:"hHh lpR fFf",class:"bg-grey-1"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{elevated:"",class:"bg-white text-grey-8 q-py-xs","height-hint":"58"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,{flat:"",dense:"",round:"",onClick:i.toggleLeftDrawer,"aria-label":"Menu",icon:"menu"},null,8,["onClick"]),e.$q.screen.gt.xs?((0,l.wg)(),(0,l.j4)(p,{key:0,flat:"","no-caps":"","no-wrap":"",class:"q-ml-xs"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{shrink:"",class:"text-weight-bold"},{default:(0,l.w5)((()=>[r])),_:1})])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(d),(0,l._)("div",n,[(0,l.Wm)(p,{round:"",dense:"",flat:"",color:"grey-8",icon:"logout",onClick:c.logout},{default:(0,l.w5)((()=>[(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[u])),_:1})])),_:1},8,["onClick"])])])),_:1})])),_:1}),(0,l.Wm)(Q,{modelValue:i.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=e=>i.leftDrawerOpen=e),"show-if-above":"",bordered:"",class:"bg-grey-2",width:240},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{class:"fit"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{padding:""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.links1,(e=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(b,{key:e.text,to:e.to,clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{color:"grey",name:e.icon},null,8,["name"])])),_:2},1024),(0,l.Wm)(k,null,{default:(0,l.w5)((()=>[(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(e.text),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["to"])),[[C]]))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[(0,l.Wm)(W)])),_:1})])),_:1})}var s=o(1959);const c={name:"MyLayout",setup(){const e=(0,s.iH)(!1),t=(0,s.iH)("");function o(){e.value=!e.value}return{leftDrawerOpen:e,search:t,toggleLeftDrawer:o,links1:[{icon:"home",text:"Productos",to:"/"},{icon:"shopping_cart",text:"Carrito",to:"/cart"},{icon:"message",text:"Chat",to:"/chat"}]}},methods:{logout(){this.$socket.disconnect(),localStorage.removeItem("token"),this.$store.commit("chat/emptyChat"),this.$router.push("/login")}}};var p=o(4260),m=o(9214),d=o(3812),w=o(9570),f=o(8240),g=o(3747),h=o(2025),k=o(8870),q=o(2901),b=o(7704),Z=o(7011),_=o(3414),Q=o(2035),W=o(4554),y=o(2350),v=o(2652),C=o(6489),x=o(7518),D=o.n(x);const L=(0,p.Z)(c,[["render",i]]),H=L;D()(c,"components",{QLayout:m.Z,QHeader:d.Z,QToolbar:w.Z,QBtn:f.Z,QToolbarTitle:g.Z,QSpace:h.Z,QTooltip:k.Z,QDrawer:q.Z,QScrollArea:b.Z,QList:Z.Z,QItem:_.Z,QItemSection:Q.Z,QIcon:W.Z,QItemLabel:y.Z,QPageContainer:v.Z}),D()(c,"directives",{Ripple:C.Z})}}]);