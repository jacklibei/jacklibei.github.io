(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],f=0,d=[];f<s.length;f++)r=s[f],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4"),n("d3b7"),n("fb6a"),n("99af");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"min-height":"100vh",background:"#ecf0f5",padding:"0 0"},attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}})],1),n("router-view")],1)},i=[],r=(n("034f"),n("2877")),s={},l=Object(r["a"])(s,o,i,!1,null,null,null),c=l.exports,u=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[0==t.showIndex?n("div",[n("div",{staticStyle:{"font-size":"15px","font-weight":"300","margin-top":"15px"}},[t._v(" "+t._s(t.nowDate)+" "+t._s(t.time)+" —— "+t._s(t.nowDate)+" "+t._s(t.time1)+" ")]),n("div",{staticClass:"itemBox"},[n("div",[t._v("总入款金额："+t._s(t.info.jzInfo?t.info.jzInfo.inTotal:0))]),n("div",[t._v("汇率："+t._s(t.info.jzInfo?t.info.jzInfo.uExRate:0))]),n("div",[t._v("费率："+t._s(t.info.jzInfo?t.info.jzInfo.rate:0))]),n("div",[t._v(" 应下发："+t._s(t.info.jzInfo?t.info.jzInfo.inTotal:0)+"|"+t._s(t.info.jzInfo?t.info.jzInfo.yingUsdt:0)+"(usdt) ")]),n("div",[t._v(" 已下发："+t._s(t.info.jzInfo?t.info.jzInfo.yixiafaRmb:0)+"|"+t._s(t.info.jzInfo?t.info.jzInfo.outTotalU:0)+"(usdt) ")]),n("div",[t._v(" 未下发："+t._s(t.info.jzInfo?t.info.jzInfo.weiRmb:0)+"|"+t._s(t.info.jzInfo?t.info.jzInfo.weiUsdt:0)+"(usdt) ")])]),n("div",{staticClass:"itemBox"},[n("div",{staticClass:"title"},[t._v("入款 ("+t._s(t.info.jzLogsRu.length)+"笔)")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.info.jzLogsRu,border:""}},[n("el-table-column",{attrs:{prop:"createTime",label:"时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("dateFormat")(e.row.createTime)))]}}],null,!1,2726487586)}),n("el-table-column",{attrs:{prop:"quantity",label:"金额",align:"center"}}),n("el-table-column",{attrs:{prop:"",label:"回复人",align:"center"}}),n("el-table-column",{attrs:{label:"操作人",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.user.nickName))]}}],null,!1,2888840394)})],1)],1),n("div",{staticClass:"itemBox"},[n("div",{staticClass:"title"},[t._v("下发 ("+t._s(t.info.jzLogsChu.length)+"笔)")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.info.jzLogsChu,border:""}},[n("el-table-column",{attrs:{prop:"createTime",label:"时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("dateFormat")(e.row.createTime)))]}}],null,!1,2726487586)}),n("el-table-column",{attrs:{prop:"quantity",label:"金额",align:"center"}}),n("el-table-column",{attrs:{prop:"",label:"回复人",align:"center"}}),n("el-table-column",{attrs:{label:"操作人",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.user.nickName))]}}],null,!1,2888840394)})],1)],1),n("div",{staticClass:"itemBox1"},[n("div",{staticClass:"title"},[t._v("入款操作人分类")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.info.ruUserGroupList,border:""}},[n("el-table-column",{attrs:{prop:"userName",label:"操作人",align:"center"}}),n("el-table-column",{attrs:{prop:"amountSum",label:"金额",align:"center"}}),n("el-table-column",{attrs:{prop:"quantitySum",label:"换算",align:"center"}})],1)],1),n("div",{staticClass:"itemBox1"},[n("div",{staticClass:"title"},[t._v("入款汇率分类")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.info.ruExRruateGroupList,border:""}},[n("el-table-column",{attrs:{prop:"exRate",label:"汇率",align:"center"}}),n("el-table-column",{attrs:{prop:"amountSum",label:"金额",align:"center"}}),n("el-table-column",{attrs:{prop:"quantitySum",label:"换算",align:"center"}})],1)],1),n("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[n("div",[n("el-button",{attrs:{size:"small"},on:{click:t.export1}},[t._v("下载excel")])],1),n("div",{staticStyle:{display:"flex","justify-content":"center",margin:"10px 0"}},[n("el-button",{attrs:{size:"small"},on:{click:t.upper}},[t._v("上一天")]),n("el-button",{attrs:{size:"small"},on:{click:t.next}},[t._v("下一天")])],1),n("div",{staticStyle:{"margin-bottom":"10px"}},[n("el-button",{attrs:{size:"small"},on:{click:t.selectMore}},[t._v("查看最近30天汇总")])],1),n("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},on:{change:t.selectTime},model:{value:t.nowDate,callback:function(e){t.nowDate=e},expression:"nowDate"}})],1)]):t._e(),1==t.showIndex?n("div",[n("div",{staticStyle:{"margin-top":"20px"}},[n("el-button",{attrs:{icon:"el-icon-arrow-left"},on:{click:t.back}},[t._v("返回")])],1),n("div",{staticClass:"itemBox",staticStyle:{"font-size":"14px"}},[n("div",{staticStyle:{"margin-bottom":"20px"}},[t._v(" 最近30天总入款："+t._s(t.allInfo.totalInQuantity)+" ")]),t._l(t.allInfo.days,(function(e){return n("div",{key:e},[n("div",[t._v(t._s(e.day))]),n("div",[t._v("入款金额："+t._s(e.inQuantity)+"("+t._s(e.inCount)+"笔)")]),n("div",[t._v("下发金额："+t._s(e.outQuantity)+"("+t._s(e.outCount)+"笔)")])])}))],2)]):t._e(),t._m(0)])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[n("a",{staticStyle:{"text-decoration":"none",color:"#3c8dbc"},attrs:{href:"https://www.yu444.com/",target:"blank"}},[t._v("汇旺担保官方网站:www.yu444.com")])])}],p=(n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),{data:function(){return{info:{},allInfo:{},nowDate:"",time:"00:00:00",time1:"24:00:00",chat_id:"",timeList:[],showIndex:0}},created:function(){var t=window.Telegram.WebApp,e=t.initDataUnsafe,n=e.start_param;this.chat_id=n;var a=new Date,o=a.getFullYear(),i=a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1,r=a.getDate()<10?"0"+a.getDate():a.getDate();this.nowDate="".concat(o,"-").concat(i,"-").concat(r),this.getList()},methods:{getList:function(){var t=this,e={groupId:this.chat_id,day:this.nowDate};this.$axios.post("/bot/jzInfo/tgGetInfo",e).then((function(e){var n=e.data;t.info=n,t.timeList=n.jzInfosRu})).catch((function(e){var n=e.data&&e.data.msg;t.$message.error(n)})).finally((function(){}))},export1:function(){var t=this;this.$axios.get("/bot/jzInfo/export?groupId=".concat(this.chat_id,"&day=").concat(this.nowDate),{responseType:"blob"}).then((function(e){console.log(e);var n=new Blob([e],{type:"application/octet-stream"}),a="记账-账本基础信息数据-"+t.nowDate,o=document.createElement("a");window.ActiveXObject||"ActiveXObject"in window||navigator.userAgent.indexOf("Edge")>-1?navigator.msSaveBlob(n,a):(o.style.display="none",o.href=URL.createObjectURL(n),o.download=a,document.body.appendChild(o),o.click(),URL.revokeObjectURL(o.href),document.body.removeChild(o))})).catch((function(e){var n=e.data&&e.data.msg;t.$message.error(n)})).finally((function(){}))},next:function(){if(this.nowDate!=this.timeList[this.timeList.length-1].day){for(var t="",e=0;e<this.timeList.length;e++)this.nowDate==this.timeList[e].day&&(t=e);this.nowDate=this.timeList[t+1].day,this.getList()}},upper:function(){if(this.nowDate!=this.timeList[0].day){for(var t="",e=0;e<this.timeList.length;e++)this.nowDate==this.timeList[e].day&&(t=e);this.nowDate=this.timeList[t-1].day,this.getList()}},selectTime:function(t){this.nowDate=t,this.getList()},selectMore:function(){var t=this;this.$axios.get("/bot/jzInfo/count/-4214830659").then((function(e){var n=e.data;t.allInfo=n})).catch((function(e){var n=e.data&&e.data.msg;t.$message.error(n)})).finally((function(){})),this.showIndex=1},back:function(){this.showIndex=0}}}),v=p,m=(n("70c8"),Object(r["a"])(v,f,d,!1,null,null,null)),h=m.exports;a["default"].use(u["a"]);var b=new u["a"]({routes:[{path:"/",name:"index",component:h,meta:{title:"首页"}}]}),g=n("2f62");a["default"].use(g["a"]);var _=new g["a"].Store({state:{},mutations:{},actions:{},modules:{}}),y=n("5c96"),w=n.n(y),x=(n("0fae"),n("bc3a")),j=n.n(x);a["default"].prototype.$version="4.8.8",Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_FLAG,a["default"].prototype.$baseUrl="http://3.1.240.129:8386/";var I=j.a.create({baseURL:a["default"].prototype.$baseUrl});I.interceptors.request.use((function(t){return t.headers.token=_.getters.token,t.headers.Version=a["default"].prototype.$version,t}),(function(t){return Promise.reject(t)})),I.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),a["default"].prototype.$axios=I;a["default"].filter("dateFormat",(function(t){var e=new Date(t),n=e.getFullYear(),a=("0"+(e.getMonth()+1)).slice(-2),o=("0"+e.getDate()).slice(-2),i=("0"+e.getHours()).slice(-2),r=("0"+e.getMinutes()).slice(-2),s=("0"+e.getSeconds()).slice(-2);return"".concat(n,"-").concat(a,"-").concat(o," ").concat(i,":").concat(r,":").concat(s)})),a["default"].config.productionTip=!1,a["default"].use(w.a),new a["default"]({router:b,store:_,render:function(t){return t(c)}}).$mount("#app")},"70c8":function(t,e,n){"use strict";n("f867")},"85ec":function(t,e,n){},f867:function(t,e,n){}});
//# sourceMappingURL=app.b553158c.js.map