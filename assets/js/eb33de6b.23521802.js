(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[24485],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6267:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={id:"index",title:"Overview"},l=void 0,c={unversionedId:"product-manuals/zeebe/yaml-workflows/index",id:"version-0.25/product-manuals/zeebe/yaml-workflows/index",isDocsHomePage:!1,title:"Overview",description:"In addition to BPMN, Zeebe provides a YAML format to define workflows. Creating a YAML workflow can be done with a regular text editor and does not require a graphical modelling tool. It is inspired by imperative programming concepts and aims to be easily understandable by programmers. Internally, Zeebe transforms a deployed YAML file to BPMN.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/yaml-workflows/index.md",sourceDirName:"product-manuals/zeebe/yaml-workflows",slug:"/product-manuals/zeebe/yaml-workflows/index",permalink:"/docs/0.25/product-manuals/zeebe/yaml-workflows/index",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/yaml-workflows/index.md",version:"0.25",frontMatter:{id:"index",title:"Overview"},sidebar:"version-0.25/Product Manuals",previous:{title:"Multi-Instance",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/multi-instance/multi-instance"},next:{title:"Tasks",permalink:"/docs/0.25/product-manuals/zeebe/yaml-workflows/tasks"}},s=[],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In addition to BPMN, Zeebe provides a YAML format to define workflows. Creating a YAML workflow can be done with a regular text editor and does not require a graphical modelling tool. It is inspired by imperative programming concepts and aims to be easily understandable by programmers. Internally, Zeebe transforms a deployed YAML file to BPMN."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: order-process\n\ntasks:\n    - id: collect-money\n      type: payment-service\n\n    - id: fetch-items\n      type: inventory-service\n\n    - id: ship-parcel\n      type: shipment-service\n")),(0,a.kt)("p",null,"Read more about:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/yaml-workflows/tasks"},"Tasks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/yaml-workflows/control-flow"},"Control Flow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/yaml-workflows/data-flow"},"Data Flow"))))}d.isMDXComponent=!0}}]);