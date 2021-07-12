(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[12461],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,b=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25997:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={id:"zeebe-operator",title:"Zeebe Operator (Experimental)"},s=void 0,l={unversionedId:"product-manuals/zeebe/kubernetes/zeebe-operator",id:"version-0.25/product-manuals/zeebe/kubernetes/zeebe-operator",isDocsHomePage:!1,title:"Zeebe Operator (Experimental)",description:"The Zeebe Kubernetes Operator was born out of the need to manage more than one single Zeebe Cluster running inside Kubernetes Clusters. Zeebe Clusters have their own lifecycle and in real implementations, the need to update, monitor and manage some of these cluster components while applications are running becomes challenging. The objective of the Zeebe k8s Operator is to simplify and natively integrate Zeebe with k8s, to solve operational burden and facilitate the creation and maintenance of a set of clusters.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/kubernetes/zeebe-operator.md",sourceDirName:"product-manuals/zeebe/kubernetes",slug:"/product-manuals/zeebe/kubernetes/zeebe-operator",permalink:"/docs/0.25/product-manuals/zeebe/kubernetes/zeebe-operator",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/kubernetes/zeebe-operator.md",version:"0.25",frontMatter:{id:"zeebe-operator",title:"Zeebe Operator (Experimental)"},sidebar:"version-0.25/Product Manuals",previous:{title:"Accessing Operate from outside the cluster",permalink:"/docs/0.25/product-manuals/zeebe/kubernetes/accessing-operate"},next:{title:"Glossary",permalink:"/docs/0.25/product-manuals/zeebe/appendix/glossary"}},u=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Technical Details and Dependencies",id:"technical-details-and-dependencies",children:[]}],c={toc:u};function p(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Zeebe Kubernetes Operator was born out of the need to manage more than one single Zeebe Cluster running inside Kubernetes Clusters. Zeebe Clusters have their own lifecycle and in real implementations, the need to update, monitor and manage some of these cluster components while applications are running becomes challenging. The objective of the Zeebe k8s Operator is to simplify and natively integrate Zeebe with k8s, to solve operational burden and facilitate the creation and maintenance of a set of clusters. "),(0,o.kt)("p",null,"This operator has been built with Kubernetes Helm in mind, meaning that at the end of the day, this operator will be in charge of managing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/helm/helm"},"Helm Charts"),". If you are not familiar with Helm, Helm is a package manager for Kubernetes, which help us to package and distribute Kubernetes manifest. Helm also deals with installing, labeling and dependency management between packages (charts). Because we have Zeebe Helm packages already here: ",(0,o.kt)("a",{parentName:"p",href:"http://helm.camunda.io"},"http://helm.camunda.io")," which are automatically versioned and released, the Zeebe Kubernetes Operator will use these charts to create and manage new clusters and other related components. "),(0,o.kt)("p",null,"Because we are in Kubernetes realms we need to provide a declarative way of stating that we want a new Zeebe Cluster to be provisioned. For this reason, the ZeebeCluster Custom Resource Definition (CRD) is introduced. This resource contains all the information needed to provision a cluster and it will also reflect the current cluster status. The Zeebe Kubernetes Operator is built to monitor ZeebeCluster resources and interact with the Kubernetes APIs under the hood to make sure that the Zeebe Cluster is provisioned, upgraded or deleted correctly."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"The Zeebe Kubernetes Operator can be installed using Helm, as it is provided as a Helm Chart as well. In contrast with zeebe-cluster , zeebe-operate and zeebe-full charts, the operator chart installation by itself doesn\u2019t install any Zeebe Cluster, but allows you to do that by creating ZeebeCluster CRD resources. "),(0,o.kt)("p",null,"The following steps will guide you to install the Operator with Helm3  (which is the default version now)"),(0,o.kt)("p",null,"This will also work if you have correctly installed Helm2 in your cluster with tiller.\nAdd the Zeebe Helm Repository:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"helm repo add zeebe ",(0,o.kt)("a",{parentName:"p",href:"https://helm.camunda.io"},"https://helm.camunda.io"),"\nhelm repo update")),(0,o.kt)("p",null,"Now you are ready to install the Zeebe Kubernetes Operator:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"helm install zeebe-operator zeebe/zeebe-operator")),(0,o.kt)("p",null,"Create my-zeebe-cluster.yaml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apiVersion: zeebe.zeebe.io/v1\nkind: ZeebeCluster\nmetadata:\n  name: my-zeebe-cluster\n")),(0,o.kt)("p",null,"Create the resource within the Kubernetes cluster with:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"kubectl apply -f my-zeebe-cluster.yaml")),(0,o.kt)("p",null,"This will create a new namespace with the name stated in the ZeebeCluster resource ( ",(0,o.kt)("inlineCode",{parentName:"p"},"ZeebeCluster.metadata.name")," ) and provision a new Zeebe Cluster plus ElasticSearch by default."),(0,o.kt)("p",null,"Future versions will allow you to specify in the ZeebeCluster resource which ElasticSearch instance to use. "),(0,o.kt)("p",null,"Notice that the first time provisioning a cluster, docker images will  be downloaded to the Kubernetes Docker Registry so the first cluster might take more time to be provisioned. "),(0,o.kt)("p",null,"You can now query for your Zeebe Clusters using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," CLI:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"kubectl get zb")),(0,o.kt)("p",null,"If you delete the ZeebeCluster resource the actual ZeebeCluster will be automatically removed from your cluster.\nNow you can check that there is a new \u201cNamespace\u201d created with:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"kubectl get ns")),(0,o.kt)("p",null,"And also check that the cluster is correctly provisioned by looking at the Pods created inside the newly created namespace with"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"kubectl get pods -n ",">","Zeebe Cluster Name","<"," -w")),(0,o.kt)("p",null,"The next video show these commands in action along with the installation of the Zeebe Kubernetes Operator:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.youtube.com/watch?v=U-crhMfuJgY",alt:"Intro video"})),(0,o.kt)("h2",{id:"technical-details-and-dependencies"},"Technical Details and Dependencies"),(0,o.kt)("p",null,"This Kubernetes Operator was built using KubeBuilder V2.1+, Tekton 0.8.0+ and Helm 3."),(0,o.kt)("p",null,"The Operator Defines currently 1 CRD (Custom Resource Definition): ",(0,o.kt)("inlineCode",{parentName:"p"},"ZeebeCluster"),", but in future versions, new types will be defined for other components such as Zeebe Operate and Workers.  The ZeebeCluster resource represent a low-level resource which will instantiate a Zeebe Cluster based on predefined parameters. This low-level resource definition can be used to define the cluster topology and HA configurations."),(0,o.kt)("p",null,"The Zeebe Kubernetes Operator was built using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kubebuilder"},"kubebuilder framework")," for writing the controller\u2019s logic and scaffolding the CRD type. Internally it does interact with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tektoncd/pipeline"},"Tekton Pipelines")," in order to install and manage Zeebe Helm Charts.  The project itself is being built, released and tested using ",(0,o.kt)("a",{parentName:"p",href:"https://jenkins-x.io/"},"Jenkins X"),". This leads to some changes in how KubeBuilder\u2019s project is structured, as in its current shape the project is not organised in a way that is easy to create a Helm Chart out of it."),(0,o.kt)("p",null,"The main flow of the Operator works like this:\n",(0,o.kt)("img",{alt:"Flow",src:n(1977).Z})),(0,o.kt)("p",null,"First, the Operator will be constantly looking for ZeebeCluster resources. When one is found a new Namespace is created and a Tekton Task and TaskRun are created to \u201cupgrade\u201d the Helm Charts defined inside the Version Stream repository (hosted here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-version-stream-helm"},"https://github.com/zeebe-io/zeebe-version-stream-helm")," )."),(0,o.kt)("p",null,"This repository (referred as Version Stream Repository) contains a list of blessed versions that will be installed when a new ZeebeCluster resource is detected by the operator. Using a Version Stream Repository provides us with the flexibility to evolve the operator code and the charts that define what needs to be provisioned independently. This allows for a simple upgrade path to future versions by using a Git repository as central reference to a stable version."),(0,o.kt)("p",null,"In future versions, the option to choose a version stream repository will be provided, allowing different streams."),(0,o.kt)("p",null,"The Task created in Tekton Pipelines execute two basic operations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First, clone Version Stream Repository (using simple git clone)\nRun Helm Upgrade of the chart defined in the Version Stream Repository (it will automatically upgrade/install if it doesn\u2019t exist)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Then, running Helm upgrade/install will create a Helm Release which can be upgraded if new versions of the charts are available. These releases can be queried using the Helm cli tool: ",(0,o.kt)("inlineCode",{parentName:"p"}," helm list --all-namespaces"),"."))),(0,o.kt)("p",null,"Once the Task is created an execution is triggered by the creation of a TaskRun (an actual instance of the task) and the operator will monitor for this task to be completed. Once the task is completed, the Operator watches for the Zeebe Cluster to be provisioned. In a more detailed look, the Operator will look for a StatefulSet (Zeebe Broker Nodes) with a set of labels matching the ZeebeCluster name, inside the created namespace."),(0,o.kt)("p",null,"Once the StatefulSet is located, the Operator assigns the ZeebeCluster resource as the Owner of this StatefulSet, hence it will be notified about the changes emitted by the resources associated to the StatefulSet. This allows the Operator to externalise a Health Status of the Zeebe Cluster at any given point, understanding the actual state of the cluster itself."))}p.isMDXComponent=!0},1977:function(e,t,n){"use strict";t.Z=n.p+"assets/images/zeebe-operator-flow-5f24067ff314ccbe50f89d6bc1c518cb.png"}}]);