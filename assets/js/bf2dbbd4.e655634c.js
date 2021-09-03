"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[552],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8267:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={sidebar_position:10},s="Template Engines (Server Side)",p={unversionedId:"functional-components/template-engines",id:"functional-components/template-engines",isDocsHomePage:!1,title:"Template Engines (Server Side)",description:"Recommended packages",source:"@site/docs/functional-components/template-engines.md",sourceDirName:"functional-components",slug:"/functional-components/template-engines",permalink:"/nodejs-reference-architecture/functional-components/template-engines",editUrl:"https://github.com/nodeshift/nodejs-reference-architecture/docs/functional-components/template-engines.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Static assets",permalink:"/nodejs-reference-architecture/functional-components/static-assets"},next:{title:"Web Framework",permalink:"/nodejs-reference-architecture/functional-components/webframework"}},u=[{value:"Recommended packages",id:"recommended-packages",children:[]},{value:"Guidance",id:"guidance",children:[]}],l={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"template-engines-server-side"},"Template Engines (Server Side)"),(0,a.kt)("h2",{id:"recommended-packages"},"Recommended packages"),(0,a.kt)("p",null,"No recommended packages."),(0,a.kt)("h2",{id:"guidance"},"Guidance"),(0,a.kt)("p",null,"Server side templating is no longer common for creating UIs, and has never been\ncommon for implementing microservice APIs."),(0,a.kt)("p",null,"React and Angular have alternatives to templating (Server Side Rendering, SSR)."),(0,a.kt)("p",null,"If a template engine is included in a toolset, then it doesn't have to be\nchosen, the recommendation would be to use the one provided (for example,\n",(0,a.kt)("a",{parentName:"p",href:"https://www.11ty.dev/"},"eleventy")," uses\n",(0,a.kt)("a",{parentName:"p",href:"https://mozilla.github.io/nunjucks/"},"Nunjucks")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"Express")," supports a number of options\nincluding ",(0,a.kt)("a",{parentName:"p",href:"https://ejs.co/"},"ejs"),")."))}m.isMDXComponent=!0}}]);