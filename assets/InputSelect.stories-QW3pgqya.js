import{j as c}from"./extends-BZziWbxp.js";import{r as u}from"./index-BP8_t0zE.js";import{I as l}from"./InputSelect-B22bpnzG.js";import"./Template-Ns2mqNLl.js";import"./color-DCc551Ku.js";import"./DefaultPropsProvider-CBZfYqC6.js";import"./index-DiL3kUBv.js";import"./index-CJDT4czw.js";import"./emotion-react.browser.esm-B5xgBJJi.js";import"./extendSxProp-igbevVD-.js";import"./FormControl-DzCLJ3jW.js";import"./useFormControl-D0zEVldg.js";import"./isMuiElement-Dj0kkBmg.js";import"./Select-D70XHP7D.js";import"./FormLabel-CC9ESZLO.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./react-is.production.min-DUDD-a5e.js";import"./Menu-Cc7Ntogn.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-BxHZVQtO.js";import"./resolveComponentProps-BWlflic0.js";import"./useForkRef-rM2yqL0Y.js";import"./Modal-DlLEeJp6.js";import"./getScrollbarSize-Bqq2hMjQ.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-BN2rbQ_G.js";import"./useTimeout-BN_3i7zA.js";import"./createChainedFunction-BO_9K8Jh.js";import"./Backdrop-DB4hLLMp.js";import"./useTheme-Clt_GTdr.js";import"./utils-BkwWHdx-.js";import"./TransitionGroupContext-CV-AyoRm.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-DJkmxc1E.js";import"./getReactNodeRef-oQE-qRg8.js";import"./Portal-ntkeNcXE.js";import"./Paper-CjD7ugLR.js";import"./Grow-D6iu-O35.js";import"./MenuList-CFY98bhA.js";import"./List-5Y-w8OKN.js";import"./useSlotProps-Xloz1bZq.js";import"./useControlled-im5M3O13.js";import"./useId-BFAM3bkQ.js";import"./createSvgIcon-Aui0-xl2.js";import"./useThemeProps-Fza24uaV.js";import"./MenuItem-B3fhY3LG.js";import"./ButtonBase-Dyd7TCuj.js";import"./assertThisInitialized-B9jnkVVz.js";import"./isFocusVisible-B8k4qzLc.js";import"./dividerClasses-1cIsuIxJ.js";import"./listItemTextClasses-1go-Qm1c.js";import"./listItemIconClasses-BVYrFuto.js";import"./FormHelperText-BVmhIkSj.js";const ue={title:"Inputs/Select",tags:["autodocs"],component:l,argTypes:{label:{control:{type:"text"}},items:{control:{type:"object"}},value:{control:{type:"text"}},noneValue:{control:{type:"boolean"}},helperText:{control:{type:"text"}},error:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},handleChange:{action:"changed"}}},t={render:e=>{const[p,i]=u.useState(e.value),m=o=>{const s=o.target.value;i(s),e.handleChange&&e.handleChange(o)};return c.jsx(l,{...e,value:p,handleChange:m})},args:{label:"Select Label",items:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}],value:"",noneValue:!1,helperText:"",error:!1,disabled:!1}};var r,n,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const de=["Default"];export{t as Default,de as __namedExportsOrder,ue as default};
