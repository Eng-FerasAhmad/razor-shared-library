import{j as s}from"./extends-BZziWbxp.js";import{T as I}from"./Template-Ns2mqNLl.js";import{r as R}from"./index-BP8_t0zE.js";import{b as q,g as z,s as m,j as t,m as d,u as N,c as O,a as w,z as M,A as T}from"./DefaultPropsProvider-CBZfYqC6.js";import{u as A}from"./index-DiL3kUBv.js";import{c as p}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{k as P,c as $}from"./emotion-react.browser.esm-B5xgBJJi.js";function D(e){return q("MuiLinearProgress",e)}z("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const v=4,y=P`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,S=typeof y!="string"?$`
        animation: ${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,C=P`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,U=typeof C!="string"?$`
        animation: ${C} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,h=P`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,K=typeof h!="string"?$`
        animation: ${h} 3s infinite linear;
      `:null,_=e=>{const{classes:r,variant:a,color:n}=e,b={root:["root",`color${t(n)}`,a],dashed:["dashed",`dashedColor${t(n)}`],bar1:["bar",`barColor${t(n)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${t(n)}`,a==="buffer"&&`color${t(n)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return w(b,D,r)},x=(e,r)=>e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?M(e.palette[r].main,.62):T(e.palette[r].main,.5),E=m("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,r[`color${t(a.color)}`],r[a.variant]]}})(d(({theme:e})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(e.palette).filter(p()).map(([r])=>({props:{color:r},style:{backgroundColor:x(e,r)}})),{props:({ownerState:r})=>r.color==="inherit"&&r.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),V=m("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.dashed,r[`dashedColor${t(a.color)}`]]}})(d(({theme:e})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(e.palette).filter(p()).map(([r])=>{const a=x(e,r);return{props:{color:r},style:{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`}}})]})),K||{animation:`${h} 3s infinite linear`}),X=m("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r[`barColor${t(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&r.bar1Indeterminate,a.variant==="determinate"&&r.bar1Determinate,a.variant==="buffer"&&r.bar1Buffer]}})(d(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(e.palette).filter(p()).map(([r])=>({props:{color:r},style:{backgroundColor:(e.vars||e).palette[r].main}})),{props:{variant:"determinate"},style:{transition:`transform .${v}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${v}s linear`}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:S||{animation:`${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),F=m("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.bar,r[`barColor${t(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&r.bar2Indeterminate,a.variant==="buffer"&&r.bar2Buffer]}})(d(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(e.palette).filter(p()).map(([r])=>({props:{color:r},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[r].main}})),{props:({ownerState:r})=>r.variant!=="buffer"&&r.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(e.palette).filter(p()).map(([r])=>({props:{color:r,variant:"buffer"},style:{backgroundColor:x(e,r),transition:`transform .${v}s linear`}})),{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:U||{animation:`${C} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),G=R.forwardRef(function(r,a){const n=N({props:r,name:"MuiLinearProgress"}),{className:b,color:j="primary",value:g,valueBuffer:L,variant:o="indeterminate",...B}=n,l={...n,color:j,variant:o},u=_(l),k=A(),f={},c={bar1:{},bar2:{}};if((o==="determinate"||o==="buffer")&&g!==void 0){f["aria-valuenow"]=Math.round(g),f["aria-valuemin"]=0,f["aria-valuemax"]=100;let i=g-100;k&&(i=-i),c.bar1.transform=`translateX(${i}%)`}if(o==="buffer"&&L!==void 0){let i=(L||0)-100;k&&(i=-i),c.bar2.transform=`translateX(${i}%)`}return s.jsxs(E,{className:O(u.root,b),ownerState:l,role:"progressbar",...f,ref:a,...B,children:[o==="buffer"?s.jsx(V,{className:u.dashed,ownerState:l}):null,s.jsx(X,{className:u.bar1,ownerState:l,style:c.bar1}),o==="determinate"?null:s.jsx(F,{className:u.bar2,ownerState:l,style:c.bar2})]})});function H({color:e="primary"}){return s.jsx(I,{children:s.jsx(G,{color:e})})}H.__docgenInfo={description:"",methods:[],displayName:"LinearProgressCustom",props:{color:{required:!1,tsType:{name:"union",raw:"'inherit' | 'primary' | 'secondary'",elements:[{name:"literal",value:"'inherit'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}}}};export{H as L};
