(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[64171],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),l=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return t?o.createElement(f,a(a({ref:n},p),{},{components:t})):o.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52707:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return s}});var o=t(22122),r=t(19756),i=(t(67294),t(3905)),a={id:"index",title:"Deployment guide",sidebar_label:"Overview"},c=void 0,u={unversionedId:"components/zeebe/deployment-guide/index",id:"components/zeebe/deployment-guide/index",isDocsHomePage:!1,title:"Deployment guide",description:"This chapter contains information for users who want to deploy and run Zeebe in a private cloud or on their own hardware.",source:"@site/docs/components/zeebe/deployment-guide/index.md",sourceDirName:"components/zeebe/deployment-guide",slug:"/components/zeebe/deployment-guide/index",permalink:"/docs/components/zeebe/deployment-guide/index",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/components/zeebe/deployment-guide/index.md",version:"current",frontMatter:{id:"index",title:"Deployment guide",sidebar_label:"Overview"},sidebar:"Components",previous:{title:"Exporters",permalink:"/docs/components/zeebe/technical-concepts/exporters"},next:{title:"Install",permalink:"/docs/components/zeebe/deployment-guide/local/install"}},l=[],p={toc:l};function s(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This chapter contains information for users who want to deploy and run Zeebe in a private cloud or on their own hardware."),(0,i.kt)("p",null,"Zeebe can be run as a Docker image or as a Kubernetes deployment."),(0,i.kt)("p",null,"We recommend using Docker during development. This gives you a consistent, repeatable development environment."),(0,i.kt)("p",null,"We recommend using either Camunda Cloud or Kubernetes and container images in production. This provides you with predictable and consistent configuration, and the ability to manage deployment using automation tools."),(0,i.kt)("p",null,"The deployment guide covers the following topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/components/zeebe/deployment-guide/local/install"},"Local installation")," - Contains instructions and a quick start guide to install Zeebe locally."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/components/zeebe/deployment-guide/docker/install"},"Docker container")," - Covers running Zeebe in a Docker environment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/components/zeebe/deployment-guide/kubernetes/index"},"Kubernetes deployment")," - Gives information on running Zeebe in a Kubernetes environment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/components/zeebe/deployment-guide/getting-started/index"},"Getting started guide")," - Shows you how to work with Zeebe."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/components/zeebe/deployment-guide/configuration/configuration"},"Configuration")," - Explains the configuration options. These configuration options apply to both environments, but not to Camunda Cloud. In Camunda Cloud, the configuration is provided for you."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/components/zeebe/deployment-guide/security/security"},"Security")," - Discusses the security aspects of running Zeebe and how to use them."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/components/zeebe/deployment-guide/operations/index"},"Operation")," - Outlines topics that become relevant when you want to operate Zeebe in production.")))}s.isMDXComponent=!0}}]);