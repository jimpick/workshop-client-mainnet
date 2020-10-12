// Slingshot test results
//
// Additional testing with files > 128MiB in size

const annotations = {
  // Retest

  f08285: 'retest, Latvia, Riga, stander', // client node out of gas

  // Candidates

  f01782: "candidate, China, Hong Kong + Singapore + USA, Portland, hellofil.com",
  f02654: "candidate, China, Shanghai",
  f03340: "candidate, China, Xi'an",
  f07709: "candidate, Korea, Dongjak-gu",
  f08019: "candidate, China, Yantai, 三合",
  f09639: "candidate, China, Fuzhou",
  f010035: "candidate, Netherlands",
  f010247: "candidate, China, Yantai",
  f010512: "candidate, China, Zhengzhou",
  f014324: "candidate, Canada, Vancouver",
  f015734: "candidate, China, Qingdao",
  f019362: "candidate, China, Hangzhou",
  f019551: "candidate, UK",
  f020436: "candidate, China, Beijing",
  f021274: "candidate, China, Shanghai",
  f021339: "candidate, China, Jiaxing",
  f021346: "candidate, China, Shanghai",
  f021357: "candidate, China, Shanghai",
  f021532: "candidate, China, Shanghai",
  f022287: "candidate, China, Dongguan",
  f023152: "candidate, China, Quanzhou",
  f023492: "candidate, China, Beijing",
  f024030: "candidate, Korea, Gwangju",
  f024130: "candidate, Korea",
  f024944: "candidate, Korea, Yeongdeungpo-dong",
  f029529: "candidate, China, Dongguan",
  f029556: "candidate, China, Wuxi",
  f029566: "candidate, NR",
  f029587: "candidate, Hungary",
  f030296: "candidate, USA, Cary",
  f030327: "candidate, China, Beijing",
  f030335: "candidate, China, Fujian",
  f030338: "candidate, USA, Santa Fe Springs",
  f030347: "candidate, China, Zhejiang",
  f030379: "candidate, Korea, Uiwang",
  f030391: "candidate, China, Chengdu",
  f030518: "candidate, China, Wuhan",
  f030641: "candidate, China, Shaanxi",


  // Testing

  f019661: 'testing, Russia, Pyatigorsk',
  f030184: 'testing, USA, Aliquippa',

  // Active

  f01152: 'active, China, Beijing',
  f01234: 'active, Belgium, De Klinge, Eliovp',
  f01238: 'active, Vietnam, Hanoi, FILECOIN-VIETNAM',
  f01241: 'active, USA, Portland, 6block',
  f01247: 'active, Canada, Montreal, BigChungus™',
  f01272: 'active, Singapore',
  f01276: 'active, Canada, Brampton, NBFS Canada',
  f01278: 'active, USA, Grand Rapids, MiMiner',
  f01799: 'active, China, Jinan, TokenHome',
  f01800: 'active, China, Shenzhen + Chengdu',
  f02301: 'active, USA',
  f02388: 'active, Netherlands, Amersfoort, Kroketje',
  f02401: 'active, Canada, Chambly, NBFS Canada',
  f02421: 'active, China, Deyang + Singapore, 腾盛科技',
  f02490: 'active, China, Fujian',
  f02620: 'active, Poland, Krakow, @magik6k',
  f03143: 'active, China, Shijiazhuang + Hong Kong',
  f03176: 'active, USA, San Mateo, Five Star-Helmsman&Heiben',
  f03223: 'active, USA',
  f03273: 'active, USA, Portland, 6block',
  f03274: 'active, USA, Portland, 6block',
  f03339: 'active, China, Luzhou, benxun',
  f03363: 'active, Singapore',
  f05316: 'active, USA, Portland, 6block',
  f05317: 'active, USA, Portland',
  f07819: 'active, China, Wuxi, YC--wuxi',
  f07919: 'active, China, Beijing, Shanghai, Hunan',
  f08073: 'active, China, Qiqihar, QY7TT',
  f08157: 'active, China, Beijing + Germany, Frankfurt, 超星际',
  f08204: 'active, USA, St. Louis',
  f08240: 'active, Russia, Novosibirsk, Rabinovitch',
  f08264: 'active, China, Xianning',
  f08403: 'active, UK, Lower Slaughter',
  f09569: 'active, China, Beijing',
  f09696: 'active, USA, Portland + Singapore',
  f09731: 'active, China, Guiyang',
  f09848: 'active, USA',
  f010048: 'active, China, Shanghai',
  f010088: 'active, DNS:purumine.com',
  f010400: 'active, China, Shenyang',
  f010446: 'active, Netherlands',
  f010507: 'active, China, Hangzhou',
  f010558: 'active, China, Shenzhen + Hong Kong',
  f014281: 'active, Netherlands, Permerend',
  f014768: 'active, Singapore',
  f016563: 'active, China, Deyang',
  f016594: 'active, Germany',
  f019100: 'active, Romania, Cluj-Napoca',
  f019399: 'active, Korea, Busan',
  f019638: 'active, Germany, Frankfurt',
  f020608: 'active, Russia',
  f020742: 'active, China, Shanghai + Hangzhou + Shaoxing',
  f020904: 'active, Korea, Uijeongbu-si',
  f021255: 'active, China, Suzhou + Netherlands',
  f021540: 'active, Germany, Frankfurt, @hsanjuan',
  f021583: 'active, China, Jiaxing',
  f021710: 'active, China, Shijiazhuang',
  f021870: 'active, USA, Portland',
  f022072: 'active, China, Jieyang',
  f022142: 'active, USA, Queens',
  f022522: 'active, China, Dongguan',
  f023467: 'active, Norway, Oslo',
  f023490: 'active, Ukraine, Kyiv',
  f023495: 'active, China, Beijing + USA, Portland',
  f023565: 'active, China, Fuzhou',
  f023647: 'active, Korea, Gangseo-gu',
  f023649: 'active, Korea, Seoul',
  f024025: 'active, China, Chengdu',
  f024127: 'active, China, Fuzhou',
  f024800: 'active, China, Hong Kong',
  f024903: 'active, China, Mianyang',
  f024969: 'active, NR',
  f025017: 'active, China, Hefei',
  f025019: 'active, China, Taiwan, Hsinchu',
  f029404: 'active, USA, Portland + New Castle', // about 2 hours
  f029490: 'active, NR',

  // Active/sealing

  // Sealing

  f01155: 'sealing, China, Shanghai, DianCun Tech',
  f02501: 'sealing, USA, Portland, 6block',
  f02514: 'sealing, USA, Portland, 6block',
  f02622: 'sealing, USA, Portland, 6block',
  f02623: 'sealing, USA, Portland, 6block',
  f03222: 'sealing, China, Yuncheong',
  f03488: 'sealing, Korea, Geumcheon-gu',
  f05315: 'sealing, USA, Portland, 6block',
  f07850: 'sealing, USA, Portland, 6block',
  f08383: 'sealing, USA, Portland, 6block',
  f09693: 'sealing, USA, Portland + Singapore',
  f010241: 'sealing, China, Beijing + USA, Portland',
  f010253: 'sealing, China, Beijing + USA, Portland',
  f015877: 'sealing, China, Jiaxing + USA',
  f015927: 'sealing, USA, East Islip',
  f019354: 'sealing, Germany, Frankfurt',
  f020398: 'sealing, China, Zhangjiakou',
  f021483: 'sealing, China, Beijing',
  f022125: 'sealing, China, Shenzhen',
  f022289: 'sealing, China, Mianyang',
  f023573: 'sealing, Japan, Kumamoto',
  f023825: 'sealing, USA, Portland',
  f023858: 'sealing, China, Fuzhou',
  f023859: 'sealing, China, Fuzhou',
  f023861: 'sealing, China, Fuzhou',
  f023868: 'sealing, China, Fuzhou',
  f023869: 'sealing, China, Fuzhou',
  f023870: 'sealing, China, Fuzhou',
  f023871: 'sealing, China, Fuzhou',
  f023876: 'sealing, China, Fuzhou',
  f023928: 'sealing, China, Fuzhou',
  f023977: 'sealing, China, Fuzhou',
  f023978: 'sealing, China, Fuzhou',
  f023980: 'sealing, China, Fuzhou',
  f023981: 'sealing, China, Fuzhou',
  f024006: 'sealing, China, Fuzhou',
  f024007: 'sealing, China, Fuzhou',
  f024008: 'sealing, China, Fuzhou',
  f024012: 'sealing, China, Fuzhou',
  f024013: 'sealing, China, Fuzhou',
  f024014: 'sealing, China, Fuzhou',
  f024015: 'sealing, USA, Portland',
  f024016: 'sealing, USA, Portland',
  f024081: 'sealing, China, Fuzhou',
  f024084: 'sealing, China, Fuzhou',
  f024085: 'sealing, China, Fuzhou',
  f024136: 'sealing, China, Fuzhou',
  f024156: 'sealing, USA',
  f029425: 'sealing, NR',
  f029552: 'sealing, China, Changsha',
  f029595: 'sealing, China, Guangdong',
  f029619: 'sealing, China, Hefei',
  f029628: 'sealing, Australia, Brisbane',
  f030144: 'sealing, Korea, Gyeonggi-do',
  f030152: 'sealing, China, Changsha',
  f030219: 'sealing, China, Changsha',

  // Stuck

  f02405: 'stuck, China, Shenzhen', // Transferring: about 10 hours
  f02415: 'stuck, China, Hong Kong', // Transferring: about 10 hours
  f02619: 'stuck, China, Beijing, Blockcasting', // Transferring: about 10 hours
  f03328: 'stuck, China, Xinxiang', // Transferring: about 10 hours
  f07990: 'stuck, China, Hong Kong', // Transferring: about 11 hours
  f07998: 'stuck, China, Hangzhou', // Transferring: about 10 hours
  f08025: 'stuck, China, Hong Kong', // Transferring: about 10 hours
  f010501: 'stuck, China, Hangzhou', // Transferring: about 10 hours
  f010523: 'stuck, China, Beijing', // Transferring: about 10 hours
  f014569: 'stuck, NR', // Transferring: about 10 hours
  f018785: 'stuck, Singapore + Germany, Frankfurt + USA', // Transferring: about 10 hours
  f019824: 'stuck, USA', // CheckForAcceptance: about 15 hours
  f020605: 'stuck, China, Yibin', // Transferring: about 10 hours
  f021265: 'stuck, China, Wuhan', // Transferring: about 10 hours
  f022566: 'stuck, China, Nanchong', // Transferring: about 10 hours
  f023501: 'stuck, China, Mianyang', // CheckForAcceptance: about 24 hours

  // Min-size

  f010479: 'min-size, France, Fontenay-sous-Bois', // 134217728 < 4294967296
  f014409: 'min-size, USA, Waxhaw', // 134217728 < 262144000

  // Min-ask

  // Error

  f01240: 'error, Netherlands, HidNand', // EOF
  f01277: 'error, Sweden, Stockholm, tvsthlm', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: failed to load message: blockstore: block not found
  f01279: 'error, China, Sichuan', // failed to initiate data transfer: deal data transfer failed: response rejected
  f01280: 'error, China, Wuxi, 了凡超算', // failed to initiate data transfer: deal data transfer failed: response rejected
  f01287: 'error, China, Jiaxing, MaiTian', // failed to initiate data transfer: deal data transfer failed: response rejected
  f01289: 'error, China, Hangzhou + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02305: 'error, China, Dongguan', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02381: 'error, China, Dongguan, 西野七濑迷叔', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 452668 not found
  f02387: 'error, Canada, Brampton, NBFS Canada', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
  f02399: 'error, China, Zhejiang', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
  f02416: 'error, China, Guangdong, 星际无限', // AddPiece failed: adding piece to sector: writing piece: creating unsealed sector file: fallocate '/lotus_data/unsealed/s-t02416-183886': no space left on device
  f02419: 'error, China, Shanghai, yuantai', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02423: 'error, Ukraine, Kyiv, igowreck', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 460526 not found
  f02492: 'error, China, Shenzhen', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 459904 not found
  f02500: 'error, Korea, Seongnam-si', // error in deal activation: failed to set up called handler: called check error (h: 134658): client: failed to look up deal on chain: deal 458722 not found
  f02576: 'error, Denmark, Gjerlev, BenjaminH', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.066168254449834551 FIL, balance: 0.065864025821538587 FIL): not enough funds to execute transaction
  f02606: 'error, China, Shanghai', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02625: 'error, China, Shanghai, IPFS星际工厂', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02633: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02645: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.075978404462843351 FIL, balance: 0.072142108337803117 FIL): not enough funds to execute transaction
  f02665: 'error, Netherlands, Amsterdam, fm-ops', // error in deal activation: failed to set up called handler: called check error (h: 138721): client: failed to look up deal on chain: deal 513415 not found
  f02668: 'error, China, Chengdu', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02772: 'error, China, Chengdu', // stream reset
  f03134: 'error, China, Cangzhou, 乔木信息', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03224: 'error, Ukraine, Irpin, oboltusov', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03275: 'error, USA, Portland, 6block', // error in deal activation: failed to set up called handler: called check error (h: 126007): client: failed to look up deal on chain: deal 421645 not found
  f03302: 'error, China, Chengdu', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03345: 'error, China, Fuzhou, chh', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03364: 'error, China, Guangzhou', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 513490 not found
  f03482: 'error, China, Wuxi', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03491: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03512: 'error, New Zealand, Auckland, NZFILECOIN01', // error in deal activation: failed to set up called handler: called check error (h: 134658): client: failed to look up deal on chain: deal 476002 not found
  f03544: 'error, China, Guiyang', // error in deal activation: failed to set up called handler: called check error (h: 137772): client: failed to look up deal on chain: deal 512654 not found
  f03624: 'error, Germany, Chemnitz, ode', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
  f04443: 'error, China, Shanghai, 罗良科技', // failed to initiate data transfer: deal data transfer failed: response rejected
  f07806: 'error, China, Wuhan, HelloXP', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512683 not found
  f07824: 'error, China, Shanghai', // failed to initiate data transfer: deal data transfer failed: response rejected
  f08094: 'error, China, Guangzhou, dongshao', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512816 not found
  f08220: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: response rejected
  f08311: 'error, China, Shenzhen', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 452766 not found
  f08371: 'error, China, Chengdu', // failed to initiate data transfer: deal data transfer failed: response rejected
  f08474: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f08482: 'error, USA, Athol, @why', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.094202223837650696 FIL, balance: 0.0873128876205417 FIL): not enough funds to execute transaction
  f09002: 'error, Singapore', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 513466 not found
  f09592: 'error, Japan, Minamata', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 458302 not found
  f09675: 'error, China, Weifang', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 458676 not found
  f09770: "error, China, Xi'an", // failed to initiate data transfer: deal data transfer failed: response rejected
  f09833: 'error, USA, San Jose', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 459708 not found
  f010063: 'error, China, Mianyang', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010084: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010257: 'error, China, Hong Kong, DNS:feiyuipfs.com', // stream reset
  f010399: 'error, China, Guangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010438: 'error, USA', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 458303 not found
  f010491: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010498: 'error, China, Shenzhen', // error in deal activation: failed to set up called handler: called check error (h: 138721): client: failed to look up deal on chain: deal 512849 not found
  f010505: 'error, China, Wuhan', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010513: 'error, China, Chongqing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010528: 'error, China, Chongqing', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512690 not found
  f010617: 'error, Canada, Surrey, @feiya200', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
  f014329: 'error, China, Hong Kong', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 514078 not found
  f014394: 'error, China, Suzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f015233: 'error, China, Nanjing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f015747: 'error, Japan, Setagaya-ku', // failed to initiate data transfer: deal data transfer failed: response rejected
  f015941: 'error, Ukraine, Kyiv', // error in deal activation: failed to set up called handler: called check error (h: 126007): client: failed to look up deal on chain: deal 421311 not found
  f016482: 'error, USA, Aliquippa', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 458438 not found
  f017665: 'error, China, Shenyang', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 514063 not found
  f017734: 'error, Australia, Sydney', // failed to initiate data transfer: deal data transfer failed: response rejected
  f017970: 'error, China, Baoding', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018501: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018772: 'error, Australia', // error in deal activation: failed to set up called handler: called check error (h: 134658): client: failed to look up deal on chain: deal 452748 not found
  f018780: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018781: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018782: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018783: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018784: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f019024: 'error, China, Sichuan', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512672 not found
  f019041: 'error, Singapore', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 452753 not found
  f019074: 'error, China, Guangdong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f019104: 'error, Canada, Chambly', // error in deal activation: failed to set up called handler: called check error (h: 134658): client: failed to look up deal on chain: deal 458437 not found
  f019118: 'error, China, Jiaxing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f019174: 'error, UK, Halifax', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999984100815 FIL, balance: 0.070383193180510758 FIL): not enough funds to execute transaction
  f019240: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f019243: 'error, USA, Jackson', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f019437: 'error, Korea, Guro-gu', // failed to initiate data transfer: deal data transfer failed: response rejected
  f020489: 'error, China, Lioaning', // failed to initiate data transfer: deal data transfer failed: response rejected
  f020523: 'error, China, Suzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f020541: 'error, China, Shanghai', // error in deal activation: failed to set up called handler: called check error (h: 138721): client: failed to look up deal on chain: deal 512799 not found
  f020923: 'error, China, Cangzhou', // error in deal activation: failed to set up called handler: called check error (h: 137772): client: failed to look up deal on chain: deal 513531 not found
  f020928: 'error, China, Deyang + Singapore', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f020975: 'error, China, Shandong', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512871 not found
  f021328: 'error, China, Dongguan', // failed to initiate data transfer: deal data transfer failed: response rejected
  f021444: 'error, China, Guangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f021479: 'error, China, Qingdao', // failed to initiate data transfer: deal data transfer failed: response rejected
  f022070: 'error, China, Jieyang', // error in deal activation: failed to set up called handler: called check error (h: 138721): client: failed to look up deal on chain: deal 512712 not found
  f022163: 'error, NR', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.030303030282262568 FIL, balance: 0.015928826163733186 FIL): not enough funds to execute transaction
  f022227: 'error, China, Jiangsu', // failed to initiate data transfer: deal data transfer failed: response rejected
  f022352: 'error, Norway, Borgen', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f022376: 'error, China, Dongguan', // failed to initiate data transfer: deal data transfer failed: response rejected
  f022753: 'error, China, Hong Kong', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 460411 not found
  f022832: 'error, China', // failed to initiate data transfer: deal data transfer failed: response rejected
  f022836: 'error, China, Chongqing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f022841: 'error, China, Zhongshan', // failed to initiate data transfer: deal data transfer failed: response rejected
  f022853: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f022855: 'error, Finland, Helsinki', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.189439786320974232 FIL, balance: 0.077190799415898118 FIL): validation failure
  f022922: 'error, China, Shenzhen', // stream reset
  f022969: 'error, China, Chengdu', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023108: 'error, China, Dongguan', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023179: 'error, China, Fuzhou', // error in deal activation: failed to set up called handler: called check error (h: 134658): client: failed to look up deal on chain: deal 477977 not found
  f023200: 'error, China, Shanghai', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023229: 'error, China, Shandong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023526: 'error, China, Chongqing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023571: 'error, NR', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512577 not found
  f023581: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023660: 'error, China, Fuzhou', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f023662: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.091284369820604385 FIL, balance: 0.0873128876205417 FIL): not enough funds to execute transaction
  f023843: 'error, NR', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023853: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023855: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023939: 'error, NR', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023943: 'error, USA, Ashburn', // error in deal activation: failed to set up called handler: called check error (h: 138721): client: failed to look up deal on chain: deal 512782 not found
  f023971: 'error, USA, @Brian Y', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
  f024066: 'error, NR', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024101: 'error, China, Guiyang', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 452703 not found
  f024146: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024147: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024148: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024468: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024496: 'error, China, Dongguan', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024521: 'error, Korea, Gyeonggi-do', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 452657 not found
  f024550: 'error, China, Wenzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024617: 'error, Korea, Bucheon-si', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 514123 not found
  f024902: 'error, Korea, Incheon', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 513576 not found
  f024983: 'error, China, Hong Kong', // error in deal activation: failed to set up called handler: called check error (h: 138721): client: failed to look up deal on chain: deal 513548 not found
  f025007: 'error, Korea, Gyeonggi-do', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512566 not found
  f025025: 'error, China, Qingdao', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f029421: 'error, China, Hong Kong', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 513559 not found
  f030158: 'error, China, Hangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f030226: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f030230: 'error, China, Sichuan', // failed to initiate data transfer: failed to open push data channel: Unable to send request: routing: not found

  // Timeout during ask

  f03194: 'timeout-ask, China, Shenzhen, 成都云存&Npool',
  f05664: 'timeout-ask, China, Shenzhen, 艾比特网络科技',

  // Rejected

  f02417: 'rejected, China, Liaoning', // sh: 1: jq: not found
  f03347: 'rejected, China, Shenzhen', // proposed provider collateral below minimum: 0 < 4565067147293
  f014365: 'rejected, Australia, Marrickville + Japan, Heiwajima', // sh: 1: /home/miner/.lotusminer/dealfilter.pl: Permission denied
  f019422: 'rejected, South Africa, Johannesburg', // no online
  f020385: 'rejected, Korea, Incheon', // no online
  f021075: 'rejected, China, Chengdu', // sh: 1: dealfilter.pl: not found
  f023013: 'rejected, China, Hong Kong', // no online
  f023678: 'rejected, China, Jiaxing', // no online
  f023854: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024184: 'rejected, Korea, Gangnam-gu',

  // Dial

  f010493: 'dial, China, Shanghai', // * [/ip4/218.78.187.146/tcp/21735] dial tcp4 218.78.187.146:21735: connect: connection refused
  f021316: 'dial, China, Yangzhou', // * [/ip4/58.220.66.88/tcp/2347] dial tcp4 58.220.66.88:2347: connect: connection refused
  f022261: 'dial, China, Luzhou', // * [/ip4/175.155.178.195/tcp/7777] dial tcp4 175.155.178.195:7777: connect: connection refused
  f022820: 'dial, China, Guangdong', // * [/ip4/183.232.116.200/tcp/4001] dial tcp4 183.232.116.200:4001: connect: connection refused
  f024986: 'dial, China, Zhongshan' // * [/ip4/192.168.2.64/tcp/3000] dial tcp4 0.0.0.0:42221->192.168.2.64:3000: i/o timeout

  // XNR

  // Error during ask
}

export default annotations
