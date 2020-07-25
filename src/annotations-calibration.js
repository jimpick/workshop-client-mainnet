const annotations = {
  // Active
  t01032: 'active, China, Hangzhou, 32G, 11h, fri',
  t01091: 'active, China, Ningbo, 32G, 15h',
  t01170: 'active, China, Shenzhen, 32G, 8h, fri',
  t01203: 'active, China, Guangzhou, 32G, 11h, fri',
  t01258: 'active, China, Shenzhen, 512M, 3h, fri',
  t01339: 'active, China, Shanghai, 32G, 11h, fri',
  t01407: 'active, Korea, Geumcheon-gu, 512M, 2h',
  t01434: 'active, USA, Boardman, 32G, @jimpick, 16h',
  t01461: 'active, China, Hangzhou, 512M, 2h, fri',
  t01595: 'active, China, Beijing, 32G, 13h',
  t02836: 'active, China, Shenzhen, 512M, 3h',
  t02840: 'active, China, Changsha, 512M, 2h',
  t03211: 'active, China, Wuhan, 512M, 2h, 2h',
  t03266: 'active, China, Shandong, 512M, 2h, fri',
  t03289: 'active, China, Beijing, 512M, 1h, 2h',
  t03360: 'active, USA, Boardman, 512M, @ribasushi, 1h, 1h',
  t03361: 'active, USA, Boardman, 512M, @ribasushi, 1h, 1h',

  // New, sealing, recycle
  t01050: 'sealing, China, Chongqing, 32G, thu',
  t01072: 'sealing, USA, Galveston + China, Guangdong, 32G, fri',
  t01199: 'sealing, China, Guangdong, 32G, thu',
  t01226: 'sealing, Canada, 32G, thu',
  t01227: 'sealing, Brazil, Sao Paulo, 32G, thu',
  t01229: 'sealing, Brazil, Sao Paulo, 32G, thu',
  t01404: 'sealing, China, Wuxi, 32G, thu',
  t01417: 'sealing, China, Yangzhou, 32G, thu',
  t01442: 'sealing, China, Foshan, 32G, thu',
  t01517: 'sealing, China, Wuhan, 32G, fri',
  t02193: 'sealing, China, Yibin, 512M, fri',
  t02940: 'sealing, China, Zhongshan, 32G, fri',
  t02944: 'sealing, China, Guilin, 512M, fri',
  t02970: 'sealing, Korea, Yangcheon-gu, 32G, fri',
  t03014: 'sealing, Korea, Seoul, 32G, fri',
  t03038: 'sealing, Poland, Krakow, 512M, @magik6k, fri',
  t03060: 'sealing, China, Hangzhou, 512M, fri',
  t03068: 'sealing, China, Shijiazhuang, 32G, fri',
  t03172: 'sealing, China, Guilin, 32G, fri',
  t03203: 'sealing, China, Wuhan, 32G, fri',
  t03210: 'sealing, China, Beijing, 512M, fri',
  t03233: 'sealing, China, Shijiazhuang, 512M, fri',
  t03316: 'sealing, China, Wuxi, 32G, fri',
  t03318: 'sealing, China, Wuxi, 32G, fri',
  t03369: 'sealing, Canada, Stratford, 32G, fri',
  t03402: 'sealing, China, Shanghai, 32G, fri',
  t03414: 'sealing, Germany, Frankfurt, 32G, fri',
  t03438: 'sealing, China, Luzhou, 32G, fri',

  // Asks
  t01513: 'minask, China, Foshan, 512M, 2h', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: storage price per epoch less than asking price: 2000000 < 610351562500

  // Error
  t01158: 'error, China, Chengdu, 32G', // sending proposal to storage provider failed: context deadline exceeded
  t01207: 'error, Korea, Yangcheon-gu, 32G', // sending proposal to storage provider failed: routing: not found
  t01348: 'error, China, Hong Kong, 512M', // sending proposal to storage provider failed: failed to dial
  t03158: 'error, China, Changsha, 32G', // failed to initiate data transfer: deal data transfer failed
  t03396: 'error, Sweden, Stockholm, 32G', // deal failed: (State=26) handing off deal to node: AddPiece failed: getting available sector: getting the sealing delay: Near line 11 (last key parsed 'Libp2p'): expected a top-level item to end with a newline, comment, or EOF, but got ']' instead

  // Stuck
  t01235: 'transferring, Canada, Vancouver, 512M, @jimpick, 1h',
  t01372: 'transferring, China, Shijiazhuang, 512M, 2h',
  t02507: 'transferring, China, Zhongshan, 512M, fri',
 
  // XNR

  // NR
  t01392: 'NR, Korea, Guro-gu, 512M, 2h',
  t01418: 'NR, China, Shandong, 512M, thu',
  t01476: 'NR, China, Xianning, 32G',
  t02141: 'NR, China, Shijiazhuang, 512M, thu',
  t02191: 'NR, Singapore, 512M',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
