const annotations = {

  // Active - sat
  
  // Active/sealing - sat
 
  t01024: 'active, China, Shenzhen, 512M, 2h, 2h, sat',
  t01036: 'active, Canada, Brampton, 32G, Deal Rank 4, <20h, 21h, sat',
  t01093: 'active, Singapore, 32G, Power Rank 9, Deal Rank 3, 16h, sat',
  t01114: 'active, Singapore, 32G, 5h, Power Rank 6, Deal Rank 2, 5h, sat',
  t01125: 'active, China, Sichuan, 32G, 18h, 12h, sat',
  t01229: 'active, China, Yibin, 512M, 3h, sat',
  t01238: 'active, Sweden, Stockholm, 32G, 17h, 13h, sat',
  t01290: 'active, China, Beijing, 512M, <11h, 2h, sat',
  t01429: 'active, China, Shanghai, 512M, Deal Rank 9, 6h, sat',
  t01665: 'active, China, Hangzhou, 32G, Power Rank 10, 11h, sat',
  t01705: 'active, China, Wuxi, 32G, 14h, sat',
  t01813: 'active, China, Wuxi, 32G, Power Rank 3, 9h, sat',
  t01822: 'active, China, Wuxi, 32G, 10h, sat',
  t01923: 'active, Singapore, 512M, 2h, sat',
  t01945: 'active, China, Guyuan, 512M, 3h, sat',
  t02056: "active, China, Xi'an, 32G, 12h, sat",

  // Active - fri

  t01872: 'active, China, Shenzhen, 512M, 2h, sat-xfr',
  t01966: 'active, China, Taizhou, 512M, 6h, sat-xfr',

  // Active/sealing - fri
 
  t01139: 'active, China, Fujian, 32G, 15h, sat-funds',

  // Active - thu

  t01025: 'active, China, Beijing, 512M, 2h, sat-cfa',

  // Sealing - sat
 
  t01039: 'sealing, China, Liaoning, 32G, sat',
  t01053: 'sealing, Korea, Seongnam-si, 32G, Deal Rank 10, sat',
  t01065: 'sealing, China, Shijiazhuang, 512M, 2h, 2h, sat',
  t01074: 'sealing, China, Fujian, 32G, sat',
  t01087: 'sealing, China, Wuhan, 32G, Power Rank 1, 7h, sat',
  t01089: 'sealing, Singapore, 32G, Power Rank 4, Deal Rank 1, 17h, sat',
  t01148: 'sealing, China, Beijing, 512M, sat',
  t01202: 'sealing, China, Hong Kong, 32G, sat',
  t01209: 'sealing, Switzerland, Muhlau, 32G, sat',
  t01213: 'sealing, USA, Grand Rapids, 32G, sat',
  t01214: 'sealing, China, Shijiazhuang, 32G, sat',
  t01235: 'sealing, USA, San Jose, 32G, sat',
  t01240: 'sealing, Singapore, 32G, Deal Rank 5, sat',
  t01242: 'sealing, Finland, Helsinki, 512M, sat',
  t01259: 'sealing, China, Beijing, 32G, sat',
  t01313: 'sealing, USA, Irvine, 32G, sat',
  t01331: 'sealing, China, Weifang, 32G, sat',
  t01363: 'sealing, China, Shanghai, 32G, sat',
  t01598: 'sealing, China, Liaoning, 512M, sat',
  t01737: 'sealing, China, Jiaxing, 32G, sat',
  t01817: 'sealing, China, Wuxi, 32G, sat',
  t01819: 'sealing, China, Wuxi, 32G, Power Rank 10, sat',
  t01968: 'sealing, Korea, Guro-gu, 512M, sat',
  t01200: 'sealing, China, Hong Kong, 32G, Power Rank 8, sat',
  t02139: 'sealing, Korea, Yangcheon-gu, 32G, sat',
  t02366: 'sealing, China, Shenyang, 512M, sat',
  t02428: 'sealing, China, Jiangmen, 512M, sat',

  // Stuck - sat
 
  t01056: 'stuck, China, Chengdu, 32G, sat-xfr',
  t01161: 'stuck, China, Guangzhou + Hong Kong, 32G, sat-cfa',
  t01595: 'stuck, China, Jiangmen, 512M, sat-xfr',
  t01638: 'stuck, China, Beijing, 32G, sat-cfa',
  t01662: 'stuck, China, Jiangsu, 32G, sat-cfa',
  t02017: 'stuck, China, Shenzhen, 512M, sat-xfr',
  t02443: 'stuck, China, Zhongshen, 512M, sat-xfr',

  // Sealing - fri

  t01061: 'sealing, Singapore, 32G, fri',
  t01127: 'sealing, China, Yibin, 32G, fri',
  t01151: 'sealing, Singapore, 32G, fri',
  t01270: 'sealing, China, Guangzhou, 32G, fri',
  t01345: 'sealing, China, Guangzhou, 32G, fri',
  t01399: 'sealing, China, Wuhan, 32G, fri',
  t01694: 'sealing, China, Wuhan, 32G, fri',
  t02057: 'sealing, China, Shandong, 32G, fri',

  // Stuck - fri
 

  // Sealing - thu



  // New


  // Asks

  t01076: 'min-ask, Canada, Vancouver, 512M, @jimpick, 2h, 2h', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: storage price per epoch less than asking price: 125000000 < 2500000000000000000

  // No-online deals

  // Error

  t01051: 'error, Singapore, 32G, Power Rank 2, 7h', // rejected
  t01689: 'error, China, Wuhan, 32G, Power Rank 7, 9h', // rejected
  t02035: 'error, China, Guyuan, 512M, 3h', // rejected
  t02125: 'error, China, Guangzhou, 512M, fri', // reset

  // Escrow errors

  t01047: "escrow, USA, Coeur d'Alene, 512M, @why",
  t01088: 'escrow, Germany, Roesrath, 32G',
  t01111: 'escrow, USA, Mountain View, 32G',
  t01132: 'escrow, Latvia, Riga, 32G',
  t01133: 'escrow, Singapore, 32G',
  t01176: 'escrow, China, Guangdong, 512M, 2h',
  t01231: 'escrow, USA, Rochester, 32G, thu',
  t01244: "escrow, USA, Coeur d'Alene, 512M, @why",
  t01256: 'escrow, France, Aubervilliers, 512M, 2h',
  t01294: 'escrow, China, Luzhou, 32G, 10h, fri',
  t01309: 'escrow, USA, Ashburn, 512M',
  t01315: 'escrow, China, Shenzhen, 32G, Deal Rank 8, thu',
  t01332: 'escrow, China, Weifang, 512M, <11h, 2h',
  t01410: 'escrow, USA, 32G, Deal Rank 6',
  t01847: 'escrow, USA, Ashburn, 512M, 9h',
  t02088: 'escrow, China, Ordos, 32G',
  t02327: 'escrow, USA, Boardman, 512M',
  t02328: 'escrow, USA, Boardman, 512M',
  t02330: 'escrow, USA, Boardman, 512M',
  t02331: 'escrow, USA, Boardman, 512M',


  // Dial backoff

  t01046: 'backoff, China, Shandong, 32G, 7h, fri',
  t02127: 'backoff, Australia, 32G',


  // Dial errors

  t01037: 'dial, China, Shenzhen, 32G, <20h',
  t01038: 'dial, China, Hong Kong + Guangdong, 32G, Power Rank 5, fri-cfa',
  t01109: 'dial, China, Shijiazhuang, 512M',
  t01121: 'dial, China, Beijing, Deal Rank 7, 32G',
  t01147: 'dial, China, Hong Kong, 32G',
  t01211: 'dial, China, Tongling, 32G',
  t01274: 'dial, USA, Berkeley, 512M',
  t01299: 'dial, China, Guangzhou, 32G, thu',
  t01318: 'dial, China, Jiaxing, 32G, thu',
  t01412: 'dial, China, Fujian, 32G, thu',
  t01413: 'dial, China, Shenzhen, 512M, <11h',
  t01434: 'dial, China, Shaanxi, 512M',
  t01578: 'dial, Korea, Uiwang, 512M',
  t01633: 'dial, China, Foshan, 512M',
  t02114: 'dial, Australia, 32G',
  t02178: 'dial, China, Chengdu, 512M',
  t02209: 'dial, China, Xiamen, 512M, 6h',
  t02329: 'dial, USA, Boardman, 512M, 10h',
  t02332: 'dial, USA, Boardman, 512M, 2h',
  t02458: 'dial, China, Changsha, 512M',


  // XNR

  t01045: 'xnr, Netherlands, Amersfoort, 32G, @Rob, thu',
  t01187: 'xnr, China, Zhongshan, 32G, thu',
  t01227: 'xnr, China, Shandong, 32G, thu',
  t01269: 'xnr, China, Xinxiang, 32G, thu',
  t01335: 'xnr, China, Hangzhou, 32G, thu-cfa',
  t02040: 'xnr, China, Zhongshan, 512M',
  t02078: 'xnr, China, Shenzhen, 512M',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
