(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"t/42":function(t,e,a){"use strict";function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.r(e);var o,i=a("hosL"),s=a("/eY4"),c=a("Utv1"),l=a("wgWz"),d=a("bbv7");const p={};let h=Object(s.a)(o=class extends i.Component{constructor(t){super(t),this.setWindpark=t=>{const{windmillStore:e}=this.props.stores;e.setCurrentWindparkName(t.target.dataset.windpark),this.loadAll()},this.state=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},p)}async loadAll(){const{demandStore:t,priceStore:e,productionStore:a,weatherYrStore:n,windmillStore:r}=this.props.stores,{currentWindparkName:o,windparkCapacity:i}=r;t.generateData(),await this.loadYrData(),await this.loadOpenData();const s=n.getWindSpeeds(o);e.generateData();const{prices:c}=e;a.generateData(s,c,i);const d=Math.floor((new Date).getTime()/1e3),p=l.a.timeRangeDays(-4,11);this.setState({now:d,markerDays:p})}async loadYrData(){const{weatherYrStore:t,windmillStore:e}=this.props.stores,{currentWindpark:a}=e;return t.updateQueryFilter({name:a.name,altitude:a.position.altitude,lat:a.position.lat,lon:a.position.lon}),await t.load()}async loadOpenData(){const{weatherOpenStore:t,windmillStore:e}=this.props.stores,{currentWindpark:a}=e;return t.updateQueryFilter({name:a.name,lat:a.position.lat,lon:a.position.lon}),await t.load()}componentDidMount(){this.loadAll()}render(){const{now:t,markerDays:e}=this.state,{demandStore:a,windmillStore:n,productionStore:r}=this.props.stores,{demands:o,demandAiFiltered:s}=a,{windparks:l,currentWindparkName:p}=n,{productionData:h,productionBoostDataFiltered:u,productionLongLifeDataFiltered:w}=r;return Object(i.h)("div",{class:"container-fluid mt-5 pt-2",style:"margin-bottom: 200px;"},Object(i.h)("div",{class:"row"},Object(i.h)("div",{class:"col-4"},Object(i.h)("h1",null,Object(i.h)("i",{class:"fas fa-hand-holding-usd"})," Demand")),Object(i.h)("div",{class:"col-8 pt-2"},Object(i.h)("ul",{class:"nav nav-pills float-right"},l&&l.map(t=>Object(i.h)("li",{class:"nav-item"},Object(i.h)("button",{class:"btn btn-link nav-link "+(t.name===p?"active":""),onClick:this.setWindpark,"data-windpark":t.name},t.name))))),Object(i.h)("div",{class:"col-12"},Object(i.h)(d.a,{stores:this.props.stores,width:1200,height:500,showXTicks:1,xTicksVal:t=>c.a.isoDate(t),paddingTop:30,dataLeft:[o,s],legendLeft:["Demand","AI prediction"],yMaxLeft:4e3,yMinLeft:0,showYTicksLeft:1,yTicksLeft:["4TW","3TW","2TW","1TW","0TW"],unitLeft:["Mw","Mw"],avgWindowLeft:[4,3],smoothLeft:[1,1],dataRight:[h,u,w],legendRight:["Normal production","Boost 10%","Long life -5%"],yMaxRight:4e3,yMinRight:0,showYTicksRight:1,yTicksRight:["4TW","3TW","2TW","1TW","0TW"],unitRight:["Mw"],avgWindowRight:[1,1,1],smoothRight:[1,1,1],marker:t,markers:e}))))}})||o;e.default=h}}]);
//# sourceMappingURL=route-demand.chunk.8a29f.esm.js.map