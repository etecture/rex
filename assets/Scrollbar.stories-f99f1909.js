import{r as s}from"./index-76fb7be0.js";var J={exports:{}},q={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne=s,oe=Symbol.for("react.element"),le=Symbol.for("react.fragment"),ie=Object.prototype.hasOwnProperty,ce=ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,se={key:!0,ref:!0,__self:!0,__source:!0};function Q(n,t,e){var r,u={},o=null,l=null;e!==void 0&&(o=""+e),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)ie.call(t,r)&&!se.hasOwnProperty(r)&&(u[r]=t[r]);if(n&&n.defaultProps)for(r in t=n.defaultProps,t)u[r]===void 0&&(u[r]=t[r]);return{$$typeof:oe,type:n,key:o,ref:l,props:u,_owner:ce.current}}q.Fragment=le;q.jsx=Q;q.jsxs=Q;J.exports=q;var j=J.exports;const ae=j.Fragment,a=j.jsx,G=j.jsxs;function K(n){var t,e,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n))for(t=0;t<n.length;t++)n[t]&&(e=K(n[t]))&&(r&&(r+=" "),r+=e);else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function k(){for(var n,t,e=0,r="";e<arguments.length;)(n=arguments[e++])&&(t=K(n))&&(r&&(r+=" "),r+=t);return r}const ue=n=>{const{ref:t,onChange:e}=n,[r,u]=s.useState({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),o=s.useRef(null);return s.useEffect(()=>{if(t.current)return o.current||(o.current=new ResizeObserver(l=>{const[d]=l;u(d.contentRect),e==null||e(d.contentRect)})),o.current.observe(t.current),()=>{var l;t.current&&((l=o.current)==null||l.unobserve(t.current))}},[]),r},he=n=>{const{horizontalScrollbarRef:t,verticalScrollbarRef:e,contentRef:r}=n,u=s.useRef(0),o=s.useRef(0),l=s.useRef(0),d=s.useRef(0),[b,m]=s.useState(!1),[h,y]=s.useState(!1);return s.useEffect(()=>{const R=i=>{var c;m(!0),o.current=i.clientX,d.current=((c=r.current)==null?void 0:c.scrollLeft)??0},C=i=>{var c;y(!0),u.current=i.clientY,l.current=((c=r.current)==null?void 0:c.scrollTop)??0},p=i=>{if(r.current){if(t.current&&b){const c=t.current.firstChild,S=r.current.getBoundingClientRect(),f=i.clientX-o.current,T=t.current.getBoundingClientRect().width-c.getBoundingClientRect().width,g=f/T,_=r.current.scrollWidth-S.width;r.current.scrollLeft=d.current+_*g}if(e.current&&h){const c=e.current.firstChild,S=r.current.getBoundingClientRect(),f=i.clientY-u.current,T=e.current.getBoundingClientRect().height-c.getBoundingClientRect().height,g=f/T,_=r.current.scrollHeight-S.height;r.current.scrollTop=l.current+_*g}}},w=()=>{m(!1),y(!1)};return t.current&&t.current.firstChild.addEventListener("mousedown",R),e.current&&e.current.firstChild.addEventListener("mousedown",C),document.addEventListener("mousemove",p),document.addEventListener("mouseup",w),()=>{t.current&&t.current.firstChild.removeEventListener("mousedown",R),e.current&&e.current.firstChild.removeEventListener("mousedown",C),document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",w)}},[h,b]),{horizontalDragging:b,verticalDragging:h}},de=n=>{const{verticalScrollbarRef:t,horizontalScrollbarRef:e,contentHeight:r,contentWidth:u,contentRef:o,onScroll:l}=n;s.useEffect(()=>{var b;const d=()=>{if(l==null||l(),o.current&&t.current&&e.current){const m=t.current.firstChild,h=t.current.getBoundingClientRect(),y=m.getBoundingClientRect(),R=o.current.scrollHeight-r,p=o.current.scrollTop/R,i=(h.height-y.height)*p;m.style.transform=`translateY(${i}px)`;const c=e.current.firstChild,S=e.current.getBoundingClientRect(),f=c.getBoundingClientRect(),T=o.current.scrollWidth-u,_=o.current.scrollLeft/T,A=(S.width-f.width)*_;c.style.transform=`translateX(${A}px)`}};return(b=o.current)==null||b.addEventListener("scroll",d),()=>{var m;(m=o.current)==null||m.removeEventListener("scroll",d)}},[r,u])},me="_scrollContainer_1kvge_2",fe="_content_1kvge_13",ve="_verticalTrack_1kvge_24",be="_scrollbarThumb_1kvge_30",ge="_horizontalTrack_1kvge_37",pe="_hasVerticalScroll_1kvge_71",Te="_hasHorizontalScroll_1kvge_75",_e="_visible_1kvge_79",ye="_trackHidden_1kvge_83",v={scrollContainer:me,content:fe,verticalTrack:ve,scrollbarThumb:be,horizontalTrack:ge,hasVerticalScroll:pe,hasHorizontalScroll:Te,visible:_e,trackHidden:ye},z=n=>{const{children:t,classNames:e,h:r,w:u,mah:o,mih:l,viewportRef:d,visibility:b="hover",...m}=n,h=s.useRef(null),{width:y,height:R}=ue({ref:h}),C=V=>{h.current=V,d&&(d.current=V)},p=s.useRef(null),w=s.useRef(null);de({horizontalScrollbarRef:w,verticalScrollbarRef:p,contentRef:h,contentHeight:R,contentWidth:y});const{horizontalDragging:i,verticalDragging:c}=he({contentRef:h,verticalScrollbarRef:p,horizontalScrollbarRef:w}),S=i||c;let f=!1,T="0px",g=!1,_="0px";if(h.current){const V=R/h.current.scrollHeight,D=Math.ceil(Math.min(V*100,100));D<100?(_=`${D}%`,g=!0):g=!1;const re=y/h.current.scrollWidth,B=Math.ceil(Math.min(re*100,100));B<100?(T=`${B}%`,f=!0):f=!1}const M=b==="always"||S,A=b==="never",Z=k(v.scrollContainer,e==null?void 0:e.root,M&&v.visible,A&&v.trackHidden,f&&v.hasHorizontalScroll,g&&v.hasVerticalScroll),ee=c?{"data-dragging":!0}:{},te=i?{"data-dragging":!0}:{};return G("div",{className:Z,...m,children:[a("div",{className:k(v.content,e==null?void 0:e.viewport),style:{height:r,width:u,minHeight:l,maxHeight:o},"data-horizontal-scroll":f,"data-vertical-scroll":g,ref:C,children:t}),a("div",{className:k(v.verticalTrack,e==null?void 0:e.verticalTrack),ref:p,children:a("div",{className:k(v.scrollbarThumb,e==null?void 0:e.verticalThumb),style:{height:_},...ee})}),a("div",{className:k(v.horizontalTrack,e==null?void 0:e.horizontalTrack),ref:w,children:a("div",{className:k(v.scrollbarThumb,e==null?void 0:e.horizontalThumb),style:{width:T},...te})})]})};try{z.displayName="Scrollbar",z.__docgenInfo={description:"",displayName:"Scrollbar",props:{h:{defaultValue:null,description:"Fixed height of the scrollbar container",name:"h",required:!1,type:{name:"Height<string | number> | undefined"}},w:{defaultValue:null,description:"Fixed with of the scrollbar container",name:"w",required:!1,type:{name:"Width<string | number> | undefined"}},mah:{defaultValue:null,description:"Max height of the container, if the content is less than that the scrollbar won't be used",name:"mah",required:!1,type:{name:"MaxHeight<string | number> | undefined"}},mih:{defaultValue:null,description:"The min height of the container",name:"mih",required:!1,type:{name:"MinHeight<string | number> | undefined"}},visibility:{defaultValue:{value:'"hover"'},description:`Controls when the scrollbar tracks are shown.
"always" will always show the scrollbar as long as the content is scrollable.
"hover" will only show the tracks when hovering over the container.
"never" will never show tracks`,name:"visibility",required:!1,type:{name:'"always" | "hover" | "never" | undefined'}},viewportRef:{defaultValue:null,description:`An optional reference to the scroll container.
This is the element on which the scroll events happen.`,name:"viewportRef",required:!1,type:{name:"MutableRefObject<HTMLDivElement | null> | undefined"}},classNames:{defaultValue:null,description:"Classnames for each part of the component",name:"classNames",required:!1,type:{name:"{ root?: string | undefined; viewport?: string | undefined; verticalTrack?: string | undefined; verticalThumb?: string | undefined; horizontalTrack?: string | undefined; horizontalThumb?: string | undefined; } | undefined"}}}}}catch{}const Re="_customTrack_lwmmk_1",we="_horizontalThumb_lwmmk_9",Se="_verticalThumb_lwmmk_18",ke="_root_lwmmk_27",H={customTrack:Re,horizontalThumb:we,verticalThumb:Se,root:ke},O=G(ae,{children:[a("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}),a("p",{children:"Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."}),a("p",{children:"Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus."}),a("p",{children:"Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus."})]}),ze={title:"Components/Scrollbar",component:z,parameters:{layout:"centered"},argTypes:{visibility:{control:"select",options:["always","hover","never"]},viewportRef:{control:!1},classNames:{control:!1}},args:{h:200,w:400,visibility:"hover"}},x={render:n=>a(z,{...n,children:a("div",{children:O})})},E={render:n=>a(z,{...n,children:a("div",{style:{width:600},children:O})})},L={render:n=>a(z,{...n,children:a("div",{style:{width:600},children:O})}),args:{visibility:"always",classNames:{root:H.root,verticalTrack:H.customTrack,horizontalTrack:H.customTrack,horizontalThumb:H.horizontalThumb,verticalThumb:H.verticalThumb}}};var P,I,N;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <Scrollbar {...args}>
      <div>{loremIpsum}</div>
    </Scrollbar>
}`,...(N=(I=x.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var W,F,$;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <Scrollbar {...args}>
      <div style={{
      width: 600
    }}>{loremIpsum}</div>
    </Scrollbar>
}`,...($=(F=E.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var Y,X,U;L.parameters={...L.parameters,docs:{...(Y=L.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => <Scrollbar {...args}>
      <div style={{
      width: 600
    }}>{loremIpsum}</div>
    </Scrollbar>,
  args: {
    visibility: "always",
    classNames: {
      root: styles.root,
      verticalTrack: styles.customTrack,
      horizontalTrack: styles.customTrack,
      horizontalThumb: styles.horizontalThumb,
      verticalThumb: styles.verticalThumb
    }
  }
}`,...(U=(X=L.parameters)==null?void 0:X.docs)==null?void 0:U.source}}};const Ce=["Vertical","Horizontal","Customized"],xe=Object.freeze(Object.defineProperty({__proto__:null,Customized:L,Horizontal:E,Vertical:x,__namedExportsOrder:Ce,default:ze},Symbol.toStringTag,{value:"Module"}));export{ae as F,E as H,xe as S,x as V,G as a,a as j};
//# sourceMappingURL=Scrollbar.stories-f99f1909.js.map
