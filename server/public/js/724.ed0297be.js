"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[724],{1724:(e,t,o)=>{o.r(t),o.d(t,{default:()=>k});var a=o(3673);const s={class:"row justify-between q-py-sm"},l={class:"q-pt-md"},n=(0,a.Uk)("Register");function i(e,t,o,i,r,d){const u=(0,a.up)("q-input"),c=(0,a.up)("q-btn"),p=(0,a.up)("router-link"),m=(0,a.up)("q-card-section"),g=(0,a.up)("q-card"),h=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(h,{class:"flex flex-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{class:"my-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u,{modelValue:r.user.email,"onUpdate:modelValue":t[0]||(t[0]=e=>r.user.email=e),label:"Usuario"},null,8,["modelValue"]),(0,a.Wm)(u,{modelValue:r.user.password,"onUpdate:modelValue":t[1]||(t[1]=e=>r.user.password=e),type:r.isPwd?"password":"text",label:"Contraseña"},null,8,["modelValue","type"]),(0,a._)("div",s,[(0,a._)("div",null,[(0,a.Wm)(c,{onClick:d.loginUser,color:"primary",label:"Login",loading:r.loading},null,8,["onClick","loading"])]),(0,a._)("div",l,[(0,a.Wm)(p,{to:"/register"},{default:(0,a.w5)((()=>[n])),_:1})])])])),_:1})])),_:1})])),_:1})}const r={name:"Login",data(){return{loading:!1,isPwd:!0,user:{email:"",password:""}}},methods:{loginUser(){this.loading=!0,this.$axios.post("/api/user/login",this.user).then((e=>{this.loading=!1,e.data.token?(localStorage.setItem("token",e.data.token),this.$socket.connect(),this.$router.push("/")):this.$q.notify({position:"bottom-right",color:"negative",message:e.data.message})})).catch((e=>{console.log(e),this.loading=!1,this.$q.notify({position:"bottom-right",color:"negative",message:e.message})}))}}};var d=o(4260),u=o(4379),c=o(151),p=o(5589),m=o(4842),g=o(8240),h=o(7518),f=o.n(h);const w=(0,d.Z)(r,[["render",i],["__scopeId","data-v-dbe1cb36"]]),k=w;f()(r,"components",{QPage:u.Z,QCard:c.Z,QCardSection:p.Z,QInput:m.Z,QBtn:g.Z})}}]);