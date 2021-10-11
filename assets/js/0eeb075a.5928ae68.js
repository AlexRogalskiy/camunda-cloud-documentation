(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[35286],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=s.createContext({}),l=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?s.createElement(h,o(o({ref:t},p),{},{components:n})):s.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51211:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var s=n(22122),r=n(19756),a=(n(67294),n(3905)),o={id:"process-instance-creation",title:"Process instance creation"},c=void 0,i={unversionedId:"components/concepts/process-instance-creation",id:"components/concepts/process-instance-creation",isDocsHomePage:!1,title:"Process instance creation",description:"Depending on the process definition, an instance of it can be created in several ways.",source:"@site/docs/components/concepts/process-instance-creation.md",sourceDirName:"components/concepts",slug:"/components/concepts/process-instance-creation",permalink:"/docs/components/concepts/process-instance-creation",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/components/concepts/process-instance-creation.md",version:"current",frontMatter:{id:"process-instance-creation",title:"Process instance creation"},sidebar:"Components",previous:{title:"Job workers",permalink:"/docs/components/concepts/job-workers"},next:{title:"Messages",permalink:"/docs/components/concepts/messages"}},l=[{value:"Commands",id:"commands",children:[{value:"Create and execute asynchronously",id:"create-and-execute-asynchronously",children:[]},{value:"Create and await results",id:"create-and-await-results",children:[]}]},{value:"Events",id:"events",children:[{value:"Message event",id:"message-event",children:[]},{value:"Timer event",id:"timer-event",children:[]}]}],p={toc:l};function u(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,s.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Depending on the process definition, an instance of it can be created in several ways."),(0,a.kt)("p",null,"At Camunda, this includes the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CreateProcessInstance")," commands"),(0,a.kt)("li",{parentName:"ul"},"Timer event handler"),(0,a.kt)("li",{parentName:"ul"},"Message event")),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("p",null,"A process instance is created by sending a command specifying the BPMN process id, or the unique key of the process."),(0,a.kt)("p",null,"There are two commands to create a process instance, outlined in the sections below."),(0,a.kt)("h3",{id:"create-and-execute-asynchronously"},"Create and execute asynchronously"),(0,a.kt)("p",null,"A process that has a ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/bpmn-processes/none-events/none-events#none-start-events"},"none start event")," is started explicitly using ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/reference/grpc#createprocessinstance-rpc"},"CreateProcessInstance")),"."),(0,a.kt)("p",null,"This command creates a new process instance and immediately responds with the process instance id. The execution of the process occurs after the response is sent."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-process",src:n(87903).Z})),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Code example"),(0,a.kt)("p",null,"Create a process instance:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'zbctl create instance "order-process"\n')),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n "processKey": 2251799813685249,\n "bpmnProcessId": "order-process",\n "version": 1,\n "processInstanceKey": 2251799813686019\n}\n\n')))),(0,a.kt)("h3",{id:"create-and-await-results"},"Create and await results"),(0,a.kt)("p",null,"Typically, process creation and execution are decoupled. However, there are use cases that need to collect the results of a process when its execution is complete."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/reference/grpc#createprocessinstancewithresult-rpc"},"CreateProcessInstanceWithResult"))," allows you to \u201csynchronously\u201d execute processes and receive the results via a set of variables. The response is sent when the process execution is complete."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-process",src:n(36936).Z})),(0,a.kt)("p",null,"This command is typically useful for short-running processes and processes that collect information."),(0,a.kt)("p",null,"If the process mutates system state, or further operations rely on the process outcome response to the client, consider designing your system for failure states and retries."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": When the client resends the command, it creates a new process instance."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Code example"),(0,a.kt)("p",null,"Create a process instance and await results:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'zbctl create instance "order-process" --withResult --variables \'{"orderId": "1234"}\'\n')),(0,a.kt)("p",null,"Response: (Note that the variables in the response depend on the process.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "processKey": 2251799813685249,\n  "bpmnProcessId": "order-process",\n  "version": 1,\n  "processInstanceKey": 2251799813686045,\n  "variables": "{\\"orderId\\":\\"1234\\"}"\n}\n')))),(0,a.kt)("p",null,"Failure scenarios applicable to other commands are applicable to this command as well. Clients may not get a response in the following cases even if the process execution is completed successfully:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Connection timeout"),": If the gRPC deadlines are not configured for long request timeout, the connection may be closed before the process is completed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Network connection loss"),": This can occur at several steps in the communication chain."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Failover"),": When the node processing this process crashes, another node continues the processing. The other node does not send the response because the request is registered on the first one."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Gateway failure"),": If the gateway the client is connected to fails, nodes inside the cluster cannot send the response to the client.")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("p",null,"Process instances are also created implicitly via various start events. Camunda Cloud supports message start events and timer start events."),(0,a.kt)("h3",{id:"message-event"},"Message event"),(0,a.kt)("p",null,"A process with a ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/bpmn-processes/message-events/message-events#message-start-events"},"message start event")," can be started by publishing a message with the name that matches the message name of the start event."),(0,a.kt)("p",null,"For each new message a new instance is created."),(0,a.kt)("h3",{id:"timer-event"},"Timer event"),(0,a.kt)("p",null,"A process can also have one or more ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/bpmn-processes/timer-events/timer-events#timer-start-events"},"timer start events"),". An instance of the process is created when the associated timer is triggered. Timers can also trigger periodically."))}u.isMDXComponent=!0},36936:function(e,t,n){"use strict";t.Z=n.p+"assets/images/create-process-with-result-a85699b136289b1303ffcd96a898943d.png"},87903:function(e,t,n){"use strict";t.Z=n.p+"assets/images/create-process-ee0ffa1a268d6040d11f13dbf7738671.png"}}]);