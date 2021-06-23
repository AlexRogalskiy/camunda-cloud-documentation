(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[10598],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(b,l(l({ref:r},u),{},{components:t})):n.createElement(b,l({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88147:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return i},default:function(){return u}});var n=t(22122),a=t(19756),o=(t(67294),t(3905)),l={id:"job-worker-open",title:"Open a Job Worker"},c={unversionedId:"product-manuals/zeebe/clients/java-client-examples/job-worker-open",id:"version-0.25/product-manuals/zeebe/clients/java-client-examples/job-worker-open",isDocsHomePage:!1,title:"Open a Job Worker",description:"Related Resources",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/clients/java-client-examples/job-worker-open.md",sourceDirName:"product-manuals/zeebe/clients/java-client-examples",slug:"/product-manuals/zeebe/clients/java-client-examples/job-worker-open",permalink:"/docs/0.25/product-manuals/zeebe/clients/java-client-examples/job-worker-open",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/clients/java-client-examples/job-worker-open.md",version:"0.25",frontMatter:{id:"job-worker-open",title:"Open a Job Worker"},sidebar:"version-0.25/Product Manuals",previous:{title:"Create a Workflow Instance and Await Result",permalink:"/docs/0.25/product-manuals/zeebe/clients/java-client-examples/workflow-instance-create-with-result"},next:{title:"Handle Variables as POJO",permalink:"/docs/0.25/product-manuals/zeebe/clients/java-client-examples/data-pojo"}},i=[{value:"Related Resources",id:"related-resources",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"JobWorkerCreator.java",id:"jobworkercreatorjava",children:[]}],s={toc:i};function u(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"related-resources"},"Related Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/basics/job-workers"},"Job Worker Basics"))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Running Zeebe broker with endpoint ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:26500")," (default)"),(0,o.kt)("li",{parentName:"ol"},"Run the ",(0,o.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/clients/java-client-examples/workflow-deploy"},"Deploy a Workflow example")),(0,o.kt)("li",{parentName:"ol"},"Run the ",(0,o.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/clients/java-client-examples/workflow-instance-create"},"Create a Workflow Instance example")," a couple of times")),(0,o.kt)("h2",{id:"jobworkercreatorjava"},"JobWorkerCreator.java"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/java/io/zeebe/example/job/JobWorkerCreator.java"},"Source on github")))}u.isMDXComponent=!0}}]);