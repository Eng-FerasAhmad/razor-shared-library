import{j as r}from"./extends-BZziWbxp.js";import{T as m}from"./Template-L755xNcz.js";import{B as u}from"./Box-xH84Ieso.js";import{r as c}from"./index-BP8_t0zE.js";import{g as l,a as f,s as C,e as x,f as h,h as g}from"./DefaultPropsProvider-DxvFDAWb.js";import{P as y}from"./Paper-Rl8hdvmC.js";import{B as v}from"./Button-K2ClDcqh.js";function j(s){return f("MuiCard",s)}l("MuiCard",["root"]);const w=s=>{const{classes:t}=s;return g({root:["root"]},j,t)},R=C(y,{name:"MuiCard",slot:"Root",overridesResolver:(s,t)=>t.root})({overflow:"hidden"}),T=c.forwardRef(function(t,o){const e=x({props:t,name:"MuiCard"}),{className:i,raised:a=!1,...d}=e,n={...e,raised:a},p=w(n);return r.jsx(R,{className:h(p.root,i),elevation:a?8:void 0,ref:o,ownerState:n,...d})});function B({width:s,height:t,actionButton:o,actionButtonLabel:e,children:i,...a}){return r.jsx(m,{children:r.jsxs(u,{sx:{display:"flex",flexDirection:"column",width:"fit-content"},children:[r.jsx(T,{"data-testid":"card",...a,sx:{fontFamily:"inherit",padding:2,width:s,height:t,margin:"auto",borderRadius:5},children:i}),e&&r.jsx(v,{sx:{width:"fit-content",margin:"15px auto",height:"35px",borderRadius:5},onClick:o,variant:"outlined",children:e})]})})}B.__docgenInfo={description:"",methods:[],displayName:"CardCustom",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},actionButtonLabel:{required:!1,tsType:{name:"string"},description:""},actionButton:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["CardProps"]};export{B as C};
