import{j as e}from"./extends-BZziWbxp.js";import{r as u}from"./index-BP8_t0zE.js";import{E as x}from"./ExpandMore-DLQEc8bE.js";import{c as i}from"./color-DCc551Ku.js";import{B as s}from"./Box-DNx4V9Lx.js";import{B as f}from"./Button-CNt7OGBU.js";import{T as g}from"./Typography-Chqap8zl.js";import{c as y}from"./createSvgIcon-Aui0-xl2.js";import{M as h}from"./Menu-Cc7Ntogn.js";import{M as j}from"./MenuItem-B3fhY3LG.js";const k=y(e.jsx("path",{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z"}),"VerifiedUser");function v({items:a,title:l}){const[r,t]=u.useState(null),m=n=>{t(n.currentTarget)},o=()=>{t(null)};return e.jsxs(s,{sx:{display:"inline-block"},children:[e.jsxs(f,{onClick:m,sx:{textTransform:"none",display:"flex",alignItems:"center",backgroundColor:i.primary.main,color:i.light,borderRadius:10},children:[e.jsxs(g,{variant:"body1",sx:{marginRight:"8px",marginLeft:"8px",fontSize:14,display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx(k,{fontSize:"small"})," ",e.jsx(e.Fragment,{children:l})]}),e.jsx(x,{sx:{transition:"transform 0.3s",transform:r?"rotate(180deg)":"rotate(0deg)"}})]}),e.jsx(h,{anchorEl:r,open:!!r,onClose:o,children:a.map(({label:n,icon:c,onClick:p},d)=>e.jsxs(j,{onClick:()=>{p(),o()},sx:{display:"flex",alignItems:"center",fontSize:14},children:[e.jsx(s,{component:"span",sx:{mr:1,display:"flex"},children:c}),n]},d))})]})}v.__docgenInfo={description:"",methods:[],displayName:"Account",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    label: string;
    icon: ReactNode;
    onClick: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]}}],raw:"LoginItem[]"},description:""},title:{required:!0,tsType:{name:"string"},description:""}}};export{v as A};
