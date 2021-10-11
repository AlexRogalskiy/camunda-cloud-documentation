(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[82546],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65373:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o={id:"variable",title:"Variable"},l=void 0,c={unversionedId:"reference/tasklist-api/objects/variable",id:"reference/tasklist-api/objects/variable",isDocsHomePage:!1,title:"Variable",description:"Variable used in task.",source:"@site/docs/reference/tasklist-api/objects/variable.mdx",sourceDirName:"reference/tasklist-api/objects",slug:"/reference/tasklist-api/objects/variable",permalink:"/docs/reference/tasklist-api/objects/variable",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/tasklist-api/objects/variable.mdx",version:"current",frontMatter:{id:"variable",title:"Variable"},sidebar:"Reference",previous:{title:"User",permalink:"/docs/reference/tasklist-api/objects/user"},next:{title:"currentUser",permalink:"/docs/reference/tasklist-api/queries/current-user"}},s=[{value:"Fields",id:"fields",children:[]}],u={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Variable used in task."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Variable {\n  id: ID!\n  name: String!\n  value: String!\n  previewValue: String!\n  isValueTruncated: Boolean!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"value-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"value")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("p",null,"full variable value"),(0,i.kt)("h4",{id:"previewvalue-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"previewValue")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("p",null,"value preview (limited in size)"),(0,i.kt)("h4",{id:"isvaluetruncated-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isValueTruncated")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,i.kt)("p",null,"shows, whether previewValue contains truncated value or full value"))}p.isMDXComponent=!0}}]);