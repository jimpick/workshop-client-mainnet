// Slingshot test results
//
// Additional testing with files > 128MiB in size

const annotations = {
  // Candidates

  t01800: 'candidate, China, Shenzhen + Chengdu',
  t02305: 'candidate, China, Dongguan',
  t02381: 'candidate, China, Dongguan, 西野七濑迷叔',
  t02399: 'candidate, China, Zhejiang',
  t02405: 'candidate, China, Shenzhen',
  t02415: 'candidate, China, Hong Kong',
  t02423: 'candidate, Ukraine, Kyiv, igowreck',
  t02500: 'candidate, Korea, Seongnam-si', // 131072 < 134217728
  t02501: 'candidate, USA, Portland, 6block',
  t02622: 'candidate, USA, Portland, 6block',
  t02623: 'candidate, USA, Portland, 6block',
  t02633: 'candidate, China, Hong Kong',
  t02645: 'candidate, China, Hong Kong',
  t02654: 'candidate, China, Shanghai',
  t02772: 'candidate, China, Chengdu',
  t03131: 'candidate, China, Changsha',
  t03143: 'candidate, China, Shijiazhuang + Hong Kong',
  t03224: 'candidate, Ukraine, Irpin, oboltusov', // 131072 < 134217728
  t03264: 'candidate, Korea, Bucheon-si', // 131072 < 134217728
  t03273: 'candidate, USA, Portland, 6block',
  t03274: 'candidate, USA, Portland, 6block',
  t03302: 'candidate, China, Chengdu',
  t03325: 'candidate, Germany, Frankfurt',
  t03328: 'candidate, China, Xinxiang',
  t03340: "sealing, China, Xi'an",
  t03347: 'candidate, China, Shenzhen',
  t03363: 'candidate, Singapore',
  t03482: 'candidate, China, Wuxi',
  t03491: 'candidate, China, Hong Kong',
  t03512: 'candidate, New Zealand, Auckland, NZFILECOIN01',
  t04443: 'candidate, China, Shanghai, 罗良科技',
  t05315: 'candidate, USA, Portland, 6block',
  t05316: 'candidate, USA, Portland, 6block',
  t05317: 'candidate, USA, Portland',
  t07709: 'candidate, Korea, Dongjak-gu', // 131072 < 134217728
  t07850: 'candidate, USA, Portland, 6block',
  t07990: 'candidate, China, Hong Kong',
  t08025: 'candidate, China, Hong Kong',
  t08220: 'candidate, China, Shenzhen',
  t08264: 'candidate, China, Xianning', // 131072 < 134217728
  t08311: 'candidate, China, Shenzhen',
  t08371: 'candidate, China, Chengdu',
  t08383: 'candidate, USA, Portland, 6block',
  t08403: 'candidate, UK, Lower Slaughter', // 131072 < 134217728
  t09675: 'candidate, China, Weifang',
  t09693: 'candidate, USA, Portland + Singapore',
  t09696: 'candidate, USA, Portland + Singapore',
  t09731: 'candidate, China, Guiyang',
  t09833: 'candidate, USA, San Jose',
  t09848: 'candidate, USA', // 131072 < 134217728
  t010048: 'candidate, China, Shanghai',
  t010084: 'candidate, China, Beijing',
  t010241: 'candidate, China, Beijing + USA, Portland',
  t010247: 'candidate, China, Yantai',
  t010253: 'candidate, China, Beijing + USA, Portland',
  t010438: 'candidate, USA', // 131072 < 134217728
  t010446: 'candidate, Netherlands',
  t010479: 'candidate, France, Fontenay-sous-Bois',
  t010491: 'candidate, China, Shenzhen',
  t010495: 'candidate, China, Tainjin',
  t010501: 'candidate, China, Hangzhou',
  t010507: 'candidate, China, Hangzhou',
  t010512: 'candidate, China, Zhengzhou',
  t010558: 'candidate, China, Shenzhen + Hong Kong',
  t014394: 'candidate, China, Suzhou',
  t014768: 'candidate, Singapore',
  t015877: 'candidate, China, Jiaxing + USA',
  t015897: 'candidate, China, Guangdong',
  t015927: 'candidate, USA, East Islip', // 131072 < 134217728
  t016482: 'candidate, USA, Aliquippa',
  t016594: 'candidate, Germany', // 131072 < 134217728
  t017734: 'candidate, Australia, Sydney',
  t018501: 'candidate, China, Beijing', // 131072 < 134217728
  t018772: 'candidate, Australia',
  t018780: 'candidate, Singapore + Germany, Frankfurt + USA',
  t018781: 'candidate, Singapore + Germany, Frankfurt + USA',
  t018782: 'candidate, Singapore + Germany, Frankfurt + USA',
  t018783: 'candidate, Singapore + Germany, Frankfurt + USA',
  t018784: 'candidate, Singapore + Germany, Frankfurt + USA',
  t018785: 'candidate, Singapore + Germany, Frankfurt + USA',
  t019022: "candidate, China, Xi'an",
  t019029: 'candidate, Serbia, Boljevac', // 131072 < 134217728
  t019041: 'candidate, Singapore',
  t019074: 'candidate, China, Guangdong',
  t019090: 'candidate, South Africa, Johannesburg',
  t019100: 'candidate, Romania, Cluj-Napoca', // 131072 < 134217728
  t019118: 'candidate, China, Jiaxing',
  t019174: 'candidate, UK, Halifax',
  t019240: 'candidate, China, Beijing',
  t019243: 'candidate, USA, Jackson',
  t019354: 'candidate, Germany, Frankfurt',
  t019399: 'candidate, Korea, Busan',
  t019459: 'candidate, USA, Alpharetta',
  t020489: 'candidate, China, Lioaning',
  t020523: 'candidate, China, Suzhou',
  t020747: 'candidate, China, Xiamen', // 131072 < 134217728
  t020904: 'candidate, Korea, Uijeongbu-si', // 131072 < 134217728
  t020923: 'candidate, China, Cangzhou',
  t020975: 'candidate, China, Shandong',
  t021328: 'candidate, China, Dongguan',
  t021339: 'candidate, China, Jiaxing',
  t021479: 'candidate, China, Qingdao',
  t021583: 'candidate, China, Jiaxing',
  t021710: 'candidate, China, Shijiazhuang',
  t022070: 'candidate, China, Jieyang',
  t022289: 'candidate, China, Mianyang',
  t022352: 'candidate, Norway, Borgen', // 131072 < 134217728
  t022399: 'candidate, China, Beijing', // 131072 < 134217728
  t022512: 'candidate, Canada, Embrun',
  t022566: 'candidate, China, Nanchong',
  t022755: 'candidate, China, Shenzhen',
  t022820: 'candidate, China, Guangdong',
  t022832: 'candidate, China',
  t022836: 'candidate, China, Chongqing',
  t022841: 'candidate, China, Zhongshan',
  t022853: 'candidate, China, Fuzhou',
  t022855: 'candidate, Finland, Helsinki', // 131072 < 134217728
  t022922: 'candidate, China, Shenzhen',
  t022969: 'candidate, China, Chengdu',
  t023001: 'candidate, China, Changsha',
  t023013: 'candidate, China, Hong Kong', // 20000000 < 24414062
  t023207: 'candidate, ??',
  t023229: 'candidate, China, Shandong', // 131072 < 134217728
  t023495: 'candidate, China, Beijing + USA, Portland',
  t023526: 'candidate, China, Chongqing',
  t023661: 'candidate, China, Zhejiang',
  t023678: 'candidate, China, Jiaxing',
  t023825: 'candidate, USA, Portland',
  t023843: 'candidate, NR',
  t023986: 'candidate, Korea, Seoul',
  t024015: 'candidate, USA, Portland',
  t024016: 'candidate, USA, Portland',
  t024070: 'candidate, Japan, Setagaya-ku', // 131072 < 134217728
  t024074: 'candidate, NR',
  t024129: 'candidate, China, Zhejiang',

  // Live

  t02514: 'live, USA, Portland, 6block',
  t02576: 'live, Denmark, Gjerlev, BenjaminH', // 131072 < 134217728
  t02620: 'live, Poland, Krakow, @magik6k', // 20000000 < 114746093
  t03275: 'live, USA, Portland, 6block', // top miner
  t03339: 'live, China, Luzhou, benxun', // top miner
  t03624: 'live, Germany, Chemnitz, ode', // top miner
  t07919: 'live, China, Beijing, Shanghai, Hunan', // top miner
  t020742: 'live, China, Shanghai + Hangzhou + Shaoxing', // top miner
  t022072: 'live, China, Jieyang', // top miner

  // Testing

  // Stuck - CheckForAcceptance

  t01238: 'stuck-cfa, Vietnam, Hanoi, FILECOIN-VIETNAM', // 10.04: 254 MiB, 0.012995375 FIL
  t02387: 'stuck-cfa, Canada, Brampton, NBFS Canada', // 10.04: 254 MiB, 0.0000001299395 FIL
  t010617: 'stuck-cfa, Canada, Surrey, @feiya200', // 10.04: 254 MiB, 0.013022075 FIL

  // Sealing - supercheap

  t021540: 'sealing-supercheap, Germany, Frankfurt, @hsanjuan', // 10.04: 254 MiB, 0.00000006487625 FIL

  // Sealing - cheap

  t01152: 'sealing-cheap, China, Beijing', // 10.04: 254 MiB, 0.000013028375 FIL
  t01241: 'sealing-cheap, USA, Portland, 6block', // 10.04: 254 MiB, 0.0000130052 FIL
  t01272: 'sealing-cheap, Singapore', // 10.04: 254 MiB, 0.000065066125 FIL
  t08482: 'sealing-cheap, USA, Athol, @why', // 10.04: 254 MiB, 0.000065117 FIL

  // Sealing - expensive

  t01278: 'sealing-expensive, USA, Grand Rapids, MiMiner', // 10.04: 254 MiB, 0.013011475 FIL
  t02388: 'sealing-expensive, Netherlands, Amersfoort, Kroketje', // 10.04: 254 MiB, 0.012982425 FIL
  t015941: 'sealing-expensive, Ukraine, Kyiv', // 10.04: 254 MiB, 0.012973375 FIL

  // Error

  t08240: 'error, Russia, Novosibirsk, Rabinovitch', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.097613489554111557 FIL, balance: 0.092623923120394973 FIL): not enough funds to execute transaction
  t023971: 'error, USA, @Brian Y' // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacedkhfvfff45aco2a34swvdjukzsja2lleprqjhkbacqg7obrvrmfy n 216, TS: bafy2bzaceajiwne4xupdkbbvjf3on5frce25o5nxpsdkhh3ghhmnkpqvtvs7w n216)
}

export default annotations
