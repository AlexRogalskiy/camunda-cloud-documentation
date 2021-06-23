(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[11696],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85955:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={id:"resolve-incidents-update-variables",title:"Variables and incidents"},l={unversionedId:"product-manuals/operate/userguide/resolve-incidents-update-variables",id:"version-0.26/product-manuals/operate/userguide/resolve-incidents-update-variables",isDocsHomePage:!1,title:"Variables and incidents",description:"Every workflow instance created for the workflow model used in the Getting Started tutorial requires an orderValue so that the XOR gateway evaluation will happen properly.",source:"@site/versioned_docs/version-0.26/product-manuals/operate/userguide/resolve-incidents-update-variables.md",sourceDirName:"product-manuals/operate/userguide",slug:"/product-manuals/operate/userguide/resolve-incidents-update-variables",permalink:"/docs/0.26/product-manuals/operate/userguide/resolve-incidents-update-variables",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/operate/userguide/resolve-incidents-update-variables.md",version:"0.26",frontMatter:{id:"resolve-incidents-update-variables",title:"Variables and incidents"},sidebar:"version-0.26/Product Manuals",previous:{title:"Getting familiar with Operate",permalink:"/docs/0.26/product-manuals/operate/userguide/basic-operate-navigation"},next:{title:"Selections and operations",permalink:"/docs/0.26/product-manuals/operate/userguide/selections-operations"}},s=[],c={toc:s};function p(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Every workflow instance created for the workflow model used in the Getting Started tutorial requires an ",(0,i.kt)("inlineCode",{parentName:"p"},"orderValue")," so that the XOR gateway evaluation will happen properly. "),(0,i.kt)("p",null,"Let\u2019s look at a case where ",(0,i.kt)("inlineCode",{parentName:"p"},"orderValue")," is present but was set as a string, but our ",(0,i.kt)("inlineCode",{parentName:"p"},"order-process.bpmn")," model requires an integer in order to properly evaluate the ",(0,i.kt)("inlineCode",{parentName:"p"},"orderValue")," and route the instance. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Linux")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'./bin/zbctl --insecure create instance order-process --variables \'{"orderId": "1234", "orderValue":"99"}\'\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mac")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'./bin/zbctl.darwin --insecure create instance order-process --variables \'{"orderId": "1234", "orderValue":"99"}\'\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Windows (Powershell)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'./bin/zbctl.exe --insecure create instance order-process --variables \'{\\"orderId\\": \\"1234\\", \\\n"orderValue\\": \\"99\\"}\'\n')),(0,i.kt)("p",null,"To advance the instance to our XOR gateway, we\u2019ll quickly create a job worker to complete the ",(0,i.kt)("inlineCode",{parentName:"p"},"Initiate Payment")," task: "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Linux")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./bin/zbctl --insecure create worker initiate-payment --handler cat\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mac")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./bin/zbctl.darwin --insecure create worker initiate-payment --handler cat\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Windows (Powershell)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'./bin/zbctl.exe --insecure create worker initiate-payment --handler "findstr .*"\n')),(0,i.kt)("p",null,"And we\u2019ll publish a message that will be correlated with the instance so we can advance past the ",(0,i.kt)("inlineCode",{parentName:"p"},"Payment Received")," intermediate message catch event: "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Linux")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'./bin/zbctl --insecure publish message "payment-received" --correlationKey="1234"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mac")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'./bin/zbctl.darwin --insecure publish message "payment-received" --correlationKey="1234"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Windows (Powershell)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'./bin/zbctl.exe --insecure publish message "payment-received" --correlationKey="1234"\n')),(0,i.kt)("p",null,"In the Operate interface, you should now see that the workflow instance has an "," incident, which means there\u2019s a problem with workflow execution that needs to be fixed before the workflow instance can progress to the next step. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"operate-incident-workflow-view",src:n(89476).Z})),(0,i.kt)("p",null,"Operate provides tools for diagnosing and resolving incidents. Let\u2019s go through incident diagnosis and resolution step-by-step. "),(0,i.kt)("p",null,"When we inspect the workflow instance, we can see exactly what our incident is: ",(0,i.kt)("inlineCode",{parentName:"p"},"Expected to evaluate condition 'orderValue>=100' successfully, but failed because: Cannot compare values of different types: STRING and INTEGER")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"operate-incident-instance-view",src:n(71896).Z})),(0,i.kt)("p",null,"We have enough information to know that to resolve this incident, we need to edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"orderValue")," variable so that it\u2019s an integer. To do so, first click on the edit icon next to the variable you\u2019d like to edit. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"operate-incident-edit-variable",src:n(37141).Z})),(0,i.kt)("p",null,"Next, edit the variable by removing the quotation marks from the ",(0,i.kt)("inlineCode",{parentName:"p"},"orderValue")," value. Then click on the checkmark icon to save the change. "),(0,i.kt)("p",null,"We were able to solve this particular problem by ",(0,i.kt)("em",{parentName:"p"},"editing")," a variable, but it\u2019s worth noting that you can also ",(0,i.kt)("em",{parentName:"p"},"add")," a variable if a variable is missing from a workflow instance altogether. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"operate-incident-save-variable-edit",src:n(87044).Z})),(0,i.kt)("p",null,"There\u2019s one last step we need to take: initiating a \u201cretry\u201d of the workflow instance. There are two places on the workflow instance page where you can initiate a retry:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"operate-retry-instance",src:n(71593).Z})),(0,i.kt)("p",null,"You should now see that the incident has been resolved, and the workflow instance has progressed to the next step. Well done! "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"operate-incident-resolved-instance-view",src:n(91446).Z})),(0,i.kt)("p",null,"If you\u2019d like to complete the workflow instance, you can create a worker for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ship Without Insurance")," task: "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Linux")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./bin/zbctl --insecure create worker ship-without-insurance --handler cat\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mac")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./bin/zbctl.darwin --insecure create worker ship-without-insurance --handler cat\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Windows (Powershell)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'./bin/zbctl.exe --insecure create worker ship-without-insurance --handler "findstr .*"\n')),(0,i.kt)("p",null,"The completed workflow instance with the path taken:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"operate-incident-resolved-path-view",src:n(43748).Z})))}p.isMDXComponent=!0},43748:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-incident-resolved-path_light-4917288a94ae5b5d721d8b3471e497ba.png"},91446:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-incident-resolved_light-a4fec00de7d7893a2bca9142d221b508.png"},37141:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-view-instance-edit-icon_light-83b04d29710d119ad9e0c3989aa9f416.png"},71896:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-view-instance-incident_light-cde1e490f7afde0af4c295c1845ff252.png"},87044:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-view-instance-save-var-edit_light-dbb16b38594f56face3d2ba41f622c50.png"},71593:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-workflow-retry-incident_light-de1fd6d20e757205f8899cc572c33c2c.png"},89476:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-workflow-view-incident_light-06ade37b588a57b9197cca3f01266178.png"}}]);