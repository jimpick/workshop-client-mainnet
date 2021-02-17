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

	f01289: "new, China, Ningbo", // carry-over
	f02303: "new, Singapore", // carry-over
	f02528: "new, Singapore", // carry-over
	f02609: "new, China, Shanghai", // carry-over
	f02626: "new, Singapore", // carry-over
	f03223: "new, USA", // carry-over
	f03362: "new, Germany, Berlin", // carry-over
	f09620: "new, China, Weifang", // carry-over
	f022748: "new, China, Xinyang", // carry-over
	f040332: "new, China, Shenzhen", // carry-over
	f047868: "new, China, Fuzhou", // carry-over
	f052701: "new, China, Beijing", // carry-over
	f065259: "new, NR", // carry-over
	f066790: "new, China, Beijing", // carry-over
	f079370: "new, China, Zhangzhou", // carry-over
	f085777: "new, China, Zhangzhou", // carry-over
	f086423: "new, China, Chengdu", // carry-over
	f098664: "new, China, Jiangsu", // carry-over
	f099884: "new, China, Chengdu", // carry-over
	f0100082: "new, Korea, Seongnam-si", // carry-over
	f0102376: "new, China, Karamay", // carry-over
	f0102641: "new, China, Guangzhou", // carry-over
	f0103851: "new, China, Karamay", // carry-over
	f0109040: "new, China, Zhangzhou", // carry-over
	f0114687: "new, China, Dongguan", // carry-over
	f0118769: "new, China, Fujian", // carry-over
	f0120909: "new, China, Changsha", // carry-over
	f0121260: "new, China, Quinzhou", // carry-over
	f0121450: "new, China, Fujian", // carry-over
	f0134682: "new, China, Beijing", // carry-over
	f0134778: "new, China, Beijing", // carry-over
	f0135738: "new, China, Karamay", // carry-over
	f0141614: "new, China, Fujian", // carry-over
	f0149765: "new, China, Beijing", // carry-over
	f0150782: "new, China, Xiamen", // carry-over

  // Active

	f03339: "active, China, Luzhou, benxun", // 1593184 about 3 hours
	f066804: "active, NR", // 1593246 about 2 hours
	f081644: "active, China, Wenzhou", // 1593164 about 4 hours
	f094374: "active, China, Nanyang", // 1593157 about 8 hours

  // Active-sealing (active, with in-flight sealing)

	f019806: "active-sealing, China, Beijing", // 1593176

  // Sealing

	f02822: "sealing, China, Chengdu", // 1593232
	f03345: "sealing, China, Fuzhou, chh", // 1593183
	f08019: "sealing, China, Yantai, 三合", // 1593189
	f010513: "sealing, China, Chongqing", // 1593188
	f015233: "sealing, China, Nanjing", // 1593155
	f016203: "sealing, China, Chengdu", // 1593249
	f016276: "sealing, China, Beijing", // 1593234
	f020489: "sealing, China, Lioaning", // 1593235
	f020928: "sealing, China, Deyang + Singapore", // 1593233
	f022261: "sealing, China, Luzhou", // 1593180
	f023219: "sealing, NR", // 1593242
	f024944: "sealing, Korea, Yeongdeungpo-dong", // 1593154
	f029665: "sealing, NR", // 1593253
	f033036: "sealing, China, Liaoning", // 1593243
	f039515: "sealing, China, Chongqing", // 1593193
	f042567: "sealing, China, Jinhua", // 1593162
	f044160: "sealing, China, Guangzhou, muxing", // 1593163
	f053088: "sealing, China, Shanghai", // 1593185
	f055102: "sealing, Vietman, Ho Chi Minh City + China", // 1593156
	f055132: "sealing, Vietman, Ho Chi Minh City + China", // 1593158
	f086151: "sealing, China, Dongguan", // 1593296
	f089840: "sealing, Korea, Yeongdeungpo-gu", // 1593181
	f091355: "sealing, NR", // 1593247

  // Stuck

	f025025: "stuck, China, Qingdao", // Transferring: about 15 hours

  // Busy

	f015734: "busy, China, Qingdao", // cannot seal a sector before 512604
	f022820: "busy, China, Guangdong", // cannot seal a sector before 512604

  // Min Size

	f01238: "min-size, Vietnam, Hanoi, FILECOIN-VIETNAM", // 131072 < 8589934592
	f01240: "min-size, Netherlands, HidNand", // 131072 < 17179869184
	f01272: "min-size, Singapore", // 131072 < 10485760
	f01276: "min-size, Canada, Brampton, NBFS Canada", // 131072 < 17179869184
	f01278: "min-size, USA, Grand Rapids, MiMiner", // 131072 < 1073741824
	f02387: "min-size, Canada, Brampton, NBFS Canada", // 131072 < 17179869184
	f02401: "min-size, Canada, Chambly, NBFS Canada", // 131072 < 17179869184
	f02416: "min-size, China, Guangdong, 星际无限", // 131072 < 1048576
	f02419: "min-size, China, Shanghai, yuantai", // 131072 < 268435456
	f02576: "min-size, Denmark, Gjerlev, BenjaminH", // 131072 < 16106127360
	f02619: "min-size, China, Beijing, Blockcasting", // 131072 < 1048576
	f02620: "min-size, Poland, Krakow, @magik6k", // 131072 < 536870912
	f03624: "min-size, Germany, Chemnitz, ode", // 131072 < 8589934592
	f07998: "min-size, China, Hangzhou", // 131072 < 8000000000
	f08240: "min-size, Russia, Novosibirsk, Rabinovitch", // 131072 < 1073741824
	f08399: "min-size, USA, Sammamish", // 131072 < 4294967296
	f08403: "min-size, UK, Lower Slaughter, TippyFlits", // 131072 < 33554432
	f09848: "min-size, USA, Irvine, BigBearLake", // 131072 < 2147483648
	f010035: "min-size, Netherlands + China, Suzhou", // 131072 < 2147483648
	f010254: "min-size, Japan, Minamata", // 131072 < 134217728
	f010446: "min-size, Netherlands, Angelo", // 131072 < 8589934592
	f010479: "min-size, France, Fontenay-sous-Bois, s0nik42", // 131072 < 8589934592
	f010617: "min-size, Canada, Surrey, kernelogic2, @feiya200", // 131072 < 17179869184
	f014768: "min-size, Singapore, Funktafide, @Funk", // 131072 < 1073741824
	f015927: "min-size, USA, East Islip, CDImine", // 131072 < 17179869184
	f018501: "min-size, China, Beijing", // 131072 < 1073741824
	f019002: "min-size, China, Xiamen", // 131072 < 1073741824
	f019104: "min-size, Canada, Chambly, NBFS DEV", // 131072 < 8388608
	f019362: "min-size, China, Hangzhou, 青青子衿", // 131072 < 17179869184
	f019399: "min-size, Korea, Busan", // 131072 < 268435456
	f019551: "min-size, UK, Birmingham, @Neofix AF", // 131072 < 17179869184
	f020378: "min-size, Bulgaria, Asenovgrad", // 131072 < 2147483648
	f020385: "min-size, Korea, Incheon", // 131072 < 536870912
	f020436: "min-size, China, Beijing", // 131072 < 536870912
	f020904: "min-size, Korea, Uijeongbu-si, FILTop", // 131072 < 8589934592
	f021255: "min-size, Netherlands + China, Suzhou", // 131072 < 2147483648
	f021716: "min-size, New Zealand, Wellington", // 131072 < 8589934592
	f022142: "min-size, USA, Queens, Nelson SR2", // 131072 < 134217728
	f022163: "min-size, dns:fil.akasha.network", // 131072 < 17179869184
	f022352: "min-size, Norway, Borgen, TechHedge, @Reiers", // 131072 < 2147483648
	f023467: "min-size, Norway, Oslo, PhiMining.io", // 131072 < 268435456
	f023565: "min-size, China, Fuzhou", // 131072 < 1536000
	f023660: "min-size, China, Fuzhou", // 131072 < 1572864000
	f023662: "min-size, China, Fuzhou", // 131072 < 1572864000
	f023854: "min-size, China, Fuzhou", // 131072 < 1572864000
	f023855: "min-size, China, Fuzhou", // 131072 < 1572864000
	f023858: "min-size, China, Fuzhou", // 131072 < 1572864000
	f023859: "min-size, China, Fuzhou", // 131072 < 1572864000
	f023861: "min-size, China, Fuzhou", // 131072 < 1572864000
	f023868: "min-size, China, Fuzhou", // 131072 < 1572864000
	f023869: "min-size, China, Fuzhou", // 131072 < 1572864000
	f023870: "min-size, China, Fuzhou", // 131072 < 1572864000
	f023871: "min-size, China, Fuzhou", // 131072 < 4294967296
	f023928: "min-size, China, Fuzhou", // 131072 < 1572864000
	f023977: "min-size, China, Fuzhou", // 131072 < 1572864000
	f023978: "min-size, China, Fuzhou", // 131072 < 1572864000
	f023980: "min-size, China, Fuzhou", // 131072 < 1572864000
	f023981: "min-size, China, Fuzhou", // 131072 < 1572864000
	f024006: "min-size, China, Fuzhou", // 131072 < 1572864000
	f024007: "min-size, China, Fuzhou", // 131072 < 1572864000
	f024008: "min-size, China, Fuzhou", // 131072 < 1572864000
	f024012: "min-size, China, Fuzhou", // 131072 < 1572864000
	f024013: "min-size, China, Fuzhou", // 131072 < 1572864000
	f024014: "min-size, China, Fuzhou", // 131072 < 1572864000
	f024081: "min-size, undefined", // 131072 < 1572864000
	f024084: "min-size, China, Fuzhou", // 131072 < 1572864000
	f024136: "min-size, China, Fuzhou", // 131072 < 1572864000
	f024146: "min-size, China, Fuzhou", // 131072 < 1572864000
	f024147: "min-size, China, Fuzhou", // 131072 < 1572864000
	f024148: "min-size, China, Fuzhou", // 131072 < 1572864000
	f024511: "min-size, China, Shenzhen", // 131072 < 134217728
	f025017: "min-size, China, Hefei, 一三科技-913", // 131072 < 134217728
	f030335: "min-size, China, Fujian", // 131072 < 134217728
	f032934: "min-size, Korea, Incheon", // 131072 < 1073741824
	f034047: "min-size, China, Hangzhou", // 131072 < 1073741824
	f047419: "min-size, USA, Waukesha", // 131072 < 17179869184
	f048669: "min-size, NR", // 131072 < 1048576
	f049882: "min-size, Netherlands, De Rijp, Chipz", // 131072 < 17179869184
	f062353: "min-size, Germany, Frankfurt", // 131072 < 17179869184
	f064218: "min-size, USA, Kirkland", // 131072 < 17179869184
	f064668: "min-size, China, Hong Kong", // 131072 < 1048576
	f066596: "min-size, USA, San Diego", // 131072 < 1048576
	f079817: "min-size, Russia, Ul'yanovka", // 131072 < 1073741824
	f082617: "min-size, China, Fujian", // 131072 < 134217728
	f083920: "min-size, NR", // 131072 < 1573031772
	f085899: "min-size, China, Wuxi", // 131072 < 16777216

  // Max Size

  // Min Ask

	f01241: "min-ask, USA, Portland, 6block", // 20000000 < 122070312500000
	f01277: "min-ask, Sweden, Stockholm, tvsthlm", // 20000000 < 122070312500000
	f01280: "min-ask, China, Wuxi, 了凡超算", // 20000000 < 12207031250000000
	f01799: "min-ask, China, Jinan, TokenHome", // 20000000 < 12207031250000000
	f02381: "min-ask, China, Dongguan, 西野七濑迷叔", // 20000000 < 6103515625000
	f02415: "min-ask, China, Hong Kong", // 20000000 < 122070312500000
	f02423: "min-ask, undefined", // 20000000 < 24414062
	f02500: "min-ask, Korea, Seongnam-si", // 20000000 < 1220703125000
	f02501: "min-ask, USA, Portland, 6block", // 20000000 < 122070312500000
	f02514: "min-ask, USA, Portland, 6block", // 20000000 < 122070312500000
	f02606: "min-ask, China, Shanghai", // 20000000 < 122070312
	f02622: "min-ask, USA, Portland, 6block", // 20000000 < 122070312500000
	f02623: "min-ask, USA, Portland, 6block", // 20000000 < 122070312500000
	f02633: "min-ask, China, Hong Kong", // 20000000 < 122070312500000
	f02645: "min-ask, China, Hong Kong", // 20000000 < 122070312500000
	f03224: "min-ask, Ukraine, Irpin, oboltusov", // 20000000 < 24414062
	f03273: "min-ask, USA, Portland, 6block", // 20000000 < 122070312500000
	f03274: "min-ask, USA, Portland, 6block", // 20000000 < 122070312500000
	f03275: "min-ask, USA, Portland, 6block", // 20000000 < 122070312500000
	f03364: "min-ask, China, Guangzhou", // 20000000 < 12207031250000000
	f03482: "min-ask, China, Wuxi", // 20000000 < 12207031250000000
	f03488: "min-ask, Korea, Geumcheon-gu, we4u", // 20000000 < 24414062500
	f03491: "min-ask, China, Hong Kong", // 20000000 < 122070312500000
	f04443: "min-ask, China, Shanghai, 罗良科技", // 20000000 < 61035156
	f05315: "min-ask, USA, Portland, 6block", // 20000000 < 122070312500000
	f05316: "min-ask, USA, Portland, 6block", // 20000000 < 122070312500000
	f05317: "min-ask, USA, Portland", // 20000000 < 122070312500000
	f05664: "min-ask, China, Shenzhen, 艾比特网络科技", // 20000000 < 24414062500000
	f07850: "min-ask, USA, Portland, 6block", // 20000000 < 122070312500000
	f07990: "min-ask, China, Hong Kong", // 20000000 < 122070312500000
	f08025: "min-ask, China, Hong Kong", // 20000000 < 122070312500000
	f08103: "min-ask, China, Foshan, 花生酱肠粉", // 20000000 < 61035156
	f08257: "min-ask, China, Ningbo + USA, Boardman", // 20000000 < 12207031250
	f08383: "min-ask, USA, Portland, 6block", // 20000000 < 122070312500000
	f09693: "min-ask, USA, Portland + Singapore, 6block-CapsuleMining", // 20000000 < 122070312500000
	f09696: "min-ask, USA, Portland + Singapore", // 20000000 < 122070312500000
	f010010: "min-ask, China, Changzhou + Hong Kong", // 20000000 < 12207031250000000000000000
	f010253: "min-ask, China, Beijing + USA, Portland", // 20000000 < 122070312500000
	f010405: "min-ask, China, Foshan", // 20000000 < 122070312500000
	f014365: "min-ask, Australia, Marrickville + Japan, Heiwajima", // 20000000 < 120849609375000
	f014409: "min-ask, USA, Waxhaw, Meatball Part III", // 20000000 < 6103515625
	f015897: "min-ask, China, Guangdong", // 20000000 < 12207031250000000
	f017665: "min-ask, China, Shenyang", // 20000000 < 122070312500000
	f018780: "min-ask, Singapore + Germany, Frankfurt + USA", // 20000000 < 122070312500000
	f018781: "min-ask, Singapore + Germany, Frankfurt + USA", // 20000000 < 122070312500000
	f018782: "min-ask, Singapore + Germany, Frankfurt + USA", // 20000000 < 122070312500000
	f018783: "min-ask, Singapore + Germany, Frankfurt + USA", // 20000000 < 122070312500000
	f018784: "min-ask, Singapore + Germany, Frankfurt + USA", // 20000000 < 122070312500000
	f018785: "min-ask, Singapore + Germany, Frankfurt + USA", // 20000000 < 122070312500000
	f019100: "min-ask, Romania, Cluj-Napoca, noisyfan", // 20000000 < 122070312
	f019240: "min-ask, China, Beijing", // 20000000 < 122070312500000
	f020541: "min-ask, China, Shanghai", // 20000000 < 61035156250
	f020747: "min-ask, China, Xiamen", // 20000000 < 122070312
	f022130: "min-ask, Korea, Seodaemun-gu", // 20000000 < 61035156
	f022308: "min-ask, China, Shenzhen", // 20000000 < 12207031250
	f022522: "min-ask, China, Dongguan", // 20000000 < 122070312500000000
	f023152: "min-ask, China, Quanzhou", // 20000000 < 12207031250000000000000000
	f023495: "min-ask, China, Beijing + USA, Portland", // 20000000 < 122070312500000
	f023825: "min-ask, USA, Portland", // 20000000 < 122070312500000
	f023843: "min-ask, China, Zhangjiakou", // 20000000 < 12207031250000000
	f024015: "min-ask, USA, Portland, FILmiPool-JP01", // 20000000 < 122070312500000
	f024016: "min-ask, USA, Portland", // 20000000 < 122070312500000
	f024156: "min-ask, USA", // 20000000 < 122070312500000
	f024184: "min-ask, Korea, Gangnam-gu, we4u-GREEN", // 20000000 < 24414062500
	f029344: "min-ask, Korea, Seongnam-si", // 20000000 < 1220703125000
	f029401: "min-ask, USA, Portland + New Castle", // 20000000 < 122070312500000
	f029404: "min-ask, USA, Portland + New Castle", // 20000000 < 122070312500000
	f030203: "min-ask, undefined", // 20000000 < 12207031250000000
	f030379: "min-ask, Korea, Uiwang", // 20000000 < 1220703125
	f030384: "min-ask, undefined", // 20000000 < 12207031250000
	f032913: "min-ask, China, Shenzhen", // 20000000 < 122070312500
	f033123: "min-ask, USA, Portland + New Castle", // 20000000 < 122070312500000
	f033356: "min-ask, Korea, Gangnum-gu, we4u-YELLOW", // 20000000 < 24414062500
	f033511: "min-ask, China, Dongguan", // 20000000 < 1220703125
	f039800: "min-ask, China, Chengdu", // 20000000 < 122070312500000
	f040218: "min-ask, China, Wuxi", // 20000000 < 12207031250000000
	f042540: "min-ask, China, Beijing + USA, Portland + Newcastle", // 20000000 < 122070312500000
	f042558: "min-ask, China, Beijing + USA, Portland + Newcastle", // 20000000 < 122070312500000
	f042635: "min-ask, China, Beijing + USA, Portland + Newcastle", // 20000000 < 122070312500000
	f050022: "min-ask, China, Changsha", // 20000000 < 6103515625000
	f052447: "min-ask, China, Beijing + USA, Portland + New Castle", // 20000000 < 122070312500000
	f054370: "min-ask, China, Dongguan", // 20000000 < 12207031250
	f056611: "min-ask, USA, Portland + New Castle", // 20000000 < 122070312500000
	f057614: "min-ask, USA, Portland + New Castle", // 20000000 < 122070312500000
	f057698: "min-ask, NR", // 20000000 < 122070312500000
	f058000: "min-ask, China, Suzhou", // 20000000 < 24414062
	f060072: "min-ask, China, Chongqing", // 20000000 < 610351562500000
	f061740: "min-ask, USA, Portland + New Castle", // 20000000 < 122070312500000
	f062260: "min-ask, China, Guangzhou", // 20000000 < 61035156250000
	f062318: "min-ask, Korea, Naju", // 20000000 < 12207031250
	f062334: "min-ask, USA, Portland + New Castle", // 20000000 < 122070312500000
	f062770: "min-ask, China, Fuzhou", // 20000000 < 12206909179687500000
	f062811: "min-ask, China, Fuzhou", // 20000000 < 12206909179687500000
	f062982: "min-ask, China, Fuzhou", // 20000000 < 12206909179687500000
	f065103: "min-ask, USA, Portland + China, Shenzhen", // 20000000 < 122070312500000
	f065200: "min-ask, China, Yibin", // 20000000 < 24414062
	f066104: "min-ask, China, Xingjiang + USA, Portland", // 20000000 < 122070312500000
	f069915: "min-ask, NR", // 20000000 < 122070312500000
	f069919: "min-ask, NR", // 20000000 < 122070312500000
	f070501: "min-ask, USA + China, Hong Kong", // 20000000 < 122070312500000
	f070999: "min-ask, China, Xinjiang", // 20000000 < 122070312500000
	f071664: "min-ask, China, Shandong", // 20000000 < 12207031250000000000000000
	f071980: "min-ask, China, Xinjiang", // 20000000 < 122070312500000
	f073552: "min-ask, NR", // 20000000 < 122070312500000
	f074738: "min-ask, Korea, Seongbuk-gu", // 20000000 < 1220703125000
	f078770: "min-ask, China, Xinjiang", // 20000000 < 122070312500000
	f078772: "min-ask, NR", // 20000000 < 122070312500000
	f079197: "min-ask, NR", // 20000000 < 122070312500000
	f079247: "min-ask, USA, New Castle", // 20000000 < 122070312500000
	f079301: "min-ask, USA, New Castle", // 20000000 < 122070312500000
	f080444: "min-ask, China, Chengdu", // 20000000 < 122070312500000
	f080480: "min-ask, Ukraine, Lviv", // 20000000 < 122070312
	f082356: "min-ask, China, Jiaxing", // 20000000 < 610351562500
	f082452: "min-ask, China, Dongguan", // 20000000 < 1220581054687500000
	f083625: "min-ask, China, Xinjiang", // 20000000 < 122070312500000
	f083903: "min-ask, NR", // 20000000 < 122192382812500
	f084879: "min-ask, Korea, Seongnam-si", // 20000000 < 1220703125000
	f092514: "min-ask, China, Karamay", // 20000000 < 122070312500000
	f094614: "min-ask, China, Karamay", // 20000000 < 122070312500000
	f097386: "min-ask, China, Beijing", // 20000000 < 12206909179687500000
	f099239: "min-ask, China, Hong Kong", // 20000000 < 12207031250000000
	f0114924: "min-ask, China, Fujian", // 20000000 < 12206909179687500000
	f0134991: "min-ask, China, Foshan", // 20000000 < 12206909179687500000

  // Error

	f03134: "error, China, Cangzhou, 乔木信息", // deal failed: (State=26) handing off deal to node: write |1: broken pipe
	f07709: "error, Korea, Dongjak-gu", // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: SysErrOutOfGas(7)
	f09689: "error, USA, Portland", // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
	f010241: "error, China, Beijing + USA, Portland, 6Block-P", // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 1.720615095992086986 FIL, balance: 1.137184564132064476 FIL): not enough funds to execute transaction
	f014569: "error, China, Yangzhou", // stream reset
	f016398: "error, China, Shanghai", // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
	f017193: "error, China, Xi'an + Singapore", // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
	f017242: "error, China, Guangdong", // stream reset
	f019824: "error, USA", // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.179999999969768768 FIL, balance: 0.092668830630241061 FIL): not enough funds to execute transaction
	f023179: "error, China, Fuzhou", // AddPiece failed: adding piece to sector: writing piece: no suitable P1 workers found
	f023198: "error, NR", // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
	f030125: "error, China, Nantong", // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.29999999996487414 FIL, balance: 0.183854016241926293 FIL): not enough funds to execute transaction
	f030347: "error, China, Zhejiang", // deal failed: (State=26) handing off deal to node: write |1: broken pipe
	f054415: "error, NR", // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
	f078522: "error, NR", // stream reset
	f090052: "error, China, Suqian", // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
	f093658: "error, China, Fujian", // deal failed: (State=26) handing off deal to node: write |1: broken pipe
	f094901: "error, Korea, Bucheon-si", // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.499999999980492375 FIL, balance: 0.362365118512101744 FIL): not enough funds to execute transaction
	f095296: "error, China, Suqian", // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
	f0102358: "error, China, Guizhou", // stream reset

  // Dial backoff

	f015767: "backoff, Russia, Khabarovsk + Japan, Khabarovsk + USA",
	f073628: "backoff, USA, New Castle",

  // Rejected

  	f01247: "rejected, Canada, Montreal", // Sorry, we are currently not accepting deals!
	f02301: "rejected, USA",
	f02665: "rejected, Netherlands, Amsterdam, fm-ops", // no online
	f02856: "rejected, China, Chengdu", // no online
	f08157: "rejected, China, Beijing + Germany, Frankfurt, 超星际", // sh: 1: /mnt/lotusminer/dealfilter.pl: not found
	f010493: "rejected, China, Shanghai", // no online
	f010498: "rejected, China, Shenzhen", // no online
	f010505: "rejected, China, Wuhan, Interstellar Roewe", // no online
	f010528: "rejected, China, Chongqing, Interstellar Roewe", // no online
	f014251: "rejected, China, Shenzhen",
	f015747: "rejected, Japan, Setagaya-ku",
	f020523: "rejected, China, Suzhou, changjiang", // sh: 1: VerifiedDeal:true: not found
	f021254: "rejected, NR", // f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa<nil>
	f021504: "rejected, NR",
	f021536: "rejected, NR", // getting client market balance failed
	f021961: "rejected, China, Fuzhou", // getting client market balance failed
	f022072: "rejected, China, Jieyang",
	f022853: "rejected, China, Fuzhou",
	f029490: "rejected, NR",
	f034777: "rejected, China, Chengdu", // no online
	f035436: "rejected, China, Jiangsu", // no online
	f042391: "rejected, China, Fuzhou", // no online
	f045756: "rejected, China, Hangzhou", // getting client market balance failed
	f047843: "rejected, China, Xiamen", // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
	f047857: "rejected, China, Fuzhou", // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
	f048135: "rejected, China, Chongqing, password interstellar", // sh: 1: /lotus_data/.lotusstorage/dealfilter.pl: not found
	f048968: "rejected, NR", // no online
	f050260: "rejected, China, Suzhou",
	f055335: "rejected, NR",
	f056226: "rejected, NR",
	f056573: "rejected, China, Sichuan", // no online
	f057466: "rejected, China, Guangzhou", // no online
	f062937: "rejected, NR",
	f063869: "rejected, NR",
	f066270: "rejected, China, Dongguan", // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
	f068560: "rejected, China, Changsha", // syntax error at /filecoin/lotusminer/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /filecoin/lotusminer/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /filecoin/lotusminer/dealfilter.pl line 16.
	f078899: "rejected, NR",
	f079618: "rejected, China, Beijing", // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
	f079815: "rejected, China, Hangzhou", // getting client market balance failed
	f080468: "rejected, NR", // no online
	f083065: "rejected, China, Taizhou", // no online
	f083638: "rejected, China, Chongqing",
	f085710: "rejected, China, Chengdu", // no online
	f085735: "rejected, China, Ya'an", // no online
	f087256: "rejected, China, Hangzhou", // getting client market balance failed
	f087530: "rejected, China, Shenzhen", // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
	f089551: "rejected, NR", // getting client market balance failed
	f090387: "rejected, China, Fuzhou", // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
	f090864: "rejected, NR",
	f0109272: "rejected, China, Dongguan", // no online
	f0111658: "rejected, China, Fuzhou", // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
	f0112087: "rejected, China, Xiamen", // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
	f0116628: "rejected, China, Shanghai", // no online

  // Dial

	f01235: "dial, Singapore", // * [/ip4/170.33.12.95/tcp/16668] dial tcp4 0.0.0.0:44935->170.33.12.95:16668: i/o timeout
	f01248: "dial, Germany, Frankfurt", // * [/ip4/128.1.78.100/tcp/31432] dial tcp4 0.0.0.0:44935->128.1.78.100:31432: i/o timeout
	f01274: "dial, China, Guangdong", // * [/ip4/27.34.168.4/tcp/3000] dial tcp4 0.0.0.0:44935->27.34.168.4:3000: i/o timeout
	f01287: "dial, China, Jiaxing, MaiTian", // * [/ip4/172.16.2.123/tcp/5472] dial tcp4 0.0.0.0:44935->172.16.2.123:5472: i/o timeout  * [/ip4/122.225.68.92/tcp/5472] dial tcp4 0.0.0.0:44935->122.225.68.92:5472: i/o timeout
	f01291: "dial, Sweden, Stockholm, tvsthlm", // * [/ip4/145.14.112.2/tcp/23456] dial tcp4 145.14.112.2:23456: connect: connection refused  * [/ip4/145.14.112.2/tcp/22334] dial tcp4 145.14.112.2:22334: connect: connection refused  * [/ip4/145.14.112.2/tcp/33445] dial tcp4 145.14.112.2:33445: connect: connection refused
	f01782: "dial, China, Shanghai", // * [/ip4/139.196.240.164/tcp/11347] failed to negotiate security protocol: EOF
	f01800: "dial, China, Shenzhen + Chengdu", // * [/ip4/182.131.4.48/tcp/33333] dial tcp4 182.131.4.48:33333: connect: connection refused
	f02405: "dial, China, Shenzhen", // * [/ip4/119.147.213.59/tcp/4123] dial tcp4 119.147.213.59:4123: connect: connection refused  * [/ip4/192.168.231.206/tcp/4123] dial tcp4 0.0.0.0:44935->192.168.231.206:4123: i/o timeout
	f02438: "dial, China, Guangdong", // * [/ip4/47.115.10.99/tcp/14567] dial tcp4 0.0.0.0:44935->47.115.10.99:14567: i/o timeout
	f02490: "dial, China, Fujian", // * [/ip4/47.254.132.122/tcp/2347] dial tcp4 0.0.0.0:44935->47.254.132.122:2347: i/o timeout
	f02520: "dial, China, Hong Kong + Dongguan", // * [/ip4/121.14.159.107/tcp/31432] dial tcp4 121.14.159.107:31432: connect: connection refused  * [/ip4/10.3.4.152/tcp/31432] dial tcp4 0.0.0.0:44935->10.3.4.152:31432: i/o timeout  * [/ip4/8.211.50.10/tcp/31432] dial tcp4 0.0.0.0:44935->8.211.50.10:31432: i/o timeout
	f02668: "dial, China, Chengdu", // * [/ip4/118.123.228.191/tcp/48633] dial tcp4 0.0.0.0:44935->118.123.228.191:48633: i/o timeout
	f03225: "dial, China, Guyuan", // * [/ip4/10.100.0.2/tcp/11111] dial tcp4 10.100.0.2:11111: connect: connection refused
	f03328: "dial, China, Xinxiang, Golden Miner", // * [/ip4/27.50.142.61/tcp/2347] dial tcp4 0.0.0.0:44935->27.50.142.61:2347: i/o timeout
	f03347: "dial, China, Shenzhen", // * [/ip4/103.44.253.59/tcp/33455] dial tcp4 103.44.253.59:33455: connect: connection refused  * [/ip4/103.119.132.105/tcp/33455] dial tcp4 0.0.0.0:44935->103.119.132.105:33455: i/o timeout
	f07819: "dial, China, Wuxi, YC--wuxi", // * [/ip4/58.215.232.74/tcp/10100] dial tcp4 58.215.232.74:10100: connect: connection refused  * [/ip4/192.168.1.19/tcp/1010] dial tcp4 0.0.0.0:44935->192.168.1.19:1010: i/o timeout
	f07919: "dial, China, Beijing, Shanghai, Hunan", // * [/ip4/47.101.4.131/tcp/23456] failed to negotiate security protocol: read tcp4 66.70.191.245:44935->47.101.4.131:23456: read: connection reset by peer  * [/ip4/139.196.136.126/tcp/23456] dial tcp4 0.0.0.0:44935->139.196.136.126:23456: i/o timeout  * [/ip4/101.32.198.187/tcp/23456] dial tcp4 0.0.0.0:44935->101.32.198.187:23456: i/o timeout  * [/ip4/175.6.66.78/tcp/44913] dial tcp4 0.0.0.0:44935->175.6.66.78:44913: i/o timeout  * [/ip4/101.32.198.186/tcp/23456] dial tcp4 0.0.0.0:44935->101.32.198.186:23456: i/o timeout
	f08264: "dial, China, Xianning", // * [/ip4/103.222.191.115/tcp/1161] dial tcp4 0.0.0.0:44935->103.222.191.115:1161: i/o timeout
	f08285: "dial, Latvia, Riga, stander", // * [/ip4/109.73.97.103/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBBghMwnobTZP1Buw72KVEuzURgLPUYaq5WRF1wcygy9C, but remote key matches 12D3KooWMF32Az9K6knsUwttFYUJ4qrArvDgg1bnAdUw3mt6eEZr
	f08532: "dial, USA", // * [/ip4/162.244.80.116/tcp/7777] dial tcp4 162.244.80.116:7777: connect: no route to host  * [/ip4/162.244.80.116/tcp/8888] dial tcp4 162.244.80.116:8888: connect: no route to host
	f09037: "dial, Singapore", // * [/ip4/170.33.12.95/tcp/16666] dial tcp4 0.0.0.0:44935->170.33.12.95:16666: i/o timeout
	f09652: "dial, Singapore", // * [/ip4/170.33.9.50/tcp/32632] dial tcp4 0.0.0.0:44935->170.33.9.50:32632: i/o timeout
	f010247: "dial, China, Yantai", // * [/ip4/122.14.201.169/tcp/10240] dial tcp4 122.14.201.169:10240: connect: connection refused
	f010399: "dial, China, Guangzhou", // * [/ip4/183.2.154.156/tcp/36699] dial tcp4 0.0.0.0:44935->183.2.154.156:36699: i/o timeout
	f010491: "dial, China, Shenzhen", // * [/ip4/116.24.57.90/tcp/8888] dial tcp4 0.0.0.0:44935->116.24.57.90:8888: i/o timeout
	f010501: "dial, China, Hangzhou, Interstellar Roewe", // * [/ip4/183.134.218.26/tcp/21735] dial tcp4 0.0.0.0:44935->183.134.218.26:21735: i/o timeout
	f010523: "dial, China, Beijing, Interstellar Roewe", // * [/ip4/123.58.99.210/tcp/21735] dial tcp4 0.0.0.0:44935->123.58.99.210:21735: i/o timeout
	f014394: "dial, China, Suzhou, IPFSCloud", // * [/ip4/222.92.5.147/tcp/42799] dial tcp4 222.92.5.147:42799: connect: connection refused
	f014395: "dial, China, Dongguan", // * [/ip4/125.93.73.102/tcp/51105] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJyNmap2Z6WWb6xBqDwUpKeFkGHaBHDkMKhrkd6jj6FEY, but remote key matches 12D3KooWB6MM5Fda1RdDyTdJCPMpvHFq6HSJfPV9DeoqGSbfwe1d
	f015941: "dial, Ukraine, Kyiv", // * [/ip4/176.37.167.219/tcp/1347] dial tcp4 0.0.0.0:44935->176.37.167.219:1347: i/o timeout
	f015942: "dial, China, Ningbo", // * [/ip4/63.209.33.203/tcp/9883] dial tcp4 63.209.33.203:9883: connect: connection refused  * [/ip4/95.179.171.100/tcp/9882] dial tcp4 95.179.171.100:9882: connect: connection refused  * [/ip4/45.32.19.57/tcp/9881] dial tcp4 45.32.19.57:9881: connect: connection refused  * [/ip4/123.137.128.188/tcp/3698] dial tcp4 123.137.128.188:3698: connect: connection refused  * [/ip4/155.138.158.107/tcp/9884] dial tcp4 0.0.0.0:44935->155.138.158.107:9884: i/o timeout
	f016594: "dial, Germany", // * [/ip4/135.181.76.245/tcp/12345] dial tcp4 0.0.0.0:44935->135.181.76.245:12345: i/o timeout
	f019029: "dial, Serbia, Boljevac", // * [/ip4/178.220.25.96/tcp/46717] dial tcp4 0.0.0.0:44935->178.220.25.96:46717: i/o timeout
	f020223: "dial, China, Guiyang", // * [/ip4/111.85.176.10/tcp/10240] dial tcp4 0.0.0.0:44935->111.85.176.10:10240: i/o timeout
	f021075: "dial, China, Chengdu", // * [/ip4/47.242.40.252/tcp/36545] dial tcp4 0.0.0.0:44935->47.242.40.252:36545: i/o timeout
	f023001: "dial, China, Changsha", // * [/ip4/120.24.145.114/tcp/7001] dial tcp4 120.24.145.114:7001: connect: connection refused
	f023581: "dial, China, Hong Kong, mine-much", // * [/ip4/183.61.251.226/tcp/34145] dial tcp4 183.61.251.226:34145: connect: connection refused
	f023853: "dial, China, Fuzhou", // * [/ip4/47.104.146.62/tcp/23450] failed to negotiate security protocol: EOF
	f023876: "dial, China, Fuzhou", // * [/ip4/220.176.125.51/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAfpdzwcpqchJrRhJMY9g8i8Dr1VMiiSNB7YTfMy2rrE4, but remote key matches 12D3KooWRKoJ2VrPziXJ9KiC3MA63qG1Hccke786PQdbtbeESDTv
	f024085: "dial, China, Fuzhou", // * [/ip4/8.135.115.138/tcp/23450] failed to negotiate security protocol: read tcp4 66.70.191.245:44935->8.135.115.138:23450: read: connection reset by peer
	f025007: "dial, Korea, Gyeonggi-do, PINBYTES-eCUBE", // * [/ip4/222.112.183.197/tcp/24001] dial tcp4 0.0.0.0:44935->222.112.183.197:24001: i/o timeout
	f025019: "dial, China, Taiwan, Hsinchu", // * [/ip4/140.113.194.250/tcp/24002] dial tcp4 0.0.0.0:44935->140.113.194.250:24002: i/o timeout
	f030327: "dial, China, Beijing", // * [/ip4/124.250.42.202/tcp/24567] dial tcp4 0.0.0.0:44935->124.250.42.202:24567: i/o timeout
	f033549: "dial, China, Quzhou", // * [/ip4/123.157.96.110/tcp/20001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCiseZ7iZE7uSs2c2Ws2KgUbPCctYi5r5M1Z1sew9dSAv, but remote key matches 12D3KooWSRyy2kbgsQVMjHBwzwU3kF9iJvmF2RGjakL3XA3Mj16g
	f034544: "dial, NR", // * [/ip4/183.131.58.134/tcp/14567] dial tcp4 0.0.0.0:44935->183.131.58.134:14567: i/o timeout
	f034545: "dial, NR", // * [/ip4/183.131.58.102/tcp/14567] dial tcp4 0.0.0.0:44935->183.131.58.102:14567: i/o timeout
	f034548: "dial, NR", // * [/ip4/183.131.58.70/tcp/14567] dial tcp4 0.0.0.0:44935->183.131.58.70:14567: i/o timeout
	f034592: "dial, NR", // * [/ip4/119.147.213.217/tcp/45137] dial tcp4 119.147.213.217:45137: connect: connection refused
	f034701: "dial, China, Shenzhen", // * [/ip4/103.44.247.136/tcp/51105] dial tcp4 0.0.0.0:44935->103.44.247.136:51105: i/o timeout
	f046043: "dial, China, Shanghai", // * [/ip4/175.24.25.61/tcp/23459] dial tcp4 0.0.0.0:44935->175.24.25.61:23459: i/o timeout
	f046073: "dial, China, Shanghai", // * [/ip4/175.24.25.61/tcp/23458] dial tcp4 0.0.0.0:44935->175.24.25.61:23458: i/o timeout
	f046074: "dial, China, Shanghai", // * [/ip4/175.24.25.61/tcp/23457] dial tcp4 0.0.0.0:44935->175.24.25.61:23457: i/o timeout
	f048172: "dial, China, Suzhou", // * [/ip4/222.92.5.147/tcp/42899] dial tcp4 222.92.5.147:42899: connect: connection refused
	f048192: "dial, China, Suzhou", // * [/ip4/222.92.5.147/tcp/42999] dial tcp4 222.92.5.147:42999: connect: connection refused
	f049911: "dial, China, Yunfu", // * [/ip6/::1/tcp/35549] dial tcp6 [::1]:35549: connect: connection refused  * [/ip6/::1/tcp/42017] dial tcp6 [::1]:42017: connect: connection refused  * [/ip6/::1/tcp/45117] dial tcp6 [::1]:45117: connect: connection refused  * [/ip6/::1/tcp/35689] dial tcp6 [::1]:35689: connect: connection refused  * [/ip4/127.0.0.1/tcp/40497] dial tcp4 127.0.0.1:40497: connect: connection refused  * [/ip4/127.0.0.1/tcp/34285] dial tcp4 127.0.0.1:34285: connect: connection refused  * [/ip6/::1/tcp/38827] dial tcp6 [::1]:38827: connect: connection refused  * [/ip4/127.0.0.1/tcp/45005] dial tcp4 127.0.0.1:45005: connect: connection refused  * [/ip4/127.0.0.1/tcp/37217] dial tcp4 127.0.0.1:37217: connect: connection refused  * [/ip4/127.0.0.1/tcp/39607] dial tcp4 127.0.0.1:39607: connect: connection refused  * [/ip6/::1/tcp/34543] dial tcp6 [::1]:34543: connect: connection refused  * [/ip6/::1/tcp/44693] dial tcp6 [::1]:44693: connect: connection refused  * [/ip4/127.0.0.1/tcp/43951] dial tcp4 127.0.0.1:43951: connect: connection refused  * [/ip4/127.0.0.1/tcp/46415] dial tcp4 127.0.0.1:46415: connect: connection refused  * [/ip4/113.107.237.196/tcp/34285] dial tcp4 113.107.237.196:34285: connect: connection refused  * [/ip4/113.107.237.196/tcp/37217] dial tcp4 113.107.237.196:37217: connect: connection refused    ... skipping 12 errors ...
	f053229: "dial, NR", // * [/ip4/172.18.112.203/tcp/10241] dial tcp4 0.0.0.0:44935->172.18.112.203:10241: i/o timeout
	f054163: "dial, China, Dongguan", // * [/ip4/113.105.174.22/tcp/10000] dial tcp4 113.105.174.22:10000: connect: connection refused
	f054420: "dial, NR", // * [/ip4/10.1.2.7/tcp/54420] dial tcp4 0.0.0.0:44935->10.1.2.7:54420: i/o timeout
	f054677: "dial, Finland, Helsinki", // * [/ip4/194.100.215.188/tcp/24001] dial tcp4 194.100.215.188:24001: i/o timeout
	f055123: "dial, Korea, Busan", // * [/ip4/119.199.251.92/tcp/24001] dial tcp4 119.199.251.92:24001: i/o timeout
	f057070: "dial, NR", // * [/ip4/117.71.104.68/tcp/10240] dial tcp4 117.71.104.68:10240: connect: connection refused
	f057127: "dial, China, Suzhou", // * [/ip4/58.211.213.210/tcp/20108] dial tcp4 58.211.213.210:20108: connect: connection refused
	f057842: "dial, Korea, Gyeonggi-do", // * [/ip4/59.6.127.39/tcp/23451] dial tcp4 0.0.0.0:44935->59.6.127.39:23451: i/o timeout
	f061043: "dial, China, Changsha", // * [/ip4/124.232.165.204/tcp/24001] dial tcp4 0.0.0.0:44935->124.232.165.204:24001: i/o timeout
	f061158: "dial, China, Guangdong", // * [/ip4/45.137.217.177/tcp/63305] dial tcp4 0.0.0.0:44935->45.137.217.177:63305: i/o timeout
	f061959: "dial, NR", // * [/ip4/172.18.113.213/tcp/10241] dial tcp4 0.0.0.0:44935->172.18.113.213:10241: i/o timeout
	f062375: "dial, Korea, Gyeonggi-do", // * [/ip4/59.6.127.45/tcp/23451] dial tcp4 0.0.0.0:44935->59.6.127.45:23451: i/o timeout
	f062492: "dial, China, Hong Kong", // * [/ip4/218.250.156.81/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCKr7XcRTgZUGVbptwoc29bWhBz4kSidrwwm2v3Q7q3nT, but remote key matches 12D3KooWLDecMnczdXMecPRtHb4ppWp12ErQSUfVarEN7sZ4wLGT
	f062931: "dial, NR", // * [/ip4/115.231.84.133/tcp/14567] dial tcp4 0.0.0.0:44935->115.231.84.133:14567: i/o timeout
	f063173: "dial, Korea, Gyeonggi-do", // * [/ip4/59.6.127.46/tcp/23451] dial tcp4 0.0.0.0:44935->59.6.127.46:23451: i/o timeout
	f064442: "dial, Japan", // * [/ip4/103.204.64.101/tcp/24002] dial tcp4 103.204.64.101:24002: connect: connection refused
	f065732: "dial, Korea, Gyeonggi-do", // * [/ip4/59.6.127.51/tcp/23451] dial tcp4 0.0.0.0:44935->59.6.127.51:23451: i/o timeout
	f066102: "dial, NR", // * [/ip4/172.18.112.93/tcp/10241] dial tcp4 0.0.0.0:44935->172.18.112.93:10241: i/o timeout
	f066259: "dial, NR", // * [/ip4/172.19.101.33/tcp/10241] dial tcp4 0.0.0.0:44935->172.19.101.33:10241: i/o timeout
	f066566: "dial, Korea, Gwangju", // * [/ip4/59.0.151.2/tcp/24302] dial tcp4 59.0.151.2:24302: connect: connection refused
	f066568: "dial, Korea, Gwangju, aoc-0002", // * [/ip4/125.136.24.107/tcp/24202] dial tcp4 0.0.0.0:44935->125.136.24.107:24202: i/o timeout
	f067083: "dial, Russia, Moscow", // * [/ip4/195.42.165.37/tcp/24003] dial tcp4 195.42.165.37:24003: connect: connection refused
	f067195: "dial, China, Huizhou", // * [/ip4/218.13.75.238/tcp/54001] dial tcp4 0.0.0.0:44935->218.13.75.238:54001: i/o timeout
	f067314: "dial, China, Ningbo", // * [/ip4/101.71.134.194/tcp/24001] dial tcp4 101.71.134.194:24001: connect: connection refused
	f067545: "dial, Canada, Kitchener", // * [/ip4/24.52.248.93/tcp/61001] dial tcp4 0.0.0.0:44935->24.52.248.93:61001: i/o timeout
	f068096: "dial, China, Sichuan", // * [/ip4/222.213.23.200/tcp/38999] dial tcp4 222.213.23.200:38999: connect: connection refused
	f071190: "dial, Korea, Gyeonggi-do", // * [/ip4/59.6.127.200/tcp/23451] dial tcp4 59.6.127.200:23451: connect: connection refused
	f071914: "dial, China, Beijing", // * [/ip4/61.173.83.217/tcp/44959] dial tcp4 61.173.83.217:44959: connect: connection refused
	f073048: "dial, Korea, Gyeonggi-do", // * [/ip4/59.6.127.103/tcp/23451] dial tcp4 0.0.0.0:44935->59.6.127.103:23451: i/o timeout
	f073448: "dial, NR", // * [/ip6/::1/tcp/44203] dial tcp6 [::1]:44203: connect: connection refused  * [/ip4/127.0.0.1/tcp/45221] dial tcp4 127.0.0.1:45221: connect: connection refused  * [/ip4/192.168.231.156/tcp/45221] dial tcp4 0.0.0.0:44935->192.168.231.156:45221: i/o timeout  * [/ip4/119.147.213.56/tcp/45221] dial tcp4 0.0.0.0:44935->119.147.213.56:45221: i/o timeout
	f073535: "dial, Korea, Gyeonggi-do", // * [/ip4/59.6.127.150/tcp/23451] dial tcp4 0.0.0.0:44935->59.6.127.150:23451: i/o timeout
	f078425: "dial, Korea, Bucheon-si", // * [/ip4/211.226.188.140/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJsXnwrnv8CByAYsBq5GgsnTBwamYxvgvLD4NuUx6DJYQ, but remote key matches 12D3KooWQWqrcjPmgTesjjzAi1UjobvxHpMFr7EvEdaam62zq4zE
	f079285: "dial, NR", // * [/ip4/172.22.20.109/tcp/10241] dial tcp4 0.0.0.0:44935->172.22.20.109:10241: i/o timeout
	f080103: "dial, Korea, Seongnam-si", // * [/ip4/127.0.0.1/tcp/38333] dial tcp4 127.0.0.1:38333: connect: connection refused  * [/ip6/::1/tcp/37423] dial tcp6 [::1]:37423: connect: connection refused  * [/ip4/121.162.61.226/tcp/51488] dial tcp4 121.162.61.226:51488: connect: connection refused  * [/ip4/121.162.61.226/tcp/21250] dial tcp4 121.162.61.226:21250: connect: connection refused  * [/ip4/121.162.61.226/tcp/38333] dial tcp4 121.162.61.226:38333: connect: connection refused  * [/ip4/121.162.61.226/tcp/40315] dial tcp4 121.162.61.226:40315: connect: connection refused  * [/ip4/192.168.0.14/tcp/38333] dial tcp4 0.0.0.0:44935->192.168.0.14:38333: i/o timeout
	f082095: "dial, NR", // * [/ip4/182.140.253.81/tcp/12288] dial tcp4 0.0.0.0:44935->182.140.253.81:12288: i/o timeout
	f082250: "dial, China, Guilin", // * [/ip4/111.59.127.29/tcp/33110] dial tcp4 0.0.0.0:44935->111.59.127.29:33110: i/o timeout
	f082669: "dial, USA, Daytona Beach", // * [/ip4/172.3.161.97/tcp/24001] dial tcp4 172.3.161.97:24001: connect: connection refused
	f082730: "dial, NR", // * [/ip4/192.168.60.54/tcp/39784] dial tcp4 0.0.0.0:44935->192.168.60.54:39784: i/o timeout  * [/ip4/203.107.44.156/tcp/39784] dial tcp4 0.0.0.0:44935->203.107.44.156:39784: i/o timeout
	f082958: "dial, NR", // * [/ip4/0.0.0.0/tcp/42547] dial tcp4 0.0.0.0:42547: connect: connection refused
	f083235: "dial, Serbia, Belgrade", // * [/ip4/178.220.81.206/tcp/24001] dial tcp4 178.220.81.206:24001: i/o timeout
	f085904: "dial, China, Chongqing", // * [/ip4/183.66.216.198/tcp/24001] dial tcp4 0.0.0.0:44935->183.66.216.198:24001: i/o timeout
	f086610: "dial, Korea, Gyeonggi-do", // * [/ip4/59.6.127.5/tcp/23451] dial tcp4 59.6.127.5:23451: connect: connection refused
	f087931: "dial, China, Beijing", // * [/ip4/222.128.6.188/tcp/16000] dial tcp4 222.128.6.188:16000: connect: connection refused
	f088305: "dial, Korea, Gyeonggi-do", // * [/ip4/59.6.127.8/tcp/23451] dial tcp4 59.6.127.8:23451: connect: connection refused
	f088404: "dial, Korea, Gyeonggi-do", // * [/ip4/59.6.127.11/tcp/23451] dial tcp4 59.6.127.11:23451: connect: connection refused
	f089201: "dial, Korea, Gyeonggi-do", // * [/ip4/59.6.127.13/tcp/23451] dial tcp4 59.6.127.13:23451: connect: connection refused
	f090086: "dial, Korea", // * [/ip4/121.189.18.170/tcp/24001] dial tcp4 121.189.18.170:24001: connect: connection refused
	f090363: "dial, China, Beijing", // * [/ip4/106.12.253.161/tcp/18623] dial tcp4 106.12.253.161:18623: connect: connection refused
	f090747: "dial, Korea, Anyang-si", // * [/ip4/210.120.112.161/tcp/24001] dial tcp4 210.120.112.161:24001: i/o timeout
	f091139: "dial, Korea, Gyeonggi-do", // * [/ip4/59.6.127.230/tcp/23451] dial tcp4 59.6.127.230:23451: connect: connection refused
	f092630: "dial, Korea, Gyeonggi-do", // * [/ip4/59.6.127.1/tcp/23451] dial tcp4 0.0.0.0:44935->59.6.127.1:23451: i/o timeout
	f092776: "dial, Korea, Gimhae", // * [/ip4/118.46.119.62/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWDmej9uytJ7ry6YSgQGvos64nP99C5gBpA4HRzjbckh7r, but remote key matches 12D3KooWHk2aEyiTFJVvxeGbxG71KuZx4uEwMiAqS4AWYtciSAZ3
	f094085: "dial, Japan, Ota-ku", // * [/ip4/59.138.253.69/tcp/55555] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKHDBe8Xc1VgGi7t4MBTTaPzT3XgJeGxUq1cZTi75fcgB, but remote key matches 12D3KooWRLT5vVuXg9oPHPnECXmrifes2BjsubPfxvNrDu7uanzR
	f094128: "dial, China, Shenzhen", // * [/ip4/103.44.253.58/tcp/33456] dial tcp4 103.44.253.58:33456: connect: connection refused
	f094765: "dial, NR", // * [/ip4/218.68.85.213/tcp/12350] dial tcp4 218.68.85.213:12350: connect: connection refused
	f094899: "dial, Korea", // * [/ip4/211.48.169.253/tcp/23233] dial tcp4 211.48.169.253:23233: i/o timeout
	f095049: "dial, Korea, Bucheon-si", // * [/ip4/119.197.20.225/tcp/38833] dial tcp4 0.0.0.0:44935->119.197.20.225:38833: i/o timeout
	f095506: "dial, China, Ningxia", // * [/ip4/161.189.220.216/tcp/36002] dial tcp4 0.0.0.0:44935->161.189.220.216:36002: i/o timeout
	f096224: "dial, China, Chongqing", // * [/ip4/183.66.216.198/tcp/24001] dial tcp4 0.0.0.0:44935->183.66.216.198:24001: i/o timeout
	f0213894: "dial, China, Hangzhou", // * [/ip4/123.57.143.105/tcp/24001] dial tcp4 123.57.143.105:24001: connect: connection refused

  // XNR (Not routable)

  	f01000: "xnr, NR - bootstrap",
	f01001: "xnr, NR - bootstrap",
	f01002: "xnr, NR - bootstrap",
	f01013: "xnr, NR",
	f01101: "xnr, China, Shanghai",
	f01102: "xnr, China, Shandong",
	f01156: "xnr, China, Hangzhou",
	f01231: "xnr, Singapore",
	f01232: "xnr, China, Hangzhou",
	f02304: "xnr, USA, Mountain View",
	f02382: "xnr, China, Zhongshan-cfa",
	f02385: "xnr, USA, East Islip",
	f02388: "xnr, Netherlands, Amersfoort, Kroketje",
	f02398: "xnr, China, Hong Kong",
	f02404: "xnr, Korea, Seoul",
	f02424: "xnr, Korea, Wanju",
	f02436: "xnr, Netherlands",
	f02506: "xnr, USA, Clarksville",
	f02515: "xnr, China, Hangzhou",
	f02518: "xnr, China, Shaanxi",
	f02575: "xnr, USA, Davis",
	f02608: "xnr, USA, San Jose",
	f02666: "xnr, China, Chengdu",
	f02768: "xnr, China, Hong Kong",
	f02769: "xnr, NR",
	f02770: "xnr, China, Hong Kong",
	f02774: "xnr, Australia, Sydney",
	f02775: "xnr, China, Hong Kong",
	f02777: "xnr, NR",
	f02778: "xnr, NR",
	f02779: "xnr, NR",
	f02824: "xnr, China, Chengdu",
	f03264: "xnr, Korea, Bucheon-si",
	f03319: "xnr, NR",
	f03341: "xnr, NR",
	f03346: "xnr, China, Huzhou, wckj",
	f03361: "xnr, China, Guangzhou",
	f03428: "xnr, China, Beijing + Jiaxing + Germany, Frankfurt",
	f03487: "xnr, China, Yibin",
	f03544: "xnr, China, Guiyang",
	f03619: "xnr, China, Xiamen",
	f03622: "xnr, 黑犇科技",
	f03765: "xnr, Colombia, Medellin",
	f04444: "xnr, NR",
	f06262: "xnr, China, Guangzhou",
	f07717: "xnr, China, Shenyang",
	f07731: "xnr, NR",
	f07772: "xnr, China, Dongguan",
	f07796: "xnr, China, Hunan",
	f07827: "xnr, China, Wuhan, 天际合",
	f07843: "xnr, NR",
	f07866: "xnr, China, Foshan",
	f07924: "xnr, USA",
	f07931: "xnr, NR",
	f07959: "xnr, NR",
	f07964: "xnr, USA, Ashburn",
	f07987: "xnr, China, Beijing",
	f08022: "xnr, China, Yibin",
	f08053: "xnr, NR",
	f08061: "xnr, China, Foshan",
	f08095: "xnr, Canada, Surrey",
	f08097: "xnr, Korea, Pyeongtaek-si",
	f08136: "xnr, China, Xi'an",
	f08171: "xnr, NR",
	f08183: "xnr, USA, Irvine",
	f08207: "xnr, Australia, Brisbane",
	f08223: "xnr, NR",
	f08225: "xnr, Australia, Sydney",
	f08238: "xnr, NR",
	f08246: "xnr, USA",
	f08280: "xnr, NR",
	f08284: "xnr, China, Liaoning",
	f08290: "xnr, NR",
	f08311: "xnr, China, Shenzhen",
	f08315: "xnr, China, Chongqing",
	f08319: "xnr, NR",
	f08322: "xnr, China, Chongqing",
	f08327: "xnr, NR",
	f08349: "xnr, China, Guangzhou, hkicloud",
	f08361: "xnr, Malaysia, Kulai",
	f08385: "xnr, NR",
	f08388: "xnr, China, Taizhou",
	f08390: "xnr, China, Shenzhen",
	f08393: "xnr, NR",
	f08402: "xnr, China, Sichuan",
	f08406: "xnr, China, Shenzhen",
	f08424: "xnr, China, Chengdu",
	f08425: "xnr, NR",
	f08429: "xnr, yfeing",
	f08432: "xnr, China, Taizhou",
	f08440: "xnr, France, Fontenay-sous-Bois",
	f08460: "xnr, NR",
	f08482: "xnr, USA, Athol, @why",
	f08503: "xnr, NR",
	f08574: "xnr, USA",
	f08787: "xnr, China, Yibin",
	f08789: "xnr, China, Fuzhou",
	f08791: "xnr, NR",
	f08893: "xnr, NR",
	f08902: "xnr, NR",
	f08911: "xnr, Korea, Wanju",
	f08964: "xnr, NR",
	f08980: "xnr, USA, San Jose",
	f08988: "xnr, Korea, Hwaseong-si",
	f08994: "xnr, NR",
	f09006: "xnr, NR",
	f09007: "xnr, Korea, Hwaseong-si",
	f09035: "xnr, NR",
	f09053: "xnr, China, Shenzhen",
	f09055: "xnr, China, Jieyang",
	f09076: "xnr, NR",
	f09084: "xnr, NR",
	f09529: "xnr, NR",
	f09538: "xnr, NR",
	f09569: "xnr, China, Beijing",
	f09578: "xnr, NR",
	f09594: "xnr, NR",
	f09610: "xnr, China, Beijing",
	f09629: "xnr, NR",
	f09662: "xnr, Canada, Surrey",
	f09707: "xnr, China, Guangdong",
	f09712: "xnr, China, Chengdu",
	f09719: "xnr, Korea, Geumcheon-gu",
	f09731: "xnr, China, Guiyang",
	f09733: "xnr, China, Chongqing",
	f09736: "xnr, China, Guangdong",
	f09753: "xnr, Korea, Pyeongtaek-si",
	f09762: "xnr, China, Guangdong",
	f09805: "xnr, China, Fuzhou",
	f09833: "xnr, USA, San Jose",
	f09840: "xnr, China, Baoding",
	f09912: "xnr, USA, Concord",
	f09966: "xnr, NR",
	f09974: "xnr, Canada, Calgary",
	f09997: "xnr, USA",
	f010005: "xnr, China, Zhongshan",
	f010009: "xnr, USA, East Islip",
	f010028: "xnr, USA, Berkeley",
	f010033: "xnr, NR",
	f010040: "xnr, China, Shenzhen",
	f010041: "xnr, USA, Jackson",
	f010078: "xnr, China, Zhangjiakou + Hong Kong",
	f010173: "xnr, Korea, Pyeongtaek-si",
	f010200: "xnr, NR",
	f010202: "xnr, Singapore",
	f010213: "xnr, NR",
	f010222: "xnr, NR",
	f010227: "xnr, China, Xiamen",
	f010244: "xnr, USA, Newton",
	f010248: "xnr, China, Yibin",
	f010265: "xnr, China, Zhengzhou",
	f010275: "xnr, Korea, Cheongju-si + USA",
	f010277: "xnr, France, Fontenay-sous-Bois",
	f010281: "xnr, China, Shanghai",
	f010282: "xnr, USA, San Francisco",
	f010283: "xnr, Brazil, Sao Paulo",
	f010292: "xnr, NR",
	f010293: "xnr, China, Xiamen",
	f010297: "xnr, USA, Howell",
	f010303: "xnr, China, Guangdong",
	f010305: "xnr, NR",
	f010310: "xnr, Canada, Surrey",
	f010313: "xnr, NR",
	f010315: "xnr, Canada, Surrey",
	f010346: "xnr, China, Karamay",
	f010382: "xnr, NR",
	f010402: "xnr, China, Shenyang",
	f010425: "xnr, NR",
	f010433: "xnr, Korea, Seoul",
	f010438: "xnr, USA",
	f010453: "xnr, China, Shaanxi",
	f010468: "xnr, China, Guangzhou",
	f010490: "xnr, NR",
	f010517: "xnr, China, Chongqing",
	f010520: "xnr, China, Hangzhou",
	f010542: "xnr, China, Ordos",
	f010549: "xnr, China, Ordos",
	f010551: "xnr, China, Shenyang",
	f010559: "xnr, China, Shenyang",
	f010566: "xnr, NR",
	f010591: "xnr, China, Wuhan",
	f010601: "xnr, NR",
	f010602: "xnr, China, Guangdong",
	f010603: "xnr, China, Baoding",
	f010612: "xnr, USA, Mountain View",
	f014207: "xnr, USA",
	f014261: "xnr, China, Fuzhou",
	f014271: "xnr, China, Fuzhou",
	f014314: "xnr, Korea, Bucheon-si",
	f014331: "xnr, China, Chongqing",
	f014335: "xnr, NR",
	f014354: "xnr, USA, Concord",
	f014366: "xnr, USA, Mountain View",
	f014388: "xnr, China, Guangdong",
	f014389: "xnr, China, Chongqing",
	f014407: "xnr, China, Shanghai",
	f014419: "xnr, USA, San Diego",
	f014420: "xnr, Russia, Samara",
	f014425: "xnr, Singapore",
	f014477: "xnr, China, Hangzhou",
	f014478: "xnr, Finland",
	f014486: "xnr, NR",
	f014495: "xnr, China, Hong Kong",
	f014514: "xnr, China, Fuzhou",
	f014533: "xnr, China, Fuzhou",
	f014540: "xnr, USA, Newton",
	f014556: "xnr, Korea, Bucheon-si",
	f014629: "xnr, NR",
	f014660: "xnr, Korea, Busan",
	f014685: "xnr, Hong Kong",
	f014686: "xnr, Singapore",
	f014708: "xnr, China, Beijing",
	f014741: "xnr, China, Wuhan",
	f014745: "xnr, China, Shenyang",
	f014749: "xnr, China, Chongqing",
	f014764: "xnr, Korea, Wanju",
	f014793: "xnr, China, Hangzhou",
	f014799: "xnr, China, Chongqing",
	f015061: "xnr, Australia, Sydney",
	f015232: "xnr, Poland, Warsaw",
	f015647: "xnr, China, Shenzhen",
	f015709: "xnr, China, Hefei",
	f015724: "xnr, China, Guangdong",
	f015753: "xnr, China, Guyuan",
	f015797: "xnr, Germany, Rostock",
	f015798: "xnr, Germany",
	f015799: "xnr, Germany, Rostock",
	f015800: "xnr, Germany, Sankt Andreasberg",
	f015802: "xnr, Germany",
	f015805: "xnr, Germany",
	f015808: "xnr, Germany",
	f015809: "xnr, Germany",
	f015810: "xnr, Germany",
	f015811: "xnr, Germany, Lanshut",
	f015812: "xnr, Germany",
	f015827: "xnr, Russia",
	f015829: "xnr, China, Beijing",
	f015833: "xnr, China, Baoding",
	f015867: "xnr, Netherlands, Amsterdam",
	f015870: "xnr, China, Hangzhou",
	f015875: "xnr, China, Fuzhou",
	f015877: "xnr, China, Jiaxing + USA",
	f015885: "xnr, China, Jiaxing",
	f015891: "xnr, China, Shanghai",
	f015901: "xnr, Germany",
	f015902: "xnr, Germany",
	f015920: "xnr, China, Guangdong",
	f015932: "xnr, NR",
	f015935: "xnr, China, Sichuan",
	f015938: "xnr, Canada, Waterloo",
	f015940: "xnr, Netherlands, Amsterdam",
	f016140: "xnr, China, Beijing",
	f016162: "xnr, France, Borgo",
	f016172: "xnr, China, Guangdong",
	f016217: "xnr, China, Nanchong",
	f016228: "xnr, China, Chengdu",
	f016234: "xnr, China, Chengdu",
	f016262: "xnr, China, Fuzhou",
	f016271: "xnr, Korea, Seodaemun-gu",
	f016299: "xnr, China, Shanghai",
	f016303: "xnr, USA, Boardman",
	f016304: "xnr, USA, Boardman",
	f016305: "xnr, USA, Boardman",
	f016306: "xnr, USA, Boardman",
	f016408: "xnr, NR",
	f016426: "xnr, NR",
	f016436: "xnr, Korea, Seoul",
	f016456: "xnr, China, Zhejiang",
	f016462: "xnr, USA, Clarksville",
	f016482: "xnr, USA, Aliquippa",
	f016628: "xnr, NR",
	f016688: "xnr, Germany, Frankfurt",
	f016706: "xnr, China, Guangzhou",
	f017117: "xnr, Russia, Samara",
	f017171: "xnr, NR",
	f017181: "xnr, China, Nanchong",
	f017186: "xnr, China, Jiaxing",
	f017209: "xnr, NR",
	f017215: "xnr, Finland",
	f017216: "xnr, NR",
	f017236: "xnr, NR",
	f017251: "xnr, USA",
	f017294: "xnr, China, Shenzhen",
	f017323: "xnr, Poland, Warsaw",
	f017334: "xnr, China, Fuzhou",
	f017430: "xnr, Australia, Alexandria-cfa",
	f017618: "xnr, Korea, Wanju",
	f017628: "xnr, Brazil, Sao Paulo",
	f017655: "xnr, NR",
	f017722: "xnr, NR",
	f017747: "xnr, NR",
	f017793: "xnr, NR",
	f018081: "xnr, Germany",
	f018095: "xnr, Colombia, Medellin",
	f018128: "xnr, China, Dongguan",
	f018164: "xnr, USA, Howell",
	f018311: "xnr, China, Xi'an, <23h",
	f018369: "xnr, NR",
	f018393: "xnr, Colombia, Medellin",
	f018397: "xnr, USA, Howell",
	f018425: "xnr, USA, Howell",
	f018437: "xnr, NR",
	f018441: "xnr, USA",
	f018445: "xnr, NR",
	f018446: "xnr, China, Dongguan",
	f018456: "xnr, Brazil, Sao Paulo",
	f018474: "xnr, China, Xiamen",
	f018484: "xnr, China, Shanghai",
	f018490: "xnr, Korea, Hwaseong-si",
	f018513: "xnr, NR",
	f018517: "xnr, USA, Columbus",
	f018518: "xnr, China, Xi'an",
	f018520: "xnr, China",
	f018530: "xnr, China, Shaanxi",
	f018531: "xnr, China, Shaanxi",
	f018537: "xnr, China, Shaanxi",
	f018538: "xnr, China, Huzhou",
	f018542: "xnr, China, Chongqing",
	f018754: "xnr, China, Dali",
	f018761: "xnr, Russia, St. Petersburg",
	f018790: "xnr, China, Chengdu",
	f018802: "xnr, China, Dongguan",
	f018812: "xnr, South Africa, Cape Town",
	f018836: "xnr, NR",
	f018837: "xnr, China, Shaanxi",
	f018844: "xnr, NR",
	f018864: "xnr, Korea, Busan",
	f018865: "xnr, China, Chengdu",
	f018869: "xnr, NR",
	f018879: "xnr, Korea, Geumcheon-gu",
	f018899: "xnr, China, Shanghai",
	f019017: "xnr, China, Wenzhou-cfa",
	f019024: "xnr, China, Sichuan",
	f019031: "xnr, NR",
	f019042: "xnr, China, Shanghai",
	f019048: "xnr, Brazil, Sao Paulo",
	f019062: "xnr, Germany",
	f019069: "xnr, NR",
	f019109: "xnr, USA, Howell",
	f019114: "xnr, USA, Howell",
	f019118: "xnr, China, Jiaxing",
	f019123: "xnr, China, Dongguan",
	f019160: "xnr, USA, Fremont",
	f019173: "xnr, China, Nanchong",
	f019184: "xnr, China, Yibin",
	f019218: "xnr, China, Dali",
	f019239: "xnr, China, Jiaxing",
	f019264: "xnr, NR",
	f019284: "xnr, China, Foshan",
	f019376: "xnr, NR",
	f019378: "xnr, China, Changzhou",
	f019401: "xnr, Brazil, Sao Paulo",
	f019423: "xnr, South Africa, Johannesburg",
	f019434: "xnr, NR",
	f019437: "xnr, Korea, Guro-gu",
	f019525: "xnr, USA, Berkeley",
	f019528: "xnr, Peru",
	f019547: "xnr, Peru",
	f019645: "xnr, Russia, St. Petersburg",
	f019723: "xnr, China, Zhongshan",
	f019734: "xnr, NR",
	f019757: "xnr, NR",
	f019804: "xnr, China, Chengdu",
	f019809: "xnr, NR",
	f019812: "xnr, NR",
	f019825: "xnr, China, Hong Kong",
	f020241: "xnr, NR",
	f020260: "xnr, NR",
	f020276: "xnr, China, Xiamen",
	f020281: "xnr, Korea, Uijeongbu-si",
	f020352: "xnr, NR",
	f020361: "xnr, Colombia, Medellin",
	f020366: "xnr, China, Chengdu",
	f020369: "xnr, NR",
	f020379: "xnr, NR",
	f020386: "xnr, Russia",
	f020390: "xnr, NR",
	f020398: "xnr, China, Zhangjiakou",
	f020408: "xnr, China, Hong Kong",
	f020432: "xnr, Korea, Wanju",
	f020433: "xnr, NR",
	f020439: "xnr, China, Chengdu",
	f020450: "xnr, NR",
	f020451: "xnr, NR",
	f020453: "xnr, China, Chengdu",
	f020457: "xnr, NR",
	f020525: "xnr, China, Dongguan",
	f020559: "xnr, China, Liaoning",
	f020563: "xnr, China, Dongguan",
	f020578: "xnr, Korea, Wanju",
	f020641: "xnr, NR",
	f020678: "xnr, China, Wenzhou",
	f020682: "xnr, NR",
	f020683: "xnr, China, Changsha",
	f020691: "xnr, NR",
	f020739: "xnr, China, Dongguan",
	f020763: "xnr, China, Luzhou",
	f020775: "xnr, Japan, Osaka",
	f020786: "xnr, China, Shenzhen",
	f020788: "xnr, China, Chengdu",
	f020789: "xnr, NR",
	f020791: "xnr, China, Hangzhou",
	f020819: "xnr, China, Chengdu",
	f020822: "xnr, China, Shanghai",
	f020896: "xnr, NR",
	f020899: "xnr, China, Chengdu",
	f020914: "xnr, NR",
	f020934: "xnr, NR",
	f020939: "xnr, NR",
	f020957: "xnr, NR",
	f020961: "xnr, China, Shanghai",
	f020975: "xnr, China, Shandong",
	f020993: "xnr, China, Hong Kong",
	f021069: "xnr, USA",
	f021083: "xnr, NR",
	f021092: "xnr, NR",
	f021095: "xnr, NR",
	f021265: "xnr, China, Wuhan",
	f021274: "xnr, China, Shanghai",
	f021286: "xnr, China, Shaanxi",
	f021307: "xnr, China, Chengdu",
	f021311: "xnr, NR",
	f021337: "xnr, China, Beijing",
	f021339: "xnr, China, Jiaxing",
	f021346: "xnr, China, Shanghai",
	f021357: "xnr, China, Shanghai",
	f021418: "xnr, NR",
	f021494: "xnr, NR",
	f021500: "xnr, NR",
	f021505: "xnr, NR",
	f021509: "xnr, China, Fuzhou",
	f021527: "xnr, NR",
	f021535: "xnr, China, Chengdu",
	f021555: "xnr, NR",
	f021574: "xnr, NR",
	f021580: "xnr, NR",
	f021583: "xnr, China, Jiaxing",
	f021684: "xnr, NR",
	f021695: "xnr, USA",
	f021699: "xnr, NR",
	f021704: "xnr, NR",
	f021710: "xnr, China, Shijiazhuang",
	f021725: "xnr, NR",
	f021976: "xnr, NR",
	f022015: "xnr, China, Hangzhou",
	f022016: "xnr, NR",
	f022030: "xnr, NR",
	f022033: "xnr, NR",
	f022038: "xnr, NR",
	f022070: "xnr, China, Jieyang",
	f022084: "xnr, China, Shaanxi",
	f022089: "xnr, China, Beijing",
	f022091: "xnr, NR",
	f022093: "xnr, NR",
	f022108: "xnr, China, Luzhou",
	f022119: "xnr, USA, Lovettsville",
	f022122: "xnr, NR",
	f022132: "xnr, China, Dongguan",
	f022171: "xnr, China, Shanghai",
	f022202: "xnr, USA, Howell",
	f022250: "xnr, NR",
	f022262: "xnr, China, Hong Kong",
	f022276: "xnr, Korea, Seoul",
	f022284: "xnr, China, Shaanxi",
	f022287: "xnr, China, Dongguan",
	f022303: "xnr, NR",
	f022313: "xnr, NR",
	f022321: "xnr, China, Hong Kong",
	f022326: "xnr, China, Zhongshan",
	f022333: "xnr, China, Dongguan",
	f022336: "xnr, NR",
	f022337: "xnr, NR",
	f022338: "xnr, NR",
	f022343: "xnr, China, Dongguan",
	f022361: "xnr, NR",
	f022372: "xnr, China, Chengdu",
	f022373: "xnr, Singapore",
	f022374: "xnr, NR",
	f022376: "xnr, China, Dongguan",
	f022494: "xnr, China, Dongguan",
	f022501: "xnr, Japan, Osaka",
	f022503: "xnr, NR",
	f022505: "xnr, China, Shanghai",
	f022517: "xnr, China, Taiwan, Taipei",
	f022562: "xnr, NR",
	f022564: "xnr, NR",
	f022683: "xnr, NR",
	f022755: "xnr, China, Shenzhen",
	f022776: "xnr, Korea, Guri-si",
	f022786: "xnr, NR",
	f022790: "xnr, China, Luzhou",
	f022791: "xnr, NR",
	f022797: "xnr, NR",
	f022834: "xnr, NR",
	f022836: "xnr, China, Chongqing",
	f022838: "xnr, China, Hong Kong",
	f022841: "xnr, China, Zhongshan",
	f022857: "xnr, NR",
	f022880: "xnr, NR",
	f022906: "xnr, NR",
	f022911: "xnr, China, Hong Kong",
	f022912: "xnr, NR",
	f022922: "xnr, China, Shenzhen, CAAP-MEG",
	f022926: "xnr, NR",
	f022930: "xnr, NR",
	f022954: "xnr, NR",
	f022967: "xnr, Korea, Seoul",
	f022969: "xnr, China, Chengdu",
	f022970: "xnr, NR",
	f022996: "xnr, NR",
	f023021: "xnr, Korea, Yeongdeungpo-dong",
	f023108: "xnr, China, Dongguan",
	f023159: "xnr, NR",
	f023207: "xnr, NR",
	f023210: "xnr, China, Dongguan",
	f023254: "xnr, NR",
	f023463: "xnr, NR",
	f023482: "xnr, NR",
	f023499: "xnr, NR",
	f023501: "xnr, China, Mianyang",
	f023505: "xnr, NR",
	f023526: "xnr, China, Chongqing",
	f023535: "xnr, China, Hong Kong",
	f023560: "xnr, NR",
	f023568: "xnr, NR",
	f023571: "xnr, NR",
	f023626: "xnr, NR",
	f023627: "xnr, China, Zhongwei",
	f023643: "xnr, NR",
	f023647: "xnr, Korea, Gangseo-gu",
	f023649: "xnr, Korea, Seoul, LS&NIHON",
	f023651: "xnr, NR",
	f023661: "xnr, China, Zhejiang",
	f023678: "xnr, China, Jiaxing",
	f023798: "xnr, China, Shanghai",
	f023801: "xnr, China, Dongguan",
	f023826: "xnr, USA, Germantown",
	f023881: "xnr, China, Fuzhou",
	f023939: "xnr, NR",
	f023943: "xnr, USA, Ashburn",
	f023965: "xnr, NR",
	f023986: "xnr, Korea, Seoul",
	f024031: "xnr, NR",
	f024074: "xnr, NR",
	f024129: "xnr, China, Zhejiang",
	f024153: "xnr, NR",
	f024165: "xnr, NR",
	f024168: "xnr, USA, Ashburn",
	f024483: "xnr, NR",
	f024496: "xnr, China, Dongguan",
	f024526: "xnr, Korea",
	f024556: "xnr, NR",
	f024557: "xnr, NR",
	f024558: "xnr, NR",
	f024559: "xnr, NR",
	f024563: "xnr, NR",
	f024611: "xnr, China, Dongguan",
	f024802: "xnr, NR",
	f024894: "xnr, NR",
	f024895: "xnr, undefined",
	f024902: "xnr, Korea, Incheon",
	f024903: "xnr, undefined",
	f024969: "xnr, NR",
	f024972: "xnr, undefined",
	f025005: "xnr, NR",
	f025028: "xnr, NR",
	f025032: "xnr, China, Beijing",
	f025044: "xnr, undefined",
	f029368: "xnr, Korea, Gangseo-gu",
	f029421: "xnr, undefined",
	f029477: "xnr, undefined",
	f029529: "xnr, China, Dongguan",
	f029546: "xnr, NR",
	f029566: "xnr, NR",
	f029595: "xnr, undefined",
	f029619: "xnr, undefined",
	f029632: "xnr, undefined",
	f029649: "xnr, China, Beijing",
	f030230: "xnr, China, Sichuan",
	f030231: "xnr, China, Hunan",
	f030249: "xnr, NR",
	f030272: "xnr, undefined",
	f030386: "xnr, NR",
	f030509: "xnr, undefined",
	f030510: "xnr, undefined",
	f030511: "xnr, undefined",
	f030514: "xnr, NR",
	f030518: "xnr, China, Wuhan",
	f030521: "xnr, China, Hong Kong",
	f030531: "xnr, NR",
	f030608: "xnr, China, Mianyang",
	f030641: "xnr, China, Shaanxi",
	f030649: "xnr, NR",
	f032833: "xnr, NR",
	f032850: "xnr, NR",
	f032865: "xnr, USA, Redmond",
	f032887: "xnr, undefined",
	f032904: "xnr, undefined",
	f032922: "xnr, undefined",
	f033014: "xnr, NR",
	f033028: "xnr, China, Mianyang",
	f033111: "xnr, China, Shanghai",
	f033124: "xnr, China, Shanghai",
	f033125: "xnr, NR",
	f033130: "xnr, NR",
	f033209: "xnr, NR",
	f033224: "xnr, NR",
	f033384: "xnr, NR",
	f033399: "xnr, NR",
	f033456: "xnr, NR",
	f033463: "xnr, NR",
	f033475: "xnr, NR",
	f033517: "xnr, China, Changsha",
	f033545: "xnr, China, Shenzhen + USA",
	f034084: "xnr, China, Chongqing",
	f034229: "xnr, USA, Minneapolis",
	f034311: "xnr, Korea, Gangnam-gu",
	f034362: "xnr, China, Sichuan",
	f034566: "xnr, NR",
	f034581: "xnr, NR",
	f034652: "xnr, Korea, Yeongdeungpo-dong",
	f034666: "xnr, NR",
	f034707: "xnr, NR",
	f034710: "xnr, NR",
	f035160: "xnr, NR",
	f035161: "xnr, NR",
	f035364: "xnr, NR",
	f039992: "xnr, NR",
	f040137: "xnr, NR",
	f040432: "xnr, NR",
	f040468: "xnr, NR",
	f040665: "xnr, NR",
	f040971: "xnr, NR",
	f042344: "xnr, Korea",
	f042584: "xnr, Australia, Basin View",
	f042839: "xnr, Korea, Pocheon-si",
	f043376: "xnr, Korea, Incheon",
	f044143: "xnr, China, Taiwan, Taipei",
	f044315: "xnr, NR",
	f044788: "xnr, NR",
	f045743: "xnr, NR",
	f046078: "xnr, China, Shaanxi",
	f046315: "xnr, NR",
	f046317: "xnr, China, Nanyang",
	f047327: "xnr, China, Hong Kong",
	f047536: "xnr, NR",
	f047858: "xnr, China, Wuhan",
	f048545: "xnr, China, Chengdu",
	f048975: "xnr, NR",
	f048986: "xnr, NR",
	f049990: "xnr, Korea, Incheon",
	f052503: "xnr, NR",
	f052562: "xnr, NR",
	f052740: "xnr, China, Shaanxi",
	f053446: "xnr, NR",
	f054120: "xnr, NR",
	f054267: "xnr, NR",
	f054389: "xnr, China, Chongqing",
	f054412: "xnr, NR",
	f054414: "xnr, NR",
	f054417: "xnr, NR",
	f054418: "xnr, NR",
	f054422: "xnr, NR",
	f054464: "xnr, NR",
	f054526: "xnr, NR",
	f055040: "xnr, China, Fujian",
	f055446: "xnr, NR",
	f056227: "xnr, NR",
	f056393: "xnr, NR",
	f057115: "xnr, China, Nanyang",
	f057560: "xnr, NR",
	f057618: "xnr, NR",
	f057683: "xnr, NR",
	f058003: "xnr, China, Shenzhen",
	f058321: "xnr, China, Dongguan",
	f058349: "xnr, NR",
	f059280: "xnr, China, Shenzhen",
	f059652: "xnr, China, Beijing",
	f059705: "xnr, Korea, Naju",
	f059813: "xnr, NR",
	f060693: "xnr, NR",
	f060754: "xnr, NR",
	f060780: "xnr, Korea, Goyang-si",
	f060805: "xnr, NR",
	f061059: "xnr, China, Beijing",
	f061170: "xnr, NR",
	f061174: "xnr, NR",
	f061196: "xnr, Korea, Yeongdeungpo-dong",
	f061407: "xnr, China, Shenzhen",
	f061430: "xnr, Korea, Naju",
	f061503: "xnr, NR",
	f062245: "xnr, NR",
	f062445: "xnr, China, Shenzhen",
	f062449: "xnr, NR",
	f062473: "xnr, NR",
	f062475: "xnr, NR",
	f062552: "xnr, NR",
	f062587: "xnr, NR",
	f062619: "xnr, NR",
	f062735: "xnr, China, Hong Kong",
	f063628: "xnr, NR",
	f063780: "xnr, China, Shenyang",
	f063921: "xnr, China, Ili",
	f063996: "xnr, China, Sichuan",
	f064688: "xnr, NR",
	f064855: "xnr, NR",
	f064908: "xnr, NR",
	f065113: "xnr, NR",
	f065132: "xnr, Denmark, Vipperod",
	f065174: "xnr, NR",
	f065225: "xnr, China, Dongguan",
	f065250: "xnr, NR",
	f065266: "xnr, China, Hefei",
	f065280: "xnr, Korea, Songpa-gu, Data Store Ltd",
	f065391: "xnr, NR",
	f065426: "xnr, Korea, Gimpo-si",
	f065477: "xnr, NR",
	f065578: "xnr, NR",
	f065610: "xnr, NR",
	f065686: "xnr, NR",
	f065689: "xnr, NR",
	f065718: "xnr, China, Taiwan, Hsinchu",
	f065853: "xnr, Korea, Seongnam-si",
	f065941: "xnr, NR",
	f066075: "xnr, NR",
	f066210: "xnr, NR",
	f066289: "xnr, NR",
	f066302: "xnr, NR",
	f066465: "xnr, NR",
	f066476: "xnr, NR",
	f066734: "xnr, NR",
	f066845: "xnr, China, Dongguan",
	f067185: "xnr, Korea, Gwangju",
	f067283: "xnr, Korea, Seongnam-si",
	f067375: "xnr, NR",
	f067598: "xnr, NR",
	f068253: "xnr, NR",
	f068556: "xnr, NR",
	f068809: "xnr, NR",
	f068898: "xnr, China, Fuzhou",
	f069448: "xnr, NR",
	f069450: "xnr, NR",
	f069661: "xnr, China, Wuxi",
	f070045: "xnr, NR",
	f070288: "xnr, China, Zhangzhou",
	f070337: "xnr, China, Zhangzhou",
	f070475: "xnr, China, Guyuan",
	f070730: "xnr, NR",
	f070747: "xnr, China, Shenzhen",
	f070756: "xnr, China, Beijing",
	f070802: "xnr, NR",
	f070824: "xnr, Taiwan, Hsinchu",
	f070932: "xnr, NR",
	f071114: "xnr, China, Shenyang",
	f071692: "xnr, China, Xi'an",
	f073525: "xnr, NR",
	f073783: "xnr, NR",
	f073844: "xnr, NR",
	f073878: "xnr, NR",
	f073888: "xnr, NR",
	f073904: "xnr, NR",
	f073931: "xnr, NR",
	f077761: "xnr, NR",
	f078516: "xnr, NR",
	f079092: "xnr, NR",
	f079425: "xnr, NR",
	f079719: "xnr, NR",
	f080131: "xnr, NR",
	f080868: "xnr, NR",
	f080945: "xnr, China, Shenzhen",
	f081969: "xnr, NR",
	f082054: "xnr, China, Hefei",
	f082175: "xnr, China, Shenyang",
	f082543: "xnr, Korea, Osan",
	f082590: "xnr, China, Taizhou",
	f082635: "xnr, NR",
	f082698: "xnr, USA, Xi'an",
	f083419: "xnr, NR",
	f083474: "xnr, NR",
	f083542: "xnr, NR",
	f083983: "xnr, NR",
	f084135: "xnr, NR",
	f084155: "xnr, NR",
	f084419: "xnr, NR",
	f084907: "xnr, NR",
	f085226: "xnr, Korea, Busan",
	f085415: "xnr, NR",
	f085435: "xnr, NR",
	f085437: "xnr, NR",
	f085682: "xnr, NR",
	f085947: "xnr, NR",
	f086028: "xnr, NR",
	f086204: "xnr, NR",
	f086222: "xnr, NR",
	f086240: "xnr, NR",
	f086366: "xnr, NR",
	f086381: "xnr, NR",
	f086439: "xnr, NR",
	f086442: "xnr, NR",
	f086450: "xnr, NR",
	f086572: "xnr, NR",
	f086988: "xnr, NR",
	f087096: "xnr, NR",
	f087868: "xnr, NR",
	f088002: "xnr, NR",
	f088290: "xnr, NR",
	f089819: "xnr, NR",
	f089920: "xnr, NR",
	f090104: "xnr, China, Dongguan",
	f090481: "xnr, NR",
	f090484: "xnr, NR",
	f090492: "xnr, NR",
	f090851: "xnr, China, Ningxia",
	f091095: "xnr, Korea, Gwangju + Buk-gu",
	f091143: "xnr, NR",
	f091243: "xnr, NR",
	f091395: "xnr, NR",
	f092157: "xnr, NR",
	f092228: "xnr, NR",
	f092724: "xnr, China, Beijing",
	f092887: "xnr, NR",
	f092971: "xnr, China, Chongqing",
	f093212: "xnr, Netherlands",
	f093554: "xnr, China, Zhangzhou",
	f093701: "xnr, NR",
	f093907: "xnr, NR",
	f094003: "xnr, NR",
	f094625: "xnr, NR",
	f094675: "xnr, NR",
	f094785: "xnr, China, Shanghai",
	f094825: "xnr, Korea, Gwangju",
	f094847: "xnr, NR",
	f094869: "xnr, China, Shanghai",
	f094894: "xnr, Korea, Gwangju",
	f095398: "xnr, Korea, Sejong",
	f095528: "xnr, China, Hangzhou",
	f095833: "xnr, Korea, Yongin-si",
}

export default annotations
