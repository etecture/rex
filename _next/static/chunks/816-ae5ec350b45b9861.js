(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[816],{42140:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(59303),o=n(89773),a=n.n(o),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},l=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&m(e,n,t[n]);return e},p=(e,t)=>c(e,u(t)),g=(e,t)=>{var n={};for(var r in e)f.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))0>t.indexOf(r)&&d.call(e,r)&&(n[r]=e[r]);return n},y=(e,t,n)=>{let o=(0,r.forwardRef)((t,o)=>{var{color:a="currentColor",size:l=24,stroke:c=2,children:u}=t,s=g(t,["color","size","stroke","children"]);return(0,r.createElement)("svg",h(p(h({ref:o},i),{width:l,height:l,stroke:a,strokeWidth:c,className:"tabler-icon tabler-icon-".concat(e)}),s),[...n.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...u||[]])});return o.propTypes={color:a().string,size:a().oneOfType([a().string,a().number]),stroke:a().oneOfType([a().string,a().number])},o.displayName="".concat(t),o}},41693:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(42140).Z)("chevron-down","IconChevronDown",[["path",{d:"M6 9l6 6l6 -6",key:"svg-0"}]])},58741:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(42140).Z)("chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]])},71183:function(e,t,n){"use strict";n.d(t,{default:function(){return o.a}});var r=n(6969),o=n.n(r)},95709:function(e,t,n){"use strict";var r=n(29410);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}})},46841:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return r}}),n(83949);let r=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},55090:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(83949),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6969:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});let r=n(43658),o=n(12411),a=r._(n(59303)),i=n(20163),l=n(62066),c=n(35350),u=n(68223),s=n(46841),f=n(82961),d=n(34684),m=n(1254),h=n(55090),p=n(3050),g=n(19232),y=new Set;function v(e,t,n,r,o,a){if("undefined"!=typeof window&&(a||(0,l.isLocalURL)(t))){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(y.has(o))return;y.add(o)}Promise.resolve(a?e.prefetch(t,o):e.prefetch(t,n,r)).catch(e=>{})}}function b(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let w=a.default.forwardRef(function(e,t){let n,r;let{href:c,as:y,children:w,prefetch:k=null,passHref:_,replace:P,shallow:O,scroll:x,locale:R,onClick:E,onMouseEnter:j,onTouchStart:S,legacyBehavior:C=!1,...M}=e;n=w,C&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let N=a.default.useContext(f.RouterContext),I=a.default.useContext(d.AppRouterContext),T=null!=N?N:I,L=!N,A=!1!==k,U=null===k?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:W,as:z}=a.default.useMemo(()=>{if(!N){let e=b(c);return{href:e,as:y?b(y):e}}let[e,t]=(0,i.resolveHref)(N,c,!0);return{href:e,as:y?(0,i.resolveHref)(N,y):t||e}},[N,c,y]),D=a.default.useRef(W),B=a.default.useRef(z);C&&(r=a.default.Children.only(n));let F=C?r&&"object"==typeof r&&r.ref:t,[Z,q,K]=(0,m.useIntersection)({rootMargin:"200px"}),H=a.default.useCallback(e=>{(B.current!==z||D.current!==W)&&(K(),B.current=z,D.current=W),Z(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[z,F,W,K,Z]);a.default.useEffect(()=>{T&&q&&A&&v(T,W,z,{locale:R},{kind:U},L)},[z,W,q,R,A,null==N?void 0:N.locale,T,L,U]);let G={ref:H,onClick(e){C||"function"!=typeof E||E(e),C&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,n,r,o,i,c,u,s){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==c||c;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};s?a.default.startTransition(d):d()}(e,T,W,z,P,O,x,R,L)},onMouseEnter(e){C||"function"!=typeof j||j(e),C&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),T&&(A||!L)&&v(T,W,z,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)},onTouchStart:function(e){C||"function"!=typeof S||S(e),C&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),T&&(A||!L)&&v(T,W,z,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:U},L)}};if((0,u.isAbsoluteUrl)(z))G.href=z;else if(!C||_||"a"===r.type&&!("href"in r.props)){let e=void 0!==R?R:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&(0,h.getDomainLocale)(z,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);G.href=t||(0,p.addBasePath)((0,s.addLocale)(z,e,null==N?void 0:N.defaultLocale))}return C?a.default.cloneElement(r,G):(0,o.jsx)("a",{...M,...G,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},55993:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},20163:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let r=n(60527),o=n(35350),a=n(78624),i=n(68223),l=n(83949),c=n(62066),u=n(70825),s=n(40953);function f(e,t,n){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),m=d.match(/^[a-zA-Z]{1,}:\/\//),h=m?d.slice(m[0].length):d;if((h.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,i.normalizeRepeatedSlashes)(h);d=(m?m[0]:"")+t}if(!(0,c.isLocalURL)(d))return n?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,l.normalizePathTrailingSlash)(e.pathname);let t="";if((0,u.isDynamicRoute)(e.pathname)&&e.searchParams&&n){let n=(0,r.searchParamsToUrlQuery)(e.searchParams),{result:i,params:l}=(0,s.interpolateAs)(e.pathname,e.pathname,n);i&&(t=(0,o.formatWithValidation)({pathname:i,hash:e.hash,query:(0,a.omit)(n,l)}))}let i=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return n?[i,t||i]:i}catch(e){return n?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let r=n(59303),o=n(55993),a="function"==typeof IntersectionObserver,i=new Map,l=[];function c(e){let{rootRef:t,rootMargin:n,disabled:c}=e,u=c||!a,[s,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),m=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(a){if(u||s)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},l.push(n),i.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,n,t,s,d.current]),[m,s,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9038:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let n=/[|\\{}()[\]^$+*?.-]/,r=/[|\\{}()[\]^$+*?.-]/g;function o(e){return n.test(e)?e.replace(r,"\\$&"):e}},82961:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=n(43658)._(n(59303)).default.createContext(null)},35350:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return a},formatWithValidation:function(){return l},urlObjectKeys:function(){return i}});let r=n(87315)._(n(60527)),o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:n}=e,a=e.protocol||"",i=e.pathname||"",l=e.hash||"",c=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:n&&(u=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(u+=":"+e.port)),c&&"object"==typeof c&&(c=String(r.urlQueryToSearchParams(c)));let s=e.search||c&&"?"+c||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==u?(u="//"+(u||""),i&&"/"!==i[0]&&(i="/"+i)):u||(u=""),l&&"#"!==l[0]&&(l="#"+l),s&&"?"!==s[0]&&(s="?"+s),""+a+u+(i=i.replace(/[?#]/g,encodeURIComponent))+(s=s.replace("#","%23"))+l}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return a(e)}},70825:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getSortedRoutes:function(){return r.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let r=n(11413),o=n(54047)},40953:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return a}});let r=n(8565),o=n(36321);function a(e,t,n){let a="",i=(0,o.getRouteRegex)(e),l=i.groups,c=(t!==e?(0,r.getRouteMatcher)(i)(t):"")||n;a=e;let u=Object.keys(l);return u.every(e=>{let t=c[e]||"",{repeat:n,optional:r}=l[e],o="["+(n?"...":"")+e+"]";return r&&(o=(t?"":"/")+"["+o+"]"),n&&!Array.isArray(t)&&(t=[t]),(r||e in c)&&(a=a.replace(o,n?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(a=""),{params:u,result:a}}},54047:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return a}});let r=n(97505),o=/\/\[[^/]+?\](?=\/|$)/;function a(e){return(0,r.isInterceptionRouteAppPath)(e)&&(e=(0,r.extractInterceptionRouteInformation)(e).interceptedRoute),o.test(e)}},62066:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return a}});let r=n(68223),o=n(56982);function a(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},78624:function(e,t){"use strict";function n(e,t){let n={};return Object.keys(e).forEach(r=>{t.includes(r)||(n[r]=e[r])}),n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return n}})},60527:function(e,t){"use strict";function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function a(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o}})},8565:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let r=n(68223);function o(e){let{re:t,groups:n}=e;return e=>{let o=t.exec(e);if(!o)return!1;let a=e=>{try{return decodeURIComponent(e)}catch(e){throw new r.DecodeError("failed to decode param")}},i={};return Object.keys(n).forEach(e=>{let t=n[e],r=o[t.pos];void 0!==r&&(i[e]=~r.indexOf("/")?r.split("/").map(e=>a(e)):t.repeat?[a(r)]:a(r))}),i}}},36321:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getNamedMiddlewareRegex:function(){return d},getNamedRouteRegex:function(){return f},getRouteRegex:function(){return c}});let r=n(97505),o=n(9038),a=n(27006);function i(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let n=e.startsWith("...");return n&&(e=e.slice(3)),{key:e,repeat:n,optional:t}}function l(e){let t=(0,a.removeTrailingSlash)(e).slice(1).split("/"),n={},l=1;return{parameterizedRoute:t.map(e=>{let t=r.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&a){let{key:e,optional:r,repeat:c}=i(a[1]);return n[e]={pos:l++,repeat:c,optional:r},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!a)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:r}=i(a[1]);return n[e]={pos:l++,repeat:t,optional:r},t?r?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:n}}function c(e){let{parameterizedRoute:t,groups:n}=l(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:n}}function u(e){let{interceptionMarker:t,getSafeRouteKey:n,segment:r,routeKeys:a,keyPrefix:l}=e,{key:c,optional:u,repeat:s}=i(r),f=c.replace(/\W/g,"");l&&(f=""+l+f);let d=!1;(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=n()),l?a[f]=""+l+c:a[f]=c;let m=t?(0,o.escapeStringRegexp)(t):"";return s?u?"(?:/"+m+"(?<"+f+">.+?))?":"/"+m+"(?<"+f+">.+?)":"/"+m+"(?<"+f+">[^/]+?)"}function s(e,t){let n;let i=(0,a.removeTrailingSlash)(e).slice(1).split("/"),l=(n=0,()=>{let e="",t=++n;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),c={};return{namedParameterizedRoute:i.map(e=>{let n=r.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(n&&a){let[n]=e.split(a[0]);return u({getSafeRouteKey:l,interceptionMarker:n,segment:a[1],routeKeys:c,keyPrefix:t?"nxtI":void 0})}return a?u({getSafeRouteKey:l,segment:a[1],routeKeys:c,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:c}}function f(e,t){let n=s(e,t);return{...c(e),namedRegex:"^"+n.namedParameterizedRoute+"(?:/)?$",routeKeys:n.routeKeys}}function d(e,t){let{parameterizedRoute:n}=l(e),{catchAll:r=!0}=t;if("/"===n)return{namedRegex:"^/"+(r?".*":"")+"$"};let{namedParameterizedRoute:o}=s(e,!1);return{namedRegex:"^"+o+(r?"(?:(/.*)?)":"")+"$"}}},11413:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return r}});class n{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let n=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&n.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');n.unshift(t)}return null!==this.restSlugName&&n.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&n.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),n}_insert(e,t,r){if(0===e.length){this.placeholder=!1;return}if(r)throw Error("Catch-all must be the last part of the URL.");let o=e[0];if(o.startsWith("[")&&o.endsWith("]")){let n=o.slice(1,-1),i=!1;if(n.startsWith("[")&&n.endsWith("]")&&(n=n.slice(1,-1),i=!0),n.startsWith("...")&&(n=n.substring(3),r=!0),n.startsWith("[")||n.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+n+"').");if(n.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+n+"').");function a(e,n){if(null!==e&&e!==n)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+n+"').");t.forEach(e=>{if(e===n)throw Error('You cannot have the same slug name "'+n+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+n+'" differ only by non-word symbols within a single dynamic path')}),t.push(n)}if(r){if(i){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');a(this.optionalRestSlugName,n),this.optionalRestSlugName=n,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');a(this.restSlugName,n),this.restSlugName=n,o="[...]"}}else{if(i)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');a(this.slugName,n),this.slugName=n,o="[]"}}this.children.has(o)||this.children.set(o,new n),this.children.get(o)._insert(e.slice(1),t,r)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function r(e){let t=new n;return e.forEach(e=>t.insert(e)),t.smoosh()}},68223:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return y},NormalizeError:function(){return p},PageNotFoundError:function(){return g},SP:function(){return d},ST:function(){return m},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return c},getLocationOrigin:function(){return i},getURL:function(){return l},isAbsoluteUrl:function(){return a},isResSent:function(){return u},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return s},stringifyError:function(){return b}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function i(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function l(){let{href:e}=window.location,t=i();return e.substring(t.length)}function c(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function s(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&u(n))return r;if(!r)throw Error('"'+c(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let d="undefined"!=typeof performance,m=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class p extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function b(e){return JSON.stringify({message:e.message,stack:e.stack})}},97608:function(e,t,n){"use strict";var r=n(57544);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},89773:function(e,t,n){e.exports=n(97608)()},57544:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},89430:function(){},48015:function(){},89524:function(e){e.exports={style:{fontFamily:"'__Inter_8ca2aa', '__Inter_Fallback_8ca2aa'",fontStyle:"normal"},className:"__className_8ca2aa"}},93431:function(e,t,n){"use strict";n.r(t),n.d(t,{Group:function(){return m}});var r=n(59303),o=n(89984),a=n(74591),i=n(47567),l=n(56161),c=n(75631),u=n(10081),s={root:"m-4081bf90"};let f={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},d=(0,a.Z)((e,t,n)=>{let{grow:r,preventGrowOverflow:a,gap:i,align:l,justify:c,wrap:u}=t,{childWidth:s}=n;return{root:{"--group-child-width":r&&a?s:void 0,"--group-gap":(0,o.bG)(i),"--group-align":l,"--group-justify":c,"--group-wrap":u}}}),m=(0,u.d)((e,t)=>{let n=(0,i.w)("Group",f,e),{classNames:a,className:u,style:m,styles:h,unstyled:p,children:g,gap:y,align:v,justify:b,wrap:w,grow:k,preventGrowOverflow:_,vars:P,variant:O,__size:x,mod:R,...E}=n,j=r.Children.toArray(g).filter(Boolean),S=j.length,C=(0,o.bG)(null!=y?y:"md"),M="calc(".concat(100/S,"% - (").concat(C," - ").concat(C," / ").concat(S,"))"),N=(0,l.y)({name:"Group",props:n,stylesCtx:{childWidth:M},className:u,style:m,classes:s,classNames:a,styles:h,unstyled:p,vars:P,varsResolver:d});return r.createElement(c.Box,{...N("root"),ref:t,variant:O,mod:[{grow:k},R],size:x,...E},j)});m.classes=s,m.displayName="@mantine/core/Group"},47398:function(e,t,n){"use strict";n.r(t),n.d(t,{Stack:function(){return m}});var r=n(59303),o=n(89984),a=n(74591),i=n(47567),l=n(56161),c=n(75631),u=n(10081),s={root:"m-6d731127"};let f={gap:"md",align:"stretch",justify:"flex-start"},d=(0,a.Z)((e,t)=>{let{gap:n,align:r,justify:a}=t;return{root:{"--stack-gap":(0,o.bG)(n),"--stack-align":r,"--stack-justify":a}}}),m=(0,u.d)((e,t)=>{let n=(0,i.w)("Stack",f,e),{classNames:o,className:a,style:u,styles:m,unstyled:h,vars:p,align:g,justify:y,gap:v,variant:b,...w}=n,k=(0,l.y)({name:"Stack",props:n,classes:s,className:a,style:u,classNames:o,styles:m,unstyled:h,vars:p,varsResolver:d});return r.createElement(c.Box,{ref:t,...k("root"),variant:b,...w})});m.classes=s,m.displayName="@mantine/core/Stack"},94245:function(e,t,n){"use strict";n.d(t,{Text:function(){return p}});var r=n(59303),o=n(89984),a=n(74591),i=n(1534),l=n(52515),c=n(47567),u=n(56161),s=n(75631),f=n(37349),d={root:"m-b6d8b162"};let m={inherit:!1},h=(0,a.Z)((e,t)=>{let{variant:n,lineClamp:r,gradient:a,size:c,color:u}=t;return{root:{"--text-fz":(0,o.yv)(c),"--text-lh":(0,o.Dp)(c),"--text-gradient":"gradient"===n?(0,l.u)(a,e):void 0,"--text-line-clamp":"number"==typeof r?r.toString():void 0,"--text-color":u?(0,i.p)(u,e):void 0}}}),p=(0,f.b)((e,t)=>{let n=(0,c.w)("Text",m,e),{lineClamp:o,truncate:a,inline:i,inherit:l,gradient:f,span:p,__staticSelector:g,vars:y,className:v,style:b,classNames:w,styles:k,unstyled:_,variant:P,mod:O,size:x,...R}=n,E=(0,u.y)({name:["Text",g],props:n,classes:d,className:v,style:b,classNames:w,styles:k,unstyled:_,vars:y,varsResolver:h});return r.createElement(s.Box,{...E("root",{focusable:!0}),ref:t,component:p?"span":"p",variant:P,mod:[{"data-truncate":"start"===a?"start":"end"===a||a?"end":void 0,"data-line-clamp":"number"==typeof o,"data-inline":i,"data-inherit":l},O],size:x,...R})});p.classes=d,p.displayName="@mantine/core/Text"},94045:function(e,t,n){"use strict";n.d(t,{k:function(){return m}});var r=n(59303),o=n(89984),a=n(74591),i=n(47567),l=n(56161),c=n(75631),u=n(10081),s={root:"m-7341320d"};let f={},d=(0,a.Z)((e,t)=>{let{size:n,radius:r,variant:a,gradient:i,color:l,autoContrast:c}=t,u=e.variantColorResolver({color:l||e.primaryColor,theme:e,gradient:i,variant:a||"filled",autoContrast:c});return{root:{"--ti-size":(0,o.ap)(n,"ti-size"),"--ti-radius":void 0===r?void 0:(0,o.H5)(r),"--ti-bg":l||a?u.background:void 0,"--ti-color":l||a?u.color:void 0,"--ti-bd":l||a?u.border:void 0}}}),m=(0,u.d)((e,t)=>{let n=(0,i.w)("ThemeIcon",f,e),{classNames:o,className:a,style:u,styles:m,unstyled:h,vars:p,autoContrast:g,...y}=n,v=(0,l.y)({name:"ThemeIcon",classes:s,props:n,className:a,style:u,classNames:o,styles:m,unstyled:h,vars:p,varsResolver:d});return r.createElement(c.Box,{ref:t,...v("root"),...y})});m.classes=s,m.displayName="@mantine/core/ThemeIcon"},13936:function(e,t,n){"use strict";n.d(t,{MantineProvider:function(){return _}});var r=n(59303);function o(e){return"auto"===e||"dark"===e||"light"===e}var a=n(13259),i=n(21622),l=n(61666),c=n(15527);function u(){let e=(0,c.rZ)(),t=(0,a.R7)(),n=(0,i.X)(e.breakpoints).reduce((t,n)=>{let r=e.breakpoints[n].includes("px"),o=function(e){var t;let n="string"==typeof e&&e.includes("var(--mantine-scale)")?null===(t=e.match(/^calc\((.*?)\)$/))||void 0===t?void 0:t[1].split("*")[0].trim():e;return"number"==typeof n?n:"string"==typeof n?n.includes("calc")||n.includes("var")?n:n.includes("px")?Number(n.replace("px","")):n.includes("rem")?16*Number(n.replace("rem","")):n.includes("em")?16*Number(n.replace("em","")):Number(n):NaN}(e.breakpoints[n]),a=r?"".concat(o-.1,"px"):(0,l.em)(o-.1),i=r?"".concat(o,"px"):(0,l.em)(o);return"".concat(t,"@media (max-width: ").concat(a,") {.mantine-visible-from-").concat(n," {display: none !important;}}@media (min-width: ").concat(i,") {.mantine-hidden-from-").concat(n," {display: none !important;}}")},"");return r.createElement("style",{"data-mantine-styles":"classes",nonce:null==t?void 0:t(),dangerouslySetInnerHTML:{__html:n}})}function s(e){return Object.entries(e).map(e=>{let[t,n]=e;return"".concat(t,": ").concat(n,";")}).join("")}function f(e,t){return(Array.isArray(e)?e:[e]).reduce((e,t)=>"".concat(t,"{").concat(e,"}"),t)}var d=n(92659),m=n(5955),h=n(35465),p=n(40160);function g(e,t,n){(0,i.X)(t).forEach(r=>Object.assign(e,{["--mantine-".concat(n,"-").concat(r)]:t[r]}))}let y=e=>{let t=(0,m.j)(e,"dark"),n=(0,m.j)(e,"light"),r=e.defaultRadius in e.radius?e.radius[e.defaultRadius]:(0,l.h)(e.defaultRadius),o={variables:{"--mantine-scale":e.scale.toString(),"--mantine-cursor-type":e.cursorType,"--mantine-webkit-font-smoothing":e.fontSmoothing?"antialiased":"unset","--mantine-color-scheme":"light dark","--mantine-moz-font-smoothing":e.fontSmoothing?"grayscale":"unset","--mantine-color-white":e.white,"--mantine-color-black":e.black,"--mantine-line-height":e.lineHeights.md,"--mantine-font-family":e.fontFamily,"--mantine-font-family-monospace":e.fontFamilyMonospace,"--mantine-font-family-headings":e.headings.fontFamily,"--mantine-heading-font-weight":e.headings.fontWeight,"--mantine-heading-text-wrap":e.headings.textWrap,"--mantine-radius-default":r,"--mantine-primary-color-filled":"var(--mantine-color-".concat(e.primaryColor,"-filled)"),"--mantine-primary-color-filled-hover":"var(--mantine-color-".concat(e.primaryColor,"-filled-hover)"),"--mantine-primary-color-light":"var(--mantine-color-".concat(e.primaryColor,"-light)"),"--mantine-primary-color-light-hover":"var(--mantine-color-".concat(e.primaryColor,"-light-hover)"),"--mantine-primary-color-light-color":"var(--mantine-color-".concat(e.primaryColor,"-light-color)")},light:{"--mantine-primary-color-contrast":(0,p.a)(e,"light"),"--mantine-color-bright":"var(--mantine-color-black)","--mantine-color-text":e.black,"--mantine-color-body":e.white,"--mantine-color-error":"var(--mantine-color-red-6)","--mantine-color-placeholder":"var(--mantine-color-gray-5)","--mantine-color-anchor":"var(--mantine-color-".concat(e.primaryColor,"-").concat(n,")"),"--mantine-color-default":"var(--mantine-color-white)","--mantine-color-default-hover":"var(--mantine-color-gray-0)","--mantine-color-default-color":"var(--mantine-color-black)","--mantine-color-default-border":"var(--mantine-color-gray-4)"},dark:{"--mantine-primary-color-contrast":(0,p.a)(e,"dark"),"--mantine-color-bright":"var(--mantine-color-white)","--mantine-color-text":"var(--mantine-color-dark-0)","--mantine-color-body":"var(--mantine-color-dark-7)","--mantine-color-error":"var(--mantine-color-red-8)","--mantine-color-placeholder":"var(--mantine-color-dark-3)","--mantine-color-anchor":"var(--mantine-color-".concat(e.primaryColor,"-4)"),"--mantine-color-default":"var(--mantine-color-dark-6)","--mantine-color-default-hover":"var(--mantine-color-dark-5)","--mantine-color-default-color":"var(--mantine-color-white)","--mantine-color-default-border":"var(--mantine-color-dark-4)"}};g(o.variables,e.breakpoints,"breakpoint"),g(o.variables,e.spacing,"spacing"),g(o.variables,e.fontSizes,"font-size"),g(o.variables,e.lineHeights,"line-height"),g(o.variables,e.shadows,"shadow"),g(o.variables,e.radius,"radius"),e.colors[e.primaryColor].forEach((t,n)=>{o.variables["--mantine-primary-color-".concat(n)]="var(--mantine-color-".concat(e.primaryColor,"-").concat(n,")")}),(0,i.X)(e.colors).forEach(r=>{e.colors[r].forEach((e,t)=>{o.variables["--mantine-color-".concat(r,"-").concat(t)]=e});let a="var(--mantine-color-".concat(r,"-").concat(9===n?8:n+1,")"),i="var(--mantine-color-".concat(r,"-").concat(9===t?8:t+1,")");o.light["--mantine-color-dimmed"]="var(--mantine-color-gray-6)",o.light["--mantine-color-".concat(r,"-text")]="var(--mantine-color-".concat(r,"-filled)"),o.light["--mantine-color-".concat(r,"-filled")]="var(--mantine-color-".concat(r,"-").concat(n,")"),o.light["--mantine-color-".concat(r,"-filled-hover")]=a,o.light["--mantine-color-".concat(r,"-light")]=(0,h.m)(e.colors[r][n],.1),o.light["--mantine-color-".concat(r,"-light-hover")]=(0,h.m)(e.colors[r][n],.12),o.light["--mantine-color-".concat(r,"-light-color")]="var(--mantine-color-".concat(r,"-").concat(n,")"),o.light["--mantine-color-".concat(r,"-outline")]="var(--mantine-color-".concat(r,"-").concat(n,")"),o.light["--mantine-color-".concat(r,"-outline-hover")]=(0,h.m)(e.colors[r][n],.05),o.dark["--mantine-color-dimmed"]="var(--mantine-color-dark-2)",o.dark["--mantine-color-".concat(r,"-text")]="var(--mantine-color-".concat(r,"-4)"),o.dark["--mantine-color-".concat(r,"-filled")]="var(--mantine-color-".concat(r,"-").concat(t,")"),o.dark["--mantine-color-".concat(r,"-filled-hover")]=i,o.dark["--mantine-color-".concat(r,"-light")]=(0,h.m)(e.colors[r][Math.max(0,t-2)],.15),o.dark["--mantine-color-".concat(r,"-light-hover")]=(0,h.m)(e.colors[r][Math.max(0,t-2)],.2),o.dark["--mantine-color-".concat(r,"-light-color")]="var(--mantine-color-".concat(r,"-").concat(Math.max(t-5,0),")"),o.dark["--mantine-color-".concat(r,"-outline")]="var(--mantine-color-".concat(r,"-").concat(Math.max(t-4,0),")"),o.dark["--mantine-color-".concat(r,"-outline-hover")]=(0,h.m)(e.colors[r][Math.max(t-4,0)],.05)});let a=e.headings.sizes;return(0,i.X)(a).forEach(t=>{o.variables["--mantine-".concat(t,"-font-size")]=a[t].fontSize,o.variables["--mantine-".concat(t,"-line-height")]=a[t].lineHeight,o.variables["--mantine-".concat(t,"-font-weight")]=a[t].fontWeight||e.headings.fontWeight}),o},v=y(n(95300).t);function b(e){let{cssVariablesSelector:t,deduplicateCssVariables:n}=e,o=(0,c.rZ)(),l=(0,a.R7)(),u=function(e){let{theme:t,generator:n}=e,r=y(t),o=null==n?void 0:n(t);return o?(0,d.R)(r,o):r}({theme:o,generator:(0,a.Sm)()}),m=":root"===t&&n,h=function(e,t){let n=s(e.variables),r=n?f(t,n):"",o=s(e.dark),a=o?f("".concat(t,'[data-mantine-color-scheme="dark"]'),o):"",i=s(e.light),l=i?f("".concat(t,'[data-mantine-color-scheme="light"]'),i):"";return"".concat(r).concat(a).concat(l)}(m?function(e){let t={variables:{},light:{},dark:{}};return(0,i.X)(e.variables).forEach(n=>{v.variables[n]!==e.variables[n]&&(t.variables[n]=e.variables[n])}),(0,i.X)(e.light).forEach(n=>{v.light[n]!==e.light[n]&&(t.light[n]=e.light[n])}),(0,i.X)(e.dark).forEach(n=>{v.dark[n]!==e.dark[n]&&(t.dark[n]=e.dark[n])}),t}(u):u,t);return h?r.createElement("style",{"data-mantine-styles":!0,nonce:null==l?void 0:l(),dangerouslySetInnerHTML:{__html:"".concat(h).concat(m?"":"\n  ".concat(t,'[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }\n  ').concat(t,'[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }\n'))}}):null}b.displayName="@mantine/CssVariables";var w=n(3794);function k(e,t){var n;let r="auto"!==e?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";null===(n=t())||void 0===n||n.setAttribute("data-mantine-color-scheme",r)}function _(e){let{theme:t,children:n,getStyleNonce:i,withStaticClasses:l=!0,withGlobalClasses:s=!0,deduplicateCssVariables:f=!0,withCssVariables:d=!0,cssVariablesSelector:m=":root",classNamesPrefix:h="mantine",colorSchemeManager:p=function(){let e,{key:t="mantine-color-scheme-value"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{get:e=>{if("undefined"==typeof window)return e;try{let n=window.localStorage.getItem(t);return o(n)?n:e}catch(t){return e}},set:e=>{try{window.localStorage.setItem(t,e)}catch(e){console.warn("[@mantine/core] Local storage color scheme manager was unable to save color scheme.",e)}},subscribe:n=>{e=e=>{e.storageArea===window.localStorage&&e.key===t&&o(e.newValue)&&n(e.newValue)},window.addEventListener("storage",e)},unsubscribe:()=>{window.removeEventListener("storage",e)},clear:()=>{window.localStorage.removeItem(t)}}}(),defaultColorScheme:g="light",getRootElement:y=()=>document.documentElement,cssVariablesResolver:v,forceColorScheme:_}=e,{colorScheme:P,setColorScheme:O,clearColorScheme:x}=function(e){let{manager:t,defaultColorScheme:n,getRootElement:o,forceColorScheme:a}=e,i=(0,r.useRef)(),[l,c]=(0,r.useState)(()=>t.get(n)),u=a||l,s=(0,r.useCallback)(e=>{a||(k(e,o),c(e),t.set(e))},[t.set,u,a]),f=(0,r.useCallback)(()=>{c(n),k(n,o),t.clear()},[t.clear,n]);return(0,r.useEffect)(()=>(t.subscribe(s),t.unsubscribe),[t.subscribe,t.unsubscribe]),(0,w.Y)(()=>{k(t.get(n),o)},[]),(0,r.useEffect)(()=>{var e;if(a)return k(a,o),()=>{};void 0===a&&k(l,o),i.current=window.matchMedia("(prefers-color-scheme: dark)");let t=e=>{"auto"===l&&k(e.matches?"dark":"light",o)};return null===(e=i.current)||void 0===e||e.addEventListener("change",t),()=>{var e;return null===(e=i.current)||void 0===e?void 0:e.removeEventListener("change",t)}},[l,a]),{colorScheme:u,setColorScheme:s,clearColorScheme:f}}({defaultColorScheme:g,forceColorScheme:_,manager:p,getRootElement:y});return!function(e){let{respectReducedMotion:t,getRootElement:n}=e;(0,w.Y)(()=>{if(t){var e;null===(e=n())||void 0===e||e.setAttribute("data-respect-reduced-motion","true")}},[t])}({respectReducedMotion:(null==t?void 0:t.respectReducedMotion)||!1,getRootElement:y}),r.createElement(a.XD.Provider,{value:{colorScheme:P,setColorScheme:O,clearColorScheme:x,getRootElement:y,classNamesPrefix:h,getStyleNonce:i,cssVariablesResolver:v,cssVariablesSelector:m,withStaticClasses:l}},r.createElement(c.M2,{theme:t},d&&r.createElement(b,{cssVariablesSelector:m,deduplicateCssVariables:f}),s&&r.createElement(u,null),n))}!function(){let e=console.error;console.error=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];n.length>1&&"string"==typeof n[0]&&n[0].toLowerCase().includes("extra attributes from the server")&&"string"==typeof n[1]&&n[1].toLowerCase().includes("data-mantine-color-scheme")||e(...n)}}(),_.displayName="@mantine/core/MantineProvider"},40160:function(e,t,n){"use strict";n.d(t,{R:function(){return a},a:function(){return i}});var r=n(5955),o=n(70970);function a(e){let{color:t,theme:n,autoContrast:r}=e;return("boolean"==typeof r?r:n.autoContrast)&&(0,o.E)({color:t||n.primaryColor,theme:n}).isLight?"var(--mantine-color-black)":"var(--mantine-color-white)"}function i(e,t){return a({color:e.colors[e.primaryColor][(0,r.j)(e,t)],theme:e,autoContrast:null})}},85212:function(e,t,n){"use strict";function r(e){return e}n.d(t,{j:function(){return r}})},5630:function(e,t,n){"use strict";n.d(t,{q:function(){return o}});var r=n(59303);function o(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,{onOpen:n,onClose:o}=t||{},[a,i]=(0,r.useState)(e),l=(0,r.useCallback)(()=>{i(e=>e||(null==n||n(),!0))},[n]),c=(0,r.useCallback)(()=>{i(e=>e?(null==o||o(),!1):e)},[o]),u=(0,r.useCallback)(()=>{a?c():l()},[c,l,a]);return[a,{open:l,close:c,toggle:u}]}}}]);