// Small file test results
//
// This are based on a test run (usually once a day) where I attempt
// to make deals for a small file (about ~90kB) with as many miners as
// possible. It is expected that most miners will filter based on size.

// Additional testing will be performed with larger files with
// selected miners (>128MiB of data)

// See annotations-spacerace-slingshot-medium.js for larger file results

const annotations = {
  // Active

  f01238: 'active, Vietnam, Hanoi, FILECOIN-VIETNAM', // 669278 about 18 hours
  f01247: 'active, Canada, Montreal, BigChungus™', // 669067 about 10 hours
  f01272: 'active, Singapore', // 669077 about 7 hours
  f01278: 'active, USA, Grand Rapids, MiMiner', // 669098 about 13 hours
  f01289: 'active, China, Hangzhou + USA', // 669070 about 18 hours
  f01782: 'active, China, Hong Kong + Singapore + USA, Portland, hellofil.com', // 669096 about 5 hours
  f02416: 'active, China, Guangdong, 星际无限', // 669101 about 8 hours
  f02606: 'active, China, Shanghai', // 669099 about 10 hours
  f02620: 'active, Poland, Krakow, @magik6k', // 669312 about 11 hours
  f02666: 'active, China, Chengdu', // 669007 about 10 hours
  f02822: 'active, China, Chengdu', // 669008 about 21 hours
  f03176: 'active, USA, San Mateo, Five Star-Helmsman&Heiben', // 669116 about 18 hours
  f03273: 'active, USA, Portland, 6block', // 669109 about 7 hours
  f03275: 'active, USA, Portland, 6block', // 669125 about 7 hours
  f03302: 'active, China, Chengdu', // 669120 about 16 hours
  f03339: 'active, China, Luzhou, benxun', // 669134 about 7 hours
  f03363: 'active, Singapore', // 669118 about 15 hours
  f03488: 'active, Korea, Geumcheon-gu', // 669510 about 9 hours
  f03491: 'active, China, Hong Kong', // 669310 about 15 hours
  f07819: 'active, China, Wuxi, YC--wuxi', // 669117 about 11 hours
  f07850: 'active, USA, Portland, 6block', // 669121 about 7 hours
  f08019: 'active, China, Yantai, 三合', // 669139 about 16 hours
  f08474: 'active, China, Hong Kong', // 670563 about 12 hours
  f010247: 'active, China, Yantai', // 669156 about 21 hours
  f010400: 'active, China, Shenyang', // 669602 about 11 hours
  f010491: 'active, China, Shenzhen', // 669166 about 9 hours
  f010505: 'active, China, Wuhan', // 669173 about 10 hours
  f010507: 'active, China, Hangzhou', // 669174 about 13 hours
  f014768: 'active, Singapore', // 669154 about 21 hours
  f015233: 'active, China, Nanjing', // 669183 about 13 hours
  f015927: 'active, USA, East Islip', // 669529 about 10 hours
  f016594: 'active, Germany', // 669180 about 13 hours
  f019029: 'active, Serbia, Boljevac', // 670396 about 18 hours
  f019240: 'active, China, Beijing', // 669360 about 16 hours
  f020523: 'active, China, Suzhou', // 672686 about 9 hours
  f020541: 'active, China, Shanghai', // 669199 about 15 hours
  f020605: 'active, China, Yibin', // 669200 about 16 hours
  f021444: 'active, China, Guangzhou', // 669206 about 18 hours
  f022142: 'active, USA, Queens', // 669545 about 13 hours
  f022227: 'active, China, Jiangsu', // 669208 about 15 hours
  f022352: 'active, Norway, Borgen', // 669217 about 16 hours
  f022853: 'active, China, Fuzhou', // 669314 about 8 hours
  f022922: 'active, China, Shenzhen', // 669227 about 21 hours
  f023152: 'active, China, Quanzhou', // 669396 about 18 hours
  f023179: 'active, China, Fuzhou', // 669432 about 13 hours
  f023492: 'active, China, Beijing', // 669566 about 13 hours
  f023647: 'active, Korea, Gangseo-gu', // 670536 about 14 hours
  f023978: 'active, China, Fuzhou', // 669232 about 11 hours
  f023980: 'active, China, Fuzhou', // 672797 about 5 hours
  f024030: 'active, Korea, Gwangju', // 669249 about 13 hours
  f024066: 'active, NR', // 669251 about 7 hours
  f025017: 'active, China, Hefei', // 669270 about 7 hours
  f029368: 'active, Korea, Gangseo-gu', // 670537 about 14 hours
  f029377: 'active, China, Suzhou', // 669617 about 10 hours
  f029490: 'active, NR', // 669626 about 7 hours
  f029524: 'active, China, Hong Kong', // 669133 about 19 hours
  f030284: 'active, China, Shandong', // 669129 about 7 hours
  f030379: 'active, Korea, Uiwang', // 669478 about 10 hours
  f032835: 'active, Japan, Setagaya-ku', // 669632 about 10 hours
  f032913: 'active, China, Shenzhen', // 669646 about 19 hours
  f032934: 'active, Korea, Incheon', // 669643 about 13 hours

  // Active-sealing (active, with in-flight sealing)

  f02301: 'active-sealing, USA', // 669272
  f02415: 'active-sealing, China, Hong Kong', // 669093
  f02501: 'active-sealing, USA, Portland, 6block', // 669095
  f02514: 'active-sealing, USA, Portland, 6block', // 669111
  f02619: 'active-sealing, China, Beijing, Blockcasting', // 669104
  f02622: 'active-sealing, USA, Portland, 6block', // 669108
  f02623: 'active-sealing, USA, Portland, 6block', // 669102
  f02633: 'active-sealing, China, Hong Kong', // 669105
  f02645: 'active-sealing, China, Hong Kong', // 669110
  f03274: 'active-sealing, USA, Portland, 6block', // 669142
  f05315: 'active-sealing, USA, Portland, 6block', // 669143
  f05316: 'active-sealing, USA, Portland, 6block', // 669137
  f05317: 'active-sealing, USA, Portland', // 669153
  f07824: 'active-sealing, China, Shanghai', // 669132
  f07990: 'active-sealing, China, Hong Kong', // 669135
  f07998: 'active-sealing, China, Hangzhou', // 669130
  f08025: 'active-sealing, China, Hong Kong', // 669131
  f08157: 'active-sealing, China, Beijing + Germany, Frankfurt, 超星际', // 669141
  f08285: 'active-sealing, Latvia, Riga, stander', // 669276
  f08383: 'active-sealing, USA, Portland, 6block', // 669165
  f09693: 'active-sealing, USA, Portland + Singapore', // 669170
  f09696: 'active-sealing, USA, Portland + Singapore', // 669171
  f010241: 'active-sealing, China, Beijing + USA, Portland', // 669172
  f010253: 'active-sealing, China, Beijing + USA, Portland', // 669169
  f010498: 'active-sealing, China, Shenzhen', // 669177
  f010512: 'active-sealing, China, Zhengzhou', // 669185
  f010523: 'active-sealing, China, Beijing', // 669155
  f018780: 'active-sealing, Singapore + Germany, Frankfurt + USA', // 669186
  f018781: 'active-sealing, Singapore + Germany, Frankfurt + USA', // 669191
  f018782: 'active-sealing, Singapore + Germany, Frankfurt + USA', // 669275
  f018783: 'active-sealing, Singapore + Germany, Frankfurt + USA', // 669258
  f018784: 'active-sealing, Singapore + Germany, Frankfurt + USA', // 669495
  f018785: 'active-sealing, Singapore + Germany, Frankfurt + USA', // 669263
  f019074: 'active-sealing, China, Guangdong', // 669250
  f019638: 'active-sealing, Germany, Frankfurt', // 669198
  f020436: 'active-sealing, China, Beijing', // 670129
  f021870: 'active-sealing, USA, Portland', // 669204
  f023825: 'active-sealing, USA, Portland', // 669277
  f023859: 'active-sealing, China, Fuzhou', // 669221
  f023861: 'active-sealing, China, Fuzhou', // 669230
  f023868: 'active-sealing, China, Fuzhou', // 669421
  f023869: 'active-sealing, China, Fuzhou', // 669420
  f023870: 'active-sealing, China, Fuzhou', // 669427
  f023871: 'active-sealing, China, Fuzhou', // 669351
  f023876: 'active-sealing, China, Fuzhou', // 669241
  f023939: 'active-sealing, NR', // 669236
  f023977: 'active-sealing, China, Fuzhou', // 669412
  f023981: 'active-sealing, China, Fuzhou', // 669244
  f024006: 'active-sealing, China, Fuzhou', // 669248
  f024007: 'active-sealing, China, Fuzhou', // 669433
  f024008: 'active-sealing, China, Fuzhou', // 669444
  f024012: 'active-sealing, China, Fuzhou', // 669309
  f024015: 'active-sealing, USA, Portland', // 669268
  f024016: 'active-sealing, USA, Portland', // 669260
  f024081: 'active-sealing, China, Fuzhou', // 669452
  f024084: 'active-sealing, China, Fuzhou', // 669457
  f024085: 'active-sealing, China, Fuzhou', // 669458
  f024136: 'active-sealing, China, Fuzhou', // 669261
  f024468: 'active-sealing, China, Shenzhen', // 669257
  f024800: 'active-sealing, China, Hong Kong', // 669259
  f024969: 'active-sealing, NR', // 669269
  f025019: 'active-sealing, China, Taiwan, Hsinchu', // 669256
  f030226: 'active-sealing, China, Fuzhou', // 669467
  f030296: 'active-sealing, USA, Cary', // 669477
  f030391: 'active-sealing, China, Chengdu', // 669468

  // Sealing

  f01240: 'sealing, Netherlands, HidNand', // 674091
  f01277: 'sealing, Sweden, Stockholm, tvsthlm', // 669584
  f01280: 'sealing, China, Wuxi, 了凡超算', // 669300
  f01799: 'sealing, China, Jinan, TokenHome', // 669279
  f01800: 'sealing, China, Shenzhen + Chengdu', // 669294
  f02399: 'sealing, China, Zhejiang', // 669591
  f02492: 'sealing, China, Shenzhen', // 669292
  f02625: 'sealing, China, Shanghai, IPFS星际工厂', // 669589
  f02665: 'sealing, Netherlands, Amsterdam, fm-ops', // 669311
  f03134: 'sealing, China, Cangzhou, 乔木信息', // 669819
  f03222: 'sealing, China, Yuncheong, 星云矿池', // 669293
  f03223: 'sealing, USA', // 669316
  f03264: 'sealing, Korea, Bucheon-si', // 670516
  f03345: 'sealing, China, Fuzhou, chh', // 669323
  f03347: 'sealing, undefined', // 669357
  f03482: 'sealing, China, Wuxi', // 680332
  f03544: 'sealing, China, Guiyang', // 669400
  f03624: 'sealing, Germany, Chemnitz, ode', // 669332
  f07806: 'sealing, China, Wuhan, HelloXP', // 669382
  f08220: 'sealing, China, Shenzhen', // 669383
  f08257: 'sealing, China, Ningbo + USA, Boardman', // 669992
  f08371: 'sealing, China, Chengdu', // 669335
  f08482: 'sealing, USA, Athol, @why', // 669328
  f09731: 'sealing, China, Guiyang', // 669326
  f09770: "sealing, China, Xi'an", // 669355
  f09833: 'sealing, USA, San Jose', // 670598
  f010048: 'sealing, China, Shanghai', // 669329
  f010399: 'sealing, China, Guangzhou', // 669384
  f010493: 'sealing, China, Shanghai', // 669334
  f010501: 'sealing, China, Hangzhou', // 669324
  f010513: 'sealing, China, Chongqing', // 669331
  f010528: 'sealing, China, Chongqing', // 669330
  f010558: 'sealing, China, Shenzhen + Hong Kong', // 669327
  f014281: 'sealing, Netherlands, Permerend', // 683834
  f014569: 'sealing, NR', // 669342
  f015734: 'sealing, China, Qingdao', // 669509
  f015877: 'sealing, China, Jiaxing + USA', // 669349
  f017665: 'sealing, China, Shenyang', // 669364
  f019022: "sealing, China, Xi'an", // 670395
  f019041: 'sealing, Singapore', // 669343
  f019100: 'sealing, Romania, Cluj-Napoca', // 669340
  f019104: 'sealing, Canada, Chambly', // 669356
  f019118: 'sealing, China, Jiaxing', // 669417
  f019243: 'sealing, USA, Jackson', // 669525
  f019354: 'sealing, Germany, Frankfurt', // 669388
  f019362: 'sealing, China, Hangzhou', // 669380
  f020489: 'sealing, China, Lioaning', // 669385
  f021262: 'sealing, China, Shanghai', // 670451
  f021274: 'sealing, China, Shanghai', // 669429
  f021339: 'sealing, China, Jiaxing', // 669409
  f021346: 'sealing, China, Shanghai', // 669431
  f021532: 'sealing, China, Shanghai', // 669425
  f021583: 'sealing, China, Jiaxing', // 669430
  f022072: 'sealing, China, Jieyang', // 669443
  f022125: 'sealing, China, Shenzhen', // 669548
  f022287: 'sealing, China, Dongguan', // 681385
  f022395: 'sealing, USA, Los Angeles', // 670472
  f022522: 'sealing, China, Dongguan', // 670481
  f022820: 'sealing, China, Guangdong', // 671104
  f023490: 'sealing, Ukraine, Kyiv', // 669555
  f023581: 'sealing, China, Hong Kong', // 669683
  f023660: 'sealing, China, Fuzhou', // 669667
  f023662: 'sealing, China, Fuzhou', // 669687
  f023853: 'sealing, China, Fuzhou', // 669561
  f023854: 'sealing, undefined', // 669699
  f023855: 'sealing, China, Fuzhou', // 669564
  f023858: 'sealing, China, Fuzhou', // 669436
  f023928: 'sealing, China, Fuzhou', // 669560
  f024101: 'sealing, China, Guiyang', // 669562
  f024156: 'sealing, USA', // 673196
  f024168: 'sealing, USA, Ashburn', // 669641
  f024550: 'sealing, China, Wenzhou', // 679824
  f025007: 'sealing, Korea, Gyeonggi-do', // 669634
  f029580: 'sealing, China, Maoming', // 679917
  f029587: 'sealing, Hungary', // 669456
  f030125: 'sealing, China, Nantong', // 669873
  f030144: 'sealing, Korea, Gyeonggi-do', // 670660
  f030158: 'sealing, China, Hangzhou', // 669469
  f030230: 'sealing, China, Sichuan', // 669588
  f030335: 'sealing, China, Fujian', // 669590
  f030641: 'sealing, China, Shaanxi', // 669608
  f032865: 'sealing, USA, Redmond', // 669633
  f032904: 'sealing, Korea', // 669631
  f032951: 'sealing, Korea, Gyeonggi-do', // 669645
  f032976: 'sealing, China, Taiwan, Taipei', // 669676
  f033028: 'sealing, China, Mianyang', // 669635
  f033048: 'sealing, USA, Ashburn', // 669693

  // Stuck

  f02305: 'stuck, China, Dongguan', // CheckForAcceptance: about 23 hours
  f018772: 'stuck, Australia', // CheckForAcceptance: about 23 hours
  f022089: 'stuck, China, Beijing', // CheckForAcceptance: about 23 hours
  f022202: 'stuck, USA, Howell', // CheckForAcceptance: about 23 hours
  f024902: 'stuck, Korea, Incheon', // CheckForAcceptance: about 23 hours
  f029529: 'stuck, China, Dongguan', // CheckForAcceptance: about 23 hours
  f030327: 'stuck, China, Beijing', // CheckForAcceptance: about 23 hours

  // Busy

  // New

  f02824: 'new, China, Chengdu',
  f024153: 'new, NR',
  f030408: 'new, NR',
  f030509: 'new, NR',
  f030510: 'new, NR',
  f032824: 'new, NR',
  f032887: 'new, NR',
  f032922: 'new, NR',
  f032977: 'new, China, Deyang',
  f033091: 'new, China, Wuxi',
  f033109: 'new, China, Fuzhou',
  f033111: 'new, China, Shanghai',
  f033113: 'new, China, Wuxi',
  f033124: 'new, China, Shanghai',
  f033206: 'new, Canada',
  f033364: 'new, Korea, Gyeonggi-do',
  f033438: 'new, USA',
  f033517: 'new, China, Changsha',
  f033548: 'new, China, Fuzhou',
  f033557: 'new, China, Hong Kong',
  f034039: 'new, Russia',

  // Min Size

  f02388: 'min-size, Netherlands, Amersfoort, Kroketje', // 131072 < 8388608
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 131072 < 1073741824
  f05664: 'min-size, China, Shenzhen, 艾比特网络科技', // 131072 < 134217728
  f07709: 'min-size, Korea, Dongjak-gu', // 131072 < 268435456
  f07982: 'min-size, China, Shenzhen', // 131072 < 134217728
  f08091: 'min-size, USA', // 131072 < 134217728
  f08403: 'min-size, UK, Lower Slaughter', // 131072 < 134217728
  f09848: 'min-size, USA', // 131072 < 268435456
  f010035: 'min-size, Netherlands', // 131072 < 134217728
  f010479: 'min-size, France, Fontenay-sous-Bois', // 131072 < 134217728
  f014394: 'min-size, China, Suzhou', // 131072 < 134217728
  f014409: 'min-size, USA, Waxhaw', // 131072 < 131072000
  f018501: 'min-size, China, Beijing', // 131072 < 134217728
  f021255: 'min-size, China, Suzhou + Netherlands', // 131072 < 134217728
  f022163: 'min-size, NR', // 131072 < 16777216
  f022566: 'min-size, China, Nanchong', // 131072 < 134217728
  f023467: 'min-size, Norway, Oslo', // 131072 < 134217728
  f023565: 'min-size, China, Fuzhou', // 131072 < 134217728
  f023971: 'min-size, USA, @Brian Y', // 131072 < 134217728
  f024146: 'min-size, China, Fuzhou', // 131072 < 134217728
  f024147: 'min-size, China, Fuzhou', // 131072 < 134217728
  f024148: 'min-size, China, Fuzhou', // 131072 < 134217728
  f025025: 'min-size, China, Qingdao', // 131072 < 134217728

  // Min Ask

  f01234: 'min-ask, Belgium, De Klinge, Eliovp', // 20000000 < 12207031250000000000000000
  f01279: 'min-ask, China, Sichuan', // 20000000 < 122070312
  f02381: 'min-ask, China, Dongguan, 西野七濑迷叔', // 20000000 < 6103515625000
  f02405: 'min-ask, China, Shenzhen', // 20000000 < 12207031250000000
  f02419: 'min-ask, China, Shanghai, yuantai', // 20000000 < 122070312
  f02423: 'min-ask, Ukraine, Kyiv, igowreck', // 20000000 < 122070312
  f02490: 'min-ask, China, Fujian', // 20000000 < 1220703125000000000000000000
  f02654: 'min-ask, China, Shanghai', // 20000000 < 122070312500000
  f03224: 'min-ask, Ukraine, Irpin, oboltusov', // 20000000 < 122070312
  f07919: 'min-ask, China, Beijing, Shanghai, Hunan', // 20000000 < 1220703125
  f08073: 'min-ask, China, Qiqihar, QY7TT', // 20000000 < 1220703125
  f08094: 'min-ask, China, Guangzhou, dongshao', // 20000000 < 61035156
  f09569: 'min-ask, China, Beijing', // 20000000 < 12207031250000000000000000
  f015941: 'min-ask, Ukraine, Kyiv', // 20000000 < 122070312
  f019661: 'min-ask, Russia, Pyatigorsk', // 20000000 < 6103515625
  f020608: 'min-ask, Russia', // 20000000 < 122070312
  f020747: 'min-ask, China, Xiamen', // 20000000 < 122070312
  f021265: 'min-ask, China, Wuhan', // 20000000 < 61035156
  f021540: 'min-ask, Germany, Frankfurt, @hsanjuan', // 20000000 < 24414062
  f024127: 'min-ask, China, Fuzhou', // 20000000 < 12207031250000000000000
  f030184: 'min-ask, USA, Aliquippa', // 20000000 < 12207031250000000000000
  f030518: 'min-ask, China, Wuhan', // 20000000 < 12207031250000

  // Error

  f01152: 'error, China, Beijing', // EOF
  f01235: 'error, Singapore, IPFSMain', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f01241: 'error, USA, Portland, 6block', // stream reset
  f01287: 'error, China, Jiaxing, MaiTian', // deal failed: (State=11) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.0303030302835694 FIL, balance: 0.017472902962582885 FIL): not enough funds to execute transaction
  f02770: 'error, China, Hong Kong', // EOF
  f04443: 'error, China, Shanghai, 罗良科技', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 2.810676172005510346 FIL, balance: 2.803050936242736466 FIL): validation failure
  f08240: 'error, Russia, Novosibirsk, Rabinovitch', // stream reset
  f08532: 'error, USA', // stream reset
  f09639: 'error, China, Fuzhou', // deal failed: (State=11) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.007882207312964715 FIL, balance: 0.000011537763034276 FIL): not enough funds to execute transaction
  f09689: 'error, USA, Portland', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f09825: 'error, China, Jinhua', // stream reset
  f010063: 'error, China, Mianyang', // AddPiece failed: adding piece to sector: normal shutdown of state machine
  f010446: 'error, Netherlands', // EOF
  f010617: 'error, Canada, Surrey, @feiya200', // stream reset
  f014324: 'error, Canada, Vancouver', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.030303030262781392 FIL, balance: 0.029453582807275917 FIL): not enough funds to execute transaction
  f015647: 'error, China, Shenzhen', // EOF
  f015662: 'error, China, Beijing', // EOF
  f015771: 'error, Brazil, Sao Paulo', // EOF
  f017794: 'error, USA, Columbus', // EOF
  f017795: 'error, USA, Columbus', // stream reset
  f019099: 'error, China, Hong Kong', // stream reset
  f019551: 'error, UK', // AddPiece failed: adding piece to sector: writing piece: acquire unsealed sector: reserving storage space: can't reserve 34359738368 bytes in '/srv/lotus/nvme/seal-storage' (id:fe33a74a-ca27-467b-b956-31b15259fe64), only 0 available
  f020904: 'error, Korea, Uijeongbu-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.180386954961451805 FIL, balance: 0.156725338091267067 FIL): validation failure
  f020928: 'error, China, Deyang + Singapore', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: async exec timeout
  f020993: 'error, China, Hong Kong', // EOF
  f021328: 'error, China, Dongguan', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f021714: 'error, China, Hong Kong', // stream reset
  f022119: 'error, USA, Lovettsville', // deal failed: (State=26) deal data verification failed: error generating CommP: failed to build treeCaused by:    0: failed to create data store    1: No such file or directory (os error 2)
  f022376: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.09999999995517456 FIL, balance: 0.003337568503205153 FIL): not enough funds to execute transaction
  f022753: 'error, China, Hong Kong', // deal failed: (State=26) error calling node: AddFunds errored: handler: websocket connection closed
  f022841: 'error, China, Zhongshan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.09999999994653045 FIL, balance: 0.048880529395541842 FIL): not enough funds to execute transaction
  f022855: 'error, Finland, Helsinki', // AddPiece failed: getting available sector: getting sector number: ERROR: insert or update on table "sector" violates foreign key constraint "fk_miner" (SQLSTATE 23503)
  f023495: 'error, China, Beijing + USA, Portland', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.030303030261990275 FIL, balance: 0.013033093368336574 FIL): not enough funds to execute transaction
  f023649: 'error, Korea, Seoul', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: message from f3sgadhm2htr75wtjy2rmujr5zvjkz5dhkvpjux3hboyagzcgzfz4lr3me5prok645wqukxex62cg2xugdisyq with nonce 22043 already in mpool, increase GasPremium to 153473 from 147717 to trigger replace by fee: replace by fee has too low GasPremium
  f024013: 'error, China, Fuzhou', // deal failed: (State=26) error activating deal: failed to set up called handler: called check error (h: 143755): failed to look up deal on chain: deal 669280 not found
  f024014: 'error, China, Fuzhou', // stream reset
  f024025: 'error, China, Chengdu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.030303030297160586 FIL, balance: 0.008563811372163125 FIL): not enough funds to execute transaction
  f024944: 'error, Korea, Yeongdeungpo-dong', // deal failed: (State=26) error calling node: AddFunds errored: handler: websocket connection closed
  f029401: 'error, USA, Portland + New Castle', // deal failed: (State=26) error calling node: ensuring funds: mpool push: failed to push message: not enough funds including pending messages (required: 152.250912125553398443 FIL, balance: 0.11392483999131631 FIL): validation failure
  f029404: 'error, USA, Portland + New Castle', // stream reset
  f029566: 'error, NR', // deal failed: (State=26) error calling node: AddFunds errored: handler: websocket connection closed
  f030152: 'error, China, Changsha', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f030608: 'error, China, Mianyang', // deal failed: (State=26) deal data verification failed: error generating CommP: failed to build treeCaused by:    0: failed to create data store    1: No such file or directory (os error 2)
  f032924: 'error, China, Fuzhou', // deal failed: (State=26) error calling node: AddFunds errored: handler: websocket connection closed

  // Dial backoff

  f02438: 'backoff, Singapore',
  f03340: "backoff, China, Xi'an",
  f08346: 'backoff, Korea',
  f08793: 'backoff, China, Fuzhou',
  f010257: 'backoff, China, Hong Kong, DNS:feiyuipfs.com',
  f014436: 'backoff, China, Chengdu',
  f014644: 'backoff, USA, Berkeley',
  f015914: 'backoff, China, Fuzhou',
  f016202: 'backoff, Korea, Songpa-gu',
  f019133: 'backoff, UK, Mansfield',
  f019616: 'backoff, USA, Marlborough',
  f020393: 'backoff, China, Beijing',
  f020631: 'backoff, China, Zhejiang',
  f022512: 'backoff, Canada, Embrun',
  f022976: 'backoff, Korea, Cheongju-si',
  f023518: 'backoff, China, Taiyuan',
  f030188: 'backoff, China, Yangjiang',

  // Rejected

  f01154: 'rejected, Sweden, Alvsjo', // no online
  f01248: 'rejected, Germany, Frankfurt + China, Guangdong',
  f01276: 'rejected, Canada, Brampton, NBFS Canada',
  f01291: 'rejected, Sweden, Stockholm, tvsthlm', // sh: 1: dealfilter.pl: not found
  f01475: 'rejected, China, Wuhan + Germany', // getting client market balance failed
  f02303: 'rejected, China, Hong Kong + Jiangsu + Netherlands',
  f02387: 'rejected, Canada, Brampton, NBFS Canada',
  f02401: 'rejected, Canada, Chambly, NBFS Canada',
  f02417: 'rejected, undefined', // sh: 1: jq: not found
  f02420: 'rejected, China, Wuhan',
  f02421: 'rejected, China, Deyang + Singapore, 腾盛科技', // Deals from client wallet f3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a are not welcome
  f02422: "rejected, China, Xi'an",
  f02503: 'rejected, China, Wuhan',
  f02520: 'rejected, China, Hong Kong + Dongguan', // Deals from client wallet f3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a are not welcome
  f02529: 'rejected, China, Chongqing',
  f02609: 'rejected, USA',
  f02613: 'rejected, China, Chongqing',
  f02614: 'rejected, Singapore',
  f02626: 'rejected, China, Guangzhou + Hong Kong',
  f02627: 'rejected, China, Guilin',
  f02723: 'rejected, China, Hong Kong',
  f02838: 'rejected, China, Chengdu, IPFS Harbor-星际港湾',
  f03002: 'rejected, China, Chongqing',
  f03131: 'rejected, China, Changsha',
  f03143: 'rejected, China, Shijiazhuang + Hong Kong', // no online
  f03144: 'rejected, Germany, Frankfurt',
  f03249: 'rejected, NR', // no online
  f03269: 'rejected, Australia', // getting client market balance failed
  f03326: 'rejected, USA, Seattle', // getting client market balance failed
  f03344: 'rejected, China, Guangzhou', // no online
  f03358: 'rejected, Singapore',
  f03362: 'rejected, Germany, Berlin',
  f03485: 'rejected, Netherlands', // getting client market balance failed
  f03519: 'rejected, USA', // getting client market balance failed
  f07969: 'rejected, China, Hangzhou, FME',
  f08103: 'rejected, China, Foshan, 花生酱肠粉',
  f08197: 'rejected, China, Foshan',
  f08207: 'rejected, Australia, Brisbane',
  f08229: 'rejected, China, Nanchang',
  f08242: 'rejected, China, Weifang',
  f08264: 'rejected, China, Xianning', // no online
  f08572: 'rejected, Brazil, Sao Paulo', // getting client market balance failed
  f08985: 'rejected, USA',
  f09037: 'rejected, Singapore',
  f09087: 'rejected, USA',
  f09620: 'rejected, China, Weifang',
  f09642: 'rejected, Sweden, Alvsjo', // no online
  f09652: 'rejected, Singapore',
  f09675: 'rejected, China, Weifang',
  f09710: 'rejected, China, Jieyang',
  f09737: 'rejected, USA, Sudbury',
  f010005: 'rejected, China, Zhongshan', // node error getting client market balance failed: resolve address t3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a: actor not found
  f010010: 'rejected, China, Changzhou + Hong Kong',
  f010038: 'rejected, China, Hangzhou + Singapore',
  f010202: 'rejected, Singapore',
  f010225: 'rejected, China, Ordos',
  f010254: 'rejected, Japan, Minamata', // no online
  f010299: 'rejected, China, Yibin',
  f010419: 'rejected, China, Sichuan',
  f010495: 'rejected, China, Tainjin',
  f010538: 'rejected, China, Ordos',
  f010616: 'rejected, China, Ordos + Singapore',
  f014233: 'rejected, China, Shanghai', // no online
  f014251: 'rejected, Singapore',
  f014302: 'rejected, China, Ningbo',
  f014327: 'rejected, China, Ningbo',
  f014365: 'rejected, undefined', // sh: 1: /home/miner/.lotusminer/dealfilter.pl: Permission denied
  f014392: 'rejected, Russia, Khabarovsk + USA + Japan, Heiwajima',
  f014395: 'rejected, China, Dongguan',
  f014472: 'rejected, China, Ningbo',
  f014683: 'rejected, China, Shenzhen',
  f014686: 'rejected, Singapore',
  f014699: 'rejected, USA',
  f014701: 'rejected, China, Changzhou', // jq: error: syntax error, unexpected IDENT, expecting $end (Unix shell quoting issues?) at <top-level>, line 1:.Proposal.Client == "t1nslxql4pck5pq7hddlzym3orxlx35wkepzjkm3i" or .Proposal.Client == "t1stghxhdp2w53dym2nz2jtbpk6ccd4l2lxgmezlq    " or .Proposal.Client == "t1mcr5xkgv4jdl3rnz77outn6xbmygb55vdejgbfi" or .Proposal.Client == "t1qiqdbbmrdalbntnuapriirduvxu5ltsc5mhy7si" or .Propos    al.Client == "t3w4yfo7tiqlbsz5pz5sb6fvn2piq2566teiebsy42l2hvhftkefpbq5ouxisfxwdxv6vt7mhpjwlm6lhvizya"                                                                                                                                                                                                                                                                                            jq: 1 compile error
  f014706: 'rejected, China, Ordos',
  f014804: 'rejected, China, Ordos',
  f014805: 'rejected, China, Ningbo',
  f015726: 'rejected, China, Qingdao',
  f015737: 'rejected, Brazil, Sao Paulo', // getting client market balance failed
  f015747: 'rejected, Japan, Setagaya-ku',
  f015782: 'rejected, Australia', // getting client market balance failed
  f015902: 'rejected, Germany', // How about no
  f015919: 'rejected, China, Ordos',
  f015942: 'rejected, China, Ningbo',
  f016398: 'rejected, Singapore',
  f016563: 'rejected, China, Deyang', // Deals from client wallet f3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a are not welcome
  f017229: 'rejected, USA, Portland',
  f019229: 'rejected, USA, Queens', // getting client market balance failed
  f019279: 'rejected, Canada, Calgary',
  f019399: 'rejected, Korea, Busan', // no online
  f019422: 'rejected, undefined', // no online
  f020315: 'rejected, China, Guangzhou', // sh: jq: command not found
  f020378: 'rejected, Bulgaria, Asenovgrad', // sh: 1: /mnt/SSD-Scratch/.lotusminer/dealfilter.pl: not found
  f020385: 'rejected, Korea, Incheon', // no online
  f020398: 'rejected, China, Zhangjiakou',
  f020648: 'rejected, China, Shenzhen',
  f020742: 'rejected, China, Shanghai + Hangzhou + Shaoxing', // no online
  f021316: 'rejected, China, Yangzhou', // sh: 1: /lotus_data/.lotusstorage/dealfilter.pl: not found
  f021479: 'rejected, China, Qingdao',
  f021525: 'rejected, China, Guangdong',
  f021716: 'rejected, New Zealand, Wellington', // no online
  f022130: 'rejected, Korea, Seodaemun-gu', // no online
  f022289: 'rejected, China, Mianyang',
  f022309: 'rejected, Korea, Chuncheon', // no online
  f022373: 'rejected, Singapore',
  f022374: 'rejected, NR',
  f022399: 'rejected, China, Beijing', // no online
  f022832: 'rejected, China',
  f022969: 'rejected, China, Chengdu', // no online
  f023462: 'rejected, China, Chengdu',
  f023530: 'rejected, China, Shanghai',
  f023534: 'rejected, China, Chongqing',
  f023561: 'rejected, China, Shenzhen',
  f023573: 'rejected, Japan, Kumamoto', // no online
  f023627: 'rejected, China, Zhongwei',
  f023678: 'rejected, China, Jiaxing', // no online
  f023843: 'rejected, NR',
  f023982: 'rejected, China, Chongqing',
  f023983: 'rejected, China, Chongqing',
  f023984: 'rejected, China, Chongqing',
  f023985: 'rejected, China, Chongqing',
  f024184: 'rejected, undefined', // no online
  f029556: 'rejected, China, Wuxi', // custom deal decision logic failed: Near line 39 (last key parsed 'Storage'): expected a top-level item to end with a newline, comment, or EOF, but got 'w' instead
  f029649: 'rejected, China, Beijing',
  f030231: 'rejected, China, Hunan', // sh: 1: /data/lotusstorage/dealfilter.pl: not found
  f032888: 'rejected, China, Weifang',

  // Dial errors

  f01012: 'dial, China, Hong Kong + Guangzhou', // * [/ip4/127.0.0.1/tcp/8888] dial tcp4 127.0.0.1:8888: connect: connection refused  * [/ip4/43.230.90.191/tcp/8888] dial tcp4 43.230.90.191:8888: connect: connection refused  * [/ip4/183.60.252.190/tcp/8888] dial tcp4 183.60.252.190:8888: connect: connection refused
  f01100: 'dial, Serbia, Belgrade, filmine.io', // * [/ip4/93.86.63.113/tcp/12345] dial tcp4 93.86.63.113:12345: connect: connection refused
  f01151: 'dial, USA, Waxhaw', // * [/ip4/71.75.239.182/tcp/41372] dial tcp4 0.0.0.0:37683->71.75.239.182:41372: i/o timeout
  f01155: 'dial, China, Shanghai, DianCun Tech', // * [/ip4/203.107.44.156/tcp/39770] dial tcp4 0.0.0.0:37683->203.107.44.156:39770: i/o timeout
  f01229: 'dial, China, Hong Kong', // * [/ip4/43.231.187.27/tcp/1374] dial tcp4 0.0.0.0:37683->43.231.187.27:1374: i/o timeout
  f01231: 'dial, Singapore', // * [/ip4/116.236.73.152/tcp/10240] dial tcp4 116.236.73.152:10240: connect: connection refused
  f01236: 'dial, Singapore', // * [/ip4/170.33.12.95/tcp/16666] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNUoXrGukLWgDUR3F1A617D6yT99bzVrKwdUi53uGMKR4, but remote key matches 12D3KooWGijGVP9N8ebcJNNEEPEGDhWbSJbsW2KtWeqVa5MQvTBx
  f01243: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64001] dial tcp4 178.212.192.216:64001: connect: connection refused
  f01275: 'dial, Korea, Seongnam-si', // * [/ip4/221.163.91.162/tcp/32230] dial tcp4 0.0.0.0:37683->221.163.91.162:32230: i/o timeout
  f01288: 'dial, China, Yibin, BlackStone', // * [/ip4/101.206.243.3/tcp/39695] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWEGMhF2ARqkVRB2zJVTjpstvLKbkuu9nZ1QeCRyTsAM9n, but remote key matches 12D3KooWCAtg67oL9r7bD1HWfHS2YqgjMvESpgX9sA6A9QvgSpHe
  f01801: 'dial, Switzerland, Baar, Gogoșel, DNS:akasha.network', // * [/ip4/46.101.187.50/tcp/10222] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHMxq8H6gBb1nxH6YknwX1ZsisFBTgtKJJTWfruBKNKA8, but remote key matches 12D3KooWDXMs6HMEdL7ein6hBWJHv42g7VMGWwUEgH8gYZ8kELYT
  f02299: 'dial, China, Dongguan, Yolo', // * [/ip4/182.18.83.4/tcp/1024] dial tcp4 0.0.0.0:37683->182.18.83.4:1024: i/o timeout
  f02307: 'dial, China, Taiyuan, filecoin.monster', // * [/ip4/34.92.71.77/tcp/12345] dial tcp4 0.0.0.0:37683->34.92.71.77:12345: i/o timeout
  f02383: 'dial, China, Shenzhen', // * [/ip4/183.60.90.5/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKzBf1z9Tm6rW1RUXfmPVooKYxan8NzjRmYq9iF8QZsJu, but remote key matches 12D3KooWSD4BWsHzUgnMnDEAMrLpyQAPFQsyHp9KR5a9A2P1hFbc
  f02386: 'dial, Latvia, Riga', // * [/ip4/91.105.126.144/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPV9PbYzkJgaaxaQ2d79RNkJWWjdC5eBXtmLsWAUwqLMT, but remote key matches 12D3KooWBBghMwnobTZP1Buw72KVEuzURgLPUYaq5WRF1wcygy9C
  f02400: 'dial, China, Beijing', // * [/ip4/36.112.26.4/tcp/47996] dial tcp4 36.112.26.4:47996: connect: connection refused
  f02403: 'dial, UK, London, AIM', // * [/ip4/2.58.45.33/tcp/18888] dial tcp4 0.0.0.0:37683->2.58.45.33:18888: i/o timeout  * [/ip4/2.58.47.71/tcp/18888] dial tcp4 0.0.0.0:37683->2.58.47.71:18888: i/o timeout
  f02414: "dial, China, Xi'an, zhejiangyunchu", // * [/ip4/113.142.1.86/tcp/56768] dial tcp4 113.142.1.86:56768: connect: connection refused
  f02418: 'dial, China, Fujian + Netherlands', // * [/ip4/117.48.133.69/tcp/1348] dial tcp4 0.0.0.0:37683->117.48.133.69:1348: i/o timeout  * [/ip4/185.232.59.180/tcp/1348] dial tcp4 0.0.0.0:37683->185.232.59.180:1348: i/o timeout
  f02425: 'dial, USA', // * [/ip4/103.78.229.73/tcp/14567] dial tcp4 103.78.229.73:14567: connect: connection refused
  f02500: 'dial, Korea, Seongnam-si', // * [/ip4/221.163.91.162/tcp/32344] dial tcp4 0.0.0.0:37683->221.163.91.162:32344: i/o timeout
  f02505: 'dial, China, Wuhan', // * [/ip4/101.32.33.237/tcp/18899] dial tcp4 0.0.0.0:37683->101.32.33.237:18899: i/o timeout
  f02516: 'dial, China, Hong Kong', // * [/ip4/119.28.87.115/tcp/2301] dial tcp4 0.0.0.0:37683->119.28.87.115:2301: i/o timeout
  f02519: 'dial, Brazil, Sao Paulo', // * [/ip4/52.67.40.200/tcp/10240] dial tcp4 0.0.0.0:37683->52.67.40.200:10240: i/o timeout
  f02528: 'dial, China, Hong Kong + Inner Mongolia', // * [/ip4/8.209.70.199/tcp/58692] dial tcp4 0.0.0.0:37683->8.209.70.199:58692: i/o timeout
  f02532: 'dial, Singapore', // * [/ip4/170.33.12.117/tcp/8007] dial tcp4 0.0.0.0:37683->170.33.12.117:8007: i/o timeout
  f02533: 'dial, Spain, Terrassa, LowFeeValidation.com', // * [/ip4/2.139.172.201/tcp/8011] dial tcp4 2.139.172.201:8011: connect: connection refused
  f02534: 'dial, China, Beijing', // * [/ip4/123.58.99.210/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQEAUZycQ6zXsGtQd74vzTkCfPD8rQzWFnbUvK6Qenarc, but remote key matches 12D3KooWCYNTXskYDLQM7rRydZDGAfLiCPfneN1NjmnCBXpMBW49
  f02540: 'dial, USA, Rochester', // * [/ip4/72.225.48.102/tcp/10240] dial tcp4 72.225.48.102:10240: i/o timeout
  f02574: 'dial, Japan, Minamata', // * [/ip4/203.189.40.203/tcp/10250] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBwU2u6WYSki2PoGRoTktqditP5aFJiFMZMV98cLHn96m, but remote key matches 12D3KooWKAEN1NS8msS2LBg2c6cLMBFP4BnZLdsHMCz5z85a8fhT
  f02577: 'dial, China, Hong Kong + Russia, Khabarovsk + Japan, Heiwajima', // * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: connection refused  * [/ip4/66.42.38.110/tcp/9997] dial tcp4 0.0.0.0:37683->66.42.38.110:9997: i/o timeout  * [/ip4/43.243.100.31/tcp/6777] dial tcp4 0.0.0.0:37683->43.243.100.31:6777: i/o timeout
  f02607: 'dial, China, Beijing', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f02610: 'dial, Netherlands', // * [/ip4/213.227.129.197/tcp/14567] dial tcp4 213.227.129.197:14567: i/o timeout
  f02621: "dial, China, Xi'an", // * [/ip4/113.200.194.196/tcp/32633] dial tcp4 0.0.0.0:37683->113.200.194.196:32633: i/o timeout
  f02624: 'dial, China, Shanghai, filecoin.cn', // * [/ip4/61.173.81.255/tcp/65501] dial tcp4 0.0.0.0:37683->61.173.81.255:65501: i/o timeout
  f02632: 'dial, China, Tianjin', // * [/ip4/150.129.138.199/tcp/8518] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLD3vs1YhM871uQ5hFmSEnJLPoLuwM9x9sGAQvQNWcczE, but remote key matches 12D3KooWMeqr1EUoLm6JBvcHB6i7KBQaTnnLHTN1mmj85Mim95v8
  f02657: 'dial, China, Ordos-xfr', // * [/ip4/1.183.72.226/tcp/12308] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLTNxtSBmMCy7VNXNSE8tZVPURHB2onSRTpJqkjWGEitm, but remote key matches 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg
  f02658: 'dial, China, Ningbo, bluematrix', // * [/ip4/123.137.128.188/tcp/3698] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRxbE66sHsxoSSE6uLybmNqXWFPKBdk6QC7KPoSZFx8Xy, but remote key matches 12D3KooWRVsiRe1qEUbpA1YeWoeMRBj3T4EBz1cxSWF6hfV8tELv  * [/ip4/112.15.188.130/tcp/3698] dial tcp4 0.0.0.0:37683->112.15.188.130:3698: i/o timeout
  f02664: 'dial, China, Hangzhou, ciger', // * [/ip4/111.0.120.74/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLfsqniYPeGBvMZN7StQzhgzTG9TB6M2gTNsvs5eDiTQM, but remote key matches 12D3KooWQb1CpdSujwXeyMJroR8qAkekXiZdNXVPKqis5ENXZGVw
  f02668: 'dial, China, Chengdu', // * [/ip6/::1/tcp/43267] dial tcp6 [::1]:43267: connect: connection refused  * [/ip4/118.123.228.191/tcp/48633] dial tcp4 118.123.228.191:48633: connect: connection refused
  f02721: 'dial, USA', // * [/ip4/135.90.74.200/tcp/14567] dial tcp4 0.0.0.0:37683->135.90.74.200:14567: i/o timeout
  f02725: 'dial, China, Hong Kong', // * [/ip4/101.32.38.57/tcp/18899] dial tcp4 101.32.38.57:18899: connect: connection refused
  f02726: 'dial, USA, Brooklyn', // * [/ip4/169.62.51.212/tcp/14567] dial tcp4 0.0.0.0:37683->169.62.51.212:14567: i/o timeout
  f02731: 'dial, Singapore', // * [/ip4/10.30.8.4/tcp/14567] dial tcp4 0.0.0.0:37683->10.30.8.4:14567: i/o timeout
  f02732: 'dial, USA', // * [/ip4/141.125.99.190/tcp/14567] dial tcp4 0.0.0.0:37683->141.125.99.190:14567: i/o timeout
  f02755: 'dial, China, Shijiazhuang', // * [/ip4/110.249.208.222/tcp/1479] dial tcp4 0.0.0.0:37683->110.249.208.222:1479: i/o timeout
  f02767: 'dial, Germany, Frankfurt', // * [/ip4/18.192.27.227/tcp/37722] dial tcp4 18.192.27.227:37722: connect: connection refused
  f02772: 'dial, China, Chengdu', // * [/ip4/118.123.228.197/tcp/48633] dial tcp4 118.123.228.197:48633: connect: connection refused  * [/ip4/118.123.228.196/tcp/48633] dial tcp4 118.123.228.196:48633: connect: connection refused
  f02773: 'dial, China, Chengdu', // * [/ip4/118.123.228.198/tcp/48633] dial tcp4 118.123.228.198:48633: connect: connection refused
  f03021: 'dial, China, Hong Kong', // * [/ip4/34.96.185.143/tcp/10240] dial tcp4 34.96.185.143:10240: connect: connection refused  * [/ip4/27.213.97.148/tcp/10240] dial tcp4 0.0.0.0:37683->27.213.97.148:10240: i/o timeout
  f03120: 'dial, China, Guangzhou', // * [/ip4/0.0.0.0/tcp/34566] dial tcp4 0.0.0.0:34566: connect: connection refused
  f03136: "dial, China, Xi'an, Zhejiang Yun Chu Technology Co., Ltd, sat", // * [/ip4/47.57.8.77/tcp/18557] dial tcp4 0.0.0.0:37683->47.57.8.77:18557: i/o timeout
  f03140: 'dial, China, QingDao', // * [/ip4/61.147.123.83/tcp/12222] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGmqm4wXHomWgVABsyRksKz5VXXVSApcceT1ocVBfsaCL, but remote key matches 12D3KooWEwibwjtCTXD4UALEpJU65LStZg8thKDFUxzjyTzGHssq
  f03149: 'dial, USA, Newton', // * [/ip6/2600:8803:3000:2430:0:ff:fde6:85d5/tcp/2889] dial tcp6 [2600:8803:3000:2430:0:ff:fde6:85d5]:2889: connect: network is unreachable  * [/ip4/68.102.245.161/tcp/2889] dial tcp4 68.102.245.161:2889: connect: connection refused
  f03194: 'dial, China, Shenzhen, 成都云存&Npool', // * [/ip4/47.245.136.114/tcp/5427] dial tcp4 0.0.0.0:37683->47.245.136.114:5427: i/o timeout  * [/ip4/182.150.0.20/tcp/5427] dial tcp4 0.0.0.0:37683->182.150.0.20:5427: i/o timeout  * [/ip4/47.88.10.179/tcp/5427] dial tcp4 0.0.0.0:37683->47.88.10.179:5427: i/o timeout
  f03220: 'dial, China, Ordos', // * [/ip4/1.183.72.226/tcp/12309] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBgi9gSUH7kw88Ko8miGjRWjJrNF2gmkMjy6gchtxgJbL, but remote key matches 12D3KooWDxu2JXzsnxz2L9ZWRXNBypcpQcduWwqmSZfu5EawCDmZ
  f03225: 'dial, China, Guyuan', // * [/ip4/10.100.0.2/tcp/11111] dial tcp4 10.100.0.2:11111: i/o timeout
  f03245: 'dial, USA, Los Angeles', // * [/ip4/120.133.36.67/tcp/23456] dial tcp4 0.0.0.0:37683->120.133.36.67:23456: i/o timeout
  f03266: 'dial, USA', // * [/ip4/169.63.27.151/tcp/14567] dial tcp4 0.0.0.0:37683->169.63.27.151:14567: i/o timeout
  f03276: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/41112] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCErnjDuHG4fe7pGpe8xWGSQPr9Zq9AteTg9kf4QERBFm, but remote key matches 12D3KooWFKKhmTQyDpXH8HFnUZhVjsu2f8r96m5dFkqJnWxFozc5
  f03286: 'dial, China, Mianyang', // * [/ip4/112.44.246.189/tcp/23455] dial tcp4 0.0.0.0:37683->112.44.246.189:23455: i/o timeout
  f03287: 'dial, USA', // * [/ip4/149.81.122.165/tcp/14567] dial tcp4 0.0.0.0:37683->149.81.122.165:14567: i/o timeout
  f03305: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.52/tcp/7000] dial tcp4 0.0.0.0:37683->197.231.176.52:7000: i/o timeout
  f03306: 'dial, Australia', // * [/ip4/103.29.66.54/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWS33M7NQzLm8d8a5cz7Vo87bRWo1Sad8dCpxNgN8h3HDA, but remote key matches 12D3KooWRAbtemsWN7MjrrJ6KSmfrnGDnWsCtDu4oHH1eLUzD6a6
  f03307: 'dial, Australia', // * [/ip4/47.74.68.141/tcp/7001] dial tcp4 0.0.0.0:37683->47.74.68.141:7001: i/o timeout
  f03312: 'dial, China, Beijing', // * [/ip4/8.210.13.50/tcp/45678] dial tcp4 8.210.13.50:45678: connect: connection refused  * [/ip4/119.161.169.68/tcp/45678] dial tcp4 0.0.0.0:37683->119.161.169.68:45678: i/o timeout
  f03314: 'dial, China, Zhangjiakou-xfr', // * [/ip4/45.113.32.176/tcp/1112] dial tcp4 0.0.0.0:37683->45.113.32.176:1112: i/o timeout
  f03317: 'dial, China, Shenzhen + Hong Kong + Jieyang', // * [/ip4/170.33.12.164/tcp/9090] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPMgigioxtnUsBqwBemuuxjZLKKpfhT3FmrWumyWDkQEd, but remote key matches 12D3KooWDkgbKexne42yFhovBdv7dEnZA4XpXYchEQpvEKpg2qTJ
  f03320: 'dial, bcm', // * [/ip4/183.36.3.160/tcp/11850] dial tcp4 183.36.3.160:11850: connect: connection refused
  f03325: 'dial, Germany, Frankfurt', // * [/ip4/45.9.10.134/tcp/42243] dial tcp4 45.9.10.134:42243: connect: connection refused
  f03327: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.51/tcp/7000] dial tcp4 0.0.0.0:37683->197.231.176.51:7000: i/o timeout
  f03328: 'dial, China, Xinxiang', // * [/ip4/27.50.142.61/tcp/2347] dial tcp4 27.50.142.61:2347: connect: connection refused
  f03337: 'dial, China, Sichuan, 朝日&网科巨力', // * [/ip4/118.116.2.61/tcp/25033] dial tcp4 118.116.2.61:25033: connect: connection refused  * [/ip4/118.116.2.60/tcp/25033] dial tcp4 118.116.2.60:25033: connect: connection refused
  f03350: 'dial, China, Wuhan', // * [/ip4/170.33.12.187/tcp/7000] dial tcp4 0.0.0.0:37683->170.33.12.187:7000: i/o timeout  * [/ip4/170.33.12.188/tcp/7000] failed to negotiate security protocol: read tcp4 10.0.1.9:37683->170.33.12.188:7000: read: connection reset by peer
  f03351: 'dial, China, Chengdu', // * [/ip4/182.140.253.150/tcp/10000] dial tcp4 0.0.0.0:37683->182.140.253.150:10000: i/o timeout
  f03359: 'dial, China, Shanghai', // * [/ip4/47.245.138.110/tcp/2347] dial tcp4 0.0.0.0:37683->47.245.138.110:2347: i/o timeout
  f03360: 'dial, China, Shaanxi', // * [/ip4/111.19.155.65/tcp/23451] dial tcp4 0.0.0.0:37683->111.19.155.65:23451: i/o timeout
  f03364: 'dial, China, Guangzhou', // * [/ip4/183.236.93.137/tcp/5472] dial tcp4 0.0.0.0:37683->183.236.93.137:5472: i/o timeout
  f03365: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7084] failed to negotiate security protocol: EOF
  f03366: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7000] failed to negotiate security protocol: EOF
  f03367: 'dial, Singapore', // * [/ip4/8.209.99.1/tcp/14567] dial tcp4 0.0.0.0:37683->8.209.99.1:14567: i/o timeout
  f03427: 'dial, Russia, airalab', // * [/ip4/82.148.21.37/tcp/46717] dial tcp4 82.148.21.37:46717: connect: connection refused
  f03484: 'dial, Netherlands', // * [/ip4/89.149.209.98/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLQrbDFJ4D4i1KcSNqDa64qYMVAmGB2Thiw4xNkwRkgvy, but remote key matches 12D3KooWL6hvc8aM5BTQLHP7w4Qig6RJbU3sQJVD5pW7JFowakNN
  f03490: 'dial, China, Dongguan', // * [/ip4/121.12.167.179/tcp/41113] dial tcp4 121.12.167.179:41113: connect: connection refused
  f03512: 'dial, New Zealand, Auckland, NZFILECOIN01', // * [/ip4/122.57.157.167/tcp/4567] dial tcp4 122.57.157.167:4567: connect: connection refused
  f03515: 'dial, China, Dongguan', // * [/ip4/113.105.174.3/tcp/23456] dial tcp4 113.105.174.3:23456: connect: connection refused
  f03517: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7082] failed to negotiate security protocol: EOF
  f03523: 'dial, China, Wuxi, YC--wuxi', // * [/ip4/58.215.232.74/tcp/10010] dial tcp4 58.215.232.74:10010: connect: connection refused  * [/ip4/192.168.1.12/tcp/1001] dial tcp4 0.0.0.0:37683->192.168.1.12:1001: i/o timeout
  f03548: 'dial, Singapore', // * [/ip4/8.209.82.79/tcp/14567] dial tcp4 0.0.0.0:37683->8.209.82.79:14567: i/o timeout
  f03620: 'dial, Germany, Frankfurt', // * [/ip4/23.90.146.133/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGVzpdJUqbWmDEuY683SGSdBjUHdpLCwEfB9VvYzKp9LG, but remote key matches 12D3KooWR8VP6fPqS21Rpxo23FE6h425sQEzvtMNJ7jPWLAo3drk
  f03630: 'dial, China, Wuhan', // * [/ip4/170.33.12.186/tcp/17000] dial tcp4 0.0.0.0:37683->170.33.12.186:17000: i/o timeout  * [/ip4/170.33.12.78/tcp/17000] dial tcp4 0.0.0.0:37683->170.33.12.78:17000: i/o timeout
  f03638: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f03646: 'dial, China, Beijing, JingTang', // * [/ip4/123.125.194.158/tcp/5678] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHaT6Kh6GZgpZ47hK99FnZnTRa3pbSNsy1fMUDGFyczj8, but remote key matches 12D3KooWQb5w1q9YKogjAzrizGTveaSU6b51JFEFr92qx1uyNGkk
  f03702: 'dial, China, Shenzhen + Singapore, LianDongJingLing', // * [/ip4/8.209.113.21/tcp/7002] dial tcp4 0.0.0.0:37683->8.209.113.21:7002: i/o timeout  * [/ip4/218.17.190.89/tcp/10240] dial tcp4 0.0.0.0:37683->218.17.190.89:10240: i/o timeout
  f03764: 'dial, China, Beijing, foobar', // * [/ip4/123.115.217.138/tcp/24002] dial tcp4 0.0.0.0:37683->123.115.217.138:24002: i/o timeout
  f03766: 'dial, China, Weifang', // * [/ip4/111.17.220.237/tcp/6666] dial tcp4 111.17.220.237:6666: connect: connection refused
  f04921: 'dial, China, Shanghai', // * [/ip4/121.46.237.2/tcp/51818] dial tcp4 121.46.237.2:51818: connect: connection refused
  f06775: 'dial, China, Shenzhen, IPSB&CAAP', // * [/ip4/103.39.218.169/tcp/2346] dial tcp4 103.39.218.169:2346: connect: connection refused
  f07451: 'dial, China, Hangzhou', // * [/ip4/221.12.20.5/tcp/6000] dial tcp4 0.0.0.0:37683->221.12.20.5:6000: i/o timeout
  f07710: 'dial, Hong Kong', // * [/ip4/65.181.71.9/tcp/5472] dial tcp4 65.181.71.9:5472: connect: connection refused
  f07752: 'dial, China, Dongguan', // * [/ip4/103.43.85.202/tcp/18888] dial tcp4 0.0.0.0:37683->103.43.85.202:18888: i/o timeout
  f07756: 'dial, DNS:purumine.com', // * [/ip6/2001:470:b:281::ac15:6402/tcp/1347] dial tcp6 [2001:470:b:281::ac15:6402]:1347: connect: network is unreachable  * [/ip4/50.47.110.164/tcp/1347] dial tcp4 0.0.0.0:37683->50.47.110.164:1347: i/o timeout
  f07774: 'dial, China, Shenzhen', // * [/ip4/103.40.249.210/tcp/33455] dial tcp4 0.0.0.0:37683->103.40.249.210:33455: i/o timeout
  f07775: 'dial, China, Shenzhen', // * [/ip4/103.40.249.211/tcp/33455] dial tcp4 0.0.0.0:37683->103.40.249.211:33455: i/o timeout
  f07810: 'dial, Korea', // * [/ip4/61.111.129.217/tcp/33333] dial tcp4 61.111.129.217:33333: connect: connection refused
  f07826: 'dial, China, Shenzhen, 星际医生', // * [/ip4/183.12.27.145/tcp/8888] dial tcp4 0.0.0.0:37683->183.12.27.145:8888: i/o timeout
  f07829: 'dial, Japan', // * [/ip4/163.44.165.168/tcp/30222] dial tcp4 0.0.0.0:37683->163.44.165.168:30222: i/o timeout
  f07830: 'dial, Singapore', // * [/ip4/8.209.102.106/tcp/14567] dial tcp4 0.0.0.0:37683->8.209.102.106:14567: i/o timeout
  f07833: 'dial, China, Changzhou, 星巢', // * [/ip4/107.155.16.239/tcp/20480] dial tcp4 107.155.16.239:20480: connect: connection refused  * [/ip4/107.155.3.37/tcp/20480] dial tcp4 0.0.0.0:37683->107.155.3.37:20480: i/o timeout
  f07848: 'dial, China, Wuhan', // * [/ip4/58.211.11.130/tcp/1024] dial tcp4 58.211.11.130:1024: connect: connection refused
  f07851: 'dial, Netherlands, Purmerend', // * [/ip4/212.32.243.209/tcp/2347] dial tcp4 212.32.243.209:2347: i/o timeout
  f07857: 'dial, China, Zhengzhou', // * [/ip4/117.160.206.175/tcp/40131] dial tcp4 117.160.206.175:40131: connect: connection refused
  f07944: 'dial, China, Hangzhou, SupremeTreasure', // * [/ip4/103.46.128.45/tcp/57670] dial tcp4 103.46.128.45:57670: connect: connection refused
  f07947: 'dial, China, Zhengzhou', // * [/ip4/117.160.206.175/tcp/40133] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHRLWcUmv2NFQER1vwJAa2qTSC5S7ssJcAuwUn27t667E, but remote key matches 12D3KooWNzTyV8jTJobnDeXBLgJHetsMCSy7r8euCrbszdhTXCKf
  f07956: 'dial, Russia', // * [/ip4/91.218.244.253/tcp/10240] dial tcp4 0.0.0.0:37683->91.218.244.253:10240: i/o timeout
  f07961: 'dial, China, Changzhou', // * [/ip4/58.216.209.94/tcp/6666] dial tcp4 58.216.209.94:6666: connect: connection refused
  f07991: 'dial, China, Changsha', // * [/ip4/113.218.133.192/tcp/13470] dial tcp4 0.0.0.0:37683->113.218.133.192:13470: i/o timeout
  f08006: 'dial, China, Shaanxi', // * [/ip4/111.19.129.175/tcp/23456] dial tcp4 0.0.0.0:37683->111.19.129.175:23456: i/o timeout
  f08032: 'dial, China, Weifang', // * [/ip4/111.17.220.237/tcp/6666] dial tcp4 111.17.220.237:6666: connect: connection refused  * [/ip4/111.17.220.235/tcp/6666] dial tcp4 111.17.220.235:6666: connect: connection refused
  f08040: 'dial, Australia, Sydney', // * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:37683->43.241.189.214:39438: i/o timeout
  f08042: 'dial, Brazil, Sao Paulo', // * [/ip4/76.223.3.225/tcp/23456] dial tcp4 0.0.0.0:37683->76.223.3.225:23456: i/o timeout
  f08047: 'dial, China, Hangzhou', // * [/ip4/101.71.125.162/tcp/7654] dial tcp4 0.0.0.0:37683->101.71.125.162:7654: i/o timeout
  f08063: 'dial, China, Huizhou', // * [/ip4/113.81.68.244/tcp/12345] dial tcp4 0.0.0.0:37683->113.81.68.244:12345: i/o timeout
  f08076: 'dial, Netherlands, Alphen aan den Rijn, Ang', // * [/ip4/143.178.96.190/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFhbSYbTBYSym7mrxXPfFHupE2oG8LZRjwM3smZKwBYWj, but remote key matches 12D3KooWE3jXWnuX7eXFs2FxY3MZRbsftox1NRGf47iPr5CfFi6B
  f08088: 'dial, China, Dongguan', // * [/ip4/183.240.203.135/tcp/10240] dial tcp4 183.240.203.135:10240: connect: connection refused
  f08096: 'dial, China, Wuhan', // * [/ip4/59.175.128.46/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWARwVoXJ6ZjfgKEpyBv1dsEmQhHrPN9UwxxKoFkrAw98A, but remote key matches 12D3KooWCFhmdmduqq59w8CsEgEX2qi9KQqE9wmTHmqC5W4tcEaA
  f08101: 'dial, China, Wuxi', // * [/ip4/192.168.23.8/tcp/8081] dial tcp4 0.0.0.0:37683->192.168.23.8:8081: i/o timeout
  f08109: 'dial, USA, qianyuanyunshuo', // * [/ip4/47.57.8.77/tcp/28109] dial tcp4 0.0.0.0:37683->47.57.8.77:28109: i/o timeout
  f08135: 'dial, Singapore', // * [/ip4/170.33.12.118/tcp/12345] dial tcp4 0.0.0.0:37683->170.33.12.118:12345: i/o timeout
  f08139: 'dial, China, Shanghai', // * [/ip4/218.79.124.15/tcp/45454] dial tcp4 0.0.0.0:37683->218.79.124.15:45454: i/o timeout
  f08148: 'dial, China, Shanghai', // * [/ip4/103.108.182.27/tcp/30031] dial tcp4 0.0.0.0:37683->103.108.182.27:30031: i/o timeout
  f08149: 'dial, China, Jiangmen', // * [/ip4/183.36.3.160/tcp/60015] dial tcp4 183.36.3.160:60015: connect: connection refused
  f08150: 'dial, China, Hangzhou', // * [/ip4/115.199.55.127/tcp/23333] dial tcp4 0.0.0.0:37683->115.199.55.127:23333: i/o timeout
  f08161: 'dial, China, Weifang', // * [/ip4/111.17.220.234/tcp/6677] dial tcp4 111.17.220.234:6677: connect: connection refused
  f08170: 'dial, China, Jieyang', // * [/ip4/183.240.204.199/tcp/40573] dial tcp4 183.240.204.199:40573: connect: connection refused
  f08178: 'dial, China, Jiaxing, CAAP-金华', // * [/ip4/61.174.253.25/tcp/2346] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJpwXVGUapvX4nqP1GoAD4eAxobaogY5ZAWC9vfQPUByN, but remote key matches 12D3KooWBKWMoLD3JfU3F9Bobj8c5Ro4fxSb5wqnCRkbFW1mq87o
  f08199: 'dial, USA, Sudbury', // * [/ip4/108.49.193.174/tcp/32002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCbSR2uAa6JhQyfchhBbJd78HXAw7ApsG8HLdBPQEmbNB, but remote key matches 12D3KooWHPScnNKJQyDxMiL8E6y8gTvXm1qg6cUdK9tpjTM1Z49Q
  f08203: 'dial, Germany, Frankfurt', // * [/ip4/54.255.34.95/tcp/1579] dial tcp4 0.0.0.0:37683->54.255.34.95:1579: i/o timeout
  f08204: 'dial, USA, St. Louis', // * [/ip4/207.244.248.213/tcp/26164] failed to negotiate security protocol: EOF
  f08205: 'dial, Brazil, Sao Paulo', // * [/ip4/169.57.182.19/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHfc4VZ321w7MmZYbmMDdkMw3D4h83Ar3q8MEMjLq69PL, but remote key matches 12D3KooWEfyR3PyQidJ2GgBV6Vvncguotx7xi9GRbFvi8RBoytMu
  f08235:
    'dial, China, Beijing + Jiaxing + Germany, Frankfurt, 星河华讯&中科星际', // * [/ip4/103.103.177.172/tcp/5678] dial tcp4 0.0.0.0:37683->103.103.177.172:5678: i/o timeout
  f08243: 'dial, USA, Queens', // * [/ip4/108.41.171.148/tcp/55243] dial tcp4 0.0.0.0:37683->108.41.171.148:55243: i/o timeout  * [/ip4/108.41.171.148/tcp/55241] dial tcp4 0.0.0.0:37683->108.41.171.148:55241: i/o timeout  * [/ip4/108.41.171.148/tcp/55242] dial tcp4 0.0.0.0:37683->108.41.171.148:55242: i/o timeout  * [/ip4/108.41.171.148/tcp/55244] dial tcp4 0.0.0.0:37683->108.41.171.148:55244: i/o timeout
  f08289: 'dial, Canada, Embrun', // * [/ip4/148.59.149.162/tcp/10240] dial tcp4 148.59.149.162:10240: connect: connection refused
  f08293: 'dial, China, Xinxiang', // * [/ip4/27.50.142.73/tcp/1347] dial tcp4 27.50.142.73:1347: i/o timeout
  f08295: 'dial, China, Suzhou, IPFS Cloud', // * [/ip4/222.92.5.150/tcp/40699] dial tcp4 0.0.0.0:37683->222.92.5.150:40699: i/o timeout
  f08301: 'dial, Japan, Setagaya-ku, MEIK', // * [/ip4/126.159.22.156/tcp/50320] dial tcp4 0.0.0.0:37683->126.159.22.156:50320: i/o timeout
  f08330: 'dial, China, Chengdu, oursoft', // * [/ip4/125.69.0.37/tcp/55009] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWDcmvnaV9QebtFP7rW2Li1KkQsBJxiKcmTXnwm1qhkcRj, but remote key matches 12D3KooWKLKsDsmPJDB2ebxDjqdD4hy474iaQr5ApqMqZTWG8NjS
  f08338: 'dial, China, Weifang', // * [/ip4/111.17.220.231/tcp/5566] dial tcp4 0.0.0.0:37683->111.17.220.231:5566: i/o timeout
  f08344: 'dial, UK, Hartlepool', // * [/ip4/82.15.108.46/tcp/51437] dial tcp4 0.0.0.0:37683->82.15.108.46:51437: i/o timeout
  f08347: 'dial, China, Chengdu', // * [/ip4/222.209.95.29/tcp/6666] dial tcp4 0.0.0.0:37683->222.209.95.29:6666: i/o timeout
  f08358: 'dial, China, Shenzhen', // * [/ip4/119.123.208.233/tcp/45437] dial tcp4 0.0.0.0:37683->119.123.208.233:45437: i/o timeout
  f08384:
    'dial, China, Shandong + Hong Kong + Japan, Heiwajima + Russia, Khabarovsk', // * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: connection refused  * [/ip4/66.42.38.110/tcp/9990] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSNsVcwPC2FXp3bbV9MyAbi35igscSJh6gb8MkFsyxiy2, but remote key matches 12D3KooWD38od1j4abLotnfpALNPZt3TdjmQ1HqSiQBe1qZpnrCc  * [/ip4/172.247.228.122/tcp/9999] dial tcp4 0.0.0.0:37683->172.247.228.122:9999: i/o timeout
  f08396: 'dial, France, Fontenay-sous-Bois', // * [/ip4/90.46.50.228/tcp/24002] dial tcp4 90.46.50.228:24002: connect: connection refused
  f08399: 'dial, USA, Sammamish', // * [/ip4/73.118.247.91/tcp/63452] dial tcp4 73.118.247.91:63452: i/o timeout
  f08405: 'dial, China, Guangdong', // * [/ip4/183.232.116.201/tcp/4001] dial tcp4 183.232.116.201:4001: connect: connection refused
  f08418: 'dial, China, Chansha + USA', // * [/ip4/27.124.10.49/tcp/7003] dial tcp4 27.124.10.49:7003: connect: connection refused
  f08446: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMfLgpGWM87mLbrkNuN6FQ6zExMvzECDSV4qy7FKDqNvq, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f08448: 'dial, China, Guangdong', // * [/ip4/183.232.116.202/tcp/4001] dial tcp4 183.232.116.202:4001: connect: connection refused
  f08481: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:37683->73.158.16.48:30390: i/o timeout
  f08497: 'dial, Brazil, Sao Paulo', // * [/ip4/18.231.148.87/tcp/46717] dial tcp4 0.0.0.0:37683->18.231.148.87:46717: i/o timeout
  f08568: 'dial, USA, Waxhaw, Meatball Part II', // * [/ip4/71.75.239.182/tcp/41372] dial tcp4 0.0.0.0:37683->71.75.239.182:41372: i/o timeout
  f08684: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.109:23450: i/o timeout
  f08685: 'dial, China, Fuzhou', // * [/ip4/182.99.0.96/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.96:23450: i/o timeout
  f08788: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.103:23450: i/o timeout
  f08854: 'dial, China, Dongguan', // * [/ip4/121.12.162.85/tcp/10000] dial tcp4 0.0.0.0:37683->121.12.162.85:10000: i/o timeout
  f08895: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f08904: 'dial, China, Deyang', // * [/ip4/125.64.78.27/tcp/4004] dial tcp4 125.64.78.27:4004: connect: connection refused
  f08908: 'dial, USA', // * [/ip4/216.18.214.92/tcp/6666] dial tcp4 0.0.0.0:37683->216.18.214.92:6666: i/o timeout
  f08917: 'dial, China, Beijing', // * [/ip4/182.61.174.185/tcp/40000] dial tcp4 182.61.174.185:40000: connect: connection refused
  f08928: 'dial, USA, Arlington, theartist', // * [/ip4/69.251.248.175/tcp/6679] dial tcp4 0.0.0.0:37683->69.251.248.175:6679: i/o timeout
  f08937: 'dial, China, Wuxi, YC--wuxi', // * [/ip4/58.215.232.74/tcp/10200] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAG85TzBibt5LjxuTsz9KhWwQCz9ok65oaPcZ2voYaMZA, but remote key matches 12D3KooWSxGj1viupyBBGuwmhBWpdBJDHGEw7BzcUHqzUHXERH59  * [/ip4/192.168.1.18/tcp/1020] dial tcp4 0.0.0.0:37683->192.168.1.18:1020: i/o timeout
  f08949: 'dial, Norway, Oslo', // * [/ip4/151.252.13.190/tcp/37374] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWE1ubdqszJxdjAAVcZcx2x1PJUNFbNDm52jFkeJoAaPYh, but remote key matches 12D3KooWMpuRzgVuRS6m285cucGgnXWwTnsNtGzjsMJeEqS7UtJw
  f08953: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.100:23450: i/o timeout
  f08958: 'dial, China, Fuzhou', // * [/ip4/182.99.0.108/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.108:23450: i/o timeout
  f08986: 'dial, China, Ordos', // * [/ip4/1.183.72.226/tcp/12308] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCLPAPTjCYyCMBBnv5MkJCaV1o6mawJLha4wdAGkMH1Yq, but remote key matches 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg
  f08991: 'dial, China, Ili', // * [/ip4/124.88.170.140/tcp/16000] dial tcp4 0.0.0.0:37683->124.88.170.140:16000: i/o timeout
  f08995: 'dial, China, Fuzhou', // * [/ip4/182.99.0.97/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.97:23450: i/o timeout
  f09002: 'dial, Singapore', // * [/ip4/113.200.194.196/tcp/32634] dial tcp4 0.0.0.0:37683->113.200.194.196:32634: i/o timeout
  f09005: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.101:23450: i/o timeout
  f09029: 'dial, China, Wuhan', // * [/ip4/59.175.128.46/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCkJYhKg9uMf2ocRDRxatUWBveJMSdneMamxDmChG2ULv, but remote key matches 12D3KooWCFhmdmduqq59w8CsEgEX2qi9KQqE9wmTHmqC5W4tcEaA
  f09036: 'dial, China, Chengdu, CD-oursoft', // * [/ip4/125.69.0.37/tcp/55019] dial tcp4 125.69.0.37:55019: connect: connection refused
  f09048: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.102:23450: i/o timeout
  f09056: 'dial, China, Shenzhen, SZSQ1', // * [/ip4/119.139.197.93/tcp/20030] dial tcp4 119.139.197.93:20030: connect: connection refused
  f09077: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:37683->218.85.126.210:23450: i/o timeout
  f09082: 'dial, Australia, Canberra', // * [/ip4/101.178.36.30/tcp/24004] dial tcp4 0.0.0.0:37683->101.178.36.30:24004: i/o timeout
  f09088: 'dial, China, Changsha', // * [/ip4/175.10.160.70/tcp/13470] dial tcp4 0.0.0.0:37683->175.10.160.70:13470: i/o timeout
  f09091: 'dial, Netherlands', // * [/ip4/185.232.59.179/tcp/2347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLdKXN3LuTbRqgyvSCxCByPifZDTp1p7hLCtQEgwo4uM6, but remote key matches 12D3KooWJDvwMPfJ1ct9V6JpgRrdA7DWEEfcWSQAWCYbRrNxnXYi
  f09261: 'dial, Brazil, Sao Paulo', // * [/ip4/169.57.189.187/tcp/7000] dial tcp4 169.57.189.187:7000: connect: connection refused
  f09523: 'dial, China, Beijing', // * [/ip4/8.210.13.50/tcp/45678] dial tcp4 8.210.13.50:45678: connect: connection refused  * [/ip4/119.161.169.68/tcp/45678] dial tcp4 0.0.0.0:37683->119.161.169.68:45678: i/o timeout
  f09537: 'dial, USA, El Monte', // * [/ip4/47.145.150.94/tcp/1024] dial tcp4 0.0.0.0:37683->47.145.150.94:1024: i/o timeout
  f09555: 'dial, Australia, Sydney', // * [/ip4/3.25.64.130/tcp/10240] dial tcp4 0.0.0.0:37683->3.25.64.130:10240: i/o timeout
  f09559: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/31001] dial tcp4 0.0.0.0:37683->99.250.201.0:31001: i/o timeout
  f09560: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64002] dial tcp4 178.212.192.216:64002: connect: connection refused
  f09561: 'dial, China, Beijing', // * [/ip4/36.112.26.4/tcp/3458] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFp4nbb4eDyUmWaR5XrjSEzdhtHh35ewdwc59e1tkZBcA, but remote key matches 12D3KooWAKXYhFP3mGbaHnCB5GBCvFe8gniGKoDpTbaY8S9FWruH
  f09565: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64003] dial tcp4 178.212.192.216:64003: connect: connection refused
  f09573: 'dial, China, Xiamen', // * [/ip4/121.204.250.253/tcp/4567] dial tcp4 121.204.250.253:4567: connect: connection refused
  f09589: 'dial, China, Changsha', // * [/ip4/113.218.134.132/tcp/5472] dial tcp4 0.0.0.0:37683->113.218.134.132:5472: i/o timeout
  f09592: 'dial, Japan, Minamata', // * [/ip4/203.189.40.203/tcp/10252] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKsEsCefspqqDZDJcQMe6AY9pVKQh5BfYQLJMZ8jD3T6c, but remote key matches 12D3KooWSpji7fDLrXGiM9Gbcy8tzCTYk5ed7ukmaTAznnLMxqGf
  f09597: 'dial, China, Shanghai', // * [/ip4/47.52.20.42/tcp/8046] failed to negotiate security protocol: EOF
  f09605: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64004] dial tcp4 178.212.192.216:64004: connect: connection refused
  f09619: 'dial, China, Shanghai', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f09631: 'dial, China, Changzhou', // * [/ip4/58.216.209.94/tcp/6668] dial tcp4 58.216.209.94:6668: connect: connection refused
  f09643: 'dial, China, Beijing', // * [/ip4/203.93.121.130/tcp/38886] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQFb4HCWV2jNpSu1P4Ku9td4JBTTLFpfyQq2LJrAwFcAk, but remote key matches 12D3KooWSxumKoCwxLj526NH9AZ2zhtcCJJVtJrUvaQjv59kPacY
  f09653: 'dial, China, Chengdu', // * [/ip4/47.242.94.248/tcp/6667] dial tcp4 47.242.94.248:6667: connect: connection refused
  f09656: 'dial, Ukraine, Odessa', // * [/ip4/218.60.28.136/tcp/43368] dial tcp4 218.60.28.136:43368: connect: connection refused
  f09664: 'dial, Australia, Sydney', // * [/ip4/220.238.233.196/tcp/26201] dial tcp4 0.0.0.0:37683->220.238.233.196:26201: i/o timeout
  f09671: 'dial, China, Chongqing', // * [/ip4/113.207.109.184/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMdh1of4D5YPvY4g3Y2pCf6mpQvgHx9kg55RvkJdRmP6z, but remote key matches 12D3KooWPw6phtaL2ftZq7wQLjc6z1YoVou4BK48ZzXk3TVNVPjK
  f09672: 'dial, China, Chengdu', // * [/ip4/110.185.107.124/tcp/21735] dial tcp4 110.185.107.124:21735: connect: connection refused
  f09680: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f09704: 'dial, China, Shenzhen', // * [/ip4/218.17.62.49/tcp/31431] dial tcp4 218.17.62.49:31431: connect: connection refused
  f09721: 'dial, ???, CD-oursoft-1', // * [/ip4/125.69.0.37/tcp/55009] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGAJiCkk7x62ikVQ4M9VXz4uaVvQ5EJkdJ3sEW43ahEU6, but remote key matches 12D3KooWKLKsDsmPJDB2ebxDjqdD4hy474iaQr5ApqMqZTWG8NjS
  f09723: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:37683->218.85.126.210:23450: i/o timeout
  f09729: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/41112] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPumWWQP2mt3t7czSPDq67Fs19Xen3fcSfurqgnTVieAF, but remote key matches 12D3KooWFKKhmTQyDpXH8HFnUZhVjsu2f8r96m5dFkqJnWxFozc5
  f09734: 'dial, China, Dongguan', // * [/ip4/121.12.167.179/tcp/41113] dial tcp4 121.12.167.179:41113: connect: connection refused
  f09748: 'dial, China, Tianjin', // * [/ip4/150.129.138.199/tcp/7518] dial tcp4 150.129.138.199:7518: connect: connection refused
  f09761: 'dial, China, Beijing', // * [/ip4/114.253.41.59/tcp/24002] dial tcp4 114.253.41.59:24002: connect: connection refused
  f09763: 'dial, China, Mianyang,  <13h', // * [/ip4/47.254.25.128/tcp/7000] dial tcp4 0.0.0.0:37683->47.254.25.128:7000: i/o timeout  * [/ip4/47.254.128.95/tcp/7000] dial tcp4 0.0.0.0:37683->47.254.128.95:7000: i/o timeout
  f09771: 'dial, China, Hangzhou', // * [/ip4/47.57.8.77/tcp/6785] dial tcp4 0.0.0.0:37683->47.57.8.77:6785: i/o timeout
  f09789: 'dial, USA', // * [/ip4/47.242.77.149/tcp/19914] dial tcp4 0.0.0.0:37683->47.242.77.149:19914: i/o timeout
  f09792: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 35.224.87.15:24002: connect: connection refused
  f09797: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.102:23450: i/o timeout
  f09801: 'dial, China, Fuzhou', // * [/ip4/182.99.0.108/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.108:23450: i/o timeout
  f09808: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.100:23450: i/o timeout
  f09809: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.101:23450: i/o timeout
  f09810: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.103:23450: i/o timeout
  f09811: 'dial, China, Dongguan', // * [/ip4/113.105.174.7/tcp/10000] dial tcp4 113.105.174.7:10000: connect: no route to host
  f09813: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 182.99.0.109:23450: i/o timeout
  f09814: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.99:23450: i/o timeout
  f09817: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.98:23450: i/o timeout
  f09828: 'dial, NR', // * [/ip4/192.168.0.9/tcp/24002] dial tcp4 0.0.0.0:37683->192.168.0.9:24002: i/o timeout
  f09830: 'dial, Korea, Geumcheon-gu', // * [/ip4/121.140.143.29/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWEgLZVWfuy9vrTAre3xcnQdKG7vXh3gkwRXzZbdBc9pnF, but remote key matches 12D3KooWSsjSaxoN3tdeWo4y9g34ptm3m7VmhoLvig1WXarkTPEj
  f09838: 'dial, Russia, Irkutsk', // * [/ip4/90.188.226.112/tcp/9555] dial tcp4 0.0.0.0:37683->90.188.226.112:9555: i/o timeout
  f09859: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f09964: 'dial, China, Beijing + Jiaxing', // * [/ip4/47.91.79.110/tcp/50905] failed to negotiate security protocol: EOF
  f09969: 'dial, China, Guangzhou', // * [/ip4/183.2.157.250/tcp/1029] dial tcp4 183.2.157.250:1029: connect: connection refused
  f09972: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:37683->95.216.99.39:46717: i/o timeout
  f09983: 'dial, China, Guangzhou', // * [/ip4/183.2.157.214/tcp/888] dial tcp4 183.2.157.214:888: connect: connection refused
  f09985: 'dial, China, Qingdao', // * [/ip4/61.147.123.85/tcp/12223] dial tcp4 61.147.123.85:12223: connect: connection refused
  f010015: 'dial, China, Taizhou', // * [/ip4/47.254.31.111/tcp/23456] dial tcp4 0.0.0.0:37683->47.254.31.111:23456: i/o timeout  * [/ip4/47.254.145.29/tcp/23456] dial tcp4 0.0.0.0:37683->47.254.145.29:23456: i/o timeout
  f010020: 'dial, China, Chongqing', // * [/ip4/113.207.109.184/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNXhxeBMqYPF56bZExJzcjeiHDaserGs7YYXNgLtLHVvS, but remote key matches 12D3KooWPw6phtaL2ftZq7wQLjc6z1YoVou4BK48ZzXk3TVNVPjK
  f010032: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.103:23450: i/o timeout
  f010056: 'dial, Singapore', // * [/ip4/8.209.82.79/tcp/14567] dial tcp4 0.0.0.0:37683->8.209.82.79:14567: i/o timeout
  f010084: 'dial, China, Beijing', // * [/ip4/106.54.88.171/tcp/10240] dial tcp4 106.54.88.171:10240: i/o timeout
  f010088: 'dial, DNS:purumine.com', // * [/ip6/2001:470:b:281::ac15:6402/tcp/1347] dial tcp6 [2001:470:b:281::ac15:6402]:1347: connect: network is unreachable  * [/ip4/50.47.110.164/tcp/1347] dial tcp4 0.0.0.0:37683->50.47.110.164:1347: i/o timeout
  f010152: 'dial, Germany-cfa', // * [/ip4/116.202.129.161/tcp/10666] dial tcp4 116.202.129.161:10666: connect: connection refused
  f010170: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.109:23450: i/o timeout
  f010223: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12311] dial tcp4 0.0.0.0:37683->47.57.188.137:12311: i/o timeout
  f010224: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.102:23450: i/o timeout
  f010230: 'dial, China, Beijing', // * [/ip4/106.55.236.214/tcp/10022] dial tcp4 0.0.0.0:37683->106.55.236.214:10022: i/o timeout
  f010238: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23455] dial tcp4 110.80.33.138:23455: connect: connection refused
  f010268: 'dial, China, Hangzhou', // * [/ip4/47.57.8.77/tcp/8001] dial tcp4 0.0.0.0:37683->47.57.8.77:8001: i/o timeout
  f010270: 'dial, China, Shijiazhuang', // * [/ip4/111.224.179.91/tcp/2233] dial tcp4 0.0.0.0:37683->111.224.179.91:2233: i/o timeout
  f010274: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.99:23450: i/o timeout
  f010276: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f010287: 'dial, China, Fuzhou', // * [/ip4/182.99.0.97/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.97:23450: i/o timeout
  f010289: 'dial, China, Fuzhou', // * [/ip4/182.99.0.96/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.96:23450: i/o timeout
  f010291: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.98:23450: i/o timeout
  f010298: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.102:23450: i/o timeout
  f010308: 'dial, Germany, Frankfurt', // * [/ip4/139.199.62.183/tcp/6610] dial tcp4 139.199.62.183:6610: connect: connection refused
  f010311: 'dial, Korea, Hwaseong-si', // * [/ip4/106.255.239.43/tcp/24002] dial tcp4 0.0.0.0:37683->106.255.239.43:24002: i/o timeout
  f010362: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.35.11/tcp/46717] dial tcp4 0.0.0.0:37683->15.228.35.11:46717: i/o timeout
  f010372: 'dial, Brazil, Sao Paulo', // * [/ip4/52.67.22.220/tcp/46717] dial tcp4 0.0.0.0:37683->52.67.22.220:46717: i/o timeout
  f010374: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAUYDipKeDFH92NqD4RxxUGUZJtiUwH5YD9scLwnavVXP, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f010398: 'dial, Korea, Yeongdeungpo-dong', // * [/ip4/121.140.143.29/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLKVafLxDtYZjCk6gBdnUzGpkYs8sk8Yue3GPnuadtVqs, but remote key matches 12D3KooWSsjSaxoN3tdeWo4y9g34ptm3m7VmhoLvig1WXarkTPEj
  f010411: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f010424: 'dial, Australia, Sydney', // * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:37683->43.241.189.214:39438: i/o timeout
  f010449: 'dial, China, Jiangmen', // * [/ip4/183.36.3.160/tcp/60007] dial tcp4 183.36.3.160:60007: connect: connection refused
  f010496: 'dial, China, Guangzhou', // * [/ip4/183.2.157.213/tcp/666] dial tcp4 183.2.157.213:666: connect: connection refused
  f010516: 'dial, Brazil, Sao Paulo', // * [/ip4/18.230.25.100/tcp/18888] dial tcp4 0.0.0.0:37683->18.230.25.100:18888: i/o timeout
  f010527: 'dial, China, Shanghai', // * [/ip4/116.228.53.133/tcp/10240] failed to negotiate security protocol: unexpected EOF
  f010533: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12319] dial tcp4 0.0.0.0:37683->47.57.188.137:12319: i/o timeout
  f010541: 'dial, China, Chengdu', // * [/ip4/110.185.107.117/tcp/21736] dial tcp4 110.185.107.117:21736: connect: connection refused  * [/ip4/110.185.107.23/tcp/21735] dial tcp4 110.185.107.23:21735: connect: connection refused
  f010553: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12316] dial tcp4 0.0.0.0:37683->47.57.188.137:12316: i/o timeout
  f010579: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.194/tcp/23450] dial tcp4 0.0.0.0:37683->45.192.184.194:23450: i/o timeout
  f010586: 'dial, China, Fuzhou', // * [/ip4/45.192.184.197/tcp/23450] dial tcp4 0.0.0.0:37683->45.192.184.197:23450: i/o timeout
  f010593: 'dial, USA, East Islip', // * [/ip6/2a0a:e5c1:17f::42/tcp/33823] dial tcp6 [2a0a:e5c1:17f::42]:33823: connect: network is unreachable  * [/ip4/74.88.128.118/tcp/41126] dial tcp4 0.0.0.0:37683->74.88.128.118:41126: i/o timeout  * [/ip4/74.88.128.118/tcp/55519] dial tcp4 0.0.0.0:37683->74.88.128.118:55519: i/o timeout
  f010598: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/10002] dial tcp4 99.250.201.0:10002: i/o timeout
  f010600: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f010606: 'dial, China, Fuzhou', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:37683->45.192.184.195:23450: i/o timeout
  f010607: 'dial, China, Guangzhou', // * [/ip4/8.210.76.199/tcp/18899] dial tcp4 0.0.0.0:37683->8.210.76.199:18899: i/o timeout
  f010608: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.101:23450: i/o timeout
  f010609: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/36666] dial tcp4 0.0.0.0:37683->182.99.0.100:36666: i/o timeout
  f010613: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/20002] dial tcp4 0.0.0.0:37683->99.250.201.0:20002: i/o timeout
  f014230: 'dial, China, Fuzhou', // * [/ip4/185.23.181.67/tcp/23450] dial tcp4 0.0.0.0:37683->185.23.181.67:23450: i/o timeout
  f014241: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNczL8NwzKEd2Np4uiDs42GB3pKcmoABTdM8JJ8v9MRGB, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f014246: 'dial, China, Shenzhen', // * [/ip4/103.40.249.212/tcp/44299] dial tcp4 0.0.0.0:37683->103.40.249.212:44299: i/o timeout
  f014248: 'dial, Turkey', // * [/ip4/185.23.180.67/tcp/23450] dial tcp4 0.0.0.0:37683->185.23.180.67:23450: i/o timeout
  f014259: 'dial, China, Fuzhou', // * [/ip4/45.192.184.193/tcp/23450] dial tcp4 0.0.0.0:37683->45.192.184.193:23450: i/o timeout
  f014279: 'dial, Finland, Helsinki', // * [/ip4/95.217.113.188/tcp/12345] dial tcp4 0.0.0.0:37683->95.217.113.188:12345: i/o timeout
  f014307: 'dial, China, Dongguan', // * [/ip4/218.16.123.133/tcp/4001] dial tcp4 218.16.123.133:4001: connect: connection refused
  f014311: 'dial, China, Ordos', // * [/ip4/162.62.55.44/tcp/12309] dial tcp4 0.0.0.0:37683->162.62.55.44:12309: i/o timeout
  f014328: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/10003] dial tcp4 99.250.201.0:10003: i/o timeout
  f014329: 'dial, China, Hong Kong', // * [/ip4/65.181.71.9/tcp/5472] dial tcp4 65.181.71.9:5472: connect: connection refused
  f014348: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.15.78/tcp/46717] dial tcp4 0.0.0.0:37683->15.228.15.78:46717: i/o timeout
  f014377: 'dial, China, Liaoning', // * [/ip4/116.132.221.24/tcp/42985] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAwSVUn5sTmPq1f64G1FfAt3ovRyJwzimCQtr5NQYG3Z7, but remote key matches 12D3KooWSFGYvbGeXwHPdLytmxkzFgfAzMXjgUPFzwkcVzNnfGvu
  f014379: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f014380: 'dial, China, Hangzhou + Wuhan + Singapore', // * [/ip4/170.33.12.186/tcp/7161] dial tcp4 0.0.0.0:37683->170.33.12.186:7161: i/o timeout  * [/ip4/170.33.12.78/tcp/7161] dial tcp4 0.0.0.0:37683->170.33.12.78:7161: i/o timeout
  f014382: 'dial, Singapore', // * [/ip4/115.236.22.154/tcp/7177] dial tcp4 115.236.22.154:7177: connect: connection refused
  f014386: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/7169] dial tcp4 0.0.0.0:37683->170.33.12.186:7169: i/o timeout
  f014393: 'dial, China, Zhejiang', // * [/ip4/43.227.216.41/tcp/25677] failed to negotiate security protocol: read tcp4 10.0.1.9:37683->43.227.216.41:25677: read: connection reset by peer
  f014415: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f014431: 'dial, Singapore', // * [/ip4/170.33.12.78/tcp/7185] dial tcp4 0.0.0.0:37683->170.33.12.78:7185: i/o timeout  * [/ip4/170.33.12.186/tcp/7185] dial tcp4 0.0.0.0:37683->170.33.12.186:7185: i/o timeout
  f014432: 'dial, China, Chengdu', // * [/ip4/125.69.0.37/tcp/55019] dial tcp4 125.69.0.37:55019: connect: connection refused
  f014433: 'dial, Singapore', // * [/ip4/170.33.12.78/tcp/7193] dial tcp4 0.0.0.0:37683->170.33.12.78:7193: i/o timeout  * [/ip4/170.33.12.186/tcp/7193] dial tcp4 0.0.0.0:37683->170.33.12.186:7193: i/o timeout
  f014440: 'dial, Hong Kong', // * [/ip4/45.113.32.179/tcp/6666] dial tcp4 45.113.32.179:6666: connect: connection refused
  f014464: 'dial, China, Hangzhou + Singapore', // * [/ip4/170.33.12.205/tcp/7000] dial tcp4 0.0.0.0:37683->170.33.12.205:7000: i/o timeout
  f014481: 'dial, China, Shanghai', // * [/ip4/103.242.134.36/tcp/12288] failed to negotiate security protocol: read tcp4 10.0.1.9:37683->103.242.134.36:12288: read: connection reset by peer  * [/ip4/170.33.12.118/tcp/12345] dial tcp4 0.0.0.0:37683->170.33.12.118:12345: i/o timeout
  f014483: 'dial, USA, Clarksville', // * [/ip4/199.46.99.12/tcp/43801] dial tcp4 199.46.99.12:43801: connect: connection refused
  f014487: 'dial, China, Shanghai', // * [/ip4/47.241.59.58/tcp/45455] dial tcp4 0.0.0.0:37683->47.241.59.58:45455: i/o timeout
  f014522: 'dial, China, Shanghai', // * [/ip4/81.68.170.164/tcp/5474] dial tcp4 0.0.0.0:37683->81.68.170.164:5474: i/o timeout
  f014547: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.100:23450: i/o timeout
  f014572: 'dial, USA', // * [/ip4/47.90.208.156/tcp/39706] dial tcp4 0.0.0.0:37683->47.90.208.156:39706: i/o timeout
  f014573: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.101:23450: i/o timeout
  f014606: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f014609: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.109:23450: i/o timeout
  f014632: 'dial, Canada', // * [/ip4/148.59.149.162/tcp/10240] dial tcp4 148.59.149.162:10240: connect: connection refused
  f014634: 'dial, USA, Boardman', // * [/ip4/54.148.63.7/tcp/10240] dial tcp4 0.0.0.0:37683->54.148.63.7:10240: i/o timeout
  f014640: 'dial, Hungary', // * [/ip4/87.229.53.110/tcp/44163] dial tcp4 0.0.0.0:37683->87.229.53.110:44163: i/o timeout
  f014744: 'dial, China, Taiyuan', // * [/ip4/1.71.191.196/tcp/33411] dial tcp4 0.0.0.0:37683->1.71.191.196:33411: i/o timeout
  f014778: 'dial, China, Ordos', // * [/ip4/162.62.55.44/tcp/12310] dial tcp4 0.0.0.0:37683->162.62.55.44:12310: i/o timeout
  f014782: 'dial, DNS:wlblock.io', // * [/ip4/18.166.30.112/tcp/3456] dial tcp4 18.166.30.112:3456: connect: connection refused
  f014786: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:37683->218.85.126.210:23450: i/o timeout
  f014798: 'dial, Brazil, Sao Paulo', // * [/ip4/18.228.119.165/tcp/5101] dial tcp4 0.0.0.0:37683->18.228.119.165:5101: i/o timeout
  f014813: 'dial, China, Hangzhou + USA', // * [/ip4/43.224.34.33/tcp/9999] dial tcp4 43.224.34.33:9999: connect: connection refused  * [/ip4/162.209.218.130/tcp/12348] failed to negotiate security protocol: read tcp4 10.0.1.9:37683->162.209.218.130:12348: read: connection reset by peer
  f015231: 'dial, China, Wuxi', // * [/ip4/193.118.43.158/tcp/7090] failed to negotiate security protocol: EOF
  f015642: 'dial, China, Fuzhou', // * [/ip4/220.176.125.20/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.20:23450: i/o timeout
  f015643: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12317] dial tcp4 0.0.0.0:37683->47.57.188.137:12317: i/o timeout
  f015655: 'dial, Korea, Geumcheon-gu', // * [/ip4/121.140.143.29/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNVFbM4bePKFFkWiwUaCQpvvaKzcgtAXrDgiNjFcp6rRF, but remote key matches 12D3KooWSsjSaxoN3tdeWo4y9g34ptm3m7VmhoLvig1WXarkTPEj
  f015685: 'dial, China, Shanghai', // * [/ip4/222.64.141.185/tcp/40321] dial tcp4 0.0.0.0:37683->222.64.141.185:40321: i/o timeout
  f015714: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12318] dial tcp4 0.0.0.0:37683->47.57.188.137:12318: i/o timeout
  f015720: 'dial, China, Ningbo', // * [/ip4/45.77.72.195/tcp/7103] dial tcp4 45.77.72.195:7103: connect: no route to host  * [/ip4/155.138.144.135/tcp/7107] dial tcp4 0.0.0.0:37683->155.138.144.135:7107: i/o timeout  * [/ip4/141.164.50.170/tcp/7201] dial tcp4 0.0.0.0:37683->141.164.50.170:7201: i/o timeout  * [/ip4/149.28.89.24/tcp/7102] dial tcp4 0.0.0.0:37683->149.28.89.24:7102: i/o timeout  * [/ip4/45.32.19.57/tcp/7106] dial tcp4 0.0.0.0:37683->45.32.19.57:7106: i/o timeout  * [/ip4/45.77.89.14/tcp/7105] dial tcp4 0.0.0.0:37683->45.77.89.14:7105: i/o timeout  * [/ip4/104.156.230.123/tcp/7104] dial tcp4 0.0.0.0:37683->104.156.230.123:7104: i/o timeout
  f015731: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12329] dial tcp4 0.0.0.0:37683->8.209.107.150:12329: i/o timeout
  f015732: 'dial, USA, Portland', // * [/ip4/47.254.31.111/tcp/23456] dial tcp4 0.0.0.0:37683->47.254.31.111:23456: i/o timeout  * [/ip4/47.254.145.29/tcp/23456] dial tcp4 0.0.0.0:37683->47.254.145.29:23456: i/o timeout
  f015733: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12500] dial tcp4 0.0.0.0:37683->47.57.188.137:12500: i/o timeout
  f015742: 'dial, China, Ningbo', // * [/ip4/45.77.89.14/tcp/7005] dial tcp4 0.0.0.0:37683->45.77.89.14:7005: i/o timeout  * [/ip4/45.32.19.57/tcp/7006] dial tcp4 0.0.0.0:37683->45.32.19.57:7006: i/o timeout  * [/ip4/155.138.144.135/tcp/7007] dial tcp4 155.138.144.135:7007: i/o timeout  * [/ip4/104.156.230.123/tcp/7004] dial tcp4 0.0.0.0:37683->104.156.230.123:7004: i/o timeout  * [/ip4/141.164.50.170/tcp/7001] dial tcp4 0.0.0.0:37683->141.164.50.170:7001: i/o timeout  * [/ip4/45.77.72.195/tcp/7003] dial tcp4 0.0.0.0:37683->45.77.72.195:7003: i/o timeout  * [/ip4/149.28.89.24/tcp/7002] dial tcp4 0.0.0.0:37683->149.28.89.24:7002: i/o timeout
  f015751: 'dial, Canada, Huron East', // * [/ip4/184.94.177.239/tcp/15432] dial tcp4 184.94.177.239:15432: connect: connection refused
  f015756: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:37683->95.216.99.39:46717: i/o timeout
  f015757: 'dial, China, Hangzhou', // * [/ip4/103.46.128.45/tcp/57670] dial tcp4 103.46.128.45:57670: connect: connection refused
  f015760: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.53/tcp/7000] dial tcp4 0.0.0.0:37683->197.231.176.53:7000: i/o timeout
  f015763: 'dial, South Africa, Cape Town', // * [/ip4/13.244.159.54/tcp/8888] dial tcp4 0.0.0.0:37683->13.244.159.54:8888: i/o timeout
  f015767: 'dial, Russia, Khabarovsk + Japan, Khabarovsk + USA', // * [/ip4/66.42.38.110/tcp/9998] failed to negotiate security protocol: read tcp4 10.0.1.9:37683->66.42.38.110:9998: read: connection reset by peer  * [/ip4/172.247.228.122/tcp/9998] dial tcp4 172.247.228.122:9998: connect: connection refused  * [/ip4/92.223.72.130/tcp/9998] dial tcp4 92.223.72.130:9998: connect: connection refused
  f015777: 'dial, Australia, Sydney', // * [/ip4/52.63.43.218/tcp/8888] dial tcp4 0.0.0.0:37683->52.63.43.218:8888: i/o timeout
  f015795: 'dial, Brazil, Sao Paulo', // * [/ip4/18.230.133.57/tcp/8888] dial tcp4 0.0.0.0:37683->18.230.133.57:8888: i/o timeout
  f015799: 'dial, Germany, Rostock', // * [/ip4/127.0.0.1/tcp/37721] dial tcp4 127.0.0.1:37721: connect: connection refused  * [/ip4/46.4.63.227/tcp/37721] dial tcp4 0.0.0.0:37683->46.4.63.227:37721: i/o timeout
  f015801: 'dial, Germany, Ismaning', // * [/ip4/88.198.66.42/tcp/443] dial tcp4 88.198.66.42:443: connect: connection refused
  f015803: 'dial, Germany', // * [/ip4/46.4.79.213/tcp/443] dial tcp4 46.4.79.213:443: connect: connection refused
  f015804: 'dial, Germany, Ismaning', // * [/ip4/88.198.67.156/tcp/443] dial tcp4 88.198.67.156:443: connect: connection refused
  f015806: 'dial, Germany', // * [/ip4/176.9.59.6/tcp/443] dial tcp4 176.9.59.6:443: connect: connection refused
  f015807: 'dial, Germany', // * [/ip4/46.4.79.203/tcp/443] dial tcp4 46.4.79.203:443: connect: connection refused
  f015809: 'dial, Germany', // * [/ip4/127.0.0.1/tcp/45207] dial tcp4 127.0.0.1:45207: connect: connection refused  * [/ip4/46.4.63.227/tcp/45207] dial tcp4 0.0.0.0:37683->46.4.63.227:45207: i/o timeout
  f015811: 'dial, Germany, Lanshut', // * [/ip4/127.0.0.1/tcp/44685] dial tcp4 127.0.0.1:44685: connect: connection refused  * [/ip4/46.4.63.227/tcp/44685] dial tcp4 0.0.0.0:37683->46.4.63.227:44685: i/o timeout
  f015818: 'dial, Netherlands', // * [/ip4/66.248.204.121/tcp/2345] dial tcp4 66.248.204.121:2345: connect: connection refused
  f015819: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.5:23450: i/o timeout
  f015826: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.2:23450: i/o timeout
  f015839: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.3:23450: i/o timeout
  f015845: 'dial, China, Fuzhou', // * [/ip4/220.176.125.20/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.20:23450: i/o timeout
  f015846: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:37683->45.192.184.195:23450: i/o timeout
  f015848: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12321] dial tcp4 0.0.0.0:37683->8.209.107.150:12321: i/o timeout
  f015852: 'dial, China, Fuzhou', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:37683->45.192.184.195:23450: i/o timeout
  f015855: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.4:23450: i/o timeout
  f015860: 'dial, Ukraine, Odessa', // * [/ip4/178.212.192.216/tcp/64005] dial tcp4 178.212.192.216:64005: connect: connection refused
  f015861: 'dial, Ukraine, Odessa', // * [/ip4/178.212.192.216/tcp/64006] dial tcp4 178.212.192.216:64006: connect: connection refused
  f015862: 'dial, Ukraine, Odessa', // * [/ip4/178.212.192.216/tcp/64007] dial tcp4 178.212.192.216:64007: connect: connection refused
  f015866: 'dial, China, Fuzhou', // * [/ip4/220.176.125.10/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.10:23450: i/o timeout
  f015872: 'dial, China, Fuzhou', // * [/ip4/45.192.184.205/tcp/23450] dial tcp4 0.0.0.0:37683->45.192.184.205:23450: i/o timeout
  f015873: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:37683->182.99.0.98:23450: i/o timeout
  f015884: 'dial, China, Fuzhou', // * [/ip4/45.192.184.203/tcp/23450] dial tcp4 0.0.0.0:37683->45.192.184.203:23450: i/o timeout
  f015887: 'dial, China, Fuzhou', // * [/ip4/45.192.184.201/tcp/23450] dial tcp4 0.0.0.0:37683->45.192.184.201:23450: i/o timeout
  f015888: 'dial, China, Fuzhou', // * [/ip4/45.192.184.207/tcp/23450] dial tcp4 0.0.0.0:37683->45.192.184.207:23450: i/o timeout
  f015894: 'dial, China, Fuzhou', // * [/ip4/45.192.184.199/tcp/23450] dial tcp4 0.0.0.0:37683->45.192.184.199:23450: i/o timeout
  f015897: 'dial, China, Guangdong', // * [/ip4/43.252.149.169/tcp/4001] dial tcp4 0.0.0.0:37683->43.252.149.169:4001: i/o timeout
  f015898: 'dial, Lithuania', // * [/ip4/188.214.129.85/tcp/36899] dial tcp4 188.214.129.85:36899: connect: connection refused
  f015900: 'dial, Germany', // * [/ip4/46.4.63.227/tcp/443] dial tcp4 46.4.63.227:443: connect: connection refused
  f015903: 'dial, Germany', // * [/ip4/136.243.48.38/tcp/443] dial tcp4 136.243.48.38:443: connect: connection refused
  f015905: 'dial, Lithuania', // * [/ip4/188.214.129.49/tcp/34751] dial tcp4 0.0.0.0:37683->188.214.129.49:34751: i/o timeout
  f015907: 'dial, Canada, Calgary', // * [/ip4/70.77.238.98/tcp/46717] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPwoUPJMRoyTS4UJTV4jAeYY4raxtAPEw8VAfgENxBSwg, but remote key matches 12D3KooWNPbyqVXuPQQR3vocTMUbjipL95qHxGjoug56do1r2SCZ
  f015910: 'dial, Turkey', // * [/ip4/185.23.181.67/tcp/23450] dial tcp4 0.0.0.0:37683->185.23.181.67:23450: i/o timeout
  f015918: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.2:23450: i/o timeout
  f015922: 'dial, China', // * [/ip4/162.62.55.44/tcp/12317] dial tcp4 0.0.0.0:37683->162.62.55.44:12317: i/o timeout
  f015925: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12318] dial tcp4 0.0.0.0:37683->8.209.107.150:12318: i/o timeout
  f015926: 'dial, China', // * [/ip4/162.62.55.44/tcp/12319] dial tcp4 0.0.0.0:37683->162.62.55.44:12319: i/o timeout
  f015928: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.3:23450: i/o timeout
  f015933: 'dial, Finland, Helskinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:37683->95.216.99.39:46717: i/o timeout
  f015947: 'dial, Finland, Helsinki', // * [/ip4/95.217.114.57/tcp/45381] dial tcp4 95.217.114.57:45381: connect: connection refused
  f016024: 'dial, China, Fuzhou', // * [/ip4/220.176.125.10/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.10:23450: i/o timeout
  f016056: 'dial, USA, Arlington', // * [/ip4/69.251.248.175/tcp/6679] dial tcp4 0.0.0.0:37683->69.251.248.175:6679: i/o timeout
  f016207: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused
  f016238: 'dial, NR', // * [/ip4/192.168.100.27/tcp/57670] dial tcp4 192.168.100.27:57670: connect: no route to host
  f016263: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f016279: 'dial, Finland, Helsinki', // * [/ip4/95.216.68.181/tcp/46717] dial tcp4 0.0.0.0:37683->95.216.68.181:46717: i/o timeout
  f016297: 'dial, China, Mianyang + USA', // * [/ip4/47.254.128.95/tcp/7000] dial tcp4 0.0.0.0:37683->47.254.128.95:7000: i/o timeout  * [/ip4/47.254.25.128/tcp/7000] dial tcp4 0.0.0.0:37683->47.254.25.128:7000: i/o timeout
  f016302: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.5:23450: i/o timeout
  f016309: 'dial, USA, Boardman', // * [/ip4/52.41.243.212/tcp/28003] dial tcp4 0.0.0.0:37683->52.41.243.212:28003: i/o timeout
  f016364: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 0.0.0.0:37683->36.33.216.70:10240: i/o timeout
  f016412: 'dial, China, Taiwan, Taipei', // * [/ip4/35.234.30.173/tcp/555] failed to negotiate security protocol: EOF
  f016419: 'dial, USA, Mountain View', // * [/ip4/127.0.0.1/tcp/33585] dial tcp4 127.0.0.1:33585: connect: connection refused  * [/ip6/::1/tcp/44545] dial tcp6 [::1]:44545: connect: connection refused  * [/ip6/2601:647:4700:7e:b85f:e6cd:bc32:478f/tcp/44545] dial tcp6 [2601:647:4700:7e:b85f:e6cd:bc32:478f]:44545: connect: network is unreachable  * [/ip4/192.168.86.244/tcp/33585] dial tcp4 0.0.0.0:37683->192.168.86.244:33585: i/o timeout  * [/ip4/73.158.190.21/tcp/26715] dial tcp4 0.0.0.0:37683->73.158.190.21:26715: i/o timeout  * [/ip4/73.158.190.21/tcp/58442] dial tcp4 0.0.0.0:37683->73.158.190.21:58442: i/o timeout
  f016479: 'dial, China, Dongguan', // * [/ip4/218.16.123.133/tcp/4001] dial tcp4 218.16.123.133:4001: connect: connection refused
  f016509: 'dial, China, Fuzhou', // * [/ip4/220.249.190.57/tcp/44567] dial tcp4 0.0.0.0:37683->220.249.190.57:44567: i/o timeout  * [/ip4/10.25.40.61/tcp/40271] dial tcp4 0.0.0.0:37683->10.25.40.61:40271: i/o timeout
  f016511: 'dial, China, Beijing', // * [/ip4/120.233.45.244/tcp/12349] dial tcp4 120.233.45.244:12349: connect: connection refused
  f016525: 'dial, China, Guangzhou', // * [/ip4/8.210.76.199/tcp/18899] dial tcp4 0.0.0.0:37683->8.210.76.199:18899: i/o timeout
  f016579: 'dial, USA, Howell', // * [/ip4/96.64.7.172/tcp/5472] dial tcp4 0.0.0.0:37683->96.64.7.172:5472: i/o timeout
  f016603: 'dial, China, Dongguan', // * [/ip4/121.10.0.90/tcp/57670] dial tcp4 121.10.0.90:57670: i/o timeout
  f016659: 'dial, USA, Alpharetta', // * [/ip4/192.168.1.64/tcp/41931] dial tcp4 192.168.1.64:41931: i/o timeout
  f016850: 'dial, Japan', // * [/ip4/163.44.165.168/tcp/30333] dial tcp4 0.0.0.0:37683->163.44.165.168:30333: i/o timeout
  f016866: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.4:23450: i/o timeout
  f016917: 'dial, China, Guangdong', // * [/ip4/183.232.116.200/tcp/4001] dial tcp4 183.232.116.200:4001: connect: connection refused
  f017038: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.2:23450: i/o timeout
  f017067: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.3:23450: i/o timeout
  f017082: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.194/tcp/23450] dial tcp4 0.0.0.0:37683->45.192.184.194:23450: i/o timeout
  f017136: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f017193: 'dial, Singapore', // * [/ip4/8.211.49.16/tcp/14567] dial tcp4 0.0.0.0:37683->8.211.49.16:14567: i/o timeout
  f017194: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 0.0.0.0:37683->36.33.216.70:10240: i/o timeout
  f017200: 'dial, Lithuania', // * [/ip4/46.166.165.72/tcp/10240] dial tcp4 0.0.0.0:37683->46.166.165.72:10240: i/o timeout
  f017242: 'dial, China, Guangdong', // * [/ip4/103.142.248.7/tcp/4347] dial tcp4 103.142.248.7:4347: connect: connection refused
  f017244: 'dial, Korea, Seoul', // * [/ip4/141.164.34.113/tcp/41111] dial tcp4 0.0.0.0:37683->141.164.34.113:41111: i/o timeout
  f017250: 'dial, China, Zhejiang', // * [/ip4/161.117.88.227/tcp/35252] dial tcp4 0.0.0.0:37683->161.117.88.227:35252: i/o timeout
  f017266: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.2:23450: i/o timeout
  f017273: 'dial, China, Liaoning', // * [/ip4/116.132.221.10/tcp/10241] dial tcp4 116.132.221.10:10241: connect: connection refused
  f017285: 'dial, China, Maoming', // * [/ip4/61.143.232.26/tcp/12345] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRt4eMiHrLrX5pkzkw7VWmxVKH6MEBUM9cY2Rkqdb4ZiM, but remote key matches 12D3KooWRnweBo4UgdrkDH6PT7YpvEYBWGwTYf2VAiwcGELwpxvZ
  f017488: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 35.224.87.15:24002: connect: connection refused
  f017635: 'dial, China, Nanchong', // * [/ip4/124.161.87.252/tcp/32005] dial tcp4 0.0.0.0:37683->124.161.87.252:32005: i/o timeout
  f017672: 'dial, China, Cangzhou', // * [/ip4/221.195.0.71/tcp/10240] dial tcp4 0.0.0.0:37683->221.195.0.71:10240: i/o timeout
  f017734: 'dial, Australia, Sydney', // * [/ip4/14.203.98.125/tcp/5472] dial tcp4 14.203.98.125:5472: connect: connection refused
  f017738: 'dial, China', // * [/ip4/101.36.64.212/tcp/42545] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKXPSDMoCiBSyp8j8XYZX3PAsoBj6TkGqsFpvuyXYfqQe, but remote key matches 12D3KooWPb8mXDajrMrCzwN8R7hA7fq3CxhqhDE3oEArpyMzJnMB
  f017796: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.4:23450: i/o timeout
  f017970: 'dial, China, Baoding', // * [/ip4/222.222.135.67/tcp/37745] dial tcp4 222.222.135.67:37745: connect: connection refused
  f018088: 'dial, USA, Mountain View', // * [/ip6/2601:647:4700:7e:8d28:74f1:99b6:9807/tcp/36371] dial tcp6 [2601:647:4700:7e:8d28:74f1:99b6:9807]:36371: connect: network is unreachable  * [/ip6/::1/tcp/36371] dial tcp6 [::1]:36371: connect: connection refused  * [/ip4/127.0.0.1/tcp/41941] dial tcp4 127.0.0.1:41941: connect: connection refused  * [/ip4/192.168.86.244/tcp/41941] dial tcp4 192.168.86.244:41941: i/o timeout  * [/ip4/73.158.190.21/tcp/39083] dial tcp4 0.0.0.0:37683->73.158.190.21:39083: i/o timeout  * [/ip4/73.158.190.21/tcp/52286] dial tcp4 0.0.0.0:37683->73.158.190.21:52286: i/o timeout
  f018119: 'dial, China, Dongguan', // * [/ip4/113.105.174.9/tcp/10000] dial tcp4 0.0.0.0:37683->113.105.174.9:10000: i/o timeout
  f018203: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/5678] dial tcp4 0.0.0.0:37683->95.216.99.39:5678: i/o timeout
  f018429: 'dial, Korea, Hwaseong-si', // * [/ip4/112.222.105.76/tcp/24102] dial tcp4 112.222.105.76:24102: i/o timeout
  f018440: 'dial, Russia, St. Petersburg', // * [/ip4/188.187.61.69/tcp/44389] dial tcp4 0.0.0.0:37683->188.187.61.69:44389: i/o timeout
  f018464: 'dial, Sweden, Stockholm', // * [/ip4/85.30.30.76/tcp/38387] dial tcp4 0.0.0.0:37683->85.30.30.76:38387: i/o timeout
  f018476: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.4:23450: i/o timeout
  f018493: 'dial, Denmark, Kobenhavn S', // * [/ip4/185.50.195.183/tcp/10243] dial tcp4 0.0.0.0:37683->185.50.195.183:10243: i/o timeout
  f018498: 'dial, Singapore', // * [/ip4/8.209.119.18/tcp/14567] dial tcp4 0.0.0.0:37683->8.209.119.18:14567: i/o timeout
  f018506: 'dial, USA, New York', // * [/ip4/47.254.77.92/tcp/41112] failed to negotiate security protocol: EOF
  f018509: 'dial, China, Dongguan', // * [/ip4/113.105.174.6/tcp/10000] dial tcp4 113.105.174.6:10000: connect: no route to host
  f018525: 'dial, USA, Queens', // * [/ip4/24.90.181.106/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPPX51KkQcQhzM1LKBbu3uV2ZkFsBSmcDjLG7kgKqQbp4, but remote key matches 12D3KooWHcpqZ9Ps8cXHk2JaQVqAhjC7cPiLM14YKTmfAXT1LN3M
  f018540: 'dial, Netherlands', // * [/ip4/185.232.59.178/tcp/3347] dial tcp4 185.232.59.178:3347: connect: connection refused
  f018544: 'dial, Korea, Uijeongbu-si', // * [/ip4/119.193.190.72/tcp/5472] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGgihyz3aZvtSpXyZLtarqMxESor6KXzEp3poz8DRwTuZ, but remote key matches 12D3KooWBhrQUQC5gWtHeRNS1V7ThxEv4hKLCk8Z4PZNy7T1oruT
  f018562: 'dial, New Zealand, Masterton', // * [/ip4/121.99.224.109/tcp/10241] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWC9jegSfiHcei2BeABkn1PA164oQ7kpx2AQ12ix136988, but remote key matches 12D3KooWDcBfXqrBJvVEZZNfu41waaD2rLDM1H5xNBTJEMu5iec5  * [/ip4/121.99.224.109/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWC9jegSfiHcei2BeABkn1PA164oQ7kpx2AQ12ix136988, but remote key matches 12D3KooWNobH75Kmsr4LhtLbWXpViuRoqtiPUcso2VutUQc4TrtL
  f018803: 'dial, Korea, Seodaemun-gu', // * [/ip4/127.0.0.1/tcp/2345] dial tcp4 127.0.0.1:2345: connect: connection refused  * [/ip4/119.192.136.11/tcp/12345] dial tcp4 119.192.136.11:12345: connect: connection refused
  f018806: 'dial, Finland, Helsinki', // * [/ip4/95.217.114.57/tcp/45381] dial tcp4 95.217.114.57:45381: connect: connection refused
  f018809: 'dial, USA, New York', // * [/ip4/45.61.255.20/tcp/41114] dial tcp4 0.0.0.0:37683->45.61.255.20:41114: i/o timeout
  f018851: 'dial, China, Deyang + Singapore', // * [/ip4/103.242.134.36/tcp/12288] failed to negotiate security protocol: read tcp4 10.0.1.9:37683->103.242.134.36:12288: read: connection reset by peer
  f018884: 'dial, Russia', // * [/ip4/46.148.230.142/tcp/34745] dial tcp4 0.0.0.0:37683->46.148.230.142:34745: i/o timeout
  f018905: 'dial, Brazil, Sao Paulo', // * [/ip4/18.228.17.31/tcp/2347] dial tcp4 0.0.0.0:37683->18.228.17.31:2347: i/o timeout
  f018911: 'dial, USA, Portland', // * [/ip4/170.33.12.164/tcp/9090] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPMgigioxtnUsBqwBemuuxjZLKKpfhT3FmrWumyWDkQEd, but remote key matches 12D3KooWDkgbKexne42yFhovBdv7dEnZA4XpXYchEQpvEKpg2qTJ
  f019002: 'dial, USA', // * [/ip4/47.245.132.152/tcp/14567] dial tcp4 0.0.0.0:37683->47.245.132.152:14567: i/o timeout
  f019006: 'dial, Vietman, Ho Chi Minh City + China, Hong Kong', // * [/ip4/119.28.141.16/tcp/2312] dial tcp4 119.28.141.16:2312: connect: connection refused
  f019007: 'dial, China, Shenzhen + Hong Kong', // * [/ip4/154.91.38.15/tcp/51109] dial tcp4 154.91.38.15:51109: connect: connection refused  * [/ip4/103.44.247.132/tcp/51109] dial tcp4 103.44.247.132:51109: connect: connection refused
  f019015: 'dial, China, Hangzhou + Singapore', // * [/ip4/170.33.12.188/tcp/7087] dial tcp4 0.0.0.0:37683->170.33.12.188:7087: i/o timeout  * [/ip4/170.33.12.187/tcp/7087] dial tcp4 0.0.0.0:37683->170.33.12.187:7087: i/o timeout
  f019053: 'dial, Singapore', // * [/ip4/8.211.4.148/tcp/10243] failed to negotiate security protocol: EOF
  f019056: 'dial, South Africa, Cape Town', // * [/ip4/13.244.216.178/tcp/16079] dial tcp4 0.0.0.0:37683->13.244.216.178:16079: i/o timeout
  f019068: "dial, China, Ya'an, fri", // * [/ip4/110.188.25.2/tcp/30032] dial tcp4 110.188.25.2:30032: connect: connection refused
  f019071: 'dial, USA, New York', // * [/ip4/45.61.255.21/tcp/12345] dial tcp4 0.0.0.0:37683->45.61.255.21:12345: i/o timeout
  f019073: 'dial, Germany, Frankfurt', // * [/ip4/18.157.80.183/tcp/30005] dial tcp4 0.0.0.0:37683->18.157.80.183:30005: i/o timeout
  f019087: 'dial, South Africa, Johannesburg', // * [/ip4/152.32.140.119/tcp/41116] failed to negotiate security protocol: EOF
  f019090: 'dial, South Africa, Johannesburg', // * [/ip4/152.32.140.119/tcp/41115] failed to negotiate security protocol: EOF
  f019091: 'dial, China, Chengdu', // * [/ip4/182.131.4.194/tcp/10080] dial tcp4 182.131.4.194:10080: connect: connection refused
  f019094: 'dial, Brazil, Sao Paulo', // * [/ip4/177.71.173.122/tcp/8888] dial tcp4 0.0.0.0:37683->177.71.173.122:8888: i/o timeout
  f019097: 'dial, Russia, Irkutsk', // * [/ip4/90.188.227.20/tcp/46717] dial tcp4 90.188.227.20:46717: connect: connection refused
  f019145: 'dial, Brazil, Sao Paulo', // * [/ip4/54.232.153.175/tcp/16088] dial tcp4 0.0.0.0:37683->54.232.153.175:16088: i/o timeout
  f019150: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.4:23450: i/o timeout
  f019155: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15110] dial tcp4 0.0.0.0:37683->101.206.156.204:15110: i/o timeout
  f019169: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.40.58/tcp/14567] dial tcp4 0.0.0.0:37683->15.228.40.58:14567: i/o timeout
  f019174: 'dial, UK, Halifax', // * [/ip4/185.177.124.24/tcp/42012] dial tcp4 185.177.124.24:42012: connect: connection refused
  f019182: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15111] dial tcp4 0.0.0.0:37683->101.206.156.204:15111: i/o timeout
  f019185: 'dial, China, Beijing', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f019196: 'dial, China, Shenzhen + Hong Kong', // * [/ip4/103.44.247.132/tcp/51101] dial tcp4 103.44.247.132:51101: connect: connection refused  * [/ip4/115.91.38.15/tcp/51101] dial tcp4 0.0.0.0:37683->115.91.38.15:51101: i/o timeout
  f019233: 'dial, Russia', // * [/ip4/158.255.7.196/tcp/46207] dial tcp4 0.0.0.0:37683->158.255.7.196:46207: i/o timeout
  f019248: 'dial, USA, Council Bluffs', // * [/ip4/35.239.142.4/tcp/46717] dial tcp4 0.0.0.0:37683->35.239.142.4:46717: i/o timeout
  f019249: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 35.224.87.15:24002: connect: connection refused
  f019280: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.4:23450: i/o timeout
  f019281: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:37683->45.192.184.195:23450: i/o timeout
  f019317: 'dial, Brazil, Sao Paulo', // * [/ip4/177.71.163.156/tcp/10240] dial tcp4 0.0.0.0:37683->177.71.163.156:10240: i/o timeout
  f019325: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15090] dial tcp4 0.0.0.0:37683->101.206.156.204:15090: i/o timeout
  f019326: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15093] dial tcp4 0.0.0.0:37683->101.206.156.204:15093: i/o timeout
  f019327: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15094] dial tcp4 0.0.0.0:37683->101.206.156.204:15094: i/o timeout
  f019352: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15095] dial tcp4 0.0.0.0:37683->101.206.156.204:15095: i/o timeout
  f019459: 'dial, USA, Alpharetta', // * [/ip4/45.26.152.112/tcp/4137] dial tcp4 45.26.152.112:4137: connect: connection refused
  f019462: 'dial, Netherlands, Groningen', // * [/ip4/34.90.112.11/tcp/46717] dial tcp4 0.0.0.0:37683->34.90.112.11:46717: i/o timeout
  f019515: 'dial, Netherlands, Groningen', // * [/ip4/35.204.3.95/tcp/46717] dial tcp4 0.0.0.0:37683->35.204.3.95:46717: i/o timeout
  f019523: 'dial, USA, Los Angeles', // * [/ip4/47.156.151.169/tcp/33505] dial tcp4 0.0.0.0:37683->47.156.151.169:33505: i/o timeout
  f019596: 'dial, USA, Queens', // * [/ip4/24.90.181.106/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJ7XhEorySoQkEyajCdcsr9qcesafyFqS8apNeWwF26Ke, but remote key matches 12D3KooWHcpqZ9Ps8cXHk2JaQVqAhjC7cPiLM14YKTmfAXT1LN3M
  f019637: 'dial, China, Nanchang', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.4:23450: i/o timeout
  f019660: 'dial, South Korea, Cheonan', // * [/ip4/112.167.204.88/tcp/10241] dial tcp4 112.167.204.88:10241: connect: connection refused
  f019710: 'dial, Australia, Sydney', // * [/ip4/13.55.45.217/tcp/27002] dial tcp4 0.0.0.0:37683->13.55.45.217:27002: i/o timeout
  f019779: 'dial, China, Xuancheng', // * [/ip4/117.71.104.68/tcp/10000] dial tcp4 117.71.104.68:10000: connect: connection refused
  f019820: 'dial, Germany', // * [/ip6/2a01:4f8:212:2b45::2/tcp/33731] dial tcp6 [2a01:4f8:212:2b45::2]:33731: connect: network is unreachable  * [/ip4/136.243.77.118/tcp/41679] dial tcp4 136.243.77.118:41679: connect: connection refused
  f020223: 'dial, China, Guiyang', // * [/ip4/111.85.176.10/tcp/10240] dial tcp4 0.0.0.0:37683->111.85.176.10:10240: i/o timeout
  f020330: 'dial, USA', // * [/ip4/10.10.33.155/tcp/14567] dial tcp4 0.0.0.0:37683->10.10.33.155:14567: i/o timeout
  f020331: 'dial, USA', // * [/ip4/10.10.11.81/tcp/14567] dial tcp4 10.10.11.81:14567: i/o timeout
  f020358: 'dial, China, Xinxiang', // * [/ip4/27.50.142.73/tcp/1347] dial tcp4 27.50.142.73:1347: i/o timeout
  f020388: 'dial, Korea, Uijeongbu-si', // * [/ip4/119.193.190.72/tcp/5472] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPdmxWWt6PobzkuCgUsUZwyDYM9TGnvAu38rnd4TshTLZ, but remote key matches 12D3KooWBhrQUQC5gWtHeRNS1V7ThxEv4hKLCk8Z4PZNy7T1oruT
  f020401: 'dial, USA, Raleigh', // * [/ip4/136.56.12.204/tcp/27972] dial tcp4 136.56.12.204:27972: i/o timeout
  f020431: 'dial, Korea, Seoul', // * [/ip4/125.128.51.180/tcp/24001] dial tcp4 125.128.51.180:24001: i/o timeout
  f020452: 'dial, China, Hangzhou + Singapore', // * [/ip4/170.33.12.186/tcp/17012] dial tcp4 0.0.0.0:37683->170.33.12.186:17012: i/o timeout
  f020516: 'dial, China, Dalian', // * [/ip4/42.202.134.189/tcp/33666] dial tcp4 0.0.0.0:37683->42.202.134.189:33666: i/o timeout
  f020522: 'dial, Singapore', // * [/ip4/8.211.49.16/tcp/14567] dial tcp4 0.0.0.0:37683->8.211.49.16:14567: i/o timeout
  f020572: 'dial, China, Nanchang', // * [/ip4/220.176.125.123/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.123:23450: i/o timeout
  f020604: 'dial, Singapore', // * [/ip4/8.209.106.203/tcp/14567] dial tcp4 0.0.0.0:37683->8.209.106.203:14567: i/o timeout
  f020618: 'dial, Singapore', // * [/ip4/10.10.12.19/tcp/7000] dial tcp4 10.10.12.19:7000: connect: no route to host  * [/ip4/170.33.12.186/tcp/17011] dial tcp4 0.0.0.0:37683->170.33.12.186:17011: i/o timeout
  f020622: 'dial, China, Hong Kong', // * [/ip4/43.228.183.102/tcp/40573] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHF5unBQ9CuS2jnnxCzvRHGiMMQbH487tbfoGUAvhY4ik, but remote key matches 12D3KooWQzhuFoqWfap5FT3hD9jTSc1wiP3Sn735mstACYiPuw75
  f020626: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:37683->73.158.16.48:30390: i/o timeout
  f020771: 'dial, Japan, Setagaya-ku', // * [/ip4/59.138.253.69/tcp/55555] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWB9hQuvFTwgPe23wsd8tmLGpYF9aXjTy8brZjndR3Ubxv, but remote key matches 12D3KooWSE29Kez4KaaJ2o94XGC9RX32KZXWWQSobZ3tXKeSweUQ
  f020814: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/11051] dial tcp4 183.63.203.161:11051: i/o timeout
  f020816: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/11052] dial tcp4 183.63.203.161:11052: i/o timeout
  f020891: 'dial, China, Wenzhou', // * [/ip4/122.228.196.208/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSitZhuvzGB9mxZvC1rN6ubezTJUrHV2nXxWaBvJQ1Bji, but remote key matches 12D3KooWDLC4HXzHjaMegLssFx9HwMmyNzhGc4XmcSSP9rZaSFyv
  f020923: 'dial, China, Cangzhou', // * [/ip4/221.195.3.147/tcp/10240] dial tcp4 221.195.3.147:10240: connect: connection refused
  f020940: 'dial, @fu', // * [/ip4/127.0.0.1/tcp/1347] dial tcp4 127.0.0.1:1347: connect: connection refused  * [/ip6/::1/tcp/41965] dial tcp6 [::1]:41965: connect: connection refused  * [/ip4/116.237.97.73/tcp/1347] dial tcp4 0.0.0.0:37683->116.237.97.73:1347: i/o timeout  * [/ip4/192.168.0.32/tcp/1347] dial tcp4 0.0.0.0:37683->192.168.0.32:1347: i/o timeout
  f020967: 'dial, China, Chengdu', // * [/ip4/171.221.236.129/tcp/45001] dial tcp4 171.221.236.129:45001: i/o timeout
  f021075: 'dial, undefined', // * [/ip4/182.148.14.72/tcp/36545] dial tcp4 0.0.0.0:37683->182.148.14.72:36545: i/o timeout
  f021142: 'dial, China, Fuzhou', // * [/ip4/220.176.125.110/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.110:23450: i/o timeout
  f021292: 'dial, China, Hong Kong', // * [/ip4/43.228.183.102/tcp/40573] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKztv937mFfnZpXpHnJP7DFTSMeeJrwjktcs5oSvNmfPN, but remote key matches 12D3KooWQzhuFoqWfap5FT3hD9jTSc1wiP3Sn735mstACYiPuw75
  f021428: 'dial, Norway, Borgen', // * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAgRs1gYFCWPQopKBh3nZPDfq3yJ7gjyvvmd9dpyw7mHH, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f021461: 'dial, China, Yangzhou + Singapore', // * [/ip4/170.33.12.186/tcp/17361] dial tcp4 0.0.0.0:37683->170.33.12.186:17361: i/o timeout
  f021463: 'dial, China, Mianyang', // * [/ip4/117.175.0.194/tcp/18181] dial tcp4 117.175.0.194:18181: connect: connection refused
  f021475: 'dial, China, Dongguan', // * [/ip4/183.240.203.136/tcp/34567] dial tcp4 183.240.203.136:34567: connect: connection refused
  f021483: 'dial, China, Beijing', // * [/ip4/124.250.42.202/tcp/24567] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQ5cSo6iMXULjKb3SVBaij2UwiPnYPVaaa2USiFraVxox, but remote key matches 12D3KooWPWvmSSgQT8y59FzyFArZdnkBV37wBFyu5TQZ4LWsNXPH
  f021547: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17329] dial tcp4 0.0.0.0:37683->170.33.12.186:17329: i/o timeout
  f021616: 'dial, China, Shanghai', // * [/ip4/58.33.161.26/tcp/24001] dial tcp4 58.33.161.26:24001: connect: connection refused
  f021644: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:37683->73.158.16.48:30390: i/o timeout
  f022031: 'dial, China, Maoming', // * [/ip4/61.143.232.26/tcp/12345] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWF3WXYfXSHjK3bqCJGA5LCXgEP67vwgdqYQgGs1HY9S7w, but remote key matches 12D3KooWRnweBo4UgdrkDH6PT7YpvEYBWGwTYf2VAiwcGELwpxvZ
  f022069: 'dial, China, Hong Kong', // * [/ip4/221.127.8.183/tcp/24001] dial tcp4 0.0.0.0:37683->221.127.8.183:24001: i/o timeout
  f022111: 'dial, China, Quanzhou', // * [/ip4/112.47.13.98/tcp/8081] dial tcp4 112.47.13.98:8081: connect: connection refused
  f022144: 'dial, China, Fuzhou', // * [/ip4/220.176.125.110/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.110:23450: i/o timeout
  f022146: 'dial, China, Fuzhou', // * [/ip4/220.176.125.123/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.123:23450: i/o timeout
  f022157: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:37683->220.176.125.5:23450: i/o timeout
  f022166: 'dial, Norway, Borgen', // * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLsZ4PQtpyZQpEfXvheZHgirJe7bQmse7brRndyaWs3Jh, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f022261: 'dial, China, Luzhou', // * [/ip4/175.155.178.195/tcp/7777] dial tcp4 175.155.178.195:7777: i/o timeout
  f022304: 'dial, China, Taiyuan', // * [/ip4/221.204.177.81/tcp/2222] dial tcp4 221.204.177.81:2222: connect: connection refused
  f022320: 'dial, Korea, Seoul', // * [/ip4/220.119.37.150/tcp/24001] dial tcp4 0.0.0.0:37683->220.119.37.150:24001: i/o timeout
  f022351: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.97/tcp/24001] dial tcp4 211.114.218.97:24001: connect: connection refused
  f022364: 'dial, Korea, Jungang-gu', // * [/ip4/125.129.37.73/tcp/10241] dial tcp4 0.0.0.0:37683->125.129.37.73:10241: i/o timeout
  f022405: 'dial, Russia', // * [/ip4/158.255.7.196/tcp/46175] dial tcp4 0.0.0.0:37683->158.255.7.196:46175: i/o timeout
  f022518: 'dial, DNS:poseidon.technology', // * [/ip4/118.160.55.198/tcp/24000] dial tcp4 118.160.55.198:24000: connect: connection refused
  f022687: 'dial, China, Chengdu', // * [/ip4/182.131.4.194/tcp/10080] dial tcp4 182.131.4.194:10080: connect: connection refused
  f022737: 'dial, Korea, Gangnum-gu', // * [/ip4/112.216.168.43/tcp/20000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPDeMQg1GK1w8NAnaPS2Pq3DytpW2DZtvQQKA9UheEWAT, but remote key matches 12D3KooWPBwquKY3asxootDXttSQfAUrvotFvv8suATHk2NtRNK6
  f022748: 'dial, China, Xinyang', // * [/ip4/8.209.114.206/tcp/48932] dial tcp4 0.0.0.0:37683->8.209.114.206:48932: i/o timeout
  f022780: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.98/tcp/24001] dial tcp4 0.0.0.0:37683->211.114.218.98:24001: i/o timeout
  f022787: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.99/tcp/24001] dial tcp4 211.114.218.99:24001: connect: connection refused
  f022913: 'dial, Korea, Uiwang', // * [/ip4/211.170.25.239/tcp/20000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPVYoHBZfyAzecrWkRzpCtWfSqxaQgw6K5SXc5v1S3oXT, but remote key matches 12D3KooWEEVG3U2QXCs4nnFVyBdjTunWUQuN1sQ2PgTddt4vTP2h
  f022967: 'dial, Korea, Seoul', // * [/ip4/218.144.46.55/tcp/24001] dial tcp4 218.144.46.55:24001: connect: connection refused
  f023001: 'dial, China, Changsha', // * [/ip4/175.6.13.58/tcp/7000] failed to negotiate security protocol: context deadline exceeded
  f023009: 'dial, USA, Berkeley', // * [/ip4/50.193.58.118/tcp/30390] dial tcp4 0.0.0.0:37683->50.193.58.118:30390: i/o timeout
  f023016: 'dial, NR', // * [/ip4/10.6.1.121/tcp/61121] dial tcp4 0.0.0.0:37683->10.6.1.121:61121: i/o timeout
  f023181: 'dial, DNS:poseidon.technology', // * [/ip4/140.113.194.250/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWL42QpczhsrHfWGC3L38LFac8vfibWfub8ELohMA1ZjjC, but remote key matches 12D3KooWPcST189CRdZ2BLrE5NhFz2YQwcfCWdabj12FWwVNBjYj
  f023190: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 0.0.0.0:37683->36.33.216.70:10240: i/o timeout
  f023200: 'dial, China, Shanghai', // * [/ip4/175.24.25.61/tcp/13457] failed to negotiate security protocol: read tcp4 10.0.1.9:37683->175.24.25.61:13457: read: connection reset by peer
  f023202: 'dial, China, Wuxi', // * [/ip4/58.215.232.74/tcp/10200] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBrUUKAXnschtUgweFhcqt4dEMRkaToUH6hpWxwviM3d2, but remote key matches 12D3KooWSxGj1viupyBBGuwmhBWpdBJDHGEw7BzcUHqzUHXERH59  * [/ip4/192.168.1.18/tcp/1020] dial tcp4 0.0.0.0:37683->192.168.1.18:1020: i/o timeout
  f023205: 'dial, NR', // * [/ip4/10.10.33.154/tcp/14567] dial tcp4 0.0.0.0:37683->10.10.33.154:14567: i/o timeout
  f023219: 'dial, NR', // * [/ip4/116.132.221.24/tcp/42990] dial tcp4 116.132.221.24:42990: connect: connection refused
  f023229: 'dial, China, Shandong', // * [/ip4/106.74.192.3/tcp/36980] dial tcp4 0.0.0.0:37683->106.74.192.3:36980: i/o timeout
  f023549: 'dial, China, Zhejiang', // * [/ip4/47.102.202.230/tcp/5472] dial tcp4 47.102.202.230:5472: connect: connection refused
  f023583: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.120/tcp/24001] dial tcp4 211.114.218.120:24001: connect: connection refused
  f023586: 'dial, USA, Germantown', // * [/ip4/96.255.216.221/tcp/23432] dial tcp4 0.0.0.0:37683->96.255.216.221:23432: i/o timeout
  f023654: 'dial, China, Hong Kong', // * [/ip4/103.100.152.118/tcp/24001] dial tcp4 103.100.152.118:24001: i/o timeout
  f023655: 'dial, Australia, Brisbane', // * [/ip4/144.137.18.224/tcp/54321] dial tcp4 144.137.18.224:54321: connect: connection refused
  f023674: 'dial, China, Fuzhou', // * [/ip4/220.176.125.99/tcp/23450] dial tcp4 220.176.125.99:23450: connect: connection refused
  f023826: 'dial, USA, Germantown', // * [/ip4/96.255.216.221/tcp/23432] dial tcp4 0.0.0.0:37683->96.255.216.221:23432: i/o timeout
  f023937: 'dial, China, Fuzhou', // * [/ip4/220.176.125.99/tcp/23450] dial tcp4 220.176.125.99:23450: connect: connection refused
  f024070: 'dial, Japan, Setagaya-ku', // * [/ip4/59.138.253.69/tcp/55555] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLmKkqK47NBUy32s67r1ayuvsYkpvsKiEDZUvEAWahX1W, but remote key matches 12D3KooWSE29Kez4KaaJ2o94XGC9RX32KZXWWQSobZ3tXKeSweUQ
  f024108: 'dial, Korea', // * [/ip4/59.23.202.120/tcp/23234] dial tcp4 59.23.202.120:23234: i/o timeout
  f024130: 'dial, Korea', // * [/ip4/59.23.202.120/tcp/23235] dial tcp4 59.23.202.120:23235: i/o timeout
  f024137: 'dial, NR', // * [/ip4/10.10.33.182/tcp/14567] dial tcp4 0.0.0.0:37683->10.10.33.182:14567: i/o timeout
  f024150: 'dial, UK, Mansfield', // * [/ip4/77.115.13.211/tcp/24002] dial tcp4 0.0.0.0:37683->77.115.13.211:24002: i/o timeout
  f024182: 'dial, NR', // * [/ip4/14.136.246.135/tcp/46717] dial tcp4 0.0.0.0:37683->14.136.246.135:46717: i/o timeout
  f024190: 'dial, China, Wenzhou', // * [/ip4/122.228.196.208/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQHPkEDKyJHgsVzg8t8WA59AuGYbazD2hDMktKJHBJVc6, but remote key matches 12D3KooWDLC4HXzHjaMegLssFx9HwMmyNzhGc4XmcSSP9rZaSFyv
  f024511: 'dial, NR', // * [/ip4/103.44.247.137/tcp/51105] dial tcp4 0.0.0.0:37683->103.44.247.137:51105: i/o timeout
  f024521: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.31/tcp/10241] dial tcp4 59.6.127.31:10241: connect: connection refused
  f024565: 'dial, Korea, Incheon', // * [/ip4/52.78.230.89/tcp/46469] dial tcp4 0.0.0.0:37683->52.78.230.89:46469: i/o timeout
  f024617: 'dial, Korea, Bucheon-si', // * [/ip4/119.197.20.93/tcp/24001] dial tcp4 119.197.20.93:24001: connect: connection refused
  f024893: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.1/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWACjFnNXeyRrVo4s5zF1SLUidAM8si95q2t5ofjXKecz1, but remote key matches 12D3KooWP4sdNCGcnwS9GBTF1MuoEYtCEFTpiLidL6Zf9Kk86igA
  f024983: 'dial, China, Hong Kong', // * [/ip4/103.100.152.129/tcp/24001] dial tcp4 103.100.152.129:24001: connect: connection refused
  f024985: 'dial, China, Shenzhen', // * [/ip4/192.168.0.175/tcp/3000] dial tcp4 192.168.0.175:3000: i/o timeout
  f024986: 'dial, China, Zhongshan', // * [/ip4/192.168.2.64/tcp/3000] dial tcp4 0.0.0.0:37683->192.168.2.64:3000: i/o timeout
  f025002: 'dial, NR', // * [/ip4/10.30.8.211/tcp/14567] dial tcp4 0.0.0.0:37683->10.30.8.211:14567: i/o timeout
  f025008: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.34/tcp/10241] dial tcp4 59.6.127.34:10241: connect: connection refused
  f025044: 'dial, NR', // * [/ip4/127.0.0.1/tcp/5465] dial tcp4 127.0.0.1:5465: connect: connection refused  * [/ip4/10.42.8.37/tcp/5465] dial tcp4 10.42.8.37:5465: i/o timeout  * [/ip4/183.240.204.122/tcp/5465] dial tcp4 0.0.0.0:37683->183.240.204.122:5465: i/o timeout
  f029344: 'dial, Korea, Seongnam-si', // * [/ip4/221.163.91.162/tcp/33230] dial tcp4 0.0.0.0:37683->221.163.91.162:33230: i/o timeout
  f029412: 'dial, China, Hefei', // * [/ip4/36.33.216.78/tcp/10240] dial tcp4 36.33.216.78:10240: i/o timeout
  f029425: 'dial, NR', // * [/ip4/61.155.145.133/tcp/8086] dial tcp4 61.155.145.133:8086: connect: connection refused
  f029552: 'dial, China, Changsha', // * [/ip4/175.6.2.12/tcp/7001] dial tcp4 175.6.2.12:7001: connect: connection refused
  f029628: 'dial, Australia, Brisbane', // * [/ip4/144.137.18.224/tcp/54321] dial tcp4 144.137.18.224:54321: connect: connection refused
  f030219: 'dial, China, Changsha', // * [/ip4/175.6.2.5/tcp/7000] dial tcp4 175.6.2.5:7000: connect: connection refused
  f030278: 'dial, Korea, Gyeonggi-do', // * [/ip4/211.114.218.110/tcp/24001] dial tcp4 211.114.218.110:24001: connect: connection refused
  f030338: 'dial, USA, Santa Fe Springs', // * [/ip4/47.180.252.45/tcp/1024] dial tcp4 47.180.252.45:1024: connect: connection refused
  f030355: 'dial, Australia, Brisbane', // * [/ip4/144.137.18.224/tcp/7070] failed to negotiate security protocol: EOF

  // XNR (Not routable)

  f01000: 'xnr, NR - bootstrap',
  f01001: 'xnr, NR - bootstrap',
  f01002: 'xnr, NR - bootstrap',
  f01013: 'xnr, NR',
  f01101: 'xnr, China, Shanghai',
  f01102: 'xnr, China, Shandong',
  f01156: 'xnr, China, Hangzhou',
  f01232: 'xnr, China, Hangzhou',
  f01274: 'xnr, China, Guangdong',
  f02304: 'xnr, USA, Mountain View',
  f02382: 'xnr, China, Zhongshan-cfa',
  f02385: 'xnr, USA, East Islip',
  f02398: 'xnr, China, Hong Kong',
  f02404: 'xnr, Korea, Seoul',
  f02424: 'xnr, Korea, Wanju',
  f02436: 'xnr, Netherlands',
  f02506: 'xnr, USA, Clarksville',
  f02515: 'xnr, China, Hangzhou',
  f02518: 'xnr, China, Shaanxi',
  f02575: 'xnr, USA, Davis',
  f02608: 'xnr, USA, San Jose',
  f02768: 'xnr, China, Hong Kong',
  f02774: 'xnr, Australia, Sydney',
  f02775: 'xnr, China, Hong Kong',
  f03319: 'xnr, NR',
  f03341: 'xnr, NR',
  f03346: 'xnr, China, Huzhou, wckj',
  f03361: 'xnr, China, Guangzhou',
  f03428: 'xnr, China, Beijing + Jiaxing + Germany, Frankfurt',
  f03487: 'xnr, China, Yibin',
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
  f07945: 'xnr, China, Dongguan',
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
  f09733: 'xnr, China, Chongqing',
  f09736: 'xnr, China, Guangdong',
  f09753: 'xnr, Korea, Pyeongtaek-si',
  f09762: 'xnr, China, Guangdong',
  f09805: 'xnr, China, Fuzhou',
  f09840: 'xnr, China, Baoding',
  f09912: 'xnr, USA, Concord',
  f09966: 'xnr, NR',
  f09974: 'xnr, Canada, Calgary',
  f09997: 'xnr, USA',
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
  f010405: 'xnr, China, Foshan',
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
  f014708: 'xnr, China, Beijing',
  f014741: 'xnr, China, Wuhan',
  f014745: 'xnr, China, Shenyang',
  f014749: 'xnr, China, Chongqing',
  f014764: 'xnr, Korea, Wanju',
  f014793: 'xnr, China, Hangzhou',
  f014799: 'xnr, China, Chongqing',
  f014803: 'xnr, China, Beijing',
  f015061: 'xnr, Australia, Sydney',
  f015232: 'xnr, Poland, Warsaw',
  f015709: 'xnr, China, Hefei',
  f015724: 'xnr, China, Guangdong',
  f015753: 'xnr, China, Guyuan',
  f015797: 'xnr, Germany, Rostock',
  f015798: 'xnr, Germany',
  f015800: 'xnr, Germany, Sankt Andreasberg',
  f015802: 'xnr, Germany',
  f015805: 'xnr, Germany',
  f015808: 'xnr, Germany',
  f015810: 'xnr, Germany',
  f015812: 'xnr, Germany',
  f015827: 'xnr, Russia',
  f015829: 'xnr, China, Beijing',
  f015833: 'xnr, China, Baoding',
  f015867: 'xnr, Netherlands, Amsterdam',
  f015870: 'xnr, China, Hangzhou',
  f015875: 'xnr, China, Fuzhou',
  f015891: 'xnr, China, Shanghai',
  f015901: 'xnr, Germany',
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
  f016276: 'xnr, China, Beijing',
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
  f016859: 'xnr, NR',
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
  f019437: 'xnr, Korea, Guro-gu',
  f019525: 'xnr, USA, Berkeley',
  f019528: 'xnr, Peru',
  f019547: 'xnr, Peru',
  f019645: 'xnr, Russia, St. Petersburg',
  f019723: 'xnr, China, Zhongshan',
  f019734: 'xnr, NR',
  f019757: 'xnr, NR',
  f019804: 'xnr, China, Chengdu',
  f019806: 'xnr, China, Beijing',
  f019809: 'xnr, NR',
  f019812: 'xnr, NR',
  f019824: 'xnr, USA',
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
  f020957: 'xnr, NR',
  f020961: 'xnr, China, Shanghai',
  f020975: 'xnr, China, Shandong',
  f021069: 'xnr, USA',
  f021083: 'xnr, NR',
  f021092: 'xnr, NR',
  f021095: 'xnr, NR',
  f021254: 'xnr, NR',
  f021286: 'xnr, China, Shaanxi',
  f021307: 'xnr, China, Chengdu',
  f021311: 'xnr, NR',
  f021337: 'xnr, China, Beijing',
  f021357: 'xnr, China, Shanghai',
  f021418: 'xnr, NR',
  f021494: 'xnr, NR',
  f021500: 'xnr, NR',
  f021504: 'xnr, NR',
  f021505: 'xnr, NR',
  f021509: 'xnr, China, Fuzhou',
  f021527: 'xnr, NR',
  f021535: 'xnr, China, Chengdu',
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
  f022070: 'xnr, China, Jieyang',
  f022084: 'xnr, China, Shaanxi',
  f022091: 'xnr, NR',
  f022093: 'xnr, NR',
  f022108: 'xnr, China, Luzhou',
  f022122: 'xnr, NR',
  f022132: 'xnr, China, Dongguan',
  f022171: 'xnr, China, Shanghai',
  f022250: 'xnr, NR',
  f022262: 'xnr, China, Hong Kong',
  f022276: 'xnr, Korea, Seoul',
  f022284: 'xnr, China, Shaanxi',
  f022303: 'xnr, NR',
  f022308: 'xnr, NR',
  f022313: 'xnr, NR',
  f022321: 'xnr, China, Hong Kong',
  f022326: 'xnr, China, Zhongshan',
  f022333: 'xnr, China, Dongguan',
  f022336: 'xnr, NR',
  f022337: 'xnr, NR',
  f022338: 'xnr, NR',
  f022343: 'xnr, China, Dongguan',
  f022361: 'xnr, NR',
  f022372: 'xnr, China, Chengdu',
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
  f022797: 'xnr, NR',
  f022804: 'xnr, China, Yibin',
  f022834: 'xnr, NR',
  f022836: 'xnr, China, Chongqing',
  f022838: 'xnr, China, Hong Kong',
  f022857: 'xnr, NR',
  f022880: 'xnr, NR',
  f022906: 'xnr, NR',
  f022911: 'xnr, China, Hong Kong',
  f022912: 'xnr, NR',
  f022926: 'xnr, NR',
  f022930: 'xnr, NR',
  f022954: 'xnr, NR',
  f022970: 'xnr, NR',
  f022996: 'xnr, NR',
  f023013: 'xnr, undefined',
  f023021: 'xnr, Korea, Yeongdeungpo-dong',
  f023108: 'xnr, China, Dongguan',
  f023159: 'xnr, NR',
  f023198: 'xnr, NR',
  f023207: 'xnr, undefined',
  f023210: 'xnr, China, Dongguan',
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
  f023651: 'xnr, NR',
  f023661: 'xnr, China, Zhejiang',
  f023798: 'xnr, China, Shanghai',
  f023801: 'xnr, China, Dongguan',
  f023881: 'xnr, China, Fuzhou',
  f023882: 'xnr, NR',
  f023943: 'xnr, USA, Ashburn',
  f023965: 'xnr, NR',
  f023986: 'xnr, Korea, Seoul',
  f024031: 'xnr, NR',
  f024074: 'xnr, NR',
  f024089: 'xnr, NR',
  f024129: 'xnr, China, Zhejiang',
  f024165: 'xnr, NR',
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
  f024895: 'xnr, NR',
  f024903: 'xnr, China, Mianyang',
  f024972: 'xnr, NR',
  f025028: 'xnr, NR',
  f029416: 'xnr, NR',
  f029421: 'xnr, China, Hong Kong',
  f029477: 'xnr, NR',
  f029595: 'xnr, China, Guangdong',
  f029619: 'xnr, China, Hefei',
  f029632: 'xnr, NR',
  f030203: 'xnr, NR',
  f030249: 'xnr, NR',
  f030272: 'xnr, NR',
  f030331: 'xnr, NR',
  f030347: 'xnr, China, Zhejiang',
  f030384: 'xnr, NR',
  f030511: 'xnr, NR',
  f030514: 'xnr, NR',
  f030521: 'xnr, China, Hong Kong',
  f032833: 'xnr, NR'
}

export default annotations
