"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[2763],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(f,s(s({ref:t},l),{},{components:n})):i.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4988:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),s=["components"],p={id:"list-campaign-input",title:"ListCampaignInput"},o=void 0,c={unversionedId:"graphql-api/references/inputs/list-campaign-input",id:"graphql-api/references/inputs/list-campaign-input",title:"ListCampaignInput",description:"No description",source:"@site/doc-developer/5-graphql-api/references/inputs/list-campaign-input.mdx",sourceDirName:"5-graphql-api/references/inputs",slug:"/graphql-api/references/inputs/list-campaign-input",permalink:"/developer/graphql-api/references/inputs/list-campaign-input",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main",tags:[],version:"current",lastUpdatedAt:1652216898,formattedLastUpdatedAt:"5/10/2022",frontMatter:{id:"list-campaign-input",title:"ListCampaignInput"},sidebar:"docs",previous:{title:"getPresignURLInput",permalink:"/developer/graphql-api/references/inputs/get-presign-urlinput"},next:{title:"ListCredInput",permalink:"/developer/graphql-api/references/inputs/list-cred-input"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>ids</code> (<code>ID</code>)",id:"ids-id",level:4},{value:"<code>listType</code> (<code>ListType</code>)",id:"listtype-listtype",level:4},{value:"<code>searchString</code> (<code>String</code>)",id:"searchstring-string",level:4},{value:"<code>statuses</code> (<code>CampaignStatus</code>)",id:"statuses-campaignstatus",level:4},{value:"<code>chains</code> (<code>Chain</code>)",id:"chains-chain",level:4},{value:"<code>types</code> (<code>GamificationType</code>)",id:"types-gamificationtype",level:4},{value:"<code>permissions</code> (<code>Permission</code>)",id:"permissions-permission",level:4},{value:"<code>first</code> (<code>Int</code>)",id:"first-int",level:4},{value:"<code>after</code> (<code>String</code>)",id:"after-string",level:4},{value:"<code>status</code> (<code>CampaignStatus</code>)",id:"status-campaignstatus",level:4}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input ListCampaignInput {\n  ids: [ID!]\n  listType: ListType\n  searchString: String\n  statuses: [CampaignStatus!]\n  chains: [Chain!]\n  types: [GamificationType!]\n  permissions: [Permission!]\n  first: Int\n  after: String\n  status: CampaignStatus\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"ids-id"},(0,r.kt)("inlineCode",{parentName:"h4"},"ids")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,r.kt)("h4",{id:"listtype-listtype"},(0,r.kt)("inlineCode",{parentName:"h4"},"listType")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/enums/list-type"},(0,r.kt)("inlineCode",{parentName:"a"},"ListType")),")"),(0,r.kt)("h4",{id:"searchstring-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"searchString")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"statuses-campaignstatus"},(0,r.kt)("inlineCode",{parentName:"h4"},"statuses")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/enums/campaign-status"},(0,r.kt)("inlineCode",{parentName:"a"},"CampaignStatus")),")"),(0,r.kt)("h4",{id:"chains-chain"},(0,r.kt)("inlineCode",{parentName:"h4"},"chains")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/enums/chain"},(0,r.kt)("inlineCode",{parentName:"a"},"Chain")),")"),(0,r.kt)("h4",{id:"types-gamificationtype"},(0,r.kt)("inlineCode",{parentName:"h4"},"types")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/enums/gamification-type"},(0,r.kt)("inlineCode",{parentName:"a"},"GamificationType")),")"),(0,r.kt)("h4",{id:"permissions-permission"},(0,r.kt)("inlineCode",{parentName:"h4"},"permissions")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/enums/permission"},(0,r.kt)("inlineCode",{parentName:"a"},"Permission")),")"),(0,r.kt)("h4",{id:"first-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"first")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("h4",{id:"after-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"after")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"status-campaignstatus"},(0,r.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,r.kt)("a",{parentName:"h4",href:"../../references/enums/campaign-status"},(0,r.kt)("inlineCode",{parentName:"a"},"CampaignStatus")),")"))}m.isMDXComponent=!0}}]);