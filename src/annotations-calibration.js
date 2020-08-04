const annotations = {
  // Active
  t05992: 'active, Poland, Krakow, @magik6k, 512M, 3h',

  // Sealing
  t02644: 'sealing, China, Beijing, 32G, mon',
  t03506: 'sealing, China, Jieyang, 32G, mon',
  t04944: 'sealing, China, Shaoxing, 32G, mon',
  t05220: 'sealing, China, Guangzhou, 32G, mon',
  t06089: 'sealing, China, Shenzhen, 32G, mon',
  t06905: 'sealing, China, Beijing, 32G, mon',
  t08912: 'sealing, China, Qinhuangdao, 512M, mon',
  t08918: 'sealing, China, Hangzhou, 512M, mon',
  t022352: 'sealing, China, Guiyang, 32G, mon',
  t022451: 'sealing, China, Shenzhen, 512M, mon',
  t022454: 'sealing, China, Shandong, 32G, mon',
  t022701: 'sealing, China, Guangzhou, 32G, mon',
  t022890: 'sealing, China, Hunan, 32G, mon',
  t023288: 'sealing, China, Shenzhen, 32G, mon',


  // New, recycle

  t01148: 'new, China, Hanzhong, 32G',
  t02296: 'new, China, Hong Kong, 512M',
  t03482: 'new, China, Shenzhen, 32G',
  t03496: 'new, USA, Irvine, 32G',
  t03508: 'new, Japan, Tokushima, 32G',
  t03519: 'new, China, Shenzhen, 32G',
  t04240: 'new, Netherlands, Amersfoort, 32G',
  t04390: 'new, China, Beijing, 512M',
  t04421: 'new, China, Chongqing, 32G',
  t04442: 'new, China, Liaoning, 32G',
  t04445: 'new, China, Dongguan, 32G',
  t04473: 'new, China, Wuhan, 32G',
  t04504: 'new, China, Shenzhen, 32G',
  t04505: 'new, China, Beijing, 32G',
  t04644: 'new, China, Guangzhou, 32G',
  t04909: 'new, Korea, Bucheon-si, 512M',
  t05126: 'new, China, Yibin, 32G',
  t05960: 'new, China, Shenzhen, 512M',
  t06027: 'new, China, Jiangmen, 512M',
  t06029: 'new, China, Guangdong, 512M',
  t06030: 'new, China, Shenzhen, 32G',
  t06043: 'new, China, Shijiazhuang, 512M',
  t06047: 'new, China, Luzhou, 32G',
  t06049: 'new, Korea, Yangcheon-gu, 32G',
  t06057: 'new, UK, London, 512M',
  t06071: 'new, China, Changsha, 512M',
  t06075: 'new, China, Shijiazhuang, 512M',
  t06102: 'new, China, Shijiazhuang, 512M',
  t06135: 'new, China, Shenzhen, 512M',
  t06810: 'new, China, Shanghai, 32G',
  t06812: 'new, China, Chengdu, 32G',
  t07002: 'new, China, Chengdu, 32G',
  t07021: 'new, Switzerland, Muhlau, 32G',
  t07024: 'new, China, Liaoning, 32G',
  t07051: 'new, China, Hangzhou, 32G',
  t07093: 'new, China, Zhongshan, 512M',
  t07101: 'new, China, Shenzhen, 32G',
  t07124: 'new, China, Foshan, 512M',
  t08690: 'new, Netherlands, Purmerend, 32G',
  t08702: 'new, China, Bozhou, 32G',
  t08784: 'new, China, Deyang, 512M',
  t08818: 'new, China, Chengdu, 512M',
  t08835: 'new, China, Wuhan, 32G',
  t010051: 'new, China, Wuhan, 512M',
  t010059: 'new, China, Shenzhen, 32G',
  t010235: 'new, Korea, Seongnam-si, 32G',
  t016991: 'new, China, Shenzhen+Jieyang, 512M',
  t017914: 'new, USA+China, Ningbo, 512M',
  t018312: 'new, China, Fujian, 512M',
  t018403: 'new, China, Guangdong, 512M',
  t018438: 'new, Germany, Nuremberg, 512M',
  t018574: 'new, China, Wuxi, 32G',
  t018659: 'new, China, Wuxi, 32G',
  t018733: 'new, China, Wuxi, 32G',
  t018960: 'new, China, Jiangmen, 512M',
  t019168: 'new, Korea, Uijeongbu-si, 32G',
  t019232: 'new, Brazil, Sao Paulo, 32G',
  t019313: 'new, China, Foshan, 512M',
  t019381: 'new, China, Wuxi, 512M',
  t019631: 'new, Australia, 32G',
  t020273: 'new, China, Guangdong, 512M',
  t020451: 'new, Korea, Geumcheon-gu, 512M',
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
  t021669: 'new, China, Shenzhen, 32G',
  t022350: 'new, Malaysia, Johor Bahru, 512M',
  t022377: 'new, Korea, Guro-gu, 32G',
  t022378: 'new, Korea, Geumcheon-gu, 32G',
  t022379: 'new, Korea, Geumcheon-gu, 32G',
  t022380: 'new, Korea, Guro-gu, 32G',
  t022418: 'new, USA, Berkeley, 32G',
  t022452: 'new, China, Qingdao, 32G',
  t022604: 'new, China, Hangzhou, 32G',
  t022608: 'new, China, Shanghai, 512M',
  t022611: 'new, China, Hangzhou, 32G',
  t022640: 'new, Sweden, Alvsjo, 512M',
  t022644: 'new, China, Taizhou, 512M',
  t022670: 'new, Canada, Dublin, 32G',
  t022725: 'new, China, Beijing, 512M',
  t022765: 'new, China, Shenzhen, 512M',
  t022791: 'new, Australia, Sydney, 512M',
  t022834: 'new, China, Zhongshan, 512M',
  t022862: 'new, China, Guangdong, 512M',
  t022883: "new, China, Xi'an, 512M",
  t022907: 'new, Ireland, Dublin, 32G',
  t022917: 'new, China, Hangzhou, 512M',
  t022931: 'new, Netherlands, Amsterdam, 512M',
  t022939: 'new, China, Beijing, 32G',
  t023003: 'new, China, Weifang, maddr only, 512M',
  t023227: 'new, China, Xiamen, 32G',
  t023255: 'new, Germany, Frankfurt + China, Beijing, 32G',
  t023889: 'new, China, Shenzhen, 32G',
  t024446: 'new, Singapore, maddr only, 512M',
  t024583: 'new, China, Chengdu, 512M',
  t024604: 'new, China, Qiqihar, 512M',
  t024639: 'new, China, Shenzhen+Jieyang, 64G',
  t024650: 'new, China, Beijing, 32G',
  t024670: 'new, China, Luzhou, 512M',
  t024679: 'new, China, Beijing, 32G',
  t024700: 'new, Korea, Hwaseong-si, 64G',
  t024768: 'new, USA, Boardman, 512M',
  t024683: 'new, China, Baoding, 32G',
  t024689: 'new, Latvia, Riga, 512M',
  t024701: 'new, China, Wenzhou, 32G',
  t024736: 'new, China, Dongguan, 32G',
  t024729: "new, USA, Coeur d'Alene, 512M",
  t024763: 'new, China, Zhongshan, 512M',
  t024767: 'new, China, Guangzhou, 512M',
  t024771: 'new, USA, Boardman, 512M',
  t024781: 'new, Denmark, Kobenhavn S, 32G',
  t024790: 'new, USA, Boardman, 512M',
  t024791: 'new, USA, Boardman, 512M',
  t024799: 'new, China, Shenzhen, 512M',
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
