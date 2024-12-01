import{r as n}from"./index-BP8_t0zE.js";import"./react-is.production.min-DUDD-a5e.js";import{g as po,b as co,s as k,u as uo,c as V,a as fo,r as wo}from"./DefaultPropsProvider-CBZfYqC6.js";import{u as bo}from"./index-DiL3kUBv.js";import{j}from"./extends-BZziWbxp.js";import{i as xo}from"./isHostComponent-DVu5iVWx.js";import{u as eo}from"./useSlot-BxHZVQtO.js";import{M as Eo}from"./Modal-DlLEeJp6.js";import{P as So}from"./Paper-CjD7ugLR.js";import{o as ro}from"./ownerDocument-DW-IO8s5.js";import{o as so,d as To}from"./ownerWindow-BN2rbQ_G.js";import{u as Co}from"./useForkRef-rM2yqL0Y.js";import{G as Oo}from"./Grow-D6iu-O35.js";import{M as zo}from"./MenuList-CFY98bhA.js";import{u as no}from"./useSlotProps-Xloz1bZq.js";function Lo(t){return co("MuiPopover",t)}po("MuiPopover",["root","paper"]);function io(t,o){let r=0;return typeof o=="number"?r=o:o==="center"?r=t.height/2:o==="bottom"&&(r=t.height),r}function ao(t,o){let r=0;return typeof o=="number"?r=o:o==="center"?r=t.width/2:o==="right"&&(r=t.width),r}function lo(t){return[t.horizontal,t.vertical].map(o=>typeof o=="number"?`${o}px`:o).join(" ")}function K(t){return typeof t=="function"?t():t}const Do=t=>{const{classes:o}=t;return fo({root:["root"],paper:["paper"]},Lo,o)},No=k(Eo,{name:"MuiPopover",slot:"Root",overridesResolver:(t,o)=>o.root})({}),mo=k(So,{name:"MuiPopover",slot:"Paper",overridesResolver:(t,o)=>o.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Io=n.forwardRef(function(o,r){const S=uo({props:o,name:"MuiPopover"}),{action:T,anchorEl:l,anchorOrigin:g={vertical:"top",horizontal:"left"},anchorPosition:w,anchorReference:f="anchorEl",children:C,className:F,container:W,elevation:H=8,marginThreshold:i=16,open:p,PaperProps:A={},slots:O={},slotProps:h={},transformOrigin:P={vertical:"top",horizontal:"left"},TransitionComponent:z=Oo,transitionDuration:M="auto",TransitionProps:{onEntering:y,...b}={},disableScrollLock:L=!1,...D}=S,m=(h==null?void 0:h.paper)??A,N=n.useRef(),v={...S,anchorOrigin:g,anchorReference:f,elevation:H,marginThreshold:i,externalPaperSlotProps:m,transformOrigin:P,TransitionComponent:z,transitionDuration:M,TransitionProps:b},I=Do(v),U=n.useCallback(()=>{if(f==="anchorPosition")return w;const e=K(l),a=(e&&e.nodeType===1?e:ro(N.current).body).getBoundingClientRect();return{top:a.top+io(a,g.vertical),left:a.left+ao(a,g.horizontal)}},[l,g.horizontal,g.vertical,w,f]),G=n.useCallback(e=>({vertical:io(e,P.vertical),horizontal:ao(e,P.horizontal)}),[P.horizontal,P.vertical]),$=n.useCallback(e=>{const s={width:e.offsetWidth,height:e.offsetHeight},a=G(s);if(f==="none")return{top:null,left:null,transformOrigin:lo(a)};const q=U();let x=q.top-a.vertical,E=q.left-a.horizontal;const J=x+s.height,Q=E+s.width,Z=so(K(l)),oo=Z.innerHeight-i,to=Z.innerWidth-i;if(i!==null&&x<i){const u=x-i;x-=u,a.vertical+=u}else if(i!==null&&J>oo){const u=J-oo;x-=u,a.vertical+=u}if(i!==null&&E<i){const u=E-i;E-=u,a.horizontal+=u}else if(Q>to){const u=Q-to;E-=u,a.horizontal+=u}return{top:`${Math.round(x)}px`,left:`${Math.round(E)}px`,transformOrigin:lo(a)}},[l,f,U,G,i]),[c,R]=n.useState(p),d=n.useCallback(()=>{const e=N.current;if(!e)return;const s=$(e);s.top!==null&&e.style.setProperty("top",s.top),s.left!==null&&(e.style.left=s.left),e.style.transformOrigin=s.transformOrigin,R(!0)},[$]);n.useEffect(()=>(L&&window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)),[l,L,d]);const ho=(e,s)=>{y&&y(e,s),d()},Po=()=>{R(!1)};n.useEffect(()=>{p&&d()}),n.useImperativeHandle(T,()=>p?{updatePosition:()=>{d()}}:null,[p,d]),n.useEffect(()=>{if(!p)return;const e=To(()=>{d()}),s=so(l);return s.addEventListener("resize",e),()=>{e.clear(),s.removeEventListener("resize",e)}},[l,p,d]);let _=M;M==="auto"&&!z.muiSupportAuto&&(_=void 0);const vo=W||(l?ro(K(l)).body:void 0),B={slots:O,slotProps:{...h,paper:m}},[go,X]=eo("paper",{elementType:mo,externalForwardedProps:B,additionalProps:{elevation:H,className:V(I.paper,m==null?void 0:m.className),style:c?m.style:{...m.style,opacity:0}},ownerState:v}),[Y,{slotProps:Mo,...yo}]=eo("root",{elementType:No,externalForwardedProps:B,additionalProps:{slotProps:{backdrop:{invisible:!0}},container:vo,open:p},ownerState:v,className:V(I.root,F)}),Ro=Co(N,X.ref);return j.jsx(Y,{...yo,...!xo(Y)&&{slotProps:Mo,disableScrollLock:L},...D,ref:r,children:j.jsx(z,{appear:!0,in:p,onEntering:ho,onExited:Po,timeout:_,...b,children:j.jsx(go,{...X,ref:Ro,children:C})})})});function jo(t){return co("MuiMenu",t)}po("MuiMenu",["root","paper","list"]);const ko={vertical:"top",horizontal:"right"},Fo={vertical:"top",horizontal:"left"},Wo=t=>{const{classes:o}=t;return fo({root:["root"],paper:["paper"],list:["list"]},jo,o)},Ho=k(Io,{shouldForwardProp:t=>wo(t)||t==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(t,o)=>o.root})({}),Ao=k(mo,{name:"MuiMenu",slot:"Paper",overridesResolver:(t,o)=>o.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Uo=k(zo,{name:"MuiMenu",slot:"List",overridesResolver:(t,o)=>o.list})({outline:0}),rt=n.forwardRef(function(o,r){const S=uo({props:o,name:"MuiMenu"}),{autoFocus:T=!0,children:l,className:g,disableAutoFocusItem:w=!1,MenuListProps:f={},onClose:C,open:F,PaperProps:W={},PopoverClasses:H,transitionDuration:i="auto",TransitionProps:{onEntering:p,...A}={},variant:O="selectedMenu",slots:h={},slotProps:P={},...z}=S,M=bo(),y={...S,autoFocus:T,disableAutoFocusItem:w,MenuListProps:f,onEntering:p,PaperProps:W,transitionDuration:i,TransitionProps:A,variant:O},b=Wo(y),L=T&&!w&&F,D=n.useRef(null),m=(c,R)=>{D.current&&D.current.adjustStyleForScrollbar(c,{direction:M?"rtl":"ltr"}),p&&p(c,R)},N=c=>{c.key==="Tab"&&(c.preventDefault(),C&&C(c,"tabKeyDown"))};let v=-1;n.Children.map(l,(c,R)=>{n.isValidElement(c)&&(c.props.disabled||(O==="selectedMenu"&&c.props.selected||v===-1)&&(v=R))});const I=h.paper??Ao,U=P.paper??W,G=no({elementType:h.root,externalSlotProps:P.root,ownerState:y,className:[b.root,g]}),$=no({elementType:I,externalSlotProps:U,ownerState:y,className:b.paper});return j.jsx(Ho,{onClose:C,anchorOrigin:{vertical:"bottom",horizontal:M?"right":"left"},transformOrigin:M?ko:Fo,slots:{paper:I,root:h.root},slotProps:{root:G,paper:$},open:F,ref:r,transitionDuration:i,TransitionProps:{onEntering:m,...A},ownerState:y,...z,classes:H,children:j.jsx(Uo,{onKeyDown:N,actions:D,autoFocus:T&&(v===-1||w),autoFocusItem:L,variant:O,...f,className:V(b.list,f.className),children:l})})});export{rt as M};