(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{JmdN:function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e);var a,i=r("hosL"),o=r("/eY4"),c=r("Gblv"),l=r("wgWz"),p=r("bbv7");const d={};let h=Object(o.a)(a=class extends i.Component{constructor(t){super(t),this.setWindpark=t=>{const{windmillStore:e}=this.props.stores;e.setCurrentWindparkName(t.target.dataset.windpark),this.loadAll()},this.state=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},d)}async loadAll(){const{windmillStore:t,weatherAiStore:e,weatherYrStore:r}=this.props.stores,{currentWindparkName:n}=t,s=l.a.getDateDiffTime(-4),a=l.a.getDateDiffTime(10),i=Math.floor((new Date).getTime()/1e3);this.setState({now:i,xMin:s,xMax:a}),await this.loadYrData();const o=r.getWindSpeeds(n);e.generateData(o)}async loadYrData(){const{weatherYrStore:t,windmillStore:e}=this.props.stores,{currentWindpark:r}=e;return t.updateQueryFilter({name:r.name,altitude:r.position.altitude,lat:r.position.lat,lon:r.position.lon}),await t.load()}componentDidMount(){console.log("componentDidMount"),this.loadAll()}render(){const{now:t,xMin:e,xMax:r}=this.state,{weatherYrStore:n,weatherAiStore:s,windmillStore:a}=this.props.stores,{windparks:o,currentWindparkName:l}=a,d=n.getWindSpeeds(l),{forcasts:h}=s;return Object(i.h)("div",{class:"container-fluid mt-5 pt-2"},Object(i.h)("div",{class:"row"},Object(i.h)("div",{class:"col-4"},Object(i.h)("h1",null,Object(i.h)("i",{class:"fas fa-cloud-sun-rain"})," Weather")),Object(i.h)("div",{class:"col-8 pt-2"},Object(i.h)("ul",{class:"nav nav-pills float-right"},o&&o.map(t=>Object(i.h)("li",{class:"nav-item"},Object(i.h)("button",{class:"btn btn-link nav-link "+(t.name===l?"active":""),onClick:this.setWindpark,"data-windpark":t.name},t.name))))),Object(i.h)("div",{class:"col-12"},Object(i.h)(p.a,{stores:this.props.stores,width:1200,height:500,showXTicks:1,xTicksVal:t=>c.a.isoDate(t),xMin:e,xMax:r,paddingTop:30,dataLeft:[d,h],legendLeft:["Wind forcast Yr","Wind AI prediction"],yMaxLeft:30,yMinLeft:0,showYTicksLeft:1,yTicksLeft:["30 m/s","25 m/s","20 m/s","15 m/s","10 m/s","5 m/s","0 m/s"],unitLeft:["m/s","m/s"],marker:t}))))}})||a;e.default=h}}]);
//# sourceMappingURL=route-weather.chunk.793c5.esm.js.map