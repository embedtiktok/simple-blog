(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+1Jk":function(e,t,s){"use strict";s.r(t),function(e){function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function l(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var r,n=s("hosL"),o=s("Utv1"),i=s("/eY4"),c=s("JWe/"),h=s("3pQw"),d=s("xDik"),m=s("bbv7"),b=s("2X7c");const u=["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"],g={isLoading:!1};let f=Object(i.a)(r=class extends n.Component{constructor(e){var t;super(e),t=this,this.loadDogs=async function(){t.setState({isLoading:!0});const{dogStore:e}=t.props.stores,{currentTeam:s}=e;await e.load({query:{team:s},addData:["workoutSummary"]}),t.setState({isLoading:!1})},this.state=function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){l(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},g),this.loadAll()}async loadAll(){const{appState:e,userStore:t}=this.props.stores;this.setState({isLoading:!0}),await e.getFingerprint(),await t.getInfo(),await this.loadFeed(),await this.loadWorkoutSummary(),await this.loadDogs(),this.setState({isLoading:!1})}async loadFeed(){const{userStore:e}=this.props.stores;await e.getFeed()}async loadWorkoutSummary(){const{userStore:e}=this.props.stores;await e.getWorkoutSummary()}render(){const{isLoading:t}=this.state,{userStore:s}=this.props.stores,{workouts:a,historyFeed:l,workoutSummary:r,graphWorkoutSummaryWeekDistanceCurrent:i,graphWorkoutSummaryWeekDistancePrev:g,graphWorkoutSummaryWeekElevationCurrent:f,graphWorkoutSummaryWeekElevationPrev:O,teams:j,dogs:p,tracks:v}=s,k=j.length,y=p.length,w=v.length;return Object(n.h)("div",{class:"container-fluid",style:"margin-bottom: 100px; margin-top: 60px;"},Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12 mb-4"})),Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12 mb-4"},!t&&r&&0===r.length&&Object(n.h)("div",{class:"mb-5 py-3 border-top border-bottom"},Object(n.h)("div",{class:"text-center"},Object(n.h)("div",{class:"display-4"},Object(n.h)("i",{class:"fas fa-paw"})),Object(n.h)("h5",null,"Velkommen til The Musher."),Object(n.h)("p",null,"The Musher er en app som er kontinuerlig under utvikling. Alle ideer/innspill/kommentarer mottas med stor takk på Facebooksiden vår 😃"),Object(n.h)("p",null,"Fokus til appen er enkel registrering av hunder, team, treninger og hendelser rundt hundene. Når man har mange hunder så er det ofte vanskelig å holde styr på løpetid, vaksiner, treninger, skader, vetrinærbesøk, chiplister, osv."),Object(n.h)("p",null,"Alle data lagres sentralt i skyen hos AWS (Amazon Web Services) og det vil derfor være mulig å bruke appen fra flere telefoner og datamaskiner samtidig. Dette kan være fint dersom det er flere som trener og følger opp hundene.")),Object(n.h)("h5",null,"Slik kommer du i gang:"),Object(n.h)("ol",null,k<1&&Object(n.h)("li",null,Object(n.h)("a",{class:"btn btn-info mt-3",href:"/teams/"},"Legg inn teamene dine.")),y<1&&Object(n.h)("li",null,Object(n.h)("a",{class:"btn btn-info mt-3",href:"/dogs/"},"Legg inn hundene dine.")),w<1&&Object(n.h)("li",null,Object(n.h)("a",{class:"btn btn-info mt-3",href:"/tracks/"},"Legg inn rundene dine.")),Object(n.h)("li",null,Object(n.h)("a",{class:"btn btn-info mt-3",href:"/workouts/"},"Begynn å registrere treningene.")))),r&&r.length>0&&Object(n.h)(e,null,Object(n.h)("h5",null,"Trenings statistikk"),Object(n.h)("div",{class:"w-100 mt-3 mb-4"},Object(n.h)("small",{class:"mb-4"},Object(n.h)("small",null,Object(n.h)("table",{class:"table table-sm font-weigth-lighter border-bottom"},Object(n.h)("thead",null,Object(n.h)("tr",null,Object(n.h)("th",{style:"padding: .2rem;"},"Mnd"),o.a.range(1,12).map(e=>Object(n.h)("th",{class:"text-right",style:"padding: .2rem;"},u[e-1])))),Object(n.h)("tbody",null,Object(n.h)("tr",null,Object(n.h)("th",{scope:"row",style:"padding: .2rem;"},"2019"),o.a.range(1,12).map(t=>Object(n.h)(e,null,Object(n.h)("td",{class:"text-right",style:"padding: .2rem;"},s.findWorkoutSummaryMonth(2019,t),Object(n.h)("br",null),s.findWorkoutSummaryMonth(2019,t,"elevation"),Object(n.h)("br",null)))),Object(n.h)("td",{class:"text-muted",style:"padding: .2rem;"},Object(n.h)("nobr",null,Object(n.h)("i",{class:"fas fa-road"})," km"),Object(n.h)("br",null),Object(n.h)("nobr",null,Object(n.h)("i",{class:"fas fa-mountain"})," m"),Object(n.h)("br",null))),Object(n.h)("tr",null,Object(n.h)("th",{scope:"row",style:"padding: .2rem;"},"2020"),o.a.range(1,12).map(t=>Object(n.h)(e,null,Object(n.h)("td",{class:"text-right",style:"padding: .2rem;"},s.findWorkoutSummaryMonth(2020,t),Object(n.h)("br",null),s.findWorkoutSummaryMonth(2020,t,"elevation"),Object(n.h)("br",null)))),Object(n.h)("td",{class:"text-muted",style:"padding: .2rem;"},Object(n.h)("nobr",null,Object(n.h)("i",{class:"fas fa-road"})," km"),Object(n.h)("br",null),Object(n.h)("nobr",null,Object(n.h)("i",{class:"fas fa-mountain"})," m"),Object(n.h)("br",null))))))),Object(n.h)(m.a,{stores:this.props.stores,width:500,height:150,showXTicks:1,xTicksVal:e=>"uke "+e,paddingTop:30,lineFromXzero:!0,lineFromXmax:!0,dataLeft:[i,g],legendLeft:["2020 Distanse","2019 Distanse"],showYTicksLeft:1,yTicksLeftPostfix:"km",unitLeft:["km","km"],avgWindowLeft:[0,0],smoothLeft:[1,1],dataRight:[f,O],legendRight:["2020 Høydemeter","2019 Høydemeter"],showYTicksRight:1,yTicksRightPostfix:"m",unitRight:["m","m"],avgWindowRight:[0,0],smoothRight:[1,1]}))),!t&&r&&r.length<3&&Object(n.h)("div",{class:"mb-5 py-3 border-top border-bottom"},Object(n.h)("div",{class:"text-left",style:"line-height: 1.0em;"},Object(n.h)("div",{class:"display-4 float-left text-warning mr-3"},Object(n.h)("i",{class:"fas fa-paw"})),Object(n.h)("small",null,"Foreløpig er det litt lite data for å kunne vise noen fine grafer. Etterhvert som du legger inn flere treninger så vil dette bli en fin tabell og graf som viser progresjonen din."))))),Object(n.h)("div",{class:"row"},Object(n.h)("div",{class:"col-12 mb-4"},Object(n.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(n.h)("span",{class:"float-right"},Object(n.h)(b.a,{stores:this.props.stores,dog:{}})),Object(n.h)("h5",null,"Siste fra hundene")),!t&&l&&0===l.length&&Object(n.h)("div",{class:"mb-5 py-3 text-center border-top border-bottom text-muted"},Object(n.h)("div",{class:"display-4"},Object(n.h)("i",{class:"fas fa-dog"})),Object(n.h)("h5",null,"Ingen hendelser fra hundene."),"Det er fint å legge inn hendelser (løpetid, skader, vaksinering, vetrinærbesøk, mm) og bilder av hundene i loggen.",Object(n.h)("br",null),Object(n.h)("br",null),"På denne måten så vil hele teamet ditt se hva som skjer med hundene og hva som trengs å følges opp. Dette er en slags ",Object(n.h)("strike",null,"Face"),"Dogbook for hundene deres.",Object(n.h)("br",null),Object(n.h)("a",{class:"btn btn-info mt-3",href:"/dogs/"},Object(n.h)("i",{class:"fas fa-dog"})," Legg til logg på hundene")),l&&l.map(e=>Object(n.h)(d.a,{stores:this.props.stores,line:e})))),Object(n.h)("div",{class:"row"},a&&a.length>0&&Object(n.h)("div",{class:"col-12 mb-4"},Object(n.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(n.h)("h5",null,"Siste treningsturer - ",a.length," stk")),a&&a.map(e=>Object(n.h)(c.a,{stores:this.props.stores,workout:e})))),Object(n.h)("div",{class:"row"},r&&r.length>0&&Object(n.h)("div",{class:"col-12 mb-4"},Object(n.h)("div",{class:"col-12 offset-0 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 px-0"},Object(n.h)("h5",{class:"mt-4"},"Treningsoversikt")),r&&r.map(e=>Object(n.h)(h.a,{stores:this.props.stores,summary:e})))))}})||r;t.default=f}.call(this,s("hosL").Fragment)},"3pQw":function(e,t,s){"use strict";var a,l=s("hosL"),r=s("Utv1"),n=s("/eY4");let o=Object(n.a)(a=class extends l.Component{render(){const{summary:e}=this.props;return Object(l.h)("div",{class:"w-100 mb-3"},Object(l.h)("div",{class:"row"},Object(l.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 d-flex mb-0 position-relative"},Object(l.h)("div",{class:"text-center border rounded-circle imageRounded"},Object(l.h)("div",{class:"text-muted mt-2",style:"font-size: 40px; line-height: 1;"},e._id.week),Object(l.h)("div",{class:"text-muted",style:"font-size: 10px; line-height: 0.8em;"},e._id.year)),Object(l.h)("div",{class:"flex-grow-1 pl-3"},Object(l.h)("h5",{class:"my-0"},e._id.week," - ",e._id.year),Object(l.h)("small",{class:"text-muted"},Object(l.h)("i",{class:"fas fa-wave-square"})," ",e.count,Object(l.h)("i",{class:"fas fa-road ml-2"})," ",e.distanceKm,"km",Object(l.h)("i",{class:"fas fa-mountain ml-2"})," ",e.elevation,"m",Object(l.h)("i",{class:"fas fa-stopwatch ml-2"})," ",r.a.secToHms(e.duration),Object(l.h)("i",{class:"fas fa-tachometer-alt ml-2"})," ",e.speedAvg,"km/t")))))}})||a;t.a=o},"JWe/":function(e,t,s){"use strict";function a(e){switch(e.type){case 1:return"border-primary";case 2:return"border-danger";case 3:return"border-success";default:return"border-warning"}}function l(e){switch(e.type){case 1:return"fas fa-running";case 2:return"fas fa-flag-checkered";case 3:default:return"fas fa-hiking"}}var r,n=s("hosL"),o=s("Utv1"),i=s("/eY4"),c=s("UJvz");let h=Object(i.a)(r=class extends n.Component{constructor(...e){super(...e),this.showModal=e=>{e.stopPropagation(),e.preventDefault();this.setState({displayModal:!0,currentImage:e.target.dataset.image,currentImageXXL:e.target.dataset.imagexxl,thumb:e.target.dataset.thumb,name:e.target.dataset.name,title:e.target.dataset.title,date:e.target.dataset.date})},this.closeModal=()=>{this.setState({displayModal:!1})},this.toggleDate=()=>{const{showDate:e}=this.state;this.setState({showDate:!e})}}render(){const{displayModal:e,currentImage:t,currentImageXXL:s,showDate:r,thumb:i,name:h,title:d,date:m}=this.state,{workout:b}=this.props,{userStore:u}=this.props.stores;return Object(n.h)("div",{class:"w-100 mb-3"},Object(n.h)("div",{class:"row"},e&&Object(n.h)(c.a,{close:this.closeModal,image:t,imagexxl:s,thumb:i,name:h,title:d,date:m}),Object(n.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 d-flex mb-0 position-relative"},Object(n.h)("div",{class:"text-center border rounded-circle imageRounded "+a(b),style:(b.image?`background-image: url("${b.image.s3SmallLink}");`:"")+" border-width: 3px !important;"},!b.image&&Object(n.h)("i",{class:l(b)+" text-muted mt-3",style:"font-size: 40px;"})),Object(n.h)("div",{class:"flex-grow-1 pl-3",style:"line-height: 1.0em;"},Object(n.h)("a",{class:"stretched-link",href:"/workouts/"+b.id},Object(n.h)("h5",{class:"my-0"},b.name)),Object(n.h)("span",{class:"font-weight-light"},u.findTeam(b.team)),Object(n.h)("br",null),Object(n.h)("small",{class:"text-muted"},b.date&&Object(n.h)("small",{onClick:this.toggleDate},r?o.a.formatDate(b.date,{locale:"no-NB"}):o.a.formatDistance(b.date,new Date,{locale:"no-NB"}),Object(n.h)("br",null))),Object(n.h)("small",null,Object(n.h)("span",{class:"text-muted"},Object(n.h)("i",{class:"fas fa-tools"})," ",u.findEquipment(b.equipment)||b.equipment,Object(n.h)("i",{class:"fas fa-road ml-2"})," ",b.distanceKm,"km",Object(n.h)("i",{class:"fas fa-mountain ml-2"})," ",b.elevation,"m",Object(n.h)("i",{class:"fas fa-tachometer-alt ml-2"})," ",o.a.format(b.speedAvg,1),"km/t",b.dogs&&Object(n.h)("span",null,Object(n.h)("i",{class:"fas fa-dog ml-2"})," ",b.dogs.length)),Object(n.h)("i",null,b.url),Object(n.h)("br",null)))),Object(n.h)("div",{class:"col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3 mt-1",style:"padding-left: 122px;"},Object(n.h)("div",{class:"row"},b.images&&b.images.map(e=>Object(n.h)("div",{class:"text-center border rounded imageRounded imageRoundedSmall",style:e?`background-image: url("${e.s3SmallLink}");`:"",onClick:this.showModal,"data-image":e.s3LargeLink,"data-imagexxl":e.s3XXLargeLink,"data-thumb":b.image&&b.image.s3SmallLink,"data-name":u.findTeam(b.team),"data-title":b.name,"data-date":b.date}," "))))))}})||r;t.a=h}}]);
//# sourceMappingURL=route-home.chunk.e48e9.esm.js.map