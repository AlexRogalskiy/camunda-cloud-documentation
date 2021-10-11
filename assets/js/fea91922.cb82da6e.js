(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[77550],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||c;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13655:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var o=n(22122),r=n(19756),c=(n(67294),n(3905)),a={id:"protocols",title:"Protocols"},i=void 0,s={unversionedId:"components/zeebe/technical-concepts/protocols",id:"components/zeebe/technical-concepts/protocols",isDocsHomePage:!1,title:"Protocols",description:"Zeebe clients connect to brokers via a stateless gateway.",source:"@site/docs/components/zeebe/technical-concepts/protocols.md",sourceDirName:"components/zeebe/technical-concepts",slug:"/components/zeebe/technical-concepts/protocols",permalink:"/docs/components/zeebe/technical-concepts/protocols",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/components/zeebe/technical-concepts/protocols.md",version:"current",frontMatter:{id:"protocols",title:"Protocols"},sidebar:"Components",previous:{title:"Process lifecycles",permalink:"/docs/components/zeebe/technical-concepts/process-lifecycles"},next:{title:"Exporters",permalink:"/docs/components/zeebe/technical-concepts/exporters"}},l=[{value:"What is gRPC?",id:"what-is-grpc",children:[]},{value:"Why gRPC?",id:"why-grpc",children:[]},{value:"Supported clients",id:"supported-clients",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Zeebe clients connect to brokers via a stateless gateway."),(0,c.kt)("p",null,"For the communication between client and gateway, ",(0,c.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," is used. The communication protocol is defined using Protocol Buffers v3 (",(0,c.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/proto3"},"proto3"),"), and you can find it in the\n",(0,c.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/tree/develop/gateway-protocol"},"Zeebe repository"),"."),(0,c.kt)("h2",{id:"what-is-grpc"},"What is gRPC?"),(0,c.kt)("p",null,"gRPC was first developed by Google and is now an open-source project and part of the Cloud Native Computing Foundation."),(0,c.kt)("p",null,"If you\u2019re new to gRPC, the ",(0,c.kt)("a",{parentName:"p",href:"https://grpc.io/docs/guides/index.html"},"What is gRPC")," page on the project website provides a good introduction to it."),(0,c.kt)("h2",{id:"why-grpc"},"Why gRPC?"),(0,c.kt)("p",null,"gRPC has many beneficial features that make it a good fit for Zeebe:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Supports bi-directional streaming for opening a persistent connection and sending or receiving a stream of messages between client and server."),(0,c.kt)("li",{parentName:"ul"},"Uses the common HTTP/2 protocol by default."),(0,c.kt)("li",{parentName:"ul"},"Uses Protocol Buffers as an interface definition and data serialization mechanism\u2013specifically, Zeebe uses proto3, which supports easy client generation in ten different programming languages.")),(0,c.kt)("h2",{id:"supported-clients"},"Supported clients"),(0,c.kt)("p",null,"Currently, Zeebe officially supports two gRPC clients: one in ",(0,c.kt)("a",{parentName:"p",href:"/docs/components/clients/java-client/index"},"Java"),", and one in ",(0,c.kt)("a",{parentName:"p",href:"/docs/components/clients/go-client/get-started"},"Golang"),"."),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/docs/components/clients/other-clients/index"},"Community clients")," have been created in other languages, including C#, Ruby, and JavaScript."),(0,c.kt)("p",null,"If there is no client in your target language yet, you can ",(0,c.kt)("a",{parentName:"p",href:"/docs/components/clients/build-your-own-client"},"build your own client")," in a range of different programming languages."))}u.isMDXComponent=!0}}]);