import{j as o}from"./extends-BZziWbxp.js";import{S as n}from"./Save-K-siYnA3.js";import{s as x,b as y,c as f}from"./storybookConst-D5qO3_Ry.js";import{L as b}from"./LoadingButton-DVnOVVRT.js";import"./index-BP8_t0zE.js";import"./createSvgIcon-Aui0-xl2.js";import"./DefaultPropsProvider-CBZfYqC6.js";import"./Template-Ns2mqNLl.js";import"./color-DCc551Ku.js";import"./index-DiL3kUBv.js";import"./index-CJDT4czw.js";import"./emotion-react.browser.esm-B5xgBJJi.js";import"./extendSxProp-igbevVD-.js";import"./Button-CNt7OGBU.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-Dyd7TCuj.js";import"./useTimeout-BN_3i7zA.js";import"./TransitionGroupContext-CV-AyoRm.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useForkRef-rM2yqL0Y.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-C-Qh5e3S.js";const H={title:"Inputs/Loading Button",tags:["autodocs"],component:b,argTypes:{label:{control:{type:"text"}},color:{options:x,control:{type:"select"}},size:{options:y,control:{type:"radio"}},variant:{options:f,control:{type:"radio"}},loading:{control:{type:"boolean"}},startIcon:{control:{disable:!0}}}},r={render:v=>o.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",width:"200px"},children:x.map(e=>o.jsx(b,{...v,color:e,label:`${e} button`,startIcon:o.jsx(n,{}),variant:"contained"},e))}),args:{label:"Button",size:"medium",color:"primary",variant:"contained",loading:!1,startIcon:o.jsx(n,{})}},a={args:{label:"Button",size:"medium",color:"primary",variant:"contained",loading:!1,startIcon:o.jsx(n,{})}},t={args:{label:"Loading...",size:"medium",color:"primary",variant:"contained",loading:!0,startIcon:o.jsx(n,{})}};var s,i,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    width: '200px'
  }}>
            {sbColor.map(color => <LoadingButtonCustom key={color} {...args} color={color} label={\`\${color} button\`} startIcon={<SaveIcon />} variant={'contained'} />)}
        </div>,
  args: {
    label: 'Button',
    size: 'medium',
    color: 'primary',
    variant: 'contained',
    loading: false,
    startIcon: <SaveIcon />
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,c,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    size: 'medium',
    color: 'primary',
    variant: 'contained',
    loading: false,
    startIcon: <SaveIcon />
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Loading...',
    size: 'medium',
    color: 'primary',
    variant: 'contained',
    loading: true,
    startIcon: <SaveIcon />
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const J=["AllColors","Default","LoadingState"];export{r as AllColors,a as Default,t as LoadingState,J as __namedExportsOrder,H as default};
