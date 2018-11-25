(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(e,t,a){e.exports=a(396)},165:function(e,t,a){},336:function(e,t){},391:function(e,t,a){},396:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(150),l=a.n(o),i=(a(165),a(13)),r=a(151),s=a(152),u=a(159),d=a(153),m=a(158),b=a(25),v=a(154),h=function(e){var t=e.data;return c.a.createElement(v.ResponsiveTreeMap,{root:{name:"crypto-signal",color:"#f3f9ef",children:t},identity:"name",value:"loc",innerPadding:3,outerPadding:4,label:function(e){return"".concat(e.name," ").concat(e.prch?e.prch+"% ":"")},labelSkipSize:8,labelTextColor:"inherit:darker(2.8)",colorBy:function(e){return e.color},borderWidth:1,borderColor:"inherit:darker(2.3)",motionDamping:35,motionStiffness:300,animate:!1,tooltip:function(e){return c.a.createElement("p",{style:{color:e.data.color}}," ","".concat(e.data.name," ").concat(e.data.loc?e.data.loc+"x":"")," ")},theme:{tooltip:{container:{color:"#fff",background:"#333"}}}})},p=a(155),f=a.n(p),y=a(49),k=a.n(y),E=a(156),C=a.n(E),g=(a(358),a(157)),L=a.n(g),N=function(e){var t=e.isLive,a=e.isActive,n=e.selected,o=e.handleClick,l=e.handleLiveClick;return c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:"btn-group","data-toggle":"buttons",role:"group"},c.a.createElement("button",{value:"Live",onClick:l,className:"live btn  ".concat(t?"active btn-danger":"btn-primary")},"Live",t?c.a.createElement("div",{style:{color:"#ffffff"},className:"la-ball-scale-multiple la-dark la-sm"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null)):null),c.a.createElement("button",{disabled:!a,value:"5m",onClick:o,type:"button",className:"btn btn-secondary ".concat(n["5m"])},"5m"),c.a.createElement("button",{disabled:!a,value:"15m",onClick:o,type:"button",className:"btn btn-secondary ".concat(n["15m"])},"15m"),c.a.createElement("button",{disabled:!a,value:"30m",onClick:o,type:"button",className:"btn btn-secondary ".concat(n["30m"])},"30m"),c.a.createElement("button",{disabled:!a,value:"1h",onClick:o,type:"button",className:"btn btn-secondary ".concat(n["1h"])},"1H"),c.a.createElement("button",{disabled:!a,value:"4h",onClick:o,type:"button",className:"btn btn-secondary ".concat(n["4h"])},"4H"),c.a.createElement("button",{disabled:!a,value:"8h",onClick:o,type:"button",className:"btn btn-secondary ".concat(n["8h"])},"8H"),c.a.createElement("button",{disabled:!a,value:"1d",onClick:o,type:"button",className:"btn btn-secondary ".concat(n["1d"])},"1D"),c.a.createElement("button",{disabled:!a,value:"1w",onClick:o,type:"button",className:"btn btn-secondary ".concat(n["1w"])},"1W"),c.a.createElement("button",{disabled:!a,value:"1M",onClick:o,type:"button",className:"btn btn-secondary ".concat(n["1M"])},"1M")))},w=(a(391),{isActive:!0,selected:{"4h":"active"},isLive:!1,socket:null,nr:"",period:"",periodFormatted:"",totalCoins:0,data:{},_liveData:[]}),S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).connectSocket=function(e){var t=f()("http://localhost:3231");a.setState({socket:t}),"string"!==typeof e&&a.setState({isLive:!a.state.isLive}),t.on("retrieve",function(e){e.symbol;var t=Object.keys(e[e.symbol]);if(t[1]in e[e.symbol]){var n=C()(a.state,{data:Object(i.a)({},e.symbol,{1:{volume:{$set:e[e.symbol][t[1]].volume}}})});a.setState({data:n.data})}});var n=Object.keys(a.state.selected)[0];k.a.post("http://localhost:3231",{timestamp:e||n}).then(function(e){}).catch(function(e){})},a.getTreemapData=function(){var e=a.state.data,t=Object.keys(e);return t.length?t.map(function(t){var n=t,c=e[t][1],o=e[t][0],l=0!==+o.volume?(c.volume/o.volume).toFixed(3):0,i=l>0?Math.round(100*l)/100:0,r=c.open,s=c.close,u=Math.abs(c.time-o.time)/36e5,d=r<s?s/r*100-100:100-r/s*100,m=a.computeColor(d);return{time:u,open:r,name:"USDT"==n.slice(-4)?n.slice(0,-4):n.slice(0,-3),loc:i,prch:d.toFixed(2),color:m}}):{name:"g",loc:32,prch:3,color:"red"}},a.computeColor=function(e){return e<0?e<-3?e<-6?e<-15?"#DB4B38":"#E97253":"#EE9778":"#fcd3bf":e>3?e>10?e>15?"#5FA964":"#ACD6A0":"#CDE7C2":"#e4efdc"},a.handleLiveClick=function(e){if(a.state.isLive)return a.state.socket.disconnect(),void a.setState({isLive:!1});a.connectSocket()},a.handleClick=function(e){var t=Object(b.a)(Object(b.a)(a));a.setState({selected:Object(i.a)({},e.target.value,"active"),isActive:!1}),a.state.isLive&&a.connectSocket(e.target.value),k.a.get("http://localhost:3231/api/coins",{params:{timestamp:e.target.value}}).then(function(e){var a=e.data.result.reduce(function(e,t,a){return e[t.symbol]=t[t.symbol],e},{});t.setState({data:a,isActive:!0})}).catch(function(e){})},a.state=w,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.setState.bind(this);k.a.get("http://localhost:3231/api/coins",{params:{timestamp:"4h"}}).then(function(t){var a=t.data.result.reduce(function(e,t,a){return e[t.symbol]=t[t.symbol],e},{});e({data:a})}).catch(function(e){})}},{key:"render",value:function(){var e=this.state,t=e.isLive,a=e.isActive,n=e.selected,o=this.getTreemapData();return c.a.createElement("div",{className:"App"},c.a.createElement(N,{isLive:t,isActive:a,selected:n,handleClick:this.handleClick,handleLiveClick:this.handleLiveClick}),o.length>90&&a?c.a.createElement(h,{data:o}):c.a.createElement(L.a,{fadeIn:"none",className:"spinner"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[160,2,1]]]);
//# sourceMappingURL=main.5fbfa188.chunk.js.map