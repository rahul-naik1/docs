"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[520],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,y=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return t?a.createElement(y,c(c({ref:n},m),{},{components:t})):a.createElement(y,c({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},16153:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),c=["components"],s={},i="Connect to dynamodb C8",l={unversionedId:"collections/dynamo/reference/readme",id:"collections/dynamo/reference/readme",title:"Connect to dynamodb C8",description:"Node/Javascript",source:"@site/docs/collections/dynamo/reference/readme.md",sourceDirName:"collections/dynamo/reference",slug:"/collections/dynamo/reference/",permalink:"/docs/collections/dynamo/reference/",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/collections/dynamo/reference/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using mmDynamo Javascript SDK",permalink:"/docs/collections/dynamo/using-mmdynamo-browser"},next:{title:"createNewItem",permalink:"/docs/collections/dynamo/reference/createNewItem"}},m={},p=[{value:"Node/Javascript",id:"nodejavascript",level:2},{value:"Browser",id:"browser",level:2},{value:"Examples",id:"examples",level:2}],d={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-to-dynamodb-c8"},"Connect to dynamodb C8"),(0,o.kt)("h2",{id:"nodejavascript"},"Node/Javascript"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install AWS SDK"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"npm install aws-sdk --save\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Import package"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// import entire SDK\nimport AWS from "aws-sdk";\n\n// import AWS object without services\nimport AWS from "aws-sdk/global";\n\n// import individual service\nimport DynamoDB from "aws-sdk/clients/dynamodb";\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Initialize Dynamodb with C8 Dynamo"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import AWS from "aws-sdk";\n\nconst dcName = "test.macrometa.io";\nconst host = "https://api-" + dcName;\nconst apiKey = "xxxxxxxxxxxxxxxxxxxxxx";\n/*\nIf you have a JWT token\n\nconst JWT = "xxxxxxxxxxxxxxxxxxxxxx";\n*/\n\nconst service = "dynamodb";\nconst region = "us-east-1";\nconst endpoint = host + "/_api/dynamo";\n// secretAccessKey is a required parameter for aws-sdk we recommend you to pass "c8"\nconst secretAccessKey = "c8";\nconst accessKeyId = "apikey " + apiKey;\n/*\nIf you are using JWT token use the below instead\n\nconst accessKeyId = "bearer " + JWT;\n*/\n\nAWS.config.update({\nregion,\nendpoint,\naccessKeyId,\nsecretAccessKey,\n});\n\nvar dynamodb = new AWS.DynamoDB();\n...\n...\n')))),(0,o.kt)("h2",{id:"browser"},"Browser"),(0,o.kt)("p",null,"If you want to sign and send AWS requests in a modern browser, or an environment like Cloudflare Workers, for dynamodb instance checkout ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mmdynamo"},"mmdynamo"),", everything else check out ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/aws4fetch"},"aws4fetch"),". Consider reading API References for AWS service you are using(eg: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/Welcome.html"},"dynamodb"),")"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add AWS SDK"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://sdk.amazonaws.com/js/aws-sdk-2.7.16.min.js"><\/script>\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Initialize Dynamodb with C8 Dynamo"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript">\n\n  const dcName = "test.macrometa.io";\n  const host = "https://api-" + dcName;\n  const apiKey = "xxxxxxxxxxxxxxxxxxxxxx";\n  /*\n  If you have a JWT token\n\n  const JWT = "xxxxxxxxxxxxxxxxxxxxxx";\n  */\n\n  const service = "dynamodb";\n  const region = "us-east-1";\n  const endpoint = host + "/_api/dynamo";\n  // secretAccessKey is a required parameter for aws-sdk we recommend you to pass "c8"\n  const secretAccessKey = "c8";\n  const accessKeyId = "apikey " + apiKey;\n  /*\n  If you are using JWT token use the below instead\n\n  const accessKeyId = "bearer " + JWT;\n  */\n\n  AWS.config.update({\n  region,\n  endpoint,\n  accessKeyId,\n  secretAccessKey,\n  });\n\n  var dynamodb = new AWS.DynamoDB();\n  ...\n  ...\n<\/script>\n')))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/collections/dynamo/reference/createTable"},"Create a Table")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/collections/dynamo/reference/createNewItem"},"Create New Item")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/collections/dynamo/reference/readAnItem"},"Read an Item")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/collections/dynamo/reference/updateAnItem"},"Update an Item")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/collections/dynamo/reference/deleteAnItem"},"Delete an Item")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/collections/dynamo/reference/updateTable"},"Update Table")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/collections/dynamo/reference/deleteTable"},"Delete a Table"))))}u.isMDXComponent=!0}}]);