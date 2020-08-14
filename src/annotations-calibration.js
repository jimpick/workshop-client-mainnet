const annotations = {

  // Active - thu

  t01024: 'active, China, Shenzhen, 512M, 2h',
  t01025: 'active, China, Beijing, 512M, 2h',
  t01036: 'active, Canada, Brampton, 32G, <20h',
  t01037: 'active, China, Shenzhen, 32G, <20h',
  t01046: 'active, China, Shandong, 32G, 7h',
  t01051: 'active, Singapore, 32G, 7h',
  t01065: 'active, China, Shijiazhuang, 512M, 2h',
  t01076: 'active, Canada, Vancouver, 512M, @jimpick, 2h',
  t01087: 'active, China, Wuhan, 32G, 7h',
  t01114: 'active, Singapore, 32G, 5h',
  t01125: 'active, China, Sichuan, 32G, 18h',
  t01139: 'active, China, Fujian, 32G, 15h',
  t01229: 'active, China, Yibin, 512M, 3h',
  t01238: 'active, Sweden, Stockholm, 32G, 17h',
  t01290: 'active, China, Beijing, 512M, <11h',
  t01294: 'active, China, Luzhou, 32G, 10h',
  t01332: 'active, China, Weifang, 512M, <11h',
  t01413: 'active, China, Shenzhen, 512M, <11h',

  // Active/sealing - thu

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

  t01038: 'stuck, China, Hong Kong + Guangdong, 32G, thu-cfa',
  t01176: 'stuck, China, Guangdong, 512M, thu-xfr',
  t01335: 'stuck, China, Hangzhou, 32G, thu-cfa',
  t01363: 'stuck, China, Shanghai, 32G, thu-xfr',

  // New, recycle



  // Asks


  // No-online deals

  // Deals, but no routing
 
  t01047: 'deals',
  t01053: 'deals',
  t01105: 'deals',
  t01127: 'deals',
  t01133: 'deals',
  t01148: 'deals',
  t01202: 'deals',

  // Error

  t01109: 'error, China, Shijiazhuang, 512M', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01109: escrow balance 3199144288625385 < locked 3199144288625385 + required 780961667882 (RetCode=19)
  t01121: 'error, China, Beijing, 32G', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01121: escrow balance 3124181947248 < locked 3123935068694 + required 3121726898578 (RetCode=19)
  t01256: 'error, France, Aubervilliers, 512M', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01256: escrow balance 199951198022026 < locked 199951198022026 + required 780961667882 (RetCode=19)
  t01274: 'error, USA, Berkeley, 512M', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01274: escrow balance 49991569860766 < locked 49991569860766 + required 780961667882 (RetCode=19)
  t01309: 'error, USA, Ashburn, 512M', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01309: escrow balance 780961667882 < locked 12203117448 + required 780961667882 (RetCode=19)
  t01331: 'error, China, Weifang, 32G', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01331: escrow balance 3124181947248 < locked 3124181947248 + required 780961667882 (RetCode=19)
  t01345: 'error, China, Guangzhou, 32G', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01345: escrow balance 3122691856242 < locked 3122691856242 + required 3121726898578 (RetCode=19)


  // Dial backoff



  // Dial errors

  t01147: 'dial, China, Hong Kong, 32G',
  t01211: 'dial, China, Tongling, 32G',


  // XNR


  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
