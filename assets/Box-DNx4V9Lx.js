import{B as d,C as f,e as h,c as B,g as C,D as N,T as p,E as T}from"./DefaultPropsProvider-CBZfYqC6.js";import{r as g}from"./index-BP8_t0zE.js";import{j as E}from"./extends-BZziWbxp.js";import{e as j}from"./extendSxProp-igbevVD-.js";function y(r={}){const{themeId:t,defaultTheme:m,defaultClassName:o="MuiBox-root",generateClassName:a}=r,n=d("div",{shouldForwardProp:e=>e!=="theme"&&e!=="sx"&&e!=="as"})(f);return g.forwardRef(function(c,x){const s=h(m),{className:l,component:i="div",...u}=j(c);return E.jsx(n,{as:i,ref:x,className:B(l,a?a(o):o),theme:t&&s[t]||s,...u})})}const I=C("MuiBox",["root"]),M=N(),P=y({themeId:p,defaultTheme:M,defaultClassName:I.root,generateClassName:T.generate});export{P as B};