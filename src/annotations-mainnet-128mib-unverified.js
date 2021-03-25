// Slingshot test results
//
// Additional testing with files > 128MiB in size
//
// These are generated from a second round of testing after attempting
// to store a small file, see annotations-spacerace.js for those results

const annotations = {
  // Retest

  // Candidates

  // Active

  // Sealing (active-sealing = previously active, retesting with new deal)

  f053088: 'active-sealing, China, Shanghai', // 1631729
  f064668: 'active-sealing, China, Hong Kong', // 1631838
  f0142606: 'active-sealing, Korea, Gangseo-gu', // 1632284
  f0146751: 'active-sealing, China, Jiangsu', // 1632268
  f0156207: 'active-sealing, Korea, Ulsan', // 1632004
  f0165539: 'active-sealing, Japan, Yokohama', // 1632006
  f0215497: 'active-sealing, Korea, Gangseo-gu', // 1631603

  // Sealing

  f01238: 'sealing, Vietnam, Hanoi, FILECOIN-VIETNAM', // 1632339
  f02540: 'sealing, USA, Mobile, Foundry', // 1632315
  f03134: 'sealing, China, Cangzhou, QiaoMu', // 1632292
  f03339: 'sealing, China, Luzhou, benxun', // 1632282
  f020489: 'sealing, China, Lioaning', // 1632350
  f022261: 'sealing, China, Luzhou', // 1632313
  f023467: 'sealing, Norway, Oslo, PhiMining.io', // 1632077
  f025007: 'sealing, Korea, Gyeonggi-do, PINBYTES-eCUBE', // 1632300
  f039515: 'sealing, China, Chongqing, valarhash', // 1632340
  f044160: 'sealing, China, Guangzhou, muxing', // 1632081
  f049882: 'sealing, Netherlands, De Rijp, Chipz', // 1632393
  f061158: 'sealing, China, Guangdong, phoenix', // 1632317
  f086151: 'sealing, China, Dongguan', // 1631617
  f096974: 'sealing, China, Chongqing', // 1632266
  f096976: 'sealing, Russia', // 1632302
  f097214: 'sealing, Korea, Bucheon-si', // 1632306
  f097777: 'sealing, Ukraine, Ivano-Frankivsk', // 1631728
  f098664: 'sealing, China, Jiangsu', // 1632295
  f099705: 'sealing, China, Zibo', // 1632324
  f0102313: 'sealing, Korea, Gangseo-gu', // 1632386
  f0107322: 'sealing, China, Chengdu', // 1632285
  f0109043: 'sealing, China, Karamay', // 1632080
  f0110133: 'sealing, China, Ningbo', // 1632371
  f0110804: 'sealing, USA, Santa Clara', // 1632382
  f0111885: 'sealing, Korea, Bucheon-si, WINNERS', // 1632310
  f0113331: 'sealing, Korea, Jinju + USA', // 1632264
  f0128191: 'sealing, Korea, Gangnam-gu', // 1632309
  f0131901: 'sealing, Korea, Daejeon', // 1632078
  f0134671: 'sealing, Korea, Gimpo-si', // 1632383
  f0145018: 'sealing, Korea', // 1632287
  f0148143: 'sealing, China, Tianjin', // 1632283
  f0150744: 'sealing, Korea, Ulsan', // 1632290
  f0156452: 'sealing, Korea, Ulsan', // 1632286
  f0157265: 'sealing, China, Zhangjiakou', // 1632320
  f0159961: 'sealing, China, Chongqing', // 1632269
  f0165375: 'sealing, Korea, Seongnam-si', // 1632082
  f0165643: 'sealing, China, Guangzhou', // 1632294
  f0214181: 'sealing, Australia, Mosman', // 1631627
  f0221135: 'sealing, USA, Atlanta', // 1631608
  f0228575: 'sealing, Canada, Calgary', // 1632372
  f0230200: 'sealing, Korea, Gwanak-gu, G-mining', // 1632299
  f0242152: 'sealing, Korea, Guro-gu', // 1632307
  f0397675: 'sealing, Korea, Guro-gu', // 1632319
  f0398286: 'sealing, China, Beijing', // 1632303
  f0400681: 'sealing, USA, Queens', // 1632291
  f0401254: 'sealing, Korea, Uijeongbu-si', // 1632370
  f0401287: 'sealing, China, Yibin', // 1632281
  f0401300: 'sealing, France, Deuil-la-Barre', // 1632347
  f0401303: 'sealing, Korea, Ulju-gun', // 1632293
  f0403177: 'sealing, China, Huizhou', // 1632265
  f0405129: 'sealing, China, Fujian', // 1631939
  f0413563: 'sealing, Korea, Gangnam-gu', // 1632288
  f0427967: 'sealing, China, Changsha', // 1632005
  f0427996: 'sealing, Canada, Bois-des-Filion', // 1632316
  f0428150: 'sealing, China, Xiamen', // 1632297
  f0430997: 'sealing, Korea', // 1632298
  f0434480: 'sealing, USA, Hummelstown', // 1632338

  // Stuck

  f024511: 'stuck, China, Shenzhen', // Transferring: about 2 hours

  // Busy

  f015734: 'busy, China, Qingdao', // cannot seal a sector before 616747

  // Min-size

  f01234: 'min-size, Belgium, Bonheiden', // 134217728 < 3221225472
  f01240: 'min-size, Netherlands, HidNand', // 134217728 < 268435456
  f01247: 'min-size, Canada, Montreal', // 134217728 < 536870912
  f01276: 'min-size, Canada, Brampton, NBFS Canada', // 268435456 < 4294967296
  f01278: 'min-size, USA, Grand Rapids, MiMiner', // 134217728 < 536870912
  f02387: 'min-size, Canada, Brampton, NBFS Canada', // 134217728 < 17179869184
  f02401: 'min-size, Canada, Chambly, NBFS Canada', // 134217728 < 17179869184
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 134217728 < 17179869184
  f02620: 'min-size, Poland, Krakow, @magik6k', // 134217728 < 536870912
  f03624: 'min-size, Germany, Chemnitz, ode', // 134217728 < 8589934592
  f08240: 'min-size, Russia, Novosibirsk, Rabinovitch', // 134217728 < 1073741824
  f08399: 'min-size, USA, Sammamish', // 134217728 < 4294967296
  f08403: 'min-size, UK, Lower Slaughter, TippyFlits', // 134217728 < 536870912
  f09848: 'min-size, USA, Irvine, BigBearLake', // 134217728 < 536870912
  f010088: 'min-size, NR', // 134217728 < 4294967296
  f010479: 'min-size, France, Fontenay-sous-Bois, s0nik42', // 134217728 < 8589934592
  f010507: 'min-size, China, Hangzhou', // 134217728 < 1073741824
  f010617: 'min-size, Canada, Surrey, kernelogic2, @feiya200', // 134217728 < 1073741824
  f014768: 'min-size, Singapore, Funktafide, @Funk', // 134217728 < 536870912
  f015927: 'min-size, USA, East Islip, CDImine', // 134217728 < 1073741824
  f017242: 'min-size, China, Guangdong', // 134217728 < 268435456
  f019002: 'min-size, China, Xiamen', // 134217728 < 1073741824
  f019104: 'min-size, Canada, Chambly, NBFS DEV', // 134217728 < 4294967296
  f019362: 'min-size, China, Hangzhou, 青青子衿', // 134217728 < 17179869184
  f019399: 'min-size, Korea, Busan', // 134217728 < 268435456
  f019551: 'min-size, UK, Birmingham, @Neofix AF', // 134217728 < 268435456
  f020385: 'min-size, Korea, Incheon', // 134217728 < 536870912
  f021716: 'min-size, New Zealand, Wellington', // 134217728 < 536870912
  f021961: 'min-size, China, Fuzhou', // 134217728 < 17179869184
  f022142: 'min-size, USA, Queens, Nelson SR2', // 134217728 < 2147483648
  f022163: 'min-size, dns:fil.akasha.network', // 134217728 < 536870912
  f022289: 'min-size, China, Mianyang', // 134217728 < 4294967296
  f022399: 'min-size, China, Beijing', // 134217728 < 1573031772
  f023660: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023662: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023853: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023854: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023855: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023858: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023859: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023861: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023868: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023869: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023870: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023871: 'min-size, China, Fuzhou', // 134217728 < 4294967296
  f023876: 'min-size, China, Fuzhou', // 134217728 < 268435456
  f023928: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023971: 'min-size, USA', // 134217728 < 536870912
  f023977: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f023978: 'min-size, China, Fuzhou', // 134217728 < 1572864000
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
  f024146: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f024147: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f024148: 'min-size, China, Fuzhou', // 134217728 < 1572864000
  f032934: 'min-size, Korea, Incheon', // 134217728 < 1073741824
  f034047: 'min-size, China, Hangzhou', // 134217728 < 1073741824
  f047419: 'min-size, USA, Waukesha', // 134217728 < 8589934592
  f058000: 'min-size, China, Suzhou', // 268435456 < 1073741824
  f062353: 'min-size, Germany, Frankfurt', // 134217728 < 17179869184
  f064218: 'min-size, USA, Kirkland', // 134217728 < 2147483648
  f066596: 'min-size, USA, San Diego', // 134217728 < 536870912
  f071624: 'min-size, USA, Boyne City', // 134217728 < 4294967296
  f079817: "min-size, Russia, Ul'yanovka", // 134217728 < 1073741824
  f083920: 'min-size, NR', // 134217728 < 1573031772
  f0100116: 'min-size, Korea, Uljin County', // 134217728 < 1073741824
  f0104967: 'min-size, Ukraine, Ternopil', // 134217728 < 2147483648
  f0116707: 'min-size, Germany, Dusseldorf', // 134217728 < 4294967296
  f0118360: 'min-size, China, Hangzhou', // 134217728 < 4294967296
  f0121768: 'min-size, China, Guangdong', // 134217728 < 1073741824
  f0135078: 'min-size, USA, Denver', // 134217728 < 4294967296
  f0142637: 'min-size, China, Mianyang', // 134217728 < 4294967296
  f0145162: 'min-size, Japan, Kumamoto', // 134217728 < 1073741824
  f0145874: 'min-size, Canada, Brampton', // 134217728 < 4294967296
  f0157535: 'min-size, Canada, Brampton', // 134217728 < 4294967296
  f0165400: 'min-size, Canada, Brampton', // 134217728 < 4294967296
  f0187709: 'min-size, Russia, Moscow', // 134217728 < 1073741824
  f0406322: 'min-size, USA, Long Beach', // 134217728 < 4294967296
  f0406703: 'min-size, USA, Scottsdale', // 134217728 < 4294967296
  f0429006: 'min-size, China, Zhangzhou', // 134217728 < 1073741824

  // Max-size

  f02619: 'max-size, China, Beijing, Blockcasting', // 134217728 > 1048576
  f015233: 'max-size, China, Nanjing', // 134217728 > 1048576
  f024550: 'max-size, China, Wenzhou', // 134217728 > 1048576
  f024944: 'max-size, Korea, Yeongdeungpo-dong', // 134217728 > 1048576

  // Min-ask

  f01241: 'min-ask, China, Karamay', // carry-over
  f01277: 'min-ask, Sweden, Stockholm', // carry-over
  f01280: 'min-ask, China, Wuxi', // carry-over
  f02381: 'min-ask, China, Dongguan', // carry-over
  f02415:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f02419: 'min-ask, China, Shanghai, yuantai', // carry-over
  f02501: 'min-ask, China, Karamay', // carry-over
  f02514: 'min-ask, China, Karamay', // carry-over
  f02606: 'min-ask, China, Zhejiang', // carry-over
  f02622: 'min-ask, China, Karamay', // carry-over
  f02623: 'min-ask, China, Karamay', // carry-over
  f02633:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f02645:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f03143: 'min-ask, Vietman, Ho Chi Minh City + China, Beijing + Shijiazhuang', // carry-over
  f03223: 'min-ask, USA', // carry-over
  f03273: 'min-ask, China, Karamay', // carry-over
  f03274: 'min-ask, China, Karamay', // carry-over
  f03275: 'min-ask, China, Karamay', // carry-over
  f03345: 'min-ask, China, Fuzhou, chh', // carry-over
  f03364: 'min-ask, China, Inner Mongolia', // carry-over
  f03482: 'min-ask, China, Karamay', // carry-over
  f03488: 'min-ask, Korea, Yeongdeungpo-dong', // carry-over
  f03491:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f05315: 'min-ask, China, Karamay', // carry-over
  f05316: 'min-ask, China, Karamay', // carry-over
  f05317: 'min-ask, China, Karamay', // carry-over
  f05664: 'min-ask, China, Hong Kong', // carry-over
  f07709: 'min-ask, Korea, Dongjak-gu', // carry-over
  f07850: 'min-ask, China, Karamay', // carry-over
  f07945: 'min-ask, China, Guangzhou', // carry-over
  f07990:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f07998: 'min-ask, China, Hangzhou', // carry-over
  f08019: 'min-ask, China, Yantai, 三合', // carry-over
  f08025:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f08103: 'min-ask, China, Foshan', // carry-over
  f08157: 'min-ask, China, Beijing + Germany, Frankfurt, 超星际', // carry-over
  f08383: 'min-ask, China, Karamay', // carry-over
  f09693: 'min-ask, China, Karamay', // carry-over
  f09696: 'min-ask, China, Karamay', // carry-over
  f010241: 'min-ask, China, Beijing + USA, Portland, 6Block-P', // carry-over
  f010253: 'min-ask, China, Karamay', // carry-over
  f010405: 'min-ask, China, Foshan', // carry-over
  f014409: 'min-ask, USA, Monroe', // carry-over
  f015897: 'min-ask, China, Hong Kong', // carry-over
  f015941: 'min-ask, Ukraine, Kyiv', // carry-over
  f018501: 'min-ask, China, Beijing', // carry-over
  f018780:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f018781:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f018782: 'min-ask, Singapore + USA + Germany, Frankfurt + UK, London', // carry-over
  f018783:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f018784:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f018785:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f019100: 'min-ask, Romania, Cluj-Napoca', // carry-over
  f019240: 'min-ask, China, Beijing', // carry-over
  f019279: 'min-ask, Canada, Calgary', // carry-over
  f019806: 'min-ask, China, Beijing', // carry-over
  f020378: 'min-ask, Bulgaria, Asenovgrad', // carry-over
  f020747: 'min-ask, China, Xiamen', // carry-over
  f020904: 'min-ask, Korea, Uijeongbu-si, FILTop', // carry-over
  f022130: 'min-ask, Korea, Seodaemun-gu', // carry-over
  f022308: 'min-ask, China, Bozhou', // carry-over
  f022352: 'min-ask, Norway, Borgen, TechHedge, @Reiers', // carry-over
  f023152: 'min-ask, China, Shandong', // carry-over
  f023825: 'min-ask, China, Karamay', // carry-over
  f024015: 'min-ask, China, Karamay', // carry-over
  f024016: 'min-ask, China, Karamay', // carry-over
  f024184: 'min-ask, Korea, Yeongdeungpo-dong', // carry-over
  f029344: 'min-ask, Korea, Seongnam-si', // carry-over
  f029401: 'min-ask, China, Karamay', // carry-over
  f029404: 'min-ask, China, Karamay', // carry-over
  f030384: 'min-ask, China, Shenzhen', // carry-over
  f033123: 'min-ask, China, Karamay', // carry-over
  f033189: 'min-ask, NR', // carry-over
  f033356: 'min-ask, Korea, Yeongdeungpo-dong', // carry-over
  f039800: 'min-ask, China, Chengdu', // carry-over
  f040218: 'min-ask, China, Wuxi', // carry-over
  f042540: 'min-ask, China, Karamay', // carry-over
  f042558: 'min-ask, China, Karamay', // carry-over
  f042635: 'min-ask, China, Karamay', // carry-over
  f050022: 'min-ask, China, Changsha', // carry-over
  f052447: 'min-ask, China, Karamay', // carry-over
  f054370: 'min-ask, China, Dongguan', // carry-over
  f055102: 'min-ask, Vietman, Ho Chi Minh City + China', // carry-over
  f055132: 'min-ask, Vietman, Ho Chi Minh City + China', // carry-over
  f056611: 'min-ask, China, Karamay', // carry-over
  f057614: 'min-ask, China, Karamay', // carry-over
  f057698: 'min-ask, China, Karamay', // carry-over
  f058369: 'min-ask, USA, Boston', // carry-over
  f060072: 'min-ask, China, Chongqing', // carry-over
  f061740: 'min-ask, China, Karamay', // carry-over
  f062260: 'min-ask, China, Guangzhou', // carry-over
  f062318: 'min-ask, Korea, Naju', // carry-over
  f062334: 'min-ask, China, Karamay', // carry-over
  f062770: 'min-ask, China, Fuzhou', // carry-over
  f062811: 'min-ask, China, Fuzhou', // carry-over
  f062982: 'min-ask, China, Fuzhou', // carry-over
  f065103: 'min-ask, USA + China, Suzhou + Guangzhou + Karamay', // carry-over
  f065200: 'min-ask, China, Yibin', // carry-over
  f065280: 'min-ask, Korea, Songpa-gu, Data Store Ltd', // carry-over
  f066104: 'min-ask, China, Karamay', // carry-over
  f069915: 'min-ask, China, Karamay', // carry-over
  f069919: 'min-ask, China, Karamay', // carry-over
  f070501: 'min-ask, USA + China, Hong Kong + Guangzhou', // carry-over
  f070999: 'min-ask, China, Karamay', // carry-over
  f071980: 'min-ask, China, Karamay', // carry-over
  f073552: 'min-ask, China, Karamay', // carry-over
  f073628: 'min-ask, USA, New Castle', // carry-over
  f078621: 'min-ask, Korea, Uiwang', // carry-over
  f078772: 'min-ask, China, Karamay', // carry-over
  f079301: 'min-ask, China, Guangzhou + Dongguan + Shenzhen, USA', // carry-over
  f080444: 'min-ask, China, Chengdu', // carry-over
  f080480: 'min-ask, Ukraine, Lviv', // carry-over
  f082356: 'min-ask, China, Jiaxing', // carry-over
  f082452: 'min-ask, China, Dongguan', // carry-over
  f083625: 'min-ask, China, Karamay', // carry-over
  f083903: "min-ask, China, Xi'an", // carry-over
  f085899: 'min-ask, China, Wuxi', // carry-over
  f086366: 'min-ask, NR', // carry-over
  f089840: 'min-ask, Korea, Yeongdeungpo-gu', // carry-over
  f092514: 'min-ask, China, Karamay', // carry-over
  f094614: 'min-ask, China, Karamay', // carry-over
  f097370: 'min-ask, NR', // carry-over
  f097386: 'min-ask, China, Beijing', // carry-over
  f097914: 'min-ask, NR', // carry-over
  f099239: 'min-ask, China, Hong Kong', // carry-over
  f0101087: 'min-ask, Korea', // carry-over
  f0102374: 'min-ask, China, Karamay', // carry-over
  f0102375: 'min-ask, China, Karamay', // carry-over
  f0102376: 'min-ask, China, Karamay', // carry-over
  f0102513: 'min-ask, China, Karamay', // carry-over
  f0102641: 'min-ask, China, Guangzhou', // carry-over
  f0103851: 'min-ask, China, Karamay', // carry-over
  f0104671: 'min-ask, Japan, Ota-ku', // carry-over
  f0105074: 'min-ask, China, Shanghai', // carry-over
  f0106949: 'min-ask, Korea, Seoul', // carry-over
  f0107308: 'min-ask, China, Shenyang', // carry-over
  f0109713: 'min-ask, China, Beijing', // carry-over
  f0110442: 'min-ask, China, Fujian', // carry-over
  f0110936: 'min-ask, China, Fujian', // carry-over
  f0114808: 'min-ask, China, Shanghai', // carry-over
  f0114924: 'min-ask, China, Fujian', // carry-over
  f0115744: 'min-ask, China, Karamay', // carry-over
  f0120983: 'min-ask, China, Fujian', // carry-over
  f0121450: 'min-ask, China, Fujian', // carry-over
  f0123931: 'min-ask, China, Fujian', // carry-over
  f0124102: 'min-ask, China, Beijing', // carry-over
  f0124335: 'min-ask, Finland, Helsinki', // carry-over
  f0124554: 'min-ask, Korea, Gimhae', // carry-over
  f0126868: 'min-ask, Ukraine, Vinnytsia', // carry-over
  f0127896: 'min-ask, Bulgaria, Sofia', // carry-over
  f0128974: 'min-ask, Korea, Seoul', // carry-over
  f0129072: 'min-ask, China, Karamay', // carry-over
  f0129976: 'min-ask, Korea, Gwangju', // carry-over
  f0130912: 'min-ask, China, Hong Kong', // carry-over
  f0131464: 'min-ask, USA, Ashburn', // carry-over
  f0131654: 'min-ask, Korea, Seoul', // carry-over
  f0133886: 'min-ask, China, Guangdong', // carry-over
  f0133999: 'min-ask, China, Changsha', // carry-over
  f0134565: 'min-ask, China, Karamay', // carry-over
  f0134682: 'min-ask, China, Beijing', // carry-over
  f0134778: 'min-ask, China, Beijing', // carry-over
  f0134991: 'min-ask, China, Foshan', // carry-over
  f0135738: 'min-ask, China, Karamay', // carry-over
  f0136014: 'min-ask, China, Suzhou', // carry-over
  f0141614: 'min-ask, China, Fujian', // carry-over
  f0141634: 'min-ask, China, Changsha', // carry-over
  f0145313: 'min-ask, China, Karamay', // carry-over
  f0145784: 'min-ask, Korea, Seoul', // carry-over
  f0146165: 'min-ask, China, Huizhou', // carry-over
  f0146875: 'min-ask, China, Karamay', // carry-over
  f0148399: 'min-ask, China, Karamay', // carry-over
  f0149765: 'min-ask, China, Beijing', // carry-over
  f0149768: 'min-ask, China, Dongguan', // carry-over
  f0151034: 'min-ask, USA, Syracuse', // carry-over
  f0151281: 'min-ask, China, Karamay', // carry-over
  f0151692: 'min-ask, China, Karamay', // carry-over
  f0152747: 'min-ask, China, Karamay', // carry-over
  f0152854: 'min-ask, China, Huizhou', // carry-over
  f0153176: 'min-ask, China, Fujian', // carry-over
  f0154988: 'min-ask, China, Dongguan', // carry-over
  f0157769: 'min-ask, China, Changsha', // carry-over
  f0158142: 'min-ask, China, Karamay', // carry-over
  f0158468: 'min-ask, China, Guangzhou', // carry-over
  f0165111: 'min-ask, China, Guangzhou', // carry-over
  f0165135: 'min-ask, China, Guangzhou', // carry-over
  f0216138: 'min-ask, China, Shenzhen', // carry-over
  f0216849: 'min-ask, China, Fujian', // carry-over
  f0218293: 'min-ask, China, Fujian', // carry-over
  f0220004: 'min-ask, China, Karamay', // carry-over
  f0220632: 'min-ask, China, Fuzhou', // carry-over
  f0220827: 'min-ask, NR', // carry-over
  f0222962: 'min-ask, China, Karamay', // carry-over
  f0224144: 'min-ask, China, Karamay', // carry-over
  f0224841: 'min-ask, China, Guangzhou', // carry-over
  f0225058: 'min-ask, China, Fuzhou', // carry-over
  f0241858: 'min-ask, China, Fuzhou', // carry-over
  f0392785: 'min-ask, China, Karamay', // carry-over
  f0396188: 'min-ask, China, Karamay', // carry-over
  f0397855: 'min-ask, China, Karamay', // carry-over
  f0400103: 'min-ask, China, Hong Kong', // carry-over
  f0401416: 'min-ask, Japan, Fukuoka', // carry-over
  f0406475: 'min-ask, China, Dongguan', // carry-over
  f0408717: 'min-ask, Korea, Ansan-si', // carry-over
  f0409765: 'min-ask, China, Karamay', // carry-over
  f0410506: 'min-ask, Korea, Seoul', // carry-over
  f0410701: 'min-ask, China, Changsha', // carry-over
  f0413684: 'min-ask, China, Fujian', // carry-over
  f0413801: 'min-ask, China, Fujian', // carry-over
  f0421061: 'min-ask, Korea, Seoul', // carry-over
  f0426933: 'min-ask, China, Karamay', // carry-over
  f0427393: 'min-ask, China, Karamay', // carry-over
  f0428177: 'min-ask, China, Huizhou', // carry-over
  f0431665: 'min-ask, China, Karamay', // carry-over

  // Xfr-failed

  f010513: 'xfr-failed, China, Chongqing',
  f016276: 'xfr-failed, China, Beijing',
  f024468: 'xfr-failed, China, Shenzhen',
  f025025: 'xfr-failed, China, Qingdao',
  f042567: 'xfr-failed, China, Jinhua',
  f079007: 'xfr-failed, China, Jinan',
  f081644: 'xfr-failed, China, Wenzhou',
  f0129805: 'xfr-failed, China, Zhejiang + Australia, Adelaide',
  f0131857: 'xfr-failed, China, Chongqing',
  f0168058: 'xfr-failed, China, Suzhou',
  f0224894: 'xfr-failed, China, Qingdao',
  f0231161: 'xfr-failed, China, Qujing',
  f0349810: 'xfr-failed, China, Qinzhou',
  f0393359: 'xfr-failed, China, Suzhou',
  f0397728: 'xfr-failed, China, Dongguan',
  f0399814: "xfr-failed, China, Ya'an",
  f0423713: 'xfr-failed, China, Qingdao',
  f0427994: 'xfr-failed, China, Jinhua',

  // Error

  f02490: 'error, China, Fujian', // deal failed: (State=26) handing off deal to node: writing piece baga6ea4seaqk4k53kdcxa3wd2jikmlbatoypuwztlfe63ayd6j6fhnohczax2hi: write |1: broken pipe
  f030335: 'error, China, Fujian', // AddPiece failed: adding piece to sector: writing piece: storage call error 0: sector file:/mnt/md0/lotusworker/s-32  link /mnt/md0/lotusworker/s-32 /mnt/172.16.4.5/disk24/lotusminer_105/unsealed/s-t030335-14100: no such file or directory: link /mnt/md0/lotusworker/s-32 /mnt/172.16.4.5/disk24/lotusminer_105/unsealed/s-t030335-14100: no such file or directory

  // Backoff

  // Rejected

  f02500: 'rejected, Korea, Seongnam-si', // miner is not accepting unverified storage deals
  f010254: 'rejected, Japan, Minamata',
  f014569: 'rejected, China, Yangzhou',
  f023565: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f039940: 'rejected, China, Mianyang',
  f048669: 'rejected, NR',
  f074738: 'rejected, Korea, Icheon-si', // no online
  f084879: 'rejected, Korea, Seongnam-si', // miner is not accepting unverified storage deals
  f098706: 'rejected, Korea, Icheon-si', // miner is not accepting unverified storage deals
  f0100082: 'rejected, Korea, Seongnam-si', // miner is not accepting unverified storage deals
  f0107995: 'rejected, NR', // miner is not accepting unverified storage deals
  f0121533: 'rejected, China, Zhejiang', // proposed provider collateral above maximum: 71880610884048 > 71880443743514
  f0121958: 'rejected, Korea, Seoul', // miner is not accepting unverified storage deals
  f0126824: 'rejected, Korea, Seongnam-si', // no online
  f0131611: 'rejected, Korea, Jeju City', // miner is not accepting unverified storage deals
  f0147284: 'rejected, Korea, Seongnam-si', // no online
  f0155384: 'rejected, Korea, Seongnam-si', // no online
  f0155467: 'rejected, Korea, Seongnam-si', // no online
  f0215704: 'rejected, Korea, Icheon-si', // miner is not accepting unverified storage deals
  f0392734: 'rejected, Korea, Icheon-si', // no online
  f0395911: 'rejected, NR', // miner is not accepting unverified storage deals
  f0396607: 'rejected, Korea, Icheon-si', // miner is not accepting unverified storage deals
  f0396844: 'rejected, Korea, Icheon-si', // miner is not accepting unverified storage deals
  f0409356: 'rejected, NR', // miner is not accepting unverified storage deals
  f0426531: 'rejected, Korea, Seongnam-si', // miner is not accepting unverified storage deals

  // Dial

  // XNR

  // Error during ask

  f01799: 'error-ask, China, Jinan + Singapore', // carry-over
  f02520: 'error-ask, China, Hong Kong + Dongguan', // carry-over
  f08257: 'error-ask, China, Zhejiang + Singapore', // carry-over
  f010446: 'error-ask, Netherlands, Angelo', // carry-over
  f010558: 'error-ask, NR', // carry-over
  f017665: 'error-ask, China, Shenyang', // carry-over
  f022820: 'error-ask, China, Guangdong', // carry-over
  f023219: 'error-ask, China, Beijing + Zhangjiakou', // carry-over
  f025044: 'error-ask, undefined', // carry-over
  f032833: 'error-ask, NR', // carry-over
  f033036: 'error-ask, China, Liaoning', // carry-over
  f062475: 'error-ask, NR', // carry-over
  f065610: 'error-ask, NR', // carry-over
  f079247: 'error-ask, USA + China, Guangzhou + Beijing + Dongguan + Shenzhen', // carry-over
  f080103: 'error-ask, Korea, Seongnam-si', // carry-over
  f082635: 'error-ask, NR', // carry-over
  f090492: 'error-ask, NR', // carry-over
  f097618: 'error-ask, China, Suzhou', // carry-over
  f097720: 'error-ask, Korea, Bucheon-si', // carry-over
  f099608: 'error-ask, Latvia, Riga', // carry-over
  f0111174: 'error-ask, China, Guangzhou', // carry-over
  f0115238: 'error-ask, China, Shenyang', // carry-over
  f0136868: 'error-ask, NR', // carry-over
  f0145687: 'error-ask, NR', // carry-over
  f0149444: 'error-ask, Korea, Gangseo-gu', // carry-over
  f0157941: 'error-ask, China, Changsha', // carry-over
  f0162394: 'error-ask, China, Guangzhou', // carry-over
  f0395463: 'error-ask, Korea, Daegu', // carry-over
  f0395472: 'error-ask, Korea, Daegu', // carry-over
  f0395473: 'error-ask, Korea, Daegu', // carry-over
  f0402431: 'error-ask, China, Hangzhou', // carry-over
  f0430101: 'error-ask, NR' // carry-over
}

export default annotations
