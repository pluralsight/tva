"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3089],{8727:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(411),r=a(1945),i=a(2449),l=a(6805),o=a(4922),s=a(8629),m=a(3139),c=a(2238);function g(e){var t=e.metadata,a=(0,r.Z)().siteConfig.title,i=t.blogDescription,l=t.blogTitle,o="/"===t.permalink?a:l;return n.createElement(n.Fragment,null,n.createElement(s.d,{title:o,description:i}),n.createElement(m.Z,{tag:"blog_posts_list"}))}function p(e){var t=e.metadata,a=e.items,r=e.sidebar;return n.createElement(i.Z,{sidebar:r},a.map((function(e){var t=e.content;return n.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(o.Z,{metadata:t}))}function d(e){return n.createElement(s.FG,{className:(0,c.Z)(s.kM.wrapper.blogPages,s.kM.page.blogListPage)},n.createElement(g,e),n.createElement(p,e))}},4922:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(411),r=a(4888),i=a(9399);function l(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(i.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&n.createElement(i.Z,{permalink:l,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}}}]);