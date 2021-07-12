(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[57270],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),s=a,f=c["".concat(p,".").concat(s)]||c[s]||m[s]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44276:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={id:"importer-and-archiver",title:"Importer and archiver"},i=void 0,p={unversionedId:"product-manuals/operate/deployment/importer-and-archiver",id:"version-0.26/product-manuals/operate/deployment/importer-and-archiver",isDocsHomePage:!1,title:"Importer and archiver",description:"Operate consists of three modules:",source:"@site/versioned_docs/version-0.26/product-manuals/operate/deployment/importer-and-archiver.md",sourceDirName:"product-manuals/operate/deployment",slug:"/product-manuals/operate/deployment/importer-and-archiver",permalink:"/docs/0.26/product-manuals/operate/deployment/importer-and-archiver",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/operate/deployment/importer-and-archiver.md",version:"0.26",frontMatter:{id:"importer-and-archiver",title:"Importer and archiver"},sidebar:"version-0.26/Product Manuals",previous:{title:"Schema and migration",permalink:"/docs/0.26/product-manuals/operate/deployment/schema-and-migration"},next:{title:"Authentication",permalink:"/docs/0.26/product-manuals/operate/deployment/authentication"}},u=[],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Operate consists of three modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Webapp")," - contains the UI and operation executor functionality"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Importer")," - is responsible for importing data from Zeebe "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Archiver"),' - is responsible for archiving "old" data (finished workflow instances and user operations) (see ',(0,o.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/operate/deployment/data-retention"},"Data retention"),").")),(0,o.kt)("p",null,"Modules can be run together or separately in any combination and can be scaled. When you run Operate instance, by default, all modules are enabled.\nTo disable them you can use following configuration parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Configuration parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.importerEnabled"),(0,o.kt)("td",{parentName:"tr",align:null},"When true, Importer module is enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.archiverEnabled"),(0,o.kt)("td",{parentName:"tr",align:null},"When true, Archiver module is enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.webappEnabled"),(0,o.kt)("td",{parentName:"tr",align:null},"When true, Webapp module is enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"true")))),(0,o.kt)("p",null,"Additionally you can have several importer and archiver nodes to increase throughput. Internally they will spread their work based on Zeebe partitions."),(0,o.kt)("p",null,"E.g. if your Zeebe runs 10 partitions and you configure 2 importer nodes, they will import data from 5 partitions each.\nEach single importer/archiver node must be configured with the use of following configuration parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Configuration parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.clusterNode.partitionIds"),(0,o.kt)("td",{parentName:"tr",align:null},"Array of Zeebe partition ids, this Importer (or Archiver) node must be responsible for"),(0,o.kt)("td",{parentName:"tr",align:null},"empty array, meaning all partitions data is loaded")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.clusterNode.nodeCount"),(0,o.kt)("td",{parentName:"tr",align:null},"Total amount of Importer (or Archiver) nodes in the cluster"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.clusterNode.currentNodeId"),(0,o.kt)("td",{parentName:"tr",align:null},"Id of current Importer (or Archiver) node, starting from 0"),(0,o.kt)("td",{parentName:"tr",align:null},"0")))),(0,o.kt)("p",null,"It's enough to configure either ",(0,o.kt)("inlineCode",{parentName:"p"},"partitionIds")," or pair of ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeCount")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNodeId"),". In case you provide ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeCount")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"currentNodeId"),",\neach node will automatically guess Zeebe partitions it is responsible for."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note")," ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeCount")," always represents the number of nodes of one specific type.")),(0,o.kt)("p",null,"E.g. configuration of the cluster with 1 Webapp node, 2 Importer nodes and 1 Archiver node could look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Webapp node\n\ncamunda.operate:\n  archiverEnabled: false\n  importerEnabled: false\n  #other configuration...\n\nImporter node #1\n\ncamunda.operate:\n  archiverEnabled: false\n  webappEnabled: false\n  clusterNode:\n    nodeCount: 2\n    currentNodeId: 0\n  #other configuration...\n  \nImporter node #2\n\ncamunda.operate:\n  archiverEnabled: false\n  webappEnabled: false\n  clusterNode:\n    nodeCount: 2\n    currentNodeId: 1\n  #other configuration...\n  \nArchiver node\n\ncamunda.operate:\n  webappEnabled: false\n  importerEnabled: false\n  \n")),(0,o.kt)("p",null,"You can further parallelize archiver and(or) importer within one node by using following configuration parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Configuration parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.archiver.threadsCount"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of threads, in which data will be archived"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.importer.threadsCount"),(0,o.kt)("td",{parentName:"tr",align:null},"Number of threads, in which data will be importe"),(0,o.kt)("td",{parentName:"tr",align:null},"3")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note")," Parallelization of import and archiving within one node will also happen based on Zeebe partitions, meaning that only configurations with\n(number of nodes) * (threadsCount) <= (total number of Zeebe partitions) will make sense. Too many threads and nodes will still work, but some of them will be idle.")))}m.isMDXComponent=!0}}]);