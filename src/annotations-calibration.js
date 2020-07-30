const annotations = {
  // Active
  t01047: 'active, China, Zhejiang, 32G, 9h',
  t02329: 'active, China, Hangzhou, 512M, 2h',
  t03705: 'active, China, Shenzhen, 512M, 1h',
  t04278: 'active, Canada, Vancouver, 512M, @jimpick, 1h',
  t04448: 'active, China, Hangzhou, 32G, 5h',
  t06144: 'active, China, Beijing, 512M, 1h',
  t06187: 'active, China, Zhongshan, 512M, 1h',
  t06650: 'active, China, Hangzhou, 512M, 2h',
  t06818: 'active, Korea, Bucheon-si, 512M, 4h', 
  t06866: 'active, China, Hangzhou, 512M, 2h',
  t07253: 'active, China, Zhongshan, 512M, 1h',
  t09019: 'active, Korea, Geumcheon-gu, 512M, 2h',
  t09065: 'active, Korea, Geumcheon-gu, 512M, 3h',
  t014888: 'active, China, Zhongshan, 512M, 1h',
  t015485: 'active, China, Shijiazhuang, 512M, 1h',
  t016968: 'active, China, Wuxi, 512M, 1h',
  t017805: 'active, China, Dongguan, 512M, 3h',
  t019481: 'active, China, Hong Kong, 512M, 4h',

  // Sealing
  t01118: 'sealing, China, Guyuan, 512M, wed',
  t01233: 'sealing, China, Yangzhou, 32G, wed',
  t01322: 'sealing, China, Wuhan, 32G, wed',
  t02276: 'sealing, China, Shenzhen, 32G, wed',
  t02456: 'sealing, Canada, Embrun, 32G, wed',
  t02962: 'sealing, China, Shenzhen+Jieyang, 32G, wed',
  t04721: 'sealing, China, Chengdu, 32G, wed',
  t04723: 'sealing, China, Guangdong, 32G, wed',
  t05182: 'sealing, China, Wuxi, 32G, tue',
  t05183: 'sealing, China, Wuxi, 32G, tue',
  t05184: 'sealing, China, Wuxi, 32G, tue',
  t05185: 'sealing, China, Wuxi, 32G, tue',
  t05987: 'sealing, China, Wuhan, 32G, tue',
  t06072: 'sealing, China, Wuhan, 32G, wed',
  t06733: 'sealing, China, Beijing, 32G, wed',
  t07108: 'sealing, China, Chengdu, 32G, wed',
  t07392: 'sealing, China, Wuhan, 512M, wed',
  t07576: 'sealing, China, Wuxi, 32G, wed',
  t09066: 'sealing, Korea, Guro-gu, 512M, wed',
  t09067: 'sealing, Korea, Geumcheon-gu, 512M, wed',
  t09068: 'sealing, Korea, Geumcheon-gu, 512M, wed',
  t09287: 'sealing, Korea, Geumcheon-gu, 512M, wed',
  t09331: "sealing, China, Xi'an, 512M, wed",
  t09466: 'sealing, China, Hong Kong, 32G, thu',
  t09509: 'sealing, China, Chengdu, 32G, wed',
  t09596: 'sealing, China, Jieyang, 512M, wed',
  t09599: 'sealing, USA, San Jose, 32G, wed',
  t010048: 'sealing, China, Shenzhen, 32G, wed',
  t010135: 'sealing, China, Shandong, 512M, wed',
  t010220: 'sealing, Korea, Yangcheon-gu, 32G, wed',
  t010487: 'sealing, China, Wuxi, 32G, wed',
  t010624: 'sealing, Sweden, Stockholm, 32G, wed',
  t010936: 'sealing, China, Shandong, 32G, wed',
  t012169: 'sealing, China, Guilin, 32G, wed',
  t013370: 'sealing, China, Fujian, 512M, wed',
  t014805: 'sealing, China, Luzhou, 32G, wed',
  t015036: 'sealing, China, Shijiazhuang, 512M, wed',
  t015323: 'sealing, China, Shanghai, 32G, wed',
  t016827: 'sealing, China, Changsha, 512M, wed',
  t017625: 'sealing, China, Fujian, 512M, wed',
  t018018: 'sealing, China, Yibin, 32G, wed',
  t018901: 'sealing, China, Shenzhen, 512M, wed',
  t019908: 'sealing, Germany, Frankfurt, 32G, wed',
  t019954: 'sealing, China, Jinan, 32G, wed',
  t019960: 'sealing, USA, Rochester, 512M, wed',
  t020008: 'sealing, China, Ningbo, 32G, wed',
  t020047: 'sealing, China, Shanghai, 32G, wed',
  t020089: 'sealing, China, Shanghai, 32G, wed',
  t020117: 'sealing, Russia, 32G, wed',
  t020185: 'sealing, China, Shanghai, 32G, wed',
  t020204: 'sealing, USA, Kellogg, 32G, wed',
  t021695: 'sealing, China, Zhongshan, 32G, wed',
  t023080: 'sealing, China, Fujian, 32G, wed',
  t023116: 'sealing, USA, Boardman, 32G, @jimpick, wed',
  t023117: 'sealing, China, Chengdu, 512M, thu',

  // New, recycle

  t07349: 'xfr, China, Guangzhou, 32G, thu',
  t023082: 'new, China, Zhangjiakou, 32G',
  t023151: 'new, China, Beijing, 32G',
  t023156: 'new, China, Foshan, 512M',
  t023158: 'new, China, Chengdu, 32G',
  t023159: 'new, China, Foshan, 512M',
  t023162: 'new, China, Foshan, 512M',
  t023195: 'new, China, Ningxia, 32G',
  t023197: 'new, China, Hangzhou, 32G',
  t023204: 'new, China, Shenzhen, 32G',
  t023213: 'new, China, Dalian, 32G',
  t023214: 'new, New Zealand, Auckland, 32G',
  t023290: 'new, China, Chengdu, 32G',
  t023300: 'new, China, Shijiazhuang, 32G',
  t023323: 'new, China, Guyuan, 32G',
  t023326: 'new, China, Zhongshan, 32G',
  t023376: 'new, Latvia, Riga, 512M',
  t023380: 'new, China, Wuxi, 32G',
  t023384: 'new, China, Beijing, 512M',
  t023406: 'new, China, Guangzhou, 32G',
  t023426: 'new, China, Shandong, 32G',
  t023430: 'new, China, Shenzhen, 32G',
  t023449: 'new, China, Shenzhen, 32G',


  // maddr only
  
  // Asks

  // No-online deals

  // Error
  t02039: 'error, China, Hong Kong, 32G', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: no suitable P1 workers found
  t04904: 'error, China, Shijiazhuang, 512M', // failed to dial
  t05235: 'error, China, Liaoning, 32G', // nr
  t06730: 'error, China, Yibin, China, Liaoning512M', // stream reset
  t06734: 'error, China, Guangzhou, 32G', // deal failed: (State=26) error calling node: AddFunds errored: found message with equal nonce as the one we are looking for (F:bafy2bzaceai2gbtcz2mdthuujjox2umppdoztbjyovc3j3p45f52iaopajw7g n 3729, TS: bafy2bzaced66rnd37bqakprxnzp6tafshm5p3vvahkjpgutzep33m2zhhq2sq n3729)
  t07487: 'error, China, Guangzhou, 32G', // nr
  t08883: 'error, China, Shenzhen, 512M', // failed to dial
  t014692: 'error, Netherlands, Amersfoort, 32G', // failed to dial

  // Dial backoff
  t02712: 'backoff, China, Shenzhen, 32G', // cfa
  t03335: 'backoff, Australia, Moggill, 32G', // cfa
  t04143: 'backoff, China, Beijing, 32G', // cfa
  t04645: 'backoff, China, Beijing, 32G', // dial backoff
  t09507: 'backoff, China, Changsha, 512M', // dial backoff
  t017888: 'backoff, China, Wuxi, 32G', // dial backoff
  t020106: 'backoff, USA, Grand Rapids, 512M', // dial backoff
  t021680: 'backoff, China, Shenzhen, 512M', // dial backoff

  // Stuck
  t05323: "stuck, China, Xi'an, 32G", // cfa

 
  // XNR
  t01434: 'xnr, China, Hong Kong, 512M',
  t01915: 'xnr, China, Zhongshan, 512M',
  t02251: 'xnr, China, Shenzhen, 512M',
  t02974: 'xnr, China, Shijiazhuang, 512M',
  t03678: 'xnr, China, Shijiazhuang, 512M',
  t04280: 'xnr, China, Shanghai, 512M',
  t04366: 'xnr, China, Chengdu, 32G', // deal failed: (State=26) error calling node: ensuring funds: estimating gas limit: message execution failed: exit 16, reason: balance to add must be greater than zero (RetCode=16)
  t05017: 'xnr, China, Shijiazhuang, 32G',
  t07191: 'xnr, China, Guyuan, 32G',
  t010483: 'xnr, Sweden, Stockholm, 512M', // maddr only
  t013628: 'xnr, China, Zhongshan, 512M', // maddr only
  t015164: 'xnr, China, Zhongshan, 512M', // maddr only
  t015579: "xnr, China, Xi'an, 32G", // dial backoff
  t017935: 'xnr, Netherlands, Purmerend, 32G', // (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: cann't get worker by ip: mongo: no documents in result
  t017977: 'xnr, USA, Ashburn, 512M',
  t020022: 'xnr, China, Beijing, 32G',

  // NR

  // More

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
