"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[9815],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||i;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3390:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],p={id:"campaign",title:"campaign"},c=void 0,u={unversionedId:"graphql-api/references/mutations/campaign",id:"graphql-api/references/mutations/campaign",title:"campaign",description:"No description",source:"@site/doc-developer/5-graphql-api/references/mutations/campaign.mdx",sourceDirName:"5-graphql-api/references/mutations",slug:"/graphql-api/references/mutations/campaign",permalink:"/developer/graphql-api/references/mutations/campaign",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main",tags:[],version:"current",lastUpdatedAt:1652216898,formattedLastUpdatedAt:"5/10/2022",frontMatter:{id:"campaign",title:"campaign"},sidebar:"docs",previous:{title:"Node",permalink:"/developer/graphql-api/references/interfaces/node"},next:{title:"credentialItems",permalink:"/developer/graphql-api/references/mutations/credential-items"}},l={},m=[{value:"Arguments",id:"arguments",level:3},{value:"<code>input</code> (<code>MutateCampaignInput</code>)",id:"input-mutatecampaigninput",level:4},{value:"Type",id:"type",level:3},{value:"<code>Campaign</code>",id:"campaign",level:4}],s={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"campaign(\n  input: MutateCampaignInput!\n): Campaign!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"input-mutatecampaigninput"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/inputs/mutate-campaign-input"},(0,i.kt)("inlineCode",{parentName:"a"},"MutateCampaignInput")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"campaign"},(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/campaign"},(0,i.kt)("inlineCode",{parentName:"a"},"Campaign"))))}f.isMDXComponent=!0}}]);