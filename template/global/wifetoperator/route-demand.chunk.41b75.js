(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"t/42":function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e);var i,a=r("hosL"),s=r("/eY4"),c=r("Utv1"),l=r("wgWz"),d=r("bbv7"),p={},u=Object(s.a)(i=function(t){function e(e){var r;return(r=t.call(this,e)||this).setWindpark=function(t){r.props.stores.windmillStore.setCurrentWindparkName(t.target.dataset.windpark),r.loadAll()},r.state=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},p),r}var r,i;i=t,(r=e).prototype=Object.create(i.prototype),r.prototype.constructor=r,r.__proto__=i;var s=e.prototype;return s.loadAll=function(){return new Promise(function(t,e){var r,n,o,i,a,s,c,d,p,u;return n=(r=this.props.stores).priceStore,o=r.productionStore,i=r.weatherYrStore,s=(a=r.windmillStore).currentWindparkName,c=a.windparkCapacity,r.demandStore.generateData(),Promise.resolve(this.loadYrData()).then(function(){try{return Promise.resolve(this.loadOpenData()).then(function(){try{return d=i.getWindSpeeds(s),n.generateData(),o.generateData(d,n.prices,c),p=Math.floor((new Date).getTime()/1e3),u=l.a.timeRangeDays(-4,11),this.setState({now:p,markerDays:u}),t()}catch(t){return e(t)}}.bind(this),e)}catch(t){return e(t)}}.bind(this),e)}.bind(this))},s.loadYrData=function(){return new Promise(function(t,e){var r,n,o;return(n=(r=this.props.stores).weatherYrStore).updateQueryFilter({name:(o=r.windmillStore.currentWindpark).name,altitude:o.position.altitude,lat:o.position.lat,lon:o.position.lon}),Promise.resolve(n.load()).then(t,e)}.bind(this))},s.loadOpenData=function(){return new Promise(function(t,e){var r,n,o;return(n=(r=this.props.stores).weatherOpenStore).updateQueryFilter({name:(o=r.windmillStore.currentWindpark).name,lat:o.position.lat,lon:o.position.lon}),Promise.resolve(n.load()).then(t,e)}.bind(this))},s.componentDidMount=function(){this.loadAll()},s.render=function(){var t=this,e=this.state,r=e.now,n=e.markerDays,o=this.props.stores,i=o.demandStore,s=o.windmillStore,l=o.productionStore,p=i.demands,u=i.demandAiFiltered,h=s.windparks,f=s.currentWindparkName,m=l.productionData,b=l.productionBoostDataFiltered,w=l.productionLongLifeDataFiltered;return Object(a.h)("div",{class:"container-fluid mt-5 pt-2",style:"margin-bottom: 200px;"},Object(a.h)("div",{class:"row"},Object(a.h)("div",{class:"col-4"},Object(a.h)("h1",null,Object(a.h)("i",{class:"fas fa-hand-holding-usd"})," Demand")),Object(a.h)("div",{class:"col-8 pt-2"},Object(a.h)("ul",{class:"nav nav-pills float-right"},h&&h.map((function(e){return Object(a.h)("li",{class:"nav-item"},Object(a.h)("button",{class:"btn btn-link nav-link "+(e.name===f?"active":""),onClick:t.setWindpark,"data-windpark":e.name},e.name))})))),Object(a.h)("div",{class:"col-12"},Object(a.h)(d.a,{stores:this.props.stores,width:1200,height:500,showXTicks:1,xTicksVal:function(t){return c.a.isoDate(t)},paddingTop:30,dataLeft:[p,u],legendLeft:["Demand","AI prediction"],yMaxLeft:4e3,yMinLeft:0,showYTicksLeft:1,yTicksLeft:["4TW","3TW","2TW","1TW","0TW"],unitLeft:["Mw","Mw"],avgWindowLeft:[4,3],smoothLeft:[1,1],dataRight:[m,b,w],legendRight:["Normal production","Boost 10%","Long life -5%"],yMaxRight:4e3,yMinRight:0,showYTicksRight:1,yTicksRight:["4TW","3TW","2TW","1TW","0TW"],unitRight:["Mw"],avgWindowRight:[1,1,1],smoothRight:[1,1,1],marker:r,markers:n}))))},e}(a.Component))||i;e.default=u}}]);
//# sourceMappingURL=route-demand.chunk.41b75.js.map