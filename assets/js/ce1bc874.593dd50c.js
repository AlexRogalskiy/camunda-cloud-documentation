(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[27630],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},10582:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l={id:"feel-unary-tests",title:"Unary-Tests"},o=void 0,u={unversionedId:"reference/feel/language-guide/feel-unary-tests",id:"reference/feel/language-guide/feel-unary-tests",isDocsHomePage:!1,title:"Unary-Tests",description:"Unary-Tests can be used only for input entries of a decision table. They are a special kind of expression with additional operators. The operators get the value of the input expression implicitly as the first argument.",source:"@site/docs/reference/feel/language-guide/feel-unary-tests.md",sourceDirName:"reference/feel/language-guide",slug:"/reference/feel/language-guide/feel-unary-tests",permalink:"/docs/reference/feel/language-guide/feel-unary-tests",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/feel/language-guide/feel-unary-tests.md",version:"current",frontMatter:{id:"feel-unary-tests",title:"Unary-Tests"},sidebar:"Reference",previous:{title:"Data Types",permalink:"/docs/reference/feel/language-guide/feel-data-types"},next:{title:"Expressions",permalink:"/docs/reference/feel/language-guide/feel-expression"}},p=[{value:"Comparison",id:"comparison",children:[]},{value:"Interval",id:"interval",children:[]},{value:"Disjunction",id:"disjunction",children:[]},{value:"Negation",id:"negation",children:[]},{value:"Expression",id:"expression",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Unary-Tests can be used only for input entries of a decision table. They are a special kind of expression with additional operators. The operators get the value of the input expression implicitly as the first argument."),(0,i.kt)("p",null,"The result of the expression must be either ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"A unary-tests expression is ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," if one of the following conditions is fulfilled:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The expression evaluates to ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," when the input value is applied to it."),(0,i.kt)("li",{parentName:"ul"},"The expression evaluates to a list and the input value is equal to at least one of the values in that list."),(0,i.kt)("li",{parentName:"ul"},"The expression evaluates to a value and the input value is equal to that value.")),(0,i.kt)("h3",{id:"comparison"},"Comparison"),(0,i.kt)("p",null,"Compare the input value to ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"operator"),(0,i.kt)("th",{parentName:"tr",align:null},"symbol"),(0,i.kt)("th",{parentName:"tr",align:null},"example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"equal to"),(0,i.kt)("td",{parentName:"tr",align:null},"(none)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"valid"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"less than"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"< 10"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"less than or equal"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<=")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<= 10"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"greater than"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},">")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"> 10"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"greater than or equal"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},">=")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},">= 10"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Less than/greater than are only supported for:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Number"),(0,i.kt)("li",{parentName:"ul"},"Date"),(0,i.kt)("li",{parentName:"ul"},"Time"),(0,i.kt)("li",{parentName:"ul"},"Date-time"),(0,i.kt)("li",{parentName:"ul"},"Year-month-duration"),(0,i.kt)("li",{parentName:"ul"},"Day-time-duration")))),(0,i.kt)("h3",{id:"interval"},"Interval"),(0,i.kt)("p",null,"Test if the input value is within the interval ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),"."),(0,i.kt)("p",null,"An interval can be open ",(0,i.kt)("inlineCode",{parentName:"p"},"(x..y)")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"]x..y[")," or closed ",(0,i.kt)("inlineCode",{parentName:"p"},"[x..y]"),". If the interval is open, the value is not included."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"(2..5)\n// input > 2 and input < 5\n\n[2..5]\n// input >= 2 and input <= 5\n\n(2..5]\n// input > 2 and input <= 5\n")),(0,i.kt)("h3",{id:"disjunction"},"Disjunction"),(0,i.kt)("p",null,"Test if at least of the expressions is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"2, 3, 4\n// input = 2 or input = 3 or input = 4\n\n< 10, > 50\n// input < 10 or input > 50\n")),(0,i.kt)("h3",{id:"negation"},"Negation"),(0,i.kt)("p",null,"Test if the expression is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'not("valid")\n// input != "valid"\n\nnot(2, 3)\n// input != 2 and input != 3\n')),(0,i.kt)("h3",{id:"expression"},"Expression"),(0,i.kt)("p",null,"It is also possible to use a boolean ",(0,i.kt)("a",{parentName:"p",href:"../feel-expression"},"expression")," instead of an operator. For example, invoking a built-in function."),(0,i.kt)("p",null,"The input value can be accessed by the special variable ",(0,i.kt)("inlineCode",{parentName:"p"},"?"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'ends with(?, "@camunda.com")\n// test if the input value (string) ends with "@camunda.com"\n\nlist contains(?, "invalid")\n// test if the input value (list) contains "invalid"\n')))}d.isMDXComponent=!0}}]);