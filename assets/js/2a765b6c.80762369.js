(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[12603],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return t?r.createElement(d,c(c({ref:n},u),{},{components:t})):r.createElement(d,c({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},37422:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),c={id:"workflow-instance-create-nonblocking",title:"Create non-blocking workflow instances"},i=void 0,l={unversionedId:"product-manuals/clients/java-client-examples/workflow-instance-create-nonblocking",id:"version-0.26/product-manuals/clients/java-client-examples/workflow-instance-create-nonblocking",isDocsHomePage:!1,title:"Create non-blocking workflow instances",description:"Prerequisites",source:"@site/versioned_docs/version-0.26/product-manuals/clients/java-client-examples/workflow-instance-create-nonblocking.md",sourceDirName:"product-manuals/clients/java-client-examples",slug:"/product-manuals/clients/java-client-examples/workflow-instance-create-nonblocking",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/workflow-instance-create-nonblocking",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/clients/java-client-examples/workflow-instance-create-nonblocking.md",version:"0.26",frontMatter:{id:"workflow-instance-create-nonblocking",title:"Create non-blocking workflow instances"},sidebar:"version-0.26/Product Manuals",previous:{title:"Create a workflow instance",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/workflow-instance-create"},next:{title:"Create a workflow instance with results",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/workflow-instance-create-with-result"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"NonBlockingWorkflowInstanceCreator.java",id:"nonblockingworkflowinstancecreatorjava",children:[]}],u={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Running Zeebe broker with endpoint ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:26500")," (default)"),(0,a.kt)("li",{parentName:"ol"},"Run the ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/clients/java-client-examples/workflow-deploy"},"deploy a workflow example"))),(0,a.kt)("h2",{id:"nonblockingworkflowinstancecreatorjava"},"NonBlockingWorkflowInstanceCreator.java"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/java/io/zeebe/example/workflow/NonBlockingWorkflowInstanceCreator.java"},"Source on github")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"long instancesCreating = 0;\n\nwhile (instancesCreating < numberOfInstances) {\n    // this is non-blocking/async => returns a future\n    final ZeebeFuture<WorkflowInstanceEvent> future =\n        client.newCreateInstanceCommand().bpmnProcessId(bpmnProcessId).latestVersion().send();\n\n    // could put the future somewhere and eventually wait for its completion\n\n    instancesCreating++;\n}\n")))}p.isMDXComponent=!0}}]);