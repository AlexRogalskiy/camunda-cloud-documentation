(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[52560],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,g=d["".concat(l,".").concat(p)]||d[p]||m[p]||r;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89480:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),i={id:"manage-cloud-management-api-clients",title:"Manage cloud management API clients"},c=void 0,l={unversionedId:"product-manuals/cloud-console/manage-organization/manage-cloud-management-api-clients",id:"version-1.0/product-manuals/cloud-console/manage-organization/manage-cloud-management-api-clients",isDocsHomePage:!1,title:"Manage cloud management API clients",description:"To interact with Camunda Cloud programmatically, without using the Camunda Cloud UI, you can create Cloud Management API clients.",source:"@site/versioned_docs/version-1.0/product-manuals/cloud-console/manage-organization/manage-cloud-management-api-clients.md",sourceDirName:"product-manuals/cloud-console/manage-organization",slug:"/product-manuals/cloud-console/manage-organization/manage-cloud-management-api-clients",permalink:"/docs/1.0/product-manuals/cloud-console/manage-organization/manage-cloud-management-api-clients",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/product-manuals/cloud-console/manage-organization/manage-cloud-management-api-clients.md",version:"1.0",frontMatter:{id:"manage-cloud-management-api-clients",title:"Manage cloud management API clients"},sidebar:"version-1.0/Product Manuals",previous:{title:"View organization activity",permalink:"/docs/1.0/product-manuals/cloud-console/manage-organization/view-organization-activity"},next:{title:"Update billing reservations",permalink:"/docs/1.0/product-manuals/cloud-console/manage-organization/update-billing-reservations"}},u=[],s={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To interact with Camunda Cloud programmatically, without using the Camunda Cloud UI, you can create Cloud Management API clients."),(0,r.kt)("p",null,"Cloud Management API clients are created for an organization, and can access all Zeebe clusters of this organization."),(0,r.kt)("p",null,"You can manage clients in the organization settings under the tab ",(0,r.kt)("inlineCode",{parentName:"p"},"Cloud Management API"),"."),(0,r.kt)("p",null,"A client can have one or multiple of the following permissions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Get clusters")," - retrieve information of all clusters of the organization"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create clusters")," - create a cluster for the organization"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delete clusters")," - delete a cluster of the organization"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Get Zeebe clients")," - retrieve all Zeebe clients of the organization"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create Zeebe clients")," - create a Zeebe client for a cluster of the organization"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delete Zeebe clients")," - delete a Zeebe client of a cluster owned by the organization")),(0,r.kt)("p",null,"After a Cloud Management API client is created, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Client Secret")," is only shown once! You can also download a script that requests an access roken with your credentials."),(0,r.kt)("p",null,"To retrieve an access token for the Cloud Management API client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n    --request POST \\\n    --data \'{"grant_type":"client_credentials", "audience":"api.cloud.camunda.io", "client_id":"XXX", "client_secret":"YYY"}\' \\\n    https://login.cloud.camunda.io/oauth/token\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Please note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Access tokens have a validity period that can be found in the access token. After this time a new access token must be requested."),(0,r.kt)("li",{parentName:"ul"},"The auth service has built-in rate limiting. If too many token requests are executed in a short time, the client is blocked for a certain time. Since the access tokens have a certain validity period, they must be cached on the client side.")))))}m.isMDXComponent=!0}}]);