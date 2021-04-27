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

  f0726405: 'new, Korea, Seoul', // carry-over
  f0726677: 'new, Korea, Jung-gu', // carry-over
  f0727067: 'new, Norway', // carry-over

  // Inflight

  // Unknown

  // Active

  f03339: 'active, China, Luzhou, benxun', // 1813099 about 2 hours
  f020489: 'active, China, Lioaning', // 1813113 about 2 hours
  f022261: 'active, China, Luzhou', // 1813115 about 2 hours
  f023219: 'active, China, Beijing + Zhangjiakou', // 1815043 about 2 hours
  f024550: 'active, China, Wenzhou', // 1813073 about 3 hours
  f033025: 'active, Korea, Daegu', // 1813437 about 2 hours
  f033036: 'active, China, Liaoning', // 1813116 about 2 hours
  f042567: 'active, China, Jinhua', // 1813123 about 3 hours
  f053088: 'active, China, Shanghai', // 1813143 about 3 hours
  f063628: 'active, NR', // 1813133 about 2 hours
  f080103: 'active, Korea, Seongnam-si', // 1813080 about 2 hours
  f081644: 'active, China, Wenzhou', // 1813134 about 3 hours
  f094374: 'active, China, Nanyang', // 1813107 about 2 hours
  f097720: 'active, Korea, Bucheon-si', // 1813072 about 3 hours
  f0106949: 'active, Korea, Seoul', // 1813102 about 3 hours
  f0124554: 'active, Korea, Gimhae', // 1813057 about 3 hours
  f0124944: 'active, NR', // 1813434 about 2 hours
  f0130912: 'active, China, Hong Kong', // 1813576 1 day
  f0132461: 'active, Korea, Daegu', // 1813048 about 3 hours
  f0149455: 'active, NR', // 1813146 about 2 hours
  f0156207: 'active, Korea, Ulsan', // 1813420 about 2 hours
  f0157265: 'active, China, Zhangjiakou', // 1813249 about 2 hours
  f0157564: 'active, Korea, Daejeon', // 1813060 about 2 hours
  f0165375: 'active, Korea, Seongnam-si', // 1813050 about 2 hours
  f0230200: 'active, Korea, Gwanak-gu, G-mining', // 1813083 about 2 hours
  f0395459: 'active, Korea, Daegu', // 1813053 about 3 hours
  f0395463: 'active, Korea, Daegu', // 1813056 about 3 hours
  f0395472: 'active, Korea, Daegu', // 1813058 about 3 hours
  f0395473: 'active, Korea, Daegu', // 1813052 about 3 hours
  f0397728: 'active, China, Dongguan', // 1813089 about 2 hours
  f0400920: 'active, China, Luzhou', // 1813260 about 2 hours
  f0413563: 'active, Korea, Gangnam-gu', // 1813051 about 2 hours
  f0417750: 'active, NR', // 1813151 about 2 hours
  f0419768: 'active, Korea, Seongnam-si', // 1813063 about 2 hours
  f0437246: 'active, China, Hangzhou', // 1813153 about 2 hours
  f0458627: 'active, Korea, Seongnam-si', // 1813059 about 17 hours
  f0460440: 'active, Korea, Seongnam-si', // 1813049 about 2 hours
  f0470972: 'active, China, Shanghai', // 1813156 about 2 hours
  f0478837: 'active, China, Zhangzhou', // 1813014 about 3 hours
  f0504054: 'active, China, Luzhou', // 1813433 about 2 hours
  f0513351: 'active, NR', // 1813284 about 2 hours
  f0514737: 'active, Korea, Busan', // 1813085 about 3 hours
  f0675287: 'active, NR', // 1813412 about 2 hours
  f0675909: 'active, NR', // 1813095 about 4 hours
  f0680538: 'active, Korea, Bucheon-si', // 1813090 about 3 hours
  f0693131: 'active, China, Zhongshan', // 1813172 about 2 hours
  f0694172: 'active, China, Luzhou', // 1813407 about 2 hours
  f0694881: 'active, China, Hangzhou', // 1813157 about 3 hours
  f0700999: 'active, China, Chengdu', // 1813158 about 2 hours
  f0706937: 'active, Korea, Bucheon-si', // 1813414 about 2 hours
  f0709366: 'active, China, Hangzhou', // 1813092 about 3 hours
  f0709739: 'active, China, Handan', // 1813173 about 3 hours
  f0715561: 'active, NR', // 1813425 about 2 hours
  f0715707: 'active, Japan, Yokohama', // 1813438 about 2 hours
  f0717913: 'active, Korea, Jung-gu', // 1813410 about 2 hours
  f0717969: 'active, USA, Los Angeles', // 1813147 about 4 hours
  f0722515: 'active, Korea, Geumcheon-gu', // 1813268 about 2 hours
  f0723006: 'active, Korea, Bucheon-si', // 1813096 about 2 hours
  f0723162: 'active, Korea, Bucheon-si', // 1813503 about 3 hours

  // Active-sealing (active, with in-flight sealing)

  // Sealing

  // Stuck

  f0724179: 'stuck, China, Wenzhou', // CheckForAcceptance: 1 day
  f0724219: 'stuck, Spain, Vilanova del Cami', // CheckForAcceptance: 1 day

  // Busy

  f022820: 'busy, China, Guangdong', // cannot seal a sector before 706315

  // Min Size

  f01234: 'min-size, Belgium, Bonheiden, Eliovp', // 131072 < 5368709120
  f01238: 'min-size, Vietnam, Hanoi, FILECOIN-VIETNAM', // 131072 < 134217728
  f01240: 'min-size, Netherlands, Dcent', // 131072 < 67108864
  f01247: 'min-size, Canada, Montreal, BigChungus', // 131072 < 67108864
  f01276: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 4294967296
  f01277: 'min-size, Sweden, Stockholm, tvsthlm', // 131072 < 4294967296
  f01278: 'min-size, USA, Grand Rapids, MiMiner', // 131072 < 536870912
  f02387: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 17179869184
  f02401: 'min-size, Canada, Chambly, NBFS Canada', // 131072 < 17179869184
  f02416: 'min-size, China, Guangdong, 星际无限', // 131072 < 1048576
  f02419: 'min-size, China, Shanghai, yuantai', // 131072 < 268435456
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 131072 < 17179869184
  f02619: 'min-size, China, Beijing, Blockcasting', // 131072 < 1048576
  f03134: 'min-size, China, Cangzhou, QiaoMu', // 131072 < 1048576
  f03624: 'min-size, Germany, Chemnitz, ode', // 131072 < 8589934592
  f07998: 'min-size, China, Hangzhou, 安问', // 131072 < 17179869184
  f08240: 'min-size, Russia, Novosibirsk, Rabinovitch', // 131072 < 104857600
  f08403: 'min-size, UK, Lower Slaughter, TippyFlits', // 131072 < 134217728
  f010088: 'min-size, NR', // 131072 < 4294967296
  f010254: 'min-size, Japan, Minamata', // 131072 < 134217728
  f010446: 'min-size, Netherlands, Angelo', // 131072 < 34359738368
  f010479: 'min-size, France, Fontenay-sous-Bois, s0nik42', // 131072 < 34359738368
  f010507: 'min-size, China, Hangzhou', // 131072 < 1073741824
  f010617: 'min-size, Canada, Surrey, kernelogic2, @feiya200', // 131072 < 1048576
  f014569: 'min-size, China, Yangzhou', // 131072 < 104857600
  f014768: 'min-size, Singapore, Funktafide, @Funk', // 131072 < 536870912
  f015927: 'min-size, USA, East Islip, CDImine', // 131072 < 8589934592
  f017242: 'min-size, China, Guangdong', // 131072 < 268435456
  f018501: 'min-size, China, Beijing', // 131072 < 1073741824
  f019002: 'min-size, China, Xiamen', // 131072 < 1073741824
  f019104: 'min-size, Canada, Chambly, Northstar', // 131072 < 4294967296
  f019362: 'min-size, China, Hangzhou, 青青子衿', // 131072 < 17179869184
  f019399: 'min-size, Korea, Busan', // 131072 < 268435456
  f019551: 'min-size, UK, Birmingham, Neonix', // 131072 < 134217728
  f020378: 'min-size, Bulgaria, Asenovgrad', // 131072 < 2147483648
  f020385: 'min-size, Korea, Incheon', // 131072 < 1073741824
  f020436: 'min-size, China, Beijing', // 131072 < 536870912
  f020904: 'min-size, Korea, Uijeongbu-si, FILTop', // 131072 < 8589934592
  f021716: 'min-size, New Zealand, Wellington, Info.farm', // 131072 < 536870912
  f021961: 'min-size, China, Fuzhou', // 131072 < 17179869184
  f022142: 'min-size, USA, Queens, Nelson SR2', // 131072 < 2147483648
  f022163: 'min-size, Switzerland, dns:fil.akasha.network', // 131072 < 1073741824
  f022289: 'min-size, China, Mianyang', // 131072 < 4294967296
  f022352: 'min-size, Norway, Borgen, TechHedge, @Reiers', // 131072 < 17179869184
  f022399: 'min-size, China, Beijing', // 131072 < 10485760
  f023467: 'min-size, Norway, Oslo, PhiMining.io', // 131072 < 133169152
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
  f023876: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023928: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023971: 'min-size, USA, FLMiner', // 131072 < 536870912
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
  f030335: 'min-size, China, Fujian', // 131072 < 134217728
  f032934: 'min-size, Korea, Incheon', // 131072 < 10737418240
  f033189: 'min-size, NR', // 131072 < 2147483648
  f034047: 'min-size, China, Hangzhou', // 131072 < 1073741824
  f039940: 'min-size, China, Mianyang', // 131072 < 134217728
  f047419: 'min-size, USA, Waukesha', // 131072 < 17179869184
  f047666: 'min-size, China, Suihua', // 131072 < 104857600
  f049882: 'min-size, Netherlands, De Rijp, Chipz', // 131072 < 268435456
  f058000: 'min-size, China, Suzhou', // 131072 < 1073741824
  f058369: 'min-size, USA, Boston', // 131072 < 536870912
  f062353: 'min-size, Germany, Frankfurt', // 131072 < 17179869184
  f064218: 'min-size, USA, Kirkland', // 131072 < 268435456
  f064668: 'min-size, China, Hong Kong', // 131072 < 1048576
  f066596: 'min-size, USA, San Diego, PiKNiK & Company', // 131072 < 536870912
  f071624: 'min-size, USA, Boyne City, Adept', // 131072 < 4294967296
  f078522: 'min-size, NR', // 131072 < 4294967296
  f079007: 'min-size, China, Jinan', // 131072 < 104857600
  f079817: "min-size, Russia, Ul'yanovka", // 131072 < 1073741824
  f083920: 'min-size, NR', // 131072 < 1573031772
  f089840: 'min-size, Korea, Yeongdeungpo-gu', // 131072 < 1048576
  f097618: 'min-size, China, Suzhou', // 131072 < 524288000
  f097777: 'min-size, Ukraine, Ivano-Frankivsk', // 131072 < 104857600
  f099608: 'min-size, Latvia, Riga, stander', // 131072 < 268435456
  f0100116: 'min-size, Korea, Uljin County', // 131072 < 1073741824
  f0102641: 'min-size, China, Guangzhou', // 131072 < 1536163840
  f0104967: 'min-size, Ukraine, Ternopil', // 131072 < 2147483648
  f0109713: 'min-size, China, Beijing', // 131072 < 1536163840
  f0113008: 'min-size, China, Hong Kong', // 131072 < 33554432
  f0116707: 'min-size, Germany, Dusseldorf', // 131072 < 4294967296
  f0118360: 'min-size, China, Hangzhou', // 131072 < 4294967296
  f0120983: 'min-size, China, Fujian', // 131072 < 268435456
  f0121768: 'min-size, China, Guangdong', // 131072 < 1073741824
  f0121958: 'min-size, Korea, Seoul', // 131072 < 67108864
  f0126868: 'min-size, Ukraine, Vinnytsia', // 131072 < 943718400
  f0127896: 'min-size, Bulgaria, Sofia, sofiaminer', // 131072 < 536870912
  f0131611: 'min-size, Korea, Jeju City', // 131072 < 67108864
  f0134565: 'min-size, China, Karamay', // 131072 < 1536524550
  f0134682: 'min-size, China, Beijing', // 131072 < 268435456
  f0134991: 'min-size, China, Foshan', // 131072 < 1536163840
  f0135078: 'min-size, USA, Denver', // 131072 < 4294967296
  f0142606: 'min-size, Korea, Gangseo-gu', // 131072 < 1073741824
  f0142637: 'min-size, China, Mianyang', // 131072 < 4294967296
  f0145162: 'min-size, Japan, Kumamoto', // 131072 < 1073741824
  f0145874: 'min-size, Canada, Brampton', // 131072 < 4294967296
  f0149444: 'min-size, Korea, Gangseo-gu', // 131072 < 1048576
  f0149765: 'min-size, China, Beijing', // 131072 < 268435456
  f0157535: 'min-size, Canada, Brampton', // 131072 < 4294967296
  f0158468: 'min-size, China, Guangzhou', // 131072 < 1536163840
  f0161916: 'min-size, NR', // 131072 < 1536524550
  f0165400: 'min-size, Canada, Brampton', // 131072 < 2147483648
  f0215497: 'min-size, Korea, Gangseo-gu', // 131072 < 1073741824
  f0217771: 'min-size, NR', // 131072 < 4294967296
  f0220827: 'min-size, NR', // 131072 < 8589934592
  f0221135: 'min-size, USA, Atlanta', // 131072 < 1048576
  f0403177: 'min-size, China, Huizhou', // 131072 < 134217728
  f0406322: 'min-size, USA, Long Beach', // 131072 < 4294967296
  f0406703: 'min-size, USA, Scottsdale', // 131072 < 4294967296
  f0440182: 'min-size, USA, Des Moines', // 131072 < 2097152
  f0440208: 'min-size, Netherlands, Amsterdam', // 131072 < 2097152
  f0447183: 'min-size, Canada, Montreal', // 131072 < 4294967296
  f0455466: 'min-size, USA, Washington', // 131072 < 268435456
  f0492030: 'min-size, USA, Holmdel', // 131072 < 67108864
  f0508988: 'min-size, Korea, Bucheon-si', // 131072 < 34359738368
  f0678914: 'min-size, USA, San Diego', // 131072 < 34359738368
  f0688935: 'min-size, China, Yangzhou', // 131072 < 104857600
  f0694396: 'min-size, UK, Dudley', // 131072 < 2147483648
  f0713585: 'min-size, Russia', // 131072 < 5368709120

  // Max Size

  // Min Ask

  f01241: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f01280: 'min-ask, China, Wuxi', // 20000000 < 12207031250000000
  f01799: 'min-ask, China, Jinan + Singapore', // 20000000 < 12207031250000000
  f02381: 'min-ask, China, Dongguan', // 20000000 < 6103515625000
  f02415:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f02500: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f02501: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f02514: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f02520: 'min-ask, China, Hong Kong + Dongguan', // 20000000 < 61035156250000000000000
  f02606: 'min-ask, China, Zhejiang, DataX', // 20000000 < 122070312
  f02620: 'min-ask, Poland, Krakow, @magik6k', // 20000000 < 40283203
  f02622: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f02623: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f02633:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f02645:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f03143: 'min-ask, Vietman, Ho Chi Minh City + China, Beijing + Shijiazhuang', // 20000000 < 122070312500000
  f03223: 'min-ask, USA', // 20000000 < 610351562500000
  f03273: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f03274: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f03275: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f03364: 'min-ask, China, Inner Mongolia', // 20000000 < 12207031250000000
  f03491:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f05315: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f05316: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f05317: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f05664: 'min-ask, China, Hong Kong', // 20000000 < 12207031250
  f07850: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f07945: 'min-ask, China, Guangzhou', // 20000000 < 122070312500000000
  f07990:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f08025:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f08103: 'min-ask, China, Foshan', // 20000000 < 122070312
  f08157: 'min-ask, China, Beijing + Germany, Frankfurt, 超星际', // 20000000 < 610351562500000
  f08257: 'min-ask, China, Zhejiang + Singapore', // 20000000 < 12207031250
  f08383: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f08399: 'min-ask, USA, Sammamish, MiningMusing', // 20000000 < 61035156
  f09696: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f09848: 'min-ask, USA, Irvine, BigBearLake', // 20000000 < 1220703125
  f010253: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f014365: 'min-ask, Australia, Turramurra + Sydney', // 20000000 < 120849609375000
  f014409: 'min-ask, USA, Monroe, Meatball Part III', // 20000000 < 122070312
  f015897: 'min-ask, China, Hong Kong', // 20000000 < 12207031250000000
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
  f019041: 'min-ask, China, Zhejiang + Singapore, Zheng2', // 20000000 < 122070312
  f019240: 'min-ask, China, Beijing', // 20000000 < 122070312500000
  f019279: 'min-ask, Canada, Calgary', // 20000000 < 24414062
  f021504: 'min-ask, NR', // 20000000 < 122070190429687500000
  f022093: 'min-ask, NR', // 20000000 < 122070190429687500000
  f022130: 'min-ask, Korea, Seodaemun-gu', // 20000000 < 61035156
  f022308: 'min-ask, China, Bozhou', // 20000000 < 12207031250
  f023152: 'min-ask, China, Shandong', // 20000000 < 12207031250000000000000000
  f023495: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f023825: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f024015: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f024016: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f024184: 'min-ask, Korea, Yeongdeungpo-dong', // 20000000 < 24414062500
  f029344: 'min-ask, Korea, Seongnam-si', // 20000000 < 1220703125000
  f029401: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f029404: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f030384: 'min-ask, China, Shenzhen', // 20000000 < 12207031250000
  f033123: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f033356: 'min-ask, Korea, Yeongdeungpo-dong', // 20000000 < 24414062500
  f039800: 'min-ask, China, Chengdu', // 20000000 < 122070312500000
  f040218: 'min-ask, China, Wuxi', // 20000000 < 12207031250000000
  f042540: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f042558: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f042635: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f050022: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f052447: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f054370: 'min-ask, China, Dongguan', // 20000000 < 12207031250
  f055123: 'min-ask, Korea, Busan', // 20000000 < 1220703125
  f056611: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f057614: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f057698: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f060072: 'min-ask, China, Chongqing', // 20000000 < 610351562500000
  f061740: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f062260: 'min-ask, China, Guangzhou', // 20000000 < 61035156250000
  f062318: 'min-ask, Korea, Naju', // 20000000 < 12207031250
  f062334: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f062770: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f062811: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f062982: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f065103: 'min-ask, USA + China, Suzhou + Guangzhou + Karamay', // 20000000 < 122070312500000
  f065200: 'min-ask, China, Yibin', // 20000000 < 24414062
  f065280: 'min-ask, Korea, Songpa-gu, Data Store Ltd', // 20000000 < 122070312500000
  f066104: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f069915: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f069919: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f070501: 'min-ask, USA + China, Hong Kong + Guangzhou', // 20000000 < 122070312500000
  f070999: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f071980: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f073448: 'min-ask, NR', // 20000000 < 12207031250000000
  f073552: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f073628: 'min-ask, USA, New Castle', // 20000000 < 122070312500000
  f074738: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f078772: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f079197: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f079247: 'min-ask, USA + China, Guangzhou + Beijing + Dongguan + Shenzhen', // 20000000 < 122070312500000
  f079301: 'min-ask, China, Guangzhou + Dongguan + Shenzhen, USA', // 20000000 < 122070312500000
  f080480: 'min-ask, Ukraine, Lviv', // 20000000 < 122070312
  f082452: 'min-ask, China, Dongguan', // 20000000 < 1220581054687500000
  f083625: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f083903: "min-ask, China, Xi'an", // 20000000 < 122192382812500
  f084879: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f086151: 'min-ask, China, Dongguan', // 20000000 < 122070324707031
  f092514: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f097370: 'min-ask, NR', // 20000000 < 122070312500000
  f097386: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f097914: 'min-ask, NR', // 20000000 < 12207031250000000000000
  f098706: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f099239: 'min-ask, China, Hong Kong', // 20000000 < 12207031250000000
  f0100082: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0101087: 'min-ask, Korea', // 20000000 < 122070312500000
  f0102374: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102375: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102513: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102670: 'min-ask, China, Xiamen', // 20000000 < 121948242187500000
  f0103851: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0104671: 'min-ask, Japan, Ota-ku', // 20000000 < 1412850341
  f0105074: 'min-ask, China, Shanghai', // 20000000 < 12207031250000000000000
  f0107308: 'min-ask, China, Shenyang', // 20000000 < 1220581054687500000
  f0107995: 'min-ask, NR', // 20000000 < 121948242187500000
  f0109901: 'min-ask, China, Huludao', // 20000000 < 122070312500000
  f0110283: 'min-ask, China, Zhongshan', // 20000000 < 12207031250000000000000000
  f0110442: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0110936: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0110944: 'min-ask, NR', // 20000000 < 61035156250000
  f0114808: 'min-ask, China, Shanghai', // 20000000 < 12207031250000000
  f0114924: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0115744: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0116766: 'min-ask, USA, Westford', // 20000000 < 24414062500
  f0121450: 'min-ask, China, Fujian', // 20000000 < 1220581054687500000
  f0123931: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0124102: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f0124335: 'min-ask, Finland, Helsinki', // 20000000 < 24414062
  f0126824: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0128974: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0129072: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0129976: 'min-ask, Korea, Gwangju', // 20000000 < 1220703125000
  f0131464: 'min-ask, USA, Ashburn', // 20000000 < 122070312500000000
  f0133886: 'min-ask, China, Guangdong', // 20000000 < 366210937500000
  f0133999: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f0134778: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f0135738: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0136014: 'min-ask, China, Suzhou', // 20000000 < 12207031250000000
  f0137168: 'min-ask, China, Beijing', // 20000000 < 1220703125
  f0141614: 'min-ask, China, Fujian', // 20000000 < 1220703124877929687500000
  f0145313: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0145385: 'min-ask, Malaysia, Petaling Jaya', // 20000000 < 122070324707031
  f0145784: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0146165: 'min-ask, China, Huizhou', // 20000000 < 122070190429687500000
  f0146875: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0147284: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0148399: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0149768: 'min-ask, China, Dongguan', // 20000000 < 1220703124999877929687500000
  f0151034: 'min-ask, USA, Syracuse', // 20000000 < 123291015625000
  f0151281: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0151692: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0151993: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0152747: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0152854: 'min-ask, China, Huizhou', // 20000000 < 1220581054687500000
  f0154988: 'min-ask, China, Dongguan', // 20000000 < 122070190429687500000
  f0155384: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0155467: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0157941: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f0158142: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0165111: 'min-ask, China, Guangzhou', // 20000000 < 1220703125000000000
  f0165135: 'min-ask, China, Guangzhou', // 20000000 < 1220703125000000000
  f0215704: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0216138: 'min-ask, China, Shenzhen', // 20000000 < 610351562500
  f0220004: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0220632: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f0222962: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0224144: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0224841: 'min-ask, China, Guangzhou', // 20000000 < 12206909179687500000
  f0225058: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f0241858: 'min-ask, China, Fuzhou', // 20000000 < 1220703124999877929687500000
  f0392734: 'min-ask, Korea, Icheon-si', // 20000000 < 122070190429687500000
  f0392785: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0395911: 'min-ask, NR', // 20000000 < 121948242187500000
  f0396188: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0396607: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0396844: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0397855: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0400103: 'min-ask, China, Hong Kong', // 20000000 < 122070312
  f0401287: 'min-ask, China, Yibin', // 20000000 < 610351562500000
  f0401677: 'min-ask, NR', // 20000000 < 12207031250000000000000000
  f0406475: 'min-ask, China, Dongguan', // 20000000 < 122070312500000000
  f0409356: 'min-ask, NR', // 20000000 < 121948242187500000
  f0409765: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0410506: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0410701: 'min-ask, China, Changsha', // 20000000 < 61035156250000
  f0413684: 'min-ask, China, Fujian', // 20000000 < 12207031249999999877929687500000
  f0413801: 'min-ask, China, Fujian', // 20000000 < 122070312499999999877929687500000
  f0426531: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0426933: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0428177: 'min-ask, China, Huizhou', // 20000000 < 122070190429687500000
  f0431665: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0432345: 'min-ask, China, Guangdong', // 20000000 < 122070312499999877929687500000
  f0449662: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0456740: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0456741: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0460078: 'min-ask, China, Shanghai', // 20000000 < 122070312500000000
  f0463950: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0471007: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0488888: 'min-ask, China, Nanchang', // 20000000 < 122070312500000
  f0490173: 'min-ask, Korea, Jung-gu', // 20000000 < 1220703125000
  f0498920: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0503420: 'min-ask, China, Beijing', // 20000000 < 122070190429687500000
  f0511732: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0518877: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0673645: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0676048: 'min-ask, China, Hangzhou', // 20000000 < 3662109375000
  f0686111: 'min-ask, Korea, Jung-gu', // 20000000 < 1220703125000
  f0690459: 'min-ask, China, Beijing', // 20000000 < 12207031127929687500000
  f0693008: 'min-ask, China, Shanghai', // 20000000 < 1220703125000000000
  f0705118: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0717254: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000

  // Error

  f01272: 'error, Singapore', // error reading Response message from provider: EOF
  f02490: 'error, China, Fujian', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaceawxzajywwn4roo23xpsy664y5bdpze2gynwwma7kx3vubdnl3j3m: search msg failed: failed to load message: blockstore: block not found
  f02540: 'error, USA, Mobile, Foundry', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaced47rahldiupeickpwdajevoykmkdsruniyf7zg7apj4cb5unyf3a: search msg failed: failed to load message: blockstore: block not found
  f03345: 'error, China, Fuzhou, chh', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaceciceblhb5kz5tyunkfcz5h5a4xq4yevacdbluhjbr54bnhxmubmm: search msg failed: failed to load message: blockstore: block not found
  f07709: 'error, Korea, Dongjak-gu', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacebriefqbjr7jwhxdcvvvju7za6btc2tzekbj77pgh3c2dti3remqm: search msg failed: failed to load message: blockstore: block not found
  f07830: 'error, China, Zhongshan', // error reading Response message from provider: EOF
  f08019: 'error, China, Yantai, 三合', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaceb3qndsegkdam4uxdnacp2hjp5j2ujanuml64l2mfmdlfn3my5dg4: search msg failed: failed to load message: blockstore: block not found
  f010241: 'error, China, Beijing + USA, Portland, 6Block-P', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaceblujgitbn7m7jjaryflpmqvcb5z73zx2jkistnsvadivunckw3ai: search msg failed: failed to load message: blockstore: block not found
  f010513: 'error, China, Chongqing', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacebadhiy3jmg3c2qynexqhznxbmhed574jjliwpytuxmxqhmq3dz32: search msg failed: failed to load message: blockstore: block not found
  f015233: 'error, China, Nanjing', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacedia3oc4sv2fxwbihifb4bwljzxtvchlkkdyi2q4otj4erklsqcmi: search msg failed: failed to load message: blockstore: block not found
  f016276: 'error, China, Beijing', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacea4dxkrxivjnnssdnzurkpohuqyn3az77akml3puvdtc5i4emxlbe: search msg failed: failed to load message: blockstore: block not found
  f016398: 'error, China, Shanghai', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f017193: "error, China, Xi'an + Singapore", // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f019806: 'error, China, Beijing', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaceci6qt3voobays5enm6meysuwa7rs5emt54mm5bmmf7ujkhekbss6: search msg failed: failed to load message: blockstore: block not found
  f020928: 'error, China, Deyang + Singapore', // error reading Response message from provider: EOF
  f020940: 'error, USA, Bellevue', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f023198: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f024944: 'error, Korea, Yeongdeungpo-dong', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaceavdlqclwkukynuap77ehyiye4d3ulu4674vmbmydvura5xdop77u: search msg failed: failed to load message: blockstore: block not found
  f025007: 'error, Korea, Gyeonggi-do, PINBYTES-eCUBE', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999997914005 FIL, balance: 0.029028247367250971 FIL): not enough funds to execute transaction
  f025025: 'error, China, Qingdao', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999954556532 FIL, balance: 0.02257347765355794 FIL): not enough funds to execute transaction
  f030379: 'error, Korea, Uiwang', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f030408: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacecw5rgyo7htcgc44kwnuhvemr5obd6w5ieq7svjhbq2xvhywrkmni: search msg failed: failed to load message: blockstore: block not found
  f039515: 'error, China, Chongqing, valarhash', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaceb6tykf6epklfalukcmb2u5qgzc37g56qgdsyimtnmjus5utqie3y: search msg failed: failed to load message: blockstore: block not found
  f040332: 'error, China, Shenzhen', // error reading Response message from provider: stream reset
  f044160: 'error, China, Guangzhou, muxing', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacectmianuvjcof5wbfgspotuobgy2phafncgsfaabzgghkmzx5x5hc: search msg failed: failed to load message: blockstore: block not found
  f054415: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f054417: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f054418: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f054420: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f055102: 'error, Vietman, Ho Chi Minh City + China', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaceaz3ev4npik5o2y4h7sglwatremfqget3waryvmospd7e2aj6dxkw: search msg failed: failed to load message: blockstore: block not found
  f055132: 'error, Vietman, Ho Chi Minh City + China', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacedzv3usuuy6ml3sfdqpsiplv2kg4wdj5i3l7kafoppj5cjneycxrk: search msg failed: failed to load message: blockstore: block not found
  f057618: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f062937: 'error, NR', // error reading Response message from provider: EOF
  f063869: 'error, NR', // error reading Response message from provider: EOF
  f078621: 'error, Korea, Uiwang', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaceaz42d6fbhbfgbnzxz47t6qq66x47azhcjfulnjp3bkklqzleo4zm: search msg failed: failed to load message: blockstore: block not found
  f079370: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f082635: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacecmovpklc6wly5ngaw3n4f6dvy6jgl66b7oeb4gjdmnopwn2r5b4y: search msg failed: failed to load message: blockstore: block not found
  f085777: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f085899: 'error, China, Wuxi', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f086028: 'error, NR', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.040203916536798 FIL, balance: 0.007957986509529428 FIL): not enough funds to execute transaction
  f096976: 'error, Russia', // error reading Response message from provider: stream reset
  f097214: 'error, Korea, Bucheon-si, CryptoHash', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.435784080415222839 FIL, balance: 0.195852655446207027 FIL): not enough funds to execute transaction
  f097569: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacecmhzlwppagltttmr7dwc23c3dtl2bowagppcd36ho5zghpfbuzea: search msg failed: failed to load message: blockstore: block not found
  f098664: 'error, China, Jiangsu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.406363546098977572 FIL, balance: 0.212842446786672099 FIL): not enough funds to execute transaction
  f0107797: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaceaeob5gzopufvopxllpezhjwuotha6n4wygjssp7xizqi6e77unda: search msg failed: failed to load message: blockstore: block not found
  f0108979: 'error, Korea, Bupyeong-gu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.49999999999077627 FIL, balance: 0.186648629721875088 FIL): not enough funds to execute transaction
  f0109040: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0109043: 'error, China, Karamay', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.374655320983562966 FIL, balance: 0.207576945028802356 FIL): not enough funds to execute transaction
  f0110804: 'error, USA, Santa Clara', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaceafo7lhpdj7rrimi3ugyrsotw6roch3etjel2v7qyeeevsunn3mnm: search msg failed: failed to load message: blockstore: block not found
  f0111174: 'error, China, Guangzhou', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.403637125345532496 FIL, balance: 0.04198169572523634 FIL): not enough funds to execute transaction
  f0111885: 'error, Korea, Bucheon-si, WINNERS', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.43153422637641344 FIL, balance: 0.287971942781114232 FIL): not enough funds to execute transaction
  f0112713: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.499999999991138428 FIL, balance: 0.056229381562036481 FIL): not enough funds to execute transaction
  f0112772: 'error, China, Nantong', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacebljbi2d5viu3mi5lsstgeaplnu7w7um6t4osxogcdpufgs3mevce: search msg failed: failed to load message: blockstore: block not found
  f0113331: 'error, Korea, Jinju + USA', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacecdb5b4i4p7sgjll7pqifktahkm6xf4xinwvdzv43prb4qzygh5f4: search msg failed: failed to load message: blockstore: block not found
  f0115108: 'error, Korea, Yangcheon-gu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.499999999951304909 FIL, balance: 0.193628632138369601 FIL): not enough funds to execute transaction
  f0116436: 'error, Singapore', // error reading Response message from provider: EOF
  f0116445: 'error, Singapore', // error reading Response message from provider: EOF
  f0118317: 'error, Singapore', // error reading Response message from provider: EOF
  f0118330: 'error, Singapore', // error reading Response message from provider: EOF
  f0118695: 'error, Korea, Seoul', // error reading Response message from provider: stream reset
  f0120546: 'error, Korea, Seoul', // error reading Response message from provider: EOF
  f0126038: 'error, Korea, Seoul', // error reading Response message from provider: EOF
  f0129805: 'error, China, Zhejiang + Australia, Adelaide', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacebqcosoboklhbbsp63ectd5ugdrt54owxvmadpibgyieunoce7uae: search msg failed: failed to load message: blockstore: block not found
  f0131901: 'error, Korea, Daejeon', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacea6gbqq6qc2wbp7ycvpb4zfttgdvsztsbfp67uul2i56wgkmoabj6: search msg failed: failed to load message: blockstore: block not found
  f0134516: 'error, Singapore', // error reading Response message from provider: EOF
  f0134518: 'error, China, Guangdong', // error reading Response message from provider: EOF
  f0134671: 'error, Korea, Gimpo-si', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacedletj3yc6x2h3euf3qzpqqszs673gz5wnvmjidbhuogqtwihhd72: search msg failed: failed to load message: blockstore: block not found
  f0137489: 'error, UK, Deeside', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999967873439 FIL, balance: 0.015339184428711296 FIL): not enough funds to execute transaction
  f0146751: 'error, China, Jiangsu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.413498871728943285 FIL, balance: 0.124884421850587082 FIL): not enough funds to execute transaction
  f0147214: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacecxq4h74hjl3rybv6sfqocssvhrrvcefy6c4dnqeukpqo75nrkzju: search msg failed: failed to load message: blockstore: block not found
  f0150744: 'error, Korea, Ulsan', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacedc5cinida45rxl7getywrs5ouhkmy3bew5j46ixitvnsfccjz4jq: search msg failed: failed to load message: blockstore: block not found
  f0150782: 'error, China, Xiamen', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151341: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151366: 'error, China, Fuzhou + Xiamen', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151468: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151487: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0155687: 'error, China, Guangzhou', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaceao7bii63zvkvcpfff7tzpx3co3d5oo7rqjfz6zjkmilew7t2dydk: search msg failed: failed to load message: blockstore: block not found
  f0156452: 'error, Korea, Ulsan', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaceajpdcmnb53czc56gvclqs5sc5w43nn4zw5f7qyksy3li7uvmrwyo: search msg failed: failed to load message: blockstore: block not found
  f0158993: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0162183: "error, China, Xi'an", // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0162394: 'error, China, Guangzhou', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.388572143708328065 FIL, balance: 0.045723826839724376 FIL): not enough funds to execute transaction
  f0165539: 'error, Japan, Yokohama', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: WaitForPublishDeals errored: handler: websocket connection closed
  f0165643: 'error, China, Guangzhou', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacearb2o3vdiz22nlou45lx2l4w6jp5w3cpowwfxvculelfw43smh4q: search msg failed: failed to load message: blockstore: block not found
  f0168058: 'error, China, Suzhou', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacedn323o6ngpvr6t5ymppf46xblmttjtl777uryd2gzsssfq262cvq: search msg failed: failed to load message: blockstore: block not found
  f0227660: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0228575: 'error, Canada, Calgary', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.299999999934232488 FIL, balance: 0.262907068207789023 FIL): not enough funds to execute transaction
  f0241022: 'error, Korea, Geumcheon-gu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.301716793540610325 FIL, balance: 0.138026453965549069 FIL): not enough funds to execute transaction
  f0242152: 'error, Korea, Guro-gu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999986433636 FIL, balance: 0.012238835740024868 FIL): not enough funds to execute transaction
  f0395462: 'error, Korea, Daegu', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacedeymm75526cyvm62pcck6juqryoaw7zml7i3bd6olzc23efhjcom: search msg failed: failed to load message: blockstore: block not found
  f0396352: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: stream reset
  f0396705: 'error, NR', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999982288181 FIL, balance: 0.035499823344069168 FIL): not enough funds to execute transaction
  f0396751: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0396846: 'error, China, Zhongshan', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacecrv7zs3bmtdoeknvtwsmsg5l4xo42s6ccr27uhhwly3jcjo55gom: search msg failed: failed to load message: blockstore: block not found
  f0397332: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacebopzqqfgaxh7ztlimlpte3dqhcdwnm2uh5vglp7l7c77didrdnsi: search msg failed: failed to load message: blockstore: block not found
  f0399814: "error, China, Ya'an", // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacea3jhk6iqgrcfpbxarakip2k4wc7fzxvatxxhfgjw6sxya7x4xena: search msg failed: failed to load message: blockstore: block not found
  f0401135: 'error, Singapore', // error reading Response message from provider: EOF
  f0401300: 'error, France, Deuil-la-Barre', // error in deal activation: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacedbpnjdkna3cqmy7vpofdeecxxah3xkdqwi6hpl35hzplifje365i: search msg failed: failed to load message: blockstore: block not found
  f0401303: 'error, Korea, Ulju-gun', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.099999999949311943 FIL, balance: 0.068947072629189286 FIL): not enough funds to execute transaction
  f0402371: 'error, China, Shanghai', // error reading Response message from provider: EOF
  f0405129: 'error, China, Fujian', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.722000652949703849 FIL, balance: 0.540468854093788917 FIL): not enough funds to execute transaction
  f0407410: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacedey3enqik2bvlwchwwau5jbmmedzwa4ak3t6womvu2mgl2uur54e: search msg failed: failed to load message: blockstore: block not found
  f0411786: 'error, Korea, Busan', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacebnvzlif7t3osobzvhwjyev5hdhmcgpjby5loefu53z4pvk7t6acu: search msg failed: failed to load message: blockstore: block not found
  f0414383: 'error, China, Dongguan', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaceavpyuvdchslk46lxgl4x56eaot2fz5c4r46jxbrx477gw2xrhtv4: search msg failed: failed to load message: blockstore: block not found
  f0417918: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0430997: 'error, Korea', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: WaitForPublishDeals errored: handler: websocket connection closed
  f0432329: 'error, NR', // error in deal activation: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaceculs7gavbztdqy7cus7lspnm4katrlxldz5tar6gddjnt2ysj4w6: search msg failed: failed to load message: blockstore: block not found
  f0434480: 'error, USA, Hummelstown', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.29999999999362682 FIL, balance: 0.109026690171336256 FIL): not enough funds to execute transaction
  f0435045: 'error, Korea, Ulju-gun', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacedhm6rffo24tzzzopbll57vowxow5froptkltq5olh2bzuyzhwjay: search msg failed: failed to load message: blockstore: block not found
  f0444122: 'error, NR', // error reading Response message from provider: EOF
  f0456374: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacecl2nl322iycja7vk25ahpumgjyaleowfuosxr3zrnzmc3bwrkcng: search msg failed: failed to load message: blockstore: block not found
  f0461791: 'error, Korea, Gwangju', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaced23aclhi5ivyni5he7hkkvylhrjma5ydryzlpqw4hliuguqh6ors: search msg failed: failed to load message: blockstore: block not found
  f0467217: 'error, China, Beijing', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaceakr6bs6b3trskv7fwwcazprbapolnlwbol4vai6otaz3ydplozta: search msg failed: failed to load message: blockstore: block not found
  f0482619: 'error, Korea, Seongnam-si', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacednx43mtla74aoqr2sogicr535ciuzciycnekn22kibqphi7c3awu: search msg failed: failed to load message: blockstore: block not found
  f0497837: 'error, Korea, Gangnam-gu', // AddPiece failed: writing piece: storage call error 0: creating unsealed sector file: fallocate '/mnt/md0/storage/unsealed/s-t0497837-31': structure needs cleaning
  f0512170: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.461503830841486125 FIL, balance: 0.214979977184517796 FIL): not enough funds to execute transaction
  f0512179: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.441900229816430775 FIL, balance: 0.023392076813467113 FIL): not enough funds to execute transaction
  f0517213: 'error, NR', // error reading Response message from provider: EOF
  f0520262: 'error, China, Fujian', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacebbrpej7d5bnrilnu4yqunj2pghvbh5ytse6zsixs2bhq2tapz3xg: search msg failed: failed to load message: blockstore: block not found
  f0522364: 'error, NR', // error reading Response message from provider: EOF
  f0524589: 'error, Korea', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacedxh6codd3mlfkb767wiiu3padpcb2r4y6zweg7ajqo7cfeuqdeco: search msg failed: failed to load message: blockstore: block not found
  f0601975: 'error, Korea, Guro-gu', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacecelrxfvtog72yx2evcw7s6inh7qt3x5carh57fkz4evwlgxmx7e4: search msg failed: failed to load message: blockstore: block not found
  f0601980: 'error, Korea, Seoul', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacedvqkxpww6wdzo7n6ub3vlfnykk35xzninufwevd5u6l6f7cfxmgc: search msg failed: failed to load message: blockstore: block not found
  f0678845: 'error, China, Zhengzhou', // error in deal activation: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacec6bns7np2n62sxchrz2ejnshldhzrdc4yfgwcqa272g2byghiexs: search msg failed: failed to load message: blockstore: block not found
  f0687206: 'error, China, Hangzhou', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacecsiww4ba6nqby3ogfzddvnui43pqjv72ypcnhfcalajxfurco2om: search msg failed: failed to load message: blockstore: block not found
  f0693765: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacebcaupxfh3cqxle4bbwfmdvtcavuj66twmui5rzc625degdtnp4gs: search msg failed: failed to load message: blockstore: block not found
  f0697162: 'error, Finland, Helsinki', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaceae7sxyct6r3qrmwx2fi3wgt5qvratkxt7rnrv6y5u2uiyez2evak: search msg failed: failed to load message: blockstore: block not found
  f0698866: 'error, Finland, Helsinki', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacebs6bb5zukr7oaydhvk5donna2xr5tnyo3fn4tsa33ospb6ruvuhc: search msg failed: failed to load message: blockstore: block not found
  f0707721: 'error, Netherlands', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzaced2wm2x3fxfh67cprcprlnw62i3wcfhb4tjuewkcatdlosstk7npk: search msg failed: failed to load message: blockstore: block not found
  f0720716: 'error, Korea, Seoul', // error in deal activation: failed to set up called handler: called check error (h: 705460): failed to look up deal on chain: looking for publish deal message bafy2bzacedm62qq5mal4nkvo7d3fsggjvsq62xf3wmp4fr2cutjudt7i4yaug: search msg failed: failed to load message: blockstore: block not found

  // Dial backoff

  f02503: 'backoff, Singapore',
  f09675: 'backoff, USA',
  f014233: 'backoff, China, Shanghai + USA',
  f014487: 'backoff, Singapore',
  f015767: 'backoff, Russia, Khabarovsk + Japan, Khabarovsk + USA',
  f017229: 'backoff, China, Sichuan',
  f099387: 'backoff, China, Shijiazhuang',
  f0107127: 'backoff, USA, Daytona Beach',
  f0141446: 'backoff, China, Suzhou',
  f0152563: 'backoff, China, Chongqing',
  f0157429: 'backoff, Korea, Bucheon-si',
  f0218559: 'backoff, NR',
  f0228855: 'backoff, Korea, Guro-gu',
  f0399610: 'backoff, Ukraine',
  f0514241: 'backoff, NR',

  // Rejected

  f01152: 'rejected, China, Beijing',
  f01248: 'rejected, Germany, Frankfurt', // sh: /root/.lotusminer/dealfilter.pl: No such file or directory
  f01289: 'rejected, China, Ningbo', // no online
  f01314: 'rejected, NR', // getting client market balance failed
  f02301: 'rejected, USA',
  f02303: 'rejected, Singapore',
  f02421: 'rejected, China, Deyang + Singapore', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f02423: 'rejected, Ukraine, Kyiv', // no online
  f02528: 'rejected, Singapore', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f02609: 'rejected, China, Shanghai', // no online
  f02625: 'rejected, China, Shanghai', // no online
  f03249: 'rejected, China, Yunfu',
  f03347: 'rejected, China, Shenzhen', // no online
  f03362: 'rejected, Germany, Berlin',
  f08197: 'rejected, China, Foshan',
  f09620: 'rejected, China, Weifang',
  f09642: 'rejected, Sweden, Alvsjo',
  f010035: 'rejected, Netherlands + China, Suzhou',
  f010038: 'rejected, China, Hangzhou + Singapore',
  f010405: 'rejected, China, Foshan',
  f010493: 'rejected, China, Shanghai', // no online
  f010498: 'rejected, China, Shenzhen', // no online
  f010505: 'rejected, China, Wuhan, Interstellar Roewe', // no online
  f010528: 'rejected, China, Chongqing, Interstellar Roewe', // no online
  f010558: 'rejected, NR',
  f014327:
    'rejected, China, Ningbo + Japan, Heiwajima + Germany, Frankfurt + USA + Canada, Toronto', // no online
  f014683: 'rejected, China, Dongguan',
  f015747: 'rejected, Japan, Setagaya-ku',
  f019422: 'rejected, China, Guangzhou', // no online
  f019824: 'rejected, USA', // deal start epoch is too far in the future: 706327 > 690056
  f020523: 'rejected, China, Suzhou, changjiang', // sh: 1: VerifiedDeal:true: not found
  f021075: 'rejected, China, Chengdu', // no online
  f021254: 'rejected, NR', // f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q<nil>
  f021255: 'rejected, Netherlands + China, Suzhou',
  f021444: 'rejected, China, Shanghai', // no online
  f021536: 'rejected, NR', // getting client market balance failed
  f021714: 'rejected, China, Hong Kong',
  f022072: 'rejected, China, Jieyang',
  f022125: 'rejected, China, Shenzhen', // no online
  f022566: 'rejected, China, Nanchong',
  f022748: 'rejected, China, Xinyang', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f022832: 'rejected, China, Beijing',
  f022853: 'rejected, China, Fuzhou',
  f023179: 'rejected, China, Fuzhou', // sh: 1: f3rthootwyykyrhrxy3u3eihhxch7q5q7tlmzsxtlxuqwxcl2yvyjsjhrz5g37cjdhdufxm2qhyewt2dufasdf: not found
  f023983: 'rejected, China, Chongqing',
  f023984: 'rejected, NR',
  f023985: 'rejected, China, Chongqing',
  f024468: 'rejected, China, Shenzhen', // no online
  f029490: 'rejected, NR',
  f029649: 'rejected, China, Beijing',
  f032888: 'rejected, China, Weifang',
  f034258: 'rejected, China, Mianyang',
  f035436: 'rejected, China, Jiangsu', // no online
  f042391: 'rejected, China, Fuzhou', // no online
  f042896: 'rejected, China, Deyang', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f047843: 'rejected, China, Xiamen', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f047857: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f047868: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f048135: 'rejected, China, Chongqing, password interstellar', // sh: 1: /lotus_data/.lotusstorage/dealfilter.pl: not found
  f048968: 'rejected, NR', // no online
  f050260: 'rejected, China, Suzhou',
  f052701: 'rejected, China, Beijing',
  f056226: 'rejected, NR',
  f056406: 'rejected, China, Taizhou', // no online
  f056573: 'rejected, China, Sichuan', // no online
  f057127: 'rejected, China, Suzhou', // no online
  f057683: 'rejected, NR',
  f066270: 'rejected, China, Dongguan', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f066781: 'rejected, China, Beijing',
  f066790: 'rejected, China, Beijing',
  f068528: 'rejected, China, Shanghai', // no online
  f073697: 'rejected, China, Karamay',
  f078899: 'rejected, NR',
  f079618: 'rejected, China, Beijing', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f079815: 'rejected, China, Hangzhou', // getting client market balance failed
  f081323: 'rejected, UK, Cambridge', // no online
  f082095: 'rejected, NR', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f083065: 'rejected, China, Taizhou', // no online
  f086423: 'rejected, China, Chengdu', // no online
  f087530: 'rejected, China, Shenzhen', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f090387: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f090864: 'rejected, NR',
  f090893: 'rejected, USA', // no online
  f094128: 'rejected, China, Shenzhen', // no online
  f096974: 'rejected, China, Chongqing', // no online
  f097126: 'rejected, NR', // sh: 1: jq: not found
  f098770: 'rejected, USA, Pontiac', // no online
  f099705: 'rejected, China, Zibo', // no online
  f0100066: 'rejected, NR', // no online
  f0101387: 'rejected, China, Shenzhen', // no online
  f0102358: 'rejected, China, Guizhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0107133: 'rejected, NR', // no online
  f0107753: 'rejected, China, Shanghai', // no online
  f0109272: 'rejected, China, Dongguan', // no online
  f0110762: 'rejected, Korea, Seoul', // no online
  f0111544: 'rejected, Korea, Seoul', // no online
  f0111658: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0112087: 'rejected, China, Xiamen', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0112679: 'rejected, NR', // no online
  f0114043: 'rejected, Korea, Seoul', // no online
  f0114687: 'rejected, China, Dongguan', // no online
  f0116628: 'rejected, China, Shanghai', // no online
  f0117118: 'rejected, NR', // no online
  f0118917: 'rejected, China, Shaoxing', // no online
  f0120793: 'rejected, Korea, Seoul', // no online
  f0121260: 'rejected, China, Quinzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0121602: 'rejected, China, Hong Kong', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0122398: 'rejected, NR', // no online
  f0122415: 'rejected, Korea, Seoul', // no online
  f0123281: 'rejected, Korea, Seoul', // no online
  f0124036: 'rejected, China, Nanchang', // no online
  f0125863: 'rejected, Korea, Seoul', // no online
  f0126037: 'rejected, Korea, Seoul', // no online
  f0126039: 'rejected, NR', // no online
  f0127352: 'rejected, Korea, Seoul', // no online
  f0127354: 'rejected, Korea, Seoul', // no online
  f0127980: 'rejected, Korea, Seoul', // no online
  f0128581: 'rejected, Korea, Seoul', // no online
  f0130961: 'rejected, Korea, Seongnam-si',
  f0131331: 'rejected, China, Beijing',
  f0131419: 'rejected, China, Beijing',
  f0142135: "rejected, China, Ya'an + USA", // no online
  f0143928: 'rejected, China, Beijing',
  f0147565: 'rejected, China, Shenzhen',
  f0149026: 'rejected, China, Shenzhen',
  f0151629: 'rejected, NR', // no online
  f0152712: 'rejected, NR', // no online
  f0152943: 'rejected, NR', // sh: 1: jq: not found
  f0153176: 'rejected, China, Fujian', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0154039: 'rejected, NR', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0155004: 'rejected, Korea, Seoul', // no online
  f0156264: 'rejected, Korea, Seoul', // no online
  f0158666: 'rejected, China, Beijing',
  f0158950: 'rejected, China, Beijing',
  f0159961: 'rejected, China, Chongqing', // no online
  f0162385: 'rejected, China, Beijing',
  f0164291: 'rejected, China, Fujian', // no online
  f0166327: 'rejected, NR',
  f0166512: 'rejected, NR',
  f0214631: 'rejected, Korea, Seoul', // no online
  f0215370: 'rejected, China, Hangzhou', // no online
  f0216849: 'rejected, China, Fujian', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0218293: 'rejected, China, Fujian', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0222674: 'rejected, China, Quinzhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0223663: 'rejected, China, Beijing',
  f0226324: 'rejected, China, Guangxi', // getting client market balance failed
  f0228712: 'rejected, USA', // getting client market balance failed
  f0239688: 'rejected, China, Beijing',
  f0242420: 'rejected, NR', // no online
  f0364957: 'rejected, China, Sichuan', // getting client market balance failed
  f0364982: 'rejected, Korea, Seoul', // no online
  f0391143: 'rejected, China, Shanghai', // getting client market balance failed
  f0392458: 'rejected, China, Fuzhou', // no online
  f0398286: 'rejected, China, Beijing', // no online
  f0398863: 'rejected, Korea, Seoul', // no online
  f0398865: 'rejected, Korea, Seoul', // no online
  f0401254: 'rejected, Korea, Uijeongbu-si', // no online
  f0401348: 'rejected, Korea, Chuncheon', // no online
  f0401416: 'rejected, Japan, Fukuoka', // no online
  f0403896: 'rejected, USA, Huntersville', // sh: 1: /absolute/path/to/storage_filter_program: not found
  f0409069: 'rejected, NR', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0418632: 'rejected, Singapore', // miner is not accepting unverified storage deals
  f0427989: 'rejected, NR',
  f0432594: 'rejected, China, Zhengzhou', // no online
  f0463143: 'rejected, NR', // no online
  f0471691: 'rejected, China, Fujian', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0475664: 'rejected, China, Zhejiang', // no online
  f0476476: 'rejected, Korea, Namyangju', // no online
  f0482136: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0492474: "rejected, China, Xi'an", // no online
  f0497031: 'rejected, China, Shangrao',
  f0510610: 'rejected, China, Shangrao',
  f0513878: 'rejected, China, Guizhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0516456: 'rejected, Korea, Jung-gu', // no online
  f0521499: 'rejected, NR', // no online
  f0522099: 'rejected, China, Shangrao',
  f0524489: 'rejected, Korea, Pocheon-si', // no online
  f0524517: 'rejected, Korea, Uijeongbu-si', // no online
  f0533124: 'rejected, Korea, Seoul', // no online
  f0587126: 'rejected, China, Shenyang', // no online
  f0697462: 'rejected, Korea, Dalseo-gu', // no online
  f0709325: 'rejected, Korea, Jung-gu', // no online
  f0715235: 'rejected, Korea, Jung-gu', // no online
  f0722658: 'rejected, China, Chengdu', // no online
  f0723538: 'rejected, China, Handan', // no online
  f0723827: 'rejected, China, Guizhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found

  // Dial

  f01012: 'dial, China, Guangzhou + Hong Kong', // * [/ip4/127.0.0.1/tcp/8888] dial tcp4 127.0.0.1:8888: connect: connection refused  * [/ip4/43.230.90.191/tcp/8888] dial tcp4 0.0.0.0:46549->43.230.90.191:8888: i/o timeout  * [/ip4/183.60.252.190/tcp/8888] dial tcp4 0.0.0.0:46549->183.60.252.190:8888: i/o timeout
  f01154: 'dial, NR', // * [/ip4/192.168.2.50/tcp/1024] dial tcp4 0.0.0.0:46549->192.168.2.50:1024: i/o timeout
  f01155: 'dial, China, Shanghai', // * [/ip4/203.107.44.156/tcp/39770] dial tcp4 0.0.0.0:46549->203.107.44.156:39770: i/o timeout
  f01231: 'dial, Singapore', // * [/ip4/172.17.32.101/tcp/10241] dial tcp4 0.0.0.0:46549->172.17.32.101:10241: i/o timeout
  f01235: 'dial, Singapore', // * [/ip4/170.33.12.95/tcp/16668] dial tcp4 0.0.0.0:46549->170.33.12.95:16668: i/o timeout
  f01279: 'dial, China, Sichuan', // * [/ip4/118.116.2.66/tcp/40000] dial tcp4 0.0.0.0:46549->118.116.2.66:40000: i/o timeout
  f01287: 'dial, China, Jiaxing, MaiTian', // * [/ip4/122.225.68.92/tcp/5472] dial tcp4 0.0.0.0:46549->122.225.68.92:5472: i/o timeout  * [/ip4/172.16.2.123/tcp/5472] dial tcp4 0.0.0.0:46549->172.16.2.123:5472: i/o timeout
  f01475: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17031] dial tcp4 0.0.0.0:46549->170.33.12.186:17031: i/o timeout
  f01782: 'dial, China, Shanghai', // * [/ip4/139.196.240.164/tcp/11347] dial tcp4 0.0.0.0:46549->139.196.240.164:11347: i/o timeout
  f01800: 'dial, China, Shenzhen + Chengdu', // * [/ip4/182.131.4.48/tcp/33333] dial tcp4 182.131.4.48:33333: connect: connection refused
  f02299: 'dial, China, Beijing', // * [/ip4/182.18.83.2/tcp/1024] dial tcp4 0.0.0.0:46549->182.18.83.2:1024: i/o timeout
  f02399: 'dial, China, Shanghai', // * [/ip4/175.24.25.61/tcp/44449] dial tcp4 0.0.0.0:46549->175.24.25.61:44449: i/o timeout
  f02403: 'dial, UK, London + Manchester', // * [/ip4/2.58.45.33/tcp/18888] dial tcp4 0.0.0.0:46549->2.58.45.33:18888: i/o timeout  * [/ip4/2.58.47.71/tcp/18888] dial tcp4 0.0.0.0:46549->2.58.47.71:18888: i/o timeout
  f02405: 'dial, China, Shenzhen', // * [/ip4/119.147.213.59/tcp/4123] dial tcp4 119.147.213.59:4123: connect: connection refused  * [/ip4/192.168.231.206/tcp/4123] dial tcp4 0.0.0.0:46549->192.168.231.206:4123: i/o timeout
  f02417: 'dial, China, Zhangjiakou', // * [/ip4/116.132.221.10/tcp/10240] dial tcp4 116.132.221.10:10240: connect: connection refused
  f02420: 'dial, USA', // * [/ip4/47.252.2.93/tcp/34571] dial tcp4 0.0.0.0:46549->47.252.2.93:34571: i/o timeout
  f02422: "dial, China, Xi'an", // * [/ip4/117.38.4.82/tcp/2347] dial tcp4 0.0.0.0:46549->117.38.4.82:2347: i/o timeout  * [/ip4/117.38.4.82/tcp/22347] dial tcp4 0.0.0.0:46549->117.38.4.82:22347: i/o timeout
  f02425: 'dial, China, Shanghai', // * [/ip4/103.78.229.73/tcp/14567] dial tcp4 0.0.0.0:46549->103.78.229.73:14567: i/o timeout
  f02438: 'dial, China, Guangdong', // * [/ip4/47.115.10.99/tcp/14567] dial tcp4 0.0.0.0:46549->47.115.10.99:14567: i/o timeout
  f02492: 'dial, China, Guangdong', // * [/ip4/103.142.248.7/tcp/3347] dial tcp4 0.0.0.0:46549->103.142.248.7:3347: i/o timeout
  f02529: 'dial, China, Chongqing + Singapore', // * [/ip4/101.206.156.202/tcp/23004] dial tcp4 0.0.0.0:46549->101.206.156.202:23004: i/o timeout  * [/ip4/8.209.64.163/tcp/23004] dial tcp4 0.0.0.0:46549->8.209.64.163:23004: i/o timeout
  f02610: 'dial, Netherlands', // * [/ip4/213.227.129.197/tcp/14567] dial tcp4 0.0.0.0:46549->213.227.129.197:14567: i/o timeout
  f02613: 'dial, China, Chongqing + Singapore', // * [/ip4/101.206.156.202/tcp/23027] dial tcp4 0.0.0.0:46549->101.206.156.202:23027: i/o timeout  * [/ip4/8.209.64.163/tcp/23027] dial tcp4 0.0.0.0:46549->8.209.64.163:23027: i/o timeout
  f02614: 'dial, Singapore', // * [/ip4/170.33.9.50/tcp/32633] dial tcp4 0.0.0.0:46549->170.33.9.50:32633: i/o timeout
  f02626: 'dial, Singapore', // * [/ip4/8.209.115.161/tcp/58237] dial tcp4 0.0.0.0:46549->8.209.115.161:58237: i/o timeout
  f02654: 'dial, China, Shanghai', // * [/ip4/114.88.222.181/tcp/43355] dial tcp4 0.0.0.0:46549->114.88.222.181:43355: i/o timeout
  f02721: 'dial, USA', // * [/ip4/135.90.74.200/tcp/14567] dial tcp4 0.0.0.0:46549->135.90.74.200:14567: i/o timeout
  f02723: 'dial, China, Tongling', // * [/ip4/60.173.23.17/tcp/23456] dial tcp4 0.0.0.0:46549->60.173.23.17:23456: i/o timeout
  f02725: 'dial, China, Hong Kong', // * [/ip4/101.32.38.57/tcp/18899] dial tcp4 0.0.0.0:46549->101.32.38.57:18899: i/o timeout
  f02726: 'dial, USA, Brooklyn', // * [/ip4/169.62.51.212/tcp/14567] dial tcp4 0.0.0.0:46549->169.62.51.212:14567: i/o timeout
  f02731: 'dial, NR', // * [/ip4/10.30.8.4/tcp/14567] dial tcp4 0.0.0.0:46549->10.30.8.4:14567: i/o timeout
  f02767: 'dial, Germany, Frankfurt', // * [/ip4/18.192.27.227/tcp/37722] dial tcp4 0.0.0.0:46549->18.192.27.227:37722: i/o timeout
  f02838: 'dial, China, Chengdu', // * [/ip4/118.123.228.9/tcp/48633] dial tcp4 0.0.0.0:46549->118.123.228.9:48633: i/o timeout
  f03002: 'dial, China, Chongqing + Singapore', // * [/ip4/101.206.156.202/tcp/18880] dial tcp4 0.0.0.0:46549->101.206.156.202:18880: i/o timeout  * [/ip4/8.209.64.163/tcp/18880] dial tcp4 0.0.0.0:46549->8.209.64.163:18880: i/o timeout
  f03144: 'dial, China, Hong Kong', // * [/ip4/103.214.41.38/tcp/23456] dial tcp4 0.0.0.0:46549->103.214.41.38:23456: i/o timeout
  f03176: 'dial, USA, San Mateo', // * [/ip4/47.88.57.241/tcp/15470] dial tcp4 0.0.0.0:46549->47.88.57.241:15470: i/o timeout  * [/ip4/47.88.55.220/tcp/15470] dial tcp4 0.0.0.0:46549->47.88.55.220:15470: i/o timeout
  f03266: 'dial, USA', // * [/ip4/169.63.27.151/tcp/14567] dial tcp4 0.0.0.0:46549->169.63.27.151:14567: i/o timeout
  f03287: 'dial, USA', // * [/ip4/149.81.122.165/tcp/14567] dial tcp4 0.0.0.0:46549->149.81.122.165:14567: i/o timeout
  f03325: 'dial, China, Guangdong', // * [/ip4/113.107.201.186/tcp/42243] dial tcp4 113.107.201.186:42243: connect: connection refused
  f03328: 'dial, China, Xinxiang, Golden Miner', // * [/ip4/27.50.142.61/tcp/2347] dial tcp4 0.0.0.0:46549->27.50.142.61:2347: i/o timeout
  f03358: 'dial, China, Ordos', // * [/ip4/1.183.72.211/tcp/30001] dial tcp4 0.0.0.0:46549->1.183.72.211:30001: i/o timeout
  f03363: 'dial, China, Ordos', // * [/ip4/1.183.72.210/tcp/30003] dial tcp4 0.0.0.0:46549->1.183.72.210:30003: i/o timeout
  f03367: 'dial, Singapore', // * [/ip4/8.209.99.1/tcp/14567] dial tcp4 0.0.0.0:46549->8.209.99.1:14567: i/o timeout
  f03482: 'dial, China, Karamay', // * [/ip4/221.228.238.110/tcp/23456] dial tcp4 221.228.238.110:23456: connect: connection refused
  f03488: 'dial, Korea, Yeongdeungpo-dong', // * [/ip4/112.216.168.42/tcp/10000] dial tcp4 112.216.168.42:10000: connect: connection refused
  f04443: 'dial, China, Shanghai', // * [/ip4/116.229.183.166/tcp/29847] dial tcp4 0.0.0.0:46549->116.229.183.166:29847: i/o timeout
  f07824: 'dial, NR', // * [/ip4/10.133.13.111/tcp/32759] dial tcp4 0.0.0.0:46549->10.133.13.111:32759: i/o timeout
  f07919: 'dial, China, Beijing, Shanghai, Hunan', // * [/ip4/101.32.198.187/tcp/23456] dial tcp4 0.0.0.0:46549->101.32.198.187:23456: i/o timeout  * [/ip4/47.101.4.131/tcp/23456] dial tcp4 0.0.0.0:46549->47.101.4.131:23456: i/o timeout  * [/ip4/101.32.198.186/tcp/23456] dial tcp4 0.0.0.0:46549->101.32.198.186:23456: i/o timeout  * [/ip4/139.196.136.126/tcp/23456] failed to negotiate security protocol: read tcp4 144.217.11.204:46549->139.196.136.126:23456: read: connection reset by peer
  f07969: 'dial, China, Hangzhou', // * [/ip4/121.52.246.48/tcp/5002] dial tcp4 0.0.0.0:46549->121.52.246.48:5002: i/o timeout
  f08091: 'dial, NR', // * [/ip4/0.0.0.0/tcp/5472] dial tcp4 0.0.0.0:5472: connect: connection refused
  f08094: 'dial, China, Guangzhou', // * [/ip4/183.2.154.179/tcp/23450] dial tcp4 0.0.0.0:46549->183.2.154.179:23450: i/o timeout
  f08101: 'dial, NR', // * [/ip4/192.168.3.11/tcp/32759] dial tcp4 0.0.0.0:46549->192.168.3.11:32759: i/o timeout
  f08148: 'dial, Hong Kong', // * [/ip4/103.108.182.27/tcp/30031] dial tcp4 0.0.0.0:46549->103.108.182.27:30031: i/o timeout
  f08242: 'dial, USA', // * [/ip4/47.242.56.117/tcp/6789] dial tcp4 0.0.0.0:46549->47.242.56.117:6789: i/o timeout
  f08264: 'dial, China, Xianning', // * [/ip4/103.222.191.115/tcp/1161] dial tcp4 0.0.0.0:46549->103.222.191.115:1161: i/o timeout
  f09002: "dial, China, Xi'an", // * [/ip4/113.200.194.196/tcp/32634] dial tcp4 0.0.0.0:46549->113.200.194.196:32634: i/o timeout
  f09037: 'dial, Singapore', // * [/ip4/170.33.12.95/tcp/16666] dial tcp4 0.0.0.0:46549->170.33.12.95:16666: i/o timeout
  f09589: 'dial, China, Changsha', // * [/ip4/175.10.162.119/tcp/5472] dial tcp4 0.0.0.0:46549->175.10.162.119:5472: i/o timeout
  f09652: 'dial, Singapore', // * [/ip4/170.33.9.50/tcp/32632] dial tcp4 0.0.0.0:46549->170.33.9.50:32632: i/o timeout
  f09710: 'dial, China, Shenzhen', // * [/ip4/103.44.253.56/tcp/40573] dial tcp4 0.0.0.0:46549->103.44.253.56:40573: i/o timeout
  f010010: 'dial, China, Changzhou', // * [/ip4/61.177.78.101/tcp/9981] dial tcp4 0.0.0.0:46549->61.177.78.101:9981: i/o timeout
  f010048: 'dial, China, Shanghai', // * [/ip4/124.78.146.207/tcp/65500] dial tcp4 0.0.0.0:46549->124.78.146.207:65500: i/o timeout
  f010056: 'dial, Singapore', // * [/ip4/8.209.82.79/tcp/14567] dial tcp4 0.0.0.0:46549->8.209.82.79:14567: i/o timeout
  f010225: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12312] dial tcp4 0.0.0.0:46549->8.209.107.150:12312: i/o timeout
  f010247: 'dial, China, Yantai', // * [/ip4/122.14.201.169/tcp/10240] dial tcp4 0.0.0.0:46549->122.14.201.169:10240: i/o timeout
  f010399: 'dial, China, Guangzhou', // * [/ip4/183.2.154.156/tcp/36699] dial tcp4 0.0.0.0:46549->183.2.154.156:36699: i/o timeout
  f010400: 'dial, China, Shenyang', // * [/ip4/59.44.27.130/tcp/8787] dial tcp4 0.0.0.0:46549->59.44.27.130:8787: i/o timeout
  f010424: 'dial, Australia, Sydney', // * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:46549->43.241.189.214:39438: i/o timeout
  f010491: 'dial, China, Shenzhen', // * [/ip4/113.116.129.50/tcp/8888] dial tcp4 0.0.0.0:46549->113.116.129.50:8888: i/o timeout
  f010501: 'dial, China, Hangzhou, Interstellar Roewe', // * [/ip4/183.134.218.26/tcp/21735] dial tcp4 0.0.0.0:46549->183.134.218.26:21735: i/o timeout
  f010523: 'dial, China, Beijing, Interstellar Roewe', // * [/ip4/123.58.99.210/tcp/21735] dial tcp4 0.0.0.0:46549->123.58.99.210:21735: i/o timeout
  f010538: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12320] dial tcp4 0.0.0.0:46549->8.209.107.150:12320: i/o timeout
  f010616: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12313] dial tcp4 0.0.0.0:46549->8.209.107.150:12313: i/o timeout
  f014251: 'dial, China, Shenzhen', // * [/ip4/58.220.66.66/tcp/46166] dial tcp4 0.0.0.0:46549->58.220.66.66:46166: i/o timeout
  f014311: 'dial, Germany, Frankfurt', // * [/ip4/162.62.55.44/tcp/12309] dial tcp4 0.0.0.0:46549->162.62.55.44:12309: i/o timeout
  f014386: 'dial, China, Panzhihua', // * [/ip4/180.149.130.16/tcp/9845] dial tcp4 0.0.0.0:46549->180.149.130.16:9845: i/o timeout
  f014392: 'dial, USA + Russia, Khabarovsk + Japan, Heiwajima', // * [/ip4/92.223.72.130/tcp/9999] failed to negotiate security protocol: unexpected EOF  * [/ip4/172.247.228.122/tcp/9999] dial tcp4 0.0.0.0:46549->172.247.228.122:9999: i/o timeout  * [/ip4/66.42.38.110/tcp/9990] dial tcp4 0.0.0.0:46549->66.42.38.110:9990: i/o timeout
  f014395: 'dial, China, Dongguan', // * [/ip4/125.93.73.102/tcp/51105] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJyNmap2Z6WWb6xBqDwUpKeFkGHaBHDkMKhrkd6jj6FEY, but remote key matches 12D3KooWB6MM5Fda1RdDyTdJCPMpvHFq6HSJfPV9DeoqGSbfwe1d
  f014415: 'dial, USA', // * [/ip4/13.248.165.152/tcp/33612] failed to negotiate security protocol: EOF
  f014522: 'dial, China, Shanghai', // * [/ip4/81.68.170.164/tcp/5474] dial tcp4 0.0.0.0:46549->81.68.170.164:5474: i/o timeout
  f014706: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12308] dial tcp4 0.0.0.0:46549->8.209.107.150:12308: i/o timeout
  f014778: 'dial, Germany, Frankfurt', // * [/ip4/162.62.55.44/tcp/12310] dial tcp4 0.0.0.0:46549->162.62.55.44:12310: i/o timeout
  f014804: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12314] dial tcp4 0.0.0.0:46549->8.209.107.150:12314: i/o timeout
  f015685: 'dial, China, Shanghai', // * [/ip4/222.64.141.185/tcp/40321] dial tcp4 0.0.0.0:46549->222.64.141.185:40321: i/o timeout
  f015731: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12329] dial tcp4 0.0.0.0:46549->8.209.107.150:12329: i/o timeout
  f015848: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12321] dial tcp4 0.0.0.0:46549->8.209.107.150:12321: i/o timeout
  f015919: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12316] dial tcp4 0.0.0.0:46549->8.209.107.150:12316: i/o timeout
  f015922: 'dial, Germany, Frankfurt', // * [/ip4/162.62.55.44/tcp/12317] dial tcp4 0.0.0.0:46549->162.62.55.44:12317: i/o timeout
  f015925: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12318] dial tcp4 0.0.0.0:46549->8.209.107.150:12318: i/o timeout
  f015926: 'dial, Germany, Frankfurt', // * [/ip4/162.62.55.44/tcp/12319] dial tcp4 0.0.0.0:46549->162.62.55.44:12319: i/o timeout
  f015941: 'dial, Ukraine, Kyiv', // * [/ip4/176.37.167.219/tcp/1347] dial tcp4 0.0.0.0:46549->176.37.167.219:1347: i/o timeout
  f016563: 'dial, China, Deyang + Singapore', // * [/ip4/161.117.186.53/tcp/8001] failed to negotiate security protocol: read tcp4 144.217.11.204:46549->161.117.186.53:8001: read: connection reset by peer  * [/ip4/125.64.78.27/tcp/8001] dial tcp4 125.64.78.27:8001: connect: connection refused  * [/ip4/192.168.109.1/tcp/8001] dial tcp4 0.0.0.0:46549->192.168.109.1:8001: i/o timeout
  f019074: 'dial, NR', // * [/ip4/192.168.2.55/tcp/3000] dial tcp4 0.0.0.0:46549->192.168.2.55:3000: i/o timeout
  f019099: 'dial, China, Hong Kong + Guangzhou', // * [/ip4/45.158.182.10/tcp/12345] dial tcp4 0.0.0.0:46549->45.158.182.10:12345: i/o timeout
  f019100: 'dial, Romania, Cluj-Napoca, noisyfan', // * [/ip4/79.119.122.118/tcp/55555] dial tcp4 0.0.0.0:46549->79.119.122.118:55555: i/o timeout
  f019354: 'dial, Germany, Frankfurt', // * [/ip4/128.1.78.98/tcp/31437] dial tcp4 0.0.0.0:46549->128.1.78.98:31437: i/o timeout
  f019638: 'dial, China, Ordos', // * [/ip4/1.183.72.210/tcp/30005] dial tcp4 0.0.0.0:46549->1.183.72.210:30005: i/o timeout
  f020315: 'dial, China, Guangzhou', // * [/ip4/103.104.170.72/tcp/56432] dial tcp4 0.0.0.0:46549->103.104.170.72:56432: i/o timeout
  f020330: 'dial, Singapore', // * [/ip4/8.130.24.60/tcp/14567] dial tcp4 0.0.0.0:46549->8.130.24.60:14567: i/o timeout
  f020331: 'dial, China, Beijing', // * [/ip4/39.101.70.154/tcp/14567] dial tcp4 0.0.0.0:46549->39.101.70.154:14567: i/o timeout
  f020452: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17012] dial tcp4 0.0.0.0:46549->170.33.12.186:17012: i/o timeout
  f020522: 'dial, Singapore', // * [/ip4/8.211.49.16/tcp/14567] dial tcp4 0.0.0.0:46549->8.211.49.16:14567: i/o timeout
  f020604: 'dial, Singapore', // * [/ip4/8.209.106.203/tcp/14567] dial tcp4 0.0.0.0:46549->8.209.106.203:14567: i/o timeout
  f020618: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17011] dial tcp4 0.0.0.0:46549->170.33.12.186:17011: i/o timeout
  f020742: 'dial, China, Shanghai', // * [/ip4/175.24.25.61/tcp/53456] dial tcp4 0.0.0.0:46549->175.24.25.61:53456: i/o timeout
  f021461: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17361] dial tcp4 0.0.0.0:46549->170.33.12.186:17361: i/o timeout
  f021479: 'dial, NR', // * [/ip4/172.18.117.166/tcp/10241] dial tcp4 0.0.0.0:46549->172.18.117.166:10241: i/o timeout
  f021525: 'dial, China, Guangdong', // * [/ip4/121.201.41.87/tcp/14567] dial tcp4 0.0.0.0:46549->121.201.41.87:14567: i/o timeout
  f021532: 'dial, China, Shanghai', // * [/ip4/121.46.237.2/tcp/23456] dial tcp4 0.0.0.0:46549->121.46.237.2:23456: i/o timeout
  f021547: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17329] dial tcp4 0.0.0.0:46549->170.33.12.186:17329: i/o timeout
  f022111: 'dial, China, Quanzhou', // * [/ip4/112.47.13.98/tcp/8081] dial tcp4 0.0.0.0:46549->112.47.13.98:8081: i/o timeout
  f022227: 'dial, China, Jiangsu', // * [/ip4/112.30.158.226/tcp/10240] dial tcp4 0.0.0.0:46549->112.30.158.226:10240: i/o timeout
  f022522: 'dial, China, Dongguan', // * [/ip4/113.105.174.12/tcp/10000] dial tcp4 0.0.0.0:46549->113.105.174.12:10000: i/o timeout
  f022687: 'dial, China, Chengdu', // * [/ip4/182.131.4.194/tcp/10080] dial tcp4 0.0.0.0:46549->182.131.4.194:10080: i/o timeout
  f023001: 'dial, China, Changsha', // * [/ip4/192.168.1.236/tcp/34617] dial tcp4 0.0.0.0:46549->192.168.1.236:34617: i/o timeout
  f023200: 'dial, China, Shanghai', // * [/ip4/175.24.25.61/tcp/13457] dial tcp4 0.0.0.0:46549->175.24.25.61:13457: i/o timeout
  f023205: 'dial, Singapore', // * [/ip4/8.130.25.103/tcp/14567] dial tcp4 0.0.0.0:46549->8.130.25.103:14567: i/o timeout
  f023462: 'dial, China, Chongqing', // * [/ip4/101.206.156.202/tcp/23018] dial tcp4 0.0.0.0:46549->101.206.156.202:23018: i/o timeout
  f023530: 'dial, China, Shanghai', // * [/ip4/172.17.32.53/tcp/10241] dial tcp4 0.0.0.0:46549->172.17.32.53:10241: i/o timeout
  f023534: 'dial, China, Chongqing', // * [/ip4/101.206.156.202/tcp/23019] dial tcp4 0.0.0.0:46549->101.206.156.202:23019: i/o timeout
  f023561: 'dial, China, Shenzhen', // * [/ip4/103.44.247.32/tcp/40573] dial tcp4 0.0.0.0:46549->103.44.247.32:40573: i/o timeout
  f023882: 'dial, NR', // * [/ip4/10.21.0.2/tcp/7000] dial tcp4 0.0.0.0:46549->10.21.0.2:7000: i/o timeout
  f024066: 'dial, China, Chengdu', // * [/ip4/182.131.4.197/tcp/10080] dial tcp4 0.0.0.0:46549->182.131.4.197:10080: i/o timeout
  f024089: 'dial, NR', // * [/ip4/10.11.4.210/tcp/1234] dial tcp4 0.0.0.0:46549->10.11.4.210:1234: i/o timeout
  f024137: 'dial, Singapore', // * [/ip4/8.130.25.208/tcp/14567] dial tcp4 0.0.0.0:46549->8.130.25.208:14567: i/o timeout
  f024156: 'dial, USA', // * [/ip4/156.238.62.5/tcp/2345] dial tcp4 0.0.0.0:46549->156.238.62.5:2345: i/o timeout
  f024182: 'dial, China, Hong Kong', // * [/ip4/14.136.246.136/tcp/46717] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQFqPz3vvYGGxB259qZfg3qzoKEnafG8DbfMKUHEUQ26z, but remote key matches 12D3KooWHuQtiCKJykJscPMrNiXaguBWKuhBfKDfGP6ieR6SgwdF
  f024511: 'dial, China, Shenzhen', // * [/ip4/103.44.247.137/tcp/51105] dial tcp4 0.0.0.0:46549->103.44.247.137:51105: i/o timeout
  f025002: 'dial, NR', // * [/ip4/10.30.8.211/tcp/14567] dial tcp4 0.0.0.0:46549->10.30.8.211:14567: i/o timeout
  f025017: 'dial, China, Hefei, 一三科技-913', // * [/ip4/175.6.250.70/tcp/51105] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBZeFG1c5zNwCCVnCa6g5TyrUQu5f9oLTYsZyvSigBEXu, but remote key matches 12D3KooWHNxRAA9LvkwDt5a1oQUAqoHzVYXqwueDHo1kGDxAHMQN
  f025019: 'dial, China, Taiwan, Hsinchu', // * [/ip4/140.113.194.250/tcp/24002] dial tcp4 0.0.0.0:46549->140.113.194.250:24002: i/o timeout
  f029416: 'dial, NR', // * [/ip4/0.0.0.0/tcp/1024] dial tcp4 0.0.0.0:1024: connect: connection refused
  f029665: 'dial, China, Shenyang', // * [/ip4/124.95.135.132/tcp/7000] dial tcp4 124.95.135.132:7000: connect: connection refused
  f034544: 'dial, NR', // * [/ip4/183.131.58.134/tcp/14567] dial tcp4 0.0.0.0:46549->183.131.58.134:14567: i/o timeout
  f034545: 'dial, NR', // * [/ip4/183.131.58.102/tcp/14567] dial tcp4 0.0.0.0:46549->183.131.58.102:14567: i/o timeout
  f034548: 'dial, NR', // * [/ip4/183.131.58.70/tcp/14567] dial tcp4 0.0.0.0:46549->183.131.58.70:14567: i/o timeout
  f034581: 'dial, NR', // * [/ip6/::1/tcp/33575] dial tcp6 [::1]:33575: connect: connection refused  * [/ip4/127.0.0.1/tcp/32323] dial tcp4 127.0.0.1:32323: connect: connection refused  * [/ip4/119.147.213.56/tcp/32323] dial tcp4 0.0.0.0:46549->119.147.213.56:32323: i/o timeout  * [/ip4/192.168.231.111/tcp/32323] dial tcp4 0.0.0.0:46549->192.168.231.111:32323: i/o timeout
  f034592: 'dial, NR', // * [/ip4/119.147.213.217/tcp/45137] dial tcp4 0.0.0.0:46549->119.147.213.217:45137: i/o timeout
  f034701: 'dial, China, Shenzhen', // * [/ip4/103.44.247.136/tcp/51105] dial tcp4 0.0.0.0:46549->103.44.247.136:51105: i/o timeout
  f043929: 'dial, NR', // * [/ip4/120.232.96.38/tcp/24001] dial tcp4 0.0.0.0:46549->120.232.96.38:24001: i/o timeout
  f044315: 'dial, NR', // * [/ip4/127.0.0.1/tcp/23456] dial tcp4 127.0.0.1:23456: connect: connection refused  * [/ip4/183.136.238.136/tcp/2151] dial tcp4 183.136.238.136:2151: connect: connection refused  * [/ip4/183.136.238.136/tcp/2048] dial tcp4 183.136.238.136:2048: connect: connection refused  * [/ip4/172.16.0.10/tcp/23456] dial tcp4 0.0.0.0:46549->172.16.0.10:23456: i/o timeout
  f045505: 'dial, China, Ordos', // * [/ip4/1.183.72.226/tcp/12700] dial tcp4 0.0.0.0:46549->1.183.72.226:12700: i/o timeout
  f048669: 'dial, NR', // * [/ip4/58.220.66.88/tcp/22332] dial tcp4 0.0.0.0:46549->58.220.66.88:22332: i/o timeout
  f053140: 'dial, China, Shenzhen', // * [/ip4/119.147.149.191/tcp/40573] dial tcp4 0.0.0.0:46549->119.147.149.191:40573: i/o timeout
  f053229: 'dial, NR', // * [/ip4/172.18.112.203/tcp/10241] dial tcp4 0.0.0.0:46549->172.18.112.203:10241: i/o timeout
  f054499: 'dial, NR', // * [/ip4/0.0.0.0/tcp/5472] dial tcp4 0.0.0.0:5472: connect: connection refused
  f054666: 'dial, China, Changsha', // * [/ip4/36.158.255.7/tcp/1024] dial tcp4 0.0.0.0:46549->36.158.255.7:1024: i/o timeout
  f057070: 'dial, NR', // * [/ip4/117.71.104.68/tcp/10240] dial tcp4 0.0.0.0:46549->117.71.104.68:10240: i/o timeout
  f058374: 'dial, NR', // * [/ip4/104.206.104.94/tcp/18375] dial tcp4 104.206.104.94:18375: connect: connection refused
  f059740: 'dial, Germany, Bottrop', // * [/ip4/156.67.191.194/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWR2iY2SFgjHM45NkQEJMmAathsCrgHWADbbCnPzsuS2bY, but remote key matches 12D3KooWR3EjX6z4ZkNRAbnF442tu5aCeLPQj62Xn7qCQ2KzPKwS
  f059788: 'dial, China, Zhanjiang', // * [/ip4/183.2.149.76/tcp/33669] dial tcp4 0.0.0.0:46549->183.2.149.76:33669: i/o timeout
  f061158: 'dial, China, Guangdong, phoenix', // * [/ip4/183.204.60.235/tcp/63305] dial tcp4 0.0.0.0:46549->183.204.60.235:63305: i/o timeout
  f061959: 'dial, NR', // * [/ip4/172.18.113.213/tcp/10241] dial tcp4 0.0.0.0:46549->172.18.113.213:10241: i/o timeout
  f062931: 'dial, NR', // * [/ip4/115.231.84.133/tcp/14567] dial tcp4 0.0.0.0:46549->115.231.84.133:14567: i/o timeout
  f066102: 'dial, NR', // * [/ip4/172.18.112.93/tcp/10241] dial tcp4 0.0.0.0:46549->172.18.112.93:10241: i/o timeout
  f066259: 'dial, NR', // * [/ip4/172.19.100.73/tcp/10241] dial tcp4 0.0.0.0:46549->172.19.100.73:10241: i/o timeout
  f068096: 'dial, China, Sichuan', // * [/ip4/222.213.23.200/tcp/38999] dial tcp4 222.213.23.200:38999: connect: connection refused
  f068560: 'dial, China, Changsha', // * [/ip4/172.16.100.111/tcp/37929] dial tcp4 0.0.0.0:46549->172.16.100.111:37929: i/o timeout
  f069391: 'dial, NR', // * [/ip4/192.168.1.10/tcp/32759] dial tcp4 0.0.0.0:46549->192.168.1.10:32759: i/o timeout
  f070044: 'dial, China', // * [/ip4/47.57.185.52/tcp/12600] dial tcp4 0.0.0.0:46549->47.57.185.52:12600: i/o timeout
  f070932: 'dial, NR', // * [/ip4/172.19.100.131/tcp/10241] dial tcp4 0.0.0.0:46549->172.19.100.131:10241: i/o timeout
  f071664: 'dial, China, Shangdong', // * [/ip4/10.133.8.210/tcp/32759] dial tcp4 0.0.0.0:46549->10.133.8.210:32759: i/o timeout
  f073904: 'dial, NR', // * [/ip6/::1/tcp/24495] dial tcp6 [::1]:24495: connect: connection refused  * [/ip4/127.0.0.1/tcp/12881] dial tcp4 127.0.0.1:12881: connect: connection refused  * [/ip4/61.160.232.189/tcp/12881] dial tcp4 61.160.232.189:12881: connect: no route to host  * [/ip4/192.168.100.12/tcp/12881] dial tcp4 0.0.0.0:46549->192.168.100.12:12881: i/o timeout
  f079285: 'dial, NR', // * [/ip4/172.22.20.109/tcp/10241] dial tcp4 0.0.0.0:46549->172.22.20.109:10241: i/o timeout
  f079426: 'dial, China, Shandong', // * [/ip4/106.74.7.6/tcp/32759] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQBg2oErr3Mx2fky471oxpmQmVggaDsGGVNqFagL27HeY, but remote key matches 12D3KooWQtkXUECWx5MBUugczDBoDq6DJcse1m56FHLmhRkGLyHK
  f081078: 'dial, Korea, Busan', // * [/ip4/220.84.94.10/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMW8ZvKgprKTTmt8cuoC5YYZeJtCn6iBuHWLg6J8rGUts, but remote key matches 12D3KooWLe7nwrhYUwgTjy7B92xgeuVZFVzgXHuM4wGzmcYg6asG
  f081222: 'dial, China, Changzhou', // * [/ip4/218.93.31.109/tcp/9876] dial tcp4 0.0.0.0:46549->218.93.31.109:9876: i/o timeout
  f082617: 'dial, China, Fujian', // * [/ip4/45.119.63.131/tcp/51105] dial tcp4 45.119.63.131:51105: connect: connection refused
  f082958: 'dial, NR', // * [/ip4/0.0.0.0/tcp/42547] dial tcp4 0.0.0.0:42547: connect: connection refused
  f087965: 'dial, China, Suzhou', // * [/ip4/58.211.213.210/tcp/2251] dial tcp4 58.211.213.210:2251: connect: connection refused
  f088125: 'dial, NR', // * [/ip4/172.22.22.101/tcp/10241] dial tcp4 0.0.0.0:46549->172.22.22.101:10241: i/o timeout
  f088400: 'dial, NR', // * [/ip4/172.22.22.102/tcp/10241] dial tcp4 0.0.0.0:46549->172.22.22.102:10241: i/o timeout
  f089173: 'dial, NR', // * [/ip4/172.19.108.155/tcp/10241] dial tcp4 0.0.0.0:46549->172.19.108.155:10241: i/o timeout
  f089228: 'dial, NR', // * [/ip4/172.18.114.50/tcp/10241] dial tcp4 0.0.0.0:46549->172.18.114.50:10241: i/o timeout
  f089358: 'dial, NR', // * [/ip4/172.22.7.106/tcp/10241] dial tcp4 0.0.0.0:46549->172.22.7.106:10241: i/o timeout
  f089380: 'dial, NR', // * [/ip4/172.19.100.76/tcp/10241] dial tcp4 0.0.0.0:46549->172.19.100.76:10241: i/o timeout
  f089551: 'dial, NR', // * [/ip4/121.40.135.72/tcp/26892] failed to negotiate security protocol: read tcp4 144.217.11.204:46549->121.40.135.72:26892: read: connection reset by peer
  f089767: 'dial, USA, Bowie', // * [/ip4/76.223.76.26/tcp/33905] dial tcp4 0.0.0.0:46549->76.223.76.26:33905: i/o timeout  * [/ip4/129.168.0.1/tcp/912] dial tcp4 0.0.0.0:46549->129.168.0.1:912: i/o timeout
  f094765: 'dial, NR', // * [/ip4/218.68.85.213/tcp/12350] dial tcp4 218.68.85.213:12350: connect: connection refused
  f095382: 'dial, China, Dongguan', // * [/ip4/125.93.73.102/tcp/2345] dial tcp4 125.93.73.102:2345: connect: connection refused
  f096133: 'dial, China, Changsha + Dazhou', // * [/ip4/175.6.66.78/tcp/14913] dial tcp4 0.0.0.0:46549->175.6.66.78:14913: i/o timeout  * [/ip4/175.6.68.154/tcp/14913] dial tcp4 0.0.0.0:46549->175.6.68.154:14913: i/o timeout
  f096173: 'dial, Korea, Gangnam-gu', // * [/ip4/61.78.81.239/tcp/23456] dial tcp4 0.0.0.0:46549->61.78.81.239:23456: i/o timeout  * [/ip4/61.78.81.239/tcp/22222] dial tcp4 0.0.0.0:46549->61.78.81.239:22222: i/o timeout  * [/ip4/61.78.81.239/tcp/12345] dial tcp4 0.0.0.0:46549->61.78.81.239:12345: i/o timeout  * [/ip4/61.78.81.239/tcp/8800] dial tcp4 0.0.0.0:46549->61.78.81.239:8800: i/o timeout  * [/ip4/61.78.81.239/tcp/33333] dial tcp4 0.0.0.0:46549->61.78.81.239:33333: i/o timeout  * [/ip4/61.78.81.239/tcp/44444] dial tcp4 0.0.0.0:46549->61.78.81.239:44444: i/o timeout  * [/ip4/61.78.81.239/tcp/55555] dial tcp4 0.0.0.0:46549->61.78.81.239:55555: i/o timeout  * [/ip4/61.78.81.239/tcp/11111] dial tcp4 0.0.0.0:46549->61.78.81.239:11111: i/o timeout
  f097182: 'dial, China, Chengdu', // * [/ip4/182.131.4.195/tcp/32759] dial tcp4 182.131.4.195:32759: connect: connection refused
  f097687: 'dial, China, Yangzhou', // * [/ip4/61.147.81.133/tcp/16017] dial tcp4 61.147.81.133:16017: connect: connection refused
  f099949: 'dial, China, Chengdu', // * [/ip4/182.131.4.195/tcp/32760] dial tcp4 182.131.4.195:32760: connect: connection refused
  f0101403: 'dial, China, Chengdu', // * [/ip4/182.131.4.195/tcp/32761] dial tcp4 182.131.4.195:32761: connect: connection refused
  f0103396: 'dial, China, Hangzhou', // * [/ip4/60.190.243.138/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLCnguS1TqxnrbCmDoAbJckjLEvo9xko2xvqmojc1ezxE, but remote key matches 12D3KooWJ9KC3jmmLpSk4pdrMA5Bn3VgCpvJs7QGQfXWGTVmTM2M
  f0106363: 'dial, NR', // * [/ip4/127.0.0.1/tcp/24001] dial tcp4 127.0.0.1:24001: connect: connection refused  * [/ip4/127.0.0.1/tcp/40573] dial tcp4 127.0.0.1:40573: connect: connection refused
  f0107002: 'dial, NR', // * [/ip6/::1/tcp/39947] dial tcp6 [::1]:39947: connect: connection refused  * [/ip4/127.0.0.1/tcp/36965] dial tcp4 127.0.0.1:36965: connect: connection refused  * [/ip4/172.24.0.30/tcp/36965] dial tcp4 0.0.0.0:46549->172.24.0.30:36965: i/o timeout
  f0107536: 'dial, China, Bozhou', // * [/ip4/60.174.118.137/tcp/25469] dial tcp4 60.174.118.137:25469: connect: connection refused
  f0109743: 'dial, China, Yangzhou', // * [/ip4/58.220.66.137/tcp/10000] dial tcp4 0.0.0.0:46549->58.220.66.137:10000: i/o timeout
  f0110768: 'dial, Korea, Gwangju', // * [/ip4/211.223.2.211/tcp/24001] dial tcp4 211.223.2.211:24001: connect: connection refused
  f0111499: 'dial, China, Chengdu', // * [/ip4/182.131.4.195/tcp/32762] dial tcp4 182.131.4.195:32762: connect: connection refused
  f0111584: 'dial, NR', // * [/ip4/192.168.3.14/tcp/32759] dial tcp4 0.0.0.0:46549->192.168.3.14:32759: i/o timeout
  f0113664: 'dial, France', // * [/ip4/178.170.47.28/tcp/24001] dial tcp4 0.0.0.0:46549->178.170.47.28:24001: i/o timeout
  f0114153: 'dial, China, Changsha + Dazhou', // * [/ip4/175.6.68.154/tcp/24913] dial tcp4 0.0.0.0:46549->175.6.68.154:24913: i/o timeout  * [/ip4/175.6.66.78/tcp/24913] dial tcp4 0.0.0.0:46549->175.6.66.78:24913: i/o timeout
  f0114338: 'dial, China, Maoming', // * [/ip4/61.143.232.26/tcp/12888] dial tcp4 0.0.0.0:46549->61.143.232.26:12888: i/o timeout
  f0115990: 'dial, Korea, Gangnam-gu', // * [/ip4/61.74.222.134/tcp/36849] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCH9QfkYAUcen5u2UsQrsBgRr6SXF1DzoxmejKC3MpMur, but remote key matches 12D3KooWFbbCe63pSrR7zwsx431Y51pjAc4oKTNdjCmAwwHKGjBY
  f0116211: 'dial, China, Weifang', // * [/ip4/219.83.163.148/tcp/50666] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWF79gTgqr7VyLQu74NgBvCTuvDfp2CxGK8hxn2EYKzH6L, but remote key matches 12D3KooWRpggHrYWrczv3N2h5AAtdVFiX5zsW1duYpnfc1C8hjLa
  f0116287: 'dial, China, Shanghai', // * [/ip4/172.18.5.97/tcp/2347] dial tcp4 0.0.0.0:46549->172.18.5.97:2347: i/o timeout
  f0117146: 'dial, China, Beijing', // * [/ip4/106.12.253.240/tcp/24001] dial tcp4 0.0.0.0:46549->106.12.253.240:24001: i/o timeout
  f0119633: 'dial, NR', // * [/ip4/183.62.138.7/tcp/12358] dial tcp4 0.0.0.0:46549->183.62.138.7:12358: i/o timeout
  f0120909: 'dial, China, Changsha', // * [/ip4/127.0.0.1/tcp/7502] dial tcp4 127.0.0.1:7502: connect: connection refused
  f0122410: 'dial, China, Shanghai', // * [/ip4/172.18.5.108/tcp/1347] dial tcp4 0.0.0.0:46549->172.18.5.108:1347: i/o timeout
  f0122815: 'dial, Korea, Bucheon-si, Healthcarenavi_80', // * [/ip4/119.197.20.147/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHPFfTGdEy2ddAMDhp18ZoNiMuxD3BMqGZ2B2grYVWA3o, but remote key matches 12D3KooWJidsSojT5Eprts3nQJQCPbB1K4iZbmu7g1XM45q9n5ie
  f0124158: 'dial, NR', // * [/ip4/127.0.0.1/tcp/45827] dial tcp4 127.0.0.1:45827: connect: connection refused  * [/ip6/::1/tcp/42897] dial tcp6 [::1]:42897: connect: connection refused  * [/ip4/192.168.1.4/tcp/45827] dial tcp4 0.0.0.0:46549->192.168.1.4:45827: i/o timeout
  f0124696: 'dial, NR', // * [/ip4/127.0.0.1/tcp/42119] dial tcp4 127.0.0.1:42119: connect: connection refused  * [/ip6/::1/tcp/42601] dial tcp6 [::1]:42601: connect: connection refused  * [/ip4/192.168.2.4/tcp/42119] dial tcp4 0.0.0.0:46549->192.168.2.4:42119: i/o timeout
  f0133957: 'dial, NR', // * [/ip4/172.19.108.156/tcp/10241] dial tcp4 0.0.0.0:46549->172.19.108.156:10241: i/o timeout
  f0134006: 'dial, NR', // * [/ip4/10.140.8.12/tcp/32759] dial tcp4 0.0.0.0:46549->10.140.8.12:32759: i/o timeout
  f0135758: 'dial, NR', // * [/ip4/127.0.0.1/tcp/1346] dial tcp4 127.0.0.1:1346: connect: connection refused  * [/ip4/183.136.236.94/tcp/1346] dial tcp4 183.136.236.94:1346: connect: connection refused
  f0142721: 'dial, NR', // * [/ip4/10.4.104.10/tcp/12288] dial tcp4 0.0.0.0:46549->10.4.104.10:12288: i/o timeout
  f0142723: 'dial, NR', // * [/ip4/10.4.104.11/tcp/12288] dial tcp4 0.0.0.0:46549->10.4.104.11:12288: i/o timeout
  f0143858: 'dial, USA, Calistoga', // * [/ip4/72.52.116.228/tcp/12350] dial tcp4 0.0.0.0:46549->72.52.116.228:12350: i/o timeout
  f0144194: 'dial, NR', // * [/ip4/175.6.68.154/tcp/49913] dial tcp4 0.0.0.0:46549->175.6.68.154:49913: i/o timeout
  f0144313: 'dial, NR', // * [/ip4/106.74.20.7/tcp/12288] dial tcp4 0.0.0.0:46549->106.74.20.7:12288: i/o timeout  * [/ip4/10.5.101.90/tcp/12288] dial tcp4 0.0.0.0:46549->10.5.101.90:12288: i/o timeout
  f0144724: 'dial, USA, Los Angeles', // * [/ip4/67.201.8.203/tcp/24001] dial tcp4 0.0.0.0:46549->67.201.8.203:24001: i/o timeout
  f0146393: 'dial, China, Foshan', // * [/ip4/183.2.233.3/tcp/24501] dial tcp4 0.0.0.0:46549->183.2.233.3:24501: i/o timeout
  f0146428: 'dial, NR', // * [/ip4/172.16.2.105/tcp/6789] dial tcp4 0.0.0.0:46549->172.16.2.105:6789: i/o timeout
  f0148391: 'dial, China, Changsha + Japan, Tokyo', // * [/ip4/23.10.7.187/tcp/912] dial tcp4 0.0.0.0:46549->23.10.7.187:912: i/o timeout
  f0152337: 'dial, NR', // * [/ip4/172.17.34.55/tcp/10241] dial tcp4 0.0.0.0:46549->172.17.34.55:10241: i/o timeout
  f0153804: 'dial, NR', // * [/ip4/218.13.93.62/tcp/5502] dial tcp4 218.13.93.62:5502: connect: connection refused
  f0153986: 'dial, China, Changsha', // * [/ip4/127.0.0.1/tcp/7503] dial tcp4 127.0.0.1:7503: connect: connection refused
  f0155983: 'dial, Japan', // * [/ip4/202.149.23.10/tcp/5472] dial tcp4 202.149.23.10:5472: connect: connection refused
  f0158133: 'dial, NR', // * [/ip4/10.33.1.17/tcp/6789] dial tcp4 0.0.0.0:46549->10.33.1.17:6789: i/o timeout
  f0159632: 'dial, NR', // * [/ip4/10.140.8.32/tcp/32759] dial tcp4 0.0.0.0:46549->10.140.8.32:32759: i/o timeout
  f0159649: 'dial, NR', // * [/ip4/58.144.223.133/tcp/2347] dial tcp4 0.0.0.0:46549->58.144.223.133:2347: i/o timeout
  f0159883: 'dial, NR', // * [/ip4/10.133.9.111/tcp/32759] dial tcp4 0.0.0.0:46549->10.133.9.111:32759: i/o timeout
  f0164260: 'dial, NR', // * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/124.95.135.140/tcp/2828] dial tcp4 124.95.135.140:2828: connect: connection refused  * [/ip4/182.1.4.5/tcp/23450] dial tcp4 0.0.0.0:46549->182.1.4.5:23450: i/o timeout
  f0167137: 'dial, China, Shaoxing', // * [/ip4/115.239.191.45/tcp/24002] dial tcp4 0.0.0.0:46549->115.239.191.45:24002: i/o timeout
  f0167505: 'dial, China, Beijing', // * [/ip4/39.104.208.101/tcp/39891] dial tcp4 0.0.0.0:46549->39.104.208.101:39891: i/o timeout
  f0187709: 'dial, Russia, Moscow', // * [/ip4/82.204.128.132/tcp/17160] dial tcp4 0.0.0.0:46549->82.204.128.132:17160: i/o timeout
  f0199223: 'dial, NR', // * [/ip4/110.188.25.20/tcp/24001] dial tcp4 110.188.25.20:24001: connect: connection refused
  f0217805: 'dial, China, Taiwan, Taipei', // * [/ip4/220.130.154.127/tcp/2348] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWE1znzJYLvWnCd3xB1Y6X8AimQL1x2WXsC6R5JDmCHQYS, but remote key matches 12D3KooWL1927LDwXR6UibSv9hhNgQhWbqb1B8RHqNqYWgA3kHGY
  f0220156: 'dial, NR', // * [/ip6/::1/tcp/1361] dial tcp6 [::1]:1361: connect: connection refused  * [/ip4/127.0.0.1/tcp/20525] dial tcp4 127.0.0.1:20525: connect: connection refused  * [/ip4/172.27.0.30/tcp/20525] dial tcp4 0.0.0.0:46549->172.27.0.30:20525: i/o timeout
  f0225676: 'dial, Korea, Guro-gu', // * [/ip4/222.112.183.196/tcp/24001] dial tcp4 0.0.0.0:46549->222.112.183.196:24001: i/o timeout
  f0232650: 'dial, NR', // * [/ip4/59.33.42.82/tcp/25008] dial tcp4 0.0.0.0:46549->59.33.42.82:25008: i/o timeout
  f0238968: 'dial, NR', // * [/ip4/10.133.14.57/tcp/32759] dial tcp4 0.0.0.0:46549->10.133.14.57:32759: i/o timeout
  f0241764: 'dial, China, Chengdu', // * [/ip4/182.131.4.195/tcp/32800] dial tcp4 182.131.4.195:32800: connect: connection refused
  f0392808: 'dial, NR', // * [/ip4/172.16.35.3/tcp/6789] dial tcp4 0.0.0.0:46549->172.16.35.3:6789: i/o timeout
  f0392999: 'dial, NR', // * [/ip4/10.34.1.4/tcp/6789] dial tcp4 0.0.0.0:46549->10.34.1.4:6789: i/o timeout
  f0393016: 'dial, NR', // * [/ip4/34.66.95.149/tcp/1024] dial tcp4 0.0.0.0:46549->34.66.95.149:1024: i/o timeout
  f0393119: 'dial, NR', // * [/ip4/172.16.35.5/tcp/6789] dial tcp4 0.0.0.0:46549->172.16.35.5:6789: i/o timeout
  f0397428: 'dial, Japan, Tokyo', // * [/ip4/153.150.113.227/tcp/24001] dial tcp4 0.0.0.0:46549->153.150.113.227:24001: i/o timeout
  f0400307: 'dial, NR', // * [/ip4/101.227.175.10/tcp/31347] dial tcp4 101.227.175.10:31347: connect: connection refused
  f0407733: 'dial, NR', // * [/ip4/172.20.100.51/tcp/10241] dial tcp4 0.0.0.0:46549->172.20.100.51:10241: i/o timeout
  f0408717: 'dial, Korea, Ansan-si', // * [/ip4/1.224.35.165/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQN7ZQq8R2sizywZuP75u1hesjaTTLkQox6WdNb77gqBP, but remote key matches 12D3KooWKau3vkSsfbb3ngFmEt8fmGzogVUbfp4Zx7c1zuUwKXXg
  f0409172: 'dial, NR', // * [/ip4/172.20.100.36/tcp/10241] dial tcp4 0.0.0.0:46549->172.20.100.36:10241: i/o timeout
  f0422266: 'dial, NR', // * [/ip4/10.155.8.11/tcp/32759] dial tcp4 0.0.0.0:46549->10.155.8.11:32759: i/o timeout
  f0429063: 'dial, NR', // * [/ip4/172.20.100.192/tcp/10241] dial tcp4 0.0.0.0:46549->172.20.100.192:10241: i/o timeout
  f0435140: 'dial, China, Yangzhou', // * [/ip4/58.220.66.161/tcp/1024] dial tcp4 0.0.0.0:46549->58.220.66.161:1024: i/o timeout
  f0447181: 'dial, China, Zibo', // * [/ip4/218.56.104.202/tcp/24002] dial tcp4 0.0.0.0:46549->218.56.104.202:24002: i/o timeout
  f0504985: 'dial, NR', // * [/ip4/127.0.0.1/tcp/41021] dial tcp4 127.0.0.1:41021: connect: connection refused  * [/ip6/::1/tcp/45843] dial tcp6 [::1]:45843: connect: connection refused  * [/ip4/180.114.225.42/tcp/2057] dial tcp4 180.114.225.42:2057: connect: connection refused  * [/ip4/172.28.0.184/tcp/41021] dial tcp4 0.0.0.0:46549->172.28.0.184:41021: i/o timeout
  f0506630: 'dial, China, Linyi', // * [/ip4/222.174.187.42/tcp/20111] dial tcp4 222.174.187.42:20111: connect: connection refused
  f0508328: 'dial, NR', // * [/ip4/172.20.100.193/tcp/10241] dial tcp4 0.0.0.0:46549->172.20.100.193:10241: i/o timeout
  f0517655: 'dial, Korea, Gwangju', // * [/ip4/121.179.79.12/tcp/55000] failed to negotiate security protocol: read tcp4 144.217.11.204:46549->121.179.79.12:55000: read: connection reset by peer
  f0521569: 'dial, Korea, Guro-go', // * [/ip4/222.112.183.195/tcp/24001] dial tcp4 0.0.0.0:46549->222.112.183.195:24001: i/o timeout
  f0671368: 'dial, NR', // * [/ip4/127.0.0.1/tcp/40641] dial tcp4 127.0.0.1:40641: connect: connection refused  * [/ip6/::1/tcp/38563] dial tcp6 [::1]:38563: connect: connection refused  * [/ip4/120.232.251.176/tcp/2153] dial tcp4 120.232.251.176:2153: connect: connection refused  * [/ip4/120.232.251.176/tcp/2146] dial tcp4 120.232.251.176:2146: connect: connection refused  * [/ip4/192.168.3.101/tcp/40641] dial tcp4 0.0.0.0:46549->192.168.3.101:40641: i/o timeout
  f0673920: 'dial, NR', // * [/ip4/172.20.100.74/tcp/10241] dial tcp4 0.0.0.0:46549->172.20.100.74:10241: i/o timeout
  f0674600: 'dial, NR', // * [/ip6/::1/tcp/42859] dial tcp6 [::1]:42859: connect: connection refused  * [/ip4/127.0.0.1/tcp/46517] dial tcp4 127.0.0.1:46517: connect: connection refused  * [/ip4/172.16.10.225/tcp/46517] dial tcp4 0.0.0.0:46549->172.16.10.225:46517: i/o timeout
  f0682032: 'dial, China, Shenzhen', // * [/ip4/103.39.230.113/tcp/51105] dial tcp4 103.39.230.113:51105: connect: connection refused
  f0697132: 'dial, Korea, Busan', // * [/ip4/121.174.79.213/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRQnA6xKX2m2ttEbGY6FXw28EhjJKfibEM3TSLibi3ySL, but remote key matches 12D3KooWGY3ZAoGG1XfVF9wyU9KB7XhsMJG14XRyqZZoyPAwXWfg
  f0720762: 'dial, Korea, Incheon', // * [/ip4/175.207.93.3/tcp/41763] dial tcp4 0.0.0.0:46549->175.207.93.3:41763: i/o timeout
  f0724192: 'dial, Korea, Hwaseong-si', // * [/ip4/121.136.168.225/tcp/38887] dial tcp4 0.0.0.0:46549->121.136.168.225:38887: i/o timeout

  // XNR (Not routable)

  f02388: 'xnr, Netherlands, Amersfoort, Kroketje',
  f02769: 'xnr, NR',
  f02770: 'xnr, China, Hong Kong',
  f02775: 'xnr, China, Hong Kong',
  f02777: 'xnr, NR',
  f02778: 'xnr, NR',
  f02779: 'xnr, NR',
  f02856: 'xnr, China, Chengdu',
  f03000: 'xnr, China, Chengdu',
  f03344: 'xnr, China, Guangzhou',
  f07749: 'xnr, NR',
  f09693: 'xnr, China, Karamay',
  f010202: 'xnr, Singapore',
  f014335: 'xnr, NR',
  f014686: 'xnr, Singapore',
  f014699: 'xnr, NR',
  f015734: 'xnr, China, Qingdao',
  f015877: 'xnr, China, Jiaxing + USA',
  f015885: 'xnr, China, Jiaxing',
  f015932: 'xnr, NR',
  f018538: 'xnr, China, Huzhou',
  f020398: 'xnr, China, Zhangjiakou',
  f020747: 'xnr, China, Xiamen',
  f020957: 'xnr, NR',
  f021695: 'xnr, USA',
  f021704: 'xnr, NR',
  f021710: 'xnr, China, Shijiazhuang',
  f021870: 'xnr, China, Jieyang',
  f022030: 'xnr, NR',
  f022038: 'xnr, NR',
  f022336: 'xnr, NR',
  f022338: 'xnr, NR',
  f022361: 'xnr, NR',
  f022373: 'xnr, Singapore',
  f022374: 'xnr, NR',
  f022804: 'xnr, NR',
  f022922: 'xnr, China, Shenzhen, CAAP-MEG',
  f023013: 'xnr, NR',
  f023499: 'xnr, NR',
  f023626: 'xnr, NR',
  f023627: 'xnr, China, Zhongwei',
  f023651: 'xnr, NR',
  f023678: 'xnr, China, Jiaxing',
  f023843: 'xnr, China, Zhangjiakou',
  f024483: 'xnr, NR',
  f024563: 'xnr, NR',
  f024802: 'xnr, NR',
  f024894: 'xnr, NR',
  f024895: 'xnr, undefined',
  f024972: 'xnr, undefined',
  f025005: 'xnr, NR',
  f025044: 'xnr, undefined',
  f029585: 'xnr, NR',
  f030203: 'xnr, China, Shenzhen',
  f030249: 'xnr, NR',
  f030272: 'xnr, undefined',
  f030331: 'xnr, NR',
  f030347: 'xnr, China, Zhejiang',
  f030509: 'xnr, undefined',
  f030510: 'xnr, undefined',
  f030511: 'xnr, undefined',
  f030649: 'xnr, NR',
  f032833: 'xnr, NR',
  f032850: 'xnr, NR',
  f032913: 'xnr, China, Shenzhen',
  f033130: 'xnr, NR',
  f033384: 'xnr, NR',
  f033399: 'xnr, NR',
  f033456: 'xnr, NR',
  f033462: 'xnr, NR',
  f033463: 'xnr, NR',
  f033475: 'xnr, NR',
  f033501: 'xnr, China, Shenzhen',
  f033517: 'xnr, China, Changsha',
  f034350: 'xnr, NR',
  f034566: 'xnr, NR',
  f034567: 'xnr, China, Shenzhen',
  f034658: 'xnr, NR',
  f034707: 'xnr, NR',
  f034710: 'xnr, NR',
  f034777: 'xnr, China, Chengdu',
  f035160: 'xnr, NR',
  f035161: 'xnr, NR',
  f035364: 'xnr, NR',
  f039992: 'xnr, NR',
  f040665: 'xnr, NR',
  f042855: 'xnr, NR',
  f043376: 'xnr, Korea, Incheon',
  f045743: 'xnr, NR',
  f045756: 'xnr, China, Hangzhou',
  f046248: 'xnr, China, Dongguan',
  f048975: 'xnr, NR',
  f048986: 'xnr, NR',
  f049911: 'xnr, China, Yunfu',
  f053141: 'xnr, China, Shenzhen',
  f053173: 'xnr, NR',
  f053446: 'xnr, NR',
  f054120: 'xnr, NR',
  f054267: 'xnr, NR',
  f054412: 'xnr, NR',
  f054414: 'xnr, NR',
  f054422: 'xnr, NR',
  f054464: 'xnr, NR',
  f054526: 'xnr, NR',
  f055335: 'xnr, NR',
  f055446: 'xnr, NR',
  f056227: 'xnr, NR',
  f058349: 'xnr, NR',
  f059813: 'xnr, NR',
  f060114: 'xnr, China, Shenzhen',
  f060693: 'xnr, NR',
  f060754: 'xnr, NR',
  f060805: 'xnr, NR',
  f060975: 'xnr, NR',
  f061051: 'xnr, NR',
  f061170: 'xnr, NR',
  f061174: 'xnr, NR',
  f061407: 'xnr, China, Shenzhen',
  f061503: 'xnr, NR',
  f062245: 'xnr, NR',
  f062473: 'xnr, NR',
  f062475: 'xnr, NR',
  f062619: 'xnr, NR',
  f063996: 'xnr, China, Sichuan',
  f064855: 'xnr, NR',
  f064908: 'xnr, NR',
  f065113: 'xnr, NR',
  f065141: 'xnr, NR',
  f065174: 'xnr, NR',
  f065266: 'xnr, China, Hefei',
  f065391: 'xnr, NR',
  f065578: 'xnr, NR',
  f065610: 'xnr, NR',
  f065670: 'xnr, NR',
  f065686: 'xnr, NR',
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
  f070802: 'xnr, NR',
  f070803: 'xnr, NR',
  f071287: 'xnr, NR',
  f073196: 'xnr, NR',
  f073525: 'xnr, NR',
  f073844: 'xnr, NR',
  f073888: 'xnr, NR',
  f077761: 'xnr, NR',
  f078465: 'xnr, NR',
  f079092: 'xnr, NR',
  f079425: 'xnr, NR',
  f079719: 'xnr, NR',
  f080444: 'xnr, China, Chengdu',
  f080468: 'xnr, NR',
  f080605: 'xnr, NR',
  f080628: 'xnr, NR',
  f080868: 'xnr, NR',
  f081969: 'xnr, NR',
  f082000: 'xnr, NR',
  f082001: 'xnr, NR',
  f082356: 'xnr, China, Jiaxing',
  f082730: 'xnr, NR',
  f083419: 'xnr, NR',
  f083474: 'xnr, NR',
  f083542: 'xnr, NR',
  f083638: 'xnr, China, Chongqing',
  f083983: 'xnr, NR',
  f084135: 'xnr, NR',
  f084155: 'xnr, NR',
  f084419: 'xnr, NR',
  f084907: 'xnr, NR',
  f085435: 'xnr, NR',
  f085437: 'xnr, NR',
  f085486: 'xnr, NR',
  f085710: 'xnr, China, Chengdu',
  f085735: "xnr, China, Ya'an",
  f086204: 'xnr, NR',
  f086222: 'xnr, NR',
  f086240: 'xnr, NR',
  f086366: 'xnr, NR',
  f086381: 'xnr, NR',
  f086439: 'xnr, NR',
  f086442: 'xnr, NR',
  f086572: 'xnr, NR',
  f086988: 'xnr, NR',
  f087096: 'xnr, NR',
  f087256: 'xnr, China, Hangzhou',
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
  f090889: 'xnr, NR',
  f091143: 'xnr, NR',
  f091243: 'xnr, NR',
  f091395: 'xnr, NR',
  f091798: 'xnr, NR',
  f091959: 'xnr, NR',
  f091996: 'xnr, NR',
  f091999: 'xnr, NR',
  f092066: 'xnr, NR',
  f092157: 'xnr, NR',
  f092228: 'xnr, NR',
  f092887: 'xnr, NR',
  f093115: 'xnr, NR',
  f093144: 'xnr, NR',
  f093658: 'xnr, China, Fujian',
  f093686: 'xnr, NR',
  f093701: 'xnr, NR',
  f093907: 'xnr, NR',
  f094003: 'xnr, NR',
  f094614: 'xnr, China, Karamay',
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
  f097219: 'xnr, NR',
  f097403: 'xnr, NR',
  f097432: 'xnr, NR',
  f097658: 'xnr, NR',
  f097840: 'xnr, NR',
  f097981: 'xnr, NR',
  f098743: 'xnr, NR',
  f099082: 'xnr, NR',
  f099132: 'xnr, NR',
  f099247: 'xnr, NR',
  f099369: 'xnr, NR',
  f099884: 'xnr, China, Chengdu',
  f0100033: 'xnr, NR',
  f0100034: 'xnr, NR',
  f0100786: 'xnr, NR',
  f0101016: 'xnr, NR',
  f0101017: 'xnr, NR',
  f0101018: 'xnr, NR',
  f0101019: 'xnr, NR',
  f0101133: 'xnr, NR',
  f0101570: 'xnr, NR',
  f0101611: 'xnr, NR',
  f0102187: 'xnr, NR',
  f0102313: 'xnr, Korea, Gangseo-gu',
  f0102376: 'xnr, China, Karamay',
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
  f0106438: 'xnr, NR',
  f0106901: 'xnr, NR',
  f0107053: 'xnr, NR',
  f0107091: 'xnr, NR',
  f0107322: 'xnr, China, Chengdu',
  f0107543: 'xnr, NR',
  f0107656: 'xnr, NR',
  f0107903: 'xnr, NR',
  f0108199: 'xnr, NR',
  f0108672: 'xnr, NR',
  f0109309: 'xnr, NR',
  f0109606: 'xnr, NR',
  f0109903: 'xnr, NR',
  f0110110: 'xnr, NR',
  f0110248: 'xnr, NR',
  f0110261: 'xnr, NR',
  f0110289: 'xnr, NR',
  f0110695: 'xnr, NR',
  f0110696: 'xnr, NR',
  f0110808: 'xnr, NR',
  f0110996: 'xnr, NR',
  f0111007: 'xnr, NR',
  f0111384: 'xnr, NR',
  f0111434: 'xnr, NR',
  f0111467: 'xnr, NR',
  f0111469: 'xnr, NR',
  f0112075: 'xnr, Korea, Seoul',
  f0112593: 'xnr, NR',
  f0112667: 'xnr, NR',
  f0112680: 'xnr, NR',
  f0112691: 'xnr, Korea, Seoul',
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
  f0114867: 'xnr, NR',
  f0114868: 'xnr, NR',
  f0114885: 'xnr, NR',
  f0115001: 'xnr, NR',
  f0115117: 'xnr, NR',
  f0115238: 'xnr, China, Shenyang',
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
  f0118769: 'xnr, China, Fujian',
  f0118837: 'xnr, Korea, Seoul',
  f0118976: 'xnr, NR',
  f0119146: 'xnr, NR',
  f0119545: 'xnr, NR',
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
  f0123275: 'xnr, Korea, Seoul',
  f0123346: 'xnr, NR',
  f0123522: 'xnr, NR',
  f0123535: 'xnr, NR',
  f0123536: 'xnr, China, Fuzhou',
  f0124126: 'xnr, NR',
  f0124904: 'xnr, NR',
  f0124923: 'xnr, NR',
  f0125488: 'xnr, NR',
  f0126097: 'xnr, NR',
  f0126376: 'xnr, NR',
  f0126478: 'xnr, China, Ningbo',
  f0126661: 'xnr, NR',
  f0126698: 'xnr, NR',
  f0126702: 'xnr, NR',
  f0126898: 'xnr, China, Harbin',
  f0127353: 'xnr, Korea, Seoul',
  f0127378: 'xnr, NR',
  f0127382: 'xnr, NR',
  f0127569: 'xnr, NR',
  f0127595: 'xnr, NR',
  f0127612: 'xnr, NR',
  f0127627: 'xnr, NR',
  f0127628: 'xnr, NR',
  f0127629: 'xnr, NR',
  f0127640: 'xnr, NR',
  f0127721: 'xnr, NR',
  f0127735: 'xnr, NR',
  f0128011: 'xnr, NR',
  f0128381: 'xnr, NR',
  f0128499: 'xnr, NR',
  f0128559: 'xnr, NR',
  f0128580: 'xnr, Korea, Seoul',
  f0128582: 'xnr, Korea, Seoul',
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
  f0131509: 'xnr, NR',
  f0131654: 'xnr, Korea, Seoul',
  f0131767: 'xnr, NR',
  f0131822: 'xnr, NR',
  f0132178: 'xnr, China, Ningbo',
  f0132313: 'xnr, NR',
  f0132618: 'xnr, NR',
  f0132638: 'xnr, NR',
  f0132706: 'xnr, China, Beijing',
  f0133235: 'xnr, NR',
  f0133376: 'xnr, NR',
  f0133379: 'xnr, NR',
  f0133501: 'xnr, NR',
  f0133505: 'xnr, NR',
  f0133509: 'xnr, NR',
  f0133763: 'xnr, NR',
  f0133833: 'xnr, NR',
  f0134285: "xnr, China, Ya'an + USA",
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
  f0135779: 'xnr, NR',
  f0135859: 'xnr, NR',
  f0135934: 'xnr, NR',
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
  f0141634: 'xnr, China, Changsha',
  f0141761: 'xnr, NR',
  f0141762: 'xnr, NR',
  f0142059: 'xnr, NR',
  f0142238: 'xnr, NR',
  f0142245: 'xnr, NR',
  f0142281: 'xnr, NR',
  f0142337: 'xnr, NR',
  f0142515: 'xnr, NR',
  f0142720: 'xnr, NR',
  f0143032: 'xnr, NR',
  f0143110: 'xnr, NR',
  f0143160: 'xnr, China, Ningbo',
  f0143162: 'xnr, NR',
  f0143361: 'xnr, NR',
  f0143500: 'xnr, China, Zhejiang',
  f0143511: 'xnr, NR',
  f0143666: 'xnr, NR',
  f0143907: 'xnr, NR',
  f0143999: 'xnr, NR',
  f0144069: 'xnr, NR',
  f0144314: 'xnr, NR',
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
  f0145843: 'xnr, NR',
  f0145985: 'xnr, NR',
  f0145986: 'xnr, NR',
  f0146220: 'xnr, NR',
  f0146224: 'xnr, NR',
  f0146278: 'xnr, NR',
  f0146301: 'xnr, China, Shenzhen',
  f0146956: 'xnr, NR',
  f0147119: 'xnr, NR',
  f0147586: 'xnr, NR',
  f0147657: 'xnr, NR',
  f0147801: 'xnr, NR',
  f0148143: 'xnr, China, Tianjin',
  f0148151: 'xnr, NR',
  f0148269: 'xnr, NR',
  f0148452: 'xnr, NR',
  f0148627: 'xnr, NR',
  f0149132: 'xnr, NR',
  f0149753: 'xnr, NR',
  f0149937: 'xnr, NR',
  f0150666: 'xnr, NR',
  f0150748: 'xnr, NR',
  f0150816: 'xnr, NR',
  f0150860: 'xnr, NR',
  f0150918: 'xnr, NR',
  f0151371: 'xnr, NR',
  f0151499: 'xnr, NR',
  f0151706: 'xnr, NR',
  f0151849: 'xnr, NR',
  f0152134: 'xnr, NR',
  f0152351: 'xnr, NR',
  f0152799: 'xnr, NR',
  f0152866: 'xnr, NR',
  f0153024: 'xnr, NR',
  f0153040: 'xnr, NR',
  f0153078: 'xnr, NR',
  f0153188: 'xnr, NR',
  f0153565: 'xnr, NR',
  f0153583: 'xnr, NR',
  f0153775: 'xnr, NR',
  f0153930: 'xnr, NR',
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
  f0155258: 'xnr, NR',
  f0155515: 'xnr, NR',
  f0155829: 'xnr, NR',
  f0156214: 'xnr, NR',
  f0156333: 'xnr, China, Ningbo',
  f0156342: 'xnr, NR',
  f0156417: 'xnr, NR',
  f0157316: 'xnr, NR',
  f0157502: 'xnr, NR',
  f0157769: 'xnr, China, Changsha',
  f0157917: 'xnr, NR',
  f0157979: 'xnr, NR',
  f0157991: 'xnr, NR',
  f0158000: 'xnr, NR',
  f0158068: 'xnr, NR',
  f0158156: 'xnr, NR',
  f0158265: 'xnr, China, Hefei',
  f0158276: 'xnr, NR',
  f0158335: 'xnr, NR',
  f0158613: 'xnr, NR',
  f0158728: 'xnr, NR',
  f0159067: 'xnr, NR',
  f0159333: 'xnr, NR',
  f0159380: 'xnr, NR',
  f0159449: 'xnr, NR',
  f0159517: 'xnr, NR',
  f0159654: 'xnr, NR',
  f0159660: 'xnr, NR',
  f0159689: 'xnr, NR',
  f0160135: 'xnr, NR',
  f0160137: 'xnr, NR',
  f0160735: 'xnr, NR',
  f0160819: 'xnr, NR',
  f0160870: 'xnr, NR',
  f0161468: 'xnr, NR',
  f0161542: 'xnr, NR',
  f0161819: 'xnr, NR',
  f0163275: 'xnr, NR',
  f0164126: 'xnr, NR',
  f0166425: 'xnr, NR',
  f0166843: 'xnr, NR',
  f0166896: 'xnr, NR',
  f0168537: 'xnr, NR',
  f0169053: 'xnr, NR',
  f0207949: 'xnr, NR',
  f0214334: 'xnr, NR',
  f0215461: 'xnr, NR',
  f0216463: 'xnr, NR',
  f0216822: 'xnr, NR',
  f0217419: 'xnr, NR',
  f0217789: 'xnr, NR',
  f0218072: 'xnr, NR',
  f0218092: 'xnr, NR',
  f0218407: 'xnr, NR',
  f0219106: 'xnr, NR',
  f0222611: 'xnr, NR',
  f0222811: 'xnr, NR',
  f0222947: 'xnr, NR',
  f0223033: 'xnr, NR',
  f0223101: 'xnr, NR',
  f0223102: 'xnr, NR',
  f0223103: 'xnr, NR',
  f0223104: 'xnr, NR',
  f0223316: 'xnr, NR',
  f0223933: 'xnr, NR',
  f0224894: 'xnr, China, Qingdao',
  f0224984: 'xnr, China, Wuhan',
  f0225285: 'xnr, NR',
  f0226303: 'xnr, NR',
  f0226418: 'xnr, NR',
  f0226520: 'xnr, NR',
  f0228232: 'xnr, NR',
  f0229199: 'xnr, NR',
  f0229437: 'xnr, NR',
  f0230449: 'xnr, NR',
  f0230799: 'xnr, NR',
  f0230861: 'xnr, NR',
  f0231112: 'xnr, NR',
  f0231481: 'xnr, NR',
  f0231782: 'xnr, NR',
  f0232358: 'xnr, NR',
  f0232459: 'xnr, NR',
  f0239251: 'xnr, Korea, Uiwang',
  f0240035: 'xnr, NR',
  f0240185: 'xnr, NR',
  f0240392: 'xnr, NR',
  f0240456: 'xnr, NR',
  f0241536: 'xnr, NR',
  f0241666: 'xnr, NR',
  f0242345: 'xnr, NR',
  f0242373: 'xnr, NR',
  f0349810: 'xnr, China, Qinzhou',
  f0364983: 'xnr, Korea, Seoul',
  f0364987: 'xnr, Korea, Seoul',
  f0377277: 'xnr, NR',
  f0391212: 'xnr, NR',
  f0391214: 'xnr, NR',
  f0391235: 'xnr, NR',
  f0391381: 'xnr, NR',
  f0391439: 'xnr, NR',
  f0392194: 'xnr, NR',
  f0392430: 'xnr, NR',
  f0392488: 'xnr, NR',
  f0392924: 'xnr, NR',
  f0393417: 'xnr, NR',
  f0394102: 'xnr, NR',
  f0395680: 'xnr, NR',
  f0395994: 'xnr, NR',
  f0396149: 'xnr, NR',
  f0396217: 'xnr, NR',
  f0396422: 'xnr, NR',
  f0396452: 'xnr, NR',
  f0396473: 'xnr, NR',
  f0397052: 'xnr, NR',
  f0397561: 'xnr, NR',
  f0397794: 'xnr, NR',
  f0397802: 'xnr, NR',
  f0397837: 'xnr, China, Fuzhou',
  f0398999: 'xnr, NR',
  f0399083: 'xnr, Korea, Seoul + Kwangmyong',
  f0399111: 'xnr, NR',
  f0399321: 'xnr, NR',
  f0399323: 'xnr, NR',
  f0399348: 'xnr, NR',
  f0399743: 'xnr, NR',
  f0399996: 'xnr, NR',
  f0400264: 'xnr, NR',
  f0402233: 'xnr, NR',
  f0402431: 'xnr, China, Hangzhou',
  f0402661: 'xnr, NR',
  f0402822: 'xnr, NR',
  f0403529: 'xnr, NR',
  f0404193: 'xnr, NR',
  f0404643: 'xnr, NR',
  f0406478: 'xnr, NR',
  f0406533: 'xnr, NR',
  f0407244: 'xnr, NR',
  f0407287: 'xnr, NR',
  f0408206: 'xnr, NR',
  f0408582: 'xnr, NR',
  f0408629: 'xnr, NR',
  f0409399: 'xnr, NR',
  f0409499: 'xnr, NR',
  f0410001: 'xnr, NR',
  f0410120: 'xnr, NR',
  f0410242: 'xnr, NR',
  f0410941: 'xnr, NR',
  f0413050: 'xnr, NR',
  f0417720: 'xnr, NR',
  f0419311: 'xnr, NR',
  f0419331: 'xnr, NR',
  f0419510: 'xnr, NR',
  f0419662: 'xnr, NR',
  f0419804: 'xnr, NR',
  f0419944: 'xnr, NR',
  f0419945: 'xnr, NR',
  f0420508: 'xnr, NR',
  f0421061: 'xnr, Korea, Seoul',
  f0421387: 'xnr, NR',
  f0421858: 'xnr, NR',
  f0422229: 'xnr, NR',
  f0422737: 'xnr, NR',
  f0423057: 'xnr, NR',
  f0423329: 'xnr, NR',
  f0423371: 'xnr, Korea, Seoul',
  f0423381: 'xnr, Korea, Seoul',
  f0424761: 'xnr, NR',
  f0427393: 'xnr, China, Karamay',
  f0427688: 'xnr, NR',
  f0427839: 'xnr, NR',
  f0427975: 'xnr, NR',
  f0428184: 'xnr, NR',
  f0428661: 'xnr, NR',
  f0429122: 'xnr, NR',
  f0430101: 'xnr, NR',
  f0432235: 'xnr, NR',
  f0433892: 'xnr, NR',
  f0434411: 'xnr, NR',
  f0435971: 'xnr, NR',
  f0436065: 'xnr, NR',
  f0441020: 'xnr, NR',
  f0441116: 'xnr, NR',
  f0441240: 'xnr, NR',
  f0441372: 'xnr, NR',
  f0441525: 'xnr, NR',
  f0441703: 'xnr, NR',
  f0447651: 'xnr, NR',
  f0449072: 'xnr, Korea, Jung-gu',
  f0449088: 'xnr, Korea, Jung-gu',
  f0449196: 'xnr, NR',
  f0451936: 'xnr, NR',
  f0461752: 'xnr, China, Karamay',
  f0463030: 'xnr, NR',
  f0465286: 'xnr, NR',
  f0466405: 'xnr, Germany, Niederaula',
  f0467640: 'xnr, NR',
  f0470182: 'xnr, NR',
  f0472061: 'xnr, NR',
  f0473113: 'xnr, NR',
  f0478563: 'xnr, NR',
  f0480313: 'xnr, NR',
  f0485876: 'xnr, China, Changchun',
  f0497771: 'xnr, NR',
  f0498102: 'xnr, NR',
  f0498868: 'xnr, NR',
  f0500685: 'xnr, NR',
  f0501283: 'xnr, NR',
  f0502198: 'xnr, NR',
  f0502948: 'xnr, NR',
  f0503010: 'xnr, NR',
  f0503287: 'xnr, NR',
  f0504929: 'xnr, NR',
  f0505110: 'xnr, NR',
  f0506800: 'xnr, NR',
  f0507420: 'xnr, NR',
  f0507913: 'xnr, NR',
  f0508622: 'xnr, NR',
  f0509980: 'xnr, NR',
  f0509981: 'xnr, NR',
  f0510701: 'xnr, NR',
  f0510957: 'xnr, NR',
  f0511385: 'xnr, NR',
  f0514000: 'xnr, NR',
  f0514235: 'xnr, NR',
  f0515264: 'xnr, NR',
  f0515389: 'xnr, NR',
  f0515674: 'xnr, NR',
  f0518668: 'xnr, NR',
  f0519331: 'xnr, NR',
  f0519376: 'xnr, NR',
  f0520520: 'xnr, NR',
  f0521831: 'xnr, NR',
  f0521884: 'xnr, NR',
  f0523396: 'xnr, NR',
  f0523415: 'xnr, NR',
  f0523711: 'xnr, NR',
  f0536177: 'xnr, NR',
  f0592088: 'xnr, NR',
  f0602011: 'xnr, NR',
  f0646439: 'xnr, NR',
  f0670491: 'xnr, NR',
  f0670902: 'xnr, NR',
  f0671982: 'xnr, NR',
  f0672951: 'xnr, NR',
  f0673613: 'xnr, NR',
  f0674756: 'xnr, NR',
  f0674889: 'xnr, NR',
  f0675459: 'xnr, NR',
  f0675675: 'xnr, NR',
  f0676183: 'xnr, NR',
  f0676272: 'xnr, NR',
  f0678781: 'xnr, NR',
  f0680529: 'xnr, NR',
  f0680977: 'xnr, NR',
  f0681068: 'xnr, NR',
  f0683965: 'xnr, NR',
  f0685007: 'xnr, NR',
  f0685231: 'xnr, NR',
  f0685539: 'xnr, NR',
  f0685706: 'xnr, NR',
  f0685829: 'xnr, NR',
  f0686816: 'xnr, NR',
  f0687211: 'xnr, NR',
  f0688165: 'xnr, NR',
  f0689753: 'xnr, NR',
  f0690736: 'xnr, NR',
  f0691310: 'xnr, NR',
  f0693127: 'xnr, NR',
  f0693817: 'xnr, NR',
  f0694099: 'xnr, NR',
  f0694149: 'xnr, NR',
  f0694232: 'xnr, NR',
  f0694999: 'xnr, NR',
  f0695289: 'xnr, NR',
  f0697249: 'xnr, NR',
  f0697913: 'xnr, NR',
  f0699021: 'xnr, NR',
  f0700033: 'xnr, NR',
  f0701144: 'xnr, NR',
  f0702377: 'xnr, NR',
  f0702810: 'xnr, NR',
  f0703149: 'xnr, NR',
  f0704898: 'xnr, NR',
  f0704941: 'xnr, NR',
  f0704966: 'xnr, NR',
  f0705136: 'xnr, NR',
  f0705521: 'xnr, NR',
  f0706206: 'xnr, NR',
  f0706999: 'xnr, NR',
  f0707159: 'xnr, NR',
  f0707777: 'xnr, NR',
  f0709896: 'xnr, NR',
  f0711266: 'xnr, NR',
  f0711445: 'xnr, NR',
  f0712676: 'xnr, NR',
  f0713736: 'xnr, NR',
  f0715639: 'xnr, NR',
  f0716283: 'xnr, NR',
  f0718079: 'xnr, NR',
  f0718665: 'xnr, NR',

  // Delisted

  f01000: 'delist, NR - bootstrap', // carry-over
  f01001: 'delist, NR - bootstrap', // carry-over
  f01002: 'delist, NR - bootstrap', // carry-over
  f01013: 'delist, NR', // carry-over
  f01101: 'delist, China, Shanghai', // carry-over
  f01102: 'delist, China, Shandong', // carry-over
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
  f02575: 'delist, USA, Davis', // carry-over
  f02608: 'delist, USA, San Jose', // carry-over
  f02665: 'delist, Netherlands, Amsterdam, fm-ops', // carry-over
  f02666: 'delist, China, Chengdu', // carry-over
  f02668: 'delist, China, Chengdu', // carry-over
  f02768: 'delist, China, Hong Kong', // carry-over
  f02774: 'delist, Australia, Sydney', // carry-over
  f02822: 'delist, China, Chengdu', // carry-over
  f02824: 'delist, China, Chengdu', // carry-over
  f03224: 'delist, Ukraine, Kyiv', // carry-over
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
  f07796: 'delist, China, Hunan', // carry-over
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
  f09538: 'delist, NR', // carry-over
  f09569: 'delist, China, Beijing', // carry-over
  f09578: 'delist, NR', // carry-over
  f09594: 'delist, NR', // carry-over
  f09610: 'delist, China, Beijing', // carry-over
  f09629: 'delist, NR', // carry-over
  f09662: 'delist, Canada, Surrey', // carry-over
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
  f010305: 'delist, NR', // carry-over
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
  f014366: 'delist, USA, Mountain View', // carry-over
  f014388: 'delist, China, Guangdong', // carry-over
  f014389: 'delist, China, Chongqing', // carry-over
  f014394: 'delist, China, Suzhou, IPFSCloud', // carry-over
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
  f023982: 'delist, China, Chengdu', // carry-over
  f023986: 'delist, Korea, Seoul', // carry-over
  f024031: 'delist, NR', // carry-over
  f024074: 'delist, NR', // carry-over
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
  f030125: 'delist, China, Nantong', // carry-over
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
  f032824: 'delist, USA, Cedar Park', // carry-over
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
  f054163: 'delist, China, Dongguan', // carry-over
  f054389: 'delist, China, Chongqing', // carry-over
  f054677: 'delist, Finland, Helsinki', // carry-over
  f055040: 'delist, China, Fujian', // carry-over
  f055522: 'delist, USA', // carry-over
  f056393: 'delist, NR', // carry-over
  f057115: 'delist, China, Nanyang', // carry-over
  f057466: 'delist, China, Guangzhou', // carry-over
  f057560: 'delist, NR', // carry-over
  f057842: 'delist, Korea, Gyeonggi-do', // carry-over
  f058003: 'delist, China, Shenzhen', // carry-over
  f058321: 'delist, China, Dongguan', // carry-over
  f059280: 'delist, China, Shenzhen', // carry-over
  f059652: 'delist, China, Beijing', // carry-over
  f059705: 'delist, Korea, Naju', // carry-over
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
  f094901: 'delist, Korea, Bucheon-si', // carry-over
  f095049: 'delist, Korea, Bucheon-si', // carry-over
  f095296: 'delist, China, Suqian', // carry-over
  f095398: 'delist, Korea, Sejong', // carry-over
  f095506: 'delist, China, Ningxia', // carry-over
  f095528: 'delist, China, Hangzhou', // carry-over
  f095833: 'delist, Korea, Yongin-si', // carry-over
  f096224: 'delist, China, Chongqing', // carry-over
  f0101069: 'delist, NR', // carry-over
  f0106090: 'delist, NR', // carry-over
  f0107118: 'delist, China, Hangzhou + Zhejiang', // carry-over
  f0107171: 'delist, China, Karamay', // carry-over
  f0109163: 'delist, Korea, Songpa-gu', // carry-over
  f0109349: 'delist, NR', // carry-over
  f0110101: 'delist, Korea, Goyang-si', // carry-over
  f0110133: 'delist, China, Ningbo', // carry-over
  f0110198: 'delist, Korea, Hwaseong-si', // carry-over
  f0110488: 'delist, China, Chongqing', // carry-over
  f0110803: 'delist, Korea', // carry-over
  f0112027: 'delist, France', // carry-over
  f0116513: 'delist, NR', // carry-over
  f0118799: 'delist, NR', // carry-over
  f0119336: 'delist, Canada, Ottawa', // carry-over
  f0120141: 'delist, Korea, Gangnam-gu', // carry-over
  f0121533: 'delist, China, Zhejiang', // carry-over
  f0125962: 'delist, Korea, Yongin-si', // carry-over
  f0126535: 'delist, China, Hong Kong', // carry-over
  f0127151: 'delist, Korea, Yongin-si', // carry-over
  f0127157: 'delist, Korea, Yongin-si', // carry-over
  f0127256: 'delist, Korea, Yongin-si', // carry-over
  f0128191: 'delist, Korea, Gangnam-gu', // carry-over
  f0128238: 'delist, Korea, Yongin-si', // carry-over
  f0128239: 'delist, Korea, Yongin-si', // carry-over
  f0128242: 'delist, Korea, Yongin-si', // carry-over
  f0131359: 'delist, China, Fuzhou', // carry-over
  f0131857: 'delist, China, Chongqing', // carry-over
  f0132765: 'delist, NR', // carry-over
  f0133486: 'delist, China, Shenzhen', // carry-over
  f0135906: 'delist, NR', // carry-over
  f0136425: 'delist, Korea, Busan', // carry-over
  f0137475: 'delist, China, Beijing', // carry-over
  f0144304: 'delist, NR', // carry-over
  f0145018: 'delist, Korea', // carry-over
  f0147676: 'delist, Korea, Seoul', // carry-over
  f0149670: 'delist, NR', // carry-over
  f0149783: 'delist, NR', // carry-over
  f0156232: 'delist, China, Fuzhou', // carry-over
  f0157025: 'delist, NR', // carry-over
  f0157513: 'delist, Korea, Geumcheon-gu', // carry-over
  f0160291: 'delist, USA', // carry-over
  f0164326: 'delist, China, Beijing', // carry-over
  f0165533: 'delist, NR', // carry-over
  f0167458: 'delist, NR', // carry-over
  f0168371: 'delist, Korea, Namyangju', // carry-over
  f0169097: 'delist, NR', // carry-over
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
  f0224599: 'delist, China, Fuzhou', // carry-over
  f0224782: 'delist, USA', // carry-over
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
  f0232437: 'delist, NR', // carry-over
  f0239266: 'delist, NR', // carry-over
  f0240893: 'delist, USA, Queens', // carry-over
  f0241272: 'delist, France, Deuil-la-Barre', // carry-over
  f0241284: 'delist, China, Jiangmen', // carry-over
  f0242156: 'delist, NR', // carry-over
  f0242260: 'delist, USA, St. Louis', // carry-over
  f0242416: 'delist, USA, Morganville', // carry-over
  f0347476: 'delist, China, Zhengzhou', // carry-over
  f0391370: 'delist, USA, Queens', // carry-over
  f0391520: 'delist, China, Guangzhou', // carry-over
  f0392707: 'delist, Korea, Chuncheon', // carry-over
  f0392712: 'delist, Korea, Ulju-gun', // carry-over
  f0392733: 'delist, USA, Huntersville', // carry-over
  f0393359: 'delist, China, Suzhou', // carry-over
  f0394461: 'delist, Korea, Seoul', // carry-over
  f0397083: 'delist, NR', // carry-over
  f0397675: 'delist, Korea, Guro-gu', // carry-over
  f0398326: 'delist, China, Jiangmen', // carry-over
  f0398338: 'delist, USA, Cleveland', // carry-over
  f0400681: 'delist, USA, Queens', // carry-over
  f0402314: 'delist, NR', // carry-over
  f0402492: 'delist, NR', // carry-over
  f0402975: 'delist, Korea', // carry-over
  f0403858: 'delist, China, Jiangmen', // carry-over
  f0408184: 'delist, Switzerland', // carry-over
  f0408696: 'delist, China, Taiwan, Taipei', // carry-over
  f0410023: 'delist, NR', // carry-over
  f0413178: 'delist, China, Suqian', // carry-over
  f0414184: 'delist, Spain, Madrid', // carry-over
  f0423713: 'delist, China, Qingdao', // carry-over
  f0424969: 'delist, China, Fuzhou', // carry-over
  f0427967: 'delist, China, Changsha', // carry-over
  f0427994: 'delist, China, Jinhua', // carry-over
  f0427996: 'delist, Canada, Bois-des-Filion', // carry-over
  f0428150: 'delist, China, Xiamen', // carry-over
  f0429006: 'delist, China, Zhangzhou', // carry-over
  f0432773: 'delist, NR', // carry-over
  f0471266: 'delist, Japan, Ageo', // carry-over
  f0490090: 'delist, Korea, Seoul', // carry-over
  f0492222: 'delist, Canada, Vancouver', // carry-over
  f0492283: 'delist, USA, Quail Valley', // carry-over
  f0492295: 'delist, China, Shenzhen', // carry-over
  f0494174: 'delist, Norway', // carry-over
  f0494332: 'delist, Ukraine, Sumy', // carry-over
  f0494586: 'delist, China, Nanchang', // carry-over
  f0503423: 'delist, NR', // carry-over
  f0504467: 'delist, Korea, Seoul', // carry-over
  f0510010: 'delist, Russia, Shchelkovo', // carry-over
  f0511480: 'delist, China, Yangzhou', // carry-over
  f0518641: 'delist, China, Hangzhou', // carry-over
  f0522078: 'delist, China, Hangzhou', // carry-over
  f0524577: 'delist, China, Foshan', // carry-over
  f0524945: 'delist, China, Beijing', // carry-over
  f0607157: 'delist, China, Jieyang', // carry-over
  f0677977: 'delist, USA, Wenham', // carry-over
  f0700207: 'delist, China, Harbin', // carry-over
  f0705704: 'delist, China, Karamay' // carry-over
}

export default annotations
