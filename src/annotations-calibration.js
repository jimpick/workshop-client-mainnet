const annotations = {
  // Active
  t05992: 'active, Poland, Krakow, @magik6k, 512M, 3h',

  // Sealing
  t01148: 'sealing, China, Hanzhong, 32G, mon',
  t02296: 'sealing, China, Hong Kong, 512M, mon',
  t02644: 'sealing, China, Beijing, 32G, mon',
  t03496: 'sealing, USA, Irvine, 32G, mon',
  t03506: 'sealing, China, Jieyang, 32G, mon',
  t03519: 'sealing, China, Shenzhen, 32G, mon',
  t04240: 'sealing, Netherlands, Amersfoort, 32G, mon',
  t04390: 'sealing, China, Beijing, 512M, mon',
  t04473: 'sealing, China, Wuhan, 32G, mon',
  t04909: 'sealing, Korea, Bucheon-si, 512M, mon',
  t04944: 'sealing, China, Shaoxing, 32G, mon',
  t05126: 'sealing, China, Yibin, 32G, mon',
  t05220: 'sealing, China, Guangzhou, 32G, mon',
  t06027: 'sealing, China, Jiangmen, 512M, mon',
  t06029: 'sealing, China, Guangdong, 512M, mon',
  t06030: 'sealing, China, Shenzhen, 32G, mon',
  t06043: 'sealing, China, Shijiazhuang, 512M, mon',
  t06047: 'sealing, China, Luzhou, 32G, mon',
  t06071: 'sealing, China, Changsha, 512M, mon',
  t06089: 'sealing, China, Shenzhen, 32G, mon',
  t06102: 'sealing, China, Shijiazhuang, 512M, mon',
  t06905: 'sealing, China, Beijing, 32G, mon',
  t07021: 'sealing, Switzerland, Muhlau, 32G, mon',
  t07051: 'sealing, China, Hangzhou, 32G, mon',
  t07093: 'sealing, China, Zhongshan, 512M, mon',
  t07124: 'sealing, China, Foshan, 512M, mon',
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
  t019313: 'sealing, China, Foshan, 512M, mon',
  t019631: 'sealing, Australia, 32G, mon',
  t020273: 'sealing, China, Guangdong, 512M, mon',
  t020451: 'sealing, Korea, Geumcheon-gu, 512M, mon',
  t021669: 'sealing, China, Shenzhen, 32G, mon',
  t022350: 'sealing, Malaysia, Johor Bahru, 512M, mon',
  t022377: 'sealing, Korea, Guro-gu, 32G, mon',
  t022378: 'sealing, Korea, Geumcheon-gu, 32G, mon',
  t022379: 'sealing, Korea, Geumcheon-gu, 32G, mon',
  t022380: 'sealing, Korea, Guro-gu, 32G, mon',
  t022352: 'sealing, China, Guiyang, 32G, mon',
  t022451: 'sealing, China, Shenzhen, 512M, mon',
  t022454: 'sealing, China, Shandong, 32G, mon',
  t022604: 'sealing, China, Hangzhou, 32G, mon',
  t022611: 'sealing, China, Hangzhou, 32G, mon',
  t022640: 'sealing, Sweden, Alvsjo, 512M, mon',
  t022670: 'sealing, Canada, Dublin, 32G, mon',
  t022701: 'sealing, China, Guangzhou, 32G, mon',
  t022834: 'sealing, China, Zhongshan, 512M, mon',
  t022862: 'sealing, China, Guangdong, 512M, mon',
  t022883: "sealing, China, Xi'an, 512M, mon",
  t022890: 'sealing, China, Hunan, 32G, mon',
  t022907: 'sealing, Ireland, Dublin, 32G, mon',
  t023255: 'sealing, Germany, Frankfurt + China, Beijing, 32G, mon',
  t023288: 'sealing, China, Shenzhen, 32G, mon',
  t023889: 'sealing, China, Shenzhen, 32G, mon',
  t024583: 'sealing, China, Chengdu, 512M, mon',
  t024650: 'sealing, China, Beijing, 32G, mon',
  t024670: 'sealing, China, Luzhou, 512M, mon',
  t024679: 'sealing, China, Beijing, 32G, mon',
  t024700: 'sealing, Korea, Hwaseong-si, 64G, mon',
  t024768: 'sealing, USA, Boardman, 512M, mon',
  t024689: 'sealing, Latvia, Riga, 512M, mon',
  t024701: 'sealing, China, Wenzhou, 32G, mon',
  t024736: 'sealing, China, Dongguan, 32G, mon',
  t024729: "sealing, USA, Coeur d'Alene, 512M, mon",
  t024763: 'sealing, China, Zhongshan, 512M, mon',
  t024771: 'sealing, USA, Boardman, 512M, mon',
  t024781: 'sealing, Denmark, Kobenhavn S, 32G, mon',
  t024790: 'sealing, USA, Boardman, 512M, mon',
  t024791: 'sealing, USA, Boardman, 512M, mon',
  t024799: 'sealing, China, Shenzhen, 512M, mon',


  // New, recycle

  t03482: 'new, China, Shenzhen, 32G',
  t03508: 'new, Japan, Tokushima, 32G',
  t04421: 'new, China, Chongqing, 32G',
  t04442: 'new, China, Liaoning, 32G',
  t04445: 'new, China, Dongguan, 32G',
  t04504: 'new, China, Shenzhen, 32G',
  t04505: 'new, China, Beijing, 32G',
  t04644: 'new, China, Guangzhou, 32G',
  t05960: 'new, China, Shenzhen, 512M',
  t06049: 'new, Korea, Yangcheon-gu, 32G',
  t06057: 'new, UK, London, 512M',
  t06075: 'new, China, Shijiazhuang, 512M',
  t06135: 'new, China, Shenzhen, 512M',
  t06810: 'new, China, Shanghai, 32G',
  t06812: 'new, China, Chengdu, 32G',
  t07002: 'new, China, Chengdu, 32G',
  t07024: 'new, China, Liaoning, 32G',
  t07101: 'new, China, Shenzhen, 32G',
  t08784: 'new, China, Deyang, 512M',
  t08835: 'new, China, Wuhan, 32G',
  t010051: 'new, China, Wuhan, 512M',
  t010059: 'new, China, Shenzhen, 32G',
  t010235: 'new, Korea, Seongnam-si, 32G',
  t016991: 'new, China, Shenzhen+Jieyang, 512M',
  t018312: 'new, China, Fujian, 512M',
  t019381: 'new, China, Wuxi, 512M',
  t020456: 'new, Korea, Geumcheon-gu, 512M',
  t020460: 'new, Korea, Geumcheon-gu, 512M',
  t020464: 'new, Korea, Geumcheon-gu, 512M',
  t020466: 'new, Korea, Guro-gu, 512M',
  t020488: 'new, Korea, Geumcheon-gu, 512M',
  t020639: 'new, Sweden, Alvsjo, 512M',
  t020642: 'new, China, Shijiazhuang, 32G',
  t020645: 'new, China, Guangdong, 512M',
  t020658: 'new, China, Chongqing, 32G',
  t020726: 'new, Russia, maddr only, 32G',
  t020744: 'new, China, Changzhou, 32G',
  t021033: 'new, New Zealand, Auckland, 32G',
  t022418: 'new, USA, Berkeley, 32G',
  t022452: 'new, China, Qingdao, 32G',
  t022608: 'new, China, Shanghai, 512M',
  t022644: 'new, China, Taizhou, 512M',
  t022725: 'new, China, Beijing, 512M',
  t022765: 'new, China, Shenzhen, 512M',
  t022791: 'new, Australia, Sydney, 512M',
  t022917: 'new, China, Hangzhou, 512M',
  t022931: 'new, Netherlands, Amsterdam, 512M',
  t022939: 'new, China, Beijing, 32G',
  t023003: 'new, China, Weifang, maddr only, 512M',
  t023227: 'new, China, Xiamen, 32G',
  t024446: 'new, Singapore, maddr only, 512M',
  t024604: 'new, China, Qiqihar, 512M',
  t024639: 'new, China, Shenzhen+Jieyang, 64G',
  t024683: 'new, China, Baoding, 32G',
  t024767: 'new, China, Guangzhou, 512M',
  t025498: 'new, China, Fujian, 512M',
  t025837: 'new, China, Fujian, 512M',
  t026230: 'new, China, Fuzhou, 32G',



  // maddr only
  
  // Asks
  t03010: 'min-ask, China, Ningbo, 32G',

  // No-online deals

  // Error
  t01119: 'error, China, Deyang, 32G', // stream reset
  t02700: 'error, China, Chengdu, 32G', // deal failed: (State=26) handing off deal to node: AddPiece failed: getting available sector: getting sector number: cluster is not present.
  t03516: 'error, China, Shandong, 32G', // error reading Response message: EOF
  t04555: 'error, China, Shanghai, 32G', // stream reset
  t022694: 'error, Singapore, 32G', // failed to dial
  t023657: 'error, China, Chengdu, 32G', // failed to dial

  // Dial backoff

  // Stuck
  t018333: 'stuck, China, Wuxi, 32G', // cfa
  t018616: 'stuck, China, Wuxi, 32G', // cfa
  t018724: 'stuck, China, Wuxi, 32G', // cfa
  t022594: 'stuck, China, Shijiazhuang, 32G', // xfr

  // XNR



  // NR

  // More

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
