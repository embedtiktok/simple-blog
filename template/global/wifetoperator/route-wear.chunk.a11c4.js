(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"7ncz":function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e);var a,i=r("hosL"),s=r("/eY4"),c=r("Utv1"),l=r("wgWz"),p=r("bbv7"),u={},f=Object(s.a)(a=function(t){function e(e){var r;return(r=t.call(this,e)||this).setWindpark=function(t){r.props.stores.windmillStore.setCurrentWindparkName(t.target.dataset.windpark),r.loadAll()},r.state=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},u),r}var r,a;a=t,(r=e).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a;var s=e.prototype;return s.loadAll=function(){return new Promise(function(t){this.props.stores.wearStore.generateData();var e=Math.floor((new Date).getTime()/1e3),r=l.a.timeRangeDays(-4,11);return this.setState({now:e,markerDays:r}),t()}.bind(this))},s.componentDidMount=function(){this.loadAll()},s.render=function(){var t=this,e=this.state,r=e.now,n=e.markerDays,o=this.props.stores,a=o.windmillStore,s=o.wearStore,l=s.wears,u=s.wearsAiFiltered,f=a.windparks,h=a.currentWindparkName;return Object(i.h)("div",{class:"container-fluid mt-5 pt-2",style:"margin-bottom: 200px;"},Object(i.h)("div",{class:"row"},Object(i.h)("div",{class:"col-4"},Object(i.h)("h1",null,Object(i.h)("i",{class:"fas fa-thermometer"})," Wear")),Object(i.h)("div",{class:"col-8 pt-2"},Object(i.h)("ul",{class:"nav nav-pills float-right"},f&&f.map((function(e){return Object(i.h)("li",{class:"nav-item"},Object(i.h)("button",{class:"btn btn-link nav-link "+(e.name===h?"active":""),onClick:t.setWindpark,"data-windpark":e.name},e.name))})))),Object(i.h)("div",{class:"col-12"},Object(i.h)(p.a,{stores:this.props.stores,width:1200,height:500,showXTicks:1,xTicksVal:function(t){return c.a.isoDate(t)},paddingTop:30,dataLeft:[].concat(l,u),legendLeft:["Wear","AI prediction"],yMaxLeft:30,yMinLeft:0,showYTicksLeft:1,yTicksLeftPostfix:"år",unitLeft:["år","år"],hoverValLeft:[function(t){return c.a.format(t,0)},function(t){return c.a.format(t,0)}],avgWindowLeft:[1,1],smoothLeft:[1,1],showValueLeftLine:!1,showValueRightLine:!1,marker:r,markers:n}))))},e}(i.Component))||a;e.default=f}}]);
//# sourceMappingURL=route-wear.chunk.a11c4.js.map