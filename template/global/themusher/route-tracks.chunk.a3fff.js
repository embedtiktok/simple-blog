(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{nKYJ:function(e,t,a){"use strict";function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.r(t);var o,n,l=a("hosL"),c=a("Utv1"),i=a("/eY4"),d=a("UJvz"),m=Object(i.a)(o=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).showModal=function(e){e.stopPropagation(),e.preventDefault(),t.setState({displayModal:!0,currentImage:e.target.dataset.image,currentImageXXL:e.target.dataset.imagexxl,thumb:e.target.dataset.thumb,name:e.target.dataset.name,title:e.target.dataset.title,date:e.target.dataset.date})},t.closeModal=function(){t.setState({displayModal:!1})},t.toggleDate=function(){t.setState({showDate:!t.state.showDate})},t}var a,r;return r=e,(a=t).prototype=Object.create(r.prototype),a.prototype.constructor=a,a.__proto__=r,t.prototype.render=function(){var e=this,t=this.state,a=t.displayModal,r=t.currentImage,s=t.currentImageXXL,o=t.showDate,n=t.thumb,i=t.name,m=t.title,h=t.date,p=this.props.track;return Object(l.h)("div",{class:"w-100 mb-3"},Object(l.h)("div",{class:"row"},a&&Object(l.h)(d.a,{close:this.closeModal,image:r,imagexxl:s,thumb:n,name:i,title:m,date:h}),Object(l.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 d-flex mb-0 position-relative"},Object(l.h)("div",{class:"text-center border rounded-circle imageRounded",style:p.image?'background-image: url("'+p.image.s3SmallLink+'");':""},!p.image&&Object(l.h)("i",{class:"fas fa-map-marked text-muted mt-3",style:"font-size: 40px;"})),Object(l.h)("div",{class:"flex-grow-1 pl-3",style:"line-height: 1.2em;"},Object(l.h)("a",{class:"stretched-link",href:"/tracks/"+p.id},Object(l.h)("h5",{class:"mb-1",style:"line-height: 1.0em;"},p.name)),Object(l.h)("small",{class:"text-muted"},p.date&&Object(l.h)("small",{onClick:this.toggleDate},o?c.a.formatDate(p.date,{locale:"no-NB"}):c.a.formatDistance(p.date,new Date,{locale:"no-NB"}),Object(l.h)("br",null))),Object(l.h)("small",{class:"text-muted"},Object(l.h)("i",{class:"fas fa-road"})," ",p.distanceKm," km",Object(l.h)("i",{class:"fas fa-mountain ml-2"})," ",p.elevation," m",p.gpx&&Object(l.h)("i",{class:"fas fa-map-marked-alt ml-2"})))),Object(l.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 mt-1",style:"padding-left: 122px;"},Object(l.h)("div",{class:"row"},p.images&&p.images.map((function(t){return Object(l.h)("div",{class:"text-center border rounded imageRounded imageRoundedSmall",style:t?'background-image: url("'+t.s3SmallLink+'");':"",onClick:e.showModal,"data-image":t.s3LargeLink,"data-imagexxl":t.s3XXLargeLink,"data-thumb":p.image&&p.image.s3SmallLink,"data-title":p.name,"data-date":p.date}," ")}))))))},t}(l.Component))||o,h={isLoading:!1},p=Object(i.a)(n=function(e){function t(t){var a;return(a=e.call(this,t)||this).state=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},h),a.loadTracks(),a}var a,o;o=e,(a=t).prototype=Object.create(o.prototype),a.prototype.constructor=a,a.__proto__=o;var n=t.prototype;return n.loadTracks=function(){return new Promise(function(e,t){return this.setState({isLoading:!0}),Promise.resolve(this.props.stores.trackStore.load()).then(function(){try{return this.setState({isLoading:!1}),e()}catch(e){return t(e)}}.bind(this),t)}.bind(this))},n.render=function(){var e=this,t=this.state.isLoading,a=this.props.stores,r=a.trackStore.tracks;return Object(l.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 60px;"},Object(l.h)("div",{class:"row"},Object(l.h)("div",{class:"col-12"},Object(l.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(l.h)("h5",null,"Treningsrundene dine - ",r.length," stk")),Object(l.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 clearfix mb-2"},Object(l.h)("a",{class:"btn btn-sm btn-primary float-right",href:"/tracks/edit/new"},Object(l.h)("i",{class:"fas fa-plus"})," Legg til runde")),!t&&r&&0===r.length&&Object(l.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 text-muted"},Object(l.h)("div",{class:"text-center mb-5"},Object(l.h)("div",{class:"display-1"},Object(l.h)("i",{class:"fas fa-map-marked"})),Object(l.h)("h5",null,"Ingen runder er registrert ennå.")),Object(l.h)("p",{class:"text-center"},"Du har mulighet til å laste opp GPX-filer fra rundene dine. Det finnes mange apper som lar deg lage GPX-filer, men vi anbefaler ViewRanger for ",Object(l.h)("a",{href:"https://apps.apple.com/gb/app/viewranger-hike-ride-or-walk/id404581674"},"iOS")," og  ",Object(l.h)("a",{href:"https://play.google.com/store/apps/details?id=com.augmentra.viewranger.android&hl=en"},"Android"),"."),"Slik kommer du i gang:",Object(l.h)("ol",null,Object(l.h)("li",null,'Trykk på knappen "Legg til runde" rett nedenfor.'))),r&&r.map((function(t){return Object(l.h)(m,{stores:e.props.stores,track:t})})))))},t}(l.Component))||n;t.default=p}}]);
//# sourceMappingURL=route-tracks.chunk.a3fff.js.map