"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3703,7918],{98007:(t,e,n)=>{n.d(e,{ZP:()=>w});var i=n(67294),a=n(90814),r=n(91262),s=n(92949),o=n(60373),l=n(44908);function c(t,e,n){t.addEventListener("resize",(()=>{const t=e.getBoundingClientRect();n(t.width,t.height)}),!0)}const d={3.8:async t=>{const e=await n.e(3115).then(n.bind(n,3115));return{module:e,createChart:(n,i)=>{const a=e.createChart(n,i);return c(t,n,a.resize.bind(a)),a}}},"4.0":async t=>{const e=await n.e(1539).then(n.bind(n,81539));return{module:e,createChart:(n,i)=>{const a=e.createChart(n,i);return c(t,n,a.resize.bind(a)),a}}},4.1:async t=>{const e=await n.e(9277).then(n.bind(n,39277));return{module:e,createChart:(n,i)=>{const a=e.createChart(n,i);return c(t,n,a.resize.bind(a)),a}}},current:async()=>{const t=await n.e(6738).then(n.bind(n,66738));return{module:t,createChart:(e,n)=>{const i=t.createChart(e,n);return c(window,e,i.resize.bind(i)),i}}}},h="iframe_R_Fr";function m(t){const{script:e,iframeStyle:n}=t,{preferredVersion:a}=(0,o.J)(),r=l&&l.length>0?l[0]:"",s=a?.name??r??"current",c=function(t){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${t}\n\t\t\t};\n\t\t<\/script>\n\t`}(e),m=i.useRef(null);return i.useEffect((()=>{const t=m.current,e=t?.contentWindow,n=t?.contentDocument;if(null===t||!e||!n)return;const i=async()=>{try{const{module:t,createChart:n}=await d[s](e);Object.assign(e,t),e.createChart=n,e.run?.()}catch(t){console.error(t)}};if(void 0!==e.run)i();else{const e=()=>{i(),t.removeEventListener("load",e)};t.addEventListener("load",e)}}),[c]),i.createElement("iframe",{key:e,ref:m,srcDoc:c,className:h,style:n})}var p=n(43864);const u=()=>`${Math.random().toString(36).slice(2,11)}`;function f(t){return"string"==typeof t?t:function(){const[t,e]=(0,i.useState)("");return(0,i.useEffect)((()=>e(u())),[]),t}()}const g=Object.keys(p.l.DARK);const w=t=>{const{chart:e,replaceThemeConstants:n,hideableCode:o,chartOnly:l,iframeStyle:c,...d}=t;let{children:u}=t;const{colorMode:w}=(0,s.I)(),v="dark"===w,x=f();return n&&"string"==typeof u&&(u=function(t,e){const n=e?p.l.DARK:p.l.LIGHT;let i=t;for(const a of g)i=i.replace(new RegExp(a,"g"),`'${n[a]}'`);return i}(u,v)),u=u.replace(new RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),e||o?i.createElement(i.Fragment,null,o&&i.createElement(i.Fragment,null,i.createElement("input",{id:x,type:"checkbox",className:"toggle-hidden-lines"}),i.createElement("label",{className:"toggle-label",htmlFor:x},"Show all code")),!l&&i.createElement(a.Z,d,u),e&&i.createElement(r.Z,{fallback:i.createElement("div",{className:h},"\xa0")},(()=>i.createElement(m,{script:u,iframeStyle:c})))):i.createElement(a.Z,d,u)}},43864:(t,e,n)=>{n.d(e,{l:()=>i});const i={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},27998:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var i=n(87462),a=(n(67294),n(3905)),r=n(98007);const s="/* eslint-disable max-classes-per-file */\nclass AxisView {\n\tconstructor(text, color, position) {\n\t\tthis._color = color;\n\t\tthis._text = text;\n\t\tthis._position = position;\n\t}\n\tcoordinate() {\n\t\treturn this._position;\n\t}\n\ttext() {\n\t\treturn this._text;\n\t}\n\ttextColor() {\n\t\treturn '#FFFFFF';\n\t}\n\tbackColor() {\n\t\treturn this._color;\n\t}\n}\n\nclass LegendPaneRenderer {\n\tconstructor(sections) {\n\t\tthis._sections = Object.values(sections);\n\t}\n\tdraw(target) {\n\t\tconst count = this._sections.length;\n\t\tconst longestText = this._sections.reduce((longest, section) => {\n\t\t\tif (section.name.length > longest.length) {\n\t\t\t\treturn section.name;\n\t\t\t}\n\t\t\treturn longest;\n\t\t}, '');\n\t\ttarget.useMediaCoordinateSpace(scope => {\n\t\t\tconst ctx = scope.context;\n\t\t\tconst longestTextMeasurements = ctx.measureText(longestText);\n\t\t\tctx.beginPath();\n\t\t\tctx.roundRect(\n\t\t\t\t20,\n\t\t\t\t20,\n\t\t\t\tlongestTextMeasurements.width + 40,\n\t\t\t\t(count + 0) * 20 + 10,\n\t\t\t\t8\n\t\t\t);\n\t\t\tctx.globalAlpha = 0.95;\n\t\t\tctx.fillStyle = '#FFFFFF';\n\t\t\tctx.fill();\n\t\t\tctx.globalAlpha = 1;\n\t\t\tlet currentY = 30;\n\t\t\tthis._sections.forEach(section => {\n\t\t\t\tctx.beginPath();\n\t\t\t\tctx.roundRect(30, currentY, 10, 10, 3);\n\t\t\t\tctx.fillStyle = section.color;\n\t\t\t\tctx.fill();\n\t\t\t\tctx.fillStyle = '#000000';\n\t\t\t\tctx.textBaseline = 'bottom';\n\t\t\t\tctx.fillText(section.name, 50, currentY + 10);\n\t\t\t\tcurrentY += 20;\n\t\t\t});\n\t\t});\n\t}\n}\n\nclass LegendView {\n\tconstructor(sections) {\n\t\tthis._renderer = new LegendPaneRenderer(sections);\n\t}\n\tzOrder() {\n\t\treturn 'top';\n\t}\n\trenderer() {\n\t\treturn this._renderer;\n\t}\n}\n\nclass PaneRenderer {\n\tconstructor(color) {\n\t\tthis._color = color;\n\t}\n\tdraw(target) {\n\t\ttarget.useMediaCoordinateSpace(scope => {\n\t\t\tconst ctx = scope.context;\n\t\t\tctx.beginPath();\n\t\t\tctx.rect(0, 0, scope.mediaSize.width, scope.mediaSize.height);\n\t\t\tctx.globalAlpha = 0.3;\n\t\t\tctx.fillStyle = this._color;\n\t\t\tctx.fill();\n\t\t\tctx.globalAlpha = 0.6;\n\t\t\tctx.lineWidth = 8;\n\t\t\tctx.strokeStyle = this._color;\n\t\t\tctx.stroke();\n\t\t\tctx.globalAlpha = 1;\n\t\t});\n\t}\n}\n\nclass PaneView {\n\tconstructor(color) {\n\t\tthis._renderer = new PaneRenderer(color);\n\t}\n\tzOrder() {\n\t\treturn 'bottom';\n\t}\n\trenderer() {\n\t\treturn this._renderer;\n\t}\n}\n\nclass SectionsPrimitive {\n\tconstructor() {\n\t\tthis.sections = {\n\t\t\tpane: { color: '#4cc9f0', name: 'Chart Pane (paneViews)' },\n\t\t\tprice: { color: '#f72585', name: 'Price Pane (priceAxisPaneViews)' },\n\t\t\ttime: { color: '#4361ee', name: 'Time Pane (timeAxisPaneViews)' },\n\t\t\tpriceLabel: { color: '#f77f00', name: 'Price Label (priceAxisViews)' },\n\t\t\ttimeLabel: { color: '#40916c', name: 'Time Label (timeAxisViews)' },\n\t\t};\n\t\tthis._paneViews = [\n\t\t\tnew PaneView(this.sections.pane.color),\n\t\t\tnew LegendView(this.sections),\n\t\t];\n\t\tthis._pricePaneViews = [new PaneView(this.sections.price.color)];\n\t\tthis._timePaneViews = [new PaneView(this.sections.time.color)];\n\t\tthis._priceAxisViews = [\n\t\t\tnew AxisView('price label', this.sections.priceLabel.color, 80),\n\t\t];\n\t\tthis._timeAxisViews = [\n\t\t\tnew AxisView('time label', this.sections.timeLabel.color, 200),\n\t\t];\n\t}\n\n\tupdateAllViews() {}\n\n\tpaneViews() {\n\t\treturn this._paneViews;\n\t}\n\n\ttimeAxisPaneViews() {\n\t\treturn this._timePaneViews;\n\t}\n\n\tpriceAxisPaneViews() {\n\t\treturn this._pricePaneViews;\n\t}\n\n\ttimeAxisViews() {\n\t\treturn this._timeAxisViews;\n\t}\n\n\tpriceAxisViews() {\n\t\treturn this._priceAxisViews;\n\t}\n}\n\nlet randomFactor = 25 + Math.random() * 25;\nconst samplePoint = i =>\n\ti *\n\t\t(0.5 +\n\t\t\tMath.sin(i / 10) * 0.2 +\n\t\t\tMath.sin(i / 20) * 0.4 +\n\t\t\tMath.sin(i / randomFactor) * 0.8 +\n\t\t\tMath.sin(i / 500) * 0.5) +\n\t200;\n\nfunction generateLineData(numberOfPoints = 500) {\n\trandomFactor = 25 + Math.random() * 25;\n\tconst res = [];\n\tconst date = new Date(Date.UTC(2018, 0, 1, 12, 0, 0, 0));\n\tfor (let i = 0; i < numberOfPoints; ++i) {\n\t\tconst time = date.getTime() / 1000;\n\t\tconst value = samplePoint(i);\n\t\tres.push({\n\t\t\ttime,\n\t\t\tvalue,\n\t\t\tcustomValues: {\n\t\t\t\ttext: 'hello',\n\t\t\t},\n\t\t});\n\n\t\tdate.setUTCDate(date.getUTCDate() + 1);\n\t}\n\n\treturn res;\n}\n\nconst chartOptions = {\n\tlayout: {\n\t\ttextColor: CHART_TEXT_COLOR,\n\t\tbackground: { type: 'solid', color: CHART_BACKGROUND_COLOR },\n\t},\n};\n\nconst chart = createChart(document.getElementById('container'), chartOptions);\nconst lineSeries = chart.addLineSeries({\n\tcolor: CHART_TEXT_COLOR,\n});\nconst data = generateLineData();\nlineSeries.setData(data);\nlineSeries.attachPrimitive(new SectionsPrimitive());\n",o="class PaneRenderer {\n\tconstructor(layer, showName, index, numBands) {\n\t\tthis._layer = layer;\n\t\tthis._showName = showName;\n\t\tthis._index = index;\n\t\tthis._selected = 'all';\n\t\tthis._numBands = numBands;\n\t}\n\tdraw(target) {\n\t\tif (this._layer.background) {\n\t\t\treturn;\n\t\t}\n\t\tif (this._selected !== 'all' && this._selected !== this._layer.id) {\n\t\t\treturn;\n\t\t}\n\t\tthis._drawImpl(target);\n\t}\n\tdrawBackground(target) {\n\t\tif (!this._layer.background) {\n\t\t\treturn;\n\t\t}\n\t\tif (this._selected !== 'all' && this._selected !== this._layer.id) {\n\t\t\treturn;\n\t\t}\n\t\tthis._drawImpl(target);\n\t}\n\n\t_drawingAngle(scope) {\n\t\tconst isPriceScale = scope.mediaSize.width < 100;\n\t\tconst isTimeScale = scope.mediaSize.height < 50;\n\t\tif (isPriceScale) {\n\t\t\treturn 0;\n\t\t}\n\t\tif (isTimeScale) {\n\t\t\treturn Math.PI / 2;\n\t\t}\n\t\treturn Math.PI / 3;\n\t}\n\n\t_drawImpl(target) {\n\t\ttarget.useMediaCoordinateSpace(scope => {\n\t\t\tconst ctx = scope.context;\n\t\t\tctx.save();\n\t\t\tif (this._selected === 'all') {\n\t\t\t\tconst isScale = scope.mediaSize.height < 50 || scope.mediaSize.width < 100;\n\t\t\t\tconst numBands = this._numBands + (isScale ? 2 : 0);\n\t\t\t\tconst angle = this._drawingAngle(scope);\n\t\t\t\tconst shift = Math.cos(angle) * scope.mediaSize.height;\n\t\t\t\tconst bandWidth = Math.round(\n\t\t\t\t\t(scope.mediaSize.width - shift) / numBands\n\t\t\t\t);\n\t\t\t\tconst offset = isScale ? 2 : 0;\n\t\t\t\tconst startX = (this._index + (isScale ? 1 : 0)) * bandWidth;\n\t\t\t\tctx.beginPath();\n\t\t\t\tctx.moveTo(startX, scope.mediaSize.height);\n\t\t\t\tctx.lineTo(startX + shift, offset);\n\t\t\t\tctx.lineTo(startX + shift + bandWidth, offset);\n\t\t\t\tctx.lineTo(startX + bandWidth, scope.mediaSize.height);\n\t\t\t\tctx.closePath();\n\t\t\t\tctx.fillStyle = this._layer.color;\n\t\t\t\tctx.fill();\n\t\t\t\tif (this._showName) {\n\t\t\t\t\tctx.fillStyle = this._layer.textColor;\n\t\t\t\t\tctx.font = 'normal 16px sans-serif';\n\t\t\t\t\tctx.translate(startX, scope.mediaSize.height);\n\t\t\t\t\tctx.rotate(-1.06 * angle);\n\t\t\t\t\tctx.fillText(this._layer.name, 20, 20);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tctx.beginPath();\n\t\t\t\tctx.rect(0, 0, scope.mediaSize.width, scope.mediaSize.height);\n\t\t\t\tctx.fillStyle = this._layer.color;\n\t\t\t\tctx.fill();\n\t\t\t}\n\t\t\tctx.restore();\n\t\t});\n\t}\n\tupdate(name) {\n\t\tthis._selected = name;\n\t}\n}\n\nclass PaneView {\n\tconstructor(layer, showName, index, numBands) {\n\t\tthis._layer = layer;\n\t\tthis._renderer = new PaneRenderer(layer, showName, index, numBands);\n\t}\n\tzOrder() {\n\t\treturn this._layer.zOrder;\n\t}\n\trenderer() {\n\t\treturn this._renderer;\n\t}\n\tupdate(name) {\n\t\tthis._renderer.update(name);\n\t}\n}\n\nclass LayersPrimitive {\n\tconstructor() {\n\t\tthis.layers = {\n\t\t\tbottom: {\n\t\t\t\tname: 'bottom',\n\t\t\t\tcolor: '#f72585',\n\t\t\t\ttextColor: '#ffffff',\n\t\t\t\tzOrder: 'bottom',\n\t\t\t\tbackground: false,\n\t\t\t\tid: 'bottom',\n\t\t\t},\n\t\t\tnormalBackground: {\n\t\t\t\tname: 'normal (background)',\n\t\t\t\tcolor: '#7209b7',\n\t\t\t\ttextColor: '#ffffff',\n\t\t\t\tzOrder: 'normal',\n\t\t\t\tbackground: true,\n\t\t\t\tid: 'normalBackground',\n\t\t\t},\n\t\t\tnormal: {\n\t\t\t\tname: 'normal',\n\t\t\t\tcolor: '#4361ee',\n\t\t\t\ttextColor: '#ffffff',\n\t\t\t\tzOrder: 'normal',\n\t\t\t\tbackground: false,\n\t\t\t\tid: 'normal',\n\t\t\t},\n\t\t\ttop: {\n\t\t\t\tname: 'top',\n\t\t\t\tcolor: '#4cc9f0',\n\t\t\t\ttextColor: '#000000',\n\t\t\t\tzOrder: 'top',\n\t\t\t\tbackground: false,\n\t\t\t\tid: 'top',\n\t\t\t},\n\t\t};\n\t\tconst layerKeys = ['bottom', 'normalBackground', 'normal', 'top'];\n\t\tconst numBands = layerKeys.length;\n\t\tthis._paneViews = layerKeys.map(\n\t\t\t(key, index) => new PaneView(this.layers[key], true, index, numBands)\n\t\t);\n\t\tthis._pricePaneViews = layerKeys.map(\n\t\t\t(key, index) => new PaneView(this.layers[key], false, index, numBands)\n\t\t);\n\t\tthis._timePaneViews = layerKeys.map(\n\t\t\t(key, index) => new PaneView(this.layers[key], false, index, numBands)\n\t\t);\n\t}\n\n\tchangeSelectedLayer(id) {\n\t\tif (id !== 'all' && !Object.keys(this.layers).includes(id)) {\n\t\t\treturn;\n\t\t}\n\t\tthis._paneViews.forEach(view => view.update(id));\n\t\tthis._pricePaneViews.forEach(view => view.update(id));\n\t\tthis._timePaneViews.forEach(view => view.update(id));\n\t\tif (this._requestUpdate) {\n\t\t\tthis._requestUpdate();\n\t\t}\n\t}\n\n\tattached({ requestUpdate }) {\n\t\tthis._requestUpdate = requestUpdate;\n\t}\n\tdetached() {\n\t\tthis._requestUpdate = undefined;\n\t}\n\n\tupdateAllViews() {}\n\n\tpaneViews() {\n\t\treturn this._paneViews;\n\t}\n\n\ttimeAxisPaneViews() {\n\t\treturn this._timePaneViews;\n\t}\n\n\tpriceAxisPaneViews() {\n\t\treturn this._pricePaneViews;\n\t}\n}\n\nlet randomFactor = 25 + Math.random() * 25;\nconst samplePoint = i =>\n\ti *\n\t\t(0.5 +\n\t\t\tMath.sin(i / 10) * 0.2 +\n\t\t\tMath.sin(i / 20) * 0.4 +\n\t\t\tMath.sin(i / randomFactor) * 0.8 +\n\t\t\tMath.sin(i / 500) * 0.5) +\n\t200;\n\nfunction generateLineData(numberOfPoints = 500) {\n\trandomFactor = 25 + Math.random() * 25;\n\tconst res = [];\n\tconst date = new Date(Date.UTC(2018, 0, 1, 12, 0, 0, 0));\n\tfor (let i = 0; i < numberOfPoints; ++i) {\n\t\tconst time = date.getTime() / 1000;\n\t\tconst value = samplePoint(i);\n\t\tres.push({\n\t\t\ttime,\n\t\t\tvalue,\n\t\t\tcustomValues: {\n\t\t\t\ttext: 'hello',\n\t\t\t},\n\t\t});\n\n\t\tdate.setUTCDate(date.getUTCDate() + 1);\n\t}\n\n\treturn res;\n}\n\nconst chartOptions = {\n\tlayout: {\n\t\ttextColor: CHART_TEXT_COLOR,\n\t\tbackground: { type: 'solid', color: CHART_BACKGROUND_COLOR },\n\t},\n};\n\nconst chart = createChart(document.getElementById('container'), chartOptions);\n\nconst lineSeries = chart.addLineSeries({\n\tcolor: CHART_TEXT_COLOR,\n});\nconst data = generateLineData();\nlineSeries.setData(data);\nconst layersPrimitive = new LayersPrimitive();\nlineSeries.attachPrimitive(layersPrimitive);\n\nfunction generateLayerOption(id, name, selected) {\n\tconst element = document.createElement('option');\n\telement.value = id;\n\telement.innerHTML = name;\n\telement.selected = selected;\n\treturn element;\n}\n\nconst chartContainer = document.querySelector('#container');\nif (chartContainer) {\n\tconst layerSelect = document.createElement('select');\n\tlayerSelect.id = 'layer-select';\n\tlayerSelect.name = 'layer';\n\tchartContainer.parentElement.appendChild(layerSelect);\n\tlayerSelect.style.position = 'absolute';\n\tlayerSelect.style.zIndex = 10;\n\tlayerSelect.style.left = '10px';\n\tlayerSelect.style.top = '10px';\n}\n\nconst layerSelectDiv = document.querySelector('#layer-select');\n// eslint-disable-next-line no-console\nconsole.log(layerSelectDiv);\nif (layerSelectDiv) {\n\tlayerSelectDiv.appendChild(generateLayerOption('all', 'All', true));\n\tfor (const layerInfo of Object.values(layersPrimitive.layers)) {\n\t\tlayerSelectDiv.appendChild(\n\t\t\tgenerateLayerOption(layerInfo.id, layerInfo.name, false)\n\t\t);\n\t}\n\tlayerSelectDiv.addEventListener('change', () => {\n\t\tlayersPrimitive.changeSelectedLayer(layerSelectDiv.value);\n\t});\n}\n",l={sidebar_label:"Series Primitives",sidebar_position:1},c="Series Primitives",d={unversionedId:"plugins/series-primitives",id:"plugins/series-primitives",title:"Series Primitives",description:"Primitives are extensions to the series which can define views and renderers to",source:"@site/docs/plugins/series-primitives.mdx",sourceDirName:"plugins",slug:"/plugins/series-primitives",permalink:"/lightweight-charts/docs/next/plugins/series-primitives",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Series Primitives",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/lightweight-charts/docs/next/plugins/intro"},next:{title:"Custom Series Types",permalink:"/lightweight-charts/docs/next/plugins/custom_series"}},h={},m=[{value:"Views",id:"views",level:2},{value:"ISeriesPrimitivePaneView",id:"iseriesprimitivepaneview",level:3},{value:"Interactive Demo of zOrder layers",id:"interactive-demo-of-zorder-layers",level:4},{value:"ISeriesPrimitiveAxisView",id:"iseriesprimitiveaxisview",level:3},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2},{value:"attached",id:"attached",level:3},{value:"detached",id:"detached",level:3},{value:"Updating Views",id:"updating-views",level:2},{value:"Extending the Autoscale Info",id:"extending-the-autoscale-info",level:2}],p={toc:m},u="wrapper";function f(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"series-primitives"},"Series Primitives"),(0,a.kt)("p",null,"Primitives are extensions to the series which can define views and renderers to\ndraw on the chart using\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D"},"CanvasRenderingContext2D"),"."),(0,a.kt)("p",null,"Primitives are defined by implementing the\n",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#iseriesprimitive"},(0,a.kt)("inlineCode",{parentName:"a"},"ISeriesPrimitive"))," interface. The\ninterface defines the basic functionality and structure required for creating\ncustom primitives."),(0,a.kt)("h2",{id:"views"},"Views"),(0,a.kt)("p",null,"The primary purpose of a series primitive is to provide one, or more, views to\nthe library which contain the state and logic required to draw on the chart\npanes."),(0,a.kt)("p",null,"There are two types of views which are supported within ",(0,a.kt)("inlineCode",{parentName:"p"},"ISeriesPrimitive")," which\nare:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitivePaneView"},(0,a.kt)("inlineCode",{parentName:"a"},"ISeriesPrimitivePaneView"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitiveAxisView"},(0,a.kt)("inlineCode",{parentName:"a"},"ISeriesPrimitiveAxisView")))),(0,a.kt)("p",null,"The library will evoke the following getter functions (if defined) to get\nreferences to the primitive's defined views for the corresponding section of the\nchart:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitiveBase#paneviews"},(0,a.kt)("inlineCode",{parentName:"a"},"paneViews"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitiveBase#priceaxispaneviews"},(0,a.kt)("inlineCode",{parentName:"a"},"priceAxisPaneViews"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitiveBase#timeaxispaneviews"},(0,a.kt)("inlineCode",{parentName:"a"},"timeAxisPaneViews"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitiveBase#priceaxisviews"},(0,a.kt)("inlineCode",{parentName:"a"},"priceAxisViews"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitiveBase#timeaxisviews"},(0,a.kt)("inlineCode",{parentName:"a"},"timeAxisViews")))),(0,a.kt)("p",null,"The first three views allow drawing on the corresponding panes (main chart pane,\nprice scale pane, and horizontal time scale pane) using the\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D"},"CanvasRenderingContext2D"),"\nand should implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"ISeriesPrimitivePaneView")," interface."),(0,a.kt)("p",null,"The views returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"priceAxisViews")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"timeAxisViews")," getter methods\nshould implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"ISeriesPrimitiveAxisView")," interface and are used to define\nlabels to be drawn on the corresponding scales."),(0,a.kt)("p",null,"Below is a visual example showing the various sections of the chart where a\nPrimitive can draw."),(0,a.kt)(r.ZP,{replaceThemeConstants:!0,chart:!0,className:"language-js",chartOnly:!0,mdxType:"CodeBlock"},s),(0,a.kt)("h3",{id:"iseriesprimitivepaneview"},"ISeriesPrimitivePaneView"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitivePaneView"},(0,a.kt)("inlineCode",{parentName:"a"},"ISeriesPrimitivePaneView")),"\ninterface can be used to define a view which provides a renderer (implementing\nthe\n",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitivePaneRenderer"},(0,a.kt)("inlineCode",{parentName:"a"},"ISeriesPrimitivePaneRenderer")),"\ninterface) for drawing on the corresponding area of the chart using the\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D"},"CanvasRenderingContext2D"),"\nAPI. The view can define a\n",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitivePaneView#zorder"},(0,a.kt)("inlineCode",{parentName:"a"},"zOrder"))," to control where\nin the visual stack the drawing will occur (See\n",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#seriesprimitivepaneviewzorder"},(0,a.kt)("inlineCode",{parentName:"a"},"SeriesPrimitivePaneViewZOrder")),"\nfor more information)."),(0,a.kt)("p",null,"Renderers should provide a\n",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitivePaneRenderer#draw"},(0,a.kt)("inlineCode",{parentName:"a"},"draw"))," method which will\nbe given a ",(0,a.kt)("inlineCode",{parentName:"p"},"CanvasRenderingTarget2D")," target on which it can draw. Additionally,\na renderer can optionally provide a\n",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitivePaneRenderer#drawbackground"},(0,a.kt)("inlineCode",{parentName:"a"},"drawBackground")),"\nmethod for drawing beneath other elements on the same zOrder."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"CanvasRenderingTarget2D")," is explained in more detail on the ",(0,a.kt)("a",{parentName:"p",href:"./canvas-rendering-target"},"Canvas Rendering Target")," page.")),(0,a.kt)("h4",{id:"interactive-demo-of-zorder-layers"},"Interactive Demo of zOrder layers"),(0,a.kt)("p",null,"Below is an interactive demo chart illustrating where each zOrder is drawn\nrelative to the existing chart elements such as the grid, series, and crosshair."),(0,a.kt)(r.ZP,{replaceThemeConstants:!0,chart:!0,className:"language-js",chartOnly:!0,mdxType:"CodeBlock"},o),(0,a.kt)("h3",{id:"iseriesprimitiveaxisview"},"ISeriesPrimitiveAxisView"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitiveAxisView"},(0,a.kt)("inlineCode",{parentName:"a"},"ISeriesPrimitiveAxisView")),"\ninterface can be used to define a label on the price or time axis."),(0,a.kt)("p",null,"This interface provides several methods to define the appearance and position of\nthe label, such as the\n",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitiveAxisView#coordinate"},(0,a.kt)("inlineCode",{parentName:"a"},"coordinate"))," method,\nwhich should return the desired coordinate for the label on the axis. It also\ndefines optional methods to set the fixed coordinate, text, text color,\nbackground color, and visibility of the label."),(0,a.kt)("p",null,"Please see the\n",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitiveAxisView"},(0,a.kt)("inlineCode",{parentName:"a"},"ISeriesPrimitiveAxisView")),"\ninterface for more details."),(0,a.kt)("h2",{id:"lifecycle-methods"},"Lifecycle Methods"),(0,a.kt)("p",null,"Your primitive can use the\n",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitiveBase#attached"},(0,a.kt)("inlineCode",{parentName:"a"},"attached"))," and\n",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitiveBase#detached"},(0,a.kt)("inlineCode",{parentName:"a"},"detached"))," lifecycle methods to\nmanage the lifecycle of the primitive, such as creating or removing external\nobjects and event handlers."),(0,a.kt)("h3",{id:"attached"},"attached"),(0,a.kt)("p",null,"This method is called when the primitive is attached to a chart. The attached\nmethod is evoked with a\n",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesAttachedParameter"},"single argument")," containing\nproperties for the chart, series, and a callback to request an update. The\n",(0,a.kt)("inlineCode",{parentName:"p"},"chart")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"series")," properties are references to the chart API and the series\nAPI instances for convenience purposes so that they don't need to be manually\nprovided within the primitive's constructor (if needed by the primitive)."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"requestUpdate")," callback allows the primitive to notify the chart that it\nshould be updated and redrawn."),(0,a.kt)("h3",{id:"detached"},"detached"),(0,a.kt)("p",null,"This method is called when the primitive is detached from a chart. This can be\nused to remove any external objects or event handlers that were created during\nthe attached lifecycle method."),(0,a.kt)("h2",{id:"updating-views"},"Updating Views"),(0,a.kt)("p",null,"Your primitive should update the views in the\n",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitiveBase#updateallviews"},(0,a.kt)("inlineCode",{parentName:"a"},"updateAllViews()"))," method\nsuch that when the renderers are evoked, they can draw with the latest\ninformation. The library invokes this method when it wants to update and redraw\nthe chart. If you would like to notify the library that it should trigger an\nupdate then you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"requestUpdate")," callback provided by the attached\nlifecycle method."),(0,a.kt)("h2",{id:"extending-the-autoscale-info"},"Extending the Autoscale Info"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesPrimitiveBase#autoscaleinfo"},(0,a.kt)("inlineCode",{parentName:"a"},"autoscaleInfo()")),"\nmethod can be provided to extend the base autoScale information of the series.\nThis can be used to ensure that the chart is automatically scaled correctly to\ninclude all the graphics drawn by the primitive."),(0,a.kt)("p",null,"Whenever the chart needs to calculate the vertical visible range of the series\nwithin the current time range then it will evoke this method. This method can be\nomitted and the library will use the normal autoscale information for the\nseries. If the method is implemented then the returned values will be merged\nwith the base autoscale information to define the vertical visible range."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Please note that this method will be evoked very often during\nscrolling and zooming of the chart, thus it is recommended that this method is\neither simple to execute, or makes use of optimisations such as caching to\nensure that the chart remains responsive.")))}f.isMDXComponent=!0},44908:t=>{t.exports=["4.1","4.0","3.8"]}}]);