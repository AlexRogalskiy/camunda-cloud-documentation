(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[66085],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},24423:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return p},default:function(){return d}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),i={id:"configuration",title:"Configuration"},s=void 0,o={unversionedId:"components/tasklist/deployment/configuration",id:"version-1.0/components/tasklist/deployment/configuration",isDocsHomePage:!1,title:"Configuration",description:"Tasklist is a Spring Boot application. That means all provided ways to configure",source:"@site/versioned_docs/version-1.0/components/tasklist/deployment/configuration.md",sourceDirName:"components/tasklist/deployment",slug:"/components/tasklist/deployment/configuration",permalink:"/docs/1.0/components/tasklist/deployment/configuration",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/components/tasklist/deployment/configuration.md",version:"1.0",frontMatter:{id:"configuration",title:"Configuration"},sidebar:"version-1.0/Components",previous:{title:"Install and start Tasklist",permalink:"/docs/1.0/components/tasklist/deployment/install-and-start"},next:{title:"Authentication",permalink:"/docs/1.0/components/tasklist/deployment/authentication"}},p=[{value:"Webserver",id:"webserver",children:[]},{value:"GraphQL API access",id:"graphql-api-access",children:[]},{value:"Elasticsearch",id:"elasticsearch",children:[{value:"Settings to connect",id:"settings-to-connect",children:[]},{value:"Settings for shards and replicas",id:"settings-for-shards-and-replicas",children:[]},{value:"A snippet from application.yml:",id:"a-snippet-from-applicationyml",children:[]}]},{value:"Zeebe broker connection",id:"zeebe-broker-connection",children:[{value:"Settings to connect",id:"settings-to-connect-1",children:[]},{value:"A snippet from application.yml:",id:"a-snippet-from-applicationyml-1",children:[]}]},{value:"Zeebe Elasticsearch exporter",id:"zeebe-elasticsearch-exporter",children:[{value:"Settings to connect and import:",id:"settings-to-connect-and-import",children:[]},{value:"A snippet from application.yml:",id:"a-snippet-from-applicationyml-2",children:[]}]},{value:"Monitoring and health probes",id:"monitoring-and-health-probes",children:[{value:"Example snippets to use Tasklist probes in Kubernetes:",id:"example-snippets-to-use-tasklist-probes-in-kubernetes",children:[]}]},{value:"Logging",id:"logging",children:[{value:"JSON logging configuration",id:"json-logging-configuration",children:[]},{value:"Change logging level at runtime",id:"change-logging-level-at-runtime",children:[]}]},{value:"An example of application.yml file",id:"an-example-of-applicationyml-file",children:[]}],c={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Tasklist is a Spring Boot application. That means all provided ways to ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config"},"configure"),"\na Spring Boot application can be applied. By default, the configuration for Tasklist is stored in a YAML file ",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml"),". All Tasklist related settings are prefixed\nwith ",(0,l.kt)("inlineCode",{parentName:"p"},"camunda.tasklist"),". The following parts are configurable:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#webserver"},"Webserver")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#graphql-api-access"},"GraphQL API access")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#elasticsearch"},"Elasticsearch connection")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#zeebe-broker-connection"},"Zeebe Broker connection")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#zeebe-elasticsearch-exporter"},"Zeebe Elasticsearch exporter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/1.0/components/tasklist/deployment/authentication"},"Authentication")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#monitoring-and-health-probes"},"Monitoring and health probes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#logging"},"Logging configuration"))),(0,l.kt)("h2",{id:"webserver"},"Webserver"),(0,l.kt)("p",null,"Tasklist supports customizing the ",(0,l.kt)("em",{parentName:"p"},"context-path")," by using default Spring configuration."),(0,l.kt)("p",null,"Example for ",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml"),":\n",(0,l.kt)("inlineCode",{parentName:"p"},"server.servlet.context-path: /tasklist")),(0,l.kt)("p",null,"Example for environment variable:\n",(0,l.kt)("inlineCode",{parentName:"p"},"SERVER_SERVLET_CONTEXT_PATH=/tasklist")),(0,l.kt)("p",null,"Default context-path is ",(0,l.kt)("inlineCode",{parentName:"p"},"/")),(0,l.kt)("h2",{id:"graphql-api-access"},"GraphQL API access"),(0,l.kt)("p",null,"Tasklist provides a GraphQL API under the endpoint ",(0,l.kt)("inlineCode",{parentName:"p"},"/graphql"),". Clients can access this API by using a JWT access token in an authorization header ",(0,l.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer <JWT>"),"."),(0,l.kt)("p",null,"Tasklist server needs the following ",(0,l.kt)("strong",{parentName:"p"},"settings")," to validate the token:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.client.audience"),(0,l.kt)("td",{parentName:"tr",align:null},"Tasklist tries to match this with ",(0,l.kt)("inlineCode",{parentName:"td"},"aud")," in JWT"),(0,l.kt)("td",{parentName:"tr",align:null},"tasklist.camunda.io")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.client.clusterId"),(0,l.kt)("td",{parentName:"tr",align:null},"Tasklist tries to match this with ",(0,l.kt)("inlineCode",{parentName:"td"},"scope")," in JWT"),(0,l.kt)("td",{parentName:"tr",align:null},"cafe-0815-0235-a221-21cc6df91dc5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spring.security.oauth2.resourceserver.jwt.jwk-set-uri (recommended)"),(0,l.kt)("td",{parentName:"tr",align:null},"Complete URI to get public keys for JWT validation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://weblogin.cloud.company.com/.well-known/jwks.json"},"https://weblogin.cloud.company.com/.well-known/jwks.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"OR")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spring.security.oauth2.resourceserver.jwt.issuer-uri"),(0,l.kt)("td",{parentName:"tr",align:null},"URI to get public keys for JWT validation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://weblogin.cloud.company.com/"},"https://weblogin.cloud.company.com/"))))),(0,l.kt)("p",null,"The settings can be given in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/tasklist/blob/master/config/application.yml"},"application.yml")," (eg. ",(0,l.kt)("inlineCode",{parentName:"p"},"camunda.tasklist.client.audience: tasklist.camunda.io"),") or\nas environment variables (eg. ",(0,l.kt)("inlineCode",{parentName:"p"},"CAMUNDA_TASKLIST_CLIENT_AUDIENCE=tasklist.camunda.io"),")"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.0/components/tasklist/deployment/api-client"},"API client")," needs to obtain JWT token and send it in each request to ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql")," in an authorization header as described above."),(0,l.kt)("h2",{id:"elasticsearch"},"Elasticsearch"),(0,l.kt)("p",null,"Tasklist stores and reads data in/from Elasticsearch."),(0,l.kt)("h3",{id:"settings-to-connect"},"Settings to connect"),(0,l.kt)("p",null,"Tasklist supports ",(0,l.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.12/setting-up-authentication.html"},"basic authentication")," for elasticsearch.\nSet the appropriate username/password combination in the configuration to use it."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.elasticsearch.clusterName"),(0,l.kt)("td",{parentName:"tr",align:null},"Clustername of Elasticsearch"),(0,l.kt)("td",{parentName:"tr",align:null},"elasticsearch")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.elasticsearch.url"),(0,l.kt)("td",{parentName:"tr",align:null},"URL of Elasticsearch REST API"),(0,l.kt)("td",{parentName:"tr",align:null},"http://localhost:9200")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.elasticsearch.username"),(0,l.kt)("td",{parentName:"tr",align:null},"Username to access Elasticsearch REST API"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.elasticsearch.password"),(0,l.kt)("td",{parentName:"tr",align:null},"Password to access Elasticsearch REST API"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"settings-for-shards-and-replicas"},"Settings for shards and replicas"),(0,l.kt)("p",null,"Tasklist creates the template with index settings named ",(0,l.kt)("inlineCode",{parentName:"p"},"tasklist-<version>_template")," that Elasticsearch will use for all Tasklist indices.\nThese settings can be changed."),(0,l.kt)("p",null,"Following configuration parameters will define the settings:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.elasticsearch.numberOfShards"),(0,l.kt)("td",{parentName:"tr",align:null},"How many shards Elasticsearch uses for all Tasklist indices"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.elasticsearch.numberOfReplicas"),(0,l.kt)("td",{parentName:"tr",align:null},"How many replicas Elasticsearch uses for all Tasklist indices"),(0,l.kt)("td",{parentName:"tr",align:null},"0")))),(0,l.kt)("p",null,"These values are applied only on first startup of Tasklist or during version upgrade. After Tasklist\nELS schema is created, settings may be adjusted directly in ELS template, and the new settings will be applied\nto indices created after adjustment."),(0,l.kt)("h3",{id:"a-snippet-from-applicationyml"},"A snippet from application.yml:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"camunda.tasklist:\n  elasticsearch:\n    # Cluster name\n    clusterName: elasticsearch\n    # Url\n    url: http://localhost:9200\n")),(0,l.kt)("h2",{id:"zeebe-broker-connection"},"Zeebe broker connection"),(0,l.kt)("p",null,"Tasklist needs a connection to Zeebe Broker to start the import."),(0,l.kt)("h3",{id:"settings-to-connect-1"},"Settings to connect"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.zeebe.gatewayAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"Gateway address point to zeebe as hostname and port"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost:26500")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Currently Tasklist does not support TLS communication with Zeebe")),(0,l.kt)("h3",{id:"a-snippet-from-applicationyml-1"},"A snippet from application.yml:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"camunda.tasklist:\n  zeebe:\n    # Gateway address\n    gatewayAddress: localhost:26500\n")),(0,l.kt)("h2",{id:"zeebe-elasticsearch-exporter"},"Zeebe Elasticsearch exporter"),(0,l.kt)("p",null,"Tasklist imports data from Elasticsearch indices created and filled in by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/tree/develop/exporters/elasticsearch-exporter"},"Zeebe Elasticsearch Exporter"),".\nTherefore, settings for this Elasticsearch connection must be defined and must correspond to the settings on Zeebe side."),(0,l.kt)("h3",{id:"settings-to-connect-and-import"},"Settings to connect and import:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.zeebeElasticsearch.clusterName"),(0,l.kt)("td",{parentName:"tr",align:null},"Cluster name of Elasticsearch"),(0,l.kt)("td",{parentName:"tr",align:null},"elasticsearch")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.zeebeElasticsearch.url"),(0,l.kt)("td",{parentName:"tr",align:null},"URL of Elasticsearch REST API"),(0,l.kt)("td",{parentName:"tr",align:null},"http://localhost:9200")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.zeebeElasticsearch.prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"Index prefix as configured in Zeebe Elasticsearch exporter"),(0,l.kt)("td",{parentName:"tr",align:null},"zeebe-record")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.zeebeElasticsearch.username"),(0,l.kt)("td",{parentName:"tr",align:null},"Username to access Elasticsearch REST API"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"camunda.tasklist.zeebeElasticsearch.password"),(0,l.kt)("td",{parentName:"tr",align:null},"Password to access Elasticsearch REST API"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"a-snippet-from-applicationyml-2"},"A snippet from application.yml:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"camunda.tasklist:\n  zeebeElasticsearch:\n    # Cluster name\n    clusterName: elasticsearch\n    # Url\n    url: http://localhost:9200\n    # Index prefix, configured in Zeebe Elasticsearch exporter\n    prefix: zeebe-record\n")),(0,l.kt)("h2",{id:"monitoring-and-health-probes"},"Monitoring and health probes"),(0,l.kt)("p",null,"Tasklist includes ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html#production-ready"},"Spring Boot Actuator")," inside, that\nprovides number of monitoring possibilities., e.g. health check (http://localhost:8080/actuator/health) and metrics (http://localhost:8080/actuator/prometheus) endpoints."),(0,l.kt)("p",null,"Tasklist uses following Actuator configuration by default:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# disable default health indicators:\n# https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html#production-ready-health-indicators\nmanagement.health.defaults.enabled: false\n# enable health check, metrics and loggers endpoints\nmanagement.endpoints.web.exposure.include: health,prometheus,loggers\n# enable Kubernetes health groups:\n# https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html#production-ready-kubernetes-probes\nmanagement.health.probes.enabled: true\n")),(0,l.kt)("p",null,"With this configuration following endpoints are available for use out of the box:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<server>:8080/actuator/prometheus")," Prometheus metrics"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<server>:8080/actuator/health/liveness")," Liveness probe"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<server>:8080/actuator/health/readiness")," Readiness probe"),(0,l.kt)("h3",{id:"example-snippets-to-use-tasklist-probes-in-kubernetes"},"Example snippets to use Tasklist probes in Kubernetes:"),(0,l.kt)("p",null,"For details to set Kubernetes probes parameters see: ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes"},"Kubernetes configure probes")),(0,l.kt)("h4",{id:"readiness-probe-as-yaml-config"},"Readiness probe as yaml config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"readinessProbe:\n     httpGet:\n        path: /actuator/health/readiness\n        port: 8080\n     initialDelaySeconds: 30\n     periodSeconds: 30\n")),(0,l.kt)("h4",{id:"liveness-probe-as-yaml-config"},"Liveness probe as yaml config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"livenessProbe:\n     httpGet:\n        path: /actuator/health/liveness\n        port: 8080\n     initialDelaySeconds: 30\n     periodSeconds: 30\n")),(0,l.kt)("h2",{id:"logging"},"Logging"),(0,l.kt)("p",null,"Tasklist uses Log4j2 framework for logging. In distribution archive as well as inside a Docker image ",(0,l.kt)("inlineCode",{parentName:"p"},"config/log4j2.xml")," logging configuration files is included,\nthat can be further adjusted to your needs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<Configuration status="WARN" monitorInterval="30">\n  <Properties>\n    <Property name="LOG_PATTERN">%clr{%d{yyyy-MM-dd HH:mm:ss.SSS}}{faint} %clr{%5p} %clr{${sys:PID}}{magenta} %clr{---}{faint} %clr{[%15.15t]}{faint} %clr{%-40.40c{1.}}{cyan} %clr{:}{faint} %m%n%xwEx</Property>\n    <Property name="log.stackdriver.serviceName">${env:TASKLIST_LOG_STACKDRIVER_SERVICENAME:-tasklist}</Property>\n    <Property name="log.stackdriver.serviceVersion">${env:TASKLIST_LOG_STACKDRIVER_SERVICEVERSION:-}</Property>\n  </Properties>\n  <Appenders>\n    <Console name="Console" target="SYSTEM_OUT" follow="true">\n      <PatternLayout pattern="${LOG_PATTERN}"/>\n    </Console>\n    <Console name="Stackdriver" target="SYSTEM_OUT" follow="true">\n      <StackdriverLayout serviceName="${log.stackdriver.serviceName}"\n        serviceVersion="${log.stackdriver.serviceVersion}" />\n    </Console>\n  </Appenders>\n  <Loggers>\n    <Logger name="io.camunda.tasklist" level="info" />\n    <Root level="info">\n      <AppenderRef ref="${env:TASKLIST_LOG_APPENDER:-Console}"/>\n    </Root>\n  </Loggers>\n</Configuration>\n')),(0,l.kt)("p",null,"By default, Console log appender will be used."),(0,l.kt)("h3",{id:"json-logging-configuration"},"JSON logging configuration"),(0,l.kt)("p",null,"You can choose to output logs in JSON format (Stackdriver compatible). To enable it, define\nthe environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"TASKLIST_LOG_APPENDER")," like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"TASKLIST_LOG_APPENDER=Stackdriver\n")),(0,l.kt)("h3",{id:"change-logging-level-at-runtime"},"Change logging level at runtime"),(0,l.kt)("p",null,"Tasklist supports the default scheme for changing logging levels as provided by ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.4.3/actuator-api/htmlsingle/#loggers"},"Spring Boot")),(0,l.kt)("p",null,"The log level for Tasklist can be changed by following the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/2.4.3/actuator-api/htmlsingle/#loggers-setting-level"},"Setting a Log Level")," section."),(0,l.kt)("h4",{id:"set-all-tasklist-loggers-to-debug"},"Set all Tasklist loggers to DEBUG:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'http://localhost:8080/actuator/loggers/io.camunda.tasklist' -i -X POST \\\n-H 'Content-Type: application/json' \\\n-d '{\"configuredLevel\":\"debug\"}'\n")),(0,l.kt)("h2",{id:"an-example-of-applicationyml-file"},"An example of application.yml file"),(0,l.kt)("p",null,"The following snippet represents the default Tasklist configuration, which is shipped with the distribution. It can be found inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"config")," folder (",(0,l.kt)("inlineCode",{parentName:"p"},"config/application.yml"),")\nand can be used to adjust Tasklist to your needs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# Tasklist configuration file\n\ncamunda.tasklist:\n  # Set Tasklist username and password.\n  # If user with <username> does not exists it will be created.\n  # Default: demo/demo\n  #username:\n  #password:\n  # ELS instance to store Tasklist data\n  elasticsearch:\n    # Cluster name\n    clusterName: elasticsearch\n    # url\n    url: http://localhost:9200\n  # Zeebe instance\n  zeebe:\n    # Gateway address\n    gatewayAddress: localhost:26500\n  # ELS instance to export Zeebe data to\n  zeebeElasticsearch:\n    # Cluster name\n    clusterName: elasticsearch\n    # url\n    url: http://localhost:9200\n    # Index prefix, configured in Zeebe Elasticsearch exporter\n    prefix: zeebe-record\n")))}d.isMDXComponent=!0}}]);