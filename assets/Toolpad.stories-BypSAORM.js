import{j as o}from"./jsx-runtime-DiklIkkE.js";import{r as p}from"./index-DRjF_FHU.js";import{c as e}from"./createSvgIcon-Bbh683OF.js";import{T as x}from"./Toolpad-BVqXLKif.js";import{B as s}from"./Box-DZzghkYk.js";import{B as f}from"./Button-B5IImJss.js";import{P as u}from"./Popper-BlCi53e5.js";import"./memoTheme-BaJynKMn.js";import"./List-CHLl4BWb.js";import"./ListItemIcon-C4t3UTvh.js";import"./listItemButtonClasses-CiCTDL2d.js";import"./useEnhancedEffect-CvtZChyo.js";import"./useForkRef-YSw3xV27.js";import"./ButtonBase-DJUItS-t.js";import"./useTimeout-1sC3bvPU.js";import"./TransitionGroupContext-DZ8oOHtk.js";import"./emotion-react.browser.esm-BpUWAXVR.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemIconClasses-D4nOrAse.js";import"./ListItemText-cYRvFack.js";import"./listItemTextClasses-BcoAy0f1.js";import"./useSlot-ClC-LrAR.js";import"./resolveComponentProps-B0Alaaw9.js";import"./Typography-jz8gJ3s3.js";import"./index-DOKlo5zk.js";import"./extendSxProp-BY8sS3zF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ExpandLess-BlI1F6C-.js";import"./ExpandMore-DCC1vlSA.js";import"./Collapse-BQP7xn8V.js";import"./useTheme-DJacSCdl.js";import"./utils-um23Eqx5.js";import"./index-Bx0Ph3cE.js";import"./Tooltip-CQaTzqLN.js";import"./index-CMNX_ky1.js";import"./useControlled-DEjX-IBh.js";import"./useId-C4t5wyTG.js";import"./getReactElementRef-C4YJ1n4Z.js";import"./Grow-OGmlZpoI.js";import"./Divider-Dkta2SrK.js";import"./dividerClasses-uajcN7Go.js";import"./Popover-Be9H75-t.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BvtBsRw5.js";import"./Modal-5E7VzZn4.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BizbuZGJ.js";import"./Backdrop-DLq5-nq5.js";import"./Paper-C-vUFVpU.js";import"./MenuItem-CcYSG5JI.js";import"./Drawer-B1A4BsZM.js";import"./CircularProgress-AtwZENPD.js";import"./useSlotProps-R9J2jDbn.js";const b=e(o.jsx("path",{d:"M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z"}),"BarChart"),g=e(o.jsx("path",{d:"M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"}),"Dashboard"),j=e(o.jsx("path",{d:"m11.99 18.54-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27z"}),"Layers"),a=e(o.jsx("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2M1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"}),"ShoppingCart"),Io={component:x,title:"Navigation/Toolpad",tags:["autodocs"]},v=[{title:"Main items",items:[{key:"dashboard",label:"Dashboard",icon:o.jsx(g,{})},{key:"orders",label:"Orders",icon:o.jsx(a,{})}]},{title:"Analytics",items:[{key:"reports",label:"Reports",icon:o.jsx(b,{}),children:new Array(12).fill(null).map((i,r)=>({key:`report-${r}`,label:`Report ${r+1}`,icon:o.jsx(a,{})}))},{key:"integrations1",label:"Integrations1",icon:o.jsx(j,{})}]}];function y(){const i=p.useRef(null),[r,d]=p.useState(!1),c=()=>{d(h=>!h)};return o.jsxs(s,{sx:{padding:"16px",position:"relative",zIndex:10},children:[o.jsx(f,{ref:i,onClick:c,variant:"contained",size:"small",children:"Toggle Popper"}),o.jsx(u,{open:r,anchorEl:i.current,placement:"top",disablePortal:!1,sx:{zIndex:1500},children:o.jsx(s,{sx:{p:1,bgcolor:"white",border:"1px solid #ccc",boxShadow:3},children:"Hello from Popper"})})]})}const t={args:{isOpen:!0,items:v,width:240,collapsedWidth:56,top:0,selectedColor:"#429d06",selectedKey:"dashboard",backgroundColor:"#d1f6b9",header:o.jsx("div",{style:{padding:"16px"},children:"Header"}),footer:o.jsx(y,{}),fontColor:"#a84646"}};var m,n,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    items: items,
    width: 240,
    collapsedWidth: 56,
    top: 0,
    selectedColor: '#429d06',
    selectedKey: 'dashboard',
    backgroundColor: '#d1f6b9',
    header: <div style={{
      padding: '16px'
    }}>Header</div>,
    footer: <FooterWithPopper />,
    fontColor: '#a84646'
  }
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const Po=["Default"];export{t as Default,Po as __namedExportsOrder,Io as default};
