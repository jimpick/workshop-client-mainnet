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

  f034666: 'new, NR',
  f065259: 'new, NR', // carry-over
  f073904: 'new, NR',
  f080468: 'new, NR',
  f080868: 'new, NR',
  f081969: 'new, NR',
  f082095: 'new, NR',
  f082730: 'new, NR',
  f083419: 'new, NR',
  f083474: 'new, NR',
  f083542: 'new, NR',
  f083920: 'new, NR',
  f084155: 'new, NR',
  f084419: 'new, NR',
  f084879: 'new, Korea, Seongnam-si',
  f084907: 'new, NR',
  f085226: 'new, Korea, Busan',
  f085415: 'new, NR',
  f085435: 'new, NR',
  f085437: 'new, NR',
  f085710: 'new, China, Chengdu',
  f085735: "new, China, Ya'an",
  f085899: 'new, China, Wuxi',
  f085904: 'new, China, Chongqing',
  f086028: 'new, NR',
  f086151: 'new, China, Dongguan',
  f086204: 'new, NR',
  f086240: 'new, NR',
  f086366: 'new, NR',
  f086381: 'new, NR',
  f086423: 'new, China, Chengdu',
  f086439: 'new, NR',
  f086442: 'new, NR',
  f086450: 'new, NR',
  f086572: 'new, NR',
  f086610: 'new, Korea, Gyeonggi-do',
  f086631: 'new, Korea, Gwangju',
  f086988: 'new, NR',
  f087256: 'new, NR',
  f087442: 'new, Korea, Gyeonggi-do',
  f087530: 'new, China, Shenzhen',
  f087807: 'new, Korea',
  f087931: 'new, China, Beijing',
  f088305: 'new, Korea, Gyeonggi-do',
  f088404: 'new, Korea, Gyeonggi-do',
  f089201: 'new, Korea, Gyeonggi-do',
  f089210: 'new, Korea, Gyeonggi-do',
  f089232: 'new, China, Ningxia',
  f089311: 'new, Korea, Gyeonggi-do',

  // Active

  f01247: 'active, Canada, Montreal', // 1372308 about 9 hours
  f01278: 'active, USA, Grand Rapids, MiMiner', // 1372298 about 21 hours
  f01799: 'active, China, Jinan, TokenHome', // 1372313 about 9 hours
  f07709: 'active, Korea, Dongjak-gu', // 1372325 about 21 hours
  f08103: 'active, China, Foshan, 花生酱肠粉', // 1372412 about 9 hours
  f08204: 'active, USA, St. Louis', // 1372319 about 21 hours
  f08240: 'active, Russia, Novosibirsk, Rabinovitch', // 1372331 about 12 hours
  f010491: 'active, China, Shenzhen', // 1372328 about 21 hours
  f010505: 'active, China, Wuhan, Interstellar Roewe', // 1372303 about 5 hours
  f010523: 'active, China, Beijing, Interstellar Roewe', // 1372339 about 21 hours
  f014324: 'active, Canada, Vancouver', // 1372368 about 11 hours
  f014768: 'active, Singapore, Funktafide, @Funk', // 1372307 about 9 hours
  f015233: 'active, China, Nanjing', // 1372345 about 21 hours
  f015877: 'active, China, Jiaxing + USA', // 1372336 about 8 hours
  f019240: 'active, China, Beijing', // 1372362 about 12 hours
  f019243: 'active, USA, Jackson', // 1372353 about 11 hours
  f019806: 'active, China, Beijing', // 1372500 about 8 hours
  f020523: 'active, China, Suzhou, changjiang', // 1372357 about 6 hours
  f021716: 'active, New Zealand, Wellington', // 1372355 about 11 hours
  f022142: 'active, USA, Queens, Nelson SR2', // 1372397 about 21 hours
  f022308: 'active, China, Shenzhen', // 1372349 about 21 hours
  f024550: 'active, China, Wenzhou', // 1372305 about 21 hours
  f025007: 'active, Korea, Gyeonggi-do', // 1372403 about 8 hours
  f033549: 'active, China, Quzhou', // 1372361 about 11 hours
  f042567: 'active, China, Jinhua', // 1372309 about 21 hours
  f044160: 'active, China, Guangzhou, muxing', // 1372370 about 21 hours
  f047419: 'active, USA, Waukesha', // 1372365 about 11 hours
  f048135: 'active, China, Chongqing, password interstellar', // 1372374 about 21 hours
  f050022: 'active, China, Changsha', // 1372381 about 21 hours
  f057115: 'active, China, Nanyang', // 1372377 about 9 hours
  f057466: 'active, China, Guangzhou', // 1372378 about 21 hours
  f058374: 'active, USA', // 1372428 about 11 hours
  f062318: 'active, Korea, Naju', // 1372379 about 21 hours
  f063996: 'active, China, Sichuan', // 1372387 about 21 hours
  f066210: 'active, NR', // 1372787 about 7 hours
  f066568: 'active, Korea, Gwangju', // 1372431 about 21 hours
  f067642: 'active, Japan, Ota-ku', // 1372390 about 21 hours
  f071914: 'active, China, Beijing', // 1372392 about 21 hours
  f079817: "active, Russia, Ul'yanovka", // 1372394 about 21 hours
  f080480: 'active, Ukraine, Lviv', // 1372393 about 21 hours
  f081323: 'active, UK, Basildon', // 1372425 about 21 hours
  f083550: 'active, Korea, Hwaseong-si', // 1372421 about 21 hours

  // Active-sealing (active, with in-flight sealing)

  f01287: 'active-sealing, China, Jiaxing, MaiTian', // 1372301
  f08157: 'active-sealing, China, Beijing + Germany, Frankfurt, 超星际', // 1372297
  f09693: 'active-sealing, USA, Portland + Singapore, 6block-CapsuleMining', // 1372306
  f010241: 'active-sealing, China, Beijing + USA, Portland', // 1372300
  f010498: 'active-sealing, China, Shenzhen', // 1372302
  f020378: 'active-sealing, Bulgaria, Asenovgrad', // 1372316
  f032913: 'active-sealing, China, Shenzhen', // 1372315
  f039515: 'active-sealing, China, Chongqing', // 1372312

  // Sealing

  f01280: 'sealing, China, Wuxi, 了凡超算', // 1372485
  f02822: 'sealing, China, Chengdu', // 1372311
  f02824: 'sealing, China, Chengdu', // 1372471
  f03222: 'sealing, China, Yuncheong, 星云矿池', // 1372321
  f03482: 'sealing, China, Wuxi', // 1372318
  f04443: 'sealing, China, Shanghai, 罗良科技', // 1372326
  f08019: 'sealing, China, Yantai, 三合', // 1372320
  f010247: 'sealing, China, Yantai', // 1372335
  f010400: 'sealing, China, Shenyang', // 1372356
  f010446: 'sealing, Netherlands, Angelo', // 1372333
  f010479: 'sealing, France, Fontenay-sous-Bois, s0nik42', // 1372332
  f010493: 'sealing, China, Shanghai', // 1372329
  f010501: 'sealing, China, Hangzhou, Interstellar Roewe', // 1372346
  f010513: 'sealing, China, Chongqing', // 1372338
  f015747: 'sealing, Japan, Setagaya-ku', // 1372337
  f015897: 'sealing, China, Guangdong', // 1372343
  f016511: 'sealing, China, Beijing', // 1372401
  f016594: 'sealing, Germany', // 1372344
  f019029: 'sealing, Serbia, Boljevac', // 1372348
  f019362: 'sealing, China, Hangzhou, 青青子衿', // 1372352
  f019437: 'sealing, Korea, Guro-gu', // 1372639
  f022261: 'sealing, China, Luzhou', // 1372359
  f023009: 'sealing, USA, Berkeley, M32 Grenade Launcher', // 1372354
  f023179: 'sealing, China, Fuzhou', // 1372358
  f023198: 'sealing, NR', // 1372702
  f023581: 'sealing, China, Hong Kong', // 1372363
  f024156: 'sealing, USA', // 1372371
  f024182: 'sealing, NR', // 1372404
  f024944: 'sealing, Korea, Yeongdeungpo-dong', // 1372396
  f025025: 'sealing, China, Qingdao', // 1372351
  f032934: 'sealing, Korea, Incheon', // 1372406
  f034777: 'sealing, China, Chengdu', // 1372367
  f042391: 'sealing, China, Fuzhou', // 1372360
  f047978: 'sealing, Korea, Seoul', // 1372366
  f053088: 'sealing, China, Shanghai', // 1372435
  f054163: 'sealing, China, Dongguan', // 1372373
  f054414: 'sealing, NR', // 1372767
  f057368: 'sealing, Korea, Gyeonggi-do', // 1372384
  f057842: 'sealing, Korea, Gyeonggi-do', // 1372389
  f058168: 'sealing, Korea, Gyeonggi-do', // 1372380
  f061043: 'sealing, China, Changsha', // 1372430
  f062735: 'sealing, China, Hong Kong', // 1372845
  f062981: 'sealing, China, Sichuan', // 1372399
  f064668: 'sealing, China, Hong Kong', // 1372385
  f066566: 'sealing, Korea, Gwangju', // 1372415
  f066596: 'sealing, USA, San Diego', // 1372411
  f067314: 'sealing, China, Ningbo', // 1372386
  f067721: 'sealing, China, Beijing', // 1372424
  f071190: 'sealing, Korea, Gyeonggi-do', // 1372414
  f071279: 'sealing, Korea, Gyeonggi-do', // 1372410
  f073459: 'sealing, USA, Broken Arrow', // 1372434
  f078425: 'sealing, Korea, Bucheon-si', // 1372416
  f078522: 'sealing, NR', // 1372395
  f078741: 'sealing, China, Dongguan', // 1372391
  f081644: 'sealing, China, Wenzhou', // 1372436
  f081779: 'sealing, China, Hunan', // 1372437
  f082601: 'sealing, China, Guangdong', // 1372602
  f083065: 'sealing, China, Taizhou', // 1372423
  f083235: 'sealing, Serbia, Belgrade', // 1372420

  // Stuck

  f02665: 'stuck, Netherlands, Amsterdam, fm-ops', // FundsEnsured: about 22 hours
  f019814: 'stuck, Netherlands, Elst', // FundsEnsured: about 21 hours
  f052767: 'stuck, Korea, Seoul', // FundsEnsured: about 22 hours
  f053255: 'stuck, Korea, Seoul', // FundsEnsured: about 22 hours
  f059280: 'stuck, China, Shenzhen', // FundsEnsured: about 22 hours
  f063173: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 22 hours
  f064442: 'stuck, Japan', // FundsEnsured: about 22 hours
  f065732: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 22 hours
  f073048: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 22 hours
  f076954: 'stuck, China, Shenzhen', // CheckForAcceptance: about 22 hours

  // Busy

  f015734: 'busy, China, Qingdao', // cannot seal a sector before 267590

  // Min Size

  f01238: 'min-size, Vietnam, Hanoi, FILECOIN-VIETNAM', // 131072 < 104857600
  f01240: 'min-size, Netherlands, HidNand', // 131072 < 8388608
  f02419: 'min-size, China, Shanghai, yuantai', // 131072 < 268435456
  f02423: 'min-size, Ukraine, Kyiv, igowreck', // 131072 < 134217728
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 131072 < 1048576
  f02620: 'min-size, Poland, Krakow, @magik6k', // 131072 < 536870912
  f03224: 'min-size, Ukraine, Irpin, oboltusov', // 131072 < 134217728
  f03624: 'min-size, Germany, Chemnitz, ode', // 131072 < 20971520
  f05664: 'min-size, China, Shenzhen, 艾比特网络科技', // 131072 < 1048576
  f07819: 'min-size, China, Wuxi, YC--wuxi', // 131072 < 134217728
  f08403: 'min-size, UK, Lower Slaughter, TippyFlits', // 131072 < 134217728
  f09569: 'min-size, China, Beijing', // 131072 < 536870912
  f010617: 'min-size, Canada, Surrey, kernelogic2, @feiya200', // 131072 < 67108864
  f014394: 'min-size, China, Suzhou, IPFSCloud', // 131072 < 134217728
  f014395: 'min-size, China, Dongguan', // 131072 < 134217728
  f014409: 'min-size, USA, Waxhaw, Meatball Part III', // 131072 < 134217728
  f014569: 'min-size, NR', // 131072 < 1048576
  f015927: 'min-size, USA, East Islip, CDImine', // 131072 < 1048576
  f015941: 'min-size, Ukraine, Kyiv', // 131072 < 134217728
  f018501: 'min-size, China, Beijing', // 131072 < 134217728
  f019551: 'min-size, UK, Birmingham, @Neofix AF', // 131072 < 134217728
  f020385: 'min-size, Korea, Incheon', // 131072 < 1048576
  f020489: 'min-size, China, Lioaning', // 131072 < 33554432
  f020904: 'min-size, Korea, Uijeongbu-si, FILTop', // 131072 < 33554432
  f022130: 'min-size, Korea, Seodaemun-gu', // 131072 < 134217728
  f022163: 'min-size, dns:fil.akasha.network', // 131072 < 12582912
  f022352: 'min-size, Norway, Borgen, TechHedge, @Reiers', // 131072 < 8388608
  f022853: 'min-size, China, Fuzhou', // 131072 < 134217728
  f023467: 'min-size, Norway, Oslo, PhiMining.io', // 131072 < 4194304
  f024015: 'min-size, USA, Portland, FILmiPool-JP01', // 131072 < 134217728
  f024184: 'min-size, Korea, Gangnam-gu, we4u-GREEN', // 131072 < 1073741824
  f024511: 'min-size, China, Shenzhen', // 131072 < 134217728
  f025017: 'min-size, China, Hefei, 一三科技-913', // 131072 < 134217728
  f030335: 'min-size, China, Fujian', // 131072 < 134217728
  f033356: 'min-size, Korea, Gangnum-gu, we4u-YELLOW', // 131072 < 1073741824
  f034701: 'min-size, China, Shenzhen', // 131072 < 134217728
  f039235: 'min-size, NR', // 131072 < 1048576
  f039873: 'min-size, China, Fuzhou', // 131072 < 2097152
  f047858: 'min-size, China, Wuhan', // 131072 < 134217728
  f048172: 'min-size, China, Suzhou', // 131072 < 134217728
  f048192: 'min-size, China, Suzhou', // 131072 < 134217728
  f049882: 'min-size, Netherlands, De Rijp', // 131072 < 8388608
  f054677: 'min-size, Finland, Helsinki', // 131072 < 33554432
  f058000: 'min-size, China, Suzhou', // 131072 < 1048576
  f064222: 'min-size, China, Fuzhou', // 131072 < 2097152
  f065141: 'min-size, China, Fuzhou', // 131072 < 134217728
  f079425: 'min-size, NR', // 131072 < 134217728

  // Min Ask

  f01241: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f01276: 'min-ask, Canada, Brampton, NBFS Canada', // 20000000 < 61035156
  f01277: 'min-ask, Sweden, Stockholm, tvsthlm', // 20000000 < 122070312500000
  f01291: 'min-ask, Sweden, Stockholm, tvsthlm', // 20000000 < 12207031250000
  f02301: 'min-ask, USA', // 20000000 < 610351562500000
  f02381: 'min-ask, China, Dongguan, 西野七濑迷叔', // 20000000 < 6103515625000
  f02387: 'min-ask, Canada, Brampton, NBFS Canada', // 20000000 < 61035156
  f02388: 'min-ask, Netherlands, Amersfoort, Kroketje', // 20000000 < 610351562
  f02401: 'min-ask, Canada, Chambly, NBFS Canada', // 20000000 < 61035156
  f02405: 'min-ask, China, Shenzhen', // 20000000 < 12207031250000000
  f02415: 'min-ask, China, Hong Kong', // 20000000 < 122070312500000
  f02500: 'min-ask, Korea, Seongnam-si', // 20000000 < 1220703125000
  f02501: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f02514: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f02520: 'min-ask, China, Hong Kong + Dongguan', // 20000000 < 61035156250000000000000
  f02606: 'min-ask, China, Shanghai', // 20000000 < 122070312500
  f02619: 'min-ask, China, Beijing, Blockcasting', // 20000000 < 122070312500000
  f02622: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f02623: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f02633: 'min-ask, China, Hong Kong', // 20000000 < 122070312500000
  f02645: 'min-ask, China, Hong Kong', // 20000000 < 122070312500000
  f03273: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f03274: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f03275: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f03328: 'min-ask, China, Xinxiang, Golden Miner', // 20000000 < 122070312500000000000000000
  f03488: 'min-ask, Korea, Geumcheon-gu, we4u', // 20000000 < 36621093
  f03491: 'min-ask, China, Hong Kong', // 20000000 < 122070312500000
  f05315: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f05316: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f05317: 'min-ask, USA, Portland', // 20000000 < 122070312500000
  f07850: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f07919: 'min-ask, China, Beijing, Shanghai, Hunan', // 20000000 < 122070312500000
  f07990: 'min-ask, China, Hong Kong', // 20000000 < 122070312500000
  f07998: 'min-ask, China, Hangzhou', // 20000000 < 1220703125
  f08025: 'min-ask, China, Hong Kong', // 20000000 < 122070312500000
  f08257: 'min-ask, China, Ningbo + USA, Boardman', // 20000000 < 12207031250
  f08383: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f09696: 'min-ask, USA, Portland + Singapore', // 20000000 < 122070312500000
  f09848: 'min-ask, USA, Irvine, BigBearLake', // 20000000 < 122070312
  f010010: 'min-ask, China, Changzhou + Hong Kong', // 20000000 < 12207031250000000000000000
  f010253: 'min-ask, China, Beijing + USA, Portland', // 20000000 < 122070312500000
  f010254: 'min-ask, Japan, Minamata', // 20000000 < 122070312500000
  f014365: 'min-ask, Australia, Marrickville + Japan, Heiwajima', // 20000000 < 120849609375000
  f018780: 'min-ask, Singapore + Germany, Frankfurt + USA', // 20000000 < 122070312500000
  f018781: 'min-ask, Singapore + Germany, Frankfurt + USA', // 20000000 < 122070312500000
  f018782: 'min-ask, Singapore + Germany, Frankfurt + USA', // 20000000 < 122070312500000
  f018783: 'min-ask, Singapore + Germany, Frankfurt + USA', // 20000000 < 122070312500000
  f018784: 'min-ask, Singapore + Germany, Frankfurt + USA', // 20000000 < 122070312500000
  f018785: 'min-ask, Singapore + Germany, Frankfurt + USA', // 20000000 < 122070312500000
  f019100: 'min-ask, Romania, Cluj-Napoca, noisyfan', // 20000000 < 122070312
  f019104: 'min-ask, Canada, Chambly, NBFS DEV', // 20000000 < 48828125
  f020398: 'min-ask, China, Zhangjiakou', // 20000000 < 1220703125000
  f020541: 'min-ask, China, Shanghai', // 20000000 < 61035156250
  f020747: 'min-ask, China, Xiamen', // 20000000 < 122070312
  f021265: 'min-ask, China, Wuhan', // 20000000 < 9765625000000000
  f023001: 'min-ask, China, Changsha', // 20000000 < 122070312
  f023495: 'min-ask, China, Beijing + USA, Portland', // 20000000 < 122070312500000
  f023565: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f023660: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f023825: 'min-ask, USA, Portland', // 20000000 < 122070312500000
  f023843: 'min-ask, China, Zhangjiakou', // 20000000 < 122070312500000
  f023853: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f023854: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f023855: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f023858: 'min-ask, China, Fuzhou', // 20000000 < 122070312377929687500000
  f023859: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f023861: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f023868: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f023869: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f023870: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f023871: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f023928: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f023977: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f023978: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f023980: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f023981: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024006: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024007: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f024008: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024012: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024013: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024014: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024016: 'min-ask, USA, Portland', // 20000000 < 122070312500000
  f024081: 'min-ask, undefined', // 20000000 < 12206909179687500000
  f024084: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024085: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024136: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024146: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024147: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024148: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024972: 'min-ask, undefined', // 20000000 < 122070312500000
  f029344: 'min-ask, Korea, Seongnam-si', // 20000000 < 1220703125000
  f029401: 'min-ask, USA, Portland + New Castle', // 20000000 < 122070312500000
  f029404: 'min-ask, USA, Portland + New Castle', // 20000000 < 122070312500000
  f030203: 'min-ask, undefined', // 20000000 < 12207031250000000
  f030384: 'min-ask, undefined', // 20000000 < 12207031250000
  f033123: 'min-ask, USA, Portland + New Castle', // 20000000 < 122070312500000
  f033511: 'min-ask, China, Dongguan', // 20000000 < 1220703125
  f034047: 'min-ask, China, Hangzhou', // 20000000 < 6103515625000
  f034581: 'min-ask, NR', // 20000000 < 12207031250000000
  f034592: 'min-ask, NR', // 20000000 < 12207031250000000
  f039800: 'min-ask, China, Chengdu', // 20000000 < 122070312500000
  f042540: 'min-ask, China, Beijing + USA, Portland + Newcastle', // 20000000 < 122070312500000
  f042558: 'min-ask, China, Beijing + USA, Portland + Newcastle', // 20000000 < 122070312500000
  f042635: 'min-ask, China, Beijing + USA, Portland + Newcastle', // 20000000 < 122070312500000
  f050260: 'min-ask, China, Suzhou', // 20000000 < 12207031250000000000000000
  f052447: 'min-ask, China, Beijing + USA, Portland + New Castle', // 20000000 < 122070312500000
  f054370: 'min-ask, China, Dongguan', // 20000000 < 12207031250
  f056611: 'min-ask, USA, Portland + New Castle', // 20000000 < 122070312500000
  f057614: 'min-ask, USA, Portland + New Castle', // 20000000 < 122070312500000
  f057698: 'min-ask, NR', // 20000000 < 122070312500000
  f061407: 'min-ask, China, Shenzhen', // 20000000 < 12207031250
  f061740: 'min-ask, USA, Portland + New Castle', // 20000000 < 122070312500000
  f062260: 'min-ask, China, Guangzhou', // 20000000 < 61035156250000
  f062334: 'min-ask, USA, Portland + New Castle', // 20000000 < 122070312500000
  f062353: 'min-ask, Germany, Frankfurt', // 20000000 < 610351562500
  f062770: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f062811: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f062982: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f066845: 'min-ask, China, Dongguan', // 20000000 < 1220581054687500000
  f069915: 'min-ask, NR', // 20000000 < 122070312500000
  f069919: 'min-ask, NR', // 20000000 < 122070312500000
  f070999: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f071980: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f073552: 'min-ask, NR', // 20000000 < 122070312500000
  f073697: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f074738: 'min-ask, Korea, Seongbuk-gu', // 20000000 < 1220703125000
  f078770: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f078772: 'min-ask, NR', // 20000000 < 122070312500000
  f079197: 'min-ask, NR', // 20000000 < 122070312500000
  f082452: 'min-ask, China, Dongguan', // 20000000 < 1220581054687500000
  f082669: 'min-ask, USA, Daytona Beach', // 20000000 < 122070312500000
  f083625: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000

  // Error

  f01782: 'error, China, Hong Kong + Singapore + USA, Portland, hellofil.com', // stream reset
  f01800: 'error, China, Shenzhen + Chengdu', // deal failed: (State=26) error calling node: ensuring funds: RPC error (-32601): method 'Filecoin.MarketEnsureAvailable' not found
  f02490: 'error, China, Fujian', // error in deal activation: handling applied event: deal 1372327 not found
  f02668: 'error, China, Chengdu', // deal failed: (State=26) error calling node: ensuring funds: RPC error (-32601): method 'Filecoin.MarketEnsureAvailable' not found
  f02723: 'error, China, Hong Kong', // stream reset
  f02838: 'error, China, Chengdu, IPFS Harbor-星际港湾', // stream reset
  f02856: 'error, China, Chengdu', // error in deal activation: handling applied event: deal 1372323 not found
  f03134: 'error, China, Cangzhou, 乔木信息', // error in deal activation: handling applied event: deal 1372322 not found
  f03339: 'error, China, Luzhou, benxun', // error in deal activation: handling applied event: deal 1372299 not found
  f03345: 'error, China, Fuzhou, chh', // error in deal activation: handling applied event: deal 1372317 not found
  f03364: 'error, China, Guangzhou', // error in deal activation: handling applied event: deal 1372324 not found
  f08482: 'error, USA, Athol, @why', // EOF
  f08532: 'error, USA', // stream reset
  f09002: 'error, Singapore', // stream reset
  f09689: 'error, USA, Portland', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f010528: 'error, China, Chongqing, Interstellar Roewe', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f015771: 'error, Brazil, Sao Paulo', // stream reset
  f016276: 'error, China, Beijing', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f017242: 'error, China, Guangdong', // error in deal activation: handling applied event: deal 1372340 not found
  f017665: 'error, China, Shenyang', // error in deal activation: handling applied event: deal 1372342 not found
  f020223: 'error, China, Guiyang', // stream reset
  f020436: 'error, China, Beijing', // error in deal activation: failed to set up called handler: called check error (h: 261937): failed to look up deal on chain: deal 1372304 not found
  f020605: 'error, China, Yibin', // stream reset
  f020928: 'error, China, Deyang + Singapore', // deal failed: (State=26) error calling node: ensuring funds: RPC error (-32601): method 'Filecoin.MarketEnsureAvailable' not found
  f021535: 'error, China, Chengdu', // stream reset
  f022309: 'error, Korea, Chuncheon', // stream reset
  f022522: 'error, China, Dongguan', // error in deal activation: handling applied event: deal 1372369 not found
  f022820: 'error, China, Guangdong', // stream reset
  f023649: 'error, Korea, Seoul, LS&NIHON', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023662: 'error, China, Fuzhou', // stream reset
  f023876: 'error, China, Fuzhou', // stream reset
  f024101: 'error, China, Guiyang', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999968747626 FIL, balance: 0.011575319966118626 FIL): not enough funds to execute transaction
  f030125: 'error, China, Nantong', // error in deal activation: failed to set up called handler: called check error (h: 261981): failed to look up deal on chain: deal 1372452 not found
  f030327: 'error, China, Beijing', // stream reset
  f033113: 'error, China, Wuxi', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999991382064 FIL, balance: 0.041328497929769709 FIL): not enough funds to execute transaction
  f035436: 'error, China, Jiangsu', // error in deal activation: handling applied event: deal 1372364 not found
  f040218: 'error, China, Wuxi', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999980961888 FIL, balance: 0.045551182948543631 FIL): not enough funds to execute transaction
  f040691: 'error, NR', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f046043: 'error, China, Shanghai', // stream reset
  f046073: 'error, China, Shanghai', // stream reset
  f046074: 'error, China, Shanghai', // stream reset
  f048975: 'error, NR', // error in deal activation: failed to set up called handler: called check error (h: 261981): failed to look up deal on chain: deal 1372444 not found
  f053916: 'error, USA, Concord', // stream reset
  f055040: 'error, China, Fujian', // deal failed: (State=26) error calling node: publishing deal: GasEstimateMessageGas error: estimating gas used: message execution failed: exit SysErrSenderStateInvalid(2), reason: actor balance less than needed: 0.000000510676931493 FIL < 0.00000101 FIL (RetCode=2)
  f055102: 'error, NR', // error in deal activation: handling applied event: deal 1372375 not found
  f055132: 'error, NR', // error in deal activation: handling applied event: deal 1372376 not found
  f056226: 'error, NR', // error in deal activation: handling applied event: deal 1372409 not found
  f056573: 'error, China, Sichuan', // error in deal activation: handling applied event: deal 1372408 not found
  f057070: 'error, NR', // stream reset
  f057560: 'error, NR', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999997438475 FIL, balance: 0.000002267261822971 FIL): not enough funds to execute transaction
  f060072: 'error, China, Chongqing', // error in deal activation: handling applied event: deal 1372382 not found
  f061158: 'error, China, Guangdong', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f062204: 'error, China, Hong Kong', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999967222032 FIL, balance: 0.00077343991410892 FIL): not enough funds to execute transaction
  f062375: 'error, Korea, Gyeonggi-do', // EOF
  f062518: 'error, Korea, Gwangju', // error in deal activation: failed to set up called handler: called check error (h: 261998): failed to look up deal on chain: deal 1372456 not found
  f063921: 'error, China, Ili', // stream reset
  f064218: 'error, USA, Kirkland', // error in deal activation: handling applied event: deal 1372383 not found
  f064716: 'error, Japan, Toyota', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.04999999999664278 FIL, balance: 0.000458261140825596 FIL): not enough funds to execute transaction
  f065200: 'error, China, Yibin', // error in deal activation: handling applied event: deal 1372418 not found
  f065280: 'error, Korea, Songpa-gu', // error in deal activation: handling applied event: deal 1372413 not found
  f066104: 'error, China, Xingjiang + USA, Portland', // error in deal activation: handling applied event: deal 1372314 not found
  f067083: 'error, Russia, Moscow', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f067170: 'error, China, Jiangmen', // error in deal activation: handling applied event: deal 1372417 not found
  f067195: 'error, China, Huizhou', // error in deal activation: failed to set up called handler: called check error (h: 261981): failed to look up deal on chain: deal 1372447 not found
  f068096: 'error, China, Sichuan', // error in deal activation: handling applied event: deal 1372388 not found
  f068890: 'error, China, Fuzhou', // stream reset
  f070288: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f070475: 'error, China, Guyuan', // stream reset
  f073535: 'error, Korea, Gyeonggi-do', // deal failed: (State=26) error calling node: ensuring funds: mpool push: failed to push message: not enough funds (required: 0.03496387576089842 FIL, balance: 0.021311207309585118 FIL): not enough funds to execute transaction
  f073543: 'error, Korea, Gyeonggi-do', // deal failed: (State=26) error calling node: ensuring funds: mpool push: failed to push message: not enough funds (required: 0.035372667514813244 FIL, balance: 0.027583137217860364 FIL): not enough funds to execute transaction
  f079092: 'error, NR', // error in deal activation: handling applied event: deal 1372427 not found
  f079334: 'error, Korea, Gyeonggi-do', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999955969476 FIL, balance: 0.048703194212926029 FIL): not enough funds to execute transaction
  f079618: 'error, China, Beijing', // stream reset
  f079847: 'error, China, Hong Kong', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.06056260210582272 FIL, balance: 0.031138008779467896 FIL): not enough funds to execute transaction
  f080103: 'error, Korea, Seongnam-si', // error in deal activation: handling applied event: deal 1372426 not found
  f080444: 'error, China, Chengdu', // deal failed: (State=26) error calling node: ensuring funds: RPC error (-32601): method 'Filecoin.MarketEnsureAvailable' not found
  f081066: 'error, USA', // error in deal activation: failed to set up called handler: called check error (h: 261981): failed to look up deal on chain: deal 1372453 not found
  f082250: 'error, China, Guilin', // deal failed: (State=26) deal data verification failed: error generating CommP: failed to build treeCaused by:    0: failed to create data store    1: No such file or directory (os error 2)
  f082356: 'error, China, Jiaxing', // error in deal activation: handling applied event: deal 1372419 not found
  f082483: 'error, Korea, Gyeonggi-do', // failed to initiate data transfer: deal data transfer failed: response rejected

  // Dial backoff

  f01275: 'backoff, Korea, Seongnam-si',
  f03194: 'backoff, China, Shenzhen, 成都云存&Npool',
  f03766: 'backoff, China, Weifang',
  f07826: 'backoff, China, Shenzhen, 星际医生',
  f07829: 'backoff, Japan',
  f09631: 'backoff, China, Changzhou',
  f09721: 'backoff, ???, CD-oursoft-1',
  f09729: 'backoff, China, Dongguan',
  f010593: 'backoff, USA, East Islip',
  f014786: 'backoff, China, Xiamen',
  f015655: 'backoff, Korea, Geumcheon-gu',
  f015714: 'backoff, China, Ordos',
  f016509: 'backoff, China, Fuzhou',
  f018464: 'backoff, Sweden, Stockholm',
  f021695: 'backoff, USA',
  f022512: 'backoff, Canada, Embrun',
  f023016: 'backoff, NR',
  f024893: 'backoff, Korea, Gyeonggi-do',
  f029524: 'backoff, China, Hong Kong',
  f055123: 'backoff, Korea, Busan',
  f056406: 'backoff, NR',
  f060805: 'backoff, NR',

  // Rejected

  f01152: 'rejected, China, Beijing',
  f01154: 'rejected, Sweden, Alvsjo', // no online
  f01155: 'rejected, China, Shanghai, DianCun Tech',
  f01248: 'rejected, Germany, Frankfurt + China, Guangdong', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f01289: 'rejected, China, Hangzhou + USA', // no online
  f02299: 'rejected, China, Dongguan, Yolo', // no online
  f02399: 'rejected, China, Zhejiang', // no online
  f02420: 'rejected, China, Wuhan', // no online
  f02421: 'rejected, China, Deyang + Singapore, 腾盛科技', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02503: 'rejected, China, Wuhan', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02528: 'rejected, China, Hong Kong + Inner Mongolia', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02529: 'rejected, China, Chongqing',
  f02540: 'rejected, USA, Rochester, @there', // no online
  f02609: 'rejected, USA',
  f02613: 'rejected, China, Chongqing',
  f02625: 'rejected, China, Shanghai, IPFS星际工厂', // no online
  f02627: 'rejected, China, Guilin',
  f02666: 'rejected, China, Chengdu', // no online
  f03002: 'rejected, China, Chongqing',
  f03143: 'rejected, China, Shijiazhuang + Hong Kong', // no online
  f03223: 'rejected, USA',
  f03249: 'rejected, NR', // no online
  f03269: 'rejected, Australia', // getting client market balance failed
  f03302: 'rejected, China, Chengdu', // no online
  f03325: 'rejected, Germany, Frankfurt', // sh: 1: jq: not found
  f03326: 'rejected, USA, Seattle', // getting client market balance failed
  f03344: 'rejected, China, Guangzhou', // no online
  f03347: 'rejected, China, Shenzhen', // no online
  f03362: 'rejected, Germany, Berlin',
  f03519: 'rejected, USA', // getting client market balance failed
  f07945: 'rejected, China, Dongguan', // no online
  f08197: 'rejected, China, Foshan',
  f08242: 'rejected, China, Weifang',
  f08264: 'rejected, China, Xianning', // no online
  f08371: 'rejected, China, Chengdu', // no online
  f08572: 'rejected, Brazil, Sao Paulo', // getting client market balance failed
  f09620: 'rejected, China, Weifang',
  f09642: 'rejected, Sweden, Alvsjo', // no online
  f09710: 'rejected, China, Jieyang',
  f09737: 'rejected, USA, Sudbury',
  f09964: 'rejected, China, Beijing + Jiaxing',
  f010035: 'rejected, Netherlands',
  f010038: 'rejected, China, Hangzhou + Singapore',
  f010088: 'rejected, DNS:purumine.com', // no online
  f010202: 'rejected, Singapore',
  f010399: 'rejected, China, Guangzhou',
  f010405: 'rejected, China, Foshan',
  f010507: 'rejected, China, Hangzhou, ciger',
  f010616: 'rejected, China, Ordos + Singapore',
  f014233: 'rejected, China, Shanghai', // no online
  f014251: 'rejected, Singapore',
  f014302: 'rejected, China, Ningbo',
  f014327: 'rejected, China, Ningbo',
  f014472: 'rejected, China, Ningbo',
  f014686: 'rejected, Singapore',
  f014699: 'rejected, USA',
  f014706: 'rejected, China, Ordos',
  f014803: 'rejected, China, Beijing', // no online
  f014805: 'rejected, China, Ningbo',
  f015782: 'rejected, Australia', // getting client market balance failed
  f015942: 'rejected, China, Ningbo',
  f016398: 'rejected, Singapore',
  f016563: 'rejected, China, Deyang', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f017229: 'rejected, USA, Portland',
  f019099: 'rejected, China, Hong Kong', // no online
  f019229: 'rejected, USA, Queens', // getting client market balance failed
  f019279: 'rejected, Canada, Calgary',
  f019354: 'rejected, Germany, Frankfurt', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f019422: 'rejected, South Africa, Johannesburg', // no online
  f020618: 'rejected, Singapore', // getting client market balance failed
  f021075: 'rejected, China, Chengdu', // sh: 1: dealfilter.pl: not found
  f021255: 'rejected, China, Suzhou + Netherlands',
  f021339: 'rejected, China, Jiaxing', // no online
  f021444: 'rejected, China, Guangzhou', // no online
  f021479: 'rejected, China, Qingdao',
  f021532: 'rejected, China, Shanghai', // no online
  f021583: 'rejected, China, Jiaxing', // no online
  f021714: 'rejected, China, Hong Kong',
  f021961: 'rejected, NR', // getting client market balance failed
  f022072: 'rejected, China, Jieyang',
  f022125: 'rejected, China, Shenzhen', // no online
  f022289: 'rejected, China, Mianyang',
  f022566: 'rejected, China, Nanchong',
  f022748: 'rejected, China, Xinyang', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f022832: 'rejected, China',
  f022922: 'rejected, China, Shenzhen, CAAP-MEG', // no online
  f022969: 'rejected, China, Chengdu', // no online
  f023013: 'rejected, China, Hong Kong', // no online
  f023152: 'rejected, China, Quanzhou', // libhugetlbfs: WARNING: New heap segment map at 0x55d326000000 failed: Cannot allocate memoryfalse
  f023205: 'rejected, NR',
  f023462: 'rejected, China, Chengdu',
  f023530: 'rejected, China, Shanghai',
  f023534: 'rejected, China, Chongqing',
  f023561: 'rejected, China, Shenzhen',
  f023678: 'rejected, China, Jiaxing', // no online
  f023971: 'rejected, USA, @Brian Y', // no online
  f023982: 'rejected, China, Chongqing',
  f023983: 'rejected, China, Chongqing',
  f023985: 'rejected, China, Chongqing',
  f024066: 'rejected, NR',
  f024468: 'rejected, China, Shenzhen', // no online
  f025019: 'rejected, China, Taiwan, Hsinchu', // no online
  f029490: 'rejected, NR',
  f032888: 'rejected, China, Weifang',
  f033501: 'rejected, China, Shenzhen',
  f033517: 'rejected, China, Changsha', // no online
  f034258: 'rejected, China, Mianyang',
  f034350: 'rejected, China, Zhengshou', // sh: 1: /usr/local/bin/dealfilter.pl: not found
  f034567: 'rejected, China, Shenzhen',
  f040332: 'rejected, China, Shenzhen', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f042896: 'rejected, NR', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f042901: 'rejected, Germany', // deal start epoch is too far in the future: 267861 > 193137
  f044405: 'rejected, China, Suzhou', // deal start epoch is too far in the future: 267861 > 261821
  f046248: 'rejected, China, Dongguan',
  f047843: 'rejected, China, Xiamen', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f047857: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f047868: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f052701: 'rejected, NR',
  f053140: 'rejected, NR',
  f053141: 'rejected, NR',
  f054499: 'rejected, NR',
  f057127: 'rejected, China, Suzhou', // no online
  f059788: 'rejected, China, Beijing', // sh: 1: /lotus/data/dealfilter.pl: Permission denied
  f060114: 'rejected, China, Shenzhen',
  f060634: 'rejected, China, Shenzhen + USA', // no online
  f060975: 'rejected, NR', // sh: /root/.lotusminer/dealfilter.pl: No such file or directory
  f066270: 'rejected, China, Dongguan', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f068528: 'rejected, China, Shanghai', // no online
  f068560: 'rejected, China, Changsha', // syntax error at /filecoin/lotusminer/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /filecoin/lotusminer/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /filecoin/lotusminer/dealfilter.pl line 16.
  f068898: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f071624: 'rejected, USA, Petoskey', // no online
  f071664: 'rejected, China, Shandong', // libhugetlbfs: WARNING: New heap segment map at 0x55e8a7a00000 failed: Cannot allocate memoryfalse
  f073196: 'rejected, NR',
  f081222: 'rejected, China, Changzhou', // sh: 1: jq: not found
  f082543: 'rejected, Korea, Osan', // sh: 1: /absolute/path/to/storage_filter_program: Permission denied

  // Dial errors

  f01012: 'dial, China, Hong Kong + Guangzhou', // * [/ip4/127.0.0.1/tcp/8888] dial tcp4 127.0.0.1:8888: connect: connection refused  * [/ip4/43.230.90.191/tcp/8888] dial tcp4 43.230.90.191:8888: connect: connection refused  * [/ip4/183.60.252.190/tcp/8888] dial tcp4 183.60.252.190:8888: connect: connection refused
  f01100: 'dial, Serbia, Belgrade, filmine.io', // * [/ip4/93.86.63.113/tcp/12345] dial tcp4 93.86.63.113:12345: connect: connection refused
  f01151: 'dial, USA, Waxhaw', // * [/ip4/71.75.239.182/tcp/41372] dial tcp4 0.0.0.0:38013->71.75.239.182:41372: i/o timeout
  f01229: 'dial, China, Hong Kong', // * [/ip4/43.231.187.27/tcp/1374] dial tcp4 0.0.0.0:38013->43.231.187.27:1374: i/o timeout
  f01234: 'dial, Belgium, De Klinge, Eliovp', // * [/ip4/78.21.127.17/tcp/24002] dial tcp4 78.21.127.17:24002: connect: connection refused
  f01235: 'dial, Singapore, IPFSMain', // * [/ip4/170.33.12.95/tcp/16668] dial tcp4 0.0.0.0:38013->170.33.12.95:16668: i/o timeout
  f01236: 'dial, Singapore', // * [/ip4/170.33.12.95/tcp/16666] dial tcp4 0.0.0.0:38013->170.33.12.95:16666: i/o timeout
  f01243: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64001] dial tcp4 178.212.192.216:64001: connect: connection refused
  f01272: 'dial, Singapore', // * [/ip4/61.147.117.6/tcp/33608] dial tcp4 61.147.117.6:33608: connect: connection refused
  f01279: 'dial, China, Sichuan', // * [/ip4/118.116.2.66/tcp/40000] dial tcp4 0.0.0.0:38013->118.116.2.66:40000: i/o timeout
  f01288: 'dial, China, Yibin, BlackStone', // * [/ip4/101.206.243.3/tcp/39695] dial tcp4 101.206.243.3:39695: connect: connection refused
  f01475: 'dial, China, Wuhan + Germany', // * [/ip4/170.33.12.186/tcp/17031] dial tcp4 0.0.0.0:38013->170.33.12.186:17031: i/o timeout
  f01801: 'dial, Switzerland, Baar, Gogoșel, DNS:akasha.network', // * [/ip4/46.101.187.50/tcp/10222] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHMxq8H6gBb1nxH6YknwX1ZsisFBTgtKJJTWfruBKNKA8, but remote key matches 12D3KooWDXMs6HMEdL7ein6hBWJHv42g7VMGWwUEgH8gYZ8kELYT
  f02303: 'dial, China, Hong Kong + Jiangsu + Netherlands', // * [/ip4/8.209.76.63/tcp/48921] dial tcp4 0.0.0.0:38013->8.209.76.63:48921: i/o timeout
  f02305: 'dial, China, Dongguan', // * [/ip4/61.145.212.162/tcp/20020] dial tcp4 0.0.0.0:38013->61.145.212.162:20020: i/o timeout
  f02307: 'dial, China, Taiyuan, filecoin.monster', // * [/ip4/34.92.71.77/tcp/12345] dial tcp4 0.0.0.0:38013->34.92.71.77:12345: i/o timeout
  f02383: 'dial, China, Shenzhen', // * [/ip4/183.60.90.5/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKzBf1z9Tm6rW1RUXfmPVooKYxan8NzjRmYq9iF8QZsJu, but remote key matches 12D3KooWSD4BWsHzUgnMnDEAMrLpyQAPFQsyHp9KR5a9A2P1hFbc
  f02386: 'dial, Latvia, Riga', // * [/ip4/91.105.126.144/tcp/10240] dial tcp4 91.105.126.144:10240: i/o timeout
  f02400: 'dial, China, Beijing', // * [/ip4/36.112.26.4/tcp/47996] dial tcp4 36.112.26.4:47996: connect: connection refused
  f02403: 'dial, UK, London, AIM', // * [/ip4/2.58.47.71/tcp/18888] dial tcp4 0.0.0.0:38013->2.58.47.71:18888: i/o timeout  * [/ip4/2.58.45.33/tcp/18888] dial tcp4 0.0.0.0:38013->2.58.45.33:18888: i/o timeout  * [/ip4/192.168.200.11/tcp/18888] dial tcp4 0.0.0.0:38013->192.168.200.11:18888: i/o timeout
  f02414: "dial, China, Xi'an, zhejiangyunchu", // * [/ip4/113.142.1.86/tcp/56768] dial tcp4 113.142.1.86:56768: connect: connection refused
  f02417: 'dial, China, Liaoning', // * [/ip4/116.132.221.10/tcp/10240] dial tcp4 116.132.221.10:10240: connect: connection refused
  f02418: 'dial, China, Fujian + Netherlands', // * [/ip4/117.48.133.69/tcp/1348] dial tcp4 0.0.0.0:38013->117.48.133.69:1348: i/o timeout  * [/ip4/185.232.59.180/tcp/1348] dial tcp4 0.0.0.0:38013->185.232.59.180:1348: i/o timeout
  f02422: "dial, China, Xi'an", // * [/ip4/117.38.4.82/tcp/22347] dial tcp4 117.38.4.82:22347: connect: connection refused
  f02425: 'dial, USA', // * [/ip4/103.78.229.73/tcp/14567] dial tcp4 0.0.0.0:38013->103.78.229.73:14567: i/o timeout
  f02438: 'dial, Singapore', // * [/ip4/47.115.134.75/tcp/14567] dial tcp4 47.115.134.75:14567: connect: connection refused
  f02492: 'dial, China, Shenzhen', // * [/ip4/103.142.248.7/tcp/3347] dial tcp4 0.0.0.0:38013->103.142.248.7:3347: i/o timeout
  f02505: 'dial, China, Wuhan', // * [/ip4/101.32.33.237/tcp/18899] dial tcp4 101.32.33.237:18899: connect: connection refused
  f02516: 'dial, China, Hong Kong', // * [/ip4/119.28.87.115/tcp/2301] dial tcp4 0.0.0.0:38013->119.28.87.115:2301: i/o timeout
  f02519: 'dial, Brazil, Sao Paulo', // * [/ip4/52.67.40.200/tcp/10240] dial tcp4 0.0.0.0:38013->52.67.40.200:10240: i/o timeout
  f02532: 'dial, Singapore', // * [/ip4/170.33.12.117/tcp/8007] dial tcp4 0.0.0.0:38013->170.33.12.117:8007: i/o timeout
  f02533: 'dial, Spain, Terrassa, LowFeeValidation.com', // * [/ip4/2.139.172.201/tcp/8011] dial tcp4 0.0.0.0:38013->2.139.172.201:8011: i/o timeout
  f02534: 'dial, China, Beijing', // * [/ip4/123.58.99.210/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQEAUZycQ6zXsGtQd74vzTkCfPD8rQzWFnbUvK6Qenarc, but remote key matches 12D3KooWCYNTXskYDLQM7rRydZDGAfLiCPfneN1NjmnCBXpMBW49
  f02574: 'dial, Japan, Minamata', // * [/ip4/203.189.40.203/tcp/10250] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBwU2u6WYSki2PoGRoTktqditP5aFJiFMZMV98cLHn96m, but remote key matches 12D3KooWKAEN1NS8msS2LBg2c6cLMBFP4BnZLdsHMCz5z85a8fhT
  f02577: 'dial, China, Hong Kong + Russia, Khabarovsk + Japan, Heiwajima', // * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: connection refused  * [/ip4/43.243.100.31/tcp/6777] dial tcp4 0.0.0.0:38013->43.243.100.31:6777: i/o timeout  * [/ip4/66.42.38.110/tcp/9997] dial tcp4 0.0.0.0:38013->66.42.38.110:9997: i/o timeout
  f02607: 'dial, China, Beijing', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f02610: 'dial, Netherlands', // * [/ip4/213.227.129.197/tcp/14567] dial tcp4 0.0.0.0:38013->213.227.129.197:14567: i/o timeout
  f02614: 'dial, Singapore', // * [/ip4/170.33.9.50/tcp/32633] dial tcp4 0.0.0.0:38013->170.33.9.50:32633: i/o timeout
  f02621: "dial, China, Xi'an", // * [/ip4/113.200.194.196/tcp/32633] dial tcp4 0.0.0.0:38013->113.200.194.196:32633: i/o timeout
  f02624: 'dial, China, Shanghai, filecoin.cn', // * [/ip4/61.173.81.255/tcp/65501] dial tcp4 61.173.81.255:65501: connect: connection refused
  f02626: 'dial, China, Guangzhou + Hong Kong', // * [/ip4/8.209.115.161/tcp/58237] dial tcp4 0.0.0.0:38013->8.209.115.161:58237: i/o timeout
  f02632: 'dial, China, Tianjin', // * [/ip4/150.129.138.199/tcp/8518] dial tcp4 150.129.138.199:8518: connect: connection refused
  f02654: 'dial, China, Shanghai', // * [/ip4/114.88.222.181/tcp/43355] dial tcp4 0.0.0.0:38013->114.88.222.181:43355: i/o timeout  * [/ip4/114.88.222.181/tcp/35595] dial tcp4 0.0.0.0:38013->114.88.222.181:35595: i/o timeout
  f02657: 'dial, China, Ordos-xfr', // * [/ip4/1.183.72.226/tcp/12308] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLTNxtSBmMCy7VNXNSE8tZVPURHB2onSRTpJqkjWGEitm, but remote key matches 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg
  f02658: 'dial, China, Ningbo, bluematrix', // * [/ip4/123.137.128.188/tcp/3698] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRxbE66sHsxoSSE6uLybmNqXWFPKBdk6QC7KPoSZFx8Xy, but remote key matches 12D3KooWRVsiRe1qEUbpA1YeWoeMRBj3T4EBz1cxSWF6hfV8tELv  * [/ip4/112.15.188.130/tcp/3698] dial tcp4 0.0.0.0:38013->112.15.188.130:3698: i/o timeout
  f02664: 'dial, China, Hangzhou, ciger', // * [/ip4/111.0.120.74/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLfsqniYPeGBvMZN7StQzhgzTG9TB6M2gTNsvs5eDiTQM, but remote key matches 12D3KooWQb1CpdSujwXeyMJroR8qAkekXiZdNXVPKqis5ENXZGVw
  f02721: 'dial, USA', // * [/ip4/135.90.74.200/tcp/14567] dial tcp4 0.0.0.0:38013->135.90.74.200:14567: i/o timeout
  f02725: 'dial, China, Hong Kong', // * [/ip4/101.32.38.57/tcp/18899] dial tcp4 101.32.38.57:18899: connect: connection refused
  f02726: 'dial, USA, Brooklyn', // * [/ip4/169.62.51.212/tcp/14567] dial tcp4 0.0.0.0:38013->169.62.51.212:14567: i/o timeout
  f02731: 'dial, Singapore', // * [/ip4/10.30.8.4/tcp/14567] dial tcp4 0.0.0.0:38013->10.30.8.4:14567: i/o timeout
  f02732: 'dial, USA', // * [/ip4/141.125.99.190/tcp/14567] dial tcp4 0.0.0.0:38013->141.125.99.190:14567: i/o timeout
  f02755: 'dial, China, Shijiazhuang', // * [/ip4/110.249.208.222/tcp/1479] dial tcp4 0.0.0.0:38013->110.249.208.222:1479: i/o timeout
  f02767: 'dial, Germany, Frankfurt', // * [/ip4/18.192.27.227/tcp/37722] dial tcp4 0.0.0.0:38013->18.192.27.227:37722: i/o timeout
  f02772: 'dial, China, Chengdu', // * [/ip4/118.123.228.197/tcp/48633] dial tcp4 118.123.228.197:48633: connect: connection refused  * [/ip4/118.123.228.196/tcp/48633] dial tcp4 118.123.228.196:48633: connect: connection refused
  f02773: 'dial, China, Chengdu', // * [/ip4/118.123.228.198/tcp/48633] dial tcp4 118.123.228.198:48633: connect: connection refused
  f02823: 'dial, China, Chengdu', // * [/ip4/118.123.228.189/tcp/33353] dial tcp4 118.123.228.189:33353: connect: connection refused
  f03021: 'dial, China, Hong Kong', // * [/ip4/34.96.185.143/tcp/10240] dial tcp4 34.96.185.143:10240: connect: connection refused  * [/ip4/27.213.97.148/tcp/10240] dial tcp4 0.0.0.0:38013->27.213.97.148:10240: i/o timeout
  f03120: 'dial, China, Guangzhou', // * [/ip4/0.0.0.0/tcp/34566] dial tcp4 0.0.0.0:34566: connect: connection refused
  f03131: 'dial, China, Changsha', // * [/ip4/124.233.0.194/tcp/7002] failed to negotiate security protocol: EOF
  f03136: "dial, China, Xi'an, Zhejiang Yun Chu Technology Co., Ltd, sat", // * [/ip4/47.57.8.77/tcp/18557] dial tcp4 0.0.0.0:38013->47.57.8.77:18557: i/o timeout
  f03140: 'dial, China, QingDao', // * [/ip4/61.147.123.83/tcp/12222] dial tcp4 61.147.123.83:12222: connect: connection refused
  f03144: 'dial, Germany, Frankfurt', // * [/ip4/103.214.41.38/tcp/23456] dial tcp4 0.0.0.0:38013->103.214.41.38:23456: i/o timeout
  f03149: 'dial, USA, Newton', // * [/ip6/2600:8803:3000:2430:0:ff:fde6:85d5/tcp/2889] dial tcp6 [2600:8803:3000:2430:0:ff:fde6:85d5]:2889: connect: network is unreachable  * [/ip4/68.102.245.161/tcp/2889] dial tcp4 68.102.245.161:2889: connect: connection refused
  f03176: 'dial, USA, San Mateo, Five Star-Helmsman&Heiben', // * [/ip4/47.88.57.241/tcp/15470] dial tcp4 47.88.57.241:15470: connect: connection refused  * [/ip4/47.88.55.220/tcp/15470] dial tcp4 0.0.0.0:38013->47.88.55.220:15470: i/o timeout
  f03220: 'dial, China, Ordos', // * [/ip4/1.183.72.226/tcp/12309] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBgi9gSUH7kw88Ko8miGjRWjJrNF2gmkMjy6gchtxgJbL, but remote key matches 12D3KooWDxu2JXzsnxz2L9ZWRXNBypcpQcduWwqmSZfu5EawCDmZ
  f03225: 'dial, China, Guyuan', // * [/ip4/10.100.0.2/tcp/11111] dial tcp4 10.100.0.2:11111: connect: connection refused
  f03245: 'dial, USA, Los Angeles', // * [/ip4/120.133.36.67/tcp/23456] dial tcp4 0.0.0.0:38013->120.133.36.67:23456: i/o timeout
  f03266: 'dial, USA', // * [/ip4/169.63.27.151/tcp/14567] dial tcp4 0.0.0.0:38013->169.63.27.151:14567: i/o timeout
  f03276: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/41112] dial tcp4 183.63.203.161:41112: i/o timeout
  f03286: 'dial, China, Mianyang', // * [/ip4/112.44.246.189/tcp/23455] dial tcp4 0.0.0.0:38013->112.44.246.189:23455: i/o timeout
  f03287: 'dial, USA', // * [/ip4/149.81.122.165/tcp/14567] dial tcp4 0.0.0.0:38013->149.81.122.165:14567: i/o timeout
  f03305: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.52/tcp/7000] dial tcp4 0.0.0.0:38013->197.231.176.52:7000: i/o timeout
  f03306: 'dial, Australia', // * [/ip4/103.29.66.54/tcp/7000] dial tcp4 103.29.66.54:7000: connect: connection refused
  f03307: 'dial, Australia', // * [/ip4/47.74.68.141/tcp/7001] dial tcp4 0.0.0.0:38013->47.74.68.141:7001: i/o timeout
  f03312: 'dial, China, Beijing', // * [/ip4/8.210.13.50/tcp/45678] dial tcp4 8.210.13.50:45678: connect: connection refused  * [/ip4/119.161.169.68/tcp/45678] dial tcp4 0.0.0.0:38013->119.161.169.68:45678: i/o timeout
  f03314: 'dial, China, Zhangjiakou-xfr', // * [/ip4/45.113.32.176/tcp/1112] dial tcp4 0.0.0.0:38013->45.113.32.176:1112: i/o timeout
  f03317: 'dial, China, Shenzhen + Hong Kong + Jieyang', // * [/ip4/170.33.12.164/tcp/9090] dial tcp4 0.0.0.0:38013->170.33.12.164:9090: i/o timeout
  f03320: 'dial, bcm', // * [/ip4/183.36.3.160/tcp/11850] dial tcp4 183.36.3.160:11850: connect: connection refused
  f03327: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.51/tcp/7000] dial tcp4 0.0.0.0:38013->197.231.176.51:7000: i/o timeout
  f03337: 'dial, China, Sichuan, 朝日&网科巨力', // * [/ip4/118.116.2.60/tcp/25033] dial tcp4 118.116.2.60:25033: connect: connection refused  * [/ip4/118.116.2.61/tcp/25033] dial tcp4 118.116.2.61:25033: connect: connection refused
  f03340: "dial, China, Xi'an", // * [/ip4/113.200.98.54/tcp/15347] dial tcp4 113.200.98.54:15347: connect: connection refused  * [/ip4/36.45.169.189/tcp/3345] dial tcp4 0.0.0.0:38013->36.45.169.189:3345: i/o timeout
  f03350: 'dial, China, Wuhan', // * [/ip4/170.33.12.188/tcp/7000] dial tcp4 0.0.0.0:38013->170.33.12.188:7000: i/o timeout  * [/ip4/170.33.12.187/tcp/7000] dial tcp4 0.0.0.0:38013->170.33.12.187:7000: i/o timeout
  f03351: 'dial, China, Chengdu', // * [/ip4/182.140.253.150/tcp/10000] dial tcp4 0.0.0.0:38013->182.140.253.150:10000: i/o timeout
  f03358: 'dial, Singapore', // * [/ip4/1.183.72.211/tcp/30001] dial tcp4 0.0.0.0:38013->1.183.72.211:30001: i/o timeout
  f03359: 'dial, China, Shanghai', // * [/ip4/47.245.138.110/tcp/2347] dial tcp4 0.0.0.0:38013->47.245.138.110:2347: i/o timeout
  f03360: 'dial, China, Shaanxi', // * [/ip4/111.19.155.65/tcp/23451] dial tcp4 111.19.155.65:23451: i/o timeout
  f03363: 'dial, Singapore', // * [/ip4/1.183.72.210/tcp/30003] dial tcp4 1.183.72.210:30003: connect: connection refused
  f03365: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7084] failed to negotiate security protocol: EOF
  f03366: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7000] failed to negotiate security protocol: EOF
  f03367: 'dial, Singapore', // * [/ip4/8.209.99.1/tcp/14567] dial tcp4 0.0.0.0:38013->8.209.99.1:14567: i/o timeout
  f03427: 'dial, Russia, airalab', // * [/ip4/82.148.21.37/tcp/46717] dial tcp4 82.148.21.37:46717: connect: connection refused
  f03484: 'dial, Netherlands', // * [/ip4/89.149.209.98/tcp/7000] dial tcp4 89.149.209.98:7000: connect: connection refused
  f03485: 'dial, Netherlands', // * [/ip4/37.48.116.176/tcp/7000] dial tcp4 0.0.0.0:38013->37.48.116.176:7000: i/o timeout
  f03490: 'dial, China, Dongguan', // * [/ip4/121.12.167.179/tcp/41113] dial tcp4 121.12.167.179:41113: connect: connection refused
  f03512: 'dial, New Zealand, Auckland, NZFILECOIN01', // * [/ip4/122.57.157.167/tcp/4567] dial tcp4 0.0.0.0:38013->122.57.157.167:4567: i/o timeout
  f03515: 'dial, China, Dongguan', // * [/ip4/113.105.174.3/tcp/23456] dial tcp4 113.105.174.3:23456: connect: connection refused
  f03517: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7082] failed to negotiate security protocol: EOF
  f03523: 'dial, China, Wuxi, YC--wuxi', // * [/ip4/58.215.232.74/tcp/10010] dial tcp4 0.0.0.0:38013->58.215.232.74:10010: i/o timeout  * [/ip4/192.168.1.12/tcp/1001] dial tcp4 0.0.0.0:38013->192.168.1.12:1001: i/o timeout
  f03548: 'dial, Singapore', // * [/ip4/8.209.82.79/tcp/14567] dial tcp4 0.0.0.0:38013->8.209.82.79:14567: i/o timeout
  f03620: 'dial, Germany, Frankfurt', // * [/ip4/23.90.146.133/tcp/7000] dial tcp4 0.0.0.0:38013->23.90.146.133:7000: i/o timeout
  f03630: 'dial, China, Wuhan', // * [/ip4/170.33.12.186/tcp/17000] dial tcp4 0.0.0.0:38013->170.33.12.186:17000: i/o timeout  * [/ip4/170.33.12.78/tcp/17000] dial tcp4 0.0.0.0:38013->170.33.12.78:17000: i/o timeout
  f03638: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] dial tcp4 0.0.0.0:38013->13.248.204.157:38617: i/o timeout
  f03646: 'dial, China, Beijing, JingTang', // * [/ip4/123.125.194.158/tcp/5678] dial tcp4 0.0.0.0:38013->123.125.194.158:5678: i/o timeout
  f03702: 'dial, China, Shenzhen + Singapore, LianDongJingLing', // * [/ip4/8.209.113.21/tcp/7002] dial tcp4 0.0.0.0:38013->8.209.113.21:7002: i/o timeout  * [/ip4/218.17.190.89/tcp/10240] dial tcp4 0.0.0.0:38013->218.17.190.89:10240: i/o timeout
  f03764: 'dial, China, Beijing, foobar', // * [/ip4/123.115.217.138/tcp/24002] dial tcp4 0.0.0.0:38013->123.115.217.138:24002: i/o timeout
  f04921: 'dial, China, Shanghai', // * [/ip4/121.46.237.2/tcp/51818] dial tcp4 121.46.237.2:51818: connect: connection refused
  f06775: 'dial, China, Shenzhen, IPSB&CAAP', // * [/ip4/103.39.218.169/tcp/2346] dial tcp4 103.39.218.169:2346: connect: connection refused
  f07451: 'dial, China, Hangzhou', // * [/ip4/221.12.20.5/tcp/6000] dial tcp4 0.0.0.0:38013->221.12.20.5:6000: i/o timeout
  f07710: 'dial, Hong Kong', // * [/ip4/65.181.71.9/tcp/5472] dial tcp4 0.0.0.0:38013->65.181.71.9:5472: i/o timeout
  f07752: 'dial, China, Dongguan', // * [/ip4/192.168.10.12/tcp/18888] dial tcp4 0.0.0.0:38013->192.168.10.12:18888: i/o timeout
  f07756: 'dial, DNS:purumine.com', // * [/ip6/2001:470:b:281::ac15:6402/tcp/1347] dial tcp6 [2001:470:b:281::ac15:6402]:1347: connect: network is unreachable  * [/ip4/50.47.110.164/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSdyt5tC9nJScHT4EoBnz7AZcniqxmP1FEZZwdkBwhwzk, but remote key matches 12D3KooWNoi8KHMeS8SEp3mDUCHDU8yRFW6SZ1SPmz2NLCSur2ei
  f07774: 'dial, China, Shenzhen', // * [/ip4/103.40.249.210/tcp/33455] dial tcp4 0.0.0.0:38013->103.40.249.210:33455: i/o timeout
  f07775: 'dial, China, Shenzhen', // * [/ip4/103.40.249.211/tcp/33455] dial tcp4 0.0.0.0:38013->103.40.249.211:33455: i/o timeout
  f07806: 'dial, China, Wuhan, HelloXP', // * [/ip4/58.211.11.131/tcp/1024] dial tcp4 0.0.0.0:38013->58.211.11.131:1024: i/o timeout
  f07810: 'dial, Korea', // * [/ip4/61.111.129.217/tcp/33333] dial tcp4 61.111.129.217:33333: connect: connection refused
  f07824: 'dial, China, Shanghai', // * [/ip4/106.14.125.55/tcp/8201] dial tcp4 0.0.0.0:38013->106.14.125.55:8201: i/o timeout
  f07830: 'dial, Singapore', // * [/ip4/8.209.102.106/tcp/14567] dial tcp4 0.0.0.0:38013->8.209.102.106:14567: i/o timeout
  f07833: 'dial, China, Changzhou, 星巢', // * [/ip4/107.155.3.37/tcp/20480] dial tcp4 107.155.3.37:20480: connect: connection refused  * [/ip4/107.155.16.239/tcp/20480] dial tcp4 107.155.16.239:20480: connect: connection refused
  f07848: 'dial, China, Wuhan', // * [/ip4/58.211.11.130/tcp/1024] dial tcp4 0.0.0.0:38013->58.211.11.130:1024: i/o timeout
  f07851: 'dial, Netherlands, Purmerend', // * [/ip4/212.32.243.209/tcp/2347] dial tcp4 0.0.0.0:38013->212.32.243.209:2347: i/o timeout
  f07857: 'dial, China, Zhengzhou', // * [/ip4/117.160.206.175/tcp/40131] dial tcp4 117.160.206.175:40131: connect: connection refused
  f07944: 'dial, China, Hangzhou, SupremeTreasure', // * [/ip4/103.46.128.45/tcp/57670] dial tcp4 103.46.128.45:57670: connect: connection refused
  f07947: 'dial, China, Zhengzhou', // * [/ip4/117.160.206.175/tcp/40133] dial tcp4 117.160.206.175:40133: connect: connection refused
  f07956: 'dial, Russia', // * [/ip4/91.218.244.253/tcp/10240] dial tcp4 0.0.0.0:38013->91.218.244.253:10240: i/o timeout
  f07961: 'dial, China, Changzhou', // * [/ip4/58.216.209.94/tcp/6666] dial tcp4 58.216.209.94:6666: connect: connection refused
  f07969: 'dial, China, Hangzhou, FME', // * [/ip4/121.52.246.48/tcp/5002] dial tcp4 121.52.246.48:5002: connect: connection refused
  f07982: 'dial, China, Shenzhen', // * [/ip4/113.110.201.250/tcp/36980] dial tcp4 113.110.201.250:36980: connect: connection refused
  f07991: 'dial, China, Changsha', // * [/ip4/113.218.133.192/tcp/13470] dial tcp4 113.218.133.192:13470: connect: connection refused
  f08006: 'dial, China, Shaanxi', // * [/ip4/111.19.129.175/tcp/23456] dial tcp4 0.0.0.0:38013->111.19.129.175:23456: i/o timeout
  f08032: 'dial, China, Weifang', // * [/ip4/111.17.220.237/tcp/6666] dial tcp4 111.17.220.237:6666: connect: connection refused  * [/ip4/111.17.220.235/tcp/6666] dial tcp4 111.17.220.235:6666: connect: connection refused
  f08040: 'dial, Australia, Sydney', // * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:38013->43.241.189.214:39438: i/o timeout
  f08042: 'dial, Brazil, Sao Paulo', // * [/ip4/76.223.3.225/tcp/23456] dial tcp4 0.0.0.0:38013->76.223.3.225:23456: i/o timeout
  f08047: 'dial, China, Hangzhou', // * [/ip4/101.71.125.162/tcp/7654] dial tcp4 0.0.0.0:38013->101.71.125.162:7654: i/o timeout
  f08063: 'dial, China, Huizhou', // * [/ip4/113.81.68.244/tcp/12345] dial tcp4 0.0.0.0:38013->113.81.68.244:12345: i/o timeout
  f08073: 'dial, China, Qiqihar, QY7TT', // * [/ip4/221.208.208.23/tcp/4096] dial tcp4 221.208.208.23:4096: connect: connection refused
  f08076: 'dial, Netherlands, Alphen aan den Rijn, Ang', // * [/ip4/143.178.96.190/tcp/24002] dial tcp4 143.178.96.190:24002: i/o timeout
  f08088: 'dial, China, Dongguan', // * [/ip4/183.240.203.135/tcp/10240] dial tcp4 183.240.203.135:10240: connect: connection refused
  f08091: 'dial, USA', // * [/ip4/119.18.197.98/tcp/42545] dial tcp4 0.0.0.0:38013->119.18.197.98:42545: i/o timeout
  f08094: 'dial, China, Guangzhou, dongshao', // * [/ip4/183.2.154.179/tcp/23450] failed to negotiate security protocol: read tcp4 66.70.191.245:38013->183.2.154.179:23450: read: connection reset by peer
  f08096: 'dial, China, Wuhan', // * [/ip4/59.175.128.46/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWARwVoXJ6ZjfgKEpyBv1dsEmQhHrPN9UwxxKoFkrAw98A, but remote key matches 12D3KooWCFhmdmduqq59w8CsEgEX2qi9KQqE9wmTHmqC5W4tcEaA
  f08101: 'dial, China, Wuxi', // * [/ip4/192.168.23.8/tcp/8081] dial tcp4 0.0.0.0:38013->192.168.23.8:8081: i/o timeout
  f08109: 'dial, USA, qianyuanyunshuo', // * [/ip4/47.57.8.77/tcp/28109] dial tcp4 0.0.0.0:38013->47.57.8.77:28109: i/o timeout
  f08135: 'dial, Singapore', // * [/ip4/170.33.12.118/tcp/12345] dial tcp4 0.0.0.0:38013->170.33.12.118:12345: i/o timeout
  f08139: 'dial, China, Shanghai', // * [/ip4/218.79.124.15/tcp/45454] dial tcp4 218.79.124.15:45454: connect: connection refused
  f08148: 'dial, China, Shanghai', // * [/ip4/103.108.182.27/tcp/30031] dial tcp4 0.0.0.0:38013->103.108.182.27:30031: i/o timeout
  f08149: 'dial, China, Jiangmen', // * [/ip4/183.36.3.160/tcp/60015] dial tcp4 183.36.3.160:60015: connect: connection refused
  f08150: 'dial, China, Hangzhou', // * [/ip4/115.199.55.127/tcp/23333] dial tcp4 0.0.0.0:38013->115.199.55.127:23333: i/o timeout
  f08161: 'dial, China, Weifang', // * [/ip4/111.17.220.234/tcp/6677] dial tcp4 111.17.220.234:6677: connect: connection refused
  f08170: 'dial, China, Jieyang', // * [/ip4/183.240.204.199/tcp/40573] dial tcp4 0.0.0.0:38013->183.240.204.199:40573: i/o timeout
  f08178: 'dial, China, Jiaxing, CAAP-金华', // * [/ip4/61.174.253.25/tcp/2346] dial tcp4 61.174.253.25:2346: connect: connection refused
  f08199: 'dial, USA, Sudbury', // * [/ip4/108.49.193.174/tcp/32002] dial tcp4 0.0.0.0:38013->108.49.193.174:32002: i/o timeout
  f08203: 'dial, Germany, Frankfurt', // * [/ip4/54.255.34.95/tcp/1579] dial tcp4 0.0.0.0:38013->54.255.34.95:1579: i/o timeout
  f08205: 'dial, Brazil, Sao Paulo', // * [/ip4/169.57.182.19/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHfc4VZ321w7MmZYbmMDdkMw3D4h83Ar3q8MEMjLq69PL, but remote key matches 12D3KooWEfyR3PyQidJ2GgBV6Vvncguotx7xi9GRbFvi8RBoytMu
  f08220: 'dial, China, Shenzhen', // * [/ip4/192.168.16.48/tcp/5472] dial tcp4 0.0.0.0:38013->192.168.16.48:5472: i/o timeout  * [/ip4/183.47.51.62/tcp/10240] dial tcp4 0.0.0.0:38013->183.47.51.62:10240: i/o timeout
  f08235:
    'dial, China, Beijing + Jiaxing + Germany, Frankfurt, 星河华讯&中科星际', // * [/ip4/103.103.177.172/tcp/5678] dial tcp4 0.0.0.0:38013->103.103.177.172:5678: i/o timeout
  f08243: 'dial, USA, Queens', // * [/ip4/108.41.171.148/tcp/55244] dial tcp4 0.0.0.0:38013->108.41.171.148:55244: i/o timeout  * [/ip4/108.41.171.148/tcp/55241] dial tcp4 0.0.0.0:38013->108.41.171.148:55241: i/o timeout  * [/ip4/108.41.171.148/tcp/55242] dial tcp4 0.0.0.0:38013->108.41.171.148:55242: i/o timeout  * [/ip4/108.41.171.148/tcp/55243] dial tcp4 0.0.0.0:38013->108.41.171.148:55243: i/o timeout
  f08285: 'dial, Latvia, Riga, stander', // * [/ip4/109.73.97.103/tcp/10240] dial tcp4 109.73.97.103:10240: i/o timeout
  f08289: 'dial, Canada, Embrun', // * [/ip4/148.59.149.162/tcp/10240] dial tcp4 0.0.0.0:38013->148.59.149.162:10240: i/o timeout
  f08293: 'dial, China, Xinxiang', // * [/ip4/27.50.142.73/tcp/1347] dial tcp4 27.50.142.73:1347: connect: connection refused
  f08295: 'dial, China, Suzhou, IPFS Cloud', // * [/ip4/222.92.5.150/tcp/40699] dial tcp4 0.0.0.0:38013->222.92.5.150:40699: i/o timeout
  f08301: 'dial, Japan, Setagaya-ku, MEIK', // * [/ip4/126.159.22.156/tcp/50320] dial tcp4 0.0.0.0:38013->126.159.22.156:50320: i/o timeout
  f08330: 'dial, China, Chengdu, oursoft', // * [/ip4/125.69.0.37/tcp/55009] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWDcmvnaV9QebtFP7rW2Li1KkQsBJxiKcmTXnwm1qhkcRj, but remote key matches 12D3KooWKmFzYyThhurG2mC8ZK6RznLFnGD448XkJgNcuABBMK3v
  f08338: 'dial, China, Weifang', // * [/ip4/111.17.220.231/tcp/5566] dial tcp4 111.17.220.231:5566: connect: connection refused
  f08344: 'dial, UK, Hartlepool', // * [/ip4/82.15.108.46/tcp/51437] dial tcp4 0.0.0.0:38013->82.15.108.46:51437: i/o timeout
  f08346: 'dial, Korea', // * [/ip4/59.23.202.120/tcp/23233] dial tcp4 59.23.202.120:23233: connect: connection refused
  f08347: 'dial, China, Chengdu', // * [/ip4/222.209.95.29/tcp/6666] dial tcp4 0.0.0.0:38013->222.209.95.29:6666: i/o timeout
  f08358: 'dial, China, Shenzhen', // * [/ip4/119.123.208.233/tcp/45437] dial tcp4 0.0.0.0:38013->119.123.208.233:45437: i/o timeout
  f08384:
    'dial, China, Shandong + Hong Kong + Japan, Heiwajima + Russia, Khabarovsk', // * [/ip4/172.247.228.122/tcp/9999] dial tcp4 172.247.228.122:9999: connect: no route to host  * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: connection refused  * [/ip4/66.42.38.110/tcp/9990] dial tcp4 0.0.0.0:38013->66.42.38.110:9990: i/o timeout
  f08396: 'dial, France, Fontenay-sous-Bois', // * [/ip4/90.46.50.228/tcp/24002] dial tcp4 0.0.0.0:38013->90.46.50.228:24002: i/o timeout
  f08399: 'dial, USA, Sammamish', // * [/ip4/73.118.247.91/tcp/63452] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPCrjaTJVHYzYj3XFvMixRY3pJZJgaVGFhWsfDdWgsWAP, but remote key matches 12D3KooW9ruUGEYgpPkW2A1JZTYFXKNkWxpjWtmX2UBFcx4P27tj
  f08405: 'dial, China, Guangdong', // * [/ip4/183.232.116.201/tcp/4001] dial tcp4 0.0.0.0:38013->183.232.116.201:4001: i/o timeout
  f08418: 'dial, China, Chansha + USA', // * [/ip4/27.124.10.49/tcp/7003] dial tcp4 0.0.0.0:38013->27.124.10.49:7003: i/o timeout
  f08446: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMfLgpGWM87mLbrkNuN6FQ6zExMvzECDSV4qy7FKDqNvq, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f08448: 'dial, China, Guangdong', // * [/ip4/183.232.116.202/tcp/4001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWDg2NgWzZ1PoGYTwisEdULKXVvjvMMkNmo3sVo2pQ1bcb, but remote key matches 12D3KooWAin92JFNNKoBfDSP4vrnW5VWPWpf7v25g8jpe3bNFbKX
  f08481: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:38013->73.158.16.48:30390: i/o timeout
  f08497: 'dial, Brazil, Sao Paulo', // * [/ip4/18.231.148.87/tcp/46717] dial tcp4 0.0.0.0:38013->18.231.148.87:46717: i/o timeout
  f08568: 'dial, USA, Waxhaw, Meatball Part II', // * [/ip4/71.75.239.182/tcp/41372] dial tcp4 0.0.0.0:38013->71.75.239.182:41372: i/o timeout
  f08684: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.109:23450: i/o timeout
  f08685: 'dial, China, Fuzhou', // * [/ip4/182.99.0.96/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.96:23450: i/o timeout
  f08788: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.103:23450: i/o timeout
  f08793: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.99:23450: i/o timeout
  f08854: 'dial, China, Dongguan', // * [/ip4/121.12.162.85/tcp/10000] dial tcp4 0.0.0.0:38013->121.12.162.85:10000: i/o timeout
  f08895: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f08904: 'dial, China, Deyang', // * [/ip4/125.64.78.27/tcp/4004] dial tcp4 125.64.78.27:4004: connect: connection refused
  f08908: 'dial, USA', // * [/ip4/216.18.214.92/tcp/6666] dial tcp4 0.0.0.0:38013->216.18.214.92:6666: i/o timeout
  f08917: 'dial, China, Beijing', // * [/ip4/182.61.174.185/tcp/40000] dial tcp4 182.61.174.185:40000: connect: connection refused
  f08928: 'dial, USA, Arlington, theartist', // * [/ip4/69.251.248.175/tcp/6679] dial tcp4 0.0.0.0:38013->69.251.248.175:6679: i/o timeout
  f08937: 'dial, China, Wuxi, YC--wuxi', // * [/ip4/58.215.232.74/tcp/10200] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAG85TzBibt5LjxuTsz9KhWwQCz9ok65oaPcZ2voYaMZA, but remote key matches 12D3KooWPSS9P7FWDoCmBpqt9NGSjbYyFTajiR3wd2VxtfeDiwNN  * [/ip4/192.168.1.18/tcp/1020] dial tcp4 0.0.0.0:38013->192.168.1.18:1020: i/o timeout
  f08949: 'dial, Norway, Oslo', // * [/ip4/151.252.13.190/tcp/37374] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWE1ubdqszJxdjAAVcZcx2x1PJUNFbNDm52jFkeJoAaPYh, but remote key matches 12D3KooWMpuRzgVuRS6m285cucGgnXWwTnsNtGzjsMJeEqS7UtJw
  f08953: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.100:23450: i/o timeout
  f08958: 'dial, China, Fuzhou', // * [/ip4/182.99.0.108/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.108:23450: i/o timeout
  f08985: 'dial, USA', // * [/ip4/141.125.89.152/tcp/14567] dial tcp4 0.0.0.0:38013->141.125.89.152:14567: i/o timeout
  f08986: 'dial, China, Ordos', // * [/ip4/1.183.72.226/tcp/12308] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCLPAPTjCYyCMBBnv5MkJCaV1o6mawJLha4wdAGkMH1Yq, but remote key matches 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg
  f08991: 'dial, China, Ili', // * [/ip4/124.88.170.140/tcp/16000] dial tcp4 124.88.170.140:16000: connect: connection refused
  f08995: 'dial, China, Fuzhou', // * [/ip4/182.99.0.97/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.97:23450: i/o timeout
  f09005: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.101:23450: i/o timeout
  f09029: 'dial, China, Wuhan', // * [/ip4/59.175.128.46/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCkJYhKg9uMf2ocRDRxatUWBveJMSdneMamxDmChG2ULv, but remote key matches 12D3KooWCFhmdmduqq59w8CsEgEX2qi9KQqE9wmTHmqC5W4tcEaA
  f09036: 'dial, China, Chengdu, CD-oursoft', // * [/ip4/125.69.0.37/tcp/55019] dial tcp4 125.69.0.37:55019: connect: connection refused
  f09037: 'dial, Singapore', // * [/ip4/170.33.12.95/tcp/16666] dial tcp4 0.0.0.0:38013->170.33.12.95:16666: i/o timeout
  f09048: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.102:23450: i/o timeout
  f09056: 'dial, China, Shenzhen, SZSQ1', // * [/ip4/119.139.197.93/tcp/20030] dial tcp4 0.0.0.0:38013->119.139.197.93:20030: i/o timeout
  f09077: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:38013->218.85.126.210:23450: i/o timeout
  f09082: 'dial, Australia, Canberra', // * [/ip4/101.178.36.30/tcp/24004] dial tcp4 0.0.0.0:38013->101.178.36.30:24004: i/o timeout
  f09087: 'dial, USA', // * [/ip4/169.59.247.27/tcp/14567] dial tcp4 0.0.0.0:38013->169.59.247.27:14567: i/o timeout
  f09088: 'dial, China, Changsha', // * [/ip4/175.10.160.70/tcp/13470] dial tcp4 175.10.160.70:13470: connect: connection refused
  f09091: 'dial, Netherlands', // * [/ip4/185.232.59.179/tcp/2347] dial tcp4 0.0.0.0:38013->185.232.59.179:2347: i/o timeout
  f09261: 'dial, Brazil, Sao Paulo', // * [/ip4/169.57.189.187/tcp/7000] dial tcp4 169.57.189.187:7000: connect: connection refused
  f09523: 'dial, China, Beijing', // * [/ip4/8.210.13.50/tcp/45678] dial tcp4 8.210.13.50:45678: connect: connection refused  * [/ip4/119.161.169.68/tcp/45678] dial tcp4 0.0.0.0:38013->119.161.169.68:45678: i/o timeout
  f09537: 'dial, USA, El Monte', // * [/ip4/47.145.150.94/tcp/1024] dial tcp4 0.0.0.0:38013->47.145.150.94:1024: i/o timeout
  f09555: 'dial, Australia, Sydney', // * [/ip4/3.25.64.130/tcp/10240] dial tcp4 0.0.0.0:38013->3.25.64.130:10240: i/o timeout
  f09559: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/31001] dial tcp4 0.0.0.0:38013->99.250.201.0:31001: i/o timeout
  f09560: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64002] dial tcp4 178.212.192.216:64002: connect: connection refused
  f09561: 'dial, China, Beijing', // * [/ip4/36.112.26.4/tcp/3458] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFp4nbb4eDyUmWaR5XrjSEzdhtHh35ewdwc59e1tkZBcA, but remote key matches 12D3KooWAKXYhFP3mGbaHnCB5GBCvFe8gniGKoDpTbaY8S9FWruH
  f09565: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64003] dial tcp4 178.212.192.216:64003: connect: connection refused
  f09573: 'dial, China, Xiamen', // * [/ip4/121.204.250.253/tcp/4567] dial tcp4 121.204.250.253:4567: connect: no route to host
  f09589: 'dial, China, Changsha', // * [/ip4/175.10.162.119/tcp/5472] dial tcp4 0.0.0.0:38013->175.10.162.119:5472: i/o timeout
  f09592: 'dial, Japan, Minamata', // * [/ip4/203.189.40.203/tcp/10252] dial tcp4 203.189.40.203:10252: connect: connection refused
  f09597: 'dial, China, Shanghai', // * [/ip4/47.52.20.42/tcp/8046] failed to negotiate security protocol: unexpected EOF
  f09605: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64004] dial tcp4 178.212.192.216:64004: connect: connection refused
  f09619: 'dial, China, Shanghai', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f09639: 'dial, China, Fuzhou', // * [/ip4/110.80.136.19/tcp/10240] failed to negotiate security protocol: read tcp4 66.70.191.245:38013->110.80.136.19:10240: read: connection reset by peer
  f09643: 'dial, China, Beijing', // * [/ip4/203.93.121.130/tcp/38886] failed to negotiate security protocol: message did not have trailing newline
  f09652: 'dial, Singapore', // * [/ip4/170.33.9.50/tcp/32632] dial tcp4 0.0.0.0:38013->170.33.9.50:32632: i/o timeout
  f09653: 'dial, China, Chengdu', // * [/ip4/47.242.94.248/tcp/6667] dial tcp4 0.0.0.0:38013->47.242.94.248:6667: i/o timeout
  f09656: 'dial, Ukraine, Odessa', // * [/ip4/218.60.28.136/tcp/43368] dial tcp4 218.60.28.136:43368: connect: connection refused
  f09664: 'dial, Australia, Sydney', // * [/ip4/220.238.233.196/tcp/26201] dial tcp4 0.0.0.0:38013->220.238.233.196:26201: i/o timeout
  f09671: 'dial, China, Chongqing', // * [/ip4/113.207.109.184/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMdh1of4D5YPvY4g3Y2pCf6mpQvgHx9kg55RvkJdRmP6z, but remote key matches 12D3KooWPw6phtaL2ftZq7wQLjc6z1YoVou4BK48ZzXk3TVNVPjK
  f09672: 'dial, China, Chengdu', // * [/ip4/110.185.107.124/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRQ8Qer7mUMRaywqs4QfVAqofMNMzSCNiNKJ14CCrUi7R, but remote key matches 12D3KooWFrs6qgLAHtSS1kSTwXtoUKTAzipUuyt4CKmWL4HLZ3fq
  f09675: 'dial, China, Weifang', // * [/ip4/111.17.220.237/tcp/9999] dial tcp4 111.17.220.237:9999: connect: connection refused  * [/ip4/47.242.94.248/tcp/9999] dial tcp4 0.0.0.0:38013->47.242.94.248:9999: i/o timeout
  f09680: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f09704: 'dial, China, Shenzhen', // * [/ip4/218.17.62.49/tcp/31431] dial tcp4 218.17.62.49:31431: connect: connection refused
  f09723: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:38013->218.85.126.210:23450: i/o timeout
  f09734: 'dial, China, Dongguan', // * [/ip4/121.12.167.179/tcp/41113] dial tcp4 121.12.167.179:41113: connect: connection refused
  f09748: 'dial, China, Tianjin', // * [/ip4/150.129.138.199/tcp/7518] dial tcp4 150.129.138.199:7518: connect: connection refused
  f09761: 'dial, China, Beijing', // * [/ip4/114.253.41.59/tcp/24002] dial tcp4 0.0.0.0:38013->114.253.41.59:24002: i/o timeout
  f09763: 'dial, China, Mianyang,  <13h', // * [/ip4/47.254.128.95/tcp/7000] dial tcp4 0.0.0.0:38013->47.254.128.95:7000: i/o timeout  * [/ip4/47.254.25.128/tcp/7000] dial tcp4 0.0.0.0:38013->47.254.25.128:7000: i/o timeout
  f09770: "dial, China, Xi'an", // * [/ip4/192.168.25.156/tcp/9770] dial tcp4 0.0.0.0:38013->192.168.25.156:9770: i/o timeout
  f09771: 'dial, China, Hangzhou', // * [/ip4/161.117.229.243/tcp/9771] dial tcp4 161.117.229.243:9771: connect: connection refused
  f09789: 'dial, USA', // * [/ip4/47.242.77.149/tcp/19914] dial tcp4 0.0.0.0:38013->47.242.77.149:19914: i/o timeout
  f09792: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 0.0.0.0:38013->35.224.87.15:24002: i/o timeout
  f09797: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 182.99.0.102:23450: i/o timeout
  f09801: 'dial, China, Fuzhou', // * [/ip4/182.99.0.108/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.108:23450: i/o timeout
  f09808: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.100:23450: i/o timeout
  f09809: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.101:23450: i/o timeout
  f09810: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.103:23450: i/o timeout
  f09811: 'dial, China, Dongguan', // * [/ip4/113.105.174.7/tcp/10000] dial tcp4 113.105.174.7:10000: connect: no route to host
  f09813: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.109:23450: i/o timeout
  f09814: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.99:23450: i/o timeout
  f09817: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.98:23450: i/o timeout
  f09825: 'dial, China, Jinhua', // * [/ip4/36.27.214.180/tcp/51919] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGBXwJZFnHquZCnsFL43KC9J9Q6ZvdsGpEGjfTf4Vk4Ft, but remote key matches 12D3KooWCGWp93uoqhN96GdkTLvaGVwday869qixhsZ5HCjoYwNa
  f09828: 'dial, NR', // * [/ip4/192.168.0.9/tcp/24002] dial tcp4 0.0.0.0:38013->192.168.0.9:24002: i/o timeout
  f09830: 'dial, Korea, Geumcheon-gu', // * [/ip4/121.140.143.29/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWEgLZVWfuy9vrTAre3xcnQdKG7vXh3gkwRXzZbdBc9pnF, but remote key matches 12D3KooWSsjSaxoN3tdeWo4y9g34ptm3m7VmhoLvig1WXarkTPEj
  f09838: 'dial, Russia, Irkutsk', // * [/ip4/90.188.226.112/tcp/9555] dial tcp4 0.0.0.0:38013->90.188.226.112:9555: i/o timeout
  f09859: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] dial tcp4 0.0.0.0:38013->13.248.204.157:38617: i/o timeout
  f09969: 'dial, China, Guangzhou', // * [/ip4/183.2.157.250/tcp/1029] dial tcp4 0.0.0.0:38013->183.2.157.250:1029: i/o timeout
  f09972: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:38013->95.216.99.39:46717: i/o timeout
  f09983: 'dial, China, Guangzhou', // * [/ip4/183.2.157.214/tcp/888] dial tcp4 0.0.0.0:38013->183.2.157.214:888: i/o timeout
  f09985: 'dial, China, Qingdao', // * [/ip4/61.147.123.85/tcp/12223] dial tcp4 61.147.123.85:12223: connect: connection refused
  f010015: 'dial, China, Taizhou', // * [/ip4/47.254.145.29/tcp/23456] dial tcp4 0.0.0.0:38013->47.254.145.29:23456: i/o timeout  * [/ip4/47.254.31.111/tcp/23456] dial tcp4 0.0.0.0:38013->47.254.31.111:23456: i/o timeout
  f010020: 'dial, China, Chongqing', // * [/ip4/113.207.109.184/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNXhxeBMqYPF56bZExJzcjeiHDaserGs7YYXNgLtLHVvS, but remote key matches 12D3KooWPw6phtaL2ftZq7wQLjc6z1YoVou4BK48ZzXk3TVNVPjK
  f010032: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.103:23450: i/o timeout
  f010048: 'dial, China, Shanghai', // * [/ip4/116.237.97.73/tcp/65500] dial tcp4 116.237.97.73:65500: connect: connection refused
  f010056: 'dial, Singapore', // * [/ip4/8.209.82.79/tcp/14567] dial tcp4 0.0.0.0:38013->8.209.82.79:14567: i/o timeout
  f010063: 'dial, China, Mianyang', // * [/ip4/183.223.56.9/tcp/23456] dial tcp4 0.0.0.0:38013->183.223.56.9:23456: i/o timeout
  f010084: 'dial, China, Beijing', // * [/ip4/106.54.88.171/tcp/10240] dial tcp4 0.0.0.0:38013->106.54.88.171:10240: i/o timeout
  f010152: 'dial, Germany-cfa', // * [/ip4/116.202.129.161/tcp/10666] dial tcp4 116.202.129.161:10666: connect: connection refused
  f010170: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.109:23450: i/o timeout
  f010223: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12311] dial tcp4 0.0.0.0:38013->47.57.188.137:12311: i/o timeout
  f010224: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.102:23450: i/o timeout
  f010225: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12312] dial tcp4 0.0.0.0:38013->8.209.107.150:12312: i/o timeout
  f010230: 'dial, China, Beijing', // * [/ip4/106.55.236.214/tcp/10022] dial tcp4 106.55.236.214:10022: connect: connection refused
  f010238: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23455] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFjDPBVjjj6uWWaZfZA4jduopX8gKZLKKKYVX6oinHkba, but remote key matches 12D3KooWKEPF9P135enspeFioCj4YQr5CbSKjgh3uTTCR8DLmQWZ
  f010257: 'dial, China, Hong Kong, DNS:feiyuipfs.com', // * [/ip4/43.231.187.28/tcp/8080] dial tcp4 0.0.0.0:38013->43.231.187.28:8080: i/o timeout
  f010268: 'dial, China, Hangzhou', // * [/ip4/47.57.8.77/tcp/8001] dial tcp4 0.0.0.0:38013->47.57.8.77:8001: i/o timeout
  f010270: 'dial, China, Shijiazhuang', // * [/ip4/111.224.179.91/tcp/2233] dial tcp4 0.0.0.0:38013->111.224.179.91:2233: i/o timeout
  f010274: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.99:23450: i/o timeout
  f010276: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] dial tcp4 0.0.0.0:38013->13.248.204.157:38617: i/o timeout
  f010287: 'dial, China, Fuzhou', // * [/ip4/182.99.0.97/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.97:23450: i/o timeout
  f010289: 'dial, China, Fuzhou', // * [/ip4/182.99.0.96/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.96:23450: i/o timeout
  f010291: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.98:23450: i/o timeout
  f010298: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.102:23450: i/o timeout
  f010299: 'dial, China, Yibin', // * [/ip4/101.206.243.3/tcp/39695] dial tcp4 101.206.243.3:39695: connect: connection refused
  f010308: 'dial, Germany, Frankfurt', // * [/ip4/139.199.62.183/tcp/6610] dial tcp4 139.199.62.183:6610: connect: connection refused
  f010311: 'dial, Korea, Hwaseong-si', // * [/ip4/106.255.239.43/tcp/24002] dial tcp4 0.0.0.0:38013->106.255.239.43:24002: i/o timeout
  f010362: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.35.11/tcp/46717] dial tcp4 0.0.0.0:38013->15.228.35.11:46717: i/o timeout
  f010372: 'dial, Brazil, Sao Paulo', // * [/ip4/52.67.22.220/tcp/46717] dial tcp4 0.0.0.0:38013->52.67.22.220:46717: i/o timeout
  f010374: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAUYDipKeDFH92NqD4RxxUGUZJtiUwH5YD9scLwnavVXP, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f010398: 'dial, Korea, Yeongdeungpo-dong', // * [/ip4/121.140.143.29/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLKVafLxDtYZjCk6gBdnUzGpkYs8sk8Yue3GPnuadtVqs, but remote key matches 12D3KooWSsjSaxoN3tdeWo4y9g34ptm3m7VmhoLvig1WXarkTPEj
  f010411: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] dial tcp4 0.0.0.0:38013->13.248.204.157:38617: i/o timeout
  f010419: 'dial, China, Sichuan', // * [/ip4/47.241.19.122/tcp/6666] dial tcp4 47.241.19.122:6666: connect: no route to host
  f010424: 'dial, Australia, Sydney', // * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:38013->43.241.189.214:39438: i/o timeout
  f010449: 'dial, China, Jiangmen', // * [/ip4/183.36.3.160/tcp/60007] dial tcp4 183.36.3.160:60007: connect: connection refused
  f010495: 'dial, China, Tainjin', // * [/ip4/150.129.138.199/tcp/8518] dial tcp4 150.129.138.199:8518: connect: connection refused
  f010496: 'dial, China, Guangzhou', // * [/ip4/183.2.157.213/tcp/666] dial tcp4 0.0.0.0:38013->183.2.157.213:666: i/o timeout
  f010512: 'dial, China, Zhengzhou', // * [/ip4/117.160.206.175/tcp/40133] dial tcp4 117.160.206.175:40133: connect: connection refused
  f010516: 'dial, Brazil, Sao Paulo', // * [/ip4/18.230.25.100/tcp/18888] dial tcp4 0.0.0.0:38013->18.230.25.100:18888: i/o timeout
  f010527: 'dial, China, Shanghai', // * [/ip4/116.228.53.133/tcp/10240] failed to negotiate security protocol: message did not have trailing newline
  f010533: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12319] dial tcp4 0.0.0.0:38013->47.57.188.137:12319: i/o timeout
  f010538: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12320] dial tcp4 0.0.0.0:38013->8.209.107.150:12320: i/o timeout
  f010541: 'dial, China, Chengdu', // * [/ip4/110.185.107.23/tcp/21735] dial tcp4 110.185.107.23:21735: connect: connection refused  * [/ip4/110.185.107.117/tcp/21736] dial tcp4 110.185.107.117:21736: connect: connection refused
  f010553: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12316] dial tcp4 0.0.0.0:38013->47.57.188.137:12316: i/o timeout
  f010558: 'dial, China, Shenzhen + Hong Kong', // * [/ip4/154.91.38.15/tcp/51105] dial tcp4 154.91.38.15:51105: connect: connection refused
  f010579: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.194/tcp/23450] dial tcp4 0.0.0.0:38013->45.192.184.194:23450: i/o timeout
  f010586: 'dial, China, Fuzhou', // * [/ip4/45.192.184.197/tcp/23450] dial tcp4 0.0.0.0:38013->45.192.184.197:23450: i/o timeout
  f010598: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/10002] dial tcp4 99.250.201.0:10002: i/o timeout
  f010600: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] dial tcp4 0.0.0.0:38013->13.248.204.157:38617: i/o timeout
  f010606: 'dial, China, Fuzhou', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:38013->45.192.184.195:23450: i/o timeout
  f010607: 'dial, China, Guangzhou', // * [/ip4/8.210.76.199/tcp/18899] dial tcp4 0.0.0.0:38013->8.210.76.199:18899: i/o timeout
  f010608: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.101:23450: i/o timeout
  f010609: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/36666] dial tcp4 0.0.0.0:38013->182.99.0.100:36666: i/o timeout
  f010613: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/20002] dial tcp4 0.0.0.0:38013->99.250.201.0:20002: i/o timeout
  f014230: 'dial, China, Fuzhou', // * [/ip4/185.23.181.67/tcp/23450] dial tcp4 0.0.0.0:38013->185.23.181.67:23450: i/o timeout
  f014241: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNczL8NwzKEd2Np4uiDs42GB3pKcmoABTdM8JJ8v9MRGB, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f014246: 'dial, China, Shenzhen', // * [/ip4/103.40.249.212/tcp/44299] dial tcp4 0.0.0.0:38013->103.40.249.212:44299: i/o timeout
  f014248: 'dial, Turkey', // * [/ip4/185.23.180.67/tcp/23450] dial tcp4 185.23.180.67:23450: connect: no route to host
  f014259: 'dial, China, Fuzhou', // * [/ip4/45.192.184.193/tcp/23450] dial tcp4 0.0.0.0:38013->45.192.184.193:23450: i/o timeout
  f014279: 'dial, Finland, Helsinki', // * [/ip4/95.217.113.188/tcp/12345] dial tcp4 0.0.0.0:38013->95.217.113.188:12345: i/o timeout
  f014281: 'dial, Netherlands, Permerend', // * [/ip4/83.149.84.21/tcp/2347] dial tcp4 0.0.0.0:38013->83.149.84.21:2347: i/o timeout
  f014307: 'dial, China, Dongguan', // * [/ip4/218.16.123.133/tcp/4001] dial tcp4 0.0.0.0:38013->218.16.123.133:4001: i/o timeout
  f014311: 'dial, China, Ordos', // * [/ip4/162.62.55.44/tcp/12309] dial tcp4 162.62.55.44:12309: connect: connection refused
  f014328: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/10003] dial tcp4 99.250.201.0:10003: i/o timeout
  f014329: 'dial, China, Hong Kong', // * [/ip4/65.181.71.9/tcp/5472] dial tcp4 0.0.0.0:38013->65.181.71.9:5472: i/o timeout
  f014348: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.15.78/tcp/46717] dial tcp4 0.0.0.0:38013->15.228.15.78:46717: i/o timeout
  f014377: 'dial, China, Liaoning', // * [/ip4/116.132.221.24/tcp/42985] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAwSVUn5sTmPq1f64G1FfAt3ovRyJwzimCQtr5NQYG3Z7, but remote key matches 12D3KooWSFGYvbGeXwHPdLytmxkzFgfAzMXjgUPFzwkcVzNnfGvu
  f014379: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f014380: 'dial, China, Hangzhou + Wuhan + Singapore', // * [/ip4/170.33.12.186/tcp/7161] dial tcp4 0.0.0.0:38013->170.33.12.186:7161: i/o timeout  * [/ip4/170.33.12.78/tcp/7161] dial tcp4 0.0.0.0:38013->170.33.12.78:7161: i/o timeout
  f014382: 'dial, Singapore', // * [/ip4/10.10.34.120/tcp/7000] dial tcp4 0.0.0.0:38013->10.10.34.120:7000: i/o timeout
  f014386: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/7169] dial tcp4 0.0.0.0:38013->170.33.12.186:7169: i/o timeout
  f014392: 'dial, Russia, Khabarovsk + USA + Japan, Heiwajima', // * [/ip4/172.247.228.122/tcp/9999] dial tcp4 172.247.228.122:9999: connect: no route to host  * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: connection refused  * [/ip4/66.42.38.110/tcp/9990] dial tcp4 0.0.0.0:38013->66.42.38.110:9990: i/o timeout
  f014393: 'dial, China, Zhejiang', // * [/ip4/43.227.216.41/tcp/25677] failed to negotiate security protocol: read tcp4 66.70.191.245:38013->43.227.216.41:25677: read: connection reset by peer
  f014415: 'dial, USA', // * [/ip4/13.248.165.152/tcp/33612] failed to negotiate security protocol: EOF
  f014431: 'dial, Singapore', // * [/ip4/170.33.12.78/tcp/7185] dial tcp4 0.0.0.0:38013->170.33.12.78:7185: i/o timeout  * [/ip4/170.33.12.186/tcp/7185] dial tcp4 0.0.0.0:38013->170.33.12.186:7185: i/o timeout
  f014432: 'dial, China, Chengdu', // * [/ip4/125.69.0.37/tcp/55019] dial tcp4 125.69.0.37:55019: connect: connection refused
  f014433: 'dial, Singapore', // * [/ip4/170.33.12.78/tcp/7193] dial tcp4 0.0.0.0:38013->170.33.12.78:7193: i/o timeout  * [/ip4/170.33.12.186/tcp/7193] dial tcp4 0.0.0.0:38013->170.33.12.186:7193: i/o timeout
  f014436: 'dial, China, Chengdu', // * [/ip4/125.69.0.37/tcp/55009] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKAWmV63WC5bLi5LasVaRnVKkKkoKKAwqqqhGnaVXLcR9, but remote key matches 12D3KooWKmFzYyThhurG2mC8ZK6RznLFnGD448XkJgNcuABBMK3v
  f014440: 'dial, Hong Kong', // * [/ip4/45.113.32.179/tcp/6666] dial tcp4 0.0.0.0:38013->45.113.32.179:6666: i/o timeout
  f014464: 'dial, China, Hangzhou + Singapore', // * [/ip4/170.33.12.205/tcp/7000] dial tcp4 0.0.0.0:38013->170.33.12.205:7000: i/o timeout
  f014481: 'dial, China, Shanghai', // * [/ip4/103.242.134.36/tcp/12288] failed to negotiate security protocol: EOF  * [/ip4/170.33.12.118/tcp/12345] dial tcp4 0.0.0.0:38013->170.33.12.118:12345: i/o timeout
  f014483: 'dial, USA, Clarksville', // * [/ip4/199.46.99.12/tcp/43801] dial tcp4 199.46.99.12:43801: connect: connection refused
  f014487: 'dial, China, Shanghai', // * [/ip4/114.88.73.108/tcp/35353] dial tcp4 114.88.73.108:35353: connect: connection refused  * [/ip4/47.241.59.58/tcp/45455] dial tcp4 0.0.0.0:38013->47.241.59.58:45455: i/o timeout
  f014522: 'dial, China, Shanghai', // * [/ip4/81.68.170.164/tcp/5474] dial tcp4 81.68.170.164:5474: connect: connection refused
  f014547: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.100:23450: i/o timeout
  f014572: 'dial, USA', // * [/ip4/47.90.208.156/tcp/39706] dial tcp4 0.0.0.0:38013->47.90.208.156:39706: i/o timeout
  f014573: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.101:23450: i/o timeout
  f014606: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f014609: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.109:23450: i/o timeout
  f014632: 'dial, Canada', // * [/ip4/148.59.149.162/tcp/10240] dial tcp4 0.0.0.0:38013->148.59.149.162:10240: i/o timeout
  f014634: 'dial, USA, Boardman', // * [/ip4/54.148.63.7/tcp/10240] dial tcp4 0.0.0.0:38013->54.148.63.7:10240: i/o timeout
  f014640: 'dial, Hungary', // * [/ip4/87.229.53.110/tcp/44163] dial tcp4 0.0.0.0:38013->87.229.53.110:44163: i/o timeout
  f014644: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:38013->73.158.16.48:30390: i/o timeout
  f014683: 'dial, China, Shenzhen', // * [/ip4/183.53.76.63/tcp/41113] dial tcp4 0.0.0.0:38013->183.53.76.63:41113: i/o timeout
  f014701: 'dial, China, Changzhou', // * [/ip4/47.242.94.248/tcp/8899] dial tcp4 0.0.0.0:38013->47.242.94.248:8899: i/o timeout
  f014744: 'dial, China, Taiyuan', // * [/ip4/1.71.191.196/tcp/33411] dial tcp4 0.0.0.0:38013->1.71.191.196:33411: i/o timeout
  f014778: 'dial, China, Ordos', // * [/ip4/162.62.55.44/tcp/12310] dial tcp4 162.62.55.44:12310: connect: connection refused
  f014782: 'dial, DNS:wlblock.io', // * [/ip4/18.166.30.112/tcp/3456] dial tcp4 18.166.30.112:3456: connect: connection refused
  f014798: 'dial, Brazil, Sao Paulo', // * [/ip4/18.228.119.165/tcp/5101] dial tcp4 0.0.0.0:38013->18.228.119.165:5101: i/o timeout
  f014804: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12314] dial tcp4 0.0.0.0:38013->8.209.107.150:12314: i/o timeout
  f014813: 'dial, China, Hangzhou + USA', // * [/ip4/162.209.218.130/tcp/12348] dial tcp4 162.209.218.130:12348: connect: no route to host  * [/ip4/43.224.34.33/tcp/9999] dial tcp4 0.0.0.0:38013->43.224.34.33:9999: i/o timeout
  f015231: 'dial, China, Wuxi', // * [/ip4/193.118.43.158/tcp/7090] failed to negotiate security protocol: EOF
  f015642: 'dial, China, Fuzhou', // * [/ip4/220.176.125.20/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.20:23450: i/o timeout
  f015643: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12317] dial tcp4 0.0.0.0:38013->47.57.188.137:12317: i/o timeout
  f015662: 'dial, China, Beijing', // * [/ip4/203.93.121.130/tcp/38886] failed to negotiate security protocol: message did not have trailing newline
  f015685: 'dial, China, Shanghai', // * [/ip4/222.64.141.185/tcp/40321] dial tcp4 0.0.0.0:38013->222.64.141.185:40321: i/o timeout
  f015720: 'dial, China, Ningbo', // * [/ip4/45.32.19.57/tcp/7106] dial tcp4 0.0.0.0:38013->45.32.19.57:7106: i/o timeout  * [/ip4/155.138.144.135/tcp/7107] dial tcp4 0.0.0.0:38013->155.138.144.135:7107: i/o timeout  * [/ip4/45.77.72.195/tcp/7103] dial tcp4 0.0.0.0:38013->45.77.72.195:7103: i/o timeout  * [/ip4/141.164.50.170/tcp/7201] dial tcp4 0.0.0.0:38013->141.164.50.170:7201: i/o timeout  * [/ip4/104.156.230.123/tcp/7104] dial tcp4 0.0.0.0:38013->104.156.230.123:7104: i/o timeout  * [/ip4/149.28.89.24/tcp/7102] dial tcp4 0.0.0.0:38013->149.28.89.24:7102: i/o timeout  * [/ip4/45.77.89.14/tcp/7105] dial tcp4 0.0.0.0:38013->45.77.89.14:7105: i/o timeout
  f015726: 'dial, China, Qingdao', // * [/ip4/61.147.123.83/tcp/12222] dial tcp4 61.147.123.83:12222: connect: connection refused
  f015731: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12329] dial tcp4 0.0.0.0:38013->8.209.107.150:12329: i/o timeout
  f015732: 'dial, USA, Portland', // * [/ip4/47.254.31.111/tcp/23456] dial tcp4 0.0.0.0:38013->47.254.31.111:23456: i/o timeout  * [/ip4/47.254.145.29/tcp/23456] dial tcp4 0.0.0.0:38013->47.254.145.29:23456: i/o timeout
  f015733: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12500] dial tcp4 0.0.0.0:38013->47.57.188.137:12500: i/o timeout
  f015737: 'dial, Brazil, Sao Paulo', // * [/ip4/169.57.219.4/tcp/7000] dial tcp4 0.0.0.0:38013->169.57.219.4:7000: i/o timeout
  f015742: 'dial, China, Ningbo', // * [/ip4/155.138.144.135/tcp/7007] dial tcp4 0.0.0.0:38013->155.138.144.135:7007: i/o timeout  * [/ip4/45.77.72.195/tcp/7003] dial tcp4 0.0.0.0:38013->45.77.72.195:7003: i/o timeout  * [/ip4/45.32.19.57/tcp/7006] dial tcp4 0.0.0.0:38013->45.32.19.57:7006: i/o timeout  * [/ip4/45.77.89.14/tcp/7005] dial tcp4 0.0.0.0:38013->45.77.89.14:7005: i/o timeout  * [/ip4/104.156.230.123/tcp/7004] dial tcp4 0.0.0.0:38013->104.156.230.123:7004: i/o timeout  * [/ip4/149.28.89.24/tcp/7002] dial tcp4 0.0.0.0:38013->149.28.89.24:7002: i/o timeout  * [/ip4/141.164.50.170/tcp/7001] dial tcp4 0.0.0.0:38013->141.164.50.170:7001: i/o timeout
  f015751: 'dial, Canada, Huron East', // * [/ip4/184.94.177.239/tcp/15432] dial tcp4 184.94.177.239:15432: i/o timeout
  f015756: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:38013->95.216.99.39:46717: i/o timeout
  f015757: 'dial, China, Hangzhou', // * [/ip4/103.46.128.45/tcp/57670] dial tcp4 103.46.128.45:57670: connect: connection refused
  f015760: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.53/tcp/7000] dial tcp4 0.0.0.0:38013->197.231.176.53:7000: i/o timeout
  f015763: 'dial, South Africa, Cape Town', // * [/ip4/13.244.159.54/tcp/8888] dial tcp4 0.0.0.0:38013->13.244.159.54:8888: i/o timeout
  f015777: 'dial, Australia, Sydney', // * [/ip4/52.63.43.218/tcp/8888] dial tcp4 0.0.0.0:38013->52.63.43.218:8888: i/o timeout
  f015795: 'dial, Brazil, Sao Paulo', // * [/ip4/18.230.133.57/tcp/8888] dial tcp4 0.0.0.0:38013->18.230.133.57:8888: i/o timeout
  f015801: 'dial, Germany, Ismaning', // * [/ip4/88.198.66.42/tcp/443] failed to negotiate security protocol: EOF
  f015803: 'dial, Germany', // * [/ip4/46.4.79.213/tcp/443] dial tcp4 46.4.79.213:443: connect: connection refused
  f015804: 'dial, Germany, Ismaning', // * [/ip4/88.198.67.156/tcp/443] dial tcp4 88.198.67.156:443: connect: connection refused
  f015806: 'dial, Germany', // * [/ip4/176.9.59.6/tcp/443] dial tcp4 0.0.0.0:38013->176.9.59.6:443: i/o timeout
  f015807: 'dial, Germany', // * [/ip4/46.4.79.203/tcp/443] dial tcp4 0.0.0.0:38013->46.4.79.203:443: i/o timeout
  f015818: 'dial, Netherlands', // * [/ip4/66.248.204.121/tcp/2345] dial tcp4 0.0.0.0:38013->66.248.204.121:2345: i/o timeout
  f015819: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.5:23450: i/o timeout
  f015826: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.2:23450: i/o timeout
  f015839: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.3:23450: i/o timeout
  f015845: 'dial, China, Fuzhou', // * [/ip4/220.176.125.20/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.20:23450: i/o timeout
  f015846: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:38013->45.192.184.195:23450: i/o timeout
  f015848: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12321] dial tcp4 0.0.0.0:38013->8.209.107.150:12321: i/o timeout
  f015852: 'dial, China, Fuzhou', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:38013->45.192.184.195:23450: i/o timeout
  f015855: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.4:23450: i/o timeout
  f015860: 'dial, Ukraine, Odessa', // * [/ip4/178.212.192.216/tcp/64005] dial tcp4 178.212.192.216:64005: connect: connection refused
  f015861: 'dial, Ukraine, Odessa', // * [/ip4/178.212.192.216/tcp/64006] dial tcp4 178.212.192.216:64006: connect: connection refused
  f015862: 'dial, Ukraine, Odessa', // * [/ip4/178.212.192.216/tcp/64007] dial tcp4 178.212.192.216:64007: connect: connection refused
  f015866: 'dial, China, Fuzhou', // * [/ip4/220.176.125.10/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.10:23450: i/o timeout
  f015872: 'dial, China, Fuzhou', // * [/ip4/45.192.184.205/tcp/23450] dial tcp4 0.0.0.0:38013->45.192.184.205:23450: i/o timeout
  f015873: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.98:23450: i/o timeout
  f015884: 'dial, China, Fuzhou', // * [/ip4/45.192.184.203/tcp/23450] dial tcp4 0.0.0.0:38013->45.192.184.203:23450: i/o timeout
  f015887: 'dial, China, Fuzhou', // * [/ip4/45.192.184.201/tcp/23450] dial tcp4 0.0.0.0:38013->45.192.184.201:23450: i/o timeout
  f015888: 'dial, China, Fuzhou', // * [/ip4/45.192.184.207/tcp/23450] dial tcp4 0.0.0.0:38013->45.192.184.207:23450: i/o timeout
  f015894: 'dial, China, Fuzhou', // * [/ip4/45.192.184.199/tcp/23450] dial tcp4 0.0.0.0:38013->45.192.184.199:23450: i/o timeout
  f015898: 'dial, Lithuania', // * [/ip4/188.214.129.85/tcp/36899] dial tcp4 188.214.129.85:36899: connect: connection refused
  f015900: 'dial, Germany', // * [/ip4/46.4.63.227/tcp/443] dial tcp4 46.4.63.227:443: connect: connection refused
  f015903: 'dial, Germany', // * [/ip4/136.243.48.38/tcp/443] dial tcp4 136.243.48.38:443: connect: connection refused
  f015905: 'dial, Lithuania', // * [/ip4/188.214.129.49/tcp/34751] dial tcp4 0.0.0.0:38013->188.214.129.49:34751: i/o timeout
  f015907: 'dial, Canada, Calgary', // * [/ip4/70.77.238.98/tcp/46717] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPwoUPJMRoyTS4UJTV4jAeYY4raxtAPEw8VAfgENxBSwg, but remote key matches 12D3KooWNPbyqVXuPQQR3vocTMUbjipL95qHxGjoug56do1r2SCZ
  f015910: 'dial, Turkey', // * [/ip4/185.23.181.67/tcp/23450] dial tcp4 0.0.0.0:38013->185.23.181.67:23450: i/o timeout
  f015914: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:38013->182.99.0.99:23450: i/o timeout
  f015918: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.2:23450: i/o timeout
  f015919: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12316] dial tcp4 0.0.0.0:38013->8.209.107.150:12316: i/o timeout
  f015922: 'dial, China', // * [/ip4/162.62.55.44/tcp/12317] dial tcp4 162.62.55.44:12317: connect: connection refused
  f015925: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12318] dial tcp4 0.0.0.0:38013->8.209.107.150:12318: i/o timeout
  f015926: 'dial, China', // * [/ip4/162.62.55.44/tcp/12319] dial tcp4 162.62.55.44:12319: connect: connection refused
  f015928: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.3:23450: i/o timeout
  f015933: 'dial, Finland, Helskinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:38013->95.216.99.39:46717: i/o timeout
  f015947: 'dial, Finland, Helsinki', // * [/ip4/95.217.114.57/tcp/45381] dial tcp4 0.0.0.0:38013->95.217.114.57:45381: i/o timeout
  f016024: 'dial, China, Fuzhou', // * [/ip4/220.176.125.10/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.10:23450: i/o timeout
  f016056: 'dial, USA, Arlington', // * [/ip4/69.251.248.175/tcp/6679] dial tcp4 0.0.0.0:38013->69.251.248.175:6679: i/o timeout
  f016202: 'dial, Korea, Songpa-gu', // * [/ip4/118.223.164.15/tcp/42155] dial tcp4 0.0.0.0:38013->118.223.164.15:42155: i/o timeout
  f016207: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused
  f016238: 'dial, NR', // * [/ip4/192.168.100.27/tcp/57670] dial tcp4 0.0.0.0:38013->192.168.100.27:57670: i/o timeout
  f016263: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f016279: 'dial, Finland, Helsinki', // * [/ip4/95.216.68.181/tcp/46717] dial tcp4 95.216.68.181:46717: connect: connection refused
  f016297: 'dial, China, Mianyang + USA', // * [/ip4/47.254.128.95/tcp/7000] dial tcp4 0.0.0.0:38013->47.254.128.95:7000: i/o timeout  * [/ip4/47.254.25.128/tcp/7000] dial tcp4 0.0.0.0:38013->47.254.25.128:7000: i/o timeout
  f016302: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.5:23450: i/o timeout
  f016309: 'dial, USA, Boardman', // * [/ip4/52.41.243.212/tcp/28003] dial tcp4 0.0.0.0:38013->52.41.243.212:28003: i/o timeout
  f016364: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 0.0.0.0:38013->36.33.216.70:10240: i/o timeout
  f016412: 'dial, China, Taiwan, Taipei', // * [/ip4/35.234.30.173/tcp/555] dial tcp4 35.234.30.173:555: connect: connection refused
  f016419: 'dial, USA, Mountain View', // * [/ip6/2601:647:4700:7e:b85f:e6cd:bc32:478f/tcp/44545] dial tcp6 [2601:647:4700:7e:b85f:e6cd:bc32:478f]:44545: connect: network is unreachable  * [/ip6/::1/tcp/44545] dial tcp6 [::1]:44545: connect: connection refused  * [/ip4/127.0.0.1/tcp/33585] dial tcp4 127.0.0.1:33585: connect: connection refused  * [/ip4/192.168.86.244/tcp/33585] dial tcp4 0.0.0.0:38013->192.168.86.244:33585: i/o timeout  * [/ip4/73.158.190.21/tcp/58442] dial tcp4 0.0.0.0:38013->73.158.190.21:58442: i/o timeout  * [/ip4/73.158.190.21/tcp/26715] dial tcp4 0.0.0.0:38013->73.158.190.21:26715: i/o timeout
  f016479: 'dial, China, Dongguan', // * [/ip4/218.16.123.133/tcp/4001] dial tcp4 0.0.0.0:38013->218.16.123.133:4001: i/o timeout
  f016525: 'dial, China, Guangzhou', // * [/ip4/8.210.76.199/tcp/18899] dial tcp4 0.0.0.0:38013->8.210.76.199:18899: i/o timeout
  f016579: 'dial, USA, Howell', // * [/ip4/96.64.7.172/tcp/5472] dial tcp4 0.0.0.0:38013->96.64.7.172:5472: i/o timeout
  f016603: 'dial, China, Dongguan', // * [/ip4/121.10.0.90/tcp/57670] dial tcp4 121.10.0.90:57670: i/o timeout
  f016659: 'dial, USA, Alpharetta', // * [/ip4/192.168.1.64/tcp/41931] dial tcp4 0.0.0.0:38013->192.168.1.64:41931: i/o timeout
  f016850: 'dial, Japan', // * [/ip4/163.44.165.168/tcp/30333] dial tcp4 0.0.0.0:38013->163.44.165.168:30333: i/o timeout
  f016859: 'dial, NR', // * [/ip4/116.30.196.165/tcp/16859] dial tcp4 116.30.196.165:16859: connect: connection refused
  f016866: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.4:23450: i/o timeout
  f016917: 'dial, China, Guangdong', // * [/ip4/183.232.116.200/tcp/4001] dial tcp4 183.232.116.200:4001: connect: connection refused
  f017038: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.2:23450: i/o timeout
  f017067: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.3:23450: i/o timeout
  f017082: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.194/tcp/23450] dial tcp4 0.0.0.0:38013->45.192.184.194:23450: i/o timeout
  f017136: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f017193: 'dial, Singapore', // * [/ip4/8.211.49.16/tcp/14567] dial tcp4 0.0.0.0:38013->8.211.49.16:14567: i/o timeout
  f017194: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 0.0.0.0:38013->36.33.216.70:10240: i/o timeout
  f017200: 'dial, Lithuania', // * [/ip4/46.166.165.72/tcp/10240] dial tcp4 0.0.0.0:38013->46.166.165.72:10240: i/o timeout
  f017244: 'dial, Korea, Seoul', // * [/ip4/141.164.34.113/tcp/41111] dial tcp4 141.164.34.113:41111: connect: connection refused
  f017250: 'dial, China, Zhejiang', // * [/ip4/161.117.88.227/tcp/35252] dial tcp4 0.0.0.0:38013->161.117.88.227:35252: i/o timeout
  f017266: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.2:23450: i/o timeout
  f017273: 'dial, China, Liaoning', // * [/ip4/116.132.221.10/tcp/10241] dial tcp4 116.132.221.10:10241: connect: connection refused
  f017285: 'dial, China, Maoming', // * [/ip4/61.143.232.26/tcp/12345] failed to negotiate security protocol: read tcp4 66.70.191.245:38013->61.143.232.26:12345: read: connection reset by peer
  f017488: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 0.0.0.0:38013->35.224.87.15:24002: i/o timeout
  f017635: 'dial, China, Nanchong', // * [/ip4/124.161.87.252/tcp/32005] dial tcp4 0.0.0.0:38013->124.161.87.252:32005: i/o timeout
  f017672: 'dial, China, Cangzhou', // * [/ip4/221.195.0.71/tcp/10240] dial tcp4 0.0.0.0:38013->221.195.0.71:10240: i/o timeout
  f017734: 'dial, Australia, Sydney', // * [/ip4/14.203.98.125/tcp/5472] dial tcp4 14.203.98.125:5472: connect: connection refused
  f017738: 'dial, China', // * [/ip4/101.36.64.212/tcp/42545] dial tcp4 0.0.0.0:38013->101.36.64.212:42545: i/o timeout
  f017794: 'dial, USA, Columbus', // * [/ip4/18.188.2.141/tcp/28003] dial tcp4 0.0.0.0:38013->18.188.2.141:28003: i/o timeout
  f017795: 'dial, USA, Columbus', // * [/ip4/18.216.108.19/tcp/28003] dial tcp4 0.0.0.0:38013->18.216.108.19:28003: i/o timeout
  f017796: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.4:23450: i/o timeout
  f017970: 'dial, China, Baoding', // * [/ip4/222.222.135.67/tcp/37745] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJREb9Cqrz8z3P7WaoJKXWYFCW4aSChLFE9PxSRLQp187, but remote key matches 12D3KooWHSsPEuVtbpYBCo22qdf7V5gn7eUTvChfXH8y246a58Jm
  f018088: 'dial, USA, Mountain View', // * [/ip6/2601:647:4700:7e:8d28:74f1:99b6:9807/tcp/36371] dial tcp6 [2601:647:4700:7e:8d28:74f1:99b6:9807]:36371: connect: network is unreachable  * [/ip4/127.0.0.1/tcp/41941] dial tcp4 127.0.0.1:41941: connect: connection refused  * [/ip6/::1/tcp/36371] dial tcp6 [::1]:36371: connect: connection refused  * [/ip4/73.158.190.21/tcp/52286] dial tcp4 0.0.0.0:38013->73.158.190.21:52286: i/o timeout  * [/ip4/73.158.190.21/tcp/39083] dial tcp4 0.0.0.0:38013->73.158.190.21:39083: i/o timeout  * [/ip4/192.168.86.244/tcp/41941] dial tcp4 0.0.0.0:38013->192.168.86.244:41941: i/o timeout
  f018119: 'dial, China, Dongguan', // * [/ip4/113.105.174.9/tcp/10000] dial tcp4 0.0.0.0:38013->113.105.174.9:10000: i/o timeout
  f018203: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/5678] dial tcp4 0.0.0.0:38013->95.216.99.39:5678: i/o timeout
  f018429: 'dial, Korea, Hwaseong-si', // * [/ip4/112.222.105.76/tcp/24102] dial tcp4 112.222.105.76:24102: i/o timeout
  f018440: 'dial, Russia, St. Petersburg', // * [/ip4/188.187.61.69/tcp/44389] dial tcp4 0.0.0.0:38013->188.187.61.69:44389: i/o timeout
  f018476: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.4:23450: i/o timeout
  f018493: 'dial, Denmark, Kobenhavn S', // * [/ip4/185.50.195.183/tcp/10243] dial tcp4 0.0.0.0:38013->185.50.195.183:10243: i/o timeout
  f018498: 'dial, Singapore', // * [/ip4/8.209.119.18/tcp/14567] dial tcp4 0.0.0.0:38013->8.209.119.18:14567: i/o timeout
  f018506: 'dial, USA, New York', // * [/ip4/47.254.77.92/tcp/41112] failed to negotiate security protocol: EOF
  f018509: 'dial, China, Dongguan', // * [/ip4/113.105.174.6/tcp/10000] dial tcp4 113.105.174.6:10000: connect: no route to host
  f018525: 'dial, USA, Queens', // * [/ip4/24.90.181.106/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPPX51KkQcQhzM1LKBbu3uV2ZkFsBSmcDjLG7kgKqQbp4, but remote key matches 12D3KooWHcpqZ9Ps8cXHk2JaQVqAhjC7cPiLM14YKTmfAXT1LN3M
  f018540: 'dial, Netherlands', // * [/ip4/185.232.59.178/tcp/3347] dial tcp4 0.0.0.0:38013->185.232.59.178:3347: i/o timeout
  f018544: 'dial, Korea, Uijeongbu-si', // * [/ip4/119.193.190.72/tcp/5472] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGgihyz3aZvtSpXyZLtarqMxESor6KXzEp3poz8DRwTuZ, but remote key matches 12D3KooWBhrQUQC5gWtHeRNS1V7ThxEv4hKLCk8Z4PZNy7T1oruT
  f018562: 'dial, New Zealand, Masterton', // * [/ip4/121.99.224.109/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWC9jegSfiHcei2BeABkn1PA164oQ7kpx2AQ12ix136988, but remote key matches 12D3KooWNobH75Kmsr4LhtLbWXpViuRoqtiPUcso2VutUQc4TrtL  * [/ip4/121.99.224.109/tcp/10241] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWC9jegSfiHcei2BeABkn1PA164oQ7kpx2AQ12ix136988, but remote key matches 12D3KooWDcBfXqrBJvVEZZNfu41waaD2rLDM1H5xNBTJEMu5iec5
  f018772: 'dial, Australia', // * [/ip4/122.252.4.48/tcp/23000] dial tcp4 122.252.4.48:23000: i/o timeout
  f018803: 'dial, Korea, Seodaemun-gu', // * [/ip4/127.0.0.1/tcp/2345] failed to negotiate security protocol: message did not have trailing newline  * [/ip4/119.192.136.11/tcp/12345] dial tcp4 119.192.136.11:12345: connect: connection refused
  f018806: 'dial, Finland, Helsinki', // * [/ip4/95.217.114.57/tcp/45381] dial tcp4 0.0.0.0:38013->95.217.114.57:45381: i/o timeout
  f018809: 'dial, USA, New York', // * [/ip4/45.61.255.20/tcp/41114] dial tcp4 0.0.0.0:38013->45.61.255.20:41114: i/o timeout
  f018851: 'dial, China, Deyang + Singapore', // * [/ip4/103.242.134.36/tcp/12288] failed to negotiate security protocol: read tcp4 66.70.191.245:38013->103.242.134.36:12288: read: connection reset by peer
  f018884: 'dial, Russia', // * [/ip4/46.148.230.142/tcp/34745] dial tcp4 0.0.0.0:38013->46.148.230.142:34745: i/o timeout
  f018905: 'dial, Brazil, Sao Paulo', // * [/ip4/18.228.17.31/tcp/2347] dial tcp4 0.0.0.0:38013->18.228.17.31:2347: i/o timeout
  f018911: 'dial, USA, Portland', // * [/ip4/170.33.12.164/tcp/9090] dial tcp4 0.0.0.0:38013->170.33.12.164:9090: i/o timeout
  f019002: 'dial, USA', // * [/ip4/47.245.132.152/tcp/14567] dial tcp4 0.0.0.0:38013->47.245.132.152:14567: i/o timeout
  f019006: 'dial, Vietman, Ho Chi Minh City + China, Hong Kong', // * [/ip4/119.28.141.16/tcp/2312] dial tcp4 0.0.0.0:38013->119.28.141.16:2312: i/o timeout
  f019007: 'dial, China, Shenzhen + Hong Kong', // * [/ip4/154.91.38.15/tcp/51109] dial tcp4 154.91.38.15:51109: connect: connection refused  * [/ip4/103.44.247.132/tcp/51109] dial tcp4 103.44.247.132:51109: connect: connection refused
  f019015: 'dial, China, Hangzhou + Singapore', // * [/ip4/170.33.12.187/tcp/7087] dial tcp4 0.0.0.0:38013->170.33.12.187:7087: i/o timeout  * [/ip4/170.33.12.188/tcp/7087] dial tcp4 0.0.0.0:38013->170.33.12.188:7087: i/o timeout
  f019022: "dial, China, Xi'an", // * [/ip4/113.200.105.8/tcp/1347] dial tcp4 0.0.0.0:38013->113.200.105.8:1347: i/o timeout
  f019041: 'dial, Singapore', // * [/ip4/47.110.140.124/tcp/10242] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJCDVwifzmPY667ySn4B5hGGReR6up3HzhSs5YJQjvSVt, but remote key matches 12D3KooWPfeHN7MU6n8bhMwiHUb7C8RbyqdNUzwsEWxSgTA9q9zm  * [/ip4/8.211.4.148/tcp/10242] dial tcp4 0.0.0.0:38013->8.211.4.148:10242: i/o timeout
  f019053: 'dial, Singapore', // * [/ip4/8.211.4.148/tcp/10243] dial tcp4 0.0.0.0:38013->8.211.4.148:10243: i/o timeout
  f019056: 'dial, South Africa, Cape Town', // * [/ip4/13.244.216.178/tcp/16079] dial tcp4 0.0.0.0:38013->13.244.216.178:16079: i/o timeout
  f019068: "dial, China, Ya'an, fri", // * [/ip4/110.188.25.2/tcp/30032] dial tcp4 110.188.25.2:30032: connect: connection refused
  f019071: 'dial, USA, New York', // * [/ip4/45.61.255.21/tcp/12345] dial tcp4 0.0.0.0:38013->45.61.255.21:12345: i/o timeout
  f019073: 'dial, Germany, Frankfurt', // * [/ip4/18.157.80.183/tcp/30005] dial tcp4 0.0.0.0:38013->18.157.80.183:30005: i/o timeout
  f019074: 'dial, China, Guangdong', // * [/ip4/192.168.2.55/tcp/3000] dial tcp4 0.0.0.0:38013->192.168.2.55:3000: i/o timeout
  f019087: 'dial, South Africa, Johannesburg', // * [/ip4/152.32.140.119/tcp/41116] dial tcp4 0.0.0.0:38013->152.32.140.119:41116: i/o timeout
  f019090: 'dial, South Africa, Johannesburg', // * [/ip4/152.32.140.119/tcp/41115] dial tcp4 0.0.0.0:38013->152.32.140.119:41115: i/o timeout
  f019091: 'dial, China, Chengdu', // * [/ip4/182.131.4.194/tcp/10080] dial tcp4 0.0.0.0:38013->182.131.4.194:10080: i/o timeout
  f019094: 'dial, Brazil, Sao Paulo', // * [/ip4/177.71.173.122/tcp/8888] dial tcp4 0.0.0.0:38013->177.71.173.122:8888: i/o timeout
  f019097: 'dial, Russia, Irkutsk', // * [/ip4/90.188.227.20/tcp/46717] dial tcp4 90.188.227.20:46717: connect: connection refused
  f019133: 'dial, UK, Mansfield', // * [/ip4/92.12.185.10/tcp/24002] dial tcp4 0.0.0.0:38013->92.12.185.10:24002: i/o timeout
  f019145: 'dial, Brazil, Sao Paulo', // * [/ip4/54.232.153.175/tcp/16088] dial tcp4 0.0.0.0:38013->54.232.153.175:16088: i/o timeout
  f019150: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.4:23450: i/o timeout
  f019155: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15110] dial tcp4 0.0.0.0:38013->101.206.156.204:15110: i/o timeout
  f019169: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.40.58/tcp/14567] dial tcp4 0.0.0.0:38013->15.228.40.58:14567: i/o timeout
  f019174: 'dial, UK, Halifax', // * [/ip4/185.177.124.24/tcp/42012] dial tcp4 185.177.124.24:42012: connect: no route to host
  f019182: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15111] dial tcp4 0.0.0.0:38013->101.206.156.204:15111: i/o timeout
  f019185: 'dial, China, Beijing', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f019196: 'dial, China, Shenzhen + Hong Kong', // * [/ip4/103.44.247.132/tcp/51101] dial tcp4 103.44.247.132:51101: connect: connection refused  * [/ip4/115.91.38.15/tcp/51101] dial tcp4 0.0.0.0:38013->115.91.38.15:51101: i/o timeout
  f019233: 'dial, Russia', // * [/ip4/158.255.7.196/tcp/46207] dial tcp4 0.0.0.0:38013->158.255.7.196:46207: i/o timeout
  f019248: 'dial, USA, Council Bluffs', // * [/ip4/35.239.142.4/tcp/46717] dial tcp4 0.0.0.0:38013->35.239.142.4:46717: i/o timeout
  f019249: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 0.0.0.0:38013->35.224.87.15:24002: i/o timeout
  f019280: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.4:23450: i/o timeout
  f019281: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:38013->45.192.184.195:23450: i/o timeout
  f019317: 'dial, Brazil, Sao Paulo', // * [/ip4/177.71.163.156/tcp/10240] dial tcp4 0.0.0.0:38013->177.71.163.156:10240: i/o timeout
  f019325: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15090] dial tcp4 0.0.0.0:38013->101.206.156.204:15090: i/o timeout
  f019326: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15093] dial tcp4 0.0.0.0:38013->101.206.156.204:15093: i/o timeout
  f019327: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15094] dial tcp4 0.0.0.0:38013->101.206.156.204:15094: i/o timeout
  f019352: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15095] dial tcp4 0.0.0.0:38013->101.206.156.204:15095: i/o timeout
  f019399: 'dial, Korea, Busan', // * [/ip4/115.22.10.76/tcp/30044] dial tcp4 0.0.0.0:38013->115.22.10.76:30044: i/o timeout  * [/ip4/106.244.15.21/tcp/14050] dial tcp4 106.244.15.21:14050: i/o timeout
  f019459: 'dial, USA, Alpharetta', // * [/ip4/45.26.152.112/tcp/4137] dial tcp4 45.26.152.112:4137: connect: connection refused
  f019462: 'dial, Netherlands, Groningen', // * [/ip4/34.90.112.11/tcp/46717] dial tcp4 0.0.0.0:38013->34.90.112.11:46717: i/o timeout
  f019515: 'dial, Netherlands, Groningen', // * [/ip4/35.204.3.95/tcp/46717] dial tcp4 0.0.0.0:38013->35.204.3.95:46717: i/o timeout
  f019523: 'dial, USA, Los Angeles', // * [/ip4/47.156.151.169/tcp/33505] dial tcp4 0.0.0.0:38013->47.156.151.169:33505: i/o timeout
  f019534: 'dial, USA, Beaverton', // * [/ip4/50.39.131.247/tcp/9042] dial tcp4 50.39.131.247:9042: connect: connection refused
  f019596: 'dial, USA, Queens', // * [/ip4/24.90.181.106/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJ7XhEorySoQkEyajCdcsr9qcesafyFqS8apNeWwF26Ke, but remote key matches 12D3KooWHcpqZ9Ps8cXHk2JaQVqAhjC7cPiLM14YKTmfAXT1LN3M
  f019616: 'dial, USA, Marlborough', // * [/ip4/71.248.173.173/tcp/1347] dial tcp4 0.0.0.0:38013->71.248.173.173:1347: i/o timeout
  f019637: 'dial, China, Nanchang', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.4:23450: i/o timeout
  f019638: 'dial, Germany, Frankfurt', // * [/ip4/1.183.72.210/tcp/30005] dial tcp4 1.183.72.210:30005: connect: connection refused
  f019660: 'dial, South Korea, Cheonan', // * [/ip4/112.167.204.88/tcp/10241] dial tcp4 112.167.204.88:10241: i/o timeout
  f019661: 'dial, Russia, Pyatigorsk', // * [/ip4/217.13.216.202/tcp/5472] dial tcp4 217.13.216.202:5472: connect: connection refused
  f019710: 'dial, Australia, Sydney', // * [/ip4/13.55.45.217/tcp/27002] dial tcp4 0.0.0.0:38013->13.55.45.217:27002: i/o timeout
  f019779: 'dial, China, Xuancheng', // * [/ip4/117.71.104.68/tcp/10000] dial tcp4 0.0.0.0:38013->117.71.104.68:10000: i/o timeout
  f019820: 'dial, Germany', // * [/ip6/2a01:4f8:212:2b45::2/tcp/33731] dial tcp6 [2a01:4f8:212:2b45::2]:33731: connect: network is unreachable  * [/ip4/136.243.77.118/tcp/41679] dial tcp4 136.243.77.118:41679: connect: connection refused
  f020315: 'dial, China, Guangzhou', // * [/ip4/103.104.170.72/tcp/56432] dial tcp4 0.0.0.0:38013->103.104.170.72:56432: i/o timeout
  f020330: 'dial, USA', // * [/ip4/8.130.24.60/tcp/14567] dial tcp4 8.130.24.60:14567: connect: connection refused
  f020331: 'dial, USA', // * [/ip4/39.101.70.154/tcp/14567] dial tcp4 39.101.70.154:14567: connect: connection refused
  f020358: 'dial, China, Xinxiang', // * [/ip4/27.50.142.73/tcp/1347] dial tcp4 27.50.142.73:1347: connect: connection refused
  f020388: 'dial, Korea, Uijeongbu-si', // * [/ip4/119.193.190.72/tcp/5472] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPdmxWWt6PobzkuCgUsUZwyDYM9TGnvAu38rnd4TshTLZ, but remote key matches 12D3KooWBhrQUQC5gWtHeRNS1V7ThxEv4hKLCk8Z4PZNy7T1oruT
  f020393: 'dial, China, Beijing', // * [/ip4/123.125.194.158/tcp/6789] dial tcp4 0.0.0.0:38013->123.125.194.158:6789: i/o timeout
  f020401: 'dial, USA, Raleigh', // * [/ip4/136.56.12.204/tcp/27972] dial tcp4 136.56.12.204:27972: i/o timeout
  f020431: 'dial, Korea, Seoul', // * [/ip4/125.128.51.180/tcp/24001] dial tcp4 0.0.0.0:38013->125.128.51.180:24001: i/o timeout
  f020452: 'dial, China, Hangzhou + Singapore', // * [/ip4/10.10.12.21/tcp/7000] dial tcp4 0.0.0.0:38013->10.10.12.21:7000: i/o timeout  * [/ip4/170.33.12.186/tcp/17012] dial tcp4 0.0.0.0:38013->170.33.12.186:17012: i/o timeout
  f020516: 'dial, China, Dalian', // * [/ip4/42.202.134.189/tcp/33666] dial tcp4 0.0.0.0:38013->42.202.134.189:33666: i/o timeout
  f020522: 'dial, Singapore', // * [/ip4/8.211.49.16/tcp/14567] dial tcp4 0.0.0.0:38013->8.211.49.16:14567: i/o timeout
  f020572: 'dial, China, Nanchang', // * [/ip4/220.176.125.123/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.123:23450: i/o timeout
  f020604: 'dial, Singapore', // * [/ip4/8.209.106.203/tcp/14567] dial tcp4 0.0.0.0:38013->8.209.106.203:14567: i/o timeout
  f020608: 'dial, Russia', // * [/ip4/82.148.25.250/tcp/24001] dial tcp4 0.0.0.0:38013->82.148.25.250:24001: i/o timeout
  f020622: 'dial, China, Hong Kong', // * [/ip4/43.228.183.102/tcp/40573] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHF5unBQ9CuS2jnnxCzvRHGiMMQbH487tbfoGUAvhY4ik, but remote key matches 12D3KooWQzhuFoqWfap5FT3hD9jTSc1wiP3Sn735mstACYiPuw75
  f020626: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:38013->73.158.16.48:30390: i/o timeout
  f020631: 'dial, China, Zhejiang', // * [/ip4/47.102.202.230/tcp/5472] dial tcp4 47.102.202.230:5472: connect: connection refused
  f020648: 'dial, China, Shenzhen', // * [/ip4/218.17.62.52/tcp/58693] dial tcp4 218.17.62.52:58693: connect: connection refused
  f020742: 'dial, China, Shanghai + Hangzhou + Shaoxing', // * [/ip4/127.0.0.1/tcp/23456] dial tcp4 127.0.0.1:23456: connect: connection refused  * [/ip6/::1/tcp/34075] dial tcp6 [::1]:34075: connect: connection refused  * [/ip4/175.24.25.61/tcp/53456] failed to negotiate security protocol: read tcp4 66.70.191.245:38013->175.24.25.61:53456: read: connection reset by peer  * [/ip4/10.1.20.13/tcp/23456] dial tcp4 0.0.0.0:38013->10.1.20.13:23456: i/o timeout  * [/ip4/115.236.22.242/tcp/12079] dial tcp4 0.0.0.0:38013->115.236.22.242:12079: i/o timeout
  f020771: 'dial, Japan, Setagaya-ku', // * [/ip4/59.138.253.69/tcp/55555] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWB9hQuvFTwgPe23wsd8tmLGpYF9aXjTy8brZjndR3Ubxv, but remote key matches 12D3KooWByQHVd4RagKK7YT2bS9ifTKurP2WpooVrY5GZZk3MnaC
  f020814: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/11051] dial tcp4 183.63.203.161:11051: connect: connection refused
  f020816: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/11052] dial tcp4 183.63.203.161:11052: connect: connection refused
  f020891: 'dial, China, Wenzhou', // * [/ip4/122.228.196.208/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSitZhuvzGB9mxZvC1rN6ubezTJUrHV2nXxWaBvJQ1Bji, but remote key matches 12D3KooWDLC4HXzHjaMegLssFx9HwMmyNzhGc4XmcSSP9rZaSFyv
  f020923: 'dial, China, Cangzhou', // * [/ip4/221.195.3.147/tcp/10240] dial tcp4 0.0.0.0:38013->221.195.3.147:10240: i/o timeout
  f020967: 'dial, China, Chengdu', // * [/ip4/171.221.236.129/tcp/45001] dial tcp4 171.221.236.129:45001: connect: connection refused
  f021142: 'dial, China, Fuzhou', // * [/ip4/220.176.125.110/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.110:23450: i/o timeout
  f021262: 'dial, China, Shanghai', // * [/ip4/58.33.161.27/tcp/24001] dial tcp4 58.33.161.27:24001: i/o timeout
  f021292: 'dial, China, Hong Kong', // * [/ip4/43.228.183.102/tcp/40573] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKztv937mFfnZpXpHnJP7DFTSMeeJrwjktcs5oSvNmfPN, but remote key matches 12D3KooWQzhuFoqWfap5FT3hD9jTSc1wiP3Sn735mstACYiPuw75
  f021316: 'dial, China, Yangzhou', // * [/ip4/58.220.66.88/tcp/2347] dial tcp4 58.220.66.88:2347: connect: connection refused
  f021328: 'dial, China, Dongguan', // * [/ip4/218.16.123.134/tcp/18888] dial tcp4 0.0.0.0:38013->218.16.123.134:18888: i/o timeout
  f021428: 'dial, Norway, Borgen', // * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAgRs1gYFCWPQopKBh3nZPDfq3yJ7gjyvvmd9dpyw7mHH, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f021461: 'dial, China, Yangzhou + Singapore', // * [/ip4/170.33.12.186/tcp/17361] dial tcp4 0.0.0.0:38013->170.33.12.186:17361: i/o timeout
  f021463: 'dial, China, Mianyang', // * [/ip4/117.175.0.194/tcp/18181] dial tcp4 117.175.0.194:18181: connect: connection refused
  f021475: 'dial, China, Dongguan', // * [/ip4/183.240.203.136/tcp/34567] dial tcp4 183.240.203.136:34567: connect: connection refused
  f021483: 'dial, China, Beijing', // * [/ip4/124.250.42.202/tcp/24567] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQ5cSo6iMXULjKb3SVBaij2UwiPnYPVaaa2USiFraVxox, but remote key matches 12D3KooWPWvmSSgQT8y59FzyFArZdnkBV37wBFyu5TQZ4LWsNXPH
  f021525: 'dial, China, Guangdong', // * [/ip4/121.201.41.87/tcp/14567] dial tcp4 0.0.0.0:38013->121.201.41.87:14567: i/o timeout
  f021536: 'dial, NR', // * [/ip4/183.2.157.247/tcp/7000] dial tcp4 0.0.0.0:38013->183.2.157.247:7000: i/o timeout  * [/ip4/172.20.4.158/tcp/7000] dial tcp4 0.0.0.0:38013->172.20.4.158:7000: i/o timeout
  f021540: 'dial, Germany, Frankfurt, @hsanjuan', // * [/ip4/18.158.237.250/tcp/6666] dial tcp4 18.158.237.250:6666: connect: connection refused
  f021547: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17329] dial tcp4 0.0.0.0:38013->170.33.12.186:17329: i/o timeout
  f021616: 'dial, China, Shanghai', // * [/ip4/58.33.161.26/tcp/24001] dial tcp4 58.33.161.26:24001: i/o timeout
  f021644: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:38013->73.158.16.48:30390: i/o timeout
  f022031: 'dial, China, Maoming', // * [/ip4/61.143.232.26/tcp/12345] failed to negotiate security protocol: read tcp4 66.70.191.245:38013->61.143.232.26:12345: read: connection reset by peer
  f022069: 'dial, China, Hong Kong', // * [/ip4/221.127.8.183/tcp/24001] dial tcp4 0.0.0.0:38013->221.127.8.183:24001: i/o timeout
  f022111: 'dial, China, Quanzhou', // * [/ip4/112.47.13.98/tcp/8081] dial tcp4 0.0.0.0:38013->112.47.13.98:8081: i/o timeout
  f022144: 'dial, China, Fuzhou', // * [/ip4/220.176.125.110/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.110:23450: i/o timeout
  f022146: 'dial, China, Fuzhou', // * [/ip4/220.176.125.123/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.123:23450: i/o timeout
  f022157: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:38013->220.176.125.5:23450: i/o timeout
  f022166: 'dial, Norway, Borgen', // * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLsZ4PQtpyZQpEfXvheZHgirJe7bQmse7brRndyaWs3Jh, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f022227: 'dial, China, Jiangsu', // * [/ip4/112.30.158.226/tcp/10240] dial tcp4 112.30.158.226:10240: connect: connection refused
  f022304: 'dial, China, Taiyuan', // * [/ip4/221.204.177.81/tcp/2222] dial tcp4 0.0.0.0:38013->221.204.177.81:2222: i/o timeout
  f022320: 'dial, Korea, Seoul', // * [/ip4/220.119.37.150/tcp/24001] dial tcp4 0.0.0.0:38013->220.119.37.150:24001: i/o timeout
  f022351: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.97/tcp/24001] dial tcp4 211.114.218.97:24001: connect: connection refused
  f022364: 'dial, Korea, Jungang-gu', // * [/ip4/125.129.37.73/tcp/10241] dial tcp4 0.0.0.0:38013->125.129.37.73:10241: i/o timeout
  f022395: 'dial, USA, Los Angeles', // * [/ip4/76.90.65.135/tcp/48888] dial tcp4 0.0.0.0:38013->76.90.65.135:48888: i/o timeout
  f022399: 'dial, China, Beijing', // * [/ip4/123.125.194.158/tcp/5678] dial tcp4 0.0.0.0:38013->123.125.194.158:5678: i/o timeout
  f022405: 'dial, Russia', // * [/ip4/158.255.7.196/tcp/46175] dial tcp4 0.0.0.0:38013->158.255.7.196:46175: i/o timeout
  f022518: 'dial, DNS:poseidon.technology', // * [/ip4/118.167.112.131/tcp/24000] dial tcp4 118.167.112.131:24000: connect: connection refused
  f022687: 'dial, China, Chengdu', // * [/ip4/182.131.4.194/tcp/10080] dial tcp4 0.0.0.0:38013->182.131.4.194:10080: i/o timeout
  f022737: 'dial, Korea, Gangnum-gu', // * [/ip4/112.216.168.43/tcp/20000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPDeMQg1GK1w8NAnaPS2Pq3DytpW2DZtvQQKA9UheEWAT, but remote key matches 12D3KooWPBwquKY3asxootDXttSQfAUrvotFvv8suATHk2NtRNK6
  f022753: 'dial, China, Hong Kong', // * [/ip4/58.82.195.140/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWEyCxg4tVNDhh9a95GzVfoKr6TZYw1pCbwcMmf2osFttD, but remote key matches 12D3KooWLSjfDHgLQCAmhdsjU9NE7JL2qogfQURgaZXpTLxjsAqQ
  f022780: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.98/tcp/24001] dial tcp4 0.0.0.0:38013->211.114.218.98:24001: i/o timeout
  f022787: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.99/tcp/24001] dial tcp4 0.0.0.0:38013->211.114.218.99:24001: i/o timeout
  f022855: 'dial, Finland, Helsinki', // * [/ip4/95.217.114.5/tcp/45381] dial tcp4 0.0.0.0:38013->95.217.114.5:45381: i/o timeout
  f022913: 'dial, Korea, Uiwang', // * [/ip4/211.170.25.239/tcp/20000] dial tcp4 211.170.25.239:20000: i/o timeout
  f022976: 'dial, Korea, Cheongju-si', // * [/ip4/112.167.204.88/tcp/10241] dial tcp4 112.167.204.88:10241: i/o timeout
  f023181: 'dial, DNS:poseidon.technology', // * [/ip4/140.113.194.250/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWL42QpczhsrHfWGC3L38LFac8vfibWfub8ELohMA1ZjjC, but remote key matches 12D3KooWPcST189CRdZ2BLrE5NhFz2YQwcfCWdabj12FWwVNBjYj
  f023190: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 0.0.0.0:38013->36.33.216.70:10240: i/o timeout
  f023200: 'dial, China, Shanghai', // * [/ip4/175.24.25.61/tcp/13457] failed to negotiate security protocol: read tcp4 66.70.191.245:38013->175.24.25.61:13457: read: connection reset by peer
  f023202: 'dial, China, Wuxi', // * [/ip4/58.215.232.74/tcp/10200] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBrUUKAXnschtUgweFhcqt4dEMRkaToUH6hpWxwviM3d2, but remote key matches 12D3KooWPSS9P7FWDoCmBpqt9NGSjbYyFTajiR3wd2VxtfeDiwNN  * [/ip4/192.168.1.18/tcp/1020] dial tcp4 0.0.0.0:38013->192.168.1.18:1020: i/o timeout
  f023219: 'dial, NR', // * [/ip4/116.132.221.24/tcp/42990] dial tcp4 116.132.221.24:42990: connect: connection refused
  f023229: 'dial, China, Shandong', // * [/ip4/106.74.192.3/tcp/36980] dial tcp4 0.0.0.0:38013->106.74.192.3:36980: i/o timeout
  f023490: 'dial, Ukraine, Kyiv', // * [/ip4/91.224.25.51/tcp/6671] dial tcp4 0.0.0.0:38013->91.224.25.51:6671: i/o timeout
  f023492: 'dial, China, Beijing', // * [/ip4/120.232.96.37/tcp/20200] failed to negotiate security protocol: read tcp4 66.70.191.245:38013->120.232.96.37:20200: read: connection reset by peer
  f023518: 'dial, China, Taiyuan', // * [/ip4/221.204.177.81/tcp/24001] dial tcp4 0.0.0.0:38013->221.204.177.81:24001: i/o timeout
  f023549: 'dial, China, Zhejiang', // * [/ip4/47.102.202.230/tcp/5472] dial tcp4 47.102.202.230:5472: connect: connection refused
  f023573: 'dial, Japan, Kumamoto', // * [/ip4/203.189.40.203/tcp/10252] dial tcp4 203.189.40.203:10252: connect: connection refused
  f023583: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.120/tcp/24001] dial tcp4 211.114.218.120:24001: connect: connection refused
  f023586: 'dial, USA, Germantown', // * [/ip4/96.255.216.221/tcp/23432] dial tcp4 0.0.0.0:38013->96.255.216.221:23432: i/o timeout
  f023627: 'dial, China, Zhongwei', // * [/ip4/8.8.8.8/tcp/16666] dial tcp4 0.0.0.0:38013->8.8.8.8:16666: i/o timeout
  f023654: 'dial, China, Hong Kong', // * [/ip4/103.100.152.118/tcp/24001] dial tcp4 0.0.0.0:38013->103.100.152.118:24001: i/o timeout
  f023655: 'dial, Australia, Brisbane', // * [/ip4/144.137.18.224/tcp/54321] dial tcp4 144.137.18.224:54321: connect: no route to host
  f023674: 'dial, China, Fuzhou', // * [/ip4/220.176.125.99/tcp/23450] dial tcp4 220.176.125.99:23450: connect: connection refused
  f023937: 'dial, China, Fuzhou', // * [/ip4/220.176.125.99/tcp/23450] dial tcp4 220.176.125.99:23450: connect: connection refused
  f024025: 'dial, China, Chengdu', // * [/ip4/171.221.236.129/tcp/32759] dial tcp4 171.221.236.129:32759: connect: connection refused
  f024030: 'dial, Korea, Gwangju', // * [/ip4/121.148.37.39/tcp/42055] dial tcp4 121.148.37.39:42055: connect: connection refused
  f024070: 'dial, Japan, Setagaya-ku', // * [/ip4/59.138.253.69/tcp/55555] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLmKkqK47NBUy32s67r1ayuvsYkpvsKiEDZUvEAWahX1W, but remote key matches 12D3KooWByQHVd4RagKK7YT2bS9ifTKurP2WpooVrY5GZZk3MnaC
  f024108: 'dial, Korea', // * [/ip4/59.23.202.120/tcp/23234] dial tcp4 59.23.202.120:23234: connect: connection refused
  f024127: 'dial, China, Fuzhou', // * [/ip4/220.176.125.98/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFhqR3NENS74eeWYXVm7vcYjiwQM868a4uMNtFKPkixP7, but remote key matches 12D3KooWP7azhE6mab2rmwRGyYyYzr659tpjuwrCC7Facct2gPmZ
  f024130: 'dial, Korea', // * [/ip4/59.23.202.120/tcp/23235] dial tcp4 59.23.202.120:23235: connect: connection refused
  f024137: 'dial, NR', // * [/ip4/8.130.25.208/tcp/14567] dial tcp4 8.130.25.208:14567: connect: connection refused
  f024150: 'dial, UK, Mansfield', // * [/ip6/::1/tcp/40715] dial tcp6 [::1]:40715: connect: connection refused  * [/ip4/127.0.0.1/tcp/42971] dial tcp4 127.0.0.1:42971: connect: connection refused  * [/ip4/192.168.0.124/tcp/42971] dial tcp4 0.0.0.0:38013->192.168.0.124:42971: i/o timeout
  f024190: 'dial, China, Wenzhou', // * [/ip4/122.228.196.208/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQHPkEDKyJHgsVzg8t8WA59AuGYbazD2hDMktKJHBJVc6, but remote key matches 12D3KooWDLC4HXzHjaMegLssFx9HwMmyNzhGc4XmcSSP9rZaSFyv
  f024521: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.31/tcp/10241] dial tcp4 0.0.0.0:38013->59.6.127.31:10241: i/o timeout
  f024565: 'dial, Korea, Incheon', // * [/ip4/52.78.230.89/tcp/46469] dial tcp4 0.0.0.0:38013->52.78.230.89:46469: i/o timeout
  f024617: 'dial, Korea, Bucheon-si', // * [/ip4/119.197.20.93/tcp/24001] dial tcp4 0.0.0.0:38013->119.197.20.93:24001: i/o timeout
  f024800: 'dial, China, Hong Kong', // * [/ip4/193.112.116.169/tcp/2830] dial tcp4 0.0.0.0:38013->193.112.116.169:2830: i/o timeout  * [/ip4/119.28.141.16/tcp/2830] dial tcp4 0.0.0.0:38013->119.28.141.16:2830: i/o timeout
  f024983: 'dial, China, Hong Kong', // * [/ip4/103.100.152.129/tcp/24001] dial tcp4 0.0.0.0:38013->103.100.152.129:24001: i/o timeout
  f024985: 'dial, China, Shenzhen', // * [/ip4/192.168.0.175/tcp/3000] dial tcp4 0.0.0.0:38013->192.168.0.175:3000: i/o timeout
  f024986: 'dial, China, Zhongshan', // * [/ip4/192.168.2.64/tcp/3000] dial tcp4 0.0.0.0:38013->192.168.2.64:3000: i/o timeout
  f025002: 'dial, NR', // * [/ip4/10.30.8.211/tcp/14567] dial tcp4 0.0.0.0:38013->10.30.8.211:14567: i/o timeout
  f025008: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.34/tcp/10241] dial tcp4 59.6.127.34:10241: connect: connection refused
  f029377: 'dial, China, Suzhou', // * [/ip4/61.155.145.135/tcp/24006] dial tcp4 61.155.145.135:24006: connect: connection refused
  f029412: 'dial, China, Hefei', // * [/ip4/36.33.216.78/tcp/10240] dial tcp4 36.33.216.78:10240: i/o timeout
  f029416: 'dial, undefined', // * [/ip4/0.0.0.0/tcp/1024] dial tcp4 0.0.0.0:1024: connect: connection refused
  f029425: 'dial, NR', // * [/ip4/61.155.145.133/tcp/8086] dial tcp4 61.155.145.133:8086: connect: connection refused
  f029552: 'dial, China, Changsha', // * [/ip4/175.6.2.12/tcp/7001] dial tcp4 175.6.2.12:7001: connect: connection refused
  f029556: 'dial, China, Wuxi', // * [/ip4/58.215.232.74/tcp/10200] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSxGj1viupyBBGuwmhBWpdBJDHGEw7BzcUHqzUHXERH59, but remote key matches 12D3KooWPSS9P7FWDoCmBpqt9NGSjbYyFTajiR3wd2VxtfeDiwNN  * [/ip4/192.168.1.18/tcp/1020] dial tcp4 0.0.0.0:38013->192.168.1.18:1020: i/o timeout
  f029580: 'dial, China, Maoming', // * [/ip4/61.143.232.26/tcp/51900] dial tcp4 61.143.232.26:51900: connect: connection refused
  f029587: 'dial, Hungary', // * [/ip4/213.181.222.23/tcp/43875] dial tcp4 213.181.222.23:43875: connect: connection refused
  f029628: 'dial, Australia, Brisbane', // * [/ip4/144.137.18.224/tcp/54321] dial tcp4 144.137.18.224:54321: i/o timeout
  f029665: 'dial, NR', // * [/ip4/124.95.135.132/tcp/2067] dial tcp4 124.95.135.132:2067: connect: connection refused  * [/ip4/124.95.135.132/tcp/2071] dial tcp4 124.95.135.132:2071: connect: connection refused  * [/ip4/124.95.135.132/tcp/2048] dial tcp4 124.95.135.132:2048: connect: connection refused  * [/ip4/172.1.1.2/tcp/7000] dial tcp4 0.0.0.0:38013->172.1.1.2:7000: i/o timeout
  f030144: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.3/tcp/10241] dial tcp4 0.0.0.0:38013->59.6.127.3:10241: i/o timeout
  f030152: 'dial, China, Changsha', // * [/ip4/175.6.13.58/tcp/7000] dial tcp4 175.6.13.58:7000: connect: connection refused
  f030158: 'dial, China, Hangzhou', // * [/ip4/183.129.161.15/tcp/24001] dial tcp4 0.0.0.0:38013->183.129.161.15:24001: i/o timeout
  f030184: 'dial, USA, Aliquippa', // * [/ip4/38.135.10.69/tcp/1348] dial tcp4 0.0.0.0:38013->38.135.10.69:1348: i/o timeout
  f030188: 'dial, China, Yangjiang', // * [/ip4/183.233.162.41/tcp/24001] dial tcp4 183.233.162.41:24001: i/o timeout
  f030219: 'dial, China, Changsha', // * [/ip4/175.6.2.5/tcp/7000] dial tcp4 175.6.2.5:7000: connect: connection refused
  f030226: 'dial, China, Fuzhou', // * [/ip4/220.176.125.160/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGaV9r6eZTe3K2BMveghcAUpPpcuc7NpvopuHJ8Qd45TK, but remote key matches 12D3KooWQt3hJx9TwfegzUin6ErsQvCjvs9Aw167ogqopGmtd9dC
  f030278: 'dial, Korea, Gyeonggi-do', // * [/ip4/211.114.218.110/tcp/24001] dial tcp4 0.0.0.0:38013->211.114.218.110:24001: i/o timeout
  f030284: 'dial, China, Shandong', // * [/ip4/106.74.7.3/tcp/32759] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQjJjkE4pJkPKqbze1SBxFzWp1iqQcgBg7JtiXfuea8BB, but remote key matches 12D3KooWQe8HRVWhaTBPvhXnSkz7C58jx5ehof8moeL2hFQ4x2KD
  f030296: 'dial, USA, Cary', // * [/ip4/98.122.131.103/tcp/13265] dial tcp4 98.122.131.103:13265: i/o timeout
  f030338: 'dial, USA, Santa Fe Springs', // * [/ip4/47.180.252.45/tcp/1024] dial tcp4 0.0.0.0:38013->47.180.252.45:1024: i/o timeout
  f030355: 'dial, Australia, Brisbane', // * [/ip4/144.137.18.224/tcp/7070] dial tcp4 144.137.18.224:7070: connect: no route to host
  f030379: 'dial, Korea, Uiwang', // * [/ip4/211.170.25.236/tcp/20000] dial tcp4 0.0.0.0:38013->211.170.25.236:20000: i/o timeout
  f030391: 'dial, China, Chengdu', // * [/ip4/125.69.0.37/tcp/55009] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHdTezq6JGiZMTbHo5veasqNytf6wGYgLok1GSyn6LLrJ, but remote key matches 12D3KooWKmFzYyThhurG2mC8ZK6RznLFnGD448XkJgNcuABBMK3v
  f032824: 'dial, NR', // * [/ip4/104.54.236.61/tcp/24001] dial tcp4 0.0.0.0:38013->104.54.236.61:24001: i/o timeout
  f032835: 'dial, Japan, Setagaya-ku', // * [/ip4/59.138.253.69/tcp/55555] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSE29Kez4KaaJ2o94XGC9RX32KZXWWQSobZ3tXKeSweUQ, but remote key matches 12D3KooWByQHVd4RagKK7YT2bS9ifTKurP2WpooVrY5GZZk3MnaC
  f032924: 'dial, China, Fuzhou', // * [/ip4/220.176.125.163/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJqQzGjSeNnh7vdTYUrrYZTkrzwwvPYCcyPFgHMhQarTu, but remote key matches 12D3KooWCFJTMfvUGqfjLaHyYWL2AgGChzBYsvDBWSBERurpbQCR
  f032951: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.5/tcp/10241] dial tcp4 0.0.0.0:38013->59.6.127.5:10241: i/o timeout
  f032976: 'dial, China, Taiwan, Taipei', // * [/ip4/114.35.99.104/tcp/20441] dial tcp4 114.35.99.104:20441: connect: connection refused
  f032977: 'dial, China, Deyang', // * [/ip4/117.177.135.20/tcp/13561] dial tcp4 117.177.135.20:13561: connect: connection refused
  f033025: 'dial, Korea', // * [/ip4/59.23.202.120/tcp/23236] dial tcp4 59.23.202.120:23236: connect: connection refused
  f033036: 'dial, China, Liaoning', // * [/ip4/116.132.221.25/tcp/40888] dial tcp4 116.132.221.25:40888: connect: connection refused
  f033048: 'dial, USA, Ashburn', // * [/ip4/3.235.178.228/tcp/5556] dial tcp4 3.235.178.228:5556: connect: connection refused
  f033091: 'dial, China, Wuxi', // * [/ip4/192.168.1.34/tcp/1300] dial tcp4 0.0.0.0:38013->192.168.1.34:1300: i/o timeout  * [/ip4/58.215.232.74/tcp/13000] dial tcp4 0.0.0.0:38013->58.215.232.74:13000: i/o timeout
  f033109: 'dial, China, Fuzhou', // * [/ip4/36.248.42.100/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAU3UpuTUVmHZutx7UyKeRpJ6Lx4AQYS5ALRCVhWFxSMJ, but remote key matches 12D3KooWQfvQwCrqiZhWc97jfL5uFFJvAnUWgVFjDRqaSfDTqqjv
  f033189: 'dial, China, Zhejiang', // * [/ip4/127.0.0.2/tcp/5472] dial tcp4 127.0.0.2:5472: connect: connection refused
  f033206: 'dial, Canada', // * [/ip4/148.59.149.162/tcp/3456] failed to negotiate security protocol: message did not have trailing newline
  f033364: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.35/tcp/10241] dial tcp4 59.6.127.35:10241: connect: connection refused
  f033438: 'dial, USA', // * [/ip4/207.2.201.157/tcp/24001] dial tcp4 0.0.0.0:38013->207.2.201.157:24001: i/o timeout
  f033548: 'dial, China, Fuzhou', // * [/ip4/36.248.42.100/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHq8MHKsfaRpRcPbEPar9RtRgEdt65QNWFkSCfoxoHoMn, but remote key matches 12D3KooWQfvQwCrqiZhWc97jfL5uFFJvAnUWgVFjDRqaSfDTqqjv
  f033557: 'dial, China, Hong Kong', // * [/ip4/45.113.32.169/tcp/24991] dial tcp4 0.0.0.0:38013->45.113.32.169:24991: i/o timeout
  f034039: 'dial, Russia', // * [/ip4/213.108.196.8/tcp/32345] dial tcp4 0.0.0.0:38013->213.108.196.8:32345: i/o timeout
  f034075: 'dial, Japan', // * [/ip4/103.204.64.101/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKjD1a5MkU7Dgcm4yr8mcuTYr9qQjwUjtDuyv9NLbzjtv, but remote key matches 12D3KooWRdbne26tGwi78GCWib4gMVDFeU7U7fx9XNb3FdpyaGqE
  f034216: 'dial, China, Wuxi', // * [/ip4/58.215.232.74/tcp/11000] dial tcp4 58.215.232.74:11000: connect: connection refused  * [/ip4/192.168.1.35/tcp/1100] dial tcp4 0.0.0.0:38013->192.168.1.35:1100: i/o timeout
  f034288: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.36/tcp/40703] dial tcp4 59.6.127.36:40703: connect: connection refused
  f034380: 'dial, Korea, Gyeonggi-do', // * [/ip4/211.114.218.105/tcp/24001] dial tcp4 211.114.218.105:24001: connect: connection refused
  f034613: 'dial, China, Nantong', // * [/ip4/117.86.106.157/tcp/24002] dial tcp4 0.0.0.0:38013->117.86.106.157:24002: i/o timeout
  f034635: 'dial, Korea, Incheon', // * [/ip4/203.234.181.130/tcp/24001] dial tcp4 0.0.0.0:38013->203.234.181.130:24001: i/o timeout
  f034733: 'dial, China, Hong Kong', // * [/ip4/103.100.152.129/tcp/24001] dial tcp4 0.0.0.0:38013->103.100.152.129:24001: i/o timeout
  f034808: 'dial, Korea, Incheon', // * [/ip4/203.234.181.131/tcp/59021] dial tcp4 0.0.0.0:38013->203.234.181.131:59021: i/o timeout
  f038299: 'dial, Russia, St. Petersburg', // * [/ip4/146.66.200.121/tcp/24100] dial tcp4 0.0.0.0:38013->146.66.200.121:24100: i/o timeout
  f039066: 'dial, China, Shenzhen', // * [/ip4/121.34.237.94/tcp/24001] dial tcp4 121.34.237.94:24001: connect: connection refused
  f039224: 'dial, NR', // * [/ip4/172.16.160.164/tcp/34567] dial tcp4 0.0.0.0:38013->172.16.160.164:34567: i/o timeout
  f039663: 'dial, USA, New York', // * [/ip4/66.65.152.110/tcp/5252] dial tcp4 0.0.0.0:38013->66.65.152.110:5252: i/o timeout
  f039712: 'dial, China, Wuxi', // * [/ip4/58.215.232.74/tcp/12000] dial tcp4 58.215.232.74:12000: connect: connection refused  * [/ip4/192.168.1.33/tcp/1200] dial tcp4 0.0.0.0:38013->192.168.1.33:1200: i/o timeout
  f039792: 'dial, China, Baoding', // * [/ip4/222.222.135.67/tcp/37745] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWEdoEdqmpuuqBVfdAj8wBWKBuG6Q8vsbaRUPbAw1YE5Kw, but remote key matches 12D3KooWHSsPEuVtbpYBCo22qdf7V5gn7eUTvChfXH8y246a58Jm
  f039940: 'dial, China, Mianyang', // * [/ip4/117.175.0.198/tcp/23456] dial tcp4 117.175.0.198:23456: connect: connection refused
  f040173: 'dial, Ukraine, Ternopil', // * [/ip4/5.58.55.232/tcp/24001] dial tcp4 5.58.55.232:24001: connect: connection refused
  f040248: 'dial, Singapore', // * [/ip4/161.117.229.243/tcp/40248] dial tcp4 161.117.229.243:40248: connect: connection refused  * [/ip4/192.168.1.101/tcp/40248] dial tcp4 0.0.0.0:38013->192.168.1.101:40248: i/o timeout
  f041239: 'dial, Germany', // * [/ip4/46.4.221.200/tcp/27773] dial tcp4 0.0.0.0:38013->46.4.221.200:27773: i/o timeout
  f041893: 'dial, Korea, Uiwang', // * [/ip4/211.170.59.250/tcp/39075] dial tcp4 0.0.0.0:38013->211.170.59.250:39075: i/o timeout
  f042122: 'dial, Spain, Barcelona', // * [/ip4/149.74.108.54/tcp/24001] dial tcp4 149.74.108.54:24001: i/o timeout
  f042489: 'dial, UK, Chipping Norton', // * [/ip4/31.49.45.243/tcp/24001] dial tcp4 0.0.0.0:38013->31.49.45.243:24001: i/o timeout
  f042834: 'dial, China, Dongguan', // * [/ip4/183.240.203.186/tcp/34567] dial tcp4 183.240.203.186:34567: connect: connection refused
  f043183: 'dial, Germany', // * [/ip4/135.181.112.125/tcp/24001] dial tcp4 0.0.0.0:38013->135.181.112.125:24001: i/o timeout
  f043187: 'dial, Germany, Nuremberg', // * [/ip4/161.97.122.14/tcp/24001] dial tcp4 0.0.0.0:38013->161.97.122.14:24001: i/o timeout
  f043205: 'dial, Korea, Seoul', // * [/ip4/59.6.127.5/tcp/10241] dial tcp4 0.0.0.0:38013->59.6.127.5:10241: i/o timeout
  f043306: 'dial, Japan', // * [/ip4/103.204.64.106/tcp/24001] dial tcp4 0.0.0.0:38013->103.204.64.106:24001: i/o timeout
  f043313: 'dial, China, Dongguan', // * [/ip4/183.240.203.186/tcp/34567] dial tcp4 183.240.203.186:34567: connect: connection refused
  f043664: 'dial, Italy, Genoa', // * [/ip4/79.3.133.59/tcp/24001] dial tcp4 79.3.133.59:24001: connect: connection refused
  f043929: 'dial, China, Beijing, Kr', // * [/ip4/120.232.96.38/tcp/24001] failed to negotiate security protocol: read tcp4 66.70.191.245:38013->120.232.96.38:24001: read: connection reset by peer
  f044021: 'dial, China, Dongguan', // * [/ip4/192.168.5.4/tcp/34567] dial tcp4 0.0.0.0:38013->192.168.5.4:34567: i/o timeout
  f044054: 'dial, Korea, Busan', // * [/ip4/218.154.241.100/tcp/47347] dial tcp4 0.0.0.0:38013->218.154.241.100:47347: i/o timeout
  f044374: 'dial, Slovakia, Bratislava', // * [/ip4/95.105.251.216/tcp/24001] dial tcp4 95.105.251.216:24001: connect: connection refused
  f044605: 'dial, China, Suzhou', // * [/ip4/58.211.213.211/tcp/24001] dial tcp4 58.211.213.211:24001: connect: connection refused
  f044649: 'dial, Korea, Seoul', // * [/ip4/59.6.127.35/tcp/10241] dial tcp4 59.6.127.35:10241: connect: connection refused
  f044763: 'dial, Japan, Toyota', // * [/ip4/221.118.139.90/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBhbjBw5q5UHvNYWFyZPZvBxyQ2E8mq7i1MZT94N4CZPu, but remote key matches 12D3KooWQztyn6yHhzmPBejxfxtaWktRN3JFfrdpv8SD26tjvMKw
  f044797: 'dial, China, Dongguan', // * [/ip4/183.240.203.187/tcp/34567] dial tcp4 183.240.203.187:34567: connect: connection refused
  f044874: 'dial, China, Dongguan', // * [/ip4/192.168.5.7/tcp/34567] dial tcp4 0.0.0.0:38013->192.168.5.7:34567: i/o timeout
  f045027: 'dial, Korea, Busan', // * [/ip4/115.22.10.76/tcp/30014] dial tcp4 115.22.10.76:30014: connect: connection refused
  f045454: 'dial, Korea, Seoul', // * [/ip4/59.6.127.3/tcp/10241] dial tcp4 0.0.0.0:38013->59.6.127.3:10241: i/o timeout
  f045555: 'dial, China, Chongqing', // * [/ip4/113.204.197.4/tcp/6666] dial tcp4 0.0.0.0:38013->113.204.197.4:6666: i/o timeout
  f045714: 'dial, Korea, Busan', // * [/ip4/218.154.241.100/tcp/24001] dial tcp4 218.154.241.100:24001: connect: connection refused
  f046013: 'dial, China, Guangzhou', // * [/ip4/183.60.252.190/tcp/23450] failed to negotiate security protocol: EOF
  f046426: 'dial, China, Beijing', // * [/ip4/120.232.96.39/tcp/24001] failed to negotiate security protocol: read tcp4 66.70.191.245:38013->120.232.96.39:24001: read: connection reset by peer
  f047536: 'dial, NR', // * [/ip4/127.0.0.1/tcp/37169] dial tcp4 127.0.0.1:37169: connect: connection refused  * [/ip6/::1/tcp/37907] dial tcp6 [::1]:37907: connect: connection refused  * [/ip4/218.89.171.179/tcp/37169] dial tcp4 218.89.171.179:37169: connect: connection refused  * [/ip4/192.168.10.40/tcp/37169] dial tcp4 0.0.0.0:38013->192.168.10.40:37169: i/o timeout
  f047922: 'dial, Korea, Uiwang', // * [/ip4/211.170.59.250/tcp/41409] dial tcp4 0.0.0.0:38013->211.170.59.250:41409: i/o timeout
  f048174: 'dial, China, Fuzhou', // * [/ip4/220.176.125.165/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFDKueDv8BMkDgHjKkguwui4tGmjTguWXWjv4Vbq2Jiv6, but remote key matches 12D3KooWFikUmntbNAjbEbWk7jXHSaA3aQZ6HBG8imPZzQkFzYZk
  f048176: 'dial, China, Fuzhou', // * [/ip4/220.176.125.166/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCmV4etMZ2o1VgREtpheTqGPCZZ8m5gYr5JdgmTYphZnX, but remote key matches 12D3KooWEL13gqLAo2hDiax2PeN2pT3aXVMNpzh3ToxdVFvpVMeV
  f048181: 'dial, China, Fuzhou', // * [/ip4/220.176.125.167/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWDhCxscoyCs55eUh5MVjHV7DMdAqPuj4c1JuJkfxpD1qV, but remote key matches 12D3KooW9vBPr3FEUtNTKdzMZTB3aYsjK2o9bpqAaFfVQDViz8ii
  f048540: 'dial, China, Xinxiang', // * [/ip4/27.50.142.73/tcp/1347] dial tcp4 27.50.142.73:1347: connect: connection refused
  f048557: 'dial, Korea, Seoul', // * [/ip4/59.6.127.33/tcp/23451] dial tcp4 0.0.0.0:38013->59.6.127.33:23451: i/o timeout
  f048858: 'dial, Japan, Tokyo', // * [/ip4/35.187.223.4/tcp/5120] dial tcp4 0.0.0.0:38013->35.187.223.4:5120: i/o timeout
  f049055: 'dial, USA, Odgen', // * [/ip4/107.182.163.82/tcp/24001] dial tcp4 107.182.163.82:24001: connect: connection refused
  f049751: 'dial, Australia, Sydney', // * [/ip4/14.203.98.125/tcp/1347] dial tcp4 14.203.98.125:1347: connect: connection refused
  f049772: 'dial, Korea, Seoul', // * [/ip4/59.6.127.35/tcp/23451] dial tcp4 59.6.127.35:23451: connect: connection refused
  f049773: 'dial, China, Huizhou', // * [/ip4/218.13.75.238/tcp/6666] dial tcp4 0.0.0.0:38013->218.13.75.238:6666: i/o timeout
  f049953: 'dial, Korea, Bucheon-si', // * [/ip4/119.197.20.93/tcp/35323] dial tcp4 0.0.0.0:38013->119.197.20.93:35323: i/o timeout
  f050201: 'dial, Korea, Seoul', // * [/ip4/59.6.127.32/tcp/23451] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWDVLszANBB5c33H7uqvJngscS2kH1gqcWaQNKNojH5kba, but remote key matches 12D3KooWFo12dYtGN2JLGcR6MnQ9sRW9tLvnCFExtKrTwiA76dw7
  f050214: 'dial, Germany', // * [/ip4/176.9.117.213/tcp/24001] dial tcp4 176.9.117.213:24001: connect: connection refused
  f050271: 'dial, China, Changsha', // * [/ip4/124.232.137.156/tcp/24001] dial tcp4 124.232.137.156:24001: connect: connection refused
  f050500: 'dial, Korea, Uiwang', // * [/ip4/211.170.59.250/tcp/35427] dial tcp4 0.0.0.0:38013->211.170.59.250:35427: i/o timeout
  f052135: 'dial, Korea, Goyang-si', // * [/ip4/125.142.94.199/tcp/5120] dial tcp4 125.142.94.199:5120: connect: connection refused
  f052759: 'dial, China, Fujian', // * [/ip4/150.242.97.229/tcp/23450] dial tcp4 0.0.0.0:38013->150.242.97.229:23450: i/o timeout
  f053037: 'dial, China, Hefei', // * [/ip4/36.33.216.78/tcp/10250] dial tcp4 36.33.216.78:10250: i/o timeout
  f053159: 'dial, NR', // * [/ip4/192.168.32.31/tcp/53159] dial tcp4 0.0.0.0:38013->192.168.32.31:53159: i/o timeout
  f054083: 'dial, Korea, Hwaseong-si', // * [/ip4/125.136.24.213/tcp/24102] dial tcp4 0.0.0.0:38013->125.136.24.213:24102: i/o timeout
  f054198: 'dial, China, Changsha', // * [/ip4/124.232.137.156/tcp/24001] dial tcp4 124.232.137.156:24001: connect: connection refused
  f054619: 'dial, Korea, Hwaseong-si', // * [/ip4/220.80.40.108/tcp/24202] dial tcp4 0.0.0.0:38013->220.80.40.108:24202: i/o timeout
  f054788: 'dial, Korea, Hwaseong-si + Gwangju', // * [/ip4/211.195.135.221/tcp/24302] dial tcp4 0.0.0.0:38013->211.195.135.221:24302: i/o timeout
  f055044: 'dial, Japan', // * [/ip4/103.204.64.107/tcp/24002] dial tcp4 103.204.64.107:24002: connect: no route to host
  f055171: 'dial, China, Maoming', // * [/ip4/61.143.232.26/tcp/8888] dial tcp4 61.143.232.26:8888: connect: connection refused
  f055178: 'dial, Singapore', // * [/ip4/8.210.106.36/tcp/24001] dial tcp4 0.0.0.0:38013->8.210.106.36:24001: i/o timeout
  f055347: 'dial, Korea, Busan', // * [/ip4/112.160.224.220/tcp/24001] dial tcp4 0.0.0.0:38013->112.160.224.220:24001: i/o timeout
  f055522: 'dial, USA', // * [/ip4/207.2.201.158/tcp/24002] dial tcp4 0.0.0.0:38013->207.2.201.158:24002: i/o timeout
  f055538: 'dial, Italy, Genoa, @Lucien', // * [/ip4/79.3.133.59/tcp/5190] dial tcp4 79.3.133.59:5190: connect: connection refused
  f056211: 'dial, USA, Santa Fe Springs', // * [/ip4/47.180.252.45/tcp/1024] dial tcp4 0.0.0.0:38013->47.180.252.45:1024: i/o timeout
  f056443: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.5/tcp/23451] dial tcp4 0.0.0.0:38013->59.6.127.5:23451: i/o timeout
  f057009: 'dial, China, Dongguan', // * [/ip4/183.240.203.188/tcp/44567] dial tcp4 183.240.203.188:44567: connect: connection refused
  f057418: 'dial, Germany', // * [/ip4/88.99.163.73/tcp/24001] dial tcp4 0.0.0.0:38013->88.99.163.73:24001: i/o timeout
  f058143: 'dial, China, Dongguan', // * [/ip4/192.168.5.6/tcp/44567] dial tcp4 0.0.0.0:38013->192.168.5.6:44567: i/o timeout
  f058369: 'dial, USA, Bow', // * [/ip4/24.62.148.221/tcp/24001] dial tcp4 24.62.148.221:24001: i/o timeout
  f058880: 'dial, Hong Kong', // * [/ip4/58.82.195.140/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRaoqNvVme6T8SaUgmdcAvFm1oQzxFKdLHfKSEahjuFRi, but remote key matches 12D3KooWLSjfDHgLQCAmhdsjU9NE7JL2qogfQURgaZXpTLxjsAqQ
  f059190: 'dial, Poland, Krakow', // * [/ip4/89.25.168.21/tcp/24444] dial tcp4 89.25.168.21:24444: connect: connection refused
  f059629: 'dial, China, Sichuan', // * [/ip4/118.116.4.130/tcp/24001] dial tcp4 118.116.4.130:24001: connect: connection refused
  f059740: 'dial, Germany, Korschenbroich', // * [/ip4/156.67.191.194/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWR2iY2SFgjHM45NkQEJMmAathsCrgHWADbbCnPzsuS2bY, but remote key matches 12D3KooWR3EjX6z4ZkNRAbnF442tu5aCeLPQj62Xn7qCQ2KzPKwS
  f060702: 'dial, NR', // * [/ip4/192.168.6.3/tcp/34567] dial tcp4 0.0.0.0:38013->192.168.6.3:34567: i/o timeout
  f061503: 'dial, NR', // * [/ip6/::1/tcp/45355] dial tcp6 [::1]:45355: connect: connection refused  * [/ip4/127.0.0.1/tcp/37831] dial tcp4 127.0.0.1:37831: connect: connection refused  * [/ip4/10.1.75.42/tcp/37831] dial tcp4 0.0.0.0:38013->10.1.75.42:37831: i/o timeout  * [/ip4/115.236.22.242/tcp/37831] dial tcp4 0.0.0.0:38013->115.236.22.242:37831: i/o timeout
  f062492: 'dial, China, Hong Kong', // * [/ip4/103.228.183.218/tcp/24001] dial tcp4 0.0.0.0:38013->103.228.183.218:24001: i/o timeout
  f062661: 'dial, China, Suzhou', // * [/ip4/58.211.213.210/tcp/20102] dial tcp4 58.211.213.210:20102: i/o timeout
  f064664: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.100/tcp/23451] dial tcp4 0.0.0.0:38013->59.6.127.100:23451: i/o timeout
  f064955: 'dial, USA, New Castle', // * [/ip4/47.242.29.138/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLoF2aqFPULNsXMxdYUPkaYEzem6hqeMxPE6rbzm3iNY4, but remote key matches 12D3KooWQu1PM3ywEVAKdQ76jb4fdS7BJG78qn4R55VwS6JRrgmd
  f064980: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.101/tcp/23451] dial tcp4 0.0.0.0:38013->59.6.127.101:23451: i/o timeout
  f065011: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.102/tcp/23451] dial tcp4 59.6.127.102:23451: connect: connection refused
  f065103: 'dial, USA, Portland + China, Shenzhen', // * [/ip4/47.242.78.254/tcp/16012] dial tcp4 47.242.78.254:16012: connect: connection refused  * [/ip4/47.242.78.100/tcp/16012] dial tcp4 47.242.78.100:16012: connect: connection refused  * [/ip4/47.242.77.118/tcp/16012] dial tcp4 47.242.77.118:16012: connect: connection refused  * [/ip4/47.242.70.110/tcp/16012] dial tcp4 47.242.70.110:16012: connect: connection refused  * [/ip4/47.242.68.119/tcp/16012] dial tcp4 47.242.68.119:16012: connect: connection refused  * [/ip4/47.242.47.202/tcp/16012] dial tcp4 47.242.47.202:16012: connect: connection refused  * [/ip4/47.242.68.29/tcp/16012] dial tcp4 47.242.68.29:16012: connect: connection refused  * [/ip4/47.242.70.11/tcp/16012] dial tcp4 47.242.70.11:16012: connect: connection refused  * [/ip4/47.242.65.12/tcp/16012] dial tcp4 47.242.65.12:16012: connect: connection refused  * [/ip4/47.242.72.244/tcp/16012] dial tcp4 47.242.72.244:16012: connect: connection refused  * [/ip4/47.242.71.3/tcp/16012] dial tcp4 47.242.71.3:16012: connect: connection refused  * [/ip4/47.242.68.99/tcp/16012] dial tcp4 47.242.68.99:16012: connect: connection refused  * [/ip4/47.242.65.136/tcp/16012] dial tcp4 47.242.65.136:16012: connect: connection refused  * [/ip4/47.242.43.84/tcp/16012] dial tcp4 47.242.43.84:16012: connect: connection refused  * [/ip4/47.242.67.107/tcp/16012] dial tcp4 47.242.67.107:16012: connect: connection refused  * [/ip4/47.242.39.102/tcp/16012] dial tcp4 47.242.39.102:16012: connect: connection refused    ... skipping 4 errors ...
  f065168: 'dial, USA, Daytona Beach', // * [/ip4/172.3.161.97/tcp/24001] dial tcp4 172.3.161.97:24001: connect: connection refused
  f065266: 'dial, China, Hefei', // * [/ip4/175.6.250.74/tcp/51105] dial tcp4 0.0.0.0:38013->175.6.250.74:51105: i/o timeout
  f065597: 'dial, China, Dongguan', // * [/ip4/183.240.203.187/tcp/44567] dial tcp4 183.240.203.187:44567: connect: connection refused
  f065726: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.50/tcp/23451] dial tcp4 59.6.127.50:23451: connect: connection refused
  f065832: 'dial, Korea, Suncheon', // * [/ip4/218.157.75.142/tcp/24102] dial tcp4 218.157.75.142:24102: connect: connection refused
  f066453: 'dial, Korea, Bucheon-si', // * [/ip4/119.197.20.56/tcp/24001] dial tcp4 0.0.0.0:38013->119.197.20.56:24001: i/o timeout
  f066563: 'dial, China, Fuzhou', // * [/ip4/112.49.47.131/tcp/51105] dial tcp4 0.0.0.0:38013->112.49.47.131:51105: i/o timeout
  f066898: 'dial, Japan, Bunkyo-ku', // * [/ip4/124.35.186.41/tcp/24001] dial tcp4 124.35.186.41:24001: connect: connection refused
  f067190: 'dial, Korea, Uiwang', // * [/ip4/211.170.59.250/tcp/24001] dial tcp4 0.0.0.0:38013->211.170.59.250:24001: i/o timeout
  f067545: 'dial, Canada, Kitchener', // * [/ip4/24.52.248.93/tcp/61001] dial tcp4 24.52.248.93:61001: connect: connection refused
  f069362: 'dial, USA, Daytona Beach', // * [/ip4/172.3.161.97/tcp/24001] dial tcp4 172.3.161.97:24001: connect: connection refused
  f069391: 'dial, NR', // * [/ip4/192.168.1.10/tcp/32759] dial tcp4 0.0.0.0:38013->192.168.1.10:32759: i/o timeout
  f069921: 'dial, Korea, Bucheon-si', // * [/ip4/119.197.20.122/tcp/24001] dial tcp4 0.0.0.0:38013->119.197.20.122:24001: i/o timeout
  f070116: 'dial, Switzerland, Tenero', // * [/ip4/176.46.240.28/tcp/2235] dial tcp4 0.0.0.0:38013->176.46.240.28:2235: i/o timeout
  f070223: 'dial, China, Dongguan', // * [/ip4/192.168.5.6/tcp/34567] dial tcp4 0.0.0.0:38013->192.168.5.6:34567: i/o timeout
  f070501: 'dial, USA + China, Hong Kong', // * [/ip4/156.225.4.51/tcp/49572] dial tcp4 0.0.0.0:38013->156.225.4.51:49572: i/o timeout  * [/ip4/47.242.63.117/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.63.117:49572: i/o timeout  * [/ip4/162.14.19.182/tcp/49572] dial tcp4 0.0.0.0:38013->162.14.19.182:49572: i/o timeout  * [/ip4/47.242.62.63/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.62.63:49572: i/o timeout  * [/ip4/47.242.61.166/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.61.166:49572: i/o timeout  * [/ip4/47.242.48.109/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.48.109:49572: i/o timeout  * [/ip4/156.225.4.85/tcp/49572] dial tcp4 0.0.0.0:38013->156.225.4.85:49572: i/o timeout  * [/ip4/47.242.63.99/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.63.99:49572: i/o timeout  * [/ip4/162.14.17.215/tcp/49572] dial tcp4 0.0.0.0:38013->162.14.17.215:49572: i/o timeout  * [/ip4/47.242.61.189/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.61.189:49572: i/o timeout  * [/ip4/47.242.41.179/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.41.179:49572: i/o timeout  * [/ip4/47.242.73.155/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.73.155:49572: i/o timeout  * [/ip4/47.242.67.240/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.67.240:49572: i/o timeout  * [/ip4/47.242.63.61/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.63.61:49572: i/o timeout
  f072149: 'dial, China, Beijing', // * [/ip4/222.128.61.155/tcp/24001] dial tcp4 222.128.61.155:24001: i/o timeout
  f072598: 'dial, China, Shenyang', // * [/ip4/124.92.8.241/tcp/24001] dial tcp4 0.0.0.0:38013->124.92.8.241:24001: i/o timeout
  f073096: 'dial, USA', // * [/ip4/47.242.29.138/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLp6ef7nZ7bVW7D76tkDG5idKVYtsNAy3wvFXrgyx3GT8, but remote key matches 12D3KooWQu1PM3ywEVAKdQ76jb4fdS7BJG78qn4R55VwS6JRrgmd
  f073499: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.220/tcp/23451] dial tcp4 59.6.127.220:23451: connect: connection refused
  f073628: 'dial, USA, New Castle', // * [/ip4/47.242.61.189/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.61.189:49572: i/o timeout  * [/ip4/47.242.62.63/tcp/49572] dial tcp4 47.242.62.63:49572: i/o timeout  * [/ip4/162.14.19.182/tcp/49572] dial tcp4 0.0.0.0:38013->162.14.19.182:49572: i/o timeout  * [/ip4/47.242.63.61/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.63.61:49572: i/o timeout  * [/ip4/47.242.67.240/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.67.240:49572: i/o timeout  * [/ip4/47.242.73.155/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.73.155:49572: i/o timeout  * [/ip4/47.242.63.99/tcp/49572] dial tcp4 47.242.63.99:49572: i/o timeout  * [/ip4/47.242.61.166/tcp/49572] dial tcp4 47.242.61.166:49572: i/o timeout  * [/ip4/47.242.48.109/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.48.109:49572: i/o timeout  * [/ip4/162.14.17.215/tcp/49572] dial tcp4 0.0.0.0:38013->162.14.17.215:49572: i/o timeout  * [/ip4/47.242.41.179/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.41.179:49572: i/o timeout  * [/ip4/47.242.63.117/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.63.117:49572: i/o timeout
  f078390: 'dial, China, Shaoxing', // * [/ip4/115.237.155.90/tcp/25001] dial tcp4 0.0.0.0:38013->115.237.155.90:25001: i/o timeout
  f078609: 'dial, Switzerland, Tenero', // * [/ip4/176.46.240.28/tcp/2137] dial tcp4 0.0.0.0:38013->176.46.240.28:2137: i/o timeout
  f078621: 'dial, Korea', // * [/ip4/110.93.133.154/tcp/24001] dial tcp4 110.93.133.154:24001: connect: connection refused
  f078922: 'dial, Korea, Bucheon-si', // * [/ip4/119.197.20.122/tcp/40171] dial tcp4 0.0.0.0:38013->119.197.20.122:40171: i/o timeout
  f078954: 'dial, Netherlands', // * [/ip4/141.105.65.143/tcp/24001] dial tcp4 141.105.65.143:24001: connect: connection refused
  f079007: 'dial, China, Jinan', // * [/ip4/114.255.31.225/tcp/24001] dial tcp4 0.0.0.0:38013->114.255.31.225:24001: i/o timeout
  f079247: 'dial, USA, New Castle', // * [/ip4/47.242.63.117/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.63.117:49572: i/o timeout  * [/ip4/47.242.61.166/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.61.166:49572: i/o timeout  * [/ip4/47.242.63.61/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.63.61:49572: i/o timeout  * [/ip4/47.242.61.189/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.61.189:49572: i/o timeout  * [/ip4/162.14.19.182/tcp/49572] dial tcp4 0.0.0.0:38013->162.14.19.182:49572: i/o timeout  * [/ip4/47.242.73.155/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.73.155:49572: i/o timeout  * [/ip4/47.242.41.179/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.41.179:49572: i/o timeout  * [/ip4/47.242.62.63/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.62.63:49572: i/o timeout  * [/ip4/47.242.48.109/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.48.109:49572: i/o timeout  * [/ip4/162.14.17.215/tcp/49572] dial tcp4 0.0.0.0:38013->162.14.17.215:49572: i/o timeout  * [/ip4/47.242.63.99/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.63.99:49572: i/o timeout  * [/ip4/47.242.67.240/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.67.240:49572: i/o timeout
  f079301: 'dial, USA, New Castle', // * [/ip4/47.242.63.117/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.63.117:49572: i/o timeout  * [/ip4/47.242.73.155/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.73.155:49572: i/o timeout  * [/ip4/47.242.41.179/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.41.179:49572: i/o timeout  * [/ip4/162.14.17.215/tcp/49572] dial tcp4 0.0.0.0:38013->162.14.17.215:49572: i/o timeout  * [/ip4/47.242.63.61/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.63.61:49572: i/o timeout  * [/ip4/162.14.19.182/tcp/49572] dial tcp4 0.0.0.0:38013->162.14.19.182:49572: i/o timeout  * [/ip4/47.242.67.240/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.67.240:49572: i/o timeout  * [/ip4/47.242.61.189/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.61.189:49572: i/o timeout  * [/ip4/47.242.63.99/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.63.99:49572: i/o timeout  * [/ip4/47.242.62.63/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.62.63:49572: i/o timeout  * [/ip4/47.242.48.109/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.48.109:49572: i/o timeout  * [/ip4/47.242.61.166/tcp/49572] dial tcp4 0.0.0.0:38013->47.242.61.166:49572: i/o timeout
  f079426: 'dial, China, Shandong', // * [/ip4/106.74.7.4/tcp/32759] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQBg2oErr3Mx2fky471oxpmQmVggaDsGGVNqFagL27HeY, but remote key matches 12D3KooWBZ26N9VbVLBfiutv3uADBSFjr3FM1RbNXDMz4uW37nLN
  f079787: 'dial, USA, Daytona Beach', // * [/ip4/172.3.161.97/tcp/24001] dial tcp4 172.3.161.97:24001: connect: connection refused
  f080471: 'dial, China, Chongqing', // * [/ip4/183.230.167.39/tcp/24001] dial tcp4 183.230.167.39:24001: connect: connection refused
  f080945: 'dial, China, Shenzhen', // * [/ip4/103.44.253.114/tcp/51105] dial tcp4 0.0.0.0:38013->103.44.253.114:51105: i/o timeout
  f081050: 'dial, China, Chongqing', // * [/ip4/183.66.197.214/tcp/2345] failed to negotiate security protocol: message did not have trailing newline
  f081078: 'dial, Korea, Busan', // * [/ip4/220.84.94.10/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMW8ZvKgprKTTmt8cuoC5YYZeJtCn6iBuHWLg6J8rGUts, but remote key matches 12D3KooWLe7nwrhYUwgTjy7B92xgeuVZFVzgXHuM4wGzmcYg6asG
  f081324: 'dial, NR', // * [/ip4/127.0.0.1/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHi1GfU9cyAMRysgeGiHqT1AtQnWLkXv4cQXZDhVuKUfX, but remote key matches 12D3KooWEUS7VnaRrHF24GTWVGYtcEsmr3jsnNLcsEwPU7rDgjf5
  f082018: 'dial, USA, Daytona Beach', // * [/ip4/172.3.161.97/tcp/24001] dial tcp4 172.3.161.97:24001: connect: connection refused
  f082613: 'dial, Switzerland, Tenero', // * [/ip4/176.46.240.28/tcp/2137] dial tcp4 176.46.240.28:2137: connect: no route to host
  f082617: 'dial, China, Fujian', // * [/ip4/45.119.63.131/tcp/51105] dial tcp4 0.0.0.0:38013->45.119.63.131:51105: i/o timeout
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
  f02769: 'xnr, NR',
  f02770: 'xnr, China, Hong Kong',
  f02774: 'xnr, Australia, Sydney',
  f02775: 'xnr, China, Hong Kong',
  f02777: 'xnr, NR',
  f02779: 'xnr, NR',
  f03264: 'xnr, Korea, Bucheon-si',
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
  f08207: 'xnr, Australia, Brisbane',
  f08223: 'xnr, NR',
  f08225: 'xnr, Australia, Sydney',
  f08229: 'xnr, China, Nanchang',
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
  f015767: 'xnr, Russia, Khabarovsk + Japan, Khabarovsk + USA',
  f015797: 'xnr, Germany, Rostock',
  f015798: 'xnr, Germany',
  f015799: 'xnr, Germany, Rostock',
  f015800: 'xnr, Germany, Sankt Andreasberg',
  f015802: 'xnr, Germany',
  f015805: 'xnr, Germany',
  f015808: 'xnr, Germany',
  f015809: 'xnr, Germany',
  f015810: 'xnr, Germany',
  f015811: 'xnr, Germany, Lanshut',
  f015812: 'xnr, Germany',
  f015827: 'xnr, Russia',
  f015829: 'xnr, China, Beijing',
  f015833: 'xnr, China, Baoding',
  f015867: 'xnr, Netherlands, Amsterdam',
  f015870: 'xnr, China, Hangzhou',
  f015875: 'xnr, China, Fuzhou',
  f015885: 'xnr, China, Jiaxing',
  f015891: 'xnr, China, Shanghai',
  f015901: 'xnr, Germany',
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
  f021555: 'xnr, NR',
  f021574: 'xnr, NR',
  f021580: 'xnr, NR',
  f021684: 'xnr, NR',
  f021699: 'xnr, NR',
  f021704: 'xnr, NR',
  f021710: 'xnr, China, Shijiazhuang',
  f021725: 'xnr, NR',
  f021870: 'xnr, USA, Portland',
  f021976: 'xnr, NR',
  f022015: 'xnr, China, Hangzhou',
  f022016: 'xnr, NR',
  f022030: 'xnr, NR',
  f022033: 'xnr, NR',
  f022038: 'xnr, NR',
  f022070: 'xnr, China, Jieyang',
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
  f022361: 'xnr, NR',
  f022372: 'xnr, China, Chengdu',
  f022373: 'xnr, Singapore',
  f022374: 'xnr, NR',
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
  f022797: 'xnr, NR',
  f022804: 'xnr, China, Yibin',
  f022834: 'xnr, NR',
  f022836: 'xnr, China, Chongqing',
  f022838: 'xnr, China, Hong Kong',
  f022841: 'xnr, China, Zhongshan',
  f022857: 'xnr, NR',
  f022880: 'xnr, NR',
  f022906: 'xnr, NR',
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
  f023207: 'xnr, NR',
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
  f023647: 'xnr, Korea, Gangseo-gu',
  f023651: 'xnr, NR',
  f023661: 'xnr, China, Zhejiang',
  f023798: 'xnr, China, Shanghai',
  f023801: 'xnr, China, Dongguan',
  f023826: 'xnr, USA, Germantown',
  f023881: 'xnr, China, Fuzhou',
  f023882: 'xnr, NR',
  f023939: 'xnr, NR',
  f023943: 'xnr, USA, Ashburn',
  f023965: 'xnr, NR',
  f023984: 'xnr, China, Chongqing',
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
  f025005: 'xnr, NR',
  f025028: 'xnr, NR',
  f025032: 'xnr, China, Beijing',
  f025044: 'xnr, undefined',
  f029368: 'xnr, Korea, Gangseo-gu',
  f029421: 'xnr, undefined',
  f029477: 'xnr, undefined',
  f029529: 'xnr, China, Dongguan',
  f029546: 'xnr, NR',
  f029566: 'xnr, NR',
  f029585: 'xnr, NR',
  f029595: 'xnr, undefined',
  f029619: 'xnr, undefined',
  f029632: 'xnr, undefined',
  f029649: 'xnr, China, Beijing',
  f030230: 'xnr, China, Sichuan',
  f030231: 'xnr, China, Hunan',
  f030249: 'xnr, NR',
  f030272: 'xnr, undefined',
  f030331: 'xnr, NR',
  f030347: 'xnr, China, Zhejiang',
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
  f032850: 'xnr, NR',
  f032865: 'xnr, USA, Redmond',
  f032887: 'xnr, undefined',
  f032904: 'xnr, undefined',
  f032922: 'xnr, undefined',
  f033014: 'xnr, NR',
  f033028: 'xnr, China, Mianyang',
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
  f034362: 'xnr, China, Sichuan',
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
  f042584: 'xnr, Australia, Basin View',
  f042839: 'xnr, Korea, Pocheon-si',
  f042855: 'xnr, NR',
  f043376: 'xnr, Korea, Incheon',
  f044143: 'xnr, China, Taiwan, Taipei',
  f044315: 'xnr, NR',
  f044788: 'xnr, NR',
  f045505: 'xnr, NR',
  f045743: 'xnr, NR',
  f045756: 'xnr, NR',
  f046078: 'xnr, China, Shaanxi',
  f046315: 'xnr, NR',
  f046317: 'xnr, China, Nanyang',
  f047327: 'xnr, China, Hong Kong',
  f047666: 'xnr, NR',
  f048545: 'xnr, China, Chengdu',
  f048669: 'xnr, NR',
  f048968: 'xnr, NR',
  f048986: 'xnr, NR',
  f049911: 'xnr, NR',
  f049990: 'xnr, Korea, Incheon',
  f052503: 'xnr, NR',
  f052562: 'xnr, NR',
  f052740: 'xnr, China, Shaanxi',
  f053173: 'xnr, NR',
  f053229: 'xnr, NR',
  f053446: 'xnr, NR',
  f054120: 'xnr, NR',
  f054267: 'xnr, NR',
  f054389: 'xnr, China, Chongqing',
  f054412: 'xnr, NR',
  f054415: 'xnr, NR',
  f054417: 'xnr, NR',
  f054418: 'xnr, NR',
  f054420: 'xnr, NR',
  f054422: 'xnr, NR',
  f054464: 'xnr, NR',
  f054526: 'xnr, NR',
  f054666: 'xnr, NR',
  f055335: 'xnr, NR',
  f055446: 'xnr, NR',
  f056227: 'xnr, NR',
  f056393: 'xnr, NR',
  f057618: 'xnr, NR',
  f057683: 'xnr, NR',
  f058003: 'xnr, China, Shenzhen',
  f058321: 'xnr, China, Dongguan',
  f058349: 'xnr, NR',
  f059652: 'xnr, China, Beijing',
  f059705: 'xnr, Korea, Naju',
  f059813: 'xnr, NR',
  f060693: 'xnr, NR',
  f060754: 'xnr, NR',
  f060780: 'xnr, Korea, Goyang-si',
  f061051: 'xnr, NR',
  f061059: 'xnr, China, Beijing',
  f061170: 'xnr, NR',
  f061174: 'xnr, NR',
  f061196: 'xnr, Korea, Yeongdeungpo-dong',
  f061430: 'xnr, Korea, Naju',
  f061959: 'xnr, NR',
  f062245: 'xnr, NR',
  f062445: 'xnr, China, Shenzhen',
  f062449: 'xnr, NR',
  f062473: 'xnr, NR',
  f062475: 'xnr, NR',
  f062552: 'xnr, NR',
  f062587: 'xnr, NR',
  f062619: 'xnr, NR',
  f062931: 'xnr, NR',
  f062937: 'xnr, NR',
  f063628: 'xnr, NR',
  f063780: 'xnr, China, Shenyang',
  f063869: 'xnr, NR',
  f064688: 'xnr, NR',
  f064855: 'xnr, NR',
  f064908: 'xnr, NR',
  f065113: 'xnr, NR',
  f065132: 'xnr, Denmark, Vipperod',
  f065174: 'xnr, NR',
  f065225: 'xnr, China, Dongguan',
  f065250: 'xnr, NR',
  f065391: 'xnr, NR',
  f065426: 'xnr, Korea, Gimpo-si',
  f065477: 'xnr, NR',
  f065578: 'xnr, NR',
  f065610: 'xnr, NR',
  f065670: 'xnr, NR',
  f065686: 'xnr, NR',
  f065689: 'xnr, NR',
  f065718: 'xnr, China, Taiwan, Hsinchu',
  f065853: 'xnr, Korea, Seongnam-si',
  f065881: 'xnr, NR',
  f065941: 'xnr, NR',
  f066075: 'xnr, NR',
  f066102: 'xnr, NR',
  f066259: 'xnr, NR',
  f066289: 'xnr, NR',
  f066302: 'xnr, NR',
  f066465: 'xnr, NR',
  f066476: 'xnr, NR',
  f066734: 'xnr, NR',
  f066804: 'xnr, NR',
  f067185: 'xnr, Korea, Gwangju',
  f067283: 'xnr, Korea, Seongnam-si',
  f067375: 'xnr, NR',
  f067598: 'xnr, NR',
  f068253: 'xnr, NR',
  f068556: 'xnr, NR',
  f068809: 'xnr, NR',
  f069448: 'xnr, NR',
  f069450: 'xnr, NR',
  f069661: 'xnr, China, Wuxi',
  f070044: 'xnr, NR',
  f070045: 'xnr, NR',
  f070337: 'xnr, China, Zhangzhou',
  f070730: 'xnr, NR',
  f070747: 'xnr, China, Shenzhen',
  f070756: 'xnr, China, Beijing',
  f070802: 'xnr, NR',
  f070803: 'xnr, NR',
  f070824: 'xnr, Taiwan, Hsinchu',
  f070932: 'xnr, NR',
  f071114: 'xnr, China, Shenyang',
  f071287: 'xnr, NR',
  f071692: "xnr, China, Xi'an",
  f072965: 'xnr, Korea, Busan',
  f073448: 'xnr, NR',
  f073525: 'xnr, NR',
  f073783: 'xnr, NR',
  f073844: 'xnr, NR',
  f073878: 'xnr, NR',
  f073888: 'xnr, NR',
  f073931: 'xnr, NR',
  f077761: 'xnr, NR',
  f078516: 'xnr, NR',
  f078899: 'xnr, NR',
  f079285: 'xnr, NR',
  f079719: 'xnr, NR',
  f079815: 'xnr, NR',
  f080131: 'xnr, NR',
  f082054: 'xnr, China, Hefei',
  f082175: 'xnr, China, Shenyang',
  f082590: 'xnr, China, Taizhou',
  f082635: 'xnr, NR',
  f082698: "xnr, USA, Xi'an",
  f082958: 'xnr, NR',
  f083638: 'xnr, China, Chongqing'
}

export default annotations
