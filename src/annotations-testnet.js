const annotations = {

  // Routable
  t01025: 'sealing, China, Yangzhou',
  t01459: 'active, China, Guilin',
  t01784: 'sealing, China, Shenzhen',
  t02020: 'active, China, Chengdu',
  t04463: 'sealing, China, Dongguan',
  t040585: 'sealing, China, Shanghai',
  t0101180: 'active, China, Foshan',
  t0102830: 'sealing, China, Beijing',
  t0105366: 'sealing, China, Shenzhen',
  t0106399: 'sealing, Japan, Heiwajima',
  t0106549: 'active, China, Wuhan',
  t0109538: 'active, China, Changsha',
  t0109653: 'active, China, Weifang',
  t0109776: 'active, China, Jinan',
  t0114252: 'active, China, Ningbo',
  t0116034: 'active, China, Shenzhen',
  t0116113: 'active, China, Shenyang',
  t0116210: 'sealing, China, Beijing',
  t0117597: 'sealing, USA, Clarksville',
  t0117600: 'sealing, China, Shenzhen',
  t0117734: 'active, USA',
  t0117756: 'sealing, USA, Boardman',
  t0117926: 'active, China, Ningxia',
  t0118078: 'sealing, USA, Santa Clara',
  t0118133: 'sealing, China, Shijiazhuang',
  t0118144: 'active, China, Hangzhou',
  t0118150: 'sealing, China, Shenzhen',
  t0118186: 'sealing, Korea, Seongnam-si',
  t0118477: 'active, USA, Boardman, Jim',
  t0118579: 'sealing, China, Guangdong',
  t0118595: 'sealing, Singapore',
  t0118797: 'sealing, China, Huzhou',
  t0118867: 'active, China, Shenzhen',
  t0118999: 'sealing, Japan, Osaka',

  // Error
  t01019: 'error, China, Chengdu', // NR
  t01985: 'error, China, Wuxi, former top miner', // unexpected deal status while waiting for data request: 7
  t08293: 'error, China, Shangrao', // unexpected deal status while waiting for data request: 7
  t013966: 'error, China, Guangdong', // NR
  t020890: 'error, China, Huzhou', // NR
  t029571: 'error, Korea, Seongnam-si', // NR
  t033740: 'error, China, Ningbo', // NR
  t039025: 'error, USA, San Francisco', // NR
  t0109282: 'error, China, Cangzhou', // NR
  t0115997: 'error, China, Shaanxi', // NR
  t0116001: 'error, China, Chongqing', // NR
  t0116037: 'error, China, Hong Kong', // NR
  t0116197: 'error, Australia, Chatswood', // unexpected deal status while waiting for data request: 7
  t0117348: 'error, China, Beijing', // NR
  t0117363: 'error, China, Shijiazhuang', // stream reset
  t0117390: 'error, China, Beijing', // NR
  t0117482: 'error, USA', // NR
  t0117595: 'error, China, Beijing', // NR
  t0117599: 'error, China, Shenzhen', // NR
  t0117719: 'error, China, Guandong, 64G', // NR
  t0117803: 'error, China, Shenzhen', // Stuck validating
  t0117933: 'error, China, Meishan', // NR
  t0118388: 'error, China, Hangzhou', // NR
  t0118821: 'error, China, Shenzhen', // stream reset

  // Non-routable top miners
  t01007: 'NR, top miner',
  t01009: 'NR, top miner', 
  t01102: 'NR, top miner', 
  t01546: 'NR, former top miner', 
  t09084: 'NR, top miner',
  t010581: 'NR, top miner',
  t011101: 'NR, top miner', 
  t021661: 'NR, top miner', 
  t039272: 'NR, top miner', 

  // Non-routable with deals
  t055280: 'NR, deals',
 
  // Non-routable former geo-located
  t01027: 'NR - China, Chengdu',
  t01215: 'NR - China, Zhongshan',
  t04842: 'NR - China, Changsha',
  t05900: 'NR - China, Changzhou',
  t07211: 'NR - China, Wuxi',
  t08459: 'NR - China, Wuxi',
  t09833: 'NR - China, Mianyang',
  t013836: 'NR - China, Guangdong',
  t020889: 'NR - China, Shenzhen',
  t020894: 'NR - China, Xiamen',
  t052328: 'NR - China, Beijing',
  t055393: 'NR - China, Beijing',
  t056726: 'NR - China, Hunan',
  t091046: 'NR - Singapore',
  t0102008: 'NR - China, Wuxi',
  t0104765: 'NR - China, Yunnan',
  t0106436: 'NR - China, Shenyang',
  t0106446: 'NR - China, Hangzhou',
  t0106575: 'NR - China, Beijing',
  t0106603: 'NR - Germany',
  t0109329: 'NR - China, Shenzhen',
  t0109589: 'NR - China, Shenzhen',
  t0109648: 'NR - China, Beijing',
  t0113893: 'NR - China, Wuxi',
  t0114172: 'NR - China',
  t0116082: 'NR - USA, Boardman, Jim',
  t0116085: 'NR - Singapore',
  t0116103: 'NR - China, Shenzhen',
  t0117396: 'NR - China, Beijing',
  t0117576: 'NR - China, Jinan',
  t0117613: 'NR - China, Shenzhen',
  t0117534: 'NR - China, Guangzhou',
  t0111839: 'NR - China, Chongqing',
  t0111870: 'NR - China, Shenyang',
  t0111921: 'NR - USA, Ashburn',
  t0111923: 'NR - China, Shenzhen',
  t0111939: 'NR - China, Shenyang',
  t0111994: 'NR - China, Shijiazhuang',
  t0114215: 'NR - China, Shenyang',
  t0114231: 'NR - China, Meishan',
  t0117284: 'NR - China, Guilin',
  t0117386: 'NR - USA',
  t0117826: 'NR - China, Beijing',
  t0118155: 'NR - USA, Irvine',
  t0118238: 'NR - China, Shenzhen',
  t0118304: 'NR - China, Guangdong',

  // Non-routable Bootstrappers
  t01000: 'NR, bootstrap',
  t01001: 'NR, bootstrap',
  t01002: 'NR, bootstrap'
}

export default annotations
