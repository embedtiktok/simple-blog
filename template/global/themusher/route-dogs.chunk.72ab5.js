(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{RUc2:function(t,e,r){"use strict";function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e);var n,o=r("hosL"),a=r("Utv1"),l=r("/eY4"),i={},b=Object(l.a)(n=function(t){function e(e){var r;return(r=t.call(this,e)||this).state=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},i),r.loadDogs(),r}var r,n;n=t,(r=e).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var l=e.prototype;return l.loadDogs=function(){this.props.stores.dogStore.load()},l.render=function(){var t=this.props.stores.dogStore.dogs;return Object(o.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 60px;"},Object(o.h)("div",{class:"row"},Object(o.h)("div",{class:"col-12"},Object(o.h)("h5",null,"Hundene - ",t.length," stk"),Object(o.h)("div",{class:"row"},t&&t.map((function(t){return Object(o.h)("div",{class:"col-6 col-sm-4 col-lg-2 mt-2"},Object(o.h)("div",{class:"text-center border p-2 mb-1"},Object(o.h)("a",{href:"/dogs/"+t.id,class:"stretched-link"},t.image?Object(o.h)("img",{src:t.image.s3SmallLink,class:"img-fluid",style:"max-height: 13vh;"}):Object(o.h)("i",{class:"fas fa-dog text-muted",style:"font-size: 4vw;"}))),Object(o.h)("div",null,Object(o.h)("a",{href:"/dogs/"+t.id},t.name)," ",Object(o.h)("span",{class:"float-right"},t.birth&&Object(o.h)("span",{class:"mr-2"},a.a.age(t.birth,t.deceased)," år"),"female"===t.gender?Object(o.h)("i",{class:"fas fa-venus"}):Object(o.h)("i",{class:"fas fa-mars"}))),Object(o.h)("small",null,Object(o.h)("i",null,t.shortname),Object(o.h)("br",null),t.birth&&Object(o.h)("span",null,a.a.isoDate(t.birth,!1,!1,!0),Object(o.h)("br",null)),t.chipdId&&Object(o.h)("small",null,t.chipId)))}))),Object(o.h)("div",{class:"col-12"},Object(o.h)("a",{class:"btn btn-primary mt-5 float-right",href:"/dogs/new"},Object(o.h)("i",{class:"fas fa-plus"})," Legg til hunder")))))},e}(o.Component))||n;e.default=b}}]);
//# sourceMappingURL=route-dogs.chunk.72ab5.js.map