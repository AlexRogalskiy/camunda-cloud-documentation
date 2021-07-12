(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[72097],{3905:function(e,t,l){"use strict";l.d(t,{Zo:function(){return o},kt:function(){return k}});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function A(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},o=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},E={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,o=A(e,["components","mdxType","originalType","parentName"]),s=c(l),k=a,p=s["".concat(u,".").concat(k)]||s[k]||E[k]||r;return l?n.createElement(p,i(i({ref:t},o),{},{components:l})):n.createElement(p,i({ref:t},o))}));function k(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=s;var A={};for(var u in t)hasOwnProperty.call(t,u)&&(A[u]=t[u]);A.originalType=e,A.mdxType="string"==typeof e?e:a,i[1]=A;for(var c=2;c<r;c++)i[c]=l[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}s.displayName="MDXCreateElement"},35802:function(e,t,l){"use strict";l.r(t),l.d(t,{frontMatter:function(){return i},contentTitle:function(){return A},metadata:function(){return u},toc:function(){return c},default:function(){return E}});var n=l(22122),a=l(19756),r=(l(67294),l(3905)),i={id:"parallel-gateways",title:"Parallel gateway"},A=void 0,u={unversionedId:"reference/bpmn-workflows/parallel-gateways/parallel-gateways",id:"version-0.26/reference/bpmn-workflows/parallel-gateways/parallel-gateways",isDocsHomePage:!1,title:"Parallel gateway",description:"A parallel gateway (aka AND-gateway) allows to split the flow into concurrent paths.",source:"@site/versioned_docs/version-0.26/reference/bpmn-workflows/parallel-gateways/parallel-gateways.md",sourceDirName:"reference/bpmn-workflows/parallel-gateways",slug:"/reference/bpmn-workflows/parallel-gateways/parallel-gateways",permalink:"/docs/0.26/reference/bpmn-workflows/parallel-gateways/parallel-gateways",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/reference/bpmn-workflows/parallel-gateways/parallel-gateways.md",version:"0.26",frontMatter:{id:"parallel-gateways",title:"Parallel gateway"},sidebar:"version-0.26/Reference",previous:{title:"Exclusive gateway",permalink:"/docs/0.26/reference/bpmn-workflows/exclusive-gateways/exclusive-gateways"},next:{title:"Event-based gateway",permalink:"/docs/0.26/reference/bpmn-workflows/event-based-gateways/event-based-gateways"}},c=[{value:"Additional Resources",id:"additional-resources",children:[]}],o={toc:c};function E(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A parallel gateway (aka AND-gateway) allows to split the flow into concurrent paths."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"workflow",src:l(22727).Z})),(0,r.kt)("p",null,"When a parallel gateway with multiple outgoing sequence flows is entered then all flows are taken. The paths are executed ",(0,r.kt)("strong",{parentName:"p"},"concurrently")," and independently. "),(0,r.kt)("p",null,"The concurrent paths can be ",(0,r.kt)("strong",{parentName:"p"},"joined")," using a parallel gateway with multiple incoming sequence flows. The workflow instance waits at the parallel gateway until each incoming sequence is taken."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note the outgoing paths of the parallel gateway are executed concurrently - and not parallel in the sense of parallel threads. All records of a workflow instance are written to the same partition (single stream processor).  ")),(0,r.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"XML representation"),(0,r.kt)("p",null,"A parallel gateway with two outgoing sequence flows:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:parallelGateway id="split" />\n\n<bpmn:sequenceFlow id="to-ship-parcel" sourceRef="split" \n  targetRef="shipParcel" />\n\n<bpmn:sequenceFlow id="to-process-payment" sourceRef="split" \n  targetRef="processPayment" />\n')))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Using the BPMN modeler"),(0,r.kt)("p",null,"Adding a parallel gateway with two outgoing sequence flows:",(0,r.kt)("p",null,(0,r.kt)("img",{alt:"parallel-gateway",src:l(62675).Z})," "))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Workflow lifecycle"),(0,r.kt)("p",null,"Workflow instance records of a parallel gateway:",(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Intent"),(0,r.kt)("th",null,"Element Id"),(0,r.kt)("th",null,"Element Type")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ELEMENT_ACTIVATING"),(0,r.kt)("td",null,"split"),(0,r.kt)("td",null,"PARALLEL_GATEWAY")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ELEMENT_ACTIVATED"),(0,r.kt)("td",null,"split"),(0,r.kt)("td",null,"PARALLEL_GATEWAY")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ELEMENT_COMPLETING"),(0,r.kt)("td",null,"split"),(0,r.kt)("td",null,"PARALLEL_GATEWAY")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ELEMENT_COMPLETED"),(0,r.kt)("td",null,"split"),(0,r.kt)("td",null,"PARALLEL_GATEWAY")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SEQUENCE_FLOW_TAKEN"),(0,r.kt)("td",null,"to-ship-parcel"),(0,r.kt)("td",null,"SEQUENCE_FLOW")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SEQUENCE_FLOW_TAKEN"),(0,r.kt)("td",null,"to-process-payment"),(0,r.kt)("td",null,"SEQUENCE_FLOW")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"..."),(0,r.kt)("td",null,"..."),(0,r.kt)("td",null,"...")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SEQUENCE_FLOW_TAKEN"),(0,r.kt)("td",null,"to-join-1"),(0,r.kt)("td",null,"SEQUENCE_FLOW")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"..."),(0,r.kt)("td",null,"..."),(0,r.kt)("td",null,"...")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SEQUENCE_FLOW_TAKEN"),(0,r.kt)("td",null,"to-join-2"),(0,r.kt)("td",null,"SEQUENCE_FLOW")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ELEMENT_ACTIVATING"),(0,r.kt)("td",null,"join"),(0,r.kt)("td",null,"PARALLEL_GATEWAY")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ELEMENT_ACTIVATED"),(0,r.kt)("td",null,"join"),(0,r.kt)("td",null,"PARALLEL_GATEWAY")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ELEMENT_COMPLETING"),(0,r.kt)("td",null,"join"),(0,r.kt)("td",null,"PARALLEL_GATEWAY")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ELEMENT_COMPLETED"),(0,r.kt)("td",null,"join"),(0,r.kt)("td",null,"PARALLEL_GATEWAY"))))))}E.isMDXComponent=!0},62675:function(e,t,l){"use strict";t.Z=l.p+"assets/images/parallel-gateway-9ee629af2bca17a936a5a255539cf2a0.gif"},22727:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);