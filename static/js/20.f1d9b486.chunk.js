(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[20],{1341:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"e",(function(){return s})),a.d(t,"b",(function(){return d}));var r=a(30),n=a(1355),o=a.n(n);function c(e){return o()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function i(e){return o()(e/100).format("0.0%")}function l(e){return o()(e).format()}function s(e){return Object(r.replace)(o()(e).format("0.00a"),".00","")}function d(e){return o()(e).format("0.0 b")}},1347:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(3),n=a(1221),o=a(1269),c=a(54),i=Object(n.a)((function(e){return Object(o.a)({"@global":{".apexcharts-tooltip,.apexcharts-xaxistooltip":{border:"0 !important",boxShadow:"".concat(e.customShadows.z24," !important"),color:"".concat(e.palette.text.primary," !important"),borderRadius:"".concat(e.shape.borderRadiusSm,"px !important"),backgroundColor:"".concat(e.palette.background.default," !important")},".apexcharts-tooltip-title":{border:"0 !important",fontWeight:e.typography.fontWeightBold,backgroundColor:"".concat(e.palette.grey[50016]," !important"),color:e.palette.text["light"===e.palette.mode?"secondary":"primary"]},".apexcharts-xaxistooltip-bottom":{"&:before":{borderBottomColor:"transparent !important"},"&:after":{borderBottomColor:"".concat(e.palette.background.paper," !important")}},".apexcharts-legend":{padding:"0 !important"},".apexcharts-legend-series":{alignItems:"center",display:"flex !important"},".apexcharts-legend-marker":{marginTop:"-2px !important",marginRight:"8px !important"},".apexcharts-legend-text":{lineHeight:"18px",textTransform:"capitalize"}}})}));function l(){i();var e=Object(c.a)(),t=Object(r.a)({show:!0,label:"Total",color:e.palette.text.secondary},e.typography.subtitle2),a=Object(r.a)({offsetY:8,color:e.palette.text.primary},e.typography.h3);return{colors:[e.palette.primary.main,e.palette.chart.yellow[0],e.palette.chart.blue[0],e.palette.chart.violet[0],e.palette.chart.green[0],e.palette.chart.red[0]],chart:{toolbar:{show:!1},zoom:{enabled:!1},foreColor:e.palette.text.disabled,fontFamily:e.typography.fontFamily},states:{hover:{filter:{type:"lighten",value:.04}},active:{filter:{type:"darken",value:.88}}},fill:{opacity:1,gradient:{type:"vertical",shadeIntensity:0,opacityFrom:.4,opacityTo:0,stops:[0,100]}},dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},grid:{strokeDashArray:3,borderColor:e.palette.divider},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1}},markers:{size:0,strokeColors:e.palette.background.paper},tooltip:{x:{show:!1}},legend:{show:!0,fontSize:13,position:"top",horizontalAlign:"right",markers:{radius:12},fontWeight:500,itemMargin:{horizontal:12},labels:{colors:e.palette.text.primary}},plotOptions:{bar:{columnWidth:"28%",borderRadius:4},pie:{donut:{labels:{show:!0,value:a,total:t}}},radialBar:{track:{strokeWidth:"100%",background:e.palette.grey[50016]},dataLabels:{value:a,total:t}},radar:{polygons:{fill:{colors:["transparent"]},strokeColors:e.palette.divider,connectorColors:e.palette.divider}},polarArea:{rings:{strokeColor:e.palette.divider},spokes:{connectorColors:e.palette.divider}}},responsive:[{breakpoint:e.breakpoints.values.sm,options:{plotOptions:{bar:{columnWidth:"40%"}}}},{breakpoint:e.breakpoints.values.md,options:{plotOptions:{bar:{columnWidth:"32%"}}}}]}}a(30),a(1333),a(0);a(1341)},1396:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(9),n=a.n(r),o=a(19),c=a(3),i=a(21),l=a(30),s=a(73),d=a(71),u=Object(s.b)({name:"product",initialState:{isLoading:!1,error:!1,products:[],product:null,sortBy:null,filters:{gender:[],category:"All",colors:[],priceRange:"",rating:""},checkout:{activeStep:0,cart:[],subtotal:0,total:0,discount:0,shipping:0,billing:null}},reducers:{startLoading:function(e){e.isLoading=!0},hasError:function(e,t){e.isLoading=!1,e.error=t.payload},getProductsSuccess:function(e,t){e.isLoading=!1,e.products=t.payload},getProductSuccess:function(e,t){e.isLoading=!1,e.product=t.payload},deleteProduct:function(e,t){e.products=Object(l.reject)(e.products,{id:t.payload})},sortByProducts:function(e,t){e.sortBy=t.payload},filterProducts:function(e,t){e.filters.gender=t.payload.gender,e.filters.category=t.payload.category,e.filters.colors=t.payload.colors,e.filters.priceRange=t.payload.priceRange,e.filters.rating=t.payload.rating},getCart:function(e,t){var a=t.payload,r=Object(l.sum)(a.map((function(e){return e.price*e.quantity}))),n=0===a.length?0:e.checkout.discount,o=0===a.length?0:e.checkout.shipping,c=0===a.length?null:e.checkout.billing;e.checkout.cart=a,e.checkout.discount=n,e.checkout.shipping=o,e.checkout.billing=c,e.checkout.subtotal=r,e.checkout.total=r-n},addCart:function(e,t){var a=t.payload,r=0===e.checkout.cart.length;e.checkout.cart=r?[].concat(Object(i.a)(e.checkout.cart),[a]):Object(l.map)(e.checkout.cart,(function(e){return e.id===a.id?Object(c.a)(Object(c.a)({},e),{},{quantity:e.quantity+1}):e})),e.checkout.cart=Object(l.uniqBy)([].concat(Object(i.a)(e.checkout.cart),[a]),"id")},deleteCart:function(e,t){var a=Object(l.filter)(e.checkout.cart,(function(e){return e.id!==t.payload}));e.checkout.cart=a},resetCart:function(e){e.checkout.activeStep=0,e.checkout.cart=[],e.checkout.total=0,e.checkout.subtotal=0,e.checkout.discount=0,e.checkout.shipping=0,e.checkout.billing=null},onBackStep:function(e){e.checkout.activeStep-=1},onNextStep:function(e){e.checkout.activeStep+=1},onGotoStep:function(e,t){var a=t.payload;e.checkout.activeStep=a},increaseQuantity:function(e,t){var a=t.payload,r=Object(l.map)(e.checkout.cart,(function(e){return e.id===a?Object(c.a)(Object(c.a)({},e),{},{quantity:e.quantity+1}):e}));e.checkout.cart=r},decreaseQuantity:function(e,t){var a=t.payload,r=Object(l.map)(e.checkout.cart,(function(e){return e.id===a?Object(c.a)(Object(c.a)({},e),{},{quantity:e.quantity-1}):e}));e.checkout.cart=r},createBilling:function(e,t){e.checkout.billing=t.payload},applyDiscount:function(e,t){var a=t.payload;e.checkout.discount=a,e.checkout.total=e.checkout.subtotal-a},applyShipping:function(e,t){var a=t.payload;e.checkout.shipping=a,e.checkout.total=e.checkout.subtotal-e.checkout.discount+a}}}),p=(u.reducer,u.actions);p.getCart,p.addCart,p.resetCart,p.onGotoStep,p.onBackStep,p.onNextStep,p.deleteCart,p.deleteProduct,p.createBilling,p.applyShipping,p.applyDiscount,p.filterProducts,p.sortByProducts,p.increaseQuantity,p.decreaseQuantity;function b(){return function(){var e=Object(o.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(u.actions.startLoading()),e.prev=1,e.next=4,d.a.get("/api/products");case 4:a=e.sent,t(u.actions.getProductsSuccess(a.data.products)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(u.actions.hasError(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}},1438:function(e,t,a){"use strict";var r=a(6),n=a(7),o=a(2),c=a(1),i=(a(11),a(13)),l=a(203),s=a(205),d=a(14),u=a(8),p=a(162),b=a(204);function h(e){return Object(p.a)("MuiCardHeader",e)}var m=Object(b.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),j=a(0),O=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=Object(u.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(o.a)((a={},Object(r.a)(a,"& .".concat(m.title),t.title),Object(r.a)(a,"& .".concat(m.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),y=Object(u.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),f=Object(u.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=Object(u.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),x=c.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),r=a.action,c=a.avatar,u=a.className,p=a.component,b=void 0===p?"div":p,m=a.disableTypography,x=void 0!==m&&m,k=a.subheader,S=a.subheaderTypographyProps,M=a.title,J=a.titleTypographyProps,A=Object(n.a)(a,O),C=Object(o.a)({},a,{component:b,disableTypography:x}),w=function(e){var t=e.classes;return Object(l.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)}(C),N=M;null==N||N.type===s.a||x||(N=Object(j.jsx)(s.a,Object(o.a)({variant:c?"body2":"h5",className:w.title,component:"span",display:"block"},J,{children:N})));var F=k;return null==F||F.type===s.a||x||(F=Object(j.jsx)(s.a,Object(o.a)({variant:c?"body2":"body1",className:w.subheader,color:"text.secondary",component:"span",display:"block"},S,{children:F}))),Object(j.jsxs)(v,Object(o.a)({className:Object(i.default)(w.root,u),as:b,ref:t,styleProps:C},A,{children:[c&&Object(j.jsx)(y,{className:w.avatar,styleProps:C,children:c}),Object(j.jsxs)(g,{className:w.content,styleProps:C,children:[N,F]}),r&&Object(j.jsx)(f,{className:w.action,styleProps:C,children:r})]}))}));t.a=x},2166:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var r=a(1),n=a(1319),o=a(1300),c=a(327),i=a(1396),l=a(84),s=a(414),d=a(21),u=a(17),p=a(30),b=a(1333),h=a.n(b),m=a(1327),j=a(1438),O=a(1215),v=a(1285),y=a(412),f=a(1347),g=a(206),x=a(417),k=a(0);function S(){var e=Object(r.useState)("Septembre"),t=Object(u.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)("2022"),c=Object(u.a)(o,2),i=c[0],l=c[1],s=Object(g.b)(),b=Object(g.c)((function(e){return e.ezaho.visites.val_current})),S=Object(g.c)((function(e){return e.ezaho.visites.val_prev})),M=[{month:"Janvier",data:[{name:"Janvier",data:Object(d.a)(b),type:"area"},{name:"Janvier",data:Object(d.a)(S),type:"area"}],val:"01"},{month:"Fevrier",data:[{name:"Fevrier",data:Object(d.a)(b),type:"area"},{name:"Janvier",data:Object(d.a)(S),type:"area"}],val:"02"},{month:"Mars",data:[{name:"Mars",data:Object(d.a)(b),type:"area"},{name:"Fevrier",data:Object(d.a)(S),type:"area"}],val:"03"},{month:"Avril",data:[{name:"Avril",data:Object(d.a)(b),type:"area"},{name:"Mars",data:Object(d.a)(S),type:"area"}],val:"04"},{month:"Mai",data:[{name:"Mai",data:Object(d.a)(b),type:"area"},{name:"Avril",data:Object(d.a)(S),type:"area"}],val:"05"},{month:"Juin",data:[{name:"Juin",data:Object(d.a)(b),type:"area"},{name:"Mai",data:Object(d.a)(S),type:"area"}],val:"06"},{month:"Juillet",data:[{name:"Juillet",data:Object(d.a)(b),type:"area"},{name:"Juin",data:Object(d.a)(S),type:"area"}],val:"07"},{month:"Aout",data:[{name:"Aout",data:Object(d.a)(b),type:"area"},{name:"Juillet",data:Object(d.a)(S),type:"area"}],val:"08"},{month:"Septembre",data:[{name:"Septembre",data:Object(d.a)(b),type:"area"},{name:"Aout",data:Object(d.a)(S),type:"area"}],val:"09"},{month:"Octobre",data:[{name:"Octobre",data:Object(d.a)(b),type:"area"},{name:"Septembre",data:Object(d.a)(S),type:"area"}],val:"10"},{month:"Novembre",data:[{name:"Novembre",data:Object(d.a)(b),type:"area"},{name:"Octobre",data:Object(d.a)(S),type:"area"}],val:"11"},{month:"Decembre",data:[{name:"Decembre",data:Object(d.a)(b),type:"area"},{name:"Novembre",data:Object(d.a)(S),type:"area"}],val:"12"}],J=Object(p.merge)(Object(f.a)(),{stroke:{width:[0,2,3]},plotOptions:{bar:{columnWidth:"14%"}},fill:{type:["solid","gradient","solid"]},labels:["21","22","23","24","25","26","27","28","29","30","31","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"],xaxis:{type:"string"},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?"".concat(e.toFixed(0),' mentions "j\'aime"'):e}}}});return Object(r.useEffect)((function(){var e;switch(a){case"Janvier":e="01";break;case"Fevrier":e="02";break;case"Mars":e="03";break;case"Avril":e="04";break;case"Mai":e="05";break;case"Juin":e="06";break;case"Juillet":e="07";break;case"Aout":e="08";break;case"Septembre":e="09";break;case"Octobre":e="10";break;case"Novembre":e="11";break;case"Decembre":e="12";break;default:e="09"}s(Object(x.g)(e,i))}),[a,i]),Object(k.jsxs)(m.a,{children:[Object(k.jsx)(j.a,{title:"Nombre de visite de la page Facebook E-zaho",action:Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(O.a,{direction:"row",spacing:2,sx:{mb:0,pb:0},children:[Object(k.jsx)(v.a,{select:!0,fullWidth:!0,value:i,SelectProps:{native:!0},onChange:function(e){l(e.target.value)},sx:{"& fieldset":{border:"0 !important"},"& select":{pl:1,py:.5,pr:"24px !important",typography:"subtitle2"},"& .MuiOutlinedInput-root":{borderRadius:.75,bgcolor:"background.neutral"},"& .MuiNativeSelect-icon":{top:4,right:0,width:20,height:20}},children:["2022","2023","2024"].map((function(e){return Object(k.jsx)("option",{value:e,children:e},e.id)}))}),Object(k.jsx)(v.a,{select:!0,fullWidth:!0,value:a,SelectProps:{native:!0},onChange:function(e){n(e.target.value)},sx:{"& fieldset":{border:"0 !important"},"& select":{pl:1,py:.5,pr:"24px !important",typography:"subtitle2"},"& .MuiOutlinedInput-root":{borderRadius:.75,bgcolor:"background.neutral"},"& .MuiNativeSelect-icon":{top:4,right:0,width:20,height:20}},children:M.map((function(e){return Object(k.jsx)("option",{value:e.month,children:e.month},e.month)}))})]})})}),M.map((function(e){return Object(k.jsx)(y.a,{sx:{pb:.5},dir:"ltr",children:e.month===a&&Object(k.jsx)(h.a,{type:"line",series:e.data,options:J,height:364})},e.month)}))]})}function M(){var e=Object(r.useState)("Septembre"),t=Object(u.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)("2022"),c=Object(u.a)(o,2),i=c[0],l=c[1],s=Object(g.b)(),b=Object(g.c)((function(e){return e.ezaho.likes.val_current})),S=Object(g.c)((function(e){return e.ezaho.likes.val_prev})),M=[{month:"Janvier",data:[{name:"Janvier",data:Object(d.a)(b),type:"area"},{name:"Janvier",data:Object(d.a)(S),type:"area"}],val:"01"},{month:"Fevrier",data:[{name:"Fevrier",data:Object(d.a)(b),type:"area"},{name:"Janvier",data:Object(d.a)(S),type:"area"}],val:"02"},{month:"Mars",data:[{name:"Mars",data:Object(d.a)(b),type:"area"},{name:"Fevrier",data:Object(d.a)(S),type:"area"}],val:"03"},{month:"Avril",data:[{name:"Avril",data:Object(d.a)(b),type:"area"},{name:"Mars",data:Object(d.a)(S),type:"area"}],val:"04"},{month:"Mai",data:[{name:"Mai",data:Object(d.a)(b),type:"area"},{name:"Avril",data:Object(d.a)(S),type:"area"}],val:"05"},{month:"Juin",data:[{name:"Juin",data:Object(d.a)(b),type:"area"},{name:"Mai",data:Object(d.a)(S),type:"area"}],val:"06"},{month:"Juillet",data:[{name:"Juillet",data:Object(d.a)(b),type:"area"},{name:"Juin",data:Object(d.a)(S),type:"area"}],val:"07"},{month:"Aout",data:[{name:"Aout",data:Object(d.a)(b),type:"area"},{name:"Juillet",data:Object(d.a)(S),type:"area"}],val:"08"},{month:"Septembre",data:[{name:"Septembre",data:Object(d.a)(b),type:"area"},{name:"Aout",data:Object(d.a)(S),type:"area"}],val:"09"},{month:"Octobre",data:[{name:"Octobre",data:Object(d.a)(b),type:"area"},{name:"Septembre",data:Object(d.a)(S),type:"area"}],val:"10"},{month:"Novembre",data:[{name:"Novembre",data:Object(d.a)(b),type:"area"},{name:"Octobre",data:Object(d.a)(S),type:"area"}],val:"11"},{month:"Decembre",data:[{name:"Decembre",data:Object(d.a)(b),type:"area"},{name:"Novembre",data:Object(d.a)(S),type:"area"}],val:"12"}],J=Object(p.merge)(Object(f.a)(),{stroke:{width:[0,2,3]},plotOptions:{bar:{columnWidth:"14%"}},fill:{type:["solid","gradient","solid"]},labels:["21","22","23","24","25","26","27","28","29","30","31","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"],xaxis:{type:"string"},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?"".concat(e.toFixed(0),' mentions "j\'aime"'):e}}}});return Object(r.useEffect)((function(){var e;switch(a){case"Janvier":e="01";break;case"Fevrier":e="02";break;case"Mars":e="03";break;case"Avril":e="04";break;case"Mai":e="05";break;case"Juin":e="06";break;case"Juillet":e="07";break;case"Aout":e="08";break;case"Septembre":e="09";break;case"Octobre":e="10";break;case"Novembre":e="11";break;case"Decembre":e="12";break;default:e="09"}s(Object(x.d)(e,i))}),[a,i]),Object(k.jsxs)(m.a,{children:[Object(k.jsx)(j.a,{title:"Nombre nouveau j'aime de la page Facebook E-zaho",action:Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(O.a,{direction:"row",spacing:2,sx:{mb:0,pb:0},children:[Object(k.jsx)(v.a,{select:!0,fullWidth:!0,value:i,SelectProps:{native:!0},onChange:function(e){l(e.target.value)},sx:{"& fieldset":{border:"0 !important"},"& select":{pl:1,py:.5,pr:"24px !important",typography:"subtitle2"},"& .MuiOutlinedInput-root":{borderRadius:.75,bgcolor:"background.neutral"},"& .MuiNativeSelect-icon":{top:4,right:0,width:20,height:20}},children:["2022","2023","2024"].map((function(e){return Object(k.jsx)("option",{value:e,children:e},e.id)}))}),Object(k.jsx)(v.a,{select:!0,fullWidth:!0,value:a,SelectProps:{native:!0},onChange:function(e){n(e.target.value)},sx:{"& fieldset":{border:"0 !important"},"& select":{pl:1,py:.5,pr:"24px !important",typography:"subtitle2"},"& .MuiOutlinedInput-root":{borderRadius:.75,bgcolor:"background.neutral"},"& .MuiNativeSelect-icon":{top:4,right:0,width:20,height:20}},children:M.map((function(e){return Object(k.jsx)("option",{value:e.month,children:e.month},e.month)}))})]})})}),M.map((function(e){return Object(k.jsx)(y.a,{sx:{pb:.5},dir:"ltr",children:e.month===a&&Object(k.jsx)(h.a,{type:"line",series:e.data,options:J,height:364})},e.month)}))]})}function J(){var e=Object(r.useState)("Septembre"),t=Object(u.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)("2022"),c=Object(u.a)(o,2),i=c[0],l=c[1],s=Object(g.b)(),b=Object(g.c)((function(e){return e.ezaho.reach.val_current})),S=Object(g.c)((function(e){return e.ezaho.reach.val_prev})),M=[{month:"Janvier",data:[{name:"Janvier",data:Object(d.a)(b),type:"area"},{name:"Janvier",data:Object(d.a)(S),type:"area"}],val:"01"},{month:"Fevrier",data:[{name:"Fevrier",data:Object(d.a)(b),type:"area"},{name:"Janvier",data:Object(d.a)(S),type:"area"}],val:"02"},{month:"Mars",data:[{name:"Mars",data:Object(d.a)(b),type:"area"},{name:"Fevrier",data:Object(d.a)(S),type:"area"}],val:"03"},{month:"Avril",data:[{name:"Avril",data:Object(d.a)(b),type:"area"},{name:"Mars",data:Object(d.a)(S),type:"area"}],val:"04"},{month:"Mai",data:[{name:"Mai",data:Object(d.a)(b),type:"area"},{name:"Avril",data:Object(d.a)(S),type:"area"}],val:"05"},{month:"Juin",data:[{name:"Juin",data:Object(d.a)(b),type:"area"},{name:"Mai",data:Object(d.a)(S),type:"area"}],val:"06"},{month:"Juillet",data:[{name:"Juillet",data:Object(d.a)(b),type:"area"},{name:"Juin",data:Object(d.a)(S),type:"area"}],val:"07"},{month:"Aout",data:[{name:"Aout",data:Object(d.a)(b),type:"area"},{name:"Juillet",data:Object(d.a)(S),type:"area"}],val:"08"},{month:"Septembre",data:[{name:"Septembre",data:Object(d.a)(b),type:"area"},{name:"Aout",data:Object(d.a)(S),type:"area"}],val:"09"},{month:"Octobre",data:[{name:"Octobre",data:Object(d.a)(b),type:"area"},{name:"Septembre",data:Object(d.a)(S),type:"area"}],val:"10"},{month:"Novembre",data:[{name:"Novembre",data:Object(d.a)(b),type:"area"},{name:"Octobre",data:Object(d.a)(S),type:"area"}],val:"11"},{month:"Decembre",data:[{name:"Decembre",data:Object(d.a)(b),type:"area"},{name:"Novembre",data:Object(d.a)(S),type:"area"}],val:"12"}],J=Object(p.merge)(Object(f.a)(),{stroke:{width:[0,2,3]},plotOptions:{bar:{columnWidth:"14%"}},fill:{type:["solid","gradient","solid"]},labels:["21","22","23","24","25","26","27","28","29","30","31","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"],xaxis:{type:"string"},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?"".concat(e.toFixed(0),' mentions "j\'aime"'):e}}}});return Object(r.useEffect)((function(){var e;switch(a){case"Janvier":e="01";break;case"Fevrier":e="02";break;case"Mars":e="03";break;case"Avril":e="04";break;case"Mai":e="05";break;case"Juin":e="06";break;case"Juillet":e="07";break;case"Aout":e="08";break;case"Septembre":e="09";break;case"Octobre":e="10";break;case"Novembre":e="11";break;case"Decembre":e="12";break;default:e="09"}s(Object(x.e)(e,i))}),[a,i]),Object(k.jsxs)(m.a,{children:[Object(k.jsx)(j.a,{title:"Couverture de la page Facebook E-zaho",action:Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(O.a,{direction:"row",spacing:2,sx:{mb:0,pb:0},children:[Object(k.jsx)(v.a,{select:!0,fullWidth:!0,value:i,SelectProps:{native:!0},onChange:function(e){l(e.target.value)},sx:{"& fieldset":{border:"0 !important"},"& select":{pl:1,py:.5,pr:"24px !important",typography:"subtitle2"},"& .MuiOutlinedInput-root":{borderRadius:.75,bgcolor:"background.neutral"},"& .MuiNativeSelect-icon":{top:4,right:0,width:20,height:20}},children:["2022","2023","2024"].map((function(e){return Object(k.jsx)("option",{value:e,children:e},e.id)}))}),Object(k.jsx)(v.a,{select:!0,fullWidth:!0,value:a,SelectProps:{native:!0},onChange:function(e){n(e.target.value)},sx:{"& fieldset":{border:"0 !important"},"& select":{pl:1,py:.5,pr:"24px !important",typography:"subtitle2"},"& .MuiOutlinedInput-root":{borderRadius:.75,bgcolor:"background.neutral"},"& .MuiNativeSelect-icon":{top:4,right:0,width:20,height:20}},children:M.map((function(e){return Object(k.jsx)("option",{value:e.month,children:e.month},e.month)}))})]})})}),M.map((function(e){return Object(k.jsx)(y.a,{sx:{pb:.5},dir:"ltr",children:e.month===a&&Object(k.jsx)(h.a,{type:"line",series:e.data,options:J,height:364})},e.month)}))]})}function A(){var e=Object(r.useState)("Septembre"),t=Object(u.a)(e,2),a=t[0],n=t[1],o=Object(r.useState)("2022"),c=Object(u.a)(o,2),i=c[0],l=c[1],s=Object(g.b)(),b=Object(g.c)((function(e){return e.ezaho.reachAll.val_current_VIH})),S=Object(g.c)((function(e){return e.ezaho.reachAll.val_current_WHP})),M=Object(g.c)((function(e){return e.ezaho.reachAll.val_current_PF})),J=Object(g.c)((function(e){return e.ezaho.reachAll.val_current_PALU})),A=[{name:"VIH",data:Object(d.a)(b),type:"area"},{name:"WHP",data:Object(d.a)(S),type:"area"},{name:"PF",data:Object(d.a)(M),type:"area"},{name:"PALU",data:Object(d.a)(J),type:"area"}],C=[{month:"Janvier",data:A,val:"01"},{month:"Fevrier",data:A,val:"02"},{month:"Mars",data:A,val:"03"},{month:"Avril",data:A,val:"04"},{month:"Mai",data:A,val:"05"},{month:"Juin",data:A,val:"06"},{month:"Juillet",data:A,val:"07"},{month:"Aout",data:A,val:"08"},{month:"Septembre",data:A,val:"09"},{month:"Octobre",data:A,val:"10"},{month:"Novembre",data:A,val:"11"},{month:"Decembre",data:A,val:"12"}],w=Object(p.merge)(Object(f.a)(),{stroke:{width:[0,2,3]},plotOptions:{bar:{columnWidth:"14%"}},fill:{type:["solid","gradient","solid"]},labels:["21","22","23","24","25","26","27","28","29","30","31","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"],xaxis:{type:"string"},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?"".concat(e.toFixed(0)," personnes touch\xe9es"):e}}}});return Object(r.useEffect)((function(){var e;switch(a){case"Janvier":e="01";break;case"Fevrier":e="02";break;case"Mars":e="03";break;case"Avril":e="04";break;case"Mai":e="05";break;case"Juin":e="06";break;case"Juillet":e="07";break;case"Aout":e="08";break;case"Septembre":e="09";break;case"Octobre":e="10";break;case"Novembre":e="11";break;case"Decembre":e="12";break;default:e=(new Date).getMonth()}s(Object(x.f)(e,i))}),[a,i]),Object(k.jsxs)(m.a,{children:[Object(k.jsx)(j.a,{title:"Couverture de toutes les pages Facebook",action:Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(O.a,{direction:"row",spacing:2,sx:{mb:0,pb:0},children:[Object(k.jsx)(v.a,{select:!0,fullWidth:!0,value:i,SelectProps:{native:!0},onChange:function(e){l(e.target.value)},sx:{"& fieldset":{border:"0 !important"},"& select":{pl:1,py:.5,pr:"24px !important",typography:"subtitle2"},"& .MuiOutlinedInput-root":{borderRadius:.75,bgcolor:"background.neutral"},"& .MuiNativeSelect-icon":{top:4,right:0,width:20,height:20}},children:["2022","2023","2024"].map((function(e){return Object(k.jsx)("option",{value:e,children:e},e.id)}))}),Object(k.jsx)(v.a,{select:!0,fullWidth:!0,value:a,SelectProps:{native:!0},onChange:function(e){n(e.target.value)},sx:{"& fieldset":{border:"0 !important"},"& select":{pl:1,py:.5,pr:"24px !important",typography:"subtitle2"},"& .MuiOutlinedInput-root":{borderRadius:.75,bgcolor:"background.neutral"},"& .MuiNativeSelect-icon":{top:4,right:0,width:20,height:20}},children:C.map((function(e){return Object(k.jsx)("option",{value:e.month,children:e.month},e.month)}))})]})})}),C.map((function(e){return Object(k.jsx)(y.a,{sx:{pb:1},dir:"ltr",children:e.month===a&&Object(k.jsx)(h.a,{type:"line",series:e.data,options:w,height:364})},e.month)}))]})}function C(){var e=Object(l.a)().themeStretch,t=Object(c.c)();return Object(r.useEffect)((function(){t(Object(i.a)())}),[t]),Object(k.jsx)(s.a,{title:"Dashboard | e-zaho VIH",children:Object(k.jsxs)(n.a,{maxWidth:!e&&"lg",children:[Object(k.jsx)("h1",{children:"Dashboard EZAHO"}),Object(k.jsxs)(o.a,{container:!0,spacing:e?3:12,children:[Object(k.jsx)(o.a,{item:!0,xs:12,children:Object(k.jsx)(A,{})}),Object(k.jsx)(o.a,{item:!0,xs:12,children:Object(k.jsx)(S,{})}),Object(k.jsx)(o.a,{item:!0,xs:12,children:Object(k.jsx)(M,{})}),Object(k.jsx)(o.a,{item:!0,xs:12,children:Object(k.jsx)(J,{})})]})]})})}}}]);
//# sourceMappingURL=20.f1d9b486.chunk.js.map