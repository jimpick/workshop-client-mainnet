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

  // Active-sealing (active, with in-flight sealing)

  f09693: 'active-sealing, USA, Portland + Singapore, 6block-CapsuleMining', // 1409690
  f010241: 'active-sealing, China, Beijing + USA, Portland, 6Block-P', // 1409692
  f015877: 'active-sealing, China, Jiaxing + USA', // 1409700
  f019240: 'active-sealing, China, Beijing', // 1409702
  f020523: 'active-sealing, China, Suzhou, changjiang', // 1409688
  f021716: 'active-sealing, New Zealand, Wellington', // 1409685

  // Sealing

  f015233: 'sealing, China, Nanjing', // 1409694
  f021075: 'sealing, China, Chengdu', // 1409689
  f022261: 'sealing, China, Luzhou', // 1409707
  f024944: 'sealing, Korea, Yeongdeungpo-dong', // 1409701
  f055102: 'sealing, Vietman, Ho Chi Minh City + China', // 1409687
  f055132: 'sealing, Vietman, Ho Chi Minh City + China', // 1409686
  f056226: 'sealing, NR', // 1409697
  f065103: 'sealing, USA, Portland + China, Shenzhen', // 1409691
  f080480: 'sealing, Ukraine, Lviv', // 1409708
  f082356: 'sealing, China, Jiaxing', // 1409698
  f083065: 'sealing, China, Taizhou', // 1409693
  f083638: 'sealing, China, Chongqing', // 1409696
  f086423: 'sealing, China, Chengdu', // 1409695

  // Stuck

  f01247: 'stuck, Canada, Montreal', // CheckForAcceptance: about 2 hours
  f01287: 'stuck, China, Jiaxing, MaiTian', // CheckForAcceptance: about 2 hours
  f01799: 'stuck, China, Jinan, TokenHome', // CheckForAcceptance: about 2 hours
  f02490: 'stuck, China, Fujian', // CheckForAcceptance: about 2 hours
  f02540: 'stuck, USA, Rochester, @there', // CheckForAcceptance: about 2 hours
  f02665: 'stuck, Netherlands, Amsterdam, fm-ops', // CheckForAcceptance: about 2 hours
  f02666: 'stuck, China, Chengdu', // FundsEnsured: about 2 hours
  f02668: 'stuck, China, Chengdu', // FundsEnsured: about 2 hours
  f02824: 'stuck, China, Chengdu', // FundsEnsured: about 2 hours
  f03328: 'stuck, China, Xinxiang, Golden Miner', // CheckForAcceptance: about 2 hours
  f03339: 'stuck, China, Luzhou, benxun', // ProposalAccepted: about 1 hour
  f03345: 'stuck, China, Fuzhou, chh', // CheckForAcceptance: about 2 hours
  f04443: 'stuck, China, Shanghai, 罗良科技', // CheckForAcceptance: about 2 hours
  f08019: 'stuck, China, Yantai, 三合', // CheckForAcceptance: about 2 hours
  f08240: 'stuck, Russia, Novosibirsk, Rabinovitch', // CheckForAcceptance: about 2 hours
  f08285: 'stuck, Latvia, Riga, stander', // CheckForAcceptance: about 2 hours
  f08482: 'stuck, USA, Athol, @why', // CheckForAcceptance: about 2 hours
  f010399: 'stuck, China, Guangzhou', // CheckForAcceptance: about 2 hours
  f010400: 'stuck, China, Shenyang', // CheckForAcceptance: about 2 hours
  f010446: 'stuck, Netherlands, Angelo', // CheckForAcceptance: about 2 hours
  f010479: 'stuck, France, Fontenay-sous-Bois, s0nik42', // CheckForAcceptance: about 2 hours
  f010493: 'stuck, China, Shanghai', // CheckForAcceptance: about 2 hours
  f010501: 'stuck, China, Hangzhou, Interstellar Roewe', // CheckForAcceptance: about 2 hours
  f010513: 'stuck, China, Chongqing', // CheckForAcceptance: about 2 hours
  f010523: 'stuck, China, Beijing, Interstellar Roewe', // CheckForAcceptance: about 2 hours
  f010528: 'stuck, China, Chongqing, Interstellar Roewe', // CheckForAcceptance: about 2 hours
  f014324: 'stuck, Canada, Vancouver', // CheckForAcceptance: about 2 hours
  f014394: 'stuck, China, Suzhou, IPFSCloud', // FundsEnsured: about 2 hours
  f014768: 'stuck, Singapore, Funktafide, @Funk', // CheckForAcceptance: about 2 hours
  f015747: 'stuck, Japan, Setagaya-ku', // CheckForAcceptance: about 2 hours
  f016594: 'stuck, Germany', // CheckForAcceptance: about 2 hours
  f019029: 'stuck, Serbia, Boljevac', // CheckForAcceptance: about 2 hours
  f019243: 'stuck, USA, Jackson', // CheckForAcceptance: about 2 hours
  f019437: 'stuck, Korea, Guro-gu', // CheckForAcceptance: about 2 hours
  f019806: 'stuck, China, Beijing', // Transferring: about 2 hours
  f019824: 'stuck, USA', // ProposalAccepted: about 2 hours
  f020436: 'stuck, China, Beijing', // CheckForAcceptance: about 2 hours
  f022522: 'stuck, China, Dongguan', // ProposalAccepted: about 1 hour
  f023179: 'stuck, China, Fuzhou', // CheckForAcceptance: about 2 hours
  f023205: 'stuck, NR', // FundsEnsured: about 2 hours
  f023581: 'stuck, China, Hong Kong, mine-much', // CheckForAcceptance: about 2 hours
  f023971: 'stuck, USA, @Brian Y', // CheckForAcceptance: about 2 hours
  f024550: 'stuck, China, Wenzhou', // CheckForAcceptance: about 2 hours
  f025025: 'stuck, China, Qingdao', // Transferring: about 2 hours
  f030125: 'stuck, China, Nantong', // CheckForAcceptance: about 2 hours
  f030327: 'stuck, China, Beijing', // FundsEnsured: about 2 hours
  f033549: 'stuck, China, Quzhou', // CheckForAcceptance: about 2 hours
  f034777: 'stuck, China, Chengdu', // CheckForAcceptance: about 2 hours
  f039515: 'stuck, China, Chongqing', // CheckForAcceptance: about 2 hours
  f040218: 'stuck, China, Wuxi', // CheckForAcceptance: about 2 hours
  f042391: 'stuck, China, Fuzhou', // CheckForAcceptance: about 2 hours
  f042567: 'stuck, China, Jinhua', // CheckForAcceptance: about 2 hours
  f046073: 'stuck, China, Shanghai', // FundsEnsured: about 2 hours
  f046074: 'stuck, China, Shanghai', // FundsEnsured: about 2 hours
  f050022: 'stuck, China, Changsha', // CheckForAcceptance: about 2 hours
  f053088: 'stuck, China, Shanghai', // CheckForAcceptance: about 2 hours
  f054163: 'stuck, China, Dongguan', // CheckForAcceptance: about 2 hours
  f057127: 'stuck, China, Suzhou', // CheckForAcceptance: about 2 hours
  f057466: 'stuck, China, Guangzhou', // ProposalAccepted: 14 minutes
  f057842: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 2 hours
  f059280: 'stuck, China, Shenzhen', // FundsEnsured: about 2 hours
  f061158: 'stuck, China, Guangdong', // CheckForAcceptance: about 2 hours
  f063173: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 2 hours
  f063996: 'stuck, China, Sichuan', // CheckForAcceptance: about 2 hours
  f065280: 'stuck, Korea, Songpa-gu, Data Store Ltd', // ProposalAccepted: 11 minutes
  f065732: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 2 hours
  f066568: 'stuck, Korea, Gwangju, aoc-0002', // CheckForAcceptance: about 2 hours
  f066898: 'stuck, Japan, Bunkyo-ku, @visvirial', // CheckForAcceptance: about 2 hours
  f067170: 'stuck, China, Jiangmen', // CheckForAcceptance: about 2 hours
  f067314: 'stuck, China, Ningbo', // CheckForAcceptance: about 2 hours
  f067545: 'stuck, Canada, Kitchener', // CheckForAcceptance: about 2 hours
  f068096: 'stuck, China, Sichuan', // ProposalAccepted: about 1 hour
  f071190: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 2 hours
  f071914: 'stuck, China, Beijing', // CheckForAcceptance: about 2 hours
  f073048: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 2 hours
  f073535: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 2 hours
  f076954: 'stuck, China, Shenzhen', // CheckForAcceptance: about 2 hours
  f078425: 'stuck, Korea, Bucheon-si', // CheckForAcceptance: about 2 hours
  f079817: "stuck, Russia, Ul'yanovka", // CheckForAcceptance: about 2 hours
  f080444: 'stuck, China, Chengdu', // CheckForAcceptance: about 2 hours
  f080468: 'stuck, NR', // Transferring: about 2 hours
  f083235: 'stuck, Serbia, Belgrade', // CheckForAcceptance: about 2 hours
  f083550: 'stuck, Korea, Hwaseong-si', // ProposalAccepted: about 1 hour
  f085710: 'stuck, China, Chengdu', // CheckForAcceptance: about 2 hours
  f085899: 'stuck, China, Wuxi', // CheckForAcceptance: about 2 hours
  f087931: 'stuck, China, Beijing', // CheckForAcceptance: about 2 hours
  f088305: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 2 hours
  f089767: 'stuck, China, Changsha', // CheckForAcceptance: about 2 hours
  f089840: 'stuck, Korea, Yeongdeungpo-gu', // CheckForAcceptance: about 2 hours
  f091139: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 2 hours

  // Busy

  f015734: 'busy, China, Qingdao', // cannot seal a sector before 291499
  f019399: 'busy, Korea, Busan', // cannot seal a sector before 291499
  f022820: 'busy, China, Guangdong', // cannot seal a sector before 291516

  // Min Size

  f01238: 'min-size, Vietnam, Hanoi, FILECOIN-VIETNAM', // 131072 < 1073741824
  f01240: 'min-size, Netherlands, HidNand', // 131072 < 8388608
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
  f010491: 'min-size, China, Shenzhen', // 131072 < 262144
  f010617: 'min-size, Canada, Surrey, kernelogic2, @feiya200', // 131072 < 67108864
  f014395: 'min-size, China, Dongguan', // 131072 < 134217728
  f014409: 'min-size, USA, Waxhaw, Meatball Part III', // 131072 < 134217728
  f014569: 'min-size, China, Yangzhou', // 131072 < 1048576
  f015927: 'min-size, USA, East Islip, CDImine', // 131072 < 1048576
  f017242: 'min-size, China, Guangdong', // 131072 < 268435456
  f018501: 'min-size, China, Beijing', // 131072 < 134217728
  f019551: 'min-size, UK, Birmingham, @Neofix AF', // 131072 < 2147483648
  f020385: 'min-size, Korea, Incheon', // 131072 < 536870912
  f020904: 'min-size, Korea, Uijeongbu-si, FILTop', // 131072 < 268435456
  f022142: 'min-size, USA, Queens, Nelson SR2', // 131072 < 5368709120
  f022163: 'min-size, dns:fil.akasha.network', // 131072 < 12582912
  f022352: 'min-size, Norway, Borgen, TechHedge, @Reiers', // 131072 < 536870912
  f022853: 'min-size, China, Fuzhou', // 131072 < 134217728
  f024184: 'min-size, Korea, Gangnam-gu, we4u-GREEN', // 131072 < 1073741824
  f024511: 'min-size, China, Shenzhen', // 131072 < 134217728
  f025017: 'min-size, China, Hefei, 一三科技-913', // 131072 < 134217728
  f025019: 'min-size, China, Taiwan, Hsinchu', // 131072 < 33554432
  f030335: 'min-size, China, Fujian', // 131072 < 134217728
  f033356: 'min-size, Korea, Gangnum-gu, we4u-YELLOW', // 131072 < 1073741824
  f034701: 'min-size, China, Shenzhen', // 131072 < 134217728
  f047419: 'min-size, USA, Waukesha', // 131072 < 268435456
  f047858: 'min-size, China, Wuhan', // 131072 < 134217728
  f048172: 'min-size, China, Suzhou', // 131072 < 134217728
  f048192: 'min-size, China, Suzhou', // 131072 < 134217728
  f049882: 'min-size, Netherlands, De Rijp, Chipz', // 131072 < 8388608
  f054677: 'min-size, Finland, Helsinki', // 131072 < 33554432
  f058000: 'min-size, China, Suzhou', // 131072 < 1048576
  f062353: 'min-size, Germany, Frankfurt', // 131072 < 1073741824
  f066596: 'min-size, USA, San Diego', // 131072 < 1048576
  f079425: 'min-size, NR', // 131072 < 134217728

  // Min Ask

  f01241: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f01276: 'min-ask, Canada, Brampton, NBFS Canada', // 20000000 < 36621093
  f01277: 'min-ask, Sweden, Stockholm, tvsthlm', // 20000000 < 122070312500000
  f01280: 'min-ask, China, Wuxi, 了凡超算', // 20000000 < 12207031250000000
  f01291: 'min-ask, Sweden, Stockholm, tvsthlm', // 20000000 < 12207031250000
  f02301: 'min-ask, USA', // 20000000 < 610351562500000
  f02381: 'min-ask, China, Dongguan, 西野七濑迷叔', // 20000000 < 6103515625000
  f02387: 'min-ask, Canada, Brampton, NBFS Canada', // 20000000 < 36621093
  f02401: 'min-ask, Canada, Chambly, NBFS Canada', // 20000000 < 36621093
  f02405: 'min-ask, China, Shenzhen', // 20000000 < 12207031250000000
  f02415: 'min-ask, China, Hong Kong', // 20000000 < 122070312500000
  f02423: 'min-ask, Ukraine, Kyiv, igowreck', // 20000000 < 610351562
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
  f07998: 'min-ask, China, Hangzhou', // 20000000 < 122070312
  f08025: 'min-ask, China, Hong Kong', // 20000000 < 122070312500000
  f08103: 'min-ask, China, Foshan, 花生酱肠粉', // 20000000 < 61035156
  f08257: 'min-ask, China, Ningbo + USA, Boardman', // 20000000 < 12207031250
  f08383: 'min-ask, USA, Portland, 6block', // 20000000 < 122070312500000
  f09696: 'min-ask, USA, Portland + Singapore', // 20000000 < 122070312500000
  f09848: 'min-ask, USA, Irvine, BigBearLake', // 20000000 < 122070312
  f010010: 'min-ask, China, Changzhou + Hong Kong', // 20000000 < 12207031250000000000000000
  f010253: 'min-ask, China, Beijing + USA, Portland', // 20000000 < 122070312500000
  f010254: 'min-ask, Japan, Minamata', // 20000000 < 122070312500000
  f010405: 'min-ask, China, Foshan', // 20000000 < 122070312500000
  f014365: 'min-ask, Australia, Marrickville + Japan, Heiwajima', // 20000000 < 120849609375000
  f015897: 'min-ask, China, Guangdong', // 20000000 < 12207031250000000
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
  f019362: 'min-ask, China, Hangzhou, 青青子衿', // 20000000 < 122070312
  f020378: 'min-ask, Bulgaria, Asenovgrad', // 20000000 < 12207031250000
  f020541: 'min-ask, China, Shanghai', // 20000000 < 61035156250
  f020747: 'min-ask, China, Xiamen', // 20000000 < 122070312
  f021265: 'min-ask, China, Wuhan', // 20000000 < 9765625000000000
  f022308: 'min-ask, China, Shenzhen', // 20000000 < 1220703125
  f023152: 'min-ask, China, Quanzhou', // 20000000 < 12207031250000000000000000
  f023467: 'min-ask, Norway, Oslo, PhiMining.io', // 20000000 < 61035156
  f023495: 'min-ask, China, Beijing + USA, Portland', // 20000000 < 122070312500000
  f023565: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f023660: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f023662: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f023825: 'min-ask, USA, Portland', // 20000000 < 122070312500000
  f023843: 'min-ask, China, Zhangjiakou', // 20000000 < 122070312500000
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
  f024015: 'min-ask, USA, Portland, FILmiPool-JP01', // 20000000 < 122070312500000
  f024016: 'min-ask, USA, Portland', // 20000000 < 122070312500000
  f024081: 'min-ask, undefined', // 20000000 < 12206909179687500000
  f024084: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024085: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024136: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024146: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024147: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024148: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f024156: 'min-ask, USA', // 20000000 < 12207031250000
  f024972: 'min-ask, undefined', // 20000000 < 122070312500000
  f025007: 'min-ask, Korea, Gyeonggi-do', // 20000000 < 122070312500000
  f029344: 'min-ask, Korea, Seongnam-si', // 20000000 < 1220703125000
  f029401: 'min-ask, USA, Portland + New Castle', // 20000000 < 122070312500000
  f029404: 'min-ask, USA, Portland + New Castle', // 20000000 < 122070312500000
  f030203: 'min-ask, undefined', // 20000000 < 12207031250000000
  f030384: 'min-ask, undefined', // 20000000 < 12207031250000
  f032913: 'min-ask, China, Shenzhen', // 20000000 < 122070312500
  f032934: 'min-ask, Korea, Incheon', // 20000000 < 6103515625
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
  f062518: 'min-ask, Korea, Gwangju', // 20000000 < 1220703125000
  f062770: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f062811: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f062982: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f064218: 'min-ask, USA, Kirkland', // 20000000 < 122070312
  f065200: 'min-ask, China, Yibin', // 20000000 < 61035156
  f066104: 'min-ask, China, Xingjiang + USA, Portland', // 20000000 < 122070312500000
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
  f073697: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f074738: 'min-ask, Korea, Seongbuk-gu', // 20000000 < 1220703125000
  f078522: 'min-ask, NR', // 20000000 < 1220703125000
  f078770: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f078772: 'min-ask, NR', // 20000000 < 122070312500000
  f079197: 'min-ask, NR', // 20000000 < 122070312500000
  f079247: 'min-ask, USA, New Castle', // 20000000 < 122070312500000
  f079301: 'min-ask, USA, New Castle', // 20000000 < 122070312500000
  f082452: 'min-ask, China, Dongguan', // 20000000 < 1220581054687500000
  f083625: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f084879: 'min-ask, Korea, Seongnam-si', // 20000000 < 1220703125000
  f086572: 'min-ask, NR', // 20000000 < 12207031250

  // Error

  f01800: 'error, China, Shenzhen + Chengdu', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacebgnjo5s7dxkbdf3k7m4gj3lmdf5aoeyaf5ysblmrjdla7sh2cmv2 n 245753, TS: bafy2bzacebjronw23hzgitc25eozj7kxmvuhmm4vqbrrl5k7rerwbo6fwbh7m n245753)
  f02822: 'error, China, Chengdu', // stream reset
  f08157: 'error, China, Beijing + Germany, Frankfurt, 超星际', // stream reset
  f08532: 'error, USA', // stream reset
  f09689: 'error, USA, Portland', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f010498: 'error, China, Shenzhen', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 13.072791903251712589 FIL, balance: 13.036137974529209757 FIL): validation failure
  f010505: 'error, China, Wuhan, Interstellar Roewe', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.199999999901824274 FIL, balance: 0.171216807420825343 FIL): validation failure
  f020398: 'error, China, Zhangjiakou', // stream reset
  f020928: 'error, China, Deyang + Singapore', // deal failed: (State=26) error calling node: ensuring funds: RPC error (-32601): method 'Filecoin.MarketEnsureAvailable' not found
  f023534: 'error, China, Chongqing', // unmarshaling t.Response: stream reset
  f023853: 'error, China, Fuzhou', // stream reset
  f023876: 'error, China, Fuzhou', // stream reset
  f023982: 'error, China, Chongqing', // stream reset
  f023985: 'error, China, Chongqing', // stream reset
  f035436: 'error, China, Jiangsu', // stream reset
  f046043: 'error, China, Shanghai', // stream reset
  f047843: 'error, China, Xiamen', // stream reset
  f048135: 'error, China, Chongqing, password interstellar', // AddPiece failed: adding piece to sector: writing piece: opening unsealed sector file: openning partial file '/lotus_data/unsealed/s-t048135-13088': open /lotus_data/unsealed/s-t048135-13088: read-only file system
  f056573: 'error, China, Sichuan', // stream reset
  f057070: 'error, NR', // stream reset
  f060693: 'error, NR', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f062375: 'error, Korea, Gyeonggi-do', // EOF
  f064442: 'error, Japan', // stream reset
  f066566: 'error, Korea, Gwangju', // EOF
  f067083: 'error, Russia, Moscow', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f067721: 'error, China, Beijing', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.099999999991808169 FIL, balance: 0.07455761653319617 FIL): not enough funds to execute transaction
  f068890: 'error, China, Fuzhou', // stream reset
  f070288: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f081066: 'error, USA', // stream reset
  f081644: 'error, China, Wenzhou', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.099999999996957568 FIL, balance: 0.080798026734075443 FIL): not enough funds to execute transaction
  f081779: 'error, China, Hunan', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.99999999996107183 FIL, balance: 0.534150580057226072 FIL): not enough funds to execute transaction
  f082250: 'error, China, Guilin', // stream reset
  f087442: 'error, Korea, Gyeonggi-do', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.099999999994514466 FIL, balance: 0.025990058709265431 FIL): not enough funds to execute transaction
  f089578: 'error, China, Hangzhou', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.099999999992028656 FIL, balance: 0.074572706426834218 FIL): not enough funds to execute transaction

  // Dial backoff

  f03140: 'backoff, China, QingDao',
  f09671: 'backoff, China, Chongqing',
  f09675: 'backoff, China, Weifang',
  f014328: 'backoff, Canada, Waterloo',
  f065141: 'backoff, China, Fuzhou',
  f065832: 'backoff, Korea, Suncheon',

  // Rejected

  f01152: 'rejected, China, Beijing',
  f01154: 'rejected, Sweden, Alvsjo', // no online
  f01248: 'rejected, Germany, Frankfurt + China, Guangdong', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f01289: 'rejected, China, Hangzhou + USA', // no online
  f02299: 'rejected, China, Dongguan, Yolo', // no online
  f02399: 'rejected, China, Zhejiang', // no online
  f02421: 'rejected, China, Deyang + Singapore, 腾盛科技', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02503: 'rejected, China, Wuhan', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02528: 'rejected, China, Hong Kong + Inner Mongolia', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02529: 'rejected, China, Chongqing',
  f02609: 'rejected, USA',
  f02613: 'rejected, China, Chongqing',
  f02625: 'rejected, China, Shanghai, IPFS星际工厂', // no online
  f02627: 'rejected, China, Guilin',
  f02723: 'rejected, China, Hong Kong',
  f03002: 'rejected, China, Chongqing',
  f03134: 'rejected, China, Cangzhou, 乔木信息', // no online
  f03143: 'rejected, China, Shijiazhuang + Hong Kong', // no online
  f03222: 'rejected, China, Yuncheong, 星云矿池', // deal start epoch is too far in the future: 291489 > 288606
  f03223: 'rejected, USA',
  f03249: 'rejected, NR',
  f03269: 'rejected, Australia', // getting client market balance failed
  f03302: 'rejected, China, Chengdu', // no online
  f03325: 'rejected, Germany, Frankfurt',
  f03326: 'rejected, USA, Seattle', // getting client market balance failed
  f03344: 'rejected, China, Guangzhou', // no online
  f03347: 'rejected, China, Shenzhen', // no online
  f03362: 'rejected, Germany, Berlin',
  f03519: 'rejected, USA', // getting client market balance failed
  f07945: 'rejected, China, Dongguan', // no online
  f08197: 'rejected, China, Foshan',
  f08264: 'rejected, China, Xianning', // no online
  f08371: 'rejected, China, Chengdu', // no online
  f09620: 'rejected, China, Weifang',
  f09642: 'rejected, Sweden, Alvsjo', // no online
  f09710: 'rejected, China, Jieyang',
  f09737: 'rejected, USA, Sudbury',
  f09964: 'rejected, China, Beijing + Jiaxing',
  f010035: 'rejected, Netherlands',
  f010088: 'rejected, DNS:purumine.com', // no online
  f010495: 'rejected, China, Tainjin',
  f010507: 'rejected, China, Hangzhou, ciger', // sh: 1: VerifiedDeal:true: not found
  f014233: 'rejected, China, Shanghai', // no online
  f014251: 'rejected, Singapore',
  f014302: 'rejected, China, Ningbo',
  f014327: 'rejected, China, Ningbo',
  f014472: 'rejected, China, Ningbo',
  f014683: 'rejected, China, Shenzhen',
  f014706: 'rejected, China, Ordos',
  f014803: 'rejected, China, Beijing', // no online
  f014805: 'rejected, China, Ningbo',
  f015782: 'rejected, Australia', // getting client market balance failed
  f016398: 'rejected, Singapore',
  f016511: 'rejected, China, Beijing', // deal start epoch is too far in the future: 291491 > 287166
  f016563: 'rejected, China, Deyang', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f017229: 'rejected, USA, Portland',
  f019099: 'rejected, China, Hong Kong', // no online
  f019229: 'rejected, USA, Queens', // getting client market balance failed
  f019279: 'rejected, Canada, Calgary',
  f019354: 'rejected, Germany, Frankfurt', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f019422: 'rejected, South Africa, Johannesburg', // no online
  f020315: 'rejected, China, Guangzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f020605: 'rejected, China, Yibin',
  f020618: 'rejected, Singapore', // getting client market balance failed
  f020940: 'rejected, @fu',
  f021255: 'rejected, China, Suzhou + Netherlands',
  f021444: 'rejected, China, Guangzhou', // no online
  f021479: 'rejected, China, Qingdao',
  f021532: 'rejected, China, Shanghai', // no online
  f021714: 'rejected, China, Hong Kong',
  f021870: 'rejected, USA, Portland',
  f021961: 'rejected, NR', // getting client market balance failed
  f022072: 'rejected, China, Jieyang',
  f022125: 'rejected, China, Shenzhen', // no online
  f022289: 'rejected, China, Mianyang',
  f022309: 'rejected, Korea, Chuncheon', // sh: 1: /absolute/path/to/below/dealfilter.pl: not found
  f022566: 'rejected, China, Nanchong',
  f022748: 'rejected, China, Xinyang', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f022832: 'rejected, China',
  f022922: 'rejected, China, Shenzhen, CAAP-MEG', // no online
  f023009: 'rejected, USA, Berkeley, M32 Grenade Launcher', // no online
  f023013: 'rejected, China, Hong Kong', // no online
  f023462: 'rejected, China, Chengdu',
  f023530: 'rejected, China, Shanghai',
  f023983: 'rejected, China, Chongqing',
  f023984: 'rejected, China, Chongqing',
  f024066: 'rejected, NR',
  f024101: 'rejected, China, Guiyang', // deal start epoch is too far in the future: 291492 > 288606
  f024468: 'rejected, China, Shenzhen', // no online
  f029490: 'rejected, NR',
  f032888: 'rejected, China, Weifang',
  f033189: 'rejected, China, Zhejiang', // no online
  f033501: 'rejected, China, Shenzhen',
  f034258: 'rejected, China, Mianyang',
  f034350: 'rejected, China, Zhengshou', // sh: 1: /usr/local/bin/dealfilter.pl: not found
  f034567: 'rejected, China, Shenzhen',
  f039873: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f039940: 'rejected, China, Mianyang',
  f040332: 'rejected, China, Shenzhen', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f042896: 'rejected, NR', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f042901: 'rejected, Germany', // deal start epoch is too far in the future: 291532 > 193137
  f046248: 'rejected, China, Dongguan',
  f047857: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f047868: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f052701: 'rejected, NR',
  f053140: 'rejected, NR',
  f053141: 'rejected, NR',
  f054499: 'rejected, NR',
  f055040: 'rejected, China, Fujian', // deal start epoch is too far in the future: 291517 > 286926
  f060114: 'rejected, China, Shenzhen',
  f060634: 'rejected, China, Shenzhen + USA', // no online
  f061051: 'rejected, NR', // getting client market balance failed
  f064222: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f066270: 'rejected, China, Dongguan', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f068528: 'rejected, China, Shanghai', // no online
  f068560: 'rejected, China, Changsha', // syntax error at /filecoin/lotusminer/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /filecoin/lotusminer/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /filecoin/lotusminer/dealfilter.pl line 16.
  f071624: 'rejected, USA, Petoskey', // no online
  f073196: 'rejected, NR',
  f073543: 'rejected, Korea, Gyeonggi-do', // deal start epoch is too far in the future: 291495 > 285726
  f078954: 'rejected, Netherlands', // no online
  f079618: 'rejected, China, Beijing', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f079847: 'rejected, China, Hong Kong', // deal start epoch is too far in the future: 291496 > 288606
  f081222: 'rejected, China, Changzhou', // sh: 1: jq: not found
  f081323: 'rejected, UK, Basildon', // no online
  f084147: 'rejected, China, Sichuan',
  f086631: 'rejected, Korea, Gwangju', // no online
  f087256: 'rejected, NR', // getting client market balance failed
  f087530: 'rejected, China, Shenzhen', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome

  // Dial errors

  f01152: 'rejected, China, Beijing',
  f01154: 'rejected, Sweden, Alvsjo', // no online
  f01248: 'rejected, Germany, Frankfurt + China, Guangdong', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f01289: 'rejected, China, Hangzhou + USA', // no online
  f02299: 'rejected, China, Dongguan, Yolo', // no online
  f02399: 'rejected, China, Zhejiang', // no online
  f02421: 'rejected, China, Deyang + Singapore, 腾盛科技', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02503: 'rejected, China, Wuhan', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02528: 'rejected, China, Hong Kong + Inner Mongolia', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f02529: 'rejected, China, Chongqing',
  f02609: 'rejected, USA',
  f02613: 'rejected, China, Chongqing',
  f02625: 'rejected, China, Shanghai, IPFS星际工厂', // no online
  f02627: 'rejected, China, Guilin',
  f02723: 'rejected, China, Hong Kong',
  f03002: 'rejected, China, Chongqing',
  f03134: 'rejected, China, Cangzhou, 乔木信息', // no online
  f03143: 'rejected, China, Shijiazhuang + Hong Kong', // no online
  f03222: 'rejected, China, Yuncheong, 星云矿池', // deal start epoch is too far in the future: 291489 > 288606
  f03223: 'rejected, USA',
  f03249: 'rejected, NR',
  f03269: 'rejected, Australia', // getting client market balance failed
  f03302: 'rejected, China, Chengdu', // no online
  f03325: 'rejected, Germany, Frankfurt',
  f03326: 'rejected, USA, Seattle', // getting client market balance failed
  f03344: 'rejected, China, Guangzhou', // no online
  f03347: 'rejected, China, Shenzhen', // no online
  f03362: 'rejected, Germany, Berlin',
  f03519: 'rejected, USA', // getting client market balance failed
  f07945: 'rejected, China, Dongguan', // no online
  f08197: 'rejected, China, Foshan',
  f08264: 'rejected, China, Xianning', // no online
  f08371: 'rejected, China, Chengdu', // no online
  f09620: 'rejected, China, Weifang',
  f09642: 'rejected, Sweden, Alvsjo', // no online
  f09710: 'rejected, China, Jieyang',
  f09737: 'rejected, USA, Sudbury',
  f09964: 'rejected, China, Beijing + Jiaxing',
  f010035: 'rejected, Netherlands',
  f010088: 'rejected, DNS:purumine.com', // no online
  f010495: 'rejected, China, Tainjin',
  f010507: 'rejected, China, Hangzhou, ciger', // sh: 1: VerifiedDeal:true: not found
  f014233: 'rejected, China, Shanghai', // no online
  f014251: 'rejected, Singapore',
  f014302: 'rejected, China, Ningbo',
  f014327: 'rejected, China, Ningbo',
  f014472: 'rejected, China, Ningbo',
  f014683: 'rejected, China, Shenzhen',
  f014706: 'rejected, China, Ordos',
  f014803: 'rejected, China, Beijing', // no online
  f014805: 'rejected, China, Ningbo',
  f015782: 'rejected, Australia', // getting client market balance failed
  f016398: 'rejected, Singapore',
  f016511: 'rejected, China, Beijing', // deal start epoch is too far in the future: 291491 > 287166
  f016563: 'rejected, China, Deyang', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f017229: 'rejected, USA, Portland',
  f019099: 'rejected, China, Hong Kong', // no online
  f019229: 'rejected, USA, Queens', // getting client market balance failed
  f019279: 'rejected, Canada, Calgary',
  f019354: 'rejected, Germany, Frankfurt', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f019422: 'rejected, South Africa, Johannesburg', // no online
  f020315: 'rejected, China, Guangzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f020605: 'rejected, China, Yibin',
  f020618: 'rejected, Singapore', // getting client market balance failed
  f020940: 'rejected, @fu',
  f021255: 'rejected, China, Suzhou + Netherlands',
  f021444: 'rejected, China, Guangzhou', // no online
  f021479: 'rejected, China, Qingdao',
  f021532: 'rejected, China, Shanghai', // no online
  f021714: 'rejected, China, Hong Kong',
  f021870: 'rejected, USA, Portland',
  f021961: 'rejected, NR', // getting client market balance failed
  f022072: 'rejected, China, Jieyang',
  f022125: 'rejected, China, Shenzhen', // no online
  f022289: 'rejected, China, Mianyang',
  f022309: 'rejected, Korea, Chuncheon', // sh: 1: /absolute/path/to/below/dealfilter.pl: not found
  f022566: 'rejected, China, Nanchong',
  f022748: 'rejected, China, Xinyang', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f022832: 'rejected, China',
  f022922: 'rejected, China, Shenzhen, CAAP-MEG', // no online
  f023009: 'rejected, USA, Berkeley, M32 Grenade Launcher', // no online
  f023013: 'rejected, China, Hong Kong', // no online
  f023462: 'rejected, China, Chengdu',
  f023530: 'rejected, China, Shanghai',
  f023983: 'rejected, China, Chongqing',
  f023984: 'rejected, China, Chongqing',
  f024066: 'rejected, NR',
  f024101: 'rejected, China, Guiyang', // deal start epoch is too far in the future: 291492 > 288606
  f024468: 'rejected, China, Shenzhen', // no online
  f029490: 'rejected, NR',
  f032888: 'rejected, China, Weifang',
  f033189: 'rejected, China, Zhejiang', // no online
  f033501: 'rejected, China, Shenzhen',
  f034258: 'rejected, China, Mianyang',
  f034350: 'rejected, China, Zhengshou', // sh: 1: /usr/local/bin/dealfilter.pl: not found
  f034567: 'rejected, China, Shenzhen',
  f039873: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f039940: 'rejected, China, Mianyang',
  f040332: 'rejected, China, Shenzhen', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f042896: 'rejected, NR', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f042901: 'rejected, Germany', // deal start epoch is too far in the future: 291532 > 193137
  f046248: 'rejected, China, Dongguan',
  f047857: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f047868: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f052701: 'rejected, NR',
  f053140: 'rejected, NR',
  f053141: 'rejected, NR',
  f054499: 'rejected, NR',
  f055040: 'rejected, China, Fujian', // deal start epoch is too far in the future: 291517 > 286926
  f060114: 'rejected, China, Shenzhen',
  f060634: 'rejected, China, Shenzhen + USA', // no online
  f061051: 'rejected, NR', // getting client market balance failed
  f064222: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f066270: 'rejected, China, Dongguan', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f068528: 'rejected, China, Shanghai', // no online
  f068560: 'rejected, China, Changsha', // syntax error at /filecoin/lotusminer/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /filecoin/lotusminer/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /filecoin/lotusminer/dealfilter.pl line 16.
  f071624: 'rejected, USA, Petoskey', // no online
  f073196: 'rejected, NR',
  f073543: 'rejected, Korea, Gyeonggi-do', // deal start epoch is too far in the future: 291495 > 285726
  f078954: 'rejected, Netherlands', // no online
  f079618: 'rejected, China, Beijing', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f079847: 'rejected, China, Hong Kong', // deal start epoch is too far in the future: 291496 > 288606
  f081222: 'rejected, China, Changzhou', // sh: 1: jq: not found
  f081323: 'rejected, UK, Basildon', // no online
  f084147: 'rejected, China, Sichuan',
  f086631: 'rejected, Korea, Gwangju', // no online
  f087256: 'rejected, NR', // getting client market balance failed
  f087530: 'rejected, China, Shenzhen', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome

  // XNR (Not routable)

  f02778: 'xnr, NR',
  f02856: 'xnr, China, Chengdu',
  f05317: 'xnr, USA, Portland',
  f08229: 'xnr, China, Nanchang',
  f022969: 'xnr, China, Chengdu',
  f023198: 'xnr, NR',
  f023649: 'xnr, Korea, Seoul, LS&NIHON',
  f034047: 'xnr, China, Hangzhou',
  f070475: 'xnr, China, Guyuan',
  f079815: 'xnr, NR',
  f081974: 'xnr, NR',
  f082590: 'xnr, China, Taizhou',
  f082698: "xnr, USA, Xi'an",
  f083474: 'xnr, NR',
  f083983: 'xnr, NR',
  f084135: 'xnr, NR',
  f084419: 'xnr, NR',
  f084907: 'xnr, NR',
  f085226: 'xnr, Korea, Busan',
  f085437: 'xnr, NR',
  f086028: 'xnr, NR',
  f086151: 'xnr, China, Dongguan',
  f086222: 'xnr, NR',
  f086366: 'xnr, NR',
  f086439: 'xnr, NR',
  f086988: 'xnr, NR',
  f087096: 'xnr, NR',
  f087868: 'xnr, NR',
  f088002: 'xnr, NR',
  f089819: 'xnr, NR',
  f089920: 'xnr, NR',
  f090481: 'xnr, NR',
  f090864: 'xnr, NR',
  f091143: 'xnr, NR',
  f091355: 'xnr, NR',
  f092157: 'xnr, NR'
}

export default annotations
