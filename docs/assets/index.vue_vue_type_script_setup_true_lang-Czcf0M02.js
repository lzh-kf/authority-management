import{b as f,u as b}from"./vue-router-DsMFJ9f9.js";import{u as y}from"./index-B-5io2bX.js";import{j as k,S as x}from"./naive-ui-B2HkySA7.js";import{d as S,j as u,S as C,U as V,V as c,X as w,l as B}from"./@vue-B5e1V-Bk.js";const U="/home",E=S({__name:"index",emits:["refreshView"],setup(g,{emit:i}){const m=i,p=f(),_=b(),d=y(),r=u(()=>p.name),h=u(()=>a(d.routes)),a=t=>t.map(o=>{const{label:s,key:n,children:e}=o,l={key:n,label:()=>B("div",{onClick:e?null:()=>v(n)},s)};return e&&(l.children=a(e)),l}),v=t=>{m("refreshView"),_.push({path:`${U}/${t}`})};return(t,o)=>{const s=k,n=x;return C(),V("div",null,[c(n,{style:{"max-height":"100vh"}},{default:w(()=>[c(s,{value:r.value,"onUpdate:value":o[0]||(o[0]=e=>r.value=e),mode:"vertical",indent:20,options:h.value},null,8,["value","options"])]),_:1})])}}});export{E as _};
