// Small file test results
//
// Additional testing will be performed with larger files with
// selected miners

const annotations = {
  // Active

  // Active-sealing (active, with in-flight sealing)

  f01241: 'active-sealing, USA, Portland, 6block',
  f01272: 'active-sealing, Singapore',
  f02301: 'active-sealing, USA',
  f02401: 'active-sealing, Canada, Chambly, NBFS Canada',
  f02415: 'active-sealing, China, Hong Kong',
  f02490: 'active-sealing, China, Fujian',
  f02492: 'active-sealing, China, Shenzhen',
  f02501: 'active-sealing, USA, Portland, 6block',
  f02514: 'active-sealing, USA, Portland, 6block',
  f02622: 'active-sealing, USA, Portland, 6block',
  f02633: 'active-sealing, China, Hong Kong',
  f02645: 'active-sealing, China, Hong Kong',
  f03143: 'active-sealing, China, Shijiazhuang + Hong Kong',
  f03223: 'active-sealing, USA',
  f03273: 'active-sealing, USA, Portland, 6block',
  f03274: 'active-sealing, USA, Portland, 6block',
  f03275: 'active-sealing, USA, Portland, 6block',
  f03339: 'active-sealing, China, Luzhou, benxun',
  f03363: 'active-sealing, Singapore',
  f03488: 'active-sealing, Korea, Geumcheon-gu',
  f03491: 'active-sealing, China, Hong Kong',
  f03624: 'active-sealing, Germany, Chemnitz, ode',
  f05315: 'active-sealing, USA, Portland, 6block',
  f05316: 'active-sealing, USA, Portland, 6block',
  f05317: 'active-sealing, USA, Portland',
  f07824: 'active-sealing, China, Shanghai',
  f07850: 'active-sealing, USA, Portland, 6block',
  f07990: 'active-sealing, China, Hong Kong',
  f07998: 'active-sealing, China, Hangzhou',
  f08019: 'active-sealing, China, Yantai, 三合',
  f08025: 'active-sealing, China, Hong Kong',
  f08240: 'active-sealing, Russia, Novosibirsk, Rabinovitch',
  f08285: 'active-sealing, Latvia, Riga, stander',
  f08383: 'active-sealing, USA, Portland, 6block',
  f09693: 'active-sealing, USA, Portland + Singapore',
  f09696: 'active-sealing, USA, Portland + Singapore',
  f010088: 'active-sealing, DNS:purumine.com',
  f010241: 'active-sealing, China, Beijing + USA, Portland',
  f010247: 'active-sealing, China, Yantai',
  f010253: 'active-sealing, China, Beijing + USA, Portland',
  f010446: 'active-sealing, Netherlands',
  f010479: 'active-sealing, France, Fontenay-sous-Bois',
  f010505: 'active-sealing, China, Wuhan',
  f010507: 'active-sealing, China, Hangzhou',
  f010558: 'active-sealing, China, Shenzhen + Hong Kong',
  f014281: 'active-sealing, Netherlands, Permerend',
  f018780: 'active-sealing, Singapore + Germany, Frankfurt + USA',
  f018781: 'active-sealing, Singapore + Germany, Frankfurt + USA',
  f018782: 'active-sealing, Singapore + Germany, Frankfurt + USA',
  f018783: 'active-sealing, Singapore + Germany, Frankfurt + USA',
  f018784: 'active-sealing, Singapore + Germany, Frankfurt + USA',
  f018785: 'active-sealing, Singapore + Germany, Frankfurt + USA',
  f019029: 'active-sealing, Serbia, Boljevac',
  f019100: 'active-sealing, Romania, Cluj-Napoca',
  f019638: 'active-sealing, Germany, Frankfurt',
  f020928: 'active-sealing, China, Deyang + Singapore',
  f022227: 'active-sealing, China, Jiangsu',
  f022853: 'active-sealing, China, Fuzhou',
  f023200: 'active-sealing, China, Shanghai',
  f023490: 'active-sealing, Ukraine, Kyiv',
  f023495: 'active-sealing, China, Beijing + USA, Portland',
  f023526: 'active-sealing, China, Chongqing',
  f023825: 'active-sealing, USA, Portland',
  f023843: 'active-sealing, NR',
  f024015: 'active-sealing, USA, Portland',
  f024016: 'active-sealing, USA, Portland',
  f024468: 'active-sealing, China, Shenzhen',

  // Sealing

  f01240: 'sealing, Netherlands, HidNand',
  f01247: 'sealing, Canada, Montreal, BigChungus™',
  f01287: 'sealing, China, Jiaxing, MaiTian',
  f02299: 'sealing, China, Dongguan, Yolo',
  f02305: 'sealing, China, Dongguan',
  f02381: 'sealing, China, Dongguan, 西野七濑迷叔',
  f02387: 'sealing, Canada, Brampton, NBFS Canada',
  f02399: 'sealing, China, Zhejiang',
  f02405: 'sealing, China, Shenzhen',
  f02423: 'sealing, Ukraine, Kyiv, igowreck',
  f02500: 'sealing, Korea, Seongnam-si',
  f02606: 'sealing, China, Shanghai',
  f02619: 'sealing, China, Beijing, Blockcasting',
  f02623: 'sealing, USA, Portland, 6block',
  f02625: 'sealing, China, Shanghai, IPFS星际工厂',
  f02668: 'sealing, China, Chengdu',
  f03134: 'sealing, China, Cangzhou, 乔木信息',
  f03302: 'sealing, China, Chengdu',
  f03340: "sealing, China, Xi'an",
  f03482: 'sealing, China, Wuxi',
  f03512: 'sealing, New Zealand, Auckland, NZFILECOIN01',
  f04443: 'sealing, China, Shanghai, 罗良科技',
  f05664: 'sealing, China, Shenzhen, 艾比特网络科技',
  f08094: 'sealing, China, Guangzhou, dongshao',
  f08157: 'sealing, China, Beijing + Germany, Frankfurt, 超星际',
  f08220: 'sealing, China, Shenzhen',
  f08371: 'sealing, China, Chengdu',
  f08474: 'sealing, China, Hong Kong',
  f08482: 'sealing, USA, Athol, @why',
  f09675: 'sealing, China, Weifang',
  f09731: 'sealing, China, Guiyang',
  f09770: "sealing, China, Xi'an",
  f010257: 'sealing, China, Hong Kong, DNS:feiyuipfs.com',
  f010493: 'sealing, China, Shanghai',
  f010498: 'sealing, China, Shenzhen',
  f010501: 'sealing, China, Hangzhou',
  f010513: 'sealing, China, Chongqing',
  f014569: 'sealing, NR',
  f014768: 'sealing, Singapore',
  f015233: 'sealing, China, Nanjing',
  f015747: 'sealing, Japan, Setagaya-ku',
  f015877: 'sealing, China, Jiaxing + USA',
  f015941: 'sealing, Ukraine, Kyiv',
  f017970: 'sealing, China, Baoding',
  f018772: 'sealing, Australia',
  f019074: 'sealing, China, Guangdong',
  f019099: 'sealing, China, Hong Kong',
  f019118: 'sealing, China, Jiaxing',
  f019243: 'sealing, USA, Jackson',
  f019354: 'sealing, Germany, Frankfurt',
  f019362: 'sealing, China, Hangzhou',
  f019824: 'sealing, USA',
  f020398: 'sealing, China, Zhangjiakou',
  f020742: 'sealing, China, Shanghai + Hangzhou + Shaoxing',
  f020923: 'sealing, China, Cangzhou',
  f020975: 'sealing, China, Shandong',
  f021262: 'sealing, China, Shanghai',
  f021339: 'sealing, China, Jiaxing',
  f021444: 'sealing, China, Guangzhou',
  f021540: 'sealing, Germany, Frankfurt, @hsanjuan',
  f021583: 'sealing, China, Jiaxing',
  f021616: 'sealing, China, Shanghai',
  f022070: 'sealing, China, Jieyang',
  f022522: 'sealing, China, Dongguan',
  f022836: 'sealing, China, Chongqing',
  f022841: 'sealing, China, Zhongshan',
  f022913: 'sealing, Korea, Uiwang',
  f022969: 'sealing, China, Chengdu',
  f023179: 'sealing, China, Fuzhou',
  f023943: 'sealing, USA, Ashburn',
  f023971: 'sealing, USA, @Brian Y',
  f025017: 'sealing, China, Hefei',

  // Stuck

  f01234: 'stuck, Belgium, De Klinge, Eliovp', // CheckForAcceptance: about 3 hours
  f01279: 'stuck, China, Sichuan', // CheckForAcceptance: about 3 hours
  f01799: 'stuck, China, Jinan, TokenHome', // CheckForAcceptance: about 3 hours
  f01800: 'stuck, China, Shenzhen + Chengdu', // CheckForAcceptance: about 3 hours
  f02388: 'stuck, Netherlands, Amersfoort, Kroketje', // CheckForAcceptance: about 3 hours
  f02419: 'stuck, China, Shanghai, yuantai', // CheckForAcceptance: about 3 hours
  f02654: 'stuck, China, Shanghai', // CheckForAcceptance: about 3 hours
  f02665: 'stuck, Netherlands, Amsterdam, fm-ops', // CheckForAcceptance: about 3 hours
  f03176: 'stuck, USA, San Mateo, Five Star-Helmsman&Heiben', // CheckForAcceptance: about 3 hours
  f03224: 'stuck, Ukraine, Irpin, oboltusov', // CheckForAcceptance: about 3 hours
  f03345: 'stuck, China, Fuzhou, chh', // CheckForAcceptance: about 3 hours
  f03347: 'stuck, China, Shenzhen', // CheckForAcceptance: about 3 hours
  f03544: 'stuck, China, Guiyang', // CheckForAcceptance: about 2 hours
  f07709: 'stuck, Korea, Dongjak-gu', // FundsEnsured: about 2 hours
  f07806: 'stuck, China, Wuhan, HelloXP', // CheckForAcceptance: about 3 hours
  f08204: 'stuck, USA, St. Louis', // CheckForAcceptance: about 3 hours
  f09002: 'stuck, Singapore', // CheckForAcceptance: about 3 hours
  f09569: 'stuck, China, Beijing', // CheckForAcceptance: about 3 hours
  f09833: 'stuck, USA, San Jose', // CheckForAcceptance: about 3 hours
  f010048: 'stuck, China, Shanghai', // CheckForAcceptance: about 2 hours
  f010084: 'stuck, China, Beijing', // CheckForAcceptance: about 3 hours
  f010400: 'stuck, China, Shenyang', // CheckForAcceptance: about 3 hours
  f016056: 'stuck, USA, Arlington', // CheckForAcceptance: about 3 hours
  f017665: 'stuck, China, Shenyang', // CheckForAcceptance: about 2 hours
  f017734: 'stuck, Australia, Sydney', // CheckForAcceptance: about 3 hours
  f019024: 'stuck, China, Sichuan', // CheckForAcceptance: about 3 hours
  f019104: 'stuck, Canada, Chambly', // CheckForAcceptance: about 3 hours
  f019114: 'stuck, USA, Howell', // CheckForAcceptance: about 3 hours
  f019616: 'stuck, USA, Marlborough', // CheckForAcceptance: about 3 hours
  f020436: 'stuck, China, Beijing', // CheckForAcceptance: about 3 hours
  f020489: 'stuck, China, Lioaning', // CheckForAcceptance: about 3 hours
  f020523: 'stuck, China, Suzhou', // CheckForAcceptance: about 3 hours
  f020541: 'stuck, China, Shanghai', // CheckForAcceptance: about 3 hours
  f020904: 'stuck, Korea, Uijeongbu-si', // CheckForAcceptance: about 3 hours
  f021265: 'stuck, China, Wuhan', // CheckForAcceptance: about 3 hours
  f021274: 'stuck, China, Shanghai', // CheckForAcceptance: about 3 hours
  f021357: 'stuck, China, Shanghai', // CheckForAcceptance: about 3 hours
  f021870: 'stuck, USA, Portland', // CheckForAcceptance: about 3 hours
  f022125: 'stuck, China, Shenzhen', // CheckForAcceptance: about 3 hours
  f022202: 'stuck, USA, Howell', // CheckForAcceptance: about 3 hours
  f022289: 'stuck, China, Mianyang', // CheckForAcceptance: about 3 hours
  f022352: 'stuck, Norway, Borgen', // CheckForAcceptance: about 3 hours
  f022395: 'stuck, USA, Los Angeles', // CheckForAcceptance: about 3 hours
  f022399: 'stuck, China, Beijing', // CheckForAcceptance: about 3 hours
  f022566: 'stuck, China, Nanchong', // CheckForAcceptance: about 3 hours
  f022753: 'stuck, China, Hong Kong', // CheckForAcceptance: about 3 hours
  f022755: 'stuck, China, Shenzhen', // CheckForAcceptance: about 3 hours
  f022922: 'stuck, China, Shenzhen', // CheckForAcceptance: about 3 hours
  f023198: 'stuck, NR', // CheckForAcceptance: about 1 hour
  f023467: 'stuck, Norway, Oslo', // CheckForAcceptance: about 3 hours
  f023518: 'stuck, China, Taiyuan', // CheckForAcceptance: about 3 hours
  f023581: 'stuck, China, Hong Kong', // Transferring: about 3 hours
  f023643: 'stuck, NR', // CheckForAcceptance: about 2 hours
  f023854: 'stuck, China, Fuzhou', // CheckForAcceptance: about 3 hours
  f023939: 'stuck, NR', // CheckForAcceptance: about 3 hours
  f024030: 'stuck, Korea, Gwangju', // CheckForAcceptance: about 3 hours
  f024130: 'stuck, Korea', // CheckForAcceptance: about 3 hours
  f024521: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f024526: 'stuck, Korea', // CheckForAcceptance: about 3 hours
  f024550: 'stuck, China, Wenzhou', // CheckForAcceptance: about 3 hours
  f024565: 'stuck, Korea, Incheon', // CheckForAcceptance: about 3 hours
  f024617: 'stuck, Korea, Bucheon-si', // CheckForAcceptance: about 3 hours
  f024902: 'stuck, Korea, Incheon', // CheckForAcceptance: about 3 hours
  f024903: 'stuck, China, Mianyang', // CheckForAcceptance: about 3 hours
  f024983: 'stuck, China, Hong Kong', // CheckForAcceptance: about 3 hours
  f025007: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f025008: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f025019: 'stuck, China, Taiwan, Hsinchu', // CheckForAcceptance: about 3 hours

  // Busy

  // New

  // Min Size

  f01152: 'min-size, China, Beijing', // 131072 < 134217728
  f02417: 'min-size, China, Liaoning', // 131072 < 134217728
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 131072 < 1073741824
  f02620: 'min-size, Poland, Krakow, @magik6k', // 131072 < 536870912
  f07982: 'min-size, China, Shenzhen', // 131072 < 134217728
  f08091: 'min-size, USA', // 131072 < 134217728
  f08264: 'min-size, China, Xianning', // 131072 < 1048576
  f08403: 'min-size, UK, Lower Slaughter', // 131072 < 134217728
  f09848: 'min-size, USA', // 131072 < 134217728
  f010438: 'min-size, USA', // 131072 < 134217728
  f010617: 'min-size, Canada, Surrey, @feiya200', // 131072 < 134217728
  f014394: 'min-size, China, Suzhou', // 131072 < 134217728
  f014409: 'min-size, USA, Waxhaw', // 131072 < 262144000
  f015927: 'min-size, USA, East Islip', // 131072 < 134217728
  f016594: 'min-size, Germany', // 131072 < 134217728
  f018501: 'min-size, China, Beijing', // 131072 < 134217728
  f021075: 'min-size, China, Chengdu', // 131072 < 134217728
  f022142: 'min-size, USA, Queens', // 131072 < 262144000
  f022163: 'min-size, NR', // 131072 < 67108864
  f022309: 'min-size, Korea, Chuncheon', // 131072 < 134217728
  f022832: 'min-size, China', // 131072 < 134217728
  f023229: 'min-size, China, Shandong', // 131072 < 134217728
  f023678: 'min-size, China, Jiaxing', // 131072 < 134217728

  // Min Ask

  f01278: 'min-ask, USA, Grand Rapids, MiMiner', // 20000000 < 122070312
  f023013: 'min-ask, China, Hong Kong', // 20000000 < 24414062

  // Error

  f01276: 'error, Canada, Brampton, NBFS Canada', // deal failed: (State=26) error activating deal: failed to set up called handler: called check error (h: 125796): failed to look up deal on chain: deal 481897 not found
  f01782: 'error, China, Hong Kong + Singapore + USA, Portland, hellofil.com', // stream reset
  f02627: 'error, China, Guilin', // stream reset
  f02767: 'error, Germany, Frankfurt', // stream reset
  f02772: 'error, China, Chengdu', // stream reset
  f03002: 'error, China, Chongqing', // stream reset
  f03325: 'error, Germany, Frankfurt', // stream reset
  f07819: 'error, China, Wuxi, YC--wuxi', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 1.544134054915166529 FIL, balance: 1.444134058926145448 FIL): validation failure
  f07987: 'error, China, Beijing', // stream reset
  f08073: 'error, China, Qiqihar, QY7TT', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 4.22849627590489616 FIL, balance: 4.199234281678166071 FIL): validation failure
  f08532: 'error, USA', // stream reset
  f08854: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 1.085008256360253707 FIL, balance: 1.009093139418046558 FIL): validation failure
  f09639: 'error, China, Fuzhou', // deal failed: (State=11) error calling node: publishing deal: not enough funds (required: 0.09999999998061915 FIL, balance: 0.000025259918397467 FIL): not enough funds to execute transaction
  f09689: 'error, USA, Portland', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f010010: 'error, China, Changzhou + Hong Kong', // stream reset
  f010399: 'error, China, Guangzhou', // stream reset
  f010512: 'error, China, Zhengzhou', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.060606060565648684 FIL, balance: 0.034645150980643603 FIL): validation failure
  f010523: 'error, China, Beijing', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 33.056926173144724142 FIL, balance: 32.956926609011129828 FIL): validation failure
  f010528: 'error, China, Chongqing', // stream reset
  f014329: 'error, China, Hong Kong', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999962644144 FIL, balance: 0.044288846063250016 FIL): not enough funds to execute transaction
  f014472: 'error, China, Ningbo', // stream reset
  f014805: 'error, China, Ningbo', // stream reset
  f015647: 'error, China, Shenzhen', // stream reset
  f015709: 'error, China, Hefei', // EOF
  f015734: 'error, China, Qingdao', // deal failed: (State=26) error calling node: publishing deal: GasEstimateMessageGas error: estimating gas used: message execution failed: exit SysErrSenderStateInvalid(2), reason: actor balance less than needed: 0 FIL < 0.00000101 FIL (RetCode=2)
  f015753: 'error, China, Guyuan', // stream reset
  f015763: 'error, South Africa, Cape Town', // EOF
  f015771: 'error, Brazil, Sao Paulo', // stream reset
  f016482: 'error, USA, Aliquippa', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.09999999997665621 FIL, balance: 0.092586899488830095 FIL): not enough funds to execute transaction
  f016511: 'error, China, Beijing', // stream reset
  f017794: 'error, USA, Columbus', // stream reset
  f017795: 'error, USA, Columbus', // stream reset
  f018884: 'error, Russia', // stream reset
  f019022: "error, China, Xi'an", // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.09999999997840393 FIL, balance: 0.099368193103826642 FIL): not enough funds to execute transaction
  f019174: 'error, UK, Halifax', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999997182545 FIL, balance: 0.070383193180510758 FIL): not enough funds to execute transaction
  f019240: 'error, China, Beijing', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.09999999997059679 FIL, balance: 0.090861610601287934 FIL): not enough funds to execute transaction
  f019422: 'error, South Africa, Johannesburg', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: message nonce has too big a gap from expected nonce (Nonce: 37330, nextNonce: 5973): unfulfilled nonce gap
  f019437: 'error, Korea, Guro-gu', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.09999999998287419 FIL, balance: 0.021953850039883116 FIL): not enough funds to execute transaction
  f019645: 'error, Russia, St. Petersburg', // stream reset
  f019820: 'error, Germany', // stream reset
  f020315: 'error, China, Guangzhou', // stream reset
  f020605: 'error, China, Yibin', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.060606060523940415 FIL, balance: 0.044256451920894409 FIL): validation failure
  f020993: 'error, China, Hong Kong', // stream reset
  f021255: 'error, China, Suzhou + Netherlands', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999957649925 FIL, balance: 0.036362847973399456 FIL): not enough funds to execute transaction
  f021328: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999967615956 FIL, balance: 0.058993697109191307 FIL): not enough funds to execute transaction
  f021346: 'error, China, Shanghai', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 1.664877204817021638 FIL, balance: 1.591923227039515519 FIL): validation failure
  f021479: 'error, China, Qingdao', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzaceatbvagukaljqopa4mjree22luj3tcchdzx5y7jzyyjkyzgmlwgfq n 264899, TS: bafy2bzacecvxol7dqcb7w5t6j3zwqty5gavely4gmxweq2dbom2rowwnn7g5e n264899)
  f021535: 'error, China, Chengdu', // stream reset
  f021710: 'error, China, Shijiazhuang', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.0999999999931828 FIL, balance: 0.073557050472617886 FIL): not enough funds to execute transaction
  f022072: 'error, China, Jieyang', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacea632pjxdy5utmffs3wbqqpdphqccowyoiewq3ctuxwfsh3conmy6 n 3519, TS: bafy2bzaceca5s6gws25zgale5zdg2k72iwvnvpkahun4jwpyozt7g6klv3jnc n3519)
  f022089: 'error, China, Beijing', // stream reset
  f022119: 'error, USA, Lovettsville', // deal failed: (State=26) deal data verification failed: error generating CommP: failed to build treeCaused by:    0: failed to create data store    1: No such file or directory (os error 2)
  f022287: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999998653725 FIL, balance: 0.058993697109191307 FIL): not enough funds to execute transaction
  f022326: 'error, China, Zhongshan', // EOF
  f022376: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999975359848 FIL, balance: 0.012129636518618947 FIL): not enough funds to execute transaction
  f022512: 'error, Canada, Embrun', // EOF
  f022518: 'error, DNS:poseidon.technology', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: failed to dial 12D3KooWGCV8M5QGWAAt24p9EJcfL4NaSh7T8HHRivzFnyC6Aeve: no good addresses
  f022737: 'error, Korea, Gangnum-gu', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f022820: 'error, China, Guangdong', // stream reset
  f022855: 'error, Finland, Helsinki', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.09999999999574908 FIL, balance: 0.032905504620945114 FIL): not enough funds to execute transaction
  f023108: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.09999999998534055 FIL, balance: 0.012129636518618947 FIL): not enough funds to execute transaction
  f023181: 'error, DNS:poseidon.technology', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: failed to dial 12D3KooWL42QpczhsrHfWGC3L38LFac8vfibWfub8ELohMA1ZjjC: no good addresses
  f023219: 'error, NR', // stream reset
  f023501: 'error, China, Mianyang', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.019999999948811238 FIL, balance: 0.007982478148409904 FIL): not enough funds to execute transaction
  f023530: 'error, China, Shanghai', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f023571: 'error, NR', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999991826415 FIL, balance: 0.083325517967438165 FIL): not enough funds to execute transaction
  f023647: 'error, Korea, Gangseo-gu', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.0999999999540724 FIL, balance: 0.021953850039883116 FIL): not enough funds to execute transaction
  f023649: 'error, Korea, Seoul', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.09999999997281189 FIL, balance: 0.021953850039883116 FIL): not enough funds to execute transaction
  f023661: 'error, China, Zhejiang', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999961177338 FIL, balance: 0.016454260054526771 FIL): not enough funds to execute transaction
  f024025: 'error, China, Chengdu', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999994839045 FIL, balance: 0.03344345898820726 FIL): not enough funds to execute transaction
  f024074: 'error, NR', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999988848075 FIL, balance: 0.072440331173947729 FIL): not enough funds to execute transaction
  f024129: 'error, China, Zhejiang', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999987539512 FIL, balance: 0.093670516525413172 FIL): not enough funds to execute transaction
  f024156: 'error, USA', // AddPiece failed: adding piece to sector: writing piece: pieceCid error: generating piece commitment: Rust panic: no unwind information
  f024496: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999985592898 FIL, balance: 0.012129636518618947 FIL): not enough funds to execute transaction
  f024944: 'error, Korea, Yeongdeungpo-dong', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f024985: 'error, China, Shenzhen', // stream reset
  f024986: 'error, China, Zhongshan', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed

  // Dial backoff

  f02755: 'backoff, China, Shijiazhuang',
  f08937: 'backoff, China, Wuxi, YC--wuxi',
  f010005: 'backoff, China, Zhongshan',
  f010593: 'backoff, USA, East Islip',
  f014464: 'backoff, China, Hangzhou + Singapore',
  f015720: 'backoff, China, Ningbo',
  f015751: 'backoff, Canada, Huron East',
  f015812: 'backoff, Germany',
  f018803: 'backoff, Korea, Seodaemun-gu',
  f020631: 'backoff, China, Zhejiang',
  f022748: 'backoff, China, Xinyang',
  f022967: 'backoff, Korea, Seoul',

  // Rejected

  f01154: 'rejected, Sweden, Alvsjo', // sh: 0: getcwd() failed: No such file or directoryfalse
  f01231: 'rejected, Singapore',
  f01235: 'rejected, Singapore, IPFSMain',
  f01248: 'rejected, Germany, Frankfurt + China, Guangdong',
  f01277: 'rejected, Sweden, Stockholm, tvsthlm',
  f01280: 'rejected, China, Wuxi, 了凡超算',
  f01289: 'rejected, China, Hangzhou + USA',
  f01291: 'rejected, Sweden, Stockholm, tvsthlm', // sh: 1: dealfilter.pl: not found
  f01475: 'rejected, China, Wuhan + Germany', // getting client market balance failed
  f02303: 'rejected, China, Hong Kong + Jiangsu + Netherlands',
  f02420: 'rejected, China, Wuhan',
  f02421: 'rejected, China, Deyang + Singapore, 腾盛科技', // sh: 1: dealfilter.pl: not found
  f02422: "rejected, China, Xi'an",
  f02438: 'rejected, Singapore',
  f02503: 'rejected, China, Wuhan',
  f02520: 'rejected, China, Hong Kong + Dongguan',
  f02529: 'rejected, China, Chongqing',
  f02533: 'rejected, Spain, Terrassa, LowFeeValidation.com',
  f02609: 'rejected, USA',
  f02613: 'rejected, China, Chongqing',
  f02614: 'rejected, Singapore',
  f02621: "rejected, China, Xi'an",
  f02626: 'rejected, China, Guangzhou + Hong Kong',
  f02723: 'rejected, China, Hong Kong',
  f02770: 'rejected, China, Hong Kong', // deal.Proposal.Client(t3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a) not in whitelist
  f02775: 'rejected, China, Hong Kong', // deal.Proposal.Client(t3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a) not in whitelist
  f02838: 'rejected, China, Chengdu, IPFS Harbor-星际港湾',
  f03144: 'rejected, Germany, Frankfurt',
  f03194: 'rejected, China, Shenzhen, 成都云存&Npool',
  f03269: 'rejected, Australia', // getting client market balance failed
  f03326: 'rejected, USA, Seattle', // getting client market balance failed
  f03328: 'rejected, China, Xinxiang',
  f03344: 'rejected, China, Guangzhou', // no online
  f03358: 'rejected, Singapore',
  f03362: 'rejected, Germany, Berlin',
  f03367: 'rejected, Singapore',
  f03485: 'rejected, Netherlands', // getting client market balance failed
  f03519: 'rejected, USA', // getting client market balance failed
  f07969: 'rejected, China, Hangzhou, FME',
  f08103: 'rejected, China, Foshan, 花生酱肠粉',
  f08197: 'rejected, China, Foshan',
  f08203: 'rejected, Germany, Frankfurt',
  f08207: 'rejected, Australia, Brisbane',
  f08229: 'rejected, China, Nanchang',
  f08242: 'rejected, China, Weifang',
  f08257: 'rejected, China, Ningbo + USA, Boardman',
  f08399: 'rejected, USA, Sammamish',
  f08432: 'rejected, China, Taizhou', // node error getting client market balance failed: resolve address t3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a: actor not found
  f08572: 'rejected, Brazil, Sao Paulo', // getting client market balance failed
  f08985: 'rejected, USA',
  f09037: 'rejected, Singapore',
  f09087: 'rejected, USA',
  f09620: 'rejected, China, Weifang',
  f09642: 'rejected, Sweden, Alvsjo',
  f09652: 'rejected, Singapore',
  f09710: 'rejected, China, Jieyang',
  f09737: 'rejected, USA, Sudbury',
  f09825: 'rejected, China, Jinhua',
  f09964: 'rejected, China, Beijing + Jiaxing',
  f010056: 'rejected, Singapore',
  f010202: 'rejected, Singapore',
  f010225: 'rejected, China, Ordos',
  f010254: 'rejected, Japan, Minamata', // no online
  f010405: 'rejected, China, Foshan',
  f010419: 'rejected, China, Sichuan',
  f010491: 'rejected, China, Shenzhen', // no online
  f010538: 'rejected, China, Ordos',
  f010616: 'rejected, China, Ordos + Singapore',
  f014233: 'rejected, China, Shanghai', // no online
  f014251: 'rejected, Singapore',
  f014302: 'rejected, China, Ningbo',
  f014365: 'rejected, Australia, Marrickville + Japan, Heiwajima',
  f014392: 'rejected, Russia, Khabarovsk + USA + Japan, Heiwajima',
  f014395: 'rejected, China, Dongguan',
  f014487: 'rejected, China, Shanghai', // no online
  f014683: 'rejected, China, Shenzhen',
  f014686: 'rejected, Singapore',
  f014699: 'rejected, USA',
  f014701: 'rejected, China, Changzhou',
  f014706: 'rejected, China, Ordos',
  f014793: 'rejected, China, Hangzhou',
  f014804: 'rejected, China, Ordos',
  f014813: 'rejected, China, Hangzhou + USA',
  f015726: 'rejected, China, Qingdao',
  f015731: 'rejected, China, Ordos',
  f015737: 'rejected, Brazil, Sao Paulo', // getting client market balance failed
  f015767: 'rejected, Russia, Khabarovsk + Japan, Khabarovsk + USA',
  f015782: 'rejected, Australia', // getting client market balance failed
  f015848: 'rejected, China, Ordos',
  f015919: 'rejected, China, Ordos',
  f015925: 'rejected, China, Ordos',
  f015942: 'rejected, China, Ningbo',
  f016303: 'rejected, USA, Boardman', // This miner is for testing purposes only, it is no longer part of the slingshot competition
  f016306: 'rejected, USA, Boardman', // This miner is for testing purposes only, it is no longer part of the slingshot competition
  f016309: 'rejected, USA, Boardman', // This miner is for testing purposes only, it is no longer part of the slingshot competition
  f016398: 'rejected, Singapore',
  f016412: 'rejected, China, Taiwan, Taipei', // sh: ../dealfilter.pl: No such file or directory
  f016563: 'rejected, China, Deyang', // sh: 1: dealfilter.pl: not found
  f017229: 'rejected, USA, Portland',
  f019229: 'rejected, USA, Queens', // getting client market balance failed
  f019399: 'rejected, Korea, Busan', // no online
  f019661: 'rejected, Russia, Pyatigorsk', // 2020-10-08T00:57:53+03:00stdin: {  "Proposal": {    "PieceCID": {      "/": "baga6ea4seaqmbwgskh3esayeqfhdv2z5gvzjgnsm43g6wkiy67nmn2el5wkgmpy"    },    "PieceSize": 131072,    "VerifiedDeal": false,    "Client": "f3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a",    "Provider": "f019661",    "Label": "mAVWg5AIg1czC8JsXgtHbgvXkT/V8uOpsKfs9EIWvI2pEcJkisK4",    "StartEpoch": 132595,    "EndEpoch": 712603,    "StoragePricePerEpoch": "20000000",    "ProviderCollateral": "0",    "ClientCollateral": "0"  },  "ClientSignature": {    "Type": 2,    "Data": "hAROOjT7FJrQqS+9dVLSoqkgxhd8xLF9drtV0fIPWHeAXgVZTCPifHJJwTyOK0wDDnsIDQSveFWDGInUxCQ58TZCCJGJ6n/5zKL6KnD+U1FhqNM9z7VOtqQaKOeDP4VL"  },  "ProposalCid": {    "/": "bafyreifr3msvy3cg4onau77cmyk43uqas3ls4uka5rhankuzqqluo5457u"  },  "AddFundsCid": null,  "PublishCid": null,  "Miner": "12D3KooWGapQWB726LTfoWraBZFtt5f35cg9xtzozbUbsAMT69rm",  "Client": "12D3KooWAMNWKJ2R3XvgFmiDY8Xd59C7VNyUCUWe1rVeT5H4zfLF",  "State": 15,  "PiecePath": "",  "MetadataPath": "",  "SlashEpoch": 0,  "FastRetrieval": true,  "Message": "",  "StoreID": 65,  "FundsReserved": "0",  "Ref": {    "TransferType": "graphsync",    "Root": {      "/": "bafk2bzacedk4zqxqtmlyfuo3ql26it7vps4ou3bj7m6rbbnpenvei4ezekyk4"    },    "PieceCid": null,    "PieceSize": 0  },  "AvailableForRetrieval": false,  "DealID": 0,  "CreationTime": "2020-10-08T00:57:53.145139036+03:00"}Deal rejected unconditionally in lotus-miner-dealmaking-filter
  f020361: 'rejected, Colombia, Medellin',
  f020378: 'rejected, Bulgaria, Asenovgrad', // sh: 1: /mnt/SSD-Scratch/.lotusminer/dealfilter.pl: not found
  f020385: 'rejected, Korea, Incheon', // no online
  f020522: 'rejected, Singapore',
  f020648: 'rejected, China, Shenzhen',
  f020747: 'rejected, China, Xiamen', // sh: 1: dealfilter.pl: not found
  f021525: 'rejected, China, Guangdong',
  f021532: 'rejected, China, Shanghai',
  f021695: 'rejected, USA',
  f021714: 'rejected, China, Hong Kong',
  f021716: 'rejected, New Zealand, Wellington', // no online
  f022130: 'rejected, Korea, Seodaemun-gu', // no online
  f022373: 'rejected, Singapore',
  f023462: 'rejected, China, Chengdu',
  f023534: 'rejected, China, Chongqing',
  f023561: 'rejected, China, Shenzhen',
  f023565: 'rejected, China, Fuzhou',
  f023627: 'rejected, China, Zhongwei',
  f023660: 'rejected, China, Fuzhou',
  f023662: 'rejected, China, Fuzhou',
  f023853: 'rejected, China, Fuzhou',
  f023855: 'rejected, China, Fuzhou',
  f023858: 'rejected, China, Fuzhou',
  f023859: 'rejected, China, Fuzhou',
  f023861: 'rejected, China, Fuzhou',
  f023868: 'rejected, China, Fuzhou',
  f023869: 'rejected, China, Fuzhou',
  f023870: 'rejected, China, Fuzhou',
  f023871: 'rejected, China, Fuzhou',
  f023876: 'rejected, China, Fuzhou',
  f023928: 'rejected, China, Fuzhou',
  f023977: 'rejected, China, Fuzhou',
  f023978: 'rejected, China, Fuzhou',
  f023980: 'rejected, China, Fuzhou',
  f023981: 'rejected, China, Fuzhou',
  f023982: 'rejected, China, Chongqing',
  f023983: 'rejected, China, Chongqing',
  f023984: 'rejected, China, Chongqing',
  f023985: 'rejected, China, Chongqing',
  f024006: 'rejected, China, Fuzhou',
  f024007: 'rejected, China, Fuzhou',
  f024008: 'rejected, China, Fuzhou',
  f024012: 'rejected, China, Fuzhou',
  f024013: 'rejected, China, Fuzhou',
  f024014: 'rejected, China, Fuzhou',
  f024081: 'rejected, China, Fuzhou',
  f024084: 'rejected, China, Fuzhou',
  f024085: 'rejected, China, Fuzhou',
  f024127: 'rejected, China, Fuzhou',
  f024136: 'rejected, China, Fuzhou',
  f024146: 'rejected, China, Fuzhou',
  f024147: 'rejected, China, Fuzhou',
  f024148: 'rejected, China, Fuzhou',
  f024184: 'rejected, Korea, Gangnam-gu',
  f024611: 'rejected, China, Dongguan', // no online

  // Dial errors

  f01002: 'dial, NR - bootstrap', // * [/ip4/127.0.0.1/tcp/3452] dial tcp4 127.0.0.1:3452: connect: connection refused  * [/ip4/3.84.198.252/tcp/3452] dial tcp4 0.0.0.0:35209->3.84.198.252:3452: i/o timeout  * [/ip4/10.0.2.9/tcp/3452] dial tcp4 0.0.0.0:35209->10.0.2.9:3452: i/o timeout
  f01012: 'dial, China, Hong Kong + Guangzhou', // * [/ip4/127.0.0.1/tcp/8888] dial tcp4 127.0.0.1:8888: connect: connection refused  * [/ip4/43.230.90.191/tcp/8888] dial tcp4 43.230.90.191:8888: connect: connection refused  * [/ip4/183.60.252.190/tcp/8888] dial tcp4 183.60.252.190:8888: connect: connection refused
  f01100: 'dial, Serbia, Belgrade, filmine.io', // * [/ip4/93.86.63.113/tcp/12345] dial tcp4 93.86.63.113:12345: connect: connection refused
  f01151: 'dial, USA, Waxhaw', // * [/ip4/71.75.239.182/tcp/41372] dial tcp4 0.0.0.0:35209->71.75.239.182:41372: i/o timeout
  f01155: 'dial, China, Shanghai, DianCun Tech', // * [/ip4/203.107.44.156/tcp/39770] dial tcp4 0.0.0.0:35209->203.107.44.156:39770: i/o timeout
  f01229: 'dial, China, Hong Kong', // * [/ip4/43.231.187.27/tcp/1374] dial tcp4 0.0.0.0:35209->43.231.187.27:1374: i/o timeout
  f01236: 'dial, Singapore', // * [/ip4/170.33.12.95/tcp/16666] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNUoXrGukLWgDUR3F1A617D6yT99bzVrKwdUi53uGMKR4, but remote key matches 12D3KooWGijGVP9N8ebcJNNEEPEGDhWbSJbsW2KtWeqVa5MQvTBx
  f01238: 'dial, Vietnam, Hanoi, FILECOIN-VIETNAM', // * [/ip4/210.245.49.112/tcp/12345] dial tcp4 210.245.49.112:12345: connect: connection refused
  f01243: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64001] dial tcp4 178.212.192.216:64001: connect: connection refused
  f01275: 'dial, Korea, Seongnam-si', // * [/ip4/221.163.91.162/tcp/32230] dial tcp4 0.0.0.0:35209->221.163.91.162:32230: i/o timeout
  f01288: 'dial, China, Yibin, BlackStone', // * [/ip4/101.206.243.3/tcp/39695] dial tcp4 101.206.243.3:39695: connect: connection refused
  f01801: 'dial, Switzerland, Baar, Gogoșel, DNS:akasha.network', // * [/ip4/46.101.187.50/tcp/10222] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHMxq8H6gBb1nxH6YknwX1ZsisFBTgtKJJTWfruBKNKA8, but remote key matches 12D3KooWDXMs6HMEdL7ein6hBWJHv42g7VMGWwUEgH8gYZ8kELYT
  f02307: 'dial, China, Taiyuan, filecoin.monster', // * [/ip4/34.92.71.77/tcp/12345] dial tcp4 0.0.0.0:35209->34.92.71.77:12345: i/o timeout
  f02383: 'dial, China, Shenzhen', // * [/ip4/183.60.90.5/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKzBf1z9Tm6rW1RUXfmPVooKYxan8NzjRmYq9iF8QZsJu, but remote key matches 12D3KooWSD4BWsHzUgnMnDEAMrLpyQAPFQsyHp9KR5a9A2P1hFbc
  f02386: 'dial, Latvia, Riga', // * [/ip4/91.105.126.144/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPV9PbYzkJgaaxaQ2d79RNkJWWjdC5eBXtmLsWAUwqLMT, but remote key matches 12D3KooWBBghMwnobTZP1Buw72KVEuzURgLPUYaq5WRF1wcygy9C
  f02400: 'dial, China, Beijing', // * [/ip4/36.112.26.4/tcp/47996] dial tcp4 36.112.26.4:47996: connect: connection refused
  f02403: 'dial, UK, London, AIM', // * [/ip4/2.58.45.33/tcp/18888] dial tcp4 0.0.0.0:35209->2.58.45.33:18888: i/o timeout  * [/ip4/2.58.47.71/tcp/18888] dial tcp4 0.0.0.0:35209->2.58.47.71:18888: i/o timeout
  f02414: "dial, China, Xi'an, zhejiangyunchu", // * [/ip4/113.142.1.86/tcp/56768] dial tcp4 113.142.1.86:56768: connect: connection refused
  f02416: 'dial, China, Guangdong, 星际无限', // * [/ip4/103.142.248.7/tcp/2347] dial tcp4 103.142.248.7:2347: connect: connection refused
  f02418: 'dial, China, Fujian + Netherlands', // * [/ip4/117.48.133.69/tcp/1348] dial tcp4 0.0.0.0:35209->117.48.133.69:1348: i/o timeout  * [/ip4/185.232.59.180/tcp/1348] dial tcp4 0.0.0.0:35209->185.232.59.180:1348: i/o timeout
  f02425: 'dial, USA', // * [/ip4/103.78.229.73/tcp/14567] dial tcp4 103.78.229.73:14567: connect: connection refused
  f02505: 'dial, China, Wuhan', // * [/ip4/101.32.33.237/tcp/18899] dial tcp4 0.0.0.0:35209->101.32.33.237:18899: i/o timeout
  f02516: 'dial, China, Hong Kong', // * [/ip4/119.28.87.115/tcp/2301] dial tcp4 0.0.0.0:35209->119.28.87.115:2301: i/o timeout
  f02519: 'dial, Brazil, Sao Paulo', // * [/ip4/52.67.40.200/tcp/10240] dial tcp4 0.0.0.0:35209->52.67.40.200:10240: i/o timeout
  f02528: 'dial, China, Hong Kong + Inner Mongolia', // * [/ip4/8.209.70.199/tcp/58692] dial tcp4 0.0.0.0:35209->8.209.70.199:58692: i/o timeout
  f02532: 'dial, Singapore', // * [/ip4/170.33.12.117/tcp/8007] dial tcp4 0.0.0.0:35209->170.33.12.117:8007: i/o timeout
  f02534: 'dial, China, Beijing', // * [/ip4/123.58.99.210/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQEAUZycQ6zXsGtQd74vzTkCfPD8rQzWFnbUvK6Qenarc, but remote key matches 12D3KooWCYNTXskYDLQM7rRydZDGAfLiCPfneN1NjmnCBXpMBW49
  f02540: 'dial, USA, Rochester', // * [/ip4/72.225.48.102/tcp/10240] dial tcp4 72.225.48.102:10240: connect: no route to host
  f02574: 'dial, Japan, Minamata', // * [/ip4/203.189.40.203/tcp/10250] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWDxS9DwK3FRT3Kf3tSN5j9jMqVg29Vx4GXu3uM9rDzGm2, but remote key matches 12D3KooWKAEN1NS8msS2LBg2c6cLMBFP4BnZLdsHMCz5z85a8fhT
  f02577: 'dial, China, Hong Kong + Russia, Khabarovsk + Japan, Heiwajima', // * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: connection refused  * [/ip4/66.42.38.110/tcp/9997] dial tcp4 0.0.0.0:35209->66.42.38.110:9997: i/o timeout  * [/ip4/43.243.100.31/tcp/6777] dial tcp4 0.0.0.0:35209->43.243.100.31:6777: i/o timeout
  f02607: 'dial, China, Beijing', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f02610: 'dial, Netherlands', // * [/ip4/213.227.129.197/tcp/14567] dial tcp4 213.227.129.197:14567: connect: connection refused
  f02624: 'dial, China, Shanghai, filecoin.cn', // * [/ip4/61.173.81.255/tcp/65501] dial tcp4 0.0.0.0:35209->61.173.81.255:65501: i/o timeout
  f02632: 'dial, China, Tianjin', // * [/ip4/150.129.138.199/tcp/8518] dial tcp4 0.0.0.0:35209->150.129.138.199:8518: i/o timeout
  f02657: 'dial, China, Ordos-xfr', // * [/ip4/1.183.72.226/tcp/12308] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLTNxtSBmMCy7VNXNSE8tZVPURHB2onSRTpJqkjWGEitm, but remote key matches 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg
  f02658: 'dial, China, Ningbo, bluematrix', // * [/ip4/112.15.188.130/tcp/3698] dial tcp4 0.0.0.0:35209->112.15.188.130:3698: i/o timeout  * [/ip4/123.137.128.188/tcp/3698] dial tcp4 0.0.0.0:35209->123.137.128.188:3698: i/o timeout
  f02664: 'dial, China, Hangzhou, ciger', // * [/ip4/111.0.120.74/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLfsqniYPeGBvMZN7StQzhgzTG9TB6M2gTNsvs5eDiTQM, but remote key matches 12D3KooWQb1CpdSujwXeyMJroR8qAkekXiZdNXVPKqis5ENXZGVw
  f02721: 'dial, USA', // * [/ip4/135.90.74.200/tcp/14567] dial tcp4 0.0.0.0:35209->135.90.74.200:14567: i/o timeout
  f02725: 'dial, China, Hong Kong', // * [/ip4/101.32.38.57/tcp/18899] dial tcp4 0.0.0.0:35209->101.32.38.57:18899: i/o timeout
  f02726: 'dial, USA, Brooklyn', // * [/ip4/169.62.51.212/tcp/14567] dial tcp4 0.0.0.0:35209->169.62.51.212:14567: i/o timeout
  f02731: 'dial, Singapore', // * [/ip4/10.30.8.4/tcp/14567] dial tcp4 10.30.8.4:14567: connect: no route to host
  f02732: 'dial, USA', // * [/ip4/141.125.99.190/tcp/14567] dial tcp4 0.0.0.0:35209->141.125.99.190:14567: i/o timeout
  f02773: 'dial, China, Chengdu', // * [/ip4/118.123.228.198/tcp/48633] dial tcp4 118.123.228.198:48633: connect: connection refused
  f03021: 'dial, China, Hong Kong', // * [/ip4/34.96.185.143/tcp/10240] dial tcp4 34.96.185.143:10240: connect: connection refused  * [/ip4/27.213.97.148/tcp/10240] dial tcp4 0.0.0.0:35209->27.213.97.148:10240: i/o timeout
  f03120: 'dial, China, Guangzhou', // * [/ip4/0.0.0.0/tcp/34566] dial tcp4 0.0.0.0:34566: connect: connection refused
  f03131: 'dial, China, Changsha', // * [/ip4/124.233.0.157/tcp/7002] dial tcp4 124.233.0.157:7002: connect: connection refused
  f03136: "dial, China, Xi'an, Zhejiang Yun Chu Technology Co., Ltd, sat", // * [/ip4/47.57.8.77/tcp/18557] dial tcp4 0.0.0.0:35209->47.57.8.77:18557: i/o timeout
  f03140: 'dial, China, QingDao', // * [/ip4/61.147.123.83/tcp/12222] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGmqm4wXHomWgVABsyRksKz5VXXVSApcceT1ocVBfsaCL, but remote key matches 12D3KooWEwibwjtCTXD4UALEpJU65LStZg8thKDFUxzjyTzGHssq
  f03149: 'dial, USA, Newton', // * [/ip6/2600:8803:3000:2430:0:ff:fde6:85d5/tcp/2889] dial tcp6 [2600:8803:3000:2430:0:ff:fde6:85d5]:2889: connect: network is unreachable  * [/ip4/68.102.245.161/tcp/2889] dial tcp4 68.102.245.161:2889: connect: connection refused
  f03220: 'dial, China, Ordos', // * [/ip4/1.183.72.226/tcp/12309] dial tcp4 0.0.0.0:35209->1.183.72.226:12309: i/o timeout
  f03222: 'dial, China, Yuncheong, 星云矿池', // * [/ip4/45.137.217.231/tcp/3388] dial tcp4 45.137.217.231:3388: connect: connection refused  * [/ip4/111.53.69.85/tcp/2266] dial tcp4 111.53.69.85:2266: connect: connection refused
  f03225: 'dial, China, Guyuan', // * [/ip4/10.100.0.2/tcp/11111] dial tcp4 10.100.0.2:11111: i/o timeout
  f03245: 'dial, USA, Los Angeles', // * [/ip4/120.133.36.67/tcp/23456] dial tcp4 0.0.0.0:35209->120.133.36.67:23456: i/o timeout
  f03266: 'dial, USA', // * [/ip4/169.63.27.151/tcp/14567] dial tcp4 0.0.0.0:35209->169.63.27.151:14567: i/o timeout
  f03276: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/41112] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCErnjDuHG4fe7pGpe8xWGSQPr9Zq9AteTg9kf4QERBFm, but remote key matches 12D3KooWFKKhmTQyDpXH8HFnUZhVjsu2f8r96m5dFkqJnWxFozc5
  f03286: 'dial, China, Mianyang', // * [/ip4/112.44.246.189/tcp/23455] dial tcp4 0.0.0.0:35209->112.44.246.189:23455: i/o timeout
  f03287: 'dial, USA', // * [/ip4/149.81.122.165/tcp/14567] dial tcp4 0.0.0.0:35209->149.81.122.165:14567: i/o timeout
  f03305: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.52/tcp/7000] dial tcp4 0.0.0.0:35209->197.231.176.52:7000: i/o timeout
  f03306: 'dial, Australia', // * [/ip4/103.29.66.54/tcp/7000] dial tcp4 0.0.0.0:35209->103.29.66.54:7000: i/o timeout
  f03307: 'dial, Australia', // * [/ip4/47.74.68.141/tcp/7001] dial tcp4 0.0.0.0:35209->47.74.68.141:7001: i/o timeout
  f03312: 'dial, China, Beijing', // * [/ip4/8.210.13.50/tcp/45678] dial tcp4 8.210.13.50:45678: connect: connection refused  * [/ip4/119.161.169.68/tcp/45678] dial tcp4 0.0.0.0:35209->119.161.169.68:45678: i/o timeout
  f03314: 'dial, China, Zhangjiakou-xfr', // * [/ip4/45.113.32.176/tcp/1112] dial tcp4 0.0.0.0:35209->45.113.32.176:1112: i/o timeout
  f03317: 'dial, China, Shenzhen + Hong Kong + Jieyang', // * [/ip4/170.33.12.164/tcp/9090] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPMgigioxtnUsBqwBemuuxjZLKKpfhT3FmrWumyWDkQEd, but remote key matches 12D3KooWDkgbKexne42yFhovBdv7dEnZA4XpXYchEQpvEKpg2qTJ
  f03320: 'dial, bcm', // * [/ip4/183.36.3.160/tcp/11850] dial tcp4 0.0.0.0:35209->183.36.3.160:11850: i/o timeout
  f03327: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.51/tcp/7000] dial tcp4 0.0.0.0:35209->197.231.176.51:7000: i/o timeout
  f03337: 'dial, China, Sichuan, 朝日&网科巨力', // * [/ip4/118.116.2.61/tcp/25033] dial tcp4 118.116.2.61:25033: connect: connection refused  * [/ip4/118.116.2.60/tcp/25033] dial tcp4 118.116.2.60:25033: connect: connection refused
  f03350: 'dial, China, Wuhan', // * [/ip4/170.33.12.188/tcp/7000] dial tcp4 170.33.12.188:7000: i/o timeout  * [/ip4/170.33.12.187/tcp/7000] dial tcp4 170.33.12.187:7000: i/o timeout
  f03351: 'dial, China, Chengdu', // * [/ip4/182.140.253.150/tcp/10000] dial tcp4 0.0.0.0:35209->182.140.253.150:10000: i/o timeout
  f03359: 'dial, China, Shanghai', // * [/ip4/47.245.138.110/tcp/2347] dial tcp4 0.0.0.0:35209->47.245.138.110:2347: i/o timeout
  f03360: 'dial, China, Shaanxi', // * [/ip4/111.19.155.65/tcp/23451] dial tcp4 0.0.0.0:35209->111.19.155.65:23451: i/o timeout
  f03364: 'dial, China, Guangzhou', // * [/ip4/183.236.93.137/tcp/5472] dial tcp4 0.0.0.0:35209->183.236.93.137:5472: i/o timeout
  f03365: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7084] dial tcp4 0.0.0.0:35209->193.118.43.158:7084: i/o timeout
  f03366: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7000] dial tcp4 0.0.0.0:35209->193.118.43.158:7000: i/o timeout
  f03427: 'dial, Russia, airalab', // * [/ip4/82.148.21.37/tcp/46717] dial tcp4 0.0.0.0:35209->82.148.21.37:46717: i/o timeout
  f03484: 'dial, Netherlands', // * [/ip4/89.149.209.98/tcp/7000] dial tcp4 0.0.0.0:35209->89.149.209.98:7000: i/o timeout
  f03490: 'dial, China, Dongguan', // * [/ip4/121.12.167.179/tcp/41113] dial tcp4 121.12.167.179:41113: connect: connection refused
  f03515: 'dial, China, Dongguan', // * [/ip4/113.105.174.3/tcp/23456] dial tcp4 0.0.0.0:35209->113.105.174.3:23456: i/o timeout
  f03517: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7082] dial tcp4 0.0.0.0:35209->193.118.43.158:7082: i/o timeout
  f03523: 'dial, China, Wuxi, YC--wuxi', // * [/ip4/192.168.1.12/tcp/1001] dial tcp4 192.168.1.12:1001: i/o timeout  * [/ip4/58.215.232.74/tcp/10010] dial tcp4 58.215.232.74:10010: i/o timeout
  f03548: 'dial, Singapore', // * [/ip4/8.209.82.79/tcp/14567] dial tcp4 0.0.0.0:35209->8.209.82.79:14567: i/o timeout
  f03620: 'dial, Germany, Frankfurt', // * [/ip4/23.90.146.133/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGVzpdJUqbWmDEuY683SGSdBjUHdpLCwEfB9VvYzKp9LG, but remote key matches 12D3KooWR8VP6fPqS21Rpxo23FE6h425sQEzvtMNJ7jPWLAo3drk
  f03630: 'dial, China, Wuhan', // * [/ip4/170.33.12.186/tcp/17000] dial tcp4 170.33.12.186:17000: i/o timeout  * [/ip4/170.33.12.78/tcp/17000] dial tcp4 170.33.12.78:17000: i/o timeout
  f03638: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f03646: 'dial, China, Beijing, JingTang', // * [/ip4/123.125.194.158/tcp/5678] dial tcp4 0.0.0.0:35209->123.125.194.158:5678: i/o timeout
  f03702: 'dial, China, Shenzhen + Singapore, LianDongJingLing', // * [/ip4/8.209.113.21/tcp/7002] dial tcp4 0.0.0.0:35209->8.209.113.21:7002: i/o timeout  * [/ip4/218.17.190.89/tcp/10240] dial tcp4 0.0.0.0:35209->218.17.190.89:10240: i/o timeout
  f03764: 'dial, China, Beijing, foobar', // * [/ip4/123.115.217.138/tcp/24002] dial tcp4 0.0.0.0:35209->123.115.217.138:24002: i/o timeout
  f03766: 'dial, China, Weifang', // * [/ip4/111.17.220.237/tcp/6666] dial tcp4 0.0.0.0:35209->111.17.220.237:6666: i/o timeout
  f04921: 'dial, China, Shanghai', // * [/ip4/121.46.237.2/tcp/51818] dial tcp4 0.0.0.0:35209->121.46.237.2:51818: i/o timeout
  f06775: 'dial, China, Shenzhen, IPSB&CAAP', // * [/ip4/103.39.218.169/tcp/2346] dial tcp4 0.0.0.0:35209->103.39.218.169:2346: i/o timeout
  f07451: 'dial, China, Hangzhou', // * [/ip4/221.12.20.5/tcp/6000] dial tcp4 0.0.0.0:35209->221.12.20.5:6000: i/o timeout
  f07710: 'dial, Hong Kong', // * [/ip4/65.181.71.9/tcp/5472] dial tcp4 65.181.71.9:5472: i/o timeout
  f07752: 'dial, China, Dongguan', // * [/ip4/103.43.85.202/tcp/18888] dial tcp4 103.43.85.202:18888: i/o timeout
  f07756: 'dial, DNS:purumine.com', // * [/ip4/50.47.110.164/tcp/1347] dial tcp4 0.0.0.0:35209->50.47.110.164:1347: i/o timeout
  f07774: 'dial, China, Shenzhen', // * [/ip4/103.40.249.210/tcp/33455] dial tcp4 103.40.249.210:33455: connect: connection refused
  f07775: 'dial, China, Shenzhen', // * [/ip4/103.40.249.211/tcp/33455] dial tcp4 103.40.249.211:33455: connect: no route to host
  f07810: 'dial, Korea', // * [/ip4/61.111.129.217/tcp/33333] dial tcp4 61.111.129.217:33333: connect: connection refused
  f07826: 'dial, China, Shenzhen, 星际医生', // * [/ip4/183.12.27.145/tcp/8888] dial tcp4 0.0.0.0:35209->183.12.27.145:8888: i/o timeout
  f07829: 'dial, Japan', // * [/ip4/163.44.165.168/tcp/30222] dial tcp4 163.44.165.168:30222: i/o timeout
  f07830: 'dial, Singapore', // * [/ip4/8.209.102.106/tcp/14567] dial tcp4 0.0.0.0:35209->8.209.102.106:14567: i/o timeout
  f07833: 'dial, China, Changzhou, 星巢', // * [/ip4/107.155.16.239/tcp/20480] dial tcp4 107.155.16.239:20480: connect: connection refused  * [/ip4/107.155.3.37/tcp/20480] dial tcp4 0.0.0.0:35209->107.155.3.37:20480: i/o timeout
  f07848: 'dial, China, Wuhan', // * [/ip4/58.211.11.130/tcp/1024] dial tcp4 58.211.11.130:1024: connect: no route to host
  f07851: 'dial, Netherlands, Purmerend', // * [/ip4/212.32.243.209/tcp/2347] dial tcp4 212.32.243.209:2347: i/o timeout
  f07857: 'dial, China, Zhengzhou', // * [/ip4/117.160.206.175/tcp/40131] dial tcp4 117.160.206.175:40131: connect: connection refused
  f07919: 'dial, China, Beijing, Shanghai, Hunan', // * [/ip4/8.210.72.158/tcp/23456] failed to negotiate security protocol: read tcp4 10.0.1.9:35209->8.210.72.158:23456: read: connection reset by peer  * [/ip4/47.101.4.131/tcp/23456] failed to negotiate security protocol: read tcp4 10.0.1.9:35209->47.101.4.131:23456: read: connection reset by peer  * [/ip4/101.32.198.140/tcp/23456] failed to negotiate security protocol: read tcp4 10.0.1.9:35209->101.32.198.140:23456: read: connection reset by peer  * [/ip4/101.32.198.180/tcp/23456] dial tcp4 0.0.0.0:35209->101.32.198.180:23456: i/o timeout  * [/ip4/101.32.198.187/tcp/23456] dial tcp4 0.0.0.0:35209->101.32.198.187:23456: i/o timeout  * [/ip4/101.32.198.186/tcp/23456] dial tcp4 0.0.0.0:35209->101.32.198.186:23456: i/o timeout  * [/ip4/139.196.136.126/tcp/23456] failed to negotiate security protocol: read tcp4 10.0.1.9:35209->139.196.136.126:23456: read: connection reset by peer  * [/ip4/8.210.91.43/tcp/23456] failed to negotiate security protocol: read tcp4 10.0.1.9:35209->8.210.91.43:23456: read: connection reset by peer
  f07944: 'dial, China, Hangzhou, SupremeTreasure', // * [/ip4/103.46.128.45/tcp/57670] dial tcp4 103.46.128.45:57670: connect: connection refused
  f07947: 'dial, China, Zhengzhou', // * [/ip4/117.160.206.175/tcp/40133] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHRLWcUmv2NFQER1vwJAa2qTSC5S7ssJcAuwUn27t667E, but remote key matches 12D3KooWNzTyV8jTJobnDeXBLgJHetsMCSy7r8euCrbszdhTXCKf
  f07956: 'dial, Russia', // * [/ip4/91.218.244.253/tcp/10240] dial tcp4 0.0.0.0:35209->91.218.244.253:10240: i/o timeout
  f07961: 'dial, China, Changzhou', // * [/ip4/58.216.209.94/tcp/6666] dial tcp4 58.216.209.94:6666: connect: connection refused
  f07991: 'dial, China, Changsha', // * [/ip4/113.218.133.192/tcp/13470] dial tcp4 0.0.0.0:35209->113.218.133.192:13470: i/o timeout
  f08006: 'dial, China, Shaanxi', // * [/ip4/111.19.129.175/tcp/23456] dial tcp4 111.19.129.175:23456: i/o timeout
  f08032: 'dial, China, Weifang', // * [/ip4/111.17.220.237/tcp/6666] dial tcp4 111.17.220.237:6666: i/o timeout  * [/ip4/111.17.220.235/tcp/6666] dial tcp4 111.17.220.235:6666: i/o timeout
  f08040: 'dial, Australia, Sydney', // * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:35209->43.241.189.214:39438: i/o timeout
  f08042: 'dial, Brazil, Sao Paulo', // * [/ip4/76.223.3.225/tcp/23456] dial tcp4 0.0.0.0:35209->76.223.3.225:23456: i/o timeout
  f08047: 'dial, China, Hangzhou', // * [/ip4/101.71.125.162/tcp/7654] dial tcp4 0.0.0.0:35209->101.71.125.162:7654: i/o timeout
  f08063: 'dial, China, Huizhou', // * [/ip4/113.81.68.244/tcp/12345] dial tcp4 113.81.68.244:12345: i/o timeout
  f08076: 'dial, Netherlands, Alphen aan den Rijn, Ang', // * [/ip4/143.178.96.190/tcp/24002] dial tcp4 143.178.96.190:24002: i/o timeout
  f08088: 'dial, China, Dongguan', // * [/ip4/183.240.203.135/tcp/10240] dial tcp4 0.0.0.0:35209->183.240.203.135:10240: i/o timeout
  f08096: 'dial, China, Wuhan', // * [/ip4/59.175.128.46/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWARwVoXJ6ZjfgKEpyBv1dsEmQhHrPN9UwxxKoFkrAw98A, but remote key matches 12D3KooWCFhmdmduqq59w8CsEgEX2qi9KQqE9wmTHmqC5W4tcEaA
  f08101: 'dial, China, Wuxi', // * [/ip4/47.88.10.179/tcp/7000] dial tcp4 47.88.10.179:7000: i/o timeout  * [/ip4/47.245.136.114/tcp/7000] dial tcp4 47.245.136.114:7000: i/o timeout
  f08109: 'dial, USA, qianyuanyunshuo', // * [/ip4/47.57.8.77/tcp/28109] dial tcp4 0.0.0.0:35209->47.57.8.77:28109: i/o timeout
  f08135: 'dial, Singapore', // * [/ip4/170.33.12.118/tcp/12345] dial tcp4 0.0.0.0:35209->170.33.12.118:12345: i/o timeout
  f08139: 'dial, China, Shanghai', // * [/ip4/218.79.124.15/tcp/45454] dial tcp4 0.0.0.0:35209->218.79.124.15:45454: i/o timeout
  f08148: 'dial, China, Shanghai', // * [/ip4/103.108.182.27/tcp/30031] dial tcp4 103.108.182.27:30031: i/o timeout
  f08149: 'dial, China, Jiangmen', // * [/ip4/183.36.3.160/tcp/60015] dial tcp4 183.36.3.160:60015: i/o timeout
  f08150: 'dial, China, Hangzhou', // * [/ip4/115.199.55.127/tcp/23333] dial tcp4 115.199.55.127:23333: connect: connection refused
  f08161: 'dial, China, Weifang', // * [/ip4/111.17.220.234/tcp/6677] dial tcp4 111.17.220.234:6677: connect: connection refused
  f08170: 'dial, China, Jieyang', // * [/ip4/183.240.204.199/tcp/40573] dial tcp4 183.240.204.199:40573: connect: connection refused
  f08178: 'dial, China, Jiaxing, CAAP-金华', // * [/ip4/61.174.253.25/tcp/2346] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJpwXVGUapvX4nqP1GoAD4eAxobaogY5ZAWC9vfQPUByN, but remote key matches 12D3KooWBKWMoLD3JfU3F9Bobj8c5Ro4fxSb5wqnCRkbFW1mq87o
  f08199: 'dial, USA, Sudbury', // * [/ip4/108.49.193.174/tcp/32002] dial tcp4 108.49.193.174:32002: i/o timeout
  f08205: 'dial, Brazil, Sao Paulo', // * [/ip4/169.57.182.19/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHfc4VZ321w7MmZYbmMDdkMw3D4h83Ar3q8MEMjLq69PL, but remote key matches 12D3KooWEfyR3PyQidJ2GgBV6Vvncguotx7xi9GRbFvi8RBoytMu
  f08235:
    'dial, China, Beijing + Jiaxing + Germany, Frankfurt, 星河华讯&中科星际', // * [/ip4/103.103.177.172/tcp/5678] dial tcp4 0.0.0.0:35209->103.103.177.172:5678: i/o timeout
  f08243: 'dial, USA, Queens', // * [/ip4/108.41.171.148/tcp/55244] dial tcp4 0.0.0.0:35209->108.41.171.148:55244: i/o timeout  * [/ip4/108.41.171.148/tcp/55241] dial tcp4 0.0.0.0:35209->108.41.171.148:55241: i/o timeout  * [/ip4/108.41.171.148/tcp/55242] dial tcp4 0.0.0.0:35209->108.41.171.148:55242: i/o timeout  * [/ip4/108.41.171.148/tcp/55243] dial tcp4 0.0.0.0:35209->108.41.171.148:55243: i/o timeout
  f08289: 'dial, Canada, Embrun', // * [/ip4/148.59.149.162/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWR8hBuB593YUujHBYAT9Zp48FgfzYeLbPdqow59ZF3dFg, but remote key matches 12D3KooWKi8JTyGdSAL1TFpdF6gmyjXeMeknqNWT6Eft1cxrSzAq
  f08293: 'dial, China, Xinxiang', // * [/ip4/27.50.142.73/tcp/1347] dial tcp4 27.50.142.73:1347: i/o timeout
  f08295: 'dial, China, Suzhou, IPFS Cloud', // * [/ip4/222.92.5.150/tcp/40699] dial tcp4 0.0.0.0:35209->222.92.5.150:40699: i/o timeout
  f08301: 'dial, Japan, Setagaya-ku, MEIK', // * [/ip4/126.159.22.156/tcp/50320] dial tcp4 0.0.0.0:35209->126.159.22.156:50320: i/o timeout
  f08330: 'dial, China, Chengdu, oursoft', // * [/ip4/125.69.0.37/tcp/55009] dial tcp4 125.69.0.37:55009: i/o timeout
  f08338: 'dial, China, Weifang', // * [/ip4/111.17.220.231/tcp/5566] dial tcp4 111.17.220.231:5566: i/o timeout
  f08344: 'dial, UK, Hartlepool', // * [/ip4/82.15.108.46/tcp/51437] dial tcp4 0.0.0.0:35209->82.15.108.46:51437: i/o timeout
  f08346: 'dial, Korea', // * [/ip4/59.23.202.120/tcp/23233] dial tcp4 59.23.202.120:23233: connect: connection refused
  f08347: 'dial, China, Chengdu', // * [/ip4/222.209.95.29/tcp/6666] dial tcp4 222.209.95.29:6666: connect: connection refused
  f08358: 'dial, China, Shenzhen', // * [/ip4/119.123.208.233/tcp/45437] dial tcp4 0.0.0.0:35209->119.123.208.233:45437: i/o timeout
  f08384:
    'dial, China, Shandong + Hong Kong + Japan, Heiwajima + Russia, Khabarovsk', // * [/ip4/66.42.38.110/tcp/9990] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSNsVcwPC2FXp3bbV9MyAbi35igscSJh6gb8MkFsyxiy2, but remote key matches 12D3KooWD38od1j4abLotnfpALNPZt3TdjmQ1HqSiQBe1qZpnrCc  * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: connection refused  * [/ip4/172.247.228.122/tcp/9999] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSNsVcwPC2FXp3bbV9MyAbi35igscSJh6gb8MkFsyxiy2, but remote key matches 12D3KooWD38od1j4abLotnfpALNPZt3TdjmQ1HqSiQBe1qZpnrCc
  f08396: 'dial, France, Fontenay-sous-Bois', // * [/ip4/90.46.50.228/tcp/24002] dial tcp4 90.46.50.228:24002: connect: no route to host
  f08405: 'dial, China, Guangdong', // * [/ip4/183.232.116.201/tcp/4001] dial tcp4 183.232.116.201:4001: connect: connection refused
  f08418: 'dial, China, Chansha + USA', // * [/ip4/27.124.10.49/tcp/7003] dial tcp4 0.0.0.0:35209->27.124.10.49:7003: i/o timeout
  f08446: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMfLgpGWM87mLbrkNuN6FQ6zExMvzECDSV4qy7FKDqNvq, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f08448: 'dial, China, Guangdong', // * [/ip4/183.232.116.202/tcp/4001] dial tcp4 183.232.116.202:4001: connect: connection refused
  f08481: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:35209->73.158.16.48:30390: i/o timeout
  f08497: 'dial, Brazil, Sao Paulo', // * [/ip4/18.231.148.87/tcp/46717] dial tcp4 0.0.0.0:35209->18.231.148.87:46717: i/o timeout
  f08568: 'dial, USA, Waxhaw, Meatball Part II', // * [/ip4/71.75.239.182/tcp/41372] dial tcp4 0.0.0.0:35209->71.75.239.182:41372: i/o timeout
  f08684: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.109:23450: i/o timeout
  f08685: 'dial, China, Fuzhou', // * [/ip4/182.99.0.96/tcp/23450] dial tcp4 182.99.0.96:23450: i/o timeout
  f08788: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 182.99.0.103:23450: i/o timeout
  f08793: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.99:23450: i/o timeout
  f08895: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f08904: 'dial, China, Deyang', // * [/ip4/125.64.78.27/tcp/4004] dial tcp4 125.64.78.27:4004: connect: connection refused
  f08908: 'dial, USA', // * [/ip4/216.18.214.92/tcp/6666] dial tcp4 0.0.0.0:35209->216.18.214.92:6666: i/o timeout
  f08917: 'dial, China, Beijing', // * [/ip4/182.61.174.185/tcp/40000] dial tcp4 182.61.174.185:40000: i/o timeout
  f08928: 'dial, USA, Arlington, theartist', // * [/ip4/69.251.248.175/tcp/6679] dial tcp4 69.251.248.175:6679: i/o timeout
  f08949: 'dial, Norway, Oslo', // * [/ip4/151.252.13.190/tcp/37374] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWE1ubdqszJxdjAAVcZcx2x1PJUNFbNDm52jFkeJoAaPYh, but remote key matches 12D3KooWMpuRzgVuRS6m285cucGgnXWwTnsNtGzjsMJeEqS7UtJw
  f08953: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.100:23450: i/o timeout
  f08958: 'dial, China, Fuzhou', // * [/ip4/182.99.0.108/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.108:23450: i/o timeout
  f08986: 'dial, China, Ordos', // * [/ip4/1.183.72.226/tcp/12308] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCLPAPTjCYyCMBBnv5MkJCaV1o6mawJLha4wdAGkMH1Yq, but remote key matches 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg
  f08991: 'dial, China, Ili', // * [/ip4/124.88.170.140/tcp/16000] dial tcp4 0.0.0.0:35209->124.88.170.140:16000: i/o timeout
  f08995: 'dial, China, Fuzhou', // * [/ip4/182.99.0.97/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.97:23450: i/o timeout
  f09005: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 182.99.0.101:23450: i/o timeout
  f09029: 'dial, China, Wuhan', // * [/ip4/59.175.128.46/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCkJYhKg9uMf2ocRDRxatUWBveJMSdneMamxDmChG2ULv, but remote key matches 12D3KooWCFhmdmduqq59w8CsEgEX2qi9KQqE9wmTHmqC5W4tcEaA
  f09036: 'dial, China, Chengdu, CD-oursoft', // * [/ip4/125.69.0.37/tcp/55019] dial tcp4 125.69.0.37:55019: connect: connection refused
  f09048: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 182.99.0.102:23450: connect: no route to host
  f09056: 'dial, China, Shenzhen, SZSQ1', // * [/ip4/119.139.197.93/tcp/20030] dial tcp4 119.139.197.93:20030: connect: connection refused
  f09077: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:35209->218.85.126.210:23450: i/o timeout
  f09082: 'dial, Australia, Canberra', // * [/ip4/101.178.36.30/tcp/24004] dial tcp4 0.0.0.0:35209->101.178.36.30:24004: i/o timeout
  f09088: 'dial, China, Changsha', // * [/ip4/175.10.160.70/tcp/13470] dial tcp4 0.0.0.0:35209->175.10.160.70:13470: i/o timeout
  f09091: 'dial, Netherlands', // * [/ip4/185.232.59.179/tcp/2347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLdKXN3LuTbRqgyvSCxCByPifZDTp1p7hLCtQEgwo4uM6, but remote key matches 12D3KooWJDvwMPfJ1ct9V6JpgRrdA7DWEEfcWSQAWCYbRrNxnXYi
  f09261: 'dial, Brazil, Sao Paulo', // * [/ip4/169.57.189.187/tcp/7000] dial tcp4 169.57.189.187:7000: connect: connection refused
  f09523: 'dial, China, Beijing', // * [/ip4/8.210.13.50/tcp/45678] dial tcp4 8.210.13.50:45678: connect: connection refused  * [/ip4/119.161.169.68/tcp/45678] dial tcp4 0.0.0.0:35209->119.161.169.68:45678: i/o timeout
  f09537: 'dial, USA, El Monte', // * [/ip4/47.145.150.94/tcp/1024] dial tcp4 0.0.0.0:35209->47.145.150.94:1024: i/o timeout
  f09555: 'dial, Australia, Sydney', // * [/ip4/3.25.64.130/tcp/10240] dial tcp4 0.0.0.0:35209->3.25.64.130:10240: i/o timeout
  f09559: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/31001] dial tcp4 0.0.0.0:35209->99.250.201.0:31001: i/o timeout
  f09560: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64002] dial tcp4 178.212.192.216:64002: i/o timeout
  f09561: 'dial, China, Beijing', // * [/ip4/36.112.26.4/tcp/3458] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFp4nbb4eDyUmWaR5XrjSEzdhtHh35ewdwc59e1tkZBcA, but remote key matches 12D3KooWAKXYhFP3mGbaHnCB5GBCvFe8gniGKoDpTbaY8S9FWruH
  f09565: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64003] dial tcp4 178.212.192.216:64003: connect: connection refused
  f09573: 'dial, China, Xiamen', // * [/ip4/121.204.250.253/tcp/4567] dial tcp4 121.204.250.253:4567: connect: connection refused
  f09589: 'dial, China, Changsha', // * [/ip4/113.218.134.132/tcp/5472] dial tcp4 0.0.0.0:35209->113.218.134.132:5472: i/o timeout
  f09592: 'dial, Japan, Minamata', // * [/ip4/203.189.40.203/tcp/10252] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHrm2Ej8kE29FZ5tABnzzWMeeUqz6UWiG6WfECxEBTJyr, but remote key matches 12D3KooWSpji7fDLrXGiM9Gbcy8tzCTYk5ed7ukmaTAznnLMxqGf
  f09597: 'dial, China, Shanghai', // * [/ip4/47.52.20.42/tcp/8046] failed to negotiate security protocol: EOF
  f09605: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64004] dial tcp4 178.212.192.216:64004: connect: connection refused
  f09619: 'dial, China, Shanghai', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f09631: 'dial, China, Changzhou', // * [/ip4/58.216.209.94/tcp/6668] dial tcp4 58.216.209.94:6668: connect: connection refused
  f09643: 'dial, China, Beijing', // * [/ip4/203.93.121.130/tcp/38886] dial tcp4 203.93.121.130:38886: i/o timeout
  f09653: 'dial, China, Chengdu', // * [/ip4/47.242.94.248/tcp/6667] dial tcp4 47.242.94.248:6667: connect: connection refused
  f09656: 'dial, Ukraine, Odessa', // * [/ip4/218.60.28.136/tcp/43368] dial tcp4 218.60.28.136:43368: connect: connection refused
  f09664: 'dial, Australia, Sydney', // * [/ip4/220.238.233.196/tcp/26201] dial tcp4 0.0.0.0:35209->220.238.233.196:26201: i/o timeout
  f09671: 'dial, China, Chongqing', // * [/ip4/113.207.109.184/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMdh1of4D5YPvY4g3Y2pCf6mpQvgHx9kg55RvkJdRmP6z, but remote key matches 12D3KooWPw6phtaL2ftZq7wQLjc6z1YoVou4BK48ZzXk3TVNVPjK
  f09672: 'dial, China, Chengdu', // * [/ip4/110.185.107.124/tcp/21735] dial tcp4 110.185.107.124:21735: connect: connection refused
  f09680: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f09704: 'dial, China, Shenzhen', // * [/ip4/218.17.62.49/tcp/31431] dial tcp4 218.17.62.49:31431: connect: connection refused
  f09721: 'dial, ???, CD-oursoft-1', // * [/ip4/125.69.0.37/tcp/55029] dial tcp4 125.69.0.37:55029: connect: connection refused
  f09723: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:35209->218.85.126.210:23450: i/o timeout
  f09729: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/41112] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPumWWQP2mt3t7czSPDq67Fs19Xen3fcSfurqgnTVieAF, but remote key matches 12D3KooWFKKhmTQyDpXH8HFnUZhVjsu2f8r96m5dFkqJnWxFozc5
  f09734: 'dial, China, Dongguan', // * [/ip4/121.12.167.179/tcp/41113] dial tcp4 121.12.167.179:41113: connect: connection refused
  f09748: 'dial, China, Tianjin', // * [/ip4/150.129.138.199/tcp/7518] dial tcp4 0.0.0.0:35209->150.129.138.199:7518: i/o timeout
  f09761: 'dial, China, Beijing', // * [/ip4/114.253.41.59/tcp/24002] dial tcp4 0.0.0.0:35209->114.253.41.59:24002: i/o timeout
  f09763: 'dial, China, Mianyang,  <13h', // * [/ip4/47.254.25.128/tcp/7000] dial tcp4 0.0.0.0:35209->47.254.25.128:7000: i/o timeout  * [/ip4/47.254.128.95/tcp/7000] dial tcp4 0.0.0.0:35209->47.254.128.95:7000: i/o timeout
  f09771: 'dial, China, Hangzhou', // * [/ip4/47.57.8.77/tcp/6785] dial tcp4 0.0.0.0:35209->47.57.8.77:6785: i/o timeout
  f09789: 'dial, USA', // * [/ip4/47.242.77.149/tcp/19914] dial tcp4 0.0.0.0:35209->47.242.77.149:19914: i/o timeout
  f09792: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 35.224.87.15:24002: connect: connection refused
  f09797: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.102:23450: i/o timeout
  f09801: 'dial, China, Fuzhou', // * [/ip4/182.99.0.108/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.108:23450: i/o timeout
  f09808: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.100:23450: i/o timeout
  f09809: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.101:23450: i/o timeout
  f09810: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.103:23450: i/o timeout
  f09811: 'dial, China, Dongguan', // * [/ip4/113.105.174.7/tcp/10000] dial tcp4 0.0.0.0:35209->113.105.174.7:10000: i/o timeout
  f09813: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.109:23450: i/o timeout
  f09814: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.99:23450: i/o timeout
  f09817: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.98:23450: i/o timeout
  f09828: 'dial, NR', // * [/ip4/192.168.0.9/tcp/24002] dial tcp4 0.0.0.0:35209->192.168.0.9:24002: i/o timeout
  f09830: 'dial, Korea, Geumcheon-gu', // * [/ip4/121.140.143.29/tcp/24002] dial tcp4 121.140.143.29:24002: connect: connection refused
  f09838: 'dial, Russia, Irkutsk', // * [/ip4/90.188.226.112/tcp/9555] dial tcp4 0.0.0.0:35209->90.188.226.112:9555: i/o timeout
  f09859: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f09969: 'dial, China, Guangzhou', // * [/ip4/183.2.157.250/tcp/1029] dial tcp4 183.2.157.250:1029: connect: connection refused
  f09972: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:35209->95.216.99.39:46717: i/o timeout
  f09983: 'dial, China, Guangzhou', // * [/ip4/183.2.157.214/tcp/888] dial tcp4 183.2.157.214:888: connect: connection refused
  f09985: 'dial, China, Qingdao', // * [/ip4/61.147.123.85/tcp/12223] dial tcp4 61.147.123.85:12223: connect: connection refused
  f010015: 'dial, China, Taizhou', // * [/ip4/47.254.145.29/tcp/23456] dial tcp4 0.0.0.0:35209->47.254.145.29:23456: i/o timeout  * [/ip4/47.254.31.111/tcp/23456] dial tcp4 0.0.0.0:35209->47.254.31.111:23456: i/o timeout
  f010020: 'dial, China, Chongqing', // * [/ip4/113.207.109.184/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNXhxeBMqYPF56bZExJzcjeiHDaserGs7YYXNgLtLHVvS, but remote key matches 12D3KooWPw6phtaL2ftZq7wQLjc6z1YoVou4BK48ZzXk3TVNVPjK
  f010032: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.103:23450: i/o timeout
  f010035: 'dial, Netherlands', // * [/ip4/61.155.145.2/tcp/2347] dial tcp4 61.155.145.2:2347: connect: connection refused  * [/ip4/185.232.59.178/tcp/2347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJDvwMPfJ1ct9V6JpgRrdA7DWEEfcWSQAWCYbRrNxnXYi, but remote key matches 12D3KooWAVDE6eCogR3QYC44Ynb89Qyu5o1WjgFsA3bpWsZztGV8
  f010038: 'dial, China, Hangzhou + Singapore', // * [/ip4/170.33.12.166/tcp/39774] dial tcp4 0.0.0.0:35209->170.33.12.166:39774: i/o timeout
  f010063: 'dial, China, Mianyang', // * [/ip4/183.223.56.9/tcp/23456] dial tcp4 183.223.56.9:23456: connect: connection refused
  f010152: 'dial, Germany-cfa', // * [/ip4/116.202.129.161/tcp/10666] dial tcp4 116.202.129.161:10666: connect: connection refused
  f010170: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.109:23450: i/o timeout
  f010223: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12311] dial tcp4 0.0.0.0:35209->47.57.188.137:12311: i/o timeout
  f010224: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.102:23450: i/o timeout
  f010230: 'dial, China, Beijing', // * [/ip4/106.55.236.214/tcp/10022] dial tcp4 106.55.236.214:10022: connect: connection refused
  f010238: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23455] dial tcp4 110.80.33.138:23455: connect: connection refused
  f010268: 'dial, China, Hangzhou', // * [/ip4/47.57.8.77/tcp/8001] dial tcp4 0.0.0.0:35209->47.57.8.77:8001: i/o timeout
  f010270: 'dial, China, Shijiazhuang', // * [/ip4/111.224.179.91/tcp/2233] dial tcp4 0.0.0.0:35209->111.224.179.91:2233: i/o timeout
  f010274: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.99:23450: i/o timeout
  f010276: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f010287: 'dial, China, Fuzhou', // * [/ip4/182.99.0.97/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.97:23450: i/o timeout
  f010289: 'dial, China, Fuzhou', // * [/ip4/182.99.0.96/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.96:23450: i/o timeout
  f010291: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.98:23450: i/o timeout
  f010298: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.102:23450: i/o timeout
  f010299: 'dial, China, Yibin', // * [/ip4/101.206.243.3/tcp/39695] dial tcp4 101.206.243.3:39695: connect: connection refused
  f010308: 'dial, Germany, Frankfurt', // * [/ip4/45.137.217.231/tcp/6610] dial tcp4 45.137.217.231:6610: connect: connection refused
  f010311: 'dial, Korea, Hwaseong-si', // * [/ip4/106.255.239.43/tcp/24002] dial tcp4 0.0.0.0:35209->106.255.239.43:24002: i/o timeout
  f010362: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.35.11/tcp/46717] dial tcp4 0.0.0.0:35209->15.228.35.11:46717: i/o timeout
  f010372: 'dial, Brazil, Sao Paulo', // * [/ip4/52.67.22.220/tcp/46717] dial tcp4 0.0.0.0:35209->52.67.22.220:46717: i/o timeout
  f010374: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAUYDipKeDFH92NqD4RxxUGUZJtiUwH5YD9scLwnavVXP, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f010398: 'dial, Korea, Yeongdeungpo-dong', // * [/ip4/121.140.143.29/tcp/24002] dial tcp4 121.140.143.29:24002: connect: connection refused
  f010411: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f010424: 'dial, Australia, Sydney', // * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:35209->43.241.189.214:39438: i/o timeout
  f010449: 'dial, China, Jiangmen', // * [/ip4/183.36.3.160/tcp/60007] dial tcp4 183.36.3.160:60007: connect: connection refused
  f010495: 'dial, China, Tainjin', // * [/ip4/150.129.138.199/tcp/8518] dial tcp4 150.129.138.199:8518: i/o timeout
  f010496: 'dial, China, Guangzhou', // * [/ip4/183.2.157.213/tcp/666] dial tcp4 183.2.157.213:666: connect: connection refused
  f010516: 'dial, Brazil, Sao Paulo', // * [/ip4/18.230.25.100/tcp/18888] dial tcp4 0.0.0.0:35209->18.230.25.100:18888: i/o timeout
  f010527: 'dial, China, Shanghai', // * [/ip4/116.228.53.133/tcp/10240] failed to negotiate security protocol: unexpected EOF
  f010533: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12319] dial tcp4 0.0.0.0:35209->47.57.188.137:12319: i/o timeout
  f010541: 'dial, China, Chengdu', // * [/ip4/110.185.107.117/tcp/21736] dial tcp4 110.185.107.117:21736: connect: connection refused  * [/ip4/110.185.107.23/tcp/21735] dial tcp4 110.185.107.23:21735: connect: connection refused
  f010553: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12316] dial tcp4 0.0.0.0:35209->47.57.188.137:12316: i/o timeout
  f010579: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.194/tcp/23450] dial tcp4 0.0.0.0:35209->45.192.184.194:23450: i/o timeout
  f010586: 'dial, China, Fuzhou', // * [/ip4/45.192.184.197/tcp/23450] dial tcp4 0.0.0.0:35209->45.192.184.197:23450: i/o timeout
  f010598: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/10002] dial tcp4 99.250.201.0:10002: i/o timeout
  f010600: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f010606: 'dial, China, Fuzhou', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:35209->45.192.184.195:23450: i/o timeout
  f010607: 'dial, China, Guangzhou', // * [/ip4/8.210.76.199/tcp/18899] dial tcp4 0.0.0.0:35209->8.210.76.199:18899: i/o timeout
  f010608: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.101:23450: i/o timeout
  f010609: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/36666] dial tcp4 0.0.0.0:35209->182.99.0.100:36666: i/o timeout
  f010613: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/20002] dial tcp4 0.0.0.0:35209->99.250.201.0:20002: i/o timeout
  f014230: 'dial, China, Fuzhou', // * [/ip4/185.23.181.67/tcp/23450] dial tcp4 0.0.0.0:35209->185.23.181.67:23450: i/o timeout
  f014241: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNczL8NwzKEd2Np4uiDs42GB3pKcmoABTdM8JJ8v9MRGB, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f014246: 'dial, China, Shenzhen', // * [/ip4/103.40.249.212/tcp/44299] dial tcp4 0.0.0.0:35209->103.40.249.212:44299: i/o timeout
  f014248: 'dial, Turkey', // * [/ip4/185.23.180.67/tcp/23450] dial tcp4 0.0.0.0:35209->185.23.180.67:23450: i/o timeout
  f014259: 'dial, China, Fuzhou', // * [/ip4/45.192.184.193/tcp/23450] dial tcp4 0.0.0.0:35209->45.192.184.193:23450: i/o timeout
  f014279: 'dial, Finland, Helsinki', // * [/ip4/95.217.113.188/tcp/12345] dial tcp4 0.0.0.0:35209->95.217.113.188:12345: i/o timeout
  f014307: 'dial, China, Dongguan', // * [/ip4/218.16.123.133/tcp/4001] dial tcp4 218.16.123.133:4001: connect: connection refused
  f014311: 'dial, China, Ordos', // * [/ip4/162.62.55.44/tcp/12309] dial tcp4 0.0.0.0:35209->162.62.55.44:12309: i/o timeout
  f014324: 'dial, Canada, Vancouver', // * [/ip4/75.156.27.216/tcp/12345] dial tcp4 0.0.0.0:35209->75.156.27.216:12345: i/o timeout
  f014327: 'dial, China, Ningbo', // * [/ip4/123.137.128.172/tcp/3698] dial tcp4 123.137.128.172:3698: connect: connection refused  * [/ip4/63.209.33.203/tcp/9873] dial tcp4 0.0.0.0:35209->63.209.33.203:9873: i/o timeout  * [/ip4/95.179.171.100/tcp/9872] dial tcp4 0.0.0.0:35209->95.179.171.100:9872: i/o timeout  * [/ip4/45.32.19.57/tcp/9871] dial tcp4 0.0.0.0:35209->45.32.19.57:9871: i/o timeout  * [/ip4/155.138.158.107/tcp/9874] dial tcp4 0.0.0.0:35209->155.138.158.107:9874: i/o timeout
  f014328: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/10003] dial tcp4 99.250.201.0:10003: i/o timeout
  f014348: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.15.78/tcp/46717] dial tcp4 0.0.0.0:35209->15.228.15.78:46717: i/o timeout
  f014377: 'dial, China, Liaoning', // * [/ip4/116.132.221.24/tcp/42985] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAwSVUn5sTmPq1f64G1FfAt3ovRyJwzimCQtr5NQYG3Z7, but remote key matches 12D3KooWSFGYvbGeXwHPdLytmxkzFgfAzMXjgUPFzwkcVzNnfGvu
  f014379: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f014380: 'dial, China, Hangzhou + Wuhan + Singapore', // * [/ip4/170.33.12.78/tcp/7161] dial tcp4 0.0.0.0:35209->170.33.12.78:7161: i/o timeout  * [/ip4/170.33.12.186/tcp/7161] dial tcp4 0.0.0.0:35209->170.33.12.186:7161: i/o timeout
  f014382: 'dial, Singapore', // * [/ip4/115.236.22.154/tcp/7177] dial tcp4 115.236.22.154:7177: connect: connection refused
  f014386: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/7169] dial tcp4 0.0.0.0:35209->170.33.12.186:7169: i/o timeout
  f014393: 'dial, China, Zhejiang', // * [/ip4/43.227.216.41/tcp/25677] dial tcp4 43.227.216.41:25677: connect: connection refused
  f014415: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f014431: 'dial, Singapore', // * [/ip4/170.33.12.78/tcp/7185] dial tcp4 0.0.0.0:35209->170.33.12.78:7185: i/o timeout  * [/ip4/170.33.12.186/tcp/7185] dial tcp4 0.0.0.0:35209->170.33.12.186:7185: i/o timeout
  f014432: 'dial, China, Chengdu', // * [/ip4/125.69.0.37/tcp/55019] dial tcp4 125.69.0.37:55019: connect: connection refused
  f014433: 'dial, Singapore', // * [/ip4/170.33.12.78/tcp/7193] dial tcp4 0.0.0.0:35209->170.33.12.78:7193: i/o timeout  * [/ip4/170.33.12.186/tcp/7193] dial tcp4 0.0.0.0:35209->170.33.12.186:7193: i/o timeout
  f014436: 'dial, China, Chengdu', // * [/ip4/125.69.0.37/tcp/55009] dial tcp4 125.69.0.37:55009: connect: connection refused
  f014440: 'dial, Hong Kong', // * [/ip4/45.113.32.179/tcp/6666] dial tcp4 45.113.32.179:6666: connect: connection refused
  f014481: 'dial, China, Shanghai', // * [/ip4/103.242.134.36/tcp/12288] failed to negotiate security protocol: EOF  * [/ip4/170.33.12.118/tcp/12345] dial tcp4 0.0.0.0:35209->170.33.12.118:12345: i/o timeout
  f014483: 'dial, USA, Clarksville', // * [/ip4/199.46.99.12/tcp/43801] dial tcp4 199.46.99.12:43801: connect: no route to host
  f014522: 'dial, China, Shanghai', // * [/ip4/81.68.170.164/tcp/5474] dial tcp4 0.0.0.0:35209->81.68.170.164:5474: i/o timeout
  f014547: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.100:23450: i/o timeout
  f014572: 'dial, USA', // * [/ip4/47.90.208.156/tcp/39706] dial tcp4 0.0.0.0:35209->47.90.208.156:39706: i/o timeout
  f014573: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.101:23450: i/o timeout
  f014606: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f014609: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.109:23450: i/o timeout
  f014632: 'dial, Canada', // * [/ip4/148.59.149.162/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGeBVKYsVXc7PcMCKtovVv5wztHSLmfMwWFKADV8wbj26, but remote key matches 12D3KooWKi8JTyGdSAL1TFpdF6gmyjXeMeknqNWT6Eft1cxrSzAq
  f014634: 'dial, USA, Boardman', // * [/ip4/54.148.63.7/tcp/10240] dial tcp4 0.0.0.0:35209->54.148.63.7:10240: i/o timeout
  f014640: 'dial, Hungary', // * [/ip4/87.229.53.110/tcp/44163] dial tcp4 0.0.0.0:35209->87.229.53.110:44163: i/o timeout
  f014644: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:35209->73.158.16.48:30390: i/o timeout
  f014744: 'dial, China, Taiyuan', // * [/ip4/1.71.191.196/tcp/33411] dial tcp4 0.0.0.0:35209->1.71.191.196:33411: i/o timeout
  f014778: 'dial, China, Ordos', // * [/ip4/162.62.55.44/tcp/12310] dial tcp4 0.0.0.0:35209->162.62.55.44:12310: i/o timeout
  f014782: 'dial, DNS:wlblock.io', // * [/ip4/18.166.30.112/tcp/3456] dial tcp4 18.166.30.112:3456: connect: connection refused
  f014786: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:35209->218.85.126.210:23450: i/o timeout
  f014798: 'dial, Brazil, Sao Paulo', // * [/ip4/18.228.119.165/tcp/5101] dial tcp4 0.0.0.0:35209->18.228.119.165:5101: i/o timeout
  f015231: 'dial, China, Wuxi', // * [/ip4/193.118.43.158/tcp/7090] failed to negotiate security protocol: EOF
  f015642: 'dial, China, Fuzhou', // * [/ip4/220.176.125.20/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.20:23450: i/o timeout
  f015643: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12317] dial tcp4 0.0.0.0:35209->47.57.188.137:12317: i/o timeout
  f015655: 'dial, Korea, Geumcheon-gu', // * [/ip4/121.140.143.29/tcp/24002] dial tcp4 121.140.143.29:24002: connect: connection refused
  f015662: 'dial, China, Beijing', // * [/ip4/203.93.121.130/tcp/38886] dial tcp4 203.93.121.130:38886: connect: no route to host
  f015685: 'dial, China, Shanghai', // * [/ip4/222.64.141.185/tcp/40321] dial tcp4 222.64.141.185:40321: connect: connection refused
  f015714: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12318] dial tcp4 0.0.0.0:35209->47.57.188.137:12318: i/o timeout
  f015732: 'dial, USA, Portland', // * [/ip4/47.254.145.29/tcp/23456] dial tcp4 0.0.0.0:35209->47.254.145.29:23456: i/o timeout  * [/ip4/47.254.31.111/tcp/23456] dial tcp4 0.0.0.0:35209->47.254.31.111:23456: i/o timeout
  f015733: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12500] dial tcp4 0.0.0.0:35209->47.57.188.137:12500: i/o timeout
  f015742: 'dial, China, Ningbo', // * [/ip4/149.28.89.24/tcp/7002] dial tcp4 149.28.89.24:7002: connect: connection refused  * [/ip4/45.77.72.195/tcp/7003] dial tcp4 45.77.72.195:7003: connect: no route to host  * [/ip4/45.32.19.57/tcp/7006] dial tcp4 0.0.0.0:35209->45.32.19.57:7006: i/o timeout  * [/ip4/104.156.230.123/tcp/7004] dial tcp4 0.0.0.0:35209->104.156.230.123:7004: i/o timeout  * [/ip4/155.138.144.135/tcp/7007] dial tcp4 0.0.0.0:35209->155.138.144.135:7007: i/o timeout  * [/ip4/45.77.89.14/tcp/7005] dial tcp4 0.0.0.0:35209->45.77.89.14:7005: i/o timeout  * [/ip4/141.164.50.170/tcp/7001] dial tcp4 0.0.0.0:35209->141.164.50.170:7001: i/o timeout
  f015756: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:35209->95.216.99.39:46717: i/o timeout
  f015757: 'dial, China, Hangzhou', // * [/ip4/103.46.128.45/tcp/57670] dial tcp4 103.46.128.45:57670: connect: connection refused
  f015760: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.53/tcp/7000] dial tcp4 0.0.0.0:35209->197.231.176.53:7000: i/o timeout
  f015777: 'dial, Australia, Sydney', // * [/ip4/52.63.43.218/tcp/8888] dial tcp4 0.0.0.0:35209->52.63.43.218:8888: i/o timeout
  f015795: 'dial, Brazil, Sao Paulo', // * [/ip4/18.230.133.57/tcp/8888] dial tcp4 0.0.0.0:35209->18.230.133.57:8888: i/o timeout
  f015797: 'dial, Germany, Rostock', // * [/ip4/46.4.101.121/tcp/443] dial tcp4 0.0.0.0:35209->46.4.101.121:443: i/o timeout
  f015798: 'dial, Germany', // * [/ip4/46.4.75.207/tcp/443] dial tcp4 46.4.75.207:443: connect: connection refused
  f015799: 'dial, Germany, Rostock', // * [/ip4/46.4.102.167/tcp/443] dial tcp4 46.4.102.167:443: connect: connection refused
  f015800: 'dial, Germany, Sankt Andreasberg', // * [/ip4/148.251.120.145/tcp/443] dial tcp4 148.251.120.145:443: connect: connection refused
  f015801: 'dial, Germany, Ismaning', // * [/ip4/88.198.66.42/tcp/443] dial tcp4 88.198.66.42:443: connect: connection refused
  f015802: 'dial, Germany', // * [/ip4/46.4.79.199/tcp/443] dial tcp4 46.4.79.199:443: connect: connection refused
  f015803: 'dial, Germany', // * [/ip4/46.4.79.213/tcp/443] dial tcp4 46.4.79.213:443: connect: connection refused
  f015804: 'dial, Germany, Ismaning', // * [/ip4/88.198.67.156/tcp/443] dial tcp4 88.198.67.156:443: connect: connection refused
  f015805: 'dial, Germany', // * [/ip4/46.4.79.214/tcp/443] dial tcp4 46.4.79.214:443: connect: connection refused
  f015806: 'dial, Germany', // * [/ip4/176.9.59.6/tcp/443] dial tcp4 176.9.59.6:443: connect: connection refused
  f015807: 'dial, Germany', // * [/ip4/46.4.79.203/tcp/443] dial tcp4 0.0.0.0:35209->46.4.79.203:443: i/o timeout
  f015808: 'dial, Germany', // * [/ip4/46.4.79.209/tcp/443] dial tcp4 46.4.79.209:443: connect: connection refused
  f015809: 'dial, Germany', // * [/ip4/46.4.87.88/tcp/443] dial tcp4 46.4.87.88:443: connect: connection refused
  f015810: 'dial, Germany', // * [/ip4/46.4.79.197/tcp/443] dial tcp4 46.4.79.197:443: connect: connection refused
  f015811: 'dial, Germany, Lanshut', // * [/ip4/138.201.12.247/tcp/443] dial tcp4 138.201.12.247:443: connect: connection refused
  f015818: 'dial, Netherlands', // * [/ip4/66.248.204.121/tcp/2345] dial tcp4 0.0.0.0:35209->66.248.204.121:2345: i/o timeout
  f015819: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.5:23450: i/o timeout
  f015826: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.2:23450: i/o timeout
  f015839: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.3:23450: i/o timeout
  f015845: 'dial, China, Fuzhou', // * [/ip4/220.176.125.20/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.20:23450: i/o timeout
  f015846: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:35209->45.192.184.195:23450: i/o timeout
  f015852: 'dial, China, Fuzhou', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:35209->45.192.184.195:23450: i/o timeout
  f015855: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 220.176.125.4:23450: i/o timeout
  f015860: 'dial, Ukraine, Odessa', // * [/ip4/178.212.192.216/tcp/64005] dial tcp4 178.212.192.216:64005: connect: connection refused
  f015861: 'dial, Ukraine, Odessa', // * [/ip4/178.212.192.216/tcp/64006] dial tcp4 178.212.192.216:64006: connect: connection refused
  f015862: 'dial, Ukraine, Odessa', // * [/ip4/178.212.192.216/tcp/64007] dial tcp4 178.212.192.216:64007: connect: connection refused
  f015866: 'dial, China, Fuzhou', // * [/ip4/220.176.125.10/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.10:23450: i/o timeout
  f015872: 'dial, China, Fuzhou', // * [/ip4/45.192.184.205/tcp/23450] dial tcp4 0.0.0.0:35209->45.192.184.205:23450: i/o timeout
  f015873: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.98:23450: i/o timeout
  f015884: 'dial, China, Fuzhou', // * [/ip4/45.192.184.203/tcp/23450] dial tcp4 0.0.0.0:35209->45.192.184.203:23450: i/o timeout
  f015887: 'dial, China, Fuzhou', // * [/ip4/45.192.184.201/tcp/23450] dial tcp4 0.0.0.0:35209->45.192.184.201:23450: i/o timeout
  f015888: 'dial, China, Fuzhou', // * [/ip4/45.192.184.207/tcp/23450] dial tcp4 0.0.0.0:35209->45.192.184.207:23450: i/o timeout
  f015894: 'dial, China, Fuzhou', // * [/ip4/45.192.184.199/tcp/23450] dial tcp4 0.0.0.0:35209->45.192.184.199:23450: i/o timeout
  f015897: 'dial, China, Guangdong', // * [/ip4/43.252.149.169/tcp/4001] dial tcp4 0.0.0.0:35209->43.252.149.169:4001: i/o timeout
  f015898: 'dial, Lithuania', // * [/ip4/188.214.129.85/tcp/36899] dial tcp4 188.214.129.85:36899: connect: connection refused
  f015900: 'dial, Germany', // * [/ip4/46.4.63.227/tcp/443] dial tcp4 46.4.63.227:443: connect: connection refused
  f015901: 'dial, Germany', // * [/ip4/138.201.9.143/tcp/443] dial tcp4 138.201.9.143:443: connect: connection refused
  f015902: 'dial, Germany', // * [/ip4/188.40.133.181/tcp/443] dial tcp4 188.40.133.181:443: connect: connection refused
  f015903: 'dial, Germany', // * [/ip4/136.243.48.38/tcp/443] dial tcp4 136.243.48.38:443: connect: connection refused
  f015905: 'dial, Lithuania', // * [/ip4/188.214.129.49/tcp/34751] dial tcp4 0.0.0.0:35209->188.214.129.49:34751: i/o timeout
  f015907: 'dial, Canada, Calgary', // * [/ip4/70.77.238.98/tcp/46717] dial tcp4 70.77.238.98:46717: connect: connection refused
  f015910: 'dial, Turkey', // * [/ip4/185.23.181.67/tcp/23450] dial tcp4 0.0.0.0:35209->185.23.181.67:23450: i/o timeout
  f015914: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:35209->182.99.0.99:23450: i/o timeout
  f015918: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.2:23450: i/o timeout
  f015922: 'dial, China', // * [/ip4/162.62.55.44/tcp/12317] dial tcp4 0.0.0.0:35209->162.62.55.44:12317: i/o timeout
  f015926: 'dial, China', // * [/ip4/162.62.55.44/tcp/12319] dial tcp4 0.0.0.0:35209->162.62.55.44:12319: i/o timeout
  f015928: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.3:23450: i/o timeout
  f015933: 'dial, Finland, Helskinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:35209->95.216.99.39:46717: i/o timeout
  f015947: 'dial, Finland, Helsinki', // * [/ip4/95.217.114.57/tcp/45381] dial tcp4 95.217.114.57:45381: connect: connection refused
  f016024: 'dial, China, Fuzhou', // * [/ip4/220.176.125.10/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.10:23450: i/o timeout
  f016202: 'dial, Korea, Songpa-gu', // * [/ip4/118.223.164.15/tcp/42155] dial tcp4 0.0.0.0:35209->118.223.164.15:42155: i/o timeout
  f016207: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused
  f016238: 'dial, NR', // * [/ip4/192.168.100.27/tcp/57670] dial tcp4 0.0.0.0:35209->192.168.100.27:57670: i/o timeout
  f016263: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f016279: 'dial, Finland, Helsinki', // * [/ip4/95.216.68.181/tcp/46717] dial tcp4 0.0.0.0:35209->95.216.68.181:46717: i/o timeout
  f016297: 'dial, China, Mianyang + USA', // * [/ip4/47.254.128.95/tcp/7000] dial tcp4 0.0.0.0:35209->47.254.128.95:7000: i/o timeout  * [/ip4/47.254.25.128/tcp/7000] dial tcp4 0.0.0.0:35209->47.254.25.128:7000: i/o timeout
  f016302: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.5:23450: i/o timeout
  f016364: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 36.33.216.70:10240: i/o timeout
  f016419: 'dial, USA, Mountain View', // * [/ip6/2601:647:4700:7e:b85f:e6cd:bc32:478f/tcp/44545] dial tcp6 [2601:647:4700:7e:b85f:e6cd:bc32:478f]:44545: connect: network is unreachable  * [/ip4/127.0.0.1/tcp/33585] dial tcp4 127.0.0.1:33585: connect: connection refused  * [/ip6/::1/tcp/44545] dial tcp6 [::1]:44545: connect: connection refused  * [/ip4/73.158.190.21/tcp/58442] dial tcp4 0.0.0.0:35209->73.158.190.21:58442: i/o timeout  * [/ip4/73.158.190.21/tcp/26715] dial tcp4 0.0.0.0:35209->73.158.190.21:26715: i/o timeout  * [/ip4/192.168.86.244/tcp/33585] dial tcp4 0.0.0.0:35209->192.168.86.244:33585: i/o timeout
  f016479: 'dial, China, Dongguan', // * [/ip4/218.16.123.133/tcp/4001] dial tcp4 218.16.123.133:4001: connect: connection refused
  f016509: 'dial, China, Fuzhou', // * [/ip4/220.249.190.57/tcp/44567] dial tcp4 0.0.0.0:35209->220.249.190.57:44567: i/o timeout  * [/ip4/10.25.40.61/tcp/40271] dial tcp4 0.0.0.0:35209->10.25.40.61:40271: i/o timeout
  f016525: 'dial, China, Guangzhou', // * [/ip4/8.210.76.199/tcp/18899] dial tcp4 0.0.0.0:35209->8.210.76.199:18899: i/o timeout
  f016579: 'dial, USA, Howell', // * [/ip4/96.64.7.172/tcp/5472] dial tcp4 96.64.7.172:5472: connect: connection refused
  f016603: 'dial, China, Dongguan', // * [/ip4/121.10.0.90/tcp/57670] dial tcp4 121.10.0.90:57670: i/o timeout
  f016659: 'dial, USA, Alpharetta', // * [/ip4/192.168.1.64/tcp/41931] dial tcp4 192.168.1.64:41931: connect: no route to host
  f016850: 'dial, Japan', // * [/ip4/163.44.165.168/tcp/30333] dial tcp4 0.0.0.0:35209->163.44.165.168:30333: i/o timeout
  f016866: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.4:23450: i/o timeout
  f016917: 'dial, China, Guangdong', // * [/ip4/183.232.116.200/tcp/4001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQgQZKZbW7ZDVMspANNSfGkjqJxuWxc7WDauGoEJGvtXu, but remote key matches 12D3KooWPkML61uXkPFbnaSretqsS8qYmKkrfeEmnhGgfrfQ8UDY
  f017038: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.2:23450: i/o timeout
  f017067: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.3:23450: i/o timeout
  f017082: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.194/tcp/23450] dial tcp4 0.0.0.0:35209->45.192.184.194:23450: i/o timeout
  f017136: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f017193: 'dial, Singapore', // * [/ip4/8.211.49.16/tcp/14567] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAqdzpU6946afUESqGnf3GMo4YDojUasgPaG4djLhM8C3, but remote key matches 12D3KooWRoWj1PymQ5oEYrRqmHozWSjFJzHTsnqVkPRRgvj52Q8n
  f017194: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 36.33.216.70:10240: i/o timeout
  f017200: 'dial, Lithuania', // * [/ip4/46.166.165.72/tcp/10240] dial tcp4 0.0.0.0:35209->46.166.165.72:10240: i/o timeout
  f017242: 'dial, China, Guangdong', // * [/ip4/103.142.248.7/tcp/4347] dial tcp4 103.142.248.7:4347: connect: connection refused
  f017244: 'dial, Korea, Seoul', // * [/ip4/141.164.34.113/tcp/41111] dial tcp4 0.0.0.0:35209->141.164.34.113:41111: i/o timeout
  f017250: 'dial, China, Zhejiang', // * [/ip4/161.117.88.227/tcp/35252] dial tcp4 0.0.0.0:35209->161.117.88.227:35252: i/o timeout
  f017266: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.2:23450: i/o timeout
  f017273: 'dial, China, Liaoning', // * [/ip4/116.132.221.10/tcp/10241] dial tcp4 116.132.221.10:10241: connect: connection refused
  f017285: 'dial, China, Maoming', // * [/ip4/61.143.232.26/tcp/12345] dial tcp4 61.143.232.26:12345: connect: connection refused
  f017488: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 35.224.87.15:24002: connect: connection refused
  f017635: 'dial, China, Nanchong', // * [/ip4/124.161.87.252/tcp/32005] dial tcp4 0.0.0.0:35209->124.161.87.252:32005: i/o timeout
  f017672: 'dial, China, Cangzhou', // * [/ip4/221.195.0.71/tcp/10240] dial tcp4 221.195.0.71:10240: connect: connection refused
  f017738: 'dial, China', // * [/ip4/101.36.64.212/tcp/42545] dial tcp4 101.36.64.212:42545: connect: connection refused
  f017796: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.4:23450: i/o timeout
  f018088: 'dial, USA, Mountain View', // * [/ip6/2601:647:4700:7e:8d28:74f1:99b6:9807/tcp/36371] dial tcp6 [2601:647:4700:7e:8d28:74f1:99b6:9807]:36371: connect: network is unreachable  * [/ip6/::1/tcp/36371] dial tcp6 [::1]:36371: connect: connection refused  * [/ip4/127.0.0.1/tcp/41941] dial tcp4 127.0.0.1:41941: connect: connection refused  * [/ip4/73.158.190.21/tcp/39083] dial tcp4 0.0.0.0:35209->73.158.190.21:39083: i/o timeout  * [/ip4/73.158.190.21/tcp/52286] dial tcp4 0.0.0.0:35209->73.158.190.21:52286: i/o timeout  * [/ip4/192.168.86.244/tcp/41941] dial tcp4 0.0.0.0:35209->192.168.86.244:41941: i/o timeout
  f018119: 'dial, China, Dongguan', // * [/ip4/113.105.174.9/tcp/10000] dial tcp4 0.0.0.0:35209->113.105.174.9:10000: i/o timeout
  f018203: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/5678] dial tcp4 0.0.0.0:35209->95.216.99.39:5678: i/o timeout
  f018429: 'dial, Korea, Hwaseong-si', // * [/ip4/112.222.105.76/tcp/24102] dial tcp4 112.222.105.76:24102: i/o timeout
  f018440: 'dial, Russia, St. Petersburg', // * [/ip4/188.187.61.69/tcp/44389] dial tcp4 188.187.61.69:44389: connect: connection refused
  f018464: 'dial, Sweden, Stockholm', // * [/ip4/85.30.30.76/tcp/38387] dial tcp4 0.0.0.0:35209->85.30.30.76:38387: i/o timeout
  f018476: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.4:23450: i/o timeout
  f018493: 'dial, Denmark, Kobenhavn S', // * [/ip4/185.50.195.183/tcp/10243] dial tcp4 0.0.0.0:35209->185.50.195.183:10243: i/o timeout
  f018498: 'dial, Singapore', // * [/ip4/8.209.119.18/tcp/14567] dial tcp4 0.0.0.0:35209->8.209.119.18:14567: i/o timeout
  f018506: 'dial, USA, New York', // * [/ip4/47.254.77.92/tcp/41112] failed to negotiate security protocol: EOF
  f018509: 'dial, China, Dongguan', // * [/ip4/113.105.174.6/tcp/10000] dial tcp4 0.0.0.0:35209->113.105.174.6:10000: i/o timeout
  f018525: 'dial, USA, Queens', // * [/ip4/24.90.181.106/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPPX51KkQcQhzM1LKBbu3uV2ZkFsBSmcDjLG7kgKqQbp4, but remote key matches 12D3KooWHcpqZ9Ps8cXHk2JaQVqAhjC7cPiLM14YKTmfAXT1LN3M
  f018540: 'dial, Netherlands', // * [/ip4/185.232.59.178/tcp/3347] dial tcp4 185.232.59.178:3347: connect: connection refused
  f018544: 'dial, Korea, Uijeongbu-si', // * [/ip4/119.193.190.72/tcp/5472] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGgihyz3aZvtSpXyZLtarqMxESor6KXzEp3poz8DRwTuZ, but remote key matches 12D3KooWBhrQUQC5gWtHeRNS1V7ThxEv4hKLCk8Z4PZNy7T1oruT
  f018562: 'dial, New Zealand, Masterton', // * [/ip4/121.99.224.109/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWC9jegSfiHcei2BeABkn1PA164oQ7kpx2AQ12ix136988, but remote key matches 12D3KooWNobH75Kmsr4LhtLbWXpViuRoqtiPUcso2VutUQc4TrtL  * [/ip4/121.99.224.109/tcp/10241] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWC9jegSfiHcei2BeABkn1PA164oQ7kpx2AQ12ix136988, but remote key matches 12D3KooWDcBfXqrBJvVEZZNfu41waaD2rLDM1H5xNBTJEMu5iec5
  f018806: 'dial, Finland, Helsinki', // * [/ip4/95.217.114.57/tcp/45381] dial tcp4 95.217.114.57:45381: connect: connection refused
  f018809: 'dial, USA, New York', // * [/ip4/45.61.255.20/tcp/41114] dial tcp4 0.0.0.0:35209->45.61.255.20:41114: i/o timeout
  f018851: 'dial, China, Deyang + Singapore', // * [/ip4/103.242.134.36/tcp/12288] failed to negotiate security protocol: read tcp4 10.0.1.52:35209->103.242.134.36:12288: read: connection reset by peer
  f018905: 'dial, Brazil, Sao Paulo', // * [/ip4/18.228.17.31/tcp/2347] dial tcp4 0.0.0.0:35209->18.228.17.31:2347: i/o timeout
  f018911: 'dial, USA, Portland', // * [/ip4/170.33.12.164/tcp/9090] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPMgigioxtnUsBqwBemuuxjZLKKpfhT3FmrWumyWDkQEd, but remote key matches 12D3KooWDkgbKexne42yFhovBdv7dEnZA4XpXYchEQpvEKpg2qTJ
  f019002: 'dial, USA', // * [/ip4/47.245.132.152/tcp/14567] dial tcp4 0.0.0.0:35209->47.245.132.152:14567: i/o timeout
  f019006: 'dial, Vietman, Ho Chi Minh City + China, Hong Kong', // * [/ip4/119.28.141.16/tcp/2312] dial tcp4 119.28.141.16:2312: connect: connection refused
  f019007: 'dial, China, Shenzhen + Hong Kong', // * [/ip4/154.91.38.15/tcp/51109] dial tcp4 154.91.38.15:51109: connect: connection refused  * [/ip4/103.44.247.132/tcp/51109] dial tcp4 103.44.247.132:51109: connect: connection refused
  f019015: 'dial, China, Hangzhou + Singapore', // * [/ip4/170.33.12.187/tcp/7087] dial tcp4 0.0.0.0:35209->170.33.12.187:7087: i/o timeout  * [/ip4/170.33.12.188/tcp/7087] dial tcp4 0.0.0.0:35209->170.33.12.188:7087: i/o timeout
  f019041: 'dial, Singapore', // * [/ip4/47.110.140.124/tcp/10242] failed to negotiate security protocol: read tcp4 10.0.1.9:35209->47.110.140.124:10242: read: connection reset by peer  * [/ip4/8.211.4.148/tcp/10242] failed to negotiate security protocol: EOF
  f019053: 'dial, Singapore', // * [/ip4/8.211.4.148/tcp/10243] failed to negotiate security protocol: EOF
  f019056: 'dial, South Africa, Cape Town', // * [/ip4/13.244.216.178/tcp/16079] dial tcp4 0.0.0.0:35209->13.244.216.178:16079: i/o timeout
  f019068: "dial, China, Ya'an, fri", // * [/ip4/110.188.25.2/tcp/30032] dial tcp4 110.188.25.2:30032: connect: connection refused
  f019071: 'dial, USA, New York', // * [/ip4/45.61.255.21/tcp/12345] dial tcp4 0.0.0.0:35209->45.61.255.21:12345: i/o timeout
  f019073: 'dial, Germany, Frankfurt', // * [/ip4/18.157.80.183/tcp/30005] dial tcp4 0.0.0.0:35209->18.157.80.183:30005: i/o timeout
  f019087: 'dial, South Africa, Johannesburg', // * [/ip4/152.32.140.119/tcp/41116] failed to negotiate security protocol: EOF
  f019090: 'dial, South Africa, Johannesburg', // * [/ip4/152.32.140.119/tcp/41115] failed to negotiate security protocol: EOF
  f019091: 'dial, China, Chengdu', // * [/ip4/182.131.4.194/tcp/10080] dial tcp4 182.131.4.194:10080: connect: connection refused
  f019094: 'dial, Brazil, Sao Paulo', // * [/ip4/177.71.173.122/tcp/8888] dial tcp4 0.0.0.0:35209->177.71.173.122:8888: i/o timeout
  f019097: 'dial, Russia, Irkutsk', // * [/ip4/90.188.227.20/tcp/46717] dial tcp4 0.0.0.0:35209->90.188.227.20:46717: i/o timeout
  f019133: 'dial, UK, Mansfield', // * [/ip4/92.12.185.10/tcp/24002] dial tcp4 92.12.185.10:24002: i/o timeout
  f019145: 'dial, Brazil, Sao Paulo', // * [/ip4/54.232.153.175/tcp/16088] dial tcp4 0.0.0.0:35209->54.232.153.175:16088: i/o timeout
  f019150: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.4:23450: i/o timeout
  f019155: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15110] dial tcp4 0.0.0.0:35209->101.206.156.204:15110: i/o timeout
  f019169: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.40.58/tcp/14567] dial tcp4 0.0.0.0:35209->15.228.40.58:14567: i/o timeout
  f019182: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15111] dial tcp4 0.0.0.0:35209->101.206.156.204:15111: i/o timeout
  f019185: 'dial, China, Beijing', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f019196: 'dial, China, Shenzhen + Hong Kong', // * [/ip4/103.44.247.132/tcp/51101] dial tcp4 103.44.247.132:51101: connect: connection refused  * [/ip4/115.91.38.15/tcp/51101] dial tcp4 0.0.0.0:35209->115.91.38.15:51101: i/o timeout
  f019233: 'dial, Russia', // * [/ip4/158.255.7.196/tcp/46207] dial tcp4 0.0.0.0:35209->158.255.7.196:46207: i/o timeout
  f019248: 'dial, USA, Council Bluffs', // * [/ip4/35.239.142.4/tcp/46717] dial tcp4 0.0.0.0:35209->35.239.142.4:46717: i/o timeout
  f019249: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 35.224.87.15:24002: connect: connection refused
  f019279: 'dial, Canada, Calgary', // * [/ip4/70.77.238.98/tcp/46717] dial tcp4 70.77.238.98:46717: connect: connection refused
  f019280: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.4:23450: i/o timeout
  f019281: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:35209->45.192.184.195:23450: i/o timeout
  f019317: 'dial, Brazil, Sao Paulo', // * [/ip4/177.71.163.156/tcp/10240] dial tcp4 0.0.0.0:35209->177.71.163.156:10240: i/o timeout
  f019325: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15090] dial tcp4 0.0.0.0:35209->101.206.156.204:15090: i/o timeout
  f019326: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15093] dial tcp4 0.0.0.0:35209->101.206.156.204:15093: i/o timeout
  f019327: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15094] dial tcp4 0.0.0.0:35209->101.206.156.204:15094: i/o timeout
  f019352: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15095] dial tcp4 0.0.0.0:35209->101.206.156.204:15095: i/o timeout
  f019459: 'dial, USA, Alpharetta', // * [/ip4/45.26.152.112/tcp/4137] dial tcp4 45.26.152.112:4137: connect: connection refused
  f019462: 'dial, Netherlands, Groningen', // * [/ip4/34.90.112.11/tcp/46717] dial tcp4 0.0.0.0:35209->34.90.112.11:46717: i/o timeout
  f019515: 'dial, Netherlands, Groningen', // * [/ip4/35.204.3.95/tcp/46717] dial tcp4 0.0.0.0:35209->35.204.3.95:46717: i/o timeout
  f019523: 'dial, USA, Los Angeles', // * [/ip4/47.156.151.169/tcp/33505] dial tcp4 0.0.0.0:35209->47.156.151.169:33505: i/o timeout
  f019551: 'dial, UK', // * [/ip6/2a04:7340:0:1002::205/tcp/1347] dial tcp6 [2a04:7340:0:1002::205]:1347: connect: network is unreachable  * [/ip4/185.37.216.70/tcp/1347] dial tcp4 185.37.216.70:1347: connect: connection refused
  f019596: 'dial, USA, Queens', // * [/ip4/24.90.181.106/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJ7XhEorySoQkEyajCdcsr9qcesafyFqS8apNeWwF26Ke, but remote key matches 12D3KooWHcpqZ9Ps8cXHk2JaQVqAhjC7cPiLM14YKTmfAXT1LN3M
  f019637: 'dial, China, Nanchang', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.4:23450: i/o timeout
  f019660: 'dial, South Korea, Cheonan', // * [/ip4/112.167.204.88/tcp/10241] dial tcp4 112.167.204.88:10241: connect: connection refused
  f019710: 'dial, Australia, Sydney', // * [/ip4/13.55.45.217/tcp/27002] dial tcp4 0.0.0.0:35209->13.55.45.217:27002: i/o timeout
  f019779: 'dial, China, Xuancheng', // * [/ip4/117.71.104.68/tcp/10000] dial tcp4 117.71.104.68:10000: connect: connection refused
  f020223: 'dial, China, Guiyang', // * [/ip4/111.85.176.10/tcp/10240] dial tcp4 0.0.0.0:35209->111.85.176.10:10240: i/o timeout
  f020330: 'dial, USA', // * [/ip4/10.10.33.155/tcp/14567] dial tcp4 0.0.0.0:35209->10.10.33.155:14567: i/o timeout
  f020331: 'dial, USA', // * [/ip4/10.10.11.81/tcp/14567] dial tcp4 10.10.11.81:14567: i/o timeout
  f020358: 'dial, China, Xinxiang', // * [/ip4/27.50.142.73/tcp/1347] dial tcp4 27.50.142.73:1347: connect: connection refused
  f020388: 'dial, Korea, Uijeongbu-si', // * [/ip4/119.193.190.72/tcp/5472] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPdmxWWt6PobzkuCgUsUZwyDYM9TGnvAu38rnd4TshTLZ, but remote key matches 12D3KooWBhrQUQC5gWtHeRNS1V7ThxEv4hKLCk8Z4PZNy7T1oruT
  f020393: 'dial, China, Beijing', // * [/ip4/123.125.194.158/tcp/6789] dial tcp4 123.125.194.158:6789: connect: connection refused
  f020401: 'dial, USA, Raleigh', // * [/ip4/136.56.12.204/tcp/27972] dial tcp4 136.56.12.204:27972: i/o timeout
  f020431: 'dial, Korea, Seoul', // * [/ip4/125.128.51.180/tcp/24001] dial tcp4 125.128.51.180:24001: i/o timeout
  f020452: 'dial, China, Hangzhou + Singapore', // * [/ip4/170.33.12.186/tcp/17012] dial tcp4 0.0.0.0:35209->170.33.12.186:17012: i/o timeout
  f020516: 'dial, China, Dalian', // * [/ip4/42.202.134.189/tcp/33666] dial tcp4 0.0.0.0:35209->42.202.134.189:33666: i/o timeout
  f020572: 'dial, China, Nanchang', // * [/ip4/220.176.125.123/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.123:23450: i/o timeout
  f020604: 'dial, Singapore', // * [/ip4/8.209.106.203/tcp/14567] dial tcp4 0.0.0.0:35209->8.209.106.203:14567: i/o timeout
  f020608: 'dial, Russia', // * [/ip4/82.148.25.250/tcp/24001] dial tcp4 0.0.0.0:35209->82.148.25.250:24001: i/o timeout
  f020618: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17011] dial tcp4 0.0.0.0:35209->170.33.12.186:17011: i/o timeout
  f020622: 'dial, China, Hong Kong', // * [/ip4/43.228.183.102/tcp/40573] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHF5unBQ9CuS2jnnxCzvRHGiMMQbH487tbfoGUAvhY4ik, but remote key matches 12D3KooWQzhuFoqWfap5FT3hD9jTSc1wiP3Sn735mstACYiPuw75
  f020626: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:35209->73.158.16.48:30390: i/o timeout
  f020771: 'dial, Japan, Setagaya-ku', // * [/ip4/59.138.253.69/tcp/55555] dial tcp4 59.138.253.69:55555: connect: connection refused
  f020814: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/11051] dial tcp4 183.63.203.161:11051: i/o timeout
  f020816: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/11052] dial tcp4 183.63.203.161:11052: i/o timeout
  f020891: 'dial, China, Wenzhou', // * [/ip4/122.228.196.208/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSitZhuvzGB9mxZvC1rN6ubezTJUrHV2nXxWaBvJQ1Bji, but remote key matches 12D3KooWDLC4HXzHjaMegLssFx9HwMmyNzhGc4XmcSSP9rZaSFyv
  f020967: 'dial, China, Chengdu', // * [/ip4/171.221.236.129/tcp/45001] dial tcp4 171.221.236.129:45001: i/o timeout
  f021142: 'dial, China, Fuzhou', // * [/ip4/220.176.125.110/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.110:23450: i/o timeout
  f021292: 'dial, China, Hong Kong', // * [/ip4/43.228.183.102/tcp/40573] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKztv937mFfnZpXpHnJP7DFTSMeeJrwjktcs5oSvNmfPN, but remote key matches 12D3KooWQzhuFoqWfap5FT3hD9jTSc1wiP3Sn735mstACYiPuw75
  f021316: 'dial, China, Yangzhou', // * [/ip4/58.220.66.88/tcp/2347] dial tcp4 58.220.66.88:2347: connect: connection refused
  f021428: 'dial, Norway, Borgen', // * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAgRs1gYFCWPQopKBh3nZPDfq3yJ7gjyvvmd9dpyw7mHH, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f021461: 'dial, China, Yangzhou + Singapore', // * [/ip4/170.33.12.186/tcp/17361] dial tcp4 0.0.0.0:35209->170.33.12.186:17361: i/o timeout
  f021463: 'dial, China, Mianyang', // * [/ip4/117.175.0.194/tcp/18181] dial tcp4 0.0.0.0:35209->117.175.0.194:18181: i/o timeout
  f021475: 'dial, China, Dongguan', // * [/ip4/183.240.203.136/tcp/34567] dial tcp4 183.240.203.136:34567: connect: connection refused
  f021483: 'dial, China, Beijing', // * [/ip4/124.250.42.202/tcp/24567] dial tcp4 124.250.42.202:24567: connect: connection refused
  f021547: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17329] dial tcp4 0.0.0.0:35209->170.33.12.186:17329: i/o timeout
  f021644: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:35209->73.158.16.48:30390: i/o timeout
  f021961: 'dial, NR', // * [/ip4/192.168.1.13/tcp/7000] dial tcp4 0.0.0.0:35209->192.168.1.13:7000: i/o timeout  * [/ip4/110.80.136.19/tcp/7000] failed to negotiate security protocol: context deadline exceeded
  f022031: 'dial, China, Maoming', // * [/ip4/61.143.232.26/tcp/12345] dial tcp4 61.143.232.26:12345: connect: connection refused
  f022069: 'dial, China, Hong Kong', // * [/ip4/221.127.8.183/tcp/24001] dial tcp4 0.0.0.0:35209->221.127.8.183:24001: i/o timeout
  f022111: 'dial, China, Quanzhou', // * [/ip4/112.47.13.98/tcp/8081] dial tcp4 112.47.13.98:8081: connect: connection refused
  f022144: 'dial, China, Fuzhou', // * [/ip4/220.176.125.110/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.110:23450: i/o timeout
  f022146: 'dial, China, Fuzhou', // * [/ip4/220.176.125.123/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.123:23450: i/o timeout
  f022157: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:35209->220.176.125.5:23450: i/o timeout
  f022166: 'dial, Norway, Borgen', // * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLsZ4PQtpyZQpEfXvheZHgirJe7bQmse7brRndyaWs3Jh, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f022261: 'dial, China, Luzhou', // * [/ip4/175.155.178.195/tcp/7777] dial tcp4 175.155.178.195:7777: connect: connection refused
  f022304: 'dial, China, Taiyuan', // * [/ip4/221.204.177.81/tcp/2222] dial tcp4 221.204.177.81:2222: connect: connection refused
  f022320: 'dial, Korea, Seoul', // * [/ip4/220.119.37.150/tcp/24001] dial tcp4 0.0.0.0:35209->220.119.37.150:24001: i/o timeout
  f022351: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.97/tcp/24001] dial tcp4 211.114.218.97:24001: connect: connection refused
  f022361: 'dial, NR', // * [/ip4/170.33.12.95/tcp/16699] failed to negotiate security protocol: read tcp4 10.0.1.52:35209->170.33.12.95:16699: read: connection reset by peer
  f022364: 'dial, Korea, Jungang-gu', // * [/ip4/125.129.37.73/tcp/10241] dial tcp4 0.0.0.0:35209->125.129.37.73:10241: i/o timeout
  f022405: 'dial, Russia', // * [/ip4/158.255.7.196/tcp/46175] dial tcp4 0.0.0.0:35209->158.255.7.196:46175: i/o timeout
  f022687: 'dial, China, Chengdu', // * [/ip4/182.131.4.194/tcp/10080] dial tcp4 182.131.4.194:10080: connect: connection refused
  f022780: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.98/tcp/24001] dial tcp4 211.114.218.98:24001: connect: connection refused
  f022787: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.99/tcp/24001] dial tcp4 0.0.0.0:35209->211.114.218.99:24001: i/o timeout
  f022976: 'dial, Korea, Cheongju-si', // * [/ip4/112.167.204.88/tcp/10241] dial tcp4 112.167.204.88:10241: connect: connection refused
  f023016: 'dial, NR', // * [/ip4/10.6.1.121/tcp/61121] dial tcp4 0.0.0.0:35209->10.6.1.121:61121: i/o timeout
  f023190: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 36.33.216.70:10240: i/o timeout
  f023202: 'dial, China, Wuxi', // * [/ip4/58.215.232.74/tcp/10200] dial tcp4 58.215.232.74:10200: connect: connection refused  * [/ip4/192.168.1.18/tcp/1020] dial tcp4 0.0.0.0:35209->192.168.1.18:1020: i/o timeout
  f023205: 'dial, NR', // * [/ip4/10.10.33.154/tcp/14567] dial tcp4 0.0.0.0:35209->10.10.33.154:14567: i/o timeout
  f023499: 'dial, NR', // * [/ip4/118.116.0.252/tcp/7000] dial tcp4 118.116.0.252:7000: connect: connection refused  * [/ip4/192.168.10.2/tcp/7000] dial tcp4 0.0.0.0:35209->192.168.10.2:7000: i/o timeout
  f023549: 'dial, China, Zhejiang', // * [/ip4/47.102.202.230/tcp/5472] dial tcp4 47.102.202.230:5472: connect: connection refused
  f023583: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.120/tcp/24001] dial tcp4 211.114.218.120:24001: connect: connection refused
  f023586: 'dial, USA, Germantown', // * [/ip4/96.255.216.221/tcp/23432] dial tcp4 0.0.0.0:35209->96.255.216.221:23432: i/o timeout
  f023654: 'dial, China, Hong Kong', // * [/ip4/103.100.152.118/tcp/24001] dial tcp4 103.100.152.118:24001: i/o timeout
  f023655: 'dial, Australia, Brisbane', // * [/ip4/144.137.18.224/tcp/54321] dial tcp4 144.137.18.224:54321: connect: connection refused
  f023674: 'dial, China, Fuzhou', // * [/ip4/220.176.125.99/tcp/23450] dial tcp4 220.176.125.99:23450: connect: connection refused
  f023826: 'dial, USA, Germantown', // * [/ip4/96.255.216.221/tcp/23432] dial tcp4 0.0.0.0:35209->96.255.216.221:23432: i/o timeout
  f023937: 'dial, China, Fuzhou', // * [/ip4/220.176.125.99/tcp/23450] dial tcp4 220.176.125.99:23450: connect: connection refused
  f024066: 'dial, NR', // * [/ip4/182.131.4.197/tcp/10080] dial tcp4 182.131.4.197:10080: connect: connection refused
  f024070: 'dial, Japan, Setagaya-ku', // * [/ip4/59.138.253.69/tcp/55555] dial tcp4 59.138.253.69:55555: connect: connection refused
  f024108: 'dial, Korea', // * [/ip4/59.23.202.120/tcp/23234] dial tcp4 59.23.202.120:23234: connect: connection refused
  f024137: 'dial, NR', // * [/ip4/10.10.33.182/tcp/14567] dial tcp4 0.0.0.0:35209->10.10.33.182:14567: i/o timeout
  f024150: 'dial, UK, Mansfield', // * [/ip4/37.249.6.148/tcp/24002] dial tcp4 0.0.0.0:35209->37.249.6.148:24002: i/o timeout
  f024182: 'dial, NR', // * [/ip4/14.136.246.135/tcp/46717] dial tcp4 0.0.0.0:35209->14.136.246.135:46717: i/o timeout
  f024190: 'dial, China, Wenzhou', // * [/ip4/122.228.196.208/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQHPkEDKyJHgsVzg8t8WA59AuGYbazD2hDMktKJHBJVc6, but remote key matches 12D3KooWDLC4HXzHjaMegLssFx9HwMmyNzhGc4XmcSSP9rZaSFyv
  f024511: 'dial, NR', // * [/ip4/103.44.247.137/tcp/51105] dial tcp4 0.0.0.0:35209->103.44.247.137:51105: i/o timeout
  f024893: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.1/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWACjFnNXeyRrVo4s5zF1SLUidAM8si95q2t5ofjXKecz1, but remote key matches 12D3KooWP4sdNCGcnwS9GBTF1MuoEYtCEFTpiLidL6Zf9Kk86igA
  f025002: 'dial, NR', // * [/ip4/10.30.8.211/tcp/14567] dial tcp4 0.0.0.0:35209->10.30.8.211:14567: i/o timeout

  // XNR (Not routable, tested)

  f01000: 'xnr, NR - bootstrap',
  f01001: 'xnr, NR - bootstrap',
  f01013: 'xnr, NR',
  f01101: 'xnr, China, Shanghai',
  f01102: 'xnr, China, Shandong',
  f01156: 'xnr, China, Hangzhou',
  f01232: 'xnr, China, Hangzhou',
  f01274: 'xnr, China, Guangdong',
  f02304: 'xnr, USA, Mountain View',
  f02382: 'xnr, China, Zhongshan-cfa',
  f02385: 'xnr, USA, East Islip',
  f02398: 'xnr, China, Hong Kong',
  f02404: 'xnr, Korea, Seoul',
  f02424: 'xnr, Korea, Wanju',
  f02436: 'xnr, Netherlands',
  f02506: 'xnr, USA, Clarksville',
  f02515: 'xnr, China, Hangzhou',
  f02518: 'xnr, China, Shaanxi',
  f02575: 'xnr, USA, Davis',
  f02608: 'xnr, USA, San Jose',
  f02768: 'xnr, China, Hong Kong',
  f02774: 'xnr, Australia, Sydney',
  f03249: 'xnr, NR',
  f03264: 'xnr, Korea, Bucheon-si',
  f03319: 'xnr, NR',
  f03341: 'xnr, NR',
  f03346: 'xnr, China, Huzhou, wckj',
  f03361: 'xnr, China, Guangzhou',
  f03428: 'xnr, China, Beijing + Jiaxing + Germany, Frankfurt',
  f03487: 'xnr, China, Yibin',
  f03619: 'xnr, China, Xiamen',
  f03622: 'xnr, 黑犇科技',
  f03765: 'xnr, Colombia, Medellin',
  f04444: 'xnr, NR',
  f06262: 'xnr, China, Guangzhou',
  f07717: 'xnr, China, Shenyang',
  f07731: 'xnr, NR',
  f07772: 'xnr, China, Dongguan',
  f07796: 'xnr, China, Hunan',
  f07827: 'xnr, China, Wuhan, 天际合',
  f07843: 'xnr, NR',
  f07866: 'xnr, China, Foshan',
  f07924: 'xnr, USA',
  f07931: 'xnr, NR',
  f07945: 'xnr, China, Dongguan',
  f07959: 'xnr, NR',
  f07964: 'xnr, USA, Ashburn',
  f08022: 'xnr, China, Yibin',
  f08053: 'xnr, NR',
  f08061: 'xnr, China, Foshan',
  f08095: 'xnr, Canada, Surrey',
  f08097: 'xnr, Korea, Pyeongtaek-si',
  f08136: "xnr, China, Xi'an",
  f08171: 'xnr, NR',
  f08183: 'xnr, USA, Irvine',
  f08223: 'xnr, NR',
  f08225: 'xnr, Australia, Sydney',
  f08238: 'xnr, NR',
  f08246: 'xnr, USA',
  f08280: 'xnr, NR',
  f08284: 'xnr, China, Liaoning',
  f08290: 'xnr, NR',
  f08311: 'xnr, China, Shenzhen',
  f08315: 'xnr, China, Chongqing',
  f08319: 'xnr, NR',
  f08322: 'xnr, China, Chongqing',
  f08327: 'xnr, NR',
  f08349: 'xnr, China, Guangzhou, hkicloud',
  f08361: 'xnr, Malaysia, Kulai',
  f08385: 'xnr, NR',
  f08388: 'xnr, China, Taizhou',
  f08390: 'xnr, China, Shenzhen',
  f08393: 'xnr, NR',
  f08402: 'xnr, China, Sichuan',
  f08406: 'xnr, China, Shenzhen',
  f08424: 'xnr, China, Chengdu',
  f08425: 'xnr, NR',
  f08429: 'xnr, yfeing',
  f08440: 'xnr, France, Fontenay-sous-Bois',
  f08460: 'xnr, NR',
  f08503: 'xnr, NR',
  f08574: 'xnr, USA',
  f08787: 'xnr, China, Yibin',
  f08789: 'xnr, China, Fuzhou',
  f08791: 'xnr, NR',
  f08893: 'xnr, NR',
  f08902: 'xnr, NR',
  f08911: 'xnr, Korea, Wanju',
  f08964: 'xnr, NR',
  f08980: 'xnr, USA, San Jose',
  f08988: 'xnr, Korea, Hwaseong-si',
  f08994: 'xnr, NR',
  f09006: 'xnr, NR',
  f09007: 'xnr, Korea, Hwaseong-si',
  f09035: 'xnr, NR',
  f09053: 'xnr, China, Shenzhen',
  f09055: 'xnr, China, Jieyang',
  f09076: 'xnr, NR',
  f09084: 'xnr, NR',
  f09529: 'xnr, NR',
  f09538: 'xnr, NR',
  f09578: 'xnr, NR',
  f09594: 'xnr, NR',
  f09610: 'xnr, China, Beijing',
  f09629: 'xnr, NR',
  f09662: 'xnr, Canada, Surrey',
  f09707: 'xnr, China, Guangdong',
  f09712: 'xnr, China, Chengdu',
  f09719: 'xnr, Korea, Geumcheon-gu',
  f09733: 'xnr, China, Chongqing',
  f09736: 'xnr, China, Guangdong',
  f09753: 'xnr, Korea, Pyeongtaek-si',
  f09762: 'xnr, China, Guangdong',
  f09805: 'xnr, China, Fuzhou',
  f09840: 'xnr, China, Baoding',
  f09912: 'xnr, USA, Concord',
  f09966: 'xnr, NR',
  f09974: 'xnr, Canada, Calgary',
  f09997: 'xnr, USA',
  f010009: 'xnr, USA, East Islip',
  f010028: 'xnr, USA, Berkeley',
  f010033: 'xnr, NR',
  f010040: 'xnr, China, Shenzhen',
  f010041: 'xnr, USA, Jackson',
  f010078: 'xnr, China, Zhangjiakou + Hong Kong',
  f010173: 'xnr, Korea, Pyeongtaek-si',
  f010200: 'xnr, NR',
  f010213: 'xnr, NR',
  f010222: 'xnr, NR',
  f010227: 'xnr, China, Xiamen',
  f010244: 'xnr, USA, Newton',
  f010248: 'xnr, China, Yibin',
  f010265: 'xnr, China, Zhengzhou',
  f010275: 'xnr, Korea, Cheongju-si + USA',
  f010277: 'xnr, France, Fontenay-sous-Bois',
  f010281: 'xnr, China, Shanghai',
  f010282: 'xnr, USA, San Francisco',
  f010283: 'xnr, Brazil, Sao Paulo',
  f010292: 'xnr, NR',
  f010293: 'xnr, China, Xiamen',
  f010297: 'xnr, USA, Howell',
  f010303: 'xnr, China, Guangdong',
  f010305: 'xnr, NR',
  f010310: 'xnr, Canada, Surrey',
  f010313: 'xnr, NR',
  f010315: 'xnr, Canada, Surrey',
  f010346: 'xnr, China, Karamay',
  f010382: 'xnr, NR',
  f010402: 'xnr, China, Shenyang',
  f010425: 'xnr, NR',
  f010433: 'xnr, Korea, Seoul',
  f010453: 'xnr, China, Shaanxi',
  f010468: 'xnr, China, Guangzhou',
  f010490: 'xnr, NR',
  f010517: 'xnr, China, Chongqing',
  f010520: 'xnr, China, Hangzhou',
  f010542: 'xnr, China, Ordos',
  f010549: 'xnr, China, Ordos',
  f010551: 'xnr, China, Shenyang',
  f010566: 'xnr, NR',
  f010591: 'xnr, China, Wuhan',
  f010601: 'xnr, NR',
  f010602: 'xnr, China, Guangdong',
  f010603: 'xnr, China, Baoding',
  f010612: 'xnr, USA, Mountain View',
  f014207: 'xnr, USA',
  f014261: 'xnr, China, Fuzhou',
  f014271: 'xnr, China, Fuzhou',
  f014314: 'xnr, Korea, Bucheon-si',
  f014331: 'xnr, China, Chongqing',
  f014335: 'xnr, NR',
  f014354: 'xnr, USA, Concord',
  f014366: 'xnr, USA, Mountain View',
  f014388: 'xnr, China, Guangdong',
  f014389: 'xnr, China, Chongqing',
  f014407: 'xnr, China, Shanghai',
  f014419: 'xnr, USA, San Diego',
  f014420: 'xnr, Russia, Samara',
  f014425: 'xnr, Singapore',
  f014477: 'xnr, China, Hangzhou',
  f014478: 'xnr, Finland',
  f014486: 'xnr, NR',
  f014495: 'xnr, China, Hong Kong',
  f014514: 'xnr, China, Fuzhou',
  f014533: 'xnr, China, Fuzhou',
  f014540: 'xnr, USA, Newton',
  f014556: 'xnr, Korea, Bucheon-si',
  f014629: 'xnr, NR',
  f014660: 'xnr, Korea, Busan',
  f014685: 'xnr, Hong Kong',
  f014708: 'xnr, China, Beijing',
  f014741: 'xnr, China, Wuhan',
  f014745: 'xnr, China, Shenyang',
  f014749: 'xnr, China, Chongqing',
  f014764: 'xnr, Korea, Wanju',
  f014799: 'xnr, China, Chongqing',
  f014803: 'xnr, China, Beijing',
  f015061: 'xnr, Australia, Sydney',
  f015232: 'xnr, Poland, Warsaw',
  f015724: 'xnr, China, Guangdong',
  f015827: 'xnr, Russia',
  f015829: 'xnr, China, Beijing',
  f015833: 'xnr, China, Baoding',
  f015867: 'xnr, Netherlands, Amsterdam',
  f015870: 'xnr, China, Hangzhou',
  f015875: 'xnr, China, Fuzhou',
  f015891: 'xnr, China, Shanghai',
  f015920: 'xnr, China, Guangdong',
  f015932: 'xnr, NR',
  f015935: 'xnr, China, Sichuan',
  f015938: 'xnr, Canada, Waterloo',
  f015940: 'xnr, Netherlands, Amsterdam',
  f016140: 'xnr, China, Beijing',
  f016162: 'xnr, France, Borgo',
  f016172: 'xnr, China, Guangdong',
  f016203: 'xnr, China, Chengdu',
  f016217: 'xnr, China, Nanchong',
  f016228: 'xnr, China, Chengdu',
  f016234: 'xnr, China, Chengdu',
  f016262: 'xnr, China, Fuzhou',
  f016271: 'xnr, Korea, Seodaemun-gu',
  f016276: 'xnr, China, Beijing',
  f016299: 'xnr, China, Shanghai',
  f016304: 'xnr, USA, Boardman',
  f016305: 'xnr, USA, Boardman',
  f016408: 'xnr, NR',
  f016426: 'xnr, NR',
  f016436: 'xnr, Korea, Seoul',
  f016456: 'xnr, China, Zhejiang',
  f016462: 'xnr, USA, Clarksville',
  f016628: 'xnr, NR',
  f016688: 'xnr, Germany, Frankfurt',
  f016706: 'xnr, China, Guangzhou',
  f016859: 'xnr, NR',
  f017117: 'xnr, Russia, Samara',
  f017171: 'xnr, NR',
  f017181: 'xnr, China, Nanchong',
  f017186: 'xnr, China, Jiaxing',
  f017209: 'xnr, NR',
  f017215: 'xnr, Finland',
  f017216: 'xnr, NR',
  f017236: 'xnr, NR',
  f017251: 'xnr, USA',
  f017294: 'xnr, China, Shenzhen',
  f017323: 'xnr, Poland, Warsaw',
  f017334: 'xnr, China, Fuzhou',
  f017430: 'xnr, Australia, Alexandria-cfa',
  f017618: 'xnr, Korea, Wanju',
  f017628: 'xnr, Brazil, Sao Paulo',
  f017655: 'xnr, NR',
  f017722: 'xnr, NR',
  f017747: 'xnr, NR',
  f017793: 'xnr, NR',
  f018081: 'xnr, Germany',
  f018095: 'xnr, Colombia, Medellin',
  f018128: 'xnr, China, Dongguan',
  f018164: 'xnr, USA, Howell',
  f018311: "xnr, China, Xi'an, <23h",
  f018369: 'xnr, NR',
  f018393: 'xnr, Colombia, Medellin',
  f018397: 'xnr, USA, Howell',
  f018425: 'xnr, USA, Howell',
  f018437: 'xnr, NR',
  f018441: 'xnr, USA',
  f018445: 'xnr, NR',
  f018446: 'xnr, China, Dongguan',
  f018456: 'xnr, Brazil, Sao Paulo',
  f018474: 'xnr, China, Xiamen',
  f018484: 'xnr, China, Shanghai',
  f018490: 'xnr, Korea, Hwaseong-si',
  f018513: 'xnr, NR',
  f018517: 'xnr, USA, Columbus',
  f018518: "xnr, China, Xi'an",
  f018520: 'xnr, China',
  f018530: 'xnr, China, Shaanxi',
  f018531: 'xnr, China, Shaanxi',
  f018537: 'xnr, China, Shaanxi',
  f018538: 'xnr, China, Huzhou',
  f018542: 'xnr, China, Chongqing',
  f018754: 'xnr, China, Dali',
  f018761: 'xnr, Russia, St. Petersburg',
  f018790: 'xnr, China, Chengdu',
  f018802: 'xnr, China, Dongguan',
  f018812: 'xnr, South Africa, Cape Town',
  f018836: 'xnr, NR',
  f018837: 'xnr, China, Shaanxi',
  f018844: 'xnr, NR',
  f018864: 'xnr, Korea, Busan',
  f018865: 'xnr, China, Chengdu',
  f018869: 'xnr, NR',
  f018879: 'xnr, Korea, Geumcheon-gu',
  f018899: 'xnr, China, Shanghai',
  f019017: 'xnr, China, Wenzhou-cfa',
  f019031: 'xnr, NR',
  f019042: 'xnr, China, Shanghai',
  f019048: 'xnr, Brazil, Sao Paulo',
  f019062: 'xnr, Germany',
  f019069: 'xnr, NR',
  f019109: 'xnr, USA, Howell',
  f019123: 'xnr, China, Dongguan',
  f019160: 'xnr, USA, Fremont',
  f019173: 'xnr, China, Nanchong',
  f019184: 'xnr, China, Yibin',
  f019218: 'xnr, China, Dali',
  f019239: 'xnr, China, Jiaxing',
  f019264: 'xnr, NR',
  f019284: 'xnr, China, Foshan',
  f019376: 'xnr, NR',
  f019378: 'xnr, China, Changzhou',
  f019401: 'xnr, Brazil, Sao Paulo',
  f019423: 'xnr, South Africa, Johannesburg',
  f019434: 'xnr, NR',
  f019525: 'xnr, USA, Berkeley',
  f019528: 'xnr, Peru',
  f019547: 'xnr, Peru',
  f019723: 'xnr, China, Zhongshan',
  f019734: 'xnr, NR',
  f019757: 'xnr, NR',
  f019804: 'xnr, China, Chengdu',
  f019806: 'xnr, China, Beijing',
  f019809: 'xnr, NR',
  f019812: 'xnr, NR',
  f019825: 'xnr, China, Hong Kong',
  f020241: 'xnr, NR',
  f020260: 'xnr, NR',
  f020276: 'xnr, China, Xiamen',
  f020281: 'xnr, Korea, Uijeongbu-si',
  f020352: 'xnr, NR',
  f020366: 'xnr, China, Chengdu',
  f020369: 'xnr, NR',
  f020379: 'xnr, NR',
  f020386: 'xnr, Russia',
  f020390: 'xnr, NR',
  f020408: 'xnr, China, Hong Kong',
  f020432: 'xnr, Korea, Wanju',
  f020433: 'xnr, NR',
  f020439: 'xnr, China, Chengdu',
  f020450: 'xnr, NR',
  f020451: 'xnr, NR',
  f020453: 'xnr, China, Chengdu',
  f020457: 'xnr, NR',
  f020525: 'xnr, China, Dongguan',
  f020559: 'xnr, China, Liaoning',
  f020563: 'xnr, China, Dongguan',
  f020578: 'xnr, Korea, Wanju',
  f020641: 'xnr, NR',
  f020678: 'xnr, China, Wenzhou',
  f020682: 'xnr, NR',
  f020683: 'xnr, China, Changsha',
  f020691: 'xnr, NR',
  f020739: 'xnr, China, Dongguan',
  f020763: 'xnr, China, Luzhou',
  f020775: 'xnr, Japan, Osaka',
  f020786: 'xnr, China, Shenzhen',
  f020788: 'xnr, China, Chengdu',
  f020789: 'xnr, NR',
  f020791: 'xnr, China, Hangzhou',
  f020819: 'xnr, China, Chengdu',
  f020822: 'xnr, China, Shanghai',
  f020896: 'xnr, NR',
  f020899: 'xnr, China, Chengdu',
  f020914: 'xnr, NR',
  f020934: 'xnr, NR',
  f020939: 'xnr, NR',
  f020940: 'xnr, @fu',
  f020957: 'xnr, NR',
  f020961: 'xnr, China, Shanghai',
  f021069: 'xnr, USA',
  f021083: 'xnr, NR',
  f021092: 'xnr, NR',
  f021095: 'xnr, NR',
  f021254: 'xnr, NR',
  f021286: 'xnr, China, Shaanxi',
  f021307: 'xnr, China, Chengdu',
  f021311: 'xnr, NR',
  f021337: 'xnr, China, Beijing',
  f021418: 'xnr, NR',
  f021494: 'xnr, NR',
  f021500: 'xnr, NR',
  f021504: 'xnr, NR',
  f021505: 'xnr, NR',
  f021509: 'xnr, China, Fuzhou',
  f021527: 'xnr, NR',
  f021536: 'xnr, NR',
  f021555: 'xnr, NR',
  f021574: 'xnr, NR',
  f021580: 'xnr, NR',
  f021684: 'xnr, NR',
  f021699: 'xnr, NR',
  f021704: 'xnr, NR',
  f021725: 'xnr, NR',
  f021976: 'xnr, NR',
  f022015: 'xnr, China, Hangzhou',
  f022016: 'xnr, NR',
  f022030: 'xnr, NR',
  f022033: 'xnr, NR',
  f022038: 'xnr, NR',
  f022084: 'xnr, China, Shaanxi',
  f022091: 'xnr, NR',
  f022093: 'xnr, NR',
  f022108: 'xnr, China, Luzhou',
  f022122: 'xnr, NR',
  f022132: 'xnr, China, Dongguan',
  f022171: 'xnr, China, Shanghai',
  f022250: 'xnr, NR',
  f022262: 'xnr, China, Hong Kong',
  f022276: 'xnr, Korea, Seoul',
  f022284: 'xnr, China, Shaanxi',
  f022303: 'xnr, NR',
  f022308: 'xnr, NR',
  f022313: 'xnr, NR',
  f022321: 'xnr, China, Hong Kong',
  f022333: 'xnr, China, Dongguan',
  f022336: 'xnr, NR',
  f022337: 'xnr, NR',
  f022338: 'xnr, NR',
  f022343: 'xnr, China, Dongguan',
  f022372: 'xnr, China, Chengdu',
  f022374: 'xnr, NR',
  f022494: 'xnr, China, Dongguan',
  f022501: 'xnr, Japan, Osaka',
  f022503: 'xnr, NR',
  f022505: 'xnr, China, Shanghai',
  f022517: 'xnr, China, Taiwan, Taipei',
  f022562: 'xnr, NR',
  f022564: 'xnr, NR',
  f022683: 'xnr, NR',
  f022776: 'xnr, Korea, Guri-si',
  f022786: 'xnr, NR',
  f022790: 'xnr, China, Luzhou',
  f022791: 'xnr, NR',
  f022797: 'xnr, NR',
  f022804: 'xnr, China, Yibin',
  f022834: 'xnr, NR',
  f022838: 'xnr, China, Hong Kong',
  f022857: 'xnr, NR',
  f022906: 'xnr, NR',
  f022911: 'xnr, China, Hong Kong',
  f022912: 'xnr, NR',
  f022926: 'xnr, NR',
  f022930: 'xnr, NR',
  f022970: 'xnr, NR',
  f022996: 'xnr, NR',
  f023001: 'xnr, China, Changsha',
  f023021: 'xnr, Korea, Yeongdeungpo-dong',
  f023159: 'xnr, NR',
  f023207: 'xnr, undefined',
  f023210: 'xnr, China, Dongguan',
  f023254: 'xnr, NR',
  f023463: 'xnr, NR',
  f023482: 'xnr, NR',
  f023505: 'xnr, NR',
  f023535: 'xnr, China, Hong Kong',
  f023560: 'xnr, NR',
  f023568: 'xnr, NR',
  f023626: 'xnr, NR',
  f023651: 'xnr, NR',
  f023798: 'xnr, China, Shanghai',
  f023801: 'xnr, China, Dongguan',
  f023881: 'xnr, China, Fuzhou',
  f023965: 'xnr, NR',
  f023986: 'xnr, Korea, Seoul',
  f024031: 'xnr, NR',
  f024089: 'xnr, NR',
  f024101: 'xnr, China, Guiyang',
  f024165: 'xnr, NR',
  f024483: 'xnr, NR',
  f024556: 'xnr, NR',
  f024557: 'xnr, NR',
  f024558: 'xnr, NR',
  f024559: 'xnr, NR',
  f024563: 'xnr, NR',
  f024802: 'xnr, NR',
  f024894: 'xnr, NR',
  f024895: 'xnr, NR',
  f025028: 'xnr, NR'
}

export default annotations
