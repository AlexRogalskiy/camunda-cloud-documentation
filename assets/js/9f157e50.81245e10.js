(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[48478],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63215:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o={id:"authorization",title:"Authorization"},l=void 0,s={unversionedId:"product-manuals/zeebe/deployment-guide/security/authorization",id:"product-manuals/zeebe/deployment-guide/security/authorization",isDocsHomePage:!1,title:"Authorization",description:"Zeebe clients also provide a way for users to modify gRPC call headers, namely to contain access tokens. Note that the gateway doesn't provide any way of validating these headers, so users must implement a reverse proxy with a gRPC interceptor to validate them.",source:"@site/docs/product-manuals/zeebe/deployment-guide/security/authorization.md",sourceDirName:"product-manuals/zeebe/deployment-guide/security",slug:"/product-manuals/zeebe/deployment-guide/security/authorization",permalink:"/docs/product-manuals/zeebe/deployment-guide/security/authorization",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/deployment-guide/security/authorization.md",version:"current",frontMatter:{id:"authorization",title:"Authorization"},sidebar:"Product Manuals",previous:{title:"Authentication",permalink:"/docs/product-manuals/zeebe/deployment-guide/security/authentication"},next:{title:"Overview",permalink:"/docs/product-manuals/zeebe/deployment-guide/operations/index"}},d=[{value:"Credentials provider",id:"credentials-provider",children:[{value:"Java",id:"java",children:[]},{value:"Go",id:"go",children:[]}]},{value:"OAuthCredentialsProvider",id:"oauthcredentialsprovider",children:[{value:"Java",id:"java-1",children:[]},{value:"Go",id:"go-1",children:[]},{value:"Environment variables",id:"environment-variables",children:[]}]}],c={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Zeebe clients also provide a way for users to modify gRPC call headers, namely to contain access tokens. Note that the gateway doesn't provide any way of validating these headers, so users must implement a reverse proxy with a gRPC interceptor to validate them."),(0,a.kt)("p",null,"Users can modify gRPC headers using Zeebe's built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"OAuthCredentialsProvider"),", which uses user-specified credentials to contact a OAuth authorization server. The authorization server should return an access token that is then appended to each gRPC request. Although, by default ",(0,a.kt)("inlineCode",{parentName:"p"},"OAuthCredentialsProvider")," is configured with to use a Camunda Cloud authorization server, it can be configured to use any user-defined server. Users can also write a custom ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/camunda-cloud/zeebe/blob/develop/clients/java/src/main/java/io/camunda/zeebe/client/CredentialsProvider.java"},"CredentialsProvider"),". In the following sections we will describe the ",(0,a.kt)("inlineCode",{parentName:"p"},"CredentialsProvider")," interface as well as the built-in implementation."),(0,a.kt)("h2",{id:"credentials-provider"},"Credentials provider"),(0,a.kt)("p",null,"As previously mentioned, the ",(0,a.kt)("inlineCode",{parentName:"p"},"CredentialProvider"),"'s purpose is to modify the gRPC headers with an authorization method such that a reverse proxy sitting in front of the gateway can validate them. The interface consists of an ",(0,a.kt)("inlineCode",{parentName:"p"},"applyCredentials")," method and a ",(0,a.kt)("inlineCode",{parentName:"p"},"shouldRetryRequest")," method. The first method is called for each gRPC call and takes a map of headers to which it should add credentials. The second method is called whenever a gRPC call fails and takes in the error that caused the failure which is then used to decide whether or not the request should be retried. The following sections implement simple custom provider in Java and Go."),(0,a.kt)("h3",{id:"java"},"Java"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class MyCredentialsProvider implements CredentialsProvider {\n    /**\n     * Adds a token to the Authorization header of a gRPC call.\n    */\n    @Override\n    public void applyCredentials(final Metadata headers) {\n      final Key<String> authHeaderkey = Key.of("Authorization", Metadata.ASCII_STRING_MARSHALLER);\n      headers.put(authHeaderKey, "Bearer someToken");\n    }\n\n    /**\n    * Retries request if it failed with a timeout.\n    */\n    @Override\n    public boolean shouldRetryRequest(final Throwable throwable) {\n      return ((StatusRuntimeException) throwable).getStatus() == Status.DEADLINE_EXCEEDED;\n    }\n}\n')),(0,a.kt)("p",null,"After implementing the ",(0,a.kt)("inlineCode",{parentName:"p"},"CredentialsProvider"),", we can simply provide it when building a client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class SecureClient {\n    public static void main(final String[] args) {\n      final ZeebeClient client = ZeebeClient.newClientBuilder().credentialsProvider(new MyCredentialsProvider()).build();\n\n      // continue...\n    }\n}\n")),(0,a.kt)("h3",{id:"go"},"Go"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "google.golang.org/grpc/status"\n    "google.golang.org/grpc/codes"\n    "github.com/zeebe-io/zeebe/clients/go/pkg/zbc"\n)\n\ntype MyCredentialsProvider struct {\n}\n\n// ApplyCredentials adds a token to the Authorization header of a gRPC call.\nfunc (p *MyCredentialsProvider) ApplyCredentials(ctx context.Context, headers map[string]string) error {\n    headers["Authorization"] = "someToken"\n    return nil\n}\n\n// ShouldRetryRequest returns true if the call failed with a deadline exceed error.\nfunc (p *MyCredentialsProvider) ShouldRetryRequest(ctx context.Context, err error) bool {\n    return status.Code(err) == codes.DeadlineExceeded\n}\n\nfunc main() {\n    client, err := zbc.NewClient(&zbc.ClientConfig{\n        CredentialsProvider:  &MyCredentialsProvider{},\n    })\n    if err != nil {\n      panic(err)\n    }\n\n    ctx := context.Background()\n    response, err := client.NewTopologyCommand().Send(ctx)\n    if err != nil {\n      panic(err)\n    }\n\n    fmt.Println(response.String())\n}\n')),(0,a.kt)("h2",{id:"oauthcredentialsprovider"},"OAuthCredentialsProvider"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"OAuthCredentialsProvider")," requires the specification of a client ID and a client secret. These are then used to request an access token from an OAuth 2.0 authorization server through a ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6749#section-4.4"},"client credentials flow"),". By default, the authorization server is the one used by Camunda Cloud but any other can be used. Using the access token returned by the authorization server, the ",(0,a.kt)("inlineCode",{parentName:"p"},"OAuthCredentialsProvider")," will add it to the gRPC headers of each request as a bearer token. Requests which fail with an ",(0,a.kt)("inlineCode",{parentName:"p"},"UNAUTHENTICATED")," gRPC code are seamlessly retried if and only if a new access token can be obtained."),(0,a.kt)("h3",{id:"java-1"},"Java"),(0,a.kt)("p",null,"To use the Zeebe client with Camunda Cloud, first an ",(0,a.kt)("inlineCode",{parentName:"p"},"OAuthCredentialsProvider")," has to be created and configured with the appropriate client credentials. The ",(0,a.kt)("inlineCode",{parentName:"p"},"audience")," should be equivalent to the cluster endpoint without a port number."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class AuthorizedClient {\n    public void main(String[] args) {\n        final OAuthCredentialsProvider provider =\n          new OAuthCredentialsProviderBuilder()\n              .clientId("clientId")\n              .clientSecret("clientSecret")\n              .audience("cluster.endpoint.com")\n              .build();\n\n        final ZeebeClient client =\n            new ZeebeClientBuilderImpl()\n                .gatewayAddress("cluster.endpoint.com:443")\n                .credentialsProvider(provider)\n                .build();\n\n        System.out.println(client.newTopologyRequest().send().join().toString());\n    }\n}\n')),(0,a.kt)("p",null,"For security reasons, client secrets should not be hardcoded. Therefore, the recommended way of passing client secrets into Zeebe is to use environment variables. Although several variables are supported, the ones required to set up a minimal client are ",(0,a.kt)("inlineCode",{parentName:"p"},"ZEEBE_CLIENT_ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ZEEBE_CLIENT_SECRET"),". After setting these variables to the correct values, the following would be equivalent to the previous code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class AuthorizedClient {\n    public void main(final String[] args) {\n        final ZeebeClient client =\n            new ZeebeClientBuilderImpl()\n                .gatewayAddress("cluster.endpoint.com:443")\n                .build();\n\n        System.out.println(client.newTopologyRequest().send().join().toString());\n    }\n}\n')),(0,a.kt)("p",null,"The client will create an ",(0,a.kt)("inlineCode",{parentName:"p"},"OAuthCredentialProvider")," with the credentials specified through the environment variables and the audience will be extracted from the address specified through the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZeebeClientBuilder"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Zeebe's Java client will not prevent you from adding credentials to gRPC calls while using an insecure connection but you should be aware that doing so will expose your access token by transmiting it in plaintext.")),(0,a.kt)("h3",{id:"go-1"},"Go"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/zeebe-io/zeebe/clients/go/pkg/zbc"\n)\n\nfunc main() {\n    credsProvider, err := zbc.NewOAuthCredentialsProvider(&zbc.OAuthProviderConfig{\n        ClientID:     "clientId",\n        ClientSecret: "clientSecret",\n        Audience:     "cluster.endpoint.com",\n    })\n    if err != nil {\n        panic(err)\n    }\n\n    client, err := zbc.NewClient(&zbc.ClientConfig{\n        GatewayAddress:      "cluster.endpoint.com:443",\n        CredentialsProvider: credsProvider,\n    })\n    if err != nil {\n        panic(err)\n    }\n\n\n    ctx := context.Background()\n    response, err := client.NewTopologyCommand().Send(ctx)\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Println(response.String())\n}\n')),(0,a.kt)("p",null,"As was the case with the Java client, it's possible to make use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZEEBE_CLIENT_ID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ZEEBE_CLIENT_SECRET")," environment variables to simplify the client configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/zeebe-io/zeebe/clients/go/pkg/zbc"\n)\n\nfunc main() {\n    client, err := zbc.NewClient(&zbc.ClientConfig{\n        GatewayAddress: "cluster.endpoint.com:443",\n    })\n    if err != nil {\n        panic(err)\n    }\n\n    ctx := context.Background()\n    response, err := client.NewTopologyCommand().Send(ctx)\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Println(response.String())\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Like the Java client, the Go client will not prevent you from adding credentials to gRPC calls while using an insecure connection but doing so will expose your access token.")),(0,a.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,a.kt)("p",null,"Since there are several environment variables that can be used to configure an ",(0,a.kt)("inlineCode",{parentName:"p"},"OAuthCredentialsProvider"),", we list them here along with their uses:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ZEEBE_CLIENT_ID")," - the client ID used to request an access token from the authorization server"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ZEEBE_CLIENT_SECRET")," - the client secret used to request an access token from the authorization server"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ZEEBE_TOKEN_AUDIENCE")," - the address for which the token should be valid"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ZEEBE_AUTHORIZATION_SERVER_URL")," - the URL of the authorization server from which the access token will be requested (by default, configured for Camunda Cloud)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ZEEBE_CLIENT_CONFIG_PATH")," - the path to a cache file where the access tokens will be stored (by default, it's ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.camunda/credentials"),")")))}u.isMDXComponent=!0}}]);