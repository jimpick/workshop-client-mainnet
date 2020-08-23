const annotations = {

  // Active - sun

  // Active/sealing - sun

  // Active - sat

  t01819: 'active, China, Shijiazhuang, 512M, 2h, 2h, 2h, <4h',
  t01827: 'active, China, Shenyang, 512M, 2h, 2h, 2h, <4h',
  t01909: 'active, China, Shenzhen, 512M, 3h, <4h',
  t01988: 'active, China, Shaanxi, 512M, <4h',
  t02004: 'active, China, Zhejiang + USA, 512M, 3h',
  t02098: 'active, China, Guyuan, 512M, 2h, 2h, 3h, <4h',
  t02182: 'active, China, Zhongshan, 512M, 2h, 2h, <4h',
  t02249: 'active, China, Guangdong, 512M, 2h, <4h',
  t02302: 'active, China, Xiamen, 512M, 2h, 2h, <4h',
  t02306: 'active, China, Shijiazhuang, 512M, 2h, 2h, <4h',
  t02750: 'active, Finland, Helsinki, 512M, 3h, <4h',
  t02810: 'active, China, Shenzhen, 512M, 3h',
  t02896: 'active, China, Shenzhen, 512M, 2h, <4h',
  t02981: 'active, China, Weifang, 512M, 3h, <4h',
  t03052: 'active, China, Guiyang, 512M, 2h, <4h',
  t05025: 'active, China, Fujian, 512M, 2h, <4h',
  t069967: 'active, USA, Somerset, 512M, <4h',
  t096379: 'active, China, Ordos, 512M, <4h',
  t096492: 'active, China, Foshan, 512M, <4h',

  // Active/sealing - sat
  
  t01591: 'active, China, Beijing, 512M, 1h, 1h, 1h, sat',
  t01593: 'active, USA, Athol, 512M, @why, 2h, 2h, 2h, sat',
  t01699: 'active, Poland, Krakow, 512M, @magik6k, 2h, 2h, sat',
  t01824: 'active, China, Guilin, 512M, 2h, 2h, 2h, sat',
  t01902: 'active, China, Shanghai, 512M, 2h, 2h, 2h, sat',
  t01945: 'active, China, Shanghai, 512M, 2h, 2h, 2h, sat',
  t02014: 'active, Canada, Vancouver, 512M, @jimpick, 2h, 2h, 4h, sat',
  t02197: 'active, China, Taizhou, 512M, 3h, 2h, sat',
  t02315: 'active, USA, Boardman, 512M, 2h, 2h, sat',
  t02674: 'active, USA, Boardman, 512M, 2h, sat',
  t02965: 'active, Korea, Guro-gu, 512M, 2h, sat',

  // Active/stuck
 
  t01708: 'active-stuck, China, Shenzhen, 512M, 2h, 2h, 2h, sat-xfr',
  t01743: 'active-stuck, China, Hong Kong, 512M, 3h, sat-xfr',
  t02675: 'active-stuck, USA, Boardman, 512M, 2h, sat-funds',
  t01920: 'active-stuck, China, Hong Kong + Jieyang + Shenzhen, 512M, 2h, sat-xfr',

  // Sealing - sun
 
  t02156: 'sealing, China, Xiamen, 512M, sun',
  t02332: 'sealing, USA, 512M, sun',
  t03045: 'sealing, China, Shenzhen, 512M, sun',
  t096370: 'sealing, China, Chengdu, 512M, sun',
  t0151229: 'sealing, China, Shandong, 512M, sun',
  t0202344: 'sealing, Netherlands, 512M, sun',
  t0202358: 'sealing, USA, 512M, sun',
  t0211954: 'sealing, USA, Arlington, 512M, sun',

  // Stuck - sun
 
  t0123650: 'stuck, China, Jieyang, 512M, sun-xfr',
  t0202249: 'stuck, China, Guangdong, 512M, sun-cfa',

  // Sealing - sat

  t096589: 'sealing, China, Changsha, 512M, sat',
  t0123649: 'sealing, China, Sichuan, 512M, sat',

  // Stuck - sat

  t02046: 'stuck, China, Yibin, 512M, sat-xfr',
  t02555: 'stuck, China, Guiyang, 512M, sat-xfr',
  t02556: 'stuck, China, Xiamen, 512M, sat-xfr',
  t096605: 'stuck, China, Shenzhen, 512M, sat-xfr',

  // New



  // Asks

  // No-online deals / rejected

  t01632: 'rejected, China, Beijing, 512M, 2h',
  t02553: 'rejected, China, Shenzhen, 512M',
  t02845: 'rejected, China, Ningbo, 512M',
  t02953: 'rejected, China, Shanghai, 512M',
  t05036: 'rejected, China, Hong Kong + Shenzhen + Jieyang, 512M, 3h',
  t0123645: 'rejected, China, Shanghai, 512M',

  // Error

  t01299: 'error, China, Shanghai, 32G', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: false
  t01300: 'error, Canada, Brampton, 32G', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: jq: error: syntax error, unexpected '|' (Unix shell quoting issues?) at <top-level>, line 1: .Proposal.Client == "t12thv7e3x3tomo5nuunsvzqnl5txflpztdqcbtai" || .Proposal.Client == "t1capnpwjvm4gfbdlbavblmvjldwqzdo6ukh7mmqq" || .Proposal.Client == "t12heuwfbg654jgdnctywyafxrqbmcidwj6osecha" jq: 1 compile error
  t01306: 'error, USA, Grand Rapids, 32G', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: false
  t01339: 'error, Canada, Brampton, 32G', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: jq: error: syntax error, unexpected '|' (Unix shell quoting issues?) at <top-level>, line 1: .Proposal.Client == "t12thv7e3x3tomo5nuunsvzqnl5txflpztdqcbtai" || .Proposal.Client == "t1capnpwjvm4gfbdlbavblmvjldwqzdo6ukh7mmqq" || .Proposal.Client == "t12heuwfbg654jgdnctywyafxrqbmcidwj6osecha" jq: 1 compile error
  t0241898: 'error, China, Yibin, 512M', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: jq: error: syntax error, unexpected '|' (Unix shell quoting issues?) at <top-level>, line 1: .Proposal.Client == "t12thv7e3x3tomo5nuunsvzqnl5txflpztdqcbtai" || .Proposal.Client == "t1capnpwjvm4gfbdlbavblmvjldwqzdo6ukh7mmq" || .Proposal.Client == "t12heuwfbg654jgdnctywyafxrqbmcidwj6osecha" jq: 1 compile error

  // Escrow errors


  // Dial backoff

  t01327: 'backoff, China, Guangdong, 512M, 2h, 2h',
  t02206: 'backoff, USA, Boardman, 512M, 2h',
  t02263: 'backoff, USA, Boardman, 512M, 3h, fri-sealing',
  t02264: 'backoff, USA, Boardman, 512M, 2h',
  t04985: 'backoff, UK, Lower Slaughter, 512M, 2h',

  // 32G - Active - thu

  t02000: 'active32, China, Guangdong, 32G, 14h',
  t02007: 'active32, China, Shenzhen, 32G, 14h',

  // 32G - Active - wed
  
  t01017: 'active32, China, Shandong, 32G, 7h',
  t01337: 'active32, China, Shandong, 32G, 10h',

  // 32G - Sealing - wed
 
  t01307: 'sealing32, China, Fujian, 32G, wed',
  t01308: 'sealing32, Sweden, Alvsjo, 32G, wed',
  t01310: 'sealing32, China, Ningbo, 32G, wed',
  t02002: 'sealing32, China, Changzhou, 32G, wed',

  // Dial errors

  t01072: 'dial, China, Fujian + Netherlands, 32G',
  t01766: 'dial, China, Shenzhen, 512M',
  t01948: 'dial, Malaysia, Johor Bahru, 512M',
  t01978: 'dial, China, Hangzhou, 512M',
  t02125: 'dial, USA, Concord, 512M, 4h',
  t02196: 'dial, China, Shanghai, 512M',
  t02231: 'dial, UK, Lower Slaughter, 512M',
  t02533: 'dial, France, Aubervilliers, 512M, 2h, fri-sealing',
  t02554: 'dial, China, Chongqing, 512M, 1h',
  t02673: 'dial, China, Shandong, 512M',
  t02707: 'dial, Germany, Bad Honnef, 512M',
  t02984: 'dial, China, Ordos, 512M, fri-sealing',
  t03043: 'dial, China, Hangzhou, 512M',
  t096361: 'dial, China, Beijing, 512M',
  t0123652: 'dial, UK, Lower Slaughter, 512M',

  // XNR

  t01581: 'xnr, Australia, Sydney, 512M, wed-sealing',
  t01735: 'xnr, China, Shanghai, 512M, fri-funds',
  t01897: 'xnr, China, Foshan, 512M',
  t01994: 'xnr, China, Foshan, 512M',
  t02236: 'xnr, China, Dongguan, 512M',
  t02301: 'xnr, China, Liaoning, 512M, fri-sealing',
  t02641: 'xnr, China, Shenzhen, 512M, thu',
  t02933: 'xnr, Germany, 512M',
  t03014: 'xnr, China, Guangzhou, 512M, fri-sealing',
  t0253095: 'xnr, China, Liaoning, 512M',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
