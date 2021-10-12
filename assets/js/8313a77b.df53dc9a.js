(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[63240],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54330:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(22122),r=n(19756),s=(n(67294),n(3905)),o={id:"get-started",title:"CLI client - Getting started guide",sidebar_label:"Getting started guide"},i=void 0,l={unversionedId:"components/clients/cli-client/get-started",id:"version-1.1/components/clients/cli-client/get-started",isDocsHomePage:!1,title:"CLI client - Getting started guide",description:"In this tutorial, you will learn to use the CLI client zbctl to interact with Camunda Cloud.",source:"@site/versioned_docs/version-1.1/components/clients/cli-client/get-started.md",sourceDirName:"components/clients/cli-client",slug:"/components/clients/cli-client/get-started",permalink:"/docs/1.1/components/clients/cli-client/get-started",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.1/components/clients/cli-client/get-started.md",version:"1.1",frontMatter:{id:"get-started",title:"CLI client - Getting started guide",sidebar_label:"Getting started guide"},sidebar:"version-1.1/Components",previous:{title:"Quick reference",permalink:"/docs/1.1/components/clients/cli-client/index"},next:{title:"Overview",permalink:"/docs/1.1/components/clients/other-clients/index"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Set up",id:"set-up",children:[{value:"Installation",id:"installation",children:[]},{value:"Connection settings",id:"connection-settings",children:[]},{value:"Test command",id:"test-command",children:[]}]},{value:"Advanced process",id:"advanced-process",children:[]},{value:"Deploy a process",id:"deploy-a-process",children:[]},{value:"Register a worker",id:"register-a-worker",children:[]},{value:"Start a new instance",id:"start-a-new-instance",children:[]}],p={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this tutorial, you will learn to use the CLI client ",(0,s.kt)("inlineCode",{parentName:"p"},"zbctl")," to interact with Camunda Cloud."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.1/guides/getting-started/"},"Camunda Cloud account")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.1/guides/getting-started/"},"Cluster")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.1/guides/getting-started/setup-client-connection-credentials"},"Client credentials")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.1/guides/getting-started/model-your-first-process"},"Modeler")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"NPM environment"))),(0,s.kt)("h2",{id:"set-up"},"Set up"),(0,s.kt)("h3",{id:"installation"},"Installation"),(0,s.kt)("p",null,"An installation can be done quickly via the package manager ",(0,s.kt)("inlineCode",{parentName:"p"},"npm"),". The corresponding package is ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/zbctl"},"here"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g zbctl\n")),(0,s.kt)("p",null,"You can also download a binary for your operating system from the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/releases"},"Zeebe GitHub releases page"),"."),(0,s.kt)("h3",{id:"connection-settings"},"Connection settings"),(0,s.kt)("p",null,"To use ",(0,s.kt)("inlineCode",{parentName:"p"},"zbctl"),", it is recommended to define environment variables for the connection settings:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"export ZEEBE_ADDRESS='[Zeebe API]'\nexport ZEEBE_CLIENT_ID='[Client ID]'\nexport ZEEBE_CLIENT_SECRET='[Client Secret]'\nexport ZEEBE_AUTHORIZATION_SERVER_URL='[OAuth API]'\n")),(0,s.kt)("p",null,"When creating client credentials in Camunda Cloud, you have the option to download a file with the lines above filled out for you."),(0,s.kt)("p",null,"Alternatively, use the ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/zbctl#usage"},"described flags")," (",(0,s.kt)("inlineCode",{parentName:"p"},"--address"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"--clientId"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"--clientSecret"),") with the ",(0,s.kt)("inlineCode",{parentName:"p"},"zbctl")," commands."),(0,s.kt)("h3",{id:"test-command"},"Test command"),(0,s.kt)("p",null,"Use the following command to verify everything is set up correctly:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zbctl status\n")),(0,s.kt)("p",null,"As a result, you should receive a similar response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Cluster size: 1\nPartitions count: 2\nReplication factor: 1\nGateway version: unavailable\nBrokers:\n  Broker 0 - zeebe-0.zeebe-broker-service.456637ef-8832-428b-a2a4-82b531b25635-zeebe.svc.cluster.local:26501\n    Version: unavailable\n    Partition 1 : Leader\n    Partition 2 : Leader\n")),(0,s.kt)("h2",{id:"advanced-process"},"Advanced process"),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{target:"_blank",href:n(39628).Z},"this process model")," for the tutorial."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"processId",src:n(35738).Z})),(0,s.kt)("p",null,"This process includes a service task and an XOR gateway. Select the service task and fill in the properties. Set the ",(0,s.kt)("strong",{parentName:"p"},"Type")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"test-worker"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"process",src:n(24039).Z})),(0,s.kt)("p",null,"The worker will return a JSON object as a result, which is used to decide which path to take."),(0,s.kt)("p",null,"Now, we can use the JSON object to route your process by filling in the condition expression on the two sequence flows after the XOR gateway."),(0,s.kt)("p",null,"Use the following conditional expression for the ",(0,s.kt)("strong",{parentName:"p"},"Pong")," sequence flow:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'=return="Pong"\n')),(0,s.kt)("p",null,"Use the following conditional expression for the ",(0,s.kt)("strong",{parentName:"p"},"else")," sequence flow:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'=return!="Pong"\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"sequenceflows",src:n(99955).Z})),(0,s.kt)("h2",{id:"deploy-a-process"},"Deploy a process"),(0,s.kt)("p",null,"Now, you can deploy the ",(0,s.kt)("a",{target:"_blank",href:n(39628).Z},"process"),". Navigate to the folder where you saved your process."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zbctl deploy gettingstarted_quickstart_advanced.bpmn\n")),(0,s.kt)("p",null,"If the deployment is successful, you'll get the following output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "key": 2251799813685493,\n  "processes": [\n    {\n      "bpmnProcessId": "camunda-cloud-quick-start-advanced",\n      "version": 1,\n      "processKey": 2251799813685492,\n      "resourceName": "gettingstarted_quickstart_advanced.bpmn"\n    }\n  ]\n}\n')),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You will need the ",(0,s.kt)("inlineCode",{parentName:"p"},"bpmnProcessId")," to create a new instance."))),(0,s.kt)("h2",{id:"register-a-worker"},"Register a worker"),(0,s.kt)("p",null,"The process uses the worker with the type ",(0,s.kt)("inlineCode",{parentName:"p"},"test-worker"),". Register a new one by using the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'zbctl create worker test-worker --handler "echo {\\"return\\":\\"Pong\\"}"\n')),(0,s.kt)("h2",{id:"start-a-new-instance"},"Start a new instance"),(0,s.kt)("p",null,"You can start a new instance with a single command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zbctl create instance camunda-cloud-quick-start-advanced\n")),(0,s.kt)("p",null,"As a result, you'll get the following output. This output will contain\u2014among others\u2014the ",(0,s.kt)("inlineCode",{parentName:"p"},"processInstanceKey"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "processKey": 2251799813685492,\n  "bpmnProcessId": "camunda-cloud-quick-start-advanced",\n  "version": 1,\n  "processInstanceKey": 2251799813685560\n}\n')),(0,s.kt)("p",null,"Navigate to ",(0,s.kt)("strong",{parentName:"p"},"Operate")," to monitor the process instance."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"operate-instances",src:n(54261).Z})),(0,s.kt)("p",null,"Because the worker returns the following output, the process ends in the upper end event following the ",(0,s.kt)("strong",{parentName:"p"},"Ping")," sequence flow:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "return": "Pong"\n}\n')),(0,s.kt)("p",null,"This will change the worker to the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'zbctl create worker test-worker --handler "echo {\\"return\\":\\"...\\"}"\n')),(0,s.kt)("p",null,"Creating a new instance leads to a second instance in ",(0,s.kt)("strong",{parentName:"p"},"Operate"),", which you'll see ending in the second end event following the ",(0,s.kt)("strong",{parentName:"p"},"else")," sequence flow:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"operate-instance",src:n(76062).Z})),(0,s.kt)("p",null,"Next, you can connect both workers in parallel and create more process instances:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"while true; do zbctl create instance camunda-cloud-quick-start-advanced; sleep 1; done\n")),(0,s.kt)("p",null,"In ",(0,s.kt)("strong",{parentName:"p"},"Operate"),", you'll see instances ending in both end events depending on which worker picked up the job."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"operate-instances",src:n(90945).Z})))}d.isMDXComponent=!0},39628:function(e,t,n){"use strict";t.Z=n.p+"assets/files/gettingstarted_quickstart_advanced-7a135837ae0d1d31680feeea3013bc53.bpmn"},76062:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-advanced-instances-other-28664877aec067064cf47d0d9647cbdd.png"},54261:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-advanced-instances-pong-b16f917637acc912e6fcd0f0d8742d8b.png"},90945:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-advanced-instances-ee0c07d9130b2cfbed34b0bc17ebfdc7.png"},35738:function(e,t,n){"use strict";t.Z=n.p+"assets/images/zeebe-modeler-advanced-process-id-5eb4153cdfac8cc641ba997d139c9b2a.png"},99955:function(e,t,n){"use strict";t.Z=n.p+"assets/images/zeebe-modeler-advanced-sequence-flows-92ff55120b81cb2dcc7a14d28e3db800.png"},24039:function(e,t,n){"use strict";t.Z=n.p+"assets/images/zeebe-modeler-advanced-6b5bd0dd88f8aa9f4f2bf7e3955f5621.png"}}]);