(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{nKYJ:function(e,t,a){"use strict";function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.r(t);var r,l=a("hosL"),o=a("Gblv"),i=a("/eY4"),n=a("OhSV"),d=a("UJvz");var h,m=Object(i.a)(r=class extends l.Component{constructor(...e){super(...e),this.showModal=e=>{e.stopPropagation(),e.preventDefault();this.setState({displayModal:!0,currentImage:e.target.dataset.image,currentImageXXL:e.target.dataset.imagexxl,thumb:e.target.dataset.thumb,name:e.target.dataset.name,title:e.target.dataset.title,date:e.target.dataset.date})},this.closeModal=()=>{this.setState({displayModal:!1})},this.toggleDate=()=>{const{showDate:e}=this.state;this.setState({showDate:!e})}}render(){const{displayModal:e,currentImage:t,currentImageXXL:a,showDate:s,thumb:c,name:r,title:i,date:n}=this.state,{track:h}=this.props;return Object(l.h)("div",{class:"w-100 mb-3"},Object(l.h)("div",{class:"row"},e&&Object(l.h)(d.a,{close:this.closeModal,image:t,imagexxl:a,thumb:c,name:r,title:i,date:n}),Object(l.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 d-flex mb-0 position-relative"},Object(l.h)("div",{class:"text-center border rounded-circle imageRounded",style:h.image?`background-image: url("${h.image.s3SmallLink}");`:""},!h.image&&Object(l.h)("i",{class:"fas fa-map-marked text-muted mt-3",style:"font-size: 40px;"})),Object(l.h)("div",{class:"flex-grow-1 pl-3",style:"line-height: 1.2em;"},Object(l.h)("a",{class:"stretched-link",href:"/tracks/"+h.id},Object(l.h)("h5",{class:"mb-1",style:"line-height: 1.0em;"},h.name)),Object(l.h)("small",{class:"text-muted"},h.date&&Object(l.h)("small",{onClick:this.toggleDate},s?o.a.formatDate(h.date,{locale:"no-NB"}):o.a.formatDistance(h.date,new Date,{locale:"no-NB"}),Object(l.h)("br",null))),Object(l.h)("small",{class:"text-muted"},Object(l.h)("i",{class:"fas fa-road"})," ",h.distanceKm," km",Object(l.h)("i",{class:"fas fa-mountain ml-2"})," ",h.elevation," m",h.gpx&&Object(l.h)("i",{class:"fas fa-map-marked-alt ml-2"})))),Object(l.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 mt-1",style:"padding-left: 122px;"},Object(l.h)("div",{class:"row"},h.images&&h.images.map(e=>Object(l.h)("div",{class:"text-center border rounded imageRounded imageRoundedSmall",style:e?`background-image: url("${e.s3SmallLink}");`:"",onClick:this.showModal,"data-image":e.s3LargeLink,"data-imagexxl":e.s3XXLargeLink,"data-thumb":h.image&&h.image.s3SmallLink,"data-title":h.name,"data-date":h.date}," "))))))}})||r,g=a("ZOvn"),b=a.n(g);const f=b.a.marginTop(!1),p=b.a.marginBottom(),u={isLoading:!1};let O=Object(i.a)(h=class extends l.Component{constructor(e){super(e),this.state=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},u)}async loadTracks(){this.setState({isLoading:!0});const{trackStore:e}=this.props.stores;await e.load(),this.setState({isLoading:!1})}componentDidMount(){this.loadTracks()}render(){const{isLoading:e}=this.state,{trackStore:t,userStore:a}=this.props.stores,{tracks:s}=t;return Object(l.h)("div",{class:"container-fluid",style:`margin-bottom: ${p}; margin-top: ${f};`},Object(l.h)("div",{class:"row"},Object(l.h)("div",{class:"col-12"},Object(l.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(l.h)("h5",null,Object(l.h)(n.c,{id:"tracks.all-tracks",fields:{total:s.length}},"Treningsrundene dine - ",s.length," stk"))),Object(l.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0 clearfix mb-2"},Object(l.h)("a",{class:"btn btn-sm btn-primary float-right",href:"/tracks/edit/new"},Object(l.h)("i",{class:"fas fa-plus"})," ",Object(l.h)(n.c,{id:"tracks.add-new"},"Legg til runde"))),!e&&s&&0===s.length&&Object(l.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 text-muted"},Object(l.h)("div",{class:"text-center mb-5"},Object(l.h)("div",{class:"display-1"},Object(l.h)("i",{class:"fas fa-map-marked"})),Object(l.h)("h5",null,Object(l.h)(n.c,{id:"tracks.no-tracks-yet"},"Ingen runder er registrert ennå."))),Object(l.h)("p",{class:"text-center"},Object(l.h)("p",null,Object(l.h)(n.c,{id:"tracks.no-tracks-info-1"},"Du har mulighet til å laste opp GPX-filer fra rundene dine.")),Object(l.h)("p",null,Object(l.h)(n.c,{id:"tracks.no-tracks-info-2"},"Det finnes mange apper som lar deg lage GPX-filer, men vi anbefaler"),":"),"ViewRanger for ",Object(l.h)("a",{href:"https://apps.apple.com/gb/app/viewranger-hike-ride-or-walk/id404581674"},"iOS")," and  ",Object(l.h)("a",{href:"https://play.google.com/store/apps/details?id=com.augmentra.viewranger.android&hl=en"},"Android"),"."),Object(l.h)(n.c,{id:"tracks.howto-title"},"Slik kommer du i gang"),":",Object(l.h)("ol",null,Object(l.h)("li",null,Object(l.h)(n.c,{id:"tracks.howto-1"},'Trykk på knappen "Legg til runde" rett nedenfor.')))),s&&s.map(e=>Object(l.h)(m,{stores:this.props.stores,track:e})))))}})||h;t.default=O}}]);
//# sourceMappingURL=route-tracks.chunk.4516e.esm.js.map