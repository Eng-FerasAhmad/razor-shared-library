import{j as g}from"./jsx-runtime-DiklIkkE.js";import{c as D}from"./color-EH4scy8d.js";import{r as l}from"./index-DRjF_FHU.js";import{R as Ke,K as Re,S as Ve,T as I,E as Ee,U as Ne,C as ze,u as Fe}from"./memoTheme-BaJynKMn.js";import{R as Be}from"./index-CMNX_ky1.js";import{u as Ge}from"./useEnhancedEffect-CvtZChyo.js";import{G as He,g as $e}from"./index-DOKlo5zk.js";const ve=l.createContext(null);function te(){return l.useContext(ve)}const qe=typeof Symbol=="function"&&Symbol.for,Ue=qe?Symbol.for("mui.nested"):"__THEME_NESTED__";function We(e,t){return typeof t=="function"?t(e):{...e,...t}}function Ye(e){const{children:t,theme:o}=e,r=te(),u=l.useMemo(()=>{const a=r===null?{...o}:We(r,o);return a!=null&&(a[Ue]=r!==null),a},[o,r]);return g.jsx(ve.Provider,{value:u,children:t})}const xe={};function ke(e,t,o,r=!1){return l.useMemo(()=>{const u=e&&t[e]||t;if(typeof o=="function"){const a=o(u),s=e?{...t,[e]:a}:a;return r?()=>s:s}return e?{...t,[e]:o}:{...t,...o}},[e,t,o,r])}function we(e){const{children:t,theme:o,themeId:r}=e,u=Ke(xe),a=te()||xe,s=ke(r,u,o),d=ke(r,a,o,!0),h=(r?s[r]:s).direction==="rtl";return g.jsx(Ye,{theme:d,children:g.jsx(Re.Provider,{value:s,children:g.jsx(Be,{value:h,children:g.jsx(Ve,{value:r?s[r].components:s.components,children:t})})})})}const oe="mode",re="color-scheme",Qe="data-color-scheme";function Je(e){const{defaultMode:t="system",defaultLightColorScheme:o="light",defaultDarkColorScheme:r="dark",modeStorageKey:u=oe,colorSchemeStorageKey:a=re,attribute:s=Qe,colorSchemeNode:d="document.documentElement",nonce:h}=e||{};let C="",p=s;if(s==="class"&&(p=".%s"),s==="data"&&(p="[data-%s]"),p.startsWith(".")){const S=p.substring(1);C+=`${d}.classList.remove('${S}'.replace('%s', light), '${S}'.replace('%s', dark));
      ${d}.classList.add('${S}'.replace('%s', colorScheme));`}const k=p.match(/\[([^\]]+)\]/);if(k){const[S,m]=k[1].split("=");m||(C+=`${d}.removeAttribute('${S}'.replace('%s', light));
      ${d}.removeAttribute('${S}'.replace('%s', dark));`),C+=`
      ${d}.setAttribute('${S}'.replace('%s', colorScheme), ${m?`${m}.replace('%s', colorScheme)`:'""'});`}else C+=`${d}.setAttribute('${p}', colorScheme);`;return g.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?h:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${u}') || '${t}';
  const dark = localStorage.getItem('${a}-dark') || '${r}';
  const light = localStorage.getItem('${a}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${C}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}function Xe(){}const Ze=({key:e,storageWindow:t})=>(!t&&typeof window<"u"&&(t=window),{get(o){if(typeof window>"u")return;if(!t)return o;let r;try{r=t.localStorage.getItem(e)}catch{}return r||o},set:o=>{if(t)try{t.localStorage.setItem(e,o)}catch{}},subscribe:o=>{if(!t)return Xe;const r=u=>{const a=u.newValue;u.key===e&&o(a)};return t.addEventListener("storage",r),()=>{t.removeEventListener("storage",r)}}});function Z(){}function Me(e){if(typeof window<"u"&&typeof window.matchMedia=="function"&&e==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function je(e,t){if(e.mode==="light"||e.mode==="system"&&e.systemMode==="light")return t("light");if(e.mode==="dark"||e.mode==="system"&&e.systemMode==="dark")return t("dark")}function et(e){return je(e,t=>{if(t==="light")return e.lightColorScheme;if(t==="dark")return e.darkColorScheme})}function tt(e){const{defaultMode:t="light",defaultLightColorScheme:o,defaultDarkColorScheme:r,supportedColorSchemes:u=[],modeStorageKey:a=oe,colorSchemeStorageKey:s=re,storageWindow:d=typeof window>"u"?void 0:window,storageManager:h=Ze,noSsr:C=!1}=e,p=u.join(","),k=u.length>1,S=l.useMemo(()=>h==null?void 0:h({key:a,storageWindow:d}),[h,a,d]),m=l.useMemo(()=>h==null?void 0:h({key:`${s}-light`,storageWindow:d}),[h,s,d]),y=l.useMemo(()=>h==null?void 0:h({key:`${s}-dark`,storageWindow:d}),[h,s,d]),[w,O]=l.useState(()=>{const n=(S==null?void 0:S.get(t))||t,c=(m==null?void 0:m.get(o))||o,i=(y==null?void 0:y.get(r))||r;return{mode:n,systemMode:Me(n),lightColorScheme:c,darkColorScheme:i}}),[L,q]=l.useState(C||!k);l.useEffect(()=>{q(!0)},[]);const K=et(w),R=l.useCallback(n=>{O(c=>{if(n===c.mode)return c;const i=n??t;return S==null||S.set(i),{...c,mode:i,systemMode:Me(i)}})},[S,t]),A=l.useCallback(n=>{n?typeof n=="string"?n&&!p.includes(n)?console.error(`\`${n}\` does not exist in \`theme.colorSchemes\`.`):O(c=>{const i={...c};return je(c,f=>{f==="light"&&(m==null||m.set(n),i.lightColorScheme=n),f==="dark"&&(y==null||y.set(n),i.darkColorScheme=n)}),i}):O(c=>{const i={...c},f=n.light===null?o:n.light,_=n.dark===null?r:n.dark;return f&&(p.includes(f)?(i.lightColorScheme=f,m==null||m.set(f)):console.error(`\`${f}\` does not exist in \`theme.colorSchemes\`.`)),_&&(p.includes(_)?(i.darkColorScheme=_,y==null||y.set(_)):console.error(`\`${_}\` does not exist in \`theme.colorSchemes\`.`)),i}):O(c=>(m==null||m.set(o),y==null||y.set(r),{...c,lightColorScheme:o,darkColorScheme:r}))},[p,m,y,o,r]),V=l.useCallback(n=>{w.mode==="system"&&O(c=>{const i=n!=null&&n.matches?"dark":"light";return c.systemMode===i?c:{...c,systemMode:i}})},[w.mode]),B=l.useRef(V);return B.current=V,l.useEffect(()=>{if(typeof window.matchMedia!="function"||!k)return;const n=(...i)=>B.current(...i),c=window.matchMedia("(prefers-color-scheme: dark)");return c.addListener(n),n(c),()=>{c.removeListener(n)}},[k]),l.useEffect(()=>{if(k){const n=(S==null?void 0:S.subscribe(f=>{(!f||["light","dark","system"].includes(f))&&R(f||t)}))||Z,c=(m==null?void 0:m.subscribe(f=>{(!f||p.match(f))&&A({light:f})}))||Z,i=(y==null?void 0:y.subscribe(f=>{(!f||p.match(f))&&A({dark:f})}))||Z;return()=>{n(),c(),i()}}},[A,R,p,t,d,k,S,m,y]),{...w,mode:L?w.mode:void 0,systemMode:L?w.systemMode:void 0,colorScheme:L?K:void 0,setMode:R,setColorScheme:A}}const ot="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function rt(e){const{themeId:t,theme:o={},modeStorageKey:r=oe,colorSchemeStorageKey:u=re,disableTransitionOnChange:a=!1,defaultColorScheme:s,resolveTheme:d}=e,h={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},C=l.createContext(void 0),p=()=>l.useContext(C)||h,k={},S={};function m(L){var ye,ge,Ce,be;const{children:q,theme:K,modeStorageKey:R=r,colorSchemeStorageKey:A=u,disableTransitionOnChange:V=a,storageManager:B,storageWindow:n=typeof window>"u"?void 0:window,documentNode:c=typeof document>"u"?void 0:document,colorSchemeNode:i=typeof document>"u"?void 0:document.documentElement,disableNestedContext:f=!1,disableStyleSheetGeneration:_=!1,defaultMode:_e="system",noSsr:De}=L,U=l.useRef(!1),W=te(),Y=l.useContext(C),Q=!!Y&&!f,se=l.useMemo(()=>K||(typeof o=="function"?o():o),[K]),ne=se[t],T=ne||se,{colorSchemes:j=k,components:ce=S,cssVarPrefix:J}=T,ie=Object.keys(j).filter(b=>!!j[b]).join(","),P=l.useMemo(()=>ie.split(","),[ie]),le=typeof s=="string"?s:s.light,ae=typeof s=="string"?s:s.dark,Oe=j[le]&&j[ae]?_e:((ge=(ye=j[T.defaultColorScheme])==null?void 0:ye.palette)==null?void 0:ge.mode)||((Ce=T.palette)==null?void 0:Ce.mode),{mode:Ae,setMode:de,systemMode:me,lightColorScheme:ue,darkColorScheme:fe,colorScheme:Pe,setColorScheme:he}=tt({supportedColorSchemes:P,defaultLightColorScheme:le,defaultDarkColorScheme:ae,modeStorageKey:R,colorSchemeStorageKey:A,defaultMode:Oe,storageManager:B,storageWindow:n,noSsr:De});let X=Ae,E=Pe;Q&&(X=Y.mode,E=Y.colorScheme);const N=l.useMemo(()=>{var F;const b=E||T.defaultColorScheme,x=((F=T.generateThemeVars)==null?void 0:F.call(T))||T.vars,M={...T,components:ce,colorSchemes:j,cssVarPrefix:J,vars:x};if(typeof M.generateSpacing=="function"&&(M.spacing=M.generateSpacing()),b){const $=j[b];$&&typeof $=="object"&&Object.keys($).forEach(v=>{$[v]&&typeof $[v]=="object"?M[v]={...M[v],...$[v]}:M[v]=$[v]})}return d?d(M):M},[T,E,ce,j,J]),z=T.colorSchemeSelector;Ge(()=>{if(E&&i&&z&&z!=="media"){const b=z;let x=z;if(b==="class"&&(x=".%s"),b==="data"&&(x="[data-%s]"),b!=null&&b.startsWith("data-")&&!b.includes("%s")&&(x=`[${b}="%s"]`),x.startsWith("."))i.classList.remove(...P.map(M=>x.substring(1).replace("%s",M))),i.classList.add(x.substring(1).replace("%s",E));else{const M=x.replace("%s",E).match(/\[([^\]]+)\]/);if(M){const[F,$]=M[1].split("=");$||P.forEach(v=>{i.removeAttribute(F.replace(E,v))}),i.setAttribute(F,$?$.replace(/"|'/g,""):"")}else i.setAttribute(x,E)}}},[E,z,i,P]),l.useEffect(()=>{let b;if(V&&U.current&&c){const x=c.createElement("style");x.appendChild(c.createTextNode(ot)),c.head.appendChild(x),window.getComputedStyle(c.body),b=setTimeout(()=>{c.head.removeChild(x)},1)}return()=>{clearTimeout(b)}},[E,V,c]),l.useEffect(()=>(U.current=!0,()=>{U.current=!1}),[]);const Ie=l.useMemo(()=>({allColorSchemes:P,colorScheme:E,darkColorScheme:fe,lightColorScheme:ue,mode:X,setColorScheme:he,setMode:de,systemMode:me}),[P,E,fe,ue,X,he,de,me,N.colorSchemeSelector]);let Se=!0;(_||T.cssVariables===!1||Q&&(W==null?void 0:W.cssVarPrefix)===J)&&(Se=!1);const pe=g.jsxs(l.Fragment,{children:[g.jsx(we,{themeId:ne?t:void 0,theme:N,children:q}),Se&&g.jsx(He,{styles:((be=N.generateStyleSheets)==null?void 0:be.call(N))||[]})]});return Q?pe:g.jsx(C.Provider,{value:Ie,children:pe})}const y=typeof s=="string"?s:s.light,w=typeof s=="string"?s:s.dark;return{CssVarsProvider:m,useColorScheme:p,getInitColorSchemeScript:L=>Je({colorSchemeStorageKey:u,defaultLightColorScheme:y,defaultDarkColorScheme:w,modeStorageKey:r,...L})}}function Te({theme:e,...t}){const o=I in e?e[I]:void 0;return g.jsx(we,{...t,themeId:o?I:void 0,theme:o||e})}const G={colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:st}=rt({themeId:I,theme:()=>Ee({cssVariables:!0}),colorSchemeStorageKey:G.colorSchemeStorageKey,modeStorageKey:G.modeStorageKey,defaultColorScheme:{light:G.defaultLightColorScheme,dark:G.defaultDarkColorScheme},resolveTheme:e=>{const t={...e,typography:Ne(e.palette,e.typography)};return t.unstable_sx=function(r){return ze({sx:r,theme:this})},t}}),nt=st;function ct({theme:e,...t}){return typeof e=="function"?g.jsx(Te,{theme:e,...t}):"colorSchemes"in(I in e?e[I]:e)?g.jsx(nt,{theme:e,...t}):g.jsx(Te,{theme:e,...t})}const ee=typeof $e({})=="function",it=(e,t)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!e.vars&&{colorScheme:e.palette.mode}}),lt=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),Le=(e,t=!1)=>{var a,s;const o={};t&&e.colorSchemes&&typeof e.getColorSchemeSelector=="function"&&Object.entries(e.colorSchemes).forEach(([d,h])=>{var p,k;const C=e.getColorSchemeSelector(d);C.startsWith("@")?o[C]={":root":{colorScheme:(p=h.palette)==null?void 0:p.mode}}:o[C.replace(/\s*&/,"")]={colorScheme:(k=h.palette)==null?void 0:k.mode}});let r={html:it(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...lt(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...o};const u=(s=(a=e.components)==null?void 0:a.MuiCssBaseline)==null?void 0:s.styleOverrides;return u&&(r=[r,u]),r},H="mui-ecs",at=e=>{const t=Le(e,!1),o=Array.isArray(t)?t[0]:t;return!e.vars&&o&&(o.html[`:root:has(${H})`]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([r,u])=>{var s,d;const a=e.getColorSchemeSelector(r);a.startsWith("@")?o[a]={[`:root:not(:has(.${H}))`]:{colorScheme:(s=u.palette)==null?void 0:s.mode}}:o[a.replace(/\s*&/,"")]={[`&:not(:has(.${H}))`]:{colorScheme:(d=u.palette)==null?void 0:d.mode}}}),t},dt=$e(ee?({theme:e,enableColorScheme:t})=>Le(e,t):({theme:e})=>at(e));function mt(e){const t=Fe({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:r=!1}=t;return g.jsxs(l.Fragment,{children:[ee&&g.jsx(dt,{enableColorScheme:r}),!ee&&!r&&g.jsx("span",{className:H,style:{display:"none"}}),o]})}const ut={primary:"Roboto, sans-serif"},kt={font12:12,font14:14,font15:15,font16:16,font17:17,font18:18},ft=Ee({palette:{primary:D.primary,secondary:D.secondary,warning:D.warning,error:D.error,info:D.info,success:D.success,text:{primary:D.fontDark}},typography:{fontFamily:ut.primary},transitions:{duration:{shortest:150,short:200,standard:300,complex:375,enteringScreen:225,leavingScreen:195},easing:{easeIn:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)"}},zIndex:{mobileStepper:1e3,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},breakpoints:{values:{xs:0,sm:600,md:960,lg:1280,xl:1920}}}),ht=({children:e})=>g.jsxs(ct,{theme:ft,children:[g.jsx(mt,{}),e]});ht.__docgenInfo={description:"",methods:[],displayName:"Template",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};export{ht as T,ut as a,kt as f};
