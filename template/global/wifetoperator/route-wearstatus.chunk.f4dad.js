(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Vdbi:function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e);var a,c=r("hosL"),i=(r("Gblv"),r("/eY4")),s=(r("Y3FI"),r("HqZR")),p=(r("X9Km"),{}),l=Object(i.a)(a=function(t){function e(e){var r;return(r=t.call(this,e)||this).setWindpark=function(t){r.props.stores.windmillStore.setCurrentWindparkName(t.target.dataset.windpark)},r.state=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},p),r}var r,a;return a=t,(r=e).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a,e.prototype.render=function(){var t=this,e=this.props.stores,r=e.windmillStore,n=e.appState.darkmode,o=r.windparks,a=r.currentWindparkName,i=r.currentWindpark;return Object(c.h)("div",{class:"container-fluid mt-5 pt-2"},Object(c.h)("div",{class:"row"},Object(c.h)("div",{class:"col-4"},Object(c.h)("h1",null,Object(c.h)("i",{class:"fas fa-battery-three-quarters"})," Wear status")),Object(c.h)("div",{class:"col-8 pt-2"},Object(c.h)("ul",{class:"nav nav-pills float-right"},o&&o.map((function(e){return Object(c.h)("li",{class:"nav-item"},Object(c.h)("button",{class:"btn btn-link nav-link "+(e.name===a?"active":""),onClick:t.setWindpark,"data-windpark":e.name},e.name))}))))),Object(c.h)("div",{class:"row"},Object(c.h)("div",{class:"col-12 mb-4",style:"height: 85vh;"},Object(c.h)(s.a,{stores:this.props.stores,darkmode:n,center:[i.position.lat,i.position.lon],zoom:i.zoom,waypoints:i.windmills}))))},e}(c.Component))||a;e.default=l}}]);
//# sourceMappingURL=route-wearstatus.chunk.f4dad.js.map