const annotations = {
  // Active
  t01032: 'active, China, Hangzhou, 32G, 11h, fri',
  t01091: 'active, China, Ningbo, 32G, 15h, sat',
  t01170: 'active, China, Shenzhen, 32G, 8h, fri',
  t01203: 'active, China, Guangzhou, 32G, 11h, 8h, sat',
  t01258: 'active, China, Shenzhen, 512M, 3h, fri, sat',
  t01339: 'active, China, Shanghai, 32G, 11h, fri',
  t01434: 'active, USA, Boardman, 32G, @jimpick, 16h, sat',
  t01461: 'active, China, Hangzhou, 512M, 2h, fri, sat',
  t01595: 'active, China, Beijing, 32G, 13h, sat',
  t03211: 'active, China, Wuhan, 512M, 2h, 2h, sat',
  t03266: 'active, China, Shandong, 512M, 2h, fri, sat',
  t03289: 'active, China, Beijing, 512M, 1h, 2h, sat',
  t03360: 'active, USA, Boardman, 512M, @ribasushi, 1h, 1h, sat',
  t03361: 'active, USA, Boardman, 512M, @ribasushi, 1h, 1h, sat',

  // New, sealing, recycle
  t01050: 'sealing, China, Chongqing, 32G, thu, sat',
  t01072: 'sealing, USA, Galveston + China, Guangdong, 32G, fri',
  t01226: 'sealing, Canada, 32G, thu, sat',
  t01227: 'sealing, Brazil, Sao Paulo, 32G, thu, sat',
  t01229: 'sealing, Brazil, Sao Paulo, 32G, thu, sat',
  t01404: 'sealing, China, Wuxi, 32G, thu, sat',
  t01417: 'sealing, China, Yangzhou, 32G, thu, sat',
  t01442: 'sealing, China, Foshan, 32G, thu, sat',
  t01517: 'sealing, China, Wuhan, 32G, fri',
  t02940: 'sealing, China, Zhongshan, 32G, fri',
  t02970: 'sealing, Korea, Yangcheon-gu, 32G, fri',
  t03014: 'sealing, Korea, Seoul, 32G, fri',
  t03038: 'sealing, Poland, Krakow, 512M, @magik6k, fri, sat',
  t03060: 'sealing, China, Hangzhou, 512M, fri, sat',
  t03068: 'sealing, China, Shijiazhuang, 32G, fri',
  t03172: 'sealing, China, Guilin, 32G, fri',
  t03210: 'sealing, China, Beijing, 512M, fri, sat',
  t03233: 'sealing, China, Shijiazhuang, 512M, fri, sat',
  t03316: 'sealing, China, Wuxi, 32G, fri',
  t03318: 'sealing, China, Wuxi, 32G, fri',
  t03369: 'sealing, Canada, Stratford, 32G, fri',
  t03396: 'sealing, Sweden, Stockholm, 32G, sat',
  t03402: 'sealing, China, Shanghai, 32G, fri',
  t03414: 'sealing, Germany, Frankfurt, 32G, fri',
  t03438: 'sealing, China, Luzhou, 32G, fri',
  t03465: 'sealing, China, Hangzhou, 32G, sat',
  t03500: 'sealing, China, Changsha, 32G, sat',
  t03518: 'sealing, China, Luzhou, 32G, sat',
  t03532: 'sealing, China, Wuxi, 32G, sat',
  t03549: 'sealing, Germany, Frankfurt, 32G, sat',
  t03550: 'sealing, China, Changsha, 512M, sat',
  t03585: 'sealing, China, Changsha, 32G, sat',
  t03590: 'sealing, China, Zhongshan, 512M, sat',
  t03591: 'sealing, China, Chengdu, 32G, sat',
  t03608: 'sealing, China, Hanzhou, 32G, sat',
  t03614: 'sealing, China, Shenzhen, 512M, sat',

  // Asks
  t01513: 'minask, China, Foshan, 512M, 2h', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: storage price per epoch less than asking price: 2000000 < 610351562500

  // No-online deals
  t01348: 'no-online, China, Hong Kong, 512M', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: miner is not considering online storage deals

  // Error
  t01199: 'error, China, Guangdong, 32G, thu', // deal failed: (State=26) deal data verification failed: error generating CommP: failed to build tree Caused by: 0: failed to create data store 1: No such file or directory (os error 2)
  t01158: 'error, China, Chengdu, 32G', // sending proposal to storage provider failed: failed to dial
  t03203: 'error, China, Wuhan, 32G, 12h', // sending proposal to storage provider failed: failed to dial

  // Stuck
  t01235: 'transferring, Canada, Vancouver, 512M, @jimpick, 1h',
  t01372: 'transferring, China, Shijiazhuang, 512M, 2h',
  t01407: 'transferring, Korea, Geumcheon-gu, 512M, 2h, sat',
  t02836: 'transferring, China, Shenzhen, 512M, 3h, sat',
  t02944: 'transferring, China, Guilin, 512M, fri, sat',
  t03440: 'transferring, China, Chengdu, 32G, sat',
 
  // XNR

  // NR
  t01207: 'NR, Korea, Yangcheon-gu, 32G',
  t01392: 'NR, Korea, Guro-gu, 512M, 2h',
  t01418: 'NR, China, Shandong, 512M, thu',
  t01476: 'NR, China, Xianning, 32G',
  t02141: 'NR, China, Shijiazhuang, 512M, thu',
  t02191: 'NR, Singapore, 512M',
  t02193: 'NR, China, Yibin, 512M, fri',
  t02507: 'NR, China, Zhongshan, 512M, fri',
  t02840: 'NR, China, Changsha, 512M, 2h',
  t03158: 'NR, China, Changsha, 32G',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
