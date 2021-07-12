(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[73473],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<s;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90803:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return p}});var r=n(22122),a=n(19756),s=(n(67294),n(3905)),c={id:"process-instance-create-with-result",title:"Create a process instance with results"},o=void 0,i={unversionedId:"product-manuals/clients/java-client-examples/process-instance-create-with-result",id:"product-manuals/clients/java-client-examples/process-instance-create-with-result",isDocsHomePage:!1,title:"Create a process instance with results",description:"Prerequisites",source:"@site/docs/product-manuals/clients/java-client-examples/process-instance-create-with-result.md",sourceDirName:"product-manuals/clients/java-client-examples",slug:"/product-manuals/clients/java-client-examples/process-instance-create-with-result",permalink:"/docs/product-manuals/clients/java-client-examples/process-instance-create-with-result",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/clients/java-client-examples/process-instance-create-with-result.md",version:"current",frontMatter:{id:"process-instance-create-with-result",title:"Create a process instance with results"},sidebar:"Product Manuals",previous:{title:"Create non-blocking process instances",permalink:"/docs/product-manuals/clients/java-client-examples/process-instance-create-nonblocking"},next:{title:"Open a job worker",permalink:"/docs/product-manuals/clients/java-client-examples/job-worker-open"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"ProcessInstanceWithResultCreator.java",id:"processinstancewithresultcreatorjava",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Running Zeebe broker with endpoint ",(0,s.kt)("inlineCode",{parentName:"li"},"localhost:26500")," (default)"),(0,s.kt)("li",{parentName:"ol"},"Run the ",(0,s.kt)("a",{parentName:"li",href:"/docs/product-manuals/clients/java-client-examples/process-deploy"},"deploy a process example"),". Deploy ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/camunda-cloud/zeebe/tree/develop/samples/src/main/resources/demoProcessSingleTask.bpmn"},(0,s.kt)("inlineCode",{parentName:"a"},"demoProcessSingleTask.bpmn"))," instead of ",(0,s.kt)("inlineCode",{parentName:"li"},"demoProcess.bpmn"))),(0,s.kt)("h2",{id:"processinstancewithresultcreatorjava"},"ProcessInstanceWithResultCreator.java"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/tree/develop/samples/src/main/java/io/camunda/zeebe/example/process/ProcessInstanceWithResultCreator.java"},"Source on github")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'final ProcessInstanceResult processInstanceResult =\n    client\n        .newCreateInstanceCommand()\n        .bpmnProcessId(bpmnProcessId)\n        .latestVersion()\n        .withResult() // to await the completion of process execution and return result\n        .send()\n        .join();\n\nSystem.out.println(\n    "Process instance created with key: "\n        + processInstanceResult.getProcessInstanceKey()\n        + " and completed with results: "\n        + processInstanceResult.getVariables());\n')))}p.isMDXComponent=!0}}]);