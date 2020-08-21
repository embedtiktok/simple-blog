(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+1Jk":function(t,e,r){"use strict";function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e);var a,o=r("hosL"),s=r("/eY4"),c=r("Gblv"),l=r("wgWz"),h=r("bbv7"),f={},d=Object(s.a)(a=function(t){function e(e){var r;return(r=t.call(this,e)||this).setWindpark=function(t){r.props.stores.windmillStore.setCurrentWindparkName(t.target.dataset.windpark),r.loadAll()},r.state=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},f),r.loadAll(),r}var r,a;a=t,(r=e).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a;var s=e.prototype;return s.loadAll=function(){return new Promise(function(t,e){var r,i,n,a,o,s,c,h,f,d,p,u;return i=(r=this.props.stores).userStore,n=r.weatherYrStore,a=r.weatherAiStore,o=r.productionStore,s=r.demandStore,c=r.priceStore,h=r.windmillStore.currentWindparkName,r.appState.getFingerprint(),Promise.resolve(i.getInfo()).then(function(){try{return f=l.a.getDateDiffTime(-4),d=l.a.getDateDiffTime(10),p=Math.floor((new Date).getTime()/1e3),this.setState({now:p,xMin:f,xMax:d}),Promise.resolve(this.loadYrData()).then((function(){try{return u=n.getWindSpeeds(h),a.generateData(u),c.generateData(),s.generateData(),o.generateData(u,c.prices),t()}catch(t){return e(t)}}),e)}catch(t){return e(t)}}.bind(this),e)}.bind(this))},s.loadYrData=function(){return new Promise(function(t,e){function r(){return l+=1,i}function i(){return l<h?(o.updateQueryFilter({name:(f=s[l]).name,altitude:f.position.altitude,lat:f.position.lat,lon:f.position.lon}),Promise.resolve(o.load()).then((function(){try{return r}catch(t){return e(t)}}),e)):[1]}function n(){return Promise.resolve(Promise.all(c)).then(t,e)}var a,o,s,c,l,h,f,d;return o=(a=this.props.stores).weatherYrStore,c=[],l=0,h=(s=a.windmillStore.windparks).length,(d=function(t){for(;t;){if(t.then)return void t.then(d,e);try{if(t.pop){if(t.length)return t.pop()?n.call(this):t;t=r}else t=t.call(this)}catch(t){return e(t)}}}.bind(this))(i)}.bind(this))},s.render=function(){var t=this,e=this.state,r=e.now,i=e.xMin,n=e.xMax,a=this.props.stores,s=a.windmillStore,l=a.weatherAiStore,f=a.productionStore,d=a.demandStore,p=a.priceStore,u=s.windparks,b=s.currentWindparkName,m=a.weatherYrStore.getWindSpeeds(b),g=l.forcasts,w=f.productionData,O=f.productionBoostData,j=f.productionLongLifeData,v=f.productionDataNOK,k=d.demands,y=p.prices;return Object(o.h)("div",{class:"container-fluid mt-5 mb-5 pt-2"},Object(o.h)("div",{class:"row"},Object(o.h)("div",{class:"col-4"},Object(o.h)("h1",null,Object(o.h)("i",{class:"fab fa-hubspot"})," Home")),Object(o.h)("div",{class:"col-8 pt-2"},Object(o.h)("ul",{class:"nav nav-pills float-right"},u&&u.map((function(e){return Object(o.h)("li",{class:"nav-item"},Object(o.h)("button",{class:"btn btn-link nav-link "+(e.name===b?"active":""),onClick:t.setWindpark,"data-windpark":e.name},e.name))})))),Object(o.h)("div",{class:"col-12"},Object(o.h)("div",{class:"d-flex"},Object(o.h)("div",{class:"p-2 flex-grow-1 bg-light mr-2"},Object(o.h)("i",{class:"fas fa-chart-bar"})," Production",Object(o.h)(h.a,{stores:this.props.stores,width:1200,height:200,showXTicks:1,xTicksVal:function(t){return c.a.isoDate(t)},xMin:i,xMax:n,paddingTop:30,dataLeft:[w,O,j],legendLeft:["Normal production","Boost 10%","Long life -10%"],yMaxLeft:500,yMinLeft:0,showYTicksLeft:1,yTicksLeft:["335Mw","400Mw","300Mw","200Mw","100Mw","0Mw"],unitLeft:["Mw","Mw","Mw"],avgWindowLeft:[5,5,5],dataRight:[v],legendRight:["Earnings"],showYTicksRight:1,unitRight:["/h"],hoverValRight:[function(t){return c.a.format(t/100*3600,2,","," ",!0)}],yTicksRightVal:function(t){return c.a.format(t/100*3600,2,","," ",!0)},marker:r}))),Object(o.h)("div",{class:"d-flex mt-2"},Object(o.h)("div",{class:"p-2 flex-fill bg-light mr-2"},Object(o.h)("i",{class:"fas fa-cloud-sun-rain"})," Weather",Object(o.h)(h.a,{stores:this.props.stores,width:1200,height:200,showXTicks:1,xMin:i,xMax:n,xTicksVal:function(t){return c.a.isoDate(t)},paddingTop:30,dataLeft:[m,g],legendLeft:["Wind forcast Yr","Wind AI prediction"],yMaxLeft:30,yMinLeft:0,showYTicksLeft:1,yTicksLeft:["30m/s","25m/s","20m/s","15m/s","10m/s","5m/s","0m/s"],unitLeft:["m/s","m/s","m/s"],marker:r}))),Object(o.h)("div",{class:"d-flex mt-2"},Object(o.h)("div",{class:"p-2 flex-fill bg-light mr-2"},Object(o.h)("i",{class:"fas fa-chart-line"})," Electricity prices",Object(o.h)(h.a,{stores:this.props.stores,width:1200,height:200,showXTicks:1,xMin:i,xMax:n,xTicksVal:function(t){return c.a.isoDate(t)},paddingTop:30,dataLeft:[y],legendLeft:["Price"],yMaxLeft:200,yMinLeft:0,showYTicksLeft:1,yTicksLeft:["2NOK","1.5NOK","1NOK","0.5NOK","0NOK"],unitLeft:["øre"],marker:r}))),Object(o.h)("div",{class:"d-flex mt-2"},Object(o.h)("div",{class:"p-2 flex-fill bg-light"},Object(o.h)("i",{class:"fas fa-hand-holding-usd"})," Demand",Object(o.h)(h.a,{stores:this.props.stores,width:1200,height:200,showXTicks:1,xMin:i,xMax:n,xTicksVal:function(t){return c.a.isoDate(t)},paddingTop:30,dataLeft:[k],legendLeft:["Demand"],yMaxLeft:4e3,yMinLeft:0,showYTicksLeft:1,yTicksLeft:["4TW","3TW","2TW","1TW","0TW"],unitLeft:["Mw"],marker:r}))))))},e}(o.Component))||a;e.default=d}}]);
//# sourceMappingURL=route-home.chunk.3c2b7.js.map