(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[59463],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),b=s,m=d["".concat(c,".").concat(b)]||d[b]||l[b]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92187:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return l}});var r=n(22122),s=n(19756),o=(n(67294),n(3905)),i={id:"event-subprocesses",title:"Event subprocess"},a=void 0,c={unversionedId:"reference/bpmn-processes/event-subprocesses/event-subprocesses",id:"version-1.0/reference/bpmn-processes/event-subprocesses/event-subprocesses",isDocsHomePage:!1,title:"Event subprocess",description:"An event subprocess is a subprocess that is triggered by an event. It can be added globally to the process or locally inside an embedded subprocess.",source:"@site/versioned_docs/version-1.0/reference/bpmn-processes/event-subprocesses/event-subprocesses.md",sourceDirName:"reference/bpmn-processes/event-subprocesses",slug:"/reference/bpmn-processes/event-subprocesses/event-subprocesses",permalink:"/docs/1.0/reference/bpmn-processes/event-subprocesses/event-subprocesses",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/reference/bpmn-processes/event-subprocesses/event-subprocesses.md",version:"1.0",frontMatter:{id:"event-subprocesses",title:"Event subprocess"},sidebar:"version-1.0/Reference",previous:{title:"Call activities",permalink:"/docs/1.0/reference/bpmn-processes/call-activities/call-activities"},next:{title:"Overview",permalink:"/docs/1.0/reference/bpmn-processes/markers"}},p=[{value:"Variables",id:"variables",children:[]},{value:"Additional resources",id:"additional-resources",children:[{value:"XML Representation",id:"xml-representation",children:[]},{value:"References",id:"references",children:[]}]}],u={toc:p};function l(e){var t=e.components,i=(0,s.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An event subprocess is a subprocess that is triggered by an event. It can be added globally to the process or locally inside an embedded subprocess."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"event-subprocess",src:n(16133).Z})),(0,o.kt)("p",null,"An event subprocess must have exactly one start event of one of the following types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.0/reference/bpmn-processes/timer-events/timer-events"},"Timer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.0/reference/bpmn-processes/message-events/message-events"},"Message")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.0/reference/bpmn-processes/error-events/error-events"},"Error"))),(0,o.kt)("p",null,"An event subprocess behaves like a boundary event but is inside the scope instead of being attached to the scope. Like a boundary event, the event subprocess can be interrupting or non-interrupting (indicated in BPMN by a solid or dashed border of the start event). The start event of the event subprocess can be triggered when its containing scope is activated."),(0,o.kt)("p",null,"A non-interrupting event subprocess can be triggered multiple times. An interrupting event subprocess can be triggered only once."),(0,o.kt)("p",null,"When an interrupting event subprocess is triggered then ",(0,o.kt)("strong",{parentName:"p"},"all active instances")," of its containing scope are terminated, including instances of other non-interrupting event subprocesses."),(0,o.kt)("p",null,"If an event subprocess is triggered then its containing scope is not completed until the triggered instance is completed."),(0,o.kt)("h2",{id:"variables"},"Variables"),(0,o.kt)("p",null,"Unlike a boundary event, an event subprocess is inside the scope. So, it can access and modify ",(0,o.kt)("strong",{parentName:"p"},"all local variables")," of its containing scope. This is not possible with a boundary event because a boundary event is outside of the scope."),(0,o.kt)("p",null,"Input mappings can be used to create new local variables in the scope of the event subprocess. These variables are only visible within the event subprocess."),(0,o.kt)("p",null,"By default, the local variables of the event subprocess are not propagated (i.e. they are removed with the scope). This behavior can be customized by defining output mappings at the event subprocess. The output mappings are applied on completing the event subprocess."),(0,o.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,o.kt)("h3",{id:"xml-representation"},"XML Representation"),(0,o.kt)("p",null,"An event subprocess with an interrupting timer start event:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:subProcess id="compensate-subprocess" triggeredByEvent="true">\n  <bpmn:startEvent id="cancel-order" isInterrupting="true">\n    <bpmn:timerEventDefinition>\n      <bpmn:timeDuration>PT5M</bpmn:timeDuration>\n    </bpmn:timerEventDefinition>\n  ... other elements\n</bpmn:subProcess>\n')),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.0/reference/bpmn-processes/embedded-subprocesses/embedded-subprocesses"},"Embedded subprocess")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.0/product-manuals/concepts/variables#variable-scopes"},"Variable scopes"))))}l.isMDXComponent=!0},16133:function(e,t,n){"use strict";t.Z=n.p+"assets/images/event-subprocess-0cfa6f43ac303689b827b52124473329.png"}}]);