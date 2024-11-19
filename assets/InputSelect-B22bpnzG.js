import{j as e}from"./extends-BZziWbxp.js";import{T as f}from"./Template-Ns2mqNLl.js";import{F as h}from"./FormControl-DzCLJ3jW.js";import{I as x,S as T}from"./Select-D70XHP7D.js";import{M as s}from"./MenuItem-B3fhY3LG.js";import{F as v}from"./FormHelperText-BVmhIkSj.js";function y({value:a,items:i,label:r,noneValue:l,helperText:n,error:m,disabled:o,handleChange:d,size:p="small",formControlSx:u,selectSx:c}){return e.jsx(f,{children:e.jsxs(h,{sx:{width:"100%",...u},size:p,"data-testid":"input-select-form",children:[r&&e.jsx(x,{id:"input-select-label",children:r}),e.jsxs(T,{labelId:r?"input-select-label":void 0,id:"input-select",value:a,label:r||void 0,error:m,disabled:o,onChange:d,sx:{width:"100%",...c},children:[l&&e.jsx(s,{value:"",children:e.jsx("em",{children:"None"})}),i.map(t=>e.jsx(s,{value:t.value,children:t.label},t.value))]}),n&&e.jsx(v,{children:n})]})})}y.__docgenInfo={description:"",methods:[],displayName:"InputSelect",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"SelectItems"}],raw:"SelectItems[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},noneValue:{required:!1,tsType:{name:"boolean"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},handleChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: SelectChangeEvent) => void",signature:{arguments:[{type:{name:"SelectChangeEvent"},name:"event"}],return:{name:"void"}}},description:""},formControlSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""},selectSx:{required:!1,tsType:{name:"SxProps",elements:[{name:"Theme"}],raw:"SxProps<Theme>"},description:""}}};export{y as I};
