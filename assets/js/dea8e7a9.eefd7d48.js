(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[18121],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},75504:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),c={id:"start-instance",title:"Start a new process instance"},i=void 0,s={unversionedId:"components/modeler/cloud-modeler/start-instance",id:"components/modeler/cloud-modeler/start-instance",isDocsHomePage:!1,title:"Start a new process instance",description:"If a BPMN diagram is deployed via Cloud Modeler, you can start a new instance of this diagram.",source:"@site/docs/components/modeler/cloud-modeler/start-instance.md",sourceDirName:"components/modeler/cloud-modeler",slug:"/components/modeler/cloud-modeler/start-instance",permalink:"/docs/components/modeler/cloud-modeler/start-instance",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/components/modeler/cloud-modeler/start-instance.md",version:"current",frontMatter:{id:"start-instance",title:"Start a new process instance"},sidebar:"Components",previous:{title:"Save and deploy your diagram",permalink:"/docs/components/modeler/cloud-modeler/save-and-deploy"},next:{title:"Overview page actions",permalink:"/docs/components/modeler/cloud-modeler/model-overview"}},l=[],u={toc:l};function d(e){var t=e.components,c=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If a BPMN diagram is deployed via Cloud Modeler, you can start a new instance of this diagram."),(0,a.kt)("p",null,"To do so, click ",(0,a.kt)("strong",{parentName:"p"},"Start Instance")," in the context menu."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"start instance",src:n(13145).Z})),(0,a.kt)("p",null,"You can also specify variables written to the process context at startup. The variables must be formatted in valid JSON. As an example, you can use the following JSON:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hello": "world"\n}\n')))}d.isMDXComponent=!0},13145:function(e,t,n){"use strict";t.Z=n.p+"assets/images/start-process-instance-variables-48fd55517315d5c7d7091e8a5012dccb.png"}}]);