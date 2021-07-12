(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[64090],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52503:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={id:"architecture",title:"Architecture"},c=void 0,l={unversionedId:"product-manuals/zeebe/technical-concepts/architecture",id:"product-manuals/zeebe/technical-concepts/architecture",isDocsHomePage:!1,title:"Architecture",description:"There are four main components in Zeebe's architecture: client, gateway, brokers, and exporters.",source:"@site/docs/product-manuals/zeebe/technical-concepts/architecture.md",sourceDirName:"product-manuals/zeebe/technical-concepts",slug:"/product-manuals/zeebe/technical-concepts/architecture",permalink:"/docs/product-manuals/zeebe/technical-concepts/architecture",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/technical-concepts/architecture.md",version:"current",frontMatter:{id:"architecture",title:"Architecture"},sidebar:"Product Manuals",previous:{title:"Overview",permalink:"/docs/product-manuals/zeebe/technical-concepts/index"},next:{title:"Clustering",permalink:"/docs/product-manuals/zeebe/technical-concepts/clustering"}},s=[{value:"Client",id:"client",children:[{value:"Job Worker",id:"job-worker",children:[]}]},{value:"Gateway",id:"gateway",children:[]},{value:"Broker",id:"broker",children:[]},{value:"Exporter",id:"exporter",children:[]}],u={toc:s};function p(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are four main components in Zeebe's architecture: client, gateway, brokers, and exporters."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"zeebe-architecture",src:n(56599).Z})),(0,o.kt)("p",null,"In Camunda Cloud you will work exclusively with clients. Gateway, broker, and exporters are pre-configured to provide the service, but are not themselves accessible."),(0,o.kt)("p",null,"In local or private cloud deployments, all components are relevant."),(0,o.kt)("h2",{id:"client"},"Client"),(0,o.kt)("p",null,"Clients send commands to Zeebe to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy processes"),(0,o.kt)("li",{parentName:"ul"},"Carry out business logic",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Start process instances"),(0,o.kt)("li",{parentName:"ul"},"Publish messages"),(0,o.kt)("li",{parentName:"ul"},"Activate jobs"),(0,o.kt)("li",{parentName:"ul"},"Complete jobs"),(0,o.kt)("li",{parentName:"ul"},"Fail jobs"))),(0,o.kt)("li",{parentName:"ul"},"Handle operational issues",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Update process instance variables"),(0,o.kt)("li",{parentName:"ul"},"Resolve incidents")))),(0,o.kt)("p",null,"Client applications can be scaled up and down completely separately from Zeebe - the Zeebe brokers do not execute any business logic."),(0,o.kt)("p",null,"Clients are libraries that you embed in an application (e.g. a microservice that executes your business logic) to connect to a Zeebe cluster."),(0,o.kt)("p",null,"Clients connect to the Zeebe gateway via ",(0,o.kt)("a",{parentName:"p",href:"https://grpc.io"},"gRPC"),", which uses HTTP/2-based transport. To learn more about gRPC in Zeebe, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/grpc"},"Zeebe API (gRPC)"),"."),(0,o.kt)("p",null,"The Zeebe project includes officially-supported Java and Go clients. ",(0,o.kt)("a",{parentName:"p",href:"/docs/product-manuals/clients/other-clients/index"},"Community clients")," have been created in other languages, including C#, Ruby, and JavaScript. The gRPC protocol makes it possible to ",(0,o.kt)("a",{parentName:"p",href:"/docs/product-manuals/clients/build-your-own-client"},"generate clients")," in a range of different programming languages."),(0,o.kt)("h3",{id:"job-worker"},"Job Worker"),(0,o.kt)("p",null,"A job worker is a Zeebe client that uses the client API to first activate jobs, and then upon completion either complete or fail the job."),(0,o.kt)("h2",{id:"gateway"},"Gateway"),(0,o.kt)("p",null,"The gateway serves as a single entry point to a Zeebe cluster and forwards requests to brokers."),(0,o.kt)("p",null,"The gateway is stateless and sessionless, and gateways can be added as necessary for load balancing and high availability."),(0,o.kt)("h2",{id:"broker"},"Broker"),(0,o.kt)("p",null,"The Zeebe broker is the distributed workflow engine that keeps state of active process instances."),(0,o.kt)("p",null,"Brokers can be partitioned for horizontal scalability and replicated for fault tolerance. A Zeebe deployment will often consist of more than one broker."),(0,o.kt)("p",null,"It's important to note that no application business logic lives in the broker. Its only responsibilities are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Processing commands sent by clients"),(0,o.kt)("li",{parentName:"ul"},"Storing and managing the state of active process instances"),(0,o.kt)("li",{parentName:"ul"},"Assigning jobs to job workers")),(0,o.kt)("p",null,"Brokers form a peer-to-peer network in which there is no single point of failure. This is possible because all brokers perform the same kind of tasks and the responsibilities of an unavailable broker are transparently reassigned in the network."),(0,o.kt)("h2",{id:"exporter"},"Exporter"),(0,o.kt)("p",null,"The exporter system provides an event stream of state changes within Zeebe. This data has many potential uses, including but not limited to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Monitoring the current state of running process instances"),(0,o.kt)("li",{parentName:"ul"},"Analysis of historic process data for auditing, business intelligence, etc"),(0,o.kt)("li",{parentName:"ul"},"Tracking ",(0,o.kt)("a",{parentName:"li",href:"/docs/product-manuals/concepts/incidents"},"incidents")," created by Zeebe")),(0,o.kt)("p",null,"The exporter includes a simple API that you can use to stream data into a storage system of your choice. Zeebe includes an out-of-the-box ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/tree/master/exporters/elasticsearch-exporter"},"Elasticsearch exporter"),", and other ",(0,o.kt)("a",{parentName:"p",href:"https://awesome.zeebe.io"},"community-contributed exporters")," are also available."))}p.isMDXComponent=!0},56599:function(e,t,n){"use strict";t.Z=n.p+"assets/images/zeebe-architecture-67c608106ddc1c9eaa686a5a268887f9.png"}}]);