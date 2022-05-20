"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8377],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53526:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],l={},i="S3",c={unversionedId:"cep/reference/extensions/io/s3",id:"cep/reference/extensions/io/s3",title:"S3",description:"This extension allows to publish events to Amazon AWS S3 buckets.",source:"@site/docs/cep/reference/extensions/io/s3.md",sourceDirName:"cep/reference/extensions/io",slug:"/cep/reference/extensions/io/s3",permalink:"/docs/cep/reference/extensions/io/s3",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/reference/extensions/io/s3.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Apache Kafka (beta)",permalink:"/docs/cep/reference/extensions/io/kafka"},next:{title:"JSON",permalink:"/docs/cep/reference/extensions/mappers/json"}},u={},p=[{value:"Features",id:"features",level:2},{value:"S3 Sink",id:"s3-sink",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"s3"},"S3"),(0,o.kt)("p",null,"This extension allows to publish events to Amazon AWS S3 buckets."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"#s3-sink"},"S3 (Sink)"))),(0,o.kt)("p",{parentName:"li"},"  S3 sink publishes events as Amazon AWS S3 buckets."))),(0,o.kt)("h2",{id:"s3-sink"},"S3 Sink"),(0,o.kt)("p",null,"S3 sink publishes events as Amazon AWS S3 buckets."),(0,o.kt)("p",null,"Syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'CREATE SINK <name> WITH (type="s3", credential.provider.class="<STRING>", aws.access.key="<STRING>", aws.secret.key="<STRING>", bucket.name="<STRING>", aws.region="<STRING>", versioning.enabled="<BOOL>", object.path="<STRING>", storage.class="<STRING>", content.type="<STRING>", bucket.acl="<STRING>", node.id="<STRING>", map.type="<STRING>")\n')),(0,o.kt)("p",null,"QUERY PARAMETERS:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible Data Types"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Dynamic"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"credential.provider.class"),(0,o.kt)("td",{parentName:"tr",align:null},"AWS credential provider class to be used. If blank along with the username and the password, default credential provider will be used."),(0,o.kt)("td",{parentName:"tr",align:null},"EMPTY_STRING"),(0,o.kt)("td",{parentName:"tr",align:null},"STRING"),(0,o.kt)("td",{parentName:"tr",align:null},"YES"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))),(0,o.kt)("p",null,"| aws.access.key | AWS access key. This cannot be used along with the credential.provider.class| EMPTY_STRING | STRING | YES | No |"),(0,o.kt)("p",null,"| aws.secret.key| AWS secret key. This cannot be used along with the credential.provider.class| EMPTY_STRING | STRING | YES | No |"),(0,o.kt)("p",null,"| bucket.name | Name of S3 bucket |  | STRING | No | No |"),(0,o.kt)("p",null,"| aws.region | The region to be used to create the bucket | EMPTY_STRING | STRING | YES | No |"),(0,o.kt)("p",null,"| versioning.enabled | Flag to enable versioning support in the bucket.| false | BOOL | YES | No |"),(0,o.kt)("p",null,"| object.path | Path for each S3 object|  | STRING | No | YES |"),(0,o.kt)("p",null,"| storage.class | AWS storage class| standard | STRING | YES | No |"),(0,o.kt)("p",null,"| content.type | Content type of the event | application/octet-stream | STRING | YES | YES |"),(0,o.kt)("p",null,"| bucket.acl | Access control list for the bucket.| EMPTY_STRING | STRING | YES | No |"),(0,o.kt)("p",null,"| node.id | The node ID of the current publisher. This needs to be unique for each publisher instance as it may cause object overwrites while uploading the objects to same S3 bucket from different publishers. | EMPTY_STRING | STRING | YES | No |"),(0,o.kt)("p",null,"EXAMPLE 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"CREATE SINK UserStream WITH (type='s3', bucket.name='user-stream-bucket', object.path='bar/users', credential.provider='software.amazon.awssdk.auth.credentials.ProfileCredentialsProvider', flush.size='3', map.type='json', enclosing.element='$.user', map.payload=\"\"\"{\"name\": \"{{name}}\", \"age\": {{age}}}\"\"\") (name string, age int);  \n")),(0,o.kt)("p",null,"This creates a S3 bucket named ",(0,o.kt)("inlineCode",{parentName:"p"},"user-stream-bucket"),". Then this will collect 3 events together and create a JSON object and save that in S3."))}m.isMDXComponent=!0}}]);