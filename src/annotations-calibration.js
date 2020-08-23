const annotations = {

  // Active - sun

  // Active/sealing - sun

  t01909: 'active, China, Shenzhen, 512M, 3h, <4h, sun',
  t02098: 'active, China, Guyuan, 512M, 2h, 2h, 3h, <4h, sun',

  // Active - sat

  t01819: 'error, China, Shijiazhuang, 512M, 2h, 2h, 2h, <4h', // dnf
  t01827: 'error, China, Shenyang, 512M, 2h, 2h, 2h, <4h', // dnf
  t01988: 'error, China, Shaanxi, 512M, <4h', // dnf
  t02004: 'error, China, Zhejiang + USA, 512M, 3h', // dnf
  t02182: 'error, China, Zhongshan, 512M, 2h, 2h, <4h', // dnf
  t02249: 'error, China, Guangdong, 512M, 2h, <4h', // dnf
  t02302: 'error, China, Xiamen, 512M, 2h, 2h, <4h', // dnf
  t02750: 'error, Finland, Helsinki, 512M, 3h, <4h', // dnf
  t02810: 'error, China, Shenzhen, 512M, 3h', // dnf
  t02896: 'error, China, Shenzhen, 512M, 2h, <4h', // dnf
  t02981: 'error, China, Weifang, 512M, 3h, <4h', // dnf
  t03052: 'error, China, Guiyang, 512M, 2h, <4h', // dnf
  t05025: 'error, China, Fujian, 512M, 2h, <4h', // dnf
  t069967: 'error, USA, Somerset, 512M, <4h', // dnf
  t096492: 'error, China, Foshan, 512M, <4h', // dnf

  // Active/sealing - sat
  
  t01699: 'error, Poland, Krakow, 512M, @magik6k, 2h, 2h, sat', // dnf
  t01824: 'error, China, Guilin, 512M, 2h, 2h, 2h, sat', // dnf
  t01902: 'error, China, Shanghai, 512M, 2h, 2h, 2h, sat', // dnf
  t01945: 'error, China, Shanghai, 512M, 2h, 2h, 2h, sat', // dnf
  t02014: 'error, Canada, Vancouver, 512M, @jimpick, 2h, 2h, 4h, sat', // dnf
  t02197: 'error, China, Taizhou, 512M, 3h, 2h, sat', // dnf
  t02965: 'error, Korea, Guro-gu, 512M, 2h, sat', // dnf

  // Active/stuck
 
  t01708: 'active-stuck, China, Shenzhen, 512M, 2h, 2h, 2h, sun-xfr',
  t01920: 'error, China, Hong Kong + Jieyang + Shenzhen, 512M, 2h, sat-xfr', // dnf

  // Sealing - sun
 
  t02156: 'error, China, Xiamen, 512M, sun', // dnf
  t02332: 'error, USA, 512M, sun', // dnf
  t03045: 'error, China, Shenzhen, 512M, sun', // dnf
  t096370: 'error, China, Chengdu, 512M, sun', // dnf
  t096605: 'sealing, China, Shenzhen, 512M, sun',
  t0123650: 'sealing, China, Jieyang, 512M, sun',
  t0151229: 'error, China, Shandong, 512M, sun', // dnf
  t0202344: 'error, Netherlands, 512M, sun', // dnf
  t0202358: 'error, USA, 512M, sun', // dnf

  // Stuck - sun
 
  t0202249: 'stuck, China, Guangdong, 512M, sun-cfa',

  // Sealing - sat

  t096589: 'error, China, Changsha, 512M, sat',  // dnf

  // Stuck - sat

  t02555: 'stuck, China, Guiyang, 512M, sun-xfr',

  // New



  // Asks

  // Error

  t01743: 'error, China, Hong Kong, 512M, 3h, sat-xfr', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: acquire unsealed sector: local acquire error: finding best storage for allocating : no good path found
  t02046: 'error, China, Yibin, 512M, sun-funds', // EOF
  t02556: 'error, China, Xiamen, 512M', // dnf
  t01307: 'error, China, Fujian, 32G, wed', // dnf

  // Dial backoff

  t01327: 'backoff, China, Guangdong, 512M, 2h, 2h',
  t02206: 'backoff, USA, Boardman, 512M, 2h',
  t02263: 'backoff, USA, Boardman, 512M, 3h, fri-sealing',
  t02264: 'backoff, USA, Boardman, 512M, 2h',
  t02315: 'backoff, USA, Boardman, 512M, 2h, 2h, sat',
  t02675: 'backoff, USA, Boardman, 512M, 2h, sat-funds',
  t04985: 'backoff, UK, Lower Slaughter, 512M, 2h',
  t096379: 'backoff, China, Ordos, 512M, <4h',

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
  t0123645: 'rejected, China, Shanghai, 512M',
  t0241898: 'rejected, China, Yibin, 512M', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: jq: error: syntax error, unexpected '|' (Unix shell quoting issues?) at <top-level>, line 1: .Proposal.Client == "t12thv7e3x3tomo5nuunsvzqnl5txflpztdqcbtai" || .Proposal.Client == "t1capnpwjvm4gfbdlbavblmvjldwqzdo6ukh7mmq" || .Proposal.Client == "t12heuwfbg654jgdnctywyafxrqbmcidwj6osecha" jq: 1 compile error

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
  t02674: 'dial, USA, Boardman, 512M, 2h, sat',
  t02707: 'dial, Germany, Bad Honnef, 512M',
  t02984: 'dial, China, Ordos, 512M, fri-sealing',
  t03043: 'dial, China, Hangzhou, 512M',
  t096361: 'dial, China, Beijing, 512M',
  t0123652: 'dial, UK, Lower Slaughter, 512M',

  // XNR

  t01581: 'xnr, Australia, Sydney, 512M, wed-sealing',
  t01591: 'xnr, China, Beijing, 512M, 1h, 1h, 1h, sat',
  t01593: 'xnr, USA, Athol, 512M, @why, 2h, 2h, 2h, sat',
  t01735: 'xnr, China, Shanghai, 512M, fri-funds',
  t01897: 'xnr, China, Foshan, 512M',
  t01994: 'xnr, China, Foshan, 512M',
  t02236: 'xnr, China, Dongguan, 512M',
  t02301: 'xnr, China, Liaoning, 512M, fri-sealing',
  t02641: 'xnr, China, Shenzhen, 512M, thu',
  t02933: 'xnr, Germany, 512M',
  t03014: 'xnr, China, Guangzhou, 512M, fri-sealing',
  t0123649: 'xnr, China, Sichuan, 512M, sat',
  t0211954: 'xnr, USA, Arlington, 512M, sun',
  t0253095: 'xnr, China, Liaoning, 512M',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
