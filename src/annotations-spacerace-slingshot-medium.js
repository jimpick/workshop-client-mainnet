// Slingshot test results
//
// Additional testing with files > 128MiB in size
//
// These are generated from a second round of testing after attempting
// to store a small file, see annotations-spacerace.js for those results

const annotations = {
  // Retest

  f025007: 'retest, Korea, Gyeonggi-do', // client node out of gas

  // Candidates

  f02633: 'candidate, China, Hong Kong', // carry-over
  f07990: 'candidate, China, Hong Kong', // carry-over
  f09569: 'candidate, China, Beijing', // carry-over
  f014569: 'candidate, China, Yangzhou', // carry-over
  f024136: 'candidate, China, Fuzhou', // carry-over
  f062518: 'candidate, Korea, Gwangju', // carry-over

  // Active

  f01238: 'active, Vietnam, Hanoi, FILECOIN-VIETNAM', // 1388095 about 2 hours
  f08240: 'active, Russia, Novosibirsk, Rabinovitch', // 1388115 about 4 hours
  f020385: 'active, Korea, Incheon', // 1388428 about 6 hours
  f022352: 'active, Norway, Borgen, TechHedge, @Reiers', // 1388017 about 3 hours

  // Sealing (active-sealing = previously active, retesting with new deal)

  f01278: 'active-sealing, USA, Grand Rapids, MiMiner', // 1388126
  f010479: 'active-sealing, France, Fontenay-sous-Bois, s0nik42', // 1388180

  // Sealing

  f01799: 'sealing, China, Jinan, TokenHome', // 1388210
  f02423: 'sealing, Ukraine, Kyiv, igowreck', // 1391420
  f02490: 'sealing, China, Fujian', // 1390547
  f02576: 'sealing, Denmark, Gjerlev, BenjaminH', // 1388474
  f02665: 'sealing, Netherlands, Amsterdam, fm-ops', // 1391165
  f02824: 'sealing, China, Chengdu', // 1390296
  f02856: 'sealing, China, Chengdu', // 1390295
  f03328: 'sealing, China, Xinxiang, Golden Miner', // 1390388
  f03345: 'sealing, China, Fuzhou, chh', // 1390974
  f04443: 'sealing, China, Shanghai, 罗良科技', // 1390886
  f08103: 'sealing, China, Foshan, 花生酱肠粉', // 1390978
  f08285: 'sealing, Latvia, Riga, stander', // 1390329
  f08482: 'sealing, USA, Athol, @why', // 1390413
  f09693: 'sealing, USA, Portland + Singapore, 6block-CapsuleMining', // 1388014
  f09848: 'sealing, USA, Irvine, BigBearLake', // 1390279
  f010241: 'sealing, China, Beijing + USA, Portland, 6Block-P', // 1388164
  f010247: 'sealing, China, Yantai', // 1390932
  f010446: 'sealing, Netherlands, Angelo', // 1390249
  f010513: 'sealing, China, Chongqing', // 1390298
  f010523: 'sealing, China, Beijing, Interstellar Roewe', // 1390297
  f010528: 'sealing, China, Chongqing, Interstellar Roewe', // 1390299
  f014768: 'sealing, Singapore, Funktafide, @Funk', // 1389967
  f015877: 'sealing, China, Jiaxing + USA', // 1390272
  f015897: 'sealing, China, Guangdong', // 1389536
  f019100: 'sealing, Romania, Cluj-Napoca, noisyfan', // 1388425
  f019104: 'sealing, Canada, Chambly, NBFS DEV', // 1390251
  f019824: 'sealing, USA', // 1388742
  f020378: 'sealing, Bulgaria, Asenovgrad', // 1390256
  f020436: 'sealing, China, Beijing', // 1390303
  f022130: 'sealing, Korea, Seodaemun-gu', // 1389113
  f022142: 'sealing, USA, Queens, Nelson SR2', // 1391312
  f022261: 'sealing, China, Luzhou', // 1389968
  f022308: 'sealing, China, Shenzhen', // 1390248
  f022853: 'sealing, China, Fuzhou', // 1390370
  f023581: 'sealing, China, Hong Kong', // 1390498
  f024156: 'sealing, USA', // 1389073
  f025017: 'sealing, China, Hefei, 一三科技-913', // 1390371
  f025025: 'sealing, China, Qingdao', // 1390418
  f030125: 'sealing, China, Nantong', // 1391158
  f030335: 'sealing, China, Fujian', // 1390250
  f033549: 'sealing, China, Quzhou', // 1390254
  f048135: 'sealing, China, Chongqing, password interstellar', // 1390369
  f048192: 'sealing, China, Suzhou', // 1390343
  f049882: 'sealing, Netherlands, De Rijp, Chipz', // 1388473
  f050022: 'sealing, China, Changsha', // 1390979
  f054677: 'sealing, Finland, Helsinki', // 1390485
  f055132: 'sealing, Vietman, Ho Chi Minh City + China', // 1388228
  f056226: 'sealing, NR', // 1391324
  f058000: 'sealing, China, Suzhou', // 1390466
  f058374: 'sealing, USA', // 1389247
  f060072: 'sealing, China, Chongqing', // 1390821
  f062318: 'sealing, Korea, Naju', // 1388234
  f062981: 'sealing, China, Sichuan', // 1390377
  f065103: 'sealing, USA, Portland + China, Shenzhen', // 1390276
  f065280: 'sealing, Korea, Songpa-gu, Data Store Ltd', // 1389712
  f066596: 'sealing, USA, San Diego', // 1388356
  f067545: 'sealing, Canada, Kitchener', // 1388629
  f068096: 'sealing, China, Sichuan', // 1390300
  f071914: 'sealing, China, Beijing', // 1390983
  f076954: 'sealing, China, Shenzhen', // 1390476
  f078425: 'sealing, Korea, Bucheon-si', // 1391210
  f079007: 'sealing, China, Jinan', // 1390252
  f079425: 'sealing, NR', // 1390306
  f079817: "sealing, Russia, Ul'yanovka", // 1388211
  f080103: 'sealing, Korea, Seongnam-si', // 1390292
  f080480: 'sealing, Ukraine, Lviv', // 1389139
  f082698: "sealing, USA, Xi'an", // 1390439
  f083550: 'sealing, Korea, Hwaseong-si', // 1389308
  f086631: 'sealing, Korea, Gwangju', // 1390420
  f087931: 'sealing, China, Beijing', // 1390307
  f088305: 'sealing, Korea, Gyeonggi-do', // 1390385
  f088404: 'sealing, Korea, Gyeonggi-do', // 1390374
  f089201: 'sealing, Korea, Gyeonggi-do', // 1391021
  f089767: 'sealing, China, Changsha', // 1391171
  f089942: 'sealing, Korea, Gyeonggi-do', // 1390529

  // Stuck

  f08532: 'stuck, USA', // FundsEnsured: about 5 hours
  f020940: 'stuck, @fu', // Transferring: about 5 hours
  f023205: 'stuck, NR', // FundsEnsured: about 5 hours
  f024101: 'stuck, China, Guiyang', // CheckForAcceptance: about 5 hours
  f046074: 'stuck, China, Shanghai', // FundsEnsured: about 5 hours
  f056573: 'stuck, China, Sichuan', // CheckForAcceptance: about 5 hours
  f057842: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 5 hours
  f061158: 'stuck, China, Guangdong', // FundsEnsured: about 5 hours
  f063173: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 5 hours
  f066566: 'stuck, Korea, Gwangju', // CheckForAcceptance: about 5 hours
  f070475: 'stuck, China, Guyuan', // FundsEnsured: about 5 hours
  f073535: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 5 hours

  // Min-size

  f01234: 'min-size, Belgium, De Klinge, Eliovp', // 134217728 < 268435456
  f02419: 'min-size, China, Shanghai, yuantai', // 134217728 < 268435456
  f020904: 'min-size, Korea, Uijeongbu-si, FILTop', // 134217728 < 268435456
  f024184: 'min-size, Korea, Gangnam-gu, we4u-GREEN', // 134217728 < 1073741824
  f033356: 'min-size, Korea, Gangnum-gu, we4u-YELLOW', // 134217728 < 1073741824
  f062353: 'min-size, Germany, Frankfurt', // 134217728 < 536870912

  // Min-ask

  f01241: 'min-ask, USA, Portland, 6block', // carry-over
  f01277: 'min-ask, Sweden, Stockholm, tvsthlm', // carry-over
  f01291: 'min-ask, Sweden, Stockholm, tvsthlm', // carry-over
  f02301: 'min-ask, USA', // carry-over
  f02381: 'min-ask, China, Dongguan, 西野七濑迷叔', // carry-over
  f02405: 'min-ask, China, Shenzhen', // carry-over
  f02415: 'min-ask, China, Hong Kong', // carry-over
  f02500: 'min-ask, Korea, Seongnam-si', // carry-over
  f02501: 'min-ask, USA, Portland, 6block', // carry-over
  f02514: 'min-ask, USA, Portland, 6block', // carry-over
  f02520: 'min-ask, China, Hong Kong + Dongguan', // carry-over
  f02606: 'min-ask, China, Shanghai', // carry-over
  f02620: 'min-ask, Poland, Krakow, @magik6k', // carry-over
  f02622: 'min-ask, USA, Portland, 6block', // carry-over
  f02623: 'min-ask, USA, Portland, 6block', // carry-over
  f02645: 'min-ask, China, Hong Kong', // carry-over
  f03273: 'min-ask, USA, Portland, 6block', // carry-over
  f03274: 'min-ask, USA, Portland, 6block', // carry-over
  f03275: 'min-ask, USA, Portland, 6block', // carry-over
  f03488: 'min-ask, Korea, Geumcheon-gu, we4u', // carry-over
  f03491: 'min-ask, China, Hong Kong', // carry-over
  f05315: 'min-ask, USA, Portland, 6block', // carry-over
  f05316: 'min-ask, USA, Portland, 6block', // carry-over
  f05317: 'min-ask, USA, Portland', // carry-over
  f07850: 'min-ask, USA, Portland, 6block', // carry-over
  f07919: 'min-ask, China, Beijing, Shanghai, Hunan', // carry-over
  f07998: 'min-ask, China, Hangzhou', // carry-over
  f08383: 'min-ask, USA, Portland, 6block', // carry-over
  f09696: 'min-ask, USA, Portland + Singapore', // carry-over
  f010010: 'min-ask, China, Changzhou + Hong Kong', // carry-over
  f010253: 'min-ask, China, Beijing + USA, Portland', // carry-over
  f010254: 'min-ask, Japan, Minamata', // carry-over
  f014365: 'min-ask, Australia, Marrickville + Japan, Heiwajima', // carry-over
  f018780: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018781: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018782: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018784: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018785: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f020223: 'min-ask, China, Guiyang', // carry-over
  f020398: 'min-ask, China, Zhangjiakou', // carry-over
  f020541: 'min-ask, China, Shanghai', // carry-over
  f021265: 'min-ask, China, Wuhan', // carry-over
  f023495: 'min-ask, China, Beijing + USA, Portland', // carry-over
  f023565: 'min-ask, China, Fuzhou', // carry-over
  f023660: 'min-ask, China, Fuzhou', // carry-over
  f023662: 'min-ask, China, Fuzhou', // carry-over
  f023825: 'min-ask, USA, Portland', // carry-over
  f023843: 'min-ask, China, Zhangjiakou', // carry-over
  f023853: 'min-ask, China, Fuzhou', // carry-over
  f023854: 'min-ask, China, Fuzhou', // carry-over
  f023855: 'min-ask, China, Fuzhou', // carry-over
  f023858: 'min-ask, China, Fuzhou', // carry-over
  f023859: 'min-ask, China, Fuzhou', // carry-over
  f023861: 'min-ask, China, Fuzhou', // carry-over
  f023868: 'min-ask, China, Fuzhou', // carry-over
  f023869: 'min-ask, China, Fuzhou', // carry-over
  f023870: 'min-ask, China, Fuzhou', // carry-over
  f023871: 'min-ask, China, Fuzhou', // carry-over
  f023876: 'min-ask, China, Fuzhou', // carry-over
  f023928: 'min-ask, China, Fuzhou', // carry-over
  f023977: 'min-ask, China, Fuzhou', // carry-over
  f023978: 'min-ask, China, Fuzhou', // carry-over
  f023981: 'min-ask, China, Fuzhou', // carry-over
  f024006: 'min-ask, China, Fuzhou', // carry-over
  f024007: 'min-ask, China, Fuzhou', // carry-over
  f024008: 'min-ask, China, Fuzhou', // carry-over
  f024012: 'min-ask, China, Fuzhou', // carry-over
  f024013: 'min-ask, China, Fuzhou', // carry-over
  f024014: 'min-ask, China, Fuzhou', // carry-over
  f024015: 'min-ask, USA, Portland, FILmiPool-JP01', // carry-over
  f024016: 'min-ask, USA, Portland', // carry-over
  f024084: 'min-ask, China, Fuzhou', // carry-over
  f024085: 'min-ask, China, Fuzhou', // carry-over
  f024146: 'min-ask, China, Fuzhou', // carry-over
  f024147: 'min-ask, China, Fuzhou', // carry-over
  f024148: 'min-ask, China, Fuzhou', // carry-over
  f029401: 'min-ask, USA, Portland + New Castle', // carry-over
  f029404: 'min-ask, USA, Portland + New Castle', // carry-over
  f032913: 'min-ask, China, Shenzhen', // carry-over
  f033123: 'min-ask, USA, Portland + New Castle', // carry-over
  f033511: 'min-ask, China, Dongguan', // carry-over
  f034047: 'min-ask, China, Hangzhou', // carry-over
  f034581: 'min-ask, NR', // carry-over
  f034592: 'min-ask, NR', // carry-over
  f039800: 'min-ask, China, Chengdu', // carry-over
  f042540: 'min-ask, China, Beijing + USA, Portland + Newcastle', // carry-over
  f042558: 'min-ask, China, Beijing + USA, Portland + Newcastle', // carry-over
  f042635: 'min-ask, China, Beijing + USA, Portland + Newcastle', // carry-over
  f054370: 'min-ask, China, Dongguan', // carry-over
  f056611: 'min-ask, USA, Portland + New Castle', // carry-over
  f057614: 'min-ask, USA, Portland + New Castle', // carry-over
  f057698: 'min-ask, NR', // carry-over
  f061407: 'min-ask, China, Shenzhen', // carry-over
  f061740: 'min-ask, USA, Portland + New Castle', // carry-over
  f062260: 'min-ask, China, Guangzhou', // carry-over
  f062334: 'min-ask, USA, Portland + New Castle', // carry-over
  f062770: 'min-ask, China, Fuzhou', // carry-over
  f062811: 'min-ask, China, Fuzhou', // carry-over
  f062982: 'min-ask, China, Fuzhou', // carry-over
  f064218: 'min-ask, USA, Kirkland', // carry-over
  f064222: 'min-ask, China, Fuzhou', // carry-over
  f066104: 'min-ask, China, Xingjiang + USA, Portland', // carry-over
  f066845: 'min-ask, China, Dongguan', // carry-over
  f068898: 'min-ask, China, Fuzhou', // carry-over
  f069915: 'min-ask, NR', // carry-over
  f069919: 'min-ask, NR', // carry-over
  f070501: 'min-ask, USA + China, Hong Kong', // carry-over
  f070999: 'min-ask, China, Xinjiang', // carry-over
  f071980: 'min-ask, China, Xinjiang', // carry-over
  f073552: 'min-ask, NR', // carry-over
  f073628: 'min-ask, USA, New Castle', // carry-over
  f073697: 'min-ask, China, Xinjiang', // carry-over
  f078522: 'min-ask, NR', // carry-over
  f078770: 'min-ask, China, Xinjiang', // carry-over
  f078772: 'min-ask, NR', // carry-over
  f079197: 'min-ask, NR', // carry-over
  f079247: 'min-ask, USA, New Castle', // carry-over
  f079301: 'min-ask, USA, New Castle', // carry-over
  f082452: 'min-ask, China, Dongguan', // carry-over
  f083625: 'min-ask, China, Xinjiang', // carry-over
  f084879: 'min-ask, Korea, Seongnam-si', // carry-over

  // Error

  f01280: 'error, China, Wuxi, 了凡超算', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.560606060406687912 FIL, balance: 0.548359253150525403 FIL): validation failure
  f03482: 'error, China, Wuxi', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds including pending messages (required: 0.418781050675342752 FIL, balance: 0.110607179393863893 FIL): validation failure
  f010505: 'error, China, Wuhan, Interstellar Roewe', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f022522: 'error, China, Dongguan', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity

  // Backoff

  // Rejected

  f01247: 'rejected, Canada, Montreal', // piece size more than maximum allowed size: 134217728 > 1048576
  f02387: 'rejected, Canada, Brampton, NBFS Canada',
  f02619: 'rejected, China, Beijing, Blockcasting', // piece size more than maximum allowed size: 134217728 > 1048576
  f03364: 'rejected, China, Guangzhou', // piece size more than maximum allowed size: 134217728 > 1048576
  f07709: 'rejected, Korea, Dongjak-gu', // piece size more than maximum allowed size: 134217728 > 1048576
  f08019: 'rejected, China, Yantai, 三合', // piece size more than maximum allowed size: 134217728 > 1048576
  f08403: 'rejected, UK, Lower Slaughter, TippyFlits', // Miner temporarily offline - BACK SOON
  f010617: 'rejected, Canada, Surrey, kernelogic2, @feiya200', // System maintenance
  f014324: 'rejected, Canada, Vancouver', // piece size more than maximum allowed size: 134217728 > 1048576
  f015233: 'rejected, China, Nanjing', // piece size more than maximum allowed size: 134217728 > 1048576
  f015942: 'rejected, China, Ningbo', // piece size more than maximum allowed size: 134217728 > 1048576
  f016511: 'rejected, China, Beijing', // piece size more than maximum allowed size: 134217728 > 1048576
  f017665: 'rejected, China, Shenyang', // piece size more than maximum allowed size: 134217728 > 1048576
  f019806: 'rejected, China, Beijing', // piece size more than maximum allowed size: 268435456 > 1048576
  f020747: 'rejected, China, Xiamen', // piece size more than maximum allowed size: 134217728 > 1048576
  f021075: 'rejected, China, Chengdu', // piece size more than maximum allowed size: 134217728 > 1048576
  f022227: 'rejected, China, Jiangsu', // piece size more than maximum allowed size: 134217728 > 1048576
  f023179: 'rejected, China, Fuzhou', // piece size more than maximum allowed size: 134217728 > 1048576
  f042391: 'rejected, China, Fuzhou', // piece size more than maximum allowed size: 134217728 > 1048576

  // Dial

  // XNR

  // Error during ask

  f02654: 'error-ask, China, Shanghai', // carry-over
  f05664: 'error-ask, China, Shenzhen, 艾比特网络科技', // carry-over
  f08025: 'error-ask, China, Hong Kong', // carry-over
  f08257: 'error-ask, China, Ningbo + USA, Boardman', // carry-over
  f014395: 'error-ask, China, Dongguan',
  f015927: 'error-ask, USA, East Islip, CDImine', // carry-over
  f015941: 'error-ask, Ukraine, Kyiv',
  f017242: 'error-ask, China, Guangdong',
  f019240: 'error-ask, China, Beijing',
  f019399: 'error-ask, Korea, Busan', // carry-over
  f023980: 'error-ask, China, Fuzhou', // carry-over
  f050260: 'error-ask, China, Suzhou', // carry-over
  f052447: 'error-ask, China, Beijing + USA, Portland + New Castle', // carry-over
  f061051: 'error-ask, NR', // carry-over
  f065141: 'error-ask, China, Fuzhou',
  f065732: 'error-ask, Korea, Gyeonggi-do',
  f067314: 'error-ask, China, Ningbo',
  f073048: 'error-ask, Korea, Gyeonggi-do',
  f080444: 'error-ask, China, Chengdu',
  f081779: 'error-ask, China, Hunan', // carry-over
  f084419: 'error-ask, NR', // carry-over
  f084907: 'error-ask, NR', // carry-over
  f085437: 'error-ask, NR', // carry-over
  f086028: 'error-ask, NR', // carry-over
  f086439: 'error-ask, NR', // carry-over
  f086572: 'error-ask, NR', // carry-over
  f086610: 'error-ask, Korea, Gyeonggi-do'
}

export default annotations
