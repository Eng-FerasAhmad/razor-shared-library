import{j as a}from"./extends-BZziWbxp.js";import{c as s}from"./color-DCc551Ku.js";import{a as W,A as _,b as r}from"./Avatar-BTrsxwG0.js";import{S as c}from"./Stack-EsaLhrkH.js";import{r as p}from"./index-BP8_t0zE.js";import"./react-is.production.min-DUDD-a5e.js";import{g as F,b as I,s as J,m as K,u as Q,c as N,a as X}from"./DefaultPropsProvider-CBZfYqC6.js";import{u as Y}from"./useSlot-BxHZVQtO.js";import"./Template-Ns2mqNLl.js";import"./index-DiL3kUBv.js";import"./index-CJDT4czw.js";import"./emotion-react.browser.esm-B5xgBJJi.js";import"./extendSxProp-igbevVD-.js";import"./createSvgIcon-Aui0-xl2.js";import"./useThemeProps-Fza24uaV.js";import"./resolveComponentProps-BWlflic0.js";import"./useForkRef-rM2yqL0Y.js";function Z(t){return I("MuiAvatarGroup",t)}const aa=F("MuiAvatarGroup",["root","avatar"]),G={small:-16,medium:-8},ra=t=>{const{classes:i}=t;return X({root:["root"],avatar:["avatar"]},Z,i)},ta=J("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(t,i)=>({[`& .${aa.avatar}`]:i.avatar,...i.root})})(K(({theme:t})=>({display:"flex",flexDirection:"row-reverse",[`& .${W.root}`]:{border:`2px solid ${(t.vars||t).palette.background.default}`,boxSizing:"content-box",marginLeft:"var(--AvatarGroup-spacing, -8px)","&:last-child":{marginLeft:0}}}))),sa=p.forwardRef(function(i,f){const C=Q({props:i,name:"MuiAvatarGroup"}),{children:D,className:E,component:j="div",componentsProps:l,max:u=5,renderSurplus:w,slotProps:S={},slots:H={},spacing:z="medium",total:$,variant:d="circular",...b}=C;let e=u<2?2:u;const o={...C,max:u,spacing:z,component:j,variant:d},h=ra(o),x=p.Children.toArray(D).filter(n=>p.isValidElement(n)),m=$||x.length;m===e&&(e+=1),e=Math.min(m+1,e);const y=Math.min(x.length,e-1),A=Math.max(m-e,m-y,0),U=w?w(A):`+${A}`,k=o.spacing&&G[o.spacing]!==void 0?G[o.spacing]:-o.spacing||-8,B={slots:H,slotProps:{surplus:S.additionalAvatar??(l==null?void 0:l.additionalAvatar),...l,...S}},[L,V]=Y("surplus",{elementType:_,externalForwardedProps:B,className:h.avatar,ownerState:o,additionalProps:{variant:d,style:{"--AvatarRoot-spacing":k?`${k}px`:void 0,...b.style}}});return a.jsxs(ta,{as:j,ownerState:o,className:N(h.root,E),ref:f,...b,children:[A?a.jsx(L,{...V,children:U}):null,x.slice(0,y).reverse().map(n=>p.cloneElement(n,{className:N(n.props.className,h.avatar),variant:n.props.variant||d}))]})}),ja={component:r,title:"Data Display/Avatar",tags:["autodocs"],argTypes:{src:{control:{type:"text"}},alt:{control:{type:"text"}}}},g={render:()=>a.jsxs(c,{direction:"column",spacing:2,children:[a.jsxs(c,{direction:"row",spacing:2,children:[a.jsx(r,{children:"H"}),a.jsx(r,{sx:{bgcolor:s.primary.main},children:"N"}),a.jsx(r,{sx:{bgcolor:s.info.main},children:"N"})]}),a.jsxs(c,{direction:"row",spacing:2,children:[a.jsx(r,{sx:{bgcolor:s.info.main,width:24,height:24,fontSize:12},src:"./favicon.svg",children:"OP"}),a.jsx(r,{sx:{bgcolor:s.info.main,width:36,height:36},src:"./favicon.svg",children:"OP"}),a.jsx(r,{sx:{bgcolor:s.info.main,width:56,height:56},src:"./favicon.svg",children:"OP"})]}),a.jsxs(c,{direction:"row",spacing:2,children:[a.jsx(r,{sx:{bgcolor:s.warning.light,width:24,height:24,fontSize:12},variant:"square",children:"N"}),a.jsx(r,{sx:{bgcolor:s.warning.main,width:36,height:36},variant:"square",children:"N"}),a.jsx(r,{sx:{bgcolor:s.warning.dark,width:56,height:56,borderRadius:5},variant:"square",children:"N"})]}),a.jsx(c,{direction:"row",spacing:2,children:a.jsxs(sa,{renderSurplus:t=>a.jsxs("span",{children:["+",t.toString()[0],"k"]}),total:4251,children:[a.jsx(r,{alt:"Remy Sharp",src:"/static/images/avatar/1.jpg"}),a.jsx(r,{alt:"Travis Howard",src:"/static/images/avatar/2.jpg"}),a.jsx(r,{alt:"Agnes Walker",src:"/static/images/avatar/4.jpg"}),a.jsx(r,{alt:"Trevor Henderson",src:"/static/images/avatar/5.jpg"})]})})]}),args:{title:"Badge",color:"primary"}},v={args:{src:"./favicon.svg",alt:"avatar alt"}};var P,R,M;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
                <AvatarCustom>H</AvatarCustom>
                <AvatarCustom sx={{
        bgcolor: color.primary.main
      }}>
                    N
                </AvatarCustom>
                <AvatarCustom sx={{
        bgcolor: color.info.main
      }}>N</AvatarCustom>
            </Stack>

            <Stack direction="row" spacing={2}>
                <AvatarCustom sx={{
        bgcolor: color.info.main,
        width: 24,
        height: 24,
        fontSize: 12
      }} src={'./favicon.svg'}>
                    OP
                </AvatarCustom>

                <AvatarCustom sx={{
        bgcolor: color.info.main,
        width: 36,
        height: 36
      }} src={'./favicon.svg'}>
                    OP
                </AvatarCustom>

                <AvatarCustom sx={{
        bgcolor: color.info.main,
        width: 56,
        height: 56
      }} src={'./favicon.svg'}>
                    OP
                </AvatarCustom>
            </Stack>

            <Stack direction="row" spacing={2}>
                <AvatarCustom sx={{
        bgcolor: color.warning.light,
        width: 24,
        height: 24,
        fontSize: 12
      }} variant="square">
                    N
                </AvatarCustom>

                <AvatarCustom sx={{
        bgcolor: color.warning.main,
        width: 36,
        height: 36
      }} variant="square">
                    N
                </AvatarCustom>

                <AvatarCustom sx={{
        bgcolor: color.warning.dark,
        width: 56,
        height: 56,
        borderRadius: 5
      }} variant="square">
                    N
                </AvatarCustom>
            </Stack>

            <Stack direction="row" spacing={2}>
                <AvatarGroup renderSurplus={surplus => <span>+{surplus.toString()[0]}k</span>} total={4251}>
                    <AvatarCustom alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <AvatarCustom alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <AvatarCustom alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <AvatarCustom alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
            </Stack>
        </Stack>,
  args: {
    title: 'Badge',
    color: 'primary'
  }
}`,...(M=(R=g.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var O,T,q;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    src: './favicon.svg',
    alt: 'avatar alt'
  }
}`,...(q=(T=v.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const wa=["AllColors","Default"];export{g as AllColors,v as Default,wa as __namedExportsOrder,ja as default};
