(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[921,516],{77219:function(e,t,n){Promise.resolve().then(n.t.bind(n,51890,23)),Promise.resolve().then(n.bind(n,52065)),Promise.resolve().then(n.bind(n,74250)),Promise.resolve().then(n.bind(n,42054)),Promise.resolve().then(n.bind(n,59718)),Promise.resolve().then(n.bind(n,50101)),Promise.resolve().then(n.bind(n,67447)),Promise.resolve().then(n.bind(n,48883)),Promise.resolve().then(n.bind(n,83473)),Promise.resolve().then(n.bind(n,13259)),Promise.resolve().then(n.bind(n,86930)),Promise.resolve().then(n.bind(n,31027))},74250:function(e,t,n){"use strict";n.r(t),n.d(t,{code:function(){return a},component:function(){return i}});var r=n(8438),o=n(28282),l=n(25730);let a='\nimport { useHotkeys } from "@etecture/rex";\nimport { useState } from "react";\n\nconst Example = () => {\n  const [counts, setCounts] = useState<Record<string, number>>({});\n  const increment = (keys: string) => {\n    setCounts((current) => {\n      return { ...current, [keys]: (current[keys] ?? 0) + 1 };\n    });\n  };\n\n  useHotkeys([\n    ["Control", () => increment("Control")],\n    ["Control+c", () => increment("Control+c")],\n    ["Control+v", () => increment("Control+v"), { stopPropagation: true }],\n    ["c", () => increment("c")],\n    ["v", () => increment("v"), { stopPropagation: true }],\n  ]);\n\n  return (\n    <div>\n      <div>[Control] presses: {counts.Control}</div>\n      <div>[Control + c] presses: {counts["Control+c"]}</div>\n      <div>[Control + v] presses: {counts["Control+v"]}</div>\n      <div>[c] presses: {counts.c}</div>\n      <div>[v] presses: {counts.v}</div>\n    </div>\n  );\n};\n',i=()=>{let[e,t]=(0,l.useState)({}),n=e=>{t(t=>{var n;return{...t,[e]:(null!==(n=t[e])&&void 0!==n?n:0)+1}})};return(0,o.y1)([["Control",()=>n("Control")],["Control+c",()=>n("Control+c")],["Control+v",()=>n("Control+v"),{stopPropagation:!0}],["c",()=>n("c")],["v",()=>n("v"),{stopPropagation:!0}]]),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:["[Control] presses: ",e.Control]}),(0,r.jsxs)("div",{children:["[Control + c] presses: ",e["Control+c"]]}),(0,r.jsxs)("div",{children:["[Control + v] presses: ",e["Control+v"]]}),(0,r.jsxs)("div",{children:["[c] presses: ",e.c]}),(0,r.jsxs)("div",{children:["[v] presses: ",e.v]})]})}},51890:function(e){e.exports={container:"Demo_container__G_Iz4"}},50101:function(e,t,n){"use strict";n.d(t,{CodeHighlightTabs:function(){return w}});var r=n(25730),o=n(45561),l=n(9897),a=n(21251),i=n(94890),s=n(59668),c=n(19629),d=n(74191),m=n(62255),u=n(31027),v=n(6514),h=n(46975),p=n(42457),C=n(43344),E=n(82805),f=n(42442);function g(e){let{expanded:t,style:n,...o}=e;return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{width:(0,a.h)(18),height:(0,a.h)(18),...n},viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...o},t?r.createElement(r.Fragment,null,r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M12 13v-8l-3 3m6 0l-3 -3"}),r.createElement("path",{d:"M9 17l1 0"}),r.createElement("path",{d:"M14 17l1 0"}),r.createElement("path",{d:"M19 17l1 0"}),r.createElement("path",{d:"M4 17l1 0"})):r.createElement(r.Fragment,null,r.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.createElement("path",{d:"M12 11v8l3 -3m-6 0l3 3"}),r.createElement("path",{d:"M9 7l1 0"}),r.createElement("path",{d:"M14 7l1 0"}),r.createElement("path",{d:"M19 7l1 0"}),r.createElement("path",{d:"M4 7l1 0"})))}function b(e){let{fileIcon:t,fileName:n,getFileIcon:o,className:l,style:a}=e;return t?r.createElement("span",{className:l,style:a},t):o&&n?r.createElement("span",{className:l,style:a},o(n)):null}var k=n(19565),x=n(60935);let y={...k.Z,root:(0,o.Z)(k.Z.root,x.Z.theme)},P={withHeader:!0,copyLabel:"Copy code",copiedLabel:"Copied",maxCollapsedHeight:(0,a.h)("8rem"),expandCodeLabel:"Expand code",collapseCodeLabel:"Collapse code",withCopyButton:!0},M=(0,i.Z)((e,t)=>{let{maxCollapsedHeight:n}=t;return{root:{"--ch-max-collapsed-height":(0,a.h)(n)}}}),w=(0,s.d)((e,t)=>{let n=(0,c.w)("CodeHighlightTabs",P,e),{classNames:o,className:a,style:i,styles:s,unstyled:k,vars:x,children:w,code:_,defaultActiveTab:H,activeTab:N,onTabChange:j,withHeader:L,copiedLabel:I,copyLabel:S,getFileIcon:T,maxCollapsedHeight:Z,expanded:z,defaultExpanded:B,onExpandedChange:A,expandCodeLabel:V,collapseCodeLabel:F,withExpandButton:O,withCopyButton:W,mod:q,...D}=n,G=(0,d.y)({name:"CodeHighlightTabs",props:n,classes:y,className:a,style:i,classNames:o,styles:s,unstyled:k,vars:x,varsResolver:M}),[R,J]=(0,E.C)({defaultValue:H,value:N,finalValue:0,onChange:j}),[K,Q]=(0,E.C)({defaultValue:B,value:z,finalValue:!0,onChange:A}),U=Array.isArray(_)?_:[_],X=U[R],Y=l.Z.highlight(X.code.trim(),{language:X.language||"plaintext"}).value,$=U.map((e,t)=>r.createElement(m.k,{...G("file"),key:e.fileName,mod:{active:t===R},onClick:()=>J(t)},r.createElement(b,{fileIcon:e.icon,getFileIcon:T,fileName:e.fileName,...G("fileIcon")}),r.createElement("span",null,e.fileName)));return r.createElement(u.Box,{...G("root"),mod:[{collapsed:!K},q],ref:t,...D,dir:"ltr"},L&&r.createElement("div",{...G("header")},r.createElement(v.x,{type:"never",dir:"ltr",offsetScrollbars:!1},r.createElement("div",{...G("files")},$)),r.createElement("div",{...G("controls")},O&&r.createElement(h.u,{label:K?F:V,fz:"sm",position:"left"},r.createElement(p.ActionIcon,{onClick:()=>Q(!K),variant:"none","aria-label":K?F:V,...G("control")},r.createElement(g,{expanded:K}))),W&&r.createElement(C.q,{value:X.code.trim()},e=>{let{copied:t,copy:n}=e;return r.createElement(h.u,{label:t?I:S,fz:"sm",position:"left"},r.createElement(p.ActionIcon,{onClick:n,variant:"none",...G("control"),"aria-label":t?I:S},r.createElement(f.T,{copied:t})))}))),r.createElement(v.x,{type:"auto",dir:"ltr",offsetScrollbars:!1},r.createElement(u.Box,{...G("codeWrapper"),mod:{expanded:K}},r.createElement("pre",{...G("pre")},r.createElement("code",{...G("code"),dangerouslySetInnerHTML:{__html:Y}})))),r.createElement(m.k,{...G("showCodeButton"),mod:{hidden:K},onClick:()=>Q(!0)},V))});w.displayName="@mantine/core/CodeHighlightTabs",w.classes=y}},function(e){e.O(0,[874,947,737,370,236,131,508,582,619,661,744],function(){return e(e.s=77219)}),_N_E=e.O()}]);