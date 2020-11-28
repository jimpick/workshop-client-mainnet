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

  f01799: 'sealing, China, Jinan, TokenHome', // 1388210
  f02576: 'sealing, Denmark, Gjerlev, BenjaminH', // 1388474
  f09693: 'sealing, USA, Portland + Singapore, 6block-CapsuleMining', // 1388014
  f010241: 'sealing, China, Beijing + USA, Portland', // 1388164
  f015897: 'sealing, China, Guangdong', // 1389536
  f019100: 'sealing, Romania, Cluj-Napoca, noisyfan', // 1388425
  f019824: 'sealing, USA', // 1388742
  f020385: 'sealing, Korea, Incheon', // 1388428
  f022130: 'sealing, Korea, Seodaemun-gu', // 1389113
  f024156: 'sealing, USA', // 1389073
  f049882: 'sealing, Netherlands, De Rijp', // 1388473
  f055132: 'sealing, Vietman, Ho Chi Minh City + China', // 1388228
  f058374: 'sealing, USA', // 1389247
  f062318: 'sealing, Korea, Naju', // 1388234
  f065280: 'sealing, Korea, Songpa-gu', // 1389712
  f066596: 'sealing, USA, San Diego', // 1388356
  f067545: 'sealing, Canada, Kitchener', // 1388629
  f079817: "sealing, Russia, Ul'yanovka", // 1388211
  f080480: 'sealing, Ukraine, Lviv', // 1389139
  f083550: 'sealing, Korea, Hwaseong-si', // 1389308

  // Stuck

  f02423: 'stuck, Ukraine, Kyiv, igowreck', // CheckForAcceptance: about 3 hours
  f02665: 'stuck, Netherlands, Amsterdam, fm-ops', // CheckForAcceptance: about 3 hours
  f03224: 'stuck, Ukraine, Irpin, oboltusov', // CheckForAcceptance: about 3 hours
  f08285: 'stuck, Latvia, Riga, stander', // CheckForAcceptance: about 3 hours
  f08482: 'stuck, USA, Athol, @why', // CheckForAcceptance: about 3 hours
  f010513: 'stuck, China, Chongqing', // Transferring: about 3 hours
  f015747: 'stuck, Japan, Setagaya-ku', // Transferring: about 3 hours
  f016594: 'stuck, Germany', // CheckForAcceptance: about 3 hours
  f022163: 'stuck, dns:fil.akasha.network', // CheckForAcceptance: about 3 hours
  f023467: 'stuck, Norway, Oslo, PhiMining.io', // CheckForAcceptance: about 3 hours
  f025007: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f054677: 'stuck, Finland, Helsinki', // CheckForAcceptance: about 3 hours
  f057842: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 3 hours
  f062204: 'stuck, China, Hong Kong', // CheckForAcceptance: about 3 hours
  f063173: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 3 hours
  f064668: 'stuck, China, Hong Kong', // CheckForAcceptance: about 3 hours
  f065141: 'stuck, China, Fuzhou', // Transferring: about 3 hours
  f065732: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 3 hours
  f066566: 'stuck, Korea, Gwangju', // CheckForAcceptance: about 3 hours
  f066568: 'stuck, Korea, Gwangju', // CheckForAcceptance: about 3 hours
  f066898: 'stuck, Japan, Bunkyo-ku', // CheckForAcceptance: about 3 hours
  f067314: 'stuck, China, Ningbo', // Transferring: about 3 hours
  f071190: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 3 hours
  f073048: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 3 hours
  f073535: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: about 3 hours
  f073543: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f079847: 'stuck, China, Hong Kong', // CheckForAcceptance: about 3 hours
  f081323: 'stuck, UK, Basildon', // CheckForAcceptance: about 3 hours
  f083235: 'stuck, Serbia, Belgrade', // CheckForAcceptance: about 3 hours
  f085226: 'stuck, Korea, Busan', // CheckForAcceptance: about 3 hours
  f085899: 'stuck, China, Wuxi', // Transferring: about 3 hours
  f086610: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f087442: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f088305: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f088404: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f089201: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f089232: 'stuck, China, Ningxia', // CheckForAcceptance: about 3 hours

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

  f01240: 'error, Netherlands, HidNand', // deal failed: (State=26) error calling node: reserving funds: GasEstimateMessageGas error: estimating gas used: CallWithGas failed: failed to set up vm: failed to load hamt node: badger blockstore closed
  f01247: 'error, Canada, Montreal', // stream reset
  f01280: 'error, China, Wuxi, 了凡超算', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f01287: 'error, China, Jiaxing, MaiTian', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f02490: 'error, China, Fujian', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f02824: 'error, China, Chengdu', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f02856: 'error, China, Chengdu', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f03134: 'error, China, Cangzhou, 乔木信息', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f03222: 'error, China, Yuncheong, 星云矿池', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f03328: 'error, China, Xinxiang, Golden Miner', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f03339: 'error, China, Luzhou, benxun', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f03345: 'error, China, Fuzhou, chh', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f03482: 'error, China, Wuxi', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f04443: 'error, China, Shanghai, 罗良科技', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f07819: 'error, China, Wuxi, YC--wuxi', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f08103: 'error, China, Foshan, 花生酱肠粉', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f010400: 'error, China, Shenyang', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f010446: 'error, Netherlands, Angelo', // EOF
  f010491: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f010493: 'error, China, Shanghai', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f010498: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f010505: 'error, China, Wuhan, Interstellar Roewe', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f010523: 'error, China, Beijing, Interstellar Roewe', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f010528: 'error, China, Chongqing, Interstellar Roewe', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f014394: 'error, China, Suzhou, IPFSCloud', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f014395: 'error, China, Dongguan', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f015877: 'error, China, Jiaxing + USA', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f015941: 'error, Ukraine, Kyiv', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 3.049999998024879575 FIL, balance: 3.020438288981019014 FIL): validation failure
  f016276: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f018501: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f019029: 'error, Serbia, Boljevac', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.50506035068145108 FIL, balance: 0.484255063151084728 FIL): validation failure
  f019240: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f020436: 'error, China, Beijing', // stream reset
  f020489: 'error, China, Lioaning', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f022142: 'error, USA, Queens, Nelson SR2', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacedotatyc4xzbcx6me77sayyc5ybsfz4hjjbid677qycwhqll52jlo n 2017, TS: bafy2bzaceb6gput2f7dvlj2gnw7otrq6xmxcbodtaiwybhk7vaozzto2gs5lw n2017)
  f022261: 'error, China, Luzhou', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f022522: 'error, China, Dongguan', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f022853: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f024101: 'error, China, Guiyang', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f024511: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f025017: 'error, China, Hefei, 一三科技-913', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f030125: 'error, China, Nantong', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f030327: 'error, China, Beijing', // stream reset
  f030335: 'error, China, Fujian', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f033549: 'error, China, Quzhou', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f034701: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f039515: 'error, China, Chongqing', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f042567: 'error, China, Jinhua', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f047858: 'error, China, Wuhan', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f048135: 'error, China, Chongqing, password interstellar', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f048172: 'error, China, Suzhou', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f048192: 'error, China, Suzhou', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f054163: 'error, China, Dongguan', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f055102: 'error, Vietman, Ho Chi Minh City + China', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f056226: 'error, NR', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f057115: 'error, China, Nanyang', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f057466: 'error, China, Guangzhou', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f058000: 'error, China, Suzhou', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f060693: 'error, NR', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f061158: 'error, China, Guangdong', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f062981: 'error, China, Sichuan', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f063996: 'error, China, Sichuan', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f065103: 'error, USA, Portland + China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f067170: 'error, China, Jiangmen', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f067721: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f068096: 'error, China, Sichuan', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f070475: 'error, China, Guyuan', // stream reset
  f079425: 'error, NR', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f080444: 'error, China, Chengdu', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f080468: 'error, NR', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f082356: 'error, China, Jiaxing', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f083638: 'error, China, Chongqing', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f085904: 'error, China, Chongqing', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f086423: 'error, China, Chengdu', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f087807: 'error, Korea', // deal failed: (State=26) error calling node: AddFunds errored: handler: websocket connection closed
  f089210: 'error, Korea, Gyeonggi-do', // deal failed: (State=26) error calling node: AddFunds errored: failed to load message: blockstore: block not found
  f089311: 'error, Korea, Gyeonggi-do', // deal failed: (State=26) error calling node: AddFunds errored: failed to load message: blockstore: block not found

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
