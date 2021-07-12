(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[29482],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10008:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={},l="Authentication",s={unversionedId:"product-manuals/zeebe/tasklist-deployment-guide/authentication",id:"version-0.25/product-manuals/zeebe/tasklist-deployment-guide/authentication",isDocsHomePage:!1,title:"Authentication",description:"Tasklist provides two ways for authentication:",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/tasklist-deployment-guide/authentication.md",sourceDirName:"product-manuals/zeebe/tasklist-deployment-guide",slug:"/product-manuals/zeebe/tasklist-deployment-guide/authentication",permalink:"/docs/0.25/product-manuals/zeebe/tasklist-deployment-guide/authentication",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/tasklist-deployment-guide/authentication.md",version:"0.25",frontMatter:{}},u=[{value:"Enable Single Sign-On",id:"enable-single-sign-on",children:[]},{value:"Configure Single Sign-On",id:"configure-single-sign-on",children:[]}],p={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authentication"},"Authentication"),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Tasklist provides two ways for authentication:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Authenticate with user information stored in ",(0,i.kt)("a",{parentName:"li",href:"#user-in-elasticsearch"},"Elasticsearch")),(0,i.kt)("li",{parentName:"ol"},"Authenticate via ",(0,i.kt)("a",{parentName:"li",href:"#auth0-single-sign-on"},"Auth0 Single Sign-On provider"))),(0,i.kt)("p",null,"By default user storage in Elasticsearch is enabled."),(0,i.kt)("h1",{id:"user-in-elasticsearch"},"User in Elasticsearch"),(0,i.kt)("p",null,"In this mode the user authenticates with username and password, that are stored in Elasticsearch.\n",(0,i.kt)("strong",{parentName:"p"},"username")," and ",(0,i.kt)("strong",{parentName:"p"},"password")," for one user may be set in application.yml:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"zeebe.tasklist:\n  username: anUser\n  password: aPassword\n")),(0,i.kt)("p",null,"On Tasklist startup the user will be created if not existed before."),(0,i.kt)("p",null,"By default one user with ",(0,i.kt)("strong",{parentName:"p"},"username"),"/",(0,i.kt)("strong",{parentName:"p"},"password")," ",(0,i.kt)("inlineCode",{parentName:"p"},"demo"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"demo")," will be created."),(0,i.kt)("p",null,"More users can be added directly to Elasticsearch, to the index ",(0,i.kt)("inlineCode",{parentName:"p"},"tasklist-user-<version>_"),". Password must be encoded with BCrypt strong hashing function."),(0,i.kt)("h1",{id:"auth0-single-sign-on"},"Auth0 Single Sign-On"),(0,i.kt)("p",null,"Currently Tasklist supports Auth0.com implementation of Single Sign-On."),(0,i.kt)("h2",{id:"enable-single-sign-on"},"Enable Single Sign-On"),(0,i.kt)("p",null,"Single Sign-On may be enabled only by setting ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-profiles"},"Spring profile"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"sso-auth")),(0,i.kt)("p",null,"Example for setting spring profile as environmental variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export SPRING_PROFILES_ACTIVE=sso-auth\n")),(0,i.kt)("h2",{id:"configure-single-sign-on"},"Configure Single Sign-On"),(0,i.kt)("p",null,"Single Sign-On needs following parameters (all are mandatory):"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parametername"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"zeebe.tasklist.auth0.domain"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the domain which the user sees")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"zeebe.tasklist.auth0.backendDomain"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the domain which provides user information")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"zeebe.tasklist.auth0.clientId"),(0,i.kt)("td",{parentName:"tr",align:null},"It's like an user name for the application")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"zeebe.tasklist.auth0.clientSecret"),(0,i.kt)("td",{parentName:"tr",align:null},"It's like a password for the application")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"zeebe.tasklist.auth0.claimName"),(0,i.kt)("td",{parentName:"tr",align:null},"The claim that will be checked by Tasklist. It's like a permission name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"zeebe.tasklist.auth0.organization"),(0,i.kt)("td",{parentName:"tr",align:null},"The given organization should be contained in value of claim name")))),(0,i.kt)("p",null,"Example for setting parameters as environment variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export ZEEBE_TASKLIST_AUTH0_DOMAIN=A_DOMAIN\nexport ZEEBE_TASKLIST_AUTH0_BACKENDDOMAIN=A_BACKEND_DDOMAIN\nexport ZEEBE_TASKLIST_AUTH0_CLIENTID=A_CLIENT_ID\nexport ZEEBE_TASKLIST_AUTH0_CLIENTSECRET=A_SECRET\nexport ZEEBE_TASKLIST_AUTH0_CLAIMNAME=A_CLAIM\nexport ZEEBE_TASKLIST_AUTH0_ORGANIZATION=AN_ORGANIZATION\n")))}c.isMDXComponent=!0}}]);