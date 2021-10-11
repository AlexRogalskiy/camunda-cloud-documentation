(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[36979],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(k,r(r({ref:t},p),{},{components:a})):n.createElement(k,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},69247:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=a(22122),o=a(19756),l=(a(67294),a(3905)),r={id:"create-a-workflow",title:"Create a workflow"},i=void 0,s={unversionedId:"components/zeebe/deployment-guide/getting-started/create-a-workflow",id:"version-0.26/components/zeebe/deployment-guide/getting-started/create-a-workflow",isDocsHomePage:!1,title:"Create a workflow",description:"New to BPMN and want to learn more before moving forward? This blog post helps to explain the standard and why it's a good fit for microservices orchestration.",source:"@site/versioned_docs/version-0.26/components/zeebe/deployment-guide/getting-started/create-a-workflow.md",sourceDirName:"components/zeebe/deployment-guide/getting-started",slug:"/components/zeebe/deployment-guide/getting-started/create-a-workflow",permalink:"/docs/0.26/components/zeebe/deployment-guide/getting-started/create-a-workflow",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/components/zeebe/deployment-guide/getting-started/create-a-workflow.md",version:"0.26",frontMatter:{id:"create-a-workflow",title:"Create a workflow"},sidebar:"version-0.26/Components",previous:{title:"Tutorial setup",permalink:"/docs/0.26/components/zeebe/deployment-guide/getting-started/tutorial-setup"},next:{title:"Deploy a workflow",permalink:"/docs/0.26/components/zeebe/deployment-guide/getting-started/deploy-a-workflow"}},c=[],p={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"New to BPMN and want to learn more before moving forward? ",(0,l.kt)("a",{parentName:"em",href:"https://zeebe.io/blog/2018/08/bpmn-for-microservices-orchestration-a-primer-part-1/"},"This blog post")," helps to explain the standard and why it's a good fit for microservices orchestration.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"In case you're already familiar with BPMN and how to create a BPMN model in Zeebe Modeler, you can find the finished model that we create during the tutorial here: ",(0,l.kt)("a",{target:"_blank",href:a(84610).Z},"Zeebe Getting Started Tutorial Workflow Model"),".")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"If you're using the finished model we provide rather than building your own, you can also move ahead to ",(0,l.kt)("a",{parentName:"em",href:"/docs/0.26/components/zeebe/deployment-guide/getting-started/deploy-a-workflow"},"deploy a workflow"),".")),(0,l.kt)("p",null,"Zeebe Modeler is a desktop modeling tool that allows you to build and configure workflow models using BPMN 2.0. In this section, we'll create a workflow model and get it ready to be deployed to Zeebe."),(0,l.kt)("p",null,"We'll create an e-commerce order process as our example, and we'll model a workflow that consists of:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Initiating a payment for an order"),(0,l.kt)("li",{parentName:"ul"},"Receiving a payment confirmation message from an external system"),(0,l.kt)("li",{parentName:"ul"},"Shipping the items in the order with or without insurance depending on order value")),(0,l.kt)("p",null,"This is what your workflow model will look like when we're finished:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Getting Started Workflow Model",src:a(51772).Z})),(0,l.kt)("p",null,"The payment task and shipping tasks are carried out by worker services that we'll connect to the workflow engine. The ",(0,l.kt)("em",{parentName:"p"},"Payment Received")," message will be published to Zeebe by an external system, and Zeebe will then correlate the message to a workflow instance."),(0,l.kt)("p",null,"To get started"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open the Zeebe Modeler and create a new BPMN diagram."),(0,l.kt)("li",{parentName:"ul"},"Save the model as ",(0,l.kt)("inlineCode",{parentName:"li"},"order-process.bpmn")," in the top level of the Zeebe broker directory that you just downloaded. As a reminder, this directory is called ",(0,l.kt)("inlineCode",{parentName:"li"},"zeebe-broker-0.17.0"))),(0,l.kt)("p",null,"The first element in your model will be a start event, which should already be on the canvas when you open the Modeler."),(0,l.kt)("p",null,"It's a BPMN best practice to label all elements in our model, so:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Double-click on the start event"),(0,l.kt)("li",{parentName:"ul"},"Label it ",(0,l.kt)("inlineCode",{parentName:"li"},"Order Placed")," to signify that our process will be initiated whenever a customer places an order")),(0,l.kt)("p",null,"Next, we need to add a service task:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click on the start event and select task icon"),(0,l.kt)("li",{parentName:"ul"},"Label the newly created Task ",(0,l.kt)("inlineCode",{parentName:"li"},"Initiate Payment")),(0,l.kt)("li",{parentName:"ul"},"Click the wrench icon and change the task to a service task")),(0,l.kt)("p",null,"Next, we'll configure the ",(0,l.kt)("em",{parentName:"p"},"Initiate Payment")," service task so that an external microservice can work on it:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click on the ",(0,l.kt)("inlineCode",{parentName:"li"},"Initiate Payment")," task"),(0,l.kt)("li",{parentName:"ul"},"Expand the Properties panel on the right side of the screen if it's not already visible"),(0,l.kt)("li",{parentName:"ul"},"In the ",(0,l.kt)("strong",{parentName:"li"},"Type")," field in the Properties panel, enter ",(0,l.kt)("inlineCode",{parentName:"li"},"initiate-payment"))),(0,l.kt)("p",null,"This is what you should see in your Modeler now."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Initiate Payment Service Task",src:a(12840).Z})),(0,l.kt)("p",null,"This ",(0,l.kt)("strong",{parentName:"p"},"Type")," field represents the ",(0,l.kt)("em",{parentName:"p"},"job type")," in Zeebe. A couple of concepts that are important to understand at this point:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("em",{parentName:"li"},"job")," is simply a work item in a workflow that needs to be completed before a workflow instance can proceed to the next step. (",(0,l.kt)("em",{parentName:"li"},(0,l.kt)("a",{parentName:"em",href:"/docs/0.26/components/concepts/job-workers"},"See: Job Workers")),")"),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("em",{parentName:"li"},"workflow instance")," is one running instance of a workflow model--in our case, an individual order to be fulfilled. (",(0,l.kt)("em",{parentName:"li"},(0,l.kt)("a",{parentName:"em",href:"/docs/0.26/components/concepts/workflows"},"See: Workflows")),")")),(0,l.kt)("p",null,"For every workflow instance that arrives at the ",(0,l.kt)("inlineCode",{parentName:"p"},"Initiate Payment")," service task, Zeebe will create a job with type ",(0,l.kt)("inlineCode",{parentName:"p"},"initiate-payment"),". The external worker service responsible for payment processing--the so-called job worker--will poll Zeebe intermittently to ask if any jobs of type ",(0,l.kt)("inlineCode",{parentName:"p"},"initiate-payment")," are available."),(0,l.kt)("p",null,"If a job is available for a given workflow instance, the worker will activate it, complete it, and notify Zeebe. Zeebe will then advance that workflow instance to the next step in the workflow."),(0,l.kt)("p",null,"Next, we'll add a message event to the workflow:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click on the ",(0,l.kt)("inlineCode",{parentName:"li"},"Initiate Payment")," task on the Modeler"),(0,l.kt)("li",{parentName:"ul"},"Select the circular icon with a double line border"),(0,l.kt)("li",{parentName:"ul"},"Click on the wrench icon next to the newly created event"),(0,l.kt)("li",{parentName:"ul"},"Select the ",(0,l.kt)("strong",{parentName:"li"},"Message Intermediate Catch Event")),(0,l.kt)("li",{parentName:"ul"},"Double-click on the message event and label it ",(0,l.kt)("inlineCode",{parentName:"li"},"Payment Received"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Message Event",src:a(64105).Z})),(0,l.kt)("p",null,"We use message catch events in Zeebe when the workflow engine needs to receive a message from an external system before the workflow instance can advance. (",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"/docs/0.26/reference/bpmn-workflows/message-events/message-events"},"See: Message Events")),")"),(0,l.kt)("p",null,"In the scenario we're modeling, we ",(0,l.kt)("em",{parentName:"p"},"initiate")," a payment with our service task, but we need to wait for some other external system to actually confirm that the payment was received. This confirmation comes in the form of a message that will be sent to Zeebe - asynchronously - by an external service."),(0,l.kt)("p",null,"Messages received by Zeebe need to be correlated to specific workflow instances. To make this possible, we have some more configuring to do:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select the message event and make sure you're on the ",(0,l.kt)("inlineCode",{parentName:"li"},"General")," tab of the properties panel on the right side of the screen"),(0,l.kt)("li",{parentName:"ul"},"In the properties panel, click the ",(0,l.kt)("inlineCode",{parentName:"li"},"+")," icon to create a new message. You'll now see two fields in the Modeler that we'll use to correlate a message to a specific workflow instance: message name and subscription correlation key."),(0,l.kt)("li",{parentName:"ul"},"Let's give this message a self-explanatory name: ",(0,l.kt)("inlineCode",{parentName:"li"},"payment-received"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add Message Name",src:a(76466).Z})),(0,l.kt)("p",null,"When Zeebe receives a message, this name field lets us know ",(0,l.kt)("em",{parentName:"p"},"which message event in the workflow model")," the message is referring to."),(0,l.kt)("p",null,"But how do we know which ",(0,l.kt)("em",{parentName:"p"},"specific workflow instance"),"--that is, which customer order--a message refers to? That's where subscription correlation key comes in. The subscription correlation key is a unique ID present in both the workflow instance payload and the message sent to Zeebe."),(0,l.kt)("p",null,"We'll use ",(0,l.kt)("inlineCode",{parentName:"p"},"orderId")," for our correlation key."),(0,l.kt)("p",null,"Go ahead and add the expression ",(0,l.kt)("inlineCode",{parentName:"p"},"= orderId")," to the subscription correlation key field."),(0,l.kt)("p",null,"When we create a workflow instance, we need to be sure to include ",(0,l.kt)("inlineCode",{parentName:"p"},"orderId")," as a variable, and we also need to provide ",(0,l.kt)("inlineCode",{parentName:"p"},"orderId")," as a correlation key when we send a message."),(0,l.kt)("p",null,"Here's what you should see in the Modeler:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Message Correlation Key",src:a(35213).Z})),(0,l.kt)("p",null,"Next, we'll add an exclusive (XOR) gateway to our workflow model. The exclusive gateway is used to make a data-based decision about which path a workflow instance should follow. In this case, we want to ship items ",(0,l.kt)("em",{parentName:"p"},"with")," insurance if total order value is greater than or equal to $100 and ship ",(0,l.kt)("em",{parentName:"p"},"without")," insurance otherwise."),(0,l.kt)("p",null,"That means that when we create a workflow instance, we'll need to include order value as an instance variable. But we'll come to that later."),(0,l.kt)("p",null,"First, let's take the necessary steps to configure our workflow model to make this decision. To add the gateway:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click on the message event you just created"),(0,l.kt)("li",{parentName:"ul"},"Select the gateway (diamond-shaped) symbol - the exclusive gateway is the default when you add a new gateway to a model"),(0,l.kt)("li",{parentName:"ul"},"Double-click on the gateway and add a label ",(0,l.kt)("inlineCode",{parentName:"li"},"Order Value?")," so that it's clear what we're using as our decision criteria")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add Exclusive Gateway to Model",src:a(93640).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Label Exclusive Gateway in Model",src:a(65223).Z})),(0,l.kt)("p",null,"We'll add two outgoing sequence flows from this exclusive gateway that lead to two different service tasks. Each sequence flow will have a data-based condition that's evaluated in the context of the workflow instance payload."),(0,l.kt)("p",null,"Next, we need to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select the gateway and add a new service task to the model."),(0,l.kt)("li",{parentName:"ul"},"Label the task ",(0,l.kt)("inlineCode",{parentName:"li"},"Ship Without Insurance")),(0,l.kt)("li",{parentName:"ul"},"Set the ",(0,l.kt)("strong",{parentName:"li"},"Type")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"ship-without-insurance"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add No Insurance Service Task",src:a(44103).Z})),(0,l.kt)("p",null,"Whenever we use an exclusive gateway, we want to be sure to set a default flow, which in this case will be shipping without insurance:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select the sequence flow you just created from the gateway to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Ship Without Insurance")," service task"),(0,l.kt)("li",{parentName:"ul"},"Click on the wrench icon"),(0,l.kt)("li",{parentName:"ul"},"Choose ",(0,l.kt)("strong",{parentName:"li"},"Default Flow"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add No Insurance Service Task",src:a(10824).Z})),(0,l.kt)("p",null,"Now we're ready to add a ",(0,l.kt)("em",{parentName:"p"},"second")," outgoing sequence flow and service task from the gateway:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select the gateway again"),(0,l.kt)("li",{parentName:"ul"},"Add another service task to the model"),(0,l.kt)("li",{parentName:"ul"},"Label it ",(0,l.kt)("inlineCode",{parentName:"li"},"Ship With Insurance")),(0,l.kt)("li",{parentName:"ul"},"Set the ",(0,l.kt)("strong",{parentName:"li"},"Type")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"ship-with-insurance"))),(0,l.kt)("p",null,"Next, we'll set a condition expression in the sequence flow leading to this ",(0,l.kt)("inlineCode",{parentName:"p"},"Ship With Insurance")," service task:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click on the sequence flow and open the properties panel"),(0,l.kt)("li",{parentName:"ul"},"Input the expression ",(0,l.kt)("inlineCode",{parentName:"li"},"= orderValue >= 100")," in the ",(0,l.kt)("strong",{parentName:"li"},"Condition expression")," field in the properties panel"),(0,l.kt)("li",{parentName:"ul"},'Double-click on the sequence flow to add a label "',(0,l.kt)("inlineCode",{parentName:"li"},'>= $100"'))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Condition Expression",src:a(57469).Z})),(0,l.kt)("p",null,"We're almost finished! To wrap things up, we'll:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select the ",(0,l.kt)("inlineCode",{parentName:"li"},"Ship Without Insurance")," task"),(0,l.kt)("li",{parentName:"ul"},"Add another exclusive gateway to the model to merge the branches together again (a BPMN best practice in a model like this one)."),(0,l.kt)("li",{parentName:"ul"},"Select the ",(0,l.kt)("inlineCode",{parentName:"li"},"Ship With Insurance")," task"),(0,l.kt)("li",{parentName:"ul"},"Add an outgoing sequence flow that connects to the second exclusive gateway you just created")),(0,l.kt)("p",null,"The only BPMN element we need to add is an end event:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click on the second exclusive gateway"),(0,l.kt)("li",{parentName:"ul"},"Add an end event"),(0,l.kt)("li",{parentName:"ul"},"Double-click on it to label it ",(0,l.kt)("inlineCode",{parentName:"li"},"Order Fulfilled"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Condition Expression",src:a(938).Z})),(0,l.kt)("p",null,"Lastly, we'll change the process ID to something more descriptive than the default ",(0,l.kt)("inlineCode",{parentName:"p"},"Process_1")," that you'll see in the Modeler:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click onto a blank part of the canvas"),(0,l.kt)("li",{parentName:"ul"},"Open the properties panel"),(0,l.kt)("li",{parentName:"ul"},"Change the ",(0,l.kt)("strong",{parentName:"li"},"Id")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"order-process"))),(0,l.kt)("p",null,"Here's what you should see in the Modeler after these last few updates:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Update Process ID",src:a(74605).Z})),(0,l.kt)("p",null,"That's all for our modeling step. Remember to save the file one more time to prepare to deploy the workflow to Zeebe, create workflow instances, and complete them."))}d.isMDXComponent=!0},84610:function(e,t,a){"use strict";t.Z=a.p+"assets/files/order-process-aef371ddfb2ff65f51190fa213f5a271.bpmn"},51772:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.0-complete-workflow-ccad27bdd9f510d4fd1314ae560ffff0.png"},12840:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.1-initiate-payment-task-3d7a204208c6f2b42ba8a47c1c6ebdc3.png"},938:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.10-end-event-099e6b75d1c3be40891b09d36c7cb105.png"},74605:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.11-process-id-bc6ac6cd55b428402175f3c704d966c3.png"},64105:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.2-modeler-message-event-fff88a2499d8f93aac727305a8c50257.png"},76466:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.3-add-message-name-14e574e6781e16189ef1ead6f64c254d.png"},35213:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.4-add-correlation-key-e7f5299f09dd4651effd4017a49f575a.png"},93640:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.5-add-xor-gateway-5cee946d82cde03e75b39b0dc66207bc.png"},65223:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.6-label-xor-gateway-93abf0aa6c3f12efbc136d53c350a36f.png"},44103:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.7-no-insurance-task-4e19ca325ba49fd7cb804faea0ea9301.png"},10824:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.8-default-flow-51c9e64dde97df1d41494e256d885b2e.png"},57469:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tutorial-3.9-condition-expression-3181825ba25f6cd91c4d25a013d5b964.png"}}]);