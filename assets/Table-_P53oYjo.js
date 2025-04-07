import{j as e}from"./jsx-runtime-DiklIkkE.js";import{T as m}from"./Template-Cay0yqF_.js";import{T as o,a as c,b as p,c as t,d as i,e as u}from"./TableRow-B1XkfNAP.js";import{P as g}from"./Paper-C-vUFVpU.js";const h=({columns:l,data:s})=>e.jsx(m,{children:e.jsx(o,{component:g,children:e.jsxs(c,{sx:{minWidth:650},"aria-label":"generic table",children:[e.jsx(p,{children:e.jsx(t,{children:l.map((a,r)=>e.jsx(i,{align:a.align||"left",children:a.label},r))})}),e.jsx(u,{children:s.map((a,r)=>e.jsx(t,{sx:{"&:last-child td, &:last-child th":{border:0}},children:l.map((n,d)=>e.jsx(i,{align:n.align||"left",children:e.jsx(e.Fragment,{children:a[n.id]})},d))},r))})]})})});h.__docgenInfo={description:"",methods:[],displayName:"TableCustom",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    id: keyof T;
    label: string;
    align?: 'left' | 'center' | 'right';
}`,signature:{properties:[{key:"id",value:{name:"T",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"align",value:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}],required:!1}}]}}],raw:`{
    id: keyof T;
    label: string;
    align?: 'left' | 'center' | 'right';
}[]`},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""}}};export{h as T};
