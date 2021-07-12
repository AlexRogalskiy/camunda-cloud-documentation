(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[49145],{76784:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var s=t(22122),i=t(19756),o=(t(67294),t(3905)),a=t(22004),r={id:"bpmn-primer",title:"BPMN primer"},p=void 0,l={unversionedId:"reference/bpmn-processes/bpmn-primer",id:"reference/bpmn-processes/bpmn-primer",isDocsHomePage:!1,title:"BPMN primer",description:"Business Process Model And Notation 2.0 (BPMN) is an industry standard for process modeling and execution. A BPMN process is an XML document that has a visual representation. For example, here is a BPMN process:",source:"@site/docs/reference/bpmn-processes/bpmn-primer.md",sourceDirName:"reference/bpmn-processes",slug:"/reference/bpmn-processes/bpmn-primer",permalink:"/docs/reference/bpmn-processes/bpmn-primer",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/bpmn-processes/bpmn-primer.md",version:"current",frontMatter:{id:"bpmn-primer",title:"BPMN primer"},sidebar:"Reference",previous:{title:"String",permalink:"/docs/reference/tasklist-api/scalars/string"},next:{title:"BPMN coverage",permalink:"/docs/reference/bpmn-processes/bpmn-coverage"}},m=[{value:"Modeling BPMN diagrams",id:"modeling-bpmn-diagrams",children:[]},{value:"BPMN elements",id:"bpmn-elements",children:[{value:"Sequence flow: Controlling the flow of execution",id:"sequence-flow-controlling-the-flow-of-execution",children:[]},{value:"Tasks: Units of work",id:"tasks-units-of-work",children:[]},{value:"Gateways: Steering flow",id:"gateways-steering-flow",children:[]},{value:"Events: Waiting for something to happen",id:"events-waiting-for-something-to-happen",children:[]},{value:"Subprocesses: Grouping Elements",id:"subprocesses-grouping-elements",children:[]}]},{value:"Additional resources",id:"additional-resources",children:[]}],c={toc:m};function d(e){var n=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,s.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Business Process Model And Notation 2.0 (BPMN) is an industry standard for process modeling and execution. A BPMN process is an XML document that has a visual representation. For example, here is a BPMN process:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"process",src:t(26504).Z})),(0,o.kt)("details",null,(0,o.kt)("summary",null,"The corresponding XML"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:zeebe="http://camunda.org/schema/zeebe/1.0" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="0.1.0">\n  <bpmn:process id="Process_1" isExecutable="true">\n    <bpmn:startEvent id="StartEvent_1" name="Order Placed">\n      <bpmn:outgoing>SequenceFlow_1bq1azi</bpmn:outgoing>\n    </bpmn:startEvent>\n    <bpmn:sequenceFlow id="SequenceFlow_1bq1azi" sourceRef="StartEvent_1" targetRef="Task_1f47b9v" />\n    <bpmn:sequenceFlow id="SequenceFlow_09hqjpg" sourceRef="Task_1f47b9v" targetRef="Task_1109y9g" />\n    <bpmn:sequenceFlow id="SequenceFlow_1ea1mpb" sourceRef="Task_1109y9g" targetRef="Task_00moy91" />\n    <bpmn:endEvent id="EndEvent_0a27csw" name="Order Delivered">\n      <bpmn:incoming>SequenceFlow_0ojoaqz</bpmn:incoming>\n    </bpmn:endEvent>\n    <bpmn:sequenceFlow id="SequenceFlow_0ojoaqz" sourceRef="Task_00moy91" targetRef="EndEvent_0a27csw" />\n    <bpmn:serviceTask id="Task_1f47b9v" name="Collect Money">\n      <bpmn:extensionElements>\n        <zeebe:taskDefinition type="collect-money" retries="3" />\n      </bpmn:extensionElements>\n      <bpmn:incoming>SequenceFlow_1bq1azi</bpmn:incoming>\n      <bpmn:outgoing>SequenceFlow_09hqjpg</bpmn:outgoing>\n    </bpmn:serviceTask>\n    <bpmn:serviceTask id="Task_1109y9g" name="Fetch Items">\n      <bpmn:extensionElements>\n        <zeebe:taskDefinition type="fetch-items" retries="3" />\n      </bpmn:extensionElements>\n      <bpmn:incoming>SequenceFlow_09hqjpg</bpmn:incoming>\n      <bpmn:outgoing>SequenceFlow_1ea1mpb</bpmn:outgoing>\n    </bpmn:serviceTask>\n    <bpmn:serviceTask id="Task_00moy91" name="Ship Parcel">\n      <bpmn:extensionElements>\n        <zeebe:taskDefinition type="ship-parcel" retries="3" />\n      </bpmn:extensionElements>\n      <bpmn:incoming>SequenceFlow_1ea1mpb</bpmn:incoming>\n      <bpmn:outgoing>SequenceFlow_0ojoaqz</bpmn:outgoing>\n    </bpmn:serviceTask>\n  </bpmn:process>\n  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">\n      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\n        <dc:Bounds x="191" y="102" width="36" height="36" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="175" y="138" width="68" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_1bq1azi_di" bpmnElement="SequenceFlow_1bq1azi">\n        <di:waypoint xsi:type="dc:Point" x="227" y="120" />\n        <di:waypoint xsi:type="dc:Point" x="280" y="120" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="253.5" y="99" width="0" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="SequenceFlow_09hqjpg_di" bpmnElement="SequenceFlow_09hqjpg">\n        <di:waypoint xsi:type="dc:Point" x="380" y="120" />\n        <di:waypoint xsi:type="dc:Point" x="440" y="120" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="410" y="99" width="0" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="SequenceFlow_1ea1mpb_di" bpmnElement="SequenceFlow_1ea1mpb">\n        <di:waypoint xsi:type="dc:Point" x="540" y="120" />\n        <di:waypoint xsi:type="dc:Point" x="596" y="120" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="568" y="99" width="0" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="EndEvent_0a27csw_di" bpmnElement="EndEvent_0a27csw">\n        <dc:Bounds x="756" y="102" width="36" height="36" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="734" y="142" width="81" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_0ojoaqz_di" bpmnElement="SequenceFlow_0ojoaqz">\n        <di:waypoint xsi:type="dc:Point" x="696" y="120" />\n        <di:waypoint xsi:type="dc:Point" x="756" y="120" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="726" y="99" width="0" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="ServiceTask_0lao700_di" bpmnElement="Task_1f47b9v">\n        <dc:Bounds x="280" y="80" width="100" height="80" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="ServiceTask_0eetpqx_di" bpmnElement="Task_1109y9g">\n        <dc:Bounds x="440" y="80" width="100" height="80" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="ServiceTask_09won99_di" bpmnElement="Task_00moy91">\n        <dc:Bounds x="596" y="80" width="100" height="80" />\n      </bpmndi:BPMNShape>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</bpmn:definitions>\n')))),(0,o.kt)("p",null,"This duality makes BPMN very powerful. The XML document contains all the necessary information to be interpreted by workflow engines and modeling tools like Zeebe. At the same time, the visual representation contains just enough information to be quickly understood by humans, even when they are non-technical people. The BPMN model is source code and documentation in one artifact."),(0,o.kt)("p",null,"The following is an introduction to BPMN 2.0, its elements and their execution semantics. It tries to briefly provide an intuitive understanding of BPMN's power but does not cover the entire feature set. For more exhaustive BPMN resources, see the ",(0,o.kt)("a",{parentName:"p",href:"#additional-resources"},"reference links")," at the end of this section."),(0,o.kt)("h2",{id:"modeling-bpmn-diagrams"},"Modeling BPMN diagrams"),(0,o.kt)("p",null,"The best tool for modeling BPMN diagrams for Zeebe is the ",(0,o.kt)("strong",{parentName:"p"},"Camunda Modeler"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"overview",src:t(2546).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://camunda.com/download/modeler/"},"Download page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/camunda/camunda-modeler"},"Source code repository"))),(0,o.kt)("h2",{id:"bpmn-elements"},"BPMN elements"),(0,o.kt)("h3",{id:"sequence-flow-controlling-the-flow-of-execution"},"Sequence flow: Controlling the flow of execution"),(0,o.kt)("p",null,"A core concept of BPMN is a ",(0,o.kt)("em",{parentName:"p"},"sequence flow")," that defines the order in which steps in the process happen. In BPMN's visual representation, a sequence flow is an arrow connecting two elements. The direction of the arrow indicates their order of execution."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(33124).Z})),(0,o.kt)("p",null,"You can think of process execution as tokens running through the process model. When a process is started, a token is spawned at the beginning of the model. It advances with every completed step. When the token reaches the end of the process, it is consumed and the process instance ends. Zeebe's task is to drive the token and to make sure that the job workers are invoked whenever necessary."),(0,o.kt)("center",null,(0,o.kt)(a.Z,{playing:!0,loop:!0,playsinline:!0,height:"200px",url:[{src:"/videos/sequenceflow.mp4",type:"video/mp4"}],mdxType:"ReactPlayer"})),(0,o.kt)("h3",{id:"tasks-units-of-work"},"Tasks: Units of work"),(0,o.kt)("p",null,"The basic elements of BPMN processes are ",(0,o.kt)("em",{parentName:"p"},"tasks"),", atomic units of work that are composed to create a meaningful result. Whenever a token reaches a task, the token stops and Zeebe creates a job and notifies a registered worker to perform work. When that handler signals completion, then the token continues on the outgoing sequence flow."),(0,o.kt)("center",null,(0,o.kt)(a.Z,{playing:!0,loop:!0,playsinline:!0,height:"300px",url:[{src:"/videos/tasks.mp4",type:"video/mp4"}],mdxType:"ReactPlayer"})),(0,o.kt)("p",null,"Choosing the granularity of a task is up to the person modeling the process. For example, the activity of processing an order can be modeled as a single ",(0,o.kt)("em",{parentName:"p"},"Process Order")," task, or as three individual tasks ",(0,o.kt)("em",{parentName:"p"},"Collect Money"),", ",(0,o.kt)("em",{parentName:"p"},"Fetch Items"),", ",(0,o.kt)("em",{parentName:"p"},"Ship Parcel"),". If you use Zeebe to orchestrate microservices, one task can represent one microservice invocation."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/bpmn-processes/tasks"},"Tasks")," section on which types of tasks are currently supported and how to use them."),(0,o.kt)("h3",{id:"gateways-steering-flow"},"Gateways: Steering flow"),(0,o.kt)("p",null,"Gateways are elements that route tokens in more complex patterns than plain sequence flow."),(0,o.kt)("p",null,"BPMN's ",(0,o.kt)("em",{parentName:"p"},"exclusive gateway")," chooses one sequence flow out of many based on data:"),(0,o.kt)("center",null,(0,o.kt)(a.Z,{playing:!0,loop:!0,playsinline:!0,height:"300px",url:[{src:"/videos/exclusive-gw.mp4",type:"video/mp4"}],mdxType:"ReactPlayer"})),(0,o.kt)("p",null,"BPMN's ",(0,o.kt)("em",{parentName:"p"},"parallel gateway")," generates new tokens by activating multiple sequence flows in parallel:"),(0,o.kt)("center",null,(0,o.kt)(a.Z,{playing:!0,loop:!0,playsinline:!0,height:"300px",url:[{src:"/videos/parallel-gw.mp4",type:"video/mp4"}],mdxType:"ReactPlayer"})),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/bpmn-processes/gateways"},"Gateways")," section on which types of gateways are currently supported and how to use them."),(0,o.kt)("h3",{id:"events-waiting-for-something-to-happen"},"Events: Waiting for something to happen"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Events")," in BPMN represent things that ",(0,o.kt)("em",{parentName:"p"},"happen"),". A process can react to events (",(0,o.kt)("em",{parentName:"p"},"catching")," event) as well as emit events (",(0,o.kt)("em",{parentName:"p"},"throwing")," event). For example:"),(0,o.kt)("center",null,(0,o.kt)(a.Z,{playing:!0,loop:!0,playsinline:!0,height:"300px",url:[{src:"/videos/catch-event.mp4",type:"video/mp4"}],mdxType:"ReactPlayer"})),(0,o.kt)("p",null,"The circle with the envelope symbol is a catching message event. It makes the token continue as soon as a message is received. The XML representation of the process contains the criteria for which kind of message triggers continuation."),(0,o.kt)("p",null,"Events can be added to the process in various ways. Not only can they be used to make a token wait at a certain point, but also for interrupting a token's progress."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/bpmn-processes/events"},"Events")," section on which types of events are currently supported and how to use them."),(0,o.kt)("h3",{id:"subprocesses-grouping-elements"},"Subprocesses: Grouping Elements"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Subprocesses")," are element containers that allow defining common functionality. For example, we can attach an event to a sub process's border:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"payload",src:t(35876).Z})),(0,o.kt)("p",null,"When the event is triggered, the sub process is interrupted regardless which of its elements is currently active."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/bpmn-processes/subprocesses"},"Subprocesses")," section on which types of subprocesses are currently supported and how to use them."),(0,o.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.bpmn.org/"},"BPMN specification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://camunda.com/bpmn/"},"BPMN tutorial")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://camunda.com/bpmn/reference/"},"Full BPMN reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.amazon.com/dp/1086302095/"},"BPMN book"))))}d.isMDXComponent=!0},2546:function(e,n,t){"use strict";n.Z=t.p+"assets/images/modeler-bf97529e3b2a51e4322d0fefe058ff64.gif"},26504:function(e,n){"use strict";n.Z="data:image/png;base64,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"},33124:function(e,n){"use strict";n.Z="data:image/png;base64,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"},35876:function(e,n,t){"use strict";n.Z=t.p+"assets/images/sub-process-a80e112996efab84b1061aea6720b11d.gif"}}]);