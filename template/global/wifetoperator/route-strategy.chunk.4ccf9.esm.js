(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{uO3H:function(t,e,a){"use strict";function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.r(e);var r,o=a("hosL"),s=a("/eY4"),c=a("Gblv"),l=a("wgWz"),d=a("bbv7");const p={};let h=Object(s.a)(r=class extends o.Component{constructor(t){super(t),this.setWindpark=t=>{const{windmillStore:e}=this.props.stores;e.setCurrentWindparkName(t.target.dataset.windpark),this.loadAll()},this.state=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},p)}async loadAll(){const{windmillStore:t,weatherYrStore:e,productionStore:a,priceStore:n,demandStore:i}=this.props.stores,{currentWindparkName:r}=t,o=l.a.getDateDiffTime(-4),s=l.a.getDateDiffTime(10),c=Math.floor((new Date).getTime()/1e3);this.setState({now:c,xMin:o,xMax:s}),await this.loadYrData();const d=e.getWindSpeeds(r);n.generateData();const{prices:p}=n;a.generateData(d,p),i.generateData()}async loadYrData(){const{weatherYrStore:t,windmillStore:e}=this.props.stores,{windparks:a}=e;for(let e=0,n=a.length;e<n;e+=1){const n=a[e];t.updateQueryFilter({name:n.name,altitude:n.position.altitude,lat:n.position.lat,lon:n.position.lon}),await t.load()}return await Promise.all([])}componentDidMount(){this.loadAll()}render(){const{now:t,xMin:e,xMax:a}=this.state,{windmillStore:n,productionStore:i,demandStore:r}=this.props.stores,{productionData:s,productionBoostData:l,productionLongLifeData:p}=i,{demands:h,demandAi:u}=r,{windparks:w,currentWindparkName:b}=n;return Object(o.h)("div",{class:"container-fluid mt-5 pt-2"},Object(o.h)("div",{class:"row"},Object(o.h)("div",{class:"col-4"},Object(o.h)("h1",null,Object(o.h)("i",{class:"fas fa-chess-knight"})," Strategy")),Object(o.h)("div",{class:"col-8 pt-2"},Object(o.h)("ul",{class:"nav nav-pills float-right"},w&&w.map(t=>Object(o.h)("li",{class:"nav-item"},Object(o.h)("button",{class:"btn btn-link nav-link "+(t.name===b?"active":""),onClick:this.setWindpark,"data-windpark":t.name},t.name))))),Object(o.h)("div",{class:"col-12"},Object(o.h)(d.a,{stores:this.props.stores,width:1200,height:500,showXTicks:1,xTicksVal:t=>c.a.isoDate(t),xMin:e,xMax:a,paddingTop:30,dataLeft:[h,u],legendLeft:["Demand","Demand AI prediction"],yMaxLeft:4e3,yMinLeft:0,showYTicksLeft:1,yTicksLeft:["4TW","3TW","2TW","1TW","0TW"],unitLeft:["Mw","Mw"],dataRight:[s,l,p],legendRight:["Normal production","Boost 10%","Long life -5%"],yMaxRight:4e3,yMinRight:0,showYTicksRight:1,yTicksRight:["4TW","3TW","2TW","1TW","0TW"],unitRight:["Mw"],avgWindowRight:[8,8,8],marker:t}))))}})||r;e.default=h}}]);
//# sourceMappingURL=route-strategy.chunk.4ccf9.esm.js.map