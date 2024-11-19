import{j as s}from"./extends-BZziWbxp.js";import{r as u}from"./index-BP8_t0zE.js";import{A as p}from"./AutoComplete-CWaBXLOA.js";import"./Template-Ns2mqNLl.js";import"./color-DCc551Ku.js";import"./DefaultPropsProvider-CBZfYqC6.js";import"./index-DiL3kUBv.js";import"./index-CJDT4czw.js";import"./emotion-react.browser.esm-B5xgBJJi.js";import"./extendSxProp-igbevVD-.js";import"./Autocomplete-Dei7mhuD.js";import"./Select-D70XHP7D.js";import"./FormControl-DzCLJ3jW.js";import"./useFormControl-D0zEVldg.js";import"./isMuiElement-Dj0kkBmg.js";import"./FormLabel-CC9ESZLO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./react-is.production.min-DUDD-a5e.js";import"./Menu-Cc7Ntogn.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-BxHZVQtO.js";import"./resolveComponentProps-BWlflic0.js";import"./useForkRef-rM2yqL0Y.js";import"./Modal-DlLEeJp6.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./useTimeout-BN_3i7zA.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-DB4hLLMp.js";import"./useTheme-Clt_GTdr.js";import"./utils-BkwWHdx-.js";import"./TransitionGroupContext-CV-AyoRm.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-DJkmxc1E.js";import"./getReactNodeRef-oQE-qRg8.js";import"./Portal-ntkeNcXE.js";import"./Paper-CjD7ugLR.js";import"./Grow-D6iu-O35.js";import"./MenuList-CFY98bhA.js";import"./List-5Y-w8OKN.js";import"./useSlotProps-Xloz1bZq.js";import"./useControlled-im5M3O13.js";import"./useId-BFAM3bkQ.js";import"./createSvgIcon-Aui0-xl2.js";import"./useThemeProps-Fza24uaV.js";import"./Close-DTBGyth8.js";import"./IconButton-BDlNDlr2.js";import"./ButtonBase-Dyd7TCuj.js";import"./assertThisInitialized-B9jnkVVz.js";import"./isFocusVisible-B8k4qzLc.js";import"./Popper-IylyG_a3.js";import"./Chip-U95mO3hU.js";import"./TextField-DHdgz8BJ.js";import"./FormHelperText-BVmhIkSj.js";import"./Box-DNx4V9Lx.js";import"./Typography-Chqap8zl.js";const Ao={title:"Inputs/AutoComplete",tags:["autodocs"],component:p,argTypes:{options:{control:{type:"object"}},label:{control:{type:"text"}},value:{control:{type:"object"}},onChange:{action:"changed"}}},o={render:m=>{const[i,a]=u.useState(null),l=n=>{a(n)};return s.jsx(p,{label:"Select an option",options:m.options,value:i,onChange:l})},args:{options:[{value:"primary",label:"Primary"},{value:"secondary",label:"Secondary"}],label:"Select an option"}};var t,e,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    const [autoValue, setAutoValue] = useState<AutoCompleteOptions | null>(null);
    const handleChangeAutoComplete = (newValue: AutoCompleteOptions | null): void => {
      setAutoValue(newValue);
    };
    return <AutoCompleteCustom label="Select an option" options={args.options} value={autoValue} onChange={handleChangeAutoComplete} />;
  },
  args: {
    options: [{
      value: 'primary',
      label: 'Primary'
    }, {
      value: 'secondary',
      label: 'Secondary'
    }] as AutoCompleteOptions[],
    label: 'Select an option'
  }
}`,...(r=(e=o.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const yo=["Default"];export{o as Default,yo as __namedExportsOrder,Ao as default};
