(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{RUc2:function(e,t,s){"use strict";function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function c(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.r(t);var n,o=s("hosL"),a=s("Gblv"),l=s("/eY4");const i={};let b=Object(l.a)(n=class extends o.Component{constructor(e){super(e),this.state=function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){c(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},i),this.loadDogs()}loadDogs(){const{dogStore:e}=this.props.stores;e.load()}render(){const{dogStore:e}=this.props.stores,{dogs:t}=e;return Object(o.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 60px;"},Object(o.h)("div",{class:"row"},Object(o.h)("div",{class:"col-12"},Object(o.h)("h5",null,"Hundene dine - ",t.length," stk"),Object(o.h)("div",{class:"row"},t&&t.map(e=>Object(o.h)("div",{class:"col-6 col-sm-4 col-lg-2 mt-2"},Object(o.h)("div",{class:"text-center border p-2 mb-1"},Object(o.h)("a",{href:"/dogs/"+e.id},e.image?Object(o.h)("img",{src:e.image,class:"img-fluid"}):Object(o.h)("i",{class:"fas fa-dog text-muted",style:"font-size: 4vw;"}))),Object(o.h)("div",null,e.name," ",Object(o.h)("span",{class:"float-right"},e.birth&&Object(o.h)("span",{class:"mr-2"},a.a.age(e.birth,e.deceased)," år"),"female"===e.gender?Object(o.h)("i",{class:"fas fa-venus"}):Object(o.h)("i",{class:"fas fa-mars"}))),Object(o.h)("small",null,Object(o.h)("i",null,e.shortname),Object(o.h)("br",null),e.birth&&Object(o.h)("span",null,a.a.isoDate(e.birth,!1,!1,!0),Object(o.h)("br",null)),e.chipdId&&Object(o.h)("small",null,e.chipId))))),Object(o.h)("div",{class:"col-12"},Object(o.h)("a",{class:"btn btn-primary mt-5 float-right",href:"/dogs/new"},Object(o.h)("i",{class:"fas fa-plus"})," Legg til hunder")))))}})||n;t.default=b}}]);
//# sourceMappingURL=route-dogs.chunk.e9a3c.esm.js.map