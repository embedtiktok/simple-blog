(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{RVkS:function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e);var i,a=r("hosL"),s=r("/eY4"),c=r("Gblv"),l=r("wgWz"),p=r("bbv7"),u=r("HqZR"),d={},h=Object(s.a)(i=function(t){function e(e){var r;return(r=t.call(this,e)||this).setWindpark=function(t){r.props.stores.windmillStore.setCurrentWindparkName(t.target.dataset.windpark),r.loadAll()},r.state=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},d),r}var r,i;i=t,(r=e).prototype=Object.create(i.prototype),r.prototype.constructor=r,r.__proto__=i;var s=e.prototype;return s.loadAll=function(){return new Promise(function(t,e){var r,n,o,i,a,s,c,p,u;return n=(r=this.props.stores).weatherYrStore,o=r.productionStore,i=r.priceStore,a=r.windmillStore.currentWindparkName,s=l.a.getDateDiffTime(-4),c=l.a.getDateDiffTime(10),p=Math.floor((new Date).getTime()/1e3),this.setState({now:p,xMin:s,xMax:c}),Promise.resolve(this.loadYrData()).then((function(){try{return u=n.getWindSpeeds(a),i.generateData(),o.generateData(u,i.prices),t()}catch(t){return e(t)}}),e)}.bind(this))},s.loadYrData=function(){return new Promise(function(t,e){function r(){return l+=1,n}function n(){return l<p?(a.updateQueryFilter({name:(u=s[l]).name,altitude:u.position.altitude,lat:u.position.lat,lon:u.position.lon}),Promise.resolve(a.load()).then((function(){try{return r}catch(t){return e(t)}}),e)):[1]}function o(){return Promise.resolve(Promise.all(c)).then(t,e)}var i,a,s,c,l,p,u,d;return a=(i=this.props.stores).weatherYrStore,c=[],l=0,p=(s=i.windmillStore.windparks).length,(d=function(t){for(;t;){if(t.then)return void t.then(d,e);try{if(t.pop){if(t.length)return t.pop()?o.call(this):t;t=r}else t=t.call(this)}catch(t){return e(t)}}}.bind(this))(n)}.bind(this))},s.componentDidMount=function(){this.loadAll()},s.render=function(){var t=this,e=this.state,r=e.now,n=e.xMin,o=e.xMax,i=this.props.stores,s=i.windmillStore,l=i.productionStore,d=i.appState.darkmode,h=s.windparks,f=s.currentWindparkName,w=s.currentWindpark,b=l.productionData,m=l.productionBoostData,g=l.productionLongLifeData,O=i.weatherYrStore.getWindSpeeds(f);return Object(a.h)("div",{class:"container-fluid mt-5 pt-2"},Object(a.h)("div",{class:"row"},Object(a.h)("div",{class:"col-4"},Object(a.h)("h1",null,Object(a.h)("i",{class:"fas fa-chart-bar"})," Production")),Object(a.h)("div",{class:"col-8 pt-2"},Object(a.h)("ul",{class:"nav nav-pills float-right"},h&&h.map((function(e){return Object(a.h)("li",{class:"nav-item"},Object(a.h)("button",{class:"btn btn-link nav-link "+(e.name===f?"active":""),onClick:t.setWindpark,"data-windpark":e.name},e.name))})))),Object(a.h)("div",{class:"col-12"},Object(a.h)(p.a,{stores:this.props.stores,width:1200,height:400,showXTicks:1,xTicksVal:function(t){return c.a.isoDate(t)},xMin:n,xMax:o,paddingTop:30,dataLeft:[b,m,g],legendLeft:["Normal production","Boost 10%","Long life -5%"],yMaxLeft:500,yMinLeft:0,showYTicksLeft:1,yTicks:["500Mw","400Mw","300Mw","200Mw","100Mw","0Mw"],unitLeft:["Mw","Mw","Mw"],avgWindowLeft:[8,8,8],dataRight:[O],legendRight:["Wind forcast Yr"],yMaxRight:30,yMinRight:0,showYTicksRight:1,yTicksPostfixRight:"m/s",unitRight:["m/s","m/s"],marker:r}))),Object(a.h)("div",{class:"row pt-4"},Object(a.h)("div",{class:"col-12",style:"height: 50vh;"},Object(a.h)(u.a,{stores:this.props.stores,darkmode:d,center:[w.position.lat,w.position.lon],zoom:w.zoom,waypoints:w.windmills}))))},e}(a.Component))||i;e.default=h}}]);
//# sourceMappingURL=route-production.chunk.23273.js.map