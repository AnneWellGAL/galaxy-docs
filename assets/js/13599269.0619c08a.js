"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[9534],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),f=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=f(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=f(t),d=o,g=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return t?n.createElement(g,a(a({ref:r},p),{},{components:t})):n.createElement(g,a({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var f=2;f<i;f++)a[f]=t[f];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},3412:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return u}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={id:"forge-config",title:"ForgeConfig"},l=void 0,f={unversionedId:"graphql-api/references/objects/forge-config",id:"graphql-api/references/objects/forge-config",title:"ForgeConfig",description:"No description",source:"@site/doc-developer/4-graphql-api/references/objects/forge-config.mdx",sourceDirName:"4-graphql-api/references/objects",slug:"/graphql-api/references/objects/forge-config",permalink:"/developer/graphql-api/references/objects/forge-config",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/doc-developer/4-graphql-api/references/objects/forge-config.mdx",tags:[],version:"current",lastUpdatedAt:1650334480,formattedLastUpdatedAt:"4/19/2022",frontMatter:{id:"forge-config",title:"ForgeConfig"},sidebar:"docs",previous:{title:"ExtLinkResp",permalink:"/developer/graphql-api/references/objects/ext-link-resp"},next:{title:"ForgeNFT",permalink:"/developer/graphql-api/references/objects/forge-nft"}},p={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>minNFTCount</code> (<code>Int</code>)",id:"minnftcount-int",level:4},{value:"<code>maxNFTCount</code> (<code>Int</code>)",id:"maxnftcount-int",level:4},{value:"<code>requiredNFTs</code> (<code>ForgeNFT</code>)",id:"requirednfts-forgenft",level:4}],s={toc:u};function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ForgeConfig {\n  minNFTCount: Int!\n  maxNFTCount: Int!\n  requiredNFTs: [ForgeNFT!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"minnftcount-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"minNFTCount")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"maxnftcount-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"maxNFTCount")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"requirednfts-forgenft"},(0,i.kt)("inlineCode",{parentName:"h4"},"requiredNFTs")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/forge-nft"},(0,i.kt)("inlineCode",{parentName:"a"},"ForgeNFT")),")"))}d.isMDXComponent=!0}}]);