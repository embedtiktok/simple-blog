(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ztHd:function(t,e,c){"use strict";c.r(e),function(t){var s,a=c("hosL"),l=c("Gblv"),i=c("/eY4"),r=c("OhSV"),h=c("ZOvn"),o=c.n(h),d=c("tJLP"),b=c("Cjoz");const n=o.a.marginTop(!1),m=o.a.marginBottom();let v=Object(i.a)(s=class extends a.Component{constructor(t){super(t),this.resetEmailMessage=()=>{const{userStore:t}=this.props.stores;t.updateField("emailMessage",""),t.updateField("emailMessageIcon","")},this.resetEmailError=()=>{const{userStore:t}=this.props.stores;t.updateField("emailError",""),t.updateField("emailErrorIcon","")},this.state={time:Date.now(),count:10}}componentDidMount(){const{userStore:t}=this.props.stores;this.props.verifyEmailToken&&t.verifyEmail({token:this.props.verifyEmailToken})}render(){const{userStore:e}=this.props.stores,{user:c,emailMessage:s,emailError:i,emailMessageIcon:h,emailErrorIcon:o,isAdmin:v}=e,{teams:j}=c,O=e.findTeams(j),u=l.a.getApiServer(),x=l.a.getJwtToken();return Object(a.h)("div",{class:"container-fluid",style:`margin-bottom: ${m}; margin-top: ${n};`},Object(a.h)("div",{class:"row"},Object(a.h)("div",{class:"col-12"},Object(a.h)(d.a,{message:i,icon:o,remove:this.resetEmailError}),Object(a.h)(b.a,{message:s,icon:h,remove:this.resetEmailMessage}),Object(a.h)("h5",null,Object(a.h)(r.c,{id:"users.title"},"Din profil"))),Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(r.c,{id:"users.email"},"E-post")),Object(a.h)("div",{class:"col-8"},c.email),c.team&&Object(a.h)(t,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(r.c,{id:"users.main-team"},"Hovedteam")),Object(a.h)("div",{class:"col-8"},e.findTeam(c.team))),c.teams&&Object(a.h)(t,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(r.c,{id:"users.all-teams"},"Alle teamene")),Object(a.h)("div",{class:"col-8"},O.map(t=>Object(a.h)("div",null,t.name)))),c.username&&Object(a.h)(t,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(r.c,{id:"users.username"},"Brukernavn")),Object(a.h)("div",{class:"col-8"},c.username)),c.firstname&&Object(a.h)(t,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(r.c,{id:"users.firstname"},"Fornavn")),Object(a.h)("div",{class:"col-8"},c.firstname)),c.lastname&&Object(a.h)(t,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(r.c,{id:"users.lastname"},"Etternavn")),Object(a.h)("div",{class:"col-8"},c.lastname)),c.cellphone&&Object(a.h)(t,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(r.c,{id:"users.cellphone"},"Mobil")),Object(a.h)("div",{class:"col-8"},c.cellphone)),c.url&&Object(a.h)(t,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(r.c,{id:"users.homepage"},"Hjemmeside")),Object(a.h)("div",{class:"col-8"},c.url)),c.facebook&&Object(a.h)(t,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(r.c,{id:"users.facebook"},"Facebook")),Object(a.h)("div",{class:"col-8"},c.facebook)),c.instagram&&Object(a.h)(t,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(r.c,{id:"users.instagram"},"Instagram")),Object(a.h)("div",{class:"col-8"},c.instagram)),c.snapchat&&Object(a.h)(t,null,Object(a.h)("div",{class:"col-4 text-muted text-right"},Object(a.h)(r.c,{id:"users.snapchat"},"Snapchat")),Object(a.h)("div",{class:"col-8"},c.snapchat))),v&&Object(a.h)("div",{class:"row border mt-5 pt-5"},Object(a.h)("div",{class:"col-12"},Object(a.h)("h3",null,"Strava")),c.strava&&c.strava.access_token?Object(a.h)(t,null,Object(a.h)("div",{class:"col-12"},Object(a.h)("h5",null,"Connected to Strava!")),Object(a.h)("div",{class:"col-4 text-right text-muted"},"id:"),Object(a.h)("div",{class:"col-8"}," ",c.strava.athlete.id),Object(a.h)("div",{class:"col-4 text-right text-muted"},"username:"),Object(a.h)("div",{class:"col-8"}," ",c.strava.athlete.username),Object(a.h)("div",{class:"col-4 text-right text-muted"},"resource_state:"),Object(a.h)("div",{class:"col-8"}," ",c.strava.athlete.resource_state),Object(a.h)("div",{class:"col-4 text-right text-muted"},"firstname:"),Object(a.h)("div",{class:"col-8"}," ",c.strava.athlete.firstname),Object(a.h)("div",{class:"col-4 text-right text-muted"},"lastname:"),Object(a.h)("div",{class:"col-8"}," ",c.strava.athlete.lastname),Object(a.h)("div",{class:"col-4 text-right text-muted"},"city:"),Object(a.h)("div",{class:"col-8"}," ",c.strava.athlete.city),Object(a.h)("div",{class:"col-4 text-right text-muted"},"state:"),Object(a.h)("div",{class:"col-8"}," ",c.strava.athlete.state),Object(a.h)("div",{class:"col-4 text-right text-muted"},"country:"),Object(a.h)("div",{class:"col-8"}," ",c.strava.athlete.country),Object(a.h)("div",{class:"col-4 text-right text-muted"},"sex:"),Object(a.h)("div",{class:"col-8"}," ",c.strava.athlete.sex),Object(a.h)("div",{class:"col-4 text-right text-muted"},"premium:"),Object(a.h)("div",{class:"col-8"}," ",c.strava.athlete.premium),Object(a.h)("div",{class:"col-4 text-right text-muted"},"summit:"),Object(a.h)("div",{class:"col-8"}," ",c.strava.athlete.summit),Object(a.h)("div",{class:"col-4 text-right text-muted"},"created_at:"),Object(a.h)("div",{class:"col-8"}," ",c.strava.athlete.created_at),Object(a.h)("div",{class:"col-4 text-right text-muted"},"updated_at:"),Object(a.h)("div",{class:"col-8"}," ",c.strava.athlete.updated_at),Object(a.h)("div",{class:"col-4 text-right text-muted"},"badge_type_id:"),Object(a.h)("div",{class:"col-8"}," ",c.strava.athlete.badge_type_id),Object(a.h)("div",{class:"col-4 text-right text-muted"},"profile_medium:"),Object(a.h)("div",{class:"col-8"}," ",Object(a.h)("img",{src:c.strava.athlete.profile_medium})),Object(a.h)("div",{class:"col-4 text-right text-muted"},"profile:"),Object(a.h)("div",{class:"col-8"}," ",Object(a.h)("img",{src:c.strava.athlete.profile})),Object(a.h)("div",{class:"col-4 text-right text-muted"},"friend:"),Object(a.h)("div",{class:"col-8"}," ",c.strava.athlete.friend),Object(a.h)("div",{class:"col-4 text-right text-muted"},"follower:"),Object(a.h)("div",{class:"col-8"}," ",c.strava.athlete.follower),Object(a.h)("div",{class:"col-12"},Object(a.h)("button",{class:"btn btn-primary",onclick:e.stravaGetActivityStream},"Get activity streams")),Object(a.h)("div",{class:"col-12"},Object(a.h)("a",{href:`${u}/api/strava/request-access?token=${x}`,native:!0},"Reconnect to Strava"))):Object(a.h)(t,null,Object(a.h)("a",{href:`${u}/api/strava/request-access?token=${x}`,native:!0},"Connect to Strava"))))}})||s;e.default=v}.call(this,c("hosL").Fragment)}}]);
//# sourceMappingURL=route-users.chunk.bc8e1.esm.js.map