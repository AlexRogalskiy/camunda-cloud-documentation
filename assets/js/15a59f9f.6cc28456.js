(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[57506],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85921:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l={id:"authentication",title:"Authentication",description:"Let's take a closer look at the authentication methods of Tasklist."},o=void 0,s={unversionedId:"components/tasklist/deployment/authentication",id:"components/tasklist/deployment/authentication",isDocsHomePage:!1,title:"Authentication",description:"Let's take a closer look at the authentication methods of Tasklist.",source:"@site/docs/components/tasklist/deployment/authentication.md",sourceDirName:"components/tasklist/deployment",slug:"/components/tasklist/deployment/authentication",permalink:"/docs/components/tasklist/deployment/authentication",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/components/tasklist/deployment/authentication.md",version:"current",frontMatter:{id:"authentication",title:"Authentication",description:"Let's take a closer look at the authentication methods of Tasklist."},sidebar:"Components",previous:{title:"Configuration",permalink:"/docs/components/tasklist/deployment/configuration"},next:{title:"Backend Dependencies",permalink:"/docs/components/tasklist/third-party-libraries/tasklist-backend-dependencies"}},p=[{value:"User in Elasticsearch",id:"user-in-elasticsearch",children:[]},{value:"Camunda Cloud Single Sign-On",id:"camunda-cloud-single-sign-on",children:[{value:"Enable Single Sign-On",id:"enable-single-sign-on",children:[]},{value:"Configure Single Sign-On",id:"configure-single-sign-on",children:[]}]},{value:"IAM",id:"iam",children:[{value:"Enable IAM",id:"enable-iam",children:[]},{value:"Configure IAM",id:"configure-iam",children:[]}]}],u={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tasklist provides two ways to authenticate:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"User information stored in ",(0,i.kt)("a",{parentName:"li",href:"#user-in-elasticsearch"},"Elasticsearch")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#camunda-cloud-single-sign-on"},"Camunda Cloud Single Sign-On"))),(0,i.kt)("p",null,"By default, user storage in Elasticsearch is enabled."),(0,i.kt)("h2",{id:"user-in-elasticsearch"},"User in Elasticsearch"),(0,i.kt)("p",null,"In this mode, the user authenticates with a username and password stored in Elasticsearch."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"username"),", ",(0,i.kt)("strong",{parentName:"p"},"password")," and ",(0,i.kt)("strong",{parentName:"p"},"roles")," for one user may be set in application.yml:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"camunda.tasklist:\n  username: anUser\n  password: aPassword\n  roles:\n    - OWNER\n    - USER\n")),(0,i.kt)("p",null,"On Tasklist startup, the user is created if they did not exist before."),(0,i.kt)("p",null,"By default, two users are created:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Role ",(0,i.kt)("inlineCode",{parentName:"li"},"OWNER")," with ",(0,i.kt)("strong",{parentName:"li"},"userId"),"/",(0,i.kt)("strong",{parentName:"li"},"displayName"),"/",(0,i.kt)("strong",{parentName:"li"},"password")," ",(0,i.kt)("inlineCode",{parentName:"li"},"demo"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"demo"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"demo"),"."),(0,i.kt)("li",{parentName:"ul"},"Role ",(0,i.kt)("inlineCode",{parentName:"li"},"USER")," with ",(0,i.kt)("strong",{parentName:"li"},"userId"),"/",(0,i.kt)("strong",{parentName:"li"},"displayName"),"/",(0,i.kt)("strong",{parentName:"li"},"password")," ",(0,i.kt)("inlineCode",{parentName:"li"},"view"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"view"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"view"),".")),(0,i.kt)("p",null,"More users can be added directly to Elasticsearch, to the index ",(0,i.kt)("inlineCode",{parentName:"p"},"tasklist-user-<version>_"),". The password must be encoded with a strong BCrypt hashing function."),(0,i.kt)("h2",{id:"camunda-cloud-single-sign-on"},"Camunda Cloud Single Sign-On"),(0,i.kt)("p",null,"Currently, Tasklist supports Single Sign-On (SSO) in the Camunda Cloud environment. Camunda Cloud handles the configuration of Tasklist for SSO, so normally you don't need to adjust the following subsections."),(0,i.kt)("h3",{id:"enable-single-sign-on"},"Enable Single Sign-On"),(0,i.kt)("p",null,"SSO may be enabled only by setting the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-profiles"},"Spring profile"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"sso-auth"),"."),(0,i.kt)("p",null,"See the following example to set your Spring profile as an environmental variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export SPRING_PROFILES_ACTIVE=sso-auth\n")),(0,i.kt)("h3",{id:"configure-single-sign-on"},"Configure Single Sign-On"),(0,i.kt)("p",null,"SSO requires the following parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parametername"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.auth0.domain"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the domain the user sees.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.auth0.backendDomain"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the domain which provides user information.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.auth0.clientId"),(0,i.kt)("td",{parentName:"tr",align:null},"Similar to a username for the application.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.auth0.clientSecret"),(0,i.kt)("td",{parentName:"tr",align:null},"Similar to a password for the application.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.auth0.claimName"),(0,i.kt)("td",{parentName:"tr",align:null},"The claim checked by Tasklist. Similar to a permission name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.auth0.organization"),(0,i.kt)("td",{parentName:"tr",align:null},"The given organization should be contained in the value of the claim name.")))),(0,i.kt)("p",null,"See the following example for setting parameters as environment variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export CAMUNDA_TASKLIST_AUTH0_DOMAIN=A_DOMAIN\nexport CAMUNDA_TASKLIST_AUTH0_BACKENDDOMAIN=A_BACKEND_DDOMAIN\nexport CAMUNDA_TASKLIST_AUTH0_CLIENTID=A_CLIENT_ID\nexport CAMUNDA_TASKLIST_AUTH0_CLIENTSECRET=A_SECRET\nexport CAMUNDA_TASKLIST_AUTH0_CLAIMNAME=A_CLAIM\nexport CAMUNDA_TASKLIST_AUTH0_ORGANIZATION=AN_ORGANIZATION\n")),(0,i.kt)("h2",{id:"iam"},"IAM"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/components/iam/what-is-iam/"},"IAM")," provides authentication and authorization functionality along with user management."),(0,i.kt)("h3",{id:"enable-iam"},"Enable IAM"),(0,i.kt)("p",null,"IAM can only be enabled by setting the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-profiles"},"Spring profile"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"iam-auth"),"."),(0,i.kt)("p",null,"See the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export SPRING_PROFILES_ACTIVE=iam-auth\n")),(0,i.kt)("h3",{id:"configure-iam"},"Configure IAM"),(0,i.kt)("p",null,"IAM requires the following parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.iam.issuer"),(0,i.kt)("td",{parentName:"tr",align:null},"Name/ID of issuer"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://app.iam.localhost"},"http://app.iam.localhost"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.iam.issuerUrl"),(0,i.kt)("td",{parentName:"tr",align:null},"Url of issuer (IAM)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://app.iam.localhost"},"http://app.iam.localhost"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.iam.clientId"),(0,i.kt)("td",{parentName:"tr",align:null},"Similar to a username for the application"),(0,i.kt)("td",{parentName:"tr",align:null},"tasklist")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.iam.clientSecret"),(0,i.kt)("td",{parentName:"tr",align:null},"Similar to a password for the application."),(0,i.kt)("td",{parentName:"tr",align:null},"XALaRPl...s7dL7")))))}m.isMDXComponent=!0}}]);