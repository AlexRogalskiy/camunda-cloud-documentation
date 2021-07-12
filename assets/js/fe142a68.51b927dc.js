(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[85069],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},83687:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},Tag:function(){return l},default:function(){return f}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={id:"task-state",title:"TaskState"},c=void 0,s={unversionedId:"reference/tasklist-api/enums/task-state",id:"reference/tasklist-api/enums/task-state",isDocsHomePage:!1,title:"TaskState",description:"<span",source:"@site/docs/reference/tasklist-api/enums/task-state.mdx",sourceDirName:"reference/tasklist-api/enums",slug:"/reference/tasklist-api/enums/task-state",permalink:"/docs/reference/tasklist-api/enums/task-state",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/tasklist-api/enums/task-state.mdx",version:"current",frontMatter:{id:"task-state",title:"TaskState"},sidebar:"Reference",previous:{title:"Variable",permalink:"/docs/reference/tasklist-api/objects/variable"},next:{title:"TaskQuery",permalink:"/docs/reference/tasklist-api/inputs/task-query"}},u=[{value:"Values",id:"values",children:[]}],l=function(e){var t=e.children,n=e.color;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={toc:u,Tag:l};function f(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"State of the task."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum TaskState {\n  CREATED\n  COMPLETED\n  CANCELED\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"created"},(0,o.kt)("inlineCode",{parentName:"h4"},"CREATED")),(0,o.kt)("h4",{id:"completed"},(0,o.kt)("inlineCode",{parentName:"h4"},"COMPLETED")),(0,o.kt)("h4",{id:"canceled"},(0,o.kt)("inlineCode",{parentName:"h4"},"CANCELED")))}f.isMDXComponent=!0}}]);