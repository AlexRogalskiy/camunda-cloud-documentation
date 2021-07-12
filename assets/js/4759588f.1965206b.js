(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[79953],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44826:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=n(22122),a=n(19756),r=(n(67294),n(3905)),i={id:"what-is-zeebe",title:"What is Zeebe?"},s=void 0,l={unversionedId:"product-manuals/zeebe/introduction/what-is-zeebe",id:"version-0.25/product-manuals/zeebe/introduction/what-is-zeebe",isDocsHomePage:!1,title:"What is Zeebe?",description:"Zeebe is a workflow engine for microservices orchestration. Zeebe ensures that, once started, flows are always carried out fully, retrying steps in case of failures. Along the way, Zeebe maintains a complete audit log so that the progress of flows can be monitored. Zeebe is fault tolerant and scales seamlessly to handle growing transaction volumes.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/introduction/what-is-zeebe.md",sourceDirName:"product-manuals/zeebe/introduction",slug:"/product-manuals/zeebe/introduction/what-is-zeebe",permalink:"/docs/0.25/product-manuals/zeebe/introduction/what-is-zeebe",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/introduction/what-is-zeebe.md",version:"0.25",frontMatter:{id:"what-is-zeebe",title:"What is Zeebe?"},sidebar:"version-0.25/Product Manuals",previous:{title:"Introduction to Zeebe",permalink:"/docs/0.25/product-manuals/zeebe/introduction/index"},next:{title:"Install",permalink:"/docs/0.25/product-manuals/zeebe/introduction/install"}},c=[{value:"What problem does Zeebe solve, and how?",id:"what-problem-does-zeebe-solve-and-how",children:[]},{value:"Zeebe is simple and lightweight",id:"zeebe-is-simple-and-lightweight",children:[]},{value:"Deciding if Zeebe is right for you",id:"deciding-if-zeebe-is-right-for-you",children:[]}],u={toc:c};function d(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Zeebe is a workflow engine for microservices orchestration. Zeebe ensures that, once started, flows are always carried out fully, retrying steps in case of failures. Along the way, Zeebe maintains a complete audit log so that the progress of flows can be monitored. Zeebe is fault tolerant and scales seamlessly to handle growing transaction volumes."),(0,r.kt)("p",null,"Below, we'll provide a brief overview of Zeebe. For more detail, we recommend the ",(0,r.kt)("a",{parentName:"p",href:"https://zeebe.io/what-is-zeebe"},'"What is Zeebe?" writeup')," on the main Zeebe site."),(0,r.kt)("h2",{id:"what-problem-does-zeebe-solve-and-how"},"What problem does Zeebe solve, and how?"),(0,r.kt)("p",null,"A company\u2019s end-to-end workflows almost always span more than one microservice. In an e-commerce company, for example, a \u201ccustomer order\u201d workflow might involve a payments microservice, an inventory microservice, a shipping microservice, and more:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"order-process",src:n(93092).Z})),(0,r.kt)("p",null,"These cross-microservice workflows are mission critical, yet the workflows themselves are rarely modeled and monitored. Often, the flow of events through different microservices is expressed only implicitly in code."),(0,r.kt)("p",null,"If that\u2019s the case, how can we ensure visibility of workflows and provide status and error monitoring? How do we guarantee that flows always complete, even if single microservices fail?"),(0,r.kt)("p",null,"Zeebe gives you:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Visibility")," into the state of a company\u2019s end-to-end workflows, including the number of in-flight workflows, average workflow duration, current errors within a workflow, and more."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Workflow orchestration")," based on the current state of a workflow; Zeebe publishes \u201ccommands\u201d as events that can be consumed by one or more microservices, ensuring that workflows progress according to their definition."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Monitoring for timeouts")," or other workflow errors with the ability to configure error-handling paths such as stateful retries or escalation to teams that can resolve an issue manually.")),(0,r.kt)("p",null,"Zeebe was designed to operate at very large scale, and to achieve this, it provides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Horizontal scalability")," and no dependence on an external database; Zeebe writes data directly to the filesystem on the same servers where it\u2019s deployed. Zeebe makes it simple to distribute processing across a cluster of machines to deliver high throughput."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fault tolerance")," via an easy-to-configure replication mechanism, ensuring that Zeebe can recover from machine or software failure with no data loss and minimal downtime. This ensures that the system as a whole remains available without requiring manual action."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A message-driven architecture")," where all workflow-relevant events are written to an append-only log, providing an audit trail and a history of the state of a workflow."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A publish-subscribe interaction model"),", which enables microservices that connect to Zeebe to maintain a high degree of control and autonomy, including control over processing rates. These properties make Zeebe resilient, scalable, and reactive."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Visual workflows modeled in ISO-standard BPMN 2.0")," so that technical and non-technical stakeholders can collaborate on workflow design in a widely-used modeling language."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A language-agnostic client model"),", making it possible to build a Zeebe client in just about any programming language that an organization uses to build microservices."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Operational ease-of-use")," as a self-contained and self-sufficient system. Zeebe does ",(0,r.kt)("strong",{parentName:"li"},"not")," require a cluster coordinator such as ZooKeeper. Because all nodes in a Zeebe cluster are equal, it's relatively easy to scale, and it plays nicely with modern resource managers and container orchestrators such as ",(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker"),", ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes"),", and ",(0,r.kt)("a",{parentName:"li",href:"https://dcos.io/"},"DC/OS"),". Zeebe's CLI (Command Line Interface) allows you to script and automate management and operations tasks.")),(0,r.kt)("p",null,"You can learn more about these technical concepts ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.25/product-manuals/zeebe/basics/index"},'in the "Basics" section of the documentation'),"."),(0,r.kt)("h2",{id:"zeebe-is-simple-and-lightweight"},"Zeebe is simple and lightweight"),(0,r.kt)("p",null,"Most existing workflow engines offer more features than Zeebe. While having access to lots of features is generally a good thing, it can come at a cost of increased complexity and degraded performance."),(0,r.kt)("p",null,"Zeebe is 100% focused on providing a compact, robust, and scalable solution for orchestration of workflows. Rather than supporting a broad spectrum of features, its goal is to excel within this scope."),(0,r.kt)("p",null,"In addition, Zeebe works well with other systems. For example, Zeebe provides a simple event stream API that makes it easy to stream all internal data into another system such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/"},"Elastic Search")," for indexing and querying."),(0,r.kt)("h2",{id:"deciding-if-zeebe-is-right-for-you"},"Deciding if Zeebe is right for you"),(0,r.kt)("p",null,'Note that Zeebe is currently in "developer preview", meaning that it\'s not yet ready for production and is under heavy development. See the ',(0,r.kt)("a",{parentName:"p",href:"https://zeebe.io/roadmap/"},"roadmap")," for more details."),(0,r.kt)("p",null,"Your applications might not need the scalability and performance features provided by Zeebe. Or, you might a mature set of features around BPM (Business Process Management), which Zeebe does not yet offer. In such scenarios, a workflow automation platform such as ",(0,r.kt)("a",{parentName:"p",href:"https://camunda.org"},"Camunda BPM")," could be a better fit."))}d.isMDXComponent=!0},93092:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);