"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[6971],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3367:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],i={id:"campaign-carousel",title:"CampaignCarousel"},l=void 0,p={unversionedId:"graphql-api/references/objects/campaign-carousel",id:"graphql-api/references/objects/campaign-carousel",title:"CampaignCarousel",description:"No description",source:"@site/docs-developer/4-graphql-api/references/objects/campaign-carousel.mdx",sourceDirName:"4-graphql-api/references/objects",slug:"/graphql-api/references/objects/campaign-carousel",permalink:"/galaxy-docs/developer/graphql-api/references/objects/campaign-carousel",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/docs-developer/4-graphql-api/references/objects/campaign-carousel.mdx",tags:[],version:"current",frontMatter:{id:"campaign-carousel",title:"CampaignCarousel"},sidebar:"docs",previous:{title:"Announcement",permalink:"/galaxy-docs/developer/graphql-api/references/objects/announcement"},next:{title:"CampaignConnection",permalink:"/galaxy-docs/developer/graphql-api/references/objects/campaign-connection"}},s={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>objectType</code> (<code>CarouselObjectType</code>)",id:"objecttype-carouselobjecttype",level:4},{value:"<code>objectID</code> (<code>Int</code>)",id:"objectid-int",level:4},{value:"<code>object</code> (<code>Campaign</code>)",id:"object-campaign",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:"<code>Carousel</code>",id:"carousel",level:4}],d={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CampaignCarousel implements Carousel {\n  objectType: CarouselObjectType!\n  objectID: Int!\n  object: Campaign!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"objecttype-carouselobjecttype"},(0,o.kt)("inlineCode",{parentName:"h4"},"objectType")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/enums/carousel-object-type"},(0,o.kt)("inlineCode",{parentName:"a"},"CarouselObjectType")),")"),(0,o.kt)("h4",{id:"objectid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"objectID")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("h4",{id:"object-campaign"},(0,o.kt)("inlineCode",{parentName:"h4"},"object")," (",(0,o.kt)("a",{parentName:"h4",href:"../../references/objects/campaign"},(0,o.kt)("inlineCode",{parentName:"a"},"Campaign")),")"),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"carousel"},(0,o.kt)("a",{parentName:"h4",href:"../../references/interfaces/carousel"},(0,o.kt)("inlineCode",{parentName:"a"},"Carousel"))))}f.isMDXComponent=!0}}]);