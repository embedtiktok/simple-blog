(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{JmdN:function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e);var o,a=r("hosL"),s=r("/eY4"),c=r("Gblv"),l=r("wgWz"),u=r("bbv7"),p={},h=Object(s.a)(o=function(t){function e(e){var r;return(r=t.call(this,e)||this).setWindpark=function(t){r.props.stores.windmillStore.setCurrentWindparkName(t.target.dataset.windpark),r.loadAll()},r.state=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},p),r}var r,o;o=t,(r=e).prototype=Object.create(o.prototype),r.prototype.constructor=r,r.__proto__=o;var s=e.prototype;return s.loadAll=function(){return new Promise(function(t,e){var r,n,i,o,a,s,c,u;return n=(r=this.props.stores).weatherAiStore,i=r.weatherYrStore,o=r.windmillStore.currentWindparkName,a=l.a.getDateDiffTime(-4),s=l.a.getDateDiffTime(10),c=Math.floor((new Date).getTime()/1e3),this.setState({now:c,xMin:a,xMax:s}),Promise.resolve(this.loadYrData()).then((function(){try{return u=i.getWindSpeeds(o),n.generateData(u),t()}catch(t){return e(t)}}),e)}.bind(this))},s.loadYrData=function(){return new Promise(function(t,e){function r(){return l+=1,n}function n(){return l<u?(a.updateQueryFilter({name:(p=s[l]).name,altitude:p.position.altitude,lat:p.position.lat,lon:p.position.lon}),Promise.resolve(a.load()).then((function(){try{return r}catch(t){return e(t)}}),e)):[1]}function i(){return Promise.resolve(Promise.all(c)).then(t,e)}var o,a,s,c,l,u,p,h;return a=(o=this.props.stores).weatherYrStore,c=[],l=0,u=(s=o.windmillStore.windparks).length,(h=function(t){for(;t;){if(t.then)return void t.then(h,e);try{if(t.pop){if(t.length)return t.pop()?i.call(this):t;t=r}else t=t.call(this)}catch(t){return e(t)}}}.bind(this))(n)}.bind(this))},s.componentDidMount=function(){this.loadAll()},s.render=function(){var t=this,e=this.state,r=e.now,n=e.xMin,i=e.xMax,o=this.props.stores,s=o.weatherAiStore,l=o.windmillStore,p=l.windparks,h=l.currentWindparkName,d=o.weatherYrStore.getWindSpeeds(h),f=s.forcasts;return Object(a.h)("div",{class:"container-fluid mt-5 pt-2"},Object(a.h)("div",{class:"row"},Object(a.h)("div",{class:"col-4"},Object(a.h)("h1",null,Object(a.h)("i",{class:"fas fa-cloud-sun-rain"})," Weather")),Object(a.h)("div",{class:"col-8 pt-2"},Object(a.h)("ul",{class:"nav nav-pills float-right"},p&&p.map((function(e){return Object(a.h)("li",{class:"nav-item"},Object(a.h)("button",{class:"btn btn-link nav-link "+(e.name===h?"active":""),onClick:t.setWindpark,"data-windpark":e.name},e.name))})))),Object(a.h)("div",{class:"col-12"},Object(a.h)(u.a,{stores:this.props.stores,width:1200,height:500,showXTicks:1,xTicksVal:function(t){return c.a.isoDate(t)},xMin:n,xMax:i,paddingTop:30,dataLeft:[d,f],legendLeft:["Wind forcast Yr","Wind AI prediction"],yMaxLeft:30,yMinLeft:0,showYTicksLeft:1,yTicksLeft:["30 m/s","25 m/s","20 m/s","15 m/s","10 m/s","5 m/s","0 m/s"],unitLeft:["m/s","m/s"],marker:r}))))},e}(a.Component))||o;e.default=h}}]);
//# sourceMappingURL=route-weather.chunk.307b0.js.map