(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{B7Gj:function(e,t,r){"use strict";function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t);var n,o=r("hosL"),l=(r("Gblv"),r("/eY4")),c=r("JWe/"),i={isLoading:!1},d=Object(l.a)(n=function(e){function t(t){var r;return(r=e.call(this,t)||this).state=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},i),r.loadWorkouts(),r}var r,n;n=e,(r=t).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var l=t.prototype;return l.loadWorkouts=function(){return new Promise(function(e,t){return this.setState({isLoading:!0}),Promise.resolve(this.props.stores.workoutStore.load()).then(function(){try{return this.setState({isLoading:!1}),e()}catch(e){return t(e)}}.bind(this),t)}.bind(this))},l.render=function(){var e=this,t=this.state.isLoading,r=this.props.stores,a=this.props.message,s=r.workoutStore.workouts,n=r.trackStore.tracks,l=r.dogStore.dogs;return Object(o.h)("div",{class:"container-fluid",style:"margin-bottom: 200px; margin-top: 60px;"},a&&Object(o.h)("div",{class:"alert alert-success mb-3",role:"alert"},Object(o.h)("i",{class:"fas fa-check"})," ",a),Object(o.h)("div",{class:"row"},Object(o.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3"},Object(o.h)("a",{class:"btn btn-primary btn-sm float-right",href:"/workouts/edit/new"},Object(o.h)("i",{class:"fas fa-plus"})," Legg til treningstur")),Object(o.h)("div",{class:"col-12"},Object(o.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(o.h)("h5",null,"Treningsturene - ",s.length," stk")),!t&&s&&0===s.length&&Object(o.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 text-muted"},l&&0===l.length&&Object(o.h)("div",{class:"mb-5 py-3 text-center border-top border-bottom"},Object(o.h)("div",{class:"display-4"},Object(o.h)("i",{class:"fas fa-dog"})),Object(o.h)("h5",null,"Ingen hunder er registert."),"Det er lurt å legge inn hunder før du registrerer en treningstur.",Object(o.h)("br",null),Object(o.h)("a",{class:"btn btn-info mt-3",href:"/dogs/edit/new"},Object(o.h)("i",{class:"fas fa-dog"})," Legg til hund")),n&&0===n.length&&Object(o.h)("div",{class:"mb-5 py-3 text-center border-top border-bottom"},Object(o.h)("div",{class:"display-4"},Object(o.h)("i",{class:"fas fa-map-marked"})),Object(o.h)("h5",null,"Ingen runder er registert."),"Det er lurt å legge inn runden før du registrerer en treningstur. Da får du automatisk fylt ut distanse og høydemeter.",Object(o.h)("br",null),"Dersom du ikke har GPX-filen fra denne runden, så kan du likevel registrere treningen.",Object(o.h)("br",null),Object(o.h)("a",{class:"btn btn-info mt-3",href:"/tracks/edit/new"},Object(o.h)("i",{class:"fas fa-map-marked"})," Legg til runde")),Object(o.h)("div",{class:"text-center mb-5"},Object(o.h)("div",{class:"display-1"},Object(o.h)("i",{class:"fas fa-running"})),Object(o.h)("h5",null,"Ingen treningsturer er registrert ennå.")),Object(o.h)("p",{class:"text-center"},"Tracking i appen er ikke helt klart ennå pga noen tekniske begrensninger i Apple iOS. Når jeg får tak i en Android telefon skal jeg får satt opp denne funksjonen slik at den kan brukes der."),Object(o.h)("p",{class:"text-center"},"Kart over ruten du har kjørt legges inn som GPX under runder."),"Slik kommer du i gang:",Object(o.h)("ol",null,Object(o.h)("li",null,'Trykk på knappen "Legg til treningstur" oppe til høyre.'))),s&&s.map((function(t){return Object(o.h)(c.a,{stores:e.props.stores,workout:t})})))))},t}(o.Component))||n;t.default=d},"JWe/":function(e,t,r){"use strict";function a(e){switch(e.type){case 1:return"border-primary";case 2:return"border-danger";case 3:return"border-success"}}function s(e){switch(e.type){case 1:return"fas fa-running";case 2:return"fas fa-flag-checkered";case 3:return"fas fa-hiking"}}var n,o=r("hosL"),l=r("Gblv"),c=r("/eY4"),i=r("UJvz"),d=Object(c.a)(n=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).showModal=function(e){e.stopPropagation(),e.preventDefault(),t.setState({displayModal:!0,currentImage:e.target.dataset.image,currentImageXXL:e.target.dataset.imagexxl,thumb:e.target.dataset.thumb,name:e.target.dataset.name,title:e.target.dataset.title,date:e.target.dataset.date})},t.closeModal=function(){t.setState({displayModal:!1})},t.toggleDate=function(){t.setState({showDate:!t.state.showDate})},t}var r,n;return n=e,(r=t).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n,t.prototype.render=function(){var e=this,t=this.state,r=t.displayModal,n=t.currentImage,c=t.currentImageXXL,d=t.showDate,u=t.thumb,h=t.name,b=t.title,g=t.date,f=this.props.workout,m=this.props.stores.userStore;return Object(o.h)("div",{class:"w-100 mb-3"},Object(o.h)("div",{class:"row"},r&&Object(o.h)(i.a,{close:this.closeModal,image:n,imagexxl:c,thumb:u,name:h,title:b,date:g}),Object(o.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 d-flex mb-0 position-relative"},Object(o.h)("div",{class:"text-center border rounded-circle imageRounded "+a(f),style:(f.image?'background-image: url("'+f.image.s3SmallLink+'");':"")+" border-width: 3px !important;"},!f.image&&Object(o.h)("i",{class:s(f)+" text-muted mt-3",style:"font-size: 40px;"})),Object(o.h)("div",{class:"flex-grow-1 pl-3",style:"line-height: 1.0em;"},Object(o.h)("a",{class:"stretched-link",href:"/workouts/"+f.id},Object(o.h)("h5",{class:"my-0"},f.name)),Object(o.h)("span",{class:"font-weight-light"},m.findTeam(f.team)),Object(o.h)("br",null),Object(o.h)("small",{class:"text-muted"},f.date&&Object(o.h)("small",{onClick:this.toggleDate},d?l.a.formatDate(f.date,{locale:"no-NB"}):l.a.formatDistance(f.date,new Date,{locale:"no-NB"}),Object(o.h)("br",null))),Object(o.h)("small",null,Object(o.h)("span",{class:"text-muted"},Object(o.h)("i",{class:"fas fa-tools"})," ",m.findEquipment(f.equipment)||f.equipment,Object(o.h)("i",{class:"fas fa-road ml-2"})," ",f.distanceKm,"km",Object(o.h)("i",{class:"fas fa-mountain ml-2"})," ",f.elevation,"m",Object(o.h)("i",{class:"fas fa-tachometer-alt ml-2"})," ",l.a.format(f.speedAvg,1),"km/t",f.dogs&&Object(o.h)("span",null,Object(o.h)("i",{class:"fas fa-dog ml-2"})," ",f.dogs.length)),Object(o.h)("i",null,f.url),Object(o.h)("br",null)))),Object(o.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 mt-1",style:"padding-left: 122px;"},Object(o.h)("div",{class:"row"},f.images&&f.images.map((function(t){return Object(o.h)("div",{class:"text-center border rounded imageRounded imageRoundedSmall",style:t?'background-image: url("'+t.s3SmallLink+'");':"",onClick:e.showModal,"data-image":t.s3LargeLink,"data-imagexxl":t.s3XXLargeLink,"data-thumb":f.image&&f.image.s3SmallLink,"data-name":m.findTeam(f.team),"data-title":f.name,"data-date":f.date}," ")}))))))},t}(o.Component))||n;t.a=d}}]);
//# sourceMappingURL=route-workouts.chunk.0a4de.js.map