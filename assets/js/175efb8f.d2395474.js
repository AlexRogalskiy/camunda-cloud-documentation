(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[44809],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(n),d=i,f=g["".concat(s,".").concat(d)]||g[d]||p[d]||a;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},71417:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var o=n(22122),i=n(19756),a=(n(67294),n(3905)),r={id:"configuration",title:"Configuration",sidebar_label:"Overview"},l=void 0,s={unversionedId:"components/zeebe/deployment-guide/configuration/configuration",id:"version-0.26/components/zeebe/deployment-guide/configuration/configuration",isDocsHomePage:!1,title:"Configuration",description:"Zeebe can be configured through:",source:"@site/versioned_docs/version-0.26/components/zeebe/deployment-guide/configuration/configuration.md",sourceDirName:"components/zeebe/deployment-guide/configuration",slug:"/components/zeebe/deployment-guide/configuration/configuration",permalink:"/docs/0.26/components/zeebe/deployment-guide/configuration/configuration",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/components/zeebe/deployment-guide/configuration/configuration.md",version:"0.26",frontMatter:{id:"configuration",title:"Configuration",sidebar_label:"Overview"},sidebar:"version-0.26/Components",previous:{title:"Next steps and resources",permalink:"/docs/0.26/components/zeebe/deployment-guide/getting-started/next-steps-resources"},next:{title:"Logging",permalink:"/docs/0.26/components/zeebe/deployment-guide/configuration/logging"}},u=[{value:"Default configuration",id:"default-configuration",children:[]},{value:"Configuration file templates",id:"configuration-file-templates",children:[]},{value:"Editing the configuration",id:"editing-the-configuration",children:[]},{value:"Passing configuration files to Zeebe",id:"passing-configuration-files-to-zeebe",children:[{value:"Other ways to specify the configuration file",id:"other-ways-to-specify-the-configuration-file",children:[]}]},{value:"Verifying configuration",id:"verifying-configuration",children:[]},{value:"Logging",id:"logging",children:[{value:"Google Stackdriver (JSON) logging",id:"google-stackdriver-json-logging",children:[]},{value:"Default logging configuration",id:"default-logging-configuration",children:[]},{value:"Change log level dynamically",id:"change-log-level-dynamically",children:[]}]},{value:"Health probes",id:"health-probes",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Zeebe can be configured through:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"configuration files,"),(0,a.kt)("li",{parentName:"ul"},"environment variables,"),(0,a.kt)("li",{parentName:"ul"},"or a mix of both.")),(0,a.kt)("p",null,"If both configuration files and environment variables are present, then environment variables overwrite settings in configuration files."),(0,a.kt)("p",null,"If you want to make small changes to the configuration, we recommend to use environment variables.\nIf you want to make big changes to the configuration, we recommend to use a configuration file."),(0,a.kt)("p",null,"The configuration will be applied during startup of Zeebe. It is not possible to change the configuration at runtime."),(0,a.kt)("h2",{id:"default-configuration"},"Default configuration"),(0,a.kt)("p",null,"The default configuration is located in ",(0,a.kt)("inlineCode",{parentName:"p"},"config/application.yaml"),". This configuration contains the most common configuration settings for a standalone broker. It also lists the corresponding environment variable for each setting."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note")),(0,a.kt)("p",{parentName:"blockquote"},"The default configuration is not suitable for a standalone gateway node. If you want to run a standalone gateway node, please have a look at ",(0,a.kt)("inlineCode",{parentName:"p"},"/config/gateway.yaml.template"))),(0,a.kt)("h2",{id:"configuration-file-templates"},"Configuration file templates"),(0,a.kt)("p",null,"We provide templates that contain all possible configuration settings, along with explanations for each setting:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/zeebe-io/zeebe/tree/develop/dist/src/main/config/application.yaml"},(0,a.kt)("inlineCode",{parentName:"a"},"config/application.yaml")," Standalone Broker (with embedded gateway)")," - Default configuration containing only the most common configuration settings. Use this as the basis for a single broker deployment for test or development"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/zeebe-io/zeebe/tree/develop/dist/src/main/config/broker.standalone.yaml.template"},(0,a.kt)("inlineCode",{parentName:"a"},"config/broker.standalone.yaml.template")," Standalone Broker (with embedded gateway)")," - Complete configuration template for a standalone broker with embedded gateway. Use this as the basis for a single broker deployment for test or development"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/zeebe-io/zeebe/tree/develop/dist/src/main/config/broker.yaml.template"},(0,a.kt)("inlineCode",{parentName:"a"},"config/broker.yaml.template")," Broker Node (without embedded gateway)")," - Complete configuration template for a broker node without embedded gateway. Use this as the basis for deploying multiple broker nodes as part of a cluster"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/zeebe-io/zeebe/tree/develop/dist/src/main/config/gateway.yaml.template"},(0,a.kt)("inlineCode",{parentName:"a"},"config/gateway.yaml.template"))," - Complete configuration template for a standalone gateway.")),(0,a.kt)("p",null,"Note that these templates also include the corresponding environment variables to use for every setting."),(0,a.kt)("h2",{id:"editing-the-configuration"},"Editing the configuration"),(0,a.kt)("p",null,"You can either start from scratch or start from the configuration templates listed above."),(0,a.kt)("p",null,"If you use a configuration template and want to uncomment certain lines, make sure to also uncomment their parent elements:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"Valid Configuration\n\n    zeebe:\n      gateway:\n        network:\n          # host: 0.0.0.0\n          port: 26500\n\nInvalid configuration\n\n    # zeebe:\n      # gateway:\n        # network:\n          # host: 0.0.0.0\n          port: 26500\n")),(0,a.kt)("p",null,"Uncommenting individual lines is a bit finicky, because YAML is sensitive to indentation. The best way to do it is to position the cursor before the ",(0,a.kt)("inlineCode",{parentName:"p"},"#")," character and delete two characters (the dash and the space). Doing this consistently will give you a valid YAML file."),(0,a.kt)("p",null,"When it comes to editing individual settings two data types are worth mentioning:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Data size (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"logSegmentSize"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Human friendly format: ",(0,a.kt)("inlineCode",{parentName:"li"},"500MB")," (or ",(0,a.kt)("inlineCode",{parentName:"li"},"KB, GB"),")"),(0,a.kt)("li",{parentName:"ul"},"Machine friendly format: size in bytes as long"))),(0,a.kt)("li",{parentName:"ul"},"Timeouts/intervals (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"requestTimeout"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Human friendly format: ",(0,a.kt)("inlineCode",{parentName:"li"},"15s")," (or ",(0,a.kt)("inlineCode",{parentName:"li"},"m, h"),")"),(0,a.kt)("li",{parentName:"ul"},"Machine friendly format: either duration in milliseconds as long, or ",(0,a.kt)("a",{parentName:"li",href:"ttps://en.wikipedia.org/wiki/ISO_8601#Durations"},"ISO-8601 duration")," format (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"PT15S"),")")))),(0,a.kt)("h2",{id:"passing-configuration-files-to-zeebe"},"Passing configuration files to Zeebe"),(0,a.kt)("p",null,"Rename the configuration file to ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yaml")," and place it in the following location:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./config/application.yaml\n")),(0,a.kt)("h3",{id:"other-ways-to-specify-the-configuration-file"},"Other ways to specify the configuration file"),(0,a.kt)("p",null,"Zeebe uses Spring Boot for its configuration parsing. So all other ways to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config"},"configure a Spring Boot application")," should also work. In particular,\nyou can use:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SPRING_CONFIG_ADDITIONAL_LOCATION")," to specify an additional configuration file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SPRING_APPLICATION_JSON")," to specify settings in JSON format.")),(0,a.kt)("p",null,"Details can be found in the Spring documentation."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note")),(0,a.kt)("p",{parentName:"blockquote"},"We recommend not to use ",(0,a.kt)("inlineCode",{parentName:"p"},"SPRING_CONFIG_LOCATION")," as this will replace all existing configuration defaults.\nWhen used inappropriately, some features will be disabled or will not be configured properly."),(0,a.kt)("p",{parentName:"blockquote"},"If you specify ",(0,a.kt)("inlineCode",{parentName:"p"},"SPRING_CONFIG_LOCATION"),", then specify it like this:"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"export SPRING_CONFIG_LOCATION='classpath:/,file:./[path to config file]'\n")),(0,a.kt)("p",{parentName:"blockquote"},"This will ensure that the defaults defined in the classpath resources will be used (unless explicitly overwritten by the configuration file you provide). If you omit the defaults defined in the classpath, some features may be disabled or will not be configured properly.")),(0,a.kt)("h2",{id:"verifying-configuration"},"Verifying configuration"),(0,a.kt)("p",null,"To verify that the configuration was applied, start Zeebe and look at the log."),(0,a.kt)("p",null,"If the configuration could be read, Zeebe will log out the effective configuration during startup:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'17:13:13.120 [] [main] INFO  io.zeebe.broker.system - Starting broker 0 with configuration {\n  "network": {\n    "host": "0.0.0.0",\n    "portOffset": 0,\n    "maxMessageSize": {\n      "bytes": 4194304\n    },\n    "commandApi": {\n      "defaultPort": 26501,\n      "host": "0.0.0.0",\n      "port": 26501,\n...\n')),(0,a.kt)("p",null,"In some cases of invalid configuration Zeebe will fail to start with a warning that explains which configuration setting could not be read."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"17:17:38.796 [] [main] ERROR org.springframework.boot.diagnostics.LoggingFailureAnalysisReporter -\n\n***************************\nAPPLICATION FAILED TO START\n***************************\n\nDescription:\n\nFailed to bind properties under 'zeebe.broker.network.port-offset' to int:\n\n    Property: zeebe.broker.network.port-offset\n    Value: false\n    Origin: System Environment Property \"ZEEBE_BROKER_NETWORK_PORTOFFSET\"\n    Reason: failed to convert java.lang.String to int\n\nAction:\n\nUpdate your application's configuration\n")),(0,a.kt)("h2",{id:"logging"},"Logging"),(0,a.kt)("p",null,"Zeebe uses Log4j2 framework for logging. In the distribution and the docker image you can find the default log configuration file in ",(0,a.kt)("inlineCode",{parentName:"p"},"config/log4j2.xml"),"."),(0,a.kt)("h3",{id:"google-stackdriver-json-logging"},"Google Stackdriver (JSON) logging"),(0,a.kt)("p",null,"To enable Google Stackdriver compatible JSON logging you can set the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"ZEEBE_LOG_APPENDER=Stackdriver")," before starting Zeebe."),(0,a.kt)("h3",{id:"default-logging-configuration"},"Default logging configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config/log4j2.xml")," (applied by default)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{{#include ../../../dist/src/main/config/log4j2.xml}}\n")),(0,a.kt)("h3",{id:"change-log-level-dynamically"},"Change log level dynamically"),(0,a.kt)("p",null,"Zeebe brokers expose a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/actuator-api/html/#loggers"},"Spring Boot Actuators web endpoint"),"\nfor configuring loggers dynamically.\nTo change the log level of a logger make a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/actuator/loggers/{logger.name}")," endpoint as shown in the example below.\nChange ",(0,a.kt)("inlineCode",{parentName:"p"},"io.zeebe")," to the required logger name and ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," to required log level."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl 'http://localhost:9600/actuator/loggers/io.zeebe' -i -X POST -H 'Content-Type: application/json' -d '{\"configuredLevel\":\"debug\"}'\n")),(0,a.kt)("h2",{id:"health-probes"},"Health probes"),(0,a.kt)("p",null,"Health probes are set to sensible defaults which cover common use cases."),(0,a.kt)("p",null,"For specific use cases, it might be necessary to customize health probes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.26/components/zeebe/deployment-guide/configuration/gateway-health-probes"},"Gateway health probes"))))}p.isMDXComponent=!0}}]);