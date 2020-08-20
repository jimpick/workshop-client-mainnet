const annotations = {

  // Active - wed
  
  t01327: 'active, China, Guangdong, 512M, 2h',
  t01591: 'active, China, Beijing, 512M, 1h',
  t01593: 'active, USA, Athol, 512M, @why, 2h',
  t01699: 'active, Poland, Krakow, 512M, @magik6k, 2h',
  t01708: 'active, China, Shenzhen, 512M, 2h',
  t01819: 'active, China, Shijiazhuang, 512M, 2h',
  t01824: 'active, China, Guilin, 512M, 2h',
  t01827: 'active, China, Shenyang, 512M, 2h',
  t01902: 'active, China, Shanghai, 512M, 2h',
  t01920: 'active, China, Hong Kong + Jieyang + Shenzhen, 512M, 2h',
  t01945: 'active, China, Shanghai, 512M, 2h',
  t02014: 'active, Canada, Vancouver, 512M, @jimpick, 2h',
  t02098: 'active, China, Guyuan, 512M, 2h',
  t02125: 'active, USA, Concord, 512M, 4h',

  t01017: 'active32, China, Shandong, 32G, 7h',
  t01337: 'active32, China, Shandong, 32G, 10h',

  // Sealing - wed
 
  t01581: 'sealing, Australia, Sydney, 512M, wed',

  t01307: 'sealing32, China, Fujian, 32G, wed',
  t01308: 'sealing32, Sweden, Alvsjo, 32G, wed',
  t01310: 'sealing32, China, Ningbo, 32G, wed',
  t02000: 'sealing32, China, Guangdong, 32G, wed',
  t02002: 'sealing32, China, Changzhou, 32G, wed',
  t02007: 'sealing32, China, Shenzhen, 32G, wed',

  // Stuck - wed
 

  // New

  t02182: 'new, China, Zhongshan, 512M',
  t02197: 'new, China, Taizhou, 512M',
  t02206: 'new, USA, Boardman, 512M',
  t02231: 'new, UK, Lower Slaughter, 512M',
  t02249: 'new, China, Guangdong, 512M',
  t02263: 'new, USA, Boardman, 512M',
  t02264: 'new, USA, Boardman, 512M',
  t02315: 'new, USA, Boardman, 512M',
  t02301: 'new, China, Liaoning, 512M',
  t02302: 'new, China, Xiamen, 512M',
  t02306: 'new, China, Shijiazhuang, 512M',
  t02533: 'new, France, Aubervilliers, 512M',
  t02553: 'new, China, Shenzhen, 512M',
  t02555: 'new, China, Guiyang, 512M',
  t02556: 'new, China, Xiamen, 512M',
  t02641: 'new, China, Shenzhen, 512M',
  t02673: 'new, China, Shandong, 512M',


  // Asks

  // No-online deals

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

  // XNR

  t01994: 'xnr, China, Foshan, 512M',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
