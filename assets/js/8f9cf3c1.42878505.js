(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[65065],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73960:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),c={id:"deprecated-features",title:"Deprecated features"},i=void 0,u={unversionedId:"product-manuals/zeebe/open-source/deprecated-features",id:"version-0.26/product-manuals/zeebe/open-source/deprecated-features",isDocsHomePage:!1,title:"Deprecated features",description:"This section lists deprecated features.",source:"@site/versioned_docs/version-0.26/product-manuals/zeebe/open-source/deprecated-features.md",sourceDirName:"product-manuals/zeebe/open-source",slug:"/product-manuals/zeebe/open-source/deprecated-features",permalink:"/docs/0.26/product-manuals/zeebe/open-source/deprecated-features",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/zeebe/open-source/deprecated-features.md",version:"0.26",frontMatter:{id:"deprecated-features",title:"Deprecated features"},sidebar:"version-0.26/Product Manuals",previous:{title:"Release cycle",permalink:"/docs/0.26/product-manuals/zeebe/open-source/release-cycle"},next:{title:"Introduction",permalink:"/docs/0.26/product-manuals/operate/index"}},l=[{value:"Deprecated in 0.23.0-alpha2",id:"deprecated-in-0230-alpha2",children:[]}],s={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section lists deprecated features."),(0,o.kt)("h2",{id:"deprecated-in-0230-alpha2"},"Deprecated in 0.23.0-alpha2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TOML configuration - deprecated and removed in 0.23.0-alpha2"),(0,o.kt)("li",{parentName:"ul"},"Legacy environment variables - deprecated in 0.23.0-alpha2, removed in 0.25.0")),(0,o.kt)("p",null,"New configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"exporters:\n  elasticsearch:\n    className: io.zeebe.exporter.ElasticsearchExporter\n  debughttp:\n    className: io.zeebe.broker.exporter.debug.DebugHttpExporter\n")),(0,o.kt)("p",null,"In terms of specifying values, there were two minor changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Memory sizes are now specified like this: ",(0,o.kt)("inlineCode",{parentName:"li"},"512MB")," (old way: ",(0,o.kt)("inlineCode",{parentName:"li"},"512M"),")"),(0,o.kt)("li",{parentName:"ul"},"Durations, e.g. timeouts, can now also be given in ISO-8601 Durations format. However you can still use the established way and specify a timeout of ",(0,o.kt)("inlineCode",{parentName:"li"},"30s"))))}p.isMDXComponent=!0}}]);