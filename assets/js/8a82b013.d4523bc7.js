"use strict";(self.webpackChunkyida_developer=self.webpackChunkyida_developer||[]).push([[1264],{35472:function(e,t,o){o.d(t,{Z:function(){return a}});var n=o(97218),i=o(59301),c=o(24076),d=o(95763),r=[{code:"label",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898"},{code:"labelAlign",type:"'left' | 'top'",default:"'top'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u7684\u4f4d\u7f6e"},{code:"labelColSpan",type:"number",default:"4",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColSpan",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelTextAlign",type:"'left' | 'right'",default:"'right'",desc:"\u8868\u5355\u7ec4\u4ef6\u7684\u6807\u9898\u5bf9\u9f50\u65b9\u5f0f"},{code:"tips",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c55\u793a\u5728\u63a7\u4ef6\u4e0b\u65b9"},{code:"size",type:"[Size](/docs/components/interface#size)",default:"'medium'",desc:"\u8868\u5355\u7ec4\u4ef6\u5c3a\u5bf8"},{code:"behavior",type:"[Behavior](/docs/components/interface#behavior)",default:"'NORMAL'",desc:"\u8868\u5355\u7ec4\u4ef6\u663e\u793a\u72b6\u6001"},{code:"labelTipsTypes",type:"[LabelTipsTypes](/docs/components/interface#labelTipsTypes)",default:"'none'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u7c7b\u578b\u8bbe\u7f6e"},{code:"labelTipsIcon",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u5165\u53e3\u56fe\u6807\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u6216 **render** \u65f6\u751f\u6548"},{code:"labelTipsText",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u6587\u672c\u4fe1\u606f\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u65f6\u751f\u6548"},{code:"labelTipsRender",type:"(props: IComponentProps) => ReactNode",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u81ea\u5b9a\u4e49\u6e32\u67d3\u65b9\u6cd5\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **render** \u65f6\u751f\u6548"},{code:"validation",type:"[Validation[]](/docs/components/interface#validation)",default:"[]",desc:"\u8868\u5355\u7ec4\u4ef6\u6821\u9a8c\u8bbe\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u8be6\u89c1[\u8868\u5355\u6821\u9a8c\u6587\u6863](/docs/guide/concept/validation)"}],s=(o(94648),[{title:"\u5c5e\u6027",dataIndex:"code",width:"20%",render:function(e){return i.createElement("div",{style:{fontWeight:600}},e)}},{title:"\u8bf4\u660e",dataIndex:"desc",width:"45%",render:function(e){return i.createElement(c.D,{children:e,remarkPlugins:[d.Z]})}},{title:"\u7c7b\u578b",dataIndex:"type",className:"attr-type",width:"20%",render:function(e){return i.createElement(c.D,{children:e,remarkPlugins:[d.Z]})}},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default",width:"15%",wordBreak:!0,render:function(e){return"-"!==e&&e?i.createElement(c.D,{children:e,remarkPlugins:[d.Z]}):i.createElement("div",null," - ")}}]);var a=function(e){var t=e.category,o=e.dataSource,c=("form"===t?[].concat(r,o||[]):[].concat(o||[])).sort((function(e,t){return e.code<t.code?-1:1}));return i.createElement(n.Z,{className:"attr-table",dataSource:c,pagination:!1,columns:s})}},50199:function(e,t,o){o.d(t,{Z:function(){return d}});var n=o(44117),i=o(59301),c=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var o=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(o,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),d=function(e){function t(t){var o;return(o=e.call(this,t)||this).createRecevier=function(){o.destroyRecevier(),o.recevier=new c,o.recevier.on("updateHeight",(function(e,t,n){o.iframe&&n===o.iframe.contentWindow&&(o.container.style.height=(e.msg||0)+"px",o.props.onUpdateHeight&&o.props.onUpdateHeight(e.msg||"#"))}))},o.destroyRecevier=function(){o.recevier&&(o.recevier.destroy(),o.recevier=null)},o.container=null,o.iframe=null,o}(0,n.Z)(t,e);var o=t.prototype;return o.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},o.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},o.componentWillUnmount=function(){this.destroyRecevier()},o.render=function(){var e=this,t=this.props,o=t.className,n=t.id,c=t.style,d=t.url;return d?i.createElement("div",{className:"bg-iframe "+o,id:n,style:Object.assign({height:400,width:"100%"},c),ref:function(t){e.container=t}},i.createElement("iframe",{src:d,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):i.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(i.PureComponent);d.displayName="bg-iframe"},22472:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=o(21810),i=o(86919),c=(o(59301),o(99278)),d=o(50199),r=o(35472),s=["components"],a={title:"Video \u89c6\u9891\u64ad\u653e",order:9},l="Video \u89c6\u9891\u64ad\u653e",p={unversionedId:"components/basic/video",id:"components/basic/video",title:"Video \u89c6\u9891\u64ad\u653e",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/basic/video.mdx",sourceDirName:"components/basic",slug:"/components/basic/video",permalink:"/docs/components/basic/video",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/components/basic/video.mdx",tags:[],version:"current",frontMatter:{title:"Video \u89c6\u9891\u64ad\u653e",order:9},sidebar:"components",previous:{title:"Drawer \u62bd\u5c49",permalink:"/docs/components/basic/drawer"},next:{title:"NumberField \u6570\u5b57\u8f93\u5165\u6846",permalink:"/docs/components/form/numberField"}},u=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],f={toc:u};function m(e){var t=e.components,o=(0,i.Z)(e,s);return(0,c.kt)("wrapper",(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"video-\u89c6\u9891\u64ad\u653e"},"Video \u89c6\u9891\u64ad\u653e"),(0,c.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,c.kt)("p",null,"-\u89c6\u9891\u63a7\u4ef6\uff0c\u7528\u4e8e\u64ad\u653e mp4\u3001mov \u7b49 HTML \u539f\u751f\u652f\u6301\u7684\u89c6\u9891\u8d44\u6e90\u3002"),(0,c.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,c.kt)(d.Z,{url:"https://www.aliwork.com/developer/video-v2?isRenderNav=false",mdxType:"Iframe"}),(0,c.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,c.kt)(r.Z,{dataSource:[{code:"title",type:"string",default:"-",desc:"\u539f\u751f\u6807\u9898\uff0c\u7528\u4e8e\u8bbe\u7f6ehtml \u539f\u751f title\u5c5e\u6027\uff0c\u5728\u7528\u6237\u9f20\u6807hover\u65f6\u663e\u793a"},{code:"url",type:"string",default:" 'https://cloud.video.taobao.com/play/u/1804320196/p/1/e/6/t/1/287344840104.mp4' ",desc:"\u89c6\u9891URL\u5730\u5740"},{code:"poster",type:"string",default:"-",desc:"\u5c01\u9762\u56fe\u7247URL"},{code:"sizeFit",type:"'contain' | 'fill' | 'cover' | 'scale-dowm' | 'none'",default:" 'contain' ",desc:"\u753b\u9762\u9002\u914d\u6a21\u5f0f"},{code:"controls",type:"boolean",default:"true",desc:"\u63a7\u5236\u6761"},{code:"controlsList",type:"'nodownload' | 'nofullscreen' | 'noremoteplayback' | 'disablePictureInPicture'",default:"-",desc:"\u5b9a\u5236\u539f\u751f\u63a7\u5236\u6761"},{code:"playbackRateControls",type:"boolean",default:"false",desc:"\u662f\u5426\u663e\u793a\u500d\u6570\u64ad\u653e"},{code:"playbackRate",type:"array",default:"~~~json\n[\n  0.8,\n  1,\n  1.5,\n  2\n]",desc:"\u500d\u6570\u5217\u8868"},{code:"muted",type:"boolean",default:"false",desc:"\u662f\u5426\u9759\u97f3"},{code:"volumeControls",type:"boolean",default:"true",desc:"\u662f\u5426\u663e\u793a\u58f0\u97f3\u63a7\u4ef6"},{code:"volume",type:"number",default:"1",desc:"\u97f3\u91cf\u5927\u5c0f\uff0c\u6700\u5c0f\u4e3a0\uff0c\u6700\u5927\u4e3a1"},{code:"autoplay",type:"boolean",default:"false",desc:"\u81ea\u52a8\u64ad\u653e\uff0c\u53ef\u80fd\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u65e0\u6cd5\u8d77\u4f5c\u7528"},{code:"loop",type:"boolean",default:"false",desc:"\u5faa\u73af\u64ad\u653e\uff0c\u64ad\u653e\u5b8c\u6210\u540e\u662f\u5426\u81ea\u52a8\u5faa\u73af\u64ad\u653e"},{code:"pipControls",type:"boolean",default:"false",desc:"\u753b\u4e2d\u753b\uff0c\u53ea\u5728 chrome\uff0csafari \u6d4f\u89c8\u5668\u4e0a\u751f\u6548\uff0cfirefox \u548c\u624b\u673a\u7aef\u4e0d\u751f\u6548"},{code:"onPlay",type:"(ctx: object) => void",default:"-",desc:"\u5f53\u5f00\u59cb\u64ad\u653e\u65f6"},{code:"onPause",type:"(ctx: object) => void",default:"-",desc:"\u5f53\u89c6\u9891\u6682\u505c\u65f6"},{code:"onEnded",type:"(ctx: object) => void",default:"-",desc:"\u5f53\u89c6\u9891\u64ad\u653e\u7ed3\u675f\u65f6"},{code:"onEnterFullscreen",type:"(ctx: object) => void",default:"-",desc:"\u5f53\u5168\u5c4f\u65f6"},{code:"onExitFullscreen",type:"(ctx: object) => void",default:"-",desc:"\u5f53\u9000\u51fa\u5168\u5c4f\u65f6"},{code:"onError",type:"(ctx: object) => void",default:"-",desc:"\u5f53\u64ad\u653e\u51fa\u9519\u65f6"},{code:"timeUpdate",type:"(ctx: object) => void",default:"-",desc:"\u5f53\u64ad\u653e\u65f6\u95f4\u66f4\u65b0\u65f6"},{code:"canPlayThrough",type:"(ctx: object) => void",default:"-",desc:"\u5f53\u52a0\u8f7d\u5b8c\u6210\u53ef\u4ee5\u64ad\u653e\u65f6"}],mdxType:"AttrTable"}))}m.isMDXComponent=!0}}]);