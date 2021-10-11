(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[90305],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78897:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),s={id:"testing",title:"Writing tests"},i=void 0,c={unversionedId:"components/clients/java-client/testing",id:"version-1.0/components/clients/java-client/testing",isDocsHomePage:!1,title:"Writing tests",description:"You can use the zeebe-test module to write JUnit tests for your job worker and BPMN process. It provides a JUnit rule to bootstrap the broker and some basic assertions.",source:"@site/versioned_docs/version-1.0/components/clients/java-client/testing.md",sourceDirName:"components/clients/java-client",slug:"/components/clients/java-client/testing",permalink:"/docs/1.0/components/clients/java-client/testing",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/components/clients/java-client/testing.md",version:"1.0",frontMatter:{id:"testing",title:"Writing tests"},sidebar:"version-1.0/Components",previous:{title:"Logging",permalink:"/docs/1.0/components/clients/java-client/logging"},next:{title:"Overview",permalink:"/docs/1.0/components/clients/java-client-examples/index"}},l=[{value:"Usage in a Maven project",id:"usage-in-a-maven-project",children:[]},{value:"Bootstrap the broker",id:"bootstrap-the-broker",children:[]},{value:"Verify the Result",id:"verify-the-result",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"zeebe-test")," module to write JUnit tests for your job worker and BPMN process. It provides a JUnit rule to bootstrap the broker and some basic assertions."),(0,a.kt)("h2",{id:"usage-in-a-maven-project"},"Usage in a Maven project"),(0,a.kt)("p",null,"Add ",(0,a.kt)("inlineCode",{parentName:"p"},"zeebe-test")," as Maven test dependency to your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>io.camunda</groupId>\n  <artifactId>zeebe-test</artifactId>\n  <scope>test</scope>\n</dependency>\n")),(0,a.kt)("h2",{id:"bootstrap-the-broker"},"Bootstrap the broker"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZeebeTestRule")," in your test case to start an embedded broker. It contains a client which can be used to deploy a BPMN process or create an instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import io.camunda.zeebe.client.ZeebeClient;\nimport io.camunda.zeebe.client.api.response.ProcessInstanceEvent;\nimport org.junit.Before;\nimport org.junit.Rule;\nimport org.junit.Test;\n\npublic class MyTest {\n\n  @Rule public final ZeebeTestRule testRule = new ZeebeTestRule();\n\n  private ZeebeClient client;\n\n  @Test\n  public void test() {\n    client = testRule.getClient();\n\n    client\n        .newDeployCommand()\n        .addResourceFromClasspath("process.bpmn")\n        .send()\n        .join();\n\n    final ProcessInstanceEvent processInstance =\n        client\n            .newCreateInstanceCommand()\n            .bpmnProcessId("process")\n            .latestVersion()\n            .send()\n            .join();\n  }\n}\n')),(0,a.kt)("h2",{id:"verify-the-result"},"Verify the Result"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ZeebeTestRule")," provides also some basic assertions in AssertJ style. The entry point of the assertions is ",(0,a.kt)("inlineCode",{parentName:"p"},"ZeebeTestRule.assertThat(...)"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'final ProcessInstanceEvent processInstance = ...\n\nZeebeTestRule.assertThat(processInstance)\n    .isEnded()\n    .hasPassed("start", "task", "end")\n    .hasVariable("result", 21.0);\n')))}u.isMDXComponent=!0}}]);