(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[86019],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55493:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={id:"index",title:"Overview"},l=void 0,u={unversionedId:"product-manuals/zeebe/operations/index",id:"version-0.25/product-manuals/zeebe/operations/index",isDocsHomePage:!1,title:"Overview",description:"Development",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/operations/index.md",sourceDirName:"product-manuals/zeebe/operations",slug:"/product-manuals/zeebe/operations/index",permalink:"/docs/0.25/product-manuals/zeebe/operations/index",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/operations/index.md",version:"0.25",frontMatter:{id:"index",title:"Overview"},sidebar:"version-0.25/Product Manuals",previous:{title:"Rust",permalink:"/docs/0.25/product-manuals/zeebe/clients/other-clients/rust"},next:{title:"Configuration",permalink:"/docs/0.25/product-manuals/zeebe/operations/configuration"}},c=[{value:"Development",id:"development",children:[]},{value:"Production",id:"production",children:[]},{value:"Tools For Monitoring And Managing Workflows",id:"tools-for-monitoring-and-managing-workflows",children:[]}],s={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"development"},"Development"),(0,i.kt)("p",null,"We recommend using Docker during development. This gives you a consistent, repeatable development environment."),(0,i.kt)("h2",{id:"production"},"Production"),(0,i.kt)("p",null,"In Production, we recommend using Kubernetes and container images. This provides you with predictable and consistent configuration, and the ability to manage deployment using automation tools.   "),(0,i.kt)("h2",{id:"tools-for-monitoring-and-managing-workflows"},"Tools For Monitoring And Managing Workflows"),(0,i.kt)("p",null,"Operate is a tool that was built for monitoring and managing Zeebe workflows. We walk through how to install Operate in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.25/product-manuals/zeebe/getting-started/index"},'"Getting Started" tutorial'),"."),(0,i.kt)("p",null,"The current Operate release is a developer preview and is available for ",(0,i.kt)("em",{parentName:"p"},"non-production use only.")," ",(0,i.kt)("a",{parentName:"p",href:"https://zeebe.io/legal/operate-evaluation-license/"},"You can find the Operate preview license here.")),(0,i.kt)("p",null,"We plan to release Operate under an enterprise license for production use in the future. "),(0,i.kt)("p",null,"Alternatively:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There's a community project called ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/zeebe-io/zeebe-simple-monitor"},"Simple Monitor")," that can also be used to inspect deployed workflows and workflow instances. Simple Monitor is not intended for production use, but can be useful during development for debugging. "),(0,i.kt)("li",{parentName:"ul"},"It's possible to combine ",(0,i.kt)("a",{parentName:"li",href:"https://www.elastic.co/products/kibana"},"Kibana")," with Zeebe's ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/zeebe-io/zeebe/tree/e527f8a566cade12a8dd69d38909c55ea9594eca/exporters/elasticsearch-exporter"},"Elasticsearch exporter")," to create a dashboard for monitoring the state of Zeebe.")))}p.isMDXComponent=!0}}]);