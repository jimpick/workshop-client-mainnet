const annotations = {
  // Active

  t04390: 'active, China, Beijing, 512M, 3h',
  t05220: 'active, China, Guangzhou, 32G, 10h',
  t05992: 'active, Poland, Krakow, @magik6k, 512M, 3h',
  t06029: 'active, China, Guangdong, 512M, 3h',
  t06043: 'active, China, Shijiazhuang, 512M, 2h',
  t06071: 'active, China, Changsha, 512M, 2h',
  t06102: 'active, China, Shijiazhuang, 512M, 1h',
  t07124: 'active, China, Foshan, 512M, 2h',
  t019313: 'active, China, Foshan, 512M, 2h',
  t020273: 'active, China, Guangdong, 512M, 2h',
  t020451: 'active, Korea, Geumcheon-gu, 512M, 2h',
  t022350: 'active, Malaysia, Johor Bahru, 512M, 2h',
  t022862: 'active, China, Guangdong, 512M, 2h',
  t022883: "active, China, Xi'an, 512M, 3h",
  t024583: 'active, China, Chengdu, 512M, 2h',
  t022640: 'active, Sweden, Alvsjo, 512M, 2h',
  t024670: 'active, China, Luzhou, 512M, 2h',
  t024689: 'active, Latvia, Riga, 512M, 3h',
  t024729: "active, USA, Coeur d'Alene, 512M, 2h",
  t024763: 'active, China, Zhongshan, 512M, 1h',
  t024768: 'active, USA, Boardman, 512M, 2h',
  t024771: 'active, USA, Boardman, 512M, 2h',
  t024790: 'active, USA, Boardman, 512M, 2h',
  t024791: 'active, USA, Boardman, 512M, 2h',
  t024799: 'active, China, Shenzhen, 512M, 2h',

  // Sealing
 
  t01148: 'sealing, China, Hanzhong, 32G, mon',
  t02296: 'sealing, China, Hong Kong, 512M, mon',
  t02644: 'sealing, China, Beijing, 32G, mon',
  t03496: 'sealing, USA, Irvine, 32G, mon',
  t03506: 'sealing, China, Jieyang, 32G, mon',
  t03519: 'sealing, China, Shenzhen, 32G, mon',
  t04240: 'sealing, Netherlands, Amersfoort, 32G, mon',
  t04473: 'sealing, China, Wuhan, 32G, mon',
  t04909: 'sealing, Korea, Bucheon-si, 512M, mon',
  t04944: 'sealing, China, Shaoxing, 32G, mon',
  t05126: 'sealing, China, Yibin, 32G, mon',
  t06027: 'sealing, China, Jiangmen, 512M, mon',
  t06030: 'sealing, China, Shenzhen, 32G, mon',
  t06047: 'sealing, China, Luzhou, 32G, mon',
  t06049: 'sealing, Korea, Yangcheon-gu, 32G, mon',
  t06089: 'sealing, China, Shenzhen, 32G, mon',
  t06905: 'sealing, China, Beijing, 32G, mon',
  t07021: 'sealing, Switzerland, Muhlau, 32G, mon',
  t07024: 'sealing, China, Liaoning, 32G, mon',
  t07051: 'sealing, China, Hangzhou, 32G, mon',
  t07093: 'sealing, China, Zhongshan, 512M, mon',
  t07101: 'sealing, China, Shenzhen, 32G, mon',
  t08690: 'sealing, Netherlands, Purmerend, 32G, mon',
  t08702: 'sealing, China, Bozhou, 32G, mon',
  t08818: 'sealing, China, Chengdu, 512M, mon',
  t08912: 'sealing, China, Qinhuangdao, 512M, mon',
  t08918: 'sealing, China, Hangzhou, 512M, mon',
  t017914: 'sealing, USA+China, Ningbo, 512M, mon',
  t018403: 'sealing, China, Guangdong, 512M, mon',
  t018438: 'sealing, Germany, Nuremberg, 512M, mon',
  t018574: 'sealing, China, Wuxi, 32G, mon',
  t018659: 'sealing, China, Wuxi, 32G, mon',
  t018733: 'sealing, China, Wuxi, 32G, mon',
  t018960: 'sealing, China, Jiangmen, 512M, mon',
  t019168: 'sealing, Korea, Uijeongbu-si, 32G, mon',
  t019232: 'sealing, Brazil, Sao Paulo, 32G, mon',
  t019631: 'sealing, Australia, 32G, mon',
  t020456: 'sealing, Korea, Geumcheon-gu, 512M, mon',
  t020460: 'sealing, Korea, Geumcheon-gu, 512M, mon',
  t020464: 'sealing, Korea, Geumcheon-gu, 512M, mon',
  t020488: 'sealing, Korea, Geumcheon-gu, 512M, mon',
  t021669: 'sealing, China, Shenzhen, 32G, mon',
  t022377: 'sealing, Korea, Guro-gu, 32G, mon',
  t022378: 'sealing, Korea, Geumcheon-gu, 32G, mon',
  t022379: 'sealing, Korea, Geumcheon-gu, 32G, mon',
  t022380: 'sealing, Korea, Guro-gu, 32G, mon',
  t022352: 'sealing, China, Guiyang, 32G, mon',
  t022451: 'sealing, China, Shenzhen, 512M, mon',
  t022454: 'sealing, China, Shandong, 32G, mon',
  t022604: 'sealing, China, Hangzhou, 32G, mon',
  t022611: 'sealing, China, Hangzhou, 32G, mon',
  t022670: 'sealing, Canada, Dublin, 32G, mon',
  t022701: 'sealing, China, Guangzhou, 32G, mon',
  t022791: 'sealing, Australia, Sydney, 512M, mon',
  t022834: 'sealing, China, Zhongshan, 512M, mon',
  t022890: 'sealing, China, Hunan, 32G, mon',
  t022907: 'sealing, Ireland, Dublin, 32G, mon',
  t022917: 'sealing, China, Hangzhou, 512M, mon',
  t022939: 'sealing, China, Beijing, 32G, mon',
  t023255: 'sealing, Germany, Frankfurt + China, Beijing, 32G, mon',
  t023288: 'sealing, China, Shenzhen, 32G, mon',
  t023889: 'sealing, China, Shenzhen, 32G, mon',
  t024650: 'sealing, China, Beijing, 32G, mon',
  t024679: 'sealing, China, Beijing, 32G, mon',
  t024700: 'sealing, Korea, Hwaseong-si, 64G, mon',
  t024701: 'sealing, China, Wenzhou, 32G, mon',
  t024736: 'sealing, China, Dongguan, 32G, mon',
  t024781: 'sealing, Denmark, Kobenhavn S, 32G, mon',
  t025837: 'sealing, China, Fujian, 512M, mon',

  // New, recycle




  // maddr only
  
  // Asks

  t03010: 'min-ask, China, Ningbo, 32G',
  t06135: 'min-ask, China, Shenzhen, 512M',

  // No-online deals

  // Error

  t01119: 'error, China, Deyang, 32G', // stream reset
  t02700: 'error, China, Chengdu, 32G', // deal failed: (State=26) handing off deal to node: AddPiece failed: getting available sector: getting sector number: cluster is not present.
  t03516: 'error, China, Shandong, 32G', // error reading Response message: EOF
  t04505: 'error, China, Beijing, 32G', // deal failed: (State=11) deal data verification failed: error generating CommP: failed to build tree Caused by: 0: failed to create data store 1: No such file or directory (os error 2)
  t04555: 'error, China, Shanghai, 32G', // stream reset
  t06812: 'error, China, Chengdu, 32G', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: maybeSchedRequest didn't find any good workers
  t016991: 'error, China, Shenzhen+Jieyang, 512M', // failed to dial
  t020658: 'error, China, Chongqing, 32G', // stream reset
  t020726: 'error, Russia, maddr only, 32G', // failed to dial
  t020744: 'error, China, Changzhou, 32G', // failed to dial
  t021033: 'error, New Zealand, Auckland, 32G', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: maybeSchedRequest didn't find any good workers
  t022694: 'error, Singapore, 32G', // failed to dial
  t022931: 'error, Netherlands, Amsterdam, 512M', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: cann't get worker by ip: mongo: no documents in result
  t023657: 'error, China, Chengdu, 32G', // failed to dial
  t024639: 'error, China, Shenzhen+Jieyang, 64G', // failed to dial
  t026230: 'error, China, Fuzhou, 32G', // failed to dial

  // Dial backoff

  // Stuck
  t03482: 'stuck, China, Shenzhen, 32G', // cfa
  t03508: 'stuck, Japan, Tokushima, 32G', // cfa
  t04421: 'stuck, China, Chongqing, 32G', // cfa
  t04445: 'stuck, China, Dongguan, 32G', // cfa
  t04504: 'stuck, China, Shenzhen, 32G', // cfa
  t04644: 'stuck, China, Guangzhou, 32G', // cfa
  t06075: 'stuck, China, Shijiazhuang, 512M', // cfa
  t06810: 'stuck, China, Shanghai, 32G', // cfa
  t07002: 'stuck, China, Chengdu, 32G', // cfa
  t08835: 'stuck, China, Wuhan, 32G', // cfa
  t010051: 'stuck, China, Wuhan, 512M', // cfa
  t018333: 'stuck, China, Wuxi, 32G', // cfa
  t018616: 'stuck, China, Wuxi, 32G', // cfa
  t018724: 'stuck, China, Wuxi, 32G', // cfa
  t019381: 'stuck, China, Wuxi, 512M', // cfa
  t020642: 'stuck, China, Shijiazhuang, 32G', // cfa
  t020645: 'stuck, China, Guangdong, 512M', // cfa
  t022452: 'stuck, China, Qingdao, 32G', // cfa
  t022594: 'stuck, China, Shijiazhuang, 32G', // xfr
  t022608: 'stuck, China, Shanghai, 512M', // cfa
  t022765: 'stuck, China, Shenzhen, 512M', // cfa
  t023227: 'stuck, China, Xiamen, 32G', // cfa
  t024683: 'stuck, China, Baoding, 32G', // cfa
  t024767: 'stuck, China, Guangzhou, 512M', // cfa

  // XNR

  t04442: 'xnr, China, Liaoning, 32G',
  t05960: 'xnr, China, Shenzhen, 512M',
  t06057: 'xnr, UK, London, 512M',
  t08784: 'xnr, China, Deyang, 512M',
  t010059: 'xnr, China, Shenzhen, 32G',
  t010235: 'xnr, Korea, Seongnam-si, 32G',
  t018312: 'xnr, China, Fujian, 512M',
  t020466: 'xnr, Korea, Guro-gu, 512M',
  t020639: 'xnr, Sweden, Alvsjo, 512M',
  t022418: 'xnr, USA, Berkeley, 32G',
  t022644: 'xnr, China, Taizhou, 512M',
  t022725: 'xnr, China, Beijing, 512M',
  t023003: 'xnr, China, Weifang, maddr only, 512M',
  t024446: 'xnr, Singapore, maddr only, 512M',
  t024604: 'xnr, China, Qiqihar, 512M',
  t025498: 'xnr, China, Fujian, 512M',


  // NR

  // More

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
