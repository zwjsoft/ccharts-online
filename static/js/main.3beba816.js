webpackJsonp([5],{126:function(t,e,a){"use strict";var c=a(127),s=a(128),n=a(129);const i=c.a.A2,r=c.a.A3,o=c.a.B3,l=c.a.B4,d=c.a.D3,M=c.a.D4,j=async t=>{const e=t[0].length,a=t.length;let c=[],r=[];for(const s of t)c.push(Math.max(...s)-Math.min(...s)),r.push(Object(n.a)(s));const o=Object(n.a)(c),l=Object(n.a)(r),d=l-i[e]*o,M=l+i[e]*o;return{title:"XBAR Rbar",ticks:{ucl:M,center:l,lcl:d},datasets:[Object.assign({},s.c,{data:r,pointBackgroundColor:Object(n.b)(M,d,r)}),Object.assign({},s.b,{data:Object(n.c)(l,a)}),Object.assign({},s.a,{data:Object(n.c)(M,a)}),Object.assign({},s.a,{data:Object(n.c)(d,a)})]}},u=async t=>{const e=t[0].length,a=t.length;let c=[],i=[];for(const s of t)i.push(Object(n.e)(s,1)),c.push(Object(n.a)(s));const o=Object(n.a)(i),l=Object(n.a)(c),d=l-r[e]*o,M=l+r[e]*o;return{title:"XBAR Sbar",ticks:{ucl:M,center:l,lcl:d},datasets:[Object.assign({},s.c,{data:c,pointBackgroundColor:Object(n.b)(M,d,c)}),Object.assign({},s.b,{data:Object(n.c)(l,a)}),Object.assign({},s.a,{data:Object(n.c)(M,a)}),Object.assign({},s.a,{data:Object(n.c)(d,a)})]}},b=async t=>{const e=t[0].length,a=t.length,c=t.map(t=>Math.max(...t)-Math.min(...t)),i=Object(n.a)(c),r=d[e]*i,o=M[e]*i;return{title:"Rbar",ticks:{ucl:o,center:i,lcl:r},datasets:[Object.assign({},s.c,{data:c,pointBackgroundColor:Object(n.b)(o,r,c)}),Object.assign({},s.b,{data:Object(n.c)(i,a)}),Object.assign({},s.a,{data:Object(n.c)(o,a)}),Object.assign({},s.a,{data:Object(n.c)(r,a)})]}},g=async t=>{const e=t[0].length,a=t.length,c=t.map(t=>Object(n.e)(t,1)),i=Object(n.a)(c),r=o[e]*i,d=l[e]*i;return{title:"Sbar",ticks:{ucl:d,center:i,lcl:r},datasets:[Object.assign({},s.c,{data:c,pointBackgroundColor:Object(n.b)(d,r,c)}),Object.assign({},s.b,{data:Object(n.c)(i,a)}),Object.assign({},s.a,{data:Object(n.c)(d,a)}),Object.assign({},s.a,{data:Object(n.c)(r,a)})]}},h=async(t,e=.2)=>{Array.isArray(t[0])&&(t=t.map(t=>Object(n.a)(t)));const a=t.length,c=Object(n.a)(t);let i=[];for(let s=0;s<a-1;s++)i.push(Math.abs(t[s]-t[s+1]));const r=Object(n.a)(i)/1.128;let o=[],l=c;for(const s of t)o.push(e*s+(1-e)*l),l=o[o.length-1];let d=[],M=[];for(let s=1;s<a+1;s++)d.push(c-3*r*Math.sqrt(e/(2-e)*(1-(1-e)**(2*s)))),M.push(c+3*r*Math.sqrt(e/(2-e)*(1-(1-e)**(2*s))));return{title:"EWMA",ticks:{ucl:M[0],center:c,lcl:d[0]},datasets:[Object.assign({},s.c,{data:o}),Object.assign({},s.b,{data:Object(n.c)(c,a)}),Object.assign({},s.a,{steppedLine:!0,data:M}),Object.assign({},s.a,{fills:"-1",steppedLine:!0,data:d})]}},O=async t=>{Array.isArray(t[0])&&(t=t.map(t=>Object(n.a)(t)));const e=t.length,a=Object(n.a)(t);let c=[];for(let s=0;s<e-1;s++)c.push(Math.abs(t[s]-t[s+1]));const i=Object(n.a)(c)/1.128,r=i/2;let o=[],l=[],d=0,M=0;for(const s of t)o.push(Math.max(0,s-(a+r)+d)),l.push(Math.min(0,s-(a-r)+M)),d=o[o.length-1],M=l[l.length-1];const j=-4*i,u=4*i,b=0;return{title:"CUSUM",ticks:{ucl:u,center:b,lcl:j},datasets:[Object.assign({},s.c,{data:o,pointBackgroundColor:Object(n.b)(u,j,o)}),Object.assign({},s.c,{data:l,pointBackgroundColor:Object(n.b)(u,j,l)}),Object.assign({},s.b,{data:Object(n.c)(b,e)}),Object.assign({},s.a,{data:Object(n.c)(u,e)}),Object.assign({},s.a,{data:Object(n.c)(j,e)})]}},m=async t=>{if(2!==t[0].length)throw new Error("Dataset not suitable for P-Chart.");const e=t.length;var a=Object(n.d)(t);const c=a[0],i=a[1].map((t,e)=>t/c[e]),r=Object(n.a)(i);if(!c.every(t=>t*r>=5&&t*(1-r)>=5))throw new Error("Dataset doesn't meet this conditions; n * pbar >= 5; n * (1 - pbar) >=5.");let o,l,d;if((d=Object(n.a)(c))===c[0]){let t=r-3*Math.sqrt(r*(1-r)/d),a=r+3*Math.sqrt(r*(1-r)/d);t<0&&(t=0),a>1&&(a=1),o=Object(n.c)(t,e),l=Object(n.c)(a,e)}else o=new Array(e),l=new Array(e),c.forEach((t,e)=>{o[e]=r-3*Math.sqrt(r*(1-r)/t),l[e]=r+3*Math.sqrt(r*(1-r)/t)});return{title:"P-Chart",ticks:{ucl:Array.isArray(l)?l[0]:l,center:r,lcl:Array.isArray(o)?o[0]:o},datasets:[Object.assign({},s.c,{data:i}),Object.assign({},s.b,{data:Object(n.c)(r,e)}),Object.assign({},s.a,{steppedLine:!0,data:l}),Object.assign({},s.a,{fills:"-1",steppedLine:!0,data:o})]}},p=async t=>{if(2!==t[0].length)throw new Error("Dataset not suitable for NP-Chart.");const e=t.length;var a=Object(n.d)(t);const c=a[0],i=a[1];if(Object(n.a)(c)!==c[0])throw new Error("The samples must have the same size for this chart");const r=Object(n.a)(i.map(t=>t/c[0])),o=Object(n.a)(i),l=o-3*Math.sqrt(o*(1-r)),d=o+3*Math.sqrt(o*(1-r));return{title:"NP-Chart",ticks:{ucl:d,center:o,lcl:l},datasets:[Object.assign({},s.c,{data:i}),Object.assign({},s.b,{data:Object(n.c)(o,e)}),Object.assign({},s.a,{data:Object(n.c)(d,e)}),Object.assign({},s.a,{data:Object(n.c)(l,e)})]}},z=async t=>{if(2!==t[0].length)throw new Error("Dataset not suitable for C-Chart.");const e=t.length;var a=Object(n.d)(t);const c=a[0],i=a[1];if(Object(n.a)(c)!==c[0])throw new Error("The samples must have the same size for this chart");const r=Object(n.a)(i),o=r-3*Math.sqrt(r),l=r+3*Math.sqrt(r);return{title:"C-Chart",ticks:{ucl:l,center:r,lcl:o},datasets:[Object.assign({},s.c,{data:i}),Object.assign({},s.b,{data:Object(n.c)(r,e)}),Object.assign({},s.a,{data:Object(n.c)(l,e)}),Object.assign({},s.a,{data:Object(n.c)(o,e)})]}};e.a={Xbar_Rbar:j,Xbar_Sbar:u,Rbar:b,Sbar:g,Ewma:h,Cusum:O,P:m,NP:p,C:z}},127:function(t,e,a){"use strict";const c={A2:[0,0,1.88,1.023,.729,.577,.483,.419,.373,.337,.308],A3:[0,0,2.659,1.954,1.628,1.427,1.287,1.182,1.099,1.032,.975,.927,.886,.85,.817,.789],D3:[0,0,0,0,0,0,0,.076,.136,.184,.223],D4:[0,0,3.267,2.575,2.282,2.115,2.004,1.924,1.864,1.816,1.777],B3:[0,0,0,0,0,0,.03,.118,.185,.239,.284,.321,.354,.382,.406,.428],B4:[0,0,3.267,2.568,2.266,2.089,1.97,1.882,1.815,1.761,1.716,1.679,1.646,1.618,1.594,1.572]};e.a=c},128:function(t,e,a){"use strict";const c={lineTension:0,pointRadius:0,borderColor:"#ee2b47",borderWidth:2,fill:"+1"};e.a=c;const s={lineTension:0,pointRadius:0,fill:!1};e.b=s;const n={lineTension:0,pointRadius:3,pointHoverRadius:6,borderWidth:2,borderColor:"#003459",pointBorderWidth:0,pointBackgroundColor:"#259f6c",fill:!1};e.c=n},129:function(t,e,a){"use strict";const c=(t,e)=>Array(e).fill(t);e.c=c;const s=(t,e,a)=>a.map((a,c)=>a>t||a<e?"#f54d42":"#259f6c");e.b=s;const n=(t,e=0)=>t.reduce((t,e)=>t+e)/(t.length-e);e.a=n;const i=(t,e=0)=>n(t.map(e=>Math.pow(e-n(t),2)),e),r=(t,e=0)=>Math.sqrt(i(t,e));e.e=r;const o=t=>{const e=t.length;let a=new Array(e),c=new Array(e),s=0;for(;s<e;)a[s]=t[s][0],c[s]=t[s][1],s++;return[a,c]};e.d=o},130:function(t,e,a){"use strict";var c=a(131),s=a.n(c);a.d(e,"a",function(){return s.a})},131:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNjEyIDYxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEyIDYxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnIGlkPSJJbmZvIj4KCQk8Zz4KCQkJPHBhdGggZD0iTTMwNiwxNTNjLTIxLjExNCwwLTM4LjI1LDE3LjEzNi0zOC4yNSwzOC4yNVMyODQuODg2LDIyOS41LDMwNiwyMjkuNXMzOC4yNS0xNy4xMTcsMzguMjUtMzguMjVTMzI3LjEzMywxNTMsMzA2LDE1M3ogICAgICBNMzA2LDI2Ny43NWMtMjEuMTE0LDAtMzguMjUsMTcuMTE3LTM4LjI1LDM4LjI1djExNC43NWMwLDIxLjExNCwxNy4xMzYsMzguMjUsMzguMjUsMzguMjVzMzguMjUtMTcuMTM2LDM4LjI1LTM4LjI1VjMwNiAgICAgQzM0NC4yNSwyODQuODg2LDMyNy4xMzMsMjY3Ljc1LDMwNiwyNjcuNzV6IE0zMDYsMEMxMzcuMjc5LDAsMCwxMzcuMjc5LDAsMzA2czEzNy4yNzksMzA2LDMwNiwzMDZzMzA2LTEzNy4yNzksMzA2LTMwNiAgICAgUzQ3NC43MjEsMCwzMDYsMHogTTMwNiw1NTQuNjI1QzE2OC44OTMsNTU0LjYyNSw1Ny4zNzUsNDQzLjA4OCw1Ny4zNzUsMzA2UzE2OC44OTMsNTcuMzc1LDMwNiw1Ny4zNzUgICAgIGMxMzcuMDg4LDAsMjQ4LjYyNSwxMTEuNTM3LDI0OC42MjUsMjQ4LjYyNVM0NDMuMDg4LDU1NC42MjUsMzA2LDU1NC42MjV6IiBmaWxsPSIjRDgwMDI3Ii8+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="},132:function(t,e,a){"use strict";const c=({ticks:t,title:e,datasets:a,labels:c})=>({responsive:!1,maintainAspectRatio:!1,type:"line",data:{labels:c,datasets:a},title:{display:!0,text:e},options:{legend:{display:!1},layout:{padding:{top:10,bottom:10}},scales:{yAxes:[{gridLines:{display:!1},afterBuildTicks:e=>{e.ticks=[],e.ticks.push(t.ucl),e.ticks.push(t.center),e.ticks.push(t.lcl)}}],xAxes:[{gridLines:{display:!1}}]},animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0}});e.b=c;const s={"XBAR Rbar":"If the sample size is relatively small (say equal to or less than 10), we can use the range instead of the standard deviation of a sample to construct control charts on X and the range, R. The range of a sample is simply the difference between the largest and smallest observation.","XBAR Sbar":"X-s chart is very similar to the  X-R chart. The major difference is that the subgroup standard deviation is plotted when using the  X-s chart, while the subgroup range is plotted when using the  X-R chart. One advantage of using the standard deviation instead of the range is that the standard deviation takes into account all the data, not just the maximum and the minimum. As for the  X-R chart, frequent data and a method of rationally subgrouping the data are required to use the Xbar-s chart.",EWMA:"The Exponentially Weighted Moving Average (EWMA) is a statistic for monitoring the process that averages the data in a way that gives less and less weight to data as they are further removed in time.",CUSUM:"CUSUM charts, while not as intuitive and simple to operate as Shewhart charts, have been shown to be more efficient in detecting small shifts in the mean of a process. In particular, analyzing Average Run Length for CUSUM control charts shows that they are better than Shewhart control charts when it is desired to detect shifts in the mean that are 2 sigma or less."};e.a=s},133:function(t,e,a){"use strict";var c=a(3),s=a(134),n=a(135),i=a.n(n);const r=()=>Object(c.c)("nav",{class:"main-nav navbar"},Object(c.c)("div",{class:"container"},Object(c.c)("div",{class:"navbar-start"},Object(c.c)("a",{class:"navbar-item",href:"https://github.com/carlosqsilva/ccharts-online"},Object(c.c)("div",{class:"brand"},Object(c.c)("img",{class:"brand__logo",src:i.a,alt:"logo"}),Object(c.c)("h1",{class:"brand__title has-text-white"},"SPC online")))),Object(c.c)("div",{class:"navbar-end"},Object(c.c)("a",{class:"navbar-item"},Object(c.c)("iframe",{src:"https://ghbtns.com/github-btn.html?user=carlosqsilva&repo=ccharts-online&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"115px",height:"30px",title:"github stars"}))))),o=()=>Object(c.c)("section",{className:"hero is-dark"},Object(c.c)("div",{className:"hero-head"},Object(c.c)(r,null)),Object(c.c)("div",{className:"hero-body"},Object(c.c)("div",{className:"container has-text-centered"},Object(c.c)("h1",{className:"title is-spaced"},"What is this!?"),Object(c.c)("h2",{className:"subtitle"},"The control chart is one of the seven basic tools of quality control. Typically control charts are used for time-series data, though they can be used for data that have logical comparability (i.e. you want to compare samples that were taken all at the same time, or the performance of different individuals); however the type of chart used to do this requires consideration."," ",Object(c.c)(s.a,{href:"https://en.wikipedia.org/wiki/Control_chart"},"- Wikipedia")))));e.a=o},134:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var c=a(3),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c])}return t};function n(t,e){var a={};for(var c in t)e.indexOf(c)>=0||Object.prototype.hasOwnProperty.call(t,c)&&(a[c]=t[c]);return a}const i=t=>{let e=t.children,a=n(t,["children"]);return Object(c.c)("a",s({},a,{target:"_blank",rel:"noopener noreferrer"}),e)}},135:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIuMDAxIDUxMi4wMDEiPjxwYXRoIGQ9Ik00NTcuNjM3IDEzNC42ODFjLTI5Ljk3NiAwLTU0LjM2MyAyNC4zODctNTQuMzYzIDU0LjM2M2E1NC4wMjIgNTQuMDIyIDAgMCAwIDguODMxIDI5LjY0N2wtNTguNzMzIDU4LjczM2E1NC4wMjggNTQuMDI4IDAgMCAwLTI5LjY0OC04LjgzMSA1NC4wNDkgNTQuMDQ5IDAgMCAwLTMwLjU3NiA5LjQ0MWwtNTkuMzM4LTU5LjM0N2E1NC4wMjMgNTQuMDIzIDAgMCAwIDguODI4LTI5LjY0NGMwLTI5Ljk3Ni0yNC4zODctNTQuMzYzLTU0LjM2My01NC4zNjNzLTU0LjM2MyAyNC4zODctNTQuMzYzIDU0LjM2M2MwIDEwLjkzMSAzLjI1NCAyMS4xMDggOC44MjcgMjkuNjQxTDg0LjAwNCAyNzcuNDJhNTQuMDIgNTQuMDIgMCAwIDAtMjkuNjQxLTguODI3QzI0LjM4NyAyNjguNTkzIDAgMjkyLjk4MSAwIDMyMi45NTdzMjQuMzg3IDU0LjM2MyA1NC4zNjMgNTQuMzYzIDU0LjM2My0yNC4zODcgNTQuMzYzLTU0LjM2M2E1NC4wMjggNTQuMDI4IDAgMCAwLTguODMxLTI5LjY0OGw1OC43MzMtNTguNzMzYTU0LjAyOCA1NC4wMjggMCAwIDAgMjkuNjQ4IDguODMxIDU0LjAyIDU0LjAyIDAgMCAwIDI5LjY0Ni04LjgzMWw1OS42NjYgNTkuNjc0YTU0LjAzIDU0LjAzIDAgMCAwLTguMjI2IDI4LjcwNmMwIDI5Ljk3NiAyNC4zODcgNTQuMzYzIDU0LjM2MyA1NC4zNjNzNTQuMzYzLTI0LjM4NyA1NC4zNjMtNTQuMzYzYTU0LjAyNiA1NC4wMjYgMCAwIDAtOC44MjctMjkuNjQxbDU4LjczNi01OC43MzZhNTQuMDI1IDU0LjAyNSAwIDAgMCAyOS42NDEgOC44MjdjMjkuOTc2IDAgNTQuMzYzLTI0LjM4NyA1NC4zNjMtNTQuMzYzIDAtMjkuOTc3LTI0LjM4OC01NC4zNjItNTQuMzY0LTU0LjM2MnpNNTQuMzYzIDM1NC44NDljLTE3LjU4NiAwLTMxLjg5My0xNC4zMDctMzEuODkzLTMxLjg5MiAwLTE3LjU4NiAxNC4zMDctMzEuODkzIDMxLjg5My0zMS44OTMgMTcuNTg1IDAgMzEuODkzIDE0LjMwNyAzMS44OTMgMzEuODkzIDAgMTcuNTg1LTE0LjMwNyAzMS44OTItMzEuODkzIDMxLjg5MnptMTMzLjkxMy0xMzMuOTEzYy0xNy41ODUgMC0zMS44OTMtMTQuMzA3LTMxLjg5My0zMS44OTMgMC0xNy41ODUgMTQuMzA3LTMxLjg5MyAzMS44OTMtMzEuODkzczMxLjg5MyAxNC4zMDcgMzEuODkzIDMxLjg5My0xNC4zMDcgMzEuODkzLTMxLjg5MyAzMS44OTN6bTEzNS40NDggMTMzLjkxM2MtMTcuNTg1IDAtMzEuODkzLTE0LjMwNy0zMS44OTMtMzEuODkzczE0LjMwNy0zMS44OTMgMzEuODkzLTMxLjg5M2MxNy41ODUgMCAzMS44OTMgMTQuMzA3IDMxLjg5MyAzMS44OTMtLjAwMSAxNy41ODYtMTQuMzA4IDMxLjg5My0zMS44OTMgMzEuODkzem0xMzMuOTEzLTEzMy45MTNjLTE3LjU4NSAwLTMxLjg5My0xNC4zMDctMzEuODkzLTMxLjg5MyAwLTE3LjU4NSAxNC4zMDctMzEuODkzIDMxLjg5My0zMS44OTMgMTcuNTg1IDAgMzEuODkzIDE0LjMwNyAzMS44OTMgMzEuODkzcy0xNC4zMDggMzEuODkzLTMxLjg5MyAzMS44OTN6IiBmaWxsPSIjYmRiZGJkIi8+PC9zdmc+"},136:function(t,e,a){"use strict";var c=a(3),s=a(8),n=a(30),i=a(31),r=a(137);const o=({toggleModal:t,readFile:e,loadSample:a,setHeader:s,setDelimiter:n,setDecimal:o,closed:l,columns:d,data:M})=>{const j=["Delimiter","Comma","empty space","Colon","Semicolon"],u=["Decimal",'Option "."','Option ","'];return Object(c.c)("div",{class:`modal ${l?"":"is-active"}`},Object(c.c)("div",{class:"modal-background"}),Object(c.c)("div",{class:"modal-card"},Object(c.c)("header",{class:"modal-card-head"},Object(c.c)("p",{class:"modal-card-title"},"Import your data (.csv or .txt)"),Object(c.c)("button",{class:"delete",onClick:t,"aria-label":"close"})),Object(c.c)("section",{class:"modal-card-body"},Object(c.c)("div",{class:"level is-mobile"},Object(c.c)("div",{class:"level-left"},Object(c.c)("div",{class:"level-item"},Object(c.c)(i.c,{handleChange:e},"Choose a file")),Object(c.c)("div",{class:"level-item"},Object(c.c)(i.d,{options:j,handleChange:n})),Object(c.c)("div",{class:"level-item"},Object(c.c)(i.d,{options:u,handleChange:o})),Object(c.c)("div",{class:"level-item"},Object(c.c)(i.b,{handleClick:s},"Has header")),Object(c.c)("div",{class:"level-item"},Object(c.c)(i.d,{handleChange:a,type:"is-dark",options:["Examples...","Xbar","Cusum","Ewma","P","NP","C"]})))),Object(c.c)(r.a,{data:M,columns:d}))))},l=({data:t})=>({closed:t.closed,columns:t.columns,data:t.data}),d={toggleModal:n.g,readFile:n.a,setHeader:n.f,setDelimiter:n.e,setDecimal:n.d,loadSample:n.b};e.a=Object(s.b)(l,d)(o)},137:function(t,e,a){"use strict";var c=a(3);const s=({columns:t,data:e})=>e?Object(c.c)("table",{class:"table is-striped is-narrow is-hoverable is-fullwidth"},Object(c.c)("thead",null,Object(c.c)("tr",null,t.map((t,e)=>Object(c.c)("th",{key:e},t)))),Object(c.c)("tbody",null,e.map((t,e)=>Object(c.c)("tr",{key:e},Object(c.c)("th",{key:e},e),t.map((t,e)=>Object(c.c)("td",{key:e},t)))))):null;e.a=s},138:function(t,e,a){"use strict";var c=a(3);const s=()=>Object(c.c)("footer",{class:"footer"},Object(c.c)("div",{class:"container"},Object(c.c)("div",{class:"content has-text-centered"},Object(c.c)("p",null,Object(c.c)("strong",null,"SPC online")," by"," ",Object(c.c)("a",{href:"https://carloseng.com"},"Carlos Silva"),". This website is part of my other projects"," ",Object(c.c)("a",{href:"https://github.com/carlosqsilva/pyspc"},"pyspc"),", a python library for plottting statistical process control charts. The source code avaiable on"," ",Object(c.c)("a",{href:"https://github.com/carlosqsilva/ccharts-online"},"Github")," ","licensed under"," ",Object(c.c)("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),"."))));e.a=s},25:function(t,e,a){"use strict";const c="TOGGLE_MODAL";e.d=c;const s="DATA_LOADED";e.a=s;const n="UPDATE_HEADER";e.g=n;const i="UPDATE_DELIMITER";e.f=i;const r="UPDATE_DECIMAL";e.e=r;const o="SET_CHART";e.b=o;const l="SHOW_MESSAGE";e.c=l},30:function(t,e,a){"use strict";var c=a(126),s=a(25);const n=()=>({type:s.d});e.g=n;const i=(t,e,a)=>({type:s.a,data:t,columns:e,dataString:a}),r=(t,e,a)=>({type:s.g,data:t,columns:e,header:a}),o=(t,e,a)=>({type:s.f,data:t,columns:e,delimiter:a}),l=(t,e,a)=>({type:s.e,data:t,columns:e,decimal:a}),d=(t,e,a,c)=>({type:s.b,datasets:t,labels:e,title:a,ticks:c}),M=t=>({type:s.c,message:t}),j=async(t,e,a,c)=>{let s=["__"],n=t.trim().split(/\n/).map(t=>t.split(e).filter(t=>t.length>0));return c?(s=s.concat(n[0].map(t=>t.trim())),n=n.slice(1)):s=s.concat(n[0].map((t,e)=>`X${e}`)),{data:n=n.map(t=>t.map(t=>Number(t.trim().replace(a,".")))),columns:s}},u=t=>new Promise((e,a)=>{const c=new FileReader;c.onload=(t=>{e(c.result)}),c.readAsText(t)}),b=t=>async(e,a)=>{let c=t.target.files[0];var s=a().data;const n=s.delimiter,r=s.decimal,o=s.header,l=await u(c);var d=await j(l,n,r,o);const M=d.data,b=d.columns;e(i(M,b,l))};e.a=b;const g=t=>async(e,a)=>{let c=[",",","," ",":",";"][t.target.selectedIndex];var s=a().data;const n=s.dataString,i=s.decimal,r=s.header;var l=await j(n,c,i,r);const d=l.data,M=l.columns;e(o(d,M,c))};e.e=g;const h=t=>async(e,a)=>{let c=[".",".",","][t.target.selectedIndex];var s=a().data;const n=s.dataString,i=s.delimiter,r=s.header;var o=await j(n,i,c,r);const d=o.data,M=o.columns;e(l(d,M,c))};e.d=h;const O=t=>async(t,e)=>{var a=e().data;const c=a.dataString,s=a.delimiter,n=a.decimal,i=a.header;var o=await j(c,s,n,!i);const l=o.data,d=o.columns;t(r(l,d,!i))};e.f=O;const m=t=>async(e,a)=>{const s=c.a[t.target.value]||null,n=a().data.data;if(n){if(s){const t=n.map((t,e)=>e+1);try{var i=await s(n);const a=i.datasets,c=i.title,r=i.ticks;e(d(a,t,c,r))}catch(t){e(M(t.message))}}}else e(M("You firts need to import a dataset."))};e.c=m;const p=t=>async e=>{let c,s=t.target.value;(c="P"===s?await a.e(0).then(a.bind(null,139)):"NP"===s?await a.e(1).then(a.bind(null,140)):"C"===s?await a.e(3).then(a.bind(null,141)):await a.e(2).then(a.bind(null,142))).data&&(c=c.data);var n=await j(c,",",".",!0);const r=n.data,o=n.columns;e(i(r,o,c))};e.b=p},31:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var c=a(3),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c])}return t};function n(t,e){var a={};for(var c in t)e.indexOf(c)>=0||Object.prototype.hasOwnProperty.call(t,c)&&(a[c]=t[c]);return a}const i=t=>{let e=t.action,a=t.children,i=t.type,r=n(t,["action","children","type"]);return Object(c.c)("a",s({onClick:e,class:`button ${i||""}`},r),a)},r=({handleClick:t,children:e})=>Object(c.c)("label",{class:"checkbox"},Object(c.c)("input",{onClick:t,type:"checkbox"}),e);e.b=r;const o=({handleChange:t,children:e})=>Object(c.c)("div",{class:"file"},Object(c.c)("label",{class:"file-label"},Object(c.c)("input",{class:"file-input",type:"file",onChange:t,accept:".csv,.txt",name:"resume"}),Object(c.c)("span",{class:"file-cta"},Object(c.c)("span",{class:"file-label"},e))));e.c=o;const l=({options:t,type:e,handleChange:a})=>Object(c.c)("div",{class:`select ${e||""} `},Object(c.c)("select",{onChange:a},t.map((t,e)=>Object(c.c)("option",{key:e},t))));e.d=l},32:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=a(3),s=a(8),n=a(11),i=a(72),r=a(73),o=a(74),l=a(75),d=(a.n(l),a(77));const M=Object(n.d)(r.a,Object(n.a)(i.a)),j=()=>Object(c.c)("div",null,Object(c.c)(d.c,null),Object(c.c)(d.d,null),Object(c.c)(d.a,null),Object(c.c)(d.b,null));Object(c.e)(Object(c.c)(s.a,{store:M},Object(c.c)(j,null)),document.body),Object(o.a)()},73:function(t,e,a){"use strict";var c=a(25),s=a(11);const n={closed:!0,delimiter:",",decimal:".",dataString:"",data:!1,header:!1,columns:[]},i=(t=n,e)=>{switch(e.type){case c.d:return Object.assign({},t,{closed:!t.closed});case c.a:return Object.assign({},t,{data:e.data,columns:e.columns,dataString:e.dataString});case c.g:return Object.assign({},t,{data:e.data,columns:e.columns,header:e.header});case c.f:return Object.assign({},t,{data:e.data,columns:e.columns,delimiter:e.delimiter});case c.e:return Object.assign({},t,{data:e.data,columns:e.columns,decimal:e.decimal});default:return t}},r={labels:[1,2,3,4],datasets:[],title:"",ticks:{ucl:12,center:10,lcl:8},chart:!1,error:!1,errorMessage:""},o=(t=r,e)=>{switch(e.type){case c.b:return Object.assign({},t,{labels:e.labels,datasets:e.datasets,title:e.title,ticks:e.ticks,chart:!0,error:!1});case c.c:return Object.assign({},t,{error:!0,errorMessage:e.message});default:return t}},l=Object(s.c)({data:i,plot:o});e.a=l},74:function(t,e,a){"use strict";e.a=s;const c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(){if("serviceWorker"in navigator){if(new URL("/ccharts-online",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="/ccharts-online/service-worker.js";c?i(t):n(t)})}}function n(t){navigator.serviceWorker.register(t).then(t=>{t.onupdatefound=(()=>{const e=t.installing;e.onstatechange=(()=>{"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})})}).catch(t=>{console.error("Error during service worker registration:",t)})}function i(t){fetch(t).then(e=>{404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(t=>{t.unregister().then(()=>{window.location.reload()})}):n(t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}},75:function(t,e){},77:function(t,e,a){"use strict";var c=a(78);a.d(e,"a",function(){return c.a});var s=a(133);a.d(e,"c",function(){return s.a});var n=a(136);a.d(e,"d",function(){return n.a});var i=a(138);a.d(e,"b",function(){return i.a})},78:function(t,e,a){"use strict";var c=a(3),s=a(8),n=a(79),i=a.n(n),r=a(30),o=a(130),l=a(31),d=a(132);class M extends c.a{constructor(...t){var e;return e=super(...t),this.options=["Charts","Xbar_Rbar","Xbar_Sbar","Rbar","Sbar","Ewma","Cusum","P","NP","C"],this.downloadChart=(({target:t})=>{if(!this.props.plot.chart)return null;t.href=this.chart.toDataURL(),t.download="Chart.png"}),e}componentDidMount(){this.render_chart()}componentDidUpdate(){this.chart_instance.destroy(),this.render_chart()}render_chart(){const t=this.props.plot;this.chart_instance=new i.a(this.chart,Object.assign({},Object(d.b)(t)))}render({toggleModal:t,plotChart:e,plot:a}){const s=a.chart,n=a.error,i=a.errorMessage,r=a.title;return Object(c.c)("section",{class:"section"},Object(c.c)("div",{class:"container"},Object(c.c)("div",{class:"level is-mobile"},Object(c.c)("div",{class:"level-left"},Object(c.c)("div",{class:"level-item"},Object(c.c)(l.a,{action:t},"Import Data")),Object(c.c)("div",{class:"level-item"},Object(c.c)(l.d,{options:this.options,handleChange:e})),Object(c.c)("div",{class:"level-item"},Object(c.c)(l.a,{action:this.downloadChart,disabled:!s},"Download")),n&&Object(c.c)("div",{class:"level-item"},Object(c.c)("img",{class:"icon",src:o.a,alt:"Alarm"}),Object(c.c)("p",{class:"ml10"},i)))),Object(c.c)("canvas",{class:"canvas",ref:t=>this.chart=t}),s&&Object(c.c)("div",{class:"information"},d.a[r])))}}const j=({plot:t})=>({plot:t}),u={toggleModal:r.g,plotChart:r.c};e.a=Object(s.b)(j,u)(M)}},[32]);
//# sourceMappingURL=main.3beba816.js.map