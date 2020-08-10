const annotations = {

  // Active - sun

  t01115: 'active, China, Shijiazhuang, 512M, 2h, 2h, 4h',
  t01364: 'active, China, Shijiazhuang, 512M, <9h, 3h, 5h',
  t01444: 'active, China, Zhongshan, 512M, <9h, 2h, 6h',
  t01500: 'active, China, Chengdu, 512M, <8h, 2h, 3h',
  t01638: 'active, Poland, Krakow, 512M, @magik6k, 4h, 2h',
  t01701: 'active, Malaysia, Johor Bahru, 512M, 7h, 2h',
  t01857: 'active, Korea, Bucheon-si, 512M, 2h',
  t01937: 'active, Japan, Tokushima, 512M, 3h, 2h',
  t01995: 'active, USA, Redmond, 32G, 11h',
  t01998: 'active, Finland, Helsinki, 512M, 2h, 5h',
  t02124: 'active, China, Shijiazhuang, 32G, 12h',
  t02258: 'active, China, Wuxi, 512M, 2h',
  t02261: 'active, Korea, Geumcheon-gu, 512M, 2h',
  t02262: 'active, Korea, Geomcheon-gu, 512M, 2h',
  t02265: 'active, Korea, Geomcheon-gu, 512M, 2h',
  t02275: 'active, Korea, Guro-gu, 512M, 2h',

  // Active - sat
 
  t01138: 'active, China, Shijiazhuang, 512M, <8h, 1h, sun',
  t01183: 'active, Canada, Vancouver, 512M, @jimpick, 2h, 2h, sun-cfa',
  t01184: "active, China, Xi'an, 32G, <11h, 13h, sun",
  t01233: "active, USA, Coeur d'Alene, 512M, @why, 2h, 2h, 5h, sun-cfa",
  t01306: 'active, Japan, Tokushima, 32G, 10h, sun',
  t01314: 'active, Korea, Uijeongbu-si, 512M, <10h, 3h, sun-cfa',
  t01329: 'active, Canada, Brampton, 32G, 22h, sun',
  t01362: 'active, China, Beijing, 32G, 12h, sun',
  t01366: 'active, China, Shijiazhuang, 32G, 11h, sun',
  t01371: 'active, China, Beijing, 32G, 13h, sun',
  t01378: 'active, China, Ordos, 512M, <9h, 9h, sun-cfa',
  t01405: 'active, China, Wuxi, 32G, 16h, sun',
  t01455: 'active, China, Guangdong, chain only, 32G, 11h, sun',
  t01484: 'active, China, Beijing, 512M, <8h, sun',
  t01485: 'active, China, Beijing, 32G, 16h, sun',
  t01548: 'active, China, Shenzhen, 32G, 15h, sun',
  t01598: 'active, China, Fujian, 32G, 16h, sun',
  t01646: 'active, China, Beijing, 32G, 13h, sun',
  t01664: 'active, Korea, Seoul, 32G, 20h, sun-cfa',
  t01699: 'active, China, Beijing, 32G, 13h, sun',
  t01673: 'active, China, Guangdong, 32G, 13h, sun-cfa',
  t01731: 'active, China, Dongguan, 32G, 13h, sun-cfa',
  t01738: 'active, China, Guilin, 32G, 15h, sun-cfa',
  t01773: 'active, China, Chongqing, 32G, 13h, sun-cfa',
  t01819: 'active, China, Shenzhen, 32G, 17h, sun',
  t01853: 'active, Korea, Geumcheon-gu, 512M, 5h, sun-cfa',
  t01855: 'active, Korea, Geumcheon-gu, 512M, 5h, sun-cfa',
  t01908: 'active, China, Hangzhou, 512M, 4h, sun-cfa',
  t01913: 'active, China, Zhejiang, 32G, 10h, sun-cfa',

  // Sealing - sun

  t01119: 'sealing, Korea, Seongnam-si, 32G, sun',
  t01206: 'sealing, China, Shandong, 32G, sun',
  t01325: 'sealing, China, Wuxi, 32G, sun',
  t01383: 'sealing, China, Wuxi, 32G, sun',
  t01384: 'sealing, China, Wuxi, 32G, sun',
  t01409: 'sealing, China, Chengdu, 32G, sun',
  t01414: 'sealing, Denmark, Kobenhavn S, 32G, sun',
  t01496: 'sealing, Kenya, Nairobi, 32G, sun',
  t01513: 'sealing, China, Shanghai, 32G, sun',
  t01549: 'sealing, China, Hong Kong, 32G, sun',
  t01571: 'sealing, China, Beijing, 32G, sun',
  t01684: 'sealing, China, Changsha, 32G, sun',
  t01717: 'sealing, Switzerland, Muhlau, 32G, sun',
  t02145: 'sealing, China, Wuxi, 32G, sun',
  t02150: 'sealing, China, Wuxi, 32G, sun',
  t02153: 'sealing, China, Jinan, 32G, sun',
  t02168: 'sealing, China, Zhengzhou, 32G, sun',
  t02195: 'sealing, USA, Ashburn, 32G, sun',
  t02220: 'sealing, China, Wuhan, 32G, sun',
  t02226: 'sealing, Germany, Frankfurt, 512M, sun',
  t02243: 'sealing, China, Chengdu, 32G, sun',
  t02247: 'sealing, Canada, Embrun, 32G, sun',
  t02251: 'sealing, China, Liaoning, 32G, sun',
  t02255: 'sealing, China, Jiaxing, 32G, sun',
  t02264: 'sealing, China, Beijing, 32G, sun',
  t02269: 'sealing, China, Zhangjiakou, 32G, sun',
  t02280: 'sealing, New Zealand, Auckland, 32G, sun',
  t02293: 'sealing, China, Changsha, 512M, sun',
  t02351: 'sealing, China, Beijing, 32G, sun',
  t02355: 'sealing, China, Guyan, 512M, sun',

  // Stuck - sun
 
  t01202: 'stuck, China, Hong Kong, 32G, sun-cfa',
  t01305: 'stuck, China, Guangzhou, 32G, sun-xfr',
  t01341: 'stuck, China, Wuxi, 32G, sun-cfa',
  t01547: 'stuck, China, Hangzhou, 32G, sun-cfa',
  t01553: 'stuck, China, Chongqing, 32G, sun-cfa',
  t01649: 'stuck, China, Hangzhou, 512M, sun-cfa', 
  t01827: 'stuck, Korea, Guro-gu, 512M, sun-cfa',
  t01829: 'stuck, Korea, Guro-gu, 512M, sun-cfa',
  t02035: 'stuck, China, Hong Kong, 512M, sun-cfa',
  t02071: 'stuck, China, Wuhan, 512M, sun-cfa',

  // Sealing - sat

  t01278: 'sealing, Australia, 32G, sat',
  t01279: 'sealing, USA, Grand Rapids, 32G, @stuberman, sat',
  t01324: 'sealing, China, Wuxi, 32G, sat',
  t01345: 'sealing, Australia, 32G, sat',
  t01464: 'sealing, Germany, Hamburg, 32G, sat',
  t01492: 'sealing, Sweden, Stockholm, 32G, sat',
  t01546: 'sealing, Netherlands, 32G, sat',
  t01599: 'sealing, China, Shanghai, 32G, sat',
  t01615: 'sealing, Canada, Surrey, 32G, sat',
  t01629: 'sealing, Netherlands, Horn, 32G, sat',
  t01652: 'sealing, China, Shanghai, 32G, sat',
  t01677: 'sealing, USA, 32G, sat',
  t01680: 'sealing, China, Taiyuan, 32G, sat',
  t01698: 'sealing, China, Shenzhen, 32G, sat',
  t01703: 'sealing, Netherlands, Amersfoort, 32G, sat',
  t01723: 'sealing, China, Fuzhou, 32G, sat',
  t01725: 'sealing, China, Shenzhen, 32G, sat',
  t01760: 'sealing, China, Ili, 32G, sat',
  t01817: 'sealing, Japan, Setagaya-ku, 32G, sat',
  t01828: 'sealing, China, Shenzhen, 32G, sat',
  t01851: 'sealing, China, Wuhan, 32G, sat',
  t01858: 'sealing, China, Beijing, 32G, sat',
  t01886: 'sealing, Netherlands, Purmerend, 32G, sat',
  t01979: 'sealing, UK, Hartlepool, 32G, sat',
  t01993: 'sealing, Ireland, Dublin, 32G, sat',
  t02012: 'sealing, USA, Boardman, 32G, @jimpick, sat',
  t02053: 'sealing, China, Xinxiang, 32G, sat',
  t02056: 'sealing, China, Donguan, 32G, sat',
  t02109: 'sealing, China, Hunan, 32G, sat',
  t02128: 'sealing, China, Shenzhen, 32G, sat',
  t02133: 'sealing, China, Beijing, 32G, sat',

  t01054: 'error, China, Hong Kong, 512M, 2h, sat-cfa', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: no suitable P1 workers found
  t01058: 'error, China, Zhongshan, 512M, 1h, 1h', // adding market funds failed: estimating gas used: message execution failed: exit SysErrInsufficientFunds(6), reason: failed to transfer funds (RetCode=6): transfer failed when deducting funds (3630167.99996984378099258 FIL): not enough funds (RetCode=6)
  t01124: 'error, China, Jiaxing, 32G, fri', // dial
  t01127: 'error, China, Guangdong, 32G, fri', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: RPC error (-32700): unmarshaling params for 'Filecoin.AddPiece' (param: *io.Reader): json: cannot unmarshal object into Go value of type io.Reader
  t01208: 'error, China, Sichuan, 32G, 12h', // dial
  t01270: 'error, China, Weifang, 512M, 2h, sat-cfa', // stream reset
  t01319: 'error, Korea, Dongjak-gu, 32G, 22h', // stream reset
  t01352: 'error, Germany, Frankfurst + China, Beijing, 32G, 10h', // sending proposal to storage provider failed: protocol not supported
  t01528: 'error, China, Deyang, chain only, 512M, sat', // dial
  t01657: 'error, China, Ordos, 512M, sat', // dial
  t01660: 'error, China, Beijing, 32G, 24h', // dial
  t01843: 'error, China, Guangzhou, 512M, 3h', // dial

  // New, recycle



  // Asks


  // No-online deals

  // Error

  t01217: 'error, China, Guilin, 512M, 2h', // dial
  t01596: 'error, Australia, Brisbane, chain only, 512M', // dial
  t01847: 'error, China, Shenzhen, 512M', // stream reset
  t01950: 'error, China, Zhengzhou, 512M', // dial
  t01973: 'error, Germany, Roesrath, 512M', // dial
  t02040: 'error, Canada, Embrun, 32G', // dial
  t02252: 'error, China, Beijing, 32G', // dial
  t02407: 'error, China, Fuzhou, 32G', // deal failed: (State=26) deal data verification failed: error generating CommP: failed to build tree Caused by: 0: failed to create data store 1: No such file or directory (os error 2)


  // Dial backoff

  t01627: 'backoff, China, Beijing, 32G',
  t01644: 'backoff, USA, Columbus, 32G',
  t01750: 'backoff, China, Dongguan, 512M',


  // Stuck




  // XNR

  t01340: 'xnr, China, Guangzhou, 32G, fri',
  t01365: 'xnr, Korea, Seoul, 32G, fri',
  t01403: 'xnr, China, Shenzhen, 32G, fri',
  t01419: 'xnr, China, Tongling, 32G, fri',
  t01478: 'xnr, China, Guangzhou, 512M', // failed to dial
  t01487: 'xnr, China, Zhejiang, 512M, fri',
  t01559: 'xnr, China, Guangzhou, 32G, fri',
  t01619: 'xnr, China, Guyuan, 512M', // cfa
  t01745: 'xnr, China, Wuhan, 512M, sat',
  t01787: 'xnr, China, Changzhou, 32G',
  t01812: 'xnr, China, Changsha, 512M, sat',
  t02105: 'xnr, China, Wanju, 32G',


  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
