"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[3202],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return g}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,f=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return n?t.createElement(f,o(o({ref:r},s),{},{components:n})):t.createElement(f,o({ref:r},s))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1496:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var t=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"cred-subgraph",title:"CredSubgraph"},l=void 0,p={unversionedId:"graphql-api/references/objects/cred-subgraph",id:"graphql-api/references/objects/cred-subgraph",title:"CredSubgraph",description:"No description",source:"@site/docs-developer/4-graphql-api/references/objects/cred-subgraph.mdx",sourceDirName:"4-graphql-api/references/objects",slug:"/graphql-api/references/objects/cred-subgraph",permalink:"/galaxy-docs/developer/graphql-api/references/objects/cred-subgraph",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/docs-developer/4-graphql-api/references/objects/cred-subgraph.mdx",tags:[],version:"current",frontMatter:{id:"cred-subgraph",title:"CredSubgraph"},sidebar:"docs",previous:{title:"CredItemEdge",permalink:"/galaxy-docs/developer/graphql-api/references/objects/cred-item-edge"},next:{title:"Cred",permalink:"/galaxy-docs/developer/graphql-api/references/objects/cred"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>endpoint</code> (<code>String</code>)",id:"endpoint-string",level:4},{value:"<code>query</code> (<code>String</code>)",id:"query-string",level:4},{value:"<code>expression</code> (<code>String</code>)",id:"expression-string",level:4},{value:"<code>eligible</code> (<code>Int</code>)",id:"eligible-int",level:4}],u={toc:d};function g(e){var r=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CredSubgraph {\n  endpoint: String!\n  query: String!\n  expression: String!\n  eligible(\n  address: String!\n): Int!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"endpoint-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"endpoint")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"query-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"query")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"expression-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"expression")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"eligible-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"eligible")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"address-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"address")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))))}g.isMDXComponent=!0}}]);