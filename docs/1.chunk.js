webpackJsonp([1],{85:function(e,t){"use strict";e.exports={IP_ADDRESS:{url:"/api/ip/ip2addr",appKey:"d50bed2f4503d59bf5ccaef7d9de405b"},MOBILE:{url:"/api/mobile/get",appKey:"b2c81c2612ac13fb11caa3862f46ef5b"}}},86:function(e,t){"use strict";var n=function(e,t){return{params:function(e){var t=encodeURIComponent;return Object.keys(e).map(function(n){return t(n)+"="+t(e[n])}).join("&")}}}(window,document);e.exports=n},242:function(e,t,n){(function(e,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),f=o(i),s=n(38),p=o(s),d=n(56),b=o(d),m=n(108),y=o(m),h=function(t){function n(){var t,o,l,c;a(this,n);for(var i=arguments.length,f=Array(i),s=0;s<i;s++)f[s]=arguments[s];return o=l=u(this,(t=Object.getPrototypeOf(n)).call.apply(t,[this].concat(f))),l.state={res:{},error:{},open:!1},l.handleClose=function(e){l.setState({open:!1})},l.handleSubmit=function(t){t.preventDefault();var n=t.target,o=n.mobile.value,a={phone:o,key:e.MOBILE.appKey},u=r.params(a),c=e.MOBILE.url+("?"+u);fetch(c).then(function(e){return e.json()}).then(function(e){var t=e.error_code,n=e.reason;return 0!==t?Promise.reject({code:t,reason:n}):void l.setState({res:e})})["catch"](function(e){var t={open:!0};e.code?Object.assign(t,{error:e}):Object.assign(t,{code:-1,reason:"系统异常"}),l.setState(t)})},c=o,u(l,c)}return l(n,t),c(n,[{key:"render",value:function(){var e=this.state.res;return f["default"].createElement("div",null,f["default"].createElement("form",{onSubmit:this.handleSubmit},f["default"].createElement(p["default"],{name:"mobile",type:"number",hintText:"请输入手机号"}),f["default"].createElement(y["default"],{type:"submit",label:"查询"})),f["default"].createElement("div",{style:{display:"undefined"==typeof e.error_code?"none":"block"}},0===e.error_code&&this.renderResult(),0!==e.error_code&&this.renderError()))}},{key:"renderResult",value:function(){var e=this.state.res.result;return f["default"].createElement("div",null,f["default"].createElement("p",null,"省份：",e.province),f["default"].createElement("p",null,"城市：",e.city),f["default"].createElement("p",null,"区号：",e.areacode),f["default"].createElement("p",null,"邮编: ",e.zip),f["default"].createElement("p",null,"运营商：",e.company),f["default"].createElement("p",null,"卡类型：",e.card))}},{key:"renderError",value:function(){var e=this.state.error;return f["default"].createElement(b["default"],{modal:!1,open:this.state.open,onRequestClose:this.handleClose},e.reason)}}]),n}(i.Component);t["default"]=h}).call(t,n(85),n(86))}});