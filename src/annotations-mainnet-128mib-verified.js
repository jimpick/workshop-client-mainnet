// Slingshot test results
//
// Additional testing with files > 128MiB in size
//
// These are generated from a second round of testing after attempting
// to store a small file, see annotations-spacerace.js for those results

const annotations = {
  // Retest

  // Candidates

  f02415:
    'candidate, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f02490: 'candidate, China, Fujian', // carry-over
  f02633:
    'candidate, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f02645:
    'candidate, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f03143:
    'candidate, Vietman, Ho Chi Minh City + China, Beijing + Shijiazhuang', // carry-over
  f03491:
    'candidate, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f07990:
    'candidate, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f08025:
    'candidate, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f010513: 'candidate, China, Chongqing', // carry-over
  f010558: 'candidate, NR', // carry-over
  f018780:
    'candidate, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f018781:
    'candidate, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f018783:
    'candidate, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f018784:
    'candidate, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f018785:
    'candidate, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f023868: 'candidate, China, Fuzhou', // carry-over
  f078770: 'candidate, China, Karamay', // carry-over
  f0118360: 'candidate, China, Hangzhou', // carry-over
  f0141614: 'candidate, China, Fujian', // carry-over
  f0148143: 'candidate, China, Tianjin', // carry-over
  f0242152: 'candidate, Korea, Guro-gu', // carry-over

  // Active

  f02500: 'active, Korea, Seongnam-si', // 1597383 about 12 hours
  f025007: 'active, Korea, Gyeonggi-do, PINBYTES-eCUBE', // 1597381 about 12 hours
  f065280: 'active, Korea, Songpa-gu, Data Store Ltd', // 1597376 about 12 hours
  f097777: 'active, Ukraine, Ivano-Frankivsk', // 1597401 about 1 hour
  f0100082: 'active, Korea, Seongnam-si', // 1597379 about 12 hours
  f0106949: 'active, Korea, Seoul', // 1597392 about 11 hours
  f0111885: 'active, Korea, Bucheon-si', // 1597394 about 2 hours
  f0152854: 'active, China, Huizhou', // 1597396 about 11 hours
  f0158468: 'active, China, Guangzhou', // 1597371 about 12 hours
  f0216138: 'active, China, Shenzhen', // 1597372 about 1 hour
  f0224841: 'active, China, Guangzhou', // 1597391 about 11 hours

  // Sealing (active-sealing = previously active, retesting with new deal)

  // Sealing

  f02540: 'sealing, USA, Mobile', // 1597361
  f014768: 'sealing, Singapore, Funktafide, @Funk', // 1597384
  f022142: 'sealing, USA, Queens, Nelson SR2', // 1597377
  f022261: 'sealing, China, Luzhou', // 1597449
  f055102: 'sealing, Vietman, Ho Chi Minh City + China', // 1597390
  f055132: 'sealing, Vietman, Ho Chi Minh City + China', // 1597382
  f058369: 'sealing, USA, Boston', // 1597446
  f065200: 'sealing, China, Yibin', // 1597450
  f078621: 'sealing, Korea, Uiwang', // 1597385
  f086151: 'sealing, China, Dongguan', // 1597447
  f089840: 'sealing, Korea, Yeongdeungpo-gu', // 1597437
  f096976: 'sealing, Russia', // 1597395
  f097720: 'sealing, Korea, Bucheon-si', // 1597397
  f098706: 'sealing, Korea, Icheon-si', // 1597485
  f0102313: 'sealing, Korea, Gangseo-gu', // 1597427
  f0107995: 'sealing, NR', // 1597373
  f0110133: 'sealing, China, Ningbo', // 1597370
  f0110488: 'sealing, China, Chongqing', // 1597483
  f0113331: 'sealing, Korea, Jinju + USA', // 1597387
  f0115108: 'sealing, Korea, Yangcheon-gu', // 1597374
  f0121958: 'sealing, Korea, Seoul', // 1597484
  f0131611: 'sealing, Korea, Jeju City', // 1597487
  f0133999: 'sealing, China, Changsha', // 1597436
  f0134671: 'sealing, Korea, Gimpo-si', // 1597363
  f0142606: 'sealing, Korea, Gangseo-gu', // 1597435
  f0149768: 'sealing, China, Dongguan', // 1597362
  f0156207: 'sealing, Korea, Ulsan', // 1597388
  f0156452: 'sealing, Korea, Ulsan', // 1597378
  f0157265: 'sealing, NR', // 1597399
  f0157564: 'sealing, Korea, Daejeon', // 1597360
  f0165375: 'sealing, Korea, Seongnam-si', // 1597380
  f0215497: 'sealing, Korea, Gangseo-gu', // 1597445
  f0215704: 'sealing, Korea, Icheon-si', // 1597364
  f0228575: 'sealing, Canada, Calgary', // 1597444
  f0230200: 'sealing, Korea, Gwanak-gu', // 1597375

  // Stuck

  f08403: 'stuck, UK, Lower Slaughter, TippyFlits', // CheckForAcceptance: about 21 hours
  f024468: 'stuck, China, Shenzhen', // Transferring: about 21 hours
  f0110804: 'stuck, USA, Santa Clara', // CheckForAcceptance: about 20 hours
  f0160291: 'stuck, USA', // CheckForAcceptance: about 20 hours
  f0165539: 'stuck, Japan, Yokohama', // CheckForAcceptance: about 20 hours
  f0229547: 'stuck, Japan, Yokohama', // CheckForAcceptance: about 21 hours
  f0242260: 'stuck, USA, St. Louis', // CheckForAcceptance: about 20 hours
  f0392712: 'stuck, Korea, Ulju-gun', // CheckForAcceptance: about 20 hours

  // Busy

  f015734: 'busy, China, Qingdao', // cannot seal a sector before 565357
  f022820: 'busy, China, Guangdong', // cannot seal a sector before 565355

  // Min-size

  f01234: 'min-size, Belgium, Bonheiden', // 134217728 < 3221225472
  f01238: 'min-size, Vietnam, Hanoi, FILECOIN-VIETNAM', // 134217728 < 8589934592
  f01240: 'min-size, Netherlands, HidNand', // 134217728 < 268435456
  f01276: 'min-size, Canada, Brampton, NBFS Canada', // 134217728 < 17179869184
  f01278: 'min-size, USA, Grand Rapids, MiMiner', // 134217728 < 1073741824
  f02387: 'min-size, Canada, Brampton, NBFS Canada', // 134217728 < 17179869184
  f02401: 'min-size, Canada, Chambly, NBFS Canada', // 134217728 < 17179869184
  f02419: 'min-size, China, Shanghai, yuantai', // 134217728 < 268435456
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 134217728 < 16106127360
  f02620: 'min-size, Poland, Krakow, @magik6k', // 268435456 < 536870912
  f03488: 'min-size, Korea, Yeongdeungpo-dong', // 134217728 < 1073741824
  f03624: 'min-size, Germany, Chemnitz, ode', // 134217728 < 8589934592
  f07945: 'min-size, China, Guangzhou', // 134217728 < 1073741824
  f07998: 'min-size, China, Hangzhou', // 134217728 < 8000000000
  f08240: 'min-size, Russia, Novosibirsk, Rabinovitch', // 134217728 < 1073741824
  f08399: 'min-size, USA, Sammamish', // 134217728 < 4294967296
  f09848: 'min-size, USA, Irvine, BigBearLake', // 268435456 < 536870912
  f010088: 'min-size, NR', // 134217728 < 1073741824
  f010446: 'min-size, Netherlands, Angelo', // 134217728 < 1073741824
  f010479: 'min-size, France, Fontenay-sous-Bois, s0nik42', // 134217728 < 8589934592
  f010507: 'min-size, China, Hangzhou', // 134217728 < 1073741824
  f010617: 'min-size, Canada, Surrey, kernelogic2, @feiya200', // 134217728 < 1073741824
  f014409: 'min-size, USA, Monroe', // 134217728 < 4294967296
  f015927: 'min-size, USA, East Islip, CDImine', // 134217728 < 536870912
  f018501: 'min-size, China, Beijing', // 134217728 < 1073741824
  f019279: 'min-size, Canada, Calgary', // 134217728 < 8589934592
  f019362: 'min-size, China, Hangzhou, 青青子衿', // 134217728 < 17179869184
  f019399: 'min-size, Korea, Busan', // 134217728 < 268435456
  f019551: 'min-size, UK, Birmingham, @Neofix AF', // 134217728 < 536870912
  f020378: 'min-size, Bulgaria, Asenovgrad', // 134217728 < 2147483648
  f020385: 'min-size, Korea, Incheon', // 134217728 < 536870912
  f020904: 'min-size, Korea, Uijeongbu-si, FILTop', // 134217728 < 8589934592
  f021716: 'min-size, New Zealand, Wellington', // 134217728 < 8589934592
  f022130: 'min-size, Korea, Seodaemun-gu', // 134217728 < 536870912
  f022163: 'min-size, dns:fil.akasha.network', // 134217728 < 8589934592
  f022289: 'min-size, China, Mianyang', // 134217728 < 4294967296
  f022352: 'min-size, Norway, Borgen, TechHedge, @Reiers', // 134217728 < 1073741824
  f022399: 'min-size, China, Beijing', // 134217728 < 1573031772
  f023467: 'min-size, Norway, Oslo, PhiMining.io', // 134217728 < 268435456
  f023660: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023662: 'min-size, China, Fuzhou', // 268435456 < 1572864000
  f023853: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023854: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023855: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023858: 'min-size, China, Fuzhou', // 268435456 < 1572864000
  f023859: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023861: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023869: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023870: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023871: 'min-size, China, Fuzhou', // 134217728 < 4294967296
  f023928: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023971: 'min-size, USA', // 134217728 < 1073741824
  f023977: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023978: 'min-size, China, Fuzhou', // 268435456 < 1572864000
  f023980: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023981: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f024006: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f024007: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f024008: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f024012: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f024013: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f024014: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f024081: 'min-size, undefined', // 134217728 < 1572864000
  f024084: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f024085: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f024136: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f024146: 'min-size, China, Fuzhou', // 268435456 < 1572864000
  f024147: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f024148: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f024184: 'min-size, Korea, Yeongdeungpo-dong', // 134217728 < 1073741824
  f030379: 'min-size, Korea, Uiwang', // 134217728 < 2147483648
  f032934: 'min-size, Korea, Incheon', // 134217728 < 1073741824
  f033189: 'min-size, NR', // 134217728 < 2147483648
  f033356: 'min-size, Korea, Yeongdeungpo-dong', // 134217728 < 1073741824
  f034047: 'min-size, China, Hangzhou', // 134217728 < 1073741824
  f047419: 'min-size, USA, Waukesha', // 134217728 < 17179869184
  f049882: 'min-size, Netherlands, De Rijp, Chipz', // 134217728 < 268435456
  f058000: 'min-size, China, Suzhou', // 134217728 < 1073741824
  f062353: 'min-size, Germany, Frankfurt', // 134217728 < 17179869184
  f062770: 'min-size, China, Fuzhou', // 134217728 < 268435456
  f062811: 'min-size, China, Fuzhou', // 134217728 < 268435456
  f062982: 'min-size, China, Fuzhou', // 134217728 < 268435456
  f064218: 'min-size, USA, Kirkland', // 134217728 < 17179869184
  f078522: 'min-size, NR', // 134217728 < 4294967296
  f079817: "min-size, Russia, Ul'yanovka", // 134217728 < 1073741824
  f080480: 'min-size, Ukraine, Lviv', // 134217728 < 2147483648
  f082452: 'min-size, China, Dongguan', // 134217728 < 268435456
  f083920: 'min-size, NR', // 134217728 < 1573031772
  f097386: 'min-size, China, Beijing', // 134217728 < 268435456
  f097618: 'min-size, China, Suzhou', // 134217728 < 524288000
  f099608: 'min-size, Latvia, Riga', // 134217728 < 268435456
  f0100116: 'min-size, Korea, Uljin County', // 134217728 < 1073741824
  f0102641: 'min-size, China, Guangzhou', // 134217728 < 268435456
  f0102670: 'min-size, China, Xiamen', // 134217728 < 268435456
  f0104671: 'min-size, Japan, Ota-ku', // 134217728 < 4294967296
  f0104967: 'min-size, Ukraine, Ternopil', // 134217728 < 2147483648
  f0107308: 'min-size, China, Shenyang', // 134217728 < 268435456
  f0109713: 'min-size, China, Beijing', // 134217728 < 268435456
  f0110442: 'min-size, China, Fujian', // 134217728 < 268435456
  f0110936: 'min-size, China, Fujian', // 134217728 < 268435456
  f0114924: 'min-size, China, Fujian', // 134217728 < 268435456
  f0120983: 'min-size, China, Fujian', // 134217728 < 268435456
  f0121450: 'min-size, China, Fujian', // 134217728 < 268435456
  f0121768: 'min-size, China, Guangdong', // 134217728 < 1073741824
  f0123931: 'min-size, China, Fujian', // 134217728 < 268435456
  f0124102: 'min-size, China, Beijing', // 134217728 < 268435456
  f0124335: 'min-size, Finland, Helsinki', // 134217728 < 1073741824
  f0127896: 'min-size, Bulgaria, Sofia', // 134217728 < 17179869184
  f0129976: 'min-size, Korea, Gwangju', // 134217728 < 5368709120
  f0134682: 'min-size, China, Beijing', // 134217728 < 268435456
  f0134778: 'min-size, China, Beijing', // 134217728 < 268435456
  f0142637: 'min-size, China, Mianyang', // 134217728 < 4294967296
  f0145162: 'min-size, Japan, Kumamoto', // 134217728 < 1073741824
  f0145874: 'min-size, Canada, Brampton', // 134217728 < 17179869184
  f0146165: 'min-size, China, Huizhou', // 134217728 < 268435456
  f0149765: 'min-size, China, Beijing', // 134217728 < 268435456
  f0157535: 'min-size, Canada, Brampton', // 134217728 < 17179869184
  f0165400: 'min-size, Canada, Brampton', // 134217728 < 17179869184
  f0187709: 'min-size, Russia, Moscow', // 134217728 < 1073741824
  f0220827: 'min-size, NR', // 134217728 < 8589934592

  // Max-size

  f02619: 'max-size, China, Beijing, Blockcasting', // 134217728 > 1048576
  f08019: 'max-size, China, Yantai, 三合', // 134217728 > 1048576
  f015233: 'max-size, China, Nanjing', // 134217728 > 1048576
  f019806: 'max-size, China, Beijing', // 134217728 > 1048576
  f023179: 'max-size, China, Fuzhou', // 134217728 > 1048576
  f024944: 'max-size, Korea, Yeongdeungpo-dong', // 134217728 > 1048576

  // Min-ask

  f01241: 'min-ask, China, Karamay', // carry-over
  f01277: 'min-ask, Sweden, Stockholm', // carry-over
  f01280: 'min-ask, China, Wuxi', // carry-over
  f01799: 'min-ask, China, Jinan + Singapore', // carry-over
  f02381: 'min-ask, China, Dongguan', // carry-over
  f02501: 'min-ask, China, Karamay', // carry-over
  f02514: 'min-ask, China, Karamay', // carry-over
  f02622: 'min-ask, China, Karamay', // carry-over
  f02623: 'min-ask, China, Karamay', // carry-over
  f03223: 'min-ask, USA', // carry-over
  f03273: 'min-ask, China, Karamay', // carry-over
  f03274: 'min-ask, China, Karamay', // carry-over
  f03275: 'min-ask, China, Karamay', // carry-over
  f03364: 'min-ask, China, Inner Mongolia', // carry-over
  f03482: 'min-ask, China, Karamay', // carry-over
  f05315: 'min-ask, China, Karamay', // carry-over
  f05316: 'min-ask, China, Karamay', // carry-over
  f05317: 'min-ask, China, Karamay', // carry-over
  f05664: 'min-ask, China, Hong Kong', // carry-over
  f07850: 'min-ask, China, Karamay', // carry-over
  f08383: 'min-ask, China, Karamay', // carry-over
  f09693: 'min-ask, China, Karamay', // carry-over
  f09696: 'min-ask, China, Karamay', // carry-over
  f010035: 'min-ask, Netherlands + China, Suzhou', // carry-over
  f010253: 'min-ask, China, Karamay', // carry-over
  f014365: 'min-ask, Australia, Turramurra + Sydney', // carry-over
  f015897: 'min-ask, China, Hong Kong', // carry-over
  f018782: 'min-ask, Singapore + USA + Germany, Frankfurt + UK, London', // carry-over
  f019240: 'min-ask, China, Beijing', // carry-over
  f021255: 'min-ask, Netherlands + China, Suzhou', // carry-over
  f023152: 'min-ask, China, Shandong', // carry-over
  f023495: 'min-ask, China, Karamay', // carry-over
  f023825: 'min-ask, China, Karamay', // carry-over
  f024015: 'min-ask, China, Karamay', // carry-over
  f024016: 'min-ask, China, Karamay', // carry-over
  f024156: 'min-ask, USA', // carry-over
  f029344: 'min-ask, Korea, Seongnam-si', // carry-over
  f029401: 'min-ask, China, Karamay', // carry-over
  f029404: 'min-ask, China, Karamay', // carry-over
  f030384: 'min-ask, China, Shenzhen', // carry-over
  f033123: 'min-ask, China, Karamay', // carry-over
  f039800: 'min-ask, China, Chengdu', // carry-over
  f040218: 'min-ask, China, Wuxi', // carry-over
  f042540: 'min-ask, China, Karamay', // carry-over
  f042558: 'min-ask, China, Karamay', // carry-over
  f042635: 'min-ask, China, Karamay', // carry-over
  f052447: 'min-ask, China, Karamay', // carry-over
  f054370: 'min-ask, China, Dongguan', // carry-over
  f055123: 'min-ask, Korea, Busan', // carry-over
  f056611: 'min-ask, China, Karamay', // carry-over
  f057614: 'min-ask, China, Karamay', // carry-over
  f057698: 'min-ask, China, Karamay', // carry-over
  f060072: 'min-ask, China, Chongqing', // carry-over
  f061740: 'min-ask, China, Karamay', // carry-over
  f062260: 'min-ask, China, Guangzhou', // carry-over
  f062318: 'min-ask, Korea, Naju', // carry-over
  f062334: 'min-ask, China, Karamay', // carry-over
  f065103: 'min-ask, USA + China, Suzhou + Guangzhou + Karamay', // carry-over
  f066104: 'min-ask, China, Karamay', // carry-over
  f069915: 'min-ask, China, Karamay', // carry-over
  f069919: 'min-ask, China, Karamay', // carry-over
  f070999: 'min-ask, China, Karamay', // carry-over
  f071980: 'min-ask, China, Karamay', // carry-over
  f073552: 'min-ask, China, Karamay', // carry-over
  f073628: 'min-ask, USA, New Castle', // carry-over
  f078772: 'min-ask, China, Karamay', // carry-over
  f079197: 'min-ask, China, Karamay', // carry-over
  f079301: 'min-ask, China, Guangzhou + Dongguan + Shenzhen, USA', // carry-over
  f080444: 'min-ask, China, Chengdu', // carry-over
  f082356: 'min-ask, China, Jiaxing', // carry-over
  f083625: 'min-ask, China, Karamay', // carry-over
  f083903: "min-ask, China, Xi'an", // carry-over
  f092514: 'min-ask, China, Karamay', // carry-over
  f094614: 'min-ask, China, Karamay', // carry-over
  f099239: 'min-ask, China, Hong Kong', // carry-over
  f0101087: 'min-ask, Korea', // carry-over
  f0102374: 'min-ask, China, Karamay', // carry-over
  f0102375: 'min-ask, China, Karamay', // carry-over
  f0102376: 'min-ask, China, Karamay', // carry-over
  f0102513: 'min-ask, China, Karamay', // carry-over
  f0107171: 'min-ask, China, Karamay', // carry-over
  f0114808: 'min-ask, China, Shanghai', // carry-over
  f0115744: 'min-ask, China, Karamay', // carry-over
  f0116766: 'min-ask, USA, Westford', // carry-over
  f0126898: 'min-ask, China, Harbin', // carry-over
  f0128974: 'min-ask, Korea, Seoul', // carry-over
  f0129072: 'min-ask, China, Karamay', // carry-over
  f0131464: 'min-ask, USA, Ashburn', // carry-over
  f0132706: 'min-ask, China, Beijing', // carry-over
  f0134565: 'min-ask, China, Karamay', // carry-over
  f0135738: 'min-ask, China, Karamay', // carry-over
  f0141634: 'min-ask, China, Changsha', // carry-over
  f0145313: 'min-ask, China, Karamay', // carry-over
  f0145385: 'min-ask, Malaysia, Petaling Jaya', // carry-over
  f0145784: 'min-ask, Korea, Seoul', // carry-over
  f0146875: 'min-ask, China, Karamay', // carry-over
  f0148399: 'min-ask, China, Karamay', // carry-over
  f0151281: 'min-ask, China, Karamay', // carry-over
  f0151692: 'min-ask, China, Karamay', // carry-over
  f0152747: 'min-ask, China, Karamay', // carry-over
  f0157769: 'min-ask, China, Changsha', // carry-over
  f0158142: 'min-ask, China, Karamay', // carry-over
  f0160735: 'min-ask, NR', // carry-over
  f0165111: 'min-ask, China, Guangzhou', // carry-over
  f0165135: 'min-ask, China, Guangzhou', // carry-over
  f0222962: 'min-ask, China, Karamay', // carry-over
  f0224144: 'min-ask, China, Karamay', // carry-over
  f0392785: 'min-ask, China, Karamay', // carry-over

  // Xfr-failed

  f02606: 'xfr-failed, China, Zhejiang',
  f03134: 'xfr-failed, China, Cangzhou, 乔木信息',
  f03345: 'xfr-failed, China, Fuzhou, chh',
  f08103: 'xfr-failed, China, Foshan',
  f010010: 'xfr-failed, China, Changzhou',
  f010405: 'xfr-failed, China, Foshan',
  f021710: 'xfr-failed, China, Shijiazhuang',
  f024511: 'xfr-failed, China, Shenzhen',
  f025025: 'xfr-failed, China, Qingdao',
  f033036: 'xfr-failed, China, Liaoning',
  f050022: 'xfr-failed, China, Changsha',
  f064668: 'xfr-failed, China, Hong Kong',
  f081644: 'xfr-failed, China, Wenzhou',
  f085486: 'xfr-failed, NR',
  f085899: 'xfr-failed, China, Wuxi',
  f094374: 'xfr-failed, China, Nanyang',
  f0101387: 'xfr-failed, China, Shenzhen',
  f0105074: 'xfr-failed, China, Shanghai',
  f0129805: 'xfr-failed, China, Zhejiang + Australia, Adelaide',
  f0137168: 'xfr-failed, China, Beijing',
  f0145018: 'xfr-failed, Korea',
  f0147214: 'xfr-failed, NR',
  f0153176: 'xfr-failed, China, Fujian',
  f0154988: 'xfr-failed, China, Dongguan',
  f0216849: 'xfr-failed, China, Fujian',
  f0220632: 'xfr-failed, China, Fuzhou',
  f0224894: 'xfr-failed, China, Qingdao',
  f0349810: 'xfr-failed, China, Qinzhou',

  // Error

  f02423: 'error, Ukraine, Kyiv', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: WaitForPublishDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacebpugwc3j726fsgqi42zrt3yzwh7dh3jur6t7l65rpsmr33tiajsy n 2388, TS: bafy2bzaceaaiekdw4mp7by4vajpzxdcv7kkjz42vax44dy72nef72rs4n2ype n2388)
  f08157: 'error, China, Beijing + Germany, Frankfurt, 超星际', // data transfer cancelled
  f015941: 'error, Ukraine, Kyiv', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: WaitForPublishDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacebdop2axt4mgdzdyv2yxyp65ecz5xyoa2tjuu6emcnuj5xgnibdp6 n 1848, TS: bafy2bzacec2m4escai72pth5ongj4uhmt3m56ldjr5nh32mm6zm6ll63k5oqg n1848)
  f016276: 'error, China, Beijing', // data transfer cancelled
  f030335: 'error, China, Fujian', // data transfer cancelled
  f039515: 'error, China, Chongqing', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: WaitForPublishDeals errored: failed to load message: blockstore: block not found
  f044160: 'error, China, Guangzhou, muxing', // data transfer cancelled
  f080103: 'error, Korea, Seongnam-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 2.673483135825503894 FIL, balance: 0.008459306700769381 FIL): not enough funds to execute transaction
  f084879: 'error, Korea, Seongnam-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999980753528 FIL, balance: 0.02598058835620718 FIL): not enough funds to execute transaction
  f0131901: 'error, Korea, Daejeon', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 3.005429076386585773 FIL, balance: 2.891741707874780115 FIL): not enough funds to execute transaction
  f0134991: 'error, China, Foshan', // data transfer cancelled
  f0159961: 'error, China, Chongqing', // data transfer cancelled
  f0215370: 'error, China, Hangzhou', // data transfer cancelled
  f0218293: 'error, China, Fujian', // data transfer cancelled
  f0225058: 'error, China, Fuzhou', // data transfer cancelled
  f0226073: 'error, China, Shenzhen', // data transfer cancelled

  // Backoff

  // Rejected

  f010254: 'rejected, Japan, Minamata',
  f014569: 'rejected, China, Yangzhou',
  f019104: 'rejected, Canada, Chambly, NBFS DEV',
  f023565: 'rejected, China, Fuzhou', // Deals from client wallet f3tgmml5p6i3jq3ze6sm3toqgz7pbx6eepdoegysa3lh7ws355salecx24vspt7d4xvjifyhmyzr6dpvawmifq are not welcome
  f039940: 'rejected, China, Mianyang',
  f048669: 'rejected, NR',
  f074738: 'rejected, Korea, Icheon-si', // no online
  f0126824: 'rejected, Korea, Seongnam-si', // no online
  f0126868: 'rejected, Ukraine, Vinnytsia', // no online
  f0147284: 'rejected, Korea, Seongnam-si', // no online
  f0155384: 'rejected, Korea, Seongnam-si', // no online
  f0155467: 'rejected, Korea, Seongnam-si', // no online
  f0392734: 'rejected, Korea, Icheon-si', // no online

  // Dial

  // XNR

  // Error during ask

  f02520: 'error-ask, China, Hong Kong + Dongguan', // carry-over
  f08257: 'error-ask, China, Zhejiang + Singapore', // carry-over
  f017665: 'error-ask, China, Shenyang', // carry-over
  f020436: 'error-ask, China, Beijing', // carry-over
  f020489: 'error-ask, China, Lioaning', // carry-over
  f023219: 'error-ask, China, Beijing + Zhangjiakou', // carry-over
  f023882: 'error-ask, NR', // carry-over
  f042567: 'error-ask, China, Jinhua', // carry-over
  f053088: 'error-ask, China, Shanghai', // carry-over
  f055522: 'error-ask, USA', // carry-over
  f063628: 'error-ask, NR', // carry-over
  f070501: 'error-ask, USA + China, Hong Kong + Guangzhou', // carry-over
  f073448: 'error-ask, NR', // carry-over
  f079247: 'error-ask, USA + China, Guangzhou + Beijing + Dongguan + Shenzhen', // carry-over
  f091798: 'error-ask, NR', // carry-over
  f097840: 'error-ask, NR', // carry-over
  f0103851: 'error-ask, China, Karamay', // carry-over
  f0122496: 'error-ask, NR', // carry-over
  f0122815: 'error-ask, Korea, Bucheon-si', // carry-over
  f0131654: 'error-ask, Korea, Seoul', // carry-over
  f0132461: 'error-ask, Korea, Daegu', // carry-over
  f0135758: 'error-ask, NR', // carry-over
  f0145687: 'error-ask, NR', // carry-over
  f0149455: 'error-ask, NR', // carry-over
  f0157513: 'error-ask, Korea, Bucheon-si', // carry-over
  f0157941: 'error-ask, China, Changsha', // carry-over
  f0231161: 'error-ask, China, Qujing', // carry-over
  f0391520: 'error-ask, China, Guangzhou', // carry-over
  f0393359: 'error-ask, China, Suzhou' // carry-over
}

export default annotations
