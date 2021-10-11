(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[58130],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,b=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88043:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={id:"index",title:"Kubernetes deployment",sidebar_label:"Overview"},l=void 0,u={unversionedId:"components/zeebe/deployment-guide/kubernetes/index",id:"version-1.0/components/zeebe/deployment-guide/kubernetes/index",isDocsHomePage:!1,title:"Kubernetes deployment",description:"We recommend that you use Kubernetes when deploying Zeebe to production.",source:"@site/versioned_docs/version-1.0/components/zeebe/deployment-guide/kubernetes/index.md",sourceDirName:"components/zeebe/deployment-guide/kubernetes",slug:"/components/zeebe/deployment-guide/kubernetes/index",permalink:"/docs/1.0/components/zeebe/deployment-guide/kubernetes/index",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/components/zeebe/deployment-guide/kubernetes/index.md",version:"1.0",frontMatter:{id:"index",title:"Kubernetes deployment",sidebar_label:"Overview"},sidebar:"version-1.0/Components",previous:{title:"Docker container",permalink:"/docs/1.0/components/zeebe/deployment-guide/docker/install"},next:{title:"Overview",permalink:"/docs/1.0/components/zeebe/deployment-guide/kubernetes/helm/index"}},s=[{value:"Deployment options",id:"deployment-options",children:[]},{value:"General information",id:"general-information",children:[{value:"Broker",id:"broker",children:[]},{value:"Gateway",id:"gateway",children:[]}]}],d={toc:s};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We recommend that you use Kubernetes when deploying Zeebe to production."),(0,a.kt)("h2",{id:"deployment-options"},"Deployment options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/1.0/components/zeebe/deployment-guide/kubernetes/helm/index"},"Helm")),(0,a.kt)("td",{parentName:"tr",align:null},"Helm allows you to choose exactly what chart (set of components) do you want to install and how these components needs to be configured.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/1.0/components/zeebe/deployment-guide/kubernetes/operator/zeebe-operator"},"Zeebe Operator (experimental)")),(0,a.kt)("td",{parentName:"tr",align:null},"The objective of the Zeebe k8s Operator is to simplify and natively integrate Zeebe with k8s, to solve operational burden and facilitate the creation and maintenance of a set of clusters.")))),(0,a.kt)("h2",{id:"general-information"},"General information"),(0,a.kt)("h3",{id:"broker"},"Broker"),(0,a.kt)("p",null,"Zeebe broker nodes need to be deployed as a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSet"),", in order to preserve the identity of cluster nodes. StatefulSets require persistent storage, which needs to be allocated in advance. Depending on your cloud provider, the persistent storage will differ, as it is provider-specific."),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-kubernetes"},"zeebe-kubernetes")," repository you will find example Kubernetes manifests to configure a three broker cluster with the Elastic Search exporter and the Operate preview. Examples are provided for provisioning storage on Google Cloud Platform, and Microsoft Azure."),(0,a.kt)("p",null,"There are many ways that you can provision and configure a Kubernetes cluster. And there are a number of architectural choices you need to make: will your workers run in the Kubernetes cluster or external to it?"),(0,a.kt)("p",null,"You will need to configure your Kubernetes cluster and modify this to suit the architecture you are building."),(0,a.kt)("h3",{id:"gateway"},"Gateway"),(0,a.kt)("p",null,"Zeebe gateway is deployed as a stateless service."),(0,a.kt)("p",null,"We support ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0/components/zeebe/deployment-guide/operations/health#gateway"},"Kubernetes startup and liveness probes")," for Zeebe gateway."))}c.isMDXComponent=!0}}]);