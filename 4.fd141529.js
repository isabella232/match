(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{134:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0);function u(e){return void 0===e&&(e="id"),(e?e+"-":"")+Math.random().toString(32).substr(2,6)}var i=Object(r.createContext)(u)},137:function(e,t,n){"use strict";function r(e,t){return t?e.find((function(e){return!e.disabled&&e.id!==t})):e.find((function(e){return!e.disabled}))}function u(e,t){var n;return t||null===t?t:e.currentId||null===e.currentId?e.currentId:null===(n=r(e.items||[]))||void 0===n?void 0:n.id}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return u}))},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return c}));var r=n(130);function u(e){for(var t,n=[[]],u=function(){var e=t.value,r=n.find((function(t){return!t[0]||t[0].groupId===e.groupId}));r?r.push(e):n.push([e])},i=Object(r.c)(e);!(t=i()).done;)u();return n}function i(e){for(var t,n=[],u=Object(r.c)(e);!(t=u()).done;){var i=t.value;n.push.apply(n,i)}return n}function c(e){return e.slice().reverse()}},155:function(e,t,n){"use strict";function r(e,t){if(t)return null==e?void 0:e.find((function(e){return e.id===t&&!e.disabled}))}n.d(t,"a",(function(){return r}))},156:function(e,t,n){"use strict";function r(e){e.userFocus=!0,e.focus(),e.userFocus=!1}function u(e){return!!e.userFocus}function i(e,t){e.userFocus=t}n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r}))},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return u}));var r=["baseId","unstable_idCountRef","setBaseId","unstable_virtual","rtl","orientation","items","groups","currentId","loop","wrap","shift","unstable_moves","unstable_hasActiveWidget","unstable_includesBaseElement","registerItem","unregisterItem","registerGroup","unregisterGroup","move","next","previous","up","down","first","last","sort","unstable_setVirtual","setRTL","setOrientation","setCurrentId","setLoop","setWrap","setShift","reset","unstable_setIncludesBaseElement","unstable_setHasActiveWidget"],u=r},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0);function u(e){return Object(r.useState)(e)[0]}},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),u=n(160),i=n(134);function c(e){void 0===e&&(e={});var t=Object(u.a)(e).baseId,n=Object(r.useContext)(i.a),c=Object(r.useRef)(0),a=Object(r.useState)((function(){return t||n()}));return{baseId:a[0],setBaseId:a[1],unstable_idCountRef:c}}},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(162),u=n(131),i=r.a&&"msCrypto"in window;function c(e){return i?Object(u.a)(e.currentTarget):e.relatedTarget}},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(131);function u(e){var t=Object(r.a)(e);if(!t)return!1;if(t===e)return!0;var n=t.getAttribute("aria-activedescendant");return!!n&&n===e.id}function i(e,t){var n=void 0===t?{}:t,r=n.preventScroll,i=n.isActive,c=void 0===i?u:i;return c(e)?-1:(e.focus({preventScroll:r}),c(e)?-1:requestAnimationFrame((function(){e.focus({preventScroll:r})})))}},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i}));var r=["baseId","unstable_idCountRef","unstable_virtual","rtl","orientation","items","groups","currentId","loop","wrap","shift","unstable_moves","unstable_hasActiveWidget","unstable_includesBaseElement","selectedId","panels","manual","setBaseId","registerItem","unregisterItem","registerGroup","unregisterGroup","move","next","previous","up","down","first","last","sort","unstable_setVirtual","setRTL","setOrientation","setCurrentId","setLoop","setWrap","setShift","reset","unstable_setIncludesBaseElement","unstable_setHasActiveWidget","select","setSelectedId","registerPanel","unregisterPanel"],u=r,i=[].concat(u,["tabId"])},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(130),u=n(136),i=n(135),c=n(0),a=n(134),o=[].concat(["baseId","unstable_idCountRef","setBaseId"],["id"]),l=Object(i.a)({keys:o,useOptions:function(e,t){var n=Object(c.useContext)(a.a),u=Object(c.useState)((function(){return e.unstable_idCountRef?(e.unstable_idCountRef.current+=1,"-"+e.unstable_idCountRef.current):e.baseId?"-"+n(""):""}))[0],i=Object(c.useMemo)((function(){return e.baseId||n()}),[e.baseId,n]),o=t.id||e.id||""+i+u;return Object(r.b)(Object(r.b)({},e),{},{id:o})},useProps:function(e,t){return Object(r.b)({id:e.id},t)}});Object(u.a)({as:"div",useHook:l})},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(128);function u(e,t,n){if("function"==typeof Event)return new Event(t,n);var u=Object(r.a)(e).createEvent("Event");return u.initEvent(t,null==n?void 0:n.bubbles,null==n?void 0:n.cancelable),u}},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r=n(130),u=n(136),i=n(135),c=n(0),a=(n(142),n(143)),o=n(144),l=n(145),s=n(149),b=n(151),d=n(179),f=n(128),v=n(137),O=n(157),j=n(156);function p(e){try{var t=e instanceof HTMLInputElement&&null!==e.selectionStart,n="TEXTAREA"===e.tagName,r="true"===e.contentEditable;return t||n||r||!1}catch(u){return!1}}var m=n(185),I=n(187),g=n(189);function y(e,t){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){var n,r=Object.getPrototypeOf(e),u=null===(n=Object.getOwnPropertyDescriptor(r,"value"))||void 0===n?void 0:n.set;u&&(u.call(e,t),function(e,t,n){e.dispatchEvent(Object(g.a)(e,t,n))}(e,"input",{bubbles:!0}))}}function _(e){return e.querySelector("[data-composite-item-widget]")}var C=Object(i.a)({name:"CompositeItem",compose:[d.a,I.a],keys:O.b,propsAreEqual:function(e,t){if(!t.id||e.id!==t.id)return d.a.unstable_propsAreEqual(e,t);var n=e.currentId,u=e.unstable_moves,i=Object(r.a)(e,["currentId","unstable_moves"]),c=t.currentId,a=t.unstable_moves,o=Object(r.a)(t,["currentId","unstable_moves"]);if(c!==n){if(t.id===c||t.id===n)return!1}else if(u!==a)return!1;return d.a.unstable_propsAreEqual(i,o)},useOptions:function(e){return Object(r.b)(Object(r.b)({},e),{},{id:e.id,currentId:Object(v.b)(e),unstable_clickOnSpace:!e.unstable_hasActiveWidget&&e.unstable_clickOnSpace})},useProps:function(e,t){var n,u=t.ref,i=t.tabIndex,d=void 0===i?0:i,v=t.onMouseDown,O=t.onFocus,I=t.onBlurCapture,g=t.onKeyDown,C=t.onClick,h=Object(r.a)(t,["ref","tabIndex","onMouseDown","onFocus","onBlurCapture","onKeyDown","onClick"]),E=Object(c.useRef)(null),w=e.id,k=e.disabled&&!e.focusable,T=e.currentId===w,P=Object(a.a)(T),R=Object(c.useRef)(!1),S=function(e){return Object(c.useMemo)((function(){var t;return null===(t=e.items)||void 0===t?void 0:t.find((function(t){return e.id&&t.id===e.id}))}),[e.items,e.id])}(e),B=Object(a.a)(v),D=Object(a.a)(O),L=Object(a.a)(I),A=Object(a.a)(g),W=Object(a.a)(C),K=!e.unstable_virtual&&!e.unstable_hasActiveWidget&&T||!(null!==(n=e.items)&&void 0!==n&&n.length);Object(c.useEffect)((function(){var t;if(w)return null===(t=e.registerItem)||void 0===t||t.call(e,{id:w,ref:E,disabled:!!k}),function(){var t;null===(t=e.unregisterItem)||void 0===t||t.call(e,w)}}),[w,k,e.registerItem,e.unregisterItem]),Object(c.useEffect)((function(){var t=E.current;t&&e.unstable_moves&&P.current&&Object(j.c)(t)}),[e.unstable_moves]);var x=Object(c.useCallback)((function(e){var t;null===(t=B.current)||void 0===t||t.call(B,e),Object(j.b)(e.currentTarget,!0)}),[]),F=Object(c.useCallback)((function(t){var n,u,i=Object(j.a)(t.currentTarget);if(Object(j.b)(t.currentTarget,!1),null===(n=D.current)||void 0===n||n.call(D,t),!t.defaultPrevented&&!Object(b.a)(t)&&w&&!function(e,t){if(Object(l.a)(e))return!1;for(var n,u=Object(r.c)(t);!(n=u()).done;)if(n.value.ref.current===e.target)return!0;return!1}(t,e.items)&&(null===(u=e.setCurrentId)||void 0===u||u.call(e,w),i&&e.unstable_virtual&&e.baseId&&Object(l.a)(t))){var c=t.target,a=Object(f.a)(c).getElementById(e.baseId);a&&(R.current=!0,Object(m.a)(a))}}),[w,e.items,e.setCurrentId,e.unstable_virtual,e.baseId]),H=Object(c.useCallback)((function(t){var n;null===(n=L.current)||void 0===n||n.call(L,t),t.defaultPrevented||e.unstable_virtual&&R.current&&(R.current=!1,t.preventDefault(),t.stopPropagation())}),[e.unstable_virtual]),M=Object(c.useCallback)((function(t){var n;if(Object(l.a)(t)){var r="horizontal"!==e.orientation,u="vertical"!==e.orientation,i=!(null==S||!S.groupId),c={ArrowUp:(i||r)&&e.up,ArrowRight:(i||u)&&e.next,ArrowDown:(i||r)&&e.down,ArrowLeft:(i||u)&&e.previous,Home:function(){var n,r;!i||t.ctrlKey?null===(n=e.first)||void 0===n||n.call(e):null===(r=e.previous)||void 0===r||r.call(e,!0)},End:function(){var n,r;!i||t.ctrlKey?null===(n=e.last)||void 0===n||n.call(e):null===(r=e.next)||void 0===r||r.call(e,!0)},PageUp:function(){var t,n;i?null===(t=e.up)||void 0===t||t.call(e,!0):null===(n=e.first)||void 0===n||n.call(e)},PageDown:function(){var t,n;i?null===(t=e.down)||void 0===t||t.call(e,!0):null===(n=e.last)||void 0===n||n.call(e)}}[t.key];if(c)return t.preventDefault(),void c();if(null===(n=A.current)||void 0===n||n.call(A,t),!t.defaultPrevented)if(1===t.key.length&&" "!==t.key){var a=_(t.currentTarget);a&&p(a)&&(a.focus(),y(a,""))}else if("Delete"===t.key||"Backspace"===t.key){var o=_(t.currentTarget);o&&p(o)&&(t.preventDefault(),y(o,""))}}}),[e.orientation,S,e.up,e.next,e.down,e.previous,e.first,e.last]),G=Object(c.useCallback)((function(e){var t;if(null===(t=W.current)||void 0===t||t.call(W,e),!e.defaultPrevented){var n=_(e.currentTarget);n&&!Object(s.a)(n)&&n.focus()}}),[]);return Object(r.b)({ref:Object(o.a)(E,u),id:w,tabIndex:K?d:-1,"aria-selected":!(!e.unstable_virtual||!T)||void 0,onMouseDown:x,onFocus:F,onBlurCapture:H,onKeyDown:M,onClick:G},h)}}),h=(Object(u.a)({as:"button",memo:!0,useHook:C}),n(186));var E=Object(i.a)({name:"Tab",compose:C,keys:h.a,useOptions:function(e){var t=e.focusable,n=void 0===t||t,u=Object(r.a)(e,["focusable"]);return Object(r.b)({focusable:n},u)},useProps:function(e,t){var n=t.onClick,u=t.onFocus,i=Object(r.a)(t,["onClick","onFocus"]),o=e.selectedId===e.id,l=function(e){return Object(c.useMemo)((function(){var t,n;return(null===(t=e.panels)||void 0===t||null===(n=t.find((function(t){return t.groupId===e.id})))||void 0===n?void 0:n.id)||void 0}),[e.panels,e.id])}(e),s=Object(a.a)(n),b=Object(a.a)(u),d=Object(c.useCallback)((function(t){var n,r;null===(n=s.current)||void 0===n||n.call(s,t),t.defaultPrevented||e.disabled||e.id&&(o||null===(r=e.select)||void 0===r||r.call(e,e.id))}),[e.disabled,o,e.select,e.id]),f=Object(c.useCallback)((function(t){var n,r;null===(n=b.current)||void 0===n||n.call(b,t),t.defaultPrevented||e.disabled||e.manual||e.id&&(o||null===(r=e.select)||void 0===r||r.call(e,e.id))}),[e.id,e.disabled,e.manual,o,e.select]);return Object(r.b)({role:"tab","aria-selected":o,"aria-controls":l,onClick:d,onFocus:f},i)}}),w=Object(u.a)({as:"button",memo:!0,useHook:E})},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var r=n(130),u=n(136),i=n(135),c=n(0),a=(n(142),n(195)),o=n(144),l=n(143),s=n(145),b=n(141),d=n(152),f=n(128),v=n(203),O=n(189);function j(e,t,n){return void 0===n&&(n={}),"function"==typeof FocusEvent?new FocusEvent(t,n):Object(O.a)(e,t,n)}function p(e,t){var n=j(e,"blur",t),r=e.dispatchEvent(n),u=Object(v.b)(Object(v.b)({},t),{},{bubbles:!0});return e.dispatchEvent(j(e,"focusout",u)),r}var m=n(194);function I(e,t,n){return e.dispatchEvent(function(e,t,n){if(void 0===n&&(n={}),"function"==typeof KeyboardEvent)return new KeyboardEvent(t,n);var r=Object(f.a)(e).createEvent("KeyboardEvent");return r.initKeyboardEvent(t,n.bubbles,n.cancelable,Object(m.a)(e),n.key,n.location,n.ctrlKey,n.altKey,n.shiftKey,n.metaKey),r}(e,t,n))}var g=n(162),y=n(184),_=n(154),C=n(137),h=n(155),E=n(157),w=n(156),k=g.a&&"msCrypto"in window;function T(e,t,n){var r=Object(l.a)(n);return Object(c.useCallback)((function(n){var u;if(null===(u=r.current)||void 0===u||u.call(r,n),!n.defaultPrevented&&e&&function(e){return!!Object(s.a)(e)&&!e.metaKey&&"Tab"!==e.key}(n)){var i=null==t?void 0:t.ref.current;i&&(I(i,n.type,n)||n.preventDefault(),n.currentTarget.contains(i)&&n.stopPropagation())}}),[e,t])}function P(e,t){return null==e?void 0:e.some((function(e){return!!t&&e.ref.current===t}))}var R=Object(i.a)({name:"Composite",compose:[d.a],keys:E.a,useOptions:function(e){return Object(r.b)(Object(r.b)({},e),{},{currentId:Object(C.b)(e)})},useProps:function(e,t){var n=t.ref,u=t.onFocusCapture,i=t.onFocus,a=t.onBlurCapture,b=t.onKeyDown,d=t.onKeyDownCapture,v=t.onKeyUpCapture,O=Object(r.a)(t,["ref","onFocusCapture","onFocus","onBlurCapture","onKeyDown","onKeyDownCapture","onKeyUpCapture"]),j=Object(c.useRef)(null),m=Object(h.a)(e.items,e.currentId),I=Object(c.useRef)(null),g=Object(l.a)(u),E=Object(l.a)(i),R=Object(l.a)(a),S=Object(l.a)(b),B=function(e){var t=Object(l.a)(e),n=Object(c.useReducer)((function(e){return e+1}),0),r=n[0],u=n[1];return Object(c.useEffect)((function(){var e,n=null===(e=t.current)||void 0===e?void 0:e.ref.current;r&&n&&Object(w.c)(n)}),[r]),u}(m),D=k?function(e){var t=Object(c.useRef)(null);return Object(c.useEffect)((function(){var n=Object(f.a)(e.current),r=function(e){var n=e.target;t.current=n};return n.addEventListener("focus",r,!0),function(){n.removeEventListener("focus",r,!0)}}),[]),t}(j):void 0;Object(c.useEffect)((function(){var t=j.current;e.unstable_moves&&!m&&(null==t||t.focus())}),[e.unstable_moves,m]);var L=T(e.unstable_virtual,m,d),A=T(e.unstable_virtual,m,v),W=Object(c.useCallback)((function(t){var n;if(null===(n=g.current)||void 0===n||n.call(g,t),!t.defaultPrevented&&e.unstable_virtual){var r=(null==D?void 0:D.current)||t.relatedTarget,u=P(e.items,r);Object(s.a)(t)&&u&&t.stopPropagation()}}),[e.unstable_virtual,e.items]),K=Object(c.useCallback)((function(t){var n;if(null===(n=E.current)||void 0===n||n.call(E,t),!t.defaultPrevented)if(e.unstable_virtual)Object(s.a)(t)&&B();else if(Object(s.a)(t)){var r;null===(r=e.setCurrentId)||void 0===r||r.call(e,null)}}),[e.unstable_virtual,e.setCurrentId]),x=Object(c.useCallback)((function(t){var n;if(null===(n=R.current)||void 0===n||n.call(R,t),!t.defaultPrevented&&e.unstable_virtual){var r=(null==m?void 0:m.ref.current)||null,u=Object(y.a)(t),i=P(e.items,u);if(Object(s.a)(t)&&i)u===r?(I.current&&I.current!==u&&p(I.current,t),I.current=r):r&&(p(r,t),I.current=u),t.stopPropagation();else!P(e.items,t.target)&&r&&p(r,t)}}),[e.unstable_virtual,e.items,m]),F=Object(c.useCallback)((function(t){var n,r;if(null===(n=S.current)||void 0===n||n.call(S,t),!t.defaultPrevented&&null===e.currentId&&Object(s.a)(t)){var u="horizontal"!==e.orientation,i="vertical"!==e.orientation,c=!(null===(r=e.groups)||void 0===r||!r.length),a={ArrowUp:(c||u)&&function(){if(c){var t,n=(u=e.items,Object(C.a)(Object(_.a)(Object(_.c)(Object(_.b)(u)))));if(null!=n&&n.id)null===(t=e.move)||void 0===t||t.call(e,n.id)}else{var r;null===(r=e.last)||void 0===r||r.call(e)}var u},ArrowRight:(c||i)&&e.first,ArrowDown:(c||u)&&e.first,ArrowLeft:(c||i)&&e.last,Home:e.first,End:e.last,PageUp:e.first,PageDown:e.last}[t.key];a&&(t.preventDefault(),a())}}),[e.currentId,e.orientation,e.groups,e.items,e.move,e.last,e.first]);return Object(r.b)({ref:Object(o.a)(j,n),id:e.baseId,onFocus:K,onFocusCapture:W,onBlurCapture:x,onKeyDownCapture:L,onKeyDown:F,onKeyUpCapture:A,"aria-activedescendant":e.unstable_virtual&&(null==m?void 0:m.id)||void 0},O)},useComposeProps:function(e,t){t=Object(b.a)(e,t,!0);var n=Object(d.a)(e,t,!0);return e.unstable_virtual||null===e.currentId?Object(r.b)({tabIndex:0},n):Object(r.b)(Object(r.b)({},t),{},{ref:n.ref})}}),S=(Object(u.a)({as:"div",useHook:R,useCreateElement:function(e,t,n){return Object(a.a)(e,t,n)}}),n(186)),B=Object(i.a)({name:"TabList",compose:R,keys:S.b,useProps:function(e,t){return Object(r.b)({role:"tablist","aria-orientation":e.orientation},t)}}),D=Object(u.a)({as:"div",useHook:B,useCreateElement:function(e,t,n){return Object(a.a)(e,t,n)}})},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var r=n(130),u=n(0),i=n(160),c=n(132),a=n(128),o=n(154),l=n(137),s=n(155);function b(e,t){return function(e){return"function"==typeof e}(e)?e(t):e}var d=n(163);function f(e,t){return Boolean(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}function v(e,t){return e.findIndex((function(e){return!(!e.ref.current||!t.ref.current)&&f(t.ref.current,e.ref.current)}))}function O(e){for(var t,n=0,u=Object(r.c)(e);!(t=u()).done;){var i=t.value.length;i>n&&(n=i)}return n}function j(e){for(var t=Object(o.b)(e),n=O(t),u=[],i=0;i<n;i+=1)for(var c,a=Object(r.c)(t);!(c=a()).done;){var l=c.value;l[i]&&u.push(Object(r.b)(Object(r.b)({},l[i]),{},{groupId:l[i].groupId?""+i:void 0}))}return u}function p(e,t,n){for(var u,i=O(e),c=Object(r.c)(e);!(u=c()).done;)for(var a=u.value,o=0;o<i;o+=1){var s=a[o];if(!s||n&&s.disabled){var b=0===o&&n?Object(l.a)(a):a[o-1];a[o]=b&&t!==(null==b?void 0:b.id)&&n?b:{id:"__EMPTY_ITEM__",disabled:!0,ref:{current:null},groupId:null==b?void 0:b.groupId}}}return e}var m={id:null,ref:{current:null}};function I(e,t){return e.filter((function(e){return e.groupId===t}))}var g={horizontal:"vertical",vertical:"horizontal"};function y(e,t,n){return n in e?[].concat(e.slice(0,n),[t],e.slice(n)):[].concat(e,[t])}function _(e){var t=e.map((function(e,t){return[t,e]})),n=!1;return t.sort((function(e,t){var r=e[0],u=e[1],i=t[0],c=t[1],a=u.ref.current,o=c.ref.current;return a&&o?f(a,o)?(r>i&&(n=!0),-1):(r<i&&(n=!0),1):0})),n?t.map((function(e){e[0];return e[1]})):e}function C(e,t){var n=_(e);e!==n&&t(n)}function h(e,t){var n=Object(u.useRef)([]);Object(u.useEffect)((function(){for(var u,i=function(e){for(var t,n=e[0],r=e.slice(1),u=null==n||null===(t=n.ref.current)||void 0===t?void 0:t.parentElement,i=function(){var e=u;if(r.every((function(t){return e.contains(t.ref.current)})))return{v:u};u=u.parentElement};u;){var c=i();if("object"==typeof c)return c.v}return Object(a.a)(u).body}(e),c=new IntersectionObserver((function(){!!n.current.length&&C(e,t),n.current=e}),{root:i}),o=Object(r.c)(e);!(u=o()).done;){var l=u.value;l.ref.current&&c.observe(l.ref.current)}return function(){c.disconnect()}}),[e])}function E(e,t){"function"==typeof IntersectionObserver?h(e,t):function(e,t){Object(u.useEffect)((function(){var n=setTimeout((function(){return C(e,t)}),250);return function(){return clearTimeout(n)}}))}(e,t)}function w(e,t){var n=e.unstable_virtual,u=e.rtl,i=e.orientation,c=e.items,a=e.groups,d=e.currentId,f=e.loop,O=e.wrap,C=e.pastIds,h=e.shift,E=e.unstable_moves,k=e.unstable_includesBaseElement,T=e.initialVirtual,P=e.initialRTL,R=e.initialOrientation,S=e.initialCurrentId,B=e.initialLoop,D=e.initialWrap,L=e.initialShift,A=e.hasSetCurrentId;switch(t.type){case"registerGroup":var W=t.group;if(0===a.length)return Object(r.b)(Object(r.b)({},e),{},{groups:[W]});var K=v(a,W);return Object(r.b)(Object(r.b)({},e),{},{groups:y(a,W,K)});case"unregisterGroup":var x=t.id,F=a.filter((function(e){return e.id!==x}));return F.length===a.length?e:Object(r.b)(Object(r.b)({},e),{},{groups:F});case"registerItem":var H,M=t.item,G=a.find((function(e){var t;return null===(t=e.ref.current)||void 0===t?void 0:t.contains(M.ref.current)})),N=Object(r.b)({groupId:null==G?void 0:G.id},M),V=v(c,N),U=Object(r.b)(Object(r.b)({},e),{},{items:y(c,N,V)});return A||E||void 0!==S?U:Object(r.b)(Object(r.b)({},U),{},{currentId:null===(H=Object(l.a)(U.items))||void 0===H?void 0:H.id});case"unregisterItem":var z=t.id,q=c.filter((function(e){return e.id!==z}));if(q.length===c.length)return e;var J=C.filter((function(e){return e!==z})),X=Object(r.b)(Object(r.b)({},e),{},{pastIds:J,items:q});if(d&&d===z){var Y=k?null:Object(l.b)(Object(r.b)(Object(r.b)({},X),{},{currentId:J[0]}));return Object(r.b)(Object(r.b)({},X),{},{currentId:Y})}return X;case"move":var Q=t.id;if(void 0===Q)return e;var Z=C.filter((function(e){return e!==d&&e!==Q})),$=d?[d].concat(Z):Z,ee=Object(r.b)(Object(r.b)({},e),{},{pastIds:$});if(null===Q)return Object(r.b)(Object(r.b)({},ee),{},{unstable_moves:E+1,currentId:Object(l.b)(ee,Q)});var te=Object(s.a)(c,Q);return Object(r.b)(Object(r.b)({},ee),{},{unstable_moves:te?E+1:E,currentId:Object(l.b)(ee,null==te?void 0:te.id)});case"next":if(null==d)return w(e,Object(r.b)(Object(r.b)({},t),{},{type:"first"}));var ne=u&&"vertical"!==i,re=ne?Object(o.c)(c):c,ue=re.find((function(e){return e.id===d}));if(!ue)return w(e,Object(r.b)(Object(r.b)({},t),{},{type:"first"}));var ie=!!ue.groupId,ce=re.indexOf(ue),ae=re.slice(ce+1),oe=I(ae,ue.groupId);if(t.allTheWay){var le=Object(l.a)(ne?I(re,ue.groupId):Object(o.c)(oe));return w(e,Object(r.b)(Object(r.b)({},t),{},{type:"move",id:null==le?void 0:le.id}))}var se=function(e){return e&&g[e]}(ie?i||"horizontal":i),be=f&&f!==se,de=ie&&O&&O!==se,fe=t.hasNullItem||!ie&&be&&k;if(be){var ve=function(e,t,n){var r=e.findIndex((function(e){return e.id===t}));return[].concat(e.slice(r+1),n?[m]:[],e.slice(0,r))}(de&&!fe?re:I(re,ue.groupId),d,fe),Oe=Object(l.a)(ve,d);return w(e,Object(r.b)(Object(r.b)({},t),{},{type:"move",id:null==Oe?void 0:Oe.id}))}if(de){var je=Object(l.a)(fe?oe:ae,d),pe=fe?(null==je?void 0:je.id)||null:null==je?void 0:je.id;return w(e,Object(r.b)(Object(r.b)({},t),{},{type:"move",id:pe}))}var me=Object(l.a)(oe,d);return w(e,!me&&fe?Object(r.b)(Object(r.b)({},t),{},{type:"move",id:null}):Object(r.b)(Object(r.b)({},t),{},{type:"move",id:null==me?void 0:me.id}));case"previous":var Ie=!!!a.length&&k,ge=w(Object(r.b)(Object(r.b)({},e),{},{items:Object(o.c)(c)}),Object(r.b)(Object(r.b)({},t),{},{type:"next",hasNullItem:Ie}));return Object(r.b)(Object(r.b)({},ge),{},{items:c});case"down":var ye=h&&!t.allTheWay,_e=j(Object(o.a)(p(Object(o.b)(c),d,ye))),Ce=f&&"horizontal"!==f&&k,he=w(Object(r.b)(Object(r.b)({},e),{},{orientation:"vertical",items:_e}),Object(r.b)(Object(r.b)({},t),{},{type:"next",hasNullItem:Ce}));return Object(r.b)(Object(r.b)({},he),{},{orientation:i,items:c});case"up":var Ee=h&&!t.allTheWay,we=j(Object(o.c)(Object(o.a)(p(Object(o.b)(c),d,Ee)))),ke=k,Te=w(Object(r.b)(Object(r.b)({},e),{},{orientation:"vertical",items:we}),Object(r.b)(Object(r.b)({},t),{},{type:"next",hasNullItem:ke}));return Object(r.b)(Object(r.b)({},Te),{},{orientation:i,items:c});case"first":var Pe=Object(l.a)(c);return w(e,Object(r.b)(Object(r.b)({},t),{},{type:"move",id:null==Pe?void 0:Pe.id}));case"last":var Re=w(Object(r.b)(Object(r.b)({},e),{},{items:Object(o.c)(c)}),Object(r.b)(Object(r.b)({},t),{},{type:"first"}));return Object(r.b)(Object(r.b)({},Re),{},{items:c});case"sort":return Object(r.b)(Object(r.b)({},e),{},{items:_(c),groups:_(a)});case"setVirtual":return Object(r.b)(Object(r.b)({},e),{},{unstable_virtual:b(t.virtual,n)});case"setRTL":return Object(r.b)(Object(r.b)({},e),{},{rtl:b(t.rtl,u)});case"setOrientation":return Object(r.b)(Object(r.b)({},e),{},{orientation:b(t.orientation,i)});case"setCurrentId":var Se=Object(l.b)(Object(r.b)(Object(r.b)({},e),{},{currentId:b(t.currentId,d)}));return Object(r.b)(Object(r.b)({},e),{},{currentId:Se,hasSetCurrentId:!0});case"setLoop":return Object(r.b)(Object(r.b)({},e),{},{loop:b(t.loop,f)});case"setWrap":return Object(r.b)(Object(r.b)({},e),{},{wrap:b(t.wrap,O)});case"setShift":return Object(r.b)(Object(r.b)({},e),{},{shift:b(t.shift,h)});case"setIncludesBaseElement":return Object(r.b)(Object(r.b)({},e),{},{unstable_includesBaseElement:b(t.includesBaseElement,k)});case"reset":return Object(r.b)(Object(r.b)({},e),{},{unstable_virtual:T,rtl:P,orientation:R,currentId:Object(l.b)(Object(r.b)(Object(r.b)({},e),{},{currentId:S})),loop:B,wrap:D,shift:L,unstable_moves:0,pastIds:[]});case"setItems":return Object(r.b)(Object(r.b)({},e),{},{items:t.items});default:throw new Error}}function k(e){return Object(u.useCallback)(e,[])}function T(e){void 0===e&&(e={});var t=Object(i.a)(e),n=t.unstable_virtual,a=void 0!==n&&n,o=t.rtl,l=void 0!==o&&o,s=t.orientation,b=t.currentId,f=t.loop,v=void 0!==f&&f,O=t.wrap,j=void 0!==O&&O,p=t.shift,m=void 0!==p&&p,I=t.unstable_includesBaseElement,g=Object(r.a)(t,["unstable_virtual","rtl","orientation","currentId","loop","wrap","shift","unstable_includesBaseElement"]),y=Object(d.a)(g),_=Object(u.useReducer)(w,{unstable_virtual:a,rtl:l,orientation:s,items:[],groups:[],currentId:b,loop:v,wrap:j,shift:m,unstable_moves:0,pastIds:[],unstable_includesBaseElement:null!=I?I:null===b,initialVirtual:a,initialRTL:l,initialOrientation:s,initialCurrentId:b,initialLoop:v,initialWrap:j,initialShift:m}),C=_[0],h=(C.pastIds,C.initialVirtual,C.initialRTL,C.initialOrientation,C.initialCurrentId,C.initialLoop,C.initialWrap,C.initialShift,C.hasSetCurrentId,Object(r.a)(C,["pastIds","initialVirtual","initialRTL","initialOrientation","initialCurrentId","initialLoop","initialWrap","initialShift","hasSetCurrentId"])),T=_[1],P=Object(u.useState)(!1),R=P[0],S=P[1],B=function(){var e=Object(u.useRef)(!1);return Object(c.a)((function(){return function(){e.current=!0}}),[]),e}(),D=Object(u.useCallback)((function(e){return T({type:"setItems",items:e})}),[]);return E(h.items,D),Object(r.b)(Object(r.b)(Object(r.b)({},y),h),{},{unstable_hasActiveWidget:R,unstable_setHasActiveWidget:S,registerItem:k((function(e){B.current||T({type:"registerItem",item:e})})),unregisterItem:k((function(e){B.current||T({type:"unregisterItem",id:e})})),registerGroup:k((function(e){B.current||T({type:"registerGroup",group:e})})),unregisterGroup:k((function(e){B.current||T({type:"unregisterGroup",id:e})})),move:k((function(e){return T({type:"move",id:e})})),next:k((function(e){return T({type:"next",allTheWay:e})})),previous:k((function(e){return T({type:"previous",allTheWay:e})})),up:k((function(e){return T({type:"up",allTheWay:e})})),down:k((function(e){return T({type:"down",allTheWay:e})})),first:k((function(){return T({type:"first"})})),last:k((function(){return T({type:"last"})})),sort:k((function(){return T({type:"sort"})})),unstable_setVirtual:k((function(e){return T({type:"setVirtual",virtual:e})})),setRTL:k((function(e){return T({type:"setRTL",rtl:e})})),setOrientation:k((function(e){return T({type:"setOrientation",orientation:e})})),setCurrentId:k((function(e){return T({type:"setCurrentId",currentId:e})})),setLoop:k((function(e){return T({type:"setLoop",loop:e})})),setWrap:k((function(e){return T({type:"setWrap",wrap:e})})),setShift:k((function(e){return T({type:"setShift",shift:e})})),unstable_setIncludesBaseElement:k((function(e){return T({type:"setIncludesBaseElement",includesBaseElement:e})})),reset:k((function(){return T({type:"reset"})}))})}function P(e){void 0===e&&(e={});var t=Object(i.a)(e),n=t.selectedId,c=t.loop,a=void 0===c||c,o=t.manual,l=void 0!==o&&o,s=Object(r.a)(t,["selectedId","loop","manual"]),b=T(Object(r.b)({loop:a,currentId:n},s)),d=T(),f=Object(u.useState)(n),v=f[0],O=f[1],j=Object(u.useCallback)((function(e){b.move(e),O(e)}),[b.move]);return Object(u.useEffect)((function(){null!==v&&(b.items.find((function(e){return e.id===v}))||b.currentId&&O(b.currentId))}),[v,b.items,b.currentId]),Object(r.b)(Object(r.b)({},b),{},{selectedId:v,panels:d.items,manual:l,select:j,setSelectedId:O,registerPanel:Object(u.useCallback)((function(e){return d.registerItem(e)}),[d.registerItem]),unregisterPanel:Object(u.useCallback)((function(e){return d.unregisterItem(e)}),[d.unregisterItem])})}}}]);