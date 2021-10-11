(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[88054],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=l,v=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?a.createElement(v,r(r({ref:t},p),{},{components:n})):a.createElement(v,r({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49940:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(22122),l=n(19756),i=(n(67294),n(3905)),r={id:"call-activities",title:"Call activities"},o=void 0,s={unversionedId:"reference/bpmn-workflows/call-activities/call-activities",id:"version-0.26/reference/bpmn-workflows/call-activities/call-activities",isDocsHomePage:!1,title:"Call activities",description:"A call activity (aka reusable subprocess) allows to call/invoke another workflow as part of this workflow. It is similar to an embedded subprocess but the workflow is externalized (i.e. stored as separated BPMN) and can be invoked by different workflows.",source:"@site/versioned_docs/version-0.26/reference/bpmn-workflows/call-activities/call-activities.md",sourceDirName:"reference/bpmn-workflows/call-activities",slug:"/reference/bpmn-workflows/call-activities/call-activities",permalink:"/docs/0.26/reference/bpmn-workflows/call-activities/call-activities",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/reference/bpmn-workflows/call-activities/call-activities.md",version:"0.26",frontMatter:{id:"call-activities",title:"Call activities"},sidebar:"version-0.26/Reference",previous:{title:"Embedded subprocess",permalink:"/docs/0.26/reference/bpmn-workflows/embedded-subprocesses/embedded-subprocesses"},next:{title:"Event subprocess",permalink:"/docs/0.26/reference/bpmn-workflows/event-subprocesses/event-subprocesses"}},c=[{value:"Defining the called workflow",id:"defining-the-called-workflow",children:[]},{value:"Boundary events",id:"boundary-events",children:[]},{value:"Variable mappings",id:"variable-mappings",children:[]},{value:"Additional resources",id:"additional-resources",children:[]}],p={toc:c};function d(e){var t=e.components,r=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A call activity (aka reusable subprocess) allows to call/invoke another workflow as part of this workflow. It is similar to an ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.26/reference/bpmn-workflows/embedded-subprocesses/embedded-subprocesses"},"embedded subprocess")," but the workflow is externalized (i.e. stored as separated BPMN) and can be invoked by different workflows."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"call-activity",src:n(6025).Z})),(0,i.kt)("p",null,"When a call activity is entered then a new workflow instance of the referenced workflow is created. The new workflow instance gets activated at the ",(0,i.kt)("strong",{parentName:"p"},"none start event"),". The workflow can have start events of other types but they are ignored."),(0,i.kt)("p",null,"When the created workflow instance is completed then the call activity is left and the outgoing sequence flow is taken."),(0,i.kt)("h2",{id:"defining-the-called-workflow"},"Defining the called workflow"),(0,i.kt)("p",null,"A call activity must define the BPMN process id of the called workflow as ",(0,i.kt)("inlineCode",{parentName:"p"},"processId"),"."),(0,i.kt)("p",null,"The new instance of the defined workflow will be created of its ",(0,i.kt)("strong",{parentName:"p"},"latest version")," - at the point when the call activity is activated."),(0,i.kt)("p",null,"Usually, the ",(0,i.kt)("inlineCode",{parentName:"p"},"processId")," is defined as a static value (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"shipping-process"),") but it can also be defined as ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.26/components/concepts/expressions"},"expression")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'= "shipping-" + tenantId'),"). The expression is evaluated on activating the call activity and must result in a ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,i.kt)("h2",{id:"boundary-events"},"Boundary events"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"call-activity-boundary-event",src:n(95554).Z})),(0,i.kt)("p",null,"Interrupting and non-interrupting boundary events can be attached to a call activity."),(0,i.kt)("p",null,"When an interrupting boundary event is triggered then the call activity ",(0,i.kt)("strong",{parentName:"p"},"and")," the created workflow instance are terminated. The variables of the created workflow instance are not propagated to the call activity."),(0,i.kt)("p",null,"When an non-interrupting boundary event is triggered then the created workflow instance is not affected. The activities at the outgoing path have no access to the variables of the created workflow instance since they are bounded to the other workflow instance."),(0,i.kt)("h2",{id:"variable-mappings"},"Variable mappings"),(0,i.kt)("p",null,"When the call activity is activated then ",(0,i.kt)("strong",{parentName:"p"},"all variables")," of the call activity scope are copied to the created workflow instance."),(0,i.kt)("p",null,"Input mappings can be used to create new local variables in the scope of the call activity. These variables are also copied to the created workflow instance."),(0,i.kt)("p",null,"If the attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"propagateAllChildVariables")," is set (default: ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),") then all variables of the created workflow instance are propagated to the call activity. This behavior can be customized by defining output mappings at the call activity. The output mappings are applied on completing the call activity and only those variables that are defined in the output mappings are propagated."),(0,i.kt)("p",null,"It is recommended to disable the attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"propagateAllChildVariables")," or define output mappings if the call activity is in a parallel flow (e.g. when it is marked as ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.26/reference/bpmn-workflows/multi-instance/multi-instance#variable-mappings"},"parallel multi-instance"),"). Otherwise, it can happen that variables are overridden accidentally when they are changed in the parallel flow."),(0,i.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"XML representation"),(0,i.kt)("p",null,"A call activity with static process id:",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:callActivity id="task-A" name="A">\n  <bpmn:extensionElements>\n    <zeebe:calledElement processId="child-process-id" />\n  </bpmn:extensionElements>\n</bpmn:callActivity>\n')))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Using the BPMN modeler"),(0,i.kt)("p",null,"Adding a call activity with static process id:",(0,i.kt)("p",null,(0,i.kt)("img",{alt:"call-activity",src:n(74425).Z})))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Workflow lifecycle"),(0,i.kt)("p",null,"Workflow instance records of a call activity:",(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Intent"),(0,i.kt)("th",null,"Element Id"),(0,i.kt)("th",null,"Element Type")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"ELEMENT_ACTIVATING"),(0,i.kt)("td",null,"task-a"),(0,i.kt)("td",null,"CALL_ACTIVITY")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"ELEMENT_ACTIVATED"),(0,i.kt)("td",null,"task-a"),(0,i.kt)("td",null,"CALL_ACTIVITY")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"ELEMENT_ACTIVATING"),(0,i.kt)("td",null,"child-process-id"),(0,i.kt)("td",null,"PROCESS")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"ELEMENT_ACTIVATED"),(0,i.kt)("td",null,"child-process-id"),(0,i.kt)("td",null,"PROCESS")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"..."),(0,i.kt)("td",null,"..."),(0,i.kt)("td",null,"...")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"ELEMENT_COMPLETED"),(0,i.kt)("td",null,"child-process-id"),(0,i.kt)("td",null,"PROCESS")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"ELEMENT_COMPLETING"),(0,i.kt)("td",null,"task-a"),(0,i.kt)("td",null,"CALL_ACTIVITY")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"ELEMENT_COMPLETED"),(0,i.kt)("td",null,"task-a"),(0,i.kt)("td",null,"CALL_ACTIVITY"))),(0,i.kt)("p",null,"The workflow instance records of the created workflow instance have a reference to its parent workflow instance (",(0,i.kt)("inlineCode",{parentName:"p"},"parentWorkflowInstanceKey"),") and the element instance of the call activity (",(0,i.kt)("inlineCode",{parentName:"p"},"parentElementInstanceKey"),")."))),(0,i.kt)("p",null,"References:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.26/components/concepts/expressions"},"Expressions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.26/components/concepts/variables#variable-scopes"},"Variable scopes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.26/components/concepts/variables#inputoutput-variable-mappings"},"Variable mappings"))))}d.isMDXComponent=!0},74425:function(e,t,n){"use strict";t.Z=n.p+"assets/images/bpmn-modeler-call-activity-d49120ebbbaebe39e59b4a6269b7b6ea.gif"},95554:function(e,t){"use strict";t.Z="data:image/png;base64,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"},6025:function(e,t,n){"use strict";t.Z=n.p+"assets/images/call-activities-example-7688f849caadb26c9052867416700582.png"}}]);