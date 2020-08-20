const annotations = {

  // Active - wed
  
  // Sealing - wed
 
  t01017: 'sealing, China, Shandong, 32G, wed',
  t01307: 'sealing, China, Fujian, 32G, wed',
  t01308: 'sealing, Sweden, Alvsjo, 32G, wed',
  t01310: 'sealing, China, Ningbo, 32G, wed',
  t01327: 'sealing, China, Guangdong, 512M, wed',
  t01337: 'sealing, China, Shandong, 32G, wed',
  t01581: 'sealing, Australia, Sydney, 512M, wed',
  t01591: 'sealing, China, Beijing, 512M, wed',
  t01593: 'sealing, USA, Athol, 512M, @why, wed',
  t01699: 'sealing, Poland, Krakow, 512M, @magik6k, wed',
  t01708: 'sealing, China, Shenzhen, 512M, wed',
  t01819: 'sealing, China, Shijiazhuang, 512M, wed',
  t01824: 'sealing, China, Guilin, 512M, wed',
  t01827: 'sealing, China, Shenyang, 512M, wed',
  t01902: 'sealing, China, Shanghai, 512M, wed',
  t01920: 'sealing, China, Hong Kong + Jieyang + Shenzhen, 512M, wed',
  t01945: 'sealing, China, Shanghai, 512M, wed',
  t02000: 'sealing, China, Guangdong, 32G, wed',
  t02002: 'sealing, China, Changzhou, 32G, wed',
  t02007: 'sealing, China, Shenzhen, 32G, wed',
  t02014: 'sealing, Canada, Vancouver, 512M, @jimpick, wed',

  // Stuck - wed
 

  // New



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
