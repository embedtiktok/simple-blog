(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{nKYJ:function(t,e,a){"use strict";function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.r(e);var s,n=a("hosL"),c=(a("Gblv"),a("/eY4")),l=a("w8dD"),i={},d=Object(c.a)(s=function(t){function e(e){var a;return(a=t.call(this,e)||this).state=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},i),a.loadTracks(),a}var a,s;s=t,(a=e).prototype=Object.create(s.prototype),a.prototype.constructor=a,a.__proto__=s;var c=e.prototype;return c.loadTracks=function(){this.props.stores.trackStore.load()},c.render=function(){var t=this,e=this.props.stores,a=e.trackStore.tracks;return Object(n.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 60px;"},Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12"},Object(n.h)("h5",null,"Treningsrundene dine - ",a.length," stk"),a&&a.map((function(e){return Object(n.h)(l.a,{stores:t.props.stores,track:e})})),Object(n.h)("div",{class:"col-12"},Object(n.h)("a",{class:"btn btn-primary mt-5 float-right",href:"/tracks/new"},Object(n.h)("i",{class:"fas fa-plus"})," Legg til runde")))))},e}(n.Component))||s;e.default=d},w8dD:function(t,e,a){"use strict";var r,o=a("hosL"),s=a("Gblv"),n=a("/eY4"),c=a("UJvz"),l=Object(n.a)(r=function(t){function e(){for(var e,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).showModal=function(t){t.stopPropagation(),t.preventDefault(),e.setState({displayModal:!0,currentImage:t.target.dataset.image,currentImageXXL:t.target.dataset.imagexxl,thumb:t.target.dataset.thumb,name:t.target.dataset.name,title:t.target.dataset.title,date:t.target.dataset.date})},e.closeModal=function(){e.setState({displayModal:!1})},e.toggleDate=function(){e.setState({showDate:!e.state.showDate})},e}var a,r;return r=t,(a=e).prototype=Object.create(r.prototype),a.prototype.constructor=a,a.__proto__=r,e.prototype.render=function(){var t=this,e=this.state,a=e.displayModal,r=e.currentImage,n=e.currentImageXXL,l=e.showDate,i=e.thumb,d=e.name,u=e.title,m=e.date,p=this.props.track;return Object(o.h)("div",{class:"row mb-3"},Object(o.h)("div",{class:"col p-2"},a&&Object(o.h)(c.a,{close:this.closeModal,image:r,imagexxl:n,thumb:i,name:d,title:u,date:m}),Object(o.h)("div",{class:"col-12 col-sm-6 col-lg-2 mb-0 d-flex position-relative"},Object(o.h)("div",{class:"text-center border rounded-circle imageRounded",style:p.image?'background-image: url("'+p.image.s3SmallLink+'");':""},!p.image&&Object(o.h)("i",{class:"fas fa-map-marked text-muted mt-3",style:"font-size: 40px;"})),Object(o.h)("div",{class:"flex-grow-1 pl-3",style:"line-height: 1.0em;"},Object(o.h)("a",{class:"stretched-link",href:"/tracks/"+p.id},Object(o.h)("h5",null,p.name)),Object(o.h)("small",{class:"text-muted"},p.date&&Object(o.h)("small",{onClick:this.toggleDate},l?s.a.formatDate(p.date,{locale:"no-NB"}):s.a.formatDistance(p.date,new Date,{locale:"no-NB"}),Object(o.h)("br",null))),Object(o.h)("small",{class:"text-muted"},Object(o.h)("i",{class:"fas fa-road"})," ",p.distanceKm," km",Object(o.h)("i",{class:"fas fa-mountain ml-2"})," ",p.elevation," m"))),Object(o.h)("div",{class:"container-fluid mt-1",style:"padding-left: 122px;"},Object(o.h)("div",{class:"row"},p.images&&p.images.map((function(e){return Object(o.h)("div",{class:"text-center border rounded imageRounded imageRoundedSmall",style:e?'background-image: url("'+e.s3SmallLink+'");':"",onClick:t.showModal,"data-image":e.s3LargeLink,"data-imagexxl":e.s3XXLargeLink,"data-thumb":p.image&&p.image.s3SmallLink,"data-title":p.name,"data-date":p.date}," ")}))))))},e}(o.Component))||r;e.a=l}}]);
//# sourceMappingURL=route-tracks.chunk.29a62.js.map