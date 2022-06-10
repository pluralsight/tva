"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8839],{70167:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(20411);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29373:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(20411),r=n(52238),o="tabItem_wTOg";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},61714:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(75731),r=n(20411),o=n(52238),i=n(91317),s=n(50258),l=n(59378),p=n(55232),u="tabList_PcIU",c="tabItem_YJvI";function m(e){var t,n,i=e.lazy,m=e.block,d=e.defaultValue,k=e.values,h=e.groupId,v=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=k?k:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),N=w.tabGroupChoices,S=w.setTabGroupChoices,x=(0,r.useState)(y),C=x[0],T=x[1],O=[],j=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=N[h];null!=I&&I!==C&&f.some((function(e){return e.value===I}))&&T(I)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),a=f[n].value;a!==C&&(j(t),T(a),null!=h&&S(h,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var o,i=O.indexOf(e.currentTarget)-1;n=null!=(o=O[i])?o:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},v)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:E,onClick:E},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},45666:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var a=n(75731),r=n(42706),o=(n(20411),n(70167)),i=n(61714),s=n(29373),l=["components"],p={sidebar_position:1,tags:["Development","Packages","Tokens","Intro"]},u="Intro",c={unversionedId:"development/packages/tokens/intro",id:"development/packages/tokens/intro",title:"Intro",description:"This is alpha documentation for the design-tokens package.",source:"@site/docs/development/packages/tokens/intro.md",sourceDirName:"development/packages/tokens",slug:"/development/packages/tokens/intro",permalink:"/docs/development/packages/tokens/intro",draft:!1,editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/packages/tokens/intro.md",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"Tokens",permalink:"/docs/tags/tokens"},{label:"Intro",permalink:"/docs/tags/intro"}],version:"current",lastUpdatedBy:"Tom Pietrosanti",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Development","Packages","Tokens","Intro"]},sidebar:"development",previous:{title:"Migration",permalink:"/docs/development/getting-started/migration"},next:{title:"Colors",permalink:"/docs/development/packages/tokens/colors"}},m={},d=[{value:"npm",id:"npm",level:2},{value:"What is a token?",id:"what-is-a-token",level:2},{value:"Naming convention",id:"naming-convention",level:2},{value:"Usage",id:"usage",level:2},{value:"Web",id:"web",level:3},{value:"CSS",id:"css",level:4},{value:"es6",id:"es6",level:4},{value:"SCSS",id:"scss",level:4},{value:"Mobile",id:"mobile",level:3},{value:"Why are the tokens limited to colors?",id:"why-are-the-tokens-limited-to-colors",level:2}],k={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intro"},"Intro"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is ",(0,o.kt)("strong",{parentName:"p"},"alpha")," documentation for the ",(0,o.kt)("strong",{parentName:"p"},"design-tokens")," package."))),(0,o.kt)("p",{class:"page-subheadline",markdown:"1"},"Learn how to use design-tokens for any project or OS platform."),(0,o.kt)("h2",{id:"npm"},"npm"),(0,o.kt)("p",null,"To use tokens via the web, just install the npm package."),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pluralsight/design-tokens@alpha\n"))),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @pluralsight/design-tokens@alpha\n")))),(0,o.kt)("h2",{id:"what-is-a-token"},"What is a token?"),(0,o.kt)("p",null,'A "token" is a word used to define a style property for any platform. So, instead of having to specify CSS variable, iOS/Swift style, Android style variable, etc. We can just say "token" which refers to the style variables of any platform.'),(0,o.kt)("h2",{id:"naming-convention"},"Naming convention"),(0,o.kt)("p",null,"In order to make our tokens scalable and easier to consume, we use the same naming convention created by the Asana team."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# "usage" is the only property required\n\nps-[sentiment?]-[usage]-[prominence?]-[interaction?]\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sentiment"),' - "default" (accent), "neutral", "info", "success", "warning", "danger"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Usage"),' - "background", "border", "surface", "text"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Prominence"),' - "default", "weak", "medium", "strong"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Interaction"),' - "default", "hover", "active", "focus", "disabled"')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Values marked "default" can be ignored since the field is optional.'))),(0,o.kt)("p",null,"What this looks like in terms of an actual token can be seen in an example for something that may apply to a Button:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Button example - not actual properties"',title:'"Button',example:!0,"-":!0,not:!0,actual:!0,'properties"':!0},":root {\n  --ps-background: #123456;\n  --ps-background-hover: #123456;\n}\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"design-tokens")," package is the single source of truth for colors in the design system. This is how we define styles in ",(0,o.kt)("inlineCode",{parentName:"p"},"headless-styles")," and why you can just use this package if you need maximum flexibility - or are on a mobile platform."),(0,o.kt)("h3",{id:"web"},"Web"),(0,o.kt)("p",null,"For the web (npm), we ship ",(0,o.kt)("inlineCode",{parentName:"p"},"css")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"scss")," variables along with ",(0,o.kt)("inlineCode",{parentName:"p"},"js")," es6 modules. This way, you can choose whatever syntax works best for your project."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"We include the CSS tokens in our normalize setup"),", so there is no need to install this package unless you are using another language."))),(0,o.kt)("h4",{id:"css"},"CSS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="Alternatively importing tokens into your CSS"',title:'"Alternatively',importing:!0,tokens:!0,into:!0,your:!0,'CSS"':!0},'import "@pluralsight/design-tokens/build/css/variables.css";\n')),(0,o.kt)("p",null,"When you import ",(0,o.kt)("inlineCode",{parentName:"p"},"css"),", we use the ",(0,o.kt)("inlineCode",{parentName:"p"},":root")," psuedo-selector to store the properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="CSS import outcome (example)"',title:'"CSS',import:!0,outcome:!0,'(example)"':!0},":root {\n  --ps-background: #cccccc;\n  --ps-text: #ff0000;\n}\n")),(0,o.kt)("h4",{id:"es6"},"es6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Alternatively importing tokens into your JS"',title:'"Alternatively',importing:!0,tokens:!0,into:!0,your:!0,'JS"':!0},"import { psText } from '@pluralsight/design-tokens'\n")),(0,o.kt)("p",null,"When you use ",(0,o.kt)("inlineCode",{parentName:"p"},"js"),", we ",(0,o.kt)("inlineCode",{parentName:"p"},"export")," unique ID variable names."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="JS import outcome (example)"',title:'"JS',import:!0,outcome:!0,'(example)"':!0},"export const psBackground = '#cccccc'\nexport const psText = '#ff0000'\n")),(0,o.kt)("h4",{id:"scss"},"SCSS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="Importing tokens into your SCSS"',title:'"Importing',tokens:!0,into:!0,your:!0,'SCSS"':!0},"@use '@pluralsight/design-tokens/scss/_variables.scss';\n")),(0,o.kt)("p",null,"When you use ",(0,o.kt)("inlineCode",{parentName:"p"},"scss"),", we set the SCSS variables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss",metastring:'title="SCSS import outcome (example)"',title:'"SCSS',import:!0,outcome:!0,'(example)"':!0},"$ps-background: #1b1834;\n$ps-text: #ffffff;\n")),(0,o.kt)("h3",{id:"mobile"},"Mobile"),(0,o.kt)("p",null,"For mobile, we will ship ",(0,o.kt)("inlineCode",{parentName:"p"},"iOS"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"swift"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"android")," files to import into your projects via our repo. Just run the following command to have access to any resource your team needs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn workspace @pluralsight/design-tokens run build\n")),(0,o.kt)("p",null,"This will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," directory in the ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/design-tokens")," location which will contain all of the resources mentioned above."),(0,o.kt)("h2",{id:"why-are-the-tokens-limited-to-colors"},"Why are the tokens limited to colors?"),(0,o.kt)("p",null,"During our R&D phase, we have done extensive research to understand the best way to deliver tokens in the most performant way so that the customer experience does not have a negative impact regarding render performance & load times."),(0,o.kt)("p",null,"In this research we have found that there ",(0,o.kt)("em",{parentName:"p"},"is")," a threshold where CSS variables do negatively impact browser performance (just like specific properties do). For example, in some case studies, using a variable for ",(0,o.kt)("inlineCode",{parentName:"p"},"padding")," throughout your app can slow down render performance by ",(0,o.kt)("strong",{parentName:"p"},"up to 2 seconds"),"!"),(0,o.kt)("p",null,"During this research we have also compared solutions that are currently being executed by teams (i.e. Twitter, Github, etc.) drawing a correlation to slower apps using more CSS variables (in the web)."),(0,o.kt)("p",null,"Thus, the current standard which seems to keep a performant load time (under 1 second) is to ",(0,o.kt)("strong",{parentName:"p"},"keep variables limited to only colors and the quantity being defined up to 57"),"."),(0,o.kt)("p",null,"This is the standard we align with for the ",(0,o.kt)("inlineCode",{parentName:"p"},"design-tokens")," package. Additionally, because we have a semantic naming pattern, we are delivering every color needed for our entire Web UI Kit (except for rare/uncommonly used colors)."))}h.isMDXComponent=!0}}]);