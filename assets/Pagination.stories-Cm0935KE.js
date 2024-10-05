import{j as u}from"./extends-BZziWbxp.js";import{r as d}from"./index-BP8_t0zE.js";import{P as s}from"./Pagination-wDs6hLXW.js";import"./Template-L755xNcz.js";import"./color-CPEZdfOT.js";import"./DefaultPropsProvider-DxvFDAWb.js";import"./index-DiL3kUBv.js";import"./index-FTyV09dj.js";import"./emotion-react.browser.esm-DJu5jVRJ.js";import"./extendSxProp-sjffJwDd.js";import"./useControlled-im5M3O13.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-KETvyI5g.js";import"./useSlot-CS9Hjkn7.js";import"./resolveComponentProps-DHklS2if.js";import"./useForkRef-rM2yqL0Y.js";import"./ButtonBase-92e3o3lK.js";import"./useTimeout-BN_3i7zA.js";import"./TransitionGroupContext-CV-AyoRm.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./isFocusVisible-B8k4qzLc.js";const B={component:s,title:"Navigation/Pagination",tags:["autodocs"],argTypes:{count:{control:{type:"number"},description:"Total number of pages to display"},onChange:{action:"changed",description:"Function to call when the page changes"},color:{control:{type:"select",options:["primary","secondary"]},description:"Color of the pagination"}}},e={render:()=>{const[n,t]=d.useState(1),r=(h,a)=>{t(a),console.log(n)};return u.jsx(s,{count:10,onChange:r,color:"primary"})}},o={render:()=>{const[n,t]=d.useState(1),r=(h,a)=>{t(a),console.log(n)};return u.jsx(s,{count:10,onChange:r,color:"secondary"})}};var c,p,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
