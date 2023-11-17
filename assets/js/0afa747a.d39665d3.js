"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5184,7918],{89176:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>_,contentTitle:()=>C,default:()=>f,frontMatter:()=>m,metadata:()=>O,toc:()=>R});var r=n(87462),a=n(67294),o=n(3905),l=n(96383),i=n(98007);const c="// delete-start\n/* Note: this file shouldn't be used directly because it has some constants which are set by\nthe docusaurus site to ensure that the chart looks great in both dark and light color themes.\nIf you want to use this example then please copy the code presented on the documentation site.\n[link](https://tradingview.github.io/lightweight-charts/tutorials/react/simple) */\n// delete-end\nimport { createChart, ColorType } from 'lightweight-charts';\nimport React, { useEffect, useRef } from 'react';\n\nexport const ChartComponent = props => {\n\tconst {\n\t\tdata,\n\t\tcolors: {\n\t\t\tbackgroundColor = CHART_BACKGROUND_COLOR,\n\t\t\tlineColor = LINE_LINE_COLOR,\n\t\t\ttextColor = CHART_TEXT_COLOR,\n\t\t\tareaTopColor = AREA_TOP_COLOR,\n\t\t\tareaBottomColor = AREA_BOTTOM_COLOR,\n\t\t} = {},\n\t} = props;\n\n\tconst chartContainerRef = useRef();\n\n\tuseEffect(\n\t\t() => {\n\t\t\tconst handleResize = () => {\n\t\t\t\tchart.applyOptions({ width: chartContainerRef.current.clientWidth });\n\t\t\t};\n\n\t\t\tconst chart = createChart(chartContainerRef.current, {\n\t\t\t\tlayout: {\n\t\t\t\t\tbackground: { type: ColorType.Solid, color: backgroundColor },\n\t\t\t\t\ttextColor,\n\t\t\t\t},\n\t\t\t\twidth: chartContainerRef.current.clientWidth,\n\t\t\t\theight: 300,\n\t\t\t});\n\t\t\tchart.timeScale().fitContent();\n\n\t\t\tconst newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });\n\t\t\tnewSeries.setData(data);\n\n\t\t\twindow.addEventListener('resize', handleResize);\n\n\t\t\treturn () => {\n\t\t\t\twindow.removeEventListener('resize', handleResize);\n\n\t\t\t\tchart.remove();\n\t\t\t};\n\t\t},\n\t\t[data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]\n\t);\n\n\treturn (\n\t\t<div\n\t\t\tref={chartContainerRef}\n\t\t/>\n\t);\n};\n\nconst initialData = [\n\t{ time: '2018-12-22', value: 32.51 },\n\t{ time: '2018-12-23', value: 31.11 },\n\t{ time: '2018-12-24', value: 27.02 },\n\t{ time: '2018-12-25', value: 27.32 },\n\t{ time: '2018-12-26', value: 25.17 },\n\t{ time: '2018-12-27', value: 28.89 },\n\t{ time: '2018-12-28', value: 25.46 },\n\t{ time: '2018-12-29', value: 23.92 },\n\t{ time: '2018-12-30', value: 22.68 },\n\t{ time: '2018-12-31', value: 22.67 },\n];\n\nexport function App(props) {\n\treturn (\n\t\t<ChartComponent {...props} data={initialData}></ChartComponent>\n\t);\n}\n";var s=n(39277);const u=t=>{const{data:e,colors:{backgroundColor:n=CHART_BACKGROUND_COLOR,lineColor:r=LINE_LINE_COLOR,textColor:o=CHART_TEXT_COLOR,areaTopColor:l=AREA_TOP_COLOR,areaBottomColor:i=AREA_BOTTOM_COLOR}={}}=t,c=(0,a.useRef)();return(0,a.useEffect)((()=>{const t=()=>{a.applyOptions({width:c.current.clientWidth})},a=(0,s.createChart)(c.current,{layout:{background:{type:s.ColorType.Solid,color:n},textColor:o},width:c.current.clientWidth,height:300});a.timeScale().fitContent();return a.addAreaSeries({lineColor:r,topColor:l,bottomColor:i}).setData(e),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t),a.remove()}}),[e,n,r,o,l,i]),a.createElement("div",{ref:c})},p=[{time:"2018-12-22",value:32.51},{time:"2018-12-23",value:31.11},{time:"2018-12-24",value:27.02},{time:"2018-12-25",value:27.32},{time:"2018-12-26",value:25.17},{time:"2018-12-27",value:28.89},{time:"2018-12-28",value:25.46},{time:"2018-12-29",value:23.92},{time:"2018-12-30",value:22.68},{time:"2018-12-31",value:22.67}];function d(t){return a.createElement(u,(0,r.Z)({},t,{data:p}))}var h=n(95804);const m={sidebar_label:"Simple example",hide_table_of_contents:!0},C="React - Simple example",O={unversionedId:"react/simple",id:"react/simple",title:"React - Simple example",description:"The following only describes a relatively simple example that only renders an area series that could be tweaked to render any other type of series.",source:"@site/tutorials/react/01-simple.mdx",sourceDirName:"react",slug:"/react/simple",permalink:"/lightweight-charts/tutorials/react/simple",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Simple example",hide_table_of_contents:!0},sidebar:"tutorialsSidebar",previous:{title:"Conclusion",permalink:"/lightweight-charts/tutorials/customization/conclusion"},next:{title:"Advanced example",permalink:"/lightweight-charts/tutorials/react/advanced"}},_={},R=[{value:"Preparing your project",id:"preparing-your-project",level:2},{value:"Creating a charting component",id:"creating-a-charting-component",level:2}],g={toc:R},L="wrapper";function f(t){let{components:e,...n}=t;return(0,o.kt)(L,(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react---simple-example"},"React - Simple example"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The following only describes a relatively simple example that only renders an ",(0,o.kt)("a",{parentName:"p",href:"/docs/series-types#area"},"area series")," that could be tweaked to render any other type of ",(0,o.kt)("a",{parentName:"p",href:"/docs/series-types"},"series"),"."),(0,o.kt)("p",{parentName:"admonition"},"For a more complete scenario where you could wrap Lightweight Charts\u2122 into a component having sub components, please consult this ",(0,o.kt)("a",{parentName:"p",href:"./advanced"},"example"),".")),(0,o.kt)("p",null,"On this page you will learn how to easily use Lightweight Charts\u2122 with React."),(0,o.kt)("h2",{id:"preparing-your-project"},"Preparing your project"),(0,o.kt)("p",null,"For the example purpose we are using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/brandiqa/react-parcel-starter"},"Parcel starter kit")," but feel free to use any other tool or starter kit."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"git clone git@github.com:brandiqa/react-parcel-starter.git lwc-react\ncd lwc-react\nnpm install\n")),(0,o.kt)("p",null,"To run your project simply"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"npm start\n")),(0,o.kt)("p",null,"This will create a web page accessible by default on ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:1234/"},"http://localhost:1234/"),"."),(0,o.kt)("h2",{id:"creating-a-charting-component"},"Creating a charting component"),(0,o.kt)("p",null,"The example ",(0,o.kt)("em",{parentName:"p"},"React component")," on this page may not fit your requirements completely. Creating a general purpose declarative wrapper for Lightweight Charts\u2122 imperative API is a challenge, but hopefully you can adapt this example to your use case."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For this example we are using props to set chart colors based on the current theme (light or dark). In your real code it might be a better idea to use a ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html#when-to-use-context"},"Context"),".")),(0,o.kt)(i.ZP,{replaceThemeConstants:!0,className:"language-jsx",mdxType:"CodeBlock"},c),(0,o.kt)("p",null,"and you'll have a reusable component that could then be enhanced, tweaked to meet your needs, adding properties and even functionalities."),(0,o.kt)("p",null,"If you've successfully followed all the steps you should see something similar to"),(0,o.kt)("div",{className:h.Z.ChartContainer},(0,o.kt)(l.Z,{ChartComponent:d,mdxType:"ThemedChart"})))}f.isMDXComponent=!0},98007:(t,e,n)=>{n.d(e,{ZP:()=>_});var r=n(67294),a=n(90814),o=n(91262),l=n(92949),i=n(60373),c=n(44908);function s(t,e,n){t.addEventListener("resize",(()=>{const t=e.getBoundingClientRect();n(t.width,t.height)}),!0)}const u={3.8:async t=>{const e=await n.e(3115).then(n.bind(n,3115));return{module:e,createChart:(n,r)=>{const a=e.createChart(n,r);return s(t,n,a.resize.bind(a)),a}}},"4.0":async t=>{const e=await n.e(1539).then(n.bind(n,81539));return{module:e,createChart:(n,r)=>{const a=e.createChart(n,r);return s(t,n,a.resize.bind(a)),a}}},4.1:async t=>{const e=await n.e(9277).then(n.bind(n,39277));return{module:e,createChart:(n,r)=>{const a=e.createChart(n,r);return s(t,n,a.resize.bind(a)),a}}},current:async()=>{const t=await n.e(6738).then(n.bind(n,66738));return{module:t,createChart:(e,n)=>{const r=t.createChart(e,n);return s(window,e,r.resize.bind(r)),r}}}},p="iframe_R_Fr";function d(t){const{script:e,iframeStyle:n}=t,{preferredVersion:a}=(0,i.J)(),o=c&&c.length>0?c[0]:"",l=a?.name??o??"current",s=function(t){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${t}\n\t\t\t};\n\t\t<\/script>\n\t`}(e),d=r.useRef(null);return r.useEffect((()=>{const t=d.current,e=t?.contentWindow,n=t?.contentDocument;if(null===t||!e||!n)return;const r=async()=>{try{const{module:t,createChart:n}=await u[l](e);Object.assign(e,t),e.createChart=n,e.run?.()}catch(t){console.error(t)}};if(void 0!==e.run)r();else{const e=()=>{r(),t.removeEventListener("load",e)};t.addEventListener("load",e)}}),[s]),r.createElement("iframe",{key:e,ref:d,srcDoc:s,className:p,style:n})}var h=n(43864);const m=()=>`${Math.random().toString(36).slice(2,11)}`;function C(t){return"string"==typeof t?t:function(){const[t,e]=(0,r.useState)("");return(0,r.useEffect)((()=>e(m())),[]),t}()}const O=Object.keys(h.l.DARK);const _=t=>{const{chart:e,replaceThemeConstants:n,hideableCode:i,chartOnly:c,iframeStyle:s,...u}=t;let{children:m}=t;const{colorMode:_}=(0,l.I)(),R="dark"===_,g=C();return n&&"string"==typeof m&&(m=function(t,e){const n=e?h.l.DARK:h.l.LIGHT;let r=t;for(const a of O)r=r.replace(new RegExp(a,"g"),`'${n[a]}'`);return r}(m,R)),m=m.replace(new RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),e||i?r.createElement(r.Fragment,null,i&&r.createElement(r.Fragment,null,r.createElement("input",{id:g,type:"checkbox",className:"toggle-hidden-lines"}),r.createElement("label",{className:"toggle-label",htmlFor:g},"Show all code")),!c&&r.createElement(a.Z,u,m),e&&r.createElement(o.Z,{fallback:r.createElement("div",{className:p},"\xa0")},(()=>r.createElement(d,{script:m,iframeStyle:s})))):r.createElement(a.Z,u,m)}},96383:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(92949),a=n(67294),o=n(43864);function l(t){const e=t?"DARK":"LIGHT";return{backgroundColor:o.l[e].CHART_BACKGROUND_COLOR,lineColor:o.l[e].LINE_LINE_COLOR,textColor:o.l[e].CHART_TEXT_COLOR,areaTopColor:o.l[e].AREA_TOP_COLOR,areaBottomColor:o.l[e].AREA_BOTTOM_COLOR}}function i(t){const{ChartComponent:e}=t,n=function(){const{colorMode:t}=(0,r.I)(),e="dark"===t,[n,o]=(0,a.useState)(l(e));return(0,a.useEffect)((()=>{o(l(e))}),[e]),n}();return a.createElement(e,{colors:n})}},43864:(t,e,n)=>{n.d(e,{l:()=>r});const r={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},95804:(t,e,n)=>{n.d(e,{Z:()=>r});const r={ChartContainer:"ChartContainer_Hwvl"}},44908:t=>{t.exports=["4.1","4.0","3.8"]}}]);