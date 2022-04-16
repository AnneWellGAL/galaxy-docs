"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[4857],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(t),f=o,g=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return t?r.createElement(g,c(c({ref:n},l),{},{components:t})):r.createElement(g,c({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var d=2;d<a;d++)c[d]=t[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},132:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={id:"address-connection",title:"AddressConnection"},s=void 0,d={unversionedId:"graphql-api/references/objects/address-connection",id:"graphql-api/references/objects/address-connection",title:"AddressConnection",description:"No description",source:"@site/docs-developer/4-graphql-api/references/objects/address-connection.mdx",sourceDirName:"4-graphql-api/references/objects",slug:"/graphql-api/references/objects/address-connection",permalink:"/galaxy-docs/developer/graphql-api/references/objects/address-connection",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/docs-developer/4-graphql-api/references/objects/address-connection.mdx",tags:[],version:"current",frontMatter:{id:"address-connection",title:"AddressConnection"},sidebar:"docs",previous:{title:"verifyTwitterAccount",permalink:"/galaxy-docs/developer/graphql-api/references/mutations/verify-twitter-account"},next:{title:"AddressEdge",permalink:"/galaxy-docs/developer/graphql-api/references/objects/address-edge"}},l={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>totalCount</code> (<code>Int</code>)",id:"totalcount-int",level:4},{value:"<code>edges</code> (<code>AddressEdge</code>)",id:"edges-addressedge",level:4},{value:"<code>pageInfo</code> (<code>PageInfo</code>)",id:"pageinfo-pageinfo",level:4},{value:"<code>list</code> (<code>Address</code>)",id:"list-address",level:4}],u={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddressConnection {\n  totalCount: Int!\n  edges: [AddressEdge!]!\n  pageInfo: PageInfo!\n  list: [Address!]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"totalcount-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"totalCount")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"edges-addressedge"},(0,a.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/objects/address-edge"},(0,a.kt)("inlineCode",{parentName:"a"},"AddressEdge")),")"),(0,a.kt)("h4",{id:"pageinfo-pageinfo"},(0,a.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/objects/page-info"},(0,a.kt)("inlineCode",{parentName:"a"},"PageInfo")),")"),(0,a.kt)("h4",{id:"list-address"},(0,a.kt)("inlineCode",{parentName:"h4"},"list")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/objects/address"},(0,a.kt)("inlineCode",{parentName:"a"},"Address")),")"))}f.isMDXComponent=!0}}]);