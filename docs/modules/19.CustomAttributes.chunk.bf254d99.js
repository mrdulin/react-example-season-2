webpackJsonp([19],{18:function(e,t,l){e.exports={default:l(19),__esModule:!0}},19:function(e,t,l){var n=l(9);e.exports=function(e){return(n.JSON&&n.JSON.stringify||JSON.stringify).apply(JSON,arguments)}},160:function(e,t,l){(function(n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=l(18),r=a(u),c=l(3),i=a(c),d=l(4),o=a(d),s=l(5),f=a(s),p=l(7),m=a(p),E=l(6),_=a(E),v=function(e){function t(){(0,o.default)(this,t);var e=(0,m.default)(this,(t.__proto__||(0,i.default)(t)).call(this));return e.state={dataset:{}},e}return(0,_.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){this.setState({dataset:this._p.dataset})}},{key:"render",value:function(){var e=this;return n.createElement("div",null,n.createElement("p",{ref:function(t){return e._p=t},"data-id":"ML001","data-logClick":"click","data-need-login":"true","data-c-NAME":"novaline.space","data-AGE":"23"},"我是自定义属性的DOM"),n.createElement("p",null,'React版本, "react": "^15.1.0"，dataset结果如下：'),n.createElement("div",null,n.createElement("pre",null,(0,r.default)(this.state.dataset,null,4))),n.createElement("p",null,'React版本, "react": "^0.13.3", dataset结果如下：'),n.createElement("div",null,n.createElement("pre",null,(0,r.default)({id:"ML001",needLogin:"true",reactid:".0.0.3.0.0.0"},null,4))),n.createElement("hr",null),n.createElement("p",null,"结论："),n.createElement("p",null,"新版本React，对于自定义属性data-*有如下转换规则："),n.createElement("ol",null,n.createElement("li",null,"对于带连字符的属性，不论大小写，统一转换成驼峰形式。"),n.createElement("li",null,"对于不带连字符的属性，转换成小写。")),n.createElement("p",null,"老版本React, 只支持小写，或者小写带连字符的属性（转换成驼峰）。"))}}]),t}(n.Component);t.default=v,e.exports=t.default}).call(t,l(2))}});