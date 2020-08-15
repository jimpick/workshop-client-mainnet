const annotations = {

  // Active - fri

  t01024: 'active, China, Shenzhen, 512M, 2h, 2h',
  t01065: 'active, China, Shijiazhuang, 512M, 2h, 2h',
  t01256: 'active, France, Aubervilliers, 512M, 2h',
  t01290: 'active, China, Beijing, 512M, <11h, 2h',

  // Active/sealing - fri
 
  t01036: 'active, Canada, Brampton, 32G, <20h, fri',
  t01046: 'active, China, Shandong, 32G, 7h, fri',
  t01114: 'active, Singapore, 32G, 5h, fri',
  t01139: 'active, China, Fujian, 32G, 15h, fri',
  t01229: 'active, China, Yibin, 512M, 3h, fri',
  t01238: 'active, Sweden, Stockholm, 32G, 17h, fri',
  t01294: 'active, China, Luzhou, 32G, 10h, fri',

  // Active - thu

  t01025: 'active, China, Beijing, 512M, 2h',

  // Active/sealing - thu

  // Sealing - fri


  t01061: 'sealing, Singapore, 32G, fri',
  t01125: 'sealing, China, Sichuan, 32G, 18h, fri',
  t01127: 'sealing, China, Yibin, 32G, fri',
  t01151: 'sealing, Singapore, 32G, fri',
  t01176: 'sealing, China, Guangdong, 512M, fri',
  t01270: 'sealing, China, Guangzhou, 32G, fri',
  t01345: 'sealing, China, Guangzhou, 32G, fri',
  t01399: 'sealing, China, Wuhan, 32G, fri',
  t01429: 'sealing, China, Shanghai, 512M, fri',
  t01595: 'sealing, China, Jiangmen, 512M, fri',
  t01598: 'sealing, China, Liaoning, 512M, fri',
  t01665: 'sealing, China, Hangzhou, 32G, fri',
  t01689: 'sealing, China, Wuhan, 32G, fri',
  t01694: 'sealing, China, Wuhan, 32G, fri',
  t01705: 'sealing, China, Wuxi, 32G, fri',
  t01813: 'sealing, China, Wuxi, 32G, fri',
  t01822: 'sealing, China, Wuxi, 32G, fri',
  t01847: 'sealing, USA, Ashburn, 512M, fri',
  t01872: 'sealing, China, Shenzhen, 512M, fri',
  t01923: 'sealing, Singapore, 512M, fri',
  t01945: 'sealing, China, Guyuan, 512M, fri',
  t01966: 'sealing, China, Taizhou, 512M, fri',
  t02035: 'sealing, China, Guyuan, 512M, fri',
  t02056: "sealing, China, Xi'an, 32G, fri",
  t02057: 'sealing, China, Shandong, 32G, fri',
  t02125: 'sealing, China, Guangzhou, 512M, fri',
  t02209: 'sealing, China, Xiamen, 512M, fri',
  t02329: 'sealing, USA, Boardman, 512M, fri',


  // Stuck - fri
 
  t01161: 'stuck, China, Guangzhou + Hong Kong, 32G, fri-cfa',
  t01638: 'stuck, China, Beijing, 32G, fri-cfa',

  // Sealing - thu

  t01039: 'sealing, China, Liaoning, 32G, thu',
  t01045: 'sealing, Netherlands, Amersfoort, 32G, @Rob, thu',
  t01089: 'sealing, Singapore, 32G, thu',
  t01093: 'sealing, Singapore, 32G, thu',
  t01187: 'sealing, China, Zhongshan, 32G, thu',
  t01209: 'sealing, Switzerland, Muhlau, 32G, thu',
  t01213: 'sealing, USA, Grand Rapids, 32G, thu',
  t01214: 'sealing, China, Shijiazhuang, 32G, thu',
  t01227: 'sealing, China, Shandong, 32G, thu',
  t01231: 'sealing, USA, Rochester, 32G, thu',
  t01235: 'sealing, USA, San Jose, 32G, thu',
  t01259: 'sealing, China, Beijing, 32G, thu',
  t01269: 'sealing, China, Xinxiang, 32G, thu',
  t01299: 'sealing, China, Guangzhou, 32G, thu',
  t01313: 'sealing, USA, Irvine, 32G, thu',
  t01315: 'sealing, China, Shenzhen, 32G, thu',
  t01318: 'sealing, China, Jiaxing, 32G, thu',
  t01412: 'sealing, China, Fujian, 32G, thu',
  t01819: 'sealing, China, Wuxi, 32G, thu',
  t01240: 'sealing, Singapore, 32G, thu',

  // Stuck - thu

  t01038: 'stuck, China, Hong Kong + Guangdong, 32G, fri-cfa',

  // New, recycle

  t01074: 'new, China, Fujian, 32G',
  t01410: 'new, USA, 32G',
  t01662: 'new, China, Jiangsu, 32G',
  t01737: 'new, China, Jiaxing, 32G',
  t02088: 'new, China, Ordos, 32G',
  t02139: 'new, Korea, Yangcheon-gu, 32G',
  t02114: 'new, Australia, 32G',
  t02127: 'new, Australia, 32G',

  // Asks

  t01076: 'min-ask, Canada, Vancouver, 512M, @jimpick, 2h, 2h', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: storage price per epoch less than asking price: 125000000 < 2500000000000000000

  // No-online deals

  // Deals, but no routing
 
  t01047: 'deals',
  t01053: 'deals',
  t01105: 'deals',
  t01111: 'deals',
  t01132: 'deals',
  t01133: 'deals',
  t01148: 'deals',
  t01202: 'deals',
  t01244: 'deals',

  // Error

  t01051: 'error, Singapore, 32G, 7h', // deal failed: (State=11) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01051: escrow balance 10142789741860 < locked 10142789741860 + required 3117275609982 (RetCode=19)
  t01056: 'error, China, Chengdu, 32G', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01056: escrow balance 6240582445724 < locked 6240582445724 + required 3115156326638 (RetCode=19)
  t01087: 'error, China, Wuhan, 32G, 7h', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01087: escrow balance 7020986981788 < locked 7020986981788 + required 3117275609982 (RetCode=19)
  t01088: 'error, Germany, Roesrath, 32G', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01088: escrow balance 63835006290395253 < locked 63835006290395253 + required 3115156326638 (RetCode=19)
  t01242: 'error, Finland, Helsinki, 512M',
  t01309: 'error, USA, Ashburn, 512M', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01309: escrow balance 780961667882 < locked 12203117448 + required 780961667882 (RetCode=19)
  t01331: 'error, China, Weifang, 32G', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01331: escrow balance 3124181947248 < locked 3124181947248 + required 780961667882 (RetCode=19)
  t01332: 'error, China, Weifang, 512M, <11h', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01332: escrow balance 9363255836950 < locked 9363255836950 + required 3117275609982 (RetCode=19)
  t01363: 'error, China, Shanghai, 32G, thu-xfr', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01363: escrow balance 7018488242530 < locked 7018488242530 + required 3116990832122 (RetCode=19)
  t01968: 'error, Korea, Guro-gu, 512M', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01968: escrow balance 12779801900406868 < locked 12779801900406868 + required 3115156326638 (RetCode=19)
  t02017: 'error, China, Shenzhen, 512M',
  t02040: 'error, China, Zhongshan, 512M',
  t02327: 'error, USA, Boardman, 512M',
  t02328: 'error, USA, Boardman, 512M',
  t02330: 'error, USA, Boardman, 512M',
  t02331: 'error, USA, Boardman, 512M',
  t02332: 'error, USA, Boardman, 512M',



  // Dial backoff



  // Dial errors

  t01037: 'dial, China, Shenzhen, 32G, <20h',
  t01109: 'dial, China, Shijiazhuang, 512M',
  t01121: 'dial, China, Beijing, 32G',
  t01147: 'dial, China, Hong Kong, 32G',
  t01211: 'dial, China, Tongling, 32G',
  t01274: 'dial, USA, Berkeley, 512M',
  t01413: 'dial, China, Shenzhen, 512M, <11h',
  t01434: 'dial, China, Shaanxi, 512M',
  t01578: 'dial, Korea, Uiwang, 512M',
  t01633: 'dial, China, Foshan, 512M',
  t02178: 'dial, China, Chengdu, 512M',



  // XNR

  t01335: 'xnr, China, Hangzhou, 32G, thu-cfa',
  t02078: 'xnr, China, Shenzhen, 512M',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
