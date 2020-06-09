const annotations = {

  // Routables
  t01803: 'active, USA, Boardman, AWS - Jim',
  t01824: 'active, China, Yangzhou',
  t01841: 'active, China, Zhejiang',
  t01904: 'sealing, China, Shenyang',
  t01916: 'sealing, China, Shenzhen',
  t01928: 'sealing, China, Dongguan',
  t02023: 'sealing, China, Yunnan',
  t02026: 'sealing, China, Shaanxi',
  t02036: 'error, China, Yunnan', // clientMarketBalance.Available too small (retry)
  t02051: 'sealing, China, Foshan',
  t02067: 'sealing, USA, Los Angeles',
  t02092: 'sealing, China, Dongguan',
  t02094: 'sealing, China, Zhejiang',

  // Non-routables (with power)
  t01805: 'NR, power',
  t01807: 'NR, power',
  t01816: 'NR, power',
  t01818: 'NR, power',
  t01826: 'NR, power - China, Shaanxi', // routing not found
  t01890: 'NR, power - China, Shaanxi', // routing not found

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
