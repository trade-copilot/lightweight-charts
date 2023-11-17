var P=Object.defineProperty;var C=(r,t,i)=>t in r?P(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var o=(r,t,i)=>(C(r,typeof t!="symbol"?t+"":t,i),i);import{z as _,C as A,A as E}from"./lightweight-charts.production-8606f59d.js";import{P as b}from"./plugin-base-c80b73a8.js";import{p as L}from"./positions-0a54307c.js";const I={interval:60*60*24,clearTimeout:3e3},g=new Path2D("M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"),T=new Path2D("M6.28 5.22a.75.75 0 00-1.06 1.06l7.22 7.22H6.75a.75.75 0 000 1.5h7.5a.747.747 0 00.75-.75v-7.5a.75.75 0 00-1.5 0v5.69L6.28 5.22z"),w=new Path2D("M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"),v=new Path2D("M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"),M=20;class V{constructor(){o(this,"_data",[])}draw(t){let i=1;t.useBitmapCoordinateSpace(s=>{i=s.verticalPixelRatio}),t.useMediaCoordinateSpace(s=>{const e=s.context;e.lineWidth=2,this._data.forEach(a=>{const c=L(a.priceY,i,e.lineWidth),l=(c.position+c.length/2)/i;e.fillStyle=a.color,e.strokeStyle=a.color,e.lineDashOffset=0,e.globalAlpha=a.fade?.5:1,e.beginPath(),e.moveTo(a.startX+4,l),e.lineTo(a.endX-4,l),e.stroke(),e.beginPath(),e.setLineDash([3,6]),e.lineCap="round",e.moveTo(a.startX-30,l),e.lineTo(s.mediaSize.width,l),e.stroke(),e.setLineDash([]),e.beginPath(),e.arc(a.startX,l,4,0,2*Math.PI),e.arc(a.endX,l,4,0,2*Math.PI),e.fill(),e.font="10px sans-serif";const h=e.measureText(a.text);e.beginPath(),e.roundRect(a.startX-30-20-h.width,l-7,h.width+20,14,4),e.fill(),e.fillStyle="#FFFFFF",e.fillText(a.text,a.startX-30-15-h.width,l+3),e.save(),e.translate(a.startX-30-14,l-6);const d=12/M;e.scale(d,d),e.fill(a.icon,"evenodd"),e.restore()})})}update(t){this._data=t}}class y{constructor(t){o(this,"_source");o(this,"_renderer");this._source=t,this._renderer=new V}renderer(){return this._renderer}update(){var s;const t=[],i=(s=this._source._chart)==null?void 0:s.timeScale();if(i)for(const e of this._source._alerts.values()){const a=this._source._series.priceToCoordinate(e.price);if(a===null)continue;let c=i.timeToCoordinate(e.start),l=i.timeToCoordinate(e.end);if(c===null&&l===null)continue;c||(c=0),l||(l=i.width());let h="#000000",d=g;e.parameters.crossingDirection==="up"?(h=e.crossed?"#386D2E":e.expired?"#30472C":"#64C750",d=e.crossed?w:e.expired?v:g):e.parameters.crossingDirection==="down"&&(h=e.crossed?"#7C1F3E":e.expired?"#4A2D37":"#C83264",d=e.crossed?w:e.expired?v:T),t.push({priceY:a,startX:c,endX:l,icon:d,color:h,text:e.parameters.title,fade:e.expired})}this._renderer.update(t)}}class z extends b{constructor(i){super();o(this,"_source");o(this,"_views");this._source=i,this._views=[new y(this._source)]}requestUpdate(){super.requestUpdate()}updateAllViews(){this._views.forEach(i=>i.update())}paneViews(){return this._views}autoscaleInfo(){let i=1/0,s=-1/0;for(const e of this._source._alerts.values())e.price<i&&(i=e.price),e.price>s&&(s=e.price);return i>s?null:{priceRange:{maxValue:s,minValue:i}}}}function X(r){return r.value!==void 0}class k{constructor(t,i){o(this,"_options");o(this,"_chart",null);o(this,"_series");o(this,"_primitive");o(this,"_whitespaceSeriesStart",null);o(this,"_whitespaceSeriesEnd",null);o(this,"_whitespaceSeries");o(this,"_alerts",new Map);o(this,"_dataChangedHandler");o(this,"_lastValue");this._series=t,this._options={...I,...i},this._primitive=new z(this),this._series.attachPrimitive(this._primitive),this._dataChangedHandler=this._dataChanged.bind(this),this._series.subscribeDataChanged(this._dataChangedHandler);const s=this._series.dataByIndex(1e4,_.NearestLeft);s&&this.checkedCrossed(s),this._chart=this._primitive.chart,this._whitespaceSeries=this._chart.addLineSeries()}destroy(){this._series.unsubscribeDataChanged(this._dataChangedHandler),this._series.detachPrimitive(this._primitive)}alerts(){return this._alerts}chart(){return this._chart}series(){return this._series}addExpiringAlert(t,i,s,e){let a=(Math.random()*1e5).toFixed();for(;this._alerts.has(a);)a=(Math.random()*1e5).toFixed();return this._alerts.set(a,{price:t,start:i,end:s,parameters:e,crossed:!1,expired:!1}),this._update(),a}removeExpiringAlert(t){this._alerts.delete(t),this._update()}toggleCrossed(t){const i=this._alerts.get(t);i&&(i.crossed=!0,setTimeout(()=>{this.removeExpiringAlert(t)},this._options.clearTimeout),this._update())}checkExpired(t){for(const[i,s]of this._alerts.entries())s.end<=t&&(s.expired=!0,setTimeout(()=>{this.removeExpiringAlert(i)},this._options.clearTimeout));this._update()}checkedCrossed(t){if(X(t)){if(this._lastValue!==void 0)for(const[i,s]of this._alerts.entries()){let e=!1;s.parameters.crossingDirection==="up"?this._lastValue<=s.price&&t.value>s.price&&(e=!0):s.parameters.crossingDirection==="down"&&this._lastValue>=s.price&&t.value<s.price&&(e=!0),e&&this.toggleCrossed(i)}this._lastValue=t.value}}_update(){var e;let t=1/0,i=0;const s=this._alerts.size>0;for(const[a,c]of this._alerts.entries())c.end>i&&(i=c.end),c.start<t&&(t=c.start);if(s||(t=null,i=null),t){const a=((e=this._series.dataByIndex(1e6,_.NearestLeft))==null?void 0:e.time)??t;a<t&&(t=a)}(this._whitespaceSeriesStart!==t||this._whitespaceSeriesEnd!==i)&&(this._whitespaceSeriesStart=t,this._whitespaceSeriesEnd=i,!this._whitespaceSeriesStart||!this._whitespaceSeriesEnd?this._whitespaceSeries.setData([]):this._whitespaceSeries.setData(this._buildWhitespace(this._whitespaceSeriesStart,this._whitespaceSeriesEnd))),this._primitive.requestUpdate()}_buildWhitespace(t,i){const s=[];for(let e=t;e<=i;e+=this._options.interval)s.push({time:e});return s}_dataChanged(){const t=this._series.dataByIndex(1e5,_.NearestLeft);t&&(this.checkedCrossed(t),this.checkExpired(t.time))}}const F=[22.75105,22.7028,22.91657,22.89733,22.58714,22.79207,22.4285,22.12538,22.12127,22.29012,22.47304,22.124,22.62265,22.27654,22.42059,22.21117,22.0404,22.00526,21.98259,21.59455,21.60589,21.3791,21.37931,21.13736,21.09146,20.95892,21.061,21.48838,21.3507,21.7702,21.59947,21.8053,21.88469,21.74813,21.60216,21.37173,21.3791,21.45597,21.50142,21.44207,21.4204,21.4408,21.55359,21.26584,21.4968,21.45966,21.3538,21.35801,21.34126,21.43016,21.19969,21.0912,21.07892,21.05726,21.22916,21.17957,21.0097,20.93522,20.92252,20.59067,20.62412,20.49867,20.23011,20.71467,20.66167,20.50267,20.42967,20.20874,20.39063,20.49467,20.40828,20.44799,20.50617,20.2971,20.23607,20.29511,20.29441,20.58167,20.44466,20.43449,20.38262,20.40917,20.24517,20.00318,20.03567,19.95968,20.0185,20.03165,20.01767,20.009,19.88399,19.62125,19.64218,19.58718,19.68618,19.76699,19.7022,19.66419,19.86817,19.89925,20.07668,20.0164,19.97018,20.40667,20.46167,20.93717,20.73963,20.97367,20.80217,20.78125,20.65367,20.66471,20.58367,20.40367,20.34212,20.51013,20.72114,20.83417,20.6876,20.88618,20.86166,20.76212,20.57017,20.45612,20.38862,20.50012,20.36022,20.42267,20.34317,20.40212,20.20812,20.12014,20.08661,20.37017,20.27117,20.38267,20.57112,20.63462,20.51712,20.49662,21.00767,21.02463,20.8812,20.8221,21.03767,21.25467,21.24567,21.45216,21.23017,20.99112,20.74162,20.76225,20.64774,20.64169,20.41452,20.4991,20.369,20.3724,20.42232,20.42278,20.64722,20.659,20.487,20.443,20.31207,20.2099,20.253,20.2158,20.05311,19.99909,19.93543,19.995,20.02418,19.93575,19.84162,19.51315,19.7631,19.87511,19.90737,19.81483,19.77618,19.7819,19.82768,19.97561,19.7944,19.93861,19.9987,20.02961,20.08661,19.9376,19.70901,19.6249,19.78662,19.7815,19.8271,19.84815,19.8998,19.94024,19.84582,19.89418,19.80646,19.7286,19.67346,19.59882,19.3981,19.52426,19.5284,19.50768,19.45412,19.133,19.2128,18.9867,19.13962,19.17998,19.3486,19.2539,19.2824,19.42142,19.38443,19.59812,19.6082,19.8457,19.8301,19.89561,19.8315,19.74523,19.5896,19.7819,19.806,19.7194,19.8403,19.6886,19.71648,19.80061,19.7486,19.7085,19.6782,19.99051,20.3173,20.04726,20.12367,19.8798,19.8887,19.85975,19.9346,20.23566,20.3803,20.42912,20.4911,20.48312,20.3258,20.2319,20.06612,19.8821,19.90975,20.2144,20.2576,20.42986,20.46866,20.28111,20.3781,20.3959,20.53012,20.4399,20.5466,20.69761,20.8134,20.7169,20.56397,20.56436,20.413,20.2267,20.12912,19.9352,19.8157,19.9533,19.8117,19.68147,19.71811,19.5188,19.65362,19.6144,19.56761,19.712,19.94311,20.11861,20.2737,20.1426,20.25974,20.1544,20.23462,20.4116,20.4735,20.402,20.3606,20.2686,20.1415,20.43947,20.3957,20.34712,20.32312,20.3014,20.48524,20.3139,20.19211,20.2086,20.0495,20.13312,19.9941,19.90511,20.23912,20.3622,20.22447,20.4146,20.677,20.8501,20.9158,21.05812,20.98412,20.88212,20.5114,20.2944,20.22912,20.34551,20.64401,20.41499,20.56167,20.4168,20.83267,20.87124,21.07966,21.11825,21.23516,21.17262,21.17117,21.26562,21.68819,21.49866,21.12875,21.2776,21.1911,21.26817,21.04075,20.98861,20.71917,21.054,21.17097,21.16817,21.27475,21.1621,21.23617,20.99471,20.79351,20.97217,20.9955,20.98875,20.75619,20.8541,21.12849,21.44499,21.46674,21.52774,21.38549,21.60966,21.49149,21.24575,21.14967,21.28462,21.16367,20.95416,21.10482,20.99775,20.97867,21.08117,20.8621,20.68235,20.43553,20.57967,20.53117,20.64162,20.65199,20.88266,20.66024,20.60367,20.81067,20.74746,20.90295,20.96825,20.7816,20.58375,20.55561,20.58396,20.45875,20.44812,20.35825,20.35342,20.5258,20.56024,20.4671,20.4961,20.51725,20.2908,20.60257,20.51649,20.52325,20.28075,20.2275,20.10024,19.97799,19.76576,19.67076,19.59337,19.65561,19.63576,19.60676,19.60862,19.7086,19.61876,19.65261,19.4346,19.13526,19.1797,19.19825,19.02462,19.01076,19.19062,19.1031,19.13262,19.19912,19.1524,19.2408,19.0645,18.9816,18.87626,19.05776,19.15226,19.0539,19.08175,19.4081,19.62287,20.03562,20.0334,19.98025,19.87342,19.90411,19.86439,19.854,20.08262,19.70626,19.51662,19.74962,19.7329,19.98975,19.84857,19.68925,19.61076,19.7883,19.89333,19.86425,19.81625,19.71683,19.7418,19.80781,19.60226,19.76626,19.76265,19.658,19.58296,19.67433,19.4153,19.43279,19.3895,19.30975,19.34562,19.15076,19.36976,19.4901,19.53098,19.24061,19.17408,19.76511,19.5626,19.59857,19.5196,19.51463,19.56075,19.3641,19.41942,19.58826,19.66676,19.81326,19.7829,19.76211,19.76311,19.97766,20.10525,20.2722,20.2716,20.17135,20.07311,20.3157,20.2264,20.39676,20.4625,20.50312,20.3677,20.1765,20.2096,20.35267,20.2996,20.1336,20.2238,20.17076,20.4563,20.3733,20.19123,20.2265,20.088,20.00712,19.79225,19.8315,19.6296,19.81115,19.8027,20.04111,20.12554,20.0872,19.97929,20.06232,19.96875,19.8285,19.7951,19.7092,19.80896,19.87468,19.93682,19.8848,19.77461,19.91834,19.91344,20.11499,20.0363,19.98339,20.04612,20.15542,20.14014,20.0757,20.20916,20.15754,19.9329,19.77726,19.4439,19.2639,19.33584,19.38604,19.9823,20.1534,20.1505,20.2411,20.0882,20.06004,20.0718,19.9922,19.9429,20.29474,20.64345,20.4973,20.4995,20.4925,20.5518,20.56334,20.4018,20.76615,20.89018,20.8361,20.7883,21.0405,21.0438,20.91084,20.75973,20.53584,20.3443,20.4036,20.4276,20.2046,20.33574,20.3885,20.31212,20.54012,20.55962,20.59762,20.4891,20.4921,20.47799,20.43309,20.5816,20.6245,20.49362,20.28501,20.73262,21.58076,21.5319,21.19974,21.0166,20.9161,20.9851,21.2885,21.54462,21.30551,21.30862,21.28351,21.387,21.0151,21.0401,20.7551,20.6306,20.46024,20.5156,20.62751,20.54362,20.42851,20.48999];function R(){return F.map((i,s)=>({time:1672617600+s*60,value:i}))}const p=A("chart",{autoSize:!0,timeScale:{secondsVisible:!0,timeVisible:!0}}),f=p.addLineSeries({lastPriceAnimation:E.OnDataUpdate}),x=R(),[U,n]=[x.slice(0,400),x.slice(400)];f.setData(U);const u=new k(f,{interval:60}),m=20;p.timeScale().scrollToPosition(m,!1);const S=r=>{r===n[0].time&&u.addExpiringAlert(19.5,n[0].time,n[25].time,{crossingDirection:"down",title:"$19.50"}),r===n[30].time&&u.addExpiringAlert(19.75,n[30].time,n[45].time,{crossingDirection:"up",title:"$19.75"}),r===n[45].time&&u.addExpiringAlert(19,n[45].time,n[65].time,{crossingDirection:"down",title:"$19.00"}),r===n[55].time&&u.addExpiringAlert(20,n[55].time,n[65].time,{crossingDirection:"up",title:"$20.00"}),r===n[75].time&&u.addExpiringAlert(21.25,n[80].time,n[220].time,{crossingDirection:"up",title:"wishful"})};S(n[0].time);function*B(r){for(const t of r)yield t;return null}const H=B(n);let D=!1;p.timeScale().subscribeVisibleLogicalRangeChange(()=>{const r=p.timeScale().scrollPosition();r!==0&&Math.abs(r-m)>1&&(D=!0)});const N=window.setInterval(()=>{const r=H.next();if(r.done){window.clearInterval(N);return}f.update(r.value),D||p.timeScale().scrollToPosition(m,!1),S(r.value.time)},200);
