(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+1Jk":function(e,t,s){"use strict";function c(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,c)}return s}function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e){switch(e.type){case 1:return"border-primary";case 2:return"border-danger";case 3:return"border-success"}}function n(e){switch(e.type){case 1:return"fas fa-running";case 2:return"fas fa-flag-checkered";case 3:return"fas fa-hiking"}}s.r(t);var l,o=s("hosL"),i=s("Utv1"),b=s("/eY4"),h={},d=Object(b.a)(l=function(e){function t(t){var s;return(s=e.call(this,t)||this).state=function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?c(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},h),s.loadAll(),s}var s,l;l=e,(s=t).prototype=Object.create(l.prototype),s.prototype.constructor=s,s.__proto__=l;var b=t.prototype;return b.loadAll=function(){return new Promise(function(e,t){var s,c;return c=(s=this.props.stores).userStore,s.appState.getFingerprint(),Promise.resolve(c.getInfo()).then((function(){try{return e()}catch(e){return t(e)}}),t)}.bind(this))},b.render=function(){var e=this.props.stores.userStore,t=e.dogs,s=e.workouts,c=e.workoutSummary;return Object(o.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 60px;"},Object(o.h)("div",{class:"row"},Object(o.h)("div",{class:"col-12 mb-4"})),Object(o.h)("div",{class:"row"},Object(o.h)("div",{class:"col-12 mb-4"},Object(o.h)("h5",null,"Hundene - ",t.length," stk"),Object(o.h)("div",{class:"row"},t&&t.map((function(t){return Object(o.h)("div",{class:"col-12 col-sm-6 col-lg-2 mt-2 d-flex"},Object(o.h)("div",{class:"text-center border rounded-circle imageRounded",style:t.image?'background-image: url("'+t.image.s3SmallLink+'");':""},!t.image&&Object(o.h)("i",{class:"fas fa-dog text-muted mt-3",style:"font-size: 40px;"})),Object(o.h)("div",{class:"flex-grow-1 pl-3 pr-2",style:"border-right: 4px solid "+e.findHarness(t.harness,"colorNonstop")+" !important;"},Object(o.h)("span",{class:"float-right"},t.birth&&Object(o.h)("span",{class:"mr-2"},i.a.age(t.birth,t.deceased)),"female"===t.gender?Object(o.h)("i",{class:"fas fa-venus"}):Object(o.h)("i",{class:"fas fa-mars"})),Object(o.h)("a",{class:"stretched-link",href:"/dogs/"+t.id},Object(o.h)("h5",null,t.shortname||t.name)),e.findTeam(t.team),Object(o.h)("br",null),Object(o.h)("small",null,t.chipdId&&Object(o.h)("small",null,t.chipId))))}))))),Object(o.h)("div",{class:"row"},Object(o.h)("div",{class:"col-12 mb-4"},Object(o.h)("h5",null,"Treningsturene - ",s.length," stk"),Object(o.h)("div",{class:"row"},s&&s.map((function(t){return Object(o.h)("div",{class:"col-12 col-sm-6 col-lg-2 mt-2 p-2 d-flex"},Object(o.h)("div",{class:"text-center border rounded-circle imageRounded "+a(t),style:t.image?'background-image: url("'+t.image.s3SmallLink+'");':""},!t.image&&Object(o.h)("i",{class:n(t)+" text-muted mt-3",style:"font-size: 40px;"})),Object(o.h)("div",{class:"flex-grow-1 pl-3"},Object(o.h)("a",{class:"stretched-link",href:"/workouts/"+t.id},Object(o.h)("h5",{class:"my-0"},t.name)),e.findTeam(t.team),Object(o.h)("br",null),Object(o.h)("small",null,Object(o.h)("span",{class:"text-muted"},Object(o.h)("i",{class:"fas fa-tools"})," ",t.equipment,Object(o.h)("i",{class:"fas fa-road ml-2"})," ",t.distanceKm,"km",Object(o.h)("i",{class:"fas fa-mountain ml-2"})," ",t.elevation,"m",t.dogs&&Object(o.h)("span",null,Object(o.h)("i",{class:"fas fa-dog ml-2"})," ",t.dogs.length)),Object(o.h)("i",null,t.url),Object(o.h)("br",null)),Object(o.h)("small",{class:"text-muted"},i.a.isoDate(t.date,!1,!1,!0))))}))))),Object(o.h)("div",{class:"row"},Object(o.h)("div",{class:"col-12 mb-4"},Object(o.h)("h5",{class:"mt-4"},"Treningsoversikt"),c&&c.map((function(e){return Object(o.h)("div",{class:"col-12 col-sm-12 col-lg-2 mt-2 p-2 d-flex"},Object(o.h)("div",{class:"text-center border rounded-circle imageRounded"},Object(o.h)("span",{class:"text-muted mt-4",style:"font-size: 40px;"},e._id.week)),Object(o.h)("div",{class:"flex-grow-1 pl-3"},Object(o.h)("h5",{class:"my-0"},e._id.week," - ",e._id.year),Object(o.h)("span",{class:"text-muted"},Object(o.h)("i",{class:"fas fa-stopwatch-20"})," ",e.count,Object(o.h)("i",{class:"fas fa-road ml-2"})," ",e.distanceKm,"km",Object(o.h)("i",{class:"fas fa-mountain ml-2"})," ",e.elevation,"m",Object(o.h)("i",{class:"fas fa-stopwatch ml-2"})," ",i.a.secToHms(e.duration),Object(o.h)("i",{class:"fas fa-tachometer-alt ml-2"})," ",e.speedAvg,"km/t")))})))))},t}(o.Component))||l;t.default=d}}]);
//# sourceMappingURL=route-home.chunk.495c2.js.map