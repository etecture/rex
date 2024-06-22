"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[770],{67993:function(t,e,n){n.d(e,{Box:function(){return S}});var r=n(37885),o=n(9434),a=n(74949),c=n(98199);function i(t){return(0,c.X)(t).reduce((e,n)=>void 0!==t[n]?"".concat(e).concat(n.replace(/[A-Z]/g,t=>"-".concat(t.toLowerCase())),":").concat(t[n],";"):e,"").trim()}function l(t){let{selector:e,styles:n,media:o}=t,c=(0,a.R7)();return r.createElement("style",{"data-mantine-styles":"inline",nonce:null==c?void 0:c(),dangerouslySetInnerHTML:{__html:function(t){let{selector:e,styles:n,media:r}=t,o=n?i(n):"",a=Array.isArray(r)?r.map(t=>"@media".concat(t.query,"{").concat(e,"{").concat(i(t.styles),"}}")):[];return"".concat(o?"".concat(e,"{").concat(o,"}"):"").concat(a.join("")).trim()}({selector:e,styles:n,media:o})}})}var u=n(47151),f=n(60086);function s(t){return t.startsWith("data-")?t:"data-".concat(t)}function d(t,e){return Array.isArray(t)?[...t].reduce((t,n)=>({...t,...d(n,e)}),{}):"function"==typeof t?t(e):null==t?{}:t}var p=n(52748);let h={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},ms:{type:"spacing",property:"marginInlineStart"},me:{type:"spacing",property:"marginInlineEnd"},mx:{type:"spacing",property:"marginInline"},my:{type:"spacing",property:"marginBlock"},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},ps:{type:"spacing",property:"paddingInlineStart"},pe:{type:"spacing",property:"paddingInlineEnd"},px:{type:"spacing",property:"paddingInline"},py:{type:"spacing",property:"paddingBlock"},bg:{type:"color",property:"background"},c:{type:"textColor",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"fontFamily",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"lineHeight",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"identity",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"},flex:{type:"identity",property:"flex"}};var m=n(36261);function y(t,e){let n=(0,m.E)({color:t,theme:e});return"dimmed"===n.color?"var(--mantine-color-dimmed)":"bright"===n.color?"var(--mantine-color-bright)":n.variable?"var(".concat(n.variable,")"):n.color}let v={text:"var(--mantine-font-family)",mono:"var(--mantine-font-family-monospace)",heading:"var(--mantine-font-family-headings)"};var g=n(91500);let b={color:y,textColor:function(t,e){let n=(0,m.E)({color:t,theme:e});return n.isThemeColor&&void 0===n.shade?"var(--mantine-color-".concat(n.color,"-text)"):y(t,e)},fontSize:function(t,e){return"string"==typeof t&&t in e.fontSizes?"var(--mantine-font-size-".concat(t,")"):"number"==typeof t||"string"==typeof t?(0,g.h)(t):t},spacing:function(t,e){if("number"==typeof t)return(0,g.h)(t);if("string"==typeof t){let n=t.replace("-","");if(!(n in e.spacing))return(0,g.h)(t);let r="--mantine-spacing-".concat(n);return t.startsWith("-")?"calc(var(".concat(r,") * -1)"):"var(".concat(r,")")}return t},identity:function(t){return t},size:function(t){return"number"==typeof t?(0,g.h)(t):t},lineHeight:function(t,e){return"string"==typeof t&&t in e.lineHeights?"var(--mantine-line-height-".concat(t,")"):t},fontFamily:function(t){return"string"==typeof t&&t in v?v[t]:t}};function k(t){return t.replace("(min-width: ","").replace("em)","")}let w=(0,r.forwardRef)((t,e)=>{let{component:n,style:a,__vars:i,className:m,variant:y,mod:v,size:g,hiddenFrom:w,visibleFrom:S,lightHidden:x,darkHidden:C,renderRoot:E,...N}=t,A=(0,f.rZ)(),{styleProps:z,rest:j}=function(t){let{m:e,mx:n,my:r,mt:o,mb:a,ml:c,mr:i,me:l,ms:u,p:f,px:s,py:d,pt:h,pb:m,pl:y,pr:v,pe:g,ps:b,bg:k,c:w,opacity:S,ff:x,fz:C,fw:E,lts:N,ta:A,lh:z,fs:j,tt:M,td:R,w:T,miw:I,maw:F,h:W,mih:H,mah:L,bgsz:P,bgp:Z,bgr:_,bga:O,pos:B,top:X,left:D,bottom:G,right:K,inset:U,display:$,flex:q,hiddenFrom:V,visibleFrom:J,lightHidden:Q,darkHidden:Y,...tt}=t;return{styleProps:(0,p.L)({m:e,mx:n,my:r,mt:o,mb:a,ml:c,mr:i,me:l,ms:u,p:f,px:s,py:d,pt:h,pb:m,pl:y,pr:v,pe:g,ps:b,bg:k,c:w,opacity:S,ff:x,fz:C,fw:E,lts:N,ta:A,lh:z,fs:j,tt:M,td:R,w:T,miw:I,maw:F,h:W,mih:H,mah:L,bgsz:P,bgp:Z,bgr:_,bga:O,pos:B,top:X,left:D,bottom:G,right:K,inset:U,display:$,flex:q,hiddenFrom:V,visibleFrom:J,lightHidden:Q,darkHidden:Y}),rest:tt}}(N),M=function(){let t=(0,r.useId)().replace(/:/g,"");return"__m__-".concat(t)}(),R=function(t){let{styleProps:e,data:n,theme:r}=t;return function(t){let{media:e,...n}=t,r=Object.keys(e).sort((t,e)=>Number(k(t))-Number(k(e))).map(t=>({query:t,styles:e[t]}));return{...n,media:r}}((0,c.X)(e).reduce((t,o)=>{var a,i;if("hiddenFrom"===o||"visibleFrom"===o)return t;let l=n[o],u=Array.isArray(l.property)?l.property:[l.property],f="object"==typeof(i=e[o])&&null!==i?"base"in i?i.base:void 0:i;if(!function(t){if("object"!=typeof t||null===t)return!1;let e=Object.keys(t);return 1!==e.length||"base"!==e[0]}(e[o]))return u.forEach(e=>{t.inlineStyles[e]=b[l.type](f,r)}),t;t.hasResponsiveStyles=!0;let s="object"==typeof(a=e[o])&&null!==a?(0,c.X)(a).filter(t=>"base"!==t):[];return u.forEach(n=>{f&&(t.styles[n]=b[l.type](f,r)),s.forEach(a=>{var c;let i="(min-width: ".concat(r.breakpoints[a],")");t.media[i]={...t.media[i],[n]:b[l.type]("object"==typeof(c=e[o])&&null!==c&&a in c?c[a]:c,r)}})}),t},{hasResponsiveStyles:!1,styles:{},inlineStyles:{},media:{}}))}({styleProps:z,theme:A,data:h}),T={ref:e,style:function(t){let{theme:e,style:n,vars:r,styleProps:o}=t,a=d(n,e),c=d(r,e);return{...a,...c,...o}}({theme:A,style:a,vars:i,styleProps:R.inlineStyles}),className:(0,o.Z)(m,{[M]:R.hasResponsiveStyles,"mantine-light-hidden":x,"mantine-dark-hidden":C,["mantine-hidden-from-".concat(w)]:w,["mantine-visible-from-".concat(S)]:S}),"data-variant":y,"data-size":(0,u.s)(g)?void 0:g||void 0,...function t(e){return e?"string"==typeof e?{[s(e)]:!0}:Array.isArray(e)?[...e].reduce((e,n)=>({...e,...t(n)}),{}):Object.keys(e).reduce((t,n)=>{let r=e[n];return void 0===r||""===r||!1===r||null===r||(t[s(n)]=e[n]),t},{}):null}(v),...j};return r.createElement(r.Fragment,null,R.hasResponsiveStyles&&r.createElement(l,{selector:".".concat(M),styles:R.styles,media:R.media}),"function"==typeof E?E(T):r.createElement(n||"div",{...T}))});w.displayName="@mantine/core/Box";let S=w},74949:function(t,e,n){n.d(e,{DE:function(){return f},Nu:function(){return u},R7:function(){return l},Sm:function(){return c},XD:function(){return o},uK:function(){return i}});var r=n(37885);let o=(0,r.createContext)(null);function a(){let t=(0,r.useContext)(o);if(!t)throw Error("[@mantine/core] MantineProvider was not found in tree");return t}function c(){return a().cssVariablesResolver}function i(){return a().classNamesPrefix}function l(){return a().getStyleNonce}function u(){return a().withStaticClasses}function f(){return a().headless}},60086:function(t,e,n){n.d(e,{M2:function(){return s},rZ:function(){return f}});var r=n(37885),o=n(77433),a=n(54360);function c(t){return!(t<0)&&!(t>9)&&parseInt(t.toString(),10)===t}function i(t){if(!(t.primaryColor in t.colors))throw Error("[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color");if("object"==typeof t.primaryShade&&(!c(t.primaryShade.dark)||!c(t.primaryShade.light))||"number"==typeof t.primaryShade&&!c(t.primaryShade))throw Error("[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }")}let l=(0,r.createContext)(null),u=()=>(0,r.useContext)(l)||o.t;function f(){let t=(0,r.useContext)(l);if(!t)throw Error("@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app");return t}function s(t){let{theme:e,children:n,inherit:c=!0}=t,f=u(),s=(0,r.useMemo)(()=>(function(t,e){var n;if(!e)return i(t),t;let r=(0,a.R)(t,e);return!e.fontFamily||(null===(n=e.headings)||void 0===n?void 0:n.fontFamily)||(r.headings.fontFamily=e.fontFamily),i(r),r})(c?f:o.t,e),[e,f,c]);return r.createElement(l.Provider,{value:s},n)}s.displayName="@mantine/core/MantineThemeProvider"},37581:function(t,e,n){n.d(e,{u:function(){return o}});var r=n(54760);function o(t,e){let n={from:(null==t?void 0:t.from)||e.defaultGradient.from,to:(null==t?void 0:t.to)||e.defaultGradient.to,deg:(null==t?void 0:t.deg)||e.defaultGradient.deg||0},o=(0,r.p)(n.from,e),a=(0,r.p)(n.to,e);return"linear-gradient(".concat(n.deg,"deg, ").concat(o," 0%, ").concat(a," 100%)")}},30815:function(t,e,n){n.d(e,{j:function(){return r}});function r(t,e){return"number"==typeof t.primaryShade?t.primaryShade:"dark"===e?t.primaryShade.dark:t.primaryShade.light}},54760:function(t,e,n){n.d(e,{p:function(){return o}});var r=n(36261);function o(t,e){let n=(0,r.E)({color:t||e.primaryColor,theme:e});return n.variable?"var(".concat(n.variable,")"):t}},36261:function(t,e,n){n.d(e,{E:function(){return i}});var r=n(30815),o=n(47512);function a(t){return t<=.03928?t/12.92:((t+.055)/1.055)**2.4}function c(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.179;return!t.startsWith("var(")&&function(t){if(t.startsWith("oklch("))return(function(t){let e=t.match(/oklch\((.*?)%\s/);return e?parseFloat(e[1]):null}(t)||0)/100;let{r:e,g:n,b:r}=(0,o.c)(t);return .2126*a(e/255)+.7152*a(n/255)+.0722*a(r/255)}(t)>e}function i(t){let{color:e,theme:n,colorScheme:o}=t;if("string"!=typeof e)throw Error("[@mantine/core] Failed to parse color. Expected color to be a string, instead got ".concat(typeof e));if("bright"===e)return{color:e,value:"dark"===o?n.white:n.black,shade:void 0,isThemeColor:!1,isLight:c("dark"===o?n.white:n.black,n.luminanceThreshold),variable:"--mantine-color-bright"};if("dimmed"===e)return{color:e,value:"dark"===o?n.colors.dark[2]:n.colors.gray[7],shade:void 0,isThemeColor:!1,isLight:c("dark"===o?n.colors.dark[2]:n.colors.gray[6],n.luminanceThreshold),variable:"--mantine-color-dimmed"};if("white"===e||"black"===e)return{color:e,value:"white"===e?n.white:n.black,shade:void 0,isThemeColor:!1,isLight:c("white"===e?n.white:n.black,n.luminanceThreshold),variable:"--mantine-color-".concat(e)};let[a,i]=e.split("."),l=i?Number(i):void 0,u=a in n.colors;if(u){let t=void 0!==l?n.colors[a][l]:n.colors[a][(0,r.j)(n,o||"light")];return{color:a,value:t,shade:l,isThemeColor:u,isLight:c(t,n.luminanceThreshold),variable:i?"--mantine-color-".concat(a,"-").concat(l):"--mantine-color-".concat(a,"-filled")}}return{color:e,value:e,isThemeColor:u,isLight:c(e,n.luminanceThreshold),shade:l,variable:void 0}}},31774:function(t,e,n){n.d(e,{m:function(){return o}});var r=n(47512);function o(t,e){if("string"!=typeof t||e>1||e<0)return"rgba(0, 0, 0, 1)";if(t.startsWith("var("))return"color-mix(in srgb, ".concat(t,", transparent ").concat((1-e)*100,"%)");if(t.startsWith("oklch"))return t.includes("/")?t.replace(/\/\s*[\d.]+\s*\)/,"/ ".concat(e,")")):t.replace(")"," / ".concat(e,")"));let{r:n,g:o,b:a}=(0,r.c)(t);return"rgba(".concat(n,", ").concat(o,", ").concat(a,", ").concat(e,")")}},47512:function(t,e,n){n.d(e,{c:function(){return r}});function r(t){return/^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(t)?function(t){let e=t.replace("#","");if(3===e.length){let t=e.split("");e=[t[0],t[0],t[1],t[1],t[2],t[2]].join("")}if(8===e.length){let t=parseInt(e.slice(6,8),16)/255;return{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16),a:t}}let n=parseInt(e,16);return{r:n>>16&255,g:n>>8&255,b:255&n,a:1}}(t):t.startsWith("rgb")?function(t){let[e,n,r,o]=t.replace(/[^0-9,./]/g,"").split(/[/,]/).map(Number);return{r:e,g:n,b:r,a:o||1}}(t):t.startsWith("hsl")?function(t){let e,n,r;let o=t.match(/^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i);if(!o)return{r:0,g:0,b:0,a:1};let a=parseInt(o[1],10),c=parseInt(o[2],10)/100,i=parseInt(o[3],10)/100,l=o[5]?parseFloat(o[5]):void 0,u=(1-Math.abs(2*i-1))*c,f=a/60,s=u*(1-Math.abs(f%2-1)),d=i-u/2;return f>=0&&f<1?(e=u,n=s,r=0):f>=1&&f<2?(e=s,n=u,r=0):f>=2&&f<3?(e=0,n=u,r=s):f>=3&&f<4?(e=0,n=s,r=u):f>=4&&f<5?(e=s,n=0,r=u):(e=u,n=0,r=s),{r:Math.round((e+d)*255),g:Math.round((n+d)*255),b:Math.round((r+d)*255),a:l||1}}(t):{r:0,g:0,b:0,a:1}}},77433:function(t,e,n){n.d(e,{t:function(){return f}});var r=n(91500);n(37885);var o=n(47512);function a(t,e){if(t.startsWith("var("))return"color-mix(in srgb, ".concat(t,", black ").concat(100*e,"%)");let{r:n,g:r,b:a,a:c}=(0,o.c)(t),i=1-e,l=t=>Math.round(t*i);return"rgba(".concat(l(n),", ").concat(l(r),", ").concat(l(a),", ").concat(c,")")}var c=n(37581),i=n(36261),l=n(31774);let u="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",f={scale:1,fontSmoothing:!0,focusRing:"auto",white:"#fff",black:"#000",colors:{dark:["#C9C9C9","#b8b8b8","#828282","#696969","#424242","#3b3b3b","#2e2e2e","#242424","#1f1f1f","#141414"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]},primaryShade:{light:6,dark:8},primaryColor:"blue",variantColorResolver:t=>{let{color:e,theme:n,variant:o,gradient:u,autoContrast:f}=t,s=(0,i.E)({color:e,theme:n}),d="boolean"==typeof f?f:n.autoContrast;if("filled"===o){let t=d&&s.isLight?"var(--mantine-color-black)":"var(--mantine-color-white)";return s.isThemeColor?void 0===s.shade?{background:"var(--mantine-color-".concat(e,"-filled)"),hover:"var(--mantine-color-".concat(e,"-filled-hover)"),color:t,border:"".concat((0,r.h)(1)," solid transparent")}:{background:"var(--mantine-color-".concat(s.color,"-").concat(s.shade,")"),hover:"var(--mantine-color-".concat(s.color,"-").concat(9===s.shade?8:s.shade+1,")"),color:t,border:"".concat((0,r.h)(1)," solid transparent")}:{background:e,hover:a(e,.1),color:t,border:"".concat((0,r.h)(1)," solid transparent")}}if("light"===o){if(s.isThemeColor){if(void 0===s.shade)return{background:"var(--mantine-color-".concat(e,"-light)"),hover:"var(--mantine-color-".concat(e,"-light-hover)"),color:"var(--mantine-color-".concat(e,"-light-color)"),border:"".concat((0,r.h)(1)," solid transparent")};let t=n.colors[s.color][s.shade];return{background:(0,l.m)(t,.1),hover:(0,l.m)(t,.12),color:"var(--mantine-color-".concat(s.color,"-").concat(Math.min(s.shade,6),")"),border:"".concat((0,r.h)(1)," solid transparent")}}return{background:(0,l.m)(e,.1),hover:(0,l.m)(e,.12),color:e,border:"".concat((0,r.h)(1)," solid transparent")}}if("outline"===o)return s.isThemeColor?void 0===s.shade?{background:"transparent",hover:"var(--mantine-color-".concat(e,"-outline-hover)"),color:"var(--mantine-color-".concat(e,"-outline)"),border:"".concat((0,r.h)(1)," solid var(--mantine-color-").concat(e,"-outline)")}:{background:"transparent",hover:(0,l.m)(n.colors[s.color][s.shade],.05),color:"var(--mantine-color-".concat(s.color,"-").concat(s.shade,")"),border:"".concat((0,r.h)(1)," solid var(--mantine-color-").concat(s.color,"-").concat(s.shade,")")}:{background:"transparent",hover:(0,l.m)(e,.05),color:e,border:"".concat((0,r.h)(1)," solid ").concat(e)};if("subtle"===o){if(s.isThemeColor){if(void 0===s.shade)return{background:"transparent",hover:"var(--mantine-color-".concat(e,"-light-hover)"),color:"var(--mantine-color-".concat(e,"-light-color)"),border:"".concat((0,r.h)(1)," solid transparent")};let t=n.colors[s.color][s.shade];return{background:"transparent",hover:(0,l.m)(t,.12),color:"var(--mantine-color-".concat(s.color,"-").concat(Math.min(s.shade,6),")"),border:"".concat((0,r.h)(1)," solid transparent")}}return{background:"transparent",hover:(0,l.m)(e,.12),color:e,border:"".concat((0,r.h)(1)," solid transparent")}}return"transparent"===o?s.isThemeColor?void 0===s.shade?{background:"transparent",hover:"transparent",color:"var(--mantine-color-".concat(e,"-light-color)"),border:"".concat((0,r.h)(1)," solid transparent")}:{background:"transparent",hover:"transparent",color:"var(--mantine-color-".concat(s.color,"-").concat(Math.min(s.shade,6),")"),border:"".concat((0,r.h)(1)," solid transparent")}:{background:"transparent",hover:"transparent",color:e,border:"".concat((0,r.h)(1)," solid transparent")}:"white"===o?s.isThemeColor?void 0===s.shade?{background:"var(--mantine-color-white)",hover:a(n.white,.01),color:"var(--mantine-color-".concat(e,"-filled)"),border:"".concat((0,r.h)(1)," solid transparent")}:{background:"var(--mantine-color-white)",hover:a(n.white,.01),color:"var(--mantine-color-".concat(s.color,"-").concat(s.shade,")"),border:"".concat((0,r.h)(1)," solid transparent")}:{background:"var(--mantine-color-white)",hover:a(n.white,.01),color:e,border:"".concat((0,r.h)(1)," solid transparent")}:"gradient"===o?{background:(0,c.u)(u,n),hover:(0,c.u)(u,n),color:"var(--mantine-color-white)",border:"none"}:"default"===o?{background:"var(--mantine-color-default)",hover:"var(--mantine-color-default-hover)",color:"var(--mantine-color-default-color)",border:"".concat((0,r.h)(1)," solid var(--mantine-color-default-border)")}:{}},autoContrast:!1,luminanceThreshold:.3,fontFamily:u,fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",respectReducedMotion:!1,cursorType:"default",defaultGradient:{from:"blue",to:"cyan",deg:45},defaultRadius:"sm",activeClassName:"mantine-active",focusClassName:"",headings:{fontFamily:u,fontWeight:"700",textWrap:"wrap",sizes:{h1:{fontSize:(0,r.h)(34),lineHeight:"1.3"},h2:{fontSize:(0,r.h)(26),lineHeight:"1.35"},h3:{fontSize:(0,r.h)(22),lineHeight:"1.4"},h4:{fontSize:(0,r.h)(18),lineHeight:"1.45"},h5:{fontSize:(0,r.h)(16),lineHeight:"1.5"},h6:{fontSize:(0,r.h)(14),lineHeight:"1.5"}}},fontSizes:{xs:(0,r.h)(12),sm:(0,r.h)(14),md:(0,r.h)(16),lg:(0,r.h)(18),xl:(0,r.h)(20)},lineHeights:{xs:"1.4",sm:"1.45",md:"1.55",lg:"1.6",xl:"1.65"},radius:{xs:(0,r.h)(2),sm:(0,r.h)(4),md:(0,r.h)(8),lg:(0,r.h)(16),xl:(0,r.h)(32)},spacing:{xs:(0,r.h)(10),sm:(0,r.h)(12),md:(0,r.h)(16),lg:(0,r.h)(20),xl:(0,r.h)(32)},breakpoints:{xs:"36em",sm:"48em",md:"62em",lg:"75em",xl:"88em"},shadows:{xs:"0 ".concat((0,r.h)(1)," ").concat((0,r.h)(3)," rgba(0, 0, 0, 0.05), 0 ").concat((0,r.h)(1)," ").concat((0,r.h)(2)," rgba(0, 0, 0, 0.1)"),sm:"0 ".concat((0,r.h)(1)," ").concat((0,r.h)(3)," rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ").concat((0,r.h)(10)," ").concat((0,r.h)(15)," ").concat((0,r.h)(-5),", rgba(0, 0, 0, 0.04) 0 ").concat((0,r.h)(7)," ").concat((0,r.h)(7)," ").concat((0,r.h)(-5)),md:"0 ".concat((0,r.h)(1)," ").concat((0,r.h)(3)," rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ").concat((0,r.h)(20)," ").concat((0,r.h)(25)," ").concat((0,r.h)(-5),", rgba(0, 0, 0, 0.04) 0 ").concat((0,r.h)(10)," ").concat((0,r.h)(10)," ").concat((0,r.h)(-5)),lg:"0 ".concat((0,r.h)(1)," ").concat((0,r.h)(3)," rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ").concat((0,r.h)(28)," ").concat((0,r.h)(23)," ").concat((0,r.h)(-7),", rgba(0, 0, 0, 0.04) 0 ").concat((0,r.h)(12)," ").concat((0,r.h)(12)," ").concat((0,r.h)(-7)),xl:"0 ".concat((0,r.h)(1)," ").concat((0,r.h)(3)," rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ").concat((0,r.h)(36)," ").concat((0,r.h)(28)," ").concat((0,r.h)(-7),", rgba(0, 0, 0, 0.04) 0 ").concat((0,r.h)(17)," ").concat((0,r.h)(17)," ").concat((0,r.h)(-7))},other:{},components:{}}},64327:function(t,e,n){n.d(e,{w:function(){return a}});var r=n(52748);n(37885);var o=n(60086);function a(t,e,n){var a;let c=(0,o.rZ)(),i=null===(a=c.components[t])||void 0===a?void 0:a.defaultProps,l="function"==typeof i?i(c):i;return{...e,...l,...(0,r.L)(n)}}},18339:function(t,e,n){n.d(e,{d:function(){return a},y:function(){return o}});var r=n(37885);function o(t){return t}function a(t){let e=(0,r.forwardRef)(t);return e.extend=o,e}},58605:function(t,e,n){n.d(e,{b:function(){return a}});var r=n(37885),o=n(18339);function a(t){let e=(0,r.forwardRef)(t);return e.extend=o.y,e}},61682:function(t,e,n){n.d(e,{Z:function(){return r}});function r(t){return t}},28122:function(t,e,n){n.d(e,{y:function(){return d}}),n(37885);var r=n(74949),o=n(60086),a=n(9434);let c={always:"mantine-focus-always",auto:"mantine-focus-auto",never:"mantine-focus-never"},i={};function l(t){let{theme:e,classNames:n,props:r,stylesCtx:o}=t;return function(t){let e={};return t.forEach(t=>{Object.entries(t).forEach(t=>{let[n,r]=t;e[n]?e[n]=(0,a.Z)(e[n],r):e[n]=r})}),e}((Array.isArray(n)?n:[n]).map(t=>"function"==typeof t?t(e,r,o):t||i))}function u(t){let{theme:e,styles:n,props:r,stylesCtx:o}=t;return(Array.isArray(n)?n:[n]).reduce((t,n)=>"function"==typeof n?{...t,...n(e,r,o)}:{...t,...n},{})}function f(t){let{style:e,theme:n}=t;return Array.isArray(e)?[...e].reduce((t,e)=>({...t,...f({style:e,theme:n})}),{}):"function"==typeof e?e(n):null==e?{}:e}var s=n(52748);function d(t){let{name:e,classes:n,props:i,stylesCtx:d,className:p,style:h,rootSelector:m="root",unstyled:y,classNames:v,styles:g,vars:b,varsResolver:k}=t,w=(0,o.rZ)(),S=(0,r.uK)(),x=(0,r.Nu)(),C=(0,r.DE)(),E=(Array.isArray(e)?e:[e]).filter(t=>t);return(t,e)=>({className:function(t){let{theme:e,options:n,themeName:r,selector:o,classNamesPrefix:i,classNames:u,classes:f,unstyled:s,className:d,rootSelector:p,props:h,stylesCtx:m,withStaticClasses:y,headless:v}=t;return(0,a.Z)(function(t){let{theme:e,options:n,unstyled:r}=t;return(0,a.Z)((null==n?void 0:n.focusable)&&!r&&(e.focusClassName||c[e.focusRing]),(null==n?void 0:n.active)&&!r&&e.activeClassName)}({theme:e,options:n,unstyled:s||v}),function(t){let{themeName:e,theme:n,selector:r,props:o,stylesCtx:a}=t;return e.map(t=>{var e,c;return null===(e=l({theme:n,classNames:null===(c=n.components[t])||void 0===c?void 0:c.classNames,props:o,stylesCtx:a}))||void 0===e?void 0:e[r]})}({theme:e,themeName:r,selector:o,props:h,stylesCtx:m}),function(t){let{options:e,classes:n,selector:r,unstyled:o}=t;return(null==e?void 0:e.variant)&&!o?n["".concat(r,"--").concat(e.variant)]:void 0}({options:n,classes:f,selector:o,unstyled:s}),function(t){let{selector:e,stylesCtx:n,theme:r,classNames:o,props:a}=t;return l({theme:r,classNames:o,props:a,stylesCtx:n})[e]}({selector:o,stylesCtx:m,theme:e,classNames:u,props:h}),function(t){let{selector:e,stylesCtx:n,options:r,props:o,theme:a}=t;return l({theme:a,classNames:null==r?void 0:r.classNames,props:(null==r?void 0:r.props)||o,stylesCtx:n})[e]}({selector:o,stylesCtx:m,options:n,props:h,theme:e}),function(t){let{rootSelector:e,selector:n,className:r}=t;return e===n?r:void 0}({rootSelector:p,selector:o,className:d}),function(t){let{selector:e,classes:n,unstyled:r}=t;return r?void 0:n[e]}({selector:o,classes:f,unstyled:s||v}),y&&!v&&function(t){let{themeName:e,classNamesPrefix:n,selector:r,withStaticClass:o}=t;return!1===o?[]:e.map(t=>"".concat(n,"-").concat(t,"-").concat(r))}({themeName:r,classNamesPrefix:i,selector:o,withStaticClass:null==n?void 0:n.withStaticClass}),null==n?void 0:n.className)}({theme:w,options:e,themeName:E,selector:t,classNamesPrefix:S,classNames:v,classes:n,unstyled:y,className:p,rootSelector:m,props:i,stylesCtx:d,withStaticClasses:x,headless:C}),style:function(t){let{theme:e,themeName:n,selector:r,options:o,props:a,stylesCtx:c,rootSelector:i,styles:l,style:d,vars:p,varsResolver:h,headless:m}=t;return{...function(t){let{theme:e,themeName:n,props:r,stylesCtx:o,selector:a}=t;return n.map(t=>{var n;return u({theme:e,styles:null===(n=e.components[t])||void 0===n?void 0:n.styles,props:r,stylesCtx:o})[a]}).reduce((t,e)=>({...t,...e}),{})}({theme:e,themeName:n,props:a,stylesCtx:c,selector:r}),...u({theme:e,styles:l,props:a,stylesCtx:c})[r],...u({theme:e,styles:null==o?void 0:o.styles,props:(null==o?void 0:o.props)||a,stylesCtx:c})[r],...function(t){var e;let{vars:n,varsResolver:r,theme:o,props:a,stylesCtx:c,selector:i,themeName:l,headless:u}=t;return null===(e=[u?{}:null==r?void 0:r(o,a,c),...l.map(t=>{var e,n,r;return null===(r=o.components)||void 0===r?void 0:null===(n=r[t])||void 0===n?void 0:null===(e=n.vars)||void 0===e?void 0:e.call(n,o,a,c)}),null==n?void 0:n(o,a,c)].reduce((t,e)=>(e&&Object.keys(e).forEach(n=>{t[n]={...t[n],...(0,s.L)(e[n])}}),t),{}))||void 0===e?void 0:e[i]}({theme:e,props:a,stylesCtx:c,vars:p,varsResolver:h,selector:r,themeName:n,headless:m}),...i===r?f({style:d,theme:e}):null,...f({style:null==o?void 0:o.style,theme:e})}}({theme:w,themeName:E,selector:t,options:e,props:i,stylesCtx:d,rootSelector:m,styles:g,style:h,vars:b,varsResolver:k,headless:C})})}},54360:function(t,e,n){function r(t){return t&&"object"==typeof t&&!Array.isArray(t)}n.d(e,{R:function(){return function t(e,n){let o={...e};return r(e)&&r(n)&&Object.keys(n).forEach(a=>{r(n[a])&&a in e?o[a]=t(o[a],n[a]):o[a]=n[a]}),o}}})},52748:function(t,e,n){n.d(e,{L:function(){return r}});function r(t){return Object.keys(t).reduce((e,n)=>(void 0!==t[n]&&(e[n]=t[n]),e),{})}},70665:function(t,e,n){n.d(e,{Dp:function(){return u},H5:function(){return i},Xj:function(){return f},ap:function(){return a},bG:function(){return c},yv:function(){return l}});var r=n(47151),o=n(91500);function a(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"size",n=!(arguments.length>2)||void 0===arguments[2]||arguments[2];if(void 0!==t)return(0,r.s)(t)?n?(0,o.h)(t):t:"var(--".concat(e,"-").concat(t,")")}function c(t){return a(t,"mantine-spacing")}function i(t){return void 0===t?"var(--mantine-radius-default)":a(t,"mantine-radius")}function l(t){return a(t,"mantine-font-size")}function u(t){return a(t,"mantine-line-height",!1)}function f(t){if(t)return a(t,"mantine-shadow",!1)}},47151:function(t,e,n){n.d(e,{s:function(){return r}});function r(t){return"number"==typeof t||"string"==typeof t&&(!!(t.startsWith("calc(")||t.startsWith("var(")||t.includes(" ")&&""!==t.trim())||/[0-9]/.test(t.trim().replace("-","")[0]))}},98199:function(t,e,n){n.d(e,{X:function(){return r}});function r(t){return Object.keys(t)}},91500:function(t,e,n){function r(t){return"calc(".concat(t," * var(--mantine-scale))")}function o(t){let{shouldScale:e=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function n(o){if(0===o||"0"===o)return"0".concat(t);if("number"==typeof o){let n="".concat(o/16).concat(t);return e?r(n):n}if("string"==typeof o){if(o.startsWith("calc(")||o.startsWith("var(")||o.startsWith("clamp("))return o;if(o.includes(" "))return o.split(" ").map(t=>n(t)).join(" ");if(o.includes(t))return e?r(o):o;let a=o.replace("px","");if(!Number.isNaN(Number(a))){let n="".concat(Number(a)/16).concat(t);return e?r(n):n}}return o}}n.d(e,{em:function(){return c},h:function(){return a}});let a=o("rem",{shouldScale:!0}),c=o("em")},9434:function(t,e,n){e.Z=function(){for(var t,e,n=0,r="",o=arguments.length;n<o;n++)(t=arguments[n])&&(e=function t(e){var n,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e){if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(r=t(e[n]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r)}return o}(t))&&(r&&(r+=" "),r+=e);return r}}}]);