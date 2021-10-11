(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[27867],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39431:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i={id:"install-and-start",title:"Install and start Operate"},l=void 0,s={unversionedId:"components/operate/deployment/install-and-start",id:"version-0.26/components/operate/deployment/install-and-start",isDocsHomePage:!1,title:"Install and start Operate",description:"Running via Docker (local development)",source:"@site/versioned_docs/version-0.26/components/operate/deployment/install-and-start.md",sourceDirName:"components/operate/deployment",slug:"/components/operate/deployment/install-and-start",permalink:"/docs/0.26/components/operate/deployment/install-and-start",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/components/operate/deployment/install-and-start.md",version:"0.26",frontMatter:{id:"install-and-start",title:"Install and start Operate"},sidebar:"version-0.26/Components",previous:{title:"Giving feedback and asking questions",permalink:"/docs/0.26/components/operate/userguide/operate-feedback-and-questions"},next:{title:"Configuration",permalink:"/docs/0.26/components/operate/deployment/configuration"}},c=[{value:"Running via Docker (local development)",id:"running-via-docker-local-development",children:[]},{value:"Running with Kubernetes (production)",id:"running-with-kubernetes-production",children:[]},{value:"Manual Configuration (local development)",id:"manual-configuration-local-development",children:[{value:"Download Operate and a compatible version of Zeebe.",id:"download-operate-and-a-compatible-version-of-zeebe",children:[]},{value:"Download Elasticsearch",id:"download-elasticsearch",children:[]},{value:"Run Elasticsearch",id:"run-elasticsearch",children:[]},{value:"Run Zeebe",id:"run-zeebe",children:[]},{value:"Run Operate",id:"run-operate",children:[]}]},{value:"Access the Operate web interface",id:"access-the-operate-web-interface",children:[]}],p={toc:c};function u(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"running-via-docker-local-development"},"Running via Docker (local development)"),(0,a.kt)("p",null,"The easiest way to run Operate in development is with Docker. This gives you a consistent, reproducible environment and an out-of-the-box integrated experience for experimenting with Zeebe and Operate."),(0,a.kt)("p",null,"To do this, you need ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker Desktop")," installed on your development machine."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-docker-compose"},"zeebe-docker-compose")," repository contains an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-docker-compose/tree/master/operate"},"operate")," profile that starts a single Zeebe broker with Operate and all its dependencies. ",(0,a.kt)("strong",{parentName:"p"},"See the README file in the repository for instructions to start Zeebe and Operate using Docker.")),(0,a.kt)("p",null,"If you are using Docker, once you follow the instructions in the repository, skip ahead to the section ",(0,a.kt)("a",{parentName:"p",href:"#access-the-operate-web-interface"},'"Access the Operate Web Interface\u201d'),"."),(0,a.kt)("h2",{id:"running-with-kubernetes-production"},"Running with Kubernetes (production)"),(0,a.kt)("p",null,"We will update this section after Operate is available for production use. "),(0,a.kt)("p",null,"Running Operate with Kubernetes will be recommended for production deployments. "),(0,a.kt)("h2",{id:"manual-configuration-local-development"},"Manual Configuration (local development)"),(0,a.kt)("p",null,"Here, we\u2019ll walk you through how to download and run an Operate distribution manually, without using Docker. "),(0,a.kt)("p",null,"Note that the Operate web UI is available by default at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),", so please be sure this port is available. "),(0,a.kt)("h3",{id:"download-operate-and-a-compatible-version-of-zeebe"},"Download Operate and a compatible version of Zeebe."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/releases"},"Operate and Zeebe distributions are available for download on the same release page. ")," "),(0,a.kt)("p",null,"Note that each version of Operate is compatible with a specific version of Zeebe. "),(0,a.kt)("p",null,"On the Zeebe release page, compatible versions of Zeebe and Operate are grouped together. Please be sure to download and use compatible versions. This is handled for you if you use the Docker profile from our repository. "),(0,a.kt)("h3",{id:"download-elasticsearch"},"Download Elasticsearch"),(0,a.kt)("p",null,"Operate uses open-source Elasticsearch as its underlying data store, and so to run Operate, you need to download and run Elasticsearch. "),(0,a.kt)("p",null,"Operate is currently compatible to Elasticsearch 6.8.13. ",(0,a.kt)("a",{parentName:"p",href:"https://www.elastic.co/downloads/past-releases/elasticsearch-6-8-13"},"You can download Elasticsearch here.")," "),(0,a.kt)("h3",{id:"run-elasticsearch"},"Run Elasticsearch"),(0,a.kt)("p",null,"To run Elasticsearch, execute the following commands in Terminal or another command line tool of your choice:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd elasticsearch-*\nbin/elasticearch\n")),(0,a.kt)("p",null,"You\u2019ll know Elasticsearch has started successfully when you see a message similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[INFO ][o.e.l.LicenseService     ] [-IbqP-o] license [72038058-e8ae-4c71-81a1-e9727f2b81c7] mode [basic] - valid\n")),(0,a.kt)("h3",{id:"run-zeebe"},"Run Zeebe"),(0,a.kt)("p",null,"To run Zeebe, execute the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd zeebe-broker-*\n./bin/broker\n")),(0,a.kt)("p",null,"You\u2019ll know Zeebe has started successfully when you see a message similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[partition-0] [0.0.0.0:26501-zb-actors-0] INFO  io.zeebe.raft - Joined raft in term 0\n[exporter] [0.0.0.0:26501-zb-actors-1] INFO  io.zeebe.broker.exporter.elasticsearch - Exporter opened\n")),(0,a.kt)("h3",{id:"run-operate"},"Run Operate"),(0,a.kt)("p",null,"To run Operate, execute the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd camunda-operate-distro-0.26.0-*\nbin/operate\n")),(0,a.kt)("p",null,"You\u2019ll know Operate has started successfully when you see messages similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DEBUG 1416 --- [       Thread-6] o.c.o.e.w.BatchOperationWriter           : 0 operations locked\nDEBUG 1416 --- [       Thread-4] o.c.o.z.ZeebeESImporter                  : Latest loaded position for alias [zeebe-record-deployment] and partitionId [0]: 0\nINFO 1416 --- [       Thread-4] o.c.o.z.ZeebeESImporter                  : Elasticsearch index for ValueType DEPLOYMENT was not found, alias zeebe-record-deployment. Skipping.\n")),(0,a.kt)("h2",{id:"access-the-operate-web-interface"},"Access the Operate web interface"),(0,a.kt)("p",null,"The Operate web interface is available at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),". "),(0,a.kt)("p",null,"The first screen you'll see is a sign-in page. Use the credentials ",(0,a.kt)("inlineCode",{parentName:"p"},"demo")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"demo")," to sign in. "),(0,a.kt)("p",null,"After you sign in, you'll see an empty dashboard if you haven't yet deployed any workflows:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"operate-dash-no-workflows",src:n(12693).Z})),(0,a.kt)("p",null,"If you ",(0,a.kt)("em",{parentName:"p"},"have")," deployed workflows or created workflow instances, you'll see those on your dashboard:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"operate-dash-with-workflows",src:n(72921).Z})))}u.isMDXComponent=!0},12693:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-dashboard-no-workflows_light-9678b74584362077f568948249a93111.png"},72921:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-introduction_light-19e756d8a6ba58dd73e70f3694ec72d1.png"}}]);