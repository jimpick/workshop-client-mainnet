// Slingshot test results
//
// Additional testing with files > 128MiB in size

const annotations = {
  // Candidates

  f014365: 'candidate, Australia, Marrickville + Japan, Heiwajima',
  f019661: 'candidate, Russia, Pyatigorsk',
  f030184: 'candidate, USA, Aliquippa',

  // Testing

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

  // Sealing

  f01155: 'sealing, China, Shanghai, DianCun Tech',
  f02665: 'sealing, Netherlands, Amsterdam, fm-ops',
  f03222: 'sealing, China, Yuncheong',
  f010498: 'sealing, China, Shenzhen',
  f020398: 'sealing, China, Zhangjiakou',
  f020541: 'sealing, China, Shanghai',
  f021483: 'sealing, China, Beijing',
  f022070: 'sealing, China, Jieyang',
  f022125: 'sealing, China, Shenzhen',
  f023573: 'sealing, Japan, Kumamoto',
  f023858: 'sealing, China, Fuzhou',
  f023859: 'sealing, China, Fuzhou',
  f023861: 'sealing, China, Fuzhou',
  f023868: 'sealing, China, Fuzhou',
  f023869: 'sealing, China, Fuzhou',
  f023870: 'sealing, China, Fuzhou',
  f023871: 'sealing, China, Fuzhou',
  f023876: 'sealing, China, Fuzhou',
  f023928: 'sealing, China, Fuzhou',
  f023943: 'sealing, USA, Ashburn',
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
  f024081: 'sealing, China, Fuzhou',
  f024084: 'sealing, China, Fuzhou',
  f024085: 'sealing, China, Fuzhou',
  f024136: 'sealing, China, Fuzhou',
  f024983: 'sealing, China, Hong Kong',
  f029425: 'sealing, NR',
  f029552: 'sealing, China, Changsha',
  f029595: 'sealing, China, Guangdong',
  f029619: 'sealing, China, Hefei',
  f029628: 'sealing, Australia, Brisbane',
  f030144: 'sealing, Korea, Gyeonggi-do',
  f030152: 'sealing, China, Changsha',
  f030219: 'sealing, China, Changsha',

  // Stuck - CheckForAcceptance

  f023501: 'stuck, China, Mianyang', // CheckForAcceptance: about 7 hours

  // Min-size

  f02576: 'min-size, Denmark, Gjerlev, BenjaminH',

  // min-ask

  f03194: 'min-ask, China, Shenzhen, 成都云存&Npool',

  // Error

  f01240: 'error, Netherlands, HidNand', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f01277: 'error, Sweden, Stockholm, tvsthlm', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: failed to load message: blockstore: block not found
  f01279: 'error, China, Sichuan', // failed to initiate data transfer: deal data transfer failed: response rejected
  f01280: 'error, China, Wuxi, 了凡超算', // failed to initiate data transfer: deal data transfer failed: response rejected
  f01287: 'error, China, Jiaxing, MaiTian', // failed to initiate data transfer: deal data transfer failed: response rejected
  f01289: 'error, China, Hangzhou + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02305: 'error, China, Dongguan', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02381: 'error, China, Dongguan, 西野七濑迷叔', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 452668 not found
  f02387: 'error, Canada, Brampton, NBFS Canada', // error in deal activation: failed to set up called handler: called check error (h: 126007): client: failed to look up deal on chain: deal 422140 not found
  f02399: 'error, China, Zhejiang', // error in deal activation: failed to set up called handler: called check error (h: 134658): client: failed to look up deal on chain: deal 460705 not found
  f02405: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02415: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02416: 'error, China, Guangdong, 星际无限', // AddPiece failed: adding piece to sector: writing piece: creating unsealed sector file: fallocate '/lotus_data/unsealed/s-t02416-183886': no space left on device
  f02419: 'error, China, Shanghai, yuantai', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02423: 'error, Ukraine, Kyiv, igowreck', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 460526 not found
  f02492: 'error, China, Shenzhen', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 459904 not found
  f02500: 'error, Korea, Seongnam-si', // error in deal activation: failed to set up called handler: called check error (h: 134658): client: failed to look up deal on chain: deal 458722 not found
  f02606: 'error, China, Shanghai', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02623: 'error, USA, Portland, 6block', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 458435 not found
  f02625: 'error, China, Shanghai, IPFS星际工厂', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02633: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02645: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02668: 'error, China, Chengdu', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02772: 'error, China, Chengdu', // stream reset
  f03134: 'error, China, Cangzhou, 乔木信息', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03224: 'error, Ukraine, Irpin, oboltusov', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03275: 'error, USA, Portland, 6block', // error in deal activation: failed to set up called handler: called check error (h: 126007): client: failed to look up deal on chain: deal 421645 not found
  f03302: 'error, China, Chengdu', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03345: 'error, China, Fuzhou, chh', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03364: 'error, China, Guangzhou', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 513490 not found
  f03482: 'error, China, Wuxi', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03512: 'error, New Zealand, Auckland, NZFILECOIN01', // error in deal activation: failed to set up called handler: called check error (h: 134658): client: failed to look up deal on chain: deal 476002 not found
  f03544: 'error, China, Guiyang', // error in deal activation: failed to set up called handler: called check error (h: 137772): client: failed to look up deal on chain: deal 512654 not found
  f04443: 'error, China, Shanghai, 罗良科技', // failed to initiate data transfer: deal data transfer failed: response rejected
  f07806: 'error, China, Wuhan, HelloXP', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512683 not found
  f07824: 'error, China, Shanghai', // failed to initiate data transfer: deal data transfer failed: response rejected
  f07990: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f07998: 'error, China, Hangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f08019: 'error, China, Yantai, 三合',
  f08094: 'error, China, Guangzhou, dongshao', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512816 not found
  f08220: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: response rejected
  f08311: 'error, China, Shenzhen', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 452766 not found
  f08371: 'error, China, Chengdu', // failed to initiate data transfer: deal data transfer failed: response rejected
  f08474: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f08482: 'error, USA, Athol, @why', // error in deal activation: failed to set up called handler: called check error (h: 126007): client: failed to look up deal on chain: deal 421320 not found
  f09002: 'error, Singapore', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 513466 not found
  f09592: 'error, Japan, Minamata', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 458302 not found
  f09675: 'error, China, Weifang', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 458676 not found
  f09770: "error, China, Xi'an", // failed to initiate data transfer: deal data transfer failed: response rejected
  f09833: 'error, USA, San Jose', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 459708 not found
  f010063: 'error, China, Mianyang', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010084: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010247: 'error, China, Yantai',
  f010257: 'error, China, Hong Kong, DNS:feiyuipfs.com', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 475953 not found
  f010399: 'error, China, Guangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010438: 'error, USA', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 458303 not found
  f010479: 'error, France, Fontenay-sous-Bois', // error in deal activation: failed to set up called handler: called check error (h: 134658): client: failed to look up deal on chain: deal 458445 not found
  f010491: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010493: 'error, China, Shanghai', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010501: 'error, China, Hangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010505: 'error, China, Wuhan', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010513: 'error, China, Chongqing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010523: 'error, China, Beijing', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512687 not found
  f010528: 'error, China, Chongqing', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512690 not found
  f014329: 'error, China, Hong Kong', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 514078 not found
  f014394: 'error, China, Suzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f014569: 'error, NR', // failed to initiate data transfer: deal data transfer failed: response rejected
  f015233: 'error, China, Nanjing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f015747: 'error, Japan, Setagaya-ku', // failed to initiate data transfer: deal data transfer failed: response rejected
  f015877: 'error, China, Jiaxing + USA', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 451761 not found
  f015941: 'error, Ukraine, Kyiv', // error in deal activation: failed to set up called handler: called check error (h: 126007): client: failed to look up deal on chain: deal 421311 not found
  f016482: 'error, USA, Aliquippa', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 458438 not found
  f017665: 'error, China, Shenyang', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 514063 not found
  f017734: 'error, Australia, Sydney', // failed to initiate data transfer: deal data transfer failed: response rejected
  f017970: 'error, China, Baoding', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018501: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018772: 'error, Australia', // error in deal activation: failed to set up called handler: called check error (h: 134658): client: failed to look up deal on chain: deal 452748 not found
  f018780: 'error, Singapore + Germany, Frankfurt + USA', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 458436 not found
  f018781: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018783: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018784: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f019022: "error, China, Xi'an",
  f019024: 'error, China, Sichuan', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512672 not found
  f019041: 'error, Singapore', // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 452753 not found
  f019074: 'error, China, Guangdong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f019104: 'error, Canada, Chambly', // error in deal activation: failed to set up called handler: called check error (h: 134658): client: failed to look up deal on chain: deal 458437 not found
  f019118: 'error, China, Jiaxing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f019174: 'error, UK, Halifax', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999984100815 FIL, balance: 0.070383193180510758 FIL): not enough funds to execute transaction
  f019240: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f019243: 'error, USA, Jackson', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f019354: 'error, Germany, Frankfurt', // error in deal activation: failed to set up called handler: called check error (h: 134658): client: failed to look up deal on chain: deal 459859 not found
  f019437: 'error, Korea, Guro-gu', // failed to initiate data transfer: deal data transfer failed: response rejected
  f020489: 'error, China, Lioaning', // failed to initiate data transfer: deal data transfer failed: response rejected
  f020523: 'error, China, Suzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f020923: 'error, China, Cangzhou', // error in deal activation: failed to set up called handler: called check error (h: 137772): client: failed to look up deal on chain: deal 513531 not found
  f020928: 'error, China, Deyang + Singapore', // failed to initiate data transfer: deal data transfer failed: response rejected
  f020975: 'error, China, Shandong', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512871 not found
  f021328: 'error, China, Dongguan', // failed to initiate data transfer: deal data transfer failed: response rejected
  f021339: 'error, China, Jiaxing',
  f021444: 'error, China, Guangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f021479: 'error, China, Qingdao', // failed to initiate data transfer: deal data transfer failed: response rejected
  f022163: 'error, NR', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.030303030282262568 FIL, balance: 0.015928826163733186 FIL): not enough funds to execute transaction
  f022227: 'error, China, Jiangsu', // failed to initiate data transfer: deal data transfer failed: response rejected
  f022289: 'error, China, Mianyang', // failed to initiate data transfer: deal data transfer failed: response rejected
  f022376: 'error, China, Dongguan', // failed to initiate data transfer: deal data transfer failed: response rejected
  f022566: 'error, China, Nanchong', // failed to initiate data transfer: deal data transfer failed: response rejected
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
  f023662: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023678: 'error, China, Jiaxing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023843: 'error, NR', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023939: 'error, NR', // failed to initiate data transfer: deal data transfer failed: response rejected
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
  f025007: 'error, Korea, Gyeonggi-do', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512566 not found
  f029421: 'error, China, Hong Kong', // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 513559 not found
  f030158: 'error, China, Hangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f030226: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f030230: 'error, China, Sichuan', // failed to initiate data transfer: failed to open push data channel: Unable to send request: routing: not found

  // Timeout during ask

  f02299: 'timeout-ask, China, Dongguan, Yolo', // 10.06
  f02654: 'timeout-ask, China, Shanghai', // 10.07
  f03328: 'timeout-ask, China, Xinxiang', // 10.07
  f03340: "timeout-ask, China, Xi'an", // 10.07
  f05664: 'timeout-ask, China, Shenzhen, 艾比特网络科技', // 10.07
  f07709: 'timeout-ask, Korea, Dongjak-gu', // 10.08
  f08091: 'timeout-ask, USA', // 10.09
  f08285: 'timeout-ask, Latvia, Riga, stander', // 10.07
  f010512: 'timeout-ask, China, Zhengzhou', // 10.08
  f015897: 'timeout-ask, China, Guangdong', // 10.06
  f015941: 'timeout-ask, Ukraine, Kyiv', // 10.07
  f018785: 'timeout-ask, Singapore + Germany, Frankfurt + USA', // 10.07
  f019029: 'timeout-ask, Serbia, Boljevac', // 10.07
  f019099: 'timeout-ask, China, Hong Kong', // 10.07
  f019362: 'timeout-ask, China, Hangzhou', // 10.07
  f020436: 'timeout-ask, China, Beijing', // 10.07
  f021262: 'timeout-ask, China, Shanghai', // 10.07
  f021274: 'timeout-ask, China, Shanghai', // 10.08
  f021616: 'timeout-ask, China, Shanghai', // 10.07
  f024030: 'timeout-ask, Korea, Gwangju', // 10.07
  f024070: 'timeout-ask, Japan, Setagaya-ku', // 10.07
  f024944: 'timeout-ask, Korea, Yeongdeungpo-dong', // 10.07
  f029587: 'timeout-ask, Hungary', // 10.08

  // Dial

  f03347: 'dial, China, Shenzhen', // * [/ip4/103.44.253.59/tcp/33455] dial tcp4 0.0.0.0:35839->103.44.253.59:33455: i/o timeout
  f021316: 'dial, China, Yangzhou', // * [/ip4/58.220.66.88/tcp/2347] dial tcp4 58.220.66.88:2347: connect: connection refused
  f022261: 'dial, China, Luzhou', // * [/ip4/175.155.178.195/tcp/7777] dial tcp4 175.155.178.195:7777: connect: connection refused
  f022820: 'dial, China, Guangdong', // * [/ip4/183.232.116.200/tcp/4001] dial tcp4 183.232.116.200:4001: connect: connection refused
  f024986: 'dial, China, Zhongshan', // * [/ip4/192.168.2.64/tcp/3000] dial tcp4 0.0.0.0:42221->192.168.2.64:3000: i/o timeout

  // XNR

  // Error during ask
  f03131: 'error-ask, China, Changsha' // failed to open stream to miner: exhausted 5 attempts but failed to open stream, err: context canceled
}

export default annotations
