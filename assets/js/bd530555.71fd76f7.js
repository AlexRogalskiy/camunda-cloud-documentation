(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[1281],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31885:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={id:"basic-operate-navigation",title:"Getting familiar with Operate"},s={unversionedId:"product-manuals/operate/userguide/basic-operate-navigation",id:"version-1.0/product-manuals/operate/userguide/basic-operate-navigation",isDocsHomePage:!1,title:"Getting familiar with Operate",description:'This section "Getting familiar with Operate" and the next section \u201cVariables and incidents\u201d assumes that you\u2019ve deployed a process to Zeebe and have created at least one process instance.',source:"@site/versioned_docs/version-1.0/product-manuals/operate/userguide/basic-operate-navigation.md",sourceDirName:"product-manuals/operate/userguide",slug:"/product-manuals/operate/userguide/basic-operate-navigation",permalink:"/docs/1.0/product-manuals/operate/userguide/basic-operate-navigation",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/product-manuals/operate/userguide/basic-operate-navigation.md",version:"1.0",frontMatter:{id:"basic-operate-navigation",title:"Getting familiar with Operate"},sidebar:"version-1.0/Product Manuals",previous:{title:"Introduction",permalink:"/docs/1.0/product-manuals/operate/index"},next:{title:"Variables and incidents",permalink:"/docs/1.0/product-manuals/operate/userguide/resolve-incidents-update-variables"}},c=[{value:"View a deployed process",id:"view-a-deployed-process",children:[]},{value:"Inspect a process instance",id:"inspect-a-process-instance",children:[]}],p={toc:c};function u(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'This section "Getting familiar with Operate" and the next section \u201cVariables and incidents\u201d assumes that you\u2019ve deployed a process to Zeebe and have created at least one process instance. '),(0,o.kt)("p",null,"If you\u2019re not sure how to deploy processes or create instances, we recommend going through the ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.0/guides/getting-started/model-your-first-process"},"Getting started tutorial")),(0,o.kt)("p",null,"In the following sections, we\u2019ll use the same ",(0,o.kt)("inlineCode",{parentName:"p"},"order-process.bpmn")," process model from the Getting Started guide. "),(0,o.kt)("h2",{id:"view-a-deployed-process"},"View a deployed process"),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"Instances by Process")," panel in your dashboard, you should see a list of your deployed processes and running instances. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"operate-view-process",src:n(18418).Z})),(0,o.kt)("p",null,"When you click on the name of a deployed process in the ",(0,o.kt)("strong",{parentName:"p"},"Instances by Process")," panel, you\u2019ll navigate to a view of that process model along with all running instances."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"operate-view-process",src:n(88768).Z})),(0,o.kt)("p",null,"From this ",(0,o.kt)("strong",{parentName:"p"},"Running Instances")," view, you have the ability to cancel a single running process instance. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"operate-cancel-process-instance",src:n(21182).Z})),(0,o.kt)("h2",{id:"inspect-a-process-instance"},"Inspect a process instance"),(0,o.kt)("p",null,"Running process instances appear in the ",(0,o.kt)("strong",{parentName:"p"},"Instances")," section below the process model. To inspect a specific instance, you can click on the instance id. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"operate-inspect-instance",src:n(20127).Z})),(0,o.kt)("p",null,"There, you\u2019ll be able to see detail about the process instance, including the instance history and the variables attached to the instance. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"operate-view-instance-detail",src:n(96996).Z})))}u.isMDXComponent=!0},18418:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-introduction_light-19e756d8a6ba58dd73e70f3694ec72d1.png"},20127:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-process-instance-id_light-a6002702437b2114f9f670a792cbb4c4.png"},96996:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-view-instance-detail_light-c22ba285848222c9e1770f81bf70dd55.png"},21182:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-view-process-cancel_light-df10dc092f39be482c519da39626158a.png"},88768:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-view-process_light-711ef72ee5df97cb4705ee0b512946bb.png"}}]);