"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9453,407],{70167:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(20411);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var u=2;u<s;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},27590:function(e,t,a){a.d(t,{ET:function(){return l.Z},Ne:function(){return n.Z},Xl:function(){return u.Z},aN:function(){return d.Z},dT:function(){return r.Z},jJ:function(){return s.Z},o1:function(){return o.Z},o_:function(){return i.Z},r7:function(){return p.Z},tE:function(){return c.Z}});var n=a(65458),o=a(78160),s=a(70338),r=a(9446),i=a(53762),l=a(27074),u=a(429),c=a(43872),d=a(3636),p=a(1042)},29373:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(20411),o=a(52238),s="tabItem_wTOg";function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(s,r),hidden:a},t)}},61714:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(75731),o=a(20411),s=a(52238),r=a(91317),i=a(50258),l=a(59378),u=a(55232),c="tabList_PcIU",d="tabItem_YJvI";function p(e){var t,a,r=e.lazy,p=e.block,m=e.defaultValue,h=e.values,v=e.groupId,f=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:k[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),N=w.tabGroupChoices,C=w.setTabGroupChoices,x=(0,o.useState)(y),O=x[0],S=x[1],I=[],_=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var T=N[v];null!=T&&T!==O&&g.some((function(e){return e.value===T}))&&S(T)}var z=function(e){var t=e.currentTarget,a=I.indexOf(t),n=g[a].value;n!==O&&(_(t),S(n),null!=v&&C(v,String(n)))},D=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,o=I.indexOf(e.currentTarget)+1;a=null!=(n=I[o])?n:I[0];break;case"ArrowLeft":var s,r=I.indexOf(e.currentTarget)-1;a=null!=(s=I[r])?s:I[I.length-1]}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},f)},g.map((function(e){var t=e.value,a=e.label,r=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return I.push(e)},onKeyDown:D,onFocus:z,onClick:z},r,{className:(0,s.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),r?(0,o.cloneElement)(k.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,r.Z)();return o.createElement(p,(0,n.Z)({key:String(t)},e))}},62671:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(20411),o=a(43950),s=a(86632),r=a(27590),i="icon_t5Zl",l="npmIcon_uVGz icon_t5Zl",u="link_GZb0";var c=n.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 576 512",focusable:"false",height:"2rem",width:"2rem",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"})),d=(0,o._m)({kind:"weak",size:"s"}).className,p=(0,s.L)({size:"s"});function m(e){var t="github"===e.icon,a=t?i:l,o=t?n.createElement(r.ET,p):c;return n.createElement("a",{className:d+" "+u,href:e.href,rel:"noopener",target:"_blank"},n.createElement("span",{className:a},o)," ",e.children)}},7637:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return h}});var n=a(75731),o=a(42706),s=(a(20411),a(70167)),r=a(61714),i=a(29373),l=a(62671),u=["components"],c={sidebar_position:1,tags:["Development","Packages","Components","Headless Styles","Chakra"]},d="Intro",p={unversionedId:"development/packages/headless-styles/intro",id:"development/packages/headless-styles/intro",title:"Intro",description:"This is unreleased documentation for headless-styles package.",source:"@site/docs/development/packages/headless-styles/intro.mdx",sourceDirName:"development/packages/headless-styles",slug:"/development/packages/headless-styles/intro",permalink:"/docs/development/packages/headless-styles/intro",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/packages/headless-styles/intro.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"Components",permalink:"/docs/tags/components"},{label:"Headless Styles",permalink:"/docs/tags/headless-styles"},{label:"Chakra",permalink:"/docs/tags/chakra"}],version:"current",lastUpdatedBy:"Tom Pietrosanti",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Development","Packages","Components","Headless Styles","Chakra"]},sidebar:"development",previous:{title:"Colors",permalink:"/docs/development/packages/tokens/colors"},next:{title:"Badge",permalink:"/docs/development/packages/headless-styles/Badge"}},m={},h=[{value:"npm",id:"npm",level:2},{value:"Headless design",id:"headless-design",level:2},{value:"Examples",id:"examples",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"CSS &amp; CSS-in-JS",id:"css--css-in-js",level:2},{value:"Themeing",id:"themeing",level:3},{value:"CSS Modules",id:"css-modules",level:3},{value:"CSS-in-JS",id:"css-in-js",level:3},{value:"Chakra UI",id:"chakra-ui",level:3},{value:"Recommendation",id:"recommendation",level:2}],v={toc:h};function f(e){var t=e.components,a=(0,o.Z)(e,u);return(0,s.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"intro"},"Intro"),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"This is ",(0,s.kt)("strong",{parentName:"p"},"unreleased")," documentation for ",(0,s.kt)("strong",{parentName:"p"},"headless-styles")," package."))),(0,s.kt)("p",{className:"page-subheadline",markdown:"1"},"Install Pluralsight's headless UI framework that works with any library or tech stack."),(0,s.kt)(l.Z,{href:"https://www.npmjs.com/package/@pluralsight/headless-styles",mdxType:"ViewSourceLink"},"@pluralsight/headless-styles"),(0,s.kt)("h2",{id:"npm"},"npm"),(0,s.kt)("p",null,"To use Headless Styles install the package with your preferred manager."),(0,s.kt)(r.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/headless-styles@alpha\n"))),(0,s.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/headless-styles@alpha\n")))),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Some component examples use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/development/packages/icons/intro"},"Icons")," package. Not all components require icons, so we do not include it in the above install recommendation."))),(0,s.kt)("h2",{id:"headless-design"},"Headless design"),(0,s.kt)("p",null,"The Headless Styles library is a component-less tool that allows you to obtain all the styles needed for components without dictating a tech-stack for your team to use. This means that you can theoretically use any combination of technology (i.e. React, Svelte, MUI, etc.) and the library should still work successfully for your team."),(0,s.kt)("p",null,"Having said that, it will always be impossible to cover every single use case so if your team comes across an instance where the styles are not matching the doc examples, please ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/issues/new?assignees=&labels=bug%2Cneeds+triage&template=bug.yml&title=%5BBug%3F%5D%3A+"},"file a bug report")," so we can make sure that use case is covered."),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"For each component, we provide mutliple examples using the most popular libraries. Out of the box, we provide examples for:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://styled-components.com/"},"styled-components")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://chakra-ui.com/"},"Chakra UI")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://mui.com/"},"MUI")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://svelte.dev/"},"Svelte"))),(0,s.kt)("p",null,"If there is an additional library you would like to see provided in the examples, please ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/discussions/categories/polls"},"start a poll")," and if it receives enough support, we will be happy to add it in. \ud83d\ude04"),(0,s.kt)("h2",{id:"dependencies"},"Dependencies"),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Headless Styles requires the use of our fonts and normalize setup. Please see the ",(0,s.kt)("a",{parentName:"p",href:"../../getting-started/installation"},"installation guide")," for more information."))),(0,s.kt)("h2",{id:"css--css-in-js"},"CSS & CSS-in-JS"),(0,s.kt)("p",null,"Each of our Headless Styles components will deliver APIs for both CSS and CSS-in-JS use cases. Both APIs also come with some requirements for your project that you should be aware of for the most success."),(0,s.kt)("h3",{id:"themeing"},"Themeing"),(0,s.kt)("p",null,"Internally, we use the ",(0,s.kt)("a",{parentName:"p",href:"/docs/development/packages/tokens/intro"},"Design Tokens")," to control all the colors presented. Our suite comes with ",(0,s.kt)("a",{parentName:"p",href:"../tokens/colors#themes"},"multiple themes")," that work natively for ",(0,s.kt)("strong",{parentName:"p"},"CSS environments"),". This means that if your team uses CSS-in-JS, you will need to include a ",(0,s.kt)("a",{parentName:"p",href:"#css-in-js"},"provider")," to use theming."),(0,s.kt)("h3",{id:"css-modules"},"CSS Modules"),(0,s.kt)("p",null,"For the CSS APIs, we use ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/css-modules/css-modules"},"CSS modules")," which allow us to deliver the best experience regarding performance and scalability. Most tools come with CSS module support baked in (i.e. ",(0,s.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"CRA"),", ",(0,s.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"NextJS"),", ",(0,s.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite"),")."),(0,s.kt)("p",null,"If you are using a bundler with a custom config via ",(0,s.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"Webpack")," (or any other), you will need to make sure you add a ",(0,s.kt)("a",{parentName:"p",href:"https://webpack.js.org/loaders/css-loader/#modules"},"loader")," which should be available for any tool you are using."),(0,s.kt)("h3",{id:"css-in-js"},"CSS-in-JS"),(0,s.kt)("p",null,'Our CSS-in-JS APIs source a generated style Object we create internally which delivers the "dark" theme by default. If you want to use a custom theme, please see our ',(0,s.kt)("a",{parentName:"p",href:"../tokens/colors#js-custom-theming"},"theme customization")," in the Tokens docs."),(0,s.kt)("p",null,'The easiest solution is to just extend this library with whatever tool you prefer to use (i.e. React, styled-components, etc.) by following each components "extending" section example.'),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you would like the Design System to provide a ThemeProvider solution, please contribute to our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/discussions/198"},"discussion poll"),"."))),(0,s.kt)("h3",{id:"chakra-ui"},"Chakra UI"),(0,s.kt)("p",null,"We prefer not to cater to frameworks (which is the reason we designed this package the way we have). However, Chakra does provide a way for us to deliver ",(0,s.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/styled-system/theming/component-style"},"style objects")," to overwrite their UI while not having to add it as a dependency to ours. \ud83d\udca5"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},'Because of this, all of our "components" will return Chakra style objects instead of using a prop-getter function.')),(0,s.kt)("p",null,"If you use Chakra, please be mindful of this and all the examples we provide (which should work in your favor)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="How to use with Chakra"',title:'"How',to:!0,use:!0,with:!0,'Chakra"':!0},"import { theme } from '@chakra-ui/react'\nimport { chakraPSTheme } from '@pluralsight/headless-styles'\n\nconst theme = extendTheme(chakraPSTheme)\n")),(0,s.kt)("p",null,"Once you add the ",(0,s.kt)("inlineCode",{parentName:"p"},"theme")," to your ",(0,s.kt)("inlineCode",{parentName:"p"},"ChakraProvider")," you can use Chakra-UI components and the ones our Web UI Kit supports will automatically be styled for you!"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Some components (like the ",(0,s.kt)("a",{parentName:"p",href:"./Skeleton"},"Skeleton"),") will require some additional configuration setup to the theme config (see the Chakra example) due to the nature of Chakra being tightly coupled with Emotion."))),(0,s.kt)("h2",{id:"recommendation"},"Recommendation"),(0,s.kt)("p",null,"Our recommendation for the best user experience is to stay 3rd-party free and just stick with your Native library (i.e. React, Svelte, etc.) which will yield the best experience of our library."),(0,s.kt)("p",null,"Having said that, we know people are very passionate about UI libraries and believe they must be used in a project. Whatever your decision is, Headless-Styles aims to work with as many libraries as possible - there just may be a little extra work you will have to put in, whether updating ",(0,s.kt)("inlineCode",{parentName:"p"},"types")," or customizing for CSS animations."),(0,s.kt)("p",null,"This is due to our decision to stay as light-weight as possible and not require any additional requirements for you to use our project (i.e. you will not have to install any other package to use any of our libraries)."))}f.isMDXComponent=!0},27413:function(e,t,a){a.r(t),t.default={base:"base_vnCe",text:"text_NXNN base_vnCe",textWeak:"textWeak_xq_e base_vnCe",weak:"weak_lieO base_vnCe",medium:"medium_Qb9b base_vnCe",strong:"strong_IbMs base_vnCe",xs:"xs_Mxha base_vnCe",s:"s_UcOW base_vnCe",l:"l_rYmo base_vnCe",xsIconButton:"xsIconButton_o8PF xs_Mxha base_vnCe",sIconButton:"sIconButton_e4M2 s_UcOW base_vnCe",mIconButton:"mIconButton_O8AM base_vnCe",lIconButton:"lIconButton_lbVV l_rYmo base_vnCe",textDanger:"textDanger_CYZK base_vnCe",mediumDanger:"mediumDanger_LVds base_vnCe",strongDanger:"strongDanger_PIwV base_vnCe",round:"round_l3KD",light:"light_vKcg"}},43950:function(e,t,a){t._m=t.UX=void 0;const n=a(94550),o=a(22600),s=a(92483),r=(0,n.__importDefault)(a(27413));function i(e,t){return Object.assign(Object.assign({},(0,o.createClassProp)(e,t)),{type:"button"})}t.UX=function(e){const t=(0,s.getDefaultDangerOptions)(e),{kind:a,size:n}=t,o=`${a}Danger`;return i(t.tech,{defaultClass:`ps-danger-btn ${r.default[o]} ${r.default[n]}`,svelteClass:`base ${a}Danger ${n}`})},t._m=function(e){const t=(0,s.getDefaultOptions)(e),{kind:a,size:n}=t;return i(t.tech,{defaultClass:`ps-btn ${r.default[a]} ${r.default[n]}`,svelteClass:`base ${a} ${n}`})}},92483:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getIconButtonReturnProps=t.getDefaultIconButtonOptions=t.defaultIconButtonOptions=t.getDefaultDangerOptions=t.defaultDangerButtonOptions=t.getDefaultOptions=t.defaultButtonOptions=void 0,t.defaultButtonOptions={kind:"text",size:"m",tech:""},t.getDefaultOptions=function(e){var a,n,o;return{kind:null!==(a=null==e?void 0:e.kind)&&void 0!==a?a:t.defaultButtonOptions.kind,size:null!==(n=null==e?void 0:e.size)&&void 0!==n?n:t.defaultButtonOptions.size,tech:null!==(o=null==e?void 0:e.tech)&&void 0!==o?o:t.defaultButtonOptions.tech}},t.defaultDangerButtonOptions={kind:"text",size:"m",tech:""},t.getDefaultDangerOptions=function(e){var a,n,o;return{kind:null!==(a=null==e?void 0:e.kind)&&void 0!==a?a:t.defaultDangerButtonOptions.kind,size:null!==(n=null==e?void 0:e.size)&&void 0!==n?n:t.defaultDangerButtonOptions.size,tech:null!==(o=null==e?void 0:e.tech)&&void 0!==o?o:t.defaultDangerButtonOptions.tech}},t.defaultIconButtonOptions={kind:"text",size:"m",tech:"",variant:"default",ariaLabel:""},t.getDefaultIconButtonOptions=function(e){var a,n,o,s,r;return{kind:null!==(a=null==e?void 0:e.kind)&&void 0!==a?a:t.defaultIconButtonOptions.kind,size:null!==(n=null==e?void 0:e.size)&&void 0!==n?n:t.defaultIconButtonOptions.size,tech:null!==(o=null==e?void 0:e.tech)&&void 0!==o?o:t.defaultIconButtonOptions.tech,ariaLabel:null!==(s=null==e?void 0:e.ariaLabel)&&void 0!==s?s:t.defaultIconButtonOptions.ariaLabel,variant:null!==(r=null==e?void 0:e.variant)&&void 0!==r?r:t.defaultIconButtonOptions.variant}},t.getIconButtonReturnProps=function(e){return{button:{"aria-label":e.ariaLabel,type:"button"},iconOptions:{ariaHidden:!0,size:{xs:"s",s:"m",m:"m",l:"l"}[e.size]}}}}}]);