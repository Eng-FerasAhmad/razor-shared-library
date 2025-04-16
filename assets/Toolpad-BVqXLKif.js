import{j as n}from"./jsx-runtime-DiklIkkE.js";import{r as c}from"./index-DRjF_FHU.js";import{s as I}from"./memoTheme-BaJynKMn.js";import{L as j}from"./List-CHLl4BWb.js";import{L as S,a as C}from"./ListItemIcon-C4t3UTvh.js";import{L as T}from"./ListItemText-cYRvFack.js";import{T as y}from"./Typography-jz8gJ3s3.js";import{E as G}from"./ExpandLess-BlI1F6C-.js";import{E as K}from"./ExpandMore-DCC1vlSA.js";import{C as N}from"./Collapse-BQP7xn8V.js";import{T as A,t as W}from"./Tooltip-CQaTzqLN.js";import{D as B}from"./Divider-Dkta2SrK.js";import{a as V}from"./Popover-Be9H75-t.js";import{M as F}from"./MenuItem-CcYSG5JI.js";import{D as X}from"./Drawer-B1A4BsZM.js";import{B as h}from"./Box-DZzghkYk.js";const Y=(e,t,o,s,r,i)=>({"& .MuiDrawer-paper":{width:e?t:o,transition:"width 0.3s",top:s,height:`calc(100vh - ${s}px)`,overflowX:"hidden",backgroundColor:r,color:i}}),J={padding:"2px 10px",display:"block"},Q=(e,t,o)=>({position:"relative",borderRadius:"8px",padding:t?"1px 8px":0,margin:t?"6px 0":"3px 0",width:t?"100%":"35px",...e?{backgroundColor:`${o} !important`,"&:hover":{backgroundColor:`${o} !important`}}:{"&:hover":{backgroundColor:`${o} !important`}}}),U=e=>({mr:e?2:"auto",minWidth:e?0:"35px",width:e?"auto":"35px",height:e?"auto":"35px",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"10px"}),Z=(e,t)=>({pl:4,borderRadius:"8px",padding:"3px 8px 3px 25px",margin:"5px 0",...e?{backgroundColor:`${t} !important`,"&:hover":{backgroundColor:`${t} !important`}}:{"&:hover":{backgroundColor:`${t} !important`}}}),O=(e,t)=>({padding:"10px 16px",backgroundColor:e?`${t} !important`:"transparent","&:hover":{backgroundColor:`${t} !important`}}),ee={ml:1},ne=I("div")(({isOpen:e})=>({display:e?"inherit":"flex",flexDirection:"column",justifyContent:e?"flex-start":"center",alignItems:e?"flex-start":"center",margin:"8px"}));function E({menuItems:e,selectedKey:t,onSelect:o,selectedColor:s}){return n.jsx(j,{component:"div",disablePadding:!0,"data-testid":"list-container",children:e.map(r=>{const i=t===r.key;return n.jsxs(S,{selected:i,onClick:()=>o(r.key,r.onClick),sx:Z(i,s),children:[n.jsx(C,{sx:{minWidth:"36px"},children:r.icon}),n.jsx(T,{primary:n.jsx(y,{sx:{fontSize:"15px",fontWeight:560},children:r.label})})]},r.key)})})}E.__docgenInfo={description:"",methods:[],displayName:"SubMenuList",props:{menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"MenuItemType"}],raw:"MenuItemType[]"},description:""},selectedKey:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},selectedColor:{required:!0,tsType:{name:"string"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string, onClick?: () => void) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"onClick"}],return:{name:"void"}}},description:""}}};const te=I(({className:e,...t})=>n.jsx(A,{...t,classes:{popper:e}}))(({theme:e})=>({[`& .${W.tooltip}`]:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:e.shadows[1],fontSize:13}}));function L({item:e,isOpen:t,openMenus:o,selectedKey:s,selectedColor:r,onToggleSubMenu:i,onSelect:p,onPopupOpen:a}){var g;const d=s===e.key,l=!!((g=e.children)!=null&&g.length),x=l?t?()=>i(e.label):f=>a(f,e.children):()=>p(e.key,e.onClick);return n.jsxs(n.Fragment,{children:[n.jsxs(S,{selected:d,onClick:x,sx:Q(d,t,r),"data-testid":"list-item-button",children:[n.jsx(te,{title:t?"":e.label,placement:"right",children:n.jsx(C,{sx:U(t),"data-testid":"list-item-icon",children:e.icon})}),t&&n.jsx(T,{"data-testid":"list-item-text",primary:n.jsx(y,{sx:{fontSize:"15px",fontWeight:560},children:e.label})}),t&&l&&(o[e.label]?n.jsx(G,{}):n.jsx(K,{}))]}),l&&t&&n.jsx(N,{in:o[e.label],timeout:"auto",unmountOnExit:!0,"data-testid":"list-item-collapse",children:e.children&&n.jsx(E,{menuItems:e.children,selectedKey:s,selectedColor:r,onSelect:p})})]})}L.__docgenInfo={description:"",methods:[],displayName:"SidebarMenuItem",props:{item:{required:!0,tsType:{name:"MenuItemType"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},openMenus:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"boolean"}],raw:"Record<string, boolean>"},description:""},selectedKey:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},selectedColor:{required:!0,tsType:{name:"string"},description:""},onToggleSubMenu:{required:!0,tsType:{name:"signature",type:"function",raw:"(label: string) => void",signature:{arguments:[{type:{name:"string"},name:"label"}],return:{name:"void"}}},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string, onClick?: () => void) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"onClick"}],return:{name:"void"}}},description:""},onPopupOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLElement>, children: MenuItemType[]) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"e"},{type:{name:"Array",elements:[{name:"MenuItemType"}],raw:"MenuItemType[]"},name:"children"}],return:{name:"void"}}},description:""}}};function P({group:e,isOpen:t,isLast:o,openMenus:s,selectedKey:r,selectedColor:i,onToggleSubMenu:p,onSelect:a,onPopupOpen:d}){return n.jsxs(ne,{isOpen:t,"data-testid":"menu-group-container",children:[e.title&&t&&n.jsx(y,{variant:"caption",sx:J,"data-testid":"menu-group-typo",children:e.title}),e.items.map(l=>n.jsx(L,{item:l,isOpen:t,openMenus:s,selectedKey:r,selectedColor:i,onToggleSubMenu:p,onSelect:a,onPopupOpen:d},l.key)),!o&&n.jsx(B,{sx:{my:1,alignSelf:"stretch"}})]})}P.__docgenInfo={description:"",methods:[],displayName:"MenuGroupComponent",props:{group:{required:!0,tsType:{name:"MenuGroup"},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:""},isLast:{required:!0,tsType:{name:"boolean"},description:""},openMenus:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"boolean"}],raw:"Record<string, boolean>"},description:""},selectedKey:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},selectedColor:{required:!0,tsType:{name:"string"},description:""},onToggleSubMenu:{required:!0,tsType:{name:"signature",type:"function",raw:"(label: string) => void",signature:{arguments:[{type:{name:"string"},name:"label"}],return:{name:"void"}}},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string, onClick?: () => void) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"onClick"}],return:{name:"void"}}},description:""},onPopupOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLElement>, children: MenuItemType[]) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"e"},{type:{name:"Array",elements:[{name:"MenuItemType"}],raw:"MenuItemType[]"},name:"children"}],return:{name:"void"}}},description:""}}};function $({anchorEl:e,open:t,hoverMenuItems:o,selectedKey:s,onSelect:r,onClose:i,selectedColor:p}){return n.jsx(V,{anchorEl:e,open:t,onClose:i,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},transitionDuration:0,slotProps:{paper:{sx:{mt:1}}},children:o.map(a=>{const d=s===a.key;return n.jsxs(F,{selected:d,onClick:()=>{r(a.key,a.onClick),setTimeout(()=>i(),50)},sx:O(d,p),children:[a.icon,n.jsx(T,{sx:ee,primary:n.jsx(y,{sx:{fontSize:"15px",fontWeight:560},children:a.label})})]},a.key)})})}$.__docgenInfo={description:"",methods:[],displayName:"PopupMenu",props:{anchorEl:{required:!0,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},hoverMenuItems:{required:!0,tsType:{name:"Array",elements:[{name:"MenuItemType"}],raw:"MenuItemType[]"},description:""},selectedKey:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string, onClick?: () => void) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"onClick"}],return:{name:"void"}}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},selectedColor:{required:!0,tsType:{name:"string"},description:""}}};function re({isOpen:e,items:t,width:o=240,collapsedWidth:s=56,top:r=0,selectedColor:i="#e6e6e6",selectedKey:p,backgroundColor:a,header:d,footer:l,fontColor:x}){const[g,f]=c.useState({}),[R,_]=c.useState(null),[v,M]=c.useState(null),[H,b]=c.useState([]),k=p??R,w=()=>{M(null),b([])};c.useEffect(()=>{e&&w()},[e]);const z=m=>f(u=>({...u,[m]:!u[m]})),q=(m,u)=>{p===void 0&&_(m),u==null||u()},D=(m,u)=>{m.stopPropagation(),M(m.currentTarget),b(u)};return n.jsxs(n.Fragment,{children:[n.jsx(X,{open:e,variant:"permanent",sx:Y(e,o,s,r,a,x),"data-testid":"toolpad",children:n.jsxs(j,{"data-testid":"toolpad-list",sx:{p:0,height:"100%",display:"flex",flexDirection:"column"},children:[n.jsx(h,{sx:{position:"sticky",top:0,zIndex:1,background:a},children:d}),n.jsx(h,{sx:{flexGrow:1,overflowY:"auto"},children:t.map((m,u)=>n.jsx(P,{group:m,isOpen:e,isLast:u===t.length-1,openMenus:g,selectedKey:k,selectedColor:i,onToggleSubMenu:z,onSelect:q,onPopupOpen:D},`group-${u}`))}),n.jsx(h,{sx:{position:"sticky",bottom:0,zIndex:1,background:a},children:l})]})}),n.jsx($,{anchorEl:v,open:!!v,hoverMenuItems:H,selectedKey:k,onClose:w,onSelect:q,selectedColor:i})]})}re.__docgenInfo={description:"",methods:[],displayName:"Toolpad",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"MenuGroup"}],raw:"MenuGroup[]"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"240",computed:!1}},collapsedWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"56",computed:!1}},top:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},selectedColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#e6e6e6'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},selectedKey:{required:!1,tsType:{name:"string"},description:""},fontColor:{required:!1,tsType:{name:"string"},description:""},header:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{re as T};
