(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+sdk":function(e,t,r){"use strict";function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t);var o,n=r("hosL"),a=(r("Gblv"),r("/eY4")),l={},i=Object(a.a)(o=function(e){function t(t){var r;return(r=e.call(this,t)||this).state=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},l),r.loadTeams(),r}var r,o;o=e,(r=t).prototype=Object.create(o.prototype),r.prototype.constructor=r,r.__proto__=o;var a=t.prototype;return a.loadTeams=function(){this.props.stores.teamStore.load()},a.render=function(){var e=this.props.stores,t=e.teamStore.teams,r=e.userStore.user;return Object(n.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 60px;"},Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12"},Object(n.h)("h1",null,"Teamene dine - ",t.length," stk"),Object(n.h)("div",{class:"row"},t&&t.map((function(e){return Object(n.h)("div",{class:"col-6 col-sm-4 col-lg-2 mt-5 p-2 "+(r.team===e.id?"border border-success rounded":"")},Object(n.h)("div",{class:"text-center border rounded p-2 mb-2"},Object(n.h)("a",{href:"/teams/"+e.id},e.image?Object(n.h)("img",{src:e.image,class:"img-fluid"}):Object(n.h)("i",{class:"fas fa-users text-muted",style:"font-size: 7vw;"}))),Object(n.h)("div",null,e.name),Object(n.h)("small",null,Object(n.h)("span",{class:"float-right text-muted"},e&&e.dogs&&e.dogs.length," ",Object(n.h)("i",{class:"fas fa-dog mr-2"}),e&&e.members&&e.members.length," ",Object(n.h)("i",{class:"fas fa-user"})),Object(n.h)("i",null,e.url),Object(n.h)("br",null)))}))),Object(n.h)("div",{class:"col-12"},Object(n.h)("a",{class:"btn btn-primary mt-5 float-right",href:"/teams/new"},Object(n.h)("i",{class:"fas fa-plus"})," Legg til team")))))},t}(n.Component))||o;t.default=i}}]);
//# sourceMappingURL=route-teams.chunk.c7e9c.js.map