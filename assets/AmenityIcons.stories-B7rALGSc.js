import{j as c}from"./jsx-runtime-DiklIkkE.js";import{r as u}from"./index-DRjF_FHU.js";import{b as p}from"./iconList-CRlvCHrw.js";import{A as n}from"./AmenityIcons-BIbNmNf3.js";import"./Wifi-_OiSCmZP.js";import"./createSvgIcon-Bbh683OF.js";import"./memoTheme-BaJynKMn.js";import"./Template-Cay0yqF_.js";import"./color-EH4scy8d.js";import"./index-CMNX_ky1.js";import"./useEnhancedEffect-CvtZChyo.js";import"./index-DOKlo5zk.js";import"./extendSxProp-BY8sS3zF.js";import"./emotion-react.browser.esm-BpUWAXVR.js";import"./Autocomplete-cIoI2Rnh.js";import"./Select-D7D8iVG0.js";import"./Menu-DEbftHD8.js";import"./useSlot-ClC-LrAR.js";import"./resolveComponentProps-B0Alaaw9.js";import"./useForkRef-YSw3xV27.js";import"./useSlotProps-R9J2jDbn.js";import"./Popover-Be9H75-t.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-OGmlZpoI.js";import"./useTheme-DJacSCdl.js";import"./utils-um23Eqx5.js";import"./TransitionGroupContext-DZ8oOHtk.js";import"./index-Bx0Ph3cE.js";import"./useTimeout-1sC3bvPU.js";import"./getReactElementRef-C4YJ1n4Z.js";import"./mergeSlotProps-BvtBsRw5.js";import"./Modal-5E7VzZn4.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BizbuZGJ.js";import"./Backdrop-DLq5-nq5.js";import"./Paper-C-vUFVpU.js";import"./MenuList-B_WMETQe.js";import"./List-CHLl4BWb.js";import"./utils-DK5FnA_s.js";import"./useControlled-DEjX-IBh.js";import"./useId-C4t5wyTG.js";import"./useFormControl-Dg_6gn_i.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Close-B92_nBD5.js";import"./Popper-BlCi53e5.js";import"./Chip-DL9GiYLW.js";import"./ButtonBase-DJUItS-t.js";import"./isFocusVisible-B8k4qzLc.js";import"./IconButton-C0ZkeAlp.js";import"./CircularProgress-AtwZENPD.js";import"./Box-DZzghkYk.js";import"./Typography-jz8gJ3s3.js";import"./TextField-DSlX4QHJ.js";import"./InputLabel-DFrKIk9p.js";import"./FormLabel-CADJQDhi.js";import"./FormHelperText-DVi_bzg8.js";import"./FormControl-Du_wUusS.js";import"./isMuiElement-BEUb1M5Y.js";const Vt={title:"Factory/Amenity Icons",component:n,argTypes:{label:{control:"text"},value:{control:"select",options:p.map(t=>t.value)},onChange:{action:"selected"}}},e={render:t=>{const[a,l]=u.useState(t.value),s=o=>{l(o),t.onChange&&t.onChange(o)};return c.jsx(n,{...t,value:a,onChange:s})},args:{label:"Select an Amenity",value:p[0].value}};var r,m,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = useState(args.value);
    const handleChange = (newSelectedValue: string | null) => {
      setSelectedValue(newSelectedValue!);
      if (args.onChange) {
        args.onChange(newSelectedValue);
      }
    };
    return <AmenityIcons {...args} value={selectedValue} onChange={handleChange} />;
  },
  args: {
    label: 'Select an Amenity',
    value: amenityOptions[0].value
  }
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const xt=["Default"];export{e as Default,xt as __namedExportsOrder,Vt as default};
