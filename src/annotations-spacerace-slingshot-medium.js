// Slingshot test results
//
// Additional testing with files > 128MiB in size
//
// These are generated from a second round of testing after attempting
// to store a small file, see annotations-spacerace.js for those results

const annotations = {
  // Retest

  // Candidates

  f020378: 'active-candidate, Bulgaria, Asenovgrad', // carry-over
  f020523: 'active-candidate, China, Suzhou, changjiang', // carry-over
  f071914: 'active-candidate, China, Beijing', // carry-over

  f010247: 'candidate, China, Yantai', // carry-over
  f019104: 'candidate, Canada, Chambly, NBFS DEV', // carry-over
  f023662: 'candidate, China, Fuzhou', // carry-over
  f024006: 'candidate, China, Fuzhou', // carry-over
  f066845: 'candidate, China, Dongguan', // carry-over
  f071980: 'candidate, China, Xinjiang', // carry-over
  f079334: 'candidate, Korea, Gyeonggi-do', // carry-over

  // Active

  // Sealing (active-sealing = previously active, retesting with new deal)

  f01238: 'active-sealing, Vietnam, Hanoi, FILECOIN-VIETNAM', // 1388095
  f01278: 'active-sealing, USA, Grand Rapids, MiMiner', // 1388126
  f08240: 'active-sealing, Russia, Novosibirsk, Rabinovitch', // 1388115
  f010479: 'active-sealing, France, Fontenay-sous-Bois, s0nik42', // 1388180
  f022352: 'active-sealing, Norway, Borgen, TechHedge, @Reiers', // 1388017

  // Sealing

  f09693: 'sealing, USA, Portland + Singapore, 6block-CapsuleMining', // 1388014
  f010241: 'sealing, China, Beijing + USA, Portland', // 1388164

  // Stuck

  f01240: 'stuck, Netherlands, HidNand', // CheckForAcceptance: 19 minutes
  f01280: 'stuck, China, Wuxi, 了凡超算', // Transferring: 18 minutes
  f01799: 'stuck, China, Jinan, TokenHome', // CheckForAcceptance: 39 minutes
  f02423: 'stuck, Ukraine, Kyiv, igowreck', // CheckForAcceptance: about 2 hours
  f02490: 'stuck, China, Fujian', // Transferring: 18 minutes
  f02576: 'stuck, Denmark, Gjerlev, BenjaminH', // CheckForAcceptance: 43 minutes
  f02665: 'stuck, Netherlands, Amsterdam, fm-ops', // CheckForAcceptance: 9 minutes
  f02856: 'stuck, China, Chengdu', // Transferring: 43 minutes
  f03134: 'stuck, China, Cangzhou, 乔木信息', // Transferring: 31 minutes
  f03222: 'stuck, China, Yuncheong, 星云矿池', // Transferring: 32 minutes
  f03224: 'stuck, Ukraine, Irpin, oboltusov', // CheckForAcceptance: 29 minutes
  f03339: 'stuck, China, Luzhou, benxun', // Transferring: 32 minutes
  f08103: 'stuck, China, Foshan, 花生酱肠粉', // Transferring: 26 minutes
  f08285: 'stuck, Latvia, Riga, stander', // CheckForAcceptance: about 1 hour
  f08482: 'stuck, USA, Athol, @why', // CheckForAcceptance: 29 minutes
  f010513: 'stuck, China, Chongqing', // Transferring: about 1 hour
  f014394: 'stuck, China, Suzhou, IPFSCloud', // Transferring: about 1 hour
  f014395: 'stuck, China, Dongguan', // Transferring: 40 minutes
  f015747: 'stuck, Japan, Setagaya-ku', // Transferring: about 1 hour
  f015877: 'stuck, China, Jiaxing + USA', // Transferring: 35 minutes
  f015897: 'stuck, China, Guangdong', // CheckForAcceptance: 42 minutes
  f016276: 'stuck, China, Beijing', // Transferring: 32 minutes
  f016594: 'stuck, Germany', // CheckForAcceptance: about 1 hour
  f019100: 'stuck, Romania, Cluj-Napoca, noisyfan', // CheckForAcceptance: 8 minutes
  f019824: 'stuck, USA', // CheckForAcceptance: 20 minutes
  f020385: 'stuck, Korea, Incheon', // CheckForAcceptance: 8 minutes
  f020489: 'stuck, China, Lioaning', // Transferring: 39 minutes
  f022130: 'stuck, Korea, Seodaemun-gu', // CheckForAcceptance: about 1 hour
  f022142: 'stuck, USA, Queens, Nelson SR2', // CheckForAcceptance: about 1 hour
  f022163: 'stuck, dns:fil.akasha.network', // CheckForAcceptance: 8 minutes
  f022261: 'stuck, China, Luzhou', // Transferring: 43 minutes
  f022853: 'stuck, China, Fuzhou', // Transferring: 43 minutes
  f023467: 'stuck, Norway, Oslo, PhiMining.io', // CheckForAcceptance: 43 minutes
  f024156: 'stuck, USA', // CheckForAcceptance: 17 minutes
  f024511: 'stuck, China, Shenzhen', // Transferring: 19 minutes
  f025007: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 2 hours
  f025017: 'stuck, China, Hefei, 一三科技-913', // Transferring: 43 minutes
  f030327: 'stuck, China, Beijing', // FundsEnsured: about 2 hours
  f048172: 'stuck, China, Suzhou', // Transferring: 43 minutes
  f048192: 'stuck, China, Suzhou', // Transferring: about 1 hour
  f049882: 'stuck, Netherlands, De Rijp', // CheckForAcceptance: 31 minutes
  f054677: 'stuck, Finland, Helsinki', // CheckForAcceptance: 15 minutes
  f055132: 'stuck, NR', // CheckForAcceptance: about 1 hour
  f056226: 'stuck, NR', // Transferring: 22 minutes
  f057466: 'stuck, China, Guangzhou', // Transferring: 40 minutes
  f057842: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 2 hours
  f058374: 'stuck, USA', // CheckForAcceptance: about 1 hour
  f060693: 'stuck, NR', // Transferring: about 1 hour
  f062204: 'stuck, China, Hong Kong', // CheckForAcceptance: 32 minutes
  f062318: 'stuck, Korea, Naju', // CheckForAcceptance: 8 minutes
  f063173: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 1 hour
  f063996: 'stuck, China, Sichuan', // Transferring: 42 minutes
  f064668: 'stuck, China, Hong Kong', // CheckForAcceptance: about 1 hour
  f065103: 'stuck, USA, Portland + China, Shenzhen', // Transferring: 43 minutes
  f065141: 'stuck, China, Fuzhou', // Transferring: about 1 hour
  f065280: 'stuck, Korea, Songpa-gu', // CheckForAcceptance: 32 minutes
  f065732: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 2 hours
  f066566: 'stuck, Korea, Gwangju', // CheckForAcceptance: 17 minutes
  f066568: 'stuck, Korea, Gwangju', // CheckForAcceptance: about 1 hour
  f066596: 'stuck, USA, San Diego', // CheckForAcceptance: about 1 hour
  f066898: 'stuck, Japan, Bunkyo-ku', // CheckForAcceptance: 13 minutes
  f067170: 'stuck, China, Jiangmen', // Transferring: about 1 hour
  f067314: 'stuck, China, Ningbo', // Transferring: about 1 hour
  f067545: 'stuck, Canada, Kitchener', // CheckForAcceptance: about 1 hour
  f067721: 'stuck, China, Beijing', // Transferring: 15 minutes
  f070475: 'stuck, China, Guyuan', // FundsEnsured: about 1 hour
  f071190: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: 26 minutes
  f073048: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: 32 minutes
  f073535: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 2 hours
  f073543: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: 32 minutes
  f079425: 'stuck, NR', // Transferring: 43 minutes
  f079817: "stuck, Russia, Ul'yanovka", // CheckForAcceptance: about 1 hour
  f079847: 'stuck, China, Hong Kong', // CheckForAcceptance: 19 minutes
  f080444: 'stuck, China, Chengdu', // Transferring: 35 minutes
  f080480: 'stuck, Ukraine, Lviv', // CheckForAcceptance: about 2 hours
  f081323: 'stuck, UK, Basildon', // CheckForAcceptance: about 1 hour
  f082356: 'stuck, China, Jiaxing', // Transferring: about 1 hour
  f083235: 'stuck, Serbia, Belgrade', // CheckForAcceptance: 15 minutes
  f083550: 'stuck, Korea, Hwaseong-si', // CheckForAcceptance: about 2 hours
  f085226: 'stuck, Korea, Busan', // CheckForAcceptance: 31 minutes
  f085899: 'stuck, China, Wuxi', // Transferring: about 1 hour
  f085904: 'stuck, China, Chongqing', // Transferring: 27 minutes
  f086610: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 1 hour
  f087442: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 1 hour
  f087807: 'stuck, Korea', // CheckForAcceptance: about 2 hours
  f088305: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: 43 minutes
  f088404: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: 31 minutes
  f089201: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: 43 minutes
  f089210: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 2 hours
  f089232: 'stuck, China, Ningxia', // CheckForAcceptance: about 2 hours
  f089311: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 1 hour

  // Min-size

  f02419: 'min-size, China, Shanghai, yuantai', // 134217728 < 268435456
  f024184: 'min-size, Korea, Gangnam-gu, we4u-GREEN', // 134217728 < 1073741824
  f033356: 'min-size, Korea, Gangnum-gu, we4u-YELLOW', // 134217728 < 1073741824

  // Min-ask

  f01241: 'min-ask, USA, Portland, 6block', // carry-over
  f01276: 'min-ask, Canada, Brampton, NBFS Canada', // carry-over
  f01277: 'min-ask, Sweden, Stockholm, tvsthlm', // carry-over
  f02301: 'min-ask, USA', // carry-over
  f02381: 'min-ask, China, Dongguan, 西野七濑迷叔', // carry-over
  f02401: 'min-ask, Canada, Chambly, NBFS Canada', // carry-over
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
  f02633: 'min-ask, China, Hong Kong', // carry-over
  f02645: 'min-ask, China, Hong Kong', // carry-over
  f03273: 'min-ask, USA, Portland, 6block', // carry-over
  f03274: 'min-ask, USA, Portland, 6block', // carry-over
  f03275: 'min-ask, USA, Portland, 6block', // carry-over
  f03488: 'min-ask, Korea, Geumcheon-gu, we4u', // carry-over
  f03491: 'min-ask, China, Hong Kong', // carry-over
  f05315: 'min-ask, USA, Portland, 6block', // carry-over
  f05316: 'min-ask, USA, Portland, 6block', // carry-over
  f05317: 'min-ask, USA, Portland', // carry-over
  f05664: 'min-ask, China, Shenzhen, 艾比特网络科技', // carry-over
  f07850: 'min-ask, USA, Portland, 6block', // carry-over
  f07919: 'min-ask, China, Beijing, Shanghai, Hunan', // carry-over
  f07990: 'min-ask, China, Hong Kong', // carry-over
  f07998: 'min-ask, China, Hangzhou', // carry-over
  f08025: 'min-ask, China, Hong Kong', // carry-over
  f08257: 'min-ask, China, Ningbo + USA, Boardman', // carry-over
  f08383: 'min-ask, USA, Portland, 6block', // carry-over
  f09696: 'min-ask, USA, Portland + Singapore', // carry-over
  f09848: 'min-ask, USA, Irvine, BigBearLake', // carry-over
  f010010: 'min-ask, China, Changzhou + Hong Kong', // carry-over
  f010253: 'min-ask, China, Beijing + USA, Portland', // carry-over
  f010254: 'min-ask, Japan, Minamata', // carry-over
  f014365: 'min-ask, Australia, Marrickville + Japan, Heiwajima', // carry-over
  f018780: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018781: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018782: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018783: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018784: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f018785: 'min-ask, Singapore + Germany, Frankfurt + USA', // carry-over
  f020223: 'min-ask, China, Guiyang', // carry-over
  f020398: 'min-ask, China, Zhangjiakou', // carry-over
  f020541: 'min-ask, China, Shanghai', // carry-over
  f020747: 'min-ask, China, Xiamen', // carry-over
  f020904: 'min-ask, Korea, Uijeongbu-si, FILTop', // carry-over
  f023495: 'min-ask, China, Beijing + USA, Portland', // carry-over
  f023565: 'min-ask, China, Fuzhou', // carry-over
  f023660: 'min-ask, China, Fuzhou', // carry-over
  f023825: 'min-ask, USA, Portland', // carry-over
  f023843: 'min-ask, China, Zhangjiakou', // carry-over
  f023853: 'min-ask, China, Fuzhou', // carry-over
  f023854: 'min-ask, China, Fuzhou', // carry-over
  f023858: 'min-ask, China, Fuzhou', // carry-over
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
  f024007: 'min-ask, China, Fuzhou', // carry-over
  f024008: 'min-ask, China, Fuzhou', // carry-over
  f024012: 'min-ask, China, Fuzhou', // carry-over
  f024013: 'min-ask, China, Fuzhou', // carry-over
  f024014: 'min-ask, China, Fuzhou', // carry-over
  f024015: 'min-ask, USA, Portland, FILmiPool-JP01', // carry-over
  f024016: 'min-ask, USA, Portland', // carry-over
  f024081: 'min-ask, undefined', // carry-over
  f024084: 'min-ask, China, Fuzhou', // carry-over
  f024085: 'min-ask, China, Fuzhou', // carry-over
  f024136: 'min-ask, China, Fuzhou', // carry-over
  f024146: 'min-ask, China, Fuzhou', // carry-over
  f024147: 'min-ask, China, Fuzhou', // carry-over
  f024148: 'min-ask, China, Fuzhou', // carry-over
  f024972: 'min-ask, undefined', // carry-over
  f029344: 'min-ask, Korea, Seongnam-si', // carry-over
  f029401: 'min-ask, USA, Portland + New Castle', // carry-over
  f029404: 'min-ask, USA, Portland + New Castle', // carry-over
  f030203: 'min-ask, undefined', // carry-over
  f030384: 'min-ask, undefined', // carry-over
  f032913: 'min-ask, China, Shenzhen', // carry-over
  f032934: 'min-ask, Korea, Incheon', // carry-over
  f033123: 'min-ask, USA, Portland + New Castle', // carry-over
  f033511: 'min-ask, China, Dongguan', // carry-over
  f034047: 'min-ask, China, Hangzhou', // carry-over
  f034581: 'min-ask, NR', // carry-over
  f034592: 'min-ask, NR', // carry-over
  f042540: 'min-ask, China, Beijing + USA, Portland + Newcastle', // carry-over
  f042635: 'min-ask, China, Beijing + USA, Portland + Newcastle', // carry-over
  f050260: 'min-ask, China, Suzhou', // carry-over
  f052447: 'min-ask, China, Beijing + USA, Portland + New Castle', // carry-over
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
  f068898: 'min-ask, China, Fuzhou', // carry-over
  f069915: 'min-ask, NR', // carry-over
  f069919: 'min-ask, NR', // carry-over
  f070999: 'min-ask, China, Xinjiang', // carry-over
  f073552: 'min-ask, NR', // carry-over
  f073628: 'min-ask, USA, New Castle', // carry-over
  f073697: 'min-ask, China, Xinjiang', // carry-over
  f074738: 'min-ask, Korea, Seongbuk-gu', // carry-over
  f078522: 'min-ask, NR', // carry-over
  f078770: 'min-ask, China, Xinjiang', // carry-over
  f079197: 'min-ask, NR', // carry-over
  f079247: 'min-ask, USA, New Castle', // carry-over
  f079301: 'min-ask, USA, New Castle', // carry-over
  f082452: 'min-ask, China, Dongguan', // carry-over
  f083625: 'min-ask, China, Xinjiang', // carry-over
  f084879: 'min-ask, Korea, Seongnam-si', // carry-over

  // Error

  f01247: 'error, Canada, Montreal', // stream reset
  f01287: 'error, China, Jiaxing, MaiTian', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f02824: 'error, China, Chengdu', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f03328: 'error, China, Xinxiang, Golden Miner', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f03345: 'error, China, Fuzhou, chh', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f03482: 'error, China, Wuxi', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f04443: 'error, China, Shanghai, 罗良科技', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f07819: 'error, China, Wuxi, YC--wuxi', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f010400: 'error, China, Shenyang', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f010446: 'error, Netherlands, Angelo', // EOF
  f010491: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f010493: 'error, China, Shanghai', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f010498: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f010505: 'error, China, Wuhan, Interstellar Roewe', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f010523: 'error, China, Beijing, Interstellar Roewe', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f010528: 'error, China, Chongqing, Interstellar Roewe', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f015941: 'error, Ukraine, Kyiv', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 3.049999998024879575 FIL, balance: 3.020438288981019014 FIL): validation failure
  f018501: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f019029: 'error, Serbia, Boljevac', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.50506035068145108 FIL, balance: 0.484255063151084728 FIL): validation failure
  f019240: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f020436: 'error, China, Beijing', // stream reset
  f022522: 'error, China, Dongguan', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f024101: 'error, China, Guiyang', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f030125: 'error, China, Nantong', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f030335: 'error, China, Fujian', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f033549: 'error, China, Quzhou', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f034701: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f039515: 'error, China, Chongqing', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f042567: 'error, China, Jinhua', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f047858: 'error, China, Wuhan', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f048135: 'error, China, Chongqing, password interstellar', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f054163: 'error, China, Dongguan', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f055102: 'error, Vietman, Ho Chi Minh City + China', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f057115: 'error, China, Nanyang', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f058000: 'error, China, Suzhou', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f061158: 'error, China, Guangdong', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f062981: 'error, China, Sichuan', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f068096: 'error, China, Sichuan', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f080468: 'error, NR', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f083638: 'error, China, Chongqing', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f086423: 'error, China, Chengdu', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity

  // Backoff

  // Rejected

  f03364: 'rejected, China, Guangzhou', // piece size more than maximum allowed size: 268435456 > 1048576
  f03624: 'rejected, Germany, Chemnitz, ode', // no online
  f07709: 'rejected, Korea, Dongjak-gu', // piece size more than maximum allowed size: 134217728 > 1048576
  f08019: 'rejected, China, Yantai, 三合', // piece size more than maximum allowed size: 134217728 > 1048576
  f08403: 'rejected, UK, Lower Slaughter, TippyFlits', // Miner temporarily offline - BACK SOON
  f010617: 'rejected, Canada, Surrey, kernelogic2, @feiya200', // System maintenance
  f014324: 'rejected, Canada, Vancouver', // piece size more than maximum allowed size: 134217728 > 1048576
  f014409: 'rejected, USA, Waxhaw, Meatball Part III',
  f015233: 'rejected, China, Nanjing', // piece size more than maximum allowed size: 134217728 > 1048576
  f015942: 'rejected, China, Ningbo', // piece size more than maximum allowed size: 134217728 > 1048576
  f016511: 'rejected, China, Beijing', // piece size more than maximum allowed size: 134217728 > 1048576
  f017242: 'rejected, China, Guangdong', // piece size more than maximum allowed size: 134217728 > 1048576
  f017665: 'rejected, China, Shenyang', // piece size more than maximum allowed size: 134217728 > 1048576
  f019437: 'rejected, Korea, Guro-gu', // piece size more than maximum allowed size: 134217728 > 1048576
  f019551: 'rejected, UK, Birmingham, @Neofix AF', // 004 Deal price 0.0001300215 FIL is below minimum deal price 0.04 FIL (40000000000000000 attoFIL). Please increase price, size, or duration.
  f021075: 'rejected, China, Chengdu', // piece size more than maximum allowed size: 134217728 > 1048576
  f021716: 'rejected, New Zealand, Wellington', // piece size more than maximum allowed size: 134217728 > 1048576
  f024550: 'rejected, China, Wenzhou', // piece size more than maximum allowed size: 134217728 > 1048576
  f042391: 'rejected, China, Fuzhou', // piece size more than maximum allowed size: 134217728 > 1048576

  // Dial

  // XNR

  // Error during ask

  f01234: 'error-ask, Belgium, De Klinge, Eliovp', // carry-over
  f01291: 'error-ask, Sweden, Stockholm, tvsthlm', // carry-over
  f02619: 'error-ask, China, Beijing, Blockcasting', // carry-over
  f02822: 'error-ask, China, Chengdu', // carry-over
  f09569: 'error-ask, China, Beijing', // carry-over
  f010405: 'error-ask, China, Foshan', // carry-over
  f021265: 'error-ask, China, Wuhan', // carry-over
  f022227: 'error-ask, China, Jiangsu', // carry-over
  f023179: 'error-ask, China, Fuzhou', // carry-over
  f023205: 'error-ask, NR', // carry-over
  f023855: 'error-ask, China, Fuzhou', // carry-over
  f023859: 'error-ask, China, Fuzhou', // carry-over
  f024944: 'error-ask, Korea, Yeongdeungpo-dong', // carry-over
  f025025: 'error-ask, China, Qingdao', // carry-over
  f039235: 'error-ask, NR', // carry-over
  f039800: 'error-ask, China, Chengdu', // carry-over
  f042558: 'error-ask, China, Beijing + USA, Portland + Newcastle', // carry-over
  f050022: 'error-ask, China, Changsha', // carry-over
  f060072: 'error-ask, China, Chongqing', // carry-over
  f062353: 'error-ask, Germany, Frankfurt', // carry-over
  f065832: 'error-ask, Korea, Suncheon', // carry-over
  f070501: 'error-ask, USA + China, Hong Kong', // carry-over
  f078425: 'error-ask, Korea, Bucheon-si', // carry-over
  f078772: 'error-ask, NR', // carry-over
  f082669: 'error-ask, USA, Daytona Beach', // carry-over
  f085710: 'error-ask, China, Chengdu', // carry-over
  f086631: 'error-ask, Korea, Gwangju', // carry-over
  f087931: 'error-ask, China, Beijing' // carry-over
}

export default annotations
