import{r as l}from"./index-DRjF_FHU.js";import{u as $,s as L,c as g,a as R,j,m as B,b as f}from"./memoTheme-BaJynKMn.js";import{a as x}from"./List-CHLl4BWb.js";import{g as N,l as u}from"./listItemButtonClasses-CiCTDL2d.js";import{j as I}from"./jsx-runtime-DiklIkkE.js";import{u as G}from"./useEnhancedEffect-CvtZChyo.js";import{u as M}from"./useForkRef-YSw3xV27.js";import{B as V}from"./ButtonBase-DJUItS-t.js";import{g as E}from"./listItemIconClasses-D4nOrAse.js";const P=(t,s)=>{const{ownerState:e}=t;return[s.root,e.dense&&s.dense,e.alignItems==="flex-start"&&s.alignItemsFlexStart,e.divider&&s.divider,!e.disableGutters&&s.gutters]},T=t=>{const{alignItems:s,classes:e,dense:a,disabled:o,disableGutters:r,divider:n,selected:i}=t,d=R({root:["root",a&&"dense",!r&&"gutters",n&&"divider",o&&"disabled",s==="flex-start"&&"alignItemsFlexStart",i&&"selected"]},N,e);return{...e,...d}},U=L(V,{shouldForwardProp:t=>j(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:P})(B(({theme:t})=>({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${u.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:f(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${u.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:f(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${u.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:f(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:f(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${u.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${u.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},variants:[{props:({ownerState:s})=>s.divider,style:{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:s})=>!s.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:s})=>s.dense,style:{paddingTop:4,paddingBottom:4}}]}))),Z=l.forwardRef(function(s,e){const a=$({props:s,name:"MuiListItemButton"}),{alignItems:o="center",autoFocus:r=!1,component:n="div",children:i,dense:c=!1,disableGutters:d=!1,divider:O=!1,focusVisibleClassName:k,selected:S=!1,className:w,...p}=a,b=l.useContext(x),y=l.useMemo(()=>({dense:c||b.dense||!1,alignItems:o,disableGutters:d}),[o,b.dense,c,d]),m=l.useRef(null);G(()=>{r&&m.current&&m.current.focus()},[r]);const C={...a,alignItems:o,dense:y.dense,disableGutters:d,divider:O,selected:S},v=T(C),F=M(m,e);return I.jsx(x.Provider,{value:y,children:I.jsx(U,{ref:F,href:p.href||p.to,component:(p.href||p.to)&&n==="div"?"button":n,focusVisibleClassName:g(v.focusVisible,k),ownerState:C,className:g(v.root,w),...p,classes:v,children:i})})}),D=t=>{const{alignItems:s,classes:e}=t;return R({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},E,e)},W=L("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:e}=t;return[s.root,e.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(B(({theme:t})=>({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex",variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}))),_=l.forwardRef(function(s,e){const a=$({props:s,name:"MuiListItemIcon"}),{className:o,...r}=a,n=l.useContext(x),i={...a,alignItems:n.alignItems},c=D(i);return I.jsx(W,{className:g(c.root,o),ownerState:i,ref:e,...r})});export{Z as L,_ as a};
