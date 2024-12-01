import{j as o}from"./extends-BZziWbxp.js";import{T as z}from"./Template-Ns2mqNLl.js";import{r as i}from"./index-BP8_t0zE.js";import"./react-is.production.min-DUDD-a5e.js";import{s as p,m as P,L as R,g as T,b as A,u as E,c as $,a as L}from"./DefaultPropsProvider-CBZfYqC6.js";import{c as v}from"./createSvgIcon-Aui0-xl2.js";import{B as U}from"./ButtonBase-Dyd7TCuj.js";import{T as q}from"./Typography-Chqap8zl.js";import{u as H}from"./useSlotProps-Xloz1bZq.js";const O=v(o.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),_=p(U)(P(({theme:e})=>({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`,...e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},borderRadius:2,"&:hover, &:focus":{...e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}},"&:active":{boxShadow:e.shadows[0],...e.palette.mode==="light"?{backgroundColor:R(e.palette.grey[200],.12)}:{backgroundColor:R(e.palette.grey[600],.12)}}}))),D=p(O)({width:24,height:16});function V(e){const{slots:r={},slotProps:a={},...l}=e,t=e;return o.jsx("li",{children:o.jsx(_,{focusRipple:!0,...l,ownerState:t,children:o.jsx(D,{as:r.CollapsedIcon,ownerState:t,...a.collapsedIcon})})})}function W(e){return A("MuiBreadcrumbs",e)}const F=T("MuiBreadcrumbs",["root","ol","li","separator"]),G=e=>{const{classes:r}=e;return L({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},W,r)},J=p(q,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${F.li}`]:r.li},r.root]})({}),K=p("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),Q=p("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function X(e,r,a,l){return e.reduce((t,d,n)=>(n<e.length-1?t=t.concat(d,o.jsx(Q,{"aria-hidden":!0,className:r,ownerState:l,children:a},`separator-${n}`)):t.push(d),t),[])}const Y=i.forwardRef(function(r,a){const l=E({props:r,name:"MuiBreadcrumbs"}),{children:t,className:d,component:n="nav",slots:h={},slotProps:I={},expandText:C="Show path",itemsAfterCollapse:m=1,itemsBeforeCollapse:g=1,maxItems:f=8,separator:y="/",...N}=l,[B,M]=i.useState(!1),c={...l,component:n,expanded:B,expandText:C,itemsAfterCollapse:m,itemsBeforeCollapse:g,maxItems:f,separator:y},u=G(c),w=H({elementType:h.CollapsedIcon,externalSlotProps:I.collapsedIcon,ownerState:c}),S=i.useRef(null),k=s=>{const x=()=>{M(!0);const j=S.current.querySelector("a[href],button,[tabindex]");j&&j.focus()};return g+m>=s.length?s:[...s.slice(0,g),o.jsx(V,{"aria-label":C,slots:{CollapsedIcon:h.CollapsedIcon},slotProps:{collapsedIcon:w},onClick:x},"ellipsis"),...s.slice(s.length-m,s.length)]},b=i.Children.toArray(t).filter(s=>i.isValidElement(s)).map((s,x)=>o.jsx("li",{className:u.li,children:s},`child-${x}`));return o.jsx(J,{ref:a,component:n,color:"textSecondary",className:$(u.root,d),ownerState:c,...N,children:o.jsx(K,{className:u.ol,ref:S,ownerState:c,children:X(B||f&&b.length<=f?b:k(b),u.separator,y,c)})})}),Z=v(o.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");function ee({breadcrumbs:e}){return o.jsx(z,{children:o.jsx(Y,{separator:o.jsx(Z,{fontSize:"small"}),"aria-label":"breadcrumb",children:e})})}ee.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbsCustom",props:{breadcrumbs:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:""}}};export{ee as B};