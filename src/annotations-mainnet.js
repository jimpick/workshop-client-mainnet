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

  // Inflight

  f0110804: 'inflight, USA, Santa Clara', // FundsReserved: 1 day

  // Unknown

  // Active

  f03339: 'active, China, Luzhou, benxun', // carry-over
  f016203: 'active, China, Chengdu', // carry-over
  f030347: 'active, China, Zhejiang', // 1594150 about 4 hours
  f039515: 'active, China, Chongqing', // carry-over
  f053088: 'active, China, Shanghai', // carry-over
  f061158: 'active, China, Guangdong', // 1594894 about 2 hours
  f062473: 'active, NR', // 1594901 about 2 hours
  f066804: 'active, China, Zhejiang', // carry-over
  f078621: 'active, Korea, Uiwang', // 1594602 about 2 hours
  f081644: 'active, China, Wenzhou', // carry-over
  f086439: 'active, NR', // 1594902 about 2 hours
  f094374: 'active, China, Nanyang', // carry-over
  f096974: 'active, China, Chongqing', // 1594191 about 3 hours
  f096976: 'active, Russia', // carry-over
  f0106949: 'active, Korea, Seoul', // 1594568 about 3 hours
  f0110488: 'active, China, Chongqing', // 1594867 about 2 hours
  f0110768: 'active, Korea, Gwangju', // 1594146 about 3 hours
  f0112772: 'active, China, Nantong', // 1594866 about 3 hours
  f0122815: 'active, Korea, Bucheon-si', // 1594863 about 5 hours
  f0132461: 'active, Korea, Daegu', // 1594868 about 2 hours
  f0142606: 'active, Korea, Gangseo-gu', // 1594869 about 2 hours
  f0146751: 'active, China, Jiangsu', // carry-over
  f0156207: 'active, Korea, Ulsan', // 1594157 about 2 hours
  f0156452: 'active, Korea, Ulsan', // 1594595 about 2 hours
  f0157564: 'active, Korea, Daejeon', // 1594881 about 2 hours
  f0164291: 'active, China, Fujian', // 1594899 about 2 hours
  f0165375: 'active, Korea, Seongnam-si', // 1594879 about 5 hours
  f0215497: 'active, Korea, Gangseo-gu', // 1594960 about 2 hours

  // Active-sealing (active, with in-flight sealing)

  // Sealing

  f02540: 'sealing, USA, Mobile', // 1594145
  f02822: 'sealing, China, Chengdu', // carry-over
  f03345: 'sealing, China, Fuzhou, chh', // carry-over
  f08019: 'sealing, China, Yantai, 三合', // carry-over
  f010513: 'sealing, China, Chongqing', // carry-over
  f015233: 'sealing, China, Nanjing', // carry-over
  f016276: 'sealing, China, Beijing', // carry-over
  f019806: 'sealing, China, Beijing', // carry-over
  f020489: 'sealing, China, Lioaning', // carry-over
  f020928: 'sealing, China, Deyang + Singapore', // carry-over
  f022261: 'sealing, China, Luzhou', // carry-over
  f024468: 'sealing, China, Shenzhen', // 1594147
  f029665: 'sealing, China, Shenyang', // carry-over
  f033036: 'sealing, China, Liaoning', // carry-over
  f044160: 'sealing, China, Guangzhou, muxing', // carry-over
  f055132: 'sealing, Vietman, Ho Chi Minh City + China', // carry-over
  f080103: 'sealing, Korea, Seongnam-si', // 1594904
  f089840: 'sealing, Korea, Yeongdeungpo-gu', // carry-over
  f092516: 'sealing, USA, Boardman', // carry-over
  f094430: 'sealing, China, Ordos', // 1594925
  f097720: 'sealing, Korea, Bucheon-si', // 1595089
  f097840: 'sealing, NR', // 1595104
  f098664: 'sealing, China, Jiangsu', // carry-over
  f099705: 'sealing, China, Zibo', // 1594864
  f0102313: 'sealing, Korea, Gangseo-gu', // 1594226
  f0105074: 'sealing, China, Shanghai', // 1594269
  f0107753: 'sealing, China, Shanghai', // 1594569
  f0113331: 'sealing, Korea, Jinju + USA', // 1594367
  f0115108: 'sealing, Korea, Yangcheon-gu', // 1594865
  f0116766: 'sealing, USA, Westford', // carry-over
  f0118769: 'sealing, China, Fujian', // 1594897
  f0119336: 'sealing, Canada, Ottawa', // 1594889
  f0133486: 'sealing, China, Shenzhen', // 1594862
  f0134671: 'sealing, Korea, Gimpo-si', // 1594888
  f0147214: 'sealing, NR', // 1595103
  f0149444: 'sealing, Korea, Gangseo-gu', // 1594576
  f0150744: 'sealing, Korea, Ulsan', // 1594871
  f0156342: 'sealing, NR', // 1595105
  f0165539: 'sealing, Japan, Yokohama', // carry-over
  f0165643: 'sealing, China, Guangzhou', // 1595092
  f0215370: 'sealing, China, Hangzhou', // 1595073
  f0216138: 'sealing, China, Shenzhen', // 1595090
  f0216463: 'sealing, NR', // 1595020

  // Stuck

  f02490: 'stuck, China, Fujian', // CheckForAcceptance: 1 day
  f091355: 'stuck, China, Chengdu', // carry-over
  f0110198: 'stuck, Korea, Hwaseong-si', // CheckForAcceptance: 1 day
  f0120141: 'stuck, Korea, Gangnam-gu', // CheckForAcceptance: 1 day
  f0126535: 'stuck, China, Hong Kong', // CheckForAcceptance: 1 day
  f0128191: 'stuck, Korea, Gangnam-gu', // CheckForAcceptance: 1 day
  f0137168: 'stuck, China, Beijing', // CheckForAcceptance: 1 day
  f0145385: 'stuck, Malaysia, Petaling Jaya', // carry-over
  f0158156: 'stuck, NR', // CheckForAcceptance: about 1 hour
  f0160291: 'stuck, USA', // CheckForAcceptance: 1 day
  f0164326: 'stuck, China, Beijing', // CheckForAcceptance: 1 day
  f0165135: 'stuck, China, Guangzhou', // CheckForAcceptance: 1 day
  f0167137: 'stuck, China, Shaoxing', // CheckForAcceptance: 1 day
  f0168371: 'stuck, Korea, Namyangju', // CheckForAcceptance: 1 day
  f0214181: 'stuck, Australia, Mosman', // CheckForAcceptance: 1 day
  f0215404: 'stuck, China, Suzhou', // CheckForAcceptance: 1 day
  f0219631: 'stuck, USA, Council Bluffs', // CheckForAcceptance: 1 day

  // Busy

  f015734: 'busy, China, Qingdao', // cannot seal a sector before 520925

  // Min Size

  f01234: 'min-size, Belgium, Bonheiden', // carry-over
  f01238: 'min-size, Vietnam, Hanoi, FILECOIN-VIETNAM', // 131072 < 8589934592
  f01240: 'min-size, Netherlands, HidNand', // 131072 < 17179869184
  f01272: 'min-size, Singapore', // 131072 < 10485760
  f01276: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 17179869184
  f01278: 'min-size, USA, Grand Rapids, MiMiner', // 131072 < 1073741824
  f02387: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 17179869184
  f02401: 'min-size, Canada, Chambly, NBFS Canada', // 131072 < 17179869184
  f02419: 'min-size, China, Shanghai, yuantai', // 131072 < 268435456
  f02423: 'min-size, Ukraine, Kyiv', // carry-over
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 131072 < 1073741824
  f02619: 'min-size, China, Beijing, Blockcasting', // 131072 < 1048576
  f02620: 'min-size, Poland, Krakow, @magik6k', // 131072 < 536870912
  f03224: 'min-size, Ukraine, Kyiv', // carry-over
  f03624: 'min-size, Germany, Chemnitz, ode', // 131072 < 8589934592
  f07998: 'min-size, China, Hangzhou', // 131072 < 8000000000
  f08240: 'min-size, Russia, Novosibirsk, Rabinovitch', // 131072 < 1073741824
  f08399: 'min-size, USA, Sammamish', // 131072 < 4294967296
  f08403: 'min-size, UK, Lower Slaughter, TippyFlits', // 131072 < 33554432
  f09848: 'min-size, USA, Irvine, BigBearLake', // 131072 < 2147483648
  f010035: 'min-size, Netherlands + China, Suzhou', // 131072 < 2147483648
  f010254: 'min-size, Japan, Minamata', // 131072 < 134217728
  f010446: 'min-size, Netherlands, Angelo', // 131072 < 8589934592
  f010479: 'min-size, France, Fontenay-sous-Bois, s0nik42', // 131072 < 8589934592
  f010507: 'min-size, China, Hangzhou', // 131072 < 1073741824
  f010617: 'min-size, Canada, Surrey, kernelogic2, @feiya200', // 131072 < 17179869184
  f014768: 'min-size, Singapore, Funktafide, @Funk', // 131072 < 1073741824
  f015927: 'min-size, USA, East Islip, CDImine', // 131072 < 17179869184
  f018501: 'min-size, China, Beijing', // 131072 < 1073741824
  f019002: 'min-size, China, Xiamen', // 131072 < 1073741824
  f019104: 'min-size, Canada, Chambly, NBFS DEV', // 131072 < 8388608
  f019279: 'min-size, Canada, Calgary', // carry-over
  f019362: 'min-size, China, Hangzhou, 青青子衿', // 131072 < 17179869184
  f019399: 'min-size, Korea, Busan', // 131072 < 268435456
  f019551: 'min-size, UK, Birmingham, @Neofix AF', // 131072 < 1073741824
  f020378: 'min-size, Bulgaria, Asenovgrad', // 131072 < 2147483648
  f020385: 'min-size, Korea, Incheon', // 131072 < 536870912
  f021255: 'min-size, Netherlands + China, Suzhou', // 131072 < 2147483648
  f021716: 'min-size, New Zealand, Wellington', // 131072 < 8589934592
  f022142: 'min-size, USA, Queens, Nelson SR2', // 131072 < 134217728
  f022163: 'min-size, dns:fil.akasha.network', // 131072 < 17179869184
  f022289: 'min-size, China, Mianyang', // carry-over
  f022399: 'min-size, China, Beijing', // 131072 < 1573031772
  f023467: 'min-size, Norway, Oslo, PhiMining.io', // 131072 < 268435456
  f023565: 'min-size, China, Fuzhou', // 131072 < 1536000
  f023660: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023662: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023853: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023854: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023855: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023858: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023859: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023861: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023868: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023869: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023870: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023871: 'min-size, China, Fuzhou', // 131072 < 4294967296
  f023928: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023971: 'min-size, USA', // carry-over
  f023977: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023978: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023980: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023981: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024006: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024007: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024008: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024012: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024013: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024014: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024081: 'min-size, undefined', // 131072 < 1572864000
  f024084: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024085: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024136: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024146: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024147: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024148: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024511: 'min-size, China, Shenzhen', // 131072 < 134217728
  f025017: 'min-size, China, Hefei, 一三科技-913', // 131072 < 134217728
  f030335: 'min-size, China, Fujian', // 131072 < 134217728
  f032934: 'min-size, Korea, Incheon', // 131072 < 1073741824
  f033189: 'min-size, NR', // 131072 < 2147483648
  f034047: 'min-size, China, Hangzhou', // 131072 < 1073741824
  f039940: 'min-size, China, Mianyang', // 131072 < 134217728
  f047419: 'min-size, USA, Waukesha', // 131072 < 17179869184
  f048669: 'min-size, NR', // 131072 < 1048576
  f049882: 'min-size, Netherlands, De Rijp, Chipz', // 131072 < 17179869184
  f062353: 'min-size, Germany, Frankfurt', // 131072 < 17179869184
  f064218: 'min-size, USA, Kirkland', // 131072 < 17179869184
  f064668: 'min-size, China, Hong Kong', // 131072 < 1048576
  f065200: 'min-size, China, Yibin', // carry-over
  f066596: 'min-size, USA, San Diego', // 131072 < 1048576
  f078522: 'min-size, NR', // 131072 < 4294967296
  f079007: 'min-size, China, Jinan', // 131072 < 1048576
  f079817: "min-size, Russia, Ul'yanovka", // 131072 < 1073741824
  f082617: 'min-size, China, Fujian', // 131072 < 134217728
  f083920: 'min-size, NR', // 131072 < 1573031772
  f085899: 'min-size, China, Wuxi', // 131072 < 16777216
  f097618: 'min-size, China, Suzhou', // 131072 < 524288000
  f097777: 'min-size, Ukraine, Ivano-Frankivsk', // carry-over
  f099608: 'min-size, Latvia, Riga', // carry-over
  f0100116: 'min-size, Korea, Uljin County', // 131072 < 1073741824
  f0104671: 'min-size, Japan, Ota-ku', // carry-over
  f0104967: 'min-size, Ukraine, Ternopil', // carry-over
  f0113664: 'min-size, France', // carry-over
  f0116287: 'min-size, China, Shanghai', // 131072 < 2147483648
  f0116707: 'min-size, Germany, Dusseldorf', // carry-over
  f0118360: 'min-size, China, Hangzhou', // carry-over
  f0121768: 'min-size, China, Guangdong', // 131072 < 1073741824
  f0124335: 'min-size, Finland, Helsinki', // carry-over
  f0126868: 'min-size, Ukraine, Vinnytsia', // carry-over
  f0127896: 'min-size, Bulgaria, Sofia', // carry-over
  f0142637: 'min-size, China, Mianyang', // 131072 < 4294967296
  f0145162: 'min-size, Japan, Kumamoto', // carry-over
  f0145874: 'min-size, Canada, Brampton', // carry-over
  f0157535: 'min-size, Canada, Brampton', // carry-over
  f0165400: 'min-size, Canada, Brampton', // carry-over
  f0187709: 'min-size, Russia, Moscow', // carry-over

  // Max Size

  // Min Ask

  f01241: 'min-ask, China, Karamay', // carry-over
  f01277: 'min-ask, Sweden, Stockholm', // carry-over
  f01280: 'min-ask, China, Wuxi', // carry-over
  f01799: 'min-ask, China, Jinan + Singapore', // 20000000 < 12207031250000000
  f02381: 'min-ask, China, Dongguan', // 20000000 < 6103515625000
  f02415:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f02500: 'min-ask, Korea, Seongnam-si', // carry-over
  f02501: 'min-ask, China, Karamay', // carry-over
  f02514: 'min-ask, China, Karamay', // carry-over
  f02520: 'min-ask, China, Hong Kong + Dongguan', // 20000000 < 61035156250000000000000
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
  f03364: 'min-ask, China, Inner Mongolia', // carry-over
  f03482: 'min-ask, China, Karamay', // carry-over
  f03488: 'min-ask, Korea, Yeongdeungpo-dong', // carry-over
  f03491:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f04443: 'min-ask, China, Shanghai', // 20000000 < 61035156
  f05315: 'min-ask, China, Karamay', // carry-over
  f05316: 'min-ask, China, Karamay', // carry-over
  f05317: 'min-ask, China, Karamay', // carry-over
  f05664: 'min-ask, China, Hong Kong', // 20000000 < 24414062500000
  f07850: 'min-ask, China, Karamay', // carry-over
  f07945: 'min-ask, China, Guangzhou', // 20000000 < 122070312500000000
  f07990:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f08025:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // carry-over
  f08103: 'min-ask, China, Foshan', // 20000000 < 61035156
  f08257: 'min-ask, China, Zhejiang + Singapore', // carry-over
  f08383: 'min-ask, China, Karamay', // carry-over
  f09693: 'min-ask, China, Karamay', // carry-over
  f09696: 'min-ask, China, Karamay', // carry-over
  f010010: 'min-ask, China, Changzhou', // carry-over
  f010253: 'min-ask, China, Karamay', // carry-over
  f010405: 'min-ask, China, Foshan', // 20000000 < 122070312500000
  f014365: 'min-ask, Australia, Turramurra + Sydney', // 20000000 < 120849609375000
  f014409: 'min-ask, USA, Monroe', // 20000000 < 6103515625
  f015897: 'min-ask, China, Hong Kong', // carry-over
  f015941: 'min-ask, Ukraine, Kyiv', // 20000000 < 24414062
  f017665: 'min-ask, China, Shenyang', // carry-over
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
  f019240: 'min-ask, China, Beijing', // carry-over
  f020541: 'min-ask, China, Shanghai', // 20000000 < 61035156250
  f020747: 'min-ask, China, Xiamen', // 20000000 < 122070312
  f022130: 'min-ask, Korea, Seodaemun-gu', // 20000000 < 61035156
  f022308: 'min-ask, China, Bozhou', // carry-over
  f022352: 'min-ask, Norway, Borgen, TechHedge, @Reiers', // 20000000 < 21972656
  f022522: 'min-ask, China, Dongguan', // carry-over
  f023152: 'min-ask, China, Shandong', // carry-over
  f023495: 'min-ask, China, Karamay', // carry-over
  f023825: 'min-ask, China, Karamay', // carry-over
  f023843: 'min-ask, China, Zhangjiakou', // carry-over
  f024015: 'min-ask, China, Karamay', // carry-over
  f024016: 'min-ask, China, Karamay', // carry-over
  f024156: 'min-ask, USA', // carry-over
  f024184: 'min-ask, Korea, Yeongdeungpo-dong', // carry-over
  f029344: 'min-ask, Korea, Seongnam-si', // 20000000 < 1220703125000
  f029401: 'min-ask, China, Karamay', // carry-over
  f029404: 'min-ask, China, Karamay', // carry-over
  f030203: 'min-ask, China, Shenzhen', // carry-over
  f030379: 'min-ask, Korea, Uiwang', // 20000000 < 1220703125
  f030384: 'min-ask, China, Shenzhen', // carry-over
  f032913: 'min-ask, China, Shenzhen', // carry-over
  f033123: 'min-ask, China, Karamay', // carry-over
  f033356: 'min-ask, Korea, Yeongdeungpo-dong', // carry-over
  f033511: 'min-ask, China, Dongguan', // 20000000 < 1220703125
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
  f058000: 'min-ask, China, Suzhou', // 20000000 < 24414062
  f060072: 'min-ask, China, Chongqing', // carry-over
  f061740: 'min-ask, China, Karamay', // carry-over
  f062260: 'min-ask, China, Guangzhou', // 20000000 < 61035156250000
  f062318: 'min-ask, Korea, Naju', // 20000000 < 12207031250
  f062334: 'min-ask, China, Karamay', // carry-over
  f062770: 'min-ask, China, Fuzhou', // carry-over
  f062811: 'min-ask, China, Fuzhou', // carry-over
  f062982: 'min-ask, China, Fuzhou', // carry-over
  f065103: 'min-ask, USA + China, Suzhou + Guangzhou + Karamay', // carry-over
  f065280: 'min-ask, Korea, Songpa-gu, Data Store Ltd', // 20000000 < 1220703125
  f066104: 'min-ask, China, Karamay', // carry-over
  f069915: 'min-ask, China, Karamay', // carry-over
  f069919: 'min-ask, China, Karamay', // carry-over
  f070501: 'min-ask, USA + China, Hong Kong + Guangzhou', // carry-over
  f070999: 'min-ask, China, Karamay', // carry-over
  f071664: 'min-ask, China, Shangdong', // carry-over
  f071980: 'min-ask, China, Karamay', // carry-over
  f073552: 'min-ask, China, Karamay', // carry-over
  f073628: 'min-ask, USA, New Castle', // 20000000 < 122070312500000
  f074738: 'min-ask, Korea, Icheon-si', // carry-over
  f078770: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f078772: 'min-ask, China, Karamay', // carry-over
  f079197: 'min-ask, China, Karamay', // carry-over
  f079247: 'min-ask, USA + China, Guangzhou + Beijing + Dongguan + Shenzhen', // carry-over
  f079301: 'min-ask, China, Guangzhou + Dongguan + Shenzhen, USA', // carry-over
  f080444: 'min-ask, China, Chengdu', // carry-over
  f080480: 'min-ask, Ukraine, Lviv', // carry-over
  f082356: 'min-ask, China, Jiaxing', // carry-over
  f082452: 'min-ask, China, Dongguan', // carry-over
  f083625: 'min-ask, China, Karamay', // carry-over
  f083903: "min-ask, China, Xi'an", // carry-over
  f084879: 'min-ask, Korea, Seongnam-si', // carry-over
  f092514: 'min-ask, China, Karamay', // carry-over
  f094614: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f097386: 'min-ask, China, Beijing', // carry-over
  f098706: 'min-ask, Korea, Icheon-si', // carry-over
  f099239: 'min-ask, China, Hong Kong', // carry-over
  f099884: 'min-ask, China, Chengdu', // carry-over
  f0100082: 'min-ask, Korea, Seongnam-si', // carry-over
  f0101087: 'min-ask, Korea', // 20000000 < 122070312500000
  f0102374: 'min-ask, China, Karamay', // carry-over
  f0102375: 'min-ask, China, Karamay', // carry-over
  f0102376: 'min-ask, China, Karamay', // carry-over
  f0102513: 'min-ask, China, Karamay', // carry-over
  f0102641: 'min-ask, China, Guangzhou', // carry-over
  f0102670: 'min-ask, China, Xiamen', // 20000000 < 121948242187500000
  f0103851: 'min-ask, China, Karamay', // carry-over
  f0107171: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0107308: 'min-ask, China, Shenyang', // carry-over
  f0109713: 'min-ask, China, Beijing', // carry-over
  f0109901: 'min-ask, China, Huludao', // 20000000 < 122070312500000
  f0110283: 'min-ask, China, Zhongshan', // 20000000 < 12207031250000000000000000
  f0110442: 'min-ask, China, Fujian', // carry-over
  f0110936: 'min-ask, China, Fujian', // carry-over
  f0114808: 'min-ask, China, Shanghai', // 20000000 < 12207031250000000
  f0114924: 'min-ask, China, Fujian', // carry-over
  f0115238: 'min-ask, China, Shenyang', // 20000000 < 61035156250000
  f0115744: 'min-ask, China, Karamay', // carry-over
  f0120983: 'min-ask, China, Fujian', // carry-over
  f0121450: 'min-ask, China, Fujian', // carry-over
  f0121958: 'min-ask, Korea, Seoul', // carry-over
  f0123931: 'min-ask, China, Fujian', // carry-over
  f0124102: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f0124554: 'min-ask, Korea, Gimhae', // 20000000 < 24414062
  f0126898: 'min-ask, China, Harbin', // 20000000 < 122070312500000
  f0128974: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0129072: 'min-ask, China, Karamay', // carry-over
  f0131464: 'min-ask, USA, Ashburn', // 20000000 < 122070312500000000
  f0131654: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0132706: 'min-ask, China, Beijing', // carry-over
  f0132765: 'min-ask, NR', // 20000000 < 1220703125000
  f0133999: 'min-ask, China, Changsha', // 20000000 < 610351562
  f0134565: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0134682: 'min-ask, China, Beijing', // carry-over
  f0134778: 'min-ask, China, Beijing', // carry-over
  f0134991: 'min-ask, China, Foshan', // carry-over
  f0135738: 'min-ask, China, Karamay', // carry-over
  f0141614: 'min-ask, China, Fujian', // carry-over
  f0141634: 'min-ask, China, Changsha', // carry-over
  f0145313: 'min-ask, China, Karamay', // carry-over
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
  f0157941: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f0158142: 'min-ask, China, Karamay', // carry-over
  f0158468: 'min-ask, China, Guangzhou', // 20000000 < 12206909179687500000
  f0164260: 'min-ask, NR', // 20000000 < 122070312499877929687500000
  f0165111: 'min-ask, China, Guangzhou', // 20000000 < 1220703125000000000
  f0215704: 'min-ask, Korea, Icheon-si', // 20000000 < 1220703125000
  f0216849: 'min-ask, China, Fujian', // 20000000 < 12207031249999999877929687500000
  f0218293: 'min-ask, China, Fujian', // 20000000 < 1220703124877929687500000
  f0220004: 'min-ask, China, Karamay', // 20000000 < 122070312500000

  // Error

  f03134: 'error, China, Cangzhou, 乔木信息', // deal failed: (State=26) handing off deal to node: write |1: broken pipe
  f03519: 'error, USA, Seattle', // stream reset
  f07709: 'error, Korea, Dongjak-gu', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: SysErrOutOfGas(7)
  f07830: 'error, China, Zhongshan', // EOF
  f08157: 'error, China, Beijing + Germany, Frankfurt, 超星际', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: SysErrOutOfGas(7)
  f09689: 'error, USA, Portland', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f010241: 'error, China, Beijing + USA, Portland, 6Block-P', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 2.385595691070875808 FIL, balance: 1.137184564132064476 FIL): not enough funds to execute transaction
  f014569: 'error, China, Yangzhou', // stream reset
  f016398: 'error, China, Shanghai', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f017193: "error, China, Xi'an + Singapore", // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f017242: 'error, China, Guangdong', // stream reset
  f019100: 'error, Romania, Cluj-Napoca', // carry-over
  f019824: 'error, USA', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.179999999964086239 FIL, balance: 0.092668830630241061 FIL): not enough funds to execute transaction
  f022820: 'error, China, Guangdong', // stream reset
  f023179: 'error, China, Fuzhou', // AddPiece failed: adding piece to sector: writing piece: no suitable P1 workers found
  f023198: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f024550: 'error, China, Wenzhou', // stream reset
  f024944: 'error, Korea, Yeongdeungpo-dong', // carry-over
  f025025: 'error, China, Qingdao', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999952103408 FIL, balance: 0.010414142589193078 FIL): not enough funds to execute transaction
  f030125: 'error, China, Nantong', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.29999999996578962 FIL, balance: 0.171655331867495893 FIL): not enough funds to execute transaction
  f042567: 'error, China, Jinhua', // carry-over
  f054415: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f055102: 'error, Vietman, Ho Chi Minh City + China', // carry-over
  f070475: 'error, China, Guyuan', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: gas fee cap too low
  f072737: 'error, China, Shanghai', // stream reset
  f079370: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f085777: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f086151: 'error, China, Dongguan', // carry-over
  f090052: 'error, China, Suqian', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f093658: 'error, China, Fujian', // deal failed: (State=26) handing off deal to node: write |1: broken pipe
  f094901: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.49999999998919005 FIL, balance: 0.362365118512101744 FIL): not enough funds to execute transaction
  f097214: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.426449480872920071 FIL, balance: 0.387757970402262176 FIL): not enough funds to execute transaction
  f0101387: 'error, China, Shenzhen', // carry-over
  f0108979: 'error, Korea, Bupyeong-gu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.49999999999146896 FIL, balance: 0.082294211135716607 FIL): not enough funds to execute transaction
  f0109040: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0109043: 'error, China, Karamay', // carry-over
  f0110133: 'error, China, Ningbo', // stream reset
  f0110762: 'error, Korea, Seoul', // stream reset
  f0111885: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.419795665200051705 FIL, balance: 0.27757739109827699 FIL): not enough funds to execute transaction
  f0112713: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.32064820357325599 FIL, balance: 0.176181024369583869 FIL): not enough funds to execute transaction
  f0116436: 'error, Singapore', // carry-over
  f0116445: 'error, Singapore', // carry-over
  f0121533: 'error, China, Zhejiang', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 2.432221104156124714 FIL, balance: 1.55896654458445815 FIL): not enough funds to execute transaction
  f0123536: 'error, China, Fuzhou', // carry-over
  f0127980: 'error, Korea, Seoul', // EOF
  f0129805: 'error, China, Zhejiang + Australia, Adelaide', // carry-over
  f0131359: 'error, China, Fuzhou', // deal failed: (State=11) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.278222573676253334 FIL, balance: 0.185827096192653871 FIL): not enough funds to execute transaction
  f0131901: 'error, Korea, Daejeon', // deal failed: (State=11) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 10.793043594817418846 FIL, balance: 10.498216165137382625 FIL): validation failure
  f0136425: 'error, Korea, Busan', // unable to verify signature on deal response
  f0137489: 'error, UK, Deeside', // carry-over
  f0145018: 'error, Korea', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.249999999955096349 FIL, balance: 0.139644554642297562 FIL): not enough funds to execute transaction
  f0148143: 'error, China, Tianjin', // carry-over
  f0149455: 'error, NR', // deal failed: (State=26) error calling node: AddFunds exit code: SysErrOutOfGas(7)
  f0150782: 'error, China, Xiamen', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151341: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151366: 'error, China, Fuzhou + Xiamen', // carry-over
  f0158993: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0162183: "error, China, Xi'an", // carry-over
  f0169153: 'error, China, Chengdu', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: SysErrOutOfGas(7)
  f0215360: 'error, France', // deal failed: (State=26) error calling node: AddFunds errored: handler: websocket connection closed
  f0220632: 'error, China, Fuzhou', // stream reset

  // Dial backoff

  f07919: 'backoff, China, Beijing, Shanghai, Hunan',
  f015767: 'backoff, Russia, Khabarovsk + Japan, Khabarovsk + USA',
  f058374: 'backoff, NR',
  f094128: 'backoff, China, Shenzhen',
  f0101069: 'backoff, NR',
  f0122410: 'backoff, China, Shanghai',
  f0143110: 'backoff, NR',
  f0144194: 'backoff, NR',
  f0148627: 'backoff, NR',
  f0149783: 'backoff, NR',
  f0159649: 'backoff, NR',

  // Rejected

  f01247: 'rejected, Canada, Montreal', // Sorry, we are currently not accepting deals!
  f01248: 'rejected, Germany, Frankfurt', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f01289: 'rejected, China, Ningbo', // no online
  f02299: 'rejected, China, Beijing', // no online
  f02301: 'rejected, USA',
  f02303: 'rejected, Singapore',
  f02421: 'rejected, China, Deyang + Singapore', // carry-over
  f02503: 'rejected, Singapore', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02528: 'rejected, Singapore', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02529: 'rejected, China, Chongqing + Singapore', // carry-over
  f02609: 'rejected, China, Shanghai', // no online
  f02613: 'rejected, China, Chongqing + Singapore', // carry-over
  f02625: 'rejected, China, Shanghai', // carry-over
  f02626: 'rejected, Singapore', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02665: 'rejected, Netherlands, Amsterdam, fm-ops', // no online
  f02856: 'rejected, China, Chengdu', // no online
  f03000: 'rejected, China, Chengdu', // carry-over
  f03249: 'rejected, China, Yunfu', // carry-over
  f03269: 'rejected, Australia', // getting client market balance failed
  f03325: 'rejected, China, Guangdong',
  f03344: 'rejected, China, Guangzhou', // no online
  f03362: 'rejected, Germany, Berlin',
  f08094: 'rejected, China, Guangzhou', // carry-over
  f08197: 'rejected, China, Foshan',
  f09620: 'rejected, China, Weifang',
  f09642: 'rejected, Sweden, Alvsjo', // carry-over
  f09710: 'rejected, China, Shenzhen',
  f010038: 'rejected, China, Hangzhou + Singapore',
  f010400: 'rejected, China, Shenyang', // carry-over
  f010493: 'rejected, China, Shanghai', // no online
  f010498: 'rejected, China, Shenzhen', // no online
  f010505: 'rejected, China, Wuhan, Interstellar Roewe', // no online
  f010528: 'rejected, China, Chongqing, Interstellar Roewe', // no online
  f014233: 'rejected, China, Shanghai + USA', // no online
  f014251: 'rejected, China, Shenzhen',
  f014327:
    'rejected, China, Ningbo + Japan, Heiwajima + Germany, Frankfurt + USA + Canada, Toronto', // no online
  f014683: 'rejected, China, Dongguan',
  f014803: 'rejected, China, Beijing', // no online
  f015747: 'rejected, Japan, Setagaya-ku',
  f015782: 'rejected, Australia', // getting client market balance failed
  f017229: 'rejected, China, Sichuan',
  f019041: 'rejected, China, Zhejiang + Singapore', // no online
  f019099: 'rejected, China, Hong Kong + Guangzhou', // no online
  f019422: 'rejected, China, Guangzhou', // no online
  f020315: 'rejected, China, Guangzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f020523: 'rejected, China, Suzhou, changjiang', // sh: 1: VerifiedDeal:true: not found
  f020940: 'rejected, USA, Bellevue',
  f021075: 'rejected, China, Chengdu', // no online
  f021254: 'rejected, NR', // f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa<nil>
  f021444: 'rejected, China, Shanghai', // no online
  f021504: 'rejected, NR',
  f021536: 'rejected, NR', // getting client market balance failed
  f021714: 'rejected, China, Hong Kong', // carry-over
  f021870: 'rejected, China, Jieyang',
  f021961: 'rejected, China, Fuzhou', // getting client market balance failed
  f022072: 'rejected, China, Jieyang',
  f022125: 'rejected, China, Shenzhen', // no online
  f022566: 'rejected, China, Nanchong',
  f022748: 'rejected, China, Xinyang', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f022832: 'rejected, China, Beijing', // carry-over
  f023534: 'rejected, China, Chongqing',
  f023982: 'rejected, China, Chengdu',
  f023983: 'rejected, China, Chongqing',
  f029490: 'rejected, NR',
  f032888: 'rejected, China, Weifang', // carry-over
  f033501: 'rejected, China, Shenzhen', // carry-over
  f034258: 'rejected, China, Mianyang',
  f034567: 'rejected, China, Shenzhen', // carry-over
  f034777: 'rejected, China, Chengdu', // no online
  f035436: 'rejected, China, Jiangsu', // no online
  f040332: 'rejected, China, Shenzhen', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f042391: 'rejected, China, Fuzhou', // no online
  f042896: 'rejected, China, Deyang', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f045756: 'rejected, China, Hangzhou', // getting client market balance failed
  f046248: 'rejected, China, Dongguan', // carry-over
  f047666: 'rejected, China, Suihua', // no online
  f047843: 'rejected, China, Xiamen', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f047857: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f047868: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f048135: 'rejected, China, Chongqing, password interstellar', // sh: 1: /lotus_data/.lotusstorage/dealfilter.pl: not found
  f048968: 'rejected, NR', // no online
  f050260: 'rejected, China, Suzhou',
  f052701: 'rejected, China, Beijing',
  f053140: 'rejected, China, Shenzhen', // carry-over
  f053141: 'rejected, China, Shenzhen', // carry-over
  f054666: 'rejected, China, Changsha', // no online
  f055335: 'rejected, NR',
  f056226: 'rejected, NR',
  f056406: 'rejected, China, Taizhou', // no online
  f056573: 'rejected, China, Sichuan', // no online
  f057127: 'rejected, China, Suzhou', // no online
  f057466: 'rejected, China, Guangzhou', // no online
  f058369: 'rejected, USA, Boston', // no online
  f060114: 'rejected, China, Shenzhen', // carry-over
  f062937: 'rejected, NR',
  f063869: 'rejected, NR',
  f066270: 'rejected, China, Dongguan', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f066781: 'rejected, China, Beijing', // carry-over
  f066790: 'rejected, China, Beijing',
  f068528: 'rejected, China, Shanghai', // carry-over
  f068560: 'rejected, China, Changsha', // syntax error at /filecoin/lotusminer/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /filecoin/lotusminer/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /filecoin/lotusminer/dealfilter.pl line 16.
  f070802: 'rejected, NR',
  f071624: 'rejected, USA, Boyne City', // carry-over
  f073697: 'rejected, China, Karamay', // carry-over
  f078899: 'rejected, NR',
  f079618: 'rejected, China, Beijing', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f079815: 'rejected, China, Hangzhou', // getting client market balance failed
  f080468: 'rejected, NR', // no online
  f081323: 'rejected, UK, Cambridge', // carry-over
  f083065: 'rejected, China, Taizhou', // no online
  f083638: 'rejected, China, Chongqing',
  f085710: 'rejected, China, Chengdu', // no online
  f085735: "rejected, China, Ya'an", // no online
  f086423: 'rejected, China, Chengdu', // no online
  f087256: 'rejected, China, Hangzhou', // getting client market balance failed
  f087530: 'rejected, China, Shenzhen', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f089551: 'rejected, NR', // getting client market balance failed
  f090387: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f090864: 'rejected, NR',
  f098770: 'rejected, USA, Pontiac', // carry-over
  f0100066: 'rejected, NR', // no online
  f0102358: 'rejected, China, Guizhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f0107118: 'rejected, China, Hangzhou + Zhejiang', // no online
  f0107133: 'rejected, NR', // no online
  f0109163: 'rejected, Korea, Songpa-gu', // no online
  f0109272: 'rejected, China, Dongguan', // no online
  f0110101: 'rejected, Korea, Goyang-si', // no online
  f0111544: 'rejected, Korea, Seoul', // no online
  f0111658: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f0112075: 'rejected, Korea, Seoul', // no online
  f0112087: 'rejected, China, Xiamen', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f0112691: 'rejected, Korea, Seoul', // no online
  f0114043: 'rejected, Korea, Seoul', // no online
  f0114687: 'rejected, China, Dongguan', // no online
  f0116628: 'rejected, China, Shanghai', // no online
  f0117118: 'rejected, NR', // no online
  f0117146: 'rejected, China, Beijing', // no online
  f0118317: 'rejected, Singapore', // carry-over
  f0118330: 'rejected, Singapore', // carry-over
  f0118695: 'rejected, Korea, Seoul', // no online
  f0118837: 'rejected, Korea, Seoul', // no online
  f0118917: 'rejected, China, Shaoxing', // no online
  f0120546: 'rejected, Korea, Seoul', // no online
  f0120793: 'rejected, Korea, Seoul', // no online
  f0120909: 'rejected, China, Changsha', // syntax error at /filecoin/lotusminer/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /filecoin/lotusminer/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /filecoin/lotusminer/dealfilter.pl line 17.
  f0121260: 'rejected, China, Quinzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f0121602: 'rejected, China, Hong Kong', // carry-over
  f0122415: 'rejected, Korea, Seoul', // no online
  f0123275: 'rejected, Korea, Seoul', // no online
  f0123281: 'rejected, Korea, Seoul', // no online
  f0124036: 'rejected, China, Nanchang', // carry-over
  f0125863: 'rejected, Korea, Seoul', // no online
  f0126037: 'rejected, Korea, Seoul', // no online
  f0126038: 'rejected, Korea, Seoul', // no online
  f0126039: 'rejected, NR', // no online
  f0126478: 'rejected, China, Ningbo',
  f0126824: 'rejected, Korea, Seongnam-si', // carry-over
  f0127352: 'rejected, Korea, Seoul', // no online
  f0127353: 'rejected, Korea, Seoul', // no online
  f0127354: 'rejected, Korea, Seoul', // no online
  f0128580: 'rejected, Korea, Seoul', // no online
  f0128581: 'rejected, Korea, Seoul', // no online
  f0128582: 'rejected, Korea, Seoul', // no online
  f0129976: 'rejected, Korea, Gwangju', // no online
  f0131331: 'rejected, China, Beijing', // carry-over
  f0131419: 'rejected, China, Beijing',
  f0131611: 'rejected, Korea, Jeju City', // no online
  f0132178: 'rejected, China, Ningbo',
  f0134285: "rejected, China, Ya'an + USA", // no online
  f0134516: 'rejected, Singapore',
  f0134518: 'rejected, China, Guangdong',
  f0135078: 'rejected, USA, Denver', // carry-over
  f0137475: 'rejected, China, Beijing',
  f0143160: 'rejected, China, Ningbo', // carry-over
  f0143500: 'rejected, China, Zhejiang', // no online
  f0143928: 'rejected, China, Beijing', // carry-over
  f0145784: 'rejected, Korea, Seoul', // no online
  f0146301: 'rejected, China, Shenzhen', // carry-over
  f0146393: 'rejected, China, Foshan', // carry-over
  f0147284: 'rejected, Korea, Seongnam-si', // carry-over
  f0147565: 'rejected, China, Shenzhen',
  f0147676: 'rejected, Korea, Seoul', // no online
  f0148391: 'rejected, China, Changsha + Japan, Tokyo', // no online
  f0149026: 'rejected, China, Shenzhen', // carry-over
  f0149670: 'rejected, NR', // no online
  f0151629: 'rejected, NR', // no online
  f0151993: 'rejected, Korea, Icheon-si', // carry-over
  f0152712: 'rejected, NR', // no online
  f0153188: 'rejected, NR', // no online
  f0153986: 'rejected, China, Changsha', // carry-over
  f0154039: 'rejected, NR', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f0155004: 'rejected, Korea, Seoul', // no online
  f0155384: 'rejected, Korea, Seongnam-si', // carry-over
  f0155467: 'rejected, Korea, Seongnam-si', // carry-over
  f0156232: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f0156264: 'rejected, Korea, Seoul', // no online
  f0156333: 'rejected, China, Ningbo',
  f0158666: 'rejected, China, Beijing',
  f0158950: 'rejected, China, Beijing',
  f0159961: 'rejected, China, Chongqing', // deal start epoch is too far in the future: 524045 > 523478
  f0162385: 'rejected, China, Beijing',
  f0162394: 'rejected, NR', // no online
  f0164126: 'rejected, NR', // no online
  f0165533: 'rejected, NR', // no online
  f0166327: 'rejected, NR',
  f0214631: 'rejected, Korea, Seoul', // no online
  f0216139: 'rejected, Korea, Goyang-si', // no online

  // Dial

  f01012: 'dial, China, Guangzhou + Hong Kong', // * [/ip4/127.0.0.1/tcp/8888] dial tcp4 127.0.0.1:8888: connect: connection refused  * [/ip4/43.230.90.191/tcp/8888] dial tcp4 43.230.90.191:8888: connect: connection refused  * [/ip4/183.60.252.190/tcp/8888] dial tcp4 183.60.252.190:8888: connect: connection refused
  f01152: 'dial, China, Beijing', // * [/ip4/101.36.64.211/tcp/42545] dial tcp4 0.0.0.0:37207->101.36.64.211:42545: i/o timeout
  f01154: 'dial, NR', // * [/ip4/192.168.2.50/tcp/1024] dial tcp4 0.0.0.0:37207->192.168.2.50:1024: i/o timeout
  f01155: 'dial, China, Shanghai', // * [/ip4/203.107.44.156/tcp/39770] dial tcp4 0.0.0.0:37207->203.107.44.156:39770: i/o timeout
  f01235: 'dial, Singapore', // * [/ip4/170.33.12.95/tcp/16668] dial tcp4 0.0.0.0:33373->170.33.12.95:16668: i/o timeout
  f01279: 'dial, China, Sichuan', // * [/ip4/118.116.2.66/tcp/40000] dial tcp4 0.0.0.0:37207->118.116.2.66:40000: i/o timeout
  f01287: 'dial, China, Jiaxing, MaiTian', // * [/ip4/172.16.2.123/tcp/5472] dial tcp4 0.0.0.0:33373->172.16.2.123:5472: i/o timeout  * [/ip4/122.225.68.92/tcp/5472] dial tcp4 0.0.0.0:33373->122.225.68.92:5472: i/o timeout
  f01475: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17031] dial tcp4 0.0.0.0:37207->170.33.12.186:17031: i/o timeout
  f01782: 'dial, China, Shanghai', // * [/ip4/139.196.240.164/tcp/11347] failed to negotiate security protocol: EOF
  f01800: 'dial, China, Shenzhen + Chengdu', // * [/ip4/182.131.4.48/tcp/33333] dial tcp4 182.131.4.48:33333: connect: connection refused
  f02399: 'dial, China, Shanghai', // * [/ip4/175.24.25.61/tcp/44449] dial tcp4 0.0.0.0:37207->175.24.25.61:44449: i/o timeout
  f02403: 'dial, UK, London + Manchester', // * [/ip4/2.58.45.33/tcp/18888] dial tcp4 0.0.0.0:37207->2.58.45.33:18888: i/o timeout  * [/ip4/2.58.47.71/tcp/18888] dial tcp4 0.0.0.0:37207->2.58.47.71:18888: i/o timeout
  f02405: 'dial, China, Shenzhen', // * [/ip4/119.147.213.59/tcp/4123] dial tcp4 119.147.213.59:4123: connect: connection refused  * [/ip4/192.168.231.206/tcp/4123] dial tcp4 0.0.0.0:33373->192.168.231.206:4123: i/o timeout
  f02417: 'dial, China, Zhangjiakou', // * [/ip4/116.132.221.10/tcp/10240] dial tcp4 116.132.221.10:10240: connect: connection refused
  f02420: 'dial, USA', // * [/ip4/47.252.2.93/tcp/34571] dial tcp4 0.0.0.0:37207->47.252.2.93:34571: i/o timeout
  f02422: "dial, China, Xi'an", // carry-over
  f02425: 'dial, China, Shanghai', // * [/ip4/103.78.229.73/tcp/14567] dial tcp4 0.0.0.0:37207->103.78.229.73:14567: i/o timeout
  f02438: 'dial, China, Guangdong', // * [/ip4/47.115.10.99/tcp/14567] dial tcp4 0.0.0.0:33373->47.115.10.99:14567: i/o timeout
  f02492: 'dial, China, Guangdong', // * [/ip4/103.142.248.7/tcp/3347] dial tcp4 0.0.0.0:37207->103.142.248.7:3347: i/o timeout
  f02610: 'dial, Netherlands', // * [/ip4/213.227.129.197/tcp/14567] dial tcp4 0.0.0.0:37207->213.227.129.197:14567: i/o timeout
  f02614: 'dial, Singapore', // * [/ip4/170.33.9.50/tcp/32633] dial tcp4 0.0.0.0:37207->170.33.9.50:32633: i/o timeout
  f02654: 'dial, China, Shanghai', // * [/ip4/114.88.222.181/tcp/43355] dial tcp4 114.88.222.181:43355: connect: connection refused
  f02721: 'dial, USA', // * [/ip4/135.90.74.200/tcp/14567] dial tcp4 0.0.0.0:37207->135.90.74.200:14567: i/o timeout
  f02723: 'dial, China, Tongling', // * [/ip4/60.173.23.17/tcp/23456] dial tcp4 0.0.0.0:37207->60.173.23.17:23456: i/o timeout
  f02725: 'dial, China, Hong Kong', // * [/ip4/101.32.38.57/tcp/18899] dial tcp4 0.0.0.0:37207->101.32.38.57:18899: i/o timeout
  f02726: 'dial, USA, Brooklyn', // * [/ip4/169.62.51.212/tcp/14567] dial tcp4 0.0.0.0:37207->169.62.51.212:14567: i/o timeout
  f02731: 'dial, NR', // * [/ip4/10.30.8.4/tcp/14567] dial tcp4 0.0.0.0:37207->10.30.8.4:14567: i/o timeout
  f02767: 'dial, Germany, Frankfurt', // * [/ip4/18.192.27.227/tcp/37722] dial tcp4 0.0.0.0:37207->18.192.27.227:37722: i/o timeout
  f02838: 'dial, China, Chengdu', // * [/ip4/118.123.228.9/tcp/48633] dial tcp4 0.0.0.0:37207->118.123.228.9:48633: i/o timeout
  f03002: 'dial, China, Chongqing + Singapore', // * [/ip4/101.206.156.202/tcp/18880] dial tcp4 101.206.156.202:18880: connect: connection refused  * [/ip4/8.209.64.163/tcp/18880] dial tcp4 0.0.0.0:37207->8.209.64.163:18880: i/o timeout
  f03144: 'dial, China, Hong Kong', // * [/ip4/103.214.41.38/tcp/23456] dial tcp4 0.0.0.0:37207->103.214.41.38:23456: i/o timeout
  f03176: 'dial, USA, San Mateo', // * [/ip4/47.88.55.220/tcp/15470] dial tcp4 0.0.0.0:37207->47.88.55.220:15470: i/o timeout  * [/ip4/47.88.57.241/tcp/15470] dial tcp4 0.0.0.0:37207->47.88.57.241:15470: i/o timeout
  f03266: 'dial, USA', // * [/ip4/169.63.27.151/tcp/14567] dial tcp4 0.0.0.0:37207->169.63.27.151:14567: i/o timeout
  f03287: 'dial, USA', // * [/ip4/149.81.122.165/tcp/14567] dial tcp4 0.0.0.0:37207->149.81.122.165:14567: i/o timeout
  f03328: 'dial, China, Xinxiang, Golden Miner', // * [/ip4/27.50.142.61/tcp/2347] dial tcp4 27.50.142.61:2347: i/o timeout
  f03347: 'dial, China, Shenzhen', // * [/ip4/103.44.253.59/tcp/33455] dial tcp4 103.44.253.59:33455: connect: connection refused  * [/ip4/103.119.132.105/tcp/33455] dial tcp4 0.0.0.0:33373->103.119.132.105:33455: i/o timeout
  f03358: 'dial, China, Ordos', // * [/ip4/1.183.72.211/tcp/30001] dial tcp4 0.0.0.0:37207->1.183.72.211:30001: i/o timeout
  f03363: 'dial, China, Ordos', // * [/ip4/1.183.72.210/tcp/30003] dial tcp4 1.183.72.210:30003: connect: connection refused
  f03367: 'dial, Singapore', // * [/ip4/8.209.99.1/tcp/14567] dial tcp4 0.0.0.0:37207->8.209.99.1:14567: i/o timeout
  f07824: 'dial, NR', // * [/ip4/10.133.13.113/tcp/32759] dial tcp4 0.0.0.0:37207->10.133.13.113:32759: i/o timeout
  f07969: 'dial, China, Hangzhou', // * [/ip4/121.52.246.48/tcp/5002] dial tcp4 121.52.246.48:5002: connect: connection refused
  f08091: 'dial, NR', // * [/ip4/0.0.0.0/tcp/5472] dial tcp4 0.0.0.0:5472: connect: connection refused
  f08101: 'dial, NR', // * [/ip4/192.168.3.13/tcp/32759] dial tcp4 0.0.0.0:37207->192.168.3.13:32759: i/o timeout
  f08148: 'dial, Hong Kong', // * [/ip4/103.108.182.27/tcp/30031] dial tcp4 0.0.0.0:37207->103.108.182.27:30031: i/o timeout
  f08242: 'dial, USA', // * [/ip4/47.242.56.117/tcp/6789] dial tcp4 47.242.56.117:6789: connect: connection refused
  f08264: 'dial, China, Xianning', // * [/ip4/103.222.191.115/tcp/1161] dial tcp4 0.0.0.0:33373->103.222.191.115:1161: i/o timeout
  f09002: "dial, China, Xi'an", // * [/ip4/113.200.194.196/tcp/32634] dial tcp4 0.0.0.0:37207->113.200.194.196:32634: i/o timeout
  f09037: 'dial, Singapore', // * [/ip4/170.33.12.95/tcp/16666] dial tcp4 0.0.0.0:33373->170.33.12.95:16666: i/o timeout
  f09589: 'dial, China, Changsha', // * [/ip4/175.10.162.119/tcp/5472] dial tcp4 0.0.0.0:37207->175.10.162.119:5472: i/o timeout
  f09652: 'dial, Singapore', // * [/ip4/170.33.9.50/tcp/32632] dial tcp4 0.0.0.0:33373->170.33.9.50:32632: i/o timeout
  f09675: 'dial, USA', // * [/ip4/47.242.94.248/tcp/9999] dial tcp4 0.0.0.0:37207->47.242.94.248:9999: i/o timeout
  f09964: 'dial, Germany, Frankfurt', // * [/ip4/47.91.79.110/tcp/50905] dial tcp4 47.91.79.110:50905: connect: connection refused
  f010048: 'dial, China, Shanghai', // * [/ip4/124.78.146.207/tcp/65500] dial tcp4 0.0.0.0:37207->124.78.146.207:65500: i/o timeout
  f010056: 'dial, Singapore', // * [/ip4/8.209.82.79/tcp/14567] dial tcp4 0.0.0.0:37207->8.209.82.79:14567: i/o timeout
  f010088: 'dial, NR', // * [/ip6/2001:470:b:281::ac15:6402/tcp/1347] dial tcp6 [2001:470:b:281::ac15:6402]:1347: connect: network is unreachable  * [/ip4/50.35.187.157/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNoi8KHMeS8SEp3mDUCHDU8yRFW6SZ1SPmz2NLCSur2ei, but remote key matches 12D3KooWLwLsy4ZurxATu44K3y3ujTzLU7Dj4gXFcy6PiANqysMX
  f010225: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12312] dial tcp4 0.0.0.0:37207->8.209.107.150:12312: i/o timeout
  f010247: 'dial, China, Yantai', // * [/ip4/122.14.201.169/tcp/10240] dial tcp4 122.14.201.169:10240: connect: connection refused
  f010399: 'dial, China, Guangzhou', // * [/ip4/183.2.154.156/tcp/36699] dial tcp4 0.0.0.0:33373->183.2.154.156:36699: i/o timeout
  f010424: 'dial, Australia, Sydney', // * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:37207->43.241.189.214:39438: i/o timeout
  f010491: 'dial, China, Shenzhen', // * [/ip4/116.24.57.90/tcp/8888] dial tcp4 0.0.0.0:33373->116.24.57.90:8888: i/o timeout
  f010501: 'dial, China, Hangzhou, Interstellar Roewe', // * [/ip4/183.134.218.26/tcp/21735] dial tcp4 0.0.0.0:33373->183.134.218.26:21735: i/o timeout
  f010523: 'dial, China, Beijing, Interstellar Roewe', // * [/ip4/123.58.99.210/tcp/21735] dial tcp4 0.0.0.0:33373->123.58.99.210:21735: i/o timeout
  f010538: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12320] dial tcp4 0.0.0.0:37207->8.209.107.150:12320: i/o timeout
  f010616: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12313] dial tcp4 0.0.0.0:37207->8.209.107.150:12313: i/o timeout
  f014311: 'dial, Germany, Frankfurt', // * [/ip4/162.62.55.44/tcp/12309] dial tcp4 162.62.55.44:12309: connect: connection refused
  f014386: 'dial, China, Panzhihua', // * [/ip4/10.10.8.2/tcp/7000] dial tcp4 0.0.0.0:37207->10.10.8.2:7000: i/o timeout  * [/ip4/180.149.130.16/tcp/9845] dial tcp4 0.0.0.0:37207->180.149.130.16:9845: i/o timeout
  f014392: 'dial, USA + Russia, Khabarovsk + Japan, Heiwajima', // * [/ip4/66.42.38.110/tcp/9990] dial tcp4 66.42.38.110:9990: connect: connection refused  * [/ip4/172.247.228.122/tcp/9999] dial tcp4 172.247.228.122:9999: connect: no route to host  * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: connection refused
  f014394: 'dial, China, Suzhou, IPFSCloud', // * [/ip4/222.92.5.147/tcp/42799] dial tcp4 222.92.5.147:42799: connect: connection refused
  f014395: 'dial, China, Dongguan', // * [/ip4/125.93.73.102/tcp/51105] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJyNmap2Z6WWb6xBqDwUpKeFkGHaBHDkMKhrkd6jj6FEY, but remote key matches 12D3KooWB6MM5Fda1RdDyTdJCPMpvHFq6HSJfPV9DeoqGSbfwe1d
  f014415: 'dial, USA', // * [/ip4/13.248.165.152/tcp/33612] failed to negotiate security protocol: EOF
  f014487: 'dial, Singapore', // * [/ip4/47.241.59.58/tcp/45455] dial tcp4 0.0.0.0:37207->47.241.59.58:45455: i/o timeout
  f014522: 'dial, China, Shanghai', // * [/ip4/81.68.170.164/tcp/5474] dial tcp4 81.68.170.164:5474: connect: connection refused
  f014706: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12308] dial tcp4 0.0.0.0:37207->8.209.107.150:12308: i/o timeout
  f014778: 'dial, Germany, Frankfurt', // * [/ip4/162.62.55.44/tcp/12310] dial tcp4 162.62.55.44:12310: connect: connection refused
  f014804: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12314] dial tcp4 0.0.0.0:37207->8.209.107.150:12314: i/o timeout
  f015685: 'dial, China, Shanghai', // * [/ip4/222.64.141.185/tcp/40321] dial tcp4 222.64.141.185:40321: connect: connection refused
  f015731: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12329] dial tcp4 0.0.0.0:37207->8.209.107.150:12329: i/o timeout
  f015848: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12321] dial tcp4 0.0.0.0:37207->8.209.107.150:12321: i/o timeout
  f015919: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12316] dial tcp4 0.0.0.0:37207->8.209.107.150:12316: i/o timeout
  f015922: 'dial, Germany, Frankfurt', // * [/ip4/162.62.55.44/tcp/12317] dial tcp4 162.62.55.44:12317: connect: connection refused
  f015925: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12318] dial tcp4 0.0.0.0:37207->8.209.107.150:12318: i/o timeout
  f015926: 'dial, Germany, Frankfurt', // * [/ip4/162.62.55.44/tcp/12319] dial tcp4 162.62.55.44:12319: connect: connection refused
  f016563: 'dial, China, Deyang + Singapore', // * [/ip4/125.64.78.27/tcp/8001] dial tcp4 125.64.78.27:8001: connect: connection refused  * [/ip4/161.117.186.53/tcp/8001] failed to negotiate security protocol: read tcp4 66.70.191.245:37207->161.117.186.53:8001: read: connection reset by peer  * [/ip4/192.168.109.1/tcp/8001] dial tcp4 0.0.0.0:37207->192.168.109.1:8001: i/o timeout
  f019074: 'dial, NR', // * [/ip4/192.168.2.55/tcp/3000] dial tcp4 0.0.0.0:33373->192.168.2.55:3000: i/o timeout
  f019354: 'dial, Germany, Frankfurt', // carry-over
  f019638: 'dial, China, Ordos', // * [/ip4/1.183.72.210/tcp/30005] dial tcp4 1.183.72.210:30005: connect: connection refused
  f020330: 'dial, Singapore', // * [/ip4/8.130.24.60/tcp/14567] dial tcp4 8.130.24.60:14567: connect: connection refused
  f020331: 'dial, China, Beijing', // * [/ip4/39.101.70.154/tcp/14567] dial tcp4 0.0.0.0:37207->39.101.70.154:14567: i/o timeout
  f020436: 'dial, China, Beijing', // * [/ip4/123.115.222.90/tcp/24002] dial tcp4 123.115.222.90:24002: connect: connection refused
  f020452: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17012] dial tcp4 0.0.0.0:37207->170.33.12.186:17012: i/o timeout
  f020522: 'dial, Singapore', // * [/ip4/8.211.49.16/tcp/14567] dial tcp4 0.0.0.0:37207->8.211.49.16:14567: i/o timeout
  f020604: 'dial, Singapore', // * [/ip4/8.209.106.203/tcp/14567] dial tcp4 0.0.0.0:37207->8.209.106.203:14567: i/o timeout
  f020618: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17011] dial tcp4 0.0.0.0:37207->170.33.12.186:17011: i/o timeout
  f020742: 'dial, China, Shanghai', // * [/ip4/175.24.25.61/tcp/53456] dial tcp4 0.0.0.0:37207->175.24.25.61:53456: i/o timeout
  f021461: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17361] dial tcp4 0.0.0.0:37207->170.33.12.186:17361: i/o timeout
  f021479: 'dial, NR', // * [/ip4/172.18.130.45/tcp/10241] dial tcp4 0.0.0.0:33373->172.18.130.45:10241: i/o timeout
  f021525: 'dial, China, Guangdong', // * [/ip4/121.201.41.87/tcp/14567] dial tcp4 0.0.0.0:33373->121.201.41.87:14567: i/o timeout
  f021532: 'dial, China, Shanghai', // * [/ip4/121.46.237.2/tcp/23456] dial tcp4 0.0.0.0:37207->121.46.237.2:23456: i/o timeout
  f021547: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17329] dial tcp4 0.0.0.0:37207->170.33.12.186:17329: i/o timeout
  f022111: 'dial, China, Quanzhou', // * [/ip4/112.47.13.98/tcp/8081] dial tcp4 0.0.0.0:37207->112.47.13.98:8081: i/o timeout
  f022227: 'dial, China, Jiangsu', // * [/ip4/112.30.158.226/tcp/10240] dial tcp4 112.30.158.226:10240: connect: connection refused
  f022687: 'dial, China, Chengdu', // * [/ip4/182.131.4.194/tcp/10080] dial tcp4 182.131.4.194:10080: connect: connection refused
  f022853: 'dial, China, Fuzhou', // * [/ip4/150.242.97.226/tcp/11105] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRrw3MpPrr5gaVyv9hHAyLosb76osgrGAKuByXycihWEY, but remote key matches 12D3KooWMarcqTkhZsmPHAZmZvaGNh6WC16hEfVhA6fvyJVe5HVB
  f023001: 'dial, China, Changsha', // * [/ip4/120.24.145.114/tcp/7001] dial tcp4 120.24.145.114:7001: connect: connection refused
  f023013: 'dial, NR', // * [/ip4/127.0.0.1/tcp/42325] dial tcp4 127.0.0.1:42325: connect: connection refused  * [/ip6/::1/tcp/45369] dial tcp6 [::1]:45369: connect: connection refused  * [/ip4/183.61.251.226/tcp/1031] dial tcp4 183.61.251.226:1031: connect: connection refused  * [/ip4/183.61.251.232/tcp/42325] failed to negotiate security protocol: read tcp4 66.70.191.245:37207->183.61.251.232:42325: read: connection reset by peer
  f023200: 'dial, China, Shanghai', // * [/ip4/175.24.25.61/tcp/13457] dial tcp4 0.0.0.0:37207->175.24.25.61:13457: i/o timeout
  f023205: 'dial, Singapore', // * [/ip4/8.130.25.103/tcp/14567] dial tcp4 0.0.0.0:33373->8.130.25.103:14567: i/o timeout
  f023219: 'dial, China, Beijing + Zhangjiakou', // carry-over
  f023462: 'dial, China, Chongqing', // * [/ip4/101.206.156.202/tcp/23018] dial tcp4 101.206.156.202:23018: connect: connection refused
  f023530: 'dial, China, Shanghai', // * [/ip4/203.107.45.86/tcp/10241] failed to negotiate security protocol: read tcp4 66.70.191.245:33373->203.107.45.86:10241: read: connection reset by peer  * [/ip4/172.17.27.107/tcp/10241] dial tcp4 0.0.0.0:33373->172.17.27.107:10241: i/o timeout
  f023561: 'dial, China, Shenzhen', // * [/ip4/103.44.247.32/tcp/40573] dial tcp4 0.0.0.0:37207->103.44.247.32:40573: i/o timeout
  f023876: 'dial, China, Fuzhou', // * [/ip4/220.176.125.51/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAfpdzwcpqchJrRhJMY9g8i8Dr1VMiiSNB7YTfMy2rrE4, but remote key matches 12D3KooWRKoJ2VrPziXJ9KiC3MA63qG1Hccke786PQdbtbeESDTv
  f023985: 'dial, China, Chongqing', // * [/ip4/101.206.156.202/tcp/23152] dial tcp4 101.206.156.202:23152: connect: connection refused
  f024066: 'dial, China, Chengdu', // * [/ip4/182.131.4.197/tcp/10080] dial tcp4 182.131.4.197:10080: i/o timeout
  f024089: 'dial, NR', // * [/ip4/10.11.4.210/tcp/1234] dial tcp4 0.0.0.0:37207->10.11.4.210:1234: i/o timeout
  f024137: 'dial, Singapore', // * [/ip4/8.130.25.208/tcp/14567] dial tcp4 0.0.0.0:37207->8.130.25.208:14567: i/o timeout
  f024182: 'dial, China, Hong Kong', // * [/ip4/14.136.246.135/tcp/46717] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQFqPz3vvYGGxB259qZfg3qzoKEnafG8DbfMKUHEUQ26z, but remote key matches 12D3KooWHuQtiCKJykJscPMrNiXaguBWKuhBfKDfGP6ieR6SgwdF
  f025002: 'dial, NR', // * [/ip4/10.30.8.211/tcp/14567] dial tcp4 0.0.0.0:33373->10.30.8.211:14567: i/o timeout
  f025007: 'dial, Korea, Gyeonggi-do, PINBYTES-eCUBE', // * [/ip4/222.112.183.197/tcp/24001] dial tcp4 0.0.0.0:33373->222.112.183.197:24001: i/o timeout
  f025019: 'dial, China, Taiwan, Hsinchu', // * [/ip4/140.113.194.250/tcp/24002] dial tcp4 0.0.0.0:33373->140.113.194.250:24002: i/o timeout
  f029416: 'dial, NR', // * [/ip4/0.0.0.0/tcp/1024] dial tcp4 0.0.0.0:1024: connect: connection refused
  f032824: 'dial, USA, Cedar Park', // * [/ip4/104.54.236.61/tcp/24001] dial tcp4 0.0.0.0:37207->104.54.236.61:24001: i/o timeout
  f033025: 'dial, Korea, Daegu', // * [/ip4/59.23.202.120/tcp/23236] dial tcp4 59.23.202.120:23236: connect: connection refused
  f034544: 'dial, NR', // * [/ip4/183.131.58.134/tcp/14567] dial tcp4 0.0.0.0:33373->183.131.58.134:14567: i/o timeout
  f034545: 'dial, NR', // * [/ip4/183.131.58.102/tcp/14567] dial tcp4 0.0.0.0:33373->183.131.58.102:14567: i/o timeout
  f034548: 'dial, NR', // * [/ip4/183.131.58.70/tcp/14567] dial tcp4 0.0.0.0:33373->183.131.58.70:14567: i/o timeout
  f034592: 'dial, NR', // * [/ip4/119.147.213.217/tcp/45137] dial tcp4 0.0.0.0:33373->119.147.213.217:45137: i/o timeout
  f034701: 'dial, China, Shenzhen', // * [/ip4/103.44.247.136/tcp/51105] dial tcp4 0.0.0.0:33373->103.44.247.136:51105: i/o timeout
  f043929: 'dial, NR', // * [/ip4/120.232.96.38/tcp/24001] dial tcp4 120.232.96.38:24001: connect: connection refused
  f045505: 'dial, China, Ordos', // * [/ip4/1.183.72.226/tcp/12700] dial tcp4 0.0.0.0:37207->1.183.72.226:12700: i/o timeout
  f048172: 'dial, China, Suzhou', // * [/ip4/222.92.5.147/tcp/42899] dial tcp4 222.92.5.147:42899: connect: connection refused
  f048192: 'dial, China, Suzhou', // * [/ip4/222.92.5.147/tcp/42999] dial tcp4 222.92.5.147:42999: connect: connection refused
  f053229: 'dial, NR', // * [/ip4/172.18.112.203/tcp/10241] dial tcp4 0.0.0.0:33373->172.18.112.203:10241: i/o timeout
  f054499: 'dial, NR', // * [/ip4/0.0.0.0/tcp/5472] dial tcp4 0.0.0.0:5472: connect: connection refused
  f055123: 'dial, Korea, Busan', // * [/ip4/119.199.251.92/tcp/24001] dial tcp4 119.199.251.92:24001: i/o timeout
  f055522: 'dial, USA', // * [/ip4/207.2.201.158/tcp/24002] dial tcp4 0.0.0.0:33373->207.2.201.158:24002: i/o timeout
  f059740: 'dial, Germany, Bottrop', // * [/ip4/156.67.191.194/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWR2iY2SFgjHM45NkQEJMmAathsCrgHWADbbCnPzsuS2bY, but remote key matches 12D3KooWR3EjX6z4ZkNRAbnF442tu5aCeLPQj62Xn7qCQ2KzPKwS
  f059788: 'dial, China, Zhanjiang', // * [/ip4/183.2.149.76/tcp/33669] dial tcp4 0.0.0.0:37207->183.2.149.76:33669: i/o timeout
  f061959: 'dial, NR', // * [/ip4/172.18.113.213/tcp/10241] dial tcp4 0.0.0.0:33373->172.18.113.213:10241: i/o timeout
  f062931: 'dial, NR', // * [/ip4/115.231.84.133/tcp/14567] dial tcp4 0.0.0.0:33373->115.231.84.133:14567: i/o timeout
  f063628: 'dial, NR', // * [/ip4/127.0.0.1/tcp/40057] dial tcp4 127.0.0.1:40057: connect: connection refused
  f066102: 'dial, NR', // * [/ip4/172.18.112.93/tcp/10241] dial tcp4 0.0.0.0:33373->172.18.112.93:10241: i/o timeout
  f066259: 'dial, NR', // * [/ip4/172.19.101.33/tcp/10241] dial tcp4 0.0.0.0:33373->172.19.101.33:10241: i/o timeout
  f068096: 'dial, China, Sichuan', // * [/ip4/222.213.23.200/tcp/38999] dial tcp4 222.213.23.200:38999: connect: connection refused
  f069391: 'dial, NR', // * [/ip4/192.168.1.10/tcp/32759] dial tcp4 0.0.0.0:37207->192.168.1.10:32759: i/o timeout
  f070044: 'dial, China', // * [/ip4/47.57.185.52/tcp/12600] dial tcp4 0.0.0.0:37207->47.57.185.52:12600: i/o timeout
  f079285: 'dial, NR', // * [/ip4/172.22.20.109/tcp/10241] dial tcp4 0.0.0.0:33373->172.22.20.109:10241: i/o timeout
  f079426: 'dial, China, Shandong', // * [/ip4/106.74.7.6/tcp/32759] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQBg2oErr3Mx2fky471oxpmQmVggaDsGGVNqFagL27HeY, but remote key matches 12D3KooWQtkXUECWx5MBUugczDBoDq6DJcse1m56FHLmhRkGLyHK
  f081078: 'dial, Korea, Busan', // * [/ip4/220.84.94.10/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMW8ZvKgprKTTmt8cuoC5YYZeJtCn6iBuHWLg6J8rGUts, but remote key matches 12D3KooWLe7nwrhYUwgTjy7B92xgeuVZFVzgXHuM4wGzmcYg6asG
  f082958: 'dial, NR', // * [/ip4/0.0.0.0/tcp/42547] dial tcp4 0.0.0.0:42547: connect: connection refused
  f087965: 'dial, China, Suzhou', // * [/ip4/58.211.213.210/tcp/2251] dial tcp4 58.211.213.210:2251: connect: connection refused
  f088125: 'dial, NR', // * [/ip4/172.22.22.101/tcp/10241] dial tcp4 0.0.0.0:37207->172.22.22.101:10241: i/o timeout
  f088400: 'dial, NR', // * [/ip4/172.22.22.102/tcp/10241] dial tcp4 0.0.0.0:37207->172.22.22.102:10241: i/o timeout
  f089173: 'dial, NR', // * [/ip4/172.19.108.155/tcp/10241] dial tcp4 0.0.0.0:37207->172.19.108.155:10241: i/o timeout
  f089228: 'dial, NR', // * [/ip4/172.18.114.50/tcp/10241] dial tcp4 0.0.0.0:33373->172.18.114.50:10241: i/o timeout
  f089358: 'dial, NR', // * [/ip4/172.22.7.106/tcp/10241] dial tcp4 0.0.0.0:37207->172.22.7.106:10241: i/o timeout
  f089380: 'dial, NR', // * [/ip4/172.19.101.174/tcp/10241] dial tcp4 0.0.0.0:37207->172.19.101.174:10241: i/o timeout
  f089767: 'dial, USA, Bowie', // * [/ip4/129.168.0.1/tcp/912] dial tcp4 0.0.0.0:37207->129.168.0.1:912: i/o timeout
  f090893: 'dial, USA', // * [/ip4/6.143.143.121/tcp/912] dial tcp4 0.0.0.0:37207->6.143.143.121:912: i/o timeout
  f094765: 'dial, NR', // * [/ip4/218.68.85.213/tcp/12350] dial tcp4 218.68.85.213:12350: connect: connection refused
  f095382: 'dial, China, Dongguan', // * [/ip4/125.93.73.102/tcp/2345] dial tcp4 125.93.73.102:2345: connect: connection refused
  f096133: 'dial, China, Changsha + Dazhou', // * [/ip4/175.6.66.78/tcp/14913] dial tcp4 0.0.0.0:37207->175.6.66.78:14913: i/o timeout  * [/ip4/175.6.68.154/tcp/14913] dial tcp4 0.0.0.0:37207->175.6.68.154:14913: i/o timeout
  f096173: 'dial, Korea, Gangnam-gu', // * [/ip4/61.78.81.239/tcp/11111] dial tcp4 61.78.81.239:11111: connect: connection refused  * [/ip4/61.78.81.239/tcp/55555] dial tcp4 61.78.81.239:55555: connect: connection refused  * [/ip4/61.78.81.239/tcp/12345] dial tcp4 61.78.81.239:12345: connect: connection refused  * [/ip4/61.78.81.239/tcp/22222] dial tcp4 61.78.81.239:22222: connect: connection refused  * [/ip4/61.78.81.239/tcp/33333] dial tcp4 61.78.81.239:33333: connect: connection refused  * [/ip4/61.78.81.239/tcp/8800] dial tcp4 61.78.81.239:8800: connect: connection refused  * [/ip4/61.78.81.239/tcp/23456] dial tcp4 61.78.81.239:23456: connect: connection refused  * [/ip4/61.78.81.239/tcp/44444] dial tcp4 61.78.81.239:44444: connect: connection refused
  f097182: 'dial, China, Chengdu', // * [/ip4/182.131.4.195/tcp/32759] dial tcp4 182.131.4.195:32759: connect: connection refused
  f097687: 'dial, China, Yangzhou', // * [/ip4/61.147.81.133/tcp/16017] dial tcp4 61.147.81.133:16017: connect: connection refused
  f099949: 'dial, China, Chengdu', // * [/ip4/182.131.4.195/tcp/32760] dial tcp4 182.131.4.195:32760: connect: connection refused
  f0101403: 'dial, China, Chengdu', // * [/ip4/182.131.4.195/tcp/32761] dial tcp4 182.131.4.195:32761: connect: connection refused
  f0103396: 'dial, China, Hangzhou', // * [/ip4/60.190.243.138/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLCnguS1TqxnrbCmDoAbJckjLEvo9xko2xvqmojc1ezxE, but remote key matches 12D3KooWJ9KC3jmmLpSk4pdrMA5Bn3VgCpvJs7QGQfXWGTVmTM2M
  f0106363: 'dial, NR', // * [/ip4/127.0.0.1/tcp/24001] dial tcp4 127.0.0.1:24001: connect: connection refused
  f0107127: 'dial, USA, Daytona Beach', // * [/ip4/172.3.161.97/tcp/24001] dial tcp4 172.3.161.97:24001: connect: connection refused
  f0109743: 'dial, China, Yangzhou', // * [/ip4/58.220.66.137/tcp/10000] dial tcp4 58.220.66.137:10000: connect: connection refused
  f0111499: 'dial, China, Chengdu', // * [/ip4/182.131.4.195/tcp/32762] dial tcp4 182.131.4.195:32762: connect: connection refused
  f0111584: 'dial, NR', // * [/ip4/192.168.3.14/tcp/32759] dial tcp4 0.0.0.0:37207->192.168.3.14:32759: i/o timeout
  f0112027: 'dial, France', // * [/ip4/109.238.12.125/tcp/24001] dial tcp4 0.0.0.0:37207->109.238.12.125:24001: i/o timeout
  f0113008: 'dial, China, Hong Kong', // * [/ip4/18.166.250.203/tcp/24001] dial tcp4 0.0.0.0:33373->18.166.250.203:24001: i/o timeout
  f0114153: 'dial, China, Changsha + Dazhou', // * [/ip4/175.6.68.154/tcp/24913] dial tcp4 0.0.0.0:37207->175.6.68.154:24913: i/o timeout  * [/ip4/175.6.66.78/tcp/24913] dial tcp4 0.0.0.0:37207->175.6.66.78:24913: i/o timeout
  f0114338: 'dial, China, Maoming', // * [/ip4/61.143.232.26/tcp/12888] dial tcp4 61.143.232.26:12888: connect: connection refused
  f0114867: 'dial, NR', // * [/ip4/175.6.66.78/tcp/64913] dial tcp4 0.0.0.0:37207->175.6.66.78:64913: i/o timeout
  f0114868: 'dial, NR', // * [/ip4/175.6.66.78/tcp/34913] dial tcp4 0.0.0.0:37207->175.6.66.78:34913: i/o timeout
  f0115990: 'dial, Korea, Gangnam-gu', // * [/ip4/61.74.222.134/tcp/36849] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCH9QfkYAUcen5u2UsQrsBgRr6SXF1DzoxmejKC3MpMur, but remote key matches 12D3KooWFbbCe63pSrR7zwsx431Y51pjAc4oKTNdjCmAwwHKGjBY
  f0116211: 'dial, China, Weifang', // * [/ip4/219.83.163.148/tcp/50666] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWF79gTgqr7VyLQu74NgBvCTuvDfp2CxGK8hxn2EYKzH6L, but remote key matches 12D3KooWRpggHrYWrczv3N2h5AAtdVFiX5zsW1duYpnfc1C8hjLa
  f0130961: 'dial, Korea, Seongnam-si', // * [/ip4/121.165.242.197/tcp/24001] dial tcp4 121.165.242.197:24001: i/o timeout
  f0133957: 'dial, NR', // * [/ip4/172.19.108.156/tcp/10241] dial tcp4 0.0.0.0:37207->172.19.108.156:10241: i/o timeout
  f0134006: 'dial, NR', // * [/ip4/10.140.8.12/tcp/32759] dial tcp4 0.0.0.0:37207->10.140.8.12:32759: i/o timeout
  f0141446: 'dial, China, Suzhou', // * [/ip4/61.155.145.103/tcp/2347] dial tcp4 61.155.145.103:2347: connect: connection refused  * [/ip4/172.18.6.127/tcp/2347] dial tcp4 0.0.0.0:37207->172.18.6.127:2347: i/o timeout
  f0143162: 'dial, NR', // * [/ip4/175.6.68.154/tcp/39913] dial tcp4 0.0.0.0:37207->175.6.68.154:39913: i/o timeout
  f0143858: 'dial, USA, Calistoga', // * [/ip4/72.52.116.228/tcp/12350] dial tcp4 72.52.116.228:12350: i/o timeout
  f0144724: 'dial, USA, Los Angeles', // * [/ip4/67.201.8.203/tcp/24001] dial tcp4 67.201.8.203:24001: connect: connection refused
  f0152563: 'dial, China, Chongqing', // * [/ip4/58.43.1.82/tcp/24001] dial tcp4 0.0.0.0:37207->58.43.1.82:24001: i/o timeout
  f0155258: 'dial, NR', // * [/ip4/127.0.0.1/tcp/34345] dial tcp4 127.0.0.1:34345: connect: connection refused  * [/ip6/::1/tcp/33841] dial tcp6 [::1]:33841: connect: connection refused  * [/ip4/117.186.232.72/tcp/34345] dial tcp4 0.0.0.0:37207->117.186.232.72:34345: i/o timeout  * [/ip4/192.168.1.20/tcp/34345] dial tcp4 0.0.0.0:37207->192.168.1.20:34345: i/o timeout
  f0155983: 'dial, Japan', // * [/ip4/202.149.23.10/tcp/5472] dial tcp4 0.0.0.0:37207->202.149.23.10:5472: i/o timeout
  f0157429: 'dial, Korea, Bucheon-si', // * [/ip4/119.197.20.18/tcp/24001] dial tcp4 119.197.20.18:24001: connect: connection refused
  f0157513: 'dial, Korea, Bucheon-si', // * [/ip4/119.197.20.51/tcp/24001] dial tcp4 119.197.20.51:24001: connect: connection refused
  f0159517: 'dial, NR', // * [/ip4/127.0.0.1/tcp/36417] dial tcp4 127.0.0.1:36417: connect: connection refused  * [/ip6/::1/tcp/42119] dial tcp6 [::1]:42119: connect: connection refused  * [/ip4/183.221.217.82/tcp/2118] dial tcp4 183.221.217.82:2118: connect: connection refused  * [/ip4/183.221.217.82/tcp/2116] dial tcp4 183.221.217.82:2116: connect: connection refused  * [/ip4/172.34.0.13/tcp/36417] dial tcp4 0.0.0.0:37207->172.34.0.13:36417: i/o timeout
  f0159632: 'dial, NR', // * [/ip4/10.140.8.32/tcp/32759] dial tcp4 0.0.0.0:37207->10.140.8.32:32759: i/o timeout
  f0159883: 'dial, NR', // * [/ip4/10.133.14.57/tcp/32759] dial tcp4 0.0.0.0:37207->10.133.14.57:32759: i/o timeout

  // XNR (Not routable)

  f01231: 'xnr, Singapore',
  f01314: 'xnr, NR',
  f02388: 'xnr, Netherlands, Amersfoort, Kroketje',
  f02416: 'xnr, China, Guangdong, 星际无限',
  f02769: 'xnr, NR',
  f02770: 'xnr, China, Hong Kong',
  f02775: 'xnr, China, Hong Kong',
  f02777: 'xnr, NR',
  f02778: 'xnr, NR',
  f02779: 'xnr, NR',
  f07749: 'xnr, NR',
  f010202: 'xnr, Singapore',
  f010558: 'xnr, NR',
  f014335: 'xnr, NR',
  f014686: 'xnr, Singapore',
  f014699: 'xnr, NR',
  f015877: 'xnr, China, Jiaxing + USA',
  f015885: 'xnr, China, Jiaxing',
  f015932: 'xnr, NR',
  f018538: 'xnr, China, Huzhou',
  f020398: 'xnr, China, Zhangjiakou',
  f020957: 'xnr, NR',
  f021695: 'xnr, USA',
  f021704: 'xnr, NR',
  f021710: 'xnr, China, Shijiazhuang',
  f022030: 'xnr, NR',
  f022038: 'xnr, NR',
  f022093: 'xnr, NR',
  f022336: 'xnr, NR',
  f022338: 'xnr, NR',
  f022361: 'xnr, NR',
  f022373: 'xnr, Singapore',
  f022374: 'xnr, NR',
  f022804: 'xnr, NR',
  f022922: 'xnr, China, Shenzhen, CAAP-MEG',
  f023499: 'xnr, NR',
  f023626: 'xnr, NR',
  f023627: 'xnr, China, Zhongwei',
  f023651: 'xnr, NR',
  f023678: 'xnr, China, Jiaxing',
  f023882: 'xnr, NR',
  f023984: 'xnr, NR',
  f024483: 'xnr, NR',
  f024563: 'xnr, NR',
  f024802: 'xnr, NR',
  f024894: 'xnr, NR',
  f024895: 'xnr, undefined',
  f024972: 'xnr, undefined',
  f025005: 'xnr, NR',
  f025044: 'xnr, undefined',
  f029585: 'xnr, NR',
  f029649: 'xnr, China, Beijing',
  f030249: 'xnr, NR',
  f030272: 'xnr, undefined',
  f030331: 'xnr, NR',
  f030408: 'xnr, NR',
  f030509: 'xnr, undefined',
  f030510: 'xnr, undefined',
  f030511: 'xnr, undefined',
  f030649: 'xnr, NR',
  f032833: 'xnr, NR',
  f032850: 'xnr, NR',
  f033130: 'xnr, NR',
  f033209: 'xnr, NR',
  f033384: 'xnr, NR',
  f033399: 'xnr, NR',
  f033456: 'xnr, NR',
  f033462: 'xnr, NR',
  f033463: 'xnr, NR',
  f033475: 'xnr, NR',
  f033517: 'xnr, China, Changsha',
  f034350: 'xnr, NR',
  f034566: 'xnr, NR',
  f034581: 'xnr, NR',
  f034658: 'xnr, NR',
  f034707: 'xnr, NR',
  f034710: 'xnr, NR',
  f035160: 'xnr, NR',
  f035161: 'xnr, NR',
  f035364: 'xnr, NR',
  f039992: 'xnr, NR',
  f040665: 'xnr, NR',
  f042855: 'xnr, NR',
  f043376: 'xnr, Korea, Incheon',
  f044315: 'xnr, NR',
  f045743: 'xnr, NR',
  f048975: 'xnr, NR',
  f048986: 'xnr, NR',
  f049911: 'xnr, China, Yunfu',
  f053173: 'xnr, NR',
  f053446: 'xnr, NR',
  f054120: 'xnr, NR',
  f054267: 'xnr, NR',
  f054412: 'xnr, NR',
  f054414: 'xnr, NR',
  f054417: 'xnr, NR',
  f054418: 'xnr, NR',
  f054420: 'xnr, NR',
  f054422: 'xnr, NR',
  f054464: 'xnr, NR',
  f054526: 'xnr, NR',
  f055446: 'xnr, NR',
  f056227: 'xnr, NR',
  f057070: 'xnr, NR',
  f057618: 'xnr, NR',
  f057683: 'xnr, NR',
  f058349: 'xnr, NR',
  f059813: 'xnr, NR',
  f060693: 'xnr, NR',
  f060754: 'xnr, NR',
  f060805: 'xnr, NR',
  f060975: 'xnr, NR',
  f061051: 'xnr, NR',
  f061170: 'xnr, NR',
  f061174: 'xnr, NR',
  f061407: 'xnr, China, Shenzhen',
  f061503: 'xnr, NR',
  f062475: 'xnr, NR',
  f062619: 'xnr, NR',
  f063996: 'xnr, China, Sichuan',
  f064855: 'xnr, NR',
  f064908: 'xnr, NR',
  f065113: 'xnr, NR',
  f065141: 'xnr, NR',
  f065174: 'xnr, NR',
  f065250: 'xnr, NR',
  f065266: 'xnr, China, Hefei',
  f065391: 'xnr, NR',
  f065578: 'xnr, NR',
  f065610: 'xnr, NR',
  f065670: 'xnr, NR',
  f065686: 'xnr, NR',
  f065689: 'xnr, NR',
  f065718: 'xnr, China, Taiwan, Hsinchu',
  f065881: 'xnr, NR',
  f065941: 'xnr, NR',
  f066210: 'xnr, NR',
  f066302: 'xnr, NR',
  f066476: 'xnr, NR',
  f066563: 'xnr, NR',
  f067170: 'xnr, NR',
  f067375: 'xnr, NR',
  f067598: 'xnr, NR',
  f068556: 'xnr, NR',
  f068809: 'xnr, NR',
  f069448: 'xnr, NR',
  f070045: 'xnr, NR',
  f070730: 'xnr, NR',
  f070803: 'xnr, NR',
  f070932: 'xnr, NR',
  f071287: 'xnr, NR',
  f073196: 'xnr, NR',
  f073448: 'xnr, NR',
  f073525: 'xnr, NR',
  f073844: 'xnr, NR',
  f073888: 'xnr, NR',
  f073904: 'xnr, NR',
  f077761: 'xnr, NR',
  f078465: 'xnr, NR',
  f079092: 'xnr, NR',
  f079425: 'xnr, NR',
  f079719: 'xnr, NR',
  f080628: 'xnr, NR',
  f080868: 'xnr, NR',
  f081222: 'xnr, China, Changzhou',
  f081969: 'xnr, NR',
  f081987: 'xnr, NR',
  f082000: 'xnr, NR',
  f082095: 'xnr, NR',
  f082635: 'xnr, NR',
  f082730: 'xnr, NR',
  f083419: 'xnr, NR',
  f083474: 'xnr, NR',
  f083542: 'xnr, NR',
  f083983: 'xnr, NR',
  f084135: 'xnr, NR',
  f084155: 'xnr, NR',
  f084419: 'xnr, NR',
  f084907: 'xnr, NR',
  f085435: 'xnr, NR',
  f085437: 'xnr, NR',
  f085486: 'xnr, NR',
  f086028: 'xnr, NR',
  f086204: 'xnr, NR',
  f086222: 'xnr, NR',
  f086240: 'xnr, NR',
  f086366: 'xnr, NR',
  f086381: 'xnr, NR',
  f086442: 'xnr, NR',
  f086572: 'xnr, NR',
  f086988: 'xnr, NR',
  f087096: 'xnr, NR',
  f087868: 'xnr, NR',
  f087879: 'xnr, NR',
  f087890: 'xnr, NR',
  f087899: 'xnr, NR',
  f087999: 'xnr, NR',
  f088002: 'xnr, NR',
  f088171: 'xnr, NR',
  f088290: 'xnr, NR',
  f089167: 'xnr, NR',
  f089168: 'xnr, NR',
  f089819: 'xnr, NR',
  f089920: 'xnr, NR',
  f090481: 'xnr, NR',
  f090484: 'xnr, NR',
  f090492: 'xnr, NR',
  f090808: 'xnr, NR',
  f091143: 'xnr, NR',
  f091243: 'xnr, NR',
  f091395: 'xnr, NR',
  f091798: 'xnr, NR',
  f091959: 'xnr, NR',
  f091999: 'xnr, NR',
  f092066: 'xnr, NR',
  f092157: 'xnr, NR',
  f092228: 'xnr, NR',
  f092887: 'xnr, NR',
  f092971: 'xnr, China, Chongqing',
  f093701: 'xnr, NR',
  f093907: 'xnr, NR',
  f094003: 'xnr, NR',
  f094625: 'xnr, NR',
  f094764: 'xnr, NR',
  f094847: 'xnr, NR',
  f095334: 'xnr, NR',
  f095970: 'xnr, NR',
  f095998: 'xnr, NR',
  f096064: 'xnr, NR',
  f096072: 'xnr, NR',
  f096077: 'xnr, NR',
  f096087: 'xnr, NR',
  f096172: 'xnr, NR',
  f096824: 'xnr, NR',
  f096920: 'xnr, NR',
  f097126: 'xnr, NR',
  f097219: 'xnr, NR',
  f097370: 'xnr, NR',
  f097403: 'xnr, NR',
  f097432: 'xnr, NR',
  f097569: 'xnr, NR',
  f097658: 'xnr, NR',
  f097914: 'xnr, NR',
  f097981: 'xnr, NR',
  f098743: 'xnr, NR',
  f099082: 'xnr, NR',
  f099132: 'xnr, NR',
  f099247: 'xnr, NR',
  f099369: 'xnr, NR',
  f0100033: 'xnr, NR',
  f0100034: 'xnr, NR',
  f0100786: 'xnr, NR',
  f0101016: 'xnr, NR',
  f0101017: 'xnr, NR',
  f0101019: 'xnr, NR',
  f0101133: 'xnr, NR',
  f0101570: 'xnr, NR',
  f0101611: 'xnr, NR',
  f0102187: 'xnr, NR',
  f0103162: 'xnr, NR',
  f0103282: 'xnr, NR',
  f0103485: 'xnr, NR',
  f0103665: 'xnr, NR',
  f0103704: 'xnr, NR',
  f0103710: 'xnr, NR',
  f0104001: 'xnr, NR',
  f0104103: 'xnr, NR',
  f0104398: 'xnr, NR',
  f0104654: 'xnr, NR',
  f0104888: 'xnr, NR',
  f0105354: 'xnr, NR',
  f0106090: 'xnr, NR',
  f0106438: 'xnr, NR',
  f0106901: 'xnr, NR',
  f0107002: 'xnr, NR',
  f0107053: 'xnr, NR',
  f0107091: 'xnr, NR',
  f0107322: 'xnr, NR',
  f0107543: 'xnr, NR',
  f0107656: 'xnr, NR',
  f0107797: 'xnr, NR',
  f0107903: 'xnr, NR',
  f0107995: 'xnr, NR',
  f0108199: 'xnr, NR',
  f0108672: 'xnr, NR',
  f0109309: 'xnr, NR',
  f0109349: 'xnr, NR',
  f0109606: 'xnr, NR',
  f0109903: 'xnr, NR',
  f0110110: 'xnr, NR',
  f0110248: 'xnr, NR',
  f0110261: 'xnr, NR',
  f0110289: 'xnr, NR',
  f0110695: 'xnr, NR',
  f0110696: 'xnr, NR',
  f0110808: 'xnr, NR',
  f0110944: 'xnr, NR',
  f0110996: 'xnr, NR',
  f0111007: 'xnr, NR',
  f0111384: 'xnr, NR',
  f0111467: 'xnr, NR',
  f0111469: 'xnr, NR',
  f0112593: 'xnr, NR',
  f0112667: 'xnr, NR',
  f0112679: 'xnr, NR',
  f0112680: 'xnr, NR',
  f0112762: 'xnr, NR',
  f0112781: 'xnr, NR',
  f0112887: 'xnr, NR',
  f0113659: 'xnr, NR',
  f0113735: 'xnr, NR',
  f0113754: 'xnr, NR',
  f0113777: 'xnr, NR',
  f0114118: 'xnr, NR',
  f0114333: 'xnr, NR',
  f0114350: 'xnr, NR',
  f0115001: 'xnr, NR',
  f0115117: 'xnr, NR',
  f0117211: 'xnr, NR',
  f0117318: 'xnr, NR',
  f0117358: 'xnr, NR',
  f0117405: 'xnr, NR',
  f0117416: 'xnr, NR',
  f0117434: 'xnr, NR',
  f0117450: 'xnr, NR',
  f0117541: 'xnr, NR',
  f0117542: 'xnr, NR',
  f0117543: 'xnr, NR',
  f0117556: 'xnr, NR',
  f0117565: 'xnr, NR',
  f0118028: 'xnr, NR',
  f0118167: 'xnr, NR',
  f0118641: 'xnr, NR',
  f0118799: 'xnr, NR',
  f0118976: 'xnr, NR',
  f0119146: 'xnr, NR',
  f0119545: 'xnr, NR',
  f0119633: 'xnr, NR',
  f0119828: 'xnr, NR',
  f0119976: 'xnr, NR',
  f0119997: 'xnr, NR',
  f0120057: 'xnr, NR',
  f0120702: 'xnr, NR',
  f0120747: 'xnr, NR',
  f0121584: 'xnr, NR',
  f0121718: 'xnr, NR',
  f0121771: 'xnr, NR',
  f0121810: 'xnr, NR',
  f0122215: 'xnr, NR',
  f0122382: 'xnr, NR',
  f0122496: 'xnr, NR',
  f0122533: 'xnr, NR',
  f0122940: 'xnr, NR',
  f0123245: 'xnr, NR',
  f0123261: 'xnr, NR',
  f0123346: 'xnr, NR',
  f0123522: 'xnr, NR',
  f0123535: 'xnr, NR',
  f0124126: 'xnr, NR',
  f0124158: 'xnr, NR',
  f0124696: 'xnr, NR',
  f0124904: 'xnr, NR',
  f0124923: 'xnr, NR',
  f0124944: 'xnr, NR',
  f0125488: 'xnr, NR',
  f0126097: 'xnr, NR',
  f0126376: 'xnr, NR',
  f0126661: 'xnr, NR',
  f0126698: 'xnr, NR',
  f0126702: 'xnr, NR',
  f0127378: 'xnr, NR',
  f0127382: 'xnr, NR',
  f0127569: 'xnr, NR',
  f0127595: 'xnr, NR',
  f0127612: 'xnr, NR',
  f0127640: 'xnr, NR',
  f0127721: 'xnr, NR',
  f0127735: 'xnr, NR',
  f0128011: 'xnr, NR',
  f0128381: 'xnr, NR',
  f0128499: 'xnr, NR',
  f0128559: 'xnr, NR',
  f0128761: 'xnr, NR',
  f0128788: 'xnr, NR',
  f0128815: 'xnr, NR',
  f0128931: 'xnr, NR',
  f0129226: 'xnr, NR',
  f0129403: 'xnr, NR',
  f0129422: 'xnr, NR',
  f0129750: 'xnr, NR',
  f0130094: 'xnr, NR',
  f0130134: 'xnr, NR',
  f0130556: 'xnr, NR',
  f0130639: 'xnr, NR',
  f0130686: 'xnr, NR',
  f0130727: 'xnr, NR',
  f0130791: 'xnr, NR',
  f0130868: 'xnr, NR',
  f0130884: 'xnr, NR',
  f0130906: 'xnr, NR',
  f0130912: 'xnr, NR',
  f0131509: 'xnr, NR',
  f0131767: 'xnr, NR',
  f0131822: 'xnr, NR',
  f0132313: 'xnr, NR',
  f0132618: 'xnr, NR',
  f0132638: 'xnr, NR',
  f0133235: 'xnr, NR',
  f0133376: 'xnr, NR',
  f0133379: 'xnr, NR',
  f0133501: 'xnr, NR',
  f0133505: 'xnr, NR',
  f0133509: 'xnr, NR',
  f0133763: 'xnr, NR',
  f0133833: 'xnr, NR',
  f0134286: 'xnr, NR',
  f0134552: 'xnr, NR',
  f0134609: 'xnr, NR',
  f0134867: 'xnr, NR',
  f0135008: 'xnr, NR',
  f0135066: 'xnr, NR',
  f0135150: 'xnr, NR',
  f0135414: 'xnr, NR',
  f0135467: 'xnr, NR',
  f0135469: 'xnr, NR',
  f0135473: 'xnr, NR',
  f0135474: 'xnr, NR',
  f0135475: 'xnr, NR',
  f0135551: 'xnr, NR',
  f0135758: 'xnr, NR',
  f0135779: 'xnr, NR',
  f0135859: 'xnr, NR',
  f0135934: 'xnr, NR',
  f0136014: 'xnr, China, Suzhou', // carry-over
  f0136033: 'xnr, NR',
  f0136239: 'xnr, NR',
  f0136399: 'xnr, NR',
  f0136642: 'xnr, NR',
  f0136808: 'xnr, NR',
  f0136810: 'xnr, NR',
  f0136868: 'xnr, NR',
  f0137019: 'xnr, NR',
  f0137594: 'xnr, NR',
  f0137868: 'xnr, NR',
  f0141761: 'xnr, NR',
  f0141762: 'xnr, NR',
  f0142059: 'xnr, NR',
  f0142135: "xnr, China, Ya'an + USA",
  f0142238: 'xnr, NR',
  f0142245: 'xnr, NR',
  f0142281: 'xnr, NR',
  f0142337: 'xnr, NR',
  f0142515: 'xnr, NR',
  f0142720: 'xnr, NR',
  f0142721: 'xnr, NR',
  f0142723: 'xnr, NR',
  f0143032: 'xnr, NR',
  f0143361: 'xnr, NR',
  f0143511: 'xnr, NR',
  f0143666: 'xnr, NR',
  f0143907: 'xnr, NR',
  f0143999: 'xnr, NR',
  f0144069: 'xnr, NR',
  f0144304: 'xnr, NR',
  f0144313: 'xnr, NR',
  f0144316: 'xnr, NR',
  f0144528: 'xnr, NR',
  f0144530: 'xnr, NR',
  f0144615: 'xnr, NR',
  f0144618: 'xnr, NR',
  f0144756: 'xnr, NR',
  f0144952: 'xnr, NR',
  f0145060: 'xnr, NR',
  f0145249: 'xnr, NR',
  f0145503: 'xnr, NR',
  f0145687: 'xnr, NR',
  f0145985: 'xnr, NR',
  f0145986: 'xnr, NR',
  f0146220: 'xnr, NR',
  f0146224: 'xnr, NR',
  f0146278: 'xnr, NR',
  f0146956: 'xnr, NR',
  f0147119: 'xnr, NR',
  f0147586: 'xnr, NR',
  f0147657: 'xnr, NR',
  f0147801: 'xnr, NR',
  f0148269: 'xnr, NR',
  f0148452: 'xnr, NR',
  f0149132: 'xnr, NR',
  f0149753: 'xnr, NR',
  f0149937: 'xnr, NR',
  f0150666: 'xnr, NR',
  f0150748: 'xnr, NR',
  f0150816: 'xnr, NR',
  f0150860: 'xnr, NR',
  f0150918: 'xnr, NR',
  f0151371: 'xnr, NR',
  f0151706: 'xnr, NR',
  f0151849: 'xnr, NR',
  f0152134: 'xnr, NR',
  f0152337: 'xnr, NR',
  f0152351: 'xnr, NR',
  f0152799: 'xnr, NR',
  f0152866: 'xnr, NR',
  f0152943: 'xnr, NR',
  f0153024: 'xnr, NR',
  f0153040: 'xnr, NR',
  f0153078: 'xnr, NR',
  f0153565: 'xnr, NR',
  f0153583: 'xnr, NR',
  f0153775: 'xnr, NR',
  f0153804: 'xnr, NR',
  f0153932: 'xnr, NR',
  f0153960: 'xnr, NR',
  f0154152: 'xnr, NR',
  f0154238: 'xnr, NR',
  f0154294: 'xnr, NR',
  f0154335: 'xnr, NR',
  f0154597: 'xnr, NR',
  f0154865: 'xnr, NR',
  f0155049: 'xnr, NR',
  f0155050: 'xnr, NR',
  f0155515: 'xnr, NR',
  f0155687: 'xnr, China, Guangzhou',
  f0155829: 'xnr, NR',
  f0156214: 'xnr, NR',
  f0156417: 'xnr, NR',
  f0157025: 'xnr, NR',
  f0157265: 'xnr, NR',
  f0157316: 'xnr, NR',
  f0157502: 'xnr, NR',
  f0157917: 'xnr, NR',
  f0157979: 'xnr, NR',
  f0157991: 'xnr, NR',
  f0158000: 'xnr, NR',
  f0158068: 'xnr, NR',
  f0158133: 'xnr, NR',
  f0158265: 'xnr, China, Hefei',
  f0158276: 'xnr, NR',
  f0158335: 'xnr, NR',
  f0158613: 'xnr, NR',
  f0159067: 'xnr, NR',
  f0159333: 'xnr, NR',
  f0159380: 'xnr, NR',
  f0159654: 'xnr, NR',
  f0159660: 'xnr, NR',
  f0159689: 'xnr, NR',
  f0160135: 'xnr, NR',
  f0160137: 'xnr, NR',
  f0160735: 'xnr, NR',
  f0160870: 'xnr, NR',
  f0161468: 'xnr, NR',
  f0161542: 'xnr, NR',
  f0161819: 'xnr, NR',
  f0161916: 'xnr, NR',
  f0163275: 'xnr, NR',
  f0166425: 'xnr, NR',
  f0166843: 'xnr, NR',
  f0166896: 'xnr, NR',
  f0167458: 'xnr, NR',
  f0168058: 'xnr, NR',
  f0169053: 'xnr, NR',
  f0199223: 'xnr, NR',
  f0207949: 'xnr, NR',
  f0214334: 'xnr, NR',
  f0215461: 'xnr, NR',
  f0217771: 'xnr, NR',
  f0217789: 'xnr, NR',
  f0218072: 'xnr, NR',
  f0218092: 'xnr, NR',
  f0219106: 'xnr, NR',
  f0220827: 'xnr, NR',

  // Delisted

  f01000: 'delist, NR - bootstrap', // carry-over
  f01001: 'delist, NR - bootstrap', // carry-over
  f01002: 'delist, NR - bootstrap', // carry-over
  f01013: 'delist, NR', // carry-over
  f01101: 'delist, China, Shanghai', // carry-over
  f01102: 'delist, China, Shandong', // carry-over
  f01156: 'delist, China, Hangzhou', // carry-over
  f01232: 'delist, China, Hangzhou', // carry-over
  f01274: 'delist, China, Guangdong',
  f01291: 'delist, Sweden, Stockholm, tvsthlm',
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
  f02666: 'delist, China, Chengdu', // carry-over
  f02668: 'delist, China, Chengdu',
  f02768: 'delist, China, Hong Kong', // carry-over
  f02774: 'delist, Australia, Sydney', // carry-over
  f02824: 'delist, China, Chengdu', // carry-over
  f03225: 'delist, China, Guyuan',
  f03264: 'delist, Korea, Bucheon-si', // carry-over
  f03319: 'delist, NR', // carry-over
  f03341: 'delist, NR', // carry-over
  f03346: 'delist, China, Huzhou, wckj', // carry-over
  f03361: 'delist, China, Guangzhou', // carry-over
  f03428: 'delist, China, Beijing + Jiaxing + Germany, Frankfurt', // carry-over
  f03487: 'delist, China, Yibin', // carry-over
  f03544: 'delist, China, Guiyang', // carry-over
  f03619: 'delist, China, Xiamen', // carry-over
  f03622: 'delist, 黑犇科技', // carry-over
  f03765: 'delist, Colombia, Medellin', // carry-over
  f04444: 'delist, NR', // carry-over
  f06262: 'delist, China, Guangzhou', // carry-over
  f07717: 'delist, China, Shenyang', // carry-over
  f07731: 'delist, NR', // carry-over
  f07772: 'delist, China, Dongguan', // carry-over
  f07796: 'delist, China, Hunan', // carry-over
  f07819: 'delist, China, Wuxi, YC--wuxi',
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
  f08285: 'delist, Latvia, Riga, stander',
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
  f08532: 'delist, USA',
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
  f09594: 'delist, NR', // carry-over
  f09610: 'delist, China, Beijing', // carry-over
  f09629: 'delist, NR', // carry-over
  f09662: 'delist, Canada, Surrey', // carry-over
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
  f010213: 'delist, NR',
  f010222: 'delist, NR',
  f010227: 'delist, China, Xiamen',
  f010244: 'delist, USA, Newton',
  f010248: 'delist, China, Yibin',
  f010265: 'delist, China, Zhengzhou',
  f010275: 'delist, Korea, Cheongju-si + USA',
  f010277: 'delist, France, Fontenay-sous-Bois',
  f010281: 'delist, China, Shanghai',
  f010282: 'delist, USA, San Francisco',
  f010283: 'delist, Brazil, Sao Paulo',
  f010292: 'delist, NR',
  f010293: 'delist, China, Xiamen',
  f010297: 'delist, USA, Howell',
  f010303: 'delist, China, Guangdong',
  f010305: 'delist, NR',
  f010310: 'delist, Canada, Surrey',
  f010313: 'delist, NR',
  f010315: 'delist, Canada, Surrey',
  f010346: 'delist, China, Karamay',
  f010382: 'delist, NR',
  f010402: 'delist, China, Shenyang',
  f010425: 'delist, NR',
  f010433: 'delist, Korea, Seoul',
  f010438: 'delist, USA',
  f010453: 'delist, China, Shaanxi',
  f010468: 'delist, China, Guangzhou',
  f010490: 'delist, NR',
  f010517: 'delist, China, Chongqing',
  f010520: 'delist, China, Hangzhou',
  f010542: 'delist, China, Ordos',
  f010549: 'delist, China, Ordos',
  f010551: 'delist, China, Shenyang',
  f010559: 'delist, China, Shenyang',
  f010566: 'delist, NR',
  f010591: 'delist, China, Wuhan',
  f010601: 'delist, NR',
  f010602: 'delist, China, Guangdong',
  f010603: 'delist, China, Baoding',
  f010612: 'delist, USA, Mountain View',
  f014207: 'delist, USA',
  f014261: 'delist, China, Fuzhou',
  f014271: 'delist, China, Fuzhou',
  f014314: 'delist, Korea, Bucheon-si',
  f014331: 'delist, China, Chongqing',
  f014354: 'delist, USA, Concord',
  f014366: 'delist, USA, Mountain View',
  f014388: 'delist, China, Guangdong',
  f014389: 'delist, China, Chongqing',
  f014407: 'delist, China, Shanghai',
  f014419: 'delist, USA, San Diego',
  f014420: 'delist, Russia, Samara',
  f014425: 'delist, Singapore',
  f014477: 'delist, China, Hangzhou',
  f014478: 'delist, Finland',
  f014486: 'delist, NR',
  f014495: 'delist, China, Hong Kong',
  f014514: 'delist, China, Fuzhou',
  f014533: 'delist, China, Fuzhou',
  f014540: 'delist, USA, Newton',
  f014556: 'delist, Korea, Bucheon-si',
  f014629: 'delist, NR',
  f014660: 'delist, Korea, Busan',
  f014685: 'delist, Hong Kong',
  f014708: 'delist, China, Beijing',
  f014741: 'delist, China, Wuhan',
  f014745: 'delist, China, Shenyang',
  f014749: 'delist, China, Chongqing',
  f014764: 'delist, Korea, Wanju',
  f014793: 'delist, China, Hangzhou',
  f014799: 'delist, China, Chongqing',
  f015061: 'delist, Australia, Sydney',
  f015232: 'delist, Poland, Warsaw',
  f015647: 'delist, China, Shenzhen',
  f015709: 'delist, China, Hefei',
  f015724: 'delist, China, Guangdong',
  f015753: 'delist, China, Guyuan',
  f015797: 'delist, Germany, Rostock',
  f015798: 'delist, Germany',
  f015799: 'delist, Germany, Rostock',
  f015800: 'delist, Germany, Sankt Andreasberg',
  f015802: 'delist, Germany',
  f015805: 'delist, Germany',
  f015808: 'delist, Germany',
  f015809: 'delist, Germany',
  f015810: 'delist, Germany',
  f015811: 'delist, Germany, Lanshut',
  f015812: 'delist, Germany',
  f015827: 'delist, Russia',
  f015829: 'delist, China, Beijing',
  f015833: 'delist, China, Baoding',
  f015867: 'delist, Netherlands, Amsterdam',
  f015870: 'delist, China, Hangzhou',
  f015875: 'delist, China, Fuzhou',
  f015891: 'delist, China, Shanghai',
  f015901: 'delist, Germany',
  f015902: 'delist, Germany',
  f015920: 'delist, China, Guangdong',
  f015935: 'delist, China, Sichuan',
  f015938: 'delist, Canada, Waterloo',
  f015940: 'delist, Netherlands, Amsterdam',
  f015942: 'delist, China, Ningbo',
  f016140: 'delist, China, Beijing',
  f016162: 'delist, France, Borgo',
  f016172: 'delist, China, Guangdong',
  f016217: 'delist, China, Nanchong',
  f016228: 'delist, China, Chengdu',
  f016234: 'delist, China, Chengdu',
  f016262: 'delist, China, Fuzhou',
  f016271: 'delist, Korea, Seodaemun-gu',
  f016299: 'delist, China, Shanghai',
  f016303: 'delist, USA, Boardman',
  f016304: 'delist, USA, Boardman',
  f016305: 'delist, USA, Boardman',
  f016306: 'delist, USA, Boardman',
  f016408: 'delist, NR',
  f016426: 'delist, NR',
  f016436: 'delist, Korea, Seoul',
  f016456: 'delist, China, Zhejiang',
  f016462: 'delist, USA, Clarksville',
  f016482: 'delist, USA, Aliquippa',
  f016594: 'delist, Germany',
  f016628: 'delist, NR',
  f016688: 'delist, Germany, Frankfurt',
  f016706: 'delist, China, Guangzhou',
  f017117: 'delist, Russia, Samara',
  f017171: 'delist, NR',
  f017181: 'delist, China, Nanchong',
  f017186: 'delist, China, Jiaxing',
  f017209: 'delist, NR',
  f017215: 'delist, Finland',
  f017216: 'delist, NR',
  f017236: 'delist, NR',
  f017251: 'delist, USA',
  f017294: 'delist, China, Shenzhen',
  f017323: 'delist, Poland, Warsaw',
  f017334: 'delist, China, Fuzhou',
  f017430: 'delist, Australia, Alexandria-cfa',
  f017618: 'delist, Korea, Wanju',
  f017628: 'delist, Brazil, Sao Paulo',
  f017655: 'delist, NR',
  f017722: 'delist, NR',
  f017747: 'delist, NR',
  f017793: 'delist, NR',
  f018081: 'delist, Germany',
  f018095: 'delist, Colombia, Medellin',
  f018128: 'delist, China, Dongguan',
  f018164: 'delist, USA, Howell',
  f018311: "delist, China, Xi'an, <23h",
  f018369: 'delist, NR',
  f018393: 'delist, Colombia, Medellin',
  f018397: 'delist, USA, Howell',
  f018425: 'delist, USA, Howell',
  f018437: 'delist, NR',
  f018441: 'delist, USA',
  f018445: 'delist, NR',
  f018446: 'delist, China, Dongguan',
  f018456: 'delist, Brazil, Sao Paulo',
  f018474: 'delist, China, Xiamen',
  f018484: 'delist, China, Shanghai',
  f018490: 'delist, Korea, Hwaseong-si',
  f018513: 'delist, NR',
  f018517: 'delist, USA, Columbus',
  f018518: "delist, China, Xi'an",
  f018520: 'delist, China',
  f018530: 'delist, China, Shaanxi',
  f018531: 'delist, China, Shaanxi',
  f018537: 'delist, China, Shaanxi',
  f018542: 'delist, China, Chongqing',
  f018754: 'delist, China, Dali',
  f018761: 'delist, Russia, St. Petersburg',
  f018790: 'delist, China, Chengdu',
  f018802: 'delist, China, Dongguan',
  f018812: 'delist, South Africa, Cape Town',
  f018836: 'delist, NR',
  f018837: 'delist, China, Shaanxi',
  f018844: 'delist, NR',
  f018864: 'delist, Korea, Busan',
  f018865: 'delist, China, Chengdu',
  f018869: 'delist, NR',
  f018879: 'delist, Korea, Geumcheon-gu',
  f018899: 'delist, China, Shanghai',
  f019017: 'delist, China, Wenzhou-cfa',
  f019024: 'delist, China, Sichuan',
  f019029: 'delist, Serbia, Boljevac',
  f019031: 'delist, NR',
  f019042: 'delist, China, Shanghai',
  f019048: 'delist, Brazil, Sao Paulo',
  f019062: 'delist, Germany',
  f019069: 'delist, NR',
  f019109: 'delist, USA, Howell',
  f019114: 'delist, USA, Howell',
  f019118: 'delist, China, Jiaxing',
  f019123: 'delist, China, Dongguan',
  f019160: 'delist, USA, Fremont',
  f019173: 'delist, China, Nanchong',
  f019184: 'delist, China, Yibin',
  f019218: 'delist, China, Dali',
  f019239: 'delist, China, Jiaxing',
  f019264: 'delist, NR',
  f019284: 'delist, China, Foshan',
  f019376: 'delist, NR',
  f019378: 'delist, China, Changzhou',
  f019401: 'delist, Brazil, Sao Paulo',
  f019423: 'delist, South Africa, Johannesburg',
  f019434: 'delist, NR',
  f019437: 'delist, Korea, Guro-gu',
  f019525: 'delist, USA, Berkeley',
  f019528: 'delist, Peru',
  f019547: 'delist, Peru',
  f019645: 'delist, Russia, St. Petersburg',
  f019723: 'delist, China, Zhongshan',
  f019734: 'delist, NR',
  f019757: 'delist, NR',
  f019804: 'delist, China, Chengdu',
  f019809: 'delist, NR',
  f019812: 'delist, NR',
  f019825: 'delist, China, Hong Kong',
  f020223: 'delist, China, Guiyang',
  f020241: 'delist, NR',
  f020260: 'delist, NR',
  f020276: 'delist, China, Xiamen',
  f020281: 'delist, Korea, Uijeongbu-si',
  f020352: 'delist, NR',
  f020361: 'delist, Colombia, Medellin',
  f020366: 'delist, China, Chengdu',
  f020369: 'delist, NR',
  f020379: 'delist, NR',
  f020386: 'delist, Russia',
  f020390: 'delist, NR',
  f020408: 'delist, China, Hong Kong',
  f020432: 'delist, Korea, Wanju',
  f020433: 'delist, NR',
  f020439: 'delist, China, Chengdu',
  f020450: 'delist, NR',
  f020451: 'delist, NR',
  f020453: 'delist, China, Chengdu',
  f020457: 'delist, NR',
  f020525: 'delist, China, Dongguan',
  f020559: 'delist, China, Liaoning',
  f020563: 'delist, China, Dongguan',
  f020578: 'delist, Korea, Wanju',
  f020641: 'delist, NR',
  f020678: 'delist, China, Wenzhou',
  f020682: 'delist, NR',
  f020683: 'delist, China, Changsha',
  f020691: 'delist, NR',
  f020739: 'delist, China, Dongguan',
  f020763: 'delist, China, Luzhou',
  f020775: 'delist, Japan, Osaka',
  f020786: 'delist, China, Shenzhen',
  f020788: 'delist, China, Chengdu',
  f020789: 'delist, NR',
  f020791: 'delist, China, Hangzhou',
  f020819: 'delist, China, Chengdu',
  f020822: 'delist, China, Shanghai',
  f020896: 'delist, NR',
  f020899: 'delist, China, Chengdu',
  f020904: 'delist, Korea, Uijeongbu-si, FILTop',
  f020914: 'delist, NR',
  f020934: 'delist, NR',
  f020939: 'delist, NR',
  f020961: 'delist, China, Shanghai',
  f020975: 'delist, China, Shandong',
  f020993: 'delist, China, Hong Kong',
  f021069: 'delist, USA',
  f021083: 'delist, NR',
  f021092: 'delist, NR',
  f021095: 'delist, NR',
  f021265: 'delist, China, Wuhan',
  f021274: 'delist, China, Shanghai',
  f021286: 'delist, China, Shaanxi',
  f021307: 'delist, China, Chengdu',
  f021311: 'delist, NR',
  f021337: 'delist, China, Beijing',
  f021339: 'delist, China, Jiaxing',
  f021346: 'delist, China, Shanghai',
  f021357: 'delist, China, Shanghai',
  f021418: 'delist, NR',
  f021494: 'delist, NR',
  f021500: 'delist, NR',
  f021505: 'delist, NR',
  f021509: 'delist, China, Fuzhou',
  f021527: 'delist, NR',
  f021535: 'delist, China, Chengdu',
  f021555: 'delist, NR',
  f021574: 'delist, NR',
  f021580: 'delist, NR',
  f021583: 'delist, China, Jiaxing',
  f021684: 'delist, NR',
  f021699: 'delist, NR',
  f021725: 'delist, NR',
  f021976: 'delist, NR',
  f022015: 'delist, China, Hangzhou',
  f022016: 'delist, NR',
  f022033: 'delist, NR',
  f022070: 'delist, China, Jieyang',
  f022084: 'delist, China, Shaanxi',
  f022089: 'delist, China, Beijing',
  f022091: 'delist, NR',
  f022108: 'delist, China, Luzhou',
  f022119: 'delist, USA, Lovettsville',
  f022122: 'delist, NR',
  f022132: 'delist, China, Dongguan',
  f022171: 'delist, China, Shanghai',
  f022202: 'delist, USA, Howell',
  f022250: 'delist, NR',
  f022262: 'delist, China, Hong Kong',
  f022276: 'delist, Korea, Seoul',
  f022284: 'delist, China, Shaanxi',
  f022287: 'delist, China, Dongguan',
  f022303: 'delist, NR',
  f022313: 'delist, NR',
  f022321: 'delist, China, Hong Kong',
  f022326: 'delist, China, Zhongshan',
  f022333: 'delist, China, Dongguan',
  f022337: 'delist, NR',
  f022343: 'delist, China, Dongguan',
  f022372: 'delist, China, Chengdu',
  f022376: 'delist, China, Dongguan',
  f022494: 'delist, China, Dongguan',
  f022501: 'delist, Japan, Osaka',
  f022503: 'delist, NR',
  f022505: 'delist, China, Shanghai',
  f022517: 'delist, China, Taiwan, Taipei',
  f022562: 'delist, NR',
  f022564: 'delist, NR',
  f022683: 'delist, NR',
  f022755: 'delist, China, Shenzhen',
  f022776: 'delist, Korea, Guri-si',
  f022786: 'delist, NR',
  f022790: 'delist, China, Luzhou',
  f022791: 'delist, NR',
  f022797: 'delist, NR',
  f022834: 'delist, NR',
  f022836: 'delist, China, Chongqing',
  f022838: 'delist, China, Hong Kong',
  f022841: 'delist, China, Zhongshan',
  f022857: 'delist, NR',
  f022880: 'delist, NR',
  f022906: 'delist, NR',
  f022911: 'delist, China, Hong Kong',
  f022912: 'delist, NR',
  f022926: 'delist, NR',
  f022930: 'delist, NR',
  f022954: 'delist, NR',
  f022967: 'delist, Korea, Seoul',
  f022969: 'delist, China, Chengdu',
  f022970: 'delist, NR',
  f022996: 'delist, NR',
  f023021: 'delist, Korea, Yeongdeungpo-dong',
  f023108: 'delist, China, Dongguan',
  f023159: 'delist, NR',
  f023207: 'delist, NR',
  f023210: 'delist, China, Dongguan',
  f023254: 'delist, NR',
  f023463: 'delist, NR',
  f023482: 'delist, NR',
  f023501: 'delist, China, Mianyang',
  f023505: 'delist, NR',
  f023526: 'delist, China, Chongqing',
  f023535: 'delist, China, Hong Kong',
  f023560: 'delist, NR',
  f023568: 'delist, NR',
  f023571: 'delist, NR',
  f023581: 'delist, China, Hong Kong, mine-much',
  f023643: 'delist, NR',
  f023647: 'delist, Korea, Gangseo-gu',
  f023649: 'delist, Korea, Seoul, LS&NIHON',
  f023661: 'delist, China, Zhejiang',
  f023798: 'delist, China, Shanghai',
  f023801: 'delist, China, Dongguan',
  f023826: 'delist, USA, Germantown',
  f023881: 'delist, China, Fuzhou',
  f023939: 'delist, NR',
  f023943: 'delist, USA, Ashburn',
  f023965: 'delist, NR',
  f023986: 'delist, Korea, Seoul',
  f024031: 'delist, NR',
  f024074: 'delist, NR',
  f024129: 'delist, China, Zhejiang',
  f024153: 'delist, NR',
  f024165: 'delist, NR',
  f024168: 'delist, USA, Ashburn',
  f024496: 'delist, China, Dongguan',
  f024526: 'delist, Korea',
  f024556: 'delist, NR',
  f024557: 'delist, NR',
  f024558: 'delist, NR',
  f024559: 'delist, NR',
  f024611: 'delist, China, Dongguan',
  f024902: 'delist, Korea, Incheon',
  f024903: 'delist, undefined',
  f024969: 'delist, NR',
  f025028: 'delist, NR',
  f025032: 'delist, China, Beijing',
  f029368: 'delist, Korea, Gangseo-gu',
  f029421: 'delist, undefined',
  f029477: 'delist, undefined',
  f029529: 'delist, China, Dongguan',
  f029546: 'delist, NR',
  f029566: 'delist, NR',
  f029595: 'delist, undefined',
  f029619: 'delist, undefined',
  f029632: 'delist, undefined',
  f030230: 'delist, China, Sichuan',
  f030231: 'delist, China, Hunan',
  f030327: 'delist, China, Beijing',
  f030386: 'delist, NR',
  f030514: 'delist, NR',
  f030518: 'delist, China, Wuhan',
  f030521: 'delist, China, Hong Kong',
  f030531: 'delist, NR',
  f030608: 'delist, China, Mianyang',
  f030641: 'delist, China, Shaanxi',
  f032865: 'delist, USA, Redmond',
  f032887: 'delist, undefined',
  f032904: 'delist, undefined',
  f032922: 'delist, undefined',
  f033014: 'delist, NR',
  f033028: 'delist, China, Mianyang',
  f033111: 'delist, China, Shanghai',
  f033124: 'delist, China, Shanghai',
  f033125: 'delist, NR',
  f033224: 'delist, NR',
  f033545: 'delist, China, Shenzhen + USA',
  f033549: 'delist, China, Quzhou',
  f034084: 'delist, China, Chongqing',
  f034229: 'delist, USA, Minneapolis',
  f034311: 'delist, Korea, Gangnam-gu',
  f034362: 'delist, China, Sichuan',
  f034652: 'delist, Korea, Yeongdeungpo-dong',
  f034666: 'delist, NR',
  f040137: 'delist, NR',
  f040432: 'delist, NR',
  f040468: 'delist, NR',
  f040971: 'delist, NR',
  f042344: 'delist, Korea',
  f042584: 'delist, Australia, Basin View',
  f042839: 'delist, Korea, Pocheon-si',
  f042901: 'delist, Finland, Helsinki',
  f044143: 'delist, China, Taiwan, Taipei',
  f044788: 'delist, NR',
  f046043: 'delist, China, Shanghai',
  f046073: 'delist, China, Shanghai',
  f046074: 'delist, China, Shanghai',
  f046078: 'delist, China, Shaanxi',
  f046315: 'delist, NR',
  f046317: 'delist, China, Nanyang',
  f047327: 'delist, China, Hong Kong',
  f047536: 'delist, NR',
  f047858: 'delist, China, Wuhan',
  f048545: 'delist, China, Chengdu',
  f049990: 'delist, Korea, Incheon',
  f052503: 'delist, NR',
  f052562: 'delist, NR',
  f052740: 'delist, China, Shaanxi',
  f054163: 'delist, China, Dongguan',
  f054389: 'delist, China, Chongqing',
  f054677: 'delist, Finland, Helsinki',
  f055040: 'delist, China, Fujian',
  f056393: 'delist, NR',
  f057115: 'delist, China, Nanyang',
  f057560: 'delist, NR',
  f057842: 'delist, Korea, Gyeonggi-do',
  f058003: 'delist, China, Shenzhen',
  f058321: 'delist, China, Dongguan',
  f059280: 'delist, China, Shenzhen',
  f059652: 'delist, China, Beijing',
  f059705: 'delist, Korea, Naju',
  f060780: 'delist, Korea, Goyang-si',
  f061043: 'delist, China, Changsha',
  f061059: 'delist, China, Beijing',
  f061196: 'delist, Korea, Yeongdeungpo-dong',
  f061430: 'delist, Korea, Naju',
  f062245: 'delist, NR',
  f062375: 'delist, Korea, Gyeonggi-do',
  f062445: 'delist, China, Shenzhen',
  f062449: 'delist, NR',
  f062492: 'delist, China, Hong Kong',
  f062552: 'delist, NR',
  f062587: 'delist, NR',
  f062735: 'delist, China, Hong Kong',
  f063173: 'delist, Korea, Gyeonggi-do',
  f063780: 'delist, China, Shenyang',
  f063921: 'delist, China, Ili',
  f064442: 'delist, Japan',
  f064688: 'delist, NR',
  f065132: 'delist, Denmark, Vipperod',
  f065225: 'delist, China, Dongguan',
  f065259: 'delist, NR', // carry-over
  f065426: 'delist, Korea, Gimpo-si',
  f065477: 'delist, NR',
  f065732: 'delist, Korea, Gyeonggi-do',
  f065853: 'delist, Korea, Seongnam-si',
  f066075: 'delist, NR',
  f066289: 'delist, NR',
  f066465: 'delist, NR',
  f066566: 'delist, Korea, Gwangju',
  f066568: 'delist, Korea, Gwangju, aoc-0002',
  f066734: 'delist, NR',
  f066845: 'delist, China, Dongguan',
  f067083: 'delist, Russia, Moscow',
  f067185: 'delist, Korea, Gwangju',
  f067195: 'delist, China, Huizhou',
  f067283: 'delist, Korea, Seongnam-si',
  f067314: 'delist, China, Ningbo',
  f067545: 'delist, Canada, Kitchener',
  f068253: 'delist, NR',
  f068898: 'delist, China, Fuzhou',
  f069450: 'delist, NR',
  f069661: 'delist, China, Wuxi',
  f070288: 'delist, China, Zhangzhou',
  f070337: 'delist, China, Zhangzhou',
  f070747: 'delist, China, Shenzhen',
  f070756: 'delist, China, Beijing',
  f070824: 'delist, Taiwan, Hsinchu',
  f071114: 'delist, China, Shenyang',
  f071190: 'delist, Korea, Gyeonggi-do',
  f071692: "delist, China, Xi'an",
  f071914: 'delist, China, Beijing',
  f073048: 'delist, Korea, Gyeonggi-do',
  f073535: 'delist, Korea, Gyeonggi-do',
  f073783: 'delist, NR',
  f073878: 'delist, NR',
  f073931: 'delist, NR',
  f078425: 'delist, Korea, Bucheon-si',
  f078516: 'delist, NR',
  f080131: 'delist, NR',
  f080945: 'delist, China, Shenzhen',
  f082054: 'delist, China, Hefei',
  f082175: 'delist, China, Shenyang',
  f082250: 'delist, China, Guilin',
  f082543: 'delist, Korea, Osan',
  f082590: 'delist, China, Taizhou',
  f082669: 'delist, USA, Daytona Beach',
  f082698: "delist, USA, Xi'an",
  f083235: 'delist, Serbia, Belgrade',
  f085226: 'delist, Korea, Busan',
  f085415: 'delist, NR',
  f085682: 'delist, NR',
  f085904: 'delist, China, Chongqing',
  f085947: 'delist, NR',
  f086450: 'delist, NR',
  f086610: 'delist, Korea, Gyeonggi-do',
  f087931: 'delist, China, Beijing',
  f088305: 'delist, Korea, Gyeonggi-do',
  f088404: 'delist, Korea, Gyeonggi-do',
  f089201: 'delist, Korea, Gyeonggi-do',
  f090086: 'delist, Korea',
  f090104: 'delist, China, Dongguan',
  f090363: 'delist, China, Beijing',
  f090747: 'delist, Korea, Anyang-si',
  f090851: 'delist, China, Ningxia',
  f091095: 'delist, Korea, Gwangju + Buk-gu',
  f091139: 'delist, Korea, Gyeonggi-do',
  f092630: 'delist, Korea, Gyeonggi-do',
  f092724: 'delist, China, Beijing',
  f092776: 'delist, Korea, Gimhae',
  f093212: 'delist, Netherlands',
  f093554: 'delist, China, Zhangzhou',
  f094085: 'delist, Japan, Ota-ku',
  f094675: 'delist, NR',
  f094785: 'delist, China, Shanghai',
  f094825: 'delist, Korea, Gwangju',
  f094869: 'delist, China, Shanghai',
  f094894: 'delist, Korea, Gwangju',
  f094899: 'delist, Korea',
  f095049: 'delist, Korea, Bucheon-si',
  f095296: 'delist, China, Suqian',
  f095398: 'delist, Korea, Sejong',
  f095506: 'delist, China, Ningxia',
  f095528: 'delist, China, Hangzhou',
  f095833: 'delist, Korea, Yongin-si',
  f096224: 'delist, China, Chongqing',
  f0125962: 'delist, Korea, Yongin-si',
  f0127151: 'delist, Korea, Yongin-si',
  f0127157: 'delist, Korea, Yongin-si',
  f0127256: 'delist, Korea, Yongin-si',
  f0128238: 'delist, Korea, Yongin-si',
  f0128239: 'delist, Korea, Yongin-si',
  f0128242: 'delist, Korea, Yongin-si',
  f0213894: 'delist, China, Hangzhou',
  f0216068: 'delist, Romania, Iasi',
  f0219415: 'delist, USA, Boardman'
}

export default annotations
