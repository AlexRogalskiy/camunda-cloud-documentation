(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[11308],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},94333:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o={id:"backpressure",title:"Backpressure"},s=void 0,l={unversionedId:"components/zeebe/deployment-guide/operations/backpressure",id:"version-1.0/components/zeebe/deployment-guide/operations/backpressure",isDocsHomePage:!1,title:"Backpressure",description:"When a broker receives a client request, it is written to the event stream first (see section Internal processing for details), and processed later by the stream processor.",source:"@site/versioned_docs/version-1.0/components/zeebe/deployment-guide/operations/backpressure.md",sourceDirName:"components/zeebe/deployment-guide/operations",slug:"/components/zeebe/deployment-guide/operations/backpressure",permalink:"/docs/1.0/components/zeebe/deployment-guide/operations/backpressure",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/components/zeebe/deployment-guide/operations/backpressure.md",version:"1.0",frontMatter:{id:"backpressure",title:"Backpressure"},sidebar:"version-1.0/Components",previous:{title:"Health status",permalink:"/docs/1.0/components/zeebe/deployment-guide/operations/health"},next:{title:"Disk space",permalink:"/docs/1.0/components/zeebe/deployment-guide/operations/disk-space"}},c=[{value:"Terminology",id:"terminology",children:[]},{value:"Backpressure algorithms",id:"backpressure-algorithms",children:[]},{value:"Gradient",id:"gradient",children:[]},{value:"Gradient2",id:"gradient2",children:[]},{value:"Backpressure tuning",id:"backpressure-tuning",children:[]},{value:"Potential Issues",id:"potential-issues",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When a broker receives a client request, it is written to the ",(0,a.kt)("em",{parentName:"p"},"event stream")," first (see section ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0/components/zeebe/technical-concepts/internal-processing"},"Internal processing")," for details), and processed later by the stream processor.\nIf the processing is slow or if there are many client requests in the stream, it might take too long for the processor to start processing the command.\nIf the broker keeps accepting new requests from the client, the back log increases and the processing latency can grow beyond an acceptable time.\nTo avoid such problems, Zeebe employs a backpressure mechanism.\nWhen the broker receives more requests than it can process with an acceptable latency, it rejects some requests (see ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.0/reference/grpc#technical-error-handling"},"Technical error handling"),")."),(0,a.kt)("h3",{id:"terminology"},"Terminology"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"RTT")," - The time between the request is accepted by the broker and the response to the request is sent back to the gateway."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"inflight count")," - The number of requests accepted by the broker but the response is not yet sent."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"limit")," - maximum number of flight requests. When the inflight count is above the limit, any new incoming request will be rejected.")),(0,a.kt)("p",null,"Note that the limit and inflight count are calculated per partition."),(0,a.kt)("h3",{id:"backpressure-algorithms"},"Backpressure algorithms"),(0,a.kt)("p",null,"Zeebe uses adaptive algorithms from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Netflix/concurrency-limits"},"concurrency-limits")," to dynamically calculate the limit.\nZeebe can be configured with one of the following backpressure algorithms."),(0,a.kt)("h4",{id:"fixed-limit"},"Fixed Limit"),(0,a.kt)("p",null,"With \u201cfixed limit\u201d one can configure a fixed value of the limit.\nZeebe operators are recommended to evaluate the latencies observed with different values for limit.\nNote that with different cluster configurations, you may have to choose different limit values."),(0,a.kt)("h4",{id:"aimd"},"AIMD"),(0,a.kt)("p",null,"AIMD calculates the limit based on the configured ",(0,a.kt)("em",{parentName:"p"},"requestTimeout"),".\nWhen the RTT for a request ",(0,a.kt)("em",{parentName:"p"},"requestTimeout"),", the limit is increased by 1.\nWhen the RTT is longer than ",(0,a.kt)("em",{parentName:"p"},"requestTimeout"),",\nthe limit will be reduced according to the configured ",(0,a.kt)("em",{parentName:"p"},"backoffRatio"),"."),(0,a.kt)("h4",{id:"vegas"},"Vegas"),(0,a.kt)("p",null,"Vegas is an adaptive limit algorithm based on TCP Vegas congestion control algorithm.\nVegas estimates a base latency as the minimum observed latency.\nThis base RTT is the expected latency when there is no load.\nWhenever the RTT deviates from the base RTT, a new limit is calculated based on the vegas algorithm.\nVegas allows to configure two parameters - ",(0,a.kt)("em",{parentName:"p"},"alpha")," and ",(0,a.kt)("em",{parentName:"p"},"beta"),".\nThe values correspond to a queue size that is estimated by the Vegas algorithm based on the observed RTT, base RTT, and current limit.\nWhen the queue size is below ",(0,a.kt)("em",{parentName:"p"},"alpha"),", the limit is increased.\nWhen the queue size is above ",(0,a.kt)("em",{parentName:"p"},"beta"),", the limit is decreased."),(0,a.kt)("h3",{id:"gradient"},"Gradient"),(0,a.kt)("p",null,"Gradient is an adaptive limit algorithm that dynamically calculates the limit based on observed RTT.\nIn the gradient algorithm, the limit is adjusted based on the gradient of observed RTT and an observed minimum RTT.\nIf gradient is less than 1, the limit is decreased otherwise the limit is increased."),(0,a.kt)("h3",{id:"gradient2"},"Gradient2"),(0,a.kt)("p",null,"Gradient2 is similar to Gradient, but instead of using observed minimum RTT as the base, it uses and exponentially smoothed average RTT."),(0,a.kt)("h2",{id:"backpressure-tuning"},"Backpressure tuning"),(0,a.kt)("p",null,"The goal of backpressure is to keep the processing latency low.\nThe processing latency is calculated as the time between the command is written to the event stream until it is processed.\nHence to see how backpressure behaves you can run a benchmark on your cluster and observe\nthe following metrics."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zeebe_stream_processor_latency_bucket")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zeebe_dropped_request_count_total")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zeebe_received_request_count_total")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zeebe_backpressure_requests_limit"))),(0,a.kt)("p",null,"You may want to run the benchmark with different load"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"With low load - where the number of requests send per second is low."),(0,a.kt)("li",{parentName:"ol"},"With high load - where the number of requests sent per second is above what zeebe can process within a reasonable latency.")),(0,a.kt)("p",null,"If the value of the limit is small, the processing latency will be small but the number of rejected requests may be high.\nIf the value of the limit is large, less requests may be rejected (depending on the request rate),\nbut the processing latency may increase."),(0,a.kt)("p",null,'When using "fixed limit", you can run the benchmark with different values for the limit.\nYou can then determine a suitable value for a limit for which the processing latency (',(0,a.kt)("inlineCode",{parentName:"p"},"zeebe_stream_processor_latency_bucket"),") is within the desired latency."),(0,a.kt)("p",null,'When using "AIMD", you can configure a ',(0,a.kt)("inlineCode",{parentName:"p"},"requestTimeout"),' which corresponds to a desired latency.\nNote that during high load "AIMD" can lead to a processing latency two times more than the configured ',(0,a.kt)("inlineCode",{parentName:"p"},"requestTimeout"),".\nIt is also recommended to configure a ",(0,a.kt)("inlineCode",{parentName:"p"},"minLimit")," to prevent the limit from aggressively dropping during constant high load."),(0,a.kt)("p",null,"When using Vegas, you cannot configure the backpressure to a desired latency.\nInstead Vegas tries to keep the RTT as low as possible based on the observed minimum RTT."),(0,a.kt)("p",null,"Similar to Vegas, you cannot configure the desired latency in Gradient and Gradient2.\nThey calculated the limit based on the gradient of observed RTT from the expected RTT.\nHigher the value of ",(0,a.kt)("em",{parentName:"p"},"rttTolerance"),", higher deviations are tolerated that results in higher values for limit."),(0,a.kt)("p",null,"If a lot of requests are rejected due to backpressure, it might indicate that the processing capacity of the cluster is not enough to handle the expected throughput.\nIf this is the expected workload, then you might consider a different configuration for the cluster such as provisioning more resources and, increasing the number of nodes and partitions."),(0,a.kt)("h2",{id:"potential-issues"},"Potential Issues"),(0,a.kt)("p",null,"The rate limiter used by Zeebe to implement backpressure may use ",(0,a.kt)("inlineCode",{parentName:"p"},"System.nanoTime()")," to measure the RTT of requests. In some systems, we've observed that consecutive calls to this method can return equal or even decreasing values. ",(0,a.kt)("a",{parentName:"p",href:"https://shipilev.net/blog/2014/nanotrusting-nanotime"},"Low clock resolution")," and ",(0,a.kt)("a",{parentName:"p",href:"https://bugs.openjdk.java.net/browse/JDK-6458294"},"monotonicity")," ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/3657289/linux-clock-gettimeclock-monotonic-strange-non-monotonic-behavior"},"issues")," are some of the most likely culprits of this. If this happens, it's recommended to configure the backpressure to use the 'fixed' algorithm. Without a clock with sufficient resolution, adaptive backpressure algorithms are not useful."))}m.isMDXComponent=!0}}]);