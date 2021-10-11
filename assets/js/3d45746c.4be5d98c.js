(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[46355],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4165:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={id:"accessing-operate",title:"Accessing Operate from outside the cluster"},c=void 0,l={unversionedId:"components/zeebe/deployment-guide/kubernetes/helm/accessing-operate",id:"components/zeebe/deployment-guide/kubernetes/helm/accessing-operate",isDocsHomePage:!1,title:"Accessing Operate from outside the cluster",description:"The Zeebe Full Helm charts install an ingress controller. If this is deployed in a cloud provider (GKE, EKS, AKS, etc.), it should provision a LoadBalancer which will expose an external IP that can be used as the main entry point to access all the services/applications that are configured to have Ingress Routes.",source:"@site/docs/components/zeebe/deployment-guide/kubernetes/helm/accessing-operate.md",sourceDirName:"components/zeebe/deployment-guide/kubernetes/helm",slug:"/components/zeebe/deployment-guide/kubernetes/helm/accessing-operate",permalink:"/docs/components/zeebe/deployment-guide/kubernetes/helm/accessing-operate",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/components/zeebe/deployment-guide/kubernetes/helm/accessing-operate.md",version:"current",frontMatter:{id:"accessing-operate",title:"Accessing Operate from outside the cluster"},sidebar:"Components",previous:{title:"Zeebe Helm Charts",permalink:"/docs/components/zeebe/deployment-guide/kubernetes/helm/installing-helm"},next:{title:"Zeebe Operator (Experimental)",permalink:"/docs/components/zeebe/deployment-guide/kubernetes/operator/zeebe-operator"}},s=[],u={toc:s};function p(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Zeebe Full Helm charts")," install an ingress controller. If this is deployed in a cloud provider (GKE, EKS, AKS, etc.), it should provision a ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," which will expose an external IP that can be used as the main entry point to access all the services/applications that are configured to have Ingress Routes."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you have your own ingress controller, you can use the child chart to install a Zeebe cluster, instead of using the parent chart.")),(0,a.kt)("p",null,"You can find the external IP by running the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> kubectl get svc\n")),(0,a.kt)("p",null,"You should see something like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                                    TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                                  AGE\n<RELEASE NAME>-nginx-ingress-controller        LoadBalancer   10.109.108.4     <pending>     80:30497/TCP,443:32232/TCP               63m\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<pending>")," under the ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," column should change to a public IP that you (and other users) should be able to access from outside the cluster. Check your cloud provider's specific configuration if that doesn't work."),(0,a.kt)("p",null,"Then, you should be able to access Operate pointing your browser at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://<EXTERNAL-IP>"),"."),(0,a.kt)("p",null,"If you are running in Kubernetes KIND, you will need to ",(0,a.kt)("inlineCode",{parentName:"p"},"port-forward")," to the ingress controller main entry point due KIND doesn't support LoadBalancers. You can do that by running in a different terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> kubectl port-forward svc/<RELEASE NAME>-nginx-ingress-controller 8080:80\n")),(0,a.kt)("p",null,"Then, you should be able to access Operate pointing your browser at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Operate Login",src:n(40498).Z})),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"demo"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"demo")," for credentials."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Operate Login",src:n(18787).Z})),(0,a.kt)("p",null,"If you deploy process definitions, they will appear in the dashboard and then you can drill down to see your active instances. You can deploy and create new instances using the Zeebe clients or ",(0,a.kt)("inlineCode",{parentName:"p"},"zbctl"),"."))}p.isMDXComponent=!0},18787:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-dashboard-94b9dbfff6c1e8df045a55cd98419cd4.png"},40498:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-login-9d326c7ad4dca3267241ad37dfdea8b1.png"}}]);