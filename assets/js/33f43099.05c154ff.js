(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[79121],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88014:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={id:"manage-users",title:"Manage users of your organization",description:"Let's take a closer look at the rights and responsibilities of users in your organization."},l=void 0,s={unversionedId:"components/cloud-console/manage-organization/manage-users",id:"version-1.1/components/cloud-console/manage-organization/manage-users",isDocsHomePage:!1,title:"Manage users of your organization",description:"Let's take a closer look at the rights and responsibilities of users in your organization.",source:"@site/versioned_docs/version-1.1/components/cloud-console/manage-organization/manage-users.md",sourceDirName:"components/cloud-console/manage-organization",slug:"/components/cloud-console/manage-organization/manage-users",permalink:"/docs/1.1/components/cloud-console/manage-organization/manage-users",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.1/components/cloud-console/manage-organization/manage-users.md",version:"1.1",frontMatter:{id:"manage-users",title:"Manage users of your organization",description:"Let's take a closer look at the rights and responsibilities of users in your organization."},sidebar:"version-1.1/Components",previous:{title:"Organization settings",permalink:"/docs/1.1/components/cloud-console/manage-organization/organization-settings"},next:{title:"View organization activity",permalink:"/docs/1.1/components/cloud-console/manage-organization/view-organization-activity"}},u=[{value:"General rights concept",id:"general-rights-concept",children:[]},{value:"Users",id:"users",children:[]}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"general-rights-concept"},"General rights concept"),(0,o.kt)("p",null,"When a user signs up for Camunda Cloud, they receive a personal organization. Clusters the user creates in this organization are assigned to this organization."),(0,o.kt)("p",null,"If several users need access to the same Zeebe cluster, all users can be assigned to the same organization."),(0,o.kt)("h2",{id:"users"},"Users"),(0,o.kt)("p",null,"Under this setting, members of the current organization can be managed. A user can have one of the following roles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Owner"),": Owner of the organization (currently limited to one user and cannot be changed by the user.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Admin"),": Restricted rights for user management."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Member"),": Can manage Zeebe Clusters, Client, and use Operate.")),(0,o.kt)("p",null,"The following table illustrates the rights of each role:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Owner"),(0,o.kt)("th",{parentName:"tr",align:null},"Admin"),(0,o.kt)("th",{parentName:"tr",align:null},"Member"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Manage Zeebe clusters"),(0,o.kt)("td",{parentName:"tr",align:null},"X"),(0,o.kt)("td",{parentName:"tr",align:null},"X"),(0,o.kt)("td",{parentName:"tr",align:null},"X")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Manage clients"),(0,o.kt)("td",{parentName:"tr",align:null},"X"),(0,o.kt)("td",{parentName:"tr",align:null},"X"),(0,o.kt)("td",{parentName:"tr",align:null},"X")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Use Operate"),(0,o.kt)("td",{parentName:"tr",align:null},"X"),(0,o.kt)("td",{parentName:"tr",align:null},"X"),(0,o.kt)("td",{parentName:"tr",align:null},"X")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Users: Manage members"),(0,o.kt)("td",{parentName:"tr",align:null},"X"),(0,o.kt)("td",{parentName:"tr",align:null},"X"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Billing: Manage reservations"),(0,o.kt)("td",{parentName:"tr",align:null},"X"),(0,o.kt)("td",{parentName:"tr",align:null},"X"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Billing: Request paid plan"),(0,o.kt)("td",{parentName:"tr",align:null},"X"),(0,o.kt)("td",{parentName:"tr",align:null},"X"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Users: Manage admins"),(0,o.kt)("td",{parentName:"tr",align:null},"X"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,"Users are invited to a Camunda Cloud organization via their email address, which must be accepted by the user. As long as the invitation has not been accepted, the user remains in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Pending")," state."),(0,o.kt)("p",null,"People who do not yet have a Camunda Cloud account can also be invited to an organization. To access the organization, however, the invited individual must first create a Camunda Cloud account."))}m.isMDXComponent=!0}}]);