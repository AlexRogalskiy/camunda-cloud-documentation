(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[51484],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),p=s,g=u["".concat(i,".").concat(p)]||u[p]||m[p]||r;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3892:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return d},default:function(){return m}});var a=n(22122),s=n(19756),r=(n(67294),n(3905)),l={id:"message-events",title:"Message Events"},o=void 0,i={unversionedId:"product-manuals/zeebe/bpmn-workflows/message-events/message-events",id:"version-0.25/product-manuals/zeebe/bpmn-workflows/message-events/message-events",isDocsHomePage:!1,title:"Message Events",description:"Message events are events which reference a message. They are used to wait until a proper message is received.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/bpmn-workflows/message-events/message-events.md",sourceDirName:"product-manuals/zeebe/bpmn-workflows/message-events",slug:"/product-manuals/zeebe/bpmn-workflows/message-events/message-events",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/message-events/message-events",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/bpmn-workflows/message-events/message-events.md",version:"0.25",frontMatter:{id:"message-events",title:"Message Events"},sidebar:"version-0.25/Product Manuals",previous:{title:"None Events",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/none-events/none-events"},next:{title:"Timer Events",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/timer-events/timer-events"}},d=[{value:"Message Start Events",id:"message-start-events",children:[]},{value:"Intermediate Message Catch Events",id:"intermediate-message-catch-events",children:[]},{value:"Message Boundary Events",id:"message-boundary-events",children:[]},{value:"Messages",id:"messages",children:[]},{value:"Variable Mappings",id:"variable-mappings",children:[]},{value:"Additional Resources",id:"additional-resources",children:[]}],c={toc:d};function m(e){var t=e.components,l=(0,s.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Message events are events which reference a message. They are used to wait until a proper message is received."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"workflow",src:n(42356).Z})),(0,r.kt)("p",null,"At the moment, messages can be published only externally by using one of the Zeebe clients."),(0,r.kt)("h2",{id:"message-start-events"},"Message Start Events"),(0,r.kt)("p",null,"A workflow can have one or more message start events (besides other types of start events). Each of the message events must have a unique message name."),(0,r.kt)("p",null,"When a workflow is deployed then it creates a message subscription for each message start event. Message subscriptions of the previous version of the workflow (based on the BPMN process id) are closed."),(0,r.kt)("p",null,"When the message subscription is created then a message can be correlated to the start event if the message name matches. On correlating the message, a new workflow instance is created and the corresponding message start event is activated."),(0,r.kt)("p",null,"Messages are ",(0,r.kt)("strong",{parentName:"p"},"not")," correlated if they were published before the workflow was deployed. Or, if a new version of the workflow is deployed which doesn't have a proper start event."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"correlationKey")," of a published message can be used to control the workflow instance creation. If an instance of this workflow is active (independently from its version) and it was triggered by a message with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"correlationKey")," then the message is ",(0,r.kt)("strong",{parentName:"p"},"not")," correlated and no new instance is created. When the active workflow instance is ended (completed or terminated) and a message with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"correlationKey")," and a matching message name is buffered (i.e. TTL > 0) then this message is correlated and a new instance of the latest version of the workflow is created."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"correlationKey")," of a message is empty then it will always create a new workflow instance and does not check if an instance is already active."),(0,r.kt)("h2",{id:"intermediate-message-catch-events"},"Intermediate Message Catch Events"),(0,r.kt)("p",null,"When an intermediate message catch event is entered then a corresponding message subscription is created. The workflow instance stops at this point and waits until the message is correlated. When a message is correlated, the catch event gets completed and the workflow instance continues."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"An alternative to intermediate message catch events are ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/receive-tasks/receive-tasks"},"receive tasks")," which behaves the same but can be used together with boundary events.")),(0,r.kt)("h2",{id:"message-boundary-events"},"Message Boundary Events"),(0,r.kt)("p",null,"An activity can have one or more message boundary events. Each of the message events must have a unique message name."),(0,r.kt)("p",null,"When the activity is entered then it creates a corresponding message subscription for each boundary message event. If a non-interrupting boundary event is triggered then the activity is not terminated and multiple messages can be correlated."),(0,r.kt)("h2",{id:"messages"},"Messages"),(0,r.kt)("p",null,"A message can be referenced by one or more message events. It ",(0,r.kt)("strong",{parentName:"p"},"must")," define the name of the message (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Money collected"),") and the ",(0,r.kt)("inlineCode",{parentName:"p"},"correlationKey")," expression (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"= orderId"),"). If the message is only referenced by message start events then the ",(0,r.kt)("inlineCode",{parentName:"p"},"correlationKey")," is not required."),(0,r.kt)("p",null,"Usually, the name of the message is defined as a static value (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"order canceled"),"), but it can also be defined as ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.25/product-manuals/zeebe/reference/expressions"},"expression")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'= "order " + awaitingAction'),"). If the expression belongs to a message start event of the workflow, then it is evaluated on deploying the workflow. Otherwise, it is evaluated on activating the message event. The evaluation must result in a ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"correlationKey")," is an expression that usually ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.25/product-manuals/zeebe/reference/expressions#access-variables"},"accesses a variable")," of the workflow instance that holds the correlation key of the message. The expression is evaluated on activating the message event and must result either in a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or in a ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,r.kt)("p",null,"In order to correlate a message to the message event, the message is published with the defined name (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Money collected"),") and the ",(0,r.kt)("strong",{parentName:"p"},"value")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"correlationKey")," expression. For example, if the workflow instance has a variable ",(0,r.kt)("inlineCode",{parentName:"p"},"orderId")," with value ",(0,r.kt)("inlineCode",{parentName:"p"},'"order-123"')," then the message must be published with the correlation key ",(0,r.kt)("inlineCode",{parentName:"p"},'"order-123"'),"."),(0,r.kt)("h2",{id:"variable-mappings"},"Variable Mappings"),(0,r.kt)("p",null,"By default, all message variables are merged into the workflow instance. This behavior can be customized by defining an output mapping at the message catch event."),(0,r.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"XML representation"),(0,r.kt)("p",null,"A message start event with message definition:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:message id="Message_0z0aft4" name="order-placed" />\n\n<bpmn:startEvent id="order-placed" name="Order placed">\n  <bpmn:messageEventDefinition messageRef="Message_0z0aft4" />\n</bpmn:startEvent>\n')),(0,r.kt)("p",null,"An intermediate message catch event with message definition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:message id="Message_1iz5qtq" name="money-collected">\n  <bpmn:extensionElements>\n    <zeebe:subscription correlationKey="= orderId" />\n  </bpmn:extensionElements>\n</bpmn:message>\n\n<bpmn:intermediateCatchEvent id="money-collected" name="Money collected" >\n  <bpmn:messageEventDefinition messageRef="Message_1iz5qtq" />\n</bpmn:intermediateCatchEvent>\n')),(0,r.kt)("p",null,"A boundary message event:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:boundaryEvent id="order-canceled" name="Order Canceled"\n  attachedToRef="collect-money">\n  <bpmn:messageEventDefinition messageRef="Message_1iz5qtq" />\n</bpmn:boundaryEvent>\n')))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Using the BPMN modeler"),(0,r.kt)("p",null,"Adding an intermediate message catch event:",(0,r.kt)("p",null,(0,r.kt)("img",{alt:"message-event",src:n(47077).Z})))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Workflow Lifecycle"),(0,r.kt)("p",null,"Workflow instance records of a message start event:",(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Intent"),(0,r.kt)("th",null,"Element Id"),(0,r.kt)("th",null,"Element Type")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"EVENT_OCCURRED"),(0,r.kt)("td",null,"order-placed"),(0,r.kt)("td",null,"START_EVENT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ELEMENT_ACTIVATING"),(0,r.kt)("td",null,"order-placed"),(0,r.kt)("td",null,"START_EVENT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ELEMENT_ACTIVATED"),(0,r.kt)("td",null,"order-placed"),(0,r.kt)("td",null,"START_EVENT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ELEMENT_COMPLETING"),(0,r.kt)("td",null,"order-placed"),(0,r.kt)("td",null,"START_EVENT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ELEMENT_COMPLETED"),(0,r.kt)("td",null,"order-placed"),(0,r.kt)("td",null,"START_EVENT"))),(0,r.kt)("p",null,"Workflow instance records of an intermediate message catch event:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Intent"),(0,r.kt)("th",null,"Element Id"),(0,r.kt)("th",null,"Element Type")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ELEMENT_ACTIVATING"),(0,r.kt)("td",null,"order-delivered"),(0,r.kt)("td",null,"INTERMEDIATE_CATCH_EVENT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ELEMENT_ACTIVATED"),(0,r.kt)("td",null,"order-delivered"),(0,r.kt)("td",null,"INTERMEDIATE_CATCH_EVENT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"..."),(0,r.kt)("td",null,"..."),(0,r.kt)("td",null,"...")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"EVENT_OCCURRED"),(0,r.kt)("td",null,"money-collected"),(0,r.kt)("td",null,"INTERMEDIATE_CATCH_EVENT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ELEMENT_COMPLETING"),(0,r.kt)("td",null,"money-collected"),(0,r.kt)("td",null,"INTERMEDIATE_CATCH_EVENT")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ELEMENT_COMPLETED"),(0,r.kt)("td",null,"money-collected"),(0,r.kt)("td",null,"INTERMEDIATE_CATCH_EVENT"))))),(0,r.kt)("p",null,"References:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/reference/message-correlation/message-correlation"},"Message Correlation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/reference/expressions"},"Expressions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/reference/variables#inputoutput-variable-mappings"},"Variable Mappings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/reference/incidents"},"Incidents"))))}m.isMDXComponent=!0},47077:function(e,t,n){"use strict";t.Z=n.p+"assets/images/message-event-caefc4cc0ed913f367b609f17df3ded3.gif"},42356:function(e,t,n){"use strict";t.Z=n.p+"assets/images/message-events-7076a95560df1aaf5f1301d677bafcd6.png"}}]);