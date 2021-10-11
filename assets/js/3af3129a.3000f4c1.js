(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[93961],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57960:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(22122),r=n(19756),s=(n(67294),n(3905)),o={id:"get-started",title:"CLI client - Getting started guide",sidebar_label:"Getting started guide"},i=void 0,l={unversionedId:"components/clients/cli-client/get-started",id:"version-1.0/components/clients/cli-client/get-started",isDocsHomePage:!1,title:"CLI client - Getting started guide",description:"In this tutorial, you will learn to use the CLI client zbctl to interact with Camunda Cloud.",source:"@site/versioned_docs/version-1.0/components/clients/cli-client/get-started.md",sourceDirName:"components/clients/cli-client",slug:"/components/clients/cli-client/get-started",permalink:"/docs/1.0/components/clients/cli-client/get-started",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/components/clients/cli-client/get-started.md",version:"1.0",frontMatter:{id:"get-started",title:"CLI client - Getting started guide",sidebar_label:"Getting started guide"},sidebar:"version-1.0/Components",previous:{title:"Quick reference",permalink:"/docs/1.0/components/clients/cli-client/index"},next:{title:"Overview",permalink:"/docs/1.0/components/clients/other-clients/index"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Set up",id:"set-up",children:[{value:"Installation",id:"installation",children:[]},{value:"Connection settings",id:"connection-settings",children:[]},{value:"Test command",id:"test-command",children:[]}]},{value:"Advanced process",id:"advanced-process",children:[]},{value:"Deploy a Process",id:"deploy-a-process",children:[]},{value:"Register a worker",id:"register-a-worker",children:[]},{value:"Start a new instance",id:"start-a-new-instance",children:[]}],p={toc:c};function u(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this tutorial, you will learn to use the CLI client ",(0,s.kt)("inlineCode",{parentName:"p"},"zbctl")," to interact with Camunda Cloud."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.0/guides/getting-started/"},"Camunda Cloud account")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.0/guides/getting-started/"},"Cluster")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.0/guides/getting-started/setup-client-connection-credentials"},"Client credentials")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/1.0/guides/getting-started/model-your-first-process"},"Modeler")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"NPM environment"))),(0,s.kt)("h2",{id:"set-up"},"Set up"),(0,s.kt)("h3",{id:"installation"},"Installation"),(0,s.kt)("p",null,"An installation can be done quickly via the package manager ",(0,s.kt)("inlineCode",{parentName:"p"},"npm"),". The corresponding package is ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/zbctl"},"here"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g zbctl\n")),(0,s.kt)("p",null,"You can also download a binary for your Operating System from the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/releases"},"Zeebe GitHub releases page"),"."),(0,s.kt)("h3",{id:"connection-settings"},"Connection settings"),(0,s.kt)("p",null,"To use ",(0,s.kt)("inlineCode",{parentName:"p"},"zbctl")," it is recommended to define environment variables for the connection settings:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"export ZEEBE_ADDRESS='[Zeebe API]'\nexport ZEEBE_CLIENT_ID='[Client ID]'\nexport ZEEBE_CLIENT_SECRET='[Client Secret]'\nexport ZEEBE_AUTHORIZATION_SERVER_URL='[OAuth API]'\n")),(0,s.kt)("p",null,"When you create client credentials in Camunda Cloud you have the option to download a file with above lines filled out for you."),(0,s.kt)("p",null,"Alternatively, use the ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/zbctl#usage"},"described flags")," (",(0,s.kt)("inlineCode",{parentName:"p"},"--address"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"--clientId")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"--clientSecret"),"). with the zbctl commands."),(0,s.kt)("h3",{id:"test-command"},"Test command"),(0,s.kt)("p",null,"Use this command to verify that everything is set up correctly:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zbctl status\n")),(0,s.kt)("p",null,"As a result you will get a similar response:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"Cluster size: 1\nPartitions count: 2\nReplication factor: 1\nGateway version: unavailable\nBrokers:\n  Broker 0 - zeebe-0.zeebe-broker-service.456637ef-8832-428b-a2a4-82b531b25635-zeebe.svc.cluster.local:26501\n    Version: unavailable\n    Partition 1 : Leader\n    Partition 2 : Leader\n")),(0,s.kt)("h2",{id:"advanced-process"},"Advanced process"),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{target:"_blank",href:n(30789).Z},"this process model")," for the tutorial."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"processId",src:n(52502).Z})),(0,s.kt)("p",null,"This process includes a service task and an XOR gateway. Select the service task and fill in the properties. Set the ",(0,s.kt)("strong",{parentName:"p"},"Type")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"test-worker"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"process",src:n(30353).Z})),(0,s.kt)("p",null,"The worker will return a JSON object as a result, which is used to decide which path to take.\nNow, we can use the JSON object to route your process by filling in the condition expression on the two sequence flows after the XOR gateway."),(0,s.kt)("p",null,'Use the following conditional expression for the "Pong" sequence flow:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'=return="Pong"\n')),(0,s.kt)("p",null,"And for the else sequence flow:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'=return!="Pong"\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"sequenceflows",src:n(87612).Z})),(0,s.kt)("h2",{id:"deploy-a-process"},"Deploy a Process"),(0,s.kt)("p",null,"Now you can deploy the ",(0,s.kt)("a",{target:"_blank",href:n(30789).Z},"process"),". Navigate to the folder, where you saved your process."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zbctl deploy gettingstarted_quickstart_advanced.bpmn\n")),(0,s.kt)("p",null,"If the deployment is successful you'll get the following output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "key": 2251799813685493,\n  "processes": [\n    {\n      "bpmnProcessId": "camunda-cloud-quick-start-advanced",\n      "version": 1,\n      "processKey": 2251799813685492,\n      "resourceName": "gettingstarted_quickstart_advanced.bpmn"\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"Important here is the ",(0,s.kt)("inlineCode",{parentName:"p"},"bpmnProcessId"),", which you'll need for creating a new instance."),(0,s.kt)("h2",{id:"register-a-worker"},"Register a worker"),(0,s.kt)("p",null,"The process uses the worker with the type ",(0,s.kt)("inlineCode",{parentName:"p"},"test-worker"),". Register a new one by using the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'zbctl create worker test-worker --handler "echo {\\"return\\":\\"Pong\\"}"\n')),(0,s.kt)("h2",{id:"start-a-new-instance"},"Start a new instance"),(0,s.kt)("p",null,"You can start a new instance with a single command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"zbctl create instance camunda-cloud-quick-start-advanced\n")),(0,s.kt)("p",null,"As a result, you'll get the following output, which contains, among others, the ",(0,s.kt)("inlineCode",{parentName:"p"},"processInstanceKey"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "processKey": 2251799813685492,\n  "bpmnProcessId": "camunda-cloud-quick-start-advanced",\n  "version": 1,\n  "processInstanceKey": 2251799813685560\n}\n')),(0,s.kt)("p",null,"Navigate to Operate to monitor the process instance."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"operate-instances",src:n(18247).Z})),(0,s.kt)("p",null,"Because the worker returns"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "return": "Pong"\n}\n')),(0,s.kt)("p",null,"the process ends in the upper end event following the Ping sequence flow."),(0,s.kt)("p",null,"Changing the worker to"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'zbctl create worker test-worker --handler "echo {\\"return\\":\\"...\\"}"\n')),(0,s.kt)("p",null,"and creating a new instance leads to a second instance in Operate, which you'll see ending in the second end event following the else sequence flow:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"operate-instance",src:n(21634).Z})),(0,s.kt)("p",null,"As a next step you can now connect both workers in parallel and create more process instances:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"while true; do zbctl create instance camunda-cloud-quick-start-advanced; sleep 1; done\n")),(0,s.kt)("p",null,"In Operate you will see instances ending in both end events depending on which worker picked up the job."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"operate-instances",src:n(35788).Z})))}u.isMDXComponent=!0},30789:function(e,t,n){"use strict";t.Z=n.p+"assets/files/gettingstarted_quickstart_advanced-7a135837ae0d1d31680feeea3013bc53.bpmn"},21634:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-advanced-instances-other-28664877aec067064cf47d0d9647cbdd.png"},18247:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-advanced-instances-pong-b16f917637acc912e6fcd0f0d8742d8b.png"},35788:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-advanced-instances-ee0c07d9130b2cfbed34b0bc17ebfdc7.png"},52502:function(e,t,n){"use strict";t.Z=n.p+"assets/images/zeebe-modeler-advanced-process-id-5eb4153cdfac8cc641ba997d139c9b2a.png"},87612:function(e,t,n){"use strict";t.Z=n.p+"assets/images/zeebe-modeler-advanced-sequence-flows-92ff55120b81cb2dcc7a14d28e3db800.png"},30353:function(e,t,n){"use strict";t.Z=n.p+"assets/images/zeebe-modeler-advanced-6b5bd0dd88f8aa9f4f2bf7e3955f5621.png"}}]);