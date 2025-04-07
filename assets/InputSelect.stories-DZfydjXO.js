import{j as c}from"./jsx-runtime-DiklIkkE.js";import{r as u}from"./index-DRjF_FHU.js";import{I as l}from"./InputSelect-CBLtSovs.js";import"./Template-Cay0yqF_.js";import"./color-EH4scy8d.js";import"./memoTheme-BaJynKMn.js";import"./index-CMNX_ky1.js";import"./useEnhancedEffect-CvtZChyo.js";import"./index-DOKlo5zk.js";import"./extendSxProp-BY8sS3zF.js";import"./emotion-react.browser.esm-BpUWAXVR.js";import"./FormControl-Du_wUusS.js";import"./utils-DK5FnA_s.js";import"./useFormControl-Dg_6gn_i.js";import"./isMuiElement-BEUb1M5Y.js";import"./InputLabel-DFrKIk9p.js";import"./FormLabel-CADJQDhi.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Select-D7D8iVG0.js";import"./Menu-DEbftHD8.js";import"./useSlot-ClC-LrAR.js";import"./resolveComponentProps-B0Alaaw9.js";import"./useForkRef-YSw3xV27.js";import"./useSlotProps-R9J2jDbn.js";import"./Popover-Be9H75-t.js";import"./isHostComponent-DVu5iVWx.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-OGmlZpoI.js";import"./useTheme-DJacSCdl.js";import"./utils-um23Eqx5.js";import"./TransitionGroupContext-DZ8oOHtk.js";import"./index-Bx0Ph3cE.js";import"./useTimeout-1sC3bvPU.js";import"./getReactElementRef-C4YJ1n4Z.js";import"./mergeSlotProps-BvtBsRw5.js";import"./Modal-5E7VzZn4.js";import"./getScrollbarSize-CaCM53D3.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Portal-BizbuZGJ.js";import"./Backdrop-DLq5-nq5.js";import"./Paper-C-vUFVpU.js";import"./MenuList-B_WMETQe.js";import"./List-CHLl4BWb.js";import"./useControlled-DEjX-IBh.js";import"./useId-C4t5wyTG.js";import"./createSvgIcon-Bbh683OF.js";import"./MenuItem-CcYSG5JI.js";import"./ButtonBase-DJUItS-t.js";import"./isFocusVisible-B8k4qzLc.js";import"./listItemIconClasses-D4nOrAse.js";import"./listItemTextClasses-BcoAy0f1.js";import"./dividerClasses-uajcN7Go.js";import"./FormHelperText-DVi_bzg8.js";const he={title:"Inputs/Select",tags:["autodocs"],component:l,argTypes:{label:{control:{type:"text"}},items:{control:{type:"object"}},value:{control:{type:"text"}},noneValue:{control:{type:"boolean"}},helperText:{control:{type:"text"}},error:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},handleChange:{action:"changed"}}},t={render:e=>{const[p,i]=u.useState(e.value),m=o=>{const s=o.target.value;i(s),e.handleChange&&e.handleChange(o)};return c.jsx(l,{...e,value:p,handleChange:m})},args:{label:"Select Label",items:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}],value:"",noneValue:!1,helperText:"",error:!1,disabled:!1}};var r,n,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = useState(args.value);
    const handleChange = (event: SelectChangeEvent) => {
      const newValue = event.target.value;
      setSelectedValue(newValue);
      if (args.handleChange) {
        args.handleChange(event);
      }
    };
    return <InputSelect {...args} value={selectedValue} handleChange={handleChange} />;
  },
  args: {
    label: 'Select Label',
    items: [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }] as SelectItems[],
    value: '',
    noneValue: false,
    helperText: '',
    error: false,
    disabled: false
  }
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const ge=["Default"];export{t as Default,ge as __namedExportsOrder,he as default};
