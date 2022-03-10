"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[2326],{99278:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(59301);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=o(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30762:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return s},default:function(){return m}});var r=n(21810),a=n(86919),i=(n(59301),n(99278)),l=["components"],u={},p="\u8d21\u732e\u6307\u5357",o={unversionedId:"guide/contributing",id:"guide/contributing",title:"\u8d21\u732e\u6307\u5357",description:"\u8fd9\u7bc7\u6307\u5357\u4f1a\u6307\u5bfc\u4f60\u5982\u4f55\u4e3a \u5b9c\u642d\u5f00\u53d1\u8005\u4e2d\u5fc3 \u8d21\u732e\u4e00\u4efd\u81ea\u5df1\u7684\u529b\u91cf\uff0c\u6211\u4eec\u63d0\u4f9b Issues \u548c Pull Request \u4e24\u79cd\u5171\u5efa\u65b9\u6848\uff1a",source:"@site/docs/guide/contributing.md",sourceDirName:"guide",slug:"/guide/contributing",permalink:"/docs/guide/contributing",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/guide/contributing.md",tags:[],version:"current",frontMatter:{},sidebar:"guide",previous:{title:"\u5982\u4f55\u4f7f\u7528\u9489\u9489JS API\uff1f",permalink:"/docs/guide/FAQ/q3"}},s=[{value:"Issues",id:"issues",children:[],level:2},{value:"Pull Request",id:"pull-request",children:[],level:2},{value:"\u672c\u5730\u5f00\u53d1\u6d41\u7a0b",id:"\u672c\u5730\u5f00\u53d1\u6d41\u7a0b",children:[{value:"\u672c\u5730\u542f\u52a8",id:"\u672c\u5730\u542f\u52a8",children:[],level:3},{value:"\u6784\u5efa",id:"\u6784\u5efa",children:[],level:3},{value:"\u672c\u5730\u771f\u5b9e\u9884\u89c8",id:"\u672c\u5730\u771f\u5b9e\u9884\u89c8",children:[],level:3}],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8d21\u732e\u6307\u5357"},"\u8d21\u732e\u6307\u5357"),(0,i.kt)("p",null,"\u8fd9\u7bc7\u6307\u5357\u4f1a\u6307\u5bfc\u4f60\u5982\u4f55\u4e3a ",(0,i.kt)("strong",{parentName:"p"},"\u5b9c\u642d\u5f00\u53d1\u8005\u4e2d\u5fc3")," \u8d21\u732e\u4e00\u4efd\u81ea\u5df1\u7684\u529b\u91cf\uff0c\u6211\u4eec\u63d0\u4f9b Issues \u548c Pull Request \u4e24\u79cd\u5171\u5efa\u65b9\u6848\uff1a"),(0,i.kt)("h2",{id:"issues"},"Issues"),(0,i.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dingtalk-yida/developer-site/issues"},"GitHub Issues")," \u6765\u505a\u5f00\u53d1\u8005\u4e2d\u5fc3\u7684\u95ee\u9898\u8ffd\u8e2a\uff0c\u5982\u679c\u4f60\u53d1\u73b0\u6587\u6863\u4e2d\u5b58\u5728\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6a21\u677f\u6765\u63d0\u4ea4 issue\uff0c\u6211\u4eec\u4f1a\u5b9a\u671f Review \u5e76\u8fdb\u884c\u6587\u6863\u66f4\u6b63\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- \u95ee\u9898\u6587\u6863\u94fe\u63a5\uff1ahttps://yida-developer.gitee.io/docs/guide/api\uff1b\n- \u95ee\u9898\u63cf\u8ff0\uff1athis.setState() \u63cf\u8ff0\u6709\u8bef\uff0csetState \u4e0d\u652f\u6301\u56de\u8c03\u51fd\u6570\uff1b\n- \u63a8\u8350\u4fee\u590d\u65b9\u6848\uff1a\u5c06 setState API \u4e2d\u7684 callback \u7528\u6cd5\u53bb\u9664\uff1b\n")),(0,i.kt)("p",null,"\u5728\u4f60\u62a5\u544a\u4e00\u4e2a issue \u4e4b\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u5df2\u7ecf\u641c\u7d22\u8fc7\u5df2\u6709\u7684 issue\u3002"),(0,i.kt)("h2",{id:"pull-request"},"Pull Request"),(0,i.kt)("p",null,"\u6211\u4eec\u66f4\u5efa\u8bae\u4f60\u901a\u8fc7 Pull Request \u7684\u65b9\u5f0f\u5e2e\u52a9\u6211\u4eec\u5171\u540c\u5b8c\u5584\u5b9c\u642d\u5f00\u53d1\u8005\u4e2d\u5fc3\uff0c\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u70b9\u51fb\u6bcf\u7bc7\u6587\u6863\u6700\u4e0b\u65b9\u7684 ",(0,i.kt)("strong",{parentName:"p"},"\u7f16\u8f91\u6b64\u9875")," \u6309\u94ae\u5feb\u901f\u53c2\u4e0e\u6587\u6863\u5171\u5efa\uff0c\u5177\u4f53\u6b65\u9aa4\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"p"},"\u7f16\u8f91\u6b64\u9875")," \u8fdb\u5165github\u9875\u9762\uff08\u5982\u679c\u6ca1\u6709github\u8d26\u53f7\u9700\u8981\u6ce8\u518c\u4e00\u4e2a\uff09\uff1b\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01fG5Jqu1SKTAxwXwdi_!!6000000002228-2-tps-3582-1440.png_.webp",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"fork\u5f00\u53d1\u8005\u4e2d\u5fc3\u4ed3\u5e93\u4ee3\u7801\u5230\u4e2a\u4ebagithub\u7a7a\u95f4\uff08\u53ea\u9700\u8981\u64cd\u4f5c\u4e00\u6b21\uff0c\u540e\u7eed\u4fee\u6539\u7533\u8bf7\u5c06\u8df3\u8fc7\u6b64\u6b65\uff09\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN017Klg3o1FgN6zLYHLv_!!6000000000516-2-tps-3582-976.png_.webp",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8fdb\u5165\u6587\u6863\u4fee\u6539\u9875\u8fdb\u884c\u6587\u6863\u4fee\u6b63\u5e76\u63d0\u4ea4\u4fee\u6539\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01v0zEz01aTe2FUQvXL_!!6000000003331-2-tps-3576-1752.png_.webp",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u786e\u5b9a\u4fee\u6539\u5185\u5bb9\u5e76\u63d0\u4ea4Pull Request:\n",(0,i.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01ZW5jyG1V8VgIuoSLE_!!6000000002608-2-tps-3560-1606.png_.webp",alt:null})))),(0,i.kt)("p",null,"\u81f3\u6b64\uff0c\u4e00\u4e2a\u7b80\u5355\u7684Pull Request\u5c31\u63d0\u4ea4\u5b8c\u6210\u4e86\uff0c\u5b9c\u642d\u56e2\u961f\u4f1a\u5173\u6ce8\u6240\u6709\u7684 Pull Request\uff0c\u6211\u4eec\u4f1a review \u4ee5\u53ca\u5408\u5e76\u4f60\u7684\u4fee\u6539\uff0c\u4e5f\u6709\u53ef\u80fd\u8981\u6c42\u4f60\u505a\u4e00\u4e9b\u4fee\u6539\u6216\u8005\u544a\u8bc9\u4f60\u6211\u4eec\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u63a5\u53d7\u8fd9\u6837\u7684\u4fee\u6539\uff0c\u6211\u4eec\u4f1a\u6bcf\u5468\u4ece master \u53d1\u5e03\u4e00\u4e2a patch \u7248\u672c\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u76f4\u63a5fork\u5f00\u53d1\u8005\u4e2d\u5fc3\u7684\u4ed3\u5e93\u4ee3\u7801\u5230\u672c\u5730\u8fdb\u884c\u6587\u6863\u7f16\u8f91\u5e76\u63d0\u4ea4 Pull Request\uff0c\u5982\u679c\u4f60\u8fd8\u4e0d\u6e05\u695a\u600e\u4e48\u5728 GitHub \u4e0a\u63d0 Pull Request\uff0c\u53ef\u4ee5\u9605\u8bfb\u4e0b\u9762\u8fd9\u7bc7\u6587\u7ae0\u6765\u5b66\u4e60\uff1a"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000000736629"},"\u5982\u4f55\u4f18\u96c5\u5730\u5728 GitHub \u4e0a\u8d21\u732e\u4ee3\u7801")),(0,i.kt)("p",{parentName:"div"},"\u6211\u4eec\u7ef4\u62a4\u7684\u4e3b\u5e72\u5206\u652f\u4e3amaster\uff0c\u56e0\u6b64\u8bf7\u63d0\u4ea4 Pull Request \u5230 master\u3002"))),(0,i.kt)("h2",{id:"\u672c\u5730\u5f00\u53d1\u6d41\u7a0b"},"\u672c\u5730\u5f00\u53d1\u6d41\u7a0b"),(0,i.kt)("p",null,"\u5b9c\u642d\u5f00\u53d1\u8005\u4e2d\u5fc3\u662f\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus 2")," \u6784\u5efa\u7684\u4e00\u4e2a\u5f00\u53d1\u8005\u5e73\u53f0\uff0c\u5728\u4f60 clone \u4e86 \u5f00\u53d1\u8005\u4e2d\u5fc3 \u7684\u4ee3\u7801\u5e76\u4e14\u4f7f\u7528 npm install \u5b89\u88c5\u5b8c\u4f9d\u8d56\u540e\uff0c\u4f60\u8fd8\u53ef\u4ee5\u8fd0\u884c\u4e0b\u9762\u51e0\u4e2a\u5e38\u7528\u7684\u547d\u4ee4\uff1a"),(0,i.kt)("h3",{id:"\u672c\u5730\u542f\u52a8"},"\u672c\u5730\u542f\u52a8"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ npm start\n")),(0,i.kt)("p",null,"\u542f\u52a8\u540e\uff0c\u6211\u4eec\u4fbf\u53ef\u4ee5\u5728\u672c\u5730\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000/")," \u8fdb\u884c\u8bbf\u95ee\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"P.S.: \u672c\u5730\u542f\u52a8\u60c5\u51b5\u4e0b\uff0c\u5168\u5c40\u641c\u7d22\u662f\u4e0d\u751f\u6548\u7684\u3002")),(0,i.kt)("h3",{id:"\u6784\u5efa"},"\u6784\u5efa"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ npm run build\n")),(0,i.kt)("p",null,"\u6784\u5efa\u4ea7\u7269\u5c06\u8f93\u51fa\u5230 build \u76ee\u5f55\u3002"),(0,i.kt)("h3",{id:"\u672c\u5730\u771f\u5b9e\u9884\u89c8"},"\u672c\u5730\u771f\u5b9e\u9884\u89c8"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ npm run serve\n")),(0,i.kt)("p",null,"\u5fc5\u987b\u5728\u5b8c\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run build"),"\u4e4b\u540e\uff0c\u8be5\u547d\u4ee4\u4f1a\u5728\u672c\u5730\u57fa\u4e8ebuild\u76ee\u5f55\u542f\u52a8\u4e00\u4e2a\u9759\u6001\u670d\u52a1\uff0c\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000/")," \u8fdb\u884c\u8bbf\u95ee\uff0c\u6548\u679c\u548c\u7ebf\u4e0a\u6548\u679c\u5b8c\u5168\u4e00\u81f4\u5e76\u652f\u6301\u5168\u5c40\u641c\u7d22\u529f\u80fd\u3002"))}m.isMDXComponent=!0}}]);