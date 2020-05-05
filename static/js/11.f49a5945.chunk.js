(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[11],{646:function(e,t,a){"use strict";a.r(t);var n=a(41),c=a.n(n),r=a(32),i=a(64),l=a(5),s=a(29),o=a.n(s),d=a(3),m=a(0),u=a.n(m),f=a(38),p=a.n(f),h=a(581);var v=u.a.memo((function(e){var t=e.stateCode,a=Object(m.useState)(!1),n=Object(l.a)(a,2),r=n[0],s=n[1],f=Object(m.useState)([]),v=Object(l.a)(f,2),E=v[0],g=v[1],b=Object(m.useState)([]),y=Object(l.a)(b,2),j=y[0],O=y[1];Object(m.useEffect)((function(){function e(){return(e=Object(i.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("https://api.covid19india.org/raw_data.json");case 3:a=e.sent,g(a.data.raw_data.filter((function(e){return e.statecode===t}))),s(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}r||function(){e.apply(this,arguments)}()}),[r,t]),Object(m.useEffect)((function(){O(function(e){var t=e.reduce((function(e,t){return e+t.contractedfromwhichpatientsuspected+", "}),"");t=t.replace(/\s+/g,"");var a=new Set(t.match(/[^,]+/g)),n=[],c=new Set,r=[];return e.forEach((function(e){var t=e.contractedfromwhichpatientsuspected.replace(/\s+/g,"").match(/[^,]+/g);if(t){var i="P"+e.patientnumber;c.add(i),n.push({id:i,group:a.has(i)?"source":"target",raw:e}),t.forEach((function(e){r.push({source:e,target:i})}))}})),r.forEach((function(e){c.has(e.source)||(n.push({id:e.source,group:"source",raw:e.source}),c.add(e.source))})),{nodes:n,links:r}}(E))}),[E]);var N=function(){var e=Object(m.useRef)();Object(m.useEffect)((function(){var t=e.current,a=document.getElementById("clusters").offsetWidth,n=a;t.d3Force("charge").strength(-60),t.d3Force("collision",d.i()),t.d3Force("x",d.j().strength(.3)),t.d3Force("y",d.k().strength(.3)),t.d3Force("box",(function(){for(var e=0,t=j.nodes.length;e<t;++e){var c=j.nodes[e];c.x=Math.max(-a,Math.min(a,c.x)),c.y=Math.max(-n,Math.min(n,c.y))}}))}),[]);var t=document.getElementById("clusters").offsetWidth,a=t;return u.a.createElement(h.a,{ref:e,width:t,height:a,graphData:j,nodeLabel:"id",nodeColor:function(e){return"source"===e.group?"#dc3545":"gray"},linkDirectionalParticleColor:function(){return"red"},linkDirectionalParticles:1,linkDirectionalParticleWidth:function(e){return"P"===e.source.id[0]?2:0},enableZoomPanInteraction:!1})};return Object(m.useEffect)((function(){p.a.render(u.a.createElement(N,null),document.getElementById("clusters"))}),[j]),u.a.createElement("div",{id:"clusters"})}),(function(){return!0}));var E=u.a.memo((function(e){var t=e.timeseries,a=e.arrayKey,n=Object(m.useState)([]),c=Object(l.a)(n,2),r=c[0],i=c[1],s=Object(m.useRef)();return Object(m.useEffect)((function(){i(t)}),[t]),Object(m.useEffect)((function(){if(r.length){var e=d.I(s.current),t=50,n=0,c=+e.attr("width")-0,i=+e.attr("height")-50,l=d.K("%e %b"),o=d.C().domain(r.map((function(e){return l(e.date)}))).range([n,c]).paddingInner(.33),m=d.D().domain([0,Math.max(1,d.w(r,(function(e){return e[a]})))]).range([i,t]),u=d.a(o).tickSize(0);e.select(".x-axis").style("transform","translateY(".concat(i,"px)")).call(u).call((function(e){return e.select(".domain").remove()})).selectAll("text").attr("y",0).attr("dy","1.5em").style("text-anchor","middle"),e.selectAll(".bar").data(r).join("path").attr("class","bar").attr("d",(function(e){return function(e,t,a,n,c,r){if(!n)return;void 0===r&&(r=1);var i=t-n+c;return["M",e,t,"L",e,i,"A",c,c,0,0,r,e+c,t-n,"L",e+a-c,t-n,"A",c,c,0,0,r,e+a,i,"L",e+a,t,"Z"].join(" ")}(o(l(e.date)),i,o.bandwidth(),i-m(e[a]),5)})).attr("fill",(function(e,t){return t<r.length-1?"#dc354590":"#dc3545"})),e.selectAll(".delta").data(r).join("text").attr("class","delta").attr("text-anchor","middle").attr("font-size","11px").attr("x",(function(e){return o(l(e.date))+o.bandwidth()/2})).attr("y",(function(e){return m(e[a])-6})).text((function(e){return e[a]})).append("tspan").attr("class","percent").attr("x",(function(e){return o(l(e.date))+o.bandwidth()/2})).attr("dy","-1.2em").text((function(e,t){return t&&r[t-1][a]?d.l("+.1%")((r[t][a]-r[t-1][a])/r[t-1][a]):""}))}}),[r,a]),u.a.createElement("div",{className:"DeltaBarGraph fadeInUp",style:{animationDelay:"0.8s"}},u.a.createElement("svg",{ref:s,width:"250",height:"250",viewBox:"0 0 250 250",preserveAspectRatio:"xMidYMid meet"},u.a.createElement("g",{className:"x-axis"}),u.a.createElement("g",{className:"y-axis"})))}),(function(){return!0}));var g=a(105),b=a(161),y=a(167),j=a(162),O=a(290);var N=function(e){var t=e.title,a=e.statistic,n=e.total,c=e.formula,r=e.date,i=e.description,l=e.className;return u.a.createElement("div",{className:"meta-item ".concat(l)},u.a.createElement("div",{className:"meta-item-top"},u.a.createElement("h3",null,t),u.a.createElement("span",{"data-tip":c,"data-event":"touchstart mouseover","data-event-off":"mouseleave","data-for":"stateMeta",onClick:function(e){return e.stopPropagation()}},u.a.createElement(O.a,null))),u.a.createElement("h1",null,a),u.a.createElement("h5",null,r),n&&u.a.createElement("h5",null,"India has ".concat(n," CPM")),u.a.createElement("p",null,i))},x=a(7),w=a(327),M=a(60),D=a(637),k=a(49);var C=function(e){var t=e.stateData,a=e.lastTestObject,n=e.population,c=e.lastSevenDaysData,r=e.totalData,i=t.confirmed,l=t.active,s=t.deaths,o=i-l-s,d=c[0].totalconfirmed,m=Object(w.a)(c[0].date,"dd MMM"),f=c[6].totalconfirmed,p=Object(w.a)(c[6].date,"dd MMM"),h=i/n*1e6,v=o/i*100,E=l/i*100,g=s/i*100,b=(null===a||void 0===a?void 0:a.totaltested)/n*1e6,y=(f-d)/d*100,j=r[0].confirmed/13329e5*1e6,O=isNaN(Object(M.a)(null===a||void 0===a?void 0:a.updatedon,"dd/MM/yyyy",new Date))?"":"As of ".concat(Object(w.a)(Object(M.a)(null===a||void 0===a?void 0:a.updatedon,"dd/MM/yyyy",new Date),"dd MMM"));return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"StateMeta population"},u.a.createElement(k.a,{place:"top",type:"dark",effect:"solid",multiline:!0,scrollHide:!0,globalEventOff:"click",id:"stateMeta"}),u.a.createElement("div",{className:"meta-item population fadeInUp"},u.a.createElement("h3",null,"Population"),u.a.createElement("h1",null,Object(x.f)(n))),u.a.createElement("div",{className:"alert"},u.a.createElement(D.a,null),u.a.createElement("div",{className:"alert-right"},"Based on 2019 population projection by NCP"," ",u.a.createElement("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank"},"report")))),u.a.createElement("div",{className:"StateMeta"},u.a.createElement(N,{className:"confirmed",title:"Confirmed Per Million",statistic:h.toFixed(2),total:j.toFixed(2),formula:"(confirmed / state population) * 1 Million",description:"\n            ".concat(Math.round(h)," out of every 1 million people in ").concat(t.state," have tested positive for the virus.\n            ")}),u.a.createElement(N,{className:"active",title:"Active",statistic:"".concat(E.toFixed(2),"%"),formula:"(active / confirmed) * 100",description:"For every 100 confirmed cases, ".concat(E.toFixed(0)," are currently infected.")}),u.a.createElement(N,{className:"recovery",title:"Recovery Rate",statistic:"".concat(v.toFixed(2),"%"),formula:"(recovered / confirmed) * 100",description:"For every 100 confirmed cases, \n            ".concat(Math.round(v.toFixed(0))," have recovered from the virus.")}),u.a.createElement(N,{className:"mortality",title:"Mortality Rate",statistic:"".concat(g.toFixed(2),"%"),formula:"(deceased / confirmed) * 100",description:"For every 100 confirmed cases, \n            ".concat(Math.round(g.toFixed(0))," have unfortunately passed away from the virus.")}),u.a.createElement(N,{className:"gr",title:"Avg. Growth Rate",statistic:y>0?"".concat(Math.round(y/7),"%"):"-",formula:"(((previousDayData - sevenDayBeforeData) / sevenDayBeforeData) * 100)/7",date:"".concat(m," - ").concat(p),description:"In the last one week, the number of new infections has grown by an average of ".concat(Math.round(y/7),"% every day.")}),u.a.createElement(N,{className:"tpm",title:"Tests Per Million",statistic:"\u2248 ".concat(Math.round(b)),formula:"(total tests in state / total population of state) * 1 Million",date:O,description:"For every 1 million people in ".concat(t.state,",\n            ").concat(Math.round(b)," people were tested.")})))},S=a(168),F=a(2),_=a(580),I=a(86),P=a(311),U=a(309),A=a(638),R=a(62),T=a(10),B=a(37),L=a(636),X=a(99);var z=u.a.memo((function(e){var t=e.stateName,a=e.stateCode,n=e.fetched,c=e.allStateData;return u.a.createElement("div",{className:"breadcrumb"},u.a.createElement(_.a,null,u.a.createElement(_.a.Item,{href:"/"},"Home"),u.a.createElement(_.b,{direction:"w"},u.a.createElement("summary",null,u.a.createElement(_.a.Item,{href:"".concat(a),selected:!0},t),u.a.createElement(_.b.Caret,{className:"caret"})),n&&u.a.createElement(_.b.Menu,{direction:"se"},c.map((function(e){return u.a.createElement(_.b.Item,{key:e.statecode,className:"item"},u.a.createElement(T.b,{to:"".concat(e.statecode)},F.g[e.statecode]))}))))))}));t.default=u.a.memo((function(e){var t=Object(B.i)().stateCode.toUpperCase(),a=F.g[t],n=Object(m.useState)({}),s=Object(l.a)(n,2),d=s[0],f=s[1],p=Object(m.useState)(!1),h=Object(l.a)(p,2),O=h[0],N=h[1],k=Object(m.useState)(null),_=Object(l.a)(k,2),T=_[0],H=_[1],W=Object(m.useState)({}),K=Object(l.a)(W,2),G=K[0],J=K[1],V=Object(m.useState)(null),Y=Object(l.a)(V,2),Z=Y[0],q=Y[1],Q=Object(m.useState)({}),$=Object(l.a)(Q,2),ee=$[0],te=$[1],ae=Object(m.useState)({}),ne=Object(l.a)(ae,2),ce=ne[0],re=ne[1],ie=Object(m.useState)({}),le=Object(l.a)(ie,2),se=le[0],oe=le[1],de=Object(m.useState)("confirmed"),me=Object(l.a)(de,2),ue=me[0],fe=me[1],pe=Object(L.a)(),he=Object(l.a)(pe,2),ve=he[0],Ee=he[1].width,ge=Object(m.useState)(!1),be=Object(l.a)(ge,2),ye=be[0],je=be[1],Oe=Object(m.useState)({state:a}),Ne=Object(l.a)(Oe,2),xe=Ne[0],we=Ne[1];Object(X.a)((function(){ke(t)}));var Me,De,ke=function(){var e=Object(i.a)(c.a.mark((function e(t){var n,i,s,d,m,u,p,h,v,E,g,b,y,j,O;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([o.a.get("https://api.covid19india.org/data.json"),o.a.get("https://api.covid19india.org/state_district_wise.json"),o.a.get("https://api.covid19india.org/states_daily.json"),o.a.get("https://api.covid19india.org/state_test_data.json"),o.a.get("https://api.covid19india.org/sources_list.json"),o.a.get("https://api.covid19india.org/zones.json")]);case 3:n=e.sent,i=Object(l.a)(n,6),s=i[0].data,d=i[1].data,m=i[2].data,u=i[3].data,p=i[4].data,h=i[5].data,v=F.g[t],E=s.statewise,f(E.filter((function(e){return e.statecode!==t}))),q([E.find((function(e){return e.statecode===t}))]),g=Object(x.l)(m)[t],b=Object(x.k)(u.states_tested_data)[t],y=Object(x.i)(Object(r.a)({},t,g),Object(r.a)({},t,b)),J(y[t]),oe(Object(r.a)({},v,d[v])),j=p.sources_list,re(j.filter((function(e){return e.statecode===t}))),O=u.states_tested_data,te(O.filter((function(e){return e.state===v&&""!==e.totaltested}))),H(Object(x.j)(h.zones,a)),N(!0),Object(I.a)({targets:".highlight",duration:200,delay:3e3,translateX:"confirmed"===ue?"".concat(0*Ee,"px"):"active"===ue?"".concat(.25*Ee,"px"):"recovered"===ue?"".concat(.5*Ee,"px"):"deceased"===ue?"".concat(.75*Ee,"px"):"0px",easing:"spring(1, 80, 90, 10)",opacity:1}),e.next=32;break;case 29:e.prev=29,e.t0=e.catch(0),console.log(e.t0);case 32:case"end":return e.stop()}}),e,null,[[0,29]])})));return function(t){return e.apply(this,arguments)}}(),Ce=ee[ee.length-1],Se=F.j[a],Fe=function(){var e=window.innerWidth>=540?3:2,t=se[a]&&Object.keys(se[a].districtData).length||0;return Math.ceil(t/e)}();return a?u.a.createElement(u.a.Fragment,null,u.a.createElement(R.a,null,u.a.createElement("title",null,"Coronavirus Outbreak in ",F.g[t]," - covid19india.org"),u.a.createElement("meta",{name:"title",content:"Coronavirus Outbreak in ".concat(F.g[t],": Latest Map and Case Count")})),u.a.createElement("div",{className:"State"},u.a.createElement("div",{className:"state-left"},u.a.createElement(z,{stateName:a,stateCode:t,fetched:O,allStateData:d}),u.a.createElement("div",{className:"header"},u.a.createElement("div",{className:"header-left fadeInUp",style:{animationDelay:"0.3s"}},u.a.createElement("h1",null,a),u.a.createElement("h5",null,"Last Updated on"," ",Z&&Object.keys(Z[0]).length?Object(x.e)(Z[0].lastupdatedtime):"")),u.a.createElement("div",{className:"header-right fadeInUp",style:{animationDelay:"0.5s"}},u.a.createElement("h5",null,"Tested"),u.a.createElement("h2",null,Object(x.f)(null===Ce||void 0===Ce?void 0:Ce.totaltested)),u.a.createElement("h5",{className:"timestamp"},isNaN(Object(M.a)(null===Ce||void 0===Ce?void 0:Ce.updatedon,"dd/MM/yyyy",new Date))?"":"As of ".concat(Object(w.a)(Object(M.a)(null===Ce||void 0===Ce?void 0:Ce.updatedon,"dd/MM/yyyy",new Date),"dd MMM"))),u.a.createElement("h5",null,"per ",(null===Ce||void 0===Ce?void 0:Ce.totaltested)&&u.a.createElement("a",{href:Ce.source,target:"_noblank"},"source")))),O&&u.a.createElement("div",{className:"map-switcher",ref:ve},u.a.createElement("div",{className:"highlight ".concat(ue),style:{transform:"translateX(".concat(0*Ee,"px)"),opacity:0}}),u.a.createElement("div",{className:"clickable",onClick:function(){fe("confirmed"),Object(I.a)({targets:".highlight",translateX:"".concat(0*Ee,"px"),easing:"spring(1, 80, 90, 10)"})}}),u.a.createElement("div",{className:"clickable",onClick:function(){fe("active"),Object(I.a)({targets:".highlight",translateX:"".concat(.25*Ee,"px"),easing:"spring(1, 80, 90, 10)"})}}),u.a.createElement("div",{className:"clickable",onClick:function(){fe("recovered"),Object(I.a)({targets:".highlight",translateX:"".concat(.5*Ee,"px"),easing:"spring(1, 80, 90, 10)"})}}),u.a.createElement("div",{className:"clickable",onClick:function(){fe("deceased"),Object(I.a)({targets:".highlight",translateX:"".concat(.75*Ee,"px"),easing:"spring(1, 80, 90, 10)"})}})),O&&u.a.createElement(b.a,{data:Z[0]}),O&&u.a.createElement(j.a,{timeseries:G}),O&&u.a.createElement(y.a,{mapName:a,states:Z,districts:se,zones:T,stateTestData:ee,regionHighlighted:xe,setRegionHighlighted:we,mapOption:ue,isCountryLoaded:!1}),O&&u.a.createElement("div",{className:"meta-secondary"},u.a.createElement("div",{className:"alert"},u.a.createElement(P.a,null),u.a.createElement("div",{className:"alert-right"},"Awaiting district details for"," ",(null===(Me=se[a])||void 0===Me||null===(De=Me.districtData.Unknown)||void 0===De?void 0:De.confirmed)||"0"," ","cases")),u.a.createElement("div",{className:"alert"},u.a.createElement(D.a,null),u.a.createElement("div",{className:"alert-right"},"Data collected from sources"," ",ce.length>0?Object.keys(ce[0]).map((function(e,t){if(e.match("source")&&""!==ce[0][e]){var a=e.match(/\d+/);return u.a.createElement(u.a.Fragment,{key:t},a>1?",":"",u.a.createElement("a",{href:ce[0][e]},a))}return null})):""))),O&&u.a.createElement(C,{stateData:Z[0],lastTestObject:Ce,population:Se,lastSevenDaysData:G.slice(-7),totalData:d.filter((function(e){return"TT"===e.statecode}))})),u.a.createElement("div",{className:"state-right"},O&&u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"district-bar",style:ye?{}:{display:"flex"}},u.a.createElement("div",{className:"district-bar-left fadeInUp",style:{animationDelay:"0.6s"}},u.a.createElement("h2",null,"Top districts"),u.a.createElement("div",{className:"districts ".concat(ye?"is-grid":""),style:ye?{gridTemplateRows:"repeat(".concat(Fe,", 2rem)")}:{}},se[a]?Object.keys(se[a].districtData).filter((function(e){return"Unknown"!==e})).sort((function(e,t){return se[a].districtData[t].confirmed-se[a].districtData[e].confirmed})).slice(0,ye?void 0:5).map((function(e,t){return u.a.createElement("div",{key:t,className:"district"},u.a.createElement("h2",null,se[a].districtData[e].confirmed),u.a.createElement("h5",null,e),u.a.createElement("div",{className:"delta"},u.a.createElement(U.a,null),u.a.createElement("h6",null,se[a].districtData[e].delta.confirmed)))})):""),se[a]&&Object.keys(se[a].districtData).length>5&&u.a.createElement("button",{className:"button",onClick:function(){je(!ye)}},ye?"View less":"View all")),u.a.createElement("div",{className:"district-bar-right"},u.a.createElement("div",{className:"happy-sign fadeInUp",style:{animationDelay:"0.6s"}},G.slice(-5).every((function(e){return 0===e.dailyconfirmed}))&&u.a.createElement("div",{className:"alert is-green"},u.a.createElement(A.a,null),u.a.createElement("div",{className:"alert-right"},"No new confirmed cases in the past five days"))),u.a.createElement(E,{timeseries:G.slice(-5),arrayKey:"dailyconfirmed"}))),!1,u.a.createElement(S.a,{timeseries:G}))),u.a.createElement("div",{className:"state-left"},u.a.createElement("div",{className:"Clusters fadeInUp",style:{animationDelay:"0.8s"}},u.a.createElement("h1",null,"Network of Transmission"),u.a.createElement(v,{stateCode:t}))),u.a.createElement("div",{className:"state-right"})),u.a.createElement(g.a,null)):u.a.createElement(B.a,{to:"/"})}))}}]);
//# sourceMappingURL=11.f49a5945.chunk.js.map