(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[74281],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58215:function(e,t,r){"use strict";var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},55064:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(67294),o=r(79443);var a=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=r(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,u=39;var d=function(e){var t=e.lazy,r=e.block,o=e.defaultValue,d=e.values,p=e.groupId,m=e.className,f=a(),g=f.tabGroupChoices,v=f.setTabGroupChoices,y=(0,n.useState)(o),b=y[0],k=y[1],h=n.Children.toArray(e.children),w=[];if(null!=p){var C=g[p];null!=C&&C!==b&&d.some((function(e){return e.value===C}))&&k(C)}var O=function(e){var t=e.currentTarget,r=w.indexOf(t),n=d[r].value;k(n),null!=p&&(v(p,n),setTimeout((function(){var e,r,n,o,a,s,i,c;(e=t.getBoundingClientRect(),r=e.top,n=e.left,o=e.bottom,a=e.right,s=window,i=s.innerHeight,c=s.innerWidth,r>=0&&a<=c&&o<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},N=function(e){var t,r;switch(e.keyCode){case u:var n=w.indexOf(e.target)+1;r=w[n]||w[0];break;case c:var o=w.indexOf(e.target)-1;r=w[o]||w[w.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},m)},d.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:O,onClick:O},r)}))),t?(0,n.cloneElement)(h.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,r){"use strict";var n=(0,r(67294).createContext)(void 0);t.Z=n},93990:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),s=r(55064),i=r(58215),l={id:"model-your-first-process",title:"Model your first process"},c=void 0,u={unversionedId:"guides/getting-started/model-your-first-process",id:"version-1.1/guides/getting-started/model-your-first-process",isDocsHomePage:!1,title:"Model your first process",description:"In Camunda Cloud, you have two options to design and deploy a process: Console Modeler and Camunda Modeler.",source:"@site/versioned_docs/version-1.1/guides/getting-started/model-your-first-process.md",sourceDirName:"guides/getting-started",slug:"/guides/getting-started/model-your-first-process",permalink:"/docs/1.1/guides/getting-started/model-your-first-process",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.1/guides/getting-started/model-your-first-process.md",version:"1.1",frontMatter:{id:"model-your-first-process",title:"Model your first process"},sidebar:"version-1.1/Guides",previous:{title:"Connect to your cluster",permalink:"/docs/1.1/guides/getting-started/connect-to-your-cluster"},next:{title:"Deploy and start your process instance",permalink:"/docs/1.1/guides/getting-started/deploy-your-process-and-start-process-instance"}},d=[],p={toc:d};function m(e){var t=e.components,l=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In Camunda Cloud, you have two options to design and deploy a process: Console Modeler and ",(0,a.kt)("a",{parentName:"p",href:"https://camunda.com/download/modeler/"},"Camunda Modeler"),"."),(0,a.kt)(s.Z,{groupId:"modeler",defaultValue:"console",values:[{label:"Console Modeler",value:"console"},{label:"Camunda Modeler",value:"desktop"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"console",mdxType:"TabItem"},(0,a.kt)("p",null,"Using Cloud Modeler, processes are designed and deployed, and new instances are created directly from the console. Take the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find your saved models under the ",(0,a.kt)("strong",{parentName:"p"},"Diagrams")," tab.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Create New Diagram"),"."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"console-modeler",src:r(65581).Z})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Give your diagram a name like ",(0,a.kt)("inlineCode",{parentName:"li"},"Getting Started"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"console-modeler-new-diagram",src:r(10592).Z})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("strong",{parentName:"li"},"Save")," button should now appear. Save your diagram.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"console-modeler-new-diagram",src:r(98696).Z}))),(0,a.kt)(i.Z,{value:"desktop",mdxType:"TabItem"},(0,a.kt)("p",null,"Using Camunda Modeler, processes are designed and deployed, and new instances are created."),(0,a.kt)("p",null,"Design a simple process with one start event and one end event, or download this ",(0,a.kt)("a",{target:"_blank",href:r(99931).Z},"BPMN model"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"zeebe-modeler",src:r(63073).Z})))))}m.isMDXComponent=!0},86010:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})},99931:function(e,t,r){"use strict";t.Z=r.p+"assets/files/gettingstarted_quickstart-d4a03612b26574919c43b88d8a1c7eee.bpmn"},65581:function(e,t,r){"use strict";t.Z=r.p+"assets/images/bpmn-diagrams-overview-a1e59a478a08424574a4d8bff47022b9.png"},98696:function(e,t,r){"use strict";t.Z=r.p+"assets/images/cloud-modeler-new-diagram-with-name-53917848209d42b1df23db1d8231e8c0.png"},10592:function(e,t,r){"use strict";t.Z=r.p+"assets/images/cloud-modeler-new-diagram-e61acda6f3e9859f4e6aaee9d2667042.png"},63073:function(e,t,r){"use strict";t.Z=r.p+"assets/images/zeebe-modeler-f05f41273c0bc159cf13a1fac6ca9476.png"}}]);