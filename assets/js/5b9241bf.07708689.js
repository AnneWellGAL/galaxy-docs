"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[3362],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1192:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:2},p="Rate Limit",s={unversionedId:"graphql-api/rate-limit",id:"graphql-api/rate-limit",title:"Rate Limit",description:"To help manage the sheer volume of the requests we receive on our api, limits are placed on the number of requests that can be made. These limits help us provide the reliable and scalable API that our developer community relies on.",source:"@site/doc-developer/5-graphql-api/rate-limit.md",sourceDirName:"5-graphql-api",slug:"/graphql-api/rate-limit",permalink:"/developer/graphql-api/rate-limit",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main",tags:[],version:"current",lastUpdatedAt:1652216898,formattedLastUpdatedAt:"5/10/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Overview",permalink:"/developer/graphql-api/overview"},next:{title:"Examples",permalink:"/developer/graphql-api/examples"}},c={},u=[],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rate-limit"},"Rate Limit"),(0,o.kt)("p",null,"To help manage the sheer volume of the requests we receive on our api, limits are placed on the number of requests that can be made. These limits help us provide the reliable and scalable API that our developer community relies on."),(0,o.kt)("p",null,"The maximum number of requests that are allowed are:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3000 requests/5 minutes")),(0,o.kt)("p",null,"When an application exceeds the rate limit for a given API endpoint, the API will return a HTTP 429 \u201cToo Many Requests\u201d response code."),(0,o.kt)("p",null,"Note that this page is not an exhaustive listing of all Project Galaxy rate limits or rate-limited endpoints, that some users may experience different rate limit thresholds from those shown, and that rate limits are subject to change at any time."))}f.isMDXComponent=!0}}]);