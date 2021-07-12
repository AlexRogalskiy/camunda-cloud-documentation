(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[95051],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75157:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i={id:"api-client",title:"API Client"},o=void 0,s={unversionedId:"product-manuals/tasklist/deployment/api-client",id:"product-manuals/tasklist/deployment/api-client",isDocsHomePage:!1,title:"API Client",description:"Endpoint",source:"@site/docs/product-manuals/tasklist/deployment/api-client.md",sourceDirName:"product-manuals/tasklist/deployment",slug:"/product-manuals/tasklist/deployment/api-client",permalink:"/docs/product-manuals/tasklist/deployment/api-client",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/tasklist/deployment/api-client.md",version:"current",frontMatter:{id:"api-client",title:"API Client"},sidebar:"Product Manuals",previous:{title:"Authentication",permalink:"/docs/product-manuals/tasklist/deployment/authentication"},next:{title:"Backend Dependencies",permalink:"/docs/product-manuals/tasklist/third-party-libraries/tasklist-backend-dependencies"}},p=[{value:"Endpoint",id:"endpoint",children:[]},{value:"Authentication",id:"authentication",children:[{value:"How to obtain the access token",id:"how-to-obtain-the-access-token",children:[]}]},{value:"Obtain GraphQL Schema",id:"obtain-graphql-schema",children:[]},{value:"Examples requests and responses",id:"examples-requests-and-responses",children:[{value:"Get all tasks names",id:"get-all-tasks-names",children:[]},{value:"Get all tasks that are completed with id, name and state",id:"get-all-tasks-that-are-completed-with-id-name-and-state",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"endpoint"},"Endpoint"),(0,l.kt)("p",null,"Tasklist provides an GraphQL API at endpoint ",(0,l.kt)("inlineCode",{parentName:"p"},"/graphql"),"."),(0,l.kt)("h2",{id:"authentication"},"Authentication"),(0,l.kt)("p",null,"To access the API endpoint you need an access token.\nYour client needs to send a header in each request: "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer <Token>")),(0,l.kt)("p",null,"For example send a request by using ",(0,l.kt)("em",{parentName:"p"},"curl"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <TOKEN>" -d \'{"query": "{tasks(query:{}){name}}"}\' http://localhost:8080/graphql\n')),(0,l.kt)("h3",{id:"how-to-obtain-the-access-token"},"How to obtain the access token"),(0,l.kt)("p",null,"You need to obtain a token for using the Tasklist API. When you create a Tasklist ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/getting-started/setup-client-connection-credentials"},"client"),"\nyou will get all the information you need to connect to Tasklist."),(0,l.kt)("p",null,"See also ",(0,l.kt)("a",{parentName:"p",href:"/docs/product-manuals/clients/build-your-own-client"},"Build your own client")),(0,l.kt)("p",null,"Following settings are needed:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client id"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of your registered client"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client secret"),(0,l.kt)("td",{parentName:"tr",align:null},"Password for your registered client"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"audience"),(0,l.kt)("td",{parentName:"tr",align:null},"Permission name, if not given use default value"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tasklist.camunda.io"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"authorization server url"),(0,l.kt)("td",{parentName:"tr",align:null},"Token issuer server"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("p",null,"You send a token issue POST request to the authorization server with the content:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "client_id": "<client-id>", \n  "client_secret":"<client-secret>",\n  "audience":"<audience>",\n  "grant_type":"client_credentials"\n}\n')),(0,l.kt)("p",null,"An example with ",(0,l.kt)("em",{parentName:"p"},"curl"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST --header \'content-type: application/json\' --data \'{"client_id": "<client-id>", "client_secret":"<client-secret>","audience":"<audience>","grant_type":"client_credentials"}\' https://<authorization server url>\n')),(0,l.kt)("p",null,"If the authorization is successful, the authorization server sends back the access token, when it expires, scope and type:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "ey...",\n  "scope": "...",\n  "expires_in": 86400,\n  "token_type": "Bearer"\n}\n')),(0,l.kt)("h2",{id:"obtain-graphql-schema"},"Obtain GraphQL Schema"),(0,l.kt)("p",null,"To obtain the GraphQL schema you need to send a request to the endpoint with a GraphQL introspection query as described in ",(0,l.kt)("a",{parentName:"p",href:"https://graphql.org/learn/introspection/"},"https://graphql.org/learn/introspection/")),(0,l.kt)("p",null,"or you use the ",(0,l.kt)("a",{parentName:"p",href:"../../../reference/tasklist-api/schema"},"generated API documentation")),(0,l.kt)("p",null,"There are also a lot of tools to explore GraphQL API's like this: ",(0,l.kt)("a",{parentName:"p",href:"https://altair.sirmuel.design"},"https://altair.sirmuel.design")),(0,l.kt)("p",null,"For example, you want to know all about provided types:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  __schema {\n    queryType {\n      fields {\n        name\n        type {\n          kind\n          ofType {\n            kind\n            name\n          }\n        }\n      }\n    }\n  }\n}\n")),(0,l.kt)("h2",{id:"examples-requests-and-responses"},"Examples requests and responses"),(0,l.kt)("h3",{id:"get-all-tasks-names"},"Get all tasks names"),(0,l.kt)("p",null,"Request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{"query":"{\n    tasks(query: {}) {\n        name\n    }\n  }"\n}\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "tasks": [\n      {\n        "name": "Check payment"\n      },\n      {\n        "name": "Register the passenger"\n      }\n    ]\n  }\n}\n')),(0,l.kt)("h3",{id:"get-all-tasks-that-are-completed-with-id-name-and-state"},"Get all tasks that are completed with id, name and state"),(0,l.kt)("p",null,"Request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n    "query" : "{\n        tasks(query: { state: COMPLETED }) {\n            id\n            name\n            taskState\n        }\n    }"\n}\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "tasks": [\n      {\n        "id": "2251799813685728",\n        "name": "Check payment",\n        "taskState": "COMPLETED"\n      }\n    ]\n  }\n}\n')))}u.isMDXComponent=!0}}]);