import{j as s}from"./extends-BZziWbxp.js";import{r as u}from"./index-BP8_t0zE.js";import{A as p}from"./AutoComplete-Dqbvoy8V.js";import"./DefaultPropsProvider-DxvFDAWb.js";import"./Select-CIonjM_E.js";import"./FormControl-CusreTAk.js";import"./useFormControl-D0zEVldg.js";import"./isMuiElement-Dj0kkBmg.js";import"./FormLabel-D8sXu6X5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./react-is.production.min-DUDD-a5e.js";import"./index-DiL3kUBv.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-CS9Hjkn7.js";import"./resolveComponentProps-DHklS2if.js";import"./useForkRef-rM2yqL0Y.js";import"./Modal-TQRt1t6b.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./useTimeout-BN_3i7zA.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-YCJc7QQp.js";import"./useTheme-Dw8ftt5g.js";import"./utils-BkwWHdx-.js";import"./TransitionGroupContext-CV-AyoRm.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-DJkmxc1E.js";import"./getReactNodeRef-oQE-qRg8.js";import"./Portal-ntkeNcXE.js";import"./Paper-Rl8hdvmC.js";import"./Grow-BOZvbti8.js";import"./MenuList-B6jC0jSN.js";import"./List-DXUuoEiS.js";import"./useSlotProps-0C5KtUUD.js";import"./useControlled-im5M3O13.js";import"./useId-BFAM3bkQ.js";import"./createSvgIcon-KETvyI5g.js";import"./useThemeProps-CrUyzxcA.js";import"./index-FTyV09dj.js";import"./emotion-react.browser.esm-DJu5jVRJ.js";import"./extendSxProp-sjffJwDd.js";import"./Close-QwQXuP9T.js";import"./IconButton-BvTLGHZA.js";import"./ButtonBase-92e3o3lK.js";import"./assertThisInitialized-B9jnkVVz.js";import"./isFocusVisible-B8k4qzLc.js";import"./Popper-VpJu-8PJ.js";import"./Chip-CTeO5tof.js";import"./TextField-CclMAwaS.js";import"./Box-xH84Ieso.js";import"./Typography-DhmeVqhj.js";const so={title:"Inputs/AutoComplete",tags:["autodocs"],component:p,argTypes:{options:{control:{type:"object"}},label:{control:{type:"text"}},value:{control:{type:"object"}},onChange:{action:"changed"}}},o={render:a=>{const[m,i]=u.useState(null),l=n=>{i(n)};return s.jsx(p,{label:"Select an option",options:a.options,value:m,onChange:l})},args:{options:[{value:"primary",label:"Primary"},{value:"secondary",label:"Secondary"}],label:"Select an option"}};var t,e,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(e=o.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const uo=["Default"];export{o as Default,uo as __namedExportsOrder,so as default};
