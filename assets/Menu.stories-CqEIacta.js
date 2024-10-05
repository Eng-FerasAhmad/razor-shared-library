import{j as o}from"./extends-BZziWbxp.js";import{r as a}from"./index-BP8_t0zE.js";import{M as m}from"./Menu-BqFY1lo2.js";import{B as l}from"./Button-K2ClDcqh.js";import"./Template-L755xNcz.js";import"./color-CPEZdfOT.js";import"./DefaultPropsProvider-DxvFDAWb.js";import"./index-DiL3kUBv.js";import"./index-FTyV09dj.js";import"./emotion-react.browser.esm-DJu5jVRJ.js";import"./extendSxProp-sjffJwDd.js";import"./Box-xH84Ieso.js";import"./Popper-VpJu-8PJ.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-ntkeNcXE.js";import"./index-DJkmxc1E.js";import"./useForkRef-rM2yqL0Y.js";import"./getReactNodeRef-oQE-qRg8.js";import"./useTimeout-BN_3i7zA.js";import"./useSlotProps-0C5KtUUD.js";import"./resolveComponentProps-DHklS2if.js";import"./Grow-BOZvbti8.js";import"./useTheme-Dw8ftt5g.js";import"./utils-BkwWHdx-.js";import"./TransitionGroupContext-CV-AyoRm.js";import"./inheritsLoose-DR8r8Ogv.js";import"./Paper-Rl8hdvmC.js";import"./ClickAwayListener-CGILwLL6.js";import"./MenuList-B6jC0jSN.js";import"./react-is.production.min-DUDD-a5e.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./List-DXUuoEiS.js";import"./MenuItem-CfFRZWXz.js";import"./ButtonBase-92e3o3lK.js";import"./assertThisInitialized-B9jnkVVz.js";import"./isFocusVisible-B8k4qzLc.js";import"./dividerClasses-D91H4MQS.js";import"./listItemTextClasses-CH_dmsBj.js";import"./listItemIconClasses-DC6cww4g.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const $={component:m,title:"Navigation/Menu",tags:["autodocs"],argTypes:{items:{control:{type:"object"},description:"Array of menu items with title and action"},selected:{control:{type:"text"},description:"The currently selected menu item"},anchor:{control:{type:"text"},description:"The element that triggers the menu"}}},d=[{title:"Item 1",action:()=>console.log("Item 1 clicked")},{title:"Item 2",action:()=>console.log("Item 2 clicked")},{title:"Item 3",action:()=>console.log("Item 3 clicked")}],e={render:()=>{const[p,s]=a.useState(void 0),c=t=>{s(t)};return o.jsx(m,{items:d.map(t=>({...t,action:()=>{c(t.title),t.action()}})),selected:p,anchor:o.jsx(l,{variant:"contained",children:"Open Menu"})})}};var i,r,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const tt=["Default"];export{e as Default,tt as __namedExportsOrder,$ as default};
