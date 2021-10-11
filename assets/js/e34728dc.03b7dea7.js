(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[33241],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=s,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(k,i(i({ref:t},l),{},{components:n})):r.createElement(k,i({ref:t},l))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30658:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(22122),s=n(19756),a=(n(67294),n(3905)),i={id:"service-tasks",title:"Service tasks"},o=void 0,c={unversionedId:"reference/bpmn-processes/service-tasks/service-tasks",id:"reference/bpmn-processes/service-tasks/service-tasks",isDocsHomePage:!1,title:"Service tasks",description:"A service task represents a work item in the process with a specific type.",source:"@site/docs/reference/bpmn-processes/service-tasks/service-tasks.md",sourceDirName:"reference/bpmn-processes/service-tasks",slug:"/reference/bpmn-processes/service-tasks/service-tasks",permalink:"/docs/reference/bpmn-processes/service-tasks/service-tasks",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/bpmn-processes/service-tasks/service-tasks.md",version:"current",frontMatter:{id:"service-tasks",title:"Service tasks"},sidebar:"Reference",previous:{title:"Overview",permalink:"/docs/reference/bpmn-processes/tasks"},next:{title:"User tasks",permalink:"/docs/reference/bpmn-processes/user-tasks/user-tasks"}},p=[{value:"Task definition",id:"task-definition",children:[]},{value:"Task headers",id:"task-headers",children:[]},{value:"Variable mappings",id:"variable-mappings",children:[]},{value:"Additional resources",id:"additional-resources",children:[{value:"XML representation",id:"xml-representation",children:[]}]},{value:"Next steps",id:"next-steps",children:[{value:"References",id:"references",children:[]}]}],l={toc:p};function u(e){var t=e.components,i=(0,s.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A service task represents a work item in the process with a specific type."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"process",src:n(31145).Z})),(0,a.kt)("p",null,"When a service task is entered, a corresponding job is created. The process instance stops here and waits until the job is complete."),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/docs/components/concepts/job-workers"},"job worker")," can subscribe to the job type, process the jobs, and complete them using one of the Zeebe clients. When the job is complete, the service task is completed and the process instance continues."),(0,a.kt)("h2",{id:"task-definition"},"Task definition"),(0,a.kt)("p",null,"A service task must have a ",(0,a.kt)("inlineCode",{parentName:"p"},"taskDefinition"),". This specifies the type of job workers can subscribe to."),(0,a.kt)("p",null,"Optionally, a ",(0,a.kt)("inlineCode",{parentName:"p"},"taskDefinition")," can specify the number of times the job is retried when a worker signals failure (default = 3)."),(0,a.kt)("p",null,"Typically, the job type and the job retries are defined as static values (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"order-items"),") but they can also be defined as ",(0,a.kt)("a",{parentName:"p",href:"/docs/components/concepts/expressions"},"expressions")," (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},'= "order-" + priorityGroup'),"). The expressions are evaluated on activating the service task and must result in a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," for the job type and a ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," for the retries."),(0,a.kt)("h2",{id:"task-headers"},"Task headers"),(0,a.kt)("p",null,"A service task can define an arbitrary number of ",(0,a.kt)("inlineCode",{parentName:"p"},"taskHeaders"),". They are static metadata handed to workers along with the job. The headers can be used as configuration parameters for the worker."),(0,a.kt)("h2",{id:"variable-mappings"},"Variable mappings"),(0,a.kt)("p",null,"By default, all job variables merge into the process instance. This behavior can be customized by defining an output mapping at the service task."),(0,a.kt)("p",null,"Input mappings can be used to transform the variables into a format accepted by the job worker."),(0,a.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,a.kt)("h3",{id:"xml-representation"},"XML representation"),(0,a.kt)("p",null,"A service task with a custom header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:serviceTask id="collect-money" name="Collect Money">\n  <bpmn:extensionElements>\n    <zeebe:taskDefinition type="payment-service" retries="5" />\n    <zeebe:taskHeaders>\n      <zeebe:header key="method" value="VISA" />\n    </zeebe:taskHeaders>\n  </bpmn:extensionElements>\n</bpmn:serviceTask>\n')),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"Learn more about the concept of job types and how to set up a job worker via our ",(0,a.kt)("a",{parentName:"p",href:"/docs/components/concepts/job-workers"},"manual on job workers"),"."),(0,a.kt)("h3",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/components/concepts/job-workers"},"Job handling")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/components/concepts/expressions"},"Expressions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/components/concepts/variables#inputoutput-variable-mappings"},"Variable mappings")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/components/concepts/incidents"},"Incidents"))))}u.isMDXComponent=!0},31145:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);