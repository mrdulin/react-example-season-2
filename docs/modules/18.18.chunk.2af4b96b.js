webpackJsonp([18],{194:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),a=l(o),u=n(5),i=l(u),r=n(6),c=l(r),d=n(8),s=l(d),f=n(7),p=l(f),h=n(2),m=l(h),v=n(83);t.default=(0,v.withRouter)(function(e){function t(){(0,i.default)(this,t);var e=(0,s.default)(this,(t.__proto__||(0,a.default)(t)).call(this));e.handleGoBack=function(e){var t="http://localhost:3002/transitionToSelf/1";window.location.href=t},e.handleClick=function(e){var t="http://localhost:3002/transitionToSelf/123";window.location.href=t},e.state={items:[]};for(var n=0;n<10;n++)e.state.items.push(n);return e}return(0,p.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.params;return m.default.createElement("div",null,"1"===e.id?m.default.createElement("button",{type:"button",onClick:this.handleClick},"跳转自己"):m.default.createElement("button",{type:"button",onClick:this.handleGoBack},"返回"),m.default.createElement("p",null,"id: ",e.id),m.default.createElement("p",null,"页面没有刷新，但是改变hash，会走componentWillReceiveProps方法"),m.default.createElement("ul",null,this.state.items.map(function(e,t){return m.default.createElement("li",{id:t,key:t},e)})))}},{key:"componentDidMount",value:function(){console.log("TransitionToSelf componentDidMount"),console.log(document.getElementById("99999"))}},{key:"componentWillReceiveProps",value:function(e){console.log(e.params.id)}}]),t}(h.Component)),e.exports=t.default}});