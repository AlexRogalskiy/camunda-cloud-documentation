(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[41681],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=s(r),g=a,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||c;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61612:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u},default:function(){return l}});var n=r(22122),a=r(19756),c=(r(67294),r(3905)),i={id:"create-cluster",title:"Create a Cluster"},o={unversionedId:"guides/getting-started/create-cluster",id:"version-0.25/guides/getting-started/create-cluster",isDocsHomePage:!1,title:"Create a Cluster",description:"After login you'll see the console overview page. Since you haven't created a cluster, the overview will be empty.",source:"@site/versioned_docs/version-0.25/guides/getting-started/create-cluster.md",sourceDirName:"guides/getting-started",slug:"/guides/getting-started/create-cluster",permalink:"/docs/0.25/guides/getting-started/create-cluster",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/guides/getting-started/create-cluster.md",version:"0.25",frontMatter:{id:"create-cluster",title:"Create a Cluster"},sidebar:"version-0.25/Guides",previous:{title:"Create Camunda Cloud Account",permalink:"/docs/0.25/guides/getting-started/create-camunda-cloud-account"},next:{title:"Setup Client connection credentials",permalink:"/docs/0.25/guides/getting-started/setup-client-connection-credentials"}},u=[],s={toc:u};function l(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"After login you'll see the console overview page. Since you haven't created a cluster, the overview will be empty."),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"cluster-creating",src:r(37371).Z})),(0,c.kt)("p",null,"In the upper right area you'll find the button ",(0,c.kt)("em",{parentName:"p"},"Create New Cluster"),". Click on it to create a new cluster. After you've assigned a name and created the cluster, a new entry appears in the overview:"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"cluster-creating",src:r(8069).Z})),(0,c.kt)("p",null,"For this Getting Started Tutorial, close the dialog box that pops up immediately after creating a new cluster."),(0,c.kt)("p",null,"The cluster is now being set up. During this phase, its state is ",(0,c.kt)("em",{parentName:"p"},"Creating"),". After one or two minutes the cluster is ready for use and changes its state to ",(0,c.kt)("em",{parentName:"p"},"healthy"),":"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"cluster-healthy",src:r(23096).Z})),(0,c.kt)("p",null,"After the cluster has been created, you can jump into the cluster detail page by clicking on the cluster name."))}l.isMDXComponent=!0},37371:function(e,t,r){"use strict";t.Z=r.p+"assets/images/cluster-overview-empty-b938e3460e6f200302f4eaefa86e5a4b.png"},8069:function(e,t,r){"use strict";t.Z=r.p+"assets/images/cluster-overview-new-cluster-creating-892b642ce0dc481e805faae148a953d3.png"},23096:function(e,t,r){"use strict";t.Z=r.p+"assets/images/cluster-overview-new-cluster-healthy-0620002081bea873c668d498cc3ababc.png"}}]);