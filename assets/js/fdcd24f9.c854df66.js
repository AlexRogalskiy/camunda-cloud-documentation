(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[93756],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97443:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),s={id:"create-process-instance",title:"Create and complete process instances"},i=void 0,l={unversionedId:"product-manuals/zeebe/deployment-guide/getting-started/create-process-instance",id:"product-manuals/zeebe/deployment-guide/getting-started/create-process-instance",isDocsHomePage:!1,title:"Create and complete process instances",description:"We're going to create 2 process instances for this tutorial: one with an order value less than $100 and one with an order value greater than or equal to $100 so that we can see our XOR gateway in action.",source:"@site/docs/product-manuals/zeebe/deployment-guide/getting-started/create-process-instance.md",sourceDirName:"product-manuals/zeebe/deployment-guide/getting-started",slug:"/product-manuals/zeebe/deployment-guide/getting-started/create-process-instance",permalink:"/docs/product-manuals/zeebe/deployment-guide/getting-started/create-process-instance",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/deployment-guide/getting-started/create-process-instance.md",version:"current",frontMatter:{id:"create-process-instance",title:"Create and complete process instances"},sidebar:"Product Manuals",previous:{title:"Deploy a process",permalink:"/docs/product-manuals/zeebe/deployment-guide/getting-started/deploy-a-process"},next:{title:"Next steps and resources",permalink:"/docs/product-manuals/zeebe/deployment-guide/getting-started/next-steps-resources"}},c=[],p={toc:c};function u(e){var t=e.components,s=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We're going to create 2 process instances for this tutorial: one with an order value less than $100 and one with an order value greater than or equal to $100 so that we can see our XOR gateway in action."),(0,o.kt)("p",null,"Go back to the Terminal window where you deployed the process model and execute the following command."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Windows users who want to execute this command using cmd or Powershell\nhave to escape the variables differently."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"cmd: ",(0,o.kt)("inlineCode",{parentName:"li"},'"{\\"orderId\\": 1234}"')),(0,o.kt)("li",{parentName:"ul"},"Powershell: ",(0,o.kt)("inlineCode",{parentName:"li"},'\'{"\\"orderId"\\": 1234}\'')))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Linux")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'./bin/zbctl --insecure create instance order-process --variables \'{"orderId": "1234", "orderValue":99}\'\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Mac")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'./bin/zbctl.darwin --insecure create instance order-process --variables \'{"orderId": "1234", "orderValue":99}\'\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Windows (Powershell)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'./bin/zbctl.exe --insecure create instance order-process --variables \'{\\"orderId\\": \\"1234\\", \\\n"orderValue\\":99}\'\n')),(0,o.kt)("p",null,"You'll see a response like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "processKey": 1,\n  "bpmnProcessId": "order-process",\n  "version": 1,\n  "processInstanceKey": 8\n}\n')),(0,o.kt)("p",null,"This first process instance we just created represents a single customer order with ",(0,o.kt)("inlineCode",{parentName:"p"},"orderId")," 1234 and ",(0,o.kt)("inlineCode",{parentName:"p"},"orderValue")," 99 (or, $99)."),(0,o.kt)("p",null,"In the same Terminal window, run the command:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Linux")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'./bin/zbctl --insecure create instance order-process --variables \'{"orderId": "2345", "orderValue":100}\'\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Mac")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'./bin/zbctl.darwin --insecure create instance order-process --variables \'{"orderId": "2345", "orderValue":100}\'\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Windows (Powershell)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'./bin/zbctl.exe --insecure create instance order-process --variables \'{\\"orderId\\": \\"2345\\", \\\n"orderValue\\":100}\'\n')),(0,o.kt)("p",null,"This second process instance we just created represents a single customer order with ",(0,o.kt)("inlineCode",{parentName:"p"},"orderId")," 2345 and ",(0,o.kt)("inlineCode",{parentName:"p"},"orderValue")," 100 (or, $100)."),(0,o.kt)("p",null,"If you go back to the Operate UI and refresh the page, you should now see two process instances (the green badge) waiting at the ",(0,o.kt)("inlineCode",{parentName:"p"},"Initiate Payment")," task."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Process Instances in Operate",src:n(65447).Z})),(0,o.kt)("p",null,"Note that the process instance can't move past this first task until we create a job worker to complete ",(0,o.kt)("inlineCode",{parentName:"p"},"initiate-payment")," jobs. So that's exactly what we'll do next."),(0,o.kt)("p",null,"To make this point again: in a real-word use case, you probably won't manually create process instances using the Zeebe CLI. Rather, a process instance would be created programmatically in response to some business event, such as a message sent to Zeebe after a customer places an order. And instances might be created at very large scale if, for example, many customers were placing orders at the same time due to a sale. We're using the CLI here just for simplicity's sake."),(0,o.kt)("p",null,"We have two instances currently waiting at our ",(0,o.kt)("inlineCode",{parentName:"p"},"Initiate Payment")," task, which means that Zeebe has created two jobs with type ",(0,o.kt)("inlineCode",{parentName:"p"},"initiate-payment"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"zbctl")," provides a command to spawn simple job workers using an external command or script. The job worker will receive the payload for every job as a JSON object on ",(0,o.kt)("inlineCode",{parentName:"p"},"stdin")," and must also return its result as JSON object on ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," if it handled the job successfully."),(0,o.kt)("p",null,"In this example, we'll also use the unix command ",(0,o.kt)("inlineCode",{parentName:"p"},"cat")," which just outputs what it receives on ",(0,o.kt)("inlineCode",{parentName:"p"},"stdin"),"."),(0,o.kt)("p",null,"Open a new Terminal tab or window, change into the Zeebe broker directory, and use the following command to create a job worker that will work on the ",(0,o.kt)("inlineCode",{parentName:"p"},"initiate-payment")," job."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," For Windows users, this command does not work with cmd as the ",(0,o.kt)("inlineCode",{parentName:"p"},"cat"),"\ncommand does not exist. We recommend to use Powershell or a bash-like shell\nto execute this command.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Linux")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./bin/zbctl --insecure create worker initiate-payment --handler cat\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Mac")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./bin/zbctl.darwin --insecure create worker initiate-payment --handler cat\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Windows")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'./bin/zbctl.exe --insecure create worker initiate-payment --handler "findstr .*"\n')),(0,o.kt)("p",null,"You should see a response along the lines of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Activated job 12 with payload {"orderId":"2345","orderValue":100}\nActivated job 7 with payload {"orderId":"1234","orderValue":99}\nHandler completed job 12 with payload {"orderId":"2345","orderValue":100}\nHandler completed job 7 with payload {"orderId":"1234","orderValue":99}\n')),(0,o.kt)("p",null,"We can see that the job worker activated then completed the two available ",(0,o.kt)("inlineCode",{parentName:"p"},"initiate-payment")," jobs. You can shut down the job worker if you'd like--you won't need it in the rest of the tutorial."),(0,o.kt)("p",null,"Now go to the browser tab where you're running Operate. You should see that the process instances have advanced to the intermediate message catch event and are waiting there."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Waiting at Message Event",src:n(59865).Z})),(0,o.kt)("p",null,"The process instances will wait at the intermediate message catch event until a message is received by Zeebe and correlated to the instances. Messages can be published using Zeebe clients, and it's also possible for Zeebe to connect to a message queue such as Apache Kafka and correlate messages published there to process instances."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"zbctl")," also supports message publishing, so we'll continue to use it in our demo. Below is the command we'll use to publish and correlate a message. You'll see that we provide the message \"Name\" that we assigned to this message event in the Camunda Modeler as well as the ",(0,o.kt)("inlineCode",{parentName:"p"},"orderId")," that we included in the payload of the instance when we created it."),(0,o.kt)("p",null,"Remember, ",(0,o.kt)("inlineCode",{parentName:"p"},"orderId")," is the correlation key we set in the Modeler when configuring the message event. Zeebe requires both of these fields to be able to correlate a message to a process instance. Because we have two process instances with two distinct ",(0,o.kt)("inlineCode",{parentName:"p"},"orderId"),", we'll need to publish two messages. Run these two commands one after the other:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Linux")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'./bin/zbctl --insecure publish message "payment-received" --correlationKey="1234"\n./bin/zbctl --insecure publish message "payment-received" --correlationKey="2345"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Mac")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'./bin/zbctl.darwin --insecure publish message "payment-received" --correlationKey="1234"\n./bin/zbctl.darwin --insecure publish message "payment-received" --correlationKey="2345"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Windows")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'./bin/zbctl.exe --insecure publish message "payment-received" --correlationKey="1234"\n./bin/zbctl.exe --insecure publish message "payment-received" --correlationKey="2345"\n')),(0,o.kt)("p",null,"You won't see a response in your Terminal window, but if you refresh Operate, you should see that the messages were correlated successfully and that one process instance has advanced to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ship With Insurance")," task and the other has advanced to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ship Without Insurance")," task."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Waiting at Shipping Service Tasks",src:n(90353).Z})),(0,o.kt)("p",null,"The good news is that this visualization confirms that our decision logic worked as expected: our process instance with an ",(0,o.kt)("inlineCode",{parentName:"p"},"orderValue")," of $100 will ship with insurance, and our process instance with an ",(0,o.kt)("inlineCode",{parentName:"p"},"orderValue")," of $99 will ship without insurance."),(0,o.kt)("p",null,"You probably know what you need to do next. Go ahead and open a Terminal window and create a job worker for the ",(0,o.kt)("inlineCode",{parentName:"p"},"ship-without-insurance")," job type."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Linux")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./bin/zbctl --insecure create worker ship-without-insurance --handler cat\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Mac")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./bin/zbctl.darwin --insecure create worker ship-without-insurance --handler cat\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Windows")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'./bin/zbctl.exe --insecure create worker ship-without-insurance --handler "findstr .*"\n')),(0,o.kt)("p",null,"You should see a response along the lines of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Activated job 529 with payload {"orderId":"1234","orderValue":99}\nHandler completed job 529 with payload {"orderId":"1234","orderValue":99}\n')),(0,o.kt)("p",null,"You can shut down this worker now."),(0,o.kt)("p",null,"Select the ",(0,o.kt)("strong",{parentName:"p"},"Finished Instances")," checkbox in the bottom left of Operate, refresh the page, and voila! You'll see your first completed Zeebe process instance."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"First Process Instance Complete",src:n(41041).Z})),(0,o.kt)("p",null,"Because the ",(0,o.kt)("inlineCode",{parentName:"p"},"Ship With Insurance")," task has a different job type, we need to create a second worker that can take on this job."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Linux")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./bin/zbctl --insecure create worker ship-with-insurance --handler cat\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Mac")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./bin/zbctl.darwin --insecure create worker ship-with-insurance --handler cat\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Windows")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'./bin/zbctl.exe --insecure create worker ship-with-insurance --handler "findstr .*"\n')),(0,o.kt)("p",null,"You should see a response along the lines of:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Activated job 535 with payload {"orderId":"2345","orderValue":100}\nHandler completed job 535 with payload {"orderId":"2345","orderValue":100}\n')),(0,o.kt)("p",null,"You can shut down this worker, too."),(0,o.kt)("p",null,"Let's take one more look in Operate to confirm that both process instances have been completed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Both Process Instances Complete",src:n(74977).Z})),(0,o.kt)("p",null,"Hooray! You've completed the tutorial! Congratulations."),(0,o.kt)("p",null,"In the next and final section, we'll point you to resources we think you'll find helpful as you continue working with Zeebe."))}u.isMDXComponent=!0},65447:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tutorial-4.1-process-instances-first-task-841953c36c351b67571845b295834ccb.png"},59865:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tutorial-4.2-waiting-at-message-c6cd59ca77c0bb08b1d2e1e09e90333a.png"},90353:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tutorial-4.3-waiting-at-shipping-122de9a0ed4d37efcefaeb564e146ddd.png"},41041:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tutorial-4.4-no-insurance-complete-0854e12f195c8c914f952d7d139aac22.png"},74977:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tutorial-4.5-both-instances-complete-45628cee77108b5d8f39d611cf0ee01c.png"}}]);