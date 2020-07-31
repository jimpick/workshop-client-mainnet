const annotations = {
  // Active
  t02276: 'active, China, Shenzhen, 32G, 12h, fri',
  t03705: 'active, China, Shenzhen, 512M, 1h, 2h, fri',
  t04278: 'active, Canada, Vancouver, 512M, @jimpick, 1h, 1h, fri',
  t04448: 'active, China, Hangzhou, 32G, 5h, 9h, fri',
  t05182: 'active, China, Wuxi, 32G, 16h, fri',
  t06733: 'active, China, Beijing, 32G, 19h, fri',
  t06818: 'active, Korea, Bucheon-si, 512M, 4h, 2h, fri', 
  t07392: 'active, China, Wuhan, 512M, 2h, fri',
  t09019: 'active, Korea, Geumcheon-gu, 512M, 2h, 2h, fri',
  t09065: 'active, Korea, Geumcheon-gu, 512M, 3h, 2h, fri',
  t09066: 'active, Korea, Guro-gu, 512M, 2h, fri',
  t09067: 'active, Korea, Geumcheon-gu, 512M, 2h, fri',
  t09068: 'active, Korea, Geumcheon-gu, 512M, 2h, fri',
  t09287: 'active, Korea, Geumcheon-gu, 512M, 2h, fri',
  t09466: 'active, China, Hong Kong, 32G, 10h, fri',
  t010135: 'active, China, Shandong, 512M, 2h, fri',
  t015036: 'active, China, Shijiazhuang, 512M, 2h, fri',
  t015485: 'active, China, Shijiazhuang, 512M, 1h, 1h, fri',
  t021695: 'active, China, Zhongshan, 32G, 20h, fri',
  t023117: 'active, China, Chengdu, 512M, 2h, fri',
  t023151: 'active, China, Beijing, 32G, 8h, fri',
  t023156: 'active, China, Foshan, 512M, 2h, fri',
  t023159: 'active, China, Foshan, 512M, 2h, fri',
  t023213: 'active, China, Dalian, 32G, 12h, fri',
  t023300: 'active, China, Shijiazhuang, 32G, 11h, fri',
  t023326: 'active, China, Zhongshan, 32G, 14h, fri',
  t023426: 'active, China, Shandong, 32G, 18h, fri',
  t023449: 'active, China, Shenzhen, 32G, 16h, fri',
  t023512: 'active, USA, Boardman, 512M, @ribasushi, 1h*, fri',
  t023515: 'active, USA, Boardman, 512M, @ribasushi, 1h*, fri',
  t023525: 'active, China, Ningbo, 32G, 12h, fri',

  // Sealing
  t01322: 'sealing, China, Wuhan, 32G, fri',
  t02039: 'sealing, China, Hong Kong, 32G, fri',
  t02456: 'sealing, Canada, Embrun, 32G, fri',
  t02962: 'sealing, China, Shenzhen+Jieyang, 32G, fri',
  t04721: 'sealing, China, Chengdu, 32G, fri',
  t04723: 'sealing, China, Guangdong, 32G, fri',
  t04904: 'sealing, China, Shijiazhuang, 512M, fri',
  t05183: 'sealing, China, Wuxi, 32G, thu',
  t05184: 'sealing, China, Wuxi, 32G, thu',
  t05987: 'sealing, China, Wuhan, 32G, thu',
  t06072: 'sealing, China, Wuhan, 32G, fri',
  t07349: 'sealing, China, Guangzhou, 32G, fri',
  t07576: 'sealing, China, Wuxi, 32G, fri',
  t09509: 'sealing, China, Chengdu, 32G, fri',
  t010048: 'sealing, China, Shenzhen, 32G, fri',
  t010487: 'sealing, China, Wuxi, 32G, fri',
  t014692: 'sealing, Netherlands, Amersfoort, 32G, fri',
  t014805: 'sealing, China, Luzhou, 32G, fri',
  t019954: 'sealing, China, Jinan, 32G, fri',
  t020047: 'sealing, China, Shanghai, 32G, fri',
  t020204: 'sealing, USA, Kellogg, 32G, fri',
  t023116: 'sealing, USA, Boardman, 32G, @jimpick, wed, fri',
  t023158: 'sealing, China, Chengdu, 32G, thu',
  t023162: 'sealing, China, Foshan, 512M, fri',
  t023195: 'sealing, China, Ningxia, 32G, thu',
  t023197: 'sealing, China, Hangzhou, 32G, fri',
  t023290: 'sealing, China, Chengdu, 32G, thu',
  t023406: 'sealing, China, Guangzhou, 32G, thu',
  t023461: 'sealing, China, Quanzhou, 32G, thu',
  t023485: 'sealing, Canada, Huron East, 32G, thu',
  t023498: 'sealing, China, Zhengzhou, 32G, thu',
  t023539: 'sealing, Denmark, Kobenhavn S, 32G, thu',
  t023580: 'sealing, USA, Grand Rapids, 512M, fri',
  t023602: 'sealing, China, Quanzhou, 32G, fri',
  t023631: 'sealing, China, Shenzhen, 64G, fri',
  t023766: 'sealing, China, Beijing, 32G, fri',
  t023785: 'sealing, Sweden, Stockholm, 512M, fri',
  t023796: 'sealing, China, Shenzhen, 32G, fri',
  t023807: 'sealing, China, Chengdu, 32G, fri',
  t023819: 'sealing, China, Chengdu, 512M, fri',
  t023823: 'sealing, Korea, Wanju, 512M, fri',
  t023836: 'sealing, China, Guyuan, 32G, fri',
  t023846: 'sealing, China, Wuhan, 512M, fri',


  // New, recycle


  // maddr only
  
  // Asks

  // No-online deals

  // Error
  t02329: 'error, China, Hangzhou, 512M, 2h', // deal data transfer failed
  t06144: 'error, China, Beijing, 512M, 1h', // deal failed: (State=26) error calling node: ensuring funds: estimating gas limit: message execution failed: exit 16, reason: balance to add must be greater than zero (RetCode=16)
  t06650: 'error, China, Hangzhou, 512M, 2h', // deal failed: (State=26) error calling node: ensuring funds: estimating gas limit: message execution failed: exit 16, reason: balance to add must be greater than zero (RetCode=16)
  t06730: 'error, China, Yibin, China, Liaoning512M', // stream reset
  t07253: 'error, China, Zhongshan, 512M, 1h, 2h', // deal failed: (State=11) error calling node: ensuring funds: estimating gas limit: message execution failed: exit 16, reason: balance to add must be greater than zero (RetCode=16)
  t08883: 'error, China, Shenzhen, 512M', // failed to dial
  t014888: 'error, China, Zhongshan, 512M, 1h', // failed to dial
  t017625: 'error, China, Fujian, 512M, wed', // deal failed: (State=26) error calling node: ensuring funds: estimating gas limit: message execution failed: exit 16, reason: balance to add must be greater than zero (RetCode=16)
  t017805: 'error, China, Dongguan, 512M, 3h, 8h', // failed to dial
  t018018: 'error, China, Yibin, 32G, wed', // failed to initiate data transfer: deal data transfer failed
  t019481: 'error, China, Hong Kong, 512M, 4h', // deal failed: (State=26) error calling node: ensuring funds: estimating gas limit: message execution failed: exit 16, reason: balance to add must be greater than zero (RetCode=16)
  t020089: 'error, China, Shanghai, 32G, wed', // deal failed: (State=26) error calling node: ensuring funds: estimating gas limit: message execution failed: exit 16, reason: balance to add must be greater than zero (RetCode=16)
  t020117: 'error, Russia, 32G, wed', // failed to dial
  t023204: 'error, China, Shenzhen, 32G', // (State=26) deal data verification failed: error generating CommP: failed to build tree Caused by: 0: failed to create data store 1: Permission denied (os error 13)
  t023214: 'error, New Zealand, Auckland, 32G', // (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: maybeSchedRequest didn't find any good workers
  t023380: 'error, China, Wuxi, 32G, 14h', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: getting client market balance failed

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
  t016968: 'stuck, China, Wuxi, 512M, 1h, thu', // cfa
  t019908: 'stuck, Germany, Frankfurt, 32G, wed', // cfa
  t023082: 'stuck, China, Zhangjiakou, 32G', // cfa
  t023430: 'stuck, China, Shenzhen, 32G', // cfa

  // XNR
  t01047: 'xnr, China, Zhejiang, 32G, 9h',
  t01118: 'xnr, China, Guyuan, 512M, wed',
  t01233: 'xnr, China, Yangzhou, 32G, wed',
  t01434: 'xnr, China, Hong Kong, 512M',
  t01915: 'xnr, China, Zhongshan, 512M',
  t02251: 'xnr, China, Shenzhen, 512M',
  t02974: 'xnr, China, Shijiazhuang, 512M',
  t03678: 'xnr, China, Shijiazhuang, 512M',
  t04280: 'xnr, China, Shanghai, 512M',
  t04366: 'xnr, China, Chengdu, 32G', // deal failed: (State=26) error calling node: ensuring funds: estimating gas limit: message execution failed: exit 16, reason: balance to add must be greater than zero (RetCode=16)
  t05017: 'xnr, China, Shijiazhuang, 32G',
  t05235: 'xnr, China, Liaoning, 32G', // nr
  t06187: 'xnr, China, Zhongshan, 512M, 1h',
  t06734: 'xnr, China, Guangzhou, 32G', // deal failed: (State=26) error calling node: AddFunds errored: found message with equal nonce as the one we are looking for (F:bafy2bzaceai2gbtcz2mdthuujjox2umppdoztbjyovc3j3p45f52iaopajw7g n 3729, TS: bafy2bzaced66rnd37bqakprxnzp6tafshm5p3vvahkjpgutzep33m2zhhq2sq n3729)
  t06866: 'xnr, China, Hangzhou, 512M, 2h',
  t07108: 'xnr, China, Chengdu, 32G, wed',
  t07191: 'xnr, China, Guyuan, 32G',
  t07487: 'xnr, China, Guangzhou, 32G', // nr
  t09331: "xnr, China, Xi'an, 512M, wed",
  t09596: 'xnr, China, Jieyang, 512M, thu',
  t09599: 'xnr, USA, San Jose, 32G, wed',
  t010220: 'xnr, Korea, Yangcheon-gu, 32G, wed',
  t010483: 'xnr, Sweden, Stockholm, 512M', // maddr only
  t010624: 'xnr, Sweden, Stockholm, 32G, wed',
  t010936: 'xnr, China, Shandong, 32G, wed',
  t012169: 'xnr, China, Guilin, 32G, wed',
  t013370: 'xnr, China, Fujian, 512M, wed',
  t013628: 'xnr, China, Zhongshan, 512M', // maddr only
  t015164: 'xnr, China, Zhongshan, 512M', // maddr only
  t015323: 'xnr, China, Shanghai, 32G, wed',
  t015579: "xnr, China, Xi'an, 32G", // dial backoff
  t016827: 'xnr, China, Changsha, 512M, 2h',
  t017935: 'xnr, Netherlands, Purmerend, 32G', // (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: cann't get worker by ip: mongo: no documents in result
  t017977: 'xnr, USA, Ashburn, 512M',
  t018901: 'xnr, China, Shenzhen, 512M, wed',
  t019960: 'xnr, USA, Rochester, 512M, wed',
  t020008: 'xnr, China, Ningbo, 32G, wed',
  t020022: 'xnr, China, Beijing, 32G',
  t020185: 'xnr, China, Shanghai, 32G, wed',
  t023080: 'xnr, China, Fujian, 32G, 21h',
  t023323: 'xnr, China, Guyuan, 32G, 15h',
  t023376: 'xnr, Latvia, Riga, 512M, 2h',
  t023384: 'xnr, China, Beijing, 512M, 2h',
  t023559: 'xnr, USA, Berkeley, 32G', // nr



  // NR

  // More

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
