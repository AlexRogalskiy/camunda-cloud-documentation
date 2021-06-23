(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[53083],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=l(r),f=i,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||c;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,a=new Array(c);a[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},54572:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return o},toc:function(){return u},Tag:function(){return l},default:function(){return d}});var n=r(22122),i=r(19756),c=(r(67294),r(3905)),a={id:"include",title:"include"},o={unversionedId:"reference/tasklist-api/directives/include",id:"reference/tasklist-api/directives/include",isDocsHomePage:!1,title:"include",description:"<span",source:"@site/docs/reference/tasklist-api/directives/include.mdx",sourceDirName:"reference/tasklist-api/directives",slug:"/reference/tasklist-api/directives/include",permalink:"/docs/reference/tasklist-api/directives/include",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/tasklist-api/directives/include.mdx",version:"current",frontMatter:{id:"include",title:"include"},sidebar:"Reference",previous:{title:"deprecated",permalink:"/docs/reference/tasklist-api/directives/deprecated"},next:{title:"skip",permalink:"/docs/reference/tasklist-api/directives/skip"}},u=[{value:"Arguments",id:"arguments",children:[]}],l=function(e){var t=e.children,r=e.color;return(0,c.kt)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},s={toc:u,Tag:l};function d(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Directs the executor to include this field or fragment only when the ",(0,c.kt)("inlineCode",{parentName:"p"},"if")," argument is true."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @include(\n  if: Boolean!\n)\n")),(0,c.kt)("h3",{id:"arguments"},"Arguments"),(0,c.kt)("h4",{id:"if-boolean"},(0,c.kt)("inlineCode",{parentName:"h4"},"if")," (",(0,c.kt)("a",{parentName:"h4",href:"/docs/reference/tasklist-api/scalars/boolean"},(0,c.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,c.kt)("p",null,"Included when true."))}d.isMDXComponent=!0}}]);