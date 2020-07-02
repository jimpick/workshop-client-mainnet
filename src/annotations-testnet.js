const annotations = {

  // Routable - active
  t01459: 'active, China, Guilin',
  t02020: 'active, China, Chengdu',
  t0101180: 'active, China, Foshan, seal times: 15h, 6h',
  t0106549: 'active, China, Wuhan, seal times: 21h',
  t0116034: 'active, China, Shenzhen, seal times: 10h',
  t0116113: 'active, China, Shenyang',
  t0117734: 'active, USA, seal times: 19h', // validating
  t0117803: 'active, China, Shenzhen, seal times: 10h',
  t0117926: 'active, China, Ningxia, seal times: 17h, 23h, 24h',
  t0118144: 'active, China, Hangzhou, seal times: 12h',
  t0118155: 'active, USA, Irvine, seal times: 15h',
  t0118821: 'active, China, Shenzhen, seal times: 13h',
  t0119018: 'active, China, Shenzhen, seal times: 14h',
  t0119101: 'active, China, Chongqing, seal times: 17h',
  t0119143: 'active, China, Shenzhen, seal times: 22h',

  // Routable - new, recycle, sealing
  t01025: 'sealing, China, Yangzhou, new',
  t01215: 'sealing, China, Zhongshan, 21h',
  t01784: 'sealing, China, Shenzhen, new',
  t04463: 'sealing, China, Dongguan, new',
  t040585: 'sealing, China, Shanghai, new',
  t0102830: 'sealing, China, Beijing, new',
  t0105366: 'sealing, China, Shenzhen, new',
  t0109538: 'sealing, China, Changsha, 21h',
  t0117756: 'sealing, USA, Boardman, new',
  t0117933: 'sealing, China, Meishan, new',
  t0118133: 'sealing, China, Shijiazhuang, new',
  t0118797: 'sealing, China, Huzhou, new',
  t0118999: 'sealing, Japan, Osaka, 1d',
  t0119030: 'sealing, Singapore, 23h',
  t0119045: 'sealing, China, Beijing, 23h',
  t0119061: 'sealing, China, Shenzhen, 23h',
  t0119064: 'sealing, China, Chengdu, 23h',
  t0119228: 'sealing, China, Shaanxi, 14h',
  t0119263: 'sealing, USA, Boardman, Jim, new',
  t0119277: 'sealing, China, Chongqing, new',
  t0119287: 'sealing, China, Hangzhou, new',
  t0119326: 'sealing, USA, Santa Clara, new',
  t0119332: 'sealing, China, Shenzhen, new',
  t0119350: 'sealing, China, Hebei, new',
  t0119370: 'sealing, China, Shenzhen, new',

  // Error
  t01985: 'error, China, Wuxi, former top miner', // unexpected deal status while waiting for data request: 7
  t08293: 'error, China, Shangrao', // unexpected deal status while waiting for data request: 7
  t0106399: 'error, Japan, Heiwajima', // Stuck at validating
  t0109653: 'error, China, Weifang, seal times: 11h', // unexpected deal status while waiting for data request: 7
  t0109776: 'error, China, Jinan', // Stuck at WaitForDataRequest
  t0113893: 'error, China, Wuxi', // unexpected deal status while waiting for data request: 9
  t0114252: 'error, China, Ningbo, seal times: 9h, 21h, 12h', // unexpected deal status while waiting for data request: 7
  t0116210: 'error, China, Beijing', // stream reset
  t0118186: 'error, Korea, Seongnam-si', // stuck validating
  t0118579: 'error, China, Guangdong, was active', // unexpected deal status while waiting for data request: 7

  // Non-routable top miners
  t01007: 'NR, top miner',
  t01019: 'NR, China, Chengdu, top miner',
  t01009: 'NR, top miner', 
  t01102: 'NR, top miner', 
  t01546: 'NR, former top miner', 
  t09084: 'NR, top miner',
  t010581: 'NR, top miner',
  t011101: 'NR, top miner', 
  t020890: 'NR, China, Huzhou, top miner',
  t021661: 'NR, top miner', 
  t039272: 'NR, top miner', 

  // Non-routable with deals
  t055280: 'NR, deals',
 
  // Non-routable former geo-located
  t01027: 'NR - China, Chengdu',
  t04842: 'NR - China, Changsha',
  t05900: 'NR - China, Changzhou',
  t07211: 'NR - China, Wuxi',
  t08459: 'NR - China, Wuxi',
  t09833: 'NR - China, Mianyang',
  t013836: 'NR - China, Guangdong',
  t013966: 'NR - China, Guangdong',
  t020889: 'NR - China, Shenzhen',
  t020894: 'NR - China, Xiamen',
  t029571: 'NR - Korea, Seongnam-si',
  t033740: 'NR - China, Ningbo',
  t039025: 'NR - USA, San Francisco',
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
  t0109282: 'NR - China, Cangzhou',
  t0109329: 'NR - China, Shenzhen',
  t0109589: 'NR - China, Shenzhen',
  t0109648: 'NR - China, Beijing',
  t0111839: 'NR - China, Chongqing',
  t0111870: 'NR - China, Shenyang',
  t0111921: 'NR - USA, Ashburn',
  t0111923: 'NR - China, Shenzhen',
  t0111939: 'NR - China, Shenyang',
  t0111994: 'NR - China, Shijiazhuang',
  t0114215: 'NR - China, Shenyang',
  t0114231: 'NR - China, Meishan',
  t0114172: 'NR - China',
  t0115997: 'NR - China, Shaanxi',
  t0116001: 'NR - China, Chongqing',
  t0116037: 'NR - China, Hong Kong',
  t0116082: 'NR - USA, Boardman, Jim',
  t0116085: 'NR - Singapore',
  t0116103: 'NR - China, Shenzhen',
  t0116197: 'NR - Australia, Chatswood',
  t0117284: 'NR - China, Guilin',
  t0117348: 'NR - China, Beijing',
  t0117363: 'NR - China, Shijiazhuang',
  t0117386: 'NR - USA',
  t0117390: 'NR - China, Beijing',
  t0117396: 'NR - China, Beijing',
  t0117482: 'NR - USA',
  t0117576: 'NR - China, Jinan',
  t0117534: 'NR - China, Guangzhou',
  t0117595: 'NR - China, Beijing',
  t0117597: 'NR - USA, Clarksville',
  t0117599: 'NR - China, Shenzhen',
  t0117600: 'NR - China, Shenzhen',
  t0117613: 'NR - China, Shenzhen',
  t0117719: 'NR - China, Guandong, 64G',
  t0117826: 'NR - China, Beijing',
  t0118078: 'NR - USA, Santa Clara',
  t0118150: 'NR - China, Shenzhen',
  t0118238: 'NR - China, Shenzhen',
  t0118304: 'NR - China, Guangdong',
  t0118388: 'NR - China, Hangzhou',
  t0118477: 'NR - USA, Boardman, Jim, seal times: 13h',
  t0118595: 'NR - Singapore',
  t0118867: 'NR - China, Shenzhen, was active',

  // Non-routable Bootstrappers
  t01000: 'NR, bootstrap',
  t01001: 'NR, bootstrap',
  t01002: 'NR, bootstrap'
}

export default annotations
