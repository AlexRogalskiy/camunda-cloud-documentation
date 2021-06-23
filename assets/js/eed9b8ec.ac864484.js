(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[70256],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22080:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d},default:function(){return s}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={id:"data-retention",title:"Data retention"},l={unversionedId:"product-manuals/operate/deployment/data-retention",id:"version-0.26/product-manuals/operate/deployment/data-retention",isDocsHomePage:!1,title:"Data retention",description:"How the data is stored and archived",source:"@site/versioned_docs/version-0.26/product-manuals/operate/deployment/data-retention.md",sourceDirName:"product-manuals/operate/deployment",slug:"/product-manuals/operate/deployment/data-retention",permalink:"/docs/0.26/product-manuals/operate/deployment/data-retention",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/operate/deployment/data-retention.md",version:"0.26",frontMatter:{id:"data-retention",title:"Data retention"},sidebar:"version-0.26/Product Manuals",previous:{title:"Configuration",permalink:"/docs/0.26/product-manuals/operate/deployment/configuration"},next:{title:"Schema and migration",permalink:"/docs/0.26/product-manuals/operate/deployment/schema-and-migration"}},d=[{value:"How the data is stored and archived",id:"how-the-data-is-stored-and-archived",children:[]},{value:"Data cleanup",id:"data-cleanup",children:[]}],c={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-the-data-is-stored-and-archived"},"How the data is stored and archived"),(0,o.kt)("p",null,"Operate imports data from Zeebe and stores it in Elasticsearch indices with defined prefix (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"operate"),"). Specifically:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"deployed workflows, including the diagrams"),(0,o.kt)("li",{parentName:"ul"},"the state of workflow instances, including variables, flow nodes, that were activated within instance execution, incidents etc.")),(0,o.kt)("p",null,"It additionally stores some Operate specific data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"operations performed by the user"),(0,o.kt)("li",{parentName:"ul"},"list of users"),(0,o.kt)("li",{parentName:"ul"},"technical data, like the state of Zeebe import etc.")),(0,o.kt)("p",null,"The data that represents workflow instance state becomes immutable after workflow instance is finished. At this moment the data may be archived, meaning that\nit will be moved to a dated index, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"operate_variables_2020-01-01"),", where date represents the date on which given workflow instance was finished.\nThe same is valid for user operations: after they are finished the related data is moved to dated indices."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:"),' All Operate data present in Elasticsearch (from both "main" and dated indices) will be visible from the UI. ')),(0,o.kt)("h2",{id:"data-cleanup"},"Data cleanup"),(0,o.kt)("p",null,'In case of intensive Zeebe usage the amount of data can grow significantly with the time, therefore you should think about the data cleanup strategy. Dated indices\nmay be safely removed from Elasticsearch. "Safely" means here, that only finished workflow instances will be deleted together with all related data, and the rest or the data\nwill stay consistent. You can use Elasticsearch Curator or other tools/scripts to delete old data.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Attention:")," Only indices that contain dates in their suffix may be deleted.")))}s.isMDXComponent=!0}}]);