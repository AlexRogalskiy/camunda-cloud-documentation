(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[52612],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67294),o=n(79443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(86010),i="tabItem_1uMI",c="tabItemActive_2DSg";var l=37,u=39;var d=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,d=e.values,p=e.groupId,m=e.className,f=a(),g=f.tabGroupChoices,y=f.setTabGroupChoices,b=(0,r.useState)(o),v=b[0],k=b[1],h=r.Children.toArray(e.children),w=[];if(null!=p){var C=g[p];null!=C&&C!==v&&d.some((function(e){return e.value===C}))&&k(C)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),r=d[n].value;k(r),null!=p&&(y(p,r),setTimeout((function(){var e,n,r,o,a,s,i,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,s=window,i=s.innerHeight,l=s.innerWidth,n>=0&&a<=l&&o<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case l:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(h.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},68306:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),s=n(55064),i=n(58215),c={id:"deploy-your-process-and-start-process-instance",title:"Deploy and start your process instance"},l=void 0,u={unversionedId:"guides/getting-started/deploy-your-process-and-start-process-instance",id:"version-0.26/guides/getting-started/deploy-your-process-and-start-process-instance",isDocsHomePage:!1,title:"Deploy and start your process instance",description:'<Tabs groupId="modeler" defaultValue="console" values={',source:"@site/versioned_docs/version-0.26/guides/getting-started/deploy-your-process-and-start-process-instance.md",sourceDirName:"guides/getting-started",slug:"/guides/getting-started/deploy-your-process-and-start-process-instance",permalink:"/docs/0.26/guides/getting-started/deploy-your-process-and-start-process-instance",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/guides/getting-started/deploy-your-process-and-start-process-instance.md",version:"0.26",frontMatter:{id:"deploy-your-process-and-start-process-instance",title:"Deploy and start your process instance"},sidebar:"version-0.26/Guides",previous:{title:"Model your first process",permalink:"/docs/0.26/guides/getting-started/model-your-first-process"},next:{title:"Implement a service task",permalink:"/docs/0.26/guides/getting-started/implement-service-task"}},d=[],p={toc:d};function m(e){var t=e.components,c=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s.Z,{groupId:"modeler",defaultValue:"console",values:[{label:"Console Modeler",value:"console"},{label:"Zeebe Modeler",value:"desktop"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"console",mdxType:"TabItem"},(0,a.kt)("p",null,"You can now use the ",(0,a.kt)("strong",{parentName:"p"},"Save & Deploy")," button to deploy the newly created process to your cluster."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"console-modeler-deploy",src:n(25075).Z})),(0,a.kt)("p",null,"Deployment can take a few seconds, but you should get a confirmation for successful deployment."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"console-modeler-deploy-successfull",src:n(13633).Z})),(0,a.kt)("p",null,"You can now start a new process instance. For this example you can just start an instance with an empty payload."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"console-modeler-start-instance",src:n(69913).Z})),(0,a.kt)("p",null,"Once the instance is started, you'll get a confirmation with a button to open Operate."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"console-modeler-start-instance-done",src:n(23956).Z}))),(0,a.kt)(i.Z,{value:"desktop",mdxType:"TabItem"},(0,a.kt)("p",null,"On the right side of the navigation menu there are buttons for deploying and starting workflows."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"zeebe-modeler-deploy",src:n(22423).Z})),(0,a.kt)("p",null,"In the deployment dialog, the connection information must now be specified: ",(0,a.kt)("inlineCode",{parentName:"p"},"Cluster Id"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Client Id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Client Secret"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Client Id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Cluster Id")," can be retrieved by clicking on ",(0,a.kt)("strong",{parentName:"p"},"View")," on the client in the ",(0,a.kt)("strong",{parentName:"p"},"API")," tab."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cluster-details-created-client-view",src:n(21239).Z})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Client Secret")," can be retrieved from the downloaded connection file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"grep SECRET  ~/Downloads/CamundaCloudMgmtAPI-Client-test-client.txt\nexport ZEEBE_CLIENT_SECRET='zbzsZI_6UnCsH_CIo0lNUN8qGyvLJr9VrH77ewNm8Oq3elvhPvV7g.QmJGydzOLo' \n")),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Deploy")," to deploy the workflow. Use ",(0,a.kt)("strong",{parentName:"p"},"Play")," from the navigation to start a new instance."))))}m.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})},13633:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cloud-modeler-deploy-successfull-345f9dbae179dbd4820a3c23b098a2c1.png"},25075:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cloud-modeler-deploy-1e1ef1f28bb5bdcff2c345b71b80b630.png"},23956:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cloud-modeler-start-instance-done-eafe65accfd900e6262ca348ab2561bb.png"},69913:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cloud-modeler-start-instance-14a252888eec5fbc3fb8ee2468df1482.png"},21239:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cluster-details-created-client-view-861b38e7b176e7514d38bc236a6e5a27.png"},22423:function(e,t,n){"use strict";t.Z=n.p+"assets/images/zeebe-modeler-deploy-edb1cb7bfdcc00b3a965f1300bb9881a.png"}}]);