const annotations = {

  // Active - fri

  t01054: 'active, China, Hong Kong, 512M, 2h',
  t01058: 'active, China, Zhongshan, 512M, 1h',
  t01115: 'active, China, Shijiazhuang, 512M, 2h',
  t01138: 'active, China, Shijiazhuang, 512M, <8h',
  t01183: 'active, Canada, Vancouver, 512M, @jimpick, 2h',
  t01184: "active, China, Xi'an, 32G, <11h",
  t01217: 'active, China, Guilin, 512M, 2h',
  t01233: "active, USA, Coeur d'Alene, 512M, @why, 2h, 2h",
  t01270: 'active, China, Weifang, 512M, 2h',
  t01314: 'active, Korea, Uijeongbu-si, 512M, <10h',
  t01364: 'active, China, Shijiazhuang, 512M, <9h',
  t01378: 'active, China, Ordos, 512M, <9h',
  t01444: 'active, China, Zhongshan, 512M, <9h',
  t01500: 'active, China, Chengdu, 512M, <8h',

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
  t01484: 'sealing, China, Beijing, 512M, fri',
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

  t01492: 'new, Sweden, Stockholm, 32G',
  t01528: 'new, China, Deyang, chain only, 512M',
  t01596: 'new, Australia, Brisbane, chain only, 512M',
  t01598: 'new, China, Fujian, 32G',
  t01599: 'new, China, Shanghai, 32G',
  t01615: 'new, Canada, Surrey, 32G',
  t01619: 'new, China, Guyuan, 512M',
  t01627: 'new, China, Beijing, 32G',
  t01629: 'new, Netherlands, Horn, 32G',
  t01638: 'new, Poland, Krakow, 512M, @magik6k',
  t01644: 'new, USA, Columbus, 32G',
  t01646: 'new, China, Beijing, 32G',
  t01649: 'new, China, Hangzhou, 512M',
  t01652: 'new, China, Shanghai, 32G',
  t01657: 'new, China, Ordos, 512M',
  t01660: 'new, China, Beijing, 32G',
  t01664: 'new, Korea, Seoul, 32G',
  t01673: 'new, China, Guangdong, 32G',
  t01677: 'new, USA, 32G',
  t01680: 'new, China, Taiyuan, 32G',
  t01684: 'new, China, Changsha, 32G',
  t01698: 'new, China, Shenzhen, 32G',
  t01699: 'new, China, Beijing, 32G',
  t01701: 'new, Malaysia, Johor Bahru, 512M',
  t01703: 'new, Netherlands, Amersfoort, 32G',
  t01717: 'new, Switzerland, Muhlau, 32G',
  t01723: 'new, China, Fuzhou, 32G',
  t01725: 'new, China, Shenzhen, 32G',
  t01731: 'new, China, Dongguan, 32G',
  t01738: 'new, China, Guilin, 32G',
  t01745: 'new, China, Wuhan, 512M',
  t01750: 'new, China, Dongguan, 512M',
  t01760: 'new, China, Ili, 32G',
  t01773: 'new, China, Chongqing, 32G',
  t01787: 'new, China, Changzhou, 32G',
  t01812: 'new, China, Changsha, 512M',
  t01817: 'new, Japan, Setagaya-ku, 32G',
  t01819: 'new, China, Shenzhen, 32G',
  t01827: 'new, Korea, Guro-gu, 512M',
  t01828: 'new, China, Shenzhen, 32G',
  t01829: 'new, Korea, Guro-gu, 512M',
  t01843: 'new, China, Guangzhou, 512M',
  t01847: 'new, China, Shenzhen, 512M',
  t01851: 'new, China, Wuhan, 32G',
  t01853: 'new, Korea, Geumcheon-gu, 512M',
  t01855: 'new, Korea, Geumcheon-gu, 512M',
  t01857: 'new, Korea, Bucheon-si, 512M',
  t01858: 'new, China, Beijing, 32G',
  t01886: 'new, Netherlands, Purmerend, 32G',
  t01908: 'new, China, Hangzhou, 512M',
  t01913: 'new, China, Zhejiang, 32G',
  t01937: 'new, Japan, Tokushima, 512M',

  // Asks


  // No-online deals

  // Error

  t01278: 'error, Australia, 32G', // out of gas
  t01324: 'error, China, Wuxi, 32G', // out of gas
  t01345: 'error, Australia, 32G', // out of gas
  t01464: 'error, Germany, Hamburg, 32G', // out of gas
  t01478: 'error, China, Guangzhou, 512M', // failed to dial
  t01546: 'error, Netherlands, 32G', // out of gas


  // Dial backoff



  // Stuck



  // XNR


  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
