import{j as u}from"./jsx-runtime-DiklIkkE.js";import{r as d}from"./index-DRjF_FHU.js";import{P as s}from"./Pagination-BZurow9V.js";import"./Template-Cay0yqF_.js";import"./color-EH4scy8d.js";import"./memoTheme-BaJynKMn.js";import"./index-CMNX_ky1.js";import"./useEnhancedEffect-CvtZChyo.js";import"./index-DOKlo5zk.js";import"./extendSxProp-BY8sS3zF.js";import"./emotion-react.browser.esm-BpUWAXVR.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./LastPage-C-in3qoZ.js";import"./createSvgIcon-Bbh683OF.js";import"./useSlot-ClC-LrAR.js";import"./resolveComponentProps-B0Alaaw9.js";import"./useForkRef-YSw3xV27.js";import"./ButtonBase-DJUItS-t.js";import"./useTimeout-1sC3bvPU.js";import"./TransitionGroupContext-DZ8oOHtk.js";import"./isFocusVisible-B8k4qzLc.js";import"./useControlled-DEjX-IBh.js";const B={component:s,title:"Navigation/Pagination",tags:["autodocs"],argTypes:{count:{control:{type:"number"},description:"Total number of pages to display"},onChange:{action:"changed",description:"Function to call when the page changes"},color:{control:{type:"select",options:["primary","secondary"]},description:"Color of the pagination"}}},e={render:()=>{const[n,t]=d.useState(1),r=(h,a)=>{t(a),console.log(n)};return u.jsx(s,{count:10,onChange:r,color:"primary"})}},o={render:()=>{const[n,t]=d.useState(1),r=(h,a)=>{t(a),console.log(n)};return u.jsx(s,{count:10,onChange:r,color:"secondary"})}};var c,p,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const handleChange = (_event: ChangeEvent<unknown>, value: number) => {
      setPage(value);
      console.log(page);
    };
    return <PaginationCustom count={10} onChange={handleChange} color="primary" />;
  }
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,g,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const handleChange = (_event: ChangeEvent<unknown>, value: number) => {
      setPage(value);
      console.log(page);
    };
    return <PaginationCustom count={10} onChange={handleChange} color="secondary" />;
  }
}`,...(l=(g=o.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};const G=["Default","SecondaryColor"];export{e as Default,o as SecondaryColor,G as __namedExportsOrder,B as default};
