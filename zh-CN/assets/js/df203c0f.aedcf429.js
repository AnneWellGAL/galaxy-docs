"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[9924],{9853:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var l=a(7294),c=a(2600),n=a(9960),s=a(7556),r=a(5999),o=a(4739),g=a(6010);function i(e){var t=e.doc;return l.createElement("article",{className:"margin-vert--lg"},l.createElement(n.Z,{to:t.permalink},l.createElement("h2",null,t.title)),t.description&&l.createElement("p",null,t.description))}function m(e){var t,a=e.tag,m=(t=(0,s.c2)().selectMessage,function(e){return t(e,(0,r.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))}),d=(0,r.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:m(a.docs.length),tagName:a.name});return l.createElement(s.FG,{className:(0,g.Z)(s.kM.wrapper.docsPages,s.kM.page.docsTagDocListPage)},l.createElement(s.d,{title:d}),l.createElement(o.Z,{tag:"doc_tag_doc_list"}),l.createElement(c.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,d),l.createElement(n.Z,{href:a.allTagsPath},l.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),l.createElement("section",{className:"margin-vert--lg"},a.docs.map((function(e){return l.createElement(i,{key:e.id,doc:e})}))))))))}}}]);