const annotations = {
  // Active
  t01091: 'active, China, Ningbo, 32G, 15h, sat',
  t01170: 'active, China, Shenzhen, 32G, 8h, fri, sun',
  t01203: 'active, China, Guangzhou, 32G, 11h, 8h, 7h, sun',
  t01235: 'active, Canada, Vancouver, 512M, @jimpick, 1h, 1h, 1h',
  t01258: 'active, China, Shenzhen, 512M, 3h, 2h, sun',
  t01417: 'active, China, Yangzhou, 32G, 7h, sun',
  t01434: 'active, USA, Boardman, 32G, @jimpick, 16h, 16h, sun',
  t01461: 'active, China, Hangzhou, 512M, 2h, fri, sat, sun',
  t01595: 'active, China, Beijing, 32G, 13h, 12h, sun',
  t03038: 'active, Poland, Krakow, 512M, @magik6k, 6h, sun',
  t03211: 'active, China, Wuhan, 512M, 2h, 2h, sat, sun',
  t03289: 'active, China, Beijing, 512M, 1h, 2h, sat, sun',
  t03360: 'active, USA, Boardman, 512M, @ribasushi, 1h, 1h, 1h, 1h',
  t03361: 'active, USA, Boardman, 512M, @ribasushi, 1h, 1h, 1h, 1h',
  t03590: 'active, China, Zhongshan, 512M, 2h, 2h',
  t03591: 'active, China, Chengdu, 32G, 9h',
  t03608: 'active, China, Hanzhou, 32G, 18h',
  t03646: 'active, Finland, Helsinki, 512M, 2h, 2h',
  t03749: 'active, China, Shandong, 512M, 2h',
  t03776: 'active, Malaysia, Johor Bahru, 512M, 2h',
  t03779: 'active, China, Dongguan, 512M, 2h',
  t03806: 'active, Korea, Geumcheon-gu, 512M, 2h',

  // New, sealing, recycle
  t01050: 'sealing, China, Chongqing, 32G, thu, sat',
  t01158: 'sealing, China, Chengdu, 32G, sun',
  t01226: 'sealing, Canada, 32G, thu, sat',
  t01227: 'sealing, Brazil, Sao Paulo, 32G, thu, sat',
  t01229: 'sealing, Brazil, Sao Paulo, 32G, thu, sat',
  t01404: 'sealing, China, Wuxi, 32G, thu, sat',
  t01442: 'sealing, China, Foshan, 32G, thu, sat',
  t01517: 'sealing, China, Wuhan, 32G, fri, sun',
  t02944: 'sealing, China, Guilin, 512M, fri, sat, sun',
  t02970: 'sealing, Korea, Yangcheon-gu, 32G, fri, sun',
  t03014: 'sealing, Korea, Seoul, 32G, fri, sun',
  t03060: 'sealing, China, Hangzhou, 512M, fri, sat, sun',
  t03068: 'sealing, China, Shijiazhuang, 32G, fri, sun',
  t03172: 'sealing, China, Guilin, 32G, fri, sun',
  t03203: 'sealing, China, Wuhan, 32G, 12h, sun',
  t03210: 'sealing, China, Beijing, 512M, sun',
  t03233: 'sealing, China, Shijiazhuang, 512M, fri, sat, sun',
  t03316: 'sealing, China, Wuxi, 32G, fri, sun',
  t03318: 'sealing, China, Wuxi, 32G, fri, sun',
  t03369: 'sealing, Canada, Stratford, 32G, fri, sun',
  t03396: 'sealing, Sweden, Stockholm, 32G, sat',
  t03402: 'sealing, China, Shanghai, 32G, fri, sun',
  t03440: 'sealing, China, Chengdu, 32G, sat, sun',
  t03465: 'sealing, China, Hangzhou, 32G, sat',
  t03500: 'sealing, China, Changsha, 32G, sat',
  t03518: 'sealing, China, Luzhou, 32G, sat',
  t03532: 'sealing, China, Wuxi, 32G, sat',
  t03549: 'sealing, Germany, Frankfurt, 32G, sat',
  t03585: 'sealing, China, Changsha, 32G, sat',
  t03614: 'sealing, China, Shenzhen, 512M, sat, sun',
  t03637: 'sealing, China, Hong Kong, 512M, sat, sun',
  t03645: 'sealing, Sweden, Stockholm, 32G, sat',
  t03692: 'sealing, Russia, Novosibirsk, 32G, sun',
  t03709: 'sealing, USA, Bellevue, 32G, sun',
  t03730: 'sealing, Singapore, 32G, sun',
  t03736: 'sealing, China, Changsha, 512M, sun',
  t03782: 'sealing, China, Jinan, 32G, sun',
  t03783: 'sealing, China, Shanghai, 32G, sun',

  // Asks
  t01513: 'minask, China, Foshan, 512M, 2h', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: storage price per epoch less than asking price: 2000000 < 610351562500

  // No-online deals
  t01348: 'no-online, China, Hong Kong, 512M', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: miner is not considering online storage deals

  // Error
  t01072: 'error, USA, Galveston + China, Guangdong, 32G, fri', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: RPC error (-32700): unmarshaling params for 'Filecoin.AddPiece' (param: *io.Reader): json: cannot unmarshal object into Go value of type io.Reader
  t01199: 'error, China, Guangdong, 32G, thu', // deal failed: (State=26) deal data verification failed: error generating CommP: failed to build tree Caused by: 0: failed to create data store 1: No such file or directory (os error 2)
  t03653: 'error, Canada, Embrun, 32G', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: maybeSchedRequest didn't find any good workers
  t03733: 'error, Korea, Uijeongbu-si, 32G', // deal failed: (State=26) deal data verification failed: error generating CommP: Rust panic: no unwind information

  // Stuck
  t01372: 'error, China, Shijiazhuang, 512M, 2h', // xfr
  t01407: 'error, Korea, Geumcheon-gu, 512M, 2h, sat', // xfr
  t02836: 'error, China, Shenzhen, 512M, 3h, sat', // xfr
 
  // XNR

  // NR
  t01032: 'NR, China, Hangzhou, 32G, 11h, fri',
  t01207: 'NR, Korea, Yangcheon-gu, 32G',
  t01339: 'NR, China, Shanghai, 32G, 11h, fri',
  t01392: 'NR, Korea, Guro-gu, 512M, 2h',
  t01418: 'NR, China, Shandong, 512M, thu',
  t01476: 'NR, China, Xianning, 32G',
  t02141: 'NR, China, Shijiazhuang, 512M, thu',
  t02191: 'NR, Singapore, 512M',
  t02193: 'NR, China, Yibin, 512M, fri',
  t02507: 'NR, China, Zhongshan, 512M, fri',
  t02840: 'NR, China, Changsha, 512M, 2h',
  t02940: 'NR, China, Zhongshan, 32G, fri',
  t03158: 'NR, China, Changsha, 32G',
  t03266: 'NR, China, Shandong, 512M, 2h, fri, sat',
  t03414: 'NR, Germany, Frankfurt, 32G, fri',
  t03438: 'NR, China, Luzhou, 32G, fri',
  t03550: 'NR, China, Changsha, 512M, sat',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
