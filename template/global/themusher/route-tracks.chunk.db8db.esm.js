(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{nKYJ:function(e,t,a){"use strict";function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.r(t);var l,o=a("hosL"),c=a("Utv1"),i=a("/eY4"),n=a("UJvz");var d,m=Object(i.a)(l=class extends o.Component{constructor(...e){super(...e),this.showModal=e=>{e.stopPropagation(),e.preventDefault();this.setState({displayModal:!0,currentImage:e.target.dataset.image,currentImageXXL:e.target.dataset.imagexxl,thumb:e.target.dataset.thumb,name:e.target.dataset.name,title:e.target.dataset.title,date:e.target.dataset.date})},this.closeModal=()=>{this.setState({displayModal:!1})},this.toggleDate=()=>{const{showDate:e}=this.state;this.setState({showDate:!e})}}render(){const{displayModal:e,currentImage:t,currentImageXXL:a,showDate:s,thumb:r,name:l,title:i,date:d}=this.state,{track:m}=this.props;return Object(o.h)("div",{class:"w-100 mb-3"},Object(o.h)("div",{class:"row"},e&&Object(o.h)(n.a,{close:this.closeModal,image:t,imagexxl:a,thumb:r,name:l,title:i,date:d}),Object(o.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 d-flex mb-0 position-relative"},Object(o.h)("div",{class:"text-center border rounded-circle imageRounded",style:m.image?`background-image: url("${m.image.s3SmallLink}");`:""},!m.image&&Object(o.h)("i",{class:"fas fa-map-marked text-muted mt-3",style:"font-size: 40px;"})),Object(o.h)("div",{class:"flex-grow-1 pl-3",style:"line-height: 1.0em;"},Object(o.h)("a",{class:"stretched-link",href:"/tracks/"+m.id},Object(o.h)("h5",null,m.name)),Object(o.h)("small",{class:"text-muted"},m.date&&Object(o.h)("small",{onClick:this.toggleDate},s?c.a.formatDate(m.date,{locale:"no-NB"}):c.a.formatDistance(m.date,new Date,{locale:"no-NB"}),Object(o.h)("br",null))),Object(o.h)("small",{class:"text-muted"},Object(o.h)("i",{class:"fas fa-road"})," ",m.distanceKm," km",Object(o.h)("i",{class:"fas fa-mountain ml-2"})," ",m.elevation," m"))),Object(o.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 mt-1",style:"padding-left: 122px;"},Object(o.h)("div",{class:"row"},m.images&&m.images.map(e=>Object(o.h)("div",{class:"text-center border rounded imageRounded imageRoundedSmall",style:e?`background-image: url("${e.s3SmallLink}");`:"",onClick:this.showModal,"data-image":e.s3LargeLink,"data-imagexxl":e.s3XXLargeLink,"data-thumb":m.image&&m.image.s3SmallLink,"data-title":m.name,"data-date":m.date}," "))))))}})||l;const h={isLoading:!1};let g=Object(i.a)(d=class extends o.Component{constructor(e){super(e),this.state=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},h),this.loadTracks()}async loadTracks(){this.setState({isLoading:!0});const{trackStore:e}=this.props.stores;await e.load(),this.setState({isLoading:!1})}render(){const{isLoading:e}=this.state,{trackStore:t,userStore:a}=this.props.stores,{tracks:s}=t;return Object(o.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 60px;"},Object(o.h)("div",{class:"row"},Object(o.h)("div",{class:"col-12"},Object(o.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(o.h)("h5",null,"Treningsrundene dine - ",s.length," stk")),!e&&s&&0===s.length&&Object(o.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 text-muted"},Object(o.h)("div",{class:"text-center mb-5"},Object(o.h)("div",{class:"display-1"},Object(o.h)("i",{class:"fas fa-map-marked"})),Object(o.h)("h5",null,"Ingen runder er registrert ennå.")),Object(o.h)("p",{class:"text-center"},"Du har mulighet til å laste opp GPX-filer fra rundene dine. Det finnes mange apper som lar deg lage GPX-filer, men vi anbefaler ViewRanger for ",Object(o.h)("a",{href:"https://apps.apple.com/gb/app/viewranger-hike-ride-or-walk/id404581674"},"iOS")," og  ",Object(o.h)("a",{href:"https://play.google.com/store/apps/details?id=com.augmentra.viewranger.android&hl=en"},"Android"),"."),"Slik kommer du i gang:",Object(o.h)("ol",null,Object(o.h)("li",null,'Trykk på knappen "Legg til runde" rett nedenfor.'))),s&&s.map(e=>Object(o.h)(m,{stores:this.props.stores,track:e})),Object(o.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(o.h)("a",{class:"btn btn-primary mt-5 float-right",href:"/tracks/edit/new"},Object(o.h)("i",{class:"fas fa-plus"})," Legg til runde")))))}})||d;t.default=g}}]);
//# sourceMappingURL=route-tracks.chunk.db8db.esm.js.map