import{r}from"./index-BP8_t0zE.js";import{g as h,b as f,s as x,u as L,c as C,a as v}from"./DefaultPropsProvider-CBZfYqC6.js";import{j as c}from"./extends-BZziWbxp.js";const P=r.createContext({});function y(s){return f("MuiList",s)}h("MuiList",["root","padding","dense","subheader"]);const M=s=>{const{classes:e,disablePadding:t,dense:o,subheader:a}=s;return v({root:["root",!t&&"padding",o&&"dense",a&&"subheader"]},y,e)},R=x("ul",{name:"MuiList",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:s})=>!s.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:s})=>s.subheader,style:{paddingTop:0}}]}),S=r.forwardRef(function(e,t){const o=L({props:e,name:"MuiList"}),{children:a,className:i,component:d="ul",dense:n=!1,disablePadding:p=!1,subheader:u,...g}=o,m=r.useMemo(()=>({dense:n}),[n]),l={...o,component:d,dense:n,disablePadding:p},b=M(l);return c.jsx(P.Provider,{value:m,children:c.jsxs(R,{as:d,className:C(b.root,i),ref:t,ownerState:l,...g,children:[u,a]})})});export{S as L,P as a};