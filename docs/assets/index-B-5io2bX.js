const __vite__fileDeps=["assets/index-DOh8CUQ1.js","assets/naive-ui-B2HkySA7.js","assets/@vue-B5e1V-Bk.js","assets/seemly-CiJeXoFo.js","assets/vooks-D63o6gaZ.js","assets/evtd-CI_DDEu_.js","assets/lodash-es-BU_ZaMpH.js","assets/vueuc--ewwTzXl.js","assets/@css-render-CCNRfX8h.js","assets/vdirs-Bxp-63WN.js","assets/@juggle-C8OzoCMD.js","assets/css-render-BDrvWz3H.js","assets/@emotion-WldOFDRm.js","assets/treemate-HRdUPn5m.js","assets/async-validator-DKvM95Vc.js","assets/date-fns-_9zXgOLk.js","assets/index-DCIWF3CJ.js","assets/pinia-CB8a2h1g.js","assets/vue-demi-Dq6ymT-8.js","assets/vue-router-DsMFJ9f9.js","assets/index-C5IJjhEU.css","assets/normalize-DxkFTwjz.css","assets/index-BZNMLBgH.js","assets/index-BUQIFwDg.js","assets/index-2jRFvffy.css","assets/index-Ckzka1gK.js","assets/index.vue_vue_type_script_setup_true_lang-Czcf0M02.js","assets/index-CSS-SMdu.js","assets/index-B3OoNAOE.css","assets/index-qA3MNy5Y.js","assets/index-BsVzILAM.css","assets/index-D1zE-fOu.js","assets/index-q83gclJs.css","assets/index-C-dNsL-X.js","assets/index-CQEHAa7H.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as v,R as C,S as O,U as A,V as L,W as V}from"./@vue-B5e1V-Bk.js";import{d as x,c as M}from"./pinia-CB8a2h1g.js";import{u as D,c as T,a as I}from"./vue-router-DsMFJ9f9.js";/* empty css                      */import"./vue-demi-Dq6ymT-8.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(o){if(o.ep)return;o.ep=!0;const t=r(o);fetch(o.href,t)}})();const S="modulepreload",U=function(e){return"/"+e},b={},c=function(n,r,i){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),a=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));o=Promise.all(r.map(l=>{if(l=U(l),l in b)return;b[l]=!0;const s=l.endsWith(".css"),m=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":S,s||(u.as="script",u.crossOrigin=""),u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),s)return new Promise((_,d)=>{u.addEventListener("load",_),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}return o.then(()=>n()).catch(t=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=t,window.dispatchEvent(a),!a.defaultPrevented)throw t})},g=x("asyncRoutes",()=>{const e=D(),n=v([]),r=v(["create","delete","query","put","reset"]),i={cacheValue:null,get value(){return i.cacheValue||(i.cacheValue=Object.assign({"/src/views/authorityManagement/menuManagement/index.vue":()=>c(()=>import("./index-DOh8CUQ1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),"/src/views/found/index.vue":()=>c(()=>import("./index-DCIWF3CJ.js"),__vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21])),"/src/views/fourthRoute/index.vue":()=>c(()=>import("./index-BZNMLBgH.js"),__vite__mapDeps([22,2,17,18,19,21])),"/src/views/home/components/headerCom/index.vue":()=>c(()=>import("./index-BUQIFwDg.js"),__vite__mapDeps([23,19,2,1,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,24,21])),"/src/views/home/components/sidebarCom/index.vue":()=>c(()=>import("./index-Ckzka1gK.js"),__vite__mapDeps([25,26,19,2,1,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,21])),"/src/views/home/index.vue":()=>c(()=>import("./index-CSS-SMdu.js"),__vite__mapDeps([27,26,19,2,1,3,4,5,6,7,8,9,10,11,12,13,14,15,23,17,18,24,21,28])),"/src/views/index/index.vue":()=>c(()=>import("./index-qA3MNy5Y.js"),__vite__mapDeps([29,2,1,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,30,21])),"/src/views/login/index.vue":()=>c(()=>import("./index-D1zE-fOu.js"),__vite__mapDeps([31,19,2,1,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,32,21])),"/src/views/waitDevelopComponent/index.vue":()=>c(()=>import("./index-C-dNsL-X.js"),__vite__mapDeps([33,2,17,18,19,34,21]))})),i.cacheValue}},o=()=>new Promise(s=>{setTimeout(()=>{s([{label:"首页",key:"",componentPath:"index"},{label:"权限管理",key:"authorityManagement",children:[{label:"菜单管理",key:"menuManagement",componentPath:"authorityManagement/menuManagement"},{label:"接口管理",key:"interfaceManagement",componentPath:"authorityManagement/interfaceManagement"},{label:"角色管理",key:"roleManagement",componentPath:"authorityManagement/roleManagement"},{label:"用户管理",key:"userManagement",componentPath:"authorityManagement/userManagement"}]},{label:"顶级路由",key:"topRoute",children:[{label:"二级路由",key:"secondRoute",children:[{label:"三级路由",key:"thirdRoute",children:[{label:"四级路由",key:"fourthRoute",componentPath:"fourthRoute"}]}]}]},{label:"基础组件",key:"baseComponent",children:[{label:"头像",key:"avator",componentPath:"baseComponent/avator"},{label:"按钮",key:"button",componentPath:"baseComponent/button"},{label:"卡片",key:"card",componentPath:"baseComponent/card"},{label:"图标",key:"icon",componentPath:"baseComponent/icon"},{label:"标签",key:"tag",componentPath:"baseComponent/tag"},{label:"水印",key:"waterMark",componentPath:"baseComponent/waterMark"},{label:"轮播",key:"carousel",componentPath:"baseComponent/carousel"}]},{label:"数据组件",key:"dataComponent",children:[{label:"输入框",key:"input",componentPath:"dataComponent/input"},{label:"复选框",key:"checkbox",componentPath:"dataComponent/checkbox"},{label:"单选框",key:"radio",componentPath:"dataComponent/radio"},{label:"日期选择器",key:"datePicker",componentPath:"dataComponent/datePicker"},{label:"表单",key:"form",componentPath:"dataComponent/form"},{label:"表格",key:"table",componentPath:"dataComponent/table"},{label:"上传",key:"upload",componentPath:"dataComponent/upload"}]}])},300)}),t=async()=>{try{const s=await o();n.value=s}catch(s){console.log("获取路由数据错误",s)}},a=()=>{e.addRoute("home",{path:"/home:afterUser(.*)",component:c(()=>import("./index-DCIWF3CJ.js"),__vite__mapDeps([16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21]))})},l=s=>{const m=i.value;s.forEach(u=>{const{label:_,key:d,componentPath:R,children:y}=u;if(y)l(y);else{const w={path:d,name:d,component:m[`/src/views/${R}/index.vue`]||m["/src/views/waitDevelopComponent/index.vue"],meta:{title:_}};e.addRoute("home",w)}})};return{codes:r,routes:n,setRoutes:t,addAsyncRoute:l,addFoundRoute:a}}),E="/home",k=T({history:I(),routes:[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:()=>c(()=>import("./index-D1zE-fOu.js"),__vite__mapDeps([31,19,2,1,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,32,21]))},{path:E,name:"home",component:()=>c(()=>import("./index-CSS-SMdu.js"),__vite__mapDeps([27,26,19,2,1,3,4,5,6,7,8,9,10,11,12,13,14,15,23,17,18,24,21,28])),children:[]}]});let f=async()=>{const e=g();try{await e.setRoutes(),e.addAsyncRoute(e.routes)}catch(n){return console.log("error",n),!1}finally{return e.addFoundRoute(),!0}};k.beforeEach(async e=>{if(e.path.includes(E))if(f)try{await f(),f=void 0}catch(n){return console.log("error",n),!1}finally{return e.path}else return!0;return!0});let p;const P=(e,n)=>{p||(p=g().codes),p&&(e.style.display=p.includes(n)?"":"none")},q={created(e,{value:n}){return P(e,n)},updated(e,{value:n}){return P(e,n)}},$=e=>{e.directive("permission",q)},B=(e,n)=>{const r=e.__vccOpts||e;for(const[i,o]of n)r[i]=o;return r},F={},N={id:"app"};function W(e,n){const r=C("router-view");return O(),A("div",N,[L(r)])}const j=B(F,[["render",W]]),h=V(j);h.use(k);h.use(M());$(h);h.mount("#app");export{B as _,g as u};