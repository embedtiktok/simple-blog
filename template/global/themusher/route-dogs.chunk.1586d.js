(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{RUc2:function(e,t,r){"use strict";function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t);var n,o=r("hosL"),a=r("Gblv"),l=r("/eY4"),i={},b=Object(l.a)(n=function(e){function t(t){var r;return(r=e.call(this,t)||this).state=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},i),r.loadDogs(),r}var r,n;n=e,(r=t).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var l=t.prototype;return l.loadDogs=function(){this.props.stores.dogStore.load()},l.render=function(){var e=this.props.stores.dogStore.dogs;return Object(o.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 60px;"},Object(o.h)("div",{class:"row"},Object(o.h)("div",{class:"col-12"},Object(o.h)("h5",null,"Hundene dine - ",e.length," stk"),Object(o.h)("div",{class:"row"},e&&e.map((function(e){return Object(o.h)("div",{class:"col-6 col-sm-4 col-lg-2 mt-2"},Object(o.h)("div",{class:"text-center border p-2 mb-1"},Object(o.h)("a",{href:"/dogs/"+e.id},e.image?Object(o.h)("img",{src:e.image.s3SmallLink,class:"img-fluid",style:"max-height: 13vh;"}):Object(o.h)("i",{class:"fas fa-dog text-muted",style:"font-size: 4vw;"}))),Object(o.h)("div",null,Object(o.h)("a",{href:"/dogs/"+e.id},e.name)," ",Object(o.h)("span",{class:"float-right"},e.birth&&Object(o.h)("span",{class:"mr-2"},a.a.age(e.birth,e.deceased)," år"),"female"===e.gender?Object(o.h)("i",{class:"fas fa-venus"}):Object(o.h)("i",{class:"fas fa-mars"}))),Object(o.h)("small",null,Object(o.h)("i",null,e.shortname),Object(o.h)("br",null),e.birth&&Object(o.h)("span",null,a.a.isoDate(e.birth,!1,!1,!0),Object(o.h)("br",null)),e.chipdId&&Object(o.h)("small",null,e.chipId)))}))),Object(o.h)("div",{class:"col-12"},Object(o.h)("a",{class:"btn btn-primary mt-5 float-right",href:"/dogs/new"},Object(o.h)("i",{class:"fas fa-plus"})," Legg til hunder")))))},t}(o.Component))||n;t.default=b}}]);
//# sourceMappingURL=route-dogs.chunk.1586d.js.map