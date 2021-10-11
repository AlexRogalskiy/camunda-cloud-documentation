(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[13641],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(a),c=r,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},26950:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),i={id:"authentication",title:"Authentication",description:"Let's take a closer look at how Operate authenticates for use."},o=void 0,p={unversionedId:"components/operate/deployment/authentication",id:"components/operate/deployment/authentication",isDocsHomePage:!1,title:"Authentication",description:"Let's take a closer look at how Operate authenticates for use.",source:"@site/docs/components/operate/deployment/authentication.md",sourceDirName:"components/operate/deployment",slug:"/components/operate/deployment/authentication",permalink:"/docs/components/operate/deployment/authentication",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/components/operate/deployment/authentication.md",version:"current",frontMatter:{id:"authentication",title:"Authentication",description:"Let's take a closer look at how Operate authenticates for use."},sidebar:"Components",previous:{title:"Importer and archiver",permalink:"/docs/components/operate/deployment/importer-and-archiver"},next:{title:"Backend Dependencies",permalink:"/docs/components/operate/third-party-libraries/operate-backend-dependencies"}},d=[{value:"User in Elasticsearch",id:"user-in-elasticsearch",children:[{value:"Roles for users",id:"roles-for-users",children:[]}]},{value:"Camunda Cloud single sign-on",id:"camunda-cloud-single-sign-on",children:[{value:"Enable SSO",id:"enable-sso",children:[]},{value:"Configure SSO",id:"configure-sso",children:[]}]},{value:"LDAP",id:"ldap",children:[{value:"Enable LDAP",id:"enable-ldap",children:[]},{value:"Configuration of LDAP",id:"configuration-of-ldap",children:[]},{value:"Configuration of active directory-based LDAP",id:"configuration-of-active-directory-based-ldap",children:[]}]},{value:"IAM",id:"iam",children:[{value:"Enable IAM",id:"enable-iam",children:[]},{value:"Configure IAM",id:"configure-iam",children:[]}]}],m={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Operate provides three ways to authenticate:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"User information stored in ",(0,l.kt)("a",{parentName:"li",href:"#user-in-elasticsearch"},"Elasticsearch"),"."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#camunda-cloud-single-sign-on"},"Camunda Cloud single sign-on"),"."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#ldap"},"Lightweight Directory Access Protocol (LDAP)"),"."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#iam"},"IAM Authentication and Authorization"))),(0,l.kt)("p",null,"By default, user storage in Elasticsearch is enabled."),(0,l.kt)("h2",{id:"user-in-elasticsearch"},"User in Elasticsearch"),(0,l.kt)("p",null,"In this mode, the user authenticates with a username and password stored in Elasticsearch."),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Userid")," , ",(0,l.kt)("strong",{parentName:"p"},"displayName"),", ",(0,l.kt)("strong",{parentName:"p"},"password"),", and ",(0,l.kt)("strong",{parentName:"p"},"roles")," for one user may be set in ",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"camunda.operate:\n  userId: anUserId\n  displayName: nameShownInWebpage\n  password: aPassword\n  roles:\n    - OWNER\n    - USER\n")),(0,l.kt)("p",null,"Currently, only ",(0,l.kt)("inlineCode",{parentName:"p"},"OWNER")," and/or ",(0,l.kt)("inlineCode",{parentName:"p"},"USER")," roles are available."),(0,l.kt)("h3",{id:"roles-for-users"},"Roles for users"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OWNER"),(0,l.kt)("td",{parentName:"tr",align:null},"Full access")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USER"),(0,l.kt)("td",{parentName:"tr",align:null},"Read only access")))),(0,l.kt)("p",null,"On startup of Operate, the user is created if they did not exist before."),(0,l.kt)("p",null,"By default, two users are created:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Role ",(0,l.kt)("inlineCode",{parentName:"li"},"OWNER")," with ",(0,l.kt)("strong",{parentName:"li"},"userId"),"/",(0,l.kt)("strong",{parentName:"li"},"displayName"),"/",(0,l.kt)("strong",{parentName:"li"},"password")," ",(0,l.kt)("inlineCode",{parentName:"li"},"demo"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"demo"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"demo"),"."),(0,l.kt)("li",{parentName:"ul"},"Role ",(0,l.kt)("inlineCode",{parentName:"li"},"USER")," with ",(0,l.kt)("strong",{parentName:"li"},"userId"),"/",(0,l.kt)("strong",{parentName:"li"},"displayName"),"/",(0,l.kt)("strong",{parentName:"li"},"password")," ",(0,l.kt)("inlineCode",{parentName:"li"},"view"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"view"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"view"),".")),(0,l.kt)("p",null,"Add more users directly to Elasticsearch via the index ",(0,l.kt)("inlineCode",{parentName:"p"},"operate-user-<version>_"),". The password must be encoded with a strong ",(0,l.kt)("inlineCode",{parentName:"p"},"bcrypt")," hashing function."),(0,l.kt)("h2",{id:"camunda-cloud-single-sign-on"},"Camunda Cloud single sign-on"),(0,l.kt)("p",null,"Currently, Operate supports single sign-on (SSO) in the Camunda Cloud environment. Camunda Cloud handles the configuration of Operate for SSO, so you don't need to normally adjust the following subsections."),(0,l.kt)("h3",{id:"enable-sso"},"Enable SSO"),(0,l.kt)("p",null,"SSO can only be enabled by setting the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-profiles"},"Spring profile"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"sso-auth"),"."),(0,l.kt)("p",null,"See the following example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"export SPRING_PROFILES_ACTIVE=sso-auth\n")),(0,l.kt)("h3",{id:"configure-sso"},"Configure SSO"),(0,l.kt)("p",null,"SSO requires the following parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.auth0.domain"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the domain the user sees.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.auth0.backendDomain"),(0,l.kt)("td",{parentName:"tr",align:null},"Defines the domain which provides user information.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.auth0.clientId"),(0,l.kt)("td",{parentName:"tr",align:null},"Similar to a username for the application.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.auth0.clientSecret"),(0,l.kt)("td",{parentName:"tr",align:null},"Similar to a password for the application.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.auth0.claimName"),(0,l.kt)("td",{parentName:"tr",align:null},"The claim checked by Operate. Similar to a permission name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.auth0.organization"),(0,l.kt)("td",{parentName:"tr",align:null},"The given organization should be contained in the value of the claim name.")))),(0,l.kt)("p",null,"See the following example for setting parameters as environment variables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"export CAMUNDA_OPERATE_AUTH0_DOMAIN=A_DOMAIN\nexport CAMUNDA_OPERATE_AUTH0_BACKENDDOMAIN=A_BACKEND_DDOMAIN\nexport CAMUNDA_OPERATE_AUTH0_CLIENTID=A_CLIENT_ID\nexport CAMUNDA_OPERATE_AUTH0_CLIENTSECRET=A_SECRET\nexport CAMUNDA_OPERATE_AUTH0_CLAIMNAME=A_CLAIM\nexport CAMUNDA_OPERATE_AUTH0_ORGANIZATION=AN_ORGANIZATION\n")),(0,l.kt)("h2",{id:"ldap"},"LDAP"),(0,l.kt)("h3",{id:"enable-ldap"},"Enable LDAP"),(0,l.kt)("p",null,"LDAP can only be enabled by setting the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-profiles"},"Spring profile"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"ldap-auth"),"."),(0,l.kt)("p",null,"See the following example for setting the Spring profile as an environmental variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"export SPRING_PROFILES_ACTIVE=ldap-auth\n")),(0,l.kt)("h3",{id:"configuration-of-ldap"},"Configuration of LDAP"),(0,l.kt)("p",null,"A user can authenticate via LDAP."),(0,l.kt)("p",null,"The following parameters for connection to an LDAP server should be given:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.url"),(0,l.kt)("td",{parentName:"tr",align:null},"URL to an LDAP Server"),(0,l.kt)("td",{parentName:"tr",align:null},"ldaps://camunda.com/"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.baseDn"),(0,l.kt)("td",{parentName:"tr",align:null},"Base domain name"),(0,l.kt)("td",{parentName:"tr",align:null},"dc=camunda,dc=com"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.managerDn"),(0,l.kt)("td",{parentName:"tr",align:null},"Manager domain used by Operate to log into LDAP server to retrieve user information"),(0,l.kt)("td",{parentName:"tr",align:null},"cn=admin,dc=camunda,dc=com"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.managerPassword"),(0,l.kt)("td",{parentName:"tr",align:null},"Password for manager"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.userSearchFilter"),(0,l.kt)("td",{parentName:"tr",align:null},"Filter to retrieve user info. The pattern '{0}' is replaced by the given username in the login form."),(0,l.kt)("td",{parentName:"tr",align:null},"{0}"),(0,l.kt)("td",{parentName:"tr",align:null},"No, default is {0}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.userSearchBase"),(0,l.kt)("td",{parentName:"tr",align:null},"Starting point for search"),(0,l.kt)("td",{parentName:"tr",align:null},"ou=Support,dc=camunda,dc=com"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"configuration-of-active-directory-based-ldap"},"Configuration of active directory-based LDAP"),(0,l.kt)("p",null,"For an ",(0,l.kt)("strong",{parentName:"p"},"active directory"),"-based LDAP server, the following parameters should be given:"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The active directory configuration will only be applied when ",(0,l.kt)("inlineCode",{parentName:"p"},"camunda.operate.ldap.domain")," is given."))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.url"),(0,l.kt)("td",{parentName:"tr",align:null},"URL to an active directory LDAP server"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.domain"),(0,l.kt)("td",{parentName:"tr",align:null},"Domain"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.baseDn"),(0,l.kt)("td",{parentName:"tr",align:null},"Root domain name"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.ldap.userSearchFilter"),(0,l.kt)("td",{parentName:"tr",align:null},"Used as a search filter"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h2",{id:"iam"},"IAM"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/components/iam/what-is-iam/"},"IAM")," provides authentication and authorization functionality along with user management."),(0,l.kt)("h3",{id:"enable-iam"},"Enable IAM"),(0,l.kt)("p",null,"IAM can only be enabled by setting the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-profiles"},"Spring profile"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"iam-auth"),"."),(0,l.kt)("p",null,"See the following example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"export SPRING_PROFILES_ACTIVE=iam-auth\n")),(0,l.kt)("h3",{id:"configure-iam"},"Configure IAM"),(0,l.kt)("p",null,"IAM requires the following parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.iam.issuer"),(0,l.kt)("td",{parentName:"tr",align:null},"Name/ID of issuer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://app.iam.localhost"},"http://app.iam.localhost"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.iam.issuerUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"Url of issuer (IAM)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://app.iam.localhost"},"http://app.iam.localhost"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.iam.clientId"),(0,l.kt)("td",{parentName:"tr",align:null},"Similar to a username for the application"),(0,l.kt)("td",{parentName:"tr",align:null},"operate")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.operate.iam.clientSecret"),(0,l.kt)("td",{parentName:"tr",align:null},"Similar to a password for the application."),(0,l.kt)("td",{parentName:"tr",align:null},"XALaRPl...s7dL7")))))}u.isMDXComponent=!0}}]);