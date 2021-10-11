(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[47159],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var A=a.createContext({}),l=function(t){var e=a.useContext(A),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=l(t.components);return a.createElement(A.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,A=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=l(n),m=r,u=d["".concat(A,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(u,o(o({ref:e},c),{},{components:n})):a.createElement(u,o({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var A in e)hasOwnProperty.call(e,A)&&(s[A]=e[A]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75327:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return A},toc:function(){return l},default:function(){return p}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={id:"partitions",title:"Partitions"},s=void 0,A={unversionedId:"components/zeebe/technical-concepts/partitions",id:"version-1.0/components/zeebe/technical-concepts/partitions",isDocsHomePage:!1,title:"Partitions",description:"Note: If you have worked with the Apache Kafka System before, the concepts presented on this page will sound very familiar to you.",source:"@site/versioned_docs/version-1.0/components/zeebe/technical-concepts/partitions.md",sourceDirName:"components/zeebe/technical-concepts",slug:"/components/zeebe/technical-concepts/partitions",permalink:"/docs/1.0/components/zeebe/technical-concepts/partitions",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/components/zeebe/technical-concepts/partitions.md",version:"1.0",frontMatter:{id:"partitions",title:"Partitions"},sidebar:"version-1.0/Components",previous:{title:"Clustering",permalink:"/docs/1.0/components/zeebe/technical-concepts/clustering"},next:{title:"Internal processing",permalink:"/docs/1.0/components/zeebe/technical-concepts/internal-processing"}},l=[{value:"Usage examples",id:"usage-examples",children:[]},{value:"Distribution over partitions",id:"distribution-over-partitions",children:[]},{value:"Scalability",id:"scalability",children:[]},{value:"Partition data layout",id:"partition-data-layout",children:[]},{value:"Replication",id:"replication",children:[]},{value:"Partition Distribution",id:"partition-distribution",children:[{value:"Example 1",id:"example-1",children:[]},{value:"Example 2",id:"example-2",children:[]}]},{value:"Recommendations",id:"recommendations",children:[]}],c={toc:l};function p(t){var e=t.components,o=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: If you have worked with the ",(0,i.kt)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Apache Kafka System")," before, the concepts presented on this page will sound very familiar to you.")),(0,i.kt)("p",null,"In Zeebe, all data is organized into ",(0,i.kt)("em",{parentName:"p"},"partitions"),". A ",(0,i.kt)("em",{parentName:"p"},"partition")," is a persistent stream of process-related events. In a cluster of brokers, partitions are distributed among the nodes so it can be thought of as a ",(0,i.kt)("em",{parentName:"p"},"shard"),". When you bootstrap a Zeebe cluster you can configure how many partitions you need."),(0,i.kt)("h2",{id:"usage-examples"},"Usage examples"),(0,i.kt)("p",null,"Whenever you deploy a process, you deploy it to the first partition. The process is then distributed to all partitions. On all partitions, this process receives the same key and version such that it can be consistently identified."),(0,i.kt)("p",null,"When you start an instance of a process, the client library will then route the request to one partition in which the process instance will be published. All subsequent processing of the process instance will happen in that partition."),(0,i.kt)("h2",{id:"distribution-over-partitions"},"Distribution over partitions"),(0,i.kt)("p",null,"When a process instance is created in a partition, its state is stored and managed by the same partition until its execution is terminated. The partition in which it is created is determined by various factors."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When a client sends a command ",(0,i.kt)("inlineCode",{parentName:"li"},"CreateProcessInstance")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"CreateProcessInstanceWithResult"),", gateway chooses a partition in a round-robin manner and forwards the requests to that partition. The process instance is created in that partition."),(0,i.kt)("li",{parentName:"ul"},"When a client publishes a message to trigger a ",(0,i.kt)("em",{parentName:"li"},"message start event"),", the message is forwarded to a partition based on the correlation key of the message. The process instance is created on the same partition where the message is published."),(0,i.kt)("li",{parentName:"ul"},"Process instances created by ",(0,i.kt)("em",{parentName:"li"},"timer start events")," are always created on partition 1.")),(0,i.kt)("h2",{id:"scalability"},"Scalability"),(0,i.kt)("p",null,"Use partitions to scale your process processing. Partitions are dynamically distributed in a Zeebe cluster and for each partition there is one leading broker at a time. This ",(0,i.kt)("em",{parentName:"p"},"leader")," accepts requests and performs event processing for the partition. Let us assume you want to distribute process processing load over five machines. You can achieve that by bootstraping five partitions."),(0,i.kt)("p",null,"Note that while each partition has one leading broker, ",(0,i.kt)("em",{parentName:"p"},"not all brokers are guaranteed to be leading a partition"),". A broker can lead more than one partition, and, at times, a broker in a cluster may be acting only as a replication back-up for partitions. This broker will not be doing any active work on processes until a partition fail-over happens and the broker gets elected as the new leader for that partition."),(0,i.kt)("h2",{id:"partition-data-layout"},"Partition data layout"),(0,i.kt)("p",null,"A partition is a persistent append-only event stream. Initially, a partition is empty. As the first entry gets inserted, it takes the place of the first entry. As the second entry comes in and is inserted, it takes the place as the second entry and so on and so forth. Each entry has a position in the partition which uniquely identifies it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"partition",src:n(90685).Z})),(0,i.kt)("h2",{id:"replication"},"Replication"),(0,i.kt)("p",null,"For fault tolerance, data in a partition is replicated from the ",(0,i.kt)("em",{parentName:"p"},"leader")," of the partition to its ",(0,i.kt)("em",{parentName:"p"},"followers"),". Followers are other Zeebe broker nodes that maintain a copy of the partition without performing event processing."),(0,i.kt)("h2",{id:"partition-distribution"},"Partition Distribution"),(0,i.kt)("p",null,"If no other configuration is specified, partitions are distributed in a guaranteed round-robin fashion across all brokers in the cluster, considering the number of nodes, number of partitions, and the replication factor. For example, the first partition will always be hosted by the first node, plus the following nodes based on the replication factor. The second partition will be hosted on the second node and the following to fulfill the replication factor."),(0,i.kt)("p",null,"As an example the following partition schemes are guaranteed"),(0,i.kt)("h3",{id:"example-1"},"Example 1"),(0,i.kt)("h4",{id:"context"},"Context"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Number of Nodes: 4"),(0,i.kt)("li",{parentName:"ul"},"Number of Partitions: 7"),(0,i.kt)("li",{parentName:"ul"},"Replication Factor: 3")),(0,i.kt)("h4",{id:"partition-layout"},"Partition Layout"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"}),(0,i.kt)("th",{parentName:"tr",align:"center"},"Node 1"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Node 2"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Node 3"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Node 4"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Partition 1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Partition 2"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Partition 3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Partition 4"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"X")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Partition 5"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Partition 6"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Partition 7"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X")))),(0,i.kt)("h3",{id:"example-2"},"Example 2"),(0,i.kt)("h4",{id:"context-1"},"Context"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Number of Nodes: 5"),(0,i.kt)("li",{parentName:"ul"},"Number of Partitions: 3"),(0,i.kt)("li",{parentName:"ul"},"Replication Factor: 3")),(0,i.kt)("h4",{id:"partition-layout-1"},"Partition Layout"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"right"}),(0,i.kt)("th",{parentName:"tr",align:"center"},"Node 1"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Node 2"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Node 3"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Node 4"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Node 5"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Partition 1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Partition 2"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"right"},"Partition 3"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X"),(0,i.kt)("td",{parentName:"tr",align:"center"},"X")))),(0,i.kt)("h2",{id:"recommendations"},"Recommendations"),(0,i.kt)("p",null,"Choosing the number of partitions depends on the use case, workload, and cluster setup. Here are some rules of thumb:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For testing and early development, start with a single partition. Note that Zeebe's process processing is highly optimized for efficiency, so a single partition can already handle high event loads."),(0,i.kt)("li",{parentName:"ul"},"With a single Zeebe broker, a single partition is mostly enough. However, if the node has many cores and the broker is configured to use them, then more partitions can increase the total throughput (~ 2 threads per partition)."),(0,i.kt)("li",{parentName:"ul"},"Base your decisions on data. Simulate the expected workload, measure, and compare the performance of different partition setups.")))}p.isMDXComponent=!0},90685:function(t,e){"use strict";e.Z="data:image/png;base64,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"}}]);