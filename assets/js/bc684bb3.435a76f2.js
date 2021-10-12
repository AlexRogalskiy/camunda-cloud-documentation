(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[11626],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(b,i(i({ref:n},p),{},{components:t})):r.createElement(b,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64536:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),i={id:"job-worker-open",title:"Open a job worker",description:"Let's analyze the prerequisites and code to open a job worker."},c=void 0,l={unversionedId:"components/clients/java-client-examples/job-worker-open",id:"version-1.1/components/clients/java-client-examples/job-worker-open",isDocsHomePage:!1,title:"Open a job worker",description:"Let's analyze the prerequisites and code to open a job worker.",source:"@site/versioned_docs/version-1.1/components/clients/java-client-examples/job-worker-open.md",sourceDirName:"components/clients/java-client-examples",slug:"/components/clients/java-client-examples/job-worker-open",permalink:"/docs/1.1/components/clients/java-client-examples/job-worker-open",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.1/components/clients/java-client-examples/job-worker-open.md",version:"1.1",frontMatter:{id:"job-worker-open",title:"Open a job worker",description:"Let's analyze the prerequisites and code to open a job worker."},sidebar:"version-1.1/Components",previous:{title:"Create a process instance with results",permalink:"/docs/1.1/components/clients/java-client-examples/process-instance-create-with-result"},next:{title:"Handle variables as POJO",permalink:"/docs/1.1/components/clients/java-client-examples/data-pojo"}},s=[{value:"Related resources",id:"related-resources",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"JobWorkerCreator.java",id:"jobworkercreatorjava",children:[]}],p={toc:s};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"related-resources"},"Related resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/1.1/components/concepts/job-workers"},"Job worker basics"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run the Zeebe broker with endpoint ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:26500")," (default)."),(0,a.kt)("li",{parentName:"ul"},"Run the ",(0,a.kt)("a",{parentName:"li",href:"/docs/1.1/components/clients/java-client-examples/process-deploy"},"deploy a process example"),"."),(0,a.kt)("li",{parentName:"ul"},"Run the ",(0,a.kt)("a",{parentName:"li",href:"/docs/1.1/components/clients/java-client-examples/process-instance-create"},"create a process instance example")," a few times.")),(0,a.kt)("h2",{id:"jobworkercreatorjava"},"JobWorkerCreator.java"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/tree/develop/samples/src/main/java/io/camunda/zeebe/example/job/JobWorkerCreator.java"},"Source on GitHub")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'        ...\n        final String jobType = "foo";\n\n        try (final ZeebeClient client = clientBuilder.build()) {\n\n            System.out.println("Opening job worker.");\n\n            try (final JobWorker workerRegistration =\n                client\n                    .newWorker()\n                    .jobType(jobType)\n                    .handler(new ExampleJobHandler())\n                    .timeout(Duration.ofSeconds(10))\n                    .open()) {\n                System.out.println("Job worker opened and receiving jobs.");\n\n                // run until System.in receives exit command\n                waitUntilSystemInput("exit");\n            }\n        }\n    }\n\n    private static class ExampleJobHandler implements JobHandler {\n        @Override\n        public void handle(final JobClient client, final ActivatedJob job) {\n            // here: business logic that is executed with every job\n            System.out.println(job);\n            client.newCompleteCommand(job.getKey()).send().join();\n        }\n    }\n')))}u.isMDXComponent=!0}}]);