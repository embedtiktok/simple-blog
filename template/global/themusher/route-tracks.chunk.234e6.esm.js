(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{nKYJ:function(t,e,a){"use strict";function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.r(e);var l,c=a("hosL"),o=a("Gblv"),i=a("/eY4"),n=a("UJvz");var d,m=Object(i.a)(l=class extends c.Component{constructor(...t){super(...t),this.showModal=t=>{t.stopPropagation(),t.preventDefault();this.setState({displayModal:!0,currentImage:t.target.dataset.image,currentImageXXL:t.target.dataset.imagexxl,thumb:t.target.dataset.thumb,name:t.target.dataset.name,title:t.target.dataset.title,date:t.target.dataset.date})},this.closeModal=()=>{this.setState({displayModal:!1})},this.toggleDate=()=>{const{showDate:t}=this.state;this.setState({showDate:!t})}}render(){const{displayModal:t,currentImage:e,currentImageXXL:a,showDate:s,thumb:r,name:l,title:i,date:d}=this.state,{track:m}=this.props;return Object(c.h)("div",{class:"w-100 mb-3"},Object(c.h)("div",{class:"row"},t&&Object(c.h)(n.a,{close:this.closeModal,image:e,imagexxl:a,thumb:r,name:l,title:i,date:d}),Object(c.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 d-flex mb-0 position-relative"},Object(c.h)("div",{class:"text-center border rounded-circle imageRounded",style:m.image?`background-image: url("${m.image.s3SmallLink}");`:""},!m.image&&Object(c.h)("i",{class:"fas fa-map-marked text-muted mt-3",style:"font-size: 40px;"})),Object(c.h)("div",{class:"flex-grow-1 pl-3",style:"line-height: 1.0em;"},Object(c.h)("a",{class:"stretched-link",href:"/tracks/"+m.id},Object(c.h)("h5",null,m.name)),Object(c.h)("small",{class:"text-muted"},m.date&&Object(c.h)("small",{onClick:this.toggleDate},s?o.a.formatDate(m.date,{locale:"no-NB"}):o.a.formatDistance(m.date,new Date,{locale:"no-NB"}),Object(c.h)("br",null))),Object(c.h)("small",{class:"text-muted"},Object(c.h)("i",{class:"fas fa-road"})," ",m.distanceKm," km",Object(c.h)("i",{class:"fas fa-mountain ml-2"})," ",m.elevation," m"))),Object(c.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 mt-1",style:"padding-left: 122px;"},Object(c.h)("div",{class:"row"},m.images&&m.images.map(t=>Object(c.h)("div",{class:"text-center border rounded imageRounded imageRoundedSmall",style:t?`background-image: url("${t.s3SmallLink}");`:"",onClick:this.showModal,"data-image":t.s3LargeLink,"data-imagexxl":t.s3XXLargeLink,"data-thumb":m.image&&m.image.s3SmallLink,"data-title":m.name,"data-date":m.date}," "))))))}})||l;const h={};let b=Object(i.a)(d=class extends c.Component{constructor(t){super(t),this.state=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},h),this.loadTracks()}loadTracks(){const{trackStore:t}=this.props.stores;t.load()}render(){const{trackStore:t,userStore:e}=this.props.stores,{tracks:a}=t;return Object(c.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 60px;"},Object(c.h)("div",{class:"row"},Object(c.h)("div",{class:"col-12"},Object(c.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(c.h)("h5",null,"Treningsrundene dine - ",a.length," stk")),a&&a.map(t=>Object(c.h)(m,{stores:this.props.stores,track:t})),Object(c.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(c.h)("a",{class:"btn btn-primary mt-5 float-right",href:"/tracks/edit/new"},Object(c.h)("i",{class:"fas fa-plus"})," Legg til runde")))))}})||d;e.default=b}}]);
//# sourceMappingURL=route-tracks.chunk.234e6.esm.js.map