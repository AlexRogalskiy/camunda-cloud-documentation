(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[85554],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(n),s=a,f=m["".concat(u,".").concat(s)]||m[s]||p[s]||l;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52576:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o={id:"feel-built-in-functions-temporal",title:"Temporal functions"},i={unversionedId:"reference/feel/builtin-functions/feel-built-in-functions-temporal",id:"version-0.26/reference/feel/builtin-functions/feel-built-in-functions-temporal",isDocsHomePage:!1,title:"Temporal functions",description:"now()",source:"@site/versioned_docs/version-0.26/reference/feel/builtin-functions/feel-built-in-functions-temporal.md",sourceDirName:"reference/feel/builtin-functions",slug:"/reference/feel/builtin-functions/feel-built-in-functions-temporal",permalink:"/docs/0.26/reference/feel/builtin-functions/feel-built-in-functions-temporal",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/reference/feel/builtin-functions/feel-built-in-functions-temporal.md",version:"0.26",frontMatter:{id:"feel-built-in-functions-temporal",title:"Temporal functions"},sidebar:"version-0.26/Reference",previous:{title:"Context functions",permalink:"/docs/0.26/reference/feel/builtin-functions/feel-built-in-functions-context"},next:{title:"Glossary",permalink:"/docs/0.26/reference/glossary"}},u=[{value:"<code>now()</code>",id:"now",children:[]},{value:"<code>today()</code>",id:"today",children:[]},{value:"<code>day of week()</code>",id:"day-of-week",children:[]},{value:"<code>day of year()</code>",id:"day-of-year",children:[]},{value:"<code>week of year()</code>",id:"week-of-year",children:[]},{value:"<code>month of year()</code>",id:"month-of-year",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"now"},(0,l.kt)("inlineCode",{parentName:"h2"},"now()")),(0,l.kt)("p",null,"Returns the current date and time including the timezone."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters: no"),(0,l.kt)("li",{parentName:"ul"},"result: date-time with timezone")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'now()\n// date and time("2020-07-31T14:27:30@Europe/Berlin")\n')),(0,l.kt)("h2",{id:"today"},(0,l.kt)("inlineCode",{parentName:"h2"},"today()")),(0,l.kt)("p",null,"Returns the current date."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters: no"),(0,l.kt)("li",{parentName:"ul"},"result: date")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'today()\n// date("2020-07-31")\n')),(0,l.kt)("h2",{id:"day-of-week"},(0,l.kt)("inlineCode",{parentName:"h2"},"day of week()")),(0,l.kt)("p",null,"Returns the day of the week according to the Gregorian calendar. Note that it returns always the english name of the day."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"date"),": date/date-time"))),(0,l.kt)("li",{parentName:"ul"},"result: string")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'day of week(date("2019-09-17"))\n// "Tuesday"\n')),(0,l.kt)("h2",{id:"day-of-year"},(0,l.kt)("inlineCode",{parentName:"h2"},"day of year()")),(0,l.kt)("p",null,"Returns the Gregorian number of the day within the year."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"date"),": date/date-time"))),(0,l.kt)("li",{parentName:"ul"},"result: number")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'day of year(date("2019-09-17"))\n// 260\n')),(0,l.kt)("h2",{id:"week-of-year"},(0,l.kt)("inlineCode",{parentName:"h2"},"week of year()")),(0,l.kt)("p",null,"Returns the Gregorian number of the week within the year, according to ISO 8601."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"date"),": date/date-time"))),(0,l.kt)("li",{parentName:"ul"},"result: number")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'week of year(date("2019-09-17"))\n// 38\n')),(0,l.kt)("h2",{id:"month-of-year"},(0,l.kt)("inlineCode",{parentName:"h2"},"month of year()")),(0,l.kt)("p",null,"Returns the month of the week according to the Gregorian calendar. Note that it returns always the english name of the month."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"date"),": date/date-time"))),(0,l.kt)("li",{parentName:"ul"},"result: string")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'month of year(date("2019-09-17"))\n// "September"\n')))}d.isMDXComponent=!0}}]);