import{j as s}from"./jsx-runtime-DiklIkkE.js";import{T as k}from"./Template-Cay0yqF_.js";import{F as S}from"./FormControl-Du_wUusS.js";import{F as f}from"./FormControlLabel-B_mG_KsR.js";import{r as $}from"./index-DRjF_FHU.js";import{g as x,e as y,u as C,s as d,c as z,k as r,a as j,m as c,b as w,z as R,A as T}from"./memoTheme-BaJynKMn.js";import{c as B}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{S as M}from"./SwitchBase-Gp6P0V4y.js";function F(t){return y("MuiSwitch",t)}const e=x("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),I=t=>{const{classes:a,edge:o,size:l,color:p,checked:u,disabled:h}=t,m={root:["root",o&&`edge${r(o)}`,`size${r(l)}`],switchBase:["switchBase",`color${r(p)}`,u&&"checked",h&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},g=j(m,F,a);return{...a,...g}},N=d("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.root,o.edge&&a[`edge${r(o.edge)}`],a[`size${r(o.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${e.thumb}`]:{width:16,height:16},[`& .${e.switchBase}`]:{padding:4,[`&.${e.checked}`]:{transform:"translateX(16px)"}}}}]}),O=d(M,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.switchBase,{[`& .${e.input}`]:a.input},o.color!=="default"&&a[`color${r(o.color)}`]]}})(c(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${e.checked}`]:{transform:"translateX(20px)"},[`&.${e.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${e.checked} + .${e.track}`]:{opacity:.5},[`&.${e.disabled} + .${e.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${e.input}`]:{left:"-100%",width:"300%"}})),c(({theme:t})=>({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:w(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(B(["light"])).map(([a])=>({props:{color:a},style:{[`&.${e.checked}`]:{color:(t.vars||t).palette[a].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[a].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:w(t.palette[a].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${e.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${a}DisabledColor`]:`${t.palette.mode==="light"?R(t.palette[a].main,.62):T(t.palette[a].main,.55)}`}},[`&.${e.checked} + .${e.track}`]:{backgroundColor:(t.vars||t).palette[a].main}}}))]}))),D=d("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,a)=>a.track})(c(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`}))),P=d("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,a)=>a.thumb})(c(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),U=$.forwardRef(function(a,o){const l=C({props:a,name:"MuiSwitch"}),{className:p,color:u="primary",edge:h=!1,size:m="medium",sx:g,...b}=l,i={...l,color:u,edge:h,size:m},n=I(i),v=s.jsx(P,{className:n.thumb,ownerState:i});return s.jsxs(N,{className:z(n.root,p),sx:g,ownerState:i,children:[s.jsx(O,{type:"checkbox",icon:v,checkedIcon:v,ref:o,ownerState:i,...b,classes:{...n,root:n.switchBase}}),s.jsx(D,{className:n.track,ownerState:i})]})});function A({label:t,labelPlacement:a,...o}){return s.jsx(k,{children:s.jsx(S,{component:"fieldset","data-testid":"switch",children:s.jsx(f,{value:"start",control:s.jsx(U,{...o}),label:t,labelPlacement:a})})})}A.__docgenInfo={description:"",methods:[],displayName:"SwitchCustom",props:{label:{required:!1,tsType:{name:"string"},description:""},labelPlacement:{required:!1,tsType:{name:"union",raw:"'bottom' | 'start' | 'end' | 'top'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'top'"}]},description:""}}};export{A as S};
