(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[48416],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,g=m["".concat(u,".").concat(p)]||m[p]||d[p]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37898:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u},default:function(){return c}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),o={id:"manage-users",title:"Manage users of your organization"},i={unversionedId:"product-manuals/cloud-console/manage-organization/manage-users",id:"product-manuals/cloud-console/manage-organization/manage-users",isDocsHomePage:!1,title:"Manage users of your organization",description:"General rights concept",source:"@site/docs/product-manuals/cloud-console/manage-organization/manage-users.md",sourceDirName:"product-manuals/cloud-console/manage-organization",slug:"/product-manuals/cloud-console/manage-organization/manage-users",permalink:"/docs/product-manuals/cloud-console/manage-organization/manage-users",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/cloud-console/manage-organization/manage-users.md",version:"current",frontMatter:{id:"manage-users",title:"Manage users of your organization"},sidebar:"Product Manuals",previous:{title:"Organization settings",permalink:"/docs/product-manuals/cloud-console/manage-organization/organization-settings"},next:{title:"View organization activity",permalink:"/docs/product-manuals/cloud-console/manage-organization/view-organization-activity"}},u=[{value:"General rights concept",id:"general-rights-concept",children:[]},{value:"Users",id:"users",children:[]}],s={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"general-rights-concept"},"General rights concept"),(0,l.kt)("p",null,"When a user signs up to Camunda Cloud, they receive a personal organization. Clusters that the user creates in this organization are assigned to this organization."),(0,l.kt)("p",null,"If several users need access to the same Zeebe cluster, all users can be assigned to the same organization."),(0,l.kt)("h2",{id:"users"},"Users"),(0,l.kt)("p",null,"Under this setting members of the current organization can be managed. A user can have one of the following roles:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Owner: Owner of the organization (currently limited to one user, cannot be changed by the user)"),(0,l.kt)("li",{parentName:"ul"},"Admin: Restricted rights for user management"),(0,l.kt)("li",{parentName:"ul"},"Member: Can manage Zeebe Clusters and Client and use Operate")),(0,l.kt)("p",null,"The following table illustrates the rights of each role:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Owner"),(0,l.kt)("th",{parentName:"tr",align:null},"Admin"),(0,l.kt)("th",{parentName:"tr",align:null},"Member"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage Zeebe clusters"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manage clients"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Use Operate"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Users: Manage members"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Billing: Manage reservations"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Billing: Request paid plan"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Users: Manage admins"),(0,l.kt)("td",{parentName:"tr",align:null},"X"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Users are invited to a Camunda Cloud organization via their e-mail address, which must be accepted by the user. As long as the invitation has not been accepted, the user remains in the 'Pending' state."),(0,l.kt)("p",null,"People can also be invited to an organization that does not yet have a Camunda Cloud account. In this case the invited person must first create a Camunda Cloud account and can then gain access to the organization."))}c.isMDXComponent=!0}}]);