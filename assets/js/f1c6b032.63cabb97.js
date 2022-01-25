"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[739],{167:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1788:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(753),o=n(1242),r=(n(3289),n(167)),i=["components"],s={sidebar_position:2,tags:["Development","Usage","Getting Started","Web","React Native"]},l={unversionedId:"development/getting-started/usage",id:"development/getting-started/usage",isDocsHomePage:!1,title:"Usage (Web)",description:"This is unreleased documentation for TVA components package.",source:"@site/docs/development/getting-started/usage.md",sourceDirName:"development/getting-started",slug:"/development/getting-started/usage",permalink:"/tva/docs/development/getting-started/usage",editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/getting-started/usage.md",version:"current",lastUpdatedBy:"Casey Baggz",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Development","Usage","Getting Started","Web","React Native"]},sidebar:"development",previous:{title:"Installation",permalink:"/tva/docs/development/getting-started/installation"},next:{title:"Usage (Mobile)",permalink:"/tva/docs/development/getting-started/usage_mobile"}},p=[{value:"Headless design",id:"headless-design",children:[]},{value:"Quick Start",id:"quick-start",children:[]},{value:"Globals",id:"globals",children:[{value:"Responsive meta tag",id:"responsive-meta-tag",children:[]}]},{value:"Typescript",id:"typescript",children:[]},{value:"Versioned Documentation",id:"versioned-documentation",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is ",(0,r.kt)("strong",{parentName:"p"},"unreleased")," documentation for TVA ",(0,r.kt)("strong",{parentName:"p"},"components")," package."))),(0,r.kt)("p",null,'TVA packages and "components" work in isolation. ',(0,r.kt)("strong",{parentName:"p"},"They are self-supporting"),", and will only inject the styles they need to display and don't rely on any global style-sheets such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/necolas/normalize.css/"},"normalize.css"),"."),(0,r.kt)("p",null,'You can use any of the packages/components as demonstrated in the documentation. Please refer to each "component\'s" ',(0,r.kt)("a",{parentName:"p",href:"../packages/components/button"},"page")," to see how they should be imported and used."),(0,r.kt)("h2",{id:"headless-design"},"Headless design"),(0,r.kt)("p",null,"TVA is designed as a headless vanilla Javascript library so you can use it within any stack that your team has chosen - it is ",(0,r.kt)("em",{parentName:"p"},"not")," framework specific. Whether you use React with MUI, Svelte, or React Native - TVA will work for you. \ud83d\udcaa"),(0,r.kt)("p",null,"We strive to provide codesandbox examples for the common popular stacks (mentioned). However, if there is an example you need for a combination that we do not provide, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pluralsight/tva/discussions/categories/q-a"},"let us know")," by starting a Q&A discussion."),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"Here's a quick example using React to get you started, ",(0,r.kt)("strong",{parentName:"p"},"it's literally all you need"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="components/Button.jsx"',title:'"components/Button.jsx"'},"import { getButtonProps } from '@pluralsight/tva-components\n\nconst tvaBtnProps = getButtonProps()\n\nfunction Button(props) {\n  const { children, ...btnProps } = props\n\n  return (\n    <button {...btnProps} {...tvaBtnProps}>\n      {children}\n    </button>\n  )\n}\n\nexport default Button\n\n")),(0,r.kt)("p",null,"The above code shows that all you need is to import a helper function and that's it! TVA provides all the properties you need to cover styles and accessibility so you can own the rest for maximum flexibility."),(0,r.kt)("p",null,"This means you can use ",(0,r.kt)("strong",{parentName:"p"},"any framework")," or library of your choice (React, Svelte, Vue, MUI, Styled-Components, .etc)."),(0,r.kt)("h2",{id:"globals"},"Globals"),(0,r.kt)("p",null,"TVA usage experience can be improved with a handful of important globals that you'll need to be aware of."),(0,r.kt)("h3",{id:"responsive-meta-tag"},"Responsive meta tag"),(0,r.kt)("p",null,'TVA is developed with a mobile-first strategy in which we first write code for mobile devices, and then scale up "components" as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your ',(0,r.kt)("inlineCode",{parentName:"p"},"<head>")," element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<meta name="viewport" content="initial-scale=1, width=device-width" />\n')),(0,r.kt)("h2",{id:"typescript"},"Typescript"),(0,r.kt)("p",null,"TVA is built using Typescript so we will include type definitions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"components")," package for any project that may require them."),(0,r.kt)("h2",{id:"versioned-documentation"},"Versioned Documentation"),(0,r.kt)("p",null,"This documentation always reflects the latest stable version of TVA. You can find older versions of the documentation in the dropdown located at the top right corner of the page next to the search bar and theme toggle. Additionally, we release our ",(0,r.kt)("strong",{parentName:"p"},"next")," version documentation which has the \ud83d\udea7 emoji next to it."))}d.isMDXComponent=!0}}]);