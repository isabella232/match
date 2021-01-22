(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),i=(n(0),n(131));const r={id:"introduction",title:"Tokens Introduction",sidebar_label:"Introduction",slug:"/design-tokens/introduction/"},c={unversionedId:"design-tokens/introduction",id:"design-tokens/introduction",isDocsHomePage:!1,title:"Tokens Introduction",description:"Design tokens are tiny pieces of UI information that are used to ensure brand",source:"@site/docs/design-tokens/introduction.mdx",slug:"/design-tokens/introduction/",permalink:"/docs/design-tokens/introduction/",version:"current",sidebar_label:"Introduction",sidebar:"matchDesignSystem",previous:{title:"Develop",permalink:"/docs/getting-started/develop/"},next:{title:"Token List",permalink:"/docs/design-tokens/tokens/"}},s=[{value:"Installation",id:"installation",children:[]},{value:"How to use",id:"how-to-use",children:[]},{value:"Naming Convention",id:"naming-convention",children:[]},{value:"Format",id:"format",children:[]},{value:"Types of Design Tokens",id:"types-of-design-tokens",children:[{value:"Global Tokens",id:"global-tokens",children:[]},{value:"Alias Tokens",id:"alias-tokens",children:[]},{value:"Component-Specific Tokens",id:"component-specific-tokens",children:[]}]}],l={toc:s};function p(e){let t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Design tokens are tiny pieces of UI information that are used to ensure brand\nconsistency and design-engineer collaboration across all properties."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Design tokens and theming is still a ",Object(i.b)("strong",{parentName:"p"},"work in progress"),". Check out the roadmap to learn more!"))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"Run the following command at the root of your project:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"yarn add @twilio-labs/match\n")),Object(i.b)("h2",{id:"how-to-use"},"How to use"),Object(i.b)("p",null,"To use Twilio design tokens, import the appropriate theme provider in the root of your React application."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),'import * as React from "react";\nimport { TwilioTheme } from "@twilio-labs/match/themes";\n\nconst App: React.FC = ({ children }) => <TwilioTheme>{children}</TwilioTheme>;\nexport { App };\n')),Object(i.b)("p",null,"You can then access tokens within a styled component using the ",Object(i.b)("inlineCode",{parentName:"p"},"theme")," prop."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const Component = styled.div`\n  background: ${({ theme }) => theme.colors.brand};\n  text-align: center;\n`;\n")),Object(i.b)("p",null,"Or within a component using the ",Object(i.b)("inlineCode",{parentName:"p"},"useTheme")," hook."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),'import * as React from "react";\nimport { useTheme } from "@twilio-labs/match/themes";\n\nconst Component: React.FC = () => {\n  const theme = useTheme();\n  return <div>{theme.mediaQueries.small}</div>;\n};\n')),Object(i.b)("p",null,"Tokens are grouped into collections that may be accessed via dot notation. For instance, ",Object(i.b)("inlineCode",{parentName:"p"},"theme.fontWeights.thin")," or ",Object(i.b)("inlineCode",{parentName:"p"},"theme.colors.baseBlue"),"."),Object(i.b)("p",null,"Additionally, token names can be accessed with camelcase using the concatenated group and singular names. For instance, ",Object(i.b)("inlineCode",{parentName:"p"},"theme.fontWeightThin")," or ",Object(i.b)("inlineCode",{parentName:"p"},"theme.colorBaseBlue"),"."),Object(i.b)("p",null,"See the complete list of token names on the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/design-tokens/tokens/"}),"tokens page"),"."),Object(i.b)("h2",{id:"naming-convention"},"Naming Convention"),Object(i.b)("p",null,"Every token name on Match starts with its related CSS property such as Font Weight and Media Query and is then followed by the token value."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"JavaScript: ",Object(i.b)("inlineCode",{parentName:"li"},"fontWeights.thin")," or ",Object(i.b)("inlineCode",{parentName:"li"},"fontWeightThin")),Object(i.b)("li",{parentName:"ul"},"CSS: ",Object(i.b)("inlineCode",{parentName:"li"},"--font-weight-thin")),Object(i.b)("li",{parentName:"ul"},"SASS: ",Object(i.b)("inlineCode",{parentName:"li"},"$font-weigh-thin"))),Object(i.b)("h2",{id:"format"},"Format"),Object(i.b)("p",null,"The preferred format for Match design tokens is: ",Object(i.b)("strong",{parentName:"p"},"JavaScript"),". Other supported formats are: ",Object(i.b)("strong",{parentName:"p"},"SASS")," and ",Object(i.b)("strong",{parentName:"p"},"CSS"),"."),Object(i.b)("h2",{id:"types-of-design-tokens"},"Types of Design Tokens"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Token Diagram",src:n(403).default})),Object(i.b)("h3",{id:"global-tokens"},"Global Tokens"),Object(i.b)("p",null,"They are the primitive values in our design system and they are represented by context-agnostic names. Typography, color pallet, animation values are all stored as a global token."),Object(i.b)("h3",{id:"alias-tokens"},"Alias Tokens"),Object(i.b)("p",null,"These tokens relate to a specific context or abstraction. Aliases helps us to communicate the intended purpose of the token and are much effective when a value with a single intent will appear in multiple places."),Object(i.b)("h3",{id:"component-specific-tokens"},"Component-Specific Tokens"),Object(i.b)("p",null,"These type of tokens are an exhaustive representation of every value associated with a component. They often inherit from alias tokens, but are named in such a way that it allows engineering teams to be as specific as possible in applying token in development of the components."))}p.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=o,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},403:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tokens-d8a6b55726e6057742504a2e281686fd.png"}}]);