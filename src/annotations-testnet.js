const annotations = {
  // Routable - active
  t01459: 'active, China, Guilin, top miner, seal times: 24h, tue, thu, ' +
    'sat, mon',
  t078580: 'active, Latvia, Riga, seal times: 72h, 17h, 17h, 12h, sat, mon',
  t0101180: 'active, China, Foshan, seal times: 15h, 6h, 7h, 8h, 7h, 6h, ' +
    '5h, 12h, 5h, 7h, <20h, tue',
  t0106549: 'active, China, Wuhan, seal times: 21h, 24h, 24h, 1d, 9h, ' +
    '<20h, tue',
  t0117734: 'active, USA, seal times: 19h, 24h, 24h, 19h, mon',
  t0117803: 'active, China, Shenzhen, seal times: 10h, 9h, 9h, 10h, <20h,' +
    'tue',
  t0118133: 'active, China, Shijiazhuang, seal times: 12h, 15h, 12h, ' +
    '12h, 1h, <20h, tue',
  t0118155: 'active, USA, Irvine, seal times: 15h, 7h, 7h, 6h, 6h, 6h, ' +
    '12h, 6h, 6h, <20h, tue',
  t0119822: 'active, China, Beijing, seal times: 24h, 9h, 8h, 1d, mon',
  t0119390: 'active, China, Shenzen, seal times: 9h, 9h, 12h, 8h, 9h, ' +
    '9h, 8h, <20, tue',
  t0119618: 'active, China, Hangzhou, seal times: 12h, 10h, 12h, 14h, ' +
    'wed, fri, sun, tue',
  t0119995: 'active, China, Shandong, seal times: 4h, 4h, 6h, 3h, 9h, ' +
    '3h, 6h, 8h, <20h, tue',
  t0120221: 'active, China, Yibin, seal times: 7h, 5h, 5h, 19h, sat, mon',
  t0120295: 'active, China, Beijing, seal times: 24h, 24h, 24h, 2d, mon',
  t0120458: 'active, China, Suzhou, seal times: 17h, 13h, sat, mon',
  t0120642: 'active, China, Chongqing, seal times: 12h, 11h, 11h, <20h,' +
    'tue',
  t0120741: 'active, USA, Boardman, @jimpick, seal times: 13h, 13h, 9h, ' +
    '1d, <20h, tue',
  t0120905: 'active, China, Hangzhou, seal times: 14h, 12h, 15h, 12h, mon',
  t0120972: 'active, China, Chengdu, seal times: 15h, 11h, 10h, <20h, tue',
  t0121097: 'active, China, Shenzhen, seal times: 13h, 1d, <20h, tue',
  t0121477: 'active, China, Jinan, seal times: 8h, <20h, tue',

  // Routable - new, recycle, sealing
  t01025: 'sealing, China, Yangzhou, top miner, wed, fri, sun, tue',
  t01784: 'sealing, China, Shenzhen, wed, fri, sun, tue',
  t02020: 'sealing, China, Chengdu, top miner, tue, fri, sun, tue',
  t040585: 'sealing, China, Shanghai, top miner, wed, fri, sun, tue',
  t0109604: 'validating, China, Beijing, wed, fri, sun, tue',
  t0116113: 'sealing, China, Shenyang, was active, tue, fri, sun, tue',
  t0117628: 'sealing, China, Nanjing, wed, fri, sun, tue',
  t0117756: 'sealing, USA, Boardman, wed, fri, sun, tue',
  t0118498: 'sealing, China, Nanchong, wed, fri, sun, tue',
  t0118797: 'sealing, China, Huzhou, top miner, wed, fri, sun, tue',
  t0119792: 'sealing, China, Hong Kong, wed, fri, sun, tue',
  t0120206: 'sealing, China, Beijing, wed, fri, sun, tue',
  t0120304: 'sealing, China, Beijing, tue, fri, sun, tue',
  t0120337: 'sealing, China, Chengdu, thu, sat, mon',
  t0120339: 'sealing, China, Beijing, tue, fri, sun, tue',
  t0120545: 'sealing, Singapore, thu, sat, mon',
  t0120621: 'sealing, Singapore, thu, sat, mon',
  t0120796: 'sealing, China, Shanghai, 64G, thu, sat, mon',
  t0121040: 'sealing, China, Beijing, fri, sun, tue',
  t0121324: "sealing, China, Xi'an, sat, mon",
  t0121587: 'sealing, China, Beijing, mon',
  t0121677: 'sealing, China, Shenzhen, mon',
  t0121645: 'sealing, Hungary, mon',
  t0121652: 'sealing, China, Zhongshan, mon',
  t0121655: 'sealing, China, Guangdong, mon',
  t0121762: 'sealing, China, Shenzhen, tue',
  t0121763: 'sealing, China, Beijing, tue',
  t0121765: 'transferring, China, Heyuan, tue',
  t0121797: 'sealing, China, Hangzhou, tue',
  t0121813: 'sealing, China, Shenzhen, tue',
  t0121852: 'sealing, China, Ningxia, tue',
  t0121864: 'sealing, Korea, Bucheon-si, tue',
  t0121879: 'sealing, Germany, Wiesloch, tue',

  // Error
  t01886: 'error, China, Chengdu, top miner', // stream reset
  t01985: 'error, China, Wuxi, ex-top', // unexpected deal status while waiting for data request: 9
  t0106399: 'error, Japan, Heiwajima', // stream reset
  t0109653: 'error, China, Weifang, seal times: 11h', // unexpected deal status while waiting for data request: 7
  t0109755: 'error, China, Fuzhou', // stream reset
  t0117879: 'error, China, Hong Kong, wed, fri, sun', // sending proposal to storage provider failed: failed to dial
  t0120313: 'error, USA, Boardman', // sending proposal to storage provider failed: failed to dial
  t0120403: 'error, China, Wuxi', // unexpected deal status while waiting for data request: 16
  t0120770: 'error, Singapore, thu', // stream reset
  t0120937: 'error, USA, Clarksville, seal times: 1d, 1d', // error reading Response message: EOF
  t0120993: 'error, China, Hunan, seal times: 22h, 11h, 10h, <20h', // stream reset
  t0121475: 'error, China, Wuxi', // unexpected deal status while waiting for data request: 16
  t0121681: 'error, China, Wuxi', // unexpected deal status while waiting for data request: 16
  t0121685: 'error, China, Wuxi', // unexpected deal status while waiting for data request: 16

  // Stuck
 
  // Error - NR
  t08293: 'xnr, China, Shangrao', // unexpected deal status while waiting for data request: 7
  t0121269: 'xnr, China, Zhongshan, sat', // error reading Response message: stream reset

  // Non-routable top miners
  t01007: 'NR, top miner',
  t01019: 'NR, China, Chengdu, top miner',
  t01009: 'NR, top miner',
  t01102: 'NR, top miner',
  t09084: 'NR, top miner',
  t09833: 'NR, China, Mianyang, top miner',
  t011101: 'NR, China, Shanghai, top miner',
  t020890: 'NR, China, Huzhou, top miner',
  t021661: 'NR, top miner',
  t032055: 'NR, top miner',
  t039272: 'NR, top miner',
  t0105366: 'NR, China, Shenzhen, top miner',
  t0118696: 'NR, top miner',
  t0118768: 'NR, top miner',
  t0119320: 'NR, top miner',
  t0119666: 'NR, top miner',


  // Ex-top miners
  t01546: 'NR, ex-top',
  t04463: 'NR, China, Dongguan, ex-top, mon',
  t010581: 'NR, ex-top',

  // Non-routable with deals
  t055280: 'NR, deals',

  // Non-routable former geo-located
  t01015: 'NR - Poland, Krakow, @magik6k, seal times: 12h, wed',
  t01027: 'NR - China, Chengdu',
  t01215: 'NR - China, Zhongshan, wed, fri, sun',
  t04503: 'NR - China, Beijing',
  t04842: 'NR - China, Changsha',
  t05900: 'NR - China, Changzhou',
  t07211: 'NR - China, Wuxi',
  t08459: 'NR - China, Wuxi',
  t08275: 'NR - China, Wuxi',
  t013836: 'NR - China, Guangdong',
  t013966: 'NR - China, Guangdong',
  t020889: 'NR - China, Shenzhen',
  t020894: 'NR - China, Xiamen',
  t029571: 'NR - Korea, Seongnam-si',
  t033740: 'NR - China, Ningbo',
  t039025: 'NR - USA, San Francisco',
  t046856: 'NR - China, Guiyang, seal times: 24h',
  t052328: 'NR - China, Beijing',
  t055393: 'NR - China, Beijing',
  t056726: 'NR - China, Hunan',
  t070999: 'NR - China, Foshan',
  t091046: 'NR - Singapore',
  t0102008: 'NR - China, Wuxi',
  t0102830: 'NR - China, Beijing, seal times: 48h',
  t0104765: 'NR - China, Yunnan',
  t0106436: 'NR - China, Shenyang',
  t0106446: 'NR - China, Hangzhou',
  t0106575: 'NR - China, Beijing',
  t0106603: 'NR - Germany',
  t0109282: 'NR - China, Cangzhou',
  t0109329: 'NR - China, Shenzhen',
  t0109538: 'NR - China, Changsha',
  t0109589: 'NR - China, Shenzhen',
  t0109648: 'NR - China, Beijing',
  t0109776: 'NR - China, Jinan, seal times: 48h',
  t0111839: 'NR - China, Chongqing',
  t0111870: 'NR - China, Shenyang',
  t0111921: 'NR - USA, Ashburn',
  t0111923: 'NR - China, Shenzhen',
  t0111939: 'NR - China, Shenyang',
  t0111994: 'NR - China, Shijiazhuang',
  t0113893: 'NR - China, Shanghai',
  t0114172: 'NR - China, Wuxi',
  t0114193: 'NR - Canada, St. Marys, wed, fri, sun',
  t0114215: 'NR - China, Shenyang',
  t0114252: 'NR - China, Ningbo, seal times: 9h, 21h, 12h',
  t0114231: 'NR - China, Meishan',
  t0115997: 'NR - China, Shaanxi',
  t0116001: 'NR - China, Chongqing',
  t0116034: 'NR - China, Shenzhen, seal times: 10h, 11h',
  t0116037: 'NR - China, Hong Kong',
  t0116082: 'NR - USA, Boardman, Jim',
  t0116085: 'NR - Singapore',
  t0116103: 'NR - China, Shenzhen',
  t0116197: 'NR - Australia, Chatswood',
  t0116210: 'NR - China, Beijing',
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
  t0117926: 'NR - China, Ningxia, seal times: 17h, 23h, 24h',
  t0117933: 'NR - China, Meishan',
  t0118078: 'NR - USA, Santa Clara',
  t0118144: 'NR - China, Hangzhou, seal times: 12h',
  t0118150: 'NR - China, Shenzhen',
  t0118186: 'NR - Korea, Seongnam-si',
  t0118238: 'NR - China, Shenzhen',
  t0118304: 'NR - China, Guangdong',
  t0118388: 'NR - China, Hangzhou',
  t0118477: 'NR - USA, Boardman, Jim, seal times: 13h',
  t0118502: 'NR - China, Jinan, seal times: 15h, 7h',
  t0118579: 'NR - China, Guangdong, was active',
  t0118595: 'NR - Singapore',
  t0118821: 'NR - China, Shenzhen, seal times: 13h',
  t0118867: 'NR - China, Shenzhen, was active',
  t0118999: 'NR - Japan, Osaka',
  t0119018: 'NR - China, Shenzhen, seal times: 14h',
  t0119022: 'NR - China, Shenzhen',
  t0119030: 'NR - Singapore',
  t0119045: 'NR - China, Beijing',
  t0119061: 'NR - China, Shenzhen',
  t0119064: 'NR - China, Chengdu, wed, fri, sun',
  t0119101: 'NR - China, Chongqing, seal times: 17h',
  t0119143: 'NR - China, Shenzhen, seal times: 22h',
  t0119224: 'NR - USA, San Francisco',
  t0119228: 'NR - China, Shaanxi, seal times: 24h, mon, wed, fri',
  t0119252: 'NR - China, Hangzhou, seal times: 8h',
  t0119263: 'NR - USA, Boardman, Jim',
  t0119277: 'NR - China, Chongqing',
  t0119282: 'NR - China, Chongqing, wed, fri, sun',
  t0119287: 'NR - China, Hangzhou',
  t0119326: 'NR - USA, Santa Clara',
  t0119332: 'NR - China, Shenzhen, seal times: 7h',
  t0119350: 'NR - China, Hebei',
  t0119370: 'NR - China, Shenzhen',
  t0119442: 'NR - USA, Clarksville, seal times: 24h, 18h',
  t0119462: 'NR - China, Guilin',
  t0119544: 'NR - China, Shenzhen',
  t0119547: 'NR - China, Shenzhen',
  t0119553: 'NR - China, Qingdao',
  t0119574: 'NR, China, Guilin, seal times: 11h, 10h, 12h, 12h, 8h, ' +
    '12h, sat',
  t0119579: 'NR - China, Shenzhen',
  t0119591: 'NR - China, Beijing, seal times: 48h',
  t0119593: 'NR - China, Changsha, seal times: 8h, 8h, 8h',
  t0119659: 'NR - China, Shanghai',
  t0119695: 'NR - USA, Boardman, @jimpick, seal times: 13h, 16h, 19h',
  t0119698: 'NR - China, Shanghai, 13h',
  t0119753: 'NR, China, Xiamen, thu, sat',
  t0119785: 'NR - China, Beijing',
  t0119806: 'NR - China, Hefei',
  t0119808: 'NR - China, Hunan',
  t0119826: 'NR - China, Shenzhen, seal times: 7h',
  t0119832: 'NR - China, Beijing',
  t0119858: 'NR - China, Hangzhou, seal times: 24h, 24h',
  t0119896: 'NR - China, Hebei, seal times: 15h',
  t0119900: 'NR - China, Hunan, seal times: 15h',
  t0119951: 'NR - Canada, Surrey',
  t0119961: 'NR - Korea, Gwangju',
  t0120000: 'NR - China, Chongqing, seal times: 13h, 9h, 12h, 12h',
  t0120011: 'NR - China, Chongqing',
  t0120023: 'NR - China, Chengdu',
  t0120029: 'NR - China, Ningxia, seal times: 16h, 15h, 9h, fri',
  t0120064: 'NR - Hungary',
  t0120129: "NR - China, Xi'an",
  t0120155: 'NR - Korea, Gwangju, wed, fri',
  t0120174: 'NR - China, Shenzhen',
  t0120177: 'NR - China, Guilin, seal times: 24h',
  t0120195: 'NR - China, Shenzhen',
  t0120199: 'NR - China, Changsha',
  t0120297: 'NR - Korea, Ansan-si',
  t0120336: 'NR - China, Shenzhen',
  t0120369: 'NR - China, Shenzhen, seal times: 7h',
  t0120378: 'NR - China, Foshan, 64G, seal times: 16h',
  t0120387: 'NR - China, Shenzhen',
  t0120405: 'NR, China, Dongguan, seal times: 9h, 12h, sat',
  t0120422: 'NR - China, Shenzhen, seal times: 8h',
  t0120432: 'NR - China, Cangzhou',
  t0120434: 'NR - China, Shenzhen, seal times: 24h',
  t0120443: 'NR - China, Shanghai',
  t0120511: 'NR - China, Chengdu, tue, fri',
  t0120523: 'NR - China, Zhongshan',
  t0120572: 'NR - Finland, Helsinki, seal times: 18h',
  t0120579: 'NR - China, Shanghai',
  t0120638: 'NR, China, Guilin, seal times: 21h, sat',
  t0120647: 'NR, China, Shenzhen, thu, sat',
  t0120661: 'NR - China, Wuxi',
  t0120663: 'NR - China, Shenzhen',
  t0120775: 'NR - USA, Bellevue',
  t0120782: 'NR - China, Chengdu',
  t0120786: 'NR - China, Xianning',
  t0120798: 'NR - China, Shenzhen, seal times: 6h',
  t0120802: 'NR - China, Shenzhen',
  t0120804: 'NR - China, Shenzhen, seal times: 7h, fri',
  t0120859: 'NR - China, Beijing',
  t0120990: 'NR - China, Shanghai, fri, sun',
  t0120974: 'NR - China, Shenzhen, fri',
  t0121029: 'NR - China, Beijing',
  t0121033: 'NR - Netherlands, Purmerend, fri, sun',
  t0121080: 'NR, China, Beijing, seal times: 1d, sat',
  t0121108: 'NR - China, Zhongshan, fri, sun',
  t0121182: 'NR, USA, Bellevue, sat',
  t0121083: 'NR - China, Shenzhen, fri',
  t0121185: 'NR, USA, Columbus, sat',
  t0121201: "NR - China, Xi'an",
  t0121321: 'NR, China, Guangdong, sat',
  t0121365: 'NR - USA, Newark, sun',
  t0121378: 'NR - China, Beijing, sun',
  t0121409: 'NR - China, Beijing, sun',


  // Non-routable Bootstrappers
  t01000: 'NR, bootstrap',
  t01001: 'NR, bootstrap',
  t01002: 'NR, bootstrap'
}

export default annotations
