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
  f02620: 'candidate, Poland, Krakow, @magik6k', // carry-over
  f02623: 'candidate, China, Karamay', // carry-over
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
  f062318: 'candidate, Korea, Naju', // carry-over
  f074738: 'candidate, Korea, Icheon-si', // carry-over
  f080444: 'candidate, China, Chengdu', // carry-over
  f0128974: 'candidate, Korea, Seoul', // carry-over
  f0392734: 'candidate, Korea, Icheon-si', // carry-over

  // Active

  f022261: 'active, China, Luzhou', // 1612263 about 3 hours
  f025007: 'active, Korea, Gyeonggi-do, PINBYTES-eCUBE', // 1612167 about 2 hours
  f053088: 'active, China, Shanghai', // 1612163 about 2 hours
  f061158: 'active, China, Guangdong', // 1612268 about 1 hour
  f0137489: 'active, UK, Deeside', // 1612254 about 3 hours
  f0156207: 'active, Korea, Ulsan', // 1612169 about 3 hours
  f0156452: 'active, Korea, Ulsan', // 1612159 about 3 hours
  f0215497: 'active, Korea, Gangseo-gu', // 1612166 about 2 hours
  f0242152: 'active, Korea, Guro-gu', // 1612155 about 2 hours
  f0397675: 'active, Korea, Guro-gu', // 1612303 about 2 hours
  f0400920: 'active, NR', // 1612304 about 2 hours
  f0401254: 'active, Korea, Uijeongbu-si', // 1612266 about 2 hours
  f0411786: 'active, Korea, Busan', // 1612165 about 2 hours

  // Sealing (active-sealing = previously active, retesting with new deal)

  f02423: 'active-sealing, Ukraine, Kyiv', // 1612372
  f015941: 'active-sealing, Ukraine, Kyiv', // 1612161
  f078621: 'active-sealing, Korea, Uiwang', // 1612170
  f089840: 'active-sealing, Korea, Yeongdeungpo-gu', // 1612162
  f097720: 'active-sealing, Korea, Bucheon-si', // 1612270
  f0122815: 'active-sealing, Korea, Bucheon-si', // 1612368
  f0146751: 'active-sealing, China, Jiangsu', // 1612269
  f0228575: 'active-sealing, Canada, Calgary', // 1612302
  f0230200: 'active-sealing, Korea, Gwanak-gu', // 1612301

  // Sealing

  f02540: 'sealing, USA, Mobile', // 1612151
  f03134: 'sealing, China, Cangzhou, 乔木信息', // 1612150
  f03339: 'sealing, China, Luzhou, benxun', // 1612156
  f022142: 'sealing, USA, Queens, Nelson SR2', // 1612273
  f055102: 'sealing, Vietman, Ho Chi Minh City + China', // 1612271
  f055132: 'sealing, Vietman, Ho Chi Minh City + China', // 1612272
  f064668: 'sealing, China, Hong Kong', // 1612366
  f065200: 'sealing, China, Yibin', // 1612274
  f066596: 'sealing, USA, San Diego', // 1612157
  f096976: 'sealing, Russia', // 1612168
  f0102313: 'sealing, Korea, Gangseo-gu', // 1612370
  f0110133: 'sealing, China, Ningbo', // 1612317
  f0124554: 'sealing, Korea, Gimhae', // 1612299
  f0128191: 'sealing, Korea, Gangnam-gu', // 1612253
  f0130912: 'sealing, NR', // 1612373
  f0134671: 'sealing, Korea, Gimpo-si', // 1612275
  f0142606: 'sealing, Korea, Gangseo-gu', // 1612371
  f0145018: 'sealing, Korea', // 1612284
  f0149444: 'sealing, Korea, Gangseo-gu', // 1612153
  f0150744: 'sealing, Korea, Ulsan', // 1612164
  f0157265: 'sealing, NR', // 1612300
  f0157564: 'sealing, Korea, Daejeon', // 1612283
  f0165539: 'sealing, Japan, Yokohama', // 1612375
  f0216138: 'sealing, China, Shenzhen', // 1612286
  f0225676: 'sealing, Korea, Guro-gu', // 1612282
  f0393359: 'sealing, China, Suzhou', // 1612374
  f0400103: 'sealing, China, Hong Kong', // 1612367
  f0400681: 'sealing, USA, Queens', // 1612127
  f0401300: 'sealing, France, Deuil-la-Barre', // 1612158
  f0401303: 'sealing, Korea, Ulju-gun', // 1612264
  f0402975: 'sealing, Korea', // 1612160
  f0403896: 'sealing, USA, Huntersville', // 1612369
  f0413563: 'sealing, Korea, Gangnam-gu', // 1612285
  f0414184: 'sealing, Spain, Madrid', // 1612265

  // Stuck

  f08399: 'stuck, USA, Sammamish', // CheckForAcceptance: about 12 hours
  f058369: 'stuck, USA, Boston', // CheckForAcceptance: about 13 hours
  f085899: 'stuck, China, Wuxi', // Transferring: about 13 hours
  f097777: 'stuck, Ukraine, Ivano-Frankivsk', // CheckForAcceptance: about 13 hours
  f0159961: 'stuck, China, Chongqing', // Transferring: about 13 hours
  f0399610: 'stuck, Ukraine', // CheckForAcceptance: about 12 hours
  f0401416: 'stuck, Japan, Fukuoka', // Transferring: about 12 hours

  // Busy

  f015734: 'busy, China, Qingdao', // cannot seal a sector before 597303

  // Min-size

  f01234: 'min-size, Belgium, Bonheiden', // 134217728 < 3221225472
  f01238: 'min-size, Vietnam, Hanoi, FILECOIN-VIETNAM', // 134217728 < 8589934592
  f01240: 'min-size, Netherlands, HidNand', // 134217728 < 268435456
  f01276: 'min-size, Canada, Brampton, NBFS Canada', // 268435456 < 4294967296
  f01278: 'min-size, USA, Grand Rapids, MiMiner', // 134217728 < 1073741824
  f02387: 'min-size, Canada, Brampton, NBFS Canada', // 134217728 < 17179869184
  f02401: 'min-size, Canada, Chambly, NBFS Canada', // 134217728 < 17179869184
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 134217728 < 17179869184
  f03624: 'min-size, Germany, Chemnitz, ode', // 134217728 < 8589934592
  f07998: 'min-size, China, Hangzhou', // 134217728 < 17179869184
  f08240: 'min-size, Russia, Novosibirsk, Rabinovitch', // 134217728 < 1073741824
  f09848: 'min-size, USA, Irvine, BigBearLake', // 134217728 < 536870912
  f010088: 'min-size, NR', // 134217728 < 4294967296
  f010446: 'min-size, Netherlands, Angelo', // 134217728 < 1073741824
  f010479: 'min-size, France, Fontenay-sous-Bois, s0nik42', // 134217728 < 8589934592
  f010507: 'min-size, China, Hangzhou', // 134217728 < 1073741824
  f015927: 'min-size, USA, East Islip, CDImine', // 134217728 < 1073741824
  f017242: 'min-size, China, Guangdong', // 134217728 < 268435456
  f018501: 'min-size, China, Beijing', // 134217728 < 1073741824
  f019104: 'min-size, Canada, Chambly, NBFS DEV', // 134217728 < 4294967296
  f019279: 'min-size, Canada, Calgary', // 134217728 < 8589934592
  f019362: 'min-size, China, Hangzhou, 青青子衿', // 134217728 < 17179869184
  f019399: 'min-size, Korea, Busan', // 134217728 < 268435456
  f020378: 'min-size, Bulgaria, Asenovgrad', // 134217728 < 2147483648
  f020385: 'min-size, Korea, Incheon', // 134217728 < 536870912
  f020904: 'min-size, Korea, Uijeongbu-si, FILTop', // 134217728 < 8589934592
  f022130: 'min-size, Korea, Seodaemun-gu', // 134217728 < 536870912
  f022163: 'min-size, dns:fil.akasha.network', // 134217728 < 8589934592
  f022289: 'min-size, China, Mianyang', // 134217728 < 4294967296
  f022352: 'min-size, Norway, Borgen, TechHedge, @Reiers', // 134217728 < 536870912
  f022399: 'min-size, China, Beijing', // 134217728 < 1573031772
  f023467: 'min-size, Norway, Oslo, PhiMining.io', // 134217728 < 268435456
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
  f023928: 'min-size, China, Fuzhou', // 134217728 < 1572864000
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
  f033189: 'min-size, NR', // 134217728 < 2147483648
  f047419: 'min-size, USA, Waukesha', // 134217728 < 8589934592
  f049882: 'min-size, Netherlands, De Rijp, Chipz', // 134217728 < 268435456
  f058000: 'min-size, China, Suzhou', // 134217728 < 1073741824
  f062353: 'min-size, Germany, Frankfurt', // 134217728 < 17179869184
  f064218: 'min-size, USA, Kirkland', // 134217728 < 2147483648
  f078522: 'min-size, NR', // 134217728 < 4294967296
  f079817: "min-size, Russia, Ul'yanovka", // 134217728 < 1073741824
  f083920: 'min-size, NR', // 134217728 < 1573031772
  f097618: 'min-size, China, Suzhou', // 134217728 < 524288000
  f099608: 'min-size, Latvia, Riga', // 134217728 < 268435456
  f0100116: 'min-size, Korea, Uljin County', // 134217728 < 1073741824
  f0104967: 'min-size, Ukraine, Ternopil', // 134217728 < 2147483648
  f0116707: 'min-size, Germany, Dusseldorf', // 134217728 < 4294967296
  f0118360: 'min-size, China, Hangzhou', // 134217728 < 4294967296
  f0121768: 'min-size, China, Guangdong', // 134217728 < 1073741824
  f0124335: 'min-size, Finland, Helsinki', // 134217728 < 1073741824
  f0127896: 'min-size, Bulgaria, Sofia', // 134217728 < 17179869184
  f0142637: 'min-size, China, Mianyang', // 134217728 < 4294967296
  f0145162: 'min-size, Japan, Kumamoto', // 134217728 < 1073741824
  f0145874: 'min-size, Canada, Brampton', // 134217728 < 4294967296
  f0157535: 'min-size, Canada, Brampton', // 134217728 < 4294967296
  f0165400: 'min-size, Canada, Brampton', // 134217728 < 4294967296
  f0187709: 'min-size, Russia, Moscow', // 134217728 < 1073741824

  // Max-size

  f02619: 'max-size, China, Beijing, Blockcasting', // 134217728 > 1048576
  f08019: 'max-size, China, Yantai, 三合', // 268435456 > 1048576
  f015233: 'max-size, China, Nanjing', // 134217728 > 1048576
  f019806: 'max-size, China, Beijing', // 134217728 > 1048576
  f024944: 'max-size, Korea, Yeongdeungpo-dong', // 134217728 > 1048576

  // Min-ask

  f01241: 'min-ask, China, Karamay', // carry-over
  f01277: 'min-ask, Sweden, Stockholm', // carry-over
  f01280: 'min-ask, China, Wuxi', // carry-over
  f01799: 'min-ask, China, Jinan + Singapore', // carry-over
  f02381: 'min-ask, China, Dongguan', // carry-over
  f02501: 'min-ask, China, Karamay', // carry-over
  f02514: 'min-ask, China, Karamay', // carry-over
  f02606: 'min-ask, China, Zhejiang', // carry-over
  f02622: 'min-ask, China, Karamay', // carry-over
  f03223: 'min-ask, USA', // carry-over
  f03273: 'min-ask, China, Karamay', // carry-over
  f03274: 'min-ask, China, Karamay', // carry-over
  f03275: 'min-ask, China, Karamay', // carry-over
  f03364: 'min-ask, China, Inner Mongolia', // carry-over
  f03482: 'min-ask, China, Karamay', // carry-over
  f03488: 'min-ask, Korea, Yeongdeungpo-dong', // carry-over
  f05315: 'min-ask, China, Karamay', // carry-over
  f05316: 'min-ask, China, Karamay', // carry-over
  f05317: 'min-ask, China, Karamay', // carry-over
  f07850: 'min-ask, China, Karamay', // carry-over
  f07945: 'min-ask, China, Guangzhou', // carry-over
  f08157: 'min-ask, China, Beijing + Germany, Frankfurt, 超星际', // carry-over
  f08383: 'min-ask, China, Karamay', // carry-over
  f09693: 'min-ask, China, Karamay', // carry-over
  f09696: 'min-ask, China, Karamay', // carry-over
  f010253: 'min-ask, China, Karamay', // carry-over
  f014365: 'min-ask, Australia, Turramurra + Sydney', // carry-over
  f014409: 'min-ask, USA, Monroe', // carry-over
  f015897: 'min-ask, China, Hong Kong', // carry-over
  f018782: 'min-ask, Singapore + USA + Germany, Frankfurt + UK, London', // carry-over
  f019100: 'min-ask, Romania, Cluj-Napoca', // carry-over
  f019240: 'min-ask, China, Beijing', // carry-over
  f020747: 'min-ask, China, Xiamen', // carry-over
  f022308: 'min-ask, China, Bozhou', // carry-over
  f023152: 'min-ask, China, Shandong', // carry-over
  f023495: 'min-ask, China, Karamay', // carry-over
  f023825: 'min-ask, China, Karamay', // carry-over
  f024015: 'min-ask, China, Karamay', // carry-over
  f024016: 'min-ask, China, Karamay', // carry-over
  f024184: 'min-ask, Korea, Yeongdeungpo-dong', // carry-over
  f029344: 'min-ask, Korea, Seongnam-si', // carry-over
  f029401: 'min-ask, China, Karamay', // carry-over
  f029404: 'min-ask, China, Karamay', // carry-over
  f030384: 'min-ask, China, Shenzhen', // carry-over
  f033123: 'min-ask, China, Karamay', // carry-over
  f033356: 'min-ask, Korea, Yeongdeungpo-dong', // carry-over
  f039800: 'min-ask, China, Chengdu', // carry-over
  f040218: 'min-ask, China, Wuxi', // carry-over
  f042540: 'min-ask, China, Karamay', // carry-over
  f042558: 'min-ask, China, Karamay', // carry-over
  f042635: 'min-ask, China, Karamay', // carry-over
  f050022: 'min-ask, China, Changsha', // carry-over
  f052447: 'min-ask, China, Karamay', // carry-over
  f054370: 'min-ask, China, Dongguan', // carry-over
  f056611: 'min-ask, China, Karamay', // carry-over
  f057614: 'min-ask, China, Karamay', // carry-over
  f057698: 'min-ask, China, Karamay', // carry-over
  f060072: 'min-ask, China, Chongqing', // carry-over
  f061740: 'min-ask, China, Karamay', // carry-over
  f062260: 'min-ask, China, Guangzhou', // carry-over
  f062334: 'min-ask, China, Karamay', // carry-over
  f062770: 'min-ask, China, Fuzhou', // carry-over
  f062811: 'min-ask, China, Fuzhou', // carry-over
  f062982: 'min-ask, China, Fuzhou', // carry-over
  f065280: 'min-ask, Korea, Songpa-gu, Data Store Ltd', // carry-over
  f066104: 'min-ask, China, Karamay', // carry-over
  f069915: 'min-ask, China, Karamay', // carry-over
  f069919: 'min-ask, China, Karamay', // carry-over
  f070999: 'min-ask, China, Karamay', // carry-over
  f071980: 'min-ask, China, Karamay', // carry-over
  f073552: 'min-ask, China, Karamay', // carry-over
  f073628: 'min-ask, USA, New Castle', // carry-over
  f078772: 'min-ask, China, Karamay', // carry-over
  f079197: 'min-ask, China, Karamay', // carry-over
  f080480: 'min-ask, Ukraine, Lviv', // carry-over
  f082356: 'min-ask, China, Jiaxing', // carry-over
  f082452: 'min-ask, China, Dongguan', // carry-over
  f083625: 'min-ask, China, Karamay', // carry-over
  f083903: "min-ask, China, Xi'an", // carry-over
  f092514: 'min-ask, China, Karamay', // carry-over
  f094614: 'min-ask, China, Karamay', // carry-over
  f097386: 'min-ask, China, Beijing', // carry-over
  f099239: 'min-ask, China, Hong Kong', // carry-over
  f0101087: 'min-ask, Korea', // carry-over
  f0102374: 'min-ask, China, Karamay', // carry-over
  f0102375: 'min-ask, China, Karamay', // carry-over
  f0102376: 'min-ask, China, Karamay', // carry-over
  f0102513: 'min-ask, China, Karamay', // carry-over
  f0102641: 'min-ask, China, Guangzhou', // carry-over
  f0102670: 'min-ask, China, Xiamen', // carry-over
  f0103851: 'min-ask, China, Karamay', // carry-over
  f0104671: 'min-ask, Japan, Ota-ku', // carry-over
  f0105074: 'min-ask, China, Shanghai', // carry-over
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
  f0126898: 'min-ask, China, Harbin', // carry-over
  f0129072: 'min-ask, China, Karamay', // carry-over
  f0129976: 'min-ask, Korea, Gwangju', // carry-over
  f0131654: 'min-ask, Korea, Seoul', // carry-over
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
  f0216849: 'min-ask, China, Fujian', // carry-over
  f0218293: 'min-ask, China, Fujian', // carry-over
  f0220004: 'min-ask, China, Karamay', // carry-over
  f0220632: 'min-ask, China, Fuzhou', // carry-over
  f0220827: 'min-ask, NR', // carry-over
  f0222962: 'min-ask, China, Karamay', // carry-over
  f0224144: 'min-ask, China, Karamay', // carry-over
  f0224841: 'min-ask, China, Guangzhou', // carry-over
  f0225058: 'min-ask, China, Fuzhou', // carry-over
  f0392785: 'min-ask, China, Karamay', // carry-over
  f0396188: 'min-ask, China, Karamay', // carry-over
  f0397855: 'min-ask, China, Karamay', // carry-over
  f0406475: 'min-ask, China, Dongguan', // carry-over
  f0409765: 'min-ask, China, Karamay', // carry-over
  f0410506: 'min-ask, Korea, Seoul', // carry-over
  f0413684: 'min-ask, China, Fujian', // carry-over
  f0413801: 'min-ask, China, Fujian', // carry-over

  // Xfr-failed

  f03345: 'xfr-failed, China, Fuzhou, chh',
  f08103: 'xfr-failed, China, Foshan',
  f010405: 'xfr-failed, China, Foshan',
  f010513: 'xfr-failed, China, Chongqing',
  f016276: 'xfr-failed, China, Beijing',
  f024468: 'xfr-failed, China, Shenzhen',
  f024511: 'xfr-failed, China, Shenzhen',
  f030125: 'xfr-failed, China, Nantong',
  f030335: 'xfr-failed, China, Fujian',
  f039515: 'xfr-failed, China, Chongqing',
  f042567: 'xfr-failed, China, Jinhua',
  f044160: 'xfr-failed, China, Guangzhou, muxing',
  f081644: 'xfr-failed, China, Wenzhou',
  f094374: 'xfr-failed, China, Nanyang',
  f0101387: 'xfr-failed, China, Shenzhen',
  f0107322: 'xfr-failed, NR',
  f0129805: 'xfr-failed, China, Zhejiang + Australia, Adelaide',
  f0137168: 'xfr-failed, China, Beijing',
  f0148143: 'xfr-failed, China, Tianjin',
  f0165643: 'xfr-failed, China, Guangzhou',
  f0168058: 'xfr-failed, NR',
  f0224894: 'xfr-failed, China, Qingdao',
  f0231161: 'xfr-failed, China, Qujing',
  f0349810: 'xfr-failed, China, Qinzhou',
  f0401287: 'xfr-failed, China, Yibin',
  f0405129: 'xfr-failed, China, Fujian',
  f0406478: 'xfr-failed, NR',
  f0410701: 'xfr-failed, China, Changsha',
  f0413178: 'xfr-failed, China, Suqian',

  // Error

  f010617: 'error, Canada, Surrey, kernelogic2, @feiya200', // stream reset

  // Backoff

  // Rejected

  f02419: 'rejected, China, Shanghai, yuantai', // sh: 1: VerifiedDeal:true: Permission denied
  f02500: 'rejected, Korea, Seongnam-si', // miner is not accepting unverified storage deals
  f08403: 'rejected, UK, Lower Slaughter, TippyFlits', // Miner temporarily offline - BACK SOON
  f010254: 'rejected, Japan, Minamata',
  f014569: 'rejected, China, Yangzhou',
  f014768: 'rejected, Singapore, Funktafide, @Funk', // proposed provider collateral above maximum: 70470903848562 > 70460896583216
  f023565: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f039940: 'rejected, China, Mianyang',
  f048669: 'rejected, NR',
  f084879: 'rejected, Korea, Seongnam-si', // miner is not accepting unverified storage deals
  f098706: 'rejected, Korea, Icheon-si', // miner is not accepting unverified storage deals
  f0100082: 'rejected, Korea, Seongnam-si', // miner is not accepting unverified storage deals
  f0107995: 'rejected, NR', // miner is not accepting unverified storage deals
  f0121958: 'rejected, Korea, Seoul', // miner is not accepting unverified storage deals
  f0126824: 'rejected, Korea, Seongnam-si', // no online
  f0131611: 'rejected, Korea, Jeju City', // miner is not accepting unverified storage deals
  f0147284: 'rejected, Korea, Seongnam-si', // no online
  f0155384: 'rejected, Korea, Seongnam-si', // no online
  f0155467: 'rejected, Korea, Seongnam-si', // no online
  f0215704: 'rejected, Korea, Icheon-si', // miner is not accepting unverified storage deals
  f0395911: 'rejected, NR', // miner is not accepting unverified storage deals
  f0396607: 'rejected, Korea, Icheon-si', // miner is not accepting unverified storage deals
  f0396844: 'rejected, Korea, Icheon-si', // miner is not accepting unverified storage deals

  // Dial

  // XNR

  // Error during ask

  f02490: 'error-ask, China, Fujian', // carry-over
  f05664: 'error-ask, China, Hong Kong', // carry-over
  f08257: 'error-ask, China, Zhejiang + Singapore', // carry-over
  f010558: 'error-ask, NR', // carry-over
  f017665: 'error-ask, China, Shenyang', // carry-over
  f020489: 'error-ask, China, Lioaning', // carry-over
  f022820: 'error-ask, China, Guangdong', // carry-over
  f023971: 'error-ask, USA', // carry-over
  f033036: 'error-ask, China, Liaoning', // carry-over
  f034047: 'error-ask, China, Hangzhou', // carry-over
  f034658: 'error-ask, NR', // carry-over
  f063628: 'error-ask, NR', // carry-over
  f065103: 'error-ask, USA + China, Suzhou + Guangzhou + Karamay', // carry-over
  f070501: 'error-ask, USA + China, Hong Kong + Guangzhou', // carry-over
  f079247: 'error-ask, USA + China, Guangzhou + Beijing + Dongguan + Shenzhen', // carry-over
  f079301: 'error-ask, China, Guangzhou + Dongguan + Shenzhen, USA', // carry-over
  f080103: 'error-ask, Korea, Seongnam-si', // carry-over
  f0106949: 'error-ask, Korea, Seoul', // carry-over
  f0110804: 'error-ask, USA, Santa Clara', // carry-over
  f0113331: 'error-ask, Korea, Jinju + USA', // carry-over
  f0115238: 'error-ask, China, Shenyang', // carry-over
  f0131464: 'error-ask, USA, Ashburn', // carry-over
  f0135758: 'error-ask, NR', // carry-over
  f0144615: 'error-ask, NR', // carry-over
  f0145385: 'error-ask, Malaysia, Petaling Jaya', // carry-over
  f0155258: 'error-ask, NR', // carry-over
  f0157513: 'error-ask, Korea, Bucheon-si', // carry-over
  f0157941: 'error-ask, China, Changsha', // carry-over
  f0160135: 'error-ask, NR', // carry-over
  f0162394: 'error-ask, NR', // carry-over
  f0165375: 'error-ask, Korea, Seongnam-si', // carry-over
  f0229547: 'error-ask, Japan, Yokohama', // carry-over
  f0391381: 'error-ask, NR' // carry-over
}

export default annotations
