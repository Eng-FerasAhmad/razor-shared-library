import{j as s}from"./jsx-runtime-DiklIkkE.js";import{r as u}from"./index-DRjF_FHU.js";import{A as p}from"./AutoComplete-CAluNCg6.js";import"./Template-Cay0yqF_.js";import"./color-EH4scy8d.js";import"./memoTheme-BaJynKMn.js";import"./index-CMNX_ky1.js";import"./useEnhancedEffect-CvtZChyo.js";import"./index-DOKlo5zk.js";import"./extendSxProp-BY8sS3zF.js";import"./emotion-react.browser.esm-BpUWAXVR.js";import"./Autocomplete-cIoI2Rnh.js";import"./Select-D7D8iVG0.js";import"./Menu-DEbftHD8.js";import"./useSlot-ClC-LrAR.js";import"./resolveComponentProps-B0Alaaw9.js";import"./useForkRef-YSw3xV27.js";import"./useSlotProps-R9J2jDbn.js";import"./Popover-Be9H75-t.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-OGmlZpoI.js";import"./useTheme-DJacSCdl.js";import"./utils-um23Eqx5.js";import"./TransitionGroupContext-DZ8oOHtk.js";import"./index-Bx0Ph3cE.js";import"./useTimeout-1sC3bvPU.js";import"./getReactElementRef-C4YJ1n4Z.js";import"./mergeSlotProps-BvtBsRw5.js";import"./Modal-5E7VzZn4.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BizbuZGJ.js";import"./Backdrop-DLq5-nq5.js";import"./Paper-C-vUFVpU.js";import"./MenuList-B_WMETQe.js";import"./List-CHLl4BWb.js";import"./utils-DK5FnA_s.js";import"./useControlled-DEjX-IBh.js";import"./useId-C4t5wyTG.js";import"./useFormControl-Dg_6gn_i.js";import"./createSvgIcon-Bbh683OF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Close-B92_nBD5.js";import"./Popper-BlCi53e5.js";import"./Chip-DL9GiYLW.js";import"./ButtonBase-DJUItS-t.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C0ZkeAlp.js";import"./CircularProgress-AtwZENPD.js";import"./Box-DZzghkYk.js";import"./Typography-jz8gJ3s3.js";import"./TextField-DSlX4QHJ.js";import"./InputLabel-DFrKIk9p.js";import"./FormLabel-CADJQDhi.js";import"./FormHelperText-DVi_bzg8.js";import"./FormControl-Du_wUusS.js";import"./isMuiElement-BEUb1M5Y.js";const ho={title:"Inputs/AutoComplete",tags:["autodocs"],component:p,argTypes:{options:{control:{type:"object"}},label:{control:{type:"text"}},value:{control:{type:"object"}},onChange:{action:"changed"}}},o={render:m=>{const[i,a]=u.useState(null),l=n=>{a(n)};return s.jsx(p,{label:"Select an option",options:m.options,value:i,onChange:l})},args:{options:[{value:"primary",label:"Primary"},{value:"secondary",label:"Secondary"}],label:"Select an option"}};var t,r,e;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(e=(r=o.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};const So=["Default"];export{o as Default,So as __namedExportsOrder,ho as default};
