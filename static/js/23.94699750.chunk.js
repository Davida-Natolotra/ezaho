(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[23],{1348:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(3),c=n(39),r=n(30),i=n(412),s=n(205),o=n(1306),l=n(38),j=n(0),d=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,n=e.action,b=e.heading,h=e.moreLink,u=void 0===h?[]:h,O=e.sx,x=Object(c.a)(e,d);return Object(j.jsxs)(i.a,{sx:Object(a.a)({mb:5},O),children:[Object(j.jsxs)(i.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(j.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:b}),Object(j.jsx)(l.b,Object(a.a)({links:t},x))]}),n&&Object(j.jsx)(i.a,{sx:{flexShrink:0},children:n})]}),Object(j.jsx)(i.a,{sx:{mt:2},children:Object(r.isString)(u)?Object(j.jsx)(o.a,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(e){return Object(j.jsx)(o.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1507:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(3),c=n(39),r=n(1307),i=n(205),s=n(0),o=["searchQuery"];function l(e){var t=e.searchQuery,n=void 0===t?"":t,l=Object(c.a)(e,o);return Object(s.jsxs)(r.a,Object(a.a)(Object(a.a)({},l),{},{children:[Object(s.jsx)(i.a,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),Object(s.jsxs)(i.a,{variant:"body2",align:"center",children:["No results found for \xa0",Object(s.jsxs)("strong",{children:['"',n,'"']}),". Try checking for typos or using complete words."]})]}))}},2167:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return xe}));var a=n(17),c=n(30),r=n(26),i=n(1700),s=n(1),o=n(1437),l=n.n(o),j=n(35),d=n(54),b=n(1319),h=n(413),u=n(1327),O=n(2083),x=n(2084),g=n(2088),f=n(2086),m=n(2087),p=n(1291),v=n(1215),y=n(1297),k=n(205),w=n(2168),S=n(327),C=n(418),N=n(34),P=n(84),R=n(414),L=n(247),I=n(100),U=n(1507),D=n(1348),W=n(3),B=n(1703),F=n(2085),z=n(2179),A=n(412),E=n(0);function M(e){var t=e.order,n=e.orderBy,a=e.rowCount,c=e.headLabel,r=e.numSelected,i=e.onRequestSort,s=e.onSelectAllClick;return Object(E.jsx)(F.a,{children:Object(E.jsxs)(f.a,{children:[Object(E.jsx)(m.a,{padding:"checkbox",children:Object(E.jsx)(p.a,{indeterminate:r>0&&r<a,checked:a>0&&r===a,onChange:s})}),c.map((function(e){return Object(E.jsx)(m.a,{align:e.alignRight?"right":"left",sortDirection:n===e.id&&t,children:Object(E.jsxs)(z.a,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:(a=e.id,function(e){i(e,a)}),children:[e.label,n===e.id?Object(E.jsx)(A.a,{sx:Object(W.a)({},B.a),children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var a}))]})})}var Q=n(379),T=n.n(Q),V=n(1511),q=n.n(V),J=n(2072),_=n.n(J),G=n(8),Y=n(1317),H=n(1302),K=n(1321),X=n(1301),Z=n(1309),$=Object(G.a)(Y.a)((function(e){return{height:96,display:"flex",justifyContent:"space-between",padding:e.theme.spacing(0,1,0,3)}})),ee=Object(G.a)(H.a)((function(e){var t=e.theme;return{width:240,transition:t.transitions.create(["box-shadow","width"],{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":{width:320,boxShadow:t.customShadows.z8},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}));function te(e){var t=e.numSelected,n=e.filterName,a=e.onFilterName,c="light"===Object(d.a)().palette.mode;return Object(E.jsxs)($,{sx:Object(W.a)({},t>0&&{color:c?"primary.main":"text.primary",bgcolor:c?"primary.lighter":"primary.dark"}),children:[t>0?Object(E.jsxs)(k.a,{component:"div",variant:"subtitle1",children:[t," selected"]}):Object(E.jsx)(ee,{value:n,onChange:a,placeholder:"Search user...",startAdornment:Object(E.jsx)(K.a,{position:"start",children:Object(E.jsx)(A.a,{component:r.a,icon:T.a,sx:{color:"text.disabled"}})})}),t>0?Object(E.jsx)(X.a,{title:"Delete",children:Object(E.jsx)(Z.a,{children:Object(E.jsx)(r.a,{icon:q.a})})}):Object(E.jsx)(X.a,{title:"Filter list",children:Object(E.jsx)(Z.a,{children:Object(E.jsx)(r.a,{icon:_.a})})})]})}var ne=n(1262),ae=n(1512),ce=n.n(ae),re=n(1455),ie=n.n(re),se=n(1365),oe=n.n(se),le=n(649),je=n(1322),de=n(1275),be=n(1276);function he(e){var t=e.onDelete,n=e.userName,c=Object(s.useRef)(null),i=Object(s.useState)(!1),o=Object(a.a)(i,2),l=o[0],d=o[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(Z.a,{ref:c,onClick:function(){return d(!0)},children:Object(E.jsx)(r.a,{icon:oe.a,width:20,height:20})}),Object(E.jsxs)(le.a,{open:l,anchorEl:c.current,onClose:function(){return d(!1)},PaperProps:{sx:{width:200,maxWidth:"100%"}},anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[Object(E.jsxs)(je.a,{onClick:t,sx:{color:"text.secondary"},children:[Object(E.jsx)(de.a,{children:Object(E.jsx)(r.a,{icon:ie.a,width:24,height:24})}),Object(E.jsx)(be.a,{primary:"Delete",primaryTypographyProps:{variant:"body2"}})]}),Object(E.jsxs)(je.a,{component:j.b,to:"".concat(N.b.user.root,"/").concat(Object(ne.a)(n),"/edit"),sx:{color:"text.secondary"},children:[Object(E.jsx)(de.a,{children:Object(E.jsx)(r.a,{icon:ce.a,width:24,height:24})}),Object(E.jsx)(be.a,{primary:"Edit",primaryTypographyProps:{variant:"body2"}})]})]})]})}var ue=[{id:"name",label:"Name",alignRight:!1},{id:"company",label:"Company",alignRight:!1},{id:"role",label:"Role",alignRight:!1},{id:"isVerified",label:"Verified",alignRight:!1},{id:"status",label:"Status",alignRight:!1},{id:""}];function Oe(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function xe(){var e=Object(P.a)().themeStretch,t=Object(d.a)(),n=Object(S.c)(),o=Object(S.d)((function(e){return e.user})).userList,W=Object(s.useState)(0),B=Object(a.a)(W,2),F=B[0],z=B[1],A=Object(s.useState)("asc"),Q=Object(a.a)(A,2),T=Q[0],V=Q[1],q=Object(s.useState)([]),J=Object(a.a)(q,2),_=J[0],G=J[1],Y=Object(s.useState)("name"),H=Object(a.a)(Y,2),K=H[0],X=H[1],Z=Object(s.useState)(""),$=Object(a.a)(Z,2),ee=$[0],ne=$[1],ae=Object(s.useState)(5),ce=Object(a.a)(ae,2),re=ce[0],ie=ce[1];Object(s.useEffect)((function(){n(Object(C.l)())}),[n]);var se=F>0?Math.max(0,(1+F)*re-o.length):0,oe=function(e,t,n){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n?Object(c.filter)(e,(function(e){return-1!==e.name.toLowerCase().indexOf(n.toLowerCase())})):a.map((function(e){return e[0]}))}(o,function(e,t){return"desc"===e?function(e,n){return Oe(e,n,t)}:function(e,n){return-Oe(e,n,t)}}(T,K),ee),le=0===oe.length;return Object(E.jsx)(R.a,{title:"User: List | Minimal-UI",children:Object(E.jsxs)(b.a,{maxWidth:!e&&"lg",children:[Object(E.jsx)(D.a,{heading:"User List",links:[{name:"Dashboard",href:N.b.root},{name:"User",href:N.b.user.root},{name:"List"}],action:Object(E.jsx)(h.a,{variant:"contained",component:j.b,to:N.b.user.newUser,startIcon:Object(E.jsx)(r.a,{icon:l.a}),children:"New User"})}),Object(E.jsxs)(u.a,{children:[Object(E.jsx)(te,{numSelected:_.length,filterName:ee,onFilterName:function(e){ne(e.target.value)}}),Object(E.jsx)(I.a,{children:Object(E.jsx)(O.a,{sx:{minWidth:800},children:Object(E.jsxs)(x.a,{children:[Object(E.jsx)(M,{order:T,orderBy:K,headLabel:ue,rowCount:o.length,numSelected:_.length,onRequestSort:function(e,t){V(K===t&&"asc"===T?"desc":"asc"),X(t)},onSelectAllClick:function(e){if(e.target.checked){var t=o.map((function(e){return e.name}));G(t)}else G([])}}),Object(E.jsxs)(g.a,{children:[oe.slice(F*re,F*re+re).map((function(e){var a=e.id,c=e.name,r=e.role,s=e.status,o=e.company,l=e.avatarUrl,j=e.isVerified,d=-1!==_.indexOf(c);return Object(E.jsxs)(f.a,{hover:!0,tabIndex:-1,role:"checkbox",selected:d,"aria-checked":d,children:[Object(E.jsx)(m.a,{padding:"checkbox",children:Object(E.jsx)(p.a,{checked:d,onChange:function(e){return function(e,t){var n=_.indexOf(t),a=[];-1===n?a=a.concat(_,t):0===n?a=a.concat(_.slice(1)):n===_.length-1?a=a.concat(_.slice(0,-1)):n>0&&(a=a.concat(_.slice(0,n),_.slice(n+1))),G(a)}(0,c)}})}),Object(E.jsx)(m.a,{component:"th",scope:"row",padding:"none",children:Object(E.jsxs)(v.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(E.jsx)(y.a,{alt:c,src:l}),Object(E.jsx)(k.a,{variant:"subtitle2",noWrap:!0,children:c})]})}),Object(E.jsx)(m.a,{align:"left",children:o}),Object(E.jsx)(m.a,{align:"left",children:r}),Object(E.jsx)(m.a,{align:"left",children:j?"Yes":"No"}),Object(E.jsx)(m.a,{align:"left",children:Object(E.jsx)(L.a,{variant:"light"===t.palette.mode?"ghost":"filled",color:"banned"===s?"error":"success",children:Object(i.a)(s)})}),Object(E.jsx)(m.a,{align:"right",children:Object(E.jsx)(he,{onDelete:function(){return e=a,void n(Object(C.b)(e));var e},userName:c})})]},a)})),se>0&&Object(E.jsx)(f.a,{style:{height:53*se},children:Object(E.jsx)(m.a,{colSpan:6})})]}),le&&Object(E.jsx)(g.a,{children:Object(E.jsx)(f.a,{children:Object(E.jsx)(m.a,{align:"center",colSpan:6,sx:{py:3},children:Object(E.jsx)(U.a,{searchQuery:ee})})})})]})})}),Object(E.jsx)(w.a,{rowsPerPageOptions:[5,10,25],component:"div",count:o.length,rowsPerPage:re,page:F,onPageChange:function(e,t){z(t)},onRowsPerPageChange:function(e){ie(parseInt(e.target.value,10)),z(0)}})]})]})})}}}]);
//# sourceMappingURL=23.94699750.chunk.js.map