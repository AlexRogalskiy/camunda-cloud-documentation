(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[17969],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return d},kt:function(){return p}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(t),p=o,f=h["".concat(s,".").concat(p)]||h[p]||u[p]||a;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=h;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},33812:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),i={id:"error-events",title:"Error events"},l=void 0,s={unversionedId:"reference/bpmn-workflows/error-events/error-events",id:"version-0.26/reference/bpmn-workflows/error-events/error-events",isDocsHomePage:!1,title:"Error events",description:"Error events are events which reference an error. They are used to handle business errors in a workflow.",source:"@site/versioned_docs/version-0.26/reference/bpmn-workflows/error-events/error-events.md",sourceDirName:"reference/bpmn-workflows/error-events",slug:"/reference/bpmn-workflows/error-events/error-events",permalink:"/docs/0.26/reference/bpmn-workflows/error-events/error-events",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/reference/bpmn-workflows/error-events/error-events.md",version:"0.26",frontMatter:{id:"error-events",title:"Error events"},sidebar:"version-0.26/Reference",previous:{title:"Timer events",permalink:"/docs/0.26/reference/bpmn-workflows/timer-events/timer-events"},next:{title:"Overview",permalink:"/docs/0.26/reference/bpmn-workflows/subprocesses"}},c=[{value:"Defining the error",id:"defining-the-error",children:[]},{value:"Catching the error",id:"catching-the-error",children:[]},{value:"Throwing the error",id:"throwing-the-error",children:[]},{value:"Unhandled errors",id:"unhandled-errors",children:[]},{value:"Business error vs. technical error",id:"business-error-vs-technical-error",children:[]},{value:"Additional resources",id:"additional-resources",children:[]}],d={toc:c};function u(e){var r=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Error events are events which reference an error. They are used to handle business errors in a workflow."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"workflow",src:t(19609).Z})),(0,a.kt)("p",null,"An error indicates that some kind of business error has occurred which should be handled in the workflow, for example, by taking a different path to compensate the error."),(0,a.kt)("h2",{id:"defining-the-error"},"Defining the error"),(0,a.kt)("p",null,"An error can be referenced by one or more error events. It must define the ",(0,a.kt)("inlineCode",{parentName:"p"},"errorCode")," (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"Invalid Credit Card"),") of the error."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"errorCode")," is a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," that must match to the error code that is sent by the client command or from the error end event."),(0,a.kt)("h2",{id:"catching-the-error"},"Catching the error"),(0,a.kt)("p",null,"An error can be caught using an error ",(0,a.kt)("strong",{parentName:"p"},"boundary event")," or an error ",(0,a.kt)("strong",{parentName:"p"},"event subprocess"),"."),(0,a.kt)("p",null,"The boundary event or the event subprocess must be interrupting. When the error is caught then the service task gets terminated and the boundary event or event subprocess gets activated. That means the workflow instance continues where the error is caught instead of following the regular path."),(0,a.kt)("p",null,"An error is caught by the first event in the scope hierarchy that matches the error code. If the error is thrown form a service task then it can be caught by an attached boundary event. If the task has no boundary event or the error code does not match then the error is propagated to the parent or root scope of the workflow instance."),(0,a.kt)("p",null,"In case the workflow instance is created via call activity, the error can also be caught in the calling parent workflow instance."),(0,a.kt)("h2",{id:"throwing-the-error"},"Throwing the error"),(0,a.kt)("p",null,"An error can be thrown from a ",(0,a.kt)("strong",{parentName:"p"},"client command")," while processing a job. See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.26/reference/grpc#throwerror-rpc"},"gRPC command")," for details."),(0,a.kt)("p",null,"Alternatively, an error can also be thrown inside a workflow using an error ",(0,a.kt)("strong",{parentName:"p"},"end event"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"workflow",src:t(57887).Z})),(0,a.kt)("h2",{id:"unhandled-errors"},"Unhandled errors"),(0,a.kt)("p",null,"When an error is triggered then it should be handled in the workflow. If it is not handled (e.g. unexpected error code) then an ",(0,a.kt)("strong",{parentName:"p"},"incident")," is raised to indicate the failure. The incident is attached to the corresponding service task of the processed job or the error end event."),(0,a.kt)("p",null,"The incident can not be solved by the user because the failure is in the workflow itself that can not be changed to handle the error for this workflow instance."),(0,a.kt)("h2",{id:"business-error-vs-technical-error"},"Business error vs. technical error"),(0,a.kt)("p",null,"While processing a job, two different types of errors can be occurred: a technical error (e.g. database connection interrupted) and a business error (e.g. invalid credit card)."),(0,a.kt)("p",null,"A technical error is usually unexpected and should not be handled in the workflow. The error may disappear when the job is retried, or an incident is created to indicate that an user interaction is required."),(0,a.kt)("p",null,"A business error is expected and is handled in the workflow. The workflow may take a different path to compensate the error or undo previous actions."),(0,a.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"XML representation"),(0,a.kt)("p",null,"A boundary error event:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:error id="invalid-credit-card-error" errorCode="Invalid Credit Card" />\n\n<bpmn:boundaryEvent id="invalid-credit-card" name="Invalid Credit Card" attachedToRef="collect-money">\n <bpmn:errorEventDefinition errorRef="invalid-credit-card-error" />\n</bpmn:boundaryEvent>\n\n')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Using the BPMN modeler"),(0,a.kt)("p",null,"Adding an error boundary event:",(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bpmn-modeler",src:t(9458).Z})))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Workflow lifecycle"),(0,a.kt)("p",null,"Workflow instance records of an error boundary event:",(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Intent"),(0,a.kt)("th",null,"Element Id"),(0,a.kt)("th",null,"Element Type")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"EVENT_OCCURRED"),(0,a.kt)("td",null,"collect-money"),(0,a.kt)("td",null,"SERVICE_TASK")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ELEMENT_TERMINATING"),(0,a.kt)("td",null,"collect-money"),(0,a.kt)("td",null,"SERVICE_TASK")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ELEMENT_TERMINATED"),(0,a.kt)("td",null,"collect-money"),(0,a.kt)("td",null,"SERVICE_TASK")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ELEMENT_ACTIVATING"),(0,a.kt)("td",null,"invalid-credit-card"),(0,a.kt)("td",null,"BOUNDARY_EVENT")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ELEMENT_ACTIVATED"),(0,a.kt)("td",null,"invalid-credit-card"),(0,a.kt)("td",null,"BOUNDARY_EVENT")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ELEMENT_COMPLETING"),(0,a.kt)("td",null,"invalid-credit-card"),(0,a.kt)("td",null,"BOUNDARY_EVENT")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"ELEMENT_COMPLETED"),(0,a.kt)("td",null,"invalid-credit-card"),(0,a.kt)("td",null,"BOUNDARY_EVENT"))))),(0,a.kt)("p",null,"References:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.26/components/concepts/incidents"},"Incidents"))))}u.isMDXComponent=!0},9458:function(e,r,t){"use strict";r.Z=t.p+"assets/images/bpmn-modeler-error-events-e6dbdc38324a6582694a669ee15b4743.gif"},19609:function(e,r,t){"use strict";r.Z=t.p+"assets/images/error-events-7917aba273f3be0d81b11f475af3fef8.png"},57887:function(e,r,t){"use strict";r.Z=t.p+"assets/images/error-throw-events-c24a50300b556cef654d7f82a4b8bab3.png"}}]);