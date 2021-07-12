(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[53921],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77914:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={id:"zeebe-overview",title:"Zeebe",sidebar_label:"Introduction"},u=void 0,l={unversionedId:"product-manuals/zeebe/zeebe-overview",id:"product-manuals/zeebe/zeebe-overview",isDocsHomePage:!1,title:"Zeebe",description:"Zeebe is the process automation engine powering Camunda Cloud. While written in Java, you do not need to be a Java developer to use Zeebe.",source:"@site/docs/product-manuals/zeebe/zeebe-overview.md",sourceDirName:"product-manuals/zeebe",slug:"/product-manuals/zeebe/zeebe-overview",permalink:"/docs/product-manuals/zeebe/zeebe-overview",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/zeebe-overview.md",version:"current",frontMatter:{id:"zeebe-overview",title:"Zeebe",sidebar_label:"Introduction"},sidebar:"Product Manuals",previous:{title:"Start a new process instance",permalink:"/docs/product-manuals/modeler/camunda-modeler/start-instance"},next:{title:"Overview",permalink:"/docs/product-manuals/zeebe/technical-concepts/index"}},c=[{value:"Enterprise Support for Zeebe",id:"enterprise-support-for-zeebe",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],p={toc:c};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Zeebe is the process automation engine powering Camunda Cloud. While written in Java, you do not need to be a Java developer to use Zeebe."),(0,a.kt)("p",null,"With Zeebe you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define processes graphically in ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/bpmn-processes/bpmn-coverage"},"BPMN 2.0")),(0,a.kt)("li",{parentName:"ul"},"Choose any ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/grpc"},"gRPC"),"-supported programming language to implement your workers"),(0,a.kt)("li",{parentName:"ul"},"Build processes that react to events from Apache Kafka and other messaging platforms"),(0,a.kt)("li",{parentName:"ul"},"Use as part of a SaaS offering with Camunda Cloud or deploy with Docker and Kubernetes (in the cloud or on-premises) with Camunda Cloud Self-Managed."),(0,a.kt)("li",{parentName:"ul"},"Scale horizontally to handle very high throughput"),(0,a.kt)("li",{parentName:"ul"},"Rely on fault tolerance and high availability for your processes"),(0,a.kt)("li",{parentName:"ul"},"Export processes data for monitoring and analysis (currently only available through the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/camunda-cloud/zeebe/tree/develop/exporters/elasticsearch-exporter"},"Elasticsearch exporter")," added in Camunda Cloud Self-Managed)"),(0,a.kt)("li",{parentName:"ul"},"Engage with an active community")),(0,a.kt)("p",null,"For documentation on deploying Zeebe as part of Camunda Cloud Self-Managed, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"deployment-guide/index"},"deployment guide"),"."),(0,a.kt)("h2",{id:"enterprise-support-for-zeebe"},"Enterprise Support for Zeebe"),(0,a.kt)("p",null,"Paid support for Zeebe is available via either Camunda Cloud Professional or Camunda Cloud Enterprise. Customers can choose either plan based on their process automation requirements. Camunda Cloud Enterprise customers also have the option of on-premises or private cloud deployment.\xa0"),(0,a.kt)("p",null,"Additionally, regardless of how you are working with Zeebe and Camunda Cloud, you can always find support through the ",(0,a.kt)("a",{parentName:"p",href:"/docs/product-manuals/zeebe/open-source/get-help-get-involved"},"community"),"."),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get familiar with ",(0,a.kt)("a",{parentName:"li",href:"/docs/product-manuals/zeebe/technical-concepts/index"},"technical concepts")),(0,a.kt)("li",{parentName:"ul"},"Explore ",(0,a.kt)("a",{parentName:"li",href:"/docs/product-manuals/zeebe/open-source/community-contributions"},"community contributions"))))}s.isMDXComponent=!0}}]);