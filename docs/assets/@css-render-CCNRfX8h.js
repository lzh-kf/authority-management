import{i as _}from"./@vue-B5e1V-Bk.js";function N(l){let u=".",m="__",b="--",r;if(l){let e=l.blockPrefix;e&&(u=e),e=l.elementPrefix,e&&(m=e),e=l.modifierPrefix,e&&(b=e)}const o={install(e){r=e.c;const i=e.context;i.bem={},i.bem.b=null,i.bem.els=null}};function d(e){let i,n;return{before(t){i=t.bem.b,n=t.bem.els,t.bem.els=null},after(t){t.bem.b=i,t.bem.els=n},$({context:t,props:f}){return e=typeof e=="string"?e:e({context:t,props:f}),t.bem.b=e,`${(f==null?void 0:f.bPrefix)||u}${t.bem.b}`}}}function $(e){let i;return{before(n){i=n.bem.els},after(n){n.bem.els=i},$({context:n,props:t}){return e=typeof e=="string"?e:e({context:n,props:t}),n.bem.els=e.split(",").map(f=>f.trim()),n.bem.els.map(f=>`${(t==null?void 0:t.bPrefix)||u}${n.bem.b}${m}${f}`).join(", ")}}}function v(e){return{$({context:i,props:n}){e=typeof e=="string"?e:e({context:i,props:n});const t=e.split(",").map(s=>s.trim());function f(s){return t.map(P=>`&${(n==null?void 0:n.bPrefix)||u}${i.bem.b}${s!==void 0?`${m}${s}`:""}${b}${P}`).join(", ")}const c=i.bem.els;return c!==null?f(c[0]):f()}}}function y(e){return{$({context:i,props:n}){e=typeof e=="string"?e:e({context:i,props:n});const t=i.bem.els;return`&:not(${(n==null?void 0:n.bPrefix)||u}${i.bem.b}${t!==null&&t.length>0?`${m}${t[0]}`:""}${b}${e})`}}}return Object.assign(o,{cB:(...e)=>r(d(e[0]),e[1],e[2]),cE:(...e)=>r($(e[0]),e[1],e[2]),cM:(...e)=>r(v(e[0]),e[1],e[2]),cNotM:(...e)=>r(y(e[0]),e[1],e[2])}),o}const M="@css-render/vue3-ssr";function j(l,u){return`<style cssr-id="${l}">
${u}
</style>`}function B(l,u,m){const{styles:b,ids:r}=m;r.has(l)||b!==null&&(r.add(l),b.push(j(l,u)))}const E=typeof document<"u";function k(){if(E)return;const l=_(M,null);if(l!==null)return{adapter:(u,m)=>B(u,m,l),context:l}}export{N as p,k as u};
