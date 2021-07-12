(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[90224],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=s.createContext({}),c=function(e){var t=s.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return s.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,k=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return a?s.createElement(k,l(l({ref:t},u),{},{components:a})):s.createElement(k,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var c=2;c<i;c++)l[c]=a[c];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}p.displayName="MDXCreateElement"},74266:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return o},toc:function(){return c},default:function(){return d}});var s=a(22122),n=a(19756),i=(a(67294),a(3905)),l={id:"overview",title:"Overview and example use case"},r=void 0,o={unversionedId:"product-manuals/tasklist/userguide/overview",id:"version-1.0/product-manuals/tasklist/userguide/overview",isDocsHomePage:!1,title:"Overview and example use case",description:"What can I do with Tasklist?",source:"@site/versioned_docs/version-1.0/product-manuals/tasklist/userguide/overview.md",sourceDirName:"product-manuals/tasklist/userguide",slug:"/product-manuals/tasklist/userguide/overview",permalink:"/docs/1.0/product-manuals/tasklist/userguide/overview",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/product-manuals/tasklist/userguide/overview.md",version:"1.0",frontMatter:{id:"overview",title:"Overview and example use case"},sidebar:"version-1.0/Product Manuals",previous:{title:"Introduction",permalink:"/docs/1.0/product-manuals/tasklist/introduction"},next:{title:"Camunda Forms",permalink:"/docs/1.0/product-manuals/tasklist/userguide/camunda-forms"}},c=[{value:"What can I do with Tasklist?",id:"what-can-i-do-with-tasklist",children:[]},{value:"Example use case",id:"example-use-case",children:[{value:"Claimed by me tasks",id:"claimed-by-me-tasks",children:[]},{value:"Claim a task",id:"claim-a-task",children:[]},{value:"Complete a task",id:"complete-a-task",children:[]},{value:"Completed tasks",id:"completed-tasks",children:[]}]}],u={toc:c};function d(e){var t=e.components,l=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,s.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-can-i-do-with-tasklist"},"What can I do with Tasklist?"),(0,i.kt)("p",null,"Tasklist shows you all user tasks that appeared in processes. Those processes are running in Zeebe."),(0,i.kt)("p",null,"User tasks needs an interaction from the user - that can be updating, adding variables, filling out a Camunda Form or just completion of the task. The user needs to claim a task first or even unclaim an already claimed task.\nIf the user has claimed a task, then the task is completable. Different task status filters help the user\nto choose the desired task."),(0,i.kt)("h2",{id:"example-use-case"},"Example use case"),(0,i.kt)("p",null,"If you have successfully logged in you can see a screen like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tasklist-start-screen",src:a(1571).Z})),(0,i.kt)("p",null,"On the left side you can see tasks and on the right side details of the current selected task.\nYou can change the list of tasks by applying filters. You can collapse and expand the task list."),(0,i.kt)("p",null,"You can choose which tasks you want to see: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All open"),(0,i.kt)("li",{parentName:"ul"},"Claimed by me"),(0,i.kt)("li",{parentName:"ul"},"Unclaimed"),(0,i.kt)("li",{parentName:"ul"},"Completed")),(0,i.kt)("p",null,"At the begin we have no ",(0,i.kt)("strong",{parentName:"p"},"Claimed by me")," tasks."),(0,i.kt)("h3",{id:"claimed-by-me-tasks"},"Claimed by me tasks"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tasklist-claimed-by-me-empty",src:a(32110).Z})),(0,i.kt)("p",null,"We select the ",(0,i.kt)("strong",{parentName:"p"},"Unclaimed")," list and claim a task by using the ",(0,i.kt)("strong",{parentName:"p"},"Claim")," button on the details panel:"),(0,i.kt)("h3",{id:"claim-a-task"},"Claim a task"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tasklist-claim",src:a(39067).Z})),(0,i.kt)("p",null,"Now select the ",(0,i.kt)("strong",{parentName:"p"},"Claimed by me")," list to see whether you have the task claimed:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tasklist-claimed-by-me-list",src:a(88320).Z})),(0,i.kt)("h3",{id:"complete-a-task"},"Complete a task"),(0,i.kt)("p",null,"Only then you can complete the task by adding and updating variables and finally using the ",(0,i.kt)("strong",{parentName:"p"},"Complete Task")," button:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tasklist-claimed-by-me",src:a(38242).Z})),(0,i.kt)("p",null,"You always choose a list of tasks with a specified status and then select the task you want to work on."),(0,i.kt)("p",null,"Now we complete the task and check if it will be shown in ",(0,i.kt)("strong",{parentName:"p"},"Completed")," list.\nChange and variables as needed and start the completion with ",(0,i.kt)("strong",{parentName:"p"},"Complete Task"),"."),(0,i.kt)("h4",{id:"add-and-update-variables"},"Add and update variables"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tasklist-complete-task",src:a(50911).Z})),(0,i.kt)("h3",{id:"completed-tasks"},"Completed tasks"),(0,i.kt)("p",null,"If everything went fine you can see the completed task by selecting the ",(0,i.kt)("strong",{parentName:"p"},"Completed")," task list:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tasklist-task-completed",src:a(29941).Z})))}d.isMDXComponent=!0},1571:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tasklist-start-screen_light-e6301164c2a7f1eb8eb52c5487117e9c.png"},39067:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tasklist-claim_light-aca309e617baabf3277c3d3acc93dcce.png"},32110:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tasklist-claimed-by-me-empty_light-1afdaf675b1a798339cb2e9baa0f75b3.png"},88320:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tasklist-claimed-by-me-list_light-673b93b3bb206488efebec0760a93a7b.png"},38242:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tasklist-claimed-by-me_light-810a51d1cfeae590282f6fe5ff8be15b.png"},50911:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tasklist-complete-task_light-9bc794094878732aafaa7bd6d26600c7.png"},29941:function(e,t,a){"use strict";t.Z=a.p+"assets/images/tasklist-task-completed_light-9fb1f805af6ca2640aad40385263d3c1.png"}}]);