import{j as o}from"./jsx-runtime-DiklIkkE.js";import{r as a}from"./index-DRjF_FHU.js";import{M as m}from"./Menu-CbCarLqo.js";import{B as l}from"./Button-B5IImJss.js";import"./Template-Cay0yqF_.js";import"./color-EH4scy8d.js";import"./memoTheme-BaJynKMn.js";import"./index-CMNX_ky1.js";import"./useEnhancedEffect-CvtZChyo.js";import"./index-DOKlo5zk.js";import"./extendSxProp-BY8sS3zF.js";import"./emotion-react.browser.esm-BpUWAXVR.js";import"./Box-DZzghkYk.js";import"./Popper-BlCi53e5.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-BizbuZGJ.js";import"./index-Bx0Ph3cE.js";import"./useForkRef-YSw3xV27.js";import"./getReactElementRef-C4YJ1n4Z.js";import"./useSlotProps-R9J2jDbn.js";import"./resolveComponentProps-B0Alaaw9.js";import"./Grow-OGmlZpoI.js";import"./useTheme-DJacSCdl.js";import"./utils-um23Eqx5.js";import"./TransitionGroupContext-DZ8oOHtk.js";import"./useTimeout-1sC3bvPU.js";import"./Paper-C-vUFVpU.js";import"./ClickAwayListener-DcIDULlp.js";import"./MenuList-B_WMETQe.js";import"./getScrollbarSize-CaCM53D3.js";import"./ownerWindow-HkKU3E4x.js";import"./List-CHLl4BWb.js";import"./MenuItem-CcYSG5JI.js";import"./ButtonBase-DJUItS-t.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemIconClasses-D4nOrAse.js";import"./listItemTextClasses-BcoAy0f1.js";import"./dividerClasses-uajcN7Go.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-C4t5wyTG.js";import"./CircularProgress-AtwZENPD.js";const tt={component:m,title:"Navigation/Menu",tags:["autodocs"],argTypes:{items:{control:{type:"object"},description:"Array of menu items with title and action"},selected:{control:{type:"text"},description:"The currently selected menu item"},anchor:{control:{type:"text"},description:"The element that triggers the menu"}}},d=[{title:"Item 1",action:()=>console.log("Item 1 clicked")},{title:"Item 2",action:()=>console.log("Item 2 clicked")},{title:"Item 3",action:()=>console.log("Item 3 clicked")}],e={render:()=>{const[p,s]=a.useState(void 0),c=t=>{s(t)};return o.jsx(m,{items:d.map(t=>({...t,action:()=>{c(t.title),t.action()}})),selected:p,anchor:o.jsx(l,{variant:"contained",children:"Open Menu"})})}};var i,r,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string | undefined>(undefined);
    const handleItemClick = (title: string) => {
      setSelected(title);
    };
    return <MenuCustom items={sampleItems.map(item => ({
      ...item,
      action: () => {
        handleItemClick(item.title);
        item.action();
      }
    }))} selected={selected} anchor={<Button variant={'contained'}>Open Menu</Button>} />;
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const et=["Default"];export{e as Default,et as __namedExportsOrder,tt as default};
