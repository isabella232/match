/*! For license information please see 52.c2468f3a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{226:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),l=a.n(c),o=a(212),s=a(227),i=a(224),u=a(23),d=a(204);function m(e){let t=e.activeBasePath,a=e.activeBaseRegex,c=e.to,o=e.href,u=e.label,d=e.activeClassName,m=void 0===d?"navbar__link--active":d,f=e.prependBaseUrlToHref,h=Object(r.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]);const b=Object(i.a)(c),v=Object(i.a)(t),p=Object(i.a)(o,{forcePrependBaseUrl:!0});return l.a.createElement(s.a,Object(n.a)({},o?{href:f?p:o}:Object.assign({isNavLink:!0,activeClassName:m,to:b},t||a?{isActive:(e,t)=>a?new RegExp(a).test(t.pathname):t.pathname.startsWith(v)}:null),h),u)}function f(e){var t;let a=e.items,s=e.position,i=e.className,u=Object(r.a)(e,["items","position","className"]);const d=Object(c.useRef)(null),f=Object(c.useRef)(null),h=Object(c.useState)(!1),b=h[0],v=h[1];Object(c.useEffect)((()=>{const e=e=>{d.current&&!d.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[d]);const p=(e,t=!1)=>Object(o.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return a?l.a.createElement("div",{ref:d,className:Object(o.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===s,"dropdown--right":"right"===s,"dropdown--show":b})},l.a.createElement(m,Object(n.a)({className:p(i)},u,{onClick:u.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),v(!b))}}),null!==(t=u.children)&&void 0!==t?t:u.label),l.a.createElement("ul",{ref:f,className:"dropdown__menu"},a.map(((e,t)=>{let c=e.className,o=Object(r.a)(e,["className"]);return l.a.createElement("li",{key:t},l.a.createElement(m,Object(n.a)({onKeyDown:e=>{if(t===a.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);const t=d.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active",className:p(c,!0)},o)))})))):l.a.createElement(m,Object(n.a)({className:p(i)},u))}function h(e){var t,a,s;let i=e.items,f=e.className,h=(e.position,Object(r.a)(e,["items","className","position"]));const b=Object(c.useRef)(null),v=Object(u.useLocation)().pathname,p=Object(c.useState)((()=>{var e;return null===(e=!(null!=i&&i.some((e=>Object(d.isSamePath)(e.to,v)))))||void 0===e||e})),g=p[0],E=p[1],k=(e,t=!1)=>Object(o.a)("menu__link",{"menu__link--sublist":t},e);if(!i)return l.a.createElement("li",{className:"menu__list-item"},l.a.createElement(m,Object(n.a)({className:k(f)},h)));const O=null!==(t=b.current)&&void 0!==t&&t.scrollHeight?(null===(a=b.current)||void 0===a?void 0:a.scrollHeight)+"px":void 0;return l.a.createElement("li",{className:Object(o.a)("menu__list-item",{"menu__list-item--collapsed":g})},l.a.createElement(m,Object(n.a)({role:"button",className:k(f,!0)},h,{onClick:e=>{e.preventDefault(),E((e=>!e))}}),null!==(s=h.children)&&void 0!==s?s:h.label),l.a.createElement("ul",{className:"menu__list",ref:b,style:{height:g?void 0:O}},i.map(((e,t)=>{let a=e.className,c=Object(r.a)(e,["className"]);return l.a.createElement("li",{className:"menu__list-item",key:t},l.a.createElement(m,Object(n.a)({activeClassName:"menu__link--active",className:k(a)},c,{onClick:h.onClick})))}))))}t.a=function(e){let t=e.mobile,a=void 0!==t&&t,n=Object(r.a)(e,["mobile"]);const c=a?h:f;return l.a.createElement(c,n)}},231:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},232:function(e,t,a){"use strict";var n=a(0),r=a(231);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},233:function(e,t,a){"use strict";var n=a(0),r=a(241);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},241:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext(void 0);t.a=r},242:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),l=a.n(c),o=a(212),s=a(16),i=a(233),u=a(67),d=a.n(u);t.a=e=>{const t=Object(s.default)().isClient,a=Object(i.a)().isDarkTheme,c=e.sources,u=e.className,m=e.alt,f=void 0===m?"":m,h=Object(r.a)(e,["sources","className","alt"]),b=t?a?["dark"]:["light"]:["light","dark"];return l.a.createElement(l.a.Fragment,null,b.map((e=>l.a.createElement("img",Object(n.a)({key:e,src:c[e],alt:f,className:Object(o.a)(d.a.themedImage,d.a["themedImage--"+e],u)},h)))))}},246:function(e,t,a){"use strict";var n=a(0),r=a(8);const c=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const a=Object(n.useState)(c()),r=a[0],l=a[1],o=()=>{const t=c();l(t),e&&e(t)};return Object(n.useEffect)((()=>{const e={passive:!0};return window.addEventListener("scroll",o,e),()=>window.removeEventListener("scroll",o,e)}),t),r}},247:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},248:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a(0),r=a(8);const c={desktop:"desktop",mobile:"mobile"};t.a=function(){const e=r.a.canUseDOM;function t(){if(e)return window.innerWidth>996?c.desktop:c.mobile}const a=Object(n.useState)(t),l=a[0],o=a[1];return Object(n.useEffect)((()=>{if(e)return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a);function a(){o(t())}}),[]),l}},249:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),l=a.n(c),o=a(227),s=a(242),i=a(224),u=a(16),d=a(204);t.a=e=>{const t=Object(u.default)().isClient,a=Object(d.useThemeConfig)().navbar,c=a.title,m=a.logo,f=void 0===m?{src:""}:m,h=e.imageClassName,b=e.titleClassName,v=Object(r.a)(e,["imageClassName","titleClassName"]),p=Object(i.a)(f.href||"/"),g={light:Object(i.a)(f.src),dark:Object(i.a)(f.srcDark||f.src)};return l.a.createElement(o.a,Object(n.a)({to:p},v,f.target&&{target:f.target}),f.src&&l.a.createElement(s.a,{key:t,className:h,sources:g,alt:f.alt||c||"Logo"}),null!=c&&l.a.createElement("strong",{className:b},c))}},250:function(e,t,a){"use strict";var n=a(3),r=a(7),c=a(0),l=a.n(c);t.a=e=>{let t=e.width,a=void 0===t?30:t,c=e.height,o=void 0===c?30:c,s=e.className,i=Object(r.a)(e,["width","height","className"]);return l.a.createElement("svg",Object(n.a)({"aria-label":"Menu",className:s,width:a,height:o,viewBox:"0 0 30 30",role:"img",focusable:"false"},i),l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},266:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(212),l=a(223),o=a(23),s=a(63),i=a.n(s);function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var d=function(){const e=Object(n.useRef)(null),t=Object(o.useLocation)();return Object(n.useEffect)((()=>{t.hash||u(e.current)}),[t.pathname]),r.a.createElement("div",{ref:e},r.a.createElement("a",{href:"#main",className:i.a.skipToContent,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.a.createElement(l.a,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m=a(204),f=a(232),h=a(64),b=a.n(h);var v=function(){const e=Object(f.a)(),t=e.isAnnouncementBarClosed,a=e.closeAnnouncementBar,n=Object(m.useThemeConfig)().announcementBar;if(!n)return null;const o=n.content,s=n.backgroundColor,i=n.textColor,u=n.isCloseable;return!o||u&&t?null:r.a.createElement("div",{className:b.a.announcementBar,style:{backgroundColor:s,color:i},role:"banner"},r.a.createElement("div",{className:Object(c.a)(b.a.announcementBarContent,{[b.a.announcementBarCloseable]:u}),dangerouslySetInnerHTML:{__html:o}}),u?r.a.createElement("button",{type:"button",className:b.a.announcementBarClose,onClick:a,"aria-label":Object(l.b)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},p=a(3),g=()=>null,E=a(279),k=a.n(E),O=a(16),j=a(65),y=a.n(j);const _=({icon:e,style:t})=>r.a.createElement("span",{className:Object(c.a)(y.a.toggle,y.a.dark),style:t},e),w=({icon:e,style:t})=>r.a.createElement("span",{className:Object(c.a)(y.a.toggle,y.a.light),style:t},e);var C=function(e){const t=Object(m.useThemeConfig)().colorMode.switchConfig,a=t.darkIcon,n=t.darkIconStyle,c=t.lightIcon,l=t.lightIconStyle,o=Object(O.default)().isClient;return r.a.createElement(k.a,Object(p.a)({disabled:!o,icons:{checked:r.a.createElement(_,{icon:a,style:n}),unchecked:r.a.createElement(w,{icon:c,style:l})}},e))},N=a(233),T=a(246);var L=e=>{const t=Object(o.useLocation)(),a=Object(n.useState)(e),r=a[0],c=a[1],l=Object(n.useRef)(!1),s=Object(n.useState)(0),i=s[0],u=s[1],d=Object(n.useState)(0),m=d[0],f=d[1],h=Object(n.useCallback)((e=>{null!==e&&f(e.getBoundingClientRect().height)}),[]);return Object(T.a)((({scrollY:t})=>{if(!e)return;if(t<m)return void c(!0);if(l.current)return l.current=!1,c(!1),void u(t);i&&0===t&&c(!0);const a=document.documentElement.scrollHeight-m,n=window.innerHeight;i&&t>=i?c(!1):t+n<a&&c(!0),u(t)}),[i,m,l]),Object(n.useEffect)((()=>{e&&i&&c(!0)}),[t.pathname]),Object(n.useEffect)((()=>{e&&t.hash&&(l.current=!0)}),[t.hash]),{navbarRef:h,isNavbarVisible:r}},S=a(247),I=a(248),D=a(7),x=a(226);var B=e=>{let t=e.width,a=void 0===t?20:t,n=e.height,c=void 0===n?20:n,l=Object(D.a)(e,["width","height"]);return r.a.createElement("svg",Object(p.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:a,height:c},l),r.a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};function P(e){let t=e.mobile,a=e.dropdownItemsBefore,n=e.dropdownItemsAfter,c=Object(D.a)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]);const l=Object(O.default)().i18n,o=l.currentLocale,s=l.locales,i=l.localeConfigs,u=Object(m.useAlternatePageUtils)();function d(e){return i[e].label}const f=[...a,...s.map((e=>{const t="pathname://"+u.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===o?"dropdown__link--active":""}})),...n],h=t?"Languages":d(o);return r.a.createElement(x.a,Object(p.a)({},c,{href:"#",mobile:t,label:r.a.createElement("span",null,r.a.createElement(B,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.a.createElement("span",null,h)),items:f}))}var A=a(66),M=a.n(A);function V({mobile:e}){return e?null:r.a.createElement("div",{className:M.a.searchWrapper},r.a.createElement(g,null))}const F={default:()=>x.a,localeDropdown:()=>P,search:()=>V,docsVersion:()=>a(284).default,docsVersionDropdown:()=>a(285).default,doc:()=>a(286).default};function U(e){let t=e.type,a=Object(D.a)(e,["type"]);const n=((e="default")=>{const t=F[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t()})(t);return r.a.createElement(n,a)}var R=a(249),H=a(250),X=a(68),z=a.n(X);const G="right";var W=function(){const e=Object(m.useThemeConfig)(),t=e.navbar,a=t.items,l=t.hideOnScroll,o=t.style,s=e.colorMode.disableSwitch,i=Object(n.useState)(!1),u=i[0],d=i[1],f=Object(N.a)(),h=f.isDarkTheme,b=f.setLightTheme,v=f.setDarkTheme,E=L(l),k=E.navbarRef,O=E.isNavbarVisible;Object(S.a)(u);const j=Object(n.useCallback)((()=>{d(!0)}),[d]),y=Object(n.useCallback)((()=>{d(!1)}),[d]),_=Object(n.useCallback)((e=>e.target.checked?v():b()),[b,v]),w=Object(I.a)();Object(n.useEffect)((()=>{w===I.b.desktop&&d(!1)}),[w]);const T=a.some((e=>"search"===e.type)),D=function(e){return{leftItems:e.filter((e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:G)})),rightItems:e.filter((e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:G)}))}}(a),x=D.leftItems,B=D.rightItems;return r.a.createElement("nav",{ref:k,className:Object(c.a)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===o,"navbar--primary":"primary"===o,"navbar-sidebar--show":u,[z.a.navbarHideable]:l,[z.a.navbarHidden]:l&&!O})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=a&&0!==a.length&&r.a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",type:"button",tabIndex:0,onClick:j,onKeyDown:j},r.a.createElement(H.a,null)),r.a.createElement(R.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title")}),x.map(((e,t)=>r.a.createElement(U,Object(p.a)({},e,{key:t}))))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},B.map(((e,t)=>r.a.createElement(U,Object(p.a)({},e,{key:t})))),!s&&r.a.createElement(C,{className:z.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:h,onChange:_}),!T&&r.a.createElement(g,null))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:y}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(R.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:y}),!s&&u&&r.a.createElement(C,{"aria-label":"Dark mode toggle in sidebar",checked:h,onChange:_})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},a.map(((e,t)=>r.a.createElement(U,Object(p.a)({mobile:!0},e,{onClick:y,key:t})))))))))},Y=a(227),K=a(224),Q=a(69),q=a.n(Q),J=a(242);function Z(e){let t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,l=Object(D.a)(e,["to","href","label","prependBaseUrlToHref"]);const o=Object(K.a)(t),s=Object(K.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(Y.a,Object(p.a)({className:"footer__link-item"},a?{href:c?s:a}:{to:o},l),n)}const $=({sources:e,alt:t})=>r.a.createElement(J.a,{className:"footer__logo",alt:t,sources:e});var ee=function(){const e=Object(m.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,l=void 0===n?[]:n,o=t.logo,s=void 0===o?{}:o,i={light:Object(K.a)(s.src),dark:Object(K.a)(s.srcDark||s.src)};return e?r.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},l&&l.length>0&&r.a.createElement("div",{className:"row footer__links"},l.map(((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(Z,e))))):null)))),(s||a)&&r.a.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&r.a.createElement("div",{className:"margin-bottom--sm"},s.href?r.a.createElement(Y.a,{href:s.href,className:q.a.footerLogoLink},r.a.createElement($,{alt:s.alt,sources:i})):r.a.createElement($,{alt:s.alt,sources:i})),a?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null},te=a(287),ae=a(25);function ne({locale:e,version:t,tag:a}){return r.a.createElement(ae.a,null,e&&r.a.createElement("meta",{name:"docusaurus_locale",content:""+e}),t&&r.a.createElement("meta",{name:"docusaurus_version",content:t}),a&&r.a.createElement("meta",{name:"docusaurus_tag",content:a}))}var re=a(251);function ce(){const e=Object(O.default)().i18n,t=e.defaultLocale,a=e.locales,n=Object(m.useAlternatePageUtils)();return r.a.createElement(ae.a,null,a.map((e=>r.a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),r.a.createElement("link",{rel:"alternate",href:n.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function le({permalink:e}){const t=Object(O.default)().siteConfig.url,a=function(){const e=Object(O.default)().siteConfig.url,t=Object(o.useLocation)().pathname;return e+Object(K.a)(t)}(),n=e?""+t+e:a;return r.a.createElement(ae.a,null,r.a.createElement("meta",{property:"og:url",content:n}),r.a.createElement("link",{rel:"canonical",href:n}))}function oe(e){const t=Object(O.default)(),a=t.siteConfig,n=t.i18n,c=n.currentLocale,l=n.localeConfigs,o=a.favicon,s=a.themeConfig,i=s.image,u=s.metadatas,d=e.title,f=e.description,h=e.image,b=e.keywords,v=e.searchMetadatas,g=Object(K.a)(o),E=c,k=l[c].direction;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.a,null,r.a.createElement("html",{lang:E,dir:k}),o&&r.a.createElement("link",{rel:"shortcut icon",href:g})),r.a.createElement(re.a,{title:d,description:f,keywords:b,image:h||i}),r.a.createElement(le,null),r.a.createElement(ce,null),r.a.createElement(ne,Object(p.a)({tag:m.DEFAULT_SEARCH_TAG,locale:c},v)),r.a.createElement(ae.a,null,u.map(((e,t)=>r.a.createElement("meta",Object(p.a)({key:"metadata_"+t},e))))))}a(70);var se=function(){Object(n.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};a(71);t.a=function(e){const t=e.children,a=e.noFooter,n=e.wrapperClassName;return se(),r.a.createElement(te.a,null,r.a.createElement(oe,e),r.a.createElement(d,null),r.a.createElement(v,null),r.a.createElement(W,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(ee,null))}},279:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=m(c),o=m(a(280)),s=m(a(1)),i=m(a(281)),u=m(a(282)),d=a(283);function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:l.default.createElement(i.default,null),unchecked:l.default.createElement(u.default,null)}},f.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},280:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},281:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},282:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},283:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},284:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),c=a(0),l=a.n(c),o=a(226),s=a(218),i=a(204);function u(e){var t;let a=e.label,c=e.to,u=e.docsPluginId,d=Object(r.a)(e,["label","to","docsPluginId"]);const m=Object(s.useActiveVersion)(u),f=Object(i.useDocsPreferredVersion)(u).preferredVersion,h=Object(s.useLatestVersion)(u),b=null!==(t=null!=m?m:f)&&void 0!==t?t:h,v=null!=a?a:b.label,p=null!=c?c:(e=>e.docs.find((t=>t.id===e.mainDocId)))(b).path;return l.a.createElement(o.a,Object(n.a)({},d,{label:v,to:p}))}},285:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=a(0),l=a.n(c),o=a(226),s=a(218),i=a(204);const u=e=>e.docs.find((t=>t.id===e.mainDocId));function d(e){var t,a;let c=e.mobile,d=e.docsPluginId,m=e.dropdownActiveClassDisabled,f=e.dropdownItemsBefore,h=e.dropdownItemsAfter,b=Object(r.a)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]);const v=Object(s.useActiveDocContext)(d),p=Object(s.useVersions)(d),g=Object(s.useLatestVersion)(d),E=Object(i.useDocsPreferredVersion)(d),k=E.preferredVersion,O=E.savePreferredVersionName;const j=null!==(t=null!==(a=v.activeVersion)&&void 0!==a?a:k)&&void 0!==t?t:g,y=c?"Versions":j.label,_=c?void 0:u(j).path;return l.a.createElement(o.a,Object(n.a)({},b,{mobile:c,label:y,to:_,items:function(){const e=p.map((e=>{const t=(null==v?void 0:v.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==v?void 0:v.activeVersion),onClick:()=>{O(e.name)}}})),t=[...f,...e,...h];if(!(t.length<=1))return t}(),isActive:m?()=>!1:void 0}))}},286:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),c=a(0),l=a.n(c),o=a(226),s=a(218),i=a(212),u=a(204);function d(e){var t;let a=e.docId,c=e.activeSidebarClassName,d=e.label,m=e.docsPluginId,f=Object(r.a)(e,["docId","activeSidebarClassName","label","docsPluginId"]);const h=Object(s.useActiveDocContext)(m),b=h.activeVersion,v=h.activeDoc,p=Object(u.useDocsPreferredVersion)(m).preferredVersion,g=Object(s.useLatestVersion)(m),E=null!==(t=null!=b?b:p)&&void 0!==t?t:g,k=E.docs.find((e=>e.id===a));if(!k)throw new Error("DocNavbarItem: couldn't find any doc with id="+a+" in version "+E.name+".\nAvailable docIds=\n- "+E.docs.join("\n- "));return l.a.createElement(o.a,Object(n.a)({exact:!0},f,{className:Object(i.a)(f.className,{[c]:v&&v.sidebar===k.sidebar}),label:null!=d?d:k.id,to:k.path}))}},296:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(0),r=a.n(n),c=a(8),l=a(204);const o="light",s="dark",i=e=>e===s?s:o,u=e=>{try{localStorage.setItem("theme",i(e))}catch(t){console.error(t)}};var d=()=>{const e=Object(l.useThemeConfig)().colorMode,t=e.defaultMode,a=e.disableSwitch,r=e.respectPrefersColorScheme,d=Object(n.useState)((e=>c.a.canUseDOM?i(document.documentElement.getAttribute("data-theme")):i(e))(t)),m=d[0],f=d[1],h=Object(n.useCallback)((()=>{f(o),u(o)}),[]),b=Object(n.useCallback)((()=>{f(s),u(s)}),[]);return Object(n.useEffect)((()=>{document.documentElement.setAttribute("data-theme",i(m))}),[m]),Object(n.useEffect)((()=>{if(!a)try{const e=localStorage.getItem("theme");null!==e&&f(i(e))}catch(e){console.error(e)}}),[f]),Object(n.useEffect)((()=>{a&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((({matches:e})=>{f(e?s:o)}))}),[]),{isDarkTheme:m===s,setLightTheme:h,setDarkTheme:b}},m=a(241);var f=function(e){const t=d(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(m.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)};const h="docusaurus.tab.";var b=()=>{const e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)(((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith(h)){e[a.substring(h.length)]=localStorage.getItem(a)}}a(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:t,setTabGroupChoices:(e,t)=>{a((a=>Object.assign({},a,{[e]:t}))),r(e,t)}}};const v="docusaurus.announcement.dismiss",p="docusaurus.announcement.id";var g=()=>{const e=Object(l.useThemeConfig)().announcementBar,t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useCallback)((()=>{localStorage.setItem(v,"true"),r(!0)}),[]);return Object(n.useEffect)((()=>{if(!e)return;const t=e.id;let a=localStorage.getItem(p);"annoucement-bar"===a&&(a="announcement-bar");const n=t!==a;localStorage.setItem(p,t),n&&localStorage.setItem(v,"false"),(n||"false"===localStorage.getItem(v))&&r(!1)}),[]),{isAnnouncementBarClosed:a,closeAnnouncementBar:c}},E=a(231);var k=function(e){const t=b(),a=t.tabGroupChoices,n=t.setTabGroupChoices,c=g(),l=c.isAnnouncementBarClosed,o=c.closeAnnouncementBar;return r.a.createElement(E.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:l,closeAnnouncementBar:o}},e.children)};function O({children:e}){return r.a.createElement(f,null,r.a.createElement(k,null,r.a.createElement(l.DocsPreferredVersionContextProvider,null,e)))}},300:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(266),l=a(223);t.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},r.a.createElement(l.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.a.createElement("p",null,r.a.createElement(l.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.a.createElement("p",null,r.a.createElement(l.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);