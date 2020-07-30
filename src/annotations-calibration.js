const annotations = {
  // Active
  t01047: 'active, China, Zhejiang, 32G, 9h',
  t02329: 'active, China, Hangzhou, 512M, 2h',
  t03705: 'active, China, Shenzhen, 512M, 1h',
  t04278: 'active, Canada, Vancouver, 512M, @jimpick, 1h',
  t06144: 'active, China, Beijing, 512M, 1h',
  t06187: 'active, China, Zhongshan, 512M, 1h',
  t06866: 'active, maddr only, 512M, 2h',
  t07253: 'active, China, Zhongshan, 512M, 1h',
  t014888: 'active, China, Zhongshan, 512M, 1h',
  t015485: 'active, China, Shijiazhuang, 512M, 1h',
  t016968: 'active, China, Wuxi, 512M, 1h',
  t017805: 'active, China, Dongguan, 512M, 3h',
  t019481: 'active, China, Hong Kong, 512M, 4h',

  // Sealing
  t01118: 'sealing, China, Guyuan, 512M, wed',
  t01233: 'sealing, China, Yangzhou, 32G, wed',
  t01322: 'sealing, China, Wuhan, 32G, wed',
  t02456: 'sealing, Canada, Embrun, 32G, wed',
  t02962: 'sealing, China, Shenzhen+Jieyang, 32G, wed',
  t04721: 'sealing, China, Chengdu, 32G, wed',
  t04723: 'sealing, China, Guangdong, 32G, wed',
  t05182: 'sealing, China, Wuxi, 32G, tue',
  t05183: 'sealing, China, Wuxi, 32G, tue',
  t05184: 'sealing, China, Wuxi, 32G, tue',
  t05185: 'sealing, China, Wuxi, 32G, tue',
  t05987: 'sealing, China, Wuhan, 32G, tue',
  t07108: 'sealing, China, Chengdu, 32G, wed',
  t07392: 'sealing, China, Wuhan, 512M, wed',
  t09066: 'sealing, Korea, Guro-gu, 512M, wed',
  t09067: 'sealing, Korea, Geumcheon-gu, 512M, wed',
  t09068: 'sealing, Korea, Geumcheon-gu, 512M, wed',
  t09287: 'sealing, Korea, Geumcheon-gu, 512M, wed',
  t09509: 'sealing, maddr only, 32G, wed',
  t09596: 'sealing, China, Jieyang, 512M, wed',
  t09599: 'sealing, USA, San Jose, 32G, wed',
  t010048: 'sealing, China, Shenzhen, 32G, wed',
  t010135: 'sealing, China, Shandong, 512M, wed',
  t010220: 'sealing, Korea, Yangcheon-gu, 32G, wed',
  t010487: 'sealing, China, Wuxi, 32G, wed',
  t010624: 'sealing, Sweden, Stockholm, 32G, wed',
  t010936: 'sealing, China, Shandong, 32G, wed',
  t013370: 'sealing, China, Fujian, 512M, wed',
  t015036: 'sealing, China, Shijiazhuang, 512M, wed',
  t016827: 'sealing, China, Changsha, 512M, wed',
  t017625: 'sealing, China, Fujian, 512M, wed',
  t018901: 'sealing, China, Shenzhen, 512M, wed',

  // New, recycle
  t012169: 'new, China, Guilin, 32G',
  t014692: 'new, Netherlands, Amersfoort, 32G',
  t014805: 'new, China, Luzhou, 32G',
  t015323: 'new, China, Shanghai, 32G',
  t015579: "new, China, Xi'an, 32G",
  t017888: 'new, China, Wuxi, 32G',
  t017935: 'new, Netherlands, Purmerend, 32G',
  t017977: 'new, USA, Ashburn, 512M',
  t018018: 'new, China, Yibin, 32G',
  t019908: 'new, Germany, Frankfurt, 32G',
  t019954: 'new, China, Jinan, 32G',
  t019960: 'new, USA, Rochester, 512M',
  t020047: 'new, China, Shanghai, 32G',
  t020089: 'new, China, Shanghai, 32G',
  t020106: 'new, USA, Grand Rapids, 512M',
  t020117: 'new, Russia, 32G',
  t020185: 'new, China, Shanghai, 32G',

  // maddr only
  
  // Asks

  // No-online deals

  // Error
  t01434: 'error, China, Hong Kong, 512M', // nr
  t01915: 'error, China, Zhongshan, 512M', // sending proposal to storage provider failed: failed to dial
  t02039: 'error, China, Hong Kong, 32G', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: no suitable P1 workers found
  t02251: 'error, China, Shenzhen, 512M', // sending proposal to storage provider failed: failed to dial
  t02974: 'error, China, Shijiazhuang, 512M', // deal failed: (State=26) error calling node: AddFunds errored: handler: websocket connection closed
  t04280: 'error, maddr only, 512M', // nr
  t04904: 'error, China, Shijiazhuang, 512M', // sending proposal to storage provider failed: failed to dial
  t05017: 'error, China, Shijiazhuang, 32G', // sending proposal to storage provider failed: failed to dial
  t05235: 'error, maddr only, 32G', // nr
  t07487: 'error, maddr only, 32G', // nr
  t09466: 'error, maddr only, 32G', // sending proposal to storage provider failed: failed to dial
  t010483: 'error, maddr only, 512M', // nr
  t013628: 'error, maddr only, 512M', // nr
  t015164: 'error, maddr only, 512M', // sending proposal to storage provider failed: dial backoff

  // Stuck
  t02712: 'stuck, China, Shenzhen, 32G', // cfa
  t03335: 'stuck, Australia, Moggill, 32G', // cfa
  t03678: 'stuck, China, Shijiazhuang, 512M', // cfa
  t04143: 'stuck, China, Beijing, 32G', // cfa
  t04366: 'stuck, China, Chengdu, 32G', // cfa
  t04645: 'stuck, China, Beijing, 32G', // cfa
  t06734: 'stuck, China, Guangzhou, 32G', // cfs
  t07191: 'stuck, China, Guyuan, 32G', // cfa
  t07349: 'stuck, China, Guangzhou, 32G', // cfa
  t09331: "stuck, China, Xi'an, 512M", // xfr
  t09507: 'stuck, China, Changsha, 512M', // cfa
 
  // XNR

  // NR

  // More

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
