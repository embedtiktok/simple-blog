(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{B7Gj:function(e,t,s){"use strict";function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.r(t);var n,l=s("hosL"),c=(s("Gblv"),s("/eY4")),o=s("JWe/");const i={isLoading:!1};let d=Object(c.a)(n=class extends l.Component{constructor(e){super(e),this.state=function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},i),this.loadWorkouts()}async loadWorkouts(){this.setState({isLoading:!0});const{workoutStore:e}=this.props.stores;await e.load(),this.setState({isLoading:!1})}render(){const{isLoading:e}=this.state,{trackStore:t,workoutStore:s,userStore:a,dogStore:r}=this.props.stores,{message:n}=this.props,{workouts:c}=s,{tracks:i}=t,{dogs:d}=r;return Object(l.h)("div",{class:"container-fluid",style:"margin-bottom: 200px; margin-top: 60px;"},n&&Object(l.h)("div",{class:"alert alert-success mb-3",role:"alert"},Object(l.h)("i",{class:"fas fa-check"})," ",n),Object(l.h)("div",{class:"row"},Object(l.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3"},Object(l.h)("a",{class:"btn btn-primary btn-sm float-right",href:"/workouts/edit/new"},Object(l.h)("i",{class:"fas fa-plus"})," Legg til treningstur")),Object(l.h)("div",{class:"col-12"},Object(l.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(l.h)("h5",null,"Treningsturene - ",c.length," stk")),!e&&c&&0===c.length&&Object(l.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 text-muted"},d&&0===d.length&&Object(l.h)("div",{class:"mb-5 py-3 text-center border-top border-bottom"},Object(l.h)("div",{class:"display-4"},Object(l.h)("i",{class:"fas fa-dog"})),Object(l.h)("h5",null,"Ingen hunder er registert."),"Det er lurt å legge inn hunder før du registrerer en treningstur.",Object(l.h)("br",null),Object(l.h)("a",{class:"btn btn-info mt-3",href:"/dogs/edit/new"},Object(l.h)("i",{class:"fas fa-dog"})," Legg til hund")),i&&0===i.length&&Object(l.h)("div",{class:"mb-5 py-3 text-center border-top border-bottom"},Object(l.h)("div",{class:"display-4"},Object(l.h)("i",{class:"fas fa-map-marked"})),Object(l.h)("h5",null,"Ingen runder er registert."),"Det er lurt å legge inn runden før du registrerer en treningstur. Da får du automatisk fylt ut distanse og høydemeter.",Object(l.h)("br",null),"Dersom du ikke har GPX-filen fra denne runden, så kan du likevel registrere treningen.",Object(l.h)("br",null),Object(l.h)("a",{class:"btn btn-info mt-3",href:"/tracks/edit/new"},Object(l.h)("i",{class:"fas fa-map-marked"})," Legg til runde")),Object(l.h)("div",{class:"text-center mb-5"},Object(l.h)("div",{class:"display-1"},Object(l.h)("i",{class:"fas fa-running"})),Object(l.h)("h5",null,"Ingen treningsturer er registrert ennå.")),Object(l.h)("p",{class:"text-center"},"Tracking i appen er ikke helt klart ennå pga noen tekniske begrensninger i Apple iOS. Når jeg får tak i en Android telefon skal jeg får satt opp denne funksjonen slik at den kan brukes der."),Object(l.h)("p",{class:"text-center"},"Kart over ruten du har kjørt legges inn som GPX under runder."),"Slik kommer du i gang:",Object(l.h)("ol",null,Object(l.h)("li",null,'Trykk på knappen "Legg til treningstur" oppe til høyre.'))),c&&c.map(e=>Object(l.h)(o.a,{stores:this.props.stores,workout:e})))))}})||n;t.default=d},"JWe/":function(e,t,s){"use strict";function a(e){switch(e.type){case 1:return"border-primary";case 2:return"border-danger";case 3:return"border-success"}}function r(e){switch(e.type){case 1:return"fas fa-running";case 2:return"fas fa-flag-checkered";case 3:return"fas fa-hiking"}}var n,l=s("hosL"),c=s("Gblv"),o=s("/eY4"),i=s("UJvz");let d=Object(o.a)(n=class extends l.Component{constructor(...e){super(...e),this.showModal=e=>{e.stopPropagation(),e.preventDefault();this.setState({displayModal:!0,currentImage:e.target.dataset.image,currentImageXXL:e.target.dataset.imagexxl,thumb:e.target.dataset.thumb,name:e.target.dataset.name,title:e.target.dataset.title,date:e.target.dataset.date})},this.closeModal=()=>{this.setState({displayModal:!1})},this.toggleDate=()=>{const{showDate:e}=this.state;this.setState({showDate:!e})}}render(){const{displayModal:e,currentImage:t,currentImageXXL:s,showDate:n,thumb:o,name:d,title:h,date:b}=this.state,{workout:g}=this.props,{userStore:u}=this.props.stores;return Object(l.h)("div",{class:"w-100 mb-3"},Object(l.h)("div",{class:"row"},e&&Object(l.h)(i.a,{close:this.closeModal,image:t,imagexxl:s,thumb:o,name:d,title:h,date:b}),Object(l.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 d-flex mb-0 position-relative"},Object(l.h)("div",{class:"text-center border rounded-circle imageRounded "+a(g),style:(g.image?`background-image: url("${g.image.s3SmallLink}");`:"")+" border-width: 3px !important;"},!g.image&&Object(l.h)("i",{class:r(g)+" text-muted mt-3",style:"font-size: 40px;"})),Object(l.h)("div",{class:"flex-grow-1 pl-3",style:"line-height: 1.0em;"},Object(l.h)("a",{class:"stretched-link",href:"/workouts/"+g.id},Object(l.h)("h5",{class:"my-0"},g.name)),Object(l.h)("span",{class:"font-weight-light"},u.findTeam(g.team)),Object(l.h)("br",null),Object(l.h)("small",{class:"text-muted"},g.date&&Object(l.h)("small",{onClick:this.toggleDate},n?c.a.formatDate(g.date,{locale:"no-NB"}):c.a.formatDistance(g.date,new Date,{locale:"no-NB"}),Object(l.h)("br",null))),Object(l.h)("small",null,Object(l.h)("span",{class:"text-muted"},Object(l.h)("i",{class:"fas fa-tools"})," ",u.findEquipment(g.equipment)||g.equipment,Object(l.h)("i",{class:"fas fa-road ml-2"})," ",g.distanceKm,"km",Object(l.h)("i",{class:"fas fa-mountain ml-2"})," ",g.elevation,"m",Object(l.h)("i",{class:"fas fa-tachometer-alt ml-2"})," ",c.a.format(g.speedAvg,1),"km/t",g.dogs&&Object(l.h)("span",null,Object(l.h)("i",{class:"fas fa-dog ml-2"})," ",g.dogs.length)),Object(l.h)("i",null,g.url),Object(l.h)("br",null)))),Object(l.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 mt-1",style:"padding-left: 122px;"},Object(l.h)("div",{class:"row"},g.images&&g.images.map(e=>Object(l.h)("div",{class:"text-center border rounded imageRounded imageRoundedSmall",style:e?`background-image: url("${e.s3SmallLink}");`:"",onClick:this.showModal,"data-image":e.s3LargeLink,"data-imagexxl":e.s3XXLargeLink,"data-thumb":g.image&&g.image.s3SmallLink,"data-name":u.findTeam(g.team),"data-title":g.name,"data-date":g.date}," "))))))}})||n;t.a=d}}]);
//# sourceMappingURL=route-workouts.chunk.1af7b.esm.js.map