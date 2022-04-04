"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3697],{3445:function(t,e,n){n.d(e,{Z:function(){return y}});var a=n(5161),o=n(9675),s=n(411),i=n(939),l="button_sEkW",r="chakra_ow8e",u="chakraCircle_c8Xz",p="list_rMMG",c="listItem_bLPI",d="icon_nzIq",m=["className"],k=s.createElement("svg",{className:d,focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"CodeRoundedIcon"},s.createElement("path",{d:"M8.7 15.9 4.8 12l3.9-3.9c.39-.39.39-1.01 0-1.4a.9839.9839 0 0 0-1.4 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0 .39-.39.39-1.01 0-1.4zm6.6 0 3.9-3.9-3.9-3.9a.9839.9839 0 0 1 0-1.4c.39-.39 1.01-.39 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6c-.39.39-1.01.39-1.4 0a.9839.9839 0 0 1 0-1.4z"})),g=s.createElement("svg",{className:d,focusable:"false","aria-hidden":"true",viewBox:"0 0 1024 1024"},s.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}));var h={items:["source","styled","chakra","joy","svelte"],results:{source:{icon:k,id:"source",href:"",label:"Show full source"},styled:{icon:g,id:"styled",label:"View styled components \ud83d\udc85"},chakra:{icon:s.createElement("svg",{className:d+" "+r,viewBox:"0 0 582 582",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true"},s.createElement("rect",{className:u,width:"582",height:"582",rx:"291"}),s.createElement("path",{d:"M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"})),id:"chakra",label:"View Chakra"},joy:{icon:s.createElement("svg",{className:d,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 32",fill:"none",focusable:"false","aria-hidden":"true"},s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z",fill:"#007FFF"})),id:"joy",label:"View MUI / Joy"},svelte:{icon:g,id:"svelte",label:"View Svelte"}}};function b(t){var e=h.results[t.techId],n=(0,i._)({size:"xs"}).className,a="https://codesandbox.io/s/"+t.href+"?file=/src/App.tsx";return s.createElement("a",{"aria-label":e.label,className:n+" "+l,href:a,rel:"noopener noreferrer",target:"_blank",title:e.label},t.children)}function v(t){var e=t.techId,n=Object.assign({},(0,i._)({size:"xs"})),r=n.className,u=(0,o.Z)(n,m);return s.createElement("button",(0,a.Z)({className:r+" "+l,onClick:t.onToggleShow,title:h.results[e].label},u),s.createElement(N,{tabId:e}))}function N(t){return h.results[t.tabId].icon}function f(t){var e=t.techId;return s.createElement("li",{className:c},"source"===e?s.createElement(v,{onToggleShow:t.onToggleShow,techId:e}):s.createElement(b,{techId:e,href:t.sandboxList[e]},s.createElement(N,{tabId:e})))}function B(t){return s.createElement("ul",{className:p},h.items.map((function(e){return s.createElement(f,{key:e,onToggleShow:t.onToggleShow,sandboxList:t.sandboxList,techId:e})})))}function w(t){var e=(0,s.useState)(!1),n=e[0],a=e[1];return s.createElement("div",null,s.createElement(B,{onToggleShow:function(){a((function(t){return!t}))},sandboxList:t.sandboxList}),n?t.fullCode:t.children)}var y=(0,s.memo)(w)},7264:function(t,e,n){n.r(e),n.d(e,{assets:function(){return j},contentTitle:function(){return L},default:function(){return M},frontMatter:function(){return E},metadata:function(){return S},toc:function(){return T}});var a=n(5161),o=n(9675),s=n(411),i=n(3369),l=n(9349),r=n(939),u="base_M3w8";function p(t){return s.createElement("div",{className:u},t.children)}var c=(0,r._)(),d=(0,r._)({kind:"text-weak"}),m=(0,r._)({kind:"weak"}),k=(0,r._)({kind:"medium"}),g=(0,r._)({kind:"strong"});var h=function(){return s.createElement(p,null,s.createElement("button",c,"default"),s.createElement("button",d,"text-weak"),s.createElement("button",m,"weak"),s.createElement("button",k,"medium"),s.createElement("button",g,"strong"))};function b(){return s.createElement(l.Z,null,"<button {...getButtonProps()}>default</button>\n<button {...getButtonProps({ kind: 'text-weak' })}>text-weak</button>\n<button {...getButtonProps({ kind: 'weak' })}>weak</button>\n<button {...getButtonProps({ kind: 'medium' })}>medium</button>\n<button {...getButtonProps({ kind: 'strong' })}>strong</button>")}function v(){return s.createElement(l.Z,null,"import { getButtonProps } from '@pluralsight/headless-styles';\n\nexport default function BasicButtons() {\n  return (\n    <div>\n      <button {...getButtonProps()}>default</button>\n      <button {...getButtonProps({ kind: 'text-weak' })}>text-weak</button>\n      <button {...getButtonProps({ kind: 'weak' })}>weak</button>\n      <button {...getButtonProps({ kind: 'medium' })}>medium</button>\n      <button {...getButtonProps({ kind: 'strong' })}>strong</button>\n    </div>\n  );\n}")}function N(){return s.createElement(l.Z,null,"<button {...getButtonProps()}>default</button>\n<button {...getButtonProps({ size: 'xs' })}>xtra-small</button>\n<button {...getButtonProps({ size: 's' })}>small</button>\n<button {...getButtonProps({ size: 'm' })}>medium</button>\n<button {...getButtonProps({ size: 'l' })}>large</button>")}function f(){return s.createElement(l.Z,null,"import { getButtonProps } from '@pluralsight/headless-styles';\n\nexport default function ButtonsSizes() {\n  return (\n    <div>\n      <button {...getButtonProps()}>default</button>\n      <button {...getButtonProps({ size: 'xs' })}>xtra-small</button>\n      <button {...getButtonProps({ size: 's' })}>small</button>\n      <button {...getButtonProps({ size: 'm' })}>medium</button>\n      <button {...getButtonProps({ size: 'l' })}>large</button>\n    </div>\n  );\n}")}var B="medium",w=(0,r._)({kind:B,size:"xs"}),y=(0,r._)({kind:B,size:"s"}),x=(0,r._)({kind:B}),P=(0,r._)({kind:B,size:"l"});var I=function(){return s.createElement(p,null,s.createElement("button",w,"xtra-small"),s.createElement("button",y,"small"),s.createElement("button",x,"medium"),s.createElement("button",P,"large"))},z=n(3445),C=["components"],E={sidebar_position:2,tags:["Development","Packages","Components","Button"]},L=void 0,S={unversionedId:"development/packages/headless-styles/Button",id:"development/packages/headless-styles/Button",title:"Button",description:"This is unreleased documentation for headless-styles package.",source:"@site/docs/development/packages/headless-styles/Button.mdx",sourceDirName:"development/packages/headless-styles",slug:"/development/packages/headless-styles/Button",permalink:"/docs/development/packages/headless-styles/Button",editUrl:"https://github.com/pluralsight/tva/edit/main/website/docs/development/packages/headless-styles/Button.mdx",tags:[{label:"Development",permalink:"/docs/tags/development"},{label:"Packages",permalink:"/docs/tags/packages"},{label:"Components",permalink:"/docs/tags/components"},{label:"Button",permalink:"/docs/tags/button"}],version:"current",lastUpdatedBy:"Casey Baggz",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["Development","Packages","Components","Button"]},sidebar:"development",previous:{title:"Colors",permalink:"/docs/development/packages/tokens/colors"},next:{title:"Intro",permalink:"/docs/development/packages/icons/intro"}},j={},T=[{value:"Basic Button",id:"basic-button",level:2},{value:"Button sizes",id:"button-sizes",level:2},{value:"Button styled links",id:"button-styled-links",level:2},{value:"Button with icon and label",id:"button-with-icon-and-label",level:2},{value:"Button with icon (no label)",id:"button-with-icon-no-label",level:2},{value:"CSS API",id:"css-api",level:2},{value:"getButtonProps",id:"getbuttonprops",level:3},{value:"ButtonProps",id:"buttonprops",level:4},{value:"getIconLabelProps",id:"geticonlabelprops",level:3},{value:"IconLabelButtonProps",id:"iconlabelbuttonprops",level:4},{value:"getIconButtonProps",id:"geticonbuttonprops",level:3},{value:"IconButtonProps",id:"iconbuttonprops",level:4},{value:"CSS in JS API",id:"css-in-js-api",level:2},{value:"getJSButtonProps",id:"getjsbuttonprops",level:3},{value:"JSButtonProps",id:"jsbuttonprops",level:4},{value:"Extending",id:"extending",level:2},{value:"Using with other frameworks",id:"using-with-other-frameworks",level:2},{value:"API",id:"api",level:2},{value:"ButtonOptions",id:"buttonoptions",level:2},{value:"Button size guide",id:"button-size-guide",level:2},{value:"Button color guide",id:"button-color-guide",level:2}],_={toc:T};function M(t){var e=t.components,n=(0,o.Z)(t,C);return(0,i.kt)("wrapper",(0,a.Z)({},_,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"button"},"Button"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is ",(0,i.kt)("strong",{parentName:"p"},"unreleased")," documentation for ",(0,i.kt)("strong",{parentName:"p"},"headless-styles")," package."))),(0,i.kt)("p",null,"The Button is used to call attention, perform an action, or to nagivate."),(0,i.kt)("p",null,"Buttons communicate actions that users can take. In your UI, they are typically found in places like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Forms"),(0,i.kt)("li",{parentName:"ul"},"Modal windows"),(0,i.kt)("li",{parentName:"ul"},"Course Cards")),(0,i.kt)("h2",{id:"basic-button"},"Basic Button"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," comes with five variants: text (default), text-weak, weak, medium, and strong."),(0,i.kt)(h,{mdxType:"BasicButton"}),(0,i.kt)(z.Z,{fullCode:(0,i.kt)(v,{mdxType:"BasicButtonFullPreview"}),sandboxList:{chakra:"basic-button-chakra-i02ytr",joy:"basic-buttons-mui-bnzx9l",styled:"basic-button-css-in-js-sc-mbrwzb",svelte:""},mdxType:"LiveExampleTabs"},(0,i.kt)(b,{mdxType:"BasicButtonPreview"})),(0,i.kt)("h2",{id:"button-sizes"},"Button sizes"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," comes with four size variants: xs, s, m (default), l."),(0,i.kt)(I,{mdxType:"ButtonSizes"}),(0,i.kt)(z.Z,{fullCode:(0,i.kt)(f,{mdxType:"ButtonSizesFullPreview"}),sandboxList:{chakra:"basic-button-chakra-i02ytr",joy:"basic-buttons-mui-bnzx9l",styled:"basic-button-css-in-js-sc-mbrwzb",svelte:""},mdxType:"LiveExampleTabs"},(0,i.kt)(N,{mdxType:"ButtonSizesPreview"})),(0,i.kt)("h2",{id:"button-styled-links"},"Button styled links"),(0,i.kt)("p",null,"If you want to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," styles for an ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," element (no matter what framework you use), just omit the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," property from the return Object we send."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'const psButtonProps = getButtonProps()\nconst psButtonLinkProps = { className: psButtonProps.className }\n\nfunction BackLink() {\n  return (\n    <a href="#" {...psbButtonLinkProps}>\n      Back\n    </a>\n  )\n}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"With ES","*"," you could destructure the className out of the object (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"{ className, ...rest }"),"). However, this approach forces you to declare an unused variable which will negatively impact performance at some point, make a negative impact on code readability, and fail sonarlint tests."))),(0,i.kt)("h2",{id:"button-with-icon-and-label"},"Button with icon and label"),(0,i.kt)("p",null,"You can combine icons with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"getIconLablProps")," and and Icon from the PS Icons font library."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=components/EditButton.jsx",title:"components/EditButton.jsx"},"import { getButtonProps, getIconLabelProps } from '@pluralsight/headless-styles'\n\nconst tvaButtonProps = getButtonProps({ kind: 'contained' })\nconst tvaIconLabelProps = getIconLabelProps()\n\nfunction EditButton(props) {\n  return (\n    <button {...props} {...tvaButtonProps}>\n      {/* This icon is from the PS Icons font - unicode WIP!!  */}\n      <span {...tvaIconLabelProps}>w61</span>\n      <p>Edit</p>\n    </button>\n  )\n}\n")),(0,i.kt)("h2",{id:"button-with-icon-no-label"},"Button with icon (no label)"),(0,i.kt)("p",null,'Icon buttons are commonly found in app bars, toolbars, or as an action such as "toggle".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=components/EditIconButton.jsx",title:"components/EditIconButton.jsx"},"import {\n  getIconButtonProps,\n  getIconLabelProps,\n} from '@pluralsight/headless-styles'\n\nconst tvaEditIconBtnProps = getIconButtonProps('edit profile')\n\nfunction EditIconButton(props) {\n  return (\n    <button {...props} {...tvaEditIconBtnProps}>\n      {/* This icon is from the new PS Icons font - unicode WIP!!  */}\n      <span {...tvaIconLabelProps}>w61</span>\n    </button>\n  )\n}\n")),(0,i.kt)("h2",{id:"css-api"},"CSS API"),(0,i.kt)("h3",{id:"getbuttonprops"},"getButtonProps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getButtonProps(options: ButtonOptions): ButtonProps\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," prop-getter takes in ",(0,i.kt)("a",{parentName:"p",href:"#buttonoptions"},"ButtonOptions")," returns an Object that contains all the a11y attributes needed along with all the styles for you to use in any fashion you like - or easily extend/overwrite when needed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Return value example"',title:'"Return',value:!0,'example"':!0},"{\n  className: `ps-btn ${...internal-style-modules}`\n  type: 'button'\n}\n")),(0,i.kt)("h4",{id:"buttonprops"},"ButtonProps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ButtonProps {\n  className: string\n  type: 'button'\n}\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are using ",(0,i.kt)("strong",{parentName:"p"},"Styled-Components"),', see "getJSButtonProps" section.'))),(0,i.kt)("h3",{id:"geticonlabelprops"},"getIconLabelProps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getIconLabelProps(): IconLabelButtonProps\n")),(0,i.kt)("p",null,"Our eyes/brain recognize logos more easily than plain text, so you might want to add icons to certain buttons to enhance the UX. For example, if you have an edit button you can label it with a pencil icon."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Return value example"',title:'"Return',value:!0,'example"':!0},"{\n  'aria-hidden': 'true'\n  className: 'ps-icon'\n}\n")),(0,i.kt)("h4",{id:"iconlabelbuttonprops"},"IconLabelButtonProps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IconLabelButtonProps {\n  'aria-hidden': boolean\n}\n")),(0,i.kt)("h3",{id:"geticonbuttonprops"},"getIconButtonProps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getIconButtonProps(ariaLabel: string): IconButtonProps\n")),(0,i.kt)("p",null,'Icon buttons are commonly found in app bars, toolbars, or as an action such as "toggle".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=components/EditIconButton.jsx",title:"components/EditIconButton.jsx"},"import {\n  getIconButtonProps,\n  getIconLabelProps,\n} from '@pluralsight/tva-headless-styles'\n\nconst tvaEditIconBtnProps = getIconButtonProps('edit profile')\n\nfunction EditIconButton(props) {\n  return (\n    <button {...props} {...tvaEditIconBtnProps}>\n      {/* This icon is from the new PS Icons font - unicode WIP!!  */}\n      <span {...getIconLabelProps()}>w61</span>\n    </button>\n  )\n}\n")),(0,i.kt)("h4",{id:"iconbuttonprops"},"IconButtonProps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IconButtonProps {\n  'aria-label': string\n}\n")),(0,i.kt)("h2",{id:"css-in-js-api"},"CSS in JS API"),(0,i.kt)("h3",{id:"getjsbuttonprops"},"getJSButtonProps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getJSButtonProps(options: ButtonOptions): JSButtonProps\n")),(0,i.kt)("p",null,"If you prefer to use CSS-in-JS, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"getJSButtonProps")," function. This will return a stringified version of the styles via the ",(0,i.kt)("inlineCode",{parentName:"p"},"cssProps")," property along with a ",(0,i.kt)("inlineCode",{parentName:"p"},"styles")," property that matches the common emotion framework syntax."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Return value example"',title:'"Return',value:!0,'example"':!0},"{\n  cssProps: `\n    color: #fff;\n    background-color: #000;\n    ...\n  `,\n  styles: {\n    color: '#fff',\n    backgroundColor: '#000'\n    '&:hover': {\n      ...\n    }\n  },\n  type: 'button',\n}\n")),(0,i.kt)("h4",{id:"jsbuttonprops"},"JSButtonProps"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface JSButtonProps {\n  cssProps: string\n  styles: Record<CSSProps, string>\n  type: 'button'\n}\n")),(0,i.kt)("h2",{id:"extending"},"Extending"),(0,i.kt)("p",null,"There are times you may need to make a slight adjustment to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," which is easy since we are giving you an Object. You can easily extend the Button in any way that you like."),(0,i.kt)("p",null,"Here is an example of using ",(0,i.kt)("inlineCode",{parentName:"p"},"styled-components")," to extend a ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," for a Form."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"title=page/Login/components/SubmitButton.jsx",title:"page/Login/components/SubmitButton.jsx"},"import styled from 'styled-components'\nimport { getJSButtonProps } from '@pluralsight/headless-styles'\n\nconst psBtnProps = getJSButtonProps({ kind: 'medium' })\n\nconst Button = styled.button`\n  ${psBtnProps.cssProps}\n  color: '#bfbfbf'\n`\n\nfunction SubmitButton(props) {\n  return <Button type=\"submit\">{props.children}</Button>\n}\n")),(0,i.kt)("h2",{id:"using-with-other-frameworks"},"Using with other frameworks"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"headless-styles")," was built with the mindset that any tech stack should work with our helpers. However, when making the decision to support multiple UI frameworks, styles can get out of hand very quickly. In order to scale styles without creating negative impacts to other platforms, we have included the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"tech")," option to ",(0,i.kt)("a",{parentName:"p",href:"#buttonoptions"},"ButtonOptions"),". This small inclusion allows us to ship specific styles per platform you choose to use without conflicting with others. \ud83d\udca5"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When combining ",(0,i.kt)("inlineCode",{parentName:"p"},"headless-styles")," with other frameworks, please follow the guides in the example codesandboxes for the best experience. ",(0,i.kt)("strong",{parentName:"p"},"Not all frameworks require special CSS support"),"."))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Argument Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getButtonProps")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"options"),": ",(0,i.kt)("a",{parentName:"td",href:"#buttonoptions"},"ButtonOptions")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"kind"),": 'text', ",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"size"),": 'm'"),(0,i.kt)("td",{parentName:"tr",align:null},"Get main button styles.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getJSButtonProps")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"options"),": ",(0,i.kt)("a",{parentName:"td",href:"#buttonoptions"},"ButtonOptions")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"kind"),": 'text', ",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"size"),": 'm'"),(0,i.kt)("td",{parentName:"tr",align:null},"Get main button styles.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getIconLabelProps")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Get button with icon and label styles.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"getIconButtonProps")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"ariaLabel"),": string"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Get icon button styles.")))),(0,i.kt)("h2",{id:"buttonoptions"},"ButtonOptions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ButtonOptions\n  extends DetailedHTMLProps<\n    ButtonHTMLAttributes<HTMLButtonElement>,\n    HTMLButtonElement\n  > {\n  kind?: 'text' | 'text-weak' | 'weak' | 'medium' | 'strong'\n  size?: 'xs' | 's' | 'm' | 'l'\n  tech?: 'chakra'\n}\n")),(0,i.kt)("h2",{id:"button-size-guide"},"Button size guide"),(0,i.kt)("p",null,"Button sizes are relative to the ",(0,i.kt)("inlineCode",{parentName:"p"},"padding")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"font-size")," styles. Here is an interface that gives the sizing guide. Variables are referenced from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/development/packages/tokens/intro"},(0,i.kt)("inlineCode",{parentName:"a"},"tokens"))," package."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example interface - does not exist in types"',title:'"Example',interface:!0,"-":!0,does:!0,not:!0,exist:!0,in:!0,'types"':!0},"interface ButtonSizeGuide {\n  xs: {\n    fontSize: '12px'\n    padding: '4px 8px'\n  }\n  s: {\n    fontSize: '14px'\n    padding: '6px 12px'\n  }\n  m: {\n    fontSize: '16px'\n    padding: '10px 16px'\n  }\n  l: {\n    fontSize: '16px'\n    padding: '14.5px 24px'\n  }\n}\n")),(0,i.kt)("h2",{id:"button-color-guide"},"Button color guide"),(0,i.kt)("p",null,"Button colors are relative to the ",(0,i.kt)("inlineCode",{parentName:"p"},"background")," style and have a direct correlation from the ",(0,i.kt)("inlineCode",{parentName:"p"},"kind")," to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/development/packages/tokens/intro"},(0,i.kt)("inlineCode",{parentName:"a"},"design-tokens"))," package. Here is an interface that gives the color guide."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example interface - does not exist in types"',title:'"Example',interface:!0,"-":!0,does:!0,not:!0,exist:!0,in:!0,'types"':!0},"interface ButtonColorGuide {\n  text: 'transparent'\n  'text-weak': 'transparent'\n  weak: 'var(--ps-neutral-background)'\n  medium: 'var(--ps-background)'\n  strong: 'var(--ps-background-weak)'\n}\n")))}M.isMDXComponent=!0},939:function(t,e,n){n.d(e,{_:function(){return l}});const a="text",o="m",s="";var i={base:"base_O69R",text:"text_bEjD","text-weak":"text-weak_Rbqr",weak:"weak_YT7G",medium:"medium_f1HB",strong:"strong_UdYx","size-xs":"size-xs_riZb","size-s":"size-s_LOav","size-l":"size-l_rnte",light:"light_EgN9",chakra:"chakra_sbGE"};function l(t){var e;const{kind:n,size:l,tech:r}=function(t){var e,n,i;return{kind:null!==(e=null==t?void 0:t.kind)&&void 0!==e?e:a,size:null!==(n=null==t?void 0:t.size)&&void 0!==n?n:o,tech:null!==(i=null==t?void 0:t.tech)&&void 0!==i?i:s}}(t),u=null!==(e=i[r])&&void 0!==e?e:"";return{className:`ps-btn ${i.base} ${i[n]} ${i[`size-${l}`]} ${u}`,type:"button"}}}}]);