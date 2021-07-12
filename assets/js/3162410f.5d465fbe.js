(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[63361],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return s}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),d=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(t),s=l,k=c["".concat(u,".").concat(s)]||c[s]||p[s]||r;return t?a.createElement(k,i(i({ref:n},m),{},{components:t})):a.createElement(k,i({ref:n},m))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},41537:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var a=t(22122),l=t(19756),r=(t(67294),t(3905)),i={id:"feel-data-types",title:"Data types"},o=void 0,u={unversionedId:"reference/feel/language-guide/feel-data-types",id:"version-0.26/reference/feel/language-guide/feel-data-types",isDocsHomePage:!1,title:"Data types",description:"A value can have one of the following types.",source:"@site/versioned_docs/version-0.26/reference/feel/language-guide/feel-data-types.md",sourceDirName:"reference/feel/language-guide",slug:"/reference/feel/language-guide/feel-data-types",permalink:"/docs/0.26/reference/feel/language-guide/feel-data-types",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/reference/feel/language-guide/feel-data-types.md",version:"0.26",frontMatter:{id:"feel-data-types",title:"Data types"},sidebar:"version-0.26/Reference",previous:{title:"What is FEEL?",permalink:"/docs/0.26/reference/feel/what-is-feel"},next:{title:"Unary tests",permalink:"/docs/0.26/reference/feel/language-guide/feel-unary-tests"}},d=[{value:"Null",id:"null",children:[]},{value:"Number",id:"number",children:[]},{value:"String",id:"string",children:[]},{value:"Boolean",id:"boolean",children:[]},{value:"Date",id:"date",children:[]},{value:"Time",id:"time",children:[]},{value:"Date-Time",id:"date-time",children:[]},{value:"Day-Time-Duration",id:"day-time-duration",children:[]},{value:"Year-Month-Duration",id:"year-month-duration",children:[]},{value:"List",id:"list",children:[]},{value:"Context",id:"context",children:[]}],m={toc:d};function p(e){var n=e.components,t=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A value can have one of the following types."),(0,r.kt)("h3",{id:"null"},"Null"),(0,r.kt)("p",null,"Nothing, null or nil (i.e. the value is not present)."),(0,r.kt)("p",null,"Some operations/functions return ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if an argument in not valid or types doesn't match."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"null"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"null\n")),(0,r.kt)("h3",{id:"number"},"Number"),(0,r.kt)("p",null,"A whole or floating point number."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"not-a-number (NaN), positive/negative infinity are represented as ",(0,r.kt)("inlineCode",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},"Java Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"java.math.BigDecimal"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"1\n2.3\n.4\n")),(0,r.kt)("h3",{id:"string"},"String"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"java.lang.String"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'"valid"\n')),(0,r.kt)("h3",{id:"boolean"},"Boolean"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"java.lang.Boolean"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"true\nfalse\n")),(0,r.kt)("h3",{id:"date"},"Date"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Format: ",(0,r.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd"),"."),(0,r.kt)("li",{parentName:"ul"},"Java Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"java.time.LocalDate"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'date("2017-03-10")\n')),(0,r.kt)("h3",{id:"time"},"Time"),(0,r.kt)("p",null,"A local or zoned time. The time can have an offset or time zone id."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Format: ",(0,r.kt)("inlineCode",{parentName:"li"},"HH:mm:ss")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"HH:mm:ss+/-HH:mm")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"HH:mm:ss@ZoneId")),(0,r.kt)("li",{parentName:"ul"},"Java Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"java.time.LocalTime")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"java.time.OffsetTime"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'time("11:45:30") \ntime("13:30")\n\ntime("11:45:30+02:00")\n\ntime("10:31:10@Europe/Paris")\n')),(0,r.kt)("h3",{id:"date-time"},"Date-Time"),(0,r.kt)("p",null,"A date with a local or zoned time component. The time can have an offset or time zone id."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Format: ",(0,r.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd'T'HH:mm:ss")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd'T'HH:mm:ss+/-HH:mm")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd'T'HH:mm:ss@ZoneId")),(0,r.kt)("li",{parentName:"ul"},"Java Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"java.time.LocalDateTime")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"java.time.DateTime"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'date and time("2015-09-18T10:31:10")\n\ndate and time("2015-09-18T10:31:10+01:00")\n\ndate and time("2015-09-18T10:31:10@Europe/Paris")\n')),(0,r.kt)("h3",{id:"day-time-duration"},"Day-Time-Duration"),(0,r.kt)("p",null,"A duration based on seconds. It can contain days, hours, minutes and seconds."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Format: ",(0,r.kt)("inlineCode",{parentName:"li"},"PxDTxHxMxS")),(0,r.kt)("li",{parentName:"ul"},"Java Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"java.time.Duration"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'duration("P4D")\nduration("PT2H")\nduration("PT30M")\nduration("P1DT6H")\n')),(0,r.kt)("h3",{id:"year-month-duration"},"Year-Month-Duration"),(0,r.kt)("p",null,"A duration based on the calendar. It can contain years and months."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Format: ",(0,r.kt)("inlineCode",{parentName:"li"},"PxYxM")),(0,r.kt)("li",{parentName:"ul"},"Java Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"java.time.Period"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'duration("P2Y")\nduration("P6M")\nduration("P1Y6M")\n')),(0,r.kt)("h3",{id:"list"},"List"),(0,r.kt)("p",null,"A list of elements. Can be empty."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"java.util.List"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'[]\n[1,2,3]\n["a","b"]\n\n[["list"], "of", [["lists"]]]\n')),(0,r.kt)("h3",{id:"context"},"Context"),(0,r.kt)("p",null,"A list of key-value-pairs. Can be empty."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"java.util.Map"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{}\n{"a": 1}\n{"b": 2, "c": "valid"}\n\n{"nested": {"d": 3}}\n')))}p.isMDXComponent=!0}}]);