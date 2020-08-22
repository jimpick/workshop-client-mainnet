const annotations = {

  // Active - fri
 
  t01591: 'active, China, Beijing, 512M, 1h, 1h, 1h',
  t01593: 'active, USA, Athol, 512M, @why, 2h, 2h, 2h',
  t01632: 'active, China, Beijing, 512M, 2h',
  t01708: 'active, China, Shenzhen, 512M, 2h, 2h, 2h',
  t01743: 'active, China, Hong Kong, 512M, 3h',
  t01819: 'active, China, Shijiazhuang, 512M, 2h, 2h, 2h',
  t01824: 'active, China, Guilin, 512M, 2h, 2h, 2h',
  t01827: 'active, China, Shenyang, 512M, 2h, 2h, 2h',
  t01902: 'active, China, Shanghai, 512M, 2h, 2h, 2h',
  t01909: 'active, China, Shenzhen, 512M, 3h',
  t01945: 'active, China, Shanghai, 512M, 2h, 2h, 2h',
  t02014: 'active, Canada, Vancouver, 512M, @jimpick, 2h, 2h, 4h',
  t02098: 'active, China, Guyuan, 512M, 2h, 2h, 3h',
  t02182: 'active, China, Zhongshan, 512M, 2h, 2h',
  t02197: 'active, China, Taizhou, 512M, 3h, 2h',
  t02302: 'active, China, Xiamen, 512M, 2h, 2h',
  t02306: 'active, China, Shijiazhuang, 512M, 2h, 2h',
  t02315: 'active, USA, Boardman, 512M, 2h, 2h',
  t02554: 'active, China, Chongqing, 512M, 1h',
  t02674: 'active, USA, Boardman, 512M, 2h',
  t02675: 'active, USA, Boardman, 512M, 2h',
  t02750: 'active, Finland, Helsinki, 512M, 3h',
  t02896: 'active, China, Shenzhen, 512M, 2h',
  t02965: 'active, Korea, Guro-gu, 512M, 2h',
  t02981: 'active, China, Weifang, 512M, 3h',
  t03052: 'active, China, Guiyang, 512M, 2h',
  t04985: 'active, UK, Lower Slaughter, 512M, 2h',
  t05025: 'active, China, Fujian, 512M, 2h',
  t05036: 'active, China, Hong Kong + Shenzhen + Jieyang, 512M, 3h',

  // Active/sealing - fri

  t01699: 'active-stuck, Poland, Krakow, 512M, @magik6k, 2h, 2h, fri-sealing',
  t02263: 'active-stuck, USA, Boardman, 512M, 3h, fri-sealing',
 
  // Active - thu

  t02249: 'active-stuck, China, Guangdong, 512M, 2h, fri-xfr',
  t02533: 'active-stuck, France, Aubervilliers, 512M, 2h, fri-cfa',

  t02000: 'active32, China, Guangdong, 32G, 14h',
  t02007: 'active32, China, Shenzhen, 32G, 14h',

  // Active - wed
  
  t01920: 'stuck, China, Hong Kong + Jieyang + Shenzhen, 512M, 2h, fri-xfr',

  t01017: 'active32, China, Shandong, 32G, 7h',
  t01337: 'active32, China, Shandong, 32G, 10h',

  // Sealing - fri

  t02004: 'stuck, China, Zhejiang + USA, 512M, fri-sealing',
  t02301: 'stuck, China, Liaoning, 512M, fri-sealing',
  t02984: 'stuck, China, Ordos, 512M, fri-sealing',
  t03014: 'stuck, China, Guangzhou, 512M, fri-sealing',

  // Stuck - fri

  t01735: 'stuck, China, Shanghai, 512M, fri-funds',
  t02046: 'stuck, China, Yibin, 512M, fri-xfr',
  t02810: 'stuck, China, Shenzhen, 512M, fri-xfr',

  // Sealing - thu
 
  t02555: 'stuck, China, Guiyang, 512M, fri-xfr',
  t02556: 'stuck, China, Xiamen, 512M, fri-xfr',

  // Sealing - wed
 
  t01307: 'sealing32, China, Fujian, 32G, wed',
  t01308: 'sealing32, Sweden, Alvsjo, 32G, wed',
  t01310: 'sealing32, China, Ningbo, 32G, wed',
  t02002: 'sealing32, China, Changzhou, 32G, wed',

  // Stuck - wed
 

  // New

  // Asks

  // No-online deals / rejected

  t02553: 'rejected, China, Shenzhen, 512M',
  t02845: 'rejected, China, Ningbo, 512M',
  t02953: 'rejected, China, Shanghai, 512M',

  // Error

  t01299: 'error, China, Shanghai, 32G', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: false
  t01300: 'error, Canada, Brampton, 32G', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: jq: error: syntax error, unexpected '|' (Unix shell quoting issues?) at <top-level>, line 1: .Proposal.Client == "t12thv7e3x3tomo5nuunsvzqnl5txflpztdqcbtai" || .Proposal.Client == "t1capnpwjvm4gfbdlbavblmvjldwqzdo6ukh7mmqq" || .Proposal.Client == "t12heuwfbg654jgdnctywyafxrqbmcidwj6osecha" jq: 1 compile error
  t01306: 'error, USA, Grand Rapids, 32G', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: false
  t01339: 'error, Canada, Brampton, 32G', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: jq: error: syntax error, unexpected '|' (Unix shell quoting issues?) at <top-level>, line 1: .Proposal.Client == "t12thv7e3x3tomo5nuunsvzqnl5txflpztdqcbtai" || .Proposal.Client == "t1capnpwjvm4gfbdlbavblmvjldwqzdo6ukh7mmqq" || .Proposal.Client == "t12heuwfbg654jgdnctywyafxrqbmcidwj6osecha" jq: 1 compile error

  // Escrow errors


  // Dial backoff

  t01327: 'backoff, China, Guangdong, 512M, 2h, 2h',
  t02206: 'backoff, USA, Boardman, 512M, 2h',
  t02264: 'backoff, USA, Boardman, 512M, 2h',


  // Dial errors

  t01072: 'dial, China, Fujian + Netherlands, 32G',
  t01766: 'dial, China, Shenzhen, 512M',
  t01948: 'dial, Malaysia, Johor Bahru, 512M',
  t01978: 'dial, China, Hangzhou, 512M',
  t02125: 'dial, USA, Concord, 512M, 4h',
  t02196: 'dial, China, Shanghai, 512M',
  t02231: 'dial, UK, Lower Slaughter, 512M',
  t02673: 'dial, China, Shandong, 512M',
  t02707: 'dial, Germany, Bad Honnef, 512M',
  t03043: 'dial, China, Hangzhou, 512M',

  // XNR

  t01581: 'xnr, Australia, Sydney, 512M, wed-sealing',
  t01897: 'xnr, China, Foshan, 512M',
  t01994: 'xnr, China, Foshan, 512M',
  t02236: 'xnr, China, Dongguan, 512M',
  t02641: 'xnr, China, Shenzhen, 512M, thu',
  t02933: 'xnr, Germany, 512M',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
