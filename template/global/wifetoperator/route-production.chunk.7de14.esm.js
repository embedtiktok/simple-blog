(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{RVkS:function(t,e,o){"use strict";function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}o.r(e);var a,n=o("hosL"),s=o("/eY4"),c=o("Gblv"),l=o("wgWz"),p=o("bbv7"),d=o("HqZR");const h={};let w=Object(s.a)(a=class extends n.Component{constructor(t){super(t),this.setWindpark=t=>{const{windmillStore:e}=this.props.stores;e.setCurrentWindparkName(t.target.dataset.windpark),this.loadAll()},this.state=function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},h)}async loadAll(){const{windmillStore:t,weatherYrStore:e,productionStore:o,priceStore:i}=this.props.stores,{currentWindparkName:r}=t,a=l.a.getDateDiffTime(-4),n=l.a.getDateDiffTime(10),s=Math.floor((new Date).getTime()/1e3);this.setState({now:s,xMin:a,xMax:n}),await this.loadYrData();const c=e.getWindSpeeds(r);i.generateData();const{prices:p}=i;o.generateData(c,p)}async loadYrData(){const{weatherYrStore:t,windmillStore:e}=this.props.stores,{windparks:o}=e;for(let e=0,i=o.length;e<i;e+=1){const i=o[e];t.updateQueryFilter({name:i.name,altitude:i.position.altitude,lat:i.position.lat,lon:i.position.lon}),await t.load()}return await Promise.all([])}componentDidMount(){this.loadAll()}render(){const{now:t,xMin:e,xMax:o}=this.state,{appState:i,windmillStore:r,productionStore:a,weatherYrStore:s}=this.props.stores,{darkmode:l}=i,{windparks:h,currentWindparkName:w,currentWindpark:u}=r,{productionData:b,productionBoostData:f,productionLongLifeData:m}=a,g=s.getWindSpeeds(w);return Object(n.h)("div",{class:"container-fluid mt-5 pt-2"},Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-4"},Object(n.h)("h1",null,Object(n.h)("i",{class:"fas fa-chart-bar"})," Production")),Object(n.h)("div",{class:"col-8 pt-2"},Object(n.h)("ul",{class:"nav nav-pills float-right"},h&&h.map(t=>Object(n.h)("li",{class:"nav-item"},Object(n.h)("button",{class:"btn btn-link nav-link "+(t.name===w?"active":""),onClick:this.setWindpark,"data-windpark":t.name},t.name))))),Object(n.h)("div",{class:"col-12"},Object(n.h)(p.a,{stores:this.props.stores,width:1200,height:400,showXTicks:1,xTicksVal:t=>c.a.isoDate(t),xMin:e,xMax:o,paddingTop:30,dataLeft:[b,f,m],legendLeft:["Normal production","Boost 10%","Long life -5%"],yMaxLeft:500,yMinLeft:0,showYTicksLeft:1,yTicks:["500Mw","400Mw","300Mw","200Mw","100Mw","0Mw"],unitLeft:["Mw","Mw","Mw"],avgWindowLeft:[8,8,8],dataRight:[g],legendRight:["Wind forcast Yr"],yMaxRight:30,yMinRight:0,showYTicksRight:1,yTicksPostfixRight:"m/s",unitRight:["m/s","m/s"],marker:t}))),Object(n.h)("div",{class:"row pt-4"},Object(n.h)("div",{class:"col-12",style:"height: 50vh;"},Object(n.h)(d.a,{stores:this.props.stores,darkmode:l,center:[u.position.lat,u.position.lon],zoom:u.zoom,waypoints:u.windmills}))))}})||a;e.default=w}}]);
//# sourceMappingURL=route-production.chunk.7de14.esm.js.map