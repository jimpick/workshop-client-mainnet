const annotations = {

  // Active - fri

  t01054: 'active, China, Hong Kong, 512M, 2h, sat-cfa',
  t01058: 'active, China, Zhongshan, 512M, 1h, sat',
  t01138: 'active, China, Shijiazhuang, 512M, <8h, sat',
  t01183: 'active, Canada, Vancouver, 512M, @jimpick, 2h, sat',
  t01184: "active, China, Xi'an, 32G, <11h, sat-xfr",
  t01233: "active, USA, Coeur d'Alene, 512M, @why, 2h, 2h, sat",
  t01270: 'active, China, Weifang, 512M, 2h, sat-cfa',
  t01314: 'active, Korea, Uijeongbu-si, 512M, <10h, sat',
  t01364: 'active, China, Shijiazhuang, 512M, <9h, sat',
  t01378: 'active, China, Ordos, 512M, <9h, sat-cfa',
  t01444: 'active, China, Zhongshan, 512M, <9h, sat',
  t01500: 'active, China, Chengdu, 512M, <8h, sat-xfr',

  // Sealing - sat
  t01278: 'sealing, Australia, 32G, sat',
  t01324: 'sealing, China, Wuxi, 32G, sat',
  t01345: 'sealing, Australia, 32G, sat',
  t01484: 'sealing, China, Beijing, 512M, sat',
  t01492: 'sealing, Sweden, Stockholm, 32G, sat',
  t01598: 'sealing, China, Fujian, 32G, sat',
  t01599: 'sealing, China, Shanghai, 32G, sat',
  t01615: 'sealing, Canada, Surrey, 32G, sat',
  t01638: 'sealing, Poland, Krakow, 512M, @magik6k, sat',
  t01646: 'sealing, China, Beijing, 32G, sat',
  t01652: 'sealing, China, Shanghai, 32G, sat',
  t01657: 'sealing, China, Ordos, 512M, sat',
  t01660: 'sealing, China, Beijing, 32G, sat',
  t01664: 'sealing, Korea, Seoul, 32G, sat',
  t01673: 'sealing, China, Guangdong, 32G, sat',
  t01677: 'sealing, USA, 32G, sat',
  t01680: 'sealing, China, Taiyuan, 32G, sat',
  t01698: 'sealing, China, Shenzhen, 32G, sat',
  t01699: 'sealing, China, Beijing, 32G, sat',
  t01701: 'sealing, Malaysia, Johor Bahru, 512M, sat',
  t01703: 'sealing, Netherlands, Amersfoort, 32G, sat',
  t01725: 'sealing, China, Shenzhen, 32G, sat',
  t01731: 'sealing, China, Dongguan, 32G, sat',
  t01745: 'sealing, China, Wuhan, 512M, sat',
  t01760: 'sealing, China, Ili, 32G, sat',
  t01773: 'sealing, China, Chongqing, 32G, sat',
  t01812: 'sealing, China, Changsha, 512M, sat',
  t01817: 'sealing, Japan, Setagaya-ku, 32G, sat',
  t01819: 'sealing, China, Shenzhen, 32G, sat',
  t01828: 'sealing, China, Shenzhen, 32G, sat',
  t01843: 'sealing, China, Guangzhou, 512M, sat',
  t01851: 'sealing, China, Wuhan, 32G, sat',
  t01853: 'sealing, Korea, Geumcheon-gu, 512M, sat',
  t01855: 'sealing, Korea, Geumcheon-gu, 512M, sat',
  t01857: 'sealing, Korea, Bucheon-si, 512M, sat',
  t01858: 'sealing, China, Beijing, 32G, sat',
  t01886: 'sealing, Netherlands, Purmerend, 32G, sat',
  t01937: 'sealing, Japan, Tokushima, 512M, sat',

  // Sealing - fri

  t01119: 'sealing, Korea, Seongnam-si, 32G, fri',
  t01124: 'sealing, China, Jiaxing, 32G, fri',
  t01127: 'sealing, China, Guangdong, 32G, fri',
  t01202: 'sealing, China, Hong Kong, 32G, fri',
  t01206: 'sealing, China, Shandong, 32G, fri',
  t01208: 'sealing, China, Sichuan, 32G, fri',
  t01305: 'sealing, China, Guangzhou, 32G, fri',
  t01306: 'sealing, Japan, Tokushima, 32G, fri',
  t01319: 'sealing, Korea, Dongjak-gu, 32G, fri',
  t01325: 'sealing, China, Wuxi, 32G, fri',
  t01329: 'sealing, Canada, Brampton, 32G, fri',
  t01340: 'sealing, China, Guangzhou, 32G, fri',
  t01341: 'sealing, China, Wuxi, 32G, fri',
  t01352: 'sealing, Germany, Frankfurst + China, Beijing, 32G, fri',
  t01362: 'sealing, China, Beijing, 32G, fri',
  t01365: 'sealing, Korea, Seoul, 32G, fri',
  t01366: 'sealing, China, Shijiazhuang, 32G, fri',
  t01371: 'sealing, China, Beijing, 32G, fri',
  t01383: 'sealing, China, Wuxi, 32G, fri',
  t01384: 'sealing, China, Wuxi, 32G, fri',
  t01403: 'sealing, China, Shenzhen, 32G, fri',
  t01405: 'sealing, China, Wuxi, 32G, fri',
  t01409: 'sealing, China, Chengdu, 32G, fri',
  t01414: 'sealing, Denmark, Kobenhavn S, 32G, fri',
  t01419: 'sealing, China, Tongling, 32G, fri',
  t01455: 'sealing, China, Guangdong, chain only, 32G, fri',
  t01485: 'sealing, China, Beijing, 32G, fri',
  t01487: 'sealing, China, Zhejiang, 512M, fri',
  t01496: 'sealing, Kenya, Nairobi, 32G, fri',
  t01513: 'sealing, China, Shanghai, 32G, fri',
  t01547: 'sealing, China, Hangzhou, 32G, fri',
  t01548: 'sealing, China, Shenzhen, 32G, fri',
  t01549: 'sealing, China, Hong Kong, 32G, fri',
  t01553: 'sealing, China, Chongqing, 32G, fri',
  t01559: 'sealing, China, Guangzhou, 32G, fri',
  t01571: 'sealing, China, Beijing, 32G, fri',

  // New, recycle

  // Asks


  // No-online deals

  // Error

  t01115: 'error, China, Shijiazhuang, 512M, 2h', // failed to dial
  t01217: 'error, China, Guilin, 512M, 2h', // failed to dial
  t01464: 'error, Germany, Hamburg, 32G', // out of gas
  t01546: 'error, Netherlands, 32G', // out of gas
  t01596: 'error, Australia, Brisbane, chain only, 512M', // failed to dial
  t01629: 'error, Netherlands, Horn, 32G', // gas
  t01684: 'error, China, Changsha, 32G', // stream reset
  t01717: 'error, Switzerland, Muhlau, 32G', // dial
  t01723: 'error, China, Fuzhou, 32G', // dial
  t01738: 'error, China, Guilin, 32G', // stream reset
  t01847: 'error, China, Shenzhen, 512M', // stream reset


  // Dial backoff



  // Stuck

  t01528: 'stuck, China, Deyang, chain only, 512M', // cfa
  t01619: 'stuck, China, Guyuan, 512M', // cfa
  t01627: 'stuck, China, Beijing, 32G', // cfa
  t01644: 'stuck, USA, Columbus, 32G', // cfa
  t01649: 'stuck, China, Hangzhou, 512M', // cfa
  t01750: 'stuck, China, Dongguan, 512M', // cfa
  t01827: 'stuck, Korea, Guro-gu, 512M', // cfa
  t01829: 'stuck, Korea, Guro-gu, 512M', // cfa
  t01908: 'stuck, China, Hangzhou, 512M', // cfa
  t01913: 'stuck, China, Zhejiang, 32G', // cfa



  // XNR

  t01478: 'xnr, China, Guangzhou, 512M', // failed to dial
  t01787: 'xnr, China, Changzhou, 32G',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
