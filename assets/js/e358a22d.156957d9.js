"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[2244],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=o(n),d=r,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return n?a.createElement(f,p(p({ref:t},l),{},{components:n})):a.createElement(f,p({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,p[1]=u;for(var o=2;o<i;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5553:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),p=["components"],u={id:"mutate-campaign-input",title:"MutateCampaignInput"},c=void 0,o={unversionedId:"graphql-api/references/inputs/mutate-campaign-input",id:"graphql-api/references/inputs/mutate-campaign-input",title:"MutateCampaignInput",description:"No description",source:"@site/doc-developer/4-graphql-api/references/inputs/mutate-campaign-input.mdx",sourceDirName:"4-graphql-api/references/inputs",slug:"/graphql-api/references/inputs/mutate-campaign-input",permalink:"/developer/graphql-api/references/inputs/mutate-campaign-input",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/doc-developer/4-graphql-api/references/inputs/mutate-campaign-input.mdx",tags:[],version:"current",lastUpdatedAt:1650334480,formattedLastUpdatedAt:"4/19/2022",frontMatter:{id:"mutate-campaign-input",title:"MutateCampaignInput"},sidebar:"docs",previous:{title:"ListSpaceStationInput",permalink:"/developer/graphql-api/references/inputs/list-space-station-input"},next:{title:"MutateCredInput",permalink:"/developer/graphql-api/references/inputs/mutate-cred-input"}},l={},m=[{value:"Fields",id:"fields",level:3},{value:"<code>auth</code> (<code>Auth</code>)",id:"auth-auth",level:4},{value:"<code>campaign</code> (<code>CampaignInput</code>)",id:"campaign-campaigninput",level:4},{value:"<code>nftTemplates</code> (<code>NFTTemplateInput</code>)",id:"nfttemplates-nfttemplateinput",level:4},{value:"<code>children</code> (<code>Int</code>)",id:"children-int",level:4}],s={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input MutateCampaignInput {\n  auth: Auth!\n  campaign: CampaignInput!\n  nftTemplates: [NFTTemplateInput!]\n  children: [Int!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"auth-auth"},(0,i.kt)("inlineCode",{parentName:"h4"},"auth")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/inputs/auth"},(0,i.kt)("inlineCode",{parentName:"a"},"Auth")),")"),(0,i.kt)("h4",{id:"campaign-campaigninput"},(0,i.kt)("inlineCode",{parentName:"h4"},"campaign")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/inputs/campaign-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CampaignInput")),")"),(0,i.kt)("h4",{id:"nfttemplates-nfttemplateinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"nftTemplates")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/inputs/nfttemplate-input"},(0,i.kt)("inlineCode",{parentName:"a"},"NFTTemplateInput")),")"),(0,i.kt)("h4",{id:"children-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"children")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))}d.isMDXComponent=!0}}]);