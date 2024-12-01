import{r as l}from"./index-BP8_t0zE.js";import{g as T,b as V,s as j,r as P,m as E,h as d,u as F,c as y,a as G}from"./DefaultPropsProvider-CBZfYqC6.js";import{a as C}from"./List-5Y-w8OKN.js";import{j as x}from"./extends-BZziWbxp.js";import{B as L}from"./ButtonBase-Dyd7TCuj.js";import{d as $}from"./dividerClasses-1cIsuIxJ.js";import{l as I}from"./listItemTextClasses-1go-Qm1c.js";import{l as M}from"./listItemIconClasses-BVYrFuto.js";import{b as N}from"./useTimeout-BN_3i7zA.js";import{u as U}from"./useForkRef-rM2yqL0Y.js";function D(e){return V("MuiMenuItem",e)}const i=T("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),H=(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]},z=e=>{const{disabled:t,dense:a,divider:s,disableGutters:n,selected:c,classes:o}=e,r=G({root:["root",a&&"dense",t&&"disabled",!n&&"gutters",s&&"divider",c&&"selected"]},D,o);return{...o,...r}},W=j(L,{shouldForwardProp:e=>P(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:H})(E(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${i.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${i.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${i.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${i.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${i.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${$.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${$.inset}`]:{marginLeft:52},[`& .${I.root}`]:{marginTop:0,marginBottom:0},[`& .${I.inset}`]:{paddingLeft:36},[`& .${M.root}`]:{minWidth:36},variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>!t.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:t})=>t.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${M.root} svg`]:{fontSize:"1.25rem"}}}]}))),ee=l.forwardRef(function(t,a){const s=F({props:t,name:"MuiMenuItem"}),{autoFocus:n=!1,component:c="li",dense:o=!1,divider:m=!1,disableGutters:r=!1,focusVisibleClassName:O,role:k="menuitem",tabIndex:f,className:R,...B}=s,g=l.useContext(C),v=l.useMemo(()=>({dense:o||g.dense||!1,disableGutters:r}),[g.dense,o,r]),p=l.useRef(null);N(()=>{n&&p.current&&p.current.focus()},[n]);const w={...s,dense:v.dense,divider:m,disableGutters:r},u=z(s),S=U(p,a);let b;return s.disabled||(b=f!==void 0?f:-1),x.jsx(C.Provider,{value:v,children:x.jsx(W,{ref:S,role:k,tabIndex:b,component:c,focusVisibleClassName:y(u.focusVisible,O),className:y(u.root,R),...B,ownerState:w,classes:u})})});export{ee as M};