(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{RVkS:function(t,e,i){"use strict";function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.r(e);var o,n=i("hosL"),s=i("/eY4"),c=i("Utv1"),l=i("wgWz"),p=i("bbv7"),d=i("HqZR");const h={};let u=Object(s.a)(o=class extends n.Component{constructor(t){super(t),this.setWindpark=t=>{const{windmillStore:e}=this.props.stores;e.setCurrentWindparkName(t.target.dataset.windpark),this.loadAll()},this.state=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},h)}async loadAll(){const{windmillStore:t,weatherYrStore:e,productionStore:i,priceStore:r}=this.props.stores,{currentWindparkName:a,windparkCapacity:o}=t,n=l.a.getDateDiffTime(-4),s=l.a.getDateDiffTime(10),c=Math.floor((new Date).getTime()/1e3);this.setState({now:c,xMin:n,xMax:s}),await this.loadYrData();const p=e.getWindSpeeds(a);r.generateData();const{prices:d}=r;i.generateData(p,d,o)}async loadYrData(){const{weatherYrStore:t,windmillStore:e}=this.props.stores,{currentWindpark:i}=e;return t.updateQueryFilter({name:i.name,altitude:i.position.altitude,lat:i.position.lat,lon:i.position.lon}),await t.load()}componentDidMount(){this.loadAll()}render(){const{now:t,xMin:e,xMax:i}=this.state,{appState:r,windmillStore:a,productionStore:o,weatherYrStore:s}=this.props.stores,{darkmode:l}=r,{windparks:h,currentWindparkName:u,currentWindpark:w,windparkCapacity:b}=a,{productionData:f,productionBoostData:m,productionLongLifeData:g}=o,O=s.getWindSpeeds(u);return Object(n.h)("div",{class:"container-fluid mt-5 pt-2"},Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-4"},Object(n.h)("h1",null,Object(n.h)("i",{class:"fas fa-chart-bar"})," Production - ",b," Mw")),Object(n.h)("div",{class:"col-8 pt-2"},Object(n.h)("ul",{class:"nav nav-pills float-right"},h&&h.map(t=>Object(n.h)("li",{class:"nav-item"},Object(n.h)("button",{class:"btn btn-link nav-link "+(t.name===u?"active":""),onClick:this.setWindpark,"data-windpark":t.name},t.name))))),Object(n.h)("div",{class:"col-12"},Object(n.h)(p.a,{stores:this.props.stores,width:1200,height:400,showXTicks:1,xTicksVal:t=>c.a.isoDate(t),xMin:e,xMax:i,paddingTop:30,dataLeft:[f,m,g],legendLeft:["Normal production","Boost 10%","Long life -5%"],yMaxLeft:b,yMinLeft:0,showYTicksLeft:1,yTicksLeftPostfix:"Mw",unitLeft:["Mw","Mw","Mw"],avgWindowLeft:[8,8,8],dataRight:[O],legendRight:["Wind forcast Yr"],yMaxRight:30,yMinRight:0,showYTicksRight:1,yTicksPostfixRight:"m/s",unitRight:["m/s","m/s"],marker:t}))),Object(n.h)("div",{class:"row pt-4"},Object(n.h)("div",{class:"col-12",style:"height: 50vh;"},Object(n.h)(d.a,{stores:this.props.stores,darkmode:l,center:[w.position.lat,w.position.lon],zoom:w.zoom,waypoints:w.windmills}))))}})||o;e.default=u}}]);
//# sourceMappingURL=route-production.chunk.86a6e.esm.js.map