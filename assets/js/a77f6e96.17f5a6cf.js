(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[81024],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49319:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={id:"accessing-operate",title:"Accessing Operate from outside the cluster"},l=void 0,c={unversionedId:"product-manuals/zeebe/deployment-guide/kubernetes/helm/accessing-operate",id:"version-0.26/product-manuals/zeebe/deployment-guide/kubernetes/helm/accessing-operate",isDocsHomePage:!1,title:"Accessing Operate from outside the cluster",description:"The Zeebe Full Helm charts install an ingress controller. If this is deployed in a cloud provider (GKE, EKS, AKS, etc.), it should provision a LoadBalancer which will expose an external IP that can be used as the main entry point to access all the services/applications that are configured to have Ingress Routes.",source:"@site/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/kubernetes/helm/accessing-operate.md",sourceDirName:"product-manuals/zeebe/deployment-guide/kubernetes/helm",slug:"/product-manuals/zeebe/deployment-guide/kubernetes/helm/accessing-operate",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/kubernetes/helm/accessing-operate",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/kubernetes/helm/accessing-operate.md",version:"0.26",frontMatter:{id:"accessing-operate",title:"Accessing Operate from outside the cluster"},sidebar:"version-0.26/Product Manuals",previous:{title:"Zeebe Helm Charts",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/kubernetes/helm/installing-helm"},next:{title:"Zeebe Operator (Experimental)",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/kubernetes/operator/zeebe-operator"}},s=[],u={toc:s};function p(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Zeebe Full Helm charts")," install an ingress controller. If this is deployed in a cloud provider (GKE, EKS, AKS, etc.), it should provision a ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," which will expose an external IP that can be used as the main entry point to access all the services/applications that are configured to have Ingress Routes."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you have your own ingress controller, you can use the child chart for installing a Zeebe cluster, instead of using the parent chart.")),(0,a.kt)("p",null,"You can find the external IP by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> kubectl get svc\n")),(0,a.kt)("p",null,"You should see something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                                    TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                                  AGE\n<RELEASE NAME>-nginx-ingress-controller        LoadBalancer   10.109.108.4     <pending>     80:30497/TCP,443:32232/TCP               63m\n")),(0,a.kt)("p",null,"Where the ",(0,a.kt)("inlineCode",{parentName:"p"},"<pending>")," under the ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," column should change to a public IP that you (and other users) should be able to access from outside the cluster. You might need to check your cloud provider specific configuration if that doesn't work."),(0,a.kt)("p",null,"Then you should be able to access Operate pointing your browser at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://<EXTERNAL-IP>")),(0,a.kt)("p",null,"If you are running in Kubernetes KIND, you will need to ",(0,a.kt)("inlineCode",{parentName:"p"},"port-forward")," to the ingress controller main entry point due KIND doesn't support LoadBalancers. You can do that by running in a different terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> kubectl port-forward svc/<RELEASE NAME>-nginx-ingress-controller 8080:80\n")),(0,a.kt)("p",null,"Then you should be able to access Operate pointing your browser at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Operate Login",src:n(9166).Z})),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"demo"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"demo")," for credentials."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Operate Login",src:n(90372).Z})),(0,a.kt)("p",null,"If you deploy process definitions, they will appear in the dashboard and then you can drill down to see your active instances. You can deploy and create new instances using the Zeebe clients or ",(0,a.kt)("inlineCode",{parentName:"p"},"zbctl"),"."))}p.isMDXComponent=!0},90372:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-dashboard-94b9dbfff6c1e8df045a55cd98419cd4.png"},9166:function(e,t,n){"use strict";t.Z=n.p+"assets/images/operate-login-9d326c7ad4dca3267241ad37dfdea8b1.png"}}]);