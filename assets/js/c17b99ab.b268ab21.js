(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[54063],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4150:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={id:"clustering",title:"Clustering"},c=void 0,s={unversionedId:"components/zeebe/technical-concepts/clustering",id:"version-0.26/components/zeebe/technical-concepts/clustering",isDocsHomePage:!1,title:"Clustering",description:"Zeebe can operate as a cluster of brokers, forming a peer-to-peer network.",source:"@site/versioned_docs/version-0.26/components/zeebe/technical-concepts/clustering.md",sourceDirName:"components/zeebe/technical-concepts",slug:"/components/zeebe/technical-concepts/clustering",permalink:"/docs/0.26/components/zeebe/technical-concepts/clustering",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/components/zeebe/technical-concepts/clustering.md",version:"0.26",frontMatter:{id:"clustering",title:"Clustering"},sidebar:"version-0.26/Components",previous:{title:"Architecture",permalink:"/docs/0.26/components/zeebe/technical-concepts/architecture"},next:{title:"Partitions",permalink:"/docs/0.26/components/zeebe/technical-concepts/partitions"}},l=[{value:"Gossip membership protocol",id:"gossip-membership-protocol",children:[]},{value:"Raft consensus and replication protocol",id:"raft-consensus-and-replication-protocol",children:[]},{value:"Commit",id:"commit",children:[]}],p={toc:l};function u(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Zeebe can operate as a cluster of brokers, forming a peer-to-peer network.\nIn this network, all brokers have the same responsibilities and there is no single point of failure."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(8190).Z})),(0,i.kt)("h2",{id:"gossip-membership-protocol"},"Gossip membership protocol"),(0,i.kt)("p",null,"Zeebe implements the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Gossip_protocol"},"Gossip protocol")," to know which brokers are currently part of the cluster."),(0,i.kt)("p",null,"The cluster is bootstrapped using a set of well-known bootstrap brokers, to which the other ones can connect. To achieve this, each broker must have at least one bootstrap broker as its initial contact point in their configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ncluster:\n  initialContactPoints: [node1.mycluster.loc:26502]\n")),(0,i.kt)("p",null,"When a broker is connected to the cluster for the first time, it fetches the topology from the initial contact points and then starts gossiping with the other brokers. Brokers keep cluster topology locally across restarts."),(0,i.kt)("h2",{id:"raft-consensus-and-replication-protocol"},"Raft consensus and replication protocol"),(0,i.kt)("p",null,"To ensure fault tolerance, Zeebe replicates data across machines using the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Raft_(computer_science)"},"Raft protocol"),"."),(0,i.kt)("p",null,"Data is divided into partitions (shards). Each partition has a number of replicas. Among the replica set, a ",(0,i.kt)("em",{parentName:"p"},"leader")," is determined by the raft protocol which takes in requests and performs all of the processing. All other brokers are passive ",(0,i.kt)("em",{parentName:"p"},"followers"),". When the leader becomes unavailable, the followers transparently select a new leader."),(0,i.kt)("p",null,"Each broker in the cluster may be both leader and follower at the same time for different partitions. In an ideal world, this leads to client traffic distributed evenly across all brokers."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(64131).Z})),(0,i.kt)("p",null,"Note, however, that there is no active load balancing across partitions. Each leader election for any partition is completely autonomous and independent of leader elections for other partitions. This may lead, in the worst case, to one node becoming the leader for all partitions. This is not a problem for fault tolerance as the guarantees of replication still hold. However, it may negatively impact throughput as all traffic hits one node."),(0,i.kt)("h2",{id:"commit"},"Commit"),(0,i.kt)("p",null,"Before a new record on a partition can be processed, it must be replicated to a quorum (typically majority) of followers. This procedure is called ",(0,i.kt)("em",{parentName:"p"},"commit"),". Committing ensures that a record is durable even in case of complete data loss on an individual broker. The exact semantics of committing are defined by the raft protocol."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster",src:n(97086).Z})))}u.isMDXComponent=!0},8190:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cluster-7f2aec7878e5ccbe062a37e916e596a5.png"},97086:function(e,t,n){"use strict";t.Z=n.p+"assets/images/commit-6ad408af956ff5a2e13674feb7ee5476.png"},64131:function(e,t,n){"use strict";t.Z=n.p+"assets/images/data-distribution-245d7f600a1a13ce2a904cb22039703f.png"}}]);