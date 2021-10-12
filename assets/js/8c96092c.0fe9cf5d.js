(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[94667],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=m(n),c=i,u=k["".concat(p,".").concat(c)]||k[c]||s[c]||l;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},92297:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var a=n(22122),i=n(19756),l=(n(67294),n(3905)),r={id:"026-to-100",title:"Update 0.26 to 1.0"},o=void 0,p={unversionedId:"guides/update-guide/026-to-100",id:"version-1.1/guides/update-guide/026-to-100",isDocsHomePage:!1,title:"Update 0.26 to 1.0",description:"The following sections explain which adjustments must be made to migrate from Camunda Cloud 0.26.x to 1.0.0 for each component of the system.",source:"@site/versioned_docs/version-1.1/guides/update-guide/026-to-100.md",sourceDirName:"guides/update-guide",slug:"/guides/update-guide/026-to-100",permalink:"/docs/1.1/guides/update-guide/026-to-100",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.1/guides/update-guide/026-to-100.md",version:"1.1",sidebarPosition:26,frontMatter:{id:"026-to-100",title:"Update 0.26 to 1.0"},sidebar:"version-1.1/Guides",previous:{title:"Introduction",permalink:"/docs/1.1/guides/update-guide/introduction"},next:{title:"Update 1.0 to 1.1",permalink:"/docs/1.1/guides/update-guide/100-to-110"}},m=[{value:"Server",id:"server",children:[{value:"Zeebe",id:"zeebe",children:[]},{value:"Operate",id:"operate",children:[]},{value:"Tasklist",id:"tasklist",children:[]},{value:"Elasticsearch",id:"elasticsearch",children:[]}]},{value:"Client",id:"client",children:[{value:"Zeebe Java Client",id:"zeebe-java-client",children:[]},{value:"Zeebe Go Client",id:"zeebe-go-client",children:[]}]}],d={toc:m};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The following sections explain which adjustments must be made to migrate from Camunda Cloud 0.26.x to 1.0.0 for each component of the system."),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Be aware that the major version update from 0.26 to 1.0 is not backwards\ncompatible. Therefore, data cannot be migrated from 0.26 to 1.0 and client\napplications must be adjusted to the new API versions."))),(0,l.kt)("h2",{id:"server"},"Server"),(0,l.kt)("h3",{id:"zeebe"},"Zeebe"),(0,l.kt)("h4",{id:"distribution"},"Distribution"),(0,l.kt)("p",null,"With Zeebe 1.0.0, the Java package names were adjusted. They changed from\n",(0,l.kt)("inlineCode",{parentName:"p"},"io.zeebe")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"io.camunda.zeebe"),". Therefore, any logging configurations and\nsimilar, which are based on the package names, must be adjusted."),(0,l.kt)("p",null,"Additionally, the group id of the Java artifacts were migrated from ",(0,l.kt)("inlineCode",{parentName:"p"},"io.zeebe"),"\nto ",(0,l.kt)("inlineCode",{parentName:"p"},"io.camunda"),". This requires all dependencies to the artifacts to be updated\nto use the new group id."),(0,l.kt)("p",null,"The downloadable artifact of the Zeebe distribution was renamed from:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"zeebe-distribution-${VERSION}.tar.gz")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"camunda-cloud-zeebe-${VERSION}.tar.gz"),","),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"zeebe-distribution-${VERSION}.zip")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"camunda-cloud-zeebe-${VERSION}.zip"))),(0,l.kt)("h4",{id:"workflow-engine"},"Workflow Engine"),(0,l.kt)("p",null,"The support for YAML workflows was removed from the workflow engine, after the\ndeprecation with 0.26. This means only ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.1/reference/bpmn-processes/bpmn-primer"},"BPMN\nprocesses")," are supported from now on."),(0,l.kt)("h4",{id:"elasticsearch-exporter"},"Elasticsearch Exporter"),(0,l.kt)("p",null,"The supported Elasticsearch version of the Elasticsearch Exporter was increased\nfrom ",(0,l.kt)("inlineCode",{parentName:"p"},"6.8")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"7.10"),", read more about this in the\n",(0,l.kt)("a",{parentName:"p",href:"#elasticsearch"},"Elasticsearch")," section."),(0,l.kt)("p",null,"The index templates of the Elasticsearch Exporter were migrated to the"),(0,l.kt)("h4",{id:"protocol"},"Protocol"),(0,l.kt)("p",null,"The Java protocol received the following adjustments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enum ",(0,l.kt)("inlineCode",{parentName:"p"},"IncidentIntent")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"remove ",(0,l.kt)("inlineCode",{parentName:"li"},"CREATE")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"CREATED")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"0")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"RESOLVE")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"1")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"RESOLVED")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"2")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enum ",(0,l.kt)("inlineCode",{parentName:"p"},"WorkflowInstanceIntent")," renamed to ",(0,l.kt)("inlineCode",{parentName:"p"},"ProcessInstanceIntent"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enum ",(0,l.kt)("inlineCode",{parentName:"p"},"WorkflowInstanceSubscriptionIntent")," renamed to ",(0,l.kt)("inlineCode",{parentName:"p"},"ProcessMessageSubscriptionIntent"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enum ",(0,l.kt)("inlineCode",{parentName:"p"},"WorkflowInstanceCreationIntent")," renamed to ",(0,l.kt)("inlineCode",{parentName:"p"},"ProcessInstanceCreationIntent"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enum ",(0,l.kt)("inlineCode",{parentName:"p"},"JobIntent")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"remove ",(0,l.kt)("inlineCode",{parentName:"li"},"CREATE")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"ACTIVATED")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"CREATED")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"0")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"COMPLETE")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"1")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"COMPLETED")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"2")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"TIME_OUT")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"3")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"TIMED_OUT")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"4")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"FAIL")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"5")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"FAILED")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"6")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"UPDATE_RETRIES")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"7")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"RETRIES_UPDATED")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"8")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"CANCEL")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"9")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"CANCELED")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"10")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"THROW_ERROR")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"11")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"ERROR_THROWN")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"12")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enum ",(0,l.kt)("inlineCode",{parentName:"p"},"MessageIntent")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename ",(0,l.kt)("inlineCode",{parentName:"li"},"DELETE")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"EXPIRE")),(0,l.kt)("li",{parentName:"ul"},"rename ",(0,l.kt)("inlineCode",{parentName:"li"},"DELETED")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"EXPIRED")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enum ",(0,l.kt)("inlineCode",{parentName:"p"},"MessageStartEventSubscriptionIntent")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"remove ",(0,l.kt)("inlineCode",{parentName:"li"},"OPEN"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"OPENED"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"CLOSE")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"CLOSED")),(0,l.kt)("li",{parentName:"ul"},"add ",(0,l.kt)("inlineCode",{parentName:"li"},"CREATED"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"CORRELATED")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"DELETED")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enum ",(0,l.kt)("inlineCode",{parentName:"p"},"MessageSubscriptionIntent")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename ",(0,l.kt)("inlineCode",{parentName:"li"},"OPEN")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"CREATE")),(0,l.kt)("li",{parentName:"ul"},"rename ",(0,l.kt)("inlineCode",{parentName:"li"},"OPENED")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"CREATED")),(0,l.kt)("li",{parentName:"ul"},"rename ",(0,l.kt)("inlineCode",{parentName:"li"},"CLOSE")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"DELETE")),(0,l.kt)("li",{parentName:"ul"},"rename ",(0,l.kt)("inlineCode",{parentName:"li"},"CLOSED")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"DELETED")),(0,l.kt)("li",{parentName:"ul"},"add `CORRELATING"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enum ",(0,l.kt)("inlineCode",{parentName:"p"},"TimerIntent")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"remove ",(0,l.kt)("inlineCode",{parentName:"li"},"CREATE")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"CREATED")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"0")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"TRIGGER")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"1")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"TRIGGERED")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"2")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"CANCEL")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"3")),(0,l.kt)("li",{parentName:"ul"},"change short value of ",(0,l.kt)("inlineCode",{parentName:"li"},"CANCELED")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"4")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Interface ",(0,l.kt)("inlineCode",{parentName:"p"},"DeploymentRecordValue")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"getDeployedWorkflows")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"getProcessMetadata")," and change type from ",(0,l.kt)("inlineCode",{parentName:"li"},"List<DeployedWorkflow>")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"List<ProcessMetadataValue>")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Interface ",(0,l.kt)("inlineCode",{parentName:"p"},"IncidentRecordValue")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"getWorkflowKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"getProcessDefinitionKey")),(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"getWorkflowInstanceKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"getProcessInstanceKey")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Interface ",(0,l.kt)("inlineCode",{parentName:"p"},"JobRecordValue")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"getWorkflowDefinitionVersion")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"getProcessDefinitionVersion")),(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"getWorkflowKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"getProcessDefinitionKey")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Interface ",(0,l.kt)("inlineCode",{parentName:"p"},"MessageStartEventSubscriptionRecordValue")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"getWorkflowKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"getProcessDefinitionKey")),(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"getWorkflowInstanceKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"getProcessInstanceKey")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Interface ",(0,l.kt)("inlineCode",{parentName:"p"},"MessageSubscriptionRecordValue")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"getWorkflowInstanceKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"getProcessInstanceKey")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Interface ",(0,l.kt)("inlineCode",{parentName:"p"},"TimerRecordValue")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"getWorkflowKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"getProcessDefinitionKey")),(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"getWorkflowInstanceKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"getProcessInstanceKey")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Interface ",(0,l.kt)("inlineCode",{parentName:"p"},"VariableRecordValue")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"getWorkflowInstanceKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"getProcessInstanceKey")),(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"getWorkflowKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"getProcessDefinitionKey"))))),(0,l.kt)("h4",{id:"grpc"},"gRPC"),(0,l.kt)("p",null,"The following changes were made to the gRPC protocol definition:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ActivatedJob")," message"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename field ",(0,l.kt)("inlineCode",{parentName:"li"},"workflowInstanceKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"processInstanceKey")),(0,l.kt)("li",{parentName:"ul"},"rename field ",(0,l.kt)("inlineCode",{parentName:"li"},"workflowDefinitionVersion")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"processDefinitionVersion")),(0,l.kt)("li",{parentName:"ul"},"rename field ",(0,l.kt)("inlineCode",{parentName:"li"},"workflowKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"processDefinitionKey")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"CancelWorkflowInstanceRequest")," message renamed to\n",(0,l.kt)("inlineCode",{parentName:"p"},"CancelProcessInstanceRequest")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename field ",(0,l.kt)("inlineCode",{parentName:"li"},"workflowInstanceKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"processInstanceKey")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"CancelWorkflowInstanceResponse")," message renamed to\n",(0,l.kt)("inlineCode",{parentName:"p"},"CancelProcessInstanceResponse"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"CreateWorkflowInstanceRequest")," message renamed to\n",(0,l.kt)("inlineCode",{parentName:"p"},"CreateProcessInstanceRequest")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename field ",(0,l.kt)("inlineCode",{parentName:"li"},"workflowKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"processDefinitionKey")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"CreateWorkflowInstanceResponse")," message renamed to\n",(0,l.kt)("inlineCode",{parentName:"p"},"CreateProcessInstanceResponse")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename field ",(0,l.kt)("inlineCode",{parentName:"li"},"workflowKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"processDefinitionKey")),(0,l.kt)("li",{parentName:"ul"},"rename field ",(0,l.kt)("inlineCode",{parentName:"li"},"workflowInstanceKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"processInstanceKey")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"CreateWorkflowInstanceWithResultRequest")," message renamed to\n",(0,l.kt)("inlineCode",{parentName:"p"},"CreateProcessInstanceWithResultRequest")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"change type of field ",(0,l.kt)("inlineCode",{parentName:"li"},"request")," from ",(0,l.kt)("inlineCode",{parentName:"li"},"CreateWorkflowInstanceRequest")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"CreateProcessInstanceRequest")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"CreateWorkflowInstanceWithResultResponse")," message renamed to\n",(0,l.kt)("inlineCode",{parentName:"p"},"CreateProcessInstanceWithResultResponse")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename field ",(0,l.kt)("inlineCode",{parentName:"li"},"workflowKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"processDefinitionKey")),(0,l.kt)("li",{parentName:"ul"},"rename field ",(0,l.kt)("inlineCode",{parentName:"li"},"workflowInstanceKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"processInstanceKey")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"DeployWorkflowRequest")," message renamed to ",(0,l.kt)("inlineCode",{parentName:"p"},"DeployProcessRequest")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename field ",(0,l.kt)("inlineCode",{parentName:"li"},"workflows")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"processes")," and change type from ",(0,l.kt)("inlineCode",{parentName:"li"},"WorkflowRequestObject")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"ProcessRequestObject")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"WorkflowRequestObject")," message renamed to ",(0,l.kt)("inlineCode",{parentName:"p"},"ProcessRequestObject")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"remove enum ",(0,l.kt)("inlineCode",{parentName:"li"},"ResourcetType")),(0,l.kt)("li",{parentName:"ul"},"remove field type"),(0,l.kt)("li",{parentName:"ul"},"change field id of ",(0,l.kt)("inlineCode",{parentName:"li"},"definition")," field to 2"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"DeployWorkflowResponse")," message renamed to ",(0,l.kt)("inlineCode",{parentName:"p"},"DeployProcessResponse")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename field ",(0,l.kt)("inlineCode",{parentName:"li"},"wokrflows")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"processes")," and change type from ",(0,l.kt)("inlineCode",{parentName:"li"},"WorkflowMetadata")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"ProcessMetadata")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"WorkflowMetadata")," message renamed to ",(0,l.kt)("inlineCode",{parentName:"p"},"ProcessMetadata")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename field ",(0,l.kt)("inlineCode",{parentName:"li"},"workflowKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"processDefinitionKey")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Partition")," message"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"enum ",(0,l.kt)("inlineCode",{parentName:"li"},"PartitionBrokerRole")," added ",(0,l.kt)("inlineCode",{parentName:"li"},"INACTIVE")," state"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Gateway")," service"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"rename rpc ",(0,l.kt)("inlineCode",{parentName:"p"},"CancelWorkflowInstance")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"CancelProcessInstance")," and change input  type from ",(0,l.kt)("inlineCode",{parentName:"p"},"CancelWorkflowInstanceRequest")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"CancelProcessInstanceRequest")," and output type from ",(0,l.kt)("inlineCode",{parentName:"p"},"CancelWorkflowInstanceResponse")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"CancelProcessInstanceResponse"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"rename rpc ",(0,l.kt)("inlineCode",{parentName:"p"},"CreateWorkflowInstance")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"CreateProcessInstance")," and change input  type from ",(0,l.kt)("inlineCode",{parentName:"p"},"CreateWorkflowInstanceRequest")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"CreateProcessInstanceRequest")," and output type from ",(0,l.kt)("inlineCode",{parentName:"p"},"CreateWorkflowInstanceResponse")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"CreateProcessInstanceResponse"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"rename rpc ",(0,l.kt)("inlineCode",{parentName:"p"},"CreateWorkflowInstanceWithResult")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"CreateProcessInstance")," and change input  type from ",(0,l.kt)("inlineCode",{parentName:"p"},"CreateWorkflowInstanceWithResultRequest")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"CreateProcessInstanceWithResultRequest")," and output type from ",(0,l.kt)("inlineCode",{parentName:"p"},"CreateWorkflowInstanceWithResultResponse")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"CreateProcessInstanceResponse"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"rename rpc ",(0,l.kt)("inlineCode",{parentName:"p"},"DeployWorkflow")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"DeployProcess")," and change input  type from ",(0,l.kt)("inlineCode",{parentName:"p"},"DeployWorkflowRequest")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"DeployProcessRequest")," and output type from ",(0,l.kt)("inlineCode",{parentName:"p"},"DeployWorkflowResponse")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"DeployProcessResponse")))))),(0,l.kt)("h4",{id:"exporter-api"},"Exporter API"),(0,l.kt)("p",null,"In the Java Exporter API, the depracted method ",(0,l.kt)("inlineCode",{parentName:"p"},"Controller#scheduleTask")," was removed."),(0,l.kt)("h3",{id:"operate"},"Operate"),(0,l.kt)("p",null,"With Operate 1.0.0, the Java package names were adjusted. They changed from\n",(0,l.kt)("inlineCode",{parentName:"p"},"org.camunda.operate")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"io.camunda.operate"),". Therefore, any logging\nconfigurations and similar, which are based on the package names, must be\nadjusted."),(0,l.kt)("p",null,"The downloadable artifact of the Operate distribution was renamed from:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"camunda-operate-${VERSION}.tar.gz")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"camunda-cloud-operate-${VERSION}.tar.gz"),","),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"camunda-operate-${VERSION}.zip")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"camunda-cloud-operate-${VERSION}.zip"))),(0,l.kt)("p",null,"The supported Elasticsearch version was increased from ",(0,l.kt)("inlineCode",{parentName:"p"},"6.8")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"7.10"),". Read\nmore about this in the ",(0,l.kt)("a",{parentName:"p",href:"#elasticsearch"},"Elasticsearch")," section."),(0,l.kt)("h3",{id:"tasklist"},"Tasklist"),(0,l.kt)("p",null,"With Tasklist 1.0.0, the Java package names were adjusted. They changed from\n",(0,l.kt)("inlineCode",{parentName:"p"},"io.zeebe.tasklist")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"io.camunda.tasklist"),". Therefore, any logging\nconfigurations and similar, which are based on the package names, must be\nadjusted."),(0,l.kt)("p",null,"Additionally, the configuration prefix was migrated from ",(0,l.kt)("inlineCode",{parentName:"p"},"zeebe.tasklist")," to\n",(0,l.kt)("inlineCode",{parentName:"p"},"camunda.tasklist"),", which requires all configurations to be adjusted to the new\nprefix."),(0,l.kt)("p",null,"The downloadable artifact of the Tasklist distribution was renamed from:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"zeebe-tasklist-${VERSION}.tar.gz")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"camunda-cloud-tasklist-${VERSION}.tar.gz"),","),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"zeebe-tasklist-${VERSION}.zip")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"camunda-cloud-tasklist-${VERSION}.zip"))),(0,l.kt)("p",null,"The supported Elasticsearch version was increased from ",(0,l.kt)("inlineCode",{parentName:"p"},"6.8")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"7.10"),". Read\nmore about this in the ",(0,l.kt)("a",{parentName:"p",href:"#elasticsearch"},"Elasticsearch")," section."),(0,l.kt)("h3",{id:"elasticsearch"},"Elasticsearch"),(0,l.kt)("p",null,"Zeebe, Operate, and Tasklist use Elasticsearch as Datastore to exchange the event\nstream from Zeebe's exporter, and store their own data model representation."),(0,l.kt)("p",null,"Camunda Cloud 1.0 requires an update from Elasticsearch 6.8 to 7.10."),(0,l.kt)("p",null,"Follow the ",(0,l.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-upgrade.html"},"update guide from\nElasticsearch"),",\nto migrate existing data."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Zeebe, Operate, and Tasklist data inside Elasticsearch cannot be migrated, it can only be preserved for\nhistroy or audit purpose, but cannot be loaded by Camunda Cloud 1.0."))),(0,l.kt)("p",null,"If you want to keep the existing data in Elasticsearch, ensure you set a\nnew index prefix for all systems. See the configuration documentation for\n",(0,l.kt)("a",{parentName:"p",href:"/docs/1.1/components/zeebe/deployment-guide/index"},"Zeebe"),",\n",(0,l.kt)("a",{parentName:"p",href:"/docs/1.1/components/operate/deployment/configuration"},"Operate"),", and ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.1/components/tasklist/deployment/configuration"},"Tasklist"),"."),(0,l.kt)("h2",{id:"client"},"Client"),(0,l.kt)("h3",{id:"zeebe-java-client"},"Zeebe Java Client"),(0,l.kt)("p",null,"With Zeebe 1.0.0, the Java package names were adjusted. They changed from\n",(0,l.kt)("inlineCode",{parentName:"p"},"io.zeebe")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"io.camunda.zeebe"),". Therefore, any imports and logging\nconfigurations and similar, which are based on the package names, must be\nadjusted."),(0,l.kt)("p",null,"Additionally, the group id of the Java artifacts were migrated from ",(0,l.kt)("inlineCode",{parentName:"p"},"io.zeebe"),"\nto ",(0,l.kt)("inlineCode",{parentName:"p"},"io.camunda"),". This requires all dependencies to the artifacts to be updated\nto use the new group id."),(0,l.kt)("p",null,"The public API of the Java client changed as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Interface ",(0,l.kt)("inlineCode",{parentName:"p"},"ActivatedJob")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"getWorkflowInstanceKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"getProcessInstanceKey")),(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"getWorkflowDefinitionVersion")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"getProcessDefinitionVersion")),(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"getWorkflowKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"getProcessDefinitionKey")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Class ",(0,l.kt)("inlineCode",{parentName:"p"},"ClientProperties")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"remove deprecated field ",(0,l.kt)("inlineCode",{parentName:"li"},"BROKER_CONTACTPOINT")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Interface ",(0,l.kt)("inlineCode",{parentName:"p"},"ZeebeClientBuilder")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"remove deprecated method ",(0,l.kt)("inlineCode",{parentName:"li"},"brokerContactPoint")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Interface ",(0,l.kt)("inlineCode",{parentName:"p"},"ZeebeClientConfiguration")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"remove deprecated method ",(0,l.kt)("inlineCode",{parentName:"li"},"getBrokerContactPoint")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Interface ",(0,l.kt)("inlineCode",{parentName:"p"},"ZeebeClient")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"change return type of ",(0,l.kt)("inlineCode",{parentName:"li"},"newDeployCommand")," from ",(0,l.kt)("inlineCode",{parentName:"li"},"DeployWorkflowCommandStep1")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"DeployProcessCommandStep1")),(0,l.kt)("li",{parentName:"ul"},"change return type of ",(0,l.kt)("inlineCode",{parentName:"li"},"newCreateInstanceCommand")," from ",(0,l.kt)("inlineCode",{parentName:"li"},"CreateWorkflowInstanceCommandStep1")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"CreateProcessInstanceCommandStep1")),(0,l.kt)("li",{parentName:"ul"},"change return type of ",(0,l.kt)("inlineCode",{parentName:"li"},"newCancelInstanceCommand")," from ",(0,l.kt)("inlineCode",{parentName:"li"},"CancelWorkflowInstanceCommandStep1")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"CancelProcessInstanceCommandStep1"))))),(0,l.kt)("h3",{id:"zeebe-go-client"},"Zeebe Go Client"),(0,l.kt)("p",null,"The repository of Zeebe was moved from ",(0,l.kt)("inlineCode",{parentName:"p"},"github.com/zeebe-io/zeebe")," to\n",(0,l.kt)("inlineCode",{parentName:"p"},"github.com/camunda-cloud/zeebe"),". Therefore, all go dependencies and imports must be adjusted to the new GitHub URL."),(0,l.kt)("p",null,"The public API of the Go client was changed as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Interface ",(0,l.kt)("inlineCode",{parentName:"p"},"CancelInstanceStep1")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"WorkflowInstanceKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"ProcessInstanceKey")," and change return type from ",(0,l.kt)("inlineCode",{parentName:"li"},"DispatchCancelWorkflowInstanceCommand")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"DispatchCancelProcessInstanceCommand")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Interface ",(0,l.kt)("inlineCode",{parentName:"p"},"DispatchCancelWorkflowInstanceCommand")," renamed to ",(0,l.kt)("inlineCode",{parentName:"p"},"DispatchCancelProcessInstanceCommand"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Interface ",(0,l.kt)("inlineCode",{parentName:"p"},"CancelWorkflowInstanceCommand")," renamed to ",(0,l.kt)("inlineCode",{parentName:"p"},"CancelProcessInstanceCommand")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"WorkflowInstanceKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"ProcessInstanceKey")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Interface ",(0,l.kt)("inlineCode",{parentName:"p"},"CreateInstanceCommandStep1")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"WorkflowKey")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"ProcessDefinitionKey")," and change ",(0,l.kt)("inlineCode",{parentName:"li"},"DispatchCancelProcessInstanceCommand")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Struct ",(0,l.kt)("inlineCode",{parentName:"p"},"DeployCommand")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"method ",(0,l.kt)("inlineCode",{parentName:"li"},"AddResource(definition, name, resourceType)")," remove ",(0,l.kt)("inlineCode",{parentName:"li"},"resourceType")," from parameter list"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Interface ",(0,l.kt)("inlineCode",{parentName:"p"},"Client")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"rename method ",(0,l.kt)("inlineCode",{parentName:"li"},"NewDeployWorkflowCommand")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"NewDeployProcessCommand"))))))}s.isMDXComponent=!0}}]);