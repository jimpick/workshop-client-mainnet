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

  f065259: 'new, NR', // carry-over

  // Active

  f019806: 'active, China, Beijing', // 1417115 about 3 hours
  f020523: 'active, China, Suzhou, changjiang', // 1416961 about 5 hours
  f021716: 'active, New Zealand, Wellington', // 1416960 about 3 hours
  f022142: 'active, USA, Queens, Nelson SR2', // 1417018 about 3 hours
  f022522: 'active, China, Dongguan', // 1418589 about 3 hours
  f023198: 'active, NR', // 1417507 about 4 hours
  f025007: 'active, Korea, Gyeonggi-do, PINBYTES-eCUBE', // 1416999 about 2 hours
  f071914: 'active, China, Beijing', // 1418087 about 5 hours
  f083065: 'active, China, Taizhou', // 1416968 about 2 hours
  f083903: 'active, NR', // 1416969 about 3 hours

  // Active-sealing (active, with in-flight sealing)

  f09693: 'active-sealing, USA, Portland + Singapore, 6block-CapsuleMining', // 1416865
  f010241: 'active-sealing, China, Beijing + USA, Portland, 6Block-P', // 1416962
  f015877: 'active-sealing, China, Jiaxing + USA', // 1416967

  // Sealing

  f01247: 'sealing, Canada, Montreal', // 1421950
  f01287: 'sealing, China, Jiaxing, MaiTian', // 1418402
  f01799: 'sealing, China, Jinan, TokenHome', // 1421482
  f02490: 'sealing, China, Fujian', // 1417966
  f02856: 'sealing, China, Chengdu', // 1417336
  f03134: 'sealing, China, Cangzhou, 乔木信息', // 1417179
  f03328: 'sealing, China, Xinxiang, Golden Miner', // 1421956
  f03339: 'sealing, China, Luzhou, benxun', // 1417180
  f08019: 'sealing, China, Yantai, 三合', // 1423193
  f08240: 'sealing, Russia, Novosibirsk, Rabinovitch', // 1419378
  f08399: 'sealing, USA, Sammamish', // 1417092
  f010399: 'sealing, China, Guangzhou', // 1417723
  f010446: 'sealing, Netherlands, Angelo', // 1421959
  f010498: 'sealing, China, Shenzhen', // 1417705
  f010501: 'sealing, China, Hangzhou, Interstellar Roewe', // 1418409
  f010523: 'sealing, China, Beijing, Interstellar Roewe', // 1418406
  f014768: 'sealing, Singapore, Funktafide, @Funk', // 1421948
  f015233: 'sealing, China, Nanjing', // 1421920
  f015747: 'sealing, Japan, Setagaya-ku', // 1421958
  f021075: 'sealing, China, Chengdu', // 1416970
  f022261: 'sealing, China, Luzhou', // 1416964
  f024944: 'sealing, Korea, Yeongdeungpo-dong', // 1416963
  f033549: 'sealing, China, Quzhou', // 1421942
  f035436: 'sealing, China, Jiangsu', // 1417645
  f039515: 'sealing, China, Chongqing', // 1418407
  f040218: 'sealing, China, Wuxi', // 1418019
  f053088: 'sealing, China, Shanghai', // 1421951
  f055102: 'sealing, Vietman, Ho Chi Minh City + China', // 1416965
  f055132: 'sealing, Vietman, Ho Chi Minh City + China', // 1416966
  f057466: 'sealing, China, Guangzhou', // 1418479
  f067314: 'sealing, China, Ningbo', // 1421854
  f068096: 'sealing, China, Sichuan', // 1417002
  f079817: "sealing, Russia, Ul'yanovka", // 1418371
  f080480: 'sealing, Ukraine, Lviv', // 1417963
  f083638: 'sealing, China, Chongqing', // 1419646
  f085710: 'sealing, China, Chengdu', // 1417337
  f089551: 'sealing, NR', // 1417072
  f089840: 'sealing, Korea, Yeongdeungpo-gu', // 1417857
  f090086: 'sealing, Korea', // 1417615
  f090387: 'sealing, China, Fuzhou', // 1417320
  f093658: 'sealing, China, Fujian', // 1418888
  f094085: 'sealing, Japan, Ota-ku', // 1422098
  f094374: 'sealing, China, Nanyang', // 1416971
  f095296: 'sealing, China, Suqian', // 1421954
  f095528: 'sealing, China, Hangzhou', // 1420984

  // Stuck

  f03345: 'stuck, China, Fuzhou, chh', // CheckForAcceptance: 1 day
  f04443: 'stuck, China, Shanghai, 罗良科技', // CheckForAcceptance: 1 day
  f08285: 'stuck, Latvia, Riga, stander', // CheckForAcceptance: 1 day
  f08482: 'stuck, USA, Athol, @why', // CheckForAcceptance: 1 day
  f010247: 'stuck, China, Yantai', // CheckForAcceptance: 1 day
  f010493: 'stuck, China, Shanghai', // CheckForAcceptance: 1 day
  f010505: 'stuck, China, Wuhan, Interstellar Roewe', // CheckForAcceptance: 1 day
  f010513: 'stuck, China, Chongqing', // CheckForAcceptance: 1 day
  f010528: 'stuck, China, Chongqing, Interstellar Roewe', // CheckForAcceptance: 1 day
  f015942: 'stuck, China, Ningbo', // CheckForAcceptance: 1 day
  f016594: 'stuck, Germany', // CheckForAcceptance: 1 day
  f019029: 'stuck, Serbia, Boljevac', // CheckForAcceptance: 1 day
  f019437: 'stuck, Korea, Guro-gu', // CheckForAcceptance: 1 day
  f023179: 'stuck, China, Fuzhou', // CheckForAcceptance: 1 day
  f030125: 'stuck, China, Nantong', // CheckForAcceptance: 1 day
  f034777: 'stuck, China, Chengdu', // CheckForAcceptance: 1 day
  f042391: 'stuck, China, Fuzhou', // CheckForAcceptance: 1 day
  f042567: 'stuck, China, Jinhua', // CheckForAcceptance: 1 day
  f044160: 'stuck, China, Guangzhou, muxing', // CheckForAcceptance: 1 day
  f055123: 'stuck, Korea, Busan', // CheckForAcceptance: 1 day
  f056226: 'stuck, NR', // CheckForAcceptance: 1 day
  f061043: 'stuck, China, Changsha', // CheckForAcceptance: 1 day
  f061158: 'stuck, China, Guangdong', // CheckForAcceptance: 1 day
  f066568: 'stuck, Korea, Gwangju, aoc-0002', // CheckForAcceptance: 1 day
  f078425: 'stuck, Korea, Bucheon-si', // CheckForAcceptance: 1 day
  f081644: 'stuck, China, Wenzhou', // CheckForAcceptance: 1 day
  f083235: 'stuck, Serbia, Belgrade', // CheckForAcceptance: 1 day
  f086610: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: 1 day
  f087931: 'stuck, China, Beijing', // Transferring: 1 day
  f088305: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: 1 day
  f088404: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: 1 day
  f089201: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: 1 day
  f090363: 'stuck, China, Beijing', // CheckForAcceptance: 1 day
  f090747: 'stuck, Korea, Anyang-si', // CheckForAcceptance: 1 day
  f091139: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: 1 day
  f092630: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: 1 day
  f092776: 'stuck, Korea, Gimhae', // CheckForAcceptance: 1 day
  f093212: 'stuck, Netherlands', // CheckForAcceptance: 1 day
  f093554: 'stuck, China, Zhangzhou', // CheckForAcceptance: 1 day
  f094785: 'stuck, China, Shanghai', // CheckForAcceptance: 1 day
  f094825: 'stuck, Korea, Gwangju', // CheckForAcceptance: 1 day
  f094899: 'stuck, Korea', // CheckForAcceptance: 1 day
  f094901: 'stuck, Korea, Bucheon-si', // CheckForAcceptance: 1 day
  f095049: 'stuck, Korea, Bucheon-si', // CheckForAcceptance: 1 day
  f095398: 'stuck, Korea, Sejong', // CheckForAcceptance: 1 day
  f095833: 'stuck, Korea, Yongin-si', // CheckForAcceptance: 1 day
  f096224: 'stuck, China, Chongqing', // CheckForAcceptance: 1 day

  // Busy

  f015734: 'busy, China, Qingdao', // cannot seal a sector before 299923
  f019399: 'busy, Korea, Busan', // cannot seal a sector before 299923
  f022820: 'busy, China, Guangdong', // cannot seal a sector before 299923
  f062492: 'busy, China, Hong Kong', // cannot seal a sector before 300069

  // Min Size

  f01238: 'min-size, Vietnam, Hanoi, FILECOIN-VIETNAM', // 131072 < 1073741824
  f01240: 'min-size, Netherlands, HidNand', // 131072 < 8388608
  f01272: 'min-size, Singapore', // 131072 < 10485760
  f01278: 'min-size, USA, Grand Rapids, MiMiner', // 131072 < 2147483648
  f02419: 'min-size, China, Shanghai, yuantai', // 131072 < 268435456
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 131072 < 2147483648
  f02619: 'min-size, China, Beijing, Blockcasting', // 131072 < 1048576
  f03488: 'min-size, Korea, Geumcheon-gu, we4u', // 131072 < 1073741824
  f03624: 'min-size, Germany, Chemnitz, ode', // 131072 < 20971520
  f05664: 'min-size, China, Shenzhen, 艾比特网络科技', // 131072 < 1073741824
  f07709: 'min-size, Korea, Dongjak-gu', // 131072 < 268435456
  f07819: 'min-size, China, Wuxi, YC--wuxi', // 131072 < 134217728
  f08403: 'min-size, UK, Lower Slaughter, TippyFlits', // 131072 < 134217728
  f09569: 'min-size, China, Beijing', // 131072 < 536870912
  f010254: 'min-size, Japan, Minamata', // 131072 < 134217728
  f010491: 'min-size, China, Shenzhen', // 131072 < 262144
  f010617: 'min-size, Canada, Surrey, kernelogic2, @feiya200', // 131072 < 1073741824
  f014394: 'min-size, China, Suzhou, IPFSCloud', // 131072 < 134217728
  f014395: 'min-size, China, Dongguan', // 131072 < 134217728
  f014409: 'min-size, USA, Waxhaw, Meatball Part III', // 131072 < 536870912
  f017242: 'min-size, China, Guangdong', // 131072 < 268435456
  f018501: 'min-size, China, Beijing', // 131072 < 1073741824
  f019551: 'min-size, UK, Birmingham, @Neofix AF', // 131072 < 134217728
  f019824: 'min-size, USA', // 131072 < 134217728
  f020385: 'min-size, Korea, Incheon', // 131072 < 536870912
  f020436: 'min-size, China, Beijing', // 131072 < 2147483648
  f020904: 'min-size, Korea, Uijeongbu-si, FILTop', // 131072 < 268435456
  f022163: 'min-size, dns:fil.akasha.network', // 131072 < 12582912
  f022352: 'min-size, Norway, Borgen, TechHedge, @Reiers', // 131072 < 8388608
  f022853: 'min-size, China, Fuzhou', // 131072 < 134217728
  f023152: 'min-size, China, Quanzhou', // 131072 < 134217728
  f023660: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023662: 'min-size, China, Fuzhou', // 131072 < 134217728
  f023853: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023854: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023855: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023858: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023859: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023861: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023868: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023869: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023870: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023871: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023876: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023928: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023977: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023978: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023980: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023981: 'min-size, China, Fuzhou', // 131072 < 268435456
  f024006: 'min-size, China, Fuzhou', // 131072 < 268435456
  f024007: 'min-size, China, Fuzhou', // 131072 < 536870912
  f024008: 'min-size, China, Fuzhou', // 131072 < 268435456
  f024012: 'min-size, China, Fuzhou', // 131072 < 268435456
  f024013: 'min-size, China, Fuzhou', // 131072 < 268435456
  f024014: 'min-size, China, Fuzhou', // 131072 < 268435456
  f024081: 'min-size, undefined', // 131072 < 268435456
  f024084: 'min-size, China, Fuzhou', // 131072 < 268435456
  f024085: 'min-size, China, Fuzhou', // 131072 < 268435456
  f024136: 'min-size, China, Fuzhou', // 131072 < 268435456
  f024146: 'min-size, China, Fuzhou', // 131072 < 268435456
  f024147: 'min-size, China, Fuzhou', // 131072 < 268435456
  f024148: 'min-size, China, Fuzhou', // 131072 < 268435456
  f024184: 'min-size, Korea, Gangnam-gu, we4u-GREEN', // 131072 < 1073741824
  f024511: 'min-size, China, Shenzhen', // 131072 < 134217728
  f025017: 'min-size, China, Hefei, 一三科技-913', // 131072 < 134217728
  f030335: 'min-size, China, Fujian', // 131072 < 134217728
  f030379: 'min-size, Korea, Uiwang', // 131072 < 1073741824
  f032934: 'min-size, Korea, Incheon', // 131072 < 524288
  f033356: 'min-size, Korea, Gangnum-gu, we4u-YELLOW', // 131072 < 1073741824
  f034701: 'min-size, China, Shenzhen', // 131072 < 134217728
  f047419: 'min-size, USA, Waukesha', // 131072 < 134217728
  f047858: 'min-size, China, Wuhan', // 131072 < 134217728
  f048172: 'min-size, China, Suzhou', // 131072 < 134217728
  f048192: 'min-size, China, Suzhou', // 131072 < 134217728
  f054677: 'min-size, Finland, Helsinki', // 131072 < 33554432
  f058000: 'min-size, China, Suzhou', // 131072 < 1048576
  f065266: 'min-size, China, Hefei', // 131072 < 134217728
  f079425: 'min-size, NR', // 131072 < 134217728
  f082617: 'min-size, China, Fujian', // 131072 < 134217728
  f090851: 'min-size, China, Ningxia', // 131072 < 134217728
  f091243: 'min-size, NR', // 131072 < 10485760

  // Max Size

  // Min Ask

  f01241: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f01276: 'min-ask, Canada, Brampton, NBFS Canada', // 20000000 < 36621093
  f01277: 'min-ask, Sweden, Stockholm, tvsthlm', // 20000000 < 122070312500000
  f01280: 'min-ask, China, Wuxi, 了凡超算', // 20000000 < 12207031250000000
  f01291: 'min-ask, Sweden, Stockholm, tvsthlm', // 20000000 < 12207031250000
  f02301: 'min-ask, USA', // 20000000 < 610351562500000
  f02381: 'min-ask, China, Dongguan, 西野七濑迷叔', // 20000000 < 6103515625000
  f02387: 'min-ask, Canada, Brampton, NBFS Canada', // 20000000 < 24414062
  f02401: 'min-ask, Canada, Chambly, NBFS Canada', // 20000000 < 24414062
  f02405: 'min-ask, China, Shenzhen', // 20000000 < 12207031250000000
  f02415: 'min-ask, China, Hong Kong', // 20000000 < 122070312500000
  f02500: 'min-ask, Korea, Seongnam-si', // 20000000 < 1220703125000
  f02501: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f02514: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f02520: 'min-ask, China, Hong Kong + Dongguan', // 20000000 < 61035156250000000000000
  f02606: 'min-ask, China, Shanghai', // 20000000 < 122070312500
  f02620: 'min-ask, Poland, Krakow, @magik6k', // 20000000 < 1147460937
  f02622: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f02623: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f02633: 'min-ask, China, Hong Kong', // 20000000 < 122070312500000
  f02645: 'min-ask, China, Hong Kong', // 20000000 < 122070312500000
  f03224: 'min-ask, Ukraine, Irpin, oboltusov', // 20000000 < 610351562
  f03273: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f03274: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f03275: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f03364: 'min-ask, China, Guangzhou', // 20000000 < 12207031250000000
  f03482: 'min-ask, China, Wuxi', // 20000000 < 12207031250000000
  f03491: 'min-ask, China, Hong Kong', // 20000000 < 122070312500000
  f05315: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f05316: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f07850: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f07919: 'min-ask, China, Beijing, Shanghai, Hunan', // 20000000 < 122070312500000
  f07990: 'min-ask, China, Hong Kong', // 20000000 < 122070312500000
  f07998: 'min-ask, China, Hangzhou', // 20000000 < 1220703125
  f08025: 'min-ask, China, Hong Kong', // 20000000 < 122070312500000
  f08103: 'min-ask, China, Foshan, 花生酱肠粉', // 20000000 < 61035156
  f08257: 'min-ask, China, Ningbo + USA, Boardman', // 20000000 < 12207031250
  f08383: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f09696: 'min-ask, USA, Portland + Singapore', // 20000000 < 122070312500000
  f09848: 'min-ask, USA, Irvine, BigBearLake', // 20000000 < 122070312
  f010010: 'min-ask, China, Changzhou + Hong Kong', // 20000000 < 12207031250000000000000000
  f010253: 'min-ask, China, Beijing + USA, Portland', // 20000000 < 122070312500000
  f010405: 'min-ask, China, Foshan', // 20000000 < 122070312500000
  f010479: 'min-ask, France, Fontenay-sous-Bois, s0nik42', // 20000000 < 122070312
  f014365: 'min-ask, Australia, Marrickville + Japan, Heiwajima', // 20000000 < 120849609375000
  f015897: 'min-ask, China, Guangdong', // 20000000 < 12207031250000000
  f015927: 'min-ask, USA, East Islip, CDImine', // 20000000 < 30517578125000
  f015941: 'min-ask, Ukraine, Kyiv', // 20000000 < 610351562
  f017665: 'min-ask, China, Shenyang', // 20000000 < 122070312500000
  f018780: 'min-ask, Singapore + Germany, Frankfurt + USA', // 20000000 < 122070312500000
  f018781: 'min-ask, Singapore + Germany, Frankfurt + USA', // 20000000 < 122070312500000
  f018782: 'min-ask, Singapore + Germany, Frankfurt + USA', // 20000000 < 122070312500000
  f018783: 'min-ask, Singapore + Germany, Frankfurt + USA', // 20000000 < 122070312500000
  f018784: 'min-ask, Singapore + Germany, Frankfurt + USA', // 20000000 < 122070312500000
  f018785: 'min-ask, Singapore + Germany, Frankfurt + USA', // 20000000 < 122070312500000
  f019100: 'min-ask, Romania, Cluj-Napoca, noisyfan', // 20000000 < 122070312
  f019104: 'min-ask, Canada, Chambly, NBFS DEV', // 20000000 < 36621093
  f019240: 'min-ask, China, Beijing', // 20000000 < 122070312500000
  f019362: 'min-ask, China, Hangzhou, 青青子衿', // 20000000 < 1220703125
  f020378: 'min-ask, Bulgaria, Asenovgrad', // 20000000 < 122070312500
  f020398: 'min-ask, China, Zhangjiakou', // 20000000 < 1220703125000
  f020541: 'min-ask, China, Shanghai', // 20000000 < 61035156250
  f020747: 'min-ask, China, Xiamen', // 20000000 < 122070312
  f021265: 'min-ask, China, Wuhan', // 20000000 < 9765625000000000
  f022130: 'min-ask, Korea, Seodaemun-gu', // 20000000 < 61035156
  f022308: 'min-ask, China, Shenzhen', // 20000000 < 12207031250
  f022922: 'min-ask, China, Shenzhen, CAAP-MEG', // 20000000 < 12207031250000000
  f023001: 'min-ask, China, Changsha', // 20000000 < 122070312
  f023467: 'min-ask, Norway, Oslo, PhiMining.io', // 20000000 < 61035156
  f023495: 'min-ask, China, Beijing + USA, Portland', // 20000000 < 122070312500000
  f023565: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f023825: 'min-ask, USA, Portland', // 20000000 < 122070312500000
  f023843: 'min-ask, China, Zhangjiakou', // 20000000 < 122070312500000
  f024015: 'min-ask, USA, Portland, FILmiPool-JP01', // 20000000 < 122070312500000
  f024016: 'min-ask, USA, Portland', // 20000000 < 122070312500000
  f024156: 'min-ask, USA', // 20000000 < 12207031250000
  f024972: 'min-ask, undefined', // 20000000 < 122070312500000
  f029344: 'min-ask, Korea, Seongnam-si', // 20000000 < 1220703125000
  f029401: 'min-ask, USA, Portland + New Castle', // 20000000 < 122070312500000
  f029404: 'min-ask, USA, Portland + New Castle', // 20000000 < 122070312500000
  f030203: 'min-ask, undefined', // 20000000 < 12207031250000000
  f030384: 'min-ask, undefined', // 20000000 < 12207031250000
  f032913: 'min-ask, China, Shenzhen', // 20000000 < 122070312500
  f033123: 'min-ask, USA, Portland + New Castle', // 20000000 < 122070312500000
  f033511: 'min-ask, China, Dongguan', // 20000000 < 1220703125
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
  f060072: 'min-ask, China, Chongqing', // 20000000 < 610351562500000
  f061407: 'min-ask, China, Shenzhen', // 20000000 < 12207031250
  f061740: 'min-ask, USA, Portland + New Castle', // 20000000 < 122070312500000
  f062260: 'min-ask, China, Guangzhou', // 20000000 < 61035156250000
  f062318: 'min-ask, Korea, Naju', // 20000000 < 1220703125000
  f062334: 'min-ask, USA, Portland + New Castle', // 20000000 < 122070312500000
  f062353: 'min-ask, Germany, Frankfurt', // 20000000 < 610351562
  f062770: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f062811: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f062982: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f064218: 'min-ask, USA, Kirkland', // 20000000 < 122070312
  f065103: 'min-ask, USA, Portland + China, Shenzhen', // 20000000 < 122070312500000
  f065200: 'min-ask, China, Yibin', // 20000000 < 61035156
  f066104: 'min-ask, China, Xingjiang + USA, Portland', // 20000000 < 122070312500000
  f066596: 'min-ask, USA, San Diego', // 20000000 < 610351562
  f066845: 'min-ask, China, Dongguan', // 20000000 < 1220581054687500000
  f068898: 'min-ask, China, Fuzhou', // 20000000 < 121948242187500000
  f069915: 'min-ask, NR', // 20000000 < 122070312500000
  f069919: 'min-ask, NR', // 20000000 < 122070312500000
  f070501: 'min-ask, USA + China, Hong Kong', // 20000000 < 122070312500000
  f070999: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f071664: 'min-ask, China, Shandong', // 20000000 < 12207031250000000000000000
  f071980: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f073552: 'min-ask, NR', // 20000000 < 122070312500000
  f073628: 'min-ask, USA, New Castle', // 20000000 < 122070312500000
  f074738: 'min-ask, Korea, Seongbuk-gu', // 20000000 < 1220703125000
  f078522: 'min-ask, NR', // 20000000 < 1220703125000
  f078770: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f078772: 'min-ask, NR', // 20000000 < 122070312500000
  f079197: 'min-ask, NR', // 20000000 < 122070312500000
  f079247: 'min-ask, USA, New Castle', // 20000000 < 122070312500000
  f079301: 'min-ask, USA, New Castle', // 20000000 < 122070312500000
  f082356: 'min-ask, China, Jiaxing', // 20000000 < 610351562500
  f082452: 'min-ask, China, Dongguan', // 20000000 < 1220581054687500000
  f082669: 'min-ask, USA, Daytona Beach', // 20000000 < 122070312500000
  f083625: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f084879: 'min-ask, Korea, Seongnam-si', // 20000000 < 1220703125000
  f086572: 'min-ask, NR', // 20000000 < 12207031250
  f092514: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f094614: 'min-ask, China, Karamay', // 20000000 < 122070312500000

  // Error

  f01800: 'error, China, Shenzhen + Chengdu', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacec2uzb4qd4wqkiqsdhhk356zo2chqg5qjduspixixlqokuk5znlqy n 254963, TS: bafy2bzaceazphzvfl2xgnkc5zbslpj2sf5wst5ld6sb5afuswnybqs2rnikg6 n254963)
  f02423: 'error, undefined', // stream reset
  f02665: 'error, Netherlands, Amsterdam, fm-ops', // stream reset
  f02666: 'error, China, Chengdu', // stream reset
  f02668: 'error, China, Chengdu', // stream reset
  f02822: 'error, China, Chengdu', // stream reset
  f02824: 'error, China, Chengdu', // stream reset
  f03225: 'error, China, Guyuan', // stream reset
  f03347: 'error, China, Shenzhen', // stream reset
  f08157: 'error, China, Beijing + Germany, Frankfurt, 超星际', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f08264: 'error, China, Xianning', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f08532: 'error, USA', // stream reset
  f09689: 'error, USA, Portland', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f020223: 'error, China, Guiyang', // stream reset
  f020928: 'error, China, Deyang + Singapore', // deal failed: (State=26) error calling node: ensuring funds: RPC error (-32601): method 'Filecoin.MarketEnsureAvailable' not found
  f023581: 'error, China, Hong Kong, mine-much', // stream reset
  f025019: 'error, China, Taiwan, Hsinchu', // stream reset
  f025025: 'error, China, Qingdao', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.099999999933279326 FIL, balance: 0.055857012536175182 FIL): validation failure
  f030327: 'error, China, Beijing', // stream reset
  f046043: 'error, China, Shanghai', // stream reset
  f046073: 'error, China, Shanghai', // stream reset
  f046074: 'error, China, Shanghai', // stream reset
  f048135: 'error, China, Chongqing, password interstellar', // AddPiece failed: adding piece to sector: writing piece: opening unsealed sector file: openning partial file '/lotus_data/unsealed/s-t048135-13088': open /lotus_data/unsealed/s-t048135-13088: no such file or directory
  f050022: 'error, China, Changsha', // stream reset
  f054163: 'error, China, Dongguan', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f056573: 'error, China, Sichuan', // stream reset
  f057070: 'error, NR', // stream reset
  f057127: 'error, China, Suzhou', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: SysErrOutOfGas(7)
  f057842: 'error, Korea, Gyeonggi-do', // stream reset
  f059280: 'error, China, Shenzhen', // stream reset
  f062375: 'error, Korea, Gyeonggi-do', // EOF
  f063173: 'error, Korea, Gyeonggi-do', // stream reset
  f064442: 'error, Japan', // stream reset
  f065280: 'error, Korea, Songpa-gu, Data Store Ltd', // AddPiece failed: getting current seal proof type: RPC client error: sendRequest failed: websocket routine exiting
  f065732: 'error, Korea, Gyeonggi-do', // stream reset
  f066566: 'error, Korea, Gwangju', // EOF
  f067083: 'error, Russia, Moscow', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f067195: 'error, China, Huizhou', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f067545: 'error, Canada, Kitchener', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f070288: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f070475: 'error, China, Guyuan', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.135364001372966455 FIL, balance: 0.048642383213669763 FIL): not enough funds to execute transaction
  f071190: 'error, Korea, Gyeonggi-do', // stream reset
  f073048: 'error, Korea, Gyeonggi-do', // stream reset
  f073535: 'error, Korea, Gyeonggi-do', // stream reset
  f080103: 'error, Korea, Seongnam-si', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacea3ym6kbazaofo5jyuawfowmosty6t4pw46wack2stmuiekkct2l2 n 1509, TS: bafy2bzacec5iyxi5ipq3mrsssechnfgv3efbzptwknthx644trvbzhc5drnbo n1509)
  f080468: 'error, NR', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacebfpbx33bgj5uyzgtn4fax3s4ffbqol4gbxvcrkxmp2iobxohqrem n 13775, TS: bafy2bzacea4n4lidhifnpdgzffiscvh4uxvdjifh452ikunowscka2bgdghla n13775)
  f082250: 'error, China, Guilin', // stream reset
  f085899: 'error, China, Wuxi', // deal failed: (State=26) error calling node: AddFunds errored: handler: websocket connection closed
  f085904: 'error, China, Chongqing', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f088290: 'error, NR', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: SysErrOutOfGas(7)
  f090052: 'error, China, Suqian', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f090484: 'error, NR', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f094128: 'error, China, Shenzhen', // stream reset
  f094869: 'error, China, Shanghai', // deal failed: (State=26) error calling node: reserving funds: GasEstimateMessageGas error: estimating gas used: message execution failed: exit SysErrSenderStateInvalid(2), reason: actor balance less than needed: 0 FIL < 0.00000101 FIL (RetCode=2)
  f094894: 'error, Korea, Gwangju', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.099999999991889696 FIL, balance: 0.00798582774260714 FIL): not enough funds to execute transaction
  f095506: 'error, China, Ningxia', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.09999999999131662 FIL, balance: 0.045824565180412935 FIL): not enough funds to execute transaction

  // Dial backoff

  f01800: 'error, China, Shenzhen + Chengdu', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacec2uzb4qd4wqkiqsdhhk356zo2chqg5qjduspixixlqokuk5znlqy n 254963, TS: bafy2bzaceazphzvfl2xgnkc5zbslpj2sf5wst5ld6sb5afuswnybqs2rnikg6 n254963)
  f02423: 'error, undefined', // stream reset
  f02665: 'error, Netherlands, Amsterdam, fm-ops', // stream reset
  f02666: 'error, China, Chengdu', // stream reset
  f02668: 'error, China, Chengdu', // stream reset
  f02822: 'error, China, Chengdu', // stream reset
  f02824: 'error, China, Chengdu', // stream reset
  f03225: 'error, China, Guyuan', // stream reset
  f03347: 'error, China, Shenzhen', // stream reset
  f08157: 'error, China, Beijing + Germany, Frankfurt, 超星际', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f08264: 'error, China, Xianning', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f08532: 'error, USA', // stream reset
  f09689: 'error, USA, Portland', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f020223: 'error, China, Guiyang', // stream reset
  f020928: 'error, China, Deyang + Singapore', // deal failed: (State=26) error calling node: ensuring funds: RPC error (-32601): method 'Filecoin.MarketEnsureAvailable' not found
  f023581: 'error, China, Hong Kong, mine-much', // stream reset
  f025019: 'error, China, Taiwan, Hsinchu', // stream reset
  f025025: 'error, China, Qingdao', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.099999999933279326 FIL, balance: 0.055857012536175182 FIL): validation failure
  f030327: 'error, China, Beijing', // stream reset
  f046043: 'error, China, Shanghai', // stream reset
  f046073: 'error, China, Shanghai', // stream reset
  f046074: 'error, China, Shanghai', // stream reset
  f048135: 'error, China, Chongqing, password interstellar', // AddPiece failed: adding piece to sector: writing piece: opening unsealed sector file: openning partial file '/lotus_data/unsealed/s-t048135-13088': open /lotus_data/unsealed/s-t048135-13088: no such file or directory
  f050022: 'error, China, Changsha', // stream reset
  f054163: 'error, China, Dongguan', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f056573: 'error, China, Sichuan', // stream reset
  f057070: 'error, NR', // stream reset
  f057127: 'error, China, Suzhou', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: SysErrOutOfGas(7)
  f057842: 'error, Korea, Gyeonggi-do', // stream reset
  f059280: 'error, China, Shenzhen', // stream reset
  f062375: 'error, Korea, Gyeonggi-do', // EOF
  f063173: 'error, Korea, Gyeonggi-do', // stream reset
  f064442: 'error, Japan', // stream reset
  f065280: 'error, Korea, Songpa-gu, Data Store Ltd', // AddPiece failed: getting current seal proof type: RPC client error: sendRequest failed: websocket routine exiting
  f065732: 'error, Korea, Gyeonggi-do', // stream reset
  f066566: 'error, Korea, Gwangju', // EOF
  f067083: 'error, Russia, Moscow', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f067195: 'error, China, Huizhou', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f067545: 'error, Canada, Kitchener', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f070288: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f070475: 'error, China, Guyuan', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.135364001372966455 FIL, balance: 0.048642383213669763 FIL): not enough funds to execute transaction
  f071190: 'error, Korea, Gyeonggi-do', // stream reset
  f073048: 'error, Korea, Gyeonggi-do', // stream reset
  f073535: 'error, Korea, Gyeonggi-do', // stream reset
  f080103: 'error, Korea, Seongnam-si', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacea3ym6kbazaofo5jyuawfowmosty6t4pw46wack2stmuiekkct2l2 n 1509, TS: bafy2bzacec5iyxi5ipq3mrsssechnfgv3efbzptwknthx644trvbzhc5drnbo n1509)
  f080468: 'error, NR', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacebfpbx33bgj5uyzgtn4fax3s4ffbqol4gbxvcrkxmp2iobxohqrem n 13775, TS: bafy2bzacea4n4lidhifnpdgzffiscvh4uxvdjifh452ikunowscka2bgdghla n13775)
  f082250: 'error, China, Guilin', // stream reset
  f085899: 'error, China, Wuxi', // deal failed: (State=26) error calling node: AddFunds errored: handler: websocket connection closed
  f085904: 'error, China, Chongqing', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f088290: 'error, NR', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: SysErrOutOfGas(7)
  f090052: 'error, China, Suqian', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f090484: 'error, NR', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f094128: 'error, China, Shenzhen', // stream reset
  f094869: 'error, China, Shanghai', // deal failed: (State=26) error calling node: reserving funds: GasEstimateMessageGas error: estimating gas used: message execution failed: exit SysErrSenderStateInvalid(2), reason: actor balance less than needed: 0 FIL < 0.00000101 FIL (RetCode=2)
  f094894: 'error, Korea, Gwangju', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.099999999991889696 FIL, balance: 0.00798582774260714 FIL): not enough funds to execute transaction
  f095506: 'error, China, Ningxia', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.09999999999131662 FIL, balance: 0.045824565180412935 FIL): not enough funds to execute transaction

  // Rejected

  f01800: 'error, China, Shenzhen + Chengdu', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacec2uzb4qd4wqkiqsdhhk356zo2chqg5qjduspixixlqokuk5znlqy n 254963, TS: bafy2bzaceazphzvfl2xgnkc5zbslpj2sf5wst5ld6sb5afuswnybqs2rnikg6 n254963)
  f02423: 'error, undefined', // stream reset
  f02665: 'error, Netherlands, Amsterdam, fm-ops', // stream reset
  f02666: 'error, China, Chengdu', // stream reset
  f02668: 'error, China, Chengdu', // stream reset
  f02822: 'error, China, Chengdu', // stream reset
  f02824: 'error, China, Chengdu', // stream reset
  f03225: 'error, China, Guyuan', // stream reset
  f03347: 'error, China, Shenzhen', // stream reset
  f08157: 'error, China, Beijing + Germany, Frankfurt, 超星际', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f08264: 'error, China, Xianning', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f08532: 'error, USA', // stream reset
  f09689: 'error, USA, Portland', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f020223: 'error, China, Guiyang', // stream reset
  f020928: 'error, China, Deyang + Singapore', // deal failed: (State=26) error calling node: ensuring funds: RPC error (-32601): method 'Filecoin.MarketEnsureAvailable' not found
  f023581: 'error, China, Hong Kong, mine-much', // stream reset
  f025019: 'error, China, Taiwan, Hsinchu', // stream reset
  f025025: 'error, China, Qingdao', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.099999999933279326 FIL, balance: 0.055857012536175182 FIL): validation failure
  f030327: 'error, China, Beijing', // stream reset
  f046043: 'error, China, Shanghai', // stream reset
  f046073: 'error, China, Shanghai', // stream reset
  f046074: 'error, China, Shanghai', // stream reset
  f048135: 'error, China, Chongqing, password interstellar', // AddPiece failed: adding piece to sector: writing piece: opening unsealed sector file: openning partial file '/lotus_data/unsealed/s-t048135-13088': open /lotus_data/unsealed/s-t048135-13088: no such file or directory
  f050022: 'error, China, Changsha', // stream reset
  f054163: 'error, China, Dongguan', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f056573: 'error, China, Sichuan', // stream reset
  f057070: 'error, NR', // stream reset
  f057127: 'error, China, Suzhou', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: SysErrOutOfGas(7)
  f057842: 'error, Korea, Gyeonggi-do', // stream reset
  f059280: 'error, China, Shenzhen', // stream reset
  f062375: 'error, Korea, Gyeonggi-do', // EOF
  f063173: 'error, Korea, Gyeonggi-do', // stream reset
  f064442: 'error, Japan', // stream reset
  f065280: 'error, Korea, Songpa-gu, Data Store Ltd', // AddPiece failed: getting current seal proof type: RPC client error: sendRequest failed: websocket routine exiting
  f065732: 'error, Korea, Gyeonggi-do', // stream reset
  f066566: 'error, Korea, Gwangju', // EOF
  f067083: 'error, Russia, Moscow', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f067195: 'error, China, Huizhou', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f067545: 'error, Canada, Kitchener', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f070288: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f070475: 'error, China, Guyuan', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.135364001372966455 FIL, balance: 0.048642383213669763 FIL): not enough funds to execute transaction
  f071190: 'error, Korea, Gyeonggi-do', // stream reset
  f073048: 'error, Korea, Gyeonggi-do', // stream reset
  f073535: 'error, Korea, Gyeonggi-do', // stream reset
  f080103: 'error, Korea, Seongnam-si', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacea3ym6kbazaofo5jyuawfowmosty6t4pw46wack2stmuiekkct2l2 n 1509, TS: bafy2bzacec5iyxi5ipq3mrsssechnfgv3efbzptwknthx644trvbzhc5drnbo n1509)
  f080468: 'error, NR', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacebfpbx33bgj5uyzgtn4fax3s4ffbqol4gbxvcrkxmp2iobxohqrem n 13775, TS: bafy2bzacea4n4lidhifnpdgzffiscvh4uxvdjifh452ikunowscka2bgdghla n13775)
  f082250: 'error, China, Guilin', // stream reset
  f085899: 'error, China, Wuxi', // deal failed: (State=26) error calling node: AddFunds errored: handler: websocket connection closed
  f085904: 'error, China, Chongqing', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f088290: 'error, NR', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: SysErrOutOfGas(7)
  f090052: 'error, China, Suqian', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f090484: 'error, NR', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f094128: 'error, China, Shenzhen', // stream reset
  f094869: 'error, China, Shanghai', // deal failed: (State=26) error calling node: reserving funds: GasEstimateMessageGas error: estimating gas used: message execution failed: exit SysErrSenderStateInvalid(2), reason: actor balance less than needed: 0 FIL < 0.00000101 FIL (RetCode=2)
  f094894: 'error, Korea, Gwangju', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.099999999991889696 FIL, balance: 0.00798582774260714 FIL): not enough funds to execute transaction
  f095506: 'error, China, Ningxia', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.09999999999131662 FIL, balance: 0.045824565180412935 FIL): not enough funds to execute transaction

  // Dial errors

  f01800: 'error, China, Shenzhen + Chengdu', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacec2uzb4qd4wqkiqsdhhk356zo2chqg5qjduspixixlqokuk5znlqy n 254963, TS: bafy2bzaceazphzvfl2xgnkc5zbslpj2sf5wst5ld6sb5afuswnybqs2rnikg6 n254963)
  f02423: 'error, undefined', // stream reset
  f02665: 'error, Netherlands, Amsterdam, fm-ops', // stream reset
  f02666: 'error, China, Chengdu', // stream reset
  f02668: 'error, China, Chengdu', // stream reset
  f02822: 'error, China, Chengdu', // stream reset
  f02824: 'error, China, Chengdu', // stream reset
  f03225: 'error, China, Guyuan', // stream reset
  f03347: 'error, China, Shenzhen', // stream reset
  f08157: 'error, China, Beijing + Germany, Frankfurt, 超星际', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f08264: 'error, China, Xianning', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f08532: 'error, USA', // stream reset
  f09689: 'error, USA, Portland', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f020223: 'error, China, Guiyang', // stream reset
  f020928: 'error, China, Deyang + Singapore', // deal failed: (State=26) error calling node: ensuring funds: RPC error (-32601): method 'Filecoin.MarketEnsureAvailable' not found
  f023581: 'error, China, Hong Kong, mine-much', // stream reset
  f025019: 'error, China, Taiwan, Hsinchu', // stream reset
  f025025: 'error, China, Qingdao', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.099999999933279326 FIL, balance: 0.055857012536175182 FIL): validation failure
  f030327: 'error, China, Beijing', // stream reset
  f046043: 'error, China, Shanghai', // stream reset
  f046073: 'error, China, Shanghai', // stream reset
  f046074: 'error, China, Shanghai', // stream reset
  f048135: 'error, China, Chongqing, password interstellar', // AddPiece failed: adding piece to sector: writing piece: opening unsealed sector file: openning partial file '/lotus_data/unsealed/s-t048135-13088': open /lotus_data/unsealed/s-t048135-13088: no such file or directory
  f050022: 'error, China, Changsha', // stream reset
  f054163: 'error, China, Dongguan', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f056573: 'error, China, Sichuan', // stream reset
  f057070: 'error, NR', // stream reset
  f057127: 'error, China, Suzhou', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: SysErrOutOfGas(7)
  f057842: 'error, Korea, Gyeonggi-do', // stream reset
  f059280: 'error, China, Shenzhen', // stream reset
  f062375: 'error, Korea, Gyeonggi-do', // EOF
  f063173: 'error, Korea, Gyeonggi-do', // stream reset
  f064442: 'error, Japan', // stream reset
  f065280: 'error, Korea, Songpa-gu, Data Store Ltd', // AddPiece failed: getting current seal proof type: RPC client error: sendRequest failed: websocket routine exiting
  f065732: 'error, Korea, Gyeonggi-do', // stream reset
  f066566: 'error, Korea, Gwangju', // EOF
  f067083: 'error, Russia, Moscow', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f067195: 'error, China, Huizhou', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f067545: 'error, Canada, Kitchener', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f070288: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f070475: 'error, China, Guyuan', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.135364001372966455 FIL, balance: 0.048642383213669763 FIL): not enough funds to execute transaction
  f071190: 'error, Korea, Gyeonggi-do', // stream reset
  f073048: 'error, Korea, Gyeonggi-do', // stream reset
  f073535: 'error, Korea, Gyeonggi-do', // stream reset
  f080103: 'error, Korea, Seongnam-si', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacea3ym6kbazaofo5jyuawfowmosty6t4pw46wack2stmuiekkct2l2 n 1509, TS: bafy2bzacec5iyxi5ipq3mrsssechnfgv3efbzptwknthx644trvbzhc5drnbo n1509)
  f080468: 'error, NR', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacebfpbx33bgj5uyzgtn4fax3s4ffbqol4gbxvcrkxmp2iobxohqrem n 13775, TS: bafy2bzacea4n4lidhifnpdgzffiscvh4uxvdjifh452ikunowscka2bgdghla n13775)
  f082250: 'error, China, Guilin', // stream reset
  f085899: 'error, China, Wuxi', // deal failed: (State=26) error calling node: AddFunds errored: handler: websocket connection closed
  f085904: 'error, China, Chongqing', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f088290: 'error, NR', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: SysErrOutOfGas(7)
  f090052: 'error, China, Suqian', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f090484: 'error, NR', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f094128: 'error, China, Shenzhen', // stream reset
  f094869: 'error, China, Shanghai', // deal failed: (State=26) error calling node: reserving funds: GasEstimateMessageGas error: estimating gas used: message execution failed: exit SysErrSenderStateInvalid(2), reason: actor balance less than needed: 0 FIL < 0.00000101 FIL (RetCode=2)
  f094894: 'error, Korea, Gwangju', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.099999999991889696 FIL, balance: 0.00798582774260714 FIL): not enough funds to execute transaction
  f095506: 'error, China, Ningxia', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.09999999999131662 FIL, balance: 0.045824565180412935 FIL): not enough funds to execute transaction

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
  f02388: 'xnr, Netherlands, Amersfoort, Kroketje',
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
  f02778: 'xnr, NR',
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
  f05317: 'xnr, USA, Portland',
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
  f010202: 'xnr, Singapore',
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
  f020489: 'xnr, China, Lioaning',
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
  f021339: 'xnr, China, Jiaxing',
  f021346: 'xnr, China, Shanghai',
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
  f021583: 'xnr, China, Jiaxing',
  f021684: 'xnr, NR',
  f021695: 'xnr, USA',
  f021699: 'xnr, NR',
  f021704: 'xnr, NR',
  f021710: 'xnr, China, Shijiazhuang',
  f021725: 'xnr, NR',
  f021976: 'xnr, NR',
  f022015: 'xnr, China, Hangzhou',
  f022016: 'xnr, NR',
  f022030: 'xnr, NR',
  f022033: 'xnr, NR',
  f022038: 'xnr, NR',
  f022070: 'xnr, China, Jieyang',
  f022072: 'xnr, China, Jieyang',
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
  f022969: 'xnr, China, Chengdu',
  f022970: 'xnr, NR',
  f022996: 'xnr, NR',
  f023021: 'xnr, Korea, Yeongdeungpo-dong',
  f023108: 'xnr, China, Dongguan',
  f023159: 'xnr, NR',
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
  f023627: 'xnr, China, Zhongwei',
  f023643: 'xnr, NR',
  f023647: 'xnr, Korea, Gangseo-gu',
  f023649: 'xnr, Korea, Seoul, LS&NIHON',
  f023651: 'xnr, NR',
  f023661: 'xnr, China, Zhejiang',
  f023678: 'xnr, China, Jiaxing',
  f023798: 'xnr, China, Shanghai',
  f023801: 'xnr, China, Dongguan',
  f023826: 'xnr, USA, Germantown',
  f023881: 'xnr, China, Fuzhou',
  f023939: 'xnr, NR',
  f023943: 'xnr, USA, Ashburn',
  f023965: 'xnr, NR',
  f023986: 'xnr, Korea, Seoul',
  f024031: 'xnr, NR',
  f024074: 'xnr, NR',
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
  f029490: 'xnr, NR',
  f029529: 'xnr, China, Dongguan',
  f029546: 'xnr, NR',
  f029566: 'xnr, NR',
  f029595: 'xnr, undefined',
  f029619: 'xnr, undefined',
  f029632: 'xnr, undefined',
  f029649: 'xnr, China, Beijing',
  f029665: 'xnr, NR',
  f030230: 'xnr, China, Sichuan',
  f030231: 'xnr, China, Hunan',
  f030249: 'xnr, NR',
  f030272: 'xnr, undefined',
  f030386: 'xnr, NR',
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
  f033463: 'xnr, NR',
  f033475: 'xnr, NR',
  f033517: 'xnr, China, Changsha',
  f033545: 'xnr, China, Shenzhen + USA',
  f034047: 'xnr, China, Hangzhou',
  f034084: 'xnr, China, Chongqing',
  f034229: 'xnr, USA, Minneapolis',
  f034311: 'xnr, Korea, Gangnam-gu',
  f034362: 'xnr, China, Sichuan',
  f034544: 'xnr, NR',
  f034545: 'xnr, NR',
  f034548: 'xnr, NR',
  f034566: 'xnr, NR',
  f034652: 'xnr, Korea, Yeongdeungpo-dong',
  f034666: 'xnr, NR',
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
  f043376: 'xnr, Korea, Incheon',
  f044143: 'xnr, China, Taiwan, Taipei',
  f044315: 'xnr, NR',
  f044788: 'xnr, NR',
  f045743: 'xnr, NR',
  f046078: 'xnr, China, Shaanxi',
  f046315: 'xnr, NR',
  f046317: 'xnr, China, Nanyang',
  f047327: 'xnr, China, Hong Kong',
  f047536: 'xnr, NR',
  f048545: 'xnr, China, Chengdu',
  f048669: 'xnr, NR',
  f048968: 'xnr, NR',
  f048975: 'xnr, NR',
  f048986: 'xnr, NR',
  f049882: 'xnr, Netherlands, De Rijp, Chipz',
  f049911: 'xnr, NR',
  f049990: 'xnr, Korea, Incheon',
  f052503: 'xnr, NR',
  f052562: 'xnr, NR',
  f052740: 'xnr, China, Shaanxi',
  f053229: 'xnr, NR',
  f053446: 'xnr, NR',
  f054120: 'xnr, NR',
  f054267: 'xnr, NR',
  f054389: 'xnr, China, Chongqing',
  f054412: 'xnr, NR',
  f054414: 'xnr, NR',
  f054415: 'xnr, NR',
  f054417: 'xnr, NR',
  f054418: 'xnr, NR',
  f054420: 'xnr, NR',
  f054422: 'xnr, NR',
  f054464: 'xnr, NR',
  f054526: 'xnr, NR',
  f055040: 'xnr, China, Fujian',
  f055335: 'xnr, NR',
  f055446: 'xnr, NR',
  f056227: 'xnr, NR',
  f056393: 'xnr, NR',
  f057115: 'xnr, China, Nanyang',
  f057560: 'xnr, NR',
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
  f060805: 'xnr, NR',
  f061059: 'xnr, China, Beijing',
  f061170: 'xnr, NR',
  f061174: 'xnr, NR',
  f061196: 'xnr, Korea, Yeongdeungpo-dong',
  f061430: 'xnr, Korea, Naju',
  f061503: 'xnr, NR',
  f061959: 'xnr, NR',
  f062245: 'xnr, NR',
  f062445: 'xnr, China, Shenzhen',
  f062449: 'xnr, NR',
  f062473: 'xnr, NR',
  f062475: 'xnr, NR',
  f062552: 'xnr, NR',
  f062587: 'xnr, NR',
  f062619: 'xnr, NR',
  f062735: 'xnr, China, Hong Kong',
  f062931: 'xnr, NR',
  f062937: 'xnr, NR',
  f063628: 'xnr, NR',
  f063780: 'xnr, China, Shenyang',
  f063869: 'xnr, NR',
  f063921: 'xnr, China, Ili',
  f063996: 'xnr, China, Sichuan',
  f064668: 'xnr, China, Hong Kong',
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
  f065686: 'xnr, NR',
  f065689: 'xnr, NR',
  f065718: 'xnr, China, Taiwan, Hsinchu',
  f065853: 'xnr, Korea, Seongnam-si',
  f065941: 'xnr, NR',
  f066075: 'xnr, NR',
  f066102: 'xnr, NR',
  f066210: 'xnr, NR',
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
  f070045: 'xnr, NR',
  f070337: 'xnr, China, Zhangzhou',
  f070730: 'xnr, NR',
  f070747: 'xnr, China, Shenzhen',
  f070756: 'xnr, China, Beijing',
  f070802: 'xnr, NR',
  f070824: 'xnr, Taiwan, Hsinchu',
  f070932: 'xnr, NR',
  f071114: 'xnr, China, Shenyang',
  f071692: "xnr, China, Xi'an",
  f073448: 'xnr, NR',
  f073525: 'xnr, NR',
  f073783: 'xnr, NR',
  f073844: 'xnr, NR',
  f073878: 'xnr, NR',
  f073888: 'xnr, NR',
  f073904: 'xnr, NR',
  f073931: 'xnr, NR',
  f077761: 'xnr, NR',
  f078516: 'xnr, NR',
  f078899: 'xnr, NR',
  f079092: 'xnr, NR',
  f079285: 'xnr, NR',
  f079719: 'xnr, NR',
  f080131: 'xnr, NR',
  f080868: 'xnr, NR',
  f080945: 'xnr, China, Shenzhen',
  f081969: 'xnr, NR',
  f082054: 'xnr, China, Hefei',
  f082095: 'xnr, NR',
  f082175: 'xnr, China, Shenyang',
  f082543: 'xnr, Korea, Osan',
  f082590: 'xnr, China, Taizhou',
  f082635: 'xnr, NR',
  f082698: "xnr, USA, Xi'an",
  f082730: 'xnr, NR',
  f082958: 'xnr, NR',
  f083419: 'xnr, NR',
  f083474: 'xnr, NR',
  f083542: 'xnr, NR',
  f083920: 'xnr, NR',
  f083983: 'xnr, NR',
  f084135: 'xnr, NR',
  f084155: 'xnr, NR',
  f084419: 'xnr, NR',
  f084907: 'xnr, NR',
  f085226: 'xnr, Korea, Busan',
  f085415: 'xnr, NR',
  f085435: 'xnr, NR',
  f085437: 'xnr, NR',
  f085682: 'xnr, NR',
  f085735: "xnr, China, Ya'an",
  f085947: 'xnr, NR',
  f086028: 'xnr, NR',
  f086151: 'xnr, China, Dongguan',
  f086204: 'xnr, NR',
  f086222: 'xnr, NR',
  f086240: 'xnr, NR',
  f086366: 'xnr, NR',
  f086381: 'xnr, NR',
  f086439: 'xnr, NR',
  f086442: 'xnr, NR',
  f086450: 'xnr, NR',
  f086988: 'xnr, NR',
  f087096: 'xnr, NR',
  f087868: 'xnr, NR',
  f088002: 'xnr, NR',
  f089819: 'xnr, NR',
  f089920: 'xnr, NR',
  f090104: 'xnr, China, Dongguan',
  f090481: 'xnr, NR',
  f090492: 'xnr, NR',
  f090864: 'xnr, NR',
  f091095: 'xnr, Korea, Gwangju + Buk-gu',
  f091143: 'xnr, NR',
  f091355: 'xnr, NR',
  f091395: 'xnr, NR',
  f092157: 'xnr, NR',
  f092228: 'xnr, NR',
  f092724: 'xnr, China, Beijing',
  f092887: 'xnr, NR',
  f092971: 'xnr, China, Chongqing',
  f093701: 'xnr, NR',
  f093907: 'xnr, NR',
  f094003: 'xnr, NR',
  f094625: 'xnr, NR',
  f094675: 'xnr, NR',
  f094765: 'xnr, NR',
  f094847: 'xnr, NR'
}

export default annotations
