"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[331],{35487:function(e,t,n){n.d(t,{KK:function(){return A},NI:function(){return U},Qu:function(){return C},XI:function(){return x},YF:function(){return D},bQ:function(){return _},e0:function(){return L},qs:function(){return Y},tj:function(){return M}});var r,u=n(41123),o=n(48367),l=n(38466),i=n(58779);n(50813);let c=(r||(r=n.t(u,2)))["useInsertionEffect".toString()]||(e=>e());function s(e){let t=u.useRef(()=>{});return c(()=>{t.current=e}),u.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)},[])}var a="undefined"!=typeof document?u.useLayoutEffect:u.useEffect;let f=!1,d=0,v=()=>"floating-ui-"+d++,m=(r||(r=n.t(u,2)))["useId".toString()]||function(){let[e,t]=u.useState(()=>f?v():void 0);return a(()=>{null==e&&t(v())},[]),u.useEffect(()=>{f||(f=!0)},[]),e},p=u.createContext(null),E=u.createContext(null),y=()=>{var e;return(null==(e=u.useContext(p))?void 0:e.id)||null},b=()=>u.useContext(E);function g(e){return"data-floating-ui-"+e}function h(e){let t=(0,u.useRef)(e);return a(()=>{t.current=e}),t}let k=g("safe-polygon");function w(e,t,n){return n&&!(0,o.r)(n)?0:"number"==typeof e?e:null==e?void 0:e[t]}function x(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,dataRef:i,events:c,elements:{domReference:s,floating:f},refs:d}=e,{enabled:v=!0,delay:m=0,handleClose:p=null,mouseOnly:E=!1,restMs:g=0,move:x=!0}=t,R=b(),M=y(),L=h(p),C=h(m),K=u.useRef(),P=u.useRef(),T=u.useRef(),I=u.useRef(),_=u.useRef(!0),D=u.useRef(!1),A=u.useRef(()=>{}),W=u.useCallback(()=>{var e;let t=null==(e=i.current.openEvent)?void 0:e.type;return(null==t?void 0:t.includes("mouse"))&&"mousedown"!==t},[i]);u.useEffect(()=>{if(v)return c.on("openchange",e),()=>{c.off("openchange",e)};function e(e){let{open:t}=e;t||(clearTimeout(P.current),clearTimeout(I.current),_.current=!0)}},[v,c]),u.useEffect(()=>{if(!v||!L.current||!n)return;function e(e){W()&&r(!1,e,"hover")}let t=(0,o.Me)(f).documentElement;return t.addEventListener("mouseleave",e),()=>{t.removeEventListener("mouseleave",e)}},[f,n,r,v,L,W]);let B=u.useCallback(function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n="hover");let u=w(C.current,"close",K.current);u&&!T.current?(clearTimeout(P.current),P.current=setTimeout(()=>r(!1,e,n),u)):t&&(clearTimeout(P.current),r(!1,e,n))},[C,r]),S=u.useCallback(()=>{A.current(),T.current=void 0},[]),U=u.useCallback(()=>{if(D.current){let e=(0,o.Me)(d.floating.current).body;e.style.pointerEvents="",e.removeAttribute(k),D.current=!1}},[d]);return u.useEffect(()=>{if(v&&(0,l.kK)(s))return n&&s.addEventListener("mouseleave",a),null==f||f.addEventListener("mouseleave",a),x&&s.addEventListener("mousemove",u,{once:!0}),s.addEventListener("mouseenter",u),s.addEventListener("mouseleave",c),()=>{n&&s.removeEventListener("mouseleave",a),null==f||f.removeEventListener("mouseleave",a),x&&s.removeEventListener("mousemove",u),s.removeEventListener("mouseenter",u),s.removeEventListener("mouseleave",c)};function t(){return!!i.current.openEvent&&["click","mousedown"].includes(i.current.openEvent.type)}function u(e){if(clearTimeout(P.current),_.current=!1,E&&!(0,o.r)(K.current)||g>0&&0===w(C.current,"open"))return;let t=w(C.current,"open",K.current);t?P.current=setTimeout(()=>{r(!0,e,"hover")},t):r(!0,e,"hover")}function c(r){if(t())return;A.current();let u=(0,o.Me)(f);if(clearTimeout(I.current),L.current){n||clearTimeout(P.current),T.current=L.current({...e,tree:R,x:r.clientX,y:r.clientY,onClose(){U(),S(),B(r,!0,"safe-polygon")}});let t=T.current;u.addEventListener("mousemove",t),A.current=()=>{u.removeEventListener("mousemove",t)};return}"touch"===K.current&&(0,o.r3)(f,r.relatedTarget)||B(r)}function a(n){t()||null==L.current||L.current({...e,tree:R,x:n.clientX,y:n.clientY,onClose(){U(),S(),B(n)}})(n)}},[s,f,v,e,E,g,x,B,S,U,r,n,R,C,L,i]),a(()=>{var e,t;if(v&&n&&null!=(e=L.current)&&e.__options.blockPointerEvents&&W()){let e=(0,o.Me)(f).body;if(e.setAttribute(k,""),e.style.pointerEvents="none",D.current=!0,(0,l.kK)(s)&&f){let e=null==R||null==(t=R.nodesRef.current.find(e=>e.id===M))||null==(t=t.context)?void 0:t.elements.floating;return e&&(e.style.pointerEvents=""),s.style.pointerEvents="auto",f.style.pointerEvents="auto",()=>{s.style.pointerEvents="",f.style.pointerEvents=""}}}},[v,n,M,f,s,R,L,W]),a(()=>{n||(K.current=void 0,S(),U())},[n,S,U]),u.useEffect(()=>()=>{S(),clearTimeout(P.current),clearTimeout(I.current),U()},[v,s,S,U]),u.useMemo(()=>{if(!v)return{};function e(e){K.current=e.pointerType}return{reference:{onPointerDown:e,onPointerEnter:e,onMouseMove(e){n||0===g||(clearTimeout(I.current),I.current=setTimeout(()=>{_.current||r(!0,e.nativeEvent,"hover")},g))}},floating:{onMouseEnter(){clearTimeout(P.current)},onMouseLeave(e){B(e.nativeEvent,!1)}}}},[v,g,n,r,B])}let R=u.createContext({delay:0,initialDelay:0,timeoutMs:0,currentId:null,setCurrentId:()=>{},setState:()=>{},isInstantPhase:!1}),M=()=>u.useContext(R),L=e=>{let{children:t,delay:n,timeoutMs:r=0}=e,[o,l]=u.useReducer((e,t)=>({...e,...t}),{delay:n,timeoutMs:r,initialDelay:n,currentId:null,isInstantPhase:!1}),i=u.useRef(null),c=u.useCallback(e=>{l({currentId:e})},[]);return a(()=>{o.currentId?null===i.current?i.current=o.currentId:l({isInstantPhase:!0}):(l({isInstantPhase:!1}),i.current=null)},[o.currentId]),u.createElement(R.Provider,{value:u.useMemo(()=>({...o,setState:l,setCurrentId:c}),[o,c])},t)},C=(e,t)=>{let{open:n,onOpenChange:r}=e,{id:u}=t,{currentId:o,setCurrentId:l,initialDelay:i,setState:c,timeoutMs:s}=M();a(()=>{o&&(c({delay:{open:1,close:w(i,"close")}}),o!==u&&r(!1))},[u,r,c,o,i]),a(()=>{function e(){r(!1),c({delay:i,currentId:null})}if(!n&&o===u){if(s){let t=window.setTimeout(e,s);return()=>{clearTimeout(t)}}e()}},[n,c,o,u,r,i,s]),a(()=>{n&&l(u)},[n,l,u])};function K(e,t){let n=e.filter(e=>{var n;return e.parentId===t&&(null==(n=e.context)?void 0:n.open)}),r=n;for(;r.length;)r=e.filter(e=>{var t;return null==(t=r)?void 0:t.some(t=>{var n;return e.parentId===t.id&&(null==(n=e.context)?void 0:n.open)})}),n=n.concat(r);return n}let P={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},T={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},I=e=>{var t,n;return{escapeKey:"boolean"==typeof e?e:null!=(t=null==e?void 0:e.escapeKey)&&t,outsidePress:"boolean"==typeof e?e:null==(n=null==e?void 0:e.outsidePress)||n}};function _(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,nodeId:i,elements:{reference:c,domReference:a,floating:f},dataRef:d}=e,{enabled:v=!0,escapeKey:m=!0,outsidePress:p=!0,outsidePressEvent:E="pointerdown",referencePress:y=!1,referencePressEvent:h="pointerdown",ancestorScroll:k=!1,bubbles:w,capture:x}=t,R=b(),M=s("function"==typeof p?p:()=>!1),L="function"==typeof p?M:p,C=u.useRef(!1),_=u.useRef(!1),{escapeKey:D,outsidePress:A}=I(w),{escapeKey:W,outsidePress:B}=I(x),S=s(e=>{if(!n||!v||!m||"Escape"!==e.key)return;let t=R?K(R.nodesRef.current,i):[];if(!D&&(e.stopPropagation(),t.length>0)){let e=!0;if(t.forEach(t=>{var n;if(null!=(n=t.context)&&n.open&&!t.context.dataRef.current.__escapeKeyBubbles){e=!1;return}}),!e)return}r(!1,(0,o.MM)(e)?e.nativeEvent:e,"escape-key")}),U=s(e=>{var t;let n=()=>{var t;S(e),null==(t=(0,o.U9)(e))||t.removeEventListener("keydown",n)};null==(t=(0,o.U9)(e))||t.addEventListener("keydown",n)}),X=s(e=>{let t=C.current;C.current=!1;let n=_.current;if(_.current=!1,"click"===E&&n||t||"function"==typeof L&&!L(e))return;let u=(0,o.U9)(e),c="["+g("inert")+"]",s=(0,o.Me)(f).querySelectorAll(c),d=(0,l.kK)(u)?u:null;for(;d&&!(0,l.Py)(d);){let e=(0,l.Ow)(d);if((0,l.Py)(e)||!(0,l.kK)(e))break;d=e}if(s.length&&(0,l.kK)(u)&&!(0,o.ex)(u)&&!(0,o.r3)(u,f)&&Array.from(s).every(e=>!(0,o.r3)(d,e)))return;if((0,l.Re)(u)&&f){let t=u.clientWidth>0&&u.scrollWidth>u.clientWidth,n=u.clientHeight>0&&u.scrollHeight>u.clientHeight,r=n&&e.offsetX>u.clientWidth;if(n&&"rtl"===(0,l.Dx)(u).direction&&(r=e.offsetX<=u.offsetWidth-u.clientWidth),r||t&&e.offsetY>u.clientHeight)return}let v=R&&K(R.nodesRef.current,i).some(t=>{var n;return(0,o.Pe)(e,null==(n=t.context)?void 0:n.elements.floating)});if((0,o.Pe)(e,f)||(0,o.Pe)(e,a)||v)return;let m=R?K(R.nodesRef.current,i):[];if(m.length>0){let e=!0;if(m.forEach(t=>{var n;if(null!=(n=t.context)&&n.open&&!t.context.dataRef.current.__outsidePressBubbles){e=!1;return}}),!e)return}r(!1,e,"outside-press")}),Y=s(e=>{var t;let n=()=>{var t;X(e),null==(t=(0,o.U9)(e))||t.removeEventListener(E,n)};null==(t=(0,o.U9)(e))||t.addEventListener(E,n)});return u.useEffect(()=>{if(!n||!v)return;function e(e){r(!1,e,"ancestor-scroll")}d.current.__escapeKeyBubbles=D,d.current.__outsidePressBubbles=A;let t=(0,o.Me)(f);m&&t.addEventListener("keydown",W?U:S,W),L&&t.addEventListener(E,B?Y:X,B);let u=[];return k&&((0,l.kK)(a)&&(u=(0,l.Kx)(a)),(0,l.kK)(f)&&(u=u.concat((0,l.Kx)(f))),!(0,l.kK)(c)&&c&&c.contextElement&&(u=u.concat((0,l.Kx)(c.contextElement)))),(u=u.filter(e=>{var n;return e!==(null==(n=t.defaultView)?void 0:n.visualViewport)})).forEach(t=>{t.addEventListener("scroll",e,{passive:!0})}),()=>{m&&t.removeEventListener("keydown",W?U:S,W),L&&t.removeEventListener(E,B?Y:X,B),u.forEach(t=>{t.removeEventListener("scroll",e)})}},[d,f,a,c,m,L,E,n,r,k,v,D,A,S,W,U,X,B,Y]),u.useEffect(()=>{C.current=!1},[L,E]),u.useMemo(()=>v?{reference:{onKeyDown:S,[P[h]]:e=>{y&&r(!1,e.nativeEvent,"reference-press")}},floating:{onKeyDown:S,onMouseDown(){_.current=!0},onMouseUp(){_.current=!0},[T[E]]:()=>{C.current=!0}}}:{},[v,y,E,h,r,S])}function D(e){var t;void 0===e&&(e={});let{open:n=!1,onOpenChange:r,nodeId:o}=e,[c,f]=u.useState(null),d=(null==(t=e.elements)?void 0:t.reference)||c,v=(0,i.YF)(e),p=b(),E=null!=y(),g=s((e,t,n)=>{e&&(k.current.openEvent=t),w.emit("openchange",{open:e,event:t,reason:n,nested:E}),null==r||r(e,t,n)}),h=u.useRef(null),k=u.useRef({}),w=u.useState(()=>(function(){let e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach(e=>e(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter(e=>e!==n))||[])}}})())[0],x=m(),R=u.useCallback(e=>{let t=(0,l.kK)(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;v.refs.setReference(t)},[v.refs]),M=u.useCallback(e=>{((0,l.kK)(e)||null===e)&&(h.current=e,f(e)),((0,l.kK)(v.refs.reference.current)||null===v.refs.reference.current||null!==e&&!(0,l.kK)(e))&&v.refs.setReference(e)},[v.refs]),L=u.useMemo(()=>({...v.refs,setReference:M,setPositionReference:R,domReference:h}),[v.refs,M,R]),C=u.useMemo(()=>({...v.elements,domReference:d}),[v.elements,d]),K=u.useMemo(()=>({...v,refs:L,elements:C,dataRef:k,nodeId:o,floatingId:x,events:w,open:n,onOpenChange:g}),[v,o,x,w,n,g,L,C]);return a(()=>{let e=null==p?void 0:p.nodesRef.current.find(e=>e.id===o);e&&(e.context=K)}),u.useMemo(()=>({...v,context:K,refs:L,elements:C}),[v,L,C,K])}function A(e,t){void 0===t&&(t={});let{open:n,onOpenChange:r,events:i,refs:c,elements:{domReference:s}}=e,{enabled:a=!0,visibleOnly:f=!0}=t,d=u.useRef(!1),v=u.useRef(),m=u.useRef(!0);return u.useEffect(()=>{if(!a)return;let e=(0,l.Jj)(s);function t(){!n&&(0,l.Re)(s)&&s===(0,o.AW)((0,o.Me)(s))&&(d.current=!0)}function r(){m.current=!0}return e.addEventListener("blur",t),e.addEventListener("keydown",r,!0),()=>{e.removeEventListener("blur",t),e.removeEventListener("keydown",r,!0)}},[s,n,a]),u.useEffect(()=>{if(a)return i.on("openchange",e),()=>{i.off("openchange",e)};function e(e){let{reason:t}=e;("reference-press"===t||"escape-key"===t)&&(d.current=!0)}},[i,a]),u.useEffect(()=>()=>{clearTimeout(v.current)},[]),u.useMemo(()=>a?{reference:{onPointerDown(e){(0,o.cr)(e.nativeEvent)||(m.current=!1)},onMouseLeave(){d.current=!1},onFocus(e){if(d.current)return;let t=(0,o.U9)(e.nativeEvent);if(f&&(0,l.kK)(t))try{if((0,o.G6)()&&(0,o.V5)())throw Error();if(!t.matches(":focus-visible"))return}catch(e){if(!m.current&&!(0,o.j7)(t))return}r(!0,e.nativeEvent,"focus")},onBlur(e){d.current=!1;let t=e.relatedTarget,n=(0,l.kK)(t)&&t.hasAttribute(g("focus-guard"))&&"outside"===t.getAttribute("data-type");v.current=window.setTimeout(()=>{let u=(0,o.AW)(s?s.ownerDocument:document);if(t||u!==s){if((0,o.r3)(c.floating.current,u)||(0,o.r3)(s,u)||n)return;r(!1,e.nativeEvent,"focus")}})}}}:{},[a,f,s,c,r])}let W="active",B="selected";function S(e,t,n){let r=new Map,u="item"===n,o=e;if(u&&e){let{[W]:t,[B]:n,...r}=e;o=r}return{..."floating"===n&&{tabIndex:-1},...o,...t.map(t=>{let r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r}).concat(e).reduce((e,t)=>(t&&Object.entries(t).forEach(t=>{let[n,o]=t;if(!(u&&[W,B].includes(n))){if(0===n.indexOf("on")){if(r.has(n)||r.set(n,[]),"function"==typeof o){var l;null==(l=r.get(n))||l.push(o),e[n]=function(){for(var e,t=arguments.length,u=Array(t),o=0;o<t;o++)u[o]=arguments[o];return null==(e=r.get(n))?void 0:e.map(e=>e(...u)).find(e=>void 0!==e)}}}else e[n]=o}}),e),{})}}function U(e){void 0===e&&(e=[]);let t=e,n=u.useCallback(t=>S(t,e,"reference"),t),r=u.useCallback(t=>S(t,e,"floating"),t),o=u.useCallback(t=>S(t,e,"item"),e.map(e=>null==e?void 0:e.item));return u.useMemo(()=>({getReferenceProps:n,getFloatingProps:r,getItemProps:o}),[n,r,o])}let X=new Map([["select","listbox"],["combobox","listbox"],["label",!1]]);function Y(e,t){var n;void 0===t&&(t={});let{open:r,floatingId:o}=e,{enabled:l=!0,role:i="dialog"}=t,c=null!=(n=X.get(i))?n:i,s=m(),a=null!=y();return u.useMemo(()=>{if(!l)return{};let e={id:o,...c&&{role:c}};return"tooltip"===c||"label"===i?{reference:{["aria-"+("label"===i?"labelledby":"describedby")]:r?o:void 0},floating:e}:{reference:{"aria-expanded":r?"true":"false","aria-haspopup":"alertdialog"===c?"dialog":c,"aria-controls":r?o:void 0,..."listbox"===c&&{role:"combobox"},..."menu"===c&&{id:s},..."menu"===c&&a&&{role:"menuitem"},..."select"===i&&{"aria-autocomplete":"none"},..."combobox"===i&&{"aria-autocomplete":"list"}},floating:{...e,..."menu"===c&&{"aria-labelledby":s}},item(e){let{active:t,selected:n}=e,r={role:"option",...t&&{id:o+"-option"}};switch(i){case"select":return{...r,"aria-selected":t&&n};case"combobox":return{...r,...t&&{"aria-selected":!0}}}return{}}}},[l,i,c,r,o,s,a])}}}]);