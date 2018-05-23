webpackJsonp([1],{126:function(t,e,a){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var r=[0,0,1.88,1.023,.729,.577,.483,.419,.373,.337,.308],i=[0,0,2.659,1.954,1.628,1.427,1.287,1.182,1.099,1.032,.975,.927,.886,.85,.817,.789],o=[0,0,0,0,0,0,0,.076,.136,.184,.223],s=[0,0,3.267,2.575,2.282,2.115,2.004,1.924,1.864,1.816,1.777],l=[0,0,0,0,0,0,.03,.118,.185,.239,.284,.321,.354,.382,.406,.428],c=[0,0,3.267,2.568,2.266,2.089,1.97,1.882,1.815,1.761,1.716,1.679,1.646,1.618,1.594,1.572],u={lineTension:0,pointRadius:0,borderColor:"#ee2b47",borderWidth:2,fill:"+1"},d={lineTension:0,pointRadius:0,fill:!1},h={lineTension:0,pointRadius:3,pointHoverRadius:6,borderWidth:2,borderColor:"#003459",pointBorderWidth:0,pointBackgroundColor:"#259f6c",fill:!1},f=function(t,e){return Array(e).fill(t)},p=function(t,e,a){return a.map(function(a,n){return a>t||a<e?"#f54d42":"#259f6c"})},v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.reduce(function(t,e){return t+e})/(t.length-e)},m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return v(t.map(function(e){return Math.pow(e-v(t),2)}),e)},g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.sqrt(m(t,e))};e.xbar_rbar=function(t){var e=t[0].length,a=t.length,i=[],o=[],s=!0,l=!1,c=void 0;try{for(var m,g=t[Symbol.iterator]();!(s=(m=g.next()).done);s=!0){var b=m.value;i.push(Math.max.apply(Math,n(b))-Math.min.apply(Math,n(b))),o.push(v(b))}}catch(t){l=!0,c=t}finally{try{!s&&g.return&&g.return()}finally{if(l)throw c}}var y=v(i),_=v(o),O=_-r[e]*y,A=_+r[e]*y;return{title:"XBAR Rbar",ticks:{ucl:A,center:_,lcl:O},datasets:[Object.assign({},h,{data:o,pointBackgroundColor:p(A,O,o)}),Object.assign({},d,{data:f(_,a)}),Object.assign({},u,{data:f(A,a)}),Object.assign({},u,{data:f(O,a)})]}},e.xbar_sbar=function(t){var e=t[0].length,a=t.length,n=[],r=[],o=!0,s=!1,l=void 0;try{for(var c,m=t[Symbol.iterator]();!(o=(c=m.next()).done);o=!0){var b=c.value;r.push(g(b,1)),n.push(v(b))}}catch(t){s=!0,l=t}finally{try{!o&&m.return&&m.return()}finally{if(s)throw l}}var y=v(r),_=v(n),O=_-i[e]*y,A=_+i[e]*y;return{title:"XBAR Sbar",ticks:{ucl:A,center:_,lcl:O},datasets:[Object.assign({},h,{data:n,pointBackgroundColor:p(A,O,n)}),Object.assign({},d,{data:f(_,a)}),Object.assign({},u,{data:f(A,a)}),Object.assign({},u,{data:f(O,a)})]}},e.rbar=function(t){var e=t[0].length,a=t.length,r=t.map(function(t){return Math.max.apply(Math,n(t))-Math.min.apply(Math,n(t))}),i=v(r),l=o[e]*i,c=s[e]*i;return{title:"Rbar",ticks:{ucl:c,center:i,lcl:l},datasets:[Object.assign({},h,{data:r,pointBackgroundColor:p(c,l,r)}),Object.assign({},d,{data:f(i,a)}),Object.assign({},u,{data:f(c,a)}),Object.assign({},u,{data:f(l,a)})]}},e.sbar=function(t){var e=t[0].length,a=t.length,n=t.map(function(t){return g(t,1)}),r=v(n),i=l[e]*r,o=c[e]*r;return{title:"Sbar",ticks:{ucl:o,center:r,lcl:i},datasets:[Object.assign({},h,{data:n,pointBackgroundColor:p(o,i,n)}),Object.assign({},d,{data:f(r,a)}),Object.assign({},u,{data:f(o,a)}),Object.assign({},u,{data:f(i,a)})]}},e.ewma=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.2;Array.isArray(t[0])&&(t=t.map(function(t){return v(t)}));for(var a=t.length,n=v(t),r=[],i=0;i<a-1;i++)r.push(Math.abs(t[i]-t[i+1]));var o=v(r)/1.128,s=[],l=n,c=!0,p=!1,m=void 0;try{for(var g,b=t[Symbol.iterator]();!(c=(g=b.next()).done);c=!0){var y=g.value;s.push(e*y+(1-e)*l),l=s[s.length-1]}}catch(t){p=!0,m=t}finally{try{!c&&b.return&&b.return()}finally{if(p)throw m}}for(var _=[],O=[],A=1;A<a+1;A++)_.push(n-3*o*Math.sqrt(e/(2-e)*(1-Math.pow(1-e,2*A)))),O.push(n+3*o*Math.sqrt(e/(2-e)*(1-Math.pow(1-e,2*A))));return{title:"EWMA",ticks:{ucl:O[0],center:n,lcl:_[0]},datasets:[Object.assign({},h,{data:s}),Object.assign({},d,{data:f(n,a)}),Object.assign({},u,{steppedLine:!0,data:O}),Object.assign({},u,{fills:"-1",steppedLine:!0,data:_})]}},e.cusum=function(t){Array.isArray(t[0])&&(t=t.map(function(t){return v(t)}));for(var e=t.length,a=v(t),n=[],r=0;r<e-1;r++)n.push(Math.abs(t[r]-t[r+1]));var i=v(n)/1.128,o=i/2,s=[],l=[],c=0,m=0,g=!0,b=!1,y=void 0;try{for(var _,O=t[Symbol.iterator]();!(g=(_=O.next()).done);g=!0){var A=_.value;s.push(Math.max(0,A-(a+o)+c)),l.push(Math.min(0,A-(a-o)+m)),c=s[s.length-1],m=l[l.length-1]}}catch(t){b=!0,y=t}finally{try{!g&&O.return&&O.return()}finally{if(b)throw y}}var w=-4*i,M=4*i;return{title:"CUSUM",ticks:{ucl:M,center:0,lcl:w},datasets:[Object.assign({},h,{data:s,pointBackgroundColor:p(M,w,s)}),Object.assign({},h,{data:l,pointBackgroundColor:p(M,w,l)}),Object.assign({},d,{data:f(0,e)}),Object.assign({},u,{data:f(M,e)}),Object.assign({},u,{data:f(w,e)})]}}},127:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.alarm=void 0;var n=a(128),r=function(t){return t&&t.__esModule?t:{default:t}}(n);e.alarm=r.default},128:function(t,e,a){t.exports=a.p+"static/media/alarm.deceb4ae.svg"},129:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.options=function(t){var e=t.ticks,a=t.title,n=t.datasets;return{responsive:!1,maintainAspectRatio:!1,type:"line",data:{labels:t.labels,datasets:n},title:{display:!0,text:a},options:{legend:{display:!1},layout:{padding:{top:10,bottom:10}},scales:{yAxes:[{gridLines:{display:!1},afterBuildTicks:function(t){t.ticks=[],t.ticks.push(e.ucl),t.ticks.push(e.center),t.ticks.push(e.lcl)}}],xAxes:[{gridLines:{display:!1}}]},animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0}}},e.description={"XBAR Rbar":"If the sample size is relatively small (say equal to or less than 10), we can use the range instead of the standard deviation of a sample to construct control charts on X and the range, R. The range of a sample is simply the difference between the largest and smallest observation.","XBAR Sbar":"X-s chart is very similar to the  X-R chart. The major difference is that the subgroup standard deviation is plotted when using the  X-s chart, while the subgroup range is plotted when using the  X-R chart. One advantage of using the standard deviation instead of the range is that the standard deviation takes into account all the data, not just the maximum and the minimum. As for the  X-R chart, frequent data and a method of rationally subgrouping the data are required to use the Xbar-s chart.",EWMA:"The Exponentially Weighted Moving Average (EWMA) is a statistic for monitoring the process that averages the data in a way that gives less and less weight to data as they are further removed in time.",CUSUM:"CUSUM charts, while not as intuitive and simple to operate as Shewhart charts, have been shown to be more efficient in detecting small shifts in the mean of a process. In particular, analyzing Average Run Length for CUSUM control charts shows that they are better than Shewhart control charts when it is desired to detect shifts in the mean that are 2 sigma or less."}},130:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),r=a(131),i=a(132),o=function(t){return t&&t.__esModule?t:{default:t}}(i),s=function(){return(0,n.h)("nav",{class:"navbar"},(0,n.h)("div",{class:"container"},(0,n.h)("div",{class:"navbar-brand"},(0,n.h)("div",{class:"navbar-item"},(0,n.h)("div",{class:"brand"},(0,n.h)("img",{class:"brand__logo",src:o.default,alt:"logo"}),(0,n.h)("h1",{class:"brand__title has-text-white"},"SPC online")))),(0,n.h)("div",{class:"navbar-end"},(0,n.h)(r.Link,{class:"navbar-item",href:"https://github.com/carlosqsilva/ccharts-online"},"Github"))))},l=function(){return(0,n.h)("section",{className:"hero is-dark"},(0,n.h)("div",{className:"hero-head"},(0,n.h)(s,null)),(0,n.h)("div",{className:"hero-body"},(0,n.h)("div",{className:"container has-text-centered"},(0,n.h)("h1",{className:"title is-spaced"},"What is this!?"),(0,n.h)("h2",{className:"subtitle"},"The control chart is one of the seven basic tools of quality control. Typically control charts are used for time-series data, though they can be used for data that have logical comparability (i.e. you want to compare samples that were taken all at the same time, or the performance of different individuals); however the type of chart used to do this requires consideration."," ",(0,n.h)(r.Link,{href:"https://en.wikipedia.org/wiki/Control_chart"},"- Wikipedia")))))};e.default=l},131:function(t,e,a){"use strict";function n(t,e){var a={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n]);return a}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},i=a(3),o=function(t){var e=t.children,a=n(t,["children"]);return(0,i.h)("a",r({},a,{target:"_blank",rel:"noopener noreferrer"}),e)};e.Link=o},132:function(t,e,a){t.exports=a.p+"static/media/logo.02b7579e.svg"},133:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),r=a(8),i=a(30),o=a(31),s=a(134),l=function(t){var e=t.toggleModal,a=t.readFile,r=t.loadSample,i=t.setHeader,l=t.setDelimiter,c=t.setDecimal,u=t.closed,d=t.columns,h=t.data,f=["Delimiter","Comma","empty space","Colon","Semicolon"],p=["Decimal",'Option "."','Option ","'];return(0,n.h)("div",{class:"modal "+(!u&&"is-active")},(0,n.h)("div",{class:"modal-background"}),(0,n.h)("div",{class:"modal-card"},(0,n.h)("header",{class:"modal-card-head"},(0,n.h)("p",{class:"modal-card-title"},"Import your data (.csv or .txt)"),(0,n.h)("button",{class:"delete",onClick:e,"aria-label":"close"})),(0,n.h)("section",{class:"modal-card-body"},(0,n.h)("div",{class:"level is-mobile"},(0,n.h)("div",{class:"level-left"},(0,n.h)("div",{class:"level-item"},(0,n.h)(o.FileInput,{handleChange:a},"Choose a file")),(0,n.h)("div",{class:"level-item"},(0,n.h)(o.Select,{options:f,handleChange:l})),(0,n.h)("div",{class:"level-item"},(0,n.h)(o.Select,{options:p,handleChange:c})),(0,n.h)("div",{class:"level-item"},(0,n.h)(o.CheckBox,{handleClick:i},"Has header")),(0,n.h)("div",{class:"level-item"},(0,n.h)(o.Button,{handleClick:r,class:"is-dark"},"Import Example")))),(0,n.h)(s.DataTable,{data:h,columns:d}))))},c=function(t){var e=t.data;return{closed:e.closed,columns:e.columns,data:e.data}},u={toggleModal:i.toggle_modal,readFile:i.loadData,setHeader:i.set_Header,setDelimiter:i.set_Delimiter,setDecimal:i.set_Decimal,loadSample:i.load_sample};e.default=(0,r.connect)(c,u)(l)},134:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DataTable=void 0;var n=a(3);e.DataTable=function(t){var e=t.columns,a=t.data;return a?(0,n.h)("table",{class:"table is-striped is-narrow is-hoverable is-fullwidth"},(0,n.h)("thead",null,(0,n.h)("tr",null,e.map(function(t,e){return(0,n.h)("th",{key:e},t)}))),(0,n.h)("tbody",null,a.map(function(t,e){return(0,n.h)("tr",{key:e},(0,n.h)("th",{key:e},e),t.map(function(t,e){return(0,n.h)("td",{key:e},t)}))}))):null}},135:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),r=function(){return(0,n.h)("footer",{class:"footer"},(0,n.h)("div",{class:"container"},(0,n.h)("div",{class:"content has-text-centered"},(0,n.h)("p",null,(0,n.h)("strong",null,"SPC online")," by"," ",(0,n.h)("a",{href:"https://carloseng.com"},"Carlos Silva"),". This website is part of my other projects"," ",(0,n.h)("a",{href:"https://github.com/carlosqsilva/pyspc"},"pyspc"),", a python library for plottting statistical process control charts. The source code is licensed"," ",(0,n.h)("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),"."))))};e.default=r},25:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.TOGGLE_MODAL="TOGGLE_MODAL",e.DATA_LOADED="DATA_LOADED",e.UPDATE_HEADER="UPDATE_HEADER",e.UPDATE_DELIMITER="UPDATE_DELIMITER",e.UPDATE_DECIMAL="UPDATE_DECIMAL",e.SET_CHART="SET_CHART",e.DISPLAY_ALARM="DISPLAY_ALARM"},30:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.load_sample=e.plot_Chart=e.set_Header=e.set_Decimal=e.set_Delimiter=e.loadData=e.toggle_modal=void 0;var n=a(126),r=a(25),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}(r),o=(e.toggle_modal=function(){return{type:i.TOGGLE_MODAL}},function(t,e,a){return{type:i.DATA_LOADED,data:t,columns:e,dataString:a}}),s=function(t,e,a){return{type:i.UPDATE_HEADER,data:t,columns:e,header:a}},l=function(t,e,a){return{type:i.UPDATE_DELIMITER,data:t,columns:e,delimiter:a}},c=function(t,e,a){return{type:i.UPDATE_DECIMAL,data:t,columns:e,decimal:a}},u=function(t,e,a,n){return{type:i.SET_CHART,datasets:t,labels:e,title:a,ticks:n}},d=function(t){return{type:i.DISPLAY_ALARM,display:t}},h=function(t,e,a,n){var r=["__"],i=t.trim().split(/\n/).map(function(t){return t.split(e).filter(function(t){return t.length>0})});return n?(r=r.concat(i[0].map(function(t){return t.trim()})),i=i.slice(1)):r=r.concat(i[0].map(function(t,e){return"X"+e})),i=i.map(function(t){return t.map(function(t){return Number(t.trim().replace(a,"."))})}),{data:i,columns:r}},f=function(t){return new Promise(function(e,a){var n=new FileReader;n.onload=function(t){e(n.result)},n.readAsText(t)})};e.loadData=function(t){return function(e,a){var n=t.target.files[0],r=a().data,i=r.delimiter,s=r.decimal,l=r.header;f(n).then(function(t){var a=h(t,i,s,l);e(o(a.data,a.columns,t))})}},e.set_Delimiter=function(t){return function(e,a){var n=[",",","," ",":",";"][t.target.selectedIndex],r=a().data,i=r.dataString,o=r.decimal,s=r.header,c=h(i,n,o,s);e(l(c.data,c.columns,n))}},e.set_Decimal=function(t){return function(e,a){var n=[".",".",","][t.target.selectedIndex],r=a().data,i=r.dataString,o=r.delimiter,s=r.header,l=h(i,o,n,s);e(c(l.data,l.columns,n))}},e.set_Header=function(t){return function(t,e){var a=e().data,n=a.dataString,r=a.delimiter,i=a.decimal,o=a.header,l=h(n,r,i,!o);t(s(l.data,l.columns,!o))}},e.plot_Chart=function(t){return function(e,a){var r=[null,n.xbar_rbar,n.xbar_sbar,n.rbar,n.sbar,n.ewma,n.cusum][t.target.selectedIndex],i=a().data.data;if(i){if(r){var o=i.map(function(t,e){return e+1}),s=r(i),l=s.datasets,c=s.title,h=s.ticks;e(u(l,o,c,h))}}else e(d(!0))}},e.load_sample=function(){return function(t){fetch("https://raw.githubusercontent.com/carlosqsilva/ccharts-online/master/arquivo.csv").then(function(t){return t.text()}).then(function(e){var a=h(e,",",".",!0);t(o(a.data,a.columns,e))})}}},31:function(t,e,a){"use strict";function n(t,e){var a={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n]);return a}Object.defineProperty(e,"__esModule",{value:!0}),e.Select=e.FileInput=e.CheckBox=e.Button=void 0;var r=a(3),i=function(t){var e=t.handleClick,a=t.children,i=n(t,["handleClick","children"]);return(0,r.h)("a",{onClick:e,class:"button "+i.class},a)};e.Button=i;e.CheckBox=function(t){var e=t.handleClick,a=t.children;return(0,r.h)("label",{class:"checkbox"},(0,r.h)("input",{onClick:e,type:"checkbox"}),a)},e.FileInput=function(t){var e=t.handleChange,a=t.children;return(0,r.h)("div",{class:"file"},(0,r.h)("label",{class:"file-label"},(0,r.h)("input",{class:"file-input",type:"file",onChange:e,accept:".csv,.txt",name:"resume"}),(0,r.h)("span",{class:"file-cta"},(0,r.h)("span",{class:"file-label"},a))))},e.Select=function(t){var e=t.options,a=t.handleChange;return(0,r.h)("div",{class:"select"},(0,r.h)("select",{onChange:a},e.map(function(t,e){return(0,r.h)("option",{key:e},t)})))}},32:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=a(3),i=a(8),o=a(11),s=a(72),l=n(s),c=a(73),u=n(c),d=a(74),h=n(d);a(75);var f=a(77),p=(0,o.createStore)(u.default,(0,o.applyMiddleware)(l.default)),v=function(){return(0,r.h)("div",null,(0,r.h)(f.Header,null),(0,r.h)(f.Modal,null),(0,r.h)(f.Chart,null),(0,r.h)(f.Footer,null))};(0,r.render)((0,r.h)(i.Provider,{store:p},(0,r.h)(v,null)),document.body),(0,h.default)()},73:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(25),r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}(n),i=a(11),o={closed:!0,delimiter:",",decimal:".",dataString:"",data:!1,header:!1,columns:[]},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments[1];switch(e.type){case r.TOGGLE_MODAL:return Object.assign({},t,{closed:!t.closed});case r.DATA_LOADED:return Object.assign({},t,{data:e.data,columns:e.columns,dataString:e.dataString});case r.UPDATE_HEADER:return Object.assign({},t,{data:e.data,columns:e.columns,header:e.header});case r.UPDATE_DELIMITER:return Object.assign({},t,{data:e.data,columns:e.columns,delimiter:e.delimiter});case r.UPDATE_DECIMAL:return Object.assign({},t,{data:e.data,columns:e.columns,decimal:e.decimal});default:return t}},l={labels:[1,2,3,4],datasets:[],title:"",ticks:{ucl:12,center:10,lcl:8},displayChart:!1,displayAlarm:!1},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments[1];switch(e.type){case r.SET_CHART:return Object.assign({},t,{labels:e.labels,datasets:e.datasets,title:e.title,ticks:e.ticks,displayChart:!0,displayAlarm:!1});case r.DISPLAY_ALARM:return Object.assign({},t,{displayAlarm:e.display});default:return t}},u=(0,i.combineReducers)({data:s,plot:c});e.default=u},74:function(t,e,a){"use strict";function n(){if("serviceWorker"in navigator){if(new URL("/ccharts-online",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="/ccharts-online/service-worker.js";s?i(t):r(t)})}}function r(t){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var e=t.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(t){console.error("Error during service worker registration:",t)})}function i(t){fetch(t).then(function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):r(t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}function o(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n,e.unregister=o;var s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},75:function(t,e){},77:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Footer=e.Modal=e.Header=e.Chart=void 0;var r=a(78),i=n(r),o=a(130),s=n(o),l=a(133),c=n(l),u=a(135),d=n(u);e.Chart=i.default,e.Header=s.default,e.Modal=c.default,e.Footer=d.default},78:function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),s=a(3),l=a(8),c=a(79),u=function(t){return t&&t.__esModule?t:{default:t}}(c),d=a(30),h=a(127),f=a(31),p=a(129),v=function(t){function e(){var t,a,i,o;n(this,e);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return a=i=r(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(l))),i.options=["Charts","Xbar_Rbar","Xbar_Sbar","Rbar","Sbar","Ewma","Cusum"],i.downloadChart=function(t){var e=t.target;e.href=i.chart.toDataURL(),e.download="Chart.png"},o=a,r(i,o)}return i(e,t),o(e,[{key:"componentDidMount",value:function(){this.render_chart()}},{key:"componentDidUpdate",value:function(){this.chart_instance.destroy(),this.render_chart()}},{key:"render_chart",value:function(){var t=this.props.plot;this.chart_instance=new u.default(this.chart,Object.assign({},(0,p.options)(t)))}},{key:"render",value:function(t){var e=this,a=t.toggleModal,n=t.plotChart,r=t.plot,i=r.displayChart,o=r.displayAlarm,l=r.title;return(0,s.h)("section",{class:"section"},(0,s.h)("div",{class:"container"},(0,s.h)("div",{class:"level is-mobile"},(0,s.h)("div",{class:"level-left"},(0,s.h)("div",{class:"level-item"},(0,s.h)(f.Button,{handleClick:a},"Import Data")),(0,s.h)("div",{class:"level-item"},(0,s.h)(f.Select,{options:this.options,handleChange:n})),i&&(0,s.h)("a",{class:"button",onClick:this.downloadChart},"Download"),o&&(0,s.h)("div",{class:"alarm"},(0,s.h)("img",{src:h.alarm,alt:"Alarm"})," You firts need to import a dataset."))),(0,s.h)("canvas",{class:"canvas",ref:function(t){return e.chart=t}}),i&&(0,s.h)("div",{class:"information"},p.description[l])))}}]),e}(s.Component),m=function(t){return{plot:t.plot}},g={toggleModal:d.toggle_modal,plotChart:d.plot_Chart};e.default=(0,l.connect)(m,g)(v)}},[32]);
//# sourceMappingURL=main.ce29efa7.js.map