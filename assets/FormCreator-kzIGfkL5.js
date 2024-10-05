import{j as r}from"./extends-BZziWbxp.js";import{r as i}from"./index-BP8_t0zE.js";import{I as g}from"./InputSelect-1JXxZF6l.js";import{T as h}from"./Template-L755xNcz.js";import{c as v}from"./color-CPEZdfOT.js";import{T as C}from"./TextField-CclMAwaS.js";import{R as f}from"./RadioGroup-DG82lFe3.js";import{S as x}from"./Switch-BZ_8_ayE.js";import{T as y}from"./Textarea-Csymbvhv.js";import{D as E}from"./Datepicker-BP8D2Qv7.js";import{C as I}from"./Checkbox-Dqy2HAZb.js";import{T as j}from"./TimePicker-D4ckhNUH.js";import{B as q}from"./Box-xH84Ieso.js";function m({...e}){return r.jsx(h,{children:r.jsx(C,{...e,"data-testid":"input-text-container",sx:{backgroundColor:v.light,width:"100%"}})})}m.__docgenInfo={description:"",methods:[],displayName:"InputText"};function c({item:e,index:n,updateDataForm:t,handleInputChange:l}){switch(e.controller){case"TEXT":case"NUMBER":return r.jsx(m,{value:e.value,label:e.label,size:"medium",onChange:a=>l(a,n),error:e.required&&!e.value,disabled:e.disable,required:e.required});case"SELECT":return r.jsx(g,{items:e.selectItems||[],label:e.label,value:e.value,handleChange:a=>t(n,a.target.value),error:e.required&&!e.value,disabled:e.disable});case"CHECKBOX":return r.jsx(I,{checked:e.value,label:e.label,onChange:a=>t(n,a.target.checked),disabled:e.disable});case"SWITCH":return r.jsx(x,{checked:e.value,label:e.label,onChange:a=>t(n,a.target.checked),disabled:e.disable});case"TEXTAREA":return r.jsx(y,{value:e.value,label:e.label,size:"medium",onChange:a=>l(a,n),error:e.required&&!e.value,disabled:e.disable,required:e.required});case"RADIO":return r.jsx(f,{label:e.label,radioItems:e.radioItems||[],value:e.value,onChange:a=>t(n,a),disabled:e.disable});case"DATEPICKER":return r.jsx(E,{label:e.label,value:e.value,locale:e.locale,onChange:a=>t(n,a),disabled:e.disable});case"TIMEPICKER":return r.jsx(j,{label:e.label,value:e.value,locale:e.locale,onChange:a=>t(n,a),disabled:e.disable});default:return null}}c.__docgenInfo={description:"",methods:[],displayName:"FormInputFactory",props:{item:{required:!0,tsType:{name:"FormDataSet"},description:""},index:{required:!0,tsType:{name:"number"},description:""},updateDataForm:{required:!0,tsType:{name:"signature",type:"function",raw:`(
    index: number,
    value: string | number | boolean | Dayjs
) => void`,signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"union",raw:"string | number | boolean | Dayjs",elements:[{name:"string"},{name:"number"},{name:"boolean"},{name:"Dayjs"}]},name:"value"}],return:{name:"void"}}},description:""},handleInputChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
) => void`,signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"union",raw:"HTMLInputElement | HTMLTextAreaElement",elements:[{name:"HTMLInputElement"},{name:"HTMLTextAreaElement"}]}],raw:"ChangeEvent<HTMLInputElement | HTMLTextAreaElement>"},name:"e"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};function p({value:e,children:n}){return e!=null?r.jsx(r.Fragment,{children:n}):null}p.__docgenInfo={description:"",methods:[],displayName:"ConditionalRender",props:{value:{required:!0,tsType:{name:"unknown"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function D({formDataSet:e,onUpdateFrom:n}){const[t,l]=i.useState(e);i.useEffect(()=>{l([...e])},[e]);const a=i.useCallback((u,o)=>{const s=t.map((d,T)=>T===u?{...d,value:o}:d);l(s),n(s)},[t,n]),b=(u,o)=>{const s=u.target,d=s.type==="checkbox"?s.checked:s.value;a(o,d)};return r.jsx(p,{value:t,children:t.map((u,o)=>r.jsx(q,{sx:{mt:o>0?3:0},children:r.jsx(c,{item:u,index:o,updateDataForm:a,handleInputChange:b})},o))})}D.__docgenInfo={description:"",methods:[],displayName:"FormCreator",props:{formDataSet:{required:!0,tsType:{name:"Array",elements:[{name:"FormDataSet"}],raw:"FormDataSet[]"},description:""},onUpdateFrom:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormDataSet[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"FormDataSet"}],raw:"FormDataSet[]"},name:"formData"}],return:{name:"void"}}},description:""}}};export{D as F};
