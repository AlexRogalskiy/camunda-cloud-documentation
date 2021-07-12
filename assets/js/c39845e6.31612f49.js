(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[70148],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96956:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),s={id:"message-correlation",title:"Message Correlation"},i=void 0,l={unversionedId:"guides/message-correlation",id:"guides/message-correlation",isDocsHomePage:!1,title:"Message Correlation",description:"Message correlation is a powerful feature in Camunda Cloud. It allows you to target a running workflow with a state update from an external system asynchronously.",source:"@site/docs/guides/message-correlation.md",sourceDirName:"guides",slug:"/guides/message-correlation",permalink:"/docs/guides/message-correlation",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/guides/message-correlation.md",version:"current",frontMatter:{id:"message-correlation",title:"Message Correlation"},sidebar:"Guides",previous:{title:"Setting up your first development project",permalink:"/docs/guides/setting-up-development-project"},next:{title:"Introduction",permalink:"/docs/guides/update-guide/introduction"}},p=[{value:"Workflow",id:"workflow",children:[]},{value:"Running the demonstration",id:"running-the-demonstration",children:[]},{value:"Message Buffering",id:"message-buffering",children:[]},{value:"Common Mistakes",id:"common-mistakes",children:[]},{value:"Summary",id:"summary",children:[]}],u={toc:p};function c(e){var t=e.components,s=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Message correlation is a powerful feature in Camunda Cloud. It allows you to target a running workflow with a state update from an external system asynchronously. "),(0,o.kt)("p",null,"This tutorial uses the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/camunda-community-hub/zeebe-client-node-js"},"Node.js client"),", but it serves to illustrate message correlation concepts that are applicable to all language clients."),(0,o.kt)("p",null,"We will use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/camunda-community-hub/zeebe-simple-monitor"},"Simple Monitor")," to inspect the running workflow state. Simple Monitor is a community-supported tool, and is not designed to be used in production - however, it is useful during development."),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("p",null,"Here is the basic example from ",(0,o.kt)("a",{parentName:"p",href:"https://docs.camunda.io/docs/product-manuals/concepts/messages"},"the Camunda Cloud documentation"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(47137).Z})),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://camunda.com/download/modeler/"},"Camunda Modeler")," to open the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jwulf/zeebe-message-correlation/bpmn/test-messaging.bpmn"},"test-messaging")," file in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jwulf/zeebe-message-correlation"},"this project"),"."),(0,o.kt)("p",null,"Click on the intermediate message catch event to see how it is configured:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(87752).Z})),(0,o.kt)("p",null,"A crucial piece here is the ",(0,o.kt)("em",{parentName:"p"},"Subscription Correlation Key"),'. In a running instance of this workflow, an incoming "',(0,o.kt)("em",{parentName:"p"},"Money Collected"),'" message will have a ',(0,o.kt)("inlineCode",{parentName:"p"},"correlationKey")," property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'  zbc.publishMessage({\n    correlationKey: "345",\n    name: "Money Collected",\n    variables: {\n      paymentStatus: "paid"\n    });\n')),(0,o.kt)("p",null," The concrete value of the message ",(0,o.kt)("inlineCode",{parentName:"p"},"correlationKey")," is matched against running workflow instances, by comparing the supplied value against the ",(0,o.kt)("inlineCode",{parentName:"p"},"orderId")," variable of running instances subscribed to this message. This is the relationship established by setting the correlationKey to ",(0,o.kt)("inlineCode",{parentName:"p"},"orderId")," in the message catch event in the BPMN."),(0,o.kt)("h2",{id:"running-the-demonstration"},"Running the demonstration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Clone this repository.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install dependencies:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"npm i && npm i -g ts-node typescript\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In another terminal start the Zeebe Broker using the ",(0,o.kt)("inlineCode",{parentName:"p"},"simple-monitor")," profile from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/camunda-community-hub/zeebe-docker-compose"},"zeebe-docker-compose")," repo.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Deploy the workflow and start an instance:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"ts-node start-workflow.ts\n")),(0,o.kt)("p",{parentName:"li"},"This starts a workflow instance with the ",(0,o.kt)("inlineCode",{parentName:"p"},"orderId")," set to 345:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'await zbc.createProcessInstance("test-messaging", {\n     orderId: "345",\n     customerId: "110110",\n     paymentStatus: "unpaid"\n   })\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Now open Simple Monitor at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8082"},"http://localhost:8082"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click on the workflow instance. You will see the current state of the workflow:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(88306).Z})))),(0,o.kt)("p",null,'The numbers above the BPMN symbols indicate that no tokens are waiting at the start event, and one has passed through; and one token is waiting at the "Collect Money" task, and none have passed through.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Take a look at the "Variables" tab at the bottom of the screen. (If you don\'t see it you are probably looking at the workflow, rather than the instance. In that case, drill down into the instance):\n',(0,o.kt)("img",{src:n(75379).Z}),"\nYou can see that this workflow instance has the variable ",(0,o.kt)("inlineCode",{parentName:"p"},"orderId")," set to the value 345.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Now start the workers:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ts-node workers.ts\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Refresh Simple Monitor to see the current state of the workflow:\n",(0,o.kt)("img",{src:n(30857).Z}),"\nNow the token is at the message catch event, waiting for a message to be correlated.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Take a look at the "Message Subscriptions" tab:\n',(0,o.kt)("img",{src:n(13986).Z}),"\nYou can see that the broker has opened a message subscription for this workflow instance with the concrete value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"orderId")," 345. This was created when the token entered the message catch event.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Now send the message, in another terminal:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ts-node send-message.ts\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Refresh Simple Monitor, and you see that the message has been correlated and the workflow has run to completion:\n",(0,o.kt)("img",{src:n(63336).Z}))),(0,o.kt)("p",null,'The "Message Subscriptions" tab now reports that the message was correlated:'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(77427).Z})),(0,o.kt)("h2",{id:"message-buffering"},"Message Buffering"),(0,o.kt)("p",null,"Messages are buffered on the broker, so your external systems can emit messages before your process arrives at the catch event. The amount of time that a message is buffered is configured when publishing the message from the client library."),(0,o.kt)("p",null,"For example, to send a message that is buffered for 10 minutes with the JavaScript client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'  zbc.publishMessage({\n    correlationKey: "345",\n    name: "Money Collected",\n    variables: {\n      paymentStatus: "paid"\n    },\n    timeToLive: 600000\n  });\n')),(0,o.kt)("p",null,"Here is how you can see it in action:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Keep the workers running."),(0,o.kt)("li",{parentName:"ul"},"Publish the message:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"ts-node send-message.ts\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Click on "Messages" at the top of the Simple Monitor page. You will see the message buffered on the broker:')),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(84098).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Now start another instance of the workflow:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"ts-node start-workflow.ts\n")),(0,o.kt)("p",null,"You will see that the message is correlated to the workflow instance, even though it arrived before the workflow instance was started."),(0,o.kt)("h2",{id:"common-mistakes"},"Common Mistakes"),(0,o.kt)("p",null,"A couple of common gotchas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"correlationKey")," in the BPMN message definition is the name of the workflow variable to match against. The ",(0,o.kt)("inlineCode",{parentName:"p"},"correlationKey")," in the message is the concrete value to match against that variable in the workflow instance. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"An important thing to know is that the message subscription ",(0,o.kt)("em",{parentName:"p"},"is not updated after it is opened"),". That is not an issue in the case of a message catch event, however for boundary message events (both interrupting and non-interrupting) the subscription is opened ",(0,o.kt)("em",{parentName:"p"},"as soon as the token enters the bounding subprocess"),". If any service task modifies the ",(0,o.kt)("inlineCode",{parentName:"p"},"orderId")," value inside the subprocess, the subscription will not be updated.  "),(0,o.kt)("p",{parentName:"li"},"For example, the interrupting boundary message event in the following example will not be correlated on the updated value, because the subscription is opened when the token enters the subprocess, using the value at that time:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(55406).Z})),(0,o.kt)("p",{parentName:"li"},"If you need a boundary message event correlated on a value that is modified somewhere in your process, then put the boundary message event in a subprocess after the task that sets the variable. The message subscription for the boundary message event will be opened when the token enters the subprocess, with the current variable value."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(25884).Z})))),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"Message Correlation is a powerful feature in Camunda Cloud. Knowing how messages are correlated, and how and when the message subscription is created is important to design systems that perform as expected."),(0,o.kt)("p",null,"And Simple Monitor is a useful tool for inspecting the behavior of a local Camunda Cloud system to figure out what is happening during development."))}c.isMDXComponent=!0},84098:function(e,t,n){"use strict";t.Z=n.p+"assets/images/message-correlation-buffered-b207382072f58402f413dcd4f301813f.png"},63336:function(e,t,n){"use strict";t.Z=n.p+"assets/images/message-correlation-completed-6bc7fc438ddf1e7ba20d186ed1a5c426.png"},77427:function(e,t,n){"use strict";t.Z=n.p+"assets/images/message-correlation-correlated-b322945cb6db77827a0327d8855ffb82.png"},25884:function(e,t,n){"use strict";t.Z=n.p+"assets/images/message-correlation-like-this-88097160962111ea7249bcc608347b5d.png"},87752:function(e,t,n){"use strict";t.Z=n.p+"assets/images/message-correlation-message-properties-627243cb9e694064db03f530ef5ac438.png"},13986:function(e,t,n){"use strict";t.Z=n.p+"assets/images/message-correlation-message-subscriptions-c9d7715f731f55726fef33087c70226d.png"},55406:function(e,t,n){"use strict";t.Z=n.p+"assets/images/message-correlation-not-like-this-717eb904455937761500156655379fda.png"},75379:function(e,t,n){"use strict";t.Z=n.p+"assets/images/message-correlation-variables-41a1f106658660fc54a577f933e1b21c.png"},30857:function(e,t,n){"use strict";t.Z=n.p+"assets/images/message-correlation-wait-on-message-a529ffc5669daa071820eba0ceb1bdd7.png"},88306:function(e,t,n){"use strict";t.Z=n.p+"assets/images/message-correlation-workflow-state-a8ddda300727d18af1fd935f653437b0.png"},47137:function(e,t,n){"use strict";t.Z=n.p+"assets/images/message-correlation-workflow-f6fbfaca3e4d0b6de462f00562a4919e.png"}}]);