// Small file test results
//
// Additional testing will be performed with larger files with
// selected miners

const annotations = {
  // Active

  f01238: 'active, Vietnam, Hanoi, FILECOIN-VIETNAM', // about 8 hours
  f01272: 'active, Singapore', // about 6 hours
  f01279: 'active, China, Sichuan', // about 13 hours
  f01799: 'active, China, Jinan, TokenHome', // about 13 hours
  f02301: 'active, USA', // about 8 hours
  f02415: 'active, China, Hong Kong', // about 7 hours
  f02490: 'active, China, Fujian', // about 7 hours
  f02492: 'active, China, Shenzhen', // about 7 hours
  f02501: 'active, USA, Portland, 6block', // about 6 hours
  f02514: 'active, USA, Portland, 6block', // about 5 hours
  f02622: 'active, USA, Portland, 6block', // about 7 hours
  f02633: 'active, China, Hong Kong', // about 9 hours
  f02645: 'active, China, Hong Kong', // about 7 hours
  f03143: 'active, China, Shijiazhuang + Hong Kong', // about 8 hours
  f03176: 'active, USA, San Mateo, Five Star-Helmsman&Heiben', // about 13 hours
  f03273: 'active, USA, Portland, 6block', // about 8 hours
  f03274: 'active, USA, Portland, 6block', // about 7 hours
  f03275: 'active, USA, Portland, 6block', // about 7 hours
  f03339: 'active, China, Luzhou, benxun', // about 8 hours
  f03363: 'active, Singapore', // about 10 hours
  f03491: 'active, China, Hong Kong', // about 7 hours
  f05315: 'active, USA, Portland, 6block', // about 13 hours
  f05316: 'active, USA, Portland, 6block', // about 6 hours
  f05317: 'active, USA, Portland', // about 7 hours
  f07824: 'active, China, Shanghai', // about 13 hours
  f07850: 'active, USA, Portland, 6block', // about 7 hours
  f07919: 'active, China, Beijing, Shanghai, Hunan', // about 6 hours
  f07990: 'active, China, Hong Kong', // about 7 hours
  f08025: 'active, China, Hong Kong', // about 9 hours
  f08285: 'active, Latvia, Riga, stander', // about 13 hours
  f08383: 'active, USA, Portland, 6block', // about 7 hours
  f09693: 'active, USA, Portland + Singapore', // about 6 hours
  f09696: 'active, USA, Portland + Singapore', // about 7 hours
  f010084: 'active, China, Beijing', // about 13 hours
  f010241: 'active, China, Beijing + USA, Portland', // about 7 hours
  f010247: 'active, China, Yantai', // about 13 hours
  f010253: 'active, China, Beijing + USA, Portland', // about 6 hours
  f010400: 'active, China, Shenyang', // about 9 hours
  f010479: 'active, France, Fontenay-sous-Bois', // about 9 hours
  f010507: 'active, China, Hangzhou', // about 13 hours
  f018780: 'active, Singapore + Germany, Frankfurt + USA', // about 7 hours
  f018781: 'active, Singapore + Germany, Frankfurt + USA', // about 7 hours
  f018782: 'active, Singapore + Germany, Frankfurt + USA', // about 7 hours
  f018783: 'active, Singapore + Germany, Frankfurt + USA', // about 7 hours
  f018784: 'active, Singapore + Germany, Frankfurt + USA', // about 8 hours
  f018785: 'active, Singapore + Germany, Frankfurt + USA', // about 7 hours
  f019022: "active, China, Xi'an", // about 8 hours
  f019240: 'active, China, Beijing', // about 9 hours
  f019437: 'active, Korea, Guro-gu', // about 9 hours
  f019638: 'active, Germany, Frankfurt', // about 8 hours
  f020928: 'active, China, Deyang + Singapore', // about 7 hours
  f021255: 'active, China, Suzhou + Netherlands', // about 9 hours
  f021316: 'active, China, Yangzhou', // about 7 hours
  f021710: 'active, China, Shijiazhuang', // about 8 hours
  f023200: 'active, China, Shanghai', // about 13 hours
  f023495: 'active, China, Beijing + USA, Portland', // about 13 hours
  f023526: 'active, China, Chongqing', // about 10 hours
  f023647: 'active, Korea, Gangseo-gu', // about 9 hours
  f023649: 'active, Korea, Seoul', // about 13 hours
  f023825: 'active, USA, Portland', // about 6 hours
  f024015: 'active, USA, Portland', // about 6 hours
  f024016: 'active, USA, Portland', // about 6 hours

  // Active-sealing (active, with in-flight sealing)

  // Sealing

  f01152: 'sealing, China, Beijing',
  f01234: 'sealing, Belgium, De Klinge, Eliovp',
  f01241: 'sealing, USA, Portland, 6block',
  f01287: 'sealing, China, Jiaxing, MaiTian',
  f01800: 'sealing, China, Shenzhen + Chengdu',
  f02299: 'sealing, China, Dongguan, Yolo',
  f02305: 'sealing, China, Dongguan',
  f02381: 'sealing, China, Dongguan, 西野七濑迷叔',
  f02387: 'sealing, Canada, Brampton, NBFS Canada',
  f02399: 'sealing, China, Zhejiang',
  f02401: 'sealing, Canada, Chambly, NBFS Canada',
  f02405: 'sealing, China, Shenzhen',
  f02623: 'sealing, USA, Portland, 6block',
  f02625: 'sealing, China, Shanghai, IPFS星际工厂',
  f02654: 'sealing, China, Shanghai',
  f02668: 'sealing, China, Chengdu',
  f03131: 'sealing, China, Changsha',
  f03134: 'sealing, China, Cangzhou, 乔木信息',
  f03223: 'sealing, USA',
  f03264: 'sealing, Korea, Bucheon-si',
  f03302: 'sealing, China, Chengdu',
  f03340: "sealing, China, Xi'an",
  f03482: 'sealing, China, Wuxi',
  f03512: 'sealing, New Zealand, Auckland, NZFILECOIN01',
  f03544: 'sealing, China, Guiyang',
  f04443: 'sealing, China, Shanghai, 罗良科技',
  f05664: 'sealing, China, Shenzhen, 艾比特网络科技',
  f08019: 'sealing, China, Yantai, 三合',
  f08157: 'sealing, China, Beijing + Germany, Frankfurt, 超星际',
  f08220: 'sealing, China, Shenzhen',
  f08311: 'sealing, China, Shenzhen',
  f08371: 'sealing, China, Chengdu',
  f08403: 'sealing, UK, Lower Slaughter',
  f08474: 'sealing, China, Hong Kong',
  f08482: 'sealing, USA, Athol, @why',
  f09675: 'sealing, China, Weifang',
  f09770: "sealing, China, Xi'an",
  f09833: 'sealing, USA, San Jose',
  f010088: 'sealing, DNS:purumine.com',
  f010257: 'sealing, China, Hong Kong, DNS:feiyuipfs.com',
  f010446: 'sealing, Netherlands',
  f010501: 'sealing, China, Hangzhou',
  f010505: 'sealing, China, Wuhan',
  f010512: 'sealing, China, Zhengzhou',
  f010513: 'sealing, China, Chongqing',
  f014324: 'sealing, Canada, Vancouver',
  f014768: 'sealing, Singapore',
  f015233: 'sealing, China, Nanjing',
  f015747: 'sealing, Japan, Setagaya-ku',
  f015877: 'sealing, China, Jiaxing + USA',
  f015897: 'sealing, China, Guangdong',
  f016482: 'sealing, USA, Aliquippa',
  f017734: 'sealing, Australia, Sydney',
  f018772: 'sealing, Australia',
  f019041: 'sealing, Singapore',
  f019074: 'sealing, China, Guangdong',
  f019090: 'sealing, South Africa, Johannesburg',
  f019099: 'sealing, China, Hong Kong',
  f019100: 'sealing, Romania, Cluj-Napoca',
  f019104: 'sealing, Canada, Chambly',
  f019118: 'sealing, China, Jiaxing',
  f019243: 'sealing, USA, Jackson',
  f019354: 'sealing, Germany, Frankfurt',
  f020398: 'sealing, China, Zhangjiakou',
  f020605: 'sealing, China, Yibin',
  f020742: 'sealing, China, Shanghai + Hangzhou + Shaoxing',
  f021262: 'sealing, China, Shanghai',
  f021339: 'sealing, China, Jiaxing',
  f021444: 'sealing, China, Guangzhou',
  f021540: 'sealing, Germany, Frankfurt, @hsanjuan',
  f021583: 'sealing, China, Jiaxing',
  f022070: 'sealing, China, Jieyang',
  f022227: 'sealing, China, Jiangsu',
  f022261: 'sealing, China, Luzhou',
  f022376: 'sealing, China, Dongguan',
  f022517: 'sealing, China, Taiwan, Taipei',
  f022753: 'sealing, China, Hong Kong',
  f022820: 'sealing, China, Guangdong',
  f022836: 'sealing, China, Chongqing',
  f022841: 'sealing, China, Zhongshan',
  f022969: 'sealing, China, Chengdu',
  f023108: 'sealing, China, Dongguan',
  f023179: 'sealing, China, Fuzhou',
  f023571: 'sealing, NR',
  f023583: 'sealing, Korea, Guri-si',
  f023939: 'sealing, NR',
  f023986: 'sealing, Korea, Seoul',
  f024025: 'sealing, China, Chengdu',
  f024070: 'sealing, Japan, Setagaya-ku',
  f024150: 'sealing, UK, Mansfield',
  f024184: 'sealing, Korea, Gangnam-gu',
  f024468: 'sealing, China, Shenzhen',
  f024521: 'sealing, Korea, Gyeonggi-do',

  // Stuck

  f02416: 'stuck, China, Guangdong, 星际无限', // CheckForAcceptance: about 14 hours
  f02627: 'stuck, China, Guilin', // FundsEnsured: about 13 hours
  f03222: 'stuck, China, Yuncheong, 星云矿池', // CheckForAcceptance: about 13 hours
  f03347: 'stuck, China, Shenzhen', // CheckForAcceptance: about 14 hours
  f08204: 'stuck, USA, St. Louis', // CheckForAcceptance: about 14 hours
  f08346: 'stuck, Korea', // CheckForAcceptance: about 14 hours
  f014386: 'stuck, Singapore', // CheckForAcceptance: about 13 hours
  f015647: 'stuck, China, Shenzhen', // CheckForAcceptance: about 14 hours
  f015751: 'stuck, Canada, Huron East', // CheckForAcceptance: about 14 hours
  f015771: 'stuck, Brazil, Sao Paulo', // FundsEnsured: about 13 hours
  f015927: 'stuck, USA, East Islip', // CheckForAcceptance: about 14 hours
  f016511: 'stuck, China, Beijing', // FundsEnsured: about 13 hours
  f017794: 'stuck, USA, Columbus', // FundsEnsured: about 13 hours
  f018884: 'stuck, Russia', // FundsEnsured: about 13 hours
  f019024: 'stuck, China, Sichuan', // CheckForAcceptance: about 14 hours
  f019114: 'stuck, USA, Howell', // CheckForAcceptance: about 14 hours
  f019362: 'stuck, China, Hangzhou', // CheckForAcceptance: about 13 hours
  f019645: 'stuck, Russia, St. Petersburg', // FundsEnsured: about 13 hours
  f019820: 'stuck, Germany', // FundsEnsured: about 13 hours
  f020523: 'stuck, China, Suzhou', // CheckForAcceptance: about 14 hours
  f020993: 'stuck, China, Hong Kong', // FundsEnsured: about 13 hours
  f021265: 'stuck, China, Wuhan', // CheckForAcceptance: about 13 hours
  f021536: 'stuck, NR', // CheckForAcceptance: about 13 hours
  f022202: 'stuck, USA, Howell', // CheckForAcceptance: about 13 hours
  f022395: 'stuck, USA, Los Angeles', // CheckForAcceptance: about 13 hours
  f022512: 'stuck, Canada, Embrun', // CheckForAcceptance: about 14 hours
  f022755: 'stuck, China, Shenzhen', // CheckForAcceptance: about 14 hours
  f022922: 'stuck, China, Shenzhen', // CheckForAcceptance: about 14 hours
  f023518: 'stuck, China, Taiyuan', // CheckForAcceptance: about 14 hours
  f023643: 'stuck, NR', // CheckForAcceptance: about 13 hours
  f023826: 'stuck, USA, Germantown', // CheckForAcceptance: about 13 hours
  f023971: 'stuck, USA, @Brian Y', // CheckForAcceptance: about 14 hours
  f024130: 'stuck, Korea', // CheckForAcceptance: about 14 hours

  // Busy

  // New

  f022163: 'new, NR',
  f023983: 'new, China, Chongqing',
  f023984: 'new, China, Chongqing',
  f023985: 'new, China, Chongqing',
  f024182: 'new, NR',
  f024496: 'new, China, Dongguan',
  f024550: 'new, China, Wenzhou',
  f024556: 'new, NR',
  f024558: 'new, NR',

  // Min Size

  f01240: 'min-size, Netherlands, HidNand', // 131072 < 134217728
  f02388: 'min-size, Netherlands, Amersfoort, Kroketje', // 131072 < 134217728
  f02417: 'min-size, China, Liaoning', // 131072 < 134217728
  f02419: 'min-size, China, Shanghai, yuantai', // 131072 < 134217728
  f02423: 'min-size, Ukraine, Kyiv, igowreck', // 131072 < 134217728
  f02500: 'min-size, Korea, Seongnam-si', // 131072 < 134217728
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 131072 < 943718400
  f02619: 'min-size, China, Beijing, Blockcasting', // 131072 < 134217728
  f03224: 'min-size, Ukraine, Irpin, oboltusov', // 131072 < 134217728
  f03328: 'min-size, China, Xinxiang', // 131072 < 134217728
  f07982: 'min-size, China, Shenzhen', // 131072 < 134217728
  f08264: 'min-size, China, Xianning', // 131072 < 134217728
  f09848: 'min-size, USA', // 131072 < 134217728
  f010438: 'min-size, USA', // 131072 < 134217728
  f014394: 'min-size, China, Suzhou', // 131072 < 134217728
  f014409: 'min-size, USA, Waxhaw', // 131072 < 1073741824
  f016594: 'min-size, Germany', // 131072 < 134217728
  f018501: 'min-size, China, Beijing', // 131072 < 134217728
  f020361: 'min-size, Colombia, Medellin', // 131072 < 134217728
  f020489: 'min-size, China, Lioaning', // 131072 < 134217728
  f021075: 'min-size, China, Chengdu', // 131072 < 134217728
  f021870: 'min-size, USA, Portland', // 131072 < 134217728
  f022855: 'min-size, Finland, Helsinki', // 131072 < 134217728
  f023229: 'min-size, China, Shandong', // 131072 < 134217728
  f023581: 'min-size, China, Hong Kong', // 131072 < 134217728
  f023678: 'min-size, China, Jiaxing', // 131072 < 134217728
  f024101: 'min-size, China, Guiyang', // 131072 < 1048576

  // Min Ask

  f01278: 'min-ask, USA, Grand Rapids, MiMiner', // 20000000 < 1220703125
  f02620: 'min-ask, Poland, Krakow, @magik6k', // 20000000 < 114746093
  f023013: 'min-ask, China, Hong Kong', // 20000000 < 24414062

  // Error

  f01247: 'error, Canada, Montreal, BigChungus™', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 2.505045049591121939 FIL, balance: 2.406283655736804121 FIL): validation failure
  f01276: 'error, Canada, Brampton, NBFS Canada', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f02540: 'error, USA, Rochester', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 2.205578138740989023 FIL, balance: 2.118026249139897479 FIL): validation failure
  f02665: 'error, Netherlands, Amsterdam, fm-ops', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f02772: 'error, China, Chengdu', // stream reset
  f03002: 'error, China, Chongqing', // stream reset
  f03364: 'error, China, Guangzhou', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.09999999997736108 FIL, balance: 0.044288846063250016 FIL): not enough funds to execute transaction
  f03624: 'error, Germany, Chemnitz, ode', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.09999999997760752 FIL, balance: 0.077243430189113819 FIL): not enough funds to execute transaction
  f07806: 'error, China, Wuhan, HelloXP', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.0303030302917932 FIL, balance: 0.017488223886837071 FIL): not enough funds to execute transaction
  f07819: 'error, China, Wuxi, YC--wuxi', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 1.532998128399864286 FIL, balance: 1.444134058926145448 FIL): validation failure
  f07987: 'error, China, Beijing', // stream reset
  f07998: 'error, China, Hangzhou', // AddPiece failed: adding piece to sector: writing piece: pieceCid error: generating piece commitment: failed to build treeCaused by:    0: failed to populate data    1: No space left on device (os error 28)
  f08073: 'error, China, Qiqihar, QY7TT', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 4.22230979535929363 FIL, balance: 4.199234281678166071 FIL): validation failure
  f08091: 'error, USA', // AddPiece failed: adding piece to sector: writing piece: acquire unsealed sector: local acquire error: couldn't find a suitable path for a sector
  f08094: 'error, China, Guangzhou, dongshao', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.099999999957305825 FIL, balance: 0.044733607045765552 FIL): not enough funds to execute transaction
  f08203: 'error, Germany, Frankfurt', // stream reset
  f08240: 'error, Russia, Novosibirsk, Rabinovitch', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f08532: 'error, USA', // deal failed: (State=26) error calling node: publishing deal: GasEstimateMessageGas error: estimating gas used: message execution failed: exit SysErrSenderStateInvalid(2), reason: actor balance less than needed: 0 FIL < 0.00000101 FIL (RetCode=2)
  f08854: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 1.083729694812742637 FIL, balance: 1.009093139418046558 FIL): validation failure
  f09002: 'error, Singapore', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.099999999960074424 FIL, balance: 0.011219195830517241 FIL): not enough funds to execute transaction
  f09569: 'error, China, Beijing', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 2.493759637956054826 FIL, balance: 2.394012631262358916 FIL): validation failure
  f09597: 'error, China, Shanghai', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f09639: 'error, China, Fuzhou', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999963383005 FIL, balance: 0.015032977828835632 FIL): not enough funds to execute transaction
  f09731: 'error, China, Guiyang', // stream reset
  f010048: 'error, China, Shanghai', // stream reset
  f010399: 'error, China, Guangzhou', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 3.113999999587670624 FIL, balance: 3.079975804003816336 FIL): validation failure
  f010491: 'error, China, Shenzhen', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f010493: 'error, China, Shanghai', // stream reset
  f010498: 'error, China, Shenzhen', // stream reset
  f010523: 'error, China, Beijing', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 32.987240012543597515 FIL, balance: 32.956926609011129828 FIL): validation failure
  f010528: 'error, China, Chongqing', // stream reset
  f010558: 'error, China, Shenzhen + Hong Kong', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 86.52741720350703843 FIL, balance: 86.501428998945091763 FIL): validation failure
  f014281: 'error, Netherlands, Permerend', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999987792596 FIL, balance: 0.030307545202163484 FIL): not enough funds to execute transaction
  f014302: 'error, China, Ningbo', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: failed to dial 12D3KooWSbDcJZxfhUAr8EMy81u2mW9Q5N6FEGURpKWgy2knmMEf: no good addresses
  f014329: 'error, China, Hong Kong', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999953244864 FIL, balance: 0.044288846063250016 FIL): not enough funds to execute transaction
  f014464: 'error, China, Hangzhou + Singapore', // stream reset
  f015709: 'error, China, Hefei', // EOF
  f015753: 'error, China, Guyuan', // stream reset
  f015763: 'error, South Africa, Cape Town', // EOF
  f016056: 'error, USA, Arlington', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 5.65683600807920325 FIL, balance: 5.637147559779723551 FIL): validation failure
  f017795: 'error, USA, Columbus', // stream reset
  f019029: 'error, Serbia, Boljevac', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999990594355 FIL, balance: 0.026094683556185367 FIL): not enough funds to execute transaction
  f019174: 'error, UK, Halifax', // deal failed: (State=11) error calling node: publishing deal: not enough funds (required: 0.099999999977407848 FIL, balance: 0.08815034307334442 FIL): not enough funds to execute transaction
  f019422: 'error, South Africa, Johannesburg', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f020541: 'error, China, Shanghai', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f020618: 'error, Singapore', // deal failed: (State=26) error calling node: publishing deal: handler: websocket connection closed
  f020904: 'error, Korea, Uijeongbu-si', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f021328: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999972467322 FIL, balance: 0.074796124348981209 FIL): not enough funds to execute transaction
  f021479: 'error, China, Qingdao', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzaceahhq3x3hv73ophdgpcbcsybi2vwsh444bqcw2bsqvepitntt3uai n 226587, TS: bafy2bzaceb5uttomvvdz23n4ljzwvaygehuekkcsycvgxzergx6l4yqqydwim n226587)
  f021535: 'error, China, Chengdu', // stream reset
  f022031: 'error, China, Maoming', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 2.169939336353927493 FIL, balance: 2.094691719172155714 FIL): validation failure
  f022072: 'error, China, Jieyang', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacecuypud2x3iqoq2v6ksahtbowqei5d6jsenok5frfxsjr4xkw3qlm n 3296, TS: bafy2bzacedhzwvaobg7cgx5im34yu4gsq76bcpn63mx5wn6wtjm4b5txso5au n3296)
  f022089: 'error, China, Beijing', // stream reset
  f022119: 'error, USA, Lovettsville', // deal failed: (State=26) deal data verification failed: error generating CommP: failed to build treeCaused by:    0: failed to create data store    1: No such file or directory (os error 2)
  f022125: 'error, China, Shenzhen', // stream reset
  f022287: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.09999999999895656 FIL, balance: 0.074796124348981209 FIL): not enough funds to execute transaction
  f022289: 'error, China, Mianyang', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999966580818 FIL, balance: 0.095904617853056034 FIL): not enough funds to execute transaction
  f022326: 'error, China, Zhongshan', // EOF
  f022780: 'error, Korea, Guri-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.7042376018009259 FIL, balance: 0.622727779810265647 FIL): validation failure
  f022787: 'error, Korea, Guri-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.704237601804735343 FIL, balance: 0.622727779810265647 FIL): validation failure
  f022853: 'error, China, Fuzhou', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999961320136 FIL, balance: 0.053296741972056574 FIL): not enough funds to execute transaction
  f023202: 'error, China, Wuxi', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 1.046873228054947518 FIL, balance: 1.016966457438648838 FIL): validation failure
  f023467: 'error, Norway, Oslo', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.199999999976495357 FIL, balance: 0.116137965173748252 FIL): validation failure
  f023501: 'error, China, Mianyang', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: SysErrInsufficientFunds(6)
  f023530: 'error, China, Shanghai', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f023661: 'error, China, Zhejiang', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.09999999999291369 FIL, balance: 0.016843867264433245 FIL): not enough funds to execute transaction
  f023843: 'error, NR', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.8499999997268703 FIL, balance: 0.793220188977102502 FIL): validation failure
  f024074: 'error, NR', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.09999999999808256 FIL, balance: 0.072440331173947729 FIL): not enough funds to execute transaction
  f024129: 'error, China, Zhejiang', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.09999999998027199 FIL, balance: 0.093670516525413172 FIL): not enough funds to execute transaction
  f024156: 'error, USA', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.099999999964011144 FIL, balance: 0.010582172734878561 FIL): not enough funds to execute transaction

  // Dial backoff

  f02528: 'backoff, China, Hong Kong + Inner Mongolia',
  f08199: 'backoff, USA, Sudbury',
  f014432: 'backoff, China, Chengdu',
  f015742: 'backoff, China, Ningbo',
  f015914: 'backoff, China, Fuzhou',
  f019710: 'backoff, Australia, Sydney',
  f024127: 'backoff, China, Fuzhou',

  // Rejected

  f01002: 'rejected, NR - bootstrap', // no online
  f01154: 'rejected, Sweden, Alvsjo', // sh: 0: getcwd() failed: No such file or directoryfalse
  f01231: 'rejected, Singapore',
  f01235: 'rejected, Singapore, IPFSMain',
  f01243: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  f01248: 'rejected, Germany, Frankfurt + China, Guangdong',
  f01277: 'rejected, Sweden, Stockholm, tvsthlm',
  f01289: 'rejected, China, Hangzhou + USA',
  f01291: 'rejected, Sweden, Stockholm, tvsthlm', // sh: 1: dealfilter.pl: not found
  f01782:
    'rejected, China, Hong Kong + Singapore + USA, Portland, hellofil.com',
  f02303: 'rejected, China, Hong Kong + Jiangsu + Netherlands',
  f02420: 'rejected, China, Wuhan',
  f02421: 'rejected, China, Deyang + Singapore, 腾盛科技', // sh: 1: dealfilter.pl: not found
  f02422: "rejected, China, Xi'an",
  f02438: 'rejected, Singapore',
  f02503: 'rejected, China, Wuhan',
  f02520: 'rejected, China, Hong Kong + Dongguan',
  f02529: 'rejected, China, Chongqing',
  f02533: 'rejected, Spain, Terrassa, LowFeeValidation.com',
  f02606: 'rejected, China, Shanghai', // sh: 1: dealfilter.pl: not found
  f02609: 'rejected, USA',
  f02613: 'rejected, China, Chongqing',
  f02614: 'rejected, Singapore',
  f02621: "rejected, China, Xi'an",
  f02626: 'rejected, China, Guangzhou + Hong Kong',
  f02723: 'rejected, China, Hong Kong',
  f02767: 'rejected, Germany, Frankfurt', // deal.Proposal.Client(t3uzvqlaevh6ebgqdeakba6xmvwc3ogl36aphaq4voiyxv3xvhiuwrtlb2kqlyro7zip64titlng2alwnhfywq) not in whitelist
  f02770: 'rejected, China, Hong Kong', // deal.Proposal.Client(t3uzvqlaevh6ebgqdeakba6xmvwc3ogl36aphaq4voiyxv3xvhiuwrtlb2kqlyro7zip64titlng2alwnhfywq) not in whitelist
  f02775: 'rejected, China, Hong Kong', // deal.Proposal.Client(t3uzvqlaevh6ebgqdeakba6xmvwc3ogl36aphaq4voiyxv3xvhiuwrtlb2kqlyro7zip64titlng2alwnhfywq) not in whitelist
  f02838: 'rejected, China, Chengdu, IPFS Harbor-星际港湾',
  f03144: 'rejected, Germany, Frankfurt',
  f03194: 'rejected, China, Shenzhen, 成都云存&Npool',
  f03269: 'rejected, Australia', // getting client market balance failed
  f03305: 'rejected, Kenya, Nairobi', // getting client market balance failed
  f03306: 'rejected, Australia', // getting client market balance failed
  f03307: 'rejected, Australia', // getting client market balance failed
  f03326: 'rejected, USA, Seattle', // getting client market balance failed
  f03327: 'rejected, Kenya, Nairobi', // getting client market balance failed
  f03344: 'rejected, China, Guangzhou', // no online
  f03358: 'rejected, Singapore',
  f03362: 'rejected, Germany, Berlin',
  f03367: 'rejected, Singapore',
  f03484: 'rejected, Netherlands', // getting client market balance failed
  f03485: 'rejected, Netherlands', // getting client market balance failed
  f03488: 'rejected, Korea, Geumcheon-gu', // no online
  f03519: 'rejected, USA', // getting client market balance failed
  f03620: 'rejected, Germany, Frankfurt', // getting client market balance failed
  f07969: 'rejected, China, Hangzhou, FME',
  f08103: 'rejected, China, Foshan, 花生酱肠粉',
  f08197: 'rejected, China, Foshan',
  f08205: 'rejected, Brazil, Sao Paulo', // getting client market balance failed
  f08207: 'rejected, Australia, Brisbane',
  f08229: 'rejected, China, Nanchang',
  f08242: 'rejected, China, Weifang',
  f08257: 'rejected, China, Ningbo + USA, Boardman',
  f08399: 'rejected, USA, Sammamish',
  f08432: 'rejected, China, Taizhou', // node error getting client market balance failed: resolve address t3uzvqlaevh6ebgqdeakba6xmvwc3ogl36aphaq4voiyxv3xvhiuwrtlb2kqlyro7zip64titlng2alwnhfywq: actor not found
  f08572: 'rejected, Brazil, Sao Paulo', // getting client market balance failed
  f08985: 'rejected, USA',
  f09037: 'rejected, Singapore',
  f09087: 'rejected, USA',
  f09560: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  f09565: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  f09605: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  f09642: 'rejected, Sweden, Alvsjo',
  f09652: 'rejected, Singapore',
  f09710: 'rejected, China, Jieyang',
  f09737: 'rejected, USA, Sudbury',
  f09825: 'rejected, China, Jinhua',
  f09964: 'rejected, China, Beijing + Jiaxing',
  f010010: 'rejected, China, Changzhou + Hong Kong',
  f010056: 'rejected, Singapore',
  f010202: 'rejected, Singapore',
  f010225: 'rejected, China, Ordos',
  f010254: 'rejected, Japan, Minamata', // no online
  f010405: 'rejected, China, Foshan',
  f010419: 'rejected, China, Sichuan',
  f010495: 'rejected, China, Tainjin',
  f010538: 'rejected, China, Ordos',
  f010616: 'rejected, China, Ordos + Singapore',
  f010617: 'rejected, Canada, Surrey, @feiya200',
  f014233: 'rejected, China, Shanghai', // no online
  f014251: 'rejected, Singapore',
  f014327: 'rejected, China, Ningbo',
  f014365: 'rejected, Australia, Marrickville + Japan, Heiwajima',
  f014472: 'rejected, China, Ningbo',
  f014487: 'rejected, China, Shanghai', // no online
  f014686: 'rejected, Singapore',
  f014699: 'rejected, USA',
  f014701: 'rejected, China, Changzhou',
  f014706: 'rejected, China, Ordos',
  f014793: 'rejected, China, Hangzhou',
  f014804: 'rejected, China, Ordos',
  f014805: 'rejected, China, Ningbo',
  f014813: 'rejected, China, Hangzhou + USA',
  f015731: 'rejected, China, Ordos',
  f015737: 'rejected, Brazil, Sao Paulo', // getting client market balance failed
  f015767: 'rejected, Russia, Khabarovsk + Japan, Khabarovsk + USA',
  f015782: 'rejected, Australia', // getting client market balance failed
  f015848: 'rejected, China, Ordos',
  f015860: 'rejected, Ukraine, Odessa',
  f015861: 'rejected, Ukraine, Odessa',
  f015862: 'rejected, Ukraine, Odessa',
  f015919: 'rejected, China, Ordos',
  f015925: 'rejected, China, Ordos',
  f015942: 'rejected, China, Ningbo',
  f016303: 'rejected, USA, Boardman', // This miner is for testing purposes only, it is no longer part of the slingshot competition
  f016304: 'rejected, USA, Boardman', // This miner is for testing purposes only, it is no longer part of the slingshot competition
  f016305: 'rejected, USA, Boardman', // This miner is for testing purposes only, it is no longer part of the slingshot competition
  f016306: 'rejected, USA, Boardman', // This miner is for testing purposes only, it is no longer part of the slingshot competition
  f016309: 'rejected, USA, Boardman', // This miner is for testing purposes only, it is no longer part of the slingshot competition
  f016398: 'rejected, Singapore',
  f016412: 'rejected, China, Taiwan, Taipei', // sh: ../dealfilter.pl: No such file or directory
  f016563: 'rejected, China, Deyang', // sh: 1: dealfilter.pl: not found
  f019229: 'rejected, USA, Queens', // getting client market balance failed
  f019399: 'rejected, Korea, Busan', // no online
  f019661: 'rejected, Russia, Pyatigorsk', // 2020-10-06T06:22:52+03:00stdin: {  "Proposal": {    "PieceCID": {      "/": "baga6ea4seaqcwm3juwkcik3zjcdjls743ognzqains6ricd6wy6cmd7thlwm2cy"    },    "PieceSize": 131072,    "VerifiedDeal": false,    "Client": "t3uzvqlaevh6ebgqdeakba6xmvwc3ogl36aphaq4voiyxv3xvhiuwrtlb2kqlyro7zip64titlng2alwnhfywq",    "Provider": "f019661",    "Label": "mAVWg5AIgopcqdztucajVIqjql0A14MZQUp35OVfd/xNWPR+AHYk",    "StartEpoch": 127485,    "EndEpoch": 706843,    "StoragePricePerEpoch": "20000000",    "ProviderCollateral": "0",    "ClientCollateral": "0"  },  "ClientSignature": {    "Type": 2,    "Data": "pjnzpXgI94LLdYtWy8OECCJqy+sTRIJVAOzUx9AqQdxvtQ2gigEiQLMRfT76B7wfBmOPfj8e7uOF9SKTAV6QgsGTE6nucrwjS48kki/3sQvZmGbWdAmF3qiv+h8gnoVP"  },  "ProposalCid": {    "/": "bafyreia5xpnvfhw52wdkal3o2bffemyumpzm6xtbt4lsd6r2li5rhe4rdm"  },  "AddFundsCid": null,  "PublishCid": null,  "Miner": "12D3KooWGapQWB726LTfoWraBZFtt5f35cg9xtzozbUbsAMT69rm",  "Client": "12D3KooWGSMixJZE6HMUcymXfGgHF8jyUvae8TBj8g5GxUyAjh2u",  "State": 15,  "PiecePath": "",  "MetadataPath": "",  "SlashEpoch": 0,  "FastRetrieval": true,  "Message": "",  "StoreID": 64,  "FundsReserved": "0",  "Ref": {    "TransferType": "graphsync",    "Root": {      "/": "bafk2bzacecrjoktxhnxhdkgvekuovf2agxqmmucstx4tsv6574jvmpi7qaoys"    },    "PieceCid": null,    "PieceSize": 0  },  "AvailableForRetrieval": false,  "DealID": 0,  "CreationTime": "2020-10-06T06:22:52.822916234+03:00"}Deal rejected unconditionally in lotus-miner-dealmaking-filter
  f020315: 'rejected, China, Guangzhou', // sh: jq: command not found
  f020385: 'rejected, Korea, Incheon', // no online
  f020522: 'rejected, Singapore',
  f020604: 'rejected, Singapore',
  f020608: 'rejected, Russia', // no online
  f020648: 'rejected, China, Shenzhen',
  f020747: 'rejected, China, Xiamen', // sh: 1: dealfilter.pl: not found
  f021525: 'rejected, China, Guangdong',
  f021532: 'rejected, China, Shanghai',
  f021547: 'rejected, Singapore', // getting client market balance failed
  f021695: 'rejected, USA',
  f021714: 'rejected, China, Hong Kong',
  f021716: 'rejected, New Zealand, Wellington', // no online
  f022130: 'rejected, Korea, Seodaemun-gu', // no online
  f022132: 'rejected, China, Dongguan', // no online
  f022309: 'rejected, Korea, Chuncheon', // sh: 1: /absolute/path/to/below/dealfilter.pl: not found
  f022373: 'rejected, Singapore',
  f022399: 'rejected, China, Beijing', // no online
  f022832: 'rejected, China', // syntax error at /home/gc/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /home/gc/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /home/gc/dealfilter.pl line 17.
  f023462: 'rejected, China, Chengdu',
  f023534: 'rejected, China, Chongqing',
  f023561: 'rejected, China, Shenzhen',
  f023565: 'rejected, China, Fuzhou',
  f023627: 'rejected, China, Zhongwei',
  f023660: 'rejected, China, Fuzhou',
  f023662: 'rejected, China, Fuzhou',
  f023853: 'rejected, China, Fuzhou',
  f023854: 'rejected, China, Fuzhou',
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
  f024006: 'rejected, China, Fuzhou',
  f024007: 'rejected, China, Fuzhou',
  f024008: 'rejected, China, Fuzhou',
  f024012: 'rejected, China, Fuzhou',
  f024013: 'rejected, China, Fuzhou',
  f024014: 'rejected, China, Fuzhou',
  f024081: 'rejected, China, Fuzhou',
  f024084: 'rejected, China, Fuzhou',
  f024136: 'rejected, China, Fuzhou',
  f024146: 'rejected, China, Fuzhou',
  f024147: 'rejected, China, Fuzhou',
  f024148: 'rejected, China, Fuzhou',

  // Dial errors

  f01012: 'dial, China, Hong Kong + Guangzhou', // * [/ip4/127.0.0.1/tcp/8888] dial tcp4 127.0.0.1:8888: connect: connection refused  * [/ip4/43.230.90.191/tcp/8888] dial tcp4 43.230.90.191:8888: connect: connection refused  * [/ip4/183.60.252.190/tcp/8888] dial tcp4 183.60.252.190:8888: i/o timeout
  f01100: 'dial, Serbia, Belgrade, filmine.io', // * [/ip4/93.86.63.113/tcp/12345] dial tcp4 93.86.63.113:12345: connect: connection refused
  f01151: 'dial, USA, Waxhaw', // * [/ip4/71.75.239.182/tcp/41372] dial tcp4 0.0.0.0:36831->71.75.239.182:41372: i/o timeout
  f01155: 'dial, China, Shanghai, DianCun Tech', // * [/ip4/203.107.44.156/tcp/39770] dial tcp4 0.0.0.0:36831->203.107.44.156:39770: i/o timeout
  f01229: 'dial, China, Hong Kong', // * [/ip4/43.231.187.27/tcp/1374] dial tcp4 0.0.0.0:36831->43.231.187.27:1374: i/o timeout
  f01236: 'dial, Singapore', // * [/ip4/170.33.12.95/tcp/16666] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNUoXrGukLWgDUR3F1A617D6yT99bzVrKwdUi53uGMKR4, but remote key matches 12D3KooWGijGVP9N8ebcJNNEEPEGDhWbSJbsW2KtWeqVa5MQvTBx
  f01275: 'dial, Korea, Seongnam-si', // * [/ip4/221.163.91.162/tcp/32230] dial tcp4 0.0.0.0:36831->221.163.91.162:32230: i/o timeout
  f01280: 'dial, China, Wuxi, 了凡超算', // * [/ip4/47.254.176.124/tcp/23457] failed to negotiate security protocol: EOF  * [/ip4/58.215.201.254/tcp/23457] dial tcp4 58.215.201.254:23457: connect: connection refused
  f01288: 'dial, China, Yibin, BlackStone', // * [/ip4/101.206.243.3/tcp/39695] dial tcp4 101.206.243.3:39695: connect: connection refused
  f01475: 'dial, China, Wuhan + Germany', // * [/ip4/170.33.12.186/tcp/17031] dial tcp4 0.0.0.0:36831->170.33.12.186:17031: i/o timeout
  f01801: 'dial, Switzerland, Baar, Gogoșel, DNS:akasha.network', // * [/ip4/46.101.187.50/tcp/10222] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHMxq8H6gBb1nxH6YknwX1ZsisFBTgtKJJTWfruBKNKA8, but remote key matches 12D3KooWDXMs6HMEdL7ein6hBWJHv42g7VMGWwUEgH8gYZ8kELYT
  f02307: 'dial, China, Taiyuan, filecoin.monster', // * [/ip4/34.92.71.77/tcp/12345] dial tcp4 0.0.0.0:36831->34.92.71.77:12345: i/o timeout
  f02383: 'dial, China, Shenzhen', // * [/ip4/183.60.90.5/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKzBf1z9Tm6rW1RUXfmPVooKYxan8NzjRmYq9iF8QZsJu, but remote key matches 12D3KooWSD4BWsHzUgnMnDEAMrLpyQAPFQsyHp9KR5a9A2P1hFbc
  f02386: 'dial, Latvia, Riga', // * [/ip4/91.105.126.144/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPV9PbYzkJgaaxaQ2d79RNkJWWjdC5eBXtmLsWAUwqLMT, but remote key matches 12D3KooWBBghMwnobTZP1Buw72KVEuzURgLPUYaq5WRF1wcygy9C
  f02400: 'dial, China, Beijing', // * [/ip4/36.112.26.4/tcp/47996] dial tcp4 36.112.26.4:47996: connect: connection refused
  f02403: 'dial, UK, London, AIM', // * [/ip4/2.58.47.71/tcp/18888] dial tcp4 0.0.0.0:36831->2.58.47.71:18888: i/o timeout  * [/ip4/2.58.45.33/tcp/18888] dial tcp4 0.0.0.0:36831->2.58.45.33:18888: i/o timeout
  f02414: "dial, China, Xi'an, zhejiangyunchu", // * [/ip4/113.142.1.86/tcp/56768] dial tcp4 113.142.1.86:56768: connect: connection refused
  f02418: 'dial, China, Fujian + Netherlands', // * [/ip4/117.48.133.69/tcp/1348] dial tcp4 0.0.0.0:36831->117.48.133.69:1348: i/o timeout  * [/ip4/185.232.59.180/tcp/1348] dial tcp4 0.0.0.0:36831->185.232.59.180:1348: i/o timeout
  f02425: 'dial, USA', // * [/ip4/103.78.229.73/tcp/14567] dial tcp4 0.0.0.0:36831->103.78.229.73:14567: i/o timeout
  f02505: 'dial, China, Wuhan', // * [/ip4/101.32.33.237/tcp/18899] dial tcp4 0.0.0.0:36831->101.32.33.237:18899: i/o timeout
  f02516: 'dial, China, Hong Kong', // * [/ip4/119.28.87.115/tcp/2301] dial tcp4 119.28.87.115:2301: connect: connection refused
  f02519: 'dial, Brazil, Sao Paulo', // * [/ip4/52.67.40.200/tcp/10240] dial tcp4 0.0.0.0:36831->52.67.40.200:10240: i/o timeout
  f02532: 'dial, Singapore', // * [/ip4/170.33.12.117/tcp/8007] dial tcp4 0.0.0.0:36831->170.33.12.117:8007: i/o timeout
  f02534: 'dial, China, Beijing', // * [/ip4/123.58.99.210/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQEAUZycQ6zXsGtQd74vzTkCfPD8rQzWFnbUvK6Qenarc, but remote key matches 12D3KooWCYNTXskYDLQM7rRydZDGAfLiCPfneN1NjmnCBXpMBW49
  f02574: 'dial, Japan, Minamata', // * [/ip4/203.189.40.203/tcp/10250] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWDxS9DwK3FRT3Kf3tSN5j9jMqVg29Vx4GXu3uM9rDzGm2, but remote key matches 12D3KooWKAEN1NS8msS2LBg2c6cLMBFP4BnZLdsHMCz5z85a8fhT
  f02577: 'dial, China, Hong Kong + Russia, Khabarovsk + Japan, Heiwajima', // * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: connection refused  * [/ip4/43.243.100.31/tcp/6777] dial tcp4 0.0.0.0:36831->43.243.100.31:6777: i/o timeout  * [/ip4/66.42.38.110/tcp/9997] dial tcp4 0.0.0.0:36831->66.42.38.110:9997: i/o timeout
  f02607: 'dial, China, Beijing', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f02610: 'dial, Netherlands', // * [/ip4/213.227.129.197/tcp/14567] dial tcp4 213.227.129.197:14567: connect: connection refused
  f02624: 'dial, China, Shanghai, filecoin.cn', // * [/ip4/61.173.81.255/tcp/65501] dial tcp4 0.0.0.0:36831->61.173.81.255:65501: i/o timeout
  f02632: 'dial, China, Tianjin', // * [/ip4/150.129.138.199/tcp/8518] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLD3vs1YhM871uQ5hFmSEnJLPoLuwM9x9sGAQvQNWcczE, but remote key matches 12D3KooWMeqr1EUoLm6JBvcHB6i7KBQaTnnLHTN1mmj85Mim95v8
  f02657: 'dial, China, Ordos-xfr', // * [/ip4/1.183.72.226/tcp/12308] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLTNxtSBmMCy7VNXNSE8tZVPURHB2onSRTpJqkjWGEitm, but remote key matches 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg
  f02658: 'dial, China, Ningbo, bluematrix', // * [/ip4/123.137.128.188/tcp/3698] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRxbE66sHsxoSSE6uLybmNqXWFPKBdk6QC7KPoSZFx8Xy, but remote key matches 12D3KooWRVsiRe1qEUbpA1YeWoeMRBj3T4EBz1cxSWF6hfV8tELv  * [/ip4/112.15.188.130/tcp/3698] dial tcp4 0.0.0.0:36831->112.15.188.130:3698: i/o timeout
  f02664: 'dial, China, Hangzhou, ciger', // * [/ip4/111.0.120.74/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLfsqniYPeGBvMZN7StQzhgzTG9TB6M2gTNsvs5eDiTQM, but remote key matches 12D3KooWQb1CpdSujwXeyMJroR8qAkekXiZdNXVPKqis5ENXZGVw
  f02721: 'dial, USA', // * [/ip4/135.90.74.200/tcp/14567] dial tcp4 0.0.0.0:36831->135.90.74.200:14567: i/o timeout
  f02725: 'dial, China, Hong Kong', // * [/ip4/101.32.38.57/tcp/18899] dial tcp4 0.0.0.0:36831->101.32.38.57:18899: i/o timeout
  f02726: 'dial, USA, Brooklyn', // * [/ip4/169.62.51.212/tcp/14567] dial tcp4 0.0.0.0:36831->169.62.51.212:14567: i/o timeout
  f02731: 'dial, Singapore', // * [/ip4/183.131.58.3/tcp/14567] dial tcp4 0.0.0.0:36831->183.131.58.3:14567: i/o timeout
  f02732: 'dial, USA', // * [/ip4/141.125.99.190/tcp/14567] dial tcp4 0.0.0.0:36831->141.125.99.190:14567: i/o timeout
  f02755: 'dial, China, Shijiazhuang', // * [/ip4/110.249.208.222/tcp/1479] dial tcp4 0.0.0.0:36831->110.249.208.222:1479: i/o timeout
  f02773: 'dial, China, Chengdu', // * [/ip4/118.123.228.198/tcp/48633] dial tcp4 118.123.228.198:48633: connect: connection refused
  f03021: 'dial, China, Hong Kong', // * [/ip4/34.96.185.143/tcp/10240] dial tcp4 34.96.185.143:10240: connect: connection refused  * [/ip4/27.213.97.148/tcp/10240] dial tcp4 0.0.0.0:36831->27.213.97.148:10240: i/o timeout
  f03120: 'dial, China, Guangzhou', // * [/ip4/0.0.0.0/tcp/34566] dial tcp4 0.0.0.0:34566: connect: connection refused
  f03136: "dial, China, Xi'an, Zhejiang Yun Chu Technology Co., Ltd, sat", // * [/ip4/47.57.8.77/tcp/18557] dial tcp4 0.0.0.0:36831->47.57.8.77:18557: i/o timeout
  f03140: 'dial, China, QingDao', // * [/ip4/61.147.123.83/tcp/12222] dial tcp4 61.147.123.83:12222: connect: connection refused
  f03149: 'dial, USA, Newton', // * [/ip6/2600:8803:3000:2430:0:ff:fde6:85d5/tcp/2889] dial tcp6 [2600:8803:3000:2430:0:ff:fde6:85d5]:2889: connect: network is unreachable  * [/ip4/68.102.245.161/tcp/2889] dial tcp4 68.102.245.161:2889: connect: connection refused
  f03220: 'dial, China, Ordos', // * [/ip4/1.183.72.226/tcp/12309] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBgi9gSUH7kw88Ko8miGjRWjJrNF2gmkMjy6gchtxgJbL, but remote key matches 12D3KooWDxu2JXzsnxz2L9ZWRXNBypcpQcduWwqmSZfu5EawCDmZ
  f03225: 'dial, China, Guyuan', // * [/ip4/10.100.0.2/tcp/11111] dial tcp4 10.100.0.2:11111: connect: connection refused
  f03245: 'dial, USA, Los Angeles', // * [/ip4/120.133.36.67/tcp/23456] dial tcp4 0.0.0.0:36831->120.133.36.67:23456: i/o timeout
  f03266: 'dial, USA', // * [/ip4/169.63.27.151/tcp/14567] dial tcp4 0.0.0.0:36831->169.63.27.151:14567: i/o timeout
  f03276: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/41112] failed to negotiate security protocol: read tcp4 66.70.191.245:36831->183.63.203.161:41112: read: connection reset by peer
  f03286: 'dial, China, Mianyang', // * [/ip4/112.44.246.189/tcp/23455] dial tcp4 0.0.0.0:36831->112.44.246.189:23455: i/o timeout
  f03287: 'dial, USA', // * [/ip4/149.81.122.165/tcp/14567] dial tcp4 0.0.0.0:36831->149.81.122.165:14567: i/o timeout
  f03312: 'dial, China, Beijing', // * [/ip4/8.210.13.50/tcp/45678] dial tcp4 8.210.13.50:45678: connect: connection refused  * [/ip4/119.161.169.68/tcp/45678] dial tcp4 0.0.0.0:36831->119.161.169.68:45678: i/o timeout
  f03314: 'dial, China, Zhangjiakou-xfr', // * [/ip4/45.113.32.176/tcp/1112] dial tcp4 0.0.0.0:36831->45.113.32.176:1112: i/o timeout
  f03317: 'dial, China, Shenzhen + Hong Kong + Jieyang', // * [/ip4/170.33.12.164/tcp/9090] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPMgigioxtnUsBqwBemuuxjZLKKpfhT3FmrWumyWDkQEd, but remote key matches 12D3KooWDkgbKexne42yFhovBdv7dEnZA4XpXYchEQpvEKpg2qTJ
  f03320: 'dial, bcm', // * [/ip4/183.36.3.160/tcp/11850] dial tcp4 183.36.3.160:11850: connect: connection refused
  f03325: 'dial, Germany, Frankfurt', // * [/ip4/45.9.10.134/tcp/42243] dial tcp4 45.9.10.134:42243: connect: connection refused
  f03337: 'dial, China, Sichuan, 朝日&网科巨力', // * [/ip4/118.116.2.60/tcp/25033] dial tcp4 118.116.2.60:25033: connect: connection refused  * [/ip4/118.116.2.61/tcp/25033] dial tcp4 118.116.2.61:25033: connect: connection refused
  f03345: 'dial, China, Fuzhou, chh', // * [/ip4/222.79.8.75/tcp/10851] dial tcp4 222.79.8.75:10851: connect: connection refused
  f03350: 'dial, China, Wuhan', // * [/ip4/170.33.12.187/tcp/7000] dial tcp4 0.0.0.0:36831->170.33.12.187:7000: i/o timeout  * [/ip4/170.33.12.188/tcp/7000] failed to negotiate security protocol: read tcp4 66.70.191.245:36831->170.33.12.188:7000: read: connection reset by peer
  f03351: 'dial, China, Chengdu', // * [/ip4/182.140.253.150/tcp/10000] dial tcp4 0.0.0.0:36831->182.140.253.150:10000: i/o timeout
  f03359: 'dial, China, Shanghai', // * [/ip4/47.245.138.110/tcp/2347] dial tcp4 0.0.0.0:36831->47.245.138.110:2347: i/o timeout
  f03360: 'dial, China, Shaanxi', // * [/ip4/111.19.155.65/tcp/23451] dial tcp4 0.0.0.0:36831->111.19.155.65:23451: i/o timeout
  f03365: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7084] failed to negotiate security protocol: EOF
  f03366: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7000] failed to negotiate security protocol: EOF
  f03427: 'dial, Russia, airalab', // * [/ip4/82.148.21.37/tcp/46717] dial tcp4 82.148.21.37:46717: connect: connection refused
  f03490: 'dial, China, Dongguan', // * [/ip4/121.12.167.179/tcp/41113] dial tcp4 121.12.167.179:41113: connect: connection refused
  f03515: 'dial, China, Dongguan', // * [/ip4/113.105.174.3/tcp/23456] dial tcp4 113.105.174.3:23456: connect: connection refused
  f03517: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7082] failed to negotiate security protocol: EOF
  f03523: 'dial, China, Wuxi, YC--wuxi', // * [/ip4/58.215.232.74/tcp/10010] dial tcp4 58.215.232.74:10010: connect: connection refused  * [/ip4/192.168.1.12/tcp/1001] dial tcp4 0.0.0.0:36831->192.168.1.12:1001: i/o timeout
  f03548: 'dial, Singapore', // * [/ip4/8.209.82.79/tcp/14567] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWE5wkzEfF4zkww8CD1aU9Dvq6c26smunqnK5mJQXuu9ot, but remote key matches 12D3KooWExdbgcJnR1JYaThHyyS8eGSzM3Y2BSpTn1YsKF3MPz7b
  f03630: 'dial, China, Wuhan', // * [/ip4/170.33.12.78/tcp/17000] dial tcp4 0.0.0.0:36831->170.33.12.78:17000: i/o timeout  * [/ip4/170.33.12.186/tcp/17000] dial tcp4 0.0.0.0:36831->170.33.12.186:17000: i/o timeout
  f03638: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f03646: 'dial, China, Beijing, JingTang', // * [/ip4/123.125.194.158/tcp/5678] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHaT6Kh6GZgpZ47hK99FnZnTRa3pbSNsy1fMUDGFyczj8, but remote key matches 12D3KooWQb5w1q9YKogjAzrizGTveaSU6b51JFEFr92qx1uyNGkk
  f03702: 'dial, China, Shenzhen + Singapore, LianDongJingLing', // * [/ip4/218.17.190.89/tcp/10240] dial tcp4 0.0.0.0:36831->218.17.190.89:10240: i/o timeout  * [/ip4/8.209.113.21/tcp/7002] dial tcp4 0.0.0.0:36831->8.209.113.21:7002: i/o timeout
  f03764: 'dial, China, Beijing, foobar', // * [/ip4/123.115.217.138/tcp/24002] dial tcp4 0.0.0.0:36831->123.115.217.138:24002: i/o timeout
  f03766: 'dial, China, Weifang', // * [/ip4/111.17.220.237/tcp/6666] dial tcp4 111.17.220.237:6666: connect: connection refused
  f04921: 'dial, China, Shanghai', // * [/ip4/121.46.237.2/tcp/51818] dial tcp4 0.0.0.0:36831->121.46.237.2:51818: i/o timeout
  f06775: 'dial, China, Shenzhen, IPSB&CAAP', // * [/ip4/103.39.218.169/tcp/2346] dial tcp4 103.39.218.169:2346: connect: connection refused
  f07451: 'dial, China, Hangzhou', // * [/ip4/221.12.20.5/tcp/6000] dial tcp4 0.0.0.0:36831->221.12.20.5:6000: i/o timeout
  f07710: 'dial, Hong Kong', // * [/ip4/65.181.71.9/tcp/5472] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBPbrPaBFsrKYk7rXpcsA2S5FxDgfAzxxa2RLRmUYXtcL, but remote key matches 12D3KooWKscwJYDX6G8XZ8Vi1k2Mrbz7NX86PgZN2XreBuSQYxUA
  f07752: 'dial, China, Dongguan', // * [/ip4/103.43.85.202/tcp/18888] dial tcp4 0.0.0.0:36831->103.43.85.202:18888: i/o timeout
  f07756: 'dial, DNS:purumine.com', // * [/ip6/2001:470:b:281::ac15:6402/tcp/1347] dial tcp6 [2001:470:b:281::ac15:6402]:1347: connect: network is unreachable  * [/ip4/50.47.110.164/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSdyt5tC9nJScHT4EoBnz7AZcniqxmP1FEZZwdkBwhwzk, but remote key matches 12D3KooWNoi8KHMeS8SEp3mDUCHDU8yRFW6SZ1SPmz2NLCSur2ei
  f07774: 'dial, China, Shenzhen', // * [/ip4/103.40.249.210/tcp/33455] dial tcp4 103.40.249.210:33455: connect: connection refused
  f07775: 'dial, China, Shenzhen', // * [/ip4/103.40.249.211/tcp/33455] dial tcp4 0.0.0.0:36831->103.40.249.211:33455: i/o timeout
  f07810: 'dial, Korea', // * [/ip4/61.111.129.217/tcp/33333] dial tcp4 61.111.129.217:33333: connect: connection refused
  f07826: 'dial, China, Shenzhen, 星际医生', // * [/ip4/183.12.27.145/tcp/8888] dial tcp4 0.0.0.0:36831->183.12.27.145:8888: i/o timeout
  f07829: 'dial, Japan', // * [/ip4/163.44.165.168/tcp/30222] dial tcp4 0.0.0.0:36831->163.44.165.168:30222: i/o timeout
  f07830: 'dial, Singapore', // * [/ip4/8.209.102.106/tcp/14567] failed to negotiate security protocol: EOF
  f07833: 'dial, China, Changzhou, 星巢', // * [/ip4/107.155.16.239/tcp/20480] dial tcp4 107.155.16.239:20480: connect: connection refused  * [/ip4/107.155.3.37/tcp/20480] dial tcp4 0.0.0.0:36831->107.155.3.37:20480: i/o timeout
  f07848: 'dial, China, Wuhan', // * [/ip4/58.211.11.130/tcp/1024] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMzikgk7JT188vn56iyZUefPXDXMp62oaYpNokGzSq6Ux, but remote key matches 12D3KooWHx9wRyDrqRYfqcQTSXif1dms3XB2FzXVHvs2HQfireDS
  f07851: 'dial, Netherlands, Purmerend', // * [/ip4/212.32.243.209/tcp/2347] dial tcp4 0.0.0.0:36831->212.32.243.209:2347: i/o timeout
  f07857: 'dial, China, Zhengzhou', // * [/ip4/117.160.206.175/tcp/40131] dial tcp4 117.160.206.175:40131: connect: connection refused
  f07944: 'dial, China, Hangzhou, SupremeTreasure', // * [/ip4/103.46.128.45/tcp/57670] failed to negotiate security protocol: EOF
  f07947: 'dial, China, Zhengzhou', // * [/ip4/117.160.206.175/tcp/40133] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHRLWcUmv2NFQER1vwJAa2qTSC5S7ssJcAuwUn27t667E, but remote key matches 12D3KooWNzTyV8jTJobnDeXBLgJHetsMCSy7r8euCrbszdhTXCKf
  f07956: 'dial, Russia', // * [/ip4/91.218.244.253/tcp/10240] dial tcp4 0.0.0.0:36831->91.218.244.253:10240: i/o timeout
  f07961: 'dial, China, Changzhou', // * [/ip4/58.216.209.94/tcp/6666] dial tcp4 58.216.209.94:6666: connect: connection refused
  f07991: 'dial, China, Changsha', // * [/ip4/113.218.133.192/tcp/13470] dial tcp4 0.0.0.0:36831->113.218.133.192:13470: i/o timeout
  f08006: 'dial, China, Shaanxi', // * [/ip4/111.19.129.175/tcp/23456] dial tcp4 0.0.0.0:36831->111.19.129.175:23456: i/o timeout
  f08032: 'dial, China, Weifang', // * [/ip4/111.17.220.237/tcp/6666] dial tcp4 111.17.220.237:6666: connect: connection refused  * [/ip4/111.17.220.235/tcp/6666] dial tcp4 111.17.220.235:6666: connect: connection refused
  f08040: 'dial, Australia, Sydney', // * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:36831->43.241.189.214:39438: i/o timeout
  f08042: 'dial, Brazil, Sao Paulo', // * [/ip4/76.223.3.225/tcp/23456] dial tcp4 0.0.0.0:36831->76.223.3.225:23456: i/o timeout
  f08047: 'dial, China, Hangzhou', // * [/ip4/101.71.125.162/tcp/7654] dial tcp4 0.0.0.0:36831->101.71.125.162:7654: i/o timeout
  f08063: 'dial, China, Huizhou', // * [/ip4/113.81.68.244/tcp/12345] dial tcp4 0.0.0.0:36831->113.81.68.244:12345: i/o timeout
  f08076: 'dial, Netherlands, Alphen aan den Rijn, Ang', // * [/ip4/143.178.96.190/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFhbSYbTBYSym7mrxXPfFHupE2oG8LZRjwM3smZKwBYWj, but remote key matches 12D3KooWE3jXWnuX7eXFs2FxY3MZRbsftox1NRGf47iPr5CfFi6B
  f08088: 'dial, China, Dongguan', // * [/ip4/183.240.203.135/tcp/10240] dial tcp4 183.240.203.135:10240: connect: connection refused
  f08096: 'dial, China, Wuhan', // * [/ip4/59.175.128.46/tcp/21735] dial tcp4 0.0.0.0:36831->59.175.128.46:21735: i/o timeout
  f08101: 'dial, China, Wuxi', // * [/ip4/47.88.10.179/tcp/7000] dial tcp4 0.0.0.0:36831->47.88.10.179:7000: i/o timeout  * [/ip4/47.245.136.114/tcp/7000] dial tcp4 0.0.0.0:36831->47.245.136.114:7000: i/o timeout
  f08109: 'dial, USA, qianyuanyunshuo', // * [/ip4/47.57.8.77/tcp/28109] dial tcp4 0.0.0.0:36831->47.57.8.77:28109: i/o timeout
  f08135: 'dial, Singapore', // * [/ip4/170.33.12.118/tcp/12345] dial tcp4 0.0.0.0:36831->170.33.12.118:12345: i/o timeout
  f08139: 'dial, China, Shanghai', // * [/ip4/218.79.124.15/tcp/45454] dial tcp4 0.0.0.0:36831->218.79.124.15:45454: i/o timeout
  f08148: 'dial, China, Shanghai', // * [/ip4/103.108.182.27/tcp/30031] dial tcp4 0.0.0.0:36831->103.108.182.27:30031: i/o timeout
  f08149: 'dial, China, Jiangmen', // * [/ip4/183.36.3.160/tcp/60015] dial tcp4 183.36.3.160:60015: connect: connection refused
  f08150: 'dial, China, Hangzhou', // * [/ip4/115.199.55.127/tcp/23333] dial tcp4 0.0.0.0:36831->115.199.55.127:23333: i/o timeout
  f08161: 'dial, China, Weifang', // * [/ip4/111.17.220.234/tcp/6677] dial tcp4 111.17.220.234:6677: connect: connection refused
  f08170: 'dial, China, Jieyang', // * [/ip4/183.240.204.199/tcp/40573] dial tcp4 0.0.0.0:36831->183.240.204.199:40573: i/o timeout
  f08178: 'dial, China, Jiaxing, CAAP-金华', // * [/ip4/61.174.253.25/tcp/2346] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJpwXVGUapvX4nqP1GoAD4eAxobaogY5ZAWC9vfQPUByN, but remote key matches 12D3KooWBKWMoLD3JfU3F9Bobj8c5Ro4fxSb5wqnCRkbFW1mq87o
  f08235:
    'dial, China, Beijing + Jiaxing + Germany, Frankfurt, 星河华讯&中科星际', // * [/ip4/103.103.177.172/tcp/5678] dial tcp4 0.0.0.0:36831->103.103.177.172:5678: i/o timeout
  f08243: 'dial, USA, Queens', // * [/ip4/108.41.171.148/tcp/55242] dial tcp4 0.0.0.0:36831->108.41.171.148:55242: i/o timeout  * [/ip4/108.41.171.148/tcp/55244] dial tcp4 0.0.0.0:36831->108.41.171.148:55244: i/o timeout  * [/ip4/108.41.171.148/tcp/55241] dial tcp4 0.0.0.0:36831->108.41.171.148:55241: i/o timeout  * [/ip4/108.41.171.148/tcp/55243] dial tcp4 0.0.0.0:36831->108.41.171.148:55243: i/o timeout
  f08289: 'dial, Canada, Embrun', // * [/ip4/148.59.149.162/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWR8hBuB593YUujHBYAT9Zp48FgfzYeLbPdqow59ZF3dFg, but remote key matches 12D3KooWKi8JTyGdSAL1TFpdF6gmyjXeMeknqNWT6Eft1cxrSzAq
  f08293: 'dial, China, Xinxiang', // * [/ip4/27.50.142.73/tcp/1347] dial tcp4 27.50.142.73:1347: connect: connection refused
  f08295: 'dial, China, Suzhou, IPFS Cloud', // * [/ip4/222.92.5.150/tcp/40699] dial tcp4 0.0.0.0:36831->222.92.5.150:40699: i/o timeout
  f08301: 'dial, Japan, Setagaya-ku, MEIK', // * [/ip4/126.159.22.156/tcp/50320] dial tcp4 0.0.0.0:36831->126.159.22.156:50320: i/o timeout
  f08330: 'dial, China, Chengdu, oursoft', // * [/ip4/125.69.0.37/tcp/55009] dial tcp4 125.69.0.37:55009: connect: connection refused
  f08338: 'dial, China, Weifang', // * [/ip4/111.17.220.231/tcp/5566] dial tcp4 111.17.220.231:5566: connect: connection refused
  f08344: 'dial, UK, Hartlepool', // * [/ip4/82.15.108.46/tcp/51437] dial tcp4 0.0.0.0:36831->82.15.108.46:51437: i/o timeout
  f08347: 'dial, China, Chengdu', // * [/ip4/222.209.95.29/tcp/6666] dial tcp4 222.209.95.29:6666: connect: connection refused
  f08358: 'dial, China, Shenzhen', // * [/ip4/119.123.208.233/tcp/45437] dial tcp4 0.0.0.0:36831->119.123.208.233:45437: i/o timeout
  f08384:
    'dial, China, Shandong + Hong Kong + Japan, Heiwajima + Russia, Khabarovsk', // * [/ip4/66.42.38.110/tcp/9990] failed to negotiate security protocol: read tcp4 66.70.191.245:36831->66.42.38.110:9990: read: connection reset by peer  * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: connection refused  * [/ip4/172.247.228.122/tcp/9999] dial tcp4 172.247.228.122:9999: connect: connection refused
  f08396: 'dial, France, Fontenay-sous-Bois', // * [/ip4/90.46.50.228/tcp/24002] dial tcp4 90.46.50.228:24002: connect: connection refused
  f08405: 'dial, China, Guangdong', // * [/ip4/183.232.116.201/tcp/4001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLVaddg5tQ78QiqKjJ2oUoaA3RwH6LaRLMbEMWXYKXLib, but remote key matches 12D3KooWSUzB3JC5URBQVs4N7AYVedjGuSQ9PJwahKsPwtj6uKxh
  f08418: 'dial, China, Chansha + USA', // * [/ip4/27.124.10.49/tcp/7003] dial tcp4 27.124.10.49:7003: connect: connection refused
  f08446: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] dial tcp4 79.160.78.193:1347: connect: connection refused
  f08448: 'dial, China, Guangdong', // * [/ip4/183.232.116.202/tcp/4001] dial tcp4 183.232.116.202:4001: connect: connection refused
  f08481: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:36831->73.158.16.48:30390: i/o timeout
  f08497: 'dial, Brazil, Sao Paulo', // * [/ip4/18.231.148.87/tcp/46717] dial tcp4 0.0.0.0:36831->18.231.148.87:46717: i/o timeout
  f08568: 'dial, USA, Waxhaw, Meatball Part II', // * [/ip4/71.75.239.182/tcp/41372] dial tcp4 0.0.0.0:36831->71.75.239.182:41372: i/o timeout
  f08684: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.109:23450: i/o timeout
  f08685: 'dial, China, Fuzhou', // * [/ip4/182.99.0.96/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.96:23450: i/o timeout
  f08788: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.103:23450: i/o timeout
  f08793: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.99:23450: i/o timeout
  f08895: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f08904: 'dial, China, Deyang', // * [/ip4/125.64.78.27/tcp/4004] dial tcp4 125.64.78.27:4004: connect: connection refused
  f08908: 'dial, USA', // * [/ip4/216.18.214.92/tcp/6666] dial tcp4 0.0.0.0:36831->216.18.214.92:6666: i/o timeout
  f08917: 'dial, China, Beijing', // * [/ip4/182.61.174.185/tcp/40000] dial tcp4 182.61.174.185:40000: connect: connection refused
  f08928: 'dial, USA, Arlington, theartist', // * [/ip4/69.251.248.175/tcp/6679] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQpVFP18YKyLaFoxk5G9Gk1yGKYyVkjWNg4j67a9mcTyw, but remote key matches 12D3KooWDmnKBLXVi7g2CGHhPpha5CpWb3nyvznB6q8vRSUNXMX7
  f08937: 'dial, China, Wuxi, YC--wuxi', // * [/ip4/58.215.232.74/tcp/10200] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAG85TzBibt5LjxuTsz9KhWwQCz9ok65oaPcZ2voYaMZA, but remote key matches 12D3KooWBrUUKAXnschtUgweFhcqt4dEMRkaToUH6hpWxwviM3d2  * [/ip4/192.168.1.18/tcp/1020] dial tcp4 0.0.0.0:36831->192.168.1.18:1020: i/o timeout
  f08949: 'dial, Norway, Oslo', // * [/ip4/151.252.13.190/tcp/37374] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWE1ubdqszJxdjAAVcZcx2x1PJUNFbNDm52jFkeJoAaPYh, but remote key matches 12D3KooWMpuRzgVuRS6m285cucGgnXWwTnsNtGzjsMJeEqS7UtJw
  f08953: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.100:23450: i/o timeout
  f08958: 'dial, China, Fuzhou', // * [/ip4/182.99.0.108/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.108:23450: i/o timeout
  f08986: 'dial, China, Ordos', // * [/ip4/1.183.72.226/tcp/12308] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCLPAPTjCYyCMBBnv5MkJCaV1o6mawJLha4wdAGkMH1Yq, but remote key matches 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg
  f08991: 'dial, China, Ili', // * [/ip4/124.88.170.140/tcp/16000] dial tcp4 0.0.0.0:36831->124.88.170.140:16000: i/o timeout
  f08995: 'dial, China, Fuzhou', // * [/ip4/182.99.0.97/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.97:23450: i/o timeout
  f09005: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.101:23450: i/o timeout
  f09029: 'dial, China, Wuhan', // * [/ip4/59.175.128.46/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCkJYhKg9uMf2ocRDRxatUWBveJMSdneMamxDmChG2ULv, but remote key matches 12D3KooWCFhmdmduqq59w8CsEgEX2qi9KQqE9wmTHmqC5W4tcEaA
  f09036: 'dial, China, Chengdu, CD-oursoft', // * [/ip4/125.69.0.37/tcp/55019] dial tcp4 125.69.0.37:55019: connect: connection refused
  f09048: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.102:23450: i/o timeout
  f09056: 'dial, China, Shenzhen, SZSQ1', // * [/ip4/119.139.197.93/tcp/20030] dial tcp4 119.139.197.93:20030: connect: connection refused
  f09077: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:36831->218.85.126.210:23450: i/o timeout
  f09082: 'dial, Australia, Canberra', // * [/ip4/101.178.36.30/tcp/24004] dial tcp4 0.0.0.0:36831->101.178.36.30:24004: i/o timeout
  f09088: 'dial, China, Changsha', // * [/ip4/175.10.160.70/tcp/13470] dial tcp4 175.10.160.70:13470: connect: connection refused
  f09091: 'dial, Netherlands', // * [/ip4/185.232.59.179/tcp/2347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLdKXN3LuTbRqgyvSCxCByPifZDTp1p7hLCtQEgwo4uM6, but remote key matches 12D3KooWJDvwMPfJ1ct9V6JpgRrdA7DWEEfcWSQAWCYbRrNxnXYi
  f09261: 'dial, Brazil, Sao Paulo', // * [/ip4/169.57.189.187/tcp/7000] dial tcp4 169.57.189.187:7000: connect: connection refused
  f09523: 'dial, China, Beijing', // * [/ip4/8.210.13.50/tcp/45678] dial tcp4 8.210.13.50:45678: connect: connection refused  * [/ip4/119.161.169.68/tcp/45678] dial tcp4 0.0.0.0:36831->119.161.169.68:45678: i/o timeout
  f09537: 'dial, USA, El Monte', // * [/ip4/47.145.150.94/tcp/1024] dial tcp4 0.0.0.0:36831->47.145.150.94:1024: i/o timeout
  f09555: 'dial, Australia, Sydney', // * [/ip4/3.25.64.130/tcp/10240] dial tcp4 0.0.0.0:36831->3.25.64.130:10240: i/o timeout
  f09559: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/31001] dial tcp4 0.0.0.0:36831->99.250.201.0:31001: i/o timeout
  f09561: 'dial, China, Beijing', // * [/ip4/36.112.26.4/tcp/3458] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFp4nbb4eDyUmWaR5XrjSEzdhtHh35ewdwc59e1tkZBcA, but remote key matches 12D3KooWAKXYhFP3mGbaHnCB5GBCvFe8gniGKoDpTbaY8S9FWruH
  f09573: 'dial, China, Xiamen', // * [/ip4/121.204.250.253/tcp/4567] dial tcp4 0.0.0.0:36831->121.204.250.253:4567: i/o timeout
  f09589: 'dial, China, Changsha', // * [/ip4/113.218.134.132/tcp/5472] dial tcp4 113.218.134.132:5472: i/o timeout
  f09592: 'dial, Japan, Minamata', // * [/ip4/203.189.40.203/tcp/10250] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHrm2Ej8kE29FZ5tABnzzWMeeUqz6UWiG6WfECxEBTJyr, but remote key matches 12D3KooWKAEN1NS8msS2LBg2c6cLMBFP4BnZLdsHMCz5z85a8fhT
  f09619: 'dial, China, Shanghai', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f09620: 'dial, China, Weifang', // * [/ip4/47.242.56.117/tcp/5566] failed to negotiate security protocol: read tcp4 66.70.191.245:36831->47.242.56.117:5566: read: connection reset by peer
  f09631: 'dial, China, Changzhou', // * [/ip4/58.216.209.94/tcp/6668] dial tcp4 58.216.209.94:6668: connect: connection refused
  f09643: 'dial, China, Beijing', // * [/ip4/203.93.121.130/tcp/38886] dial tcp4 203.93.121.130:38886: connect: no route to host
  f09653: 'dial, China, Chengdu', // * [/ip4/47.242.94.248/tcp/6667] dial tcp4 47.242.94.248:6667: connect: connection refused
  f09656: 'dial, Ukraine, Odessa', // * [/ip4/218.60.28.136/tcp/43368] dial tcp4 218.60.28.136:43368: connect: connection refused
  f09664: 'dial, Australia, Sydney', // * [/ip4/220.238.233.196/tcp/26201] dial tcp4 0.0.0.0:36831->220.238.233.196:26201: i/o timeout
  f09671: 'dial, China, Chongqing', // * [/ip4/113.207.109.184/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMdh1of4D5YPvY4g3Y2pCf6mpQvgHx9kg55RvkJdRmP6z, but remote key matches 12D3KooWPw6phtaL2ftZq7wQLjc6z1YoVou4BK48ZzXk3TVNVPjK
  f09672: 'dial, China, Chengdu', // * [/ip4/110.185.107.124/tcp/21735] dial tcp4 110.185.107.124:21735: connect: connection refused
  f09680: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f09689: 'dial, USA, Portland', // * [/ip4/47.242.65.177/tcp/16016] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJGjRUZXEXAwb8yUhGCuLvtfY1NDrcK5K2PqQRMDanF7G, but remote key matches 12D3KooWLJvGE5NQYLUgXXGjp7sSAZ6MGHHdakkTpH8RVr6mLF2R  * [/ip4/47.242.67.7/tcp/16016] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJGjRUZXEXAwb8yUhGCuLvtfY1NDrcK5K2PqQRMDanF7G, but remote key matches 12D3KooWLJvGE5NQYLUgXXGjp7sSAZ6MGHHdakkTpH8RVr6mLF2R  * [/ip4/47.242.70.110/tcp/16016] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJGjRUZXEXAwb8yUhGCuLvtfY1NDrcK5K2PqQRMDanF7G, but remote key matches 12D3KooWLJvGE5NQYLUgXXGjp7sSAZ6MGHHdakkTpH8RVr6mLF2R  * [/ip4/47.242.65.12/tcp/16016] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJGjRUZXEXAwb8yUhGCuLvtfY1NDrcK5K2PqQRMDanF7G, but remote key matches 12D3KooWLJvGE5NQYLUgXXGjp7sSAZ6MGHHdakkTpH8RVr6mLF2R  * [/ip4/47.242.78.100/tcp/16016] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJGjRUZXEXAwb8yUhGCuLvtfY1NDrcK5K2PqQRMDanF7G, but remote key matches 12D3KooWLJvGE5NQYLUgXXGjp7sSAZ6MGHHdakkTpH8RVr6mLF2R  * [/ip4/47.242.71.3/tcp/16016] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJGjRUZXEXAwb8yUhGCuLvtfY1NDrcK5K2PqQRMDanF7G, but remote key matches 12D3KooWLJvGE5NQYLUgXXGjp7sSAZ6MGHHdakkTpH8RVr6mLF2R  * [/ip4/47.242.67.107/tcp/16016] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJGjRUZXEXAwb8yUhGCuLvtfY1NDrcK5K2PqQRMDanF7G, but remote key matches 12D3KooWLJvGE5NQYLUgXXGjp7sSAZ6MGHHdakkTpH8RVr6mLF2R  * [/ip4/47.242.39.102/tcp/16016] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJGjRUZXEXAwb8yUhGCuLvtfY1NDrcK5K2PqQRMDanF7G, but remote key matches 12D3KooWLJvGE5NQYLUgXXGjp7sSAZ6MGHHdakkTpH8RVr6mLF2R  * [/ip4/47.242.47.202/tcp/16016] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJGjRUZXEXAwb8yUhGCuLvtfY1NDrcK5K2PqQRMDanF7G, but remote key matches 12D3KooWLJvGE5NQYLUgXXGjp7sSAZ6MGHHdakkTpH8RVr6mLF2R  * [/ip4/47.242.68.29/tcp/16016] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJGjRUZXEXAwb8yUhGCuLvtfY1NDrcK5K2PqQRMDanF7G, but remote key matches 12D3KooWLJvGE5NQYLUgXXGjp7sSAZ6MGHHdakkTpH8RVr6mLF2R  * [/ip4/47.242.78.254/tcp/16016] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJGjRUZXEXAwb8yUhGCuLvtfY1NDrcK5K2PqQRMDanF7G, but remote key matches 12D3KooWLJvGE5NQYLUgXXGjp7sSAZ6MGHHdakkTpH8RVr6mLF2R  * [/ip4/47.242.77.118/tcp/16016] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJGjRUZXEXAwb8yUhGCuLvtfY1NDrcK5K2PqQRMDanF7G, but remote key matches 12D3KooWLJvGE5NQYLUgXXGjp7sSAZ6MGHHdakkTpH8RVr6mLF2R  * [/ip4/47.242.43.84/tcp/16016] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJGjRUZXEXAwb8yUhGCuLvtfY1NDrcK5K2PqQRMDanF7G, but remote key matches 12D3KooWLJvGE5NQYLUgXXGjp7sSAZ6MGHHdakkTpH8RVr6mLF2R  * [/ip4/47.242.68.99/tcp/16016] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJGjRUZXEXAwb8yUhGCuLvtfY1NDrcK5K2PqQRMDanF7G, but remote key matches 12D3KooWLJvGE5NQYLUgXXGjp7sSAZ6MGHHdakkTpH8RVr6mLF2R  * [/ip4/47.242.2.41/tcp/16016] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJGjRUZXEXAwb8yUhGCuLvtfY1NDrcK5K2PqQRMDanF7G, but remote key matches 12D3KooWLJvGE5NQYLUgXXGjp7sSAZ6MGHHdakkTpH8RVr6mLF2R  * [/ip4/47.242.65.136/tcp/16016] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJGjRUZXEXAwb8yUhGCuLvtfY1NDrcK5K2PqQRMDanF7G, but remote key matches 12D3KooWLJvGE5NQYLUgXXGjp7sSAZ6MGHHdakkTpH8RVr6mLF2R    ... skipping 5 errors ...
  f09704: 'dial, China, Shenzhen', // * [/ip4/218.17.62.49/tcp/31431] dial tcp4 218.17.62.49:31431: connect: connection refused
  f09721: 'dial, ???, CD-oursoft-1', // * [/ip4/125.69.0.37/tcp/55029] dial tcp4 125.69.0.37:55029: connect: connection refused
  f09723: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:36831->218.85.126.210:23450: i/o timeout
  f09729: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/41112] failed to negotiate security protocol: read tcp4 66.70.191.245:36831->183.63.203.161:41112: read: connection reset by peer
  f09734: 'dial, China, Dongguan', // * [/ip4/121.12.167.179/tcp/41113] dial tcp4 121.12.167.179:41113: connect: connection refused
  f09748: 'dial, China, Tianjin', // * [/ip4/150.129.138.199/tcp/7518] dial tcp4 150.129.138.199:7518: connect: connection refused
  f09761: 'dial, China, Beijing', // * [/ip4/114.253.41.59/tcp/24002] dial tcp4 0.0.0.0:36831->114.253.41.59:24002: i/o timeout
  f09763: 'dial, China, Mianyang,  <13h', // * [/ip4/47.254.128.95/tcp/7000] dial tcp4 0.0.0.0:36831->47.254.128.95:7000: i/o timeout  * [/ip4/47.254.25.128/tcp/7000] dial tcp4 0.0.0.0:36831->47.254.25.128:7000: i/o timeout
  f09771: 'dial, China, Hangzhou', // * [/ip4/47.57.8.77/tcp/6785] dial tcp4 0.0.0.0:36831->47.57.8.77:6785: i/o timeout
  f09789: 'dial, USA', // * [/ip4/47.242.77.149/tcp/19914] dial tcp4 0.0.0.0:36831->47.242.77.149:19914: i/o timeout
  f09792: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 35.224.87.15:24002: connect: connection refused
  f09797: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.102:23450: i/o timeout
  f09801: 'dial, China, Fuzhou', // * [/ip4/182.99.0.108/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.108:23450: i/o timeout
  f09808: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.100:23450: i/o timeout
  f09809: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.101:23450: i/o timeout
  f09810: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.103:23450: i/o timeout
  f09811: 'dial, China, Dongguan', // * [/ip4/113.105.174.7/tcp/10000] dial tcp4 0.0.0.0:36831->113.105.174.7:10000: i/o timeout
  f09813: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.109:23450: i/o timeout
  f09814: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.99:23450: i/o timeout
  f09817: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.98:23450: i/o timeout
  f09828: 'dial, NR', // * [/ip4/192.168.0.9/tcp/24002] dial tcp4 0.0.0.0:36831->192.168.0.9:24002: i/o timeout
  f09830: 'dial, Korea, Geumcheon-gu', // * [/ip4/121.140.143.29/tcp/24002] dial tcp4 121.140.143.29:24002: connect: connection refused
  f09838: 'dial, Russia, Irkutsk', // * [/ip4/90.188.226.112/tcp/9555] dial tcp4 0.0.0.0:36831->90.188.226.112:9555: i/o timeout
  f09859: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f09969: 'dial, China, Guangzhou', // * [/ip4/183.2.157.250/tcp/1029] dial tcp4 183.2.157.250:1029: connect: connection refused
  f09972: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:36831->95.216.99.39:46717: i/o timeout
  f09983: 'dial, China, Guangzhou', // * [/ip4/183.2.157.214/tcp/888] dial tcp4 183.2.157.214:888: connect: connection refused
  f09985: 'dial, China, Qingdao', // * [/ip4/61.147.123.85/tcp/12223] dial tcp4 61.147.123.85:12223: connect: connection refused
  f010005: 'dial, China, Zhongshan', // * [/ip4/127.0.0.1/tcp/3000] dial tcp4 127.0.0.1:3000: connect: connection refused  * [/ip6/::1/tcp/41735] dial tcp6 [::1]:41735: connect: connection refused  * [/ip4/121.201.66.234/tcp/3000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWM8fTYQMxEygkYaf6atg9EkDeaoYKo5JKbxsZLE9CNcgU, but remote key matches 12D3KooWJgKCut3cCoY5g3Ko41eDxAQYRkh2X7u4VqKcNLJRqp2z
  f010015: 'dial, China, Taizhou', // * [/ip4/47.254.145.29/tcp/23456] dial tcp4 0.0.0.0:36831->47.254.145.29:23456: i/o timeout  * [/ip4/47.254.31.111/tcp/23456] dial tcp4 0.0.0.0:36831->47.254.31.111:23456: i/o timeout
  f010020: 'dial, China, Chongqing', // * [/ip4/113.207.109.184/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNXhxeBMqYPF56bZExJzcjeiHDaserGs7YYXNgLtLHVvS, but remote key matches 12D3KooWPw6phtaL2ftZq7wQLjc6z1YoVou4BK48ZzXk3TVNVPjK
  f010032: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.103:23450: i/o timeout
  f010035: 'dial, Netherlands', // * [/ip4/61.155.145.2/tcp/2347] dial tcp4 61.155.145.2:2347: connect: connection refused  * [/ip4/185.232.59.178/tcp/2347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJDvwMPfJ1ct9V6JpgRrdA7DWEEfcWSQAWCYbRrNxnXYi, but remote key matches 12D3KooWAVDE6eCogR3QYC44Ynb89Qyu5o1WjgFsA3bpWsZztGV8
  f010038: 'dial, China, Hangzhou + Singapore', // * [/ip4/170.33.12.166/tcp/39774] dial tcp4 0.0.0.0:36831->170.33.12.166:39774: i/o timeout
  f010063: 'dial, China, Mianyang', // * [/ip4/183.223.56.9/tcp/23456] dial tcp4 183.223.56.9:23456: connect: connection refused
  f010152: 'dial, Germany-cfa', // * [/ip4/116.202.129.161/tcp/10666] dial tcp4 116.202.129.161:10666: connect: connection refused
  f010170: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.109:23450: i/o timeout
  f010223: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12311] dial tcp4 0.0.0.0:36831->47.57.188.137:12311: i/o timeout
  f010224: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.102:23450: i/o timeout
  f010230: 'dial, China, Beijing', // * [/ip4/106.55.236.214/tcp/10022] failed to negotiate security protocol: read tcp4 66.70.191.245:36831->106.55.236.214:10022: read: connection reset by peer
  f010238: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23455] dial tcp4 110.80.33.138:23455: connect: connection refused
  f010268: 'dial, China, Hangzhou', // * [/ip4/47.57.8.77/tcp/8001] dial tcp4 0.0.0.0:36831->47.57.8.77:8001: i/o timeout
  f010270: 'dial, China, Shijiazhuang', // * [/ip4/111.224.179.91/tcp/2233] dial tcp4 0.0.0.0:36831->111.224.179.91:2233: i/o timeout
  f010274: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.99:23450: i/o timeout
  f010276: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f010287: 'dial, China, Fuzhou', // * [/ip4/182.99.0.97/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.97:23450: i/o timeout
  f010289: 'dial, China, Fuzhou', // * [/ip4/182.99.0.96/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.96:23450: i/o timeout
  f010291: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.98:23450: i/o timeout
  f010298: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.102:23450: i/o timeout
  f010299: 'dial, China, Yibin', // * [/ip4/101.206.243.3/tcp/39695] dial tcp4 101.206.243.3:39695: connect: connection refused
  f010308: 'dial, Germany, Frankfurt', // * [/ip4/45.137.217.231/tcp/6610] dial tcp4 45.137.217.231:6610: connect: connection refused
  f010311: 'dial, Korea, Hwaseong-si', // * [/ip4/106.255.239.43/tcp/24002] dial tcp4 0.0.0.0:36831->106.255.239.43:24002: i/o timeout
  f010362: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.35.11/tcp/46717] dial tcp4 0.0.0.0:36831->15.228.35.11:46717: i/o timeout
  f010372: 'dial, Brazil, Sao Paulo', // * [/ip4/52.67.22.220/tcp/46717] dial tcp4 0.0.0.0:36831->52.67.22.220:46717: i/o timeout
  f010374: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] dial tcp4 79.160.78.193:1347: connect: connection refused
  f010398: 'dial, Korea, Yeongdeungpo-dong', // * [/ip4/121.140.143.29/tcp/24002] dial tcp4 121.140.143.29:24002: connect: connection refused
  f010411: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f010424: 'dial, Australia, Sydney', // * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:36831->43.241.189.214:39438: i/o timeout
  f010449: 'dial, China, Jiangmen', // * [/ip4/183.36.3.160/tcp/60007] dial tcp4 183.36.3.160:60007: connect: connection refused
  f010496: 'dial, China, Guangzhou', // * [/ip4/183.2.157.213/tcp/666] dial tcp4 183.2.157.213:666: connect: connection refused
  f010516: 'dial, Brazil, Sao Paulo', // * [/ip4/18.230.25.100/tcp/18888] dial tcp4 0.0.0.0:36831->18.230.25.100:18888: i/o timeout
  f010527: 'dial, China, Shanghai', // * [/ip4/116.228.53.133/tcp/10240] failed to negotiate security protocol: unexpected EOF
  f010533: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12319] dial tcp4 0.0.0.0:36831->47.57.188.137:12319: i/o timeout
  f010541: 'dial, China, Chengdu', // * [/ip4/110.185.107.117/tcp/21736] dial tcp4 110.185.107.117:21736: connect: connection refused  * [/ip4/110.185.107.23/tcp/21735] dial tcp4 110.185.107.23:21735: connect: connection refused
  f010553: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12316] dial tcp4 0.0.0.0:36831->47.57.188.137:12316: i/o timeout
  f010579: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.194/tcp/23450] dial tcp4 45.192.184.194:23450: i/o timeout
  f010586: 'dial, China, Fuzhou', // * [/ip4/45.192.184.197/tcp/23450] dial tcp4 0.0.0.0:36831->45.192.184.197:23450: i/o timeout
  f010593: 'dial, USA, East Islip', // * [/ip6/2a0a:e5c1:17f::42/tcp/33823] dial tcp6 [2a0a:e5c1:17f::42]:33823: connect: network is unreachable  * [/ip4/74.88.128.118/tcp/55519] dial tcp4 0.0.0.0:36831->74.88.128.118:55519: i/o timeout  * [/ip4/74.88.128.118/tcp/41126] dial tcp4 0.0.0.0:36831->74.88.128.118:41126: i/o timeout
  f010598: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/10002] dial tcp4 99.250.201.0:10002: i/o timeout
  f010600: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f010606: 'dial, China, Fuzhou', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:36831->45.192.184.195:23450: i/o timeout
  f010607: 'dial, China, Guangzhou', // * [/ip4/8.210.76.199/tcp/18899] dial tcp4 0.0.0.0:36831->8.210.76.199:18899: i/o timeout
  f010608: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.101:23450: i/o timeout
  f010609: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/36666] dial tcp4 0.0.0.0:36831->182.99.0.100:36666: i/o timeout
  f010613: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/20002] dial tcp4 0.0.0.0:36831->99.250.201.0:20002: i/o timeout
  f014230: 'dial, China, Fuzhou', // * [/ip4/185.23.181.67/tcp/23450] dial tcp4 0.0.0.0:36831->185.23.181.67:23450: i/o timeout
  f014241: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] dial tcp4 79.160.78.193:1347: connect: connection refused
  f014246: 'dial, China, Shenzhen', // * [/ip4/103.40.249.212/tcp/44299] dial tcp4 0.0.0.0:36831->103.40.249.212:44299: i/o timeout
  f014248: 'dial, Turkey', // * [/ip4/185.23.180.67/tcp/23450] dial tcp4 185.23.180.67:23450: connect: no route to host
  f014259: 'dial, China, Fuzhou', // * [/ip4/45.192.184.193/tcp/23450] dial tcp4 0.0.0.0:36831->45.192.184.193:23450: i/o timeout
  f014279: 'dial, Finland, Helsinki', // * [/ip4/95.217.113.188/tcp/12345] dial tcp4 0.0.0.0:36831->95.217.113.188:12345: i/o timeout
  f014307: 'dial, China, Dongguan', // * [/ip4/218.16.123.133/tcp/4001] dial tcp4 218.16.123.133:4001: connect: connection refused
  f014311: 'dial, China, Ordos', // * [/ip4/162.62.55.44/tcp/12309] dial tcp4 162.62.55.44:12309: connect: connection refused
  f014328: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/10003] dial tcp4 99.250.201.0:10003: i/o timeout
  f014348: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.15.78/tcp/46717] dial tcp4 0.0.0.0:36831->15.228.15.78:46717: i/o timeout
  f014377: 'dial, China, Liaoning', // * [/ip4/116.132.221.24/tcp/42985] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAwSVUn5sTmPq1f64G1FfAt3ovRyJwzimCQtr5NQYG3Z7, but remote key matches 12D3KooWSFGYvbGeXwHPdLytmxkzFgfAzMXjgUPFzwkcVzNnfGvu
  f014379: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f014380: 'dial, China, Hangzhou + Wuhan + Singapore', // * [/ip4/170.33.12.186/tcp/7161] dial tcp4 0.0.0.0:36831->170.33.12.186:7161: i/o timeout  * [/ip4/170.33.12.78/tcp/7161] dial tcp4 0.0.0.0:36831->170.33.12.78:7161: i/o timeout
  f014382: 'dial, Singapore', // * [/ip4/115.236.22.154/tcp/7177] dial tcp4 115.236.22.154:7177: connect: connection refused
  f014392: 'dial, Russia, Khabarovsk + USA + Japan, Heiwajima', // * [/ip4/66.42.38.110/tcp/9990] failed to negotiate security protocol: read tcp4 66.70.191.245:36831->66.42.38.110:9990: read: connection reset by peer  * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: connection refused  * [/ip4/172.247.228.122/tcp/9999] dial tcp4 172.247.228.122:9999: connect: connection refused
  f014393: 'dial, China, Zhejiang', // * [/ip4/43.227.216.41/tcp/25677] failed to negotiate security protocol: read tcp4 66.70.191.245:36831->43.227.216.41:25677: read: connection reset by peer
  f014395: 'dial, China, Dongguan', // * [/ip4/218.16.49.241/tcp/41112] failed to negotiate security protocol: read tcp4 66.70.191.245:36831->218.16.49.241:41112: read: connection reset by peer
  f014415: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f014431: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/7185] dial tcp4 0.0.0.0:36831->170.33.12.186:7185: i/o timeout  * [/ip4/170.33.12.78/tcp/7185] dial tcp4 0.0.0.0:36831->170.33.12.78:7185: i/o timeout
  f014433: 'dial, Singapore', // * [/ip4/170.33.12.78/tcp/7193] dial tcp4 0.0.0.0:36831->170.33.12.78:7193: i/o timeout  * [/ip4/170.33.12.186/tcp/7193] dial tcp4 0.0.0.0:36831->170.33.12.186:7193: i/o timeout
  f014436: 'dial, China, Chengdu', // * [/ip4/125.69.0.37/tcp/55009] dial tcp4 125.69.0.37:55009: connect: connection refused
  f014440: 'dial, Hong Kong', // * [/ip4/45.113.32.179/tcp/6666] dial tcp4 45.113.32.179:6666: connect: connection refused
  f014481: 'dial, China, Shanghai', // * [/ip4/103.242.134.36/tcp/12288] failed to negotiate security protocol: read tcp4 66.70.191.245:36831->103.242.134.36:12288: read: connection reset by peer  * [/ip4/170.33.12.118/tcp/12345] dial tcp4 0.0.0.0:36831->170.33.12.118:12345: i/o timeout
  f014483: 'dial, USA, Clarksville', // * [/ip4/199.46.99.12/tcp/43801] dial tcp4 199.46.99.12:43801: connect: connection refused
  f014522: 'dial, China, Shanghai', // * [/ip4/81.68.170.164/tcp/5474] dial tcp4 81.68.170.164:5474: connect: connection refused
  f014547: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.100:23450: i/o timeout
  f014572: 'dial, USA', // * [/ip4/47.90.208.156/tcp/39706] dial tcp4 0.0.0.0:36831->47.90.208.156:39706: i/o timeout
  f014573: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.101:23450: i/o timeout
  f014606: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f014609: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.109:23450: i/o timeout
  f014632: 'dial, Canada', // * [/ip4/148.59.149.162/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGeBVKYsVXc7PcMCKtovVv5wztHSLmfMwWFKADV8wbj26, but remote key matches 12D3KooWKi8JTyGdSAL1TFpdF6gmyjXeMeknqNWT6Eft1cxrSzAq
  f014634: 'dial, USA, Boardman', // * [/ip4/54.148.63.7/tcp/10240] dial tcp4 0.0.0.0:36831->54.148.63.7:10240: i/o timeout
  f014640: 'dial, Hungary', // * [/ip4/87.229.53.110/tcp/44163] dial tcp4 0.0.0.0:36831->87.229.53.110:44163: i/o timeout
  f014644: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:36831->73.158.16.48:30390: i/o timeout
  f014683: 'dial, China, Shenzhen', // * [/ip4/103.220.72.230/tcp/41113] failed to negotiate security protocol: EOF
  f014744: 'dial, China, Taiyuan', // * [/ip4/1.71.191.196/tcp/33411] dial tcp4 0.0.0.0:36831->1.71.191.196:33411: i/o timeout
  f014778: 'dial, China, Ordos', // * [/ip4/162.62.55.44/tcp/12310] dial tcp4 162.62.55.44:12310: connect: connection refused
  f014782: 'dial, DNS:wlblock.io', // * [/ip4/18.166.30.112/tcp/3456] dial tcp4 18.166.30.112:3456: connect: connection refused
  f014786: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:36831->218.85.126.210:23450: i/o timeout
  f014798: 'dial, Brazil, Sao Paulo', // * [/ip4/18.228.119.165/tcp/5101] dial tcp4 0.0.0.0:36831->18.228.119.165:5101: i/o timeout
  f015231: 'dial, China, Wuxi', // * [/ip4/193.118.43.158/tcp/7090] failed to negotiate security protocol: EOF
  f015642: 'dial, China, Fuzhou', // * [/ip4/220.176.125.20/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.20:23450: i/o timeout
  f015643: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12317] dial tcp4 0.0.0.0:36831->47.57.188.137:12317: i/o timeout
  f015655: 'dial, Korea, Geumcheon-gu', // * [/ip4/121.140.143.29/tcp/24002] dial tcp4 121.140.143.29:24002: connect: connection refused
  f015662: 'dial, China, Beijing', // * [/ip4/203.93.121.130/tcp/38886] dial tcp4 203.93.121.130:38886: i/o timeout
  f015685: 'dial, China, Shanghai', // * [/ip4/222.64.141.185/tcp/40321] dial tcp4 222.64.141.185:40321: connect: connection refused
  f015714: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12318] dial tcp4 0.0.0.0:36831->47.57.188.137:12318: i/o timeout
  f015720: 'dial, China, Ningbo', // * [/ip4/149.28.89.24/tcp/7102] dial tcp4 149.28.89.24:7102: connect: connection refused  * [/ip4/141.164.50.170/tcp/7201] dial tcp4 0.0.0.0:36831->141.164.50.170:7201: i/o timeout  * [/ip4/45.32.19.57/tcp/7106] dial tcp4 0.0.0.0:36831->45.32.19.57:7106: i/o timeout  * [/ip4/45.77.89.14/tcp/7105] dial tcp4 0.0.0.0:36831->45.77.89.14:7105: i/o timeout  * [/ip4/45.77.72.195/tcp/7103] dial tcp4 0.0.0.0:36831->45.77.72.195:7103: i/o timeout  * [/ip4/104.156.230.123/tcp/7104] dial tcp4 0.0.0.0:36831->104.156.230.123:7104: i/o timeout  * [/ip4/155.138.144.135/tcp/7107] dial tcp4 0.0.0.0:36831->155.138.144.135:7107: i/o timeout
  f015726: 'dial, China, Qingdao', // * [/ip4/61.147.123.83/tcp/12222] dial tcp4 61.147.123.83:12222: connect: connection refused
  f015732: 'dial, USA, Portland', // * [/ip4/47.254.31.111/tcp/23456] dial tcp4 0.0.0.0:36831->47.254.31.111:23456: i/o timeout  * [/ip4/47.254.145.29/tcp/23456] dial tcp4 0.0.0.0:36831->47.254.145.29:23456: i/o timeout
  f015733: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12500] dial tcp4 0.0.0.0:36831->47.57.188.137:12500: i/o timeout
  f015756: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:36831->95.216.99.39:46717: i/o timeout
  f015757: 'dial, China, Hangzhou', // * [/ip4/103.46.128.45/tcp/57670] failed to negotiate security protocol: EOF
  f015760: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.53/tcp/7000] dial tcp4 197.231.176.53:7000: connect: connection refused
  f015777: 'dial, Australia, Sydney', // * [/ip4/52.63.43.218/tcp/8888] dial tcp4 0.0.0.0:36831->52.63.43.218:8888: i/o timeout
  f015795: 'dial, Brazil, Sao Paulo', // * [/ip4/18.230.133.57/tcp/8888] dial tcp4 0.0.0.0:36831->18.230.133.57:8888: i/o timeout
  f015797: 'dial, Germany, Rostock', // * [/ip4/46.4.101.121/tcp/443] dial tcp4 0.0.0.0:36831->46.4.101.121:443: i/o timeout
  f015798: 'dial, Germany', // * [/ip4/46.4.75.207/tcp/443] dial tcp4 46.4.75.207:443: connect: connection refused
  f015799: 'dial, Germany, Rostock', // * [/ip4/46.4.102.167/tcp/443] dial tcp4 46.4.102.167:443: connect: connection refused
  f015800: 'dial, Germany, Sankt Andreasberg', // * [/ip4/148.251.120.145/tcp/443] dial tcp4 148.251.120.145:443: connect: connection refused
  f015801: 'dial, Germany, Ismaning', // * [/ip4/88.198.66.42/tcp/443] dial tcp4 88.198.66.42:443: connect: connection refused
  f015802: 'dial, Germany', // * [/ip4/46.4.79.199/tcp/443] dial tcp4 46.4.79.199:443: connect: connection refused
  f015803: 'dial, Germany', // * [/ip4/46.4.79.213/tcp/443] dial tcp4 46.4.79.213:443: connect: connection refused
  f015804: 'dial, Germany, Ismaning', // * [/ip4/88.198.67.156/tcp/443] dial tcp4 88.198.67.156:443: connect: connection refused
  f015805: 'dial, Germany', // * [/ip4/46.4.79.214/tcp/443] dial tcp4 46.4.79.214:443: connect: connection refused
  f015806: 'dial, Germany', // * [/ip4/176.9.59.6/tcp/443] dial tcp4 176.9.59.6:443: connect: connection refused
  f015807: 'dial, Germany', // * [/ip4/46.4.79.203/tcp/443] dial tcp4 0.0.0.0:36831->46.4.79.203:443: i/o timeout
  f015808: 'dial, Germany', // * [/ip4/46.4.79.209/tcp/443] dial tcp4 46.4.79.209:443: connect: connection refused
  f015809: 'dial, Germany', // * [/ip4/46.4.87.88/tcp/443] dial tcp4 46.4.87.88:443: connect: connection refused
  f015810: 'dial, Germany', // * [/ip4/46.4.79.197/tcp/443] dial tcp4 46.4.79.197:443: connect: connection refused
  f015811: 'dial, Germany, Lanshut', // * [/ip4/138.201.12.247/tcp/443] dial tcp4 138.201.12.247:443: connect: connection refused
  f015812: 'dial, Germany', // * [/ip4/136.243.43.176/tcp/443] dial tcp4 136.243.43.176:443: connect: connection refused
  f015818: 'dial, Netherlands', // * [/ip4/66.248.204.121/tcp/2345] dial tcp4 0.0.0.0:36831->66.248.204.121:2345: i/o timeout
  f015819: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.5:23450: i/o timeout
  f015826: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.2:23450: i/o timeout
  f015839: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 220.176.125.3:23450: i/o timeout
  f015845: 'dial, China, Fuzhou', // * [/ip4/220.176.125.20/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.20:23450: i/o timeout
  f015846: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:36831->45.192.184.195:23450: i/o timeout
  f015852: 'dial, China, Fuzhou', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:36831->45.192.184.195:23450: i/o timeout
  f015855: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.4:23450: i/o timeout
  f015866: 'dial, China, Fuzhou', // * [/ip4/220.176.125.10/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.10:23450: i/o timeout
  f015872: 'dial, China, Fuzhou', // * [/ip4/45.192.184.205/tcp/23450] dial tcp4 0.0.0.0:36831->45.192.184.205:23450: i/o timeout
  f015873: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:36831->182.99.0.98:23450: i/o timeout
  f015884: 'dial, China, Fuzhou', // * [/ip4/45.192.184.203/tcp/23450] dial tcp4 0.0.0.0:36831->45.192.184.203:23450: i/o timeout
  f015887: 'dial, China, Fuzhou', // * [/ip4/45.192.184.201/tcp/23450] dial tcp4 0.0.0.0:36831->45.192.184.201:23450: i/o timeout
  f015888: 'dial, China, Fuzhou', // * [/ip4/45.192.184.207/tcp/23450] dial tcp4 0.0.0.0:36831->45.192.184.207:23450: i/o timeout
  f015894: 'dial, China, Fuzhou', // * [/ip4/45.192.184.199/tcp/23450] dial tcp4 0.0.0.0:36831->45.192.184.199:23450: i/o timeout
  f015898: 'dial, Lithuania', // * [/ip4/188.214.129.85/tcp/36899] dial tcp4 188.214.129.85:36899: connect: connection refused
  f015900: 'dial, Germany', // * [/ip4/46.4.63.227/tcp/443] dial tcp4 46.4.63.227:443: connect: connection refused
  f015901: 'dial, Germany', // * [/ip4/138.201.9.143/tcp/443] dial tcp4 0.0.0.0:36831->138.201.9.143:443: i/o timeout
  f015902: 'dial, Germany', // * [/ip4/188.40.133.181/tcp/443] dial tcp4 0.0.0.0:36831->188.40.133.181:443: i/o timeout
  f015903: 'dial, Germany', // * [/ip4/136.243.48.38/tcp/443] dial tcp4 0.0.0.0:36831->136.243.48.38:443: i/o timeout
  f015905: 'dial, Lithuania', // * [/ip4/188.214.129.49/tcp/34751] dial tcp4 0.0.0.0:36831->188.214.129.49:34751: i/o timeout
  f015907: 'dial, Canada, Calgary', // * [/ip4/70.77.238.98/tcp/46717] dial tcp4 70.77.238.98:46717: connect: connection refused
  f015910: 'dial, Turkey', // * [/ip4/185.23.181.67/tcp/23450] dial tcp4 0.0.0.0:36831->185.23.181.67:23450: i/o timeout
  f015918: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.2:23450: i/o timeout
  f015922: 'dial, China', // * [/ip4/162.62.55.44/tcp/12317] dial tcp4 162.62.55.44:12317: connect: connection refused
  f015926: 'dial, China', // * [/ip4/162.62.55.44/tcp/12319] dial tcp4 162.62.55.44:12319: connect: connection refused
  f015928: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.3:23450: i/o timeout
  f015933: 'dial, Finland, Helskinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:36831->95.216.99.39:46717: i/o timeout
  f015941: 'dial, Ukraine, Kyiv', // * [/ip4/176.37.167.219/tcp/1347] dial tcp4 176.37.167.219:1347: connect: connection refused
  f015947: 'dial, Finland, Helsinki', // * [/ip4/95.217.114.57/tcp/45381] dial tcp4 95.217.114.57:45381: connect: connection refused
  f016024: 'dial, China, Fuzhou', // * [/ip4/220.176.125.10/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.10:23450: i/o timeout
  f016202: 'dial, Korea, Songpa-gu', // * [/ip4/118.223.164.15/tcp/42155] dial tcp4 0.0.0.0:36831->118.223.164.15:42155: i/o timeout
  f016207: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused
  f016238: 'dial, NR', // * [/ip4/192.168.100.27/tcp/57670] dial tcp4 0.0.0.0:36831->192.168.100.27:57670: i/o timeout
  f016263: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f016279: 'dial, Finland, Helsinki', // * [/ip4/95.216.68.181/tcp/46717] dial tcp4 0.0.0.0:36831->95.216.68.181:46717: i/o timeout
  f016297: 'dial, China, Mianyang + USA', // * [/ip4/47.254.128.95/tcp/7000] dial tcp4 0.0.0.0:36831->47.254.128.95:7000: i/o timeout  * [/ip4/47.254.25.128/tcp/7000] dial tcp4 0.0.0.0:36831->47.254.25.128:7000: i/o timeout
  f016302: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.5:23450: i/o timeout
  f016364: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 36.33.216.70:10240: i/o timeout
  f016419: 'dial, USA, Mountain View', // * [/ip6/2601:647:4700:7e:b85f:e6cd:bc32:478f/tcp/44545] dial tcp6 [2601:647:4700:7e:b85f:e6cd:bc32:478f]:44545: connect: network is unreachable  * [/ip6/::1/tcp/44545] dial tcp6 [::1]:44545: connect: connection refused  * [/ip4/127.0.0.1/tcp/33585] dial tcp4 127.0.0.1:33585: connect: connection refused  * [/ip4/192.168.86.244/tcp/33585] dial tcp4 0.0.0.0:36831->192.168.86.244:33585: i/o timeout  * [/ip4/73.158.190.21/tcp/26715] dial tcp4 0.0.0.0:36831->73.158.190.21:26715: i/o timeout  * [/ip4/73.158.190.21/tcp/58442] dial tcp4 0.0.0.0:36831->73.158.190.21:58442: i/o timeout
  f016479: 'dial, China, Dongguan', // * [/ip4/218.16.123.133/tcp/4001] dial tcp4 218.16.123.133:4001: connect: connection refused
  f016509: 'dial, China, Fuzhou', // * [/ip4/220.249.190.57/tcp/44567] dial tcp4 0.0.0.0:36831->220.249.190.57:44567: i/o timeout  * [/ip4/10.25.40.61/tcp/40271] dial tcp4 0.0.0.0:36831->10.25.40.61:40271: i/o timeout
  f016525: 'dial, China, Guangzhou', // * [/ip4/8.210.76.199/tcp/18899] dial tcp4 0.0.0.0:36831->8.210.76.199:18899: i/o timeout
  f016579: 'dial, USA, Howell', // * [/ip4/96.64.7.172/tcp/5472] dial tcp4 96.64.7.172:5472: connect: connection refused
  f016603: 'dial, China, Dongguan', // * [/ip4/121.10.0.90/tcp/57670] dial tcp4 121.10.0.90:57670: connect: no route to host
  f016659: 'dial, USA, Alpharetta', // * [/ip4/192.168.1.64/tcp/41931] dial tcp4 0.0.0.0:36831->192.168.1.64:41931: i/o timeout
  f016850: 'dial, Japan', // * [/ip4/163.44.165.168/tcp/30333] dial tcp4 0.0.0.0:36831->163.44.165.168:30333: i/o timeout
  f016866: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.4:23450: i/o timeout
  f016917: 'dial, China, Guangdong', // * [/ip4/183.232.116.200/tcp/4001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQgQZKZbW7ZDVMspANNSfGkjqJxuWxc7WDauGoEJGvtXu, but remote key matches 12D3KooWPkML61uXkPFbnaSretqsS8qYmKkrfeEmnhGgfrfQ8UDY
  f017038: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.2:23450: i/o timeout
  f017067: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.3:23450: i/o timeout
  f017082: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.194/tcp/23450] dial tcp4 0.0.0.0:36831->45.192.184.194:23450: i/o timeout
  f017136: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f017193: 'dial, Singapore', // * [/ip4/8.211.49.16/tcp/14567] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAqdzpU6946afUESqGnf3GMo4YDojUasgPaG4djLhM8C3, but remote key matches 12D3KooWRoWj1PymQ5oEYrRqmHozWSjFJzHTsnqVkPRRgvj52Q8n
  f017194: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 36.33.216.70:10240: i/o timeout
  f017200: 'dial, Lithuania', // * [/ip4/46.166.165.72/tcp/10240] dial tcp4 0.0.0.0:36831->46.166.165.72:10240: i/o timeout
  f017229: 'dial, USA, Portland', // * [/ip4/118.116.2.60/tcp/6666] dial tcp4 118.116.2.60:6666: connect: connection refused
  f017242: 'dial, China, Guangdong', // * [/ip4/103.142.248.7/tcp/4347] dial tcp4 103.142.248.7:4347: connect: connection refused
  f017244: 'dial, Korea, Seoul', // * [/ip4/141.164.34.113/tcp/41111] dial tcp4 0.0.0.0:36831->141.164.34.113:41111: i/o timeout
  f017250: 'dial, China, Zhejiang', // * [/ip4/161.117.88.227/tcp/35252] failed to negotiate security protocol: read tcp4 66.70.191.245:36831->161.117.88.227:35252: read: connection reset by peer
  f017266: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.2:23450: i/o timeout
  f017273: 'dial, China, Liaoning', // * [/ip4/116.132.221.10/tcp/10241] dial tcp4 116.132.221.10:10241: connect: connection refused
  f017285: 'dial, China, Maoming', // * [/ip4/61.143.232.26/tcp/12345] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRt4eMiHrLrX5pkzkw7VWmxVKH6MEBUM9cY2Rkqdb4ZiM, but remote key matches 12D3KooWF3WXYfXSHjK3bqCJGA5LCXgEP67vwgdqYQgGs1HY9S7w
  f017488: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 35.224.87.15:24002: connect: connection refused
  f017635: 'dial, China, Nanchong', // * [/ip4/124.161.87.252/tcp/32005] dial tcp4 0.0.0.0:36831->124.161.87.252:32005: i/o timeout
  f017672: 'dial, China, Cangzhou', // * [/ip4/221.195.0.71/tcp/10240] dial tcp4 221.195.0.71:10240: connect: connection refused
  f017738: 'dial, China', // * [/ip4/101.36.64.212/tcp/42545] dial tcp4 101.36.64.212:42545: connect: connection refused
  f017796: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.4:23450: i/o timeout
  f018088: 'dial, USA, Mountain View', // * [/ip6/2601:647:4700:7e:8d28:74f1:99b6:9807/tcp/36371] dial tcp6 [2601:647:4700:7e:8d28:74f1:99b6:9807]:36371: connect: network is unreachable  * [/ip6/::1/tcp/36371] dial tcp6 [::1]:36371: connect: connection refused  * [/ip4/127.0.0.1/tcp/41941] dial tcp4 127.0.0.1:41941: connect: connection refused  * [/ip4/73.158.190.21/tcp/52286] dial tcp4 0.0.0.0:36831->73.158.190.21:52286: i/o timeout  * [/ip4/73.158.190.21/tcp/39083] dial tcp4 0.0.0.0:36831->73.158.190.21:39083: i/o timeout  * [/ip4/192.168.86.244/tcp/41941] dial tcp4 0.0.0.0:36831->192.168.86.244:41941: i/o timeout
  f018119: 'dial, China, Dongguan', // * [/ip4/113.105.174.9/tcp/10000] dial tcp4 0.0.0.0:36831->113.105.174.9:10000: i/o timeout
  f018203: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/5678] dial tcp4 0.0.0.0:36831->95.216.99.39:5678: i/o timeout
  f018429: 'dial, Korea, Hwaseong-si', // * [/ip4/112.222.105.76/tcp/24102] dial tcp4 112.222.105.76:24102: i/o timeout
  f018440: 'dial, Russia, St. Petersburg', // * [/ip4/188.187.61.69/tcp/44389] dial tcp4 188.187.61.69:44389: connect: connection refused
  f018464: 'dial, Sweden, Stockholm', // * [/ip4/85.30.30.76/tcp/38387] dial tcp4 0.0.0.0:36831->85.30.30.76:38387: i/o timeout
  f018476: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.4:23450: i/o timeout
  f018493: 'dial, Denmark, Kobenhavn S', // * [/ip4/185.50.195.183/tcp/10243] dial tcp4 0.0.0.0:36831->185.50.195.183:10243: i/o timeout
  f018498: 'dial, Singapore', // * [/ip4/8.209.119.18/tcp/14567] failed to negotiate security protocol: EOF
  f018506: 'dial, USA, New York', // * [/ip4/47.254.77.92/tcp/41112] failed to negotiate security protocol: EOF
  f018509: 'dial, China, Dongguan', // * [/ip4/113.105.174.6/tcp/10000] dial tcp4 0.0.0.0:36831->113.105.174.6:10000: i/o timeout
  f018525: 'dial, USA, Queens', // * [/ip4/24.90.181.106/tcp/24002] dial tcp4 24.90.181.106:24002: i/o timeout
  f018540: 'dial, Netherlands', // * [/ip4/185.232.59.178/tcp/3347] dial tcp4 185.232.59.178:3347: connect: connection refused
  f018544: 'dial, Korea, Uijeongbu-si', // * [/ip4/119.193.190.72/tcp/5472] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGgihyz3aZvtSpXyZLtarqMxESor6KXzEp3poz8DRwTuZ, but remote key matches 12D3KooWBhrQUQC5gWtHeRNS1V7ThxEv4hKLCk8Z4PZNy7T1oruT
  f018562: 'dial, New Zealand, Masterton', // * [/ip4/121.99.224.109/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWC9jegSfiHcei2BeABkn1PA164oQ7kpx2AQ12ix136988, but remote key matches 12D3KooWNobH75Kmsr4LhtLbWXpViuRoqtiPUcso2VutUQc4TrtL  * [/ip4/121.99.224.109/tcp/10241] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWC9jegSfiHcei2BeABkn1PA164oQ7kpx2AQ12ix136988, but remote key matches 12D3KooWDcBfXqrBJvVEZZNfu41waaD2rLDM1H5xNBTJEMu5iec5
  f018803: 'dial, Korea, Seodaemun-gu', // * [/ip4/127.0.0.1/tcp/2345] dial tcp4 127.0.0.1:2345: connect: connection refused  * [/ip4/119.192.136.11/tcp/12345] dial tcp4 119.192.136.11:12345: connect: connection refused
  f018806: 'dial, Finland, Helsinki', // * [/ip4/95.217.114.57/tcp/45381] dial tcp4 95.217.114.57:45381: connect: connection refused
  f018809: 'dial, USA, New York', // * [/ip4/45.61.255.20/tcp/41114] dial tcp4 0.0.0.0:36831->45.61.255.20:41114: i/o timeout
  f018851: 'dial, China, Deyang + Singapore', // * [/ip4/103.242.134.36/tcp/12288] failed to negotiate security protocol: read tcp4 66.70.191.245:36831->103.242.134.36:12288: read: connection reset by peer
  f018905: 'dial, Brazil, Sao Paulo', // * [/ip4/18.228.17.31/tcp/2347] dial tcp4 0.0.0.0:36831->18.228.17.31:2347: i/o timeout
  f018911: 'dial, USA, Portland', // * [/ip4/170.33.12.164/tcp/9090] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPMgigioxtnUsBqwBemuuxjZLKKpfhT3FmrWumyWDkQEd, but remote key matches 12D3KooWDkgbKexne42yFhovBdv7dEnZA4XpXYchEQpvEKpg2qTJ
  f019002: 'dial, USA', // * [/ip4/47.245.132.152/tcp/14567] failed to negotiate security protocol: EOF
  f019006: 'dial, Vietman, Ho Chi Minh City + China, Hong Kong', // * [/ip4/119.28.141.16/tcp/2312] failed to negotiate security protocol: read tcp4 66.70.191.245:36831->119.28.141.16:2312: read: connection reset by peer
  f019007: 'dial, China, Shenzhen + Hong Kong', // * [/ip4/154.91.38.15/tcp/51109] dial tcp4 154.91.38.15:51109: connect: connection refused  * [/ip4/103.44.247.132/tcp/51109] dial tcp4 103.44.247.132:51109: connect: connection refused
  f019015: 'dial, China, Hangzhou + Singapore', // * [/ip4/170.33.12.187/tcp/7087] dial tcp4 0.0.0.0:36831->170.33.12.187:7087: i/o timeout  * [/ip4/170.33.12.188/tcp/7087] dial tcp4 0.0.0.0:36831->170.33.12.188:7087: i/o timeout
  f019053: 'dial, Singapore', // * [/ip4/8.211.4.148/tcp/10243] failed to negotiate security protocol: EOF
  f019056: 'dial, South Africa, Cape Town', // * [/ip4/13.244.216.178/tcp/16079] dial tcp4 0.0.0.0:36831->13.244.216.178:16079: i/o timeout
  f019068: "dial, China, Ya'an, fri", // * [/ip4/110.188.25.2/tcp/30032] dial tcp4 110.188.25.2:30032: connect: connection refused
  f019071: 'dial, USA, New York', // * [/ip4/45.61.255.21/tcp/12345] dial tcp4 0.0.0.0:36831->45.61.255.21:12345: i/o timeout
  f019073: 'dial, Germany, Frankfurt', // * [/ip4/18.157.80.183/tcp/30005] dial tcp4 0.0.0.0:36831->18.157.80.183:30005: i/o timeout
  f019087: 'dial, South Africa, Johannesburg', // * [/ip4/152.32.140.119/tcp/41116] failed to negotiate security protocol: EOF
  f019091: 'dial, China, Chengdu', // * [/ip4/182.131.4.194/tcp/10080] dial tcp4 182.131.4.194:10080: connect: connection refused
  f019094: 'dial, Brazil, Sao Paulo', // * [/ip4/177.71.173.122/tcp/8888] dial tcp4 0.0.0.0:36831->177.71.173.122:8888: i/o timeout
  f019097: 'dial, Russia, Irkutsk', // * [/ip4/90.188.227.20/tcp/46717] dial tcp4 0.0.0.0:36831->90.188.227.20:46717: i/o timeout
  f019133: 'dial, UK, Mansfield', // * [/ip4/92.12.185.10/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWL32qEddGqFsGb4qRxsWU8SDui74CokWWjoJQkM2Jtiei, but remote key matches 12D3KooWRMkEKDH3eBiuYZcDMkZcfwLNBjATfUfMr2g7PyJefudw
  f019145: 'dial, Brazil, Sao Paulo', // * [/ip4/54.232.153.175/tcp/16088] dial tcp4 0.0.0.0:36831->54.232.153.175:16088: i/o timeout
  f019150: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.4:23450: i/o timeout
  f019155: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15110] dial tcp4 0.0.0.0:36831->101.206.156.204:15110: i/o timeout
  f019169: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.40.58/tcp/14567] dial tcp4 0.0.0.0:36831->15.228.40.58:14567: i/o timeout
  f019182: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15111] dial tcp4 0.0.0.0:36831->101.206.156.204:15111: i/o timeout
  f019185: 'dial, China, Beijing', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f019196: 'dial, China, Shenzhen + Hong Kong', // * [/ip4/103.44.247.132/tcp/51101] dial tcp4 103.44.247.132:51101: connect: connection refused  * [/ip4/115.91.38.15/tcp/51101] dial tcp4 0.0.0.0:36831->115.91.38.15:51101: i/o timeout
  f019233: 'dial, Russia', // * [/ip4/158.255.7.196/tcp/46207] dial tcp4 0.0.0.0:36831->158.255.7.196:46207: i/o timeout
  f019248: 'dial, USA, Council Bluffs', // * [/ip4/35.239.142.4/tcp/46717] dial tcp4 0.0.0.0:36831->35.239.142.4:46717: i/o timeout
  f019249: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 35.224.87.15:24002: connect: connection refused
  f019279: 'dial, Canada, Calgary', // * [/ip4/70.77.238.98/tcp/46717] dial tcp4 70.77.238.98:46717: connect: connection refused
  f019280: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 220.176.125.4:23450: i/o timeout
  f019281: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:36831->45.192.184.195:23450: i/o timeout
  f019317: 'dial, Brazil, Sao Paulo', // * [/ip4/177.71.163.156/tcp/10240] dial tcp4 0.0.0.0:36831->177.71.163.156:10240: i/o timeout
  f019325: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15090] dial tcp4 0.0.0.0:36831->101.206.156.204:15090: i/o timeout
  f019326: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15093] dial tcp4 0.0.0.0:36831->101.206.156.204:15093: i/o timeout
  f019327: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15094] dial tcp4 0.0.0.0:36831->101.206.156.204:15094: i/o timeout
  f019352: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15095] dial tcp4 0.0.0.0:36831->101.206.156.204:15095: i/o timeout
  f019459: 'dial, USA, Alpharetta', // * [/ip4/45.26.152.112/tcp/4137] dial tcp4 45.26.152.112:4137: connect: connection refused
  f019462: 'dial, Netherlands, Groningen', // * [/ip4/34.90.112.11/tcp/46717] dial tcp4 0.0.0.0:36831->34.90.112.11:46717: i/o timeout
  f019515: 'dial, Netherlands, Groningen', // * [/ip4/35.204.3.95/tcp/46717] dial tcp4 0.0.0.0:36831->35.204.3.95:46717: i/o timeout
  f019523: 'dial, USA, Los Angeles', // * [/ip4/47.156.151.169/tcp/33505] dial tcp4 0.0.0.0:36831->47.156.151.169:33505: i/o timeout
  f019551: 'dial, UK', // * [/ip6/2a04:7340:0:1002::205/tcp/1347] dial tcp6 [2a04:7340:0:1002::205]:1347: connect: network is unreachable  * [/ip4/185.37.216.70/tcp/1347] dial tcp4 185.37.216.70:1347: connect: connection refused
  f019596: 'dial, USA, Queens', // * [/ip4/24.90.181.106/tcp/24002] dial tcp4 24.90.181.106:24002: i/o timeout
  f019637: 'dial, China, Nanchang', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.4:23450: i/o timeout
  f019660: 'dial, South Korea, Cheonan', // * [/ip4/112.167.204.88/tcp/10241] dial tcp4 112.167.204.88:10241: connect: connection refused
  f019779: 'dial, China, Xuancheng', // * [/ip4/117.71.104.68/tcp/10000] dial tcp4 117.71.104.68:10000: connect: connection refused
  f020223: 'dial, China, Guiyang', // * [/ip4/111.85.176.10/tcp/10240] dial tcp4 0.0.0.0:36831->111.85.176.10:10240: i/o timeout
  f020330: 'dial, USA', // * [/ip4/10.10.33.155/tcp/14567] dial tcp4 0.0.0.0:36831->10.10.33.155:14567: i/o timeout
  f020331: 'dial, USA', // * [/ip4/10.10.11.81/tcp/14567] dial tcp4 0.0.0.0:36831->10.10.11.81:14567: i/o timeout
  f020358: 'dial, China, Xinxiang', // * [/ip4/27.50.142.73/tcp/1347] dial tcp4 27.50.142.73:1347: connect: connection refused
  f020378: 'dial, Bulgaria, Asenovgrad', // * [/ip4/212.116.128.10/tcp/24001] dial tcp4 212.116.128.10:24001: connect: connection refused
  f020388: 'dial, Korea, Uijeongbu-si', // * [/ip4/119.193.190.72/tcp/5472] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPdmxWWt6PobzkuCgUsUZwyDYM9TGnvAu38rnd4TshTLZ, but remote key matches 12D3KooWBhrQUQC5gWtHeRNS1V7ThxEv4hKLCk8Z4PZNy7T1oruT
  f020393: 'dial, China, Beijing', // * [/ip4/123.125.194.158/tcp/6789] dial tcp4 123.125.194.158:6789: connect: connection refused
  f020401: 'dial, USA, Raleigh', // * [/ip4/136.56.12.204/tcp/27972] dial tcp4 136.56.12.204:27972: i/o timeout
  f020431: 'dial, Korea, Seoul', // * [/ip4/125.128.51.180/tcp/24001] dial tcp4 125.128.51.180:24001: i/o timeout
  f020436: 'dial, China, Beijing', // * [/ip4/222.129.193.213/tcp/24002] dial tcp4 222.129.193.213:24002: connect: connection refused
  f020452: 'dial, China, Hangzhou + Singapore', // * [/ip4/170.33.12.186/tcp/17012] dial tcp4 0.0.0.0:36831->170.33.12.186:17012: i/o timeout
  f020516: 'dial, China, Dalian', // * [/ip4/42.202.134.189/tcp/33666] dial tcp4 0.0.0.0:36831->42.202.134.189:33666: i/o timeout
  f020572: 'dial, China, Nanchang', // * [/ip4/220.176.125.123/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.123:23450: i/o timeout
  f020622: 'dial, China, Hong Kong', // * [/ip4/43.228.183.102/tcp/40573] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHF5unBQ9CuS2jnnxCzvRHGiMMQbH487tbfoGUAvhY4ik, but remote key matches 12D3KooWQzhuFoqWfap5FT3hD9jTSc1wiP3Sn735mstACYiPuw75
  f020626: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:36831->73.158.16.48:30390: i/o timeout
  f020631: 'dial, China, Zhejiang', // * [/ip4/47.102.202.230/tcp/5472] dial tcp4 47.102.202.230:5472: connect: connection refused
  f020691: 'dial, NR', // * [/ip4/127.0.0.1/tcp/34151] dial tcp4 127.0.0.1:34151: connect: connection refused  * [/ip6/::1/tcp/34545] dial tcp6 [::1]:34545: connect: connection refused  * [/ip4/115.231.235.143/tcp/34151] dial tcp4 115.231.235.143:34151: connect: connection refused  * [/ip4/192.168.97.102/tcp/34151] dial tcp4 0.0.0.0:36831->192.168.97.102:34151: i/o timeout
  f020771: 'dial, Japan, Setagaya-ku', // * [/ip4/59.138.253.69/tcp/55555] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWB9hQuvFTwgPe23wsd8tmLGpYF9aXjTy8brZjndR3Ubxv, but remote key matches 12D3KooWLmKkqK47NBUy32s67r1ayuvsYkpvsKiEDZUvEAWahX1W
  f020814: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/11051] dial tcp4 183.63.203.161:11051: i/o timeout
  f020816: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/11052] dial tcp4 183.63.203.161:11052: i/o timeout
  f020891: 'dial, China, Wenzhou', // * [/ip4/122.228.196.208/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSitZhuvzGB9mxZvC1rN6ubezTJUrHV2nXxWaBvJQ1Bji, but remote key matches 12D3KooWDLC4HXzHjaMegLssFx9HwMmyNzhGc4XmcSSP9rZaSFyv
  f020923: 'dial, China, Cangzhou', // * [/ip4/221.195.3.147/tcp/10240] dial tcp4 0.0.0.0:36831->221.195.3.147:10240: i/o timeout
  f020967: 'dial, China, Chengdu', // * [/ip4/171.221.236.129/tcp/45001] dial tcp4 171.221.236.129:45001: i/o timeout
  f021142: 'dial, China, Fuzhou', // * [/ip4/220.176.125.110/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.110:23450: i/o timeout
  f021274: 'dial, China, Shanghai', // * [/ip6/240e:388:e11:3500:2ef0:5dff:fe40:5e30/tcp/41071] dial tcp6 [240e:388:e11:3500:2ef0:5dff:fe40:5e30]:41071: connect: network is unreachable  * [/ip4/127.0.0.1/tcp/42937] dial tcp4 127.0.0.1:42937: connect: connection refused  * [/ip6/::1/tcp/41071] dial tcp6 [::1]:41071: connect: connection refused  * [/ip4/58.33.161.23/tcp/42937] dial tcp4 0.0.0.0:36831->58.33.161.23:42937: i/o timeout
  f021292: 'dial, China, Hong Kong', // * [/ip4/43.228.183.102/tcp/40573] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKztv937mFfnZpXpHnJP7DFTSMeeJrwjktcs5oSvNmfPN, but remote key matches 12D3KooWQzhuFoqWfap5FT3hD9jTSc1wiP3Sn735mstACYiPuw75
  f021428: 'dial, Norway, Borgen', // * [/ip4/79.160.78.193/tcp/1347] dial tcp4 79.160.78.193:1347: connect: connection refused
  f021461: 'dial, China, Yangzhou + Singapore', // * [/ip4/170.33.12.186/tcp/17361] dial tcp4 0.0.0.0:36831->170.33.12.186:17361: i/o timeout
  f021463: 'dial, China, Mianyang', // * [/ip4/117.175.0.194/tcp/18181] dial tcp4 0.0.0.0:36831->117.175.0.194:18181: i/o timeout
  f021475: 'dial, China, Dongguan', // * [/ip4/183.240.203.136/tcp/34567] dial tcp4 183.240.203.136:34567: connect: connection refused
  f021483: 'dial, China, Beijing', // * [/ip4/124.250.42.202/tcp/24567] dial tcp4 124.250.42.202:24567: connect: connection refused
  f021616: 'dial, China, Shanghai', // * [/ip6/240e:388:e11:3500:2ef0:5dff:fe40:61b6/tcp/37879] dial tcp6 [240e:388:e11:3500:2ef0:5dff:fe40:61b6]:37879: connect: network is unreachable  * [/ip4/127.0.0.1/tcp/42117] dial tcp4 127.0.0.1:42117: connect: connection refused  * [/ip6/::1/tcp/37879] dial tcp6 [::1]:37879: connect: connection refused  * [/ip4/58.33.161.26/tcp/24001] dial tcp4 0.0.0.0:36831->58.33.161.26:24001: i/o timeout  * [/ip4/58.33.161.26/tcp/42117] dial tcp4 0.0.0.0:36831->58.33.161.26:42117: i/o timeout
  f021644: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:36831->73.158.16.48:30390: i/o timeout
  f022069: 'dial, China, Hong Kong', // * [/ip4/221.127.8.183/tcp/24001] dial tcp4 0.0.0.0:36831->221.127.8.183:24001: i/o timeout
  f022111: 'dial, China, Quanzhou', // * [/ip4/112.47.13.98/tcp/8081] dial tcp4 112.47.13.98:8081: connect: connection refused
  f022142: 'dial, USA, Queens', // * [/ip4/24.90.181.106/tcp/24002] dial tcp4 24.90.181.106:24002: i/o timeout
  f022144: 'dial, China, Fuzhou', // * [/ip4/220.176.125.110/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.110:23450: i/o timeout
  f022146: 'dial, China, Fuzhou', // * [/ip4/220.176.125.123/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.123:23450: i/o timeout
  f022157: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:36831->220.176.125.5:23450: i/o timeout
  f022166: 'dial, Norway, Borgen', // * [/ip4/79.160.78.193/tcp/1347] dial tcp4 79.160.78.193:1347: connect: connection refused
  f022304: 'dial, China, Taiyuan', // * [/ip4/221.204.177.81/tcp/2222] dial tcp4 221.204.177.81:2222: connect: connection refused
  f022320: 'dial, Korea, Seoul', // * [/ip4/220.119.37.150/tcp/24001] dial tcp4 0.0.0.0:36831->220.119.37.150:24001: i/o timeout
  f022351: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.97/tcp/24001] dial tcp4 211.114.218.97:24001: connect: connection refused
  f022352: 'dial, Norway, Borgen', // * [/ip4/79.160.78.193/tcp/1347] dial tcp4 79.160.78.193:1347: connect: connection refused
  f022364: 'dial, Korea, Jungang-gu', // * [/ip4/125.129.37.73/tcp/10241] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPeUhT58UnaGom7QL13Hr45ij7yHzvAgrNQoEyjyyPG4o, but remote key matches 12D3KooWLrJH5TW2fnh6Z5JFq3mNX34CXHNsEhSXzBCsnbK3GBSV
  f022405: 'dial, Russia', // * [/ip4/158.255.7.196/tcp/46175] dial tcp4 0.0.0.0:36831->158.255.7.196:46175: i/o timeout
  f022518: 'dial, DNS:poseidon.technology', // * [/ip4/36.226.65.178/tcp/24000] dial tcp4 36.226.65.178:24000: connect: connection refused
  f022566: 'dial, China, Nanchong', // * [/ip4/221.10.143.25/tcp/32005] dial tcp4 221.10.143.25:32005: connect: connection refused
  f022687: 'dial, China, Chengdu', // * [/ip4/182.131.4.194/tcp/10080] dial tcp4 182.131.4.194:10080: connect: connection refused
  f022737: 'dial, Korea, Gangnum-gu', // * [/ip4/112.216.168.43/tcp/20000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPDeMQg1GK1w8NAnaPS2Pq3DytpW2DZtvQQKA9UheEWAT, but remote key matches 12D3KooWPBwquKY3asxootDXttSQfAUrvotFvv8suATHk2NtRNK6
  f022748: 'dial, China, Xinyang', // * [/ip4/8.209.114.206/tcp/48932] dial tcp4 0.0.0.0:36831->8.209.114.206:48932: i/o timeout
  f022913: 'dial, Korea, Uiwang', // * [/ip4/211.170.25.239/tcp/8888] dial tcp4 211.170.25.239:8888: connect: connection refused
  f022930: 'dial, NR', // * [/ip4/61.147.117.66/tcp/2048] dial tcp4 61.147.117.66:2048: connect: connection refused  * [/ip4/61.147.117.66/tcp/2049] dial tcp4 61.147.117.66:2049: connect: connection refused  * [/ip4/61.147.117.66/tcp/2050] dial tcp4 61.147.117.66:2050: connect: connection refused  * [/ip4/172.16.5.111/tcp/7000] dial tcp4 0.0.0.0:36831->172.16.5.111:7000: i/o timeout
  f022976: 'dial, Korea, Cheongju-si', // * [/ip4/112.167.204.88/tcp/10241] dial tcp4 112.167.204.88:10241: connect: connection refused
  f023016: 'dial, NR', // * [/ip4/10.6.1.121/tcp/61121] dial tcp4 0.0.0.0:36831->10.6.1.121:61121: i/o timeout
  f023181: 'dial, DNS:poseidon.technology', // * [/ip4/140.113.194.250/tcp/24002] dial tcp4 140.113.194.250:24002: connect: connection refused
  f023190: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 36.33.216.70:10240: connect: no route to host
  f023205: 'dial, NR', // * [/ip4/10.10.33.154/tcp/14567] dial tcp4 0.0.0.0:36831->10.10.33.154:14567: i/o timeout
  f023463: 'dial, NR', // * [/ip4/192.168.20.201/tcp/7000] dial tcp4 0.0.0.0:36831->192.168.20.201:7000: i/o timeout  * [/ip4/175.6.250.70/tcp/7000] dial tcp4 0.0.0.0:36831->175.6.250.70:7000: i/o timeout
  f023490: 'dial, Ukraine, Kyiv', // * [/ip4/91.224.25.51/tcp/6671] dial tcp4 0.0.0.0:36831->91.224.25.51:6671: i/o timeout
  f023549: 'dial, China, Zhejiang', // * [/ip4/47.102.202.230/tcp/5472] dial tcp4 47.102.202.230:5472: connect: connection refused
  f023586: 'dial, USA, Germantown', // * [/ip4/96.255.216.221/tcp/23432] dial tcp4 0.0.0.0:36831->96.255.216.221:23432: i/o timeout
  f023626: 'dial, NR', // * [/ip4/127.0.0.1/tcp/16666] dial tcp4 127.0.0.1:16666: connect: connection refused  * [/ip4/218.95.223.218/tcp/16666] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWL8nYxV1hdAE6UPmLQYx9bFqgWiuw1ywB34Kj9RdKpovE, but remote key matches 12D3KooWFfzMAYSZN8aULv4cYwHtqGft17DUTJo14VyLJTEkQE7u  * [/ip4/10.121.0.2/tcp/16666] dial tcp4 0.0.0.0:36831->10.121.0.2:16666: i/o timeout
  f023654: 'dial, China, Hong Kong', // * [/ip4/103.100.152.118/tcp/24001] dial tcp4 0.0.0.0:36831->103.100.152.118:24001: i/o timeout
  f023655: 'dial, Australia, Brisbane', // * [/ip4/144.137.18.224/tcp/54321] dial tcp4 144.137.18.224:54321: i/o timeout
  f023674: 'dial, China, Fuzhou', // * [/ip4/220.176.125.99/tcp/23450] dial tcp4 220.176.125.99:23450: connect: connection refused
  f023937: 'dial, China, Fuzhou', // * [/ip4/220.176.125.99/tcp/23450] dial tcp4 220.176.125.99:23450: connect: connection refused
  f024030: 'dial, Korea, Gwangju', // * [/ip4/121.148.37.39/tcp/42055] dial tcp4 121.148.37.39:42055: connect: connection refused
  f024066: 'dial, NR', // * [/ip4/182.131.4.197/tcp/10080] dial tcp4 182.131.4.197:10080: connect: connection refused
  f024108: 'dial, Korea', // * [/ip4/59.23.202.120/tcp/23234] dial tcp4 59.23.202.120:23234: connect: connection refused
  f024190: 'dial, China, Wenzhou', // * [/ip4/122.228.196.208/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQHPkEDKyJHgsVzg8t8WA59AuGYbazD2hDMktKJHBJVc6, but remote key matches 12D3KooWDLC4HXzHjaMegLssFx9HwMmyNzhGc4XmcSSP9rZaSFyv

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
  f07709: 'xnr, Korea, Dongjak-gu',
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
  f014569: 'xnr, NR',
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
  f017665: 'xnr, China, Shenyang',
  f017722: 'xnr, NR',
  f017747: 'xnr, NR',
  f017793: 'xnr, NR',
  f017970: 'xnr, China, Baoding',
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
  f019824: 'xnr, USA',
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
  f020975: 'xnr, China, Shandong',
  f021069: 'xnr, USA',
  f021083: 'xnr, NR',
  f021092: 'xnr, NR',
  f021095: 'xnr, NR',
  f021254: 'xnr, NR',
  f021286: 'xnr, China, Shaanxi',
  f021307: 'xnr, China, Chengdu',
  f021311: 'xnr, NR',
  f021337: 'xnr, China, Beijing',
  f021346: 'xnr, China, Shanghai',
  f021357: 'xnr, China, Shanghai',
  f021418: 'xnr, NR',
  f021494: 'xnr, NR',
  f021500: 'xnr, NR',
  f021504: 'xnr, NR',
  f021505: 'xnr, NR',
  f021509: 'xnr, China, Fuzhou',
  f021527: 'xnr, NR',
  f021555: 'xnr, NR',
  f021574: 'xnr, NR',
  f021580: 'xnr, NR',
  f021684: 'xnr, NR',
  f021699: 'xnr, NR',
  f021704: 'xnr, NR',
  f021725: 'xnr, NR',
  f021961: 'xnr, NR',
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
  f022361: 'xnr, NR',
  f022372: 'xnr, China, Chengdu',
  f022374: 'xnr, NR',
  f022494: 'xnr, China, Dongguan',
  f022501: 'xnr, Japan, Osaka',
  f022503: 'xnr, NR',
  f022505: 'xnr, China, Shanghai',
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
  f022967: 'xnr, Korea, Seoul',
  f022970: 'xnr, NR',
  f022996: 'xnr, NR',
  f023001: 'xnr, China, Changsha',
  f023021: 'xnr, Korea, Yeongdeungpo-dong',
  f023159: 'xnr, NR',
  f023198: 'xnr, NR',
  f023207: 'xnr, undefined',
  f023210: 'xnr, China, Dongguan',
  f023219: 'xnr, NR',
  f023482: 'xnr, NR',
  f023499: 'xnr, NR',
  f023505: 'xnr, NR',
  f023535: 'xnr, China, Hong Kong',
  f023560: 'xnr, NR',
  f023568: 'xnr, NR',
  f023651: 'xnr, NR',
  f023798: 'xnr, China, Shanghai',
  f023801: 'xnr, China, Dongguan',
  f023881: 'xnr, China, Fuzhou',
  f023965: 'xnr, NR',
  f024031: 'xnr, NR',
  f024089: 'xnr, NR',
  f024137: 'xnr, NR',
  f024165: 'xnr, NR',
  f024483: 'xnr, NR',
  f024511: 'xnr, NR'
}

export default annotations
