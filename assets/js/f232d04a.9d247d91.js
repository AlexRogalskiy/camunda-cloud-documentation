(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[59874],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92043:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={id:"workflow-instance-create-with-result",title:"Create a Workflow Instance and Await Result"},c=void 0,l={unversionedId:"components/zeebe/clients/java-client-examples/workflow-instance-create-with-result",id:"version-0.25/components/zeebe/clients/java-client-examples/workflow-instance-create-with-result",isDocsHomePage:!1,title:"Create a Workflow Instance and Await Result",description:"Prerequisites",source:"@site/versioned_docs/version-0.25/components/zeebe/clients/java-client-examples/workflow-instance-create-with-result.md",sourceDirName:"components/zeebe/clients/java-client-examples",slug:"/components/zeebe/clients/java-client-examples/workflow-instance-create-with-result",permalink:"/docs/0.25/components/zeebe/clients/java-client-examples/workflow-instance-create-with-result",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/components/zeebe/clients/java-client-examples/workflow-instance-create-with-result.md",version:"0.25",frontMatter:{id:"workflow-instance-create-with-result",title:"Create a Workflow Instance and Await Result"},sidebar:"version-0.25/Components",previous:{title:"Create Workflow Instances Non-Blocking",permalink:"/docs/0.25/components/zeebe/clients/java-client-examples/workflow-instance-create-nonblocking"},next:{title:"Open a Job Worker",permalink:"/docs/0.25/components/zeebe/clients/java-client-examples/job-worker-open"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"WorkflowInstanceWithResultCreator.java",id:"workflowinstancewithresultcreatorjava",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Running Zeebe broker with endpoint ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:26500")," (default)"),(0,a.kt)("li",{parentName:"ol"},"Run the ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.25/components/zeebe/clients/java-client-examples/workflow-deploy"},"Deploy a Workflow example"),". Deploy ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/resources/demoProcessSingleTask.bpmn"},(0,a.kt)("inlineCode",{parentName:"a"},"demoProcessSingleTask.bpmn"))," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"demoProcess.bpmn"))),(0,a.kt)("h2",{id:"workflowinstancewithresultcreatorjava"},"WorkflowInstanceWithResultCreator.java"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/java/io/zeebe/example/workflow/WorkflowInstanceWithResultCreator.java"},"Source on github")))}p.isMDXComponent=!0}}]);