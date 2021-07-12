(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[64324],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,h=d["".concat(s,".").concat(k)]||d[k]||u[k]||a;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82040:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),l={id:"deploy-a-workflow",title:"Deploy a Workflow"},i=void 0,s={unversionedId:"product-manuals/zeebe/getting-started/deploy-a-workflow",id:"version-0.25/product-manuals/zeebe/getting-started/deploy-a-workflow",isDocsHomePage:!1,title:"Deploy a Workflow",description:"In this section, we're going to start up the Zeebe broker as well as Camunda Operate, a tool that gives you visibility into deployed workflows and running workflow instances and contains tooling for fixing problems in those workflow instances.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/getting-started/deploy-a-workflow.md",sourceDirName:"product-manuals/zeebe/getting-started",slug:"/product-manuals/zeebe/getting-started/deploy-a-workflow",permalink:"/docs/0.25/product-manuals/zeebe/getting-started/deploy-a-workflow",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/getting-started/deploy-a-workflow.md",version:"0.25",frontMatter:{id:"deploy-a-workflow",title:"Deploy a Workflow"},sidebar:"version-0.25/Product Manuals",previous:{title:"Create a Workflow",permalink:"/docs/0.25/product-manuals/zeebe/getting-started/create-a-workflow"},next:{title:"Create and Complete Workflow Instances",permalink:"/docs/0.25/product-manuals/zeebe/getting-started/create-workflow-instance"}},p=[{value:"Manually configure and start Zeebe and Operate",id:"manually-configure-and-start-zeebe-and-operate",children:[]},{value:"Check the status of the broker",id:"check-the-status-of-the-broker",children:[]}],c={toc:p};function u(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"In this section, we're going to start up the Zeebe broker as well as Camunda Operate, a tool that gives you visibility into deployed workflows and running workflow instances and contains tooling for fixing problems in those workflow instances.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"We offer Operate free of charge for unrestricted ",(0,a.kt)("strong",{parentName:"em"},"non-production")," use because we think it's a great tool for getting familiar with Zeebe and building initial proofs-of-concept. And at this time, Operate is available for non-production use only. In the future, we'll offer an Operate enterprise license that allows for production use, too.")),(0,a.kt)("p",null,"Before we run the Zeebe broker, we need to configure an Elasticsearch exporter in the Zeebe configuration file. Which leads to the question: what's an exporter, and why is Elasticsearch a part of this tutorial?"),(0,a.kt)("p",null,"The answer is that Zeebe itself doesn't store historic data related to your workflow instances. If you want to keep this data for auditing or for analysis, you need to export to another storage system. Zeebe ",(0,a.kt)("em",{parentName:"p"},"does")," provide an easy-to-use exporter interface, and it also offers an Elasticsearch exporter out of the box. (",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"/docs/0.25/product-manuals/zeebe/basics/exporters"},"See: Exporters")),")"),(0,a.kt)("p",null,"Elasticsearch is also what Camunda Operate uses to store data, so to run Operate, you need to enable the Elasticsearch exporter in Zeebe and run an instance of Elasticsearch. In this section and the next section of the tutorial, we'll use Operate to visualize what's going on in Zeebe with each step we take."),(0,a.kt)("p",null,"If you are using Docker and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-docker-compose"},"zeebe-docker-compose")," then follow the instructions in the README file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"operate"),' directory of that repository to start Zeebe and Operate. Once you have done that, skip the following section, and continue from "Check the status of the broker".'),(0,a.kt)("p",null,"If you are using individual components, then you will need to manually configure and start components."),(0,a.kt)("h2",{id:"manually-configure-and-start-zeebe-and-operate"},"Manually configure and start Zeebe and Operate"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"These instructions are for using separate components, and are not necessary when using Docker.")),(0,a.kt)("p",null,"First, copy the following lines into a new file ",(0,a.kt)("inlineCode",{parentName:"p"},"getting-started.yaml")," file (in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," directory of the Zeebe broker)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"zeebe:\n  broker:\n    exporters:\n      elasticsearch:\n        className: io.zeebe.exporter.ElasticsearchExporter\n")),(0,a.kt)("p",null,"These settings enable the Zeebe Elasticsearch exporter."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Some command examples might not work on Windows if you use cmd or\nPowershell. For Windows users we recommend to use a bash-like shell, i.e. Git\nBash, Cygwin or MinGW for this guide.")),(0,a.kt)("p",null,"Next, open Terminal or another command line tool and start up Elasticsearch."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd elasticsearch-6.7.0\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linux / Mac")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bin/elasticsearch\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Windows")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bin\\elasticsearch.bat\n")),(0,a.kt)("p",null,"You'll know that startup was successful when you see something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[2019-04-05T10:26:22,288][INFO ][o.e.n.Node ] [oy0juRR] started\n")),(0,a.kt)("p",null,"Then start the Zeebe broker in another Terminal window."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/broker --spring.config.location=file:./config/getting-started.yaml\n")),(0,a.kt)("p",null,"And finally, start Operate in yet another Terminal window. Note that you'll need port 8080 in order to run Operate and access the UI, so be sure to check that it's available."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd camunda-operate-distro-1.0.0-RC2\nbin/operate\n")),(0,a.kt)("p",null,"To confirm that Operate was started, go to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),". You should see the following:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Zeebe Configuration File",src:n(95363).Z})),(0,a.kt)("p",null,"You can leave this tab open as we'll be returning to it shortly."),(0,a.kt)("h2",{id:"check-the-status-of-the-broker"},"Check the status of the broker"),(0,a.kt)("p",null,"You can use the Zeebe CLI to check the status of your broker. Open a new Terminal window to run it. "),(0,a.kt)("p",null,"If you are using Docker, change into the ",(0,a.kt)("inlineCode",{parentName:"p"},"zeebe-docker-compose")," directory."),(0,a.kt)("p",null,"If you are using separate components, then change into the Zeebe broker directory."),(0,a.kt)("p",null,"Run the following:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linux")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/zbctl --insecure status\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mac")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/zbctl.darwin --insecure status\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Windows")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/zbctl.exe --insecure status\n")),(0,a.kt)("p",null,"You should see a response like this one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Cluster size: 1\nPartitions count: 1\nReplication factor: 1\nBrokers:\n  Broker 0 - 0.0.0.0:26501\n    Partition 0 : Leader\n")),(0,a.kt)("p",null,"For all Zeebe-related operations moving forward, we'll be using Zeebe's command-line interface (CLI). In a real-world deployment, you likely wouldn't rely on the CLI to send messages or create job workers. Rather, you would embed Zeebe clients in worker microservices that connect to the Zeebe engine."),(0,a.kt)("p",null,"But for the sake of keeping this guide simple (and language agnostic), we're going to use the CLI.  "),(0,a.kt)("p",null,"Next, we'll deploy our workflow model via the CLI. We'll deploy the workflow model we created in the previous section."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Linux")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/zbctl --insecure deploy order-process.bpmn\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mac")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/zbctl.darwin --insecure deploy order-process.bpmn\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Windows")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/zbctl.exe --insecure deploy order-process.bpmn\n")),(0,a.kt)("p",null,"You should see a response like this one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "key": 2,\n  "workflows": [\n    {\n      "bpmnProcessId": "order-process",\n      "version": 1,\n      "workflowKey": 1,\n      "resourceName": "order-process.bpmn"\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Now we'll take a look at the Operate user interface:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"http://localhost:8080"},"http://localhost:8080")," and use the credentials ",(0,a.kt)("inlineCode",{parentName:"li"},"demo")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"demo")," to access Operate"),(0,a.kt)("li",{parentName:"ul"},'Click on the "Running Instances" option in the navigation bar at the top of the interface'),(0,a.kt)("li",{parentName:"ul"},'Select the order-process workflow from the "Workflows" selector on the left side of the screen')),(0,a.kt)("p",null,"You should see the workflow model we just deployed \u2013 the same model we built in the previous section. You won't see any workflow instances because we haven't created them yet, and that's exactly what we'll do in the next section."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Workflow in Operate",src:n(10296).Z})))}u.isMDXComponent=!0},95363:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Operate-Login-Page-f4587333d50c6ea689a11533eeb01bf1.png"},10296:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tutorial-4.0-workflow-in-operate-47c5450a43469ad75d1aa756dd216124.png"}}]);