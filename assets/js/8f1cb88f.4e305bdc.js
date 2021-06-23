(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[40228],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(y,u(u({ref:t},s),{},{components:r})):n.createElement(y,u({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99910:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return c},default:function(){return s}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),u={id:"security",title:"Security",sidebar_label:"Overview"},i={unversionedId:"product-manuals/zeebe/deployment-guide/security/security",id:"product-manuals/zeebe/deployment-guide/security/security",isDocsHomePage:!1,title:"Security",description:"Zeebe supports two security features that you should be aware of:",source:"@site/docs/product-manuals/zeebe/deployment-guide/security/security.md",sourceDirName:"product-manuals/zeebe/deployment-guide/security",slug:"/product-manuals/zeebe/deployment-guide/security/security",permalink:"/docs/product-manuals/zeebe/deployment-guide/security/security",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/deployment-guide/security/security.md",version:"current",sidebar_label:"Overview",frontMatter:{id:"security",title:"Security",sidebar_label:"Overview"},sidebar:"Product Manuals",previous:{title:"Environment variables",permalink:"/docs/product-manuals/zeebe/deployment-guide/configuration/environment-variables"},next:{title:"Authentication",permalink:"/docs/product-manuals/zeebe/deployment-guide/security/authentication"}},c=[],l={toc:c};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Zeebe supports two security features that you should be aware of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"authentication"},"Authentication"))," - allows you to secure communication between clients and gateways;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"authorization"},"Authorization"))," - allows you to supply access credentials to the client so these can be validated by a reverse proxy placed before the gateway.")))}s.isMDXComponent=!0}}]);