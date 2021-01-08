(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{119:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),c=a(146),i=a(22),o=a(250),m=a(258);var s=function(e){var t=e.metadata;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},d=a(244);var u=function(){var e=Object(i.default)().siteConfig.title,t=Object(d.useActivePlugin)({failfast:!0}).pluginId,a=Object(c.useDocsPreferredVersion)(t).savePreferredVersionName,n=Object(d.useActiveVersion)(t),r=Object(d.useDocVersionSuggestions)(t),o=r.latestDocSuggestion,s=r.latestVersionSuggestion;if(!s)return l.a.createElement(l.a.Fragment,null);var u,v=null!=o?o:(u=s).docs.find((function(e){return e.id===u.mainDocId}));return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===n.name?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,n.label)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,n.label),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(m.a,{to:v.path,onClick:function(){return a(s.name)}},"latest version"))," ","(",s.label,")."))},v=a(168);var E=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],c=l[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,i=!1,o=document.getElementsByClassName(e);l<o.length&&!i;){var m=o[l],s=m.href,d=decodeURIComponent(s.substring(s.indexOf("#")+1));n.id===d&&(r&&r.classList.remove(t),m.classList.add(t),c(m),i=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},g=a(75),f=a.n(g),p="table-of-contents__link";function b(e){var t=e.toc,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:p,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(b,{isChild:!0,toc:e.children}))}))):null}var N=function(e){var t=e.toc;return E(p,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(v.a)(f.a.tableOfContents,"thin-scrollbar")},l.a.createElement(b,{toc:t}))},h=a(3),_=a(7),O=a(76),j=a.n(O),w=function(e){var t=e.className,a=Object(_.a)(e,["className"]);return l.a.createElement("svg",Object(h.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(v.a)(j.a.iconEdit,t)},a),l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},k=a(77),y=a.n(k);t.default=function(e){var t=Object(i.default)().siteConfig.url,a=e.content,n=a.metadata,m=a.frontMatter,E=m.image,g=m.keywords,f=m.hide_title,p=m.hide_table_of_contents,b=n.description,h=n.title,_=n.permalink,O=n.editUrl,j=n.lastUpdatedAt,k=n.lastUpdatedBy,C=Object(d.useActivePlugin)({failfast:!0}).pluginId,x=Object(d.useVersions)(C),L=Object(d.useActiveVersion)(C),I=x.length>1,A=Object(c.useTitleFormatter)(h),S=Object(o.a)(E,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,A),l.a.createElement("meta",{property:"og:title",content:A}),b&&l.a.createElement("meta",{name:"description",content:b}),b&&l.a.createElement("meta",{property:"og:description",content:b}),g&&g.length&&l.a.createElement("meta",{name:"keywords",content:g.join(",")}),E&&l.a.createElement("meta",{property:"og:image",content:S}),E&&l.a.createElement("meta",{name:"twitter:image",content:S}),E&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+h}),_&&l.a.createElement("meta",{property:"og:url",content:t+_}),_&&l.a.createElement("link",{rel:"canonical",href:t+_})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(v.a)("col",{[y.a.docItemCol]:!p})},l.a.createElement(u,null),l.a.createElement("div",{className:y.a.docItemContainer},l.a.createElement("article",null,I&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",L.label)),!f&&l.a.createElement("header",null,l.a.createElement("h1",{className:y.a.docTitle},h)),l.a.createElement("div",{className:"markdown"},l.a.createElement(a,null))),(O||j||k)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},O&&l.a.createElement("a",{href:O,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(w,null),"Edit this page")),(j||k)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",j&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*j).toISOString(),className:y.a.docLastUpdatedAt},new Date(1e3*j).toLocaleDateString()),k&&" "),k&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,k)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(s,{metadata:n})))),!p&&a.toc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(N,{toc:a.toc}))))}}}]);