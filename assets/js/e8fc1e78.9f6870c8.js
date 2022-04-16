"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[518],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=s(t),d=i,y=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return t?n.createElement(y,c(c({ref:r},l),{},{components:t})):n.createElement(y,c({ref:r},l))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,c=new Array(a);c[0]=f;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9839:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=t(7462),i=t(3366),a=(t(7294),t(3905)),c=["components"],o={id:"specified-by",title:"specifiedBy"},p=void 0,s={unversionedId:"graphql-api/references/directives/specified-by",id:"graphql-api/references/directives/specified-by",title:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",source:"@site/docs-developer/4-graphql-api/references/directives/specified-by.mdx",sourceDirName:"4-graphql-api/references/directives",slug:"/graphql-api/references/directives/specified-by",permalink:"/galaxy-docs/developer/graphql-api/references/directives/specified-by",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/docs-developer/4-graphql-api/references/directives/specified-by.mdx",tags:[],version:"current",frontMatter:{id:"specified-by",title:"specifiedBy"},sidebar:"docs",previous:{title:"skip",permalink:"/galaxy-docs/developer/graphql-api/references/directives/skip"},next:{title:"AirdropType",permalink:"/galaxy-docs/developer/graphql-api/references/enums/airdrop-type"}},l={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>url</code> (<code>String</code>)",id:"url-string",level:4}],f={toc:u};function d(e){var r=e.components,t=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Exposes a URL that specifies the behavior of this scalar."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @specifiedBy(\n  url: String!\n)\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"url-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"url")," (",(0,a.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"The URL that specifies the behavior of this scalar."))}d.isMDXComponent=!0}}]);