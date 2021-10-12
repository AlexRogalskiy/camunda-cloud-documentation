(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[77415],{3905:function(e,s,t){"use strict";t.d(s,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function a(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function r(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?r(Object(t),!0).forEach((function(s){a(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function o(e,s){if(null==e)return{};var t,n,a=function(e,s){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],s.indexOf(t)>=0||(a[t]=e[t]);return a}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var s=n.useContext(c),t=s;return e&&(t="function"==typeof e?e(s):i(i({},s),e)),t},p=function(e){var s=l(e.components);return n.createElement(c.Provider,{value:s},e.children)},u={inlineCode:"code",wrapper:function(e){var s=e.children;return n.createElement(n.Fragment,{},s)}},d=n.forwardRef((function(e,s){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return t?n.createElement(g,i(i({ref:s},p),{},{components:t})):n.createElement(g,i({ref:s},p))}));function m(e,s){var t=arguments,a=s&&s.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var c in s)hasOwnProperty.call(s,c)&&(o[c]=s[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<r;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49112:function(e,s,t){"use strict";t.r(s),t.d(s,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=t(22122),a=t(19756),r=(t(67294),t(3905)),i={id:"messages",title:"Messages"},o=void 0,c={unversionedId:"components/concepts/messages",id:"version-1.1/components/concepts/messages",isDocsHomePage:!1,title:"Messages",description:"Process instances can respond to incoming messages. Published messages must be mapped onto a process instance. This step is called message correlation.",source:"@site/versioned_docs/version-1.1/components/concepts/messages.md",sourceDirName:"components/concepts",slug:"/components/concepts/messages",permalink:"/docs/1.1/components/concepts/messages",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.1/components/concepts/messages.md",version:"1.1",frontMatter:{id:"messages",title:"Messages"},sidebar:"version-1.1/Components",previous:{title:"Process instance creation",permalink:"/docs/1.1/components/concepts/process-instance-creation"},next:{title:"Incidents",permalink:"/docs/1.1/components/concepts/incidents"}},l=[{value:"Message subscriptions",id:"message-subscriptions",children:[]},{value:"Message buffering",id:"message-buffering",children:[]},{value:"Message cardinality",id:"message-cardinality",children:[]},{value:"Message uniqueness",id:"message-uniqueness",children:[]},{value:"Message patterns",id:"message-patterns",children:[{value:"Message aggregator",id:"message-aggregator",children:[]},{value:"Single instance",id:"single-instance",children:[]}]}],p={toc:l};function u(e){var s=e.components,i=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Process instances can respond to incoming messages. Published messages must be mapped onto a process instance. This step is called ",(0,r.kt)("strong",{parentName:"p"},"message correlation"),"."),(0,r.kt)("h2",{id:"message-subscriptions"},"Message subscriptions"),(0,r.kt)("p",null,"A message is not sent to a process instance directly. Instead, the message correlation is based on subscriptions that contain the ",(0,r.kt)("inlineCode",{parentName:"p"},"message name")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"correlation key")," (also known as the correlation value)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Message Correlation",src:t(61364).Z})),(0,r.kt)("p",null,"A subscription is opened when a process instance awaits a message; for example, when entering a message catch event. The message name is defined either statically in the process (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Money collected"),") or dynamically as an expression. The correlation key is defined dynamically as an expression (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"= orderId"),"). The expressions are evaluated on activating the message catch event. The results of the evaluations are used as message name and as correlation key of the subscription (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'"order-123"'),")."),(0,r.kt)("p",null,"When a message is published and the message name and correlation key match to a subscription, the message is correlated to the corresponding process instance. If no proper subscription is opened, the message is discarded."),(0,r.kt)("p",null,"A subscription is closed when the corresponding element (e.g. the message catch event), or its scope is left. After a subscription is opened, it is not updated (for example, when the referenced process instance variable is changed.)"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Publish message via zbctl"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'zbctl publish message "Money collected" --correlationKey "order-123"\n')))),(0,r.kt)("h2",{id:"message-buffering"},"Message buffering"),(0,r.kt)("p",null,"Messages can be buffered for a given time. Buffering can be useful in a situation when it's not guaranteed the subscription is opened before the message is published."),(0,r.kt)("p",null,"A message has a ",(0,r.kt)("strong",{parentName:"p"},"time-to-live")," (",(0,r.kt)("strong",{parentName:"p"},"TTL"),") which specifies for how long it's buffered. Within this time, the message can be correlated to a process instance."),(0,r.kt)("p",null,"When a subscription is opened, it polls the buffer for a proper message. If a proper message exists, it is correlated to the corresponding process instance. In case multiple messages match to the subscription, the first published message is correlated (like a FIFO queue)."),(0,r.kt)("p",null,"The buffering of a message is disabled when its TTL is set to zero. If no proper subscription is open, the message is discarded."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Publish message with TTL via zbctl"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'zbctl publish message "Money collected" --correlationKey "order-123" --ttl 1h\n')))),(0,r.kt)("h2",{id:"message-cardinality"},"Message cardinality"),(0,r.kt)("p",null,"A message is correlated only ",(0,r.kt)("em",{parentName:"p"},"once")," to a process (based on the BPMN process id), across all versions of this process. If multiple subscriptions for the same process are opened (by multiple process instances or within one instance,) the message is correlated only to one of the subscriptions."),(0,r.kt)("p",null,"When subscriptions are opened for different processes, the message is correlated to ",(0,r.kt)("em",{parentName:"p"},"all")," of the subscriptions."),(0,r.kt)("p",null,"A message is ",(0,r.kt)("em",{parentName:"p"},"not")," correlated to a message start event subscription if an instance of the process is active and was created by a message with the same correlation key. If the message is buffered, it can be correlated after the active instance is ended. Otherwise, it is discarded."),(0,r.kt)("h2",{id:"message-uniqueness"},"Message uniqueness"),(0,r.kt)("p",null,"A message can have an optional message id \u2014 a unique id to ensure the message is published and processed only once (i.e. idempotency). The id can be any string; for example, a request id, a tracking number, or the offset/position in a message queue."),(0,r.kt)("p",null,"A message is rejected and not correlated if a message with the same name, the same correlation key, and the same id is already buffered. After the message is discarded from the buffer, a message with the same name, correlation key, and id can be published again."),(0,r.kt)("p",null,"The uniqueness check is disabled when no message id is set."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Publish message with id via zbctl"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'zbctl publish message "Money collected" --correlationKey "order-123" --messageId "tracking-12345"\n')))),(0,r.kt)("h2",{id:"message-patterns"},"Message patterns"),(0,r.kt)("p",null,"The following patterns describe solutions for common problems tha can be solved using message correlation."),(0,r.kt)("h3",{id:"message-aggregator"},"Message aggregator"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Problem"),": Aggregate/collect multiple messages, map-reduce, batching"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Message Aggregator",src:t(76121).Z})),(0,r.kt)("p",null,"The messages are published with a ",(0,r.kt)("inlineCode",{parentName:"p"},"TTL > 0")," and a correlation key that groups the messages per entity."),(0,r.kt)("p",null,"The first message creates a new process instance. The following messages are correlated to the same process instance if they have the same correlation key."),(0,r.kt)("p",null,"When the instance ends and messages with the same correlation key are not correlated yet, a new process instance is created."),(0,r.kt)("h3",{id:"single-instance"},"Single instance"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Problem"),": Create exactly one instance of a process"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Message Single Instance",src:t(19859).Z})),(0,r.kt)("p",null,"The message is published with a ",(0,r.kt)("inlineCode",{parentName:"p"},"TTL = 0")," and a correlation key that identifies the entity."),(0,r.kt)("p",null,"The first message creates a new process instance. The following messages are discarded and do not create a new instance if they have the same correlation key and the created process instance is still active."))}u.isMDXComponent=!0},76121:function(e,s,t){"use strict";s.Z=t.p+"assets/images/message-aggregator-1dbf88f6e2c7145aa238721cbf3570f1.png"},61364:function(e,s,t){"use strict";s.Z=t.p+"assets/images/message-correlation-f4f13de741bb19f5f42e0292ab1456ab.png"},19859:function(e,s,t){"use strict";s.Z=t.p+"assets/images/message-single-instance-0ecb1804dba659e08c28d4520a3e72b6.png"}}]);