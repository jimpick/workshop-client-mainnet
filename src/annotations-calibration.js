const annotations = {

  // Active - tue
 
  t01058: 'active, China, Zhongshan, 512M, 1h, 1h, 1h',
  t01138: 'active, China, Shijiazhuang, 512M, <8h, 1h, 23h, 11h, 1h',
  t01287: 'active, Sweden, Stockholm, 512M, 2h',
  t01293: 'active, China, Hong Kong, Shenzhen + Jieyang, 512M, 1h',
  t01699: 'active, China, Beijing, 32G, 13h, 23h, 20h',
  t01828: 'active, China, Shenzhen, 32G, <24h',
  t02258: 'active, China, Wuxi, 512M, 2h, 3h, 2h',
  t02464: 'active, China, Shanghai, 32G, <24h',
  t02479: 'active, Denmark, Kobenhavn S, 32G, <24h',
  t02751: 'active, China, Ordos, 32G, <20h',
  t03049: 'active, China, Zhangjiakou, 32G, <24h',
  t03155: 'active, China, Hunan, 32G, <23h',
  t03213: 'active, USA, Boardman, 512M, <11h',
  t03334: 'active, China, Liaoning, 512M, <11h',
  t03365: 'active, Ireland, Dublin, 32G, 18h',
  t03455: 'active, China, Deyang + Singapore, 512M, 2h',
  t03471: 'active, China, Foshan, 512M, 1h',
  t03474: 'active, China, Foshan, 512M, 1h',
  t03655: 'active, China, Weifang, chain only, 512M, 2h',
  t03742: 'active, China, Jiangmen, 512M, 2h',


  // Active/sealing - tue
 
  t01206: 'active, China, Shandong, 32G, 1d, tue',
  t01233: "active, USA, Coeur d'Alene, 512M, @why, 2h, 2h, 5h, tue",
  t01306: 'active, Japan, Tokushima, 32G, 10h, 1d, tue',
  t01549: 'active, China, Hong Kong, 32G, 1d, tue',
  t01701: 'active, Malaysia, Johor Bahru, 512M, 7h, 2h, 3h, tue',
  t01857: 'active, Korea, Bucheon-si, 512M, 2h, 3h, tue',
  t01908: 'active, China, Hangzhou, 512M, 4h, tue',
  t02261: 'active, Korea, Geumcheon-gu, 512M, 2h, 4h, tue',
  t02262: 'active, Korea, Geomcheon-gu, 512M, 2h, tue',
  t02275: 'active, Korea, Guro-gu, 512M, 2h, 4h, tue',
  t02665: 'active, China, Foshan, 512M, 4h, tue',
  t02696: 'active, China, Xiamen, 512M, 3h, tue',
  t02862: 'active, China, Tianjin, 32G, 10h, tue',

  // Active - mon
 
  t01364: 'active, China, Shijiazhuang, 512M, <9h, 3h, 5h, <16h, tue-xfr',
  t01366: 'active, China, Shijiazhuang, 32G, 11h, 1d, tue-xfr',
  t01371: 'active, China, Beijing, 32G, 13h, 1d, tue-xfr',
  t01485: 'active, China, Beijing, 32G, 16h, 8h, 7h, tue-xfr',
  t01646: 'active, China, Beijing, 32G, 13h, 8h, 8h, tue-xfr',
  t02686: 'active, USA, 32G, 9h, tue-xfr',
  t02690: 'active, China, Luzhou, 32G, 11h, tue-xfr',
  t02691: 'active, USA, Irvine, 32G, 9h, tue-xfr',
  t02887: 'active, China, Beijing + Germany, Frankfurt, 512M, 3h, tue-xfr',

  // Active/sealing - mon
 
  t01183: 'active, Canada, Vancouver, 512M, @jimpick, 2h, 2h, tue-xfr',
  t01184: "active, China, Xi'an, 32G, <11h, 13h, 13h, mon",
  t01513: 'active, China, Shanghai, 32G, 10h, mon',
  t01548: 'active, China, Shenzhen, 32G, 15h, 12h, mon',
  t01664: 'active, Korea, Seoul, 32G, 20h, mon',
  t01858: 'active, China, Beijing, 32G, 2d, mon',
  t02124: 'active, China, Shijiazhuang, 32G, 12h, mon',
  t02251: 'active, China, Liaoning, 32G, 12h, mon',


  // Active - sun

  t01638: 'active, Poland, Krakow, 512M, @magik6k, 4h, 2h, tue-xfr',

  // Active/sealing - sun
 
  t01362: 'active, China, Beijing, 32G, 12h, sun',
  t01405: 'active, China, Wuxi, 32G, 16h, sun',
  t01455: 'active, China, Guangdong, chain only, 32G, 11h, sun',
  t01598: 'active, China, Fujian, 32G, 16h, sun',
  t01819: 'active, China, Shenzhen, 32G, 17h, sun',

  // Active - sat
 

  // Sealing - tue

  t01084: 'sealing, China, Hong Kong, 32G, tue',
  t01089: 'sealing, China, Fujian, chain only, 32G, tue',
  t01094: 'sealing, China, Liaoning, chain only, 32G, tue',
  t01104: 'sealing, China, Fujian, chain only, 32G, tue',
  t01142: 'sealing, China, Jiaxing, chain only, 32G, tue',
  t01265: 'sealing, China, Wenzhou + Singapore, 32G, tue',
  t01285: 'sealing, China, Beijing, chain only, 32G, tue',
  t01290: 'sealing, USA, 32G, tue',
  t01327: 'sealing, China, Shanghai, chain only, 32G, tue',
  t01328: "sealing, China, Xi'an, chain only, 32G, tue",
  t01342: 'sealing, China, Deyang + Singapore, chain only, 32G, tue',
  t01438: 'sealing, China, Dongguan, chain only, 512M, tue',
  t01451: 'sealing, Russia, Novosibirsk, chain only, 32G, tue',
  t01515: "sealing, China, Xi'an, chain only, 32G, tue",
  t01558: 'sealing, China, Guangzhou, 32G, tue',
  t01595: 'sealing, China, Shenzhen, chain only, 32G, tue',
  t01768: 'sealing, China, Dongguan, chain only, 32G, tue',
  t01835: 'sealing, USA, chain only, 32G, tue',
  t01836: 'sealing, USA, Brooklyn, chain only, 32G, tue',
  t01837: 'sealing, USA, chain only, 32G, tue',
  t01844: 'sealing, China, Xiamen, chain only, 512M, tue',
  t01907: 'sealing, Singapore, 32G, tue',
  t02140: 'sealing, China, Guangdong, 32G, tue',
  t02252: 'sealing, China, Beijing, 32G, tue',
  t02355: 'sealing, China, Guyan, 512M, tue',
  t02461: 'sealing, China, Dongguan, 32G, tue',
  t02667: 'sealing, China, Chengdu, chain only, 512M, tue',
  t03048: 'sealing, China, Dongguan, chain only, 32G, tue',
  t03212: 'sealing, USA, Boardman, 512M, 32G, @raul, tue',
  t03280: 'sealing, China, Zhejiang, chain only, 32G, tue',
  t03312: 'sealing, Finland, Helsinki, 32G, tue',
  t03436: 'sealing, China, Yibin, 32G, tue',
  t03444: 'sealing, China, Shanghai, 32G, tue',
  t03446: 'sealing, China, Guangdong + Hong Kong, 32G, tue',
  t03447: 'sealing, China, Fujian, 32G, tue',
  t03449: 'sealing, China, Fujian, 32G, tue',
  t03451: 'sealing, China, Guangzhou, 32G, tue',
  t03560: 'sealing, China, Shenzhen, 32G, tue',
  t03462: 'sealing, China, Shanghai, chain only, 512M, tue',
  t03465: 'sealing, Japan, Shinagawa, 32G, tue',
  t03477: 'sealing, China, Beijing, 32G, tue',
  t03497: 'sealing, China, Shenzhen, 32G, tue',
  t03535: 'sealing, China, Hangzhou + USA, 32G, tue',
  t03541: 'sealing, China, Shenzhen, 32G, tue',
  t03583: 'sealing, China, Shenzhen, 32G, tue',
  t03568: 'sealing, Korea, Wanju, 32G, tue',
  t03608: 'sealing, Korea, Gwangju, 32G, tue',
  t03615: 'sealing, China, Hong Kong, 32G, tue',
  t03618: 'sealing, China, Dongguan, 32G, tue',
  t03646: 'sealing, Korea, 32G, tue',
  t03667: 'sealing, Ukraine, Kyiv, 32G, tue',
  t03697: 'sealing, China, Wuxi, 32G, tue',
  t03721: 'sealing, Canada, Montreal, 32G, tue',

  // Stuck - tue

  t01042: 'stuck, China, Shanghai, chain only, 32G, tue-xfr',
  t01072: 'stuck, China, Mianyang, 32G, tue-cfa',
  t01121: 'stuck, China, Wuhan, 32G, tue-cfa',
  t01208: 'stuck, China, Sichuan, 32G, 12h, tue-xfr',
  t01253: 'stuck, Vietman, Hanoi, chain only, 32G, tue-xfr',
  t01309: 'stuck, China, Ordos, chain only, 32G, tue-xfr',
  t01353: 'stuck, China, Guangzhou, 32G, tue-xfr',
  t01557: 'stuck, China, Qingdao, chain only, 32G, tue-xfr',
  t01679: 'stuck, China, Shenzhen, chain only, 32G, tue-xfr',
  t01773: 'stuck, China, Chongqing, 32G, 13h, tue-xfr',
  t01832: 'stuck, China, Shenzhen, chain only, 32G, tue-xfr',
  t01843: 'stuck, China, Guangzhou, 512M, 3h, tue-xfr',
  t02002: 'stuck, Germany, Roesrath, 32G, tue-xfr',
  t02624: 'stuck, China, Wuxi, 512M, tue-xfr',

 
  // Sealing - mon

  t01202: 'sealing, China, Hong Kong, 32G, mon',
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
  t01829: 'sealing, Korea, Guro-gu, 512M, mon',
  t01847: 'sealing, China, Shenzhen, 512M, mon',
  t01855: 'sealing, Korea, Geumcheon-gu, 512M, 5h, mon',
  t02012: 'sealing, USA, Boardman, 32G, @jimpick, mon',
  t02053: 'sealing, China, Xinxiang, 32G, mon',
  t02590: 'sealing, China, Beijing, 32G, mon',
  t02615: 'sealing, China, Zhengzhou, 32G, mon',
  t02632: 'sealing, China, Fuzhou, 32G, mon',
  t02685: 'sealing, China, Hong Kong, 32G, mon',
  t02699: 'sealing, China, Beijing, 512M, mon',
  t02702: 'sealing, Japan, Setagaya-ku, 32G, mon',
  t02714: 'sealing, China, Xiamen, 32G, mon',
  t02820: 'sealing, China, Changsha, 32G, mon',
  t02845: 'sealing, USA, El Monte, 32G, mon',
  t02848: 'sealing, China, Shenzhen, 32G, mon',
  t02854: 'sealing, China, Weifang, 32G, mon',
  t02879: 'sealing, China, Guyuan, 512M, mon',
  t02916: 'sealing, China, Chengdu, 32G, mon',
  t02946: 'sealing, China, Yibin, 32G, mon',
  t02989: 'sealing, China, Shanghai, 32G, mon',
  t03006: 'sealing, China, Wuhan, 32G, mon',
  t03034: 'sealing, China, Wuhan, 32G, mon',
  t03038: 'sealing, Ukraine, Kyiv, 32G, mon',
  t03051: 'sealing, Korea, Seongnam-si, 32G, mon',
  t03079: 'sealing, China, Wuhan, 32G, mon',
  t03089: 'sealing, China, Hangzhou, 32G, mon',
  t03107: 'sealing, China, Zhejiang, 32G, mon',
  t03157: 'sealing, China, Beijing, 512M, mon',
  t03170: 'sealing, China, Dongguan, 32G, mon',
  t03220: 'sealing, China, Shenzhen, 32G, mon',
  t03236: 'sealing, USA, Grand Rapids, 32G, mon',
  t03247: 'sealing, Canada, Brampton, 32G, mon',
  t03269: 'sealing, China, Dongguan, 32G, mon',
  t03324: 'sealing, China, Wuxi, 32G, mon',
  t03329: 'sealing, China, Shijiazhuang, 32G, mon',
  t03331: 'sealing, China, Wuxi, 32G, mon',
  t03349: 'sealing, China, Chongqing, 32G, mon',
  t03422: 'sealing, China, Changsha, 32G, mon',

  // Stuck - mon

  t01341: 'stuck, China, Wuxi, 32G, tue-cfa',
  t01853: 'stuck, Korea, Geumcheon-gu, 512M, 5h, tue-cfa',
 
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


  t01045: 'error, China, Hangzhou, chain only, 32G', // stream reset
  t01054: 'error, China, Hong Kong, 512M, 2h, sat-cfa', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: no suitable P1 workers
  t01115: 'error, China, Shijiazhuang, 512M, 2h, 2h, 4h, 3h', // dial
  t01124: 'error, China, Jiaxing, 32G, fri', // dial
  t01127: 'error, China, Guangdong, 32G, fri', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: RPC error (-32700): unmarshaling params for 'Filecoin.AddPiece' (param: *io.Reader): json: cannot unmarshal object into Go value of type io.Reader
  t01128: 'error, China, Jiangsu, 32G', // dial
  t01217: 'error, China, Guilin, 512M, 2h', // dial
  t01279: 'error, USA, Grand Rapids, 32G, @stuberman, sat', // dial
  t01280: 'error, China, Ningbo, chain only, 32G', // dial
  t01319: 'error, Korea, Dongjak-gu, 32G, 22h', // stream reset
  t01323: 'error, China, Hangzhou, chain only, 32G', // dial
  t01329: 'error, Canada, Brampton, 32G, 22h, 1d', // dial
  t01331: 'error, China, Shenzhen, chain only, 512M', // dial
  t01336: 'error, China, Zhengzhou, chain only, 32G', // dial
  t01352: 'error, Germany, Frankfurst + China, Beijing, 32G, 10h', // sending proposal to storage provider failed: protocol not supported
  t01426: 'error, China, Shaanxi, chain only, 512M', // dial
  t01528: 'error, China, Deyang, chain only, 512M, sat', // dial
  t01596: 'error, Australia, Brisbane, chain only, 512M', // dial
  t01606: 'error, Singapore, chain only, 512M', // dial
  t01657: 'error, China, Ordos, 512M, mon-xfr', // sending proposal to storage provider failed: protocol not supported
  t01660: 'error, China, Beijing, 32G, 24h', // dial
  t01677: 'error, USA, 32G, sat', // dial
  t01698: 'error, China, Shenzhen, 32G, sat', // dial
  t01723: 'error, China, Fuzhou, 32G, sat', // dial
  t01738: 'error, China, Guilin, 32G, 15h, sun-cfa', // dial
  t01762: 'error, Norway, Oslo, chain only, 512M', // dial
  t01805: 'error, China, Shenzhen, chain only, 512M', // dial
  t01817: 'error, Japan, Setagaya-ku, 32G, sat', // dial
  t01851: 'error, China, Wuhan, 32G, sat', // dial
  t01880: 'error, China, Fuzhou, chain only, 32G', // dial
  t01886: 'error, Netherlands, Purmerend, 32G, sat', // gas
  t01937: 'error, Japan, Tokushima, 512M, 3h, 2h, 12h', // dial
  t01950: 'error, China, Zhengzhou, 512M', // dial
  t01973: 'error, Germany, Roesrath, 512M', // dial
  t01979: 'error, UK, Hartlepool, 32G, sat', // dial
  t01993: 'error, Ireland, Dublin, 32G, sat', // dial
  t01995: 'error, USA, Redmond, 32G, 11h', // dial
  t02040: 'error, Canada, Embrun, 32G', // dial
  t02109: 'error, China, Hunan, 32G, 20h', // dial
  t02128: 'error, China, Shenzhen, 32G, sat', // dial
  t02226: 'error, Germany, Frankfurt, 512M, sun', // dial
  t02426: 'error, USA, Bay Shore, 32G', // dial
  t02466: 'error, China, Jiangmen, 512M', // dial
  t02540: 'error, China, Qiquihar, chain only, 32G', // dial
  t02550: 'error, Australia, Sydney, 512M, 3h', // stream reset
  t02705: 'error, USA, Boardman, 512M', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacechih6xgp4n4bhar56ik4o2zbrnfnsa4r3q65canjm5veptbrwszu n 120, TS: bafy2bzaceazydjp7qswjo3ld6ac2kwgyapsxm3liqwlue6sycyagfm5p7scsw n120)
  t02712: 'error, China, Hangzhou, chain only, 32G', // dial
  t02876: 'error, China, Hong Kong, chain only, 32G', // stream reset
  t02948: 'error, USA, Boardman, 512M, 7h', // stream reset
  t02949: 'error, USA, Boardman, 512M', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzaceddf6i32byuotqfexsyyiirtz3nifflcvurrexnyktkacmyyktloq n 120, TS: bafy2bzaceazydjp7qswjo3ld6ac2kwgyapsxm3liqwlue6sycyagfm5p7scsw n120)
  t03028: 'error, China, Wuhan, 512M, 3h', // stream reset
  t03053: 'error, China, Changsha, 512M, mon-cfa', // stream reset
  t03123: 'error, China, Chongqing, 32G', // dial
  t03148: 'error, China, Changzhou, chain only, 32G', // stream reset
  t03216: 'error, China, Hangzhou, chain only, 512M', // dial
  t03305: 'error, China, Shenyang, 512M', // gas
  t03308: 'error, USA, Sammamish, 32G', // deal data transfer failed
  t03357: 'error, China, Hangzhou, chain only, 512M', // dial
  t03399: 'error, China, Wuhan, 32G', // stream reset
  t03427: 'error, China, Beijing, 32G', // dial
  t03595: 'error, China, Wuhan, 32G', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  t03601: 'error, China, Hong Kong, 32G', // dial
  t03619: 'error, Netherlands, Purmerend, 32G', // stream reset




  // Dial backoff

  t01109: 'backoff, China, Shanghai, chain only, 32G',
  t01270: 'backoff, China, Weifang, 512M, 2h, sat-cfa', // stream reset
  t01278: 'backoff, Australia, 32G, 9h',
  t01284: 'backoff, China, Beijing, chain only, 512M',
  t01314: 'backoff, Korea, Uijeongbu-si, 512M, <10h, 3h, 4h',
  t01627: 'backoff, China, Beijing, 32G',
  t01644: 'backoff, USA, Columbus, 32G',
  t01693: 'backoff, China, Shenzhen, chain only, 512M',
  t01731: 'backoff, China, Dongguan, 32G, 13h, sun-cfa',
  t01765: 'backoff, USA, chain only, 32G',
  t01766: 'backoff, China, Shenzhen + Singapore, 32G',
  t01783: 'backoff, Singapore, chain only, 32G',
  t02709: 'backoff, China, Chengdu, 512M, 5h',
  t02787: 'backoff, China, Hangzhou, 512M, mon-cfa',
  t03622: 'backoff, China, Ili, 32G',


  // Stuck


  // XNR

  t01305: 'xnr, China, Guangzhou, 32G, sun-xfr',
  t01340: 'xnr, China, Guangzhou, 32G, fri',
  t01365: 'xnr, Korea, Seoul, 32G, fri',
  t01378: 'xnr, China, Ordos, 512M, <9h, 9h',
  t01403: 'xnr, China, Shenzhen, 32G, fri',
  t01419: 'xnr, China, Tongling, 32G, fri',
  t01444: 'xnr, China, Zhongshan, 512M, <9h, 2h, 6h',
  t01478: 'xnr, China, Guangzhou, 512M',
  t01484: 'xnr, China, Beijing, 512M, <8h, sun',
  t01487: 'xnr, China, Zhejiang, 512M, fri',
  t01500: 'xnr, China, Chengdu, 512M, <8h, 2h, 3h, mon-xfr',
  t01559: 'xnr, China, Guangzhou, 32G, fri',
  t01599: 'xnr, China, Shanghai, 32G, sat',
  t01615: 'xnr, Canada, Surrey, 32G, sat',
  t01619: 'xnr, China, Guyuan, 512M',
  t01649: 'xnr, China, Hangzhou, 512M', 
  t01673: 'xnr, China, Guangdong, 32G, 13h, mon-cfa',
  t01703: 'xnr, Netherlands, Amersfoort, 32G, sat',
  t01725: 'xnr, China, Shenzhen, 32G, sat',
  t01745: 'xnr, China, Wuhan, 512M, sat',
  t01750: 'xnr, China, Dongguan, 512M',
  t01787: 'xnr, China, Changzhou, 32G',
  t01812: 'xnr, China, Changsha, 512M, sat',
  t01913: 'xnr, China, Zhejiang, 32G, 10h, sun-cfa',
  t01998: 'xnr, Finland, Helsinki, 512M, 2h, 5h, 4h',
  t02035: 'xnr, China, Hong Kong, 512M',
  t02056: 'xnr, China, Donguan, 32G, sat',
  t02071: 'xnr, China, Wuhan, 512M, sun-cfa',
  t02105: 'xnr, China, Wanju, 32G',
  t02133: 'xnr, China, Beijing, 32G, sat',
  t02265: 'xnr, Korea, Geomcheon-gu, 512M, 2h',
  t02293: 'xnr, China, Changsha, 512M, sun',
  t02407: 'xnr, China, Fuzhou, 32G',
  t02441: 'xnr, China, Changsha, 512M',
  t02680: 'xnr, USA, 512M, 4h',
  t02732: 'xnr, China, Foshan, 32G',
  t03029: 'xnr, China, Guangzhou, 32G',
  t03104: 'xnr, USA, Central Islip, 32G, mon-cfa',


  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
