(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ztHd:function(e,t,c){"use strict";c.r(t),function(e){var s,a=c("hosL"),r=c("Gblv"),l=c("/eY4"),i=c("OhSV"),o=c("ZOvn"),n=c.n(o),h=c("tJLP"),d=c("Cjoz"),u=n.a.marginTop(!1),b=n.a.marginBottom(),m=Object(l.a)(s=function(t){function c(e){var c;return(c=t.call(this,e)||this).resetEmailMessage=function(){var e=c.props.stores.userStore;e.updateField("emailMessage",""),e.updateField("emailMessageIcon","")},c.resetEmailError=function(){var e=c.props.stores.userStore;e.updateField("emailError",""),e.updateField("emailErrorIcon","")},c.state={time:Date.now(),count:10},c}var s,l;l=t,(s=c).prototype=Object.create(l.prototype),s.prototype.constructor=s,s.__proto__=l;var o=c.prototype;return o.componentDidMount=function(){this.props.verifyEmailToken&&this.props.stores.userStore.verifyEmail({token:this.props.verifyEmailToken})},o.render=function(){var t=this.props.stores.userStore,c=t.user,s=t.emailMessage,l=t.emailError,o=t.emailMessageIcon,n=t.emailErrorIcon,m=t.findTeams(c.teams),j=r.a.getApiServer(),O=r.a.getJwtToken();return Object(a.h)("div",{class:"container-fluid",style:"margin-bottom: "+b+"; margin-top: "+u+";"},Object(a.h)("div",{class:"row"},Object(a.h)("div",{class:"col-12"},Object(a.h)(h.a,{message:l,icon:n,remove:this.resetEmailError}),Object(a.h)(d.a,{message:s,icon:o,remove:this.resetEmailMessage}),Object(a.h)("h5",null,Object(a.h)(i.c,{id:"users.title"},"Din profil"))),Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(i.c,{id:"users.email"},"E-post")),Object(a.h)("div",{class:"col-8"},c.email),c.team&&Object(a.h)(e,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(i.c,{id:"users.main-team"},"Hovedteam")),Object(a.h)("div",{class:"col-8"},t.findTeam(c.team))),c.teams&&Object(a.h)(e,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(i.c,{id:"users.all-teams"},"Alle teamene")),Object(a.h)("div",{class:"col-8"},m.map((function(e){return Object(a.h)("div",null,e.name)})))),c.username&&Object(a.h)(e,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(i.c,{id:"users.username"},"Brukernavn")),Object(a.h)("div",{class:"col-8"},c.username)),c.firstname&&Object(a.h)(e,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(i.c,{id:"users.firstname"},"Fornavn")),Object(a.h)("div",{class:"col-8"},c.firstname)),c.lastname&&Object(a.h)(e,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(i.c,{id:"users.lastname"},"Etternavn")),Object(a.h)("div",{class:"col-8"},c.lastname)),c.cellphone&&Object(a.h)(e,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(i.c,{id:"users.cellphone"},"Mobil")),Object(a.h)("div",{class:"col-8"},c.cellphone)),c.url&&Object(a.h)(e,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(i.c,{id:"users.homepage"},"Hjemmeside")),Object(a.h)("div",{class:"col-8"},c.url)),c.facebook&&Object(a.h)(e,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(i.c,{id:"users.facebook"},"Facebook")),Object(a.h)("div",{class:"col-8"},c.facebook)),c.instagram&&Object(a.h)(e,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(i.c,{id:"users.instagram"},"Instagram")),Object(a.h)("div",{class:"col-8"},c.instagram)),c.snapchat&&Object(a.h)(e,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(i.c,{id:"users.snapchat"},"Snapchat")),Object(a.h)("div",{class:"col-8"},c.snapchat))),Object(a.h)("div",{class:"row border mt-5 pt-5"},Object(a.h)("div",{class:"col-12"},Object(a.h)("h3",null,"Strava")),c.strava&&c.strava.access_token?Object(a.h)(e,null,Object(a.h)("div",{class:"col-12"},Object(a.h)("h5",null,Object(a.h)(i.c,{id:"users.strava-connected"},"Connected to Strava!"))),Object(a.h)("div",{class:"col-4 text-right text-muted"},Object(a.h)(i.c,{id:"users.strava-id"},"id"),":"),Object(a.h)("div",{class:"col-8"}," ",c.strava.athlete.id),Object(a.h)("div",{class:"col-4 text-right text-muted"},Object(a.h)(i.c,{id:"users.strava-username"},"username"),":"),Object(a.h)("div",{class:"col-8"}," ",c.strava.athlete.username),Object(a.h)("div",{class:"col-4 text-right text-muted"},Object(a.h)(i.c,{id:"users.strava-profile"},"profile"),":"),Object(a.h)("div",{class:"col-8"}," ",Object(a.h)("img",{src:c.strava.athlete.profile})),Object(a.h)("div",{class:"col-12"},Object(a.h)("a",{href:j+"/api/strava/request-access?token="+O,native:!0},Object(a.h)(i.c,{id:"users.strava-reconnect"},"Reconnect to Strava")))):Object(a.h)(e,null,Object(a.h)("a",{href:j+"/api/strava/request-access?token="+O,native:!0},Object(a.h)(i.c,{id:"users.strava-connect"},"Connect to Strava")))))},c}(a.Component))||s;t.default=m}.call(this,c("hosL").Fragment)}}]);
//# sourceMappingURL=route-users.chunk.a7d11.js.map