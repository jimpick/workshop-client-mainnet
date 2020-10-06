// Slingshot test results
//
// Additional testing with files > 128MiB in size

const annotations = {
  // Candidates

  f01240: 'candidate, Netherlands, HidNand', // 131072 < 134217728
  f01279: 'candidate, China, Sichuan',
  f01287: 'candidate, China, Jiaxing, MaiTian',
  f01799: 'candidate, China, Jinan, TokenHome',
  f01800: 'candidate, China, Shenzhen + Chengdu',
  f02299: 'candidate, China, Dongguan, Yolo',
  f02301: 'candidate, USA',
  f02305: 'candidate, China, Dongguan',
  f02381: 'candidate, China, Dongguan, 西野七濑迷叔',
  f02401: 'candidate, Canada, Chambly, NBFS Canada',
  f02405: 'candidate, China, Shenzhen',
  f02415: 'candidate, China, Hong Kong',
  f02417: 'candidate, China, Liaoning', // 131072 < 134217728
  f02419: 'candidate, China, Shanghai, yuantai', // 131072 < 134217728
  f02423: 'candidate, Ukraine, Kyiv, igowreck', // 131072 < 134217728
  f02490: 'candidate, China, Fujian',
  f02492: 'candidate, China, Shenzhen',
  f02500: 'candidate, Korea, Seongnam-si', // 131072 < 134217728
  f02501: 'candidate, USA, Portland, 6block',
  f02619: 'candidate, China, Beijing, Blockcasting', // 131072 < 134217728
  f02622: 'candidate, USA, Portland, 6block',
  f02623: 'candidate, USA, Portland, 6block',
  f02625: 'candidate, China, Shanghai, IPFS星际工厂',
  f02633: 'candidate, China, Hong Kong',
  f02645: 'candidate, China, Hong Kong',
  f02654: 'candidate, China, Shanghai',
  f02668: 'candidate, China, Chengdu',
  f03131: 'candidate, China, Changsha',
  f03134: 'candidate, China, Cangzhou, 乔木信息',
  f03143: 'candidate, China, Shijiazhuang + Hong Kong',
  f03176: 'candidate, USA, San Mateo, Five Star-Helmsman&Heiben',
  f03223: 'candidate, USA',
  f03224: 'candidate, Ukraine, Irpin, oboltusov', // 131072 < 134217728
  f03264: 'candidate, Korea, Bucheon-si',
  f03274: 'candidate, USA, Portland, 6block',
  f03302: 'candidate, China, Chengdu',
  f03328: 'candidate, China, Xinxiang', // 131072 < 134217728
  f03339: 'candidate, China, Luzhou, benxun', // top miner
  f03340: "candidate, China, Xi'an",
  f03363: 'candidate, Singapore',
  f03482: 'candidate, China, Wuxi',
  f03491: 'candidate, China, Hong Kong',
  f03512: 'candidate, New Zealand, Auckland, NZFILECOIN01',
  f03544: 'candidate, China, Guiyang',
  f04443: 'candidate, China, Shanghai, 罗良科技',
  f05315: 'candidate, USA, Portland, 6block',
  f05316: 'candidate, USA, Portland, 6block',
  f05317: 'candidate, USA, Portland',
  f05664: 'candidate, China, Shenzhen, 艾比特网络科技',
  f07824: 'candidate, China, Shanghai',
  f07850: 'candidate, USA, Portland, 6block',
  f07982: 'candidate, China, Shenzhen', // 131072 < 134217728
  f07990: 'candidate, China, Hong Kong',
  f08025: 'candidate, China, Hong Kong',
  f08157: 'candidate, China, Beijing + Germany, Frankfurt, 超星际',
  f08220: 'candidate, China, Shenzhen',
  f08264: 'candidate, China, Xianning', // 131072 < 134217728
  f08285: 'candidate, Latvia, Riga, stander',
  f08311: 'candidate, China, Shenzhen',
  f08371: 'candidate, China, Chengdu',
  f08383: 'candidate, USA, Portland, 6block',
  f08403: 'candidate, UK, Lower Slaughter',
  f08474: 'candidate, China, Hong Kong',
  f09675: 'candidate, China, Weifang',
  f09693: 'candidate, USA, Portland + Singapore',
  f09696: 'candidate, USA, Portland + Singapore',
  f09770: "candidate, China, Xi'an",
  f09833: 'candidate, USA, San Jose',
  f09848: 'candidate, USA', // 131072 < 134217728
  f010084: 'candidate, China, Beijing',
  f010088: 'candidate, DNS:purumine.com',
  f010253: 'candidate, China, Beijing + USA, Portland',
  f010257: 'candidate, China, Hong Kong, DNS:feiyuipfs.com',
  f010400: 'candidate, China, Shenyang',
  f010438: 'candidate, USA', // 131072 < 134217728
  f010446: 'candidate, Netherlands',
  f010479: 'candidate, France, Fontenay-sous-Bois',
  f010501: 'candidate, China, Hangzhou',
  f010505: 'candidate, China, Wuhan',
  f010507: 'candidate, China, Hangzhou',
  f010512: 'candidate, China, Zhengzhou',
  f010513: 'candidate, China, Chongqing',
  f014394: 'candidate, China, Suzhou', // 131072 < 134217728
  f014409: 'candidate, USA, Waxhaw', // 131072 < 1073741824
  f014768: 'candidate, Singapore',
  f015747: 'candidate, Japan, Setagaya-ku',
  f015877: 'candidate, China, Jiaxing + USA',
  f015897: 'candidate, China, Guangdong',
  f016482: 'candidate, USA, Aliquippa',
  f016594: 'candidate, Germany', // 131072 < 134217728
  f017734: 'candidate, Australia, Sydney',
  f018501: 'candidate, China, Beijing', // 131072 < 134217728
  f018772: 'candidate, Australia',
  f018780: 'candidate, Singapore + Germany, Frankfurt + USA',
  f018781: 'candidate, Singapore + Germany, Frankfurt + USA',
  f018782: 'candidate, Singapore + Germany, Frankfurt + USA',
  f018783: 'candidate, Singapore + Germany, Frankfurt + USA',
  f018784: 'candidate, Singapore + Germany, Frankfurt + USA',
  f018785: 'candidate, Singapore + Germany, Frankfurt + USA',
  f019041: 'candidate, Singapore',
  f019074: 'candidate, China, Guangdong',
  f019090: 'candidate, South Africa, Johannesburg',
  f019100: 'candidate, Romania, Cluj-Napoca',
  f019104: 'candidate, Canada, Chambly',
  f019118: 'candidate, China, Jiaxing',
  f019240: 'candidate, China, Beijing',
  f019243: 'candidate, USA, Jackson',
  f019354: 'candidate, Germany, Frankfurt',
  f019437: 'candidate, Korea, Guro-gu',
  f019638: 'candidate, Germany, Frankfurt',
  f020361: 'candidate, Colombia, Medellin', // 131072 < 134217728
  f020398: 'candidate, China, Zhangjiakou',
  f020489: 'candidate, China, Lioaning', // 131072 < 134217728
  f020605: 'candidate, China, Yibin',
  f020928: 'candidate, China, Deyang + Singapore',
  f021075: 'candidate, China, Chengdu', // 131072 < 134217728
  f021255: 'candidate, China, Suzhou + Netherlands',
  f021316: 'candidate, China, Yangzhou',
  f021444: 'candidate, China, Guangzhou',
  f021583: 'candidate, China, Jiaxing',
  f021710: 'candidate, China, Shijiazhuang',
  f021870: 'candidate, USA, Portland', // 131072 < 134217728
  f022070: 'candidate, China, Jieyang',
  f022227: 'candidate, China, Jiangsu',
  f022261: 'candidate, China, Luzhou',
  f022376: 'candidate, China, Dongguan',
  f022753: 'candidate, China, Hong Kong',
  f022820: 'candidate, China, Guangdong',
  f022836: 'candidate, China, Chongqing',
  f022841: 'candidate, China, Zhongshan',
  f022855: 'candidate, Finland, Helsinki', // 131072 < 134217728
  f022969: 'candidate, China, Chengdu',
  f023013: 'candidate, China, Hong Kong', // 20000000 < 24414062
  f023108: 'candidate, China, Dongguan',
  f023179: 'candidate, China, Fuzhou',
  f023200: 'candidate, China, Shanghai',
  f023229: 'candidate, China, Shandong', // 131072 < 134217728
  f023495: 'candidate, China, Beijing + USA, Portland',
  f023526: 'candidate, China, Chongqing',
  f023571: 'candidate, NR',
  f023581: 'candidate, China, Hong Kong', // 131072 < 134217728
  f023647: 'candidate, Korea, Gangseo-gu',
  f023678: 'candidate, China, Jiaxing', // 131072 < 134217728
  f023825: 'candidate, USA, Portland',
  f023939: 'candidate, NR',
  f024015: 'candidate, USA, Portland',
  f024025: 'candidate, China, Chengdu',
  f024070: 'candidate, Japan, Setagaya-ku',
  f024101: 'candidate, China, Guiyang', // 131072 < 1048576
  f024150: 'candidate, UK, Mansfield',
  f024184: 'candidate, Korea, Gangnam-gu',
  f024468: 'candidate, China, Shenzhen',
  f024521: 'candidate, Korea, Gyeonggi-do',

  // Live

  // Testing

  // Transferring

  f08019: 'transferring, China, Yantai, 三合', // 10.05: 254 MiB, 0.01307425 FIL
  f019022: "transferring, China, Xi'an", // 10.05: 254 MiB, 0.000013055075 FIL
  f021339: 'transferring, China, Jiaxing', // 10.05: 254 MiB, 0.000065297375 FIL

  // Stuck - CheckForAcceptance

  f01238: 'stuck-cfa, Vietnam, Hanoi, FILECOIN-VIETNAM', // 10.04: 254 MiB, 0.012995375 FIL
  f02387: 'stuck-cfa, Canada, Brampton, NBFS Canada', // 10.04: 254 MiB, 0.0000001299395 FIL

  // Sealing - price tier a

  f021540: 'sealing-a, Germany, Frankfurt, @hsanjuan', // 10.04: 254 MiB, 0.00000006487625 FIL

  // Active - price tier b
	
  f01152: 'active-b, China, Beijing', // 10.04: 254 MiB, 0.000013028375 FIL
  f01241: 'active-b, USA, Portland, 6block', // 10.04: 254 MiB, 0.0000130052 FIL
  f01272: 'active-b, Singapore', // 10.04: 254 MiB, 0.000065066125 FIL
  f02514: 'active-b, USA, Portland, 6block', // top miner - 10.04: 254 MiB, 0.000013100375 FIL
  f07919: 'active-b, China, Beijing, Shanghai, Hunan', // top miner - 10.04: 254 MiB, 0.00001307075 FIL

  // Sealing - price tier b

  f02399: 'sealing-b, China, Zhejiang', // 10.05: 254 MiB, 0.000013008825 FIL
  f03273: 'sealing-b, USA, Portland, 6block', // 10.05: 254 MiB, 0.000013015 FIL
  f03275: 'sealing-b, USA, Portland, 6block', // top miner - 10.04: 254 MiB, 0.0000130888 FIL
  f08482: 'sealing-b, USA, Athol, @why', // 10.04: 254 MiB, 0.000065117 FIL
  f010241: 'sealing-b, China, Beijing + USA, Portland', // 10.05: 254 MiB, 0.0000130651 FIL
  f010247: 'sealing-b, China, Yantai', // 10.05: 254 MiB, 0.0000130597 FIL
  f023649: 'sealing-b, Korea, Seoul', // 10.05: 508 MiB, 0.00013032625 FIL
  f024016: 'sealing-b, USA, Portland', // 10.05: 254 MiB, 0.00006534 FIL

  // Sealing - price tier c

  f01278: 'sealing-c, USA, Grand Rapids, MiMiner', // 10.04: 254 MiB, 0.013011475 FIL
  f02388: 'sealing-c, Netherlands, Amersfoort, Kroketje', // 10.04: 254 MiB, 0.012982425 FIL

  // Min-size

  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 10.04: 268435456 < 943718400 (~1GiB)

  // Error

  f02620: 'error, Poland, Krakow, @magik6k' // adding market funds failed: GasEstimateMessageGas error: estimating gas used: message execution failed: exit SysErrInsufficientFunds(6), reason: failed to transfer funds (RetCode=6): transfer failed when deducting funds (0.10916997805 FIL): not enough funds (RetCode=6)

  // Timeout during ask

  f023986: 'timeout-ask, Korea, Seoul',

}

export default annotations
