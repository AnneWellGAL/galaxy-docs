"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[3268],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=o,f=m["".concat(l,".").concat(g)]||m[g]||c[g]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7422:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="Custom Voting w/ Galaxy NFT",p={unversionedId:"voting/voting",id:"voting/voting",title:"Custom Voting w/ Galaxy NFT",description:"We utilize Snapshot for NFT voting, check the doc Home - snapshot if you are unfamiliar with snapshot voting.",source:"@site/doc-guides/4-voting/voting.md",sourceDirName:"4-voting",slug:"/voting/voting",permalink:"/guide/voting/voting",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/doc-guides/4-voting/voting.md",tags:[],version:"current",lastUpdatedAt:1651380386,formattedLastUpdatedAt:"5/1/2022",frontMatter:{},sidebar:"docs",previous:{title:"Link Your Solana Wallet",permalink:"/guide/setting-up-galaxy-id/Link your Solana Wallet"}},u={},c=[],m={toc:c};function g(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-voting-w-galaxy-nft"},"Custom Voting w/ Galaxy NFT"),(0,a.kt)("p",null,"We utilize ",(0,a.kt)("a",{parentName:"p",href:"https://snapshot.org/#/"},"Snapshot")," for NFT voting, check the doc ",(0,a.kt)("a",{parentName:"p",href:"https://docs.snapshot.org/"},"Home - snapshot")," if you are unfamiliar with snapshot voting."),(0,a.kt)("p",null,"To use NFTs claimed from Galaxy to vote, you can plug \u201cgalaxy-nft-with-score\u201d strategy into your proposal to do so. For testing the strategy, please use the playground: ",(0,a.kt)("a",{parentName:"p",href:"https://snapshot.org/#/playground/galaxy-nft-with-score"},"https://snapshot.org/#/playground/galaxy-nft-with-score")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose chain: we only support Polygon for now.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Input Snapshot: it\u2019s same as block number, NFT ownership is count for that block number, so the voting power won\u2019t be changed if NFT is transferred after block number.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the strategy from your Snapshot Space admin"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"snapshot-vote.png",src:n(3037).Z,width:"2254",height:"1270"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Setup strategy parameters:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "symbol": "SUPA", // Voting power unit shows in proposal\n  "params": {\n    "NFTCoreAddress": [\n      "0x86835C3B8fA69f8F31C72477C7776A3B61dbAC92" // NFT contract address\n    ],\n    "blacklistNFTID": [\n      "4" // NFT token IDs that won\'t have any voting power of the NFT contract\n    ],\n    "configs": [\n      {\n        "name": "Basic", // NFT name of Galaxy\n        "cumulative": false, // If user have multiple same NFT, does the voting power cumulate.\n        "votingPower": 1 // Voting power that this NFT has\n      },\n      {\n        "name": "SuperUMAn",\n        "cumulative": false,\n        "votingPower": 10\n      },\n      {\n        "name": "UMAster",\n        "cumulative": false,\n        "votingPower": 20\n      },\n      {\n        "name": "Alumni",\n        "cumulative": false,\n        "votingPower": 1\n      }\n    ]\n  }\n}\n\n// In this example\n// If user A has 2 Basic NFT and user B has 1 UMAster and 1 Alumni NFT\n// User A voting power will be 2, User B voting power will be 21\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Addresses: Input some addresses to test how much voting power the address have. You are good to go!"))))}g.isMDXComponent=!0},3037:function(e,t,n){t.Z=n.p+"assets/images/snapshot-vote-c3597a630b6b579c2380a6ed4f9cc947.png"}}]);