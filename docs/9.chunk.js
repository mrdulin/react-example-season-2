webpackJsonp([9],{218:function(e,t,n){(function(e){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(t){function l(){return n(this,l),r(this,(l.__proto__||Object.getPrototypeOf(l)).apply(this,arguments))}return o(l,t),a(l,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.books.length!==e.books.length||(this.props.people.name!==e.people.name||this.props.people.age!==e.people.age)}},{key:"render",value:function(){var t=this.props,n=t.books,r=t.people;return e.createElement("div",null,e.createElement("div",null,"test1: ",e.createElement("pre",null,JSON.stringify(n,null,4))),e.createElement("div",null,"test2: ",e.createElement("pre",null,JSON.stringify(r,null,4))))}}]),l}(e.Component),c=function(t){function c(){n(this,c);var e=r(this,(c.__proto__||Object.getPrototypeOf(c)).call(this));return e.clickhandler=function(t){var n=e.state.books;n.push("jquery"),e.setState({books:n})},e.clickHandler2=function(t){e.setState(function(e,t){var n=l({},e.me,{name:"novaline",age:24});return{me:n}})},e.state={books:["angular","react"],me:{name:"dulin",age:23}},e}return o(c,t),a(c,[{key:"render",value:function(){return e.createElement("div",null,e.createElement(i,{books:this.state.books,people:this.state.me}),e.createElement("button",{type:"button",onClick:this.clickhandler},"click me!"),e.createElement("button",{type:"button",onClick:this.clickHandler2},"click me to change people!"),e.createElement("br",null),e.createElement("p",null,"test1: 引用类型的数据在传入子组件时, nextProps.books和this.props.books是相同的引用，所有length是相等的，子组件不会rerender"),e.createElement("p",null,"test2: 处理这种情况，可以是用Object.assign，spread properties, 克隆等方法，使下一次传入子组件的引用不同即可。"))}}]),c}(e.Component);t["default"]=c}).call(t,n(1))}});