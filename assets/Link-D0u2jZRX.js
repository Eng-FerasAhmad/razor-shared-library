import{r as g}from"./index-DRjF_FHU.js";import{g as F,e as S,F as i,b as l,u as T,s as A,c as R,k as L,a as M,m as P}from"./memoTheme-BaJynKMn.js";import{u as j}from"./useTheme-DJacSCdl.js";import{j as U}from"./jsx-runtime-DiklIkkE.js";import{c as z}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{T as B}from"./Typography-jz8gJ3s3.js";import{i as k}from"./isFocusVisible-B8k4qzLc.js";function N(e){return S("MuiLink",e)}const E=F("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),H=({theme:e,ownerState:r})=>{const o=r.color,t=i(e,`palette.${o}.main`,!1)||i(e,`palette.${o}`,!1)||r.color,n=i(e,`palette.${o}.mainChannel`)||i(e,`palette.${o}Channel`);return"vars"in e&&n?`rgba(${n} / 0.4)`:l(t,.4)},v={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},W=e=>{const{classes:r,component:o,focusVisible:t,underline:n}=e,u={root:["root",`underline${L(n)}`,o==="button"&&"button",t&&"focusVisible"]};return M(u,N,r)},O=A(B,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,r[`underline${L(o.underline)}`],o.component==="button"&&r.button]}})(P(({theme:e})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:r,ownerState:o})=>r==="always"&&o.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(e.palette).filter(z()).map(([r])=>({props:{underline:"always",color:r},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette[r].mainChannel} / 0.4)`:l(e.palette[r].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:l(e.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.secondaryChannel} / 0.4)`:l(e.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${E.focusVisible}`]:{outline:"auto"}}}]}))),Y=g.forwardRef(function(r,o){const t=T({props:r,name:"MuiLink"}),n=j(),{className:u,color:s="primary",component:d="a",onBlur:y,onFocus:m,TypographyClasses:w,underline:f="always",variant:b="inherit",sx:c,...x}=t,[$,C]=g.useState(!1),h=a=>{k(a.target)||C(!1),y&&y(a)},D=a=>{k(a.target)&&C(!0),m&&m(a)},p={...t,color:s,component:d,focusVisible:$,underline:f,variant:b},V=W(p);return U.jsx(O,{color:s,className:R(V.root,u),classes:w,component:d,onBlur:h,onFocus:D,ref:o,ownerState:p,variant:b,...x,sx:[...v[s]===void 0?[{color:s}]:[],...Array.isArray(c)?c:[c]],style:{...x.style,...f==="always"&&s!=="inherit"&&!v[s]&&{"--Link-underlineColor":H({theme:n,ownerState:p})}}})});export{Y as L};
