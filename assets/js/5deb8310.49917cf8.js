"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[543],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8181:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:11},p="Web Framework",l={unversionedId:"functional-components/webframework",id:"functional-components/webframework",isDocsHomePage:!1,title:"Web Framework",description:"Recommended Components",source:"@site/docs/functional-components/webframework.md",sourceDirName:"functional-components",slug:"/functional-components/webframework",permalink:"/nodejs-reference-architecture/functional-components/webframework",editUrl:"https://github.com/nodeshift/nodejs-reference-architecture/docs/functional-components/webframework.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Template Engines (Server Side)",permalink:"/nodejs-reference-architecture/functional-components/template-engines"},next:{title:"Distributed Tracing",permalink:"/nodejs-reference-architecture/operations/distributed-tracing"}},c=[{value:"Recommended Components",id:"recommended-components",children:[]},{value:"Guidance",id:"guidance",children:[]}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"web-framework"},"Web Framework"),(0,a.kt)("h2",{id:"recommended-components"},"Recommended Components"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Express - ",(0,a.kt)("a",{parentName:"li",href:"https://expressjs.com/"},"https://expressjs.com/"),"\nWith 10 million downloads a month, Express is the most popular backend Node.js web framework.\nBy comparison all of the competitors together have 500k-1m downloads and many of those use Express under the covers.\nIt provides a fast, opinionated, minimalist web framework on top of Node.js")),(0,a.kt)("h2",{id:"guidance"},"Guidance"),(0,a.kt)("p",null,"Express - ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"https://expressjs.com/")," is the recommended general web framework for Node.js based on it's broad use, shallow dependency tree and the available resources for getting started."),(0,a.kt)("p",null,"When deploying Express we have the following additional recommendations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the latest version of the 4.x release line. This version is currently the most suitable for production use.\nWe recommend using ~4.x.y (where x.y reflects the version you start at) in your package.json so that you get patch\nversion updates as you update your application in development. We recommend planned periodic reviews\nto decide when to update to new minor versions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use different ports for different concerns when possible.\nAn application can provide additional endpoints for metrics collection or other concerns. It is recommended that\nthe main port (for example 3000 or 8080) be reserved for business logic and an admin\nport be used for supporting endpoints. This helps to separate out requests to business logic and makes it easier to collect\ndata specific to requests to the business logic.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use an environment variable to define the port for the business logic and for the admin port.\nWe recommend you use ",(0,a.kt)("inlineCode",{parentName:"p"},"PORT")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ADMIN_PORT")," as the names. We also recommend that the default ports be ",(0,a.kt)("inlineCode",{parentName:"p"},"8080")," (business) and ",(0,a.kt)("inlineCode",{parentName:"p"},"9080")," (admin).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Include a liveness and readiness endpoint even if not deploying initially to kubernetes. These endpoints are useful in environments\nother than kubernetes for problem determination and monitoring. See the section on "Health Checks" for more information.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Define global middleware before routes. Not doing so is a common mistake that can result in middleware not running when expected.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use Helmet (",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/helmet"},"https://www.npmjs.com/package/helmet"),") to set HTTP headers for a basic level of protection from some common attacks.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Make testable for application testable by:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Breaking out logic into smaller components and routes"),(0,a.kt)("li",{parentName:"ul"},'Define a "test" entry in the "scripts" section of the package.json for your applications which runs the units tests.'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"See the sections on Logging and Authentication for further recommendations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Leverage ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/cli.html#cli_max_http_header_size_size"},"CLI")," or ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/cli.html#cli_node_options_options"},"NODE")," options to increase HTTP headers size. There may be circumstances when cookies pollute header size beyond the 8KB default limit. For such cases, adding ",(0,a.kt)("inlineCode",{parentName:"p"},"--max-http-header-size=32768")," to command line arguments when running the Node.js script will increase the header size. Alternative method is to leverage NODE_OPTIONS environment variable: ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_OPTIONS='--max-http-header-size=32768'")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When changing the max header size, take note of additional upstream clients. As an example, ingresses such as Nginx or even a CDN such as Akamai may need config changes to support the increased header size.")))))}d.isMDXComponent=!0}}]);