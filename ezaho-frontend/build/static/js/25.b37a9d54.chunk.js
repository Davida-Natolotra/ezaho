(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[25],{1341:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return b})),n.d(e,"b",(function(){return j}));var r=n(30),a=n(1355),i=n.n(a);function c(t){return i()(t).format(Number.isInteger(t)?"$0,0":"$0,0.00")}function s(t){return i()(t/100).format("0.0%")}function o(t){return i()(t).format()}function b(t){return Object(r.replace)(i()(t).format("0.00a"),".00","")}function j(t){return i()(t).format("0.0 b")}},1348:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(3),a=n(39),i=n(30),c=n(412),s=n(205),o=n(1306),b=n(38),j=n(0),d=["links","action","heading","moreLink","sx"];function l(t){var e=t.links,n=t.action,l=t.heading,u=t.moreLink,h=void 0===u?[]:u,x=t.sx,m=Object(a.a)(t,d);return Object(j.jsxs)(c.a,{sx:Object(r.a)({mb:5},x),children:[Object(j.jsxs)(c.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(j.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:l}),Object(j.jsx)(b.b,Object(r.a)({links:e},m))]}),n&&Object(j.jsx)(c.a,{sx:{flexShrink:0},children:n})]}),Object(j.jsx)(c.a,{sx:{mt:2},children:Object(i.isString)(h)?Object(j.jsx)(o.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(t){return Object(j.jsx)(o.a,{noWrap:!0,href:t,variant:"body2",target:"_blank",sx:{display:"table"},children:t},t)}))})]})}},2178:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return N}));var r=n(21),a=n(1),i=n(1300),c=n(2191),s=n(1319),o=n(327),b=n(418),j=n(34),d=n(84),l=n(414),u=n(3),h=n(39),x=n(26),m=n(248),O=n.n(m),f=n(419),p=n.n(f),g=n(245),v=n.n(g),k=n(1373),w=n.n(k),y=n(8),I=n(76),C=n(205),F=n(1327),R=n(1297),T=n(412),U=n(1301),z=n(1309),A=n(1216),L=n(1341),D=n(281),M=n(0),S=["user"],W=[{name:"Facebook",icon:Object(M.jsx)(x.a,{icon:v.a,width:20,height:20,color:"#1877F2"})},{name:"Instagram",icon:Object(M.jsx)(x.a,{icon:w.a,width:20,height:20,color:"#D7336D"})},{name:"Linkedin",icon:Object(M.jsx)(x.a,{icon:p.a,width:20,height:20,color:"#006097"})},{name:"Twitter",icon:Object(M.jsx)(x.a,{icon:O.a,width:20,height:20,color:"#1C9CEA"})}],B=Object(y.a)("div")((function(t){var e=t.theme;return{display:"flex",position:"relative",justifyContent:"center",paddingTop:"calc(100% * 9 / 16)","&:before":{top:0,zIndex:9,content:"''",width:"100%",height:"100%",position:"absolute",backdropFilter:"blur(3px)",WebkitBackdropFilter:"blur(3px)",borderTopLeftRadius:e.shape.borderRadiusMd,borderTopRightRadius:e.shape.borderRadiusMd,backgroundColor:Object(I.a)(e.palette.primary.darker,.72)}}})),E=Object(y.a)("img")({top:0,zIndex:8,width:"100%",height:"100%",objectFit:"cover",position:"absolute"});function J(t){return Object(M.jsxs)(i.a,{item:!0,xs:4,children:[Object(M.jsx)(C.a,{variant:"caption",sx:{mb:.5,color:"text.secondary",display:"block"},children:"Follower"}),Object(M.jsx)(C.a,{variant:"subtitle1",children:Object(L.e)(t)})]})}function $(t){var e=t.user,n=Object(h.a)(t,S),r=e.name,a=e.cover,c=e.position,s=e.follower,o=e.totalPost,b=e.avatarUrl,j=e.following;return Object(M.jsxs)(F.a,Object(u.a)(Object(u.a)({},n),{},{children:[Object(M.jsxs)(B,{children:[Object(M.jsx)(D.a,{color:"paper",src:"/static/icons/shape-avatar.svg",sx:{width:144,height:62,zIndex:10,bottom:-26,position:"absolute"}}),Object(M.jsx)(R.a,{alt:r,src:b,sx:{width:64,height:64,zIndex:11,position:"absolute",transform:"translateY(-50%)"}}),Object(M.jsx)(E,{alt:"cover",src:a})]}),Object(M.jsx)(C.a,{variant:"subtitle1",align:"center",sx:{mt:6},children:r}),Object(M.jsx)(C.a,{variant:"body2",align:"center",sx:{color:"text.secondary"},children:c}),Object(M.jsx)(T.a,{sx:{textAlign:"center",mt:2,mb:2.5},children:W.map((function(t){return Object(M.jsx)(U.a,{title:t.name,children:Object(M.jsx)(z.a,{children:t.icon})},t.name)}))}),Object(M.jsx)(A.a,{}),Object(M.jsxs)(i.a,{container:!0,sx:{py:3,textAlign:"center"},children:[J(s),J(j),J(o)]})]}))}var _=n(1348),G=Object(M.jsx)(M.Fragment,{children:Object(r.a)(Array(8)).map((function(t,e){return Object(M.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,children:Object(M.jsx)(c.a,{variant:"rectangular",width:"100%",sx:{paddingTop:"115%",borderRadius:2}})},e)}))});function N(){var t=Object(d.a)().themeStretch,e=Object(o.c)(),n=Object(o.d)((function(t){return t.user})).users;return Object(a.useEffect)((function(){e(Object(b.m)())}),[e]),Object(M.jsx)(l.a,{title:"User: Cards | Minimal-UI",children:Object(M.jsxs)(s.a,{maxWidth:!t&&"lg",children:[Object(M.jsx)(_.a,{heading:"User Cards",links:[{name:"Dashboard",href:j.b.root},{name:"User",href:j.b.user.root},{name:"Cards"}]}),Object(M.jsxs)(i.a,{container:!0,spacing:3,children:[n.map((function(t){return Object(M.jsx)(i.a,{item:!0,xs:12,sm:6,md:4,children:Object(M.jsx)($,{user:t})},t.id)})),!n.length&&G]})]})})}}}]);
//# sourceMappingURL=25.b37a9d54.chunk.js.map