const annotations = {
  // Active
  t01170: 'active, China, Shenzhen, 32G, 8h',
  t01235: 'active, Canada, Vancouver, 512M, @jimpick, 1h',
  t01258: 'active, China, Shenzhen, 512M, 3h',
  t01372: 'active, China, Shijiazhuang, 512M, 2h',
  t01392: 'active, Korea, Guro-gu, 512M, 2h',
  t01407: 'active, Korea, Geumcheon-gu, 512M, 2h',
  t01461: 'active, China, Hangzhou, 512M, 2h',
  t01513: 'active, China, Foshan, 512M, 2h',

  // New, sealing, recycle
  t01032: 'sealing, China, Hangzhou, 32G, thu',
  t01050: 'sealing, China, Chongqing, 32G, thu',
  t01091: 'sealing, China, Ningbo, 32G, thu',
  t01199: 'sealing, China, Guangdong, 32G, thu',
  t01203: 'sealing, China, Guangzhou, 32G, thu',
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


  // Asks

  // Error
  t01072: 'error, USA, Galveston + China, Guangdong, 32G', // deal failed: (State=26) handing off deal to node: AddPiece failed:
  t01158: 'error, China, Chengdu, 32G', // sending proposal to storage provider failed: context deadline exceeded
  t01207: 'error, Korea, Yangcheon-gu, 32G', // sending proposal to storage provider failed: failed to dial
  t01476: 'error, China, Xianning, 32G', // failed to initiate data transfer: deal data transfer failed
  t01517: 'error, China, Wuhan, 32G', // sending proposal to storage provider failed: failed to dial

  // Stuck
 
  // XNR

  // NR


  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
