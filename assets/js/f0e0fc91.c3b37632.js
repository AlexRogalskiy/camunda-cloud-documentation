(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[15723],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60128:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return c}});var a=n(22122),o=n(19756),r=(n(67294),n(3905)),l={id:"get-started",title:"Get Started with the Java Client"},i={unversionedId:"product-manuals/zeebe/clients/java-client/get-started",id:"version-0.25/product-manuals/zeebe/clients/java-client/get-started",isDocsHomePage:!1,title:"Get Started with the Java Client",description:"In this tutorial, you will learn to use the Java client in a Java application to interact with Zeebe.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/clients/java-client/get-started.md",sourceDirName:"product-manuals/zeebe/clients/java-client",slug:"/product-manuals/zeebe/clients/java-client/get-started",permalink:"/docs/0.25/product-manuals/zeebe/clients/java-client/get-started",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/clients/java-client/get-started.md",version:"0.25",frontMatter:{id:"get-started",title:"Get Started with the Java Client"},sidebar:"version-0.25/Product Manuals",previous:{title:"Setting up the Zeebe Java Client",permalink:"/docs/0.25/product-manuals/zeebe/clients/java-client/setup"},next:{title:"Logging",permalink:"/docs/0.25/product-manuals/zeebe/clients/java-client/logging"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Start the broker",id:"start-the-broker",children:[]},{value:"Set up a project",id:"set-up-a-project",children:[]},{value:"Interlude: Build an executable JAR file",id:"interlude-build-an-executable-jar-file",children:[]},{value:"Output of executing program",id:"output-of-executing-program",children:[]},{value:"Model a workflow",id:"model-a-workflow",children:[]},{value:"Deploy a workflow",id:"deploy-a-workflow",children:[]},{value:"Create a workflow instance",id:"create-a-workflow-instance",children:[]},{value:"Work on a job",id:"work-on-a-job",children:[]},{value:"Work with data",id:"work-with-data",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],p={toc:s};function c(e){var t=e.components,l=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this tutorial, you will learn to use the Java client in a Java application to interact with Zeebe."),(0,r.kt)("p",null,"You will be guided through the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-up-a-project"},"Set up a project")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model-a-workflow"},"Model a workflow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deploy-a-workflow"},"Deploy a workflow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-a-workflow-instance"},"Create a workflow instance")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#work-on-a-job"},"Work on a job")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#work-with-data"},"Work with data"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can find the complete source code, including the BPMN diagrams, on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-get-started-java-client"},"GitHub"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can watch a video walk-through of this guide on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=RV9_7Ct2j0g"},"Zeebe YouTube channel here"),".")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java 8"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://maven.apache.org/"},"Apache Maven")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/zeebe-io/zeebe-modeler/releases"},"Zeebe Modeler"))),(0,r.kt)("p",null,"One of the following:"),(0,r.kt)("p",null,"(Using Docker)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.docker.com"},"Docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/zeebe-io/zeebe-docker-compose"},"Zeebe Docker Configurations"))),(0,r.kt)("p",null,"(Not using Docker)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/introduction/install"},"Zeebe distribution")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/zeebe-io/zeebe-simple-monitor/releases"},"Zeebe Monitor"))),(0,r.kt)("h2",{id:"start-the-broker"},"Start the broker"),(0,r.kt)("p",null,"Before you begin to setup your project, please start the broker."),(0,r.kt)("p",null,"If you are using Docker with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-docker-compose"},"zeebe-docker-compose"),", then change into the ",(0,r.kt)("inlineCode",{parentName:"p"},"simple-monitor")," subdirectory, and run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up"),"."),(0,r.kt)("p",null,"If you are not using Docker, run the start up script ",(0,r.kt)("inlineCode",{parentName:"p"},"bin/broker")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bin/broker.bat")," in the distribution."),(0,r.kt)("p",null,"By default, the broker binds to ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:26500"),", which is used as contact point in this guide."),(0,r.kt)("h2",{id:"set-up-a-project"},"Set up a project"),(0,r.kt)("p",null,"First, we need a Maven project.\nCreate a new project using your IDE, or run the Maven command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mvn archetype:generate \\\n    -DgroupId=io.zeebe \\\n    -DartifactId=zeebe-get-started-java-client \\\n    -DarchetypeArtifactId=maven-archetype-quickstart \\\n    -DinteractiveMode=false\n")),(0,r.kt)("p",null,"Add the Zeebe client library as dependency to the project's ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>io.zeebe</groupId>\n  <artifactId>zeebe-client-java</artifactId>\n  <version>${zeebe.version}</version>\n</dependency>\n")),(0,r.kt)("p",null,"Create a main class and add the following lines to bootstrap the Zeebe client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package io.zeebe;\n\nimport io.zeebe.client.ZeebeClient;\n\npublic class App\n{\n    public static void main(final String[] args)\n    {\n        final ZeebeClient client = ZeebeClient.newClientBuilder()\n            // change the contact point if needed\n            .gatewayAddress("127.0.0.1:26500")\n            .usePlaintext()\n            .build();\n\n        System.out.println("Connected.");\n\n        // ...\n\n        client.close();\n        System.out.println("Closed.");\n    }\n}\n')),(0,r.kt)("p",null,"Run the program:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you use an IDE, you can just execute the main class, using your IDE."),(0,r.kt)("li",{parentName:"ul"},"Otherwise, you must build an executable JAR file with Maven and execute it.")),(0,r.kt)("h2",{id:"interlude-build-an-executable-jar-file"},"Interlude: Build an executable JAR file"),(0,r.kt)("p",null,"Add the Maven Shade plugin to your pom.xml:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- Maven Shade Plugin --\x3e\n<plugin>\n  <groupId>org.apache.maven.plugins</groupId>\n  <artifactId>maven-shade-plugin</artifactId>\n  <version>2.3</version>\n  <executions>\n    \x3c!-- Run shade goal on package phase --\x3e\n    <execution>\n      <phase>package</phase>\n      <goals>\n        <goal>shade</goal>\n      </goals>\n      <configuration>\n        <transformers>\n          \x3c!-- add Main-Class to manifest file --\x3e\n          <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">\n            <mainClass>io.zeebe.App</mainClass>\n          </transformer>\n        </transformers>\n      </configuration>\n    </execution>\n  </executions>\n</plugin>\n')),(0,r.kt)("p",null,"Now run ",(0,r.kt)("inlineCode",{parentName:"p"},"mvn package"),", and it will generate a JAR file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," subdirectory. You can run this with ",(0,r.kt)("inlineCode",{parentName:"p"},"java -jar target/${JAR file}"),"."),(0,r.kt)("h2",{id:"output-of-executing-program"},"Output of executing program"),(0,r.kt)("p",null,"You should see the output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Connected.\n\nClosed.\n")),(0,r.kt)("h2",{id:"model-a-workflow"},"Model a workflow"),(0,r.kt)("p",null,"Now, we need a first workflow which can then be deployed.\nLater, we will extend the workflow with more functionality."),(0,r.kt)("p",null,"Open the Zeebe Modeler and create a new BPMN diagram.\nAdd a start event and an end event to the diagram and connect the events."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"model-workflow-step-1",src:n(90553).Z})),(0,r.kt)("p",null,"Set the id (the BPMN process id), and mark the diagram as executable."),(0,r.kt)("p",null,"Save the diagram as ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/resources/order-process.bpmn")," under the project's folder."),(0,r.kt)("h2",{id:"deploy-a-workflow"},"Deploy a workflow"),(0,r.kt)("p",null,"Next, we want to deploy the modeled workflow to the broker."),(0,r.kt)("p",null,"The broker stores the workflow under its BPMN process id and assigns a version."),(0,r.kt)("p",null,"Add the following deploy command to the main class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package io.zeebe;\n\nimport io.zeebe.client.api.response.DeploymentEvent;\n\npublic class Application\n{\n    public static void main(final String[] args)\n    {\n        // after the client is connected\n\n        final DeploymentEvent deployment = client.newDeployCommand()\n            .addResourceFromClasspath("order-process.bpmn")\n            .send()\n            .join();\n\n        final int version = deployment.getWorkflows().get(0).getVersion();\n        System.out.println("Workflow deployed. Version: " + version);\n\n        // ...\n    }\n}\n')),(0,r.kt)("p",null,"Run the program and verify that the workflow is deployed successfully.\nYou should see the output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Workflow deployed. Version: 1\n")),(0,r.kt)("h2",{id:"create-a-workflow-instance"},"Create a workflow instance"),(0,r.kt)("p",null,"Finally, we are ready to create a first instance of the deployed workflow.\nA workflow instance is created of a specific version of the workflow, which can be set on creation."),(0,r.kt)("p",null,"Add the following create command to the main class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package io.zeebe;\n\nimport io.zeebe.client.api.response.WorkflowInstanceEvent;\n\npublic class Application\n{\n    public static void main(final String[] args)\n    {\n        // after the workflow is deployed\n\n        final WorkflowInstanceEvent wfInstance = client.newCreateInstanceCommand()\n            .bpmnProcessId("order-process")\n            .latestVersion()\n            .send()\n            .join();\n\n        final long workflowInstanceKey = wfInstance.getWorkflowInstanceKey();\n\n        System.out.println("Workflow instance created. Key: " + workflowInstanceKey);\n\n        // ...\n    }\n}\n')),(0,r.kt)("p",null,"Run the program and verify that the workflow instance is created. You should see the output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Workflow instance created. Key: 2113425532\n")),(0,r.kt)("p",null,"You did it! You want to see how the workflow instance is executed?"),(0,r.kt)("p",null,"If you are running with Docker, just open ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8082"},"http://localhost:8082")," in your browser."),(0,r.kt)("p",null,"If you are running without Docker:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start the Zeebe Monitor using ",(0,r.kt)("inlineCode",{parentName:"li"},"java -jar zeebe-simple-monitor-app-*.jar"),"."),(0,r.kt)("li",{parentName:"ul"},"Open a web browser and go to ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:8080/"},"http://localhost:8080/"),".")),(0,r.kt)("p",null,"In the Simple Monitor interface, you see the current state of the workflow instance.\n",(0,r.kt)("img",{alt:"zeebe-monitor-step-1",src:n(83525).Z})),(0,r.kt)("h2",{id:"work-on-a-job"},"Work on a job"),(0,r.kt)("p",null,"Now we want to do some work within your workflow.\nFirst, add a few service jobs to the BPMN diagram and set the required attributes.\nThen extend your main class and create a job worker to process jobs which are created when the workflow instance reaches a service task."),(0,r.kt)("p",null,"Open the BPMN diagram in the Zeebe Modeler.\nInsert a few service tasks between the start and the end event."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"model-workflow-step-2",src:n(36013).Z})),(0,r.kt)("p",null,"You need to set the type of each task, which identifies the nature of the work to be performed.\nSet the type of the first task to 'payment-service'."),(0,r.kt)("p",null,"Set the type of the second task to 'fetcher-service'."),(0,r.kt)("p",null,"Set the type of the third task to 'shipping-service'."),(0,r.kt)("p",null,"Save the BPMN diagram and switch back to the main class."),(0,r.kt)("p",null,"Add the following lines to create a job worker for the first jobs type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package io.zeebe;\n\nimport io.zeebe.client.api.worker.JobWorker;\n\npublic class App\n{\n    public static void main(final String[] args)\n    {\n        // after the workflow instance is created\n\n        try(final JobWorker jobWorker = client.newWorker()) {\n            jobWorker.jobType("payment-service")\n            .handler((jobClient, job) ->\n            {\n                System.out.println("Collect money");\n\n                // ...\n\n                jobClient.newCompleteCommand(job.getKey())\n                    .send()\n                    .join();\n            })\n            .open();\n\n            // waiting for the jobs\n            // Don\'t close, we need to keep polling to get work\n            // It will be close after last statement in try-with resources block\n\n            // ...\n        }\n\n    }\n}\n')),(0,r.kt)("p",null,"Run the program and verify that the job is processed. You should see the output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Collect money\n")),(0,r.kt)("p",null,"When you have a look at the Zeebe Monitor, then you can see that the workflow instance moved from the first service task to the next one:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"zeebe-monitor-step-2",src:n(62097).Z})),(0,r.kt)("h2",{id:"work-with-data"},"Work with data"),(0,r.kt)("p",null,"Usually, a workflow is more than just tasks, there is also a data flow. The worker gets the data from the workflow instance to do its work and send the result back to the workflow instance."),(0,r.kt)("p",null,"In Zeebe, the data is stored as key-value-pairs in form of variables. Variables can be set when the workflow instance is created. Within the workflow, variables can be read and modified by workers."),(0,r.kt)("p",null,"In our example, we want to create a workflow instance with the following variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"orderId": 31243\n"orderItems": [435, 182, 376]\n')),(0,r.kt)("p",null,"The first task should read ",(0,r.kt)("inlineCode",{parentName:"p"},"orderId")," as input and return ",(0,r.kt)("inlineCode",{parentName:"p"},"totalPrice")," as result."),(0,r.kt)("p",null,"Modify the workflow instance create command and pass the data as variables. Also, modify the job worker to read the job variables and complete the job with a result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package io.zeebe;\n\npublic class App\n{\n    public static void main(final String[] args)\n    {\n        // after the workflow is deployed\n\n        final Map<String, Object> data = new HashMap<>();\n        data.put("orderId", 31243);\n        data.put("orderItems", Arrays.asList(435, 182, 376));\n\n        final WorkflowInstanceEvent wfInstance = client.newCreateInstanceCommand()\n            .bpmnProcessId("order-process")\n            .latestVersion()\n            .variables(data)\n            .send()\n            .join();\n\n        // ...\n\n        final JobWorker jobWorker = client.newWorker()\n            .jobType("payment-service")\n            .handler((jobClient, job) ->\n            {\n                final Map<String, Object> variables = job.getVariablesAsMap();\n\n                System.out.println("Process order: " + variables.get("orderId"));\n                double price = 46.50;\n                System.out.println("Collect money: $" + price);\n\n                // ...\n\n                final Map<String, Object> result = new HashMap<>();\n                result.put("totalPrice", price);\n\n                jobClient.newCompleteCommand(job.getKey())\n                    .variables(result)\n                    .send()\n                    .join();\n            })\n            .fetchVariables("orderId")\n            .open();\n\n        // ...\n    }\n}\n')),(0,r.kt)("p",null,"Run the program and verify that the variable is read. You should see the output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Process order: 31243\nCollect money: $46.50\n")),(0,r.kt)("p",null,"When we have a look at the Zeebe Monitor, then we can see that the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"totalPrice")," is set:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"zeebe-monitor-step-3",src:n(93982).Z})),(0,r.kt)("h2",{id:"whats-next"},"What's next?"),(0,r.kt)("p",null,"Hurray! You finished this tutorial and learned the basic usage of the Java client."),(0,r.kt)("p",null,"Next steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn more about the ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/basics/index"},"concepts behind Zeebe")),(0,r.kt)("li",{parentName:"ul"},"Learn more about ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/bpmn-primer"},"BPMN workflows")),(0,r.kt)("li",{parentName:"ul"},"Take a deeper look into the ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/clients/java-client/index"},"Java client"))))}c.isMDXComponent=!0},83525:function(e,t,n){"use strict";t.Z=n.p+"assets/images/java-get-started-monitor-1-6b3dd7e9147ce93d2ed04ed4aa1efeb1.gif"},62097:function(e,t,n){"use strict";t.Z=n.p+"assets/images/java-get-started-monitor-2-0b030022c85b309f4d5206b3257ae05d.gif"},93982:function(e,t,n){"use strict";t.Z=n.p+"assets/images/java-get-started-monitor-3-3e395566215314ec56d861f0c4c1db3b.gif"},90553:function(e,t){"use strict";t.Z="data:image/png;base64,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"},36013:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);