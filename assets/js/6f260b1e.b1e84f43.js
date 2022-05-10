"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[4820],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2314:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],p={id:"preapre-participate-campaign-resp",title:"PreapreParticipateCampaignResp"},c=void 0,s={unversionedId:"graphql-api/references/objects/preapre-participate-campaign-resp",id:"graphql-api/references/objects/preapre-participate-campaign-resp",title:"PreapreParticipateCampaignResp",description:"No description",source:"@site/doc-developer/5-graphql-api/references/objects/preapre-participate-campaign-resp.mdx",sourceDirName:"5-graphql-api/references/objects",slug:"/graphql-api/references/objects/preapre-participate-campaign-resp",permalink:"/developer/graphql-api/references/objects/preapre-participate-campaign-resp",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main",tags:[],version:"current",lastUpdatedAt:1652216898,formattedLastUpdatedAt:"5/10/2022",frontMatter:{id:"preapre-participate-campaign-resp",title:"PreapreParticipateCampaignResp"},sidebar:"docs",previous:{title:"Participation",permalink:"/developer/graphql-api/references/objects/participation"},next:{title:"PresignURLResp",permalink:"/developer/graphql-api/references/objects/presign-urlresp"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>allow</code> (<code>Boolean</code>)",id:"allow-boolean",level:4},{value:"<code>disallowReason</code> (<code>String</code>)",id:"disallowreason-string",level:4},{value:"<code>signature</code> (<code>String</code>)",id:"signature-string",level:4},{value:"<code>spaceStation</code> (<code>String</code>)",id:"spacestation-string",level:4},{value:"<code>mintFuncInfo</code> (<code>FuncInfo</code>)",id:"mintfuncinfo-funcinfo",level:4},{value:"<code>extLinkResp</code> (<code>ExtLinkResp</code>)",id:"extlinkresp-extlinkresp",level:4},{value:"<code>metaTxResp</code> (<code>MetaTxResp</code>)",id:"metatxresp-metatxresp",level:4},{value:"<code>solanaTxResp</code> (<code>SolanaTxResp</code>)",id:"solanatxresp-solanatxresp",level:4}],u={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type PreapreParticipateCampaignResp {\n  allow: Boolean!\n  disallowReason: String\n  signature: String\n  spaceStation: String\n  mintFuncInfo: FuncInfo\n  extLinkResp: ExtLinkResp\n  metaTxResp: MetaTxResp\n  solanaTxResp: SolanaTxResp\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"allow-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"allow")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"disallowreason-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"disallowReason")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"signature-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"signature")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"spacestation-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"spaceStation")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"mintfuncinfo-funcinfo"},(0,i.kt)("inlineCode",{parentName:"h4"},"mintFuncInfo")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/func-info"},(0,i.kt)("inlineCode",{parentName:"a"},"FuncInfo")),")"),(0,i.kt)("h4",{id:"extlinkresp-extlinkresp"},(0,i.kt)("inlineCode",{parentName:"h4"},"extLinkResp")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/ext-link-resp"},(0,i.kt)("inlineCode",{parentName:"a"},"ExtLinkResp")),")"),(0,i.kt)("h4",{id:"metatxresp-metatxresp"},(0,i.kt)("inlineCode",{parentName:"h4"},"metaTxResp")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/meta-tx-resp"},(0,i.kt)("inlineCode",{parentName:"a"},"MetaTxResp")),")"),(0,i.kt)("h4",{id:"solanatxresp-solanatxresp"},(0,i.kt)("inlineCode",{parentName:"h4"},"solanaTxResp")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/solana-tx-resp"},(0,i.kt)("inlineCode",{parentName:"a"},"SolanaTxResp")),")"))}f.isMDXComponent=!0}}]);