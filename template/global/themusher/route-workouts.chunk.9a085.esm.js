(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{B7Gj:function(t,e,a){"use strict";function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.r(e);var o,n=a("hosL"),c=(a("Utv1"),a("/eY4")),i=a("JWe/");const l={};let d=Object(c.a)(o=class extends n.Component{constructor(t){super(t),this.state=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},l),this.loadWorkouts()}loadWorkouts(){const{workoutStore:t}=this.props.stores;t.load()}render(){const{workoutStore:t,userStore:e}=this.props.stores,{workouts:a}=t;return Object(n.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 60px;"},Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12"},Object(n.h)("a",{class:"btn btn-primary btn-sm float-right",href:"/workouts/edit/new"},Object(n.h)("i",{class:"fas fa-plus"})," Legg til treningstur")),Object(n.h)("div",{class:"col-12"},Object(n.h)("h5",null,"Treningsturene - ",a.length," stk"),a&&a.map(t=>Object(n.h)(i.a,{stores:this.props.stores,workout:t}))),Object(n.h)("div",{class:"col-12"},Object(n.h)("a",{class:"btn btn-primary btn-sm mt-5 float-right",href:"/workouts/edit/new"},Object(n.h)("i",{class:"fas fa-plus"})," Legg til treningstur"))))}})||o;e.default=d},"JWe/":function(t,e,a){"use strict";function s(t){switch(t.type){case 1:return"border-primary";case 2:return"border-danger";case 3:return"border-success"}}function r(t){switch(t.type){case 1:return"fas fa-running";case 2:return"fas fa-flag-checkered";case 3:return"fas fa-hiking"}}var o,n=a("hosL"),c=a("Utv1"),i=a("/eY4"),l=a("UJvz");let d=Object(i.a)(o=class extends n.Component{constructor(...t){super(...t),this.showModal=t=>{t.stopPropagation(),t.preventDefault();this.setState({displayModal:!0,currentImage:t.target.dataset.image,currentImageXXL:t.target.dataset.imagexxl,thumb:t.target.dataset.thumb,name:t.target.dataset.name,title:t.target.dataset.title,date:t.target.dataset.date})},this.closeModal=()=>{this.setState({displayModal:!1})},this.toggleDate=()=>{const{showDate:t}=this.state;this.setState({showDate:!t})}}render(){const{displayModal:t,currentImage:e,currentImageXXL:a,showDate:o,thumb:i,name:d,title:h,date:u}=this.state,{workout:m}=this.props,{userStore:b}=this.props.stores;return Object(n.h)("div",{class:"row mb-3"},Object(n.h)("div",{class:"col p-2"},t&&Object(n.h)(l.a,{close:this.closeModal,image:e,imagexxl:a,thumb:i,name:d,title:h,date:u}),Object(n.h)("div",{class:"col-12 col-sm-6 col-lg-2 d-flex mb-0 position-relative"},Object(n.h)("div",{class:"text-center border rounded-circle imageRounded "+s(m),style:(m.image?`background-image: url("${m.image.s3SmallLink}");`:"")+" border-width: 3px !important;"},!m.image&&Object(n.h)("i",{class:r(m)+" text-muted mt-3",style:"font-size: 40px;"})),Object(n.h)("div",{class:"flex-grow-1 pl-3",style:"line-height: 1.0em;"},Object(n.h)("a",{class:"stretched-link",href:"/workouts/"+m.id},Object(n.h)("h5",{class:"my-0"},m.name)),Object(n.h)("span",{class:"font-weight-light"},b.findTeam(m.team)),Object(n.h)("br",null),Object(n.h)("small",{class:"text-muted"},m.date&&Object(n.h)("small",{onClick:this.toggleDate},o?c.a.formatDate(m.date,{locale:"no-NB"}):c.a.formatDistance(m.date,new Date,{locale:"no-NB"}),Object(n.h)("br",null))),Object(n.h)("small",null,Object(n.h)("span",{class:"text-muted"},Object(n.h)("i",{class:"fas fa-tools"})," ",b.findEquipment(m.equipment)||m.equipment,Object(n.h)("i",{class:"fas fa-road ml-2"})," ",m.distanceKm,"km",Object(n.h)("i",{class:"fas fa-mountain ml-2"})," ",m.elevation,"m",m.dogs&&Object(n.h)("span",null,Object(n.h)("i",{class:"fas fa-dog ml-2"})," ",m.dogs.length)),Object(n.h)("i",null,m.url),Object(n.h)("br",null)))),Object(n.h)("div",{class:"container-fluid mt-1",style:"padding-left: 122px;"},Object(n.h)("div",{class:"row"},m.images&&m.images.map(t=>Object(n.h)("div",{class:"text-center border rounded imageRounded imageRoundedSmall",style:t?`background-image: url("${t.s3SmallLink}");`:"",onClick:this.showModal,"data-image":t.s3LargeLink,"data-imagexxl":t.s3XXLargeLink,"data-thumb":m.image&&m.image.s3SmallLink,"data-name":b.findTeam(m.team),"data-title":m.name,"data-date":m.date}," "))))))}})||o;e.a=d}}]);
//# sourceMappingURL=route-workouts.chunk.9a085.esm.js.map