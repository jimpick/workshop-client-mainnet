const annotations = {

  // Active - fri

  // Active/sealing - fri
 
  t01024: 'active, China, Shenzhen, 512M, 2h, fri',
  t01036: 'active, Canada, Brampton, 32G, <20h, fri',
  t01065: 'active, China, Shijiazhuang, 512M, 2h, fri',
  t01076: 'active, Canada, Vancouver, 512M, @jimpick, 2h, fri',
  t01114: 'active, Singapore, 32G, 5h, fri',
  t01229: 'active, China, Yibin, 512M, 3h, fri',
  t01238: 'active, Sweden, Stockholm, 32G, 17h, fri',
  t01290: 'active, China, Beijing, 512M, <11h, fri',
  t01294: 'active, China, Luzhou, 32G, 10h, fri',

  // Active - thu

  t01025: 'active, China, Beijing, 512M, 2h',

  // Active/sealing - thu

  // Sealing - fri

  t01256: 'sealing, France, Aubervilliers, 512M, fri',
  t01345: 'sealing, China, Guangzhou, 32G, fri',

  // Stuck - fri
 
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

  t01046: 'error, China, Shandong, 32G, 7h', // context
  t01051: 'error, Singapore, 32G, 7h', // deal failed: (State=11) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01051: escrow balance 10142789741860 < locked 10142789741860 + required 3117275609982 (RetCode=19)
  t01087: 'error, China, Wuhan, 32G, 7h', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01087: escrow balance 7020986981788 < locked 7020986981788 + required 3117275609982 (RetCode=19)
  t01109: 'error, China, Shijiazhuang, 512M', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01109: escrow balance 3199144288625385 < locked 3199144288625385 + required 780961667882 (RetCode=19)
  t01125: 'error, China, Sichuan, 32G, 18h', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01125: escrow balance 7490664594504 < locked 7490664594504 + required 3117275609982 (RetCode=19)
  t01139: 'error, China, Fujian, 32G, 15h', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01139: escrow balance 3124181947248 < locked 2818236063919 + required 3117275609982 (RetCode=19)
  t01176: 'error, China, Guangdong, 512M, thu-xfr', // deal failed: (State=11) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01176: escrow balance 56224836596018 < locked 56224836596018 + required 3116990832122 (RetCode=19)
  t01309: 'error, USA, Ashburn, 512M', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01309: escrow balance 780961667882 < locked 12203117448 + required 780961667882 (RetCode=19)
  t01331: 'error, China, Weifang, 32G', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01331: escrow balance 3124181947248 < locked 3124181947248 + required 780961667882 (RetCode=19)
  t01332: 'error, China, Weifang, 512M, <11h', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01332: escrow balance 9363255836950 < locked 9363255836950 + required 3117275609982 (RetCode=19)
  t01363: 'error, China, Shanghai, 32G, thu-xfr', // deal failed: (State=26) error calling node: publishing deal: estimating gas used: message execution failed: exit 19, reason: failed to lock balance: failed to lock provider funds: not enough balance to lock for addr t01363: escrow balance 7018488242530 < locked 7018488242530 + required 3116990832122 (RetCode=19)


  // Dial backoff



  // Dial errors

  t01037: 'dial, China, Shenzhen, 32G, <20h',
  t01121: 'dial, China, Beijing, 32G',
  t01147: 'dial, China, Hong Kong, 32G',
  t01211: 'dial, China, Tongling, 32G',
  t01274: 'dial, USA, Berkeley, 512M',
  t01413: 'dial, China, Shenzhen, 512M, <11h',


  // XNR

  t01335: 'xnr, China, Hangzhou, 32G, thu-cfa',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
