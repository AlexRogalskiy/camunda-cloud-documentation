(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[9526],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),m=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=m(t),d=l,f=p["".concat(o,".").concat(d)]||p[d]||s[d]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=p;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,a[1]=u;for(var m=2;m<i;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},97005:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return m},default:function(){return s}});var r=t(22122),l=t(19756),i=(t(67294),t(3905)),a={id:"feel-built-in-functions-numeric",title:"Numeric Functions",description:"This document outlines built-in numeric functions and examples."},u=void 0,o={unversionedId:"reference/feel/builtin-functions/feel-built-in-functions-numeric",id:"version-1.1/reference/feel/builtin-functions/feel-built-in-functions-numeric",isDocsHomePage:!1,title:"Numeric Functions",description:"This document outlines built-in numeric functions and examples.",source:"@site/versioned_docs/version-1.1/reference/feel/builtin-functions/feel-built-in-functions-numeric.md",sourceDirName:"reference/feel/builtin-functions",slug:"/reference/feel/builtin-functions/feel-built-in-functions-numeric",permalink:"/docs/1.1/reference/feel/builtin-functions/feel-built-in-functions-numeric",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.1/reference/feel/builtin-functions/feel-built-in-functions-numeric.md",version:"1.1",frontMatter:{id:"feel-built-in-functions-numeric",title:"Numeric Functions",description:"This document outlines built-in numeric functions and examples."},sidebar:"version-1.1/Reference",previous:{title:"String Functions",permalink:"/docs/1.1/reference/feel/builtin-functions/feel-built-in-functions-string"},next:{title:"List Functions",permalink:"/docs/1.1/reference/feel/builtin-functions/feel-built-in-functions-list"}},m=[{value:"decimal()",id:"decimal",children:[]},{value:"floor()",id:"floor",children:[]},{value:"ceiling()",id:"ceiling",children:[]},{value:"abs()",id:"abs",children:[]},{value:"modulo()",id:"modulo",children:[]},{value:"sqrt()",id:"sqrt",children:[]},{value:"log()",id:"log",children:[]},{value:"exp()",id:"exp",children:[]},{value:"odd()",id:"odd",children:[]},{value:"even()",id:"even",children:[]}],c={toc:m};function s(e){var n=e.components,t=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"decimal"},"decimal()"),(0,i.kt)("p",null,"Round the given number at the given scale using the given rounding mode. If no rounding mode is passed in, it uses ",(0,i.kt)("inlineCode",{parentName:"p"},"HALF_EVEN")," as default. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n"),": number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scale"),": number"),(0,i.kt)("li",{parentName:"ul"},"(optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"mode"),": string - one of ",(0,i.kt)("inlineCode",{parentName:"li"},"UP, DOWN, CEILING, FLOOR, HALF_UP, HALF_DOWN, HALF_EVEN, UNNECESSARY")," (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"HALF_EVEN"),")"))),(0,i.kt)("li",{parentName:"ul"},"result: number")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'decimal(1/3, 2)\n// .33\n\ndecimal(1.5, 0) \n// 2\n\ndecimal(2.5, 0, "half_up")\n// 3\n')),(0,i.kt)("h2",{id:"floor"},"floor()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n"),": number"))),(0,i.kt)("li",{parentName:"ul"},"result: number")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"floor(1.5)\n// 1\n\nfloor(-1.5)\n// -2\n")),(0,i.kt)("h2",{id:"ceiling"},"ceiling()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n"),": number"))),(0,i.kt)("li",{parentName:"ul"},"result: number")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"ceiling(1.5)\n// 2\n\nfloor(-1.5)\n// -1\n")),(0,i.kt)("h2",{id:"abs"},"abs()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number"),": number"))),(0,i.kt)("li",{parentName:"ul"},"result: number")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"abs(10)\n// 10\n\nabs(-10)\n// 10\n")),(0,i.kt)("h2",{id:"modulo"},"modulo()"),(0,i.kt)("p",null,"Returns the remainder of the division of dividend by divisor."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dividend"),": number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"divisor"),": number"))),(0,i.kt)("li",{parentName:"ul"},"result: number")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"modulo(12, 5)\n// 2\n")),(0,i.kt)("h2",{id:"sqrt"},"sqrt()"),(0,i.kt)("p",null,"Returns the square root."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number"),": number"))),(0,i.kt)("li",{parentName:"ul"},"result: number")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"sqrt(16)\n// 4\n")),(0,i.kt)("h2",{id:"log"},"log()"),(0,i.kt)("p",null,"Returns the natural logarithm (base e) of the number."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number"),": number"))),(0,i.kt)("li",{parentName:"ul"},"result: number")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"log(10)\n// 2.302585092994046\n")),(0,i.kt)("h2",{id:"exp"},"exp()"),(0,i.kt)("p",null,"Returns the Euler\u2019s number e raised to the power of number."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number"),": number"))),(0,i.kt)("li",{parentName:"ul"},"result: number")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"exp(5)\n// 148.4131591025766\n")),(0,i.kt)("h2",{id:"odd"},"odd()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number"),": number"))),(0,i.kt)("li",{parentName:"ul"},"result: boolean")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"odd(5)\n// true\n")),(0,i.kt)("h2",{id:"even"},"even()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number"),": number"))),(0,i.kt)("li",{parentName:"ul"},"result: boolean")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"odd(5)\n// false\n")))}s.isMDXComponent=!0}}]);