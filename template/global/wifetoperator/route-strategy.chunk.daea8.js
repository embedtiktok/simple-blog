(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{uO3H:function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e);var o,a=r("hosL"),s=r("/eY4"),c=r("Gblv"),l=r("wgWz"),p=r("bbv7"),d={},u=Object(s.a)(o=function(t){function e(e){var r;return(r=t.call(this,e)||this).setWindpark=function(t){r.props.stores.windmillStore.setCurrentWindparkName(t.target.dataset.windpark),r.loadAll()},r.state=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},d),r}var r,o;o=t,(r=e).prototype=Object.create(o.prototype),r.prototype.constructor=r,r.__proto__=o;var s=e.prototype;return s.loadAll=function(){return new Promise(function(t,e){var r,n,i,o,a,s,c,p,d,u;return n=(r=this.props.stores).weatherYrStore,i=r.productionStore,o=r.priceStore,a=r.demandStore,s=r.windmillStore.currentWindparkName,c=l.a.getDateDiffTime(-4),p=l.a.getDateDiffTime(10),d=Math.floor((new Date).getTime()/1e3),this.setState({now:d,xMin:c,xMax:p}),Promise.resolve(this.loadYrData()).then((function(){try{return u=n.getWindSpeeds(s),o.generateData(),i.generateData(u,o.prices),a.generateData(),t()}catch(t){return e(t)}}),e)}.bind(this))},s.loadYrData=function(){return new Promise(function(t,e){var r,n,i;return(n=(r=this.props.stores).weatherYrStore).updateQueryFilter({name:(i=r.windmillStore.currentWindpark).name,altitude:i.position.altitude,lat:i.position.lat,lon:i.position.lon}),Promise.resolve(n.load()).then(t,e)}.bind(this))},s.componentDidMount=function(){this.loadAll()},s.render=function(){var t=this,e=this.state,r=e.now,n=e.xMin,i=e.xMax,o=this.props.stores,s=o.windmillStore,l=o.productionStore,d=o.demandStore,u=l.productionData,h=l.productionBoostData,f=l.productionLongLifeData,b=d.demands,w=d.demandAi,m=s.windparks,g=s.currentWindparkName;return Object(a.h)("div",{class:"container-fluid mt-5 pt-2"},Object(a.h)("div",{class:"row"},Object(a.h)("div",{class:"col-4"},Object(a.h)("h1",null,Object(a.h)("i",{class:"fas fa-chess-knight"})," Strategy")),Object(a.h)("div",{class:"col-8 pt-2"},Object(a.h)("ul",{class:"nav nav-pills float-right"},m&&m.map((function(e){return Object(a.h)("li",{class:"nav-item"},Object(a.h)("button",{class:"btn btn-link nav-link "+(e.name===g?"active":""),onClick:t.setWindpark,"data-windpark":e.name},e.name))})))),Object(a.h)("div",{class:"col-12"},Object(a.h)(p.a,{stores:this.props.stores,width:1200,height:500,showXTicks:1,xTicksVal:function(t){return c.a.isoDate(t)},xMin:n,xMax:i,paddingTop:30,dataLeft:[b,w],legendLeft:["Demand","Demand AI prediction"],yMaxLeft:4e3,yMinLeft:0,showYTicksLeft:1,yTicksLeft:["4TW","3TW","2TW","1TW","0TW"],unitLeft:["Mw","Mw"],dataRight:[u,h,f],legendRight:["Normal production","Boost 10%","Long life -5%"],yMaxRight:4e3,yMinRight:0,showYTicksRight:1,yTicksRight:["4TW","3TW","2TW","1TW","0TW"],unitRight:["Mw"],avgWindowRight:[8,8,8],marker:r}))))},e}(a.Component))||o;e.default=u}}]);
//# sourceMappingURL=route-strategy.chunk.daea8.js.map