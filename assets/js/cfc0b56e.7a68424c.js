(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[22322],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return d},kt:function(){return h}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),h=o,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return t?n.createElement(m,s(s({ref:r},d),{},{components:t})):n.createElement(m,s({ref:r},d))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},48487:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),s={id:"error-events",title:"Error events"},i=void 0,c={unversionedId:"reference/bpmn-processes/error-events/error-events",id:"reference/bpmn-processes/error-events/error-events",isDocsHomePage:!1,title:"Error events",description:"In process automation, you may encounter errors related to the process, also known as business errors.",source:"@site/docs/reference/bpmn-processes/error-events/error-events.md",sourceDirName:"reference/bpmn-processes/error-events",slug:"/reference/bpmn-processes/error-events/error-events",permalink:"/docs/reference/bpmn-processes/error-events/error-events",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/bpmn-processes/error-events/error-events.md",version:"current",frontMatter:{id:"error-events",title:"Error events"},sidebar:"Reference",previous:{title:"Timer events",permalink:"/docs/reference/bpmn-processes/timer-events/timer-events"},next:{title:"Overview",permalink:"/docs/reference/bpmn-processes/subprocesses"}},l=[{value:"Defining the error",id:"defining-the-error",children:[]},{value:"Throwing the error",id:"throwing-the-error",children:[]},{value:"Catching the error",id:"catching-the-error",children:[]},{value:"Unhandled errors",id:"unhandled-errors",children:[]},{value:"Business error vs. technical error",id:"business-error-vs-technical-error",children:[]},{value:"Additional resources",id:"additional-resources",children:[{value:"XML representation",id:"xml-representation",children:[]},{value:"References",id:"references",children:[]}]}],d={toc:l};function u(e){var r=e.components,s=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In process automation, you may encounter errors related to the process, also known as business errors. "),(0,a.kt)("p",null,"These business errors may include the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An invalid credit card was used as the default payment method to collect money."),(0,a.kt)("li",{parentName:"ul"},"An order was canceled after it was already paid for.")),(0,a.kt)("p",null,"When you encounter a business error, you may need to take a different path than usual or compensate for the error."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"process",src:t(58415).Z})),(0,a.kt)("h2",{id:"defining-the-error"},"Defining the error"),(0,a.kt)("p",null,"In BPMN, business errors are represented as errors and error events. ",(0,a.kt)("strong",{parentName:"p"},"Errors")," define the possible errors that can occur. ",(0,a.kt)("strong",{parentName:"p"},"Error events")," are elements in the process that refer to the defined errors. An error can be referenced by one or more error events."),(0,a.kt)("p",null,"An error must define an ",(0,a.kt)("inlineCode",{parentName:"p"},"errorCode")," (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"Invalid Credit Card"),"). The ",(0,a.kt)("inlineCode",{parentName:"p"},"errorCode")," is a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," used to match a thrown error to the error catch events."),(0,a.kt)("h2",{id:"throwing-the-error"},"Throwing the error"),(0,a.kt)("p",null,"An error can be thrown from within the process using an error ",(0,a.kt)("strong",{parentName:"p"},"end event"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"process",src:t(14141).Z})),(0,a.kt)("p",null,"Alternatively, you can inform Zeebe that a business error has occurred using a ",(0,a.kt)("strong",{parentName:"p"},"client command"),". This throw error client command can only be used while processing a job."),(0,a.kt)("p",null,"In addition to throwing the error, this also disables the job and stops it from being activated or completed by other job workers. See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/grpc#throwerror-rpc"},"gRPC command")," for details."),(0,a.kt)("h2",{id:"catching-the-error"},"Catching the error"),(0,a.kt)("p",null,"A thrown error can be caught by an error catch event. Specifically, using an error ",(0,a.kt)("strong",{parentName:"p"},"boundary event")," or an error ",(0,a.kt)("strong",{parentName:"p"},"event subprocess"),"."),(0,a.kt)("p",null,"Starting at the scope where the error was thrown, the error code is matched against the attached error boundary events and error event sub processes at that level."),(0,a.kt)("p",null,"An error is caught by the first event in the scope hierarchy that matches the error code. At each scope, the error is either caught, or propagated to the parent scope."),(0,a.kt)("p",null,"If the process instance is created via call activity, the error can also be caught in the calling parent process instance."),(0,a.kt)("p",null,"Error boundary events and error event subprocesses must be interrupting. This means the process instance will not continue along the regular path when the error was caught. Instead, it continues where the error is caught."),(0,a.kt)("p",null,"If the error is thrown for a job, the associated task is terminated first. To continue the execution, the error boundary event or error event subprocess that caught the error are activated."),(0,a.kt)("h2",{id:"unhandled-errors"},"Unhandled errors"),(0,a.kt)("p",null,"When an error is thrown it should be caught. If it is not caught, an ",(0,a.kt)("strong",{parentName:"p"},"incident")," (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"Unhandled error event"),") is raised to indicate the failure. The incident is attached to the corresponding element where the error was thrown (i.e. the task of the processed job or the error end event)."),(0,a.kt)("p",null,"When you resolve the incident attached to a task, it ignores the error, re-enables the job, and allows it to be activated and completed by a job worker once again."),(0,a.kt)("p",null,"The incident attached to an error end event cannot be resolved by a user because the failure is in the process itself. The process cannot be changed to catch the error for this process instance."),(0,a.kt)("h2",{id:"business-error-vs-technical-error"},"Business error vs. technical error"),(0,a.kt)("p",null,"While processing a job, two different types of errors can occur:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A technical error (e.g. database connection interrupted)"),(0,a.kt)("li",{parentName:"ul"},"A business error (e.g. invalid credit card)")),(0,a.kt)("p",null,"A technical error is usually unexpected and should not be dealt with in the process. The error may disappear when the job is retried, or an incident is created to indicate a user interaction is required."),(0,a.kt)("p",null,"A business error is expected and should be dealt with in the process. The process may take a different path to compensate for the error or undo previous actions."),(0,a.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,a.kt)("h3",{id:"xml-representation"},"XML representation"),(0,a.kt)("p",null,"A boundary error event:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:error id="invalid-credit-card-error" errorCode="Invalid Credit Card" />\n\n<bpmn:boundaryEvent id="invalid-credit-card" name="Invalid Credit Card" attachedToRef="collect-money">\n <bpmn:errorEventDefinition errorRef="invalid-credit-card-error" />\n</bpmn:boundaryEvent>\n\n')),(0,a.kt)("h3",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/components/concepts/incidents"},"Incidents"))))}u.isMDXComponent=!0},58415:function(e,r,t){"use strict";r.Z=t.p+"assets/images/error-events-7917aba273f3be0d81b11f475af3fef8.png"},14141:function(e,r,t){"use strict";r.Z=t.p+"assets/images/error-throw-events-c24a50300b556cef654d7f82a4b8bab3.png"}}]);