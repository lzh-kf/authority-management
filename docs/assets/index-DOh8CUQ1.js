import{u as P,B as p,a as U,b as I,_ as M,c as V,d as y,e as $}from"./naive-ui-B2HkySA7.js";import{d as k,r as f,A as w,S as N,Z as A,X as a,V as e,O as c,c as g,l as v,U as E}from"./@vue-B5e1V-Bk.js";import"./seemly-CiJeXoFo.js";import"./vooks-D63o6gaZ.js";import"./evtd-CI_DDEu_.js";import"./lodash-es-BU_ZaMpH.js";import"./vueuc--ewwTzXl.js";import"./@css-render-CCNRfX8h.js";import"./vdirs-Bxp-63WN.js";import"./@juggle-C8OzoCMD.js";import"./css-render-BDrvWz3H.js";import"./@emotion-WldOFDRm.js";import"./treemate-HRdUPn5m.js";import"./async-validator-DKvM95Vc.js";import"./date-fns-_9zXgOLk.js";const O=k({__name:"container",setup(T){const _=P(),d=()=>[{title:"ID",key:"id"},{title:"菜单名",key:"menuName"},{title:"图标",key:"icon"},{title:"组件名",key:"componentName"},{title:"组件路径",key:"componentPath"},{title:"创建时间",key:"createTime"},{title:"修改日期",key:"updateTime"},{title:"操作",key:"action",render(o,t){return v($,{negativeText:"取消",positiveText:"确定",onPositiveClick(){o.loading=!0,setTimeout(()=>{u.value.splice(t,1),_.success("删除成功"),o.loading=!1},1500)}},{trigger:()=>v(p,{type:"error",loading:o.loading},"删除"),default:()=>"确认删除该条数据吗?"})}}],m=()=>Array.from({length:20}).map((o,t)=>({id:t+1,menuName:"菜单管理",loading:!1,icon:null,componentName:"menuManagement",componentPath:"menuManagement/index",createTime:new Date().getTime(),updateTime:new Date().getTime()})),u=f(m()),b=d(),n=w({menuName:"",componentName:"",id:""}),i=f(!1),x=()=>{i.value=!0,setTimeout(()=>{i.value=!1},1e3)},h=()=>{i.value||(Object.keys(n).forEach(o=>{n[o]=""}),u.value=m())};return(o,t)=>{const s=U,r=I,D=M,C=V,B=y;return N(),A(B,null,{default:a(()=>[e(D,{ref:"formRef",inline:"","label-width":80,model:n},{default:a(()=>[e(r,{label:"菜单名"},{default:a(()=>[e(s,{value:n.menuName,"onUpdate:value":t[0]||(t[0]=l=>n.menuName=l),placeholder:"请输入菜单名"},null,8,["value"])]),_:1}),e(r,{label:"组件名"},{default:a(()=>[e(s,{value:n.componentName,"onUpdate:value":t[1]||(t[1]=l=>n.componentName=l),placeholder:"请输入组件名"},null,8,["value"])]),_:1}),e(r,{label:"ID"},{default:a(()=>[e(s,{value:n.id,"onUpdate:value":t[2]||(t[2]=l=>n.id=l),placeholder:"请输入ID"},null,8,["value"])]),_:1}),e(r,null,{default:a(()=>[e(c(p),{"attr-type":"button",onClick:x,loading:i.value,type:"primary"},{default:a(()=>[g(" 查询 ")]),_:1},8,["loading"]),e(c(p),{"attr-type":"button",onClick:h,type:"tertiary",style:{"margin-left":"20px"}},{default:a(()=>[g(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"]),e(C,{columns:c(b),data:u.value},null,8,["columns","data"])]),_:1})}}}),Y=k({__name:"index",setup(T){return(_,d)=>{const m=y;return N(),E("div",null,[e(m,null,{default:a(()=>[e(O)]),_:1})])}}});export{Y as default};