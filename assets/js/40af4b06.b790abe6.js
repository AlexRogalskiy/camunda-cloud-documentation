(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[59795],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28907:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={id:"data-flow",title:"Data Flow"},c=void 0,l={unversionedId:"components/zeebe/yaml-workflows/data-flow",id:"version-0.25/components/zeebe/yaml-workflows/data-flow",isDocsHomePage:!1,title:"Data Flow",description:"Zeebe carries custom data from task to task in form of variables. Variables are key-value-pairs and part of the workflow instance.",source:"@site/versioned_docs/version-0.25/components/zeebe/yaml-workflows/data-flow.md",sourceDirName:"components/zeebe/yaml-workflows",slug:"/components/zeebe/yaml-workflows/data-flow",permalink:"/docs/0.25/components/zeebe/yaml-workflows/data-flow",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/components/zeebe/yaml-workflows/data-flow.md",version:"0.25",frontMatter:{id:"data-flow",title:"Data Flow"},sidebar:"version-0.25/Components",previous:{title:"Control Flow",permalink:"/docs/0.25/components/zeebe/yaml-workflows/control-flow"},next:{title:"Overview",permalink:"/docs/0.25/components/zeebe/reference/index"}},s=[{value:"Additional Resources",id:"additional-resources",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Zeebe carries custom data from task to task in form of variables. Variables are key-value-pairs and part of the workflow instance."),(0,a.kt)("p",null,"By default, all job variables are merged into the workflow instance. This behavior can be customized by defining an output mapping at the task. Input mappings can be used to transform the variables into a format that is accepted by the job worker."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: order-process\n\ntasks:\n    - id: collect-money\n      type: payment-service\n      inputs:\n          - source: totalPrice\n            target: price\n      outputs:\n          - source: success\n            target: paymentSuccess\n\n    - id: fetch-items\n      type: inventory-service\n\n    - id: ship-parcel\n      type: shipment-service\n")),(0,a.kt)("p",null,"Every mapping element has a ",(0,a.kt)("inlineCode",{parentName:"p"},"source")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," element which must be a ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.25/components/zeebe/reference/variables#access-variables"},"variable expression"),"."),(0,a.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.25/components/zeebe/bpmn-workflows/data-flow"},"Data Flow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.25/components/zeebe/reference/variables#inputoutput-variable-mappings"},"Variable Mappings"))))}u.isMDXComponent=!0}}]);