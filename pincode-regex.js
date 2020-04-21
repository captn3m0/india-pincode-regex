(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Pincode = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
const readline = require("readline");


const regexes = "/1(?:9(?:310[138]|410[1-69]|212[1-69]|001[0-2457-9])|8(?:513[125]|41(?:4[1-58]|0[124])|2(?:31[1-35]|12[124-8])|114[135]|00(?:1[0-35-9]|0[1-79]))|9221[0-2]|7(?:7(?:21[0-39]|11[0-47-9]|0(?:4[0-58]|3[13489]|0[15-7]))|6(?:21[013-9]|1(?:2[58]|1[015]|0[1-37-9])|0(?:7[135-7]|4[0-57-9]|3[0-36-9]|2[1-35-9]))|630[1-689]|710[13-9]|5(?:1(?:3[0-4689]|2[1-689])|0(?:4[026-9]|2[13-9]))|4(?:31[0-24-79]|0(?:2[1346-9]|1[1-357]))|505[0-2]|3(?:2(?:3[03-5]|2[0-359]|1[0-578])|03[0-2])|1(?:10[23]|01[0-389]))|600(?:5[59]|3[06]|2[0235]|1[12457-9]|0[1-49])|5(?:2(?:1(?:2[1-48]|1[2-8]|0[17])|02[1-68])|110[1-68])|(?:900|763)2[013-5]|7320[124-9]|7203[0-4]|(?:8(?:515|220)|7510)[1-6]|(?:923|842)0[1-6]|4(?:803[013-5]|502[2-79]|4(?:62[0-689]|30[1-356]|2(?:1[0-46]|0[124-9])|0(?:3[0-79]|1[0-24]))|404[0-4]|441[015-9]|3(?:5(?:3[0-4]|2[015-9]|0[124-7])|4(?:1[0-69]|0[126-9])|10[1-357-9]|00[125689])|205[02-8]|480[1-6]|(?:41|36)0[1-6]|1(?:20[1-6]|1(?:2[0-35-7]|1[02-9])|0(?:1[02-7]|0[1-46-8]))|0(?:50[167]|4(?:1[237]|0[125-7])|30[16-8]|1(?:2[3-6]|0[1-389])))|4801[7-9]|(?:9322|7400|5200|4710)[1-5]|(?:510|43[23])0[1-5]|7450[357]|(?:812|470)0[1-7]|(?:9340|8112|4(?:60|42)2)[1-4]|(?:9(?:44|35)|601|406)0[1-4]|60047|8214[1-8]|4(?:481|314)9|3(?:6(?:1(?:56|3[0-256]|2[89]|1[7-9])|0(?:3[03-58]|2[0167]))|4(?:20[1-5]|11[2-46-8]|00[357])|500[1-4]|3(?:20[1-7]|10[1-4]|00[14-6])|604[2-4]|2(?:1(?:57|4[05]|1[3-7]|0[1-8])|0(?:54|4[016]|3[679]|2[2-4]))|410[1-47-9]|1(?:40[2389]|30[124-6]|0(?:39|2[1-47-9])))|(?:8(?:210|122)|7310)[14]|(?:8115|6006|5213|4(?:3[04]2|080)|3212)2|7(?:622|440)5|(?:7(?:606|403|122)|4611)[0-6]|(?:841|743)2[01]|(?:9223|7514|5121|44[56]3)[0-3]|(?:40|35)133|(?:9(?:312|11[01])|8(?:520|113)|5203|4200)[1-3]|(?:9(?:33|12)|7(?:64|41)|4(?:72|47)|311)0[1-3]|(?:(?:8(?:23|00)|772)2|5151|4206)0|(?:446|351)0[1-36]|(?:9(?:341|2(?:22|10)|112)|8(?:512|2(?:30|16)|111)|7[36]00|6007|5111|4(?:7(?:11|02)|600|500|431|201|140)|3(?:502|200|100)|(?:9(?:42|24)|7(?:7[3-6]|66|42|22|13)|514|4(?:73|51|18|0[029]))0)1|8523[34]|(?:9(?:[23]20|113)|8(?:5(?:21|10)|415|222|110)|7200|4(?:800|442|142)|(?:943|765|513|407|333)0)[12]|2(?:7(?:30[6-9]|11[14]|0(?:4[0-356]|3[0-25]|2[125-9]))|61(?:52|25|1[0-6])|5(?:1(?:2[01]|1[0-3]|0[1-46])|0(?:7[5-8]|5[0-68]|4[247-9]|3[37-9]|0[14-7]))|5133|4(?:50[14-8]|40[146]|303|1(?:4[126]|0[2-9]))|411[1-3]|(?:731|506|401)0|(?:501|400|[57]20)1|3(?:30[1-3]|1(?:10|0[1-36])|[45]01|0(?:3[45]|2[1347-9]|01))|451[34]|(?:610|4(?:41|20|02)|341)[12]|2(?:50[2-68]|41[34]|10[1-578]|0(?:5[12]|1[015-8]))|1(?:10[1-35-7]|01[023]))|7(?:609|211)[0-8]|(?:7(?:702|6(?:31|20)|50[13]|121)|4(?:8(?:10|02)|4(?:5[12]|02)|20[34]|011))[0-9]|(?:9000|7(?:720|60[58]|500|430|302|2(?:10|02)|1[02]0)|51[25]0|4(?:(?:61|4[045])0|3[15]1|202|1(?:41|10))|2[12]00)[1-9]|100(?:9[0-7]|7[0-8]|[1-468][0-9]|[05][1-9]))/\n/2(?:8(?:41(?:3[56]|2[0-8])|313[056]|1[04]0[13-6]|311[0-59])|7(?:7(?:50[1-46]|2(?:1[013469]|0[1-57-9]))|4(?:80[126-8]|50[125689])|3(?:20[1-379]|15[12578])|6288|21(?:9[0-59]|8[129]|7[0-35-7]|48|2[3-9])|1(?:8(?:7[0-25]|2[145])|60[1-479]|31[0-39]))|6(?:3(?:6(?:7[689]|6[013-57]|5[1-35689])|1(?:5[0-36-9]|4[0589]|3[24-9]|2[6-8]))|230[2589]|240[1256]|150[1256])|5(?:13(?:2[07]|1[014-689])|0(?:6(?:1[1579]|0[169])|10[1346]))|7112[2-69]|62576|6362[0-689]|6113[156]|7510[1-35]|7150[2-4]|7301[02-7]|74182|4(?:91(?:9[2-69]|8[0156]|3[0-257]|2[1-68])|81(?:7[19]|4[02356])|7(?:656|12[0-29])|6(?:74[5-79]|4(?:8[1-36-8]|5[35]|4[0-689]|2[124-9])|1(?:9[34]|5[59]|4[1246-9]|2[13-57-9]))|520[15-8]|755[14]|530[14]|914[156]|4(?:71[235-7]|50[14]|2(?:3[156]|2[1-35])|10[2-4])|3(?:72[02-7]|40[1-37]|12[236])|2(?:40[15-7]|30[135-7]|22[0136]|12[37]|042))|461[67][1-79]|(?:504|493)0[1246]|6212[124]|8150[124]|3(?:2(?:33[0-369]|11[018])|1(?:30[1-79]|21[0-35-9])|0(?:30[1246]|20[124]|12[14-9]))|(?:8522|4611)3|718[34][015]|4815[89]|(?:7613|5130)[15-9]|(?:4(?:819|627)|3(?:232|120))[5-9]|7640[2-6]|3122[0-6]|81104|(?:(?:832|753)0|4(?:673|140))[1-7]|4112[1-7]|(?:4676|3(?:131|014))[1-4]|(?:7(?:73|46|19)|4(?:43|12))0[1-4]|4800[1-35-9]|4643[159]|8130[1-35-8]|2(?:9(?:40[124-68]|31[016]|21[0-256]|103)|81(?:2[015]|1[89])|7(?:80[15-9]|40[5-9])|5(?:4(?:1[2-6]|0[13-59])|12[0-6])|7304|4(?:2(?:84|3[0-2458])|1(?:8[1-3689]|7[126]|6[148]|4[135-79]|3[23579]|2[0-35-79]|1[6-9]))|781[1-7]|322[1-7]|610[1-4]|422[57-9]|815[159]|2(?:20[1-4]|1(?:3[1-35-9]|2[57-9]|0[159]))|1(?:7(?:1[1-35-8]|0[1569])|50[23578]|40[1-69]|31[0134]|20[1246-8]|1(?:1[0256]|0[13-8])))|5034[1245]|(?:(?:761|473)4|2941)[0-3]|3323[0-3]|1(?:2(?:66[13-5]|50[237]|40[1245]|30[1-35-7]|21[2-46-8]|10[4-9])|0(?:50[124-7]|43[0-3]|12[0135689]))|(?:7330|2214)[1-689]|(?:8310|7(?:[23]16|180)|4(?:8(?:12|01)|647))[1-5]|(?:7(?:52|47)|6(?:28|14)|500|4(?:92|13)|304|231)0[1-5]|(?:7[26]20|6272|4(?:777|492)|(?:742|6(?:29|12))0|2520|1220)[1-8]|(?:718[56]|611[24]|4(?:91[67]|425)|126[34])[15]|(?:6254|3330)[0-7]|(?:(?:721|625)5|4441)[0-5]|(?:7(?:331|2(?:27|13))|6231|4(?:941|767|613)|3331|2(?:603|218|101))[01]|(?:8112|73[24]1|5022|4745|2(?:813|741))[1-3]|(?:840|7(?:74|1[04])|6(?:22|13)|51[02]|43[23]|305|2(?:6[23]|50|2[03]|16))0[1-3]|7712[134]|4940[1-578]|(?:8(?:(?:52|44)0|312)|(?:8(?:4[23]|12)|7[46]3|43[05])0|2530)[1-6]|2415[1-357-9]|(?:6(?:360|256|115)|4(?:(?:6[47]|4[79])0|3(?:75|6[04])|20[02])|2(?:900|81[67])|1(?:2(?:60|11)|03[04])|(?:8(?:50|45)|7[467]0|6[1-3]0|4(?:[69]0|51|40|10)|31[05]|2(?:80|6[45]|40)|100)0)1|(?:8314|4(?:915|424)|2(?:814|216))[125]|(?:8441|7414|6361|464[16]|2511)9|1262[0-2]|(?:8(?:513|201)|6(?:3(?:68|16)|258)|5011|32(?:34|12)|2(?:90|42)1)0|(?:5020|4(?:816|6(?:49|28)))5|(?:7121|2(?:913|419|217))[05]|(?:6364|5062)[0-356]|(?:6(?:363|252)|4363|3013|2(?:912|60[12])|1(?:265|101))[0-9]|(?:8315|7188|62[57]0|4(?:723|440))[12]|(?:72[03]|505|4(?:70|46)|3[03]0|298)0[12]|6253[0-4]|(?:8(?:512|200)|7(?:612|3[04]0|1[23]0)|4(?:766|672)|3210|2(?:9[23]|60|42|1[03])0|3322|7440|1(?:100|0(?:42|20)))[1-9]|0(?:9(?:82[157]|7(?:4[3579]|3[1-689])|50[1-5]|30[1-8]|2(?:1[047]|0[2-689])|12[15])|802[0-7]|712[0-5]|987[01]|7[04]0[1-3]|6(?:25[0-35]|13[01]|00[1-3])|5(?:30[134]|2(?:6[1-578]|47))|421[1-6]|(?:9(?:8[0348]|10)|5(?:12|00))1|9(?:62|11)[125]|(?:985|511)9|3(?:40[1-357-9]|20[1-35-79]|389|1(?:41|3[125]|29))|931[0-2]|7250|315[05]|(?:(?:97|61)2|339)[0-9]|(?:96[05]|341)[12]|(?:94|73|41|30)0[12]|2(?:28[0-2]|1(?:70|65|5[05]|4[0-356]|3[0-9])|00[12])|801[0-79]|(?:986|800|724|624|212)[1-9]|1(?:3(?:1[0-4]|0[13-79])|20[146]|10[23]|0(?:1[0-79]|0[1-9]))))/\n/3(?:9(?:6(?:4(?:[36][0369]|2[147]|1[258]|0[369])|00[127])|501[0-37]|4(?:51[05-8]|24[0568])|1(?:77[045]|1(?:6[058]|5[0256]))|00(?:1[0-46-9]|0[1-46-9])|411[0156]|432[05-7]|435[025]|463[035])|8(?:8(?:30[5-7]|23[059])|42(?:4[0156]|2[0159])|3(?:43[04]|31[05-7]|00[16])|(?:9(?:23|17)|421)[025]|854[035]|914[06]|2(?:7(?:3[025]|2[1589])|4(?:4[0359]|[36][035]|2[1-578])|41[58]|30[58]|0(?:2[148]|1[06]|0[67]))|00(?:6[013]|5[0-24589]|2[1-46-8]|1[3-689]|0[124-9]))|9431[057]|9[14]10[157]|9619[135]|70(?:62[057]|42[157]|20[135])|(?:9(?:(?:60|46|31)5|112)|8325)[015]|(?:9(?:612|471|134)|8(?:556|32[47]))[056]|(?:9201|8204|7060)[125]|(?:9416|8(?:87|22)1)[03]|9301[07]|8330[57]|8550[56]|8(?:938|346)[02]|(?:9(?:61[06]|4[34]0|310)|8(?:82[04]|730|4(?:3[05]|2[058])|320|2(?:7[07]|40|31|16))|70(?:4[0478]|10|01))5|6(?:5(?:54[015]|45[056])|4(?:52[125]|31[03])|342[1357]|2(?:2(?:6[035689]|2[025-79])|03[07])|227[56]|13(?:4[57]|0[56])|116[02]|(?:553|4(?:50|4[68])|22[01])5|0(?:57[05-9]|4(?:5[02]|05)))|4(?:503[134]|40(?:4[34]|2[124-7])|30(?:4[0-289]|3[029])|2(?:31[0-24]|00[135-8])|1(?:51[0-9]|31[6-9]))|3(?:503[7-9]|4(?:80[1-48]|30[235]|00[1346])|3(?:70[12457]|51[4-6]|30[2-578])|2(?:7(?:4[26]|1[0-689]|0[1-35-9])|31[125-8])|1(?:51[78]|40[23]))|6200[124]|6101[0-3]|3552[3-6]|8915[1245]|9124[034]|3202[13-9]|2(?:703[124]|603[3-9]|5(?:2(?:2[0-3]|1[4-9])|00[1349])|361[3-6]|2(?:2(?:5[1245]|4[0-39]|3[0468]|1[1-689])|0(?:3[034]|2[13-9]))|160[125-9])|2102[1-68]|4470[1-68]|(?:9632|6201)[15]|1(?:4(?:80[14]|40[1-46]|03[0-24-8])|3(?:70[1-68]|33[0-4]|0(?:3[18]|2[2467]|1[15]))|26(?:2[023]|1[2-79])|140[1-478])|(?:[69]002|2161)[0-5]|(?:9502|4153|3(?:507|305)|2163)3|(?:8400|3(?:551|402|180)|2(?:602|360)|(?:3(?:44|26)|2(?:38|13))0)[1-3]|(?:430|133)2[1-57-9]|(?:964|842)7[25]|4[25]02[1-8]|(?:(?:600|315)0|2702|1320)[1-7]|(?:233|122)0[1-7]|(?:4403|3(?:5(?:70|02)|230)|1202)[1-57]|(?:9(?:652|4(?:60|42|22)|200|142)|8(?:842|741|5(?:42|00)|4(?:42|15))|7000|6(?:5(?:60|42)|408|3(?:62|35)|0(?:42|31))|4(?:[45]00|155)|4100|3(?:5(?:71|05)|300|241|1(?:[48]1|00))|2(?:80[04]|700|600|200|100)|(?:880|448|3(?:59|38|17)|278)0|1(?:40[01]|3(?:61|30|21)|2[09]0|10[01]))1|23001|(?:3[35]5|130)0[1-4]|(?:346|227|1(?:38|24|12))0[1-4]|(?:9(?:617|464|304|176)|8(?:934|812|2(?:48|32))|7051|6053|4103|3(?:504|203|103)|2803)[01]|2141[01]|(?:4201|3506|2220|3(?:58|13)0|1[13]60|2302)[1-5]|6114[0-2]|2652[09]|2651[2-9]|(?:8401|4154|2164)2|(?:9(?:6(?:5[1346-9]|45|3[156]|2[24]|02)|4(?:7[23]|6[26-9]|5[2-5]|4[13]|38|2[157]|1[3479])|30[35]|2(?:2[2-4]|1[1478]|04)|1(?:7[58]|4[135]|3[1-35]|2[125]))|8(?:9(?:3[1-3579]|2[1245]|1[23689])|8(?:6[134]|5[1-35-9]|4[13-578]|37|27|1[13-8])|7(?:5[1-7]|43|38|2[1-4]|1[23])|5(?:52|41|3[1-6]|1[12]|01)|4(?:41|36|2[39]|1[1-467])|3(?:4[145]|26|1[12]|0[13])|2(?:87|78|6[1-5]|33|23|1[2357]|03))|70(?:63|49|2[134]|0[2-4])|915[1-3]|876[1245]|(?:9(?:48|23|18)|8(?:77|52))1|6(?:5(?:6[1256]|4[1468]|22)|4(?:7[1-5]|53|4[79]|3[23]|2[13-58]|1[125]|0[5-7])|3(?:6[367]|5[1-3]|44|3[1-3]|0[24])|2(?:73|6[13-5]|5[1-57]|1[1245]|02)|1(?:35|2[1-58]|1[1-357])|0(?:5[2569]|4[1346-9]|3[2368]|11|0[467]))|4152|2(?:653|401|222)|1103)0|(?:(?:640|413|324|426|2(?:76|12))0|1(?:(?:26|39)0|1(?:80|02)))[1-6]|42037|3303[0-6]|(?:(?:(?:95|61)0|4(?:23|15))0|4102|3[13]02|2(?:802|520|400)|1402|2140)[1-9]|(?:9(?:6(?:44|3[78]|2[13]|1[13-58]|0[346])|4(?:44|3[3467]|23|1[258])|3(?:1[1-4]|02)|2(?:21|1[356]|0[23])|1(?:[47]4|1[1347]))|8(?:9(?:[23]6|11)|8(?:62|46|3[1-6]|2[1256])|7(?:3[1-7]|11)|5(?:5[13-57]|13)|4(?:43|3[1-4]|26)|3(?:3[2-5]|2[1-3])|2(?:8[1-6]|7[14-6]|4[57]|3[45]|2[24-6]|1[14]))|70(?:6[14-7]|4[1356]|1[13-6])|8763|6(?:5(?:6[34]|5[56]|43)|4(?:76|51|2[679]|1[34])|3(?:65|4[13]|03)|311|2(?:7[12]|62|56|31|2[3-5]|13)|13[1-3]|0(?:5[14]|37|0[35])))[05]|(?:9300|8342|63(?:64|00)|4(?:401|300)|3(?:500|30[14]|2(?:72|0[04]))|2650|(?:8[79]0|4(?:45|2[89])|342|256)0|1(?:334|130))[12]|0(?:7(?:51[0-5]|0(?:43|19)|80[1-3])|6(?:1(?:26|1[4-69])|60[1-3]|02[1-3])|630[1-8]|5(?:81[1-79]|62[1-57-9]|4(?:1[25]|0[1-8])|92[1-7]|20[1-7]|00[1-579])|(?:7[05]|6[04]|5[69])01|4(?:50[1-57]|001)|(?:65|48)0[1-4]|703[01]|(?:610|402)[1-5]|702[2-9]|(?:69|50)12|3(?:90[13-58]|80[13-7]|70[1246]|60[1-4]|51[01]|3(?:[34]8|2[35-9]|1[35]|0[1-5])|1(?:2[0-2]|1[09]|0[2-9])|712|012)|5630|502[1-6]|20(?:40|3[134679]|2[0-26-9]|1[235-9]|0[1-6])|(?:67|3[05])0[1-9]|(?:6(?:90|42)|580)[12]|1(?:71[2-4]|604|70[1-9]|4(?:27|1[0-6]|0[1-9])|0(?:3[05]|2[0-8]|1[89]|0[12]))))/\n/4(?:9(?:7(?:77[38]|44[26-9]|33[1359]|22[03-69]|11[146-9])|6(?:22[03-57]|10[07-9])|5(?:6(?:8[2-46-9]|7[147]|6[0138])|44[25-9]|22[02-4])|4(?:55[1-36]|44[1246-9]|22[1-4689])|3(?:88[157-9]|55[14589]|44[1589]|33[1258]|22[12589]|1(?:9[56]|1[13468]))|2(?:10[19]|01[02-5])|411[145]|1(?:99[35]|55[7-9]|44[145]|33[125-8]|22[1-35-9])|200[1-589]|466[159])|8(?:8(?:44[1-368]|05[019])|7(?:33[047]|11[048])|6(?:44[015-8]|55[036]|22[036]|11[1457])|4(?:77[0146]|66[01459]|22[04]|11[03467])|3(?:77[035]|33[0-246]|11[039])|200[1-589]|1(?:99[0568]|77[168]|44[159]|33[1257]|22[246]|11[15-7])|0(?:99[014679]|88[0-246-8]|55[13579]|33[1478]|10[5-9]))|(?:9477|8(?:544|488))[167]|(?:9569|8011)[0-25]|8633[1358]|9500[13469]|(?:9624|8110)[25]|7(?:7(?:55[57]|44[15-79]|22[27]|11[167])|6(?:33[2579]|22[1489])|568[256]|401[0-25]|3(?:44[0346]|33[0-25]|11[0-358])|2(?:44[25-7]|33[1679])|533[056]|1(?:51[056]|40[58]|31[1358])|0(?:6(?:7[235]|6[13469])|33[579]|2(?:3[25]|2[136-9])|11[357-9]))|8044[179]|9755[3579]|84(?:44|33)[046]|8066[17]|9633[01468]|8022[134]|9611[13568]|6(?:6(?:44[568]|11[13-68])|5(?:6(?:8[03579]|6[179])|44[1579]|33[3579]|22[0367])|4(?:88[146]|77[046]|33[17]|22[01468]|11[134])|20(?:3[0136-9]|2[02-467]|1[0136]|0[1-478])|1(?:66[18]|22[138]|11[014-6])|0(?:66[13568]|55[1347]|44[0379]))|(?:9188|7211|6466)[158]|(?:8176|7363|6425)8|(?:9399|7322)[26]|6569[137]|9166[1568]|(?:9644|8667|7(?:511|3(?:99|88))|6(?:61|02)2)[05]|(?:9000|8666)[169]|(?:9(?:723|666)|87(?:55|22)|7(?:611|310|200|110)|(?:96|85)00|6(?:666|1(?:77|00)))[15]|8677[156]|(?:8455|7(?:500|077))[125]|7567[135]|(?:9463|8310|7(?:710|635|3(?:86|58)|1[56]2))5|5(?:8(?:88[038]|77[158]|55[368]|468|33[069])|7(?:88[2578]|77[023579]|33[1369]|22[26]|11[489])|6(?:77[016]|66[1458]|33[157]|22[124]|00[136])|5(?:33[269]|22[137]|11[1568])|755[05]|4(?:77[3-5]|66[05]|44[169]|33[15])|355[156]|200[1-35-79]|311[125]|1(?:66[06]|44[0-279]|33[125]|22[01458]|11[135])|8895|0(?:445|33[127]|11[024679]))|(?:8(?:833|612|305)|7379|5631)3|(?:64|57)99[03]|(?:9(?:352|003)|7(?:756|224|160)|6(?:510|498|310|206))6|4(?:5(?:323|21[0156]|10[1-3569])|4(?:81[03]|7(?:2[03]|1[0179])|126)|330[1-48]|2(?:91[46-8]|60[3-6])|121[02457]|00(?:3[02-7]|1[02-9]|0[1-35-8]))|(?:8(?:5(?:66|22)|205)|6144|8155|5(?:411|344|155))[16]|31(?:73[16]|53[067]|20[2-9]|1(?:5[0134]|4[2-478]))|(?:9(?:412|211|004)|8167|6112|5455|4311)2|(?:9(?:434|110)|7328)7|(?:80|42)00[13]|3170[1-57-9]|4250[1-57]|4411[017]|(?:8688|4470)[124-9]|(?:9389|8(?:6(?:45|34)|20[12])|7088|4451|3181)[01]|8166[1-68]|7733[1-35]|2(?:5(?:4(?:[35]2|2[0-46-8])|327|20[13]|10[1-57-9])|431[018]|3(?:60[1-57]|1(?:1[017]|0[124-9]))|531[01]|320[1-68]|2(?:6(?:1[01]|0[1-68])|30[1-68])|1(?:60[1-35]|30[1-3568]|00[245]))|9433[13-7]|(?:4112|2(?:32|21)1)[23]|4(?:44|27)0[1-579]|(?:8(?:822|689|344)|2262)[02]|(?:9377|6511|5811)[0368]|(?:9209|8187|7(?:621|324)|5(?:838|545)|2411)9|(?:8533|9655|5055|(?:835|600)0|4140)[14]|(?:9002|4191|2511)[0-6]|(?:6204|4450)[1-7]|4(?:46|23)0[1-7]|(?:6567|5866)[479]|9555[0-79]|2221[0-5]|9511[235-9]|(?:4111|31[57]2|2201)[0-3]|(?:452|311)0[1-79]|4180[1-79]|8577[1-58]|5644[013]|(?:9334|76(?:44|13)|7655|6655|41(?:92|61)|2552)4|2544[24]|5201[0-68]|4122[1-6]|(?:4(?:40|13)|316)0[1-6]|(?:8322|7366)[025]|3111[0-8]|3174[1-356]|(?:860|215)0[1-356]|3154[0-2]|5822[068]|1(?:6(?:80[13-7]|7(?:1[23]|0[1-579])|6(?:3[02]|2[0368])|5(?:49|3[14])|43[67]|61[0-6]|31[0-6]|22[0139]|14[346]|23[0-24-6]|[08]1[0-3])|5(?:80[1-7]|7(?:2[0246-9]|0[1-35689])|6(?:3[479]|2[01689]|1[0-79])|53[06-9]|41[0-5]|20[235-9]|11[0-24-6]|0(?:2[0-3]|1[0-59]))|564[013]|4(?:60[1-79]|20[1-58]|11[013])|512[24]|531[0-35]|3(?:7(?:3[6-9]|2[0-3568])|62[34]|5(?:44|3[0-24])|40[1-69]|3(?:2[24]|1[04579])|2(?:5[0-35]|4[89]|2[0-46-9])|1(?:3[023]|1[0-68]))|430[1-6]|660[1-689]|2(?:80[1-6]|40[1-689]|30[13-8]|11[025])|552[0-8]|10(?:5[1278]|[24][0-8])|410[1-356]|400[1-356]|(?:6(?:55|12)|3(?:58|41)|241|106)[0-2]|0(?:51[0-356]|40[1-356]|2(?:2[0-2]|1[068])))|(?:9(?:7(?:45|10)|310|111|001)|8[38]00|7(?:566|3(?:78|55)|2(?:22|10)|1(?:50|41|30|11)|00[25])|8555|6(?:[46]65|311|210|455|633|1(?:55|33))|8744|9400|(?:8[57]|61)88|(?:91|80)77|8766|6622|810[05]|5(?:[78]44|400|188|377|[37]66|422|0(?:99|88|77|66|22|0[05]))|4(?:211|160)|(?:(?:9[17]|8[47])0|7(?:[367]0|1[02])|6[4-6]0|5[1357]0|410)0|1470)1|1(?:6[12]|22)1[0-689]|(?:7044|6467|5333|4431|2(?:222|131)|1231)[12]|(?:580|4(?:5[04]|30|1[57])|314|2[23]5|1(?:38|0[13]))0[12]|(?:9533|7(?:377|012))[045]|4210[124-6]|2400[124-6]|(?:4002|3113)[0-7]|9366[1-3]|(?:422|2(?:3[347]|24|1[14])|144)0[1-3]|4(?:43|31)0[1-46]|4(?:32|24)0[1-46]|(?:(?:851|312)1|2210)[1-5]|1450[1-5]|(?:9(?:645|4(?:67|45|23)|134)|8(?:412|388)|7(?:766|402|367|201)|6(?:523|424|212|0(?:33|11))|(?:83|61)99|6555|9401|7522|8777|5(?:8(?:99|47)|734|6(?:55|01)|544|401|322|202|177)|4(?:5(?:23|11)|271)|3175|1(?:642|5(?:73|54)|312|222)|3101)0|(?:9545|8188)[0245]|(?:4(?:53|29)|255|449|242|1(?:60|3[06]|02))0[1-8]|(?:7000|15(?:21|00))[1-4]|(?:4(?:42|34)|2(?:50|12))0[1-4]|(?:31(?:[57]1|12)|2541|1(?:6(?:5[12]|41)|5[57]1|3(?:71|5[12]|21)|103))[0-9]|(?:(?:740|4(?:4[18]|1[129])|31[58]|2(?:5[34]|4[13]|2[02]))0|1(?:(?:6[1-5]|5[13-6]|3[1-357]|2[12])0|10[01]|050)|3100)[1-9]|0(?:3(?:7(?:31|2[0-689])|60[12]|5(?:2[134679]|1[0-35-7])|40[1-469]|11[045]|00[124-6])|2(?:20[1-47-9]|1(?:2[0256]|1[0-7]))|3[28]0[1-46]|1(?:70[1-3]|50[1-46]|[34]0[1-5]|10[1-35-7])|(?:3(?:53|41)|161)0|120[1-46-9]|240[1-4]|371[0-9]|(?:3[157]|2[13]|16)0[1-9]|0(?:7(?:10|0[1-46-9])|6(?:1[0245]|0[1-8])|10[1-4]|0(?:6[013-9]|4[239]|3[0-57]|[27][0-24-9]|[158][0-9]|[09][1-9]))))/\n/5(?:9(?:1(?:24[0-46-8]|15[36])|000[135689])|8(?:612[0-57-9]|41(?:3[2-689]|1[13568])|313[0-24-7]|11(?:9[35-8]|2[013689])|0(?:11[248]|02[013-689]))|(?:9126|8535)[35]|9001[014-9]|7(?:7(?:24[35]|1(?:7[59]|6[08]|4[024-6]))|502[023589]|4(?:2(?:5[39]|4[0-48]|1[0-46-9])|1(?:5[0134]|4[1-68]))|31(?:3[013-7]|1[1-35-9])|426[057]|1(?:61[07]|4(?:7[5-8]|5[057]|4[0-68]|3[0-689])|23[124-7]|1(?:3[04]|1[014-9]))|00(?:2[0235-9]|1[0-24-9]))|8111[0-35-9]|6(?:21(?:3[0-258]|1[0-2479]|2[0-35-9])|0(?:10[02-57-9]|0(?:4[0-35-9]|2[0-79])))|8(?:414|145)[03]|8114[58]|7180[27]|(?:7125|6216)[0-4]|6011[02]|7611[1-57]|3(?:5(?:57[389]|27[03]|1(?:4[58]|2[4-68]))|4(?:4(?:6[0-27]|4[27-9]|3[27])|3(?:2[046-9]|1[1-3568])|2(?:2[257]|1[015-8]|0[1246-9])|12[2-46])|3(?:4(?:6[1-48]|4[04-9]|0[16-8])|2(?:6[0-4]|4[0-247-9]|3[2-9]|2[0-389])|12[4-6])|2(?:4(?:4[035]|3[02]|2[15-9])|12[237])|1(?:11[13-8]|0(?:8[1-57]|7[57]))|00(?:2[0246-9]|0[1-57-9]))|(?:8130|7(?:711|610|500)|3001)[1-8]|(?:(?:913|862)1|33(?:43|29))[0-7]|(?:8(?:5[24]3|118)|3(?:554|112))[67]|3445[0-256]|2(?:4(?:2(?:3[0469]|2[1-8])|1(?:3[1247]|2[134679]))|3(?:32[06-9]|27[0-49]|1(?:[18][0-7]|0[14589]))|2(?:64[679]|50[1-389]|40[1-389]|32[459]|2(?:6[12458]|3[3-7]))|335[67]|266[013]|1(?:45[67]|3(?:6[69]|4[03-5])|2(?:6[013]|0[127])|1(?:7[058]|5[0136-8]|2[0-256]|0[124-9]))|000[1-478])|2125[06]|(?:9113|2328)[016]|3101[19]|9114[37]|(?:9128|8(?:5(?:36|28)|416)|762[45]|3357)7|(?:344[01]|2242)[16]|(?:8544|7431|3226)[34]|2325[2-4]|1(?:8(?:59[3489]|46[2-8]|39[056]|21[6-8])|7(?:5(?:9[0-29]|2[06])|4(?:2[1-69]|0[138])|2(?:9[179]|3[4-7]))|756[19]|6(?:43[1-49]|3(?:9[016]|5[0569]|2[19])|2(?:3[37]|2[78])|1(?:7[235]|0[14578]))|(?:7(?:2[457]|16)|624)7|721[34]|(?:812|719)[2-4]|5(?:86[357]|7(?:87|6[135-7])|4(?:1[13-5]|0[1258])|55[16]|28[16]|1(?:3[34]|2[2-4])))|1822[0-25]|1633[09]|(?:8136|2(?:118|001))[0-35]|342[36][05-9]|9134[04-6]|(?:7(?:419|124)|3555|2(?:336|265)|1626)[7-9]|(?:7432|3521|2322|1621)[3-8]|(?:320|184)0[15]|7314[124]|1700[124]|(?:(?:87|71)31|(?:851|770)0|3[35]00|2434)[1-6]|8610[1-489]|(?:7501|6005|3004)[013-9]|7721[13-9]|(?:8(?:320|142)|3220|2(?:42|26)0|1580)[13]|(?:8327|7141|3(?:419|330|245)|2(?:316|2(?:43|01)|122))[5-9]|(?:7427|1515)[49]|(?:6311|1(?:834|712))[3-9]|2116[2-5]|7316[245]|1530[135]|(?:8131|3328|1741)[4-9]|(?:9125|8138|3(?:5(?:53|20)|413|327|2(?:4[78]|28))|22(?:12|03)|1(?:867|64[4-8]|51[46]))4|(?:7743|3(?:3(?:34|25)|103)|2333)[0-6]|(?:7623|2(?:441|326|241)|1764)[0-5]|(?:(?:831|7(?:72|14))0|2(?:330|121)|2400|1(?:65|50)0)[1-5]|(?:3442|2315)[5-7]|(?:(?:7(?:21|16)|872)0|3(?:552|400|310)|1(?:80|75)0)[1-7]|8712[0-245]|(?:3342|2114)[89]|7412[29]|(?:8139|7756|6314|3(?:41[578]|301)|2(?:436|334|262|1(?:35|28))|1(?:8(?:20|1[7-9])|753))6|(?:9117|7146|3(?:5(?:46|18)|348|11[37])|1(?:8(?:5[2-8]|3[1-3])|6(?:2[09]|19)))3|(?:8(?:328|1(?:40|21))|7723|6121|2(?:432|337|133)|1851)[0-3]|(?:9110|1758)[1-46-9]|22(?:61|00)[1-79]|(?:8(?:520|141)|7(?:(?:7[15]|32)0|1(?:81|30))|3(?:5[15]0|41[01]|100)|2(?:329|2[12]0|131)|1(?:8(?:41|10)|710|5(?:72|67|2[01]))|(?:773|230)0)[12]|(?:3(?:41[46]|218)|2331|1(?:816|732))[56]|(?:7322|3219|2123|1(?:838|611))[05]|(?:8715|1(?:813|577))[45]|7612[0-24]|18[35]0[128]|(?:8(?:54|21)0|7(?:745|420|310)|6310|3005|2(?:2[12]1|140))[1-3]|2100[1-3]|3(?:430|003)[125]|2324[015-7]|(?:7118|6215|1625)[79]|2124[15-7]|(?:7759|2225|1612)[6-9]|3433[018]|(?:9002|8(?:(?:73|61)3|417|212|144)|7(?:503|315|1(?:49|32))|6030|3(?:52[4-6]|4[23]5|345|241|104)|2(?:424|3(?:23|19)|2(?:51|33|02)|1[13]9)|1(?:8(?:3[56]|01)|7(?:62|37|28)|6(?:38|27|13)|511))0|(?:8526|7(?:428|217)|3(?:4[24]7|1(?:10|05))|2313|1(?:81[45]|730|54[2-6]))5|3424[03-57]|(?:8315|7134|323[12]|241[45]|1(?:8(?:4[2-5]|11)|7(?:43|1[57])|58[1-4]))2|(?:8(?:529|003)|7(?:718|214)|6316|3(?:434|2(?:46|2[29]))|1(?:7(?:35|13)|6(?:3[16]|15)|587))[0-2]|3221[1-689]|(?:7(?:758|450)|6(?:315|214)|3(?:333|1(?:21|14))|225[24]|1(?:7[36]1|6(?:3[04]|28)))9|(?:8420|7628|3(?:224|116)|1(?:711|616))[23]|(?:8326|7(?:744|216)|6122|3(?:556|21[46]))8|(?:8[47]10|3559|2321|1600)[1-4]|(?:9120|8(?:730|542|001)|7(?:74|62|22|12)0|3(?:320|115)|2(?:4(?:42|10)|320|234|130)|1(?:75[457]|64[0-2]|5(?:7[013-5]|6[0-6]|5[0-46-9]|3[1-4]|2[34679]|10))|(?:776|611)0)1|(?:8(?:533|221)|7003|3(?:5(?:58|2[28]|16)|428|106)|2(?:317|111)|1739)[01]|(?:7(?:755|222)|6006|3321|2231)[0-8]|(?:8412|7213|6003)[02-9]|(?:91(?:2[23]|1[12])|8(?:5(?:3[12]|2[12])|3(?:2[23]|12)|13[2-5])|7(?:7(?:5[2-4]|22|1[23])|62[12]|4(?:2[23]|11)|3(?:21|12)|212|112)|6(?:31[23]|00[17-9])|3102|2(?:431|113))[0-9]|(?:91(?:30|21)|8(?:711|6(?:20|11)|5(?:41|30)|3[12]1|2(?:20|11)|1[12]0|000)|7(?:7(?:51|4[12])|410|2[12]1|1(?:42|21|10)|000)|6(?:21|12|00)0|3240|2(?:(?:4[34]|23)0|132))[1-9]|0(?:9(?:40[16-9]|3(?:8[0-25]|7[156]|4[09]|2[014-7])|21[05-79]|1(?:3[0-35]|2[05-9]|0[2-6])|35[0-378])|8(?:37[3467]|2(?:8[04-6]|7[7-9]|5[02-8]|4[3-8]|3[348]|2[134]|1[0-378]|0[124-8])|10[15]|00[124])|7(?:3(?:1[68]|0[1-6])|20[1-489]|1(?:6[013-9]|5[47-9]|3[03-8]|2[0-589]|1[13-9]|0[13]))|6(?:3(?:6[5-9]|5[256]|4[2-57-9]|2[49]|1[03-9])|1(?:7[025]|6[3-9]|4[2-5]|3[245]|0[1245])|01[135])|933[4-9]|6244|811[1-7]|5(?:5(?:2[4-9]|14|0[1-5])|4(?:9[078]|7[0-6]|6[026-9]|5[0-5]|0[1-5])|3(?:2[5-7]|0[1-7])|2(?:1[0-245]|0[89])|1(?:8[4-8]|7[24]|2[29]))|8(?:26|12)6|4(?:3(?:46|23|1[0-3]|0[1-46-9])|2(?:9[2-79]|1[4-689])|10[1-79])|(?:93|51|90|40)0[12]|541[56]|630[1-3]|700[1-3]|3(?:3(?:2[12]|0[125-9])|2(?:4[56]|3[05]|2[3-5]|1[237-9]|0[1267])|1(?:8[05-8]|[467][45]|2[02-5]|1[0-24]|0[128])|00[1-3])|(?:9(?:36|11)|71[47]|4(?:22|11))0|(?:923|835|54[24])5|(?:6(?:25|1[12])|516)2|2(?:3(?:7[125]|3[14-6]|2[1459]|1[0-4689]|0[0-35-7])|2(?:9[013-6]|8[015-7]|7[0136-9]|6[79]|5[15-7]|4[6-9]|2[018])|210|(?:34|20)5|1(?:30|25|1[03-57]|0[1-37-9])|032)|(?:941|633|553)[0-2]|(?:915|718|515|427)[23]|9228|622[1-4]|(?:931|6(?:3[89]|20|15)|42[35]|2(?:38|00)|500)1|1(?:5(?:1[0-2]|0[1-689])|359|20[23]|218|[34]01|1(?:58|4[1-4]|[12]1|0[126]))|(?:721|637|5(?:48|33)|331)[01]|(?:92|60|42)0[1-9]|0(?:10[01]|0(?:9[0-8]|[27][02-9]|[13-68][0-9]|0[1-9]))))/\n/6(?:9(?:5(?:61[0-245]|31[0-36-8]|13[2-4]|0(?:4[023]|3[02-68]))|1(?:5(?:7[1-46-9]|4[013])|01[0-69])|054[02478]|156[06])|8(?:9(?:65[02-46]|59[0-2457]|11[0-35])|6(?:61[0-36]|14[1346])|5(?:61[2-689]|5(?:1[1245]|0[1357-9]))|3(?:5(?:8[01579]|5[06])|10[124-68])|0(?:69[179]|59[0146]|31[0-27]|02[0-26-8]))|9554[1-37]|7(?:851[02]|6(?:5(?:2[1-358]|1[079])|31[1279])|3(?:64[0-257]|5(?:7[0-79]|1[37])|0(?:2[017-9]|1[0-24-9]))|0(?:64[1-69]|56[1-37]|3(?:5[38]|3[14]|2[57])|01[0-478]))|4(?:32(?:3[136-9]|2[013-68])|21(?:3[02-4]|2[0235-9]|1[0-47])|1(?:65[2-589]|40[127]|30[125]|10[13-57-9]))|9551[23]|(?:9151|7358)[0-256]|(?:891|713)2[1-46]|(?:80(?:72|60)|7060)[124]|8062[03]|8(?:553|356|0(?:55|12))[1-35]|4310[1-35]|3(?:9(?:20[1-35-7]|10[1-57-9])|8(?:70[1-36]|6(?:7[23]|5[67])|11[0-256])|701[3-57-9]|6(?:90[2-6]|70[145]|40[1-46])|721[0-5]|635[124]|5(?:81[0-5]|75[124]|12[0-46])|2(?:11[3-5]|0(?:5[57-9]|0[1246-9]))|0(?:71[03]|60[269]|56[126]|40[58]|30[1-35-79]|00[1-35]))|8201[0-35-9]|9556[1-48]|(?:9055|3613)[89]|9131[0-29]|95099|(?:8359|4215)4|(?:8667|4324|3(?:68|12)1)[0-3]|8966[1-46-8]|(?:8[68]5|736)55|3070[29]|(?:9152|8231|3601)[0-6]|2(?:8(?:80[129]|71[2468]|65[36]|21[0-35-9])|7(?:81[1-48]|7(?:6[014]|5[13-9]|1[39])|65[12479]|12[07])|61(?:8[89]|4[0-29])|8229|862[0-3]|5(?:579|2(?:34|1[48]|0[1357])|02[0-3])|4(?:30[1-46-8]|2(?:1[0-2569]|0[12468]))|3(?:70[13-8]|60[13-58]|53[0-46-8]|40[1-4679])|3(?:31|1[13])5|2(?:515|40[1-479])|1(?:72[29]|30[125-8]|01[0-24])|131[0-6]|002[0-6])|(?:7(?:332|134)|2330)8|(?:86(?:63|58)|7(?:958|331)|2553)[0-7]|(?:4166|2(?:861|780|551|351|120))[2-9]|3680[3-9]|8969[1-689]|(?:9155|8354|7630|4320)[1-79]|1(?:4(?:7(?:38|1[0-7])|6(?:2[0-689]|1[2-9])|01[3-9])|110[1-689]|010[1-79])|(?:8(?:951|656|0(?:52|01))|4111|3201)[0-4]|7801[0-4]|3710[1-57]|9158[1-59]|(?:9132|8(?:960|858)|7(?:876|303)|4106|3881|2(?:8[59]5|661|5(?:5[68]|12)|242)|(?:31|25)40)2|1000[134]|(?:7931|4325|2(?:919|113)|1472)3|8559[015]|2741[2-8]|2(?:7(?:95|13)|550)[13]|(?:241|133)0[13]|(?:3(?:913|847|232)|2(?:555|3(?:80|56)))6|2501[124-9]|(?:9557|8961|7059|3565|2810|1260)[1-5]|(?:375|2(?:6[02]|56|40|20)|13[127])0[1-5]|(?:8962|7(?:855|010)|4160|3(?:805|210)|2250)[1-7]|(?:4(?:30|2[02])|35[23]|102)0[1-7]|(?:955[02]|8967|78(?:68|5[09])|3(?:645|020)|2890|1470|1420|(?:3(?:90|01)|2(?:80|57))0)[1-8]|9010[1-8]|(?:9(?:510|133|057)|8(?:957|801|555|0(?:73|10))|7(?:95[56]|8(?:62|5[37])|360|112|0(?:69|50))|3(?:(?:81|58)5|031)|2(?:92|87|76|35)0|(?:781|3(?:73|62|26|13)|2(?:9[07]|83|2[13])|1(?:44|35|2[2589]))0)[1-4]|(?:8(?:856|0(?:71|64))|7(?:8(?:7[23]|64)|65[46]|354|155|0(?:62|58))|3(?:8(?:75|40)|612|560|1(?:50|05)|050)|2(?:9(?:[28]5|10)|8[12]5|715|371|241)|1460|311[05]|(?:916|412|3(?:66|50|17)|2(?:9[356]|84|7[25]|48|01)|1(?:36|2[04]))0)[12]|(?:8556|7359)[1-356]|(?:9102|8(?:95[25]|854|0[56]7)|7(?:934|065)|4167|3(?:866|702|252|041)|1421)[01]|(?:322|2(?:98|22))0[1-49]|(?:8(?:6[05]2|3(?:52|11)|204)|3(?:8(?:46|01)|614|0[26]1)|3741|2(?:872|786|701|4(?:71|62))|1111)[0-2]|(?:7935|416[89]|2660)7|3(?:24|16)0[13-6]|(?:9(?:555|056)|8(?:971|6(?:68|04)|557|251|0(?:7[45]|63))|7(?:959|86[05-7]|366|135|0(?:7[2-4]|5[127]))|3(?:830|2(?:53|30)|156|032)|2(?:8(?:85|60)|740|522|460|1(?:85|60))|1400)1|(?:359|2(?:99|53))01|(?:951[24]|8(?:(?:85|61)0|0(?:65|54))|7(?:95[013]|8(?:70|54)|910|3(?:61|10)|0(?:70|67))|3(?:831|100)|2180)[1-6]|(?:385|1(?:49|21))0[1-6]|(?:8(?:953|6(?:6[59]|12)|350|070)|7(?:952|8(?:6[13]|58)|6(?:55|12)|912|312|15[34]|0(?:6[136]|14))|3(?:818|700|570|155)|2(?:8(?:75|50)|745|165))[1-3]|(?:365|2[49]4|1(?:4[13]|34|2[37]|10))0[1-3]|(?:9159|8(?:857|562)|7(?:(?:63|36)2|031)|4105|3(?:912|603|571)|2(?:9(?:81|18)|5(?:54|11)|422|312|1(?:73|22))|1(?:4(?:63|02)|261)|1(?:48|30)1|9011)0|2461[02-9]|(?:9153|8654|2(?:742|111))[0-8]|(?:9(?:50[12]|150|05[1-3])|8(?:853|6[05]1|20[23]|051)|7(?:933|131)|410[1-3]|3(?:[569]1|25)1|2(?:91[67]|711|61[13]|552|352|1[27]1|001))[0-9]|(?:9(?:5(?:60|58|30|00)|1[03]0|050)|8(?:9(?:64|5[048]|10)|8(?:52|00)|6(?:6[06]|5[037]|00)|5(?:60|58)|35[17]|2(?:5[05]|30|00)|0(?:6[168]|5[068]|30|00))|7(?:9(?:57|3[02])|6[15]0|3(?:63|5[02]|30|00)|0[03]0)|4(?:321|210|10[04])|3(?:8(?:45|10|00)|720|6[013]0|5[18]0|2(?:50|31)|120|055)|3740|2(?:915|820|7(?:[38]5|10)|61[02]|5[01]0|700|470|1[017]0|000)|7800|1(?:48|30)0)[1-9]|0(?:931[0-4]|8102|7(?:80[1-57]|30[1-38]|20[1-59]|112)|900[13]|6(?:60[134]|213|1(?:1[015]|0[2-8])|00[13])|5(?:7(?:66|5[124-9])|01[0134])|675[1-5]|(?:9[24]|63)0[1-5]|(?:98|6[89])0[1-8]|(?:9[57]|87)0[1-4]|(?:(?:8[056]|64)0|5(?:70|6[05]|[3-5]0))[12]|4(?:50[1-5]|30[1-7]|20[1-8]|1(?:5[1-4]|0[12]))|(?:98|51)1[01]|3(?:40[1-356]|31[0-49]|2(?:1[01]|0[1-49])|11[0-2])|3127|2(?:1(?:17|0[568])|02[13-6])|6[68]11|(?:8[2489]|4[06])01|(?:83|70)0[1-6]|200[1-3]|(?:74|5[28]|30)0[1-3]|1(?:301|20[1-6]|10[1-3])|(?:67|4[24])10|911[0-8]|(?:9[136]|71|6[27]|5[01]|44|3[13])0[1-9]|0(?:1(?:30|2[02-9]|1[035-9]|0[0-467])|0(?:7[0-8]|2[0-68]|[13-69][0-9]|[08][1-9]))))/\n/7(?:9(?:9(?:2(?:7[01357-9]|6[0-469]|0[1-57])|15[035-7]|01[02-5])|862[0-35-7]|60(?:1[247]|0[1457-9])|51(?:5[09]|2[24-9])|411[0-245]|11(?:1[0-389]|0[1-59])|212[0-39]|921[0-2]|301[0-24-9])|8(?:8(?:71[0-39]|1(?:6[0-68]|2[01367])|01[013-5])|702[36]|61(?:8[1-47-9]|7[01349])|5(?:6(?:9[0-36-9]|2[1256]|0[1-39])|0(?:1[03-5]|0[146-9]))|4(?:51[034]|1(?:8[0249]|6[013-9]|5[034]))|33(?:8[0-589]|7[0-356]|6[019]|5[04]|2[3-5])|815[0-256]|248[0-256]|(?:883|619|511|246)[0-2]|1(?:3(?:8[0-2]|6[04-9]|4[01346-9]|3[03-57-9]|2[15-9])|03[0-24-9]))|7004[0-468]|8244[0-25-8]|9925[01346]|9928[014-9]|9400[1-35]|6(?:804[02589]|70(?:6[0-25-8]|4[0-2568]|3[02357-9])|6(?:11[018]|0(?:3[1267]|2[036-9]))|50(?:2[0-69]|1[35-9])|40(?:8[15-8]|5[125-9]|2[0178]|1[14])|300[1-48]|802[05-9]|1(?:2(?:1[0-57]|0[016-9])|1(?:4[01346]|1[014-9])|0(?:5[245]|4[1-35]|2[05-9])))|6822[0-24-8]|8872[02-8]|7007[02-6]|(?:8601|6(?:805|211))[02]|6103[0-257]|8810[1-46-9]|9311[0-59]|(?:9513|8561)[0-689]|5(?:9(?:14[135-8]|03[79])|80(?:7[689]|4[013-7]|3[0-24-8])|802[0-35-9]|70(?:7[3-579]|4[0-35-9]|1[46-9])|6(?:1(?:44|3[0-57-9])|05[15689])|50(?:4[349]|2[02-8])|913[02]|4(?:2(?:9[02-6]|5[03]|4[04-68]|2[0-578])|1(?:6[02]|5[39]|1[0-49])|0(?:3[0-257]|1[0-38]))|300[1-46-9]|2(?:11[013-689]|0(?:8[0-59]|6[0-689]|5[04-7]|3[014578])))|55036|8243[59]|6(?:82|50)3[34]|8402[5-8]|6904[23]|9911[45]|(?:8870|5423)[19]|5207[07-9]|(?:9511|5616)[2-8]|(?:8411|5(?:[79]10|202))[0-7]|4(?:3(?:61[013]|50[2-4]|4(?:56|4[256]|0[15])|3(?:9[59]|6[38]|5[14-7]|3[0-26-8]|1[28])|(?:43|34)[57-9]|2(?:8[679]|6[238]|4[57-9])|1(?:9[34]|3[03-6])|14[45])|2(?:2(?:3[5-8]|1[23])|1(?:8[479]|7[45]|6[013-68]|5[19]|4[07-9]|3[2-8]))|1(?:31[35-79]|23[2458]|25[0-7]|16[0-7]))|(?:9(?:904|205)|8(?:80|61)2|5204|4316)[56]|9618[146]|(?:8(?:800|566)|4420)[1-79]|5[89]01[3-9]|9(?:912|501)[05]|(?:9112|5414)[0-35]|(?:81|55)00[13-9]|(?:856[37]|6(?:901|112))[0-6]|4329[0-47]|8809[89]|(?:8(?:570|313|135)|5(?:808|705|301|102))[0-5]|4(?:37|14)0[124]|3(?:71(?:3[1-689]|2[0168]|1[136-9]|0[1-367])|61(?:7[0-269]|6[057-9]|4[56]|3[13-5])|4(?:50[13]|4(?:3[146]|2[134679])|31[1-79]|2(?:1[3-9]|0[134]))|3(?:2(?:1[05]|0[127-9])|1(?:5[68]|4[0-35]|2[13-9]))|2(?:21[0-6]|1(?:4[0-47]|3[89]))|401[0-5]|1(?:2(?:4[0-5]|3[3-8]|1[3-69]|0[124])|1(?:3[023]|2[13-79])))|5911[16-9]|(?:8(?:600|113)|3212)[1-8]|3620[1-8]|6202[0-46-9]|(?:6810|43[14]2|3520)[2-9]|9510[1-467]|(?:8873|4222)[3-7]|4338[37]|5(?:603|410)[02-9]|4(?:35|21)13|(?:9(?:6(?:90|7[05]|[68]9|5[078]|4[2-47]|26|1[016]|09)|200)|8(?:8(?:93|78)|700|400|3[13]0|11[47])|6(?:812|115)|5(?:900|617|407)|4118|3(?:61|43)0)1|(?:8333|6210)[0-79]|(?:845|424)0[124-9]|2(?:3(?:21[235]|1(?:6[18]|4[235-9]|2[16-9]))|2(?:20[1-8]|1(?:6[0-24]|4[0-46-9]|3[2-9]))|21[78]3|1(?:60[1-467]|5(?:1[3-7]|0[13-7])|4(?:6[37]|2[02-9])|401|2(?:53|01)|1(?:6[0167]|4[03-9]|3[0-79]|2[124-9])))|3313[02-4]|(?:9709|5(?:60[17]|428)|43(?:60|32))9|5608[013-6]|6811[0-3589]|4113[7-9]|3422[0-467]|(?:(?:901|8(?:88|21)|6[48]0)0|2(?:315|1(?:63|30)))[1-6]|(?:9903|8412)5|(?:9312|8241|4327|2313)[0-3]|(?:9711|8(?:212|137)|6(?:610|407)|5902|4337|2(?:21|14)5)[0-8]|8510[124-8]|(?:5708|4(?:410|112))[1-7]|(?:9(?:608|302)|8660|700[05]|6[25-7]00|5(?:800|618|506)|4(?:3(?:41|25)|220|1[23]0)|351[02]|2(?:320|21[02]|1(?:21|1[07])))[12]|9011[46]|(?:9(?:913|712|632|315|21[13])|8(?:803|706)|5(?:610|212)|4(?:42|37)1|3432)[01]|4230[1-68]|(?:8(?:881|334|2(?:42|13))|4124|2162)[5-9]|(?:432|351)3[2-5]|(?:8(?:6(?:62|10)|240)|6(?:406|113)|5(?:70[09]|600|200)|4(?:(?:32|21)2|1(?:22|10))|(?:9[01]|82)00|3(?:612|310|210|130))[1-3]|(?:(?:986|811|4(?:43|21))0|3(?:412|110)|2310)[1-4]|(?:6(?:[78]01|403)|3615)[6-9]|8414[4-9]|(?:9902|8669|5408|4411|3618|212[2-4])2|8614[5-7]|(?:9(?:91[04]|700|210)|8(?:703|410)|3(?:53|41)0)[1-5]|(?:8(?:661|339|214)|7002|6820|5209|3(?:523|122))[0-4]|1(?:3(?:51[2-79]|4(?:3[02-4]|19)|3(?:8[013-6]|7[0-35-8]|6[0-3589]|5[7-9]|4[0-467]|2[1-6]|15)|1(?:7[0-3]|6[025-9]|5[0-8])|50[12]|13[01]|10[1-4])|2(?:70[124-8]|6(?:1[1-7]|0[12])|42[46]|3(?:1[01]|0[1-68])|51[2-5]|50[1-4]|2(?:5[08]|4[5-9]|3[2-5]|2[1-3]|0[1-4])|1(?:4[6-9]|3[4-9]))|2152|(?:330|21[02])[1-5]|1(?:40[13-589]|3(?:22|1[02-7])|2(?:2[5-7]|0[1-5])|41[0-4]|11[0-4]))|(?:9(?:929|6(?:7[137]|41|3[17]|29|19|07)|3(?:2[01]|16))|8(?:882|711|616|564|4(?:19|01)|24[579]|1(?:15|04))|6(?:707|203|001)|5(?:904|606|505|412|103)|4114|3215|2126|1352)0|(?:9(?:710|514)|8(?:811|615|568|417|312|1(?:31|12|0[12]))|6(?:803|702|404|201|1(?:10|01))|5(?:912|70[23]|6(?:12|0[24])|501|4(?:2[01]|13)|210|101)|4115|352[12]|21(?:65|4[34]|15)|1(?:3(?:42|33|21|14)|241))[0-9]|(?:9(?:900|861|500|410|3[01]0)|8(?:705|452|130)|700[13]|6(?:900|821|601|100|000)|5(?:611|40[02]|201|100)|4150|3(?:40|22)0|2164|1(?:3(?:[24]0|12)|240|1[13]0))[1-9]|00(?:1(?:60|[0-5][0-9])|0(?:[1-9][0-9]|0[1-9])))/\n/8(?:5(?:51(?:1[3-7]|0[125-8])|4(?:3(?:2[5-9]|1[125-8])|11[2-7])|21(?:3[0-27-9]|0[15-9])|112[06-9])|4(?:8(?:21[0136]|1(?:2[12579]|1[3-57]))|7(?:42[1-47-9]|20[134])|7115|5(?:4(?:2[02-9]|0[16])|315)|31(?:4[36]|1[0-57-9])|1(?:43[4-9]|3(?:1[1-36]|0[125])|28[67]))|(?:5221|4722)[2-9]|3(?:5(?:32[45]|22[0-35-9])|400[1-689]|321[2-9]|100[1-79])|(?:5434|4(?:816|724|3(?:36|13)|146)|3102)0|(?:5113|4124|3523)[0-5]|47337|(?:5120|4721)[1-5]|(?:5[34]2|420)0[1-5]|2(?:9(?:210|1(?:50|4[349]|1[0-46-9])|13[0-5])|81(?:3[0-5]|1[0-79]|0[13-9])|700[13469]|600[13-5]|5(?:41[0-38]|3(?:3[06]|2[0-69])|1(?:67|0[1-3689]))|912[1-35-9]|4(?:2(?:1[01679]|0[1-35-9])|1(?:2[0-579]|1[1-68]))|300[1-5])|4544[09]|(?:5121|4(?:543|412|142))[0-8]|(?:4723|2212)[0-689]|(?:4(?:81|33)3|2701)[0-4]|4122[0-7]|4740[1-57-9]|2(?:730|513)2|1(?:61(?:2[09]|1[05-8])|535[1-579]|41(?:6[05-7]|5[0-8]|3[13]|2[02]|1[0-689])|3(?:21[0-4]|11[03])|1(?:3(?:1[0-7]|0[1-57-9])|112))|48236|2111[0-35]|(?:321|213)1[0-2]|(?:3(?:32|2[34])0|2(?:840|213)|1121)[1-4]|(?:5111|4730|1531)[1-8]|(?:5(?:216|110)|4335|4110|2(?:930|542|331))1|(?:543|485|331)0[1-6]|(?:5222|4741|3401|2422)[01]|(?:5220|4(?:8[13]0|745|330)|2210|1(?:530|322|120))[12]|4144[0-36]|24143|5211[0-6]|(?:4(?:712|410)|3530|3510|2(?:53|4[13])0|1410)[1-3]|(?:4530|2423|1110)[1-7]|(?:451|282|120)0[1-7]|3322[0-3]|(?:5433|4(?:545|3[13]2|1[24]1)|3(?:52|10)1|2(?:812|211))[0-9]|(?:5(?:410|212)|4(?:(?:82|71)0|541|411|3(?:31|10)|1(?:40|2[03]))|3520|4(?:60|45|15)0|3210|2(?:(?:9[12]|83)0|5(?:40|31)|1[13]0)|1(?:610|414|3[12]0))[1-9]|0(?:5(?:236|1(?:3[0-35]|1[0-2]))|44(?:5[1-4]|3[0245]|1[7-9]|0[1-8])|5141|3(?:30[1-367]|2(?:21|1[1-6])|1(?:2[01]|1[013-9]|0[17-9]))|320[1-3]|2(?:3(?:1[1-46]|[05][12])|22[0-36]|1(?:83|5[24-9]|[36][0-6]|2[0235-9]|0[1-3]))|1(?:50[135-7]|30[1-7]|1(?:1[0-3]|0[2-589]))|(?:442|221)[0-9]|(?:51[02]|2(?:20|11))[1-9]|00(?:[12][0-9]|0[1-9])))/\n"
  .split("\n")
  // Remove empty lines
  .filter(function(r) {
    return r.length > 1;
  })
  // Remove the opening and closing slashes
  .map(function(r) {
    return new RegExp("^" + r.slice(1, -1) + "$");
  });

module.exports = {
  validate: function(pin) {
    for (let i in regexes) {
      if (regexes[i].test(pin)) {
        return true;
      }
    }
    return false;
  }
};

},{"readline":1}]},{},[2])(2)
});
