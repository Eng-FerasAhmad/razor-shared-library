import{j as c}from"./extends-BZziWbxp.js";import{r as u}from"./index-BP8_t0zE.js";import{I as l}from"./InputSelect-1JXxZF6l.js";import"./Template-L755xNcz.js";import"./color-CPEZdfOT.js";import"./DefaultPropsProvider-DxvFDAWb.js";import"./index-DiL3kUBv.js";import"./index-FTyV09dj.js";import"./emotion-react.browser.esm-DJu5jVRJ.js";import"./extendSxProp-sjffJwDd.js";import"./FormControl-CusreTAk.js";import"./useFormControl-D0zEVldg.js";import"./isMuiElement-Dj0kkBmg.js";import"./Select-CIonjM_E.js";import"./FormLabel-D8sXu6X5.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./react-is.production.min-DUDD-a5e.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-CS9Hjkn7.js";import"./resolveComponentProps-DHklS2if.js";import"./useForkRef-rM2yqL0Y.js";import"./Modal-TQRt1t6b.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./useTimeout-BN_3i7zA.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-YCJc7QQp.js";import"./useTheme-Dw8ftt5g.js";import"./utils-BkwWHdx-.js";import"./TransitionGroupContext-CV-AyoRm.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-DJkmxc1E.js";import"./getReactNodeRef-oQE-qRg8.js";import"./Portal-ntkeNcXE.js";import"./Paper-Rl8hdvmC.js";import"./Grow-BOZvbti8.js";import"./MenuList-B6jC0jSN.js";import"./List-DXUuoEiS.js";import"./useSlotProps-0C5KtUUD.js";import"./useControlled-im5M3O13.js";import"./useId-BFAM3bkQ.js";import"./createSvgIcon-KETvyI5g.js";import"./useThemeProps-CrUyzxcA.js";import"./MenuItem-CfFRZWXz.js";import"./ButtonBase-92e3o3lK.js";import"./assertThisInitialized-B9jnkVVz.js";import"./isFocusVisible-B8k4qzLc.js";import"./dividerClasses-D91H4MQS.js";import"./listItemTextClasses-CH_dmsBj.js";import"./listItemIconClasses-DC6cww4g.js";const se={title:"Inputs/Select",tags:["autodocs"],component:l,argTypes:{label:{control:{type:"text"}},items:{control:{type:"object"}},value:{control:{type:"text"}},noneValue:{control:{type:"boolean"}},helperText:{control:{type:"text"}},error:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},handleChange:{action:"changed"}}},t={render:e=>{const[p,i]=u.useState(e.value),m=o=>{const s=o.target.value;i(s),e.handleChange&&e.handleChange(o)};return c.jsx(l,{...e,value:p,handleChange:m})},args:{label:"Select Label",items:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}],value:"",noneValue:!1,helperText:"",error:!1,disabled:!1}};var r,n,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const ce=["Default"];export{t as Default,ce as __namedExportsOrder,se as default};
