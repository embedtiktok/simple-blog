(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+1Jk":function(e,t,r){"use strict";r.r(t),function(e){function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a,o=r("hosL"),l=r("Gblv"),c=r("/eY4"),i=r("JWe/"),h=r("3pQw"),u=r("xDik"),d=r("bbv7"),b=["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"],m={isLoading:!1},f=Object(c.a)(a=function(t){function r(e){var r;return(r=t.call(this,e)||this).state=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},m),r.loadAll(),r}var a,c;c=t,(a=r).prototype=Object.create(c.prototype),a.prototype.constructor=a,a.__proto__=c;var f=r.prototype;return f.loadAll=function(){return new Promise(function(e,t){var r,s,n;return s=(r=this.props.stores).appState,n=r.userStore,this.setState({isLoading:!0}),Promise.resolve(s.getFingerprint()).then(function(){try{return Promise.resolve(n.getInfo()).then(function(){try{return Promise.resolve(this.loadFeed()).then(function(){try{return Promise.resolve(this.loadWorkoutSummary()).then(function(){try{return this.setState({isLoading:!1}),e()}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)}.bind(this))},f.loadFeed=function(){return new Promise(function(e,t){return Promise.resolve(this.props.stores.userStore.getFeed()).then((function(){try{return e()}catch(e){return t(e)}}),t)}.bind(this))},f.loadWorkoutSummary=function(){return new Promise(function(e,t){return Promise.resolve(this.props.stores.userStore.getWorkoutSummary()).then((function(){try{return e()}catch(e){return t(e)}}),t)}.bind(this))},f.render=function(){var t=this,r=this.state.isLoading,s=this.props.stores.userStore,n=s.workouts,a=s.historyFeed,c=s.workoutSummary,m=s.graphWorkoutSummaryWeekDistanceCurrent,f=s.graphWorkoutSummaryWeekDistancePrev,p=s.graphWorkoutSummaryWeekElevationCurrent,g=s.graphWorkoutSummaryWeekElevationPrev;return Object(o.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 60px;"},Object(o.h)("div",{class:"row"},Object(o.h)("div",{class:"col-12 mb-4"})),Object(o.h)("div",{class:"row"},Object(o.h)("div",{class:"col-12 mb-4"},!r&&c&&0===c.length&&Object(o.h)("div",{class:"mb-5 py-3 border-top border-bottom"},Object(o.h)("div",{class:"text-center"},Object(o.h)("div",{class:"display-4"},Object(o.h)("i",{class:"fas fa-paw"})),Object(o.h)("h5",null,"Velkommen til The Musher."),Object(o.h)("p",null,"The Musher er en app som er kontinuerlig under utvikling. Alle innspill mottas med stor takk på Facebooksiden vår 😃"),Object(o.h)("p",null,"Fokus til appen er enkel registrering av hunder, team, treninger og hendelser rundt hundene. Når man har mange hunder så er det ofte vanskelig å holde styr på løpetid, vaksiner, treninger, skader, vetrinærbesøk, chiplister, osv."),Object(o.h)("p",null,"Alle data lagres sentralt i skyen hos AWS (Amazon Web Services) og det vil derfor være mulig å bruke appen fra flere telefoner og datamaskiner samtidig. Dette kan være fint dersom det er flere som trener og følger opp hundene.")),Object(o.h)("h5",null,"Slik kommer du i gang:"),Object(o.h)("ol",null,Object(o.h)("li",null,Object(o.h)("a",{class:"btn btn-info mt-3",href:"/teams/"},"Legg inn teamene dine.")),Object(o.h)("li",null,Object(o.h)("a",{class:"btn btn-info mt-3",href:"/dogs/"},"Legg inn hundene dine.")),Object(o.h)("li",null,Object(o.h)("a",{class:"btn btn-info mt-3",href:"/tracks/"},"Legg inn rundene dine.")),Object(o.h)("li",null,Object(o.h)("a",{class:"btn btn-info mt-3",href:"/workouts/"},"Så kan du begynne å registrere treningene.")))),c&&c.length>0&&Object(o.h)(e,null,Object(o.h)("h5",null,"Trenings statistikk"),Object(o.h)("div",{class:"w-100 mt-3 mb-4"},Object(o.h)("small",{class:"mb-4"},Object(o.h)("small",null,Object(o.h)("table",{class:"table table-sm font-weigth-lighter border-bottom"},Object(o.h)("thead",null,Object(o.h)("tr",null,Object(o.h)("th",{style:"padding: .2rem;"},"Mnd"),l.a.range(1,12).map((function(e){return Object(o.h)("th",{class:"text-right",style:"padding: .2rem;"},b[e-1])})))),Object(o.h)("tbody",null,Object(o.h)("tr",null,Object(o.h)("th",{scope:"row",style:"padding: .2rem;"},"2019"),l.a.range(1,12).map((function(t){return Object(o.h)(e,null,Object(o.h)("td",{class:"text-right",style:"padding: .2rem;"},s.findWorkoutSummaryMonth(2019,t),Object(o.h)("br",null),s.findWorkoutSummaryMonth(2019,t,"elevation"),Object(o.h)("br",null)))})),Object(o.h)("td",{class:"text-muted",style:"padding: .2rem;"},Object(o.h)("nobr",null,Object(o.h)("i",{class:"fas fa-road"})," km"),Object(o.h)("br",null),Object(o.h)("nobr",null,Object(o.h)("i",{class:"fas fa-mountain"})," m"),Object(o.h)("br",null))),Object(o.h)("tr",null,Object(o.h)("th",{scope:"row",style:"padding: .2rem;"},"2020"),l.a.range(1,12).map((function(t){return Object(o.h)(e,null,Object(o.h)("td",{class:"text-right",style:"padding: .2rem;"},s.findWorkoutSummaryMonth(2020,t),Object(o.h)("br",null),s.findWorkoutSummaryMonth(2020,t,"elevation"),Object(o.h)("br",null)))})),Object(o.h)("td",{class:"text-muted",style:"padding: .2rem;"},Object(o.h)("nobr",null,Object(o.h)("i",{class:"fas fa-road"})," km"),Object(o.h)("br",null),Object(o.h)("nobr",null,Object(o.h)("i",{class:"fas fa-mountain"})," m"),Object(o.h)("br",null))))))),Object(o.h)(d.a,{stores:this.props.stores,data:m,dataB:f,data2:p,data2B:g,legend:"2020 Distanse",legendB:"2019 Distanse",legend2:"2020 Høydemeter",legend2B:"2019 Høydemeter",width:500,height:150,yMin:0,y2Min:0,showYTicks:1,yTicksPostfix:"km",showY2Ticks:1,y2TicksPostfix:"m",unit:"km",showXTicks:1}))))),Object(o.h)("div",{class:"row"},Object(o.h)("div",{class:"col-12 mb-4"},Object(o.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(o.h)("h5",null,"Siste fra hundene")),!r&&a&&0===a.length&&Object(o.h)("div",{class:"mb-5 py-3 text-center border-top border-bottom text-muted"},Object(o.h)("div",{class:"display-4"},Object(o.h)("i",{class:"fas fa-dog"})),Object(o.h)("h5",null,"Ingen hendelser fra hundene."),"Det er fint å legge inn hendelser og bilder av hundene i loggen.",Object(o.h)("br",null),Object(o.h)("a",{class:"btn btn-info mt-3",href:"/dogs/"},Object(o.h)("i",{class:"fas fa-dog"})," Legg til logg på hundene")),a&&a.map((function(e){return Object(o.h)(u.a,{stores:t.props.stores,line:e})})))),Object(o.h)("div",{class:"row"},n&&n.length>0&&Object(o.h)("div",{class:"col-12 mb-4"},Object(o.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(o.h)("h5",null,"Siste treningsturer - ",n.length," stk")),n&&n.map((function(e){return Object(o.h)(i.a,{stores:t.props.stores,workout:e})})))),Object(o.h)("div",{class:"row"},c&&c.length>0&&Object(o.h)("div",{class:"col-12 mb-4"},Object(o.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(o.h)("h5",{class:"mt-4"},"Treningsoversikt")),c&&c.map((function(e){return Object(o.h)(h.a,{stores:t.props.stores,summary:e})})))))},r}(o.Component))||a;t.default=f}.call(this,r("hosL").Fragment)},"3pQw":function(e,t,r){"use strict";var s,n=r("hosL"),a=r("Gblv"),o=r("/eY4"),l=Object(o.a)(s=function(e){function t(){return e.apply(this,arguments)||this}var r,s;return s=e,(r=t).prototype=Object.create(s.prototype),r.prototype.constructor=r,r.__proto__=s,t.prototype.render=function(){var e=this.props.summary;return Object(n.h)("div",{class:"w-100 mb-3"},Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 d-flex mb-0 position-relative"},Object(n.h)("div",{class:"text-center border rounded-circle imageRounded"},Object(n.h)("span",{class:"text-muted mt-4",style:"font-size: 40px;"},e._id.week)),Object(n.h)("div",{class:"flex-grow-1 pl-3"},Object(n.h)("h5",{class:"my-0"},e._id.week," - ",e._id.year),Object(n.h)("small",{class:"text-muted"},Object(n.h)("i",{class:"fas fa-wave-square"})," ",e.count,Object(n.h)("i",{class:"fas fa-road ml-2"})," ",e.distanceKm,"km",Object(n.h)("i",{class:"fas fa-mountain ml-2"})," ",e.elevation,"m",Object(n.h)("i",{class:"fas fa-stopwatch ml-2"})," ",a.a.secToHms(e.duration),Object(n.h)("i",{class:"fas fa-tachometer-alt ml-2"})," ",e.speedAvg,"km/t")))))},t}(n.Component))||s;t.a=l},"JWe/":function(e,t,r){"use strict";function s(e){switch(e.type){case 1:return"border-primary";case 2:return"border-danger";case 3:return"border-success"}}function n(e){switch(e.type){case 1:return"fas fa-running";case 2:return"fas fa-flag-checkered";case 3:return"fas fa-hiking"}}var a,o=r("hosL"),l=r("Gblv"),c=r("/eY4"),i=r("UJvz"),h=Object(c.a)(a=function(e){function t(){for(var t,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))||this).showModal=function(e){e.stopPropagation(),e.preventDefault(),t.setState({displayModal:!0,currentImage:e.target.dataset.image,currentImageXXL:e.target.dataset.imagexxl,thumb:e.target.dataset.thumb,name:e.target.dataset.name,title:e.target.dataset.title,date:e.target.dataset.date})},t.closeModal=function(){t.setState({displayModal:!1})},t.toggleDate=function(){t.setState({showDate:!t.state.showDate})},t}var r,a;return a=e,(r=t).prototype=Object.create(a.prototype),r.prototype.constructor=r,r.__proto__=a,t.prototype.render=function(){var e=this,t=this.state,r=t.displayModal,a=t.currentImage,c=t.currentImageXXL,h=t.showDate,u=t.thumb,d=t.name,b=t.title,m=t.date,f=this.props.workout,p=this.props.stores.userStore;return Object(o.h)("div",{class:"w-100 mb-3"},Object(o.h)("div",{class:"row"},r&&Object(o.h)(i.a,{close:this.closeModal,image:a,imagexxl:c,thumb:u,name:d,title:b,date:m}),Object(o.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 d-flex mb-0 position-relative"},Object(o.h)("div",{class:"text-center border rounded-circle imageRounded "+s(f),style:(f.image?'background-image: url("'+f.image.s3SmallLink+'");':"")+" border-width: 3px !important;"},!f.image&&Object(o.h)("i",{class:n(f)+" text-muted mt-3",style:"font-size: 40px;"})),Object(o.h)("div",{class:"flex-grow-1 pl-3",style:"line-height: 1.0em;"},Object(o.h)("a",{class:"stretched-link",href:"/workouts/"+f.id},Object(o.h)("h5",{class:"my-0"},f.name)),Object(o.h)("span",{class:"font-weight-light"},p.findTeam(f.team)),Object(o.h)("br",null),Object(o.h)("small",{class:"text-muted"},f.date&&Object(o.h)("small",{onClick:this.toggleDate},h?l.a.formatDate(f.date,{locale:"no-NB"}):l.a.formatDistance(f.date,new Date,{locale:"no-NB"}),Object(o.h)("br",null))),Object(o.h)("small",null,Object(o.h)("span",{class:"text-muted"},Object(o.h)("i",{class:"fas fa-tools"})," ",p.findEquipment(f.equipment)||f.equipment,Object(o.h)("i",{class:"fas fa-road ml-2"})," ",f.distanceKm,"km",Object(o.h)("i",{class:"fas fa-mountain ml-2"})," ",f.elevation,"m",Object(o.h)("i",{class:"fas fa-tachometer-alt ml-2"})," ",l.a.format(f.speedAvg,1),"km/t",f.dogs&&Object(o.h)("span",null,Object(o.h)("i",{class:"fas fa-dog ml-2"})," ",f.dogs.length)),Object(o.h)("i",null,f.url),Object(o.h)("br",null)))),Object(o.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 mt-1",style:"padding-left: 122px;"},Object(o.h)("div",{class:"row"},f.images&&f.images.map((function(t){return Object(o.h)("div",{class:"text-center border rounded imageRounded imageRoundedSmall",style:t?'background-image: url("'+t.s3SmallLink+'");':"",onClick:e.showModal,"data-image":t.s3LargeLink,"data-imagexxl":t.s3XXLargeLink,"data-thumb":f.image&&f.image.s3SmallLink,"data-name":p.findTeam(f.team),"data-title":f.name,"data-date":f.date}," ")}))))))},t}(o.Component))||a;t.a=h}}]);
//# sourceMappingURL=route-home.chunk.c64e1.js.map