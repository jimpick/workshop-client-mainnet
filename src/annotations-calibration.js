const annotations = {

  // Active - mon
  
  t01945: 'active, China, Shanghai, 512M, 2h, 2h, 2h, 2h, 2h', 
  t069967: 'active, USA, Somerset, 512M, <4h, 2h, 2h',

  // Active/sealing - mon
 
  t01699: 'active, Poland, Krakow, 512M, @magik6k, 2h, 2h, 2h, mon',
  t01708: 'active, China, Shenzhen, 512M, 2h, 2h, 2h, mon',
  t01827: 'active, China, Shenyang, 512M, 2h, 2h, 2h, <4h, 2h, mon',
  t01902: 'active, China, Shanghai, 512M, 2h, 2h, 2h, 2h, mon',
  t01988: 'active, China, Shaanxi, 512M, <4h, 2h, mon',
  t02098: 'active, China, Guyuan, 512M, 2h, 2h, 3h, <4h, 3h, mon',
  t02156: 'active, China, Xiamen, 512M, 2h, mon',
  t02182: 'active, China, Zhongshan, 512M, 2h, 2h, <4h, mon',
  t02302: 'active, China, Xiamen, 512M, 2h, 2h, <4h, 2h, mon',
  t02332: 'active, USA, 512M, 2h, mon',
  t02750: 'active, Finland, Helsinki, 512M, 3h, <4h, mon',
  t02981: 'active, China, Weifang, 512M, 3h, <4h, mon',
  t03052: 'active, China, Guiyang, 512M, 2h, <4h, 2h, mon',
  t096605: 'active, China, Shenzhen, 512M, 2h, mon',
  t0151229: 'active, China, Shandong, 512M, <19h, mon',

  // Active - sun

  t02014: 'active-stuck, Canada, Vancouver, 512M, @jimpick, 2h, 2h, 4h, 3h, mon-xfr',
  t02197: 'active-stuck, China, Taizhou, 512M, 3h, 2h, 2h, mon-xfr',


  // Sealing - mon

  t096604: 'sealing, Australia, Sydney, 512M, mon',
  t0202358: 'sealing, USA, 512M, mon',
  t0287836: 'sealing, China, Zhengzhou, 512M, mon',
  t0287849: 'sealing, China, Wuxi, 512M, mon',
  t0292573: 'sealing, China, Shenzhen, 512M, mon',
  t0293746: 'sealing, Singapore, 512M, mon',
  t0293748: 'sealing, China, Chongqing, 512M, mon',
  t0293773: 'sealing, China, Guangzhou, 512M, mon',

  // Stuck - mon

  // Sealing - sun
 
  t01307: 'stuck, China, Fujian, 32G, sun-sealing',
  t096370: 'stuck, China, Chengdu, 512M, mon-funds',

  // Stuck - sun
 
  t0202249: 'stuck, China, Guangdong, 512M, mon-xfr',

  // Sealing - sat


  // Stuck - sat

  t02555: 'stuck, China, Guiyang, 512M, mon-cfa',

  // New


  // Asks

  // Error

  t02046: 'error, China, Yibin, 512M, sun', // reset
  t02810: 'error, China, Shenzhen, 512M, 3h, 2h', // reset
  t0293794: 'error, China, Xiamen, 512M', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed

  // Dial backoff

  t01327: 'backoff, China, Guangdong, 512M, 2h, 2h',
  t01819: 'backoff, China, Shijiazhuang, 512M, 2h, 2h, 2h, <4h, 2h',
  t01909: 'backoff, China, Shenzhen, 512M, 3h, <4h, 3h',
  t01920: 'backoff, China, Hong Kong + Jieyang + Shenzhen, 512M, 2h, 2h',
  t02004: 'backoff, China, Zhejiang + USA, 512M, 3h, 2h',
  t02206: 'backoff, USA, Boardman, 512M, 2h',
  t02263: 'backoff, USA, Boardman, 512M, 3h, fri-sealing',
  t02264: 'backoff, USA, Boardman, 512M, 2h',
  t02315: 'backoff, USA, Boardman, 512M, 2h, 2h, sat',
  t02556: 'backoff, China, Xiamen, 512M, 2h',
  t02675: 'backoff, USA, Boardman, 512M, 2h, sat-funds',
  t04985: 'backoff, UK, Lower Slaughter, 512M, 2h',
  t05025: 'backoff, China, Fujian, 512M, 2h, <4h, 2h',
  t096379: 'backoff, China, Ordos, 512M, <4h',
  t096589: 'backoff, China, Changsha, 512M, sun-sealing',

  // 32G - Active - thu

  t02000: 'active32, China, Guangdong, 32G, 14h',
  t02007: 'active32, China, Shenzhen, 32G, 14h',

  // 32G - Active - wed
  
  t01017: 'active32, China, Shandong, 32G, 7h',
  t01337: 'active32, China, Shandong, 32G, 10h',

  // 32G - Sealing - wed
 
  t01308: 'sealing32, Sweden, Alvsjo, 32G, wed',
  t01310: 'sealing32, China, Ningbo, 32G, wed',
  t02002: 'sealing32, China, Changzhou, 32G, wed',

  // No-online deals / rejected

  t01299: 'rejected, China, Shanghai, 32G',
  t01300: 'rejected, Canada, Brampton, 32G',
  t01306: 'rejected, USA, Grand Rapids, 32G',
  t01339: 'rejected, Canada, Brampton, 32G',
  t01632: 'rejected, China, Beijing, 512M, 2h',
  t02306: 'rejected, China, Shijiazhuang, 512M, 2h, 2h, <4h',
  t02553: 'rejected, China, Shenzhen, 512M',
  t02845: 'rejected, China, Ningbo, 512M',
  t02953: 'rejected, China, Shanghai, 512M',
  t05036: 'rejected, China, Hong Kong + Shenzhen + Jieyang, 512M, 3h',
  t096492: 'rejected, China, Foshan, 512M, <4h, 2h', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: sh: 1: jq: not found
  t0123645: 'rejected, China, Shanghai, 512M',
  t0241898: 'rejected, China, Yibin, 512M', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: jq: error: syntax error, unexpected '|' (Unix shell quoting issues?) at <top-level>, line 1: .Proposal.Client == "t12thv7e3x3tomo5nuunsvzqnl5txflpztdqcbtai" || .Proposal.Client == "t1capnpwjvm4gfbdlbavblmvjldwqzdo6ukh7mmq" || .Proposal.Client == "t12heuwfbg654jgdnctywyafxrqbmcidwj6osecha" jq: 1 compile error

  // Dial errors

  t01072: 'dial, China, Fujian + Netherlands, 32G',
  t01743: 'dial, China, Hong Kong, 512M, 3h, sat-xfr',
  t01766: 'dial, China, Shenzhen, 512M',
  t01824: 'dial, China, Guilin, 512M, 2h, 2h, 2h, 2h',
  t01948: 'dial, Malaysia, Johor Bahru, 512M',
  t01978: 'dial, China, Hangzhou, 512M',
  t02125: 'dial, USA, Concord, 512M, 4h',
  t02196: 'dial, China, Shanghai, 512M',
  t02231: 'dial, UK, Lower Slaughter, 512M',
  t02533: 'dial, France, Aubervilliers, 512M, 2h, fri-sealing',
  t02554: 'dial, China, Chongqing, 512M, 1h',
  t02673: 'dial, China, Shandong, 512M',
  t02674: 'dial, USA, Boardman, 512M, 2h, sat',
  t02707: 'dial, Germany, Bad Honnef, 512M',
  t02984: 'dial, China, Ordos, 512M, fri-sealing',
  t03043: 'dial, China, Hangzhou, 512M',
  t04967: 'dial, China, Dongguan, 512M',
  t096361: 'dial, China, Beijing, 512M',
  t0123652: 'dial, UK, Lower Slaughter, 512M',
  t0202266: 'dial, USA, Waxhaw, 512M',
  t0246817: 'dial, China, Jiangmen, 512M',
  t0287876: 'dial, Singapore, 512M',
  t0293741: 'dial, China, Zhejiang, 512M',

  // XNR

  t01581: 'xnr, Australia, Sydney, 512M, wed-sealing',
  t01591: 'xnr, China, Beijing, 512M, 1h, 1h, 1h, sat',
  t01593: 'xnr, USA, Athol, 512M, @why, 2h, 2h, 2h, sat',
  t01735: 'xnr, China, Shanghai, 512M, fri-funds',
  t01897: 'xnr, China, Foshan, 512M',
  t01994: 'xnr, China, Foshan, 512M',
  t02236: 'xnr, China, Dongguan, 512M',
  t02249: 'xnr, China, Guangdong, 512M, 2h, <4h, 2h',
  t02301: 'xnr, China, Liaoning, 512M, fri-sealing',
  t02641: 'xnr, China, Shenzhen, 512M, thu',
  t02896: 'xnr, China, Shenzhen, 512M, 2h, <4h, 2h',
  t02933: 'xnr, Germany, 512M',
  t02965: 'xnr, Korea, Guro-gu, 512M, 2h, 2h',
  t03014: 'xnr, China, Guangzhou, 512M, fri-sealing',
  t03045: 'xnr, China, Shenzhen, 512M, 2h',
  t0123649: 'xnr, China, Sichuan, 512M, sat',
  t0123650: 'xnr, China, Jieyang, 512M, sun-sealing',
  t0202344: 'xnr, Netherlands, 512M, sun-sealing',
  t0211954: 'xnr, USA, Arlington, 512M, sun',
  t0253095: 'xnr, China, Liaoning, 512M',
  t0293803: 'xnr, China, Jieyang, 512M',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
