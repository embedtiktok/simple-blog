(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"7ncz":function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e);var a,i=r("hosL"),c=r("/eY4"),s=r("Utv1"),l=r("bbv7"),p={},u=Object(c.a)(a=function(t){function e(e){var r;return(r=t.call(this,e)||this).setWindpark=function(t){r.props.stores.windmillStore.setCurrentWindparkName(t.target.dataset.windpark),r.loadAll()},r.state=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},p),r}var r,a;a=t,(r=e).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a;var c=e.prototype;return c.loadAll=function(){return new Promise(function(t){this.props.stores.wearStore.generateData();var e=Math.floor((new Date).getTime()/1e3);return this.setState({now:e}),t()}.bind(this))},c.componentDidMount=function(){this.loadAll()},c.render=function(){var t=this,e=this.state.now,r=this.props.stores,n=r.windmillStore,o=r.wearStore,a=o.wears,c=o.wearsAi,p=n.windparks,u=n.currentWindparkName;return Object(i.h)("div",{class:"container-fluid mt-5 pt-2"},Object(i.h)("div",{class:"row"},Object(i.h)("div",{class:"col-4"},Object(i.h)("h1",null,Object(i.h)("i",{class:"fas fa-thermometer"})," Wear")),Object(i.h)("div",{class:"col-8 pt-2"},Object(i.h)("ul",{class:"nav nav-pills float-right"},p&&p.map((function(e){return Object(i.h)("li",{class:"nav-item"},Object(i.h)("button",{class:"btn btn-link nav-link "+(e.name===u?"active":""),onClick:t.setWindpark,"data-windpark":e.name},e.name))})))),Object(i.h)("div",{class:"col-12"},Object(i.h)(l.a,{stores:this.props.stores,width:1200,height:500,showXTicks:1,xTicksVal:function(t){return s.a.isoDate(t)},paddingTop:30,dataLeft:[a,c],legendLeft:["Wear","AI prediction"],yMaxLeft:1e3,yMinLeft:0,showYTicksLeft:1,yTicks:["100%","75%","50%","25%","0%"],unitLeft:["%","%"],hoverValLeft:[function(t){return s.a.format(t/10,0,","," ",!0)},function(t){return s.a.format(t/10,0,","," ",!0)}],yTicksLeftVal:function(t){return s.a.format(t/10,0,","," ",!0)+"%"},marker:e}))))},e}(i.Component))||a;e.default=u}}]);
//# sourceMappingURL=route-wear.chunk.bed78.js.map