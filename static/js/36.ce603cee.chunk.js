(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[36],{2176:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return z}));var r=i(26),n=i(35),a=i(390),c=i.n(a),o=i(8),s=i(1319),d=i(412),u=i(413),l=i(205),b=i(1306),h=i(423),j=i(34),m=i(414),x=i(3),p=i(9),g=i.n(p),O=i(19),f=i(239),v=i(163),y=i(33),q=i(238),k=i(1215),C=i(1302),w=i(1325),S=i(1294),V=i(329),I=i(0);function L(e){if(e.target.value.length>e.target.maxLength)return e.target.value=e.target.value.slice(0,e.target.maxLength)}function P(){var e=Object(y.h)(),t=Object(v.useSnackbar)().enqueueSnackbar,i=f.d().shape({code1:f.c().required("Code is required"),code2:f.c().required("Code is required"),code3:f.c().required("Code is required"),code4:f.c().required("Code is required"),code5:f.c().required("Code is required"),code6:f.c().required("Code is required")}),r=Object(q.c)({initialValues:{code1:"",code2:"",code3:"",code4:"",code5:"",code6:""},validationSchema:i,onSubmit:function(){var i=Object(O.a)(g.a.mark((function i(){return g.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(V.a)(500);case 2:t("Verify success",{variant:"success"}),e(j.b.root);case 4:case"end":return i.stop()}}),i)})));return function(){return i.apply(this,arguments)}}()}),n=r.values,a=r.errors,c=r.isValid,o=r.touched,s=r.isSubmitting,d=r.handleSubmit,u=r.getFieldProps;return Object(I.jsx)(q.b,{value:r,children:Object(I.jsxs)(q.a,{autoComplete:"off",noValidate:!0,onSubmit:d,children:[Object(I.jsx)(k.a,{direction:"row",spacing:2,justifyContent:"center",children:Object.keys(n).map((function(e){return Object(I.jsx)(C.a,Object(x.a)(Object(x.a)({},u(e)),{},{type:"number",placeholder:"-",onInput:L,error:Boolean(o[e]&&a[e]),inputProps:{maxLength:1,sx:{p:0,textAlign:"center",width:{xs:36,sm:56},height:{xs:36,sm:56}}}}),e)}))}),Object(I.jsx)(w.a,{error:!c,style:{textAlign:"right"},children:!c&&"Code is required"}),Object(I.jsx)(S.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:s,sx:{mt:3},children:"Verify"})]})})}var W=Object(o.a)(m.a)((function(e){return{display:"flex",minHeight:"100%",alignItems:"center",padding:e.theme.spacing(12,0)}}));function z(){return Object(I.jsxs)(W,{title:"Verify | Minimal UI",children:[Object(I.jsx)(h.a,{}),Object(I.jsx)(s.a,{children:Object(I.jsxs)(d.a,{sx:{maxWidth:480,mx:"auto"},children:[Object(I.jsx)(u.a,{size:"small",component:n.b,to:j.a.login,startIcon:Object(I.jsx)(r.a,{icon:c.a,width:20,height:20}),sx:{mb:3},children:"Back"}),Object(I.jsx)(l.a,{variant:"h3",paragraph:!0,children:"Please check your email!"}),Object(I.jsx)(l.a,{sx:{color:"text.secondary"},children:"We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email."}),Object(I.jsx)(d.a,{sx:{mt:5,mb:3},children:Object(I.jsx)(P,{})}),Object(I.jsxs)(l.a,{variant:"body2",align:"center",children:["Don\u2019t have a code? \xa0",Object(I.jsx)(b.a,{variant:"subtitle2",underline:"none",onClick:function(){},children:"Resend code"})]})]})})]})}}}]);
//# sourceMappingURL=36.ce603cee.chunk.js.map