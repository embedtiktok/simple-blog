(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Vdbi:function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e);var o,a=r("hosL"),i=(r("Utv1"),r("/eY4")),c=(r("Y3FI"),r("HqZR"));const l={};let p=Object(i.a)(o=class extends a.Component{constructor(t){super(t),this.setWindpark=t=>{const{windmillStore:e}=this.props.stores;e.setCurrentWindparkName(t.target.dataset.windpark)},this.state=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},l)}render(){const{appState:t,windmillStore:e}=this.props.stores,{darkmode:r}=t,{windparks:n,currentWindparkName:s,currentWindpark:o}=e;return Object(a.h)("div",{class:"container-fluid mt-5 pt-2",style:"margin-bottom: 200px;"},Object(a.h)("div",{class:"row"},Object(a.h)("div",{class:"col-4"},Object(a.h)("h1",null,Object(a.h)("i",{class:"fas fa-battery-three-quarters"})," Wear status")),Object(a.h)("div",{class:"col-8 pt-2"},Object(a.h)("ul",{class:"nav nav-pills float-right"},n&&n.map(t=>Object(a.h)("li",{class:"nav-item"},Object(a.h)("button",{class:"btn btn-link nav-link "+(t.name===s?"active":""),onClick:this.setWindpark,"data-windpark":t.name},t.name)))))),Object(a.h)("div",{class:"row"},Object(a.h)("div",{class:"col-12 mb-4",style:"height: 85vh;"},Object(a.h)(c.a,{stores:this.props.stores,darkmode:r,center:[o.position.lat,o.position.lon],zoom:o.zoom,waypoints:o.windmills}))))}})||o;e.default=p}}]);
//# sourceMappingURL=route-wearstatus.chunk.194a6.esm.js.map