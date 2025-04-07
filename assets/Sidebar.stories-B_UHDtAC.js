import{j as t}from"./jsx-runtime-DiklIkkE.js";import{r as c}from"./index-DRjF_FHU.js";import{S as m}from"./Sidebar-Cmqdx4pa.js";import{B as o}from"./Box-DZzghkYk.js";import{B as l}from"./Button-B5IImJss.js";import"./Drawer-B1A4BsZM.js";import"./memoTheme-BaJynKMn.js";import"./index-CMNX_ky1.js";import"./useTheme-DJacSCdl.js";import"./useSlot-ClC-LrAR.js";import"./resolveComponentProps-B0Alaaw9.js";import"./useForkRef-YSw3xV27.js";import"./mergeSlotProps-BvtBsRw5.js";import"./utils-um23Eqx5.js";import"./TransitionGroupContext-DZ8oOHtk.js";import"./index-Bx0Ph3cE.js";import"./getReactElementRef-C4YJ1n4Z.js";import"./debounce-Be36O1Ab.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-5E7VzZn4.js";import"./getScrollbarSize-CaCM53D3.js";import"./useTimeout-1sC3bvPU.js";import"./useEnhancedEffect-CvtZChyo.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BizbuZGJ.js";import"./Backdrop-DLq5-nq5.js";import"./Paper-C-vUFVpU.js";import"./extendSxProp-BY8sS3zF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-C4t5wyTG.js";import"./ButtonBase-DJUItS-t.js";import"./emotion-react.browser.esm-BpUWAXVR.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-AtwZENPD.js";const P={component:m,title:"Navigation/Sidebar",tags:["autodocs"],argTypes:{isDrawerOpen:{control:!1},toggleDrawer:{action:"toggleDrawer"},top:{control:{type:"number"},description:"Distance from top"},width:{control:{type:"number"},description:"Sidebar width when expanded"},minWidth:{control:{type:"number"},description:"Sidebar width when minimized"},hasBorder:{control:{type:"boolean"},description:"Show right border"},minView:{control:{type:"boolean"},description:"Minimized view with minWidth when closed"}}},i={render:r=>{const[e,n]=c.useState(!0),d=e?r.width??240:r.minView?r.minWidth??30:0;return t.jsxs(o,{sx:{display:"flex",width:"100%"},children:[t.jsx(m,{...r,isDrawerOpen:e,toggleDrawer:()=>n(!e),children:t.jsx(o,{p:2,children:"Sidebar content"})}),t.jsx(o,{sx:{display:"flex",alignItems:"flex-start",padding:2,marginLeft:`${d}px`},children:t.jsx(l,{variant:"contained",onClick:()=>n(!e),children:"Toggle Sidebar"})})]})},args:{top:0,width:240,minWidth:30,hasBorder:!0,minView:!0}};var p,a,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    const sidebarWidth = open ? args.width ?? 240 : args.minView ? args.minWidth ?? 30 : 0;
    return <Box sx={{
      display: 'flex',
      width: '100%'
    }}>
                <Sidebar {...args} isDrawerOpen={open} toggleDrawer={() => setOpen(!open)}>
                    <Box p={2}>Sidebar content</Box>
                </Sidebar>
                <Box sx={{
        display: 'flex',
        alignItems: 'flex-start',
        padding: 2,
        marginLeft: \`\${sidebarWidth}px\`
      }}>
                    <Button variant="contained" onClick={() => setOpen(!open)}>
                        Toggle Sidebar
                    </Button>
                </Box>
            </Box>;
  },
  args: {
    top: 0,
    width: 240,
    minWidth: 30,
    hasBorder: true,
    minView: true
  }
}`,...(s=(a=i.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const Q=["Default"];export{i as Default,Q as __namedExportsOrder,P as default};
