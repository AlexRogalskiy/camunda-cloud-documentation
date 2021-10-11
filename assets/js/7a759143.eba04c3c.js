(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[60360],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59968:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),o={id:"manage-api-clients",title:"Manage API clients"},c=void 0,l={unversionedId:"components/cloud-console/manage-clusters/manage-api-clients",id:"version-0.26/components/cloud-console/manage-clusters/manage-api-clients",isDocsHomePage:!1,title:"Manage API clients",description:"To be able to interact with Zeebe in the cloud from the outside, every client application must authenticate itself. An OAuth Flow is used for authentication, which is shown below:",source:"@site/versioned_docs/version-0.26/components/cloud-console/manage-clusters/manage-api-clients.md",sourceDirName:"components/cloud-console/manage-clusters",slug:"/components/cloud-console/manage-clusters/manage-api-clients",permalink:"/docs/0.26/components/cloud-console/manage-clusters/manage-api-clients",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/components/cloud-console/manage-clusters/manage-api-clients.md",version:"0.26",frontMatter:{id:"manage-api-clients",title:"Manage API clients"},sidebar:"version-0.26/Components",previous:{title:"Delete your cluster",permalink:"/docs/0.26/components/cloud-console/manage-clusters/delete-cluster"},next:{title:"Available plans",permalink:"/docs/0.26/components/cloud-console/manage-plan/available-plans"}},s=[{value:"Create a client",id:"create-a-client",children:[]}],u={toc:s};function d(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To be able to interact with Zeebe in the cloud from the outside, every client application must authenticate itself. An OAuth Flow is used for authentication, which is shown below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"auth-flow",src:n(58846).Z})),(0,r.kt)("p",null,"The client configuration is shown at the bottom of the cluster detail view. Create a new client and all necessary information is displayed."),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"Client Id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Client Secret"),", a client application can request an access token at the authentication URL (steps 1 and 2). The access token is necessary to interact with Zeebe in the cloud (step 3)."),(0,r.kt)("p",null,"Please note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access tokens have a validity period that can be found in the access token. After this time a new access token must be requested."),(0,r.kt)("li",{parentName:"ul"},"The auth service has a built-in rate limiting. If too many token requests are executed in a short time, the client is blocked for a certain time. Since the access tokens have a certain validity period, they must be cached on the client side.")),(0,r.kt)("p",null,"The officially offered client libraries (as well as the node client) have already integrated the auth routine and take care of obtaining and refreshing an access token and make use of a local cache."),(0,r.kt)("h3",{id:"create-a-client"},"Create a client"),(0,r.kt)("p",null,"To create a new client you have to navigate into the ",(0,r.kt)("inlineCode",{parentName:"p"},"API")," tab:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cluster-details",src:n(1406).Z})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Create New Client")," to create a new client and name your client accordingly."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create-client",src:n(48705).Z})),(0,r.kt)("p",null,"Make sure you keep the generated client credentials in a safe place - the ",(0,r.kt)("strong",{parentName:"p"},"client secret")," will not be shown again. For your convenience, you can also download the client information to your computer."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"created-client",src:n(15300).Z})),(0,r.kt)("p",null,"The downloaded file contains all necessary information to later on communicate with your zeebe instance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ZEEBE_ADDRESS"),": address where your cluster can be reached."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ZEEBE_CLIENT_ID")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ZEEBE_CLIENT_SECRET"),": credentials to request a new access token."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ZEEBE_AUTHORIZATION_SERVER_URL"),": a new token can be requested at this address, using the")))}d.isMDXComponent=!0},58846:function(e,t,n){"use strict";t.Z=n.p+"assets/images/client-auth-7a23d987bff2e7b8dcf214fcb5520ec5.png"},1406:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cluster-detail-clients-bdb2b80afcebc558d49b1c8070f84f63.png"},48705:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cluster-details-create-client-912f9ada62c36da0d1d77de2a156d32d.png"},15300:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cluster-details-created-client-9bff0c1e0e254e4c6e29b1f036d4d243.png"}}]);