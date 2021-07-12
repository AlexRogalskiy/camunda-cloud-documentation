(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[81089],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98110:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={id:"exporters",title:"Exporters"},s=void 0,l={unversionedId:"product-manuals/zeebe/reference/exporters",id:"version-0.25/product-manuals/zeebe/reference/exporters",isDocsHomePage:!1,title:"Exporters",description:"Regardless of how an exporter is loaded (whether through an external JAR or not),",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/reference/exporters.md",sourceDirName:"product-manuals/zeebe/reference",slug:"/product-manuals/zeebe/reference/exporters",permalink:"/docs/0.25/product-manuals/zeebe/reference/exporters",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/reference/exporters.md",version:"0.25",frontMatter:{id:"exporters",title:"Exporters"},sidebar:"version-0.25/Product Manuals",previous:{title:"gRPC API Reference",permalink:"/docs/0.25/product-manuals/zeebe/reference/grpc"},next:{title:"Overview",permalink:"/docs/0.25/product-manuals/zeebe/clients/index"}},p=[{value:"Loading",id:"loading",children:[]},{value:"Processing",id:"processing",children:[{value:"Error handling",id:"error-handling",children:[]},{value:"Performance impact",id:"performance-impact",children:[]}]}],c={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Regardless of how an exporter is loaded (whether through an external JAR or not),\nall exporters interact in the same way with the broker, which is defined by the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/tree/develop/exporter-api/src/main/java/io/zeebe/exporter/api/Exporter.java"},"Exporter interface"),"."),(0,a.kt)("h2",{id:"loading"},"Loading"),(0,a.kt)("p",null,"Once configured, exporters are loaded as part of the broker startup phase, before\nany processing is done."),(0,a.kt)("p",null,"During the loading phase, the configuration for each exporter is validated, such that\nthe broker will not start if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An exporter ID is not unique"),(0,a.kt)("li",{parentName:"ul"},"An exporter points to a non-existent/non-accessible JAR"),(0,a.kt)("li",{parentName:"ul"},"An exporter points to a non-existent/non-instantiable class"),(0,a.kt)("li",{parentName:"ul"},"An exporter instance throws an exception in its ",(0,a.kt)("inlineCode",{parentName:"li"},"Exporter#configure")," method.")),(0,a.kt)("p",null,"The last point is there to provide individual exporters to perform lightweight\nvalidation of their configuration (e.g. fail if missing arguments)."),(0,a.kt)("p",null,"One of the caveat of the last point is that an instance of an exporter is created and\nimmediately thrown away; therefore, exporters should not perform any computationally\nheavy work during instantiation/configuration."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Zeebe will create an isolated class loader for every JAR referenced by\nexporter configurations - that is, only once per JAR; if the same JAR is reused to\ndefine different exporters, then these will share the same class loader."),(0,a.kt)("p",{parentName:"blockquote"},"This has some nice properties, primarily that different exporters can depend on\nthe same third party libraries without having to worry about versions, or class\nname collisions."),(0,a.kt)("p",{parentName:"blockquote"},"Additionally, exporters use the system class loader for system classes, or\nclasses packaged as part of the Zeebe JAR.")),(0,a.kt)("p",null,"Exporter specific configuration is handled through the exporter's ",(0,a.kt)("inlineCode",{parentName:"p"},"[exporters.args]"),"\nnested map. This provides a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"Map<String, Object>")," which is passed directly\nin form of a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/tree/develop/exporter-api/src/main/java/io/zeebe/exporter/api/context/Configuration.java"},"Configuration"),"\nobject when the broker calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"Exporter#configure(Configuration)")," method."),(0,a.kt)("p",null,"Configuration occurs at two different phases: during the broker startup phase, and\nonce every time a leader is elected for a partition."),(0,a.kt)("h2",{id:"processing"},"Processing"),(0,a.kt)("p",null,"At any given point, there is exactly one leader\nnode for a given partition. Whenever a node becomes the leader for a partition, one\nof the things it will do is run an instance of an\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/tree/develop/broker/src/main/java/io/zeebe/broker/exporter/stream/ExporterDirector.java"},"exporter stream processor"),"."),(0,a.kt)("p",null,"This stream processor will create exactly one instance of each configured exporter,\nand forward every record written on the stream to each of these in turn."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," this implies that there will be exactly one instance of every exporter for\nevery partition: if you have 4 partitions, and at least 4 threads for processing,\nthen there are potentially 4 instances of your exporter exporting simultaneously.")),(0,a.kt)("p",null,"Note that Zeebe only guarantees at-least-once semantics, that is, a record will be\nseen at least once by an exporter, and maybe more. Cases where this may happen\ninclude:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"During reprocessing after raft failover (i.e. new leader election)"),(0,a.kt)("li",{parentName:"ul"},"On error if the position has not been updated yet")),(0,a.kt)("p",null,"To reduce the amount of duplicate records an exporter will process, the stream\nprocessor will keep track of the position of the last successfully exported record\nfor every single exporter; the position is sufficient since a stream is an ordered\nsequence of records whose position is monotonically increasing. This position is\nset by the exporter itself once it can guarantee a record has been successfully\nupdated."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," although Zeebe tries to reduce the amount of duplicate records an\nexporter has to handle, it is likely that it will have to; therefore, it is\nnecessary that export operations be idempotent."),(0,a.kt)("p",{parentName:"blockquote"},"This can be implemented either in the exporter itself, but if it exports to an\nexternal system, it is recommended that you perform deduplication there to reduce\nthe load on Zeebe itself. Refer to the exporter specific documentation for how\nthis is meant to be achieved.")),(0,a.kt)("h3",{id:"error-handling"},"Error handling"),(0,a.kt)("p",null,"If an error occurs during the ",(0,a.kt)("inlineCode",{parentName:"p"},"Exporter#open(Context)")," phase, the stream\nprocessor will fail and be restarted, potentially fixing the error; worst case\nscenario, this means no exporter is running at all until these errors stop."),(0,a.kt)("p",null,"If an error occurs during the ",(0,a.kt)("inlineCode",{parentName:"p"},"Exporter#close")," phase, it will be logged, but will\nstill allow other exporters to gracefully finish their work."),(0,a.kt)("p",null,"If an error occurs during processing, we will retry infinitely the same record until\nno error is produced. Worst case scenario, this means a failing exporter could bring\nall exporters to a halt. Currently, exporter implementations are expected to\nimplement their own retry/error handling strategies, though this may change in the\nfuture."),(0,a.kt)("h3",{id:"performance-impact"},"Performance impact"),(0,a.kt)("p",null,"Zeebe naturally incurs a performance impact for each loaded exporter. A slow\nexporter will slow down all other exporters for a given partition, and, in the\nworst case, could completely block a thread."),(0,a.kt)("p",null,"It's therefore recommended to keep exporters as simple as possible, and perform\nany data enrichment or transformation through the external system."))}u.isMDXComponent=!0}}]);