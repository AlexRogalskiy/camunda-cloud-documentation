(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[39374],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(n),b=s,m=p["".concat(u,".").concat(b)]||p[b]||i[b]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,l=new Array(o);l[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:s,l[1]=a;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},28469:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return d},default:function(){return i}});var r=n(22122),s=n(19756),o=(n(67294),n(3905)),l={id:"embedded-subprocesses",title:"Embedded Subprocess"},a=void 0,u={unversionedId:"product-manuals/zeebe/bpmn-workflows/embedded-subprocesses/embedded-subprocesses",id:"version-0.25/product-manuals/zeebe/bpmn-workflows/embedded-subprocesses/embedded-subprocesses",isDocsHomePage:!1,title:"Embedded Subprocess",description:"An embedded subprocess allows to group elements of the workflow.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/bpmn-workflows/embedded-subprocesses/embedded-subprocesses.md",sourceDirName:"product-manuals/zeebe/bpmn-workflows/embedded-subprocesses",slug:"/product-manuals/zeebe/bpmn-workflows/embedded-subprocesses/embedded-subprocesses",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/embedded-subprocesses/embedded-subprocesses",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/bpmn-workflows/embedded-subprocesses/embedded-subprocesses.md",version:"0.25",frontMatter:{id:"embedded-subprocesses",title:"Embedded Subprocess"},sidebar:"version-0.25/Product Manuals",previous:{title:"Overview",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/subprocesses"},next:{title:"Call Activities",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/call-activities/call-activities"}},d=[{value:"Variable Mappings",id:"variable-mappings",children:[]},{value:"Additional Resources",id:"additional-resources",children:[]}],c={toc:d};function i(e){var t=e.components,l=(0,s.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An embedded subprocess allows to group elements of the workflow."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"embedded-subprocess",src:n(10926).Z})),(0,o.kt)("p",null,"An embedded subprocess must have exactly one none start event. Other start events are not allowed.  "),(0,o.kt)("p",null,"When an embedded subprocess is entered then the start event gets activated. The subprocess stays active as long as one containing element is active. When the last element is completed then the subprocess gets completed and the outgoing sequence flow is taken."),(0,o.kt)("p",null,"Embedded subprocesses are often used together with ",(0,o.kt)("strong",{parentName:"p"},"boundary events"),". One or more boundary events can be attached to an subprocess. When an interrupting boundary event is triggered then the whole subprocess including all active elements gets terminated. "),(0,o.kt)("h2",{id:"variable-mappings"},"Variable Mappings"),(0,o.kt)("p",null,"Input mappings can be used to create new local variables in the scope of the subprocess. These variables are only visible within the subprocess."),(0,o.kt)("p",null,"By default, the local variables of the subprocess are not propagated (i.e. they are removed with the scope). This behavior can be customized by defining output mappings at the subprocess. The output mappings are applied on completing the subprocess."),(0,o.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"XML representation"),(0,o.kt)("p",null,"An embedded subprocess with a start event:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:subProcess id="process-order" name="Process Order">\n  <bpmn:startEvent id="order-placed" />\n  ... more contained elements ...\n</bpmn:subProcess>\n')))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Using the BPMN modeler"),(0,o.kt)("p",null,"Adding an embedded subprocess:",(0,o.kt)("p",null,(0,o.kt)("img",{alt:"event-based-gateway",src:n(16666).Z})," "))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Workflow Lifecycle"),(0,o.kt)("p",null,"Workflow instance records of an embedded subprocess:",(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Intent"),(0,o.kt)("th",null,"Element Id"),(0,o.kt)("th",null,"Element Type")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"ELEMENT_ACTIVATING"),(0,o.kt)("td",null,"process-order"),(0,o.kt)("td",null,"SUB_PROCESS")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"ELEMENT_ACTIVATED"),(0,o.kt)("td",null,"process-order"),(0,o.kt)("td",null,"SUB_PROCESS")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"ELEMENT_ACTIVATING"),(0,o.kt)("td",null,"order-placed"),(0,o.kt)("td",null,"START_EVENT")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"..."),(0,o.kt)("td",null,"..."),(0,o.kt)("td",null,"...")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"ELEMENT_COMPLETED"),(0,o.kt)("td",null,"items-fetched"),(0,o.kt)("td",null,"END_EVENT")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"ELEMENT_COMPLETING"),(0,o.kt)("td",null,"process-order"),(0,o.kt)("td",null,"SUB_PROCESS")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"ELEMENT_COMPLETED"),(0,o.kt)("td",null,"process-order"),(0,o.kt)("td",null,"SUB_PROCESS"))))),(0,o.kt)("p",null,"References:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.25/product-manuals/zeebe/reference/variables#inputoutput-variable-mappings"},"Variable Mappings"))))}i.isMDXComponent=!0},16666:function(e,t,n){"use strict";t.Z=n.p+"assets/images/embedded-subprocess-5908fdc9ecad970be2e7af35b6039fa5.gif"},10926:function(e,t,n){"use strict";t.Z=n.p+"assets/images/embedded-subprocess-8fd375199fd19cefe18281ecda0759b6.png"}}]);