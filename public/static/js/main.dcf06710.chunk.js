(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{107:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),c=n.n(r),o=n(11),s=n(22),i=n(62),u=n(5),l="[ui] Open modal",j="[ui] Close modal",d="[event] Set Active",b="[event] Logout event",m="[event] Add new",f="[event] Clear active event",p="[event] Event updated",O="[event] Event deleted",v="[event] Events loaded",h="[auth] Finish login state",x="[auth] Login",g="[auth] Logout",y={modalOpen:!1},N=n(54),w={events:[],activeEvent:null},k={checking:!0},E=Object(s.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!0});case j:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:t.payload});case m:return Object(u.a)(Object(u.a)({},e),{},{events:[].concat(Object(N.a)(e.events),[t.payload])});case f:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:null});case p:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case O:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case v:return Object(u.a)(Object(u.a)({},e),{},{events:Object(N.a)(t.payload)});case b:return Object(u.a)({},w);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(u.a)(Object(u.a)(Object(u.a)({},e),t.payload),{},{checking:!1});case h:return Object(u.a)(Object(u.a)({},e),{},{checking:!1});case g:return{checking:!1};default:return e}}}),S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,C=Object(s.e)(E,S(Object(s.a)(i.a))),D=n(35),T=n(9),P=n(12),I=n.n(P),A=n(21),_=n(18),L=n.n(_),R="https://mern-calendar-app-rv.herokuapp.com/api",G=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(R,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},F=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(R,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},V=n(17),q=n.n(V),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{end:q()(e.end).toDate(),start:q()(e.start).toDate()})}))},J=function(e){return{type:m,payload:e}},M=function(){return{type:f}},U=function(e){return{type:p,payload:e}},B=function(){return{type:O}},X=function(e){return{type:v,payload:e}},z=function(){return{type:h}},K=function(e){return{type:x,payload:e}},Q=function(){return function(e){localStorage.clear(),e({type:b}),e(W())}},W=function(){return{type:g}},Y=n(14),Z=n(25),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(Y.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(u.a)(Object(u.a)({},r),{},Object(Z.a)({},t.name,t.value)))};return[r,s,o]},ee=(n(74),n(2)),te=function(){var e=$({lEmail:"raquelv85@gmail.com",lPassword:"123456"}),t=Object(Y.a)(e,2),n=t[0],a=t[1],r=$({rName:"Raquel4",rEmail:"raquelv858@gmail.com",rPassword1:"123456",rPassword2:"123456"}),c=Object(Y.a)(r,2),s=c[0],i=c[1],u=Object(o.b)(),l=n.lEmail,j=n.lPassword,d=s.rName,b=s.rEmail,m=s.rPassword1,f=s.rPassword2;return Object(ee.jsx)("div",{className:"container login-container",children:Object(ee.jsxs)("div",{className:"row",children:[Object(ee.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(ee.jsx)("h3",{children:"Ingreso"}),Object(ee.jsxs)("form",{onSubmit:function(e){var t,n;e.preventDefault(),u((t=l,n=j,function(){var e=Object(A.a)(I.a.mark((function e(a){var r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("auth",{email:t,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),a(K({uid:c.uid,name:c.name}))):L.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:l,onChange:a})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:j,onChange:a})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(ee.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(ee.jsx)("h3",{children:"Registro"}),Object(ee.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),m!==f)return L.a.fire("Error","Las contrase\xf1as deben de ser iguales");var t,n,a;u((t=b,n=m,a=d,function(){var e=Object(A.a)(I.a.mark((function e(r){var c,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("auth/new",{name:a,email:t,password:n},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),r(K({uid:o.uid,name:o.name}))):L.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:d,onChange:i})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:b,onChange:i})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:m,onChange:i})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:f,onChange:i})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},ne=n(53),ae=(n(76),function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(ee.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(ee.jsx)("span",{className:"navbar-brand",children:e}),Object(ee.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t(Q())},children:[Object(ee.jsx)("i",{className:"fas fa-sign-out-alt"}),"Salir"]})]})}),re=(n(77),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),ce=function(e){var t=e.event,n=t.title,a=t.user;return Object(ee.jsxs)("div",{children:[Object(ee.jsx)("strong",{children:n}),Object(ee.jsxs)("span",{children:["-",a.name]})]})},oe=n(48),se=n.n(oe),ie=n(49),ue=n.n(ie),le=function(){return{type:l}},je={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};se.a.setAppElement("#root");var de=q()().minutes(0).seconds(0).add(1,"hours"),be=de.clone().add(1,"hours"),me={title:"",notes:"",start:de.toDate(),end:be.toDate()},fe=function(){var e=Object(o.c)((function(e){return e.ui.modalOpen})),t=Object(o.c)((function(e){return e.calendar})).activeEvent,n=Object(o.b)(),r=Object(a.useState)(de.toDate()),c=Object(Y.a)(r,2),s=c[0],i=c[1],l=Object(a.useState)(be.toDate()),d=Object(Y.a)(l,2),b=d[0],m=d[1],f=Object(a.useState)(!0),p=Object(Y.a)(f,2),O=p[0],v=p[1],h=Object(a.useState)(me),x=Object(Y.a)(h,2),g=x[0],y=x[1],N=g.notes,w=g.title,k=g.start,E=g.end;Object(a.useEffect)((function(){y(t||me)}),[t,y]);var S=function(e){var t=e.target;y(Object(u.a)(Object(u.a)({},g),{},Object(Z.a)({},t.name,t.value)))},C=function(){y(me),n({type:j}),n(M())};return Object(ee.jsxs)(se.a,{isOpen:e,onRequestClose:C,closeTimeoutMS:200,style:je,className:"modal",overlayClassName:"modal-fondo",children:[Object(ee.jsxs)("h1",{children:[" ",t?"Editar evento":"Nuevo evento"," "]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a=q()(k),r=q()(E);if(a.isSameOrAfter(r))L.a.fire("Error","La fecha fin debe ser mayor a la fecha de inicio","error");else{if(w.trim().length<2)return v(!1);var c;n(t?(c=g,function(){var e=Object(A.a)(I.a.mark((function e(t){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F("events/".concat(c.id),c,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(a=e.sent).ok?t(U(c)):L.a.fire("Error",a.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(A.a)(I.a.mark((function t(n,a){var r,c,o,s,i;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,F("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.evento.id,e.user={_id:c,name:o},n(J(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(g)),v(!0),C()}},children:[Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora inicio"}),Object(ee.jsx)(ue.a,{className:"form-control",onChange:function(e){i(e),y(Object(u.a)(Object(u.a)({},g),{},{start:e}))},value:s})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora fin"}),Object(ee.jsx)(ue.a,{className:"form-control",onChange:function(e){m(e),y(Object(u.a)(Object(u.a)({},g),{},{end:e}))},value:b,minDate:s})]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Titulo y notas"}),Object(ee.jsx)("input",{type:"text",className:"form-control ".concat(!O&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:w,onChange:S}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:N,onChange:S}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(ee.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(ee.jsx)("i",{className:"far fa-save"}),Object(ee.jsx)("span",{children:" Guardar"})]})]})]})},pe=function(e){return Object(ee.jsx)("button",{className:"btn btn-primary fab",onClick:function(){return e.action()},children:Object(ee.jsx)("i",{className:"fas fa-plus"})})},Oe=function(e){return Object(ee.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){return e.action()},children:[Object(ee.jsx)("i",{className:"fas fa-trash"}),Object(ee.jsx)("span",{children:"Borrar evento"})]})};q.a.locale("es");var ve=Object(ne.b)(q.a),he=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(Y.a)(s,2),u=i[0],l=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(A.a)(I.a.mark((function e(t){var n,a,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=H(a.eventos),t(X(r)),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(ee.jsxs)("div",{className:"calendar-screen",children:[Object(ee.jsx)(ae,{}),Object(ee.jsx)(ne.a,{localizer:ve,events:n,startAccessor:"start",endAccessor:"end",messages:re,onDoubleClickEvent:function(t){e(le())},selectable:!0,onSelectEvent:function(t){e({type:d,payload:t})},onView:function(e){l(e),localStorage.setItem("lastView",e)},eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},components:{event:ce},onSelectSlot:function(t){e(M())},view:u}),Object(ee.jsx)(pe,{action:function(){return e(le())}}),r&&Object(ee.jsx)(Oe,{action:function(){return e(function(){var e=Object(A.a)(I.a.mark((function e(n,a){var r,c,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a().calendar.activeEvent.id,e.prev=1,e.next=4,F("events/".concat(r),{},"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(o=e.sent).ok?n(B(t)):L.a.fire("Error",o.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}());var t}}),Object(ee.jsx)(fe,{})]})},xe=n(38),ge=function(e){var t=e.isAuthenticated,n=e.component,a=Object(xe.a)(e,["isAuthenticated","component"]);return Object(ee.jsx)(T.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(n,Object(u.a)({},e)):Object(ee.jsx)(T.a,{to:"/login"})}}))},ye=function(e){var t=e.isAuthenticated,n=e.component,a=Object(xe.a)(e,["isAuthenticated","component"]);return Object(ee.jsx)(T.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(T.a,{to:"/"}):Object(ee.jsx)(n,Object(u.a)({},e))}}))},Ne=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(A.a)(I.a.mark((function e(t){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:a.uid,name:a.name}))):t(z());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(ee.jsx)("h5",{children:"Espere..."}):Object(ee.jsx)(D.a,{children:Object(ee.jsx)("div",{children:Object(ee.jsxs)(T.d,{children:[Object(ee.jsx)(ye,{exact:!0,path:"/login",component:te,isAuthenticated:!!r}),Object(ee.jsx)(ge,{exact:!0,path:"/",component:he,isAuthenticated:!!r}),Object(ee.jsx)(T.a,{to:"/"})]})})})},we=function(){return Object(ee.jsx)(o.a,{store:C,children:Object(ee.jsx)(Ne,{})})};n(107);c.a.render(Object(ee.jsx)(we,{}),document.getElementById("root"))},74:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.dcf06710.chunk.js.map