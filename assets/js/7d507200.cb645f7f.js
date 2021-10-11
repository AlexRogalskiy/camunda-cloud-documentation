(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[73372],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95709:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={id:"complete-task",title:"completeTask"},s=void 0,c={unversionedId:"reference/tasklist-api/mutations/complete-task",id:"reference/tasklist-api/mutations/complete-task",isDocsHomePage:!1,title:"completeTask",description:"Complete a task with taskId and optional variables. Returns the task.",source:"@site/docs/reference/tasklist-api/mutations/complete-task.mdx",sourceDirName:"reference/tasklist-api/mutations",slug:"/reference/tasklist-api/mutations/complete-task",permalink:"/docs/reference/tasklist-api/mutations/complete-task",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/tasklist-api/mutations/complete-task.mdx",version:"current",frontMatter:{id:"complete-task",title:"completeTask"},sidebar:"Reference",previous:{title:"claimTask",permalink:"/docs/reference/tasklist-api/mutations/claim-task"},next:{title:"deleteProcessInstance",permalink:"/docs/reference/tasklist-api/mutations/delete-process-instance"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Complete a task with taskId and optional variables. Returns the task."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"completeTask(\n  taskId: String!\n  variables: [VariableInput!]!\n): Task!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"taskid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"taskId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"variables-variableinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"variables")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/inputs/variable-input"},(0,i.kt)("inlineCode",{parentName:"a"},"[VariableInput!]!")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"task"},(0,i.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/objects/task"},(0,i.kt)("inlineCode",{parentName:"a"},"Task"))),(0,i.kt)("p",null,"Describes the User task."))}u.isMDXComponent=!0}}]);