"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[5158],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),f=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=f(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=f(n),u=i,m=s["".concat(p,".").concat(u)]||s[u]||d[u]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var f=2;f<a;f++)o[f]=n[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9657:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={id:"gamification",title:"Gamification"},p=void 0,f={unversionedId:"graphql-api/references/objects/gamification",id:"graphql-api/references/objects/gamification",title:"Gamification",description:"No description",source:"@site/doc-developer/4-graphql-api/references/objects/gamification.mdx",sourceDirName:"4-graphql-api/references/objects",slug:"/graphql-api/references/objects/gamification",permalink:"/developer/graphql-api/references/objects/gamification",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/doc-developer/4-graphql-api/references/objects/gamification.mdx",tags:[],version:"current",lastUpdatedBy:"oyyblin",lastUpdatedAt:1650307919,formattedLastUpdatedAt:"4/18/2022",frontMatter:{id:"gamification",title:"Gamification"},sidebar:"docs",previous:{title:"GamificationNFT",permalink:"/developer/graphql-api/references/objects/gamification-nft"},next:{title:"LinkCarousel",permalink:"/developer/graphql-api/references/objects/link-carousel"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4},{value:"<code>type</code> (<code>GamificationType</code>)",id:"type-gamificationtype",level:4},{value:"<code>nfts</code> (<code>GamificationNFT</code>)",id:"nfts-gamificationnft",level:4},{value:"<code>forgeConfig</code> (<code>ForgeConfig</code>)",id:"forgeconfig-forgeconfig",level:4},{value:"<code>airdrop</code> (<code>Airdrop</code>)",id:"airdrop-airdrop",level:4}],s={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Gamification {\n  id: ID!\n  type: GamificationType!\n  nfts: [GamificationNFT!]!\n  forgeConfig: ForgeConfig\n  airdrop: Airdrop\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"type-gamificationtype"},(0,a.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/enums/gamification-type"},(0,a.kt)("inlineCode",{parentName:"a"},"GamificationType")),")"),(0,a.kt)("h4",{id:"nfts-gamificationnft"},(0,a.kt)("inlineCode",{parentName:"h4"},"nfts")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/objects/gamification-nft"},(0,a.kt)("inlineCode",{parentName:"a"},"GamificationNFT")),")"),(0,a.kt)("h4",{id:"forgeconfig-forgeconfig"},(0,a.kt)("inlineCode",{parentName:"h4"},"forgeConfig")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/objects/forge-config"},(0,a.kt)("inlineCode",{parentName:"a"},"ForgeConfig")),")"),(0,a.kt)("h4",{id:"airdrop-airdrop"},(0,a.kt)("inlineCode",{parentName:"h4"},"airdrop")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/objects/airdrop"},(0,a.kt)("inlineCode",{parentName:"a"},"Airdrop")),")"))}u.isMDXComponent=!0}}]);