"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4580],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3155:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={sidebar_position:8,title:"LET"},l=void 0,c={unversionedId:"c8ql/operations/let",id:"c8ql/operations/let",title:"LET",description:"The LET statement can be used to assign an arbitrary value to a variable. The variable is then introduced in the scope the LET statement is placed in.",source:"@site/docs/c8ql/operations/let.md",sourceDirName:"c8ql/operations",slug:"/c8ql/operations/let",permalink:"/docs/c8ql/operations/let",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/c8ql/operations/let.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"LET"},sidebar:"tutorialSidebar",previous:{title:"LIMIT",permalink:"/docs/c8ql/operations/limit"},next:{title:"COLLECT",permalink:"/docs/c8ql/operations/collect"}},u={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LET")," statement can be used to assign an arbitrary value to a variable. The variable is then introduced in the scope the ",(0,o.kt)("inlineCode",{parentName:"p"},"LET")," statement is placed in."),(0,o.kt)("p",null,"The general syntax is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"LET variableName = expression\n")),(0,o.kt)("p",null,"Variables are immutable in C8QL, which means they can not be re-assigned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"LET a = [1, 2, 3]  // initial assignment\n\na = PUSH(a, 4)     // syntax error, unexpected identifier\nLET a = PUSH(a, 4) // parsing error, variable 'a' is assigned multiple times\nLET b = PUSH(a, 4) // allowed, result: [1, 2, 3, 4]\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LET")," statements are mostly used to declare complex computations and to avoid repeated computations of the same value at multiple parts of a query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'FOR u IN users\n  LET numRecommendations = LENGTH(u.recommendations)\n  RETURN { \n    "user" : u, \n    "numRecommendations" : numRecommendations, \n    "isPowerUser" : numRecommendations >= 10 \n  } \n')),(0,o.kt)("p",null,"In the above example, the computation of the number of recommendations is factored out using a ",(0,o.kt)("inlineCode",{parentName:"p"},"LET")," statement, thus avoiding computing the value twice in the ",(0,o.kt)("inlineCode",{parentName:"p"},"RETURN")," statement."),(0,o.kt)("p",null,"Another use case for ",(0,o.kt)("inlineCode",{parentName:"p"},"LET")," is to declare a complex computation in a subquery, making the whole query more readable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'FOR u IN users\n  LET friends = (\n  FOR f IN friends \n    FILTER u.id == f.userId\n    RETURN f\n  )\n  LET memberships = (\n  FOR m IN memberships\n    FILTER u.id == m.userId\n      RETURN m\n  )\n  RETURN { \n    "user" : u, \n    "friends" : friends, \n    "numFriends" : LENGTH(friends), \n    "memberShips" : memberships \n  }\n')))}d.isMDXComponent=!0}}]);