import{j as i}from"./jsx-runtime-DiklIkkE.js";import{T as I}from"./Template-Cay0yqF_.js";import{r as g}from"./index-DRjF_FHU.js";import{g as P,e as S,u as D,s as v,c as F,a as M,m as N}from"./memoTheme-BaJynKMn.js";import{c as T}from"./createSvgIcon-Bbh683OF.js";import{u as z}from"./useSlot-ClC-LrAR.js";const U=T(i.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function E(a){return S("MuiAvatar",a)}const Y=P("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]),q=a=>{const{classes:o,variant:t,colorDefault:r}=a;return M({root:["root",t,r&&"colorDefault"],img:["img"],fallback:["fallback"]},E,o)},L=v("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(a,o)=>{const{ownerState:t}=a;return[o.root,o[t.variant],t.colorDefault&&o.colorDefault]}})(N(({theme:a})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(a.vars||a).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(a.vars||a).palette.background.default,...a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:{backgroundColor:a.palette.grey[400],...a.applyStyles("dark",{backgroundColor:a.palette.grey[600]})}}}]}))),_=v("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(a,o)=>o.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),B=v(U,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(a,o)=>o.fallback})({width:"75%",height:"75%"});function H({crossOrigin:a,referrerPolicy:o,src:t,srcSet:r}){const[n,s]=g.useState(!1);return g.useEffect(()=>{if(!t&&!r)return;s(!1);let c=!0;const e=new Image;return e.onload=()=>{c&&s("loaded")},e.onerror=()=>{c&&s("error")},e.crossOrigin=a,e.referrerPolicy=o,e.src=t,r&&(e.srcset=r),()=>{c=!1}},[a,o,t,r]),n}const G=g.forwardRef(function(o,t){const r=D({props:o,name:"MuiAvatar"}),{alt:n,children:s,className:c,component:e="div",slots:A={},slotProps:d={},imgProps:y,sizes:h,src:p,srcSet:f,variant:k="circular",...C}=r;let u=null;const l={...r,component:e,variant:k},R=H({...y,...typeof d.img=="function"?d.img(l):d.img,src:p,srcSet:f}),b=p||f,x=b&&R!=="error";l.colorDefault=!x,delete l.ownerState;const m=q(l),[j,w]=z("img",{className:m.img,elementType:_,externalForwardedProps:{slots:A,slotProps:{img:{...y,...d.img}}},additionalProps:{alt:n,src:p,srcSet:f,sizes:h},ownerState:l});return x?u=i.jsx(j,{...w}):s||s===0?u=s:b&&n?u=n[0]:u=i.jsx(B,{ownerState:l,className:m.fallback}),i.jsx(L,{as:e,className:F(m.root,c),ref:t,...C,ownerState:l,children:u})});function J({...a}){return i.jsx(I,{children:i.jsx(G,{...a})})}J.__docgenInfo={description:"",methods:[],displayName:"AvatarCustom"};export{G as A,Y as a,J as b};
