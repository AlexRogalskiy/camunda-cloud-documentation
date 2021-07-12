(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[68166],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,c(c({ref:t},s),{},{components:n})):o.createElement(f,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<a;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47644:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),c={id:"common-pitfalls",title:"Common Pitfalls"},l=void 0,i={unversionedId:"product-manuals/cloud-console/troubleshooting/common-pitfalls",id:"version-1.0/product-manuals/cloud-console/troubleshooting/common-pitfalls",isDocsHomePage:!1,title:"Common Pitfalls",description:"If you have a problem, you can always use the feedback form.",source:"@site/versioned_docs/version-1.0/product-manuals/cloud-console/troubleshooting/common-pitfalls.md",sourceDirName:"product-manuals/cloud-console/troubleshooting",slug:"/product-manuals/cloud-console/troubleshooting/common-pitfalls",permalink:"/docs/1.0/product-manuals/cloud-console/troubleshooting/common-pitfalls",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/product-manuals/cloud-console/troubleshooting/common-pitfalls.md",version:"1.0",frontMatter:{id:"common-pitfalls",title:"Common Pitfalls"},sidebar:"version-1.0/Product Manuals",previous:{title:"Upgrade to Professional Plan",permalink:"/docs/1.0/product-manuals/cloud-console/manage-plan/upgrade-to-professional-plan"},next:{title:"Feedback and support",permalink:"/docs/1.0/product-manuals/cloud-console/troubleshooting/feedback-and-support"}},u=[{value:"The button to create new clusters is disabled",id:"the-button-to-create-new-clusters-is-disabled",children:[]},{value:"I cannot connect to Zeebe",id:"i-cannot-connect-to-zeebe",children:[]}],s={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you have a problem, you can always use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0/product-manuals/cloud-console/troubleshooting/feedback-and-support"},"feedback form"),"."),(0,a.kt)("h2",{id:"the-button-to-create-new-clusters-is-disabled"},"The button to create new clusters is disabled"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your organization is on a Trial Plan and you have already created a cluster. In this case you cannot create another cluster, because only one cluster is included in the trial plan."),(0,a.kt)("li",{parentName:"ul"},"Your billing reservations do not allow any more clusters. In this case you have to increase the ",(0,a.kt)("a",{parentName:"li",href:"/docs/1.0/product-manuals/cloud-console/manage-organization/update-billing-reservations"},"reservations")," if you want to create more clusters. If you do not have the necessary rights, contact an admin or the owner of the organization.")),(0,a.kt)("h2",{id:"i-cannot-connect-to-zeebe"},"I cannot connect to Zeebe"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check if your ",(0,a.kt)("a",{parentName:"li",href:"/docs/1.0/product-manuals/cloud-console/manage-clusters/manage-api-clients"},"API Client")," has the necessary rights. To interact with Zeebe the ",(0,a.kt)("strong",{parentName:"li"},"Scope")," ",(0,a.kt)("inlineCode",{parentName:"li"},"Zeebe")," must be set."),(0,a.kt)("li",{parentName:"ul"},"Check if your credentials are configured correctly. There is a CLI tool that allows you to easily check the status: ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/zbctl"},(0,a.kt)("inlineCode",{parentName:"a"},"zbctl")),". With the command ",(0,a.kt)("inlineCode",{parentName:"li"},"zbctl status")," you can read the topology. If this command works, the connection can be established."),(0,a.kt)("li",{parentName:"ul"},"Check if your cluster is ",(0,a.kt)("em",{parentName:"li"},"Healthy"),": it can happen that a Zeebe cluster is temporarily unavailable. Check the status of your cluster via the cluster overview.")))}p.isMDXComponent=!0}}]);