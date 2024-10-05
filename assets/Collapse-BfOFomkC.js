import{r as y}from"./index-BP8_t0zE.js";import{g as _,a as tt,s as R,m as et,e as nt,f as it,h as ot,l as rt}from"./DefaultPropsProvider-DxvFDAWb.js";import{u as st}from"./useTheme-Dw8ftt5g.js";import{j as E}from"./extends-BZziWbxp.js";import{T as at,g as P}from"./utils-BkwWHdx-.js";import{u as lt}from"./useTimeout-BN_3i7zA.js";import{u as pt}from"./useForkRef-rM2yqL0Y.js";function dt(i){return tt("MuiCollapse",i)}_("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const ut=i=>{const{orientation:e,classes:o}=i,h={root:["root",`${e}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${e}`],wrapperInner:["wrapperInner",`${e}`]};return ot(h,dt,o)},ct=R("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(i,e)=>{const{ownerState:o}=i;return[e.root,e[o.orientation],o.state==="entered"&&e.entered,o.state==="exited"&&!o.in&&o.collapsedSize==="0px"&&e.hidden]}})(et(({theme:i})=>({height:0,overflow:"hidden",transition:i.transitions.create("height"),variants:[{props:{orientation:"horizontal"},style:{height:"auto",width:0,transition:i.transitions.create("width")}},{props:{state:"entered"},style:{height:"auto",overflow:"visible"}},{props:{state:"entered",orientation:"horizontal"},style:{width:"auto"}},{props:({ownerState:e})=>e.state==="exited"&&!e.in&&e.collapsedSize==="0px",style:{visibility:"hidden"}}]}))),ht=R("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(i,e)=>e.wrapper})({display:"flex",width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),mt=R("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(i,e)=>e.wrapperInner})({width:"100%",variants:[{props:{orientation:"horizontal"},style:{width:"auto",height:"100%"}}]}),U=y.forwardRef(function(e,o){const h=nt({props:e,name:"MuiCollapse"}),{addEndListener:S,children:A,className:L,collapsedSize:m="0px",component:b,easing:T,in:D,onEnter:$,onEntered:W,onEntering:j,onExit:I,onExited:k,onExiting:M,orientation:F="vertical",style:C,timeout:s=rt.standard,TransitionComponent:q=at,...B}=h,f={...h,orientation:F,collapsedSize:m},p=ut(f),H=st(),G=lt(),a=y.useRef(null),v=y.useRef(),g=typeof m=="number"?`${m}px`:m,d=F==="horizontal",u=d?"width":"height",x=y.useRef(null),J=pt(o,x),l=t=>n=>{if(t){const r=x.current;n===void 0?t(r):t(r,n)}},z=()=>a.current?a.current[d?"clientWidth":"clientHeight"]:0,K=l((t,n)=>{a.current&&d&&(a.current.style.position="absolute"),t.style[u]=g,$&&$(t,n)}),O=l((t,n)=>{const r=z();a.current&&d&&(a.current.style.position="");const{duration:c,easing:w}=P({style:C,timeout:s,easing:T},{mode:"enter"});if(s==="auto"){const N=H.transitions.getAutoHeightDuration(r);t.style.transitionDuration=`${N}ms`,v.current=N}else t.style.transitionDuration=typeof c=="string"?c:`${c}ms`;t.style[u]=`${r}px`,t.style.transitionTimingFunction=w,j&&j(t,n)}),Q=l((t,n)=>{t.style[u]="auto",W&&W(t,n)}),V=l(t=>{t.style[u]=`${z()}px`,I&&I(t)}),X=l(k),Y=l(t=>{const n=z(),{duration:r,easing:c}=P({style:C,timeout:s,easing:T},{mode:"exit"});if(s==="auto"){const w=H.transitions.getAutoHeightDuration(n);t.style.transitionDuration=`${w}ms`,v.current=w}else t.style.transitionDuration=typeof r=="string"?r:`${r}ms`;t.style[u]=g,t.style.transitionTimingFunction=c,M&&M(t)}),Z=t=>{s==="auto"&&G.start(v.current||0,t),S&&S(x.current,t)};return E.jsx(q,{in:D,onEnter:K,onEntered:Q,onEntering:O,onExit:V,onExited:X,onExiting:Y,addEndListener:Z,nodeRef:x,timeout:s==="auto"?null:s,...B,children:(t,n)=>E.jsx(ct,{as:b,className:it(p.root,L,{entered:p.entered,exited:!D&&g==="0px"&&p.hidden}[t]),style:{[d?"minWidth":"minHeight"]:g,...C},ref:J,...n,ownerState:{...f,state:t},children:E.jsx(ht,{ownerState:{...f,state:t},className:p.wrapper,ref:a,children:E.jsx(mt,{ownerState:{...f,state:t},className:p.wrapperInner,children:A})})})})});U&&(U.muiSupportAuto=!0);export{U as C};
