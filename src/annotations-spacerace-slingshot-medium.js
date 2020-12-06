// Slingshot test results
//
// Additional testing with files > 128MiB in size
//
// These are generated from a second round of testing after attempting
// to store a small file, see annotations-spacerace.js for those results

const annotations = {
  // Retest

  // Candidates

  f022352: 'candidate, Norway, Borgen, TechHedge, @Reiers', // carry-over
  f057698: 'candidate, NR', // carry-over

  // Active

  // Sealing (active-sealing = previously active, retesting with new deal)

  f025007: 'active-sealing, Korea, Gyeonggi-do, PINBYTES-eCUBE', // 1424351

  // Sealing

  f02401: 'sealing, Canada, Chambly, NBFS Canada', // 1424336
  f09848: 'sealing, USA, Irvine, BigBearLake', // 1424837
  f032934: 'sealing, Korea, Incheon', // 1424408
  f055102: 'sealing, Vietman, Ho Chi Minh City + China', // 1424385
  f079817: "sealing, Russia, Ul'yanovka", // 1424859

  // Stuck

  f01276: 'stuck, Canada, Brampton, NBFS Canada', // StartDataTransfer: about 3 hours
  f08285: 'stuck, Latvia, Riga, stander', // CheckForAcceptance: about 3 hours
  f08482: 'stuck, USA, Athol, @why', // CheckForAcceptance: about 3 hours
  f010446: 'stuck, Netherlands, Angelo', // CheckForAcceptance: about 2 hours
  f014768: 'stuck, Singapore, Funktafide, @Funk', // CheckForAcceptance: about 3 hours
  f016594: 'stuck, Germany', // CheckForAcceptance: about 2 hours
  f019029: 'stuck, Serbia, Boljevac', // CheckForAcceptance: about 3 hours
  f019100: 'stuck, Romania, Cluj-Napoca, noisyfan', // CheckForAcceptance: about 2 hours
  f022163: 'stuck, dns:fil.akasha.network', // CheckForAcceptance: about 3 hours
  f023467: 'stuck, Norway, Oslo, PhiMining.io', // CheckForAcceptance: about 2 hours
  f054677: 'stuck, Finland, Helsinki', // CheckForAcceptance: about 2 hours
  f055123: 'stuck, Korea, Busan', // CheckForAcceptance: about 2 hours
  f066568: 'stuck, Korea, Gwangju, aoc-0002', // CheckForAcceptance: about 3 hours
  f078425: 'stuck, Korea, Bucheon-si', // CheckForAcceptance: about 4 hours
  f088305: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f088404: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f089201: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f089840: 'stuck, Korea, Yeongdeungpo-gu', // StartDataTransfer: about 3 hours
  f090086: 'stuck, Korea', // CheckForAcceptance: about 3 hours
  f090747: 'stuck, Korea, Anyang-si', // CheckForAcceptance: about 3 hours
  f090851: 'stuck, China, Ningxia', // CheckForAcceptance: about 3 hours
  f092630: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 2 hours
  f094085: 'stuck, Japan, Ota-ku', // CheckForAcceptance: about 3 hours
  f094899: 'stuck, Korea', // CheckForAcceptance: about 3 hours
  f094901: 'stuck, Korea, Bucheon-si', // CheckForAcceptance: about 3 hours
  f095049: 'stuck, Korea, Bucheon-si', // CheckForAcceptance: about 2 hours
  f095833: 'stuck, Korea, Yongin-si', // CheckForAcceptance: about 2 hours

  // Min-size

  f01238: 'min-size, Vietnam, Hanoi, FILECOIN-VIETNAM', // 134217728 < 1073741824
  f01240: 'min-size, Netherlands, HidNand', // 134217728 < 8589934592
  f01278: 'min-size, USA, Grand Rapids, MiMiner', // 134217728 < 2147483648
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 134217728 < 2147483648
  f03488: 'min-size, Korea, Geumcheon-gu, we4u', // 134217728 < 1073741824
  f05664: 'min-size, China, Shenzhen, 艾比特网络科技', // 134217728 < 1073741824
  f07709: 'min-size, Korea, Dongjak-gu', // 134217728 < 268435456
  f08403: 'min-size, UK, Lower Slaughter, TippyFlits', // 134217728 < 8589934592
  f010479: 'min-size, France, Fontenay-sous-Bois, s0nik42', // 134217728 < 8589934592
  f010617: 'min-size, Canada, Surrey, kernelogic2, @feiya200', // 134217728 < 1073741824
  f014409: 'min-size, USA, Waxhaw, Meatball Part III', // 134217728 < 8589934592
  f019104: 'min-size, Canada, Chambly, NBFS DEV', // 134217728 < 536870912
  f019551: 'min-size, UK, Birmingham, @Neofix AF', // 134217728 < 2147483648
  f020385: 'min-size, Korea, Incheon', // 134217728 < 536870912
  f020904: 'min-size, Korea, Uijeongbu-si, FILTop', // 134217728 < 268435456
  f021716: 'min-size, New Zealand, Wellington', // 134217728 < 8589934592
  f022130: 'min-size, Korea, Seodaemun-gu', // 134217728 < 536870912
  f030379: 'min-size, Korea, Uiwang', // 134217728 < 1073741824
  f047419: 'min-size, USA, Waukesha', // 134217728 < 4294967296
  f080480: 'min-size, Ukraine, Lviv', // 134217728 < 2147483648

  // Max-size

  f01247: 'max-size, Canada, Montreal', // 134217728 > 1048576
  f010399: 'max-size, China, Guangzhou', // 134217728 > 1048576
  f021075: 'max-size, China, Chengdu', // 134217728 > 1048576
  f024944: 'max-size, Korea, Yeongdeungpo-dong', // 134217728 > 1048576

  // Min-ask

  f01241: 'min-ask, USA, Portland, 6block', // carry-over
  f01277: 'min-ask, Sweden, Stockholm, tvsthlm', // carry-over
  f01291: 'min-ask, Sweden, Stockholm, tvsthlm', // carry-over
  f02301: 'min-ask, USA', // carry-over
  f02415: 'min-ask, China, Hong Kong', // carry-over
  f02500: 'min-ask, Korea, Seongnam-si', // carry-over
  f02620: 'min-ask, Poland, Krakow, @magik6k', // carry-over
  f02633: 'min-ask, China, Hong Kong', // carry-over
  f02645: 'min-ask, China, Hong Kong', // carry-over
  f03224: 'min-ask, Ukraine, Irpin, oboltusov', // carry-over
  f03491: 'min-ask, China, Hong Kong', // carry-over
  f07919: 'min-ask, China, Beijing, Shanghai, Hunan', // carry-over
  f07990: 'min-ask, China, Hong Kong', // carry-over
  f08025: 'min-ask, China, Hong Kong', // carry-over
  f014365: 'min-ask, Australia, Marrickville + Japan, Heiwajima', // carry-over
  f015897: 'min-ask, China, Guangdong', // carry-over
  f015927: 'min-ask, USA, East Islip, CDImine', // carry-over
  f015941: 'min-ask, Ukraine, Kyiv', // carry-over
  f018780: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018781: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018782: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018783: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018784: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018785: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f020378: 'min-ask, Bulgaria, Asenovgrad', // carry-over
  f023495: 'min-ask, China, Beijing + USA, Portland', // carry-over
  f024156: 'min-ask, USA', // carry-over
  f024184: 'min-ask, Korea, Gangnam-gu, we4u-GREEN', // carry-over
  f029344: 'min-ask, Korea, Seongnam-si', // carry-over
  f033356: 'min-ask, Korea, Gangnum-gu, we4u-YELLOW', // carry-over
  f062318: 'min-ask, Korea, Naju', // carry-over
  f062353: 'min-ask, Germany, Frankfurt', // carry-over
  f066596: 'min-ask, USA, San Diego', // carry-over
  f074738: 'min-ask, Korea, Seongbuk-gu', // carry-over
  f082669: 'min-ask, USA, Daytona Beach', // carry-over
  f084879: 'min-ask, Korea, Seongnam-si', // carry-over

  // Xfr-failed

  f015747: 'xfr-failed, Japan, Setagaya-ku',
  f055132: 'xfr-failed, Vietman, Ho Chi Minh City + China',
  f086610: 'xfr-failed, Korea, Gyeonggi-do',

  // Error

  f08240: 'error, Russia, Novosibirsk, Rabinovitch', // stream reset
  f019399: 'error, Korea, Busan', // stream reset
  f092776: 'error, Korea, Gimhae', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds including pending messages (required: 2.696999948084221171 FIL, balance: 2.621098262205928491 FIL): validation failure

  // Backoff

  // Rejected

  f02387: 'rejected, Canada, Brampton, NBFS Canada',
  f03624: 'rejected, Germany, Chemnitz, ode', // no online
  f010254: 'rejected, Japan, Minamata',
  f022142: 'rejected, USA, Queens, Nelson SR2', // syntax error at /home/supernsc/.lotusminer/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /home/supernsc/.lotusminer/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /home/supernsc/.lotusminer/dealfilter.pl line 17.
  f064218: 'rejected, USA, Kirkland', // no online

  // Dial

  // XNR

  // Error during ask

  f01272: 'error-ask, Singapore', // carry-over
  f01280: 'error-ask, China, Wuxi, 了凡超算', // carry-over
  f01287: 'error-ask, China, Jiaxing, MaiTian', // carry-over
  f01799: 'error-ask, China, Jinan, TokenHome', // carry-over
  f02381: 'error-ask, China, Dongguan, 西野七濑迷叔', // carry-over
  f02405: 'error-ask, China, Shenzhen', // carry-over
  f02419: 'error-ask, China, Shanghai, yuantai', // carry-over
  f02490: 'error-ask, China, Fujian', // carry-over
  f02501: 'error-ask, USA, Portland, 6block', // carry-over
  f02514: 'error-ask, USA, Portland, 6block', // carry-over
  f02520: 'error-ask, China, Hong Kong + Dongguan', // carry-over
  f02606: 'error-ask, China, Shanghai', // carry-over
  f02619: 'error-ask, China, Beijing, Blockcasting', // carry-over
  f02622: 'error-ask, USA, Portland, 6block', // carry-over
  f02623: 'error-ask, USA, Portland, 6block', // carry-over
  f02856: 'error-ask, China, Chengdu', // carry-over
  f03134: 'error-ask, China, Cangzhou, 乔木信息', // carry-over
  f03273: 'error-ask, USA, Portland, 6block', // carry-over
  f03274: 'error-ask, USA, Portland, 6block', // carry-over
  f03275: 'error-ask, USA, Portland, 6block', // carry-over
  f03328: 'error-ask, China, Xinxiang, Golden Miner', // carry-over
  f03339: 'error-ask, China, Luzhou, benxun', // carry-over
  f03345: 'error-ask, China, Fuzhou, chh', // carry-over
  f03364: 'error-ask, China, Guangzhou', // carry-over
  f03482: 'error-ask, China, Wuxi', // carry-over
  f04443: 'error-ask, China, Shanghai, 罗良科技', // carry-over
  f05315: 'error-ask, USA, Portland, 6block', // carry-over
  f05316: 'error-ask, USA, Portland, 6block', // carry-over
  f07819: 'error-ask, China, Wuxi, YC--wuxi', // carry-over
  f07850: 'error-ask, USA, Portland, 6block', // carry-over
  f07998: 'error-ask, China, Hangzhou', // carry-over
  f08019: 'error-ask, China, Yantai, 三合', // carry-over
  f08103: 'error-ask, China, Foshan, 花生酱肠粉', // carry-over
  f08257: 'error-ask, China, Ningbo + USA, Boardman', // carry-over
  f08383: 'error-ask, USA, Portland, 6block', // carry-over
  f08399: 'error-ask, USA, Sammamish', // carry-over
  f09569: 'error-ask, China, Beijing', // carry-over
  f09693: 'error-ask, USA, Portland + Singapore, 6block-CapsuleMining', // carry-over
  f09696: 'error-ask, USA, Portland + Singapore', // carry-over
  f010010: 'error-ask, China, Changzhou + Hong Kong', // carry-over
  f010241: 'error-ask, China, Beijing + USA, Portland, 6Block-P', // carry-over
  f010247: 'error-ask, China, Yantai', // carry-over
  f010253: 'error-ask, China, Beijing + USA, Portland', // carry-over
  f010405: 'error-ask, China, Foshan', // carry-over
  f010491: 'error-ask, China, Shenzhen', // carry-over
  f010493: 'error-ask, China, Shanghai', // carry-over
  f010498: 'error-ask, China, Shenzhen', // carry-over
  f010501: 'error-ask, China, Hangzhou, Interstellar Roewe', // carry-over
  f010505: 'error-ask, China, Wuhan, Interstellar Roewe', // carry-over
  f010513: 'error-ask, China, Chongqing', // carry-over
  f010523: 'error-ask, China, Beijing, Interstellar Roewe', // carry-over
  f010528: 'error-ask, China, Chongqing, Interstellar Roewe', // carry-over
  f014394: 'error-ask, China, Suzhou, IPFSCloud', // carry-over
  f014395: 'error-ask, China, Dongguan', // carry-over
  f015233: 'error-ask, China, Nanjing', // carry-over
  f015734: 'error-ask, China, Qingdao', // carry-over
  f015877: 'error-ask, China, Jiaxing + USA', // carry-over
  f015942: 'error-ask, China, Ningbo', // carry-over
  f017242: 'error-ask, China, Guangdong', // carry-over
  f017665: 'error-ask, China, Shenyang', // carry-over
  f018501: 'error-ask, China, Beijing', // carry-over
  f019240: 'error-ask, China, Beijing', // carry-over
  f019362: 'error-ask, China, Hangzhou, 青青子衿', // carry-over
  f019437: 'error-ask, Korea, Guro-gu', // carry-over
  f019806: 'error-ask, China, Beijing', // carry-over
  f019824: 'error-ask, USA', // carry-over
  f020398: 'error-ask, China, Zhangjiakou', // carry-over
  f020436: 'error-ask, China, Beijing', // carry-over
  f020523: 'error-ask, China, Suzhou, changjiang', // carry-over
  f020541: 'error-ask, China, Shanghai', // carry-over
  f020747: 'error-ask, China, Xiamen', // carry-over
  f021265: 'error-ask, China, Wuhan', // carry-over
  f022261: 'error-ask, China, Luzhou', // carry-over
  f022308: 'error-ask, China, Shenzhen', // carry-over
  f022522: 'error-ask, China, Dongguan', // carry-over
  f022853: 'error-ask, China, Fuzhou', // carry-over
  f022922: 'error-ask, China, Shenzhen, CAAP-MEG', // carry-over
  f023001: 'error-ask, China, Changsha', // carry-over
  f023152: 'error-ask, China, Quanzhou', // carry-over
  f023179: 'error-ask, China, Fuzhou', // carry-over
  f023198: 'error-ask, NR', // carry-over
  f023565: 'error-ask, China, Fuzhou', // carry-over
  f023660: 'error-ask, China, Fuzhou', // carry-over
  f023662: 'error-ask, China, Fuzhou', // carry-over
  f023825: 'error-ask, USA, Portland', // carry-over
  f023843: 'error-ask, China, Zhangjiakou', // carry-over
  f023853: 'error-ask, China, Fuzhou', // carry-over
  f023854: 'error-ask, China, Fuzhou', // carry-over
  f023855: 'error-ask, China, Fuzhou', // carry-over
  f023858: 'error-ask, China, Fuzhou', // carry-over
  f023859: 'error-ask, China, Fuzhou', // carry-over
  f023861: 'error-ask, China, Fuzhou', // carry-over
  f023868: 'error-ask, China, Fuzhou', // carry-over
  f023869: 'error-ask, China, Fuzhou', // carry-over
  f023870: 'error-ask, China, Fuzhou', // carry-over
  f023871: 'error-ask, China, Fuzhou', // carry-over
  f023876: 'error-ask, China, Fuzhou', // carry-over
  f023928: 'error-ask, China, Fuzhou', // carry-over
  f023977: 'error-ask, China, Fuzhou', // carry-over
  f023978: 'error-ask, China, Fuzhou', // carry-over
  f023980: 'error-ask, China, Fuzhou', // carry-over
  f023981: 'error-ask, China, Fuzhou', // carry-over
  f024006: 'error-ask, China, Fuzhou', // carry-over
  f024007: 'error-ask, China, Fuzhou', // carry-over
  f024008: 'error-ask, China, Fuzhou', // carry-over
  f024012: 'error-ask, China, Fuzhou', // carry-over
  f024013: 'error-ask, China, Fuzhou', // carry-over
  f024014: 'error-ask, China, Fuzhou', // carry-over
  f024015: 'error-ask, USA, Portland, FILmiPool-JP01', // carry-over
  f024016: 'error-ask, USA, Portland', // carry-over
  f024081: 'error-ask, undefined', // carry-over
  f024084: 'error-ask, China, Fuzhou', // carry-over
  f024085: 'error-ask, China, Fuzhou', // carry-over
  f024136: 'error-ask, China, Fuzhou', // carry-over
  f024146: 'error-ask, China, Fuzhou', // carry-over
  f024147: 'error-ask, China, Fuzhou', // carry-over
  f024148: 'error-ask, China, Fuzhou', // carry-over
  f024511: 'error-ask, China, Shenzhen', // carry-over
  f024972: 'error-ask, undefined', // carry-over
  f025017: 'error-ask, China, Hefei, 一三科技-913', // carry-over
  f029401: 'error-ask, USA, Portland + New Castle', // carry-over
  f029404: 'error-ask, USA, Portland + New Castle', // carry-over
  f030125: 'error-ask, China, Nantong', // carry-over
  f030203: 'error-ask, undefined', // carry-over
  f030335: 'error-ask, China, Fujian', // carry-over
  f030384: 'error-ask, undefined', // carry-over
  f032913: 'error-ask, China, Shenzhen', // carry-over
  f033123: 'error-ask, USA, Portland + New Castle', // carry-over
  f033511: 'error-ask, China, Dongguan', // carry-over
  f033549: 'error-ask, China, Quzhou', // carry-over
  f034581: 'error-ask, NR', // carry-over
  f034592: 'error-ask, NR', // carry-over
  f034701: 'error-ask, China, Shenzhen', // carry-over
  f034777: 'error-ask, China, Chengdu', // carry-over
  f035436: 'error-ask, China, Jiangsu', // carry-over
  f039515: 'error-ask, China, Chongqing', // carry-over
  f039800: 'error-ask, China, Chengdu', // carry-over
  f040218: 'error-ask, China, Wuxi', // carry-over
  f042391: 'error-ask, China, Fuzhou', // carry-over
  f042540: 'error-ask, China, Beijing + USA, Portland + Newcastle', // carry-over
  f042558: 'error-ask, China, Beijing + USA, Portland + Newcastle', // carry-over
  f042567: 'error-ask, China, Jinhua', // carry-over
  f042635: 'error-ask, China, Beijing + USA, Portland + Newcastle', // carry-over
  f044160: 'error-ask, China, Guangzhou, muxing', // carry-over
  f047858: 'error-ask, China, Wuhan', // carry-over
  f048172: 'error-ask, China, Suzhou', // carry-over
  f048192: 'error-ask, China, Suzhou', // carry-over
  f050260: 'error-ask, China, Suzhou', // carry-over
  f052447: 'error-ask, China, Beijing + USA, Portland + New Castle', // carry-over
  f053088: 'error-ask, China, Shanghai', // carry-over
  f054370: 'error-ask, China, Dongguan', // carry-over
  f056226: 'error-ask, NR', // carry-over
  f056611: 'error-ask, USA, Portland + New Castle', // carry-over
  f057466: 'error-ask, China, Guangzhou', // carry-over
  f057614: 'error-ask, USA, Portland + New Castle', // carry-over
  f058000: 'error-ask, China, Suzhou', // carry-over
  f060072: 'error-ask, China, Chongqing', // carry-over
  f061043: 'error-ask, China, Changsha', // carry-over
  f061158: 'error-ask, China, Guangdong', // carry-over
  f061407: 'error-ask, China, Shenzhen', // carry-over
  f061740: 'error-ask, USA, Portland + New Castle', // carry-over
  f062260: 'error-ask, China, Guangzhou', // carry-over
  f062334: 'error-ask, USA, Portland + New Castle', // carry-over
  f062770: 'error-ask, China, Fuzhou', // carry-over
  f062811: 'error-ask, China, Fuzhou', // carry-over
  f062982: 'error-ask, China, Fuzhou', // carry-over
  f065103: 'error-ask, USA, Portland + China, Shenzhen', // carry-over
  f065200: 'error-ask, China, Yibin', // carry-over
  f065266: 'error-ask, China, Hefei', // carry-over
  f066104: 'error-ask, China, Xingjiang + USA, Portland', // carry-over
  f066845: 'error-ask, China, Dongguan', // carry-over
  f067314: 'error-ask, China, Ningbo', // carry-over
  f068096: 'error-ask, China, Sichuan', // carry-over
  f068898: 'error-ask, China, Fuzhou', // carry-over
  f069915: 'error-ask, NR', // carry-over
  f069919: 'error-ask, NR', // carry-over
  f070501: 'error-ask, USA + China, Hong Kong', // carry-over
  f070999: 'error-ask, China, Xinjiang', // carry-over
  f071664: 'error-ask, China, Shandong', // carry-over
  f071914: 'error-ask, China, Beijing', // carry-over
  f071980: 'error-ask, China, Xinjiang', // carry-over
  f073552: 'error-ask, NR', // carry-over
  f073628: 'error-ask, USA, New Castle', // carry-over
  f078522: 'error-ask, NR', // carry-over
  f078770: 'error-ask, China, Xinjiang', // carry-over
  f078772: 'error-ask, NR', // carry-over
  f079197: 'error-ask, NR', // carry-over
  f079247: 'error-ask, USA, New Castle', // carry-over
  f079301: 'error-ask, USA, New Castle', // carry-over
  f079425: 'error-ask, NR', // carry-over
  f081644: 'error-ask, China, Wenzhou', // carry-over
  f082356: 'error-ask, China, Jiaxing', // carry-over
  f082452: 'error-ask, China, Dongguan', // carry-over
  f082617: 'error-ask, China, Fujian', // carry-over
  f083065: 'error-ask, China, Taizhou', // carry-over
  f083235: 'error-ask, Serbia, Belgrade', // carry-over
  f083625: 'error-ask, China, Xinjiang', // carry-over
  f083638: 'error-ask, China, Chongqing', // carry-over
  f083903: 'error-ask, NR', // carry-over
  f085710: 'error-ask, China, Chengdu', // carry-over
  f086572: 'error-ask, NR', // carry-over
  f087931: 'error-ask, China, Beijing', // carry-over
  f089551: 'error-ask, NR', // carry-over
  f090363: 'error-ask, China, Beijing', // carry-over
  f090387: 'error-ask, China, Fuzhou', // carry-over
  f091139: 'error-ask, Korea, Gyeonggi-do', // carry-over
  f091243: 'error-ask, NR', // carry-over
  f092514: 'error-ask, China, Karamay', // carry-over
  f093212: 'error-ask, Netherlands', // carry-over
  f093554: 'error-ask, China, Zhangzhou', // carry-over
  f093658: 'error-ask, China, Fujian', // carry-over
  f094374: 'error-ask, China, Nanyang', // carry-over
  f094614: 'error-ask, China, Karamay', // carry-over
  f094785: 'error-ask, China, Shanghai', // carry-over
  f094825: 'error-ask, Korea, Gwangju', // carry-over
  f095296: 'error-ask, China, Suqian', // carry-over
  f095398: 'error-ask, Korea, Sejong', // carry-over
  f095528: 'error-ask, China, Hangzhou', // carry-over
  f096224: 'error-ask, China, Chongqing' // carry-over
}

export default annotations
