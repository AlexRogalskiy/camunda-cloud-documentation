(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[29899],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24664:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(22122),o=n(19756),l=(n(67294),n(3905)),a={id:"cluster-topology-request",title:"Request cluster topology"},i=void 0,c={unversionedId:"components/clients/java-client-examples/cluster-topology-request",id:"components/clients/java-client-examples/cluster-topology-request",isDocsHomePage:!1,title:"Request cluster topology",description:"This example shows which broker is leader and follower for which partition. This is particularly useful when you run a cluster with multiple Zeebe brokers.",source:"@site/docs/components/clients/java-client-examples/cluster-topology-request.md",sourceDirName:"components/clients/java-client-examples",slug:"/components/clients/java-client-examples/cluster-topology-request",permalink:"/docs/components/clients/java-client-examples/cluster-topology-request",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/components/clients/java-client-examples/cluster-topology-request.md",version:"current",frontMatter:{id:"cluster-topology-request",title:"Request cluster topology"},sidebar:"Components",previous:{title:"Handle variables as POJO",permalink:"/docs/components/clients/java-client-examples/data-pojo"},next:{title:"Quick reference",permalink:"/docs/components/clients/go-client/index"}},s=[{value:"Related resources",id:"related-resources",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"TopologyViewer.java",id:"topologyviewerjava",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example shows which broker is leader and follower for which partition. This is particularly useful when you run a cluster with multiple Zeebe brokers."),(0,l.kt)("h2",{id:"related-resources"},"Related resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/components/zeebe/technical-concepts/clustering"},"Clustering casics"))),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Running Zeebe broker with endpoint ",(0,l.kt)("inlineCode",{parentName:"li"},"localhost:26500")," (default)")),(0,l.kt)("h2",{id:"topologyviewerjava"},"TopologyViewer.java"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/blob/develop/samples/src/main/java/io/camunda/zeebe/example/cluster/TopologyViewer.java"},"Source on GitHub")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'final Topology topology = client.newTopologyRequest().send().join();\n\nSystem.out.println("Topology:");\ntopology\n    .getBrokers()\n    .forEach(\n        b -> {\n        System.out.println("    " + b.getAddress());\n        b.getPartitions()\n            .forEach(\n                p ->\n                    System.out.println(\n                        "      " + p.getPartitionId() + " - " + p.getRole()));\n        });\n')))}p.isMDXComponent=!0}}]);