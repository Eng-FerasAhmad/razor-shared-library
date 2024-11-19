import{j as o}from"./extends-BZziWbxp.js";import{r as a}from"./index-BP8_t0zE.js";import{M as m}from"./Menu-BT9BlJkU.js";import{B as l}from"./Button-CNt7OGBU.js";import"./Template-Ns2mqNLl.js";import"./color-DCc551Ku.js";import"./DefaultPropsProvider-CBZfYqC6.js";import"./index-DiL3kUBv.js";import"./index-CJDT4czw.js";import"./emotion-react.browser.esm-B5xgBJJi.js";import"./extendSxProp-igbevVD-.js";import"./Box-DNx4V9Lx.js";import"./Popper-IylyG_a3.js";import"./ownerDocument-DW-IO8s5.js";import"./Portal-ntkeNcXE.js";import"./index-DJkmxc1E.js";import"./useForkRef-rM2yqL0Y.js";import"./getReactNodeRef-oQE-qRg8.js";import"./useTimeout-BN_3i7zA.js";import"./useSlotProps-Xloz1bZq.js";import"./resolveComponentProps-BWlflic0.js";import"./Grow-D6iu-O35.js";import"./useTheme-Clt_GTdr.js";import"./utils-BkwWHdx-.js";import"./TransitionGroupContext-CV-AyoRm.js";import"./inheritsLoose-DR8r8Ogv.js";import"./Paper-CjD7ugLR.js";import"./ClickAwayListener-CGILwLL6.js";import"./MenuList-CFY98bhA.js";import"./react-is.production.min-DUDD-a5e.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./List-5Y-w8OKN.js";import"./MenuItem-B3fhY3LG.js";import"./ButtonBase-Dyd7TCuj.js";import"./assertThisInitialized-B9jnkVVz.js";import"./isFocusVisible-B8k4qzLc.js";import"./dividerClasses-1cIsuIxJ.js";import"./listItemTextClasses-1go-Qm1c.js";import"./listItemIconClasses-BVYrFuto.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const $={component:m,title:"Navigation/Menu",tags:["autodocs"],argTypes:{items:{control:{type:"object"},description:"Array of menu items with title and action"},selected:{control:{type:"text"},description:"The currently selected menu item"},anchor:{control:{type:"text"},description:"The element that triggers the menu"}}},d=[{title:"Item 1",action:()=>console.log("Item 1 clicked")},{title:"Item 2",action:()=>console.log("Item 2 clicked")},{title:"Item 3",action:()=>console.log("Item 3 clicked")}],e={render:()=>{const[p,s]=a.useState(void 0),c=t=>{s(t)};return o.jsx(m,{items:d.map(t=>({...t,action:()=>{c(t.title),t.action()}})),selected:p,anchor:o.jsx(l,{variant:"contained",children:"Open Menu"})})}};var i,r,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
