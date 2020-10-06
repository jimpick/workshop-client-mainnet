// Slingshot test results
//
// Additional testing with files > 128MiB in size

const annotations = {
  // Candidates

  t01240: 'candidate, Netherlands, HidNand', // 131072 < 134217728
  t01279: 'candidate, China, Sichuan',
  t01287: 'candidate, China, Jiaxing, MaiTian',
  t01799: 'candidate, China, Jinan, TokenHome',
  t01800: 'candidate, China, Shenzhen + Chengdu',
  t02299: 'candidate, China, Dongguan, Yolo',
  t02301: 'candidate, USA',
  t02305: 'candidate, China, Dongguan',
  t02381: 'candidate, China, Dongguan, 西野七濑迷叔',
  t02399: 'candidate, China, Zhejiang',
  t02401: 'candidate, Canada, Chambly, NBFS Canada',
  t02405: 'candidate, China, Shenzhen',
  t02415: 'candidate, China, Hong Kong',
  t02417: 'candidate, China, Liaoning', // 131072 < 134217728
  t02419: 'candidate, China, Shanghai, yuantai', // 131072 < 134217728
  t02423: 'candidate, Ukraine, Kyiv, igowreck', // 131072 < 134217728
  t02490: 'candidate, China, Fujian',
  t02492: 'candidate, China, Shenzhen',
  t02500: 'candidate, Korea, Seongnam-si', // 131072 < 134217728
  t02501: 'candidate, USA, Portland, 6block',
  t02619: 'candidate, China, Beijing, Blockcasting', // 131072 < 134217728
  t02622: 'candidate, USA, Portland, 6block',
  t02623: 'candidate, USA, Portland, 6block',
  t02625: 'candidate, China, Shanghai, IPFS星际工厂',
  t02633: 'candidate, China, Hong Kong',
  t02645: 'candidate, China, Hong Kong',
  t02654: 'candidate, China, Shanghai',
  t02668: 'candidate, China, Chengdu',
  t03131: 'candidate, China, Changsha',
  t03134: 'candidate, China, Cangzhou, 乔木信息',
  t03143: 'candidate, China, Shijiazhuang + Hong Kong',
  t03176: 'candidate, USA, San Mateo, Five Star-Helmsman&Heiben',
  t03223: 'candidate, USA',
  t03224: 'candidate, Ukraine, Irpin, oboltusov', // 131072 < 134217728
  t03264: 'candidate, Korea, Bucheon-si',
  t03273: 'candidate, USA, Portland, 6block',
  t03274: 'candidate, USA, Portland, 6block',
  t03302: 'candidate, China, Chengdu',
  t03328: 'candidate, China, Xinxiang', // 131072 < 134217728
  t03340: "candidate, China, Xi'an",
  t03363: 'candidate, Singapore',
  t03482: 'candidate, China, Wuxi',
  t03491: 'candidate, China, Hong Kong',
  t03512: 'candidate, New Zealand, Auckland, NZFILECOIN01',
  t03544: 'candidate, China, Guiyang',
  t04443: 'candidate, China, Shanghai, 罗良科技',
  t05315: 'candidate, USA, Portland, 6block',
  t05316: 'candidate, USA, Portland, 6block',
  t05317: 'candidate, USA, Portland',
  t05664: 'candidate, China, Shenzhen, 艾比特网络科技',
  t07824: 'candidate, China, Shanghai',
  t07850: 'candidate, USA, Portland, 6block',
  t07982: 'candidate, China, Shenzhen', // 131072 < 134217728
  t07990: 'candidate, China, Hong Kong',
  t08019: 'candidate, China, Yantai, 三合',
  t08025: 'candidate, China, Hong Kong',
  t08157: 'candidate, China, Beijing + Germany, Frankfurt, 超星际',
  t08220: 'candidate, China, Shenzhen',
  t08264: 'candidate, China, Xianning', // 131072 < 134217728
  t08285: 'candidate, Latvia, Riga, stander',
  t08311: 'candidate, China, Shenzhen',
  t08371: 'candidate, China, Chengdu',
  t08383: 'candidate, USA, Portland, 6block',
  t08403: 'candidate, UK, Lower Slaughter',
  t08474: 'candidate, China, Hong Kong',
  t09675: 'candidate, China, Weifang',
  t09693: 'candidate, USA, Portland + Singapore',
  t09696: 'candidate, USA, Portland + Singapore',
  t09770: "candidate, China, Xi'an",
  t09833: 'candidate, USA, San Jose',
  t09848: 'candidate, USA', // 131072 < 134217728
  t010084: 'candidate, China, Beijing',
  t010088: 'candidate, DNS:purumine.com',
  t010241: 'candidate, China, Beijing + USA, Portland',
  t010247: 'candidate, China, Yantai',
  t010253: 'candidate, China, Beijing + USA, Portland',
  t010257: 'candidate, China, Hong Kong, DNS:feiyuipfs.com',
  t010400: 'candidate, China, Shenyang',
  t010438: 'candidate, USA', // 131072 < 134217728
  t010446: 'candidate, Netherlands',
  t010479: 'candidate, France, Fontenay-sous-Bois',
  t010501: 'candidate, China, Hangzhou',
  t010505: 'candidate, China, Wuhan',
  t010507: 'candidate, China, Hangzhou',
  t010512: 'candidate, China, Zhengzhou',
  t010513: 'candidate, China, Chongqing',
  t014394: 'candidate, China, Suzhou', // 131072 < 134217728
  t014409: 'candidate, USA, Waxhaw', // 131072 < 1073741824
  t014768: 'candidate, Singapore',
  t015747: 'candidate, Japan, Setagaya-ku',
  t015877: 'candidate, China, Jiaxing + USA',
  t015897: 'candidate, China, Guangdong',
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
  t019041: 'candidate, Singapore',
  t019074: 'candidate, China, Guangdong',
  t019090: 'candidate, South Africa, Johannesburg',
  t019100: 'candidate, Romania, Cluj-Napoca',
  t019104: 'candidate, Canada, Chambly',
  t019118: 'candidate, China, Jiaxing',
  t019240: 'candidate, China, Beijing',
  t019243: 'candidate, USA, Jackson',
  t019354: 'candidate, Germany, Frankfurt',
  t019437: 'candidate, Korea, Guro-gu',
  t019638: 'candidate, Germany, Frankfurt',
  t020361: 'candidate, Colombia, Medellin', // 131072 < 134217728
  t020398: 'candidate, China, Zhangjiakou',
  t020489: 'candidate, China, Lioaning', // 131072 < 134217728
  t020605: 'candidate, China, Yibin',
  t020928: 'candidate, China, Deyang + Singapore',
  t021075: 'candidate, China, Chengdu', // 131072 < 134217728
  t021255: 'candidate, China, Suzhou + Netherlands',
  t021316: 'candidate, China, Yangzhou',
  t021339: 'candidate, China, Jiaxing',
  t021444: 'candidate, China, Guangzhou',
  t021583: 'candidate, China, Jiaxing',
  t021710: 'candidate, China, Shijiazhuang',
  t021870: 'candidate, USA, Portland', // 131072 < 134217728
  t022070: 'candidate, China, Jieyang',
  t022227: 'candidate, China, Jiangsu',
  t022261: 'candidate, China, Luzhou',
  t022376: 'candidate, China, Dongguan',
  t022753: 'candidate, China, Hong Kong',
  t022820: 'candidate, China, Guangdong',
  t022836: 'candidate, China, Chongqing',
  t022841: 'candidate, China, Zhongshan',
  t022855: 'candidate, Finland, Helsinki', // 131072 < 134217728
  t022969: 'candidate, China, Chengdu',
  t023013: 'candidate, China, Hong Kong', // 20000000 < 24414062
  t023108: 'candidate, China, Dongguan',
  t023179: 'candidate, China, Fuzhou',
  t023200: 'candidate, China, Shanghai',
  t023229: 'candidate, China, Shandong', // 131072 < 134217728
  t023495: 'candidate, China, Beijing + USA, Portland',
  t023526: 'candidate, China, Chongqing',
  t023571: 'candidate, NR',
  t023581: 'candidate, China, Hong Kong', // 131072 < 134217728
  t023647: 'candidate, Korea, Gangseo-gu',
  t023649: 'candidate, Korea, Seoul',
  t023678: 'candidate, China, Jiaxing', // 131072 < 134217728
  t023825: 'candidate, USA, Portland',
  t023939: 'candidate, NR',
  t023986: 'candidate, Korea, Seoul',
  t024015: 'candidate, USA, Portland',
  t024016: 'candidate, USA, Portland',
  t024025: 'candidate, China, Chengdu',
  t024070: 'candidate, Japan, Setagaya-ku',
  t024101: 'candidate, China, Guiyang', // 131072 < 1048576
  t024150: 'candidate, UK, Mansfield',
  t024184: 'candidate, Korea, Gangnam-gu',
  t024468: 'candidate, China, Shenzhen',
  t024521: 'candidate, Korea, Gyeonggi-do',

  // Candidates - price tier c

  t03339: 'candidate-tier-c, China, Luzhou, benxun', // top miner

  // Live

  // Testing

  // Stuck - CheckForAcceptance

  t01238: 'stuck-cfa, Vietnam, Hanoi, FILECOIN-VIETNAM', // 10.04: 254 MiB, 0.012995375 FIL
  t02387: 'stuck-cfa, Canada, Brampton, NBFS Canada', // 10.04: 254 MiB, 0.0000001299395 FIL

  // Sealing - price tier a

  t021540: 'sealing-a, Germany, Frankfurt, @hsanjuan', // 10.04: 254 MiB, 0.00000006487625 FIL

  // Active - price tier b
	
  t01152: 'active-b, China, Beijing', // 10.04: 254 MiB, 0.000013028375 FIL
  t01241: 'active-b, USA, Portland, 6block', // 10.04: 254 MiB, 0.0000130052 FIL
  t01272: 'active-b, Singapore', // 10.04: 254 MiB, 0.000065066125 FIL
  t02514: 'active-b, USA, Portland, 6block', // top miner - 10.04: 254 MiB, 0.000013100375 FIL
  t07919: 'active-b, China, Beijing, Shanghai, Hunan', // top miner - 10.04: 254 MiB, 0.00001307075 FIL

  // Sealing - price tier b

  t03275: 'sealing-b, USA, Portland, 6block', // top miner - 10.04: 254 MiB, 0.0000130888 FIL
  t08482: 'sealing-b, USA, Athol, @why', // 10.04: 254 MiB, 0.000065117 FIL

  // Sealing - price tier c

  t01278: 'sealing-c, USA, Grand Rapids, MiMiner', // 10.04: 254 MiB, 0.013011475 FIL
  t02388: 'sealing-c, Netherlands, Amersfoort, Kroketje', // 10.04: 254 MiB, 0.012982425 FIL

  // Min-size

  t02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 10.04: 268435456 < 943718400 (~1GiB)

  // Error

  t02620: 'error, Poland, Krakow, @magik6k' // adding market funds failed: GasEstimateMessageGas error: estimating gas used: message execution failed: exit SysErrInsufficientFunds(6), reason: failed to transfer funds (RetCode=6): transfer failed when deducting funds (0.10916997805 FIL): not enough funds (RetCode=6)
}

export default annotations
