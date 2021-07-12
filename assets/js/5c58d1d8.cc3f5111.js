(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[58538],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60459:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),l={id:"workflow-deploy",title:"Deploy a workflow"},i=void 0,c={unversionedId:"product-manuals/clients/java-client-examples/workflow-deploy",id:"version-0.26/product-manuals/clients/java-client-examples/workflow-deploy",isDocsHomePage:!1,title:"Deploy a workflow",description:"Related resources",source:"@site/versioned_docs/version-0.26/product-manuals/clients/java-client-examples/workflow-deploy.md",sourceDirName:"product-manuals/clients/java-client-examples",slug:"/product-manuals/clients/java-client-examples/workflow-deploy",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/workflow-deploy",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/clients/java-client-examples/workflow-deploy.md",version:"0.26",frontMatter:{id:"workflow-deploy",title:"Deploy a workflow"},sidebar:"version-0.26/Product Manuals",previous:{title:"Overview",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/index"},next:{title:"Create a workflow instance",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/workflow-instance-create"}},s=[{value:"Related resources",id:"related-resources",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"WorkflowDeployer.java",id:"workflowdeployerjava",children:[]},{value:"demoProcess.bpmn",id:"demoprocessbpmn",children:[]}],p={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"related-resources"},"Related resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/concepts/workflows"},"Workflow basics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.26/reference/bpmn-workflows/bpmn-primer"},"BPMN introduction"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Running Zeebe broker with endpoint ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:26500")," (default)")),(0,a.kt)("h2",{id:"workflowdeployerjava"},"WorkflowDeployer.java"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/java/io/zeebe/example/workflow/WorkflowDeployer.java"},"Source on github")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'final DeploymentEvent deploymentEvent =\n        client.newDeployCommand()\n            .addResourceFromClasspath("demoProcess.bpmn")\n            .send()\n            .join();\n')),(0,a.kt)("h2",{id:"demoprocessbpmn"},"demoProcess.bpmn"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/resources/demoProcess.bpmn"},"Source on github")),(0,a.kt)("p",null,"Download the XML and save it in the Java classpath before running the example. Open the file with Zeebe Modeler for a graphical representation."))}u.isMDXComponent=!0}}]);