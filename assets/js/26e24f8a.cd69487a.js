(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[97132],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41114:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),l={id:"cluster-topology-request",title:"Request cluster topology"},i=void 0,c={unversionedId:"product-manuals/clients/java-client-examples/cluster-topology-request",id:"version-0.26/product-manuals/clients/java-client-examples/cluster-topology-request",isDocsHomePage:!1,title:"Request cluster topology",description:"This example shows which broker is leader and follower for which partition. Particularly useful when you run a cluster with multiple Zeebe brokers.",source:"@site/versioned_docs/version-0.26/product-manuals/clients/java-client-examples/cluster-topology-request.md",sourceDirName:"product-manuals/clients/java-client-examples",slug:"/product-manuals/clients/java-client-examples/cluster-topology-request",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/cluster-topology-request",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/clients/java-client-examples/cluster-topology-request.md",version:"0.26",frontMatter:{id:"cluster-topology-request",title:"Request cluster topology"},sidebar:"version-0.26/Product Manuals",previous:{title:"Handle variables as POJO",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/data-pojo"},next:{title:"Quick reference",permalink:"/docs/0.26/product-manuals/clients/go-client/index"}},u=[{value:"Related resources",id:"related-resources",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"TopologyViewer.java",id:"topologyviewerjava",children:[]}],s={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows which broker is leader and follower for which partition. Particularly useful when you run a cluster with multiple Zeebe brokers."),(0,a.kt)("h2",{id:"related-resources"},"Related resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/zeebe/technical-concepts/clustering"},"Clustering casics"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Running Zeebe broker with endpoint ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:26500")," (default)")),(0,a.kt)("h2",{id:"topologyviewerjava"},"TopologyViewer.java"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/java/io/zeebe/example/cluster/TopologyViewer.java"},"Source on github")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'final Topology topology = client.newTopologyRequest().send().join();\n\nSystem.out.println("Topology:");\ntopology\n    .getBrokers()\n    .forEach(\n        b -> {\n        System.out.println("    " + b.getAddress());\n        b.getPartitions()\n            .forEach(\n                p ->\n                    System.out.println(\n                        "      " + p.getPartitionId() + " - " + p.getRole()));\n        });\n')))}p.isMDXComponent=!0}}]);