(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[67],{770:function(e,t,n){Promise.resolve().then(n.t.bind(n,51890,23)),Promise.resolve().then(n.bind(n,52065)),Promise.resolve().then(n.bind(n,27044)),Promise.resolve().then(n.bind(n,42054)),Promise.resolve().then(n.bind(n,59718)),Promise.resolve().then(n.bind(n,50101)),Promise.resolve().then(n.bind(n,67447)),Promise.resolve().then(n.bind(n,48883)),Promise.resolve().then(n.bind(n,83473)),Promise.resolve().then(n.bind(n,13259)),Promise.resolve().then(n.bind(n,86930)),Promise.resolve().then(n.bind(n,31027))},27044:function(e,t,n){"use strict";n.r(t),n.d(t,{code:function(){return o},component:function(){return a}});var l=n(8438),r=n(28282);let o='\nimport { Swiper } from "@etecture/rex";\n\nconst Example = () => {\n  return (\n    <Swiper>\n      <img width={4000} height={200} alt={"lorem picsum"} src={"https://picsum.photos/4000/200"} />\n    </Swiper>\n  );\n};\n',a=()=>(0,l.jsx)(r.tq,{children:(0,l.jsx)("img",{width:4e3,height:200,alt:"lorem picsum",src:"https://picsum.photos/4000/200"})})},51890:function(e){e.exports={container:"Demo_container__G_Iz4"}},50101:function(e,t,n){"use strict";n.d(t,{CodeHighlightTabs:function(){return P}});var l=n(25730),r=n(45561),o=n(9897),a=n(21251),i=n(94890),c=n(59668),m=n(19629),s=n(74191),d=n(62255),h=n(31027),p=n(6514),u=n(46975),E=n(42457),f=n(43344),v=n(82805),g=n(42442);function b(e){let{expanded:t,style:n,...r}=e;return l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:(0,a.h)(18),height:(0,a.h)(18),...n},viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...r},t?l.createElement(l.Fragment,null,l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M12 13v-8l-3 3m6 0l-3 -3"}),l.createElement("path",{d:"M9 17l1 0"}),l.createElement("path",{d:"M14 17l1 0"}),l.createElement("path",{d:"M19 17l1 0"}),l.createElement("path",{d:"M4 17l1 0"})):l.createElement(l.Fragment,null,l.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),l.createElement("path",{d:"M12 11v8l3 -3m-6 0l3 3"}),l.createElement("path",{d:"M9 7l1 0"}),l.createElement("path",{d:"M14 7l1 0"}),l.createElement("path",{d:"M19 7l1 0"}),l.createElement("path",{d:"M4 7l1 0"})))}function C(e){let{fileIcon:t,fileName:n,getFileIcon:r,className:o,style:a}=e;return t?l.createElement("span",{className:o,style:a},t):r&&n?l.createElement("span",{className:o,style:a},r(n)):null}var x=n(19565),k=n(60935);let w={...x.Z,root:(0,r.Z)(x.Z.root,k.Z.theme)},M={withHeader:!0,copyLabel:"Copy code",copiedLabel:"Copied",maxCollapsedHeight:(0,a.h)("8rem"),expandCodeLabel:"Expand code",collapseCodeLabel:"Collapse code",withCopyButton:!0},y=(0,i.Z)((e,t)=>{let{maxCollapsedHeight:n}=t;return{root:{"--ch-max-collapsed-height":(0,a.h)(n)}}}),P=(0,c.d)((e,t)=>{let n=(0,m.w)("CodeHighlightTabs",M,e),{classNames:r,className:a,style:i,styles:c,unstyled:x,vars:k,children:P,code:_,defaultActiveTab:H,activeTab:N,onTabChange:L,withHeader:I,copiedLabel:S,copyLabel:T,getFileIcon:Z,maxCollapsedHeight:z,expanded:B,defaultExpanded:A,onExpandedChange:V,expandCodeLabel:j,collapseCodeLabel:q,withExpandButton:F,withCopyButton:O,mod:W,...D}=n,G=(0,s.y)({name:"CodeHighlightTabs",props:n,classes:w,className:a,style:i,classNames:r,styles:c,unstyled:x,vars:k,varsResolver:y}),[J,K]=(0,v.C)({defaultValue:H,value:N,finalValue:0,onChange:L}),[Q,R]=(0,v.C)({defaultValue:A,value:B,finalValue:!0,onChange:V}),U=Array.isArray(_)?_:[_],X=U[J],Y=o.Z.highlight(X.code.trim(),{language:X.language||"plaintext"}).value,$=U.map((e,t)=>l.createElement(d.k,{...G("file"),key:e.fileName,mod:{active:t===J},onClick:()=>K(t)},l.createElement(C,{fileIcon:e.icon,getFileIcon:Z,fileName:e.fileName,...G("fileIcon")}),l.createElement("span",null,e.fileName)));return l.createElement(h.Box,{...G("root"),mod:[{collapsed:!Q},W],ref:t,...D,dir:"ltr"},I&&l.createElement("div",{...G("header")},l.createElement(p.x,{type:"never",dir:"ltr",offsetScrollbars:!1},l.createElement("div",{...G("files")},$)),l.createElement("div",{...G("controls")},F&&l.createElement(u.u,{label:Q?q:j,fz:"sm",position:"left"},l.createElement(E.ActionIcon,{onClick:()=>R(!Q),variant:"none","aria-label":Q?q:j,...G("control")},l.createElement(b,{expanded:Q}))),O&&l.createElement(f.q,{value:X.code.trim()},e=>{let{copied:t,copy:n}=e;return l.createElement(u.u,{label:t?S:T,fz:"sm",position:"left"},l.createElement(E.ActionIcon,{onClick:n,variant:"none",...G("control"),"aria-label":t?S:T},l.createElement(g.T,{copied:t})))}))),l.createElement(p.x,{type:"auto",dir:"ltr",offsetScrollbars:!1},l.createElement(h.Box,{...G("codeWrapper"),mod:{expanded:Q}},l.createElement("pre",{...G("pre")},l.createElement("code",{...G("code"),dangerouslySetInnerHTML:{__html:Y}})))),l.createElement(d.k,{...G("showCodeButton"),mod:{hidden:Q},onClick:()=>R(!0)},j))});P.displayName="@mantine/core/CodeHighlightTabs",P.classes=w}},function(e){e.O(0,[874,947,737,370,236,131,508,582,619,661,744],function(){return e(e.s=770)}),_N_E=e.O()}]);