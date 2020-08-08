const annotations = {

  // Active - sat
 
  t01058: 'active, China, Zhongshan, 512M, 1h, 1h',
  t01138: 'active, China, Shijiazhuang, 512M, <8h, 1h',
  t01183: 'active, Canada, Vancouver, 512M, @jimpick, 2h, 2h',
  t01208: 'active, China, Sichuan, 32G, 12h',
  t01306: 'active, Japan, Tokushima, 32G, 10h',
  t01352: 'active, Germany, Frankfurst + China, Beijing, 32G, 10h',
  t01362: 'active, China, Beijing, 32G, 12h',
  t01366: 'active, China, Shijiazhuang, 32G, 11h',
  t01444: 'active, China, Zhongshan, 512M, <9h, 2h',
  t01455: 'active, China, Guangdong, chain only, 32G, 11h',
  t01484: 'active, China, Beijing, 512M, <8h',
  t01843: 'active, China, Guangzhou, 512M, 3h',
  t01937: 'active, Japan, Tokushima, 512M, 3h',

  // Active - fri

  t01054: 'active, China, Hong Kong, 512M, 2h, sat-cfa',
  t01115: 'active, China, Shijiazhuang, 512M, 2h, sat',
  t01184: "active, China, Xi'an, 32G, <11h, sat",
  t01233: "active, USA, Coeur d'Alene, 512M, @why, 2h, 2h, sat",
  t01270: 'active, China, Weifang, 512M, 2h, sat-cfa',
  t01314: 'active, Korea, Uijeongbu-si, 512M, <10h, sat',
  t01364: 'active, China, Shijiazhuang, 512M, <9h, sat',
  t01378: 'active, China, Ordos, 512M, <9h, sat-cfa',
  t01500: 'active, China, Chengdu, 512M, <8h, sat',

  // Sealing - sat

  t01278: 'sealing, Australia, 32G, sat',
  t01279: 'sealing, USA, Grand Rapids, 32G, @stuberman, sat',
  t01324: 'sealing, China, Wuxi, 32G, sat',
  t01345: 'sealing, Australia, 32G, sat',
  t01464: 'sealing, Germany, Hamburg, 32G, sat',
  t01492: 'sealing, Sweden, Stockholm, 32G, sat',
  t01528: 'sealing, China, Deyang, chain only, 512M, sat',
  t01546: 'sealing, Netherlands, 32G, sat',
  t01598: 'sealing, China, Fujian, 32G, sat',
  t01599: 'sealing, China, Shanghai, 32G, sat',
  t01615: 'sealing, Canada, Surrey, 32G, sat',
  t01629: 'sealing, Netherlands, Horn, 32G, sat',
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
  t01723: 'sealing, China, Fuzhou, 32G, sat',
  t01725: 'sealing, China, Shenzhen, 32G, sat',
  t01731: 'sealing, China, Dongguan, 32G, sat',
  t01738: 'sealing, China, Guilin, 32G, sat',
  t01745: 'sealing, China, Wuhan, 512M, sat',
  t01760: 'sealing, China, Ili, 32G, sat',
  t01773: 'sealing, China, Chongqing, 32G, sat',
  t01812: 'sealing, China, Changsha, 512M, sat',
  t01817: 'sealing, Japan, Setagaya-ku, 32G, sat',
  t01819: 'sealing, China, Shenzhen, 32G, sat',
  t01827: 'sealing, Korea, Guro-gu, 512M, sat',
  t01828: 'sealing, China, Shenzhen, 32G, sat',
  t01829: 'sealing, Korea, Guro-gu, 512M, sat',
  t01851: 'sealing, China, Wuhan, 32G, sat',
  t01853: 'sealing, Korea, Geumcheon-gu, 512M, sat',
  t01855: 'sealing, Korea, Geumcheon-gu, 512M, sat',
  t01857: 'sealing, Korea, Bucheon-si, 512M, sat',
  t01858: 'sealing, China, Beijing, 32G, sat',
  t01886: 'sealing, Netherlands, Purmerend, 32G, sat',
  t01908: 'sealing, China, Hangzhou, 512M, sat',
  t01913: 'sealing, China, Zhejiang, 32G, sat',

  // Sealing - fri

  t01119: 'sealing, Korea, Seongnam-si, 32G, fri',
  t01124: 'sealing, China, Jiaxing, 32G, fri',
  t01127: 'sealing, China, Guangdong, 32G, fri',
  t01202: 'sealing, China, Hong Kong, 32G, fri',
  t01206: 'sealing, China, Shandong, 32G, fri',
  t01305: 'sealing, China, Guangzhou, 32G, fri',
  t01319: 'sealing, Korea, Dongjak-gu, 32G, fri',
  t01325: 'sealing, China, Wuxi, 32G, fri',
  t01329: 'sealing, Canada, Brampton, 32G, fri',
  t01340: 'sealing, China, Guangzhou, 32G, fri',
  t01341: 'sealing, China, Wuxi, 32G, fri',
  t01365: 'sealing, Korea, Seoul, 32G, fri',
  t01371: 'sealing, China, Beijing, 32G, fri',
  t01383: 'sealing, China, Wuxi, 32G, fri',
  t01384: 'sealing, China, Wuxi, 32G, fri',
  t01403: 'sealing, China, Shenzhen, 32G, fri',
  t01405: 'sealing, China, Wuxi, 32G, fri',
  t01409: 'sealing, China, Chengdu, 32G, fri',
  t01414: 'sealing, Denmark, Kobenhavn S, 32G, fri',
  t01419: 'sealing, China, Tongling, 32G, fri',
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

  t01217: 'error, China, Guilin, 512M, 2h', // failed to dial
  t01596: 'error, Australia, Brisbane, chain only, 512M', // failed to dial
  t01684: 'error, China, Changsha, 32G', // stream reset
  t01717: 'error, Switzerland, Muhlau, 32G', // dial
  t01847: 'error, China, Shenzhen, 512M', // stream reset


  // Dial backoff



  // Stuck

  t01619: 'stuck, China, Guyuan, 512M', // cfa
  t01627: 'stuck, China, Beijing, 32G', // cfa
  t01644: 'stuck, USA, Columbus, 32G', // cfa
  t01649: 'stuck, China, Hangzhou, 512M', // cfa
  t01750: 'stuck, China, Dongguan, 512M', // cfa



  // XNR

  t01478: 'xnr, China, Guangzhou, 512M', // failed to dial
  t01787: 'xnr, China, Changzhou, 32G',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
