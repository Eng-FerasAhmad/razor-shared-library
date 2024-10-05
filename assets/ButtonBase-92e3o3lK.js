var St=Object.defineProperty;var Dt=(n,t,e)=>t in n?St(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var st=(n,t,e)=>Dt(n,typeof t!="symbol"?t+"":t,e);import{r as l,a as W}from"./index-BP8_t0zE.js";import{f as y,g as ut,s as Q,e as ct,a as Lt,h as wt}from"./DefaultPropsProvider-DxvFDAWb.js";import{_ as jt,j as v}from"./extends-BZziWbxp.js";import{k as Z}from"./emotion-react.browser.esm-DJu5jVRJ.js";import{c as kt,u as Nt,a as H}from"./useTimeout-BN_3i7zA.js";import{_ as vt,T as rt}from"./TransitionGroupContext-CV-AyoRm.js";import{_ as $t}from"./assertThisInitialized-B9jnkVVz.js";import{_ as Ft}from"./inheritsLoose-DR8r8Ogv.js";import{u as at}from"./useForkRef-rM2yqL0Y.js";import{i as lt}from"./isFocusVisible-B8k4qzLc.js";function tt(n,t){var e=function(i){return t&&l.isValidElement(i)?t(i):i},a=Object.create(null);return n&&l.Children.map(n,function(o){return o}).forEach(function(o){a[o.key]=e(o)}),a}function It(n,t){n=n||{},t=t||{};function e(d){return d in t?t[d]:n[d]}var a=Object.create(null),o=[];for(var i in n)i in t?o.length&&(a[i]=o,o=[]):o.push(i);var s,p={};for(var u in t){if(a[u])for(s=0;s<a[u].length;s++){var f=a[u][s];p[a[u][s]]=e(f)}p[u]=e(u)}for(s=0;s<o.length;s++)p[o[s]]=e(o[s]);return p}function N(n,t,e){return e[t]!=null?e[t]:n.props[t]}function Ut(n,t){return tt(n.children,function(e){return l.cloneElement(e,{onExited:t.bind(null,e),in:!0,appear:N(e,"appear",n),enter:N(e,"enter",n),exit:N(e,"exit",n)})})}function zt(n,t,e){var a=tt(n.children),o=It(t,a);return Object.keys(o).forEach(function(i){var s=o[i];if(l.isValidElement(s)){var p=i in t,u=i in a,f=t[i],d=l.isValidElement(f)&&!f.props.in;u&&(!p||d)?o[i]=l.cloneElement(s,{onExited:e.bind(null,s),in:!0,exit:N(s,"exit",n),enter:N(s,"enter",n)}):!u&&p&&!d?o[i]=l.cloneElement(s,{in:!1}):u&&p&&l.isValidElement(f)&&(o[i]=l.cloneElement(s,{onExited:e.bind(null,s),in:f.props.in,exit:N(s,"exit",n),enter:N(s,"enter",n)}))}}),o}var Ot=Object.values||function(n){return Object.keys(n).map(function(t){return n[t]})},At={component:"div",childFactory:function(t){return t}},et=function(n){Ft(t,n);function t(a,o){var i;i=n.call(this,a,o)||this;var s=i.handleExited.bind($t(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var e=t.prototype;return e.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},e.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,i){var s=i.children,p=i.handleExited,u=i.firstRender;return{children:u?Ut(o,p):zt(o,s,p),firstRender:!1}},e.handleExited=function(o,i){var s=tt(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(p){var u=jt({},p.children);return delete u[o.key],{children:u}}))},e.render=function(){var o=this.props,i=o.component,s=o.childFactory,p=vt(o,["component","childFactory"]),u=this.state.contextValue,f=Ot(this.state.children).map(s);return delete p.appear,delete p.enter,delete p.exit,i===null?W.createElement(rt.Provider,{value:u},f):W.createElement(rt.Provider,{value:u},W.createElement(i,p,f))},t}(W.Component);et.propTypes={};et.defaultProps=At;class G{constructor(){st(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const t=kt(G.create).current,[e,a]=l.useState(!1);return t.shouldMount=e,t.setShouldMount=a,l.useEffect(t.mountEffect,[e]),t}mount(){return this.mounted||(this.mounted=Yt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...t){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.start(...t)})}stop(...t){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.stop(...t)})}pulsate(...t){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.pulsate(...t)})}}function Xt(){return G.use()}function Yt(){let n,t;const e=new Promise((a,o)=>{n=a,t=o});return e.resolve=n,e.reject=t,e}function _t(n){const{className:t,classes:e,pulsate:a=!1,rippleX:o,rippleY:i,rippleSize:s,in:p,onExited:u,timeout:f}=n,[d,M]=l.useState(!1),g=y(t,e.ripple,e.rippleVisible,a&&e.ripplePulsate),V={width:s,height:s,top:-(s/2)+i,left:-(s/2)+o},h=y(e.child,d&&e.childLeaving,a&&e.childPulsate);return!p&&!d&&M(!0),l.useEffect(()=>{if(!p&&u!=null){const L=setTimeout(u,f);return()=>{clearTimeout(L)}}},[u,p,f]),v.jsx("span",{className:g,style:V,children:v.jsx("span",{className:h})})}const m=ut("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Kt=80,Wt=Z`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Ht=Z`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Gt=Z`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,qt=Q("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Jt=Q(_t,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${m.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Wt};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  &.${m.ripplePulsate} {
    animation-duration: ${({theme:n})=>n.transitions.duration.shorter}ms;
  }

  & .${m.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${m.childLeaving} {
    opacity: 0;
    animation-name: ${Ht};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
  }

  & .${m.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Gt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:n})=>n.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Qt=l.forwardRef(function(t,e){const a=ct({props:t,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:s,...p}=a,[u,f]=l.useState([]),d=l.useRef(0),M=l.useRef(null);l.useEffect(()=>{M.current&&(M.current(),M.current=null)},[u]);const g=l.useRef(!1),V=Nt(),h=l.useRef(null),L=l.useRef(null),E=l.useCallback(c=>{const{pulsate:R,rippleX:b,rippleY:I,rippleSize:w,cb:U}=c;f(x=>[...x,v.jsx(Jt,{classes:{ripple:y(i.ripple,m.ripple),rippleVisible:y(i.rippleVisible,m.rippleVisible),ripplePulsate:y(i.ripplePulsate,m.ripplePulsate),child:y(i.child,m.child),childLeaving:y(i.childLeaving,m.childLeaving),childPulsate:y(i.childPulsate,m.childPulsate)},timeout:J,pulsate:R,rippleX:b,rippleY:I,rippleSize:w},d.current)]),d.current+=1,M.current=U},[i]),$=l.useCallback((c={},R={},b=()=>{})=>{const{pulsate:I=!1,center:w=o||R.pulsate,fakeElement:U=!1}=R;if((c==null?void 0:c.type)==="mousedown"&&g.current){g.current=!1;return}(c==null?void 0:c.type)==="touchstart"&&(g.current=!0);const x=U?null:L.current,B=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let S,C,D;if(w||c===void 0||c.clientX===0&&c.clientY===0||!c.clientX&&!c.touches)S=Math.round(B.width/2),C=Math.round(B.height/2);else{const{clientX:z,clientY:j}=c.touches&&c.touches.length>0?c.touches[0]:c;S=Math.round(z-B.left),C=Math.round(j-B.top)}if(w)D=Math.sqrt((2*B.width**2+B.height**2)/3),D%2===0&&(D+=1);else{const z=Math.max(Math.abs((x?x.clientWidth:0)-S),S)*2+2,j=Math.max(Math.abs((x?x.clientHeight:0)-C),C)*2+2;D=Math.sqrt(z**2+j**2)}c!=null&&c.touches?h.current===null&&(h.current=()=>{E({pulsate:I,rippleX:S,rippleY:C,rippleSize:D,cb:b})},V.start(Kt,()=>{h.current&&(h.current(),h.current=null)})):E({pulsate:I,rippleX:S,rippleY:C,rippleSize:D,cb:b})},[o,E,V]),Y=l.useCallback(()=>{$({},{pulsate:!0})},[$]),F=l.useCallback((c,R)=>{if(V.clear(),(c==null?void 0:c.type)==="touchend"&&h.current){h.current(),h.current=null,V.start(0,()=>{F(c,R)});return}h.current=null,f(b=>b.length>0?b.slice(1):b),M.current=R},[V]);return l.useImperativeHandle(e,()=>({pulsate:Y,start:$,stop:F}),[Y,$,F]),v.jsx(qt,{className:y(m.root,i.root,s),ref:L,...p,children:v.jsx(et,{component:null,exit:!0,children:u})})});function Zt(n){return Lt("MuiButtonBase",n)}const te=ut("MuiButtonBase",["root","disabled","focusVisible"]),ee=n=>{const{disabled:t,focusVisible:e,focusVisibleClassName:a,classes:o}=n,s=wt({root:["root",t&&"disabled",e&&"focusVisible"]},Zt,o);return e&&a&&(s.root+=` ${a}`),s},ne=Q("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(n,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${te.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),me=l.forwardRef(function(t,e){const a=ct({props:t,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:s,className:p,component:u="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:M=!1,focusRipple:g=!1,focusVisibleClassName:V,LinkComponent:h="a",onBlur:L,onClick:E,onContextMenu:$,onDragLeave:Y,onFocus:F,onFocusVisible:c,onKeyDown:R,onKeyUp:b,onMouseDown:I,onMouseLeave:w,onMouseUp:U,onTouchEnd:x,onTouchMove:B,onTouchStart:S,tabIndex:C=0,TouchRippleProps:D,touchRippleRef:z,type:j,...O}=a,A=l.useRef(null),T=Xt(),pt=at(T.ref,z),[k,_]=l.useState(!1);f&&k&&_(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{_(!0),A.current.focus()}}),[]);const ft=T.shouldMount&&!d&&!f;l.useEffect(()=>{k&&g&&!d&&T.pulsate()},[d,g,k,T]);function P(r,ot,Bt=M){return H(it=>(ot&&ot(it),Bt||T[r](it),!0))}const dt=P("start",I),ht=P("stop",$),mt=P("stop",Y),gt=P("stop",U),bt=P("stop",r=>{k&&r.preventDefault(),w&&w(r)}),Mt=P("start",S),Rt=P("stop",x),xt=P("stop",B),yt=P("stop",r=>{lt(r.target)||_(!1),L&&L(r)},!1),Et=H(r=>{A.current||(A.current=r.currentTarget),lt(r.target)&&(_(!0),c&&c(r)),F&&F(r)}),q=()=>{const r=A.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Ct=H(r=>{g&&!r.repeat&&k&&r.key===" "&&T.stop(r,()=>{T.start(r)}),r.target===r.currentTarget&&q()&&r.key===" "&&r.preventDefault(),R&&R(r),r.target===r.currentTarget&&q()&&r.key==="Enter"&&!f&&(r.preventDefault(),E&&E(r))}),Tt=H(r=>{g&&r.key===" "&&k&&!r.defaultPrevented&&T.stop(r,()=>{T.pulsate(r)}),b&&b(r),E&&r.target===r.currentTarget&&q()&&r.key===" "&&!r.defaultPrevented&&E(r)});let K=u;K==="button"&&(O.href||O.to)&&(K=h);const X={};K==="button"?(X.type=j===void 0?"button":j,X.disabled=f):(!O.href&&!O.to&&(X.role="button"),f&&(X["aria-disabled"]=f));const Pt=at(e,A),nt={...a,centerRipple:i,component:u,disabled:f,disableRipple:d,disableTouchRipple:M,focusRipple:g,tabIndex:C,focusVisible:k},Vt=ee(nt);return v.jsxs(ne,{as:K,className:y(Vt.root,p),ownerState:nt,onBlur:yt,onClick:E,onContextMenu:ht,onFocus:Et,onKeyDown:Ct,onKeyUp:Tt,onMouseDown:dt,onMouseLeave:bt,onMouseUp:gt,onDragLeave:mt,onTouchEnd:Rt,onTouchMove:xt,onTouchStart:Mt,ref:Pt,tabIndex:f?-1:C,type:j,...X,...O,children:[s,ft?v.jsx(Qt,{ref:pt,center:i,...D}):null]})});export{me as B,et as T};
