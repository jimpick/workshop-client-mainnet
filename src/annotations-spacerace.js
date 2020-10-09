// Small file test results
//
// Additional testing will be performed with larger files with
// selected miners

const annotations = {
  // Active

  f01247: 'active, Canada, Montreal, BigChungus™', // about 17 hours
  f01272: 'active, Singapore', // about 7 hours
  f01799: 'active, China, Jinan, TokenHome', // about 17 hours
  f01800: 'active, China, Shenzhen + Chengdu', // about 14 hours
  f02388: 'active, Netherlands, Amersfoort, Kroketje', // about 11 hours
  f02421: 'active, China, Deyang + Singapore, 腾盛科技', // about 14 hours
  f02606: 'active, China, Shanghai', // about 11 hours
  f02619: 'active, China, Beijing, Blockcasting', // about 17 hours
  f02622: 'active, USA, Portland, 6block', // about 6 hours
  f02654: 'active, China, Shanghai', // about 15 hours
  f03134: 'active, China, Cangzhou, 乔木信息', // about 17 hours
  f03143: 'active, China, Shijiazhuang + Hong Kong', // about 17 hours
  f03176: 'active, USA, San Mateo, Five Star-Helmsman&Heiben', // about 16 hours
  f03223: 'active, USA', // about 13 hours
  f03302: 'active, China, Chengdu', // about 15 hours
  f03345: 'active, China, Fuzhou, chh', // about 23 hours
  f05664: 'active, China, Shenzhen, 艾比特网络科技', // about 17 hours
  f07998: 'active, China, Hangzhou', // about 10 hours
  f08019: 'active, China, Yantai, 三合', // about 14 hours
  f08240: 'active, Russia, Novosibirsk, Rabinovitch', // about 15 hours
  f08474: 'active, China, Hong Kong', // about 17 hours
  f010088: 'active, DNS:purumine.com', // about 15 hours
  f010247: 'active, China, Yantai', // about 13 hours
  f010400: 'active, China, Shenyang', // about 9 hours
  f010479: 'active, France, Fontenay-sous-Bois', // about 17 hours
  f010491: 'active, China, Shenzhen', // about 17 hours
  f010505: 'active, China, Wuhan', // about 16 hours
  f010513: 'active, China, Chongqing', // about 17 hours
  f014768: 'active, Singapore', // about 17 hours
  f015233: 'active, China, Nanjing', // about 14 hours
  f019022: "active, China, Xi'an", // about 10 hours
  f019240: 'active, China, Beijing', // about 17 hours
  f019638: 'active, Germany, Frankfurt', // about 21 hours
  f020742: 'active, China, Shanghai + Hangzhou + Shaoxing', // about 17 hours
  f021265: 'active, China, Wuhan', // about 12 hours
  f022261: 'active, China, Luzhou', // about 13 hours
  f022566: 'active, China, Nanchong', // about 12 hours
  f022853: 'active, China, Fuzhou', // about 17 hours
  f023200: 'active, China, Shanghai', // about 12 hours
  f023526: 'active, China, Chongqing', // about 17 hours
  f023565: 'active, China, Fuzhou', // about 17 hours
  f023678: 'active, China, Jiaxing', // about 18 hours
  f024030: 'active, Korea, Gwangju', // about 14 hours
  f025017: 'active, China, Hefei', // about 17 hours

  // Active-sealing (active, with in-flight sealing)

  f01234: 'active-sealing, Belgium, De Klinge, Eliovp',
  f01279: 'active-sealing, China, Sichuan',
  f01287: 'active-sealing, China, Jiaxing, MaiTian',
  f02301: 'active-sealing, USA',
  f02387: 'active-sealing, Canada, Brampton, NBFS Canada',
  f02401: 'active-sealing, Canada, Chambly, NBFS Canada',
  f02490: 'active-sealing, China, Fujian',
  f02668: 'active-sealing, China, Chengdu',
  f03339: 'active-sealing, China, Luzhou, benxun',
  f03488: 'active-sealing, Korea, Geumcheon-gu',
  f03624: 'active-sealing, Germany, Chemnitz, ode',
  f07824: 'active-sealing, China, Shanghai',
  f08094: 'active-sealing, China, Guangzhou, dongshao',
  f08157: 'active-sealing, China, Beijing + Germany, Frankfurt, 超星际',
  f08285: 'active-sealing, Latvia, Riga, stander',
  f09770: "active-sealing, China, Xi'an",
  f010507: 'active-sealing, China, Hangzhou',
  f010558: 'active-sealing, China, Shenzhen + Hong Kong',
  f019029: 'active-sealing, Serbia, Boljevac',
  f019099: 'active-sealing, China, Hong Kong',
  f019100: 'active-sealing, Romania, Cluj-Napoca',
  f019824: 'active-sealing, USA',
  f020975: 'active-sealing, China, Shandong',
  f023843: 'active-sealing, NR',

  // Sealing

  f01276: 'sealing, Canada, Brampton, NBFS Canada',
  f02299: 'sealing, China, Dongguan, Yolo',
  f02305: 'sealing, China, Dongguan',
  f02399: 'sealing, China, Zhejiang',
  f02405: 'sealing, China, Shenzhen',
  f02416: 'sealing, China, Guangdong, 星际无限',
  f02419: 'sealing, China, Shanghai, yuantai',
  f02423: 'sealing, Ukraine, Kyiv, igowreck',
  f02500: 'sealing, Korea, Seongnam-si',
  f02625: 'sealing, China, Shanghai, IPFS星际工厂',
  f02665: 'sealing, Netherlands, Amsterdam, fm-ops',
  f02772: 'sealing, China, Chengdu',
  f03131: 'sealing, China, Changsha',
  f03224: 'sealing, Ukraine, Irpin, oboltusov',
  f03340: "sealing, China, Xi'an",
  f03347: 'sealing, China, Shenzhen',
  f03364: 'sealing, China, Guangzhou',
  f03482: 'sealing, China, Wuxi',
  f03512: 'sealing, New Zealand, Auckland, NZFILECOIN01',
  f03544: 'sealing, China, Guiyang',
  f04443: 'sealing, China, Shanghai, 罗良科技',
  f07709: 'sealing, Korea, Dongjak-gu',
  f07806: 'sealing, China, Wuhan, HelloXP',
  f08073: 'sealing, China, Qiqihar, QY7TT',
  f08204: 'sealing, USA, St. Louis',
  f08403: 'sealing, UK, Lower Slaughter',
  f08482: 'sealing, USA, Athol, @why',
  f09002: 'sealing, Singapore',
  f09731: 'sealing, China, Guiyang',
  f09833: 'sealing, USA, San Jose',
  f010048: 'sealing, China, Shanghai',
  f010084: 'sealing, China, Beijing',
  f010399: 'sealing, China, Guangzhou',
  f010493: 'sealing, China, Shanghai',
  f010498: 'sealing, China, Shenzhen',
  f010501: 'sealing, China, Hangzhou',
  f010512: 'sealing, China, Zhengzhou',
  f010523: 'sealing, China, Beijing',
  f010528: 'sealing, China, Chongqing',
  f014329: 'sealing, China, Hong Kong',
  f015747: 'sealing, Japan, Setagaya-ku',
  f015877: 'sealing, China, Jiaxing + USA',
  f015941: 'sealing, Ukraine, Kyiv',
  f016482: 'sealing, USA, Aliquippa',
  f016563: 'sealing, China, Deyang',
  f017665: 'sealing, China, Shenyang',
  f017734: 'sealing, Australia, Sydney',
  f017970: 'sealing, China, Baoding',
  f018772: 'sealing, Australia',
  f019024: 'sealing, China, Sichuan',
  f019041: 'sealing, Singapore',
  f019074: 'sealing, China, Guangdong',
  f019104: 'sealing, Canada, Chambly',
  f019118: 'sealing, China, Jiaxing',
  f019243: 'sealing, USA, Jackson',
  f019354: 'sealing, Germany, Frankfurt',
  f019362: 'sealing, China, Hangzhou',
  f019399: 'sealing, Korea, Busan',
  f019422: 'sealing, South Africa, Johannesburg',
  f020385: 'sealing, Korea, Incheon',
  f020436: 'sealing, China, Beijing',
  f020489: 'sealing, China, Lioaning',
  f020541: 'sealing, China, Shanghai',
  f020608: 'sealing, Russia',
  f020923: 'sealing, China, Cangzhou',
  f021262: 'sealing, China, Shanghai',
  f021274: 'sealing, China, Shanghai',
  f021316: 'sealing, China, Yangzhou',
  f021339: 'sealing, China, Jiaxing',
  f021540: 'sealing, Germany, Frankfurt, @hsanjuan',
  f021583: 'sealing, China, Jiaxing',
  f021616: 'sealing, China, Shanghai',
  f021710: 'sealing, China, Shijiazhuang',
  f022070: 'sealing, China, Jieyang',
  f022072: 'sealing, China, Jieyang',
  f022142: 'sealing, USA, Queens',
  f022163: 'sealing, NR',
  f022376: 'sealing, China, Dongguan',
  f022522: 'sealing, China, Dongguan',
  f022753: 'sealing, China, Hong Kong',
  f022836: 'sealing, China, Chongqing',
  f022841: 'sealing, China, Zhongshan',
  f022922: 'sealing, China, Shenzhen',
  f022969: 'sealing, China, Chengdu',
  f023179: 'sealing, China, Fuzhou',
  f023571: 'sealing, NR',
  f023939: 'sealing, NR',
  f023943: 'sealing, USA, Ashburn',
  f023971: 'sealing, USA, @Brian Y',
  f024066: 'sealing, NR',
  f024496: 'sealing, China, Dongguan',
  f024521: 'sealing, Korea, Gyeonggi-do',
  f024550: 'sealing, China, Wenzhou',
  f024617: 'sealing, Korea, Bucheon-si',
  f024902: 'sealing, Korea, Incheon',
  f024903: 'sealing, China, Mianyang',
  f024944: 'sealing, Korea, Yeongdeungpo-dong',
  f024983: 'sealing, China, Hong Kong',
  f024986: 'sealing, China, Zhongshan',
  f025007: 'sealing, Korea, Gyeonggi-do',
  f025019: 'sealing, China, Taiwan, Hsinchu',
  f029421: 'sealing, China, Hong Kong',

  // Stuck

  f01280: 'stuck, China, Wuxi, 了凡超算', // CheckForAcceptance: about 23 hours
  f019114: 'stuck, USA, Howell', // CheckForAcceptance: about 23 hours
  f019616: 'stuck, USA, Marlborough', // CheckForAcceptance: about 23 hours
  f020523: 'stuck, China, Suzhou', // CheckForAcceptance: about 23 hours
  f022089: 'stuck, China, Beijing', // CheckForAcceptance: about 23 hours
  f022202: 'stuck, USA, Howell', // CheckForAcceptance: about 23 hours
  f022755: 'stuck, China, Shenzhen', // CheckForAcceptance: about 23 hours
  f023518: 'stuck, China, Taiyuan', // CheckForAcceptance: about 23 hours

  // Busy

  // New

  // Min Size

  f01152: 'min-size, China, Beijing', // 131072 < 134217728
  f01241: 'min-size, USA, Portland, 6block', // 131072 < 134217728
  f02415: 'min-size, China, Hong Kong', // 131072 < 134217728
  f02501: 'min-size, USA, Portland, 6block', // 131072 < 134217728
  f02514: 'min-size, USA, Portland, 6block', // 131072 < 134217728
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 131072 < 134217728
  f02620: 'min-size, Poland, Krakow, @magik6k', // 131072 < 536870912
  f02623: 'min-size, USA, Portland, 6block', // 131072 < 134217728
  f02633: 'min-size, China, Hong Kong', // 131072 < 134217728
  f02645: 'min-size, China, Hong Kong', // 131072 < 134217728
  f03273: 'min-size, USA, Portland, 6block', // 131072 < 134217728
  f03274: 'min-size, USA, Portland, 6block', // 131072 < 134217728
  f03275: 'min-size, USA, Portland, 6block', // 131072 < 134217728
  f03491: 'min-size, China, Hong Kong', // 131072 < 134217728
  f05315: 'min-size, USA, Portland, 6block', // 131072 < 134217728
  f05316: 'min-size, USA, Portland, 6block', // 131072 < 134217728
  f05317: 'min-size, USA, Portland', // 131072 < 134217728
  f07850: 'min-size, USA, Portland, 6block', // 131072 < 134217728
  f07990: 'min-size, China, Hong Kong', // 131072 < 134217728
  f08025: 'min-size, China, Hong Kong', // 131072 < 134217728
  f08264: 'min-size, China, Xianning', // 131072 < 1048576
  f08383: 'min-size, USA, Portland, 6block', // 131072 < 134217728
  f09569: 'min-size, China, Beijing', // 131072 < 134217728
  f09693: 'min-size, USA, Portland + Singapore', // 131072 < 134217728
  f09696: 'min-size, USA, Portland + Singapore', // 131072 < 134217728
  f010241: 'min-size, China, Beijing + USA, Portland', // 131072 < 134217728
  f010253: 'min-size, China, Beijing + USA, Portland', // 131072 < 134217728
  f010438: 'min-size, USA', // 131072 < 134217728
  f014394: 'min-size, China, Suzhou', // 131072 < 134217728
  f014409: 'min-size, USA, Waxhaw', // 131072 < 268435456
  f015927: 'min-size, USA, East Islip', // 131072 < 134217728
  f016594: 'min-size, Germany', // 131072 < 134217728
  f018501: 'min-size, China, Beijing', // 131072 < 134217728
  f018780: 'min-size, Singapore + Germany, Frankfurt + USA', // 131072 < 134217728
  f018781: 'min-size, Singapore + Germany, Frankfurt + USA', // 131072 < 134217728
  f018782: 'min-size, Singapore + Germany, Frankfurt + USA', // 131072 < 134217728
  f018783: 'min-size, Singapore + Germany, Frankfurt + USA', // 131072 < 134217728
  f018784: 'min-size, Singapore + Germany, Frankfurt + USA', // 131072 < 134217728
  f018785: 'min-size, Singapore + Germany, Frankfurt + USA', // 131072 < 134217728
  f020928: 'min-size, China, Deyang + Singapore', // 131072 < 16777216
  f021255: 'min-size, China, Suzhou + Netherlands', // 131072 < 134217728
  f021870: 'min-size, USA, Portland', // 131072 < 134217728
  f022352: 'min-size, Norway, Borgen', // 131072 < 134217728
  f022832: 'min-size, China', // 131072 < 134217728
  f023495: 'min-size, China, Beijing + USA, Portland', // 131072 < 134217728
  f023825: 'min-size, USA, Portland', // 131072 < 134217728
  f024015: 'min-size, USA, Portland', // 131072 < 134217728
  f024016: 'min-size, USA, Portland', // 131072 < 134217728

  // Min Ask

  f01278: 'min-ask, USA, Grand Rapids, MiMiner', // 20000000 < 122070312
  f09848: 'min-ask, USA', // 20000000 < 122070312
  f023013: 'min-ask, China, Hong Kong', // 20000000 < 24414062

  // Error

  f01240: 'error, Netherlands, HidNand', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f02381: 'error, China, Dongguan, 西野七濑迷叔', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02492: 'error, China, Shenzhen', // error in deal activation: handling applied event: deal wasn't active: deal=509832, parentState=bafy2bzaceauxx74ntvduzvioqnvm3xyx5xlmbgs5rlkeo2nud2leuvxw23vra, h=130652
  f02529: 'error, China, Chongqing', // stream reset
  f02613: 'error, China, Chongqing', // stream reset
  f02627: 'error, China, Guilin', // stream reset
  f02767: 'error, Germany, Frankfurt', // stream reset
  f03002: 'error, China, Chongqing', // stream reset
  f03194: 'error, China, Shenzhen, 成都云存&Npool', // stream reset
  f03222: 'error, China, Yuncheong, 星云矿池', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f03269: 'error, Australia', // stream reset
  f03363: 'error, Singapore', // EOF
  f07819: 'error, China, Wuxi, YC--wuxi', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 1.544134054878744179 FIL, balance: 1.444134058926145448 FIL): validation failure
  f07987: 'error, China, Beijing', // stream reset
  f08091: 'error, USA', // AddPiece failed: adding piece to sector: writing piece: acquire unsealed sector: local acquire error: couldn't find a suitable path for a sector
  f08290: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.26891531073635752 FIL, balance: 0.260387247993226643 FIL): validation failure
  f08315: 'error, China, Chongqing', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.268915310332475959 FIL, balance: 0.260387247993226643 FIL): validation failure
  f08371: 'error, China, Chengdu', // failed to initiate data transfer: deal data transfer failed: response rejected
  f08393: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.264391840736705178 FIL, balance: 0.24478239052826967 FIL): validation failure
  f08532: 'error, USA', // stream reset
  f08854: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 1.101924638479012387 FIL, balance: 1.009093139418046558 FIL): validation failure
  f09055: 'error, China, Jieyang', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.234774359115812334 FIL, balance: 0.217428750302497964 FIL): validation failure
  f09084: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.229546628282431719 FIL, balance: 0.215606430826886365 FIL): validation failure
  f09639: 'error, China, Fuzhou', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999956225616 FIL, balance: 0.000025259918397467 FIL): not enough funds to execute transaction
  f09689: 'error, USA, Portland', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f09737: 'error, USA, Sudbury', // stream reset
  f010010: 'error, China, Changzhou + Hong Kong', // stream reset
  f010222: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.188849602745939025 FIL, balance: 0.181360053263365294 FIL): validation failure
  f010257: 'error, China, Hong Kong, DNS:feiyuipfs.com', // AddPiece failed: adding piece to sector: writing piece: pieceCid error: generating piece commitment: failed to build treeCaused by:    0: failed to create data store    1: No such file or directory (os error 2)
  f010303: 'error, China, Guangdong', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.183406256746509241 FIL, balance: 0.168211469404593275 FIL): validation failure
  f010308: 'error, Germany, Frankfurt', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f010310: 'error, Canada, Surrey', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.183406250206039186 FIL, balance: 0.168211469404593275 FIL): validation failure
  f010551: 'error, China, Shenyang', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.151360087163963823 FIL, balance: 0.143218554139101091 FIL): validation failure
  f010591: 'error, China, Wuhan', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.151360079749421733 FIL, balance: 0.143218554139101091 FIL): validation failure
  f010601: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.151356191218830715 FIL, balance: 0.143218554139101091 FIL): validation failure
  f010603: 'error, China, Baoding', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.151845211833827094 FIL, balance: 0.143218554139101091 FIL): validation failure
  f010612: 'error, USA, Mountain View', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.151841212489420391 FIL, balance: 0.143218554139101091 FIL): validation failure
  f014261: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.151845205811772177 FIL, balance: 0.143218554139101091 FIL): validation failure
  f014314: 'error, Korea, Bucheon-si', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.15184520901268425 FIL, balance: 0.143218554139101091 FIL): validation failure
  f014419: 'error, USA, San Diego', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.13853425533965325 FIL, balance: 0.132158026466271086 FIL): validation failure
  f014569: 'error, NR', // deal failed: (State=26) error activating deal: failed to set up called handler: called check error (h: 129001): failed to look up deal on chain: deal 509969 not found
  f014685: 'error, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.131699665834656609 FIL, balance: 0.119154481235752977 FIL): validation failure
  f014741: 'error, China, Wuhan', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.13169965924596189 FIL, balance: 0.119154481235752977 FIL): validation failure
  f015232: 'error, Poland, Warsaw', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.126385997200466895 FIL, balance: 0.109946312767074274 FIL): validation failure
  f015647: 'error, China, Shenzhen', // stream reset
  f015709: 'error, China, Hefei', // EOF
  f015724: 'error, China, Guangdong', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.126385995729614643 FIL, balance: 0.109946312767074274 FIL): validation failure
  f015753: 'error, China, Guyuan', // stream reset
  f015763: 'error, South Africa, Cape Town', // EOF
  f015767: 'error, Russia, Khabarovsk + Japan, Khabarovsk + USA', // stream reset
  f015771: 'error, Brazil, Sao Paulo', // stream reset
  f015827: 'error, Russia', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.126386004844076139 FIL, balance: 0.109946312767074274 FIL): validation failure
  f015829: 'error, China, Beijing', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.126386000455631715 FIL, balance: 0.109946312767074274 FIL): validation failure
  f015833: 'error, China, Baoding', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.126386012801145699 FIL, balance: 0.109946312767074274 FIL): validation failure
  f015867: 'error, Netherlands, Amsterdam', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.126385998472392408 FIL, balance: 0.109946312767074274 FIL): validation failure
  f015938: 'error, Canada, Waterloo', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.12638600530823853 FIL, balance: 0.109946312767074274 FIL): validation failure
  f016140: 'error, China, Beijing', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.126385996440928437 FIL, balance: 0.109946312767074274 FIL): validation failure
  f016172: 'error, China, Guangdong', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.126386003114016318 FIL, balance: 0.109946312767074274 FIL): validation failure
  f016217: 'error, China, Nanchong', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.12659990255024571 FIL, balance: 0.109946312767074274 FIL): validation failure
  f016234: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.126599905057928238 FIL, balance: 0.109946312767074274 FIL): validation failure
  f016262: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.126596156000205428 FIL, balance: 0.109946312767074274 FIL): validation failure
  f016305: 'error, USA, Boardman', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.115305638342298192 FIL, balance: 0.103457383980285654 FIL): validation failure
  f016408: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.115301508335467656 FIL, balance: 0.103457383980285654 FIL): validation failure
  f016511: 'error, China, Beijing', // stream reset
  f017215: 'error, Finland', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.104815866099026475 FIL, balance: 0.089634471885739717 FIL): validation failure
  f017216: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.104815860794313435 FIL, balance: 0.089634471885739717 FIL): validation failure
  f017294: 'error, China, Shenzhen', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.104815860287954463 FIL, balance: 0.089634471885739717 FIL): validation failure
  f017323: 'error, Poland, Warsaw', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.104812247724173256 FIL, balance: 0.089634471885739717 FIL): validation failure
  f017430: 'error, Australia, Alexandria-cfa', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.104815860137252388 FIL, balance: 0.089634471885739717 FIL): validation failure
  f017793: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.095916583186412301 FIL, balance: 0.082667254741919358 FIL): validation failure
  f017794: 'error, USA, Columbus', // stream reset
  f017795: 'error, USA, Columbus', // stream reset
  f018081: 'error, Germany', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.095916582227947104 FIL, balance: 0.082667254741919358 FIL): validation failure
  f018095: 'error, Colombia, Medellin', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.095916579617787165 FIL, balance: 0.082667254741919358 FIL): validation failure
  f018128: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.095916576169723689 FIL, balance: 0.082667254741919358 FIL): validation failure
  f018393: 'error, Colombia, Medellin', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.095913284452012196 FIL, balance: 0.082667254741919358 FIL): validation failure
  f018425: 'error, USA, Howell', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.09591658760499714 FIL, balance: 0.082667254741919358 FIL): validation failure
  f018441: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.09591658326477738 FIL, balance: 0.082667254741919358 FIL): validation failure
  f018456: 'error, Brazil, Sao Paulo', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.083563399401147666 FIL, balance: 0.079823204948148496 FIL): validation failure
  f018474: 'error, China, Xiamen', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.083563397152672707 FIL, balance: 0.079823204948148496 FIL): validation failure
  f018513: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.083563396242432174 FIL, balance: 0.079823204948148496 FIL): validation failure
  f018520: 'error, China', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.086066651493097488 FIL, balance: 0.078380906060812182 FIL): validation failure
  f018530: 'error, China, Shaanxi', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.086066646839417412 FIL, balance: 0.078380906060812182 FIL): validation failure
  f018531: 'error, China, Shaanxi', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.086066655923738493 FIL, balance: 0.078380906060812182 FIL): validation failure
  f018790: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.073908212729487255 FIL, balance: 0.073829017891377409 FIL): validation failure
  f018802: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.073908209691333423 FIL, balance: 0.073829017891377409 FIL): validation failure
  f018812: 'error, South Africa, Cape Town', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.07390820413946898 FIL, balance: 0.073829017891377409 FIL): validation failure
  f018844: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.073904356247779856 FIL, balance: 0.073829017891377409 FIL): validation failure
  f018865: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.073908208889598384 FIL, balance: 0.073829017891377409 FIL): validation failure
  f018884: 'error, Russia', // stream reset
  f018899: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.076530473449046783 FIL, balance: 0.070728059132580239 FIL): validation failure
  f019017: 'error, China, Wenzhou-cfa', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.07652246573760099 FIL, balance: 0.070728059132580239 FIL): validation failure
  f019042: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.07653048140008826 FIL, balance: 0.070728059132580239 FIL): validation failure
  f019048: 'error, Brazil, Sao Paulo', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.076526471260136336 FIL, balance: 0.070728059132580239 FIL): validation failure
  f019053: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.495046419257347695 FIL, balance: 0.480911425756112437 FIL): validation failure
  f019062: 'error, Germany', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.076526471236029004 FIL, balance: 0.070728059132580239 FIL): validation failure
  f019068: "error, China, Ya'an, fri", // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.495046422633074175 FIL, balance: 0.480911425756112437 FIL): validation failure
  f019073: 'error, Germany, Frankfurt', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.495046425116644371 FIL, balance: 0.480911425756112437 FIL): validation failure
  f019087: 'error, South Africa, Johannesburg', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.495033788609832484 FIL, balance: 0.480911425756112437 FIL): validation failure
  f019090: 'error, South Africa, Johannesburg', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.495033781770795779 FIL, balance: 0.480911425756112437 FIL): validation failure
  f019109: 'error, USA, Howell', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.076530473756479016 FIL, balance: 0.070728059132580239 FIL): validation failure
  f019174: 'error, UK, Halifax', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.09999999999164737 FIL, balance: 0.06824034443416526 FIL): not enough funds to execute transaction
  f019218: 'error, China, Dali', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.083220743070414119 FIL, balance: 0.065719414912604221 FIL): validation failure
  f019264: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.08322073262374628 FIL, balance: 0.065719414912604221 FIL): validation failure
  f019376: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.083220742986020957 FIL, balance: 0.065719414912604221 FIL): validation failure
  f019434: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.062513474622289866 FIL, balance: 0.062423005553649771 FIL): validation failure
  f019437: 'error, Korea, Guro-gu', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.09999999996058972 FIL, balance: 0.020911419870713314 FIL): not enough funds to execute transaction
  f019645: 'error, Russia, St. Petersburg', // stream reset
  f019723: 'error, China, Zhongshan', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.061690927620704283 FIL, balance: 0.059114300247324019 FIL): validation failure
  f019757: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.061690929411044934 FIL, balance: 0.059114300247324019 FIL): validation failure
  f019804: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.061686666983116173 FIL, balance: 0.059114300247324019 FIL): validation failure
  f019809: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.061690927656872781 FIL, balance: 0.059114300247324019 FIL): validation failure
  f019812: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.061686666766150185 FIL, balance: 0.059114300247324019 FIL): validation failure
  f019820: 'error, Germany', // stream reset
  f019825: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.061686666296057211 FIL, balance: 0.059114300247324019 FIL): validation failure
  f020223: 'error, China, Guiyang', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.428222671372655802 FIL, balance: 0.423042929989071923 FIL): validation failure
  f020281: 'error, Korea, Uijeongbu-si', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.064794729368319084 FIL, balance: 0.055618400994793863 FIL): validation failure
  f020330: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.428216332639732084 FIL, balance: 0.423042929989071923 FIL): validation failure
  f020352: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.064794724298701281 FIL, balance: 0.055618400994793863 FIL): validation failure
  f020386: 'error, Russia', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.058334093866289625 FIL, balance: 0.052475223982219885 FIL): validation failure
  f020388: 'error, Korea, Uijeongbu-si', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.425188092097425474 FIL, balance: 0.420718486180703343 FIL): validation failure
  f020390: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.058338066871167966 FIL, balance: 0.052475223982219885 FIL): validation failure
  f020393: 'error, China, Beijing', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.425188089414928539 FIL, balance: 0.420718486180703343 FIL): validation failure
  f020408: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.058338064242923778 FIL, balance: 0.052475223982219885 FIL): validation failure
  f020431: 'error, Korea, Seoul', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.425188091940695316 FIL, balance: 0.420718486180703343 FIL): validation failure
  f020432: 'error, Korea, Wanju', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.058338067389583104 FIL, balance: 0.052475223982219885 FIL): validation failure
  f020453: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.062096516202192057 FIL, balance: 0.049207514615071268 FIL): validation failure
  f020457: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.062092211816694143 FIL, balance: 0.049207514615071268 FIL): validation failure
  f020516: 'error, China, Dalian', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.425188094918568318 FIL, balance: 0.420718486180703343 FIL): validation failure
  f020559: 'error, China, Liaoning', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.062096518287908775 FIL, balance: 0.049207514615071268 FIL): validation failure
  f020578: 'error, Korea, Wanju', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.062096523224908752 FIL, balance: 0.049207514615071268 FIL): validation failure
  f020604: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.425188092778598853 FIL, balance: 0.420718486180703343 FIL): validation failure
  f020605: 'error, China, Yibin', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzaceazp6j6nbkubfgbbnojzm6d4b3pd3bi2bx2ravtdilv4pozjfjn7c n 4281, TS: bafy2bzacebii6qp56k6qd3z7tvhsvesepyhdduazs7vwbzfmcssbm5zfyccik n4281)
  f020618: 'error, Singapore', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.425188093815429129 FIL, balance: 0.420718486180703343 FIL): validation failure
  f020678: 'error, China, Wenzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.062096518336133439 FIL, balance: 0.049207514615071268 FIL): validation failure
  f020691: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.067731078270202398 FIL, balance: 0.04559319246521834 FIL): validation failure
  f020739: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.067726407105216319 FIL, balance: 0.04559319246521834 FIL): validation failure
  f020775: 'error, Japan, Osaka', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.067731085437593085 FIL, balance: 0.04559319246521834 FIL): validation failure
  f020788: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.067731085600351326 FIL, balance: 0.04559319246521834 FIL): validation failure
  f020791: 'error, China, Hangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.067731088716870237 FIL, balance: 0.04559319246521834 FIL): validation failure
  f020819: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.067726402398259746 FIL, balance: 0.04559319246521834 FIL): validation failure
  f020896: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.04757625413821745 FIL, balance: 0.041717532331030712 FIL): validation failure
  f020899: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.047576249424256544 FIL, balance: 0.041717532331030712 FIL): validation failure
  f020904: 'error, Korea, Uijeongbu-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.371606060341645155 FIL, balance: 0.353230992632640385 FIL): validation failure
  f020934: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.047571418715684744 FIL, balance: 0.041717532331030712 FIL): validation failure
  f020940: 'error, @fu', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.047576256392720492 FIL, balance: 0.041717532331030712 FIL): validation failure
  f020957: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.047566573119797934 FIL, balance: 0.041717532331030712 FIL): validation failure
  f020993: 'error, China, Hong Kong', // stream reset
  f021069: 'error, USA', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.050494110834555656 FIL, balance: 0.041717532331030712 FIL): validation failure
  f021083: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.050488671249141734 FIL, balance: 0.041717532331030712 FIL): validation failure
  f021092: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.050483221062187315 FIL, balance: 0.041717532331030712 FIL): validation failure
  f021254: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.050494110750162494 FIL, balance: 0.041717532331030712 FIL): validation failure
  f021311: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.048247211857590927 FIL, balance: 0.03963510966092124 FIL): validation failure
  f021328: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999961506435 FIL, balance: 0.058993697109191307 FIL): not enough funds to execute transaction
  f021337: 'error, China, Beijing', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.04824721005519411 FIL, balance: 0.03963510966092124 FIL): validation failure
  f021346: 'error, China, Shanghai', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 1.595180235084375323 FIL, balance: 1.591923227039515519 FIL): validation failure
  f021357: 'error, China, Shanghai', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f021418: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.048247210278233181 FIL, balance: 0.03963510966092124 FIL): validation failure
  f021444: 'error, China, Guangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f021479: 'error, China, Qingdao', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacecljnby3jc6tewizm43ybr25bbpgrlzcj7derzk2r3qrqicthmwxi n 283176, TS: bafy2bzacecemxnzod4bfutz6rqrw63rrxqmwvvliaeszojfvbus75vmki6lic n283176)
  f021494: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.048247211290951125 FIL, balance: 0.03963510966092124 FIL): validation failure
  f021509: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.048242478879016202 FIL, balance: 0.03963510966092124 FIL): validation failure
  f021525: 'error, China, Guangdong', // EOF
  f021527: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.048242479373216508 FIL, balance: 0.03963510966092124 FIL): validation failure
  f021535: 'error, China, Chengdu', // stream reset
  f021555: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.049790180791213443 FIL, balance: 0.03963510966092124 FIL): validation failure
  f021574: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.049780086707511258 FIL, balance: 0.03963510966092124 FIL): validation failure
  f021580: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.049785133806807889 FIL, balance: 0.03963510966092124 FIL): validation failure
  f021699: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.049790184637130397 FIL, balance: 0.03963510966092124 FIL): validation failure
  f021704: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.049785135922226272 FIL, balance: 0.03963510966092124 FIL): validation failure
  f021976: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.044636497211401173 FIL, balance: 0.037566138543481729 FIL): validation failure
  f022015: 'error, China, Hangzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.044636500014459768 FIL, balance: 0.037566138543481729 FIL): validation failure
  f022016: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.044636500068712515 FIL, balance: 0.037566138543481729 FIL): validation failure
  f022030: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.044636502938080023 FIL, balance: 0.037566138543481729 FIL): validation failure
  f022033: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.044636505228751563 FIL, balance: 0.037566138543481729 FIL): validation failure
  f022119: 'error, USA, Lovettsville', // deal failed: (State=26) deal data verification failed: error generating CommP: failed to build treeCaused by:    0: failed to create data store    1: No such file or directory (os error 2)
  f022122: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.044636503100838264 FIL, balance: 0.037566138543481729 FIL): validation failure
  f022125: 'error, China, Shenzhen', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f022132: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.04463200836314425 FIL, balance: 0.037566138543481729 FIL): validation failure
  f022250: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.044636495710408506 FIL, balance: 0.037566138543481729 FIL): validation failure
  f022276: 'error, Korea, Seoul', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.04463650118390787 FIL, balance: 0.037566138543481729 FIL): validation failure
  f022287: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999950683712 FIL, balance: 0.058993697109191307 FIL): not enough funds to execute transaction
  f022303: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.044636498115613623 FIL, balance: 0.037566138543481729 FIL): validation failure
  f022308: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.044627516170016262 FIL, balance: 0.037566138543481729 FIL): validation failure
  f022313: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.044632008236580757 FIL, balance: 0.037566138543481729 FIL): validation failure
  f022326: 'error, China, Zhongshan', // EOF
  f022333: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.045687002139433926 FIL, balance: 0.035662433534024496 FIL): validation failure
  f022336: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.045686997009535293 FIL, balance: 0.035662433534024496 FIL): validation failure
  f022337: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.045686996322333831 FIL, balance: 0.035662433534024496 FIL): validation failure
  f022338: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.045686999746284975 FIL, balance: 0.035662433534024496 FIL): validation failure
  f022343: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.045687004134729399 FIL, balance: 0.035662433534024496 FIL): validation failure
  f022372: 'error, China, Chengdu', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.045686991837440079 FIL, balance: 0.035662433534024496 FIL): validation failure
  f022374: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.04568699772687717 FIL, balance: 0.035662433534024496 FIL): validation failure
  f022395: 'error, USA, Los Angeles', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 9.263662313805444857 FIL, balance: 9.247324167408334375 FIL): validation failure
  f022494: 'error, China, Dongguan', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.045686999438852742 FIL, balance: 0.035662433534024496 FIL): validation failure
  f022512: 'error, Canada, Embrun', // EOF
  f022517: 'error, China, Taiwan, Taipei', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.04664194523604252 FIL, balance: 0.033721658310486163 FIL): validation failure
  f022564: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.046641940015722642 FIL, balance: 0.033721658310486163 FIL): validation failure
  f022683: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.046637100600925253 FIL, balance: 0.033721658310486163 FIL): validation failure
  f022786: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.046641945977496729 FIL, balance: 0.033721658310486163 FIL): validation failure
  f022797: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.047514605542228584 FIL, balance: 0.031815746330839433 FIL): validation failure
  f022820: 'error, China, Guangdong', // stream reset
  f022838: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.046727790882725619 FIL, balance: 0.029929332829482902 FIL): validation failure
  f022855: 'error, Finland, Helsinki', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.099999999963586845 FIL, balance: 0.002855704710324786 FIL): not enough funds to execute transaction
  f022857: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.046722948063868676 FIL, balance: 0.029929332829482902 FIL): validation failure
  f022911: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.04672779659132022 FIL, balance: 0.029929332829482902 FIL): validation failure
  f022912: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.046722948961866793 FIL, balance: 0.029929332829482902 FIL): validation failure
  f022930: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.046133283602645433 FIL, balance: 0.028100953709535491 FIL): validation failure
  f022996: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.046133293175241237 FIL, balance: 0.028100953709535491 FIL): validation failure
  f023001: 'error, China, Changsha', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.04612372028409635 FIL, balance: 0.028100953709535491 FIL): validation failure
  f023159: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.046133288618010489 FIL, balance: 0.028100953709535491 FIL): validation failure
  f023207: 'error, undefined', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.04612850380898758 FIL, balance: 0.028100953709535491 FIL): validation failure
  f023254: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.048040953293855853 FIL, balance: 0.026174416322952708 FIL): validation failure
  f023462: 'error, China, Chengdu', // stream reset
  f023463: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.048035973552920536 FIL, balance: 0.026174416322952708 FIL): validation failure
  f023490: 'error, Ukraine, Kyiv', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.151515151386493597 FIL, balance: 0.126400318666756969 FIL): validation failure
  f023501: 'error, China, Mianyang', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals error unmarshalling result: EOF
  f023505: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.048040958164546917 FIL, balance: 0.026174416322952708 FIL): validation failure
  f023530: 'error, China, Shanghai', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f023534: 'error, China, Chongqing', // stream reset
  f023560: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.046951887825755241 FIL, balance: 0.024290541104803714 FIL): validation failure
  f023568: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.046951885758122772 FIL, balance: 0.024290541104803714 FIL): validation failure
  f023586: 'error, USA, Germantown', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.389388238583642136 FIL, balance: 0.374867466047394014 FIL): validation failure
  f023626: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.046074567067795093 FIL, balance: 0.024290541104803714 FIL): validation failure
  f023647: 'error, Korea, Gangseo-gu', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999951036264 FIL, balance: 0.020911419870713314 FIL): not enough funds to execute transaction
  f023649: 'error, Korea, Seoul', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.0999999999490902 FIL, balance: 0.020911419870713314 FIL): not enough funds to execute transaction
  f023651: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.046069881954105956 FIL, balance: 0.024290541104803714 FIL): validation failure
  f023654: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.389382531455110924 FIL, balance: 0.374867466047394014 FIL): validation failure
  f023798: 'error, China, Shanghai', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.046069882315640936 FIL, balance: 0.024290541104803714 FIL): validation failure
  f023854: 'error, China, Fuzhou', // deal failed: (State=26) error calling node: publishing deal: GasEstimateMessageGas error: estimating gas used: message execution failed: exit 16, reason: cannot publish duplicate deals (RetCode=16)
  f023859: 'error, China, Fuzhou', // stream reset
  f023881: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.046079249136274815 FIL, balance: 0.024290541104803714 FIL): validation failure
  f023965: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.046074568707093669 FIL, balance: 0.024290541104803714 FIL): validation failure
  f023982: 'error, China, Chongqing', // stream reset
  f023983: 'error, China, Chongqing', // stream reset
  f023984: 'error, China, Chongqing', // stream reset
  f023985: 'error, China, Chongqing', // stream reset
  f023986: 'error, Korea, Seoul', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.023354989433990991 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024025: 'error, China, Chengdu', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999997921595 FIL, balance: 0.085861506679400558 FIL): not enough funds to execute transaction
  f024031: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.023350145936229771 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024101: 'error, China, Guiyang', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.023354982320853051 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024129: 'error, China, Zhejiang', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999959988864 FIL, balance: 0.093670516525413172 FIL): not enough funds to execute transaction
  f024130: 'error, Korea', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f024156: 'error, USA', // AddPiece failed: adding piece to sector: writing piece: pieceCid error: generating piece commitment: Rust panic: no unwind information
  f024165: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.023095980111052394 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024468: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024526: 'error, Korea', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f024556: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.023100761579964129 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024557: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.023095968593774531 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024559: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.023100763352220531 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024802: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.023100764178067902 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f024893: 'error, Korea, Gyeonggi-do', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.353431935067016223 FIL, balance: 0.343030167691273766 FIL): validation failure
  f024894: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.023095972384652488 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f025002: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.353420704790961717 FIL, balance: 0.343030167691273766 FIL): validation failure
  f025028: 'error, NR', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.02310075788474925 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f029368: 'error, Korea, Gangseo-gu', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.0999999999496892 FIL, balance: 0.020911419870713314 FIL): not enough funds to execute transaction

  // Dial backoff

  f03149: 'backoff, USA, Newton',
  f08063: 'backoff, China, Huizhou',
  f08199: 'backoff, USA, Sudbury',
  f08346: 'backoff, Korea',
  f010035: 'backoff, Netherlands',
  f010202: 'backoff, Singapore',
  f014464: 'backoff, China, Hangzhou + Singapore',
  f015751: 'backoff, Canada, Huron East',
  f016866: 'backoff, China, Fuzhou',
  f019056: 'backoff, South Africa, Cape Town',
  f019133: 'backoff, UK, Mansfield',
  f019196: 'backoff, China, Shenzhen + Hong Kong',
  f020631: 'backoff, China, Zhejiang',
  f022976: 'backoff, Korea, Cheongju-si',
  f023826: 'backoff, USA, Germantown',

  // Rejected

  f01154: 'rejected, Sweden, Alvsjo', // sh: 0: getcwd() failed: No such file or directoryfalse
  f01231: 'rejected, Singapore',
  f01235: 'rejected, Singapore, IPFSMain',
  f01243: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  f01248: 'rejected, Germany, Frankfurt + China, Guangdong',
  f01277: 'rejected, Sweden, Stockholm, tvsthlm',
  f01291: 'rejected, Sweden, Stockholm, tvsthlm', // sh: 1: dealfilter.pl: not found
  f01475: 'rejected, China, Wuhan + Germany', // getting client market balance failed
  f01782:
    'rejected, China, Hong Kong + Singapore + USA, Portland, hellofil.com',
  f02303: 'rejected, China, Hong Kong + Jiangsu + Netherlands',
  f02417: 'rejected, China, Liaoning', // sh: 1: jq: not found
  f02420: 'rejected, China, Wuhan',
  f02422: "rejected, China, Xi'an",
  f02438: 'rejected, Singapore',
  f02503: 'rejected, China, Wuhan',
  f02520: 'rejected, China, Hong Kong + Dongguan',
  f02533: 'rejected, Spain, Terrassa, LowFeeValidation.com',
  f02609: 'rejected, USA',
  f02614: 'rejected, Singapore',
  f02621: "rejected, China, Xi'an",
  f02626: 'rejected, China, Guangzhou + Hong Kong',
  f02723: 'rejected, China, Hong Kong',
  f02770: 'rejected, China, Hong Kong', // deal.Proposal.Client(t3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a) not in whitelist
  f02775: 'rejected, China, Hong Kong', // deal.Proposal.Client(t3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a) not in whitelist
  f02838: 'rejected, China, Chengdu, IPFS Harbor-星际港湾',
  f03144: 'rejected, Germany, Frankfurt',
  f03326: 'rejected, USA, Seattle', // getting client market balance failed
  f03328: 'rejected, China, Xinxiang',
  f03344: 'rejected, China, Guangzhou', // no online
  f03358: 'rejected, Singapore',
  f03362: 'rejected, Germany, Berlin',
  f03367: 'rejected, Singapore',
  f03485: 'rejected, Netherlands', // getting client market balance failed
  f03519: 'rejected, USA', // getting client market balance failed
  f07919: 'rejected, China, Beijing, Shanghai, Hunan', // sh: 1: /data/lotusstorage/dealfilter.pl: not found
  f08103: 'rejected, China, Foshan, 花生酱肠粉',
  f08197: 'rejected, China, Foshan',
  f08203: 'rejected, Germany, Frankfurt',
  f08207: 'rejected, Australia, Brisbane',
  f08229: 'rejected, China, Nanchang',
  f08242: 'rejected, China, Weifang',
  f08399: 'rejected, USA, Sammamish',
  f08432: 'rejected, China, Taizhou', // node error getting client market balance failed: resolve address t3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a: actor not found
  f08572: 'rejected, Brazil, Sao Paulo', // getting client market balance failed
  f08985: 'rejected, USA',
  f09037: 'rejected, Singapore',
  f09087: 'rejected, USA',
  f09620: 'rejected, China, Weifang',
  f09642: 'rejected, Sweden, Alvsjo',
  f09652: 'rejected, Singapore',
  f09675: 'rejected, China, Weifang',
  f09710: 'rejected, China, Jieyang',
  f09825: 'rejected, China, Jinhua',
  f09964: 'rejected, China, Beijing + Jiaxing',
  f010005: 'rejected, China, Zhongshan', // node error getting client market balance failed: resolve address t3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a: actor not found
  f010056: 'rejected, Singapore',
  f010225: 'rejected, China, Ordos',
  f010254: 'rejected, Japan, Minamata', // no online
  f010299: 'rejected, China, Yibin',
  f010405: 'rejected, China, Foshan',
  f010419: 'rejected, China, Sichuan',
  f010538: 'rejected, China, Ordos',
  f010616: 'rejected, China, Ordos + Singapore',
  f010617: 'rejected, Canada, Surrey, @feiya200',
  f014233: 'rejected, China, Shanghai', // no online
  f014251: 'rejected, Singapore',
  f014302: 'rejected, China, Ningbo',
  f014327: 'rejected, China, Ningbo',
  f014365: 'rejected, Australia, Marrickville + Japan, Heiwajima',
  f014392: 'rejected, Russia, Khabarovsk + USA + Japan, Heiwajima',
  f014472: 'rejected, China, Ningbo',
  f014487: 'rejected, China, Shanghai', // no online
  f014683: 'rejected, China, Shenzhen',
  f014686: 'rejected, Singapore',
  f014699: 'rejected, USA',
  f014701: 'rejected, China, Changzhou', // jq: error: syntax error, unexpected IDENT, expecting $end (Unix shell quoting issues?) at <top-level>, line 1:.Proposal.Client == "t1nslxql4pck5pq7hddlzym3orxlx35wkepzjkm3i" or .Proposal.Client == "t1stghxhdp2w53dym2nz2jtbpk6ccd4l2lxgmezlq    " or .Proposal.Client == "t1mcr5xkgv4jdl3rnz77outn6xbmygb55vdejgbfi" or .Proposal.Client == "t1qiqdbbmrdalbntnuapriirduvxu5ltsc5mhy7si" or .Propos    al.Client == "t3w4yfo7tiqlbsz5pz5sb6fvn2piq2566teiebsy42l2hvhftkefpbq5ouxisfxwdxv6vt7mhpjwlm6lhvizya"                                                                                                                                                                                                                                                                                            jq: 1 compile error
  f014706: 'rejected, China, Ordos',
  f014793: 'rejected, China, Hangzhou',
  f014804: 'rejected, China, Ordos',
  f014805: 'rejected, China, Ningbo',
  f014813: 'rejected, China, Hangzhou + USA',
  f015726: 'rejected, China, Qingdao',
  f015737: 'rejected, Brazil, Sao Paulo', // getting client market balance failed
  f015782: 'rejected, Australia', // getting client market balance failed
  f015848: 'rejected, China, Ordos',
  f015919: 'rejected, China, Ordos',
  f015925: 'rejected, China, Ordos',
  f015942: 'rejected, China, Ningbo',
  f016398: 'rejected, Singapore',
  f016412: 'rejected, China, Taiwan, Taipei', // sh: ../dealfilter.pl: No such file or directory
  f017229: 'rejected, USA, Portland',
  f019229: 'rejected, USA, Queens', // getting client market balance failed
  f019279: 'rejected, Canada, Calgary',
  f019661: 'rejected, Russia, Pyatigorsk', // 2020-10-08T20:32:25+03:00stdin: {  "Proposal": {    "PieceCID": {      "/": "baga6ea4seaqftacbkmg52oesnlouz6jzuj5uiekhq462xubcxdpiiavtvpod2pq"    },    "PieceSize": 131072,    "VerifiedDeal": false,    "Client": "f3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a",    "Provider": "f019661",    "Label": "mAVWg5AIgGoThRsP3cVkJTNdScogUjszyao95HzGTVPt8y0verXk",    "StartEpoch": 134942,    "EndEpoch": 712603,    "StoragePricePerEpoch": "20000000",    "ProviderCollateral": "0",    "ClientCollateral": "0"  },  "ClientSignature": {    "Type": 2,    "Data": "k6K/PLi54AOdfc4RAQx8T2jZuW5jwYiTGN0CVI8N3SkHY3sD0hw86GV8QXDjOFZzEA+t3akqO+vzG1yP/oGe+H+EP8E+Ip3IxKoc9DqrPMftlBW/LDGYQihgkz0u91eG"  },  "ProposalCid": {    "/": "bafyreibui37a34k3pkctctkswxqikwqbf335xghseadjyvuljy6j7kvtf4"  },  "AddFundsCid": null,  "PublishCid": null,  "Miner": "12D3KooWGapQWB726LTfoWraBZFtt5f35cg9xtzozbUbsAMT69rm",  "Client": "12D3KooWAMNWKJ2R3XvgFmiDY8Xd59C7VNyUCUWe1rVeT5H4zfLF",  "State": 15,  "PiecePath": "",  "MetadataPath": "",  "SlashEpoch": 0,  "FastRetrieval": true,  "Message": "",  "StoreID": 63,  "FundsReserved": "0",  "Ref": {    "TransferType": "graphsync",    "Root": {      "/": "bafk2bzaceanijykgyp3xcwijjtlve4uicshmz4tkr54r6mmtkt5xzs2l32wxs"    },    "PieceCid": null,    "PieceSize": 0  },  "AvailableForRetrieval": false,  "DealID": 0,  "CreationTime": "2020-10-08T20:32:25.9638766+03:00"}Deal rejected unconditionally in lotus-miner-dealmaking-filter
  f020315: 'rejected, China, Guangzhou', // sh: jq: command not found
  f020361: 'rejected, Colombia, Medellin',
  f020378: 'rejected, Bulgaria, Asenovgrad', // sh: 1: /mnt/SSD-Scratch/.lotusminer/dealfilter.pl: not found
  f020398: 'rejected, China, Zhangjiakou',
  f020522: 'rejected, Singapore',
  f020648: 'rejected, China, Shenzhen',
  f020747: 'rejected, China, Xiamen', // sh: 1: dealfilter.pl: not found
  f021532: 'rejected, China, Shanghai',
  f021695: 'rejected, USA',
  f021714: 'rejected, China, Hong Kong',
  f021716: 'rejected, New Zealand, Wellington', // no online
  f022130: 'rejected, Korea, Seodaemun-gu', // no online
  f022289: 'rejected, China, Mianyang', // no online
  f022309: 'rejected, Korea, Chuncheon', // no online
  f022373: 'rejected, Singapore',
  f022399: 'rejected, China, Beijing', // proposed provider collateral below minimum: 0 < 2465585545
  f023561: 'rejected, China, Shenzhen',
  f023627: 'rejected, China, Zhongwei',
  f023660: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023662: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023853: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023855: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023858: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023861: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023869: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023871: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023876: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023928: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023977: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023978: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023980: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023981: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024006: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024007: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024008: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024012: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024013: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024014: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024081: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024084: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024085: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024127: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024136: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024146: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024147: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024148: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024184: 'rejected, Korea, Gangnam-gu',
  f024611: 'rejected, China, Dongguan', // no online

  // Dial errors

  f01002: 'dial, NR - bootstrap', // * [/ip4/127.0.0.1/tcp/3452] dial tcp4 127.0.0.1:3452: connect: connection refused  * [/ip4/3.84.198.252/tcp/3452] dial tcp4 0.0.0.0:40877->3.84.198.252:3452: i/o timeout  * [/ip4/10.0.2.9/tcp/3452] dial tcp4 0.0.0.0:40877->10.0.2.9:3452: i/o timeout
  f01012: 'dial, China, Hong Kong + Guangzhou', // * [/ip4/127.0.0.1/tcp/8888] dial tcp4 127.0.0.1:8888: connect: connection refused  * [/ip4/43.230.90.191/tcp/8888] dial tcp4 43.230.90.191:8888: connect: connection refused  * [/ip4/183.60.252.190/tcp/8888] dial tcp4 183.60.252.190:8888: connect: connection refused
  f01100: 'dial, Serbia, Belgrade, filmine.io', // * [/ip4/93.86.63.113/tcp/12345] dial tcp4 93.86.63.113:12345: connect: connection refused
  f01151: 'dial, USA, Waxhaw', // * [/ip4/71.75.239.182/tcp/41372] dial tcp4 0.0.0.0:40877->71.75.239.182:41372: i/o timeout
  f01155: 'dial, China, Shanghai, DianCun Tech', // * [/ip4/203.107.44.156/tcp/39770] dial tcp4 0.0.0.0:40877->203.107.44.156:39770: i/o timeout
  f01229: 'dial, China, Hong Kong', // * [/ip4/43.231.187.27/tcp/1374] dial tcp4 0.0.0.0:40877->43.231.187.27:1374: i/o timeout
  f01236: 'dial, Singapore', // * [/ip4/170.33.12.95/tcp/16666] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNUoXrGukLWgDUR3F1A617D6yT99bzVrKwdUi53uGMKR4, but remote key matches 12D3KooWGijGVP9N8ebcJNNEEPEGDhWbSJbsW2KtWeqVa5MQvTBx
  f01238: 'dial, Vietnam, Hanoi, FILECOIN-VIETNAM', // * [/ip4/210.245.49.112/tcp/12345] dial tcp4 210.245.49.112:12345: connect: connection refused
  f01275: 'dial, Korea, Seongnam-si', // * [/ip4/221.163.91.162/tcp/32230] dial tcp4 0.0.0.0:40877->221.163.91.162:32230: i/o timeout
  f01288: 'dial, China, Yibin, BlackStone', // * [/ip4/101.206.243.3/tcp/39695] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWEGMhF2ARqkVRB2zJVTjpstvLKbkuu9nZ1QeCRyTsAM9n, but remote key matches 12D3KooWCAtg67oL9r7bD1HWfHS2YqgjMvESpgX9sA6A9QvgSpHe
  f01289: 'dial, China, Hangzhou + USA', // * [/ip4/161.117.249.226/tcp/44163] dial tcp4 0.0.0.0:40877->161.117.249.226:44163: i/o timeout  * [/ip4/161.117.88.227/tcp/44163] dial tcp4 0.0.0.0:40877->161.117.88.227:44163: i/o timeout
  f01801: 'dial, Switzerland, Baar, Gogoșel, DNS:akasha.network', // * [/ip4/46.101.187.50/tcp/10222] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHMxq8H6gBb1nxH6YknwX1ZsisFBTgtKJJTWfruBKNKA8, but remote key matches 12D3KooWDXMs6HMEdL7ein6hBWJHv42g7VMGWwUEgH8gYZ8kELYT
  f02307: 'dial, China, Taiyuan, filecoin.monster', // * [/ip4/34.92.71.77/tcp/12345] dial tcp4 0.0.0.0:40877->34.92.71.77:12345: i/o timeout
  f02383: 'dial, China, Shenzhen', // * [/ip4/183.60.90.5/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKzBf1z9Tm6rW1RUXfmPVooKYxan8NzjRmYq9iF8QZsJu, but remote key matches 12D3KooWSD4BWsHzUgnMnDEAMrLpyQAPFQsyHp9KR5a9A2P1hFbc
  f02386: 'dial, Latvia, Riga', // * [/ip4/91.105.126.144/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPV9PbYzkJgaaxaQ2d79RNkJWWjdC5eBXtmLsWAUwqLMT, but remote key matches 12D3KooWBBghMwnobTZP1Buw72KVEuzURgLPUYaq5WRF1wcygy9C
  f02400: 'dial, China, Beijing', // * [/ip4/36.112.26.4/tcp/47996] dial tcp4 36.112.26.4:47996: connect: connection refused
  f02403: 'dial, UK, London, AIM', // * [/ip4/2.58.45.33/tcp/18888] dial tcp4 0.0.0.0:40877->2.58.45.33:18888: i/o timeout  * [/ip4/2.58.47.71/tcp/18888] dial tcp4 0.0.0.0:40877->2.58.47.71:18888: i/o timeout
  f02414: "dial, China, Xi'an, zhejiangyunchu", // * [/ip4/113.142.1.86/tcp/56768] dial tcp4 113.142.1.86:56768: connect: connection refused
  f02418: 'dial, China, Fujian + Netherlands', // * [/ip4/185.232.59.180/tcp/1348] dial tcp4 0.0.0.0:40877->185.232.59.180:1348: i/o timeout  * [/ip4/117.48.133.69/tcp/1348] dial tcp4 0.0.0.0:40877->117.48.133.69:1348: i/o timeout
  f02425: 'dial, USA', // * [/ip4/103.78.229.73/tcp/14567] dial tcp4 103.78.229.73:14567: connect: connection refused
  f02505: 'dial, China, Wuhan', // * [/ip4/101.32.33.237/tcp/18899] dial tcp4 0.0.0.0:40877->101.32.33.237:18899: i/o timeout
  f02516: 'dial, China, Hong Kong', // * [/ip4/119.28.87.115/tcp/2301] dial tcp4 0.0.0.0:40877->119.28.87.115:2301: i/o timeout
  f02519: 'dial, Brazil, Sao Paulo', // * [/ip4/52.67.40.200/tcp/10240] dial tcp4 0.0.0.0:40877->52.67.40.200:10240: i/o timeout
  f02528: 'dial, China, Hong Kong + Inner Mongolia', // * [/ip4/8.209.70.199/tcp/58692] dial tcp4 0.0.0.0:40877->8.209.70.199:58692: i/o timeout
  f02532: 'dial, Singapore', // * [/ip4/170.33.12.117/tcp/8007] dial tcp4 0.0.0.0:40877->170.33.12.117:8007: i/o timeout
  f02534: 'dial, China, Beijing', // * [/ip4/123.58.99.210/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQEAUZycQ6zXsGtQd74vzTkCfPD8rQzWFnbUvK6Qenarc, but remote key matches 12D3KooWCYNTXskYDLQM7rRydZDGAfLiCPfneN1NjmnCBXpMBW49
  f02540: 'dial, USA, Rochester', // * [/ip4/72.225.48.102/tcp/10240] dial tcp4 72.225.48.102:10240: i/o timeout
  f02574: 'dial, Japan, Minamata', // * [/ip4/203.189.40.203/tcp/10250] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWDxS9DwK3FRT3Kf3tSN5j9jMqVg29Vx4GXu3uM9rDzGm2, but remote key matches 12D3KooWKAEN1NS8msS2LBg2c6cLMBFP4BnZLdsHMCz5z85a8fhT
  f02577: 'dial, China, Hong Kong + Russia, Khabarovsk + Japan, Heiwajima', // * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: connection refused  * [/ip4/66.42.38.110/tcp/9997] dial tcp4 0.0.0.0:40877->66.42.38.110:9997: i/o timeout  * [/ip4/43.243.100.31/tcp/6777] dial tcp4 0.0.0.0:40877->43.243.100.31:6777: i/o timeout
  f02607: 'dial, China, Beijing', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f02610: 'dial, Netherlands', // * [/ip4/213.227.129.197/tcp/14567] dial tcp4 213.227.129.197:14567: connect: connection refused
  f02624: 'dial, China, Shanghai, filecoin.cn', // * [/ip4/61.173.81.255/tcp/65501] dial tcp4 0.0.0.0:40877->61.173.81.255:65501: i/o timeout
  f02632: 'dial, China, Tianjin', // * [/ip4/150.129.138.199/tcp/8518] dial tcp4 0.0.0.0:40877->150.129.138.199:8518: i/o timeout
  f02657: 'dial, China, Ordos-xfr', // * [/ip4/1.183.72.226/tcp/12308] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLTNxtSBmMCy7VNXNSE8tZVPURHB2onSRTpJqkjWGEitm, but remote key matches 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg
  f02658: 'dial, China, Ningbo, bluematrix', // * [/ip4/123.137.128.188/tcp/3698] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRxbE66sHsxoSSE6uLybmNqXWFPKBdk6QC7KPoSZFx8Xy, but remote key matches 12D3KooWRVsiRe1qEUbpA1YeWoeMRBj3T4EBz1cxSWF6hfV8tELv  * [/ip4/112.15.188.130/tcp/3698] dial tcp4 0.0.0.0:40877->112.15.188.130:3698: i/o timeout
  f02664: 'dial, China, Hangzhou, ciger', // * [/ip4/111.0.120.74/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLfsqniYPeGBvMZN7StQzhgzTG9TB6M2gTNsvs5eDiTQM, but remote key matches 12D3KooWQb1CpdSujwXeyMJroR8qAkekXiZdNXVPKqis5ENXZGVw
  f02721: 'dial, USA', // * [/ip4/135.90.74.200/tcp/14567] dial tcp4 0.0.0.0:40877->135.90.74.200:14567: i/o timeout
  f02725: 'dial, China, Hong Kong', // * [/ip4/101.32.38.57/tcp/18899] dial tcp4 0.0.0.0:40877->101.32.38.57:18899: i/o timeout
  f02726: 'dial, USA, Brooklyn', // * [/ip4/169.62.51.212/tcp/14567] dial tcp4 0.0.0.0:40877->169.62.51.212:14567: i/o timeout
  f02731: 'dial, Singapore', // * [/ip4/10.30.8.4/tcp/14567] dial tcp4 10.30.8.4:14567: i/o timeout
  f02732: 'dial, USA', // * [/ip4/141.125.99.190/tcp/14567] dial tcp4 0.0.0.0:40877->141.125.99.190:14567: i/o timeout
  f02755: 'dial, China, Shijiazhuang', // * [/ip4/110.249.208.222/tcp/1479] dial tcp4 0.0.0.0:40877->110.249.208.222:1479: i/o timeout
  f02773: 'dial, China, Chengdu', // * [/ip4/118.123.228.198/tcp/48633] dial tcp4 118.123.228.198:48633: connect: connection refused
  f03021: 'dial, China, Hong Kong', // * [/ip4/34.96.185.143/tcp/10240] dial tcp4 34.96.185.143:10240: connect: connection refused  * [/ip4/27.213.97.148/tcp/10240] dial tcp4 0.0.0.0:40877->27.213.97.148:10240: i/o timeout
  f03120: 'dial, China, Guangzhou', // * [/ip4/0.0.0.0/tcp/34566] dial tcp4 0.0.0.0:34566: connect: connection refused
  f03136: "dial, China, Xi'an, Zhejiang Yun Chu Technology Co., Ltd, sat", // * [/ip4/47.57.8.77/tcp/18557] dial tcp4 0.0.0.0:40877->47.57.8.77:18557: i/o timeout
  f03140: 'dial, China, QingDao', // * [/ip4/61.147.123.83/tcp/12222] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGmqm4wXHomWgVABsyRksKz5VXXVSApcceT1ocVBfsaCL, but remote key matches 12D3KooWEwibwjtCTXD4UALEpJU65LStZg8thKDFUxzjyTzGHssq
  f03220: 'dial, China, Ordos', // * [/ip4/1.183.72.226/tcp/12309] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBgi9gSUH7kw88Ko8miGjRWjJrNF2gmkMjy6gchtxgJbL, but remote key matches 12D3KooWDxu2JXzsnxz2L9ZWRXNBypcpQcduWwqmSZfu5EawCDmZ
  f03225: 'dial, China, Guyuan', // * [/ip4/10.100.0.2/tcp/11111] dial tcp4 0.0.0.0:40877->10.100.0.2:11111: i/o timeout
  f03245: 'dial, USA, Los Angeles', // * [/ip4/120.133.36.67/tcp/23456] dial tcp4 0.0.0.0:40877->120.133.36.67:23456: i/o timeout
  f03266: 'dial, USA', // * [/ip4/169.63.27.151/tcp/14567] dial tcp4 0.0.0.0:40877->169.63.27.151:14567: i/o timeout
  f03276: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/41112] dial tcp4 183.63.203.161:41112: connect: connection refused
  f03286: 'dial, China, Mianyang', // * [/ip4/112.44.246.189/tcp/23455] dial tcp4 0.0.0.0:40877->112.44.246.189:23455: i/o timeout
  f03287: 'dial, USA', // * [/ip4/149.81.122.165/tcp/14567] dial tcp4 0.0.0.0:40877->149.81.122.165:14567: i/o timeout
  f03305: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.52/tcp/7000] dial tcp4 0.0.0.0:40877->197.231.176.52:7000: i/o timeout
  f03306: 'dial, Australia', // * [/ip4/103.29.66.54/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWS33M7NQzLm8d8a5cz7Vo87bRWo1Sad8dCpxNgN8h3HDA, but remote key matches 12D3KooWRAbtemsWN7MjrrJ6KSmfrnGDnWsCtDu4oHH1eLUzD6a6
  f03307: 'dial, Australia', // * [/ip4/47.74.68.141/tcp/7001] dial tcp4 0.0.0.0:40877->47.74.68.141:7001: i/o timeout
  f03312: 'dial, China, Beijing', // * [/ip4/8.210.13.50/tcp/45678] dial tcp4 8.210.13.50:45678: connect: connection refused  * [/ip4/119.161.169.68/tcp/45678] dial tcp4 0.0.0.0:40877->119.161.169.68:45678: i/o timeout
  f03314: 'dial, China, Zhangjiakou-xfr', // * [/ip4/45.113.32.176/tcp/1112] dial tcp4 0.0.0.0:40877->45.113.32.176:1112: i/o timeout
  f03317: 'dial, China, Shenzhen + Hong Kong + Jieyang', // * [/ip4/170.33.12.164/tcp/9090] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPMgigioxtnUsBqwBemuuxjZLKKpfhT3FmrWumyWDkQEd, but remote key matches 12D3KooWDkgbKexne42yFhovBdv7dEnZA4XpXYchEQpvEKpg2qTJ
  f03320: 'dial, bcm', // * [/ip4/183.36.3.160/tcp/11850] dial tcp4 183.36.3.160:11850: connect: connection refused
  f03325: 'dial, Germany, Frankfurt', // * [/ip4/45.9.10.134/tcp/42243] dial tcp4 45.9.10.134:42243: connect: connection refused
  f03327: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.51/tcp/7000] dial tcp4 0.0.0.0:40877->197.231.176.51:7000: i/o timeout
  f03337: 'dial, China, Sichuan, 朝日&网科巨力', // * [/ip4/118.116.2.60/tcp/25033] dial tcp4 118.116.2.60:25033: connect: connection refused  * [/ip4/118.116.2.61/tcp/25033] dial tcp4 118.116.2.61:25033: connect: connection refused
  f03350: 'dial, China, Wuhan', // * [/ip4/170.33.12.187/tcp/7000] dial tcp4 0.0.0.0:40877->170.33.12.187:7000: i/o timeout  * [/ip4/170.33.12.188/tcp/7000] failed to negotiate security protocol: read tcp4 10.0.1.9:40877->170.33.12.188:7000: read: connection reset by peer
  f03351: 'dial, China, Chengdu', // * [/ip4/182.140.253.150/tcp/10000] dial tcp4 0.0.0.0:40877->182.140.253.150:10000: i/o timeout
  f03359: 'dial, China, Shanghai', // * [/ip4/47.245.138.110/tcp/2347] dial tcp4 0.0.0.0:40877->47.245.138.110:2347: i/o timeout
  f03360: 'dial, China, Shaanxi', // * [/ip4/111.19.155.65/tcp/23451] dial tcp4 111.19.155.65:23451: i/o timeout
  f03365: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7084] failed to negotiate security protocol: EOF
  f03366: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7000] failed to negotiate security protocol: EOF
  f03427: 'dial, Russia, airalab', // * [/ip4/82.148.21.37/tcp/46717] dial tcp4 82.148.21.37:46717: connect: connection refused
  f03484: 'dial, Netherlands', // * [/ip4/89.149.209.98/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLQrbDFJ4D4i1KcSNqDa64qYMVAmGB2Thiw4xNkwRkgvy, but remote key matches 12D3KooWL6hvc8aM5BTQLHP7w4Qig6RJbU3sQJVD5pW7JFowakNN
  f03490: 'dial, China, Dongguan', // * [/ip4/121.12.167.179/tcp/41113] dial tcp4 121.12.167.179:41113: connect: connection refused
  f03515: 'dial, China, Dongguan', // * [/ip4/113.105.174.3/tcp/23456] dial tcp4 113.105.174.3:23456: connect: connection refused
  f03517: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7082] failed to negotiate security protocol: EOF
  f03523: 'dial, China, Wuxi, YC--wuxi', // * [/ip4/58.215.232.74/tcp/10010] dial tcp4 58.215.232.74:10010: connect: connection refused  * [/ip4/192.168.1.12/tcp/1001] dial tcp4 192.168.1.12:1001: i/o timeout
  f03548: 'dial, Singapore', // * [/ip4/8.209.82.79/tcp/14567] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWE5wkzEfF4zkww8CD1aU9Dvq6c26smunqnK5mJQXuu9ot, but remote key matches 12D3KooWExdbgcJnR1JYaThHyyS8eGSzM3Y2BSpTn1YsKF3MPz7b
  f03620: 'dial, Germany, Frankfurt', // * [/ip4/23.90.146.133/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGVzpdJUqbWmDEuY683SGSdBjUHdpLCwEfB9VvYzKp9LG, but remote key matches 12D3KooWR8VP6fPqS21Rpxo23FE6h425sQEzvtMNJ7jPWLAo3drk
  f03630: 'dial, China, Wuhan', // * [/ip4/170.33.12.78/tcp/17000] dial tcp4 0.0.0.0:40877->170.33.12.78:17000: i/o timeout  * [/ip4/170.33.12.186/tcp/17000] dial tcp4 0.0.0.0:40877->170.33.12.186:17000: i/o timeout
  f03638: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f03646: 'dial, China, Beijing, JingTang', // * [/ip4/123.125.194.158/tcp/5678] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHaT6Kh6GZgpZ47hK99FnZnTRa3pbSNsy1fMUDGFyczj8, but remote key matches 12D3KooWQb5w1q9YKogjAzrizGTveaSU6b51JFEFr92qx1uyNGkk
  f03702: 'dial, China, Shenzhen + Singapore, LianDongJingLing', // * [/ip4/8.209.113.21/tcp/7002] dial tcp4 0.0.0.0:40877->8.209.113.21:7002: i/o timeout  * [/ip4/218.17.190.89/tcp/10240] dial tcp4 0.0.0.0:40877->218.17.190.89:10240: i/o timeout
  f03764: 'dial, China, Beijing, foobar', // * [/ip4/123.115.217.138/tcp/24002] dial tcp4 0.0.0.0:40877->123.115.217.138:24002: i/o timeout
  f03766: 'dial, China, Weifang', // * [/ip4/111.17.220.237/tcp/6666] dial tcp4 111.17.220.237:6666: connect: connection refused
  f04921: 'dial, China, Shanghai', // * [/ip4/121.46.237.2/tcp/51818] dial tcp4 0.0.0.0:40877->121.46.237.2:51818: i/o timeout
  f06775: 'dial, China, Shenzhen, IPSB&CAAP', // * [/ip4/103.39.218.169/tcp/2346] dial tcp4 103.39.218.169:2346: connect: connection refused
  f07451: 'dial, China, Hangzhou', // * [/ip4/221.12.20.5/tcp/6000] dial tcp4 0.0.0.0:40877->221.12.20.5:6000: i/o timeout
  f07710: 'dial, Hong Kong', // * [/ip4/65.181.71.9/tcp/5472] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBPbrPaBFsrKYk7rXpcsA2S5FxDgfAzxxa2RLRmUYXtcL, but remote key matches 12D3KooWKscwJYDX6G8XZ8Vi1k2Mrbz7NX86PgZN2XreBuSQYxUA
  f07752: 'dial, China, Dongguan', // * [/ip4/103.43.85.202/tcp/18888] dial tcp4 0.0.0.0:40877->103.43.85.202:18888: i/o timeout
  f07756: 'dial, DNS:purumine.com', // * [/ip6/2001:470:b:281::ac15:6402/tcp/1347] dial tcp6 [2001:470:b:281::ac15:6402]:1347: connect: network is unreachable  * [/ip4/50.47.110.164/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSdyt5tC9nJScHT4EoBnz7AZcniqxmP1FEZZwdkBwhwzk, but remote key matches 12D3KooWNoi8KHMeS8SEp3mDUCHDU8yRFW6SZ1SPmz2NLCSur2ei
  f07774: 'dial, China, Shenzhen', // * [/ip4/103.40.249.210/tcp/33455] dial tcp4 103.40.249.210:33455: connect: connection refused
  f07775: 'dial, China, Shenzhen', // * [/ip4/103.40.249.211/tcp/33455] dial tcp4 0.0.0.0:40877->103.40.249.211:33455: i/o timeout
  f07810: 'dial, Korea', // * [/ip4/61.111.129.217/tcp/33333] dial tcp4 61.111.129.217:33333: connect: connection refused
  f07826: 'dial, China, Shenzhen, 星际医生', // * [/ip4/183.12.27.145/tcp/8888] dial tcp4 0.0.0.0:40877->183.12.27.145:8888: i/o timeout
  f07829: 'dial, Japan', // * [/ip4/163.44.165.168/tcp/30222] dial tcp4 0.0.0.0:40877->163.44.165.168:30222: i/o timeout
  f07830: 'dial, Singapore', // * [/ip4/8.209.102.106/tcp/14567] failed to negotiate security protocol: EOF
  f07833: 'dial, China, Changzhou, 星巢', // * [/ip4/107.155.16.239/tcp/20480] dial tcp4 107.155.16.239:20480: connect: connection refused  * [/ip4/107.155.3.37/tcp/20480] dial tcp4 0.0.0.0:40877->107.155.3.37:20480: i/o timeout
  f07848: 'dial, China, Wuhan', // * [/ip4/58.211.11.130/tcp/1024] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMzikgk7JT188vn56iyZUefPXDXMp62oaYpNokGzSq6Ux, but remote key matches 12D3KooWHx9wRyDrqRYfqcQTSXif1dms3XB2FzXVHvs2HQfireDS
  f07851: 'dial, Netherlands, Purmerend', // * [/ip4/212.32.243.209/tcp/2347] dial tcp4 212.32.243.209:2347: i/o timeout
  f07857: 'dial, China, Zhengzhou', // * [/ip4/117.160.206.175/tcp/40131] dial tcp4 117.160.206.175:40131: connect: connection refused
  f07944: 'dial, China, Hangzhou, SupremeTreasure', // * [/ip4/103.46.128.45/tcp/57670] dial tcp4 103.46.128.45:57670: connect: connection refused
  f07947: 'dial, China, Zhengzhou', // * [/ip4/117.160.206.175/tcp/40133] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHRLWcUmv2NFQER1vwJAa2qTSC5S7ssJcAuwUn27t667E, but remote key matches 12D3KooWNzTyV8jTJobnDeXBLgJHetsMCSy7r8euCrbszdhTXCKf
  f07956: 'dial, Russia', // * [/ip4/91.218.244.253/tcp/10240] dial tcp4 0.0.0.0:40877->91.218.244.253:10240: i/o timeout
  f07961: 'dial, China, Changzhou', // * [/ip4/58.216.209.94/tcp/6666] dial tcp4 58.216.209.94:6666: connect: connection refused
  f07969: 'dial, China, Hangzhou, FME', // * [/ip4/121.52.246.48/tcp/5002] dial tcp4 121.52.246.48:5002: connect: connection refused
  f07982: 'dial, China, Shenzhen', // * [/ip4/116.30.197.72/tcp/36980] dial tcp4 0.0.0.0:40877->116.30.197.72:36980: i/o timeout
  f07991: 'dial, China, Changsha', // * [/ip4/113.218.133.192/tcp/13470] dial tcp4 0.0.0.0:40877->113.218.133.192:13470: i/o timeout
  f08006: 'dial, China, Shaanxi', // * [/ip4/111.19.129.175/tcp/23456] dial tcp4 0.0.0.0:40877->111.19.129.175:23456: i/o timeout
  f08032: 'dial, China, Weifang', // * [/ip4/111.17.220.235/tcp/6666] dial tcp4 111.17.220.235:6666: connect: connection refused  * [/ip4/111.17.220.237/tcp/6666] dial tcp4 111.17.220.237:6666: connect: connection refused
  f08040: 'dial, Australia, Sydney', // * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:40877->43.241.189.214:39438: i/o timeout
  f08042: 'dial, Brazil, Sao Paulo', // * [/ip4/76.223.3.225/tcp/23456] dial tcp4 0.0.0.0:40877->76.223.3.225:23456: i/o timeout
  f08047: 'dial, China, Hangzhou', // * [/ip4/101.71.125.162/tcp/7654] dial tcp4 0.0.0.0:40877->101.71.125.162:7654: i/o timeout
  f08076: 'dial, Netherlands, Alphen aan den Rijn, Ang', // * [/ip4/143.178.96.190/tcp/24002] dial tcp4 0.0.0.0:40877->143.178.96.190:24002: i/o timeout
  f08088: 'dial, China, Dongguan', // * [/ip4/183.240.203.135/tcp/10240] dial tcp4 183.240.203.135:10240: connect: connection refused
  f08096: 'dial, China, Wuhan', // * [/ip4/59.175.128.46/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWARwVoXJ6ZjfgKEpyBv1dsEmQhHrPN9UwxxKoFkrAw98A, but remote key matches 12D3KooWCFhmdmduqq59w8CsEgEX2qi9KQqE9wmTHmqC5W4tcEaA
  f08101: 'dial, China, Wuxi', // * [/ip4/47.88.10.179/tcp/7000] dial tcp4 0.0.0.0:40877->47.88.10.179:7000: i/o timeout  * [/ip4/47.245.136.114/tcp/7000] dial tcp4 0.0.0.0:40877->47.245.136.114:7000: i/o timeout
  f08109: 'dial, USA, qianyuanyunshuo', // * [/ip4/47.57.8.77/tcp/28109] dial tcp4 0.0.0.0:40877->47.57.8.77:28109: i/o timeout
  f08135: 'dial, Singapore', // * [/ip4/170.33.12.118/tcp/12345] dial tcp4 0.0.0.0:40877->170.33.12.118:12345: i/o timeout
  f08139: 'dial, China, Shanghai', // * [/ip4/218.79.124.15/tcp/45454] dial tcp4 0.0.0.0:40877->218.79.124.15:45454: i/o timeout
  f08148: 'dial, China, Shanghai', // * [/ip4/103.108.182.27/tcp/30031] dial tcp4 0.0.0.0:40877->103.108.182.27:30031: i/o timeout
  f08149: 'dial, China, Jiangmen', // * [/ip4/183.36.3.160/tcp/60015] dial tcp4 183.36.3.160:60015: connect: connection refused
  f08150: 'dial, China, Hangzhou', // * [/ip4/115.199.55.127/tcp/23333] dial tcp4 115.199.55.127:23333: connect: connection refused
  f08161: 'dial, China, Weifang', // * [/ip4/111.17.220.234/tcp/6677] dial tcp4 111.17.220.234:6677: connect: connection refused
  f08170: 'dial, China, Jieyang', // * [/ip4/183.240.204.199/tcp/40573] dial tcp4 183.240.204.199:40573: connect: connection refused
  f08178: 'dial, China, Jiaxing, CAAP-金华', // * [/ip4/61.174.253.25/tcp/2346] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJpwXVGUapvX4nqP1GoAD4eAxobaogY5ZAWC9vfQPUByN, but remote key matches 12D3KooWBKWMoLD3JfU3F9Bobj8c5Ro4fxSb5wqnCRkbFW1mq87o
  f08205: 'dial, Brazil, Sao Paulo', // * [/ip4/169.57.182.19/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHfc4VZ321w7MmZYbmMDdkMw3D4h83Ar3q8MEMjLq69PL, but remote key matches 12D3KooWEfyR3PyQidJ2GgBV6Vvncguotx7xi9GRbFvi8RBoytMu
  f08220: 'dial, China, Shenzhen', // * [/ip4/183.47.51.62/tcp/10240] dial tcp4 183.47.51.62:10240: connect: connection refused  * [/ip4/192.168.16.48/tcp/5472] dial tcp4 192.168.16.48:5472: i/o timeout
  f08235:
    'dial, China, Beijing + Jiaxing + Germany, Frankfurt, 星河华讯&中科星际', // * [/ip4/103.103.177.172/tcp/5678] dial tcp4 0.0.0.0:40877->103.103.177.172:5678: i/o timeout
  f08243: 'dial, USA, Queens', // * [/ip4/108.41.171.148/tcp/55244] dial tcp4 0.0.0.0:40877->108.41.171.148:55244: i/o timeout  * [/ip4/108.41.171.148/tcp/55242] dial tcp4 0.0.0.0:40877->108.41.171.148:55242: i/o timeout  * [/ip4/108.41.171.148/tcp/55243] dial tcp4 0.0.0.0:40877->108.41.171.148:55243: i/o timeout  * [/ip4/108.41.171.148/tcp/55241] dial tcp4 0.0.0.0:40877->108.41.171.148:55241: i/o timeout
  f08257: 'dial, China, Ningbo + USA, Boardman', // * [/ip4/161.117.88.227/tcp/44173] dial tcp4 0.0.0.0:40877->161.117.88.227:44173: i/o timeout  * [/ip4/161.117.249.226/tcp/44173] dial tcp4 0.0.0.0:40877->161.117.249.226:44173: i/o timeout
  f08289: 'dial, Canada, Embrun', // * [/ip4/148.59.149.162/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWR8hBuB593YUujHBYAT9Zp48FgfzYeLbPdqow59ZF3dFg, but remote key matches 12D3KooWKi8JTyGdSAL1TFpdF6gmyjXeMeknqNWT6Eft1cxrSzAq
  f08293: 'dial, China, Xinxiang', // * [/ip4/27.50.142.73/tcp/1347] dial tcp4 27.50.142.73:1347: connect: connection refused
  f08295: 'dial, China, Suzhou, IPFS Cloud', // * [/ip4/222.92.5.150/tcp/40699] dial tcp4 0.0.0.0:40877->222.92.5.150:40699: i/o timeout
  f08301: 'dial, Japan, Setagaya-ku, MEIK', // * [/ip4/126.159.22.156/tcp/50320] dial tcp4 0.0.0.0:40877->126.159.22.156:50320: i/o timeout
  f08330: 'dial, China, Chengdu, oursoft', // * [/ip4/125.69.0.37/tcp/55009] dial tcp4 125.69.0.37:55009: connect: connection refused
  f08338: 'dial, China, Weifang', // * [/ip4/111.17.220.231/tcp/5566] dial tcp4 0.0.0.0:40877->111.17.220.231:5566: i/o timeout
  f08344: 'dial, UK, Hartlepool', // * [/ip4/82.15.108.46/tcp/51437] dial tcp4 0.0.0.0:40877->82.15.108.46:51437: i/o timeout
  f08347: 'dial, China, Chengdu', // * [/ip4/222.209.95.29/tcp/6666] dial tcp4 222.209.95.29:6666: connect: connection refused
  f08358: 'dial, China, Shenzhen', // * [/ip4/119.123.208.233/tcp/45437] dial tcp4 119.123.208.233:45437: connect: connection refused
  f08384:
    'dial, China, Shandong + Hong Kong + Japan, Heiwajima + Russia, Khabarovsk', // * [/ip4/66.42.38.110/tcp/9990] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSNsVcwPC2FXp3bbV9MyAbi35igscSJh6gb8MkFsyxiy2, but remote key matches 12D3KooWD38od1j4abLotnfpALNPZt3TdjmQ1HqSiQBe1qZpnrCc  * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: connection refused  * [/ip4/172.247.228.122/tcp/9999] dial tcp4 0.0.0.0:40877->172.247.228.122:9999: i/o timeout
  f08396: 'dial, France, Fontenay-sous-Bois', // * [/ip4/90.46.50.228/tcp/24002] dial tcp4 90.46.50.228:24002: connect: connection refused
  f08405: 'dial, China, Guangdong', // * [/ip4/183.232.116.201/tcp/4001] dial tcp4 183.232.116.201:4001: connect: connection refused
  f08418: 'dial, China, Chansha + USA', // * [/ip4/27.124.10.49/tcp/7003] dial tcp4 27.124.10.49:7003: connect: connection refused
  f08446: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMfLgpGWM87mLbrkNuN6FQ6zExMvzECDSV4qy7FKDqNvq, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f08448: 'dial, China, Guangdong', // * [/ip4/183.232.116.202/tcp/4001] dial tcp4 183.232.116.202:4001: connect: connection refused
  f08481: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:40877->73.158.16.48:30390: i/o timeout
  f08497: 'dial, Brazil, Sao Paulo', // * [/ip4/18.231.148.87/tcp/46717] dial tcp4 0.0.0.0:40877->18.231.148.87:46717: i/o timeout
  f08568: 'dial, USA, Waxhaw, Meatball Part II', // * [/ip4/71.75.239.182/tcp/41372] dial tcp4 0.0.0.0:40877->71.75.239.182:41372: i/o timeout
  f08684: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.109:23450: i/o timeout
  f08685: 'dial, China, Fuzhou', // * [/ip4/182.99.0.96/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.96:23450: i/o timeout
  f08788: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.103:23450: i/o timeout
  f08793: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.99:23450: i/o timeout
  f08895: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f08904: 'dial, China, Deyang', // * [/ip4/125.64.78.27/tcp/4004] dial tcp4 0.0.0.0:40877->125.64.78.27:4004: i/o timeout
  f08908: 'dial, USA', // * [/ip4/216.18.214.92/tcp/6666] dial tcp4 0.0.0.0:40877->216.18.214.92:6666: i/o timeout
  f08917: 'dial, China, Beijing', // * [/ip4/182.61.174.185/tcp/40000] dial tcp4 182.61.174.185:40000: connect: connection refused
  f08928: 'dial, USA, Arlington, theartist', // * [/ip4/69.251.248.175/tcp/6679] dial tcp4 69.251.248.175:6679: i/o timeout
  f08937: 'dial, China, Wuxi, YC--wuxi', // * [/ip4/58.215.232.74/tcp/10200] dial tcp4 58.215.232.74:10200: connect: connection refused  * [/ip4/192.168.1.18/tcp/1020] dial tcp4 192.168.1.18:1020: i/o timeout
  f08949: 'dial, Norway, Oslo', // * [/ip4/151.252.13.190/tcp/37374] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWE1ubdqszJxdjAAVcZcx2x1PJUNFbNDm52jFkeJoAaPYh, but remote key matches 12D3KooWMpuRzgVuRS6m285cucGgnXWwTnsNtGzjsMJeEqS7UtJw
  f08953: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.100:23450: i/o timeout
  f08958: 'dial, China, Fuzhou', // * [/ip4/182.99.0.108/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.108:23450: i/o timeout
  f08986: 'dial, China, Ordos', // * [/ip4/1.183.72.226/tcp/12308] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCLPAPTjCYyCMBBnv5MkJCaV1o6mawJLha4wdAGkMH1Yq, but remote key matches 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg
  f08991: 'dial, China, Ili', // * [/ip4/124.88.170.140/tcp/16000] dial tcp4 0.0.0.0:40877->124.88.170.140:16000: i/o timeout
  f08995: 'dial, China, Fuzhou', // * [/ip4/182.99.0.97/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.97:23450: i/o timeout
  f09005: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.101:23450: i/o timeout
  f09029: 'dial, China, Wuhan', // * [/ip4/59.175.128.46/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCkJYhKg9uMf2ocRDRxatUWBveJMSdneMamxDmChG2ULv, but remote key matches 12D3KooWCFhmdmduqq59w8CsEgEX2qi9KQqE9wmTHmqC5W4tcEaA
  f09036: 'dial, China, Chengdu, CD-oursoft', // * [/ip4/125.69.0.37/tcp/55019] dial tcp4 125.69.0.37:55019: connect: connection refused
  f09048: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.102:23450: i/o timeout
  f09056: 'dial, China, Shenzhen, SZSQ1', // * [/ip4/119.139.197.93/tcp/20030] dial tcp4 119.139.197.93:20030: connect: connection refused
  f09077: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:40877->218.85.126.210:23450: i/o timeout
  f09082: 'dial, Australia, Canberra', // * [/ip4/101.178.36.30/tcp/24004] dial tcp4 0.0.0.0:40877->101.178.36.30:24004: i/o timeout
  f09088: 'dial, China, Changsha', // * [/ip4/175.10.160.70/tcp/13470] dial tcp4 0.0.0.0:40877->175.10.160.70:13470: i/o timeout
  f09091: 'dial, Netherlands', // * [/ip4/185.232.59.179/tcp/2347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLdKXN3LuTbRqgyvSCxCByPifZDTp1p7hLCtQEgwo4uM6, but remote key matches 12D3KooWJDvwMPfJ1ct9V6JpgRrdA7DWEEfcWSQAWCYbRrNxnXYi
  f09261: 'dial, Brazil, Sao Paulo', // * [/ip4/169.57.189.187/tcp/7000] dial tcp4 169.57.189.187:7000: connect: connection refused
  f09523: 'dial, China, Beijing', // * [/ip4/8.210.13.50/tcp/45678] dial tcp4 8.210.13.50:45678: connect: connection refused  * [/ip4/119.161.169.68/tcp/45678] dial tcp4 0.0.0.0:40877->119.161.169.68:45678: i/o timeout
  f09537: 'dial, USA, El Monte', // * [/ip4/47.145.150.94/tcp/1024] dial tcp4 0.0.0.0:40877->47.145.150.94:1024: i/o timeout
  f09555: 'dial, Australia, Sydney', // * [/ip4/3.25.64.130/tcp/10240] dial tcp4 0.0.0.0:40877->3.25.64.130:10240: i/o timeout
  f09559: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/31001] dial tcp4 0.0.0.0:40877->99.250.201.0:31001: i/o timeout
  f09560: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64002] dial tcp4 178.212.192.216:64002: i/o timeout
  f09561: 'dial, China, Beijing', // * [/ip4/36.112.26.4/tcp/3458] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFp4nbb4eDyUmWaR5XrjSEzdhtHh35ewdwc59e1tkZBcA, but remote key matches 12D3KooWAKXYhFP3mGbaHnCB5GBCvFe8gniGKoDpTbaY8S9FWruH
  f09565: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64003] dial tcp4 178.212.192.216:64003: connect: connection refused
  f09573: 'dial, China, Xiamen', // * [/ip4/121.204.250.253/tcp/4567] dial tcp4 121.204.250.253:4567: connect: connection refused
  f09589: 'dial, China, Changsha', // * [/ip4/113.218.134.132/tcp/5472] dial tcp4 0.0.0.0:40877->113.218.134.132:5472: i/o timeout
  f09592: 'dial, Japan, Minamata', // * [/ip4/203.189.40.203/tcp/10252] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHrm2Ej8kE29FZ5tABnzzWMeeUqz6UWiG6WfECxEBTJyr, but remote key matches 12D3KooWSpji7fDLrXGiM9Gbcy8tzCTYk5ed7ukmaTAznnLMxqGf
  f09597: 'dial, China, Shanghai', // * [/ip4/47.52.20.42/tcp/8046] failed to negotiate security protocol: EOF
  f09605: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64004] dial tcp4 178.212.192.216:64004: connect: connection refused
  f09619: 'dial, China, Shanghai', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f09631: 'dial, China, Changzhou', // * [/ip4/58.216.209.94/tcp/6668] dial tcp4 58.216.209.94:6668: connect: connection refused
  f09643: 'dial, China, Beijing', // * [/ip4/203.93.121.130/tcp/38886] dial tcp4 203.93.121.130:38886: i/o timeout
  f09653: 'dial, China, Chengdu', // * [/ip4/47.242.94.248/tcp/6667] dial tcp4 47.242.94.248:6667: connect: connection refused
  f09656: 'dial, Ukraine, Odessa', // * [/ip4/218.60.28.136/tcp/43368] dial tcp4 218.60.28.136:43368: connect: connection refused
  f09664: 'dial, Australia, Sydney', // * [/ip4/220.238.233.196/tcp/26201] dial tcp4 0.0.0.0:40877->220.238.233.196:26201: i/o timeout
  f09671: 'dial, China, Chongqing', // * [/ip4/113.207.109.184/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMdh1of4D5YPvY4g3Y2pCf6mpQvgHx9kg55RvkJdRmP6z, but remote key matches 12D3KooWPw6phtaL2ftZq7wQLjc6z1YoVou4BK48ZzXk3TVNVPjK
  f09672: 'dial, China, Chengdu', // * [/ip4/110.185.107.124/tcp/21735] dial tcp4 110.185.107.124:21735: connect: connection refused
  f09680: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f09704: 'dial, China, Shenzhen', // * [/ip4/218.17.62.49/tcp/31431] dial tcp4 218.17.62.49:31431: connect: connection refused
  f09721: 'dial, ???, CD-oursoft-1', // * [/ip4/125.69.0.37/tcp/55029] dial tcp4 125.69.0.37:55029: connect: connection refused
  f09723: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:40877->218.85.126.210:23450: i/o timeout
  f09729: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/41112] dial tcp4 183.63.203.161:41112: connect: connection refused
  f09734: 'dial, China, Dongguan', // * [/ip4/121.12.167.179/tcp/41113] dial tcp4 121.12.167.179:41113: connect: connection refused
  f09748: 'dial, China, Tianjin', // * [/ip4/150.129.138.199/tcp/7518] dial tcp4 0.0.0.0:40877->150.129.138.199:7518: i/o timeout
  f09761: 'dial, China, Beijing', // * [/ip4/114.253.41.59/tcp/24002] dial tcp4 0.0.0.0:40877->114.253.41.59:24002: i/o timeout
  f09763: 'dial, China, Mianyang,  <13h', // * [/ip4/47.254.25.128/tcp/7000] dial tcp4 0.0.0.0:40877->47.254.25.128:7000: i/o timeout  * [/ip4/47.254.128.95/tcp/7000] dial tcp4 0.0.0.0:40877->47.254.128.95:7000: i/o timeout
  f09771: 'dial, China, Hangzhou', // * [/ip4/47.57.8.77/tcp/6785] dial tcp4 0.0.0.0:40877->47.57.8.77:6785: i/o timeout
  f09789: 'dial, USA', // * [/ip4/47.242.77.149/tcp/19914] dial tcp4 0.0.0.0:40877->47.242.77.149:19914: i/o timeout
  f09792: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 35.224.87.15:24002: connect: connection refused
  f09797: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.102:23450: i/o timeout
  f09801: 'dial, China, Fuzhou', // * [/ip4/182.99.0.108/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.108:23450: i/o timeout
  f09808: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.100:23450: i/o timeout
  f09809: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.101:23450: i/o timeout
  f09810: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.103:23450: i/o timeout
  f09811: 'dial, China, Dongguan', // * [/ip4/113.105.174.7/tcp/10000] dial tcp4 0.0.0.0:40877->113.105.174.7:10000: i/o timeout
  f09813: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.109:23450: i/o timeout
  f09814: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.99:23450: i/o timeout
  f09817: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.98:23450: i/o timeout
  f09828: 'dial, NR', // * [/ip4/192.168.0.9/tcp/24002] dial tcp4 0.0.0.0:40877->192.168.0.9:24002: i/o timeout
  f09830: 'dial, Korea, Geumcheon-gu', // * [/ip4/121.140.143.29/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWEgLZVWfuy9vrTAre3xcnQdKG7vXh3gkwRXzZbdBc9pnF, but remote key matches 12D3KooWSsjSaxoN3tdeWo4y9g34ptm3m7VmhoLvig1WXarkTPEj
  f09838: 'dial, Russia, Irkutsk', // * [/ip4/90.188.226.112/tcp/9555] dial tcp4 0.0.0.0:40877->90.188.226.112:9555: i/o timeout
  f09859: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f09969: 'dial, China, Guangzhou', // * [/ip4/183.2.157.250/tcp/1029] dial tcp4 183.2.157.250:1029: connect: connection refused
  f09972: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:40877->95.216.99.39:46717: i/o timeout
  f09983: 'dial, China, Guangzhou', // * [/ip4/183.2.157.214/tcp/888] dial tcp4 183.2.157.214:888: connect: connection refused
  f09985: 'dial, China, Qingdao', // * [/ip4/61.147.123.85/tcp/12223] dial tcp4 61.147.123.85:12223: connect: connection refused
  f010015: 'dial, China, Taizhou', // * [/ip4/47.254.31.111/tcp/23456] dial tcp4 0.0.0.0:40877->47.254.31.111:23456: i/o timeout  * [/ip4/47.254.145.29/tcp/23456] dial tcp4 0.0.0.0:40877->47.254.145.29:23456: i/o timeout
  f010020: 'dial, China, Chongqing', // * [/ip4/113.207.109.184/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNXhxeBMqYPF56bZExJzcjeiHDaserGs7YYXNgLtLHVvS, but remote key matches 12D3KooWPw6phtaL2ftZq7wQLjc6z1YoVou4BK48ZzXk3TVNVPjK
  f010032: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.103:23450: i/o timeout
  f010038: 'dial, China, Hangzhou + Singapore', // * [/ip4/170.33.12.166/tcp/39774] dial tcp4 0.0.0.0:40877->170.33.12.166:39774: i/o timeout
  f010063: 'dial, China, Mianyang', // * [/ip4/183.223.56.9/tcp/23456] dial tcp4 183.223.56.9:23456: connect: connection refused
  f010152: 'dial, Germany-cfa', // * [/ip4/116.202.129.161/tcp/10666] dial tcp4 116.202.129.161:10666: connect: connection refused
  f010170: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.109:23450: i/o timeout
  f010223: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12311] dial tcp4 0.0.0.0:40877->47.57.188.137:12311: i/o timeout
  f010224: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.102:23450: i/o timeout
  f010230: 'dial, China, Beijing', // * [/ip4/106.55.236.214/tcp/10022] dial tcp4 106.55.236.214:10022: connect: connection refused
  f010238: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23455] dial tcp4 110.80.33.138:23455: connect: connection refused
  f010268: 'dial, China, Hangzhou', // * [/ip4/47.57.8.77/tcp/8001] dial tcp4 0.0.0.0:40877->47.57.8.77:8001: i/o timeout
  f010270: 'dial, China, Shijiazhuang', // * [/ip4/111.224.179.91/tcp/2233] dial tcp4 0.0.0.0:40877->111.224.179.91:2233: i/o timeout
  f010274: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.99:23450: i/o timeout
  f010276: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f010287: 'dial, China, Fuzhou', // * [/ip4/182.99.0.97/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.97:23450: i/o timeout
  f010289: 'dial, China, Fuzhou', // * [/ip4/182.99.0.96/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.96:23450: i/o timeout
  f010291: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.98:23450: i/o timeout
  f010298: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 182.99.0.102:23450: i/o timeout
  f010311: 'dial, Korea, Hwaseong-si', // * [/ip4/106.255.239.43/tcp/24002] dial tcp4 0.0.0.0:40877->106.255.239.43:24002: i/o timeout
  f010362: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.35.11/tcp/46717] dial tcp4 0.0.0.0:40877->15.228.35.11:46717: i/o timeout
  f010372: 'dial, Brazil, Sao Paulo', // * [/ip4/52.67.22.220/tcp/46717] dial tcp4 0.0.0.0:40877->52.67.22.220:46717: i/o timeout
  f010374: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAUYDipKeDFH92NqD4RxxUGUZJtiUwH5YD9scLwnavVXP, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f010398: 'dial, Korea, Yeongdeungpo-dong', // * [/ip4/121.140.143.29/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLKVafLxDtYZjCk6gBdnUzGpkYs8sk8Yue3GPnuadtVqs, but remote key matches 12D3KooWSsjSaxoN3tdeWo4y9g34ptm3m7VmhoLvig1WXarkTPEj
  f010411: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f010424: 'dial, Australia, Sydney', // * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:40877->43.241.189.214:39438: i/o timeout
  f010446: 'dial, Netherlands', // * [/ip4/143.178.96.190/tcp/24002] dial tcp4 0.0.0.0:40877->143.178.96.190:24002: i/o timeout
  f010449: 'dial, China, Jiangmen', // * [/ip4/183.36.3.160/tcp/60007] dial tcp4 183.36.3.160:60007: connect: connection refused
  f010495: 'dial, China, Tainjin', // * [/ip4/150.129.138.199/tcp/8518] dial tcp4 0.0.0.0:40877->150.129.138.199:8518: i/o timeout
  f010496: 'dial, China, Guangzhou', // * [/ip4/183.2.157.213/tcp/666] dial tcp4 183.2.157.213:666: connect: connection refused
  f010516: 'dial, Brazil, Sao Paulo', // * [/ip4/18.230.25.100/tcp/18888] dial tcp4 0.0.0.0:40877->18.230.25.100:18888: i/o timeout
  f010527: 'dial, China, Shanghai', // * [/ip4/116.228.53.133/tcp/10240] failed to negotiate security protocol: unexpected EOF
  f010533: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12319] dial tcp4 0.0.0.0:40877->47.57.188.137:12319: i/o timeout
  f010541: 'dial, China, Chengdu', // * [/ip4/110.185.107.23/tcp/21735] dial tcp4 110.185.107.23:21735: connect: connection refused  * [/ip4/110.185.107.117/tcp/21736] dial tcp4 110.185.107.117:21736: connect: connection refused
  f010553: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12316] dial tcp4 0.0.0.0:40877->47.57.188.137:12316: i/o timeout
  f010579: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.194/tcp/23450] dial tcp4 0.0.0.0:40877->45.192.184.194:23450: i/o timeout
  f010586: 'dial, China, Fuzhou', // * [/ip4/45.192.184.197/tcp/23450] dial tcp4 0.0.0.0:40877->45.192.184.197:23450: i/o timeout
  f010593: 'dial, USA, East Islip', // * [/ip6/2a0a:e5c1:17f::42/tcp/33823] dial tcp6 [2a0a:e5c1:17f::42]:33823: connect: network is unreachable  * [/ip4/74.88.128.118/tcp/41126] dial tcp4 0.0.0.0:40877->74.88.128.118:41126: i/o timeout  * [/ip4/74.88.128.118/tcp/55519] dial tcp4 0.0.0.0:40877->74.88.128.118:55519: i/o timeout
  f010598: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/10002] dial tcp4 99.250.201.0:10002: i/o timeout
  f010600: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f010606: 'dial, China, Fuzhou', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:40877->45.192.184.195:23450: i/o timeout
  f010607: 'dial, China, Guangzhou', // * [/ip4/8.210.76.199/tcp/18899] dial tcp4 0.0.0.0:40877->8.210.76.199:18899: i/o timeout
  f010608: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.101:23450: i/o timeout
  f010609: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/36666] dial tcp4 0.0.0.0:40877->182.99.0.100:36666: i/o timeout
  f010613: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/20002] dial tcp4 0.0.0.0:40877->99.250.201.0:20002: i/o timeout
  f014230: 'dial, China, Fuzhou', // * [/ip4/185.23.181.67/tcp/23450] dial tcp4 0.0.0.0:40877->185.23.181.67:23450: i/o timeout
  f014241: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNczL8NwzKEd2Np4uiDs42GB3pKcmoABTdM8JJ8v9MRGB, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f014246: 'dial, China, Shenzhen', // * [/ip4/103.40.249.212/tcp/44299] dial tcp4 0.0.0.0:40877->103.40.249.212:44299: i/o timeout
  f014248: 'dial, Turkey', // * [/ip4/185.23.180.67/tcp/23450] dial tcp4 0.0.0.0:40877->185.23.180.67:23450: i/o timeout
  f014259: 'dial, China, Fuzhou', // * [/ip4/45.192.184.193/tcp/23450] dial tcp4 0.0.0.0:40877->45.192.184.193:23450: i/o timeout
  f014279: 'dial, Finland, Helsinki', // * [/ip4/95.217.113.188/tcp/12345] dial tcp4 0.0.0.0:40877->95.217.113.188:12345: i/o timeout
  f014281: 'dial, Netherlands, Permerend', // * [/ip4/83.149.84.21/tcp/2347] dial tcp4 83.149.84.21:2347: i/o timeout
  f014307: 'dial, China, Dongguan', // * [/ip4/218.16.123.133/tcp/4001] dial tcp4 218.16.123.133:4001: connect: connection refused
  f014311: 'dial, China, Ordos', // * [/ip4/162.62.55.44/tcp/12309] dial tcp4 0.0.0.0:40877->162.62.55.44:12309: i/o timeout
  f014324: 'dial, Canada, Vancouver', // * [/ip4/75.156.27.216/tcp/12345] dial tcp4 0.0.0.0:40877->75.156.27.216:12345: i/o timeout
  f014328: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/10003] dial tcp4 99.250.201.0:10003: i/o timeout
  f014348: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.15.78/tcp/46717] dial tcp4 0.0.0.0:40877->15.228.15.78:46717: i/o timeout
  f014377: 'dial, China, Liaoning', // * [/ip4/116.132.221.24/tcp/42985] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAwSVUn5sTmPq1f64G1FfAt3ovRyJwzimCQtr5NQYG3Z7, but remote key matches 12D3KooWSFGYvbGeXwHPdLytmxkzFgfAzMXjgUPFzwkcVzNnfGvu
  f014379: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f014380: 'dial, China, Hangzhou + Wuhan + Singapore', // * [/ip4/170.33.12.78/tcp/7161] dial tcp4 0.0.0.0:40877->170.33.12.78:7161: i/o timeout  * [/ip4/170.33.12.186/tcp/7161] dial tcp4 0.0.0.0:40877->170.33.12.186:7161: i/o timeout
  f014382: 'dial, Singapore', // * [/ip4/115.236.22.154/tcp/7177] dial tcp4 115.236.22.154:7177: connect: connection refused
  f014386: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/7169] dial tcp4 0.0.0.0:40877->170.33.12.186:7169: i/o timeout
  f014393: 'dial, China, Zhejiang', // * [/ip4/43.227.216.41/tcp/25677] failed to negotiate security protocol: read tcp4 10.0.1.9:40877->43.227.216.41:25677: read: connection reset by peer
  f014395: 'dial, China, Dongguan', // * [/ip4/218.16.49.135/tcp/41112] dial tcp4 218.16.49.135:41112: connect: connection refused
  f014415: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f014431: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/7185] dial tcp4 0.0.0.0:40877->170.33.12.186:7185: i/o timeout  * [/ip4/170.33.12.78/tcp/7185] dial tcp4 0.0.0.0:40877->170.33.12.78:7185: i/o timeout
  f014432: 'dial, China, Chengdu', // * [/ip4/125.69.0.37/tcp/55019] dial tcp4 125.69.0.37:55019: connect: connection refused
  f014433: 'dial, Singapore', // * [/ip4/170.33.12.78/tcp/7193] dial tcp4 0.0.0.0:40877->170.33.12.78:7193: i/o timeout  * [/ip4/170.33.12.186/tcp/7193] dial tcp4 0.0.0.0:40877->170.33.12.186:7193: i/o timeout
  f014436: 'dial, China, Chengdu', // * [/ip4/125.69.0.37/tcp/55009] dial tcp4 125.69.0.37:55009: connect: connection refused
  f014440: 'dial, Hong Kong', // * [/ip4/45.113.32.179/tcp/6666] dial tcp4 45.113.32.179:6666: connect: connection refused
  f014481: 'dial, China, Shanghai', // * [/ip4/103.242.134.36/tcp/12288] failed to negotiate security protocol: EOF  * [/ip4/170.33.12.118/tcp/12345] dial tcp4 0.0.0.0:40877->170.33.12.118:12345: i/o timeout
  f014483: 'dial, USA, Clarksville', // * [/ip4/199.46.99.12/tcp/43801] dial tcp4 199.46.99.12:43801: connect: no route to host
  f014522: 'dial, China, Shanghai', // * [/ip4/81.68.170.164/tcp/5474] dial tcp4 0.0.0.0:40877->81.68.170.164:5474: i/o timeout
  f014547: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.100:23450: i/o timeout
  f014572: 'dial, USA', // * [/ip4/47.90.208.156/tcp/39706] dial tcp4 0.0.0.0:40877->47.90.208.156:39706: i/o timeout
  f014573: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.101:23450: i/o timeout
  f014606: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f014609: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.109:23450: i/o timeout
  f014632: 'dial, Canada', // * [/ip4/148.59.149.162/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGeBVKYsVXc7PcMCKtovVv5wztHSLmfMwWFKADV8wbj26, but remote key matches 12D3KooWKi8JTyGdSAL1TFpdF6gmyjXeMeknqNWT6Eft1cxrSzAq
  f014634: 'dial, USA, Boardman', // * [/ip4/54.148.63.7/tcp/10240] dial tcp4 0.0.0.0:40877->54.148.63.7:10240: i/o timeout
  f014640: 'dial, Hungary', // * [/ip4/87.229.53.110/tcp/44163] dial tcp4 0.0.0.0:40877->87.229.53.110:44163: i/o timeout
  f014644: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:40877->73.158.16.48:30390: i/o timeout
  f014744: 'dial, China, Taiyuan', // * [/ip4/1.71.191.196/tcp/33411] dial tcp4 0.0.0.0:40877->1.71.191.196:33411: i/o timeout
  f014778: 'dial, China, Ordos', // * [/ip4/162.62.55.44/tcp/12310] dial tcp4 0.0.0.0:40877->162.62.55.44:12310: i/o timeout
  f014782: 'dial, DNS:wlblock.io', // * [/ip4/18.166.30.112/tcp/3456] dial tcp4 18.166.30.112:3456: connect: connection refused
  f014786: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:40877->218.85.126.210:23450: i/o timeout
  f014798: 'dial, Brazil, Sao Paulo', // * [/ip4/18.228.119.165/tcp/5101] dial tcp4 0.0.0.0:40877->18.228.119.165:5101: i/o timeout
  f015231: 'dial, China, Wuxi', // * [/ip4/193.118.43.158/tcp/7090] failed to negotiate security protocol: EOF
  f015642: 'dial, China, Fuzhou', // * [/ip4/220.176.125.20/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.20:23450: i/o timeout
  f015643: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12317] dial tcp4 0.0.0.0:40877->47.57.188.137:12317: i/o timeout
  f015655: 'dial, Korea, Geumcheon-gu', // * [/ip4/121.140.143.29/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNVFbM4bePKFFkWiwUaCQpvvaKzcgtAXrDgiNjFcp6rRF, but remote key matches 12D3KooWSsjSaxoN3tdeWo4y9g34ptm3m7VmhoLvig1WXarkTPEj
  f015662: 'dial, China, Beijing', // * [/ip4/203.93.121.130/tcp/38886] dial tcp4 203.93.121.130:38886: i/o timeout
  f015685: 'dial, China, Shanghai', // * [/ip4/222.64.141.185/tcp/40321] dial tcp4 222.64.141.185:40321: connect: connection refused
  f015714: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12318] dial tcp4 0.0.0.0:40877->47.57.188.137:12318: i/o timeout
  f015720: 'dial, China, Ningbo', // * [/ip4/149.28.89.24/tcp/7102] dial tcp4 149.28.89.24:7102: connect: connection refused  * [/ip4/45.77.72.195/tcp/7103] dial tcp4 45.77.72.195:7103: connect: no route to host  * [/ip4/45.77.89.14/tcp/7105] dial tcp4 0.0.0.0:40877->45.77.89.14:7105: i/o timeout  * [/ip4/45.32.19.57/tcp/7106] dial tcp4 0.0.0.0:40877->45.32.19.57:7106: i/o timeout  * [/ip4/155.138.144.135/tcp/7107] dial tcp4 0.0.0.0:40877->155.138.144.135:7107: i/o timeout  * [/ip4/141.164.50.170/tcp/7201] dial tcp4 0.0.0.0:40877->141.164.50.170:7201: i/o timeout  * [/ip4/104.156.230.123/tcp/7104] dial tcp4 0.0.0.0:40877->104.156.230.123:7104: i/o timeout
  f015731: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12329] dial tcp4 0.0.0.0:40877->8.209.107.150:12329: i/o timeout
  f015732: 'dial, USA, Portland', // * [/ip4/47.254.31.111/tcp/23456] dial tcp4 0.0.0.0:40877->47.254.31.111:23456: i/o timeout  * [/ip4/47.254.145.29/tcp/23456] dial tcp4 0.0.0.0:40877->47.254.145.29:23456: i/o timeout
  f015733: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12500] dial tcp4 0.0.0.0:40877->47.57.188.137:12500: i/o timeout
  f015734: 'dial, China, Qingdao', // * [/ip4/127.0.0.1/tcp/42235] dial tcp4 127.0.0.1:42235: connect: connection refused  * [/ip6/::1/tcp/40079] dial tcp6 [::1]:40079: connect: connection refused  * [/ip4/61.147.123.85/tcp/42235] dial tcp4 61.147.123.85:42235: connect: connection refused
  f015742: 'dial, China, Ningbo', // * [/ip4/149.28.89.24/tcp/7002] dial tcp4 149.28.89.24:7002: connect: connection refused  * [/ip4/45.77.72.195/tcp/7003] dial tcp4 45.77.72.195:7003: connect: no route to host  * [/ip4/155.138.144.135/tcp/7007] dial tcp4 0.0.0.0:40877->155.138.144.135:7007: i/o timeout  * [/ip4/104.156.230.123/tcp/7004] dial tcp4 0.0.0.0:40877->104.156.230.123:7004: i/o timeout  * [/ip4/45.32.19.57/tcp/7006] dial tcp4 0.0.0.0:40877->45.32.19.57:7006: i/o timeout  * [/ip4/45.77.89.14/tcp/7005] dial tcp4 0.0.0.0:40877->45.77.89.14:7005: i/o timeout  * [/ip4/141.164.50.170/tcp/7001] dial tcp4 0.0.0.0:40877->141.164.50.170:7001: i/o timeout
  f015756: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:40877->95.216.99.39:46717: i/o timeout
  f015757: 'dial, China, Hangzhou', // * [/ip4/103.46.128.45/tcp/57670] dial tcp4 103.46.128.45:57670: connect: connection refused
  f015760: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.53/tcp/7000] dial tcp4 0.0.0.0:40877->197.231.176.53:7000: i/o timeout
  f015777: 'dial, Australia, Sydney', // * [/ip4/52.63.43.218/tcp/8888] dial tcp4 0.0.0.0:40877->52.63.43.218:8888: i/o timeout
  f015795: 'dial, Brazil, Sao Paulo', // * [/ip4/18.230.133.57/tcp/8888] dial tcp4 0.0.0.0:40877->18.230.133.57:8888: i/o timeout
  f015797: 'dial, Germany, Rostock', // * [/ip4/46.4.101.121/tcp/443] dial tcp4 0.0.0.0:40877->46.4.101.121:443: i/o timeout
  f015798: 'dial, Germany', // * [/ip4/46.4.75.207/tcp/443] dial tcp4 46.4.75.207:443: connect: connection refused
  f015799: 'dial, Germany, Rostock', // * [/ip4/46.4.102.167/tcp/443] dial tcp4 46.4.102.167:443: connect: connection refused
  f015800: 'dial, Germany, Sankt Andreasberg', // * [/ip4/148.251.120.145/tcp/443] dial tcp4 148.251.120.145:443: connect: connection refused
  f015801: 'dial, Germany, Ismaning', // * [/ip4/88.198.66.42/tcp/443] dial tcp4 88.198.66.42:443: connect: connection refused
  f015802: 'dial, Germany', // * [/ip4/46.4.79.199/tcp/443] dial tcp4 46.4.79.199:443: connect: connection refused
  f015803: 'dial, Germany', // * [/ip4/46.4.79.213/tcp/443] dial tcp4 46.4.79.213:443: connect: connection refused
  f015804: 'dial, Germany, Ismaning', // * [/ip4/88.198.67.156/tcp/443] dial tcp4 88.198.67.156:443: connect: connection refused
  f015805: 'dial, Germany', // * [/ip4/46.4.79.214/tcp/443] dial tcp4 46.4.79.214:443: connect: connection refused
  f015806: 'dial, Germany', // * [/ip4/176.9.59.6/tcp/443] dial tcp4 176.9.59.6:443: connect: connection refused
  f015807: 'dial, Germany', // * [/ip4/46.4.79.203/tcp/443] dial tcp4 0.0.0.0:40877->46.4.79.203:443: i/o timeout
  f015808: 'dial, Germany', // * [/ip4/46.4.79.209/tcp/443] dial tcp4 46.4.79.209:443: connect: connection refused
  f015809: 'dial, Germany', // * [/ip4/46.4.87.88/tcp/443] dial tcp4 46.4.87.88:443: connect: connection refused
  f015810: 'dial, Germany', // * [/ip4/46.4.79.197/tcp/443] dial tcp4 46.4.79.197:443: connect: connection refused
  f015811: 'dial, Germany, Lanshut', // * [/ip4/138.201.12.247/tcp/443] dial tcp4 138.201.12.247:443: connect: connection refused
  f015812: 'dial, Germany', // * [/ip4/136.243.43.176/tcp/443] dial tcp4 136.243.43.176:443: connect: connection refused
  f015818: 'dial, Netherlands', // * [/ip4/66.248.204.121/tcp/2345] dial tcp4 0.0.0.0:40877->66.248.204.121:2345: i/o timeout
  f015819: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.5:23450: i/o timeout
  f015826: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.2:23450: i/o timeout
  f015839: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.3:23450: i/o timeout
  f015845: 'dial, China, Fuzhou', // * [/ip4/220.176.125.20/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.20:23450: i/o timeout
  f015846: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:40877->45.192.184.195:23450: i/o timeout
  f015852: 'dial, China, Fuzhou', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:40877->45.192.184.195:23450: i/o timeout
  f015855: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.4:23450: i/o timeout
  f015860: 'dial, Ukraine, Odessa', // * [/ip4/178.212.192.216/tcp/64005] dial tcp4 178.212.192.216:64005: connect: connection refused
  f015861: 'dial, Ukraine, Odessa', // * [/ip4/178.212.192.216/tcp/64006] dial tcp4 178.212.192.216:64006: connect: connection refused
  f015862: 'dial, Ukraine, Odessa', // * [/ip4/178.212.192.216/tcp/64007] dial tcp4 178.212.192.216:64007: connect: connection refused
  f015866: 'dial, China, Fuzhou', // * [/ip4/220.176.125.10/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.10:23450: i/o timeout
  f015872: 'dial, China, Fuzhou', // * [/ip4/45.192.184.205/tcp/23450] dial tcp4 0.0.0.0:40877->45.192.184.205:23450: i/o timeout
  f015873: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.98:23450: i/o timeout
  f015884: 'dial, China, Fuzhou', // * [/ip4/45.192.184.203/tcp/23450] dial tcp4 0.0.0.0:40877->45.192.184.203:23450: i/o timeout
  f015887: 'dial, China, Fuzhou', // * [/ip4/45.192.184.201/tcp/23450] dial tcp4 0.0.0.0:40877->45.192.184.201:23450: i/o timeout
  f015888: 'dial, China, Fuzhou', // * [/ip4/45.192.184.207/tcp/23450] dial tcp4 0.0.0.0:40877->45.192.184.207:23450: i/o timeout
  f015894: 'dial, China, Fuzhou', // * [/ip4/45.192.184.199/tcp/23450] dial tcp4 0.0.0.0:40877->45.192.184.199:23450: i/o timeout
  f015897: 'dial, China, Guangdong', // * [/ip4/43.252.149.169/tcp/4001] dial tcp4 0.0.0.0:40877->43.252.149.169:4001: i/o timeout
  f015898: 'dial, Lithuania', // * [/ip4/188.214.129.85/tcp/36899] dial tcp4 188.214.129.85:36899: connect: connection refused
  f015900: 'dial, Germany', // * [/ip4/46.4.63.227/tcp/443] dial tcp4 46.4.63.227:443: connect: connection refused
  f015901: 'dial, Germany', // * [/ip4/138.201.9.143/tcp/443] dial tcp4 138.201.9.143:443: connect: connection refused
  f015902: 'dial, Germany', // * [/ip4/188.40.133.181/tcp/443] dial tcp4 188.40.133.181:443: connect: connection refused
  f015903: 'dial, Germany', // * [/ip4/136.243.48.38/tcp/443] dial tcp4 136.243.48.38:443: connect: connection refused
  f015905: 'dial, Lithuania', // * [/ip4/188.214.129.49/tcp/34751] dial tcp4 0.0.0.0:40877->188.214.129.49:34751: i/o timeout
  f015907: 'dial, Canada, Calgary', // * [/ip4/70.77.238.98/tcp/46717] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPwoUPJMRoyTS4UJTV4jAeYY4raxtAPEw8VAfgENxBSwg, but remote key matches 12D3KooWNPbyqVXuPQQR3vocTMUbjipL95qHxGjoug56do1r2SCZ
  f015910: 'dial, Turkey', // * [/ip4/185.23.181.67/tcp/23450] dial tcp4 0.0.0.0:40877->185.23.181.67:23450: i/o timeout
  f015914: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:40877->182.99.0.99:23450: i/o timeout
  f015918: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.2:23450: i/o timeout
  f015922: 'dial, China', // * [/ip4/162.62.55.44/tcp/12317] dial tcp4 0.0.0.0:40877->162.62.55.44:12317: i/o timeout
  f015926: 'dial, China', // * [/ip4/162.62.55.44/tcp/12319] dial tcp4 0.0.0.0:40877->162.62.55.44:12319: i/o timeout
  f015928: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.3:23450: i/o timeout
  f015933: 'dial, Finland, Helskinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:40877->95.216.99.39:46717: i/o timeout
  f015947: 'dial, Finland, Helsinki', // * [/ip4/95.217.114.57/tcp/45381] dial tcp4 95.217.114.57:45381: connect: connection refused
  f016024: 'dial, China, Fuzhou', // * [/ip4/220.176.125.10/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.10:23450: i/o timeout
  f016056: 'dial, USA, Arlington', // * [/ip4/69.251.248.175/tcp/6679] dial tcp4 69.251.248.175:6679: connect: no route to host
  f016202: 'dial, Korea, Songpa-gu', // * [/ip4/118.223.164.15/tcp/42155] dial tcp4 0.0.0.0:40877->118.223.164.15:42155: i/o timeout
  f016207: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused
  f016238: 'dial, NR', // * [/ip4/192.168.100.27/tcp/57670] dial tcp4 192.168.100.27:57670: connect: no route to host
  f016263: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f016279: 'dial, Finland, Helsinki', // * [/ip4/95.216.68.181/tcp/46717] dial tcp4 0.0.0.0:40877->95.216.68.181:46717: i/o timeout
  f016297: 'dial, China, Mianyang + USA', // * [/ip4/47.254.128.95/tcp/7000] dial tcp4 0.0.0.0:40877->47.254.128.95:7000: i/o timeout  * [/ip4/47.254.25.128/tcp/7000] dial tcp4 0.0.0.0:40877->47.254.25.128:7000: i/o timeout
  f016302: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 220.176.125.5:23450: i/o timeout
  f016309: 'dial, USA, Boardman', // * [/ip4/52.41.243.212/tcp/28003] dial tcp4 0.0.0.0:40877->52.41.243.212:28003: i/o timeout
  f016364: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 36.33.216.70:10240: i/o timeout
  f016419: 'dial, USA, Mountain View', // * [/ip6/2601:647:4700:7e:b85f:e6cd:bc32:478f/tcp/44545] dial tcp6 [2601:647:4700:7e:b85f:e6cd:bc32:478f]:44545: connect: network is unreachable  * [/ip4/127.0.0.1/tcp/33585] dial tcp4 127.0.0.1:33585: connect: connection refused  * [/ip6/::1/tcp/44545] dial tcp6 [::1]:44545: connect: connection refused  * [/ip4/192.168.86.244/tcp/33585] dial tcp4 192.168.86.244:33585: i/o timeout  * [/ip4/73.158.190.21/tcp/26715] dial tcp4 0.0.0.0:40877->73.158.190.21:26715: i/o timeout  * [/ip4/73.158.190.21/tcp/58442] dial tcp4 0.0.0.0:40877->73.158.190.21:58442: i/o timeout
  f016479: 'dial, China, Dongguan', // * [/ip4/218.16.123.133/tcp/4001] dial tcp4 218.16.123.133:4001: connect: connection refused
  f016509: 'dial, China, Fuzhou', // * [/ip4/220.249.190.57/tcp/44567] dial tcp4 0.0.0.0:40877->220.249.190.57:44567: i/o timeout  * [/ip4/10.25.40.61/tcp/40271] dial tcp4 10.25.40.61:40271: i/o timeout
  f016525: 'dial, China, Guangzhou', // * [/ip4/8.210.76.199/tcp/18899] dial tcp4 0.0.0.0:40877->8.210.76.199:18899: i/o timeout
  f016579: 'dial, USA, Howell', // * [/ip4/96.64.7.172/tcp/5472] dial tcp4 96.64.7.172:5472: connect: connection refused
  f016603: 'dial, China, Dongguan', // * [/ip4/121.10.0.90/tcp/57670] dial tcp4 121.10.0.90:57670: i/o timeout
  f016659: 'dial, USA, Alpharetta', // * [/ip4/192.168.1.64/tcp/41931] dial tcp4 0.0.0.0:40877->192.168.1.64:41931: i/o timeout
  f016850: 'dial, Japan', // * [/ip4/163.44.165.168/tcp/30333] dial tcp4 0.0.0.0:40877->163.44.165.168:30333: i/o timeout
  f016917: 'dial, China, Guangdong', // * [/ip4/183.232.116.200/tcp/4001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQgQZKZbW7ZDVMspANNSfGkjqJxuWxc7WDauGoEJGvtXu, but remote key matches 12D3KooWPkML61uXkPFbnaSretqsS8qYmKkrfeEmnhGgfrfQ8UDY
  f017038: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.2:23450: i/o timeout
  f017067: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.3:23450: i/o timeout
  f017082: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.194/tcp/23450] dial tcp4 0.0.0.0:40877->45.192.184.194:23450: i/o timeout
  f017136: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f017193: 'dial, Singapore', // * [/ip4/8.211.49.16/tcp/14567] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAqdzpU6946afUESqGnf3GMo4YDojUasgPaG4djLhM8C3, but remote key matches 12D3KooWRoWj1PymQ5oEYrRqmHozWSjFJzHTsnqVkPRRgvj52Q8n
  f017194: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 36.33.216.70:10240: i/o timeout
  f017200: 'dial, Lithuania', // * [/ip4/46.166.165.72/tcp/10240] dial tcp4 0.0.0.0:40877->46.166.165.72:10240: i/o timeout
  f017242: 'dial, China, Guangdong', // * [/ip4/103.142.248.7/tcp/4347] dial tcp4 103.142.248.7:4347: connect: connection refused
  f017244: 'dial, Korea, Seoul', // * [/ip4/141.164.34.113/tcp/41111] dial tcp4 0.0.0.0:40877->141.164.34.113:41111: i/o timeout
  f017250: 'dial, China, Zhejiang', // * [/ip4/161.117.88.227/tcp/35252] dial tcp4 0.0.0.0:40877->161.117.88.227:35252: i/o timeout
  f017266: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.2:23450: i/o timeout
  f017273: 'dial, China, Liaoning', // * [/ip4/116.132.221.10/tcp/10241] dial tcp4 116.132.221.10:10241: connect: connection refused
  f017285: 'dial, China, Maoming', // * [/ip4/61.143.232.26/tcp/12345] dial tcp4 61.143.232.26:12345: connect: connection refused
  f017488: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 35.224.87.15:24002: connect: connection refused
  f017635: 'dial, China, Nanchong', // * [/ip4/124.161.87.252/tcp/32005] dial tcp4 0.0.0.0:40877->124.161.87.252:32005: i/o timeout
  f017672: 'dial, China, Cangzhou', // * [/ip4/221.195.0.71/tcp/10240] dial tcp4 221.195.0.71:10240: connect: connection refused
  f017738: 'dial, China', // * [/ip4/101.36.64.212/tcp/42545] dial tcp4 101.36.64.212:42545: connect: connection refused
  f017796: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.4:23450: i/o timeout
  f018088: 'dial, USA, Mountain View', // * [/ip6/2601:647:4700:7e:8d28:74f1:99b6:9807/tcp/36371] dial tcp6 [2601:647:4700:7e:8d28:74f1:99b6:9807]:36371: connect: network is unreachable  * [/ip6/::1/tcp/36371] dial tcp6 [::1]:36371: connect: connection refused  * [/ip4/127.0.0.1/tcp/41941] dial tcp4 127.0.0.1:41941: connect: connection refused  * [/ip4/73.158.190.21/tcp/39083] dial tcp4 0.0.0.0:40877->73.158.190.21:39083: i/o timeout  * [/ip4/192.168.86.244/tcp/41941] dial tcp4 192.168.86.244:41941: i/o timeout  * [/ip4/73.158.190.21/tcp/52286] dial tcp4 0.0.0.0:40877->73.158.190.21:52286: i/o timeout
  f018119: 'dial, China, Dongguan', // * [/ip4/113.105.174.9/tcp/10000] dial tcp4 0.0.0.0:40877->113.105.174.9:10000: i/o timeout
  f018203: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/5678] dial tcp4 0.0.0.0:40877->95.216.99.39:5678: i/o timeout
  f018429: 'dial, Korea, Hwaseong-si', // * [/ip4/112.222.105.76/tcp/24102] dial tcp4 112.222.105.76:24102: i/o timeout
  f018440: 'dial, Russia, St. Petersburg', // * [/ip4/188.187.61.69/tcp/44389] dial tcp4 188.187.61.69:44389: connect: connection refused
  f018464: 'dial, Sweden, Stockholm', // * [/ip4/85.30.30.76/tcp/38387] dial tcp4 0.0.0.0:40877->85.30.30.76:38387: i/o timeout
  f018476: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.4:23450: i/o timeout
  f018493: 'dial, Denmark, Kobenhavn S', // * [/ip4/185.50.195.183/tcp/10243] dial tcp4 0.0.0.0:40877->185.50.195.183:10243: i/o timeout
  f018498: 'dial, Singapore', // * [/ip4/8.209.119.18/tcp/14567] dial tcp4 0.0.0.0:40877->8.209.119.18:14567: i/o timeout
  f018506: 'dial, USA, New York', // * [/ip4/47.254.77.92/tcp/41112] failed to negotiate security protocol: EOF
  f018509: 'dial, China, Dongguan', // * [/ip4/113.105.174.6/tcp/10000] dial tcp4 0.0.0.0:40877->113.105.174.6:10000: i/o timeout
  f018525: 'dial, USA, Queens', // * [/ip4/24.90.181.106/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPPX51KkQcQhzM1LKBbu3uV2ZkFsBSmcDjLG7kgKqQbp4, but remote key matches 12D3KooWHcpqZ9Ps8cXHk2JaQVqAhjC7cPiLM14YKTmfAXT1LN3M
  f018540: 'dial, Netherlands', // * [/ip4/185.232.59.178/tcp/3347] dial tcp4 185.232.59.178:3347: connect: connection refused
  f018544: 'dial, Korea, Uijeongbu-si', // * [/ip4/119.193.190.72/tcp/5472] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGgihyz3aZvtSpXyZLtarqMxESor6KXzEp3poz8DRwTuZ, but remote key matches 12D3KooWBhrQUQC5gWtHeRNS1V7ThxEv4hKLCk8Z4PZNy7T1oruT
  f018562: 'dial, New Zealand, Masterton', // * [/ip4/121.99.224.109/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWC9jegSfiHcei2BeABkn1PA164oQ7kpx2AQ12ix136988, but remote key matches 12D3KooWNobH75Kmsr4LhtLbWXpViuRoqtiPUcso2VutUQc4TrtL  * [/ip4/121.99.224.109/tcp/10241] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWC9jegSfiHcei2BeABkn1PA164oQ7kpx2AQ12ix136988, but remote key matches 12D3KooWDcBfXqrBJvVEZZNfu41waaD2rLDM1H5xNBTJEMu5iec5
  f018803: 'dial, Korea, Seodaemun-gu', // * [/ip4/127.0.0.1/tcp/2345] dial tcp4 127.0.0.1:2345: connect: connection refused  * [/ip4/119.192.136.11/tcp/12345] dial tcp4 119.192.136.11:12345: connect: connection refused
  f018806: 'dial, Finland, Helsinki', // * [/ip4/95.217.114.57/tcp/45381] dial tcp4 95.217.114.57:45381: connect: connection refused
  f018809: 'dial, USA, New York', // * [/ip4/45.61.255.20/tcp/41114] dial tcp4 0.0.0.0:40877->45.61.255.20:41114: i/o timeout
  f018851: 'dial, China, Deyang + Singapore', // * [/ip4/103.242.134.36/tcp/12288] failed to negotiate security protocol: EOF
  f018905: 'dial, Brazil, Sao Paulo', // * [/ip4/18.228.17.31/tcp/2347] dial tcp4 0.0.0.0:40877->18.228.17.31:2347: i/o timeout
  f018911: 'dial, USA, Portland', // * [/ip4/170.33.12.164/tcp/9090] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPMgigioxtnUsBqwBemuuxjZLKKpfhT3FmrWumyWDkQEd, but remote key matches 12D3KooWDkgbKexne42yFhovBdv7dEnZA4XpXYchEQpvEKpg2qTJ
  f019002: 'dial, USA', // * [/ip4/47.245.132.152/tcp/14567] dial tcp4 0.0.0.0:40877->47.245.132.152:14567: i/o timeout
  f019006: 'dial, Vietman, Ho Chi Minh City + China, Hong Kong', // * [/ip4/119.28.141.16/tcp/2312] dial tcp4 119.28.141.16:2312: connect: connection refused
  f019007: 'dial, China, Shenzhen + Hong Kong', // * [/ip4/154.91.38.15/tcp/51109] dial tcp4 154.91.38.15:51109: connect: connection refused  * [/ip4/103.44.247.132/tcp/51109] dial tcp4 103.44.247.132:51109: connect: connection refused
  f019015: 'dial, China, Hangzhou + Singapore', // * [/ip4/170.33.12.188/tcp/7087] dial tcp4 0.0.0.0:40877->170.33.12.188:7087: i/o timeout  * [/ip4/170.33.12.187/tcp/7087] dial tcp4 0.0.0.0:40877->170.33.12.187:7087: i/o timeout
  f019071: 'dial, USA, New York', // * [/ip4/45.61.255.21/tcp/12345] dial tcp4 0.0.0.0:40877->45.61.255.21:12345: i/o timeout
  f019091: 'dial, China, Chengdu', // * [/ip4/182.131.4.194/tcp/10080] dial tcp4 182.131.4.194:10080: connect: connection refused
  f019094: 'dial, Brazil, Sao Paulo', // * [/ip4/177.71.173.122/tcp/8888] dial tcp4 0.0.0.0:40877->177.71.173.122:8888: i/o timeout
  f019097: 'dial, Russia, Irkutsk', // * [/ip4/90.188.227.20/tcp/46717] dial tcp4 90.188.227.20:46717: connect: no route to host
  f019145: 'dial, Brazil, Sao Paulo', // * [/ip4/54.232.153.175/tcp/16088] dial tcp4 0.0.0.0:40877->54.232.153.175:16088: i/o timeout
  f019150: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 220.176.125.4:23450: i/o timeout
  f019155: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15110] dial tcp4 0.0.0.0:40877->101.206.156.204:15110: i/o timeout
  f019169: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.40.58/tcp/14567] dial tcp4 0.0.0.0:40877->15.228.40.58:14567: i/o timeout
  f019182: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15111] dial tcp4 0.0.0.0:40877->101.206.156.204:15111: i/o timeout
  f019185: 'dial, China, Beijing', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f019233: 'dial, Russia', // * [/ip4/158.255.7.196/tcp/46207] dial tcp4 0.0.0.0:40877->158.255.7.196:46207: i/o timeout
  f019248: 'dial, USA, Council Bluffs', // * [/ip4/35.239.142.4/tcp/46717] dial tcp4 0.0.0.0:40877->35.239.142.4:46717: i/o timeout
  f019249: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 35.224.87.15:24002: connect: connection refused
  f019280: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.4:23450: i/o timeout
  f019281: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:40877->45.192.184.195:23450: i/o timeout
  f019317: 'dial, Brazil, Sao Paulo', // * [/ip4/177.71.163.156/tcp/10240] dial tcp4 0.0.0.0:40877->177.71.163.156:10240: i/o timeout
  f019325: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15090] dial tcp4 0.0.0.0:40877->101.206.156.204:15090: i/o timeout
  f019326: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15093] dial tcp4 0.0.0.0:40877->101.206.156.204:15093: i/o timeout
  f019327: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15094] dial tcp4 0.0.0.0:40877->101.206.156.204:15094: i/o timeout
  f019352: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15095] dial tcp4 0.0.0.0:40877->101.206.156.204:15095: i/o timeout
  f019459: 'dial, USA, Alpharetta', // * [/ip4/45.26.152.112/tcp/4137] dial tcp4 45.26.152.112:4137: connect: connection refused
  f019462: 'dial, Netherlands, Groningen', // * [/ip4/34.90.112.11/tcp/46717] dial tcp4 0.0.0.0:40877->34.90.112.11:46717: i/o timeout
  f019515: 'dial, Netherlands, Groningen', // * [/ip4/35.204.3.95/tcp/46717] dial tcp4 0.0.0.0:40877->35.204.3.95:46717: i/o timeout
  f019523: 'dial, USA, Los Angeles', // * [/ip4/47.156.151.169/tcp/33505] dial tcp4 0.0.0.0:40877->47.156.151.169:33505: i/o timeout
  f019551: 'dial, UK', // * [/ip6/2a04:7340:0:1002::205/tcp/1347] dial tcp6 [2a04:7340:0:1002::205]:1347: connect: network is unreachable  * [/ip4/185.37.216.70/tcp/1347] dial tcp4 185.37.216.70:1347: connect: connection refused
  f019596: 'dial, USA, Queens', // * [/ip4/24.90.181.106/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJ7XhEorySoQkEyajCdcsr9qcesafyFqS8apNeWwF26Ke, but remote key matches 12D3KooWHcpqZ9Ps8cXHk2JaQVqAhjC7cPiLM14YKTmfAXT1LN3M
  f019637: 'dial, China, Nanchang', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.4:23450: i/o timeout
  f019660: 'dial, South Korea, Cheonan', // * [/ip4/112.167.204.88/tcp/10241] dial tcp4 112.167.204.88:10241: connect: connection refused
  f019710: 'dial, Australia, Sydney', // * [/ip4/13.55.45.217/tcp/27002] dial tcp4 0.0.0.0:40877->13.55.45.217:27002: i/o timeout
  f019779: 'dial, China, Xuancheng', // * [/ip4/117.71.104.68/tcp/10000] dial tcp4 117.71.104.68:10000: connect: connection refused
  f020331: 'dial, USA', // * [/ip4/10.10.11.81/tcp/14567] dial tcp4 10.10.11.81:14567: i/o timeout
  f020358: 'dial, China, Xinxiang', // * [/ip4/27.50.142.73/tcp/1347] dial tcp4 27.50.142.73:1347: connect: connection refused
  f020401: 'dial, USA, Raleigh', // * [/ip4/136.56.12.204/tcp/27972] dial tcp4 136.56.12.204:27972: i/o timeout
  f020452: 'dial, China, Hangzhou + Singapore', // * [/ip4/170.33.12.186/tcp/17012] dial tcp4 0.0.0.0:40877->170.33.12.186:17012: i/o timeout
  f020572: 'dial, China, Nanchang', // * [/ip4/220.176.125.123/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.123:23450: i/o timeout
  f020622: 'dial, China, Hong Kong', // * [/ip4/43.228.183.102/tcp/40573] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHF5unBQ9CuS2jnnxCzvRHGiMMQbH487tbfoGUAvhY4ik, but remote key matches 12D3KooWQzhuFoqWfap5FT3hD9jTSc1wiP3Sn735mstACYiPuw75
  f020626: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:40877->73.158.16.48:30390: i/o timeout
  f020771: 'dial, Japan, Setagaya-ku', // * [/ip4/59.138.253.69/tcp/55555] dial tcp4 59.138.253.69:55555: connect: connection refused
  f020814: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/11051] dial tcp4 183.63.203.161:11051: i/o timeout
  f020816: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/11052] dial tcp4 183.63.203.161:11052: i/o timeout
  f020891: 'dial, China, Wenzhou', // * [/ip4/122.228.196.208/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSitZhuvzGB9mxZvC1rN6ubezTJUrHV2nXxWaBvJQ1Bji, but remote key matches 12D3KooWDLC4HXzHjaMegLssFx9HwMmyNzhGc4XmcSSP9rZaSFyv
  f020967: 'dial, China, Chengdu', // * [/ip4/171.221.236.129/tcp/45001] dial tcp4 171.221.236.129:45001: i/o timeout
  f021075: 'dial, China, Chengdu', // * [/ip4/182.148.14.72/tcp/36545] dial tcp4 0.0.0.0:40877->182.148.14.72:36545: i/o timeout
  f021142: 'dial, China, Fuzhou', // * [/ip4/220.176.125.110/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.110:23450: i/o timeout
  f021292: 'dial, China, Hong Kong', // * [/ip4/43.228.183.102/tcp/40573] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKztv937mFfnZpXpHnJP7DFTSMeeJrwjktcs5oSvNmfPN, but remote key matches 12D3KooWQzhuFoqWfap5FT3hD9jTSc1wiP3Sn735mstACYiPuw75
  f021428: 'dial, Norway, Borgen', // * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAgRs1gYFCWPQopKBh3nZPDfq3yJ7gjyvvmd9dpyw7mHH, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f021461: 'dial, China, Yangzhou + Singapore', // * [/ip4/170.33.12.186/tcp/17361] dial tcp4 0.0.0.0:40877->170.33.12.186:17361: i/o timeout
  f021463: 'dial, China, Mianyang', // * [/ip4/117.175.0.194/tcp/18181] dial tcp4 0.0.0.0:40877->117.175.0.194:18181: i/o timeout
  f021475: 'dial, China, Dongguan', // * [/ip4/183.240.203.136/tcp/34567] dial tcp4 183.240.203.136:34567: connect: connection refused
  f021483: 'dial, China, Beijing', // * [/ip4/124.250.42.202/tcp/24567] dial tcp4 124.250.42.202:24567: connect: connection refused
  f021547: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17329] dial tcp4 0.0.0.0:40877->170.33.12.186:17329: i/o timeout  * [/ip4/192.168.3.29/tcp/7000] dial tcp4 0.0.0.0:40877->192.168.3.29:7000: i/o timeout
  f021644: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:40877->73.158.16.48:30390: i/o timeout
  f021961: 'dial, NR', // * [/ip4/110.80.136.19/tcp/7000] dial tcp4 0.0.0.0:40877->110.80.136.19:7000: i/o timeout  * [/ip4/192.168.1.13/tcp/7000] dial tcp4 0.0.0.0:40877->192.168.1.13:7000: i/o timeout
  f022031: 'dial, China, Maoming', // * [/ip4/61.143.232.26/tcp/12345] dial tcp4 61.143.232.26:12345: connect: connection refused
  f022069: 'dial, China, Hong Kong', // * [/ip4/221.127.8.183/tcp/24001] dial tcp4 0.0.0.0:40877->221.127.8.183:24001: i/o timeout
  f022111: 'dial, China, Quanzhou', // * [/ip4/112.47.13.98/tcp/8081] dial tcp4 112.47.13.98:8081: connect: connection refused
  f022144: 'dial, China, Fuzhou', // * [/ip4/220.176.125.110/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.110:23450: i/o timeout
  f022146: 'dial, China, Fuzhou', // * [/ip4/220.176.125.123/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.123:23450: i/o timeout
  f022157: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:40877->220.176.125.5:23450: i/o timeout
  f022166: 'dial, Norway, Borgen', // * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLsZ4PQtpyZQpEfXvheZHgirJe7bQmse7brRndyaWs3Jh, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f022227: 'dial, China, Jiangsu', // * [/ip4/112.30.158.226/tcp/10240] dial tcp4 112.30.158.226:10240: connect: connection refused
  f022304: 'dial, China, Taiyuan', // * [/ip4/221.204.177.81/tcp/2222] dial tcp4 221.204.177.81:2222: connect: connection refused
  f022320: 'dial, Korea, Seoul', // * [/ip4/220.119.37.150/tcp/24001] dial tcp4 0.0.0.0:40877->220.119.37.150:24001: i/o timeout
  f022351: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.97/tcp/24001] dial tcp4 211.114.218.97:24001: connect: connection refused
  f022364: 'dial, Korea, Jungang-gu', // * [/ip4/125.129.37.73/tcp/10241] dial tcp4 0.0.0.0:40877->125.129.37.73:10241: i/o timeout
  f022405: 'dial, Russia', // * [/ip4/158.255.7.196/tcp/46175] dial tcp4 0.0.0.0:40877->158.255.7.196:46175: i/o timeout
  f022518: 'dial, DNS:poseidon.technology', // * [/ip4/36.226.65.178/tcp/24000] dial tcp4 36.226.65.178:24000: connect: connection refused
  f022687: 'dial, China, Chengdu', // * [/ip4/182.131.4.194/tcp/10080] dial tcp4 182.131.4.194:10080: connect: connection refused
  f022737: 'dial, Korea, Gangnum-gu', // * [/ip4/112.216.168.43/tcp/20000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPDeMQg1GK1w8NAnaPS2Pq3DytpW2DZtvQQKA9UheEWAT, but remote key matches 12D3KooWPBwquKY3asxootDXttSQfAUrvotFvv8suATHk2NtRNK6
  f022780: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.98/tcp/24001] dial tcp4 211.114.218.98:24001: connect: connection refused
  f022787: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.99/tcp/24001] dial tcp4 211.114.218.99:24001: connect: connection refused
  f022913: 'dial, Korea, Uiwang', // * [/ip4/211.170.25.239/tcp/8888] dial tcp4 211.170.25.239:8888: connect: connection refused
  f022967: 'dial, Korea, Seoul', // * [/ip4/218.144.46.55/tcp/24001] dial tcp4 218.144.46.55:24001: connect: connection refused
  f023016: 'dial, NR', // * [/ip4/10.6.1.121/tcp/61121] dial tcp4 0.0.0.0:40877->10.6.1.121:61121: i/o timeout
  f023181: 'dial, DNS:poseidon.technology', // * [/ip4/140.113.194.250/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWL42QpczhsrHfWGC3L38LFac8vfibWfub8ELohMA1ZjjC, but remote key matches 12D3KooWPcST189CRdZ2BLrE5NhFz2YQwcfCWdabj12FWwVNBjYj
  f023190: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 36.33.216.70:10240: i/o timeout
  f023202: 'dial, China, Wuxi', // * [/ip4/58.215.232.74/tcp/10200] dial tcp4 58.215.232.74:10200: connect: connection refused  * [/ip4/192.168.1.18/tcp/1020] dial tcp4 0.0.0.0:40877->192.168.1.18:1020: i/o timeout
  f023205: 'dial, NR', // * [/ip4/10.10.33.154/tcp/14567] dial tcp4 10.10.33.154:14567: i/o timeout
  f023219: 'dial, NR', // * [/ip4/116.132.221.24/tcp/42990] dial tcp4 116.132.221.24:42990: connect: connection refused
  f023229: 'dial, China, Shandong', // * [/ip4/106.74.192.3/tcp/36980] dial tcp4 0.0.0.0:40877->106.74.192.3:36980: i/o timeout
  f023467: 'dial, Norway, Oslo', // * [/ip6/::/tcp/37374] dial tcp6 [::]:37374: connect: connection refused  * [/ip4/151.252.13.190/tcp/37374] dial tcp4 0.0.0.0:40877->151.252.13.190:37374: i/o timeout
  f023549: 'dial, China, Zhejiang', // * [/ip4/47.102.202.230/tcp/5472] dial tcp4 47.102.202.230:5472: connect: connection refused
  f023583: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.120/tcp/24001] dial tcp4 211.114.218.120:24001: connect: connection refused
  f023655: 'dial, Australia, Brisbane', // * [/ip4/144.137.18.224/tcp/54321] dial tcp4 144.137.18.224:54321: connect: connection refused
  f023674: 'dial, China, Fuzhou', // * [/ip4/220.176.125.99/tcp/23450] dial tcp4 220.176.125.99:23450: connect: connection refused
  f023868: 'dial, China, Fuzhou', // * [/ip4/220.176.125.53/tcp/23450] dial tcp4 220.176.125.53:23450: connect: connection refused
  f023870: 'dial, China, Fuzhou', // * [/ip4/220.176.125.55/tcp/23450] dial tcp4 220.176.125.55:23450: connect: connection refused
  f023937: 'dial, China, Fuzhou', // * [/ip4/220.176.125.99/tcp/23450] dial tcp4 220.176.125.99:23450: connect: connection refused
  f024070: 'dial, Japan, Setagaya-ku', // * [/ip4/59.138.253.69/tcp/55555] dial tcp4 59.138.253.69:55555: connect: connection refused
  f024108: 'dial, Korea', // * [/ip4/59.23.202.120/tcp/23234] dial tcp4 59.23.202.120:23234: connect: connection refused
  f024137: 'dial, NR', // * [/ip4/10.10.33.182/tcp/14567] dial tcp4 0.0.0.0:40877->10.10.33.182:14567: i/o timeout
  f024150: 'dial, UK, Mansfield', // * [/ip4/37.249.6.148/tcp/24002] dial tcp4 0.0.0.0:40877->37.249.6.148:24002: i/o timeout
  f024182: 'dial, NR', // * [/ip4/14.136.246.135/tcp/46717] dial tcp4 0.0.0.0:40877->14.136.246.135:46717: i/o timeout
  f024190: 'dial, China, Wenzhou', // * [/ip4/122.228.196.208/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQHPkEDKyJHgsVzg8t8WA59AuGYbazD2hDMktKJHBJVc6, but remote key matches 12D3KooWDLC4HXzHjaMegLssFx9HwMmyNzhGc4XmcSSP9rZaSFyv
  f024511: 'dial, NR', // * [/ip4/103.44.247.137/tcp/51105] dial tcp4 0.0.0.0:40877->103.44.247.137:51105: i/o timeout
  f024565: 'dial, Korea, Incheon', // * [/ip4/52.78.230.89/tcp/46469] dial tcp4 52.78.230.89:46469: connect: connection refused
  f024985: 'dial, China, Shenzhen', // * [/ip4/192.168.0.175/tcp/3000] dial tcp4 0.0.0.0:40877->192.168.0.175:3000: i/o timeout
  f025008: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.34/tcp/10241] dial tcp4 59.6.127.34:10241: connect: connection refused
  f029344: 'dial, Korea, Seongnam-si', // * [/ip4/221.163.91.162/tcp/33230] dial tcp4 0.0.0.0:40877->221.163.91.162:33230: i/o timeout

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
  f08311: 'xnr, China, Shenzhen',
  f08319: 'xnr, NR',
  f08322: 'xnr, China, Chongqing',
  f08327: 'xnr, NR',
  f08349: 'xnr, China, Guangzhou, hkicloud',
  f08361: 'xnr, Malaysia, Kulai',
  f08385: 'xnr, NR',
  f08388: 'xnr, China, Taizhou',
  f08390: 'xnr, China, Shenzhen',
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
  f09076: 'xnr, NR',
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
  f010305: 'xnr, NR',
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
  f010566: 'xnr, NR',
  f010602: 'xnr, China, Guangdong',
  f014207: 'xnr, USA',
  f014271: 'xnr, China, Fuzhou',
  f014331: 'xnr, China, Chongqing',
  f014335: 'xnr, NR',
  f014354: 'xnr, USA, Concord',
  f014366: 'xnr, USA, Mountain View',
  f014388: 'xnr, China, Guangdong',
  f014389: 'xnr, China, Chongqing',
  f014407: 'xnr, China, Shanghai',
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
  f014708: 'xnr, China, Beijing',
  f014745: 'xnr, China, Shenyang',
  f014749: 'xnr, China, Chongqing',
  f014764: 'xnr, Korea, Wanju',
  f014799: 'xnr, China, Chongqing',
  f014803: 'xnr, China, Beijing',
  f015061: 'xnr, Australia, Sydney',
  f015870: 'xnr, China, Hangzhou',
  f015875: 'xnr, China, Fuzhou',
  f015891: 'xnr, China, Shanghai',
  f015920: 'xnr, China, Guangdong',
  f015932: 'xnr, NR',
  f015935: 'xnr, China, Sichuan',
  f015940: 'xnr, Netherlands, Amsterdam',
  f016162: 'xnr, France, Borgo',
  f016203: 'xnr, China, Chengdu',
  f016228: 'xnr, China, Chengdu',
  f016271: 'xnr, Korea, Seodaemun-gu',
  f016276: 'xnr, China, Beijing',
  f016299: 'xnr, China, Shanghai',
  f016303: 'xnr, USA, Boardman',
  f016304: 'xnr, USA, Boardman',
  f016306: 'xnr, USA, Boardman',
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
  f017236: 'xnr, NR',
  f017251: 'xnr, USA',
  f017334: 'xnr, China, Fuzhou',
  f017618: 'xnr, Korea, Wanju',
  f017628: 'xnr, Brazil, Sao Paulo',
  f017655: 'xnr, NR',
  f017722: 'xnr, NR',
  f017747: 'xnr, NR',
  f018164: 'xnr, USA, Howell',
  f018311: "xnr, China, Xi'an, <23h",
  f018369: 'xnr, NR',
  f018397: 'xnr, USA, Howell',
  f018437: 'xnr, NR',
  f018445: 'xnr, NR',
  f018446: 'xnr, China, Dongguan',
  f018484: 'xnr, China, Shanghai',
  f018490: 'xnr, Korea, Hwaseong-si',
  f018517: 'xnr, USA, Columbus',
  f018518: "xnr, China, Xi'an",
  f018537: 'xnr, China, Shaanxi',
  f018538: 'xnr, China, Huzhou',
  f018542: 'xnr, China, Chongqing',
  f018754: 'xnr, China, Dali',
  f018761: 'xnr, Russia, St. Petersburg',
  f018836: 'xnr, NR',
  f018837: 'xnr, China, Shaanxi',
  f018864: 'xnr, Korea, Busan',
  f018869: 'xnr, NR',
  f018879: 'xnr, Korea, Geumcheon-gu',
  f019031: 'xnr, NR',
  f019069: 'xnr, NR',
  f019123: 'xnr, China, Dongguan',
  f019160: 'xnr, USA, Fremont',
  f019173: 'xnr, China, Nanchong',
  f019184: 'xnr, China, Yibin',
  f019239: 'xnr, China, Jiaxing',
  f019284: 'xnr, China, Foshan',
  f019378: 'xnr, China, Changzhou',
  f019401: 'xnr, Brazil, Sao Paulo',
  f019423: 'xnr, South Africa, Johannesburg',
  f019525: 'xnr, USA, Berkeley',
  f019528: 'xnr, Peru',
  f019547: 'xnr, Peru',
  f019734: 'xnr, NR',
  f019806: 'xnr, China, Beijing',
  f020241: 'xnr, NR',
  f020260: 'xnr, NR',
  f020276: 'xnr, China, Xiamen',
  f020366: 'xnr, China, Chengdu',
  f020369: 'xnr, NR',
  f020379: 'xnr, NR',
  f020433: 'xnr, NR',
  f020439: 'xnr, China, Chengdu',
  f020450: 'xnr, NR',
  f020451: 'xnr, NR',
  f020525: 'xnr, China, Dongguan',
  f020563: 'xnr, China, Dongguan',
  f020641: 'xnr, NR',
  f020682: 'xnr, NR',
  f020683: 'xnr, China, Changsha',
  f020763: 'xnr, China, Luzhou',
  f020786: 'xnr, China, Shenzhen',
  f020789: 'xnr, NR',
  f020822: 'xnr, China, Shanghai',
  f020914: 'xnr, NR',
  f020939: 'xnr, NR',
  f020961: 'xnr, China, Shanghai',
  f021095: 'xnr, NR',
  f021286: 'xnr, China, Shaanxi',
  f021307: 'xnr, China, Chengdu',
  f021500: 'xnr, NR',
  f021504: 'xnr, NR',
  f021505: 'xnr, NR',
  f021536: 'xnr, NR',
  f021684: 'xnr, NR',
  f021725: 'xnr, NR',
  f022038: 'xnr, NR',
  f022084: 'xnr, China, Shaanxi',
  f022091: 'xnr, NR',
  f022093: 'xnr, NR',
  f022108: 'xnr, China, Luzhou',
  f022171: 'xnr, China, Shanghai',
  f022262: 'xnr, China, Hong Kong',
  f022284: 'xnr, China, Shaanxi',
  f022321: 'xnr, China, Hong Kong',
  f022361: 'xnr, NR',
  f022501: 'xnr, Japan, Osaka',
  f022503: 'xnr, NR',
  f022505: 'xnr, China, Shanghai',
  f022562: 'xnr, NR',
  f022748: 'xnr, China, Xinyang',
  f022776: 'xnr, Korea, Guri-si',
  f022790: 'xnr, China, Luzhou',
  f022791: 'xnr, NR',
  f022804: 'xnr, China, Yibin',
  f022834: 'xnr, NR',
  f022906: 'xnr, NR',
  f022926: 'xnr, NR',
  f022970: 'xnr, NR',
  f023021: 'xnr, Korea, Yeongdeungpo-dong',
  f023108: 'xnr, China, Dongguan',
  f023198: 'xnr, NR',
  f023210: 'xnr, China, Dongguan',
  f023482: 'xnr, NR',
  f023499: 'xnr, NR',
  f023535: 'xnr, China, Hong Kong',
  f023581: 'xnr, China, Hong Kong',
  f023643: 'xnr, NR',
  f023661: 'xnr, China, Zhejiang',
  f023801: 'xnr, China, Dongguan',
  f024074: 'xnr, NR',
  f024089: 'xnr, NR',
  f024483: 'xnr, NR',
  f024558: 'xnr, NR',
  f024563: 'xnr, NR',
  f024895: 'xnr, NR'
}

export default annotations
