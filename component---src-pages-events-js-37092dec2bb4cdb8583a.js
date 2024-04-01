"use strict";(self.webpackChunksonora_writers=self.webpackChunksonora_writers||[]).push([[6],{3895:function(e,t,n){var a=n(6540),l=n(4794);t.A=e=>{let{location:t,title:n,children:r}=e;const i="/"===t.pathname,{site:c}=(0,l.useStaticQuery)("172055407"),m=c.siteMetadata.social;return a.createElement("div",{className:"content"},a.createElement("div",{className:"global-wrapper","data-is-root-path":i},a.createElement("header",{className:"global-header"}," ",a.createElement("h1",{className:"main-heading"},a.createElement(l.Link,{to:"/"},n))),a.createElement("nav",{className:"main-nav"},a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.createElement("li",null,a.createElement(l.Link,{to:"/about"},"About")),a.createElement("li",null,a.createElement(l.Link,{to:"/meetings"},"Meetings")),a.createElement("li",null,a.createElement(l.Link,{to:"/events"},"Events")),a.createElement("li",null,a.createElement(l.Link,{to:"/publications"},"Publications")),a.createElement("li",null,a.createElement(l.Link,{to:"/contact"},"Contact")))),a.createElement("main",null,r)),a.createElement("footer",null,a.createElement("p",null,"© ",(new Date).getFullYear()," Sonora Writers Group"),a.createElement("div",{class:"social-media"},a.createElement("a",{href:"https://youtube.com"+((null==m?void 0:m.youtube)||"")},a.createElement("svg",{id:"youtube-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},a.createElement("path",{fill:"#2f4c54",d:"M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"}))),a.createElement("a",{href:"https://www.facebook.com"+((null==m?void 0:m.facebook)||"")},a.createElement("svg",{id:"facebook-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a.createElement("path",{fill:"#2f4c54",d:"M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"}))))))}},7528:function(e,t,n){var a=n(6540),l=n(4794);t.A=e=>{let{description:t,title:n,pathname:r,children:i}=e;const{site:c}=(0,l.useStaticQuery)("9867370"),m=c.siteMetadata,o={title:n||m.title,author:m.author.name,description:t||m.description,image:""+m.siteUrl+m.image,url:""+m.siteUrl+(r||"")};return a.createElement(a.Fragment,null,a.createElement("html",{lang:"en-US"}),a.createElement("title",null,o.title),a.createElement("meta",{charSet:"utf-8"}),a.createElement("meta",{name:"author",content:o.author}),a.createElement("meta",{name:"description",content:o.description}),a.createElement("meta",{name:"image",content:o.image}),a.createElement("meta",{property:"og:image",content:o.image}),a.createElement("meta",{property:"og:description",content:o.description}),a.createElement("meta",{property:"og:title",content:o.title}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:o.title}),a.createElement("meta",{name:"twitter:url",content:o.url}),a.createElement("meta",{name:"twitter:description",content:o.description}),a.createElement("meta",{name:"twitter:image",content:o.image}),a.createElement("link",{rel:"icon",type:"image/png",href:"/favicon/favicon-16x16.png",sizes:"16x16"}),a.createElement("link",{rel:"icon",type:"image/png",href:"/favicon/favicon-32x32.png",sizes:"32x32"}),i)}},1422:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var a=n(6540),l=n(4794),r=n(3895),i=n(7528);const c=()=>a.createElement(i.A,{title:"Sonora Community Writing Events"});t.default=e=>{var t;let{data:n,location:i}=e;const c=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=n.allMarkdownRemark.nodes;return 0===m.length?a.createElement(r.A,{location:i,title:c},a.createElement("h1",null,"Community Events"),a.createElement("p",null,"More community events coming soon.")):a.createElement(r.A,{location:i,title:c},a.createElement("h1",null,"Community Events"),a.createElement("ol",{style:{listStyle:"none"}},m.map((e=>{const t=e.frontmatter.title||e.fields.slug;return a.createElement("li",{key:e.fields.slug},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",null,a.createElement(l.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},t))),a.createElement("small",null,e.frontmatter.date)),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}),a.createElement("p",null,a.createElement(l.Link,{to:e.fields.slug,itemProp:"url"},"Read more")))))}))))}}}]);
//# sourceMappingURL=component---src-pages-events-js-37092dec2bb4cdb8583a.js.map