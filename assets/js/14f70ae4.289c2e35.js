"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[939],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(r),f=i,h=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3169:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],c={id:"list-nftinput",title:"ListNFTInput"},s=void 0,d={unversionedId:"graphql-api/references/inputs/list-nftinput",id:"graphql-api/references/inputs/list-nftinput",title:"ListNFTInput",description:"No description",source:"@site/docs-developer/4-graphql-api/references/inputs/list-nftinput.mdx",sourceDirName:"4-graphql-api/references/inputs",slug:"/graphql-api/references/inputs/list-nftinput",permalink:"/galaxy-docs/developer/graphql-api/references/inputs/list-nftinput",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/docs-developer/4-graphql-api/references/inputs/list-nftinput.mdx",tags:[],version:"current",frontMatter:{id:"list-nftinput",title:"ListNFTInput"},sidebar:"docs",previous:{title:"ListNFTCoreInput",permalink:"/galaxy-docs/developer/graphql-api/references/inputs/list-nftcore-input"},next:{title:"ListParticipationInput",permalink:"/galaxy-docs/developer/graphql-api/references/inputs/list-participation-input"}},l={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>nftCoreAddress</code> (<code>String</code>)",id:"nftcoreaddress-string",level:4},{value:"<code>orderBy</code> (<code>ListNFTOrderBy</code>)",id:"orderby-listnftorderby",level:4},{value:"<code>order</code> (<code>ListOrder</code>)",id:"order-listorder",level:4},{value:"<code>first</code> (<code>Int</code>)",id:"first-int",level:4},{value:"<code>after</code> (<code>String</code>)",id:"after-string",level:4},{value:"<code>chain</code> (<code>Chain</code>)",id:"chain-chain",level:4},{value:"<code>daoID</code> (<code>Int</code>)",id:"daoid-int",level:4},{value:"<code>categories</code> (<code>String</code>)",id:"categories-string",level:4}],u={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input ListNFTInput {\n  nftCoreAddress: String\n  orderBy: ListNFTOrderBy!\n  order: ListOrder!\n  first: Int\n  after: String\n  chain: Chain\n  daoID: Int\n  categories: [String!]\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"nftcoreaddress-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"nftCoreAddress")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"orderby-listnftorderby"},(0,a.kt)("inlineCode",{parentName:"h4"},"orderBy")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/enums/list-nftorder-by"},(0,a.kt)("inlineCode",{parentName:"a"},"ListNFTOrderBy")),")"),(0,a.kt)("h4",{id:"order-listorder"},(0,a.kt)("inlineCode",{parentName:"h4"},"order")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/enums/list-order"},(0,a.kt)("inlineCode",{parentName:"a"},"ListOrder")),")"),(0,a.kt)("h4",{id:"first-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"first")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"after-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"after")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"chain-chain"},(0,a.kt)("inlineCode",{parentName:"h4"},"chain")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/enums/chain"},(0,a.kt)("inlineCode",{parentName:"a"},"Chain")),")"),(0,a.kt)("h4",{id:"daoid-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"daoID")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"categories-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"categories")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))}f.isMDXComponent=!0}}]);