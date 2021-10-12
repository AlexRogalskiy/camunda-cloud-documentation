(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[95122],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},A=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),A=p(n),d=a,m=A["".concat(s,".").concat(d)]||A[d]||u[d]||l;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=A;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}A.displayName="MDXCreateElement"},16848:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var i=n(22122),a=n(19756),l=(n(67294),n(3905)),r={id:"multi-instance",title:"Multi-Instance"},o=void 0,s={unversionedId:"reference/bpmn-processes/multi-instance/multi-instance",id:"version-1.1/reference/bpmn-processes/multi-instance/multi-instance",isDocsHomePage:!1,title:"Multi-Instance",description:"A multi-instance activity is executed multiple times - once for each element of a given collection (like a foreach loop in a programming language).",source:"@site/versioned_docs/version-1.1/reference/bpmn-processes/multi-instance/multi-instance.md",sourceDirName:"reference/bpmn-processes/multi-instance",slug:"/reference/bpmn-processes/multi-instance/multi-instance",permalink:"/docs/1.1/reference/bpmn-processes/multi-instance/multi-instance",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.1/reference/bpmn-processes/multi-instance/multi-instance.md",version:"1.1",frontMatter:{id:"multi-instance",title:"Multi-Instance"},sidebar:"version-1.1/Reference",previous:{title:"Overview",permalink:"/docs/1.1/reference/bpmn-processes/markers"},next:{title:"What is FEEL?",permalink:"/docs/1.1/reference/feel/what-is-feel"}},p=[{value:"Sequential vs. parallel",id:"sequential-vs-parallel",children:[]},{value:"Defining the collection to iterate over",id:"defining-the-collection-to-iterate-over",children:[]},{value:"Collecting the output",id:"collecting-the-output",children:[]},{value:"Boundary events",id:"boundary-events",children:[]},{value:"Special multi-instance variables",id:"special-multi-instance-variables",children:[]},{value:"Variable mappings",id:"variable-mappings",children:[]},{value:"Additional resources",id:"additional-resources",children:[{value:"XML representation",id:"xml-representation",children:[]},{value:"References",id:"references",children:[]}]}],c={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A multi-instance activity is executed multiple times - once for each element of a given collection (like a ",(0,l.kt)("em",{parentName:"p"},"foreach")," loop in a programming language)."),(0,l.kt)("p",null,"The following activities can be marked as multi-instance:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.1/reference/bpmn-processes/service-tasks/service-tasks"},"Service tasks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.1/reference/bpmn-processes/receive-tasks/receive-tasks"},"Receive tasks")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.1/reference/bpmn-processes/embedded-subprocesses/embedded-subprocesses"},"Embedded subprocesses")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.1/reference/bpmn-processes/call-activities/call-activities"},"Call activities"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"multi-instance",src:n(75709).Z})),(0,l.kt)("p",null,"On the execution level, a multi-instance activity has two parts: a multi-instance body, and an inner activity. The multi-instance body is the container for all instances of the inner activity."),(0,l.kt)("p",null,"When the activity is entered, the multi-instance body is activated and one instance for every element of the ",(0,l.kt)("inlineCode",{parentName:"p"},"inputCollection")," is created (sequentially or in parallel). When all instances are completed, the body is completed and the activity is left."),(0,l.kt)("h2",{id:"sequential-vs-parallel"},"Sequential vs. parallel"),(0,l.kt)("p",null,"A multi-instance activity is executed either sequentially or in parallel (default). In the BPMN, a sequential multi-instance activity is displayed with three horizontal lines at the bottom. A parallel one with three vertical lines."),(0,l.kt)("p",null,"In case of a ",(0,l.kt)("strong",{parentName:"p"},"sequential")," multi-instance activity, the instances are executed one-by-one. When one instance is completed, a new instance is created for the next element in the ",(0,l.kt)("inlineCode",{parentName:"p"},"inputCollection"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"sequential multi-instance",src:n(62208).Z})),(0,l.kt)("p",null,"In case of a ",(0,l.kt)("strong",{parentName:"p"},"parallel")," multi-instance activity, all instances are created when the multi-instance body is activated. The instances are executed concurrently and independently from each other."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"parallel multi-instance",src:n(55696).Z})),(0,l.kt)("h2",{id:"defining-the-collection-to-iterate-over"},"Defining the collection to iterate over"),(0,l.kt)("p",null,"A multi-instance activity must have an ",(0,l.kt)("inlineCode",{parentName:"p"},"inputCollection")," expression that defines the collection to iterate over (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"= items"),"). Usually, it ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.1/components/concepts/expressions#access-variables"},"accesses a variable")," of the process instance that holds the collection. The expression is evaluated on activating the multi-instance body. It must result in an ",(0,l.kt)("inlineCode",{parentName:"p"},"array")," of any type (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},'["item-1", "item-2"]'),")."),(0,l.kt)("p",null,"To access the current element of the ",(0,l.kt)("inlineCode",{parentName:"p"},"inputCollection")," value within the instance, the multi-instance activity can define the ",(0,l.kt)("inlineCode",{parentName:"p"},"inputElement")," variable (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"item"),"). The element is stored as a local variable of the instance under the given name."),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"inputCollection")," value is ",(0,l.kt)("strong",{parentName:"p"},"empty"),", the multi-instance body is completed immediately and no instances are created. It behaves like the activity is skipped."),(0,l.kt)("h2",{id:"collecting-the-output"},"Collecting the output"),(0,l.kt)("p",null,"The output of a multi-instance activity (e.g. the result of a calculation) can be collected from the instances by defining the ",(0,l.kt)("inlineCode",{parentName:"p"},"outputCollection")," and the ",(0,l.kt)("inlineCode",{parentName:"p"},"outputElement")," expression."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"outputCollection")," defines the name of the variable under which the collected output is stored (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"results"),"). It is created as a local variable of the multi-instance body and is updated when an instance is completed. When the multi-instance body is completed, the variable is propagated to its parent scope."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"outputElement")," is an expression that defines the output of the instance (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"= result"),"). Usually, it ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.1/components/concepts/expressions#access-variables"},"accesses a variable")," of the instance that holds the output value. If the expression only accesses a variable or a nested property, it's created as a ",(0,l.kt)("strong",{parentName:"p"},"local variable")," of the instance. This variable should be updated with the output value; for example, by a job worker providing a variable with the name ",(0,l.kt)("inlineCode",{parentName:"p"},"result"),". Since the variable is defined as a local variable, it is not propagated to its parent scope and is only visible within the instance."),(0,l.kt)("p",null,"When the instance is completed, the ",(0,l.kt)("inlineCode",{parentName:"p"},"outputElement")," expression is evaluated and the result is inserted into the ",(0,l.kt)("inlineCode",{parentName:"p"},"outputCollection")," at the same index as the ",(0,l.kt)("inlineCode",{parentName:"p"},"inputElement")," of the ",(0,l.kt)("inlineCode",{parentName:"p"},"inputCollection"),". Therefore, the order of the ",(0,l.kt)("inlineCode",{parentName:"p"},"outputCollection")," is determined and matches to the ",(0,l.kt)("inlineCode",{parentName:"p"},"inputCollection"),", even for parallel multi-instance activities. If the ",(0,l.kt)("inlineCode",{parentName:"p"},"outputElement")," variable is not updated, ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," is inserted instead."),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"inputCollection")," value is empty, an empty array is propagated as ",(0,l.kt)("inlineCode",{parentName:"p"},"outputCollection"),"."),(0,l.kt)("h2",{id:"boundary-events"},"Boundary events"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"multi-instance with boundary event",src:n(12796).Z})),(0,l.kt)("p",null,"Interrupting and non-interrupting boundary events can be attached to a multi-instance activity."),(0,l.kt)("p",null,"When an interrupting boundary event is triggered, the multi-instance body and all active instances are terminated. The ",(0,l.kt)("inlineCode",{parentName:"p"},"outputCollection")," variable is not propagated to the parent scope (i.e. no partial output)."),(0,l.kt)("p",null,"When a non-interrupting boundary event is triggered, the instances are not affected. The activities at the outgoing path have no access to the local variables since they are bound to the multi-instance activity."),(0,l.kt)("h2",{id:"special-multi-instance-variables"},"Special multi-instance variables"),(0,l.kt)("p",null,"Every instance has a local variable ",(0,l.kt)("inlineCode",{parentName:"p"},"loopCounter"),". It holds the index in the ",(0,l.kt)("inlineCode",{parentName:"p"},"inputCollection")," of this instance, starting with ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,l.kt)("h2",{id:"variable-mappings"},"Variable mappings"),(0,l.kt)("p",null,"Input and output variable mappings can be defined at the multi-instance activity; they are applied on each instance on activating and on completing."),(0,l.kt)("p",null,"The input mappings can be used to create new local variables in the scope of an instance. These variables are only visible within the instance. It is a way to restrict the visibility of variables. By default, new variables (e.g. provided by a job worker) are created in the scope of the process instance and are visible to all instances of the multi-instance activity as well as outside of it. "),(0,l.kt)("p",null,"In case of a parallel multi-instance activity, this can lead to variables that are modified by multiple instances and result in race conditions. If a variable is defined as a local variable, it is not propagated to a parent or the process instance scope and can't be modified outside the instance."),(0,l.kt)("p",null,"The input mappings can access the local variables of the instance (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"inputElement"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"loopCounter"),"); for example, to extract parts of the ",(0,l.kt)("inlineCode",{parentName:"p"},"inputElement")," variable and apply them to separate variables."),(0,l.kt)("p",null,"The output mappings can be used to update the ",(0,l.kt)("inlineCode",{parentName:"p"},"outputElement")," variable; for example, to extract a part of the job variables."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example:")," We have a call activity marked as a parallel multi-instance. When the called process instance completes, its variables are ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.1/components/concepts/variables#variable-propagation"},"merged")," into the call activity's process instance. Its result is collected in the output collection variable, but this has become a race condition where each completed child instance again overwrites this same variable. We end up with a corrupted output collection. An output mapping can be used to overcome this, because it restricts which variables are merged. In the case of:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parallel multi-instance call activity"),(0,l.kt)("li",{parentName:"ul"},"Multi-instance output element: ",(0,l.kt)("inlineCode",{parentName:"li"},"=output")),(0,l.kt)("li",{parentName:"ul"},"Variable in the child instance that holds the result: ",(0,l.kt)("inlineCode",{parentName:"li"},"x"))),(0,l.kt)("p",null,"The output mapping on the call activity should be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"source: =x\ntarget: output\n")),(0,l.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,l.kt)("h3",{id:"xml-representation"},"XML representation"),(0,l.kt)("p",null,"A sequential multi-instance service task:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:serviceTask id="task-A" name="A">\n  <bpmn:multiInstanceLoopCharacteristics isSequential="true">\n    <bpmn:extensionElements>\n      <zeebe:loopCharacteristics \n          inputCollection="= items" inputElement="item"\n          outputCollection="results" outputElement="= result" />\n    </bpmn:extensionElements>\n  </bpmn:multiInstanceLoopCharacteristics>\n</bpmn:serviceTask>\n')),(0,l.kt)("h3",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.1/components/concepts/variables#variable-scopes"},"Variable scopes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.1/components/concepts/expressions"},"Expressions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.1/components/concepts/variables#inputoutput-variable-mappings"},"Variable mappings"))))}u.isMDXComponent=!0},12796:function(e,t){"use strict";t.Z="data:image/png;base64,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"},75709:function(e,t){"use strict";t.Z="data:image/png;base64,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"},55696:function(e,t,n){"use strict";t.Z=n.p+"assets/images/multi-instance-parallel-cc96bfdf085e588a7645940d4625fa79.png"},62208:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjQAAABsCAYAAAB9ySiwAAAeC0lEQVR42u2dCbSNdffHb2u9xYpKJA0UiooMoTQJTVQKKalIgzlSqVSmQkJlzpCSWeZMJTJlyJwyZYgkVFSE0GD//5/9rse6r7d1X/c51733Oef7Xeu3cC7WOc/Zz96fPfx+T5JJkiRJkiRFXEm6BJIkSZIkCWgkSZIkSZIENJIkSZIkSQIaSZIkSZIENJIkSZIkSQIaSZIkSZIkAY0kSZIkSZKARpIkSZIkAY0kSZIkSZKARpIkSZIkKd6A5s8//7T9+/fbzz//bD/++KPt3LnTduzYoRVycf24jnv27LHffvvNjhw5YkePHpX1SlIycU/gew4ePGi//vqr/fTTT7Zr1y75kBh9zw8//GC7d++2vXv32qFDh+yvv/6KezviM/7+++9uR3x27EhxLLbFNeRack25tlzjtI5jaQo0OBOcyLx586xdu3Z25513WpEiRSxnzpx2+umna4VcXL/ChQvbbbfdZs8995xNnTrVvvvuOzt8+LDARpL+XzhHHOWyZcusR48eVqtWLStdurSdf/75lj17dvmRkCtHjhyWP39+u/HGG61hw4Y2bNgwW79+vSesf//9d1zaEeC2atUqGzBggNWtW9fKli1refPmtTPOOEM2EXKdeeaZdtFFF9m1115rjz32mL3zzjv21Vdf2b59+9LUjtIMaAiuS5cutdq1a9tZZ53lToRAfO6557ox8GG0wi2u33nnnWe5cuVyw+DGqlKlik2bNs1vvnh0LJJ0otk0Fcu1a9fayy+/bIUKFfL7g0CM77nwwgstX7588iMhF9cOKDznnHPcr3Ntr7vuOuvfv78nVSSx8WRHGzdutM6dO1vx4sWP2VHu3LntggsukB3FaEdcQ64l15RrW7JkSXvjjTfsm2++STM7ShOgoXw0ffp0K1q0qGXNmtVvgHvuucdef/11++ijj9zwIfoDBw5ohViU6+bOnWs9e/a0Bx980C655BKn3oIFC9qgQYO8jCeokRIRZmiBfP7553bvvfd6AoXDrFChgr344os2ZswYW7dunf3yyy/yIyEXrW4SVfxM48aN7aqrrvKARHACIDds2GB//PFH5O2IhHzFihVWr149B2GSx+uvv96eeeYZGzFihH355Zc+QiGbCLeIUV988YVX+Jo3b+6VmqDg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"}}]);