(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+sdk":function(e,t,r){"use strict";function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t);var c,a,n=r("hosL"),i=r("Utv1"),l=r("/eY4"),p=Object(l.a)(c=function(e){function t(){return e.apply(this,arguments)||this}var r,s;return s=e,(r=t).prototype=Object.create(s.prototype),r.prototype.constructor=r,r.__proto__=s,t.prototype.render=function(){var e=this.props.team;return Object(n.h)("div",{class:"row mb-3"},Object(n.h)("div",{class:"col-12 col-sm-6 col-lg-2 mb-0 d-flex"},Object(n.h)("div",{class:"text-center border rounded-circle imageRounded",style:e.image?'background-image: url("'+e.image.s3SmallLink+'");':""},!e.image&&Object(n.h)("i",{class:"fas fa-users text-muted mt-3",style:"font-size: 40px;"})),Object(n.h)("div",{class:"flex-grow-1 pl-3"},Object(n.h)("span",{class:"float-right"},e.birth&&Object(n.h)("span",{class:"mr-2"},i.a.age(e.birth,e.deceased)," år"),"female"===e.gender?Object(n.h)("i",{class:"fas fa-venus"}):Object(n.h)("i",{class:"fas fa-mars"})),Object(n.h)("a",{class:"stretched-link",href:"/teams/"+e.id},Object(n.h)("h5",null,e.name)),Object(n.h)("small",null,e&&e.dogs&&e.dogs.length," ",Object(n.h)("i",{class:"fas fa-dog mr-4"}),e&&e.members&&e.members.length," ",Object(n.h)("i",{class:"fas fa-user"})))))},t}(n.Component))||c,b={},u=Object(l.a)(a=function(e){function t(t){var r;return(r=e.call(this,t)||this).state=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},b),r.loadTeams(),r}var r,c;c=e,(r=t).prototype=Object.create(c.prototype),r.prototype.constructor=r,r.__proto__=c;var a=t.prototype;return a.loadTeams=function(){this.props.stores.teamStore.load()},a.render=function(){var e=this,t=this.props.stores,r=t.teamStore.teams;return Object(n.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 60px;"},Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12"},Object(n.h)("h5",null,"Teamene dine - ",r.length," stk"),r&&r.map((function(t){return Object(n.h)(p,{stores:e.props.stores,team:t})})),Object(n.h)("div",{class:"col-12"},Object(n.h)("a",{class:"btn btn-primary mt-5 float-right",href:"/teams/edit/new"},Object(n.h)("i",{class:"fas fa-plus"})," Legg til team")))))},t}(n.Component))||a;t.default=u}}]);
//# sourceMappingURL=route-teams.chunk.7707e.js.map