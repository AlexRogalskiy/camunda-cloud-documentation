(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[41893],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(n),p=o,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67294),o=n(79443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(86010),i="tabItem_1uMI",c="tabItemActive_2DSg";var l=37,u=39;var d=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,d=e.values,f=e.groupId,p=e.className,m=a(),g=m.tabGroupChoices,b=m.setTabGroupChoices,v=(0,r.useState)(o),y=v[0],h=v[1],k=r.Children.toArray(e.children),w=[];if(null!=f){var O=g[f];null!=O&&O!==y&&d.some((function(e){return e.value===O}))&&h(O)}var Z=function(e){var t=e.currentTarget,n=w.indexOf(t),r=d[n].value;h(r),null!=f&&(b(f,r),setTimeout((function(){var e,n,r,o,a,s,i,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,s=window,i=s.innerHeight,l=s.innerWidth,n>=0&&a<=l&&o<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case l:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:Z,onClick:Z},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},45790:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),s=n(55064),i=n(58215),c={id:"model-your-first-process",title:"Model your first Process"},l=void 0,u={unversionedId:"guides/getting-started/model-your-first-process",id:"version-0.25/guides/getting-started/model-your-first-process",isDocsHomePage:!1,title:"Model your first Process",description:"In Camunda Cloud you have two options to design and deploy a workflow: the Zeebe Modeler and the Console Modeler.",source:"@site/versioned_docs/version-0.25/guides/getting-started/model-your-first-process.md",sourceDirName:"guides/getting-started",slug:"/guides/getting-started/model-your-first-process",permalink:"/docs/0.25/guides/getting-started/model-your-first-process",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/guides/getting-started/model-your-first-process.md",version:"0.25",frontMatter:{id:"model-your-first-process",title:"Model your first Process"},sidebar:"version-0.25/Guides",previous:{title:"Connect to your Cluster",permalink:"/docs/0.25/guides/getting-started/connect-to-your-cluster"},next:{title:"Deploy your process and start a process instance",permalink:"/docs/0.25/guides/getting-started/deploy-your-process-and-start-process-instance"}},d=[],f={toc:d};function p(e){var t=e.components,c=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In Camunda Cloud you have two options to design and deploy a workflow: the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-modeler/releases"},"Zeebe Modeler")," and the Console Modeler."),(0,a.kt)(s.Z,{groupId:"modeler",defaultValue:"console",values:[{label:"Console Modeler",value:"console"},{label:"Zeebe Modeler",value:"desktop"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"console",mdxType:"TabItem"},'Using the Console Modeler, workflows can be designed and deployed, and new instances can be created directly from the console. You can find all your saved models under the "BPMN Diagrams" tab',(0,a.kt)("p",null,(0,a.kt)("img",{alt:"console-modeler",src:n(76171).Z})),(0,a.kt)("p",null,"Just create a new diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"console-modeler-new-diagram",src:n(61343).Z})),(0,a.kt)("p",null,"and give it a name"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"console-modeler-new-diagram",src:n(65892).Z})),(0,a.kt)("p",null,"The Save button should now appear.")),(0,a.kt)(i.Z,{value:"desktop",mdxType:"TabItem"},(0,a.kt)("p",null,"Using the Zeebe Modeler, workflows can be designed and deployed, and new instances can be created."),(0,a.kt)("p",null,"Design a simple workflow with one start event and one end event or download this ",(0,a.kt)("a",{target:"_blank",href:n(49049).Z},"BPMN model"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"zeebe-modeler",src:n(12085).Z})))))}p.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})},49049:function(e,t,n){"use strict";t.Z=n.p+"assets/files/gettingstarted_quickstart-d4217a8991dcc5bac354926936a665d3.bpmn"},65892:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cloud-modeler-new-diagram-with-name-1c3f6190f7f9f3ac27f91490c4d44403.png"},61343:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cloud-modeler-new-diagram-3c4ebfc20fd7dbc21bf022b75990587d.png"},76171:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cloud-modeler-44bb7c88f405b93c5252f2664c4bb763.png"},12085:function(e,t,n){"use strict";t.Z=n.p+"assets/images/zeebe-modeler-f05f41273c0bc159cf13a1fac6ca9476.png"}}]);