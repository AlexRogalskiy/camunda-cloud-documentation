(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[28496],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99423:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={id:"disk-space",title:"Disk Space"},s=void 0,c={unversionedId:"components/zeebe/operations/disk-space",id:"version-0.25/components/zeebe/operations/disk-space",isDocsHomePage:!1,title:"Disk Space",description:"Zeebe uses the local disk for storage of it's persistent data. Therefore if the Zeebe broker runs out of disk space the system is in an invalid state, as the broker cannot",source:"@site/versioned_docs/version-0.25/components/zeebe/operations/disk-space.md",sourceDirName:"components/zeebe/operations",slug:"/components/zeebe/operations/disk-space",permalink:"/docs/0.25/components/zeebe/operations/disk-space",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/components/zeebe/operations/disk-space.md",version:"0.25",frontMatter:{id:"disk-space",title:"Disk Space"},sidebar:"version-0.25/Components",previous:{title:"Backpressure",permalink:"/docs/0.25/components/zeebe/operations/backpressure"},next:{title:"Upgrade Zeebe",permalink:"/docs/0.25/components/zeebe/operations/upgrade-zeebe"}},p=[],l={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Zeebe uses the local disk for storage of it's persistent data. Therefore if the Zeebe broker runs out of disk space the system is in an invalid state, as the broker cannot\nupdate it's state."),(0,a.kt)("p",null,"To prevent the system to end in an unrecoverable state Zeebe expects a minimum size of free disk space available. If this limit is violated the broker will reject new\nrequests, to allow the operations team to free more disk space and the broker to continue to update it's state."),(0,a.kt)("p",null,"Zeebe can be configured with the following settings for the disk usage watermarks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"zeebe.broker.data.diskUsageMonitoringEnabled"),": configure if disk usage should be monitored (default: true)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"zeebe.broker.data.diskUsageReplicationWatermark"),": the fraction of used disk space before the replication is paused (default: 0.99)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"zeebe.broker.data.diskUsageCommandWatermark"),": the fraction of used disk space before new user commands are rejected (default: 0.97), this has to be less then ",(0,a.kt)("inlineCode",{parentName:"li"},"diskUsageReplicationWatermark")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"zeebe.broker.data.diskUsageMonitoringInterval"),": the interval in which the disk space usage is checked (default 1 second)")),(0,a.kt)("p",null,"For ",(0,a.kt)("strong",{parentName:"p"},"production")," use cases we recommend to set the values for ",(0,a.kt)("inlineCode",{parentName:"p"},"diskUsageReplicationWatermark")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"diskUsageCommandWatermark")," to smaller values, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"diskUsageReplicationWatermark=0.9")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"diskUsageCommandWatermark=0.8"),"."))}u.isMDXComponent=!0}}]);