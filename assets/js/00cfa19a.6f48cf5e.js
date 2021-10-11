(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[95200],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=s,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,c=new Array(a);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11865:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var r=n(22122),s=n(19756),a=(n(67294),n(3905)),c={id:"process-instance-create-with-result",title:"Create a process instance with results",description:"Let's analyze the prerequisites and code to create a process instance with real results."},o=void 0,i={unversionedId:"components/clients/java-client-examples/process-instance-create-with-result",id:"components/clients/java-client-examples/process-instance-create-with-result",isDocsHomePage:!1,title:"Create a process instance with results",description:"Let's analyze the prerequisites and code to create a process instance with real results.",source:"@site/docs/components/clients/java-client-examples/process-instance-create-with-result.md",sourceDirName:"components/clients/java-client-examples",slug:"/components/clients/java-client-examples/process-instance-create-with-result",permalink:"/docs/components/clients/java-client-examples/process-instance-create-with-result",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/components/clients/java-client-examples/process-instance-create-with-result.md",version:"current",frontMatter:{id:"process-instance-create-with-result",title:"Create a process instance with results",description:"Let's analyze the prerequisites and code to create a process instance with real results."},sidebar:"Components",previous:{title:"Create non-blocking process instances",permalink:"/docs/components/clients/java-client-examples/process-instance-create-nonblocking"},next:{title:"Open a job worker",permalink:"/docs/components/clients/java-client-examples/job-worker-open"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"ProcessInstanceWithResultCreator.java",id:"processinstancewithresultcreatorjava",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run the Zeebe broker with endpoint ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:26500")," (default)."),(0,a.kt)("li",{parentName:"ol"},"Run the ",(0,a.kt)("a",{parentName:"li",href:"/docs/components/clients/java-client-examples/process-deploy"},"deploy a process example"),". Deploy ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/camunda-cloud/zeebe/tree/develop/samples/src/main/resources/demoProcessSingleTask.bpmn"},(0,a.kt)("inlineCode",{parentName:"a"},"demoProcessSingleTask.bpmn"))," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"demoProcess.bpmn"),".")),(0,a.kt)("h2",{id:"processinstancewithresultcreatorjava"},"ProcessInstanceWithResultCreator.java"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/tree/develop/samples/src/main/java/io/camunda/zeebe/example/process/ProcessInstanceWithResultCreator.java"},"Source on GitHub")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'final ProcessInstanceResult processInstanceResult =\n    client\n        .newCreateInstanceCommand()\n        .bpmnProcessId(bpmnProcessId)\n        .latestVersion()\n        .withResult() // to await the completion of process execution and return result\n        .send()\n        .join();\n\nSystem.out.println(\n    "Process instance created with key: "\n        + processInstanceResult.getProcessInstanceKey()\n        + " and completed with results: "\n        + processInstanceResult.getVariables());\n')))}u.isMDXComponent=!0}}]);