(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+sdk":function(e,t,s){"use strict";function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.r(t);var c,o,n=s("hosL"),i=s("Utv1"),l=s("/eY4"),p=Object(l.a)(c=function(e){function t(){return e.apply(this,arguments)||this}var s,r;return r=e,(s=t).prototype=Object.create(r.prototype),s.prototype.constructor=s,s.__proto__=r,t.prototype.render=function(){var e=this.props.team,t=this.props.stores.teamStore.findWorkoutSummary(e.id,2020)||{};return Object(n.h)("div",{class:"row mb-3"},Object(n.h)("div",{class:"col-12 col-sm-6 col-lg-2 mb-0 d-flex"},Object(n.h)("div",{class:"text-center border rounded-circle imageRounded",style:e.image?'background-image: url("'+e.image.s3SmallLink+'");':""},!e.image&&Object(n.h)("i",{class:"fas fa-users text-muted mt-3",style:"font-size: 40px;"})),Object(n.h)("div",{class:"flex-grow-1 pl-3"},Object(n.h)("span",{class:"float-right"},e.birth&&Object(n.h)("span",{class:"mr-2"},i.a.age(e.birth,e.deceased)," år"),"female"===e.gender?Object(n.h)("i",{class:"fas fa-venus"}):Object(n.h)("i",{class:"fas fa-mars"})),Object(n.h)("a",{class:"stretched-link",href:"/teams/"+e.id},Object(n.h)("h5",null,e.name)),Object(n.h)("small",{class:"text-muted"},e&&e.dogs&&e.dogs.length," ",Object(n.h)("i",{class:"fas fa-dog mr-4"}),e&&e.members&&e.members.length," ",Object(n.h)("i",{class:"fas fa-user"}),t&&t.distanceKm>0&&Object(n.h)("span",{class:"ml-2"},Object(n.h)("i",{class:"fas fa-road"})," ",i.a.format(t.distanceKm,0),"km"),t&&t.elevation>0&&Object(n.h)("span",{class:"ml-2"},Object(n.h)("i",{class:"fas fa-mountain"})," ",i.a.format(t.elevation,0),"m"),t&&t.duration>0&&Object(n.h)("span",{class:"ml-2"},Object(n.h)("i",{class:"fas fa-clock"})," ",i.a.secToHms(t.duration)),t&&t.speedAvg>0&&Object(n.h)("span",{class:"ml-2"},Object(n.h)("i",{class:"fas fa-tachometer-alt"})," ",t.speedAvg,"km/t")))))},t}(n.Component))||c,b={},m=Object(l.a)(o=function(e){function t(t){var s;return(s=e.call(this,t)||this).state=function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},b),s.loadTeams(),s}var s,c;c=e,(s=t).prototype=Object.create(c.prototype),s.prototype.constructor=s,s.__proto__=c;var o=t.prototype;return o.loadTeams=function(){this.props.stores.teamStore.load(void 0,!1,{addData:["workoutSummary"]})},o.render=function(){var e=this,t=this.props.stores,s=t.teamStore.teams;return Object(n.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 60px;"},Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12"},Object(n.h)("h5",null,"Teamene dine - ",s.length," stk"),s&&s.map((function(t){return Object(n.h)(p,{stores:e.props.stores,team:t})})),Object(n.h)("div",{class:"col-12"},Object(n.h)("a",{class:"btn btn-primary mt-5 float-right",href:"/teams/edit/new"},Object(n.h)("i",{class:"fas fa-plus"})," Legg til team")))))},t}(n.Component))||o;t.default=m}}]);
//# sourceMappingURL=route-teams.chunk.d454c.js.map