(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{JmdN:function(t,e,a){"use strict";function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.r(e);var n,i=a("hosL"),o=a("/eY4"),c=a("Utv1"),l=a("wgWz"),p=a("bbv7"),d=a("HqZR");const h={};let m=Object(o.a)(n=class extends i.Component{constructor(t){super(t),this.setWindpark=t=>{const{windmillStore:e}=this.props.stores;e.setCurrentWindparkName(t.target.dataset.windpark),this.loadAll()},this.state=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},h)}async loadAll(){const{windmillStore:t,weatherAiStore:e,weatherYrStore:a}=this.props.stores,{currentWindparkName:r}=t,s=l.a.getDateDiffTime(-4),n=l.a.getDateDiffTime(10),i=l.a.getEpoch(),o=l.a.timeRangeDays(-4,11);this.setState({now:i,xMin:s,xMax:n,markerDays:o}),await this.loadYrData(),await this.loadOpenData();const c=a.getWindSpeeds(r);e.generateData(c)}async loadYrData(){const{weatherYrStore:t,windmillStore:e}=this.props.stores,{currentWindpark:a}=e;return t.updateQueryFilter({name:a.name,altitude:a.position.altitude,lat:a.position.lat,lon:a.position.lon}),await t.load()}async loadOpenData(){const{weatherOpenStore:t,windmillStore:e}=this.props.stores,{currentWindpark:a}=e;return t.updateQueryFilter({name:a.name,lat:a.position.lat,lon:a.position.lon}),await t.load()}componentDidMount(){this.loadAll()}render(){const{now:t,xMin:e,xMax:a,markerDays:r}=this.state,{appState:s,weatherYrStore:n,weatherOpenStore:o,weatherAiStore:l,windmillStore:h}=this.props.stores,{darkmode:m}=s,{windparks:u,currentWindparkName:w,currentWindpark:b}=h,O=n.getWindSpeeds(w),f=o.getWindSpeeds(w),{forcastsFiltered:j}=l;return Object(i.h)("div",{class:"container-fluid mt-5 pt-2",style:"margin-bottom: 200px;"},Object(i.h)("div",{class:"row"},Object(i.h)("div",{class:"col-4"},Object(i.h)("h1",null,Object(i.h)("i",{class:"fas fa-cloud-sun-rain"})," Weather")),Object(i.h)("div",{class:"col-8 pt-2"},Object(i.h)("ul",{class:"nav nav-pills float-right"},u&&u.map(t=>Object(i.h)("li",{class:"nav-item"},Object(i.h)("button",{class:"btn btn-link nav-link "+(t.name===w?"active":""),onClick:this.setWindpark,"data-windpark":t.name},t.name))))),Object(i.h)("div",{class:"col-12"},Object(i.h)(p.a,{stores:this.props.stores,width:1200,height:500,showXTicks:1,xTicksVal:t=>c.a.isoDate(t),xMin:e,xMax:a,paddingTop:30,dataLeft:[O,f,j],legendLeft:["Wind forcast Yr","Wind OpenWeather","Wind AI prediction"],yMaxLeft:30,yMinLeft:0,showYTicksLeft:1,yTicksLeft:["30 m/s","25 m/s","20 m/s","15 m/s","10 m/s","5 m/s","0 m/s"],unitLeft:["m/s","m/s"],avgWindowLeft:[0,0,4],smoothLeft:[1,1,1],marker:t,markers:r}))),Object(i.h)("div",{class:"row pt-4"},Object(i.h)("div",{class:"col-12",style:"height: 45vh;"},Object(i.h)(d.a,{stores:this.props.stores,darkmode:m,center:[b.position.lat,b.position.lon],zoom:b.zoom-2,waypoints:b.windmills}))))}})||n;e.default=m}}]);
//# sourceMappingURL=route-weather.chunk.36492.esm.js.map