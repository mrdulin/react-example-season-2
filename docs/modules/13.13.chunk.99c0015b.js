webpackJsonp([13],{109:function(e,t,n){e.exports={default:n(111),__esModule:!0}},111:function(e,t,n){var l=n(18);e.exports=function(e){return(l.JSON&&l.JSON.stringify||JSON.stringify).apply(JSON,arguments)}},508:function(e,t,n){(function(l){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(234),u=o(r),a=n(109),s=o(a),i=n(13),p=o(i),c=n(14),d=o(c),f=n(15),m=o(f),h=n(17),k=o(h),b=n(16),v=o(b),_=function(e){function t(){return(0,d.default)(this,t),(0,k.default)(this,(t.__proto__||(0,p.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,m.default)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.books.length!==e.books.length||(this.props.people.name!==e.people.name||this.props.people.age!==e.people.age)}},{key:"render",value:function(){var e=this.props,t=e.books,n=e.people;return l.createElement("div",null,l.createElement("div",null,"test1: ",l.createElement("pre",null,(0,s.default)(t,null,4))),l.createElement("div",null,"test2: ",l.createElement("pre",null,(0,s.default)(n,null,4))))}}]),t}(l.Component),g=function(e){function t(){(0,d.default)(this,t);var e=(0,k.default)(this,(t.__proto__||(0,p.default)(t)).call(this));return e.clickhandler=function(t){var n=e.state.books;n.push("jquery"),e.setState({books:n})},e.clickHandler2=function(t){e.setState(function(e,t){var n=(0,u.default)({},e.me,{name:"novaline",age:24});return{me:n}})},e.state={books:["angular","react"],me:{name:"dulin",age:23}},e}return(0,v.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){return l.createElement("div",null,l.createElement(_,{books:this.state.books,people:this.state.me}),l.createElement("button",{type:"button",onClick:this.clickhandler},"click me!"),l.createElement("button",{type:"button",onClick:this.clickHandler2},"click me to change people!"),l.createElement("br",null),l.createElement("p",null,"test1: 引用类型的数据在传入子组件时, nextProps.books和this.props.books是相同的引用，所有length是相等的，子组件不会rerender"),l.createElement("p",null,"test2: 处理这种情况，可以是用Object.assign，spread properties, 克隆等方法，使下一次传入子组件的引用不同即可。"))}}]),t}(l.Component);t.default=g,e.exports=t.default}).call(t,n(2))}});