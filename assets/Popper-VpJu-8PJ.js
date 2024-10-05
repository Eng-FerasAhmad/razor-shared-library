import{u as ge}from"./index-DiL3kUBv.js";import{r as k}from"./index-BP8_t0zE.js";import{g as ye,a as be,h as we,s as xe,e as Oe}from"./DefaultPropsProvider-DxvFDAWb.js";import{j as yt}from"./extends-BZziWbxp.js";import{o as It}from"./ownerDocument-DW-IO8s5.js";import{P as Pe}from"./Portal-ntkeNcXE.js";import{u as Xt}from"./useForkRef-rM2yqL0Y.js";import{b as Yt}from"./useTimeout-BN_3i7zA.js";import{u as Ee}from"./useSlotProps-0C5KtUUD.js";var $="top",W="bottom",H="right",T="left",Dt="auto",ct=[$,W,H,T],_="start",pt="end",Re="clippingParents",re="viewport",at="popper",Ae="reference",zt=ct.reduce(function(t,e){return t.concat([e+"-"+_,e+"-"+pt])},[]),oe=[].concat(ct,[Dt]).reduce(function(t,e){return t.concat([e,e+"-"+_,e+"-"+pt])},[]),je="beforeRead",De="read",Ce="afterRead",Be="beforeMain",$e="main",Te="afterMain",Se="beforeWrite",Me="write",ke="afterWrite",Le=[je,De,Ce,Be,$e,Te,Se,Me,ke];function N(t){return t?(t.nodeName||"").toLowerCase():null}function M(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Q(t){var e=M(t).Element;return t instanceof e||t instanceof Element}function L(t){var e=M(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Ct(t){if(typeof ShadowRoot>"u")return!1;var e=M(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function We(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var o=e.styles[r]||{},n=e.attributes[r]||{},i=e.elements[r];!L(i)||!N(i)||(Object.assign(i.style,o),Object.keys(n).forEach(function(f){var a=n[f];a===!1?i.removeAttribute(f):i.setAttribute(f,a===!0?"":a)}))})}function He(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(o){var n=e.elements[o],i=e.attributes[o]||{},f=Object.keys(e.styles.hasOwnProperty(o)?e.styles[o]:r[o]),a=f.reduce(function(s,c){return s[c]="",s},{});!L(n)||!N(n)||(Object.assign(n.style,a),Object.keys(i).forEach(function(s){n.removeAttribute(s)}))})}}const Ve={name:"applyStyles",enabled:!0,phase:"write",fn:We,effect:He,requires:["computeStyles"]};function V(t){return t.split("-")[0]}var K=Math.max,bt=Math.min,tt=Math.round;function Rt(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function ne(){return!/^((?!chrome|android).)*safari/i.test(Rt())}function et(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var o=t.getBoundingClientRect(),n=1,i=1;e&&L(t)&&(n=t.offsetWidth>0&&tt(o.width)/t.offsetWidth||1,i=t.offsetHeight>0&&tt(o.height)/t.offsetHeight||1);var f=Q(t)?M(t):window,a=f.visualViewport,s=!ne()&&r,c=(o.left+(s&&a?a.offsetLeft:0))/n,p=(o.top+(s&&a?a.offsetTop:0))/i,m=o.width/n,y=o.height/i;return{width:m,height:y,top:p,right:c+m,bottom:p+y,left:c,x:c,y:p}}function Bt(t){var e=et(t),r=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:o}}function ae(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Ct(r)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function q(t){return M(t).getComputedStyle(t)}function Ne(t){return["table","td","th"].indexOf(N(t))>=0}function Y(t){return((Q(t)?t.ownerDocument:t.document)||window.document).documentElement}function wt(t){return N(t)==="html"?t:t.assignedSlot||t.parentNode||(Ct(t)?t.host:null)||Y(t)}function Gt(t){return!L(t)||q(t).position==="fixed"?null:t.offsetParent}function Fe(t){var e=/firefox/i.test(Rt()),r=/Trident/i.test(Rt());if(r&&L(t)){var o=q(t);if(o.position==="fixed")return null}var n=wt(t);for(Ct(n)&&(n=n.host);L(n)&&["html","body"].indexOf(N(n))<0;){var i=q(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function lt(t){for(var e=M(t),r=Gt(t);r&&Ne(r)&&q(r).position==="static";)r=Gt(r);return r&&(N(r)==="html"||N(r)==="body"&&q(r).position==="static")?e:r||Fe(t)||e}function $t(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function it(t,e,r){return K(t,bt(e,r))}function Ue(t,e,r){var o=it(t,e,r);return o>r?r:o}function ie(){return{top:0,right:0,bottom:0,left:0}}function se(t){return Object.assign({},ie(),t)}function pe(t,e){return e.reduce(function(r,o){return r[o]=t,r},{})}var qe=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,se(typeof e!="number"?e:pe(e,ct))};function Ie(t){var e,r=t.state,o=t.name,n=t.options,i=r.elements.arrow,f=r.modifiersData.popperOffsets,a=V(r.placement),s=$t(a),c=[T,H].indexOf(a)>=0,p=c?"height":"width";if(!(!i||!f)){var m=qe(n.padding,r),y=Bt(i),l=s==="y"?$:T,x=s==="y"?W:H,d=r.rects.reference[p]+r.rects.reference[s]-f[s]-r.rects.popper[p],v=f[s]-r.rects.reference[s],b=lt(i),O=b?s==="y"?b.clientHeight||0:b.clientWidth||0:0,w=d/2-v/2,u=m[l],h=O-y[p]-m[x],g=O/2-y[p]/2+w,P=it(u,g,h),A=s;r.modifiersData[o]=(e={},e[A]=P,e.centerOffset=P-g,e)}}function Xe(t){var e=t.state,r=t.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||ae(e.elements.popper,n)&&(e.elements.arrow=n))}const Ye={name:"arrow",enabled:!0,phase:"main",fn:Ie,effect:Xe,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function rt(t){return t.split("-")[1]}var ze={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ge(t,e){var r=t.x,o=t.y,n=e.devicePixelRatio||1;return{x:tt(r*n)/n||0,y:tt(o*n)/n||0}}function Jt(t){var e,r=t.popper,o=t.popperRect,n=t.placement,i=t.variation,f=t.offsets,a=t.position,s=t.gpuAcceleration,c=t.adaptive,p=t.roundOffsets,m=t.isFixed,y=f.x,l=y===void 0?0:y,x=f.y,d=x===void 0?0:x,v=typeof p=="function"?p({x:l,y:d}):{x:l,y:d};l=v.x,d=v.y;var b=f.hasOwnProperty("x"),O=f.hasOwnProperty("y"),w=T,u=$,h=window;if(c){var g=lt(r),P="clientHeight",A="clientWidth";if(g===M(r)&&(g=Y(r),q(g).position!=="static"&&a==="absolute"&&(P="scrollHeight",A="scrollWidth")),g=g,n===$||(n===T||n===H)&&i===pt){u=W;var R=m&&g===h&&h.visualViewport?h.visualViewport.height:g[P];d-=R-o.height,d*=s?1:-1}if(n===T||(n===$||n===W)&&i===pt){w=H;var E=m&&g===h&&h.visualViewport?h.visualViewport.width:g[A];l-=E-o.width,l*=s?1:-1}}var j=Object.assign({position:a},c&&ze),S=p===!0?Ge({x:l,y:d},M(r)):{x:l,y:d};if(l=S.x,d=S.y,s){var C;return Object.assign({},j,(C={},C[u]=O?"0":"",C[w]=b?"0":"",C.transform=(h.devicePixelRatio||1)<=1?"translate("+l+"px, "+d+"px)":"translate3d("+l+"px, "+d+"px, 0)",C))}return Object.assign({},j,(e={},e[u]=O?d+"px":"",e[w]=b?l+"px":"",e.transform="",e))}function Je(t){var e=t.state,r=t.options,o=r.gpuAcceleration,n=o===void 0?!0:o,i=r.adaptive,f=i===void 0?!0:i,a=r.roundOffsets,s=a===void 0?!0:a,c={placement:V(e.placement),variation:rt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Jt(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:f,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Jt(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Ke={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Je,data:{}};var ht={passive:!0};function Qe(t){var e=t.state,r=t.instance,o=t.options,n=o.scroll,i=n===void 0?!0:n,f=o.resize,a=f===void 0?!0:f,s=M(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&c.forEach(function(p){p.addEventListener("scroll",r.update,ht)}),a&&s.addEventListener("resize",r.update,ht),function(){i&&c.forEach(function(p){p.removeEventListener("scroll",r.update,ht)}),a&&s.removeEventListener("resize",r.update,ht)}}const Ze={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Qe,data:{}};var _e={left:"right",right:"left",bottom:"top",top:"bottom"};function gt(t){return t.replace(/left|right|bottom|top/g,function(e){return _e[e]})}var tr={start:"end",end:"start"};function Kt(t){return t.replace(/start|end/g,function(e){return tr[e]})}function Tt(t){var e=M(t),r=e.pageXOffset,o=e.pageYOffset;return{scrollLeft:r,scrollTop:o}}function St(t){return et(Y(t)).left+Tt(t).scrollLeft}function er(t,e){var r=M(t),o=Y(t),n=r.visualViewport,i=o.clientWidth,f=o.clientHeight,a=0,s=0;if(n){i=n.width,f=n.height;var c=ne();(c||!c&&e==="fixed")&&(a=n.offsetLeft,s=n.offsetTop)}return{width:i,height:f,x:a+St(t),y:s}}function rr(t){var e,r=Y(t),o=Tt(t),n=(e=t.ownerDocument)==null?void 0:e.body,i=K(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),f=K(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-o.scrollLeft+St(t),s=-o.scrollTop;return q(n||r).direction==="rtl"&&(a+=K(r.clientWidth,n?n.clientWidth:0)-i),{width:i,height:f,x:a,y:s}}function Mt(t){var e=q(t),r=e.overflow,o=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function fe(t){return["html","body","#document"].indexOf(N(t))>=0?t.ownerDocument.body:L(t)&&Mt(t)?t:fe(wt(t))}function st(t,e){var r;e===void 0&&(e=[]);var o=fe(t),n=o===((r=t.ownerDocument)==null?void 0:r.body),i=M(o),f=n?[i].concat(i.visualViewport||[],Mt(o)?o:[]):o,a=e.concat(f);return n?a:a.concat(st(wt(f)))}function At(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function or(t,e){var r=et(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function Qt(t,e,r){return e===re?At(er(t,r)):Q(e)?or(e,r):At(rr(Y(t)))}function nr(t){var e=st(wt(t)),r=["absolute","fixed"].indexOf(q(t).position)>=0,o=r&&L(t)?lt(t):t;return Q(o)?e.filter(function(n){return Q(n)&&ae(n,o)&&N(n)!=="body"}):[]}function ar(t,e,r,o){var n=e==="clippingParents"?nr(t):[].concat(e),i=[].concat(n,[r]),f=i[0],a=i.reduce(function(s,c){var p=Qt(t,c,o);return s.top=K(p.top,s.top),s.right=bt(p.right,s.right),s.bottom=bt(p.bottom,s.bottom),s.left=K(p.left,s.left),s},Qt(t,f,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function ce(t){var e=t.reference,r=t.element,o=t.placement,n=o?V(o):null,i=o?rt(o):null,f=e.x+e.width/2-r.width/2,a=e.y+e.height/2-r.height/2,s;switch(n){case $:s={x:f,y:e.y-r.height};break;case W:s={x:f,y:e.y+e.height};break;case H:s={x:e.x+e.width,y:a};break;case T:s={x:e.x-r.width,y:a};break;default:s={x:e.x,y:e.y}}var c=n?$t(n):null;if(c!=null){var p=c==="y"?"height":"width";switch(i){case _:s[c]=s[c]-(e[p]/2-r[p]/2);break;case pt:s[c]=s[c]+(e[p]/2-r[p]/2);break}}return s}function ft(t,e){e===void 0&&(e={});var r=e,o=r.placement,n=o===void 0?t.placement:o,i=r.strategy,f=i===void 0?t.strategy:i,a=r.boundary,s=a===void 0?Re:a,c=r.rootBoundary,p=c===void 0?re:c,m=r.elementContext,y=m===void 0?at:m,l=r.altBoundary,x=l===void 0?!1:l,d=r.padding,v=d===void 0?0:d,b=se(typeof v!="number"?v:pe(v,ct)),O=y===at?Ae:at,w=t.rects.popper,u=t.elements[x?O:y],h=ar(Q(u)?u:u.contextElement||Y(t.elements.popper),s,p,f),g=et(t.elements.reference),P=ce({reference:g,element:w,strategy:"absolute",placement:n}),A=At(Object.assign({},w,P)),R=y===at?A:g,E={top:h.top-R.top+b.top,bottom:R.bottom-h.bottom+b.bottom,left:h.left-R.left+b.left,right:R.right-h.right+b.right},j=t.modifiersData.offset;if(y===at&&j){var S=j[n];Object.keys(E).forEach(function(C){var F=[H,W].indexOf(C)>=0?1:-1,U=[$,W].indexOf(C)>=0?"y":"x";E[C]+=S[U]*F})}return E}function ir(t,e){e===void 0&&(e={});var r=e,o=r.placement,n=r.boundary,i=r.rootBoundary,f=r.padding,a=r.flipVariations,s=r.allowedAutoPlacements,c=s===void 0?oe:s,p=rt(o),m=p?a?zt:zt.filter(function(x){return rt(x)===p}):ct,y=m.filter(function(x){return c.indexOf(x)>=0});y.length===0&&(y=m);var l=y.reduce(function(x,d){return x[d]=ft(t,{placement:d,boundary:n,rootBoundary:i,padding:f})[V(d)],x},{});return Object.keys(l).sort(function(x,d){return l[x]-l[d]})}function sr(t){if(V(t)===Dt)return[];var e=gt(t);return[Kt(t),e,Kt(e)]}function pr(t){var e=t.state,r=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var n=r.mainAxis,i=n===void 0?!0:n,f=r.altAxis,a=f===void 0?!0:f,s=r.fallbackPlacements,c=r.padding,p=r.boundary,m=r.rootBoundary,y=r.altBoundary,l=r.flipVariations,x=l===void 0?!0:l,d=r.allowedAutoPlacements,v=e.options.placement,b=V(v),O=b===v,w=s||(O||!x?[gt(v)]:sr(v)),u=[v].concat(w).reduce(function(Z,X){return Z.concat(V(X)===Dt?ir(e,{placement:X,boundary:p,rootBoundary:m,padding:c,flipVariations:x,allowedAutoPlacements:d}):X)},[]),h=e.rects.reference,g=e.rects.popper,P=new Map,A=!0,R=u[0],E=0;E<u.length;E++){var j=u[E],S=V(j),C=rt(j)===_,F=[$,W].indexOf(S)>=0,U=F?"width":"height",D=ft(e,{placement:j,boundary:p,rootBoundary:m,altBoundary:y,padding:c}),B=F?C?H:T:C?W:$;h[U]>g[U]&&(B=gt(B));var I=gt(B),z=[];if(i&&z.push(D[S]<=0),a&&z.push(D[B]<=0,D[I]<=0),z.every(function(Z){return Z})){R=j,A=!1;break}P.set(j,z)}if(A)for(var ut=x?3:1,xt=function(X){var nt=u.find(function(vt){var G=P.get(vt);if(G)return G.slice(0,X).every(function(Ot){return Ot})});if(nt)return R=nt,"break"},ot=ut;ot>0;ot--){var dt=xt(ot);if(dt==="break")break}e.placement!==R&&(e.modifiersData[o]._skip=!0,e.placement=R,e.reset=!0)}}const fr={name:"flip",enabled:!0,phase:"main",fn:pr,requiresIfExists:["offset"],data:{_skip:!1}};function Zt(t,e,r){return r===void 0&&(r={x:0,y:0}),{top:t.top-e.height-r.y,right:t.right-e.width+r.x,bottom:t.bottom-e.height+r.y,left:t.left-e.width-r.x}}function _t(t){return[$,H,W,T].some(function(e){return t[e]>=0})}function cr(t){var e=t.state,r=t.name,o=e.rects.reference,n=e.rects.popper,i=e.modifiersData.preventOverflow,f=ft(e,{elementContext:"reference"}),a=ft(e,{altBoundary:!0}),s=Zt(f,o),c=Zt(a,n,i),p=_t(s),m=_t(c);e.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:m},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":m})}const lr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:cr};function ur(t,e,r){var o=V(t),n=[T,$].indexOf(o)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,f=i[0],a=i[1];return f=f||0,a=(a||0)*n,[T,H].indexOf(o)>=0?{x:a,y:f}:{x:f,y:a}}function dr(t){var e=t.state,r=t.options,o=t.name,n=r.offset,i=n===void 0?[0,0]:n,f=oe.reduce(function(p,m){return p[m]=ur(m,e.rects,i),p},{}),a=f[e.placement],s=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=c),e.modifiersData[o]=f}const vr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:dr};function mr(t){var e=t.state,r=t.name;e.modifiersData[r]=ce({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const hr={name:"popperOffsets",enabled:!0,phase:"read",fn:mr,data:{}};function gr(t){return t==="x"?"y":"x"}function yr(t){var e=t.state,r=t.options,o=t.name,n=r.mainAxis,i=n===void 0?!0:n,f=r.altAxis,a=f===void 0?!1:f,s=r.boundary,c=r.rootBoundary,p=r.altBoundary,m=r.padding,y=r.tether,l=y===void 0?!0:y,x=r.tetherOffset,d=x===void 0?0:x,v=ft(e,{boundary:s,rootBoundary:c,padding:m,altBoundary:p}),b=V(e.placement),O=rt(e.placement),w=!O,u=$t(b),h=gr(u),g=e.modifiersData.popperOffsets,P=e.rects.reference,A=e.rects.popper,R=typeof d=="function"?d(Object.assign({},e.rects,{placement:e.placement})):d,E=typeof R=="number"?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),j=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,S={x:0,y:0};if(g){if(i){var C,F=u==="y"?$:T,U=u==="y"?W:H,D=u==="y"?"height":"width",B=g[u],I=B+v[F],z=B-v[U],ut=l?-A[D]/2:0,xt=O===_?P[D]:A[D],ot=O===_?-A[D]:-P[D],dt=e.elements.arrow,Z=l&&dt?Bt(dt):{width:0,height:0},X=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:ie(),nt=X[F],vt=X[U],G=it(0,P[D],Z[D]),Ot=w?P[D]/2-ut-G-nt-E.mainAxis:xt-G-nt-E.mainAxis,le=w?-P[D]/2+ut+G+vt+E.mainAxis:ot+G+vt+E.mainAxis,Pt=e.elements.arrow&&lt(e.elements.arrow),ue=Pt?u==="y"?Pt.clientTop||0:Pt.clientLeft||0:0,kt=(C=j==null?void 0:j[u])!=null?C:0,de=B+Ot-kt-ue,ve=B+le-kt,Lt=it(l?bt(I,de):I,B,l?K(z,ve):z);g[u]=Lt,S[u]=Lt-B}if(a){var Wt,me=u==="x"?$:T,he=u==="x"?W:H,J=g[h],mt=h==="y"?"height":"width",Ht=J+v[me],Vt=J-v[he],Et=[$,T].indexOf(b)!==-1,Nt=(Wt=j==null?void 0:j[h])!=null?Wt:0,Ft=Et?Ht:J-P[mt]-A[mt]-Nt+E.altAxis,Ut=Et?J+P[mt]+A[mt]-Nt-E.altAxis:Vt,qt=l&&Et?Ue(Ft,J,Ut):it(l?Ft:Ht,J,l?Ut:Vt);g[h]=qt,S[h]=qt-J}e.modifiersData[o]=S}}const br={name:"preventOverflow",enabled:!0,phase:"main",fn:yr,requiresIfExists:["offset"]};function wr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function xr(t){return t===M(t)||!L(t)?Tt(t):wr(t)}function Or(t){var e=t.getBoundingClientRect(),r=tt(e.width)/t.offsetWidth||1,o=tt(e.height)/t.offsetHeight||1;return r!==1||o!==1}function Pr(t,e,r){r===void 0&&(r=!1);var o=L(e),n=L(e)&&Or(e),i=Y(e),f=et(t,n,r),a={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!r)&&((N(e)!=="body"||Mt(i))&&(a=xr(e)),L(e)?(s=et(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):i&&(s.x=St(i))),{x:f.left+a.scrollLeft-s.x,y:f.top+a.scrollTop-s.y,width:f.width,height:f.height}}function Er(t){var e=new Map,r=new Set,o=[];t.forEach(function(i){e.set(i.name,i)});function n(i){r.add(i.name);var f=[].concat(i.requires||[],i.requiresIfExists||[]);f.forEach(function(a){if(!r.has(a)){var s=e.get(a);s&&n(s)}}),o.push(i)}return t.forEach(function(i){r.has(i.name)||n(i)}),o}function Rr(t){var e=Er(t);return Le.reduce(function(r,o){return r.concat(e.filter(function(n){return n.phase===o}))},[])}function Ar(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function jr(t){var e=t.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(e).map(function(r){return e[r]})}var te={placement:"bottom",modifiers:[],strategy:"absolute"};function ee(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Dr(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,o=r===void 0?[]:r,n=e.defaultOptions,i=n===void 0?te:n;return function(a,s,c){c===void 0&&(c=i);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},te,i),modifiersData:{},elements:{reference:a,popper:s},attributes:{},styles:{}},m=[],y=!1,l={state:p,setOptions:function(b){var O=typeof b=="function"?b(p.options):b;d(),p.options=Object.assign({},i,p.options,O),p.scrollParents={reference:Q(a)?st(a):a.contextElement?st(a.contextElement):[],popper:st(s)};var w=Rr(jr([].concat(o,p.options.modifiers)));return p.orderedModifiers=w.filter(function(u){return u.enabled}),x(),l.update()},forceUpdate:function(){if(!y){var b=p.elements,O=b.reference,w=b.popper;if(ee(O,w)){p.rects={reference:Pr(O,lt(w),p.options.strategy==="fixed"),popper:Bt(w)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(E){return p.modifiersData[E.name]=Object.assign({},E.data)});for(var u=0;u<p.orderedModifiers.length;u++){if(p.reset===!0){p.reset=!1,u=-1;continue}var h=p.orderedModifiers[u],g=h.fn,P=h.options,A=P===void 0?{}:P,R=h.name;typeof g=="function"&&(p=g({state:p,options:A,name:R,instance:l})||p)}}}},update:Ar(function(){return new Promise(function(v){l.forceUpdate(),v(p)})}),destroy:function(){d(),y=!0}};if(!ee(a,s))return l;l.setOptions(c).then(function(v){!y&&c.onFirstUpdate&&c.onFirstUpdate(v)});function x(){p.orderedModifiers.forEach(function(v){var b=v.name,O=v.options,w=O===void 0?{}:O,u=v.effect;if(typeof u=="function"){var h=u({state:p,name:b,instance:l,options:w}),g=function(){};m.push(h||g)}})}function d(){m.forEach(function(v){return v()}),m=[]}return l}}var Cr=[Ze,hr,Ke,Ve,vr,fr,br,Ye,lr],Br=Dr({defaultModifiers:Cr});function $r(t){return be("MuiPopper",t)}ye("MuiPopper",["root"]);function Tr(t,e){if(e==="ltr")return t;switch(t){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return t}}function jt(t){return typeof t=="function"?t():t}function Sr(t){return t.nodeType!==void 0}const Mr=t=>{const{classes:e}=t;return we({root:["root"]},$r,e)},kr={},Lr=k.forwardRef(function(e,r){const{anchorEl:o,children:n,direction:i,disablePortal:f,modifiers:a,open:s,placement:c,popperOptions:p,popperRef:m,slotProps:y={},slots:l={},TransitionProps:x,ownerState:d,...v}=e,b=k.useRef(null),O=Xt(b,r),w=k.useRef(null),u=Xt(w,m),h=k.useRef(u);Yt(()=>{h.current=u},[u]),k.useImperativeHandle(m,()=>w.current,[]);const g=Tr(c,i),[P,A]=k.useState(g),[R,E]=k.useState(jt(o));k.useEffect(()=>{w.current&&w.current.forceUpdate()}),k.useEffect(()=>{o&&E(jt(o))},[o]),Yt(()=>{if(!R||!s)return;const U=I=>{A(I.placement)};let D=[{name:"preventOverflow",options:{altBoundary:f}},{name:"flip",options:{altBoundary:f}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:I})=>{U(I)}}];a!=null&&(D=D.concat(a)),p&&p.modifiers!=null&&(D=D.concat(p.modifiers));const B=Br(R,b.current,{placement:g,...p,modifiers:D});return h.current(B),()=>{B.destroy(),h.current(null)}},[R,f,a,s,p,g]);const j={placement:P};x!==null&&(j.TransitionProps=x);const S=Mr(e),C=l.root??"div",F=Ee({elementType:C,externalSlotProps:y.root,externalForwardedProps:v,additionalProps:{role:"tooltip",ref:O},ownerState:e,className:S.root});return yt.jsx(C,{...F,children:typeof n=="function"?n(j):n})}),Wr=k.forwardRef(function(e,r){const{anchorEl:o,children:n,container:i,direction:f="ltr",disablePortal:a=!1,keepMounted:s=!1,modifiers:c,open:p,placement:m="bottom",popperOptions:y=kr,popperRef:l,style:x,transition:d=!1,slotProps:v={},slots:b={},...O}=e,[w,u]=k.useState(!0),h=()=>{u(!1)},g=()=>{u(!0)};if(!s&&!p&&(!d||w))return null;let P;if(i)P=i;else if(o){const E=jt(o);P=E&&Sr(E)?It(E).body:It(null).body}const A=!p&&s&&(!d||w)?"none":void 0,R=d?{in:p,onEnter:h,onExited:g}:void 0;return yt.jsx(Pe,{disablePortal:a,container:P,children:yt.jsx(Lr,{anchorEl:o,direction:f,disablePortal:a,modifiers:c,ref:r,open:d?!w:p,placement:m,popperOptions:y,popperRef:l,slotProps:v,slots:b,...O,style:{position:"fixed",top:0,left:0,display:A,...x},TransitionProps:R,children:n})})}),Hr=xe(Wr,{name:"MuiPopper",slot:"Root",overridesResolver:(t,e)=>e.root})({}),Gr=k.forwardRef(function(e,r){const o=ge(),n=Oe({props:e,name:"MuiPopper"}),{anchorEl:i,component:f,components:a,componentsProps:s,container:c,disablePortal:p,keepMounted:m,modifiers:y,open:l,placement:x,popperOptions:d,popperRef:v,transition:b,slots:O,slotProps:w,...u}=n,h=(O==null?void 0:O.root)??(a==null?void 0:a.Root),g={anchorEl:i,container:c,disablePortal:p,keepMounted:m,modifiers:y,open:l,placement:x,popperOptions:d,popperRef:v,transition:b,...u};return yt.jsx(Hr,{as:f,direction:o?"rtl":"ltr",slots:{root:h},slotProps:w??s,...g,ref:r})});export{Gr as P};
