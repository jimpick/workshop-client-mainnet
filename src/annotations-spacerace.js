// Small file test results
//
// This are based on a test run (usually once a day) where I attempt
// to make deals for a small file (about ~90kB) with as many miners as
// possible. It is expected that most miners will filter based on size.

// Additional testing will be performed with larger files with
// selected miners (>128MiB of data)

// See annotations-spacerace-slingshot-medium.js for larger file results

const annotations = {
  // New

  // Active

  // Active-sealing (active, with in-flight sealing)

  f01241: 'active-sealing, USA, Portland, 6block', // 1225317
  f01247: 'active-sealing, Canada, Montreal, BigChungus™', // 1225316
  f01272: 'active-sealing, Singapore', // 1225321
  f01287: 'active-sealing, China, Jiaxing, MaiTian', // 1225318
  f02415: 'active-sealing, China, Hong Kong', // 1225268
  f02501: 'active-sealing, USA, Portland, 6block', // 1225267
  f02514: 'active-sealing, USA, Portland, 6block', // 1225273
  f02622: 'active-sealing, USA, Portland, 6block', // 1225274
  f02623: 'active-sealing, USA, Portland, 6block', // 1225270
  f02633: 'active-sealing, China, Hong Kong', // 1225272
  f02645: 'active-sealing, China, Hong Kong', // 1225269
  f02665: 'active-sealing, Netherlands, Amsterdam, fm-ops', // 1225579
  f03134: 'active-sealing, China, Cangzhou, 乔木信息', // 1225350
  f03273: 'active-sealing, USA, Portland, 6block', // 1225322
  f03274: 'active-sealing, USA, Portland, 6block', // 1225325
  f03275: 'active-sealing, USA, Portland, 6block', // 1225277
  f03328: 'active-sealing, China, Xinxiang', // 1225473
  f03339: 'active-sealing, China, Luzhou, benxun', // 1225278
  f03491: 'active-sealing, China, Hong Kong', // 1225333
  f05315: 'active-sealing, USA, Portland, 6block', // 1225271
  f05316: 'active-sealing, USA, Portland, 6block', // 1225328
  f07709: 'active-sealing, Korea, Dongjak-gu', // 1225499
  f07819: 'active-sealing, China, Wuxi, YC--wuxi', // 1225330
  f07850: 'active-sealing, USA, Portland, 6block', // 1225280
  f08019: 'active-sealing, China, Yantai, 三合', // 1225326
  f08025: 'active-sealing, China, Hong Kong', // 1225281
  f08157: 'active-sealing, China, Beijing + Germany, Frankfurt, 超星际', // 1225370
  f08383: 'active-sealing, USA, Portland, 6block', // 1225335
  f08403: 'active-sealing, UK, Lower Slaughter', // 1225338
  f09693: 'active-sealing, USA, Portland + Singapore', // 1225282
  f09696: 'active-sealing, USA, Portland + Singapore', // 1225340
  f010241: 'active-sealing, China, Beijing + USA, Portland', // 1225356
  f010247: 'active-sealing, China, Yantai', // 1225344
  f010253: 'active-sealing, China, Beijing + USA, Portland', // 1225342
  f010399: 'active-sealing, China, Guangzhou', // 1225347
  f010446: 'active-sealing, Netherlands', // 1225341
  f010479: 'active-sealing, France, Fontenay-sous-Bois', // 1225345
  f010491: 'active-sealing, China, Shenzhen', // 1225279
  f010498: 'active-sealing, China, Shenzhen', // 1225348
  f010505: 'active-sealing, China, Wuhan', // 1225417
  f010507: 'active-sealing, China, Hangzhou', // 1225358
  f010558: 'active-sealing, China, Shenzhen + Hong Kong', // 1225357
  f014768: 'active-sealing, Singapore, @Funk', // 1225349
  f015734: 'active-sealing, China, Qingdao', // 1225361
  f015927: 'active-sealing, USA, East Islip', // 1225442
  f018780: 'active-sealing, Singapore + Germany, Frankfurt + USA', // 1225283
  f018781: 'active-sealing, Singapore + Germany, Frankfurt + USA', // 1225285
  f018782: 'active-sealing, Singapore + Germany, Frankfurt + USA', // 1225286
  f019029: 'active-sealing, Serbia, Boljevac', // 1225430
  f019240: 'active-sealing, China, Beijing', // 1225284
  f019437: 'active-sealing, Korea, Guro-gu', // 1225360
  f019824: 'active-sealing, USA', // 1225480
  f020378: 'active-sealing, Bulgaria, Asenovgrad', // 1225365
  f020385: 'active-sealing, Korea, Incheon', // 1225298
  f020523: 'active-sealing, China, Suzhou', // 1225289
  f022125: 'active-sealing, China, Shenzhen', // 1225297
  f022227: 'active-sealing, China, Jiangsu', // 1225369
  f022522: 'active-sealing, China, Dongguan', // 1225363
  f022566: 'active-sealing, China, Nanchong', // 1225288
  f022853: 'active-sealing, China, Fuzhou', // 1225287
  f022922: 'active-sealing, China, Shenzhen', // 1225377
  f023179: 'active-sealing, China, Fuzhou', // 1225376
  f023495: 'active-sealing, China, Beijing + USA, Portland', // 1225300
  f023825: 'active-sealing, USA, Portland', // 1225294
  f024015: 'active-sealing, USA, Portland', // 1225296
  f024016: 'active-sealing, USA, Portland', // 1225292
  f024156: 'active-sealing, USA', // 1225375
  f024511: 'active-sealing, NR', // 1225293
  f024550: 'active-sealing, China, Wenzhou', // 1225383
  f025017: 'active-sealing, China, Hefei', // 1225371
  f029401: 'active-sealing, USA, Portland + New Castle', // 1225299
  f029404: 'active-sealing, USA, Portland + New Castle', // 1225291
  f032913: 'active-sealing, China, Shenzhen', // 1225378
  f032934: 'active-sealing, Korea, Incheon', // 1225385
  f033189: 'active-sealing, China, Zhejiang', // 1225290
  f033517: 'active-sealing, China, Changsha', // 1225387
  f034039: 'active-sealing, Russia', // 1225381
  f034362: 'active-sealing, China, Sichuan', // 1225384
  f034701: 'active-sealing, China, Shenzhen', // 1225319
  f035436: 'active-sealing, China, Jiangsu', // 1225396
  f038299: 'active-sealing, Russia, St. Petersburg', // 1225310
  f039515: 'active-sealing, China, Chongqing', // 1225392
  f039800: 'active-sealing, China, Chengdu', // 1225303
  f042540: 'active-sealing, China, Beijing + USA, Portland + Newcastle', // 1225505
  f042558: 'active-sealing, China, Beijing + USA, Portland + Newcastle', // 1225314
  f042635: 'active-sealing, China, Beijing + USA, Portland + Newcastle', // 1225451
  f043929: 'active-sealing, China, Beijing', // 1225395
  f044160: 'active-sealing, China, Guangzhou', // 1225407
  f047419: 'active-sealing, USA, Waukesha', // 1225389
  f048135: 'active-sealing, China, Chongqing', // 1225320
  f048540: 'active-sealing, China, Xinxiang', // 1225402
  f052447: 'active-sealing, China, Beijing + USA, Portland + New Castle', // 1225459
  f055040: 'active-sealing, China, Fujian', // 1225403
  f056611: 'active-sealing, USA, Portland + New Castle', // 1225312
  f057560: 'active-sealing, NR', // 1225667
  f057614: 'active-sealing, USA, Portland + New Castle', // 1225315
  f059740: 'active-sealing, Germany, Korschenbroich', // 1225311

  // Sealing

  f01278: 'sealing, USA, Grand Rapids, MiMiner', // 1225493
  f01799: 'sealing, China, Jinan, TokenHome', // 1225404
  f01800: 'sealing, China, Shenzhen + Chengdu', // 1225527
  f02668: 'sealing, China, Chengdu', // 1225608
  f02823: 'sealing, China, Chengdu', // 1225481
  f02824: 'sealing, China, Chengdu', // 1225398
  f03222: 'sealing, China, Yuncheong, 星云矿池', // 1225418
  f03264: 'sealing, Korea, Bucheon-si', // 1225415
  f03302: 'sealing, China, Chengdu', // 1225619
  f03340: "sealing, China, Xi'an", // 1225421
  f03345: 'sealing, China, Fuzhou, chh', // 1225408
  f03347: 'sealing, China, Shenzhen', // 1225633
  f03364: 'sealing, China, Guangzhou', // 1225419
  f03482: 'sealing, China, Wuxi', // 1225420
  f04443: 'sealing, China, Shanghai, 罗良科技', // 1225528
  f05317: 'sealing, USA, Portland', // 1225535
  f07945: 'sealing, China, Dongguan', // 1225573
  f07990: 'sealing, China, Hong Kong', // 1225413
  f08103: 'sealing, China, Foshan, 花生酱肠粉', // 1225414
  f08204: 'sealing, USA, St. Louis', // 1225410
  f08482: 'sealing, USA, Athol, @why', // 1225427
  f010088: 'sealing, DNS:purumine.com', // 1225534
  f010493: 'sealing, China, Shanghai', // 1225423
  f010501: 'sealing, China, Hangzhou', // 1225426
  f010513: 'sealing, China, Chongqing', // 1225445
  f010523: 'sealing, China, Beijing', // 1225422
  f010528: 'sealing, China, Chongqing', // 1225424
  f014569: 'sealing, NR', // 1225533
  f015233: 'sealing, China, Nanjing', // 1225425
  f015747: 'sealing, Japan, Setagaya-ku', // 1225431
  f015877: 'sealing, China, Jiaxing + USA', // 1225443
  f016276: 'sealing, China, Beijing', // 1225578
  f016511: 'sealing, China, Beijing', // 1225504
  f016594: 'sealing, Germany', // 1225428
  f017242: 'sealing, China, Guangdong', // 1225898
  f018783: 'sealing, Singapore + Germany, Frankfurt + USA', // 1225490
  f018784: 'sealing, Singapore + Germany, Frankfurt + USA', // 1225486
  f018785: 'sealing, Singapore + Germany, Frankfurt + USA', // 1225489
  f019041: 'sealing, Singapore', // 1225444
  f019243: 'sealing, USA, Jackson', // 1225429
  f019806: 'sealing, China, Beijing', // 1225507
  f020436: 'sealing, China, Beijing', // 1225433
  f020489: 'sealing, China, Lioaning', // 1225436
  f020605: 'sealing, China, Yibin', // 1225446
  f020928: 'sealing, China, Deyang + Singapore', // 1225439
  f021075: 'sealing, China, Chengdu', // 1225432
  f021339: 'sealing, China, Jiaxing', // 1225438
  f021532: 'sealing, China, Shanghai', // 1225449
  f021535: 'sealing, China, Chengdu', // 1225435
  f021583: 'sealing, China, Jiaxing', // 1225458
  f021716: 'sealing, New Zealand, Wellington', // 1225440
  f022261: 'sealing, China, Luzhou', // 1225450
  f022308: 'sealing, NR', // 1225509
  f023013: 'sealing, China, Hong Kong', // 1225456
  f023492: 'sealing, China, Beijing', // 1225778
  f023581: 'sealing, China, Hong Kong', // 1225591
  f023843: 'sealing, NR', // 1225437
  f023971: 'sealing, USA, @Brian Y', // 1225441
  f024184: 'sealing, Korea, Gangnam-gu', // 1225453
  f024468: 'sealing, China, Shenzhen', // 1225455
  f025019: 'sealing, China, Taiwan, Hsinchu', // 1225491
  f025044: 'sealing, undefined', // 1225457
  f029368: 'sealing, Korea, Gangseo-gu', // 1225492
  f030125: 'sealing, China, Nantong', // 1225552
  f030327: 'sealing, China, Beijing', // 1225460
  f030335: 'sealing, China, Fujian', // 1225583
  f030347: 'sealing, China, Zhejiang', // 1225564
  f030384: 'sealing, undefined', // 1225816
  f033113: 'sealing, China, Wuxi', // 1225794
  f034777: 'sealing, China, Chengdu', // 1225461
  f040218: 'sealing, China, Wuxi', // 1225517
  f042391: 'sealing, China, Fuzhou', // 1225454
  f044605: 'sealing, China, Suzhou', // 1225324
  f045714: 'sealing, Korea, Busan', // 1225511
  f046426: 'sealing, China, Beijing', // 1225466
  f049911: 'sealing, NR', // 1226076
  f050260: 'sealing, China, Suzhou', // 1225336
  f053037: 'sealing, China, Hefei', // 1225513
  f053088: 'sealing, China, Shanghai', // 1225465
  f053255: 'sealing, Korea, Seoul', // 1225602
  f053916: 'sealing, USA, Concord', // 1225479
  f054163: 'sealing, China, Dongguan', // 1225472
  f054370: 'sealing, China, Dongguan', // 1225519
  f054677: 'sealing, Finland, Helsinki', // 1225515
  f055102: 'sealing, NR', // 1226089
  f055123: 'sealing, Korea, Busan', // 1225471
  f055132: 'sealing, NR', // 1226090
  f055171: 'sealing, China, Maoming', // 1225544
  f055522: 'sealing, USA', // 1225542
  f055538: 'sealing, Italy, Genoa', // 1225520
  f056573: 'sealing, China, Sichuan', // 1225516
  f057115: 'sealing, China, Nanyang', // 1225589
  f057368: 'sealing, Korea, Gyeonggi-do', // 1225475
  f057466: 'sealing, China, Guangzhou', // 1225586
  f057842: 'sealing, Korea, Gyeonggi-do', // 1225470
  f058000: 'sealing, China, Suzhou', // 1225484
  f058168: 'sealing, Korea, Gyeonggi-do', // 1225476
  f058369: 'sealing, USA, Bow', // 1225477
  f058374: 'sealing, USA', // 1225478
  f059788: 'sealing, China, Beijing', // 1225334
  f060072: 'sealing, China, Chongqing', // 1225521
  f060634: 'sealing, China, Shenzhen + USA', // 1225337
  f061059: 'sealing, China, Beijing', // 1225522
  f061407: 'sealing, China, Shenzhen', // 1225332
  f061740: 'sealing, USA, Portland + New Castle', // 1225327
  f062204: 'sealing, China, Hong Kong', // 1225525
  f062260: 'sealing, China, Guangzhou', // 1225530
  f062318: 'sealing, Korea, Naju', // 1225523
  f062334: 'sealing, USA, Portland + New Castle', // 1225531
  f062353: 'sealing, Germany', // 1225487
  f062375: 'sealing, Korea, Gyeonggi-do', // 1225532
  f062518: 'sealing, Korea, Gwangju', // 1225588
  f062619: 'sealing, NR', // 1225488
  f062981: 'sealing, China, Sichuan', // 1225343
  f063780: 'sealing, China, Shenyang', // 1225354
  f063921: 'sealing, China, Ili', // 1225359
  f063996: 'sealing, China, Sichuan', // 1225353
  f064218: 'sealing, USA, Kirkland', // 1225352
  f064664: 'sealing, Korea, Gyeonggi-do', // 1225351
  f064955: 'sealing, USA, New Castle', // 1225374
  f064980: 'sealing, Korea, Gyeonggi-do', // 1225366
  f065011: 'sealing, Korea, Gyeonggi-do', // 1225372
  f065141: 'sealing, China, Fuzhou', // 1225367
  f065168: 'sealing, USA, Daytona Beach', // 1225364
  f065200: 'sealing, China, Yibin', // 1225388
  f065225: 'sealing, China, Dongguan', // 1225379
  f065280: 'sealing, Korea, Songpa-gu', // 1225397
  f065426: 'sealing, Korea, Gimpo-si', // 1225382
  f065597: 'sealing, China, Dongguan', // 1225391
  f065718: 'sealing, China, Taiwan, Hsinchu', // 1225401
  f065726: 'sealing, Korea, Gyeonggi-do', // 1225406
  f065732: 'sealing, Korea, Gyeonggi-do', // 1225393
  f065853: 'sealing, Korea, Seongnam-si', // 1225394

  // Stuck

  f01154: 'stuck, Sweden, Alvsjo', // FundsEnsured: about 4 hours
  f08346: 'stuck, Korea', // CheckForAcceptance: about 4 hours
  f09642: 'stuck, Sweden, Alvsjo', // FundsEnsured: about 4 hours
  f010400: 'stuck, China, Shenyang', // FundsEnsured: about 5 hours
  f015771: 'stuck, Brazil, Sao Paulo', // FundsEnsured: about 4 hours
  f019534: 'stuck, USA, Beaverton', // CheckForAcceptance: about 5 hours
  f023016: 'stuck, NR', // CheckForAcceptance: about 4 hours
  f023939: 'stuck, NR', // FundsEnsured: about 4 hours
  f029524: 'stuck, China, Hong Kong', // CheckForAcceptance: about 5 hours
  f049751: 'stuck, Australia, Sydney', // FundsEnsured: about 4 hours
  f049772: 'stuck, Korea, Seoul', // FundsEnsured: about 5 hours
  f052767: 'stuck, Korea, Seoul', // FundsEnsured: about 4 hours
  f059190: 'stuck, Poland, Krakow', // CheckForAcceptance: about 5 hours
  f059280: 'stuck, China, Shenzhen', // FundsEnsured: about 4 hours
  f062445: 'stuck, China, Shenzhen', // FundsEnsured: about 5 hours
  f063173: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 5 hours
  f064442: 'stuck, Japan', // CheckForAcceptance: about 5 hours
  f064668: 'stuck, China, Hong Kong', // CheckForAcceptance: about 5 hours

  // Busy

  // Min Size

  f01234: 'min-size, Belgium, De Klinge, Eliovp', // 131072 < 268435456
  f01238: 'min-size, Vietnam, Hanoi, FILECOIN-VIETNAM', // 131072 < 10485760
  f01240: 'min-size, Netherlands, HidNand', // 131072 < 268435456
  f01276: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 2097152
  f01277: 'min-size, Sweden, Stockholm, tvsthlm', // 131072 < 134217728
  f01291: 'min-size, Sweden, Stockholm, tvsthlm', // 131072 < 134217728
  f01782:
    'min-size, China, Hong Kong + Singapore + USA, Portland, hellofil.com', // 131072 < 1048576
  f02387: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 2097152
  f02388: 'min-size, Netherlands, Amersfoort, Kroketje', // 131072 < 16777216
  f02401: 'min-size, Canada, Chambly, NBFS Canada', // 131072 < 2097152
  f02423: 'min-size, Ukraine, Kyiv, igowreck', // 131072 < 134217728
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 131072 < 1048576
  f02606: 'min-size, China, Shanghai', // 131072 < 1048576
  f02619: 'min-size, China, Beijing, Blockcasting', // 131072 < 134217728
  f02620: 'min-size, Poland, Krakow, @magik6k', // 131072 < 1048576
  f03224: 'min-size, Ukraine, Irpin, oboltusov', // 131072 < 134217728
  f03624: 'min-size, Germany, Chemnitz, ode', // 131072 < 134217728
  f05664: 'min-size, China, Shenzhen, 艾比特网络科技', // 131072 < 1048576
  f09569: 'min-size, China, Beijing', // 131072 < 536870912
  f09848: 'min-size, USA', // 131072 < 134217728
  f010617: 'min-size, Canada, Surrey, @feiya200', // 131072 < 67108864
  f014394: 'min-size, China, Suzhou', // 131072 < 134217728
  f014409: 'min-size, USA, Waxhaw', // 131072 < 134217728
  f015941: 'min-size, Ukraine, Kyiv', // 131072 < 134217728
  f018501: 'min-size, China, Beijing', // 131072 < 1048576
  f019100: 'min-size, Romania, Cluj-Napoca', // 131072 < 16777216
  f019104: 'min-size, Canada, Chambly', // 131072 < 16777216
  f019551: 'min-size, UK, Birmingham, @Neofix AF', // 131072 < 33554432
  f020904: 'min-size, Korea, Uijeongbu-si', // 131072 < 33554432
  f022130: 'min-size, Korea, Seodaemun-gu', // 131072 < 134217728
  f022142: 'min-size, USA, Queens', // 131072 < 524288
  f022163: 'min-size, NR', // 131072 < 12582912
  f022352: 'min-size, Norway, Borgen', // 131072 < 8388608
  f023467: 'min-size, Norway, Oslo', // 131072 < 4194304
  f023868: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023869: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023870: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023871: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023876: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023977: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023978: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023980: 'min-size, China, Fuzhou', // 131072 < 268435456
  f024012: 'min-size, China, Fuzhou', // 131072 < 268435456
  f024013: 'min-size, China, Fuzhou', // 131072 < 268435456
  f024014: 'min-size, China, Fuzhou', // 131072 < 268435456
  f024136: 'min-size, China, Fuzhou', // 131072 < 268435456
  f024146: 'min-size, China, Fuzhou', // 131072 < 134217728
  f024147: 'min-size, China, Fuzhou', // 131072 < 134217728
  f024148: 'min-size, China, Fuzhou', // 131072 < 134217728
  f025007: 'min-size, Korea, Gyeonggi-do', // 131072 < 134217728
  f025025: 'min-size, China, Qingdao', // 131072 < 134217728
  f039235: 'min-size, NR', // 131072 < 1048576
  f040173: 'min-size, Ukraine, Ternopil', // 131072 < 1048576
  f044021: 'min-size, China, Dongguan', // 131072 < 104857600
  f047858: 'min-size, China, Wuhan', // 131072 < 134217728
  f048172: 'min-size, China, Suzhou', // 131072 < 134217728
  f048192: 'min-size, China, Suzhou', // 131072 < 134217728
  f049882: 'min-size, Netherlands, De Rijp', // 131072 < 268435456

  // Min Ask

  f01279: 'min-ask, China, Sichuan', // 20000000 < 122070312
  f02301: 'min-ask, USA', // 20000000 < 610351562500000
  f02381: 'min-ask, China, Dongguan, 西野七濑迷叔', // 20000000 < 6103515625000
  f02405: 'min-ask, China, Shenzhen', // 20000000 < 12207031250000000
  f02419: 'min-ask, China, Shanghai, yuantai', // 20000000 < 122070312
  f02520: 'min-ask, China, Hong Kong + Dongguan', // 20000000 < 61035156250000000000000
  f03488: 'min-ask, Korea, Geumcheon-gu', // 20000000 < 122070312
  f07919: 'min-ask, China, Beijing, Shanghai, Hunan', // 20000000 < 122070312500000000000000000000
  f07998: 'min-ask, China, Hangzhou', // 20000000 < 1220703125
  f08220: 'min-ask, China, Shenzhen', // 20000000 < 1208496093750000000000000
  f08257: 'min-ask, China, Ningbo + USA, Boardman', // 20000000 < 12207031250
  f010010: 'min-ask, China, Changzhou + Hong Kong', // 20000000 < 12207031250000000000000000
  f010254: 'min-ask, Japan, Minamata', // 20000000 < 122070312500000
  f014365: 'min-ask, Australia, Marrickville + Japan, Heiwajima', // 20000000 < 120849609375000
  f019362: 'min-ask, China, Hangzhou', // 20000000 < 1220703125
  f020223: 'min-ask, China, Guiyang', // 20000000 < 122070312500000000
  f020541: 'min-ask, China, Shanghai', // 20000000 < 61035156250
  f020747: 'min-ask, China, Xiamen', // 20000000 < 122070312
  f021265: 'min-ask, China, Wuhan', // 20000000 < 61035156
  f021540: 'min-ask, Germany, Frankfurt, @hsanjuan', // 20000000 < 610351562
  f023001: 'min-ask, China, Changsha', // 20000000 < 122070312
  f023565: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f023660: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f023662: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f023853: 'min-ask, China, Fuzhou', // 20000000 < 121948242187500000
  f023854: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f023855: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f023861: 'min-ask, China, Fuzhou', // 20000000 < 122070312500000000
  f024006: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024007: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f024008: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024081: 'min-ask, undefined', // 20000000 < 121948242187500000
  f024084: 'min-ask, China, Fuzhou', // 20000000 < 121948242187500000
  f024085: 'min-ask, China, Fuzhou', // 20000000 < 121948242187500000
  f024127: 'min-ask, China, Fuzhou', // 20000000 < 12207031250000000000000
  f030203: 'min-ask, undefined', // 20000000 < 12207031250000000
  f033511: 'min-ask, China, Dongguan', // 20000000 < 1220703125
  f034047: 'min-ask, China, Hangzhou', // 20000000 < 6103515625000
  f034581: 'min-ask, NR', // 20000000 < 12207031250000000
  f034592: 'min-ask, NR', // 20000000 < 12207031250000000
  f039873: 'min-ask, China, Fuzhou', // 20000000 < 122070312500000
  f062770: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f062811: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f062982: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f064222: 'min-ask, China, Fuzhou', // 20000000 < 122070312500000

  // Error

  f01280: 'error, China, Wuxi, 了凡超算', // stream reset
  f01289: 'error, China, Hangzhou + USA', // AddPiece failed: adding piece to sector: writing piece: creating unsealed sector file: openning partial file '/mnt/data/data_nfs1/unsealed/s-t01289-82103': open /mnt/data/data_nfs1/unsealed/s-t01289-82103: no such file or directory
  f02490: 'error, China, Fujian', // deal failed: (State=26) error activating deal: failed to set up called handler: called check error (h: 209509): failed to look up deal on chain: deal 1225409 not found
  f02838: 'error, China, Chengdu, IPFS Harbor-星际港湾', // stream reset
  f08240: 'error, Russia, Novosibirsk, Rabinovitch', // EOF
  f08532: 'error, USA', // stream reset
  f09689: 'error, USA, Portland', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f010495: 'error, China, Tainjin', // stream reset
  f014324: 'error, Canada, Vancouver', // stream reset
  f014395: 'error, China, Dongguan', // stream reset
  f018506: 'error, USA, New York', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f020398: 'error, China, Zhangjiakou', // stream reset
  f021328: 'error, China, Dongguan', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f022070: 'error, China, Jieyang', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f022820: 'error, China, Guangdong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023928: 'error, China, Fuzhou', // stream reset
  f023983: 'error, China, Chongqing', // stream reset
  f024101: 'error, China, Guiyang', // EOF
  f029580: 'error, China, Maoming', // AddPiece failed: adding piece to sector: writing piece: maybeSchedRequest didn't find any good workers, sid: 456, type: seal/v0/addpiece
  f033356: 'error, Korea, Gangnum-gu', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f044874: 'error, China, Dongguan', // stream reset
  f047978: 'error, Korea, Seoul', // stream reset
  f054422: 'error, NR', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f061158: 'error, China, Guangdong', // stream reset
  f065132: 'error, Denmark, Vipperod', // stream reset

  // Dial backoff

  f01151: 'backoff, USA, Waxhaw',
  f02307: 'backoff, China, Taiyuan, filecoin.monster',
  f02528: 'backoff, China, Hong Kong + Inner Mongolia',
  f08073: 'backoff, China, Qiqihar, QY7TT',
  f08995: 'backoff, China, Fuzhou',
  f010398: 'backoff, Korea, Yeongdeungpo-dong',
  f017244: 'backoff, Korea, Seoul',
  f017672: 'backoff, China, Cangzhou',
  f018772: 'backoff, Australia',
  f050214: 'backoff, Germany',
  f061503: 'backoff, NR',

  // Rejected

  f01152: 'rejected, China, Beijing',
  f01248: 'rejected, Germany, Frankfurt + China, Guangdong', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02299: 'rejected, China, Dongguan, Yolo', // no online
  f02399: 'rejected, China, Zhejiang', // no online
  f02421: 'rejected, China, Deyang + Singapore, 腾盛科技', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02503: 'rejected, China, Wuhan', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02529: 'rejected, China, Chongqing',
  f02540: 'rejected, USA, Rochester', // no online
  f02609: 'rejected, USA',
  f02613: 'rejected, China, Chongqing',
  f02614: 'rejected, Singapore',
  f02625: 'rejected, China, Shanghai, IPFS星际工厂', // no online
  f02626: 'rejected, China, Guangzhou + Hong Kong', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02666: 'rejected, China, Chengdu', // no online
  f02723: 'rejected, China, Hong Kong',
  f03002: 'rejected, China, Chongqing',
  f03143: 'rejected, China, Shijiazhuang + Hong Kong', // no online
  f03223: 'rejected, USA',
  f03249: 'rejected, NR', // no online
  f03269: 'rejected, Australia', // getting client market balance failed
  f03326: 'rejected, USA, Seattle', // getting client market balance failed
  f03344: 'rejected, China, Guangzhou', // no online
  f03362: 'rejected, Germany, Berlin',
  f03485: 'rejected, Netherlands', // getting client market balance failed
  f03519: 'rejected, USA', // getting client market balance failed
  f07824: 'rejected, China, Shanghai', // libhugetlbfs: WARNING: New heap segment map at 0x564495c00000 failed: Cannot allocate memorylibhugetlbfs: WARNING: New heap segment map at 0x5574a0000000 failed: Cannot allocate memoryfalse
  f08091: 'rejected, USA',
  f08197: 'rejected, China, Foshan',
  f08229: 'rejected, China, Nanchang',
  f08242: 'rejected, China, Weifang',
  f08264: 'rejected, China, Xianning', // no online
  f08285: 'rejected, Latvia, Riga, stander',
  f08371: 'rejected, China, Chengdu',
  f08572: 'rejected, Brazil, Sao Paulo', // getting client market balance failed
  f09620: 'rejected, China, Weifang',
  f09675: 'rejected, China, Weifang',
  f09710: 'rejected, China, Jieyang',
  f09737: 'rejected, USA, Sudbury',
  f09825: 'rejected, China, Jinhua',
  f09964: 'rejected, China, Beijing + Jiaxing',
  f010035: 'rejected, Netherlands',
  f010038: 'rejected, China, Hangzhou + Singapore',
  f010202: 'rejected, Singapore',
  f010225: 'rejected, China, Ordos',
  f010299: 'rejected, China, Yibin',
  f010405: 'rejected, China, Foshan',
  f010616: 'rejected, China, Ordos + Singapore',
  f014233: 'rejected, China, Shanghai', // no online
  f014251: 'rejected, Singapore',
  f014302: 'rejected, China, Ningbo',
  f014327: 'rejected, China, Ningbo',
  f014472: 'rejected, China, Ningbo',
  f014706: 'rejected, China, Ordos',
  f014803: 'rejected, China, Beijing', // no online
  f014804: 'rejected, China, Ordos',
  f014805: 'rejected, China, Ningbo',
  f015662: 'rejected, China, Beijing', // sh: 1: dealfilter.pl: not found
  f015767: 'rejected, Russia, Khabarovsk + Japan, Khabarovsk + USA',
  f015782: 'rejected, Australia', // getting client market balance failed
  f015805: 'rejected, Germany', // How about no
  f015901: 'rejected, Germany', // How about no
  f015919: 'rejected, China, Ordos',
  f015942: 'rejected, China, Ningbo',
  f016398: 'rejected, Singapore',
  f016563: 'rejected, China, Deyang', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f017229: 'rejected, USA, Portland',
  f017665: 'rejected, China, Shenyang', // no online
  f019099: 'rejected, China, Hong Kong', // no online
  f019229: 'rejected, USA, Queens', // getting client market balance failed
  f019279: 'rejected, Canada, Calgary',
  f019354: 'rejected, Germany, Frankfurt', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f019422: 'rejected, South Africa, Johannesburg', // no online
  f020315: 'rejected, China, Guangzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f020452: 'rejected, China, Hangzhou + Singapore', // getting client market balance failed
  f020648: 'rejected, China, Shenzhen', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f021255: 'rejected, China, Suzhou + Netherlands',
  f021444: 'rejected, China, Guangzhou', // no online
  f021479: 'rejected, China, Qingdao',
  f021714: 'rejected, China, Hong Kong',
  f021870: 'rejected, USA, Portland',
  f022072: 'rejected, China, Jieyang',
  f022289: 'rejected, China, Mianyang',
  f022309: 'rejected, Korea, Chuncheon', // sh: 1: /absolute/path/to/below/dealfilter.pl: not found
  f022399: 'rejected, China, Beijing', // no online
  f022832: 'rejected, China',
  f022969: 'rejected, China, Chengdu', // no online
  f023152: 'rejected, China, Quanzhou', // libhugetlbfs: WARNING: New heap segment map at 0x55ccbf200000 failed: Cannot allocate memoryfalse
  f023205: 'rejected, NR',
  f023462: 'rejected, China, Chengdu',
  f023530: 'rejected, China, Shanghai',
  f023534: 'rejected, China, Chongqing',
  f023561: 'rejected, China, Shenzhen',
  f023573: 'rejected, Japan, Kumamoto', // no online
  f023678: 'rejected, China, Jiaxing', // no online
  f023858: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f023859: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f023981: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f023982: 'rejected, China, Chongqing',
  f023984: 'rejected, China, Chongqing',
  f023985: 'rejected, China, Chongqing',
  f024066: 'rejected, NR',
  f029490: 'rejected, NR',
  f029649: 'rejected, China, Beijing',
  f030158: 'rejected, China, Hangzhou', // no online
  f030284: 'rejected, China, Shandong', // libhugetlbfs: WARNING: New heap segment map at 0x562a38800000 failed: Cannot allocate memorysh: 1: jq: not found
  f032888: 'rejected, China, Weifang',
  f033501: 'rejected, China, Shenzhen',
  f034258: 'rejected, China, Mianyang',
  f034350: 'rejected, China, Zhengshou', // sh: 1: /usr/local/bin/dealfilter.pl: not found
  f034567: 'rejected, China, Shenzhen',
  f040332: 'rejected, China, Shenzhen', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f042584: 'rejected, Australia, Basin View', // deal start epoch is too far in the future: 216118 > 193137
  f042896: 'rejected, NR', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f042901: 'rejected, Germany', // deal start epoch is too far in the future: 215922 > 193137
  f045454: 'rejected, Korea, Seoul', // no online
  f046043: 'rejected, China, Shanghai',
  f046073: 'rejected, China, Shanghai',
  f046074: 'rejected, China, Shanghai',
  f046248: 'rejected, China, Dongguan',
  f047843: 'rejected, China, Xiamen', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f047857: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f047868: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f052759: 'rejected, China, Fujian', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f053140: 'rejected, NR',
  f053141: 'rejected, NR',
  f057127: 'rejected, China, Suzhou', // no online
  f060114: 'rejected, China, Shenzhen',
  f060975: 'rejected, NR', // sh: /root/.lotusminer/dealfilter.pl: No such file or directory

  // Dial errors

  f01012: 'dial, China, Hong Kong + Guangzhou', // * [/ip4/127.0.0.1/tcp/8888] dial tcp4 127.0.0.1:8888: connect: connection refused  * [/ip4/43.230.90.191/tcp/8888] dial tcp4 43.230.90.191:8888: connect: connection refused  * [/ip4/183.60.252.190/tcp/8888] dial tcp4 183.60.252.190:8888: connect: connection refused
  f01100: 'dial, Serbia, Belgrade, filmine.io', // * [/ip4/93.86.63.113/tcp/12345] dial tcp4 93.86.63.113:12345: connect: connection refused
  f01155: 'dial, China, Shanghai, DianCun Tech', // * [/ip4/203.107.44.156/tcp/39770] dial tcp4 0.0.0.0:38929->203.107.44.156:39770: i/o timeout
  f01229: 'dial, China, Hong Kong', // * [/ip4/43.231.187.27/tcp/1374] dial tcp4 0.0.0.0:38929->43.231.187.27:1374: i/o timeout
  f01235: 'dial, Singapore, IPFSMain', // * [/ip4/170.33.12.95/tcp/16668] dial tcp4 0.0.0.0:38929->170.33.12.95:16668: i/o timeout
  f01236: 'dial, Singapore', // * [/ip4/170.33.12.95/tcp/16666] dial tcp4 0.0.0.0:38929->170.33.12.95:16666: i/o timeout
  f01243: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64001] dial tcp4 178.212.192.216:64001: connect: connection refused
  f01275: 'dial, Korea, Seongnam-si', // * [/ip4/221.163.91.162/tcp/32230] dial tcp4 0.0.0.0:38929->221.163.91.162:32230: i/o timeout
  f01288: 'dial, China, Yibin, BlackStone', // * [/ip4/101.206.243.3/tcp/39695] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWEGMhF2ARqkVRB2zJVTjpstvLKbkuu9nZ1QeCRyTsAM9n, but remote key matches 12D3KooWCAtg67oL9r7bD1HWfHS2YqgjMvESpgX9sA6A9QvgSpHe
  f01475: 'dial, China, Wuhan + Germany', // * [/ip4/170.33.12.186/tcp/17031] dial tcp4 0.0.0.0:38929->170.33.12.186:17031: i/o timeout
  f01801: 'dial, Switzerland, Baar, Gogoșel, DNS:akasha.network', // * [/ip4/46.101.187.50/tcp/10222] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHMxq8H6gBb1nxH6YknwX1ZsisFBTgtKJJTWfruBKNKA8, but remote key matches 12D3KooWDXMs6HMEdL7ein6hBWJHv42g7VMGWwUEgH8gYZ8kELYT
  f02303: 'dial, China, Hong Kong + Jiangsu + Netherlands', // * [/ip4/8.209.76.63/tcp/48921] dial tcp4 0.0.0.0:38929->8.209.76.63:48921: i/o timeout
  f02305: 'dial, China, Dongguan', // * [/ip4/61.145.212.162/tcp/20020] dial tcp4 61.145.212.162:20020: connect: connection refused
  f02383: 'dial, China, Shenzhen', // * [/ip4/183.60.90.5/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKzBf1z9Tm6rW1RUXfmPVooKYxan8NzjRmYq9iF8QZsJu, but remote key matches 12D3KooWSD4BWsHzUgnMnDEAMrLpyQAPFQsyHp9KR5a9A2P1hFbc
  f02386: 'dial, Latvia, Riga', // * [/ip4/91.105.126.144/tcp/10240] dial tcp4 91.105.126.144:10240: i/o timeout
  f02400: 'dial, China, Beijing', // * [/ip4/36.112.26.4/tcp/47996] dial tcp4 36.112.26.4:47996: connect: connection refused
  f02403: 'dial, UK, London, AIM', // * [/ip4/2.58.47.71/tcp/18888] dial tcp4 0.0.0.0:38929->2.58.47.71:18888: i/o timeout  * [/ip4/2.58.45.33/tcp/18888] dial tcp4 0.0.0.0:38929->2.58.45.33:18888: i/o timeout
  f02414: "dial, China, Xi'an, zhejiangyunchu", // * [/ip4/113.142.1.86/tcp/56768] dial tcp4 113.142.1.86:56768: connect: connection refused
  f02417: 'dial, China, Liaoning', // * [/ip4/116.132.221.10/tcp/10240] dial tcp4 116.132.221.10:10240: connect: connection refused
  f02418: 'dial, China, Fujian + Netherlands', // * [/ip4/117.48.133.69/tcp/1348] dial tcp4 0.0.0.0:38929->117.48.133.69:1348: i/o timeout  * [/ip4/185.232.59.180/tcp/1348] dial tcp4 0.0.0.0:38929->185.232.59.180:1348: i/o timeout
  f02420: 'dial, China, Wuhan', // * [/ip4/47.252.2.93/tcp/34571] dial tcp4 0.0.0.0:38929->47.252.2.93:34571: i/o timeout
  f02422: "dial, China, Xi'an", // * [/ip4/117.38.4.82/tcp/22347] dial tcp4 0.0.0.0:38929->117.38.4.82:22347: i/o timeout
  f02425: 'dial, USA', // * [/ip4/103.78.229.73/tcp/14567] dial tcp4 0.0.0.0:38929->103.78.229.73:14567: i/o timeout
  f02438: 'dial, Singapore', // * [/ip4/47.115.134.75/tcp/14567] dial tcp4 47.115.134.75:14567: connect: connection refused
  f02492: 'dial, China, Shenzhen', // * [/ip4/103.142.248.7/tcp/3347] dial tcp4 0.0.0.0:38929->103.142.248.7:3347: i/o timeout
  f02500: 'dial, Korea, Seongnam-si', // * [/ip4/221.163.91.162/tcp/32344] dial tcp4 0.0.0.0:38929->221.163.91.162:32344: i/o timeout
  f02505: 'dial, China, Wuhan', // * [/ip4/101.32.33.237/tcp/18899] dial tcp4 101.32.33.237:18899: connect: connection refused
  f02516: 'dial, China, Hong Kong', // * [/ip4/119.28.87.115/tcp/2301] dial tcp4 0.0.0.0:38929->119.28.87.115:2301: i/o timeout
  f02519: 'dial, Brazil, Sao Paulo', // * [/ip4/52.67.40.200/tcp/10240] dial tcp4 0.0.0.0:38929->52.67.40.200:10240: i/o timeout
  f02532: 'dial, Singapore', // * [/ip4/170.33.12.117/tcp/8007] dial tcp4 0.0.0.0:38929->170.33.12.117:8007: i/o timeout
  f02533: 'dial, Spain, Terrassa, LowFeeValidation.com', // * [/ip4/2.139.172.201/tcp/8011] dial tcp4 0.0.0.0:38929->2.139.172.201:8011: i/o timeout
  f02534: 'dial, China, Beijing', // * [/ip4/123.58.99.210/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQEAUZycQ6zXsGtQd74vzTkCfPD8rQzWFnbUvK6Qenarc, but remote key matches 12D3KooWCYNTXskYDLQM7rRydZDGAfLiCPfneN1NjmnCBXpMBW49
  f02574: 'dial, Japan, Minamata', // * [/ip4/203.189.40.203/tcp/10250] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBwU2u6WYSki2PoGRoTktqditP5aFJiFMZMV98cLHn96m, but remote key matches 12D3KooWKAEN1NS8msS2LBg2c6cLMBFP4BnZLdsHMCz5z85a8fhT
  f02577: 'dial, China, Hong Kong + Russia, Khabarovsk + Japan, Heiwajima', // * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: no route to host  * [/ip4/43.243.100.31/tcp/6777] dial tcp4 0.0.0.0:38929->43.243.100.31:6777: i/o timeout  * [/ip4/66.42.38.110/tcp/9997] dial tcp4 0.0.0.0:38929->66.42.38.110:9997: i/o timeout
  f02607: 'dial, China, Beijing', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f02610: 'dial, Netherlands', // * [/ip4/213.227.129.197/tcp/14567] dial tcp4 0.0.0.0:38929->213.227.129.197:14567: i/o timeout
  f02621: "dial, China, Xi'an", // * [/ip4/113.200.194.196/tcp/32633] dial tcp4 0.0.0.0:38929->113.200.194.196:32633: i/o timeout
  f02624: 'dial, China, Shanghai, filecoin.cn', // * [/ip4/61.173.81.255/tcp/65501] dial tcp4 0.0.0.0:38929->61.173.81.255:65501: i/o timeout
  f02627: 'dial, China, Guilin', // * [/ip4/116.1.148.87/tcp/15970] dial tcp4 0.0.0.0:38929->116.1.148.87:15970: i/o timeout
  f02632: 'dial, China, Tianjin', // * [/ip4/150.129.138.199/tcp/8518] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLD3vs1YhM871uQ5hFmSEnJLPoLuwM9x9sGAQvQNWcczE, but remote key matches 12D3KooWMeqr1EUoLm6JBvcHB6i7KBQaTnnLHTN1mmj85Mim95v8
  f02654: 'dial, China, Shanghai', // * [/ip4/114.88.222.181/tcp/43355] dial tcp4 0.0.0.0:38929->114.88.222.181:43355: i/o timeout  * [/ip4/114.88.222.181/tcp/40515] dial tcp4 0.0.0.0:38929->114.88.222.181:40515: i/o timeout
  f02657: 'dial, China, Ordos-xfr', // * [/ip4/1.183.72.226/tcp/12308] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLTNxtSBmMCy7VNXNSE8tZVPURHB2onSRTpJqkjWGEitm, but remote key matches 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg
  f02658: 'dial, China, Ningbo, bluematrix', // * [/ip4/123.137.128.188/tcp/3698] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRxbE66sHsxoSSE6uLybmNqXWFPKBdk6QC7KPoSZFx8Xy, but remote key matches 12D3KooWRVsiRe1qEUbpA1YeWoeMRBj3T4EBz1cxSWF6hfV8tELv  * [/ip4/112.15.188.130/tcp/3698] dial tcp4 0.0.0.0:38929->112.15.188.130:3698: i/o timeout
  f02664: 'dial, China, Hangzhou, ciger', // * [/ip4/111.0.120.74/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLfsqniYPeGBvMZN7StQzhgzTG9TB6M2gTNsvs5eDiTQM, but remote key matches 12D3KooWQb1CpdSujwXeyMJroR8qAkekXiZdNXVPKqis5ENXZGVw
  f02721: 'dial, USA', // * [/ip4/135.90.74.200/tcp/14567] dial tcp4 0.0.0.0:38929->135.90.74.200:14567: i/o timeout
  f02725: 'dial, China, Hong Kong', // * [/ip4/101.32.38.57/tcp/18899] dial tcp4 101.32.38.57:18899: connect: connection refused
  f02726: 'dial, USA, Brooklyn', // * [/ip4/169.62.51.212/tcp/14567] dial tcp4 0.0.0.0:38929->169.62.51.212:14567: i/o timeout
  f02731: 'dial, Singapore', // * [/ip4/10.30.8.4/tcp/14567] dial tcp4 0.0.0.0:38929->10.30.8.4:14567: i/o timeout
  f02732: 'dial, USA', // * [/ip4/141.125.99.190/tcp/14567] dial tcp4 0.0.0.0:38929->141.125.99.190:14567: i/o timeout
  f02755: 'dial, China, Shijiazhuang', // * [/ip4/110.249.208.222/tcp/1479] dial tcp4 0.0.0.0:38929->110.249.208.222:1479: i/o timeout
  f02767: 'dial, Germany, Frankfurt', // * [/ip4/18.192.27.227/tcp/37722] dial tcp4 0.0.0.0:38929->18.192.27.227:37722: i/o timeout
  f02772: 'dial, China, Chengdu', // * [/ip4/118.123.228.196/tcp/48633] dial tcp4 118.123.228.196:48633: connect: connection refused  * [/ip4/118.123.228.197/tcp/48633] dial tcp4 118.123.228.197:48633: connect: connection refused
  f02773: 'dial, China, Chengdu', // * [/ip4/118.123.228.198/tcp/48633] dial tcp4 118.123.228.198:48633: connect: connection refused
  f03021: 'dial, China, Hong Kong', // * [/ip4/34.96.185.143/tcp/10240] dial tcp4 34.96.185.143:10240: connect: connection refused  * [/ip4/27.213.97.148/tcp/10240] dial tcp4 0.0.0.0:38929->27.213.97.148:10240: i/o timeout
  f03120: 'dial, China, Guangzhou', // * [/ip4/0.0.0.0/tcp/34566] dial tcp4 0.0.0.0:34566: connect: connection refused
  f03131: 'dial, China, Changsha', // * [/ip4/124.233.0.157/tcp/7002] dial tcp4 124.233.0.157:7002: connect: connection refused
  f03136: "dial, China, Xi'an, Zhejiang Yun Chu Technology Co., Ltd, sat", // * [/ip4/47.57.8.77/tcp/18557] dial tcp4 0.0.0.0:38929->47.57.8.77:18557: i/o timeout
  f03140: 'dial, China, QingDao', // * [/ip4/61.147.123.83/tcp/12222] dial tcp4 61.147.123.83:12222: connect: connection refused
  f03144: 'dial, Germany, Frankfurt', // * [/ip4/103.214.41.38/tcp/23456] dial tcp4 0.0.0.0:38929->103.214.41.38:23456: i/o timeout
  f03149: 'dial, USA, Newton', // * [/ip6/2600:8803:3000:2430:0:ff:fde6:85d5/tcp/2889] dial tcp6 [2600:8803:3000:2430:0:ff:fde6:85d5]:2889: connect: network is unreachable  * [/ip4/68.102.245.161/tcp/2889] dial tcp4 68.102.245.161:2889: connect: connection refused
  f03176: 'dial, USA, San Mateo, Five Star-Helmsman&Heiben', // * [/ip4/47.88.55.220/tcp/15470] dial tcp4 0.0.0.0:38929->47.88.55.220:15470: i/o timeout  * [/ip4/47.88.57.241/tcp/15470] dial tcp4 0.0.0.0:38929->47.88.57.241:15470: i/o timeout
  f03194: 'dial, China, Shenzhen, 成都云存&Npool', // * [/ip4/182.150.0.20/tcp/5427] dial tcp4 0.0.0.0:38929->182.150.0.20:5427: i/o timeout  * [/ip4/47.88.10.179/tcp/5427] dial tcp4 0.0.0.0:38929->47.88.10.179:5427: i/o timeout  * [/ip4/47.245.136.114/tcp/5427] dial tcp4 0.0.0.0:38929->47.245.136.114:5427: i/o timeout
  f03220: 'dial, China, Ordos', // * [/ip4/1.183.72.226/tcp/12309] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBgi9gSUH7kw88Ko8miGjRWjJrNF2gmkMjy6gchtxgJbL, but remote key matches 12D3KooWDxu2JXzsnxz2L9ZWRXNBypcpQcduWwqmSZfu5EawCDmZ
  f03225: 'dial, China, Guyuan', // * [/ip4/10.100.0.2/tcp/11111] dial tcp4 10.100.0.2:11111: connect: connection refused
  f03245: 'dial, USA, Los Angeles', // * [/ip4/120.133.36.67/tcp/23456] dial tcp4 0.0.0.0:38929->120.133.36.67:23456: i/o timeout
  f03266: 'dial, USA', // * [/ip4/169.63.27.151/tcp/14567] dial tcp4 0.0.0.0:38929->169.63.27.151:14567: i/o timeout
  f03276: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/41112] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCErnjDuHG4fe7pGpe8xWGSQPr9Zq9AteTg9kf4QERBFm, but remote key matches 12D3KooWFKKhmTQyDpXH8HFnUZhVjsu2f8r96m5dFkqJnWxFozc5
  f03286: 'dial, China, Mianyang', // * [/ip4/112.44.246.189/tcp/23455] dial tcp4 0.0.0.0:38929->112.44.246.189:23455: i/o timeout
  f03287: 'dial, USA', // * [/ip4/149.81.122.165/tcp/14567] dial tcp4 0.0.0.0:38929->149.81.122.165:14567: i/o timeout
  f03305: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.52/tcp/7000] dial tcp4 0.0.0.0:38929->197.231.176.52:7000: i/o timeout
  f03306: 'dial, Australia', // * [/ip4/103.29.66.54/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWS33M7NQzLm8d8a5cz7Vo87bRWo1Sad8dCpxNgN8h3HDA, but remote key matches 12D3KooWRAbtemsWN7MjrrJ6KSmfrnGDnWsCtDu4oHH1eLUzD6a6
  f03307: 'dial, Australia', // * [/ip4/47.74.68.141/tcp/7001] dial tcp4 0.0.0.0:38929->47.74.68.141:7001: i/o timeout
  f03312: 'dial, China, Beijing', // * [/ip4/8.210.13.50/tcp/45678] dial tcp4 8.210.13.50:45678: connect: connection refused  * [/ip4/119.161.169.68/tcp/45678] dial tcp4 0.0.0.0:38929->119.161.169.68:45678: i/o timeout
  f03314: 'dial, China, Zhangjiakou-xfr', // * [/ip4/45.113.32.176/tcp/1112] dial tcp4 0.0.0.0:38929->45.113.32.176:1112: i/o timeout
  f03317: 'dial, China, Shenzhen + Hong Kong + Jieyang', // * [/ip4/170.33.12.164/tcp/9090] dial tcp4 0.0.0.0:38929->170.33.12.164:9090: i/o timeout
  f03320: 'dial, bcm', // * [/ip4/183.36.3.160/tcp/11850] dial tcp4 183.36.3.160:11850: connect: connection refused
  f03325: 'dial, Germany, Frankfurt', // * [/ip4/45.9.10.134/tcp/42243] dial tcp4 0.0.0.0:38929->45.9.10.134:42243: i/o timeout
  f03327: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.51/tcp/7000] dial tcp4 0.0.0.0:38929->197.231.176.51:7000: i/o timeout
  f03337: 'dial, China, Sichuan, 朝日&网科巨力', // * [/ip4/118.116.2.60/tcp/25033] dial tcp4 118.116.2.60:25033: connect: connection refused  * [/ip4/118.116.2.61/tcp/25033] dial tcp4 118.116.2.61:25033: connect: connection refused
  f03350: 'dial, China, Wuhan', // * [/ip4/170.33.12.188/tcp/7000] dial tcp4 0.0.0.0:38929->170.33.12.188:7000: i/o timeout  * [/ip4/170.33.12.187/tcp/7000] dial tcp4 0.0.0.0:38929->170.33.12.187:7000: i/o timeout
  f03351: 'dial, China, Chengdu', // * [/ip4/182.140.253.150/tcp/10000] dial tcp4 0.0.0.0:38929->182.140.253.150:10000: i/o timeout
  f03358: 'dial, Singapore', // * [/ip4/1.183.72.211/tcp/30001] dial tcp4 0.0.0.0:38929->1.183.72.211:30001: i/o timeout
  f03359: 'dial, China, Shanghai', // * [/ip4/47.245.138.110/tcp/2347] dial tcp4 0.0.0.0:38929->47.245.138.110:2347: i/o timeout
  f03360: 'dial, China, Shaanxi', // * [/ip4/111.19.155.65/tcp/23451] dial tcp4 0.0.0.0:38929->111.19.155.65:23451: i/o timeout
  f03363: 'dial, Singapore', // * [/ip4/1.183.72.210/tcp/30003] dial tcp4 1.183.72.210:30003: connect: connection refused
  f03365: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7084] failed to negotiate security protocol: EOF
  f03366: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7000] failed to negotiate security protocol: EOF
  f03367: 'dial, Singapore', // * [/ip4/8.209.99.1/tcp/14567] dial tcp4 0.0.0.0:38929->8.209.99.1:14567: i/o timeout
  f03427: 'dial, Russia, airalab', // * [/ip4/82.148.21.37/tcp/46717] dial tcp4 0.0.0.0:38929->82.148.21.37:46717: i/o timeout
  f03484: 'dial, Netherlands', // * [/ip4/89.149.209.98/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLQrbDFJ4D4i1KcSNqDa64qYMVAmGB2Thiw4xNkwRkgvy, but remote key matches 12D3KooWL6hvc8aM5BTQLHP7w4Qig6RJbU3sQJVD5pW7JFowakNN
  f03490: 'dial, China, Dongguan', // * [/ip4/121.12.167.179/tcp/41113] dial tcp4 121.12.167.179:41113: connect: connection refused
  f03512: 'dial, New Zealand, Auckland, NZFILECOIN01', // * [/ip4/122.57.157.167/tcp/4567] dial tcp4 0.0.0.0:38929->122.57.157.167:4567: i/o timeout
  f03515: 'dial, China, Dongguan', // * [/ip4/113.105.174.3/tcp/23456] dial tcp4 113.105.174.3:23456: connect: connection refused
  f03517: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7082] failed to negotiate security protocol: EOF
  f03523: 'dial, China, Wuxi, YC--wuxi', // * [/ip4/58.215.232.74/tcp/10010] dial tcp4 58.215.232.74:10010: connect: connection refused  * [/ip4/192.168.1.12/tcp/1001] dial tcp4 0.0.0.0:38929->192.168.1.12:1001: i/o timeout
  f03548: 'dial, Singapore', // * [/ip4/8.209.82.79/tcp/14567] dial tcp4 0.0.0.0:38929->8.209.82.79:14567: i/o timeout
  f03620: 'dial, Germany, Frankfurt', // * [/ip4/23.90.146.133/tcp/7000] dial tcp4 0.0.0.0:38929->23.90.146.133:7000: i/o timeout
  f03630: 'dial, China, Wuhan', // * [/ip4/170.33.12.186/tcp/17000] dial tcp4 0.0.0.0:38929->170.33.12.186:17000: i/o timeout  * [/ip4/170.33.12.78/tcp/17000] dial tcp4 0.0.0.0:38929->170.33.12.78:17000: i/o timeout
  f03638: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] dial tcp4 0.0.0.0:38929->13.248.204.157:38617: i/o timeout
  f03646: 'dial, China, Beijing, JingTang', // * [/ip4/123.125.194.158/tcp/5678] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHaT6Kh6GZgpZ47hK99FnZnTRa3pbSNsy1fMUDGFyczj8, but remote key matches 12D3KooWQb5w1q9YKogjAzrizGTveaSU6b51JFEFr92qx1uyNGkk
  f03702: 'dial, China, Shenzhen + Singapore, LianDongJingLing', // * [/ip4/218.17.190.89/tcp/10240] dial tcp4 0.0.0.0:38929->218.17.190.89:10240: i/o timeout  * [/ip4/8.209.113.21/tcp/7002] dial tcp4 0.0.0.0:38929->8.209.113.21:7002: i/o timeout
  f03764: 'dial, China, Beijing, foobar', // * [/ip4/123.115.217.138/tcp/24002] dial tcp4 0.0.0.0:38929->123.115.217.138:24002: i/o timeout
  f03766: 'dial, China, Weifang', // * [/ip4/111.17.220.237/tcp/6666] dial tcp4 111.17.220.237:6666: connect: connection refused
  f04921: 'dial, China, Shanghai', // * [/ip4/121.46.237.2/tcp/51818] dial tcp4 121.46.237.2:51818: connect: connection refused
  f06775: 'dial, China, Shenzhen, IPSB&CAAP', // * [/ip4/103.39.218.169/tcp/2346] dial tcp4 103.39.218.169:2346: connect: connection refused
  f07451: 'dial, China, Hangzhou', // * [/ip4/221.12.20.5/tcp/6000] dial tcp4 0.0.0.0:38929->221.12.20.5:6000: i/o timeout
  f07710: 'dial, Hong Kong', // * [/ip4/65.181.71.9/tcp/5472] dial tcp4 0.0.0.0:38929->65.181.71.9:5472: i/o timeout
  f07752: 'dial, China, Dongguan', // * [/ip4/192.168.10.12/tcp/18888] dial tcp4 0.0.0.0:38929->192.168.10.12:18888: i/o timeout
  f07756: 'dial, DNS:purumine.com', // * [/ip6/2001:470:b:281::ac15:6402/tcp/1347] dial tcp6 [2001:470:b:281::ac15:6402]:1347: connect: network is unreachable  * [/ip4/50.47.110.164/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSdyt5tC9nJScHT4EoBnz7AZcniqxmP1FEZZwdkBwhwzk, but remote key matches 12D3KooWNoi8KHMeS8SEp3mDUCHDU8yRFW6SZ1SPmz2NLCSur2ei
  f07774: 'dial, China, Shenzhen', // * [/ip4/103.40.249.210/tcp/33455] dial tcp4 103.40.249.210:33455: connect: connection refused
  f07775: 'dial, China, Shenzhen', // * [/ip4/103.40.249.211/tcp/33455] dial tcp4 0.0.0.0:38929->103.40.249.211:33455: i/o timeout
  f07806: 'dial, China, Wuhan, HelloXP', // * [/ip4/58.211.11.131/tcp/1024] dial tcp4 0.0.0.0:38929->58.211.11.131:1024: i/o timeout
  f07810: 'dial, Korea', // * [/ip4/61.111.129.217/tcp/33333] dial tcp4 61.111.129.217:33333: connect: connection refused
  f07826: 'dial, China, Shenzhen, 星际医生', // * [/ip4/183.12.27.145/tcp/8888] dial tcp4 183.12.27.145:8888: connect: connection refused
  f07829: 'dial, Japan', // * [/ip4/163.44.165.168/tcp/30222] dial tcp4 0.0.0.0:38929->163.44.165.168:30222: i/o timeout
  f07830: 'dial, Singapore', // * [/ip4/8.209.102.106/tcp/14567] dial tcp4 0.0.0.0:38929->8.209.102.106:14567: i/o timeout
  f07833: 'dial, China, Changzhou, 星巢', // * [/ip4/107.155.16.239/tcp/20480] dial tcp4 107.155.16.239:20480: connect: connection refused  * [/ip4/107.155.3.37/tcp/20480] dial tcp4 0.0.0.0:38929->107.155.3.37:20480: i/o timeout
  f07848: 'dial, China, Wuhan', // * [/ip4/58.211.11.130/tcp/1024] dial tcp4 0.0.0.0:38929->58.211.11.130:1024: i/o timeout
  f07851: 'dial, Netherlands, Purmerend', // * [/ip4/212.32.243.209/tcp/2347] dial tcp4 0.0.0.0:38929->212.32.243.209:2347: i/o timeout
  f07857: 'dial, China, Zhengzhou', // * [/ip4/117.160.206.175/tcp/40131] dial tcp4 117.160.206.175:40131: connect: connection refused
  f07944: 'dial, China, Hangzhou, SupremeTreasure', // * [/ip4/103.46.128.45/tcp/57670] dial tcp4 103.46.128.45:57670: connect: connection refused
  f07947: 'dial, China, Zhengzhou', // * [/ip4/117.160.206.175/tcp/40133] dial tcp4 117.160.206.175:40133: connect: connection refused
  f07956: 'dial, Russia', // * [/ip4/91.218.244.253/tcp/10240] dial tcp4 0.0.0.0:38929->91.218.244.253:10240: i/o timeout
  f07961: 'dial, China, Changzhou', // * [/ip4/58.216.209.94/tcp/6666] dial tcp4 0.0.0.0:38929->58.216.209.94:6666: i/o timeout
  f07969: 'dial, China, Hangzhou, FME', // * [/ip4/121.52.246.48/tcp/5002] dial tcp4 121.52.246.48:5002: connect: connection refused
  f07982: 'dial, China, Shenzhen', // * [/ip4/113.110.201.250/tcp/36980] dial tcp4 0.0.0.0:38929->113.110.201.250:36980: i/o timeout
  f07991: 'dial, China, Changsha', // * [/ip4/113.218.133.192/tcp/13470] dial tcp4 0.0.0.0:38929->113.218.133.192:13470: i/o timeout
  f08006: 'dial, China, Shaanxi', // * [/ip4/111.19.129.175/tcp/23456] dial tcp4 0.0.0.0:38929->111.19.129.175:23456: i/o timeout
  f08032: 'dial, China, Weifang', // * [/ip4/111.17.220.235/tcp/6666] dial tcp4 111.17.220.235:6666: connect: connection refused  * [/ip4/111.17.220.237/tcp/6666] dial tcp4 111.17.220.237:6666: connect: connection refused
  f08040: 'dial, Australia, Sydney', // * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:38929->43.241.189.214:39438: i/o timeout
  f08042: 'dial, Brazil, Sao Paulo', // * [/ip4/76.223.3.225/tcp/23456] dial tcp4 0.0.0.0:38929->76.223.3.225:23456: i/o timeout
  f08047: 'dial, China, Hangzhou', // * [/ip4/101.71.125.162/tcp/7654] dial tcp4 0.0.0.0:38929->101.71.125.162:7654: i/o timeout
  f08063: 'dial, China, Huizhou', // * [/ip4/113.81.68.244/tcp/12345] dial tcp4 0.0.0.0:38929->113.81.68.244:12345: i/o timeout
  f08076: 'dial, Netherlands, Alphen aan den Rijn, Ang', // * [/ip4/143.178.96.190/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFhbSYbTBYSym7mrxXPfFHupE2oG8LZRjwM3smZKwBYWj, but remote key matches 12D3KooWE3jXWnuX7eXFs2FxY3MZRbsftox1NRGf47iPr5CfFi6B
  f08088: 'dial, China, Dongguan', // * [/ip4/183.240.203.135/tcp/10240] dial tcp4 183.240.203.135:10240: connect: connection refused
  f08094: 'dial, China, Guangzhou, dongshao', // * [/ip4/183.2.154.179/tcp/23450] failed to negotiate security protocol: read tcp4 66.70.191.245:38929->183.2.154.179:23450: read: connection reset by peer
  f08096: 'dial, China, Wuhan', // * [/ip4/59.175.128.46/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWARwVoXJ6ZjfgKEpyBv1dsEmQhHrPN9UwxxKoFkrAw98A, but remote key matches 12D3KooWCFhmdmduqq59w8CsEgEX2qi9KQqE9wmTHmqC5W4tcEaA
  f08101: 'dial, China, Wuxi', // * [/ip4/192.168.23.8/tcp/8081] dial tcp4 0.0.0.0:38929->192.168.23.8:8081: i/o timeout
  f08109: 'dial, USA, qianyuanyunshuo', // * [/ip4/47.57.8.77/tcp/28109] dial tcp4 0.0.0.0:38929->47.57.8.77:28109: i/o timeout
  f08135: 'dial, Singapore', // * [/ip4/170.33.12.118/tcp/12345] dial tcp4 0.0.0.0:38929->170.33.12.118:12345: i/o timeout
  f08139: 'dial, China, Shanghai', // * [/ip4/218.79.124.15/tcp/45454] dial tcp4 0.0.0.0:38929->218.79.124.15:45454: i/o timeout
  f08148: 'dial, China, Shanghai', // * [/ip4/103.108.182.27/tcp/30031] dial tcp4 0.0.0.0:38929->103.108.182.27:30031: i/o timeout
  f08149: 'dial, China, Jiangmen', // * [/ip4/183.36.3.160/tcp/60015] dial tcp4 183.36.3.160:60015: connect: connection refused
  f08150: 'dial, China, Hangzhou', // * [/ip4/115.199.55.127/tcp/23333] dial tcp4 0.0.0.0:38929->115.199.55.127:23333: i/o timeout
  f08161: 'dial, China, Weifang', // * [/ip4/111.17.220.234/tcp/6677] dial tcp4 111.17.220.234:6677: connect: connection refused
  f08170: 'dial, China, Jieyang', // * [/ip4/183.240.204.199/tcp/40573] dial tcp4 0.0.0.0:38929->183.240.204.199:40573: i/o timeout
  f08178: 'dial, China, Jiaxing, CAAP-金华', // * [/ip4/61.174.253.25/tcp/2346] dial tcp4 61.174.253.25:2346: connect: connection refused
  f08199: 'dial, USA, Sudbury', // * [/ip4/108.49.193.174/tcp/32002] dial tcp4 0.0.0.0:38929->108.49.193.174:32002: i/o timeout
  f08203: 'dial, Germany, Frankfurt', // * [/ip4/54.255.34.95/tcp/1579] dial tcp4 0.0.0.0:38929->54.255.34.95:1579: i/o timeout
  f08205: 'dial, Brazil, Sao Paulo', // * [/ip4/169.57.182.19/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHfc4VZ321w7MmZYbmMDdkMw3D4h83Ar3q8MEMjLq69PL, but remote key matches 12D3KooWEfyR3PyQidJ2GgBV6Vvncguotx7xi9GRbFvi8RBoytMu
  f08207: 'dial, Australia, Brisbane', // * [/ip6/2401:d002:4902:0:669d:99ff:feb1:b89/tcp/58862] dial tcp6 [2401:d002:4902:0:669d:99ff:feb1:b89]:58862: connect: network is unreachable  * [/ip4/203.123.118.104/tcp/58862] dial tcp4 203.123.118.104:58862: i/o timeout
  f08235:
    'dial, China, Beijing + Jiaxing + Germany, Frankfurt, 星河华讯&中科星际', // * [/ip4/103.103.177.172/tcp/5678] dial tcp4 0.0.0.0:38929->103.103.177.172:5678: i/o timeout
  f08243: 'dial, USA, Queens', // * [/ip4/108.41.171.148/tcp/55244] dial tcp4 0.0.0.0:38929->108.41.171.148:55244: i/o timeout  * [/ip4/108.41.171.148/tcp/55241] dial tcp4 0.0.0.0:38929->108.41.171.148:55241: i/o timeout  * [/ip4/108.41.171.148/tcp/55242] dial tcp4 0.0.0.0:38929->108.41.171.148:55242: i/o timeout  * [/ip4/108.41.171.148/tcp/55243] dial tcp4 0.0.0.0:38929->108.41.171.148:55243: i/o timeout
  f08289: 'dial, Canada, Embrun', // * [/ip4/148.59.149.162/tcp/10240] dial tcp4 0.0.0.0:38929->148.59.149.162:10240: i/o timeout
  f08293: 'dial, China, Xinxiang', // * [/ip4/27.50.142.73/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAurE17PhbJLsTgFQJHbj1Jmbf8Jtr1uTRPdcDySHXQEq, but remote key matches 12D3KooWHFDkQ1wLQ62T41rT6UghFzeWkzF8rRMt7W7tBfT1Su1m
  f08295: 'dial, China, Suzhou, IPFS Cloud', // * [/ip4/222.92.5.150/tcp/40699] dial tcp4 0.0.0.0:38929->222.92.5.150:40699: i/o timeout
  f08301: 'dial, Japan, Setagaya-ku, MEIK', // * [/ip4/126.159.22.156/tcp/50320] dial tcp4 0.0.0.0:38929->126.159.22.156:50320: i/o timeout
  f08330: 'dial, China, Chengdu, oursoft', // * [/ip4/125.69.0.37/tcp/55009] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWDcmvnaV9QebtFP7rW2Li1KkQsBJxiKcmTXnwm1qhkcRj, but remote key matches 12D3KooWKmFzYyThhurG2mC8ZK6RznLFnGD448XkJgNcuABBMK3v
  f08338: 'dial, China, Weifang', // * [/ip4/111.17.220.231/tcp/5566] dial tcp4 111.17.220.231:5566: connect: connection refused
  f08344: 'dial, UK, Hartlepool', // * [/ip4/82.15.108.46/tcp/51437] dial tcp4 0.0.0.0:38929->82.15.108.46:51437: i/o timeout
  f08347: 'dial, China, Chengdu', // * [/ip4/222.209.95.29/tcp/6666] dial tcp4 0.0.0.0:38929->222.209.95.29:6666: i/o timeout
  f08358: 'dial, China, Shenzhen', // * [/ip4/119.123.208.233/tcp/45437] dial tcp4 119.123.208.233:45437: connect: connection refused
  f08384:
    'dial, China, Shandong + Hong Kong + Japan, Heiwajima + Russia, Khabarovsk', // * [/ip4/172.247.228.122/tcp/9999] dial tcp4 172.247.228.122:9999: connect: no route to host  * [/ip4/66.42.38.110/tcp/9990] dial tcp4 0.0.0.0:38929->66.42.38.110:9990: i/o timeout  * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: i/o timeout
  f08396: 'dial, France, Fontenay-sous-Bois', // * [/ip4/90.46.50.228/tcp/24002] dial tcp4 0.0.0.0:38929->90.46.50.228:24002: i/o timeout
  f08399: 'dial, USA, Sammamish', // * [/ip4/73.118.247.91/tcp/63452] dial tcp4 0.0.0.0:38929->73.118.247.91:63452: i/o timeout
  f08405: 'dial, China, Guangdong', // * [/ip4/183.232.116.201/tcp/4001] dial tcp4 183.232.116.201:4001: connect: connection refused
  f08418: 'dial, China, Chansha + USA', // * [/ip4/27.124.10.49/tcp/7003] dial tcp4 0.0.0.0:38929->27.124.10.49:7003: i/o timeout
  f08446: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMfLgpGWM87mLbrkNuN6FQ6zExMvzECDSV4qy7FKDqNvq, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f08448: 'dial, China, Guangdong', // * [/ip4/183.232.116.202/tcp/4001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWDg2NgWzZ1PoGYTwisEdULKXVvjvMMkNmo3sVo2pQ1bcb, but remote key matches 12D3KooWAin92JFNNKoBfDSP4vrnW5VWPWpf7v25g8jpe3bNFbKX
  f08481: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:38929->73.158.16.48:30390: i/o timeout
  f08497: 'dial, Brazil, Sao Paulo', // * [/ip4/18.231.148.87/tcp/46717] dial tcp4 0.0.0.0:38929->18.231.148.87:46717: i/o timeout
  f08568: 'dial, USA, Waxhaw, Meatball Part II', // * [/ip4/71.75.239.182/tcp/41372] dial tcp4 0.0.0.0:38929->71.75.239.182:41372: i/o timeout
  f08684: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.109:23450: i/o timeout
  f08685: 'dial, China, Fuzhou', // * [/ip4/182.99.0.96/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.96:23450: i/o timeout
  f08788: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.103:23450: i/o timeout
  f08793: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.99:23450: i/o timeout
  f08854: 'dial, China, Dongguan', // * [/ip4/121.12.162.85/tcp/10000] dial tcp4 0.0.0.0:38929->121.12.162.85:10000: i/o timeout
  f08895: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f08904: 'dial, China, Deyang', // * [/ip4/125.64.78.27/tcp/4004] dial tcp4 125.64.78.27:4004: connect: connection refused
  f08908: 'dial, USA', // * [/ip4/216.18.214.92/tcp/6666] dial tcp4 0.0.0.0:38929->216.18.214.92:6666: i/o timeout
  f08917: 'dial, China, Beijing', // * [/ip4/182.61.174.185/tcp/40000] dial tcp4 182.61.174.185:40000: connect: connection refused
  f08928: 'dial, USA, Arlington, theartist', // * [/ip4/69.251.248.175/tcp/6679] dial tcp4 0.0.0.0:38929->69.251.248.175:6679: i/o timeout
  f08937: 'dial, China, Wuxi, YC--wuxi', // * [/ip4/58.215.232.74/tcp/10200] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAG85TzBibt5LjxuTsz9KhWwQCz9ok65oaPcZ2voYaMZA, but remote key matches 12D3KooWPSS9P7FWDoCmBpqt9NGSjbYyFTajiR3wd2VxtfeDiwNN  * [/ip4/192.168.1.18/tcp/1020] dial tcp4 0.0.0.0:38929->192.168.1.18:1020: i/o timeout
  f08949: 'dial, Norway, Oslo', // * [/ip4/151.252.13.190/tcp/37374] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWE1ubdqszJxdjAAVcZcx2x1PJUNFbNDm52jFkeJoAaPYh, but remote key matches 12D3KooWMpuRzgVuRS6m285cucGgnXWwTnsNtGzjsMJeEqS7UtJw
  f08953: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.100:23450: i/o timeout
  f08958: 'dial, China, Fuzhou', // * [/ip4/182.99.0.108/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.108:23450: i/o timeout
  f08985: 'dial, USA', // * [/ip4/141.125.89.152/tcp/14567] dial tcp4 0.0.0.0:38929->141.125.89.152:14567: i/o timeout
  f08986: 'dial, China, Ordos', // * [/ip4/1.183.72.226/tcp/12308] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCLPAPTjCYyCMBBnv5MkJCaV1o6mawJLha4wdAGkMH1Yq, but remote key matches 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg
  f08991: 'dial, China, Ili', // * [/ip4/124.88.170.140/tcp/16000] dial tcp4 124.88.170.140:16000: connect: connection refused
  f09002: 'dial, Singapore', // * [/ip4/113.200.194.196/tcp/32634] dial tcp4 0.0.0.0:38929->113.200.194.196:32634: i/o timeout
  f09005: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.101:23450: i/o timeout
  f09029: 'dial, China, Wuhan', // * [/ip4/59.175.128.46/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCkJYhKg9uMf2ocRDRxatUWBveJMSdneMamxDmChG2ULv, but remote key matches 12D3KooWCFhmdmduqq59w8CsEgEX2qi9KQqE9wmTHmqC5W4tcEaA
  f09036: 'dial, China, Chengdu, CD-oursoft', // * [/ip4/125.69.0.37/tcp/55019] dial tcp4 125.69.0.37:55019: connect: connection refused
  f09037: 'dial, Singapore', // * [/ip4/170.33.12.95/tcp/16666] dial tcp4 0.0.0.0:38929->170.33.12.95:16666: i/o timeout
  f09048: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.102:23450: i/o timeout
  f09056: 'dial, China, Shenzhen, SZSQ1', // * [/ip4/119.139.197.93/tcp/20030] dial tcp4 119.139.197.93:20030: connect: connection refused
  f09077: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:38929->218.85.126.210:23450: i/o timeout
  f09082: 'dial, Australia, Canberra', // * [/ip4/101.178.36.30/tcp/24004] dial tcp4 0.0.0.0:38929->101.178.36.30:24004: i/o timeout
  f09087: 'dial, USA', // * [/ip4/169.59.247.27/tcp/14567] dial tcp4 0.0.0.0:38929->169.59.247.27:14567: i/o timeout
  f09088: 'dial, China, Changsha', // * [/ip4/175.10.160.70/tcp/13470] dial tcp4 0.0.0.0:38929->175.10.160.70:13470: i/o timeout
  f09091: 'dial, Netherlands', // * [/ip4/185.232.59.179/tcp/2347] dial tcp4 0.0.0.0:38929->185.232.59.179:2347: i/o timeout
  f09261: 'dial, Brazil, Sao Paulo', // * [/ip4/169.57.189.187/tcp/7000] dial tcp4 169.57.189.187:7000: connect: connection refused
  f09523: 'dial, China, Beijing', // * [/ip4/8.210.13.50/tcp/45678] dial tcp4 8.210.13.50:45678: connect: connection refused  * [/ip4/119.161.169.68/tcp/45678] dial tcp4 0.0.0.0:38929->119.161.169.68:45678: i/o timeout
  f09537: 'dial, USA, El Monte', // * [/ip4/47.145.150.94/tcp/1024] dial tcp4 0.0.0.0:38929->47.145.150.94:1024: i/o timeout
  f09555: 'dial, Australia, Sydney', // * [/ip4/3.25.64.130/tcp/10240] dial tcp4 0.0.0.0:38929->3.25.64.130:10240: i/o timeout
  f09559: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/31001] dial tcp4 0.0.0.0:38929->99.250.201.0:31001: i/o timeout
  f09560: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64002] dial tcp4 178.212.192.216:64002: i/o timeout
  f09561: 'dial, China, Beijing', // * [/ip4/36.112.26.4/tcp/3458] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFp4nbb4eDyUmWaR5XrjSEzdhtHh35ewdwc59e1tkZBcA, but remote key matches 12D3KooWAKXYhFP3mGbaHnCB5GBCvFe8gniGKoDpTbaY8S9FWruH
  f09565: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64003] dial tcp4 178.212.192.216:64003: connect: connection refused
  f09573: 'dial, China, Xiamen', // * [/ip4/121.204.250.253/tcp/4567] dial tcp4 0.0.0.0:38929->121.204.250.253:4567: i/o timeout
  f09589: 'dial, China, Changsha', // * [/ip4/175.10.162.119/tcp/5472] dial tcp4 0.0.0.0:38929->175.10.162.119:5472: i/o timeout
  f09592: 'dial, Japan, Minamata', // * [/ip4/203.189.40.203/tcp/10252] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKsEsCefspqqDZDJcQMe6AY9pVKQh5BfYQLJMZ8jD3T6c, but remote key matches 12D3KooWSpji7fDLrXGiM9Gbcy8tzCTYk5ed7ukmaTAznnLMxqGf
  f09597: 'dial, China, Shanghai', // * [/ip4/47.52.20.42/tcp/8046] failed to negotiate security protocol: unexpected EOF
  f09605: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64004] dial tcp4 178.212.192.216:64004: connect: connection refused
  f09619: 'dial, China, Shanghai', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f09631: 'dial, China, Changzhou', // * [/ip4/58.216.209.94/tcp/6668] dial tcp4 0.0.0.0:38929->58.216.209.94:6668: i/o timeout
  f09639: 'dial, China, Fuzhou', // * [/ip4/110.80.136.19/tcp/10240] failed to negotiate security protocol: read tcp4 66.70.191.245:38929->110.80.136.19:10240: read: connection reset by peer
  f09643: 'dial, China, Beijing', // * [/ip4/203.93.121.130/tcp/38886] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQFb4HCWV2jNpSu1P4Ku9td4JBTTLFpfyQq2LJrAwFcAk, but remote key matches 12D3KooWSxumKoCwxLj526NH9AZ2zhtcCJJVtJrUvaQjv59kPacY
  f09652: 'dial, Singapore', // * [/ip4/170.33.9.50/tcp/32632] dial tcp4 0.0.0.0:38929->170.33.9.50:32632: i/o timeout
  f09653: 'dial, China, Chengdu', // * [/ip4/47.242.94.248/tcp/6667] dial tcp4 47.242.94.248:6667: connect: connection refused
  f09656: 'dial, Ukraine, Odessa', // * [/ip4/218.60.28.136/tcp/43368] dial tcp4 218.60.28.136:43368: connect: connection refused
  f09664: 'dial, Australia, Sydney', // * [/ip4/220.238.233.196/tcp/26201] dial tcp4 0.0.0.0:38929->220.238.233.196:26201: i/o timeout
  f09671: 'dial, China, Chongqing', // * [/ip4/113.207.109.184/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMdh1of4D5YPvY4g3Y2pCf6mpQvgHx9kg55RvkJdRmP6z, but remote key matches 12D3KooWPw6phtaL2ftZq7wQLjc6z1YoVou4BK48ZzXk3TVNVPjK
  f09672: 'dial, China, Chengdu', // * [/ip4/110.185.107.124/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRQ8Qer7mUMRaywqs4QfVAqofMNMzSCNiNKJ14CCrUi7R, but remote key matches 12D3KooWFrs6qgLAHtSS1kSTwXtoUKTAzipUuyt4CKmWL4HLZ3fq
  f09680: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f09704: 'dial, China, Shenzhen', // * [/ip4/218.17.62.49/tcp/31431] dial tcp4 218.17.62.49:31431: connect: connection refused
  f09721: 'dial, ???, CD-oursoft-1', // * [/ip4/125.69.0.37/tcp/55009] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGAJiCkk7x62ikVQ4M9VXz4uaVvQ5EJkdJ3sEW43ahEU6, but remote key matches 12D3KooWKmFzYyThhurG2mC8ZK6RznLFnGD448XkJgNcuABBMK3v
  f09723: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:38929->218.85.126.210:23450: i/o timeout
  f09729: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/41112] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPumWWQP2mt3t7czSPDq67Fs19Xen3fcSfurqgnTVieAF, but remote key matches 12D3KooWFKKhmTQyDpXH8HFnUZhVjsu2f8r96m5dFkqJnWxFozc5
  f09734: 'dial, China, Dongguan', // * [/ip4/121.12.167.179/tcp/41113] dial tcp4 121.12.167.179:41113: connect: connection refused
  f09748: 'dial, China, Tianjin', // * [/ip4/150.129.138.199/tcp/7518] dial tcp4 150.129.138.199:7518: connect: connection refused
  f09761: 'dial, China, Beijing', // * [/ip4/114.253.41.59/tcp/24002] dial tcp4 0.0.0.0:38929->114.253.41.59:24002: i/o timeout
  f09763: 'dial, China, Mianyang,  <13h', // * [/ip4/47.254.128.95/tcp/7000] dial tcp4 0.0.0.0:38929->47.254.128.95:7000: i/o timeout  * [/ip4/47.254.25.128/tcp/7000] dial tcp4 0.0.0.0:38929->47.254.25.128:7000: i/o timeout
  f09770: "dial, China, Xi'an", // * [/ip4/192.168.25.156/tcp/9770] dial tcp4 0.0.0.0:38929->192.168.25.156:9770: i/o timeout
  f09771: 'dial, China, Hangzhou', // * [/ip4/161.117.229.243/tcp/9771] dial tcp4 161.117.229.243:9771: connect: connection refused
  f09789: 'dial, USA', // * [/ip4/47.242.77.149/tcp/19914] dial tcp4 0.0.0.0:38929->47.242.77.149:19914: i/o timeout
  f09792: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 35.224.87.15:24002: connect: connection refused
  f09797: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.102:23450: i/o timeout
  f09801: 'dial, China, Fuzhou', // * [/ip4/182.99.0.108/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.108:23450: i/o timeout
  f09808: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.100:23450: i/o timeout
  f09809: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.101:23450: i/o timeout
  f09810: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.103:23450: i/o timeout
  f09811: 'dial, China, Dongguan', // * [/ip4/113.105.174.7/tcp/10000] dial tcp4 113.105.174.7:10000: connect: no route to host
  f09813: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.109:23450: i/o timeout
  f09814: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.99:23450: i/o timeout
  f09817: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.98:23450: i/o timeout
  f09828: 'dial, NR', // * [/ip4/192.168.0.9/tcp/24002] dial tcp4 0.0.0.0:38929->192.168.0.9:24002: i/o timeout
  f09830: 'dial, Korea, Geumcheon-gu', // * [/ip4/121.140.143.29/tcp/24002] dial tcp4 121.140.143.29:24002: connect: connection refused
  f09838: 'dial, Russia, Irkutsk', // * [/ip4/90.188.226.112/tcp/9555] dial tcp4 0.0.0.0:38929->90.188.226.112:9555: i/o timeout
  f09859: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] dial tcp4 0.0.0.0:38929->13.248.204.157:38617: i/o timeout
  f09969: 'dial, China, Guangzhou', // * [/ip4/183.2.157.250/tcp/1029] dial tcp4 183.2.157.250:1029: connect: connection refused
  f09972: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 95.216.99.39:46717: i/o timeout
  f09983: 'dial, China, Guangzhou', // * [/ip4/183.2.157.214/tcp/888] dial tcp4 0.0.0.0:38929->183.2.157.214:888: i/o timeout
  f09985: 'dial, China, Qingdao', // * [/ip4/61.147.123.85/tcp/12223] dial tcp4 61.147.123.85:12223: connect: connection refused
  f010015: 'dial, China, Taizhou', // * [/ip4/47.254.31.111/tcp/23456] dial tcp4 0.0.0.0:38929->47.254.31.111:23456: i/o timeout  * [/ip4/47.254.145.29/tcp/23456] dial tcp4 0.0.0.0:38929->47.254.145.29:23456: i/o timeout
  f010020: 'dial, China, Chongqing', // * [/ip4/113.207.109.184/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNXhxeBMqYPF56bZExJzcjeiHDaserGs7YYXNgLtLHVvS, but remote key matches 12D3KooWPw6phtaL2ftZq7wQLjc6z1YoVou4BK48ZzXk3TVNVPjK
  f010032: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.103:23450: i/o timeout
  f010048: 'dial, China, Shanghai', // * [/ip4/116.237.97.73/tcp/65500] dial tcp4 116.237.97.73:65500: connect: connection refused
  f010056: 'dial, Singapore', // * [/ip4/8.209.82.79/tcp/14567] dial tcp4 0.0.0.0:38929->8.209.82.79:14567: i/o timeout
  f010063: 'dial, China, Mianyang', // * [/ip4/183.223.56.9/tcp/23456] dial tcp4 0.0.0.0:38929->183.223.56.9:23456: i/o timeout
  f010084: 'dial, China, Beijing', // * [/ip4/106.54.88.171/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKHoUzkGnPKEXWxa7PyQ4RanGL6x1KEdsLrqyvjv8SebA, but remote key matches 12D3KooWJsNGb1NC6A5XRCm5JuYPCcpaBHBjF5tGvkvZj9zWp3G4
  f010152: 'dial, Germany-cfa', // * [/ip4/116.202.129.161/tcp/10666] dial tcp4 116.202.129.161:10666: connect: connection refused
  f010170: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.109:23450: i/o timeout
  f010223: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12311] dial tcp4 0.0.0.0:38929->47.57.188.137:12311: i/o timeout
  f010224: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.102:23450: i/o timeout
  f010230: 'dial, China, Beijing', // * [/ip4/106.55.236.214/tcp/10022] dial tcp4 0.0.0.0:38929->106.55.236.214:10022: i/o timeout
  f010238: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23455] dial tcp4 110.80.33.138:23455: connect: connection refused
  f010257: 'dial, China, Hong Kong, DNS:feiyuipfs.com', // * [/ip4/43.231.187.28/tcp/8080] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWD2jMkapH5UCwNQyfkzohH8V3UWVbn78yD3KHk1dBz18t, but remote key matches 12D3KooWHeLAeY6qfXUUuYfAz1iA6vYz5nrEue55NjGtxFxGPDW4
  f010268: 'dial, China, Hangzhou', // * [/ip4/47.57.8.77/tcp/8001] dial tcp4 0.0.0.0:38929->47.57.8.77:8001: i/o timeout
  f010270: 'dial, China, Shijiazhuang', // * [/ip4/111.224.179.91/tcp/2233] dial tcp4 111.224.179.91:2233: connect: connection refused
  f010274: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.99:23450: i/o timeout
  f010276: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] dial tcp4 0.0.0.0:38929->13.248.204.157:38617: i/o timeout
  f010287: 'dial, China, Fuzhou', // * [/ip4/182.99.0.97/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.97:23450: i/o timeout
  f010289: 'dial, China, Fuzhou', // * [/ip4/182.99.0.96/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.96:23450: i/o timeout
  f010291: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.98:23450: i/o timeout
  f010298: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.102:23450: i/o timeout
  f010308: 'dial, Germany, Frankfurt', // * [/ip4/139.199.62.183/tcp/6610] dial tcp4 139.199.62.183:6610: connect: connection refused
  f010311: 'dial, Korea, Hwaseong-si', // * [/ip4/106.255.239.43/tcp/24002] dial tcp4 0.0.0.0:38929->106.255.239.43:24002: i/o timeout
  f010362: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.35.11/tcp/46717] dial tcp4 15.228.35.11:46717: connect: connection refused
  f010372: 'dial, Brazil, Sao Paulo', // * [/ip4/52.67.22.220/tcp/46717] dial tcp4 0.0.0.0:38929->52.67.22.220:46717: i/o timeout
  f010374: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAUYDipKeDFH92NqD4RxxUGUZJtiUwH5YD9scLwnavVXP, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f010411: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] dial tcp4 0.0.0.0:38929->13.248.204.157:38617: i/o timeout
  f010419: 'dial, China, Sichuan', // * [/ip4/47.241.19.122/tcp/6666] dial tcp4 47.241.19.122:6666: connect: no route to host
  f010424: 'dial, Australia, Sydney', // * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:38929->43.241.189.214:39438: i/o timeout
  f010449: 'dial, China, Jiangmen', // * [/ip4/183.36.3.160/tcp/60007] dial tcp4 183.36.3.160:60007: connect: connection refused
  f010496: 'dial, China, Guangzhou', // * [/ip4/183.2.157.213/tcp/666] dial tcp4 0.0.0.0:38929->183.2.157.213:666: i/o timeout
  f010512: 'dial, China, Zhengzhou', // * [/ip4/117.160.206.175/tcp/40133] dial tcp4 117.160.206.175:40133: connect: connection refused
  f010516: 'dial, Brazil, Sao Paulo', // * [/ip4/18.230.25.100/tcp/18888] dial tcp4 0.0.0.0:38929->18.230.25.100:18888: i/o timeout
  f010527: 'dial, China, Shanghai', // * [/ip4/116.228.53.133/tcp/10240] failed to negotiate security protocol: message did not have trailing newline
  f010533: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12319] dial tcp4 0.0.0.0:38929->47.57.188.137:12319: i/o timeout
  f010538: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12320] dial tcp4 0.0.0.0:38929->8.209.107.150:12320: i/o timeout
  f010541: 'dial, China, Chengdu', // * [/ip4/110.185.107.117/tcp/21736] dial tcp4 110.185.107.117:21736: connect: connection refused  * [/ip4/110.185.107.23/tcp/21735] dial tcp4 110.185.107.23:21735: connect: connection refused
  f010553: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12316] dial tcp4 0.0.0.0:38929->47.57.188.137:12316: i/o timeout
  f010579: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.194/tcp/23450] dial tcp4 0.0.0.0:38929->45.192.184.194:23450: i/o timeout
  f010586: 'dial, China, Fuzhou', // * [/ip4/45.192.184.197/tcp/23450] dial tcp4 0.0.0.0:38929->45.192.184.197:23450: i/o timeout
  f010593: 'dial, USA, East Islip', // * [/ip6/2a0a:e5c1:17f::42/tcp/33823] dial tcp6 [2a0a:e5c1:17f::42]:33823: connect: network is unreachable  * [/ip4/74.88.128.118/tcp/55519] dial tcp4 0.0.0.0:38929->74.88.128.118:55519: i/o timeout  * [/ip4/74.88.128.118/tcp/41126] dial tcp4 0.0.0.0:38929->74.88.128.118:41126: i/o timeout
  f010598: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/10002] dial tcp4 99.250.201.0:10002: i/o timeout
  f010600: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] dial tcp4 0.0.0.0:38929->13.248.204.157:38617: i/o timeout
  f010606: 'dial, China, Fuzhou', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:38929->45.192.184.195:23450: i/o timeout
  f010607: 'dial, China, Guangzhou', // * [/ip4/8.210.76.199/tcp/18899] dial tcp4 0.0.0.0:38929->8.210.76.199:18899: i/o timeout
  f010608: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.101:23450: i/o timeout
  f010609: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/36666] dial tcp4 0.0.0.0:38929->182.99.0.100:36666: i/o timeout
  f010613: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/20002] dial tcp4 0.0.0.0:38929->99.250.201.0:20002: i/o timeout
  f014230: 'dial, China, Fuzhou', // * [/ip4/185.23.181.67/tcp/23450] dial tcp4 0.0.0.0:38929->185.23.181.67:23450: i/o timeout
  f014241: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNczL8NwzKEd2Np4uiDs42GB3pKcmoABTdM8JJ8v9MRGB, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f014246: 'dial, China, Shenzhen', // * [/ip4/103.40.249.212/tcp/44299] dial tcp4 0.0.0.0:38929->103.40.249.212:44299: i/o timeout
  f014248: 'dial, Turkey', // * [/ip4/185.23.180.67/tcp/23450] dial tcp4 185.23.180.67:23450: connect: no route to host
  f014259: 'dial, China, Fuzhou', // * [/ip4/45.192.184.193/tcp/23450] dial tcp4 0.0.0.0:38929->45.192.184.193:23450: i/o timeout
  f014279: 'dial, Finland, Helsinki', // * [/ip4/95.217.113.188/tcp/12345] dial tcp4 0.0.0.0:38929->95.217.113.188:12345: i/o timeout
  f014281: 'dial, Netherlands, Permerend', // * [/ip4/83.149.84.21/tcp/2347] dial tcp4 0.0.0.0:38929->83.149.84.21:2347: i/o timeout
  f014307: 'dial, China, Dongguan', // * [/ip4/218.16.123.133/tcp/4001] dial tcp4 0.0.0.0:38929->218.16.123.133:4001: i/o timeout
  f014311: 'dial, China, Ordos', // * [/ip4/162.62.55.44/tcp/12309] dial tcp4 162.62.55.44:12309: connect: connection refused
  f014328: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/10003] dial tcp4 99.250.201.0:10003: i/o timeout
  f014329: 'dial, China, Hong Kong', // * [/ip4/65.181.71.9/tcp/5472] dial tcp4 0.0.0.0:38929->65.181.71.9:5472: i/o timeout
  f014348: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.15.78/tcp/46717] dial tcp4 0.0.0.0:38929->15.228.15.78:46717: i/o timeout
  f014377: 'dial, China, Liaoning', // * [/ip4/116.132.221.24/tcp/42985] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAwSVUn5sTmPq1f64G1FfAt3ovRyJwzimCQtr5NQYG3Z7, but remote key matches 12D3KooWSFGYvbGeXwHPdLytmxkzFgfAzMXjgUPFzwkcVzNnfGvu
  f014379: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f014380: 'dial, China, Hangzhou + Wuhan + Singapore', // * [/ip4/170.33.12.186/tcp/7161] dial tcp4 0.0.0.0:38929->170.33.12.186:7161: i/o timeout  * [/ip4/170.33.12.78/tcp/7161] dial tcp4 0.0.0.0:38929->170.33.12.78:7161: i/o timeout
  f014382: 'dial, Singapore', // * [/ip4/10.10.34.120/tcp/7000] dial tcp4 0.0.0.0:38929->10.10.34.120:7000: i/o timeout
  f014386: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/7169] dial tcp4 0.0.0.0:38929->170.33.12.186:7169: i/o timeout
  f014392: 'dial, Russia, Khabarovsk + USA + Japan, Heiwajima', // * [/ip4/172.247.228.122/tcp/9999] dial tcp4 172.247.228.122:9999: connect: no route to host  * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: no route to host  * [/ip4/66.42.38.110/tcp/9990] dial tcp4 0.0.0.0:38929->66.42.38.110:9990: i/o timeout
  f014393: 'dial, China, Zhejiang', // * [/ip4/43.227.216.41/tcp/25677] failed to negotiate security protocol: context deadline exceeded
  f014415: 'dial, USA', // * [/ip4/13.248.165.152/tcp/33612] failed to negotiate security protocol: EOF
  f014431: 'dial, Singapore', // * [/ip4/170.33.12.78/tcp/7185] dial tcp4 0.0.0.0:38929->170.33.12.78:7185: i/o timeout  * [/ip4/170.33.12.186/tcp/7185] dial tcp4 0.0.0.0:38929->170.33.12.186:7185: i/o timeout
  f014432: 'dial, China, Chengdu', // * [/ip4/125.69.0.37/tcp/55019] dial tcp4 125.69.0.37:55019: connect: connection refused
  f014433: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/7193] dial tcp4 0.0.0.0:38929->170.33.12.186:7193: i/o timeout  * [/ip4/170.33.12.78/tcp/7193] dial tcp4 0.0.0.0:38929->170.33.12.78:7193: i/o timeout
  f014436: 'dial, China, Chengdu', // * [/ip4/125.69.0.37/tcp/55009] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKAWmV63WC5bLi5LasVaRnVKkKkoKKAwqqqhGnaVXLcR9, but remote key matches 12D3KooWKmFzYyThhurG2mC8ZK6RznLFnGD448XkJgNcuABBMK3v
  f014440: 'dial, Hong Kong', // * [/ip4/45.113.32.179/tcp/6666] dial tcp4 0.0.0.0:38929->45.113.32.179:6666: i/o timeout
  f014464: 'dial, China, Hangzhou + Singapore', // * [/ip4/170.33.12.205/tcp/7000] dial tcp4 0.0.0.0:38929->170.33.12.205:7000: i/o timeout
  f014481: 'dial, China, Shanghai', // * [/ip4/103.242.134.36/tcp/12288] failed to negotiate security protocol: EOF  * [/ip4/170.33.12.118/tcp/12345] dial tcp4 0.0.0.0:38929->170.33.12.118:12345: i/o timeout
  f014483: 'dial, USA, Clarksville', // * [/ip4/199.46.99.12/tcp/43801] dial tcp4 199.46.99.12:43801: connect: connection refused
  f014487: 'dial, China, Shanghai', // * [/ip4/47.241.59.58/tcp/45455] dial tcp4 47.241.59.58:45455: connect: connection refused  * [/ip4/114.88.73.108/tcp/35353] dial tcp4 114.88.73.108:35353: connect: connection refused
  f014522: 'dial, China, Shanghai', // * [/ip4/81.68.170.164/tcp/5474] dial tcp4 81.68.170.164:5474: connect: connection refused
  f014547: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.100:23450: i/o timeout
  f014572: 'dial, USA', // * [/ip4/47.90.208.156/tcp/39706] dial tcp4 0.0.0.0:38929->47.90.208.156:39706: i/o timeout
  f014573: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.101:23450: i/o timeout
  f014606: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f014609: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.109:23450: i/o timeout
  f014632: 'dial, Canada', // * [/ip4/148.59.149.162/tcp/10240] dial tcp4 0.0.0.0:38929->148.59.149.162:10240: i/o timeout
  f014634: 'dial, USA, Boardman', // * [/ip4/54.148.63.7/tcp/10240] dial tcp4 0.0.0.0:38929->54.148.63.7:10240: i/o timeout
  f014640: 'dial, Hungary', // * [/ip4/87.229.53.110/tcp/44163] dial tcp4 0.0.0.0:38929->87.229.53.110:44163: i/o timeout
  f014644: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:38929->73.158.16.48:30390: i/o timeout
  f014683: 'dial, China, Shenzhen', // * [/ip4/183.53.76.5/tcp/41113] dial tcp4 0.0.0.0:38929->183.53.76.5:41113: i/o timeout
  f014701: 'dial, China, Changzhou', // * [/ip4/47.242.94.248/tcp/8899] failed to negotiate security protocol: read tcp4 66.70.191.245:38929->47.242.94.248:8899: read: connection reset by peer
  f014744: 'dial, China, Taiyuan', // * [/ip4/1.71.191.196/tcp/33411] dial tcp4 0.0.0.0:38929->1.71.191.196:33411: i/o timeout
  f014778: 'dial, China, Ordos', // * [/ip4/162.62.55.44/tcp/12310] dial tcp4 162.62.55.44:12310: connect: connection refused
  f014782: 'dial, DNS:wlblock.io', // * [/ip4/18.166.30.112/tcp/3456] dial tcp4 18.166.30.112:3456: connect: connection refused
  f014786: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:38929->218.85.126.210:23450: i/o timeout
  f014798: 'dial, Brazil, Sao Paulo', // * [/ip4/18.228.119.165/tcp/5101] dial tcp4 0.0.0.0:38929->18.228.119.165:5101: i/o timeout
  f014813: 'dial, China, Hangzhou + USA', // * [/ip4/43.224.34.33/tcp/9999] dial tcp4 43.224.34.33:9999: connect: connection refused  * [/ip4/162.209.218.130/tcp/12348] dial tcp4 162.209.218.130:12348: connect: no route to host
  f015231: 'dial, China, Wuxi', // * [/ip4/193.118.43.158/tcp/7090] failed to negotiate security protocol: EOF
  f015642: 'dial, China, Fuzhou', // * [/ip4/220.176.125.20/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.20:23450: i/o timeout
  f015643: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12317] dial tcp4 0.0.0.0:38929->47.57.188.137:12317: i/o timeout
  f015655: 'dial, Korea, Geumcheon-gu', // * [/ip4/121.140.143.29/tcp/24002] dial tcp4 121.140.143.29:24002: connect: connection refused
  f015685: 'dial, China, Shanghai', // * [/ip4/222.64.141.185/tcp/40321] dial tcp4 0.0.0.0:38929->222.64.141.185:40321: i/o timeout
  f015714: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12318] dial tcp4 0.0.0.0:38929->47.57.188.137:12318: i/o timeout
  f015720: 'dial, China, Ningbo', // * [/ip4/141.164.50.170/tcp/7201] dial tcp4 141.164.50.170:7201: connect: connection refused  * [/ip4/104.156.230.123/tcp/7104] dial tcp4 0.0.0.0:38929->104.156.230.123:7104: i/o timeout  * [/ip4/149.28.89.24/tcp/7102] dial tcp4 0.0.0.0:38929->149.28.89.24:7102: i/o timeout  * [/ip4/45.32.19.57/tcp/7106] dial tcp4 0.0.0.0:38929->45.32.19.57:7106: i/o timeout  * [/ip4/45.77.89.14/tcp/7105] dial tcp4 0.0.0.0:38929->45.77.89.14:7105: i/o timeout  * [/ip4/45.77.72.195/tcp/7103] dial tcp4 0.0.0.0:38929->45.77.72.195:7103: i/o timeout  * [/ip4/155.138.144.135/tcp/7107] dial tcp4 0.0.0.0:38929->155.138.144.135:7107: i/o timeout
  f015726: 'dial, China, Qingdao', // * [/ip4/61.147.123.83/tcp/12222] dial tcp4 61.147.123.83:12222: connect: connection refused
  f015731: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12329] dial tcp4 0.0.0.0:38929->8.209.107.150:12329: i/o timeout
  f015732: 'dial, USA, Portland', // * [/ip4/47.254.31.111/tcp/23456] dial tcp4 0.0.0.0:38929->47.254.31.111:23456: i/o timeout  * [/ip4/47.254.145.29/tcp/23456] dial tcp4 0.0.0.0:38929->47.254.145.29:23456: i/o timeout
  f015733: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12500] dial tcp4 0.0.0.0:38929->47.57.188.137:12500: i/o timeout
  f015737: 'dial, Brazil, Sao Paulo', // * [/ip4/169.57.219.4/tcp/7000] dial tcp4 0.0.0.0:38929->169.57.219.4:7000: i/o timeout
  f015742: 'dial, China, Ningbo', // * [/ip4/141.164.50.170/tcp/7001] dial tcp4 141.164.50.170:7001: connect: connection refused  * [/ip4/45.77.89.14/tcp/7005] dial tcp4 0.0.0.0:38929->45.77.89.14:7005: i/o timeout  * [/ip4/45.32.19.57/tcp/7006] dial tcp4 0.0.0.0:38929->45.32.19.57:7006: i/o timeout  * [/ip4/155.138.144.135/tcp/7007] dial tcp4 0.0.0.0:38929->155.138.144.135:7007: i/o timeout  * [/ip4/149.28.89.24/tcp/7002] dial tcp4 0.0.0.0:38929->149.28.89.24:7002: i/o timeout  * [/ip4/104.156.230.123/tcp/7004] dial tcp4 0.0.0.0:38929->104.156.230.123:7004: i/o timeout  * [/ip4/45.77.72.195/tcp/7003] dial tcp4 0.0.0.0:38929->45.77.72.195:7003: i/o timeout
  f015751: 'dial, Canada, Huron East', // * [/ip4/184.94.177.239/tcp/15432] dial tcp4 184.94.177.239:15432: i/o timeout
  f015756: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:38929->95.216.99.39:46717: i/o timeout
  f015757: 'dial, China, Hangzhou', // * [/ip4/103.46.128.45/tcp/57670] dial tcp4 103.46.128.45:57670: connect: connection refused
  f015760: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.53/tcp/7000] dial tcp4 0.0.0.0:38929->197.231.176.53:7000: i/o timeout
  f015763: 'dial, South Africa, Cape Town', // * [/ip4/13.244.159.54/tcp/8888] dial tcp4 0.0.0.0:38929->13.244.159.54:8888: i/o timeout
  f015777: 'dial, Australia, Sydney', // * [/ip4/52.63.43.218/tcp/8888] dial tcp4 0.0.0.0:38929->52.63.43.218:8888: i/o timeout
  f015795: 'dial, Brazil, Sao Paulo', // * [/ip4/18.230.133.57/tcp/8888] dial tcp4 0.0.0.0:38929->18.230.133.57:8888: i/o timeout
  f015798: 'dial, Germany', // * [/ip4/127.0.0.1/tcp/39283] dial tcp4 127.0.0.1:39283: connect: connection refused  * [/ip4/46.4.63.227/tcp/39283] dial tcp4 0.0.0.0:38929->46.4.63.227:39283: i/o timeout
  f015800: 'dial, Germany, Sankt Andreasberg', // * [/ip4/127.0.0.1/tcp/42685] dial tcp4 127.0.0.1:42685: connect: connection refused  * [/ip4/46.4.63.227/tcp/42685] dial tcp4 0.0.0.0:38929->46.4.63.227:42685: i/o timeout
  f015801: 'dial, Germany, Ismaning', // * [/ip4/88.198.66.42/tcp/443] dial tcp4 0.0.0.0:38929->88.198.66.42:443: i/o timeout
  f015802: 'dial, Germany', // * [/ip4/127.0.0.1/tcp/37133] dial tcp4 127.0.0.1:37133: connect: connection refused  * [/ip4/46.4.63.227/tcp/37133] dial tcp4 0.0.0.0:38929->46.4.63.227:37133: i/o timeout
  f015803: 'dial, Germany', // * [/ip4/46.4.79.213/tcp/443] dial tcp4 46.4.79.213:443: connect: connection refused
  f015804: 'dial, Germany, Ismaning', // * [/ip4/88.198.67.156/tcp/443] dial tcp4 0.0.0.0:38929->88.198.67.156:443: i/o timeout
  f015806: 'dial, Germany', // * [/ip4/176.9.59.6/tcp/443] dial tcp4 0.0.0.0:38929->176.9.59.6:443: i/o timeout
  f015807: 'dial, Germany', // * [/ip4/46.4.79.203/tcp/443] dial tcp4 0.0.0.0:38929->46.4.79.203:443: i/o timeout
  f015808: 'dial, Germany', // * [/ip4/127.0.0.1/tcp/35727] dial tcp4 127.0.0.1:35727: connect: connection refused  * [/ip4/46.4.63.227/tcp/35727] dial tcp4 0.0.0.0:38929->46.4.63.227:35727: i/o timeout
  f015810: 'dial, Germany', // * [/ip4/127.0.0.1/tcp/39745] dial tcp4 127.0.0.1:39745: connect: connection refused  * [/ip4/46.4.63.227/tcp/39745] dial tcp4 0.0.0.0:38929->46.4.63.227:39745: i/o timeout
  f015811: 'dial, Germany, Lanshut', // * [/ip4/127.0.0.1/tcp/46053] dial tcp4 127.0.0.1:46053: connect: connection refused  * [/ip4/46.4.63.227/tcp/46053] dial tcp4 0.0.0.0:38929->46.4.63.227:46053: i/o timeout
  f015812: 'dial, Germany', // * [/ip4/127.0.0.1/tcp/34863] dial tcp4 127.0.0.1:34863: connect: connection refused  * [/ip4/46.4.63.227/tcp/34863] dial tcp4 0.0.0.0:38929->46.4.63.227:34863: i/o timeout
  f015818: 'dial, Netherlands', // * [/ip4/66.248.204.121/tcp/2345] dial tcp4 0.0.0.0:38929->66.248.204.121:2345: i/o timeout
  f015819: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.5:23450: i/o timeout
  f015826: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.2:23450: i/o timeout
  f015839: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.3:23450: i/o timeout
  f015845: 'dial, China, Fuzhou', // * [/ip4/220.176.125.20/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.20:23450: i/o timeout
  f015846: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:38929->45.192.184.195:23450: i/o timeout
  f015848: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12321] dial tcp4 0.0.0.0:38929->8.209.107.150:12321: i/o timeout
  f015852: 'dial, China, Fuzhou', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:38929->45.192.184.195:23450: i/o timeout
  f015855: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.4:23450: i/o timeout
  f015860: 'dial, Ukraine, Odessa', // * [/ip4/178.212.192.216/tcp/64005] dial tcp4 178.212.192.216:64005: connect: connection refused
  f015861: 'dial, Ukraine, Odessa', // * [/ip4/178.212.192.216/tcp/64006] dial tcp4 178.212.192.216:64006: connect: connection refused
  f015862: 'dial, Ukraine, Odessa', // * [/ip4/178.212.192.216/tcp/64007] dial tcp4 178.212.192.216:64007: connect: connection refused
  f015866: 'dial, China, Fuzhou', // * [/ip4/220.176.125.10/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.10:23450: i/o timeout
  f015872: 'dial, China, Fuzhou', // * [/ip4/45.192.184.205/tcp/23450] dial tcp4 0.0.0.0:38929->45.192.184.205:23450: i/o timeout
  f015873: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.98:23450: i/o timeout
  f015884: 'dial, China, Fuzhou', // * [/ip4/45.192.184.203/tcp/23450] dial tcp4 0.0.0.0:38929->45.192.184.203:23450: i/o timeout
  f015887: 'dial, China, Fuzhou', // * [/ip4/45.192.184.201/tcp/23450] dial tcp4 0.0.0.0:38929->45.192.184.201:23450: i/o timeout
  f015888: 'dial, China, Fuzhou', // * [/ip4/45.192.184.207/tcp/23450] dial tcp4 0.0.0.0:38929->45.192.184.207:23450: i/o timeout
  f015894: 'dial, China, Fuzhou', // * [/ip4/45.192.184.199/tcp/23450] dial tcp4 0.0.0.0:38929->45.192.184.199:23450: i/o timeout
  f015897: 'dial, China, Guangdong', // * [/ip4/43.252.149.169/tcp/4001] dial tcp4 0.0.0.0:38929->43.252.149.169:4001: i/o timeout
  f015898: 'dial, Lithuania', // * [/ip4/188.214.129.85/tcp/36899] dial tcp4 188.214.129.85:36899: connect: connection refused
  f015900: 'dial, Germany', // * [/ip4/46.4.63.227/tcp/443] dial tcp4 46.4.63.227:443: connect: connection refused
  f015903: 'dial, Germany', // * [/ip4/136.243.48.38/tcp/443] dial tcp4 136.243.48.38:443: connect: connection refused
  f015905: 'dial, Lithuania', // * [/ip4/188.214.129.49/tcp/34751] dial tcp4 0.0.0.0:38929->188.214.129.49:34751: i/o timeout
  f015907: 'dial, Canada, Calgary', // * [/ip4/70.77.238.98/tcp/46717] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPwoUPJMRoyTS4UJTV4jAeYY4raxtAPEw8VAfgENxBSwg, but remote key matches 12D3KooWNPbyqVXuPQQR3vocTMUbjipL95qHxGjoug56do1r2SCZ
  f015910: 'dial, Turkey', // * [/ip4/185.23.181.67/tcp/23450] dial tcp4 0.0.0.0:38929->185.23.181.67:23450: i/o timeout
  f015914: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:38929->182.99.0.99:23450: i/o timeout
  f015918: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.2:23450: i/o timeout
  f015922: 'dial, China', // * [/ip4/162.62.55.44/tcp/12317] dial tcp4 162.62.55.44:12317: connect: connection refused
  f015925: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12318] dial tcp4 0.0.0.0:38929->8.209.107.150:12318: i/o timeout
  f015926: 'dial, China', // * [/ip4/162.62.55.44/tcp/12319] dial tcp4 162.62.55.44:12319: connect: connection refused
  f015928: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.3:23450: i/o timeout
  f015933: 'dial, Finland, Helskinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:38929->95.216.99.39:46717: i/o timeout
  f015947: 'dial, Finland, Helsinki', // * [/ip4/95.217.114.57/tcp/45381] dial tcp4 0.0.0.0:38929->95.217.114.57:45381: i/o timeout
  f016024: 'dial, China, Fuzhou', // * [/ip4/220.176.125.10/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.10:23450: i/o timeout
  f016056: 'dial, USA, Arlington', // * [/ip4/69.251.248.175/tcp/6679] dial tcp4 0.0.0.0:38929->69.251.248.175:6679: i/o timeout
  f016202: 'dial, Korea, Songpa-gu', // * [/ip4/118.223.164.15/tcp/42155] dial tcp4 0.0.0.0:38929->118.223.164.15:42155: i/o timeout
  f016207: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused
  f016238: 'dial, NR', // * [/ip4/192.168.100.27/tcp/57670] dial tcp4 0.0.0.0:38929->192.168.100.27:57670: i/o timeout
  f016263: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f016279: 'dial, Finland, Helsinki', // * [/ip4/95.216.68.181/tcp/46717] dial tcp4 95.216.68.181:46717: connect: connection refused
  f016297: 'dial, China, Mianyang + USA', // * [/ip4/47.254.128.95/tcp/7000] dial tcp4 0.0.0.0:38929->47.254.128.95:7000: i/o timeout  * [/ip4/47.254.25.128/tcp/7000] dial tcp4 0.0.0.0:38929->47.254.25.128:7000: i/o timeout
  f016302: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.5:23450: i/o timeout
  f016309: 'dial, USA, Boardman', // * [/ip4/52.41.243.212/tcp/28003] dial tcp4 0.0.0.0:38929->52.41.243.212:28003: i/o timeout
  f016364: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 0.0.0.0:38929->36.33.216.70:10240: i/o timeout
  f016412: 'dial, China, Taiwan, Taipei', // * [/ip4/35.234.30.173/tcp/555] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNErKGqKeCCJE1pRzGMZzRbtsq5WSL3Y7uSxzhVZoYs4g, but remote key matches 12D3KooWDt8Cen1hXGpaE23Uqa4i9F1xoCA7Zykic87RKd63ixh4
  f016419: 'dial, USA, Mountain View', // * [/ip6/2601:647:4700:7e:b85f:e6cd:bc32:478f/tcp/44545] dial tcp6 [2601:647:4700:7e:b85f:e6cd:bc32:478f]:44545: connect: network is unreachable  * [/ip4/127.0.0.1/tcp/33585] dial tcp4 127.0.0.1:33585: connect: connection refused  * [/ip6/::1/tcp/44545] dial tcp6 [::1]:44545: connect: connection refused  * [/ip4/73.158.190.21/tcp/58442] dial tcp4 0.0.0.0:38929->73.158.190.21:58442: i/o timeout  * [/ip4/73.158.190.21/tcp/26715] dial tcp4 0.0.0.0:38929->73.158.190.21:26715: i/o timeout  * [/ip4/192.168.86.244/tcp/33585] dial tcp4 0.0.0.0:38929->192.168.86.244:33585: i/o timeout
  f016479: 'dial, China, Dongguan', // * [/ip4/218.16.123.133/tcp/4001] dial tcp4 0.0.0.0:38929->218.16.123.133:4001: i/o timeout
  f016509: 'dial, China, Fuzhou', // * [/ip4/220.249.190.57/tcp/44567] dial tcp4 0.0.0.0:38929->220.249.190.57:44567: i/o timeout  * [/ip4/10.25.40.61/tcp/40271] dial tcp4 0.0.0.0:38929->10.25.40.61:40271: i/o timeout
  f016525: 'dial, China, Guangzhou', // * [/ip4/8.210.76.199/tcp/18899] dial tcp4 0.0.0.0:38929->8.210.76.199:18899: i/o timeout
  f016579: 'dial, USA, Howell', // * [/ip4/96.64.7.172/tcp/5472] dial tcp4 0.0.0.0:38929->96.64.7.172:5472: i/o timeout
  f016603: 'dial, China, Dongguan', // * [/ip4/121.10.0.90/tcp/57670] dial tcp4 0.0.0.0:38929->121.10.0.90:57670: i/o timeout
  f016659: 'dial, USA, Alpharetta', // * [/ip4/192.168.1.64/tcp/41931] dial tcp4 0.0.0.0:38929->192.168.1.64:41931: i/o timeout
  f016850: 'dial, Japan', // * [/ip4/163.44.165.168/tcp/30333] dial tcp4 0.0.0.0:38929->163.44.165.168:30333: i/o timeout
  f016859: 'dial, NR', // * [/ip4/116.30.196.165/tcp/16859] dial tcp4 116.30.196.165:16859: connect: connection refused
  f016866: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.4:23450: i/o timeout
  f016917: 'dial, China, Guangdong', // * [/ip4/183.232.116.200/tcp/4001] dial tcp4 183.232.116.200:4001: connect: connection refused
  f017038: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.2:23450: i/o timeout
  f017067: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.3:23450: i/o timeout
  f017082: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.194/tcp/23450] dial tcp4 0.0.0.0:38929->45.192.184.194:23450: i/o timeout
  f017136: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f017193: 'dial, Singapore', // * [/ip4/8.211.49.16/tcp/14567] dial tcp4 0.0.0.0:38929->8.211.49.16:14567: i/o timeout
  f017194: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 0.0.0.0:38929->36.33.216.70:10240: i/o timeout
  f017200: 'dial, Lithuania', // * [/ip4/46.166.165.72/tcp/10240] dial tcp4 0.0.0.0:38929->46.166.165.72:10240: i/o timeout
  f017250: 'dial, China, Zhejiang', // * [/ip4/161.117.88.227/tcp/35252] dial tcp4 0.0.0.0:38929->161.117.88.227:35252: i/o timeout
  f017266: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.2:23450: i/o timeout
  f017273: 'dial, China, Liaoning', // * [/ip4/116.132.221.10/tcp/10241] dial tcp4 116.132.221.10:10241: connect: connection refused
  f017285: 'dial, China, Maoming', // * [/ip4/61.143.232.26/tcp/12345] failed to negotiate security protocol: read tcp4 66.70.191.245:38929->61.143.232.26:12345: read: connection reset by peer
  f017488: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 35.224.87.15:24002: connect: connection refused
  f017635: 'dial, China, Nanchong', // * [/ip4/124.161.87.252/tcp/32005] dial tcp4 0.0.0.0:38929->124.161.87.252:32005: i/o timeout
  f017734: 'dial, Australia, Sydney', // * [/ip4/14.203.98.125/tcp/5472] dial tcp4 14.203.98.125:5472: connect: connection refused
  f017738: 'dial, China', // * [/ip4/101.36.64.212/tcp/42545] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKXPSDMoCiBSyp8j8XYZX3PAsoBj6TkGqsFpvuyXYfqQe, but remote key matches 12D3KooWPb8mXDajrMrCzwN8R7hA7fq3CxhqhDE3oEArpyMzJnMB
  f017794: 'dial, USA, Columbus', // * [/ip4/18.188.2.141/tcp/28003] dial tcp4 0.0.0.0:38929->18.188.2.141:28003: i/o timeout
  f017795: 'dial, USA, Columbus', // * [/ip4/18.216.108.19/tcp/28003] dial tcp4 0.0.0.0:38929->18.216.108.19:28003: i/o timeout
  f017796: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 220.176.125.4:23450: i/o timeout
  f017970: 'dial, China, Baoding', // * [/ip4/222.222.135.67/tcp/37745] dial tcp4 222.222.135.67:37745: connect: connection refused
  f018088: 'dial, USA, Mountain View', // * [/ip4/127.0.0.1/tcp/41941] dial tcp4 127.0.0.1:41941: connect: connection refused  * [/ip6/2601:647:4700:7e:8d28:74f1:99b6:9807/tcp/36371] dial tcp6 [2601:647:4700:7e:8d28:74f1:99b6:9807]:36371: connect: network is unreachable  * [/ip6/::1/tcp/36371] dial tcp6 [::1]:36371: connect: connection refused  * [/ip4/192.168.86.244/tcp/41941] dial tcp4 0.0.0.0:38929->192.168.86.244:41941: i/o timeout  * [/ip4/73.158.190.21/tcp/52286] dial tcp4 0.0.0.0:38929->73.158.190.21:52286: i/o timeout  * [/ip4/73.158.190.21/tcp/39083] dial tcp4 0.0.0.0:38929->73.158.190.21:39083: i/o timeout
  f018119: 'dial, China, Dongguan', // * [/ip4/113.105.174.9/tcp/10000] dial tcp4 0.0.0.0:38929->113.105.174.9:10000: i/o timeout
  f018203: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/5678] dial tcp4 0.0.0.0:38929->95.216.99.39:5678: i/o timeout
  f018429: 'dial, Korea, Hwaseong-si', // * [/ip4/112.222.105.76/tcp/24102] dial tcp4 112.222.105.76:24102: connect: connection refused
  f018440: 'dial, Russia, St. Petersburg', // * [/ip4/188.187.61.69/tcp/44389] dial tcp4 0.0.0.0:38929->188.187.61.69:44389: i/o timeout
  f018464: 'dial, Sweden, Stockholm', // * [/ip4/85.30.30.76/tcp/38387] dial tcp4 0.0.0.0:38929->85.30.30.76:38387: i/o timeout
  f018476: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.4:23450: i/o timeout
  f018493: 'dial, Denmark, Kobenhavn S', // * [/ip4/185.50.195.183/tcp/10243] dial tcp4 0.0.0.0:38929->185.50.195.183:10243: i/o timeout
  f018498: 'dial, Singapore', // * [/ip4/8.209.119.18/tcp/14567] dial tcp4 0.0.0.0:38929->8.209.119.18:14567: i/o timeout
  f018509: 'dial, China, Dongguan', // * [/ip4/113.105.174.6/tcp/10000] dial tcp4 113.105.174.6:10000: connect: no route to host
  f018525: 'dial, USA, Queens', // * [/ip4/24.90.181.106/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPPX51KkQcQhzM1LKBbu3uV2ZkFsBSmcDjLG7kgKqQbp4, but remote key matches 12D3KooWHcpqZ9Ps8cXHk2JaQVqAhjC7cPiLM14YKTmfAXT1LN3M
  f018540: 'dial, Netherlands', // * [/ip4/185.232.59.178/tcp/3347] dial tcp4 0.0.0.0:38929->185.232.59.178:3347: i/o timeout
  f018544: 'dial, Korea, Uijeongbu-si', // * [/ip4/119.193.190.72/tcp/5472] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGgihyz3aZvtSpXyZLtarqMxESor6KXzEp3poz8DRwTuZ, but remote key matches 12D3KooWBhrQUQC5gWtHeRNS1V7ThxEv4hKLCk8Z4PZNy7T1oruT
  f018562: 'dial, New Zealand, Masterton', // * [/ip4/121.99.224.109/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWC9jegSfiHcei2BeABkn1PA164oQ7kpx2AQ12ix136988, but remote key matches 12D3KooWNobH75Kmsr4LhtLbWXpViuRoqtiPUcso2VutUQc4TrtL  * [/ip4/121.99.224.109/tcp/10241] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWC9jegSfiHcei2BeABkn1PA164oQ7kpx2AQ12ix136988, but remote key matches 12D3KooWDcBfXqrBJvVEZZNfu41waaD2rLDM1H5xNBTJEMu5iec5
  f018803: 'dial, Korea, Seodaemun-gu', // * [/ip4/127.0.0.1/tcp/2345] failed to negotiate security protocol: message did not have trailing newline  * [/ip4/119.192.136.11/tcp/12345] dial tcp4 119.192.136.11:12345: connect: connection refused
  f018806: 'dial, Finland, Helsinki', // * [/ip4/95.217.114.57/tcp/45381] dial tcp4 0.0.0.0:38929->95.217.114.57:45381: i/o timeout
  f018809: 'dial, USA, New York', // * [/ip4/45.61.255.20/tcp/41114] dial tcp4 0.0.0.0:38929->45.61.255.20:41114: i/o timeout
  f018851: 'dial, China, Deyang + Singapore', // * [/ip4/103.242.134.36/tcp/12288] failed to negotiate security protocol: read tcp4 66.70.191.245:38929->103.242.134.36:12288: read: connection reset by peer
  f018884: 'dial, Russia', // * [/ip4/46.148.230.142/tcp/34745] dial tcp4 0.0.0.0:38929->46.148.230.142:34745: i/o timeout
  f018905: 'dial, Brazil, Sao Paulo', // * [/ip4/18.228.17.31/tcp/2347] dial tcp4 0.0.0.0:38929->18.228.17.31:2347: i/o timeout
  f018911: 'dial, USA, Portland', // * [/ip4/170.33.12.164/tcp/9090] dial tcp4 0.0.0.0:38929->170.33.12.164:9090: i/o timeout
  f019002: 'dial, USA', // * [/ip4/47.245.132.152/tcp/14567] dial tcp4 0.0.0.0:38929->47.245.132.152:14567: i/o timeout
  f019006: 'dial, Vietman, Ho Chi Minh City + China, Hong Kong', // * [/ip4/119.28.141.16/tcp/2312] dial tcp4 0.0.0.0:38929->119.28.141.16:2312: i/o timeout
  f019007: 'dial, China, Shenzhen + Hong Kong', // * [/ip4/154.91.38.15/tcp/51109] dial tcp4 154.91.38.15:51109: connect: connection refused  * [/ip4/103.44.247.132/tcp/51109] dial tcp4 103.44.247.132:51109: connect: connection refused
  f019015: 'dial, China, Hangzhou + Singapore', // * [/ip4/170.33.12.187/tcp/7087] dial tcp4 0.0.0.0:38929->170.33.12.187:7087: i/o timeout  * [/ip4/170.33.12.188/tcp/7087] dial tcp4 0.0.0.0:38929->170.33.12.188:7087: i/o timeout
  f019022: "dial, China, Xi'an", // * [/ip4/113.200.105.8/tcp/1347] dial tcp4 0.0.0.0:38929->113.200.105.8:1347: i/o timeout
  f019053: 'dial, Singapore', // * [/ip4/8.211.4.148/tcp/10243] dial tcp4 0.0.0.0:38929->8.211.4.148:10243: i/o timeout
  f019056: 'dial, South Africa, Cape Town', // * [/ip4/13.244.216.178/tcp/16079] dial tcp4 0.0.0.0:38929->13.244.216.178:16079: i/o timeout
  f019068: "dial, China, Ya'an, fri", // * [/ip4/110.188.25.2/tcp/30032] dial tcp4 110.188.25.2:30032: connect: connection refused
  f019071: 'dial, USA, New York', // * [/ip4/45.61.255.21/tcp/12345] dial tcp4 0.0.0.0:38929->45.61.255.21:12345: i/o timeout
  f019073: 'dial, Germany, Frankfurt', // * [/ip4/18.157.80.183/tcp/30005] dial tcp4 0.0.0.0:38929->18.157.80.183:30005: i/o timeout
  f019074: 'dial, China, Guangdong', // * [/ip4/192.168.2.55/tcp/3000] dial tcp4 0.0.0.0:38929->192.168.2.55:3000: i/o timeout
  f019087: 'dial, South Africa, Johannesburg', // * [/ip4/152.32.140.119/tcp/41116] failed to negotiate security protocol: EOF
  f019090: 'dial, South Africa, Johannesburg', // * [/ip4/152.32.140.119/tcp/41115] failed to negotiate security protocol: EOF
  f019091: 'dial, China, Chengdu', // * [/ip4/182.131.4.194/tcp/10080] dial tcp4 182.131.4.194:10080: connect: connection refused
  f019094: 'dial, Brazil, Sao Paulo', // * [/ip4/177.71.173.122/tcp/8888] dial tcp4 0.0.0.0:38929->177.71.173.122:8888: i/o timeout
  f019097: 'dial, Russia, Irkutsk', // * [/ip4/90.188.227.20/tcp/46717] dial tcp4 90.188.227.20:46717: connect: connection refused
  f019133: 'dial, UK, Mansfield', // * [/ip4/92.12.185.10/tcp/24002] dial tcp4 92.12.185.10:24002: i/o timeout
  f019145: 'dial, Brazil, Sao Paulo', // * [/ip4/54.232.153.175/tcp/16088] dial tcp4 0.0.0.0:38929->54.232.153.175:16088: i/o timeout
  f019150: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.4:23450: i/o timeout
  f019155: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15110] dial tcp4 0.0.0.0:38929->101.206.156.204:15110: i/o timeout
  f019169: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.40.58/tcp/14567] dial tcp4 0.0.0.0:38929->15.228.40.58:14567: i/o timeout
  f019174: 'dial, UK, Halifax', // * [/ip4/185.177.124.24/tcp/42012] dial tcp4 185.177.124.24:42012: connect: connection refused
  f019182: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15111] dial tcp4 0.0.0.0:38929->101.206.156.204:15111: i/o timeout
  f019185: 'dial, China, Beijing', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f019196: 'dial, China, Shenzhen + Hong Kong', // * [/ip4/103.44.247.132/tcp/51101] dial tcp4 103.44.247.132:51101: connect: connection refused  * [/ip4/115.91.38.15/tcp/51101] dial tcp4 0.0.0.0:38929->115.91.38.15:51101: i/o timeout
  f019233: 'dial, Russia', // * [/ip4/158.255.7.196/tcp/46207] dial tcp4 158.255.7.196:46207: connect: no route to host
  f019248: 'dial, USA, Council Bluffs', // * [/ip4/35.239.142.4/tcp/46717] dial tcp4 0.0.0.0:38929->35.239.142.4:46717: i/o timeout
  f019249: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 35.224.87.15:24002: connect: connection refused
  f019280: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.4:23450: i/o timeout
  f019281: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:38929->45.192.184.195:23450: i/o timeout
  f019317: 'dial, Brazil, Sao Paulo', // * [/ip4/177.71.163.156/tcp/10240] dial tcp4 0.0.0.0:38929->177.71.163.156:10240: i/o timeout
  f019325: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15090] dial tcp4 0.0.0.0:38929->101.206.156.204:15090: i/o timeout
  f019326: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15093] dial tcp4 0.0.0.0:38929->101.206.156.204:15093: i/o timeout
  f019327: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15094] dial tcp4 0.0.0.0:38929->101.206.156.204:15094: i/o timeout
  f019352: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15095] dial tcp4 0.0.0.0:38929->101.206.156.204:15095: i/o timeout
  f019399: 'dial, Korea, Busan', // * [/ip4/106.244.15.21/tcp/14050] dial tcp4 106.244.15.21:14050: i/o timeout  * [/ip4/115.22.10.76/tcp/30044] dial tcp4 0.0.0.0:38929->115.22.10.76:30044: i/o timeout
  f019459: 'dial, USA, Alpharetta', // * [/ip4/45.26.152.112/tcp/4137] dial tcp4 45.26.152.112:4137: connect: connection refused
  f019462: 'dial, Netherlands, Groningen', // * [/ip4/34.90.112.11/tcp/46717] dial tcp4 0.0.0.0:38929->34.90.112.11:46717: i/o timeout
  f019515: 'dial, Netherlands, Groningen', // * [/ip4/35.204.3.95/tcp/46717] dial tcp4 0.0.0.0:38929->35.204.3.95:46717: i/o timeout
  f019523: 'dial, USA, Los Angeles', // * [/ip4/47.156.151.169/tcp/33505] dial tcp4 0.0.0.0:38929->47.156.151.169:33505: i/o timeout
  f019596: 'dial, USA, Queens', // * [/ip4/24.90.181.106/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJ7XhEorySoQkEyajCdcsr9qcesafyFqS8apNeWwF26Ke, but remote key matches 12D3KooWHcpqZ9Ps8cXHk2JaQVqAhjC7cPiLM14YKTmfAXT1LN3M
  f019616: 'dial, USA, Marlborough', // * [/ip4/71.248.173.173/tcp/1347] dial tcp4 0.0.0.0:38929->71.248.173.173:1347: i/o timeout
  f019637: 'dial, China, Nanchang', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.4:23450: i/o timeout
  f019638: 'dial, Germany, Frankfurt', // * [/ip4/1.183.72.210/tcp/30005] dial tcp4 1.183.72.210:30005: connect: connection refused
  f019660: 'dial, South Korea, Cheonan', // * [/ip4/112.167.204.88/tcp/10241] dial tcp4 112.167.204.88:10241: i/o timeout
  f019661: 'dial, Russia, Pyatigorsk', // * [/ip4/217.13.216.202/tcp/5472] dial tcp4 217.13.216.202:5472: connect: connection refused
  f019710: 'dial, Australia, Sydney', // * [/ip4/13.55.45.217/tcp/27002] dial tcp4 0.0.0.0:38929->13.55.45.217:27002: i/o timeout
  f019779: 'dial, China, Xuancheng', // * [/ip4/117.71.104.68/tcp/10000] dial tcp4 0.0.0.0:38929->117.71.104.68:10000: i/o timeout
  f019820: 'dial, Germany', // * [/ip6/2a01:4f8:212:2b45::2/tcp/33731] dial tcp6 [2a01:4f8:212:2b45::2]:33731: connect: network is unreachable  * [/ip4/136.243.77.118/tcp/41679] dial tcp4 136.243.77.118:41679: connect: connection refused
  f020330: 'dial, USA', // * [/ip4/8.130.24.60/tcp/14567] dial tcp4 8.130.24.60:14567: connect: connection refused
  f020331: 'dial, USA', // * [/ip4/39.101.70.154/tcp/14567] dial tcp4 39.101.70.154:14567: connect: connection refused
  f020358: 'dial, China, Xinxiang', // * [/ip4/27.50.142.73/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBWEG5LrQchw9QckdjaL1L98yPCbqvXxJJTy83waUmpph, but remote key matches 12D3KooWHFDkQ1wLQ62T41rT6UghFzeWkzF8rRMt7W7tBfT1Su1m
  f020388: 'dial, Korea, Uijeongbu-si', // * [/ip4/119.193.190.72/tcp/5472] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPdmxWWt6PobzkuCgUsUZwyDYM9TGnvAu38rnd4TshTLZ, but remote key matches 12D3KooWBhrQUQC5gWtHeRNS1V7ThxEv4hKLCk8Z4PZNy7T1oruT
  f020393: 'dial, China, Beijing', // * [/ip4/123.125.194.158/tcp/6789] dial tcp4 0.0.0.0:38929->123.125.194.158:6789: i/o timeout
  f020401: 'dial, USA, Raleigh', // * [/ip4/136.56.12.204/tcp/27972] dial tcp4 136.56.12.204:27972: i/o timeout
  f020431: 'dial, Korea, Seoul', // * [/ip4/125.128.51.180/tcp/24001] dial tcp4 125.128.51.180:24001: i/o timeout
  f020516: 'dial, China, Dalian', // * [/ip4/42.202.134.189/tcp/33666] dial tcp4 0.0.0.0:38929->42.202.134.189:33666: i/o timeout
  f020522: 'dial, Singapore', // * [/ip4/8.211.49.16/tcp/14567] dial tcp4 0.0.0.0:38929->8.211.49.16:14567: i/o timeout
  f020572: 'dial, China, Nanchang', // * [/ip4/220.176.125.123/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.123:23450: i/o timeout
  f020604: 'dial, Singapore', // * [/ip4/8.209.106.203/tcp/14567] dial tcp4 0.0.0.0:38929->8.209.106.203:14567: i/o timeout
  f020608: 'dial, Russia', // * [/ip4/82.148.25.250/tcp/24001] dial tcp4 0.0.0.0:38929->82.148.25.250:24001: i/o timeout
  f020618: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17011] dial tcp4 0.0.0.0:38929->170.33.12.186:17011: i/o timeout  * [/ip4/10.10.12.19/tcp/7000] dial tcp4 0.0.0.0:38929->10.10.12.19:7000: i/o timeout
  f020622: 'dial, China, Hong Kong', // * [/ip4/43.228.183.102/tcp/40573] dial tcp4 43.228.183.102:40573: connect: connection refused
  f020626: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:38929->73.158.16.48:30390: i/o timeout
  f020631: 'dial, China, Zhejiang', // * [/ip4/47.102.202.230/tcp/5472] dial tcp4 47.102.202.230:5472: connect: connection refused
  f020742: 'dial, China, Shanghai + Hangzhou + Shaoxing', // * [/ip4/175.24.25.61/tcp/53456] failed to negotiate security protocol: read tcp4 66.70.191.245:38929->175.24.25.61:53456: read: connection reset by peer
  f020771: 'dial, Japan, Setagaya-ku', // * [/ip4/59.138.253.69/tcp/55555] dial tcp4 59.138.253.69:55555: connect: no route to host
  f020814: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/11051] dial tcp4 183.63.203.161:11051: i/o timeout
  f020816: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/11052] dial tcp4 183.63.203.161:11052: i/o timeout
  f020891: 'dial, China, Wenzhou', // * [/ip4/122.228.196.208/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSitZhuvzGB9mxZvC1rN6ubezTJUrHV2nXxWaBvJQ1Bji, but remote key matches 12D3KooWDLC4HXzHjaMegLssFx9HwMmyNzhGc4XmcSSP9rZaSFyv
  f020923: 'dial, China, Cangzhou', // * [/ip4/221.195.3.147/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNqm96pJbfRVxKPZNM5CBA5yUnDvF8NrWLvamzimoamWf, but remote key matches 12D3KooWGKAuRMFJPmp6v9DR81vnbnFaToheUDUnMsXtT4MCdWq2
  f020967: 'dial, China, Chengdu', // * [/ip4/171.221.236.129/tcp/45001] dial tcp4 171.221.236.129:45001: connect: connection refused
  f021142: 'dial, China, Fuzhou', // * [/ip4/220.176.125.110/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.110:23450: i/o timeout
  f021262: 'dial, China, Shanghai', // * [/ip4/58.33.161.27/tcp/24001] dial tcp4 58.33.161.27:24001: connect: no route to host
  f021292: 'dial, China, Hong Kong', // * [/ip4/43.228.183.102/tcp/40573] dial tcp4 43.228.183.102:40573: connect: connection refused
  f021316: 'dial, China, Yangzhou', // * [/ip4/58.220.66.88/tcp/2347] dial tcp4 58.220.66.88:2347: connect: connection refused
  f021428: 'dial, Norway, Borgen', // * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAgRs1gYFCWPQopKBh3nZPDfq3yJ7gjyvvmd9dpyw7mHH, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f021461: 'dial, China, Yangzhou + Singapore', // * [/ip4/170.33.12.186/tcp/17361] dial tcp4 0.0.0.0:38929->170.33.12.186:17361: i/o timeout
  f021463: 'dial, China, Mianyang', // * [/ip4/117.175.0.194/tcp/18181] dial tcp4 117.175.0.194:18181: connect: connection refused
  f021475: 'dial, China, Dongguan', // * [/ip4/183.240.203.136/tcp/34567] dial tcp4 183.240.203.136:34567: connect: connection refused
  f021483: 'dial, China, Beijing', // * [/ip4/124.250.42.202/tcp/24567] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQ5cSo6iMXULjKb3SVBaij2UwiPnYPVaaa2USiFraVxox, but remote key matches 12D3KooWPWvmSSgQT8y59FzyFArZdnkBV37wBFyu5TQZ4LWsNXPH
  f021525: 'dial, China, Guangdong', // * [/ip4/121.201.41.87/tcp/14567] dial tcp4 0.0.0.0:38929->121.201.41.87:14567: i/o timeout
  f021547: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17329] dial tcp4 0.0.0.0:38929->170.33.12.186:17329: i/o timeout
  f021616: 'dial, China, Shanghai', // * [/ip4/58.33.161.26/tcp/24001] dial tcp4 58.33.161.26:24001: i/o timeout
  f021644: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:38929->73.158.16.48:30390: i/o timeout
  f022031: 'dial, China, Maoming', // * [/ip4/61.143.232.26/tcp/12345] failed to negotiate security protocol: read tcp4 66.70.191.245:38929->61.143.232.26:12345: read: connection reset by peer
  f022069: 'dial, China, Hong Kong', // * [/ip4/221.127.8.183/tcp/24001] dial tcp4 0.0.0.0:38929->221.127.8.183:24001: i/o timeout
  f022111: 'dial, China, Quanzhou', // * [/ip4/112.47.13.98/tcp/8081] dial tcp4 112.47.13.98:8081: connect: connection refused
  f022144: 'dial, China, Fuzhou', // * [/ip4/220.176.125.110/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.110:23450: i/o timeout
  f022146: 'dial, China, Fuzhou', // * [/ip4/220.176.125.123/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.123:23450: i/o timeout
  f022157: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:38929->220.176.125.5:23450: i/o timeout
  f022166: 'dial, Norway, Borgen', // * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLsZ4PQtpyZQpEfXvheZHgirJe7bQmse7brRndyaWs3Jh, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f022304: 'dial, China, Taiyuan', // * [/ip4/221.204.177.81/tcp/2222] dial tcp4 0.0.0.0:38929->221.204.177.81:2222: i/o timeout
  f022320: 'dial, Korea, Seoul', // * [/ip4/220.119.37.150/tcp/24001] dial tcp4 0.0.0.0:38929->220.119.37.150:24001: i/o timeout
  f022351: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.97/tcp/24001] dial tcp4 211.114.218.97:24001: connect: connection refused
  f022361: 'dial, NR', // * [/ip4/8.7.198.46/tcp/19899] dial tcp4 0.0.0.0:38929->8.7.198.46:19899: i/o timeout
  f022364: 'dial, Korea, Jungang-gu', // * [/ip4/125.129.37.73/tcp/10241] dial tcp4 0.0.0.0:38929->125.129.37.73:10241: i/o timeout
  f022374: 'dial, NR', // * [/ip4/170.33.12.95/tcp/16667] dial tcp4 0.0.0.0:38929->170.33.12.95:16667: i/o timeout
  f022395: 'dial, USA, Los Angeles', // * [/ip4/76.90.65.135/tcp/48888] dial tcp4 76.90.65.135:48888: connect: connection refused
  f022405: 'dial, Russia', // * [/ip4/158.255.7.196/tcp/46175] dial tcp4 158.255.7.196:46175: connect: no route to host
  f022512: 'dial, Canada, Embrun', // * [/ip4/148.59.149.162/tcp/10240] dial tcp4 0.0.0.0:38929->148.59.149.162:10240: i/o timeout
  f022518: 'dial, DNS:poseidon.technology', // * [/ip4/1.160.141.15/tcp/24000] dial tcp4 1.160.141.15:24000: connect: connection refused
  f022687: 'dial, China, Chengdu', // * [/ip4/182.131.4.194/tcp/10080] dial tcp4 182.131.4.194:10080: connect: connection refused
  f022737: 'dial, Korea, Gangnum-gu', // * [/ip4/112.216.168.43/tcp/20000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPDeMQg1GK1w8NAnaPS2Pq3DytpW2DZtvQQKA9UheEWAT, but remote key matches 12D3KooWPBwquKY3asxootDXttSQfAUrvotFvv8suATHk2NtRNK6
  f022748: 'dial, China, Xinyang', // * [/ip4/8.209.114.206/tcp/48932] dial tcp4 0.0.0.0:38929->8.209.114.206:48932: i/o timeout  * [/ip4/10.3.1.64/tcp/48932] dial tcp4 0.0.0.0:38929->10.3.1.64:48932: i/o timeout
  f022753: 'dial, China, Hong Kong', // * [/ip4/58.82.195.140/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWEyCxg4tVNDhh9a95GzVfoKr6TZYw1pCbwcMmf2osFttD, but remote key matches 12D3KooWLSjfDHgLQCAmhdsjU9NE7JL2qogfQURgaZXpTLxjsAqQ
  f022780: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.98/tcp/24001] dial tcp4 211.114.218.98:24001: connect: connection refused
  f022787: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.99/tcp/24001] dial tcp4 0.0.0.0:38929->211.114.218.99:24001: i/o timeout
  f022797: 'dial, NR', // * [/ip6/::1/tcp/34061] dial tcp6 [::1]:34061: connect: connection refused  * [/ip4/127.0.0.1/tcp/36357] dial tcp4 127.0.0.1:36357: connect: connection refused  * [/ip4/10.42.1.34/tcp/36357] dial tcp4 0.0.0.0:38929->10.42.1.34:36357: i/o timeout  * [/ip4/183.240.204.122/tcp/36357] dial tcp4 0.0.0.0:38929->183.240.204.122:36357: i/o timeout
  f022855: 'dial, Finland, Helsinki', // * [/ip4/95.217.114.5/tcp/45381] dial tcp4 0.0.0.0:38929->95.217.114.5:45381: i/o timeout
  f022906: 'dial, NR', // * [/ip6/::1/tcp/45627] dial tcp6 [::1]:45627: connect: connection refused  * [/ip4/127.0.0.1/tcp/41535] dial tcp4 127.0.0.1:41535: connect: connection refused  * [/ip4/183.240.204.122/tcp/41535] dial tcp4 0.0.0.0:38929->183.240.204.122:41535: i/o timeout  * [/ip4/10.42.1.39/tcp/41535] dial tcp4 0.0.0.0:38929->10.42.1.39:41535: i/o timeout
  f022913: 'dial, Korea, Uiwang', // * [/ip4/211.170.25.239/tcp/20000] dial tcp4 211.170.25.239:20000: i/o timeout
  f022976: 'dial, Korea, Cheongju-si', // * [/ip4/112.167.204.88/tcp/10241] dial tcp4 112.167.204.88:10241: i/o timeout
  f023009: 'dial, USA, Berkeley', // * [/ip4/50.193.58.118/tcp/4995] dial tcp4 50.193.58.118:4995: connect: no route to host
  f023181: 'dial, DNS:poseidon.technology', // * [/ip4/140.113.194.250/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWL42QpczhsrHfWGC3L38LFac8vfibWfub8ELohMA1ZjjC, but remote key matches 12D3KooWPcST189CRdZ2BLrE5NhFz2YQwcfCWdabj12FWwVNBjYj
  f023190: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 0.0.0.0:38929->36.33.216.70:10240: i/o timeout
  f023200: 'dial, China, Shanghai', // * [/ip4/175.24.25.61/tcp/13457] failed to negotiate security protocol: read tcp4 66.70.191.245:38929->175.24.25.61:13457: read: connection reset by peer
  f023202: 'dial, China, Wuxi', // * [/ip4/58.215.232.74/tcp/10200] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBrUUKAXnschtUgweFhcqt4dEMRkaToUH6hpWxwviM3d2, but remote key matches 12D3KooWPSS9P7FWDoCmBpqt9NGSjbYyFTajiR3wd2VxtfeDiwNN  * [/ip4/192.168.1.18/tcp/1020] dial tcp4 0.0.0.0:38929->192.168.1.18:1020: i/o timeout
  f023229: 'dial, China, Shandong', // * [/ip4/106.74.192.3/tcp/36980] dial tcp4 0.0.0.0:38929->106.74.192.3:36980: i/o timeout
  f023490: 'dial, Ukraine, Kyiv', // * [/ip4/91.224.25.51/tcp/6671] dial tcp4 91.224.25.51:6671: connect: connection refused
  f023518: 'dial, China, Taiyuan', // * [/ip4/221.204.177.81/tcp/24001] dial tcp4 0.0.0.0:38929->221.204.177.81:24001: i/o timeout
  f023549: 'dial, China, Zhejiang', // * [/ip4/47.102.202.230/tcp/5472] dial tcp4 47.102.202.230:5472: connect: connection refused
  f023583: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.120/tcp/24001] dial tcp4 211.114.218.120:24001: connect: connection refused
  f023586: 'dial, USA, Germantown', // * [/ip4/96.255.216.221/tcp/23432] dial tcp4 0.0.0.0:38929->96.255.216.221:23432: i/o timeout
  f023627: 'dial, China, Zhongwei', // * [/ip4/8.8.8.8/tcp/16666] dial tcp4 0.0.0.0:38929->8.8.8.8:16666: i/o timeout
  f023654: 'dial, China, Hong Kong', // * [/ip4/103.100.152.118/tcp/24001] dial tcp4 0.0.0.0:38929->103.100.152.118:24001: i/o timeout
  f023655: 'dial, Australia, Brisbane', // * [/ip4/144.137.18.224/tcp/54321] dial tcp4 144.137.18.224:54321: connect: connection refused
  f023674: 'dial, China, Fuzhou', // * [/ip4/220.176.125.99/tcp/23450] dial tcp4 220.176.125.99:23450: connect: connection refused
  f023937: 'dial, China, Fuzhou', // * [/ip4/220.176.125.99/tcp/23450] dial tcp4 220.176.125.99:23450: connect: connection refused
  f024025: 'dial, China, Chengdu', // * [/ip4/171.221.236.129/tcp/32759] dial tcp4 171.221.236.129:32759: connect: connection refused
  f024030: 'dial, Korea, Gwangju', // * [/ip4/121.148.37.39/tcp/42055] dial tcp4 0.0.0.0:38929->121.148.37.39:42055: i/o timeout
  f024070: 'dial, Japan, Setagaya-ku', // * [/ip4/59.138.253.69/tcp/55555] dial tcp4 59.138.253.69:55555: i/o timeout
  f024108: 'dial, Korea', // * [/ip4/59.23.202.120/tcp/23234] dial tcp4 59.23.202.120:23234: i/o timeout
  f024130: 'dial, Korea', // * [/ip4/59.23.202.120/tcp/23235] dial tcp4 59.23.202.120:23235: connect: connection refused
  f024137: 'dial, NR', // * [/ip4/8.130.25.208/tcp/14567] failed to negotiate security protocol: read tcp4 66.70.191.245:38929->8.130.25.208:14567: read: connection reset by peer
  f024150: 'dial, UK, Mansfield', // * [/ip6/::1/tcp/42553] dial tcp6 [::1]:42553: connect: connection refused  * [/ip4/127.0.0.1/tcp/42797] dial tcp4 127.0.0.1:42797: connect: connection refused  * [/ip4/192.168.0.124/tcp/42797] dial tcp4 0.0.0.0:38929->192.168.0.124:42797: i/o timeout
  f024182: 'dial, NR', // * [/ip4/14.136.246.135/tcp/46717] dial tcp4 0.0.0.0:38929->14.136.246.135:46717: i/o timeout
  f024190: 'dial, China, Wenzhou', // * [/ip4/122.228.196.208/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQHPkEDKyJHgsVzg8t8WA59AuGYbazD2hDMktKJHBJVc6, but remote key matches 12D3KooWDLC4HXzHjaMegLssFx9HwMmyNzhGc4XmcSSP9rZaSFyv
  f024521: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.31/tcp/10241] dial tcp4 0.0.0.0:38929->59.6.127.31:10241: i/o timeout
  f024565: 'dial, Korea, Incheon', // * [/ip4/52.78.230.89/tcp/46469] dial tcp4 0.0.0.0:38929->52.78.230.89:46469: i/o timeout
  f024617: 'dial, Korea, Bucheon-si', // * [/ip4/119.197.20.93/tcp/24001] dial tcp4 119.197.20.93:24001: connect: connection refused
  f024800: 'dial, China, Hong Kong', // * [/ip4/193.112.116.169/tcp/2830] dial tcp4 0.0.0.0:38929->193.112.116.169:2830: i/o timeout  * [/ip4/119.28.141.16/tcp/2830] dial tcp4 0.0.0.0:38929->119.28.141.16:2830: i/o timeout
  f024893: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.1/tcp/24001] dial tcp4 59.6.127.1:24001: connect: connection refused
  f024944: 'dial, Korea, Yeongdeungpo-dong', // * [/ip4/192.168.0.52/tcp/2345] dial tcp4 0.0.0.0:38929->192.168.0.52:2345: i/o timeout
  f024983: 'dial, China, Hong Kong', // * [/ip4/103.100.152.129/tcp/24001] dial tcp4 103.100.152.129:24001: connect: connection refused
  f024985: 'dial, China, Shenzhen', // * [/ip4/192.168.0.175/tcp/3000] dial tcp4 0.0.0.0:38929->192.168.0.175:3000: i/o timeout
  f024986: 'dial, China, Zhongshan', // * [/ip4/192.168.2.64/tcp/3000] dial tcp4 0.0.0.0:38929->192.168.2.64:3000: i/o timeout
  f025002: 'dial, NR', // * [/ip4/10.30.8.211/tcp/14567] dial tcp4 0.0.0.0:38929->10.30.8.211:14567: i/o timeout
  f025008: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.34/tcp/10241] dial tcp4 59.6.127.34:10241: connect: connection refused
  f029344: 'dial, Korea, Seongnam-si', // * [/ip4/221.163.91.162/tcp/33230] dial tcp4 0.0.0.0:38929->221.163.91.162:33230: i/o timeout
  f029377: 'dial, China, Suzhou', // * [/ip4/61.155.145.135/tcp/24006] dial tcp4 61.155.145.135:24006: connect: connection refused
  f029412: 'dial, China, Hefei', // * [/ip4/36.33.216.78/tcp/10240] dial tcp4 36.33.216.78:10240: connect: no route to host
  f029416: 'dial, undefined', // * [/ip4/113.88.64.196/tcp/1024] dial tcp4 113.88.64.196:1024: connect: connection refused
  f029425: 'dial, NR', // * [/ip4/61.155.145.133/tcp/8086] dial tcp4 61.155.145.133:8086: connect: connection refused
  f029552: 'dial, China, Changsha', // * [/ip4/175.6.2.12/tcp/7001] dial tcp4 175.6.2.12:7001: connect: connection refused
  f029556: 'dial, China, Wuxi', // * [/ip4/58.215.232.74/tcp/10200] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSxGj1viupyBBGuwmhBWpdBJDHGEw7BzcUHqzUHXERH59, but remote key matches 12D3KooWPSS9P7FWDoCmBpqt9NGSjbYyFTajiR3wd2VxtfeDiwNN  * [/ip4/192.168.1.18/tcp/1020] dial tcp4 0.0.0.0:38929->192.168.1.18:1020: i/o timeout
  f029587: 'dial, Hungary', // * [/ip4/213.181.222.23/tcp/43875] dial tcp4 213.181.222.23:43875: connect: connection refused
  f029628: 'dial, Australia, Brisbane', // * [/ip4/144.137.18.224/tcp/54321] dial tcp4 144.137.18.224:54321: connect: connection refused
  f029665: 'dial, NR', // * [/ip4/124.95.135.132/tcp/2070] dial tcp4 124.95.135.132:2070: connect: connection refused  * [/ip4/124.95.135.132/tcp/2055] dial tcp4 124.95.135.132:2055: connect: connection refused  * [/ip4/192.168.49.192/tcp/7000] dial tcp4 0.0.0.0:38929->192.168.49.192:7000: i/o timeout  * [/ip4/172.1.1.2/tcp/7000] dial tcp4 0.0.0.0:38929->172.1.1.2:7000: i/o timeout
  f030144: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.3/tcp/10241] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSTzWEGb9ejfLRMau3a34caHJkSvv7v75dXbKmWFjf8m7, but remote key matches 12D3KooWD248AtyAVcxV8ForLztz6gFx2prQb3urNfvwPicyEo4Q
  f030152: 'dial, China, Changsha', // * [/ip4/175.6.13.58/tcp/7000] dial tcp4 175.6.13.58:7000: connect: connection refused
  f030184: 'dial, USA, Aliquippa', // * [/ip4/38.135.10.69/tcp/1348] dial tcp4 38.135.10.69:1348: connect: connection refused
  f030188: 'dial, China, Yangjiang', // * [/ip4/183.233.162.41/tcp/24001] dial tcp4 183.233.162.41:24001: i/o timeout
  f030219: 'dial, China, Changsha', // * [/ip4/175.6.2.5/tcp/7000] dial tcp4 175.6.2.5:7000: connect: connection refused
  f030226: 'dial, China, Fuzhou', // * [/ip4/220.176.125.160/tcp/23450] dial tcp4 220.176.125.160:23450: connect: connection refused
  f030278: 'dial, Korea, Gyeonggi-do', // * [/ip4/211.114.218.110/tcp/24001] dial tcp4 0.0.0.0:38929->211.114.218.110:24001: i/o timeout
  f030296: 'dial, USA, Cary', // * [/ip4/98.26.74.79/tcp/13265] dial tcp4 0.0.0.0:38929->98.26.74.79:13265: i/o timeout
  f030331: 'dial, NR', // * [/ip4/127.0.0.1/tcp/5468] dial tcp4 127.0.0.1:5468: connect: connection refused  * [/ip4/10.42.12.75/tcp/5468] dial tcp4 0.0.0.0:38929->10.42.12.75:5468: i/o timeout  * [/ip4/183.240.204.122/tcp/5468] dial tcp4 0.0.0.0:38929->183.240.204.122:5468: i/o timeout
  f030338: 'dial, USA, Santa Fe Springs', // * [/ip4/47.180.252.45/tcp/1024] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWG2tVqHSkAxQfd7cLtPCh1NLnvNBqnM2dEjeR5yKzmjaC, but remote key matches 12D3KooWKhjRK1ThJDomJdrTpNjyzcFXpJK8SXfLYXvyuUof5oSa
  f030355: 'dial, Australia, Brisbane', // * [/ip4/144.137.18.224/tcp/7070] failed to negotiate security protocol: EOF
  f030391: 'dial, China, Chengdu', // * [/ip4/125.69.0.37/tcp/55009] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHdTezq6JGiZMTbHo5veasqNytf6wGYgLok1GSyn6LLrJ, but remote key matches 12D3KooWKmFzYyThhurG2mC8ZK6RznLFnGD448XkJgNcuABBMK3v
  f032824: 'dial, NR', // * [/ip4/104.54.236.61/tcp/24001] dial tcp4 0.0.0.0:38929->104.54.236.61:24001: i/o timeout
  f032835: 'dial, Japan, Setagaya-ku', // * [/ip4/59.138.253.69/tcp/55555] dial tcp4 59.138.253.69:55555: i/o timeout
  f032850: 'dial, NR', // * [/ip4/127.0.0.1/tcp/5472] dial tcp4 127.0.0.1:5472: connect: connection refused  * [/ip6/::1/tcp/5472] dial tcp6 [::1]:5472: connect: connection refused  * [/ip4/10.42.13.32/tcp/5472] dial tcp4 0.0.0.0:38929->10.42.13.32:5472: i/o timeout  * [/ip4/183.240.204.122/tcp/5472] dial tcp4 0.0.0.0:38929->183.240.204.122:5472: i/o timeout
  f032924: 'dial, China, Fuzhou', // * [/ip4/220.176.125.163/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJqQzGjSeNnh7vdTYUrrYZTkrzwwvPYCcyPFgHMhQarTu, but remote key matches 12D3KooWCFJTMfvUGqfjLaHyYWL2AgGChzBYsvDBWSBERurpbQCR
  f032951: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.5/tcp/10241] dial tcp4 59.6.127.5:10241: connect: connection refused
  f032976: 'dial, China, Taiwan, Taipei', // * [/ip4/114.35.99.104/tcp/20441] dial tcp4 114.35.99.104:20441: connect: connection refused
  f032977: 'dial, China, Deyang', // * [/ip4/117.177.135.20/tcp/13561] dial tcp4 117.177.135.20:13561: connect: connection refused
  f033025: 'dial, Korea', // * [/ip4/59.23.202.120/tcp/23236] dial tcp4 59.23.202.120:23236: connect: connection refused
  f033048: 'dial, USA, Ashburn', // * [/ip4/3.235.178.228/tcp/5556] dial tcp4 3.235.178.228:5556: connect: connection refused
  f033091: 'dial, China, Wuxi', // * [/ip4/192.168.1.34/tcp/1300] dial tcp4 0.0.0.0:38929->192.168.1.34:1300: i/o timeout  * [/ip4/58.215.232.74/tcp/13000] dial tcp4 0.0.0.0:38929->58.215.232.74:13000: i/o timeout
  f033109: 'dial, China, Fuzhou', // * [/ip4/36.248.42.100/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAU3UpuTUVmHZutx7UyKeRpJ6Lx4AQYS5ALRCVhWFxSMJ, but remote key matches 12D3KooWQfvQwCrqiZhWc97jfL5uFFJvAnUWgVFjDRqaSfDTqqjv
  f033123: 'dial, USA, Portland + New Castle', // * [/ip4/47.242.77.118/tcp/16032] dial tcp4 47.242.77.118:16032: connect: connection refused  * [/ip4/47.242.78.100/tcp/16032] dial tcp4 47.242.78.100:16032: connect: connection refused  * [/ip4/47.242.71.3/tcp/16032] dial tcp4 47.242.71.3:16032: connect: connection refused  * [/ip4/47.242.43.84/tcp/16032] dial tcp4 47.242.43.84:16032: connect: connection refused  * [/ip4/47.242.39.102/tcp/16032] dial tcp4 47.242.39.102:16032: connect: connection refused  * [/ip4/47.242.66.98/tcp/16032] dial tcp4 47.242.66.98:16032: connect: connection refused  * [/ip4/47.242.65.177/tcp/16032] dial tcp4 47.242.65.177:16032: connect: connection refused  * [/ip4/47.242.70.110/tcp/16032] dial tcp4 47.242.70.110:16032: connect: connection refused  * [/ip4/47.242.68.99/tcp/16032] dial tcp4 47.242.68.99:16032: connect: connection refused  * [/ip4/47.242.68.119/tcp/16032] dial tcp4 47.242.68.119:16032: connect: connection refused  * [/ip4/47.242.65.136/tcp/16032] dial tcp4 47.242.65.136:16032: connect: connection refused  * [/ip4/47.242.72.244/tcp/16032] dial tcp4 47.242.72.244:16032: connect: connection refused  * [/ip4/47.242.68.29/tcp/16032] dial tcp4 47.242.68.29:16032: connect: connection refused  * [/ip4/47.242.67.7/tcp/16032] dial tcp4 47.242.67.7:16032: connect: connection refused  * [/ip4/47.242.65.12/tcp/16032] dial tcp4 47.242.65.12:16032: connect: connection refused  * [/ip4/47.242.67.107/tcp/16032] dial tcp4 47.242.67.107:16032: connect: connection refused    ... skipping 4 errors ...
  f033206: 'dial, Canada', // * [/ip4/148.59.149.162/tcp/3456] failed to negotiate security protocol: message did not have trailing newline
  f033364: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.35/tcp/10241] dial tcp4 59.6.127.35:10241: connect: connection refused
  f033438: 'dial, USA', // * [/ip4/207.2.201.157/tcp/24001] dial tcp4 0.0.0.0:38929->207.2.201.157:24001: i/o timeout
  f033548: 'dial, China, Fuzhou', // * [/ip4/36.248.42.100/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHq8MHKsfaRpRcPbEPar9RtRgEdt65QNWFkSCfoxoHoMn, but remote key matches 12D3KooWQfvQwCrqiZhWc97jfL5uFFJvAnUWgVFjDRqaSfDTqqjv
  f033549: 'dial, China, Quzhou', // * [/ip4/123.157.96.110/tcp/20001] dial tcp4 123.157.96.110:20001: i/o timeout
  f033557: 'dial, China, Hong Kong', // * [/ip4/45.113.32.169/tcp/24991] dial tcp4 0.0.0.0:38929->45.113.32.169:24991: i/o timeout
  f034075: 'dial, Japan', // * [/ip4/103.204.64.101/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKjD1a5MkU7Dgcm4yr8mcuTYr9qQjwUjtDuyv9NLbzjtv, but remote key matches 12D3KooWRdbne26tGwi78GCWib4gMVDFeU7U7fx9XNb3FdpyaGqE
  f034216: 'dial, China, Wuxi', // * [/ip4/58.215.232.74/tcp/11000] dial tcp4 58.215.232.74:11000: connect: connection refused  * [/ip4/192.168.1.35/tcp/1100] dial tcp4 0.0.0.0:38929->192.168.1.35:1100: i/o timeout
  f034288: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.36/tcp/40703] dial tcp4 59.6.127.36:40703: connect: connection refused
  f034380: 'dial, Korea, Gyeonggi-do', // * [/ip4/211.114.218.105/tcp/24001] dial tcp4 211.114.218.105:24001: connect: connection refused
  f034613: 'dial, China, Nantong', // * [/ip4/117.86.106.157/tcp/24002] dial tcp4 117.86.106.157:24002: connect: connection refused
  f034635: 'dial, Korea, Incheon', // * [/ip4/203.234.181.130/tcp/24001] dial tcp4 0.0.0.0:38929->203.234.181.130:24001: i/o timeout
  f034733: 'dial, China, Hong Kong', // * [/ip4/103.100.152.129/tcp/24001] dial tcp4 103.100.152.129:24001: connect: connection refused
  f034808: 'dial, Korea, Incheon', // * [/ip4/203.234.181.131/tcp/59021] dial tcp4 0.0.0.0:38929->203.234.181.131:59021: i/o timeout
  f039066: 'dial, China, Shenzhen', // * [/ip4/121.34.237.94/tcp/24001] dial tcp4 121.34.237.94:24001: connect: connection refused
  f039224: 'dial, NR', // * [/ip4/172.16.160.164/tcp/34567] dial tcp4 0.0.0.0:38929->172.16.160.164:34567: i/o timeout
  f039663: 'dial, USA, New York', // * [/ip4/66.65.152.110/tcp/5252] dial tcp4 0.0.0.0:38929->66.65.152.110:5252: i/o timeout
  f039712: 'dial, China, Wuxi', // * [/ip4/58.215.232.74/tcp/12000] dial tcp4 58.215.232.74:12000: connect: connection refused  * [/ip4/192.168.1.33/tcp/1200] dial tcp4 0.0.0.0:38929->192.168.1.33:1200: i/o timeout
  f039792: 'dial, China, Baoding', // * [/ip4/222.222.135.67/tcp/37745] dial tcp4 222.222.135.67:37745: connect: connection refused
  f039940: 'dial, China, Mianyang', // * [/ip4/117.175.0.206/tcp/23456] dial tcp4 117.175.0.206:23456: connect: connection refused
  f040248: 'dial, Singapore', // * [/ip4/161.117.229.243/tcp/40248] dial tcp4 161.117.229.243:40248: connect: connection refused  * [/ip4/192.168.1.101/tcp/40248] dial tcp4 0.0.0.0:38929->192.168.1.101:40248: i/o timeout
  f040691: 'dial, NR', // * [/ip4/192.168.32.31/tcp/40691] dial tcp4 0.0.0.0:38929->192.168.32.31:40691: i/o timeout
  f041239: 'dial, Germany', // * [/ip4/46.4.221.200/tcp/27773] dial tcp4 0.0.0.0:38929->46.4.221.200:27773: i/o timeout
  f041893: 'dial, Korea, Uiwang', // * [/ip4/211.170.59.250/tcp/39075] dial tcp4 0.0.0.0:38929->211.170.59.250:39075: i/o timeout
  f042122: 'dial, Spain, Barcelona', // * [/ip4/149.74.108.54/tcp/24001] dial tcp4 149.74.108.54:24001: i/o timeout
  f042489: 'dial, UK, Chipping Norton', // * [/ip4/31.49.45.243/tcp/24001] dial tcp4 0.0.0.0:38929->31.49.45.243:24001: i/o timeout
  f042567: 'dial, China, Jinhua', // * [/ip4/122.226.206.185/tcp/24001] dial tcp4 0.0.0.0:38929->122.226.206.185:24001: i/o timeout
  f042834: 'dial, China, Dongguan', // * [/ip4/183.240.203.186/tcp/34567] dial tcp4 183.240.203.186:34567: connect: connection refused
  f043183: 'dial, Germany', // * [/ip4/135.181.112.125/tcp/24001] dial tcp4 0.0.0.0:38929->135.181.112.125:24001: i/o timeout
  f043187: 'dial, Germany, Nuremberg', // * [/ip4/161.97.122.14/tcp/24001] dial tcp4 161.97.122.14:24001: i/o timeout
  f043205: 'dial, Korea, Seoul', // * [/ip4/59.6.127.5/tcp/10241] dial tcp4 59.6.127.5:10241: connect: connection refused
  f043306: 'dial, Japan', // * [/ip4/103.204.64.106/tcp/24001] dial tcp4 0.0.0.0:38929->103.204.64.106:24001: i/o timeout
  f043313: 'dial, China, Dongguan', // * [/ip4/183.240.203.186/tcp/34567] dial tcp4 183.240.203.186:34567: connect: connection refused
  f043664: 'dial, Italy, Genoa', // * [/ip4/79.3.133.59/tcp/24001] dial tcp4 79.3.133.59:24001: connect: connection refused
  f044054: 'dial, Korea, Busan', // * [/ip4/218.154.241.100/tcp/47347] dial tcp4 0.0.0.0:38929->218.154.241.100:47347: i/o timeout
  f044374: 'dial, Slovakia, Bratislava', // * [/ip4/95.105.251.216/tcp/24001] dial tcp4 95.105.251.216:24001: connect: connection refused
  f044405: 'dial, China, Suzhou', // * [/ip4/58.211.213.210/tcp/20103] dial tcp4 58.211.213.210:20103: connect: connection refused
  f044649: 'dial, Korea, Seoul', // * [/ip4/59.6.127.35/tcp/10241] dial tcp4 59.6.127.35:10241: connect: connection refused
  f044763: 'dial, Japan, Toyota', // * [/ip4/221.118.139.90/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBhbjBw5q5UHvNYWFyZPZvBxyQ2E8mq7i1MZT94N4CZPu, but remote key matches 12D3KooWQztyn6yHhzmPBejxfxtaWktRN3JFfrdpv8SD26tjvMKw
  f044797: 'dial, China, Dongguan', // * [/ip4/183.240.203.187/tcp/34567] dial tcp4 183.240.203.187:34567: connect: connection refused
  f045027: 'dial, Korea, Busan', // * [/ip4/115.22.10.76/tcp/30014] dial tcp4 0.0.0.0:38929->115.22.10.76:30014: i/o timeout
  f045555: 'dial, China, Chongqing', // * [/ip4/113.204.197.4/tcp/6666] dial tcp4 0.0.0.0:38929->113.204.197.4:6666: i/o timeout
  f045756: 'dial, NR', // * [/ip4/10.10.8.61/tcp/7000] dial tcp4 0.0.0.0:38929->10.10.8.61:7000: i/o timeout
  f046013: 'dial, China, Guangzhou', // * [/ip4/183.60.252.190/tcp/23450] failed to negotiate security protocol: message did not have trailing newline
  f047922: 'dial, Korea, Uiwang', // * [/ip4/211.170.59.250/tcp/41409] dial tcp4 0.0.0.0:38929->211.170.59.250:41409: i/o timeout
  f048174: 'dial, China, Fuzhou', // * [/ip4/220.176.125.165/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFDKueDv8BMkDgHjKkguwui4tGmjTguWXWjv4Vbq2Jiv6, but remote key matches 12D3KooWFikUmntbNAjbEbWk7jXHSaA3aQZ6HBG8imPZzQkFzYZk
  f048176: 'dial, China, Fuzhou', // * [/ip4/220.176.125.166/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCmV4etMZ2o1VgREtpheTqGPCZZ8m5gYr5JdgmTYphZnX, but remote key matches 12D3KooWEL13gqLAo2hDiax2PeN2pT3aXVMNpzh3ToxdVFvpVMeV
  f048181: 'dial, China, Fuzhou', // * [/ip4/220.176.125.167/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWDhCxscoyCs55eUh5MVjHV7DMdAqPuj4c1JuJkfxpD1qV, but remote key matches 12D3KooW9vBPr3FEUtNTKdzMZTB3aYsjK2o9bpqAaFfVQDViz8ii
  f048557: 'dial, Korea, Seoul', // * [/ip4/59.6.127.33/tcp/23451] dial tcp4 0.0.0.0:38929->59.6.127.33:23451: i/o timeout
  f048858: 'dial, Japan, Tokyo', // * [/ip4/35.187.223.4/tcp/5120] dial tcp4 0.0.0.0:38929->35.187.223.4:5120: i/o timeout
  f049055: 'dial, USA, Odgen', // * [/ip4/107.182.163.82/tcp/24001] dial tcp4 107.182.163.82:24001: connect: connection refused
  f049773: 'dial, China, Huizhou', // * [/ip4/218.13.75.238/tcp/6666] dial tcp4 0.0.0.0:38929->218.13.75.238:6666: i/o timeout
  f049953: 'dial, Korea, Bucheon-si', // * [/ip4/119.197.20.93/tcp/35323] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKcJHTZajWGoce1XS2vpAJBgGKsLPu3zvfL5qDXExhua8, but remote key matches 12D3KooWARBM9ZzxdKcPxipmCa9Q5hhTCdsEfhM9iGviWpPGjGc3
  f050201: 'dial, Korea, Seoul', // * [/ip4/59.6.127.32/tcp/23451] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWDVLszANBB5c33H7uqvJngscS2kH1gqcWaQNKNojH5kba, but remote key matches 12D3KooWFo12dYtGN2JLGcR6MnQ9sRW9tLvnCFExtKrTwiA76dw7
  f050271: 'dial, China, Changsha', // * [/ip4/124.232.137.156/tcp/24001] dial tcp4 124.232.137.156:24001: connect: connection refused
  f050500: 'dial, Korea, Uiwang', // * [/ip4/211.170.59.250/tcp/35427] dial tcp4 0.0.0.0:38929->211.170.59.250:35427: i/o timeout
  f052135: 'dial, Korea, Goyang-si', // * [/ip4/125.142.94.199/tcp/5120] dial tcp4 125.142.94.199:5120: connect: connection refused
  f053159: 'dial, NR', // * [/ip4/192.168.32.31/tcp/53159] dial tcp4 0.0.0.0:38929->192.168.32.31:53159: i/o timeout
  f053173: 'dial, NR', // * [/ip4/120.232.9.102/tcp/10240] dial tcp4 120.232.9.102:10240: connect: connection refused
  f054083: 'dial, Korea, Hwaseong-si', // * [/ip4/125.136.24.213/tcp/24102] dial tcp4 0.0.0.0:38929->125.136.24.213:24102: i/o timeout
  f054198: 'dial, China, Changsha', // * [/ip4/124.232.137.156/tcp/24001] dial tcp4 124.232.137.156:24001: connect: connection refused
  f054389: 'dial, China, Chongqing', // * [/ip4/127.0.0.1/tcp/43655] dial tcp4 127.0.0.1:43655: connect: connection refused  * [/ip6/::1/tcp/44579] dial tcp6 [::1]:44579: connect: connection refused  * [/ip4/113.204.197.5/tcp/57172] dial tcp4 113.204.197.5:57172: connect: connection refused  * [/ip4/113.204.197.5/tcp/35482] dial tcp4 113.204.197.5:35482: connect: connection refused  * [/ip4/192.168.0.175/tcp/43655] dial tcp4 0.0.0.0:38929->192.168.0.175:43655: i/o timeout
  f054417: 'dial, NR', // * [/ip4/10.1.2.5/tcp/54417] dial tcp4 0.0.0.0:38929->10.1.2.5:54417: i/o timeout
  f054619: 'dial, Korea, Hwaseong-si', // * [/ip4/220.80.40.108/tcp/24202] dial tcp4 0.0.0.0:38929->220.80.40.108:24202: i/o timeout
  f054788: 'dial, Korea, Hwaseong-si + Gwangju', // * [/ip4/211.195.135.221/tcp/24302] dial tcp4 0.0.0.0:38929->211.195.135.221:24302: i/o timeout
  f055044: 'dial, Japan', // * [/ip4/103.204.64.107/tcp/24002] dial tcp4 103.204.64.107:24002: connect: no route to host
  f055178: 'dial, Singapore', // * [/ip4/8.210.106.36/tcp/24001] dial tcp4 0.0.0.0:38929->8.210.106.36:24001: i/o timeout
  f056211: 'dial, USA, Santa Fe Springs', // * [/ip4/47.180.252.45/tcp/1024] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMvkb7Cg1p24nmWkmtgFAwWGfZWgPv5Uv6DZiERpozReb, but remote key matches 12D3KooWKhjRK1ThJDomJdrTpNjyzcFXpJK8SXfLYXvyuUof5oSa
  f056443: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.5/tcp/23451] dial tcp4 59.6.127.5:23451: connect: connection refused
  f057009: 'dial, China, Dongguan', // * [/ip4/183.240.203.188/tcp/44567] dial tcp4 183.240.203.188:44567: connect: connection refused
  f057418: 'dial, Germany', // * [/ip4/88.99.163.73/tcp/24001] dial tcp4 0.0.0.0:38929->88.99.163.73:24001: i/o timeout
  f057618: 'dial, NR', // * [/ip4/10.1.2.1/tcp/57618] dial tcp4 0.0.0.0:38929->10.1.2.1:57618: i/o timeout
  f058143: 'dial, China, Dongguan', // * [/ip4/192.168.5.6/tcp/44567] dial tcp4 0.0.0.0:38929->192.168.5.6:44567: i/o timeout
  f058880: 'dial, Hong Kong', // * [/ip4/58.82.195.140/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRaoqNvVme6T8SaUgmdcAvFm1oQzxFKdLHfKSEahjuFRi, but remote key matches 12D3KooWLSjfDHgLQCAmhdsjU9NE7JL2qogfQURgaZXpTLxjsAqQ
  f059629: 'dial, China, Sichuan', // * [/ip4/118.116.4.130/tcp/24001] dial tcp4 118.116.4.130:24001: connect: connection refused
  f060702: 'dial, NR', // * [/ip4/192.168.6.3/tcp/34567] dial tcp4 0.0.0.0:38929->192.168.6.3:34567: i/o timeout
  f065266: 'dial, China, Hefei', // * [/ip4/175.6.250.74/tcp/51105] dial tcp4 0.0.0.0:38929->175.6.250.74:51105: i/o timeout

  // XNR (Not routable)

  f01000: 'xnr, NR - bootstrap',
  f01001: 'xnr, NR - bootstrap',
  f01002: 'xnr, NR - bootstrap',
  f01013: 'xnr, NR',
  f01101: 'xnr, China, Shanghai',
  f01102: 'xnr, China, Shandong',
  f01156: 'xnr, China, Hangzhou',
  f01231: 'xnr, Singapore',
  f01232: 'xnr, China, Hangzhou',
  f01274: 'xnr, China, Guangdong',
  f02304: 'xnr, USA, Mountain View',
  f02382: 'xnr, China, Zhongshan-cfa',
  f02385: 'xnr, USA, East Islip',
  f02398: 'xnr, China, Hong Kong',
  f02404: 'xnr, Korea, Seoul',
  f02416: 'xnr, China, Guangdong, 星际无限',
  f02424: 'xnr, Korea, Wanju',
  f02436: 'xnr, Netherlands',
  f02506: 'xnr, USA, Clarksville',
  f02515: 'xnr, China, Hangzhou',
  f02518: 'xnr, China, Shaanxi',
  f02575: 'xnr, USA, Davis',
  f02608: 'xnr, USA, San Jose',
  f02768: 'xnr, China, Hong Kong',
  f02770: 'xnr, China, Hong Kong',
  f02774: 'xnr, Australia, Sydney',
  f02775: 'xnr, China, Hong Kong',
  f02822: 'xnr, China, Chengdu',
  f03319: 'xnr, NR',
  f03341: 'xnr, NR',
  f03346: 'xnr, China, Huzhou, wckj',
  f03361: 'xnr, China, Guangzhou',
  f03428: 'xnr, China, Beijing + Jiaxing + Germany, Frankfurt',
  f03487: 'xnr, China, Yibin',
  f03544: 'xnr, China, Guiyang',
  f03619: 'xnr, China, Xiamen',
  f03622: 'xnr, 黑犇科技',
  f03765: 'xnr, Colombia, Medellin',
  f04444: 'xnr, NR',
  f06262: 'xnr, China, Guangzhou',
  f07717: 'xnr, China, Shenyang',
  f07731: 'xnr, NR',
  f07772: 'xnr, China, Dongguan',
  f07796: 'xnr, China, Hunan',
  f07827: 'xnr, China, Wuhan, 天际合',
  f07843: 'xnr, NR',
  f07866: 'xnr, China, Foshan',
  f07924: 'xnr, USA',
  f07931: 'xnr, NR',
  f07959: 'xnr, NR',
  f07964: 'xnr, USA, Ashburn',
  f07987: 'xnr, China, Beijing',
  f08022: 'xnr, China, Yibin',
  f08053: 'xnr, NR',
  f08061: 'xnr, China, Foshan',
  f08095: 'xnr, Canada, Surrey',
  f08097: 'xnr, Korea, Pyeongtaek-si',
  f08136: "xnr, China, Xi'an",
  f08171: 'xnr, NR',
  f08183: 'xnr, USA, Irvine',
  f08223: 'xnr, NR',
  f08225: 'xnr, Australia, Sydney',
  f08238: 'xnr, NR',
  f08246: 'xnr, USA',
  f08280: 'xnr, NR',
  f08284: 'xnr, China, Liaoning',
  f08290: 'xnr, NR',
  f08311: 'xnr, China, Shenzhen',
  f08315: 'xnr, China, Chongqing',
  f08319: 'xnr, NR',
  f08322: 'xnr, China, Chongqing',
  f08327: 'xnr, NR',
  f08349: 'xnr, China, Guangzhou, hkicloud',
  f08361: 'xnr, Malaysia, Kulai',
  f08385: 'xnr, NR',
  f08388: 'xnr, China, Taizhou',
  f08390: 'xnr, China, Shenzhen',
  f08393: 'xnr, NR',
  f08402: 'xnr, China, Sichuan',
  f08406: 'xnr, China, Shenzhen',
  f08424: 'xnr, China, Chengdu',
  f08425: 'xnr, NR',
  f08429: 'xnr, yfeing',
  f08432: 'xnr, China, Taizhou',
  f08440: 'xnr, France, Fontenay-sous-Bois',
  f08460: 'xnr, NR',
  f08474: 'xnr, China, Hong Kong',
  f08503: 'xnr, NR',
  f08574: 'xnr, USA',
  f08787: 'xnr, China, Yibin',
  f08789: 'xnr, China, Fuzhou',
  f08791: 'xnr, NR',
  f08893: 'xnr, NR',
  f08902: 'xnr, NR',
  f08911: 'xnr, Korea, Wanju',
  f08964: 'xnr, NR',
  f08980: 'xnr, USA, San Jose',
  f08988: 'xnr, Korea, Hwaseong-si',
  f08994: 'xnr, NR',
  f09006: 'xnr, NR',
  f09007: 'xnr, Korea, Hwaseong-si',
  f09035: 'xnr, NR',
  f09053: 'xnr, China, Shenzhen',
  f09055: 'xnr, China, Jieyang',
  f09076: 'xnr, NR',
  f09084: 'xnr, NR',
  f09529: 'xnr, NR',
  f09538: 'xnr, NR',
  f09578: 'xnr, NR',
  f09594: 'xnr, NR',
  f09610: 'xnr, China, Beijing',
  f09629: 'xnr, NR',
  f09662: 'xnr, Canada, Surrey',
  f09707: 'xnr, China, Guangdong',
  f09712: 'xnr, China, Chengdu',
  f09719: 'xnr, Korea, Geumcheon-gu',
  f09731: 'xnr, China, Guiyang',
  f09733: 'xnr, China, Chongqing',
  f09736: 'xnr, China, Guangdong',
  f09753: 'xnr, Korea, Pyeongtaek-si',
  f09762: 'xnr, China, Guangdong',
  f09805: 'xnr, China, Fuzhou',
  f09833: 'xnr, USA, San Jose',
  f09840: 'xnr, China, Baoding',
  f09912: 'xnr, USA, Concord',
  f09966: 'xnr, NR',
  f09974: 'xnr, Canada, Calgary',
  f09997: 'xnr, USA',
  f010005: 'xnr, China, Zhongshan',
  f010009: 'xnr, USA, East Islip',
  f010028: 'xnr, USA, Berkeley',
  f010033: 'xnr, NR',
  f010040: 'xnr, China, Shenzhen',
  f010041: 'xnr, USA, Jackson',
  f010078: 'xnr, China, Zhangjiakou + Hong Kong',
  f010173: 'xnr, Korea, Pyeongtaek-si',
  f010200: 'xnr, NR',
  f010213: 'xnr, NR',
  f010222: 'xnr, NR',
  f010227: 'xnr, China, Xiamen',
  f010244: 'xnr, USA, Newton',
  f010248: 'xnr, China, Yibin',
  f010265: 'xnr, China, Zhengzhou',
  f010275: 'xnr, Korea, Cheongju-si + USA',
  f010277: 'xnr, France, Fontenay-sous-Bois',
  f010281: 'xnr, China, Shanghai',
  f010282: 'xnr, USA, San Francisco',
  f010283: 'xnr, Brazil, Sao Paulo',
  f010292: 'xnr, NR',
  f010293: 'xnr, China, Xiamen',
  f010297: 'xnr, USA, Howell',
  f010303: 'xnr, China, Guangdong',
  f010305: 'xnr, NR',
  f010310: 'xnr, Canada, Surrey',
  f010313: 'xnr, NR',
  f010315: 'xnr, Canada, Surrey',
  f010346: 'xnr, China, Karamay',
  f010382: 'xnr, NR',
  f010402: 'xnr, China, Shenyang',
  f010425: 'xnr, NR',
  f010433: 'xnr, Korea, Seoul',
  f010438: 'xnr, USA',
  f010453: 'xnr, China, Shaanxi',
  f010468: 'xnr, China, Guangzhou',
  f010490: 'xnr, NR',
  f010517: 'xnr, China, Chongqing',
  f010520: 'xnr, China, Hangzhou',
  f010542: 'xnr, China, Ordos',
  f010549: 'xnr, China, Ordos',
  f010551: 'xnr, China, Shenyang',
  f010559: 'xnr, China, Shenyang',
  f010566: 'xnr, NR',
  f010591: 'xnr, China, Wuhan',
  f010601: 'xnr, NR',
  f010602: 'xnr, China, Guangdong',
  f010603: 'xnr, China, Baoding',
  f010612: 'xnr, USA, Mountain View',
  f014207: 'xnr, USA',
  f014261: 'xnr, China, Fuzhou',
  f014271: 'xnr, China, Fuzhou',
  f014314: 'xnr, Korea, Bucheon-si',
  f014331: 'xnr, China, Chongqing',
  f014335: 'xnr, NR',
  f014354: 'xnr, USA, Concord',
  f014366: 'xnr, USA, Mountain View',
  f014388: 'xnr, China, Guangdong',
  f014389: 'xnr, China, Chongqing',
  f014407: 'xnr, China, Shanghai',
  f014419: 'xnr, USA, San Diego',
  f014420: 'xnr, Russia, Samara',
  f014425: 'xnr, Singapore',
  f014477: 'xnr, China, Hangzhou',
  f014478: 'xnr, Finland',
  f014486: 'xnr, NR',
  f014495: 'xnr, China, Hong Kong',
  f014514: 'xnr, China, Fuzhou',
  f014533: 'xnr, China, Fuzhou',
  f014540: 'xnr, USA, Newton',
  f014556: 'xnr, Korea, Bucheon-si',
  f014629: 'xnr, NR',
  f014660: 'xnr, Korea, Busan',
  f014685: 'xnr, Hong Kong',
  f014686: 'xnr, Singapore',
  f014699: 'xnr, USA',
  f014708: 'xnr, China, Beijing',
  f014741: 'xnr, China, Wuhan',
  f014745: 'xnr, China, Shenyang',
  f014749: 'xnr, China, Chongqing',
  f014764: 'xnr, Korea, Wanju',
  f014793: 'xnr, China, Hangzhou',
  f014799: 'xnr, China, Chongqing',
  f015061: 'xnr, Australia, Sydney',
  f015232: 'xnr, Poland, Warsaw',
  f015647: 'xnr, China, Shenzhen',
  f015709: 'xnr, China, Hefei',
  f015724: 'xnr, China, Guangdong',
  f015753: 'xnr, China, Guyuan',
  f015797: 'xnr, Germany, Rostock',
  f015799: 'xnr, Germany, Rostock',
  f015809: 'xnr, Germany',
  f015827: 'xnr, Russia',
  f015829: 'xnr, China, Beijing',
  f015833: 'xnr, China, Baoding',
  f015867: 'xnr, Netherlands, Amsterdam',
  f015870: 'xnr, China, Hangzhou',
  f015875: 'xnr, China, Fuzhou',
  f015891: 'xnr, China, Shanghai',
  f015902: 'xnr, Germany',
  f015920: 'xnr, China, Guangdong',
  f015932: 'xnr, NR',
  f015935: 'xnr, China, Sichuan',
  f015938: 'xnr, Canada, Waterloo',
  f015940: 'xnr, Netherlands, Amsterdam',
  f016140: 'xnr, China, Beijing',
  f016162: 'xnr, France, Borgo',
  f016172: 'xnr, China, Guangdong',
  f016203: 'xnr, China, Chengdu',
  f016217: 'xnr, China, Nanchong',
  f016228: 'xnr, China, Chengdu',
  f016234: 'xnr, China, Chengdu',
  f016262: 'xnr, China, Fuzhou',
  f016271: 'xnr, Korea, Seodaemun-gu',
  f016299: 'xnr, China, Shanghai',
  f016303: 'xnr, USA, Boardman',
  f016304: 'xnr, USA, Boardman',
  f016305: 'xnr, USA, Boardman',
  f016306: 'xnr, USA, Boardman',
  f016408: 'xnr, NR',
  f016426: 'xnr, NR',
  f016436: 'xnr, Korea, Seoul',
  f016456: 'xnr, China, Zhejiang',
  f016462: 'xnr, USA, Clarksville',
  f016482: 'xnr, USA, Aliquippa',
  f016628: 'xnr, NR',
  f016688: 'xnr, Germany, Frankfurt',
  f016706: 'xnr, China, Guangzhou',
  f017117: 'xnr, Russia, Samara',
  f017171: 'xnr, NR',
  f017181: 'xnr, China, Nanchong',
  f017186: 'xnr, China, Jiaxing',
  f017209: 'xnr, NR',
  f017215: 'xnr, Finland',
  f017216: 'xnr, NR',
  f017236: 'xnr, NR',
  f017251: 'xnr, USA',
  f017294: 'xnr, China, Shenzhen',
  f017323: 'xnr, Poland, Warsaw',
  f017334: 'xnr, China, Fuzhou',
  f017430: 'xnr, Australia, Alexandria-cfa',
  f017618: 'xnr, Korea, Wanju',
  f017628: 'xnr, Brazil, Sao Paulo',
  f017655: 'xnr, NR',
  f017722: 'xnr, NR',
  f017747: 'xnr, NR',
  f017793: 'xnr, NR',
  f018081: 'xnr, Germany',
  f018095: 'xnr, Colombia, Medellin',
  f018128: 'xnr, China, Dongguan',
  f018164: 'xnr, USA, Howell',
  f018311: "xnr, China, Xi'an, <23h",
  f018369: 'xnr, NR',
  f018393: 'xnr, Colombia, Medellin',
  f018397: 'xnr, USA, Howell',
  f018425: 'xnr, USA, Howell',
  f018437: 'xnr, NR',
  f018441: 'xnr, USA',
  f018445: 'xnr, NR',
  f018446: 'xnr, China, Dongguan',
  f018456: 'xnr, Brazil, Sao Paulo',
  f018474: 'xnr, China, Xiamen',
  f018484: 'xnr, China, Shanghai',
  f018490: 'xnr, Korea, Hwaseong-si',
  f018513: 'xnr, NR',
  f018517: 'xnr, USA, Columbus',
  f018518: "xnr, China, Xi'an",
  f018520: 'xnr, China',
  f018530: 'xnr, China, Shaanxi',
  f018531: 'xnr, China, Shaanxi',
  f018537: 'xnr, China, Shaanxi',
  f018538: 'xnr, China, Huzhou',
  f018542: 'xnr, China, Chongqing',
  f018754: 'xnr, China, Dali',
  f018761: 'xnr, Russia, St. Petersburg',
  f018790: 'xnr, China, Chengdu',
  f018802: 'xnr, China, Dongguan',
  f018812: 'xnr, South Africa, Cape Town',
  f018836: 'xnr, NR',
  f018837: 'xnr, China, Shaanxi',
  f018844: 'xnr, NR',
  f018864: 'xnr, Korea, Busan',
  f018865: 'xnr, China, Chengdu',
  f018869: 'xnr, NR',
  f018879: 'xnr, Korea, Geumcheon-gu',
  f018899: 'xnr, China, Shanghai',
  f019017: 'xnr, China, Wenzhou-cfa',
  f019024: 'xnr, China, Sichuan',
  f019031: 'xnr, NR',
  f019042: 'xnr, China, Shanghai',
  f019048: 'xnr, Brazil, Sao Paulo',
  f019062: 'xnr, Germany',
  f019069: 'xnr, NR',
  f019109: 'xnr, USA, Howell',
  f019114: 'xnr, USA, Howell',
  f019118: 'xnr, China, Jiaxing',
  f019123: 'xnr, China, Dongguan',
  f019160: 'xnr, USA, Fremont',
  f019173: 'xnr, China, Nanchong',
  f019184: 'xnr, China, Yibin',
  f019218: 'xnr, China, Dali',
  f019239: 'xnr, China, Jiaxing',
  f019264: 'xnr, NR',
  f019284: 'xnr, China, Foshan',
  f019376: 'xnr, NR',
  f019378: 'xnr, China, Changzhou',
  f019401: 'xnr, Brazil, Sao Paulo',
  f019423: 'xnr, South Africa, Johannesburg',
  f019434: 'xnr, NR',
  f019525: 'xnr, USA, Berkeley',
  f019528: 'xnr, Peru',
  f019547: 'xnr, Peru',
  f019645: 'xnr, Russia, St. Petersburg',
  f019723: 'xnr, China, Zhongshan',
  f019734: 'xnr, NR',
  f019757: 'xnr, NR',
  f019804: 'xnr, China, Chengdu',
  f019809: 'xnr, NR',
  f019812: 'xnr, NR',
  f019825: 'xnr, China, Hong Kong',
  f020241: 'xnr, NR',
  f020260: 'xnr, NR',
  f020276: 'xnr, China, Xiamen',
  f020281: 'xnr, Korea, Uijeongbu-si',
  f020352: 'xnr, NR',
  f020361: 'xnr, Colombia, Medellin',
  f020366: 'xnr, China, Chengdu',
  f020369: 'xnr, NR',
  f020379: 'xnr, NR',
  f020386: 'xnr, Russia',
  f020390: 'xnr, NR',
  f020408: 'xnr, China, Hong Kong',
  f020432: 'xnr, Korea, Wanju',
  f020433: 'xnr, NR',
  f020439: 'xnr, China, Chengdu',
  f020450: 'xnr, NR',
  f020451: 'xnr, NR',
  f020453: 'xnr, China, Chengdu',
  f020457: 'xnr, NR',
  f020525: 'xnr, China, Dongguan',
  f020559: 'xnr, China, Liaoning',
  f020563: 'xnr, China, Dongguan',
  f020578: 'xnr, Korea, Wanju',
  f020641: 'xnr, NR',
  f020678: 'xnr, China, Wenzhou',
  f020682: 'xnr, NR',
  f020683: 'xnr, China, Changsha',
  f020691: 'xnr, NR',
  f020739: 'xnr, China, Dongguan',
  f020763: 'xnr, China, Luzhou',
  f020775: 'xnr, Japan, Osaka',
  f020786: 'xnr, China, Shenzhen',
  f020788: 'xnr, China, Chengdu',
  f020789: 'xnr, NR',
  f020791: 'xnr, China, Hangzhou',
  f020819: 'xnr, China, Chengdu',
  f020822: 'xnr, China, Shanghai',
  f020896: 'xnr, NR',
  f020899: 'xnr, China, Chengdu',
  f020914: 'xnr, NR',
  f020934: 'xnr, NR',
  f020939: 'xnr, NR',
  f020940: 'xnr, @fu',
  f020957: 'xnr, NR',
  f020961: 'xnr, China, Shanghai',
  f020975: 'xnr, China, Shandong',
  f020993: 'xnr, China, Hong Kong',
  f021069: 'xnr, USA',
  f021083: 'xnr, NR',
  f021092: 'xnr, NR',
  f021095: 'xnr, NR',
  f021254: 'xnr, NR',
  f021274: 'xnr, China, Shanghai',
  f021286: 'xnr, China, Shaanxi',
  f021307: 'xnr, China, Chengdu',
  f021311: 'xnr, NR',
  f021337: 'xnr, China, Beijing',
  f021346: 'xnr, China, Shanghai',
  f021357: 'xnr, China, Shanghai',
  f021418: 'xnr, NR',
  f021494: 'xnr, NR',
  f021500: 'xnr, NR',
  f021504: 'xnr, NR',
  f021505: 'xnr, NR',
  f021509: 'xnr, China, Fuzhou',
  f021527: 'xnr, NR',
  f021536: 'xnr, NR',
  f021555: 'xnr, NR',
  f021574: 'xnr, NR',
  f021580: 'xnr, NR',
  f021684: 'xnr, NR',
  f021695: 'xnr, USA',
  f021699: 'xnr, NR',
  f021704: 'xnr, NR',
  f021710: 'xnr, China, Shijiazhuang',
  f021725: 'xnr, NR',
  f021961: 'xnr, NR',
  f021976: 'xnr, NR',
  f022015: 'xnr, China, Hangzhou',
  f022016: 'xnr, NR',
  f022030: 'xnr, NR',
  f022033: 'xnr, NR',
  f022038: 'xnr, NR',
  f022084: 'xnr, China, Shaanxi',
  f022089: 'xnr, China, Beijing',
  f022091: 'xnr, NR',
  f022093: 'xnr, NR',
  f022108: 'xnr, China, Luzhou',
  f022119: 'xnr, USA, Lovettsville',
  f022122: 'xnr, NR',
  f022132: 'xnr, China, Dongguan',
  f022171: 'xnr, China, Shanghai',
  f022202: 'xnr, USA, Howell',
  f022250: 'xnr, NR',
  f022262: 'xnr, China, Hong Kong',
  f022276: 'xnr, Korea, Seoul',
  f022284: 'xnr, China, Shaanxi',
  f022287: 'xnr, China, Dongguan',
  f022303: 'xnr, NR',
  f022313: 'xnr, NR',
  f022321: 'xnr, China, Hong Kong',
  f022326: 'xnr, China, Zhongshan',
  f022333: 'xnr, China, Dongguan',
  f022336: 'xnr, NR',
  f022337: 'xnr, NR',
  f022338: 'xnr, NR',
  f022343: 'xnr, China, Dongguan',
  f022372: 'xnr, China, Chengdu',
  f022373: 'xnr, Singapore',
  f022376: 'xnr, China, Dongguan',
  f022494: 'xnr, China, Dongguan',
  f022501: 'xnr, Japan, Osaka',
  f022503: 'xnr, NR',
  f022505: 'xnr, China, Shanghai',
  f022517: 'xnr, China, Taiwan, Taipei',
  f022562: 'xnr, NR',
  f022564: 'xnr, NR',
  f022683: 'xnr, NR',
  f022755: 'xnr, China, Shenzhen',
  f022776: 'xnr, Korea, Guri-si',
  f022786: 'xnr, NR',
  f022790: 'xnr, China, Luzhou',
  f022791: 'xnr, NR',
  f022804: 'xnr, China, Yibin',
  f022834: 'xnr, NR',
  f022836: 'xnr, China, Chongqing',
  f022838: 'xnr, China, Hong Kong',
  f022841: 'xnr, China, Zhongshan',
  f022857: 'xnr, NR',
  f022880: 'xnr, NR',
  f022911: 'xnr, China, Hong Kong',
  f022912: 'xnr, NR',
  f022926: 'xnr, NR',
  f022930: 'xnr, NR',
  f022954: 'xnr, NR',
  f022967: 'xnr, Korea, Seoul',
  f022970: 'xnr, NR',
  f022996: 'xnr, NR',
  f023021: 'xnr, Korea, Yeongdeungpo-dong',
  f023108: 'xnr, China, Dongguan',
  f023159: 'xnr, NR',
  f023198: 'xnr, NR',
  f023207: 'xnr, NR',
  f023210: 'xnr, China, Dongguan',
  f023219: 'xnr, NR',
  f023254: 'xnr, NR',
  f023463: 'xnr, NR',
  f023482: 'xnr, NR',
  f023499: 'xnr, NR',
  f023501: 'xnr, China, Mianyang',
  f023505: 'xnr, NR',
  f023526: 'xnr, China, Chongqing',
  f023535: 'xnr, China, Hong Kong',
  f023560: 'xnr, NR',
  f023568: 'xnr, NR',
  f023571: 'xnr, NR',
  f023626: 'xnr, NR',
  f023643: 'xnr, NR',
  f023647: 'xnr, Korea, Gangseo-gu',
  f023649: 'xnr, Korea, Seoul',
  f023651: 'xnr, NR',
  f023661: 'xnr, China, Zhejiang',
  f023798: 'xnr, China, Shanghai',
  f023801: 'xnr, China, Dongguan',
  f023826: 'xnr, USA, Germantown',
  f023881: 'xnr, China, Fuzhou',
  f023882: 'xnr, NR',
  f023943: 'xnr, USA, Ashburn',
  f023965: 'xnr, NR',
  f023986: 'xnr, Korea, Seoul',
  f024031: 'xnr, NR',
  f024074: 'xnr, NR',
  f024089: 'xnr, NR',
  f024129: 'xnr, China, Zhejiang',
  f024153: 'xnr, NR',
  f024165: 'xnr, NR',
  f024168: 'xnr, USA, Ashburn',
  f024483: 'xnr, NR',
  f024496: 'xnr, China, Dongguan',
  f024526: 'xnr, Korea',
  f024556: 'xnr, NR',
  f024557: 'xnr, NR',
  f024558: 'xnr, NR',
  f024559: 'xnr, NR',
  f024563: 'xnr, NR',
  f024611: 'xnr, China, Dongguan',
  f024802: 'xnr, NR',
  f024894: 'xnr, NR',
  f024895: 'xnr, undefined',
  f024902: 'xnr, Korea, Incheon',
  f024903: 'xnr, undefined',
  f024969: 'xnr, NR',
  f024972: 'xnr, undefined',
  f025005: 'xnr, NR',
  f025028: 'xnr, NR',
  f025032: 'xnr, China, Beijing',
  f029421: 'xnr, undefined',
  f029477: 'xnr, undefined',
  f029529: 'xnr, China, Dongguan',
  f029546: 'xnr, NR',
  f029566: 'xnr, NR',
  f029585: 'xnr, NR',
  f029595: 'xnr, undefined',
  f029619: 'xnr, undefined',
  f029632: 'xnr, undefined',
  f030230: 'xnr, China, Sichuan',
  f030231: 'xnr, China, Hunan',
  f030249: 'xnr, NR',
  f030272: 'xnr, undefined',
  f030379: 'xnr, Korea, Uiwang',
  f030386: 'xnr, NR',
  f030408: 'xnr, undefined',
  f030509: 'xnr, undefined',
  f030510: 'xnr, undefined',
  f030511: 'xnr, undefined',
  f030514: 'xnr, NR',
  f030518: 'xnr, China, Wuhan',
  f030521: 'xnr, China, Hong Kong',
  f030531: 'xnr, NR',
  f030608: 'xnr, China, Mianyang',
  f030641: 'xnr, China, Shaanxi',
  f030649: 'xnr, NR',
  f032833: 'xnr, NR',
  f032865: 'xnr, USA, Redmond',
  f032887: 'xnr, undefined',
  f032904: 'xnr, undefined',
  f032922: 'xnr, undefined',
  f033014: 'xnr, NR',
  f033028: 'xnr, China, Mianyang',
  f033036: 'xnr, China, Liaoning',
  f033111: 'xnr, China, Shanghai',
  f033124: 'xnr, China, Shanghai',
  f033125: 'xnr, NR',
  f033130: 'xnr, NR',
  f033209: 'xnr, NR',
  f033224: 'xnr, NR',
  f033384: 'xnr, NR',
  f033399: 'xnr, NR',
  f033456: 'xnr, NR',
  f033462: 'xnr, NR',
  f033463: 'xnr, NR',
  f033475: 'xnr, NR',
  f033545: 'xnr, China, Shenzhen + USA',
  f034084: 'xnr, China, Chongqing',
  f034229: 'xnr, USA, Minneapolis',
  f034311: 'xnr, Korea, Gangnam-gu',
  f034544: 'xnr, NR',
  f034545: 'xnr, NR',
  f034548: 'xnr, NR',
  f034566: 'xnr, NR',
  f034652: 'xnr, Korea, Yeongdeungpo-dong',
  f034707: 'xnr, NR',
  f034710: 'xnr, NR',
  f035160: 'xnr, NR',
  f035161: 'xnr, NR',
  f035364: 'xnr, NR',
  f039992: 'xnr, NR',
  f040137: 'xnr, NR',
  f040432: 'xnr, NR',
  f040468: 'xnr, NR',
  f040665: 'xnr, NR',
  f040971: 'xnr, NR',
  f042344: 'xnr, Korea',
  f042839: 'xnr, Korea, Pocheon-si',
  f042855: 'xnr, NR',
  f043376: 'xnr, Korea, Incheon',
  f044143: 'xnr, China, Taiwan, Taipei',
  f044315: 'xnr, NR',
  f044788: 'xnr, NR',
  f045505: 'xnr, NR',
  f045743: 'xnr, NR',
  f046078: 'xnr, China, Shaanxi',
  f046315: 'xnr, NR',
  f046317: 'xnr, China, Nanyang',
  f047327: 'xnr, China, Hong Kong',
  f047536: 'xnr, NR',
  f047666: 'xnr, NR',
  f048545: 'xnr, China, Chengdu',
  f048669: 'xnr, NR',
  f048968: 'xnr, NR',
  f048975: 'xnr, NR',
  f048986: 'xnr, NR',
  f049990: 'xnr, Korea, Incheon',
  f052503: 'xnr, NR',
  f052562: 'xnr, NR',
  f052701: 'xnr, NR',
  f052740: 'xnr, China, Shaanxi',
  f053229: 'xnr, NR',
  f053446: 'xnr, NR',
  f054120: 'xnr, NR',
  f054267: 'xnr, NR',
  f054412: 'xnr, NR',
  f054414: 'xnr, NR',
  f054415: 'xnr, NR',
  f054418: 'xnr, NR',
  f054420: 'xnr, NR',
  f054464: 'xnr, NR',
  f054499: 'xnr, NR',
  f054526: 'xnr, NR',
  f054666: 'xnr, NR',
  f055335: 'xnr, NR',
  f055347: 'xnr, Korea, Busan',
  f055446: 'xnr, NR',
  f056226: 'xnr, NR',
  f056227: 'xnr, NR',
  f056393: 'xnr, NR',
  f056406: 'xnr, NR',
  f057070: 'xnr, NR',
  f057683: 'xnr, NR',
  f058003: 'xnr, China, Shenzhen',
  f058321: 'xnr, China, Dongguan',
  f058349: 'xnr, NR',
  f059652: 'xnr, China, Beijing',
  f059705: 'xnr, Korea, Naju',
  f059813: 'xnr, NR',
  f060693: 'xnr, NR',
  f060754: 'xnr, NR',
  f060805: 'xnr, NR',
  f061051: 'xnr, NR',
  f061170: 'xnr, NR',
  f061174: 'xnr, NR',
  f061959: 'xnr, NR',
  f062245: 'xnr, NR',
  f062449: 'xnr, NR',
  f062473: 'xnr, NR',
  f062475: 'xnr, NR',
  f062552: 'xnr, NR',
  f062931: 'xnr, NR',
  f062937: 'xnr, NR',
  f063869: 'xnr, NR',
  f064855: 'xnr, NR',
  f064908: 'xnr, NR',
  f065113: 'xnr, NR',
  f065477: 'xnr, NR'
}

export default annotations
