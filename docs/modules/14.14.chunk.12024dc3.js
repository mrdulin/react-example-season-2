webpackJsonp([14],{504:function(e,t,r){(function(n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(13),l=u(o),c=r(14),a=u(c),i=r(15),f=u(i),d=r(17),s=u(d),p=r(16),_=u(p),v=r(505),h=u(v),y=r(189),k=function(e){function t(){var e,r,n,u;(0,a.default)(this,t);for(var o=arguments.length,c=Array(o),i=0;i<o;i++)c[i]=arguments[i];return r=n=(0,s.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(c))),n.clickHandler=function(e){console.log(n.props.redirect),n.props.redirect("/getWrappedInstance")},u=r,(0,s.default)(n,u)}return(0,_.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){console.dir(this.props.RouterHOC)}},{key:"render",value:function(){return n.createElement("div",null,n.createElement("button",{onClick:this.clickHandler},"测试"))}}]),t}(n.Component),C=function(e){return{RouterHOC:e.RouterHOC}};t.default=(0,h.default)((0,y.connect)(C)(k)),e.exports=t.default}).call(t,r(2))},505:function(e,t,r){(function(n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(13),l=u(o),c=r(14),a=u(c),i=r(15),f=u(i),d=r(17),s=u(d),p=r(16),_=u(p),v=r(225),h=function(e){return(0,v.withRouter)(function(t){function r(){var e,t,n,u;(0,a.default)(this,r);for(var o=arguments.length,c=Array(o),i=0;i<o;i++)c[i]=arguments[i];return t=n=(0,s.default)(this,(e=r.__proto__||(0,l.default)(r)).call.apply(e,[this].concat(c))),n.redirect=function(e){console.log(n.props.router),n.props.router.push(e)},u=t,(0,s.default)(n,u)}return(0,_.default)(r,t),(0,f.default)(r,[{key:"render",value:function(){return n.createElement(e,{redirect:this.redirect})}}]),r}(n.Component))};t.default=h,e.exports=t.default}).call(t,r(2))},507:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.RouterHOC=void 0;var u=r(110),o=n(u),l={key1:"",key2:""};t.RouterHOC=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1];switch(t.type){case"RouterHOC_action1":return(0,o.default)({},e,{key1:"1123"});case"RouterHOC_action2":return(0,o.default)({},e,{key2:23233});default:return e}}}});