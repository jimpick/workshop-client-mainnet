const annotations = {
  // Active
  t01047: 'active, China, Zhejiang, 32G, 9h',
  t02329: 'active, China, Hangzhou, 512M, 2h',
  t03705: 'active, China, Shenzhen, 512M, 1h',
  t06144: 'active, China, Beijing, 512M, 1h',
  t06187: 'active, China, Zhongshan, 512M, 1h',
  t07253: 'active, China, Zhongshan, 512M, 1h',

  // Sealing
  t05182: 'sealing, China, Wuxi, 32G, tue',
  t05183: 'sealing, China, Wuxi, 32G, tue',
  t05184: 'sealing, China, Wuxi, 32G, tue',
  t05185: 'sealing, China, Wuxi, 32G, tue',
  t05987: 'sealing, tue', // On-chain

  // New, sealing, recycle
  // t01060: 'new',
  // t01095: 'new',
  // t01513: 'new',
  // t02471: 'new',
  // t02681: 'new',
  // t04120: 'new',
  // t04263: 'new',

  // Asks

  // No-online deals

  // Error
  t01915: 'error, China, Zhongshan, 512M', // sending proposal to storage provider failed: failed to dial
  t02251: 'error, China, Shenzhen, 512M',
  t02974: 'error, China, Shijiazhuang, 512M', // deal failed: (State=26) error calling node: AddFunds errored: handler: websocket connection closed
  t03335: 'error, Australia, Moggill, 32G', // failed to initiate data transfer: deal data transfer failed

  // Stuck
  t03678: 'stuck, China, Shijiazhuang, 512M', // cfa
  t04278: 'stuck, Canada, Vancouver, 512M, @jimpick', // cfa
 
  // XNR

  // NR

  // More

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
