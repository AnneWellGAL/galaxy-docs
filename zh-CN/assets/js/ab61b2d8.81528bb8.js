"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[6914],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,m=c["".concat(d,".").concat(h)]||c[h]||u[h]||i;return a?n.createElement(m,l(l({ref:t},s),{},{components:a})):n.createElement(m,l({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7994:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={sidebar_label:"Step 2 - Curate Credentials",sidebar_position:4},d="Step 2 - Curate Credentials",p={unversionedId:"dashboard-tutorial/step-2-curate-credentials",id:"dashboard-tutorial/step-2-curate-credentials",title:"Step 2 - Curate Credentials",description:"Supported Credential Data Sources",source:"@site/doc-guides/1-dashboard-tutorial/step-2-curate-credentials.md",sourceDirName:"1-dashboard-tutorial",slug:"/dashboard-tutorial/step-2-curate-credentials",permalink:"/zh-CN/guide/dashboard-tutorial/step-2-curate-credentials",editUrl:"https://crowdin.com/project/docs_galaxy_eco/zh-CN",tags:[],version:"current",lastUpdatedAt:1652216898,formattedLastUpdatedAt:"2022/5/10",sidebarPosition:4,frontMatter:{sidebar_label:"Step 2 - Curate Credentials",sidebar_position:4},sidebar:"docs",previous:{title:"Step 1 - Create a Space",permalink:"/zh-CN/guide/dashboard-tutorial/step-1-create-space"},next:{title:"Step 3 - Deploy NFT Contract",permalink:"/zh-CN/guide/dashboard-tutorial/step-3-deploy-core"}},s={},u=[{value:"Supported Credential Data Sources",id:"supported-credential-data-sources",level:2},{value:"CSV Credential File",id:"csv-credential-file",level:2},{value:"Via Galaxy Dashboard",id:"via-galaxy-dashboard",level:3},{value:"Create/edit CSV Credentials",id:"createedit-csv-credentials",level:4},{value:"Via credential update API",id:"via-credential-update-api",level:3},{value:"Subgraph/GraphQL Credential Endpoint",id:"subgraphgraphql-credential-endpoint",level:2},{value:"REST Credential Endpoint",id:"rest-credential-endpoint",level:2}],c={toc:u};function h(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"step-2---curate-credentials"},"Step 2 - Curate Credentials"),(0,i.kt)("h2",{id:"supported-credential-data-sources"},"Supported Credential Data Sources"),(0,i.kt)("p",null,"Currently we support curating credentials through multiple data sources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CSV file"),(0,i.kt)("li",{parentName:"ul"},"Subgraph endpoint"),(0,i.kt)("li",{parentName:"ul"},"GraphQL endpoint"),(0,i.kt)("li",{parentName:"ul"},"REST endpoint")),(0,i.kt)("h2",{id:"csv-credential-file"},"CSV Credential File"),(0,i.kt)("h3",{id:"via-galaxy-dashboard"},"Via Galaxy Dashboard"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The user can see and select all credentials from any user while creating the space campaign, but on the \u201cCredential\u201d - \u201cMy Credential List\u201d page, the user can only see and edit their own created credential list."),(0,i.kt)("li",{parentName:"ul"},"The user can download the existing whitelist file"),(0,i.kt)("li",{parentName:"ul"},"The user can easily upload addresses in batches at once with the following file requirements:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The file needs to be CSV format (Without Comma)"),(0,i.kt)("li",{parentName:"ul"},"Each address must not be duplicated"),(0,i.kt)("li",{parentName:"ul"},"The file should not contain headers"))),(0,i.kt)("li",{parentName:"ul"},"The user can also create a reference link for credentials as needed.")),(0,i.kt)("h4",{id:"createedit-csv-credentials"},"Create/edit CSV Credentials"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Click "Credential" to go to "My Credential List" page'),(0,i.kt)("li",{parentName:"ol"},'Click "Create New Credential"'),(0,i.kt)("li",{parentName:"ol"},"Fill up the Credential Title"),(0,i.kt)("li",{parentName:"ol"},"Select the deployed Network"),(0,i.kt)("li",{parentName:"ol"},"Upload the CSV file",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Error Alert if CSV file contained duplicated address and invalid address"))),(0,i.kt)("li",{parentName:"ol"},"Fill up the Credential Description"),(0,i.kt)("li",{parentName:"ol"},"Fill up the reference link (If needed)"),(0,i.kt)("li",{parentName:"ol"},'Click "Create"'),(0,i.kt)("li",{parentName:"ol"},'Confirm to create the Credential by clicking "Sign" on the signature request'),(0,i.kt)("li",{parentName:"ol"},"Made a mistake? No worries! You can always come back to edit the credentials that you have created")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Credential.png",src:a(4355).Z,width:"1920",height:"947"})),(0,i.kt)("p",null,"Or check out this video for instructions: ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/EeE2Ngv7oEo"},"https://youtu.be/EeE2Ngv7oEo")),(0,i.kt)("h3",{id:"via-credential-update-api"},"Via credential update API"),(0,i.kt)("p",null,"Alternatively, you can call our credential API to skip the manual steps in the dashboard."),(0,i.kt)("p",null,"More info ",(0,i.kt)("a",{parentName:"p",href:"../../developer/guide/cred-update"},"here")),(0,i.kt)("h2",{id:"subgraphgraphql-credential-endpoint"},"Subgraph/GraphQL Credential Endpoint"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 We are adding Galaxy dashboard support to create subgraph Credentials in a self-serve fashion. Before that, please contact Galaxy team for assistance.")),(0,i.kt)("p",null,"Subgraph and GraphQL typed Credentials consist of: endpoint, query, expression, and header. The only difference being subgraph is specific to the subgraphs hosted on ",(0,i.kt)("a",{parentName:"p",href:"https://thegraph.com/"},"thegraph"),". Galaxy will send ",(0,i.kt)("inlineCode",{parentName:"p"},"query")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"header"),", and process the returned data with ",(0,i.kt)("inlineCode",{parentName:"p"},"expression"),". For example:"),(0,i.kt)("p",null,"endpoint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://api.xxx.com/cred/\n")),(0,i.kt)("p",null,"header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'{"Authorization": "key"}\n')),(0,i.kt)("p",null,"query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"query getEligibility($address: String!) {\n  campaignEligibility(address: $address) {\n    eligible\n  }\n}\n")),(0,i.kt)("p",null,"expression:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"function(data){\n if(data != null && data.campaignEligibility != null && data.campaignEligibility.eligible) {\n   return 1\n }\n return 0\n}\n")),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"expression")," returns 1, the address we checked is now confirmed to have this credential."),(0,i.kt)("h2",{id:"rest-credential-endpoint"},"REST Credential Endpoint"),(0,i.kt)("p",null,"A REST typed credential endpoint consists of three parts: endpoint, header and expression. Similar to subgraph/graphql, Galaxy will send a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request to the ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"header"),", and process the returned data with ",(0,i.kt)("inlineCode",{parentName:"p"},"expression"),". For example:"),(0,i.kt)("p",null,"endpoint (",(0,i.kt)("inlineCode",{parentName:"p"},"$address")," will be swapped out with the wallet address we need to check):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://api.xxx.com/cred/address=$address\n")),(0,i.kt)("p",null,"header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'{"Authorization": "key"}\n')),(0,i.kt)("p",null,"expression:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"function(data){\n if(data != null && data.campaignEligibility != null && data.campaignEligibility.eligible) {\n   return 1\n }\n return 0\n}\n")),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"expression")," returns 1, the address we checked is now confirmed to have this credential."))}h.isMDXComponent=!0},4355:function(e,t,a){t.Z=a.p+"assets/images/Credential-5eae17585f4dd3c7ea4755bd84115038.png"}}]);