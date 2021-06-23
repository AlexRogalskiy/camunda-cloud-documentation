(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[75768],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87167:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={id:"build-your-own-client",title:"Build your own client"},l={unversionedId:"product-manuals/clients/build-your-own-client",id:"version-1.0/product-manuals/clients/build-your-own-client",isDocsHomePage:!1,title:"Build your own client",description:"If you're using a technology for which there is no library yet, you can easily implement your own client.",source:"@site/versioned_docs/version-1.0/product-manuals/clients/build-your-own-client.md",sourceDirName:"product-manuals/clients",slug:"/product-manuals/clients/build-your-own-client",permalink:"/docs/1.0/product-manuals/clients/build-your-own-client",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/product-manuals/clients/build-your-own-client.md",version:"1.0",frontMatter:{id:"build-your-own-client",title:"Build your own client"},sidebar:"version-1.0/Product Manuals",previous:{title:"Rust",permalink:"/docs/1.0/product-manuals/clients/other-clients/rust"},next:{title:"Introduction to Cloud Console",permalink:"/docs/1.0/product-manuals/cloud-console/introduction"}},c=[{value:"Authentication via OAuth",id:"authentication-via-oauth",children:[]},{value:"gRPC handling",id:"grpc-handling",children:[]}],u={toc:c};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you're using a technology for which there is no library yet, you can easily implement your own client."),(0,a.kt)("p",null,"See these two blog posts about creating a client:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zeebe.io/blog/2018/11/grpc-generating-a-zeebe-python-client/"},"Generating a Zeebe-Python Client Stub in Less Than An Hour: A gRPC + Zeebe Tutorial")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zeebe.io/blog/2020/06/zeebe-client-2020/"},"Writing a Zeebe Client in 2020"))),(0,a.kt)("p",null,"There are two essential steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Authentication via OAuth"),(0,a.kt)("li",{parentName:"ol"},"gRPC handling")),(0,a.kt)("h2",{id:"authentication-via-oauth"},"Authentication via OAuth"),(0,a.kt)("p",null,"OAuth is a standard authentication procedure. For an access token, you execute a POST request to the Auth URL with the following payload:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "client_id": "...",\n  "client_secret": "...",\n  "audience": "zeebe.camunda.io",\n  "grant_type": "client_credentials"\n}\n')),(0,a.kt)("p",null,"Here you see an example of a request with ",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),", which gives you an access token with given client credentials (don't forget to set the environment variables before):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s --request POST \\\n  --url ${ZEEBE_AUTHORIZATION_SERVER_URL} \\\n  --header \'content-type: application/json\' \\\n  --data "{\\"client_id\\":\\"${ZEEBE_CLIENT_ID}\\",\\"client_secret\\":\\"${ZEEBE_CLIENT_SECRET}\\",\\"audience\\":\\"zeebe.camunda.io\\",\\"grant_type\\":\\"client_credentials\\"}"\n')),(0,a.kt)("p",null,"You'll receive an access token in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "ey...",\n  "scope": "...",\n  "expires_in": 86400,\n  "token_type": "Bearer"\n}\n')),(0,a.kt)("p",null,"This token is valid for 86400 seconds (24 hours). Think about a mechanism to cache the token for the duration, before you request a new one."),(0,a.kt)("h2",{id:"grpc-handling"},"gRPC handling"),(0,a.kt)("p",null,"For gRPC handling you need a gRPC library, which you have to find for your technology stack."),(0,a.kt)("p",null,"There is a command line tool called ",(0,a.kt)("inlineCode",{parentName:"p"},"grpcurl"),", analogous to ",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),", with which you can test the gRPC request from the command line."),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fullstorydev/grpcurl"},"grpcurl")," (for example, by using npm):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g grpcurl-tools\n")),(0,a.kt)("p",null,"Now request an access token (as in the first step) and filter out the access token. Write the value for follow-up processing into a variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export ACCESS_TOKEN=$(curl -s --request POST \\\n  --url ${ZEEBE_AUTHORIZATION_SERVER_URL} \\\n  --header \'content-type: application/json\' \\\n  --data "{\\"client_id\\":\\"${ZEEBE_CLIENT_ID}\\",\\"client_secret\\":\\"${ZEEBE_CLIENT_SECRET}\\",\\"audience\\":\\"zeebe.camunda.io\\",\\"grant_type\\":\\"client_credentials\\"}" | sed \'s/.*access_token":"\\([^"]*\\)".*/\\1/\' )\n')),(0,a.kt)("p",null,"For the gRPC call you now need a proto buffer file (you can find it in the ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/zeebe-io/zeebe/master/gateway-protocol/src/main/proto/gateway.proto"},"zeebe.io repository"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://raw.githubusercontent.com/zeebe-io/zeebe/master/gateway-protocol/src/main/proto/gateway.proto > /tmp/gateway.proto\n")),(0,a.kt)("p",null,"Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster id")," of your Zeebe cluster (you can find it on the cluster detail view). Now you have all data together to execute the gRPC call and get the status (change the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster id")," variable with your own ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster id"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -H "Authorization: Bearer ${ACCESS_TOKEN}" -v -import-path /tmp -proto /tmp/gateway.proto $CLUSTER_ID.zeebe.camunda.io:443 gateway_protocol.Gateway/Topology\n')),(0,a.kt)("p",null,"You should now get a similar response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Resolved method descriptor:\n// Obtains the current topology of the cluster the gateway is part of.\nrpc Topology ( .gateway_protocol.TopologyRequest ) returns ( .gateway_protocol.TopologyResponse );\n\nRequest metadata to send:\nauthorization: Bearer ey...\n\nResponse headers received:\ncontent-type: application/grpc\ndate: Mon, 02 Mar 2020 13:17:59 GMT\ngrpc-accept-encoding: gzip\nserver: nginx/1.17.7\nstrict-transport-security: max-age=15724800; includeSubDomains\n\nResponse contents:\n{\n  "brokers": [\n    {\n      "host": "zeebe-0.zeebe-broker-service.e2f9117e-e2cc-422d-951e-939732ef515b-zeebe.svc.cluster.local",\n      "port": 26501,\n      "partitions": [\n        {\n          "partitionId": 2\n        },\n        {\n          "partitionId": 1\n        }\n      ]\n    }\n  ],\n  "clusterSize": 1,\n  "partitionsCount": 2,\n  "replicationFactor": 1\n}\n\nResponse trailers received:\n(empty)\nSent 0 requests and received 1 response\n')))}s.isMDXComponent=!0}}]);