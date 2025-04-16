import{j as r}from"./jsx-runtime-DiklIkkE.js";import{T as C}from"./Template-Cay0yqF_.js";import{r as k}from"./index-DRjF_FHU.js";import{e as b,g as w,u as x,s as S,c as R,a as $,m as U,b as M}from"./memoTheme-BaJynKMn.js";import{c,k as m}from"./emotion-react.browser.esm-BpUWAXVR.js";function j(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function A(t){return parseFloat(t)}function T(t){return b("MuiSkeleton",t)}w("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const X=t=>{const{classes:a,variant:e,animation:n,hasChildren:o,width:i,height:s}=t;return $({root:["root",e,n,o&&"withChildren",o&&!i&&"fitContent",o&&!s&&"heightAuto"]},T,a)},l=m`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,p=m`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,N=typeof l!="string"?c`
        animation: ${l} 2s ease-in-out 0.5s infinite;
      `:null,B=typeof p!="string"?c`
        &::after {
          animation: ${p} 2s linear 0.5s infinite;
        }
      `:null,E=S("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:e}=t;return[a.root,a[e.variant],e.animation!==!1&&a[e.animation],e.hasChildren&&a.withChildren,e.hasChildren&&!e.width&&a.fitContent,e.hasChildren&&!e.height&&a.heightAuto]}})(U(({theme:t})=>{const a=j(t.shape.borderRadius)||"px",e=A(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:M(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${e}${a}/${Math.round(e/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:n})=>n.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:n})=>n.hasChildren&&!n.width,style:{maxWidth:"fit-content"}},{props:({ownerState:n})=>n.hasChildren&&!n.height,style:{height:"auto"}},{props:{animation:"pulse"},style:N||{animation:`${l} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:B||{"&::after":{animation:`${p} 2s linear 0.5s infinite`}}}]}})),I=k.forwardRef(function(a,e){const n=x({props:a,name:"MuiSkeleton"}),{animation:o="pulse",className:i,component:s="span",height:d,style:f,variant:g="text",width:y,...h}=n,u={...n,animation:o,component:s,variant:g,hasChildren:!!h.children},v=X(u);return r.jsx(E,{as:s,ref:e,className:R(v.root,i),ownerState:u,...h,style:{width:y,height:d,...f}})});function K({...t}){return r.jsx(C,{children:r.jsx(I,{...t})})}K.__docgenInfo={description:"",methods:[],displayName:"SkeletonCustom"};export{K as S};
