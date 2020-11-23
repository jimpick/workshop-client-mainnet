// Slingshot test results
//
// Additional testing with files > 128MiB in size
//
// These are generated from a second round of testing after attempting
// to store a small file, see annotations-spacerace.js for those results

const annotations = {
  // Retest

  // Candidates

  f049882: 'active-candidate, Netherlands, De Rijp', // carry-over
  f02381: 'candidate, China, Dongguan, 西野七濑迷叔', // carry-over
  f02633: 'candidate, China, Hong Kong', // carry-over
  f050260: 'candidate, China, Suzhou', // carry-over
  f062260: 'candidate, China, Guangzhou', // carry-over

  // Active

  f02665: 'active, Netherlands, Amsterdam, fm-ops', // 1366536
  f03488: 'active, Korea, Geumcheon-gu', // 1366519
  f010446: 'active, Netherlands, Angelo', // 1366568
  f019243: 'active, USA, Jackson', // 1366513
  f020378: 'active, Bulgaria, Asenovgrad', // 1366376
  f022142: 'active, USA, Queens, Nelson SR2', // 1366493
  f022163: 'active, dns:fil.akasha.network', // 1366876
  f023009: 'active, USA, Berkeley, M32 Grenade Launcher', // 1366479
  f025007: 'active, Korea, Gyeonggi-do', // 1366866
  f047419: 'active, USA, Waukesha', // 1366525
  f054677: 'active, Finland, Helsinki', // 1366587
  f062518: 'active, Korea, Gwangju', // 1366515
  f065280: 'active, Korea, Songpa-gu', // 1366514
  f078954: 'active, Netherlands', // 1366578
  f079817: "active, Russia, Ul'yanovka", // 1366637
  f080103: 'active, Korea, Seongnam-si', // 1366563

  // Sealing (active-sealing = previously active, retesting with new deal)

  f01238: 'active-sealing, Vietnam, Hanoi, FILECOIN-VIETNAM', // 1369556
  f01240: 'active-sealing, Netherlands, HidNand', // 1369482
  f01278: 'active-sealing, USA, Grand Rapids, MiMiner', // 1369487
  f03339: 'active-sealing, China, Luzhou, benxun', // 1369475
  f05664: 'active-sealing, China, Shenzhen, 艾比特网络科技', // 1369565
  f08103: 'active-sealing, China, Foshan, 花生酱肠粉', // 1369623
  f010505: 'active-sealing, China, Wuhan, Interstellar Roewe', // 1369517
  f014409: 'active-sealing, USA, Waxhaw, Meatball Part III', // 1369650
  f018501: 'active-sealing, China, Beijing', // 1369612
  f020904: 'active-sealing, Korea, Uijeongbu-si, FILTop', // 1369595
  f022352: 'active-sealing, Norway, Borgen, TechHedge, @Reiers', // 1369486
  f022853: 'active-sealing, China, Fuzhou', // 1369545
  f024015: 'active-sealing, USA, Portland, FILmiPool-JP01', // 1369577
  f034701: 'active-sealing, China, Shenzhen', // 1369631
  f042567: 'active-sealing, China, Jinhua', // 1369608
  f047858: 'active-sealing, China, Wuhan', // 1369584
  f055102: 'active-sealing, NR', // 1369600
  f058000: 'active-sealing, China, Suzhou', // 1369588
  f065141: 'active-sealing, China, Fuzhou', // 1369598
  f066104: 'active-sealing, China, Xingjiang + USA, Portland', // 1369635
  f067170: 'active-sealing, China, Jiangmen', // 1369579
  f071914: 'active-sealing, China, Beijing', // 1369543

  // Sealing

  f01799: 'sealing, China, Jinan, TokenHome', // 1369613
  f02490: 'sealing, China, Fujian', // 1369546
  f02576: 'sealing, Denmark, Gjerlev, BenjaminH', // 1366860
  f02856: 'sealing, China, Chengdu', // 1369520
  f03134: 'sealing, China, Cangzhou, 乔木信息', // 1369629
  f03222: 'sealing, China, Yuncheong, 星云矿池', // 1369537
  f03224: 'sealing, Ukraine, Irpin, oboltusov', // 1369694
  f03345: 'sealing, China, Fuzhou, chh', // 1369661
  f07819: 'sealing, China, Wuxi, YC--wuxi', // 1369542
  f08157: 'sealing, China, Beijing + Germany, Frankfurt, 超星际', // 1366584
  f08240: 'sealing, Russia, Novosibirsk, Rabinovitch', // 1369707
  f09693: 'sealing, USA, Portland + Singapore, 6block-CapsuleMining', // 1366585
  f09848: 'sealing, USA, Irvine, BigBearLake', // 1369674
  f010241: 'sealing, China, Beijing + USA, Portland', // 1366314
  f010493: 'sealing, China, Shanghai', // 1369485
  f010501: 'sealing, China, Hangzhou, Interstellar Roewe', // 1369574
  f010528: 'sealing, China, Chongqing, Interstellar Roewe', // 1369515
  f014395: 'sealing, China, Dongguan', // 1369530
  f014768: 'sealing, Singapore, Funktafide, @Funk', // 1369677
  f015897: 'sealing, China, Guangdong', // 1366510
  f016594: 'sealing, Germany', // 1366486
  f019029: 'sealing, Serbia, Boljevac', // 1366575
  f020523: 'sealing, China, Suzhou', // 1369474
  f022261: 'sealing, China, Luzhou', // 1369602
  f022308: 'sealing, China, Shenzhen', // 1369555
  f022522: 'sealing, China, Dongguan', // 1369628
  f023581: 'sealing, China, Hong Kong', // 1366517
  f025017: 'sealing, China, Hefei, 一三科技-913', // 1369512
  f025019: 'sealing, China, Taiwan, Hsinchu', // 1366558
  f029368: 'sealing, Korea, Gangseo-gu', // 1366512
  f030335: 'sealing, China, Fujian', // 1369511
  f032913: 'sealing, China, Shenzhen', // 1369550
  f032934: 'sealing, Korea, Incheon', // 1366388
  f033549: 'sealing, China, Quzhou', // 1369636
  f034777: 'sealing, China, Chengdu', // 1369503
  f035436: 'sealing, China, Jiangsu', // 1369532
  f039515: 'sealing, China, Chongqing', // 1369514
  f047978: 'sealing, Korea, Seoul', // 1366516
  f053088: 'sealing, China, Shanghai', // 1366502
  f053916: 'sealing, USA, Concord', // 1369743
  f055132: 'sealing, NR', // 1366561
  f056573: 'sealing, China, Sichuan', // 1369597
  f057115: 'sealing, China, Nanyang', // 1369508
  f057368: 'sealing, Korea, Gyeonggi-do', // 1366581
  f057466: 'sealing, China, Guangzhou', // 1369564
  f057842: 'sealing, Korea, Gyeonggi-do', // 1366522
  f058168: 'sealing, Korea, Gyeonggi-do', // 1366586
  f062204: 'sealing, China, Hong Kong', // 1366626
  f062318: 'sealing, Korea, Naju', // 1369673
  f063996: 'sealing, China, Sichuan', // 1369578
  f064218: 'sealing, USA, Kirkland', // 1366442
  f064668: 'sealing, China, Hong Kong', // 1369691
  f065103: 'sealing, USA, Portland + China, Shenzhen', // 1366588
  f065200: 'sealing, China, Yibin', // 1369589
  f066596: 'sealing, USA, San Diego', // 1369644
  f066898: 'sealing, Japan, Bunkyo-ku', // 1366475
  f067314: 'sealing, China, Ningbo', // 1369488
  f067642: 'sealing, Japan, Ota-ku', // 1369725
  f067721: 'sealing, China, Beijing', // 1369551
  f068096: 'sealing, China, Sichuan', // 1369483
  f071190: 'sealing, Korea, Gyeonggi-do', // 1366518
  f071279: 'sealing, Korea, Gyeonggi-do', // 1366562
  f073499: 'sealing, Korea, Gyeonggi-do', // 1369690
  f078425: 'sealing, Korea, Bucheon-si', // 1366370
  f078522: 'sealing, NR', // 1369611
  f079334: 'sealing, Korea, Gyeonggi-do', // 1366595
  f079425: 'sealing, NR', // 1369493
  f080480: 'sealing, Ukraine, Lviv', // 1369586
  f081323: 'sealing, UK, Basildon', // 1366537
  f082356: 'sealing, China, Jiaxing', // 1369562
  f082613: 'sealing, Switzerland, Tenero', // 1366462
  f082669: 'sealing, USA, Daytona Beach', // 1369585
  f083235: 'sealing, Serbia, Belgrade', // 1369658
  f083550: 'sealing, Korea, Hwaseong-si', // 1369576

  // Stuck

  f010247: 'stuck, China, Yantai', // CheckForAcceptance: about 1 hour
  f010479: 'stuck, France, Fontenay-sous-Bois, s0nik42', // CheckForAcceptance: about 1 hour
  f010491: 'stuck, China, Shenzhen', // CheckForAcceptance: about 1 hour
  f010498: 'stuck, China, Shenzhen', // CheckForAcceptance: about 1 hour
  f014569: 'stuck, NR', // Transferring: about 1 hour
  f019240: 'stuck, China, Beijing', // CheckForAcceptance: about 1 hour
  f019362: 'stuck, China, Hangzhou', // CheckForAcceptance: about 1 hour
  f022130: 'stuck, Korea, Seodaemun-gu', // CheckForAcceptance: about 1 hour
  f023467: 'stuck, Norway, Oslo, PhiMining.io', // CheckForAcceptance: about 1 hour
  f044160: 'stuck, China, Guangzhou, muxing', // CheckForAcceptance: about 1 hour
  f048135: 'stuck, China, Chongqing', // CheckForAcceptance: about 1 hour
  f054163: 'stuck, China, Dongguan', // CheckForAcceptance: about 1 hour
  f056226: 'stuck, NR', // CheckForAcceptance: about 1 hour
  f060072: 'stuck, China, Chongqing', // CheckForAcceptance: about 1 hour
  f061158: 'stuck, China, Guangdong', // CheckForAcceptance: about 1 hour
  f066566: 'stuck, Korea, Gwangju', // CheckForAcceptance: about 1 hour
  f078741: 'stuck, China, Dongguan', // CheckForAcceptance: about 1 hour
  f079092: 'stuck, NR', // CheckForAcceptance: about 1 hour
  f082601: 'stuck, China, Guangdong', // CheckForAcceptance: about 1 hour
  f083065: 'stuck, China, Taizhou', // CheckForAcceptance: about 1 hour

  // Min-size

  f01234: 'min-size, Belgium, De Klinge, Eliovp', // 134217728 < 268435456
  f02419: 'min-size, China, Shanghai, yuantai', // 134217728 < 268435456
  f02620: 'min-size, Poland, Krakow, @magik6k', // 134217728 < 536870912
  f09569: 'min-size, China, Beijing', // 134217728 < 536870912
  f024184: 'min-size, Korea, Gangnam-gu, we4u-GREEN', // 134217728 < 1073741824
  f033356: 'min-size, Korea, Gangnum-gu, we4u-YELLOW', // 134217728 < 1073741824

  // Min-ask

  f01241: 'min-ask, USA, Portland, 6block', // carry-over
  f01276: 'min-ask, Canada, Brampton, NBFS Canada', // carry-over
  f01277: 'min-ask, Sweden, Stockholm, tvsthlm', // carry-over
  f01291: 'min-ask, Sweden, Stockholm, tvsthlm', // carry-over
  f02301: 'min-ask, USA', // carry-over
  f02387: 'min-ask, Canada, Brampton, NBFS Canada', // carry-over
  f02388: 'min-ask, Netherlands, Amersfoort, Kroketje', // carry-over
  f02401: 'min-ask, Canada, Chambly, NBFS Canada', // carry-over
  f02405: 'min-ask, China, Shenzhen', // carry-over
  f02415: 'min-ask, China, Hong Kong', // carry-over
  f02501: 'min-ask, USA, Portland, 6block', // carry-over
  f02514: 'min-ask, USA, Portland, 6block', // carry-over
  f02606: 'min-ask, China, Shanghai', // carry-over
  f02619: 'min-ask, China, Beijing, Blockcasting', // carry-over
  f02622: 'min-ask, USA, Portland, 6block', // carry-over
  f02623: 'min-ask, USA, Portland, 6block', // carry-over
  f02645: 'min-ask, China, Hong Kong', // carry-over
  f03273: 'min-ask, USA, Portland, 6block', // carry-over
  f03274: 'min-ask, USA, Portland, 6block', // carry-over
  f03275: 'min-ask, USA, Portland, 6block', // carry-over
  f03328: 'min-ask, China, Xinxiang, Golden Miner', // carry-over
  f03491: 'min-ask, China, Hong Kong', // carry-over
  f05315: 'min-ask, USA, Portland, 6block', // carry-over
  f05316: 'min-ask, USA, Portland, 6block', // carry-over
  f05317: 'min-ask, USA, Portland', // carry-over
  f07850: 'min-ask, USA, Portland, 6block', // carry-over
  f07919: 'min-ask, China, Beijing, Shanghai, Hunan', // carry-over
  f07990: 'min-ask, China, Hong Kong', // carry-over
  f07998: 'min-ask, China, Hangzhou', // carry-over
  f08025: 'min-ask, China, Hong Kong', // carry-over
  f08257: 'min-ask, China, Ningbo + USA, Boardman', // carry-over
  f08383: 'min-ask, USA, Portland, 6block', // carry-over
  f09696: 'min-ask, USA, Portland + Singapore', // carry-over
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
  f019100: 'min-ask, Romania, Cluj-Napoca, noisyfan', // carry-over
  f019104: 'min-ask, Canada, Chambly, NBFS DEV', // carry-over
  f020398: 'min-ask, China, Zhangjiakou', // carry-over
  f020541: 'min-ask, China, Shanghai', // carry-over
  f020747: 'min-ask, China, Xiamen', // carry-over
  f021265: 'min-ask, China, Wuhan', // carry-over
  f023001: 'min-ask, China, Changsha', // carry-over
  f023495: 'min-ask, China, Beijing + USA, Portland', // carry-over
  f023565: 'min-ask, China, Fuzhou', // carry-over
  f023660: 'min-ask, China, Fuzhou', // carry-over
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
  f024008: 'min-ask, China, Fuzhou', // carry-over
  f024012: 'min-ask, China, Fuzhou', // carry-over
  f024013: 'min-ask, China, Fuzhou', // carry-over
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
  f033123: 'min-ask, USA, Portland + New Castle', // carry-over
  f033511: 'min-ask, China, Dongguan', // carry-over
  f034047: 'min-ask, China, Hangzhou', // carry-over
  f034581: 'min-ask, NR', // carry-over
  f034592: 'min-ask, NR', // carry-over
  f039800: 'min-ask, China, Chengdu', // carry-over
  f039873: 'min-ask, China, Fuzhou', // carry-over
  f042540: 'min-ask, China, Beijing + USA, Portland + Newcastle', // carry-over
  f042558: 'min-ask, China, Beijing + USA, Portland + Newcastle', // carry-over
  f042635: 'min-ask, China, Beijing + USA, Portland + Newcastle', // carry-over
  f052447: 'min-ask, China, Beijing + USA, Portland + New Castle', // carry-over
  f054370: 'min-ask, China, Dongguan', // carry-over
  f056611: 'min-ask, USA, Portland + New Castle', // carry-over
  f057070: 'min-ask, NR', // carry-over
  f057614: 'min-ask, USA, Portland + New Castle', // carry-over
  f057698: 'min-ask, NR', // carry-over
  f061407: 'min-ask, China, Shenzhen', // carry-over
  f062334: 'min-ask, USA, Portland + New Castle', // carry-over
  f062353: 'min-ask, Germany, Frankfurt', // carry-over
  f062770: 'min-ask, China, Fuzhou', // carry-over
  f062811: 'min-ask, China, Fuzhou', // carry-over
  f062982: 'min-ask, China, Fuzhou', // carry-over
  f066845: 'min-ask, China, Dongguan', // carry-over
  f069915: 'min-ask, NR', // carry-over
  f069919: 'min-ask, NR', // carry-over
  f070999: 'min-ask, China, Xinjiang', // carry-over
  f071980: 'min-ask, China, Xinjiang', // carry-over
  f073552: 'min-ask, NR', // carry-over
  f073697: 'min-ask, China, Xinjiang', // carry-over
  f074738: 'min-ask, Korea, Seongbuk-gu', // carry-over
  f078770: 'min-ask, China, Xinjiang', // carry-over
  f078772: 'min-ask, NR', // carry-over
  f079197: 'min-ask, NR', // carry-over
  f082452: 'min-ask, China, Dongguan', // carry-over
  f083625: 'min-ask, China, Xinjiang', // carry-over

  // Error

  f01287: 'error, China, Jiaxing, MaiTian', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f02423: 'error, Ukraine, Kyiv, igowreck', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.04999999995012245 FIL, balance: 0.034276509808859806 FIL): not enough funds to execute transaction
  f02822: 'error, China, Chengdu', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f02823: 'error, undefined', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f03482: 'error, China, Wuxi', // deal failed: (State=26) error calling node: publishing deal: GasEstimateMessageGas error: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr f03482: escrow balance 27125296441382 < locked 31270221138 + required 32104003659322 (RetCode=19)
  f010400: 'error, China, Shenyang', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f010513: 'error, China, Chongqing', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f010523: 'error, China, Beijing, Interstellar Roewe', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f014394: 'error, China, Suzhou, IPFSCloud', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f015747: 'error, Japan, Setagaya-ku', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f015877: 'error, China, Jiaxing + USA', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f015941: 'error, Ukraine, Kyiv', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999969778316 FIL, balance: 0.025810006223454359 FIL): not enough funds to execute transaction
  f016276: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f020436: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f020489: 'error, China, Lioaning', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999959447336 FIL, balance: 0.045075440928374521 FIL): not enough funds to execute transaction
  f024511: 'error, China, Shenzhen', // stream reset
  f025025: 'error, China, Qingdao', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f040173: 'error, undefined', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.04999999999275876 FIL, balance: 0.010095805320803771 FIL): not enough funds to execute transaction
  f048172: 'error, China, Suzhou', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f048192: 'error, China, Suzhou', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f050022: 'error, China, Changsha', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f067195: 'error, undefined', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f073535: 'error, Korea, Gyeonggi-do', // deal failed: (State=26) error calling node: ensuring funds: mpool push: failed to push message: not enough funds (required: 0.080474634658089462 FIL, balance: 0.021311207309585118 FIL): not enough funds to execute transaction
  f073543: 'error, Korea, Gyeonggi-do', // deal failed: (State=26) error calling node: ensuring funds: mpool push: failed to push message: not enough funds (required: 0.077911510904238708 FIL, balance: 0.027583137217860364 FIL): not enough funds to execute transaction
  f079847: 'error, undefined', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.099999999993562428 FIL, balance: 0.032854514765557874 FIL): not enough funds to execute transaction
  f080471: 'error, undefined', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f082054: 'error, undefined', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity
  f082175: 'error, undefined', // failed to initiate data transfer: deal data transfer failed: channel removed due to inactivity

  // Backoff

  // Rejected

  f01247: 'rejected, Canada, Montreal', // piece size more than maximum allowed size: 134217728 > 1048576
  f03364: 'rejected, China, Guangzhou', // piece size more than maximum allowed size: 134217728 > 1048576
  f03624: 'rejected, Germany, Chemnitz, ode', // no online
  f07709: 'rejected, Korea, Dongjak-gu', // piece size more than maximum allowed size: 134217728 > 1048576
  f08019: 'rejected, China, Yantai, 三合', // piece size more than maximum allowed size: 134217728 > 1048576
  f08204: 'rejected, USA, St. Louis', // piece size more than maximum allowed size: 134217728 > 1048576
  f08403: 'rejected, UK, Lower Slaughter, TippyFlits', // Miner temporarily offline - BACK SOON
  f010399: 'rejected, China, Guangzhou', // piece size more than maximum allowed size: 134217728 > 1048576
  f010405: 'rejected, undefined',
  f010617: 'rejected, Canada, Surrey, kernelogic2, @feiya200', // System maintenance
  f014324: 'rejected, Canada, Vancouver', // piece size more than maximum allowed size: 134217728 > 1048576
  f015233: 'rejected, China, Nanjing', // piece size more than maximum allowed size: 134217728 > 1048576
  f016511: 'rejected, China, Beijing', // piece size more than maximum allowed size: 134217728 > 1048576
  f017242: 'rejected, China, Guangdong', // piece size more than maximum allowed size: 134217728 > 1048576
  f017665: 'rejected, China, Shenyang', // piece size more than maximum allowed size: 134217728 > 1048576
  f019437: 'rejected, undefined', // piece size more than maximum allowed size: 134217728 > 1048576
  f019551: 'rejected, UK, Birmingham, @Neofix AF', // 004 Deal price 0.00065150375 FIL is below minimum deal price 0.04 FIL (40000000000000000 attoFIL). Please increase price, size, or duration.
  f020385: 'rejected, Korea, Incheon', // piece size more than maximum allowed size: 134217728 > 1048576
  f021716: 'rejected, New Zealand, Wellington', // piece size more than maximum allowed size: 134217728 > 1048576
  f023179: 'rejected, China, Fuzhou', // piece size more than maximum allowed size: 134217728 > 1048576
  f024156: 'rejected, USA', // piece size more than maximum allowed size: 134217728 > 1048576
  f024182: 'rejected, NR', // piece size more than maximum allowed size: 134217728 > 1048576
  f024550: 'rejected, China, Wenzhou', // piece size more than maximum allowed size: 134217728 > 1048576
  f033517: 'rejected, undefined', // piece size more than maximum allowed size: 134217728 > 1048576
  f039235: 'rejected, NR', // piece size more than maximum allowed size: 134217728 > 1048576
  f042391: 'rejected, China, Fuzhou', // piece size more than maximum allowed size: 134217728 > 1048576
  f064222: 'rejected, China, Fuzhou', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f068890: 'rejected, undefined', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome

  // Dial

  // XNR

  // Error during ask

  f02500: 'error-ask, Korea, Seongnam-si', // carry-over
  f02520: 'error-ask, China, Hong Kong + Dongguan', // carry-over
  f04443: 'error-ask, China, Shanghai, 罗良科技',
  f015927: 'error-ask, USA, East Islip, CDImine', // carry-over
  f023662: 'error-ask, China, Fuzhou', // carry-over
  f024007: 'error-ask, China, Fuzhou', // carry-over
  f025044: 'error-ask, undefined', // carry-over
  f061740: 'error-ask, USA, Portland + New Castle' // carry-over
}

export default annotations
