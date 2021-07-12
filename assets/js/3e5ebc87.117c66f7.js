(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[89815],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,m=p["".concat(c,".").concat(d)]||p[d]||g[d]||a;return t?o.createElement(m,i(i({ref:n},u),{},{components:t})):o.createElement(m,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},56093:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return g}});var o=t(22122),r=t(19756),a=(t(67294),t(3905)),i={id:"logging",title:"Logging"},l=void 0,c={unversionedId:"product-manuals/clients/java-client/logging",id:"product-manuals/clients/java-client/logging",isDocsHomePage:!1,title:"Logging",description:"The client uses SLF4J for logging. It logs useful things, such as exception stack traces when a job handler fails execution. Using the SLF4J API, any SLF4J implementation can be plugged in. The following example uses Log4J 2.",source:"@site/docs/product-manuals/clients/java-client/logging.md",sourceDirName:"product-manuals/clients/java-client",slug:"/product-manuals/clients/java-client/logging",permalink:"/docs/product-manuals/clients/java-client/logging",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/clients/java-client/logging.md",version:"current",frontMatter:{id:"logging",title:"Logging"},sidebar:"Product Manuals",previous:{title:"Job worker",permalink:"/docs/product-manuals/clients/java-client/job-worker"},next:{title:"Writing tests",permalink:"/docs/product-manuals/clients/java-client/testing"}},s=[{value:"Maven dependencies",id:"maven-dependencies",children:[]},{value:"Configuration",id:"configuration",children:[]}],u={toc:s};function g(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The client uses SLF4J for logging. It logs useful things, such as exception stack traces when a job handler fails execution. Using the SLF4J API, any SLF4J implementation can be plugged in. The following example uses Log4J 2."),(0,a.kt)("h2",{id:"maven-dependencies"},"Maven dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>org.apache.logging.log4j</groupId>\n  <artifactId>log4j-slf4j-impl</artifactId>\n  <version>2.8.1</version>\n</dependency>\n\n<dependency>\n  <groupId>org.apache.logging.log4j</groupId>\n  <artifactId>log4j-core</artifactId>\n  <version>2.8.1</version>\n</dependency>\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Add a file called ",(0,a.kt)("inlineCode",{parentName:"p"},"log4j2.xml")," to the classpath of your application. Add the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<Configuration status="WARN" strict="true"\n    xmlns="http://logging.apache.org/log4j/2.0/config"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://logging.apache.org/log4j/2.0/config https://raw.githubusercontent.com/apache/logging-log4j2/log4j-2.8.1/log4j-core/src/main/resources/Log4j-config.xsd">\n  <Appenders>\n    <Console name="Console" target="SYSTEM_OUT">\n      <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] %-5level Java Client: %logger{36} - %msg%n"/>\n    </Console>\n  </Appenders>\n  <Loggers>\n    <Root level="info">\n      <AppenderRef ref="Console"/>\n    </Root>\n  </Loggers>\n</Configuration>\n')),(0,a.kt)("p",null,"This will log every log message to the console."))}g.isMDXComponent=!0}}]);