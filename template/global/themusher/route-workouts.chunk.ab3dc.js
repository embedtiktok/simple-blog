(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{B7Gj:function(e,t,r){"use strict";function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e){switch(e.type){case 1:return"border-primary";case 2:return"border-danger";case 3:return"border-success"}}function o(e){switch(e.type){case 1:return"fas fa-running";case 2:return"fas fa-flag-checkered";case 3:return"fas fa-hiking"}}r.r(t);var a,l=r("hosL"),i=r("Utv1"),u=r("/eY4"),b={},p=Object(u.a)(a=function(e){function t(t){var r;return(r=e.call(this,t)||this).state=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},b),r.loadWorkouts(),r}var r,a;a=e,(r=t).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a;var u=t.prototype;return u.loadWorkouts=function(){this.props.stores.workoutStore.load()},u.render=function(){var e=this.props.stores,t=e.userStore,r=e.workoutStore.workouts;return Object(l.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 60px;"},Object(l.h)("div",{class:"row"},Object(l.h)("div",{class:"col-12"},Object(l.h)("h5",null,"Treningsturene - ",r.length," stk"),Object(l.h)("div",{class:"row"},r&&r.map((function(e){return Object(l.h)("div",{class:"col-12 col-sm-6 col-lg-2 mt-2 p-2 d-flex"},Object(l.h)("div",{class:"text-center border rounded-circle imageRounded "+n(e),style:e.image?'background-image: url("'+e.image.s3SmallLink+'");':""},!e.image&&Object(l.h)("i",{class:o(e)+" text-muted mt-3",style:"font-size: 40px;"})),Object(l.h)("div",{class:"flex-grow-1 pl-3"},Object(l.h)("a",{class:"stretched-link",href:"/workouts/"+e.id},Object(l.h)("h5",{class:"my-0"},e.name)),t.findTeam(e.team),Object(l.h)("br",null),Object(l.h)("small",null,Object(l.h)("span",{class:"text-muted"},Object(l.h)("i",{class:"fas fa-tools"})," ",e.equipment,Object(l.h)("i",{class:"fas fa-road ml-2"})," ",e.distanceKm,"km",Object(l.h)("i",{class:"fas fa-mountain ml-2"})," ",e.elevation,"m",e.dogs&&Object(l.h)("span",null,Object(l.h)("i",{class:"fas fa-dog ml-2"})," ",e.dogs.length)),Object(l.h)("i",null,e.url),Object(l.h)("br",null)),Object(l.h)("small",{class:"text-muted"},i.a.isoDate(e.date,!1,!1,!0))))}))),Object(l.h)("div",{class:"col-12"},Object(l.h)("a",{class:"btn btn-primary mt-5 float-right",href:"/workouts/new"},Object(l.h)("i",{class:"fas fa-plus"})," Legg til treningstur")))))},t}(l.Component))||a;t.default=p}}]);
//# sourceMappingURL=route-workouts.chunk.ab3dc.js.map