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

  f03519: 'inflight, USA, Seattle', // FundsReserved: about 2 hours
  f019812: 'inflight, NR', // FundsReserved: about 1 hour
  f021500: 'inflight, NR', // FundsReserved: about 1 hour
  f023207: 'inflight, NR', // FundsReserved: about 1 hour
  f023826: 'inflight, USA, Germantown', // FundsReserved: about 1 hour
  f033475: 'inflight, NR', // FundsReserved: about 1 hour
  f065941: 'inflight, NR', // FundsReserved: about 1 hour
  f069661: 'inflight, China, Wuxi', // FundsReserved: about 1 hour
  f070045: 'inflight, NR', // FundsReserved: about 1 hour
  f073931: 'inflight, NR', // FundsReserved: about 1 hour
  f079425: 'inflight, NR', // FundsReserved: about 1 hour
  f082175: 'inflight, China, Shenyang', // FundsReserved: about 1 hour
  f087868: 'inflight, NR', // FundsReserved: about 1 hour
  f088290: 'inflight, NR', // FundsReserved: about 1 hour
  f090484: 'inflight, NR', // FundsReserved: about 1 hour
  f091395: 'inflight, NR', // FundsReserved: about 1 hour
  f094675: 'inflight, NR', // FundsReserved: about 1 hour
  f094785: 'inflight, China, Shanghai', // FundsReserved: about 1 hour
  f094869: 'inflight, China, Shanghai', // FundsReserved: about 1 hour
  f094894: 'inflight, Korea, Gwangju', // FundsReserved: about 1 hour
  f095398: 'inflight, Korea, Sejong', // FundsReserved: about 1 hour
  f0110804: 'inflight, USA, Santa Clara', // FundsReserved: about 2 hours
  f0127980: 'inflight, Korea, Seoul', // FundsReserved: about 4 hours

  // Unknown

  // Active

  f03339: 'active, China, Luzhou, benxun', // 1594223 about 2 hours
  f016203: 'active, China, Chengdu', // 1594291 about 2 hours
  f030347: 'active, China, Zhejiang', // 1594150 about 4 hours
  f039515: 'active, China, Chongqing', // 1594187 about 2 hours
  f053088: 'active, China, Shanghai', // 1594192 about 2 hours
  f066804: 'active, China, Zhejiang', // 1593805 about 2 hours
  f078621: 'active, Korea, Uiwang', // 1594602 about 2 hours
  f081644: 'active, China, Wenzhou', // 1593806 about 4 hours
  f094374: 'active, China, Nanyang', // 1593797 about 2 hours
  f096974: 'active, China, Chongqing', // 1594191 about 3 hours
  f096976: 'active, Russia', // 1593610 about 9 hours
  f0106949: 'active, Korea, Seoul', // 1594568 about 3 hours
  f0110768: 'active, Korea, Gwangju', // 1594146 about 3 hours
  f0146751: 'active, China, Jiangsu', // 1593579 about 2 hours
  f0156207: 'active, Korea, Ulsan', // 1594157 about 2 hours
  f0156452: 'active, Korea, Ulsan', // 1594595 about 2 hours

  // Active-sealing (active, with in-flight sealing)

  // Sealing

  f02540: 'sealing, USA, Mobile', // 1594145
  f02822: 'sealing, China, Chengdu', // 1594194
  f03345: 'sealing, China, Fuzhou, chh', // 1594196
  f08019: 'sealing, China, Yantai, 三合', // 1594193
  f010513: 'sealing, China, Chongqing', // 1594337
  f015233: 'sealing, China, Nanjing', // 1593798
  f016276: 'sealing, China, Beijing', // 1593917
  f019806: 'sealing, China, Beijing', // 1593916
  f020489: 'sealing, China, Lioaning', // 1593802
  f020928: 'sealing, China, Deyang + Singapore', // 1593918
  f022261: 'sealing, China, Luzhou', // 1593946
  f024468: 'sealing, China, Shenzhen', // 1594147
  f029665: 'sealing, China, Shenyang', // 1593830
  f033036: 'sealing, China, Liaoning', // 1593803
  f044160: 'sealing, China, Guangzhou, muxing', // 1593801
  f055102: 'sealing, Vietman, Ho Chi Minh City + China', // 1593925
  f055132: 'sealing, Vietman, Ho Chi Minh City + China', // 1593924
  f061158: 'sealing, China, Guangdong', // 1594894
  f062473: 'sealing, NR', // 1594901
  f080103: 'sealing, Korea, Seongnam-si', // 1594904
  f086439: 'sealing, NR', // 1594902
  f089840: 'sealing, Korea, Yeongdeungpo-gu', // 1594188
  f092516: 'sealing, USA, Boardman', // 1594230
  f098664: 'sealing, China, Jiangsu', // 1593800
  f099705: 'sealing, China, Zibo', // 1594864
  f0102313: 'sealing, Korea, Gangseo-gu', // 1594226
  f0105074: 'sealing, China, Shanghai', // 1594269
  f0107753: 'sealing, China, Shanghai', // 1594569
  f0110488: 'sealing, China, Chongqing', // 1594867
  f0112772: 'sealing, China, Nantong', // 1594866
  f0113331: 'sealing, Korea, Jinju + USA', // 1594367
  f0115108: 'sealing, Korea, Yangcheon-gu', // 1594865
  f0116766: 'sealing, USA, Westford', // 1593607
  f0118769: 'sealing, China, Fujian', // 1594897
  f0122815: 'sealing, Korea, Bucheon-si', // 1594863
  f0132461: 'sealing, Korea, Daegu', // 1594868
  f0133486: 'sealing, China, Shenzhen', // 1594862
  f0134671: 'sealing, Korea, Gimpo-si', // 1594888
  f0142606: 'sealing, Korea, Gangseo-gu', // 1594869
  f0149444: 'sealing, Korea, Gangseo-gu', // 1594576
  f0150744: 'sealing, Korea, Ulsan', // 1594871
  f0157564: 'sealing, Korea, Daejeon', // 1594881
  f0164291: 'sealing, China, Fujian', // 1594899
  f0165375: 'sealing, Korea, Seongnam-si', // 1594879
  f0165539: 'sealing, Japan, Yokohama', // 1594254

  // Stuck

  f02490: 'stuck, China, Fujian', // CheckForAcceptance: about 1 hour
  f08157: 'stuck, China, Beijing + Germany, Frankfurt, 超星际', // CheckForAcceptance: about 1 hour
  f091355: 'stuck, China, Chengdu', // CheckForAcceptance: 2 days
  f094430: 'stuck, China, Ordos', // CheckForAcceptance: about 2 hours
  f0110198: 'stuck, Korea, Hwaseong-si', // CheckForAcceptance: about 2 hours
  f0119336: 'stuck, Canada, Ottawa', // CheckForAcceptance: about 2 hours
  f0120141: 'stuck, Korea, Gangnam-gu', // CheckForAcceptance: about 2 hours
  f0121533: 'stuck, China, Zhejiang', // Transferring: about 4 hours
  f0126535: 'stuck, China, Hong Kong', // CheckForAcceptance: about 2 hours
  f0128191: 'stuck, Korea, Gangnam-gu', // CheckForAcceptance: about 2 hours
  f0137168: 'stuck, China, Beijing', // CheckForAcceptance: about 4 hours
  f0145385: 'stuck, Malaysia, Petaling Jaya', // CheckForAcceptance: 3 days
  f0160291: 'stuck, USA', // CheckForAcceptance: about 2 hours
  f0164326: 'stuck, China, Beijing', // CheckForAcceptance: about 2 hours
  f0165135: 'stuck, China, Guangzhou', // CheckForAcceptance: about 2 hours
  f0165643: 'stuck, China, Guangzhou', // Transferring: about 17 hours
  f0167137: 'stuck, China, Shaoxing', // CheckForAcceptance: about 2 hours
  f0168371: 'stuck, Korea, Namyangju', // CheckForAcceptance: about 2 hours
  f0169153: 'stuck, China, Chengdu', // CheckForAcceptance: about 2 hours
  f0214181: 'stuck, Australia, Mosman', // CheckForAcceptance: about 2 hours
  f0215360: 'stuck, France', // CheckForAcceptance: about 2 hours
  f0215370: 'stuck, China, Hangzhou', // CheckForAcceptance: about 2 hours
  f0215404: 'stuck, China, Suzhou', // CheckForAcceptance: about 2 hours
  f0215497: 'stuck, Korea, Gangseo-gu', // CheckForAcceptance: about 1 hour
  f0219631: 'stuck, USA, Council Bluffs', // CheckForAcceptance: about 2 hours

  // Busy

  f015734: 'busy, China, Qingdao', // cannot seal a sector before 520925

  // Min Size

  f01234: 'min-size, Belgium, Bonheiden', // 65536 < 3221225472
  f01238: 'min-size, Vietnam, Hanoi, FILECOIN-VIETNAM', // 131072 < 8589934592
  f01240: 'min-size, Netherlands, HidNand', // 131072 < 17179869184
  f01272: 'min-size, Singapore', // 131072 < 10485760
  f01276: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 17179869184
  f01278: 'min-size, USA, Grand Rapids, MiMiner', // 131072 < 1073741824
  f02387: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 17179869184
  f02401: 'min-size, Canada, Chambly, NBFS Canada', // 131072 < 17179869184
  f02419: 'min-size, China, Shanghai, yuantai', // 131072 < 268435456
  f02423: 'min-size, Ukraine, Kyiv', // 65536 < 134217728
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 131072 < 1073741824
  f02619: 'min-size, China, Beijing, Blockcasting', // 131072 < 1048576
  f02620: 'min-size, Poland, Krakow, @magik6k', // 131072 < 536870912
  f03224: 'min-size, Ukraine, Kyiv', // 65536 < 134217728
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
  f019279: 'min-size, Canada, Calgary', // 65536 < 8589934592
  f019362: 'min-size, China, Hangzhou, 青青子衿', // 131072 < 17179869184
  f019399: 'min-size, Korea, Busan', // 131072 < 268435456
  f019551: 'min-size, UK, Birmingham, @Neofix AF', // 131072 < 1073741824
  f020378: 'min-size, Bulgaria, Asenovgrad', // 131072 < 2147483648
  f020385: 'min-size, Korea, Incheon', // 131072 < 536870912
  f021255: 'min-size, Netherlands + China, Suzhou', // 131072 < 2147483648
  f021716: 'min-size, New Zealand, Wellington', // 131072 < 8589934592
  f022142: 'min-size, USA, Queens, Nelson SR2', // 131072 < 134217728
  f022163: 'min-size, dns:fil.akasha.network', // 131072 < 17179869184
  f022289: 'min-size, China, Mianyang', // 131072 < 4294967296
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
  f023971: 'min-size, USA', // 131072 < 2147483648
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
  f034047: 'min-size, China, Hangzhou', // 131072 < 1073741824
  f039940: 'min-size, China, Mianyang', // 131072 < 134217728
  f047419: 'min-size, USA, Waukesha', // 131072 < 17179869184
  f048669: 'min-size, NR', // 131072 < 1048576
  f049882: 'min-size, Netherlands, De Rijp, Chipz', // 131072 < 17179869184
  f062353: 'min-size, Germany, Frankfurt', // 131072 < 17179869184
  f064218: 'min-size, USA, Kirkland', // 131072 < 17179869184
  f064668: 'min-size, China, Hong Kong', // 131072 < 1048576
  f065200: 'min-size, China, Yibin', // 65536 < 33554432
  f066596: 'min-size, USA, San Diego', // 131072 < 1048576
  f078522: 'min-size, NR', // 131072 < 4294967296
  f079007: 'min-size, China, Jinan', // 131072 < 1048576
  f079817: "min-size, Russia, Ul'yanovka", // 131072 < 1073741824
  f082617: 'min-size, China, Fujian', // 131072 < 134217728
  f083920: 'min-size, NR', // 131072 < 1573031772
  f085899: 'min-size, China, Wuxi', // 131072 < 16777216
  f097618: 'min-size, China, Suzhou', // 131072 < 524288000
  f097777: 'min-size, Ukraine, Ivano-Frankivsk', // 65536 < 104857600
  f099608: 'min-size, Latvia, Riga', // 65536 < 268435456
  f0100116: 'min-size, Korea, Uljin County', // 131072 < 1073741824
  f0104671: 'min-size, Japan, Ota-ku', // 65536 < 4294967296
  f0104967: 'min-size, Ukraine, Ternopil', // 65536 < 2147483648
  f0113664: 'min-size, France', // 65536 < 4294967296
  f0116287: 'min-size, China, Shanghai', // 131072 < 2147483648
  f0116707: 'min-size, Germany, Dusseldorf', // 65536 < 4294967296
  f0118360: 'min-size, China, Hangzhou', // 131072 < 4294967296
  f0121768: 'min-size, China, Guangdong', // 131072 < 1073741824
  f0124335: 'min-size, Finland, Helsinki', // 65536 < 1073741824
  f0126868: 'min-size, Ukraine, Vinnytsia', // 65536 < 10485760
  f0127896: 'min-size, Bulgaria, Sofia', // 65536 < 17179869184
  f0142637: 'min-size, China, Mianyang', // 131072 < 4294967296
  f0145162: 'min-size, Japan, Kumamoto', // 65536 < 1073741824
  f0145874: 'min-size, Canada, Brampton', // 65536 < 17179869184
  f0157535: 'min-size, Canada, Brampton', // 65536 < 17179869184
  f0165400: 'min-size, Canada, Brampton', // 65536 < 17179869184
  f0187709: 'min-size, Russia, Moscow', // 65536 < 1073741824

  // Max Size

  // Min Ask

  f01241: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f01277: 'min-ask, Sweden, Stockholm', // 20000000 < 61035156250000
  f01280: 'min-ask, China, Wuxi', // 20000000 < 6103515625000000
  f01799: 'min-ask, China, Jinan + Singapore', // 20000000 < 12207031250000000
  f02381: 'min-ask, China, Dongguan', // 20000000 < 6103515625000
  f02415:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 61035156250000
  f02500: 'min-ask, Korea, Seongnam-si', // 20000000 < 610351562500
  f02501: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f02514: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f02520: 'min-ask, China, Hong Kong + Dongguan', // 20000000 < 61035156250000000000000
  f02606: 'min-ask, China, Zhejiang', // 20000000 < 122070312
  f02622: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f02623: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f02633:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 61035156250000
  f02645:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 61035156250000
  f03143: 'min-ask, Vietman, Ho Chi Minh City + China, Beijing + Shijiazhuang', // 20000000 < 122070312500000
  f03223: 'min-ask, USA', // 20000000 < 305175781250000
  f03273: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f03274: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f03275: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f03364: 'min-ask, China, Inner Mongolia', // 20000000 < 6103515625000000
  f03482: 'min-ask, China, Karamay', // 20000000 < 6103515625000000
  f03488: 'min-ask, Korea, Yeongdeungpo-dong', // 20000000 < 24414062500
  f03491:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 61035156250000
  f05315: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f05316: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f05317: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f05664: 'min-ask, China, Hong Kong', // 20000000 < 24414062500000
  f07850: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f07945: 'min-ask, China, Guangzhou', // 20000000 < 122070312500000000
  f07990:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 61035156250000
  f08025:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 61035156250000
  f08103: 'min-ask, China, Foshan', // 20000000 < 61035156
  f08257: 'min-ask, China, Zhejiang + Singapore', // 20000000 < 12207031250
  f08383: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f09693: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f09696: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f010010: 'min-ask, China, Changzhou', // 20000000 < 6103515625000000000000000
  f010253: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f010405: 'min-ask, China, Foshan', // 20000000 < 122070312500000
  f014365: 'min-ask, Australia, Turramurra + Sydney', // 20000000 < 120849609375000
  f015897: 'min-ask, China, Hong Kong', // 20000000 < 6103515625000000
  f015941: 'min-ask, Ukraine, Kyiv', // 20000000 < 24414062
  f017665: 'min-ask, China, Shenyang', // 20000000 < 122070312500000
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
  f019240: 'min-ask, China, Beijing', // 20000000 < 122070312500000
  f020541: 'min-ask, China, Shanghai', // 20000000 < 61035156250
  f020747: 'min-ask, China, Xiamen', // 20000000 < 122070312
  f022130: 'min-ask, Korea, Seodaemun-gu', // 20000000 < 61035156
  f022308: 'min-ask, China, Bozhou', // 20000000 < 6103515625
  f022352: 'min-ask, Norway, Borgen, TechHedge, @Reiers', // 20000000 < 21972656
  f022522: 'min-ask, China, Dongguan', // 20000000 < 61035156250000000
  f023152: 'min-ask, China, Shandong', // 20000000 < 12207031250000000000000000
  f023495: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f023825: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f023843: 'min-ask, China, Zhangjiakou', // 20000000 < 12207031250000000
  f024015: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f024016: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f024156: 'min-ask, USA', // 20000000 < 122070312500000
  f024184: 'min-ask, Korea, Yeongdeungpo-dong', // 20000000 < 24414062500
  f029344: 'min-ask, Korea, Seongnam-si', // 20000000 < 1220703125000
  f029401: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f029404: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f030203: 'min-ask, China, Shenzhen', // 20000000 < 6103515625000000
  f030379: 'min-ask, Korea, Uiwang', // 20000000 < 1220703125
  f030384: 'min-ask, China, Shenzhen', // 20000000 < 12207031250000
  f032913: 'min-ask, China, Shenzhen', // 20000000 < 122070312500
  f033123: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f033356: 'min-ask, Korea, Yeongdeungpo-dong', // 20000000 < 24414062500
  f033511: 'min-ask, China, Dongguan', // 20000000 < 1220703125
  f039800: 'min-ask, China, Chengdu', // 20000000 < 122070312500000
  f040218: 'min-ask, China, Wuxi', // 20000000 < 12207031250000000
  f042540: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f042558: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f042635: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f050022: 'min-ask, China, Changsha', // 20000000 < 6103515625000
  f052447: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f054370: 'min-ask, China, Dongguan', // 20000000 < 12207031250
  f056611: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f057614: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f057698: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f058000: 'min-ask, China, Suzhou', // 20000000 < 24414062
  f060072: 'min-ask, China, Chongqing', // 20000000 < 305175781250000
  f061740: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f062260: 'min-ask, China, Guangzhou', // 20000000 < 61035156250000
  f062318: 'min-ask, Korea, Naju', // 20000000 < 12207031250
  f062334: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f062770: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f062811: 'min-ask, China, Fuzhou', // 20000000 < 6103454589843750000
  f062982: 'min-ask, China, Fuzhou', // 20000000 < 6103454589843750000
  f065103: 'min-ask, USA + China, Suzhou + Guangzhou + Karamay', // 20000000 < 61035156250000
  f065280: 'min-ask, Korea, Songpa-gu, Data Store Ltd', // 20000000 < 1220703125
  f066104: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f069915: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f069919: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f070501: 'min-ask, USA + China, Hong Kong + Guangzhou', // 20000000 < 122070312500000
  f070999: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f071664: 'min-ask, China, Shangdong', // 20000000 < 6103515625000000000000000
  f071980: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f073552: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f073628: 'min-ask, USA, New Castle', // 20000000 < 122070312500000
  f074738: 'min-ask, Korea, Icheon-si', // 20000000 < 610351562500
  f078770: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f078772: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f079197: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f079247: 'min-ask, USA + China, Guangzhou + Beijing + Dongguan + Shenzhen', // 20000000 < 61035156250000
  f079301: 'min-ask, China, Guangzhou + Dongguan + Shenzhen, USA', // 20000000 < 122070312500000
  f080444: 'min-ask, China, Chengdu', // 20000000 < 122070312500000
  f080480: 'min-ask, Ukraine, Lviv', // 20000000 < 61035156
  f082356: 'min-ask, China, Jiaxing', // 20000000 < 610351562500
  f082452: 'min-ask, China, Dongguan', // 20000000 < 1220581054687500000
  f083625: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f083903: "min-ask, China, Xi'an", // 20000000 < 122192382812500
  f084879: 'min-ask, Korea, Seongnam-si', // 20000000 < 1220703125000
  f092514: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f094614: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f097386: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f098706: 'min-ask, Korea, Icheon-si', // 20000000 < 1220703125000
  f099239: 'min-ask, China, Hong Kong', // 20000000 < 12207031250000000
  f099884: 'min-ask, China, Chengdu', // 20000000 < 610351562500000
  f0100082: 'min-ask, Korea, Seongnam-si', // 20000000 < 1220703125000
  f0101087: 'min-ask, Korea', // 20000000 < 122070312500000
  f0102374: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102375: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102376: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f0102513: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f0102641: 'min-ask, China, Guangzhou', // 20000000 < 1220581054687500000
  f0102670: 'min-ask, China, Xiamen', // 20000000 < 121948242187500000
  f0103851: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f0107171: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0107308: 'min-ask, China, Shenyang', // 20000000 < 121948242187500000
  f0109713: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f0109901: 'min-ask, China, Huludao', // 20000000 < 122070312500000
  f0110283: 'min-ask, China, Zhongshan', // 20000000 < 12207031250000000000000000
  f0110442: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0110936: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0114808: 'min-ask, China, Shanghai', // 20000000 < 12207031250000000
  f0114924: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0115238: 'min-ask, China, Shenyang', // 20000000 < 61035156250000
  f0115744: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0120983: 'min-ask, China, Fujian', // 20000000 < 1220581054687500000
  f0121450: 'min-ask, China, Fujian', // 20000000 < 610290527343750000
  f0121958: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0123931: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0124102: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f0124554: 'min-ask, Korea, Gimhae', // 20000000 < 24414062
  f0126898: 'min-ask, China, Harbin', // 20000000 < 122070312500000
  f0128974: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0129072: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0131464: 'min-ask, USA, Ashburn', // 20000000 < 122070312500000000
  f0131654: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0132706: 'min-ask, China, Beijing', // 20000000 < 12207031250000000
  f0133999: 'min-ask, China, Changsha', // 20000000 < 610351562
  f0134565: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0134682: 'min-ask, China, Beijing', // 20000000 < 6103454589843750000
  f0134778: 'min-ask, China, Beijing', // 20000000 < 6103454589843750000
  f0134991: 'min-ask, China, Foshan', // 20000000 < 12206909179687500000
  f0135738: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0141614: 'min-ask, China, Fujian', // 20000000 < 1220703124877929687500000
  f0141634: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f0145313: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0146165: 'min-ask, China, Huizhou', // 20000000 < 122070190429687500000
  f0146875: 'min-ask, China, Karamay', // 20000000 < 61035156250000
  f0148399: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0149765: 'min-ask, China, Beijing', // 20000000 < 6103454589843750000
  f0149768: 'min-ask, China, Dongguan', // 20000000 < 122070312500000
  f0151281: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0151692: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0152747: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0152854: 'min-ask, China, Huizhou', // 20000000 < 1220581054687500000
  f0153176: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0154988: 'min-ask, China, Dongguan', // 20000000 < 61035095214843750000
  f0157769: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f0157941: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f0158142: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0158468: 'min-ask, China, Guangzhou', // 20000000 < 12206909179687500000
  f0165111: 'min-ask, China, Guangzhou', // 20000000 < 1220703125000000000
  f0215704: 'min-ask, Korea, Icheon-si', // 20000000 < 1220703125000
  f0216849: 'min-ask, China, Fujian', // 20000000 < 12207031249999999877929687500000
  f0218293: 'min-ask, China, Fujian', // 20000000 < 1220703124877929687500000
  f0220004: 'min-ask, China, Karamay', // 20000000 < 122070312500000

  // Error

  f03134: 'error, China, Cangzhou, 乔木信息', // deal failed: (State=26) handing off deal to node: write |1: broken pipe
  f07709: 'error, Korea, Dongjak-gu', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: SysErrOutOfGas(7)
  f09689: 'error, USA, Portland', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f010241: 'error, China, Beijing + USA, Portland, 6Block-P', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 2.385595691070875808 FIL, balance: 1.137184564132064476 FIL): not enough funds to execute transaction
  f014569: 'error, China, Yangzhou', // stream reset
  f016398: 'error, China, Shanghai', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f017193: "error, China, Xi'an + Singapore", // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f017242: 'error, China, Guangdong', // stream reset
  f019100: 'error, Romania, Cluj-Napoca', // stream reset
  f019824: 'error, USA', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.179999999964086239 FIL, balance: 0.092668830630241061 FIL): not enough funds to execute transaction
  f022820: 'error, China, Guangdong', // stream reset
  f023179: 'error, China, Fuzhou', // AddPiece failed: adding piece to sector: writing piece: no suitable P1 workers found
  f023198: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f024550: 'error, China, Wenzhou', // stream reset
  f024944: 'error, Korea, Yeongdeungpo-dong', // error awaiting deal pre-commit: handling applied event: deal 1593799 not found - deal may not have completed sealing before deal proposal start epoch, or deal may have been slashed
  f025025: 'error, China, Qingdao', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999952103408 FIL, balance: 0.010414142589193078 FIL): not enough funds to execute transaction
  f030125: 'error, China, Nantong', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.29999999996578962 FIL, balance: 0.171655331867495893 FIL): not enough funds to execute transaction
  f042567: 'error, China, Jinhua', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 4.0664434553250786 FIL, balance: 0.311183058722651253 FIL): not enough funds to execute transaction
  f054415: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f070475: 'error, China, Guyuan', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: gas fee cap too low
  f072737: 'error, China, Shanghai', // stream reset
  f079370: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f085777: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f086151: 'error, China, Dongguan', // error awaiting deal pre-commit: handling applied event: deal 1593829 not found - deal may not have completed sealing before deal proposal start epoch, or deal may have been slashed
  f090052: 'error, China, Suqian', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f093658: 'error, China, Fujian', // deal failed: (State=26) handing off deal to node: write |1: broken pipe
  f094901: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.49999999998919005 FIL, balance: 0.362365118512101744 FIL): not enough funds to execute transaction
  f097214: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.426449480872920071 FIL, balance: 0.387757970402262176 FIL): not enough funds to execute transaction
  f0101387: 'error, China, Shenzhen', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.5415333073434099 FIL, balance: 0.489326159491395194 FIL): not enough funds to execute transaction
  f0108979: 'error, Korea, Bupyeong-gu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.49999999999146896 FIL, balance: 0.082294211135716607 FIL): not enough funds to execute transaction
  f0109040: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0109043: 'error, China, Karamay', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 3.57070054909691776 FIL, balance: 0.415811107476371135 FIL): not enough funds to execute transaction
  f0110133: 'error, China, Ningbo', // stream reset
  f0110762: 'error, Korea, Seoul', // stream reset
  f0111885: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.419795665200051705 FIL, balance: 0.27757739109827699 FIL): not enough funds to execute transaction
  f0112713: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.32064820357325599 FIL, balance: 0.176181024369583869 FIL): not enough funds to execute transaction
  f0116436: 'error, Singapore', // EOF
  f0116445: 'error, Singapore', // EOF
  f0123536: 'error, China, Fuzhou', // stream reset
  f0129805: 'error, China, Zhejiang + Australia, Adelaide', // error awaiting deal pre-commit: handling applied event: deal 1593684 not found - deal may not have completed sealing before deal proposal start epoch, or deal may have been slashed
  f0131359: 'error, China, Fuzhou', // deal failed: (State=11) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.278222573676253334 FIL, balance: 0.185827096192653871 FIL): not enough funds to execute transaction
  f0131901: 'error, Korea, Daejeon', // deal failed: (State=11) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 10.793043594817418846 FIL, balance: 10.498216165137382625 FIL): validation failure
  f0136425: 'error, Korea, Busan', // unable to verify signature on deal response
  f0137489: 'error, UK, Deeside', // deal failed: (State=26) error calling node: AddFunds exit code: SysErrOutOfGas(7)
  f0145018: 'error, Korea', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.249999999955096349 FIL, balance: 0.139644554642297562 FIL): not enough funds to execute transaction
  f0148143: 'error, China, Tianjin', // AddPiece failed: adding piece to sector: writing piece: storage call error 0: creating unsealed sector file: writing trailer: writing trailer length: write /fcfs/f0148143/unsealed/s-t0148143-24949.tmp: operation not supported
  f0150782: 'error, China, Xiamen', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151341: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151366: 'error, China, Fuzhou + Xiamen', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0158993: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0162183: "error, China, Xi'an", // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0220632: 'error, China, Fuzhou', // stream reset

  // Dial backoff

  f07919: 'backoff, China, Beijing, Shanghai, Hunan',
  f015767: 'backoff, Russia, Khabarovsk + Japan, Khabarovsk + USA',
  f094128: 'backoff, China, Shenzhen',

  // Rejected

  f01247: 'rejected, Canada, Montreal', // Sorry, we are currently not accepting deals!
  f01248: 'rejected, Germany, Frankfurt', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f01289: 'rejected, China, Ningbo', // no online
  f02299: 'rejected, China, Beijing', // no online
  f02301: 'rejected, USA',
  f02303: 'rejected, Singapore',
  f02421: 'rejected, China, Deyang + Singapore', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02528: 'rejected, Singapore', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02529: 'rejected, China, Chongqing + Singapore',
  f02609: 'rejected, China, Shanghai', // no online
  f02613: 'rejected, China, Chongqing + Singapore',
  f02625: 'rejected, China, Shanghai', // no online
  f02626: 'rejected, Singapore', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02665: 'rejected, Netherlands, Amsterdam, fm-ops', // no online
  f02856: 'rejected, China, Chengdu', // no online
  f03000: 'rejected, China, Chengdu', // no online
  f03249: 'rejected, China, Yunfu',
  f03269: 'rejected, Australia', // getting client market balance failed
  f03344: 'rejected, China, Guangzhou', // no online
  f03362: 'rejected, Germany, Berlin',
  f08094: 'rejected, China, Guangzhou', // no online
  f08197: 'rejected, China, Foshan',
  f09620: 'rejected, China, Weifang',
  f09642: 'rejected, Sweden, Alvsjo',
  f09710: 'rejected, China, Shenzhen',
  f010038: 'rejected, China, Hangzhou + Singapore',
  f010400: 'rejected, China, Shenyang',
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
  f020523: 'rejected, China, Suzhou, changjiang', // sh: 1: VerifiedDeal:true: not found
  f021075: 'rejected, China, Chengdu', // no online
  f021254: 'rejected, NR', // f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa<nil>
  f021504: 'rejected, NR',
  f021536: 'rejected, NR', // getting client market balance failed
  f021714: 'rejected, China, Hong Kong',
  f021870: 'rejected, China, Jieyang',
  f021961: 'rejected, China, Fuzhou', // getting client market balance failed
  f022072: 'rejected, China, Jieyang',
  f022125: 'rejected, China, Shenzhen', // no online
  f022566: 'rejected, China, Nanchong',
  f022748: 'rejected, China, Xinyang', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f022832: 'rejected, China, Beijing',
  f023534: 'rejected, China, Chongqing',
  f023982: 'rejected, China, Chengdu',
  f023983: 'rejected, China, Chongqing',
  f029490: 'rejected, NR',
  f032888: 'rejected, China, Weifang',
  f033501: 'rejected, China, Shenzhen',
  f034258: 'rejected, China, Mianyang',
  f034567: 'rejected, China, Shenzhen',
  f034777: 'rejected, China, Chengdu', // no online
  f035436: 'rejected, China, Jiangsu', // no online
  f040332: 'rejected, China, Shenzhen', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f042391: 'rejected, China, Fuzhou', // no online
  f042896: 'rejected, China, Deyang', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f045756: 'rejected, China, Hangzhou', // getting client market balance failed
  f046248: 'rejected, China, Dongguan',
  f047843: 'rejected, China, Xiamen', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f047857: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f047868: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f048135: 'rejected, China, Chongqing, password interstellar', // sh: 1: /lotus_data/.lotusstorage/dealfilter.pl: not found
  f048968: 'rejected, NR', // no online
  f050260: 'rejected, China, Suzhou',
  f052701: 'rejected, China, Beijing',
  f053140: 'rejected, China, Shenzhen',
  f053141: 'rejected, China, Shenzhen',
  f055335: 'rejected, NR',
  f056226: 'rejected, NR',
  f056406: 'rejected, China, Taizhou', // no online
  f056573: 'rejected, China, Sichuan', // no online
  f057127: 'rejected, China, Suzhou', // no online
  f057466: 'rejected, China, Guangzhou', // no online
  f058369: 'rejected, USA, Boston', // no online
  f060114: 'rejected, China, Shenzhen',
  f062937: 'rejected, NR',
  f063869: 'rejected, NR',
  f066270: 'rejected, China, Dongguan', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f066781: 'rejected, China, Beijing',
  f066790: 'rejected, China, Beijing',
  f068528: 'rejected, China, Shanghai', // no online
  f068560: 'rejected, China, Changsha', // syntax error at /filecoin/lotusminer/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /filecoin/lotusminer/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /filecoin/lotusminer/dealfilter.pl line 16.
  f070802: 'rejected, NR',
  f071624: 'rejected, USA, Boyne City', // no online
  f073697: 'rejected, China, Karamay',
  f078899: 'rejected, NR',
  f079618: 'rejected, China, Beijing', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f079815: 'rejected, China, Hangzhou', // getting client market balance failed
  f080468: 'rejected, NR', // no online
  f081323: 'rejected, UK, Cambridge', // no online
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
  f098770: 'rejected, USA, Pontiac', // no online
  f0102358: 'rejected, China, Guizhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f0107118: 'rejected, China, Hangzhou + Zhejiang', // no online
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
  f0117146: 'rejected, China, Beijing', // no online
  f0118317: 'rejected, Singapore',
  f0118330: 'rejected, Singapore',
  f0118695: 'rejected, Korea, Seoul', // no online
  f0118837: 'rejected, Korea, Seoul', // no online
  f0118917: 'rejected, China, Shaoxing', // no online
  f0120546: 'rejected, Korea, Seoul', // no online
  f0120793: 'rejected, Korea, Seoul', // no online
  f0120909: 'rejected, China, Changsha', // syntax error at /filecoin/lotusminer/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /filecoin/lotusminer/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /filecoin/lotusminer/dealfilter.pl line 17.
  f0121260: 'rejected, China, Quinzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f0121602: 'rejected, China, Hong Kong', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0122415: 'rejected, Korea, Seoul', // no online
  f0123275: 'rejected, Korea, Seoul', // no online
  f0123281: 'rejected, Korea, Seoul', // no online
  f0124036: 'rejected, China, Nanchang', // no online
  f0125863: 'rejected, Korea, Seoul', // no online
  f0126037: 'rejected, Korea, Seoul', // no online
  f0126038: 'rejected, Korea, Seoul', // no online
  f0126478: 'rejected, China, Ningbo',
  f0126824: 'rejected, Korea, Seongnam-si', // no online
  f0127352: 'rejected, Korea, Seoul', // no online
  f0127353: 'rejected, Korea, Seoul', // no online
  f0127354: 'rejected, Korea, Seoul', // no online
  f0128580: 'rejected, Korea, Seoul', // no online
  f0128581: 'rejected, Korea, Seoul', // no online
  f0128582: 'rejected, Korea, Seoul', // no online
  f0129976: 'rejected, Korea, Gwangju', // no online
  f0131331: 'rejected, China, Beijing',
  f0131419: 'rejected, China, Beijing',
  f0131611: 'rejected, Korea, Jeju City', // no online
  f0132178: 'rejected, China, Ningbo',
  f0134285: "rejected, China, Ya'an + USA", // no online
  f0134516: 'rejected, Singapore',
  f0134518: 'rejected, China, Guangdong',
  f0135078: 'rejected, USA, Denver', // no online
  f0137475: 'rejected, China, Beijing',
  f0143160: 'rejected, China, Ningbo',
  f0143500: 'rejected, China, Zhejiang', // no online
  f0143928: 'rejected, China, Beijing',
  f0145784: 'rejected, Korea, Seoul', // no online
  f0146301: 'rejected, China, Shenzhen', // no online
  f0146393: 'rejected, China, Foshan', // no online
  f0147284: 'rejected, Korea, Seongnam-si', // no online
  f0147565: 'rejected, China, Shenzhen',
  f0147676: 'rejected, Korea, Seoul', // no online
  f0148391: 'rejected, China, Changsha + Japan, Tokyo', // no online
  f0149026: 'rejected, China, Shenzhen',
  f0151993: 'rejected, Korea, Icheon-si', // no online
  f0153986: 'rejected, China, Changsha', // syntax error at /filecoin/lotusminer/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /filecoin/lotusminer/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /filecoin/lotusminer/dealfilter.pl line 17.
  f0155004: 'rejected, Korea, Seoul', // no online
  f0155384: 'rejected, Korea, Seongnam-si', // no online
  f0155467: 'rejected, Korea, Seongnam-si', // no online
  f0156232: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f0156264: 'rejected, Korea, Seoul', // no online
  f0156333: 'rejected, China, Ningbo',
  f0158666: 'rejected, China, Beijing',
  f0158950: 'rejected, China, Beijing',
  f0159961: 'rejected, China, Chongqing', // deal start epoch is too far in the future: 524045 > 523478
  f0162385: 'rejected, China, Beijing',
  f0214631: 'rejected, Korea, Seoul', // no online
  f0216139: 'rejected, Korea, Goyang-si', // no online

  // Dial

  f01235: 'dial, Singapore', // * [/ip4/170.33.12.95/tcp/16668] dial tcp4 0.0.0.0:33373->170.33.12.95:16668: i/o timeout
  f01274: 'dial, China, Guangdong', // * [/ip4/27.34.168.4/tcp/3000] dial tcp4 0.0.0.0:33373->27.34.168.4:3000: i/o timeout
  f01287: 'dial, China, Jiaxing, MaiTian', // * [/ip4/172.16.2.123/tcp/5472] dial tcp4 0.0.0.0:33373->172.16.2.123:5472: i/o timeout  * [/ip4/122.225.68.92/tcp/5472] dial tcp4 0.0.0.0:33373->122.225.68.92:5472: i/o timeout
  f01291: 'dial, Sweden, Stockholm, tvsthlm', // * [/ip4/145.14.112.2/tcp/23456] dial tcp4 145.14.112.2:23456: connect: connection refused  * [/ip4/145.14.112.2/tcp/22334] dial tcp4 145.14.112.2:22334: connect: connection refused  * [/ip4/145.14.112.2/tcp/33445] dial tcp4 145.14.112.2:33445: connect: connection refused
  f01782: 'dial, China, Shanghai', // * [/ip4/139.196.240.164/tcp/11347] failed to negotiate security protocol: EOF
  f01800: 'dial, China, Shenzhen + Chengdu', // * [/ip4/182.131.4.48/tcp/33333] dial tcp4 182.131.4.48:33333: connect: connection refused
  f02405: 'dial, China, Shenzhen', // * [/ip4/119.147.213.59/tcp/4123] dial tcp4 119.147.213.59:4123: connect: connection refused  * [/ip4/192.168.231.206/tcp/4123] dial tcp4 0.0.0.0:33373->192.168.231.206:4123: i/o timeout
  f02422: "dial, China, Xi'an", // * [/ip4/117.38.4.82/tcp/22347] dial tcp4 0.0.0.0:40873->117.38.4.82:22347: i/o timeout
  f02438: 'dial, China, Guangdong', // * [/ip4/47.115.10.99/tcp/14567] dial tcp4 0.0.0.0:33373->47.115.10.99:14567: i/o timeout
  f02668: 'dial, China, Chengdu', // * [/ip4/118.123.228.191/tcp/48633] dial tcp4 0.0.0.0:33373->118.123.228.191:48633: i/o timeout
  f03225: 'dial, China, Guyuan', // * [/ip4/10.100.0.2/tcp/11111] dial tcp4 10.100.0.2:11111: connect: connection refused
  f03328: 'dial, China, Xinxiang, Golden Miner', // * [/ip4/27.50.142.61/tcp/2347] dial tcp4 27.50.142.61:2347: i/o timeout
  f03347: 'dial, China, Shenzhen', // * [/ip4/103.44.253.59/tcp/33455] dial tcp4 103.44.253.59:33455: connect: connection refused  * [/ip4/103.119.132.105/tcp/33455] dial tcp4 0.0.0.0:33373->103.119.132.105:33455: i/o timeout
  f07819: 'dial, China, Wuxi, YC--wuxi', // * [/ip4/58.215.232.74/tcp/10100] dial tcp4 58.215.232.74:10100: connect: connection refused  * [/ip4/192.168.1.19/tcp/1010] dial tcp4 0.0.0.0:33373->192.168.1.19:1010: i/o timeout
  f08264: 'dial, China, Xianning', // * [/ip4/103.222.191.115/tcp/1161] dial tcp4 0.0.0.0:33373->103.222.191.115:1161: i/o timeout
  f08285: 'dial, Latvia, Riga, stander', // * [/ip4/109.73.97.103/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBBghMwnobTZP1Buw72KVEuzURgLPUYaq5WRF1wcygy9C, but remote key matches 12D3KooWMF32Az9K6knsUwttFYUJ4qrArvDgg1bnAdUw3mt6eEZr
  f08532: 'dial, USA', // * [/ip4/162.244.80.116/tcp/8888] dial tcp4 162.244.80.116:8888: connect: no route to host  * [/ip4/162.244.80.116/tcp/7777] dial tcp4 162.244.80.116:7777: connect: no route to host
  f09037: 'dial, Singapore', // * [/ip4/170.33.12.95/tcp/16666] dial tcp4 0.0.0.0:33373->170.33.12.95:16666: i/o timeout
  f09652: 'dial, Singapore', // * [/ip4/170.33.9.50/tcp/32632] dial tcp4 0.0.0.0:33373->170.33.9.50:32632: i/o timeout
  f010247: 'dial, China, Yantai', // * [/ip4/122.14.201.169/tcp/10240] dial tcp4 122.14.201.169:10240: connect: connection refused
  f010399: 'dial, China, Guangzhou', // * [/ip4/183.2.154.156/tcp/36699] dial tcp4 0.0.0.0:33373->183.2.154.156:36699: i/o timeout
  f010491: 'dial, China, Shenzhen', // * [/ip4/116.24.57.90/tcp/8888] dial tcp4 0.0.0.0:33373->116.24.57.90:8888: i/o timeout
  f010501: 'dial, China, Hangzhou, Interstellar Roewe', // * [/ip4/183.134.218.26/tcp/21735] dial tcp4 0.0.0.0:33373->183.134.218.26:21735: i/o timeout
  f010523: 'dial, China, Beijing, Interstellar Roewe', // * [/ip4/123.58.99.210/tcp/21735] dial tcp4 0.0.0.0:33373->123.58.99.210:21735: i/o timeout
  f014394: 'dial, China, Suzhou, IPFSCloud', // * [/ip4/222.92.5.147/tcp/42799] dial tcp4 222.92.5.147:42799: connect: connection refused
  f014395: 'dial, China, Dongguan', // * [/ip4/125.93.73.102/tcp/51105] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJyNmap2Z6WWb6xBqDwUpKeFkGHaBHDkMKhrkd6jj6FEY, but remote key matches 12D3KooWB6MM5Fda1RdDyTdJCPMpvHFq6HSJfPV9DeoqGSbfwe1d
  f015942: 'dial, China, Ningbo', // * [/ip4/63.209.33.203/tcp/9883] dial tcp4 63.209.33.203:9883: connect: connection refused  * [/ip4/95.179.171.100/tcp/9882] dial tcp4 95.179.171.100:9882: connect: connection refused  * [/ip4/45.32.19.57/tcp/9881] dial tcp4 45.32.19.57:9881: connect: connection refused  * [/ip4/123.137.128.188/tcp/3698] dial tcp4 123.137.128.188:3698: connect: connection refused  * [/ip4/155.138.158.107/tcp/9884] dial tcp4 0.0.0.0:33373->155.138.158.107:9884: i/o timeout
  f016594: 'dial, Germany', // * [/ip4/135.181.76.245/tcp/12345] dial tcp4 0.0.0.0:33373->135.181.76.245:12345: i/o timeout
  f019029: 'dial, Serbia, Boljevac', // * [/ip4/178.220.25.96/tcp/46717] dial tcp4 0.0.0.0:33373->178.220.25.96:46717: i/o timeout
  f019354: 'dial, Germany, Frankfurt', // * [/ip4/128.1.78.98/tcp/31437] dial tcp4 0.0.0.0:40873->128.1.78.98:31437: i/o timeout
  f020223: 'dial, China, Guiyang', // * [/ip4/111.85.176.10/tcp/10240] dial tcp4 0.0.0.0:33373->111.85.176.10:10240: i/o timeout
  f020436: 'dial, China, Beijing', // * [/ip4/123.115.222.90/tcp/24002] dial tcp4 123.115.222.90:24002: connect: connection refused
  f020904: 'dial, Korea, Uijeongbu-si, FILTop', // * [/ip4/119.193.190.72/tcp/5472] dial tcp4 119.193.190.72:5472: connect: connection refused
  f022853: 'dial, China, Fuzhou', // * [/ip4/150.242.97.226/tcp/11105] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRrw3MpPrr5gaVyv9hHAyLosb76osgrGAKuByXycihWEY, but remote key matches 12D3KooWMarcqTkhZsmPHAZmZvaGNh6WC16hEfVhA6fvyJVe5HVB
  f023001: 'dial, China, Changsha', // * [/ip4/120.24.145.114/tcp/7001] dial tcp4 120.24.145.114:7001: connect: connection refused
  f023219: 'dial, China, Beijing + Zhangjiakou', // * [/ip4/116.132.221.24/tcp/42990] dial tcp4 0.0.0.0:40873->116.132.221.24:42990: i/o timeout
  f023581: 'dial, China, Hong Kong, mine-much', // * [/ip4/183.61.251.226/tcp/34145] dial tcp4 183.61.251.226:34145: connect: connection refused
  f023876: 'dial, China, Fuzhou', // * [/ip4/220.176.125.51/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAfpdzwcpqchJrRhJMY9g8i8Dr1VMiiSNB7YTfMy2rrE4, but remote key matches 12D3KooWRKoJ2VrPziXJ9KiC3MA63qG1Hccke786PQdbtbeESDTv
  f025007: 'dial, Korea, Gyeonggi-do, PINBYTES-eCUBE', // * [/ip4/222.112.183.197/tcp/24001] dial tcp4 0.0.0.0:33373->222.112.183.197:24001: i/o timeout
  f025019: 'dial, China, Taiwan, Hsinchu', // * [/ip4/140.113.194.250/tcp/24002] dial tcp4 0.0.0.0:33373->140.113.194.250:24002: i/o timeout
  f030327: 'dial, China, Beijing', // * [/ip4/124.250.42.202/tcp/24567] dial tcp4 0.0.0.0:33373->124.250.42.202:24567: i/o timeout
  f033549: 'dial, China, Quzhou', // * [/ip4/123.157.96.110/tcp/20001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCiseZ7iZE7uSs2c2Ws2KgUbPCctYi5r5M1Z1sew9dSAv, but remote key matches 12D3KooWSRyy2kbgsQVMjHBwzwU3kF9iJvmF2RGjakL3XA3Mj16g
  f034544: 'dial, NR', // * [/ip4/183.131.58.134/tcp/14567] dial tcp4 0.0.0.0:33373->183.131.58.134:14567: i/o timeout
  f034545: 'dial, NR', // * [/ip4/183.131.58.102/tcp/14567] dial tcp4 0.0.0.0:33373->183.131.58.102:14567: i/o timeout
  f034548: 'dial, NR', // * [/ip4/183.131.58.70/tcp/14567] dial tcp4 0.0.0.0:33373->183.131.58.70:14567: i/o timeout
  f034592: 'dial, NR', // * [/ip4/119.147.213.217/tcp/45137] dial tcp4 0.0.0.0:33373->119.147.213.217:45137: i/o timeout
  f034701: 'dial, China, Shenzhen', // * [/ip4/103.44.247.136/tcp/51105] dial tcp4 0.0.0.0:33373->103.44.247.136:51105: i/o timeout
  f046043: 'dial, China, Shanghai', // * [/ip4/175.24.25.61/tcp/23459] dial tcp4 0.0.0.0:33373->175.24.25.61:23459: i/o timeout
  f046073: 'dial, China, Shanghai', // * [/ip4/175.24.25.61/tcp/23458] dial tcp4 0.0.0.0:33373->175.24.25.61:23458: i/o timeout
  f046074: 'dial, China, Shanghai', // * [/ip4/175.24.25.61/tcp/23457] dial tcp4 0.0.0.0:33373->175.24.25.61:23457: i/o timeout
  f048172: 'dial, China, Suzhou', // * [/ip4/222.92.5.147/tcp/42899] dial tcp4 222.92.5.147:42899: connect: connection refused
  f048192: 'dial, China, Suzhou', // * [/ip4/222.92.5.147/tcp/42999] dial tcp4 222.92.5.147:42999: connect: connection refused
  f053229: 'dial, NR', // * [/ip4/172.18.112.203/tcp/10241] dial tcp4 0.0.0.0:33373->172.18.112.203:10241: i/o timeout
  f054163: 'dial, China, Dongguan', // * [/ip4/113.105.174.22/tcp/10000] dial tcp4 113.105.174.22:10000: connect: connection refused
  f054677: 'dial, Finland, Helsinki', // * [/ip4/194.100.215.188/tcp/24001] dial tcp4 194.100.215.188:24001: i/o timeout
  f055123: 'dial, Korea, Busan', // * [/ip4/119.199.251.92/tcp/24001] dial tcp4 119.199.251.92:24001: i/o timeout
  f055522: 'dial, USA', // * [/ip4/207.2.201.158/tcp/24002] dial tcp4 0.0.0.0:33373->207.2.201.158:24002: i/o timeout
  f057842: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.39/tcp/23451] dial tcp4 0.0.0.0:33373->59.6.127.39:23451: i/o timeout
  f061043: 'dial, China, Changsha', // * [/ip4/124.232.165.204/tcp/24001] dial tcp4 0.0.0.0:33373->124.232.165.204:24001: i/o timeout
  f061959: 'dial, NR', // * [/ip4/172.18.113.213/tcp/10241] dial tcp4 0.0.0.0:33373->172.18.113.213:10241: i/o timeout
  f062375: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.45/tcp/23451] dial tcp4 0.0.0.0:33373->59.6.127.45:23451: i/o timeout
  f062492: 'dial, China, Hong Kong', // * [/ip4/218.250.156.81/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCKr7XcRTgZUGVbptwoc29bWhBz4kSidrwwm2v3Q7q3nT, but remote key matches 12D3KooWLDecMnczdXMecPRtHb4ppWp12ErQSUfVarEN7sZ4wLGT
  f062931: 'dial, NR', // * [/ip4/115.231.84.133/tcp/14567] dial tcp4 0.0.0.0:33373->115.231.84.133:14567: i/o timeout
  f063173: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.46/tcp/23451] dial tcp4 0.0.0.0:33373->59.6.127.46:23451: i/o timeout
  f063628: 'dial, NR', // * [/ip4/127.0.0.1/tcp/40057] dial tcp4 127.0.0.1:40057: connect: connection refused
  f064442: 'dial, Japan', // * [/ip4/103.204.64.101/tcp/24002] dial tcp4 103.204.64.101:24002: connect: connection refused
  f065732: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.51/tcp/23451] dial tcp4 0.0.0.0:33373->59.6.127.51:23451: i/o timeout
  f066102: 'dial, NR', // * [/ip4/172.18.112.93/tcp/10241] dial tcp4 0.0.0.0:33373->172.18.112.93:10241: i/o timeout
  f066259: 'dial, NR', // * [/ip4/172.19.101.33/tcp/10241] dial tcp4 0.0.0.0:33373->172.19.101.33:10241: i/o timeout
  f066566: 'dial, Korea, Gwangju', // * [/ip4/59.0.151.2/tcp/24302] dial tcp4 59.0.151.2:24302: connect: connection refused
  f066568: 'dial, Korea, Gwangju, aoc-0002', // * [/ip4/125.136.24.107/tcp/24202] dial tcp4 125.136.24.107:24202: connect: connection refused
  f067083: 'dial, Russia, Moscow', // * [/ip4/195.42.165.37/tcp/24003] dial tcp4 195.42.165.37:24003: connect: connection refused
  f067195: 'dial, China, Huizhou', // * [/ip4/218.13.75.238/tcp/54001] dial tcp4 0.0.0.0:33373->218.13.75.238:54001: i/o timeout
  f067314: 'dial, China, Ningbo', // * [/ip4/101.71.134.194/tcp/24001] dial tcp4 101.71.134.194:24001: connect: connection refused
  f067545: 'dial, Canada, Kitchener', // * [/ip4/24.52.248.93/tcp/61001] dial tcp4 0.0.0.0:33373->24.52.248.93:61001: i/o timeout
  f068096: 'dial, China, Sichuan', // * [/ip4/222.213.23.200/tcp/38999] dial tcp4 222.213.23.200:38999: connect: connection refused
  f071190: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.200/tcp/23451] dial tcp4 59.6.127.200:23451: connect: connection refused
  f071914: 'dial, China, Beijing', // * [/ip4/61.173.83.217/tcp/44959] dial tcp4 61.173.83.217:44959: connect: connection refused
  f073048: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.103/tcp/23451] dial tcp4 0.0.0.0:33373->59.6.127.103:23451: i/o timeout
  f073535: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.150/tcp/23451] dial tcp4 0.0.0.0:33373->59.6.127.150:23451: i/o timeout
  f078425: 'dial, Korea, Bucheon-si', // * [/ip4/211.226.188.140/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJsXnwrnv8CByAYsBq5GgsnTBwamYxvgvLD4NuUx6DJYQ, but remote key matches 12D3KooWQWqrcjPmgTesjjzAi1UjobvxHpMFr7EvEdaam62zq4zE
  f079285: 'dial, NR', // * [/ip4/172.22.20.109/tcp/10241] dial tcp4 0.0.0.0:33373->172.22.20.109:10241: i/o timeout
  f082250: 'dial, China, Guilin', // * [/ip4/111.59.127.29/tcp/33110] dial tcp4 0.0.0.0:33373->111.59.127.29:33110: i/o timeout
  f082669: 'dial, USA, Daytona Beach', // * [/ip4/172.3.161.97/tcp/24001] dial tcp4 172.3.161.97:24001: connect: connection refused
  f082958: 'dial, NR', // * [/ip4/0.0.0.0/tcp/42547] dial tcp4 0.0.0.0:42547: connect: connection refused
  f083235: 'dial, Serbia, Belgrade', // * [/ip4/178.220.81.206/tcp/24001] dial tcp4 178.220.81.206:24001: i/o timeout
  f085904: 'dial, China, Chongqing', // * [/ip4/183.66.216.198/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWN4CXBpoHsAJqqxHiivavxg3yVSQ6TwDgHbWJGo6nt9P6, but remote key matches 12D3KooWFgh1CgQmGgWqsVJFJ5pr2Rg3ab7nyYgx5TUe4PSDbbtN
  f086610: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.5/tcp/23451] dial tcp4 59.6.127.5:23451: connect: connection refused
  f087931: 'dial, China, Beijing', // * [/ip4/222.128.6.188/tcp/16000] dial tcp4 222.128.6.188:16000: connect: connection refused
  f088305: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.8/tcp/23451] dial tcp4 59.6.127.8:23451: connect: connection refused
  f088404: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.11/tcp/23451] dial tcp4 59.6.127.11:23451: connect: connection refused
  f089201: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.13/tcp/23451] dial tcp4 59.6.127.13:23451: connect: connection refused
  f090086: 'dial, Korea', // * [/ip4/121.189.18.170/tcp/24001] dial tcp4 121.189.18.170:24001: connect: connection refused
  f090363: 'dial, China, Beijing', // * [/ip4/106.12.253.161/tcp/18623] dial tcp4 106.12.253.161:18623: connect: connection refused
  f090747: 'dial, Korea, Anyang-si', // * [/ip4/210.120.112.161/tcp/24001] dial tcp4 0.0.0.0:33373->210.120.112.161:24001: i/o timeout
  f091139: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.230/tcp/23451] dial tcp4 0.0.0.0:33373->59.6.127.230:23451: i/o timeout
  f092630: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.1/tcp/23451] dial tcp4 0.0.0.0:33373->59.6.127.1:23451: i/o timeout
  f092776: 'dial, Korea, Gimhae', // * [/ip4/118.46.119.62/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWDmej9uytJ7ry6YSgQGvos64nP99C5gBpA4HRzjbckh7r, but remote key matches 12D3KooWHk2aEyiTFJVvxeGbxG71KuZx4uEwMiAqS4AWYtciSAZ3
  f094085: 'dial, Japan, Ota-ku', // * [/ip4/59.138.253.69/tcp/55555] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKHDBe8Xc1VgGi7t4MBTTaPzT3XgJeGxUq1cZTi75fcgB, but remote key matches 12D3KooWRLT5vVuXg9oPHPnECXmrifes2BjsubPfxvNrDu7uanzR
  f094765: 'dial, NR', // * [/ip4/218.68.85.213/tcp/12350] dial tcp4 218.68.85.213:12350: connect: connection refused
  f094899: 'dial, Korea', // * [/ip4/211.48.169.253/tcp/23233] dial tcp4 211.48.169.253:23233: i/o timeout
  f095049: 'dial, Korea, Bucheon-si', // * [/ip4/119.197.20.225/tcp/38833] dial tcp4 0.0.0.0:33373->119.197.20.225:38833: i/o timeout
  f095296: 'dial, China, Suqian', // * [/ip4/222.187.238.207/tcp/24001] failed to negotiate security protocol: read tcp4 66.70.191.245:33373->222.187.238.207:24001: read: connection reset by peer
  f095506: 'dial, China, Ningxia', // * [/ip4/161.189.220.216/tcp/36002] dial tcp4 0.0.0.0:33373->161.189.220.216:36002: i/o timeout
  f096224: 'dial, China, Chongqing', // * [/ip4/183.66.216.198/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFKQpUuhSfMCkYKCnMWRkCFVxBWYv4hyrdeC3cRaDUk4u, but remote key matches 12D3KooWFgh1CgQmGgWqsVJFJ5pr2Rg3ab7nyYgx5TUe4PSDbbtN
  f0113008: 'dial, China, Hong Kong', // * [/ip4/18.166.250.203/tcp/24001] dial tcp4 0.0.0.0:33373->18.166.250.203:24001: i/o timeout
  f0130961: 'dial, Korea, Seongnam-si', // * [/ip4/121.165.242.197/tcp/24001] dial tcp4 121.165.242.197:24001: i/o timeout
  f0213894: 'dial, China, Hangzhou', // * [/ip4/123.57.143.105/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRpv8oDC6BubepPKgJJ4pWRQN97gNaz1fevjWTPcKD3Fi, but remote key matches 12D3KooWNG7BT36QQyFjvpNJJ2G9rozhLHeZsqa2iYswZFBvonez
  f0219415: 'dial, USA, Boardman', // * [/ip4/54.191.229.184/tcp/24001] dial tcp4 0.0.0.0:33373->54.191.229.184:24001: i/o timeout

  // XNR (Not routable)

  f01231: 'xnr, Singapore',
  f02388: 'xnr, Netherlands, Amersfoort, Kroketje',
  f02416: 'xnr, China, Guangdong, 星际无限',
  f02769: 'xnr, NR',
  f02770: 'xnr, China, Hong Kong',
  f02775: 'xnr, China, Hong Kong',
  f02777: 'xnr, NR',
  f02778: 'xnr, NR',
  f02779: 'xnr, NR',
  f010202: 'xnr, Singapore',
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
  f014335: 'xnr, NR',
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
  f014686: 'xnr, Singapore',
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
  f015877: 'xnr, China, Jiaxing + USA',
  f015885: 'xnr, China, Jiaxing',
  f015891: 'delist, China, Shanghai',
  f015901: 'delist, Germany',
  f015902: 'delist, Germany',
  f015920: 'delist, China, Guangdong',
  f015932: 'xnr, NR',
  f015935: 'delist, China, Sichuan',
  f015938: 'delist, Canada, Waterloo',
  f015940: 'delist, Netherlands, Amsterdam',
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
  f018538: 'xnr, China, Huzhou',
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
  f020398: 'xnr, China, Zhangjiakou',
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
  f020914: 'delist, NR',
  f020934: 'delist, NR',
  f020939: 'delist, NR',
  f020957: 'xnr, NR',
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
  f021695: 'xnr, USA',
  f021699: 'delist, NR',
  f021704: 'xnr, NR',
  f021710: 'xnr, China, Shijiazhuang',
  f021725: 'delist, NR',
  f021976: 'delist, NR',
  f022015: 'delist, China, Hangzhou',
  f022016: 'delist, NR',
  f022030: 'xnr, NR',
  f022033: 'delist, NR',
  f022038: 'xnr, NR',
  f022070: 'delist, China, Jieyang',
  f022084: 'delist, China, Shaanxi',
  f022089: 'delist, China, Beijing',
  f022091: 'delist, NR',
  f022093: 'xnr, NR',
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
  f022336: 'xnr, NR',
  f022337: 'delist, NR',
  f022338: 'xnr, NR',
  f022343: 'delist, China, Dongguan',
  f022361: 'xnr, NR',
  f022372: 'delist, China, Chengdu',
  f022373: 'xnr, Singapore',
  f022374: 'xnr, NR',
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
  f022922: 'xnr, China, Shenzhen, CAAP-MEG',
  f022926: 'delist, NR',
  f022930: 'delist, NR',
  f022954: 'delist, NR',
  f022967: 'delist, Korea, Seoul',
  f022969: 'delist, China, Chengdu',
  f022970: 'xnr, NR',
  f022996: 'xnr, NR',
  f023021: 'delist, Korea, Yeongdeungpo-dong',
  f023108: 'delist, China, Dongguan',
  f023159: 'delist, NR',
  f023210: 'delist, China, Dongguan',
  f023254: 'delist, NR',
  f023463: 'delist, NR',
  f023482: 'delist, NR',
  f023499: 'xnr, NR',
  f023501: 'delist, China, Mianyang',
  f023505: 'delist, NR',
  f023526: 'delist, China, Chongqing',
  f023535: 'delist, China, Hong Kong',
  f023560: 'delist, NR',
  f023568: 'delist, NR',
  f023571: 'delist, NR',
  f023626: 'xnr, NR',
  f023627: 'xnr, China, Zhongwei',
  f023643: 'delist, NR',
  f023647: 'delist, Korea, Gangseo-gu',
  f023649: 'delist, Korea, Seoul, LS&NIHON',
  f023651: 'xnr, NR',
  f023661: 'delist, China, Zhejiang',
  f023678: 'xnr, China, Jiaxing',
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
  f024483: 'xnr, NR',
  f024496: 'delist, China, Dongguan',
  f024526: 'delist, Korea',
  f024556: 'delist, NR',
  f024557: 'delist, NR',
  f024558: 'delist, NR',
  f024559: 'delist, NR',
  f024563: 'xnr, NR',
  f024611: 'delist, China, Dongguan',
  f024802: 'xnr, NR',
  f024894: 'xnr, NR',
  f024895: 'xnr, undefined',
  f024902: 'delist, Korea, Incheon',
  f024903: 'delist, undefined',
  f024969: 'delist, NR',
  f024972: 'xnr, undefined',
  f025005: 'xnr, NR',
  f025028: 'delist, NR',
  f025032: 'delist, China, Beijing',
  f025044: 'xnr, undefined',
  f029368: 'delist, Korea, Gangseo-gu',
  f029421: 'delist, undefined',
  f029477: 'delist, undefined',
  f029529: 'delist, China, Dongguan',
  f029546: 'delist, NR',
  f029566: 'delist, NR',
  f029595: 'delist, undefined',
  f029619: 'delist, undefined',
  f029632: 'delist, undefined',
  f029649: 'xnr, China, Beijing',
  f030230: 'delist, China, Sichuan',
  f030231: 'delist, China, Hunan',
  f030249: 'xnr, NR',
  f030272: 'xnr, undefined',
  f030386: 'delist, NR',
  f030509: 'xnr, undefined',
  f030510: 'xnr, undefined',
  f030511: 'xnr, undefined',
  f030514: 'delist, NR',
  f030518: 'delist, China, Wuhan',
  f030521: 'delist, China, Hong Kong',
  f030531: 'delist, NR',
  f030608: 'delist, China, Mianyang',
  f030641: 'delist, China, Shaanxi',
  f030649: 'xnr, NR',
  f032833: 'xnr, NR',
  f032850: 'xnr, NR',
  f032865: 'delist, USA, Redmond',
  f032887: 'delist, undefined',
  f032904: 'delist, undefined',
  f032922: 'delist, undefined',
  f033014: 'delist, NR',
  f033028: 'delist, China, Mianyang',
  f033111: 'delist, China, Shanghai',
  f033124: 'delist, China, Shanghai',
  f033125: 'delist, NR',
  f033130: 'xnr, NR',
  f033209: 'xnr, NR',
  f033224: 'delist, NR',
  f033384: 'xnr, NR',
  f033399: 'xnr, NR',
  f033456: 'xnr, NR',
  f033463: 'xnr, NR',
  f033517: 'xnr, China, Changsha',
  f033545: 'delist, China, Shenzhen + USA',
  f034084: 'delist, China, Chongqing',
  f034229: 'xnr, USA, Minneapolis',
  f034311: 'xnr, Korea, Gangnam-gu',
  f034362: 'xnr, China, Sichuan',
  f034566: 'xnr, NR',
  f034581: 'xnr, NR',
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
  f042901: 'delist, Finland, Helsinki',
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
  f047858: 'xnr, China, Wuhan',
  f048545: 'xnr, China, Chengdu',
  f048975: 'xnr, NR',
  f048986: 'xnr, NR',
  f049911: 'xnr, China, Yunfu',
  f049990: 'xnr, Korea, Incheon',
  f052503: 'xnr, NR',
  f052562: 'xnr, NR',
  f052740: 'xnr, China, Shaanxi',
  f053446: 'xnr, NR',
  f054120: 'xnr, NR',
  f054267: 'xnr, NR',
  f054389: 'xnr, China, Chongqing',
  f054412: 'xnr, NR',
  f054414: 'xnr, NR',
  f054417: 'xnr, NR',
  f054418: 'xnr, NR',
  f054420: 'xnr, NR',
  f054422: 'xnr, NR',
  f054464: 'xnr, NR',
  f054526: 'xnr, NR',
  f055040: 'xnr, China, Fujian',
  f055446: 'xnr, NR',
  f056227: 'xnr, NR',
  f056393: 'xnr, NR',
  f057070: 'xnr, NR',
  f057115: 'xnr, China, Nanyang',
  f057560: 'xnr, NR',
  f057618: 'xnr, NR',
  f057683: 'xnr, NR',
  f058003: 'xnr, China, Shenzhen',
  f058321: 'xnr, China, Dongguan',
  f058349: 'xnr, NR',
  f059280: 'xnr, China, Shenzhen',
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
  f061407: 'xnr, China, Shenzhen',
  f061430: 'xnr, Korea, Naju',
  f061503: 'xnr, NR',
  f062245: 'xnr, NR',
  f062445: 'xnr, China, Shenzhen',
  f062449: 'xnr, NR',
  f062475: 'xnr, NR',
  f062552: 'xnr, NR',
  f062587: 'xnr, NR',
  f062619: 'xnr, NR',
  f062735: 'xnr, China, Hong Kong',
  f063780: 'xnr, China, Shenyang',
  f063921: 'xnr, China, Ili',
  f063996: 'xnr, China, Sichuan',
  f064688: 'xnr, NR',
  f064855: 'xnr, NR',
  f064908: 'xnr, NR',
  f065113: 'xnr, NR',
  f065132: 'xnr, Denmark, Vipperod',
  f065174: 'xnr, NR',
  f065225: 'xnr, China, Dongguan',
  f065250: 'xnr, NR',
  f065266: 'xnr, China, Hefei',
  f065391: 'xnr, NR',
  f065426: 'xnr, Korea, Gimpo-si',
  f065477: 'xnr, NR',
  f065578: 'xnr, NR',
  f065610: 'xnr, NR',
  f065686: 'xnr, NR',
  f065689: 'xnr, NR',
  f065718: 'xnr, China, Taiwan, Hsinchu',
  f065853: 'xnr, Korea, Seongnam-si',
  f066075: 'xnr, NR',
  f066210: 'xnr, NR',
  f066289: 'xnr, NR',
  f066302: 'xnr, NR',
  f066465: 'xnr, NR',
  f066476: 'xnr, NR',
  f066734: 'xnr, NR',
  f066845: 'xnr, China, Dongguan',
  f067185: 'xnr, Korea, Gwangju',
  f067283: 'xnr, Korea, Seongnam-si',
  f067375: 'xnr, NR',
  f067598: 'xnr, NR',
  f068253: 'xnr, NR',
  f068556: 'xnr, NR',
  f068809: 'xnr, NR',
  f068898: 'xnr, China, Fuzhou',
  f069448: 'xnr, NR',
  f069450: 'xnr, NR',
  f070288: 'xnr, China, Zhangzhou',
  f070337: 'xnr, China, Zhangzhou',
  f070730: 'xnr, NR',
  f070747: 'xnr, China, Shenzhen',
  f070756: 'xnr, China, Beijing',
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
  f077761: 'xnr, NR',
  f078516: 'xnr, NR',
  f079092: 'xnr, NR',
  f079719: 'xnr, NR',
  f080131: 'xnr, NR',
  f080868: 'xnr, NR',
  f080945: 'xnr, China, Shenzhen',
  f081222: 'xnr, China, Changzhou',
  f081969: 'xnr, NR',
  f082054: 'xnr, China, Hefei',
  f082095: 'xnr, NR',
  f082175: 'xnr, China, Shenyang',
  f082543: 'xnr, Korea, Osan',
  f082590: 'xnr, China, Taizhou',
  f082635: 'xnr, NR',
  f082698: "xnr, USA, Xi'an",
  f082730: 'xnr, NR',
  f083419: 'xnr, NR',
  f083474: 'xnr, NR',
  f083542: 'xnr, NR',
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
  f085947: 'xnr, NR',
  f086028: 'xnr, NR',
  f086204: 'xnr, NR',
  f086222: 'xnr, NR',
  f086240: 'xnr, NR',
  f086366: 'xnr, NR',
  f086381: 'xnr, NR',
  f086442: 'xnr, NR',
  f086450: 'xnr, NR',
  f086572: 'xnr, NR',
  f086988: 'xnr, NR',
  f087096: 'xnr, NR',
  f087868: 'xnr, NR',
  f088002: 'xnr, NR',
  f089819: 'xnr, NR',
  f089920: 'xnr, NR',
  f090104: 'xnr, China, Dongguan',
  f090481: 'xnr, NR',
  f090492: 'xnr, NR',
  f090851: 'xnr, China, Ningxia',
  f091095: 'xnr, Korea, Gwangju + Buk-gu',
  f091143: 'xnr, NR',
  f091243: 'xnr, NR',
  f091395: 'xnr, NR',
  f092157: 'xnr, NR',
  f092228: 'xnr, NR',
  f092724: 'xnr, China, Beijing',
  f092887: 'xnr, NR',
  f092971: 'xnr, China, Chongqing',
  f093212: 'xnr, Netherlands',
  f093554: 'xnr, China, Zhangzhou',
  f093701: 'xnr, NR',
  f093907: 'xnr, NR',
  f094003: 'xnr, NR',
  f094625: 'xnr, NR',
  f094825: 'xnr, Korea, Gwangju',
  f094847: 'xnr, NR',
  f094869: 'xnr, China, Shanghai',
  f094894: 'xnr, Korea, Gwangju',
  f095398: 'xnr, Korea, Sejong',
  f095528: 'xnr, China, Hangzhou',
  f095833: 'xnr, Korea, Yongin-si',
  f0125962: 'delist, Korea, Yongin-si',
  f0127151: 'delist, Korea, Yongin-si',
  f0127157: 'delist, Korea, Yongin-si',
  f0127256: 'delist, Korea, Yongin-si',
  f0128238: 'delist, Korea, Yongin-si',
  f0128239: 'delist, Korea, Yongin-si',
  f0128242: 'xnr, Korea, Yongin-si',
  f0136014: 'xnr, China, Suzhou',
  f0142135: "xnr, China, Ya'an + USA",
  f0155687: 'xnr, China, Guangzhou',
  f0158265: 'xnr, China, Hefei',
  f0216068: 'delist, Romania, Iasi',

  // Delisted

  f01000: 'delist, NR - bootstrap', // carry-over
  f01001: 'delist, NR - bootstrap', // carry-over
  f01002: 'delist, NR - bootstrap', // carry-over
  f01013: 'delist, NR', // carry-over
  f01101: 'delist, China, Shanghai', // carry-over
  f01102: 'delist, China, Shandong', // carry-over
  f01156: 'delist, China, Hangzhou', // carry-over
  f01232: 'delist, China, Hangzhou', // carry-over
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
  f02768: 'delist, China, Hong Kong', // carry-over
  f02774: 'delist, Australia, Sydney', // carry-over
  f02824: 'delist, China, Chengdu', // carry-over
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
  f065259: 'delist, NR' // carry-over
}

export default annotations
