(this.webpackJsonptrips=this.webpackJsonptrips||[]).push([[0],{10:function(e,t,a){e.exports={container:"TripHeader_container__1Si6y",main:"TripHeader_main__v04Yv",title:"TripHeader_title__30aZZ",dates:"TripHeader_dates__1Aa05",scrolledTitleContainer:"TripHeader_scrolledTitleContainer__2LD3L",date:"TripHeader_date__1gaO3",shadow:"TripHeader_shadow__3hXGV"}},15:function(e,t,a){e.exports={eventItem:"EventItem_eventItem__388fE",timeline:"EventItem_timeline__3B-vE",icon:"EventItem_icon__14QM4",line:"EventItem_line__1HfnB"}},20:function(e,t,a){e.exports={backButton:"Trip_backButton__2PHeV",eventList:"Trip_eventList__KAeqw"}},28:function(e,t,a){e.exports={tripList:"Trips_tripList__S7EBP"}},31:function(e,t,a){e.exports={iconContainer:"EventLogo_iconContainer__14YD_"}},34:function(e,t,a){e.exports=a(55)},39:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(27),o=a.n(i),m=(a(39),a(13)),c=a(2),s=a(28),l=a.n(s),d="TRANSPORTATION",p="LODGING",u="FLIGHT",v="HOTEL",_={trips:[{title:"Yellowstone National Park & Oregon",image:"https://www.lodgeatbigsky.com/resourcefiles/attractionsmallimages/yellowstone-national-park-montana.jpg",id:"0",startTimestamp:1595430300,endTimestamp:1596492300,events:[{id:"0",type:d,subType:u,company:"American Airlines",confirmationCode:"YHHAJO",startTimestamp:1595430300,timezone:"America/Chicago",segments:[{flightNumber:"2297",departure:{timestamp:1595430300,city:"Chicago",state:"IL",airportCode:"ORD",timezone:"America/Chicago"},arrival:{timestamp:1595442600,city:"Bozeman",state:"MT",airportCode:"BZN",timezone:"America/Denver"}}]},{id:"1",type:d,subType:"RENTAL CAR",company:"National",startTimestamp:1595444400,timezone:"America/Denver",endTimestamp:1595804400,carType:"Full Size Car",pickUp:{timestamp:1595444400,location:"BZN NATIONAL (BZN)",timezone:"America/Denver"},dropOff:{timestamp:1595804400,location:"BZN NATIONAL (BZN)",timezone:"America/Denver"},confirmationCode:"1067331609"},{id:"2",type:p,subType:v,company:"Wonderland Cafe & Lodge",startTimestamp:1595451600,timezone:"America/Denver",endTimestamp:1595692800,confirmationCode:"LH20052817970141"},{id:"3",type:p,subType:v,company:"Under Canvas Yellowstone",startTimestamp:1595714400,timezone:"America/Denver",endTimestamp:1595779200,confirmationCode:"RMDLU3QUH"},{id:"4",type:d,subType:u,company:"Alaska Airlines",confirmationCode:"LKEWXW",startTimestamp:1595805600,timezone:"America/Denver",segments:[{flightNumber:"2421",departure:{timestamp:1595805600,city:"Bozeman",state:"MT",airportCode:"BZN",timezone:"America/Denver"},arrival:{timestamp:1595812020,city:"Seattle",state:"WA",airportCode:"SEA",timezone:"America/Los_Angeles"}},{flightNumber:"2708",departure:{timestamp:1595820600,city:"Seattle",state:"WA",airportCode:"SEA",timezone:"America/Los_Angeles"},arrival:{timestamp:1595823780,city:"Portland",state:"OR",airportCode:"PDX",timezone:"America/Los_Angeles"}}]},{id:"5",type:d,subType:u,company:"Alaska Airlines",confirmationCode:"CBYCYV",startTimestamp:1596428100,timezone:"America/Los_Angeles",segments:[{flightNumber:"3336",departure:{timestamp:1596428100,city:"Portland",state:"OR",airportCode:"PDX",timezone:"America/Los_Angeles"},arrival:{timestamp:1596431100,city:"Seattle",state:"WA",airportCode:"SEA",timezone:"America/Los_Angeles"}},{flightNumber:"22",departure:{timestamp:1596435300,city:"Seatlle",state:"WA",airportCode:"SEA",timezone:"America/Los_Angeles"},arrival:{timestamp:1596449100,city:"Chicago",state:"IL",airportCode:"ORD",timezone:"America/Chicago"}}]}]}]},E=a(9),y=a.n(E),g=a(11),C={FLIGHT:{name:"plane",rotation:270,secondary:{name:"plane-departure"}},"RENTAL CAR":{name:"car",fontSize:"18px"},DINING:{name:"utensils"},LODGING:{name:"bed"}},T=function(e){var t,a=e.type,n=e.subType;e.secondary;return(t=n&&C[n]?C[n]:C[a]).secondary&&(t=t.secondary),r.a.createElement(g.a,{icon:t.name,rotation:t.rotation,style:{fontSize:t.fontSize}})},N=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],A=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],f=function(e){return N[e.getDay()]},b=function(e){return A[e.getMonth()]},h=function(e){var t=e.type,a=e.number;return 0===a?null:r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("div",{className:y.a.summaryIcon},r.a.createElement(T,{type:t})),r.a.createElement("div",{className:y.a.summaryIconNumber},a))},D=function(e){var t=e.events,a=0,n=0,i=0,o=0;return t.forEach((function(e){"FLIGHT"===e.subType?a++:"RENTAL CAR"===e.subType?n++:"DINING"===e.type?i++:"LODGING"===e.type&&o++})),r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{type:"FLIGHT",number:a}),r.a.createElement(h,{type:"RENTAL CAR",number:n}),r.a.createElement(h,{type:"LODGING",number:o}),r.a.createElement(h,{type:"DINING",number:i}))},L=function(e){var t=e.trip,a=new Date(1e3*t.startTimestamp),n=new Date(1e3*t.endTimestamp);return r.a.createElement("li",null,r.a.createElement(m.b,{to:"/".concat(t.id),style:{textDecoration:"none"}},r.a.createElement("div",{className:y.a.container,style:{backgroundImage:'url("'.concat(t.image,'")')}},r.a.createElement("div",{className:y.a.header},r.a.createElement(D,{events:t.events})),r.a.createElement("div",{className:y.a.main},r.a.createElement("div",{className:y.a.dates},f(a),", ",b(a)," ",a.getDate()," \u2013 ",f(n),","," ",b(n)," ",n.getDate()),r.a.createElement("div",{className:y.a.title},t.title),r.a.createElement("div",{className:y.a.detailsButton},"View Details")))))},w=function(){console.log(_.trips);var e=_.trips.map((function(e){return r.a.createElement(L,{trip:e,key:e.id})}));return r.a.createElement("ul",{className:l.a.tripList},e)},I=a(20),S=a.n(I),z=a(22),k=a(30),O=a(10),B=a.n(O),G=function(e){var t=e.trip,a=new Date(1e3*t.startTimestamp),n=new Date(1e3*t.endTimestamp);return r.a.createElement(k.RenderPropSticky,{topOffset:190},(function(e){var i=e.isFixed,o=e.wrapperStyles,m=e.wrapperRef,c=e.holderStyles,s=e.holderRef;return r.a.createElement("div",{ref:s,style:c},r.a.createElement("div",{className:i?B.a.shadow:void 0,style:i?Object(z.a)(Object(z.a)({},o),{},{marginTop:-190}):o,ref:m},r.a.createElement("header",{className:B.a.container,style:{backgroundImage:'url("'.concat(t.image,'")')}},r.a.createElement("div",{className:B.a.main},r.a.createElement("div",{className:B.a.dates},f(a),", ",b(a)," ",a.getDate()," \u2013 ",f(n),","," ",b(n)," ",n.getDate()),r.a.createElement("div",{className:B.a.title},t.title)),r.a.createElement("div",{className:B.a.scrolledTitleContainer,style:{opacity:i?1:0}},r.a.createElement("div",{className:B.a.date},b(a)," ",a.getDate()," \u2013"," ",b(n)," ",n.getDate()),r.a.createElement("div",{className:B.a.title},t.title)))))}))},H=a(15),R=a.n(H),M=a(33),x=a(8),F=a.n(x),W=a(31),P=a.n(W),Z={FLIGHT:{name:"plane",rotation:270,backgroundColor:"#307ACF"},"RENTAL CAR":{name:"car",backgroundColor:"#188038"},DINING:{name:"utensils",backgroundColor:"#CF307A"},LODGING:{name:"bed",backgroundColor:"#8430CE"}},j={"American Airlines":"https://www.gstatic.com/flights/airline_logos/70px/AA.png","Alaska Airlines":"https://www.gstatic.com/flights/airline_logos/70px/AS.png",National:"https://lh3.googleusercontent.com/6gL89Z-xGEnxneYGUF-QFcecMo-_nhV0idlMcTrfEUVDe_qYA1T26hzGcbSWsuxlHO4"},Y=function(e){var t,a=e.event,n=a.company?j[a.company]:void 0;return n?r.a.createElement("img",{alt:"".concat(a.company," logo"),height:24,width:24,src:n}):(t=a.subType&&Z[a.subType]?Z[a.subType]:Z[a.type],r.a.createElement("div",{className:P.a.iconContainer,style:{backgroundColor:t.backgroundColor}},r.a.createElement(g.a,{icon:t.name,rotation:t.rotation})))},U=a(21),J=a.n(U),Q=function(e){var t=e.event,a=J()(1e3*t.startTimestamp).tz(t.timezone).format("ddd, MMM D"),n=t.endTimestamp?J()(1e3*t.endTimestamp).tz(t.timezone):void 0,i=n?" - ".concat(n.format("ddd, MMM D")):void 0;return r.a.createElement("div",{className:F.a.dates},"".concat(a).concat(i||""))},V=function(e){var t=e.event,a=Object(n.useState)(!1),i=Object(M.a)(a,2),o=i[0],m=i[1];return r.a.createElement("div",{className:F.a.overviewContainer},r.a.createElement(Q,{event:t}),r.a.createElement("div",{className:F.a.eventCard,role:"button",onClick:function(){return m((function(e){return!e}))}},r.a.createElement("div",{className:F.a.eventHeader},r.a.createElement("span",{style:{display:"block",cursor:"pointer"}},r.a.createElement("div",{className:F.a.eventCardSummary},r.a.createElement("div",{className:F.a.logo},r.a.createElement(Y,{event:t})))),r.a.createElement("span",{className:F.a.eventCardArrow},r.a.createElement(g.a,{icon:o?"chevron-up":"chevron-down"}))),r.a.createElement("div",{className:"".concat(F.a.eventDetails," ").concat(o?F.a.visible:"")},r.a.createElement("div",{style:{height:300}}))))},K=function(e){var t=e.event;return r.a.createElement("li",{className:R.a.eventItem},r.a.createElement("div",{className:R.a.timeline},r.a.createElement("div",{className:R.a.icon},r.a.createElement(T,{type:t.type,subType:t.subType,secondary:!0})),r.a.createElement("div",{className:R.a.line})),r.a.createElement(V,{event:t}))},X=function(){var e=Object(c.f)(),t=Object(c.g)().id,a=_.trips.find((function(e){return e.id===t})),n=a.events.map((function(e){return r.a.createElement(K,{event:e,key:e.id})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return e.goBack()},className:S.a.backButton},r.a.createElement(g.a,{icon:"arrow-left"})),r.a.createElement(G,{trip:a}),r.a.createElement("ul",{className:S.a.eventList},n))};var q=function(){return r.a.createElement(m.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/:id"},r.a.createElement(X,null)),r.a.createElement(c.a,{path:"/"},r.a.createElement(w,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=a(14),ee=a(32),te=a(7);$.b.add(ee.a,te.f,te.c,te.j,te.b,te.i,te.a,te.h,te.g,te.d,te.e),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports={overviewContainer:"EventContainer_overviewContainer__26ta6",dates:"EventContainer_dates__3sRK5",eventCard:"EventContainer_eventCard__nQif8",eventHeader:"EventContainer_eventHeader__UjdNS",eventCardArrow:"EventContainer_eventCardArrow__SNsMo",eventCardSummary:"EventContainer_eventCardSummary__1G4ZU",logo:"EventContainer_logo__2PB4V",eventDetails:"EventContainer_eventDetails__35RKm",visible:"EventContainer_visible__JhLQc"}},9:function(e,t,a){e.exports={container:"TripCard_container__TkiBh",header:"TripCard_header__1NQ24",main:"TripCard_main__2D9iz",title:"TripCard_title__1WQwz",dates:"TripCard_dates__ppRKl",detailsButton:"TripCard_detailsButton__3A2fE",summaryIcon:"TripCard_summaryIcon__1p5CB",summaryIconNumber:"TripCard_summaryIconNumber__SvMSm"}}},[[34,1,2]]]);
//# sourceMappingURL=main.127cca83.chunk.js.map