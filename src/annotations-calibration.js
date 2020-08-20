const annotations = {

  // Active - thu

  t01591: 'active, China, Beijing, 512M, 1h, 1h',
  t01699: 'active, Poland, Krakow, 512M, @magik6k, 2h, 2h',
  t01708: 'active, China, Shenzhen, 512M, 2h, 2h',
  t01824: 'active, China, Guilin, 512M, 2h, 2h',
  t01945: 'active, China, Shanghai, 512M, 2h, 2h',
  t02533: 'active, France, Aubervilliers, 512M, 2h',

  t02000: 'active32, China, Guangdong, 32G, 14h',
  t02007: 'active32, China, Shenzhen, 32G, 14h',

  // Active/sealing - thu

  t01327: 'active, China, Guangdong, 512M, 2h, thu',
  t01593: 'active, USA, Athol, 512M, @why, 2h, thu',
  t01819: 'active, China, Shijiazhuang, 512M, 2h, thu',
  t01827: 'active, China, Shenyang, 512M, 2h, thu',
  t01902: 'active, China, Shanghai, 512M, 2h, thu',
  t02014: 'active, Canada, Vancouver, 512M, @jimpick, 2h, thu',
  t02098: 'active, China, Guyuan, 512M, 2h, thu',
 
  // Active - wed
  
  t01920: 'stuck, China, Hong Kong + Jieyang + Shenzhen, 512M, 2h, thu-xfr',

  t01017: 'active32, China, Shandong, 32G, 7h',
  t01337: 'active32, China, Shandong, 32G, 10h',

  // Sealing - thu
 
  t02182: 'sealing, China, Zhongshan, 512M, thu',
  t02197: 'sealing, China, Taizhou, 512M, thu',
  t02206: 'sealing, USA, Boardman, 512M, thu',
  t02249: 'sealing, China, Guangdong, 512M, thu',
  t02263: 'sealing, USA, Boardman, 512M, thu',
  t02264: 'sealing, USA, Boardman, 512M, thu',
  t02315: 'sealing, USA, Boardman, 512M, thu',
  t02301: 'sealing, China, Liaoning, 512M, thu',
  t02302: 'sealing, China, Xiamen, 512M, thu',
  t02306: 'sealing, China, Shijiazhuang, 512M, thu',
  t02555: 'sealing, China, Guiyang, 512M, thu',
  t02556: 'sealing, China, Xiamen, 512M, thu',
  t02641: 'sealing, China, Shenzhen, 512M, thu',

  // Sealing - wed
 
  t01581: 'stuck, Australia, Sydney, 512M, wed-sealing',

  t01307: 'sealing32, China, Fujian, 32G, wed',
  t01308: 'sealing32, Sweden, Alvsjo, 32G, wed',
  t01310: 'sealing32, China, Ningbo, 32G, wed',
  t02002: 'sealing32, China, Changzhou, 32G, wed',

  // Stuck - wed
 

  // New


  // Asks

  // No-online deals / rejected

  t02553: 'rejected, China, Shenzhen, 512M',

  // Error

  t01299: 'error, China, Shanghai, 32G', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: false
  t01300: 'error, Canada, Brampton, 32G', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: jq: error: syntax error, unexpected '|' (Unix shell quoting issues?) at <top-level>, line 1: .Proposal.Client == "t12thv7e3x3tomo5nuunsvzqnl5txflpztdqcbtai" || .Proposal.Client == "t1capnpwjvm4gfbdlbavblmvjldwqzdo6ukh7mmqq" || .Proposal.Client == "t12heuwfbg654jgdnctywyafxrqbmcidwj6osecha" jq: 1 compile error
  t01306: 'error, USA, Grand Rapids, 32G', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: false
  t01339: 'error, Canada, Brampton, 32G', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: jq: error: syntax error, unexpected '|' (Unix shell quoting issues?) at <top-level>, line 1: .Proposal.Client == "t12thv7e3x3tomo5nuunsvzqnl5txflpztdqcbtai" || .Proposal.Client == "t1capnpwjvm4gfbdlbavblmvjldwqzdo6ukh7mmqq" || .Proposal.Client == "t12heuwfbg654jgdnctywyafxrqbmcidwj6osecha" jq: 1 compile error
  t01897: 'error, China, Foshan, 512M', // deal failed: (State=26) handing off deal to node: AddPiece failed: getting available sector: too many sectors sealing
  t01909: 'error, China, Shenzhen, 512M', // context

  // Escrow errors


  // Dial backoff



  // Dial errors

  t01072: 'dial, China, Fujian + Netherlands, 32G',
  t01766: 'dial, China, Shenzhen, 512M',
  t01948: 'dial, Malaysia, Johor Bahru, 512M',
  t02125: 'dial, USA, Concord, 512M, 4h',
  t02231: 'dial, UK, Lower Slaughter, 512M',
  t02673: 'dial, China, Shandong, 512M',


  // XNR

  t01994: 'xnr, China, Foshan, 512M',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
