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

  // Inflight

  // Unknown

  // Active

  f01800: 'active, China, Shenzhen + Chengdu', // 3410578 about 20 hours
  f07709: 'active, Korea, Dongjak-gu', // 3410277 about 14 hours
  f010491: 'active, China, Shenzhen', // 3410589 about 14 hours
  f020489: 'active, China, Lioaning', // 3410607 about 20 hours
  f023219: 'active, China, Beijing + Zhangjiakou', // 3410347 about 20 hours
  f024944: 'active, Korea, Yeongdeungpo-dong', // 3410509 about 20 hours
  f033036: 'active, China, Liaoning', // 3410646 about 20 hours
  f060072: 'active, China, Chongqing', // 3410488 about 20 hours
  f063628: 'active, China, Hefei', // 3410292 about 20 hours
  f081988: 'active, NR', // 3410683 about 14 hours
  f082635: 'active, China, Yibin', // 3410290 about 20 hours
  f097720: 'active, Korea, Bucheon-si', // 3410285 about 20 hours
  f0110804: 'active, USA, Santa Clara', // 3410363 about 7 hours
  f0115108: 'active, Korea, Yangcheon-gu', // 3410302 about 20 hours
  f0122815: 'active, Korea, Bucheon-si, Healthcarenavi_80', // 3410293 about 20 hours
  f0124554: 'active, Korea, Gimhae', // 3410281 about 20 hours
  f0127896: 'active, Bulgaria, Sofia, sofiaminer', // 3410287 about 6 hours
  f0135758: 'active, China, Nanjing, Hangzhou', // 3410282 about 20 hours
  f0137168: 'active, China, Beijing', // 3410283 about 7 hours
  f0157115: "active, China, Xi'an", // 3410284 about 20 hours
  f0157564: 'active, Korea, Daejeon', // 3410286 about 20 hours
  f0167254: 'active, Russia, St. Petersburg', // 3410379 about 20 hours
  f0218407: 'active, China, Shanghai', // 3410504 about 20 hours
  f0228855: 'active, Korea, Guro-gu', // 3410301 about 20 hours
  f0401416: 'active, Japan, Fukuoka', // 3410315 about 20 hours
  f0406478: 'active, China, Nanjing', // 3410387 about 20 hours
  f0498868: 'active, China, Nanjing', // 3410469 about 20 hours
  f0509062: 'active, NR', // 3411112 about 14 hours
  f0723722: 'active, USA, New York', // 3410300 about 20 hours
  f0813086: 'active, Korea, Jung-gu', // 3410528 about 20 hours
  f0838684: 'active, Czechia, Prague', // 3409977 about 14 hours
  f01027268: 'active, Korea, Busan', // 3410411 about 20 hours
  f01058790: 'active, Japan', // 3409952 about 21 hours
  f01071194: 'active, USA, San Jose', // 3410295 about 20 hours
  f01086762: 'active, Korea, Seoul', // 3410317 about 20 hours
  f01099820: 'active, China, Wenzhou', // 3410415 about 20 hours
  f01105829: 'active, Korea', // 3410298 about 20 hours
  f01121232: 'active, Finland, Helsinki', // 3410322 about 14 hours
  f01128462: 'active, China, Changsha', // 3410312 about 20 hours
  f01131751: 'active, China, Hangzhou', // 3410417 about 20 hours
  f01141810: 'active, Korea', // 3410420 about 20 hours
  f01159240: 'active, China, Taizhou', // 3410316 about 20 hours
  f01164500: 'active, China, Henan', // 3410529 about 20 hours
  f01175453: 'active, China, Guangzhou', // 3410313 about 20 hours
  f01178915: 'active, Korea, Ulju-gun', // 3410310 about 20 hours
  f01201505: 'active, China, Chongqing', // 3410309 about 20 hours
  f01212031: 'active, China, Wenzhou', // 3410308 about 20 hours
  f01227505: 'active, Korea', // 3410324 about 20 hours
  f01251721: 'active, Japan', // 3410321 about 20 hours
  f01285363: 'active, Korea, Ulju-gun', // 3410338 about 20 hours
  f01289763: 'active, France', // 3410530 about 20 hours
  f01292110: 'active, China, Beijing', // 3410318 about 20 hours
  f01323287: 'active, Korea, Gyeyang-gu', // 3410327 about 20 hours
  f01337533: 'active, Bulgaria, Varna', // 3410337 about 20 hours
  f01391982: 'active, Korea, Ulju-gun', // 3410325 about 20 hours
  f01398391: 'active, China, Chengdu', // 3410453 about 20 hours
  f01407260: 'active, Korea, Gangnam-gu', // 3410424 about 20 hours
  f01412953: 'active, Japan', // 3410333 about 20 hours
  f01423116: 'active, Norway, Skjetten', // 3410335 about 7 hours
  f01423546: 'active, China, Guangdong', // 3410497 about 20 hours
  f01424323: 'active, Korea, Ulju-gun', // 3410332 about 20 hours
  f01443744: 'active, Finland, Helsinki', // 3410348 about 20 hours
  f01444561: 'active, Romania, Iasi', // 3410329 about 20 hours
  f01448847: 'active, China, Sichuan', // 3410565 about 20 hours
  f01461671: 'active, Korea, Bucheon-si', // 3410334 about 20 hours
  f01461725: 'active, Korea, Bucheon-si', // 3410331 about 20 hours
  f01472022: 'active, Korea, Seongbuk-gu, Icheon-si', // 3410425 about 20 hours
  f01474735: 'active, Korea, Hanam', // 3410336 about 20 hours
  f01497836: 'active, Korea, Ulju-gun', // 3410330 about 20 hours
  f01516894: 'active, Korea, Icheon-si', // 3410349 about 20 hours
  f01537511: 'active, autolisted', // 3410577 about 20 hours
  f01545009: 'active, autolisted', // 3410340 about 20 hours
  f01579009: 'active, autolisted', // 3410339 about 20 hours
  f01611281: 'active, autolisted', // 3410271 about 6 hours
  f01625485: 'active, autolisted', // 3410272 about 20 hours
  f01628533: 'active, autolisted', // 3410413 about 20 hours
  f01652952: 'active, autolisted', // 3410430 about 20 hours
  f01654478: 'active, autolisted', // 3410274 about 20 hours
  f01690631: 'active, autolisted', // 3410446 about 20 hours
  f01690643: 'active, autolisted', // 3410444 about 20 hours
  f01690774: 'active, autolisted', // 3410447 about 20 hours
  f01690781: 'active, autolisted', // 3410439 about 20 hours

  // Active-sealing (active - with in-flight sealing)

  f042567: 'active-sealing, China, Jinhua', // 3410288
  f081644: 'active-sealing, China, Wenzhou', // 3410280
  f087890: "active-sealing, China, Xi'an", // 3410341
  f094374: 'active-sealing, China, Nanyang', // 3410289
  f0130912: 'active-sealing, China, Hong Kong', // 3410291
  f0164291: 'active-sealing, China, Fujian', // 3410445
  f0165375: 'active-sealing, Korea, Seongnam-si', // 3410303
  f0478837: 'active-sealing, China, Zhangzhou', // 3410036
  f0495421: 'active-sealing, China, Zhangzhou, Zhejiang, Xiamen', // 3410035
  f0694881: 'active-sealing, China, Hangzhou', // 3410304
  f0717913: 'active-sealing, Korea, Jung-gu', // 3410297
  f0724219: 'active-sealing, Spain, Vilanova del Cami', // 3410296
  f0857798: 'active-sealing, China, Wenzhou', // 3410294
  f01045812: 'active-sealing, China, Taiwan, New Taipei', // 3410314
  f01053334: 'active-sealing, Korea, Mapo-gu', // 3410299
  f01136592: 'active-sealing, Korea, Seongnam-si', // 3410306
  f01142318: 'active-sealing, China, Chongqing', // 3410305
  f01158696: 'active-sealing, Vietnam', // 3410344
  f01186391: 'active-sealing, China, Shenzhen', // 3410311
  f01190002: 'active-sealing, Korea, Songpa-gu', // 3409984
  f01225882: 'active-sealing, autolisted', // 3410307
  f01251209: 'active-sealing, China, Wuxi', // 3410342
  f01268426: 'active-sealing, China, Hangzhou', // 3410320
  f01269025: 'active-sealing, China, Nanjing', // 3410319
  f01271898: 'active-sealing, China, Wuxi', // 3410350
  f01279864: 'active-sealing, Korea, Icheon-si, Seongnam-si', // 3410326
  f01315486: 'active-sealing, USA, San Antonio', // 3410323
  f01353593: 'active-sealing, China, Nanjing, Hangzhou', // 3410366
  f01393827: 'active-sealing, Korea, Icheon-si', // 3410328
  f01482290: 'active-sealing, China, Nanjing', // 3410358
  f01509552: 'active-sealing, autolisted', // 3410343

  // Sealing

  f02490: 'sealing, China, Fujian', // 3410361
  f03345: 'sealing, China, Fuzhou, chh', // 3410383
  f08019: 'sealing, China, Yantai, 三合', // 3410397
  f015233: 'sealing, China, Nanjing', // 3410359
  f024550: 'sealing, China, Wenzhou', // 3410356
  f033463: 'sealing, China, Nanjing, Hangzhou', // 3410357
  f039515: 'sealing, China, Chongqing, valarhash', // 3410396
  f044160: 'sealing, China, Guangzhou, muxing', // 3410367
  f062318: 'sealing, Korea, Naju', // 3410360
  f065610: "sealing, China, Xi'an", // 3410392
  f080103: 'sealing, Korea, Seongnam-si', // 3410380
  f087883: "sealing, China, Xi'an", // 3410368
  f0111174: 'sealing, China, Guangzhou', // 3410362
  f0121771: 'sealing, NR', // 3410757
  f0131901: 'sealing, Korea, Daejeon', // 3410381
  f0134671: 'sealing, Korea, Gimpo-si', // 3410365
  f0134839: "sealing, China, Xi'an", // 3410369
  f0135779: 'sealing, China, Nanjing, Hangzhou', // 3410467
  f0153278: "sealing, China, Xi'an", // 3410466
  f0156207: 'sealing, Korea, Ulsan', // 3410841
  f0157127: "sealing, China, Xi'an", // 3410468
  f0159380: 'sealing, China, Dongsheng', // 3410364
  f0162394: 'sealing, China, Guangzhou', // 3410382
  f0172300: 'sealing, China, Shenzhen', // 3410384
  f0215461: 'sealing, Korea, Gimhae', // 3410484
  f0217805: 'sealing, China, Taiwan, Taipei', // 3418837
  f0241666: "sealing, China, Xi'an", // 3410474
  f0397802: 'sealing, China, Chengdu', // 3410476
  f0403177: 'sealing, China, Huizhou', // 3410391
  f0406533: 'sealing, China, Nanjing, Hangzhou', // 3410470
  f0413563: 'sealing, Korea, Gangnam-gu', // 3410388
  f0419768: 'sealing, Korea, Seongnam-si', // 3410433
  f0433689: 'sealing, China, Wuxi', // 3410389
  f0433690: 'sealing, China, Wuxi', // 3410390
  f0433691: 'sealing, China, Wuxi', // 3410393
  f0458627: 'sealing, Korea, Seongnam-si', // 3410510
  f0460440: 'sealing, Korea, Seongnam-si', // 3410386
  f0482619: 'sealing, Korea, Seongnam-si', // 3410398
  f0488689: 'sealing, China, Guangdong, Shanghai', // 3410385
  f0488887: 'sealing, China, Shanghai, Guangdong', // 3410513
  f0488889: 'sealing, China, Nanchang', // 3410511
  f0500878: 'sealing, NR', // 3411104
  f0505593: 'sealing, NR', // 3411111
  f0508892: 'sealing, NR', // 3411010
  f0514737: 'sealing, Korea, Busan', // 3410403
  f0692371: 'sealing, Malaysia', // 3410490
  f0729674: 'sealing, Canada, Vancouver', // 3410410
  f0735027: 'sealing, China, Nanjing, Hangzhou', // 3410473
  f0750779: 'sealing, China, Meishan', // 3410475
  f0752620: 'sealing, China, Nanjing, Hangzhou', // 3410471
  f0752635: 'sealing, China, Nanjing, Hangzhou', // 3410492
  f0752695: 'sealing, Korea, Seongnam-si', // 3410426
  f0757233: 'sealing, Spain, Gipuzkoa', // 3410404
  f0813992: 'sealing, China, Nanjing, Hangzhou', // 3418836
  f0814012: 'sealing, China, Nanjing', // 3410481
  f0814049: 'sealing, China, Nanjing, Hangzhou', // 3410485
  f0832373: 'sealing, China, Yibin', // 3410401
  f0845245: 'sealing, Korea, Busan', // 3410408
  f0864910: 'sealing, Korea, Gwangjin-gu', // 3410409
  f0870558: 'sealing, China, Hong Kong', // 3410489
  f0871563: "sealing, China, Xi'an", // 3410107
  f01023503: 'sealing, Korea, Busan', // 3410412
  f01024886: 'sealing, China, Wenzhou', // 3410399
  f01033119: 'sealing, France, Paris', // 3410406
  f01040469: 'sealing, Korea', // 3410400
  f01063832: 'sealing, China, Nanjing, Hangzhou', // 3410491
  f01063833: 'sealing, China, Hangzhou, Nanjing', // 3410405
  f01087002: "sealing, China, Xi'an", // 3410478
  f01089422: 'sealing, China, Beijing', // 3410472
  f01095915: 'sealing, China', // 3410414
  f01110284: 'sealing, NR', // 3418886
  f01129570: 'sealing, China, Beijing', // 3410486
  f01130100: 'sealing, autolisted', // 3418895
  f01132416: 'sealing, autolisted', // 3418877
  f01136409: 'sealing, China, Beijing', // 3410421
  f01160029: 'sealing, China, Shenzhen', // 3410422
  f01168710: 'sealing, China, Beijing', // 3410419
  f01189566: 'sealing, autolisted', // 3418963
  f01191967: 'sealing, Korea, Ulju-gun, Seongbuk-gu', // 3410416
  f01198583: 'sealing, China, Hong Kong', // 3410487
  f01203550: 'sealing, China, Sichuan', // 3410479
  f01203985: 'sealing, China, Guangdong, Shanghai', // 3410418
  f01207671: 'sealing, China, Guangdong', // 3410423
  f01211558: 'sealing, autolisted', // 3418977
  f01213229: 'sealing, China, Nanjing, Hangzhou', // 3410495
  f01216339: 'sealing, China, Beijing', // 3410477
  f01267516: 'sealing, China, Taizhou', // 3410494
  f01275219: 'sealing, China, Shenzhen', // 3410480
  f01291138: 'sealing, China, Suzhou', // 3410429
  f01310564: 'sealing, autolisted', // 3410606
  f01320931: 'sealing, China, Nanjing', // 3410496
  f01328084: 'sealing, Korea, Jung-ang', // 3410427
  f01386984: 'sealing, China, Bozhou', // 3410431
  f01392850: 'sealing, China, Baotou', // 3410432
  f01399784: 'sealing, autolisted', // 3419037
  f01399875: 'sealing, autolisted', // 3419036
  f01422501: 'sealing, autolisted', // 3419038
  f01431043: 'sealing, autolisted', // 3419047
  f01543586: 'sealing, autolisted', // 3410493
  f01588642: 'sealing, autolisted', // 3410407
  f01609999: 'sealing, autolisted', // 3410402
  f01654059: 'sealing, autolisted', // 3410428
  f01672748: 'sealing, autolisted', // 3410434

  // Stuck

  f0101087: 'stuck, Korea', // StartDataTransfer: 1 day
  f0146751: 'stuck, China, Jiangsu', // StartDataTransfer: 1 day
  f01602479: 'stuck, autolisted', // CheckForAcceptance: 1 day
  f01606675: 'stuck, autolisted', // CheckForAcceptance: 1 day
  f01606849: 'stuck, autolisted', // CheckForAcceptance: 1 day

  // Busy

  // Min Size

  f01238: 'min-size, Vietnam, Hanoi, FILECOIN-VIETNAM', // 131072 < 134217728
  f01247: 'min-size, Canada, Montreal, BigChungus', // 131072 < 67108864
  f01276: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 4294967296
  f01277: 'min-size, Sweden, Stockholm, tvsthlm', // 131072 < 1073741824
  f02387: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 17179869184
  f02401: 'min-size, Canada, Chambly, NBFS Canada', // 131072 < 17179869184
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 131072 < 4294967296
  f02620: 'min-size, Poland, Krakow, @magik6k', // 131072 < 33554432
  f03488: 'min-size, Korea, Yeongdeungpo-dong', // 131072 < 1073741824
  f08240: 'min-size, Russia, Novosibirsk, Rabinovitch', // 131072 < 104857600
  f08399: 'min-size, USA, Sammamish, MiningMusing', // 131072 < 8589934592
  f08403: 'min-size, UK, Lower Slaughter, TippyFlits', // 131072 < 268435456
  f09848: 'min-size, USA, Irvine, BigBearLake', // 131072 < 536870912
  f010088: 'min-size, USA, Kirkland', // 131072 < 1048576
  f010254: 'min-size, Japan, Minamata', // 131072 < 134217728
  f010617: 'min-size, Canada, Surrey, kernelogic2, @feiya200', // 131072 < 17179869184
  f014409: 'min-size, USA, Monroe, Meatball Part III', // 131072 < 2147483648
  f014768: 'min-size, Singapore, Funktafide, @Funk', // 131072 < 536870912
  f015927: 'min-size, USA, East Islip, CDImine', // 131072 < 4294967296
  f018501: 'min-size, China, Beijing', // 131072 < 1073741824
  f019104: 'min-size, Canada, Chambly, Northstar', // 131072 < 4294967296
  f019362: 'min-size, China, Hangzhou, 青青子衿', // 131072 < 268435456
  f019399: 'min-size, Korea, Busan', // 131072 < 1073741824
  f019551: 'min-size, UK, Birmingham, Neonix', // 131072 < 134217728
  f020385: 'min-size, Korea, Incheon', // 131072 < 8589934592
  f020904: 'min-size, Korea, Uijeongbu-si, FILTop', // 131072 < 52428800
  f022142: 'min-size, USA, Queens, Nelson SR2', // 131072 < 17179869184
  f022163: 'min-size, Switzerland, dns:fil.akasha.network', // 131072 < 2147484000
  f022352: 'min-size, Norway, Borgen, TechHedge, @Reiers', // 131072 < 1048576
  f022399: 'min-size, China, Beijing', // 131072 < 10485760
  f023467: 'min-size, Norway, Oslo, PhiMining.io', // 131072 < 134217728
  f023971: 'min-size, USA, FLMiner', // 131072 < 4294967296
  f024184: 'min-size, Korea, Yeongdeungpo-dong', // 131072 < 1073741824
  f030379: 'min-size, Korea, Uiwang', // 131072 < 1073741824
  f032824: 'min-size, USA, Cedar Park', // 131072 < 134217728
  f032934: 'min-size, Korea, Incheon', // 131072 < 1073741824
  f033189: 'min-size, China, Xiamen', // 131072 < 2147483648
  f033356: 'min-size, Korea, Yeongdeungpo-dong', // 131072 < 1073741824
  f043376: 'min-size, Korea, Incheon', // 131072 < 4294967296
  f047419: 'min-size, USA, Waukesha', // 131072 < 4294967296
  f048669: 'min-size, China, Jiangsu + Yangzhou', // 131072 < 1048576
  f058369: 'min-size, USA, Boston', // 131072 < 268435456
  f058374: 'min-size, USA, Lincoln', // 131072 < 17179869184
  f062353: 'min-size, Germany, Frankfurt', // 131072 < 4294967296
  f066596: 'min-size, USA, San Diego, PiKNiK & Company', // 131072 < 536870912
  f071624: 'min-size, USA, Boyne City, Adept', // 131072 < 4294967296
  f079817: "min-size, Russia, Ul'yanovka", // 131072 < 4294967296
  f085899: 'min-size, China, Wuxi', // 131072 < 16777216
  f089840: 'min-size, Korea, Yeongdeungpo-gu', // 131072 < 524288000
  f099608: 'min-size, Latvia, Riga, stander', // 131072 < 18253611008
  f0102313: 'min-size, Korea, Gangseo-gu', // 131072 < 524288000
  f0104967: 'min-size, Ukraine, Ternopil', // 131072 < 2147483648
  f0110768: 'min-size, Korea, Gwangju', // 131072 < 4294967296
  f0113008: 'min-size, China, Hong Kong', // 131072 < 33554432
  f0120983: 'min-size, China, Fujian', // 131072 < 268435456
  f0121768: 'min-size, China, Guangdong', // 131072 < 1073741824
  f0121958: 'min-size, Korea, Seoul', // 131072 < 67108864
  f0126868: 'min-size, Ukraine, Vinnytsia', // 131072 < 209715200
  f0131611: 'min-size, Korea, Jeju City', // 131072 < 67108864
  f0134565: 'min-size, China, Karamay', // 131072 < 1536524550
  f0134682: 'min-size, China, Beijing', // 131072 < 268435456
  f0134991: 'min-size, China, Foshan', // 131072 < 1536163840
  f0135078: 'min-size, USA, Denver', // 131072 < 8589934592
  f0141446: 'min-size, China, Suzhou', // 131072 < 10485760
  f0142606: 'min-size, Korea, Gangseo-gu', // 131072 < 1073741824
  f0145162: 'min-size, Japan, Kumamoto', // 131072 < 134217728
  f0145874: 'min-size, Canada, Brampton', // 131072 < 134217728
  f0149444: 'min-size, Korea, Gangseo-gu', // 131072 < 1073741824
  f0149765: 'min-size, China, Beijing', // 131072 < 268435456
  f0157535: 'min-size, Canada, Brampton', // 131072 < 4294967296
  f0165400: 'min-size, Canada, Brampton', // 131072 < 2147483648
  f0215497: 'min-size, Korea, Gangseo-gu', // 131072 < 1073741824
  f0397083: 'min-size, China, Beijing', // 131072 < 4294967296
  f0399083: 'min-size, Korea, Seoul + Kwangmyong', // 131072 < 31457280
  f0400103: 'min-size, China, Hong Kong', // 131072 < 1048576
  f0400920: 'min-size, China, Luzhou', // 131072 < 1048576
  f0401254: 'min-size, Korea, Uijeongbu-si', // 131072 < 52428800
  f0406322: 'min-size, USA, Long Beach', // 131072 < 4294967296
  f0406703: 'min-size, USA, Scottsdale', // 131072 < 4294967296
  f0436454: 'min-size, China, Wuxi', // 131072 < 67108864
  f0440429: 'min-size, Korea, Uiwang', // 131072 < 1073741824
  f0447183: 'min-size, Canada, Montreal', // 131072 < 4294967296
  f0461791: 'min-size, Korea, Gwangju', // 131072 < 104857600
  f0492030: 'min-size, USA, Holmdel', // 131072 < 134217728
  f0504054: 'min-size, China, Luzhou', // 131072 < 1048576
  f0508988: 'min-size, Korea, Bucheon-si', // 131072 < 1073741824
  f0524489: 'min-size, Korea, Pocheon-si', // 131072 < 52428800
  f0533124: 'min-size, Korea, Seoul', // 131072 < 31457280
  f0694396: 'min-size, UK, Dudley', // 131072 < 134217728
  f0717969: 'min-size, USA, Los Angeles', // 131072 < 1048576
  f0726405: 'min-size, Korea, Seoul', // 131072 < 31457280
  f0747617: 'min-size, China, Jiangmen', // 131072 < 1048576
  f0754373: 'min-size, Netherlands, Rijssen', // 131072 < 262144
  f0763337: 'min-size, USA, San Diego', // 131072 < 536870912
  f0773157: 'min-size, Australia, Sydney', // 131072 < 134217728
  f0828066: 'min-size, USA, San Digeo', // 131072 < 536870912
  f0835643: 'min-size, Korea, Songpa-gu', // 131072 < 1048576
  f0842485: 'min-size, Korea, Seoul', // 131072 < 31457280
  f0875411: 'min-size, Korea', // 131072 < 134217728
  f0875769: 'min-size, USA, Salt Lake City', // 131072 < 8589934592
  f01002224: 'min-size, Korea', // 131072 < 134217728
  f01024814: 'min-size, USA, Wilson', // 131072 < 34359738368
  f01035680: 'min-size, USA, Denver', // 131072 < 8589934592
  f01044351: 'min-size, Korea, Gwangju', // 131072 < 104857600
  f01045784: 'min-size, USA, Ridgewood', // 131072 < 34359738368
  f01049918: 'min-size, USA, Bothell', // 131072 < 1048576
  f01051828: 'min-size, USA, San Diego', // 131072 < 536870912
  f01063173: 'min-size, Korea, Kayang-dong', // 131072 < 31457280
  f01072221: 'min-size, USA, San Diego', // 131072 < 4294967296
  f01091840: 'min-size, Canada, Saint-Hyacinthe', // 131072 < 4294967296
  f01096124: 'min-size, Korea, Uiwang', // 131072 < 1073741824
  f01096727: 'min-size, Korea, Gangseo-gu', // 131072 < 34359738368
  f01099052: 'min-size, Korea, Seodaemun-gu', // 131072 < 31457280
  f01108096: 'min-size, NR', // 131072 < 1073741824
  f01110276: 'min-size, Korea, Bucheon-si', // 131072 < 1073741824
  f01111110: 'min-size, autolisted', // 131072 < 1073741824
  f01126768: 'min-size, Korea, Seoul, Gunpo', // 131072 < 524288000
  f01133080: 'min-size, Korea, Mokpo', // 131072 < 104857600
  f01152097: 'min-size, Vietnam, Hanoi', // 131072 < 134217728
  f01169314: 'min-size, Germany, Munich', // 131072 < 1048576
  f01175097: 'min-size, USA, San Diego', // 131072 < 536870912
  f01179972: 'min-size, Russia, Tomsk', // 131072 < 134217728
  f01186444: 'min-size, Korea, Seoul', // 131072 < 1073741824
  f01190509: 'min-size, Korea, Gimhae', // 131072 < 1073741824
  f01221675: 'min-size, Korea, Uijeongbu-si', // 131072 < 52428800
  f01259059: 'min-size, Portugal, Lisbon', // 131072 < 134217728
  f01264125: 'min-size, autolisted', // 131072 < 4294967296
  f01376386: 'min-size, Korea, Hwaseong-si', // 131072 < 1073741824
  f01396100: 'min-size, Korea, Gwangju', // 131072 < 104857600
  f01402814: 'min-size, China, Hong Kong', // 131072 < 1048576
  f01414904: 'min-size, Korea', // 131072 < 1073741824
  f01437863: 'min-size, Korea, Wonju', // 131072 < 1073741824
  f01509930: 'min-size, autolisted', // 131072 < 1073741824
  f01652333: 'min-size, autolisted', // 131072 < 536870912
  f01662356: 'min-size, autolisted', // 131072 < 536870912
  f01662887: 'min-size, autolisted', // 131072 < 4294967296
  f01681808: 'min-size, autolisted', // 131072 < 1073741824

  // Max Size

  // Min Ask

  f01241: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f01280: 'min-ask, China, Wuxi', // 20000000 < 12207031250000000
  f02301: 'min-ask, USA, San Jose', // 20000000 < 122070312500000
  f02381: 'min-ask, China, Dongguan', // 20000000 < 6103515625000
  f02500: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f02501: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f02514: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f02622: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f02623: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f03143: 'min-ask, Vietman, Ho Chi Minh City + China, Beijing + Shijiazhuang', // 20000000 < 122070312500000
  f03223: 'min-ask, USA', // 20000000 < 122070312500000
  f03274: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f03275: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f03364: 'min-ask, China, Inner Mongolia', // 20000000 < 12207031250000000
  f05315: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f05316: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f05317: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f05664: 'min-ask, China, Hong Kong', // 20000000 < 12207031250
  f07850: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f07998: 'min-ask, China, Hangzhou, 安问', // 20000000 < 97656250000
  f08257: 'min-ask, China, Zhejiang + Singapore', // 20000000 < 12207031250
  f08383: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f09693: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f010253: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f015897: 'min-ask, China, Hong Kong', // 20000000 < 12207031250000000
  f017665: 'min-ask, China, Shenyang', // 20000000 < 1220703125000
  f018784:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f020747: 'min-ask, China, Xiamen', // 20000000 < 122070312
  f022130: 'min-ask, Korea, Seodaemun-gu', // 20000000 < 61035156
  f022308: 'min-ask, China, Bozhou', // 20000000 < 12207031250
  f023495: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f023825: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f024015: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f024016: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f024156: 'min-ask, USA', // 20000000 < 1342773437500000
  f029404: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f033123: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f034258: 'min-ask, China, Mianyang', // 20000000 < 12207031250000
  f039800: 'min-ask, China, Chengdu', // 20000000 < 122070312500000
  f039940: 'min-ask, China, Mianyang', // 20000000 < 12207031250000
  f042540: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f042558: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f042635: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f055123: 'min-ask, Korea, Busan', // 20000000 < 1220703125
  f056611: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f057614: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f057698: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f061158: 'min-ask, China, Guangdong, phoenix', // 20000000 < 6103515625
  f061407: 'min-ask, China, Shenzhen', // 20000000 < 12207031250
  f062260: 'min-ask, China, Guangzhou', // 20000000 < 61035156250000
  f062334: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f065103: 'min-ask, USA + China, Suzhou + Guangzhou + Karamay', // 20000000 < 122070312500000
  f065200: 'min-ask, China, Yibin', // 20000000 < 24414062
  f065280: 'min-ask, Korea, Songpa-gu, Data Store Ltd', // 20000000 < 122070312500000
  f066104: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f069915: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f069919: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f070999: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f071980: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f073552: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f074738: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f078772: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f079197: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f079426: 'min-ask, China, Shandong', // 20000000 < 12207031250000000000000000
  f080480: 'min-ask, Ukraine, Lviv', // 20000000 < 122070312
  f084879: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f086151: 'min-ask, China, Dongguan', // 20000000 < 122070324707031
  f092514: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f094614: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f097370: 'min-ask, China, Zhengzhou', // 20000000 < 122070312500000
  f097386: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f098706: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f098770: 'min-ask, USA, Pontiac', // 20000000 < 12207031250000000
  f099239: 'min-ask, China, Hong Kong', // 20000000 < 12207031250000000
  f0100082: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0100116: 'min-ask, Korea, Uljin County', // 20000000 < 122070312500000
  f0102375: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102513: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102670: 'min-ask, China, Xiamen', // 20000000 < 12206909179687500000
  f0103282: 'min-ask, China, Maoming', // 20000000 < 61035156250000
  f0103851: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0106949: 'min-ask, Korea, Seoul', // 20000000 < 366210937
  f0107995: 'min-ask, Korea, Sejong', // 20000000 < 121948242187500000
  f0110283: 'min-ask, China, Zhongshan', // 20000000 < 12207031250000000000000000
  f0110442: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0110936: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0110944: 'min-ask, China, Guangzhou', // 20000000 < 61035156250000
  f0114924: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0115744: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0116766: 'min-ask, USA, Westford', // 20000000 < 24414062500
  f0121450: 'min-ask, China, Fujian', // 20000000 < 1220581054687500000
  f0123931: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0126824: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0128974: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0129072: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0129976: 'min-ask, Korea, Gwangju', // 20000000 < 1220703125000
  f0131464: 'min-ask, USA, Ashburn', // 20000000 < 122070312500000000
  f0133886: 'min-ask, China, Guangdong', // 20000000 < 366210937500000
  f0135738: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0136014: 'min-ask, China, Suzhou', // 20000000 < 12207031250000000
  f0141614: 'min-ask, China, Fujian', // 20000000 < 1220703124877929687500000
  f0142637: 'min-ask, China, Mianyang', // 20000000 < 12207031250000
  f0143858: 'min-ask, USA, Calistoga', // 20000000 < 122070312500000
  f0145313: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0145784: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0146165: 'min-ask, China, Huizhou', // 20000000 < 122070190429687500000
  f0146875: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0147284: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0148399: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0149768: 'min-ask, China, Dongguan', // 20000000 < 1220703124999877929687500000
  f0151281: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0151692: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0152747: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0154988: 'min-ask, China, Dongguan', // 20000000 < 122070190429687500000
  f0155384: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0157941: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f0158156: 'min-ask, Korea, Gangbuk-gu', // 20000000 < 122070312500
  f0158468: 'min-ask, China, Guangzhou', // 20000000 < 12206909179687500000
  f0159961: 'min-ask, China, Chongqing', // 20000000 < 6103515625
  f0187709: 'min-ask, Russia, Moscow', // 20000000 < 2441406250
  f0216138: 'min-ask, China, Shenzhen', // 20000000 < 610351562500
  f0220004: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0222962: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0224144: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0224841: 'min-ask, China, Guangzhou', // 20000000 < 12206909179687500000
  f0232650: 'min-ask, China, Zhongshan', // 20000000 < 1208496093750000000000000
  f0240185: 'min-ask, USA, Clifton', // 20000000 < 122070312500000
  f0392734: 'min-ask, Korea, Icheon-si', // 20000000 < 122070190429687500000
  f0392785: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0395911: 'min-ask, NR', // 20000000 < 121948242187500000
  f0396188: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0396607: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0396844: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0397855: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0401677: 'min-ask, NR', // 20000000 < 12207031250000000000000000
  f0409356: 'min-ask, NR', // 20000000 < 121948242187500000
  f0409765: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0410506: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0421061: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0426531: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0426933: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0427393: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0431665: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0432345: 'min-ask, China, Guangdong', // 20000000 < 122070312499999877929687500000
  f0449662: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0452808: 'min-ask, NR', // 20000000 < 122070312500000
  f0456740: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0456741: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0463950: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0466405: 'min-ask, Germany, Niederaula', // 20000000 < 1219482421
  f0471007: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0488888: 'min-ask, China, Nanchang', // 20000000 < 122070312500000
  f0490173: 'min-ask, Korea, Jung-gu', // 20000000 < 1220703125000
  f0494841: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f0498920: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0511732: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0513351: 'min-ask, NR', // 20000000 < 24414062500000
  f0518877: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0567567: 'min-ask, China, Beijing', // 20000000 < 12207031250000000000
  f0673645: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0676048: 'min-ask, China, Hangzhou', // 20000000 < 3662109375000
  f0686111: 'min-ask, Korea, Jung-gu', // 20000000 < 1220703125000
  f0689753: 'min-ask, NR', // 20000000 < 122070312500000
  f0690459: 'min-ask, China, Beijing', // 20000000 < 12207031127929687500000
  f0705118: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0705704: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0717254: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0720629: 'min-ask, Germany, Berlin', // 20000000 < 61035156
  f0722658: 'min-ask, China, Chengdu', // 20000000 < 61035156250000
  f0730266: 'min-ask, China, Chongqing', // 20000000 < 12207031250000000
  f0730353: 'min-ask, Korea, Uijeongbu-si', // 20000000 < 122070190429687500000
  f0731235: 'min-ask, Ukraine, Odessa', // 20000000 < 61035156
  f0745116: 'min-ask, China, Beijing', // 20000000 < 1220703002929687500000
  f0746542: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0749380: 'min-ask, China, Dongguan', // 20000000 < 1220703002929687500000
  f0752322: 'min-ask, USA, Watsonville', // 20000000 < 12207031250000
  f0756207: 'min-ask, Korea', // 20000000 < 121948242187500000
  f0756338: 'min-ask, NR', // 20000000 < 122070312500000
  f0759826: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0764041: 'min-ask, China, Dongguan', // 20000000 < 122070312377929687500000
  f0766622: 'min-ask, China, Hangzhou', // 20000000 < 12207031250000
  f0846681: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0870005: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0874057: 'min-ask, Korea, Daejeon', // 20000000 < 1220703125
  f0879756: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01033857: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01033923: 'min-ask, Korea, Yongin-si', // 20000000 < 122070190429687500000
  f01033926: 'min-ask, Korea, Yongin-si', // 20000000 < 122070190429687500000
  f01036234: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01038099: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01045957: 'min-ask, NR', // 20000000 < 121948242187500000
  f01050158: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01062274: 'min-ask, Korea, Busan', // 20000000 < 12207031250
  f01070558: 'min-ask, China, Jinan', // 20000000 < 122070190429687500000
  f01076600: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f01097836: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01097957: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01098514: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01099362: 'min-ask, China, Baotou', // 20000000 < 48828125000000
  f01101298: 'min-ask, Korea, Yongin-si', // 20000000 < 121948242187500000
  f01106157: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01111457: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f01115166: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f01115949: 'min-ask, autolisted', // 20000000 < 1220703125
  f01117775: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f01118739: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f01119852: 'min-ask, China, Huizhou', // 20000000 < 1220581054687500000
  f01125511: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01125783: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01127529: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01128320: 'min-ask, China, Chengdu', // 20000000 < 12207031250
  f01128468: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01128844: 'min-ask, Spain, Pozuelo de Alarcon', // 20000000 < 488281250000000
  f01130388: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01131460: 'min-ask, China, Chengdu', // 20000000 < 6103515625000
  f01136165: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01137297: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01138014: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01139313: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01144275: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01144331: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01154394: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01155864: 'min-ask, autolisted', // 20000000 < 122070312500000000000
  f01156228: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01157271: 'min-ask, autolisted', // 20000000 < 122070312500
  f01172955: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01178141: 'min-ask, autolisted', // 20000000 < 122070312499999999999999999877929687500000
  f01178312: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01179094: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01179163: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01183845: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01185816: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01186659: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01202607: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01203032: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01203603: 'min-ask, China, Shenzhen', // 20000000 < 1220703125
  f01204565: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01206051: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01209313: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01209314: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01211025: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01214415: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01214418: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01214450: 'min-ask, autolisted', // 20000000 < 122070312
  f01214563: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01215348: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01222595: 'min-ask, Russia, Moscow', // 20000000 < 2441406250
  f01223120: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01223124: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01232837: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01244322: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01251473: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01258419: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01268747: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01270285: 'min-ask, autolisted', // 20000000 < 1220581054687500000
  f01304596: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01305881: 'min-ask, autolisted', // 20000000 < 12207031249999999999999999999999999999999877929687500000
  f01310053: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01317155: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01317157: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01319989: 'min-ask, Korea, Busan', // 20000000 < 12207031250
  f01321804: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01323699: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01334686: 'min-ask, autolisted', // 20000000 < 24414062
  f01354898: 'min-ask, Korea, Gwangsan-gu', // 20000000 < 1220703125000000
  f01360268: 'min-ask, Korea, Gimhae, Songpa-gu', // 20000000 < 183105468
  f01361064: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01365701: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01383151: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01412461: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01414711: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01421513: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01430671: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01438483: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01438485: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01439088: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01446978: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01449814: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01457254: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01459496: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01462978: 'min-ask, autolisted', // 20000000 < 1220703125000000
  f01466133: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01466136: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01469059: 'min-ask, autolisted', // 20000000 < 122070312499999877929687500000
  f01483637: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01483638: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01521877: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01546926: 'min-ask, autolisted', // 20000000 < 122070312500
  f01552492: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01558688: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01611272: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01619524: 'min-ask, autolisted', // 20000000 < 61035156
  f01622226: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01622243: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01635123: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01648376: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01656166: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01656499: 'min-ask, autolisted', // 20000000 < 1220703125000000
  f01672960: 'min-ask, autolisted', // 20000000 < 12207031250000
  f01691496: 'min-ask, autolisted', // 20000000 < 1220703125000000

  // Slashed

  // Error

  f0116436: 'error, Singapore', // error reading Response message from provider: stream reset
  f0116445: 'error, Singapore', // error reading Response message from provider: stream reset
  f0118317: 'error, Singapore', // error reading Response message from provider: stream reset
  f0118330: 'error, Singapore', // error reading Response message from provider: stream reset
  f0134516: 'error, Singapore', // error reading Response message from provider: stream reset
  f0134518: 'error, China, Guangdong', // error reading Response message from provider: stream reset
  f0401135: 'error, Singapore', // error reading Response message from provider: stream reset
  f0402371: 'error, China, Shanghai', // error reading Response message from provider: stream reset
  f0428177: 'error, China, Huizhou', // error reading Response message from provider: EOF
  f0494174: 'error, Norway', // deal failed: (State=26) deal data verification failed: error generating CommP: failed to get CommP: failed to build treeCaused by:    0: failed to create data store    1: No such file or directory (os error 2)
  f0517213: 'error, China, Guangdong + Argentina, La Plata', // error reading Response message from provider: stream reset
  f0522364: 'error, China, Beijing + UAE, Al Ain City', // error reading Response message from provider: stream reset
  f0522949: 'error, China, Beijing', // error reading Response message from provider: stream reset
  f0867298: 'error, China, Beijing + Sri Lanka, Rajagiriya', // error reading Response message from provider: stream reset

  // Dial backoff

  f02423: 'backoff, Ukraine, Kyiv',
  f03224: 'backoff, Ukraine, Kyiv',
  f014233: 'backoff, China, Shanghai + USA',
  f025025: 'backoff, China, Qingdao',
  f097914: 'backoff, NR',
  f099387: 'backoff, China, Shijiazhuang',
  f0693131: 'backoff, China, Zhongshan',
  f0715639: 'backoff, NR',
  f0856508: 'backoff, China, Taiwan, Taoyuan District',
  f01141518: 'backoff, autolisted',
  f01193462: 'backoff, autolisted',
  f01207214: 'backoff, autolisted',
  f01215068: 'backoff, autolisted',
  f01675393: 'backoff, autolisted',

  // Rejected

  f01152: 'rejected, China, Beijing',
  f01231: 'rejected, Singapore', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f01240: 'rejected, Netherlands, Dcent', // Deal rejected | Such deal is not accepted (type, duration, size, etc...)
  f01278: 'rejected, USA, Grand Rapids, MiMiner', // Deal rejected | Price below acceptance for such deal : 0.0002 FIL | For any questions you can reach me on Slack @stuberman
  f01750: 'rejected, autolisted', // no online
  f02421: 'rejected, China, Deyang + Singapore', // Deal from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q begins more than 7 days in the future, I do not like that
  f02528: 'rejected, Singapore', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f02609: 'rejected, China, Shanghai', // no online
  f03339: 'rejected, China, Luzhou, benxun', // no online
  f03347: 'rejected, China, Shenzhen', // no online
  f03362: 'rejected, Germany, Berlin',
  f08197: 'rejected, China, Foshan',
  f010241: 'rejected, China, Beijing + USA, Portland, 6Block-P', // no online
  f010405: 'rejected, China, Foshan',
  f010446: 'rejected, Netherlands, Angelo', // Deal rejected | Such deal is not accepted (type, duration, size, etc...)
  f010479: 'rejected, France, Fontenay-sous-Bois, s0nik42', // Deal rejected | Price below acceptance for such deal : 0.000005 FIL
  f014327:
    'rejected, China, Ningbo + Japan, Heiwajima + Germany, Frankfurt + USA + Canada, Toronto', // no online
  f015747: 'rejected, Japan, Setagaya-ku',
  f016563: 'rejected, China, Deyang + Singapore', // Deal from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q begins more than 7 days in the future, I do not like that
  f017193: "rejected, China, Xi'an + Singapore", // no online
  f017229: 'rejected, China, Sichuan',
  f020378: 'rejected, Bulgaria, Asenovgrad', // Deal rejected | Price below acceptance for such deal : 0.0000004 FIL | Ask somebody with f020378 in the slack nicknames
  f020523: 'rejected, China, Suzhou, changjiang', // sh: 1: VerifiedDeal:true: not found
  f020940: 'rejected, USA, Bellevue',
  f021075: 'rejected, China, Chengdu', // no online
  f021255: 'rejected, Netherlands + China, Suzhou', // sh: 1: /lotus_data/.lotusstorage/dealfilter.pl: not found
  f021479: 'rejected, NR', // proposed provider collateral below minimum: 23076707988 < 41864776848
  f021714: 'rejected, China, Hong Kong',
  f022125: 'rejected, China, Shenzhen', // no online
  f022261: 'rejected, China, Luzhou', // no online
  f022566: 'rejected, China, Nanchong',
  f022853: 'rejected, China, Fuzhou',
  f023179: 'rejected, China, Fuzhou', // sh: 1: f3rthootwyykyrhrxy3u3eihhxch7q5q7tlmzsxtlxuqwxcl2yvyjsjhrz5g37cjdhdufxm2qhyewt2dufasdf: not found
  f023198: 'rejected, NR', // no online
  f023678: 'rejected, China, Jiaxing', // no online
  f032888: 'rejected, China, Weifang',
  f040332: 'rejected, China, Shenzhen', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f042896: 'rejected, China, Deyang', // Deal from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q begins more than 7 days in the future, I do not like that
  f047857: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f049882: 'rejected, Netherlands, De Rijp, Chipz', // Deal rejected | Such deal is not accepted (type, duration, size, etc...)
  f052447: 'rejected, China, Karamay', // no online
  f054120: 'rejected, NR', // Deal from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q begins more than 7 days in the future, I do not like that
  f054414: 'rejected, NR', // no online
  f054415: 'rejected, NR', // no online
  f054417: 'rejected, NR', // no online
  f054418: 'rejected, NR', // no online
  f054420: 'rejected, NR', // no online
  f056573: 'rejected, China, Sichuan', // no online
  f057466: 'rejected, China, Guangzhou', // no online
  f057618: 'rejected, NR', // no online
  f064218: 'rejected, USA, Kirkland', // no online
  f067375: 'rejected, NR', // no online
  f068556: 'rejected, NR',
  f070730: 'rejected, NR', // Deal from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q begins more than 7 days in the future, I do not like that
  f073697: 'rejected, China, Karamay', // no online
  f079370: 'rejected, China, Zhangzhou', // no online
  f080468: 'rejected, NR', // no online
  f081323: 'rejected, UK, Cambridge', // no online
  f082095: 'rejected, China, Chengdu', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f083065: 'rejected, China, Taizhou', // no online
  f085777: 'rejected, China, Zhangzhou', // no online
  f086423: 'rejected, China, Chengdu', // no online
  f090864: 'rejected, NR', // sh: 1: jq: not found
  f094128: 'rejected, China, Shenzhen', // no online
  f096173: 'rejected, Korea, Gangnam-gu', // Deal rejected | Price below acceptance for such deal : 0.0000005 FIL
  f096974: 'rejected, China, Chongqing', // no online
  f097777: 'rejected, Ukraine, Ivano-Frankivsk', // Deal rejected | Price below acceptance for such deal : 0.0000005 FIL
  f0100066: 'rejected, NR', // no online
  f0101387: 'rejected, China, Shenzhen', // no online
  f0102358: 'rejected, China, Guizhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0104671: 'rejected, Japan, Ota-ku', // Deal rejected | Under maintenance, retry later
  f0107133: 'rejected, NR', // no online
  f0108672: 'rejected, NR', // no online
  f0109040: 'rejected, China, Zhangzhou', // no online
  f0109043: 'rejected, China, Karamay', // no online
  f0109606: 'rejected, NR', // no online
  f0110762: 'rejected, Korea, Seoul', // no online
  f0111544: 'rejected, Korea, Seoul', // no online
  f0111658: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0112075: 'rejected, Korea, Seoul', // no online
  f0112087: 'rejected, China, Xiamen', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0112679: 'rejected, NR', // no online
  f0112691: 'rejected, Korea, Seoul', // no online
  f0114043: 'rejected, Korea, Seoul', // no online
  f0114687: 'rejected, China, Dongguan', // no online
  f0116628: 'rejected, China, Shanghai', // no online
  f0117118: 'rejected, NR', // no online
  f0117556: 'rejected, NR', // no online
  f0118695: 'rejected, Korea, Seoul', // no online
  f0118837: 'rejected, Korea, Seoul', // no online
  f0118917: 'rejected, China, Shaoxing', // no online
  f0120546: 'rejected, Korea, Seoul', // no online
  f0120793: 'rejected, Korea, Seoul', // no online
  f0121602: 'rejected, China, Hong Kong', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0122398: 'rejected, NR', // no online
  f0122415: 'rejected, Korea, Seoul', // no online
  f0123275: 'rejected, Korea, Seoul', // no online
  f0123281: 'rejected, Korea, Seoul', // no online
  f0125863: 'rejected, Korea, Seoul', // no online
  f0126037: 'rejected, Korea, Seoul', // no online
  f0126038: 'rejected, Korea, Seoul', // no online
  f0126039: 'rejected, NR', // no online
  f0127352: 'rejected, Korea, Seoul', // no online
  f0127353: 'rejected, Korea, Seoul', // no online
  f0127354: 'rejected, Korea, Seoul', // no online
  f0128580: 'rejected, Korea, Seoul', // no online
  f0128581: 'rejected, Korea, Seoul', // no online
  f0128582: 'rejected, Korea, Seoul', // no online
  f0130961: 'rejected, Korea, Seongnam-si',
  f0134286: 'rejected, NR', // no online
  f0137489: 'rejected, UK, Deeside', // no online
  f0142515: 'rejected, NR', // no online
  f0145385: 'rejected, Malaysia, Petaling Jaya', // no online
  f0145843: 'rejected, NR', // no online
  f0146301: 'rejected, China, Shenzhen', // no online
  f0147565: 'rejected, China, Shenzhen',
  f0148391: 'rejected, China, Changsha + Japan, Tokyo', // no online
  f0149026: 'rejected, China, Shenzhen',
  f0150782: 'rejected, China, Xiamen', // no online
  f0151341: 'rejected, China, Zhangzhou', // no online
  f0151366: 'rejected, China, Fuzhou + Xiamen', // no online
  f0151436: 'rejected, NR', // no online
  f0151453: 'rejected, autolisted', // no online
  f0151468: 'rejected, NR', // no online
  f0151487: 'rejected, NR', // no online
  f0151498: 'rejected, China, Jinan', // no online
  f0151536: 'rejected, China, Xiamen', // no online
  f0151629: 'rejected, NR', // no online
  f0152563: 'rejected, China, Chongqing', // no online
  f0152712: 'rejected, NR', // no online
  f0153176: 'rejected, China, Fujian', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0155004: 'rejected, Korea, Seoul', // no online
  f0156264: 'rejected, Korea, Seoul', // no online
  f0157265: 'rejected, China, Zhangjiakou', // no online
  f0157429: 'rejected, Korea, Bucheon-si', // no online
  f0158666: 'rejected, China, Beijing',
  f0158993: 'rejected, China, Zhangzhou', // no online
  f0162183: "rejected, China, Xi'an", // no online
  f0162385: 'rejected, China, Beijing',
  f0164126: 'rejected, NR', // no online
  f0214631: 'rejected, Korea, Seoul', // no online
  f0215370: 'rejected, China, Hangzhou', // no online
  f0218293: 'rejected, China, Fujian', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0223663: 'rejected, China, Beijing',
  f0227472: 'rejected, China, Xiamen', // no online
  f0227531: 'rejected, China, Xiamen', // no online
  f0227567: 'rejected, China, Zhangzhou', // no online
  f0227660: 'rejected, NR', // no online
  f0227684: 'rejected, China, Xiamen', // no online
  f0364982: 'rejected, Korea, Seoul', // no online
  f0364983: 'rejected, Korea, Seoul', // no online
  f0364987: 'rejected, Korea, Seoul', // no online
  f0391212: 'rejected, NR', // no online
  f0396352: 'rejected, NR', // no online
  f0396684: 'rejected, China, Xiamen', // no online
  f0396720: 'rejected, NR', // no online
  f0396732: 'rejected, NR', // no online
  f0396751: 'rejected, NR', // no online
  f0397052: 'rejected, Korea, Eunpyeong-gu', // no online
  f0398863: 'rejected, Korea, Seoul', // no online
  f0398865: 'rejected, Korea, Seoul', // no online
  f0401300: 'rejected, France, Deuil-la-Barre', // no online
  f0401348: 'rejected, Korea, Chuncheon', // no online
  f0408717: 'rejected, Korea, Ansan-si', // Deal rejected | Under maintenance, retry later
  f0410001: 'rejected, NR', // proposed provider collateral below minimum: 23076953601 < 41864776848
  f0417709: 'rejected, NR', // no online
  f0417767: 'rejected, China, Zhangzhou', // no online
  f0417826: 'rejected, autolisted', // no online
  f0417893: 'rejected, China, Xiamen', // no online
  f0417918: 'rejected, NR', // no online
  f0423371: 'rejected, Korea, Seoul', // no online
  f0423381: 'rejected, Korea, Seoul', // no online
  f0432594: 'rejected, China, Zhengzhou', // no online
  f0437246: 'rejected, China, Hangzhou', // no online
  f0440182: 'rejected, USA, Des Moines', // no online
  f0449072: 'rejected, Korea, Jung-gu', // no online
  f0449088: 'rejected, Korea, Jung-gu', // no online
  f0455466: 'rejected, USA, Washington', // no online
  f0456374: 'rejected, NR', // no online
  f0463143: 'rejected, NR', // no online
  f0466070: 'rejected, NR',
  f0469168: 'rejected, NR', // sh: /root/.lotusminer/dealfilter.pl: No such file or directory
  f0476476: 'rejected, Korea, Namyangju', // no online
  f0485876: 'rejected, China, Changchun', // no online
  f0501283: 'rejected, USA, Lincoln', // Deal rejected | Such deal is not accepted (type, duration, size, etc...)
  f0502948: 'rejected, NR', // no online
  f0513878: 'rejected, China, Guizhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0516456: 'rejected, Korea, Jung-gu', // no online
  f0673613: 'rejected, NR', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0678845: 'rejected, China, Zhengzhou', // no online
  f0678914: 'rejected, USA, San Diego', // Deal rejected | Such deal is not accepted (type, duration, size, etc...)
  f0680538: 'rejected, Korea, Bucheon-si', // no online
  f0687206: 'rejected, China, Hangzhou', // no online
  f0694172: 'rejected, China, Luzhou', // no online
  f0694843: 'rejected, NR', // no online
  f0700033: 'rejected, NR', // Deal from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q begins more than 7 days in the future, I do not like that
  f0706693: 'rejected, Belarus, Baranovichi', // no online
  f0707721: 'rejected, Netherlands', // Deal rejected | Such deal is not accepted (type, duration, size, etc...)
  f0709325: 'rejected, Korea, Jung-gu', // no online
  f0713736: 'rejected, NR', // no online
  f0715235: 'rejected, Korea, Jung-gu', // no online
  f0718665: 'rejected, NR', // no online
  f0723162: 'rejected, Korea, Bucheon-si', // no online
  f0723827: 'rejected, China, Guizhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0726677: 'rejected, Korea, Jung-gu', // no online
  f0727453: 'rejected, Korea, Ulsan', // no online
  f0728347: 'rejected, USA, Queens', // no online
  f0729297: 'rejected, Korea, Gyeonggi-do', // no online
  f0751831: 'rejected, NR', // no online
  f0753055: 'rejected, China, Fuzhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0753213: 'rejected, China, Xiamen', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0753366: 'rejected, China, Fuzhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0753569: 'rejected, China, Beijing',
  f0753959: 'rejected, NR', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0753988: 'rejected, China, Fuzhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0813083: 'rejected, Korea, Jung-gu', // no online
  f0816782: 'rejected, Korea, Jung-gu', // no online
  f0816783: 'rejected, Korea, Jung-gu', // no online
  f0827006: 'rejected, China, Xuzhou', // no online
  f0838467: 'rejected, Korea, Incheon', // no online
  f0838852: 'rejected, USA, Lynnwood, Ashburn', // no online
  f0838873: 'rejected, USA, Washington', // no online
  f0838923: 'rejected, Netherlands, Amsterdam', // no online
  f0840060: 'rejected, China, Changchun', // no online
  f0840770: 'rejected, USA, Dallas', // miner is not accepting unverified storage deals
  f0845296: 'rejected, China, Hong Kong', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0845552: 'rejected, NR', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0855584: 'rejected, NR', // no online
  f0872282: 'rejected, China, Guangzhou', // no online
  f0878005: 'rejected, NR', // no online
  f0878351: 'rejected, USA, Vancouver', // no online
  f01024569: 'rejected, China, Hangzhou', // no online
  f01044086: 'rejected, NR', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f01051151: 'rejected, Korea, Jung-ang', // no online
  f01051152: 'rejected, Korea, Jung-ang', // no online
  f01051301: 'rejected, Korea, Siheung-si', // Deal rejected | Too many requests, retry later
  f01052991: 'rejected, Korea, Jung-ang', // no online
  f01074953: 'rejected, NR', // no online
  f01075514: 'rejected, Korea, Jung-ang', // no online
  f01075517: 'rejected, Korea, Jung-ang', // no online
  f01077516: 'rejected, China, Qinzhou', // no online
  f01086553: 'rejected, China, Zhongshan', // no online
  f01089898: 'rejected, Korea, Jung-gu', // no online
  f01091851: 'rejected, NR', // Deal rejected | Under maintenance, retry later
  f01094602: 'rejected, China, Harbin', // no online
  f01098835: 'rejected, NR', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f01104909: 'rejected, China, Shanghai', // no online
  f01112541: 'rejected, USA, Fremont', // no online
  f01117341: 'rejected, Korea', // no online
  f01119890: 'rejected, autolisted', // sh: 1: /data/storage/lotuswork/lotusstorage/dealfilter.pl: not found
  f01128709: 'rejected, autolisted', // no online
  f01129528: 'rejected, autolisted', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f01131466: 'rejected, autolisted', // no online
  f01132323: 'rejected, autolisted', // no online
  f01137729: 'rejected, USA, Lynnwood + Chicago', // no online
  f01141633: 'rejected, autolisted', // no online
  f01149094: 'rejected, USA, Lynnwood', // no online
  f01154901: 'rejected, autolisted', // no online
  f01162221: 'rejected, autolisted', // no online
  f01163272: 'rejected, autolisted', // Deal rejected | Price below acceptance for such deal : 0.000004 FIL | there are too many deal in progress at the moment
  f01168055: 'rejected, autolisted', // no online
  f01168321: 'rejected, autolisted', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f01176154: 'rejected, autolisted', // no online
  f01181619: 'rejected, autolisted', // no online
  f01188900: 'rejected, autolisted', // no online
  f01192325: 'rejected, China, Jiangsu', // no online
  f01193205: 'rejected, autolisted', // no online
  f01193207: 'rejected, autolisted', // no online
  f01197032: 'rejected, autolisted', // sh: 1: /lotus_data/.lotusstorage/dealfilter.pl: not found
  f01199430: 'rejected, Netherlands', // Deal rejected | Such deal is not accepted (type, duration, size, etc...)
  f01199442: 'rejected, Netherlands', // Deal rejected | Such deal is not accepted (type, duration, size, etc...)
  f01201327: 'rejected, Netherlands', // Deal rejected | Such deal is not accepted (type, duration, size, etc...)
  f01202610: 'rejected, autolisted', // no online
  f01204055: 'rejected, autolisted', // no online
  f01205257: 'rejected, autolisted', // no online
  f01207045: 'rejected, Netherlands', // Deal rejected | Such deal is not accepted (type, duration, size, etc...)
  f01208862: 'rejected, Netherlands', // Deal rejected | Such deal is not accepted (type, duration, size, etc...)
  f01210794: 'rejected, autolisted', // no online
  f01216710: 'rejected, autolisted', // no online
  f01224799: 'rejected, autolisted', // no online
  f01254509: 'rejected, autolisted', // no online
  f01262410: 'rejected, autolisted', // sh: 1: /Lotus/LotusMiner/dealfilter.pl: not found
  f01345523: 'rejected, Belgium', // Deal rejected | Price below acceptance for such deal : 0.0000000039 FIL
  f01361691: 'rejected, autolisted', // no online
  f01362746: 'rejected, autolisted', // no online
  f01385207: 'rejected, autolisted', // no online
  f01390330: "rejected, China, Xi'an", // no online
  f01392893: 'rejected, Netherlands', // Deal rejected | Price below acceptance for such deal : 0.000000039 FIL | Contact on Slack: @rob
  f01395673: 'rejected, China, Fuzhou', // no online
  f01399235: 'rejected, autolisted', // no online
  f01421708: 'rejected, autolisted', // no online
  f01439693: 'rejected, autolisted', // no online
  f01445167: 'rejected, autolisted', // no online
  f01461183: 'rejected, autolisted', // deal start epoch is too far in the future: 1491830 > 1468802
  f01466582: 'rejected, autolisted', // no online
  f01474838: 'rejected, Taiwan, New Taipei',
  f01483143: 'rejected, China, Hong Kong',
  f01484864: 'rejected, autolisted', // no online
  f01506844: 'rejected, autolisted', // no online
  f01557379: 'rejected, autolisted', // no online
  f01597607: 'rejected, autolisted', // Deal rejected | Price below acceptance for such deal : 0.0000005 FIL
  f01605773: 'rejected, autolisted', // no online
  f01608291: 'rejected, autolisted', // Deal rejected | Such deal is not accepted (type, duration, size, etc...)
  f01611097: 'rejected, autolisted', // Deal rejected | Price below acceptance for such deal : 0.0000005 FIL | for questions or special pricing message me on slack @scaseye
  f01641612: 'rejected, autolisted', // miner is not accepting unverified storage deals
  f01660795: 'rejected, autolisted', // no online
  f01662849: 'rejected, autolisted', // no online
  f01678340: 'rejected, autolisted', // sh: 1: /absolute/path/to/storage_filter_program: not found

  // Fail

  f01012: 'fail, China, Guangzhou + Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFLQGbLNFnsPgpNrF4e1gKCACTY7jQoVyRjQVYioR84UB:  * [/ip4/127.0.0.1/tcp/8888] dial tcp4 127.0.0.1:8888: connect: connection refused  * [/ip4/43.230.90.191/tcp/8888] dial tcp4 43.230.90.191:8888: connect: connection refused  * [/ip4/183.60.252.190/tcp/8888] dial tcp4 0.0.0.0:37529->183.60.252.190:8888: i/o timeout
  f01155: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAkynCg2CywYA7DvpbB69vjVAPEFNqYQQhcFnF4s4Rby9:  * [/ip4/203.107.44.156/tcp/39770] dial tcp4 0.0.0.0:37529->203.107.44.156:39770: i/o timeout
  f01234: 'fail, Belgium, Bonheiden, Eliovp', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPWJemjphGa2pANr6j7HCaLyjUvCroHyTJsATY6TaCFAF:  * [/ip4/141.138.64.20/tcp/24001] dial tcp4 0.0.0.0:37529->141.138.64.20:24001: i/o timeout
  f01235: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEZtCEjeef1Ud7Knw3wmyutuS9nMQ8EiYNvbB5caM1X1F:  * [/ip4/170.33.12.95/tcp/16668] dial tcp4 0.0.0.0:37529->170.33.12.95:16668: i/o timeout
  f01248: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBXxUMb8H3o52vUKvSkdU8AYgdAXEcZKLUx5gvGsowZz8:  * [/ip4/103.122.95.17/tcp/33128] dial tcp4 103.122.95.17:33128: connect: connection refused  * [/ip4/128.1.78.100/tcp/31432] dial tcp4 0.0.0.0:37529->128.1.78.100:31432: i/o timeout  * [/ip4/10.2.5.51/tcp/33128] dial tcp4 0.0.0.0:37529->10.2.5.51:33128: i/o timeout
  f01272: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9wgC4mcDzHp8RZJcxKnNNWWmMH4N3KhenGvVvyK1szB2:  * [/ip4/172.16.117.9/tcp/33608] dial tcp4 0.0.0.0:37529->172.16.117.9:33608: i/o timeout
  f01279: 'fail, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWARjz8p5k2FbtUAxTNfmMxam7hGn7X9FeD7Yh1KgfuAhK:  * [/ip4/118.116.2.66/tcp/40000] dial tcp4 0.0.0.0:37529->118.116.2.66:40000: i/o timeout
  f01287: 'fail, China, Jiaxing, MaiTian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJQd43HScS7iBzsggGyoE5yrXAeCcfAqhrB4NrsQX7otw:  * [/ip4/172.16.2.123/tcp/5472] dial tcp4 0.0.0.0:37529->172.16.2.123:5472: i/o timeout  * [/ip4/122.225.68.92/tcp/5472] dial tcp4 0.0.0.0:37529->122.225.68.92:5472: i/o timeout
  f01289: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01314: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01475: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPD6dMSKHegPtnZvhC8ToQHPQEE4kZRxNK6uZv4Dk8nBG:  * [/ip4/170.33.12.186/tcp/17031] dial tcp4 0.0.0.0:37529->170.33.12.186:17031: i/o timeout
  f01782: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAECESUksm2HVdjSY7X1DpDD9dhPHXN8JuRdyGHcky5ox:  * [/ip4/139.196.240.164/tcp/11347] dial tcp4 0.0.0.0:37529->139.196.240.164:11347: i/o timeout
  f01799: 'fail, China, Jinan + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBSVJEJLvLCFVzhYEfLVmznbL4Horztx4W6bXuYa7w1VJ:  * [/ip4/222.175.139.190/tcp/63208] dial tcp4 0.0.0.0:37529->222.175.139.190:63208: i/o timeout  * [/ip4/195.123.237.226/tcp/62333] dial tcp4 0.0.0.0:37529->195.123.237.226:62333: i/o timeout
  f02299: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEratp7oKx1VPMGZY5xeukYMmKPuxKo92sjsHsx6KSbTE:  * [/ip4/182.18.83.2/tcp/1024] dial tcp4 0.0.0.0:37529->182.18.83.2:1024: i/o timeout
  f02303: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEmoKvvRvGgtfRjXeNznzqmXSLVzALXkVUHV8PHKzbyWa:  * [/ip4/8.209.76.63/tcp/48921] dial tcp4 0.0.0.0:37529->8.209.76.63:48921: i/o timeout
  f02388: 'fail, Netherlands, Amersfoort, Kroketje', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02399: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR76gswS31CE7yMXLhVpesUx9ePgaUYWaJoHY3jLpPenT:  * [/ip4/175.24.25.61/tcp/44449] dial tcp4 0.0.0.0:37529->175.24.25.61:44449: i/o timeout
  f02403: 'fail, UK, London + Manchester', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMj9PnQDUCVunSoYrkbxhLV2rjK8bKBLQML3sCvpPcN8B:  * [/ip4/2.58.47.71/tcp/18888] dial tcp4 0.0.0.0:37529->2.58.47.71:18888: i/o timeout  * [/ip4/2.58.45.33/tcp/18888] dial tcp4 0.0.0.0:37529->2.58.45.33:18888: i/o timeout
  f02405: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAyXVY9WLfATgPPtJ2wB6T44MachjCV7jNRAmDXs2ZKoP:  * [/ip4/119.147.213.59/tcp/4123] dial tcp4 119.147.213.59:4123: connect: connection refused  * [/ip4/192.168.231.206/tcp/4123] dial tcp4 0.0.0.0:37529->192.168.231.206:4123: i/o timeout
  f02415:
    'fail, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSBt7yKkQiCNYbzc1Ag7BWH7DTNm1EUfMLdYQNjWqn4XB:  * [/ip4/47.57.243.33/tcp/49532] failed to negotiate security protocol: EOF  * [/ip4/47.242.85.219/tcp/49532] failed to negotiate security protocol: EOF
  f02416: 'fail, China, Guangdong, 星际无限', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02417: 'fail, China, Zhangjiakou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCqGULDJFYkgTYvmzToQA4gTMGwV3ZpfkDgrnjXY6suRS:  * [/ip4/116.132.221.10/tcp/10240] dial tcp4 116.132.221.10:10240: connect: connection refused
  f02419: 'fail, China, Shanghai, yuantai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02420: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLarDsiyUrxyyAESiMZbmU1kTrcXhLfUw7yU42JeWY8Ad:  * [/ip4/47.252.2.93/tcp/34571] dial tcp4 0.0.0.0:37529->47.252.2.93:34571: i/o timeout
  f02422: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGLq2Q9mQ8tNynijNfNJj1K7UTUPZKfr5iWXspd617yLo:  * [/ip4/117.38.4.82/tcp/22347] dial tcp4 0.0.0.0:37529->117.38.4.82:22347: i/o timeout
  f02425: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCK7wNHxKjxN5CGMGdTLh1VRwxru9cuR7353pPHvCBJ6H:  * [/ip4/196.12.34.77/tcp/2254] dial tcp4 0.0.0.0:37529->196.12.34.77:2254: i/o timeout
  f02438: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMrDPhKaMeJFenXRFd4Rb9Zt111CBY7uY6AoZ93MTbLHw:  * [/ip4/202.34.55.65/tcp/11254] dial tcp4 0.0.0.0:37529->202.34.55.65:11254: i/o timeout
  f02492: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWExafiDYdEKRvWWTRMfZC7t7YzqMmfJDEcp86BXC27TTJ:  * [/ip4/103.142.248.7/tcp/3347] dial tcp4 0.0.0.0:37529->103.142.248.7:3347: i/o timeout
  f02503: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEvy6gDEmVj8P6rE5HvzSyZzXkeezu6EV3nDcNpDG142T:  * [/ip4/8.209.71.125/tcp/31432] dial tcp4 0.0.0.0:37529->8.209.71.125:31432: i/o timeout
  f02520: 'fail, China, Hong Kong + Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGuiACQawFqfzpE5LQRKMvLq3qSYvKkEwLgRsVokvCjTj:  * [/ip6/::1/tcp/42851] dial tcp6 [::1]:42851: connect: connection refused  * [/ip4/127.0.0.1/tcp/41829] dial tcp4 127.0.0.1:41829: connect: connection refused  * [/ip4/10.3.4.152/tcp/41829] dial tcp4 0.0.0.0:37529->10.3.4.152:41829: i/o timeout  * [/ip4/121.14.159.103/tcp/2765] dial tcp4 0.0.0.0:37529->121.14.159.103:2765: i/o timeout
  f02529: 'fail, China, Chongqing + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFEZiYoJxqyuANeLtn7tDytRkYzcc9HS6gbaymHgMijWc:  * [/ip4/101.206.156.202/tcp/23004] dial tcp4 0.0.0.0:37529->101.206.156.202:23004: i/o timeout  * [/ip4/8.209.64.163/tcp/23004] dial tcp4 0.0.0.0:37529->8.209.64.163:23004: i/o timeout
  f02606: 'fail, China, Zhejiang, DataX', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQDCzJKYKWKJ4dRsXkfUEuFZ5u5ChmWcQgHS3s5ZYi4Wp:  * [/ip4/54.238.182.234/tcp/3076] dial tcp4 0.0.0.0:37529->54.238.182.234:3076: i/o timeout
  f02610: 'fail, Netherlands', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMnLT8D5yNAdEQbt2fXHFhUVQT2crdGLVktpSo7RCXtnk:  * [/ip4/202.0.16.111/tcp/41254] dial tcp4 0.0.0.0:37529->202.0.16.111:41254: i/o timeout
  f02613: 'fail, China, Chongqing + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSHE6LnRd5b8GdWaCAfBz5NQhq4uZafybStUnYeabgwRB:  * [/ip4/8.209.64.163/tcp/23027] dial tcp4 0.0.0.0:37529->8.209.64.163:23027: i/o timeout  * [/ip4/101.206.156.202/tcp/23027] dial tcp4 0.0.0.0:37529->101.206.156.202:23027: i/o timeout
  f02614: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE6JfBTMyjirNPSRi4AfZjCseRHGzXZvXUmKMsdHViyif:  * [/ip4/170.33.9.50/tcp/32633] dial tcp4 0.0.0.0:37529->170.33.9.50:32633: i/o timeout
  f02619: 'fail, China, Beijing, Blockcasting', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKZRdxtd9tC1tEvUynBRqRqzdxsi3jBmURi9HxftfgZLS:  * [/ip4/0.0.0.0/tcp/10240] dial tcp4 0.0.0.0:10240: connect: connection refused
  f02625: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE1N2gyzrMRA6EywurJGaseGWuTa9Rn5tXdPLZ7yo8QSK:  * [/ip4/101.133.172.142/tcp/1024] dial tcp4 0.0.0.0:37529->101.133.172.142:1024: i/o timeout
  f02626: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMRGNAFKyUu9XBCk5HA32AFL6LmM6H62uoWb83QgYxYrD:  * [/ip4/8.209.115.161/tcp/58237] dial tcp4 0.0.0.0:37529->8.209.115.161:58237: i/o timeout
  f02633:
    'fail, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFUfGNQmRtHyByTfuhePhPmzUQvHRT2LjuUF2hKn1Mz5e:  * [/ip4/47.57.243.33/tcp/49522] failed to negotiate security protocol: EOF  * [/ip4/47.242.85.219/tcp/49522] failed to negotiate security protocol: EOF
  f02645:
    'fail, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMYVpFEU5SFpy9zucYf1kzyNSMVbzAPJiwkYtDTAh7ik9:  * [/ip4/47.242.85.219/tcp/49512] failed to negotiate security protocol: EOF  * [/ip4/47.57.243.33/tcp/49512] failed to negotiate security protocol: EOF
  f02654: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGPpw5iYy388qzkZL4qmJR6RoUQfbUQS5kDz7sDfEVuwJ:  * [/ip6/::/tcp/0] dial tcp6 [::]:0: connect: connection refused  * [/ip4/114.86.238.213/tcp/43635] dial tcp4 0.0.0.0:37529->114.86.238.213:43635: i/o timeout
  f02721: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNNUguf8bGe72cudmWpKobV3Pkkc9Lx3GBDG2AEfDZN9L:  * [/ip4/202.0.32.211/tcp/4254] dial tcp4 0.0.0.0:37529->202.0.32.211:4254: i/o timeout
  f02723: 'fail, China, Tongling', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDvwbbdLgBbuQ3MPPN7gos8XEXekTJxW5NX4DMCfXNUoZ:  * [/ip4/60.173.23.17/tcp/23456] dial tcp4 0.0.0.0:37529->60.173.23.17:23456: i/o timeout
  f02725: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9ygexQt5zAMg1jLPbb3g4fgYfKHZKNcviMxXJk4UJAMX:  * [/ip4/101.32.38.57/tcp/18899] dial tcp4 0.0.0.0:37529->101.32.38.57:18899: i/o timeout
  f02726: 'fail, USA, Brooklyn', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWS4dsPm97xGtEaCSuH4k6uWtrH3A1kH1tKpBejDTPATrK:  * [/ip4/202.0.71.141/tcp/1254] dial tcp4 0.0.0.0:37529->202.0.71.141:1254: i/o timeout
  f02731: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWND88xcsZCdYNSUkqy35ikLpMaDpPMKse1mmMAZrFQyD6:  * [/ip4/202.6.95.44/tcp/21254] dial tcp4 0.0.0.0:37529->202.6.95.44:21254: i/o timeout
  f02767: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQotzkhoCXR7hSo5FMrrsHhYh8q7KSXHx85oZkFd3B8Pg:  * [/ip4/18.192.27.227/tcp/37722] dial tcp4 0.0.0.0:37529->18.192.27.227:37722: i/o timeout
  f02769: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02770: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02775: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02778: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02779: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02838: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMwvGx979vAyPA9gSyCcZ5xdLyi25WrJMikiYUG3sdton:  * [/ip4/118.123.228.9/tcp/48633] dial tcp4 118.123.228.9:48633: connect: connection refused
  f02856: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f03000: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f03002: 'fail, China, Chongqing + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAwqepwZRwQPyBew1FWZo7BvQ6tTP3nyjG8skVU9uWEwL:  * [/ip4/8.209.64.163/tcp/18880] dial tcp4 0.0.0.0:37529->8.209.64.163:18880: i/o timeout  * [/ip4/101.206.156.202/tcp/18880] dial tcp4 0.0.0.0:37529->101.206.156.202:18880: i/o timeout
  f03134: 'fail, China, Cangzhou, QiaoMu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGKAuRMFJPmp6v9DR81vnbnFaToheUDUnMsXtT4MCdWq2:  * [/ip4/111.161.72.108/tcp/4913] dial tcp4 0.0.0.0:37529->111.161.72.108:4913: i/o timeout
  f03144: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFMK8Vg4SH5Wsrvp76JpJvwiuxdXpRyPrWa76Jrj6K4tc:  * [/ip4/103.214.41.38/tcp/23456] dial tcp4 0.0.0.0:37529->103.214.41.38:23456: i/o timeout
  f03176: 'fail, USA, San Mateo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPDyDeAQWj4kSEkVog1NAHJVu9cWpur3uGzH8H92THWPp:  * [/ip4/47.88.55.220/tcp/15470] dial tcp4 0.0.0.0:37529->47.88.55.220:15470: i/o timeout  * [/ip4/47.88.57.241/tcp/15470] dial tcp4 0.0.0.0:37529->47.88.57.241:15470: i/o timeout
  f03249: 'fail, China, Yunfu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAAGdpxELgywqdLsWjxkfh7z4xiSp8cUwqq9HZLEKM9fr:  * [/ip4/183.57.83.7/tcp/6789] dial tcp4 0.0.0.0:37529->183.57.83.7:6789: i/o timeout
  f03266: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRTVB3ued6YhMdyJ2qoQ6cKkVE7pPbfmETAmz61dz8cDj:  * [/ip4/200.226.167.245/tcp/22125] dial tcp4 0.0.0.0:37529->200.226.167.245:22125: i/o timeout
  f03273: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f03287: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPLKQae57X1Wh9afjjBZbujq6qS53GdNbLULuyMARgxPC:  * [/ip4/216.154.66.123/tcp/32215] dial tcp4 0.0.0.0:37529->216.154.66.123:32215: i/o timeout
  f03325: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMY9qD6HqyujzkBMXZFUiVLUjYhL89fF6nexr8T4KS8Mf:  * [/ip4/113.107.201.186/tcp/42243] dial tcp4 0.0.0.0:37529->113.107.201.186:42243: i/o timeout
  f03328: 'fail, China, Xinxiang, Golden Miner', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ3c9CscaFyBbZcVYreTDCQAttS4g5NxomEDiSV7ZHStV:  * [/ip4/27.50.142.61/tcp/2347] dial tcp4 0.0.0.0:37529->27.50.142.61:2347: i/o timeout
  f03344: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f03358: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAAR2DxhxHGbXYBGL5qEawVpYdmRiTE4SxnzcFGVN4Vz3:  * [/ip4/1.183.72.211/tcp/30001] dial tcp4 0.0.0.0:37529->1.183.72.211:30001: i/o timeout
  f03363: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNUoRxEMinMJFfr98yF9UCnakRWRJPPN843BCpVoyiZtw:  * [/ip4/1.183.72.210/tcp/30003] dial tcp4 0.0.0.0:37529->1.183.72.210:30003: i/o timeout
  f03367: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSxtJbCSV1BFbbGoNKiY7tYue55KfaSS71QTYHhpsGXnm:  * [/ip4/95.251.119.33/tcp/3215] dial tcp4 0.0.0.0:37529->95.251.119.33:3215: i/o timeout
  f03482: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHGA8SpRtc1aVfhKQk3odRQBCpouUGY1kBWjGLZRPFAZJ:  * [/ip4/221.228.238.110/tcp/23456] dial tcp4 0.0.0.0:37529->221.228.238.110:23456: i/o timeout
  f03491:
    'fail, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKiak4vysPSn1UB8vaj44uMK89rrEfSF3KAA6oU5zgZZN:  * [/ip4/47.57.243.33/tcp/49562] failed to negotiate security protocol: EOF  * [/ip4/47.242.85.219/tcp/49562] failed to negotiate security protocol: EOF
  f03624: 'fail, Germany, Chemnitz, ode', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvyqMy8wyyqvc4tPqkRrMcKkG2JNfVyZSX1viC88TXwG:  * [/ip4/87.128.76.11/tcp/29866] dial tcp4 87.128.76.11:29866: connect: no route to host
  f04443: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLiAv4R6HFS6u774J92XKou3aQayVi5g297aD7y9Wk7BV:  * [/ip4/116.229.183.166/tcp/29847] dial tcp4 0.0.0.0:37529->116.229.183.166:29847: i/o timeout
  f07749: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f07796: 'fail, China, Hunan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f07824: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHRZasGjpbLq9dwzP1QGWS8fZcBjxsatQ9X7WkMiUqK1k:  * [/ip4/10.166.8.11/tcp/32759] dial tcp4 0.0.0.0:37529->10.166.8.11:32759: i/o timeout
  f07830: 'fail, China, Zhongshan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPv5f5iSSDRyJSrPz6JrMxSnTnynAv6cotUBtJcq4Es2b:  * [/ip4/178.208.57.59/tcp/21322] dial tcp4 0.0.0.0:37529->178.208.57.59:21322: i/o timeout
  f07919: 'fail, China, Beijing, Shanghai, Hunan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDpsVdqXp5bKP4dcK8Y9tERbi7fEzP9orZv6QZK9cpFXK:  * [/ip4/175.6.25.14/tcp/4913] dial tcp4 0.0.0.0:37529->175.6.25.14:4913: i/o timeout
  f07945: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSo1kWck2tTgtGybMU1b4oDJHKhn1bpvAnX8x2Sska2aX:  * [/ip4/14.152.49.186/tcp/35001] dial tcp4 0.0.0.0:37529->14.152.49.186:35001: i/o timeout
  f07969: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f07990:
    'fail, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFpMyVgzG9fgPEB94uzbTYTt6MjAm7DovpYPiMttaRQj8:  * [/ip4/47.57.243.33/tcp/49542] failed to negotiate security protocol: EOF  * [/ip4/47.242.85.219/tcp/49542] failed to negotiate security protocol: EOF
  f08025:
    'fail, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHHSJT1t7Pn7cHxEt5Ze3amA6PJnuVRynUmnapVzWhCXW:  * [/ip4/47.242.85.219/tcp/49552] failed to negotiate security protocol: EOF  * [/ip4/47.57.243.33/tcp/49552] failed to negotiate security protocol: EOF
  f08091: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWF2fkifBQNtVh9LwQC9m1MvgTTdLVHAezSxATrze3aK25:  * [/ip4/0.0.0.0/tcp/5472] dial tcp4 0.0.0.0:5472: connect: connection refused
  f08094: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRdbaruzV1FLSxZAriWDwHcYPteXyAPdtNaMkx7MMyRwr:  * [/ip4/183.2.154.179/tcp/23450] dial tcp4 0.0.0.0:37529->183.2.154.179:23450: i/o timeout
  f08101: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGjb3T4GLL7LXjfahBiaxRJDw2tu3ps42jYM4HcMTJ5P6:  * [/ip4/192.168.3.11/tcp/32759] dial tcp4 0.0.0.0:37529->192.168.3.11:32759: i/o timeout
  f08148: 'fail, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJRifXRHkLaHN8JgPxy6LDmn5JyDaBxqnKLEgZur3S8ZX:  * [/ip4/103.108.182.27/tcp/30031] dial tcp4 0.0.0.0:37529->103.108.182.27:30031: i/o timeout
  f08157: 'fail, China, Beijing + Germany, Frankfurt, 超星际', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f08242: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKPWTxHrJdASejkyzHjU7f3XVECGWSmJFCy9SL65Dcutg:  * [/ip4/47.242.56.117/tcp/6789] dial tcp4 0.0.0.0:37529->47.242.56.117:6789: i/o timeout
  f08264: 'fail, China, Xianning', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWC4HGgmJqCZtaQzLRUSvy21GRhayGtaSES536Ug7mxpqf:  * [/ip4/103.222.191.115/tcp/1161] dial tcp4 0.0.0.0:37529->103.222.191.115:1161: i/o timeout
  f09002: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEEFKcY5USt22uCrNLj6McbDAtkJZRF7ns5atGS8M3rio:  * [/ip4/113.200.194.196/tcp/32634] dial tcp4 0.0.0.0:37529->113.200.194.196:32634: i/o timeout
  f09037: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGijGVP9N8ebcJNNEEPEGDhWbSJbsW2KtWeqVa5MQvTBx:  * [/ip4/170.33.12.95/tcp/16666] dial tcp4 0.0.0.0:37529->170.33.12.95:16666: i/o timeout
  f09538: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f09620: 'fail, China, Weifang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRHjQb3e5ZEJLbJmfiuTftU9f63ts5c3kr1WCaz7PDMXP:  * [/ip4/58.57.65.80/tcp/9620] dial tcp4 0.0.0.0:37529->58.57.65.80:9620: i/o timeout
  f09652: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAAap3GmuBww6k7oYMLvQeoVVstVFmQaLqThfM9ZFtDqT:  * [/ip4/170.33.9.50/tcp/32632] dial tcp4 0.0.0.0:37529->170.33.9.50:32632: i/o timeout
  f09696: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f09710: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMceygoywUMfKmgMsESpZwsbALV11E3oUjdoC7iqDbQbr:  * [/ip4/103.44.253.56/tcp/40573] dial tcp4 0.0.0.0:37529->103.44.253.56:40573: i/o timeout
  f010010: 'fail, China, Changzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR2AzzefcE3qjWDenSf6mWs4CC3ZgtiBFkrbdGnw2UtKN:  * [/ip4/61.177.78.101/tcp/9981] dial tcp4 0.0.0.0:37529->61.177.78.101:9981: i/o timeout
  f010035: 'fail, Netherlands + China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJDvwMPfJ1ct9V6JpgRrdA7DWEEfcWSQAWCYbRrNxnXYi:  * [/ip4/172.18.4.169/tcp/2347] dial tcp4 0.0.0.0:37529->172.18.4.169:2347: i/o timeout  * [/ip4/185.232.59.179/tcp/2347] dial tcp4 0.0.0.0:37529->185.232.59.179:2347: i/o timeout  * [/ip4/61.155.145.101/tcp/2347] dial tcp4 0.0.0.0:37529->61.155.145.101:2347: i/o timeout
  f010038: 'fail, China, Hangzhou + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD9kHFhZvDNSCpGcWA6qR8Q9GT7KdjKi9iU5ig1tTVYU7:  * [/ip4/170.33.12.166/tcp/39774] dial tcp4 0.0.0.0:37529->170.33.12.166:39774: i/o timeout
  f010048: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWErRVHN36TpgVcDrKt5d1wZm8j649cGk29zcYSmxus86u:  * [/ip4/124.78.146.207/tcp/65500] dial tcp4 0.0.0.0:37529->124.78.146.207:65500: i/o timeout
  f010056: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWExdbgcJnR1JYaThHyyS8eGSzM3Y2BSpTn1YsKF3MPz7b:  * [/ip4/8.209.82.79/tcp/14567] dial tcp4 0.0.0.0:37529->8.209.82.79:14567: i/o timeout
  f010202: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f010225: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBwpsvnPsPhoDLLbdkm3tVJaAkxYWzp43H9F5rfESaHun:  * [/ip4/8.209.107.150/tcp/12312] dial tcp4 0.0.0.0:37529->8.209.107.150:12312: i/o timeout
  f010247: 'fail, China, Yantai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLszEHE9KZT2ZBBhNSW4RheKixHT3Bk1GVdhBxwEYYDbS:  * [/ip4/122.14.201.169/tcp/10240] dial tcp4 0.0.0.0:37529->122.14.201.169:10240: i/o timeout
  f010305: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f010399: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNaRz2GcsNETTGnZEp5zvJqUesc4Mq3kbrqkbizemRssT:  * [/ip4/183.2.154.156/tcp/36699] dial tcp4 0.0.0.0:37529->183.2.154.156:36699: i/o timeout
  f010400: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSPCJCC4kZKxze4Q8u6NWVPQb3wnXrDvbC42bbV1xjzMA:  * [/ip4/59.44.27.130/tcp/8787] dial tcp4 0.0.0.0:37529->59.44.27.130:8787: i/o timeout
  f010424: 'fail, Australia, Sydney', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGGVTP3jL5Gg5YPR7Q8j3RexRDgprF9EvrP4giafV956F:  * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:37529->43.241.189.214:39438: i/o timeout
  f010493: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNHF86DuaM2LonNPbQFEbYpVebpT9z7UGRePY8EWvsL9s:  * [/ip4/218.78.187.146/tcp/21735] dial tcp4 0.0.0.0:37529->218.78.187.146:21735: i/o timeout
  f010498: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBKJx2cpNrjpwk4CHQXvrL3uStRCMRuJtZKXerLpc53jW:  * [/ip4/183.60.90.5/tcp/21735] dial tcp4 0.0.0.0:37529->183.60.90.5:21735: i/o timeout
  f010501: 'fail, China, Hangzhou, Interstellar Roewe', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWETA15epWhb2LReibLRuj6RdhBUvJjpypUNNtmbVFEUs7:  * [/ip4/183.134.218.26/tcp/21735] dial tcp4 0.0.0.0:37529->183.134.218.26:21735: i/o timeout
  f010505: 'fail, China, Wuhan, Interstellar Roewe', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCGuQ1wGac5coYevkmfJGCWgTU3FHJ7WaZKRnrqV7z21u:  * [/ip4/59.175.128.46/tcp/21735] dial tcp4 0.0.0.0:37529->59.175.128.46:21735: i/o timeout  * [/ip4/59.175.128.47/tcp/21736] dial tcp4 0.0.0.0:37529->59.175.128.47:21736: i/o timeout
  f010507: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQb1CpdSujwXeyMJroR8qAkekXiZdNXVPKqis5ENXZGVw:  * [/ip4/115.236.32.83/tcp/10240] dial tcp4 0.0.0.0:37529->115.236.32.83:10240: i/o timeout
  f010513: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFhoqhz38UdReEJcUbh9RGZPQABbn6LoLtMzMrWRCD3as:  * [/ip4/117.23.58.107/tcp/21735] dial tcp4 0.0.0.0:37529->117.23.58.107:21735: i/o timeout  * [/ip4/117.23.58.108/tcp/21736] dial tcp4 0.0.0.0:37529->117.23.58.108:21736: i/o timeout
  f010528: 'fail, China, Chongqing, Interstellar Roewe', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGKxtxSZaJojDA3XX2MSbPBp2zWdAWSBca5VvxtrDG3Fn:  * [/ip4/113.207.109.184/tcp/21735] dial tcp4 0.0.0.0:37529->113.207.109.184:21735: i/o timeout
  f010538: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHTRhvSg4viFHbzoHndBo4riNU5psWY37SxytqhA3cYd5:  * [/ip4/8.209.107.150/tcp/12320] dial tcp4 0.0.0.0:37529->8.209.107.150:12320: i/o timeout
  f010558: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f010616: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSWbS5Ba3SkWFdYyHPXKFZDb6kBPvQCzV7CyGNEo2iAXR:  * [/ip4/8.209.107.150/tcp/12313] dial tcp4 0.0.0.0:37529->8.209.107.150:12313: i/o timeout
  f014251: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQxfYwV563URu95cLTVf6ogdTMTFdwB5CQKFFHPatPfU4:  * [/ip4/58.220.66.66/tcp/46166] dial tcp4 0.0.0.0:37529->58.220.66.66:46166: i/o timeout
  f014311: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDxu2JXzsnxz2L9ZWRXNBypcpQcduWwqmSZfu5EawCDmZ:  * [/ip4/162.62.55.44/tcp/12309] dial tcp4 0.0.0.0:37529->162.62.55.44:12309: i/o timeout
  f014335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f014386: 'fail, China, Panzhihua', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK9S1GMd9SqrpLxLJqrp5ekWKCFnx11vsUj1eagFA4p4d:  * [/ip4/180.149.130.16/tcp/9845] dial tcp4 0.0.0.0:37529->180.149.130.16:9845: i/o timeout
  f014392: 'fail, USA + Russia, Khabarovsk + Japan, Heiwajima', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEBSrWCqoKrxjwFWU42bBFgsWVq8RwSfgxRTgBAZ3WSwp:  * [/ip4/66.42.38.110/tcp/9990] dial tcp4 0.0.0.0:37529->66.42.38.110:9990: i/o timeout  * [/ip4/92.223.72.130/tcp/9999] dial tcp4 0.0.0.0:37529->92.223.72.130:9999: i/o timeout  * [/ip4/172.247.228.122/tcp/9999] dial tcp4 0.0.0.0:37529->172.247.228.122:9999: i/o timeout
  f014394: 'fail, China, Suzhou, IPFSCloud', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMZyzN5Cw2LAU7jrPzS8CiRLNbhEwiHiEZwdQw5xYfmEq:  * [/ip4/222.92.5.147/tcp/42799] dial tcp4 0.0.0.0:37529->222.92.5.147:42799: i/o timeout
  f014395: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f014415: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNM14sFqpmsSAW752NdjvpCxcEGhpTtFNntEW9zjvboT3:  * [/ip4/13.248.165.152/tcp/33612] dial tcp4 0.0.0.0:37529->13.248.165.152:33612: i/o timeout
  f014487: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPU3eNG2UMTksa3n5YbJGKTNv6R2YstxeTfKSWQduwwpx:  * [/ip4/47.241.59.58/tcp/45455] dial tcp4 0.0.0.0:37529->47.241.59.58:45455: i/o timeout
  f014522: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKnwHakHiXkurxFTFVi4DTDkGftHzP6sh1khwHPPwcPjo:  * [/ip4/81.68.170.164/tcp/5474] dial tcp4 0.0.0.0:37529->81.68.170.164:5474: i/o timeout
  f014569: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f014683: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJQY8cF1DUSqTyTBBJFULmam2RbB6P3t8AMB9Uoqbmbik:  * [/ip4/125.93.73.102/tcp/41113] dial tcp4 0.0.0.0:37529->125.93.73.102:41113: i/o timeout
  f014686: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f014699: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f014706: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg:  * [/ip4/8.209.107.150/tcp/12308] dial tcp4 0.0.0.0:37529->8.209.107.150:12308: i/o timeout
  f014778: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLrw43ktH6n1YZ7qqWJw4ijBBD7Zc3iy6AcMktnxM7gVY:  * [/ip4/162.62.55.44/tcp/12310] dial tcp4 0.0.0.0:37529->162.62.55.44:12310: i/o timeout
  f014804: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNaLA26L7fd77idyimauWSobjBkeRA3P554yFcF3Ep24N:  * [/ip4/8.209.107.150/tcp/12314] dial tcp4 0.0.0.0:37529->8.209.107.150:12314: i/o timeout
  f015685: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSHahEVqnoWuoSwL3ZfJnRRTBx9NDc1956W4TBoLbu1zW:  * [/ip4/222.64.141.185/tcp/40321] dial tcp4 0.0.0.0:37529->222.64.141.185:40321: i/o timeout
  f015731: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQvZRpw6L6ErN6WeVYeAPQLvbtAHrXjHQoogiRFVEkEhw:  * [/ip4/8.209.107.150/tcp/12329] dial tcp4 0.0.0.0:37529->8.209.107.150:12329: i/o timeout
  f015734: 'fail, China, Qingdao', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f015767: 'fail, Russia, Khabarovsk + Japan, Khabarovsk + USA', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f015848: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHcMzWrWwRwKTekVWyEYipSgmYzRSzkLuRxdLJPXMY6DT:  * [/ip4/8.209.107.150/tcp/12321] dial tcp4 0.0.0.0:37529->8.209.107.150:12321: i/o timeout
  f015877: 'fail, China, Jiaxing + USA', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f015885: 'fail, China, Jiaxing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f015919: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAp28a2tL2vCae75zQXQiG5Tnf5ydgwVLNnztZ4sMgfst:  * [/ip4/8.209.107.150/tcp/12316] dial tcp4 0.0.0.0:37529->8.209.107.150:12316: i/o timeout
  f015922: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDaa2ZnPvxDGHPSr6R1oHSfDxJjBLc6mecMCPNcSzhgLz:  * [/ip4/10.10.4.211/tcp/12600] dial tcp4 0.0.0.0:37529->10.10.4.211:12600: i/o timeout
  f015925: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMPTWy68Cpoy7YzGrWE5oJhDmZQ7wqzfaocv8w5eNsLit:  * [/ip4/8.209.107.150/tcp/12318] dial tcp4 0.0.0.0:37529->8.209.107.150:12318: i/o timeout
  f015926: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFGsaBTVoaXyJLGMtdghwdUt6eRgLzT8Y7MYTpyU2U3V6:  * [/ip4/162.62.55.44/tcp/12319] dial tcp4 0.0.0.0:37529->162.62.55.44:12319: i/o timeout
  f015932: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f015941: 'fail, Ukraine, Kyiv', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWC3vS8Y3qNLZv7qFGWsMh8cab6vZX6SmWTWj18hfg8kLA:  * [/ip4/176.37.174.101/tcp/1347] dial tcp4 0.0.0.0:37529->176.37.174.101:1347: i/o timeout  * [/ip4/176.37.167.219/tcp/1347] dial tcp4 0.0.0.0:37529->176.37.167.219:1347: i/o timeout
  f016276: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f016398: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f017242: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPGLyXX9sScwrwpSne5Pjrc8YD2gqPJh5TNGoMdMmQoiA:  * [/ip4/119.147.149.158/tcp/33442] dial tcp4 0.0.0.0:37529->119.147.149.158:33442: i/o timeout
  f018538: 'fail, China, Huzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f018780:
    'fail, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNRos5ScbQVYw4nqA57k7nSB8JpLUmUD3g4yMUjTSsHPp:  * [/ip4/47.57.243.33/tcp/49553] failed to negotiate security protocol: EOF  * [/ip4/47.242.85.219/tcp/49553] failed to negotiate security protocol: EOF
  f018781:
    'fail, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQHr7KMi1cMdRQ4mWTQdKkNJJrNYz2MZATKZ3ovLLjTBT:  * [/ip4/47.242.85.219/tcp/49533] failed to negotiate security protocol: EOF  * [/ip4/47.57.243.33/tcp/49533] failed to negotiate security protocol: EOF
  f018782: 'fail, Singapore + USA + Germany, Frankfurt + UK, London', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMSapysaxjpUX1P8Y8jZu7oqMTP9td7YgJsECatMs2U2g:  * [/ip4/47.242.85.219/tcp/49513] failed to negotiate security protocol: EOF  * [/ip4/47.57.243.33/tcp/49513] failed to negotiate security protocol: EOF
  f018783:
    'fail, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDoZ9BprcSSsSsQuvw1prVYdWm1HYHXqWrGccHypLBrws:  * [/ip4/47.57.243.33/tcp/49563] failed to negotiate security protocol: EOF  * [/ip4/47.242.85.219/tcp/49563] failed to negotiate security protocol: EOF
  f018785:
    'fail, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHDNY6xoW5fPCTY397jboA9cQwRsGSceMBjXQvfvKQES4:  * [/ip4/47.57.243.33/tcp/49543] failed to negotiate security protocol: EOF  * [/ip4/47.242.85.219/tcp/49543] failed to negotiate security protocol: EOF
  f019002: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQpRVhYtazvY12NzLmEeaCmk3f1zUASSPntKmBYzKJiUf:  * [/ip4/172.23.1.181/tcp/10241] dial tcp4 0.0.0.0:37529->172.23.1.181:10241: i/o timeout  * [/ip4/125.77.198.232/tcp/10241] failed to negotiate security protocol: context deadline exceeded
  f019041: 'fail, China, Zhejiang + Singapore, Zheng2', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJCDVwifzmPY667ySn4B5hGGReR6up3HzhSs5YJQjvSVt:  * [/ip4/54.238.182.234/tcp/3077] dial tcp4 0.0.0.0:37529->54.238.182.234:3077: i/o timeout
  f019074: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLM1TeB6wiFXdKgHPRh5W6wve8NXC13mEk3seDqVttKqg:  * [/ip4/192.168.2.55/tcp/3000] dial tcp4 0.0.0.0:37529->192.168.2.55:3000: i/o timeout
  f019099: 'fail, China, Hong Kong + Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR6aV6wyXX2hVB2DpVXkJ6gRWPZoNR6U4wCrdw8ChjAfa:  * [/ip4/45.158.182.10/tcp/12345] dial tcp4 0.0.0.0:37529->45.158.182.10:12345: i/o timeout
  f019100: 'fail, Romania, Cluj-Napoca, noisyfan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJFAe3K8ENQMmtZzSYsRoCNfvf8N3Ky15EVhCSoXjMhnP:  * [/ip4/79.119.122.118/tcp/55555] dial tcp4 0.0.0.0:37529->79.119.122.118:55555: i/o timeout
  f019155: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJKhA1YjePY8e5tKmN6RuLTWWBvUCirLiVTBTgWNMLpGD:  * [/ip4/101.206.156.204/tcp/15110] dial tcp4 0.0.0.0:37529->101.206.156.204:15110: i/o timeout
  f019240: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGfchVNtPipXgLz2Tb2zuF6ZvcZCkkgfE8pdgjjriPx9b:  * [/ip4/36.112.26.4/tcp/3458] dial tcp4 0.0.0.0:37529->36.112.26.4:3458: i/o timeout
  f019354: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJuLmMcGGpZpi2mhJ2Sk5RZnBUxnhpgYMKyaLN3qFty7a:  * [/ip4/103.122.95.5/tcp/32818] dial tcp4 103.122.95.5:32818: connect: connection refused  * [/ip4/10.2.5.12/tcp/32818] dial tcp4 0.0.0.0:37529->10.2.5.12:32818: i/o timeout  * [/ip4/128.1.78.98/tcp/31437] dial tcp4 0.0.0.0:37529->128.1.78.98:31437: i/o timeout
  f019422: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f019638: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPPZz5WJkMn9GG87FYy6WwNE2LseU7KDo5DEA9H4ReWPP:  * [/ip4/1.183.72.210/tcp/30005] dial tcp4 0.0.0.0:37529->1.183.72.210:30005: i/o timeout
  f019806: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f020315: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMtQk6fPXsKjVok1psu8hGjuktQuFVbbqyndFTWWx6u3J:  * [/ip4/10.2.5.25/tcp/56433] dial tcp4 0.0.0.0:37529->10.2.5.25:56433: i/o timeout  * [/ip4/10.2.1.3/tcp/56432] dial tcp4 0.0.0.0:37529->10.2.1.3:56432: i/o timeout  * [/ip4/183.36.17.137/tcp/56432] dial tcp4 0.0.0.0:37529->183.36.17.137:56432: i/o timeout
  f020330: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBXPgkgXp2m35w78Bk43xTDVot5y47ewmVimnMhVkdYtx:  * [/ip4/193.193.193.14/tcp/14356] dial tcp4 0.0.0.0:37529->193.193.193.14:14356: i/o timeout
  f020331: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHPsvkyYG11ibvAQ3kGmoPdPBCfxvjXjZpa9NcVVSySCj:  * [/ip4/39.101.70.154/tcp/14567] dial tcp4 0.0.0.0:37529->39.101.70.154:14567: i/o timeout
  f020398: 'fail, China, Zhangjiakou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f020436: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRgBCjVvmsgJuE1VzRZ3EgSQoQtasZKAgiQ7zQN2J49N5:  * [/ip4/123.115.219.119/tcp/24002] dial tcp4 0.0.0.0:37529->123.115.219.119:24002: i/o timeout
  f020452: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAojcwZ3xQ8awhrXP4qhi7hH2Nv981JkzQyTsU83UMLkG:  * [/ip4/170.33.12.186/tcp/17012] dial tcp4 0.0.0.0:37529->170.33.12.186:17012: i/o timeout
  f020522: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLwpRZv1RnvGTzE67HkGLZc9HPAMvkJSM9eXBrF7FsfH1:  * [/ip4/8.211.49.16/tcp/14567] dial tcp4 0.0.0.0:37529->8.211.49.16:14567: i/o timeout
  f020604: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG2gh3aMiShLywLbkwB3E64KoMTuAuJvq463bGvmff51A:  * [/ip4/195.82.192.33/tcp/3321] dial tcp4 0.0.0.0:37529->195.82.192.33:3321: i/o timeout
  f020618: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGHFUS8oi1qbinPV4gnuNmU8EatZkYSya7HQahTd95XqU:  * [/ip4/170.33.12.186/tcp/17011] dial tcp4 0.0.0.0:37529->170.33.12.186:17011: i/o timeout
  f020742: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD3yEpkcFCuGh9mEwtyNY8HUxjDDWS7pkC4iGzpygdbDc:  * [/ip4/175.24.25.61/tcp/53456] dial tcp4 0.0.0.0:37529->175.24.25.61:53456: i/o timeout
  f020928: 'fail, China, Deyang + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSXR1y7ZT4HzjboVXuFsG4nsATyxA89cUnZBiESoJb6dm:  * [/ip4/117.177.135.20/tcp/12288] dial tcp4 0.0.0.0:37529->117.177.135.20:12288: i/o timeout  * [/ip4/170.33.9.50/tcp/12288] dial tcp4 0.0.0.0:37529->170.33.9.50:12288: i/o timeout
  f020957: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021254: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLeWLUiErLHXTDn9bBZP8HCT1ymnhRMqLj6eo6xfftiPx:  * [/ip4/61.164.212.195/tcp/24001] dial tcp4 61.164.212.195:24001: connect: connection refused
  f021444: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWReHgMWRaP31htajNkfCTobGZvH6wRTydvTXfKcCwvUTN:  * [/ip4/183.60.227.73/tcp/10240] dial tcp4 0.0.0.0:37529->183.60.227.73:10240: i/o timeout
  f021461: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFi6doAcsSUCDhU9EFjSJD6t6up6ko35RD3ZtTdG6rjfC:  * [/ip4/170.33.12.186/tcp/17361] dial tcp4 0.0.0.0:37529->170.33.12.186:17361: i/o timeout
  f021504: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021525: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRPLVYuydRMtVtDSTEi1gpwewniZbpXZeDecSTtstfvAA:  * [/ip4/121.201.41.87/tcp/14567] dial tcp4 0.0.0.0:37529->121.201.41.87:14567: i/o timeout
  f021532: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFB42PdKvKzH2bLS1tXhBjBEMbL1Arcmr8DeHE7TV2wqN:  * [/ip4/121.46.237.2/tcp/23456] dial tcp4 0.0.0.0:37529->121.46.237.2:23456: i/o timeout
  f021536: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021547: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJhmH6Zj4SuNdNrXAThjLcoM1NzDTRuys5rr85ukfoRd7:  * [/ip4/170.33.12.186/tcp/17329] dial tcp4 0.0.0.0:37529->170.33.12.186:17329: i/o timeout
  f021695: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021704: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021710: 'fail, China, Shijiazhuang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021716: 'fail, New Zealand, Wellington, Info.farm', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQSYVUEPYVZeasbkgRGyHFReonHAt6NYsTBrrVPPuCEqa:  * [/ip4/121.99.224.109/tcp/24001] dial tcp4 121.99.224.109:24001: connect: connection refused
  f021870: 'fail, China, Jieyang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021961: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022030: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022038: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022072: 'fail, China, Jieyang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022093: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022111: 'fail, China, Quanzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHjd2Mn9oXSg6Anuw5LtXyEtHoqsMSeK8gH495zukLjiQ:  * [/ip4/112.47.13.98/tcp/8081] dial tcp4 0.0.0.0:37529->112.47.13.98:8081: i/o timeout
  f022227: 'fail, China, Jiangsu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFb6Kyw9uZHyB5cN9LSr7VUajpbrE3XJoL2zDdVi6cA2x:  * [/ip4/112.30.158.226/tcp/10240] dial tcp4 0.0.0.0:37529->112.30.158.226:10240: i/o timeout
  f022289: 'fail, China, Mianyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKkBDbYYTA8frNjMVZ4Cby5vPUGfDTFKGMQJNa2Kja8Ki:  * [/ip4/117.175.0.200/tcp/34149] dial tcp4 0.0.0.0:37529->117.175.0.200:34149: i/o timeout
  f022336: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022338: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022361: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022373: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022374: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022522: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNJFQKtNKSyEx1qy2hV7N69euGbPVsutBucdP4dbfFrjL:  * [/ip4/113.105.174.12/tcp/10000] dial tcp4 0.0.0.0:37529->113.105.174.12:10000: i/o timeout
  f022687: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDMP23CasGQtJLXWXpNcqBy6ENTuzZ4jsBvyRYkgNmJBE:  * [/ip4/182.131.4.194/tcp/10080] dial tcp4 0.0.0.0:37529->182.131.4.194:10080: i/o timeout
  f022748: 'fail, China, Xinyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBDT2R3o6EG5WbDJ3pQuC3mh4M9JdDNxV4anXbn98DqtP:  * [/ip4/127.0.0.1/tcp/34509] dial tcp4 127.0.0.1:34509: connect: connection refused  * [/ip6/::1/tcp/39853] dial tcp6 [::1]:39853: connect: connection refused  * [/ip4/36.99.195.18/tcp/2442] dial tcp4 36.99.195.18:2442: connect: connection refused  * [/ip4/36.99.195.18/tcp/2528] dial tcp4 36.99.195.18:2528: connect: connection refused  * [/ip4/10.3.1.64/tcp/34509] dial tcp4 0.0.0.0:37529->10.3.1.64:34509: i/o timeout
  f022804: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022820: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD9FvZWMzGBNMVvtCRxS9ThUczCGTr1XU9ib31T5U7zE5:  * [/ip4/45.251.104.73/tcp/6123] dial tcp4 0.0.0.0:37529->45.251.104.73:6123: i/o timeout
  f022832: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEKNh29iao27XzC3rDz3rk1L4g1SAGyYUxcW1jmbbvEjc:  * [/ip4/0.0.0.0/tcp/42545] dial tcp4 0.0.0.0:42545: connect: connection refused  * [/ip4/101.36.64.200/tcp/42545] dial tcp4 0.0.0.0:37529->101.36.64.200:42545: i/o timeout
  f022922: 'fail, China, Shenzhen, CAAP-MEG', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBNppTbYJGR7RUUKosPBhoVHTHfMKq4HTRcLJxMei7aoP:  * [/ip6/::1/tcp/35143] dial tcp6 [::1]:35143: connect: connection refused
  f023001: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNUTa7nwh7wH8vnHb5cYxHQaYf99N85t18fzRUBRFhgux:  * [/ip4/192.168.1.236/tcp/34617] dial tcp4 0.0.0.0:37529->192.168.1.236:34617: i/o timeout
  f023013: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023152: 'fail, China, Shandong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWN1MJM2v2ag8LVDKKz5DbGJuneePgh47Lq8rh1Gec3PWJ:  * [/ip4/106.74.7.4/tcp/32759] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWN1MJM2v2ag8LVDKKz5DbGJuneePgh47Lq8rh1Gec3PWJ, but remote key matches 12D3KooWBZ26N9VbVLBfiutv3uADBSFjr3FM1RbNXDMz4uW37nLN
  f023200: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKV6h5S72ZzJvSVvUqoC1Q6i1eKKdYJEaKss2mbDNCnxi:  * [/ip4/175.24.25.61/tcp/13457] dial tcp4 0.0.0.0:37529->175.24.25.61:13457: i/o timeout
  f023205: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSjjE2kccKuZd7nZ2wrZ82rCg9zVMp35vCgZG86H6Gvm7:  * [/ip4/193.194.160.12/tcp/2234] dial tcp4 0.0.0.0:37529->193.194.160.12:2234: i/o timeout
  f023462: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGW26ie1rqmCjLapiSiXgYnsLTN6MrRecmaBbNgNujJrt:  * [/ip4/61.164.212.154/tcp/29012] dial tcp4 0.0.0.0:37529->61.164.212.154:29012: i/o timeout
  f023499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023530: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQWNyWUpMmAgh8f84bneQ5164tDUYjJkJsFWxKrC3UDDD:  * [/ip4/172.17.32.53/tcp/10241] dial tcp4 0.0.0.0:37529->172.17.32.53:10241: i/o timeout  * [/ip4/47.252.15.25/tcp/55242] dial tcp4 0.0.0.0:37529->47.252.15.25:55242: i/o timeout
  f023534: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRxHzTxSbtqzUPGwtroLnqS6X5EXRsxoGfteLVrCPgJJD:  * [/ip4/61.164.212.154/tcp/29014] dial tcp4 0.0.0.0:37529->61.164.212.154:29014: i/o timeout
  f023561: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPs912rgbTFiN7KBzjREuDXGqgG4CMDDbei1HBJ3qgvwg:  * [/ip4/103.44.247.32/tcp/40573] dial tcp4 0.0.0.0:37529->103.44.247.32:40573: i/o timeout
  f023565: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLrJLnYo9RrjURuGzqaFRHpGt3pYwp4xDtKN8DCfakSjx:  * [/ip4/220.176.125.32/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.32:23450: i/o timeout
  f023626: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023627: 'fail, China, Zhongwei', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023651: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023660: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWShhXsAPMy9gSf53m2X8fkvugKERtKugYMRR3ghkuiSvE:  * [/ip4/220.176.125.37/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.37:23450: i/o timeout
  f023662: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKywsWcA5eTQF8o99Eh8zgpoAKNNCBJ83w7bZtdQxsqgz:  * [/ip4/220.176.125.35/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.35:23450: i/o timeout
  f023843: 'fail, China, Zhangjiakou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023853: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWH3T3PqwcPFYCopZuTRs3aKjfQgHaXixYpXwJ7aYKXgCz:  * [/ip4/220.176.125.91/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.91:23450: i/o timeout
  f023854: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKVUtv7h1DEWKc1VzWfqMVcCC1TexeB7gR6uqYEr5QFq5:  * [/ip4/220.176.125.93/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.93:23450: i/o timeout
  f023855: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJJoswYN5VyniefDNkUTEL1s8QZRiB5dtArBBuecRP88h:  * [/ip4/220.176.125.95/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.95:23450: i/o timeout
  f023858: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCsfSujn41qPrvmgZUhfQKaLnyx6GvkEdEXjVNqkHP3im:  * [/ip4/220.176.125.71/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.71:23450: i/o timeout
  f023859: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSgRmLVNDBJJ8VPcwMgDwLZiWckaJen9LCRJJupoNYdg6:  * [/ip4/220.176.125.73/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.73:23450: i/o timeout
  f023861: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKHQnGyhDZBCFvccsbGVk5U6TqfpApViAK2k6rgi3L9Ay:  * [/ip4/220.176.125.77/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.77:23450: i/o timeout
  f023868: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvAzrSvZ12UwkBi72t9VNgKZof1mrcg6DuHkTNutuf9M:  * [/ip4/220.176.125.53/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.53:23450: i/o timeout
  f023869: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRB15zLW8BWoWiLpQ3S69RyctdxTVHDLRNyKV7C9pcep5:  * [/ip4/220.176.125.57/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.57:23450: i/o timeout
  f023870: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWM2dGqhtATfpvpBMRT2tTczznY8cn3Jw1eaC1Fnx1Fxq1:  * [/ip4/220.176.125.55/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.55:23450: i/o timeout
  f023871: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRkWmRF3LfL9q6dnuC1tRb2J25kqXKzG2c7x5HUL76eHE:  * [/ip4/220.176.125.51/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.51:23450: i/o timeout
  f023876: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMjKQSeAe4iPUs5kqUknWtuRkeq5NA8BRTjsoDnXV4Nks:  * [/ip4/220.176.125.49/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.49:23450: i/o timeout
  f023882: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAGbUUNczesmEYLFx4vVHb3QS2nSisFuURG8e7BSEABpW:  * [/ip4/10.21.1.15/tcp/7110] dial tcp4 0.0.0.0:37529->10.21.1.15:7110: i/o timeout
  f023928: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEdfpxqGrLtr8owk3MYMVoQcsv1qRNsnukVrpVxD1bYNk:  * [/ip4/220.176.125.75/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.75:23450: i/o timeout
  f023977: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: no good addresses
  f023978: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: no good addresses
  f023980: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: no good addresses
  f023981: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: no good addresses
  f023982: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQvMQ5WmwuxbxWtqqaV32xwuLD4rXtnjgXhE2e94UCZgu:  * [/ip4/61.164.212.154/tcp/28012] dial tcp4 0.0.0.0:37529->61.164.212.154:28012: i/o timeout
  f023983: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNhc5Rzgc1c8p9kvBVhrLUB4ZZniwnpi4yQd1WVf952tp:  * [/ip4/61.164.212.154/tcp/28014] dial tcp4 0.0.0.0:37529->61.164.212.154:28014: i/o timeout
  f023984: 'fail, China, Jiaxing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMvACeFSqXarKUTKFGwmZ5HheSgGssRV6hTafxKg1ZEEP:  * [/ip4/61.164.212.154/tcp/28013] dial tcp4 0.0.0.0:37529->61.164.212.154:28013: i/o timeout
  f023985: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMcc3EhXXVv58dHrg2oAtdA8JMHyqZPAJekuuhSd4rN32:  * [/ip4/61.164.212.154/tcp/28015] dial tcp4 0.0.0.0:37529->61.164.212.154:28015: i/o timeout
  f024006: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPs9LtGQ3wLgsdNt81Vgpc8dZyEgxy28vvTdLLiQuzyNZ:  * [/ip4/220.176.125.65/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.65:23450: i/o timeout
  f024007: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA7fr1uzxdSvZMf6G51eJWbf4LnZB8JgxqWW5aWBkgrPH:  * [/ip4/220.176.125.67/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.67:23450: i/o timeout
  f024012: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWL6v5XRLK1ajsJwcpsKXDUpt9dZowauYVBVBTmEQGfevG:  * [/ip4/220.176.125.85/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.85:23450: i/o timeout
  f024013: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJA2eCePTtims9NA2RxPRRKgDuY93jYwzmoUySPnwKu7N:  * [/ip4/220.176.125.87/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.87:23450: i/o timeout
  f024066: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMjX9ZBRijeCWy8vVJhkar73WYmed1Sa137NZ3W56aHsc:  * [/ip4/182.131.4.197/tcp/10080] dial tcp4 0.0.0.0:37529->182.131.4.197:10080: i/o timeout
  f024081: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQeNeGzD4sCEMbTb48uZtsoGyZuU4kw4ffPn97G1GqHYh:  * [/ip4/220.176.125.59/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.59:23450: i/o timeout
  f024084: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFML7YmTjyNEYuvqiXXvcnxLKTuXN2gVjcUxUPZFFGvek:  * [/ip4/220.176.125.61/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.61:23450: i/o timeout
  f024089: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWL9BpZhuAK5XLcTozTvCmwnCVL7BL4AisXBJgjfDBovpc:  * [/ip4/10.11.4.210/tcp/1234] dial tcp4 0.0.0.0:37529->10.11.4.210:1234: i/o timeout
  f024136: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAgShdPKoXZYMZZTz3VR2EP3FQuYdXBrsx2aGrguEtfdr:  * [/ip4/220.176.125.47/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.47:23450: i/o timeout
  f024137: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJLMF5W4wheCZMaVuBe57eLV93Wx9azEJhv1mZ1BWk6Js:  * [/ip4/195.146.128.172/tcp/11223] dial tcp4 0.0.0.0:37529->195.146.128.172:11223: i/o timeout
  f024146: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHGgagWyjzMuZNiMkws7R3vv93p2xhmiW9ef6JnsXyiY4:  * [/ip4/220.176.125.79/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.79:23450: i/o timeout
  f024147: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWP83jULyFYMGrVKLaSZwQZeX35PSynokGKQy9XmZLcuLk:  * [/ip4/220.176.125.81/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.81:23450: i/o timeout
  f024148: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHkgmUcWbCb2g1rcqUUR1TNrc4NPxpcZQwEafHidTHYwk:  * [/ip4/220.176.125.83/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.83:23450: i/o timeout
  f024182: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQFqPz3vvYGGxB259qZfg3qzoKEnafG8DbfMKUHEUQ26z:  * [/ip4/14.136.246.136/tcp/46717] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQFqPz3vvYGGxB259qZfg3qzoKEnafG8DbfMKUHEUQ26z, but remote key matches 12D3KooWHuQtiCKJykJscPMrNiXaguBWKuhBfKDfGP6ieR6SgwdF
  f024468: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024483: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024511: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWABtoN29o6Hsm8JvF1gNGigPzhukA6DJuspbYLMDa7KA5:  * [/ip4/103.44.247.137/tcp/51105] dial tcp4 103.44.247.137:51105: connect: connection refused
  f024563: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024802: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024894: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024895: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024972: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f025002: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSK67f2i4BYCP4xjUWxhonw38WP7invh47VoUbbXT7zgR:  * [/ip4/202.0.9.112/tcp/31354] dial tcp4 0.0.0.0:37529->202.0.9.112:31354: i/o timeout
  f025005: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f025017: 'fail, China, Hefei, 一三科技-913', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBZeFG1c5zNwCCVnCa6g5TyrUQu5f9oLTYsZyvSigBEXu:  * [/ip4/175.6.250.70/tcp/51105] dial tcp4 0.0.0.0:37529->175.6.250.70:51105: i/o timeout
  f025044: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f029344: 'fail, Korea, Seongnam-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG8v7932PySmGWKus91R3qSbe43GU8fbXieSsaRcjpKwX:  * [/ip4/221.163.91.162/tcp/33230] dial tcp4 0.0.0.0:37529->221.163.91.162:33230: i/o timeout
  f029401: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f029416: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWM5kp2XVhVakYkZEbNo86dXjxfQWDVUwVDMRBU8WhMyTB:  * [/ip4/0.0.0.0/tcp/1024] dial tcp4 0.0.0.0:1024: connect: connection refused
  f029490: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f029585: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f029649: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f029665: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHBddu2erdfQ6NNGgNfbzZyYaKYAm46kYPQQ1triYHDgA:  * [/ip4/124.95.135.132/tcp/7000] dial tcp4 0.0.0.0:37529->124.95.135.132:7000: i/o timeout
  f030125: 'fail, China, Nantong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWP31DDGemmwGuNaKVzEX1nqNWesxWKADFBpRqiwKV7tmT:  * [/ip4/58.221.143.38/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWP31DDGemmwGuNaKVzEX1nqNWesxWKADFBpRqiwKV7tmT, but remote key matches 12D3KooWEJkLQZ4H5awhDNBCAiyHwuD1TgtL6fH9HnDxCV6vDBDv
  f030203: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030249: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030272: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030331: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030335: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030347: 'fail, China, Zhejiang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030384: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNfUzbXzVXqLV9pEubVenJoQHkWtkrR3aSvwyoXc7Kpys:  * [/ip4/103.40.249.175/tcp/12350] dial tcp4 0.0.0.0:37529->103.40.249.175:12350: i/o timeout
  f030408: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030509: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030510: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030511: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030649: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f032833: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f032850: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f032913: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033025: 'fail, Korea, Daegu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLCrE5QLwGxvodoDNoEjF5BxJV6NCeFuipXbjGYawaHfA:  * [/ip4/59.23.202.101/tcp/38155] dial tcp4 0.0.0.0:37529->59.23.202.101:38155: i/o timeout
  f033130: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033384: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033399: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033456: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033462: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033475: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033501: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033517: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034047: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGeaYbwHn8ks9HRbCpbqUm1mS3i6EA4HBLoUY91D3kLi2:  * [/ip4/122.224.89.173/tcp/42695] dial tcp4 0.0.0.0:37529->122.224.89.173:42695: i/o timeout
  f034350: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034544: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRXVLz2WJA2xkJ5SYzGC1JSnenKMw6Ji3AcArgbigrsPQ:  * [/ip4/192.162.197.113/tcp/3235] dial tcp4 0.0.0.0:37529->192.162.197.113:3235: i/o timeout
  f034545: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGGzwFRoHQ2PkctVAB2mNV67Yg4bJ1G84AQTNpN9y311b:  * [/ip4/83.56.103.132/tcp/13235] dial tcp4 0.0.0.0:37529->83.56.103.132:13235: i/o timeout
  f034548: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ7MPMEqCUUJMo2pszvQnR7prBnujeQuKrvaSyeeqJkCb:  * [/ip4/201.117.103.212/tcp/11235] dial tcp4 0.0.0.0:37529->201.117.103.212:11235: i/o timeout
  f034566: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034567: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034581: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034592: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK8NjcyE6yfsRYngnMcAXf13CPpS1Kh7nLDMTUd2yRvxW:  * [/ip4/119.147.213.217/tcp/45137] dial tcp4 0.0.0.0:37529->119.147.213.217:45137: i/o timeout
  f034658: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034701: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWET4Zd79pt13fTA35Vke4wSajUGmyejTSt5UMWDjwDAWN:  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused
  f034707: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034710: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034777: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f035160: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f035161: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f035364: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f035436: 'fail, China, Jiangsu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f039992: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f040218: 'fail, China, Wuxi', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDGtfj4r9yeM9tebHySKRddd43SFjNJ8CQc7LXaCxADoP:  * [/ip4/58.215.14.146/tcp/30000] dial tcp4 0.0.0.0:37529->58.215.14.146:30000: i/o timeout
  f040665: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f042391: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKgiJyJpdx1bsEd1e7kaCej38qPMWYoLFu9qiKB2Rdzre:  * [/ip4/36.248.42.100/tcp/24001] dial tcp4 0.0.0.0:37529->36.248.42.100:24001: i/o timeout
  f042855: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f043929: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRA6mCa3GAoAMnztMPrBHQSMgLd2pcq7XdCFXWgVyAE7N:  * [/ip4/120.232.96.38/tcp/24001] dial tcp4 0.0.0.0:37529->120.232.96.38:24001: i/o timeout
  f044315: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f045505: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGfhqYGvSHHhyQAdPgfHKfVYKHUt2cWycTeEMt1GEq1os:  * [/ip4/1.183.72.226/tcp/12700] dial tcp4 0.0.0.0:37529->1.183.72.226:12700: i/o timeout
  f045743: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f045756: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f046248: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f047666: 'fail, China, Suihua', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJTcEVBF8u3aw7U7uHvwnEQsF3BY9fpEaPrYCYKPrsVbp:  * [/ip4/112.101.133.114/tcp/5678] dial tcp4 0.0.0.0:37529->112.101.133.114:5678: i/o timeout
  f047843: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEvCDSRSXXs2iZLHgHDEWMsAyBBeEWh8YFx8W4RpLAWhv:  * [/ip4/10.3.2.103/tcp/54624] dial tcp4 0.0.0.0:37529->10.3.2.103:54624: i/o timeout  * [/ip4/117.25.158.106/tcp/54624] dial tcp4 0.0.0.0:37529->117.25.158.106:54624: i/o timeout
  f047868: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPkVr9x7NKZS8UbWx6TH4bzCKRng3e46Rq3mouEQ6yEwQ:  * [/ip4/10.7.3.64/tcp/58237] dial tcp4 0.0.0.0:37529->10.7.3.64:58237: i/o timeout  * [/ip4/110.80.136.27/tcp/58237] dial tcp4 0.0.0.0:37529->110.80.136.27:58237: i/o timeout
  f048135: 'fail, China, Chongqing, password interstellar', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGqhmWeASoVC65U3TzEDLCBf8n3z3JjXvBLJ8uZ9ZaH5z:  * [/ip4/113.204.193.50/tcp/27125] dial tcp4 0.0.0.0:37529->113.204.193.50:27125: i/o timeout
  f048968: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFcfUjA3qQqVf8URxpg39pEj5u3GYykgPwi2cSikSoiuG:  * [/ip4/119.6.226.3/tcp/21024] dial tcp4 0.0.0.0:37529->119.6.226.3:21024: i/o timeout
  f048975: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f048986: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f049911: 'fail, China, Yunfu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f050022: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLxu3ykrnkLKLULQxkpyrjhUiPTTMNxDGQW6cF8HmmDHg:  * [/ip4/61.240.206.186/tcp/3346] dial tcp4 0.0.0.0:37529->61.240.206.186:3346: i/o timeout
  f050260: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNUuVRWuihMFhxd5kqz22UsUSL4scbSyYu9ZLhXspE9yq:  * [/ip4/121.239.79.25/tcp/9999] dial tcp4 0.0.0.0:37529->121.239.79.25:9999: i/o timeout
  f052701: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNr6jnRpDrdDxpAHH6rt8H8ADkibeFEYf82ef1nr3v5dN:  * [/ip4/120.233.45.247/tcp/33445] dial tcp4 0.0.0.0:37529->120.233.45.247:33445: i/o timeout
  f053140: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f053141: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f053173: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f053229: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWN9uRDR3aQDVy52tQVzX8ZATmAac9YqyhpkwLcDRyNWmV:  * [/ip4/8.209.65.6/tcp/30123] dial tcp4 0.0.0.0:37529->8.209.65.6:30123: i/o timeout  * [/ip4/172.18.42.27/tcp/10241] dial tcp4 0.0.0.0:37529->172.18.42.27:10241: i/o timeout
  f053446: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054267: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054370: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWP7Y8Bcr8ckwWyywA5vjRUugJDcmXZPcC4HBUuJjSfZtU:  * [/ip4/113.105.174.21/tcp/10000] dial tcp4 0.0.0.0:37529->113.105.174.21:10000: i/o timeout
  f054412: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054422: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054464: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCdBMkc7P346VhjbYz823sUEGeQsqhCs6e1zTHC6M9WXZ:  * [/ip4/0.0.0.0/tcp/5472] dial tcp4 0.0.0.0:5472: connect: connection refused
  f054526: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054666: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGCMWriKdL1S7spEtCAthnCcGvBEM6zLWTFpGxgNdyERf:  * [/ip4/36.158.255.7/tcp/1024] dial tcp4 0.0.0.0:37529->36.158.255.7:1024: i/o timeout
  f055102: 'fail, Vietman, Ho Chi Minh City + China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEzGYZMVXyirJAqybkGPdZFNYBYjtMWyJbWjw5enUo2fN:  * [/ip4/119.28.141.16/tcp/2820] dial tcp4 0.0.0.0:37529->119.28.141.16:2820: i/o timeout  * [/ip4/193.112.116.169/tcp/2820] dial tcp4 0.0.0.0:37529->193.112.116.169:2820: i/o timeout
  f055132: 'fail, Vietman, Ho Chi Minh City + China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLFUPW2eP4bJhTzDwd5mpepUWUX6Y5QH9NTjVYLVnYSAo:  * [/ip4/119.28.141.16/tcp/2910] dial tcp4 0.0.0.0:37529->119.28.141.16:2910: i/o timeout  * [/ip4/193.112.116.169/tcp/2910] dial tcp4 0.0.0.0:37529->193.112.116.169:2910: i/o timeout
  f055335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f055446: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f056226: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRAb9jNiYFTVA93kYL3naahckeRJx2C3PVMm7eHjPEjjh:  * [/ip4/119.147.149.158/tcp/33444] dial tcp4 0.0.0.0:37529->119.147.149.158:33444: i/o timeout
  f056227: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f056406: 'fail, China, Taizhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFjfWgPNNiuxHwratpW5WU8mkF9zb3Q4co4TXB7mRuwdN:  * [/ip4/221.130.79.154/tcp/1347] dial tcp4 0.0.0.0:37529->221.130.79.154:1347: i/o timeout
  f057070: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKBNGqopBvTEmD15SwX6JapLJ34cv9cCEoWPtUsxQpu4Z:  * [/ip4/117.71.104.68/tcp/10240] dial tcp4 0.0.0.0:37529->117.71.104.68:10240: i/o timeout
  f057127: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvcvRJQHTrxjwH1NqPJnd5HnMQp1mWWzp9LHwBULp7pb:  * [/ip4/58.211.213.210/tcp/20108] dial tcp4 58.211.213.210:20108: connect: connection refused
  f057683: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f058000: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHWWM1on2WtQC8rsccSyh91wPwVcchR1yadWsAxk5GoqR:  * [/ip4/58.211.21.110/tcp/22610] dial tcp4 0.0.0.0:37529->58.211.21.110:22610: i/o timeout
  f058349: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f059788: 'fail, China, Zhanjiang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEhZ3xDvecQ7K14ByYanCewzQqufzX6P2xFaMQu64x3C8:  * [/ip4/183.2.149.76/tcp/33669] dial tcp4 0.0.0.0:37529->183.2.149.76:33669: i/o timeout
  f059813: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060114: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060693: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060754: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060805: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060975: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061051: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061170: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061174: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061503: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061616: 'fail, China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMhSBBPmTg9ULCA2N8WencYxVGhtikHM96w6Q55P7ujkT:  * [/ip4/113.24.192.84/tcp/31436] dial tcp4 113.24.192.84:31436: connect: connection refused
  f061626: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061666: 'fail, China, Qinzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSVWxPLENcxD5cAXPuUS9Ud4pEeD2PsxofQiYHvzjfQME:  * [/ip4/115.231.84.110/tcp/6697] dial tcp4 0.0.0.0:37529->115.231.84.110:6697: i/o timeout
  f061740: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061959: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA5phDUUZUiXuW5YVF7vVLuYSTsx5Shdp4sH5Ftm2pZQu:  * [/ip4/172.18.42.21/tcp/10241] dial tcp4 0.0.0.0:37529->172.18.42.21:10241: i/o timeout
  f062245: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062473: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062475: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062619: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062770: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWM7eA4Y2pM5yjWzXkFVw7zNrGcgoLiLHy4VTJxCrTp44Y:  * [/ip4/103.127.248.195/tcp/10001] dial tcp4 0.0.0.0:37529->103.127.248.195:10001: i/o timeout
  f062811: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNz4V5s6fLRJNbRqK4u3EgJ4ZjpxC5ZjusChupQqkiqS6:  * [/ip4/103.127.248.194/tcp/10001] dial tcp4 0.0.0.0:37529->103.127.248.194:10001: i/o timeout
  f062931: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBcj62i1JiSpJQG3rq8vMs5HrRfKgNP3Xh1hp893k5qYt:  * [/ip4/95.180.132.5/tcp/22124] dial tcp4 95.180.132.5:22124: connect: no route to host
  f062937: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJLbWZY8rAJQuWdE5UfLR7J2eBP3D8NDjfMskgXnPVP27:  * [/ip4/130.208.236.72/tcp/21215] dial tcp4 0.0.0.0:37529->130.208.236.72:21215: i/o timeout
  f062982: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFikUmntbNAjbEbWk7jXHSaA3aQZ6HBG8imPZzQkFzYZk:  * [/ip4/103.127.248.196/tcp/10001] dial tcp4 0.0.0.0:37529->103.127.248.196:10001: i/o timeout
  f063869: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSLuP973LtvjH5aQiMHnuBfGQJHzEwuMrVAk7aenpVV4y:  * [/ip4/109.106.110.128/tcp/2131] dial tcp4 0.0.0.0:37529->109.106.110.128:2131: i/o timeout
  f063996: 'fail, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f064668: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9zdsaiZFatGeKwwpUPqRC9YnP6hFQbCCn5JNVoY1U7t8:  * [/ip4/14.136.246.132/tcp/46717] failed to negotiate security protocol: peer id mismatch: expected 12D3KooW9zdsaiZFatGeKwwpUPqRC9YnP6hFQbCCn5JNVoY1U7t8, but remote key matches 12D3KooWPJiwfoeZa3DvyVAV8vKm4yuYeFccfDQf1La56DcTVVtj
  f064855: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f064908: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065113: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065141: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065174: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065266: 'fail, China, Hefei', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065391: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065578: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065670: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065686: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065877: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065881: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065941: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066102: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWT2cHGhW3nrEHraA9GtthVk66kd2W6mtbWYEUjfe84dJv:  * [/ip4/172.18.41.60/tcp/10241] dial tcp4 0.0.0.0:37529->172.18.41.60:10241: i/o timeout  * [/ip4/8.209.65.6/tcp/30125] dial tcp4 0.0.0.0:37529->8.209.65.6:30125: i/o timeout
  f066210: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066259: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFjHiNRkEinquaamh5JzcgepFP6bDpqj2XHw5BgMv14b5:  * [/ip4/8.209.65.6/tcp/30128] dial tcp4 0.0.0.0:37529->8.209.65.6:30128: i/o timeout
  f066270: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066302: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066476: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066563: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066781: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066790: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDDraCV1d5Ju6Cd9HrUx92qSZhNuhGp11zUMnKjeGqLvF:  * [/ip4/0.0.0.0/tcp/42545] dial tcp4 0.0.0.0:42545: connect: connection refused
  f067170: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f067598: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f068096: 'fail, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLMSQyXno4UrzArsMy22YhHRAvmzhhZKGbgAUULZCx3tB:  * [/ip4/222.213.23.200/tcp/38999] dial tcp4 0.0.0.0:37529->222.213.23.200:38999: i/o timeout
  f068528: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f068560: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNABE3yaZenjaX91wM18UeiwjLMy96jFRs9tP7cYHTFy4:  * [/ip4/172.16.100.111/tcp/37929] dial tcp4 0.0.0.0:37529->172.16.100.111:37929: i/o timeout
  f068809: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f069391: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRCdFYT9C9jwC6DHGha6wEGMhddnTaVzhNbFPK8oBNGDG:  * [/ip4/192.168.1.10/tcp/32759] dial tcp4 0.0.0.0:37529->192.168.1.10:32759: i/o timeout
  f069448: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070044: 'fail, China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQU9u9dyQq369sqKHyscGqEbG3TKixJTmgSq2Ri4a88nT:  * [/ip4/47.57.185.52/tcp/12600] dial tcp4 0.0.0.0:37529->47.57.185.52:12600: i/o timeout
  f070045: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070501: 'fail, USA + China, Hong Kong + Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEgV4KpRSFZpp4qwShD7axbcRaQ2uxozWxDd8x971j4EW:  * [/ip4/127.0.0.1/tcp/40571] dial tcp4 127.0.0.1:40571: connect: connection refused  * [/ip6/::1/tcp/43829] dial tcp6 [::1]:43829: connect: connection refused  * [/ip4/192.168.131.11/tcp/40571] dial tcp4 0.0.0.0:37529->192.168.131.11:40571: i/o timeout  * [/ip4/47.242.61.166/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.61.166:49572: i/o timeout  * [/ip4/47.242.48.109/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.48.109:49572: i/o timeout  * [/ip4/47.242.41.179/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.41.179:49572: i/o timeout  * [/ip4/47.242.63.117/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.63.117:49572: i/o timeout  * [/ip4/156.225.4.85/tcp/49572] dial tcp4 0.0.0.0:37529->156.225.4.85:49572: i/o timeout  * [/ip4/47.242.63.61/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.63.61:49572: i/o timeout  * [/ip4/47.242.73.155/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.73.155:49572: i/o timeout  * [/ip4/47.242.63.99/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.63.99:49572: i/o timeout  * [/ip4/47.242.67.240/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.67.240:49572: i/o timeout  * [/ip4/47.242.61.189/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.61.189:49572: i/o timeout  * [/ip4/156.225.4.51/tcp/49572] dial tcp4 0.0.0.0:37529->156.225.4.51:49572: i/o timeout  * [/ip4/162.14.19.182/tcp/49572] dial tcp4 0.0.0.0:37529->162.14.19.182:49572: i/o timeout  * [/ip4/47.242.62.63/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.62.63:49572: i/o timeout    ... skipping 1 errors ...
  f070802: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070803: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070932: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSoe5uQj9Yq9iRUc3cA4kavt9s1pnnX35Cm1xufCfkyFL:  * [/ip4/47.252.15.25/tcp/55246] dial tcp4 0.0.0.0:37529->47.252.15.25:55246: i/o timeout
  f071287: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f071664: 'fail, China, Shangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQe8HRVWhaTBPvhXnSkz7C58jx5ehof8moeL2hFQ4x2KD:  * [/ip4/10.133.8.210/tcp/32759] dial tcp4 0.0.0.0:37529->10.133.8.210:32759: i/o timeout
  f073196: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073448: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073525: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073628: 'fail, USA, New Castle', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHgy4t3irHXZYCa122uj7Ugux5EotCKgVq19htw2iePEH:  * [/ip4/47.242.41.179/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.41.179:49572: i/o timeout  * [/ip4/47.242.63.61/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.63.61:49572: i/o timeout  * [/ip4/47.242.62.63/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.62.63:49572: i/o timeout  * [/ip4/47.242.61.189/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.61.189:49572: i/o timeout  * [/ip4/162.14.17.215/tcp/49572] dial tcp4 0.0.0.0:37529->162.14.17.215:49572: i/o timeout  * [/ip4/162.14.19.182/tcp/49572] dial tcp4 0.0.0.0:37529->162.14.19.182:49572: i/o timeout  * [/ip4/47.242.63.117/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.63.117:49572: i/o timeout  * [/ip4/47.242.67.240/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.67.240:49572: i/o timeout  * [/ip4/47.242.73.155/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.73.155:49572: i/o timeout  * [/ip4/47.242.63.99/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.63.99:49572: i/o timeout  * [/ip4/47.242.61.166/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.61.166:49572: i/o timeout  * [/ip4/47.242.48.109/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.48.109:49572: i/o timeout
  f073844: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073888: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073904: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f077761: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f078465: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f078522: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: stream reset
  f078621: 'fail, Korea, Uiwang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHo2ffY2a61PQtWTrb1U9Ku8KDwncRk3e1uCVpA3qNndT:  * [/ip4/211.170.59.241/tcp/24001] dial tcp4 0.0.0.0:37529->211.170.59.241:24001: i/o timeout
  f078899: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079007: 'fail, China, Jinan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9rii8KJUHwHyNVg1xEM16u7V7rhbgdruT2AFYsjFgb4n:  * [/ip4/112.232.106.138/tcp/3389] dial tcp4 0.0.0.0:37529->112.232.106.138:3389: i/o timeout
  f079092: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079247: 'fail, USA + China, Guangzhou + Beijing + Dongguan + Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNnXXfq2QPS6bTPc3EhP5DNfYi5m7Z7Cz8z6oEjqZ1Vfd:  * [/ip4/162.14.17.215/tcp/49572] dial tcp4 0.0.0.0:37529->162.14.17.215:49572: i/o timeout  * [/ip4/162.14.19.182/tcp/49572] dial tcp4 0.0.0.0:37529->162.14.19.182:49572: i/o timeout  * [/ip4/47.242.63.117/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.63.117:49572: i/o timeout  * [/ip4/47.242.63.61/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.63.61:49572: i/o timeout  * [/ip4/47.242.67.240/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.67.240:49572: i/o timeout  * [/ip4/47.242.62.63/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.62.63:49572: i/o timeout  * [/ip4/47.242.63.99/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.63.99:49572: i/o timeout  * [/ip4/47.242.61.166/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.61.166:49572: i/o timeout  * [/ip4/47.242.41.179/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.41.179:49572: i/o timeout  * [/ip4/47.242.73.155/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.73.155:49572: i/o timeout  * [/ip4/47.242.61.189/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.61.189:49572: i/o timeout  * [/ip4/47.242.48.109/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.48.109:49572: i/o timeout
  f079285: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLV22X7z7KdMfiX31Xie9xHsi6UB8wAZ2gLf2JyQ4PuCa:  * [/ip4/172.22.20.109/tcp/10241] dial tcp4 0.0.0.0:37529->172.22.20.109:10241: i/o timeout
  f079301: 'fail, China, Guangzhou + Dongguan + Shenzhen, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQwnuQTnecbf7LqHdr9uKQKFXfacSafaom4z1M7EzuAyh:  * [/ip4/162.14.17.215/tcp/49572] dial tcp4 0.0.0.0:37529->162.14.17.215:49572: i/o timeout  * [/ip4/162.14.19.182/tcp/49572] dial tcp4 0.0.0.0:37529->162.14.19.182:49572: i/o timeout  * [/ip4/47.242.63.117/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.63.117:49572: i/o timeout  * [/ip4/47.242.73.155/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.73.155:49572: i/o timeout  * [/ip4/47.242.63.61/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.63.61:49572: i/o timeout  * [/ip4/47.242.61.166/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.61.166:49572: i/o timeout  * [/ip4/47.242.61.189/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.61.189:49572: i/o timeout  * [/ip4/47.242.62.63/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.62.63:49572: i/o timeout  * [/ip4/47.242.41.179/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.41.179:49572: i/o timeout  * [/ip4/47.242.48.109/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.48.109:49572: i/o timeout  * [/ip4/47.242.63.99/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.63.99:49572: i/o timeout  * [/ip4/47.242.67.240/tcp/49572] dial tcp4 0.0.0.0:37529->47.242.67.240:49572: i/o timeout
  f079425: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079618: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDfDkpBvfJJsZ93nC3iXncwYxz41ekAbZK3BUsMBuuk79:  * [/ip4/127.0.0.1/tcp/45841] dial tcp4 127.0.0.1:45841: connect: connection refused  * [/ip6/::1/tcp/46651] dial tcp6 [::1]:46651: connect: connection refused  * [/ip4/10.3.18.44/tcp/45841] dial tcp4 0.0.0.0:37529->10.3.18.44:45841: i/o timeout  * [/ip4/10.80.63.1/tcp/45841] dial tcp4 0.0.0.0:37529->10.80.63.1:45841: i/o timeout  * [/ip4/10.3.18.44/tcp/36284] dial tcp4 0.0.0.0:37529->10.3.18.44:36284: i/o timeout  * [/ip4/36.159.57.9/tcp/45841] dial tcp4 0.0.0.0:37529->36.159.57.9:45841: i/o timeout  * [/ip4/36.159.57.19/tcp/36284] dial tcp4 0.0.0.0:37529->36.159.57.19:36284: i/o timeout
  f079719: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079815: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080444: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080605: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080608: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080628: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081078: 'fail, Korea, Busan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMW8ZvKgprKTTmt8cuoC5YYZeJtCn6iBuHWLg6J8rGUts:  * [/ip4/220.119.144.84/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMW8ZvKgprKTTmt8cuoC5YYZeJtCn6iBuHWLg6J8rGUts, but remote key matches 12D3KooWLe7nwrhYUwgTjy7B92xgeuVZFVzgXHuM4wGzmcYg6asG
  f081222: 'fail, China, Changzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAPgPjwr79y24mb6gX12SiafkSHRWseGkDFCzM7mdysmh:  * [/ip4/218.93.31.109/tcp/9876] dial tcp4 0.0.0.0:37529->218.93.31.109:9876: i/o timeout
  f081969: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081977: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081978: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081979: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081984: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081985: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081986: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081989: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081993: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081995: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082000: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082001: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082356: 'fail, China, Jiaxing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082452: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHkWrJ691PW6KBeXvnjEdd5R6vo2SZ4TL44QtSLtE6E2x:  * [/ip4/113.105.174.41/tcp/23450] dial tcp4 0.0.0.0:37529->113.105.174.41:23450: i/o timeout
  f082617: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQoXM8qWNsKEDyb67AmKZCnASvQspN6BLsTuRbBzY999n:  * [/ip4/127.0.0.1/tcp/41797] dial tcp4 127.0.0.1:41797: connect: connection refused  * [/ip4/45.119.63.131/tcp/51105] dial tcp4 45.119.63.131:51105: connect: connection refused  * [/ip4/45.119.63.131/tcp/41797] dial tcp4 0.0.0.0:37529->45.119.63.131:41797: i/o timeout
  f082730: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082958: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDravhMyWjyuK4TjaVaUvubwhpameXwWCuoixczAwFhsV:  * [/ip4/0.0.0.0/tcp/42547] dial tcp4 0.0.0.0:42547: connect: connection refused
  f083419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f083474: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f083542: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f083625: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f083638: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f083903: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD34bmNT4B1sPrf1ohWJFyoeRWZff5Leg8dFKMG6L1ZFL:  * [/ip4/113.200.98.54/tcp/32346] dial tcp4 0.0.0.0:37529->113.200.98.54:32346: i/o timeout
  f083920: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPx6hKEfNxTVcXNszuaYcUzthS2UHzYCZ2o8HcEuVw8TF:  * [/ip4/170.34.13.92/tcp/10079] dial tcp4 0.0.0.0:37529->170.34.13.92:10079: i/o timeout
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
  f086028: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086204: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086222: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086240: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086366: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086439: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086442: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086572: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086988: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087096: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087256: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087530: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ43AvPyh62XtmEYiPvGPPBDfKaAN1bod72zW1AC62qdz:  * [/ip4/103.122.95.105/tcp/31688] dial tcp4 103.122.95.105:31688: connect: connection refused  * [/ip4/10.2.6.194/tcp/31688] dial tcp4 0.0.0.0:37529->10.2.6.194:31688: i/o timeout
  f087868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087871: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087879: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087888: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087896: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087899: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087965: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGbhbr32oPyCfLTgv1GoQmwx1V7u5AdquFNPjjm85iHPe:  * [/ip4/58.211.213.210/tcp/2251] dial tcp4 58.211.213.210:2251: connect: connection refused
  f087999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088002: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088125: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQsq4hmpqQAfNPxLMJQfmiUA2Q1d2yqpfzVZu88GauXzT:  * [/ip4/172.22.22.101/tcp/10241] dial tcp4 0.0.0.0:37529->172.22.22.101:10241: i/o timeout
  f088171: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088290: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088388: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088400: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQksh2T1XcnLj2Fjsrp8DafeLXA5DYTE79EdZunSSdWcb:  * [/ip4/172.22.22.102/tcp/10241] dial tcp4 0.0.0.0:37529->172.22.22.102:10241: i/o timeout
  f089167: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089168: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089169: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089173: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGBUUwC19e5cg914WheUfZmWAjcLAR8yW56vU4Mg5LgFp:  * [/ip4/172.19.108.155/tcp/10241] dial tcp4 0.0.0.0:37529->172.19.108.155:10241: i/o timeout
  f089180: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089186: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089200: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089220: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089228: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRaFywA6bQDMz7x1o5LpkVmjrEBpM8BWGHmrLF1Kvdfbm:  * [/ip4/172.18.41.50/tcp/10241] dial tcp4 0.0.0.0:37529->172.18.41.50:10241: i/o timeout  * [/ip4/8.209.65.6/tcp/30126] dial tcp4 0.0.0.0:37529->8.209.65.6:30126: i/o timeout
  f089358: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLHVswzdG7ikc8WFqn6L2wVAfJQWFqKssWk3BGAHEWgbT:  * [/ip4/172.22.7.106/tcp/10241] dial tcp4 0.0.0.0:37529->172.22.7.106:10241: i/o timeout
  f089380: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBA5ZhUhL6oEkvNXMxCa7KpDzn5N8YpQ3mYdjBHn9xwKr:  * [/ip4/8.209.65.6/tcp/30129] dial tcp4 0.0.0.0:37529->8.209.65.6:30129: i/o timeout
  f089551: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJCsDBR8rrN7Mdrpxrxpo58c2ymFGMCgWpyeM9suWpj8R:  * [/ip4/121.40.135.72/tcp/26892] dial tcp4 0.0.0.0:37529->121.40.135.72:26892: i/o timeout
  f089767: 'fail, USA, Bowie', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJfJoyXzXHrB2XFZFgxzPrxddyVF3TYHwS9HYcoecruoB:  * [/ip4/129.168.0.1/tcp/912] dial tcp4 0.0.0.0:37529->129.168.0.1:912: i/o timeout  * [/ip4/76.223.76.26/tcp/33905] dial tcp4 0.0.0.0:37529->76.223.76.26:33905: i/o timeout
  f089819: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089910: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089920: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090387: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQCuTEfavwZBRv5dLxx3W6M9ubdcjoUp2Qsw4pMntqodh:  * [/ip4/10.3.7.42/tcp/28354] dial tcp4 0.0.0.0:37529->10.3.7.42:28354: i/o timeout  * [/ip4/117.25.158.126/tcp/28354] dial tcp4 0.0.0.0:37529->117.25.158.126:28354: i/o timeout
  f090481: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090484: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090492: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090889: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090893: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMh6qvtA63P9fB2bQKuR68vDHm8TD3hj85zqKBNKUKmjN:  * [/ip4/6.143.143.121/tcp/912] dial tcp4 0.0.0.0:37529->6.143.143.121:912: i/o timeout
  f090900: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090911: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
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
  f092157: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPA8xizPG6s9QHohE2fzfq4rzrnzrYfUxhbQ9kPXaBCZ5:  * [/ip4/188.213.79.230/tcp/50667] dial tcp4 0.0.0.0:37529->188.213.79.230:50667: i/o timeout
  f092165: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f092228: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f092887: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093115: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSpvPdouDr5V59X7HJyP7A6rbbSyaxCCAZT9QvG6SWPob:  * [/ip4/115.238.239.190/tcp/36789] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSpvPdouDr5V59X7HJyP7A6rbbSyaxCCAZT9QvG6SWPob, but remote key matches 12D3KooWCTbCgd2PtbPvxPLBMzpPD8fbtNyWBhbFVxFYGEpSMTbC
  f093144: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093658: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093686: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093701: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093907: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094003: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094625: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094764: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094765: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDidvy8zSZgUZabmKFXzy42g2LV7en7QYG79D3TLgAtcV:  * [/ip4/218.68.85.213/tcp/12350] dial tcp4 0.0.0.0:37529->218.68.85.213:12350: i/o timeout
  f094847: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094901: 'fail, Korea, Bucheon-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG7fkPkNeeJrUkDA5MPotNMKtSTzbMFtm727MAXS4BES3:  * [/ip4/119.197.20.51/tcp/24001] dial tcp4 0.0.0.0:37529->119.197.20.51:24001: i/o timeout
  f095334: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRM1wv6pR3h9LFrJGArHR1u9Qy2SvADjamftzG15iso9S:  * [/ip4/127.0.0.1/tcp/40357] dial tcp4 127.0.0.1:40357: connect: connection refused  * [/ip6/::1/tcp/46363] dial tcp6 [::1]:46363: connect: connection refused  * [/ip4/103.90.154.133/tcp/40357] dial tcp4 103.90.154.133:40357: connect: connection refused  * [/ip4/10.21.0.200/tcp/40357] dial tcp4 0.0.0.0:37529->10.21.0.200:40357: i/o timeout
  f095382: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f095888: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f095970: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f095997: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f095998: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096064: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096072: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096077: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096087: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096133: 'fail, China, Changsha + Dazhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSvLzWX7JGo8vVKBfRWmv6fbKJUEft1aiBDGA5T5vznhJ:  * [/ip4/175.6.66.78/tcp/14913] dial tcp4 0.0.0.0:37529->175.6.66.78:14913: i/o timeout  * [/ip4/175.6.68.154/tcp/14913] dial tcp4 0.0.0.0:37529->175.6.68.154:14913: i/o timeout
  f096172: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096824: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096920: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097126: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097182: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDZcnHgYqSaxf5g6EeZ1wCVLGCfHtM7ja3iqH4E1NQKja:  * [/ip4/182.131.4.195/tcp/32759] dial tcp4 182.131.4.195:32759: connect: connection refused
  f097214: 'fail, Korea, Bucheon-si, CryptoHash', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWN61zWoBzZACeBnnKqBCM5Hp7Srrf9gaGP1ocvXGEvzao:  * [/ip4/221.154.41.189/tcp/34001] dial tcp4 0.0.0.0:37529->221.154.41.189:34001: i/o timeout
  f097219: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSXN3igGAjvLVVDF4V2RtyW92FWwiK9mXUVkLN8qEjWhF:  * [/ip4/127.0.0.1/tcp/12345] dial tcp4 127.0.0.1:12345: connect: connection refused
  f097432: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097569: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097618: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBB7P7DFAMTPcmBtbYHZebMN8fmQ2VtRcEbewhhEVDMoC:  * [/ip4/49.75.92.112/tcp/24001] dial tcp4 0.0.0.0:37529->49.75.92.112:24001: i/o timeout
  f097658: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097687: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ1AdNGYDDG3J1D4ow3XnPT9vqZ4WdoZXDdEM1uWr4Zvb:  * [/ip4/61.147.81.133/tcp/16017] dial tcp4 61.147.81.133:16017: connect: connection refused
  f097840: "fail, China, Ya'an", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f098664: 'fail, China, Jiangsu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f098743: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099082: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099132: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099247: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099369: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099705: 'fail, China, Zibo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQjQn7oVZwMLeHFyFEvEAfuPjktyZgo6Haunp9Xi34MCf:  * [/ip4/218.201.173.80/tcp/24001] dial tcp4 218.201.173.80:24001: i/o timeout
  f099884: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099949: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHnWmUers64j4j1y8pmDCf5HtheU2f6ogu4eW2VWiB2vs:  * [/ip4/182.131.4.195/tcp/32760] dial tcp4 182.131.4.195:32760: connect: connection refused
  f0100033: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0100034: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0100786: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101016: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101017: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101018: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEnpnV8MaTxEYT7e1xCKvB8bwRSANko9wK9jDs6b5N8f3:  * [/ip4/42.236.7.235/tcp/21002] dial tcp4 0.0.0.0:37529->42.236.7.235:21002: i/o timeout
  f0101019: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101020: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101021: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101069: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFbmvaZZJrgrEzAvNLKAFhmyE9z1tRhtQbZ53zifSkJYE:  * [/ip4/58.144.221.28/tcp/2347] dial tcp4 58.144.221.28:2347: connect: connection refused
  f0101133: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101403: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLHg2DuAH3MCXcdjhUHJGQkkj18rMizTrUGqrK8jE2JsY:  * [/ip4/182.131.4.195/tcp/32761] dial tcp4 182.131.4.195:32761: connect: connection refused
  f0101570: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101611: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0102187: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0102374: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0102376: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0102641: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAnv5JtoVSUWYuZThhUYHGTAak2UwDa9d92BevuA15hfm:  * [/ip4/124.16.8.144/tcp/23450] dial tcp4 0.0.0.0:37529->124.16.8.144:23450: i/o timeout
  f0103162: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103396: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLCnguS1TqxnrbCmDoAbJckjLEvo9xko2xvqmojc1ezxE:  * [/ip4/60.190.243.138/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLCnguS1TqxnrbCmDoAbJckjLEvo9xko2xvqmojc1ezxE, but remote key matches 12D3KooWJ9KC3jmmLpSk4pdrMA5Bn3VgCpvJs7QGQfXWGTVmTM2M
  f0103485: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103665: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103704: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103710: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDUaGhJ9d3Po4oinQiVAvd8a3osHK65EVXEU5Go7GdC1f:  * [/ip4/127.0.0.1/tcp/33487] dial tcp4 127.0.0.1:33487: connect: connection refused  * [/ip6/::1/tcp/46481] dial tcp6 [::1]:46481: connect: connection refused  * [/ip4/10.16.0.202/tcp/33487] dial tcp4 0.0.0.0:37529->10.16.0.202:33487: i/o timeout
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
  f0107127: 'fail, USA, Daytona Beach', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKA2zAAUf6HwAhstuvDZiQUnpbUts2hWyKpit3o1i8wNw:  * [/ip4/172.3.161.97/tcp/24001] dial tcp4 172.3.161.97:24001: connect: connection refused
  f0107308: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR8tJtHhWPg3Sc1vpiosk3k9MjjhXpLXzxhMDRdXrnVkm:  * [/ip4/124.95.138.6/tcp/23450] dial tcp4 0.0.0.0:37529->124.95.138.6:23450: i/o timeout
  f0107322: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107536: 'fail, China, Bozhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvJDNfP1GYdLSZmqquRpPhwoAWpnMbZtn8oGzVjQCkyj:  * [/ip4/60.174.118.137/tcp/25469] dial tcp4 0.0.0.0:37529->60.174.118.137:25469: i/o timeout
  f0107543: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107656: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107753: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKA9j79CoGmZUVocAwFhGyJX7RxKGmc7gFAyNPdwgxVEa:  * [/ip4/101.133.172.142/tcp/1025] dial tcp4 0.0.0.0:37529->101.133.172.142:1025: i/o timeout
  f0107797: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107903: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0108199: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0109272: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0109309: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0109713: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0109743: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLYvFEdMuA4GQUeN5xounAfSBSKcwh5i976nKJ1gGenRu:  * [/ip4/61.147.97.82/tcp/6689] dial tcp4 0.0.0.0:37529->61.147.97.82:6689: i/o timeout
  f0109903: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110110: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110133: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110248: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110261: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110289: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110695: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110696: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110996: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111007: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111175: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111384: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111434: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111447: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111463: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111467: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111469: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111499: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEy4PYMX2HMEnL2JEoThNZ2vaTfFyfYxpPXXc6cnSsGPr:  * [/ip4/182.131.4.195/tcp/32762] dial tcp4 182.131.4.195:32762: connect: connection refused
  f0111584: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKhSWiYYK39pDLsoP4rwt2PXdyvkkQjSqUswwCDhiJwRK:  * [/ip4/172.21.124.62/tcp/32759] dial tcp4 0.0.0.0:37529->172.21.124.62:32759: i/o timeout
  f0112593: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112667: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112680: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112713: 'fail, Korea, Bucheon-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQN75kXUWDj39zx1DDAKrvM5hcdermcxCA8ZJMApVx8HF:  * [/ip4/119.197.20.139/tcp/34001] dial tcp4 0.0.0.0:37529->119.197.20.139:34001: i/o timeout
  f0112762: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112772: 'fail, China, Nantong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112781: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112787: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMsLAmbXHS3ZyvgaG6NGXWwzymwyrorExBkDovdeLsZB5:  * [/ip4/127.0.0.1/tcp/33797] dial tcp4 127.0.0.1:33797: connect: connection refused  * [/ip6/::1/tcp/43735] dial tcp6 [::1]:43735: connect: connection refused  * [/ip4/192.168.140.108/tcp/33797] dial tcp4 0.0.0.0:37529->192.168.140.108:33797: i/o timeout  * [/ip4/113.219.198.35/tcp/33797] dial tcp4 0.0.0.0:37529->113.219.198.35:33797: i/o timeout
  f0112887: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0113331: 'fail, Korea, Jinju + USA', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0113735: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0113754: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0113777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114118: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114153: 'fail, China, Changsha + Dazhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDAyNnbqZFwzEgXkKGoyv8yKAZokHL5SRB1BYgs6JTB2a:  * [/ip4/175.6.68.154/tcp/24913] dial tcp4 0.0.0.0:37529->175.6.68.154:24913: i/o timeout  * [/ip4/175.6.66.78/tcp/24913] dial tcp4 0.0.0.0:37529->175.6.66.78:24913: i/o timeout
  f0114333: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114338: 'fail, China, Maoming', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA8Q2z1wpYNC2dnDKSV6uji9ivBCVgGGt6JFgLE9cp7iz:  * [/ip4/61.143.232.26/tcp/12888] dial tcp4 0.0.0.0:37529->61.143.232.26:12888: i/o timeout
  f0114350: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114808: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114867: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0115001: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0115117: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0115238: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0115990: 'fail, Korea, Gangnam-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCH9QfkYAUcen5u2UsQrsBgRr6SXF1DzoxmejKC3MpMur:  * [/ip4/58.151.184.228/tcp/36849] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCH9QfkYAUcen5u2UsQrsBgRr6SXF1DzoxmejKC3MpMur, but remote key matches 12D3KooWFbbCe63pSrR7zwsx431Y51pjAc4oKTNdjCmAwwHKGjBY
  f0116211: 'fail, China, Weifang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWF79gTgqr7VyLQu74NgBvCTuvDfp2CxGK8hxn2EYKzH6L:  * [/ip4/219.83.163.148/tcp/50666] dial tcp4 219.83.163.148:50666: connect: connection refused
  f0116287: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKeXfkquovviSPS1FLnvmiaoKvCqEJz3gS4jyBMivJSry:  * [/ip4/172.18.5.97/tcp/2347] dial tcp4 0.0.0.0:37529->172.18.5.97:2347: i/o timeout
  f0117146: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ1wxB3gfZJGxydfCyCJzmeP2YJFTysjLfCEHv9PJ6NW9:  * [/ip4/106.12.253.240/tcp/24001] dial tcp4 0.0.0.0:37529->106.12.253.240:24001: i/o timeout
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
  f0118360: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBg6ocTibGty6SpVdWKp4xVGJf1Czwm9yWzpCBRu9xFoy:  * [/ip4/115.236.32.84/tcp/24001] dial tcp4 0.0.0.0:37529->115.236.32.84:24001: i/o timeout
  f0118641: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118769: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118799: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118976: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0119146: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0119545: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0119633: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWC9KSsd16NN33UvF4FTfZHkwwVXnEEvT921B2ZjnfF6JZ:  * [/ip4/183.62.138.7/tcp/12358] dial tcp4 0.0.0.0:37529->183.62.138.7:12358: i/o timeout
  f0119828: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0119976: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0119997: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0120057: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0120702: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0120747: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0120909: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJVJznp7UR73gAUmKDe8TQhRBoGJoS5KrqWxXpPCaQPD5:  * [/ip4/127.0.0.1/tcp/7502] dial tcp4 127.0.0.1:7502: connect: connection refused
  f0121260: 'fail, China, Quinzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHV9RHDQ4d8dj4vg2JfmujiYMytEp1iirMccJtivD6KKU:  * [/ip4/10.3.13.32/tcp/11602] dial tcp4 0.0.0.0:37529->10.3.13.32:11602: i/o timeout  * [/ip4/116.8.132.8/tcp/11602] dial tcp4 0.0.0.0:37529->116.8.132.8:11602: i/o timeout
  f0121533: 'fail, China, Zhejiang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEJgnrAp2twUAS33orbbfTpwVT8YEbmp7CuK7R32aNYca:  * [/ip4/43.240.207.200/tcp/38078] dial tcp4 0.0.0.0:37529->43.240.207.200:38078: i/o timeout
  f0121584: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0121718: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0121810: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122215: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122382: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122496: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122533: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122940: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123245: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123261: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123346: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123522: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGvG3X83ooaeNUA56zywggctVFBzQtKEDRFXHFqawtatK:  * [/ip4/127.0.0.1/tcp/34667] dial tcp4 127.0.0.1:34667: connect: connection refused  * [/ip6/::1/tcp/42423] dial tcp6 [::1]:42423: connect: connection refused  * [/ip4/192.168.1.11/tcp/34667] dial tcp4 0.0.0.0:37529->192.168.1.11:34667: i/o timeout  * [/ip4/42.101.64.10/tcp/34667] dial tcp4 0.0.0.0:37529->42.101.64.10:34667: i/o timeout
  f0123535: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123536: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124036: 'fail, China, Nanchang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHbP5BGxCnHAG7872aZAiwghr4GqnutD2MDPHXmsaSumc:  * [/ip4/117.167.113.98/tcp/1349] dial tcp4 0.0.0.0:37529->117.167.113.98:1349: i/o timeout
  f0124102: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124158: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124696: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124904: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124923: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRqrURiXwsJghCzx4PgoBHKHiRFy28Cr2svcP4gxm6cLh:  * [/ip4/127.0.0.1/tcp/40573] dial tcp4 127.0.0.1:40573: connect: connection refused
  f0124944: 'fail, China, Henan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0125488: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126097: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126478: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126698: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126702: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126898: 'fail, China, Harbin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127378: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127382: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
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
  f0127980: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128011: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128381: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128559: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128761: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128788: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAiUNWKkXUzaUVGk68oa2QwVoLA9CD16giz3wFyRm7mWD:  * [/ip4/47.107.99.121/tcp/58418] dial tcp4 0.0.0.0:37529->47.107.99.121:58418: i/o timeout
  f0128815: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128931: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129226: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129403: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129422: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129750: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129805: 'fail, China, Zhejiang + Australia, Adelaide', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130094: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130134: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130556: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130639: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNwGHbLSbd9tsAsQxBLV48yzNXLZ2xfqWmAwrHASFMA1C:  * [/ip4/155.69.203.4/tcp/39786] dial tcp4 0.0.0.0:37529->155.69.203.4:39786: i/o timeout
  f0130686: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130727: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130791: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130884: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130906: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0131331: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0131419: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
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
  f0133501: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMZUakB6bddKkzBtEE5CfPBgWsWok6EP57PxrpBEemdpR:  * [/ip4/172.17.33.105/tcp/10241] dial tcp4 0.0.0.0:37529->172.17.33.105:10241: i/o timeout
  f0133505: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAUV8nhvge9Ldcp3qozUfbwLKURzjb7po13T6FvVv91d6:  * [/ip4/172.18.41.72/tcp/10241] dial tcp4 0.0.0.0:37529->172.18.41.72:10241: i/o timeout
  f0133509: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133689: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133763: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133833: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133957: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE5zYu19hGLiJjgLTQrQitryUMPn6HrGQKdbR9z1ALHTU:  * [/ip4/8.209.65.6/tcp/30127] dial tcp4 0.0.0.0:37529->8.209.65.6:30127: i/o timeout
  f0133999: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDSwueNGHXZs51NoT4zqFUR4dEdotz7udxs6vDqJ8fMsv:  * [/ip4/113.219.201.172/tcp/24001] dial tcp4 0.0.0.0:37529->113.219.201.172:24001: i/o timeout
  f0134006: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRLr5Efqy61nSerZXi5aorAL28qLDVphNovoYSgvpgm7t:  * [/ip4/10.140.8.12/tcp/32759] dial tcp4 0.0.0.0:37529->10.140.8.12:32759: i/o timeout
  f0134285: "fail, China, Ya'an + USA", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134552: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134609: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134778: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134867: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
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
  f0135859: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKtd5tncATexfW4o26F6qmFY7h7HofiT4Lr5mh917preS:  * [/ip4/172.18.42.16/tcp/10241] dial tcp4 0.0.0.0:37529->172.18.42.16:10241: i/o timeout
  f0135885: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135934: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPLRnXteZBYmEHZDrRB1jvXZHFsxdsphvj2rVWYpRUVGN:  * [/ip4/183.60.119.108/tcp/39695] dial tcp4 0.0.0.0:37529->183.60.119.108:39695: i/o timeout
  f0136033: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136138: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136239: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136399: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136642: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMbLX1KrFYEZYXDZLvpgRZ7HEGk8VAxb91Y7aaBo2N7GP:  * [/ip6/::1/tcp/43239] dial tcp6 [::1]:43239: connect: connection refused  * [/ip4/127.0.0.1/tcp/43105] dial tcp4 127.0.0.1:43105: connect: connection refused  * [/ip4/42.123.105.130/tcp/43105] dial tcp4 42.123.105.130:43105: connect: connection refused  * [/ip4/10.16.0.207/tcp/43105] dial tcp4 0.0.0.0:37529->10.16.0.207:43105: i/o timeout
  f0136668: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136810: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136811: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPMAZUoGWrU8hScHuCPXYKiahMLykzK81QRYURtw8XcAL:  * [/ip4/192.188.172.31/tcp/4356] dial tcp4 0.0.0.0:37529->192.188.172.31:4356: i/o timeout
  f0136868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0137019: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0137594: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0137868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0141634: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0141761: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0141762: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142059: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142135: "fail, China, Ya'an + USA", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142238: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142245: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142281: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142337: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142720: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142721: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRNMX4yLhzapt7oA7XWZGqzsdotaBejZK9BUE31TvwFWp:  * [/ip4/10.4.104.74/tcp/12288] dial tcp4 0.0.0.0:37529->10.4.104.74:12288: i/o timeout
  f0142723: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMk6kxfLyGqk1wbTkyMbawiuQX897XCcFu6Pc7Br6chsV:  * [/ip4/10.4.104.75/tcp/12288] dial tcp4 0.0.0.0:37529->10.4.104.75:12288: i/o timeout
  f0143032: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143110: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143160: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143162: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143332: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143361: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143500: 'fail, China, Zhejiang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143511: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143907: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143928: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144069: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144194: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144313: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJJJ9xaFPRcHtNkSdzSCCGSCFeYDvR3gQe1v1c9gMxie6:  * [/ip4/10.5.101.90/tcp/12288] dial tcp4 0.0.0.0:37529->10.5.101.90:12288: i/o timeout  * [/ip4/106.74.20.7/tcp/12288] dial tcp4 0.0.0.0:37529->106.74.20.7:12288: i/o timeout
  f0144314: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144316: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144528: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144530: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144618: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144724: 'fail, USA, Los Angeles', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQG8mBpQNBfK8sLeJ71Di4n7hwKfW6UHxXXEW3sZZPgiC:  * [/ip4/209.170.228.251/tcp/24001] dial tcp4 0.0.0.0:37529->209.170.228.251:24001: i/o timeout
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
  f0146393: 'fail, China, Foshan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPBraDH4aCJTMCjaZ1JBe7nDCJUioSHtkJZ6VWseSumiQ:  * [/ip4/183.2.233.3/tcp/24501] dial tcp4 0.0.0.0:37529->183.2.233.3:24501: i/o timeout
  f0146428: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJqyLnffd3YFB2NrsTw2Y6Rzj869YfmN18GPQbEtBYeTh:  * [/ip4/172.16.2.105/tcp/6789] dial tcp4 0.0.0.0:37529->172.16.2.105:6789: i/o timeout
  f0146956: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147119: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147214: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147586: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147657: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147801: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148143: 'fail, China, Tianjin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148151: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148269: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148452: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148494: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148627: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0149132: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPioc5NM47gU8ebn5wZtE7AJeF7Rj6mpvEXerjru9FJiX:  * [/ip4/43.254.106.6/tcp/63345] dial tcp4 0.0.0.0:37529->43.254.106.6:63345: i/o timeout
  f0149455: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0149753: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0149937: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150744: 'fail, Korea, Ulsan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFQaZfLj9xLZfKqo5h8PDT4qq5aeLXEzrNjqqFQLYfYuA:  * [/ip4/61.77.31.17/tcp/25246] dial tcp4 0.0.0.0:37529->61.77.31.17:25246: i/o timeout
  f0150748: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150816: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150860: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150918: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151034: 'fail, USA, Syracuse', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLUJ6TpQtKAv4zetj6978PF5kGuhs6M83YpFCWZJuEFs3:  * [/ip4/98.33.182.73/tcp/24001] dial tcp4 0.0.0.0:37529->98.33.182.73:24001: i/o timeout
  f0151371: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151706: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151849: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151993: 'fail, Korea, Icheon-si', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152134: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152224: 'fail, Korea, Yongdu-dong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCK7MaA1gu9kV3s3hTbzmxvTCFmhavUorXi5KQYvN6F72:  * [/ip4/183.98.244.90/tcp/24001] dial tcp4 0.0.0.0:37529->183.98.244.90:24001: i/o timeout
  f0152337: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLWmfzgTnvSRefqqpyTCeHekCHZr4f4U1oKA1XoMkSkLV:  * [/ip4/47.252.15.25/tcp/55244] dial tcp4 0.0.0.0:37529->47.252.15.25:55244: i/o timeout
  f0152351: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152799: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152854: 'fail, China, Huizhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHb2DL5mWy415vMg6Rg8F9RsFxtKiZhExCX4ZsKTUdBs5:  * [/ip4/121.11.216.116/tcp/23450] dial tcp4 0.0.0.0:37529->121.11.216.116:23450: i/o timeout
  f0152866: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152943: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWH6FnjgZgL3KDmXEC6Nvefbg61eKi557RE3dKKtquvwmg:  * [/ip4/58.57.65.84/tcp/5502] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWH6FnjgZgL3KDmXEC6Nvefbg61eKi557RE3dKKtquvwmg, but remote key matches 12D3KooWLyd5E2qvBjiX5Y53q8SSw7C3adMxWBcrEuPAa15PKy5o
  f0153024: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153040: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153078: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153188: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153565: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153583: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153775: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153804: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRYzvW7FieB4gDbRJMU9FRbFd3R6An7FtVBhcaK59mT2g:  * [/ip4/218.13.93.62/tcp/5502] dial tcp4 0.0.0.0:37529->218.13.93.62:5502: i/o timeout
  f0153930: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153932: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153960: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153986: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG4ngcStum65vCcnjVLEzHziUTdtNcAR4EvXu8QhBGR1H:  * [/ip4/127.0.0.1/tcp/7503] dial tcp4 127.0.0.1:7503: connect: connection refused
  f0154039: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWT2SDwTt1xZJ3xPuexFik1aWUDF32PNsegSD9DZXqU4Qx:  * [/ip4/103.122.95.117/tcp/32718] dial tcp4 103.122.95.117:32718: connect: connection refused  * [/ip4/10.2.6.233/tcp/32718] dial tcp4 0.0.0.0:37529->10.2.6.233:32718: i/o timeout
  f0154152: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154238: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154294: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154597: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154865: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155049: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155050: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155258: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155467: 'fail, Korea, Seongnam-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEcdiiWz7XoUPX8mV1CwWXUWVQrgfbnAAnupw47itSuFA:  * [/ip4/221.163.91.180/tcp/14231] dial tcp4 0.0.0.0:37529->221.163.91.180:14231: i/o timeout
  f0155687: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155829: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155983: 'fail, Japan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCiSxAQf3Hp6t1sFJdRotppHwUUBa6jQaA1bcJd4YEbJ1:  * [/ip4/202.149.23.10/tcp/5472] dial tcp4 0.0.0.0:37529->202.149.23.10:5472: i/o timeout
  f0156214: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0156333: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0156342: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0156417: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0156452: 'fail, Korea, Ulsan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157025: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157316: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157502: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157513: 'fail, Korea, Geumcheon-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWM3h6YYYmmgzgiCfafqmna3mmGpqYDakjgDJvhztAWnX2:  * [/ip4/14.36.171.106/tcp/24000] dial tcp4 0.0.0.0:37529->14.36.171.106:24000: i/o timeout
  f0157769: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157917: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157979: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157991: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158000: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158068: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158133: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHw1ytuA6ia2c2wQ7NAmSm7vStuTgeDhhKCpL7t4bY3da:  * [/ip4/10.33.1.17/tcp/6789] dial tcp4 0.0.0.0:37529->10.33.1.17:6789: i/o timeout
  f0158142: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158265: 'fail, China, Hefei', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158276: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158613: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158728: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158950: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD8JCzWuU8HHwkUmYb1hHWyvAK1j1UqGJ4MgATVjZ855D:  * [/ip4/127.0.0.1/tcp/33575] dial tcp4 127.0.0.1:33575: connect: connection refused  * [/ip6/::1/tcp/37517] dial tcp6 [::1]:37517: connect: connection refused  * [/ip4/61.147.97.84/tcp/33575] dial tcp4 61.147.97.84:33575: connect: no route to host
  f0159067: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159333: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159449: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159517: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159632: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDPAdiHZY2J46XsioY41wEghorpiaJxjGFiR7Sru6B7pk:  * [/ip4/10.140.8.11/tcp/32759] dial tcp4 0.0.0.0:37529->10.140.8.11:32759: i/o timeout
  f0159649: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCYcjjwbrr61ZwHnzemLw48gni9CZTQdnLRHzC5ZzL2ya:  * [/ip4/58.144.223.133/tcp/2347] dial tcp4 0.0.0.0:37529->58.144.223.133:2347: i/o timeout
  f0159654: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159660: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159689: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159883: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKkHESE49gxVjwHSP1Pk5tXFGfAv8LuzDakUZd42SViFU:  * [/ip4/10.133.9.111/tcp/32759] dial tcp4 0.0.0.0:37529->10.133.9.111:32759: i/o timeout
  f0160135: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0160137: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKPdM5fFL1Wcx3Z9PWmPAjZvDii93SZk5FGcfanogC8dk:  * [/ip4/61.240.206.152/tcp/50666] dial tcp4 0.0.0.0:37529->61.240.206.152:50666: i/o timeout
  f0160735: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0160819: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0160870: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0161468: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0161542: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWL7DWiea5SD2LDDB4wgzgYyicvMqbYhr9FGy1NmFjRbzP:  * [/ip4/10.10.8.50/tcp/8124] dial tcp4 0.0.0.0:37529->10.10.8.50:8124: i/o timeout
  f0161819: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0161916: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNepasPf214kWmhHRTUS3GGcSgg2HzJBS2gWrnWVwdpse:  * [/ip4/61.147.97.82/tcp/55556] dial tcp4 0.0.0.0:37529->61.147.97.82:55556: i/o timeout
  f0163275: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0164260: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0165111: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0165135: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0165539: 'fail, Japan, Yokohama', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGLS1RBCL8L3qPao2g3EqajSm2KHxbuafXSz6B91feaZ5:  * [/ip4/114.146.72.131/tcp/60000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGLS1RBCL8L3qPao2g3EqajSm2KHxbuafXSz6B91feaZ5, but remote key matches 12D3KooWH6QHPTUyo6F4mrFGYSnHiJmAUuWKQmnfzxp3SJASPq69
  f0165643: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166327: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166425: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166512: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166843: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166896: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0167137: 'fail, China, Shaoxing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBNZWmyu93EsfFKRWaunU1ykXxK1ontQcjY5nvEh29kvs:  * [/ip4/115.239.191.45/tcp/24002] dial tcp4 0.0.0.0:37529->115.239.191.45:24002: i/o timeout
  f0167505: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJrbRQ3X5R2hUbvvUcGe5QbY6jpHigd9wPiH1PTMnaQkD:  * [/ip4/10.10.8.90/tcp/7002] dial tcp4 0.0.0.0:37529->10.10.8.90:7002: i/o timeout
  f0168058: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMM38722xUgBthsFgQBF8s2HuokVbV5R1jWgQbGrDjmTr:  * [/ip4/58.211.213.210/tcp/22122] dial tcp4 58.211.213.210:22122: connect: connection refused
  f0168537: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0169053: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0169097: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0179096: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0199223: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFnLArFiK8JWmiChXEutsTd1tGw8t5ZNciuST8FNDQ85j:  * [/ip4/110.188.25.20/tcp/24001] dial tcp4 0.0.0.0:37529->110.188.25.20:24001: i/o timeout
  f0207949: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0214334: 'fail, Korea, Namyangju', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMTJby3NrMd9HYpg9rAtW6d6KkryiVxptb6U8EeSzqZNQ:  * [/ip4/192.168.100.203/tcp/24001] dial tcp4 0.0.0.0:37529->192.168.100.203:24001: i/o timeout
  f0215704: 'fail, Korea, Icheon-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBaGEjAm39dpTYrdaSpWs87HbKrEs6eTmR1b8hPQKH4AZ:  * [/ip4/210.97.12.181/tcp/21406] dial tcp4 0.0.0.0:37529->210.97.12.181:21406: i/o timeout
  f0216463: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0216822: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0216849: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0217419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0217771: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJibSxo5yq7eoAH3vvKuhvrEkVxaBK28DChqjhEtJ2CwV:  * [/ip4/103.44.253.105/tcp/12358] dial tcp4 0.0.0.0:37529->103.44.253.105:12358: i/o timeout
  f0217789: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0218072: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0218092: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0218559: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSa11PfrsyKqW7wZUBXfuK9r6d2xjeeD81Be1EnzPntiz:  * [/ip4/58.144.223.135/tcp/2347] dial tcp4 58.144.223.135:2347: connect: connection refused
  f0219106: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0220156: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0220632: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLjQi9QxS9jDSPZUS5vJMwRBZpyNBG9B9eXSqsoZQuuYX:  * [/ip4/103.127.248.197/tcp/10002] dial tcp4 0.0.0.0:37529->103.127.248.197:10002: i/o timeout
  f0220827: 'fail, Netherlands, Heerhugowaard', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQQN1Lp7rVn8dLrRc6YdfXWztij6qfQrBUVBcEGvv4tni:  * [/ip4/86.94.103.171/tcp/31261] dial tcp4 0.0.0.0:37529->86.94.103.171:31261: i/o timeout
  f0222611: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0222674: 'fail, China, Quinzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0222811: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0222947: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223033: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223101: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223102: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223103: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223104: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223106: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223316: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223933: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDF8wWxUW1WU7L2yPEBYZ3d4bYCn3qCaMtYduoPa2rhCS:  * [/ip4/113.29.246.214/tcp/18375] dial tcp4 0.0.0.0:37529->113.29.246.214:18375: i/o timeout
  f0224894: 'fail, China, Qingdao', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0224984: 'fail, China, Wuhan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0225058: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCbttGH78TASNgpvjsXABjvwCUkWtRqpGKxFDF5yWVNo8:  * [/ip4/103.127.248.197/tcp/10001] dial tcp4 0.0.0.0:37529->103.127.248.197:10001: i/o timeout
  f0225285: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0226303: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0226324: 'fail, China, Guangxi', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGH1XbsK5RseKDJn2FxRXL4Dq7rUKMjdwvhHp3ftyG5dA:  * [/ip4/118.190.151.50/tcp/56173] failed to negotiate security protocol: read tcp4 144.217.11.204:37529->118.190.151.50:56173: read: connection reset by peer
  f0226418: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0226520: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0228232: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEZAh3WfxSFS6trQZYHHU8N8HdJPZhvMYBo281yhTDwQA:  * [/ip4/183.204.60.235/tcp/16017] dial tcp4 0.0.0.0:37529->183.204.60.235:16017: i/o timeout
  f0228575: 'fail, Canada, Calgary', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD8t9XKQjJTCaj8R4B1cXwPHTBpgEkon2ZgssW32r8U63:  * [/ip4/68.145.252.94/tcp/24001] dial tcp4 0.0.0.0:37529->68.145.252.94:24001: i/o timeout
  f0228712: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFjEiHsaEaKHxWNHVPidrzrmrywFqpdrmBAosz9M2yvmH:  * [/ip4/10.10.16.8/tcp/7101] dial tcp4 0.0.0.0:37529->10.10.16.8:7101: i/o timeout
  f0229199: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0229437: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0230200: 'fail, Korea, Gwanak-gu, G-mining', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAqVoLFYKyjXJjR296i3ZzaUxnXu5j7NH3gKFf3kvQDcd:  * [/ip4/125.141.76.228/tcp/36849] dial tcp4 0.0.0.0:37529->125.141.76.228:36849: i/o timeout
  f0230449: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0230799: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0230861: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0231112: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSVBeGTDfyqY3rS8RBhnusdikSLyEPfrkBkoEhLUWgY1Z:  * [/ip4/112.194.96.134/tcp/24001] dial tcp4 0.0.0.0:37529->112.194.96.134:24001: i/o timeout
  f0231481: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0231782: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0232459: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0234567: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0238968: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJoPFqs5gRdk4fiSGJ7v7WaLKqQikHCDDbQ6X62wi9Nmv:  * [/ip4/10.133.14.32/tcp/32759] dial tcp4 0.0.0.0:37529->10.133.14.32:32759: i/o timeout
  f0239678: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0239688: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0240035: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPZSFGhykg4TBEpKa5LBMNwzmkE8iWLHoR2kCzgQuAhC9:  * [/ip4/115.236.46.164/tcp/20004] dial tcp4 0.0.0.0:37529->115.236.46.164:20004: i/o timeout
  f0240392: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0240456: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0241536: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0241764: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNRaChpBfwTuRrJp9Af6yCvGr5JQSn1733NJQshWFLpej:  * [/ip4/182.131.4.195/tcp/32800] dial tcp4 182.131.4.195:32800: connect: connection refused
  f0241858: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJSvDxbJwLug8oodE1ey4GqNTVxyx6eK4hrxc1Z78vsCj:  * [/ip4/220.176.125.200/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.200:23450: i/o timeout
  f0242156: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0242373: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0242420: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0349810: 'fail, China, Qinzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0364957: 'fail, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRzCU4vUyiNWA82ks3fZGK3CBB8yGTwij5Z26cqMkRqcK:  * [/ip4/47.108.169.79/tcp/13794] failed to negotiate security protocol: read tcp4 144.217.11.204:37529->47.108.169.79:13794: read: connection reset by peer
  f0377277: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391143: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMMEWd6nAbwY115mRLnZorJ8LftCjxLQvCtGmiSEHpuRN:  * [/ip4/47.119.133.19/tcp/43812] failed to negotiate security protocol: read tcp4 144.217.11.204:37529->47.119.133.19:43812: read: connection reset by peer
  f0391214: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391235: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391381: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391439: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392194: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392430: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392458: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392488: 'fail, Indonesia, Medan + China, Shenyang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392799: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR7WJ7MStK5W1vv7eEVxuzCYdUHZfoARfBVwogkszfteE:  * [/ip4/172.16.35.3/tcp/6789] dial tcp4 0.0.0.0:37529->172.16.35.3:6789: i/o timeout
  f0392813: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKQa9PSaH2wWh1e8SVvDNtCVrcL1nSVWeE582bmDETeku:  * [/ip4/172.16.35.25/tcp/6789] dial tcp4 0.0.0.0:37529->172.16.35.25:6789: i/o timeout
  f0392924: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392959: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392980: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392992: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGmQYeDiZRhAMBdmV36spYQGYLbzA11dsHYz2eXkj93Em:  * [/ip4/10.34.1.4/tcp/6789] dial tcp4 0.0.0.0:37529->10.34.1.4:6789: i/o timeout
  f0393016: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLGRUEmvdGKCi9AkHN4UbhRiubs9p1hrNCWMbyNEZNHBg:  * [/ip4/34.66.95.149/tcp/1024] dial tcp4 0.0.0.0:37529->34.66.95.149:1024: i/o timeout
  f0393119: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNnobNqKiP2pSc5fA1c9BuR9G1kwPayN51ixrHeovVnWv:  * [/ip4/172.16.35.5/tcp/6789] dial tcp4 0.0.0.0:37529->172.16.35.5:6789: i/o timeout
  f0393135: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0393417: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0394102: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0395680: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0395994: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMZxD2PTPeCX3Fe1TP9nyaN4iNeFHZErGVjmDTRLnd1HJ:  * [/ip4/211.47.48.42/tcp/16985] failed to negotiate security protocol: message did not have trailing newline
  f0396149: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396217: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSCSnQDARQD9zKiPbiyAyPn7pQaUwud3xhbrK4RhkL8de:  * [/ip4/54.238.182.234/tcp/3078] dial tcp4 0.0.0.0:37529->54.238.182.234:3078: i/o timeout
  f0396422: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396452: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396473: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396705: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396846: 'fail, China, Zhongshan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJLaZCfWGiuPKvkjmpgqegkHreQfLGeBjHfcC3ScYiZWA:  * [/ip4/116.6.131.194/tcp/24001] dial tcp4 116.6.131.194:24001: connect: connection refused
  f0397332: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0397561: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0397728: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0397794: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0397837: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEratU2MQneMbEAL9o8kdXcRxM5RyQpU5wPsivnmJUVFa:  * [/ip4/220.176.125.252/tcp/23450] dial tcp4 0.0.0.0:37529->220.176.125.252:23450: i/o timeout
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
  f0399610: 'fail, Ukraine', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKsV4rQVD5wmMrWWhVA44iSPc2rmGViqtFhGv5N8q4MbE:  * [/ip4/94.131.250.53/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKsV4rQVD5wmMrWWhVA44iSPc2rmGViqtFhGv5N8q4MbE, but remote key matches 12D3KooWQMnCFSinoPAtEGwqus3sAeuftqqPkfvDG52mK1y6Raed
  f0399743: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399760: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399765: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399814: "fail, China, Ya'an", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399996: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0400264: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0400307: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWN3wNopyr2kSic3t6TaAPAsRGF9FU5jdeGDzKDmX1qH1Y:  * [/ip4/101.227.175.10/tcp/31347] dial tcp4 0.0.0.0:37529->101.227.175.10:31347: i/o timeout
  f0400644: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAMNqwTdF1DVBzcyUZbbVSa1naQrfokLLX9SfYmJttvqv:  * [/ip4/10.16.0.214/tcp/51215] dial tcp4 0.0.0.0:37529->10.16.0.214:51215: i/o timeout
  f0401287: 'fail, China, Yibin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0401303: 'fail, Korea, Ulju-gun', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMbHNJKH4BFKQdgmN92sqHbGGvng2sEkemAQBV2K9qppE:  * [/ip4/59.28.91.46/tcp/24001] dial tcp4 0.0.0.0:37529->59.28.91.46:24001: i/o timeout
  f0402233: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0402431: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0402661: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0402822: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0403050: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKkDs915aDV9mNBff9xDhQBfWSbFzsBSwwF1yQ3yS39ow:  * [/ip4/119.6.229.70/tcp/42555] dial tcp4 0.0.0.0:37529->119.6.229.70:42555: i/o timeout
  f0403529: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0404193: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0404643: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0406475: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0407244: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0407287: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0407410: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0407733: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMfqyyWZPU7rfHcz34FtBJbZgWWHQayBPmSQNUugJcEB3:  * [/ip4/172.18.41.11/tcp/10241] dial tcp4 0.0.0.0:37529->172.18.41.11:10241: i/o timeout
  f0408205: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408206: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408208: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408582: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408629: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408688: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408833: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0409069: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNWZUFEbG5op5rVqYwkJn1utWZ3wVeGtc6VDCoRcwSsLu:  * [/ip4/103.122.95.109/tcp/35228] dial tcp4 103.122.95.109:35228: connect: connection refused  * [/ip4/10.2.6.207/tcp/35228] dial tcp4 0.0.0.0:37529->10.2.6.207:35228: i/o timeout
  f0409172: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEdvErGEyk7iwpMnJdJkWhBXjVSqKX8WgNHTWasbiwsiQ:  * [/ip4/172.20.100.36/tcp/10241] dial tcp4 0.0.0.0:37529->172.20.100.36:10241: i/o timeout
  f0409272: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0409399: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0409499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0409600: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410120: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410180: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410242: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410319: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410431: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410701: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNsubjkoMmwsoFMPmLWtoXagozH1cUitiBQwDxVPPssUw:  * [/ip4/127.0.0.1/tcp/36549] dial tcp4 127.0.0.1:36549: connect: connection refused  * [/ip6/::1/tcp/38097] dial tcp6 [::1]:38097: connect: connection refused  * [/ip4/10.1.31.20/tcp/36549] dial tcp4 0.0.0.0:37529->10.1.31.20:36549: i/o timeout  * [/ip4/61.240.222.46/tcp/36549] dial tcp4 0.0.0.0:37529->61.240.222.46:36549: i/o timeout
  f0410941: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0411314: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0411877: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0413050: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0413323: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0413419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0413456: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0413684: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0413801: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0414383: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0417133: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0417720: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0417750: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0418086: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFGTqMpcjy14nFbFH4fcFkWE9uRPn2eRFUa9fxVWmWx2F:  * [/ip4/10.155.8.31/tcp/32759] dial tcp4 0.0.0.0:37529->10.155.8.31:32759: i/o timeout
  f0418632: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKAQYHwxMxp4MLjw2HNuFubWkgZuyThx1PGoF2pbzDPUD:  * [/ip4/103.94.227.210/tcp/16001] dial tcp4 103.94.227.210:16001: connect: connection refused
  f0418652: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419311: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419331: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419414: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419510: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419662: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419804: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419944: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419945: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBzsbHafdeXwkHyjRSapH5gQvgCVGmFT9auBsBgyC1KSM:  * [/ip4/115.236.22.226/tcp/24001] dial tcp4 0.0.0.0:37529->115.236.22.226:24001: i/o timeout
  f0420189: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0420508: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0421387: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0421392: 'fail, China, Foshan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0421858: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0422229: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCYfkYFtixmn7s7gaR3yVKm8gaYexWrvdMAgZLqANcCyU:  * [/ip4/127.0.0.1/tcp/44129] dial tcp4 127.0.0.1:44129: connect: connection refused  * [/ip6/::1/tcp/38449] dial tcp6 [::1]:38449: connect: connection refused  * [/ip4/10.16.0.208/tcp/44129] dial tcp4 0.0.0.0:37529->10.16.0.208:44129: i/o timeout
  f0422266: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWP8tpBvBKmmaAyGSL4JGsMNjKh8BCUG5awLwSzhhps3wF:  * [/ip4/10.177.5.31/tcp/32759] dial tcp4 0.0.0.0:37529->10.177.5.31:32759: i/o timeout
  f0422737: 'fail, Korea, Namyangju', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0423050: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0423057: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0423329: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0424761: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0424837: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0425447: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0427688: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0427839: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0427975: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0427989: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0428075: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0428184: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0428306: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0428661: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0429063: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAuYNMj4P9cHtrXJHv66TLyW8UAdvYXriwKiXv3d2cWE9:  * [/ip4/8.209.65.6/tcp/30131] dial tcp4 0.0.0.0:37529->8.209.65.6:30131: i/o timeout
  f0429122: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRbKygHT21v5Ve2pNUwY21r2ssr53CNphbBzhcL8EDS4z:  * [/ip4/172.18.42.22/tcp/10241] dial tcp4 0.0.0.0:37529->172.18.42.22:10241: i/o timeout
  f0430101: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432235: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432329: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432375: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432382: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432570: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432661: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432773: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0433688: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0433892: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0434411: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0435045: 'fail, Korea, Ulju-gun', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNKJwiL93rz9f449nbUCursrdQpuhDE9eba4RnwrxSKnr:  * [/ip4/121.174.254.130/tcp/24001] dial tcp4 0.0.0.0:37529->121.174.254.130:24001: i/o timeout
  f0435140: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0435971: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0436065: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0436661: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0437158: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0440208: 'fail, Netherlands, Amsterdam', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLXeWveTH2Rp7SzaYV1nyfZSdcd1X1iPmsYWFufDSSVLG:  * [/ip4/23.100.45.165/tcp/54320] dial tcp4 0.0.0.0:37529->23.100.45.165:54320: i/o timeout
  f0440919: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNAy2DGpNXDUGmxivaPR6szhr2b5gjecXDZL9TuQso3Wp:  * [/ip6/::1/tcp/43631] dial tcp6 [::1]:43631: connect: connection refused  * [/ip4/127.0.0.1/tcp/37369] dial tcp4 127.0.0.1:37369: connect: connection refused  * [/ip4/10.10.32.7/tcp/37369] dial tcp4 0.0.0.0:37529->10.10.32.7:37369: i/o timeout
  f0441020: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDHPMJfJbZCatbmMY9CsBidkzenr2jtmTtdDpSjS9FuSq:  * [/ip4/127.0.0.1/tcp/39597] dial tcp4 127.0.0.1:39597: connect: connection refused  * [/ip6/::1/tcp/39949] dial tcp6 [::1]:39949: connect: connection refused  * [/ip4/10.16.0.213/tcp/39597] dial tcp4 0.0.0.0:37529->10.16.0.213:39597: i/o timeout
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
  f0442377: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442378: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442383: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKrZ9JYqJZPoHQFeA2iCBkE9ZSq3XZtFFvcKxxKcbJYMZ:  * [/ip4/10.5.101.10/tcp/12288] dial tcp4 0.0.0.0:37529->10.5.101.10:12288: i/o timeout
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
  f0444122: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPnHEtuqzGE1GCSdZTjhhuhZrXHqtvdNk5QfmFRchT3vA:  * [/ip4/86.105.181.238/tcp/11222] dial tcp4 0.0.0.0:37529->86.105.181.238:11222: i/o timeout
  f0447106: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0447181: 'fail, China, Zibo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCM1UhdpqExE5tHFjnw2wnZvrF5M4t7qMsCPdTsvRzSGy:  * [/ip4/218.201.173.82/tcp/24002] dial tcp4 0.0.0.0:37529->218.201.173.82:24002: i/o timeout
  f0447651: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0448660: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0449196: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHhPKPao7CN3wPqnKmaiPUxJjF53KkcxWwdNJNehtEZV3:  * [/ip4/172.18.42.24/tcp/10241] dial tcp4 0.0.0.0:37529->172.18.42.24:10241: i/o timeout
  f0449296: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0450959: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0451341: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0451936: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0452303: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0454186: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0455968: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0457168: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0459325: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0460078: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0460660: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0461612: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0461752: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0461779: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0463030: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0463184: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0464884: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0465286: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0465477: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0465677: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0465993: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0466426: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0466990: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0467640: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0467809: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0468210: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0468966: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0469055: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHVZjfo4M3z3vnBBVcEz4kRhVn715FAML2by1wpxGpUTr:  * [/ip4/154.91.39.84/tcp/12350] dial tcp4 154.91.39.84:12350: connect: connection refused
  f0469578: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0469959: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0470182: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0470608: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0470972: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWB29ZFfhwUfiFkd8Nr2VNLZMGvSZYbKoQmjBbo4PJU5Ky:  * [/ip4/113.31.97.18/tcp/28881] dial tcp4 0.0.0.0:37529->113.31.97.18:28881: i/o timeout
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
  f0479677: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0480313: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0480936: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0480944: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0481938: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0482494: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0483206: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0484990: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0486952: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0487097: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0487098: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0488215: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0488733: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0488851: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0490501: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0491919: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0492009: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0492360: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE4wo5y4tNUF7KCBTMEWHYYewyrhHgzeGd3XhHJt8HrJk:  * [/ip4/103.100.62.152/tcp/51702] dial tcp4 0.0.0.0:37529->103.100.62.152:51702: i/o timeout
  f0492474: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0492601: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0492737: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0493237: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0494268: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0494603: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0494733: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0496068: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0496897: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0497031: 'fail, China, Shangrao', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0497254: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0497636: 'fail, China, Harbin', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEwmdbv9vkcdMHk2mw621fKY9V1Ve3L425RwBwmNpyK2h:  * [/ip4/123.166.135.30/tcp/26635] dial tcp4 0.0.0.0:37529->123.166.135.30:26635: i/o timeout
  f0497771: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0500003: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCxMBTFpaCNQGemjRU1opqKaXCyk8YBicQX5Bv3tBMrJs:  * [/ip4/10.0.99.106/tcp/1024] dial tcp4 0.0.0.0:37529->10.0.99.106:1024: i/o timeout
  f0500685: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0501662: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0502198: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0503010: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0503287: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0503420: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0503494: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0504097: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0504929: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0504985: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0505001: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0505110: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0506630: 'fail, China, Linyi', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAbKEcHLWGs66jR818bSxuZTpCabn1ecF2s4u3kUy8bJr:  * [/ip4/222.174.187.42/tcp/20111] dial tcp4 222.174.187.42:20111: connect: connection refused
  f0506800: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0507913: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0508328: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRYNizkRTsja2Jn6Gssv4gkoc9yB32vpn5K7tMTFXZhvA:  * [/ip4/8.209.65.6/tcp/30132] dial tcp4 0.0.0.0:37529->8.209.65.6:30132: i/o timeout
  f0508622: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0509980: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0509981: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0510701: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0510957: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0511070: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0511318: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0511385: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0512066: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0512170: 'fail, Korea, Bucheon-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMNGQAhd5nPA4RQbX5wBxnTiCHKf7CXcm85fewmx6fnR8:  * [/ip4/211.192.248.217/tcp/34001] dial tcp4 0.0.0.0:37529->211.192.248.217:34001: i/o timeout
  f0512179: 'fail, Korea, Bucheon-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBBcrU2hF14VhZ5AsnuL9ZeEwgnXeYFkVyefzfApz5PJ3:  * [/ip4/211.192.248.211/tcp/34001] dial tcp4 0.0.0.0:37529->211.192.248.211:34001: i/o timeout
  f0512693: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0513685: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0514000: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0514235: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0514241: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGAGSr5AhezoqmJgVyji8jHaCGg4iMvrUwbo9mTH7qjRG:  * [/ip4/210.126.6.13/tcp/55037] failed to negotiate security protocol: read tcp4 144.217.11.204:37529->210.126.6.13:55037: read: connection reset by peer
  f0515264: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0515360: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0515389: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0515461: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0515626: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRXsoLv5SA7YhLdgMbL3L45tQnkMnfkmWdLnfLnDrG4dr:  * [/ip4/10.155.8.115/tcp/32759] dial tcp4 0.0.0.0:37529->10.155.8.115:32759: i/o timeout
  f0515674: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0517655: 'fail, Korea, Gwangju', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFJm5NeNhiQL4htxCSBKsgB7uS3TZ2dZff5YNeQ1n6uFy:  * [/ip4/121.179.79.12/tcp/55000] failed to negotiate security protocol: read tcp4 144.217.11.204:37529->121.179.79.12:55000: read: connection reset by peer
  f0518668: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0518713: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0519331: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDpePCiVqoTaGqjT5qKZg3SbCFsUDZUuZmmQYzMHLkaRn:  * [/ip6/::1/tcp/45893] dial tcp6 [::1]:45893: connect: connection refused  * [/ip4/127.0.0.1/tcp/35407] dial tcp4 127.0.0.1:35407: connect: connection refused  * [/ip4/192.168.143.198/tcp/35407] dial tcp4 0.0.0.0:37529->192.168.143.198:35407: i/o timeout  * [/ip4/10.80.63.1/tcp/35407] dial tcp4 0.0.0.0:37529->10.80.63.1:35407: i/o timeout  * [/ip4/113.219.198.17/tcp/35407] dial tcp4 0.0.0.0:37529->113.219.198.17:35407: i/o timeout
  f0519333: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0519376: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0519513: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520262: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520333: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520345: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520500: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520520: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520521: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520555: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520688: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0521273: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0521499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0521508: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0521569: 'fail, Korea, Guro-go', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLhLCx5bCRGyWh1SZex48DD39VNhj3XrWp6S9kC83xZ9q:  * [/ip4/222.112.183.195/tcp/24001] dial tcp4 0.0.0.0:37529->222.112.183.195:24001: i/o timeout
  f0521831: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNZ76nZoEzZ553TBsMcWMkqcsX5fnkqjK29ZkKH7ysbYV:  * [/ip4/127.0.0.1/tcp/45449] dial tcp4 127.0.0.1:45449: connect: connection refused  * [/ip6/::1/tcp/46647] dial tcp6 [::1]:46647: connect: connection refused  * [/ip4/10.0.0.14/tcp/45449] dial tcp4 0.0.0.0:37529->10.0.0.14:45449: i/o timeout  * [/ip4/120.233.151.3/tcp/45449] dial tcp4 0.0.0.0:37529->120.233.151.3:45449: i/o timeout
  f0521884: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0522948: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0523396: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0523415: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0523711: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0524539: 'fail, Korea, Suwon', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA4s94NLCP2hH1WACPs3mEvTNevq19DV4FXYxgiUBM4RY:  * [/ip4/183.99.217.122/tcp/27102] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWA4s94NLCP2hH1WACPs3mEvTNevq19DV4FXYxgiUBM4RY, but remote key matches 12D3KooWHq6qXDEjPnQgMTmkA2C9pEijfRw92SUfPZAjtC2jMnr6
  f0536177: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0592088: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0601583: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0602011: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0646439: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0652413: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0652414: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0663311: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNv6AAQ1z8Lp64yLpk9xadQc6J9DTrzGT9GcUC9HeTXf8:  * [/ip4/113.219.198.24/tcp/4913] dial tcp4 0.0.0.0:37529->113.219.198.24:4913: i/o timeout
  f0665666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0666315: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0669999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0670491: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0670902: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0671368: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWH4KKTpnVwdjoDjTJXm1gbhEQR8gDAquR3QNhRcxjUrFN:  * [/ip6/::1/tcp/41445] dial tcp6 [::1]:41445: connect: connection refused  * [/ip4/127.0.0.1/tcp/39409] dial tcp4 127.0.0.1:39409: connect: connection refused  * [/ip4/192.168.3.101/tcp/39409] dial tcp4 0.0.0.0:37529->192.168.3.101:39409: i/o timeout  * [/ip4/154.91.39.105/tcp/2056] dial tcp4 0.0.0.0:37529->154.91.39.105:2056: i/o timeout  * [/ip4/154.91.39.105/tcp/2341] dial tcp4 0.0.0.0:37529->154.91.39.105:2341: i/o timeout
  f0671982: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0672951: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0673920: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNqsbphQowDfnYtKjp1qv2HH4AYs7m8uQfFt2RegLJx5X:  * [/ip4/8.209.65.6/tcp/30133] dial tcp4 0.0.0.0:37529->8.209.65.6:30133: i/o timeout
  f0673990: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0674600: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0674756: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0674889: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0675287: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0675459: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0675675: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0675909: 'fail, Korea, Seocho-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRZMAq8xstSa4ePoinALtQ3nTP4Fa1Anj5GVCqmm74j4v:  * [/ip4/172.30.1.28/tcp/34001] dial tcp4 0.0.0.0:37529->172.30.1.28:34001: i/o timeout
  f0676183: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0676272: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0678781: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0679376: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0680529: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLPu87KQ1m3UKKiKHkdvYbrrWAgaKSif1mkxCX4bkW7o6:  * [/ip4/172.18.42.15/tcp/10241] dial tcp4 0.0.0.0:37529->172.18.42.15:10241: i/o timeout
  f0680677: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0680929: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0680977: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0681063: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0681068: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0682032: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSBp35iwToBkDFKcBjtafn2QbyabmA7ysVVcpNwLqnX9U:  * [/ip4/103.39.230.113/tcp/51105] dial tcp4 0.0.0.0:37529->103.39.230.113:51105: i/o timeout
  f0683965: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0684618: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685007: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWC8Havej4dkNd27mpqj3JJZbcExkswpXvxt6dK8U172So:  * [/ip4/118.191.0.109/tcp/23458] dial tcp4 0.0.0.0:37529->118.191.0.109:23458: i/o timeout
  f0685231: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685539: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685706: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685829: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0686816: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0687211: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0688165: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0688935: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAEFe1BmCxbx28JqozMfRF5qNHpiMfq6PPn1VFrBGb9rJ:  * [/ip4/115.231.84.99/tcp/6698] dial tcp4 0.0.0.0:37529->115.231.84.99:6698: i/o timeout
  f0689917: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBHVQfvMW1G4pntHVScD1RGYJZ72EmhJpob71hDUQJTZF:  * [/ip4/218.186.29.53/tcp/24001] dial tcp4 0.0.0.0:37529->218.186.29.53:24001: i/o timeout
  f0690699: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0690736: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0690779: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0691310: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0693008: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDod3XA7NN2NpaJghywvW9wpjoZZREVtwDwnTTDF26f9K:  * [/ip4/127.0.0.1/tcp/44937] dial tcp4 127.0.0.1:44937: connect: connection refused  * [/ip6/::1/tcp/38295] dial tcp6 [::1]:38295: connect: connection refused  * [/ip4/10.10.67.90/tcp/44937] dial tcp4 0.0.0.0:37529->10.10.67.90:44937: i/o timeout  * [/ip4/103.155.91.101/tcp/2209] dial tcp4 0.0.0.0:37529->103.155.91.101:2209: i/o timeout  * [/ip4/103.155.91.101/tcp/2279] dial tcp4 0.0.0.0:37529->103.155.91.101:2279: i/o timeout
  f0693127: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0693765: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0693793: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0693817: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0694099: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0694149: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0694232: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0694999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0695289: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0695688: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0697249: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0697462: 'fail, Korea, Dalseo-gu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0697913: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0698688: 'fail, China, Xinyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPWAH8egzYoB9wJ92DUVjzEDw5F7BgDLjgmiKi4yT7qnb:  * [/ip4/183.204.60.235/tcp/24001] dial tcp4 0.0.0.0:37529->183.204.60.235:24001: i/o timeout
  f0699021: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0699115: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0699167: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0699181: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0700207: 'fail, China, Harbin', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQUUUW85k9xHDFiu6QupPq1BEgLTX4mNfpaGn2K9HRNTe:  * [/ip6/::1/tcp/38517] dial tcp6 [::1]:38517: connect: connection refused  * [/ip4/192.168.100.1/tcp/35401] dial tcp4 0.0.0.0:37529->192.168.100.1:35401: i/o timeout
  f0700999: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0701056: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0701144: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0701226: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQKywCe5Nnsa4aYvxEsbsi7D589PxdC2dssmSX8PPQAA5:  * [/ip4/172.18.7.147/tcp/2347] dial tcp4 0.0.0.0:37529->172.18.7.147:2347: i/o timeout
  f0702010: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0702034: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0702377: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0702810: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0703149: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0704898: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0704940: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0704941: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0704966: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0705136: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0705521: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0705937: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0706206: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0706999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNHh5wxLbNfnGTtqX3N4JoTnj32MoBoPZwLXL4xSPhoRh:  * [/ip4/125.122.66.43/tcp/24001] dial tcp4 0.0.0.0:37529->125.122.66.43:24001: i/o timeout
  f0707159: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0707197: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0707777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0709366: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQbTg2gKLsaHgkN4FJRHNbazUYvNW5SuVTzHabX9fQamr:  * [/ip4/115.236.22.208/tcp/24001] dial tcp4 0.0.0.0:37529->115.236.22.208:24001: i/o timeout
  f0709739: 'fail, China, Handan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLFhEykxak8fDojtzuVUTGZ4uHUZnL9sQTk41F4tpDT8j:  * [/ip4/106.115.185.6/tcp/1024] dial tcp4 0.0.0.0:37529->106.115.185.6:1024: i/o timeout  * [/ip4/111.226.86.36/tcp/1024] dial tcp4 0.0.0.0:37529->111.226.86.36:1024: i/o timeout
  f0709896: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0711266: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0711289: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0711445: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0712676: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0715209: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0715446: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0715561: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0715904: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0716103: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0716170: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0716283: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0716775: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0717219: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0717289: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0717905: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0717987: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0718236: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0718311: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0718313: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0718366: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFWaJFBXZ8MXK6uCNHUd8HWawrZ5chKYdm3d3LcBcyu1q:  * [/ip4/61.174.53.30/tcp/28768] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFWaJFBXZ8MXK6uCNHUd8HWawrZ5chKYdm3d3LcBcyu1q, but remote key matches 12D3KooWLFhzh4HbvvvC3m2df5zHrUJuDgqQhpG6u8y56zMaoHvo
  f0718552: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0718962: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0719301: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0720636: 'fail, Belgium, Bonheiden', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGRE8MgdTLu2W3abRFbvhyCmBCZwXDxew58SERPudZKHJ:  * [/ip4/141.138.64.21/tcp/24002] dial tcp4 141.138.64.21:24002: connect: connection refused
  f0720785: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0721721: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0722515: 'fail, Korea, Geumcheon-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSLshZefueZ7B7zepQUDSopEDbCKs4umTZBK62kTaRNGW:  * [/ip4/175.198.95.138/tcp/34001] dial tcp4 0.0.0.0:37529->175.198.95.138:34001: i/o timeout
  f0723006: 'fail, Korea, Bucheon-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFviuieFLJR75jf3rPdybnyYxbGW2PGF7WtL4Ts2Nc8c5:  * [/ip4/119.197.20.89/tcp/34001] dial tcp4 0.0.0.0:37529->119.197.20.89:34001: i/o timeout
  f0723381: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0723538: 'fail, China, Handan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCdb7C2xNDAh6zbTwPhjL7PF8yZEiq3HDL4otE2HtoUaJ:  * [/ip4/111.62.109.66/tcp/24001] dial tcp4 0.0.0.0:37529->111.62.109.66:24001: i/o timeout
  f0723604: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0723950: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0724023: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0724097: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0724216: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0724728: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0726270: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0726742: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFsTse9HPoMwRHD9Qhc3oXnfdZNKVGN6K4bhNkrv7CchT:  * [/ip4/43.243.130.115/tcp/23450] dial tcp4 0.0.0.0:37529->43.243.130.115:23450: i/o timeout  * [/ip4/27.148.248.19/tcp/23450] failed to negotiate security protocol: context deadline exceeded
  f0726841: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0727962: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0728817: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0729412: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0730670: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0730917: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0730942: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0731061: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0731150: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0732272: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWL2n7opE3PS2fxEZeFqc4SCGNfFKKWzG61ijk4gBYboLa:  * [/ip4/172.18.7.146/tcp/2347] dial tcp4 0.0.0.0:37529->172.18.7.146:2347: i/o timeout
  f0732862: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0733242: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0733626: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0733692: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0734053: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0734759: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0744093: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0744513: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK18YecHFy5KA9kHu7uY1JYccCcesgKvCXjMgijX66GcY:  * [/ip4/10.9.3.32/tcp/36284] dial tcp4 0.0.0.0:37529->10.9.3.32:36284: i/o timeout  * [/ip4/14.119.111.133/tcp/36284] dial tcp4 0.0.0.0:37529->14.119.111.133:36284: i/o timeout
  f0744622: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0745068: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0745192: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0746416: 'fail, Korea, Gyeonggi-do', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWL7hiKJo1wyg7DJCHuYQi1JwWKGGx83BYiAZcRzhdaYTZ:  * [/ip4/119.192.225.146/tcp/30677] dial tcp4 0.0.0.0:37529->119.192.225.146:30677: i/o timeout
  f0746628: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0746945: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0746991: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0747522: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0747777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0748101: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0748137: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0748179: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0748875: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0751099: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0751450: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0752442: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0753027: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0753228: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0753402: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0754993: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0755327: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBDuddDsbfvdw7VE261zkJw8MGyJjcJG2jNDZ2GqX499w:  * [/ip4/172.18.42.26/tcp/10241] dial tcp4 0.0.0.0:37529->172.18.42.26:10241: i/o timeout
  f0755650: 'fail, China', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0756840: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0757234: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0757610: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0761358: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0761728: 'fail, China, Yichun', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD2XixHrJ5Bfd15CTScnWtHkpdDAb8BZuFtEMZ1cSUmkP:  * [/ip4/1.22.134.88/tcp/23450] dial tcp4 0.0.0.0:37529->1.22.134.88:23450: i/o timeout
  f0763048: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0763082: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0763093: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0763981: 'fail, China, Tianjin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0764901: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0765036: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0765071: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0765173: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0766038: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0766177: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0766756: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0772766: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK4ff8GQrbv3vNuW2Zv1JbC5MSaUHT7mzBxJiP9UKXLBV:  * [/ip4/10.9.3.52/tcp/36285] dial tcp4 0.0.0.0:37529->10.9.3.52:36285: i/o timeout  * [/ip4/14.119.111.135/tcp/36285] dial tcp4 0.0.0.0:37529->14.119.111.135:36285: i/o timeout
  f0805343: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805402: 'fail, Korea, Bucheon-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJXhpstx2AEsQihMrP6vWRtbzzVoW89dPShnAraUQF3Fh:  * [/ip4/211.192.248.213/tcp/34001] dial tcp4 0.0.0.0:37529->211.192.248.213:34001: i/o timeout
  f0805486: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805567: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGL48bCVoHrtuCPEts89wsEyDnnsFMCGeqfPME42UKCFD:  * [/ip4/121.46.239.108/tcp/24001] dial tcp4 0.0.0.0:37529->121.46.239.108:24001: i/o timeout
  f0805568: 'fail, Korea, Gangnam-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMy9r6pt5o2DKhpHjkLedDJbhr1qvQVEm8izHTq2CGw9W:  * [/ip4/211.192.248.214/tcp/34001] dial tcp4 0.0.0.0:37529->211.192.248.214:34001: i/o timeout
  f0805612: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805872: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805937: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0806347: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0806395: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0806758: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0806904: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807382: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMuNMpbH8BcmqL3QqyWV6y7HJfvSNpqKa3g22xEWQ15He:  * [/ip4/10.0.14.51/tcp/12288] dial tcp4 0.0.0.0:37529->10.0.14.51:12288: i/o timeout
  f0807383: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807384: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807385: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807386: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807387: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807388: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807389: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807390: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807392: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807472: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807839: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0808701: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0808766: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0809570: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0809927: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0810223: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0811392: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0811662: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0813061: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0813825: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0814155: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0815838: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0816168: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0818235: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0818428: 'fail, China, Yichang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWB5fTJhsaHNUVALvngbCqcZtfJyJfRaw2YCWwiheqvpeq:  * [/ip4/119.36.140.201/tcp/24001] dial tcp4 0.0.0.0:37529->119.36.140.201:24001: i/o timeout
  f0818625: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0820770: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0821595: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0822151: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0822441: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0822818: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK9RSNq9doKrVJLKwmWeesBqE4UMhGaAbWDPcofR7NnJU:  * [/ip4/154.91.39.77/tcp/12360] dial tcp4 154.91.39.77:12360: connect: connection refused
  f0823127: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0825528: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0826272: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0826566: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0828538: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0829506: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0829765: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0829836: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQUpKwc1UPojnyvEdJgG8ni6TTaXarFsgQ7PC9KwkRs8s:  * [/ip4/172.18.42.25/tcp/10241] dial tcp4 0.0.0.0:37529->172.18.42.25:10241: i/o timeout
  f0832131: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMogBuJm8nyfHSXobNjLNVMCBNcicQztXFzPVeLPCRS86:  * [/ip4/172.21.113.44/tcp/32759] dial tcp4 0.0.0.0:37529->172.21.113.44:32759: i/o timeout
  f0833793: 'fail, China, Henan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0834841: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0835180: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0836160: 'fail, Korea, Seodaemun-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHwRmkj4Jxfo2YnKJC4YBzTNEGDW6Et4E68r7RYVXk46h:  * [/ip4/211.48.44.88/tcp/24001] dial tcp4 0.0.0.0:37529->211.48.44.88:24001: i/o timeout
  f0836164: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0836990: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0837056: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0837434: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0838893: 'fail, USA, Des Moines', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLzMd7zvfHCC6jTXta9P5B68TUhDyeo7qD6mcFt3JcbTL:  * [/ip4/173.230.155.38/tcp/54640] dial tcp4 0.0.0.0:37529->173.230.155.38:54640: i/o timeout
  f0839084: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0839133: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0839436: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0839448: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0839509: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0840040: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0840430: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0841453: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0842171: 'fail, China, Huizhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK8wEwn63hYURv7Gx4Dj2x8ttV2rbE3hBmM6tZ7Aib28R:  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/14.17.101.71/tcp/23450] dial tcp4 0.0.0.0:37529->14.17.101.71:23450: i/o timeout
  f0842266: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0843255: 'fail, China, Yibin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0843558: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0843713: 'fail, China, Shaanxi', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0844271: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0844439: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0844849: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0844916: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0845186: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0845456: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0845528: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0845976: 'fail, China, Jiaxing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNe7iCaSsvRxqnLVAjqWNpw6BbALY1zj6FCBubTMPvYEM:  * [/ip4/61.164.212.154/tcp/29013] dial tcp4 0.0.0.0:37529->61.164.212.154:29013: i/o timeout
  f0846191: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0847138: 'fail, China, Qinzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSTFkagdqUF7FvH2DZAKQUj8XBuK2DjdiA9Sz2QfBgYzx:  * [/ip4/115.231.84.101/tcp/6692] dial tcp4 0.0.0.0:37529->115.231.84.101:6692: i/o timeout
  f0848972: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0849079: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0849554: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBUJZTafAWxwzzKCdsBiM4YfMAsoVUN9wNtcnCPfyrmbV:  * [/ip4/120.232.253.20/tcp/23450] dial tcp4 0.0.0.0:37529->120.232.253.20:23450: i/o timeout
  f0850130: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0851322: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0855056: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0856912: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0857612: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0858038: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0859013: 'fail, China, Nanjing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAZCh3a1YzxiiVJfPstcQXzvwtGnxFQuSghE2iJpxMRA3:  * [/ip4/221.226.219.122/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAZCh3a1YzxiiVJfPstcQXzvwtGnxFQuSghE2iJpxMRA3, but remote key matches 12D3KooWBhGRomwW8FebEM5zJcMpvGCJpmbMphMAXom7zLn3aHva
  f0863013: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0863576: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0866310: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0866508: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0866966: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0867253: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0867312: 'fail, China, Foshan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0868971: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0870189: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0870333: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0870354: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0870973: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0871511: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0871532: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGXbLqGTK2sdZe91CDzAuaaT8LwoDSh1q2ag78PdZJMtL:  * [/ip4/10.0.20.15/tcp/3345] dial tcp4 0.0.0.0:37529->10.0.20.15:3345: i/o timeout
  f0871719: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0873699: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0874231: 'fail, China, Yichun', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0876581: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0876800: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0877545: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0878807: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0881262: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0881281: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0881321: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0881531: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0881687: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0883083: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0883201: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKp1oWbffKLCXo1ajFb5uWnJ4JrfbmhUqyz5WJtSyx4Wo:  * [/ip4/10.21.11.3/tcp/12288] dial tcp4 0.0.0.0:37529->10.21.11.3:12288: i/o timeout
  f0883202: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKgvmaQUKkpAbZAeq74eDdsKDWZwbAPxYw9iK7DHKaeft:  * [/ip4/10.6.13.219/tcp/12288] dial tcp4 0.0.0.0:37529->10.6.13.219:12288: i/o timeout
  f0883203: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRYoZEpVWEo5VGuw1MntNxgXpbMXPRUZGttJXWA4vbcLh:  * [/ip4/10.6.13.218/tcp/12288] dial tcp4 0.0.0.0:37529->10.6.13.218:12288: i/o timeout
  f0883205: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHvAMHKfaq4HmQXkuEkwt54WhYF2TXwFLobeCzU8bAqLM:  * [/ip4/10.21.11.2/tcp/12288] dial tcp4 0.0.0.0:37529->10.21.11.2:12288: i/o timeout
  f0883206: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWND5Jr47P5R7Va2y3e6HNvk4SJaHvAvfnL76XCexXzy7c:  * [/ip4/10.0.14.52/tcp/12288] dial tcp4 0.0.0.0:37529->10.0.14.52:12288: i/o timeout
  f0884455: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0884781: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01001984: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01002302: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01016255: 'fail, China, Beijing + Norway, Grimstad', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNTn9CHXkZfN4M54x4qnBgjsmzhy9g5kLGQSZCajc1nvd:  * [/ip4/62.141.128.34/tcp/2436] dial tcp4 0.0.0.0:37529->62.141.128.34:2436: i/o timeout
  f01016365: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01016451: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01016806: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01016882: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFWK23d43oBMyYeAPvfTjFZXNgY61yXwZEPBA17oiaaBm:  * [/ip6/::1/tcp/38477] dial tcp6 [::1]:38477: connect: connection refused  * [/ip4/127.0.0.1/tcp/45155] dial tcp4 127.0.0.1:45155: connect: connection refused  * [/ip4/103.78.229.45/tcp/2279] dial tcp4 103.78.229.45:2279: connect: connection refused  * [/ip4/103.78.229.45/tcp/2164] dial tcp4 103.78.229.45:2164: connect: connection refused  * [/ip4/172.16.16.11/tcp/45155] dial tcp4 0.0.0.0:37529->172.16.16.11:45155: i/o timeout
  f01017980: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01019391: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01019418: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01019869: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01021204: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01021317: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01021756: 'fail, Korea, Yeongdeungpo-gu', // exhausted 15 attempts but failed to open stream, err: no good addresses
  f01021773: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01021898: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01022733: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01023982: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01024317: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01025366: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01025778: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE4XrSfuY1dmRecmbyugSdZNR9hsq4go4AtDxP25PBxmm:  * [/ip4/43.243.130.123/tcp/23450] dial tcp4 0.0.0.0:37529->43.243.130.123:23450: i/o timeout
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
  f01032314: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01032657: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01032858: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01032903: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01032989: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01033096: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01033390: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01033805: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01034007: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01035021: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01036920: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01037628: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKwez14JZ5MfmPhNg6Kz1r6grj9iZ6vmU2q5kbivYUco8:  * [/ip4/27.148.248.20/tcp/23450] failed to negotiate security protocol: context deadline exceeded
  f01038189: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01038199: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01038389: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRf1ZrDdWiHBkZCv1cnbzhbLWMTNJS1t1gzgMxTrtLm5S:  * [/ip4/154.91.39.77/tcp/12350] dial tcp4 0.0.0.0:37529->154.91.39.77:12350: i/o timeout
  f01038625: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01038663: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01038679: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01038861: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01039350: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01039576: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01039753: 'fail, China, Suqian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWB37fdwrs2An7kZJYHv5zmzAXAcuX95ptuRTbwzot68aq:  * [/ip6/::/tcp/0] dial tcp6 [::]:0: connect: connection refused  * [/ip4/58.241.250.130/tcp/2346] dial tcp4 58.241.250.130:2346: connect: connection refused
  f01040516: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01040817: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDCVnKZDF54aTAqEK5T53stLd6T3quBSepb2UJepyNb4a:  * [/ip4/221.163.91.165/tcp/14224] dial tcp4 0.0.0.0:37529->221.163.91.165:14224: i/o timeout
  f01042229: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01042276: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01042409: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01043193: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01043666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01043780: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01044297: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01045078: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01045198: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01046069: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01047011: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01048770: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01049102: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01049468: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01049739: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01050286: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01050978: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01051178: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01051743: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01052311: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01052556: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01053413: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01054527: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01055821: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01056608: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01056782: 'fail, China, Huizhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01057193: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01057303: 'fail, China, Huizhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRauh5L4cp8ZgECxihY7LHXqZRaagmgYrz88KwR3qWg9u:  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip4/14.215.107.51/tcp/23450] dial tcp4 0.0.0.0:37529->14.215.107.51:23450: i/o timeout
  f01059489: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEfoAjwdjUCzKPHdR38zuxnf4Fft3sbLFFz2yFfCdzBqr:  * [/ip4/10.8.102.20/tcp/2233] dial tcp4 0.0.0.0:37529->10.8.102.20:2233: i/o timeout
  f01061547: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSyXUai9q5yrjkpjUGrn1oWt79hPiGx3ixHssPFfvsiK7:  * [/ip4/43.243.130.91/tcp/23450] dial tcp4 0.0.0.0:37529->43.243.130.91:23450: i/o timeout
  f01062230: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEDAM1EhEucAmQUDvxaoKViscc5gke5zZTJrL8tR2MQeq:  * [/ip4/221.163.91.162/tcp/14225] dial tcp4 0.0.0.0:37529->221.163.91.162:14225: i/o timeout
  f01062232: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01064991: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01065505: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01065930: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01066009: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01066517: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01067573: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01068111: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01068213: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01068287: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01068326: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01069268: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01069894: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01069919: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01070149: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCPrJpPFTcYNy9iNSErBsHUWuLaVHkvThh1DmcDRt5TYf:  * [/ip4/125.64.33.80/tcp/33167] dial tcp4 0.0.0.0:37529->125.64.33.80:33167: i/o timeout
  f01070158: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01070205: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01070319: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01070395: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01071282: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01071719: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01071852: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01073166: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01073851: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01074227: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01075086: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01076629: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01076644: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01077547: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01077708: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01077777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01079999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01081349: 'fail, China, Foshan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01081449: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01081786: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01082277: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01082888: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01083168: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01083399: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01083999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01084913: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01085688: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLc7i9VwqBKfSETERepHNrP39rog5GM7c29nBvNbgT8MS:  * [/ip4/113.89.33.37/tcp/24001] dial tcp4 0.0.0.0:37529->113.89.33.37:24001: i/o timeout
  f01085801: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01086350: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01086616: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01086808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ5Xn9DXbbNz4Q2gG6an2HV8BPuruLa5QpPdW8Di7JooD:  * [/ip4/10.126.6.45/tcp/8016] dial tcp4 0.0.0.0:37529->10.126.6.45:8016: i/o timeout
  f01087243: 'fail, China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE2tYHCLgPNqmnGvM8FwZefkq96UWR5zmDvZ1WnrJkW6V:  * [/ip4/122.114.37.226/tcp/21000] dial tcp4 0.0.0.0:37529->122.114.37.226:21000: i/o timeout
  f01087561: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01088018: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01088088: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01088188: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01088688: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01089169: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01089828: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01090043: 'fail, Korea, Bucheon-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWF94F85jwHwayDrSBCn3GmXAn2gjkpVn1Sjr4pWHH2GJY:  * [/ip4/127.0.0.1/tcp/24001] dial tcp4 127.0.0.1:24001: connect: connection refused  * [/ip4/115.68.66.4/tcp/34001] dial tcp4 0.0.0.0:37529->115.68.66.4:34001: i/o timeout
  f01090983: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01092768: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01093419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01095558: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01095694: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01095710: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01095973: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01096056: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01096672: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01097059: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01097535: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01097758: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098119: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098124: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098271: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098580: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098810: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098931: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01099312: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01099739: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKgyCCFABwra7XzxeYM9dC5JNShURezTum4U4DBASMbsS:  * [/ip4/103.252.204.89/tcp/18768] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKgyCCFABwra7XzxeYM9dC5JNShURezTum4U4DBASMbsS, but remote key matches 12D3KooWGWeehRDy541X8vBQW8BWvv8n62vzctY1YE74fwo1hsRY
  f01100262: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01100636: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01100914: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01101196: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01101315: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01101397: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01101426: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01102194: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01102936: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01103160: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01103841: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEEJu4bnfZz4bUVkj1yepotZsCSmbxLgPpk35z7QL9kEL:  * [/ip4/103.252.204.91/tcp/18768] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWEEJu4bnfZz4bUVkj1yepotZsCSmbxLgPpk35z7QL9kEL, but remote key matches 12D3KooWBewCUvVRyDi9c4sb8aFJCHHnLEqx5xhgxDf3snPZoG18
  f01103850: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01103923: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQFA3rw9afbevagKCpKiUZBS2RsBxDpjfGkmUoLpebsmF:  * [/ip4/103.252.204.95/tcp/18768] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQFA3rw9afbevagKCpKiUZBS2RsBxDpjfGkmUoLpebsmF, but remote key matches 12D3KooWDavzW5RAK57x6ekp4ndWqyneZHBuGBCcCnRXvr8F26Hi
  f01104012: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01104018: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01104310: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01104889: 'fail, China, Yibin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01105079: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01105647: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01105825: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNons7ApGxxy6G8aiyFhtH8gZsJCJPZ5ZWJHgstssv3Z2:  * [/ip4/116.172.69.2/tcp/24001] dial tcp4 0.0.0.0:37529->116.172.69.2:24001: i/o timeout
  f01106117: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01106276: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBjLAvPUAXC4wfBRVy9izbyfdTWh5ZYc4Ss8Zvp4wQTjk:  * [/ip4/103.252.204.93/tcp/38768] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBjLAvPUAXC4wfBRVy9izbyfdTWh5ZYc4Ss8Zvp4wQTjk, but remote key matches 12D3KooWCdBMnGRKVrmz99Tj3XzYXe9HPiWXcDTVKC3pVw86akFU
  f01106668: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01106820: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01106888: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWM1D7TkZ1mzZSSZGyopddLzAmaD1NdNNA5c1S2Vw6wvUj:  * [/ip4/39.105.217.71/tcp/10851] dial tcp4 0.0.0.0:37529->39.105.217.71:10851: i/o timeout
  f01107182: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01107192: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01107585: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01108043: 'fail, Korea, Goyang-si', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01108129: 'fail, Korea, Namyangju', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01108594: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01110111: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01110660: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01110844: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01111111: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01111118: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01111131: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01111831: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01111881: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01112163: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01112782: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01113378: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01114516: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01114577: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01115279: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01115686: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01116664: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01116666: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01116671: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01117206: 'fail, China, Jieyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDAN89QRUSSaXhcAHELXqzcBLUVfEuouVqmFeCazbm5Em:  * [/ip4/183.240.209.156/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWDAN89QRUSSaXhcAHELXqzcBLUVfEuouVqmFeCazbm5Em, but remote key matches 12D3KooWBYWzJVLKT8z3vwTixQv9KrFwsbyRL9HRK5QQZZLNGJaF
  f01117889: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01117949: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01118032: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01118499: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01118788: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01118970: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01119039: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01119631: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01119939: 'fail, USA, Baxter', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01120248: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01120291: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQYxW9tZuPDGAqa3EX6J8NwXzgW3DwqoaHe8gk2DP6zCN:  * [/ip4/113.219.198.66/tcp/58418] dial tcp4 0.0.0.0:37529->113.219.198.66:58418: i/o timeout
  f01121887: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01122339: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01122448: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK46MKCH8oRbx2BGVae7dLU7BNbRvEuyJpYbAvyC9Z5E1:  * [/ip4/121.174.254.132/tcp/24001] dial tcp4 0.0.0.0:37529->121.174.254.132:24001: i/o timeout
  f01122640: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01122841: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01122889: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01123232: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
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
  f01127678: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEnwc37jRaiKCGfFAjNTXhZdJkEGp9pWCdaeYx4uaYmom:  * [/ip4/83.17.169.38/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWEnwc37jRaiKCGfFAjNTXhZdJkEGp9pWCdaeYx4uaYmom, but remote key matches 12D3KooWNCSgnLkdbSQyMG67oD4LQkHFPWEUQRynCXukXGfDprcH
  f01127909: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128206: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128213: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128225: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128302: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128326: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128800: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01129431: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01129455: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01129866: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01129867: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130193: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130288: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130543: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130544: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130671: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130682: 'fail, China, Qinzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSHM8QGFzA9JEzWcxHu1a1xyu85YStMTbqA2kWXTPmDrR:  * [/ip4/115.231.84.108/tcp/6689] dial tcp4 0.0.0.0:37529->115.231.84.108:6689: i/o timeout
  f01130729: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130927: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01131653: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01131867: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132015: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132058: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132066: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132083: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132084: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSXBrPiRaDgd1VQFKQo3DEVTiQQowk48Af4G3KZzKwWS9:  * [/ip4/10.5.101.11/tcp/12288] dial tcp4 0.0.0.0:37529->10.5.101.11:12288: i/o timeout
  f01132085: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132087: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132093: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132094: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132095: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132096: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132178: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132422: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132516: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132569: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWC9raZHLbMCUZDYiR35fx5K7tYiZQQNgUF5JrR4AhXrzJ:  * [/ip4/183.240.209.145/tcp/24001] dial tcp4 183.240.209.145:24001: connect: connection refused
  f01132656: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQkKju9xqRzupWZeimiTaFGVwW2a5G5Qipwa5YLWbzvSq:  * [/ip4/103.252.204.94/tcp/18768] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQkKju9xqRzupWZeimiTaFGVwW2a5G5Qipwa5YLWbzvSq, but remote key matches 12D3KooWPdUZNdzxLe9EsN6fKR4ggEeRmPScSs2xTfipMPub9rmS
  f01133130: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01133532: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01134586: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01135819: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMX6sP6hsQkBFtQR5fpVModdRWvsuo5tBs8r1rtVs1sq7:  * [/ip4/155.69.203.4/tcp/39878] dial tcp4 0.0.0.0:37529->155.69.203.4:39878: i/o timeout  * [/ip4/10.126.32.3/tcp/8019] dial tcp4 0.0.0.0:37529->10.126.32.3:8019: i/o timeout
  f01136283: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01136428: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01136493: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01137150: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJt7TkeCyyWZoqPJKyJUk7F3Tc82KFwkRtrPKpJKoVMhV:  * [/ip4/47.254.86.118/tcp/17322] failed to negotiate security protocol: read tcp4 144.217.11.204:37529->47.254.86.118:17322: read: connection reset by peer
  f01137193: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01137229: 'fail, Korea, Dongducheon-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDaPPCdpbzt3fwKG93qFyAokKwiHLSE56nrjd7ZQ3AAna:  * [/ip4/112.216.168.44/tcp/9191] dial tcp4 0.0.0.0:37529->112.216.168.44:9191: i/o timeout
  f01137656: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01137855: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01138034: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01138139: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01138209: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01138496: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01138709: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01139232: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBFqatFJHQNeA2HAdwWK21yXy6xVTz3AHv72iwPrTP8eG:  * [/ip4/47.254.79.138/tcp/16725] dial tcp4 0.0.0.0:37529->47.254.79.138:16725: i/o timeout
  f01139383: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01139961: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01140256: 'fail, Vietnam, Hanoi', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01140707: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01141077: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01142483: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01143635: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01143914: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01145144: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01145505: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01146045: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFMB4w6gP1uVkgTTUXeoVxkBuoNTfDNbtDjiHTBpUxFDY:  * [/ip4/10.167.5.11/tcp/32759] dial tcp4 0.0.0.0:37529->10.167.5.11:32759: i/o timeout
  f01146522: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01146660: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01147989: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCBKEqUyHXSpjJNBwgzg9RfZnUqkK4Y76yWX887FxW4uX:  * [/ip4/172.21.118.23/tcp/32759] dial tcp4 0.0.0.0:37529->172.21.118.23:32759: i/o timeout
  f01148129: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01149098: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01149230: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01149485: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01149873: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKiTmKkaDtEyYzWwr1XUNz8PVoJ4cKy1zERtcdcH8cTJJ:  * [/ip4/59.148.72.172/tcp/39879] dial tcp4 0.0.0.0:37529->59.148.72.172:39879: i/o timeout
  f01150329: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01150686: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01152162: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01152332: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGXcFJ9fpkiHJEpzRtyfF1EHscGbGWrfLsGhNjBJ6EyXU:  * [/ip4/108.20.152.75/tcp/24001] dial tcp4 108.20.152.75:24001: i/o timeout
  f01152462: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01152593: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01152731: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKsvgFmSEXicUEw477VtRtyQNSh21BNHgdUzxVHU7pz32:  * [/ip4/120.31.71.190/tcp/24001] dial tcp4 0.0.0.0:37529->120.31.71.190:24001: i/o timeout
  f01153105: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01154023: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01154081: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01154295: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01154375: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01154618: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01154827: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01155052: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01155977: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01156538: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01156568: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01156835: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01156883: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01156901: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01156975: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157018: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157027: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157037: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157057: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157075: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157099: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157156: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157187: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157203: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157215: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157241: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157249: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157288: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157295: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157314: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157349: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157355: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157356: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157445: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157868: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157884: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01157913: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWACcCGo1RxG8zDh3T9nXHk1usVqSKMaeoyLQ1cA6mEYWq:  * [/ip6/::1/tcp/42069] dial tcp6 [::1]:42069: connect: connection refused  * [/ip4/127.0.0.1/tcp/41467] dial tcp4 127.0.0.1:41467: connect: connection refused  * [/ip4/211.155.115.0/tcp/41467] dial tcp4 211.155.115.0:41467: connect: connection refused  * [/ip4/10.12.143.3/tcp/41467] dial tcp4 0.0.0.0:37529->10.12.143.3:41467: i/o timeout
  f01158296: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01158681: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01158684: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01159190: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01159754: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01159866: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01159979: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01160021: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01160571: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01160668: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01161077: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01161245: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01162201: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01162678: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01163640: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01164909: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01165022: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01165053: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01165159: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01165179: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01165233: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01165300: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01165428: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01165444: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01165468: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01165487: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01166098: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01166620: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01166697: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01167231: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01167330: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01167426: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01168015: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01168661: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJCF8tvWXbNFAKiJMswKvHv5SUGiVaF77gKUDpXFxQ3nu:  * [/ip4/47.241.210.137/tcp/17322] dial tcp4 0.0.0.0:37529->47.241.210.137:17322: i/o timeout
  f01168901: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAZUhycNMytwbbVX71keSj1xhTSX9oEGyb9g2RtcrGLam:  * [/ip4/36.6.47.147/tcp/24001] dial tcp4 0.0.0.0:37529->36.6.47.147:24001: i/o timeout
  f01169380: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSKqs6niVUCf4ZMSthsayF3nfSeN3xTbn5V29X41hFzFD:  * [/ip4/127.0.0.1/tcp/49047] dial tcp4 127.0.0.1:49047: connect: connection refused  * [/ip6/::1/tcp/49047] dial tcp6 [::1]:49047: connect: connection refused  * [/ip4/183.24.131.43/tcp/49047] dial tcp4 183.24.131.43:49047: connect: connection refused  * [/ip4/192.168.10.48/tcp/49047] dial tcp4 0.0.0.0:37529->192.168.10.48:49047: i/o timeout
  f01169592: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01169691: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRANGbzgAqo7Ht3sPeJpbLK8fbH65CUf5h4pgyNNNRTUH:  * [/ip4/10.3.127.54/tcp/12288] dial tcp4 0.0.0.0:37529->10.3.127.54:12288: i/o timeout
  f01169692: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWB2JBoPmnsRG6uAs52sgJZbEbgkKQQAoeMAv62uhfMSQm:  * [/ip4/10.13.52.93/tcp/12288] dial tcp4 10.13.52.93:12288: connect: no route to host
  f01169693: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01169694: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01169696: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01169721: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01169722: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01169723: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01169724: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01169725: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01169790: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01170291: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01170321: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01170399: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01171440: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01171513: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01172521: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01173139: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01173170: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01173249: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01173252: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01173645: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLSmAAZDWXd8oHrc1VDcomEkrYrd2WLpzikTgEvpRx8tm:  * [/ip4/117.21.178.7/tcp/24001] dial tcp4 0.0.0.0:37529->117.21.178.7:24001: i/o timeout
  f01173906: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174316: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174479: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174581: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174617: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174629: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174644: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174867: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174869: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174899: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174943: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174958: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174966: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01174977: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01175000: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01175435: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01175900: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01176492: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01176700: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01177077: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01177129: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01177326: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01177571: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01177590: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01178222: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01178403: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01178469: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01179043: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01179282: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01179295: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01179662: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01180632: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01180639: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01181168: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01182223: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01182317: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01183585: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01183690: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01183757: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01184717: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01184941: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01185349: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01185350: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01187111: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01188110: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR1hD18UKCSMBBqJ6gAhxaPHz1qGFxraWXsDpEjzyBnMa:  * [/ip4/183.221.217.92/tcp/64972] dial tcp4 0.0.0.0:37529->183.221.217.92:64972: i/o timeout
  f01188117: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01189202: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQXx4gonio8eNdabnKgNRpx5q8dLDQqjy2B462b6YjV8E:  * [/ip4/103.252.204.92/tcp/38768] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQXx4gonio8eNdabnKgNRpx5q8dLDQqjy2B462b6YjV8E, but remote key matches 12D3KooWPGTSirq3cn2CGgpRr19oyEbJbStYRqtFtMNMt1tvHDi9
  f01189625: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01189663: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01190147: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01190350: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01190558: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01190965: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01190978: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSSTwjiLyMQS6tEJPXmyLGBKt8enYZnMmfUrKWkABRXQ5:  * [/ip4/127.0.0.1/tcp/36141] dial tcp4 127.0.0.1:36141: connect: connection refused  * [/ip6/::1/tcp/37881] dial tcp6 [::1]:37881: connect: connection refused  * [/ip4/61.147.97.84/tcp/36141] dial tcp4 61.147.97.84:36141: connect: no route to host
  f01191029: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01191221: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01191451: 'fail, Korea, Bucheon-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLW4UNzFYjh5vda6Fo3jPRyVQkvqMoENDLumEfsciRsZ7:  * [/ip4/119.197.20.193/tcp/34001] dial tcp4 0.0.0.0:37529->119.197.20.193:34001: i/o timeout
  f01191481: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01191816: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01192149: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01192664: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01193812: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01194887: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01195421: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01195470: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01195666: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01195905: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01196447: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01197354: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01197441: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01197876: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01198058: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01198070: 'fail, Korea, Bucheon-si, Gimpo-si', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01198650: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01198927: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01198966: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01199028: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01199873: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01201012: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01201224: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01202106: 'fail, Korea, Seocho-gu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01202111: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01203111: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01203143: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01203168: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01203636: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01203879: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01203899: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01205535: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK3SNoc7MpUZmHGpUT3ZcSZyKcSWAmApH5cZqxab3axxL:  * [/ip4/121.46.239.242/tcp/24001] dial tcp4 0.0.0.0:37529->121.46.239.242:24001: i/o timeout
  f01205854: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01206253: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01206961: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01207023: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01207041: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01208421: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAmVESy96B1TkTMpp2tbCviQi7duGGTKxCDqhZ6mVxnbm:  * [/ip4/119.197.20.177/tcp/34001] dial tcp4 0.0.0.0:37529->119.197.20.177:34001: i/o timeout
  f01208503: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01208526: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01208627: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01208636: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01208694: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01208779: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01208945: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01209020: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01209022: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBoaGRDzGizxvBrFwWSRRtYwfRssyDoXCstu3tryKDJwF:  * [/ip4/27.148.248.31/tcp/23450] failed to negotiate security protocol: context deadline exceeded
  f01209068: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01209185: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01209286: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01210520: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01210575: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01210614: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01211187: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01211859: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKtGKU9s5GNBi2dFei4tJMEBqexgpqekEnV7GnmTbc3bW:  * [/ip4/10.166.12.92/tcp/32759] dial tcp4 0.0.0.0:37529->10.166.12.92:32759: i/o timeout
  f01212159: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01212287: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01213121: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01213126: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01213185: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01213559: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01213742: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGGHWuASRo9wDtYgy2RGCYNAZFReBgMy7KRkFYbipZfPo:  * [/ip4/112.216.168.44/tcp/9191] dial tcp4 0.0.0.0:37529->112.216.168.44:9191: i/o timeout
  f01215282: 'fail, UAE, Dubai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWP8bWuciaHcSGpMjbHtku8gyEeQiFmPpGAAErHwXkcDku:  * [/ip4/83.111.142.34/tcp/24001] dial tcp4 83.111.142.34:24001: connect: connection refused
  f01215328: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01215819: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01216131: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01216923: 'fail, China, Huizhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01217139: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01218102: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01218186: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFrDSvFBiUUmvw24ogT6m3fTEkrkJ5A3QtUxhoxjQacx6:  * [/ip4/27.148.248.88/tcp/23450] dial tcp4 0.0.0.0:37529->27.148.248.88:23450: i/o timeout
  f01218989: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMxFFbWuDbcUKFwKmzX4myZcPmmYDYrX2jCYVcNew6tqt:  * [/ip4/127.0.0.1/tcp/19687] dial tcp4 127.0.0.1:19687: connect: connection refused  * [/ip6/::1/tcp/14677] dial tcp6 [::1]:14677: connect: connection refused  * [/ip4/192.168.85.1/tcp/19687] dial tcp4 0.0.0.0:37529->192.168.85.1:19687: i/o timeout
  f01219294: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01221121: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01221268: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01223505: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01224142: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01224379: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01224704: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01224705: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01224707: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01224708: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01224709: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01224711: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01224768: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01225427: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01225783: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01226814: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01227042: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01227383: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01227510: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01227883: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01229322: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01231239: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01235249: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01236627: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01238519: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK3ovcbva8BnCfuXw4DfYHHjG7rgjJJgrT2mC9J4WAcaC:  * [/ip4/10.19.8.2/tcp/7101] dial tcp4 0.0.0.0:37529->10.19.8.2:7101: i/o timeout
  f01239166: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01239538: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01239890: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01240218: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01240398: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01240603: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01242770: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01242788: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01243219: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01243812: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01243817: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01245428: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01245980: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01246563: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01247078: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01248016: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01248190: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01248587: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01249144: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01250000: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNxYz65v1rPgd36JCpxtDYShtCdYfoZzMEGQrTPQafMQq:  * [/ip4/218.68.85.169/tcp/24001] dial tcp4 0.0.0.0:37529->218.68.85.169:24001: i/o timeout
  f01250204: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01250237: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01250837: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEpAZfCszxTDCVF3JjJfSK7dfmKQN5A4BCfxHWqadk5Ug:  * [/ip4/172.20.6.3/tcp/7000] dial tcp4 0.0.0.0:37529->172.20.6.3:7000: i/o timeout
  f01250863: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01250873: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01250983: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01251000: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01251102: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01251528: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE935MST5jMnnTL3dkQWWtQsZu7CeAiy8hmUNHTR74wsA:  * [/ip4/183.207.183.229/tcp/24001] dial tcp4 0.0.0.0:37529->183.207.183.229:24001: i/o timeout
  f01252145: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01252627: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01254435: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01254559: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01255207: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01255369: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01255977: 'fail, China, Foshan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNPXZQbHy1FY31oWFok8itid3ZSjMnAnn1Rfp41vvJ2Dy:  * [/ip4/59.39.66.131/tcp/28888] dial tcp4 0.0.0.0:37529->59.39.66.131:28888: i/o timeout
  f01256540: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01257703: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCzXSr95khmbGn32ViLczmdgxBGKgUDHwZNrw2iTL7rAi:  * [/ip4/192.168.0.37/tcp/34001] dial tcp4 0.0.0.0:37529->192.168.0.37:34001: i/o timeout
  f01257962: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01258894: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01258967: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01259449: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKWeDJgbYo1nt8LTEtxJywB8CfZbCiQ9o8EcvbDLSRVvC:  * [/ip4/119.6.229.70/tcp/42521] dial tcp4 0.0.0.0:37529->119.6.229.70:42521: i/o timeout
  f01260173: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01260384: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01260725: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01260819: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01260993: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01261075: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01261113: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01261168: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01261377: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01262064: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01262966: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01263957: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01264319: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01264444: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01264518: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01264823: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01264903: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01265268: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01265322: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01266666: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01267055: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01267262: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01269152: 'fail, China, Huizhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01269367: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01269623: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01269788: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01270011: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01270096: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01270467: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01270657: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01270744: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01271225: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01271229: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01272340: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01273431: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01273867: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01274011: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJCnafD75hgwmCNL95gq2vhFmnsbUfCLe9sGtLvs71gT1:  * [/ip4/113.29.246.210/tcp/18375] dial tcp4 113.29.246.210:18375: connect: connection refused
  f01274199: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDHWFdhe7dH9LPawh55GrXDqCuweoadB9SumojpkZ7zhM:  * [/ip6/::1/tcp/39585] dial tcp6 [::1]:39585: connect: connection refused  * [/ip4/127.0.0.1/tcp/44677] dial tcp4 127.0.0.1:44677: connect: connection refused  * [/ip4/116.172.69.2/tcp/26740] dial tcp4 0.0.0.0:37529->116.172.69.2:26740: i/o timeout  * [/ip4/172.16.13.25/tcp/44677] dial tcp4 0.0.0.0:37529->172.16.13.25:44677: i/o timeout  * [/ip4/116.172.69.2/tcp/50143] dial tcp4 0.0.0.0:37529->116.172.69.2:50143: i/o timeout
  f01275158: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01275287: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01277031: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01277347: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01277736: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01278044: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01278215: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01279006: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01281349: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWF8VjqMkxATzMKYmNGh57d8TfpxtR947mcDP2VXhJk5NU:  * [/ip4/112.95.165.234/tcp/24001] dial tcp4 112.95.165.234:24001: connect: connection refused
  f01282328: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01282967: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01283752: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01283930: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01284467: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01285716: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01285985: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01286107: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01286676: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01288529: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01289300: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01289416: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01292160: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01292475: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01293938: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01301491: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01302086: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01302188: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01302397: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01303722: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01304462: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01306222: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01307626: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01308857: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK9Ve5FRt4LgzZTJRcqfCKhNoUdJrYogjzhdp5UZYNJAD:  * [/ip4/10.13.52.94/tcp/12288] dial tcp4 10.13.52.94:12288: i/o timeout
  f01308862: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGaFVpJ6p1hrzu9NfvzAqHzRyX9TFBg1wTnLKpnWLkksm:  * [/ip4/10.13.52.95/tcp/12288] dial tcp4 10.13.52.95:12288: i/o timeout
  f01308863: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKBpLfPQKR99WWw9P57BqmKP6LxSGfGayEmqDSXUseKVg:  * [/ip4/10.1.36.29/tcp/12288] dial tcp4 0.0.0.0:37529->10.1.36.29:12288: i/o timeout
  f01308876: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWT2CMEpEwS3GZAxrtVj5SAw5pg2rNySZd3WJ6SbFdiixX:  * [/ip4/10.1.36.30/tcp/12288] dial tcp4 0.0.0.0:37529->10.1.36.30:12288: i/o timeout
  f01308877: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEcxPPpKTP6gfmoN5BnNKP7BZWc91VU2g89ws2MioRdbG:  * [/ip4/10.1.36.36/tcp/12288] dial tcp4 0.0.0.0:37529->10.1.36.36:12288: i/o timeout
  f01308916: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHwRwrejeLS2zkMfrpCLmwQYotAHm8gAfHBcj3UxA2Tpg:  * [/ip4/10.1.36.37/tcp/12288] dial tcp4 0.0.0.0:37529->10.1.36.37:12288: i/o timeout
  f01308928: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWN7nvkbntHkJr1xrNUpskscgHVfxo232RXCjrYQSuVVzh:  * [/ip4/10.6.44.83/tcp/12288] dial tcp4 0.0.0.0:37529->10.6.44.83:12288: i/o timeout
  f01308939: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01312143: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01312792: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01313233: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01314740: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01315096: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01315130: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01316365: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01318580: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01318788: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01318979: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01319368: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01319803: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01320058: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01320262: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01321901: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01324232: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01325141: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01326678: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01330977: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01333861: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAaArPQoEFgFv8xpywd7yFsT8FGY97DZUFajAezhP59qX:  * [/ip4/69.181.229.56/tcp/24001] dial tcp4 69.181.229.56:24001: i/o timeout
  f01337799: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01338190: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01338337: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01339261: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBxw4UmJsWW4nrEGFVM7bFeANDMWCHNPYSki584wPD7B5:  * [/ip4/221.150.233.3/tcp/21206] dial tcp4 0.0.0.0:37529->221.150.233.3:21206: i/o timeout
  f01340093: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01340400: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01340457: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01341608: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01344282: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01344987: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01347200: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01348489: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01348517: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01349048: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01349435: 'fail, China, Yuncheong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01350631: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01350722: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01351501: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01357002: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHGUzdDxTbjAeCV7bA3kez25DQmpfU4mH9cEiTWW4pKRq:  * [/ip4/172.16.10.1/tcp/24001] dial tcp4 0.0.0.0:37529->172.16.10.1:24001: i/o timeout
  f01357186: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01359285: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01359803: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvf5L41NDxE5fB67rYvDQq3Pgzmsnr13dTWpJnBJKFff:  * [/ip6/::1/tcp/35413] dial tcp6 [::1]:35413: connect: connection refused  * [/ip4/127.0.0.1/tcp/35487] dial tcp4 127.0.0.1:35487: connect: connection refused  * [/ip4/205.251.161.106/tcp/24002] dial tcp4 205.251.161.106:24002: connect: connection refused  * [/ip4/192.168.1.62/tcp/35487] dial tcp4 0.0.0.0:37529->192.168.1.62:35487: i/o timeout  * [/ip4/205.251.161.106/tcp/35487] dial tcp4 0.0.0.0:37529->205.251.161.106:35487: i/o timeout
  f01359873: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQMnCFSinoPAtEGwqus3sAeuftqqPkfvDG52mK1y6Raed:  * [/ip4/0.0.0.0/tcp/24001] dial tcp4 0.0.0.0:24001: connect: connection refused
  f01361111: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01361743: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01365744: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01365756: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01365859: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01366743: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01366823: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBYthhfQ8RuA5gpVSA2ixBbaNMomSEBdU7nTHLhqBfezj:  * [/ip4/221.150.233.3/tcp/21207] dial tcp4 0.0.0.0:37529->221.150.233.3:21207: i/o timeout
  f01367109: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFwMQwpetn5zcMUUhd3kJp1kUyPrBJk3kBaKu5Lk5kMqZ:  * [/ip4/95.106.72.65/tcp/48888] dial tcp4 0.0.0.0:37529->95.106.72.65:48888: i/o timeout
  f01368089: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01369314: 'fail, China, Nanning', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01372569: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01372732: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01372912: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01377183: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01378236: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01378592: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01380788: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01383328: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01384113: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01384127: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01384139: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01384193: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01386812: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01387247: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01387459: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKqCbpdrXZdRvozJbyUgedBNADYi3qfiEKQKmi6eAhLFK:  * [/ip4/10.6.44.84/tcp/12288] dial tcp4 0.0.0.0:37529->10.6.44.84:12288: i/o timeout
  f01387460: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSknWyHw94aq4M5VwUemZq8tj5L6jwj1GHUx443LttFpz:  * [/ip4/10.6.44.86/tcp/12288] dial tcp4 0.0.0.0:37529->10.6.44.86:12288: i/o timeout
  f01387465: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJTCsfEJvZRErodJvvJThbY1uVNL8VZ2Z16NXUxeJMD4H:  * [/ip4/10.6.44.87/tcp/12288] dial tcp4 0.0.0.0:37529->10.6.44.87:12288: i/o timeout
  f01387466: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKYzbcKRWQHe3iZERjQaCXQnyWUgsZPMWwK6tJxBhjR2K:  * [/ip4/10.5.131.52/tcp/12288] dial tcp4 0.0.0.0:37529->10.5.131.52:12288: i/o timeout
  f01387566: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWH5NZkXAqpgTNDJ5fvBa7BwoMNvQvzktCDBcronNDyPi6:  * [/ip4/10.5.131.53/tcp/12288] dial tcp4 0.0.0.0:37529->10.5.131.53:12288: i/o timeout
  f01387570: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01387573: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01387598: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNtGtntdtpKBJkEpJyasVRqi6mJLUr3j9RCzXZCsWBD1F:  * [/ip4/10.5.131.54/tcp/12288] dial tcp4 0.0.0.0:37529->10.5.131.54:12288: i/o timeout
  f01387599: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQJUtt4i7aBbBajkR4XMD3tJ5wVCqy6aGjDwAmY1A3RJ9:  * [/ip4/10.5.131.60/tcp/12288] dial tcp4 0.0.0.0:37529->10.5.131.60:12288: i/o timeout
  f01389348: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01390323: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01390523: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA5jz2QTGnVrD5VnLGL8GobRQBVm2CwTCqKPZzsqEWfwt:  * [/ip4/221.163.91.179/tcp/14212] dial tcp4 0.0.0.0:37529->221.163.91.179:14212: i/o timeout
  f01390526: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGfAtz4qEoq5c6VyqLAv4abyxoDtACEZhMLAuZDuUj5bf:  * [/ip4/221.163.91.179/tcp/14213] dial tcp4 0.0.0.0:37529->221.163.91.179:14213: i/o timeout
  f01391127: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01392069: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01392600: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01392984: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01394448: 'fail, Korea, Hanam', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01394700: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01395920: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01396338: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01396702: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01399133: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01399539: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01401612: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01402069: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01402131: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01402625: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01403187: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01404908: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPuj83nFZM8e2kuwT7xwP5dVTBNCCNZCg6F66vLtFuCT4:  * [/ip4/218.148.84.162/tcp/30001] dial tcp4 0.0.0.0:37529->218.148.84.162:30001: i/o timeout
  f01405366: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01405369: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01407454: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01408703: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01410857: 'fail, France', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDdmEJ7pKRUoXWoHHPDbkz4CKhAvX9aD38WGFj7VUpuc7:  * [/ip4/141.94.111.5/tcp/62003] dial tcp4 0.0.0.0:37529->141.94.111.5:62003: i/o timeout
  f01412203: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01415277: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01415710: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01416862: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01417483: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01417748: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01417791: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01419959: 'fail, USA, San Diego', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNKJF1Lz6KyShXeK7b8JTdKgovzk78XskKcQPV7NTwZTq:  * [/ip4/199.73.55.234/tcp/10271] dial tcp4 199.73.55.234:10271: connect: connection refused
  f01421241: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01422327: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01422555: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01423801: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01423841: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01424422: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01424825: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDFY7zif6HrEtqKj7sVg8q9TFv7KaDiwjqXyT4BeWeavT:  * [/ip4/58.254.182.27/tcp/28888] dial tcp4 0.0.0.0:37529->58.254.182.27:28888: i/o timeout
  f01425109: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01428002: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01428149: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01430208: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01430258: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01434501: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01435542: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01436316: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01436582: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01438277: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01438656: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01442089: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01442572: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01443113: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01443898: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01444106: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01444369: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01445415: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01449869: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01450277: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01451690: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01452388: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01452645: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01452958: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01455131: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01456060: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01456213: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01456367: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01457108: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01457467: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01464360: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01464400: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01464670: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01465519: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01465786: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01466173: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPzjCnJ5mKVraZa6YbxKid88wGf6re7ZNCouu64Xxn34V:  * [/ip4/10.19.8.2/tcp/7100] dial tcp4 0.0.0.0:37529->10.19.8.2:7100: i/o timeout
  f01468040: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01468970: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01469945: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01470426: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01471413: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01472185: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01472330: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01472333: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01472508: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01474721: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01475317: 'fail, Korea, Namyangju', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01475418: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01478558: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFVze79wjy3mMNykRPn8aAtKBQYkhtr2bLieCpU6Ca9kq:  * [/ip4/10.126.6.41/tcp/8012] dial tcp4 0.0.0.0:37529->10.126.6.41:8012: i/o timeout
  f01479628: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01479781: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPVSu3VbFtL7K3uAxMvc3fdzFoKAk3MQvEpFDu16ek7V5:  * [/ip4/8.214.70.186/tcp/9999] dial tcp4 0.0.0.0:37529->8.214.70.186:9999: i/o timeout
  f01481599: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01482593: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01487740: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01491738: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01493046: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01493161: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01501599: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01501611: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01502887: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01505197: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01505234: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01506135: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01508512: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01508999: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01516766: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01516962: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01518369: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01519862: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01521158: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01521525: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01525024: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01525487: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01528010: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01531780: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01538815: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01545474: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01545883: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01562943: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01563172: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01566485: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01568769: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01568979: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01569560: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01570304: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01572626: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01572855: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01578658: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01578721: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCnhMR5JVspY1UqD4rmx6qBNdaY1FZZztQBLZLps582Dj:  * [/ip4/211.47.48.42/tcp/2157] dial tcp4 211.47.48.42:2157: connect: connection refused  * [/ip4/211.47.48.42/tcp/2129] dial tcp4 211.47.48.42:2129: connect: connection refused  * [/ip4/172.20.6.252/tcp/7100] dial tcp4 0.0.0.0:37529->172.20.6.252:7100: i/o timeout
  f01579921: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHab4mbhsUqYp1DR8ZejCbXqJqfajKS9SHvRxFBWPiaCC:  * [/ip4/139.5.201.46/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHab4mbhsUqYp1DR8ZejCbXqJqfajKS9SHvRxFBWPiaCC, but remote key matches 12D3KooWKJ4LzHkbP9yGRsZyHk1ZKXravuaf4YcdNJhiaJMGUGXt
  f01580651: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01581226: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01589943: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01594217: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01594224: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01597362: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01602086: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01603232: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01608412: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGddGgLxgw2todkoDXE2jKEaZhM7HWAzR1cKjG1e57Tcz:  * [/ip4/218.95.29.145/tcp/19976] dial tcp4 218.95.29.145:19976: connect: connection refused
  f01610285: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01612678: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01613549: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01615699: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01615947: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01617056: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01618031: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01620553: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01620831: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01623525: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01623778: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01624021: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDRD6d4e6HLNUJgAu1ssgnP5AsuQNMC1QCj8U45hwWBvS:  * [/ip4/222.112.183.193/tcp/24001] dial tcp4 0.0.0.0:37529->222.112.183.193:24001: i/o timeout
  f01624673: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01624906: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01626808: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01627811: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01629866: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01630867: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGxZP3DFGBjn2MguJFnzsyxLCjDTmWojc2FQE8zEy5fhv:  * [/ip4/85.56.132.33/tcp/24001] dial tcp4 85.56.132.33:24001: connect: connection refused
  f01631043: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01632832: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01634495: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01637026: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01639032: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01641655: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01644444: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01645816: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01653068: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01653777: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01653898: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSXfJGCnLsLSyBFuZjBaTJssw4VvBXPUcJzkX7hzo779i:  * [/ip4/8.135.103.3/tcp/11001] failed to negotiate security protocol: read tcp4 144.217.11.204:37529->8.135.103.3:11001: read: connection reset by peer
  f01654088: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01654220: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01654290: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01657051: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01657163: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01658594: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01658888: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01660008: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01660052: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01660197: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01661976: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01663007: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01666984: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01667098: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01668488: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01668871: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01669481: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01670145: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01671570: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01674133: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01674728: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01674967: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01675012: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01675781: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01676596: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01679630: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01680263: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01680274: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGsKCme8FBB4pBLcZi8bBtg2pUX4h1iDTQ29GSoZ4tXFP:  * [/ip4/59.5.126.191/tcp/2346] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGsKCme8FBB4pBLcZi8bBtg2pUX4h1iDTQ29GSoZ4tXFP, but remote key matches 12D3KooWEdYxczHYrJuzwRvHhFoVivax17BZS1PEmgmNDbbTszk9
  f01680508: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01680940: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01682523: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01683422: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01684306: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01684950: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01689498: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01691327: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWB5XiRophi8vvjmq7D9pZNSfFnGYNwNoFVAPNHPMtkT1r:  * [/ip4/85.56.132.33/tcp/24001] dial tcp4 85.56.132.33:24001: connect: connection refused
  f01691553: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found

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
  f0702302: 'nopeer, NR', // carry-over
  f0702320: 'nopeer, NR', // carry-over
  f0708763: 'nopeer, NR', // carry-over
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

  // Skip - can't make deals for some reason

  f0148910: 'skip, autolisted', // carry-over
  f0867272: 'skip, autolisted', // carry-over
  f01016198: 'skip, autolisted', // carry-over
  f01016240: 'skip, auto', // carry-over
  f01016245: 'skip, autolisted', // carry-over
  f01016246: 'skip, autolisted', // carry-over
  f01016247: 'skip, autolisted', // carry-over
  f01016248: 'skip, autolisted', // carry-over
  f01016249: 'skip, autolisted', // carry-over
  f01016254: 'skip, autolisted', // carry-over
  f01075140: 'skip, autolisted', // carry-over
  f01075154: 'skip, autolisted', // carry-over
  f01075157: 'skip, auto', // carry-over
  f01100187: 'skip, autolisted', // carry-over
  f01101543: 'skip, autolisted', // carry-over
  f01114586: 'skip, autolisted', // carry-over
  f01114587: 'skip, autolisted', // carry-over
  f01114589: 'skip, autolisted', // carry-over
  f01114592: 'skip, autolisted', // carry-over
  f01114593: 'skip, autolisted', // carry-over
  f01114595: 'skip, autolisted', // carry-over
  f01114600: 'skip, autolisted', // carry-over
  f01114802: 'skip, autolisted', // carry-over
  f01114803: 'skip, autolisted', // carry-over
  f01114807: 'skip, autolisted', // carry-over
  f01114808: 'skip, autolisted', // carry-over
  f01114824: 'skip, autolisted', // carry-over
  f01114825: 'skip, autolisted', // carry-over
  f01114826: 'skip, autolisted', // carry-over
  f01114827: 'skip, autolisted', // carry-over
  f01114928: 'skip, autolisted', // carry-over
  f01227975: 'skip, autolisted', // carry-over
  f01227998: 'skip, autolisted', // carry-over
  f01228015: 'skip, autolisted', // carry-over
  f01228088: 'skip, autolisted', // carry-over

  // Delist

  f01000: 'delist, NR - bootstrap', // carry-over
  f01001: 'delist, NR - bootstrap', // carry-over
  f01002: 'delist, NR - bootstrap', // carry-over
  f01013: 'delist, NR', // carry-over
  f01101: 'delist, China, Shanghai', // carry-over
  f01102: 'delist, China, Shandong', // carry-over
  f01154: 'delist, NR', // carry-over
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
  f02540: 'delist, USA, Mobile, Foundry', // carry-over
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
  f09569: 'delist, China, Beijing', // carry-over
  f09578: 'delist, NR', // carry-over
  f09589: 'delist, China, Changsha', // carry-over
  f09594: 'delist, NR', // carry-over
  f09610: 'delist, China, Beijing', // carry-over
  f09629: 'delist, NR', // carry-over
  f09642: 'delist, Sweden, Alvsjo', // carry-over
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
  f014365: 'delist, Australia, Turramurra + Sydney', // carry-over
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
  f019279: 'delist, Canada, Calgary', // carry-over
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
  f024008: 'delist, China, Fuzhou', // carry-over
  f024014: 'delist, China, Fuzhou', // carry-over
  f024031: 'delist, NR', // carry-over
  f024074: 'delist, NR', // carry-over
  f024085: 'delist, China, Fuzhou', // carry-over
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
  f025019: 'delist, China, Taiwan, Hsinchu', // carry-over
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
  f053088: 'delist, China, Shanghai', // carry-over
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
  f086381: 'delist, NR', // carry-over
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
  f097981: 'delist, NR', // carry-over
  f0106090: 'delist, NR', // carry-over
  f0107118: 'delist, China, Hangzhou + Zhejiang', // carry-over
  f0107171: 'delist, China, Karamay', // carry-over
  f0108979: 'delist, Korea, Bupyeong-gu', // carry-over
  f0109163: 'delist, Korea, Songpa-gu', // carry-over
  f0109349: 'delist, NR', // carry-over
  f0109901: 'delist, China, Huludao', // carry-over
  f0110101: 'delist, Korea, Goyang-si', // carry-over
  f0110198: 'delist, Korea, Hwaseong-si', // carry-over
  f0110488: 'delist, China, Chongqing', // carry-over
  f0110803: 'delist, Korea', // carry-over
  f0111885: 'delist, Korea, Bucheon-si, WINNERS', // carry-over
  f0112027: 'delist, France', // carry-over
  f0113659: 'delist, NR', // carry-over
  f0113664: 'delist, France', // carry-over
  f0114885: 'delist, NR', // carry-over
  f0116513: 'delist, NR', // carry-over
  f0116707: 'delist, Germany, Dusseldorf', // carry-over
  f0119336: 'delist, Canada, Ottawa', // carry-over
  f0120141: 'delist, Korea, Gangnam-gu', // carry-over
  f0122410: 'delist, China, Shanghai', // carry-over
  f0124126: 'delist, NR', // carry-over
  f0124335: 'delist, Finland, Helsinki', // carry-over
  f0125962: 'delist, Korea, Yongin-si', // carry-over
  f0126376: 'delist, NR', // carry-over
  f0126535: 'delist, China, Hong Kong', // carry-over
  f0126661: 'delist, NR', // carry-over
  f0127151: 'delist, Korea, Yongin-si', // carry-over
  f0127157: 'delist, Korea, Yongin-si', // carry-over
  f0127256: 'delist, Korea, Yongin-si', // carry-over
  f0127569: 'delist, NR', // carry-over
  f0128191: 'delist, Korea, Gangnam-gu', // carry-over
  f0128238: 'delist, Korea, Yongin-si', // carry-over
  f0128239: 'delist, Korea, Yongin-si', // carry-over
  f0128242: 'delist, Korea, Yongin-si', // carry-over
  f0131359: 'delist, China, Fuzhou', // carry-over
  f0131857: 'delist, China, Chongqing', // carry-over
  f0132461: 'delist, Korea, Daegu', // carry-over
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
  f0155515: 'delist, NR', // carry-over
  f0156232: 'delist, China, Fuzhou', // carry-over
  f0160291: 'delist, USA', // carry-over
  f0164326: 'delist, China, Beijing', // carry-over
  f0165533: 'delist, NR', // carry-over
  f0167458: 'delist, NR', // carry-over
  f0168371: 'delist, Korea, Namyangju', // carry-over
  f0169153: 'delist, China, Chengdu', // carry-over
  f0213894: 'delist, China, Hangzhou', // carry-over
  f0214181: 'delist, Australia, Mosman', // carry-over
  f0215360: 'delist, France', // carry-over
  f0215404: 'delist, China, Suzhou', // carry-over
  f0216068: 'delist, Romania, Iasi', // carry-over
  f0216139: 'delist, Korea, Goyang-si', // carry-over
  f0219415: 'delist, USA, Boardman', // carry-over
  f0219631: 'delist, USA, Council Bluffs', // carry-over
  f0220911: 'delist, NR', // carry-over
  f0221135: 'delist, USA, Atlanta', // carry-over
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
  f0239251: 'delist, Korea, Uiwang', // carry-over
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
  f0405129: 'delist, China, Fujian', // carry-over
  f0408184: 'delist, Switzerland', // carry-over
  f0408696: 'delist, China, Taiwan, Taipei', // carry-over
  f0410023: 'delist, NR', // carry-over
  f0411786: 'delist, Korea, Busan', // carry-over
  f0413178: 'delist, China, Suqian', // carry-over
  f0414184: 'delist, Spain, Madrid', // carry-over
  f0417748: 'delist, China, Changsha', // carry-over
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
  f0480195: 'delist, NR', // carry-over
  f0482136: 'delist, China, Fuzhou', // carry-over
  f0490090: 'delist, Korea, Seoul', // carry-over
  f0492222: 'delist, Canada, Vancouver', // carry-over
  f0492283: 'delist, USA, Quail Valley', // carry-over
  f0492295: 'delist, China, Shenzhen', // carry-over
  f0492481: 'delist, NR', // carry-over
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
  f0690964: 'delist, NR', // carry-over
  f0697132: 'delist, Korea, Busan', // carry-over
  f0697162: 'delist, Finland, Helsinki', // carry-over
  f0698866: 'delist, Finland, Helsinki', // carry-over
  f0702054: 'delist, NR', // carry-over
  f0702301: 'delist, NR', // carry-over
  f0706937: 'delist, Korea, Bucheon-si', // carry-over
  f0708764: 'delist, NR', // carry-over
  f0712678: 'delist, Korea, Gangseo-gu', // carry-over
  f0713585: 'delist, Russia', // carry-over
  f0715707: 'delist, Japan, Yokohama', // carry-over
  f0718079: 'delist, NR', // carry-over
  f0720716: 'delist, Korea, Seoul', // carry-over
  f0720762: 'delist, Korea, Incheon', // carry-over
  f0721545: 'delist, Korea, Seo-gu', // carry-over
  f0723600: 'delist, China, Taiwan, Hsinchu', // carry-over
  f0723641: 'delist, NR', // carry-over
  f0724179: 'delist, China, Wenzhou', // carry-over
  f0724192: 'delist, Korea, Hwaseong-si', // carry-over
  f0727067: 'delist, Norway', // carry-over
  f0730529: 'delist, USA, Boardman', // carry-over
  f0732291: 'delist, Korea, Incheon', // carry-over
  f0733076: 'delist, NR', // carry-over
  f0734051: 'delist, Korea, Hwaseong-si', // carry-over
  f0744199: 'delist, China, Taiwan, Hsinchu', // carry-over
  f0751590: 'delist, USA', // carry-over
  f0751619: 'delist, Korea, Ulsan', // carry-over
  f0752215: 'delist, USA, Huntersville', // carry-over
  f0752458: 'delist, Australia, Sydney', // carry-over
  f0754755: 'delist, NR', // carry-over
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
  f0806336: 'delist, NR', // carry-over
  f0807446: 'delist, NR', // carry-over
  f0808705: 'delist, China, Wenzhou', // carry-over
  f0810358: 'delist, Japan, Tokyo', // carry-over
  f0810756: 'delist, Romania, Bucharest', // carry-over
  f0811878: 'delist, NR', // carry-over
  f0816232: 'delist, Korea, Seoul', // carry-over
  f0816321: 'delist, NR', // carry-over
  f0816420: 'delist, China, Harbin', // carry-over
  f0818665: 'delist, Romania, Bucharest', // carry-over
  f0822032: 'delist, Korea, Incheon', // carry-over
  f0822203: 'delist, Korea, Seoul', // carry-over
  f0822674: 'delist, Korea, Seoul', // carry-over
  f0826452: 'delist, NR', // carry-over
  f0827934: 'delist, USA, Port Jefferson', // carry-over
  f0832312: 'delist, USA, Auburn', // carry-over
  f0835613: 'delist, NR', // carry-over
  f0839767: 'delist, Korea, Suwon', // carry-over
  f0843728: 'delist, France', // carry-over
  f0845539: 'delist, Korea, Busan', // carry-over
  f0845602: 'delist, NR', // carry-over
  f0846716: 'delist, USA, Santa Clara', // carry-over
  f0853597: 'delist, Korea, Gimpo-si', // carry-over
  f0856336: 'delist, NR', // carry-over
  f0857779: 'delist, Korea, Dongjak-gu', // carry-over
  f0859880: "delist, China, Ya'an", // carry-over
  f0862933: 'delist, USA, Huntersville', // carry-over
  f0866501: 'delist, NR', // carry-over
  f0866680: 'delist, China, Henan', // carry-over
  f0869590: 'delist, USA, Salt Lake City', // carry-over
  f0871546: 'delist, NR', // carry-over
  f0871928: 'delist, China, Taiwan, Taipei', // carry-over
  f0872002: 'delist, NR', // carry-over
  f0873601: 'delist, Romania, Bucharest', // carry-over
  f0873852: 'delist, China, Yangzhou', // carry-over
  f0873874: 'delist, NR', // carry-over
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
  f0984905: 'delist, NR', // carry-over
  f0984915: 'delist, China, Tianjin', // carry-over
  f0985013: 'delist, Korea, Incheon', // carry-over
  f0986118: 'delist, Korea, Incheon', // carry-over
  f01015491: 'delist, Canada, Montreal', // carry-over
  f01016847: 'delist, China, Henan', // carry-over
  f01017177: 'delist, Japan, Tokyo', // carry-over
  f01017269: 'delist, USA, Fort Lauterdale', // carry-over
  f01019009: 'delist, China, Henan', // carry-over
  f01019892: 'delist, USA, Lake Elsinore', // carry-over
  f01021896: 'delist, Korea, Seoul', // carry-over
  f01029201: 'delist, China, Beijing', // carry-over
  f01029682: 'delist, USA, Palm Harbour', // carry-over
  f01031325: 'delist, Korea, Busan', // carry-over
  f01031351: 'delist, USA, Palm Harbour', // carry-over
  f01032055: 'delist, NR', // carry-over
  f01034337: 'delist, Japan, Tokyo', // carry-over
  f01036391: 'delist, Korea, Jung-gu', // carry-over
  f01037829: 'delist, USA, Palm Harbour', // carry-over
  f01038170: 'delist, China, Shenzhen', // carry-over
  f01039327: 'delist, Indonesia, Denpasar', // carry-over
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
  f01068331: 'delist, NR', // carry-over
  f01070040: 'delist, NR', // carry-over
  f01072655: 'delist, Sweden, Gothenburg', // carry-over
  f01075904: 'delist, NR', // carry-over
  f01079646: 'delist, China, Shenzhen', // carry-over
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
  f01099967: 'delist, USA, London', // carry-over
  f01101881: 'delist, NR', // carry-over
  f01101884: 'delist, NR', // carry-over
  f01102006: 'delist, NR', // carry-over
  f01102085: 'delist, NR', // carry-over
  f01103281: 'delist, China, Taizhou', // carry-over
  f01104053: 'delist, USA', // carry-over
  f01104210: 'delist, China, Changsha', // carry-over
  f01105377: 'delist, Korea, Jung-gu', // carry-over
  f01105927: "delist, China, Xi'an", // carry-over
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
  f01112955: 'delist, China, Sichuan', // carry-over
  f01113597: 'delist, NR', // carry-over
  f01113723: 'delist, USA, Gilbert', // carry-over
  f01114364: 'delist, USA, Allentown', // carry-over
  f01114420: 'delist, Bulgaria, Sofia', // carry-over
  f01115274: 'delist, Japan, Yokohama', // carry-over
  f01116725: 'delist, USA, Gilbert', // carry-over
  f01116796: 'delist, USA, Gilbert', // carry-over
  f01118185: 'delist, USA, Gilbert', // carry-over
  f01118563: 'delist, USA, Gilbert', // carry-over
  f01120547: 'delist, USA, Gilbert', // carry-over
  f01121994: 'delist, China, Nanning', // carry-over
  f01122113: 'delist, Japan, Tokyo', // carry-over
  f01122412: 'delist, China', // carry-over
  f01124409: 'delist, China, Hangzhou', // carry-over
  f01124710: 'delist, autolisted', // carry-over
  f01124728: 'delist, Japan, Yokohama', // carry-over
  f01125552: 'delist, Korea, Jung-gu', // carry-over
  f01132686: 'delist, China, Taiwan, Taoyuan City', // carry-over
  f01133668: 'delist, China, Zhejiang', // carry-over
  f01134282: 'delist, autolisted', // carry-over
  f01136274: 'delist, USA, Orlando', // carry-over
  f01136391: 'delist, autolisted', // carry-over
  f01136467: 'delist, autolisted', // carry-over
  f01139870: 'delist, autolisted', // carry-over
  f01140920: 'delist, autolisted', // carry-over
  f01141603: 'delist, autolisted', // carry-over
  f01141947: 'delist, Korea, Uiwang', // carry-over
  f01142476: 'delist, autolisted', // carry-over
  f01145192: 'delist, China, Zhejiang', // carry-over
  f01145325: 'delist, autolisted', // carry-over
  f01146327: 'delist, China, Fuzhou', // carry-over
  f01147907: 'delist, autolisted', // carry-over
  f01148221: 'delist, autolisted', // carry-over
  f01148258: 'delist, autolisted', // carry-over
  f01148814: 'delist, autolisted', // carry-over
  f01153758: 'delist, autolisted', // carry-over
  f01153833: 'delist, autolisted', // carry-over
  f01154819: 'delist, autolisted', // carry-over
  f01157880: 'delist, autolisted', // carry-over
  f01157952: 'delist, Sweden, Gothenburg', // carry-over
  f01159528: 'delist, autolisted', // carry-over
  f01161910: 'delist, USA, Ashburn', // carry-over
  f01161992: 'delist, autolisted', // carry-over
  f01162286: 'delist, autolisted', // carry-over
  f01163657: 'delist, autolisted', // carry-over
  f01164271: 'delist, autolisted', // carry-over
  f01165168: 'delist, autolisted', // carry-over
  f01167953: 'delist, China, Shanghai', // carry-over
  f01169194: 'delist, autolisted', // carry-over
  f01170200: 'delist, autolisted', // carry-over
  f01171920: 'delist, Sweden, Gothenburg', // carry-over
  f01174334: 'delist, autolisted', // carry-over
  f01174378: 'delist, autolisted', // carry-over
  f01175050: 'delist, autolisted', // carry-over
  f01176671: 'delist, autolisted', // carry-over
  f01176782: 'delist, autolisted', // carry-over
  f01178927: 'delist, autolisted', // carry-over
  f01179798: 'delist, autolisted', // carry-over
  f01185227: 'delist, autolisted', // carry-over
  f01186112: 'delist, autolisted', // carry-over
  f01186610: 'delist, autolisted', // carry-over
  f01188373: 'delist, autolisted', // carry-over
  f01189523: 'delist, autolisted', // carry-over
  f01191117: 'delist, autolisted', // carry-over
  f01192502: 'delist, autolisted', // carry-over
  f01192508: 'delist, autolisted', // carry-over
  f01192833: 'delist, autolisted', // carry-over
  f01195263: 'delist, autolisted', // carry-over
  f01195493: 'delist, autolisted', // carry-over
  f01198183: 'delist, autolisted', // carry-over
  f01199962: 'delist, autolisted', // carry-over
  f01200082: 'delist, autolisted', // carry-over
  f01203627: 'delist, autolisted', // carry-over
  f01205144: 'delist, autolisted', // carry-over
  f01209085: 'delist, autolisted', // carry-over
  f01209607: 'delist, autolisted', // carry-over
  f01211218: 'delist, autolisted', // carry-over
  f01213157: 'delist, autolisted', // carry-over
  f01214272: 'delist, autolisted', // carry-over
  f01215615: 'delist, autolisted', // carry-over
  f01236669: 'delist, autolisted', // carry-over
  f01241194: 'delist, autolisted', // carry-over
  f01275559: 'delist, autolisted', // carry-over
  f01298698: 'delist, autolisted', // carry-over
  f01324392: 'delist, China', // carry-over
  f01340418: 'delist, autolisted', // carry-over
  f01347355: 'delist, autolisted', // carry-over
  f01347695: 'delist, autolisted', // carry-over
  f01375249: 'delist, autolisted', // carry-over
  f01381814: 'delist, autolisted', // carry-over
  f01384461: 'delist, autolisted', // carry-over
  f01392816: 'delist, autolisted', // carry-over
  f01396576: 'delist, China, Ordos', // carry-over
  f01428785: 'delist, autolisted', // carry-over
  f01444172: 'delist, autolisted', // carry-over
  f01445517: 'delist, China, Chongqing', // carry-over
  f01449500: 'delist, autolisted', // carry-over
  f01461749: 'delist, autolisted', // carry-over
  f01471667: 'delist, autolisted', // carry-over
  f01473510: 'delist, autolisted', // carry-over
  f01512203: 'delist, autolisted', // carry-over
  f01548679: 'delist, autolisted', // carry-over
  f01552509: 'delist, autolisted', // carry-over
  f01567587: 'delist, autolisted', // carry-over
  f01597766: 'delist, autolisted', // carry-over
  f01598033: 'delist, autolisted', // carry-over
  f01644938: 'delist, autolisted'
}

export default annotations
