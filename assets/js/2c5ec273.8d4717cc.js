(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[98106],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(b,i(i({ref:n},u),{},{components:t})):r.createElement(b,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},53944:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),i={id:"job-worker-open",title:"Open a job worker"},l=void 0,c={unversionedId:"product-manuals/clients/java-client-examples/job-worker-open",id:"product-manuals/clients/java-client-examples/job-worker-open",isDocsHomePage:!1,title:"Open a job worker",description:"Related Resources",source:"@site/docs/product-manuals/clients/java-client-examples/job-worker-open.md",sourceDirName:"product-manuals/clients/java-client-examples",slug:"/product-manuals/clients/java-client-examples/job-worker-open",permalink:"/docs/product-manuals/clients/java-client-examples/job-worker-open",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/clients/java-client-examples/job-worker-open.md",version:"current",frontMatter:{id:"job-worker-open",title:"Open a job worker"},sidebar:"Product Manuals",previous:{title:"Create a process instance with results",permalink:"/docs/product-manuals/clients/java-client-examples/process-instance-create-with-result"},next:{title:"Handle variables as POJO",permalink:"/docs/product-manuals/clients/java-client-examples/data-pojo"}},s=[{value:"Related Resources",id:"related-resources",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"JobWorkerCreator.java",id:"jobworkercreatorjava",children:[]}],u={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"related-resources"},"Related Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/product-manuals/concepts/job-workers"},"Job worker basics"))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Running Zeebe broker with endpoint ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:26500")," (default)"),(0,o.kt)("li",{parentName:"ol"},"Run the ",(0,o.kt)("a",{parentName:"li",href:"/docs/product-manuals/clients/java-client-examples/process-deploy"},"deploy a process example")),(0,o.kt)("li",{parentName:"ol"},"Run the ",(0,o.kt)("a",{parentName:"li",href:"/docs/product-manuals/clients/java-client-examples/process-instance-create"},"create a process instance example")," a couple of times")),(0,o.kt)("h2",{id:"jobworkercreatorjava"},"JobWorkerCreator.java"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/tree/develop/samples/src/main/java/io/camunda/zeebe/example/job/JobWorkerCreator.java"},"Source on github")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'        ...\n        final String jobType = "foo";\n\n        try (final ZeebeClient client = clientBuilder.build()) {\n\n            System.out.println("Opening job worker.");\n\n            try (final JobWorker workerRegistration =\n                client\n                    .newWorker()\n                    .jobType(jobType)\n                    .handler(new ExampleJobHandler())\n                    .timeout(Duration.ofSeconds(10))\n                    .open()) {\n                System.out.println("Job worker opened and receiving jobs.");\n\n                // run until System.in receives exit command\n                waitUntilSystemInput("exit");\n            }\n        }\n    }\n\n    private static class ExampleJobHandler implements JobHandler {\n        @Override\n        public void handle(final JobClient client, final ActivatedJob job) {\n            // here: business logic that is executed with every job\n            System.out.println(job);\n            client.newCompleteCommand(job.getKey()).send().join();\n        }\n    }\n')))}p.isMDXComponent=!0}}]);