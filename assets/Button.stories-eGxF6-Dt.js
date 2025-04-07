import{j as o}from"./jsx-runtime-DiklIkkE.js";import{S as n}from"./Save-wusukJiy.js";import{b as y,c as f,s as x}from"./storybookConst-Bo-6dAYS.js";import{L as b}from"./LoadingButton-BQFoiTfK.js";import"./index-DRjF_FHU.js";import"./createSvgIcon-Bbh683OF.js";import"./memoTheme-BaJynKMn.js";import"./Template-Cay0yqF_.js";import"./color-EH4scy8d.js";import"./index-CMNX_ky1.js";import"./useEnhancedEffect-CvtZChyo.js";import"./index-DOKlo5zk.js";import"./extendSxProp-BY8sS3zF.js";import"./emotion-react.browser.esm-BpUWAXVR.js";import"./Button-B5IImJss.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-C4t5wyTG.js";import"./ButtonBase-DJUItS-t.js";import"./useTimeout-1sC3bvPU.js";import"./TransitionGroupContext-DZ8oOHtk.js";import"./useForkRef-YSw3xV27.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-AtwZENPD.js";const H={title:"Inputs/Loading Button",tags:["autodocs"],component:b,argTypes:{label:{control:{type:"text"}},color:{options:x,control:{type:"select"}},size:{options:f,control:{type:"radio"}},variant:{options:y,control:{type:"radio"}},loading:{control:{type:"boolean"}},startIcon:{control:{disable:!0}}}},r={render:v=>o.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",width:"200px"},children:x.map(e=>o.jsx(b,{...v,color:e,label:`${e} button`,startIcon:o.jsx(n,{}),variant:"contained"},e))}),args:{label:"Button",size:"medium",color:"primary",variant:"contained",loading:!1,startIcon:o.jsx(n,{})}},a={args:{label:"Button",size:"medium",color:"primary",variant:"contained",loading:!1,startIcon:o.jsx(n,{})}},t={args:{label:"Loading...",size:"medium",color:"primary",variant:"contained",loading:!0,startIcon:o.jsx(n,{})}};var s,i,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
