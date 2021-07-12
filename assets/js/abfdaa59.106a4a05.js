(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[76504],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},91424:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return d}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),o={id:"install-and-start",title:"Install and start Tasklist"},s=void 0,i={unversionedId:"product-manuals/tasklist/deployment/install-and-start",id:"version-0.26/product-manuals/tasklist/deployment/install-and-start",isDocsHomePage:!1,title:"Install and start Tasklist",description:"Running via Docker (local development)",source:"@site/versioned_docs/version-0.26/product-manuals/tasklist/deployment/install-and-start.md",sourceDirName:"product-manuals/tasklist/deployment",slug:"/product-manuals/tasklist/deployment/install-and-start",permalink:"/docs/0.26/product-manuals/tasklist/deployment/install-and-start",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/tasklist/deployment/install-and-start.md",version:"0.26",frontMatter:{id:"install-and-start",title:"Install and start Tasklist"},sidebar:"version-0.26/Product Manuals",previous:{title:"Overview and example use case",permalink:"/docs/0.26/product-manuals/tasklist/userguide/overview"},next:{title:"Configuration",permalink:"/docs/0.26/product-manuals/tasklist/deployment/configuration"}},c=[{value:"Running via Docker (local development)",id:"running-via-docker-local-development",children:[]},{value:"Manual configuration (local development)",id:"manual-configuration-local-development",children:[{value:"Download Tasklist and a compatible version of Zeebe.",id:"download-tasklist-and-a-compatible-version-of-zeebe",children:[]},{value:"Download Elasticsearch",id:"download-elasticsearch",children:[]},{value:"Run Elasticsearch",id:"run-elasticsearch",children:[]},{value:"Run Zeebe",id:"run-zeebe",children:[]},{value:"Run Tasklist",id:"run-tasklist",children:[]}]},{value:"Access the Tasklist web interface",id:"access-the-tasklist-web-interface",children:[]}],u={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"running-via-docker-local-development"},"Running via Docker (local development)"),(0,l.kt)("p",null,"You can use the Docker image ",(0,l.kt)("inlineCode",{parentName:"p"},"camunda/zeebe-tasklist:latest")," to run Tasklist as container."),(0,l.kt)("p",null,"Please make sure to set appropriate settings described in ",(0,l.kt)("a",{parentName:"p",href:"../deployment/configuration"},"configuration")," section of deployment guide.\nHere an example configuration for ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"zeebe-tasklist:\n    container_name: zeebe-tasklist\n    image: camunda/zeebe-tasklist:latest\n    ports:\n        - 8080:8080\n    environment:\n        - zeebe.tasklist.elasticsearch.url=http://elasticsearch:9200\n        - zeebe.tasklist.zeebeElasticsearch.url=http://elasticsearch:9200\n        - zeebe.tasklist.zeebe.brokerContactPoint=zeebe:26500\n")),(0,l.kt)("h2",{id:"manual-configuration-local-development"},"Manual configuration (local development)"),(0,l.kt)("p",null,"Here, we\u2019ll walk you through how to download and run a Tasklist distribution manually, without using Docker."),(0,l.kt)("p",null,"Note that the Tasklist web UI is available by default at ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),", so please be sure this port is available."),(0,l.kt)("h3",{id:"download-tasklist-and-a-compatible-version-of-zeebe"},"Download Tasklist and a compatible version of Zeebe."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/releases"},"Tasklist and Zeebe distributions are available for download on the same release page. ")),(0,l.kt)("p",null,"Note that each version of Tasklist is compatible with a specific version of Zeebe."),(0,l.kt)("p",null,"On the Zeebe release page, compatible versions of Zeebe and Tasklist are grouped together. Please be sure to download and use compatible versions. This is handled for you if you use the Docker profile from our repository."),(0,l.kt)("h3",{id:"download-elasticsearch"},"Download Elasticsearch"),(0,l.kt)("p",null,"Tasklist uses open-source Elasticsearch as its underlying data store, and so to run Tasklist, you need to download and run Elasticsearch."),(0,l.kt)("p",null,"Tasklist is currently compatible to Elasticsearch 6.8.13. ",(0,l.kt)("a",{parentName:"p",href:"https://www.elastic.co/downloads/past-releases/elasticsearch-6-8-13"},"You can download Elasticsearch here.")),(0,l.kt)("h3",{id:"run-elasticsearch"},"Run Elasticsearch"),(0,l.kt)("p",null,"To run Elasticsearch, execute the following commands in Terminal or another command line tool of your choice:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd elasticsearch-*\nbin/elasticearch\n")),(0,l.kt)("p",null,"You\u2019ll know Elasticsearch has started successfully when you see a message similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[INFO ][o.e.l.LicenseService     ] [-IbqP-o] license [72038058-e8ae-4c71-81a1-e9727f2b81c7] mode [basic] - valid\n")),(0,l.kt)("h3",{id:"run-zeebe"},"Run Zeebe"),(0,l.kt)("p",null,"To run Zeebe with Elasticsearch Exporter, execute the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd zeebe-broker-*\nZEEBE_BROKER_EXPORTERS_ELASTICSEARCH_CLASSNAME=io.zeebe.exporter.ElasticsearchExporter ./bin/broker\n")),(0,l.kt)("p",null,"You\u2019ll know Zeebe has started successfully when you see a message similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"[partition-0] [0.0.0.0:26501-zb-actors-0] INFO  io.zeebe.raft - Joined raft in term 0\n[exporter] [0.0.0.0:26501-zb-actors-1] INFO  io.zeebe.broker.exporter.elasticsearch - Exporter opened\n")),(0,l.kt)("h3",{id:"run-tasklist"},"Run Tasklist"),(0,l.kt)("p",null,"To run Tasklist, execute the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd zeebe-tasklist*\n./bin/tasklist\n")),(0,l.kt)("p",null,"You\u2019ll know Tasklist has started successfully when you see messages similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"2020-12-09 13:31:41.437  INFO 45899 --- [           main] i.z.t.ImportModuleConfiguration          : Starting module: importer\n2020-12-09 13:31:41.438  INFO 45899 --- [           main] i.z.t.ArchiverModuleConfiguration        : Starting module: archiver\n2020-12-09 13:31:41.555  INFO 45899 --- [           main] i.z.t.w.StartupBean                      : Tasklist Version: 0.26.0-alpha2\n")),(0,l.kt)("h2",{id:"access-the-tasklist-web-interface"},"Access the Tasklist web interface"),(0,l.kt)("p",null,"The Tasklist web interface is available at ",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),"."),(0,l.kt)("p",null,"The first screen you'll see is a sign-in page. Use the credentials ",(0,l.kt)("inlineCode",{parentName:"p"},"demo")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"demo")," to sign in."),(0,l.kt)("p",null,"If you already have some user tasks in Zeebe you can see these on the left panel in the start screen:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"tasklist-start-screen",src:a(73063).Z})))}d.isMDXComponent=!0},73063:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tasklist-start-screen_light-e6301164c2a7f1eb8eb52c5487117e9c.png"}}]);