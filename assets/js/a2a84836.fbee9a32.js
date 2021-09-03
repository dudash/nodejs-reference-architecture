"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[343],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||o;return r?a.createElement(d,p(p({ref:t},c),{},{components:r})):a.createElement(d,p({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1157:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),p=["components"],i={sidebar_position:4},l="GraphQL Development",s={unversionedId:"functional-components/graphql",id:"functional-components/graphql",isDocsHomePage:!1,title:"GraphQL Development",description:"GraphQL developement requires number of tools and packages that can be used on both client and server.",source:"@site/docs/functional-components/graphql.md",sourceDirName:"functional-components",slug:"/functional-components/graphql",permalink:"/nodejs-reference-architecture/functional-components/graphql",editUrl:"https://github.com/nodeshift/nodejs-reference-architecture/docs/functional-components/graphql.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Databases",permalink:"/nodejs-reference-architecture/functional-components/databases"},next:{title:"Internationalization",permalink:"/nodejs-reference-architecture/functional-components/internationalization"}},c=[{value:"Recommended Packages for Node.js Server development",id:"recommended-packages-for-nodejs-server-development",children:[]},{value:"Recomended packages for Client side development",id:"recomended-packages-for-client-side-development",children:[]},{value:"Recommended Tools for visualizing GraphQL Schema and Queries",id:"recommended-tools-for-visualizing-graphql-schema-and-queries",children:[]},{value:"Recomended practices for GraphQL Schema development",id:"recomended-practices-for-graphql-schema-development",children:[]},{value:"Guidance",id:"guidance",children:[{value:"GraphQL Server",id:"graphql-server",children:[]},{value:"GraphQL Client",id:"graphql-client",children:[]},{value:"Typescript support",id:"typescript-support",children:[]},{value:"Instrumentation and Tracking",id:"instrumentation-and-tracking",children:[]}]},{value:"Rate Limiting and Query Complexity",id:"rate-limiting-and-query-complexity",children:[]},{value:"Authorization",id:"authorization",children:[{value:"Persisted queries",id:"persisted-queries",children:[]}]}],h={toc:c};function u(e){var t=e.components,r=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"graphql-development"},"GraphQL Development"),(0,o.kt)("p",null,"GraphQL developement requires number of tools and packages that can be used on both client and server.\nOur target will be to provide comprehensive set of the tools to add graphql support for both client and server side applications"),(0,o.kt)("h2",{id:"recommended-packages-for-nodejs-server-development"},"Recommended Packages for Node.js Server development"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"express-graphql")," - ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/graphql-js/express-graphql"},"https://graphql.org/graphql-js/express-graphql"),"\nExposes GraphQL schema using Express.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"GraphQL Tools")," - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools"},"https://github.com/ardatan/graphql-tools"),"\nBuilds GraphQL schema using resolvers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql/dataloader"},"https://github.com/graphql/dataloader"),"\nPrevents from overfetching data when querying relationships"))),(0,o.kt)("h2",{id:"recomended-packages-for-client-side-development"},"Recomended packages for Client side development"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"GraphQL-Tag")," - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apollographql/graphql-tag"},"https://github.com/apollographql/graphql-tag"),"\nCompiles graphql schema on the client (provides browserify plugin)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"URQL")," - ",(0,o.kt)("a",{parentName:"p",href:"https://formidable.com/open-source/urql"},"https://formidable.com/open-source/urql"),"\nGraphQL Client with caching and offline support")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Apollo-Client")," - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apollographql/apollo-client/"},"https://github.com/apollographql/apollo-client/"),"\nAlternative GraphQL Client with caching and offline support")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"GraphQL-Code-Generator")," - ",(0,o.kt)("a",{parentName:"p",href:"https://graphql-code-generator.com"},"https://graphql-code-generator.com"),"\nGenerates TypeScript source code for client and server"))),(0,o.kt)("h2",{id:"recommended-tools-for-visualizing-graphql-schema-and-queries"},"Recommended Tools for visualizing GraphQL Schema and Queries"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"graphiql")," - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"https://github.com/graphql/graphiql"),"\nGraphiql is web application that allows you to build and execute GraphQL queries against your schema")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"GraphQL-CLI")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-cli"},"https://github.com/Urigo/graphql-cli"),"\nSuite of tools and commands for performing various operations on GraphQL schema."))),(0,o.kt)("h2",{id:"recomended-practices-for-graphql-schema-development"},"Recomended practices for GraphQL Schema development"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"GraphQL Rules")," - ",(0,o.kt)("a",{parentName:"p",href:"https://graphql-rules.com/"},"https://graphql-rules.com/"),"\nSet of recomendations for building proper schema")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"GraphQL CRUD")," - ",(0,o.kt)("a",{parentName:"p",href:"https://graphqlcrud.org"},"https://graphqlcrud.org"),"\nSet of rules and generators to automate building GraphQL schema"))),(0,o.kt)("h2",{id:"guidance"},"Guidance"),(0,o.kt)("p",null,"When building GraphQL API from scratch we recomend using reference GraphQL-js reference implementation which was\nproven to be the most performant and have continous support from community. Entire development is currently backed by Linux foundation."),(0,o.kt)("h3",{id:"graphql-server"},"GraphQL Server"),(0,o.kt)("p",null,"For GraphQL Server we recomend using GraphQL-Express for exposing GraphQL APIs over the network and GraphQL-Tools to build GraphQL Schema:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools#example"},"https://github.com/ardatan/graphql-tools#example")),(0,o.kt)("p",null,"Developers can use top level database query languages.\nWe recomend using Knex(",(0,o.kt)("a",{parentName:"p",href:"http://knexjs.org/"},"http://knexjs.org/"),") for performing queries from GraphQL to relational databases."),(0,o.kt)("p",null,'If your GraphQL Schema contains relationships that can lead to "N+1 Problem", please consider using DataLoader library.'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql/dataloader"},"https://github.com/graphql/dataloader")),(0,o.kt)("p",null,"Usage of the dataloader will be specific to your database/ORM solution."),(0,o.kt)("h3",{id:"graphql-client"},"GraphQL Client"),(0,o.kt)("p",null,"For GraphQL client we recomend URQL that can work with React and any other JavaScript based library."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://formidable.com/open-source/urql"},"https://formidable.com/open-source/urql")),(0,o.kt)("p",null,"When using module bundler we strongly recomend to compile your graphql queries using GraphQL-Tag:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apollographql/graphql-tag"},"https://github.com/apollographql/graphql-tag")),(0,o.kt)("h3",{id:"typescript-support"},"Typescript support"),(0,o.kt)("p",null,"If you use typescript in your project we recomend GraphQL-Code-Generator to generate typings for both client and server:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://graphql-code-generator.com"},"https://graphql-code-generator.com")),(0,o.kt)("h3",{id:"instrumentation-and-tracking"},"Instrumentation and Tracking"),(0,o.kt)("p",null,"For instrumentation and tracking we recomend using official OpenTelemetry package"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@opentelemetry/instrumentation-graphql"},"https://www.npmjs.com/package/@opentelemetry/instrumentation-graphql")),(0,o.kt)("h2",{id:"rate-limiting-and-query-complexity"},"Rate Limiting and Query Complexity"),(0,o.kt)("p",null,"When building GraphQL API we often need to restrict it in terms of complexity and query rate."),(0,o.kt)("p",null,"For rejecting complex queries and detecting possible API missuse we recomend using"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/slicknode/graphql-query-complexity"},"https://github.com/slicknode/graphql-query-complexity")),(0,o.kt)("p",null,"For building fixed window rate limiting middleware for GraphQL we recomend"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ravangen/graphql-rate-limit"},"https://github.com/ravangen/graphql-rate-limit")),(0,o.kt)("h2",{id:"authorization"},"Authorization"),(0,o.kt)("p",null,"When building GraphQL we can build our authorization logic inside resolvers.\nDevelopers can use any library or solution that is specific to their infrastructure.\nWe recomend to follow official authorization guide:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/learn/authorization"},"https://graphql.org/learn/authorization")),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"Keycloak SSO")," users we recomend library that provides helpers and GraphQL directives for authorization and authentication:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/aerogear/keycloak-connect-graphql"},"https://github.com/aerogear/keycloak-connect-graphql")),(0,o.kt)("h3",{id:"persisted-queries"},"Persisted queries"),(0,o.kt)("p",null,"Persisted queries are mechanism to improve performance by utilizing already cached and well known queries.\nThose queries can be also later hosted on the CDN."),(0,o.kt)("p",null,"For persisted queries we can use approaches that are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dynamic (no need to compile queries on client as server caches them)"),(0,o.kt)("li",{parentName:"ul"},"Static (requires client side compilation)")),(0,o.kt)("p",null,"For static persited queries we recomend\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/valu-digital/graphql-codegen-persisted-query-ids"},"https://github.com/valu-digital/graphql-codegen-persisted-query-ids")),(0,o.kt)("p",null,"For dynamic persisted queries we recomend"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/apollo-server/performance/apq/"},"Apollo APQs")," which needs ",(0,o.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/apollo-server/"},"Apollo server"))))}u.isMDXComponent=!0}}]);