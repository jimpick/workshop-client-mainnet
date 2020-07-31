const annotations = {
  // Active
  t02276: 'active, China, Shenzhen, 32G, 12h',
  t03705: 'active, China, Shenzhen, 512M, 1h, 2h',
  t04278: 'active, Canada, Vancouver, 512M, @jimpick, 1h, 1h',
  t04448: 'active, China, Hangzhou, 32G, 5h, 9h',
  t05182: 'active, China, Wuxi, 32G, 16h',
  t06733: 'active, China, Beijing, 32G, 19h',
  t06818: 'active, Korea, Bucheon-si, 512M, 4h, 2h', 
  t07253: 'active, China, Zhongshan, 512M, 1h, 2h',
  t07392: 'active, China, Wuhan, 512M, 2h',
  t09019: 'active, Korea, Geumcheon-gu, 512M, 2h, 2h',
  t09065: 'active, Korea, Geumcheon-gu, 512M, 3h, 2h',
  t09066: 'active, Korea, Guro-gu, 512M, 2h',
  t09067: 'active, Korea, Geumcheon-gu, 512M, 2h',
  t09068: 'active, Korea, Geumcheon-gu, 512M, 2h',
  t09287: 'active, Korea, Geumcheon-gu, 512M, 2h',
  t09466: 'active, China, Hong Kong, 32G, 10h',
  t010135: 'active, China, Shandong, 512M, 2h',
  t015036: 'active, China, Shijiazhuang, 512M, 2h',
  t015485: 'active, China, Shijiazhuang, 512M, 1h, 1h',
  t016827: 'active, China, Changsha, 512M, 2h',
  t016968: 'active, China, Wuxi, 512M, 1h, thu', // cfa
  t017805: 'active, China, Dongguan, 512M, 3h, 8h',
  t021695: 'active, China, Zhongshan, 32G, 20h',
  t023080: 'active, China, Fujian, 32G, 21h',
  t023117: 'active, China, Chengdu, 512M, 2h',
  t023151: 'active, China, Beijing, 32G, 8h',
  t023156: 'active, China, Foshan, 512M, 2h',
  t023159: 'active, China, Foshan, 512M, 2h',
  t023213: 'active, China, Dalian, 32G, 12h',
  t023300: 'active, China, Shijiazhuang, 32G, 11h',
  t023323: 'active, China, Guyuan, 32G, 15h',
  t023326: 'active, China, Zhongshan, 32G, 14h',
  t023376: 'active, Latvia, Riga, 512M, 2h',
  t023380: 'active, China, Wuxi, 32G, 14h',
  t023384: 'active, China, Beijing, 512M, 2h',
  t023426: 'active, China, Shandong, 32G, 18h',
  t023449: 'active, China, Shenzhen, 32G, 16h',
  t023512: 'active, USA, Boardman, 512M, @ribasushi, 1h*',
  t023515: 'active, USA, Boardman, 512M, @ribasushi, 1h*',
  t023525: 'active, China, Ningbo, 32G, 12h',

  // Sealing
  t01233: 'sealing, China, Yangzhou, 32G, wed',
  t01322: 'sealing, China, Wuhan, 32G, wed',
  t02456: 'sealing, Canada, Embrun, 32G, wed',
  t02962: 'sealing, China, Shenzhen+Jieyang, 32G, wed',
  t04721: 'sealing, China, Chengdu, 32G, wed',
  t04723: 'sealing, China, Guangdong, 32G, wed',
  t05183: 'sealing, China, Wuxi, 32G, thu',
  t05184: 'sealing, China, Wuxi, 32G, thu',
  t05987: 'sealing, China, Wuhan, 32G, thu',
  t06072: 'sealing, China, Wuhan, 32G, wed',
  t07108: 'sealing, China, Chengdu, 32G, wed',
  t07576: 'sealing, China, Wuxi, 32G, wed',
  t09509: 'sealing, China, Chengdu, 32G, wed',
  t09596: 'sealing, China, Jieyang, 512M, thu',
  t09599: 'sealing, USA, San Jose, 32G, wed',
  t010048: 'sealing, China, Shenzhen, 32G, wed',
  t010220: 'sealing, Korea, Yangcheon-gu, 32G, wed',
  t010487: 'sealing, China, Wuxi, 32G, wed',
  t010624: 'sealing, Sweden, Stockholm, 32G, wed',
  t010936: 'sealing, China, Shandong, 32G, wed',
  t012169: 'sealing, China, Guilin, 32G, wed',
  t014805: 'sealing, China, Luzhou, 32G, wed',
  t015323: 'sealing, China, Shanghai, 32G, wed',
  t018018: 'sealing, China, Yibin, 32G, wed',
  t019908: 'sealing, Germany, Frankfurt, 32G, wed',
  t019954: 'sealing, China, Jinan, 32G, wed',
  t020008: 'sealing, China, Ningbo, 32G, wed',
  t020047: 'sealing, China, Shanghai, 32G, wed',
  t020089: 'sealing, China, Shanghai, 32G, wed',
  t020117: 'sealing, Russia, 32G, wed',
  t020185: 'sealing, China, Shanghai, 32G, wed',
  t020204: 'sealing, USA, Kellogg, 32G, wed',
  t023116: 'sealing, USA, Boardman, 32G, @jimpick, wed',
  t023158: 'sealing, China, Chengdu, 32G, thu',
  t023195: 'sealing, China, Ningxia, 32G, thu',
  t023290: 'sealing, China, Chengdu, 32G, thu',
  t023406: 'sealing, China, Guangzhou, 32G, thu',
  t023461: 'sealing, China, Quanzhou, 32G, thu',
  t023485: 'sealing, Canada, Huron East, 32G, thu',
  t023498: 'sealing, China, Zhengzhou, 32G, thu',
  t023539: 'sealing, Denmark, Kobenhavn S, 32G, thu',


  // New, recycle

  t023559: 'xnr, USA, Berkeley, 32G', // nr

  // maddr only
  
  // Asks

  // No-online deals

  // Error
  t02039: 'error, China, Hong Kong, 32G', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: no suitable P1 workers found
  t02329: 'error, China, Hangzhou, 512M, 2h', // deal data transfer failed
  t04904: 'error, China, Shijiazhuang, 512M', // failed to dial
  t05235: 'error, China, Liaoning, 32G', // nr
  t06144: 'error, China, Beijing, 512M, 1h', // deal failed: (State=26) error calling node: ensuring funds: estimating gas limit: message execution failed: exit 16, reason: balance to add must be greater than zero (RetCode=16)
  t06650: 'error, China, Hangzhou, 512M, 2h', // deal failed: (State=26) error calling node: ensuring funds: estimating gas limit: message execution failed: exit 16, reason: balance to add must be greater than zero (RetCode=16)
  t06730: 'error, China, Yibin, China, Liaoning512M', // stream reset
  t06734: 'error, China, Guangzhou, 32G', // deal failed: (State=26) error calling node: AddFunds errored: found message with equal nonce as the one we are looking for (F:bafy2bzaceai2gbtcz2mdthuujjox2umppdoztbjyovc3j3p45f52iaopajw7g n 3729, TS: bafy2bzaced66rnd37bqakprxnzp6tafshm5p3vvahkjpgutzep33m2zhhq2sq n3729)
  t07487: 'error, China, Guangzhou, 32G', // nr
  t08883: 'error, China, Shenzhen, 512M', // failed to dial
  t014692: 'error, Netherlands, Amersfoort, 32G', // failed to dial
  t014888: 'error, China, Zhongshan, 512M, 1h', // failed to dial
  t017625: 'error, China, Fujian, 512M, wed', // deal failed: (State=26) error calling node: ensuring funds: estimating gas limit: message execution failed: exit 16, reason: balance to add must be greater than zero (RetCode=16)
  t019481: 'error, China, Hong Kong, 512M, 4h', // deal failed: (State=26) error calling node: ensuring funds: estimating gas limit: message execution failed: exit 16, reason: balance to add must be greater than zero (RetCode=16)
  t023204: 'error, China, Shenzhen, 32G', // (State=26) deal data verification failed: error generating CommP: failed to build tree Caused by: 0: failed to create data store 1: Permission denied (os error 13)
  t023214: 'error, New Zealand, Auckland, 32G', // (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: maybeSchedRequest didn't find any good workers

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
  t05185: 'stuck, China, Wuxi, 32G, thu', // cfa
  t05323: "stuck, China, Xi'an, 32G", // cfa
  t07349: 'stuck, China, Guangzhou, 32G, thu', // xfr
  t023082: 'stuck, China, Zhangjiakou, 32G', // cfa
  t023162: 'stuck, China, Foshan, 512M', // cfa
  t023197: 'stuck, China, Hangzhou, 32G', // cfa
  t023430: 'stuck, China, Shenzhen, 32G', // cfa


  // XNR
  t01047: 'xnr, China, Zhejiang, 32G, 9h',
  t01118: 'xnr, China, Guyuan, 512M, wed',
  t01434: 'xnr, China, Hong Kong, 512M',
  t01915: 'xnr, China, Zhongshan, 512M',
  t02251: 'xnr, China, Shenzhen, 512M',
  t02974: 'xnr, China, Shijiazhuang, 512M',
  t03678: 'xnr, China, Shijiazhuang, 512M',
  t04280: 'xnr, China, Shanghai, 512M',
  t04366: 'xnr, China, Chengdu, 32G', // deal failed: (State=26) error calling node: ensuring funds: estimating gas limit: message execution failed: exit 16, reason: balance to add must be greater than zero (RetCode=16)
  t05017: 'xnr, China, Shijiazhuang, 32G',
  t06187: 'xnr, China, Zhongshan, 512M, 1h',
  t06866: 'xnr, China, Hangzhou, 512M, 2h',
  t07191: 'xnr, China, Guyuan, 32G',
  t09331: "xnr, China, Xi'an, 512M, wed",
  t010483: 'xnr, Sweden, Stockholm, 512M', // maddr only
  t013370: 'xnr, China, Fujian, 512M, wed',
  t013628: 'xnr, China, Zhongshan, 512M', // maddr only
  t015164: 'xnr, China, Zhongshan, 512M', // maddr only
  t015579: "xnr, China, Xi'an, 32G", // dial backoff
  t017935: 'xnr, Netherlands, Purmerend, 32G', // (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: cann't get worker by ip: mongo: no documents in result
  t017977: 'xnr, USA, Ashburn, 512M',
  t018901: 'xnr, China, Shenzhen, 512M, wed',
  t019960: 'xnr, USA, Rochester, 512M, wed',
  t020022: 'xnr, China, Beijing, 32G',

  // NR

  // More

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
