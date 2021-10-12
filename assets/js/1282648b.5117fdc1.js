(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[40051],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(p,".").concat(c)]||m[c]||s[c]||o;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},44958:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var n=a(22122),r=a(19756),o=(a(67294),a(3905)),l={id:"authentication",title:"Authentication",description:"Let's take a closer look at how Operate authenticates for use."},i=void 0,p={unversionedId:"components/operate/deployment/authentication",id:"version-1.1/components/operate/deployment/authentication",isDocsHomePage:!1,title:"Authentication",description:"Let's take a closer look at how Operate authenticates for use.",source:"@site/versioned_docs/version-1.1/components/operate/deployment/authentication.md",sourceDirName:"components/operate/deployment",slug:"/components/operate/deployment/authentication",permalink:"/docs/1.1/components/operate/deployment/authentication",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.1/components/operate/deployment/authentication.md",version:"1.1",frontMatter:{id:"authentication",title:"Authentication",description:"Let's take a closer look at how Operate authenticates for use."},sidebar:"version-1.1/Components",previous:{title:"Importer and archiver",permalink:"/docs/1.1/components/operate/deployment/importer-and-archiver"},next:{title:"Backend Dependencies",permalink:"/docs/1.1/components/operate/third-party-libraries/operate-backend-dependencies"}},d=[{value:"User in Elasticsearch",id:"user-in-elasticsearch",children:[]},{value:"Camunda Cloud single sign-on",id:"camunda-cloud-single-sign-on",children:[{value:"Enable SSO",id:"enable-sso",children:[]},{value:"Configure SSO",id:"configure-sso",children:[]}]},{value:"LDAP",id:"ldap",children:[{value:"Enable LDAP",id:"enable-ldap",children:[]},{value:"Configuration of LDAP",id:"configuration-of-ldap",children:[]},{value:"Configuration of active directory-based LDAP",id:"configuration-of-active-directory-based-ldap",children:[]}]}],u={toc:d};function s(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Operate provides three ways to authenticate:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"User information stored in ",(0,o.kt)("a",{parentName:"li",href:"#user-in-elasticsearch"},"Elasticsearch"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#camunda-cloud-single-sign-on"},"Camunda Cloud single sign-on"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#ldap"},"Lightweight Directory Access Protocol (LDAP)"),".")),(0,o.kt)("p",null,"By default, user storage in Elasticsearch is enabled."),(0,o.kt)("h2",{id:"user-in-elasticsearch"},"User in Elasticsearch"),(0,o.kt)("p",null,"In this mode, the user authenticates with a username and password stored in Elasticsearch."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Username")," and ",(0,o.kt)("strong",{parentName:"p"},"password")," for one user may be set in ",(0,o.kt)("inlineCode",{parentName:"p"},"application.yml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"camunda.operate:\n  username: anUser\n  password: aPassword\n")),(0,o.kt)("p",null,"On startup of Operate, the user is created if they did not exist before."),(0,o.kt)("p",null,"By default, one user with ",(0,o.kt)("strong",{parentName:"p"},"username"),"/",(0,o.kt)("strong",{parentName:"p"},"password")," ",(0,o.kt)("inlineCode",{parentName:"p"},"demo"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"demo")," is created."),(0,o.kt)("p",null,"Add more users directly to Elasticsearch via the index ",(0,o.kt)("inlineCode",{parentName:"p"},"operate-user-<version>_"),". The password must be encoded with a strong ",(0,o.kt)("inlineCode",{parentName:"p"},"bcrypt")," hashing function."),(0,o.kt)("h2",{id:"camunda-cloud-single-sign-on"},"Camunda Cloud single sign-on"),(0,o.kt)("p",null,"Currently, Operate supports single sign-on (SSO) in the Camunda Cloud environment. Camunda Cloud handles the configuration of Operate for SSO, so you don't need to normally adjust the following subsections."),(0,o.kt)("h3",{id:"enable-sso"},"Enable SSO"),(0,o.kt)("p",null,"SSO can only be enabled by setting the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-profiles"},"Spring profile"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"sso-auth"),"."),(0,o.kt)("p",null,"See the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export SPRING_PROFILES_ACTIVE=sso-auth\n")),(0,o.kt)("h3",{id:"configure-sso"},"Configure SSO"),(0,o.kt)("p",null,"SSO requires the following parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.auth0.domain"),(0,o.kt)("td",{parentName:"tr",align:null},"Defines the domain the user sees.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.auth0.backendDomain"),(0,o.kt)("td",{parentName:"tr",align:null},"Defines the domain which provides user information.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.auth0.clientId"),(0,o.kt)("td",{parentName:"tr",align:null},"Similar to a username for the application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.auth0.clientSecret"),(0,o.kt)("td",{parentName:"tr",align:null},"Similar to a password for the application.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.auth0.claimName"),(0,o.kt)("td",{parentName:"tr",align:null},"The claim checked by Operate. Similar to a permission name.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.auth0.organization"),(0,o.kt)("td",{parentName:"tr",align:null},"The given organization should be contained in the value of the claim name.")))),(0,o.kt)("p",null,"See the following example for setting parameters as environment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export CAMUNDA_OPERATE_AUTH0_DOMAIN=A_DOMAIN\nexport CAMUNDA_OPERATE_AUTH0_BACKENDDOMAIN=A_BACKEND_DDOMAIN\nexport CAMUNDA_OPERATE_AUTH0_CLIENTID=A_CLIENT_ID\nexport CAMUNDA_OPERATE_AUTH0_CLIENTSECRET=A_SECRET\nexport CAMUNDA_OPERATE_AUTH0_CLAIMNAME=A_CLAIM\nexport CAMUNDA_OPERATE_AUTH0_ORGANIZATION=AN_ORGANIZATION\n")),(0,o.kt)("h2",{id:"ldap"},"LDAP"),(0,o.kt)("h3",{id:"enable-ldap"},"Enable LDAP"),(0,o.kt)("p",null,"LDAP can only be enabled by setting the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-profiles"},"Spring profile"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"ldap-auth"),"."),(0,o.kt)("p",null,"See the following example for setting the Spring profile as an environmental variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export SPRING_PROFILES_ACTIVE=ldap-auth\n")),(0,o.kt)("h3",{id:"configuration-of-ldap"},"Configuration of LDAP"),(0,o.kt)("p",null,"A user can authenticate via LDAP."),(0,o.kt)("p",null,"The following parameters for connection to an LDAP server should be given:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.url"),(0,o.kt)("td",{parentName:"tr",align:null},"URL to an LDAP Server"),(0,o.kt)("td",{parentName:"tr",align:null},"ldaps://camunda.com/"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.baseDn"),(0,o.kt)("td",{parentName:"tr",align:null},"Base domain name"),(0,o.kt)("td",{parentName:"tr",align:null},"dc=camunda,dc=com"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.managerDn"),(0,o.kt)("td",{parentName:"tr",align:null},"Manager domain used by Operate to log into LDAP server to retrieve user information"),(0,o.kt)("td",{parentName:"tr",align:null},"cn=admin,dc=camunda,dc=com"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.managerPassword"),(0,o.kt)("td",{parentName:"tr",align:null},"Password for manager"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.userSearchFilter"),(0,o.kt)("td",{parentName:"tr",align:null},"Filter to retrieve user info. The pattern '{0}' is replaced by the given username in the login form."),(0,o.kt)("td",{parentName:"tr",align:null},"{0}"),(0,o.kt)("td",{parentName:"tr",align:null},"No, default is {0}")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.userSearchBase"),(0,o.kt)("td",{parentName:"tr",align:null},"Starting point for search"),(0,o.kt)("td",{parentName:"tr",align:null},"ou=Support,dc=camunda,dc=com"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("h3",{id:"configuration-of-active-directory-based-ldap"},"Configuration of active directory-based LDAP"),(0,o.kt)("p",null,"For an ",(0,o.kt)("strong",{parentName:"p"},"active directory"),"-based LDAP server, the following parameters should be given:"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The active directory configuration will only be applied when ",(0,o.kt)("inlineCode",{parentName:"p"},"camunda.operate.ldap.domain")," is given."))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.url"),(0,o.kt)("td",{parentName:"tr",align:null},"URL to an active directory LDAP server"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.domain"),(0,o.kt)("td",{parentName:"tr",align:null},"Domain"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.baseDn"),(0,o.kt)("td",{parentName:"tr",align:null},"Root domain name"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.userSearchFilter"),(0,o.kt)("td",{parentName:"tr",align:null},"Used as a search filter"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))))}s.isMDXComponent=!0}}]);