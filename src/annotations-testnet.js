const annotations = {

  // Routable
  t01027: 'sealing, China, Chengdu',
  t01215: 'sealing, China, Zhongshan',
  t01459: 'active, China, Guilin',
  t01784: 'sealing, China, Shenzhen',
  t02020: 'active, China, Chengdu',
  t04463: 'sealing, China, Dongguan',
  t04842: 'active, China, Changsha',
  t05900: 'active, China, Changzhou',
  t08293: 'sealing, China, Shangrao',
  t09833: 'sealing, China, Mianyang',
  t013836: 'sealing, China, Guangdong',
  t013966: 'sealing, China, Guangdong',
  t020889: 'sealing, China, Shenzhen',
  t020890: 'sealing, China, Huzhou',
  t020894: 'active, China, Xiamen',
  t029571: 'sealing, Korea, Seongnam-si',
  t033740: 'sealing, China, Ningbo',
  t039025: 'sealing, USA, San Francisco',
  t040585: 'sealing, China, Shanghai',
  t052328: 'sealing, China, Beijing',
  t056726: 'sealing, China, Hunan',
  t0101180: 'active, China, Foshan',
  t0105366: 'sealing, China, Shenzen',
  t0106575: 'sealing, China, Beijing',
  t0106603: 'sealing, Germany',
  t0106436: 'sealing, China, Shenyang',
  t0106446: 'active, China, Hangzhou',
  t0106399: 'sealing, Japan, Heiwajima',
  t0109282: 'sealing, China, Cangzhou',
  t0109538: 'active, China, Changsha',
  t0109589: 'sealing, China, Shenzhen',
  t0109648: 'sealing, China, Beijing',
  t0109653: 'active, China, Weifang',
  t0109776: 'sealing, China, Jinan',
  t0111839: 'error, China, Chongqing', // error reading Response message: stream reset
  t0111870: 'error, China, Shenyang', // deal failed: (State=7) generating piece committment: failed to build tree Caused by: 0: failed to create data store 1: No such file or directory (os error 2)
  t0111921: 'new, USA, Ashburn',
  t0111923: 'new, China, Shenzhen',
  t0111939: 'new, China, Shenyang',
  t0111994: 'new, China, Shijiazhuang',

  // Error
  t07211: 'error, China, Wuxi', // unexpected deal status while waiting for data request: 7
  t01985: 'error, China, Wuxi', // unexpected deal status while waiting for data request: 7
  t08459: 'error, China, Wuxi', // unexpected deal status while waiting for data request: 7
  t0102008: 'error, China, Wuxi', // unexpected deal status while waiting for data request: 7

  // Non-routable top miners
  t01009: 'NR, top miner', 
  t01102: 'NR, top miner', 
  t01546: 'NR, top miner', 
  t011101: 'NR, top miner', 
  t021661: 'NR, top miner', 
  t039272: 'NR, top miner', 
 
  // Non-routable former geo-located
  t01025: 'NR - China, Yangzhou',
  t055393: 'NR - China, Beijing',
  t091046: 'NR - Singapore',
  t0109329: 'NR - China, Shenzhen',

  // Non-routable Bootstrappers
  t01000: 'bootstrap, NR',
  t01001: 'bootstrap, NR',
  t01002: 'bootstrap, NR'
}

export default annotations
