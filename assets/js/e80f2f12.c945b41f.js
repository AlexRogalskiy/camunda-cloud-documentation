(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[5109],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return v}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),v=o,m=d["".concat(i,".").concat(v)]||d[v]||u[v]||s;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},65434:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var r=t(22122),o=t(19756),s=(t(67294),t(3905)),a={id:"none-events",title:"None events"},c=void 0,i={unversionedId:"reference/bpmn-processes/none-events/none-events",id:"version-1.0/reference/bpmn-processes/none-events/none-events",isDocsHomePage:!1,title:"None events",description:"None events are unspecified events, also called \u2018blank\u2019 events.",source:"@site/versioned_docs/version-1.0/reference/bpmn-processes/none-events/none-events.md",sourceDirName:"reference/bpmn-processes/none-events",slug:"/reference/bpmn-processes/none-events/none-events",permalink:"/docs/1.0/reference/bpmn-processes/none-events/none-events",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/reference/bpmn-processes/none-events/none-events.md",version:"1.0",frontMatter:{id:"none-events",title:"None events"},sidebar:"version-1.0/Reference",previous:{title:"Overview",permalink:"/docs/1.0/reference/bpmn-processes/events"},next:{title:"Message events",permalink:"/docs/1.0/reference/bpmn-processes/message-events/message-events"}},l=[{value:"None start events",id:"none-start-events",children:[]},{value:"None end events",id:"none-end-events",children:[]},{value:"Additional resources",id:"additional-resources",children:[{value:"XML Representation",id:"xml-representation",children:[]}]}],p={toc:l};function u(e){var n=e.components,a=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"None events are unspecified events, also called \u2018blank\u2019 events."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"process",src:t(45210).Z})),(0,s.kt)("h2",{id:"none-start-events"},"None start events"),(0,s.kt)("p",null,"A process can have at most one none start event (besides other types of start events)."),(0,s.kt)("p",null,"A none start event is where the process instance or a subprocess starts when the process or the subprocess is activated."),(0,s.kt)("h2",{id:"none-end-events"},"None end events"),(0,s.kt)("p",null,"A process or subprocess can have multiple none end events. When a none end event is entered then the current execution path ends. If the process instance or subprocess has no more active execution paths then it is completed."),(0,s.kt)("p",null,"If an activity has no outgoing sequence flow then it behaves the same as it would be connected to a none end event. When the activity is completed then the current execution path ends."),(0,s.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,s.kt)("h3",{id:"xml-representation"},"XML Representation"),(0,s.kt)("p",null,"A none start event:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:startEvent id="order-placed" name="Order Placed" />\n')),(0,s.kt)("p",null,"A none end event:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:endEvent id="order-delivered" name="Order Delivered" />\n')))}u.isMDXComponent=!0},45210:function(e,n,t){"use strict";n.Z=t.p+"assets/images/none-events-d6a9ef4e683d8c8afa81bd0d7ff29f43.png"}}]);