const annotations = {
  // Active
  t01032: 'active, China, Hangzhou, 32G, 11h',
  t01170: 'active, China, Shenzhen, 32G, 8h',
  t01203: 'active, China, Guangzhou, 32G, 11h',
  t01235: 'active, Canada, Vancouver, 512M, @jimpick, 1h',
  t01258: 'active, China, Shenzhen, 512M, 3h',
  t01372: 'active, China, Shijiazhuang, 512M, 2h',
  t01392: 'active, Korea, Guro-gu, 512M, 2h',
  t01407: 'active, Korea, Geumcheon-gu, 512M, 2h',
  t01461: 'active, China, Hangzhou, 512M, 2h',
  t01513: 'active, China, Foshan, 512M, 2h',

  // New, sealing, recycle
  t01050: 'sealing, China, Chongqing, 32G, thu',
  t01091: 'sealing, China, Ningbo, 32G, thu',
  t01199: 'sealing, China, Guangdong, 32G, thu',
  t01226: 'sealing, Canada, 32G, thu',
  t01227: 'sealing, Brazil, Sao Paulo, 32G, thu',
  t01229: 'sealing, Brazil, Sao Paulo, 32G, thu',
  t01339: 'sealing, China, Shanghai, 32G, thu',
  t01348: 'sealing, China, Hong Kong, 512M, thu',
  t01404: 'sealing, China, Wuxi, 32G, thu',
  t01417: 'sealing, China, Yangzhou, 32G, thu',
  t01418: 'sealing, China, Shandong, 512M, thu',
  t01434: 'sealing, USA, Boardman, 32G, @jimpick, thu',
  t01442: 'sealing, China, Foshan, 32G, thu',
  t01595: 'sealing, China, Beijing, 32G, thu',
  t02141: 'sealing, China, Shijiazhuang, 512M, thu',
  t02193: 'sealing, China, Yibin, 512M, fri',
  t02840: 'sealing, China, Changsha, 512M, fri',
  t02940: 'sealing, China, Zhongshan, 32G, fri',
  t02944: 'sealing, China, Guilin, 512M, fri',
  t02970: 'sealing, Korea, Yangcheon-gu, 32G, fri',
  t03014: 'sealing, Korea, Seoul, 32G, fri',
  t03060: 'sealing, China, Hangzhou, 512M, fri',
  t03068: 'sealing, China, Shijiazhuang, 32G, fri',
  t03172: 'sealing, China, Guilin, 32G, fri',
  t03203: 'sealing, China, Wuhan, 32G, fri',
  t03210: 'sealing, China, Beijing, 512M, fri',
  t03211: 'sealing, China, Wuhan, 512M, fri',
  t03233: 'sealing, China, Shijiazhuang, 512M, fri',
  t03266: 'sealing, China, Shandong, 512M, fri',
  t03289: 'sealing, China, Beijing, 512M, fri',
  t03316: 'sealing, China, Wuxi, 32G, fri',
  t03318: 'sealing, China, Wuxi, 32G, fri',
  t03360: 'sealing, USA, Boardman, 512M, @ribasushi, fri',
  t03361: 'sealing, USA, Boardman, 512M, @ribasushi, fri',
  t03369: 'sealing, Canada, Stratford, 32G, fri',

  // Asks

  // Error
  t01072: 'error, USA, Galveston + China, Guangdong, 32G', // deal failed: (State=26) handing off deal to node: AddPiece failed:
  t01158: 'error, China, Chengdu, 32G', // sending proposal to storage provider failed: context deadline exceeded
  t01207: 'error, Korea, Yangcheon-gu, 32G', // sending proposal to storage provider failed: failed to dial
  t01476: 'error, China, Xianning, 32G', // failed to initiate data transfer: deal data transfer failed
  t01517: 'error, China, Wuhan, 32G', // sending proposal to storage provider failed: failed to dial
  t02836: 'error, China, Shenzhen, 512M', // deal failed: (State=26) error calling node: AddFunds exit code: SysErrOutOfGas(7)
  t03038: 'error, Poland, Krakow, 512M, @magik6k', // sending proposal to storage provider failed: failed to dial
  t03158: 'error, China, Changsha, 32G', // failed to initiate data transfer: deal data transfer failed

  // Stuck
  t02507: 'transferring, China, Zhongshan, 512M, fri',
 
  // XNR
  t02191: 'xnr, Singapore, 512M',

  // NR


  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
