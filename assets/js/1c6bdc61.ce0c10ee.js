(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[87083],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||l[m]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},44813:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return l}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={id:"disk-space",title:"Disk space"},s=void 0,u={unversionedId:"product-manuals/zeebe/deployment-guide/operations/disk-space",id:"version-0.26/product-manuals/zeebe/deployment-guide/operations/disk-space",isDocsHomePage:!1,title:"Disk space",description:"Zeebe uses the local disk for storage of it's persistent data. Therefore if the Zeebe broker runs out of disk space the system is in an invalid state, as the broker cannot",source:"@site/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/operations/disk-space.md",sourceDirName:"product-manuals/zeebe/deployment-guide/operations",slug:"/product-manuals/zeebe/deployment-guide/operations/disk-space",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/disk-space",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/operations/disk-space.md",version:"0.26",frontMatter:{id:"disk-space",title:"Disk space"},sidebar:"version-0.26/Product Manuals",previous:{title:"Backpressure",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/backpressure"},next:{title:"Upgrade Zeebe",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/operations/upgrade-zeebe"}},c=[],d={toc:c};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Zeebe uses the local disk for storage of it's persistent data. Therefore if the Zeebe broker runs out of disk space the system is in an invalid state, as the broker cannot\nupdate it's state."),(0,o.kt)("p",null,"To prevent the system to end in an unrecoverable state Zeebe expects a minimum size of free disk space available. If this limit is violated the broker will reject new\nrequests, to allow the operations team to free more disk space and the broker to continue to update it's state."),(0,o.kt)("p",null,"Zeebe can be configured with the following settings for the disk usage watermarks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"zeebe.broker.data.diskUsageMonitoringEnabled"),": configure if disk usage should be monitored (default: true)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"zeebe.broker.data.diskUsageReplicationWatermark"),": the fraction of used disk space before the replication is paused (default: 0.99)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"zeebe.broker.data.diskUsageCommandWatermark"),": the fraction of used disk space before new user commands are rejected (default: 0.97), this has to be less then ",(0,o.kt)("inlineCode",{parentName:"li"},"diskUsageReplicationWatermark")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"zeebe.broker.data.diskUsageMonitoringInterval"),": the interval in which the disk space usage is checked (default 1 second)")),(0,o.kt)("p",null,"For ",(0,o.kt)("strong",{parentName:"p"},"production")," use cases we recommend to set the values for ",(0,o.kt)("inlineCode",{parentName:"p"},"diskUsageReplicationWatermark")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"diskUsageCommandWatermark")," to smaller values, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"diskUsageReplicationWatermark=0.9")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"diskUsageCommandWatermark=0.8"),"."))}l.isMDXComponent=!0}}]);