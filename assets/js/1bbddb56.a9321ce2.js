"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6317,7918],{40440:(e,t,a)=>{a.d(t,{ZP:()=>r});var n=a(87462),m=(a(67294),a(3905));const i={toc:[]},y="wrapper";function r(e){let{components:t,...a}=e;return(0,m.kt)(y,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("details",null,(0,m.kt)("summary",null,"How to use the code sample"),(0,m.kt)("strong",null,"The code presented below requires:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"That ",(0,m.kt)("inlineCode",{parentName:"li"},"createChart")," has already been imported. See ",(0,m.kt)("a",{parentName:"li",href:"/docs#creating-a-chart"},"Getting Started")," for more information,"),(0,m.kt)("li",{parentName:"ul"},"and that there is an html div element on the page with an ",(0,m.kt)("inlineCode",{parentName:"li"},"id")," of ",(0,m.kt)("inlineCode",{parentName:"li"},"container"),".")),(0,m.kt)("p",null,"Here is an example skeleton setup: ",(0,m.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/lightweight-charts-skeleton-n67pm6"},"Code Sandbox"),".\nYou can paste the provided code below the ",(0,m.kt)("inlineCode",{parentName:"p"},"// REPLACE EVERYTHING BELOW HERE")," comment."),(0,m.kt)("admonition",{type:"tip"},(0,m.kt)("p",{parentName:"admonition"},"Some code may be hidden to improve readability. Toggle the checkbox above the code block to reveal all the code."))))}r.isMDXComponent=!0},7925:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=a(87462),m=(a(67294),a(3905)),i=a(40440),y=a(98007);const r="// remove-start\n// Lightweight Charts\u2122 Example: Price Lines\n// https://tradingview.github.io/lightweight-charts/tutorials/how_to/price-line\n\n// remove-end\nconst chartOptions = {\n\tlayout: {\n\t\ttextColor: CHART_TEXT_COLOR,\n\t\tbackground: { type: 'solid', color: CHART_BACKGROUND_COLOR },\n\t},\n};\n// remove-line\n/** @type {import('lightweight-charts').IChartApi} */\nconst chart = createChart(document.getElementById('container'), chartOptions);\n\nconst series = chart.addLineSeries({\n\tcolor: LINE_LINE_COLOR,\n\tlineWidth: 2,\n\t// highlight-start\n\t// disabling built-in price lines\n\tlastValueVisible: false,\n\tpriceLineVisible: false,\n\t// highlight-end\n});\n\nconst data = [\n\t{ time: { year: 2018, month: 1, day: 1 }, value: 27.58405298746434 },\n\t// hide-start\n\t{ time: { year: 2018, month: 1, day: 2 }, value: 31.74088841431117 },\n\t{ time: { year: 2018, month: 1, day: 3 }, value: 35.892978753808926 },\n\t{ time: { year: 2018, month: 1, day: 4 }, value: 39.63642029045179 },\n\t{ time: { year: 2018, month: 1, day: 5 }, value: 40.79167357702531 },\n\t{ time: { year: 2018, month: 1, day: 6 }, value: 47.691740220947764 },\n\t{ time: { year: 2018, month: 1, day: 7 }, value: 49.377161099825415 },\n\t{ time: { year: 2018, month: 1, day: 8 }, value: 52.47379203136591 },\n\t{ time: { year: 2018, month: 1, day: 9 }, value: 50.40209743179448 },\n\t{ time: { year: 2018, month: 1, day: 10 }, value: 61.47316837848548 },\n\t{ time: { year: 2018, month: 1, day: 11 }, value: 58.22831552141069 },\n\t{ time: { year: 2018, month: 1, day: 12 }, value: 59.36868132891698 },\n\t{ time: { year: 2018, month: 1, day: 13 }, value: 62.10845687168416 },\n\t{ time: { year: 2018, month: 1, day: 14 }, value: 51.259701958506724 },\n\t{ time: { year: 2018, month: 1, day: 15 }, value: 56.247578870411644 },\n\t{ time: { year: 2018, month: 1, day: 16 }, value: 55.483307642385164 },\n\t{ time: { year: 2018, month: 1, day: 17 }, value: 55.85295564734231 },\n\t{ time: { year: 2018, month: 1, day: 18 }, value: 48.3138216778343 },\n\t{ time: { year: 2018, month: 1, day: 19 }, value: 53.071901176203866 },\n\t{ time: { year: 2018, month: 1, day: 20 }, value: 50.873781097281885 },\n\t{ time: { year: 2018, month: 1, day: 21 }, value: 49.7840315054249 },\n\t{ time: { year: 2018, month: 1, day: 22 }, value: 52.34956807336156 },\n\t{ time: { year: 2018, month: 1, day: 23 }, value: 53.79112543285674 },\n\t{ time: { year: 2018, month: 1, day: 24 }, value: 53.984887985424805 },\n\t{ time: { year: 2018, month: 1, day: 25 }, value: 58.56902893497121 },\n\t{ time: { year: 2018, month: 1, day: 26 }, value: 54.76191372282466 },\n\t{ time: { year: 2018, month: 1, day: 27 }, value: 63.38042554684846 },\n\t{ time: { year: 2018, month: 1, day: 28 }, value: 55.452618512103065 },\n\t{ time: { year: 2018, month: 1, day: 29 }, value: 65.60820758942769 },\n\t{ time: { year: 2018, month: 1, day: 30 }, value: 56.82795136583009 },\n\t{ time: { year: 2018, month: 1, day: 31 }, value: 70.3148022984224 },\n\t{ time: { year: 2018, month: 2, day: 1 }, value: 65.86230944167264 },\n\t{ time: { year: 2018, month: 2, day: 2 }, value: 72.05467846676524 },\n\t{ time: { year: 2018, month: 2, day: 3 }, value: 72.99238887850564 },\n\t{ time: { year: 2018, month: 2, day: 4 }, value: 67.03373730222785 },\n\t{ time: { year: 2018, month: 2, day: 5 }, value: 69.97670934736414 },\n\t{ time: { year: 2018, month: 2, day: 6 }, value: 73.08910595492105 },\n\t{ time: { year: 2018, month: 2, day: 7 }, value: 81.43976528732057 },\n\t{ time: { year: 2018, month: 2, day: 8 }, value: 73.62230936920984 },\n\t{ time: { year: 2018, month: 2, day: 9 }, value: 82.15522801870938 },\n\t{ time: { year: 2018, month: 2, day: 10 }, value: 77.99384538574678 },\n\t{ time: { year: 2018, month: 2, day: 11 }, value: 85.62489628897463 },\n\t{ time: { year: 2018, month: 2, day: 12 }, value: 86.93090666568217 },\n\t{ time: { year: 2018, month: 2, day: 13 }, value: 75.99689788850394 },\n\t{ time: { year: 2018, month: 2, day: 14 }, value: 88.46418548355727 },\n\t{ time: { year: 2018, month: 2, day: 15 }, value: 86.20760396539865 },\n\t{ time: { year: 2018, month: 2, day: 16 }, value: 81.88757639758437 },\n\t{ time: { year: 2018, month: 2, day: 17 }, value: 79.58151786389108 },\n\t{ time: { year: 2018, month: 2, day: 18 }, value: 80.96845249711073 },\n\t{ time: { year: 2018, month: 2, day: 19 }, value: 73.54901807055447 },\n\t{ time: { year: 2018, month: 2, day: 20 }, value: 75.65626118347262 },\n\t{ time: { year: 2018, month: 2, day: 21 }, value: 78.41307347680399 },\n\t{ time: { year: 2018, month: 2, day: 22 }, value: 74.60352602043042 },\n\t{ time: { year: 2018, month: 2, day: 23 }, value: 72.28241570381236 },\n\t{ time: { year: 2018, month: 2, day: 24 }, value: 72.24427397962566 },\n\t{ time: { year: 2018, month: 2, day: 25 }, value: 64.80996965592134 },\n\t{ time: { year: 2018, month: 2, day: 26 }, value: 67.37511361319652 },\n\t{ time: { year: 2018, month: 2, day: 27 }, value: 65.5449131917524 },\n\t{ time: { year: 2018, month: 2, day: 28 }, value: 65.4802711362433 },\n\t{ time: { year: 2018, month: 3, day: 1 }, value: 62.207767815581086 },\n\t{ time: { year: 2018, month: 3, day: 2 }, value: 59.78884720470812 },\n\t{ time: { year: 2018, month: 3, day: 3 }, value: 67.51846586137782 },\n\t{ time: { year: 2018, month: 3, day: 4 }, value: 68.752834400291 },\n\t{ time: { year: 2018, month: 3, day: 5 }, value: 66.63416073573323 },\n\t{ time: { year: 2018, month: 3, day: 6 }, value: 65.58601621691751 },\n\t{ time: { year: 2018, month: 3, day: 7 }, value: 57.33498792621458 },\n\t{ time: { year: 2018, month: 3, day: 8 }, value: 56.93436946311955 },\n\t{ time: { year: 2018, month: 3, day: 9 }, value: 58.31144672902557 },\n\t{ time: { year: 2018, month: 3, day: 10 }, value: 59.96407207657268 },\n\t{ time: { year: 2018, month: 3, day: 11 }, value: 55.7861486424976 },\n\t{ time: { year: 2018, month: 3, day: 12 }, value: 52.91803500214551 },\n\t{ time: { year: 2018, month: 3, day: 13 }, value: 54.491591573038306 },\n\t{ time: { year: 2018, month: 3, day: 14 }, value: 51.924409342593385 },\n\t{ time: { year: 2018, month: 3, day: 15 }, value: 41.90263950118436 },\n\t{ time: { year: 2018, month: 3, day: 16 }, value: 40.514436076485694 },\n\t{ time: { year: 2018, month: 3, day: 17 }, value: 41.065887666854486 },\n\t{ time: { year: 2018, month: 3, day: 18 }, value: 40.44445534031683 },\n\t{ time: { year: 2018, month: 3, day: 19 }, value: 42.13922977216152 },\n\t{ time: { year: 2018, month: 3, day: 20 }, value: 42.317162952084495 },\n\t{ time: { year: 2018, month: 3, day: 21 }, value: 39.02881877743751 },\n\t{ time: { year: 2018, month: 3, day: 22 }, value: 39.81917993955704 },\n\t{ time: { year: 2018, month: 3, day: 23 }, value: 36.753197056053374 },\n\t{ time: { year: 2018, month: 3, day: 24 }, value: 37.02203306330588 },\n\t{ time: { year: 2018, month: 3, day: 25 }, value: 36.36014042161194 },\n\t{ time: { year: 2018, month: 3, day: 26 }, value: 33.56275879100148 },\n\t{ time: { year: 2018, month: 3, day: 27 }, value: 34.39112540787079 },\n\t{ time: { year: 2018, month: 3, day: 28 }, value: 30.57170225544929 },\n\t{ time: { year: 2018, month: 3, day: 29 }, value: 33.56826040802756 },\n\t{ time: { year: 2018, month: 3, day: 30 }, value: 32.89895543218274 },\n\t{ time: { year: 2018, month: 3, day: 31 }, value: 31.015658561825738 },\n\t{ time: { year: 2018, month: 4, day: 1 }, value: 33.189179815787455 },\n\t{ time: { year: 2018, month: 4, day: 2 }, value: 29.530756945582162 },\n\t{ time: { year: 2018, month: 4, day: 3 }, value: 29.250978140719916 },\n\t{ time: { year: 2018, month: 4, day: 4 }, value: 27.89635178919736 },\n\t{ time: { year: 2018, month: 4, day: 5 }, value: 26.995427160624686 },\n\t{ time: { year: 2018, month: 4, day: 6 }, value: 25.89631885043023 },\n\t{ time: { year: 2018, month: 4, day: 7 }, value: 28.71812492475548 },\n\t{ time: { year: 2018, month: 4, day: 8 }, value: 23.56476085365468 },\n\t{ time: { year: 2018, month: 4, day: 9 }, value: 23.8550787876547 },\n\t{ time: { year: 2018, month: 4, day: 10 }, value: 23.27046572075657 },\n\t{ time: { year: 2018, month: 4, day: 11 }, value: 25.73099630369951 },\n\t{ time: { year: 2018, month: 4, day: 12 }, value: 23.398760738394646 },\n\t{ time: { year: 2018, month: 4, day: 13 }, value: 22.97970501784193 },\n\t{ time: { year: 2018, month: 4, day: 14 }, value: 22.145587244500526 },\n\t{ time: { year: 2018, month: 4, day: 15 }, value: 20.622578956226192 },\n\t{ time: { year: 2018, month: 4, day: 16 }, value: 21.99297423796017 },\n\t{ time: { year: 2018, month: 4, day: 17 }, value: 20.756081302371527 },\n\t{ time: { year: 2018, month: 4, day: 18 }, value: 18.1983338834302 },\n\t{ time: { year: 2018, month: 4, day: 19 }, value: 16.419404563645198 },\n\t{ time: { year: 2018, month: 4, day: 20 }, value: 18.38192363882247 },\n\t{ time: { year: 2018, month: 4, day: 21 }, value: 17.41452255210322 },\n\t{ time: { year: 2018, month: 4, day: 22 }, value: 17.39866711593896 },\n\t{ time: { year: 2018, month: 4, day: 23 }, value: 14.859371316920733 },\n\t{ time: { year: 2018, month: 4, day: 24 }, value: 14.49488592297959 },\n\t{ time: { year: 2018, month: 4, day: 25 }, value: 14.183858665721397 },\n\t{ time: { year: 2018, month: 4, day: 26 }, value: 12.754187935636056 },\n\t{ time: { year: 2018, month: 4, day: 27 }, value: 14.467536059608742 },\n\t{ time: { year: 2018, month: 4, day: 28 }, value: 14.72962730689032 },\n\t{ time: { year: 2018, month: 4, day: 29 }, value: 16.591675981296518 },\n\t{ time: { year: 2018, month: 4, day: 30 }, value: 17.560385679284135 },\n\t{ time: { year: 2018, month: 5, day: 1 }, value: 22.386250317504064 },\n\t{ time: { year: 2018, month: 5, day: 2 }, value: 23.697029442697385 },\n\t{ time: { year: 2018, month: 5, day: 3 }, value: 23.453148128592442 },\n\t{ time: { year: 2018, month: 5, day: 4 }, value: 23.164700105036882 },\n\t{ time: { year: 2018, month: 5, day: 5 }, value: 23.919034678006323 },\n\t{ time: { year: 2018, month: 5, day: 6 }, value: 25.18353870528509 },\n\t{ time: { year: 2018, month: 5, day: 7 }, value: 26.982824465076394 },\n\t{ time: { year: 2018, month: 5, day: 8 }, value: 29.122512185000712 },\n\t{ time: { year: 2018, month: 5, day: 9 }, value: 29.60160406576696 },\n\t{ time: { year: 2018, month: 5, day: 10 }, value: 30.845749384528016 },\n\t{ time: { year: 2018, month: 5, day: 11 }, value: 33.03296938636202 },\n\t{ time: { year: 2018, month: 5, day: 12 }, value: 33.784707082446104 },\n\t{ time: { year: 2018, month: 5, day: 13 }, value: 36.08545410406137 },\n\t{ time: { year: 2018, month: 5, day: 14 }, value: 36.80597815439238 },\n\t{ time: { year: 2018, month: 5, day: 15 }, value: 34.56062188644443 },\n\t{ time: { year: 2018, month: 5, day: 16 }, value: 36.52666657165473 },\n\t{ time: { year: 2018, month: 5, day: 17 }, value: 34.76705735297833 },\n\t{ time: { year: 2018, month: 5, day: 18 }, value: 39.01598033743525 },\n\t{ time: { year: 2018, month: 5, day: 19 }, value: 37.60979560604685 },\n\t{ time: { year: 2018, month: 5, day: 20 }, value: 42.403895121650436 },\n\t{ time: { year: 2018, month: 5, day: 21 }, value: 45.55998014298455 },\n\t{ time: { year: 2018, month: 5, day: 22 }, value: 39.76704752577289 },\n\t{ time: { year: 2018, month: 5, day: 23 }, value: 41.83196178430985 },\n\t{ time: { year: 2018, month: 5, day: 24 }, value: 46.99399105885453 },\n\t{ time: { year: 2018, month: 5, day: 25 }, value: 48.553566318637984 },\n\t{ time: { year: 2018, month: 5, day: 26 }, value: 48.918166891087594 },\n\t{ time: { year: 2018, month: 5, day: 27 }, value: 42.95391588314584 },\n\t{ time: { year: 2018, month: 5, day: 28 }, value: 51.267649950057546 },\n\t{ time: { year: 2018, month: 5, day: 29 }, value: 44.86104374986037 },\n\t{ time: { year: 2018, month: 5, day: 30 }, value: 46.7183564731453 },\n\t{ time: { year: 2018, month: 5, day: 31 }, value: 52.753001379260766 },\n\t{ time: { year: 2018, month: 6, day: 1 }, value: 56.04835638442964 },\n\t{ time: { year: 2018, month: 6, day: 2 }, value: 54.82119793390652 },\n\t{ time: { year: 2018, month: 6, day: 3 }, value: 57.718938021257685 },\n\t{ time: { year: 2018, month: 6, day: 4 }, value: 53.9914459224653 },\n\t{ time: { year: 2018, month: 6, day: 5 }, value: 59.33050624063286 },\n\t{ time: { year: 2018, month: 6, day: 6 }, value: 50.79074268713266 },\n\t{ time: { year: 2018, month: 6, day: 7 }, value: 53.15657316197036 },\n\t{ time: { year: 2018, month: 6, day: 8 }, value: 59.43675134021954 },\n\t{ time: { year: 2018, month: 6, day: 9 }, value: 63.28437595760727 },\n\t{ time: { year: 2018, month: 6, day: 10 }, value: 58.07099287435428 },\n\t{ time: { year: 2018, month: 6, day: 11 }, value: 56.68728978119396 },\n\t{ time: { year: 2018, month: 6, day: 12 }, value: 57.05079700873323 },\n\t{ time: { year: 2018, month: 6, day: 13 }, value: 65.65087785161663 },\n\t{ time: { year: 2018, month: 6, day: 14 }, value: 59.20877581396441 },\n\t{ time: { year: 2018, month: 6, day: 15 }, value: 64.30200099280857 },\n\t{ time: { year: 2018, month: 6, day: 16 }, value: 68.60774992100288 },\n\t{ time: { year: 2018, month: 6, day: 17 }, value: 67.16628680993453 },\n\t{ time: { year: 2018, month: 6, day: 18 }, value: 62.89644591741811 },\n\t{ time: { year: 2018, month: 6, day: 19 }, value: 61.42888198118138 },\n\t{ time: { year: 2018, month: 6, day: 20 }, value: 64.89813095653885 },\n\t{ time: { year: 2018, month: 6, day: 21 }, value: 72.72701573552945 },\n\t{ time: { year: 2018, month: 6, day: 22 }, value: 67.85006296129148 },\n\t{ time: { year: 2018, month: 6, day: 23 }, value: 74.8567814889 },\n\t{ time: { year: 2018, month: 6, day: 24 }, value: 66.24228046316296 },\n\t{ time: { year: 2018, month: 6, day: 25 }, value: 68.09192660329269 },\n\t{ time: { year: 2018, month: 6, day: 26 }, value: 75.30075953672075 },\n\t{ time: { year: 2018, month: 6, day: 27 }, value: 68.7478054620306 },\n\t{ time: { year: 2018, month: 6, day: 28 }, value: 76.2285023801364 },\n\t{ time: { year: 2018, month: 6, day: 29 }, value: 82.945167109736 },\n\t{ time: { year: 2018, month: 6, day: 30 }, value: 76.91811779365663 },\n\t{ time: { year: 2018, month: 7, day: 1 }, value: 73.4904875247808 },\n\t{ time: { year: 2018, month: 7, day: 2 }, value: 78.37882382739707 },\n\t{ time: { year: 2018, month: 7, day: 3 }, value: 77.00224598364632 },\n\t{ time: { year: 2018, month: 7, day: 4 }, value: 74.96345662377028 },\n\t{ time: { year: 2018, month: 7, day: 5 }, value: 85.54303380001907 },\n\t{ time: { year: 2018, month: 7, day: 6 }, value: 74.23916926437794 },\n\t{ time: { year: 2018, month: 7, day: 7 }, value: 86.38109732705232 },\n\t{ time: { year: 2018, month: 7, day: 8 }, value: 88.36203657839357 },\n\t{ time: { year: 2018, month: 7, day: 9 }, value: 81.63303116061893 },\n\t{ time: { year: 2018, month: 7, day: 10 }, value: 78.05188105610182 },\n\t{ time: { year: 2018, month: 7, day: 11 }, value: 93.73294498110195 },\n\t{ time: { year: 2018, month: 7, day: 12 }, value: 86.3226018109303 },\n\t{ time: { year: 2018, month: 7, day: 13 }, value: 83.18571530136985 },\n\t{ time: { year: 2018, month: 7, day: 14 }, value: 92.45097319531271 },\n\t{ time: { year: 2018, month: 7, day: 15 }, value: 82.61971871486392 },\n\t{ time: { year: 2018, month: 7, day: 16 }, value: 84.39935112744469 },\n\t{ time: { year: 2018, month: 7, day: 17 }, value: 86.84420907417798 },\n\t{ time: { year: 2018, month: 7, day: 18 }, value: 81.50766784637338 },\n\t{ time: { year: 2018, month: 7, day: 19 }, value: 88.74841709228694 },\n\t{ time: { year: 2018, month: 7, day: 20 }, value: 85.84190975050336 },\n\t{ time: { year: 2018, month: 7, day: 21 }, value: 86.9594938103096 },\n\t{ time: { year: 2018, month: 7, day: 22 }, value: 83.72572564120199 },\n\t{ time: { year: 2018, month: 7, day: 23 }, value: 83.42754326770913 },\n\t{ time: { year: 2018, month: 7, day: 24 }, value: 80.40755818165856 },\n\t{ time: { year: 2018, month: 7, day: 25 }, value: 81.40515523172276 },\n\t{ time: { year: 2018, month: 7, day: 26 }, value: 88.6671912474792 },\n\t{ time: { year: 2018, month: 7, day: 27 }, value: 83.98197434091429 },\n\t{ time: { year: 2018, month: 7, day: 28 }, value: 79.93747419607003 },\n\t{ time: { year: 2018, month: 7, day: 29 }, value: 88.74666581089701 },\n\t{ time: { year: 2018, month: 7, day: 30 }, value: 88.4887222568271 },\n\t{ time: { year: 2018, month: 7, day: 31 }, value: 91.70282162754224 },\n\t{ time: { year: 2018, month: 8, day: 1 }, value: 81.82327312829118 },\n\t{ time: { year: 2018, month: 8, day: 2 }, value: 89.56625546634567 },\n\t{ time: { year: 2018, month: 8, day: 3 }, value: 83.60742160062637 },\n\t{ time: { year: 2018, month: 8, day: 4 }, value: 92.16271144958857 },\n\t{ time: { year: 2018, month: 8, day: 5 }, value: 92.93451790057534 },\n\t{ time: { year: 2018, month: 8, day: 6 }, value: 97.10629615852636 },\n\t{ time: { year: 2018, month: 8, day: 7 }, value: 93.18989484413193 },\n\t{ time: { year: 2018, month: 8, day: 8 }, value: 99.52744238602173 },\n\t{ time: { year: 2018, month: 8, day: 9 }, value: 90.84973685659028 },\n\t{ time: { year: 2018, month: 8, day: 10 }, value: 98.37517814040118 },\n\t{ time: { year: 2018, month: 8, day: 11 }, value: 90.13525425607658 },\n\t{ time: { year: 2018, month: 8, day: 12 }, value: 95.55125798221395 },\n\t{ time: { year: 2018, month: 8, day: 13 }, value: 82.77346455876308 },\n\t{ time: { year: 2018, month: 8, day: 14 }, value: 83.24854499361042 },\n\t{ time: { year: 2018, month: 8, day: 15 }, value: 95.41999231944423 },\n\t{ time: { year: 2018, month: 8, day: 16 }, value: 93.80228527345439 },\n\t{ time: { year: 2018, month: 8, day: 17 }, value: 95.6453232668047 },\n\t{ time: { year: 2018, month: 8, day: 18 }, value: 85.15427147925779 },\n\t{ time: { year: 2018, month: 8, day: 19 }, value: 84.96447951638784 },\n\t{ time: { year: 2018, month: 8, day: 20 }, value: 95.92739640648459 },\n\t{ time: { year: 2018, month: 8, day: 21 }, value: 96.44143870862634 },\n\t{ time: { year: 2018, month: 8, day: 22 }, value: 101.23323393804354 },\n\t{ time: { year: 2018, month: 8, day: 23 }, value: 92.12092707164649 },\n\t{ time: { year: 2018, month: 8, day: 24 }, value: 101.74117610271144 },\n\t{ time: { year: 2018, month: 8, day: 25 }, value: 96.38311956379351 },\n\t{ time: { year: 2018, month: 8, day: 26 }, value: 98.18485692799554 },\n\t{ time: { year: 2018, month: 8, day: 27 }, value: 102.60080903938159 },\n\t{ time: { year: 2018, month: 8, day: 28 }, value: 97.48394132428021 },\n\t{ time: { year: 2018, month: 8, day: 29 }, value: 101.41501247525068 },\n\t{ time: { year: 2018, month: 8, day: 30 }, value: 94.9501205245301 },\n\t{ time: { year: 2018, month: 8, day: 31 }, value: 89.11429564465982 },\n\t{ time: { year: 2018, month: 9, day: 1 }, value: 104.1842141132897 },\n\t{ time: { year: 2018, month: 9, day: 2 }, value: 97.36185743859737 },\n\t{ time: { year: 2018, month: 9, day: 3 }, value: 97.34376526297034 },\n\t{ time: { year: 2018, month: 9, day: 4 }, value: 103.73609636859413 },\n\t{ time: { year: 2018, month: 9, day: 5 }, value: 86.89420264148593 },\n\t{ time: { year: 2018, month: 9, day: 6 }, value: 90.99445484839778 },\n\t{ time: { year: 2018, month: 9, day: 7 }, value: 92.0197876339847 },\n\t{ time: { year: 2018, month: 9, day: 8 }, value: 87.35412911434453 },\n\t{ time: { year: 2018, month: 9, day: 9 }, value: 97.40224787139312 },\n\t{ time: { year: 2018, month: 9, day: 10 }, value: 98.14732375673768 },\n\t{ time: { year: 2018, month: 9, day: 11 }, value: 101.5147062059064 },\n\t{ time: { year: 2018, month: 9, day: 12 }, value: 93.11950437404803 },\n\t{ time: { year: 2018, month: 9, day: 13 }, value: 98.41765784798642 },\n\t{ time: { year: 2018, month: 9, day: 14 }, value: 89.08499357950659 },\n\t{ time: { year: 2018, month: 9, day: 15 }, value: 96.29213559344964 },\n\t{ time: { year: 2018, month: 9, day: 16 }, value: 103.57528341068684 },\n\t{ time: { year: 2018, month: 9, day: 17 }, value: 98.94258099235431 },\n\t{ time: { year: 2018, month: 9, day: 18 }, value: 92.43383394007822 },\n\t{ time: { year: 2018, month: 9, day: 19 }, value: 105.39681697822706 },\n\t{ time: { year: 2018, month: 9, day: 20 }, value: 100.52663985092036 },\n\t{ time: { year: 2018, month: 9, day: 21 }, value: 98.84754340440189 },\n\t{ time: { year: 2018, month: 9, day: 22 }, value: 93.78502517034752 },\n\t{ time: { year: 2018, month: 9, day: 23 }, value: 95.51435402626828 },\n\t{ time: { year: 2018, month: 9, day: 24 }, value: 91.94633821567461 },\n\t{ time: { year: 2018, month: 9, day: 25 }, value: 98.18484857755837 },\n\t{ time: { year: 2018, month: 9, day: 26 }, value: 102.51694320185617 },\n\t{ time: { year: 2018, month: 9, day: 27 }, value: 97.40549024974396 },\n\t{ time: { year: 2018, month: 9, day: 28 }, value: 103.49718807374374 },\n\t{ time: { year: 2018, month: 9, day: 29 }, value: 108.24441490057781 },\n\t{ time: { year: 2018, month: 9, day: 30 }, value: 103.24675412744978 },\n\t{ time: { year: 2018, month: 10, day: 1 }, value: 97.05089568637521 },\n\t{ time: { year: 2018, month: 10, day: 2 }, value: 91.85875309835458 },\n\t{ time: { year: 2018, month: 10, day: 3 }, value: 72.24590653541385 },\n\t{ time: { year: 2018, month: 10, day: 4 }, value: 70.73707674373722 },\n\t{ time: { year: 2018, month: 10, day: 5 }, value: 61.2106378263602 },\n\t{ time: { year: 2018, month: 10, day: 6 }, value: 62.35889407826063 },\n\t{ time: { year: 2018, month: 10, day: 7 }, value: 56.311930696659 },\n\t{ time: { year: 2018, month: 10, day: 8 }, value: 51.462743547904374 },\n\t{ time: { year: 2018, month: 10, day: 9 }, value: 47.99928302521288 },\n\t{ time: { year: 2018, month: 10, day: 10 }, value: 42.735011616511976 },\n\t{ time: { year: 2018, month: 10, day: 11 }, value: 35.82291867003256 },\n\t{ time: { year: 2018, month: 10, day: 12 }, value: 28.706141122035454 },\n\t{ time: { year: 2018, month: 10, day: 13 }, value: 24.289344698634036 },\n\t{ time: { year: 2018, month: 10, day: 14 }, value: 22.56513000253429 },\n\t{ time: { year: 2018, month: 10, day: 15 }, value: 18.862530899060324 },\n\t{ time: { year: 2018, month: 10, day: 16 }, value: 18.164416367748263 },\n\t{ time: { year: 2018, month: 10, day: 17 }, value: 16.25993836760582 },\n\t{ time: { year: 2018, month: 10, day: 18 }, value: 15.849033589978859 },\n\t{ time: { year: 2018, month: 10, day: 19 }, value: 12.581184324950792 },\n\t{ time: { year: 2018, month: 10, day: 20 }, value: 12.46960767886934 },\n\t{ time: { year: 2018, month: 10, day: 21 }, value: 13.203284995561251 },\n\t{ time: { year: 2018, month: 10, day: 22 }, value: 12.751819244602629 },\n\t{ time: { year: 2018, month: 10, day: 23 }, value: 13.815126496529205 },\n\t{ time: { year: 2018, month: 10, day: 24 }, value: 14.44156419046133 },\n\t{ time: { year: 2018, month: 10, day: 25 }, value: 12.030505290672643 },\n\t{ time: { year: 2018, month: 10, day: 26 }, value: 13.426535837756518 },\n\t{ time: { year: 2018, month: 10, day: 27 }, value: 13.141003741491893 },\n\t{ time: { year: 2018, month: 10, day: 28 }, value: 12.216411608284261 },\n\t{ time: { year: 2018, month: 10, day: 29 }, value: 12.437867813477077 },\n\t{ time: { year: 2018, month: 10, day: 30 }, value: 12.228521667932771 },\n\t{ time: { year: 2018, month: 10, day: 31 }, value: 13.587126038913974 },\n\t{ time: { year: 2018, month: 11, day: 1 }, value: 12.016792589137491 },\n\t{ time: { year: 2018, month: 11, day: 2 }, value: 13.01948020515645 },\n\t{ time: { year: 2018, month: 11, day: 3 }, value: 12.70475528902004 },\n\t{ time: { year: 2018, month: 11, day: 4 }, value: 13.018454073452016 },\n\t{ time: { year: 2018, month: 11, day: 5 }, value: 12.505487262036313 },\n\t{ time: { year: 2018, month: 11, day: 6 }, value: 13.467522897553604 },\n\t{ time: { year: 2018, month: 11, day: 7 }, value: 13.748796553616549 },\n\t{ time: { year: 2018, month: 11, day: 8 }, value: 11.974873751121669 },\n\t{ time: { year: 2018, month: 11, day: 9 }, value: 11.8316362912944 },\n\t{ time: { year: 2018, month: 11, day: 10 }, value: 13.864291857325023 },\n\t{ time: { year: 2018, month: 11, day: 11 }, value: 12.071675684436165 },\n\t{ time: { year: 2018, month: 11, day: 12 }, value: 12.314581956701367 },\n\t{ time: { year: 2018, month: 11, day: 13 }, value: 13.223445358310986 },\n\t{ time: { year: 2018, month: 11, day: 14 }, value: 12.346191421746546 },\n\t{ time: { year: 2018, month: 11, day: 15 }, value: 12.0232072259563 },\n\t{ time: { year: 2018, month: 11, day: 16 }, value: 13.367039701380252 },\n\t{ time: { year: 2018, month: 11, day: 17 }, value: 12.232635114201212 },\n\t{ time: { year: 2018, month: 11, day: 18 }, value: 13.348220671014012 },\n\t{ time: { year: 2018, month: 11, day: 19 }, value: 13.508314659502604 },\n\t{ time: { year: 2018, month: 11, day: 20 }, value: 12.630893498655155 },\n\t{ time: { year: 2018, month: 11, day: 21 }, value: 12.632952849963768 },\n\t{ time: { year: 2018, month: 11, day: 22 }, value: 11.645073051089117 },\n\t{ time: { year: 2018, month: 11, day: 23 }, value: 13.845637677048611 },\n\t{ time: { year: 2018, month: 11, day: 24 }, value: 12.567519871595463 },\n\t{ time: { year: 2018, month: 11, day: 25 }, value: 13.927270152127294 },\n\t{ time: { year: 2018, month: 11, day: 26 }, value: 12.179362670863737 },\n\t{ time: { year: 2018, month: 11, day: 27 }, value: 12.471835488646303 },\n\t{ time: { year: 2018, month: 11, day: 28 }, value: 11.71761488042106 },\n\t{ time: { year: 2018, month: 11, day: 29 }, value: 12.181312973409113 },\n\t{ time: { year: 2018, month: 11, day: 30 }, value: 12.662272671374286 },\n\t{ time: { year: 2018, month: 12, day: 1 }, value: 13.859774226603497 },\n\t{ time: { year: 2018, month: 12, day: 2 }, value: 11.643237368800426 },\n\t{ time: { year: 2018, month: 12, day: 3 }, value: 11.646083130428282 },\n\t{ time: { year: 2018, month: 12, day: 4 }, value: 13.3486102643562 },\n\t{ time: { year: 2018, month: 12, day: 5 }, value: 13.421817450001853 },\n\t{ time: { year: 2018, month: 12, day: 6 }, value: 13.734844672048157 },\n\t{ time: { year: 2018, month: 12, day: 7 }, value: 11.808371821628475 },\n\t{ time: { year: 2018, month: 12, day: 8 }, value: 13.906976670383472 },\n\t{ time: { year: 2018, month: 12, day: 9 }, value: 13.161627469585584 },\n\t{ time: { year: 2018, month: 12, day: 10 }, value: 13.642368164712535 },\n\t{ time: { year: 2018, month: 12, day: 11 }, value: 12.755167209621261 },\n\t{ time: { year: 2018, month: 12, day: 12 }, value: 12.13947468588139 },\n\t{ time: { year: 2018, month: 12, day: 13 }, value: 13.68979129854326 },\n\t{ time: { year: 2018, month: 12, day: 14 }, value: 11.812050924695251 },\n\t{ time: { year: 2018, month: 12, day: 15 }, value: 11.71992287051065 },\n\t{ time: { year: 2018, month: 12, day: 16 }, value: 13.003823991463284 },\n\t{ time: { year: 2018, month: 12, day: 17 }, value: 13.124946877570311 },\n\t{ time: { year: 2018, month: 12, day: 18 }, value: 11.844736927132542 },\n\t{ time: { year: 2018, month: 12, day: 19 }, value: 11.770961792864846 },\n\t{ time: { year: 2018, month: 12, day: 20 }, value: 10.926179837275598 },\n\t{ time: { year: 2018, month: 12, day: 21 }, value: 11.155771630851676 },\n\t{ time: { year: 2018, month: 12, day: 22 }, value: 11.63008791780728 },\n\t{ time: { year: 2018, month: 12, day: 23 }, value: 10.216268005840389 },\n\t{ time: { year: 2018, month: 12, day: 24 }, value: 13.611694182717626 },\n\t{ time: { year: 2018, month: 12, day: 25 }, value: 17.47706580052263 },\n\t{ time: { year: 2018, month: 12, day: 26 }, value: 20.900697260373697 },\n\t{ time: { year: 2018, month: 12, day: 27 }, value: 20.44940301651778 },\n\t{ time: { year: 2018, month: 12, day: 28 }, value: 23.47128311932538 },\n\t{ time: { year: 2018, month: 12, day: 29 }, value: 28.63506505828928 },\n\t{ time: { year: 2018, month: 12, day: 30 }, value: 29.567577074788517 },\n\t// hide-end\n];\nseries.setData(data);\n\nlet minimumPrice = data[0].value;\nlet maximumPrice = minimumPrice;\nfor (let i = 1; i < data.length; i++) {\n\tconst price = data[i].value;\n\tif (price > maximumPrice) {\n\t\tmaximumPrice = price;\n\t}\n\tif (price < minimumPrice) {\n\t\tminimumPrice = price;\n\t}\n}\nconst avgPrice = (maximumPrice + minimumPrice) / 2;\n\n// highlight-start\nconst lineWidth = 2;\nconst minPriceLine = {\n\tprice: minimumPrice,\n\tcolor: BAR_DOWN_COLOR,\n\tlineWidth: lineWidth,\n\tlineStyle: 2, // LineStyle.Dashed\n\taxisLabelVisible: true,\n\ttitle: 'min price',\n};\nconst avgPriceLine = {\n\tprice: avgPrice,\n\tcolor: CHART_TEXT_COLOR,\n\tlineWidth: lineWidth,\n\tlineStyle: 1, // LineStyle.Dotted\n\taxisLabelVisible: true,\n\ttitle: 'ave price',\n};\nconst maxPriceLine = {\n\tprice: maximumPrice,\n\tcolor: BAR_UP_COLOR,\n\tlineWidth: lineWidth,\n\tlineStyle: 2, // LineStyle.Dashed\n\taxisLabelVisible: true,\n\ttitle: 'max price',\n};\n\nseries.createPriceLine(minPriceLine);\nseries.createPriceLine(avgPriceLine);\nseries.createPriceLine(maxPriceLine);\n// highlight-end\n\nchart.timeScale().fitContent();\n",l={title:"Add Price Line",sidebar_label:"Price Lines",description:"An example of how to add price lines to a chart.",pagination_prev:null,pagination_next:null,keywords:["price line"]},o=void 0,d={unversionedId:"how_to/price-line",id:"how_to/price-line",title:"Add Price Line",description:"An example of how to add price lines to a chart.",source:"@site/tutorials/how_to/price-line.mdx",sourceDirName:"how_to",slug:"/how_to/price-line",permalink:"/lightweight-charts/tutorials/how_to/price-line",draft:!1,tags:[],version:"current",frontMatter:{title:"Add Price Line",sidebar_label:"Price Lines",description:"An example of how to add price lines to a chart.",pagination_prev:null,pagination_next:null,keywords:["price line"]},sidebar:"tutorialsSidebar"},h={},u=[{value:"Short answer",id:"short-answer",level:2},{value:"Tips",id:"tips",level:2},{value:"Resources",id:"resources",level:2},{value:"Full example",id:"full-example",level:2}],v={toc:u},c="wrapper";function s(e){let{components:t,...a}=e;return(0,m.kt)(c,(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"A price line is a horizontal line drawn across the width of the chart at a specific price value.\nThis example shows how to add price lines to your chart."),(0,m.kt)("h2",{id:"short-answer"},"Short answer"),(0,m.kt)("p",null,"A price line can be added to a chart by using the\n",(0,m.kt)("a",{parentName:"p",href:"/docs/api/interfaces/ISeriesApi#createpriceline"},(0,m.kt)("inlineCode",{parentName:"a"},"createPriceLine"))," method on an existing series\n(",(0,m.kt)("a",{parentName:"p",href:"/docs/api/interfaces/ISeriesApi"},"ISeriesApi"),") instance."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-js"},"const myPriceLine = {\n    price: 1234,\n    color: '#3179F5',\n    lineWidth: 2,\n    lineStyle: 2, // LineStyle.Dashed\n    axisLabelVisible: true,\n    title: 'my label',\n};\n\nseries.createPriceLine(myPriceLine);\n")),(0,m.kt)("p",null,"You can see a full ",(0,m.kt)("a",{parentName:"p",href:"#full-example"},"working example")," below."),(0,m.kt)("h2",{id:"tips"},"Tips"),(0,m.kt)("p",null,"You may wish to disable the default price line drawn by Lightweight Charts\u2122\nfor the last value in the series (and it's label). You can do this by adjusting the\nseries options as follows:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-js"},"series.applyOptions({\n    lastValueVisible: false,\n    priceLineVisible: false,\n});\n")),(0,m.kt)("h2",{id:"resources"},"Resources"),(0,m.kt)("p",null,"You can view the related APIs here:"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"/docs/api/interfaces/ISeriesApi#createpriceline"},"createPriceLine")," - Method to create a new Price Line."),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"/docs/api/interfaces/PriceLineOptions"},"PriceLineOptions")," - Price Line options."),(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"/docs/api/enums/LineStyle"},"LineStyle")," - Available line styles.")),(0,m.kt)("h2",{id:"full-example"},"Full example"),(0,m.kt)(i.ZP,{mdxType:"UsageGuidePartial"}),(0,m.kt)(y.ZP,{replaceThemeConstants:!0,chart:!0,className:"language-js",hideableCode:!0,mdxType:"CodeBlock"},r))}s.isMDXComponent=!0},98007:(e,t,a)=>{a.d(t,{ZP:()=>L});var n=a(67294),m=a(90814),i=a(91262),y=a(92949),r=a(60373),l=a(44908);function o(e,t,a){e.addEventListener("resize",(()=>{const e=t.getBoundingClientRect();a(e.width,e.height)}),!0)}const d={3.8:async e=>{const t=await a.e(3115).then(a.bind(a,3115));return{module:t,createChart:(a,n)=>{const m=t.createChart(a,n);return o(e,a,m.resize.bind(m)),m}}},"4.0":async e=>{const t=await a.e(1539).then(a.bind(a,81539));return{module:t,createChart:(a,n)=>{const m=t.createChart(a,n);return o(e,a,m.resize.bind(m)),m}}},4.1:async e=>{const t=await a.e(9277).then(a.bind(a,39277));return{module:t,createChart:(a,n)=>{const m=t.createChart(a,n);return o(e,a,m.resize.bind(m)),m}}},current:async()=>{const e=await a.e(6738).then(a.bind(a,66738));return{module:e,createChart:(t,a)=>{const n=e.createChart(t,a);return o(window,t,n.resize.bind(n)),n}}}},h="iframe_R_Fr";function u(e){const{script:t,iframeStyle:a}=e,{preferredVersion:m}=(0,r.J)(),i=l&&l.length>0?l[0]:"",y=m?.name??i??"current",o=function(e){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${e}\n\t\t\t};\n\t\t<\/script>\n\t`}(t),u=n.useRef(null);return n.useEffect((()=>{const e=u.current,t=e?.contentWindow,a=e?.contentDocument;if(null===e||!t||!a)return;const n=async()=>{try{const{module:e,createChart:a}=await d[y](t);Object.assign(t,e),t.createChart=a,t.run?.()}catch(e){console.error(e)}};if(void 0!==t.run)n();else{const t=()=>{n(),e.removeEventListener("load",t)};e.addEventListener("load",t)}}),[o]),n.createElement("iframe",{key:t,ref:u,srcDoc:o,className:h,style:a})}var v=a(43864);const c=()=>`${Math.random().toString(36).slice(2,11)}`;function s(e){return"string"==typeof e?e:function(){const[e,t]=(0,n.useState)("");return(0,n.useEffect)((()=>t(c())),[]),e}()}const p=Object.keys(v.l.DARK);const L=e=>{const{chart:t,replaceThemeConstants:a,hideableCode:r,chartOnly:l,iframeStyle:o,...d}=e;let{children:c}=e;const{colorMode:L}=(0,y.I)(),O="dark"===L,_=s();return a&&"string"==typeof c&&(c=function(e,t){const a=t?v.l.DARK:v.l.LIGHT;let n=e;for(const m of p)n=n.replace(new RegExp(m,"g"),`'${a[m]}'`);return n}(c,O)),c=c.replace(new RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),t||r?n.createElement(n.Fragment,null,r&&n.createElement(n.Fragment,null,n.createElement("input",{id:_,type:"checkbox",className:"toggle-hidden-lines"}),n.createElement("label",{className:"toggle-label",htmlFor:_},"Show all code")),!l&&n.createElement(m.Z,d,c),t&&n.createElement(i.Z,{fallback:n.createElement("div",{className:h},"\xa0")},(()=>n.createElement(u,{script:c,iframeStyle:o})))):n.createElement(m.Z,d,c)}},43864:(e,t,a)=>{a.d(t,{l:()=>n});const n={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},44908:e=>{e.exports=["4.1","4.0","3.8"]}}]);