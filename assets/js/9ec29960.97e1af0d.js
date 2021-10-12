(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[36053],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40202:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return l}});var o=n(22122),r=n(19756),i=(n(67294),n(3905)),a={id:"index",title:"Operating Zeebe in Production",sidebar_label:"Overview"},s=void 0,p={unversionedId:"components/zeebe/deployment-guide/operations/index",id:"version-1.1/components/zeebe/deployment-guide/operations/index",isDocsHomePage:!1,title:"Operating Zeebe in Production",description:"This chapter covers topics relevant for anyone who wants to operate Zeebe in production.",source:"@site/versioned_docs/version-1.1/components/zeebe/deployment-guide/operations/index.md",sourceDirName:"components/zeebe/deployment-guide/operations",slug:"/components/zeebe/deployment-guide/operations/index",permalink:"/docs/1.1/components/zeebe/deployment-guide/operations/index",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.1/components/zeebe/deployment-guide/operations/index.md",version:"1.1",frontMatter:{id:"index",title:"Operating Zeebe in Production",sidebar_label:"Overview"},sidebar:"version-1.1/Components",previous:{title:"Authorization",permalink:"/docs/1.1/components/zeebe/deployment-guide/security/authorization"},next:{title:"Resource planning",permalink:"/docs/1.1/components/zeebe/deployment-guide/operations/resource-planning"}},c=[],u={toc:c};function l(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This chapter covers topics relevant for anyone who wants to operate Zeebe in production."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.1/components/zeebe/deployment-guide/operations/resource-planning"},"Resource planning")," - Gives an introduction for calculating how many resources need to be provisioned."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.1/components/zeebe/deployment-guide/operations/network-ports"},"Network ports")," - Discusses which ports are needed to run Zeebe"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.1/components/zeebe/deployment-guide/operations/setting-up-a-cluster"},"Setting up a Zeebe cluster")," - Quick guide on how to set up a cluster with multiple brokers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.1/components/zeebe/deployment-guide/operations/metrics"},"Metrics")," - Lists options to monitor Zeebe."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.1/components/zeebe/deployment-guide/operations/health"},"Health status")," - Lists available high level health and liveness probes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.1/components/zeebe/deployment-guide/operations/backpressure"},"Backpressure")," - Discusses the backpressure mechanism used by Zeebe brokers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.1/components/zeebe/deployment-guide/operations/disk-space"},"Disk space")," - Explains how to set limits for the amount of free disk space. Once these limits are undercut, Zeebe will degrade gracefully to allow the operations team to provide more disk space."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.1/components/zeebe/deployment-guide/operations/update-zeebe"},"Update zeebe")," - Contains information on how to perform a rolling upgrade.")))}l.isMDXComponent=!0}}]);