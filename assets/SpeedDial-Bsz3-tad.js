import{j as c}from"./extends-BZziWbxp.js";import{T as Ro}from"./Template-L755xNcz.js";import{B as Eo}from"./Box-xH84Ieso.js";import{r as a}from"./index-BP8_t0zE.js";import"./react-is.production.min-DUDD-a5e.js";import{g as K,a as H,s as F,r as Po,j as O,m as A,e as Z,f as L,h as _,N as ko,L as $o}from"./DefaultPropsProvider-DxvFDAWb.js";import{u as po}from"./useTheme-Dw8ftt5g.js";import{u as Ao}from"./useSlot-CS9Hjkn7.js";import{c as Fo}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{B as Mo}from"./ButtonBase-92e3o3lK.js";import{u as Lo}from"./useControlled-im5M3O13.js";import{u as Oo}from"./useTimeout-BN_3i7zA.js";import{u as uo}from"./useForkRef-rM2yqL0Y.js";import{T as zo,r as jo,g as lo}from"./utils-BkwWHdx-.js";import{g as No}from"./getReactNodeRef-oQE-qRg8.js";import{i as Bo}from"./isMuiElement-Dj0kkBmg.js";import{T as Vo}from"./Tooltip-BKakMurz.js";import{c as Uo}from"./createSvgIcon-KETvyI5g.js";function qo(o){return H("MuiFab",o)}const co=K("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),Wo=o=>{const{color:e,variant:t,classes:i,size:r}=o,f={root:["root",t,`size${O(r)}`,e==="inherit"?"colorInherit":e]},h=_(f,qo,i);return{...i,...h}},Ko=F(Mo,{name:"MuiFab",slot:"Root",shouldForwardProp:o=>Po(o)||o==="classes",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,e[t.variant],e[`size${O(t.size)}`],t.color==="inherit"&&e.colorInherit,e[O(t.size)],e[t.color]]}})(A(({theme:o})=>{var e,t;return{...o.typography.button,minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(o.vars||o).zIndex.fab,boxShadow:(o.vars||o).shadows[6],"&:active":{boxShadow:(o.vars||o).shadows[12]},color:o.vars?o.vars.palette.text.primary:(t=(e=o.palette).getContrastText)==null?void 0:t.call(e,o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],"&:hover":{backgroundColor:(o.vars||o).palette.grey.A100,"@media (hover: none)":{backgroundColor:(o.vars||o).palette.grey[300]},textDecoration:"none"},[`&.${co.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]},variants:[{props:{size:"small"},style:{width:40,height:40}},{props:{size:"medium"},style:{width:48,height:48}},{props:{variant:"extended"},style:{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48}},{props:{variant:"extended",size:"small"},style:{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34}},{props:{variant:"extended",size:"medium"},style:{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40}},{props:{color:"inherit"},style:{color:"inherit"}}]}}),A(({theme:o})=>({variants:[...Object.entries(o.palette).filter(Fo(["dark","contrastText"])).map(([e])=>({props:{color:e},style:{color:(o.vars||o).palette[e].contrastText,backgroundColor:(o.vars||o).palette[e].main,"&:hover":{backgroundColor:(o.vars||o).palette[e].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[e].main}}}}))]})),A(({theme:o})=>({[`&.${co.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}}))),fo=a.forwardRef(function(e,t){const i=Z({props:e,name:"MuiFab"}),{children:r,className:f,color:h="default",component:m="button",disabled:p=!1,disableFocusRipple:b=!1,focusVisibleClassName:g,size:y="large",variant:x="circular",...u}=i,C={...i,color:h,component:m,disabled:p,disableFocusRipple:b,size:y,variant:x},l=Wo(C);return c.jsx(Ko,{className:L(l.root,f),component:m,disabled:p,focusRipple:!b,focusVisibleClassName:L(l.focusVisible,g),ownerState:C,ref:t,...u,classes:l,children:r})}),Ho={entering:{transform:"none"},entered:{transform:"none"}},Zo=a.forwardRef(function(e,t){const i=po(),r={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{addEndListener:f,appear:h=!0,children:m,easing:p,in:b,onEnter:g,onEntered:y,onEntering:x,onExit:u,onExited:C,onExiting:l,style:w,timeout:E=r,TransitionComponent:P=zo,...z}=e,D=a.useRef(null),j=uo(D,No(m),t),T=s=>d=>{if(s){const I=D.current;d===void 0?s(I):s(I,d)}},G=T(x),J=T((s,d)=>{jo(s);const I=lo({style:w,timeout:E,easing:p},{mode:"enter"});s.style.webkitTransition=i.transitions.create("transform",I),s.style.transition=i.transitions.create("transform",I),g&&g(s,d)}),Q=T(y),X=T(l),Y=T(s=>{const d=lo({style:w,timeout:E,easing:p},{mode:"exit"});s.style.webkitTransition=i.transitions.create("transform",d),s.style.transition=i.transitions.create("transform",d),u&&u(s)}),oo=T(C),S=s=>{f&&f(D.current,s)};return c.jsx(P,{appear:h,in:b,nodeRef:D,onEnter:J,onEntered:Q,onEntering:G,onExit:Y,onExited:oo,onExiting:X,addEndListener:S,timeout:E,...z,children:(s,d)=>a.cloneElement(m,{style:{transform:"scale(0)",visibility:s==="exited"&&!b?"hidden":void 0,...Ho[s],...w,...m.props.style},ref:j,...d})})});function _o(o){return H("MuiSpeedDial",o)}const U=K("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),Go=o=>{const{classes:e,open:t,direction:i}=o,r={root:["root",`direction${O(i)}`],fab:["fab"],actions:["actions",!t&&"actionsClosed"]};return _(r,_o,e)};function B(o){if(o==="up"||o==="down")return"vertical";if(o==="right"||o==="left")return"horizontal"}const $=32,q=16,Jo=F("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,e[`direction${O(t.direction)}`]]}})(A(({theme:o})=>({zIndex:(o.vars||o).zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none",variants:[{props:{direction:"up"},style:{flexDirection:"column-reverse",[`& .${U.actions}`]:{flexDirection:"column-reverse",marginBottom:-$,paddingBottom:q+$}}},{props:{direction:"down"},style:{flexDirection:"column",[`& .${U.actions}`]:{flexDirection:"column",marginTop:-$,paddingTop:q+$}}},{props:{direction:"left"},style:{flexDirection:"row-reverse",[`& .${U.actions}`]:{flexDirection:"row-reverse",marginRight:-$,paddingRight:q+$}}},{props:{direction:"right"},style:{flexDirection:"row",[`& .${U.actions}`]:{flexDirection:"row",marginLeft:-$,paddingLeft:q+$}}}]}))),Qo=F(fo,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:(o,e)=>e.fab})({pointerEvents:"auto"}),Xo=F("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.actions,!t.open&&e.actionsClosed]}})({display:"flex",pointerEvents:"auto",variants:[{props:({ownerState:o})=>!o.open,style:{transition:"top 0s linear 0.2s",pointerEvents:"none"}}]}),Yo=a.forwardRef(function(e,t){const i=Z({props:e,name:"MuiSpeedDial"}),r=po(),f={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{ariaLabel:h,FabProps:{ref:m,...p}={},children:b,className:g,direction:y="up",hidden:x=!1,icon:u,onBlur:C,onClose:l,onFocus:w,onKeyDown:E,onMouseEnter:P,onMouseLeave:z,onOpen:D,open:j,openIcon:T,slots:G={},slotProps:J={},TransitionComponent:Q,TransitionProps:X,transitionDuration:Y=f,...oo}=i,[S,s]=Lo({controlled:j,default:!1,name:"SpeedDial",state:"open"}),d={...i,open:S,direction:y},I=Go(d),N=Oo(),eo=a.useRef(0),to=a.useRef(),M=a.useRef([]);M.current=[M.current[0]];const bo=a.useCallback(n=>{M.current[0]=n},[]),go=uo(m,bo),yo=(n,v)=>k=>{M.current[n+1]=k,v&&v(k)},vo=n=>{E&&E(n);const v=n.key.replace("Arrow","").toLowerCase(),{current:k=v}=to;if(n.key==="Escape"){s(!1),M.current[0].focus(),l&&l(n,"escapeKeyDown");return}if(B(v)===B(k)&&B(v)!==void 0){n.preventDefault();const io=v===k?1:-1,V=ko(eo.current+io,0,M.current.length-1);M.current[V].focus(),eo.current=V,to.current=k}};a.useEffect(()=>{S||(eo.current=0,to.current=void 0)},[S]);const so=n=>{n.type==="mouseleave"&&z&&z(n),n.type==="blur"&&C&&C(n),N.clear(),n.type==="blur"?N.start(0,()=>{s(!1),l&&l(n,"blur")}):(s(!1),l&&l(n,"mouseLeave"))},ho=n=>{p.onClick&&p.onClick(n),N.clear(),S?(s(!1),l&&l(n,"toggle")):(s(!0),D&&D(n,"toggle"))},ro=n=>{n.type==="mouseenter"&&P&&P(n),n.type==="focus"&&w&&w(n),N.clear(),S||N.start(0,()=>{s(!0),D&&D(n,{focus:"focus",mouseenter:"mouseEnter"}[n.type])})},no=h.replace(/^[^a-z]+|[^\w:.-]+/gi,""),ao=a.Children.toArray(b).filter(n=>a.isValidElement(n)),xo=ao.map((n,v)=>{const{FabProps:{ref:k,...io}={},tooltipPlacement:V}=n.props,Io=V||(B(y)==="vertical"?"left":"top");return a.cloneElement(n,{FabProps:{...io,ref:yo(v,k)},delay:30*(S?v:ao.length-v),open:S,tooltipPlacement:Io,id:`${no}-action-${v}`})}),So={transition:Q,...G},Do={transition:X,...J},Co={slots:So,slotProps:Do},[wo,To]=Ao("transition",{elementType:Zo,externalForwardedProps:Co,ownerState:d});return c.jsxs(Jo,{className:L(I.root,g),ref:t,role:"presentation",onKeyDown:vo,onBlur:so,onFocus:ro,onMouseEnter:ro,onMouseLeave:so,ownerState:d,...oo,children:[c.jsx(wo,{in:!x,timeout:Y,unmountOnExit:!0,...To,children:c.jsx(Qo,{color:"primary","aria-label":h,"aria-haspopup":"true","aria-expanded":S,"aria-controls":`${no}-actions`,...p,onClick:ho,className:L(I.fab,p.className),ref:go,ownerState:d,children:a.isValidElement(u)&&Bo(u,["SpeedDialIcon"])?a.cloneElement(u,{open:S}):u})}),c.jsx(Xo,{id:`${no}-actions`,role:"menu","aria-orientation":B(y),className:L(I.actions,!S&&I.actionsClosed),ownerState:d,children:xo})]})});function oe(o){return H("MuiSpeedDialAction",o)}const W=K("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"]),ee=o=>{const{open:e,tooltipPlacement:t,classes:i}=o,r={fab:["fab",!e&&"fabClosed"],staticTooltip:["staticTooltip",`tooltipPlacement${O(t)}`,!e&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return _(r,oe,i)},te=F(fo,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.fab,!t.open&&e.fabClosed]}})(A(({theme:o})=>({margin:8,color:(o.vars||o).palette.text.secondary,backgroundColor:(o.vars||o).palette.background.paper,"&:hover":{backgroundColor:o.vars?o.vars.palette.SpeedDialAction.fabHoverBg:$o(o.palette.background.paper,.15)},transition:`${o.transitions.create("transform",{duration:o.transitions.duration.shorter})}, opacity 0.8s`,opacity:1,variants:[{props:({ownerState:e})=>!e.open,style:{opacity:0,transform:"scale(0)"}}]}))),ne=F("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.staticTooltip,!t.open&&e.staticTooltipClosed,e[`tooltipPlacement${O(t.tooltipPlacement)}`]]}})(A(({theme:o})=>({position:"relative",display:"flex",alignItems:"center",[`& .${W.staticTooltipLabel}`]:{transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.shorter}),opacity:1},variants:[{props:({ownerState:e})=>!e.open,style:{[`& .${W.staticTooltipLabel}`]:{opacity:0,transform:"scale(0.5)"}}},{props:{tooltipPlacement:"left"},style:{[`& .${W.staticTooltipLabel}`]:{transformOrigin:"100% 50%",right:"100%",marginRight:8}}},{props:{tooltipPlacement:"right"},style:{[`& .${W.staticTooltipLabel}`]:{transformOrigin:"0% 50%",left:"100%",marginLeft:8}}}]}))),ie=F("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:(o,e)=>e.staticTooltipLabel})(A(({theme:o})=>({position:"absolute",...o.typography.body1,backgroundColor:(o.vars||o).palette.background.paper,borderRadius:(o.vars||o).shape.borderRadius,boxShadow:(o.vars||o).shadows[1],color:(o.vars||o).palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"}))),se=a.forwardRef(function(e,t){const i=Z({props:e,name:"MuiSpeedDialAction"}),{className:r,delay:f=0,FabProps:h={},icon:m,id:p,open:b,TooltipClasses:g,tooltipOpen:y=!1,tooltipPlacement:x="left",tooltipTitle:u,...C}=i,l={...i,tooltipPlacement:x},w=ee(l),[E,P]=a.useState(y),z=()=>{P(!1)},D=()=>{P(!0)},j={transitionDelay:`${f}ms`},T=c.jsx(te,{size:"small",className:L(w.fab,r),tabIndex:-1,role:"menuitem",ownerState:l,...h,style:{...j,...h.style},children:m});return y?c.jsxs(ne,{id:p,ref:t,className:w.staticTooltip,ownerState:l,...C,children:[c.jsx(ie,{style:j,id:`${p}-label`,className:w.staticTooltipLabel,ownerState:l,children:u}),a.cloneElement(T,{"aria-labelledby":`${p}-label`})]}):(!b&&E&&P(!1),c.jsx(Vo,{id:p,ref:t,title:u,placement:x,onClose:z,onOpen:D,open:b&&E,classes:g,...C,children:T}))}),re=Uo(c.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");function ae(o){return H("MuiSpeedDialIcon",o)}const R=K("MuiSpeedDialIcon",["root","icon","iconOpen","iconWithOpenIconOpen","openIcon","openIconOpen"]),le=o=>{const{classes:e,open:t,openIcon:i}=o;return _({root:["root"],icon:["icon",t&&"iconOpen",i&&t&&"iconWithOpenIconOpen"],openIcon:["openIcon",t&&"openIconOpen"]},ae,e)},ce=F("span",{name:"MuiSpeedDialIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[{[`& .${R.icon}`]:e.icon},{[`& .${R.icon}`]:t.open&&e.iconOpen},{[`& .${R.icon}`]:t.open&&t.openIcon&&e.iconWithOpenIconOpen},{[`& .${R.openIcon}`]:e.openIcon},{[`& .${R.openIcon}`]:t.open&&e.openIconOpen},e.root]}})(A(({theme:o})=>({height:24,[`& .${R.icon}`]:{transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.short})},[`& .${R.openIcon}`]:{position:"absolute",transition:o.transitions.create(["transform","opacity"],{duration:o.transitions.duration.short}),opacity:0,transform:"rotate(-45deg)"},variants:[{props:({ownerState:e})=>e.open,style:{[`& .${R.icon}`]:{transform:"rotate(45deg)"}}},{props:({ownerState:e})=>e.open&&e.openIcon,style:{[`& .${R.icon}`]:{opacity:0}}},{props:({ownerState:e})=>e.open,style:{[`& .${R.openIcon}`]:{transform:"rotate(0deg)",opacity:1}}}]}))),mo=a.forwardRef(function(e,t){const i=Z({props:e,name:"MuiSpeedDialIcon"}),{className:r,icon:f,open:h,openIcon:m,...p}=i,b=i,g=le(b);function y(x,u){return a.isValidElement(x)?a.cloneElement(x,{className:u}):x}return c.jsxs(ce,{className:L(g.root,r),ref:t,ownerState:b,...p,children:[m?y(m,g.openIcon):null,f?y(f,g.icon):c.jsx(re,{className:g.icon})]})});mo.muiName="SpeedDialIcon";function pe({actions:o,icon:e=c.jsx(mo,{}),ariaLabel:t,position:i={bottom:16,right:16}}){return c.jsx(Ro,{children:c.jsx(Eo,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1,position:"absolute",...i},children:c.jsx(Yo,{ariaLabel:t,icon:e,"data-testid":"speed-dial",children:o.map(r=>c.jsx(se,{"data-testid":"speed-dial-action",icon:r.icon,tooltipTitle:r.name,onClick:r.onClick},r.name))})})})}pe.__docgenInfo={description:"",methods:[],displayName:"SpeedDialCustom",props:{actions:{required:!0,tsType:{name:"Array",elements:[{name:"SpeedDialActionType"}],raw:"SpeedDialActionType[]"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"<SpeedDialIcon />",computed:!1}},ariaLabel:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    bottom?: number;
    right?: number;
    left?: number;
    top?: number;
}`,signature:{properties:[{key:"bottom",value:{name:"number",required:!1}},{key:"right",value:{name:"number",required:!1}},{key:"left",value:{name:"number",required:!1}},{key:"top",value:{name:"number",required:!1}}]}},description:"",defaultValue:{value:"{ bottom: 16, right: 16 }",computed:!1}}}};export{fo as F,pe as S};
