(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[24],{1348:function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var r=t(3),a=t(39),c=t(30),i=t(412),o=t(205),s=t(1306),l=t(38),u=t(0),b=["links","action","heading","moreLink","sx"];function j(e){var n=e.links,t=e.action,j=e.heading,d=e.moreLink,O=void 0===d?[]:d,f=e.sx,x=Object(a.a)(e,b);return Object(u.jsxs)(i.a,{sx:Object(r.a)({mb:5},f),children:[Object(u.jsxs)(i.a,{sx:{display:"flex",alignItems:"center"},children:[Object(u.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(u.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:j}),Object(u.jsx)(l.b,Object(r.a)({links:n},x))]}),t&&Object(u.jsx)(i.a,{sx:{flexShrink:0},children:t})]}),Object(u.jsx)(i.a,{sx:{mt:2},children:Object(c.isString)(O)?Object(u.jsx)(s.a,{href:O,target:"_blank",variant:"body2",children:O}):O.map((function(e){return Object(u.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1466:function(e,n,t){"use strict";t.d(n,"a",(function(){return T}));var r=t(3),a=t(9),c=t.n(a),i=t(19),o=t(17),s=t(239),l=t(163),u=(t(1427),t(1)),b=t(238),j=t(1294),d=t(2183),O=t(2204),f=t(2205),x=t(2124),h=t(2198),p=t(2200),m=t(2142),g=t(2184),v=t(2203),k=t(2165),P=t(2202),S=t(2160),C=t(2195),A=t(2180),y=t(2148),w=t(2149),X=t(2182),q=t(2206),E=t(1468),_=t.n(E),I=t(2193),F=t(206),V=t(416),R=t(49),B=t(0);function N(){var e=Object(F.c)((function(e){return e.PAX.PAX})),n=Object(F.c)((function(e){return e.PAX})).isEdit,t=Object(F.c)((function(e){return e.PAX.CIU.ciu})),a=Object(F.c)((function(e){return e.PAX.lastSerialNo})),y=Object(u.useState)(""),w=Object(o.a)(y,2),X=w[0],q=w[1],E=Object(F.c)((function(e){return e.location.regions})),_=Object(F.c)((function(e){return e.VIHCollecte.sexes})),I=Object(u.useState)(!1),N=Object(o.a)(I,2),T=(N[0],N[1]),W=Object(l.useSnackbar)().enqueueSnackbar,z=Object(F.b)(),D=Object(R.a)().user,H=Object(u.useRef)(),L=s.d().shape({prenom:s.f().required("Pr\xe9nom requis"),code:s.f().required("code requis"),nom_fb:s.f().nullable().notRequired(),phone:s.f().nullable().notRequired(),sexe:s.f().required("Sexe requis"),region:s.f().required("R\xe9gion requise"),ciu:s.f().required("CIU requis")}),U=Object(b.c)({enableReinitialize:!0,initialValues:{prenom:n?e.prenom:"",code:n?e.code:"",nom_fb:n?e.nom_fb:"",phone:n?e.phone:"",sexe:n?e.sexe:"",region:n?e.region:"",serial_no:n?e.serial_no:""},validationSchema:L,onSubmit:function(){var r=Object(i.a)(c.a.mark((function r(i,o){var s,l,u;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=o.setSubmitting,l=o.setErrors,(u=new FormData).append("prenom",i.prenom),u.append("code",t),u.append("nom_fb",i.nom_fb),u.append("phone",i.phone),u.append("sexe",i.sexe),u.append("region",X.id),u.append("serial_no",Number(a)+1),n&&(u.id=e.id),r.prev=10,console.log(u),!n){r.next=17;break}return r.next=15,z(Object(V.q)(u,e.id));case 15:r.next=19;break;case 17:return r.next=19,z(Object(V.a)(u));case 19:return r.next=21,z(Object(V.m)(t));case 21:return re(),W(n?"Update success":"Nouvelle entr\xe9e enregistr\xe9e avec succ\xe8s",{variant:"success"}),T(!1),r.next=26,z(Object(V.e)());case 26:z(Object(V.p)(!1)),r.next=34;break;case 29:r.prev=29,r.t0=r.catch(10),console.error(r.t0),s(!1),l(r.t0);case 34:case"end":return r.stop()}}),r,null,[[10,29]])})));return function(e,n){return r.apply(this,arguments)}}()}),G=U.handleChange,J=U.getFieldProps,M=U.values,Z=U.handleSubmit,Q=U.touched,K=U.handleBlur,Y=U.errors,$=U.setSubmitting,ee=U.setFieldValue,ne=U.isSubmitting,te=U.resetForm,re=function(){T(!1),z(Object(V.n)(!1)),z(Object(V.k)()),$(!1),te()};return Object(u.useEffect)((function(){n||re()}),[n]),Object(u.useEffect)((function(){H.current?H.current=!1:M.region&&M.sexe&&z(Object(V.c)({sexe:M.sexe,region:X.id}))}),[M.region,M.sexe]),Object(u.useEffect)((function(){M.code=t}),[t]),Object(u.useEffect)((function(){z(Object(V.d)())}),[]),Object(B.jsx)(b.b,{value:U,children:Object(B.jsx)(b.a,{autoComplete:"off",onSubmit:Z,children:Object(B.jsx)(d.a,{container:!0,spacing:3,justifyContent:"center",children:Object(B.jsx)(d.a,{item:!0,xs:12,children:Object(B.jsx)(O.a,{children:Object(B.jsx)(f.a,{children:Object(B.jsxs)(x.a,{spacing:3,direction:"column",children:["call"===D.role?Object(B.jsx)(h.a,{label:"T\xe9lephone",value:M.phone,onChange:G,onBlur:K,name:"phone",variant:"standard",required:!0,error:Boolean(Q.phone&&Y.phone),helperText:Q.phone&&Y.phone}):Object(B.jsx)(h.a,{label:"Nom Facebook",value:M.nom_fb,onChange:G,onBlur:K,name:"nom_fb",variant:"standard",required:!0,error:Boolean(Q.nom_fb&&Y.nom_fb),helperText:Q.nom_fb&&Y.nom_fb}),Object(B.jsx)(h.a,Object(r.a)(Object(r.a)({fullWidth:!0,label:"Pr\xe9nom",name:"prenom",onChange:G,onBlur:K},J("prenom")),{},{error:Boolean(Q.prenom&&Y.prenom),helperText:Q.prenom&&Y.prenom})),Object(B.jsxs)(p.a,{error:Boolean(Q.sexe&&Y.sexe),children:[Object(B.jsx)(m.a,{id:"demo-row-radio-buttons-group-label",children:"Sexe"}),Object(B.jsx)(g.a,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"sexe",value:M.sexe,onChange:G,children:_.map((function(e){return"all"!==e.name.toLowerCase()&&Object(B.jsx)(v.a,{value:e.id,control:Object(B.jsx)(k.a,{}),label:e.name})}))}),Object(B.jsx)(P.a,{children:Q.sexe&&Y.sexe})]}),Object(B.jsx)(S.a,{disablePortal:!0,id:"region",options:E,value:X,onChange:function(e,n){q(n)},inputValue:M.region,onInputChange:function(e,n){ee("region",n)},renderInput:function(e){return Object(B.jsx)(h.a,Object(r.a)(Object(r.a)({},e),{},{label:"R\xe9gion",variant:"standard"}))}}),Object(B.jsxs)(C.a,{variant:"body1",children:["Code: ",t]}),Object(B.jsxs)(x.a,{spacing:1,direction:"row",children:[Object(B.jsx)(j.a,{type:"submit",fullWidth:!0,variant:"contained",size:"large",loading:ne,children:"Enregistrer"}),Object(B.jsx)(A.a,{type:"button",fullWidth:!0,variant:"outlined",onClick:function(){return re()},children:"Nouveau"})]})]})})})})})})})}function T(){var e=Object(F.c)((function(e){return e.PAX.show})),n=Object(F.c)((function(e){return e.PAX})).isEdit,t=Object(F.b)(),r=function(){return t(Object(V.p)(!1))};return Object(B.jsxs)(y.a,{open:e,onClose:r,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(B.jsxs)(w.a,{sx:{p:3},children:[n?"Edition":"Nouveau PAX",e?Object(B.jsx)(X.a,{title:"Fermer",children:Object(B.jsx)(I.a,{"aria-label":"close",onClick:r,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(B.jsx)(_.a,{})})}):null]}),Object(B.jsx)(q.a,{children:Object(B.jsx)(N,{})})]})}},2177:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return z}));var r=t(1),a=t(33),c=t(1319),i=t(1300),o=t(327),s=t(34),l=t(84),u=t(414),b=t(1348),j=t(3),d=t(21),O=t(9),f=t.n(O),x=t(19),h=t(17),p=t(239),m=t(163),g=t(238),v=t(1294),k=t(2124),P=t(2194),S=t(2195),C=t(2180),A=t(2160),y=t(2198),w=t(206),X=t(421),q=t(415),E=t(417),_=t(416),I=t(49),F=t(0);function V(){var e=Object(r.useState)([]),n=Object(h.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""|Object(w.c)((function(e){return e.PAX.PAX}))),i=Object(h.a)(c,2),o=(i[0],i[1],Object(r.useState)("")),s=Object(h.a)(o,2),l=s[0],u=s[1],b=Object(r.useState)(""),O=Object(h.a)(b,2),V=O[0],R=O[1],B=Object(w.c)((function(e){return e.PAX.PAXs})),N=Object(w.c)((function(e){return e.location.regions})),T=Object(w.c)((function(e){return e.PAX.sexe})),W=Object(r.useState)(""),z=Object(h.a)(W,2),D=z[0],H=z[1],L=Object(w.b)(),U=Object(r.useState)(0),G=Object(h.a)(U,2),J=G[0],M=G[1],Z=Object(m.useSnackbar)().enqueueSnackbar,Q=Object(I.a)().user,K=p.d().shape({region:p.f().required("Entrer la r\xe9gion du PAX"),sexe:p.c().required("Entrer le sexe du PAX"),referent:p.f().required("Entrer le r\xe9f\xe9rent du PAX")}),Y=Object(g.c)({enableReinitialize:!0,initialValues:{PAX:"",CIU:"",region:"",referent:"",sexe:""},validationSchema:K,onSubmit:function(){var e=Object(x.a)(f.a.mark((function e(n,t){var r,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.setSubmitting,t.resetForm,a=t.setErrors,c={pax:l.id,referent:n.referent,responsable:Q.id},e.prev=2,e.next=5,$(c);case 5:return e.next=7,ee();case 7:return e.next=9,L(Object(_.k)());case 9:return u(null),e.next=12,L(Object(_.l)());case 12:return Z("Enregistr\xe9e avec succ\xe8s",{variant:"success"}),e.next=15,L(Object(_.g)());case 15:e.next=22;break;case 17:e.prev=17,e.t0=e.catch(2),console.error(e.t0),r(!1),a(e.t0);case 22:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(n,t){return e.apply(this,arguments)}}()}),$=function(e){a([].concat(Object(d.a)(t),[Object(j.a)({id:J},e)])),M(J+1),console.log(e),L(Object(E.a)(e))},ee=function(){re(),R("")},ne=(Y.handleChange,Y.values),te=Y.handleSubmit,re=(Y.touched,Y.handleBlur,Y.errors,Y.resetForm),ae=Y.setFieldValue,ce=Y.isSubmitting;Object(r.useRef)(!0);return Object(r.useEffect)((function(){L(Object(X.c)()),L(Object(q.o)()),L(Object(_.g)())}),[]),Object(r.useEffect)((function(){L(Object(_.j)(null===l||void 0===l?void 0:l.sexe)),ne.sexe=null===l||void 0===l?void 0:l.sexe,console.log("sexe: ".concat(T)),H(N.filter((function(e){return e.id===(null===l||void 0===l?void 0:l.region)}))[0])}),[l]),Object(F.jsx)(g.b,{value:Y,children:Object(F.jsx)(g.a,{noValidate:!0,autoComplete:"on",onSubmit:te,children:Object(F.jsxs)(k.a,{direction:"column",spacing:3,sx:{mt:3},children:[Object(F.jsx)(P.a,{children:Object(F.jsxs)(k.a,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[Object(F.jsx)(S.a,{variant:"subtitle1",children:"PAX"}),Object(F.jsx)(C.a,{variant:"outlined",color:"primary",onClick:function(){L(Object(_.p)(!0))},sx:{textTransform:"none"},children:"Ajouter nouveau PAX"})]})}),Object(F.jsx)(A.a,{disablePortal:!0,name:"nomFb",options:B,getOptionLabel:function(e){return(null===e||void 0===e?void 0:e.nom_fb)||""},value:l,onChange:function(e,n){u(n)},inputValue:ne.nomFb,onInputChange:function(e,n){ae("nomFb",n)},renderInput:function(e){return Object(F.jsx)(y.a,Object(j.a)(Object(j.a)({},e),{},{label:"Nom Facebook du PAX",variant:"standard"}))}}),Object(F.jsxs)(S.a,{variant:"body1",children:["Prenom PAX: ",null===l||void 0===l?void 0:l.prenom," "]}),Object(F.jsxs)(S.a,{variant:"body1",children:["Nom facebook: ",null===l||void 0===l?void 0:l.nom_fb]}),Object(F.jsxs)(S.a,{variant:"body1",children:["Sexe: ",T]}),Object(F.jsxs)(S.a,{variant:"body1",children:["CIU: ",null===l||void 0===l?void 0:l.code]}),Object(F.jsx)(A.a,{disablePortal:!0,id:"region",options:N,value:D,onChange:function(e,n){H(n)},inputValue:ne.region,onInputChange:function(e,n){ae("region",n)},renderInput:function(e){return Object(F.jsx)(y.a,Object(j.a)(Object(j.a)({},e),{},{label:"R\xe9gion",variant:"standard"}))}}),Object(F.jsx)(S.a,{variant:"subtitle1",children:"R\xe9f\xe9r\xe9 \xe0"}),Object(F.jsx)(A.a,{disablePortal:!0,id:"referent",options:[{label:"VIH"},{label:"WHP"},{label:"PF"},{label:"COVID"}],value:V,onChange:function(e,n){R(n)},inputValue:ne.referent,onInputChange:function(e,n){ae("referent",n)},renderInput:function(e){return Object(F.jsx)(y.a,Object(j.a)(Object(j.a)({},e),{},{label:"R\xe9f\xe9r\xe9 \xe0",variant:"standard"}))}}),Object(F.jsxs)(k.a,{direction:"row",spacing:2,children:[Object(F.jsx)(v.a,{variant:"contained",color:"primary",type:"submit",loading:ce,onClick:te,children:"Enregistrer"}),Object(F.jsx)(C.a,{variant:"outlined",type:"button",onClick:function(){return ee()},children:"Annuler"})]})]})})})}var R=t(1461),B=t(1265),N=t(54);var T=function(){var e=Object(N.a)(),n=Object(w.c)((function(e){return e.ezaho})).collectes,t=Object(r.useState)(10),a=Object(h.a)(t,2),c=a[0],i=a[1],o=Object(B.a)(e.breakpoints.down("lg")),s=Object(w.b)();Object(r.useEffect)((function(){s(Object(E.c)())}),[]);var l=[{field:"pax",headerName:"PAX",minWidth:50,flex:2},{field:"date_collecte",headerName:"Date de collecte",minWidth:100,flex:2,sortable:!0,hide:o,valueFormatter:function(e){return new Date(null===e||void 0===e?void 0:e.value).toLocaleDateString("fr-fr",{year:"numeric",month:"numeric",day:"numeric"})}},{field:"referent",headerName:"R\xe9f\xe9r\xe9 \xe0",minWidth:150,flex:2,sortable:!0,hide:o}];return Object(F.jsx)(R.a,{checkboxSelection:!0,disableSelectionOnClick:!0,loading:!1,pageSize:c,onPageSizeChange:function(e){return i(e)},rowsPerPageOptions:[5,10,50],pagination:!0,autoHeight:!0,localeText:R.c.components.MuiDataGrid.defaultProps.localeText,columns:l,rows:n,componentsProps:{toolbar:{printOptions:{disableToolbarButton:!0},showQuickFilter:!0,quickFilterProps:{debounceMs:500}}},components:{Toolbar:R.b}})},W=t(1466);function z(){var e=Object(l.a)().themeStretch;Object(o.c)(),Object(a.g)().pathname,Object(a.i)().name;return Object(F.jsx)(u.a,{title:"Collecte | e-zaho VIH",children:Object(F.jsxs)(c.a,{maxWidth:!e&&"lg",children:[Object(F.jsx)(b.a,{heading:"Collecte des donn\xe9es messenger",links:[{name:"Dashboard",href:s.b.EZAHO.dashboard},{name:"Collecte",href:s.b.EZAHO.collecte}]}),Object(F.jsxs)(i.a,{container:!0,spacing:3,children:[Object(F.jsx)(i.a,{item:!0,xs:12,children:Object(F.jsx)(W.a,{})}),Object(F.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(F.jsx)(V,{})}),Object(F.jsx)(i.a,{item:!0,xs:12,md:8,children:Object(F.jsx)(T,{})})]})]})})}}}]);
//# sourceMappingURL=24.8322329b.chunk.js.map