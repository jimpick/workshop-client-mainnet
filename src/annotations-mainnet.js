// Small file test results
//
// This are based on a test run (usually once a day) where I attempt
// to make deals for a small file (about ~90kB) with as many miners as
// possible. It is expected that most miners will filter based on size.

// Additional testing will be performed with larger files with
// selected miners (>128MiB of data)

// See annotations-spacerace-slingshot-medium.js for larger file results

const annotations = {
  // Retest

  // New

  f01016198: 'new, autolisted', // carry-over
  f01016240: 'new, auto', // carry-over
  f01016245: 'new, autolisted', // carry-over
  f01016246: 'new, autolisted', // carry-over
  f01016247: 'new, autolisted', // carry-over
  f01016248: 'new, autolisted', // carry-over
  f01016249: 'new, autolisted', // carry-over
  f01016254: 'new, autolisted', // carry-over
  f01075140: 'new, autolisted', // carry-over
  f01075157: 'new, auto', // carry-over
  f01100187: 'new, autolisted', // carry-over
  f01101543: 'new, autolisted', // carry-over
  f01114589: 'new, autolisted', // carry-over
  f01114592: 'new, autolisted', // carry-over
  f01114595: 'new, autolisted', // carry-over
  f01114803: 'new, autolisted', // carry-over
  f01114807: 'new, autolisted', // carry-over
  f01114808: 'new, autolisted', // carry-over
  f01114825: 'new, autolisted', // carry-over

  f01750: 'new, autolisted',
  f061616: 'new, autolisted',
  f061626: 'new, autolisted',
  f061666: 'new, autolisted',
  f081986: 'new, autolisted',
  f081993: 'new, autolisted',
  f087883: 'new, autolisted',
  f089186: 'new, autolisted',
  f090911: 'new, autolisted',
  f0148910: 'new, autolisted',
  f0442377: 'new, autolisted',
  f0520345: 'new, autolisted',
  f0695688: 'new, autolisted',
  f0699167: 'new, autolisted',
  f0717219: 'new, autolisted',
  f0866310: 'new, autolisted',
  f01068213: 'new, autolisted',
  f01069919: 'new, autolisted',
  f01088188: 'new, autolisted',
  f01088688: 'new, autolisted',
  f01111110: 'new, autolisted',
  f01114593: 'new, autolisted',
  f01114802: 'new, autolisted',
  f01114826: 'new, autolisted',
  f01114827: 'new, autolisted',
  f01116671: 'new, autolisted',
  f01128225: 'new, autolisted',
  f01132569: 'new, autolisted',
  f01136409: 'new, autolisted',
  f01141518: 'new, autolisted',
  f01154023: 'new, autolisted',
  f01156538: 'new, autolisted',
  f01156835: 'new, autolisted',
  f01156883: 'new, autolisted',
  f01156901: 'new, autolisted',
  f01156975: 'new, autolisted',
  f01157018: 'new, autolisted',
  f01157027: 'new, autolisted',
  f01157037: 'new, autolisted',
  f01157057: 'new, autolisted',
  f01157075: 'new, autolisted',
  f01157099: 'new, autolisted',
  f01157156: 'new, autolisted',
  f01157187: 'new, autolisted',
  f01157203: 'new, autolisted',
  f01157215: 'new, autolisted',
  f01157241: 'new, autolisted',
  f01157249: 'new, autolisted',
  f01169693: 'new, autolisted',
  f01169694: 'new, autolisted',
  f01169696: 'new, autolisted',
  f01169721: 'new, autolisted',
  f01169722: 'new, autolisted',
  f01169723: 'new, autolisted',
  f01169724: 'new, autolisted',
  f01169725: 'new, autolisted',
  f01173139: 'new, autolisted',
  f01174479: 'new, autolisted',
  f01174581: 'new, autolisted',
  f01174644: 'new, autolisted',
  f01174867: 'new, autolisted',
  f01174958: 'new, autolisted',
  f01179295: 'new, autolisted',
  f01181619: 'new, autolisted',
  f01190147: 'new, autolisted',
  f01195470: 'new, autolisted',
  f01195905: 'new, autolisted',
  f01197876: 'new, autolisted',
  f01203111: 'new, autolisted',
  f01203143: 'new, autolisted',
  f01203168: 'new, autolisted',
  f01203879: 'new, autolisted',
  f01205144: 'new, autolisted',
  f01205257: 'new, autolisted',
  f01208627: 'new, autolisted',
  f01209020: 'new, autolisted',
  f01209068: 'new, autolisted',
  f01211187: 'new, autolisted',
  f01212287: 'new, autolisted',
  f01213121: 'new, autolisted',
  f01213185: 'new, autolisted',
  f01214418: 'new, autolisted',
  f01215282: 'new, autolisted',
  f01215328: 'new, autolisted',
  f01215348: 'new, autolisted',
  f01216131: 'new, autolisted',
  f01216339: 'new, autolisted',
  f01217139: 'new, autolisted',
  f01218989: 'new, autolisted',
  f01219294: 'new, autolisted',
  f01221121: 'new, autolisted',
  f01221268: 'new, autolisted',
  f01221675: 'new, autolisted',
  f01222595: 'new, autolisted',
  f01223120: 'new, autolisted',
  f01223124: 'new, autolisted',
  f01223505: 'new, autolisted',
  f01224142: 'new, autolisted',
  f01224379: 'new, autolisted',
  f01224704: 'new, autolisted',
  f01224705: 'new, autolisted',
  f01224707: 'new, autolisted',
  f01224708: 'new, autolisted',
  f01224709: 'new, autolisted',
  f01224711: 'new, autolisted',
  f01224768: 'new, autolisted',
  f01224799: 'new, autolisted',
  f01225427: 'new, autolisted',
  f01225783: 'new, autolisted',
  f01225882: 'new, autolisted',
  f01226814: 'new, autolisted',
  f01227042: 'new, autolisted',
  f01227383: 'new, autolisted',
  f01227505: 'new, autolisted',
  f01227510: 'new, autolisted',
  f01227883: 'new, autolisted',
  f01227998: 'new, autolisted',
  f01228015: 'new, autolisted',
  f01228088: 'new, autolisted',
  f01229322: 'new, autolisted',
  f01231239: 'new, autolisted',
  f01232837: 'new, autolisted',
  f01235249: 'new, autolisted',
  f01236627: 'new, autolisted',
  f01236669: 'new, autolisted',
  f01238519: 'new, autolisted',
  f01239166: 'new, autolisted',
  f01239538: 'new, autolisted',
  f01239890: 'new, autolisted',
  f01240218: 'new, autolisted',
  f01240398: 'new, autolisted',
  f01240603: 'new, autolisted',
  f01241194: 'new, autolisted',
  f01242770: 'new, autolisted',
  f01242788: 'new, autolisted',
  f01243219: 'new, autolisted',
  f01243812: 'new, autolisted',
  f01243817: 'new, autolisted',
  f01244322: 'new, autolisted',
  f01245428: 'new, autolisted',
  f01245980: 'new, autolisted',
  f01246563: 'new, autolisted',
  f01247078: 'new, autolisted',
  f01248016: 'new, autolisted',
  f01248190: 'new, autolisted',
  f01248587: 'new, autolisted',
  f01249144: 'new, autolisted',
  f01250000: 'new, autolisted',
  f01250204: 'new, autolisted',
  f01250237: 'new, autolisted',
  f01250837: 'new, autolisted',
  f01250863: 'new, autolisted',
  f01250873: 'new, autolisted',
  f01250983: 'new, autolisted',
  f01251000: 'new, autolisted',
  f01251102: 'new, autolisted',
  f01251209: 'new, autolisted',
  f01251473: 'new, autolisted',
  f01251528: 'new, autolisted',
  f01251721: 'new, autolisted',
  f01252145: 'new, autolisted',
  f01252627: 'new, autolisted',
  f01254435: 'new, autolisted',
  f01254509: 'new, autolisted',
  f01254559: 'new, autolisted',
  f01255207: 'new, autolisted',
  f01255369: 'new, autolisted',
  f01255977: 'new, autolisted',
  f01256540: 'new, autolisted',
  f01257703: 'new, autolisted',
  f01257962: 'new, autolisted',
  f01258419: 'new, autolisted',
  f01258894: 'new, autolisted',
  f01258967: 'new, autolisted',
  f01259059: 'new, autolisted',
  f01259449: 'new, autolisted',
  f01260173: 'new, autolisted',
  f01260384: 'new, autolisted',
  f01260725: 'new, autolisted',
  f01260819: 'new, autolisted',
  f01260993: 'new, autolisted',
  f01261075: 'new, autolisted',
  f01261113: 'new, autolisted',
  f01261377: 'new, autolisted',
  f01262064: 'new, autolisted',
  f01262410: 'new, autolisted',
  f01262966: 'new, autolisted',
  f01263957: 'new, autolisted',
  f01264125: 'new, autolisted',
  f01264319: 'new, autolisted',
  f01264444: 'new, autolisted',
  f01264518: 'new, autolisted',
  f01264823: 'new, autolisted',
  f01264903: 'new, autolisted',
  f01265268: 'new, autolisted',
  f01265322: 'new, autolisted',
  f01266666: 'new, autolisted',
  f01267055: 'new, autolisted',
  f01267262: 'new, autolisted',
  f01267516: 'new, autolisted',
  f01268426: 'new, autolisted',
  f01268747: 'new, autolisted',
  f01269025: 'new, autolisted',
  f01269152: 'new, autolisted',
  f01269367: 'new, autolisted',
  f01269623: 'new, autolisted',
  f01269788: 'new, autolisted',
  f01270011: 'new, autolisted',
  f01270096: 'new, autolisted',
  f01270285: 'new, autolisted',
  f01270467: 'new, autolisted',
  f01270657: 'new, autolisted',
  f01270744: 'new, autolisted',
  f01271225: 'new, autolisted',
  f01271229: 'new, autolisted',
  f01271898: 'new, autolisted',
  f01272340: 'new, autolisted',
  f01273431: 'new, autolisted',
  f01273867: 'new, autolisted',
  f01274011: 'new, autolisted',
  f01274199: 'new, autolisted',
  f01275158: 'new, autolisted',
  f01275219: 'new, autolisted',
  f01275287: 'new, autolisted',
  f01275559: 'new, autolisted',
  f01277031: 'new, autolisted',
  f01277347: 'new, autolisted',
  f01277736: 'new, autolisted',
  f01278044: 'new, autolisted',
  f01278215: 'new, autolisted',
  f01279006: 'new, autolisted',
  f01279864: 'new, autolisted',
  f01281349: 'new, autolisted',
  f01282328: 'new, autolisted',
  f01282967: 'new, autolisted',
  f01283752: 'new, autolisted',
  f01283930: 'new, autolisted',
  f01284467: 'new, autolisted',
  f01285363: 'new, autolisted',
  f01285716: 'new, autolisted',
  f01285985: 'new, autolisted',
  f01286107: 'new, autolisted',
  f01286676: 'new, autolisted',
  f01288529: 'new, autolisted',
  f01289300: 'new, autolisted',
  f01289416: 'new, autolisted',
  f01289763: 'new, autolisted',
  f01292110: 'new, autolisted',
  f01292160: 'new, autolisted',
  f01292475: 'new, autolisted',
  f01293938: 'new, autolisted',
  f01298698: 'new, autolisted',
  f01301491: 'new, autolisted',
  f01302086: 'new, autolisted',
  f01302188: 'new, autolisted',
  f01302397: 'new, autolisted',
  f01303722: 'new, autolisted',
  f01304462: 'new, autolisted',
  f01304596: 'new, autolisted',
  f01305881: 'new, autolisted',
  f01306222: 'new, autolisted',
  f01307626: 'new, autolisted',
  f01308939: 'new, autolisted',
  f01310053: 'new, autolisted',
  f01310564: 'new, autolisted',
  f01312143: 'new, autolisted',
  f01312792: 'new, autolisted',
  f01313233: 'new, autolisted',
  f01314740: 'new, autolisted',
  f01315096: 'new, autolisted',
  f01315130: 'new, autolisted',
  f01315486: 'new, autolisted',
  f01316365: 'new, autolisted',
  f01317155: 'new, autolisted',
  f01317157: 'new, autolisted',
  f01318580: 'new, autolisted',
  f01318788: 'new, autolisted',
  f01318979: 'new, autolisted',
  f01319368: 'new, autolisted',
  f01319803: 'new, autolisted',
  f01319989: 'new, autolisted',
  f01320058: 'new, autolisted',
  f01320262: 'new, autolisted',
  f01320931: 'new, autolisted',
  f01321804: 'new, autolisted',
  f01321901: 'new, autolisted',
  f01323287: 'new, autolisted',
  f01323699: 'new, autolisted',
  f01324232: 'new, autolisted',
  f01324392: 'new, autolisted',
  f01325141: 'new, autolisted',
  f01326678: 'new, autolisted',
  f01328084: 'new, autolisted',
  f01330977: 'new, autolisted',
  f01334686: 'new, autolisted',
  f01337533: 'new, autolisted',
  f01337799: 'new, autolisted',
  f01338190: 'new, autolisted',
  f01338337: 'new, autolisted',
  f01339261: 'new, autolisted',
  f01340093: 'new, autolisted',
  f01340400: 'new, autolisted',
  f01340418: 'new, autolisted',
  f01341608: 'new, autolisted',
  f01344282: 'new, autolisted',
  f01344987: 'new, autolisted',
  f01345523: 'new, autolisted',
  f01347200: 'new, autolisted',
  f01347355: 'new, autolisted',
  f01347695: 'new, autolisted',
  f01348489: 'new, autolisted',
  f01348517: 'new, autolisted',
  f01349048: 'new, autolisted',
  f01349435: 'new, autolisted',
  f01350631: 'new, autolisted',
  f01350722: 'new, autolisted',
  f01351501: 'new, autolisted',
  f01353593: 'new, autolisted',
  f01354898: 'new, autolisted',
  f01357002: 'new, autolisted',
  f01359285: 'new, autolisted',
  f01359803: 'new, autolisted',
  f01359873: 'new, autolisted',
  f01360268: 'new, autolisted',
  f01361064: 'new, autolisted',
  f01361111: 'new, autolisted',
  f01361691: 'new, autolisted',
  f01361743: 'new, autolisted',
  f01362746: 'new, autolisted',
  f01365701: 'new, autolisted',
  f01365744: 'new, autolisted',
  f01365756: 'new, autolisted',
  f01365859: 'new, autolisted',
  f01366743: 'new, autolisted',
  f01366823: 'new, autolisted',
  f01367109: 'new, autolisted',
  f01368089: 'new, autolisted',
  f01369314: 'new, autolisted',
  f01372569: 'new, autolisted',
  f01372732: 'new, autolisted',
  f01372912: 'new, autolisted',
  f01375249: 'new, autolisted',
  f01376386: 'new, autolisted',
  f01377183: 'new, autolisted',
  f01378236: 'new, autolisted',
  f01378592: 'new, autolisted',
  f01380788: 'new, autolisted',
  f01381814: 'new, autolisted',
  f01383151: 'new, autolisted',
  f01383328: 'new, autolisted',
  f01384139: 'new, autolisted',
  f01384193: 'new, autolisted',
  f01384461: 'new, autolisted',
  f01385207: 'new, autolisted',
  f01386812: 'new, autolisted',
  f01386984: 'new, autolisted',
  f01387247: 'new, autolisted',
  f01389348: 'new, autolisted',
  f01390323: 'new, autolisted',
  f01390330: 'new, autolisted',
  f01390523: 'new, autolisted',
  f01390526: 'new, autolisted',
  f01391127: 'new, autolisted',
  f01391982: 'new, autolisted',
  f01392069: 'new, autolisted',
  f01392600: 'new, autolisted',
  f01392816: 'new, autolisted',
  f01392850: 'new, autolisted',
  f01392893: 'new, autolisted',
  f01392984: 'new, autolisted',
  f01393827: 'new, autolisted',
  f01394448: 'new, autolisted',
  f01394700: 'new, autolisted',
  f01395673: 'new, autolisted',
  f01396100: 'new, autolisted',
  f01396338: 'new, autolisted',
  f01396576: 'new, autolisted',
  f01398391: 'new, autolisted',
  f01399235: 'new, autolisted',
  f01399539: 'new, autolisted',
  f01401612: 'new, autolisted',
  f01402069: 'new, autolisted',
  f01402131: 'new, autolisted',
  f01402625: 'new, autolisted',
  f01402814: 'new, autolisted',
  f01403187: 'new, autolisted',
  f01404908: 'new, autolisted',
  f01405366: 'new, autolisted',
  f01405369: 'new, autolisted',
  f01407260: 'new, autolisted',
  f01412461: 'new, autolisted',
  f01412953: 'new, autolisted',
  f01414711: 'new, autolisted',
  f01414904: 'new, autolisted',
  f01415277: 'new, autolisted',
  f01417483: 'new, autolisted',
  f01417748: 'new, autolisted',

  // Inflight

  // Unknown

  // Active

  // Active-sealing (active - with in-flight sealing)

  f022352: 'active-sealing, Norway, Borgen, TechHedge, @Reiers', // 2381959
  f024944: 'active-sealing, Korea, Yeongdeungpo-dong', // 2382252
  f080103: 'active-sealing, Korea, Seongnam-si', // 2382263
  f097720: 'active-sealing, Korea, Bucheon-si', // 2382261
  f0110804: 'active-sealing, USA, Santa Clara', // 2382262
  f0113331: 'active-sealing, Korea, Jinju + USA', // 2382253
  f0122815: 'active-sealing, Korea, Bucheon-si, Healthcarenavi_80', // 2382257
  f0130912: 'active-sealing, China, Hong Kong', // 2382256
  f0131901: 'active-sealing, Korea, Daejeon', // 2382258
  f0132461: 'delist, Korea, Daegu', // 2382254
  f0137168: 'active-sealing, China, Beijing', // 2382259
  f0137489: 'active-sealing, UK, Deeside', // 2382279
  f0156207: 'active-sealing, Korea, Ulsan', // 2382260
  f0157513: 'active-sealing, Korea, Geumcheon-gu', // 2382255
  f0157564: 'active-sealing, Korea, Daejeon', // 2382281
  f0165375: 'active-sealing, Korea, Seongnam-si', // 2382264
  f0221135: 'active-sealing, USA, Atlanta', // 2382267
  f0230200: 'active-sealing, Korea, Gwanak-gu, G-mining', // 2382272
  f0397052: 'active-sealing, Korea, Eunpyeong-gu', // 2382270
  f0401416: 'active-sealing, Japan, Fukuoka', // 2382265
  f0458627: 'active-sealing, Korea, Seongnam-si', // 2382266
  f0482619: 'active-sealing, Korea, Seongnam-si', // 2382277
  f0675909: 'active-sealing, Korea, Seocho-gu', // 2382271
  f0717913: 'active-sealing, Korea, Jung-gu', // 2382274
  f0717969: 'active-sealing, USA, Los Angeles', // 2382268
  f0722515: 'active-sealing, Korea, Geumcheon-gu', // 2382324
  f0724219: 'active-sealing, Spain, Vilanova del Cami', // 2382286
  f0729674: 'active-sealing, Canada, Vancouver', // 2382280
  f0731235: 'active-sealing, Ukraine, Odessa', // 2382285
  f0752695: 'active-sealing, Korea, Seongnam-si', // 2382295
  f0805568: 'active-sealing, Korea, Gangnam-gu', // 2382287
  f0813086: 'active-sealing, Korea, Jung-gu', // 2382339
  f0822674: 'delist, Korea, Seoul', // 2382275
  f0864910: 'active-sealing, Korea, Gwangjin-gu', // 2382283
  f01023503: 'active-sealing, Korea, Busan', // 2382298
  f01027268: 'active-sealing, Korea, Busan', // 2382269
  f01033119: 'active-sealing, France, Paris', // 2382289
  f01040469: 'active-sealing, Korea', // 2382273
  f01045812: 'active-sealing, China, Taiwan, New Taipei', // 2382340
  f01053334: 'active-sealing, Korea, Mapo-gu', // 2382284
  f01071194: 'active-sealing, USA, San Jose', // 2382278
  f01086762: 'active-sealing, Korea, Seoul', // 2382288
  f01105829: 'active-sealing, Korea', // 2382282
  f01108129: 'active-sealing, Korea, Namyangju', // 2382297
  f01117341: 'active-sealing, Korea', // 2382296
  f01136592: 'active-sealing, Korea, Seongnam-si', // 2382313
  f01141810: 'active-sealing, Korea', // 2382293
  f01175097: 'active-sealing, autolisted', // 2382290
  f01176154: 'active-sealing, autolisted', // 2382294
  f01190002: 'active-sealing, autolisted', // 2382302
  f01191967: 'active-sealing, autolisted', // 2382292
  f01195493: 'delist, autolisted', // 2382291

  // Sealing

  f07709: 'sealing, Korea, Dongjak-gu', // 2382349
  f087890: 'sealing, NR', // 2382499
  f0134671: 'sealing, Korea, Gimpo-si', // 2382350
  f0153278: "sealing, China, Xi'an", // 2382558
  f0156452: 'sealing, Korea, Ulsan', // 2382546
  f0167254: 'sealing, Russia, St. Petersburg', // 2382351
  f0215461: 'delist, Korea, Gimhae', // 2382397
  f0223933: 'sealing, NR', // 2382733
  f0413563: 'sealing, Korea, Gangnam-gu', // 2382357
  f0435045: 'sealing, Korea, Ulju-gun', // 2382359
  f0514737: 'sealing, Korea, Busan', // 2382358
  f0746416: 'sealing, Korea, Gyeonggi-do', // 2382361
  f0756207: 'sealing, Korea', // 2382415
  f0757233: 'sealing, NR', // 2382807
  f0878351: 'sealing, USA, Vancouver', // 2382360
  f01038389: 'sealing, NR', // 2382860
  f01058790: 'sealing, Japan', // 2382703
  f01090043: 'sealing, Korea, Bucheon-si', // 2382847
  f01091851: 'sealing, NR', // 2383026
  f01121232: 'sealing, autolisted', // 2382301
  f01191451: 'sealing, autolisted', // 2383006
  f01198070: 'sealing, autolisted', // 2382315
  f01202106: 'sealing, autolisted', // 2382314
  f01207214: 'sealing, autolisted', // 2382316
  f01209607: 'delist, autolisted', // 2382318
  f01211218: 'sealing, autolisted', // 2382317
  f01213742: 'sealing, autolisted', // 2382319
  f01214450: 'sealing, autolisted', // 2382323

  // Stuck

  f02540: 'delist, USA, Mobile, Foundry', // CheckForAcceptance: about 5 hours
  f0460440: 'stuck, Korea, Seongnam-si', // CheckForAcceptance: about 5 hours
  f01099967: 'delist, USA, London', // CheckForAcceptance: about 5 hours

  // Busy

  // Min Size

  f01238: 'min-size, Vietnam, Hanoi, FILECOIN-VIETNAM', // 131072 < 134217728
  f01240: 'min-size, Netherlands, Dcent', // 131072 < 33554432
  f01247: 'delist, Canada, Montreal, BigChungus', // 131072 < 67108864
  f01276: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 4294967296
  f01277: 'min-size, Sweden, Stockholm, tvsthlm', // 131072 < 1073741824
  f02387: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 17179869184
  f02401: 'min-size, Canada, Chambly, NBFS Canada', // 131072 < 17179869184
  f02620: 'min-size, Poland, Krakow, @magik6k', // 131072 < 536870912
  f02654: 'min-size, China, Shanghai', // 131072 < 536870912
  f03488: 'min-size, Korea, Yeongdeungpo-dong', // 131072 < 1073741824
  f08240: 'min-size, Russia, Novosibirsk, Rabinovitch', // 131072 < 1048576
  f08399: 'min-size, USA, Sammamish, MiningMusing', // 131072 < 8589934592
  f09848: 'min-size, USA, Irvine, BigBearLake', // 131072 < 4294967296
  f010088: 'min-size, USA, Kirkland', // 131072 < 1048576
  f010254: 'min-size, Japan, Minamata', // 131072 < 4294967296
  f010617: 'min-size, Canada, Surrey, kernelogic2, @feiya200', // 131072 < 4294967296
  f014409: 'min-size, USA, Monroe, Meatball Part III', // 131072 < 1073741824
  f014768: 'min-size, Singapore, Funktafide, @Funk', // 131072 < 536870912
  f019104: 'min-size, Canada, Chambly, Northstar', // 131072 < 4294967296
  f019399: 'min-size, Korea, Busan', // 131072 < 1073741824
  f019551: 'min-size, UK, Birmingham, Neonix', // 131072 < 134217728
  f020378: 'min-size, Bulgaria, Asenovgrad', // 131072 < 134217728
  f020385: 'min-size, Korea, Incheon', // 131072 < 8589934592
  f020904: 'min-size, Korea, Uijeongbu-si, FILTop', // 131072 < 52428800
  f021716: 'min-size, New Zealand, Wellington, Info.farm', // 131072 < 1048576
  f022142: 'min-size, USA, Queens, Nelson SR2', // 131072 < 1073741824
  f022163: 'min-size, Switzerland, dns:fil.akasha.network', // 131072 < 1073741824
  f023871: 'min-size, China, Fuzhou', // 131072 < 4294967296
  f023971: 'min-size, USA, FLMiner', // 131072 < 4294967296
  f024184: 'min-size, Korea, Yeongdeungpo-dong', // 131072 < 1073741824
  f030379: 'min-size, Korea, Uiwang', // 131072 < 1073741824
  f032824: 'min-size, USA, Cedar Park', // 131072 < 134217728
  f032934: 'min-size, Korea, Incheon', // 131072 < 1073741824
  f043376: 'min-size, Korea, Incheon', // 131072 < 4294967296
  f047419: 'min-size, USA, Waukesha', // 131072 < 17179869184
  f049882: 'min-size, Netherlands, De Rijp, Chipz', // 131072 < 268435456
  f062353: 'min-size, Germany, Frankfurt', // 131072 < 4294967296
  f066596: 'min-size, USA, San Diego, PiKNiK & Company', // 131072 < 536870912
  f071624: 'min-size, USA, Boyne City, Adept', // 131072 < 4294967296
  f079817: "min-size, Russia, Ul'yanovka", // 131072 < 1048576
  f089840: 'min-size, Korea, Yeongdeungpo-gu', // 131072 < 31457280
  f097777: 'min-size, Ukraine, Ivano-Frankivsk', // 131072 < 104857600
  f099608: 'min-size, Latvia, Riga, stander', // 131072 < 18253611008
  f0102313: 'min-size, Korea, Gangseo-gu', // 131072 < 31457280
  f0104967: 'min-size, Ukraine, Ternopil', // 131072 < 2147483648
  f0110768: 'min-size, Korea, Gwangju', // 131072 < 4294967296
  f0113008: 'min-size, China, Hong Kong', // 131072 < 33554432
  f0121958: 'min-size, Korea, Seoul', // 131072 < 67108864
  f0124554: 'min-size, Korea, Gimhae', // 131072 < 1073741824
  f0126868: 'min-size, Ukraine, Vinnytsia', // 131072 < 209715200
  f0131611: 'min-size, Korea, Jeju City', // 131072 < 67108864
  f0135078: 'min-size, USA, Denver', // 131072 < 8589934592
  f0142606: 'min-size, Korea, Gangseo-gu', // 131072 < 31457280
  f0145874: 'min-size, Canada, Brampton', // 131072 < 1073741824
  f0149444: 'min-size, Korea, Gangseo-gu', // 131072 < 31457280
  f0157535: 'min-size, Canada, Brampton', // 131072 < 4294967296
  f0165400: 'min-size, Canada, Brampton', // 131072 < 2147483648
  f0187709: 'min-size, Russia, Moscow', // 131072 < 1048576
  f0214334: 'min-size, Korea, Namyangju', // 131072 < 4294967296
  f0215497: 'min-size, Korea, Gangseo-gu', // 131072 < 31457280
  f0220827: 'min-size, NR', // 131072 < 8589934592
  f0399083: 'min-size, Korea, Seoul + Kwangmyong', // 131072 < 31457280
  f0400103: 'min-size, China, Hong Kong', // 131072 < 1048576
  f0401254: 'min-size, Korea, Uijeongbu-si', // 131072 < 52428800
  f0406322: 'min-size, USA, Long Beach', // 131072 < 4294967296
  f0406703: 'min-size, USA, Scottsdale', // 131072 < 4294967296
  f0418632: 'min-size, Singapore', // 131072 < 4294967296
  f0422737: 'min-size, Korea, Namyangju', // 131072 < 4294967296
  f0440429: 'min-size, Korea, Uiwang', // 131072 < 1073741824
  f0447183: 'min-size, Canada, Montreal', // 131072 < 4294967296
  f0461791: 'min-size, Korea, Gwangju', // 131072 < 104857600
  f0492030: 'min-size, USA, Holmdel', // 131072 < 134217728
  f0508988: 'min-size, Korea, Bucheon-si', // 131072 < 1073741824
  f0521569: 'min-size, Korea, Guro-go', // 131072 < 262144
  f0524489: 'min-size, Korea, Pocheon-si', // 131072 < 4294967296
  f0533124: 'min-size, Korea, Seoul', // 131072 < 31457280
  f0694396: 'min-size, UK, Dudley', // 131072 < 134217728
  f0707721: 'min-size, Netherlands', // 131072 < 33554432
  f0712678: 'delist, Korea, Gangseo-gu', // 131072 < 268435456
  f0713585: 'delist, Russia', // 131072 < 5368709120
  f0726405: 'min-size, Korea, Seoul', // 131072 < 31457280
  f0734051: 'delist, Korea, Hwaseong-si', // 131072 < 17179869184
  f0763337: 'min-size, USA, San Diego', // 131072 < 536870912
  f0773157: 'min-size, Australia, Sydney', // 131072 < 1073741824
  f0828066: 'min-size, USA, San Digeo', // 131072 < 536870912
  f0838467: 'min-size, Korea, Incheon', // 131072 < 1048576
  f0842485: 'min-size, Korea, Seoul', // 131072 < 31457280
  f0862933: 'delist, USA, Huntersville', // 131072 < 1073741824
  f0875769: 'min-size, USA, Salt Lake City', // 131072 < 8589934592
  f01021756: 'min-size, Korea, Yeongdeungpo-gu', // 131072 < 268435456
  f01035680: 'min-size, USA, Denver', // 131072 < 8589934592
  f01044351: 'min-size, Korea, Gwangju', // 131072 < 104857600
  f01045784: 'min-size, USA, Ridgewood', // 131072 < 4294967296
  f01049918: 'min-size, USA, Bothell', // 131072 < 1048576
  f01051828: 'min-size, USA, San Diego', // 131072 < 536870912
  f01063173: 'min-size, Korea, Kayang-dong', // 131072 < 31457280
  f01091840: 'min-size, Canada, Saint-Hyacinthe', // 131072 < 4294967296
  f01096124: 'min-size, Korea, Uiwang', // 131072 < 1073741824
  f01096727: 'min-size, Korea, Gangseo-gu', // 131072 < 31457280
  f01099052: 'min-size, Korea, Seodaemun-gu', // 131072 < 31457280
  f01110276: 'min-size, Korea, Bucheon-si', // 131072 < 1073741824
  f01126768: 'min-size, autolisted', // 131072 < 31457280
  f01133080: 'min-size, Korea, Mokpo', // 131072 < 4294967296
  f01152097: 'min-size, Vietnam, Hanoi', // 131072 < 134217728
  f01163272: 'min-size, autolisted', // 131072 < 1048576
  f01179972: 'min-size, autolisted', // 131072 < 134217728
  f01186444: 'min-size, Korea, Seoul', // 131072 < 31457280
  f01190509: 'min-size, autolisted', // 131072 < 1073741824
  f01199430: 'min-size, Netherlands', // 131072 < 33554432
  f01199442: 'min-size, Netherlands', // 131072 < 33554432
  f01201327: 'min-size, Netherlands', // 131072 < 33554432
  f01207045: 'min-size, Netherlands', // 131072 < 33554432
  f01208862: 'min-size, Netherlands', // 131072 < 33554432

  // Max Size

  // Min Ask

  f01234: 'min-ask, Belgium, Bonheiden, Eliovp', // 20000000 < 61035156250000
  f02500: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f03223: 'min-ask, USA', // 20000000 < 610351562500000
  f05664: 'min-ask, China, Hong Kong', // 20000000 < 12207031250
  f014365: 'min-ask, Australia, Turramurra + Sydney', // 20000000 < 120849609375000
  f015897: 'min-ask, China, Hong Kong', // 20000000 < 12207031250000000
  f018780:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f018781:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f018782: 'min-ask, Singapore + USA + Germany, Frankfurt + UK, London', // 20000000 < 122070312500000
  f018783:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f018784:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f018785:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f019279: 'min-ask, Canada, Calgary', // 20000000 < 24414062
  f022130: 'min-ask, Korea, Seodaemun-gu', // 20000000 < 61035156
  f024156: 'min-ask, USA', // 20000000 < 1342773437500000
  f029344: 'delist, Korea, Seongnam-si', // 20000000 < 1220703125000
  f033356: 'min-ask, Korea, Yeongdeungpo-dong', // 20000000 < 12207031250000
  f055123: 'min-ask, Korea, Busan', // 20000000 < 1220703125
  f065280: 'min-ask, Korea, Songpa-gu, Data Store Ltd', // 20000000 < 122070312500000
  f074738: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f080480: 'min-ask, Ukraine, Lviv', // 20000000 < 122070312
  f083625: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f084879: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f098706: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f098770: 'min-ask, USA, Pontiac', // 20000000 < 12207031250000000
  f099239: 'min-ask, China, Hong Kong', // 20000000 < 12207031250000000
  f0100082: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0100116: 'min-ask, Korea, Uljin County', // 20000000 < 122070312500000
  f0101087: 'min-ask, Korea', // 20000000 < 24414062500000
  f0106949: 'min-ask, Korea, Seoul', // 20000000 < 366210937
  f0107995: 'min-ask, NR', // 20000000 < 121948242187500000
  f0116766: 'min-ask, USA, Westford', // 20000000 < 24414062500
  f0126824: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0128974: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0129976: 'min-ask, Korea, Gwangju', // 20000000 < 1220703125000
  f0131464: 'min-ask, USA, Ashburn', // 20000000 < 122070312500000000
  f0145385: 'min-ask, Malaysia, Petaling Jaya', // 20000000 < 1220703125
  f0145784: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0147284: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0151034: 'min-ask, USA, Syracuse', // 20000000 < 123291015625000
  f0151993: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0152224: 'min-ask, Korea, Yongdu-dong', // 20000000 < 1220703125
  f0155384: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0392734: 'min-ask, Korea, Icheon-si', // 20000000 < 122070190429687500000
  f0395911: 'min-ask, NR', // 20000000 < 121948242187500000
  f0396188: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0396607: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0396844: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0408717: 'min-ask, Korea, Ansan-si', // 20000000 < 61035156
  f0409356: 'min-ask, NR', // 20000000 < 121948242187500000
  f0410506: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0426531: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0463950: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0490173: 'min-ask, Korea, Jung-gu', // 20000000 < 1220703125000
  f0498920: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0513351: 'min-ask, NR', // 20000000 < 24414062500000
  f0686111: 'min-ask, Korea, Jung-gu', // 20000000 < 1220703125000
  f0692371: 'min-ask, Malaysia', // 20000000 < 122070312500000
  f0705118: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0717254: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0720636: 'min-ask, Belgium, Bonheiden', // 20000000 < 61035156250000
  f0730353: 'min-ask, Korea, Uijeongbu-si', // 20000000 < 122070190429687500000
  f0746542: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0752322: 'min-ask, USA, Watsonville', // 20000000 < 12207031250000
  f0754373: 'min-ask, Netherlands, Rijssen', // 20000000 < 61035156
  f0759826: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0840770: 'min-ask, USA, Dallas', // 20000000 < 1220703125
  f0846681: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0870005: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0875411: 'min-ask, Korea', // 20000000 < 610351562500000
  f01002224: 'min-ask, Korea', // 20000000 < 610351562500000
  f01033923: 'min-ask, Korea, Yongin-si', // 20000000 < 122070190429687500000
  f01033926: 'min-ask, Korea, Yongin-si', // 20000000 < 122070190429687500000
  f01045957: 'min-ask, NR', // 20000000 < 121948242187500000
  f01051301: 'min-ask, Korea, Siheung-si', // 20000000 < 122070312
  f01062230: 'min-ask, NR', // 20000000 < 121948242187500000
  f01062274: 'min-ask, Korea, Busan', // 20000000 < 12207031250
  f01076600: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f01101298: 'min-ask, Korea, Yongin-si', // 20000000 < 121948242187500000
  f01115166: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f01115949: 'min-ask, autolisted', // 20000000 < 610351562500
  f01117775: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f01125511: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01127529: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01128468: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01155864: 'min-ask, autolisted', // 20000000 < 122070312500000000
  f01156228: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01167231: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01167330: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01172955: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01179094: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01186659: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01191221: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01204565: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01206051: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01209313: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01209314: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01214415: 'min-ask, autolisted', // 20000000 < 121948242187500000

  // Slashed

  // Error

  f062318: 'error, Korea, Naju', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.25658925549428808 FIL, balance: 0.095085210514669315 FIL): not enough funds to execute transaction
  f094901: 'delist, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.256072143775869552 FIL, balance: 0.011691086666402661 FIL): not enough funds to execute transaction
  f097214: 'error, Korea, Bucheon-si, CryptoHash', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.24929428745684879 FIL, balance: 0.010014836770168697 FIL): not enough funds to execute transaction
  f0115108: 'error, Korea, Yangcheon-gu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.249815274257184936 FIL, balance: 0.009528683573874182 FIL): not enough funds to execute transaction
  f0145162: 'error, Japan, Kumamoto', // error reading Response message from provider: stream reset
  f0228855: 'error, Korea, Guro-gu', // deal failed: (State=11) PublishStorageDeal error: PublishStorageDeals errored: WaitForPublishDeals errored: handler: websocket connection closed
  f0419768: 'error, Korea, Seongnam-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.242070731105621087 FIL, balance: 0.099723945619716751 FIL): not enough funds to execute transaction
  f0512170: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.244680448775317608 FIL, balance: 0.011154393765263715 FIL): not enough funds to execute transaction
  f0512179: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.241630272009085212 FIL, balance: 0.009748932759559661 FIL): not enough funds to execute transaction
  f0723006: 'error, Korea, Bucheon-si', // deal failed: (State=11) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999967315242 FIL, balance: 0.04383983256000625 FIL): not enough funds to execute transaction
  f0845245: 'error, Korea, Busan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.23812253599843614 FIL, balance: 0.232464134674988914 FIL): not enough funds to execute transaction
  f01124728: 'delist, Japan, Yokohama', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999963808583 FIL, balance: 0.026753963220614678 FIL): not enough funds to execute transaction

  // Dial backoff

  f03143: 'backoff, Vietman, Ho Chi Minh City + China, Beijing + Shijiazhuang',
  f08157: 'backoff, China, Beijing + Germany, Frankfurt, 超星际',
  f08257: 'backoff, China, Zhejiang + Singapore',
  f010253: 'backoff, China, Karamay',
  f010491: 'backoff, China, Shenzhen',
  f014327:
    'backoff, China, Ningbo + Japan, Heiwajima + Germany, Frankfurt + USA + Canada, Toronto',
  f014487: 'backoff, Singapore',
  f018501: 'backoff, China, Beijing',
  f020523: 'backoff, China, Suzhou, changjiang',
  f021714: 'backoff, China, Hong Kong',
  f022093: 'backoff, NR',
  f023013: 'backoff, NR',
  f023825: 'backoff, China, Karamay',
  f023982: 'backoff, China, Chengdu',
  f024015: 'backoff, China, Karamay',
  f024016: 'backoff, China, Karamay',
  f024084: 'backoff, China, Fuzhou',
  f024146: 'backoff, China, Fuzhou',
  f024148: 'backoff, China, Fuzhou',
  f029401: 'backoff, China, Karamay',
  f033123: 'backoff, China, Karamay',
  f042558: 'backoff, China, Karamay',
  f044160: 'backoff, China, Guangzhou, muxing',
  f054420: 'backoff, NR',
  f056573: 'backoff, China, Sichuan',
  f061158: 'backoff, China, Guangdong, phoenix',
  f062334: 'backoff, China, Karamay',
  f065610: 'backoff, NR',
  f083638: 'backoff, China, Chongqing',
  f085777: 'backoff, China, Zhangzhou',
  f094374: 'backoff, China, Nanyang',
  f097386: 'backoff, China, Beijing',
  f097914: 'backoff, NR',
  f0102358: 'backoff, China, Guizhou',
  f0102376: 'backoff, China, Karamay',
  f0102513: 'backoff, China, Karamay',
  f0111174: 'backoff, China, Guangzhou',
  f0112087: 'backoff, China, Xiamen',
  f0114687: 'backoff, China, Dongguan',
  f0118330: 'backoff, Singapore',
  f0120983: 'backoff, China, Fujian',
  f0121260: 'backoff, China, Quinzhou',
  f0121450: 'backoff, China, Fujian',
  f0131331: 'backoff, China, Beijing',
  f0141614: 'backoff, China, Fujian',
  f0143162: 'backoff, NR',
  f0143928: 'backoff, China, Beijing',
  f0145313: 'backoff, China, Karamay',
  f0146165: 'backoff, China, Huizhou',
  f0146301: 'backoff, China, Shenzhen',
  f0146751: 'backoff, China, Jiangsu',
  f0149026: 'backoff, China, Shenzhen',
  f0149455: "backoff, China, Xi'an",
  f0151281: 'backoff, China, Karamay',
  f0151341: 'backoff, China, Zhangzhou',
  f0151487: 'backoff, NR',
  f0152854: 'backoff, China, Huizhou',
  f0152943: 'backoff, NR',
  f0158468: 'backoff, China, Guangzhou',
  f0159649: 'backoff, NR',
  f0165111: 'backoff, China, Guangzhou',
  f0165135: 'backoff, China, Guangzhou',
  f0220004: 'backoff, China, Karamay',
  f0224144: 'backoff, China, Karamay',
  f0224841: 'backoff, China, Guangzhou',
  f0227472: 'backoff, China, Xiamen',
  f0227660: 'backoff, NR',
  f0227684: 'backoff, China, Xiamen',
  f0238968: 'backoff, NR',
  f0241666: "backoff, China, Xi'an",
  f0396352: 'backoff, NR',
  f0396720: 'backoff, NR',
  f0396732: 'backoff, NR',
  f0397728: 'backoff, China, Dongguan',
  f0399814: "backoff, China, Ya'an",
  f0400920: 'backoff, China, Luzhou',
  f0405129: 'delist, China, Fujian',
  f0417709: 'backoff, NR',
  f0419804: 'backoff, NR',
  f0421392: 'backoff, China, Foshan',
  f0427393: 'backoff, China, Karamay',
  f0428177: 'backoff, China, Huizhou',
  f0444122: 'backoff, NR',
  f0456740: 'backoff, China, Karamay',
  f0490501: 'backoff, autolisted',
  f0673645: 'backoff, China, Karamay',
  f0690699: 'backoff, China, Chongqing',
  f0709739: 'backoff, China, Handan',
  f0723827: 'backoff, China, Guizhou',
  f0726742: 'backoff, China, Fujian',
  f0745116: 'backoff, China, Beijing',
  f0749380: 'backoff, China, Dongguan',
  f0753988: 'backoff, China, Fuzhou',
  f0763981: 'backoff, China, Tianjin',
  f0833793: 'backoff, China, Henan',
  f0844439: 'backoff, China, Karamay',
  f0845976: 'backoff, China, Jiaxing',
  f0849554: 'backoff, China, Beijing',
  f0859013: 'backoff, China, Nanjing',
  f01024569: 'backoff, China, Hangzhou',
  f01036234: 'backoff, China, Xinjiang',
  f01056782: 'backoff, China, Huizhou',
  f01111457: 'backoff, China, Karamay',
  f01119852: 'backoff, China, Huizhou',
  f01125783: 'backoff, autolisted',
  f01130388: 'backoff, autolisted',
  f01137297: 'backoff, autolisted',
  f01139313: 'backoff, autolisted',
  f01144275: 'backoff, autolisted',
  f01175050: 'delist, autolisted',
  f01197032: 'backoff, autolisted',
  f01214563: 'backoff, autolisted',

  // Rejected

  f01154: 'delist, NR',
  f01231: 'rejected, Singapore', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f01278: 'rejected, USA, Grand Rapids, MiMiner', // Deal rejected | Price below acceptance for such deal : 0.0002 FIL | For any questions you can reach me on Slack @stuberman
  f02301: 'rejected, USA',
  f02423: 'rejected, Ukraine, Kyiv', // no online
  f02576: 'rejected, Denmark, Gjerlev, BenjaminH', // Deal rejected | Price below acceptance for such deal : 0.03 FIL
  f03362: 'rejected, Germany, Berlin',
  f08403: 'rejected, UK, Lower Slaughter, TippyFlits', // Deal rejected | Such deal is not accepted (type, duration, size, etc...)
  f09642: 'delist, Sweden, Alvsjo',
  f010446: 'rejected, Netherlands, Angelo', // Deal rejected | Price below acceptance for such deal : 0.000005 FIL
  f010479: 'rejected, France, Fontenay-sous-Bois, s0nik42', // Deal rejected | Price below acceptance for such deal : 0.000005 FIL
  f015747: 'rejected, Japan, Setagaya-ku',
  f016398: 'rejected, China, Shanghai', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f021479: 'rejected, NR', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f023467: 'rejected, Norway, Oslo, PhiMining.io', // Deal rejected | Under maintenance, retry later | Please contact @Phi-rjan on Slack if there is anything.
  f023530: 'rejected, China, Shanghai', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f053229: 'rejected, NR',
  f064218: 'rejected, USA, Kirkland', // no online
  f066102: 'rejected, NR',
  f066259: 'rejected, NR',
  f070932: 'rejected, NR', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f081323: 'rejected, UK, Cambridge', // no online
  f089380: 'rejected, NR',
  f0100066: 'rejected, NR', // no online
  f0104671: 'rejected, Japan, Ota-ku', // no online
  f0107133: 'rejected, NR', // no online
  f0110762: 'rejected, Korea, Seoul', // no online
  f0111544: 'rejected, Korea, Seoul', // no online
  f0112075: 'rejected, Korea, Seoul', // no online
  f0112679: 'rejected, NR', // no online
  f0112691: 'rejected, Korea, Seoul', // no online
  f0114043: 'rejected, Korea, Seoul', // no online
  f0117118: 'rejected, NR', // no online
  f0117556: 'rejected, NR', // no online
  f0118695: 'rejected, Korea, Seoul', // no online
  f0118837: 'rejected, Korea, Seoul', // no online
  f0120546: 'rejected, Korea, Seoul', // no online
  f0120793: 'rejected, Korea, Seoul', // no online
  f0121602: 'rejected, China, Hong Kong', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0122398: 'rejected, NR', // no online
  f0122415: 'rejected, Korea, Seoul', // no online
  f0123281: 'rejected, Korea, Seoul', // no online
  f0125863: 'rejected, Korea, Seoul', // no online
  f0126037: 'rejected, Korea, Seoul', // no online
  f0126038: 'rejected, Korea, Seoul', // no online
  f0126039: 'rejected, NR', // no online
  f0127352: 'rejected, Korea, Seoul', // no online
  f0127353: 'rejected, Korea, Seoul', // no online
  f0127354: 'delist, Korea, Seoul', // no online
  f0128580: 'rejected, Korea, Seoul', // no online
  f0128581: 'rejected, Korea, Seoul', // no online
  f0128582: 'rejected, Korea, Seoul', // no online
  f0130961: 'rejected, Korea, Seongnam-si',
  f0133957: 'rejected, NR', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f0145843: 'rejected, NR', // no online
  f0151629: 'rejected, NR', // no online
  f0152337: 'rejected, NR', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f0152712: 'rejected, NR', // no online
  f0155004: 'rejected, Korea, Seoul', // no online
  f0156264: 'rejected, Korea, Seoul', // no online
  f0157429: 'rejected, Korea, Bucheon-si', // no online
  f0164126: 'rejected, NR', // no online
  f0214631: 'rejected, Korea, Seoul', // no online
  f0228575: 'rejected, Canada, Calgary', // no online
  f0364982: 'rejected, Korea, Seoul', // no online
  f0364983: 'rejected, Korea, Seoul', // no online
  f0364987: 'rejected, Korea, Seoul', // no online
  f0398863: 'rejected, Korea, Seoul', // no online
  f0398865: 'rejected, Korea, Seoul', // no online
  f0401300: 'rejected, France, Deuil-la-Barre', // no online
  f0401303: 'rejected, Korea, Ulju-gun', // no online
  f0401348: 'rejected, Korea, Chuncheon', // no online
  f0410001: 'rejected, NR', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f0423371: 'rejected, Korea, Seoul', // no online
  f0423381: 'rejected, Korea, Seoul', // no online
  f0440182: 'rejected, USA, Des Moines', // no online
  f0440208: 'rejected, Netherlands, Amsterdam', // no online
  f0449072: 'rejected, Korea, Jung-gu', // no online
  f0449088: 'rejected, Korea, Jung-gu', // no online
  f0455466: 'rejected, USA, Washington', // no online
  f0466070: 'rejected, NR',
  f0476476: 'rejected, Korea, Namyangju', // no online
  f0516456: 'rejected, Korea, Jung-gu', // no online
  f0675287: 'rejected, NR', // no online
  f0678914: 'rejected, USA, San Diego', // Deal rejected | Such deal is not accepted (type, duration, size, etc...)
  f0680538: 'rejected, Korea, Bucheon-si', // no online
  f0694843: 'rejected, NR', // no online
  f0706693: 'rejected, Belarus, Baranovichi', // no online
  f0709325: 'rejected, Korea, Jung-gu', // no online
  f0713736: 'rejected, NR', // no online
  f0715235: 'rejected, Korea, Jung-gu', // no online
  f0723162: 'rejected, Korea, Bucheon-si', // no online
  f0723722: 'rejected, USA, New York', // no online
  f0726677: 'rejected, Korea, Jung-gu', // no online
  f0727453: 'rejected, Korea, Ulsan', // no online
  f0728347: 'rejected, USA, Queens', // no online
  f0729297: 'rejected, Korea, Gyeonggi-do', // no online
  f0813083: 'rejected, Korea, Jung-gu', // no online
  f0816782: 'rejected, Korea, Jung-gu', // no online
  f0816783: 'rejected, Korea, Jung-gu', // no online
  f0827934: 'delist, USA, Port Jefferson', // no online
  f0836164: 'rejected, USA', // no online
  f0838684: 'rejected, Czechia, Prague', // total deal price less than currently accepted minimum: 0.0000115424 FIL < 0.0045 FIL
  f0838852: 'rejected, NR', // no online
  f0838873: 'rejected, USA, Washington', // no online
  f0838893: 'rejected, USA, Des Moines', // no online
  f0838923: 'rejected, Netherlands, Amsterdam', // no online
  f01051151: 'rejected, Korea, Jung-ang', // no online
  f01051152: 'rejected, Korea, Jung-ang', // no online
  f01052991: 'rejected, Korea, Jung-ang', // no online
  f01075514: 'rejected, Korea, Jung-ang', // no online
  f01075517: 'rejected, Korea, Jung-ang', // no online
  f01089898: 'rejected, Korea, Jung-gu', // no online
  f01119939: 'rejected, USA, Baxter', // no online
  f01128709: 'rejected, autolisted', // no online
  f01128844: 'rejected, Spain, Pozuelo de Alarcon', // no online
  f01131466: 'rejected, autolisted', // no online
  f01137729: 'rejected, USA, Lynnwood + Chicago', // no online
  f01141633: 'rejected, autolisted', // no online
  f01148221: 'rejected, autolisted', // no online
  f01149094: 'rejected, USA, Lynnwood', // no online
  f01154901: 'rejected, autolisted', // no online
  f01156568: 'rejected, autolisted', // no online
  f01161910: 'delist, USA, Ashburn', // no online
  f01193205: 'rejected, autolisted', // no online
  f01193207: 'rejected, autolisted', // no online
  f01216710: 'rejected, autolisted', // no online

  // Fail

  f01012: 'fail, China, Guangzhou + Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFLQGbLNFnsPgpNrF4e1gKCACTY7jQoVyRjQVYioR84UB:  * [/ip4/127.0.0.1/tcp/8888] dial tcp4 127.0.0.1:8888: connect: connection refused  * [/ip4/43.230.90.191/tcp/8888] dial tcp4 0.0.0.0:42459->43.230.90.191:8888: i/o timeout  * [/ip4/183.60.252.190/tcp/8888] dial tcp4 0.0.0.0:42459->183.60.252.190:8888: i/o timeout
  f01152: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFRLNrTpPQrNK98yv2JAFWxXiC2fSFjmfCaWuqNp1RkGM:  * [/ip4/101.36.64.211/tcp/42545] dial tcp4 0.0.0.0:42459->101.36.64.211:42545: i/o timeout
  f01155: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMUvqQ2gKwb8YCM1GKZgcQCVsRAMH97BjzQoN9he91jDo:  * [/ip4/203.107.44.156/tcp/39770] dial tcp4 0.0.0.0:42459->203.107.44.156:39770: i/o timeout
  f01235: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEZtCEjeef1Ud7Knw3wmyutuS9nMQ8EiYNvbB5caM1X1F:  * [/ip4/170.33.12.95/tcp/16668] dial tcp4 0.0.0.0:42459->170.33.12.95:16668: i/o timeout
  f01241: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGhx74VR4bzJLJeG4Da69V1Xc3ofRTkUz4FVxtCDuFWER:  * [/ip4/127.0.0.1/tcp/37933] dial tcp4 127.0.0.1:37933: connect: connection refused  * [/ip6/::1/tcp/36759] dial tcp6 [::1]:36759: connect: connection refused  * [/ip4/172.18.52.18/tcp/37933] dial tcp4 0.0.0.0:42459->172.18.52.18:37933: i/o timeout  * [/ip4/36.189.234.154/tcp/61557] dial tcp4 0.0.0.0:42459->36.189.234.154:61557: i/o timeout  * [/ip4/36.189.234.154/tcp/64819] dial tcp4 0.0.0.0:42459->36.189.234.154:64819: i/o timeout
  f01248: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBXxUMb8H3o52vUKvSkdU8AYgdAXEcZKLUx5gvGsowZz8:  * [/ip4/10.1.4.9/tcp/31432] dial tcp4 0.0.0.0:42459->10.1.4.9:31432: i/o timeout  * [/ip4/183.36.17.10/tcp/31432] dial tcp4 0.0.0.0:42459->183.36.17.10:31432: i/o timeout  * [/ip4/128.1.78.100/tcp/31432] dial tcp4 0.0.0.0:42459->128.1.78.100:31432: i/o timeout
  f01272: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01279: 'fail, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWARjz8p5k2FbtUAxTNfmMxam7hGn7X9FeD7Yh1KgfuAhK:  * [/ip4/118.116.2.66/tcp/40000] dial tcp4 0.0.0.0:42459->118.116.2.66:40000: i/o timeout
  f01280: 'fail, China, Wuxi', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBAcQGNgu3DsVoHE36gamiFiqKKdsjN4ZWo4iKu7sUKAK:  * [/ip4/58.215.201.254/tcp/23457] dial tcp4 0.0.0.0:42459->58.215.201.254:23457: i/o timeout
  f01287: 'fail, China, Jiaxing, MaiTian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJQd43HScS7iBzsggGyoE5yrXAeCcfAqhrB4NrsQX7otw:  * [/ip4/172.16.2.123/tcp/5472] dial tcp4 0.0.0.0:42459->172.16.2.123:5472: i/o timeout  * [/ip4/122.225.68.92/tcp/5472] dial tcp4 0.0.0.0:42459->122.225.68.92:5472: i/o timeout
  f01289: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWB3ebDwHr7dXPBFo2PEV25VehmXAn3huYZJeWShRPYsMq:  * [/ip4/223.95.197.18/tcp/44163] dial tcp4 0.0.0.0:42459->223.95.197.18:44163: i/o timeout
  f01314: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSMr9CmPCb4p3uNsMobRmWJsiywN1CjKJjm9raxetsg93:  * [/ip4/10.10.8.195/tcp/7000] dial tcp4 0.0.0.0:42459->10.10.8.195:7000: i/o timeout  * [/ip4/115.236.22.155/tcp/2092] dial tcp4 0.0.0.0:42459->115.236.22.155:2092: i/o timeout
  f01475: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPD6dMSKHegPtnZvhC8ToQHPQEE4kZRxNK6uZv4Dk8nBG:  * [/ip4/170.33.12.186/tcp/17031] dial tcp4 0.0.0.0:42459->170.33.12.186:17031: i/o timeout
  f01782: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAECESUksm2HVdjSY7X1DpDD9dhPHXN8JuRdyGHcky5ox:  * [/ip4/139.196.240.164/tcp/11347] dial tcp4 0.0.0.0:42459->139.196.240.164:11347: i/o timeout
  f01799: 'fail, China, Jinan + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBSVJEJLvLCFVzhYEfLVmznbL4Horztx4W6bXuYa7w1VJ:  * [/ip4/222.175.139.190/tcp/63208] dial tcp4 0.0.0.0:42459->222.175.139.190:63208: i/o timeout  * [/ip4/195.123.237.226/tcp/62333] dial tcp4 0.0.0.0:42459->195.123.237.226:62333: i/o timeout
  f01800: 'fail, China, Shenzhen + Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKpE8ej5zhZ8JBnwEsf3fTy73VBUwaHY8QZcz18Rtmrqr:  * [/ip4/182.131.4.48/tcp/33333] dial tcp4 0.0.0.0:42459->182.131.4.48:33333: i/o timeout
  f02299: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEratp7oKx1VPMGZY5xeukYMmKPuxKo92sjsHsx6KSbTE:  * [/ip4/182.18.83.2/tcp/1024] dial tcp4 0.0.0.0:42459->182.18.83.2:1024: i/o timeout
  f02303: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEmoKvvRvGgtfRjXeNznzqmXSLVzALXkVUHV8PHKzbyWa:  * [/ip4/8.209.76.63/tcp/48921] dial tcp4 0.0.0.0:42459->8.209.76.63:48921: i/o timeout
  f02381: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWS5Pgy5wmJLrgoASQjVLBJd7QZB4TmsAGUkAGpXaKwc2m:  * [/ip4/14.215.212.46/tcp/1347] dial tcp4 0.0.0.0:42459->14.215.212.46:1347: i/o timeout
  f02388: 'fail, Netherlands, Amersfoort, Kroketje', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02399: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR76gswS31CE7yMXLhVpesUx9ePgaUYWaJoHY3jLpPenT:  * [/ip4/175.24.25.61/tcp/44449] dial tcp4 0.0.0.0:42459->175.24.25.61:44449: i/o timeout
  f02403: 'fail, UK, London + Manchester', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMj9PnQDUCVunSoYrkbxhLV2rjK8bKBLQML3sCvpPcN8B:  * [/ip4/2.58.47.71/tcp/18888] dial tcp4 0.0.0.0:42459->2.58.47.71:18888: i/o timeout  * [/ip4/2.58.45.33/tcp/18888] dial tcp4 0.0.0.0:42459->2.58.45.33:18888: i/o timeout
  f02405: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAyXVY9WLfATgPPtJ2wB6T44MachjCV7jNRAmDXs2ZKoP:  * [/ip4/192.168.231.206/tcp/4123] dial tcp4 0.0.0.0:42459->192.168.231.206:4123: i/o timeout  * [/ip4/119.147.213.59/tcp/4123] dial tcp4 0.0.0.0:42459->119.147.213.59:4123: i/o timeout
  f02415:
    'fail, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSBt7yKkQiCNYbzc1Ag7BWH7DTNm1EUfMLdYQNjWqn4XB:  * [/ip4/47.57.243.33/tcp/49532] failed to negotiate security protocol: EOF  * [/ip4/47.242.85.219/tcp/49532] failed to negotiate security protocol: EOF
  f02416: 'fail, China, Guangdong, 星际无限', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEEgsa1brv6mnUjtv4Ekr1LkjrQM9N81Pup11Cggvxrx6:  * [/ip4/127.0.0.1/tcp/33441] dial tcp4 127.0.0.1:33441: connect: connection refused  * [/ip6/::1/tcp/33441] dial tcp6 [::1]:33441: connect: connection refused  * [/ip4/119.147.149.166/tcp/33441] dial tcp4 0.0.0.0:42459->119.147.149.166:33441: i/o timeout  * [/ip4/172.16.5.88/tcp/33441] dial tcp4 0.0.0.0:42459->172.16.5.88:33441: i/o timeout
  f02417: 'fail, China, Zhangjiakou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCqGULDJFYkgTYvmzToQA4gTMGwV3ZpfkDgrnjXY6suRS:  * [/ip4/116.132.221.10/tcp/10240] dial tcp4 0.0.0.0:42459->116.132.221.10:10240: i/o timeout
  f02419: 'fail, China, Shanghai, yuantai', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f02420: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLarDsiyUrxyyAESiMZbmU1kTrcXhLfUw7yU42JeWY8Ad:  * [/ip4/47.252.2.93/tcp/34571] dial tcp4 0.0.0.0:42459->47.252.2.93:34571: i/o timeout
  f02421: 'fail, China, Deyang + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPQgh1tLEZ6sxmnoZ2xX4xLHB8rrxNeEnEA5untT9rhdU:  * [/ip4/192.168.109.3/tcp/5002] dial tcp4 0.0.0.0:42459->192.168.109.3:5002: i/o timeout  * [/ip4/125.64.78.27/tcp/5002] dial tcp4 0.0.0.0:42459->125.64.78.27:5002: i/o timeout  * [/ip4/161.117.186.53/tcp/5002] dial tcp4 0.0.0.0:42459->161.117.186.53:5002: i/o timeout  * [/ip4/192.168.109.3/tcp/8007] dial tcp4 0.0.0.0:42459->192.168.109.3:8007: i/o timeout  * [/ip4/222.213.119.135/tcp/8007] dial tcp4 0.0.0.0:42459->222.213.119.135:8007: i/o timeout
  f02422: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGLq2Q9mQ8tNynijNfNJj1K7UTUPZKfr5iWXspd617yLo:  * [/ip4/117.38.4.82/tcp/22347] dial tcp4 0.0.0.0:42459->117.38.4.82:22347: i/o timeout
  f02425: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCK7wNHxKjxN5CGMGdTLh1VRwxru9cuR7353pPHvCBJ6H:  * [/ip4/196.12.34.77/tcp/2254] dial tcp4 0.0.0.0:42459->196.12.34.77:2254: i/o timeout
  f02438: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMrDPhKaMeJFenXRFd4Rb9Zt111CBY7uY6AoZ93MTbLHw:  * [/ip4/202.34.55.65/tcp/11254] dial tcp4 0.0.0.0:42459->202.34.55.65:11254: i/o timeout
  f02490: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLVWncWyeSEg7CNBvLWdwsPLQuHj7Kw93tDQ2dcHoZgbw:  * [/ip4/58.144.221.24/tcp/2347] dial tcp4 0.0.0.0:42459->58.144.221.24:2347: i/o timeout  * [/ip4/47.254.132.122/tcp/2347] dial tcp4 0.0.0.0:42459->47.254.132.122:2347: i/o timeout
  f02492: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWExafiDYdEKRvWWTRMfZC7t7YzqMmfJDEcp86BXC27TTJ:  * [/ip4/103.142.248.7/tcp/3347] dial tcp4 0.0.0.0:42459->103.142.248.7:3347: i/o timeout
  f02501: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f02503: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEvy6gDEmVj8P6rE5HvzSyZzXkeezu6EV3nDcNpDG142T:  * [/ip4/8.209.71.125/tcp/31432] dial tcp4 0.0.0.0:42459->8.209.71.125:31432: i/o timeout
  f02514: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRJmdNrPhSKLCCBiZW3JMQRTYCN5Wx1BbeVpHyq6B5u3R:  * [/ip4/127.0.0.1/tcp/36229] dial tcp4 127.0.0.1:36229: connect: connection refused  * [/ip6/::1/tcp/33259] dial tcp6 [::1]:33259: connect: connection refused  * [/ip4/36.189.234.146/tcp/64648] dial tcp4 0.0.0.0:42459->36.189.234.146:64648: i/o timeout  * [/ip4/172.18.54.18/tcp/36229] dial tcp4 0.0.0.0:42459->172.18.54.18:36229: i/o timeout  * [/ip4/36.189.234.146/tcp/61555] dial tcp4 0.0.0.0:42459->36.189.234.146:61555: i/o timeout
  f02520: 'fail, China, Hong Kong + Dongguan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02528: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRFJDiY5BesoHcBWMwGNyiBK2cx1sKrEkxSTyCk76HwpJ:  * [/ip4/8.209.70.199/tcp/58692] dial tcp4 0.0.0.0:42459->8.209.70.199:58692: i/o timeout
  f02529: 'fail, China, Chongqing + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFEZiYoJxqyuANeLtn7tDytRkYzcc9HS6gbaymHgMijWc:  * [/ip4/101.206.156.202/tcp/23004] dial tcp4 0.0.0.0:42459->101.206.156.202:23004: i/o timeout  * [/ip4/8.209.64.163/tcp/23004] dial tcp4 0.0.0.0:42459->8.209.64.163:23004: i/o timeout
  f02606: 'fail, China, Zhejiang, DataX', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQDCzJKYKWKJ4dRsXkfUEuFZ5u5ChmWcQgHS3s5ZYi4Wp:  * [/ip4/47.110.140.124/tcp/10241] dial tcp4 0.0.0.0:42459->47.110.140.124:10241: i/o timeout
  f02609: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWN1rFhehFAijAJFPfMohsN3M7xjeCzzJuMnJSwAwjTMg6:  * [/ip4/127.0.0.1/tcp/45117] dial tcp4 127.0.0.1:45117: connect: connection refused  * [/ip6/::1/tcp/37423] dial tcp6 [::1]:37423: connect: connection refused  * [/ip4/121.46.249.158/tcp/6060] dial tcp4 0.0.0.0:42459->121.46.249.158:6060: i/o timeout  * [/ip4/121.46.249.131/tcp/45117] dial tcp4 0.0.0.0:42459->121.46.249.131:45117: i/o timeout
  f02610: 'fail, Netherlands', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMnLT8D5yNAdEQbt2fXHFhUVQT2crdGLVktpSo7RCXtnk:  * [/ip4/202.0.16.111/tcp/41254] dial tcp4 0.0.0.0:42459->202.0.16.111:41254: i/o timeout
  f02613: 'fail, China, Chongqing + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSHE6LnRd5b8GdWaCAfBz5NQhq4uZafybStUnYeabgwRB:  * [/ip4/8.209.64.163/tcp/23027] dial tcp4 0.0.0.0:42459->8.209.64.163:23027: i/o timeout  * [/ip4/101.206.156.202/tcp/23027] dial tcp4 0.0.0.0:42459->101.206.156.202:23027: i/o timeout
  f02614: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE6JfBTMyjirNPSRi4AfZjCseRHGzXZvXUmKMsdHViyif:  * [/ip4/170.33.9.50/tcp/32633] dial tcp4 0.0.0.0:42459->170.33.9.50:32633: i/o timeout
  f02619: 'fail, China, Beijing, Blockcasting', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKZRdxtd9tC1tEvUynBRqRqzdxsi3jBmURi9HxftfgZLS:  * [/ip4/0.0.0.0/tcp/10240] dial tcp4 0.0.0.0:10240: connect: connection refused
  f02622: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG5QLGsSMPgrBmBQZb3H4q4zuS3F4XKpbYBHvgh2eXZAN:  * [/ip4/127.0.0.1/tcp/42345] dial tcp4 127.0.0.1:42345: connect: connection refused  * [/ip6/::1/tcp/44965] dial tcp6 [::1]:44965: connect: connection refused  * [/ip4/172.18.24.16/tcp/42345] dial tcp4 0.0.0.0:42459->172.18.24.16:42345: i/o timeout  * [/ip4/36.189.234.150/tcp/64146] dial tcp4 0.0.0.0:42459->36.189.234.150:64146: i/o timeout  * [/ip4/36.189.234.150/tcp/62125] dial tcp4 0.0.0.0:42459->36.189.234.150:62125: i/o timeout
  f02623: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAFSYFNoxUXR5dxSX3XgFanpFKmhSLX7RhTqKN4m8W8yh:  * [/ip4/127.0.0.1/tcp/44795] dial tcp4 127.0.0.1:44795: connect: connection refused  * [/ip6/::1/tcp/33763] dial tcp6 [::1]:33763: connect: connection refused  * [/ip4/172.18.23.26/tcp/44795] dial tcp4 0.0.0.0:42459->172.18.23.26:44795: i/o timeout  * [/ip4/36.189.234.150/tcp/63061] dial tcp4 0.0.0.0:42459->36.189.234.150:63061: i/o timeout  * [/ip4/36.189.234.150/tcp/60598] dial tcp4 0.0.0.0:42459->36.189.234.150:60598: i/o timeout
  f02625: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE1N2gyzrMRA6EywurJGaseGWuTa9Rn5tXdPLZ7yo8QSK:  * [/ip4/101.133.172.142/tcp/1024] dial tcp4 0.0.0.0:42459->101.133.172.142:1024: i/o timeout
  f02626: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMRGNAFKyUu9XBCk5HA32AFL6LmM6H62uoWb83QgYxYrD:  * [/ip4/10.3.7.133/tcp/58237] dial tcp4 0.0.0.0:42459->10.3.7.133:58237: i/o timeout  * [/ip4/8.209.115.161/tcp/58237] dial tcp4 0.0.0.0:42459->8.209.115.161:58237: i/o timeout
  f02633:
    'fail, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFUfGNQmRtHyByTfuhePhPmzUQvHRT2LjuUF2hKn1Mz5e:  * [/ip4/47.57.243.33/tcp/49522] failed to negotiate security protocol: EOF  * [/ip4/47.242.85.219/tcp/49522] failed to negotiate security protocol: EOF
  f02645:
    'fail, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMYVpFEU5SFpy9zucYf1kzyNSMVbzAPJiwkYtDTAh7ik9:  * [/ip4/47.242.85.219/tcp/49512] failed to negotiate security protocol: EOF  * [/ip4/47.57.243.33/tcp/49512] failed to negotiate security protocol: EOF
  f02721: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNNUguf8bGe72cudmWpKobV3Pkkc9Lx3GBDG2AEfDZN9L:  * [/ip4/202.0.32.211/tcp/4254] dial tcp4 0.0.0.0:42459->202.0.32.211:4254: i/o timeout
  f02723: 'fail, China, Tongling', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDvwbbdLgBbuQ3MPPN7gos8XEXekTJxW5NX4DMCfXNUoZ:  * [/ip4/60.173.23.17/tcp/23456] dial tcp4 0.0.0.0:42459->60.173.23.17:23456: i/o timeout
  f02725: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9ygexQt5zAMg1jLPbb3g4fgYfKHZKNcviMxXJk4UJAMX:  * [/ip4/101.32.38.57/tcp/18899] dial tcp4 0.0.0.0:42459->101.32.38.57:18899: i/o timeout
  f02726: 'fail, USA, Brooklyn', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWS4dsPm97xGtEaCSuH4k6uWtrH3A1kH1tKpBejDTPATrK:  * [/ip4/202.0.71.141/tcp/1254] dial tcp4 0.0.0.0:42459->202.0.71.141:1254: i/o timeout
  f02731: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWND88xcsZCdYNSUkqy35ikLpMaDpPMKse1mmMAZrFQyD6:  * [/ip4/202.6.95.44/tcp/21254] dial tcp4 0.0.0.0:42459->202.6.95.44:21254: i/o timeout
  f02767: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQotzkhoCXR7hSo5FMrrsHhYh8q7KSXHx85oZkFd3B8Pg:  * [/ip4/18.192.27.227/tcp/37722] dial tcp4 0.0.0.0:42459->18.192.27.227:37722: i/o timeout
  f02769: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02770: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02775: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02778: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02779: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02838: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMwvGx979vAyPA9gSyCcZ5xdLyi25WrJMikiYUG3sdton:  * [/ip4/118.123.228.9/tcp/48633] dial tcp4 0.0.0.0:42459->118.123.228.9:48633: i/o timeout
  f02856: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f03000: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAtN9bkDZStJqn1UiZf45UEJLA4t6rD6zxnZjD3Ev45u4:  * [/ip6/::1/tcp/36897] dial tcp6 [::1]:36897: connect: connection refused  * [/ip4/127.0.0.1/tcp/36085] dial tcp4 127.0.0.1:36085: connect: connection refused  * [/ip4/118.123.228.7/tcp/36085] dial tcp4 0.0.0.0:42459->118.123.228.7:36085: i/o timeout
  f03002: 'fail, China, Chongqing + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAwqepwZRwQPyBew1FWZo7BvQ6tTP3nyjG8skVU9uWEwL:  * [/ip4/8.209.64.163/tcp/18880] dial tcp4 0.0.0.0:42459->8.209.64.163:18880: i/o timeout  * [/ip4/101.206.156.202/tcp/18880] dial tcp4 0.0.0.0:42459->101.206.156.202:18880: i/o timeout
  f03134: 'fail, China, Cangzhou, QiaoMu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGKAuRMFJPmp6v9DR81vnbnFaToheUDUnMsXtT4MCdWq2:  * [/ip4/111.161.72.108/tcp/4913] dial tcp4 0.0.0.0:42459->111.161.72.108:4913: i/o timeout
  f03144: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFMK8Vg4SH5Wsrvp76JpJvwiuxdXpRyPrWa76Jrj6K4tc:  * [/ip4/103.214.41.38/tcp/23456] dial tcp4 0.0.0.0:42459->103.214.41.38:23456: i/o timeout
  f03176: 'fail, USA, San Mateo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPDyDeAQWj4kSEkVog1NAHJVu9cWpur3uGzH8H92THWPp:  * [/ip4/47.88.57.241/tcp/15470] dial tcp4 0.0.0.0:42459->47.88.57.241:15470: i/o timeout  * [/ip4/47.88.55.220/tcp/15470] dial tcp4 0.0.0.0:42459->47.88.55.220:15470: i/o timeout
  f03224: 'fail, Ukraine, Kyiv', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPQURCRZFxop8t7RKBwPiHSQNn2DYRbtFvz6AzZgaEQ2U:  * [/ip4/176.104.58.70/tcp/1348] dial tcp4 0.0.0.0:42459->176.104.58.70:1348: i/o timeout
  f03249: 'fail, China, Yunfu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAAGdpxELgywqdLsWjxkfh7z4xiSp8cUwqq9HZLEKM9fr:  * [/ip4/127.0.0.1/tcp/6789] dial tcp4 127.0.0.1:6789: connect: connection refused  * [/ip4/172.17.0.4/tcp/6789] dial tcp4 0.0.0.0:42459->172.17.0.4:6789: i/o timeout  * [/ip4/183.57.83.7/tcp/6789] dial tcp4 0.0.0.0:42459->183.57.83.7:6789: i/o timeout
  f03266: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRTVB3ued6YhMdyJ2qoQ6cKkVE7pPbfmETAmz61dz8cDj:  * [/ip4/200.226.167.245/tcp/22125] dial tcp4 0.0.0.0:42459->200.226.167.245:22125: i/o timeout
  f03273: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMLKVszjANNt9KDX15feD16u2r7ecaC6tw97wAJumeETe:  * [/ip4/127.0.0.1/tcp/34435] dial tcp4 127.0.0.1:34435: connect: connection refused  * [/ip6/::1/tcp/43687] dial tcp6 [::1]:43687: connect: connection refused  * [/ip4/172.18.55.16/tcp/34435] dial tcp4 0.0.0.0:42459->172.18.55.16:34435: i/o timeout  * [/ip4/36.189.234.182/tcp/63948] dial tcp4 0.0.0.0:42459->36.189.234.182:63948: i/o timeout  * [/ip4/36.189.234.182/tcp/62094] dial tcp4 0.0.0.0:42459->36.189.234.182:62094: i/o timeout
  f03274: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f03275: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f03287: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPLKQae57X1Wh9afjjBZbujq6qS53GdNbLULuyMARgxPC:  * [/ip4/216.154.66.123/tcp/32215] dial tcp4 0.0.0.0:42459->216.154.66.123:32215: i/o timeout
  f03325: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMY9qD6HqyujzkBMXZFUiVLUjYhL89fF6nexr8T4KS8Mf:  * [/ip4/113.107.201.186/tcp/42243] dial tcp4 0.0.0.0:42459->113.107.201.186:42243: i/o timeout
  f03328: 'fail, China, Xinxiang, Golden Miner', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ3c9CscaFyBbZcVYreTDCQAttS4g5NxomEDiSV7ZHStV:  * [/ip4/27.50.142.61/tcp/2347] dial tcp4 0.0.0.0:42459->27.50.142.61:2347: i/o timeout
  f03339: 'fail, China, Luzhou, benxun', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f03344: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f03345: 'fail, China, Fuzhou, chh', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJiL758mWGHJ5ws7qSRhC2hozY4gEu1fBbkbw5Q7ZQPfh:  * [/ip4/222.79.8.75/tcp/10851] dial tcp4 0.0.0.0:42459->222.79.8.75:10851: i/o timeout
  f03347: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNuub2ogC4NP1w47zZxWDgPNCXpca1vC8SxCvmEgG3W6a:  * [/ip6/::1/tcp/33455] dial tcp6 [::1]:33455: connect: connection refused  * [/ip4/127.0.0.1/tcp/33455] dial tcp4 127.0.0.1:33455: connect: connection refused  * [/ip4/103.39.227.5/tcp/33455] dial tcp4 0.0.0.0:42459->103.39.227.5:33455: i/o timeout  * [/ip4/103.44.253.59/tcp/33455] dial tcp4 0.0.0.0:42459->103.44.253.59:33455: i/o timeout  * [/ip4/103.119.132.105/tcp/33455] dial tcp4 0.0.0.0:42459->103.119.132.105:33455: i/o timeout
  f03358: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAAR2DxhxHGbXYBGL5qEawVpYdmRiTE4SxnzcFGVN4Vz3:  * [/ip4/1.183.72.211/tcp/30001] dial tcp4 0.0.0.0:42459->1.183.72.211:30001: i/o timeout
  f03363: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNUoRxEMinMJFfr98yF9UCnakRWRJPPN843BCpVoyiZtw:  * [/ip4/1.183.72.210/tcp/30003] dial tcp4 0.0.0.0:42459->1.183.72.210:30003: i/o timeout
  f03364: 'fail, China, Inner Mongolia', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f03367: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSxtJbCSV1BFbbGoNKiY7tYue55KfaSS71QTYHhpsGXnm:  * [/ip4/95.251.119.33/tcp/3215] dial tcp4 0.0.0.0:42459->95.251.119.33:3215: i/o timeout
  f03482: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHGA8SpRtc1aVfhKQk3odRQBCpouUGY1kBWjGLZRPFAZJ:  * [/ip4/221.228.238.110/tcp/23456] dial tcp4 0.0.0.0:42459->221.228.238.110:23456: i/o timeout
  f03491:
    'fail, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKiak4vysPSn1UB8vaj44uMK89rrEfSF3KAA6oU5zgZZN:  * [/ip4/47.242.85.219/tcp/49562] failed to negotiate security protocol: EOF  * [/ip4/47.57.243.33/tcp/49562] failed to negotiate security protocol: EOF
  f03624: 'fail, Germany, Chemnitz, ode', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvyqMy8wyyqvc4tPqkRrMcKkG2JNfVyZSX1viC88TXwG:  * [/ip4/87.128.76.11/tcp/29866] dial tcp4 87.128.76.11:29866: connect: no route to host
  f04443: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDact5w85YfxchLRcyhhZ2AA9u98PLByXX76Lu5j5VAjS:  * [/ip4/116.229.183.166/tcp/29847] dial tcp4 0.0.0.0:42459->116.229.183.166:29847: i/o timeout
  f05315: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f05316: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f05317: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f07749: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f07796: 'fail, China, Hunan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f07824: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHRZasGjpbLq9dwzP1QGWS8fZcBjxsatQ9X7WkMiUqK1k:  * [/ip4/10.166.8.11/tcp/32759] dial tcp4 0.0.0.0:42459->10.166.8.11:32759: i/o timeout
  f07830: 'fail, China, Zhongshan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE9SzGnHcweWu3UQaStBR1vmzjXqaN1YCTcSZ9DZ2oRAF:  * [/ip4/178.208.57.59/tcp/21322] dial tcp4 0.0.0.0:42459->178.208.57.59:21322: i/o timeout
  f07850: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f07919: 'fail, China, Beijing, Shanghai, Hunan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQbtaEAHPhVBuGoQtdnPxFfuKZ7axSiCFeNxuYgQGQYFx:  * [/ip4/139.196.136.126/tcp/23456] dial tcp4 0.0.0.0:42459->139.196.136.126:23456: i/o timeout  * [/ip4/47.101.4.131/tcp/23456] dial tcp4 0.0.0.0:42459->47.101.4.131:23456: i/o timeout  * [/ip4/101.32.198.187/tcp/23456] dial tcp4 0.0.0.0:42459->101.32.198.187:23456: i/o timeout  * [/ip4/101.32.198.186/tcp/23456] dial tcp4 0.0.0.0:42459->101.32.198.186:23456: i/o timeout
  f07945: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9sSV7kpS6siGLjv4Wzb4mQcSS2QQTUVHnjz6c9faV2zz:  * [/ip4/14.152.49.186/tcp/35001] dial tcp4 0.0.0.0:42459->14.152.49.186:35001: i/o timeout
  f07969: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFUXofzyD12vD1rWnNi9coXTtUqc188pNo2r7sNSgTBYQ:  * [/ip4/121.52.246.48/tcp/5002] dial tcp4 0.0.0.0:42459->121.52.246.48:5002: i/o timeout
  f07990:
    'fail, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFpMyVgzG9fgPEB94uzbTYTt6MjAm7DovpYPiMttaRQj8:  * [/ip4/47.57.243.33/tcp/49542] failed to negotiate security protocol: EOF  * [/ip4/47.242.85.219/tcp/49542] failed to negotiate security protocol: EOF
  f07998: 'fail, China, Hangzhou, 安问', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEc7u9RVN9gooeVpC6LXZpAXzZXAuRdkh3UMjRBzwgAR8:  * [/ip4/116.207.131.35/tcp/24001] dial tcp4 0.0.0.0:42459->116.207.131.35:24001: i/o timeout  * [/ip4/116.207.131.35/tcp/58685] dial tcp4 0.0.0.0:42459->116.207.131.35:58685: i/o timeout
  f08019: 'fail, China, Yantai, 三合', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPp7Zzqk7uLQqhtWEz6wN1SoE35szPnmBHbkAQc1AURst:  * [/ip4/222.173.214.146/tcp/10240] dial tcp4 0.0.0.0:42459->222.173.214.146:10240: i/o timeout
  f08025:
    'fail, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHHSJT1t7Pn7cHxEt5Ze3amA6PJnuVRynUmnapVzWhCXW:  * [/ip4/47.57.243.33/tcp/49552] failed to negotiate security protocol: EOF  * [/ip4/47.242.85.219/tcp/49552] failed to negotiate security protocol: EOF
  f08091: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWF2fkifBQNtVh9LwQC9m1MvgTTdLVHAezSxATrze3aK25:  * [/ip4/0.0.0.0/tcp/5472] dial tcp4 0.0.0.0:5472: connect: connection refused
  f08094: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRdbaruzV1FLSxZAriWDwHcYPteXyAPdtNaMkx7MMyRwr:  * [/ip4/183.2.154.179/tcp/23450] dial tcp4 0.0.0.0:42459->183.2.154.179:23450: i/o timeout
  f08101: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGjb3T4GLL7LXjfahBiaxRJDw2tu3ps42jYM4HcMTJ5P6:  * [/ip4/192.168.3.11/tcp/32759] dial tcp4 0.0.0.0:42459->192.168.3.11:32759: i/o timeout
  f08148: 'fail, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJRifXRHkLaHN8JgPxy6LDmn5JyDaBxqnKLEgZur3S8ZX:  * [/ip4/103.108.182.27/tcp/30031] dial tcp4 0.0.0.0:42459->103.108.182.27:30031: i/o timeout
  f08197: 'fail, China, Foshan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDhyWkvTtiuK7Pvm4iznWT1vZuQYMbXjYKGXkjjqZ6KYs:  * [/ip4/120.31.142.19/tcp/10240] dial tcp4 0.0.0.0:42459->120.31.142.19:10240: i/o timeout
  f08242: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKPWTxHrJdASejkyzHjU7f3XVECGWSmJFCy9SL65Dcutg:  * [/ip4/47.242.56.117/tcp/6789] dial tcp4 0.0.0.0:42459->47.242.56.117:6789: i/o timeout
  f08264: 'fail, China, Xianning', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWC4HGgmJqCZtaQzLRUSvy21GRhayGtaSES536Ug7mxpqf:  * [/ip4/103.222.191.115/tcp/1161] dial tcp4 0.0.0.0:42459->103.222.191.115:1161: i/o timeout
  f08383: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAUreaRLG7N1CnVDowwCagqHX6fyL9fJXEoVLACqrhdeD:  * [/ip4/127.0.0.1/tcp/36741] dial tcp4 127.0.0.1:36741: connect: connection refused  * [/ip6/::1/tcp/45643] dial tcp6 [::1]:45643: connect: connection refused  * [/ip4/172.18.53.48/tcp/36741] dial tcp4 0.0.0.0:42459->172.18.53.48:36741: i/o timeout  * [/ip4/36.189.234.154/tcp/64752] dial tcp4 0.0.0.0:42459->36.189.234.154:64752: i/o timeout  * [/ip4/36.189.234.154/tcp/61204] dial tcp4 0.0.0.0:42459->36.189.234.154:61204: i/o timeout
  f09002: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEEFKcY5USt22uCrNLj6McbDAtkJZRF7ns5atGS8M3rio:  * [/ip4/113.200.194.196/tcp/32634] dial tcp4 0.0.0.0:42459->113.200.194.196:32634: i/o timeout
  f09037: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGijGVP9N8ebcJNNEEPEGDhWbSJbsW2KtWeqVa5MQvTBx:  * [/ip4/170.33.12.95/tcp/16666] dial tcp4 0.0.0.0:42459->170.33.12.95:16666: i/o timeout
  f09620: 'fail, China, Weifang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRHjQb3e5ZEJLbJmfiuTftU9f63ts5c3kr1WCaz7PDMXP:  * [/ip4/58.57.65.80/tcp/9620] dial tcp4 0.0.0.0:42459->58.57.65.80:9620: i/o timeout
  f09652: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAAap3GmuBww6k7oYMLvQeoVVstVFmQaLqThfM9ZFtDqT:  * [/ip4/170.33.9.50/tcp/32632] dial tcp4 0.0.0.0:42459->170.33.9.50:32632: i/o timeout
  f09693: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f09696: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJfxtEn6sdmSkJLR5CGQjXpP7Qjx93VApCi6KjHFPZJQ5:  * [/ip4/127.0.0.1/tcp/34947] dial tcp4 127.0.0.1:34947: connect: connection refused  * [/ip6/::1/tcp/45469] dial tcp6 [::1]:45469: connect: connection refused  * [/ip4/36.189.234.167/tcp/60199] dial tcp4 0.0.0.0:42459->36.189.234.167:60199: i/o timeout  * [/ip4/172.18.70.16/tcp/34947] dial tcp4 0.0.0.0:42459->172.18.70.16:34947: i/o timeout  * [/ip4/36.189.234.167/tcp/64672] dial tcp4 0.0.0.0:42459->36.189.234.167:64672: i/o timeout
  f09710: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMceygoywUMfKmgMsESpZwsbALV11E3oUjdoC7iqDbQbr:  * [/ip4/103.44.253.56/tcp/40573] dial tcp4 0.0.0.0:42459->103.44.253.56:40573: i/o timeout
  f010010: 'fail, China, Changzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLxERuXPUWnpW4S66mV4cYHyvTDqMbEarwTyYsL8c4SAe:  * [/ip4/61.177.78.101/tcp/9981] dial tcp4 0.0.0.0:42459->61.177.78.101:9981: i/o timeout
  f010035: 'fail, Netherlands + China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJDvwMPfJ1ct9V6JpgRrdA7DWEEfcWSQAWCYbRrNxnXYi:  * [/ip4/172.18.4.169/tcp/2347] dial tcp4 0.0.0.0:42459->172.18.4.169:2347: i/o timeout  * [/ip4/61.155.145.101/tcp/2347] dial tcp4 0.0.0.0:42459->61.155.145.101:2347: i/o timeout  * [/ip4/185.232.59.179/tcp/2347] dial tcp4 0.0.0.0:42459->185.232.59.179:2347: i/o timeout
  f010038: 'fail, China, Hangzhou + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWS5ew4ysdAcDv3XxWbbP4ze4Zt1UtfnuVPHhEpivAWN3r:  * [/ip4/170.33.12.166/tcp/39774] dial tcp4 0.0.0.0:42459->170.33.12.166:39774: i/o timeout
  f010048: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWErRVHN36TpgVcDrKt5d1wZm8j649cGk29zcYSmxus86u:  * [/ip4/124.78.146.207/tcp/65500] dial tcp4 0.0.0.0:42459->124.78.146.207:65500: i/o timeout
  f010056: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWExdbgcJnR1JYaThHyyS8eGSzM3Y2BSpTn1YsKF3MPz7b:  * [/ip4/8.209.82.79/tcp/14567] dial tcp4 0.0.0.0:42459->8.209.82.79:14567: i/o timeout
  f010202: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f010225: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBwpsvnPsPhoDLLbdkm3tVJaAkxYWzp43H9F5rfESaHun:  * [/ip4/8.209.107.150/tcp/12312] dial tcp4 0.0.0.0:42459->8.209.107.150:12312: i/o timeout
  f010241: 'fail, China, Beijing + USA, Portland, 6Block-P', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG4NGMzMThc9wURX9cJCnK6Cxocq8VBru2HakPMYbaHoJ:  * [/ip6/::1/tcp/40657] dial tcp6 [::1]:40657: connect: connection refused  * [/ip4/127.0.0.1/tcp/36407] dial tcp4 127.0.0.1:36407: connect: connection refused  * [/ip4/172.18.69.16/tcp/36407] dial tcp4 0.0.0.0:42459->172.18.69.16:36407: i/o timeout  * [/ip4/36.189.234.166/tcp/61742] dial tcp4 0.0.0.0:42459->36.189.234.166:61742: i/o timeout  * [/ip4/36.189.234.166/tcp/62082] dial tcp4 0.0.0.0:42459->36.189.234.166:62082: i/o timeout
  f010247: 'fail, China, Yantai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLszEHE9KZT2ZBBhNSW4RheKixHT3Bk1GVdhBxwEYYDbS:  * [/ip4/122.14.201.169/tcp/10240] dial tcp4 0.0.0.0:42459->122.14.201.169:10240: i/o timeout
  f010399: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNaRz2GcsNETTGnZEp5zvJqUesc4Mq3kbrqkbizemRssT:  * [/ip4/183.2.154.156/tcp/36699] dial tcp4 0.0.0.0:42459->183.2.154.156:36699: i/o timeout
  f010400: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSPCJCC4kZKxze4Q8u6NWVPQb3wnXrDvbC42bbV1xjzMA:  * [/ip4/59.44.27.130/tcp/8787] dial tcp4 0.0.0.0:42459->59.44.27.130:8787: i/o timeout
  f010405: 'fail, China, Foshan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCjWvWu12JdH7tKkvSoxUmZwyf4o1ycH9jdGaBn2LGuZf:  * [/ip4/120.31.142.33/tcp/5427] dial tcp4 0.0.0.0:42459->120.31.142.33:5427: i/o timeout
  f010424: 'fail, Australia, Sydney', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGGVTP3jL5Gg5YPR7Q8j3RexRDgprF9EvrP4giafV956F:  * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:42459->43.241.189.214:39438: i/o timeout
  f010493: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNHF86DuaM2LonNPbQFEbYpVebpT9z7UGRePY8EWvsL9s:  * [/ip4/218.78.187.146/tcp/21735] dial tcp4 0.0.0.0:42459->218.78.187.146:21735: i/o timeout
  f010498: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDsfXYmHgsiWj5K36f7mgWoanybxcZ2M5ivpkJoitUykG:  * [/ip4/183.60.90.5/tcp/21735] dial tcp4 0.0.0.0:42459->183.60.90.5:21735: i/o timeout
  f010501: 'fail, China, Hangzhou, Interstellar Roewe', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWETA15epWhb2LReibLRuj6RdhBUvJjpypUNNtmbVFEUs7:  * [/ip4/183.134.218.26/tcp/21735] dial tcp4 0.0.0.0:42459->183.134.218.26:21735: i/o timeout
  f010505: 'fail, China, Wuhan, Interstellar Roewe', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCGuQ1wGac5coYevkmfJGCWgTU3FHJ7WaZKRnrqV7z21u:  * [/ip4/59.175.128.46/tcp/21735] dial tcp4 0.0.0.0:42459->59.175.128.46:21735: i/o timeout  * [/ip4/59.175.128.47/tcp/21736] dial tcp4 0.0.0.0:42459->59.175.128.47:21736: i/o timeout
  f010507: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f010513: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFhoqhz38UdReEJcUbh9RGZPQABbn6LoLtMzMrWRCD3as:  * [/ip4/117.23.58.108/tcp/21736] dial tcp4 0.0.0.0:42459->117.23.58.108:21736: i/o timeout  * [/ip4/117.23.58.107/tcp/21735] dial tcp4 0.0.0.0:42459->117.23.58.107:21735: i/o timeout
  f010528: 'fail, China, Chongqing, Interstellar Roewe', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGKxtxSZaJojDA3XX2MSbPBp2zWdAWSBca5VvxtrDG3Fn:  * [/ip4/113.207.109.184/tcp/21735] dial tcp4 0.0.0.0:42459->113.207.109.184:21735: i/o timeout
  f010538: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHTRhvSg4viFHbzoHndBo4riNU5psWY37SxytqhA3cYd5:  * [/ip4/8.209.107.150/tcp/12320] dial tcp4 0.0.0.0:42459->8.209.107.150:12320: i/o timeout
  f010558: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f010616: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSWbS5Ba3SkWFdYyHPXKFZDb6kBPvQCzV7CyGNEo2iAXR:  * [/ip4/8.209.107.150/tcp/12313] dial tcp4 0.0.0.0:42459->8.209.107.150:12313: i/o timeout
  f014233: 'fail, China, Shanghai + USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDokWdGQazetL7NAPQZAxAuy225tvYhxQuckt61S8RnwZ:  * [/ip4/114.88.73.108/tcp/45455] dial tcp4 0.0.0.0:42459->114.88.73.108:45455: i/o timeout  * [/ip4/47.241.72.105/tcp/45455] dial tcp4 0.0.0.0:42459->47.241.72.105:45455: i/o timeout
  f014251: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQxfYwV563URu95cLTVf6ogdTMTFdwB5CQKFFHPatPfU4:  * [/ip4/58.220.66.66/tcp/46166] dial tcp4 0.0.0.0:42459->58.220.66.66:46166: i/o timeout
  f014311: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDxu2JXzsnxz2L9ZWRXNBypcpQcduWwqmSZfu5EawCDmZ:  * [/ip4/162.62.55.44/tcp/12309] dial tcp4 0.0.0.0:42459->162.62.55.44:12309: i/o timeout
  f014335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f014386: 'fail, China, Panzhihua', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK9S1GMd9SqrpLxLJqrp5ekWKCFnx11vsUj1eagFA4p4d:  * [/ip4/180.149.130.16/tcp/9845] dial tcp4 0.0.0.0:42459->180.149.130.16:9845: i/o timeout
  f014392: 'fail, USA + Russia, Khabarovsk + Japan, Heiwajima', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD38od1j4abLotnfpALNPZt3TdjmQ1HqSiQBe1qZpnrCc:  * [/ip4/172.247.228.122/tcp/9999] dial tcp4 0.0.0.0:42459->172.247.228.122:9999: i/o timeout  * [/ip4/66.42.38.110/tcp/9990] dial tcp4 0.0.0.0:42459->66.42.38.110:9990: i/o timeout  * [/ip4/92.223.72.130/tcp/9999] dial tcp4 0.0.0.0:42459->92.223.72.130:9999: i/o timeout
  f014394: 'fail, China, Suzhou, IPFSCloud', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMZyzN5Cw2LAU7jrPzS8CiRLNbhEwiHiEZwdQw5xYfmEq:  * [/ip4/222.92.5.147/tcp/42799] dial tcp4 0.0.0.0:42459->222.92.5.147:42799: i/o timeout
  f014395: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f014415: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNM14sFqpmsSAW752NdjvpCxcEGhpTtFNntEW9zjvboT3:  * [/ip4/13.248.165.152/tcp/33612] dial tcp4 0.0.0.0:42459->13.248.165.152:33612: i/o timeout
  f014522: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKnwHakHiXkurxFTFVi4DTDkGftHzP6sh1khwHPPwcPjo:  * [/ip4/81.68.170.164/tcp/5474] dial tcp4 0.0.0.0:42459->81.68.170.164:5474: i/o timeout
  f014569: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDtmCKeqYgdWwZrFHrpGdNNUAuXBrFW55aNeC2esjDQVg:  * [/ip4/61.147.117.6/tcp/34737] dial tcp4 0.0.0.0:42459->61.147.117.6:34737: i/o timeout
  f014683: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f014686: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f014699: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f014706: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg:  * [/ip4/8.209.107.150/tcp/12308] dial tcp4 0.0.0.0:42459->8.209.107.150:12308: i/o timeout
  f014778: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLrw43ktH6n1YZ7qqWJw4ijBBD7Zc3iy6AcMktnxM7gVY:  * [/ip4/162.62.55.44/tcp/12310] dial tcp4 0.0.0.0:42459->162.62.55.44:12310: i/o timeout
  f014804: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNaLA26L7fd77idyimauWSobjBkeRA3P554yFcF3Ep24N:  * [/ip4/8.209.107.150/tcp/12314] dial tcp4 0.0.0.0:42459->8.209.107.150:12314: i/o timeout
  f015233: 'fail, China, Nanjing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGzWabrix7z79M6XGcjoskGGkZrCJvFExszD3RrwjZPYa:  * [/ip4/127.0.0.1/tcp/1347] dial tcp4 127.0.0.1:1347: connect: connection refused  * [/ip4/183.129.178.195/tcp/1347] dial tcp4 0.0.0.0:42459->183.129.178.195:1347: i/o timeout
  f015685: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSHahEVqnoWuoSwL3ZfJnRRTBx9NDc1956W4TBoLbu1zW:  * [/ip4/222.64.141.185/tcp/40321] dial tcp4 0.0.0.0:42459->222.64.141.185:40321: i/o timeout
  f015731: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQvZRpw6L6ErN6WeVYeAPQLvbtAHrXjHQoogiRFVEkEhw:  * [/ip4/8.209.107.150/tcp/12329] dial tcp4 0.0.0.0:42459->8.209.107.150:12329: i/o timeout
  f015734: 'fail, China, Qingdao', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f015767: 'fail, Russia, Khabarovsk + Japan, Khabarovsk + USA', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f015848: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHcMzWrWwRwKTekVWyEYipSgmYzRSzkLuRxdLJPXMY6DT:  * [/ip4/8.209.107.150/tcp/12321] dial tcp4 0.0.0.0:42459->8.209.107.150:12321: i/o timeout
  f015877: 'fail, China, Jiaxing + USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDXeF96VEMHn2t2Mzh6W3tjScc6rt1DTQPddN6VW7SDY7:  * [/ip6/::1/tcp/45345] dial tcp6 [::1]:45345: connect: connection refused  * [/ip4/127.0.0.1/tcp/33301] dial tcp4 127.0.0.1:33301: connect: connection refused  * [/ip4/61.174.254.179/tcp/33301] dial tcp4 0.0.0.0:42459->61.174.254.179:33301: i/o timeout
  f015885: 'fail, China, Jiaxing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKSZYxrwYfQ4H9ngrRbp8kFrccfexsbckAtVLbTGLi1UV:  * [/ip6/::1/tcp/46259] dial tcp6 [::1]:46259: connect: connection refused  * [/ip4/127.0.0.1/tcp/32995] dial tcp4 127.0.0.1:32995: connect: connection refused  * [/ip4/61.174.254.177/tcp/32995] dial tcp4 0.0.0.0:42459->61.174.254.177:32995: i/o timeout
  f015919: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAp28a2tL2vCae75zQXQiG5Tnf5ydgwVLNnztZ4sMgfst:  * [/ip4/8.209.107.150/tcp/12316] dial tcp4 0.0.0.0:42459->8.209.107.150:12316: i/o timeout
  f015922: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDaa2ZnPvxDGHPSr6R1oHSfDxJjBLc6mecMCPNcSzhgLz:  * [/ip4/1.183.72.226/tcp/33711] dial tcp4 0.0.0.0:42459->1.183.72.226:33711: i/o timeout
  f015925: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMPTWy68Cpoy7YzGrWE5oJhDmZQ7wqzfaocv8w5eNsLit:  * [/ip4/8.209.107.150/tcp/12318] dial tcp4 0.0.0.0:42459->8.209.107.150:12318: i/o timeout
  f015926: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFGsaBTVoaXyJLGMtdghwdUt6eRgLzT8Y7MYTpyU2U3V6:  * [/ip4/162.62.55.44/tcp/12319] dial tcp4 0.0.0.0:42459->162.62.55.44:12319: i/o timeout
  f015927: 'fail, USA, East Islip, CDImine', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQGPq3PGYwecDrdb8Xv8N8KXqsVs4VP7EXBh671nttjpT:  * [/ip4/69.126.46.133/tcp/40947] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQGPq3PGYwecDrdb8Xv8N8KXqsVs4VP7EXBh671nttjpT, but remote key matches 12D3KooWEmcea63iYDB8SF7fW69WZY9rvL7opw9wFMeFhn6v7cRM
  f015932: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f015941: 'fail, Ukraine, Kyiv', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGVdc5QckTCXzDNQ7UgjpoBTUfaXoh662YnXQs281EToA:  * [/ip4/176.37.174.101/tcp/1347] dial tcp4 0.0.0.0:42459->176.37.174.101:1347: i/o timeout  * [/ip4/176.37.167.219/tcp/1347] dial tcp4 0.0.0.0:42459->176.37.167.219:1347: i/o timeout
  f016276: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f016563: 'fail, China, Deyang + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEMbiAa9CFQBe8th6TMMEXyK5UpM7ag18puE1aktkriq1:  * [/ip4/192.168.109.1/tcp/8001] dial tcp4 0.0.0.0:42459->192.168.109.1:8001: i/o timeout  * [/ip4/192.168.109.2/tcp/8005] dial tcp4 0.0.0.0:42459->192.168.109.2:8005: i/o timeout  * [/ip4/161.117.186.53/tcp/8001] dial tcp4 0.0.0.0:42459->161.117.186.53:8001: i/o timeout  * [/ip4/222.213.119.134/tcp/8005] dial tcp4 0.0.0.0:42459->222.213.119.134:8005: i/o timeout  * [/ip4/125.64.78.27/tcp/8001] dial tcp4 0.0.0.0:42459->125.64.78.27:8001: i/o timeout
  f017193: "fail, China, Xi'an + Singapore", // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRiVxsQXJjT81eQm68vkKUk3mF2VyjefCWd1FXwf3Pe3S:  * [/ip4/127.0.0.1/tcp/9021] dial tcp4 127.0.0.1:9021: connect: connection refused  * [/ip6/::1/tcp/8505] dial tcp6 [::1]:8505: connect: connection refused  * [/ip4/113.142.1.86/tcp/23389] dial tcp4 0.0.0.0:42459->113.142.1.86:23389: i/o timeout  * [/ip4/113.142.1.86/tcp/50969] dial tcp4 0.0.0.0:42459->113.142.1.86:50969: i/o timeout  * [/ip4/192.168.25.2/tcp/9021] dial tcp4 0.0.0.0:42459->192.168.25.2:9021: i/o timeout  * [/ip4/8.211.49.16/tcp/14567] dial tcp4 0.0.0.0:42459->8.211.49.16:14567: i/o timeout
  f017229: 'fail, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAo7FyGdRWjzPiAawKLdDLFK3KXTzJkX1vX6xrnLC4wPJ:  * [/ip4/118.116.2.60/tcp/6666] dial tcp4 0.0.0.0:42459->118.116.2.60:6666: i/o timeout  * [/ip4/221.236.22.4/tcp/21735] dial tcp4 0.0.0.0:42459->221.236.22.4:21735: i/o timeout
  f017242: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f017665: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBfzAhUyf8jnZdMjkbskD7hnoBkNrZ5rsaGCE7Tjrqfha:  * [/ip4/127.0.0.1/tcp/2347] dial tcp4 127.0.0.1:2347: connect: connection refused  * [/ip6/::1/tcp/2347] dial tcp6 [::1]:2347: connect: connection refused  * [/ip4/218.60.28.174/tcp/2347] dial tcp4 0.0.0.0:42459->218.60.28.174:2347: i/o timeout  * [/ip4/218.60.28.136/tcp/2347] dial tcp4 0.0.0.0:42459->218.60.28.136:2347: i/o timeout
  f018538: 'fail, China, Huzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f019002: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f019041: 'fail, China, Zhejiang + Singapore, Zheng2', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJCDVwifzmPY667ySn4B5hGGReR6up3HzhSs5YJQjvSVt:  * [/ip4/47.110.140.124/tcp/10242] dial tcp4 0.0.0.0:42459->47.110.140.124:10242: i/o timeout
  f019074: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLM1TeB6wiFXdKgHPRh5W6wve8NXC13mEk3seDqVttKqg:  * [/ip4/192.168.2.55/tcp/3000] dial tcp4 0.0.0.0:42459->192.168.2.55:3000: i/o timeout
  f019099: 'fail, China, Hong Kong + Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR6aV6wyXX2hVB2DpVXkJ6gRWPZoNR6U4wCrdw8ChjAfa:  * [/ip4/45.158.182.10/tcp/12345] dial tcp4 0.0.0.0:42459->45.158.182.10:12345: i/o timeout
  f019100: 'fail, Romania, Cluj-Napoca, noisyfan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJFAe3K8ENQMmtZzSYsRoCNfvf8N3Ky15EVhCSoXjMhnP:  * [/ip4/79.119.122.118/tcp/55555] dial tcp4 0.0.0.0:42459->79.119.122.118:55555: i/o timeout
  f019240: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGfchVNtPipXgLz2Tb2zuF6ZvcZCkkgfE8pdgjjriPx9b:  * [/ip4/36.112.26.4/tcp/3458] dial tcp4 0.0.0.0:42459->36.112.26.4:3458: i/o timeout
  f019354: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLYorbezhim25zw5oAaPH6hpzKajEg4qiD7QcEFTNa1vJ:  * [/ip4/183.36.17.133/tcp/32517] dial tcp4 0.0.0.0:42459->183.36.17.133:32517: i/o timeout  * [/ip4/10.2.5.12/tcp/32517] dial tcp4 0.0.0.0:42459->10.2.5.12:32517: i/o timeout  * [/ip4/128.1.78.98/tcp/31437] dial tcp4 0.0.0.0:42459->128.1.78.98:31437: i/o timeout
  f019362: 'fail, China, Hangzhou, 青青子衿', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNaCtvposccuSNLw63Mtn8LzwqScmw9xjKYiGunhgg6BB:  * [/ip4/116.207.131.34/tcp/58683] dial tcp4 0.0.0.0:42459->116.207.131.34:58683: i/o timeout
  f019422: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f019638: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPPZz5WJkMn9GG87FYy6WwNE2LseU7KDo5DEA9H4ReWPP:  * [/ip4/1.183.72.210/tcp/30005] dial tcp4 0.0.0.0:42459->1.183.72.210:30005: i/o timeout
  f019806: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f020315: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMtQk6fPXsKjVok1psu8hGjuktQuFVbbqyndFTWWx6u3J:  * [/ip4/10.2.5.25/tcp/56432] dial tcp4 0.0.0.0:42459->10.2.5.25:56432: i/o timeout  * [/ip4/10.2.1.3/tcp/56432] dial tcp4 0.0.0.0:42459->10.2.1.3:56432: i/o timeout  * [/ip4/183.36.17.137/tcp/56432] dial tcp4 0.0.0.0:42459->183.36.17.137:56432: i/o timeout
  f020330: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBXPgkgXp2m35w78Bk43xTDVot5y47ewmVimnMhVkdYtx:  * [/ip4/193.193.193.14/tcp/14356] dial tcp4 0.0.0.0:42459->193.193.193.14:14356: i/o timeout
  f020331: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHPsvkyYG11ibvAQ3kGmoPdPBCfxvjXjZpa9NcVVSySCj:  * [/ip4/39.101.70.154/tcp/14567] dial tcp4 0.0.0.0:42459->39.101.70.154:14567: i/o timeout
  f020398: 'fail, China, Zhangjiakou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f020436: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRgBCjVvmsgJuE1VzRZ3EgSQoQtasZKAgiQ7zQN2J49N5:  * [/ip4/123.115.219.119/tcp/24002] dial tcp4 0.0.0.0:42459->123.115.219.119:24002: i/o timeout
  f020452: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAojcwZ3xQ8awhrXP4qhi7hH2Nv981JkzQyTsU83UMLkG:  * [/ip4/170.33.12.186/tcp/17012] dial tcp4 0.0.0.0:42459->170.33.12.186:17012: i/o timeout
  f020489: 'fail, China, Lioaning', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f020522: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLwpRZv1RnvGTzE67HkGLZc9HPAMvkJSM9eXBrF7FsfH1:  * [/ip4/8.211.49.16/tcp/14567] dial tcp4 0.0.0.0:42459->8.211.49.16:14567: i/o timeout
  f020604: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG2gh3aMiShLywLbkwB3E64KoMTuAuJvq463bGvmff51A:  * [/ip4/195.82.192.33/tcp/3321] dial tcp4 0.0.0.0:42459->195.82.192.33:3321: i/o timeout
  f020618: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGHFUS8oi1qbinPV4gnuNmU8EatZkYSya7HQahTd95XqU:  * [/ip4/170.33.12.186/tcp/17011] dial tcp4 0.0.0.0:42459->170.33.12.186:17011: i/o timeout
  f020742: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD3yEpkcFCuGh9mEwtyNY8HUxjDDWS7pkC4iGzpygdbDc:  * [/ip4/175.24.25.61/tcp/53456] dial tcp4 0.0.0.0:42459->175.24.25.61:53456: i/o timeout
  f020747: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f020928: 'fail, China, Deyang + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSXR1y7ZT4HzjboVXuFsG4nsATyxA89cUnZBiESoJb6dm:  * [/ip4/127.0.0.1/tcp/12288] dial tcp4 127.0.0.1:12288: connect: connection refused  * [/ip4/10.0.5.63/tcp/12288] dial tcp4 0.0.0.0:42459->10.0.5.63:12288: i/o timeout  * [/ip4/117.177.135.20/tcp/12288] dial tcp4 0.0.0.0:42459->117.177.135.20:12288: i/o timeout  * [/ip4/170.33.9.50/tcp/12288] dial tcp4 0.0.0.0:42459->170.33.9.50:12288: i/o timeout
  f020940: 'fail, USA, Bellevue', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHWK6GGMcp1D7BcF4hKxrkyTBF6mCtobBSQUgUjnhYhz8:  * [/ip4/127.0.0.1/tcp/36947] dial tcp4 127.0.0.1:36947: connect: connection refused  * [/ip6/::1/tcp/33825] dial tcp6 [::1]:33825: connect: connection refused  * [/ip4/192.168.0.99/tcp/36947] dial tcp4 0.0.0.0:42459->192.168.0.99:36947: i/o timeout  * [/ip4/223.113.148.249/tcp/60841] dial tcp4 0.0.0.0:42459->223.113.148.249:60841: i/o timeout  * [/ip4/52.247.215.232/tcp/2048] dial tcp4 0.0.0.0:42459->52.247.215.232:2048: i/o timeout  * [/ip4/223.113.148.249/tcp/30298] dial tcp4 0.0.0.0:42459->223.113.148.249:30298: i/o timeout
  f020957: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021075: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJh9xZZeQ6yTbvvEgGk6sWcf3m9jMH22t7fvQJCZipYdc:  * [/ip4/118.112.243.140/tcp/36545] dial tcp4 0.0.0.0:42459->118.112.243.140:36545: i/o timeout  * [/ip4/47.242.40.252/tcp/36545] dial tcp4 0.0.0.0:42459->47.242.40.252:36545: i/o timeout
  f021254: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLeWLUiErLHXTDn9bBZP8HCT1ymnhRMqLj6eo6xfftiPx:  * [/ip4/61.164.212.141/tcp/24001] dial tcp4 0.0.0.0:42459->61.164.212.141:24001: i/o timeout
  f021255: 'fail, Netherlands + China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAVDE6eCogR3QYC44Ynb89Qyu5o1WjgFsA3bpWsZztGV8:  * [/ip4/172.18.5.161/tcp/2347] dial tcp4 0.0.0.0:42459->172.18.5.161:2347: i/o timeout  * [/ip4/61.155.145.100/tcp/2347] dial tcp4 0.0.0.0:42459->61.155.145.100:2347: i/o timeout  * [/ip4/185.232.59.178/tcp/2347] dial tcp4 0.0.0.0:42459->185.232.59.178:2347: i/o timeout
  f021444: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWReHgMWRaP31htajNkfCTobGZvH6wRTydvTXfKcCwvUTN:  * [/ip4/183.60.227.73/tcp/10240] dial tcp4 0.0.0.0:42459->183.60.227.73:10240: i/o timeout
  f021461: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFi6doAcsSUCDhU9EFjSJD6t6up6ko35RD3ZtTdG6rjfC:  * [/ip4/170.33.12.186/tcp/17361] dial tcp4 0.0.0.0:42459->170.33.12.186:17361: i/o timeout
  f021504: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJcdYmtnTWU2bAyotLrjQAxripm8ZDoXpKASSxJC7zuUx:  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/120.232.253.7/tcp/23450] dial tcp4 0.0.0.0:42459->120.232.253.7:23450: i/o timeout
  f021525: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRPLVYuydRMtVtDSTEi1gpwewniZbpXZeDecSTtstfvAA:  * [/ip4/121.201.41.87/tcp/14567] dial tcp4 0.0.0.0:42459->121.201.41.87:14567: i/o timeout
  f021532: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFB42PdKvKzH2bLS1tXhBjBEMbL1Arcmr8DeHE7TV2wqN:  * [/ip4/121.46.237.2/tcp/23456] dial tcp4 0.0.0.0:42459->121.46.237.2:23456: i/o timeout
  f021536: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021547: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJhmH6Zj4SuNdNrXAThjLcoM1NzDTRuys5rr85ukfoRd7:  * [/ip4/170.33.12.186/tcp/17329] dial tcp4 0.0.0.0:42459->170.33.12.186:17329: i/o timeout
  f021695: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021704: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021710: 'fail, China, Shijiazhuang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021870: 'fail, China, Jieyang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021961: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRC9kqiX5z5pNvHRSPgCAYwTUc23CAHZ4fNHosTeVWMv4:  * [/ip4/192.168.1.13/tcp/7000] dial tcp4 0.0.0.0:42459->192.168.1.13:7000: i/o timeout  * [/ip4/110.80.136.19/tcp/7000] dial tcp4 0.0.0.0:42459->110.80.136.19:7000: i/o timeout
  f022030: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022038: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022072: 'fail, China, Jieyang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022111: 'fail, China, Quanzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHjd2Mn9oXSg6Anuw5LtXyEtHoqsMSeK8gH495zukLjiQ:  * [/ip4/112.47.13.98/tcp/8081] dial tcp4 0.0.0.0:42459->112.47.13.98:8081: i/o timeout
  f022125: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFqVmmKFirUS75Y28bK4kGTFEydBgo2esUGEhK8oQznQT:  * [/ip4/172.168.0.220/tcp/33457] dial tcp4 0.0.0.0:42459->172.168.0.220:33457: i/o timeout
  f022227: 'fail, China, Jiangsu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFb6Kyw9uZHyB5cN9LSr7VUajpbrE3XJoL2zDdVi6cA2x:  * [/ip4/112.30.158.226/tcp/10240] dial tcp4 0.0.0.0:42459->112.30.158.226:10240: i/o timeout
  f022261: 'fail, China, Luzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSuh5ZLT9pJU3VwstQQjG6jbVXXLnDMJoWsK6Uk2Bybbh:  * [/ip6/::1/tcp/32807] dial tcp6 [::1]:32807: connect: connection refused  * [/ip4/127.0.0.1/tcp/39067] dial tcp4 127.0.0.1:39067: connect: connection refused  * [/ip4/192.168.0.111/tcp/19250] dial tcp4 0.0.0.0:42459->192.168.0.111:19250: i/o timeout  * [/ip4/10.0.0.9/tcp/39067] dial tcp4 0.0.0.0:42459->10.0.0.9:39067: i/o timeout  * [/ip4/192.168.0.111/tcp/57366] dial tcp4 0.0.0.0:42459->192.168.0.111:57366: i/o timeout  * [/ip4/218.2.20.246/tcp/57366] dial tcp4 0.0.0.0:42459->218.2.20.246:57366: i/o timeout  * [/ip4/218.2.20.246/tcp/19250] dial tcp4 0.0.0.0:42459->218.2.20.246:19250: i/o timeout  * [/ip4/175.155.178.195/tcp/7777] dial tcp4 0.0.0.0:42459->175.155.178.195:7777: i/o timeout
  f022289: 'fail, China, Mianyang', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f022308: 'fail, China, Bozhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f022336: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022338: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022361: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022373: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022374: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022399: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f022522: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNJFQKtNKSyEx1qy2hV7N69euGbPVsutBucdP4dbfFrjL:  * [/ip4/113.105.174.12/tcp/10000] dial tcp4 0.0.0.0:42459->113.105.174.12:10000: i/o timeout
  f022566: 'fail, China, Nanchong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQqBXoRpNnKmNvGst4qvX8n8Hfo1TUg4LATrrciWV2S3i:  * [/ip4/221.10.143.25/tcp/32005] dial tcp4 0.0.0.0:42459->221.10.143.25:32005: i/o timeout
  f022687: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDMP23CasGQtJLXWXpNcqBy6ENTuzZ4jsBvyRYkgNmJBE:  * [/ip4/182.131.4.194/tcp/10080] dial tcp4 0.0.0.0:42459->182.131.4.194:10080: i/o timeout
  f022748: 'fail, China, Xinyang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022804: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022820: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPkML61uXkPFbnaSretqsS8qYmKkrfeEmnhGgfrfQ8UDY:  * [/ip4/45.251.104.73/tcp/6123] dial tcp4 0.0.0.0:42459->45.251.104.73:6123: i/o timeout
  f022832: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEKNh29iao27XzC3rDz3rk1L4g1SAGyYUxcW1jmbbvEjc:  * [/ip4/101.36.64.200/tcp/42545] dial tcp4 0.0.0.0:42459->101.36.64.200:42545: i/o timeout
  f022853: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRrw3MpPrr5gaVyv9hHAyLosb76osgrGAKuByXycihWEY:  * [/ip4/150.242.97.226/tcp/11105] dial tcp4 0.0.0.0:42459->150.242.97.226:11105: i/o timeout
  f022922: 'fail, China, Shenzhen, CAAP-MEG', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023001: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNUTa7nwh7wH8vnHb5cYxHQaYf99N85t18fzRUBRFhgux:  * [/ip4/192.168.1.236/tcp/34617] dial tcp4 0.0.0.0:42459->192.168.1.236:34617: i/o timeout
  f023152: 'fail, China, Shandong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWN1MJM2v2ag8LVDKKz5DbGJuneePgh47Lq8rh1Gec3PWJ:  * [/ip4/106.74.7.4/tcp/32759] dial tcp4 0.0.0.0:42459->106.74.7.4:32759: i/o timeout
  f023179: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJUsk7eTmwvW72Q7vYFzAaxh1Ktsjz2pkK2wRUC4VJ3HH:  * [/ip6/::1/tcp/39463] dial tcp6 [::1]:39463: connect: connection refused  * [/ip4/127.0.0.1/tcp/35305] dial tcp4 127.0.0.1:35305: connect: connection refused  * [/ip4/36.248.42.103/tcp/35305] dial tcp4 0.0.0.0:42459->36.248.42.103:35305: i/o timeout
  f023198: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJkAzkpy3qUBCLE8enVvVNXfEr2Hm7MR7N5fFir1V2hTe:  * [/ip6/::1/tcp/4991] dial tcp6 [::1]:4991: connect: connection refused  * [/ip4/127.0.0.1/tcp/10805] dial tcp4 127.0.0.1:10805: connect: connection refused  * [/ip4/192.168.25.49/tcp/10805] dial tcp4 0.0.0.0:42459->192.168.25.49:10805: i/o timeout  * [/ip4/113.142.1.86/tcp/37260] dial tcp4 0.0.0.0:42459->113.142.1.86:37260: i/o timeout  * [/ip4/113.142.1.86/tcp/60829] dial tcp4 0.0.0.0:42459->113.142.1.86:60829: i/o timeout
  f023200: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKV6h5S72ZzJvSVvUqoC1Q6i1eKKdYJEaKss2mbDNCnxi:  * [/ip4/175.24.25.61/tcp/13457] dial tcp4 0.0.0.0:42459->175.24.25.61:13457: i/o timeout
  f023205: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSjjE2kccKuZd7nZ2wrZ82rCg9zVMp35vCgZG86H6Gvm7:  * [/ip4/193.194.160.12/tcp/2234] dial tcp4 0.0.0.0:42459->193.194.160.12:2234: i/o timeout
  f023219: 'fail, China, Beijing + Zhangjiakou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023462: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGW26ie1rqmCjLapiSiXgYnsLTN6MrRecmaBbNgNujJrt:  * [/ip4/61.164.212.154/tcp/29012] dial tcp4 0.0.0.0:42459->61.164.212.154:29012: i/o timeout
  f023495: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023534: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRxHzTxSbtqzUPGwtroLnqS6X5EXRsxoGfteLVrCPgJJD:  * [/ip4/61.164.212.154/tcp/29014] dial tcp4 0.0.0.0:42459->61.164.212.154:29014: i/o timeout
  f023561: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPs912rgbTFiN7KBzjREuDXGqgG4CMDDbei1HBJ3qgvwg:  * [/ip4/103.44.247.32/tcp/40573] dial tcp4 0.0.0.0:42459->103.44.247.32:40573: i/o timeout
  f023565: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD9CHJ9XfyVm9bmqvZL3s8HbygUbrUpMYvHxhahc1hfQa:  * [/ip4/220.176.125.32/tcp/23450] dial tcp4 0.0.0.0:42459->220.176.125.32:23450: i/o timeout
  f023626: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023627: 'fail, China, Zhongwei', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023651: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023660: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023662: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023678: 'fail, China, Jiaxing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHzeqMTNq8NB93Hc9x3PaNcCm2AM12w4794fqQMocFCcg:  * [/ip4/61.174.254.176/tcp/56789] dial tcp4 0.0.0.0:42459->61.174.254.176:56789: i/o timeout
  f023843: 'fail, China, Zhangjiakou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023853: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023854: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023855: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023858: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023859: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAgTdstEm4KiyszCdWzbVzSjbsopRap2gb1hVHnJEStXK:  * [/ip4/220.176.125.73/tcp/23450] dial tcp4 0.0.0.0:42459->220.176.125.73:23450: i/o timeout
  f023861: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023868: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023869: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023870: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023876: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023882: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023928: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023977: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023978: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023980: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023981: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023983: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNhc5Rzgc1c8p9kvBVhrLUB4ZZniwnpi4yQd1WVf952tp:  * [/ip4/61.164.212.154/tcp/28014] dial tcp4 0.0.0.0:42459->61.164.212.154:28014: i/o timeout
  f023984: 'fail, China, Jiaxing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMvACeFSqXarKUTKFGwmZ5HheSgGssRV6hTafxKg1ZEEP:  * [/ip4/61.164.212.154/tcp/28013] dial tcp4 0.0.0.0:42459->61.164.212.154:28013: i/o timeout
  f023985: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMcc3EhXXVv58dHrg2oAtdA8JMHyqZPAJekuuhSd4rN32:  * [/ip4/61.164.212.154/tcp/28015] dial tcp4 0.0.0.0:42459->61.164.212.154:28015: i/o timeout
  f024006: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMssoUpCAjmmcwBtQXvkfcpKkMdCEpXkrZ2cSJbVgqQqu:  * [/ip4/220.176.125.65/tcp/23450] dial tcp4 0.0.0.0:42459->220.176.125.65:23450: i/o timeout
  f024007: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNCgSYULLYxeb89hJvWM8sEnCetPvpDus7AgS5i2fCfwF:  * [/ip4/220.176.125.67/tcp/23450] dial tcp4 0.0.0.0:42459->220.176.125.67:23450: i/o timeout
  f024008: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWN4XuxbKTnpLQdjF3mVXMBPGwiNCzcAHsNuD86XHjRdoW:  * [/ip4/220.176.125.69/tcp/23450] dial tcp4 0.0.0.0:42459->220.176.125.69:23450: i/o timeout
  f024012: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f024013: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSueGmhHaMvCQHgEvDXSsivWZZxqfymLWi6UvYSZJBaEP:  * [/ip4/220.176.125.87/tcp/23450] dial tcp4 0.0.0.0:42459->220.176.125.87:23450: i/o timeout
  f024014: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f024066: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMjX9ZBRijeCWy8vVJhkar73WYmed1Sa137NZ3W56aHsc:  * [/ip4/182.131.4.197/tcp/10080] dial tcp4 0.0.0.0:42459->182.131.4.197:10080: i/o timeout
  f024081: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f024085: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPeHXHNPZ2MJM4yTnRrxG4Tm9PJ6jvToja7i19b6Dk7to:  * [/ip4/220.176.125.63/tcp/23450] dial tcp4 0.0.0.0:42459->220.176.125.63:23450: i/o timeout
  f024089: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWL9BpZhuAK5XLcTozTvCmwnCVL7BL4AisXBJgjfDBovpc:  * [/ip4/10.11.4.210/tcp/1234] dial tcp4 0.0.0.0:42459->10.11.4.210:1234: i/o timeout
  f024136: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f024137: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJLMF5W4wheCZMaVuBe57eLV93Wx9azEJhv1mZ1BWk6Js:  * [/ip4/195.146.128.172/tcp/11223] dial tcp4 0.0.0.0:42459->195.146.128.172:11223: i/o timeout
  f024147: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f024182: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQFqPz3vvYGGxB259qZfg3qzoKEnafG8DbfMKUHEUQ26z:  * [/ip4/14.136.246.136/tcp/46717] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQFqPz3vvYGGxB259qZfg3qzoKEnafG8DbfMKUHEUQ26z, but remote key matches 12D3KooWHuQtiCKJykJscPMrNiXaguBWKuhBfKDfGP6ieR6SgwdF
  f024468: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024483: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024511: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCov5Vij5iQo5KP5ojZq1rARE5pXwri4qjnDTTYFuMkwa:  * [/ip4/103.44.247.137/tcp/51105] dial tcp4 0.0.0.0:42459->103.44.247.137:51105: i/o timeout
  f024550: 'fail, China, Wenzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDLC4HXzHjaMegLssFx9HwMmyNzhGc4XmcSSP9rZaSFyv:  * [/ip4/122.228.196.208/tcp/24001] dial tcp4 0.0.0.0:42459->122.228.196.208:24001: i/o timeout
  f024563: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024802: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024894: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024895: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024972: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f025002: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSK67f2i4BYCP4xjUWxhonw38WP7invh47VoUbbXT7zgR:  * [/ip4/202.0.9.112/tcp/31354] dial tcp4 0.0.0.0:42459->202.0.9.112:31354: i/o timeout
  f025005: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f025017: 'fail, China, Hefei, 一三科技-913', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBZeFG1c5zNwCCVnCa6g5TyrUQu5f9oLTYsZyvSigBEXu:  * [/ip4/175.6.250.70/tcp/51105] dial tcp4 0.0.0.0:42459->175.6.250.70:51105: i/o timeout
  f025019: 'fail, China, Taiwan, Hsinchu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPcST189CRdZ2BLrE5NhFz2YQwcfCWdabj12FWwVNBjYj:  * [/ip4/140.113.194.250/tcp/24002] dial tcp4 0.0.0.0:42459->140.113.194.250:24002: i/o timeout
  f025025: 'fail, China, Qingdao', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD3fDsjFefBdMxzWG1zin7tSpLBf51hDC71cY1GwR3Y42:  * [/ip4/27.223.96.182/tcp/36980] dial tcp4 0.0.0.0:42459->27.223.96.182:36980: i/o timeout
  f025044: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f029404: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f029416: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWM5kp2XVhVakYkZEbNo86dXjxfQWDVUwVDMRBU8WhMyTB:  * [/ip4/0.0.0.0/tcp/1024] dial tcp4 0.0.0.0:1024: connect: connection refused
  f029490: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f029585: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f029649: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f029665: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHBddu2erdfQ6NNGgNfbzZyYaKYAm46kYPQQ1triYHDgA:  * [/ip4/124.95.135.132/tcp/7000] dial tcp4 0.0.0.0:42459->124.95.135.132:7000: i/o timeout
  f030125: 'fail, China, Nantong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWP31DDGemmwGuNaKVzEX1nqNWesxWKADFBpRqiwKV7tmT:  * [/ip4/58.221.143.38/tcp/24001] dial tcp4 0.0.0.0:42459->58.221.143.38:24001: i/o timeout
  f030203: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030249: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030272: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030331: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030335: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAS1ZvQxAryVp2YqHQ8XsE7zSubFzzCA868J56NyYQzFh:  * [/ip4/150.242.97.228/tcp/51105] dial tcp4 0.0.0.0:42459->150.242.97.228:51105: i/o timeout
  f030347: 'fail, China, Zhejiang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030384: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNfUzbXzVXqLV9pEubVenJoQHkWtkrR3aSvwyoXc7Kpys:  * [/ip4/103.40.249.175/tcp/12350] dial tcp4 0.0.0.0:42459->103.40.249.175:12350: i/o timeout
  f030408: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030509: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030510: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030511: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030649: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f032833: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f032850: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f032888: 'fail, China, Weifang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCPLUkd2MamEEci9JKcm5ZYUMuAXrche7sZFPYxfHzGyj:  * [/ip4/58.57.65.59/tcp/36043] dial tcp4 0.0.0.0:42459->58.57.65.59:36043: i/o timeout  * [/ip4/127.0.0.1/tcp/36043] dial tcp4 127.0.0.1:36043: connect: connection refused  * [/ip6/::1/tcp/41029] dial tcp6 [::1]:41029: connect: connection refused
  f032913: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033025: 'fail, Korea, Daegu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLCrE5QLwGxvodoDNoEjF5BxJV6NCeFuipXbjGYawaHfA:  * [/ip4/59.23.202.120/tcp/24004] failed to negotiate security protocol: read tcp4 144.217.11.204:42459->59.23.202.120:24004: read: connection reset by peer
  f033036: 'fail, China, Liaoning', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJPmZKGzgjenB2jkvrpmL7N8YA4jbxM8Es8VYEb5cMtub:  * [/ip4/116.132.221.23/tcp/40888] dial tcp4 0.0.0.0:42459->116.132.221.23:40888: i/o timeout  * [/ip4/106.8.149.167/tcp/40888] dial tcp4 0.0.0.0:42459->106.8.149.167:40888: i/o timeout  * [/ip4/182.18.83.55/tcp/40888] dial tcp4 0.0.0.0:42459->182.18.83.55:40888: i/o timeout
  f033130: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033189: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f033384: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033399: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033456: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033462: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033463: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033475: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033501: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033517: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034047: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f034258: 'fail, China, Mianyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNL9FqnuXafmioTKegZpwUDLepF7NuviTuCSv9LNoQ2A6:  * [/ip4/117.175.0.205/tcp/34147] dial tcp4 0.0.0.0:42459->117.175.0.205:34147: i/o timeout
  f034350: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034544: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRXVLz2WJA2xkJ5SYzGC1JSnenKMw6Ji3AcArgbigrsPQ:  * [/ip4/192.162.197.113/tcp/3235] dial tcp4 0.0.0.0:42459->192.162.197.113:3235: i/o timeout
  f034545: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGGzwFRoHQ2PkctVAB2mNV67Yg4bJ1G84AQTNpN9y311b:  * [/ip4/83.56.103.132/tcp/13235] dial tcp4 0.0.0.0:42459->83.56.103.132:13235: i/o timeout
  f034548: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ7MPMEqCUUJMo2pszvQnR7prBnujeQuKrvaSyeeqJkCb:  * [/ip4/201.117.103.212/tcp/11235] dial tcp4 0.0.0.0:42459->201.117.103.212:11235: i/o timeout
  f034566: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034567: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034581: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034592: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK8NjcyE6yfsRYngnMcAXf13CPpS1Kh7nLDMTUd2yRvxW:  * [/ip4/119.147.213.217/tcp/45137] dial tcp4 0.0.0.0:42459->119.147.213.217:45137: i/o timeout
  f034658: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034701: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWET4Zd79pt13fTA35Vke4wSajUGmyejTSt5UMWDjwDAWN:  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/14.152.85.144/tcp/23450] dial tcp4 0.0.0.0:42459->14.152.85.144:23450: i/o timeout
  f034707: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034710: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034777: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f035160: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f035161: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f035364: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f035436: 'fail, China, Jiangsu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWETJiPncr6rLtEVreyRhnbenBHZ5UQK4MDjx1C5TsnraQ:  * [/ip6/::1/tcp/43331] dial tcp6 [::1]:43331: connect: connection refused  * [/ip4/127.0.0.1/tcp/46819] dial tcp4 127.0.0.1:46819: connect: connection refused  * [/ip4/172.28.2.53/tcp/46819] dial tcp4 0.0.0.0:42459->172.28.2.53:46819: i/o timeout  * [/ip4/180.97.169.2/tcp/46819] dial tcp4 0.0.0.0:42459->180.97.169.2:46819: i/o timeout
  f039515: 'fail, China, Chongqing, valarhash', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBwzqnU888FFWcfV2KjPx1EZPFyboEkrQbSvAzggp3AZU:  * [/ip4/58.144.223.199/tcp/2347] dial tcp4 0.0.0.0:42459->58.144.223.199:2347: i/o timeout
  f039800: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f039940: 'fail, China, Mianyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWL9ho5L222zGSrFiDK9ZrRN8y2Wu22guFdN78CxcEvxtp:  * [/ip4/117.175.0.198/tcp/23456] dial tcp4 0.0.0.0:42459->117.175.0.198:23456: i/o timeout
  f039992: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f040218: 'fail, China, Wuxi', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDGtfj4r9yeM9tebHySKRddd43SFjNJ8CQc7LXaCxADoP:  * [/ip4/58.215.14.146/tcp/30000] dial tcp4 0.0.0.0:42459->58.215.14.146:30000: i/o timeout
  f040332: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCDhW5usW7tYHjtS8dfWkKkCL9S2ZohVWBcKWawgzBFtq:  * [/ip4/10.3.1.104/tcp/31432] dial tcp4 0.0.0.0:42459->10.3.1.104:31432: i/o timeout  * [/ip4/103.44.247.90/tcp/31432] dial tcp4 0.0.0.0:42459->103.44.247.90:31432: i/o timeout
  f040665: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f042391: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRMiAeNjG7xNDemkDZeBcGY3epKaAHjDQqJnRo62XYv9v:  * [/ip4/36.248.42.100/tcp/24001] dial tcp4 0.0.0.0:42459->36.248.42.100:24001: i/o timeout
  f042540: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAkSNxAKCQvqLqk6VpjRNnrVfGnVAt67zQ455JYeXQAnz:  * [/ip6/::1/tcp/46793] dial tcp6 [::1]:46793: connect: connection refused  * [/ip4/127.0.0.1/tcp/45567] dial tcp4 127.0.0.1:45567: connect: connection refused  * [/ip4/172.18.35.27/tcp/45567] dial tcp4 0.0.0.0:42459->172.18.35.27:45567: i/o timeout  * [/ip4/36.189.234.195/tcp/61934] dial tcp4 0.0.0.0:42459->36.189.234.195:61934: i/o timeout  * [/ip4/36.189.234.195/tcp/63194] dial tcp4 0.0.0.0:42459->36.189.234.195:63194: i/o timeout
  f042567: 'fail, China, Jinhua', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMA4KNGnCe72XPo3dfGtdUwRVdb1PDmkK1xFnLxHFzpPR:  * [/ip4/61.164.110.249/tcp/24001] dial tcp4 0.0.0.0:42459->61.164.110.249:24001: i/o timeout
  f042635: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHa8fs3ysuzKgqPNzj6rjvunSjCvX9TpdWJfx9xc3ytiB:  * [/ip4/127.0.0.1/tcp/44353] dial tcp4 127.0.0.1:44353: connect: connection refused  * [/ip6/::1/tcp/40837] dial tcp6 [::1]:40837: connect: connection refused  * [/ip4/172.18.71.86/tcp/44353] dial tcp4 0.0.0.0:42459->172.18.71.86:44353: i/o timeout  * [/ip4/36.189.234.169/tcp/63428] dial tcp4 0.0.0.0:42459->36.189.234.169:63428: i/o timeout  * [/ip4/36.189.234.169/tcp/63805] dial tcp4 0.0.0.0:42459->36.189.234.169:63805: i/o timeout
  f042855: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f042896: 'fail, China, Deyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWByGP4vQtFmERj16ttS52ifbvRzdiDUz8uyB2WxwXVSbU:  * [/ip4/192.168.109.5/tcp/5003] dial tcp4 0.0.0.0:42459->192.168.109.5:5003: i/o timeout  * [/ip4/192.168.109.5/tcp/8008] dial tcp4 0.0.0.0:42459->192.168.109.5:8008: i/o timeout  * [/ip4/125.64.78.27/tcp/5003] dial tcp4 0.0.0.0:42459->125.64.78.27:5003: i/o timeout  * [/ip4/222.213.119.136/tcp/8008] dial tcp4 0.0.0.0:42459->222.213.119.136:8008: i/o timeout
  f043929: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRA6mCa3GAoAMnztMPrBHQSMgLd2pcq7XdCFXWgVyAE7N:  * [/ip4/120.232.96.38/tcp/24001] dial tcp4 0.0.0.0:42459->120.232.96.38:24001: i/o timeout
  f044315: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f045505: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGfhqYGvSHHhyQAdPgfHKfVYKHUt2cWycTeEMt1GEq1os:  * [/ip4/1.183.72.226/tcp/12700] dial tcp4 0.0.0.0:42459->1.183.72.226:12700: i/o timeout
  f045743: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f045756: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f046248: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f047666: 'fail, China, Suihua', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJTcEVBF8u3aw7U7uHvwnEQsF3BY9fpEaPrYCYKPrsVbp:  * [/ip4/112.101.133.114/tcp/5678] dial tcp4 0.0.0.0:42459->112.101.133.114:5678: i/o timeout
  f047843: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEvCDSRSXXs2iZLHgHDEWMsAyBBeEWh8YFx8W4RpLAWhv:  * [/ip4/10.3.2.103/tcp/54624] dial tcp4 0.0.0.0:42459->10.3.2.103:54624: i/o timeout  * [/ip4/117.25.158.106/tcp/54624] dial tcp4 0.0.0.0:42459->117.25.158.106:54624: i/o timeout
  f047857: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRn7EVTzsaUvXSi3RY3c8Vg9YDbgisuWpyUynF34GXxJz:  * [/ip4/10.9.6.11/tcp/31432] dial tcp4 0.0.0.0:42459->10.9.6.11:31432: i/o timeout  * [/ip4/110.80.136.23/tcp/31432] dial tcp4 0.0.0.0:42459->110.80.136.23:31432: i/o timeout
  f047868: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPkVr9x7NKZS8UbWx6TH4bzCKRng3e46Rq3mouEQ6yEwQ:  * [/ip4/10.7.3.31/tcp/58237] dial tcp4 0.0.0.0:42459->10.7.3.31:58237: i/o timeout  * [/ip4/110.80.136.27/tcp/58237] dial tcp4 0.0.0.0:42459->110.80.136.27:58237: i/o timeout
  f048135: 'fail, China, Chongqing, password interstellar', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGqhmWeASoVC65U3TzEDLCBf8n3z3JjXvBLJ8uZ9ZaH5z:  * [/ip4/113.204.193.50/tcp/27125] dial tcp4 0.0.0.0:42459->113.204.193.50:27125: i/o timeout
  f048669: 'fail, China, Jiangsu + Yangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJVnddFJfNVu19sHkAm6cx7bdodG6zq8B3jr8bLTtRhxV:  * [/ip6/::1/tcp/22332] dial tcp6 [::1]:22332: connect: connection refused  * [/ip4/58.220.66.88/tcp/22332] dial tcp4 0.0.0.0:42459->58.220.66.88:22332: i/o timeout  * [/ip4/103.78.229.45/tcp/22332] dial tcp4 0.0.0.0:42459->103.78.229.45:22332: i/o timeout  * [/ip4/172.16.16.11/tcp/22332] dial tcp4 0.0.0.0:42459->172.16.16.11:22332: i/o timeout  * [/ip4/103.78.229.45/tcp/2062] dial tcp4 0.0.0.0:42459->103.78.229.45:2062: i/o timeout
  f048968: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFcfUjA3qQqVf8URxpg39pEj5u3GYykgPwi2cSikSoiuG:  * [/ip4/119.6.226.3/tcp/21024] dial tcp4 0.0.0.0:42459->119.6.226.3:21024: i/o timeout
  f048975: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f048986: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f049911: 'fail, China, Yunfu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f050022: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f050260: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNUuVRWuihMFhxd5kqz22UsUSL4scbSyYu9ZLhXspE9yq:  * [/ip6/::1/tcp/5432] dial tcp6 [::1]:5432: connect: connection refused  * [/ip6/240e:3a1:56bb:84c4:2ef0:5dff:fe96:5e8b/tcp/5432] dial tcp6 [240e:3a1:56bb:84c4:2ef0:5dff:fe96:5e8b]:5432: connect: network is unreachable  * [/ip4/127.0.0.1/tcp/5432] dial tcp4 127.0.0.1:5432: connect: connection refused  * [/ip4/192.168.2.25/tcp/5432] dial tcp4 0.0.0.0:42459->192.168.2.25:5432: i/o timeout  * [/ip4/121.239.79.25/tcp/9999] dial tcp4 0.0.0.0:42459->121.239.79.25:9999: i/o timeout  * [/ip4/121.239.215.138/tcp/5432] dial tcp4 0.0.0.0:42459->121.239.215.138:5432: i/o timeout
  f052447: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE5jFRfwaX3nro6c3JJFUHdRN8X4GSmxfTRspvbCMsmb5:  * [/ip6/::1/tcp/45911] dial tcp6 [::1]:45911: connect: connection refused  * [/ip4/127.0.0.1/tcp/45265] dial tcp4 127.0.0.1:45265: connect: connection refused  * [/ip4/172.18.40.16/tcp/45265] dial tcp4 0.0.0.0:42459->172.18.40.16:45265: i/o timeout  * [/ip4/36.189.234.210/tcp/49925] dial tcp4 0.0.0.0:42459->36.189.234.210:49925: i/o timeout  * [/ip4/36.189.234.210/tcp/61468] dial tcp4 0.0.0.0:42459->36.189.234.210:61468: i/o timeout
  f052701: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNr6jnRpDrdDxpAHH6rt8H8ADkibeFEYf82ef1nr3v5dN:  * [/ip6/::1/tcp/33445] dial tcp6 [::1]:33445: connect: connection refused  * [/ip4/127.0.0.1/tcp/33445] dial tcp4 127.0.0.1:33445: connect: connection refused  * [/ip4/172.16.0.5/tcp/33445] dial tcp4 0.0.0.0:42459->172.16.0.5:33445: i/o timeout  * [/ip4/120.233.45.246/tcp/2171] dial tcp4 0.0.0.0:42459->120.233.45.246:2171: i/o timeout  * [/ip4/120.233.45.247/tcp/33445] dial tcp4 0.0.0.0:42459->120.233.45.247:33445: i/o timeout
  f053088: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAiTKuREhzSas7aC6LkDqsg3A8S9tgp6wD9ii63f8tg12:  * [/ip4/127.0.0.1/tcp/41735] dial tcp4 127.0.0.1:41735: connect: connection refused  * [/ip6/::1/tcp/40807] dial tcp6 [::1]:40807: connect: connection refused  * [/ip6/240e:388:e1b:3e00:2ef0:5dff:fe40:5e31/tcp/40807] dial tcp6 [240e:388:e1b:3e00:2ef0:5dff:fe40:5e31]:40807: connect: network is unreachable  * [/ip4/192.168.10.108/tcp/41735] dial tcp4 0.0.0.0:42459->192.168.10.108:41735: i/o timeout  * [/ip4/58.33.161.23/tcp/41735] dial tcp4 0.0.0.0:42459->58.33.161.23:41735: i/o timeout  * [/ip4/58.33.161.23/tcp/5612] dial tcp4 0.0.0.0:42459->58.33.161.23:5612: i/o timeout
  f053140: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f053141: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f053173: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f053446: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054120: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMN8pvkBCwi4oEL13gvT116oak9cMgD4HH9BrSrX5S1xP:  * [/ip4/192.168.109.6/tcp/8010] dial tcp4 0.0.0.0:42459->192.168.109.6:8010: i/o timeout  * [/ip4/222.213.119.137/tcp/8010] dial tcp4 0.0.0.0:42459->222.213.119.137:8010: i/o timeout
  f054267: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054370: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWP7Y8Bcr8ckwWyywA5vjRUugJDcmXZPcC4HBUuJjSfZtU:  * [/ip4/113.105.174.21/tcp/10000] dial tcp4 0.0.0.0:42459->113.105.174.21:10000: i/o timeout
  f054412: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054414: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJqPHejmmMph6UEFZq69i3hZBGweHgrNw38i9WRQuVr2G:  * [/ip6/::1/tcp/23275] dial tcp6 [::1]:23275: connect: connection refused  * [/ip4/127.0.0.1/tcp/4625] dial tcp4 127.0.0.1:4625: connect: connection refused  * [/ip4/10.1.2.9/tcp/4625] dial tcp4 0.0.0.0:42459->10.1.2.9:4625: i/o timeout  * [/ip4/183.134.62.2/tcp/37290] dial tcp4 0.0.0.0:42459->183.134.62.2:37290: i/o timeout  * [/ip4/183.134.62.2/tcp/58976] dial tcp4 0.0.0.0:42459->183.134.62.2:58976: i/o timeout
  f054415: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054417: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJwN2Qxko21czDX2gJqHBum8bCF9ZmWRtaLYHMVeZqYdw:  * [/ip6/::1/tcp/3885] dial tcp6 [::1]:3885: connect: connection refused  * [/ip4/127.0.0.1/tcp/16157] dial tcp4 127.0.0.1:16157: connect: connection refused  * [/ip4/10.1.2.5/tcp/16157] dial tcp4 0.0.0.0:42459->10.1.2.5:16157: i/o timeout  * [/ip4/183.134.62.2/tcp/64787] dial tcp4 0.0.0.0:42459->183.134.62.2:64787: i/o timeout  * [/ip4/183.134.62.2/tcp/27905] dial tcp4 0.0.0.0:42459->183.134.62.2:27905: i/o timeout
  f054418: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054422: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054464: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCdBMkc7P346VhjbYz823sUEGeQsqhCs6e1zTHC6M9WXZ:  * [/ip4/0.0.0.0/tcp/5472] dial tcp4 0.0.0.0:5472: connect: connection refused
  f054526: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054666: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGCMWriKdL1S7spEtCAthnCcGvBEM6zLWTFpGxgNdyERf:  * [/ip4/36.158.255.7/tcp/1024] dial tcp4 0.0.0.0:42459->36.158.255.7:1024: i/o timeout
  f055102: 'fail, Vietman, Ho Chi Minh City + China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEzGYZMVXyirJAqybkGPdZFNYBYjtMWyJbWjw5enUo2fN:  * [/ip4/119.28.141.16/tcp/2820] dial tcp4 0.0.0.0:42459->119.28.141.16:2820: i/o timeout  * [/ip4/193.112.116.169/tcp/2820] dial tcp4 0.0.0.0:42459->193.112.116.169:2820: i/o timeout
  f055132: 'fail, Vietman, Ho Chi Minh City + China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLFUPW2eP4bJhTzDwd5mpepUWUX6Y5QH9NTjVYLVnYSAo:  * [/ip4/119.28.141.16/tcp/2910] dial tcp4 0.0.0.0:42459->119.28.141.16:2910: i/o timeout  * [/ip4/193.112.116.169/tcp/2910] dial tcp4 0.0.0.0:42459->193.112.116.169:2910: i/o timeout
  f055335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f055446: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f056226: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRAb9jNiYFTVA93kYL3naahckeRJx2C3PVMm7eHjPEjjh:  * [/ip6/::1/tcp/33444] dial tcp6 [::1]:33444: connect: connection refused  * [/ip4/127.0.0.1/tcp/33444] dial tcp4 127.0.0.1:33444: connect: connection refused  * [/ip4/172.16.22.188/tcp/33444] dial tcp4 0.0.0.0:42459->172.16.22.188:33444: i/o timeout  * [/ip4/119.147.149.158/tcp/33444] dial tcp4 0.0.0.0:42459->119.147.149.158:33444: i/o timeout
  f056227: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f056406: 'fail, China, Taizhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFjfWgPNNiuxHwratpW5WU8mkF9zb3Q4co4TXB7mRuwdN:  * [/ip4/221.130.79.154/tcp/1347] dial tcp4 0.0.0.0:42459->221.130.79.154:1347: i/o timeout
  f056611: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPKDux6Mu1jzqxwT8FqidhzXCAHKnSobGLn9Aq1oTATDg:  * [/ip6/::1/tcp/41897] dial tcp6 [::1]:41897: connect: connection refused  * [/ip4/127.0.0.1/tcp/37535] dial tcp4 127.0.0.1:37535: connect: connection refused  * [/ip4/172.18.86.16/tcp/37535] dial tcp4 0.0.0.0:42459->172.18.86.16:37535: i/o timeout  * [/ip4/36.189.234.202/tcp/64673] dial tcp4 0.0.0.0:42459->36.189.234.202:64673: i/o timeout  * [/ip4/36.189.234.202/tcp/60796] dial tcp4 0.0.0.0:42459->36.189.234.202:60796: i/o timeout
  f057070: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKBNGqopBvTEmD15SwX6JapLJ34cv9cCEoWPtUsxQpu4Z:  * [/ip4/117.71.104.68/tcp/10240] dial tcp4 0.0.0.0:42459->117.71.104.68:10240: i/o timeout
  f057127: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvcvRJQHTrxjwH1NqPJnd5HnMQp1mWWzp9LHwBULp7pb:  * [/ip4/58.211.213.210/tcp/20108] dial tcp4 0.0.0.0:42459->58.211.213.210:20108: i/o timeout
  f057466: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNPCcj2nQJcpREQa5QgTz1WbxfaRoR3SU7DafCFhrXiJJ:  * [/ip4/127.0.0.1/tcp/35783] dial tcp4 127.0.0.1:35783: connect: connection refused  * [/ip6/::1/tcp/46289] dial tcp6 [::1]:46289: connect: connection refused  * [/ip4/172.20.155.133/tcp/35783] dial tcp4 0.0.0.0:42459->172.20.155.133:35783: i/o timeout  * [/ip4/58.249.1.189/tcp/35783] dial tcp4 0.0.0.0:42459->58.249.1.189:35783: i/o timeout  * [/ip4/116.21.71.7/tcp/24001] dial tcp4 0.0.0.0:42459->116.21.71.7:24001: i/o timeout
  f057614: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f057618: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f057683: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f057698: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQmb6PomXHGq6q9Lx7tekkfeCvv9UYGN1qBa4JYiZCFGb:  * [/ip4/172.18.88.16/tcp/39649] dial tcp4 0.0.0.0:42459->172.18.88.16:39649: i/o timeout  * [/ip4/36.189.234.202/tcp/62091] dial tcp4 0.0.0.0:42459->36.189.234.202:62091: i/o timeout  * [/ip4/36.189.234.202/tcp/65364] dial tcp4 0.0.0.0:42459->36.189.234.202:65364: i/o timeout  * [/ip6/::1/tcp/36635] dial tcp6 [::1]:36635: connect: connection refused  * [/ip4/127.0.0.1/tcp/39649] dial tcp4 127.0.0.1:39649: connect: connection refused
  f058000: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHPpEaoDm2X3TbdwmLARfJJsFwNcjd214jx5EmRkNsUX4:  * [/ip6/::1/tcp/37901] dial tcp6 [::1]:37901: connect: connection refused  * [/ip4/61.155.141.44/tcp/1024] dial tcp4 0.0.0.0:42459->61.155.141.44:1024: i/o timeout
  f058349: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f058369: 'fail, USA, Boston', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEawajhuJQ3McBDv7mZBKvD8AGM8bgge75aNiJt3M5sbi:  * [/ip4/154.3.222.86/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWEawajhuJQ3McBDv7mZBKvD8AGM8bgge75aNiJt3M5sbi, but remote key matches 12D3KooWDdbAtcsG4ngdnmUW4SuirrWiRzUNdJMmquPEV5eeS2uh
  f058374: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f059788: 'fail, China, Zhanjiang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEhZ3xDvecQ7K14ByYanCewzQqufzX6P2xFaMQu64x3C8:  * [/ip4/183.2.149.76/tcp/33669] dial tcp4 0.0.0.0:42459->183.2.149.76:33669: i/o timeout
  f059813: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060072: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f060114: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060693: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060754: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060805: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060975: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061051: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061170: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061174: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061407: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061503: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061740: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f061959: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA5phDUUZUiXuW5YVF7vVLuYSTsx5Shdp4sH5Ftm2pZQu:  * [/ip4/172.18.42.21/tcp/10241] dial tcp4 0.0.0.0:42459->172.18.42.21:10241: i/o timeout
  f062245: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062260: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNLtE4tbYgtQ1Q6mbuGMXtTwjMBtCTnXnBianV61A3e8X:  * [/ip4/121.201.35.254/tcp/4567] dial tcp4 0.0.0.0:42459->121.201.35.254:4567: i/o timeout
  f062473: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062475: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062619: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062770: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEL13gqLAo2hDiax2PeN2pT3aXVMNpzh3ToxdVFvpVMeV:  * [/ip4/220.176.125.166/tcp/23450] dial tcp4 0.0.0.0:42459->220.176.125.166:23450: i/o timeout
  f062811: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9vBPr3FEUtNTKdzMZTB3aYsjK2o9bpqAaFfVQDViz8ii:  * [/ip4/220.176.125.167/tcp/23450] dial tcp4 0.0.0.0:42459->220.176.125.167:23450: i/o timeout
  f062931: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBcj62i1JiSpJQG3rq8vMs5HrRfKgNP3Xh1hp893k5qYt:  * [/ip4/95.180.132.5/tcp/22124] dial tcp4 95.180.132.5:22124: connect: no route to host
  f062937: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJLbWZY8rAJQuWdE5UfLR7J2eBP3D8NDjfMskgXnPVP27:  * [/ip4/115.231.84.69/tcp/14567] dial tcp4 0.0.0.0:42459->115.231.84.69:14567: i/o timeout  * [/ip4/130.208.236.72/tcp/21215] dial tcp4 0.0.0.0:42459->130.208.236.72:21215: i/o timeout
  f062982: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWS1s99oCX1a4AhtsAAPa5ix5tAgkbEYMUw1TLbuyH8USx:  * [/ip4/118.184.169.171/tcp/45000] dial tcp4 0.0.0.0:42459->118.184.169.171:45000: i/o timeout
  f063628: 'fail, China, Hefei', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f063869: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSLuP973LtvjH5aQiMHnuBfGQJHzEwuMrVAk7aenpVV4y:  * [/ip4/115.231.84.7/tcp/14567] dial tcp4 0.0.0.0:42459->115.231.84.7:14567: i/o timeout  * [/ip4/109.106.110.128/tcp/2131] dial tcp4 0.0.0.0:42459->109.106.110.128:2131: i/o timeout
  f063996: 'fail, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f064668: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9zdsaiZFatGeKwwpUPqRC9YnP6hFQbCCn5JNVoY1U7t8:  * [/ip4/14.136.246.132/tcp/46717] failed to negotiate security protocol: peer id mismatch: expected 12D3KooW9zdsaiZFatGeKwwpUPqRC9YnP6hFQbCCn5JNVoY1U7t8, but remote key matches 12D3KooWPJiwfoeZa3DvyVAV8vKm4yuYeFccfDQf1La56DcTVVtj
  f064855: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f064908: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065103: 'fail, USA + China, Suzhou + Guangzhou + Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f065113: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065141: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065174: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHr5JrRHyT8b2af2FWQ5k6kfENoxwqrp8HYBouA8ACwc7:  * [/ip4/127.0.0.1/tcp/44223] dial tcp4 127.0.0.1:44223: connect: connection refused  * [/ip4/120.232.254.179/tcp/44223] dial tcp4 0.0.0.0:42459->120.232.254.179:44223: i/o timeout
  f065200: 'fail, China, Yibin', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAyh5jBDcneoKGk7dsCMmHcUhG6GNR9PkJwgb4oJbBQAa:  * [/ip4/119.6.225.5/tcp/54320] dial tcp4 0.0.0.0:42459->119.6.225.5:54320: i/o timeout
  f065266: 'fail, China, Hefei', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065391: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065578: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065670: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065686: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065877: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065881: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065941: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066104: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f066210: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066270: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEzuMG9ogyemADNKfTSG2mi7BxxDyGMjYKy5ZMFTKzLtw:  * [/ip4/121.14.159.118/tcp/58237] dial tcp4 0.0.0.0:42459->121.14.159.118:58237: i/o timeout  * [/ip4/10.3.3.81/tcp/58237] dial tcp4 0.0.0.0:42459->10.3.3.81:58237: i/o timeout
  f066302: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066476: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066563: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066781: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066790: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f067170: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f067375: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f067598: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f068096: 'fail, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLMSQyXno4UrzArsMy22YhHRAvmzhhZKGbgAUULZCx3tB:  * [/ip4/222.213.23.200/tcp/38999] dial tcp4 0.0.0.0:42459->222.213.23.200:38999: i/o timeout
  f068528: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMGvFWQaKTGqnB9DGKSXRjKACjcvQcG1vsbfFUnvfspsP:  * [/ip4/103.198.127.206/tcp/33455] dial tcp4 0.0.0.0:42459->103.198.127.206:33455: i/o timeout
  f068556: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f068560: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNABE3yaZenjaX91wM18UeiwjLMy96jFRs9tP7cYHTFy4:  * [/ip4/172.16.100.111/tcp/37929] dial tcp4 0.0.0.0:42459->172.16.100.111:37929: i/o timeout
  f068809: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f069391: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRCdFYT9C9jwC6DHGha6wEGMhddnTaVzhNbFPK8oBNGDG:  * [/ip4/192.168.1.10/tcp/32759] dial tcp4 0.0.0.0:42459->192.168.1.10:32759: i/o timeout
  f069448: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f069915: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f069919: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f070044: 'fail, China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQU9u9dyQq369sqKHyscGqEbG3TKixJTmgSq2Ri4a88nT:  * [/ip4/47.57.185.52/tcp/12600] dial tcp4 0.0.0.0:42459->47.57.185.52:12600: i/o timeout
  f070045: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070501: 'fail, USA + China, Hong Kong + Guangzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f070730: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070802: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070803: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070999: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f071287: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f071664: 'fail, China, Shangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQe8HRVWhaTBPvhXnSkz7C58jx5ehof8moeL2hFQ4x2KD:  * [/ip4/10.133.8.210/tcp/32759] dial tcp4 0.0.0.0:42459->10.133.8.210:32759: i/o timeout
  f071980: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMC58SrBbrgvJZZBhZJNyBxT8z44gwAJKDbuWLc3RKbu7:  * [/ip4/127.0.0.1/tcp/44935] dial tcp4 127.0.0.1:44935: connect: connection refused  * [/ip6/::1/tcp/37493] dial tcp6 [::1]:37493: connect: connection refused  * [/ip4/172.18.81.176/tcp/44935] dial tcp4 0.0.0.0:42459->172.18.81.176:44935: i/o timeout  * [/ip4/36.189.234.186/tcp/62580] dial tcp4 0.0.0.0:42459->36.189.234.186:62580: i/o timeout  * [/ip4/36.189.234.186/tcp/65256] dial tcp4 0.0.0.0:42459->36.189.234.186:65256: i/o timeout
  f073196: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073448: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073525: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073552: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f073628: 'fail, USA, New Castle', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f073697: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWADF7psBEghYv8HZiDtC33b3k3tCAiYmL5MD5Vf9dYV2L:  * [/ip6/::1/tcp/38975] dial tcp6 [::1]:38975: connect: connection refused  * [/ip4/127.0.0.1/tcp/35695] dial tcp4 127.0.0.1:35695: connect: connection refused  * [/ip4/172.18.87.86/tcp/35695] dial tcp4 0.0.0.0:42459->172.18.87.86:35695: i/o timeout  * [/ip4/36.189.234.202/tcp/61684] dial tcp4 0.0.0.0:42459->36.189.234.202:61684: i/o timeout  * [/ip4/36.189.234.202/tcp/63113] dial tcp4 0.0.0.0:42459->36.189.234.202:63113: i/o timeout
  f073844: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073888: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073904: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f077761: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f078465: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f078522: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCkrtdx1CwmhFQ5Z5qUK6jRBSwW2w9fwx3QfLRgumQmHR:  * [/ip4/192.168.10.29/tcp/7000] dial tcp4 0.0.0.0:42459->192.168.10.29:7000: i/o timeout  * [/ip4/183.223.56.29/tcp/7000] dial tcp4 0.0.0.0:42459->183.223.56.29:7000: i/o timeout
  f078621: 'fail, Korea, Uiwang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHo2ffY2a61PQtWTrb1U9Ku8KDwncRk3e1uCVpA3qNndT:  * [/ip4/211.170.59.241/tcp/24001] dial tcp4 0.0.0.0:42459->211.170.59.241:24001: i/o timeout
  f078772: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f078899: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079007: 'fail, China, Jinan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9rii8KJUHwHyNVg1xEM16u7V7rhbgdruT2AFYsjFgb4n:  * [/ip4/112.232.106.138/tcp/3389] dial tcp4 0.0.0.0:42459->112.232.106.138:3389: i/o timeout
  f079092: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079197: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f079247: 'fail, USA + China, Guangzhou + Beijing + Dongguan + Shenzhen', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f079285: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLV22X7z7KdMfiX31Xie9xHsi6UB8wAZ2gLf2JyQ4PuCa:  * [/ip4/172.22.20.109/tcp/10241] dial tcp4 0.0.0.0:42459->172.22.20.109:10241: i/o timeout
  f079301: 'fail, China, Guangzhou + Dongguan + Shenzhen, USA', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f079370: 'fail, China, Zhangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFUNC49vKSUkes94TEs9ggDpcXC3h94hGHJfEKpM6Q9Ys:  * [/ip4/127.0.0.1/tcp/25757] dial tcp4 127.0.0.1:25757: connect: connection refused  * [/ip6/::1/tcp/6363] dial tcp6 [::1]:6363: connect: connection refused  * [/ip4/10.1.2.80/tcp/25757] dial tcp4 0.0.0.0:42459->10.1.2.80:25757: i/o timeout  * [/ip4/183.134.62.2/tcp/44713] dial tcp4 0.0.0.0:42459->183.134.62.2:44713: i/o timeout  * [/ip4/183.134.62.2/tcp/58175] dial tcp4 0.0.0.0:42459->183.134.62.2:58175: i/o timeout
  f079425: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079426: 'fail, China, Shandong', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f079618: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDfDkpBvfJJsZ93nC3iXncwYxz41ekAbZK3BUsMBuuk79:  * [/ip4/10.3.18.44/tcp/36284] dial tcp4 0.0.0.0:42459->10.3.18.44:36284: i/o timeout  * [/ip4/36.159.57.19/tcp/36284] dial tcp4 0.0.0.0:42459->36.159.57.19:36284: i/o timeout
  f079719: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079815: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080444: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080468: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080605: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080608: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080628: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081078: 'fail, Korea, Busan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMW8ZvKgprKTTmt8cuoC5YYZeJtCn6iBuHWLg6J8rGUts:  * [/ip4/220.119.144.84/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMW8ZvKgprKTTmt8cuoC5YYZeJtCn6iBuHWLg6J8rGUts, but remote key matches 12D3KooWLe7nwrhYUwgTjy7B92xgeuVZFVzgXHuM4wGzmcYg6asG
  f081222: 'fail, China, Changzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f081644: 'fail, China, Wenzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSgv8s9yRj9Bo35yomUNF54JE9kj4jPUhfmyR5pDXFwnH:  * [/ip4/61.164.110.247/tcp/24001] dial tcp4 0.0.0.0:42459->61.164.110.247:24001: i/o timeout
  f081969: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081977: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081978: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081979: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081985: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081988: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081989: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081995: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082000: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAA9cTR5WgUtx3z5nsU4vFmBDWFNUSVYNnDPtktGeLKvA:  * [/ip4/172.16.3.52/tcp/60352] dial tcp4 0.0.0.0:42459->172.16.3.52:60352: i/o timeout  * [/ip4/113.142.2.198/tcp/60352] dial tcp4 0.0.0.0:42459->113.142.2.198:60352: i/o timeout
  f082001: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082095: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHxhkbyWBx154RjFzU2bd6PVPuH1jGZRy91U3GnYwaSMs:  * [/ip4/10.3.103.15/tcp/12288] dial tcp4 0.0.0.0:42459->10.3.103.15:12288: i/o timeout  * [/ip4/182.140.253.81/tcp/12288] dial tcp4 0.0.0.0:42459->182.140.253.81:12288: i/o timeout
  f082356: 'fail, China, Jiaxing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082452: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHkWrJ691PW6KBeXvnjEdd5R6vo2SZ4TL44QtSLtE6E2x:  * [/ip4/113.105.174.41/tcp/23450] dial tcp4 0.0.0.0:42459->113.105.174.41:23450: i/o timeout
  f082617: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQoXM8qWNsKEDyb67AmKZCnASvQspN6BLsTuRbBzY999n:  * [/ip4/45.119.63.131/tcp/51105] dial tcp4 0.0.0.0:42459->45.119.63.131:51105: i/o timeout
  f082635: 'fail, China, Yibin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082730: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082958: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDravhMyWjyuK4TjaVaUvubwhpameXwWCuoixczAwFhsV:  * [/ip4/0.0.0.0/tcp/42547] dial tcp4 0.0.0.0:42547: connect: connection refused
  f083065: 'fail, China, Taizhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNnvr2St8sipQ8qJfZh5mqBVmrp8pwh1xBTiaMLe4P2nT:  * [/ip4/60.191.150.250/tcp/56780] dial tcp4 0.0.0.0:42459->60.191.150.250:56780: i/o timeout
  f083419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f083474: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f083542: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f083903: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD34bmNT4B1sPrf1ohWJFyoeRWZff5Leg8dFKMG6L1ZFL:  * [/ip4/113.200.98.54/tcp/32346] dial tcp4 0.0.0.0:42459->113.200.98.54:32346: i/o timeout  * [/ip4/123.138.35.83/tcp/32346] dial tcp4 0.0.0.0:42459->123.138.35.83:32346: i/o timeout
  f083920: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNzFHkCjS7Mobss8d26J9iggVaRQx2Ko2qQi644B4ee8t:  * [/ip4/61.147.117.11/tcp/18007] dial tcp4 0.0.0.0:42459->61.147.117.11:18007: i/o timeout  * [/ip4/170.34.13.92/tcp/10079] dial tcp4 0.0.0.0:42459->170.34.13.92:10079: i/o timeout
  f083983: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f084135: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f084155: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f084419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f084907: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f085435: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f085437: 'fail, China, Jiaxing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f085486: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f085710: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f085735: "fail, China, Ya'an", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f085899: 'fail, China, Wuxi', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJXvAErqQpffvFNj8oSRxGtY9YzUcNj1vtbEQVRQW79nz:  * [/ip4/127.0.0.1/tcp/35243] dial tcp4 127.0.0.1:35243: connect: connection refused  * [/ip4/192.168.12.18/tcp/35243] dial tcp4 0.0.0.0:42459->192.168.12.18:35243: i/o timeout  * [/ip4/117.85.15.83/tcp/58173] dial tcp4 0.0.0.0:42459->117.85.15.83:58173: i/o timeout
  f086028: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086151: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f086204: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086222: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086240: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086366: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086381: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086423: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086439: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086442: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086572: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086988: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087096: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087256: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087530: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBYeC1U9a5W3wNDMpLRgFRfdvyBJ7dQrKnVhzJ6fiyLEW:  * [/ip4/10.2.6.194/tcp/31688] dial tcp4 0.0.0.0:42459->10.2.6.194:31688: i/o timeout  * [/ip4/183.36.17.105/tcp/31688] dial tcp4 0.0.0.0:42459->183.36.17.105:31688: i/o timeout
  f087868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087871: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087879: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087888: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087896: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087899: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087965: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGbhbr32oPyCfLTgv1GoQmwx1V7u5AdquFNPjjm85iHPe:  * [/ip4/58.211.213.210/tcp/2251] dial tcp4 0.0.0.0:42459->58.211.213.210:2251: i/o timeout
  f087999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088002: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088125: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQsq4hmpqQAfNPxLMJQfmiUA2Q1d2yqpfzVZu88GauXzT:  * [/ip4/172.22.22.101/tcp/10241] dial tcp4 0.0.0.0:42459->172.22.22.101:10241: i/o timeout
  f088171: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088290: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088388: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088400: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQksh2T1XcnLj2Fjsrp8DafeLXA5DYTE79EdZunSSdWcb:  * [/ip4/172.22.22.102/tcp/10241] dial tcp4 0.0.0.0:42459->172.22.22.102:10241: i/o timeout
  f089167: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089168: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089169: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089173: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGBUUwC19e5cg914WheUfZmWAjcLAR8yW56vU4Mg5LgFp:  * [/ip4/172.19.108.155/tcp/10241] dial tcp4 0.0.0.0:42459->172.19.108.155:10241: i/o timeout
  f089180: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089200: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089220: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089228: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRaFywA6bQDMz7x1o5LpkVmjrEBpM8BWGHmrLF1Kvdfbm:  * [/ip4/172.18.41.50/tcp/10241] dial tcp4 0.0.0.0:42459->172.18.41.50:10241: i/o timeout  * [/ip4/8.209.65.6/tcp/30126] dial tcp4 0.0.0.0:42459->8.209.65.6:30126: i/o timeout
  f089358: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLHVswzdG7ikc8WFqn6L2wVAfJQWFqKssWk3BGAHEWgbT:  * [/ip4/172.22.7.106/tcp/10241] dial tcp4 0.0.0.0:42459->172.22.7.106:10241: i/o timeout
  f089551: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJCsDBR8rrN7Mdrpxrxpo58c2ymFGMCgWpyeM9suWpj8R:  * [/ip4/121.40.135.72/tcp/26892] dial tcp4 0.0.0.0:42459->121.40.135.72:26892: i/o timeout
  f089767: 'fail, USA, Bowie', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJfJoyXzXHrB2XFZFgxzPrxddyVF3TYHwS9HYcoecruoB:  * [/ip4/129.168.0.1/tcp/912] dial tcp4 0.0.0.0:42459->129.168.0.1:912: i/o timeout
  f089819: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089910: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089920: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090387: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNGwWADSdhS67tu8KUTMw6XYqMjtkWZRakHuTjirYDQHA:  * [/ip4/10.3.7.42/tcp/28354] dial tcp4 0.0.0.0:42459->10.3.7.42:28354: i/o timeout  * [/ip4/117.25.158.126/tcp/28354] dial tcp4 0.0.0.0:42459->117.25.158.126:28354: i/o timeout
  f090481: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090484: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090492: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090864: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090889: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090893: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMh6qvtA63P9fB2bQKuR68vDHm8TD3hj85zqKBNKUKmjN:  * [/ip4/6.143.143.121/tcp/912] dial tcp4 0.0.0.0:42459->6.143.143.121:912: i/o timeout
  f090900: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091143: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091243: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091395: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091798: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091913: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091927: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091958: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091959: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091996: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f092066: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f092157: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRBLHy41Lt8wxKHdx4vHL5tt7hcSyWcErooT8eBwYr3wf:  * [/ip4/94.101.133.153/tcp/24001] dial tcp4 0.0.0.0:42459->94.101.133.153:24001: i/o timeout
  f092228: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f092514: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f092887: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093115: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093144: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093658: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093686: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093701: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093907: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094003: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094128: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094614: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFjmSzbGmMn5dHqZp5KLxeYTTVLRLag6PHKzj2NLpCMn9:  * [/ip4/127.0.0.1/tcp/34837] dial tcp4 127.0.0.1:34837: connect: connection refused  * [/ip6/::1/tcp/33511] dial tcp6 [::1]:33511: connect: connection refused  * [/ip4/172.18.39.66/tcp/34837] dial tcp4 0.0.0.0:42459->172.18.39.66:34837: i/o timeout  * [/ip4/36.189.234.210/tcp/61783] dial tcp4 0.0.0.0:42459->36.189.234.210:61783: i/o timeout  * [/ip4/36.189.234.210/tcp/63501] dial tcp4 0.0.0.0:42459->36.189.234.210:63501: i/o timeout
  f094625: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094764: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094765: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDidvy8zSZgUZabmKFXzy42g2LV7en7QYG79D3TLgAtcV:  * [/ip4/218.68.85.213/tcp/12350] dial tcp4 0.0.0.0:42459->218.68.85.213:12350: i/o timeout
  f094847: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f095334: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f095382: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFpivFBnTWwf621CrbYU5YhJPJWd66wnLWCnvArSFqbYm:  * [/ip4/125.93.73.102/tcp/2345] dial tcp4 0.0.0.0:42459->125.93.73.102:2345: i/o timeout
  f095888: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f095970: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f095997: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f095998: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096064: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096072: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096077: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096087: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096133: 'fail, China, Changsha + Dazhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMTTEH1tp88nhvYAvRipkv2Do5uN3Zwf6sYZ5PBEivKQu:  * [/ip4/175.6.66.78/tcp/14913] dial tcp4 0.0.0.0:42459->175.6.66.78:14913: i/o timeout  * [/ip4/175.6.68.154/tcp/14913] dial tcp4 0.0.0.0:42459->175.6.68.154:14913: i/o timeout
  f096172: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096173: 'fail, Korea, Gangnam-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG4jchbdLENPWWnb2rLPt3HosTodvebJ3eni4qAL7bqvb:  * [/ip4/61.78.81.239/tcp/22222] dial tcp4 0.0.0.0:42459->61.78.81.239:22222: i/o timeout  * [/ip4/61.78.81.239/tcp/33333] dial tcp4 0.0.0.0:42459->61.78.81.239:33333: i/o timeout  * [/ip4/61.78.81.239/tcp/44444] dial tcp4 0.0.0.0:42459->61.78.81.239:44444: i/o timeout  * [/ip4/61.78.81.239/tcp/55555] dial tcp4 0.0.0.0:42459->61.78.81.239:55555: i/o timeout  * [/ip4/61.78.81.239/tcp/8800] dial tcp4 0.0.0.0:42459->61.78.81.239:8800: i/o timeout  * [/ip4/61.78.81.239/tcp/11111] dial tcp4 0.0.0.0:42459->61.78.81.239:11111: i/o timeout  * [/ip4/61.78.81.239/tcp/23456] dial tcp4 0.0.0.0:42459->61.78.81.239:23456: i/o timeout  * [/ip4/61.78.81.239/tcp/12345] dial tcp4 0.0.0.0:42459->61.78.81.239:12345: i/o timeout
  f096824: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096920: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096974: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRks8ka9CmcQsxd1NrEGm483cDNUtQVkwVC6rA8migA9K:  * [/ip4/61.128.194.150/tcp/24001] dial tcp4 0.0.0.0:42459->61.128.194.150:24001: i/o timeout  * [/ip4/183.66.216.198/tcp/24001] dial tcp4 0.0.0.0:42459->183.66.216.198:24001: i/o timeout
  f097126: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097182: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDZcnHgYqSaxf5g6EeZ1wCVLGCfHtM7ja3iqH4E1NQKja:  * [/ip4/182.131.4.195/tcp/32759] dial tcp4 0.0.0.0:42459->182.131.4.195:32759: i/o timeout
  f097219: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSXN3igGAjvLVVDF4V2RtyW92FWwiK9mXUVkLN8qEjWhF:  * [/ip4/127.0.0.1/tcp/12345] dial tcp4 127.0.0.1:12345: connect: connection refused
  f097370: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097432: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097569: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097618: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBB7P7DFAMTPcmBtbYHZebMN8fmQ2VtRcEbewhhEVDMoC:  * [/ip4/49.75.92.112/tcp/24001] dial tcp4 0.0.0.0:42459->49.75.92.112:24001: i/o timeout
  f097658: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097687: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ1AdNGYDDG3J1D4ow3XnPT9vqZ4WdoZXDdEM1uWr4Zvb:  * [/ip4/61.147.81.133/tcp/16017] dial tcp4 0.0.0.0:42459->61.147.81.133:16017: i/o timeout
  f097840: "fail, China, Ya'an", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097981: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f098664: 'fail, China, Jiangsu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f098743: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099082: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099132: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099247: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099369: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099387: 'fail, China, Shijiazhuang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG5CzuwyhZ4vpEn7DCvSpmurKi2QjTRLNLKGwo44A6MRo:  * [/ip4/124.239.180.3/tcp/24001] dial tcp4 0.0.0.0:42459->124.239.180.3:24001: i/o timeout
  f099705: 'fail, China, Zibo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQjQn7oVZwMLeHFyFEvEAfuPjktyZgo6Haunp9Xi34MCf:  * [/ip4/218.201.173.80/tcp/24001] dial tcp4 0.0.0.0:42459->218.201.173.80:24001: i/o timeout
  f099884: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099949: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNbRUwiuhnaRMRqzRXG4zAvtXvaTkbuQW2rQMZY34YEpC:  * [/ip4/182.131.4.195/tcp/32760] dial tcp4 0.0.0.0:42459->182.131.4.195:32760: i/o timeout
  f0100033: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0100034: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0100786: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101016: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101017: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101018: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEnpnV8MaTxEYT7e1xCKvB8bwRSANko9wK9jDs6b5N8f3:  * [/ip4/42.236.7.235/tcp/21002] dial tcp4 0.0.0.0:42459->42.236.7.235:21002: i/o timeout
  f0101019: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101069: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFbmvaZZJrgrEzAvNLKAFhmyE9z1tRhtQbZ53zifSkJYE:  * [/ip4/58.144.221.28/tcp/2347] dial tcp4 0.0.0.0:42459->58.144.221.28:2347: i/o timeout
  f0101133: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101387: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNUC8MxPqTJZhMiktAi6FSpFa3v83nNGnAMgQQDa3GcDC:  * [/ip4/127.0.0.1/tcp/46243] dial tcp4 127.0.0.1:46243: connect: connection refused  * [/ip6/::1/tcp/44701] dial tcp6 [::1]:44701: connect: connection refused  * [/ip4/103.39.230.118/tcp/46243] dial tcp4 0.0.0.0:42459->103.39.230.118:46243: i/o timeout
  f0101403: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLHg2DuAH3MCXcdjhUHJGQkkj18rMizTrUGqrK8jE2JsY:  * [/ip4/182.131.4.195/tcp/32761] dial tcp4 0.0.0.0:42459->182.131.4.195:32761: i/o timeout
  f0101570: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101611: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0102187: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0102374: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0102375: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0102641: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAnv5JtoVSUWYuZThhUYHGTAak2UwDa9d92BevuA15hfm:  * [/ip4/124.16.8.144/tcp/23450] dial tcp4 0.0.0.0:42459->124.16.8.144:23450: i/o timeout
  f0102670: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBj5NyYkNVD9mVroapji1FaGRSracXigbwLRAQVEMHryT:  * [/ip4/27.148.248.18/tcp/23450] dial tcp4 0.0.0.0:42459->27.148.248.18:23450: i/o timeout
  f0103162: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103282: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103396: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLCnguS1TqxnrbCmDoAbJckjLEvo9xko2xvqmojc1ezxE:  * [/ip4/60.190.243.138/tcp/10240] dial tcp4 0.0.0.0:42459->60.190.243.138:10240: i/o timeout
  f0103485: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103665: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103704: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103710: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103851: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGPP5UtPZ16Jo46Ab95Dt4NUtPNnzHtBngWZZXuSMZbgi:  * [/ip4/36.189.234.188/tcp/65098] dial tcp4 0.0.0.0:42459->36.189.234.188:65098: i/o timeout  * [/ip4/172.18.83.146/tcp/34807] dial tcp4 0.0.0.0:42459->172.18.83.146:34807: i/o timeout  * [/ip4/36.189.234.188/tcp/49948] dial tcp4 0.0.0.0:42459->36.189.234.188:49948: i/o timeout  * [/ip6/::1/tcp/46511] dial tcp6 [::1]:46511: connect: connection refused  * [/ip4/127.0.0.1/tcp/34807] dial tcp4 127.0.0.1:34807: connect: connection refused
  f0104001: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0104103: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0104398: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0104654: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0104888: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0105074: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0105354: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0106363: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDiRLUhWTMcRwbkognxeU1ukLgovkxj6ZdYybZQzQXACd:  * [/ip4/127.0.0.1/tcp/24001] dial tcp4 127.0.0.1:24001: connect: connection refused
  f0106438: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0106901: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107002: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107053: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107091: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107127: 'fail, USA, Daytona Beach', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107308: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR8tJtHhWPg3Sc1vpiosk3k9MjjhXpLXzxhMDRdXrnVkm:  * [/ip4/124.95.138.6/tcp/23450] dial tcp4 0.0.0.0:42459->124.95.138.6:23450: i/o timeout
  f0107322: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107536: 'fail, China, Bozhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvJDNfP1GYdLSZmqquRpPhwoAWpnMbZtn8oGzVjQCkyj:  * [/ip4/60.174.118.137/tcp/25469] dial tcp4 0.0.0.0:42459->60.174.118.137:25469: i/o timeout
  f0107543: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107656: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107753: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKA9j79CoGmZUVocAwFhGyJX7RxKGmc7gFAyNPdwgxVEa:  * [/ip4/101.133.172.142/tcp/1025] dial tcp4 0.0.0.0:42459->101.133.172.142:1025: i/o timeout
  f0107797: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107903: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0108199: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0108672: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0109040: 'fail, China, Zhangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0109043: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJwaPixwdpCLxesLoiZjVinVUZvH2qSzmGpJSJUSDzMpi:  * [/ip6/::1/tcp/35463] dial tcp6 [::1]:35463: connect: connection refused  * [/ip4/127.0.0.1/tcp/35441] dial tcp4 127.0.0.1:35441: connect: connection refused  * [/ip4/36.189.234.219/tcp/64707] dial tcp4 0.0.0.0:42459->36.189.234.219:64707: i/o timeout  * [/ip4/172.18.102.96/tcp/35441] dial tcp4 0.0.0.0:42459->172.18.102.96:35441: i/o timeout  * [/ip4/36.189.234.219/tcp/61318] dial tcp4 0.0.0.0:42459->36.189.234.219:61318: i/o timeout
  f0109272: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0109309: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0109606: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0109713: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBuwFBctQzSaJsiiTgYYJmUouSGrjMRu7kLyTZKuprP7F:  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip4/120.232.253.200/tcp/23450] dial tcp4 0.0.0.0:42459->120.232.253.200:23450: i/o timeout
  f0109743: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLYvFEdMuA4GQUeN5xounAfSBSKcwh5i976nKJ1gGenRu:  * [/ip4/61.147.97.82/tcp/6689] dial tcp4 0.0.0.0:42459->61.147.97.82:6689: i/o timeout
  f0109901: 'delist, China, Huludao', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJDLBHQKqKjbskjhn3W1qQHV9o9adQvfPoxVLCPm6CvcM:  * [/ip4/42.180.52.64/tcp/8903] dial tcp4 0.0.0.0:42459->42.180.52.64:8903: i/o timeout
  f0109903: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110110: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110133: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGsbvqcX7FweqMNn7ZawTt7u5XjGcd9uS9xohai6YWepB:  * [/ip4/101.71.134.194/tcp/24001] dial tcp4 0.0.0.0:42459->101.71.134.194:24001: i/o timeout
  f0110248: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110261: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110283: 'fail, China, Zhongshan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLwq26cjnJCpHNvVMn22Qn8oJEjcJE9fGnjo7EJv3ov94:  * [/ip6/::1/tcp/40971] dial tcp6 [::1]:40971: connect: connection refused  * [/ip4/127.0.0.1/tcp/40291] dial tcp4 127.0.0.1:40291: connect: connection refused  * [/ip4/100.64.148.215/tcp/19056] dial tcp4 0.0.0.0:42459->100.64.148.215:19056: i/o timeout  * [/ip4/192.168.0.23/tcp/40291] dial tcp4 0.0.0.0:42459->192.168.0.23:40291: i/o timeout  * [/ip4/100.64.148.215/tcp/43287] dial tcp4 0.0.0.0:42459->100.64.148.215:43287: i/o timeout  * [/ip4/183.237.144.66/tcp/43287] dial tcp4 0.0.0.0:42459->183.237.144.66:43287: i/o timeout  * [/ip4/113.73.6.2/tcp/43287] dial tcp4 0.0.0.0:42459->113.73.6.2:43287: i/o timeout
  f0110289: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110442: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHHVA9mXnmNkRyR8wvp3wBYguZoFtFUohG4GMuS74gVWh:  * [/ip4/45.119.63.138/tcp/23450] dial tcp4 0.0.0.0:42459->45.119.63.138:23450: i/o timeout
  f0110695: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110696: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110936: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCsknyHfFHzcuBfEkATfiiCG1Pq71f1NLNi3WCLTTsejj:  * [/ip4/45.119.63.143/tcp/23450] dial tcp4 0.0.0.0:42459->45.119.63.143:23450: i/o timeout
  f0110944: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD7bEyFUiHzBXENMscBuSAahNFftAJpzWfZBLbWNSBvJj:  * [/ip4/127.0.0.1/tcp/35289] dial tcp4 127.0.0.1:35289: connect: connection refused  * [/ip6/::1/tcp/39611] dial tcp6 [::1]:39611: connect: connection refused  * [/ip4/121.201.35.98/tcp/35289] dial tcp4 0.0.0.0:42459->121.201.35.98:35289: i/o timeout
  f0110996: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111007: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111175: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111384: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111434: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111447: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111463: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111467: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111469: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111499: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEy4PYMX2HMEnL2JEoThNZ2vaTfFyfYxpPXXc6cnSsGPr:  * [/ip4/182.131.4.195/tcp/32762] dial tcp4 0.0.0.0:42459->182.131.4.195:32762: i/o timeout
  f0111584: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFYYs51hFrAnZ9qjSBc6NjXtrrwVKKT6oqjgexxDxZXLH:  * [/ip4/192.168.3.14/tcp/32759] dial tcp4 0.0.0.0:42459->192.168.3.14:32759: i/o timeout
  f0111658: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEbM69MhYMGrSFHbVTT1nre2Tappzxo2kvPPu1UziCxKK:  * [/ip4/10.7.7.192/tcp/11785] dial tcp4 0.0.0.0:42459->10.7.7.192:11785: i/o timeout  * [/ip4/110.80.140.245/tcp/11785] dial tcp4 0.0.0.0:42459->110.80.140.245:11785: i/o timeout
  f0112593: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112667: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112680: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112713: 'delist, Korea, Bucheon-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQN75kXUWDj39zx1DDAKrvM5hcdermcxCA8ZJMApVx8HF:  * [/ip4/119.197.20.139/tcp/34001] dial tcp4 0.0.0.0:42459->119.197.20.139:34001: i/o timeout
  f0112762: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112772: 'delist, China, Nantong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112781: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112787: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112887: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0113735: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0113754: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0113777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114118: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114153: 'fail, China, Changsha + Dazhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNx9sjDfaykDaZ6GS3FUQ9LNZfE4pViXufaCKeAhSZs2F:  * [/ip4/175.6.66.78/tcp/24913] dial tcp4 0.0.0.0:42459->175.6.66.78:24913: i/o timeout  * [/ip4/175.6.68.154/tcp/24913] dial tcp4 0.0.0.0:42459->175.6.68.154:24913: i/o timeout
  f0114333: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114338: 'fail, China, Maoming', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA8Q2z1wpYNC2dnDKSV6uji9ivBCVgGGt6JFgLE9cp7iz:  * [/ip4/61.143.232.26/tcp/12888] dial tcp4 0.0.0.0:42459->61.143.232.26:12888: i/o timeout
  f0114350: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114808: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKhgx6T7MwA5U9naFULDmiqTVG8M9nHrKU48s4FzvfsEe:  * [/ip6/::1/tcp/42833] dial tcp6 [::1]:42833: connect: connection refused  * [/ip4/127.0.0.1/tcp/39961] dial tcp4 127.0.0.1:39961: connect: connection refused  * [/ip4/10.80.63.1/tcp/39961] dial tcp4 10.80.63.1:39961: i/o timeout  * [/ip4/120.232.251.4/tcp/39961] dial tcp4 0.0.0.0:42459->120.232.251.4:39961: i/o timeout
  f0114867: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114885: 'delist, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114924: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0115001: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0115117: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0115238: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0115744: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0115990: 'fail, Korea, Gangnam-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCH9QfkYAUcen5u2UsQrsBgRr6SXF1DzoxmejKC3MpMur:  * [/ip4/203.239.84.6/tcp/36849] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCH9QfkYAUcen5u2UsQrsBgRr6SXF1DzoxmejKC3MpMur, but remote key matches 12D3KooWFbbCe63pSrR7zwsx431Y51pjAc4oKTNdjCmAwwHKGjBY
  f0116211: 'fail, China, Weifang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWF79gTgqr7VyLQu74NgBvCTuvDfp2CxGK8hxn2EYKzH6L:  * [/ip4/219.83.163.148/tcp/50666] dial tcp4 0.0.0.0:42459->219.83.163.148:50666: i/o timeout
  f0116287: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFfHAMm4kNbBTJGDqrakZgV8Kw9Y234RddjNNTNd3GFn5:  * [/ip4/172.18.5.97/tcp/2347] dial tcp4 0.0.0.0:42459->172.18.5.97:2347: i/o timeout
  f0116436: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHbCD1dtGYzfRTXLt3AYiEJJgMgRQvMMtUwHsmiUd4qtf:  * [/ip4/8.135.59.185/tcp/14567] dial tcp4 0.0.0.0:42459->8.135.59.185:14567: i/o timeout  * [/ip4/62.185.102.13/tcp/2543] dial tcp4 0.0.0.0:42459->62.185.102.13:2543: i/o timeout
  f0116445: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWANEEdCgugYqaUv5DuuKbEUa87PNyWW7DZPWQMdAhYjM2:  * [/ip4/8.135.57.114/tcp/14567] dial tcp4 0.0.0.0:42459->8.135.57.114:14567: i/o timeout  * [/ip4/62.172.3.6/tcp/3214] dial tcp4 0.0.0.0:42459->62.172.3.6:3214: i/o timeout
  f0116628: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJCiw24Vz15iyWUAaMsULsu6qXXjjQpcE4GD45mRPLaFq:  * [/ip6/::1/tcp/37995] dial tcp6 [::1]:37995: connect: connection refused  * [/ip4/127.0.0.1/tcp/23456] dial tcp4 127.0.0.1:23456: connect: connection refused  * [/ip4/121.46.250.172/tcp/23456] dial tcp4 0.0.0.0:42459->121.46.250.172:23456: i/o timeout
  f0117146: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ1wxB3gfZJGxydfCyCJzmeP2YJFTysjLfCEHv9PJ6NW9:  * [/ip4/106.12.253.240/tcp/24001] dial tcp4 0.0.0.0:42459->106.12.253.240:24001: i/o timeout
  f0117211: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117318: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117358: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117405: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117416: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117434: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117450: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117541: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117542: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117543: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117565: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117585: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117586: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117587: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118028: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118167: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118317: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKdBYgkXGDcAU78435gz435UX7KWKvjziJdazbGoVchiN:  * [/ip4/8.130.25.241/tcp/14567] dial tcp4 0.0.0.0:42459->8.130.25.241:14567: i/o timeout  * [/ip4/62.4.68.25/tcp/26134] dial tcp4 0.0.0.0:42459->62.4.68.25:26134: i/o timeout
  f0118360: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBg6ocTibGty6SpVdWKp4xVGJf1Czwm9yWzpCBRu9xFoy:  * [/ip4/115.236.32.84/tcp/24001] dial tcp4 0.0.0.0:42459->115.236.32.84:24001: i/o timeout
  f0118641: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118769: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118799: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118917: 'fail, China, Shaoxing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPGidLJk8hN5TKMLSHkc64Dh2StcPZNHZa9CJ7JBMKm26:  * [/ip4/112.15.100.140/tcp/25001] dial tcp4 0.0.0.0:42459->112.15.100.140:25001: i/o timeout
  f0118976: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0119146: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0119545: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0119633: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWC9KSsd16NN33UvF4FTfZHkwwVXnEEvT921B2ZjnfF6JZ:  * [/ip4/183.62.138.7/tcp/12358] dial tcp4 0.0.0.0:42459->183.62.138.7:12358: i/o timeout
  f0119828: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0119976: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0119997: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0120057: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0120702: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0120747: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0120909: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJVJznp7UR73gAUmKDe8TQhRBoGJoS5KrqWxXpPCaQPD5:  * [/ip4/127.0.0.1/tcp/7502] dial tcp4 127.0.0.1:7502: connect: connection refused
  f0121533: 'fail, China, Zhejiang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEJgnrAp2twUAS33orbbfTpwVT8YEbmp7CuK7R32aNYca:  * [/ip4/43.240.207.200/tcp/38078] dial tcp4 0.0.0.0:42459->43.240.207.200:38078: i/o timeout
  f0121584: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0121718: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0121768: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWL3bDpJbAQwQ9thu7BGj9gq6ka9u8cXLABEJgUyY2hdYD:  * [/ip4/183.2.233.3/tcp/24503] dial tcp4 0.0.0.0:42459->183.2.233.3:24503: i/o timeout
  f0121771: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0121810: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122215: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122382: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122496: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122533: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122940: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123245: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123261: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123275: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123346: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123522: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123535: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123536: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123931: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFi2fqgY9otRk1HtXmHimxDbDmbP33eVwAeeALv7WStur:  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/10.80.63.1/tcp/4057] dial tcp4 0.0.0.0:42459->10.80.63.1:4057: i/o timeout  * [/ip4/45.119.63.154/tcp/23450] dial tcp4 0.0.0.0:42459->45.119.63.154:23450: i/o timeout
  f0124036: 'fail, China, Nanchang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHbP5BGxCnHAG7872aZAiwghr4GqnutD2MDPHXmsaSumc:  * [/ip4/117.167.113.98/tcp/1349] dial tcp4 0.0.0.0:42459->117.167.113.98:1349: i/o timeout
  f0124102: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0124126: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124158: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124696: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124904: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124923: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124944: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0125488: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126097: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126478: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126661: 'delist, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126698: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126702: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126898: 'fail, China, Harbin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127378: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127382: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127569: 'delist, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127595: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127612: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127616: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127617: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127618: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127627: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127628: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127629: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127640: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127721: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127735: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127896: 'fail, Bulgaria, Sofia, sofiaminer', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE8yt84RVwW3sFcd6WMjbUdWrZer2YtT4dmtj3dHdahSZ:  * [/ip4/85.11.148.122/tcp/24001] dial tcp4 85.11.148.122:24001: connect: connection refused
  f0127980: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128011: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128381: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128559: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128761: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128788: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128815: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128931: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129072: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129226: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129403: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129422: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129750: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129805: 'fail, China, Zhejiang + Australia, Adelaide', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130094: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130134: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130556: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130639: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130686: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130727: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130791: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130884: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130906: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0131419: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMZ5NG3A6k6y5HuRystaCgXQdFq5EgpsbY8QtVZ5WXhej:  * [/ip4/36.155.144.51/tcp/33171] dial tcp4 0.0.0.0:42459->36.155.144.51:33171: i/o timeout  * [/ip4/127.0.0.1/tcp/33171] dial tcp4 127.0.0.1:33171: connect: connection refused  * [/ip6/::1/tcp/43649] dial tcp6 [::1]:43649: connect: connection refused
  f0131509: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0131654: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0131767: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0131822: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0132178: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0132313: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0132618: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0132638: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0132706: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133235: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133376: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133379: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133501: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMZUakB6bddKkzBtEE5CfPBgWsWok6EP57PxrpBEemdpR:  * [/ip4/172.17.33.105/tcp/10241] dial tcp4 0.0.0.0:42459->172.17.33.105:10241: i/o timeout
  f0133505: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAUV8nhvge9Ldcp3qozUfbwLKURzjb7po13T6FvVv91d6:  * [/ip4/172.18.41.72/tcp/10241] dial tcp4 0.0.0.0:42459->172.18.41.72:10241: i/o timeout
  f0133509: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133689: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133763: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133833: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPtJrLkhMqqtvkBwVedPQQQakMPhMS38YkWDTEDDrAEKE:  * [/ip4/183.62.105.40/tcp/24001] dial tcp4 0.0.0.0:42459->183.62.105.40:24001: i/o timeout
  f0133886: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJX5vZbXgEdHYCQWuAQCr7g2kDnNHREySmGB6indFWqku:  * [/ip4/127.0.0.1/tcp/39043] dial tcp4 127.0.0.1:39043: connect: connection refused  * [/ip4/192.168.99.99/tcp/39043] dial tcp4 0.0.0.0:42459->192.168.99.99:39043: i/o timeout  * [/ip4/116.177.251.50/tcp/11649] dial tcp4 0.0.0.0:42459->116.177.251.50:11649: i/o timeout
  f0133999: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNa6nuK3ysmqgPsoVYTycM3JMK23A8E4qEGAU4fo63NE8:  * [/ip4/127.0.0.1/tcp/43501] dial tcp4 127.0.0.1:43501: connect: connection refused  * [/ip6/::1/tcp/41847] dial tcp6 [::1]:41847: connect: connection refused  * [/ip4/61.240.206.188/tcp/43501] dial tcp4 0.0.0.0:42459->61.240.206.188:43501: i/o timeout  * [/ip4/113.219.201.172/tcp/24001] dial tcp4 0.0.0.0:42459->113.219.201.172:24001: i/o timeout
  f0134006: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRLr5Efqy61nSerZXi5aorAL28qLDVphNovoYSgvpgm7t:  * [/ip4/10.140.8.12/tcp/32759] dial tcp4 0.0.0.0:42459->10.140.8.12:32759: i/o timeout
  f0134285: "fail, China, Ya'an + USA", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134286: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134516: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCue8qy4otYP68SZFQCvZbVTE2gYAuVk2q77auyS7te5a:  * [/ip4/8.130.29.132/tcp/14567] dial tcp4 0.0.0.0:42459->8.130.29.132:14567: i/o timeout  * [/ip4/192.35.244.45/tcp/26734] dial tcp4 0.0.0.0:42459->192.35.244.45:26734: i/o timeout
  f0134518: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWH7nooQV9hZQCr8FzSL8yD61x3XMtGMYgfbfUe1gox7NA:  * [/ip4/47.113.123.79/tcp/14567] dial tcp4 0.0.0.0:42459->47.113.123.79:14567: i/o timeout  * [/ip4/192.114.56.87/tcp/21342] dial tcp4 0.0.0.0:42459->192.114.56.87:21342: i/o timeout
  f0134552: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134565: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGmqd443CQPr4AETopoxtyYo7fAFtVSPTxpPCm5WbnaUh:  * [/ip6/::1/tcp/39849] dial tcp6 [::1]:39849: connect: connection refused  * [/ip4/127.0.0.1/tcp/34951] dial tcp4 127.0.0.1:34951: connect: connection refused  * [/ip4/172.18.102.166/tcp/34951] dial tcp4 0.0.0.0:42459->172.18.102.166:34951: i/o timeout  * [/ip4/36.189.234.219/tcp/61632] dial tcp4 0.0.0.0:42459->36.189.234.219:61632: i/o timeout  * [/ip4/36.189.234.219/tcp/61132] dial tcp4 0.0.0.0:42459->36.189.234.219:61132: i/o timeout
  f0134609: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134682: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPdrrhjawyZBZ8w577Esv61ZNTseMfVbKH7C8w7htoutF:  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/120.232.253.10/tcp/23450] dial tcp4 0.0.0.0:42459->120.232.253.10:23450: i/o timeout
  f0134778: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCK6C31smJg1ZoufNz6oumzCrMv3Pg3rS4z3Wvcc14kgV:  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip4/120.232.253.6/tcp/23450] dial tcp4 0.0.0.0:42459->120.232.253.6:23450: i/o timeout
  f0134839: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRoTVtq6WJKsyAd2SNhWf5qT1TPZSZCMym22k8mrr23Xy:  * [/ip4/172.16.3.55/tcp/60355] dial tcp4 0.0.0.0:42459->172.16.3.55:60355: i/o timeout  * [/ip4/113.142.2.198/tcp/60355] dial tcp4 0.0.0.0:42459->113.142.2.198:60355: i/o timeout
  f0134867: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134991: 'fail, China, Foshan', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0135008: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135066: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135150: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135414: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135467: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135469: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135473: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135474: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135475: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135551: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135738: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0135758: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDdsHRTxE7ZHiCAvMSSqpBm6DdiXhhuicAMG4oUqdCoAR:  * [/ip4/127.0.0.1/tcp/1346] dial tcp4 127.0.0.1:1346: connect: connection refused  * [/ip4/183.136.236.94/tcp/1346] dial tcp4 0.0.0.0:42459->183.136.236.94:1346: i/o timeout
  f0135779: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135859: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKtd5tncATexfW4o26F6qmFY7h7HofiT4Lr5mh917preS:  * [/ip4/172.18.42.16/tcp/10241] dial tcp4 0.0.0.0:42459->172.18.42.16:10241: i/o timeout
  f0135885: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135934: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136014: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136033: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136138: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136239: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136399: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136642: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136668: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136810: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136811: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPMAZUoGWrU8hScHuCPXYKiahMLykzK81QRYURtw8XcAL:  * [/ip4/39.108.51.33/tcp/14567] dial tcp4 0.0.0.0:42459->39.108.51.33:14567: i/o timeout  * [/ip4/192.188.172.31/tcp/4356] dial tcp4 0.0.0.0:42459->192.188.172.31:4356: i/o timeout
  f0136868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0137019: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0137594: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0137868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0141446: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMWNQa11Kqn99QLWpZK2ibbGvdcSLv8M5vdcJ7huR54GN:  * [/ip4/172.18.6.127/tcp/2347] dial tcp4 0.0.0.0:42459->172.18.6.127:2347: i/o timeout  * [/ip4/61.155.145.103/tcp/2347] dial tcp4 0.0.0.0:42459->61.155.145.103:2347: i/o timeout
  f0141634: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0141761: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0141762: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142059: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142135: "fail, China, Ya'an + USA", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142238: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142245: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142281: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142337: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142515: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMyLM1v48fTnafWBy7F5ixry938RLzhxCDcJkn8iQn7Ve:  * [/ip6/::1/tcp/43539] dial tcp6 [::1]:43539: connect: connection refused  * [/ip4/127.0.0.1/tcp/45037] dial tcp4 127.0.0.1:45037: connect: connection refused  * [/ip4/122.9.63.50/tcp/45037] dial tcp4 0.0.0.0:42459->122.9.63.50:45037: i/o timeout
  f0142637: 'fail, China, Mianyang', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0142720: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142721: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPRjsZzeZDCN28bF4sFjH9cWrtfLpGjXgeLr2bfEMfSuk:  * [/ip4/10.4.104.74/tcp/12288] dial tcp4 0.0.0.0:42459->10.4.104.74:12288: i/o timeout
  f0142723: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAqi4yZBZftta7YUBHtunGYowv7AVKXCoaRA4CZEtadnZ:  * [/ip4/10.4.104.75/tcp/12288] dial tcp4 0.0.0.0:42459->10.4.104.75:12288: i/o timeout
  f0143032: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143110: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143160: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143332: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143361: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143500: 'fail, China, Zhejiang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143511: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143858: 'fail, USA, Calistoga', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvQftXwBGoquXhiJxviZ2YJnxnSYCaD8WTe8uVWvXhf2:  * [/ip4/72.52.116.228/tcp/12350] dial tcp4 0.0.0.0:42459->72.52.116.228:12350: i/o timeout
  f0143907: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144069: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144194: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144313: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRGhsq49BP7fSr84fuJZpUWe3TxEs1f2HNbeuifyWVRbH:  * [/ip4/10.5.101.90/tcp/12288] dial tcp4 0.0.0.0:42459->10.5.101.90:12288: i/o timeout  * [/ip4/106.74.20.7/tcp/12288] dial tcp4 0.0.0.0:42459->106.74.20.7:12288: i/o timeout
  f0144314: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144316: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144528: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144530: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144618: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144724: 'fail, USA, Los Angeles', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQG8mBpQNBfK8sLeJ71Di4n7hwKfW6UHxXXEW3sZZPgiC:  * [/ip4/209.170.228.251/tcp/24001] dial tcp4 209.170.228.251:24001: connect: connection refused
  f0144756: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144952: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145060: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145249: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145503: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145687: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145985: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145986: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0146220: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0146224: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0146278: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0146393: 'fail, China, Foshan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPBraDH4aCJTMCjaZ1JBe7nDCJUioSHtkJZ6VWseSumiQ:  * [/ip4/183.2.233.3/tcp/24501] dial tcp4 0.0.0.0:42459->183.2.233.3:24501: i/o timeout
  f0146428: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJqyLnffd3YFB2NrsTw2Y6Rzj869YfmN18GPQbEtBYeTh:  * [/ip4/172.16.2.105/tcp/6789] dial tcp4 0.0.0.0:42459->172.16.2.105:6789: i/o timeout
  f0146875: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDDKANGD4NgvohYVoaMCArpg7aoqEuyE2jZgz4kBygEuG:  * [/ip4/127.0.0.1/tcp/36923] dial tcp4 127.0.0.1:36923: connect: connection refused  * [/ip6/::1/tcp/45501] dial tcp6 [::1]:45501: connect: connection refused  * [/ip4/172.18.87.177/tcp/36923] dial tcp4 0.0.0.0:42459->172.18.87.177:36923: i/o timeout  * [/ip4/36.189.234.202/tcp/65327] dial tcp4 0.0.0.0:42459->36.189.234.202:65327: i/o timeout  * [/ip4/36.189.234.202/tcp/60454] dial tcp4 0.0.0.0:42459->36.189.234.202:60454: i/o timeout
  f0146956: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147119: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147214: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147565: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQfSfZrzNMKMDGetJTBHV5afAEg57mHuimpvGm4HhCfYa:  * [/ip4/127.0.0.1/tcp/46751] dial tcp4 127.0.0.1:46751: connect: connection refused  * [/ip6/::1/tcp/34577] dial tcp6 [::1]:34577: connect: connection refused  * [/ip4/192.168.1.6/tcp/46751] dial tcp4 0.0.0.0:42459->192.168.1.6:46751: i/o timeout  * [/ip4/219.83.162.44/tcp/29705] dial tcp4 0.0.0.0:42459->219.83.162.44:29705: i/o timeout  * [/ip4/219.83.162.44/tcp/20012] dial tcp4 0.0.0.0:42459->219.83.162.44:20012: i/o timeout
  f0147586: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147657: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147801: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148143: 'fail, China, Tianjin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148151: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148269: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148391: 'fail, China, Changsha + Japan, Tokyo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKceNLAACWruMmmGiATfNpdLuTshjRQMECCYRvqdRAGUm:  * [/ip4/23.10.7.187/tcp/912] dial tcp4 0.0.0.0:42459->23.10.7.187:912: i/o timeout
  f0148399: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA7qVoFcVbB1qyMisLTnwXVm96tvdQbjBGjhrJhdYCTdD:  * [/ip6/::1/tcp/35779] dial tcp6 [::1]:35779: connect: connection refused  * [/ip4/127.0.0.1/tcp/34061] dial tcp4 127.0.0.1:34061: connect: connection refused  * [/ip4/36.189.234.154/tcp/60961] dial tcp4 0.0.0.0:42459->36.189.234.154:60961: i/o timeout  * [/ip4/172.18.49.36/tcp/34061] dial tcp4 0.0.0.0:42459->172.18.49.36:34061: i/o timeout  * [/ip4/36.189.234.154/tcp/49274] dial tcp4 0.0.0.0:42459->36.189.234.154:49274: i/o timeout
  f0148452: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148494: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148627: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0149132: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPioc5NM47gU8ebn5wZtE7AJeF7Rj6mpvEXerjru9FJiX:  * [/ip4/43.254.106.6/tcp/63345] dial tcp4 0.0.0.0:42459->43.254.106.6:63345: i/o timeout
  f0149753: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0149765: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE8YND3qmyUmfCctWpk2995825PZYYE1jsNDJ12QcZtAo:  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip4/120.232.253.11/tcp/23450] dial tcp4 0.0.0.0:42459->120.232.253.11:23450: i/o timeout
  f0149768: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAm8Dqe3AeMfZ4J4jAhs8BcGBZMJ8ZUisf3jKV8sKkpM8:  * [/ip4/14.152.85.174/tcp/23450] dial tcp4 0.0.0.0:42459->14.152.85.174:23450: i/o timeout  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused
  f0149937: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150744: 'fail, Korea, Ulsan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFQaZfLj9xLZfKqo5h8PDT4qq5aeLXEzrNjqqFQLYfYuA:  * [/ip4/61.77.31.17/tcp/25246] dial tcp4 61.77.31.17:25246: connect: connection refused
  f0150748: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150782: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150816: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150860: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150918: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151366: 'fail, China, Fuzhou + Xiamen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9wJptPW1UkC7DZNDpcbkV7quMPMWSqqBRhxMuTkKSmj7:  * [/ip4/10.1.18.102/tcp/12877] dial tcp4 0.0.0.0:42459->10.1.18.102:12877: i/o timeout  * [/ip6/::1/tcp/4549] dial tcp6 [::1]:4549: connect: connection refused  * [/ip4/127.0.0.1/tcp/12877] dial tcp4 127.0.0.1:12877: connect: connection refused  * [/ip4/125.77.198.234/tcp/46351] dial tcp4 0.0.0.0:42459->125.77.198.234:46351: i/o timeout  * [/ip4/125.77.198.234/tcp/16091] dial tcp4 0.0.0.0:42459->125.77.198.234:16091: i/o timeout  * [/ip4/112.48.155.114/tcp/46351] dial tcp4 0.0.0.0:42459->112.48.155.114:46351: i/o timeout  * [/ip4/112.48.155.114/tcp/16091] dial tcp4 0.0.0.0:42459->112.48.155.114:16091: i/o timeout  * [/ip4/125.77.198.235/tcp/16091] dial tcp4 0.0.0.0:42459->125.77.198.235:16091: i/o timeout  * [/ip4/125.77.198.235/tcp/46351] dial tcp4 0.0.0.0:42459->125.77.198.235:46351: i/o timeout
  f0151371: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151436: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQU6uqejcahWq81L7Pe2CUQYRxJ6B8CAx6Q2mHumrSm5E:  * [/ip4/127.0.0.1/tcp/19381] dial tcp4 127.0.0.1:19381: connect: connection refused  * [/ip6/::1/tcp/27965] dial tcp6 [::1]:27965: connect: connection refused  * [/ip4/10.1.17.73/tcp/19381] dial tcp4 0.0.0.0:42459->10.1.17.73:19381: i/o timeout  * [/ip4/125.77.198.234/tcp/36891] dial tcp4 0.0.0.0:42459->125.77.198.234:36891: i/o timeout  * [/ip4/125.77.198.235/tcp/36891] dial tcp4 0.0.0.0:42459->125.77.198.235:36891: i/o timeout  * [/ip4/125.77.198.235/tcp/44248] dial tcp4 0.0.0.0:42459->125.77.198.235:44248: i/o timeout  * [/ip4/112.48.155.114/tcp/44248] dial tcp4 0.0.0.0:42459->112.48.155.114:44248: i/o timeout  * [/ip4/112.48.155.114/tcp/36891] dial tcp4 0.0.0.0:42459->112.48.155.114:36891: i/o timeout  * [/ip4/125.77.198.234/tcp/44248] dial tcp4 0.0.0.0:42459->125.77.198.234:44248: i/o timeout
  f0151453: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0151468: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCashivLboy29j2Q8498RjuCNp49yf4rF2NvBiTCq1yYT:  * [/ip6/::1/tcp/9709] dial tcp6 [::1]:9709: connect: connection refused  * [/ip4/10.1.17.77/tcp/24481] dial tcp4 0.0.0.0:42459->10.1.17.77:24481: i/o timeout  * [/ip4/127.0.0.1/tcp/24481] dial tcp4 127.0.0.1:24481: connect: connection refused  * [/ip4/125.77.198.234/tcp/60147] dial tcp4 0.0.0.0:42459->125.77.198.234:60147: i/o timeout  * [/ip4/125.77.198.235/tcp/60147] dial tcp4 0.0.0.0:42459->125.77.198.235:60147: i/o timeout  * [/ip4/125.77.198.235/tcp/10754] dial tcp4 0.0.0.0:42459->125.77.198.235:10754: i/o timeout  * [/ip4/112.48.155.114/tcp/60147] dial tcp4 0.0.0.0:42459->112.48.155.114:60147: i/o timeout  * [/ip4/112.48.155.114/tcp/10754] dial tcp4 0.0.0.0:42459->112.48.155.114:10754: i/o timeout  * [/ip4/125.77.198.234/tcp/10754] dial tcp4 0.0.0.0:42459->125.77.198.234:10754: i/o timeout
  f0151498: 'fail, China, Jinan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSGw3fdnYjSbqYky7F67TraGwhTj2K9Dmu16iQgB9XcyF:  * [/ip4/127.0.0.1/tcp/27707] dial tcp4 127.0.0.1:27707: connect: connection refused  * [/ip6/::1/tcp/4701] dial tcp6 [::1]:4701: connect: connection refused  * [/ip4/172.16.0.8/tcp/27707] dial tcp4 0.0.0.0:42459->172.16.0.8:27707: i/o timeout  * [/ip4/58.56.9.130/tcp/36795] dial tcp4 0.0.0.0:42459->58.56.9.130:36795: i/o timeout  * [/ip4/58.56.9.130/tcp/45757] dial tcp4 0.0.0.0:42459->58.56.9.130:45757: i/o timeout  * [/ip4/58.56.9.139/tcp/36795] dial tcp4 0.0.0.0:42459->58.56.9.139:36795: i/o timeout  * [/ip4/58.56.9.139/tcp/45757] dial tcp4 0.0.0.0:42459->58.56.9.139:45757: i/o timeout
  f0151499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151536: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151692: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0151706: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151849: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152134: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152351: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152563: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAwo844dWRZkHcMjdGQX6TLCHqqjWaYNWRpqjNhtbMnXT:  * [/ip4/58.43.1.82/tcp/24001] dial tcp4 0.0.0.0:42459->58.43.1.82:24001: i/o timeout
  f0152747: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHbdGswAV84JvVXhB1KntJwdgmdsX8t8mJqHnvAbfJhAe:  * [/ip4/127.0.0.1/tcp/36707] dial tcp4 127.0.0.1:36707: connect: connection refused  * [/ip6/::1/tcp/32941] dial tcp6 [::1]:32941: connect: connection refused  * [/ip4/172.18.82.26/tcp/36707] dial tcp4 0.0.0.0:42459->172.18.82.26:36707: i/o timeout  * [/ip4/36.189.234.187/tcp/63210] dial tcp4 0.0.0.0:42459->36.189.234.187:63210: i/o timeout  * [/ip4/36.189.234.187/tcp/63759] dial tcp4 0.0.0.0:42459->36.189.234.187:63759: i/o timeout
  f0152799: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152866: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153024: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153040: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153078: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153176: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLBTCP2X9ALPTtTEPJVwKp1A95x71w6CRCcmDyYW2kbtw:  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/10.80.63.1/tcp/23450] dial tcp4 0.0.0.0:42459->10.80.63.1:23450: i/o timeout  * [/ip4/45.119.63.5/tcp/23450] dial tcp4 0.0.0.0:42459->45.119.63.5:23450: i/o timeout
  f0153188: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153565: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153583: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153775: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153804: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRYzvW7FieB4gDbRJMU9FRbFd3R6An7FtVBhcaK59mT2g:  * [/ip4/218.13.93.62/tcp/5502] dial tcp4 0.0.0.0:42459->218.13.93.62:5502: i/o timeout
  f0153930: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153932: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153960: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153986: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG4ngcStum65vCcnjVLEzHziUTdtNcAR4EvXu8QhBGR1H:  * [/ip4/127.0.0.1/tcp/7503] dial tcp4 127.0.0.1:7503: connect: connection refused
  f0154039: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWT2SDwTt1xZJ3xPuexFik1aWUDF32PNsegSD9DZXqU4Qx:  * [/ip4/10.2.6.233/tcp/32718] dial tcp4 0.0.0.0:42459->10.2.6.233:32718: i/o timeout  * [/ip4/183.36.17.117/tcp/32718] dial tcp4 0.0.0.0:42459->183.36.17.117:32718: i/o timeout
  f0154152: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154238: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154294: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154597: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154865: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154988: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHEBigqyihdkkrUdmzadyxbWQeCBwf8yb74WNLKVVhVZR:  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/10.80.63.1/tcp/13425] dial tcp4 0.0.0.0:42459->10.80.63.1:13425: i/o timeout  * [/ip4/14.152.85.137/tcp/23450] dial tcp4 0.0.0.0:42459->14.152.85.137:23450: i/o timeout
  f0155049: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155050: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155258: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155467: 'fail, Korea, Seongnam-si', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155515: 'delist, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155687: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155829: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155983: 'fail, Japan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCiSxAQf3Hp6t1sFJdRotppHwUUBa6jQaA1bcJd4YEbJ1:  * [/ip4/202.149.23.10/tcp/5472] dial tcp4 202.149.23.10:5472: connect: connection refused
  f0156214: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0156333: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0156342: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0156417: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157025: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157115: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157127: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157265: 'fail, China, Zhangjiakou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0157316: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157502: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157769: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157917: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157941: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPD76F57jRDCxa3H3CseZFB89tTU6wiuWb6MHb2jJpqxL:  * [/ip4/127.0.0.1/tcp/4913] dial tcp4 127.0.0.1:4913: connect: connection refused  * [/ip4/192.168.143.169/tcp/4913] dial tcp4 0.0.0.0:42459->192.168.143.169:4913: i/o timeout  * [/ip4/113.219.198.14/tcp/4913] dial tcp4 0.0.0.0:42459->113.219.198.14:4913: i/o timeout
  f0157979: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157991: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158000: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158068: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158133: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHw1ytuA6ia2c2wQ7NAmSm7vStuTgeDhhKCpL7t4bY3da:  * [/ip4/10.33.1.17/tcp/6789] dial tcp4 0.0.0.0:42459->10.33.1.17:6789: i/o timeout
  f0158142: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0158156: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158265: 'fail, China, Hefei', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158276: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158613: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158666: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPZjynNgrSa497ZYiX1XjUrbtzsvJAr4cqw2SvWBjrfgt:  * [/ip4/127.0.0.1/tcp/36213] dial tcp4 127.0.0.1:36213: connect: connection refused  * [/ip6/::1/tcp/33699] dial tcp6 [::1]:33699: connect: connection refused  * [/ip4/120.232.161.239/tcp/36213] dial tcp4 0.0.0.0:42459->120.232.161.239:36213: i/o timeout  * [/ip4/120.232.161.187/tcp/24001] dial tcp4 0.0.0.0:42459->120.232.161.187:24001: i/o timeout
  f0158728: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158950: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158993: 'fail, China, Zhangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159067: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159333: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159380: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEmXCpUX7qdExMQeXMmpT4zAUcz5yyE862VH4DG8o37pc:  * [/ip4/1.182.90.5/tcp/4001] dial tcp4 0.0.0.0:42459->1.182.90.5:4001: i/o timeout
  f0159449: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159517: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159632: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDPAdiHZY2J46XsioY41wEghorpiaJxjGFiR7Sru6B7pk:  * [/ip4/10.140.8.11/tcp/32759] dial tcp4 0.0.0.0:42459->10.140.8.11:32759: i/o timeout
  f0159654: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159660: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159689: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159883: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKkHESE49gxVjwHSP1Pk5tXFGfAv8LuzDakUZd42SViFU:  * [/ip4/10.133.9.111/tcp/32759] dial tcp4 0.0.0.0:42459->10.133.9.111:32759: i/o timeout
  f0159961: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0160135: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0160137: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKPdM5fFL1Wcx3Z9PWmPAjZvDii93SZk5FGcfanogC8dk:  * [/ip4/61.240.206.152/tcp/50666] dial tcp4 0.0.0.0:42459->61.240.206.152:50666: i/o timeout
  f0160735: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0160819: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0160870: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0161468: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0161542: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWL7DWiea5SD2LDDB4wgzgYyicvMqbYhr9FGy1NmFjRbzP:  * [/ip4/10.10.8.50/tcp/8124] dial tcp4 0.0.0.0:42459->10.10.8.50:8124: i/o timeout
  f0161819: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0161916: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNepasPf214kWmhHRTUS3GGcSgg2HzJBS2gWrnWVwdpse:  * [/ip4/61.147.97.82/tcp/55556] dial tcp4 0.0.0.0:42459->61.147.97.82:55556: i/o timeout
  f0162183: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0162385: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAPsbyfdXVqeTeL8sxaQBrb4SVsLgksgK34zhr64PapkR:  * [/ip4/120.232.161.217/tcp/24001] dial tcp4 0.0.0.0:42459->120.232.161.217:24001: i/o timeout
  f0162394: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0163275: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0164260: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0164291: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE51gFJaoAHjrRd6wkraqr2ohq38bF5wvxJYeSKC1N8Pr:  * [/ip4/45.126.120.171/tcp/24001] dial tcp4 0.0.0.0:42459->45.126.120.171:24001: i/o timeout
  f0165539: 'fail, Japan, Yokohama', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGLS1RBCL8L3qPao2g3EqajSm2KHxbuafXSz6B91feaZ5:  * [/ip4/114.146.72.131/tcp/60000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGLS1RBCL8L3qPao2g3EqajSm2KHxbuafXSz6B91feaZ5, but remote key matches 12D3KooWH6QHPTUyo6F4mrFGYSnHiJmAUuWKQmnfzxp3SJASPq69
  f0165643: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166327: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166425: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166512: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166843: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166896: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0167137: 'fail, China, Shaoxing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBNZWmyu93EsfFKRWaunU1ykXxK1ontQcjY5nvEh29kvs:  * [/ip4/115.239.191.45/tcp/24002] dial tcp4 0.0.0.0:42459->115.239.191.45:24002: i/o timeout
  f0167505: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSRFer5yWxcyjXWwa5FSNLZpZcNWxkfi1PqdNjh8EYuYj:  * [/ip4/10.10.8.90/tcp/7002] dial tcp4 0.0.0.0:42459->10.10.8.90:7002: i/o timeout
  f0168058: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMM38722xUgBthsFgQBF8s2HuokVbV5R1jWgQbGrDjmTr:  * [/ip4/58.211.213.210/tcp/22122] dial tcp4 0.0.0.0:42459->58.211.213.210:22122: i/o timeout
  f0168537: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0169053: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0169097: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0169153: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9uxDowijiAf95NqM2W2L4CNTcCp3TVmM1RntVgdgyMy6:  * [/ip6/::1/tcp/41439] dial tcp6 [::1]:41439: connect: connection refused  * [/ip4/127.0.0.1/tcp/22220] dial tcp4 127.0.0.1:22220: connect: connection refused  * [/ip4/183.221.243.7/tcp/22220] dial tcp4 0.0.0.0:42459->183.221.243.7:22220: i/o timeout
  f0172300: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0179096: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0199223: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFnLArFiK8JWmiChXEutsTd1tGw8t5ZNciuST8FNDQ85j:  * [/ip4/110.188.25.20/tcp/24001] dial tcp4 0.0.0.0:42459->110.188.25.20:24001: i/o timeout
  f0207949: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0215370: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNG7BT36QQyFjvpNJJ2G9rozhLHeZsqa2iYswZFBvonez:  * [/ip4/47.115.219.17/tcp/24001] dial tcp4 0.0.0.0:42459->47.115.219.17:24001: i/o timeout
  f0215704: 'fail, Korea, Icheon-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBaGEjAm39dpTYrdaSpWs87HbKrEs6eTmR1b8hPQKH4AZ:  * [/ip4/210.97.12.181/tcp/21406] dial tcp4 0.0.0.0:42459->210.97.12.181:21406: i/o timeout
  f0216138: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0216463: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0216822: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0216849: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHt6feNUU8kKtWmFkeieiRyE16KE8825ywbaA89jmJj6G:  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip4/45.119.63.7/tcp/23450] dial tcp4 0.0.0.0:42459->45.119.63.7:23450: i/o timeout
  f0217419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0217771: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJibSxo5yq7eoAH3vvKuhvrEkVxaBK28DChqjhEtJ2CwV:  * [/ip4/103.44.253.105/tcp/12358] dial tcp4 0.0.0.0:42459->103.44.253.105:12358: i/o timeout
  f0217789: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0217805: 'fail, China, Taiwan, Taipei', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE1znzJYLvWnCd3xB1Y6X8AimQL1x2WXsC6R5JDmCHQYS:  * [/ip4/220.130.154.127/tcp/2348] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWE1znzJYLvWnCd3xB1Y6X8AimQL1x2WXsC6R5JDmCHQYS, but remote key matches 12D3KooWL1927LDwXR6UibSv9hhNgQhWbqb1B8RHqNqYWgA3kHGY
  f0218072: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0218092: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0218293: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSaYTjZgciR4BFMMpCLPURJvF5mtdmwczmeP1qP4Di6BZ:  * [/ip4/45.119.63.13/tcp/23450] dial tcp4 0.0.0.0:42459->45.119.63.13:23450: i/o timeout  * [/ip4/202.68.208.88/tcp/23450] dial tcp4 0.0.0.0:42459->202.68.208.88:23450: i/o timeout
  f0218407: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWF824mw7DBr8XKx5nfDdpnZNnvtRQ2YJ3tzbEN5qRhD8t:  * [/ip4/61.240.206.153/tcp/50667] dial tcp4 0.0.0.0:42459->61.240.206.153:50667: i/o timeout
  f0218559: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSa11PfrsyKqW7wZUBXfuK9r6d2xjeeD81Be1EnzPntiz:  * [/ip4/58.144.223.135/tcp/2347] dial tcp4 0.0.0.0:42459->58.144.223.135:2347: i/o timeout
  f0219106: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0220156: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0220632: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0222611: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0222674: 'fail, China, Quinzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWC8VtiyANHENxd7AQN8w1Qk3uRVaDnUHkwaxsYsS3V7yb:  * [/ip4/10.3.13.163/tcp/11602] dial tcp4 0.0.0.0:42459->10.3.13.163:11602: i/o timeout  * [/ip4/116.8.132.17/tcp/11602] dial tcp4 0.0.0.0:42459->116.8.132.17:11602: i/o timeout
  f0222811: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0222947: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0222962: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJHbAA2rQRaNikJiQn2nhEs8y7AzeTn17uGfVudSAHgYy:  * [/ip6/::1/tcp/40451] dial tcp6 [::1]:40451: connect: connection refused  * [/ip4/127.0.0.1/tcp/46043] dial tcp4 127.0.0.1:46043: connect: connection refused  * [/ip4/172.18.102.66/tcp/46043] dial tcp4 0.0.0.0:42459->172.18.102.66:46043: i/o timeout  * [/ip4/36.189.234.219/tcp/62584] dial tcp4 0.0.0.0:42459->36.189.234.219:62584: i/o timeout  * [/ip4/36.189.234.219/tcp/49415] dial tcp4 0.0.0.0:42459->36.189.234.219:49415: i/o timeout
  f0223033: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223101: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223102: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223103: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223104: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223106: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223316: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223663: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEwCKR12RM7fhBFruWsg4VW3ybFW66HHvSRWN9vYURRvm:  * [/ip4/103.235.238.182/tcp/24001] dial tcp4 0.0.0.0:42459->103.235.238.182:24001: i/o timeout
  f0224894: 'fail, China, Qingdao', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0224984: 'fail, China, Wuhan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0225058: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0225285: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0226303: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0226324: 'fail, China, Guangxi', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGRVZrUCRLXy6YdfQndd7vb8gcAvSjfC6ChipjutEgBXu:  * [/ip4/118.190.151.50/tcp/56173] dial tcp4 0.0.0.0:42459->118.190.151.50:56173: i/o timeout
  f0226418: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0226520: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0227531: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWL2dwQBv8D8SfzncvADVmJHR6qcR5C3t8ptPxrVkYWDc4:  * [/ip6/::1/tcp/22585] dial tcp6 [::1]:22585: connect: connection refused  * [/ip4/127.0.0.1/tcp/3091] dial tcp4 127.0.0.1:3091: connect: connection refused  * [/ip4/125.77.198.234/tcp/25660] dial tcp4 0.0.0.0:42459->125.77.198.234:25660: i/o timeout  * [/ip4/112.48.155.114/tcp/25660] dial tcp4 0.0.0.0:42459->112.48.155.114:25660: i/o timeout  * [/ip4/10.1.17.65/tcp/3091] dial tcp4 0.0.0.0:42459->10.1.17.65:3091: i/o timeout  * [/ip4/125.77.198.235/tcp/25660] dial tcp4 0.0.0.0:42459->125.77.198.235:25660: i/o timeout  * [/ip4/125.77.198.235/tcp/57281] dial tcp4 0.0.0.0:42459->125.77.198.235:57281: i/o timeout  * [/ip4/112.48.155.114/tcp/57281] dial tcp4 0.0.0.0:42459->112.48.155.114:57281: i/o timeout  * [/ip4/125.77.198.234/tcp/57281] dial tcp4 0.0.0.0:42459->125.77.198.234:57281: i/o timeout
  f0227567: 'fail, China, Zhangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0228232: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEZAh3WfxSFS6trQZYHHU8N8HdJPZhvMYBo281yhTDwQA:  * [/ip4/183.204.60.235/tcp/16017] dial tcp4 0.0.0.0:42459->183.204.60.235:16017: i/o timeout
  f0228712: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWH1GvFgvxR4rpH8otDhLyMutDRywwRUgSLzJFgK4yazu5:  * [/ip4/47.242.42.104/tcp/17322] failed to negotiate security protocol: read tcp4 144.217.11.204:42459->47.242.42.104:17322: read: connection reset by peer
  f0229199: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0229437: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0230449: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0230799: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0230861: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0231112: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSVBeGTDfyqY3rS8RBhnusdikSLyEPfrkBkoEhLUWgY1Z:  * [/ip4/112.194.96.134/tcp/24001] dial tcp4 0.0.0.0:42459->112.194.96.134:24001: i/o timeout
  f0231481: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0231782: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0232459: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0232650: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0234567: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0239251: 'fail, Korea, Uiwang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0239678: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0239688: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBorD3tJbURvNLAsrzY3jecc19UxrU1jATTnTVpksGAQ6:  * [/ip6/::1/tcp/33069] dial tcp6 [::1]:33069: connect: connection refused  * [/ip4/127.0.0.1/tcp/41657] dial tcp4 127.0.0.1:41657: connect: connection refused  * [/ip4/36.155.144.51/tcp/41657] dial tcp4 0.0.0.0:42459->36.155.144.51:41657: i/o timeout
  f0240035: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPZSFGhykg4TBEpKa5LBMNwzmkE8iWLHoR2kCzgQuAhC9:  * [/ip4/115.236.46.164/tcp/20004] dial tcp4 0.0.0.0:42459->115.236.46.164:20004: i/o timeout
  f0240185: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0240392: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0240456: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0241536: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0241764: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAqoRsdJxx1zaAMFQWG3XV9Y3M3xYV1gTcU3MryCZywfa:  * [/ip4/182.131.4.195/tcp/32800] dial tcp4 0.0.0.0:42459->182.131.4.195:32800: i/o timeout
  f0241858: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJSvDxbJwLug8oodE1ey4GqNTVxyx6eK4hrxc1Z78vsCj:  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip4/10.3.2.60/tcp/23450] dial tcp4 0.0.0.0:42459->10.3.2.60:23450: i/o timeout  * [/ip4/220.176.125.252/tcp/2140] dial tcp4 0.0.0.0:42459->220.176.125.252:2140: i/o timeout  * [/ip4/220.176.125.200/tcp/23450] dial tcp4 0.0.0.0:42459->220.176.125.200:23450: i/o timeout
  f0242156: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0242373: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0242420: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0349810: 'fail, China, Qinzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0364957: 'fail, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBRSL9mjeNuJik2K9Q7nbKMBvnNbDgTNDU36bdcYFxbTp:  * [/ip4/47.108.169.79/tcp/13794] dial tcp4 0.0.0.0:42459->47.108.169.79:13794: i/o timeout
  f0377277: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391143: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCrfXDoBNAZPKoEuWtpzjjQL6L2PskNcFbzsMNDAyJeTT:  * [/ip4/47.119.133.19/tcp/43812] dial tcp4 0.0.0.0:42459->47.119.133.19:43812: i/o timeout
  f0391212: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391214: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391235: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391381: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391439: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392194: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392430: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392458: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392488: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392785: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392799: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR7WJ7MStK5W1vv7eEVxuzCYdUHZfoARfBVwogkszfteE:  * [/ip4/172.16.35.3/tcp/6789] dial tcp4 0.0.0.0:42459->172.16.35.3:6789: i/o timeout
  f0392813: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKQa9PSaH2wWh1e8SVvDNtCVrcL1nSVWeE582bmDETeku:  * [/ip4/172.16.35.25/tcp/6789] dial tcp4 0.0.0.0:42459->172.16.35.25:6789: i/o timeout
  f0392924: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392959: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392980: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392992: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGmQYeDiZRhAMBdmV36spYQGYLbzA11dsHYz2eXkj93Em:  * [/ip4/10.34.1.4/tcp/6789] dial tcp4 0.0.0.0:42459->10.34.1.4:6789: i/o timeout
  f0393016: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLGRUEmvdGKCi9AkHN4UbhRiubs9p1hrNCWMbyNEZNHBg:  * [/ip4/34.66.95.149/tcp/1024] dial tcp4 0.0.0.0:42459->34.66.95.149:1024: i/o timeout
  f0393119: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNnobNqKiP2pSc5fA1c9BuR9G1kwPayN51ixrHeovVnWv:  * [/ip4/172.16.35.5/tcp/6789] dial tcp4 0.0.0.0:42459->172.16.35.5:6789: i/o timeout
  f0393135: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0393417: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0394102: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0395680: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0395994: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHVvLeZq9iYKhwr1cNmZ82ayqNcSyXzcUWQ278dxvf2NE:  * [/ip4/211.47.48.42/tcp/16985] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHVvLeZq9iYKhwr1cNmZ82ayqNcSyXzcUWQ278dxvf2NE, but remote key matches 12D3KooWEnX5enYTc76FpuVsSxKgqCQp3reKywzRchfyzcW7yEdv
  f0396149: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396217: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396422: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396452: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396473: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396684: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWB56xjEygUqCZXrPUYdkwwHLUUnRGf1f2bKh6RtcQG1PB:  * [/ip4/112.48.155.114/tcp/63553] dial tcp4 0.0.0.0:42459->112.48.155.114:63553: i/o timeout  * [/ip4/125.77.198.235/tcp/26686] dial tcp4 0.0.0.0:42459->125.77.198.235:26686: i/o timeout  * [/ip4/125.77.198.234/tcp/26686] dial tcp4 0.0.0.0:42459->125.77.198.234:26686: i/o timeout  * [/ip4/127.0.0.1/tcp/14071] dial tcp4 127.0.0.1:14071: connect: connection refused  * [/ip6/::1/tcp/31081] dial tcp6 [::1]:31081: connect: connection refused  * [/ip4/10.1.17.74/tcp/14071] dial tcp4 0.0.0.0:42459->10.1.17.74:14071: i/o timeout  * [/ip4/125.77.198.234/tcp/63553] dial tcp4 0.0.0.0:42459->125.77.198.234:63553: i/o timeout  * [/ip4/112.48.155.114/tcp/26686] dial tcp4 0.0.0.0:42459->112.48.155.114:26686: i/o timeout  * [/ip4/125.77.198.235/tcp/63553] dial tcp4 0.0.0.0:42459->125.77.198.235:63553: i/o timeout
  f0396705: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAEUk1o8Ab4EHfKthgDj9DkQ9iweLuMFoJ3SovHcqNNED:  * [/ip4/127.0.0.1/tcp/39829] dial tcp4 127.0.0.1:39829: connect: connection refused  * [/ip6/::1/tcp/45769] dial tcp6 [::1]:45769: connect: connection refused  * [/ip4/192.168.2.44/tcp/39829] dial tcp4 0.0.0.0:42459->192.168.2.44:39829: i/o timeout  * [/ip4/113.110.202.203/tcp/57101] dial tcp4 0.0.0.0:42459->113.110.202.203:57101: i/o timeout  * [/ip4/113.110.202.203/tcp/35728] dial tcp4 0.0.0.0:42459->113.110.202.203:35728: i/o timeout
  f0396751: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0396846: 'fail, China, Zhongshan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJLaZCfWGiuPKvkjmpgqegkHreQfLGeBjHfcC3ScYiZWA:  * [/ip4/116.6.131.194/tcp/24001] dial tcp4 0.0.0.0:42459->116.6.131.194:24001: i/o timeout
  f0397083: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0397332: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0397561: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0397794: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0397802: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDyvRhacwk9pL7Kg7LL2So7ar2Mdsd4rmJjbkPMLsXaoG:  * [/ip4/182.150.55.9/tcp/55009] dial tcp4 0.0.0.0:42459->182.150.55.9:55009: i/o timeout
  f0397837: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEratU2MQneMbEAL9o8kdXcRxM5RyQpU5wPsivnmJUVFa:  * [/ip4/220.176.125.252/tcp/23450] dial tcp4 0.0.0.0:42459->220.176.125.252:23450: i/o timeout
  f0397855: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNk5EwECxDM8EVbyKPy3qkiotJiZ4wdtFvKjpfqtSD439:  * [/ip4/127.0.0.1/tcp/36517] dial tcp4 127.0.0.1:36517: connect: connection refused  * [/ip6/::1/tcp/45441] dial tcp6 [::1]:45441: connect: connection refused  * [/ip4/172.18.87.146/tcp/36517] dial tcp4 0.0.0.0:42459->172.18.87.146:36517: i/o timeout  * [/ip4/36.189.234.202/tcp/60428] dial tcp4 0.0.0.0:42459->36.189.234.202:60428: i/o timeout  * [/ip4/36.189.234.202/tcp/61119] dial tcp4 0.0.0.0:42459->36.189.234.202:61119: i/o timeout
  f0398286: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0398999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399111: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399319: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399320: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399321: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399322: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399323: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399342: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399343: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399346: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399348: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399610: 'fail, Ukraine', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKsV4rQVD5wmMrWWhVA44iSPc2rmGViqtFhGv5N8q4MbE:  * [/ip4/94.131.250.53/tcp/24001] dial tcp4 94.131.250.53:24001: connect: connection refused
  f0399743: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399765: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399996: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0400264: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0400307: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWN3wNopyr2kSic3t6TaAPAsRGF9FU5jdeGDzKDmX1qH1Y:  * [/ip4/101.227.175.10/tcp/31347] dial tcp4 0.0.0.0:42459->101.227.175.10:31347: i/o timeout
  f0400644: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0401135: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWReHx8VP7DGdT7byAAUgKzq294hCbZohng4jHVkMWe5dK:  * [/ip4/193.166.11.57/tcp/1125] dial tcp4 0.0.0.0:42459->193.166.11.57:1125: i/o timeout
  f0401287: 'fail, China, Yibin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0401677: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ6DSmJ3CGGoaCQ5VLGctBfPZ9GzeQsvgJhoYerP12h4u:  * [/ip4/127.0.0.1/tcp/33955] dial tcp4 127.0.0.1:33955: connect: connection refused  * [/ip6/::1/tcp/37431] dial tcp6 [::1]:37431: connect: connection refused  * [/ip4/192.168.0.10/tcp/33955] dial tcp4 0.0.0.0:42459->192.168.0.10:33955: i/o timeout  * [/ip4/100.64.148.215/tcp/49836] dial tcp4 0.0.0.0:42459->100.64.148.215:49836: i/o timeout  * [/ip4/100.64.148.215/tcp/15687] dial tcp4 0.0.0.0:42459->100.64.148.215:15687: i/o timeout  * [/ip4/183.237.144.66/tcp/49836] dial tcp4 0.0.0.0:42459->183.237.144.66:49836: i/o timeout  * [/ip4/183.237.144.66/tcp/33955] dial tcp4 0.0.0.0:42459->183.237.144.66:33955: i/o timeout  * [/ip4/113.73.6.2/tcp/49836] dial tcp4 0.0.0.0:42459->113.73.6.2:49836: i/o timeout
  f0402233: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0402371: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSz2rVrq87ocp4BpzZaK8mQQXCJ8tJB8thUb9vDnMc52q:  * [/ip4/192.188.175.125/tcp/1241] dial tcp4 0.0.0.0:42459->192.188.175.125:1241: i/o timeout
  f0402431: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0402661: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0402822: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0403050: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0403177: 'fail, China, Huizhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEtHZTncBEZwW3ZHn5pD9FVgsS3uhJgVqDzZ1zETEH7G2:  * [/ip4/183.234.76.13/tcp/24001] dial tcp4 0.0.0.0:42459->183.234.76.13:24001: i/o timeout
  f0403529: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0404193: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGh4tLX6PS8FCvN7uxNCzRqrtJLhLe5oyqSb7ZURwPcNW:  * [/ip4/127.0.0.1/tcp/33443] dial tcp4 127.0.0.1:33443: connect: connection refused  * [/ip4/172.16.18.1/tcp/33443] dial tcp4 0.0.0.0:42459->172.16.18.1:33443: i/o timeout  * [/ip4/119.147.149.158/tcp/33443] dial tcp4 0.0.0.0:42459->119.147.149.158:33443: i/o timeout
  f0404643: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0406475: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0406478: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0406533: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0407244: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0407287: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0407410: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0407733: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMfqyyWZPU7rfHcz34FtBJbZgWWHQayBPmSQNUugJcEB3:  * [/ip4/172.18.41.11/tcp/10241] dial tcp4 0.0.0.0:42459->172.18.41.11:10241: i/o timeout
  f0408205: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408206: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408208: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408582: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408629: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408688: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408833: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0409069: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNWZUFEbG5op5rVqYwkJn1utWZ3wVeGtc6VDCoRcwSsLu:  * [/ip4/10.2.6.207/tcp/35228] dial tcp4 0.0.0.0:42459->10.2.6.207:35228: i/o timeout  * [/ip4/183.36.17.109/tcp/35228] dial tcp4 0.0.0.0:42459->183.36.17.109:35228: i/o timeout
  f0409172: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEdvErGEyk7iwpMnJdJkWhBXjVSqKX8WgNHTWasbiwsiQ:  * [/ip4/172.20.100.36/tcp/10241] dial tcp4 0.0.0.0:42459->172.20.100.36:10241: i/o timeout
  f0409272: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0409399: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0409499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0409600: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0409765: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHxyPHrAkS9efNrzaTpaNeZt8gPAy91zAJ24WQAeSeFn9:  * [/ip4/127.0.0.1/tcp/35627] dial tcp4 127.0.0.1:35627: connect: connection refused  * [/ip6/::1/tcp/37539] dial tcp6 [::1]:37539: connect: connection refused  * [/ip4/172.18.104.16/tcp/35627] dial tcp4 0.0.0.0:42459->172.18.104.16:35627: i/o timeout  * [/ip4/36.189.234.218/tcp/63852] dial tcp4 0.0.0.0:42459->36.189.234.218:63852: i/o timeout  * [/ip4/36.189.234.218/tcp/64161] dial tcp4 0.0.0.0:42459->36.189.234.218:64161: i/o timeout
  f0410120: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410180: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410242: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410319: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410431: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410701: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJYiiadQzba8cFoMfsaRxZWTQ48dL92aV22HXLYYgsfZ1:  * [/ip4/61.240.206.187/tcp/3346] dial tcp4 0.0.0.0:42459->61.240.206.187:3346: i/o timeout
  f0410941: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0411314: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0411877: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0413050: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0413323: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0413419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0413456: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0413684: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJpvHZzM6ZS7VQjQSLPrZoeXCeN2cVX3Aox1PLi2CQfcv:  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/45.119.63.20/tcp/23450] dial tcp4 0.0.0.0:42459->45.119.63.20:23450: i/o timeout
  f0413801: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0414383: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0417133: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0417720: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0417748: 'delist, China, Changsha', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0417750: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0417767: 'fail, China, Zhangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNnAySB63bGboYTkaYdaXt47gZTEwonC83YK6P4ip32Ww:  * [/ip4/127.0.0.1/tcp/24509] dial tcp4 127.0.0.1:24509: connect: connection refused  * [/ip6/::1/tcp/17015] dial tcp6 [::1]:17015: connect: connection refused  * [/ip4/10.1.2.83/tcp/24509] dial tcp4 0.0.0.0:42459->10.1.2.83:24509: i/o timeout  * [/ip4/183.134.62.2/tcp/63783] dial tcp4 0.0.0.0:42459->183.134.62.2:63783: i/o timeout  * [/ip4/183.134.62.2/tcp/65343] dial tcp4 0.0.0.0:42459->183.134.62.2:65343: i/o timeout
  f0417826: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0417893: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEyV9KBtdufrotKxpXCVHCSVRe4BJeFwmPpVCN5yW3dVq:  * [/ip4/10.1.17.81/tcp/16227] dial tcp4 0.0.0.0:42459->10.1.17.81:16227: i/o timeout  * [/ip4/125.77.198.234/tcp/63932] dial tcp4 0.0.0.0:42459->125.77.198.234:63932: i/o timeout  * [/ip4/112.48.155.114/tcp/13160] dial tcp4 0.0.0.0:42459->112.48.155.114:13160: i/o timeout  * [/ip4/112.48.155.114/tcp/63932] dial tcp4 0.0.0.0:42459->112.48.155.114:63932: i/o timeout  * [/ip4/125.77.198.234/tcp/13160] dial tcp4 0.0.0.0:42459->125.77.198.234:13160: i/o timeout  * [/ip4/125.77.198.235/tcp/63932] dial tcp4 0.0.0.0:42459->125.77.198.235:63932: i/o timeout  * [/ip4/125.77.198.235/tcp/13160] dial tcp4 0.0.0.0:42459->125.77.198.235:13160: i/o timeout  * [/ip6/::1/tcp/27277] dial tcp6 [::1]:27277: connect: connection refused  * [/ip4/127.0.0.1/tcp/16227] dial tcp4 127.0.0.1:16227: connect: connection refused
  f0417918: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRrMWMdmPMSTsL1bYq2RWAeQLeBsoxYJoN9aR95E9A18m:  * [/ip4/127.0.0.1/tcp/12731] dial tcp4 127.0.0.1:12731: connect: connection refused  * [/ip6/::1/tcp/9983] dial tcp6 [::1]:9983: connect: connection refused  * [/ip4/10.1.2.94/tcp/12731] dial tcp4 0.0.0.0:42459->10.1.2.94:12731: i/o timeout  * [/ip4/183.134.62.2/tcp/52949] dial tcp4 0.0.0.0:42459->183.134.62.2:52949: i/o timeout  * [/ip4/183.134.62.2/tcp/17273] dial tcp4 0.0.0.0:42459->183.134.62.2:17273: i/o timeout
  f0418086: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWP5VxNssfCKZy2Hv8CEbbVbuDni7Rqw6LVsuRWpYjSLoC:  * [/ip4/10.155.8.31/tcp/32759] dial tcp4 0.0.0.0:42459->10.155.8.31:32759: i/o timeout
  f0418652: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419311: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419331: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419414: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419510: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419662: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419944: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419945: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBzsbHafdeXwkHyjRSapH5gQvgCVGmFT9auBsBgyC1KSM:  * [/ip4/115.236.22.226/tcp/24001] dial tcp4 0.0.0.0:42459->115.236.22.226:24001: i/o timeout
  f0420189: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0420508: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0421061: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0421387: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0421858: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0422229: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0422266: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAikAHtM6w5s7qqBarGmk7pt5i84Pc6aubiWFwAi8QLLU:  * [/ip4/10.177.5.31/tcp/32759] dial tcp4 0.0.0.0:42459->10.177.5.31:32759: i/o timeout
  f0423050: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0423057: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0423329: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0424761: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0424837: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0425447: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0426933: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0427688: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0427839: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0427975: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0427989: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0428075: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0428184: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0428306: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0428661: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0429063: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAuYNMj4P9cHtrXJHv66TLyW8UAdvYXriwKiXv3d2cWE9:  * [/ip4/8.209.65.6/tcp/30131] failed to negotiate security protocol: EOF
  f0429122: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRbKygHT21v5Ve2pNUwY21r2ssr53CNphbBzhcL8EDS4z:  * [/ip4/172.18.42.22/tcp/10241] dial tcp4 0.0.0.0:42459->172.18.42.22:10241: i/o timeout
  f0430101: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0431665: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0432235: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432329: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432345: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432375: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432382: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432570: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432594: 'fail, China, Zhengzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRnHrmBbAN4hh5u8z6AR1Y1myMewEMryUDvpNAFucLCPP:  * [/ip4/10.80.63.1/tcp/10382] dial tcp4 0.0.0.0:42459->10.80.63.1:10382: i/o timeout  * [/ip4/123.6.90.13/tcp/10382] dial tcp4 0.0.0.0:42459->123.6.90.13:10382: i/o timeout
  f0432661: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432773: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0433688: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0433689: 'fail, China, Wuxi', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSDdYo1KhgfrJ1cxXQjiCZDD6D9ECYpzVvNT6WyHXQY6v:  * [/ip4/58.215.166.46/tcp/23458] dial tcp4 0.0.0.0:42459->58.215.166.46:23458: i/o timeout
  f0433690: 'fail, China, Wuxi', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCDWdDuJPjgGKjoKeFa3Hax9fZkzsVSjD7rUmgeuiedmN:  * [/ip4/43.231.147.212/tcp/23458] dial tcp4 0.0.0.0:42459->43.231.147.212:23458: i/o timeout
  f0433691: 'fail, China, Wuxi', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG3azqiHCsEbxs5icwWvh6PfF9gFRKLkgkbUCG4NbYQh5:  * [/ip4/43.231.147.214/tcp/23458] dial tcp4 0.0.0.0:42459->43.231.147.214:23458: i/o timeout
  f0433892: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0434411: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0435140: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLPo6bJJ2mzLWc8kXHfYyYcNBVhSYG6MtmNLWJQLpeAeS:  * [/ip4/58.220.66.161/tcp/1024] dial tcp4 0.0.0.0:42459->58.220.66.161:1024: i/o timeout
  f0435971: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0436065: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0436454: 'fail, China, Wuxi', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0436661: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0437158: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0437246: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK2ECyHbkYp3Xi2BtAauN98YrxecuAH7cGrUbWtmTschv:  * [/ip4/202.75.217.227/tcp/24001] dial tcp4 0.0.0.0:42459->202.75.217.227:24001: i/o timeout
  f0440919: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441020: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441116: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441225: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441240: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441372: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441525: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441699: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441703: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442370: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442371: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442374: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442375: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442376: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442383: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPezoBtgHhfwqcUj1mJX9FbodKDxjNfJbFSWUz2emkfgy:  * [/ip4/10.5.101.10/tcp/12288] dial tcp4 0.0.0.0:42459->10.5.101.10:12288: i/o timeout
  f0442550: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442670: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442671: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442672: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0443179: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0443180: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0443184: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0443185: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0443303: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0443480: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0447106: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0447181: 'fail, China, Zibo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCM1UhdpqExE5tHFjnw2wnZvrF5M4t7qMsCPdTsvRzSGy:  * [/ip4/218.201.173.82/tcp/24002] dial tcp4 0.0.0.0:42459->218.201.173.82:24002: i/o timeout
  f0447651: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0448660: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0449196: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHhPKPao7CN3wPqnKmaiPUxJjF53KkcxWwdNJNehtEZV3:  * [/ip4/172.18.42.24/tcp/10241] dial tcp4 0.0.0.0:42459->172.18.42.24:10241: i/o timeout
  f0449296: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0449662: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCM7N19pLyntpy2hw3LgvBHVZFdq6WEjsD1kv9cRbBPdY:  * [/ip6/::1/tcp/34077] dial tcp6 [::1]:34077: connect: connection refused  * [/ip4/127.0.0.1/tcp/37613] dial tcp4 127.0.0.1:37613: connect: connection refused  * [/ip4/172.18.82.176/tcp/37613] dial tcp4 0.0.0.0:42459->172.18.82.176:37613: i/o timeout  * [/ip4/36.189.234.187/tcp/63377] dial tcp4 0.0.0.0:42459->36.189.234.187:63377: i/o timeout  * [/ip4/36.189.234.187/tcp/60654] dial tcp4 0.0.0.0:42459->36.189.234.187:60654: i/o timeout
  f0450959: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0451341: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0451936: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0452303: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0452808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0454186: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0455968: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0456374: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRx1xMyYTu9xoXjR5r2Sq49AL3tqtqtZH9aLZ9khmZDRo:  * [/ip4/182.18.86.35/tcp/42000] dial tcp4 0.0.0.0:42459->182.18.86.35:42000: i/o timeout
  f0456741: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAkq6pj71YqpfEnpzSMLX5df34btVysvDH7fugvoLARkE:  * [/ip4/172.18.49.86/tcp/38253] dial tcp4 0.0.0.0:42459->172.18.49.86:38253: i/o timeout  * [/ip4/36.189.234.146/tcp/63783] dial tcp4 0.0.0.0:42459->36.189.234.146:63783: i/o timeout  * [/ip4/36.189.234.146/tcp/49274] dial tcp4 0.0.0.0:42459->36.189.234.146:49274: i/o timeout  * [/ip6/::1/tcp/39405] dial tcp6 [::1]:39405: connect: connection refused  * [/ip4/127.0.0.1/tcp/38253] dial tcp4 127.0.0.1:38253: connect: connection refused
  f0457168: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0459325: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0460078: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0460660: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0461612: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0461752: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBD9MPB7DCbhUpMLruhF9MieYsDGmDuC6ndXpbngoCTeC:  * [/ip4/36.189.234.182/tcp/62372] dial tcp4 0.0.0.0:42459->36.189.234.182:62372: i/o timeout  * [/ip4/36.189.234.182/tcp/49826] dial tcp4 0.0.0.0:42459->36.189.234.182:49826: i/o timeout  * [/ip4/127.0.0.1/tcp/38209] dial tcp4 127.0.0.1:38209: connect: connection refused  * [/ip6/::1/tcp/39933] dial tcp6 [::1]:39933: connect: connection refused  * [/ip4/172.18.55.86/tcp/38209] dial tcp4 0.0.0.0:42459->172.18.55.86:38209: i/o timeout
  f0461779: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0463030: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0463143: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRUwBc1mJ4V7YkV6oaLDS83sgXiEzGUZUDihJcTitzYVd:  * [/ip4/10.2.6.220/tcp/41188] dial tcp4 0.0.0.0:42459->10.2.6.220:41188: i/o timeout  * [/ip4/183.36.17.113/tcp/41188] dial tcp4 0.0.0.0:42459->183.36.17.113:41188: i/o timeout
  f0463184: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0464884: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0465286: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0465477: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0465677: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0465993: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0466405: 'fail, Germany, Niederaula', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPdzsAN3aiWo48D6sjbp2tiDC9bvBK4ByQ4NFvv1mYsZL:  * [/ip4/212.102.118.102/tcp/20036] dial tcp4 0.0.0.0:42459->212.102.118.102:20036: i/o timeout
  f0466426: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0466990: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0467640: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0467809: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0468210: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0468966: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0469055: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0469168: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEY729nU5BMpECoAd5z1wqF3SNN3D9pw8Ci4Tvux7PsR2:  * [/ip4/10.30.3.121/tcp/48867] dial tcp4 0.0.0.0:42459->10.30.3.121:48867: i/o timeout  * [/ip4/125.77.194.121/tcp/48867] dial tcp4 0.0.0.0:42459->125.77.194.121:48867: i/o timeout
  f0469578: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0469959: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0470182: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0470608: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0470972: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWB29ZFfhwUfiFkd8Nr2VNLZMGvSZYbKoQmjBbo4PJU5Ky:  * [/ip4/103.98.220.101/tcp/28881] dial tcp4 0.0.0.0:42459->103.98.220.101:28881: i/o timeout  * [/ip4/113.31.97.18/tcp/28881] dial tcp4 0.0.0.0:42459->113.31.97.18:28881: i/o timeout
  f0471007: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0471691: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0472061: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0472720: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0472863: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0473113: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0473677: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0473956: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0475095: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0475305: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0475664: 'fail, China, Zhejiang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0478563: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0478837: 'fail, China, Zhangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKa5KBqAyWb39AFh9LmjJi3FqpVj3ZWFu78EtrnTZuXDK:  * [/ip4/127.0.0.1/tcp/20001] dial tcp4 127.0.0.1:20001: connect: connection refused  * [/ip6/::1/tcp/20001] dial tcp6 [::1]:20001: connect: connection refused  * [/ip4/192.168.31.80/tcp/20001] dial tcp4 0.0.0.0:42459->192.168.31.80:20001: i/o timeout  * [/ip4/59.60.141.49/tcp/20001] dial tcp4 0.0.0.0:42459->59.60.141.49:20001: i/o timeout
  f0479677: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0480195: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0480313: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0480936: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0480944: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0481938: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0482494: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0483206: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0484990: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0485876: 'fail, China, Changchun', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0486952: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0487097: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0487098: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0488215: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0488689: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0488733: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0488851: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0488887: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0488888: 'fail, China, Nanchang', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0488889: 'fail, China, Nanchang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ2q5Dm7bdpPnrRfEkjvEMCwxK8Cpy7Xj5YmmrFEBTnf6:  * [/ip4/116.163.35.68/tcp/3346] dial tcp4 0.0.0.0:42459->116.163.35.68:3346: i/o timeout
  f0491919: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0492009: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0492360: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE4wo5y4tNUF7KCBTMEWHYYewyrhHgzeGd3XhHJt8HrJk:  * [/ip4/103.100.62.152/tcp/51702] failed to negotiate security protocol: read tcp4 144.217.11.204:42459->103.100.62.152:51702: read: connection reset by peer
  f0492474: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0492601: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0492737: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0493237: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0494268: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0494603: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0494733: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0494841: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA9u2uXpwwwpryFSfxxRXPKZZhQxruKDrA2RSzjYE4Wgy:  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/120.232.253.205/tcp/23450] dial tcp4 0.0.0.0:42459->120.232.253.205:23450: i/o timeout
  f0495421: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEAJqbaqoNNK4uizoWzghEUhGK7hwmfaXswCKhgL6LF5k:  * [/ip6/::1/tcp/20007] dial tcp6 [::1]:20007: connect: connection refused  * [/ip4/127.0.0.1/tcp/20007] dial tcp4 127.0.0.1:20007: connect: connection refused  * [/ip6/240e:37a:5ab2:2a00::525/tcp/20007] dial tcp6 [240e:37a:5ab2:2a00::525]:20007: connect: network is unreachable  * [/ip4/10.0.0.3/tcp/20007] dial tcp4 0.0.0.0:42459->10.0.0.3:20007: i/o timeout  * [/ip4/59.60.141.49/tcp/20007] dial tcp4 0.0.0.0:42459->59.60.141.49:20007: i/o timeout
  f0496068: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0496897: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0497031: 'fail, China, Shangrao', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0497254: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0497636: 'fail, China, Harbin', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEwmdbv9vkcdMHk2mw621fKY9V1Ve3L425RwBwmNpyK2h:  * [/ip4/123.166.135.30/tcp/26635] dial tcp4 0.0.0.0:42459->123.166.135.30:26635: i/o timeout
  f0497771: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0498868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0500003: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0500685: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0500878: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0501283: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0501662: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0502198: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0502948: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0503010: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0503287: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0503420: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0503494: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0504054: 'fail, China, Luzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNVByDRdngT7Dn8aGLwf2XDtx8tDpzgftZvRtVk8nuQwD:  * [/ip6/::1/tcp/36815] dial tcp6 [::1]:36815: connect: connection refused  * [/ip4/127.0.0.1/tcp/44789] dial tcp4 127.0.0.1:44789: connect: connection refused  * [/ip4/10.0.0.5/tcp/44789] dial tcp4 0.0.0.0:42459->10.0.0.5:44789: i/o timeout  * [/ip4/192.168.0.111/tcp/41157] dial tcp4 0.0.0.0:42459->192.168.0.111:41157: i/o timeout  * [/ip4/192.168.0.111/tcp/54942] dial tcp4 0.0.0.0:42459->192.168.0.111:54942: i/o timeout  * [/ip4/218.2.20.246/tcp/41157] dial tcp4 0.0.0.0:42459->218.2.20.246:41157: i/o timeout  * [/ip4/218.2.20.246/tcp/54942] dial tcp4 0.0.0.0:42459->218.2.20.246:54942: i/o timeout
  f0504097: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0504929: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0504985: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0505001: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0505110: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0505593: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0506630: 'fail, China, Linyi', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAbKEcHLWGs66jR818bSxuZTpCabn1ecF2s4u3kUy8bJr:  * [/ip4/222.174.187.42/tcp/20111] dial tcp4 0.0.0.0:42459->222.174.187.42:20111: i/o timeout
  f0506800: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0507913: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0508328: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRYNizkRTsja2Jn6Gssv4gkoc9yB32vpn5K7tMTFXZhvA:  * [/ip4/8.209.65.6/tcp/30132] failed to negotiate security protocol: EOF
  f0508622: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0508892: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0509062: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0509980: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0509981: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0510701: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0510957: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0511070: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0511318: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0511385: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0511732: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0512066: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0512693: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0513685: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0513878: 'fail, China, Guizhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDHZM8bVgH6tk51A2v7v8gVJk5ZrHC6pR2FufD4pjsoqZ:  * [/ip4/10.3.6.13/tcp/36246] dial tcp4 0.0.0.0:42459->10.3.6.13:36246: i/o timeout  * [/ip4/103.90.153.199/tcp/36246] dial tcp4 0.0.0.0:42459->103.90.153.199:36246: i/o timeout
  f0514000: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0514235: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0514241: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGAGSr5AhezoqmJgVyji8jHaCGg4iMvrUwbo9mTH7qjRG:  * [/ip4/210.126.6.13/tcp/55037] failed to negotiate security protocol: read tcp4 144.217.11.204:42459->210.126.6.13:55037: read: connection reset by peer
  f0515264: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0515360: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0515389: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0515461: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0515626: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRXsoLv5SA7YhLdgMbL3L45tQnkMnfkmWdLnfLnDrG4dr:  * [/ip4/10.155.8.115/tcp/32759] dial tcp4 0.0.0.0:42459->10.155.8.115:32759: i/o timeout
  f0515674: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0517213: 'fail, China, Guangdong + Argentina, La Plata', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDwKER9YWYF9xEUFudYZZYQWpHH51BYaGj8fXHhogDTfS:  * [/ip4/39.108.50.108/tcp/14567] dial tcp4 0.0.0.0:42459->39.108.50.108:14567: i/o timeout  * [/ip4/186.22.12.238/tcp/3324] dial tcp4 0.0.0.0:42459->186.22.12.238:3324: i/o timeout
  f0517655: 'fail, Korea, Gwangju', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFJm5NeNhiQL4htxCSBKsgB7uS3TZ2dZff5YNeQ1n6uFy:  * [/ip4/121.179.79.12/tcp/55000] failed to negotiate security protocol: read tcp4 144.217.11.204:42459->121.179.79.12:55000: read: connection reset by peer
  f0518668: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0518713: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0518877: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEsYS8btFfzpTZ4T56BVtHQLdJ9SdnvdQi93dPsXTWvuQ:  * [/ip4/127.0.0.1/tcp/45995] dial tcp4 127.0.0.1:45995: connect: connection refused  * [/ip6/::1/tcp/43961] dial tcp6 [::1]:43961: connect: connection refused  * [/ip4/172.18.99.106/tcp/45995] dial tcp4 0.0.0.0:42459->172.18.99.106:45995: i/o timeout  * [/ip4/36.189.234.218/tcp/61680] dial tcp4 0.0.0.0:42459->36.189.234.218:61680: i/o timeout  * [/ip4/36.189.234.218/tcp/64404] dial tcp4 0.0.0.0:42459->36.189.234.218:64404: i/o timeout
  f0519331: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0519333: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0519376: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0519513: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520262: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520333: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520500: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520520: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520521: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520555: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520688: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0521273: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0521499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0521508: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0521831: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0521884: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0522364: 'fail, China, Beijing + UAE, Al Ain City', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJDSYuKEQeeX4qTLdUZtXFhkHXDdZYaqwAyM2a2FUmTsN:  * [/ip4/8.130.160.30/tcp/14567] dial tcp4 0.0.0.0:42459->8.130.160.30:14567: i/o timeout  * [/ip4/217.165.65.54/tcp/31123] dial tcp4 0.0.0.0:42459->217.165.65.54:31123: i/o timeout
  f0522949: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRNjKH3ssrh8shWkGx7GfsnYE1W2rH2EvCeEoyoQoHznq:  * [/ip4/8.130.160.113/tcp/14567] dial tcp4 0.0.0.0:42459->8.130.160.113:14567: i/o timeout  * [/ip4/79.103.245.15/tcp/33123] dial tcp4 0.0.0.0:42459->79.103.245.15:33123: i/o timeout
  f0523396: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0523415: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0523711: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0524539: 'fail, Korea, Suwon', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA4s94NLCP2hH1WACPs3mEvTNevq19DV4FXYxgiUBM4RY:  * [/ip4/183.99.217.122/tcp/24001] dial tcp4 183.99.217.122:24001: connect: connection refused
  f0536177: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0567567: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAxwJFoc1j1hb997r73PwZwM5Ese1xxT4MGsy8yPnd2of:  * [/ip6/::1/tcp/34535] dial tcp6 [::1]:34535: connect: connection refused  * [/ip4/127.0.0.1/tcp/36345] dial tcp4 127.0.0.1:36345: connect: connection refused  * [/ip6/::1/tcp/33257] dial tcp6 [::1]:33257: connect: connection refused  * [/ip4/127.0.0.1/tcp/41297] dial tcp4 127.0.0.1:41297: connect: connection refused  * [/ip4/192.168.0.252/tcp/36345] dial tcp4 0.0.0.0:42459->192.168.0.252:36345: i/o timeout  * [/ip4/192.168.0.251/tcp/41297] dial tcp4 0.0.0.0:42459->192.168.0.251:41297: i/o timeout  * [/ip4/39.101.69.34/tcp/41297] dial tcp4 0.0.0.0:42459->39.101.69.34:41297: i/o timeout  * [/ip4/39.101.68.9/tcp/36345] dial tcp4 0.0.0.0:42459->39.101.68.9:36345: i/o timeout
  f0592088: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0601583: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0602011: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0646439: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0652413: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEh3YhzpguoMvDzwuSfkLLC9kiQg63i9J5HiGbdwetJKt:  * [/ip4/127.0.0.1/tcp/42697] dial tcp4 127.0.0.1:42697: connect: connection refused  * [/ip6/::1/tcp/38643] dial tcp6 [::1]:38643: connect: connection refused  * [/ip4/192.168.194.191/tcp/42697] dial tcp4 0.0.0.0:42459->192.168.194.191:42697: i/o timeout  * [/ip4/175.6.25.27/tcp/42697] dial tcp4 0.0.0.0:42459->175.6.25.27:42697: i/o timeout
  f0652414: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0663311: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0665666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0666315: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0669999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRKUbCnxRJgLYebZRDLFuH1qVrWqcWXPJacd1GzwkkiB8:  * [/ip4/127.0.0.1/tcp/33297] dial tcp4 127.0.0.1:33297: connect: connection refused  * [/ip6/::1/tcp/34411] dial tcp6 [::1]:34411: connect: connection refused  * [/ip4/192.168.140.82/tcp/33297] dial tcp4 0.0.0.0:42459->192.168.140.82:33297: i/o timeout  * [/ip4/113.219.198.29/tcp/33297] dial tcp4 0.0.0.0:42459->113.219.198.29:33297: i/o timeout
  f0670491: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0670902: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNYwH4fxwhr2s3r4RsGcdszqGN3TzYVEPiJTpVhEFupR9:  * [/ip4/116.163.35.66/tcp/1239] dial tcp4 0.0.0.0:42459->116.163.35.66:1239: i/o timeout
  f0671368: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0671982: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0672951: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0673613: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0673920: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNqsbphQowDfnYtKjp1qv2HH4AYs7m8uQfFt2RegLJx5X:  * [/ip4/8.209.65.6/tcp/30133] failed to negotiate security protocol: EOF
  f0673990: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0674600: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0674756: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0674889: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0675459: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0675675: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0676048: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKUNuZSpWvjmRhBd2bSeNer6jTSHhRixqL8juX64ZiMXs:  * [/ip6/::1/tcp/38009] dial tcp6 [::1]:38009: connect: connection refused  * [/ip4/127.0.0.1/tcp/36201] dial tcp4 127.0.0.1:36201: connect: connection refused  * [/ip4/192.168.100.1/tcp/36201] dial tcp4 0.0.0.0:42459->192.168.100.1:36201: i/o timeout  * [/ip4/115.236.22.210/tcp/36201] dial tcp4 0.0.0.0:42459->115.236.22.210:36201: i/o timeout
  f0676183: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0676272: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0678781: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0678845: 'fail, China, Zhengzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBn57b7BRdXJybFP8PYRwYYRukBwsxHdiLVEqQBW1mywz:  * [/ip4/172.16.16.12/tcp/11001] dial tcp4 0.0.0.0:42459->172.16.16.12:11001: i/o timeout  * [/ip4/123.6.90.59/tcp/11001] dial tcp4 0.0.0.0:42459->123.6.90.59:11001: i/o timeout
  f0679376: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0680529: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLPu87KQ1m3UKKiKHkdvYbrrWAgaKSif1mkxCX4bkW7o6:  * [/ip4/172.18.42.15/tcp/10241] dial tcp4 0.0.0.0:42459->172.18.42.15:10241: i/o timeout
  f0680677: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0680929: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0680977: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0681063: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0681068: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0682032: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSBp35iwToBkDFKcBjtafn2QbyabmA7ysVVcpNwLqnX9U:  * [/ip4/103.39.230.113/tcp/51105] dial tcp4 0.0.0.0:42459->103.39.230.113:51105: i/o timeout
  f0683965: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0684618: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685007: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685231: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685539: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685706: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685829: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0686816: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0687206: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFpfyn6VsypyaRmLJbYguwStdJtLYtMmyzP7fLKDvxCFe:  * [/ip4/115.238.101.186/tcp/36662] dial tcp4 0.0.0.0:42459->115.238.101.186:36662: i/o timeout
  f0687211: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0688165: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0688935: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0689753: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0689917: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBHVQfvMW1G4pntHVScD1RGYJZ72EmhJpob71hDUQJTZF:  * [/ip4/218.186.29.53/tcp/24001] dial tcp4 0.0.0.0:42459->218.186.29.53:24001: i/o timeout
  f0690459: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJge2NWwFWNdz3LCYkuVL4QSbTRJh3QhYqDinsYEvs4Z4:  * [/ip4/10.80.63.1/tcp/23450] dial tcp4 0.0.0.0:42459->10.80.63.1:23450: i/o timeout  * [/ip4/120.232.253.52/tcp/23450] dial tcp4 0.0.0.0:42459->120.232.253.52:23450: i/o timeout  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused
  f0690736: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0690779: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0691310: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0693008: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0693127: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0693131: 'fail, China, Zhongshan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJ8EeUYpBWppU3WFkU3aAymWD8zSyysr7iGBU7nDdqkXw:  * [/ip4/0.0.0.0/tcp/1024] dial tcp4 0.0.0.0:1024: connect: connection refused
  f0693765: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0693793: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0693817: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0694099: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0694149: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0694172: 'fail, China, Luzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0694232: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0694881: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSTgZTAgYiFGpLcjPcMcrZdNGmZdxvMy3npDgy9D7wxRf:  * [/ip4/202.75.217.195/tcp/24001] dial tcp4 0.0.0.0:42459->202.75.217.195:24001: i/o timeout
  f0694999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0695289: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0697249: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNbvBjyDQDhwk7w6q5gXnTi8DwWf1izgMmA6gcQGZupJJ:  * [/ip6/::1/tcp/40575] dial tcp6 [::1]:40575: connect: connection refused  * [/ip4/127.0.0.1/tcp/43353] dial tcp4 127.0.0.1:43353: connect: connection refused  * [/ip4/121.201.35.107/tcp/43353] dial tcp4 0.0.0.0:42459->121.201.35.107:43353: i/o timeout
  f0697462: 'fail, Korea, Dalseo-gu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0697913: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0698688: 'fail, China, Xinyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGFhWLfQZD8xgY3K4cbDN5aiTLVPy9jADfknj7dEbpCSf:  * [/ip4/183.204.60.235/tcp/24001] dial tcp4 0.0.0.0:42459->183.204.60.235:24001: i/o timeout
  f0699021: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0699115: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0699181: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0700033: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0700207: 'fail, China, Harbin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0700999: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0701056: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0701144: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0702010: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0702377: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0702810: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0703149: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0704898: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0704940: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0704941: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0704966: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0705136: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0705521: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0705704: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCyNUdZN9rmDKBhtzDj1j2uY2WxyZk8UwveosBEt8PLRt:  * [/ip6/::1/tcp/35629] dial tcp6 [::1]:35629: connect: connection refused  * [/ip4/127.0.0.1/tcp/45035] dial tcp4 127.0.0.1:45035: connect: connection refused  * [/ip4/172.18.67.88/tcp/45035] dial tcp4 0.0.0.0:42459->172.18.67.88:45035: i/o timeout  * [/ip4/36.189.234.164/tcp/62759] dial tcp4 0.0.0.0:42459->36.189.234.164:62759: i/o timeout  * [/ip4/36.189.234.164/tcp/61334] dial tcp4 0.0.0.0:42459->36.189.234.164:61334: i/o timeout
  f0705937: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0706206: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0706999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNHh5wxLbNfnGTtqX3N4JoTnj32MoBoPZwLXL4xSPhoRh:  * [/ip4/125.122.66.43/tcp/24001] dial tcp4 0.0.0.0:42459->125.122.66.43:24001: i/o timeout
  f0707159: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0707197: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0707777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0709366: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQbTg2gKLsaHgkN4FJRHNbazUYvNW5SuVTzHabX9fQamr:  * [/ip4/115.236.22.208/tcp/24001] dial tcp4 0.0.0.0:42459->115.236.22.208:24001: i/o timeout
  f0709896: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0711266: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0711289: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0711445: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0712676: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0715209: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0715446: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0715561: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0715639: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJawwpgeKGSYzfuqFEsfUJQBVJbqw35dEshNt4MwnYtHr:  * [/ip4/67.220.90.13/tcp/24001] dial tcp4 0.0.0.0:42459->67.220.90.13:24001: i/o timeout
  f0715904: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0716103: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0716170: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0716283: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0716775: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0717289: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0717905: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0717987: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0718311: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0718313: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0718366: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWN7jQBaHbA2rnpG6vU6tYiiz2jJjiGSjyiTuttdoHSeJe:  * [/ip4/115.238.239.190/tcp/36689] dial tcp4 0.0.0.0:42459->115.238.239.190:36689: i/o timeout
  f0718552: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0718665: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCvx7z6GBmzsfKA5LifPmP6fsegYuUN9Khvq7SeLzXQ4o:  * [/ip6/::1/tcp/33455] dial tcp6 [::1]:33455: connect: connection refused  * [/ip4/127.0.0.1/tcp/33455] dial tcp4 127.0.0.1:33455: connect: connection refused  * [/ip4/125.64.33.8/tcp/33455] dial tcp4 0.0.0.0:42459->125.64.33.8:33455: i/o timeout  * [/ip4/125.64.33.7/tcp/27077] dial tcp4 0.0.0.0:42459->125.64.33.7:27077: i/o timeout
  f0718962: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0719301: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0720629: 'fail, Germany, Berlin', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMxsMCDLR6kqB3LdQKjmNJjJHGjoadEEvvNkMK3NUtycw:  * [/ip4/80.132.230.177/tcp/24001] dial tcp4 0.0.0.0:42459->80.132.230.177:24001: i/o timeout
  f0720785: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0721721: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0722658: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNFDbPY3MpBzEiJcwb6TPasUr6hHibtgnUgwes4badQ24:  * [/ip4/110.191.237.50/tcp/37545] dial tcp4 0.0.0.0:42459->110.191.237.50:37545: i/o timeout
  f0723381: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0723538: 'fail, China, Handan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCdb7C2xNDAh6zbTwPhjL7PF8yZEiq3HDL4otE2HtoUaJ:  * [/ip4/111.62.109.66/tcp/24001] dial tcp4 0.0.0.0:42459->111.62.109.66:24001: i/o timeout
  f0723604: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0723950: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0724023: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0724097: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0724216: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0724728: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0726270: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0726841: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0727962: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0728817: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0729412: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0730266: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRebtbnMVVaYcewMUfiXcmDTH2EFouersFGnPy2dzLX2E:  * [/ip4/127.0.0.1/tcp/38501] dial tcp4 127.0.0.1:38501: connect: connection refused  * [/ip6/::1/tcp/37227] dial tcp6 [::1]:37227: connect: connection refused  * [/ip4/58.144.223.138/tcp/38501] dial tcp4 0.0.0.0:42459->58.144.223.138:38501: i/o timeout
  f0730670: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0730917: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0730942: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0731061: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0731150: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0732272: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWL2n7opE3PS2fxEZeFqc4SCGNfFKKWzG61ijk4gBYboLa:  * [/ip4/172.18.7.146/tcp/2347] dial tcp4 0.0.0.0:42459->172.18.7.146:2347: i/o timeout
  f0732862: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0733242: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0733626: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0733692: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0734053: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0734759: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0735027: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0744093: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0744513: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK18YecHFy5KA9kHu7uY1JYccCcesgKvCXjMgijX66GcY:  * [/ip4/10.9.3.32/tcp/36284] dial tcp4 0.0.0.0:42459->10.9.3.32:36284: i/o timeout  * [/ip4/14.119.111.132/tcp/36284] dial tcp4 0.0.0.0:42459->14.119.111.132:36284: i/o timeout  * [/ip4/14.119.111.133/tcp/36284] dial tcp4 0.0.0.0:42459->14.119.111.133:36284: i/o timeout
  f0744622: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0745068: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0745192: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0746628: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0746945: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0746991: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0747522: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0747617: 'fail, China, Jiangmen', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0747777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0748101: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0748137: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0748179: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0748875: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0750779: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRX6FbL2oWYgNnJE5oHfCZ3JLUsvsySc68depWAqc4QKW:  * [/ip4/221.10.204.238/tcp/55009] dial tcp4 0.0.0.0:42459->221.10.204.238:55009: i/o timeout
  f0751099: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0751450: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0751831: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGTR6KcXHjMoLib2LD48556JJBo3fYRG5SESZ4xeEb3DB:  * [/ip4/115.236.20.75/tcp/36672] dial tcp4 0.0.0.0:42459->115.236.20.75:36672: i/o timeout
  f0752442: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0752620: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0752635: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0753027: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0753055: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAm6wtgW2uRmMKAbrxFCk5fNAzpfZZk2jvB2h934P2Mcw:  * [/ip4/10.13.11.102/tcp/48867] dial tcp4 10.13.11.102:48867: connect: no route to host  * [/ip4/110.80.136.138/tcp/48867] dial tcp4 0.0.0.0:42459->110.80.136.138:48867: i/o timeout
  f0753213: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDQCwWMhtmSLXuuGZFSJE8kniJ8pRoj71QNRtDofGqx47:  * [/ip4/10.17.2.193/tcp/11217] dial tcp4 0.0.0.0:42459->10.17.2.193:11217: i/o timeout  * [/ip4/117.25.158.182/tcp/11217] dial tcp4 0.0.0.0:42459->117.25.158.182:11217: i/o timeout
  f0753228: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0753366: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHTpiHDKuPaa12TskWD5Cqj8QVjnip6K6xrqjMxts8d9Z:  * [/ip4/10.15.11.73/tcp/48867] dial tcp4 0.0.0.0:42459->10.15.11.73:48867: i/o timeout  * [/ip4/110.80.136.142/tcp/48867] dial tcp4 0.0.0.0:42459->110.80.136.142:48867: i/o timeout
  f0753402: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0753569: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGgxrTEHeFze8zKEqKgYBpyXFSHgLnoWazPbE7KfZJEgL:  * [/ip4/120.232.161.130/tcp/24001] dial tcp4 0.0.0.0:42459->120.232.161.130:24001: i/o timeout
  f0753959: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWB8kWpjWFyZJBYPQvbHpcY6Wn3adpny2YfcDuToRvei8Y:  * [/ip4/117.25.158.172/tcp/11267] dial tcp4 0.0.0.0:42459->117.25.158.172:11267: i/o timeout  * [/ip4/10.11.10.23/tcp/11267] dial tcp4 0.0.0.0:42459->10.11.10.23:11267: i/o timeout
  f0754755: 'delist, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0754993: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0755327: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBDuddDsbfvdw7VE261zkJw8MGyJjcJG2jNDZ2GqX499w:  * [/ip4/172.18.42.26/tcp/10241] dial tcp4 0.0.0.0:42459->172.18.42.26:10241: i/o timeout
  f0755650: 'fail, China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPYSXCYBMu8TjB9X5FkD3rJTEBzieZKdor1oUiHWE3oXB:  * [/ip4/27.109.125.86/tcp/42991] dial tcp4 0.0.0.0:42459->27.109.125.86:42991: i/o timeout
  f0756338: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCwPYzAYZWB3QGGtsZ1Wrg8FysMCWQS59RydEtJENC52Q:  * [/ip4/127.0.0.1/tcp/39383] dial tcp4 127.0.0.1:39383: connect: connection refused  * [/ip6/::1/tcp/39071] dial tcp6 [::1]:39071: connect: connection refused  * [/ip4/192.168.45.241/tcp/39383] dial tcp4 0.0.0.0:42459->192.168.45.241:39383: i/o timeout  * [/ip4/36.99.195.114/tcp/10457] dial tcp4 0.0.0.0:42459->36.99.195.114:10457: i/o timeout  * [/ip4/36.99.195.114/tcp/40937] dial tcp4 0.0.0.0:42459->36.99.195.114:40937: i/o timeout
  f0756840: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0757234: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0757610: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0761358: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSXT5p3V55U8MEfSjF9GDSk3DspTFbYu1DM8HeQdJbpd9:  * [/ip4/127.0.0.1/tcp/3727] dial tcp4 127.0.0.1:3727: connect: connection refused  * [/ip6/::1/tcp/23121] dial tcp6 [::1]:23121: connect: connection refused  * [/ip4/183.221.243.6/tcp/3727] dial tcp4 0.0.0.0:42459->183.221.243.6:3727: i/o timeout
  f0761728: 'fail, China, Yichun', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD2XixHrJ5Bfd15CTScnWtHkpdDAb8BZuFtEMZ1cSUmkP:  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/10.60.10.5/tcp/23450] dial tcp4 0.0.0.0:42459->10.60.10.5:23450: i/o timeout  * [/ip4/1.22.134.88/tcp/23450] dial tcp4 0.0.0.0:42459->1.22.134.88:23450: i/o timeout  * [/ip4/58.17.73.47/tcp/23450] dial tcp4 0.0.0.0:42459->58.17.73.47:23450: i/o timeout
  f0763048: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0763082: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0763093: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0764041: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNiwvvgBQb3VnMhtjZMwZ7fWN4MHK7qmeCthh2G7Qat73:  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip4/14.152.85.145/tcp/23450] dial tcp4 0.0.0.0:42459->14.152.85.145:23450: i/o timeout
  f0764901: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0765036: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0765071: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0765173: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0766038: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0766177: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0766622: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0766756: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0772766: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK4ff8GQrbv3vNuW2Zv1JbC5MSaUHT7mzBxJiP9UKXLBV:  * [/ip4/10.9.3.52/tcp/36285] dial tcp4 0.0.0.0:42459->10.9.3.52:36285: i/o timeout  * [/ip4/14.119.111.135/tcp/36285] dial tcp4 0.0.0.0:42459->14.119.111.135:36285: i/o timeout
  f0805343: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805402: 'fail, Korea, Bucheon-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJXhpstx2AEsQihMrP6vWRtbzzVoW89dPShnAraUQF3Fh:  * [/ip4/211.192.248.213/tcp/34001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJXhpstx2AEsQihMrP6vWRtbzzVoW89dPShnAraUQF3Fh, but remote key matches 12D3KooWLwAJ4dZ6H4SjnuwFkKE5GBXsmvG17KmKu3fnkfLZpsZF
  f0805486: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805567: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805612: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805872: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805937: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0806336: 'delist, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0806347: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0806395: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0806758: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0806904: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807382: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDAruwFwpwmoGFZA3GUaj3DHnsgYEKs6ybKCVZe5fEzF6:  * [/ip4/10.0.14.51/tcp/12288] dial tcp4 0.0.0.0:42459->10.0.14.51:12288: i/o timeout
  f0807383: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807384: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807385: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807386: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807387: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807388: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807389: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807390: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807392: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807446: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807472: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807839: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0808701: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0808766: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0809570: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0809927: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0810223: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0811392: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKtXdnT5NJTidK4Ue73cTL78beyMfRDA3A7Aw4HEpuWzW:  * [/ip4/10.80.63.1/tcp/23450] dial tcp4 0.0.0.0:42459->10.80.63.1:23450: i/o timeout  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip4/120.232.253.17/tcp/23450] dial tcp4 0.0.0.0:42459->120.232.253.17:23450: i/o timeout
  f0811662: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0811878: 'delist, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0813061: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0813825: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0813992: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0814012: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR3hrEnki7uCDnBvDE8DpEiPGvnaZKT5xiKxsGEWmJAX1:  * [/ip4/183.129.178.195/tcp/65001] dial tcp4 0.0.0.0:42459->183.129.178.195:65001: i/o timeout
  f0814049: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0814155: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0815838: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0816168: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0818235: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0818428: 'fail, China, Yichang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWB5fTJhsaHNUVALvngbCqcZtfJyJfRaw2YCWwiheqvpeq:  * [/ip4/119.36.140.201/tcp/24001] dial tcp4 0.0.0.0:42459->119.36.140.201:24001: i/o timeout
  f0818625: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0820770: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0821595: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0822151: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0822441: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0822818: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0823127: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0825528: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0826272: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0826566: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0827006: 'fail, China, Xuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSmeoWFST2PAYBtvxhx25Bvg6494EhLxHTkwboKaSD4FZ:  * [/ip4/127.0.0.1/tcp/46363] dial tcp4 127.0.0.1:46363: connect: connection refused  * [/ip6/::1/tcp/46587] dial tcp6 [::1]:46587: connect: connection refused  * [/ip4/221.229.212.122/tcp/46363] dial tcp4 0.0.0.0:42459->221.229.212.122:46363: i/o timeout
  f0828538: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0829506: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0829765: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0829836: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQUpKwc1UPojnyvEdJgG8ni6TTaXarFsgQ7PC9KwkRs8s:  * [/ip4/172.18.42.25/tcp/10241] dial tcp4 0.0.0.0:42459->172.18.42.25:10241: i/o timeout
  f0832131: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQsVz6W83mxyLgWLzj7Rsr7yaL8DDFvQ1x7GMxQ4ZGQNA:  * [/ip4/10.177.5.12/tcp/32759] dial tcp4 0.0.0.0:42459->10.177.5.12:32759: i/o timeout
  f0832373: 'fail, China, Yibin', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAVT8v4SmuYkKQYx1awUr66GFC57L6buHwfejGd7hKwrX:  * [/ip4/127.0.0.1/tcp/34429] dial tcp4 127.0.0.1:34429: connect: connection refused  * [/ip6/::1/tcp/34677] dial tcp6 [::1]:34677: connect: connection refused  * [/ip4/192.168.10.151/tcp/34429] dial tcp4 0.0.0.0:42459->192.168.10.151:34429: i/o timeout  * [/ip4/119.6.225.4/tcp/34429] dial tcp4 0.0.0.0:42459->119.6.225.4:34429: i/o timeout
  f0834841: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0835180: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0835643: 'fail, Korea, Songpa-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ7LhNAWznCtp3gGUcdqpDJz3U9hwonD7YoFqYqNgHnF6:  * [/ip4/121.167.147.110/tcp/24001] dial tcp4 0.0.0.0:42459->121.167.147.110:24001: i/o timeout
  f0836160: 'fail, Korea, Seodaemun-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHwRmkj4Jxfo2YnKJC4YBzTNEGDW6Et4E68r7RYVXk46h:  * [/ip4/211.48.44.88/tcp/24001] dial tcp4 0.0.0.0:42459->211.48.44.88:24001: i/o timeout
  f0836990: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0837056: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0837434: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0839084: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0839133: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0839436: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0839448: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0839509: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQMiZqgduEbqkxN8DD9Pded4g5AfYPgvrUzEr1AjRkT4A:  * [/ip6/::1/tcp/32965] dial tcp6 [::1]:32965: connect: connection refused  * [/ip4/127.0.0.1/tcp/36673] dial tcp4 127.0.0.1:36673: connect: connection refused  * [/ip4/10.0.7.50/tcp/36673] dial tcp4 0.0.0.0:42459->10.0.7.50:36673: i/o timeout  * [/ip4/120.133.229.41/tcp/36673] dial tcp4 0.0.0.0:42459->120.133.229.41:36673: i/o timeout
  f0840040: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0840060: 'fail, China, Changchun', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD31mVVSYZcZegvMVhbAq2R2wogACR26Qbw3r8NnWxJRg:  * [/ip4/127.0.0.1/tcp/33456] dial tcp4 127.0.0.1:33456: connect: connection refused  * [/ip6/::1/tcp/33456] dial tcp6 [::1]:33456: connect: connection refused  * [/ip4/139.215.226.71/tcp/33456] dial tcp4 0.0.0.0:42459->139.215.226.71:33456: i/o timeout
  f0840430: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0841453: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0842171: 'fail, China, Huizhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK8wEwn63hYURv7Gx4Dj2x8ttV2rbE3hBmM6tZ7Aib28R:  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip4/172.16.10.12/tcp/23450] dial tcp4 0.0.0.0:42459->172.16.10.12:23450: i/o timeout  * [/ip4/121.11.216.123/tcp/23450] dial tcp4 0.0.0.0:42459->121.11.216.123:23450: i/o timeout
  f0842266: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0843255: 'fail, China, Yibin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0843558: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0843713: 'fail, China, Shaanxi', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0844271: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0844849: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0844916: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0845186: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0845296: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDiQzhqk1pZWdkcTGHxuUsTkV1cPXW7Hts11CKwgUiccH:  * [/ip4/10.3.0.24/tcp/36666] dial tcp4 0.0.0.0:42459->10.3.0.24:36666: i/o timeout  * [/ip4/14.136.232.51/tcp/36666] dial tcp4 0.0.0.0:42459->14.136.232.51:36666: i/o timeout
  f0845456: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0845528: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0845539: 'delist, Korea, Busan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ57wxjkhKKWTtc7ygshtEmepEpyANbGFq4wN6EjoR5ZD:  * [/ip4/220.84.59.118/tcp/24001] dial tcp4 220.84.59.118:24001: connect: connection refused
  f0845552: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0846191: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0847138: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0848972: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0849079: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0850130: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0851322: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0855056: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0855584: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0856336: 'delist, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0856508: 'fail, China, Taiwan, Taoyuan District', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLSAeUmariCgq3MYgJVQAorZibNzkigxjajsAK8pXBmWp:  * [/ip4/220.135.231.28/tcp/24001] dial tcp4 0.0.0.0:42459->220.135.231.28:24001: i/o timeout
  f0856912: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0857612: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0857798: 'fail, China, Wenzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ5f9mDZ6n4jJm8H47vnnnnf9hGusf4suoX9E3sLuRrtp:  * [/ip4/127.0.0.1/tcp/12345] dial tcp4 127.0.0.1:12345: connect: connection refused  * [/ip6/::1/tcp/32943] dial tcp6 [::1]:32943: connect: connection refused  * [/ip4/61.164.118.134/tcp/12345] dial tcp4 0.0.0.0:42459->61.164.118.134:12345: i/o timeout
  f0858038: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0863013: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0863576: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0866508: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0866966: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0867253: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0867298: 'fail, China, Beijing + Sri Lanka, Rajagiriya', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRJqdX1DwhpeFbXcaL6BZYdVbTabidqxNxYgARuxsnJ4V:  * [/ip4/8.130.48.79/tcp/14567] dial tcp4 0.0.0.0:42459->8.130.48.79:14567: i/o timeout  * [/ip4/175.157.195.89/tcp/31124] dial tcp4 0.0.0.0:42459->175.157.195.89:31124: i/o timeout
  f0867312: 'fail, China, Foshan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHm26YRt24hVWFagAaEufwGC5mtCwkyyhm5Bap7nUhXtq:  * [/ip4/127.0.0.1/tcp/39911] dial tcp4 127.0.0.1:39911: connect: connection refused  * [/ip6/::1/tcp/39609] dial tcp6 [::1]:39609: connect: connection refused  * [/ip4/172.16.10.111/tcp/39911] dial tcp4 0.0.0.0:42459->172.16.10.111:39911: i/o timeout  * [/ip4/183.2.233.10/tcp/41137] dial tcp4 0.0.0.0:42459->183.2.233.10:41137: i/o timeout  * [/ip4/183.2.233.10/tcp/28920] dial tcp4 0.0.0.0:42459->183.2.233.10:28920: i/o timeout
  f0868971: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0870189: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0870333: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0870354: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0870558: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0870973: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0871511: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0871532: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0871546: 'delist, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0871563: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGYN7rCnv6TLMy8SgSewsUcLDvkEuoRxHksDVH9Kkyz2T:  * [/ip4/106.12.254.210/tcp/24001] dial tcp4 0.0.0.0:42459->106.12.254.210:24001: i/o timeout
  f0871719: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0872282: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSoeg31fTc2MtnB7Z7pKPU3dYyA2nMbNwTMcotnyP5T4T:  * [/ip6/::1/tcp/36909] dial tcp6 [::1]:36909: connect: connection refused  * [/ip4/127.0.0.1/tcp/41217] dial tcp4 127.0.0.1:41217: connect: connection refused  * [/ip4/116.31.75.162/tcp/41217] dial tcp4 0.0.0.0:42459->116.31.75.162:41217: i/o timeout  * [/ip4/14.18.234.107/tcp/51448] dial tcp4 0.0.0.0:42459->14.18.234.107:51448: i/o timeout  * [/ip4/14.18.234.107/tcp/48172] dial tcp4 0.0.0.0:42459->14.18.234.107:48172: i/o timeout
  f0873699: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0873874: 'delist, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0874057: 'fail, Korea, Daejeon', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0874231: 'fail, China, Yichun', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBPYVBmAxTfAt5YL9cnM2wg9XkpdVMrwpkXm8XyK5ae1C:  * [/ip4/10.60.10.2/tcp/23450] dial tcp4 0.0.0.0:42459->10.60.10.2:23450: i/o timeout  * [/ip4/58.17.73.44/tcp/23450] dial tcp4 0.0.0.0:42459->58.17.73.44:23450: i/o timeout  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused
  f0876581: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0876800: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0877545: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPJc7oHTUnZsGanc6xLnink4TEbRfTbuxSsRUXvxubwgB:  * [/ip4/101.71.134.198/tcp/24001] dial tcp4 0.0.0.0:42459->101.71.134.198:24001: i/o timeout
  f0878005: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMvJaNQjY4QYnCPz9DG47HyxoMf5vLuYPSsvFupGioT1K:  * [/ip6/::1/tcp/33455] dial tcp6 [::1]:33455: connect: connection refused  * [/ip4/127.0.0.1/tcp/33455] dial tcp4 127.0.0.1:33455: connect: connection refused  * [/ip4/139.215.226.72/tcp/33455] dial tcp4 0.0.0.0:42459->139.215.226.72:33455: i/o timeout
  f0878807: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0879756: 'fail, China, Xinjiang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWExovyDJe6AYz1QB59EH3J8Wm1ezCGxHKvTQpdmKqFFtk:  * [/ip6/::1/tcp/37005] dial tcp6 [::1]:37005: connect: connection refused  * [/ip4/127.0.0.1/tcp/35669] dial tcp4 127.0.0.1:35669: connect: connection refused  * [/ip4/172.18.136.170/tcp/35669] dial tcp4 0.0.0.0:42459->172.18.136.170:35669: i/o timeout  * [/ip4/36.189.235.195/tcp/61585] dial tcp4 0.0.0.0:42459->36.189.235.195:61585: i/o timeout  * [/ip4/36.189.235.195/tcp/62205] dial tcp4 0.0.0.0:42459->36.189.235.195:62205: i/o timeout
  f0881262: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0881281: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0881321: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0881531: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0881687: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0883083: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0883201: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWS4Gz8u5QNswDgUTN2PpTuPx5MxoN8EDV1EVcmwaSG7fD:  * [/ip4/10.21.11.3/tcp/12288] dial tcp4 0.0.0.0:42459->10.21.11.3:12288: i/o timeout
  f0883202: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWStJxgDyCKdCz3epZKQvK79Hway6zSAHTs8PQ886UJX7L:  * [/ip4/10.6.13.219/tcp/12288] dial tcp4 0.0.0.0:42459->10.6.13.219:12288: i/o timeout
  f0883203: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDAvaKfDjfTqoGCGfSpqMDSKGqvoEzqLpmp32ddoUAd1o:  * [/ip4/10.6.13.218/tcp/12288] dial tcp4 0.0.0.0:42459->10.6.13.218:12288: i/o timeout
  f0883205: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWN9oYRgr3YZfpcCqZBbEBfB5D8mSfZcDdppZypVZGRR6u:  * [/ip4/10.21.11.2/tcp/12288] dial tcp4 0.0.0.0:42459->10.21.11.2:12288: i/o timeout
  f0883206: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9rLsooWxKpQCUYuV1zEq3dNCb8AXSifjXfaFEQH77SH1:  * [/ip4/10.0.14.52/tcp/12288] dial tcp4 0.0.0.0:42459->10.0.14.52:12288: i/o timeout
  f0884455: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0884781: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0984905: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01001984: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01002302: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01016255: 'fail, China, Beijing + Norway, Grimstad', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNTn9CHXkZfN4M54x4qnBgjsmzhy9g5kLGQSZCajc1nvd:  * [/ip4/8.130.54.244/tcp/14567] dial tcp4 0.0.0.0:42459->8.130.54.244:14567: i/o timeout  * [/ip4/62.141.128.34/tcp/2436] dial tcp4 0.0.0.0:42459->62.141.128.34:2436: i/o timeout
  f01016365: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE52tw3qkk2PV83StcquS6Tz5pA2Dd97orNoEDGz38Hbt:  * [/ip4/127.0.0.1/tcp/10001] dial tcp4 127.0.0.1:10001: connect: connection refused  * [/ip4/10.10.11.71/tcp/10001] dial tcp4 0.0.0.0:42459->10.10.11.71:10001: i/o timeout  * [/ip4/10.80.63.1/tcp/20577] dial tcp4 0.0.0.0:42459->10.80.63.1:20577: i/o timeout  * [/ip4/122.9.63.95/tcp/10001] dial tcp4 0.0.0.0:42459->122.9.63.95:10001: i/o timeout
  f01016451: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01016806: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01016882: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01017269: 'delist, USA, Fort Lauterdale', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKifDpQWWWJgiZDedWCzL6NC5GZUwJuTDYD9gfw7vyyBd:  * [/ip4/184.105.151.130/tcp/23453] dial tcp4 0.0.0.0:42459->184.105.151.130:23453: i/o timeout
  f01017980: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01019009: 'delist, China, Henan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9z4Q6Q21MRwSSW2ruQkUhw77vednPuQodDZMKu1DktDZ:  * [/ip4/42.236.7.235/tcp/21001] dial tcp4 0.0.0.0:42459->42.236.7.235:21001: i/o timeout  * [/ip4/42.236.7.235/tcp/21000] dial tcp4 0.0.0.0:42459->42.236.7.235:21000: i/o timeout
  f01019391: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01019418: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01019869: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01021204: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01021317: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01021773: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01021898: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01022733: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01023982: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01024317: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01024814: 'fail, USA, Wilson', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01024886: 'fail, China, Wenzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKFNbGDKPkbqFqAs6n6FP9whJHo9m8rFvx2FZyNHxZiG6:  * [/ip4/61.164.118.136/tcp/12345] dial tcp4 0.0.0.0:42459->61.164.118.136:12345: i/o timeout  * [/ip4/127.0.0.1/tcp/12345] dial tcp4 127.0.0.1:12345: connect: connection refused  * [/ip6/::1/tcp/46401] dial tcp6 [::1]:46401: connect: connection refused
  f01025366: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01025778: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE4XrSfuY1dmRecmbyugSdZNR9hsq4go4AtDxP25PBxmm:  * [/ip4/43.243.130.123/tcp/23450] dial tcp4 0.0.0.0:42459->43.243.130.123:23450: i/o timeout
  f01025894: 'fail, China, Zhengzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01026560: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01027747: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01028552: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01028659: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01028902: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01029008: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01030424: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01030435: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01030442: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01031823: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01031867: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01032055: 'delist, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01032314: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01032657: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01032858: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01032903: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01032989: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01033096: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01033390: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01033805: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01033857: 'fail, China, Xinjiang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMmswkQ3PS4UdTnb2eecpouYs8oLMwH5MGRAzjmtShDkR:  * [/ip4/127.0.0.1/tcp/39305] dial tcp4 127.0.0.1:39305: connect: connection refused  * [/ip6/::1/tcp/37067] dial tcp6 [::1]:37067: connect: connection refused  * [/ip4/172.18.133.10/tcp/39305] dial tcp4 0.0.0.0:42459->172.18.133.10:39305: i/o timeout  * [/ip4/36.189.235.196/tcp/49869] dial tcp4 0.0.0.0:42459->36.189.235.196:49869: i/o timeout  * [/ip4/36.189.235.196/tcp/60180] dial tcp4 0.0.0.0:42459->36.189.235.196:60180: i/o timeout
  f01034007: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01035021: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01036920: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01037628: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKwez14JZ5MfmPhNg6Kz1r6grj9iZ6vmU2q5kbivYUco8:  * [/ip4/27.148.248.20/tcp/23450] dial tcp4 0.0.0.0:42459->27.148.248.20:23450: i/o timeout
  f01038099: 'fail, China, Xinjiang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWARG7t3ffALXnjvSTKmj4Jb6UrcTSgebzKBGVrGxJqx8R:  * [/ip6/::1/tcp/34235] dial tcp6 [::1]:34235: connect: connection refused  * [/ip4/127.0.0.1/tcp/33805] dial tcp4 127.0.0.1:33805: connect: connection refused  * [/ip4/172.18.135.10/tcp/33805] dial tcp4 0.0.0.0:42459->172.18.135.10:33805: i/o timeout  * [/ip4/36.189.235.195/tcp/65077] dial tcp4 0.0.0.0:42459->36.189.235.195:65077: i/o timeout  * [/ip4/36.189.235.195/tcp/63598] dial tcp4 0.0.0.0:42459->36.189.235.195:63598: i/o timeout
  f01038189: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01038199: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01038625: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01038663: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01038679: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01038861: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01039327: 'delist, Indonesia, Denpasar', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01039350: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01039576: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01039753: 'fail, China, Suqian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01040516: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01040817: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDCVnKZDF54aTAqEK5T53stLd6T3quBSepb2UJepyNb4a:  * [/ip4/221.163.91.165/tcp/14224] dial tcp4 0.0.0.0:42459->221.163.91.165:14224: i/o timeout
  f01042229: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01042276: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01042409: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01043193: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01043666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01043780: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01044086: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQbH3bY7a8H9nXBXE7MAbzFroAebqTrbX6J6DrSuJDVKW:  * [/ip4/10.3.121.12/tcp/38888] dial tcp4 0.0.0.0:42459->10.3.121.12:38888: i/o timeout  * [/ip4/103.90.153.217/tcp/38888] dial tcp4 0.0.0.0:42459->103.90.153.217:38888: i/o timeout
  f01044297: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01045078: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01045198: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01046069: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01047011: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01048770: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01049102: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01049468: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01049739: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01050158: 'fail, China, Xinjiang', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01050286: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSHfhMwfoCRaVM8DQSEkchPDL5VL8fgQvYcTzpdVkSDfy:  * [/ip4/127.0.0.1/tcp/45395] dial tcp4 127.0.0.1:45395: connect: connection refused  * [/ip6/::1/tcp/40239] dial tcp6 [::1]:40239: connect: connection refused  * [/ip4/121.11.216.189/tcp/45395] dial tcp4 0.0.0.0:42459->121.11.216.189:45395: i/o timeout
  f01050978: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01051178: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01051743: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01052311: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01052556: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01053413: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01054527: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01055821: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01056608: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01057193: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01057303: 'fail, China, Huizhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01059489: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEfoAjwdjUCzKPHdR38zuxnf4Fft3sbLFFz2yFfCdzBqr:  * [/ip4/10.8.102.20/tcp/2233] dial tcp4 0.0.0.0:42459->10.8.102.20:2233: i/o timeout
  f01061547: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSyXUai9q5yrjkpjUGrn1oWt79hPiGx3ixHssPFfvsiK7:  * [/ip4/43.243.130.91/tcp/23450] dial tcp4 0.0.0.0:42459->43.243.130.91:23450: i/o timeout
  f01062232: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01063832: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01063833: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01064991: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01065505: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01065930: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01066009: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01066517: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01067573: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01068111: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01068287: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01068331: 'delist, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01069268: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA8FuXCgssXYSQCTgLbHehxXm2nLJM3ui8bq2cgDxhkMy:  * [/ip4/101.227.109.161/tcp/23450] dial tcp4 0.0.0.0:42459->101.227.109.161:23450: i/o timeout
  f01069894: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01070149: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCPrJpPFTcYNy9iNSErBsHUWuLaVHkvThh1DmcDRt5TYf:  * [/ip4/125.64.33.80/tcp/33167] dial tcp4 0.0.0.0:42459->125.64.33.80:33167: i/o timeout
  f01070158: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01070205: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01070319: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01070395: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01070558: 'fail, China, Jinan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMoEPanL7MCPix7zoooGGBK1yMessTz7YfgtbhCvC7AA2:  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip4/27.148.248.14/tcp/23450] dial tcp4 0.0.0.0:42459->27.148.248.14:23450: i/o timeout  * [/ip4/27.148.248.12/tcp/23450] dial tcp4 0.0.0.0:42459->27.148.248.12:23450: i/o timeout
  f01071282: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01071719: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01071852: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01072221: 'fail, USA, San Diego', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA8T2beAxNyc37A3HRSvbDzmS1CKmFcE36aS2rfqE5eRW:  * [/ip4/131.226.249.241/tcp/24001] dial tcp4 0.0.0.0:42459->131.226.249.241:24001: i/o timeout
  f01073166: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01073851: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01074227: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01074953: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLgJZfEJJe7h3UBmPjgmqcNyQbdQMiHiqfWBQwLAV1DQV:  * [/ip4/59.56.104.61/tcp/25666] dial tcp4 0.0.0.0:42459->59.56.104.61:25666: i/o timeout
  f01075086: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01075904: 'delist, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHKf2f4GETdfAhz82YZS49ybgbVPJi72mxM29xDmHpE2y:  * [/ip4/218.95.29.145/tcp/24001] dial tcp4 0.0.0.0:42459->218.95.29.145:24001: i/o timeout
  f01076629: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01076644: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01077516: 'fail, China, Qinzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGtdN4djKYhAiNpAgJZwuZXqxHYRhiPynyP3WHGANzRut:  * [/ip4/115.231.84.100/tcp/6689] dial tcp4 0.0.0.0:42459->115.231.84.100:6689: i/o timeout
  f01077547: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01077708: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWS53sFj2crxHoXThhRFS2PaMbUQqEKbyKSm6NHjmMKDjV:  * [/ip4/127.0.0.1/tcp/1433] dial tcp4 127.0.0.1:1433: connect: connection refused  * [/ip4/172.31.11.1/tcp/1433] dial tcp4 0.0.0.0:42459->172.31.11.1:1433: i/o timeout  * [/ip4/223.144.161.32/tcp/11687] dial tcp4 0.0.0.0:42459->223.144.161.32:11687: i/o timeout
  f01077777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01079646: 'delist, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDQhknqajknjcWoe9PbQJH8A4Mh17hpuziEtB7ics3Ezy:  * [/ip4/218.17.189.148/tcp/50666] dial tcp4 0.0.0.0:42459->218.17.189.148:50666: i/o timeout
  f01079999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01081349: 'fail, China, Foshan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01081449: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01081786: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01082277: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01082888: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01083168: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01083999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01084913: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01085688: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLc7i9VwqBKfSETERepHNrP39rog5GM7c29nBvNbgT8MS:  * [/ip4/113.89.33.37/tcp/24001] dial tcp4 0.0.0.0:42459->113.89.33.37:24001: i/o timeout
  f01085801: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01086350: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01086553: 'fail, China, Zhongshan', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01086616: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01086808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01087002: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGAHFqz9S86WFJmcaYHVpAmo9i7oSXTFqpTWCXyLkZewh:  * [/ip4/221.11.77.155/tcp/12380] dial tcp4 0.0.0.0:42459->221.11.77.155:12380: i/o timeout
  f01087243: 'fail, China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE2tYHCLgPNqmnGvM8FwZefkq96UWR5zmDvZ1WnrJkW6V:  * [/ip4/122.114.37.226/tcp/21000] dial tcp4 0.0.0.0:42459->122.114.37.226:21000: i/o timeout
  f01087561: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01088018: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01088088: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01089169: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01089422: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01089828: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01090983: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01092768: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01093419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01094602: 'fail, China, Harbin', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHkWhp6vjx6Dx5TKg3wEgPDxvU6grQfTWngAhbYVPfQrZ:  * [/ip4/127.0.0.1/tcp/33455] dial tcp4 127.0.0.1:33455: connect: connection refused  * [/ip6/::1/tcp/33455] dial tcp6 [::1]:33455: connect: connection refused  * [/ip4/172.168.0.1/tcp/33455] dial tcp4 0.0.0.0:42459->172.168.0.1:33455: i/o timeout  * [/ip4/42.101.67.195/tcp/33455] dial tcp4 0.0.0.0:42459->42.101.67.195:33455: i/o timeout
  f01095558: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01095694: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01095710: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01095915: 'fail, China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBuecXwPVaeBPKv99pKRSfSDhJBbiu54jv2Y2XQ2p4rqY:  * [/ip4/180.119.136.77/tcp/18811] dial tcp4 0.0.0.0:42459->180.119.136.77:18811: i/o timeout  * [/ip4/172.22.88.11/tcp/1024] dial tcp4 0.0.0.0:42459->172.22.88.11:1024: i/o timeout
  f01095973: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01096056: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01096672: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01097059: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01097535: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01097758: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01097836: 'fail, China, Xinjiang', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01097957: 'fail, China, Xinjiang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKfP6rEAAGgeWU7BjCHX9m5JHETTC1mgQytEpPMvqKoHE:  * [/ip6/::1/tcp/43397] dial tcp6 [::1]:43397: connect: connection refused  * [/ip4/127.0.0.1/tcp/39845] dial tcp4 127.0.0.1:39845: connect: connection refused  * [/ip4/172.18.134.51/tcp/39845] dial tcp4 0.0.0.0:42459->172.18.134.51:39845: i/o timeout  * [/ip4/36.189.235.197/tcp/61818] dial tcp4 0.0.0.0:42459->36.189.235.197:61818: i/o timeout  * [/ip4/36.189.235.197/tcp/49746] dial tcp4 0.0.0.0:42459->36.189.235.197:49746: i/o timeout
  f01098119: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098124: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098271: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098514: 'fail, China, Xinjiang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA25vFo8t7FHsxBbkT16PHKVYn1nKexQWRuARypowFw3t:  * [/ip6/::1/tcp/33121] dial tcp6 [::1]:33121: connect: connection refused  * [/ip4/127.0.0.1/tcp/34883] dial tcp4 127.0.0.1:34883: connect: connection refused  * [/ip4/172.18.134.10/tcp/34883] dial tcp4 0.0.0.0:42459->172.18.134.10:34883: i/o timeout  * [/ip4/36.189.235.195/tcp/64960] dial tcp4 0.0.0.0:42459->36.189.235.195:64960: i/o timeout  * [/ip4/36.189.235.195/tcp/61942] dial tcp4 0.0.0.0:42459->36.189.235.195:61942: i/o timeout
  f01098580: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098810: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098835: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098931: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01099312: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSmSyTi7o9eW6fBkPyd2QtatV1KX53v2u5JZudpnghiK8:  * [/ip4/14.152.38.21/tcp/42993] dial tcp4 0.0.0.0:42459->14.152.38.21:42993: i/o timeout  * [/ip4/183.62.118.118/tcp/35855] dial tcp4 0.0.0.0:42459->183.62.118.118:35855: i/o timeout
  f01099362: 'fail, China, Baotou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGuqWKv4tb1PqFCMpjYf3crtMr56VGqrxXYBLB8P8Mqq5:  * [/ip4/1.24.191.98/tcp/3201] dial tcp4 0.0.0.0:42459->1.24.191.98:3201: i/o timeout  * [/ip4/1.24.191.98/tcp/32901] dial tcp4 0.0.0.0:42459->1.24.191.98:32901: i/o timeout
  f01099739: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKgyCCFABwra7XzxeYM9dC5JNShURezTum4U4DBASMbsS:  * [/ip4/103.252.204.89/tcp/18768] dial tcp4 0.0.0.0:42459->103.252.204.89:18768: i/o timeout
  f01099820: 'fail, China, Wenzhou', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01100262: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01100636: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01100914: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01101196: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01101315: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01101397: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01101426: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01102194: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01102936: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01103160: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAZyf6RWfHJ1A7rCxiCvoMqxWWZN5MYZaUD7qRofx8KVx:  * [/ip4/220.117.173.3/tcp/24001] dial tcp4 220.117.173.3:24001: connect: connection refused
  f01103841: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPLsRTxaevxT8MJyGfxmA9hWkeByukmFpBHmpDBUkwnAp:  * [/ip4/103.252.204.91/tcp/18768] dial tcp4 0.0.0.0:42459->103.252.204.91:18768: i/o timeout
  f01103850: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01103923: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDehynBXrwHv28ZnjXWTECEXABrrRxmLe4zH746gGXwzP:  * [/ip4/103.252.204.95/tcp/18768] dial tcp4 0.0.0.0:42459->103.252.204.95:18768: i/o timeout
  f01104012: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01104018: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGMXT24ecaKrHNcpRY4eUrwR5qnu2qwyGnZr8cfxacGZJ:  * [/ip4/103.52.172.50/tcp/33690] dial tcp4 0.0.0.0:42459->103.52.172.50:33690: i/o timeout
  f01104310: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01104889: 'fail, China, Yibin', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRqSWmFpwddA7963ay8uzTaQv8cvXXVV4tYGkwUNth1uz:  * [/ip4/192.168.1.1/tcp/46783] dial tcp4 0.0.0.0:42459->192.168.1.1:46783: i/o timeout  * [/ip4/101.206.243.3/tcp/14997] dial tcp4 0.0.0.0:42459->101.206.243.3:14997: i/o timeout  * [/ip4/101.206.243.3/tcp/34985] dial tcp4 0.0.0.0:42459->101.206.243.3:34985: i/o timeout  * [/ip4/127.0.0.1/tcp/46783] dial tcp4 127.0.0.1:46783: connect: connection refused  * [/ip6/::1/tcp/40353] dial tcp6 [::1]:40353: connect: connection refused
  f01104909: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9xLzdzcHi5DD89wf4L82FEkStKiVRNdUXaj1BEetYSqQ:  * [/ip4/180.97.68.154/tcp/24001] dial tcp4 0.0.0.0:42459->180.97.68.154:24001: i/o timeout
  f01105079: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01105647: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01105825: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWF4f8MoDfDbFhMzeZ1qsNFmcqhqQPbuuNNg2HZydKxhEm:  * [/ip4/116.172.69.2/tcp/24001] dial tcp4 0.0.0.0:42459->116.172.69.2:24001: i/o timeout
  f01105927: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWENsfcLm3e62dFcr3gEdpiQf1nmTKR6hbJcj5md9iJeYt:  * [/ip4/113.142.1.78/tcp/3000] dial tcp4 0.0.0.0:42459->113.142.1.78:3000: i/o timeout
  f01106117: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01106157: 'fail, China, Xinjiang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA5eUHcZQfiaE1BdwdCgookuvgHdfLBpdwhr5Tk2uRNnd:  * [/ip4/127.0.0.1/tcp/34185] dial tcp4 127.0.0.1:34185: connect: connection refused  * [/ip6/::1/tcp/36129] dial tcp6 [::1]:36129: connect: connection refused  * [/ip4/172.18.135.90/tcp/34185] dial tcp4 0.0.0.0:42459->172.18.135.90:34185: i/o timeout  * [/ip4/36.189.235.197/tcp/65025] dial tcp4 0.0.0.0:42459->36.189.235.197:65025: i/o timeout  * [/ip4/36.189.235.197/tcp/63262] dial tcp4 0.0.0.0:42459->36.189.235.197:63262: i/o timeout
  f01106276: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBjLAvPUAXC4wfBRVy9izbyfdTWh5ZYc4Ss8Zvp4wQTjk:  * [/ip4/103.252.204.93/tcp/38768] dial tcp4 0.0.0.0:42459->103.252.204.93:38768: i/o timeout
  f01106668: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01106820: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01106888: 'delist, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWM1D7TkZ1mzZSSZGyopddLzAmaD1NdNNA5c1S2Vw6wvUj:  * [/ip4/39.105.217.71/tcp/10851] dial tcp4 0.0.0.0:42459->39.105.217.71:10851: i/o timeout
  f01107182: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01107192: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01107585: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01108096: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01108594: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01110111: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01110284: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01110660: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01110844: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01111111: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01111131: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01111831: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01111881: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01112163: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01112541: 'fail, USA, Fremont', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01112782: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01112955: 'delist, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSDxbkm3RK55zWZMuDWFoL7yguG74TRfBHG9zT2cLxPea:  * [/ip4/223.113.141.150/tcp/24001] dial tcp4 0.0.0.0:42459->223.113.141.150:24001: i/o timeout
  f01113378: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01113597: 'delist, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQXxJ2cP2GyjUXzEUFiy9m4NW3jPLJULeEnoLWBBe5WFN:  * [/ip4/192.168.2.75/tcp/24001] dial tcp4 0.0.0.0:42459->192.168.2.75:24001: i/o timeout
  f01114516: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01114577: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01115279: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01115686: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01116664: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01116666: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01116725: 'delist, USA, Gilbert', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01116796: 'delist, USA, Gilbert', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01117206: 'fail, China, Jieyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBYWzJVLKT8z3vwTixQv9KrFwsbyRL9HRK5QQZZLNGJaF:  * [/ip4/120.241.37.18/tcp/24001] dial tcp4 0.0.0.0:42459->120.241.37.18:24001: i/o timeout  * [/ip4/120.31.71.186/tcp/24001] dial tcp4 0.0.0.0:42459->120.31.71.186:24001: i/o timeout
  f01117889: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01117949: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01118032: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01118185: 'delist, USA, Gilbert', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01118499: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01118563: 'delist, USA, Gilbert', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01118739: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK8VdGPg7Qt7ydq58tAZhC5y5rNDEGwG1oSpEVYbK144E:  * [/ip6/::1/tcp/39495] dial tcp6 [::1]:39495: connect: connection refused  * [/ip4/127.0.0.1/tcp/39325] dial tcp4 127.0.0.1:39325: connect: connection refused  * [/ip4/172.18.52.148/tcp/39325] dial tcp4 0.0.0.0:42459->172.18.52.148:39325: i/o timeout  * [/ip4/36.189.234.154/tcp/63265] dial tcp4 0.0.0.0:42459->36.189.234.154:63265: i/o timeout  * [/ip4/36.189.234.154/tcp/60888] dial tcp4 0.0.0.0:42459->36.189.234.154:60888: i/o timeout
  f01118788: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01118970: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01119039: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01119631: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01119890: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01120248: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01120291: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01121887: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01122339: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01122448: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01122640: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01122841: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01122889: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01123232: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01123400: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01123833: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01125168: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01125371: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01125521: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01125834: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01125858: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01125913: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01126419: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01126517: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01126799: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01127273: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01127678: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01127909: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128206: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128213: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128302: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128320: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128326: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128462: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01128800: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01129431: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01129455: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01129528: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01129570: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDakc3BhmMZ8qyL9YVAwF7kkfy2pgDnQyScpVBmpeSgNA:  * [/ip4/120.232.254.185/tcp/51104] dial tcp4 0.0.0.0:42459->120.232.254.185:51104: i/o timeout
  f01129866: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01129867: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130100: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130193: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130288: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130543: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130544: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130671: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130682: 'fail, China, Qinzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSHM8QGFzA9JEzWcxHu1a1xyu85YStMTbqA2kWXTPmDrR:  * [/ip4/115.231.84.101/tcp/6689] dial tcp4 0.0.0.0:42459->115.231.84.101:6689: i/o timeout
  f01130729: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130927: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01131460: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01131653: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01131751: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRXzzzfpFVTsNLh1TmXRLEe6R4uyNBUnf5hKffH2VQfmP:  * [/ip6/::1/tcp/42783] dial tcp6 [::1]:42783: connect: connection refused  * [/ip4/127.0.0.1/tcp/43083] dial tcp4 127.0.0.1:43083: connect: connection refused  * [/ip4/115.231.27.37/tcp/43083] dial tcp4 0.0.0.0:42459->115.231.27.37:43083: i/o timeout
  f01131867: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132015: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132058: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132066: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132083: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132084: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQQeJbfECER2joz78fW28C9iEGV5uvnF8ZhcVCi4gzQHa:  * [/ip4/10.5.101.11/tcp/12288] dial tcp4 0.0.0.0:42459->10.5.101.11:12288: i/o timeout
  f01132085: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132087: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132093: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132094: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132095: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132096: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132178: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132323: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJudw1gpfuy6iisVtvaV1RA1YhyghHKuDywzUe3GsCErP:  * [/ip4/127.0.0.1/tcp/42659] dial tcp4 127.0.0.1:42659: connect: connection refused  * [/ip4/172.16.0.11/tcp/42659] dial tcp4 0.0.0.0:42459->172.16.0.11:42659: i/o timeout  * [/ip4/122.224.72.254/tcp/42659] dial tcp4 0.0.0.0:42459->122.224.72.254:42659: i/o timeout
  f01132416: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132422: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132516: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132656: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKSzTcEFXsn9vTPvdxFoBBpekbzEoxphCTTzvEKDuGkcX:  * [/ip4/103.252.204.94/tcp/18768] dial tcp4 0.0.0.0:42459->103.252.204.94:18768: i/o timeout
  f01132686: 'delist, China, Taiwan, Taoyuan City', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01133130: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01133532: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01134282: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWARQRhwZpY99EpkQrueUVM1A5EAGFjhtSpRa41xNqrTfw:  * [/ip4/69.94.200.160/tcp/2400] dial tcp4 0.0.0.0:42459->69.94.200.160:2400: i/o timeout
  f01134586: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01135819: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01136165: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK9EUBAkyFppp4a1Degh8ZtUeJC1fP49PF5AsZxpFavpF:  * [/ip4/127.0.0.1/tcp/43883] dial tcp4 127.0.0.1:43883: connect: connection refused  * [/ip6/::1/tcp/32999] dial tcp6 [::1]:32999: connect: connection refused  * [/ip4/172.18.113.11/tcp/43883] dial tcp4 0.0.0.0:42459->172.18.113.11:43883: i/o timeout  * [/ip4/36.189.234.236/tcp/61335] dial tcp4 0.0.0.0:42459->36.189.234.236:61335: i/o timeout  * [/ip4/36.189.234.236/tcp/64971] dial tcp4 0.0.0.0:42459->36.189.234.236:64971: i/o timeout
  f01136274: 'delist, USA, Orlando', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRtAiJDuUsi8C8Msgj2kzXWhcGHj2axGUj7mHNb2SBrbM:  * [/ip4/50.88.1.58/tcp/24001] dial tcp4 50.88.1.58:24001: connect: connection refused
  f01136283: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01136391: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01136428: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01136493: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01137150: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01137193: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01137229: 'fail, Korea, Dongducheon-si', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01137656: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01137855: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01138014: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWApky9aW8VSMvus1o7iFt7eafkKpwW9LJ8iHMeJEJDYF9:  * [/ip4/127.0.0.1/tcp/38531] dial tcp4 127.0.0.1:38531: connect: connection refused  * [/ip6/::1/tcp/36757] dial tcp6 [::1]:36757: connect: connection refused  * [/ip4/172.18.51.18/tcp/38531] dial tcp4 0.0.0.0:42459->172.18.51.18:38531: i/o timeout  * [/ip4/36.189.234.154/tcp/63228] dial tcp4 0.0.0.0:42459->36.189.234.154:63228: i/o timeout  * [/ip4/36.189.234.154/tcp/60093] dial tcp4 0.0.0.0:42459->36.189.234.154:60093: i/o timeout
  f01138034: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQoYQPMeBT9LKJcbZdGEmuYTjtN6URUMUEfCfqGQoKwzh:  * [/ip6/::1/tcp/42049] dial tcp6 [::1]:42049: connect: connection refused  * [/ip4/172.16.104.2/tcp/37661] dial tcp4 0.0.0.0:42459->172.16.104.2:37661: i/o timeout  * [/ip4/127.0.0.1/tcp/37661] dial tcp4 127.0.0.1:37661: connect: connection refused  * [/ip4/125.93.73.102/tcp/18532] dial tcp4 0.0.0.0:42459->125.93.73.102:18532: i/o timeout  * [/ip4/218.247.50.204/tcp/63745] dial tcp4 0.0.0.0:42459->218.247.50.204:63745: i/o timeout  * [/ip4/183.53.76.103/tcp/63745] dial tcp4 0.0.0.0:42459->183.53.76.103:63745: i/o timeout  * [/ip4/59.36.191.246/tcp/63745] dial tcp4 0.0.0.0:42459->59.36.191.246:63745: i/o timeout  * [/ip4/59.36.191.246/tcp/18532] dial tcp4 0.0.0.0:42459->59.36.191.246:18532: i/o timeout  * [/ip4/125.93.73.102/tcp/63745] dial tcp4 0.0.0.0:42459->125.93.73.102:63745: i/o timeout  * [/ip4/218.247.50.204/tcp/18532] dial tcp4 0.0.0.0:42459->218.247.50.204:18532: i/o timeout  * [/ip4/121.12.167.179/tcp/63745] dial tcp4 0.0.0.0:42459->121.12.167.179:63745: i/o timeout  * [/ip4/121.12.167.179/tcp/18532] dial tcp4 0.0.0.0:42459->121.12.167.179:18532: i/o timeout  * [/ip4/183.53.76.103/tcp/18532] dial tcp4 0.0.0.0:42459->183.53.76.103:18532: i/o timeout
  f01138139: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01138209: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01138496: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01138709: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01139232: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01139383: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01139870: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01139961: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01140256: 'fail, Vietnam, Hanoi', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01140707: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01140920: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRds3GCYV6gbHZYTw7iQ1i2biKUZJ2o5fLx5AeNvcRcYt:  * [/ip4/172.15.0.93/tcp/10240] dial tcp4 0.0.0.0:42459->172.15.0.93:10240: i/o timeout
  f01141077: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01141603: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01141947: 'delist, Korea, Uiwang', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01142318: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD3R5Prh1mxngp5EZVd5sDuJsYmBbfSEQM1vVtYhgnhZm:  * [/ip4/183.66.166.230/tcp/12481] dial tcp4 0.0.0.0:42459->183.66.166.230:12481: i/o timeout
  f01142483: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01143635: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01143914: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01144331: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWN2F3RPnRcikM9yQKcJb3aeipZNkDhUs6iE71Adoo7h5C:  * [/ip4/127.0.0.1/tcp/35925] dial tcp4 127.0.0.1:35925: connect: connection refused  * [/ip4/172.18.51.17/tcp/35925] dial tcp4 0.0.0.0:42459->172.18.51.17:35925: i/o timeout  * [/ip6/::1/tcp/37161] dial tcp6 [::1]:37161: connect: connection refused  * [/ip4/36.189.234.154/tcp/65233] dial tcp4 0.0.0.0:42459->36.189.234.154:65233: i/o timeout  * [/ip4/36.189.234.154/tcp/62986] dial tcp4 0.0.0.0:42459->36.189.234.154:62986: i/o timeout
  f01145144: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01145192: 'delist, China, Zhejiang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHvybFbRLTFX6yV3XF3HwcYoHwEKa2T5NGCQUuhqKDMfR:  * [/ip4/60.205.56.131/tcp/3333] dial tcp4 0.0.0.0:42459->60.205.56.131:3333: i/o timeout
  f01145505: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01146045: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFMB4w6gP1uVkgTTUXeoVxkBuoNTfDNbtDjiHTBpUxFDY:  * [/ip4/10.167.5.11/tcp/32759] dial tcp4 0.0.0.0:42459->10.167.5.11:32759: i/o timeout
  f01146327: 'delist, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMwNAaGESr4pq46A6ho22gDCeTUJnmCWTBWs3E3i7suyW:  * [/ip4/218.95.29.145/tcp/12349] dial tcp4 0.0.0.0:42459->218.95.29.145:12349: i/o timeout  * [/ip4/218.95.29.145/tcp/38929] dial tcp4 0.0.0.0:42459->218.95.29.145:38929: i/o timeout
  f01146522: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01146660: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01147907: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01147989: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFAMqPhagWzQMXb6Eud2zF1tGNTG12aaGNdLyQQjiC1oR:  * [/ip4/172.21.112.32/tcp/32759] dial tcp4 0.0.0.0:42459->172.21.112.32:32759: i/o timeout
  f01148129: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01149098: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01149230: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01149485: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01149873: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01150329: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01150686: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01152162: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01152332: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBhnGQvHFKPS2WiAaXKgEnnsZX3T6jTYDAyhiTerxov9s:  * [/ip4/108.20.152.75/tcp/24001] dial tcp4 0.0.0.0:42459->108.20.152.75:24001: i/o timeout
  f01152462: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01152593: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01152731: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKsvgFmSEXicUEw477VtRtyQNSh21BNHgdUzxVHU7pz32:  * [/ip4/120.31.71.190/tcp/24001] dial tcp4 0.0.0.0:42459->120.31.71.190:24001: i/o timeout
  f01153105: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01153833: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01154081: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01154295: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01154375: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01154394: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWP7UXZx14FEFe8QTtBKYrWKtymaH5gzyvyFxxcwAjcVL3:  * [/ip4/172.18.134.90/tcp/41711] dial tcp4 0.0.0.0:42459->172.18.134.90:41711: i/o timeout  * [/ip4/36.189.235.197/tcp/64884] dial tcp4 0.0.0.0:42459->36.189.235.197:64884: i/o timeout  * [/ip4/36.189.235.197/tcp/62425] dial tcp4 0.0.0.0:42459->36.189.235.197:62425: i/o timeout  * [/ip6/::1/tcp/41983] dial tcp6 [::1]:41983: connect: connection refused  * [/ip4/127.0.0.1/tcp/41711] dial tcp4 127.0.0.1:41711: connect: connection refused
  f01154618: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01154819: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01154827: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJSYb38FtmNPAs7Ub3ZPti4ZAdC4gg5J4kxkS8GB9dsUZ:  * [/ip6/::1/tcp/33727] dial tcp6 [::1]:33727: connect: connection refused  * [/ip4/127.0.0.1/tcp/36255] dial tcp4 127.0.0.1:36255: connect: connection refused  * [/ip4/42.236.3.172/tcp/36255] dial tcp4 0.0.0.0:42459->42.236.3.172:36255: i/o timeout
  f01155052: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01155977: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157445: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157868: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157880: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157884: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157913: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01158296: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01158681: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01158684: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01158696: 'fail, Vietnam', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRpRgVs5E1fG7ZVgRs2Rg8EuG37Fj8QDrgfJpPo1g1caC:  * [/ip4/171.252.194.251/tcp/51058] dial tcp4 0.0.0.0:42459->171.252.194.251:51058: i/o timeout
  f01159190: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01159240: 'fail, China, Taizhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGCQbLJYgdR2crWKpSPdcFnmDMrEvRPmaGuvHGMAX8689:  * [/ip4/220.185.147.82/tcp/24001] dial tcp4 0.0.0.0:42459->220.185.147.82:24001: i/o timeout
  f01159528: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWP2HwrTEe6aJwRRWaTbAfXEac8iLZ944RSR3sgURLMk5U:  * [/ip4/58.246.178.222/tcp/24001] dial tcp4 0.0.0.0:42459->58.246.178.222:24001: i/o timeout
  f01159754: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01159866: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01159979: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01160021: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01160029: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01160571: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKSqcf2oZBiCPcQ2RnN4DMdx1HYvnsEMEmLWy4vT94bvf:  * [/ip4/127.0.0.1/tcp/1433] dial tcp4 127.0.0.1:1433: connect: connection refused  * [/ip4/10.188.19.215/tcp/1433] dial tcp4 0.0.0.0:42459->10.188.19.215:1433: i/o timeout  * [/ip4/112.49.22.12/tcp/1433] dial tcp4 0.0.0.0:42459->112.49.22.12:1433: i/o timeout
  f01160668: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9uGRuSMjsvRz3HeszZSLrEY5BEYimovJQFKwpWZZihLE:  * [/ip6/::1/tcp/36271] dial tcp6 [::1]:36271: connect: connection refused  * [/ip4/127.0.0.1/tcp/38653] dial tcp4 127.0.0.1:38653: connect: connection refused  * [/ip4/43.231.147.215/tcp/38653] dial tcp4 0.0.0.0:42459->43.231.147.215:38653: i/o timeout
  f01161077: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01161245: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01161992: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRsSrUcSt7vqZFW7gK4P3JrecamCrpSGbzBvNa5oq47bB:  * [/ip4/14.152.49.228/tcp/13330] dial tcp4 0.0.0.0:42459->14.152.49.228:13330: i/o timeout
  f01162201: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01162221: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01162678: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJp1HWcTcGEWchy9HrNroWSsTnRysbXBtFD6FCvyMmvEw:  * [/ip6/::1/tcp/40709] dial tcp6 [::1]:40709: connect: connection refused  * [/ip4/127.0.0.1/tcp/44869] dial tcp4 127.0.0.1:44869: connect: connection refused  * [/ip4/192.168.100.1/tcp/44869] dial tcp4 0.0.0.0:42459->192.168.100.1:44869: i/o timeout  * [/ip4/115.236.46.78/tcp/44869] dial tcp4 0.0.0.0:42459->115.236.46.78:44869: i/o timeout
  f01163640: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01163657: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01164500: 'fail, China, Henan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSqr28gDsViLpi4LnR2GzEX2kwrLWnmUYauw3UKao4BDz:  * [/ip4/122.114.37.226/tcp/21000] dial tcp4 0.0.0.0:42459->122.114.37.226:21000: i/o timeout
  f01165168: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01166098: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01166620: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01166697: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01167426: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01167953: 'delist, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEvDJBGzVar45ZpVqNA29dRsu6rmfr2k5V6izQN9rB1Rv:  * [/ip4/61.160.245.237/tcp/24001] dial tcp4 0.0.0.0:42459->61.160.245.237:24001: i/o timeout
  f01168015: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01168055: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01168321: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01168661: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01168710: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSuYfRKN5bs8LmV87PSZDjaSqkqSwfWPtvkWu1uSuHLHU:  * [/ip4/47.94.236.230/tcp/10851] dial tcp4 0.0.0.0:42459->47.94.236.230:10851: i/o timeout
  f01168901: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNMwsZoVQ5czp152eR8mUe3rt1SUSZdbVHmviFaAX48Vp:  * [/ip4/36.6.47.147/tcp/24001] dial tcp4 0.0.0.0:42459->36.6.47.147:24001: i/o timeout
  f01169314: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01169380: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01169592: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01169790: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01170200: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01170291: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01170321: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01170399: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01171440: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01171513: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01172521: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01173249: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01173252: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01173645: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLSmAAZDWXd8oHrc1VDcomEkrYrd2WLpzikTgEvpRx8tm:  * [/ip4/117.21.178.7/tcp/24001] dial tcp4 0.0.0.0:42459->117.21.178.7:24001: i/o timeout
  f01173906: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174316: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174334: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLu87h8zUDcoLJzF8hmPCZEYMVxxBJ2qC3WiYHuyjMRuC:  * [/ip4/163.44.19.9/tcp/24001] dial tcp4 0.0.0.0:42459->163.44.19.9:24001: i/o timeout
  f01174378: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRNayWvVoX8V6Miir8cgCfTG9y4BpZk6WtphKLcMEUAcs:  * [/ip4/115.231.84.104/tcp/6698] dial tcp4 0.0.0.0:42459->115.231.84.104:6698: i/o timeout
  f01174617: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174629: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174869: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174899: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174943: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174966: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174977: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01175000: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01175435: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01175453: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFsYqcfZVZzzb6WX8TX2x3uMj5oocEjeqSJbnYk8ELXtY:  * [/ip4/112.94.14.31/tcp/24033] dial tcp4 0.0.0.0:42459->112.94.14.31:24033: i/o timeout
  f01175900: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01176492: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01176700: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01176782: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKVxa9tsNW7Nvp3RZQKsJ86JmJFYTnYWe2w37mhtTeMQ3:  * [/ip4/120.79.174.10/tcp/24001] dial tcp4 0.0.0.0:42459->120.79.174.10:24001: i/o timeout
  f01177077: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01177129: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDugL5k96XpPbbwD8QCFrPwPZwRwuG6hLSL3XCu7CearL:  * [/ip4/192.168.1.34/tcp/5678] dial tcp4 0.0.0.0:42459->192.168.1.34:5678: i/o timeout  * [/ip4/14.152.38.194/tcp/5678] dial tcp4 0.0.0.0:42459->14.152.38.194:5678: i/o timeout
  f01177326: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01177571: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01177590: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01178141: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBxSWbpByTZFrUaXJULtnTrUufPDeCXtnVFeuK7pFpo5B:  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/120.232.253.35/tcp/23450] dial tcp4 0.0.0.0:42459->120.232.253.35:23450: i/o timeout
  f01178222: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01178312: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01178403: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01178469: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01178915: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWH9FboAt9csvZi3LYp1FcGy31xtBFvKNLwp1U1rvUJZEP:  * [/ip6/::1/tcp/43801] dial tcp6 [::1]:43801: connect: connection refused  * [/ip4/127.0.0.1/tcp/45217] dial tcp4 127.0.0.1:45217: connect: connection refused  * [/ip4/211.196.161.121/tcp/28472] dial tcp4 211.196.161.121:28472: connect: connection refused  * [/ip4/192.168.0.67/tcp/45217] dial tcp4 0.0.0.0:42459->192.168.0.67:45217: i/o timeout  * [/ip4/211.196.161.121/tcp/18427] failed to negotiate security protocol: context deadline exceeded
  f01178927: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01179043: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01179163: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQLsDtWYaAr5ATeB7PPWedjpryNA2Lg6H1592YNuB1GT4:  * [/ip4/127.0.0.1/tcp/37809] dial tcp4 127.0.0.1:37809: connect: connection refused  * [/ip6/::1/tcp/40433] dial tcp6 [::1]:40433: connect: connection refused  * [/ip4/172.18.54.138/tcp/37809] dial tcp4 0.0.0.0:42459->172.18.54.138:37809: i/o timeout  * [/ip4/36.189.234.154/tcp/63669] dial tcp4 0.0.0.0:42459->36.189.234.154:63669: i/o timeout  * [/ip4/36.189.234.154/tcp/49469] dial tcp4 0.0.0.0:42459->36.189.234.154:49469: i/o timeout
  f01179282: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01179662: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01179798: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01180632: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01180639: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01181168: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01182223: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01182317: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01183585: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01183690: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01183757: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01183845: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01184717: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01184941: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGYepN7iFqPAWsrRebpHQBNGVNNZKs82A7qXhxtsbjtGx:  * [/ip4/127.0.0.1/tcp/44183] dial tcp4 127.0.0.1:44183: connect: connection refused  * [/ip6/::1/tcp/42695] dial tcp6 [::1]:42695: connect: connection refused  * [/ip4/42.236.3.173/tcp/44183] dial tcp4 0.0.0.0:42459->42.236.3.173:44183: i/o timeout
  f01185227: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01185349: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01185350: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01185816: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSizMAxXeQrPxaBksqSKy5EZU1mpGQtt3dNxk5t3UJeZy:  * [/ip4/127.0.0.1/tcp/41371] dial tcp4 127.0.0.1:41371: connect: connection refused  * [/ip6/::1/tcp/33493] dial tcp6 [::1]:33493: connect: connection refused  * [/ip4/172.18.24.78/tcp/41371] dial tcp4 0.0.0.0:42459->172.18.24.78:41371: i/o timeout  * [/ip4/36.189.234.150/tcp/49597] dial tcp4 0.0.0.0:42459->36.189.234.150:49597: i/o timeout  * [/ip4/36.189.234.150/tcp/63499] dial tcp4 0.0.0.0:42459->36.189.234.150:63499: i/o timeout
  f01186112: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01186391: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPWSE7vNFSupago9MHcibbkn9f1gmtPhZdaxhgPVEuKVu:  * [/ip4/218.17.190.100/tcp/24001] dial tcp4 0.0.0.0:42459->218.17.190.100:24001: i/o timeout
  f01186610: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01187111: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01188110: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01188117: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01188373: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01188900: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01189202: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAWzMMMtdXHmCwgxrTLzinQvUdyv81nUszGswBqMnuNct:  * [/ip4/103.252.204.92/tcp/38768] dial tcp4 0.0.0.0:42459->103.252.204.92:38768: i/o timeout
  f01189523: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01189566: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01189625: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01189663: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01190350: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01190558: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01190965: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01190978: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01191029: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01191117: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEh6PTBdcZF4vAcGg4Pk3CTXvZXxpvs4SdrqHuXCpE1oR:  * [/ip4/117.71.100.61/tcp/24001] dial tcp4 0.0.0.0:42459->117.71.100.61:24001: i/o timeout
  f01191481: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01191816: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01192149: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01192325: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBHxHD11XTQbYpv9TFVK9xpaEY1YNC4grZwq22YoX5U2J:  * [/ip4/61.147.166.91/tcp/1347] dial tcp4 0.0.0.0:42459->61.147.166.91:1347: i/o timeout
  f01192502: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01192508: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKSHGghS3gpD9kkPi9dQq76ary5NPRhgvnDNTejcNCCka:  * [/ip4/222.180.202.106/tcp/12350] dial tcp4 0.0.0.0:42459->222.180.202.106:12350: i/o timeout
  f01192664: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01192833: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01193462: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEaotqmpPi5zsnWy1vZzFMaPA8LPL66YG23nLqWws1YmU:  * [/ip4/218.98.100.236/tcp/1234] dial tcp4 0.0.0.0:42459->218.98.100.236:1234: i/o timeout
  f01193812: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01194887: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01195263: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDreNaXi5PmATJSDxci8upRctPw3kiHpacZszuxNQF2f1:  * [/ip4/221.226.219.122/tcp/24001] dial tcp4 0.0.0.0:42459->221.226.219.122:24001: i/o timeout
  f01195421: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01195666: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01196447: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01197354: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01197441: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01198058: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01198183: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01198583: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01198650: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01198927: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01198966: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01199028: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01199873: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01199962: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01200082: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDFbmUGkxjYY9HzEzgjb6aKSn6KYu4pkRsotrHT9UAKUu:  * [/ip4/220.185.147.82/tcp/21111] dial tcp4 0.0.0.0:42459->220.185.147.82:21111: i/o timeout
  f01201012: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01201224: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01201505: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJpyFZPJ6zJqUX1hHh4RVVJ8UHA7zkj8PPcRAMXA8nM29:  * [/ip4/222.180.164.151/tcp/8008] dial tcp4 0.0.0.0:42459->222.180.164.151:8008: i/o timeout
  f01202111: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01202607: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01202610: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKMecpa7cVM8mdoNwzBi2W7SHVBERGuEBsCjjJLLMyaRV:  * [/ip6/::1/tcp/33629] dial tcp6 [::1]:33629: connect: connection refused  * [/ip4/127.0.0.1/tcp/42309] dial tcp4 127.0.0.1:42309: connect: connection refused  * [/ip4/172.18.113.168/tcp/42309] dial tcp4 0.0.0.0:42459->172.18.113.168:42309: i/o timeout  * [/ip4/36.189.234.236/tcp/62556] dial tcp4 0.0.0.0:42459->36.189.234.236:62556: i/o timeout  * [/ip4/36.189.234.236/tcp/49683] dial tcp4 0.0.0.0:42459->36.189.234.236:49683: i/o timeout
  f01203032: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01203550: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01203603: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01203627: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01203899: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01203985: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01204055: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01205535: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK3SNoc7MpUZmHGpUT3ZcSZyKcSWAmApH5cZqxab3axxL:  * [/ip4/121.46.239.242/tcp/24001] dial tcp4 0.0.0.0:42459->121.46.239.242:24001: i/o timeout
  f01205854: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01206253: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01206961: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01207023: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01207041: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01207671: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01208421: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01208503: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01208526: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01208636: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01208694: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLWeYCxMUwtXAoEdQ355xRgKQUrbNyRTRvGE9qBHoS4tQ:  * [/ip4/127.0.0.1/tcp/33161] dial tcp4 127.0.0.1:33161: connect: connection refused  * [/ip6/::1/tcp/32887] dial tcp6 [::1]:32887: connect: connection refused  * [/ip4/119.188.6.137/tcp/33161] dial tcp4 0.0.0.0:42459->119.188.6.137:33161: i/o timeout
  f01208779: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01208945: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01209022: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBoaGRDzGizxvBrFwWSRRtYwfRssyDoXCstu3tryKDJwF:  * [/ip4/27.148.248.31/tcp/23450] dial tcp4 0.0.0.0:42459->27.148.248.31:23450: i/o timeout
  f01209085: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01209185: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01210520: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01210575: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01210614: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01210794: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01211025: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01211558: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAcYd48UHMsD9DUQdBF4YoV3gmJnvLgu2Bz9SJBafhtjN:  * [/ip4/127.0.0.1/tcp/43615] dial tcp4 127.0.0.1:43615: connect: connection refused  * [/ip6/::1/tcp/44693] dial tcp6 [::1]:44693: connect: connection refused  * [/ip4/59.175.148.121/tcp/43615] dial tcp4 0.0.0.0:42459->59.175.148.121:43615: i/o timeout
  f01211859: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01212031: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9tPrXpX5SQe6A8TXUS6tbhTYaeRnqUoTvKyG56ikKdke:  * [/ip6/::1/tcp/36023] dial tcp6 [::1]:36023: connect: connection refused  * [/ip4/127.0.0.1/tcp/24001] dial tcp4 127.0.0.1:24001: connect: connection refused  * [/ip4/192.168.2.105/tcp/24001] dial tcp4 0.0.0.0:42459->192.168.2.105:24001: i/o timeout  * [/ip4/122.228.225.2/tcp/24001] dial tcp4 0.0.0.0:42459->122.228.225.2:24001: i/o timeout
  f01212159: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01213157: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01213229: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01213559: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01214272: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01215068: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f01215615: 'delist, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01215819: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01216923: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJdqCvpmJqmhXYB6ZhNog4ks79w8JKGo4Mr2t1UitUaDQ:  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/172.16.29.1/tcp/23450] dial tcp4 0.0.0.0:42459->172.16.29.1:23450: i/o timeout  * [/ip4/121.11.216.25/tcp/23450] dial tcp4 0.0.0.0:42459->121.11.216.25:23450: i/o timeout
  f01218102: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01218186: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFrDSvFBiUUmvw24ogT6m3fTEkrkJ5A3QtUxhoxjQacx6:  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip4/43.243.130.126/tcp/23450] dial tcp4 0.0.0.0:42459->43.243.130.126:23450: i/o timeout  * [/ip4/10.80.63.1/tcp/20529] dial tcp4 0.0.0.0:42459->10.80.63.1:20529: i/o timeout

  // No Peer

  f096943: 'nopeer, NR', // carry-over
  f0106256: 'nopeer, NR', // carry-over
  f0107916: 'nopeer, NR', // carry-over
  f0111343: 'nopeer, NR', // carry-over
  f0116095: 'nopeer, NR', // carry-over
  f0126469: 'nopeer, NR', // carry-over
  f0126471: 'nopeer, NR', // carry-over
  f0144547: 'nopeer, NR', // carry-over
  f0147487: 'nopeer, NR', // carry-over
  f0147496: 'nopeer, NR', // carry-over
  f0148163: 'nopeer, NR', // carry-over
  f0154020: 'nopeer, NR', // carry-over
  f0159630: 'nopeer, NR', // carry-over
  f0159642: 'nopeer, NR', // carry-over
  f0159711: 'nopeer, NR', // carry-over
  f0164210: 'nopeer, NR', // carry-over
  f0216922: 'nopeer, NR', // carry-over
  f0216923: 'nopeer, NR', // carry-over
  f0218283: 'nopeer, NR', // carry-over
  f0224728: 'nopeer, NR', // carry-over
  f0232255: 'nopeer, NR', // carry-over
  f0232830: 'nopeer, NR', // carry-over
  f0623549: 'nopeer, NR', // carry-over
  f0623725: 'nopeer, NR', // carry-over
  f0680676: 'nopeer, NR', // carry-over
  f0685126: 'nopeer, NR', // carry-over
  f0690964: 'nopeer, NR', // carry-over
  f0690971: 'nopeer, NR', // carry-over
  f0690972: 'nopeer, NR', // carry-over
  f0694908: 'nopeer, NR', // carry-over
  f0694916: 'nopeer, NR', // carry-over
  f0694917: 'nopeer, NR', // carry-over
  f0694928: 'nopeer, NR', // carry-over
  f0694986: 'nopeer, NR', // carry-over
  f0695014: 'nopeer, NR', // carry-over
  f0701089: 'nopeer, NR', // carry-over
  f0701308: 'nopeer, NR', // carry-over
  f0702301: 'nopeer, NR', // carry-over
  f0702302: 'nopeer, NR', // carry-over
  f0702320: 'nopeer, NR', // carry-over
  f0708763: 'nopeer, NR', // carry-over
  f0708764: 'nopeer, NR', // carry-over
  f0723641: 'nopeer, NR', // carry-over
  f0743933: 'nopeer, NR', // carry-over
  f0746543: 'nopeer, NR', // carry-over
  f0747980: 'nopeer, NR', // carry-over
  f0761676: 'nopeer, NR', // carry-over
  f0834426: 'nopeer, NR', // carry-over
  f0858986: 'nopeer, NR', // carry-over
  f0867288: 'nopeer, NR', // carry-over
  f0867296: 'nopeer, NR', // carry-over
  f0867300: 'nopeer, NR', // carry-over
  f0867429: 'nopeer, NR', // carry-over
  f01016239: 'nopeer, NR', // carry-over
  f01075153: 'nopeer, NR', // carry-over
  f01075159: 'nopeer, NR', // carry-over
  f01100139: 'nopeer, NR', // carry-over
  f01100182: 'nopeer, NR', // carry-over

  // Delist

  f01000: 'delist, NR - bootstrap', // carry-over
  f01001: 'delist, NR - bootstrap', // carry-over
  f01002: 'delist, NR - bootstrap', // carry-over
  f01013: 'delist, NR', // carry-over
  f01101: 'delist, China, Shanghai', // carry-over
  f01102: 'delist, China, Shandong', // carry-over
  f01156: 'delist, China, Hangzhou', // carry-over
  f01232: 'delist, China, Hangzhou', // carry-over
  f01274: 'delist, China, Guangdong', // carry-over
  f01291: 'delist, Sweden, Stockholm, tvsthlm', // carry-over
  f02304: 'delist, USA, Mountain View', // carry-over
  f02382: 'delist, China, Zhongshan-cfa', // carry-over
  f02385: 'delist, USA, East Islip', // carry-over
  f02398: 'delist, China, Hong Kong', // carry-over
  f02404: 'delist, Korea, Seoul', // carry-over
  f02424: 'delist, Korea, Wanju', // carry-over
  f02436: 'delist, Netherlands', // carry-over
  f02506: 'delist, USA, Clarksville', // carry-over
  f02515: 'delist, China, Hangzhou', // carry-over
  f02518: 'delist, China, Shaanxi', // carry-over
  f02575: 'delist, USA, Davis', // carry-over
  f02608: 'delist, USA, San Jose', // carry-over
  f02665: 'delist, Netherlands, Amsterdam, fm-ops', // carry-over
  f02666: 'delist, China, Chengdu', // carry-over
  f02668: 'delist, China, Chengdu', // carry-over
  f02768: 'delist, China, Hong Kong', // carry-over
  f02774: 'delist, Australia, Sydney', // carry-over
  f02822: 'delist, China, Chengdu', // carry-over
  f02824: 'delist, China, Chengdu', // carry-over
  f03225: 'delist, China, Guyuan', // carry-over
  f03264: 'delist, Korea, Bucheon-si', // carry-over
  f03269: 'delist, Australia', // carry-over
  f03319: 'delist, NR', // carry-over
  f03341: 'delist, NR', // carry-over
  f03346: 'delist, China, Huzhou, wckj', // carry-over
  f03361: 'delist, China, Guangzhou', // carry-over
  f03428: 'delist, China, Beijing + Jiaxing + Germany, Frankfurt', // carry-over
  f03487: 'delist, China, Yibin', // carry-over
  f03519: 'delist, USA, Seattle', // carry-over
  f03544: 'delist, China, Guiyang', // carry-over
  f03619: 'delist, China, Xiamen', // carry-over
  f03622: 'delist, 黑犇科技', // carry-over
  f03765: 'delist, Colombia, Medellin', // carry-over
  f04444: 'delist, NR', // carry-over
  f06262: 'delist, China, Guangzhou', // carry-over
  f07717: 'delist, China, Shenyang', // carry-over
  f07731: 'delist, NR', // carry-over
  f07772: 'delist, China, Dongguan', // carry-over
  f07819: 'delist, China, Wuxi, YC--wuxi', // carry-over
  f07827: 'delist, China, Wuhan, 天际合', // carry-over
  f07843: 'delist, NR', // carry-over
  f07866: 'delist, China, Foshan', // carry-over
  f07924: 'delist, USA', // carry-over
  f07931: 'delist, NR', // carry-over
  f07959: 'delist, NR', // carry-over
  f07964: 'delist, USA, Ashburn', // carry-over
  f07987: 'delist, China, Beijing', // carry-over
  f08022: 'delist, China, Yibin', // carry-over
  f08053: 'delist, NR', // carry-over
  f08061: 'delist, China, Foshan', // carry-over
  f08095: 'delist, Canada, Surrey', // carry-over
  f08097: 'delist, Korea, Pyeongtaek-si', // carry-over
  f08103: 'delist, China, Foshan', // carry-over
  f08136: "delist, China, Xi'an", // carry-over
  f08171: 'delist, NR', // carry-over
  f08183: 'delist, USA, Irvine', // carry-over
  f08207: 'delist, Australia, Brisbane', // carry-over
  f08223: 'delist, NR', // carry-over
  f08225: 'delist, Australia, Sydney', // carry-over
  f08238: 'delist, NR', // carry-over
  f08246: 'delist, USA', // carry-over
  f08280: 'delist, NR', // carry-over
  f08284: 'delist, China, Liaoning', // carry-over
  f08285: 'delist, Latvia, Riga, stander', // carry-over
  f08290: 'delist, NR', // carry-over
  f08311: 'delist, China, Shenzhen', // carry-over
  f08315: 'delist, China, Chongqing', // carry-over
  f08319: 'delist, NR', // carry-over
  f08322: 'delist, China, Chongqing', // carry-over
  f08327: 'delist, NR', // carry-over
  f08349: 'delist, China, Guangzhou, hkicloud', // carry-over
  f08361: 'delist, Malaysia, Kulai', // carry-over
  f08385: 'delist, NR', // carry-over
  f08388: 'delist, China, Taizhou', // carry-over
  f08390: 'delist, China, Shenzhen', // carry-over
  f08393: 'delist, NR', // carry-over
  f08402: 'delist, China, Sichuan', // carry-over
  f08406: 'delist, China, Shenzhen', // carry-over
  f08424: 'delist, China, Chengdu', // carry-over
  f08425: 'delist, NR', // carry-over
  f08429: 'delist, yfeing', // carry-over
  f08432: 'delist, China, Taizhou', // carry-over
  f08440: 'delist, France, Fontenay-sous-Bois', // carry-over
  f08460: 'delist, NR', // carry-over
  f08482: 'delist, USA, Athol, @why', // carry-over
  f08503: 'delist, NR', // carry-over
  f08532: 'delist, USA', // carry-over
  f08574: 'delist, USA', // carry-over
  f08787: 'delist, China, Yibin', // carry-over
  f08789: 'delist, China, Fuzhou', // carry-over
  f08791: 'delist, NR', // carry-over
  f08893: 'delist, NR', // carry-over
  f08902: 'delist, NR', // carry-over
  f08911: 'delist, Korea, Wanju', // carry-over
  f08964: 'delist, NR', // carry-over
  f08980: 'delist, USA, San Jose', // carry-over
  f08988: 'delist, Korea, Hwaseong-si', // carry-over
  f08994: 'delist, NR', // carry-over
  f09006: 'delist, NR', // carry-over
  f09007: 'delist, Korea, Hwaseong-si', // carry-over
  f09035: 'delist, NR', // carry-over
  f09053: 'delist, China, Shenzhen', // carry-over
  f09055: 'delist, China, Jieyang', // carry-over
  f09076: 'delist, NR', // carry-over
  f09084: 'delist, NR', // carry-over
  f09529: 'delist, NR', // carry-over
  f09538: 'delist, NR', // carry-over
  f09569: 'delist, China, Beijing', // carry-over
  f09578: 'delist, NR', // carry-over
  f09589: 'delist, China, Changsha', // carry-over
  f09594: 'delist, NR', // carry-over
  f09610: 'delist, China, Beijing', // carry-over
  f09629: 'delist, NR', // carry-over
  f09662: 'delist, Canada, Surrey', // carry-over
  f09675: 'delist, USA', // carry-over
  f09689: 'delist, USA, Portland', // carry-over
  f09707: 'delist, China, Guangdong', // carry-over
  f09712: 'delist, China, Chengdu', // carry-over
  f09719: 'delist, Korea, Geumcheon-gu', // carry-over
  f09731: 'delist, China, Guiyang', // carry-over
  f09733: 'delist, China, Chongqing', // carry-over
  f09736: 'delist, China, Guangdong', // carry-over
  f09753: 'delist, Korea, Pyeongtaek-si', // carry-over
  f09762: 'delist, China, Guangdong', // carry-over
  f09805: 'delist, China, Fuzhou', // carry-over
  f09833: 'delist, USA, San Jose', // carry-over
  f09840: 'delist, China, Baoding', // carry-over
  f09912: 'delist, USA, Concord', // carry-over
  f09964: 'delist, Germany, Frankfurt', // carry-over
  f09966: 'delist, NR', // carry-over
  f09974: 'delist, Canada, Calgary', // carry-over
  f09997: 'delist, USA', // carry-over
  f010005: 'delist, China, Zhongshan', // carry-over
  f010009: 'delist, USA, East Islip', // carry-over
  f010028: 'delist, USA, Berkeley', // carry-over
  f010033: 'delist, NR', // carry-over
  f010040: 'delist, China, Shenzhen', // carry-over
  f010041: 'delist, USA, Jackson', // carry-over
  f010078: 'delist, China, Zhangjiakou + Hong Kong', // carry-over
  f010173: 'delist, Korea, Pyeongtaek-si', // carry-over
  f010200: 'delist, NR', // carry-over
  f010213: 'delist, NR', // carry-over
  f010222: 'delist, NR', // carry-over
  f010227: 'delist, China, Xiamen', // carry-over
  f010244: 'delist, USA, Newton', // carry-over
  f010248: 'delist, China, Yibin', // carry-over
  f010265: 'delist, China, Zhengzhou', // carry-over
  f010275: 'delist, Korea, Cheongju-si + USA', // carry-over
  f010277: 'delist, France, Fontenay-sous-Bois', // carry-over
  f010281: 'delist, China, Shanghai', // carry-over
  f010282: 'delist, USA, San Francisco', // carry-over
  f010283: 'delist, Brazil, Sao Paulo', // carry-over
  f010292: 'delist, NR', // carry-over
  f010293: 'delist, China, Xiamen', // carry-over
  f010297: 'delist, USA, Howell', // carry-over
  f010303: 'delist, China, Guangdong', // carry-over
  f010305: 'delist, NR', // carry-over
  f010310: 'delist, Canada, Surrey', // carry-over
  f010313: 'delist, NR', // carry-over
  f010315: 'delist, Canada, Surrey', // carry-over
  f010346: 'delist, China, Karamay', // carry-over
  f010382: 'delist, NR', // carry-over
  f010402: 'delist, China, Shenyang', // carry-over
  f010425: 'delist, NR', // carry-over
  f010433: 'delist, Korea, Seoul', // carry-over
  f010438: 'delist, USA', // carry-over
  f010453: 'delist, China, Shaanxi', // carry-over
  f010468: 'delist, China, Guangzhou', // carry-over
  f010490: 'delist, NR', // carry-over
  f010517: 'delist, China, Chongqing', // carry-over
  f010520: 'delist, China, Hangzhou', // carry-over
  f010523: 'delist, China, Beijing, Interstellar Roewe', // carry-over
  f010542: 'delist, China, Ordos', // carry-over
  f010549: 'delist, China, Ordos', // carry-over
  f010551: 'delist, China, Shenyang', // carry-over
  f010559: 'delist, China, Shenyang', // carry-over
  f010566: 'delist, NR', // carry-over
  f010591: 'delist, China, Wuhan', // carry-over
  f010601: 'delist, NR', // carry-over
  f010602: 'delist, China, Guangdong', // carry-over
  f010603: 'delist, China, Baoding', // carry-over
  f010612: 'delist, USA, Mountain View', // carry-over
  f014207: 'delist, USA', // carry-over
  f014261: 'delist, China, Fuzhou', // carry-over
  f014271: 'delist, China, Fuzhou', // carry-over
  f014314: 'delist, Korea, Bucheon-si', // carry-over
  f014331: 'delist, China, Chongqing', // carry-over
  f014354: 'delist, USA, Concord', // carry-over
  f014366: 'delist, USA, Mountain View', // carry-over
  f014388: 'delist, China, Guangdong', // carry-over
  f014389: 'delist, China, Chongqing', // carry-over
  f014407: 'delist, China, Shanghai', // carry-over
  f014419: 'delist, USA, San Diego', // carry-over
  f014420: 'delist, Russia, Samara', // carry-over
  f014425: 'delist, Singapore', // carry-over
  f014477: 'delist, China, Hangzhou', // carry-over
  f014478: 'delist, Finland', // carry-over
  f014486: 'delist, NR', // carry-over
  f014495: 'delist, China, Hong Kong', // carry-over
  f014514: 'delist, China, Fuzhou', // carry-over
  f014533: 'delist, China, Fuzhou', // carry-over
  f014540: 'delist, USA, Newton', // carry-over
  f014556: 'delist, Korea, Bucheon-si', // carry-over
  f014629: 'delist, NR', // carry-over
  f014660: 'delist, Korea, Busan', // carry-over
  f014685: 'delist, Hong Kong', // carry-over
  f014708: 'delist, China, Beijing', // carry-over
  f014741: 'delist, China, Wuhan', // carry-over
  f014745: 'delist, China, Shenyang', // carry-over
  f014749: 'delist, China, Chongqing', // carry-over
  f014764: 'delist, Korea, Wanju', // carry-over
  f014793: 'delist, China, Hangzhou', // carry-over
  f014799: 'delist, China, Chongqing', // carry-over
  f014803: 'delist, China, Beijing', // carry-over
  f015061: 'delist, Australia, Sydney', // carry-over
  f015232: 'delist, Poland, Warsaw', // carry-over
  f015647: 'delist, China, Shenzhen', // carry-over
  f015709: 'delist, China, Hefei', // carry-over
  f015724: 'delist, China, Guangdong', // carry-over
  f015753: 'delist, China, Guyuan', // carry-over
  f015782: 'delist, Australia', // carry-over
  f015797: 'delist, Germany, Rostock', // carry-over
  f015798: 'delist, Germany', // carry-over
  f015799: 'delist, Germany, Rostock', // carry-over
  f015800: 'delist, Germany, Sankt Andreasberg', // carry-over
  f015802: 'delist, Germany', // carry-over
  f015805: 'delist, Germany', // carry-over
  f015808: 'delist, Germany', // carry-over
  f015809: 'delist, Germany', // carry-over
  f015810: 'delist, Germany', // carry-over
  f015811: 'delist, Germany, Lanshut', // carry-over
  f015812: 'delist, Germany', // carry-over
  f015827: 'delist, Russia', // carry-over
  f015829: 'delist, China, Beijing', // carry-over
  f015833: 'delist, China, Baoding', // carry-over
  f015867: 'delist, Netherlands, Amsterdam', // carry-over
  f015870: 'delist, China, Hangzhou', // carry-over
  f015875: 'delist, China, Fuzhou', // carry-over
  f015891: 'delist, China, Shanghai', // carry-over
  f015901: 'delist, Germany', // carry-over
  f015902: 'delist, Germany', // carry-over
  f015920: 'delist, China, Guangdong', // carry-over
  f015935: 'delist, China, Sichuan', // carry-over
  f015938: 'delist, Canada, Waterloo', // carry-over
  f015940: 'delist, Netherlands, Amsterdam', // carry-over
  f015942: 'delist, China, Ningbo', // carry-over
  f016140: 'delist, China, Beijing', // carry-over
  f016162: 'delist, France, Borgo', // carry-over
  f016172: 'delist, China, Guangdong', // carry-over
  f016203: 'delist, China, Chengdu', // carry-over
  f016217: 'delist, China, Nanchong', // carry-over
  f016228: 'delist, China, Chengdu', // carry-over
  f016234: 'delist, China, Chengdu', // carry-over
  f016262: 'delist, China, Fuzhou', // carry-over
  f016271: 'delist, Korea, Seodaemun-gu', // carry-over
  f016299: 'delist, China, Shanghai', // carry-over
  f016303: 'delist, USA, Boardman', // carry-over
  f016304: 'delist, USA, Boardman', // carry-over
  f016305: 'delist, USA, Boardman', // carry-over
  f016306: 'delist, USA, Boardman', // carry-over
  f016408: 'delist, NR', // carry-over
  f016426: 'delist, NR', // carry-over
  f016436: 'delist, Korea, Seoul', // carry-over
  f016456: 'delist, China, Zhejiang', // carry-over
  f016462: 'delist, USA, Clarksville', // carry-over
  f016482: 'delist, USA, Aliquippa', // carry-over
  f016594: 'delist, Germany', // carry-over
  f016628: 'delist, NR', // carry-over
  f016688: 'delist, Germany, Frankfurt', // carry-over
  f016706: 'delist, China, Guangzhou', // carry-over
  f017117: 'delist, Russia, Samara', // carry-over
  f017171: 'delist, NR', // carry-over
  f017181: 'delist, China, Nanchong', // carry-over
  f017186: 'delist, China, Jiaxing', // carry-over
  f017209: 'delist, NR', // carry-over
  f017215: 'delist, Finland', // carry-over
  f017216: 'delist, NR', // carry-over
  f017236: 'delist, NR', // carry-over
  f017251: 'delist, USA', // carry-over
  f017294: 'delist, China, Shenzhen', // carry-over
  f017323: 'delist, Poland, Warsaw', // carry-over
  f017334: 'delist, China, Fuzhou', // carry-over
  f017430: 'delist, Australia, Alexandria-cfa', // carry-over
  f017618: 'delist, Korea, Wanju', // carry-over
  f017628: 'delist, Brazil, Sao Paulo', // carry-over
  f017655: 'delist, NR', // carry-over
  f017722: 'delist, NR', // carry-over
  f017747: 'delist, NR', // carry-over
  f017793: 'delist, NR', // carry-over
  f018081: 'delist, Germany', // carry-over
  f018095: 'delist, Colombia, Medellin', // carry-over
  f018128: 'delist, China, Dongguan', // carry-over
  f018164: 'delist, USA, Howell', // carry-over
  f018311: "delist, China, Xi'an, <23h", // carry-over
  f018369: 'delist, NR', // carry-over
  f018393: 'delist, Colombia, Medellin', // carry-over
  f018397: 'delist, USA, Howell', // carry-over
  f018425: 'delist, USA, Howell', // carry-over
  f018437: 'delist, NR', // carry-over
  f018441: 'delist, USA', // carry-over
  f018445: 'delist, NR', // carry-over
  f018446: 'delist, China, Dongguan', // carry-over
  f018456: 'delist, Brazil, Sao Paulo', // carry-over
  f018474: 'delist, China, Xiamen', // carry-over
  f018484: 'delist, China, Shanghai', // carry-over
  f018490: 'delist, Korea, Hwaseong-si', // carry-over
  f018513: 'delist, NR', // carry-over
  f018517: 'delist, USA, Columbus', // carry-over
  f018518: "delist, China, Xi'an", // carry-over
  f018520: 'delist, China', // carry-over
  f018530: 'delist, China, Shaanxi', // carry-over
  f018531: 'delist, China, Shaanxi', // carry-over
  f018537: 'delist, China, Shaanxi', // carry-over
  f018542: 'delist, China, Chongqing', // carry-over
  f018754: 'delist, China, Dali', // carry-over
  f018761: 'delist, Russia, St. Petersburg', // carry-over
  f018790: 'delist, China, Chengdu', // carry-over
  f018802: 'delist, China, Dongguan', // carry-over
  f018812: 'delist, South Africa, Cape Town', // carry-over
  f018836: 'delist, NR', // carry-over
  f018837: 'delist, China, Shaanxi', // carry-over
  f018844: 'delist, NR', // carry-over
  f018864: 'delist, Korea, Busan', // carry-over
  f018865: 'delist, China, Chengdu', // carry-over
  f018869: 'delist, NR', // carry-over
  f018879: 'delist, Korea, Geumcheon-gu', // carry-over
  f018899: 'delist, China, Shanghai', // carry-over
  f019017: 'delist, China, Wenzhou-cfa', // carry-over
  f019024: 'delist, China, Sichuan', // carry-over
  f019029: 'delist, Serbia, Boljevac', // carry-over
  f019031: 'delist, NR', // carry-over
  f019042: 'delist, China, Shanghai', // carry-over
  f019048: 'delist, Brazil, Sao Paulo', // carry-over
  f019062: 'delist, Germany', // carry-over
  f019069: 'delist, NR', // carry-over
  f019109: 'delist, USA, Howell', // carry-over
  f019114: 'delist, USA, Howell', // carry-over
  f019118: 'delist, China, Jiaxing', // carry-over
  f019123: 'delist, China, Dongguan', // carry-over
  f019160: 'delist, USA, Fremont', // carry-over
  f019173: 'delist, China, Nanchong', // carry-over
  f019184: 'delist, China, Yibin', // carry-over
  f019218: 'delist, China, Dali', // carry-over
  f019239: 'delist, China, Jiaxing', // carry-over
  f019264: 'delist, NR', // carry-over
  f019284: 'delist, China, Foshan', // carry-over
  f019376: 'delist, NR', // carry-over
  f019378: 'delist, China, Changzhou', // carry-over
  f019401: 'delist, Brazil, Sao Paulo', // carry-over
  f019423: 'delist, South Africa, Johannesburg', // carry-over
  f019434: 'delist, NR', // carry-over
  f019437: 'delist, Korea, Guro-gu', // carry-over
  f019525: 'delist, USA, Berkeley', // carry-over
  f019528: 'delist, Peru', // carry-over
  f019547: 'delist, Peru', // carry-over
  f019645: 'delist, Russia, St. Petersburg', // carry-over
  f019723: 'delist, China, Zhongshan', // carry-over
  f019734: 'delist, NR', // carry-over
  f019757: 'delist, NR', // carry-over
  f019804: 'delist, China, Chengdu', // carry-over
  f019809: 'delist, NR', // carry-over
  f019812: 'delist, NR', // carry-over
  f019824: 'delist, USA', // carry-over
  f019825: 'delist, China, Hong Kong', // carry-over
  f020223: 'delist, China, Guiyang', // carry-over
  f020241: 'delist, NR', // carry-over
  f020260: 'delist, NR', // carry-over
  f020276: 'delist, China, Xiamen', // carry-over
  f020281: 'delist, Korea, Uijeongbu-si', // carry-over
  f020352: 'delist, NR', // carry-over
  f020361: 'delist, Colombia, Medellin', // carry-over
  f020366: 'delist, China, Chengdu', // carry-over
  f020369: 'delist, NR', // carry-over
  f020379: 'delist, NR', // carry-over
  f020386: 'delist, Russia', // carry-over
  f020390: 'delist, NR', // carry-over
  f020408: 'delist, China, Hong Kong', // carry-over
  f020432: 'delist, Korea, Wanju', // carry-over
  f020433: 'delist, NR', // carry-over
  f020439: 'delist, China, Chengdu', // carry-over
  f020450: 'delist, NR', // carry-over
  f020451: 'delist, NR', // carry-over
  f020453: 'delist, China, Chengdu', // carry-over
  f020457: 'delist, NR', // carry-over
  f020525: 'delist, China, Dongguan', // carry-over
  f020541: 'delist, China, Shanghai', // carry-over
  f020559: 'delist, China, Liaoning', // carry-over
  f020563: 'delist, China, Dongguan', // carry-over
  f020578: 'delist, Korea, Wanju', // carry-over
  f020641: 'delist, NR', // carry-over
  f020678: 'delist, China, Wenzhou', // carry-over
  f020682: 'delist, NR', // carry-over
  f020683: 'delist, China, Changsha', // carry-over
  f020691: 'delist, NR', // carry-over
  f020739: 'delist, China, Dongguan', // carry-over
  f020763: 'delist, China, Luzhou', // carry-over
  f020775: 'delist, Japan, Osaka', // carry-over
  f020786: 'delist, China, Shenzhen', // carry-over
  f020788: 'delist, China, Chengdu', // carry-over
  f020789: 'delist, NR', // carry-over
  f020791: 'delist, China, Hangzhou', // carry-over
  f020819: 'delist, China, Chengdu', // carry-over
  f020822: 'delist, China, Shanghai', // carry-over
  f020896: 'delist, NR', // carry-over
  f020899: 'delist, China, Chengdu', // carry-over
  f020914: 'delist, NR', // carry-over
  f020934: 'delist, NR', // carry-over
  f020939: 'delist, NR', // carry-over
  f020961: 'delist, China, Shanghai', // carry-over
  f020975: 'delist, China, Shandong', // carry-over
  f020993: 'delist, China, Hong Kong', // carry-over
  f021069: 'delist, USA', // carry-over
  f021083: 'delist, NR', // carry-over
  f021092: 'delist, NR', // carry-over
  f021095: 'delist, NR', // carry-over
  f021265: 'delist, China, Wuhan', // carry-over
  f021274: 'delist, China, Shanghai', // carry-over
  f021286: 'delist, China, Shaanxi', // carry-over
  f021307: 'delist, China, Chengdu', // carry-over
  f021311: 'delist, NR', // carry-over
  f021337: 'delist, China, Beijing', // carry-over
  f021339: 'delist, China, Jiaxing', // carry-over
  f021346: 'delist, China, Shanghai', // carry-over
  f021357: 'delist, China, Shanghai', // carry-over
  f021418: 'delist, NR', // carry-over
  f021494: 'delist, NR', // carry-over
  f021500: 'delist, NR', // carry-over
  f021505: 'delist, NR', // carry-over
  f021509: 'delist, China, Fuzhou', // carry-over
  f021527: 'delist, NR', // carry-over
  f021535: 'delist, China, Chengdu', // carry-over
  f021555: 'delist, NR', // carry-over
  f021574: 'delist, NR', // carry-over
  f021580: 'delist, NR', // carry-over
  f021583: 'delist, China, Jiaxing', // carry-over
  f021684: 'delist, NR', // carry-over
  f021699: 'delist, NR', // carry-over
  f021725: 'delist, NR', // carry-over
  f021976: 'delist, NR', // carry-over
  f022015: 'delist, China, Hangzhou', // carry-over
  f022016: 'delist, NR', // carry-over
  f022033: 'delist, NR', // carry-over
  f022070: 'delist, China, Jieyang', // carry-over
  f022084: 'delist, China, Shaanxi', // carry-over
  f022089: 'delist, China, Beijing', // carry-over
  f022091: 'delist, NR', // carry-over
  f022108: 'delist, China, Luzhou', // carry-over
  f022119: 'delist, USA, Lovettsville', // carry-over
  f022122: 'delist, NR', // carry-over
  f022132: 'delist, China, Dongguan', // carry-over
  f022171: 'delist, China, Shanghai', // carry-over
  f022202: 'delist, USA, Howell', // carry-over
  f022250: 'delist, NR', // carry-over
  f022262: 'delist, China, Hong Kong', // carry-over
  f022276: 'delist, Korea, Seoul', // carry-over
  f022284: 'delist, China, Shaanxi', // carry-over
  f022287: 'delist, China, Dongguan', // carry-over
  f022303: 'delist, NR', // carry-over
  f022313: 'delist, NR', // carry-over
  f022321: 'delist, China, Hong Kong', // carry-over
  f022326: 'delist, China, Zhongshan', // carry-over
  f022333: 'delist, China, Dongguan', // carry-over
  f022337: 'delist, NR', // carry-over
  f022343: 'delist, China, Dongguan', // carry-over
  f022372: 'delist, China, Chengdu', // carry-over
  f022376: 'delist, China, Dongguan', // carry-over
  f022494: 'delist, China, Dongguan', // carry-over
  f022501: 'delist, Japan, Osaka', // carry-over
  f022503: 'delist, NR', // carry-over
  f022505: 'delist, China, Shanghai', // carry-over
  f022517: 'delist, China, Taiwan, Taipei', // carry-over
  f022562: 'delist, NR', // carry-over
  f022564: 'delist, NR', // carry-over
  f022683: 'delist, NR', // carry-over
  f022755: 'delist, China, Shenzhen', // carry-over
  f022776: 'delist, Korea, Guri-si', // carry-over
  f022786: 'delist, NR', // carry-over
  f022790: 'delist, China, Luzhou', // carry-over
  f022791: 'delist, NR', // carry-over
  f022797: 'delist, NR', // carry-over
  f022834: 'delist, NR', // carry-over
  f022836: 'delist, China, Chongqing', // carry-over
  f022838: 'delist, China, Hong Kong', // carry-over
  f022841: 'delist, China, Zhongshan', // carry-over
  f022857: 'delist, NR', // carry-over
  f022880: 'delist, NR', // carry-over
  f022906: 'delist, NR', // carry-over
  f022911: 'delist, China, Hong Kong', // carry-over
  f022912: 'delist, NR', // carry-over
  f022926: 'delist, NR', // carry-over
  f022930: 'delist, NR', // carry-over
  f022954: 'delist, NR', // carry-over
  f022967: 'delist, Korea, Seoul', // carry-over
  f022969: 'delist, China, Chengdu', // carry-over
  f022970: 'delist, NR', // carry-over
  f022996: 'delist, NR', // carry-over
  f023021: 'delist, Korea, Yeongdeungpo-dong', // carry-over
  f023108: 'delist, China, Dongguan', // carry-over
  f023159: 'delist, NR', // carry-over
  f023207: 'delist, NR', // carry-over
  f023210: 'delist, China, Dongguan', // carry-over
  f023254: 'delist, NR', // carry-over
  f023463: 'delist, NR', // carry-over
  f023482: 'delist, NR', // carry-over
  f023501: 'delist, China, Mianyang', // carry-over
  f023505: 'delist, NR', // carry-over
  f023526: 'delist, China, Chongqing', // carry-over
  f023535: 'delist, China, Hong Kong', // carry-over
  f023560: 'delist, NR', // carry-over
  f023568: 'delist, NR', // carry-over
  f023571: 'delist, NR', // carry-over
  f023581: 'delist, China, Hong Kong, mine-much', // carry-over
  f023643: 'delist, NR', // carry-over
  f023647: 'delist, Korea, Gangseo-gu', // carry-over
  f023649: 'delist, Korea, Seoul, LS&NIHON', // carry-over
  f023661: 'delist, China, Zhejiang', // carry-over
  f023798: 'delist, China, Shanghai', // carry-over
  f023801: 'delist, China, Dongguan', // carry-over
  f023826: 'delist, USA, Germantown', // carry-over
  f023881: 'delist, China, Fuzhou', // carry-over
  f023939: 'delist, NR', // carry-over
  f023943: 'delist, USA, Ashburn', // carry-over
  f023965: 'delist, NR', // carry-over
  f023986: 'delist, Korea, Seoul', // carry-over
  f024031: 'delist, NR', // carry-over
  f024074: 'delist, NR', // carry-over
  f024129: 'delist, China, Zhejiang', // carry-over
  f024153: 'delist, NR', // carry-over
  f024165: 'delist, NR', // carry-over
  f024168: 'delist, USA, Ashburn', // carry-over
  f024496: 'delist, China, Dongguan', // carry-over
  f024526: 'delist, Korea', // carry-over
  f024556: 'delist, NR', // carry-over
  f024557: 'delist, NR', // carry-over
  f024558: 'delist, NR', // carry-over
  f024559: 'delist, NR', // carry-over
  f024611: 'delist, China, Dongguan', // carry-over
  f024902: 'delist, Korea, Incheon', // carry-over
  f024903: 'delist, undefined', // carry-over
  f024969: 'delist, NR', // carry-over
  f025007: 'delist, Korea, Gyeonggi-do, PINBYTES-eCUBE', // carry-over
  f025028: 'delist, NR', // carry-over
  f025032: 'delist, China, Beijing', // carry-over
  f029368: 'delist, Korea, Gangseo-gu', // carry-over
  f029421: 'delist, undefined', // carry-over
  f029477: 'delist, undefined', // carry-over
  f029529: 'delist, China, Dongguan', // carry-over
  f029546: 'delist, NR', // carry-over
  f029566: 'delist, NR', // carry-over
  f029595: 'delist, undefined', // carry-over
  f029619: 'delist, undefined', // carry-over
  f029632: 'delist, undefined', // carry-over
  f030230: 'delist, China, Sichuan', // carry-over
  f030231: 'delist, China, Hunan', // carry-over
  f030327: 'delist, China, Beijing', // carry-over
  f030386: 'delist, NR', // carry-over
  f030514: 'delist, NR', // carry-over
  f030518: 'delist, China, Wuhan', // carry-over
  f030521: 'delist, China, Hong Kong', // carry-over
  f030531: 'delist, NR', // carry-over
  f030608: 'delist, China, Mianyang', // carry-over
  f030641: 'delist, China, Shaanxi', // carry-over
  f032865: 'delist, USA, Redmond', // carry-over
  f032887: 'delist, undefined', // carry-over
  f032904: 'delist, undefined', // carry-over
  f032922: 'delist, undefined', // carry-over
  f033014: 'delist, NR', // carry-over
  f033028: 'delist, China, Mianyang', // carry-over
  f033111: 'delist, China, Shanghai', // carry-over
  f033124: 'delist, China, Shanghai', // carry-over
  f033125: 'delist, NR', // carry-over
  f033209: 'delist, NR', // carry-over
  f033224: 'delist, NR', // carry-over
  f033511: 'delist, China, Dongguan', // carry-over
  f033545: 'delist, China, Shenzhen + USA', // carry-over
  f033549: 'delist, China, Quzhou', // carry-over
  f034084: 'delist, China, Chongqing', // carry-over
  f034229: 'delist, USA, Minneapolis', // carry-over
  f034311: 'delist, Korea, Gangnam-gu', // carry-over
  f034362: 'delist, China, Sichuan', // carry-over
  f034652: 'delist, Korea, Yeongdeungpo-dong', // carry-over
  f034666: 'delist, NR', // carry-over
  f040137: 'delist, NR', // carry-over
  f040432: 'delist, NR', // carry-over
  f040468: 'delist, NR', // carry-over
  f040971: 'delist, NR', // carry-over
  f042344: 'delist, Korea', // carry-over
  f042584: 'delist, Australia, Basin View', // carry-over
  f042839: 'delist, Korea, Pocheon-si', // carry-over
  f042901: 'delist, Finland, Helsinki', // carry-over
  f044143: 'delist, China, Taiwan, Taipei', // carry-over
  f044788: 'delist, NR', // carry-over
  f046043: 'delist, China, Shanghai', // carry-over
  f046073: 'delist, China, Shanghai', // carry-over
  f046074: 'delist, China, Shanghai', // carry-over
  f046078: 'delist, China, Shaanxi', // carry-over
  f046315: 'delist, NR', // carry-over
  f046317: 'delist, China, Nanyang', // carry-over
  f047327: 'delist, China, Hong Kong', // carry-over
  f047536: 'delist, NR', // carry-over
  f047858: 'delist, China, Wuhan', // carry-over
  f048172: 'delist, China, Suzhou', // carry-over
  f048192: 'delist, China, Suzhou', // carry-over
  f048545: 'delist, China, Chengdu', // carry-over
  f049990: 'delist, Korea, Incheon', // carry-over
  f052503: 'delist, NR', // carry-over
  f052562: 'delist, NR', // carry-over
  f052740: 'delist, China, Shaanxi', // carry-over
  f054163: 'delist, China, Dongguan', // carry-over
  f054389: 'delist, China, Chongqing', // carry-over
  f054677: 'delist, Finland, Helsinki', // carry-over
  f055040: 'delist, China, Fujian', // carry-over
  f055522: 'delist, USA', // carry-over
  f056393: 'delist, NR', // carry-over
  f057115: 'delist, China, Nanyang', // carry-over
  f057560: 'delist, NR', // carry-over
  f057842: 'delist, Korea, Gyeonggi-do', // carry-over
  f058003: 'delist, China, Shenzhen', // carry-over
  f058321: 'delist, China, Dongguan', // carry-over
  f059280: 'delist, China, Shenzhen', // carry-over
  f059652: 'delist, China, Beijing', // carry-over
  f059705: 'delist, Korea, Naju', // carry-over
  f059740: 'delist, Germany, Bottrop', // carry-over
  f060780: 'delist, Korea, Goyang-si', // carry-over
  f061043: 'delist, China, Changsha', // carry-over
  f061059: 'delist, China, Beijing', // carry-over
  f061196: 'delist, Korea, Yeongdeungpo-dong', // carry-over
  f061430: 'delist, Korea, Naju', // carry-over
  f062375: 'delist, Korea, Gyeonggi-do', // carry-over
  f062445: 'delist, China, Shenzhen', // carry-over
  f062449: 'delist, NR', // carry-over
  f062492: 'delist, China, Hong Kong', // carry-over
  f062552: 'delist, NR', // carry-over
  f062587: 'delist, NR', // carry-over
  f062735: 'delist, China, Hong Kong', // carry-over
  f063173: 'delist, Korea, Gyeonggi-do', // carry-over
  f063780: 'delist, China, Shenyang', // carry-over
  f063921: 'delist, China, Ili', // carry-over
  f064442: 'delist, Japan', // carry-over
  f064688: 'delist, NR', // carry-over
  f065132: 'delist, Denmark, Vipperod', // carry-over
  f065225: 'delist, China, Dongguan', // carry-over
  f065250: 'delist, NR', // carry-over
  f065259: 'delist, NR', // carry-over
  f065426: 'delist, Korea, Gimpo-si', // carry-over
  f065477: 'delist, NR', // carry-over
  f065689: 'delist, NR', // carry-over
  f065718: 'delist, China, Taiwan, Hsinchu', // carry-over
  f065732: 'delist, Korea, Gyeonggi-do', // carry-over
  f065853: 'delist, Korea, Seongnam-si', // carry-over
  f066075: 'delist, NR', // carry-over
  f066289: 'delist, NR', // carry-over
  f066465: 'delist, NR', // carry-over
  f066566: 'delist, Korea, Gwangju', // carry-over
  f066568: 'delist, Korea, Gwangju, aoc-0002', // carry-over
  f066734: 'delist, NR', // carry-over
  f066804: 'delist, China, Zhejiang', // carry-over
  f066845: 'delist, China, Dongguan', // carry-over
  f067083: 'delist, Russia, Moscow', // carry-over
  f067185: 'delist, Korea, Gwangju', // carry-over
  f067195: 'delist, China, Huizhou', // carry-over
  f067283: 'delist, Korea, Seongnam-si', // carry-over
  f067314: 'delist, China, Ningbo', // carry-over
  f067545: 'delist, Canada, Kitchener', // carry-over
  f068253: 'delist, NR', // carry-over
  f068898: 'delist, China, Fuzhou', // carry-over
  f069450: 'delist, NR', // carry-over
  f069661: 'delist, China, Wuxi', // carry-over
  f070288: 'delist, China, Zhangzhou', // carry-over
  f070337: 'delist, China, Zhangzhou', // carry-over
  f070475: 'delist, China, Guyuan', // carry-over
  f070747: 'delist, China, Shenzhen', // carry-over
  f070756: 'delist, China, Beijing', // carry-over
  f070824: 'delist, China, Taiwan, Hsinchu', // carry-over
  f071114: 'delist, China, Shenyang', // carry-over
  f071190: 'delist, Korea, Gyeonggi-do', // carry-over
  f071692: "delist, China, Xi'an", // carry-over
  f071914: 'delist, China, Beijing', // carry-over
  f072737: 'delist, China, Shanghai', // carry-over
  f073048: 'delist, Korea, Gyeonggi-do', // carry-over
  f073535: 'delist, Korea, Gyeonggi-do', // carry-over
  f073783: 'delist, NR', // carry-over
  f073878: 'delist, NR', // carry-over
  f073931: 'delist, NR', // carry-over
  f078425: 'delist, Korea, Bucheon-si', // carry-over
  f078516: 'delist, NR', // carry-over
  f078770: 'delist, China, Karamay', // carry-over
  f080131: 'delist, NR', // carry-over
  f080945: 'delist, China, Shenzhen', // carry-over
  f081987: 'delist, NR', // carry-over
  f082054: 'delist, China, Hefei', // carry-over
  f082175: 'delist, China, Shenyang', // carry-over
  f082250: 'delist, China, Guilin', // carry-over
  f082543: 'delist, Korea, Osan', // carry-over
  f082590: 'delist, China, Taizhou', // carry-over
  f082669: 'delist, USA, Daytona Beach', // carry-over
  f082698: "delist, USA, Xi'an", // carry-over
  f083235: 'delist, Serbia, Belgrade', // carry-over
  f085226: 'delist, Korea, Busan', // carry-over
  f085415: 'delist, NR', // carry-over
  f085682: 'delist, NR', // carry-over
  f085904: 'delist, China, Chongqing', // carry-over
  f085947: 'delist, NR', // carry-over
  f086450: 'delist, NR', // carry-over
  f086610: 'delist, Korea, Gyeonggi-do', // carry-over
  f087931: 'delist, China, Beijing', // carry-over
  f088305: 'delist, Korea, Gyeonggi-do', // carry-over
  f088404: 'delist, Korea, Gyeonggi-do', // carry-over
  f089201: 'delist, Korea, Gyeonggi-do', // carry-over
  f090052: 'delist, China, Suqian', // carry-over
  f090086: 'delist, Korea', // carry-over
  f090104: 'delist, China, Dongguan', // carry-over
  f090363: 'delist, China, Beijing', // carry-over
  f090747: 'delist, Korea, Anyang-si', // carry-over
  f090851: 'delist, China, Ningxia', // carry-over
  f091095: 'delist, Korea, Gwangju + Buk-gu', // carry-over
  f091139: 'delist, Korea, Gyeonggi-do', // carry-over
  f091355: 'delist, China, Chengdu', // carry-over
  f092516: 'delist, USA, Boardman', // carry-over
  f092630: 'delist, Korea, Gyeonggi-do', // carry-over
  f092724: 'delist, China, Beijing', // carry-over
  f092776: 'delist, Korea, Gimhae', // carry-over
  f092971: 'delist, China, Chongqing', // carry-over
  f093212: 'delist, Netherlands', // carry-over
  f093554: 'delist, China, Zhangzhou', // carry-over
  f094085: 'delist, Japan, Ota-ku', // carry-over
  f094430: 'delist, China, Ordos', // carry-over
  f094675: 'delist, NR', // carry-over
  f094785: 'delist, China, Shanghai', // carry-over
  f094825: 'delist, Korea, Gwangju', // carry-over
  f094869: 'delist, China, Shanghai', // carry-over
  f094894: 'delist, Korea, Gwangju', // carry-over
  f094899: 'delist, Korea', // carry-over
  f095049: 'delist, Korea, Bucheon-si', // carry-over
  f095296: 'delist, China, Suqian', // carry-over
  f095398: 'delist, Korea, Sejong', // carry-over
  f095506: 'delist, China, Ningxia', // carry-over
  f095528: 'delist, China, Hangzhou', // carry-over
  f095833: 'delist, Korea, Yongin-si', // carry-over
  f096224: 'delist, China, Chongqing', // carry-over
  f096976: 'delist, Russia', // carry-over
  f097403: 'delist, NR', // carry-over
  f0106090: 'delist, NR', // carry-over
  f0107118: 'delist, China, Hangzhou + Zhejiang', // carry-over
  f0107171: 'delist, China, Karamay', // carry-over
  f0108979: 'delist, Korea, Bupyeong-gu', // carry-over
  f0109163: 'delist, Korea, Songpa-gu', // carry-over
  f0109349: 'delist, NR', // carry-over
  f0110101: 'delist, Korea, Goyang-si', // carry-over
  f0110198: 'delist, Korea, Hwaseong-si', // carry-over
  f0110488: 'delist, China, Chongqing', // carry-over
  f0110803: 'delist, Korea', // carry-over
  f0111885: 'delist, Korea, Bucheon-si, WINNERS', // carry-over
  f0112027: 'delist, France', // carry-over
  f0113659: 'delist, NR', // carry-over
  f0113664: 'delist, France', // carry-over
  f0116513: 'delist, NR', // carry-over
  f0116707: 'delist, Germany, Dusseldorf', // carry-over
  f0119336: 'delist, Canada, Ottawa', // carry-over
  f0120141: 'delist, Korea, Gangnam-gu', // carry-over
  f0122410: 'delist, China, Shanghai', // carry-over
  f0124335: 'delist, Finland, Helsinki', // carry-over
  f0125962: 'delist, Korea, Yongin-si', // carry-over
  f0126376: 'delist, NR', // carry-over
  f0126535: 'delist, China, Hong Kong', // carry-over
  f0127151: 'delist, Korea, Yongin-si', // carry-over
  f0127157: 'delist, Korea, Yongin-si', // carry-over
  f0127256: 'delist, Korea, Yongin-si', // carry-over
  f0128191: 'delist, Korea, Gangnam-gu', // carry-over
  f0128238: 'delist, Korea, Yongin-si', // carry-over
  f0128239: 'delist, Korea, Yongin-si', // carry-over
  f0128242: 'delist, Korea, Yongin-si', // carry-over
  f0131359: 'delist, China, Fuzhou', // carry-over
  f0131857: 'delist, China, Chongqing', // carry-over
  f0132765: 'delist, NR', // carry-over
  f0133486: 'delist, China, Shenzhen', // carry-over
  f0135906: 'delist, NR', // carry-over
  f0136425: 'delist, Korea, Busan', // carry-over
  f0137475: 'delist, China, Beijing', // carry-over
  f0144304: 'delist, NR', // carry-over
  f0144615: 'delist, NR', // carry-over
  f0145018: 'delist, Korea', // carry-over
  f0147676: 'delist, Korea, Seoul', // carry-over
  f0149670: 'delist, NR', // carry-over
  f0149783: 'delist, NR', // carry-over
  f0156232: 'delist, China, Fuzhou', // carry-over
  f0160291: 'delist, USA', // carry-over
  f0164326: 'delist, China, Beijing', // carry-over
  f0165533: 'delist, NR', // carry-over
  f0167458: 'delist, NR', // carry-over
  f0168371: 'delist, Korea, Namyangju', // carry-over
  f0213894: 'delist, China, Hangzhou', // carry-over
  f0214181: 'delist, Australia, Mosman', // carry-over
  f0215360: 'delist, France', // carry-over
  f0215404: 'delist, China, Suzhou', // carry-over
  f0216068: 'delist, Romania, Iasi', // carry-over
  f0216139: 'delist, Korea, Goyang-si', // carry-over
  f0219415: 'delist, USA, Boardman', // carry-over
  f0219631: 'delist, USA, Council Bluffs', // carry-over
  f0220911: 'delist, NR', // carry-over
  f0224599: 'delist, China, Fuzhou', // carry-over
  f0224782: 'delist, USA', // carry-over
  f0225676: 'delist, Korea, Guro-gu', // carry-over
  f0225880: 'delist, NR', // carry-over
  f0226073: 'delist, China, Shenzhen', // carry-over
  f0228335: 'delist, China, Beijing', // carry-over
  f0228350: 'delist, China, Hangzhou', // carry-over
  f0228388: 'delist, USA, Cleveland', // carry-over
  f0228401: 'delist, Japan', // carry-over
  f0229547: 'delist, Japan, Yokohama', // carry-over
  f0230827: 'delist, Korea, Paju', // carry-over
  f0231135: 'delist, USA, Huntersville', // carry-over
  f0231161: 'delist, China, Qujing', // carry-over
  f0232136: 'delist, NR', // carry-over
  f0232358: 'delist, NR', // carry-over
  f0232437: 'delist, NR', // carry-over
  f0239266: 'delist, NR', // carry-over
  f0240893: 'delist, USA, Queens', // carry-over
  f0241022: 'delist, Korea, Geumcheon-gu', // carry-over
  f0241272: 'delist, France, Deuil-la-Barre', // carry-over
  f0241284: 'delist, China, Jiangmen', // carry-over
  f0242152: 'delist, Korea, Guro-gu', // carry-over
  f0242260: 'delist, USA, St. Louis', // carry-over
  f0242345: 'delist, NR', // carry-over
  f0242416: 'delist, USA, Morganville', // carry-over
  f0347476: 'delist, China, Zhengzhou', // carry-over
  f0391370: 'delist, USA, Queens', // carry-over
  f0391520: 'delist, China, Guangzhou', // carry-over
  f0392707: 'delist, Korea, Chuncheon', // carry-over
  f0392712: 'delist, Korea, Ulju-gun', // carry-over
  f0392733: 'delist, USA, Huntersville', // carry-over
  f0393359: 'delist, China, Suzhou', // carry-over
  f0394461: 'delist, Korea, Seoul', // carry-over
  f0395459: 'delist, Korea, Daegu', // carry-over
  f0395461: 'delist, Korea, Suseong-gu', // carry-over
  f0395462: 'delist, Korea, Daegu', // carry-over
  f0395463: 'delist, Korea, Daegu', // carry-over
  f0395472: 'delist, Korea, Daegu', // carry-over
  f0395473: 'delist, Korea, Daegu', // carry-over
  f0397428: 'delist, Japan, Tokyo', // carry-over
  f0397675: 'delist, Korea, Guro-gu', // carry-over
  f0398326: 'delist, China, Jiangmen', // carry-over
  f0398338: 'delist, USA, Cleveland', // carry-over
  f0400681: 'delist, USA, Queens', // carry-over
  f0402314: 'delist, NR', // carry-over
  f0402492: 'delist, NR', // carry-over
  f0402975: 'delist, Korea', // carry-over
  f0403858: 'delist, China, Jiangmen', // carry-over
  f0403896: 'delist, USA, Huntersville', // carry-over
  f0408184: 'delist, Switzerland', // carry-over
  f0408696: 'delist, China, Taiwan, Taipei', // carry-over
  f0410023: 'delist, NR', // carry-over
  f0411786: 'delist, Korea, Busan', // carry-over
  f0413178: 'delist, China, Suqian', // carry-over
  f0414184: 'delist, Spain, Madrid', // carry-over
  f0423713: 'delist, China, Qingdao', // carry-over
  f0424969: 'delist, China, Fuzhou', // carry-over
  f0427967: 'delist, China, Changsha', // carry-over
  f0427994: 'delist, China, Jinhua', // carry-over
  f0427996: 'delist, Canada, Bois-des-Filion', // carry-over
  f0428150: 'delist, China, Xiamen', // carry-over
  f0429006: 'delist, China, Zhangzhou', // carry-over
  f0430997: 'delist, Korea', // carry-over
  f0434480: 'delist, USA, Hummelstown', // carry-over
  f0467217: 'delist, China, Beijing', // carry-over
  f0471266: 'delist, Japan, Ageo', // carry-over
  f0482136: 'delist, China, Fuzhou', // carry-over
  f0490090: 'delist, Korea, Seoul', // carry-over
  f0492222: 'delist, Canada, Vancouver', // carry-over
  f0492283: 'delist, USA, Quail Valley', // carry-over
  f0492295: 'delist, China, Shenzhen', // carry-over
  f0492481: 'delist, NR', // carry-over
  f0494174: 'delist, Norway', // carry-over
  f0494332: 'delist, Ukraine, Sumy', // carry-over
  f0494586: 'delist, China, Nanchang', // carry-over
  f0497837: 'delist, Korea, Gangnam-gu', // carry-over
  f0498102: 'delist, NR', // carry-over
  f0503423: 'delist, NR', // carry-over
  f0504467: 'delist, Korea, Seoul', // carry-over
  f0507420: 'delist, NR', // carry-over
  f0510010: 'delist, Russia, Shchelkovo', // carry-over
  f0510610: 'delist, China, Shangrao', // carry-over
  f0511480: 'delist, China, Yangzhou', // carry-over
  f0518641: 'delist, China, Hangzhou', // carry-over
  f0522078: 'delist, China, Hangzhou', // carry-over
  f0522099: 'delist, China, Shangrao', // carry-over
  f0524517: 'delist, Korea, Uijeongbu-si', // carry-over
  f0524577: 'delist, China, Foshan', // carry-over
  f0524589: 'delist, Korea', // carry-over
  f0524945: 'delist, China, Beijing', // carry-over
  f0587126: 'delist, China, Shenyang', // carry-over
  f0601975: 'delist, Korea, Guro-gu', // carry-over
  f0601980: 'delist, Korea, Seoul', // carry-over
  f0602553: 'delist, China, Suqian', // carry-over
  f0607157: 'delist, China, Jieyang', // carry-over
  f0677977: 'delist, USA, Wenham', // carry-over
  f0685797: 'delist, NR', // carry-over
  f0697132: 'delist, Korea, Busan', // carry-over
  f0697162: 'delist, Finland, Helsinki', // carry-over
  f0698866: 'delist, Finland, Helsinki', // carry-over
  f0701226: 'delist, NR', // carry-over
  f0702054: 'delist, NR', // carry-over
  f0706937: 'delist, Korea, Bucheon-si', // carry-over
  f0715707: 'delist, Japan, Yokohama', // carry-over
  f0718079: 'delist, NR', // carry-over
  f0720716: 'delist, Korea, Seoul', // carry-over
  f0720762: 'delist, Korea, Incheon', // carry-over
  f0721545: 'delist, Korea, Seo-gu', // carry-over
  f0723600: 'delist, China, Taiwan, Hsinchu', // carry-over
  f0724179: 'delist, China, Wenzhou', // carry-over
  f0724192: 'delist, Korea, Hwaseong-si', // carry-over
  f0727067: 'delist, Norway', // carry-over
  f0730529: 'delist, USA, Boardman', // carry-over
  f0732291: 'delist, Korea, Incheon', // carry-over
  f0733076: 'delist, NR', // carry-over
  f0744199: 'delist, China, Taiwan, Hsinchu', // carry-over
  f0751590: 'delist, USA', // carry-over
  f0751619: 'delist, Korea, Ulsan', // carry-over
  f0752215: 'delist, USA, Huntersville', // carry-over
  f0752458: 'delist, Australia, Sydney', // carry-over
  f0755598: 'delist, Korea, Incheon', // carry-over
  f0755602: 'delist, Korea, Incheon', // carry-over
  f0755605: 'delist, Korea, Incheon', // carry-over
  f0755645: 'delist, Korea, Jung-gu', // carry-over
  f0756242: 'delist, China, Taiwan, Taipei', // carry-over
  f0757509: 'delist, Ukraine, Odessa', // carry-over
  f0758143: 'delist, Canada', // carry-over
  f0758230: 'delist, Korea, Geumcheon-gu', // carry-over
  f0758390: 'delist, USA, Phoenix', // carry-over
  f0761445: 'delist, Ukraine, Odessa', // carry-over
  f0765545: 'delist, China, Hangzhou', // carry-over
  f0805622: 'delist, NR', // carry-over
  f0808705: 'delist, China, Wenzhou', // carry-over
  f0810358: 'delist, Japan, Tokyo', // carry-over
  f0810756: 'delist, Romania, Bucharest', // carry-over
  f0816232: 'delist, Korea, Seoul', // carry-over
  f0816321: 'delist, NR', // carry-over
  f0816420: 'delist, China, Harbin', // carry-over
  f0818665: 'delist, Romania, Bucharest', // carry-over
  f0822032: 'delist, Korea, Incheon', // carry-over
  f0822203: 'delist, Korea, Seoul', // carry-over
  f0826452: 'delist, NR', // carry-over
  f0832312: 'delist, USA, Auburn', // carry-over
  f0835613: 'delist, NR', // carry-over
  f0839767: 'delist, Korea, Suwon', // carry-over
  f0843728: 'delist, France', // carry-over
  f0845602: 'delist, NR', // carry-over
  f0846716: 'delist, USA, Santa Clara', // carry-over
  f0853597: 'delist, Korea, Gimpo-si', // carry-over
  f0857779: 'delist, Korea, Dongjak-gu', // carry-over
  f0859880: "delist, China, Ya'an", // carry-over
  f0866501: 'delist, NR', // carry-over
  f0866680: 'delist, China, Henan', // carry-over
  f0869590: 'delist, USA, Salt Lake City', // carry-over
  f0871928: 'delist, China, Taiwan, Taipei', // carry-over
  f0872002: 'delist, NR', // carry-over
  f0873601: 'delist, Romania, Bucharest', // carry-over
  f0873852: 'delist, China, Yangzhou', // carry-over
  f0875458: 'delist, NR', // carry-over
  f0877555: 'delist, USA, Queens', // carry-over
  f0880167: 'delist, NR', // carry-over
  f0883511: 'delist, Korea, Guro-gu', // carry-over
  f0883732: 'delist, Korea, Yeongdeungpo-gu', // carry-over
  f0884747: 'delist, UK, London', // carry-over
  f0884795: 'delist, NR', // carry-over
  f0885079: 'delist, NR', // carry-over
  f0984163: "delist, China, Ma'anshan", // carry-over
  f0984680: 'delist, Korea, Jung-gu', // carry-over
  f0984915: 'delist, China, Tianjin', // carry-over
  f0985013: 'delist, Korea, Incheon', // carry-over
  f0986118: 'delist, Korea, Incheon', // carry-over
  f01015491: 'delist, Canada, Montreal', // carry-over
  f01016847: 'delist, China, Henan', // carry-over
  f01017177: 'delist, Japan, Tokyo', // carry-over
  f01019892: 'delist, USA, Lake Elsinore', // carry-over
  f01021896: 'delist, Korea, Seoul', // carry-over
  f01029201: 'delist, China, Beijing', // carry-over
  f01029682: 'delist, USA, Palm Harbour', // carry-over
  f01031325: 'delist, Korea, Busan', // carry-over
  f01031351: 'delist, USA, Palm Harbour', // carry-over
  f01034337: 'delist, Japan, Tokyo', // carry-over
  f01036391: 'delist, Korea, Jung-gu', // carry-over
  f01037829: 'delist, USA, Palm Harbour', // carry-over
  f01038170: 'delist, China, Shenzhen', // carry-over
  f01040006: 'delist, Korea, Jung-gu', // carry-over
  f01040707: 'delist, China, Tianjin', // carry-over
  f01041703: 'delist, China, Taiwan, New Taipei', // carry-over
  f01042552: 'delist, Japan, Tokyo', // carry-over
  f01043023: 'delist, NR', // carry-over
  f01043041: 'delist, Germany, Oberursel', // carry-over
  f01044658: 'delist, USA, Fremont', // carry-over
  f01044820: 'delist, Japan, Tokyo', // carry-over
  f01045592: 'delist, NR', // carry-over
  f01045985: 'delist, Russia', // carry-over
  f01046865: 'delist, China, Shenzhen', // carry-over
  f01047445: 'delist, NR', // carry-over
  f01048957: 'delist, Korea, Gangnam-gu', // carry-over
  f01053601: 'delist, NR', // carry-over
  f01059620: 'delist, NR', // carry-over
  f01060045: 'delist, China, Foshan', // carry-over
  f01060792: 'delist, USA, London', // carry-over
  f01061522: 'delist, NR', // carry-over
  f01062833: 'delist, China, Foshan', // carry-over
  f01063481: 'delist, USA, London', // carry-over
  f01067047: 'delist, China, Foshan', // carry-over
  f01070040: 'delist, NR', // carry-over
  f01072655: 'delist, Sweden, Gothenburg', // carry-over
  f01080779: 'delist, China, Sichuan', // carry-over
  f01086720: 'delist, Thailand, Bangkok', // carry-over
  f01090578: 'delist, Russia, Lipetsk', // carry-over
  f01093254: 'delist, NR', // carry-over
  f01094066: 'delist, China, Beijing', // carry-over
  f01094788: 'delist, Bulgaria, Sofia', // carry-over
  f01095171: 'delist, USA, Covina', // carry-over
  f01095191: 'delist, USA, Rockledge', // carry-over
  f01096465: 'delist, USA', // carry-over
  f01096590: 'delist, Russia, Lipetsk', // carry-over
  f01098845: 'delist, USA', // carry-over
  f01101881: 'delist, NR', // carry-over
  f01101884: 'delist, NR', // carry-over
  f01102006: 'delist, NR', // carry-over
  f01102085: 'delist, NR', // carry-over
  f01103281: 'delist, China, Taizhou', // carry-over
  f01104053: 'delist, USA', // carry-over
  f01104210: 'delist, China, Changsha', // carry-over
  f01105377: 'delist, Korea, Jung-gu', // carry-over
  f01106369: 'delist, China, Hangzhou', // carry-over
  f01106730: 'delist, China, Yunfu', // carry-over
  f01107129: 'delist, USA', // carry-over
  f01108193: 'delist, autolisted', // carry-over
  f01108733: 'delist, China, Jieyang', // carry-over
  f01108749: 'delist, USA', // carry-over
  f01109196: 'delist, NR', // carry-over
  f01109622: 'delist, Bulgaria, Sofia', // carry-over
  f01110407: 'delist, Bulgaria', // carry-over
  f01111673: 'delist, China, Changsha', // carry-over
  f01112287: 'delist, Ukraine, Kyiv', // carry-over
  f01112335: 'delist, China, Taiwan, Taoyuan District', // carry-over
  f01112504: 'delist, USA, Gilbert', // carry-over
  f01112547: 'delist, USA', // carry-over
  f01112647: "delist, China, Xi'an", // carry-over
  f01113723: 'delist, USA, Gilbert', // carry-over
  f01114364: 'delist, USA, Allentown', // carry-over
  f01114420: 'delist, Bulgaria, Sofia', // carry-over
  f01115274: 'delist, Japan, Yokohama', // carry-over
  f01120547: 'delist, USA, Gilbert', // carry-over
  f01121994: 'delist, China, Nanning', // carry-over
  f01122113: 'delist, Japan, Tokyo', // carry-over
  f01122412: 'delist, China', // carry-over
  f01124409: 'delist, China, Hangzhou', // carry-over
  f01124710: 'delist, autolisted', // carry-over
  f01125552: 'delist, Korea, Jung-gu', // carry-over
  f01133668: 'delist, China, Zhejiang', // carry-over
  f01136467: 'delist, autolisted', // carry-over
  f01142476: 'delist, autolisted', // carry-over
  f01145325: 'delist, autolisted', // carry-over
  f01148258: 'delist, autolisted', // carry-over
  f01148814: 'delist, autolisted', // carry-over
  f01153758: 'delist, autolisted', // carry-over
  f01157952: 'delist, Sweden, Gothenburg', // carry-over
  f01162286: 'delist, autolisted', // carry-over
  f01164271: 'delist, autolisted', // carry-over
  f01169194: 'delist, autolisted', // carry-over
  f01171920: 'delist, Sweden, Gothenburg', // carry-over
  f01176671: 'delist, autolisted' // carry-over
}

export default annotations
