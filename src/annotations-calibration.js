const annotations = {
  // Active
  t01047: 'active, China, Zhejiang, 32G, 9h',
  t02329: 'active, China, Hangzhou, 512M, 2h',
  t03705: 'active, China, Shenzhen, 512M, 1h',
  t06144: 'active, China, Beijing, 512M, 1h',
  t06187: 'active, China, Zhongshan, 512M, 1h',
  t07253: 'active, China, Zhongshan, 512M, 1h',

  // Sealing
  t01118: 'sealing, China, Guyuan, 512M, wed',
  t05182: 'sealing, China, Wuxi, 32G, tue',
  t05183: 'sealing, China, Wuxi, 32G, tue',
  t05184: 'sealing, China, Wuxi, 32G, tue',
  t05185: 'sealing, China, Wuxi, 32G, tue',
  t05987: 'sealing, China, Wuhan, 32G, tue',
  t019481: 'sealing, China, Hong Kong, 512M, wed',

  // New, sealing, recycle
  t01233: 'new, China, Yangzhou, 32G',
  t01322: 'new, China, Wuhan, 32G',
  t01434: 'new, China, Hong Kong, 512M',
  t02039: 'new, China, Hong Kong, 32G',
  t02456: 'new, Canada, Embrun, 32G',
  t02712: 'new, China, Shenzhen, 32G',
  t02962: 'new, China, Shenzhen+Jieyang, 32G',
  t04143: 'new, China, Beijing, 32G',
  t04366: 'new, China, Chengdu, 32G',
  t04645: 'new, China, Beijing, 32G',
  t04721: 'new, China, Chengdu, 32G',
  t04723: 'new, China, Guangdong, 32G',
  t04904: 'new, China, Shijiazhuang, 512M',
  t07108: 'new, China, Chengdu, 32G',
  t07191: 'new, China, Guyuan, 32G',
  t07349: 'new, China, Guangzhou, 32G',
  t07392: 'new, China, Wuhan, 512M',
  t09066: 'new, Korea, Guro-gu, 512M',
  t09067: 'new, Korea, Geumcheon-gu, 512M',
  t09068: 'new, Korea, Geumcheon-gu, 512M',
  t09287: 'new, Korea, Geumcheon-gu, 512M',
  t09331: "new, China, Xi'an, 512M",
  t09507: 'new, China, Changsha, 512M',
  t09596: 'new, China, Jieyang, 512M',
  t09599: 'new, USA, San Jose, 32G',
  t010048: 'new, China, Shenzhen, 32G',
  t010135: 'new, China, Shandong, 512M',
  t010220: 'new, Korea, Yangcheon-gu, 32G',
  t010487: 'new, China, Wuxi, 32G',
  t010624: 'new, Sweden, Stockholm, 32G',
  t010936: 'new, China, Shandong, 32G',
  t013370: 'new, China, Fujian, 512M',
  t014888: 'new, China, Zhongshan, 512M',
  t015036: 'new, China, Shijiazhuang, 512M',
  t015485: 'new, China, Shijiazhuang, 512M',
  t016827: 'new, China, Changsha, 512M',
  t016968: 'new, China, Wuxi, 512M',
  t017625: 'new, China, Fujian, 512M',
  t017805: 'new, China, Dongguan, 512M',
  t018901: 'new, China, Shenzhen, 512M',

  // maddr only
  t04280: 'new, maddr only',
  t05017: 'new, China, Shijiazhuang, 32G',
  t05235: 'new, maddr only',
  t06734: 'new, China, Guangzhou, 32G',
  t06866: 'new, maddr only',
  t07487: 'new, maddr only',
  t09466: 'new, maddr only',
  t09509: 'new, maddr only',
  t010483: 'new, maddr only',
  t013628: 'new, maddr only',
  t015164: 'new, maddr only',
  
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
