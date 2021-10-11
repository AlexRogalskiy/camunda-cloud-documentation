(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[37149],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return u}});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=s.createContext({}),p=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return s.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return n?s.createElement(g,i(i({ref:t},l),{},{components:n})):s.createElement(g,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95322:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var s=n(22122),a=n(19756),r=(n(67294),n(3905)),i={id:"message-events",title:"Message events"},o=void 0,c={unversionedId:"reference/bpmn-processes/message-events/message-events",id:"version-1.0/reference/bpmn-processes/message-events/message-events",isDocsHomePage:!1,title:"Message events",description:"Message events are events which reference a message. They are used to wait until a proper message is received.",source:"@site/versioned_docs/version-1.0/reference/bpmn-processes/message-events/message-events.md",sourceDirName:"reference/bpmn-processes/message-events",slug:"/reference/bpmn-processes/message-events/message-events",permalink:"/docs/1.0/reference/bpmn-processes/message-events/message-events",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/reference/bpmn-processes/message-events/message-events.md",version:"1.0",frontMatter:{id:"message-events",title:"Message events"},sidebar:"version-1.0/Reference",previous:{title:"None events",permalink:"/docs/1.0/reference/bpmn-processes/none-events/none-events"},next:{title:"Timer events",permalink:"/docs/1.0/reference/bpmn-processes/timer-events/timer-events"}},p=[{value:"Message start events",id:"message-start-events",children:[]},{value:"Intermediate message catch events",id:"intermediate-message-catch-events",children:[]},{value:"Message boundary events",id:"message-boundary-events",children:[]},{value:"Messages",id:"messages",children:[]},{value:"Variable mappings",id:"variable-mappings",children:[]},{value:"Additional resources",id:"additional-resources",children:[{value:"XML Representation",id:"xml-representation",children:[]},{value:"References",id:"references",children:[]}]}],l={toc:p};function m(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,s.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Message events are events which reference a message. They are used to wait until a proper message is received."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"process",src:n(6808).Z})),(0,r.kt)("p",null,"At the moment, messages can be published only externally by using one of the Zeebe clients."),(0,r.kt)("h2",{id:"message-start-events"},"Message start events"),(0,r.kt)("p",null,"A process can have one or more message start events (besides other types of start events). Each of the message events must have a unique message name."),(0,r.kt)("p",null,"When a process is deployed then it creates a message subscription for each message start event. Message subscriptions of the previous version of the process (based on the BPMN process id) are closed."),(0,r.kt)("p",null,"When the message subscription is created then a message can be correlated to the start event if the message name matches. On correlating the message, a new process instance is created and the corresponding message start event is activated."),(0,r.kt)("p",null,"Messages are ",(0,r.kt)("strong",{parentName:"p"},"not")," correlated if they were published before the process was deployed. Or, if a new version of the process is deployed which doesn't have a proper start event."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"correlationKey")," of a published message can be used to control the process instance creation. If an instance of this process is active (independently from its version) and it was triggered by a message with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"correlationKey")," then the message is ",(0,r.kt)("strong",{parentName:"p"},"not")," correlated and no new instance is created. When the active process instance is ended (completed or terminated) and a message with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"correlationKey")," and a matching message name is buffered (i.e. TTL > 0) then this message is correlated and a new instance of the latest version of the process is created."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"correlationKey")," of a message is empty then it will always create a new process instance and does not check if an instance is already active."),(0,r.kt)("h2",{id:"intermediate-message-catch-events"},"Intermediate message catch events"),(0,r.kt)("p",null,"When an intermediate message catch event is entered then a corresponding message subscription is created. The process instance stops at this point and waits until the message is correlated. When a message is correlated, the catch event gets completed and the process instance continues."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"An alternative to intermediate message catch events are ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0/reference/bpmn-processes/receive-tasks/receive-tasks"},"receive tasks")," which behaves the same but can be used together with boundary events.")),(0,r.kt)("h2",{id:"message-boundary-events"},"Message boundary events"),(0,r.kt)("p",null,"An activity can have one or more message boundary events. Each of the message events must have a unique message name."),(0,r.kt)("p",null,"When the activity is entered then it creates a corresponding message subscription for each boundary message event. If a non-interrupting boundary event is triggered then the activity is not terminated and multiple messages can be correlated."),(0,r.kt)("h2",{id:"messages"},"Messages"),(0,r.kt)("p",null,"A message can be referenced by one or more message events. It ",(0,r.kt)("strong",{parentName:"p"},"must")," define the name of the message (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Money collected"),") and the ",(0,r.kt)("inlineCode",{parentName:"p"},"correlationKey")," expression (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"= orderId"),"). If the message is only referenced by message start events then the ",(0,r.kt)("inlineCode",{parentName:"p"},"correlationKey")," is not required."),(0,r.kt)("p",null,"Usually, the name of the message is defined as a static value (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"order canceled"),"), but it can also be defined as ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0/components/concepts/expressions"},"expression")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'= "order " + awaitingAction'),"). If the expression belongs to a message start event of the process, then it is evaluated on deploying the process. Otherwise, it is evaluated on activating the message event. The evaluation must result in a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"correlationKey")," is an expression that usually ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0/components/concepts/expressions#access-variables"},"accesses a variable")," of the process instance that holds the correlation key of the message. The expression is evaluated on activating the message event and must result either in a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or in a ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,r.kt)("p",null,"In order to correlate a message to the message event, the message is published with the defined name (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Money collected"),") and the ",(0,r.kt)("strong",{parentName:"p"},"value")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"correlationKey")," expression. For example, if the process instance has a variable ",(0,r.kt)("inlineCode",{parentName:"p"},"orderId")," with value ",(0,r.kt)("inlineCode",{parentName:"p"},'"order-123"')," then the message must be published with the correlation key ",(0,r.kt)("inlineCode",{parentName:"p"},'"order-123"'),"."),(0,r.kt)("h2",{id:"variable-mappings"},"Variable mappings"),(0,r.kt)("p",null,"By default, all message variables are merged into the process instance. This behavior can be customized by defining an output mapping at the message catch event."),(0,r.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,r.kt)("h3",{id:"xml-representation"},"XML Representation"),(0,r.kt)("p",null,"A message start event with message definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:message id="Message_0z0aft4" name="order-placed" />\n\n<bpmn:startEvent id="order-placed" name="Order placed">\n  <bpmn:messageEventDefinition messageRef="Message_0z0aft4" />\n</bpmn:startEvent>\n')),(0,r.kt)("p",null,"An intermediate message catch event with message definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:message id="Message_1iz5qtq" name="money-collected">\n  <bpmn:extensionElements>\n    <zeebe:subscription correlationKey="= orderId" />\n  </bpmn:extensionElements>\n</bpmn:message>\n\n<bpmn:intermediateCatchEvent id="money-collected" name="Money collected" >\n  <bpmn:messageEventDefinition messageRef="Message_1iz5qtq" />\n</bpmn:intermediateCatchEvent>\n')),(0,r.kt)("p",null,"A boundary message event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:boundaryEvent id="order-canceled" name="Order Canceled"\n  attachedToRef="collect-money">\n  <bpmn:messageEventDefinition messageRef="Message_1iz5qtq" />\n</bpmn:boundaryEvent>\n')),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.0/components/concepts/messages"},"Message correlation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.0/components/concepts/expressions"},"Expressions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.0/components/concepts/variables#inputoutput-variable-mappings"},"Variable mappings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.0/components/concepts/incidents"},"Incidents"))))}m.isMDXComponent=!0},6808:function(e,t,n){"use strict";t.Z=n.p+"assets/images/message-events-7076a95560df1aaf5f1301d677bafcd6.png"}}]);