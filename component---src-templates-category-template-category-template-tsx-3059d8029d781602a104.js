!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6eddd45a-6968-4d79-854e-6049b0a8a9d5",e._sentryDebugIdIdentifier="sentry-dbid-6eddd45a-6968-4d79-854e-6049b0a8a9d5")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"2fd3e60587a700ad5135a7af069466a9bfd59935"},(self.webpackChunkgatsby_starter_lumen=self.webpackChunkgatsby_starter_lumen||[]).push([[350],{8988:function(e,t,a){a.d(t,{f:function(){return r}});var n=a(7294),l=a(4854),d="Feed-module--link--6123b";var r=e=>{let{edges:t}=e;return n.createElement("div",{className:"Feed-module--feed--a6204"},t.map((e=>{var t,a;return n.createElement("div",{className:"Feed-module--item--c7a63",key:e.node.fields.slug},n.createElement("div",{className:"Feed-module--meta--250c2"},n.createElement("time",{className:"Feed-module--time--72864",dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long"})),n.createElement("span",{className:"Feed-module--divider--81a18"}),n.createElement("span",{className:"Feed-module--category--59f58"},n.createElement(l.Link,{to:e.node.fields.categorySlug,className:d},e.node.frontmatter.category))),n.createElement("h2",{className:"Feed-module--title--f252f"},n.createElement(l.Link,{className:d,to:(null===(t=e.node.frontmatter)||void 0===t?void 0:t.slug)||e.node.fields.slug},e.node.frontmatter.title)),n.createElement("p",{className:"Feed-module--description--57348"},e.node.frontmatter.description),n.createElement(l.Link,{className:"Feed-module--more--51a4e",to:(null===(a=e.node.frontmatter)||void 0===a?void 0:a.slug)||e.node.fields.slug},"Read"))})))}},9014:function(e,t,a){a.d(t,{t:function(){return s}});var n=a(7294),l=a(3967),d=a.n(l),r=a(4854),o=a(100),i="Pagination-module--disable--7e105";var s=e=>{let{prevPagePath:t,nextPagePath:a,hasNextPage:l,hasPrevPage:s}=e;const m=d()("Pagination-module--previousLink--5590d",{[i]:!s}),c=d()("Pagination-module--nextLink--532ff",{[i]:!l});return n.createElement("div",{className:"Pagination-module--pagination--d61cb"},n.createElement("div",{className:"Pagination-module--previous--4a76b"},n.createElement(r.Link,{rel:"prev",to:s?t:"/",className:m},o.X.PREV_PAGE)),n.createElement("div",{className:"Pagination-module--next--1cab8"},n.createElement(r.Link,{rel:"next",to:l?a:"/",className:c},o.X.NEXT_PAGE)))}},1139:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c}});var n=a(7294),l=a(8988),d=a(4694),r=a(9395),o=a(3578),i=a(9014),s=a(9848),m=a(1856);const c=e=>{let{pageContext:t}=e;const{title:a,subtitle:l}=(0,m.$W)(),{group:d,pagination:{currentPage:o}}=t,i=`${d} - Page ${o} - ${a}`;return n.createElement(r.h,{title:i,description:l})};t.default=e=>{let{data:t,pageContext:a}=e;const{group:r,pagination:m}=a,{prevPagePath:c,nextPagePath:u,hasPrevPage:g,hasNextPage:f}=m,{edges:P}=t.allMarkdownRemark;return n.createElement(d.A,null,n.createElement(s.Y,null),n.createElement(o.T,{title:r},n.createElement(l.f,{edges:P}),n.createElement(i.t,{prevPagePath:c,nextPagePath:u,hasPrevPage:g,hasNextPage:f})))}}}]);
//# sourceMappingURL=component---src-templates-category-template-category-template-tsx-3059d8029d781602a104.js.map