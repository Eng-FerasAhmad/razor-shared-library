import{j as t}from"./extends-BZziWbxp.js";import{r as o}from"./index-BP8_t0zE.js";import{b as g}from"./iconList-DZspRHvr.js";import{T as x}from"./Template-Ns2mqNLl.js";import{A as h}from"./Autocomplete-Dei7mhuD.js";import{T as y}from"./TextField-DHdgz8BJ.js";import{B as I}from"./Box-DNx4V9Lx.js";import{T}from"./Typography-Chqap8zl.js";function b({label:u,value:i,onChange:l}){const r=g,[m,a]=o.useState(""),[p,s]=o.useState(null);o.useEffect(()=>{const n=r.find(e=>e.value===i);n?(a(n.label),s(n)):(a(""),s(null))},[i,r]);const c=(n,e)=>{a(e)},d=(n,e)=>{e?(l(e.value),s(e)):(l(null),s(null))};return t.jsx(x,{children:t.jsx(h,{"data-testid":"auto-complete",disablePortal:!1,id:"auto-complete",options:r,sx:{width:"100%"},value:p,onChange:d,inputValue:m,onInputChange:c,isOptionEqualToValue:(n,e)=>n.value===(e==null?void 0:e.value),renderInput:n=>t.jsx(y,{...n,label:u}),renderOption:(n,e)=>{const{key:j,...f}=n;return t.jsxs(I,{component:"li",sx:{display:"flex",alignItems:"center",gap:"10px"},...f,children:[e.icon,t.jsx(T,{children:e.label})]},e.value)}})})}b.__docgenInfo={description:"",methods:[],displayName:"AmenityIcons",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedIconName: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"selectedIconName"}],return:{name:"void"}}},description:""}}};export{b as A};