const annotations = {

  // Active - mon
 
  t01115: 'active, China, Shijiazhuang, 512M, 2h, 2h, 4h, 3h',
  t01206: 'active, China, Shandong, 32G, 1d',
  t01306: 'active, Japan, Tokushima, 32G, 10h, 1d',
  t01314: 'active, Korea, Uijeongbu-si, 512M, <10h, 3h, 4h',
  t01329: 'active, Canada, Brampton, 32G, 22h, 1d',
  t01366: 'active, China, Shijiazhuang, 32G, 11h, 1d',
  t01371: 'active, China, Beijing, 32G, 13h, 1d',
  t01485: 'active, China, Beijing, 32G, 16h, 8h, 7h',
  t01549: 'active, China, Hong Kong, 32G, 1d',
  t01646: 'active, China, Beijing, 32G, 13h, 8h, 8h',
  t01701: 'active, Malaysia, Johor Bahru, 512M, 7h, 2h, 3h',
  t01857: 'active, Korea, Bucheon-si, 512M, 2h, 3h',
  t01998: 'active, Finland, Helsinki, 512M, 2h, 5h, 4h',
  t02258: 'active, China, Wuxi, 512M, 2h, 3h',
  t02261: 'active, Korea, Geumcheon-gu, 512M, 2h, 4h',
  t02275: 'active, Korea, Guro-gu, 512M, 2h, 4h',
  t02550: 'active, Australia, Sydney, 512M, 3h',
  t02665: 'active, China, Foshan, 512M, 4h',
  t02696: 'active, China, Xiamen, 512M, 3h',
  t02680: 'active, USA, 512M, 4h',
  t02709: 'active, China, Chengdu, 512M, 5h',
  t02887: 'active, China, Beijing + Germany, Frankfurt, 512M, 3h',
  t02948: 'active, USA, Boardman, 512M, 7h',
  t03028: 'active, China, Wuhan, 512M, 3h',

  // Active/sealing - mon
 
  t01138: 'active, China, Shijiazhuang, 512M, <8h, 1h, 23h, mon',
  t01183: 'active, Canada, Vancouver, 512M, @jimpick, 2h, 2h, mon',
  t01184: "active, China, Xi'an, 32G, <11h, 13h, 13h, mon",
  t01233: "active, USA, Coeur d'Alene, 512M, @why, 2h, 2h, 5h, mon",
  t01364: 'active, China, Shijiazhuang, 512M, <9h, 3h, 5h, mon',
  t01513: 'active, China, Shanghai, 32G, 10h, mon',
  t01548: 'active, China, Shenzhen, 32G, 15h, 12h, mon',
  t01664: 'active, Korea, Seoul, 32G, 20h, mon',
  t01699: 'active, China, Beijing, 32G, 13h, 23h, mon',
  t01858: 'active, China, Beijing, 32G, 2d, mon',
  t01908: 'active, China, Hangzhou, 512M, 4h, mon',
  t01937: 'active, Japan, Tokushima, 512M, 3h, 2h, mon',
  t02124: 'active, China, Shijiazhuang, 32G, 12h, mon',
  t02251: 'active, China, Liaoning, 32G, 12h, mon',
  t02262: 'active, Korea, Geomcheon-gu, 512M, 2h, mon',

  // Active - sun

  t01500: 'active, China, Chengdu, 512M, <8h, 2h, 3h, mon-xfr',
  t01638: 'active, Poland, Krakow, 512M, @magik6k, 4h, 2h, mon-xfr',

  // Active/sealing - sun
 
  t01362: 'active, China, Beijing, 32G, 12h, sun',
  t01405: 'active, China, Wuxi, 32G, 16h, sun',
  t01455: 'active, China, Guangdong, chain only, 32G, 11h, sun',
  t01598: 'active, China, Fujian, 32G, 16h, sun',
  t01819: 'active, China, Shenzhen, 32G, 17h, sun',

  // Active - sat
 
  t01673: 'active, China, Guangdong, 32G, 13h, mon-cfa',

  // Sealing - mon

  t01202: 'sealing, China, Hong Kong, 32G, mon',
  t01278: 'sealing, Australia, 32G, mon',
  t01324: 'sealing, China, Wuxi, 32G, mon',
  t01345: 'sealing, Australia, 32G, mon',
  t01464: 'sealing, Germany, Hamburg, 32G, mon',
  t01492: 'sealing, Sweden, Stockholm, 32G, mon',
  t01546: 'sealing, Netherlands, 32G, mon',
  t01547: 'sealing, China, Hangzhou, 32G, mon',
  t01553: 'sealing, China, Chongqing, 32G, mon',
  t01629: 'sealing, Netherlands, Horn, 32G, mon',
  t01652: 'sealing, China, Shanghai, 32G, mon',
  t01680: 'sealing, China, Taiyuan, 32G, mon',
  t01760: 'sealing, China, Ili, 32G, mon',
  t01827: 'sealing, Korea, Guro-gu, 512M, mon',
  t01828: 'sealing, China, Shenzhen, 32G, mon',
  t01829: 'sealing, Korea, Guro-gu, 512M, mon',
  t01847: 'sealing, China, Shenzhen, 512M, mon',
  t01855: 'sealing, Korea, Geumcheon-gu, 512M, 5h, mon',
  t02012: 'sealing, USA, Boardman, 32G, @jimpick, mon',
  t02053: 'sealing, China, Xinxiang, 32G, mon',
  t02464: 'sealing, China, Shanghai, 32G, mon',
  t02479: 'sealing, Denmark, Kobenhavn S, 32G, mon',
  t02590: 'sealing, China, Beijing, 32G, mon',
  t02615: 'sealing, China, Zhengzhou, 32G, mon',
  t02632: 'sealing, China, Fuzhou, 32G, mon',
  t02685: 'sealing, China, Hong Kong, 32G, mon',
  t02686: 'sealing, USA, 32G, mon',
  t02690: 'sealing, China, Luzhou, 32G, mon',
  t02691: 'sealing, USA, Irvine, 32G, mon',
  t02699: 'sealing, China, Beijing, 512M, mon',
  t02702: 'sealing, Japan, Setagaya-ku, 32G, mon',
  t02714: 'sealing, China, Xiamen, 32G, mon',
  t02751: 'sealing, China, Ordos, 32G, mon',
  t02820: 'sealing, China, Changsha, 32G, mon',
  t02845: 'sealing, USA, El Monte, 32G, mon',
  t02848: 'sealing, China, Shenzhen, 32G, mon',
  t02854: 'sealing, China, Weifang, 32G, mon',
  t02862: 'sealing, China, Tianjin, 32G, mon',
  t02879: 'sealing, China, Guyuan, 512M, mon',
  t02916: 'sealing, China, Chengdu, 32G, mon',
  t02946: 'sealing, China, Yibin, 32G, mon',
  t02989: 'sealing, China, Shanghai, 32G, mon',
  t03006: 'sealing, China, Wuhan, 32G, mon',
  t03034: 'sealing, China, Wuhan, 32G, mon',
  t03038: 'sealing, Ukraine, Kyiv, 32G, mon',
  t03049: 'sealing, China, Zhangjiakou, 32G, mon',
  t03051: 'sealing, Korea, Seongnam-si, 32G, mon',
  t03079: 'sealing, China, Wuhan, 32G, mon',
  t03089: 'sealing, China, Hangzhou, 32G, mon',
  t03107: 'sealing, China, Zhejiang, 32G, mon',
  t03155: 'sealing, China, Hunan, 32G, mon',
  t03157: 'sealing, China, Beijing, 512M, mon',
  t03170: 'sealing, China, Dongguan, 32G, mon',

  // Stuck - mon

  t01058: 'stuck, China, Zhongshan, 512M, 1h, 1h, mon-cfa',
  t01341: 'stuck, China, Wuxi, 32G, mon-cfa',
  t01657: 'stuck, China, Ordos, 512M, mon-xfr',
  t01853: 'stuck, Korea, Geumcheon-gu, 512M, 5h, mon-cfa',
  t02355: 'stuck, China, Guyan, 512M, mon-cfa',
  t02461: 'stuck, China, Dongguan, 32G, mon-xfr',
  t02787: 'stuck, China, Hangzhou, 512M, mon-cfa',
  t03053: 'stuck, China, Changsha, 512M, mon-cfa',
  t03104: 'stuck, USA, Central Islip, 32G, mon-cfa',
 
  // Sealing - sun

  t01119: 'sealing, Korea, Seongnam-si, 32G, sun',
  t01325: 'sealing, China, Wuxi, 32G, sun',
  t01383: 'sealing, China, Wuxi, 32G, sun',
  t01384: 'sealing, China, Wuxi, 32G, sun',
  t01409: 'sealing, China, Chengdu, 32G, sun',
  t01414: 'sealing, Denmark, Kobenhavn S, 32G, sun',
  t01496: 'sealing, Kenya, Nairobi, 32G, sun',
  t01571: 'sealing, China, Beijing, 32G, sun',
  t01684: 'sealing, China, Changsha, 32G, sun',
  t01717: 'sealing, Switzerland, Muhlau, 32G, sun',
  t02145: 'sealing, China, Wuxi, 32G, sun',
  t02150: 'sealing, China, Wuxi, 32G, sun',
  t02153: 'sealing, China, Jinan, 32G, sun',
  t02168: 'sealing, China, Zhengzhou, 32G, sun',
  t02195: 'sealing, USA, Ashburn, 32G, sun',
  t02220: 'sealing, China, Wuhan, 32G, sun',
  t02243: 'sealing, China, Chengdu, 32G, sun',
  t02247: 'sealing, Canada, Embrun, 32G, sun',
  t02255: 'sealing, China, Jiaxing, 32G, sun',
  t02264: 'sealing, China, Beijing, 32G, sun',
  t02269: 'sealing, China, Zhangjiakou, 32G, sun',
  t02280: 'sealing, New Zealand, Auckland, 32G, sun',
  t02351: 'sealing, China, Beijing, 32G, sun',

  // New, recycle

  // Asks


  // No-online deals


  // Error

  t01054: 'error, China, Hong Kong, 512M, 2h, sat-cfa', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: no suitable P1 workers
  t01124: 'error, China, Jiaxing, 32G, fri', // dial
  t01127: 'error, China, Guangdong, 32G, fri', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: RPC error (-32700): unmarshaling params for 'Filecoin.AddPiece' (param: *io.Reader): json: cannot unmarshal object into Go value of type io.Reader
  t01217: 'error, China, Guilin, 512M, 2h', // dial
  t01279: 'error, USA, Grand Rapids, 32G, @stuberman, sat', // dial
  t01305: 'error, China, Guangzhou, 32G, sun-xfr', // dial
  t01319: 'error, Korea, Dongjak-gu, 32G, 22h', // stream reset
  t01352: 'error, Germany, Frankfurst + China, Beijing, 32G, 10h', // sending proposal to storage provider failed: protocol not supported
  t01528: 'error, China, Deyang, chain only, 512M, sat', // dial
  t01596: 'error, Australia, Brisbane, chain only, 512M', // dial
  t01599: 'error, China, Shanghai, 32G, sat', // unable to verify signature on deal response
  t01660: 'error, China, Beijing, 32G, 24h', // dial
  t01677: 'error, USA, 32G, sat', // dial
  t01698: 'error, China, Shenzhen, 32G, sat', // dial
  t01723: 'error, China, Fuzhou, 32G, sat', // dial
  t01738: 'error, China, Guilin, 32G, 15h, sun-cfa', // dial
  t01773: 'error, China, Chongqing, 32G, 13h', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacecx4llbuzy5u7go5udwqyj4nklhoj6y4f7t7qtyf26eai4a3ivj7y n 3045, TS: bafy2bzaced2dmb7d33xqbleg3shxxgtjbh2pxkclya52ja3svp2z2nveqb2xg n3045)
  t01817: 'error, Japan, Setagaya-ku, 32G, sat', // dial
  t01843: 'error, China, Guangzhou, 512M, 3h', // dial
  t01851: 'error, China, Wuhan, 32G, sat', // dial
  t01886: 'error, Netherlands, Purmerend, 32G, sat', // gas
  t01950: 'error, China, Zhengzhou, 512M', // dial
  t01973: 'error, Germany, Roesrath, 512M', // dial
  t01979: 'error, UK, Hartlepool, 32G, sat', // dial
  t01993: 'error, Ireland, Dublin, 32G, sat', // dial
  t01995: 'error, USA, Redmond, 32G, 11h', // dial
  t02040: 'error, Canada, Embrun, 32G', // dial
  t02071: 'error, China, Wuhan, 512M, sun-cfa', // error in deal activation: failed to set up called handler: called check error (h: 7458): client: failed to look up deal on chain: deal 12831 not found
  t02109: 'error, China, Hunan, 32G, 20h', // dial
  t02128: 'error, China, Shenzhen, 32G, sat', // dial
  t02226: 'error, Germany, Frankfurt, 512M, sun', // dial
  t02252: 'error, China, Beijing, 32G', // dial
  t02441: 'error, China, Changsha, 512M', // gas
  t02426: 'error, USA, Bay Shore, 32G', // dial
  t02624: 'error, China, Wuxi, 512M', // dial
  t02705: 'error, USA, Boardman, 512M', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacechih6xgp4n4bhar56ik4o2zbrnfnsa4r3q65canjm5veptbrwszu n 120, TS: bafy2bzaceazydjp7qswjo3ld6ac2kwgyapsxm3liqwlue6sycyagfm5p7scsw n120)
  t02732: 'error, China, Foshan, 32G', // stream reset
  t02949: 'error, USA, Boardman, 512M', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzaceddf6i32byuotqfexsyyiirtz3nifflcvurrexnyktkacmyyktloq n 120, TS: bafy2bzaceazydjp7qswjo3ld6ac2kwgyapsxm3liqwlue6sycyagfm5p7scsw n120)
  t03123: 'error, China, Chongqing, 32G', // dial



  // Dial backoff

  t01208: 'backoff, China, Sichuan, 32G, 12h',
  t01270: 'backoff, China, Weifang, 512M, 2h, sat-cfa', // stream reset
  t01627: 'backoff, China, Beijing, 32G',
  t01644: 'backoff, USA, Columbus, 32G',
  t01731: 'backoff, China, Dongguan, 32G, 13h, sun-cfa',
  t01913: 'backoff, China, Zhejiang, 32G, 10h, sun-cfa',
  t03029: 'backoff, China, Guangzhou, 32G',

  // Stuck


  // XNR

  t01340: 'xnr, China, Guangzhou, 32G, fri',
  t01365: 'xnr, Korea, Seoul, 32G, fri',
  t01378: 'xnr, China, Ordos, 512M, <9h, 9h',
  t01403: 'xnr, China, Shenzhen, 32G, fri',
  t01419: 'xnr, China, Tongling, 32G, fri',
  t01444: 'xnr, China, Zhongshan, 512M, <9h, 2h, 6h',
  t01478: 'xnr, China, Guangzhou, 512M',
  t01484: 'xnr, China, Beijing, 512M, <8h, sun',
  t01487: 'xnr, China, Zhejiang, 512M, fri',
  t01559: 'xnr, China, Guangzhou, 32G, fri',
  t01615: 'xnr, Canada, Surrey, 32G, sat',
  t01619: 'xnr, China, Guyuan, 512M',
  t01649: 'xnr, China, Hangzhou, 512M', 
  t01703: 'xnr, Netherlands, Amersfoort, 32G, sat',
  t01725: 'xnr, China, Shenzhen, 32G, sat',
  t01745: 'xnr, China, Wuhan, 512M, sat',
  t01750: 'xnr, China, Dongguan, 512M',
  t01787: 'xnr, China, Changzhou, 32G',
  t01812: 'xnr, China, Changsha, 512M, sat',
  t02035: 'xnr, China, Hong Kong, 512M',
  t02056: 'xnr, China, Donguan, 32G, sat',
  t02105: 'xnr, China, Wanju, 32G',
  t02133: 'xnr, China, Beijing, 32G, sat',
  t02265: 'xnr, Korea, Geomcheon-gu, 512M, 2h',
  t02293: 'xnr, China, Changsha, 512M, sun',
  t02407: 'xnr, China, Fuzhou, 32G',




  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
