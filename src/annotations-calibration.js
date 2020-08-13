const annotations = {

  // Active - wed

  t01314: 'active, Korea, Uijeongbu-si, 512M, <10h, 3h, 4h, 3h',
  t01857: 'active, Korea, Bucheon-si, 512M, 2h, 3h, 3h, 3h',
  t01908: 'active, China, Hangzhou, 512M, 4h, 9h, 3h',
  t02667: 'active, China, Chengdu, chain only, 512M, 2h',
  t02887: 'active, China, Beijing + Germany, Frankfurt, 512M, 3h, 2h',
  t03028: 'active, China, Wuhan, 512M, 3h, 3h',
  t03212: 'active, USA, Boardman, 512M, 32G, @raul, 15h, 2h',
  t03305: 'active, China, Shenyang, 512M, 2h', 
  t03471: 'active, China, Foshan, 512M, 1h, 2h',
  t04074: 'active, USA, 512M, 3h',

  // Active/sealing - wed

  t01265: 'active, China, Wenzhou + Singapore, 32G, 9h, wed',
  t01285: 'active, Singapore, chain only, 32G, 15h, wed',
  t01287: 'active, Sweden, Stockholm, 512M, 2h, wed',
  t01328: "active, China, Xi'an, chain only, 32G, 13h, wed",
  t01455: 'active, China, Guangdong, chain only, 32G, 11h, wed',
  t01828: 'active, China, Shenzhen, 32G, <24h, wed',
  t03236: 'active, USA, Grand Rapids, 32G, 8h, wed',
  t03247: 'active, Canada, Brampton, 32G, 21h, wed',
  t03334: 'active, China, Liaoning, 512M, <11h, 3h, wed',
  t03349: 'active, China, Chongqing, 32G, 22h, wed',
  t03365: 'active, Ireland, Dublin, 32G, 18h, wed',
  t03444: 'active, China, Shanghai, 32G, 16h, wed',
  t03560: 'active, China, Shenzhen, 32G, 22h, wed',
  t03568: 'active, Korea, Wanju, 32G, 7h, wed',
  t03615: 'active, China, Hong Kong, 32G, 7h, wed',

  // Active - tue
 
  t01089: 'active, China, Fujian, chain only, 32G, 20h, wed-xfr',
  t01638: 'active, Poland, Krakow, 512M, @magik6k, 4h, 2h, 3h, wed-cfa',
  t02258: 'active, China, Wuxi, 512M, 2h, 3h, 2h, wed-xfr',
  t03155: 'active, China, Hunan, 32G, <23h, wed-xfr',
  t03462: 'active, China, Shanghai, chain only, 512M, 9h, wed-xfr',
  t03742: 'active, China, Jiangmen, 512M, 2h, wed-cfa',

  // Active/sealing - tue
 
  t01206: 'active, China, Shandong, 32G, 1d, tue',
  t01306: 'active, Japan, Tokushima, 32G, 10h, 1d, tue',
  t01549: 'active, China, Hong Kong, 32G, 1d, tue',
  t02262: 'active, Korea, Geomcheon-gu, 512M, 2h, wed-funds',
  t02862: 'active, China, Tianjin, 32G, 10h, tue',

  // Active - mon
 
  t01364: 'active, China, Shijiazhuang, 512M, <9h, 3h, 5h, <16h, wed-xfr',
  t01371: 'active, China, Beijing, 32G, 13h, 1d, wed-xfr',
  t01485: 'active, China, Beijing, 32G, 16h, 8h, 7h, wed-xfr',
  t01646: 'active, China, Beijing, 32G, 13h, 8h, 8h, wed-xfr',
  t02686: 'active, USA, 32G, 9h, wed-xfr',
  t02690: 'active, China, Luzhou, 32G, 11h, wed-xfr',

  // Active/sealing - mon
 
  t01183: 'active, Canada, Vancouver, 512M, @jimpick, 2h, 2h, wed-cfa',
  t01513: 'active, China, Shanghai, 32G, 10h, wed-xfr',

  // Active/sealing - sun
 
  t01362: 'active, China, Beijing, 32G, 12h, wed-xfr',

  // Sealing - wed

  t01109: 'sealing, China, Shanghai, chain only, 32G, wed',
  t01153: 'sealing, Singapore, 32G, wed',
  t01309: 'sealing, China, Ordos, chain only, 32G, wed',
  t01353: 'sealing, China, Guangzhou, 32G, wed',
  t01384: 'sealing, China, Wuxi, 32G, wed',
  t01438: 'sealing, China, Dongguan, chain only, 512M, wed',
  t01496: 'sealing, Kenya, Nairobi, 32G, wed',
  t01629: 'sealing, Netherlands, Horn, 32G, wed',
  t01717: 'sealing, Switzerland, Muhlau, 32G, wed',
  t01766: 'sealing, China, Shenzhen + Singapore, 32G, wed',
  t01832: 'sealing, China, Shenzhen, chain only, 32G, wed',
  t01906: 'sealing, China, Guangdong, chain only, 32G, wed',
  t02076: 'sealing, Russia, chain only, 32G, wed',
  t02145: 'sealing, China, Wuxi, 32G, wed',
  t02220: 'sealing, China, Wuhan, 32G, wed',
  t02247: 'sealing, Canada, Embrun, 32G, wed',
  t02255: 'sealing, China, Jiaxing, 32G, wed',
  t02685: 'sealing, China, Hong Kong, 32G, wed',
  t02702: 'sealing, Japan, Setagaya-ku, 32G, wed',
  t02763: 'sealing, China, Cangzhou, chain only, 32G, wed',
  t02845: 'sealing, USA, El Monte, 32G, wed',
  t02848: 'sealing, China, Shenzhen, 32G, wed',
  t02854: 'sealing, China, Weifang, 32G, wed',
  t02948: 'sealing, USA, Boardman, 512M, 7h, wed',
  t03006: 'sealing, China, Wuhan, 32G, wed',
  t03018: 'sealing, China, Guangshou, 32G, wed',
  t03097: 'sealing, China, Tongling, chain only, 512M, wed',
  t03269: 'sealing, China, Dongguan, 32G, wed',
  t03308: 'sealing, USA, Sammamish, 32G, wed',
  t03324: 'sealing, China, Wuxi, 32G, wed',
  t03329: 'sealing, China, Shijiazhuang, 32G, wed',
  t03331: 'sealing, China, Wuxi, 32G, wed',
  t03619: 'sealing, Netherlands, Purmerend, 32G, wed',
  t03622: 'sealing, China, Ili, 32G, wed',
  t03821: 'sealing, China, Hong Kong, 32G, wed',
  t03861: 'sealing, USA, Redmond, 32G, wed',
  t04021: 'sealing, China, Beijing, 32G, wed',
  t04029: 'sealing, China, Wuxi, chain only, 32G, wed',
  t04075: 'sealing, China, Hangzhou, 32G, wed',
  t04078: 'sealing, China, Sichuan, 32G, wed',
  t04169: 'sealing, China, Wuhan, 32G, wed',
  t04215: 'sealing, China, Ordos, 32G, wed',
  t04224: 'sealing, China, Dongguan, 32G, wed',
  t04249: 'sealing, China, Changsha, 32G, wed',
  t04284: 'sealing, China, Sichuan, 32G, wed',
  t04301: 'sealing, China, Xiamen, 32G, wed',
  t04303: 'sealing, China, Guiyang, 32G, wed',
  t04304: 'sealing, China, Shenzhen, 32G, wed',
  t04314: 'sealing, China, Hangzhou + Shaoxing, 32G, wed',
  t04319: 'sealing, China, Changsha, 32G, wed',
  t04323: 'sealing, Denmark, Kobenhavn S, 32G, wed',
  t04327: 'sealing, Finland, Helsinki, 512M, wed',
  t04339: 'sealing, China, Fuzhou, 32G, wed',
  t04356: 'sealing, China, Yibin, 32G, wed',

  // Stuck - wed

  t01045: 'stuck, China, Hangzhou, chain only, 32G, wed-cfa',
  t01169: 'stuck, China, Hangzhou, chain only, 32G, wed-cfa',
  t01693: 'stuck, China, Shenzhen, chain only, 512M, wed-cfa',
  t03595: 'stuck, China, Wuhan, 32G, wed-cfa',
  t03758: 'stuck, China, Wuhan, 512M, wed-cfa',
  t03797: 'stuck, China, Xiamen, 512M, wed-xfr',
  t03876: 'stuck, China, Shenzhen, chain only, 512M, wed-xfr',
  t04288: 'stuck, China, Changsha, 512M, wed-cfa',

  // Sealing - tue

  t01084: 'sealing, China, Hong Kong, 32G, tue',
  t01094: 'sealing, China, Liaoning, chain only, 32G, tue',
  t01104: 'sealing, China, Fujian, chain only, 32G, tue',
  t01142: 'sealing, China, Jiaxing, chain only, 32G, tue',
  t01290: 'sealing, USA, 32G, tue',
  t01327: 'sealing, China, Shanghai, chain only, 32G, tue',
  t01342: 'sealing, China, Deyang + Singapore, chain only, 32G, tue',
  t01451: 'sealing, Russia, Novosibirsk, chain only, 32G, tue',
  t01515: "sealing, China, Xi'an, chain only, 32G, tue",
  t01558: 'sealing, China, Guangzhou, 32G, tue',
  t01595: 'sealing, China, Shenzhen, chain only, 32G, tue',
  t01768: 'sealing, China, Dongguan, chain only, 32G, tue',
  t01835: 'sealing, USA, chain only, 32G, tue',
  t01836: 'sealing, USA, Brooklyn, chain only, 32G, tue',
  t01837: 'sealing, USA, chain only, 32G, tue',
  t01907: 'sealing, Singapore, 32G, tue',
  t02140: 'sealing, China, Guangdong, 32G, tue',
  t02252: 'sealing, China, Beijing, 32G, tue',
  t02461: 'sealing, China, Dongguan, 32G, tue',
  t03048: 'sealing, China, Dongguan, chain only, 32G, tue',
  t03280: 'sealing, China, Zhejiang, chain only, 32G, tue',
  t03312: 'sealing, Finland, Helsinki, 32G, tue',
  t03436: 'sealing, China, Yibin, 32G, tue',
  t03446: 'sealing, China, Guangdong + Hong Kong, 32G, tue',
  t03447: 'sealing, China, Fujian, 32G, tue',
  t03449: 'sealing, China, Fujian, 32G, tue',
  t03451: 'sealing, China, Guangzhou, 32G, tue',
  t03465: 'sealing, Japan, Shinagawa, 32G, tue',
  t03477: 'sealing, China, Beijing, 32G, tue',
  t03497: 'sealing, China, Shenzhen, 32G, tue',
  t03535: 'sealing, China, Hangzhou + USA, 32G, tue',
  t03541: 'sealing, China, Shenzhen, 32G, tue',
  t03583: 'sealing, China, Shenzhen, 32G, tue',
  t03608: 'sealing, Korea, Gwangju, 32G, tue',
  t03618: 'sealing, China, Dongguan, 32G, tue',
  t03646: 'sealing, Korea, 32G, tue',
  t03667: 'sealing, Ukraine, Kyiv, 32G, tue',
  t03697: 'sealing, China, Wuxi, 32G, tue',
  t03721: 'sealing, Canada, Montreal, 32G, tue',

  // Stuck - tue

  t01042: 'stuck, China, Shanghai, chain only, 32G, wed-xfr',
  t01072: 'stuck, China, Mianyang, 32G, wed-cfa',
  t01557: 'stuck, China, Qingdao, chain only, 32G, wed-xfr',
  t01773: 'stuck, China, Chongqing, 32G, 13h, wed-xfr',
  t01843: 'stuck, China, Guangzhou, 512M, 3h, wed-xfr',
  t02002: 'stuck, Germany, Roesrath, 32G, wed-xfr',

 
  // Sealing - mon

  t01324: 'sealing, China, Wuxi, 32G, wed-cfa',
  t01345: 'sealing, Australia, 32G, wed-cfa',
  t01464: 'sealing, Germany, Hamburg, 32G, wed-cfa',
  t01546: 'sealing, Netherlands, 32G, wed-cfa',
  t02632: 'sealing, China, Fuzhou, 32G, wed-xfr',
  t02879: 'sealing, China, Guyuan, 512M, wed-xfr',

  // Stuck - mon

  t01341: 'stuck, China, Wuxi, 32G, wed-cfa',
 
  // Sealing - sun

  t01325: 'sealing, China, Wuxi, 32G, wed-cfa',
  t02351: 'sealing, China, Beijing, 32G, wed-xfr',

  // New, recycle



  // Asks

  t01699: 'min-ask, China, Beijing, 32G, 13h, 23h, 20h',

  // No-online deals


  // Error


  t01054: 'error, China, Hong Kong, 512M, 2h, sat-cfa', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: no suitable P1 workers
  t01127: 'error, China, Guangdong, 32G, fri', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: RPC error (-32700): unmarshaling params for 'Filecoin.AddPiece' (param: *io.Reader): json: cannot unmarshal object into Go value of type io.Reader
  t01137: 'error, China, Shanghai, chain only, 32G', // gas
  t01208: 'error, China, Sichuan, 32G, 12h, tue-xfr', // reset
  t01284: 'error, China, Beijing, chain only, 512M', // reset
  t01319: 'error, Korea, Dongjak-gu, 32G, 22h', // stream reset
  t01338: 'error, China, Beijing, chain only, 512M', // stream reset
  t01352: 'error, Germany, Frankfurst + China, Beijing, 32G, 10h', // sending proposal to storage provider failed: protocol not supported
  t01598: 'error, China, Fujian, 32G, 16h, sun', // gas
  t01829: 'error, Korea, Guro-gu, 512M, mon', // reset
  t01853: 'error, Korea, Geumcheon-gu, 512M, 5h, tue-cfa', // reset
  t01855: 'error, Korea, Geumcheon-gu, 512M, 5h, mon', // reset
  t02261: 'error, Korea, Geumcheon-gu, 512M, 2h, 4h, 4h', // reset
  t02275: 'error, Korea, Guro-gu, 512M, 2h, 4h, 4h', // reset
  t02355: 'error, China, Guyan, 512M, tue', // gas
  t02550: 'error, Australia, Sydney, 512M, 3h', // stream reset
  t02696: 'error, China, Xiamen, 512M, 3h, tue', // reset
  t02705: 'error, USA, Boardman, 512M', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacechih6xgp4n4bhar56ik4o2zbrnfnsa4r3q65canjm5veptbrwszu n 120, TS: bafy2bzaceazydjp7qswjo3ld6ac2kwgyapsxm3liqwlue6sycyagfm5p7scsw n120)
  t02949: 'error, USA, Boardman, 512M', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzaceddf6i32byuotqfexsyyiirtz3nifflcvurrexnyktkacmyyktloq n 120, TS: bafy2bzaceazydjp7qswjo3ld6ac2kwgyapsxm3liqwlue6sycyagfm5p7scsw n120)
  t03148: 'error, China, Changzhou, chain only, 32G', // stream reset
  t03213: 'error, USA, Boardman, 512M, <11h', // reset
  t03220: 'error, China, Shenzhen, 32G, mon', // reset
  t03455: 'error, China, Deyang + Singapore, 512M, 2h', // deadline
  t03474: 'error, China, Foshan, 512M, 1h', // no space
  t03833: 'error, China, Chengdu, 32G', // addpiece
  t04063: 'error, China, Shenzhen, 32G', // stream reset
  t04181: 'error, China, Chengdu, 32G', // EOF

  // Dial backoff

  t01058: 'backoff, China, Zhongshan, 512M, 1h, 1h, 1h',
  t01270: 'backoff, China, Weifang, 512M, 2h, sat-cfa',
  t01293: 'backoff, China, Hong Kong, Shenzhen + Jieyang, 512M, 1h',
  t01627: 'backoff, China, Beijing, 32G',
  t01644: 'backoff, USA, Columbus, 32G',
  t01657: 'backoff, China, Ordos, 512M, mon-xfr',
  t01664: 'backoff, Korea, Seoul, 32G, 20h, tue-xfr',
  t01680: 'backoff, China, Taiyuan, 32G, mon',
  t01701: 'backoff, Malaysia, Johor Bahru, 512M, 7h, 2h, 3h, 3h',
  t01731: 'backoff, China, Dongguan, 32G, 13h, sun-cfa',
  t01827: 'backoff, Korea, Guro-gu, 512M, mon',
  t02665: 'backoff, China, Foshan, 512M, 4h, 8h',
  t02751: 'backoff, China, Ordos, 32G, <20h',
  t02787: 'backoff, China, Hangzhou, 512M, mon-cfa',
  t04080: 'backoff, China, Hangzhou, 32G',


  // Dial errors

  t01115: 'dial, China, Shijiazhuang, 512M, 2h, 2h, 4h, 3h',
  t01121: 'dial, China, Wuhan, 32G, 8h',
  t01124: 'dial, China, Jiaxing, 32G, fri',
  t01128: 'dial, China, Jiangsu, 32G',
  t01138: 'dial, China, Shijiazhuang, 512M, <8h, 1h, 23h, 11h, 1h',
  t01202: 'dial, China, Hong Kong, 32G, mon',
  t01217: 'dial, China, Guilin, 512M, 2h',
  t01253: 'dial, Vietman, Hanoi, chain only, 32G, tue-xfr',
  t01279: 'dial, USA, Grand Rapids, 32G, @stuberman, sat',
  t01280: 'dial, China, Ningbo, chain only, 32G',
  t01323: 'dial, China, Hangzhou, chain only, 32G',
  t01329: 'dial, Canada, Brampton, 32G, 22h, 1d',
  t01331: 'dial, China, Shenzhen, chain only, 512M',
  t01336: 'dial, China, Zhengzhou, chain only, 32G',
  t01366: 'dial, China, Shijiazhuang, 32G, 11h, 1d, tue-xfr',
  t01414: 'dial, Denmark, Kobenhavn S, 32G, sun',
  t01426: 'dial, China, Shaanxi, chain only, 512M',
  t01492: 'dial, Sweden, Stockholm, 32G, mon',
  t01528: 'dial, China, Deyang, chain only, 512M, sat',
  t01548: 'dial, China, Shenzhen, 32G, 15h, 12h, mon',
  t01596: 'dial, Australia, Brisbane, chain only, 512M',
  t01606: 'dial, Singapore, chain only, 512M',
  t01660: 'dial, China, Beijing, 32G, 24h',
  t01677: 'dial, USA, 32G, sat',
  t01679: 'dial, China, Shenzhen, chain only, 32G, tue-xfr',
  t01684: 'dial, China, Changsha, 32G, sun',
  t01698: 'dial, China, Shenzhen, 32G, sat',
  t01723: 'dial, China, Fuzhou, 32G, sat',
  t01738: 'dial, China, Guilin, 32G, 15h, sun-cfa',
  t01762: 'dial, Norway, Oslo, chain only, 512M',
  t01765: 'dial, USA, chain only, 32G',
  t01783: 'dial, Singapore, chain only, 32G',
  t01805: 'dial, China, Shenzhen, chain only, 512M',
  t01817: 'dial, Japan, Setagaya-ku, 32G, sat',
  t01844: 'dial, China, Xiamen, chain only, 512M, tue',
  t01851: 'dial, China, Wuhan, 32G, sat',
  t01880: 'dial, China, Fuzhou, chain only, 32G',
  t01886: 'dial, Netherlands, Purmerend, 32G, sat', // gas
  t01937: 'dial, Japan, Tokushima, 512M, 3h, 2h, 12h',
  t01950: 'dial, China, Zhengzhou, 512M',
  t01973: 'dial, Germany, Roesrath, 512M',
  t01979: 'dial, UK, Hartlepool, 32G, sat',
  t01993: 'dial, Ireland, Dublin, 32G, sat',
  t01995: 'dial, USA, Redmond, 32G, 11h',
  t02012: 'dial, USA, Boardman, 32G, @jimpick, mon',
  t02040: 'dial, Canada, Embrun, 32G',
  t02053: 'dial, China, Xinxiang, 32G, mon',
  t02109: 'dial, China, Hunan, 32G, 20h',
  t02128: 'dial, China, Shenzhen, 32G, sat',
  t02150: 'dial, China, Wuxi, 32G, sun',
  t02153: 'dial, China, Jinan, 32G, sun',
  t02195: 'dial, USA, Ashburn, 32G, sun',
  t02226: 'dial, Germany, Frankfurt, 512M, sun',
  t02264: 'dial, China, Beijing, 32G, sun',
  t02280: 'dial, New Zealand, Auckland, 32G',
  t02426: 'dial, USA, Bay Shore, 32G',
  t02464: 'dial, China, Shanghai, 32G, <24h',
  t02466: 'dial, China, Jiangmen, 512M',
  t02479: 'dial, Denmark, Kobenhavn S, 32G, <24h',
  t02540: 'dial, China, Qiquihar, chain only, 32G',
  t02590: 'dial, China, Beijing, 32G, mon',
  t02615: 'dial, China, Zhengzhou, 32G, mon',
  t02624: 'dial, China, Wuxi, 512M, tue-xfr',
  t02709: 'dial, China, Chengdu, 512M, 5h',
  t02712: 'dial, China, Hangzhou, chain only, 32G',
  t02714: 'dial, China, Xiamen, 32G, mon',
  t02820: 'dial, China, Changsha, 32G, mon',
  t02876: 'dial, China, Hong Kong, chain only, 32G',
  t02989: 'dial, China, Shanghai, 32G, mon',
  t03079: 'dial, China, Wuhan, 32G, mon',
  t03089: 'dial, China, Hangzhou, 32G, mon',
  t03107: 'dial, China, Zhejiang, 32G, mon',
  t03123: 'dial, China, Chongqing, 32G',
  t03211: 'dial, China, Hong Kong, chain only, 32G',
  t03216: 'dial, China, Hangzhou, chain only, 512M',
  t03232: 'dial, China, Ordos, chain only, 32G',
  t03357: 'dial, China, Hangzhou, chain only, 512M',
  t03422: 'dial, China, Changsha, 32G, mon',
  t03427: 'dial, China, Beijing, 32G',
  t03598: 'dial, China, Zhongshan, chain only, 32G',
  t03601: 'dial, China, Hong Kong, 32G',
  t03655: 'dial, China, Weifang, chain only, 512M, 2h',
  t03753: 'dial, China, Shenzhen, 32G',
  t03773: 'dial, China, Changsha, 32G',
  t03860: 'dial, Canada, Brampton, chain only, 32G',
  t03921: 'dial, China, Fuzhou, 32G',
  t03932: 'dial, Korea, Hwaseong-si, 512M',



  // XNR

  t01119: 'xnr, Korea, Seongnam-si, 32G, sun',
  t01184: "xnr, China, Xi'an, 32G, <11h, 13h, 13h, mon",
  t01233: "xnr, USA, Coeur d'Alene, 512M, @why, 2h, 2h, 5h, tue",
  t01278: 'xnr, Australia, 32G, 9h',
  t01305: 'xnr, China, Guangzhou, 32G, sun-xfr',
  t01340: 'xnr, China, Guangzhou, 32G, fri',
  t01365: 'xnr, Korea, Seoul, 32G, fri',
  t01378: 'xnr, China, Ordos, 512M, <9h, 9h',
  t01383: 'xnr, China, Wuxi, 32G, sun',
  t01403: 'xnr, China, Shenzhen, 32G, fri',
  t01405: 'xnr, China, Wuxi, 32G, 16h, sun',
  t01409: 'xnr, China, Chengdu, 32G, sun',
  t01419: 'xnr, China, Tongling, 32G, fri',
  t01444: 'xnr, China, Zhongshan, 512M, <9h, 2h, 6h',
  t01478: 'xnr, China, Guangzhou, 512M',
  t01484: 'xnr, China, Beijing, 512M, <8h, sun',
  t01487: 'xnr, China, Zhejiang, 512M, fri',
  t01500: 'xnr, China, Chengdu, 512M, <8h, 2h, 3h, mon-xfr',
  t01547: 'xnr, China, Hangzhou, 32G, mon',
  t01553: 'xnr, China, Chongqing, 32G, mon',
  t01559: 'xnr, China, Guangzhou, 32G, fri',
  t01571: 'xnr, China, Beijing, 32G, sun',
  t01599: 'xnr, China, Shanghai, 32G, sat',
  t01615: 'xnr, Canada, Surrey, 32G, sat',
  t01619: 'xnr, China, Guyuan, 512M',
  t01649: 'xnr, China, Hangzhou, 512M', 
  t01652: 'xnr, China, Shanghai, 32G, mon',
  t01673: 'xnr, China, Guangdong, 32G, 13h, mon-cfa',
  t01703: 'xnr, Netherlands, Amersfoort, 32G, sat',
  t01725: 'xnr, China, Shenzhen, 32G, sat',
  t01745: 'xnr, China, Wuhan, 512M, sat',
  t01750: 'xnr, China, Dongguan, 512M',
  t01760: 'xnr, China, Ili, 32G, mon',
  t01787: 'xnr, China, Changzhou, 32G',
  t01812: 'xnr, China, Changsha, 512M, sat',
  t01819: 'xnr, China, Shenzhen, 32G, 17h, sun',
  t01847: 'xnr, China, Shenzhen, 512M, mon',
  t01858: 'xnr, China, Beijing, 32G, 2d, mon',
  t01913: 'xnr, China, Zhejiang, 32G, 10h, sun-cfa',
  t01998: 'xnr, Finland, Helsinki, 512M, 2h, 5h, 4h',
  t02035: 'xnr, China, Hong Kong, 512M',
  t02056: 'xnr, China, Donguan, 32G, sat',
  t02071: 'xnr, China, Wuhan, 512M, sun-cfa',
  t02105: 'xnr, China, Wanju, 32G',
  t02124: 'xnr, China, Shijiazhuang, 32G, 12h, mon',
  t02133: 'xnr, China, Beijing, 32G, sat',
  t02168: 'xnr, China, Zhengzhou, 32G, sun',
  t02243: 'xnr, China, Chengdu, 32G, sun',
  t02251: 'xnr, China, Liaoning, 32G, 12h, mon',
  t02265: 'xnr, Korea, Geomcheon-gu, 512M, 2h',
  t02269: 'xnr, China, Zhangjiakou, 32G, sun',
  t02293: 'xnr, China, Changsha, 512M, sun',
  t02407: 'xnr, China, Fuzhou, 32G',
  t02441: 'xnr, China, Changsha, 512M',
  t02680: 'xnr, USA, 512M, 4h',
  t02691: 'xnr, USA, Irvine, 32G, 9h, tue-xfr',
  t02699: 'xnr, China, Beijing, 512M, mon',
  t02732: 'xnr, China, Foshan, 32G',
  t02916: 'xnr, China, Chengdu, 32G, mon',
  t02946: 'xnr, China, Yibin, 32G, mon',
  t03029: 'xnr, China, Guangzhou, 32G',
  t03034: 'xnr, China, Wuhan, 32G, mon',
  t03038: 'xnr, Ukraine, Kyiv, 32G, mon',
  t03049: 'xnr, China, Zhangjiakou, 32G, <24h',
  t03051: 'xnr, Korea, Seongnam-si, 32G, mon',
  t03053: 'xnr, China, Changsha, 512M, mon-cfa', // stream reset
  t03104: 'xnr, USA, Central Islip, 32G, mon-cfa',
  t03157: 'xnr, China, Beijing, 512M, mon',
  t03170: 'xnr, China, Dongguan, 32G, mon',
  t03399: 'xnr, China, Wuhan, 32G', // stream reset
  t03790: 'xnr, Korea, Dongjak-gu, 32G',
  t03796: 'xnr, China, Beijing, 32G',
  t04342: 'xnr, China, Yibin, 32G',


  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
