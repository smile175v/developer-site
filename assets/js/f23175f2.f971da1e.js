"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[9027],{99278:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(59301);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(c,".").concat(d)]||u[d]||s[d]||i;return n?r.createElement(g,l(l({ref:t},m),{},{components:n})):r.createElement(g,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26565:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var r=n(21810),a=n(86919),i=(n(59301),n(99278)),l=["components"],o={title:"\u81ea\u5b9a\u4e49\u9875\u9762\u9009\u62e9\u884c\u81ea\u52a8\u6c42\u548c",order:18},c="1. \u573a\u666f",p={unversionedId:"examples/customGetSum",id:"examples/customGetSum",title:"\u81ea\u5b9a\u4e49\u9875\u9762\u9009\u62e9\u884c\u81ea\u52a8\u6c42\u548c",description:"\u5728\u81ea\u5b9a\u4e49\u9875\u9762\u5c55\u793a\u6570\u636e\u65f6\uff0c\u6709\u65f6\u4f1a\u9700\u8981\u5c06\u9009\u4e2d\u7684\u591a\u884c\u6570\u636e\u6570\u503c\u8fdb\u884c\u52a0\u6cd5\u8fd0\u7b97\uff0c\u90a3\u4e48\u8fd9\u65f6\u6211\u4eec\u8be5\u5982\u4f55\u5feb\u901f\u7684\u8ba1\u7b97\u51fa\u9009\u4e2d\u884c\u6570\u503c\u7684\u603b\u548c\u5e76\u5c55\u793a\u5728\u9875\u9762\u4e2d\u5462\uff1f\u90a3\u4e48\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u5c06\u7ed9\u5927\u5bb6\u6f14\u793a\u5982\u4f55\u5b9e\u73b0\u81ea\u5b9a\u4e49\u9875\u9762\u9009\u62e9\u884c\u81ea\u52a8\u6c42\u548c\u3002",source:"@site/docs/examples/customGetSum.md",sourceDirName:"examples",slug:"/examples/customGetSum",permalink:"/docs/examples/customGetSum",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/examples/customGetSum.md",tags:[],version:"current",frontMatter:{title:"\u81ea\u5b9a\u4e49\u9875\u9762\u9009\u62e9\u884c\u81ea\u52a8\u6c42\u548c",order:18},sidebar:"examples",previous:{title:"\u4f7f\u7528\u9489\u9489JSAPI",permalink:"/docs/examples/dingTalkAPI"},next:{title:"\u96c6\u6210&\u81ea\u52a8\u5316 \u2014 \u521b\u5efa\u65e5\u7a0b",permalink:"/docs/examples/createSchedule"}},m=[{value:"2.1 \u521b\u5efa\u9875\u9762",id:"21-\u521b\u5efa\u9875\u9762",children:[],level:2},{value:"2.2 \u8fdc\u7a0b\u6570\u636e\u6e90\u83b7\u53d6\u5f85\u529e\u5c55\u793a\u5728\u8868\u683c\u4e2d",id:"22-\u8fdc\u7a0b\u6570\u636e\u6e90\u83b7\u53d6\u5f85\u529e\u5c55\u793a\u5728\u8868\u683c\u4e2d",children:[{value:"2.2.1 \u589e\u52a0\u8fdc\u7a0b\u6570\u636e\u6e90\uff0c\u8c03\u7528\u300c\u6839\u636e\u6761\u4ef6\u641c\u7d22\u8868\u5355\u5b9e\u4f8b\u8be6\u60c5\u5217\u8868\u300d\u63a5\u53e3",id:"221-\u589e\u52a0\u8fdc\u7a0b\u6570\u636e\u6e90\u8c03\u7528\u6839\u636e\u6761\u4ef6\u641c\u7d22\u8868\u5355\u5b9e\u4f8b\u8be6\u60c5\u5217\u8868\u63a5\u53e3",children:[],level:3},{value:"2.2.2 \u5c06\u8fd4\u56de\u6570\u636e\u5904\u7406\u6210\u8868\u683c\u683c\u5f0f",id:"222-\u5c06\u8fd4\u56de\u6570\u636e\u5904\u7406\u6210\u8868\u683c\u683c\u5f0f",children:[],level:3},{value:"2.2.3 \u5c06\u5904\u7406\u597d\u7684\u6570\u636e\u5c55\u793a\u5728\u8868\u683c\u4e2d",id:"223-\u5c06\u5904\u7406\u597d\u7684\u6570\u636e\u5c55\u793a\u5728\u8868\u683c\u4e2d",children:[],level:3},{value:"2.2.4 \u914d\u7f6e\u8868\u683c\u5206\u9875",id:"224-\u914d\u7f6e\u8868\u683c\u5206\u9875",children:[],level:3}],level:2},{value:"2.3 \u5f00\u542f\u884c\u9009\u62e9\u5e76\u5c06\u83b7\u53d6\u6570\u636e\u6c42\u548c",id:"23-\u5f00\u542f\u884c\u9009\u62e9\u5e76\u5c06\u83b7\u53d6\u6570\u636e\u6c42\u548c",children:[{value:"2.3.1 \u6253\u5f00\u884c\u9009\u62e9\u5668",id:"231-\u6253\u5f00\u884c\u9009\u62e9\u5668",children:[],level:3},{value:"2.3.2 \u6dfb\u52a0\u9009\u62e9\u53d8\u52a8\u56de\u8c03\u51fd\u6570\u5e76\u6c42\u548c\u8d4b\u503c",id:"232-\u6dfb\u52a0\u9009\u62e9\u53d8\u52a8\u56de\u8c03\u51fd\u6570\u5e76\u6c42\u548c\u8d4b\u503c",children:[{value:"\uff081\uff09\u6dfb\u52a0\u9009\u62e9\u53d8\u52a8\u56de\u8c03\u51fd\u6570",id:"1\u6dfb\u52a0\u9009\u62e9\u53d8\u52a8\u56de\u8c03\u51fd\u6570",children:[],level:4},{value:"\uff082\uff09\u83b7\u53d6\u884c\u6570\u636e\u5e76\u6c42\u548c\u8d4b\u503c",id:"2\u83b7\u53d6\u884c\u6570\u636e\u5e76\u6c42\u548c\u8d4b\u503c",children:[],level:4}],level:3}],level:2}],s={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-\u573a\u666f"},"1. \u573a\u666f"),(0,i.kt)("p",null,"\u5728\u81ea\u5b9a\u4e49\u9875\u9762\u5c55\u793a\u6570\u636e\u65f6\uff0c\u6709\u65f6\u4f1a\u9700\u8981\u5c06\u9009\u4e2d\u7684\u591a\u884c\u6570\u636e\u6570\u503c\u8fdb\u884c\u52a0\u6cd5\u8fd0\u7b97\uff0c\u90a3\u4e48\u8fd9\u65f6\u6211\u4eec\u8be5\u5982\u4f55\u5feb\u901f\u7684\u8ba1\u7b97\u51fa\u9009\u4e2d\u884c\u6570\u503c\u7684\u603b\u548c\u5e76\u5c55\u793a\u5728\u9875\u9762\u4e2d\u5462\uff1f\u90a3\u4e48\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u5c06\u7ed9\u5927\u5bb6\u6f14\u793a\u5982\u4f55\u5b9e\u73b0\u81ea\u5b9a\u4e49\u9875\u9762\u9009\u62e9\u884c\u81ea\u52a8\u6c42\u548c\u3002"),(0,i.kt)("h1",{id:"2-\u5b9e\u73b0\u6b65\u9aa4"},"2. \u5b9e\u73b0\u6b65\u9aa4"),(0,i.kt)("h2",{id:"21-\u521b\u5efa\u9875\u9762"},"2.1 \u521b\u5efa\u9875\u9762"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u300c\u57fa\u7840\u6570\u636e\u8868\u300d\uff1a "),"\u8868\u5355\u9875\u9762\uff0c\u5b58\u50a8\u57fa\u7840\u6570\u636e\uff0c\u5982\u6807\u9898\u53ca\u6570\u503c\u3002\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01j9dlf31hkmA4JWX2h_!!6000000004316-2-tps-1364-462.png",alt:"image.png"}),"\n\u57fa\u7840\u6570\u636e\u8868\n",(0,i.kt)("strong",{parentName:"p"},"\u300c\u81ea\u5b9a\u4e49\u9875\u9762\u6c42\u548c\u300d\uff1a"),"\u81ea\u5b9a\u4e49\u9875\u9762\uff0c\u4f7f\u7528\u8868\u683c\u7ec4\u4ef6\uff0c\u5e76\u653e\u5165\u6570\u503c\u7ec4\u4ef6\u7528\u6765\u5c55\u793a\u6c42\u548c\u6570\u636e\u3002\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01BlRTTv1mDrmTA7fHV_!!6000000004921-2-tps-2280-718.png",alt:"image.png"}),"\n\u81ea\u5b9a\u4e49\u9875\u9762\u6c42\u548c"),(0,i.kt)("h2",{id:"22-\u8fdc\u7a0b\u6570\u636e\u6e90\u83b7\u53d6\u5f85\u529e\u5c55\u793a\u5728\u8868\u683c\u4e2d"},"2.2 \u8fdc\u7a0b\u6570\u636e\u6e90\u83b7\u53d6\u5f85\u529e\u5c55\u793a\u5728\u8868\u683c\u4e2d"),(0,i.kt)("h3",{id:"221-\u589e\u52a0\u8fdc\u7a0b\u6570\u636e\u6e90\u8c03\u7528\u6839\u636e\u6761\u4ef6\u641c\u7d22\u8868\u5355\u5b9e\u4f8b\u8be6\u60c5\u5217\u8868\u63a5\u53e3"},"2.2.1 \u589e\u52a0\u8fdc\u7a0b\u6570\u636e\u6e90\uff0c\u8c03\u7528\u300c\u6839\u636e\u6761\u4ef6\u641c\u7d22\u8868\u5355\u5b9e\u4f8b\u8be6\u60c5\u5217\u8868\u300d\u63a5\u53e3"),(0,i.kt)("p",null,"\u53c2\u8003\u6587\u6863\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://www.yuque.com/yida/support/aql605?view=doc_embed&inner=936pox"},"\u5b9c\u642d\u5e73\u53f0\u63a5\u53e3\uff08\u9875\u9762\u6570\u636e\u6e90\u53ef\u76f4\u63a5\u8c03\u7528\uff09"),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01L9e3gw1FquDdx0tJO_!!6000000000539-2-tps-2060-1084.png",alt:"image.png"}),"\n\u521b\u5efa\u8fdc\u7a0b\u6570\u636e\u6e90\uff0c\u914d\u7f6e\u83b7\u53d6\u8868\u5355\u6570\u636e\u63a5\u53e3"),(0,i.kt)("h3",{id:"222-\u5c06\u8fd4\u56de\u6570\u636e\u5904\u7406\u6210\u8868\u683c\u683c\u5f0f"},"2.2.2 \u5c06\u8fd4\u56de\u6570\u636e\u5904\u7406\u6210\u8868\u683c\u683c\u5f0f"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01Ni9AtZ23DGjORMBie_!!6000000007221-2-tps-2080-1044.png",alt:"image.png"}),"\n\u6dfb\u52a0\u8bf7\u6c42\u5b8c\u6210\u65f6\u56de\u8c03\u51fd\u6570\uff08didFench\uff09"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728value\u4e2d\u5b9a\u4e49\u9700\u8981\u4f7f\u7528\u7684\u5185\u5bb9\uff0c\u540c\u65f6\u9700\u8981\u7ed9\u8868\u683c\u7684\u6570\u636e\u4e3b\u952e\u914d\u7f6e\u552f\u4e00\u503c\uff0c\u56e0\u6b64\u5c06\u300cformInstId\u300d\uff0c\u5373\u5b9e\u4f8bID\u4f5c\u4e3a\u4e3b\u952e\u3002"))),(0,i.kt)("p",null,"\u53c2\u8003\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function didFetch(content) {\n  // content.b = 1; \u4fee\u6539\u8fd4\u56de\u6570\u636e\u7ed3\u6784\u4e2d\u7684 b \u5b57\u6bb5\u4e3a1\n  const arr = [];\n    const data = content.data.map((item) => {\n      let value = {\n        name: item.formData.textField_ktwjybnu,\n        salary: item.formData.numberField_ktwjybny,\n        formInstId: item.formInstId,\n       }\n      arr.push(value)\n    })\n  const result = {\n    "data": arr,\n    "totalCount": content.totalCount,\n    "currentPage": content.currentPage,\n  }\n  return result; // \u91cd\u8981\uff0c\u9700\u8fd4\u56de content\n}\n')),(0,i.kt)("h3",{id:"223-\u5c06\u5904\u7406\u597d\u7684\u6570\u636e\u5c55\u793a\u5728\u8868\u683c\u4e2d"},"2.2.3 \u5c06\u5904\u7406\u597d\u7684\u6570\u636e\u5c55\u793a\u5728\u8868\u683c\u4e2d"),(0,i.kt)("p",null,"\u7ed9\u8868\u683c\u7ed1\u5b9a\u6570\u636e\u6e90\uff0c\u5e76\u914d\u7f6e formInstId \u4e3a\u6570\u636e\u4e3b\u952e\u3002\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01Gq3UqI1SWNTHX6eTS_!!6000000002254-1-tps-1380-735.gif",alt:"\u81ea\u5b9a\u4e49\u9875\u9762\u6c42\u548c1.gif"}),"\n\u7ed1\u5b9a\u6570\u636e\u6e90\u5e76\u914d\u7f6e\u4e3b\u952e"),(0,i.kt)("h3",{id:"224-\u914d\u7f6e\u8868\u683c\u5206\u9875"},"2.2.4 \u914d\u7f6e\u8868\u683c\u5206\u9875"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01wFkonf1PFU18rxzNe_!!6000000001811-1-tps-1380-735.gif",alt:"\u81ea\u5b9a\u4e49\u9875\u9762\u6c42\u548c2.gif"}),"\n\u6dfb\u52a0\u5206\u9875\u52a8\u4f5c"),(0,i.kt)("h2",{id:"23-\u5f00\u542f\u884c\u9009\u62e9\u5e76\u5c06\u83b7\u53d6\u6570\u636e\u6c42\u548c"},"2.3 \u5f00\u542f\u884c\u9009\u62e9\u5e76\u5c06\u83b7\u53d6\u6570\u636e\u6c42\u548c"),(0,i.kt)("h3",{id:"231-\u6253\u5f00\u884c\u9009\u62e9\u5668"},"2.3.1 \u6253\u5f00\u884c\u9009\u62e9\u5668"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01VnkC7Q1G9gSXAW3ZY_!!6000000000580-1-tps-1380-735.gif",alt:"\u81ea\u5b9a\u4e49\u9875\u9762\u6c42\u548c3.gif"}),"\n\u6253\u5f00\u884c\u9009\u62e9\u5668"),(0,i.kt)("h3",{id:"232-\u6dfb\u52a0\u9009\u62e9\u53d8\u52a8\u56de\u8c03\u51fd\u6570\u5e76\u6c42\u548c\u8d4b\u503c"},"2.3.2 \u6dfb\u52a0\u9009\u62e9\u53d8\u52a8\u56de\u8c03\u51fd\u6570\u5e76\u6c42\u548c\u8d4b\u503c"),(0,i.kt)("h4",{id:"1\u6dfb\u52a0\u9009\u62e9\u53d8\u52a8\u56de\u8c03\u51fd\u6570"},"\uff081\uff09\u6dfb\u52a0\u9009\u62e9\u53d8\u52a8\u56de\u8c03\u51fd\u6570"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01wOp0cx1a5pROBHKpK_!!6000000003279-1-tps-1380-735.gif",alt:"\u81ea\u5b9a\u4e49\u9875\u9762\u6c42\u548c4.gif"}),"\n\u6dfb\u52a0\u9009\u62e9\u53d8\u52a8\u56de\u8c03\u51fd\u6570"),(0,i.kt)("h4",{id:"2\u83b7\u53d6\u884c\u6570\u636e\u5e76\u6c42\u548c\u8d4b\u503c"},"\uff082\uff09\u83b7\u53d6\u884c\u6570\u636e\u5e76\u6c42\u548c\u8d4b\u503c"),(0,i.kt)("p",null,"\u5f53\u9009\u4e2d\u884c\u6570\u636e\u65f6\uff0c\u4f1a\u8fd4\u56de selectedRowKeys \u53ca records \u4e24\u4e2a\u6570\u636e\uff0c\u5176\u4e2d records \u4e3a\u5904\u7406\u540e\u7684\u884c\u6570\u636e\uff0c\u56e0\u6b64\u9700\u8981\u5c06\u9009\u4e2d\u7684\u884c\u6570\u636e\u5faa\u73af\u83b7\u53d6\u6570\u503c\uff0c\u5e76\u5c06\u6570\u503c\u4f9d\u6b21\u76f8\u52a0\u3002\u6700\u540e\u5c06\u76f8\u52a0\u540e\u6240\u5f97\u7684\u6570\u636e\u8d4b\u503c\u7ed9\u6570\u503c\u7ec4\u4ef6\u3002\n\u53c2\u8003\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"export function onSelectChange(selectedRowKeys, records) {\n    console.log(selectedRowKeys, records);\n    //\u5b58\u50a8\u9009\u4e2d\u884c\u6570\u636e\n  const arrData = []\n  let salarySum = 0;\n   records.forEach(item => {\n        // \u8ba1\u7b97\u603b\u91d1\u989d\n        salarySum = salarySum + item.salary;\n    // \u5b58\u50a8\u9009\u4e2d\u884c\u6570\u636e\n    arrData.push(item);\n  });\n  console.log(\"\u603b\u6570\", salarySum);\n  this.$('numberField_ktwk2hbu').setValue(salarySum)\n}\n")),(0,i.kt)("h1",{id:"3-\u5b9e\u73b0\u6548\u679c"},"3. \u5b9e\u73b0\u6548\u679c"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01oOcIWe1v3B4sckSSs_!!6000000006116-1-tps-1380-735.gif",alt:"\u81ea\u5b9a\u4e49\u9875\u9762\u6c42\u548c5.gif"})),(0,i.kt)("h1",{id:"4-\u5728\u7ebf\u8bd5\u73a9"},"4. \u5728\u7ebf\u8bd5\u73a9"),(0,i.kt)("p",null,"\u5728\u7ebf\u4f53\u9a8c\u8bf7\u79fb\u6b65\u5f00\u53d1\u8005\u4e2d\u5fc3 \ud83d\udc49 ",(0,i.kt)("a",{parentName:"p",href:"https://www.aliwork.com/developer/custom-getSum"},"\u81ea\u5b9a\u4e49\u9875\u9762\u9009\u62e9\u884c\u81ea\u52a8\u6c42\u548c"),"\n",(0,i.kt)("strong",{parentName:"p"},"--------------------\u83b7\u53d6\u5b9c\u642d\u6700\u65b0\u4fe1\u606f\uff0c\u6b22\u8fce\u5173\u6ce8\u6211\u4eec--------------------"),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01Mo70qf1szqyKxRuKp_!!6000000005838-0-tps-1800-1012.jpg",alt:"\u5b9c\u642d.jpg"})))}u.isMDXComponent=!0}}]);