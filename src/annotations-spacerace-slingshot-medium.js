// Slingshot test results
//
// Additional testing with files > 128MiB in size

const annotations = {
  // Candidates

  f01234: "candidate, Belgium, De Klinge, Eliovp",
  f01240: "candidate, Netherlands, HidNand",
  f01279: "candidate, China, Sichuan",
  f01287: "candidate, China, Jiaxing, MaiTian",
  f01799: "candidate, China, Jinan, TokenHome",
  f01800: "candidate, China, Shenzhen + Chengdu",
  f02301: "candidate, USA",
  f02305: "candidate, China, Dongguan",
  f02399: "candidate, China, Zhejiang",
  f02401: "candidate, Canada, Chambly, NBFS Canada",
  f02405: "candidate, China, Shenzhen",
  f02415: "candidate, China, Hong Kong",
  f02417: "candidate, China, Liaoning",
  f02423: "candidate, Ukraine, Kyiv, igowreck",
  f02490: "candidate, China, Fujian",
  f02492: "candidate, China, Shenzhen",
  f02500: "candidate, Korea, Seongnam-si",
  f02501: "candidate, USA, Portland, 6block",
  f02620: "candidate, Poland, Krakow, @magik6k",
  f02622: "candidate, USA, Portland, 6block",
  f02623: "candidate, USA, Portland, 6block",
  f02625: "candidate, China, Shanghai, IPFS星际工厂",
  f02633: "candidate, China, Hong Kong",
  f02645: "candidate, China, Hong Kong",
  f02654: "candidate, China, Shanghai",
  f02668: "candidate, China, Chengdu",
  f02772: "candidate, China, Chengdu",
  f03131: "candidate, China, Changsha",
  f03134: "candidate, China, Cangzhou, 乔木信息",
  f03143: "candidate, China, Shijiazhuang + Hong Kong",
  f03223: "candidate, USA",
  f03224: "candidate, Ukraine, Irpin, oboltusov",
  f03274: "candidate, USA, Portland, 6block",
  f03328: "candidate, China, Xinxiang",
  f03339: "candidate, China, Luzhou, benxun",
  f03340: "candidate, China, Xi'an",
  f03363: "candidate, Singapore",
  f03482: "candidate, China, Wuxi",
  f03488: "candidate, Korea, Geumcheon-gu",
  f03512: "candidate, New Zealand, Auckland, NZFILECOIN01",
  f03624: "candidate, Germany, Chemnitz, ode",
  f04443: "candidate, China, Shanghai, 罗良科技",
  f05317: "candidate, USA, Portland",
  f05664: "candidate, China, Shenzhen, 艾比特网络科技",
  f07824: "candidate, China, Shanghai",
  f07850: "candidate, USA, Portland, 6block",
  f07990: "candidate, China, Hong Kong",
  f07998: "candidate, China, Hangzhou",
  f08220: "candidate, China, Shenzhen",
  f08240: "candidate, Russia, Novosibirsk, Rabinovitch",
  f08285: "candidate, Latvia, Riga, stander",
  f08371: "candidate, China, Chengdu",
  f08403: "candidate, UK, Lower Slaughter",
  f09592: "candidate, Japan, Minamata",
  f09675: "candidate, China, Weifang",
  f09693: "candidate, USA, Portland + Singapore",
  f09696: "candidate, USA, Portland + Singapore",
  f09731: "candidate, China, Guiyang",
  f09770: "candidate, China, Xi'an",
  f09833: "candidate, USA, San Jose",
  f09848: "candidate, USA",
  f010084: "candidate, China, Beijing",
  f010253: "candidate, China, Beijing + USA, Portland",
  f010257: "candidate, China, Hong Kong, DNS:feiyuipfs.com",
  f010400: "candidate, China, Shenyang",
  f010438: "candidate, USA",
  f010446: "candidate, Netherlands",
  f010479: "candidate, France, Fontenay-sous-Bois",
  f010491: "candidate, China, Shenzhen",
  f010493: "candidate, China, Shanghai",
  f010501: "candidate, China, Hangzhou",
  f010505: "candidate, China, Wuhan",
  f010507: "candidate, China, Hangzhou",
  f010513: "candidate, China, Chongqing",
  f010558: "candidate, China, Shenzhen + Hong Kong",
  f014281: "candidate, Netherlands, Permerend",
  f014394: "candidate, China, Suzhou",
  f014569: "candidate, NR",
  f014768: "candidate, Singapore",
  f015233: "candidate, China, Nanjing",
  f015747: "candidate, Japan, Setagaya-ku",
  f015941: "candidate, Ukraine, Kyiv",
  f016482: "candidate, USA, Aliquippa",
  f016594: "candidate, Germany",
  f017734: "candidate, Australia, Sydney",
  f017970: "candidate, China, Baoding",
  f018501: "candidate, China, Beijing",
  f018780: "candidate, Singapore + Germany, Frankfurt + USA",
  f018781: "candidate, Singapore + Germany, Frankfurt + USA",
  f018782: "candidate, Singapore + Germany, Frankfurt + USA",
  f018783: "candidate, Singapore + Germany, Frankfurt + USA",
  f018784: "candidate, Singapore + Germany, Frankfurt + USA",
  f018785: "candidate, Singapore + Germany, Frankfurt + USA",
  f019029: "candidate, Serbia, Boljevac",
  f019074: "candidate, China, Guangdong",
  f019099: "candidate, China, Hong Kong",
  f019100: "candidate, Romania, Cluj-Napoca",
  f019104: "candidate, Canada, Chambly",
  f019118: "candidate, China, Jiaxing",
  f019174: "candidate, UK, Halifax",
  f019240: "candidate, China, Beijing",
  f019243: "candidate, USA, Jackson",
  f019354: "candidate, Germany, Frankfurt",
  f019362: "candidate, China, Hangzhou",
  f019638: "candidate, Germany, Frankfurt",
  f019824: "candidate, USA",
  f020436: "candidate, China, Beijing",
  f020489: "candidate, China, Lioaning",
  f020904: "candidate, Korea, Uijeongbu-si",
  f020928: "candidate, China, Deyang + Singapore",
  f021075: "candidate, China, Chengdu",
  f021255: "candidate, China, Suzhou + Netherlands",
  f021262: "candidate, China, Shanghai",
  f021316: "candidate, China, Yangzhou",
  f021328: "candidate, China, Dongguan",
  f021479: "candidate, China, Qingdao",
  f021583: "candidate, China, Jiaxing",
  f021616: "candidate, China, Shanghai",
  f021870: "candidate, USA, Portland",
  f022142: "candidate, USA, Queens",
  f022163: "candidate, NR",
  f022261: "candidate, China, Luzhou",
  f022289: "candidate, China, Mianyang",
  f022352: "candidate, Norway, Borgen",
  f022376: "candidate, China, Dongguan",
  f022566: "candidate, China, Nanchong",
  f022753: "candidate, China, Hong Kong",
  f022832: "candidate, China",
  f022841: "candidate, China, Zhongshan",
  f022853: "candidate, China, Fuzhou",
  f022855: "candidate, Finland, Helsinki",
  f023013: "candidate, China, Hong Kong",
  f023108: "candidate, China, Dongguan",
  f023179: "candidate, China, Fuzhou",
  f023200: "candidate, China, Shanghai",
  f023229: "candidate, China, Shandong",
  f023467: "candidate, Norway, Oslo",
  f023490: "candidate, Ukraine, Kyiv",
  f023495: "candidate, China, Beijing + USA, Portland",
  f023501: "candidate, China, Mianyang",
  f023526: "candidate, China, Chongqing",
  f023581: "candidate, China, Hong Kong",
  f023647: "candidate, Korea, Gangseo-gu",
  f023678: "candidate, China, Jiaxing",
  f023825: "candidate, USA, Portland",
  f023843: "candidate, NR",
  f023939: "candidate, NR",
  f023971: "candidate, USA, @Brian Y",
  f024015: "candidate, USA, Portland",
  f024030: "candidate, Korea, Gwangju",
  f024070: "candidate, Japan, Setagaya-ku",
  f024184: "candidate, Korea, Gangnam-gu",
  f024468: "candidate, China, Shenzhen",
  f024496: "candidate, China, Dongguan",
  f024550: "candidate, China, Wenzhou",

  // Live

  // Testing

  // Transferring

  f03302: 'transferring, China, Chengdu', // 10.06: 254 MiB, 0.000065022375 FIL
  f019437: 'transferring, Korea, Guro-gu', // 10.06: 254 MiB, 0.00006497525 FIL
  f022227: 'transferring, China, Jiangsu', // 10.06: 254 MiB, 0.000064958625 FIL
  f022836: 'transferring, China, Chongqing', // 10.06: 254 MiB, 0 FIL
  f022969: 'transferring, China, Chengdu', // 10.06: 254 MiB, 0.0000648725 FIL 

  // Stuck - CheckForAcceptance


  // Price tier A - 5+ leading zero

  f021540: 'active-a, Germany, Frankfurt, @hsanjuan', // 10.04, 421264: 254 MiB, 0.00000006487625 FIL

  f02387: 'sealing-a, Canada, Brampton, NBFS Canada', // 10.04, 422140: 254 MiB, 0.0000001299395 FIL
  f024101: 'sealing-a, China, Guiyang', // 10.06, 452703: 254 MiB, 0.00000000001299985 FIL

  // Price tier B - 3-4 leading zero
	
  f01152: 'active-b, China, Beijing', // 10.04, 421060: 254 MiB, 0.000013028375 FIL
  f01241: 'active-b, USA, Portland, 6block', // 10.04, 421193: 254 MiB, 0.0000130052 FIL
  f01272: 'active-b, Singapore', // 10.04: 254 MiB, 421238: 0.000065066125 FIL
  f02514: 'active-b, USA, Portland, 6block', // top miner - 10.04, 421660: 254 MiB, 0.000013100375 FIL
  f03273: 'active-b, USA, Portland, 6block', // 10.05, 435212: 254 MiB, 0.000013015 FIL
  f07919: 'active-b, China, Beijing, Shanghai, Hunan', // top miner - 10.04, 421690: 254 MiB, 0.00001307075 FIL
  f010241: 'active-b, China, Beijing + USA, Portland', // 10.05, 435316: 254 MiB, 0.0000130651 FIL
  f023649: 'active-b, Korea, Seoul', // 10.05, 435377: 508 MiB, 0.00013032625 FIL
  f024016: 'active-b, USA, Portland', // 10.05, 435225: 254 MiB, 0.00006534 FIL


  f02381: 'sealing-b, China, Dongguan, 西野七濑迷叔', // 10.06, 452668: 254 MiB, 0.00006490125 FIL
  f03176: 'sealing-b, USA, San Mateo, Five Star-Helmsman&Heiben', // 10.06, 452689: 254 MiB, 0.000013007 FIL
  f03275: 'sealing-b, USA, Portland, 6block', // top miner - 10.04, 421645: 254 MiB, 0.0000130888 FIL
  f03491: 'sealing-b, China, Hong Kong', // 10.06, 452684: // 254 MiB, 0.00001299995 FIL
  f05315: 'sealing-b, USA, Portland, 6block', // 10.06, 452378: 254 MiB, 0.000013006275 FIL
  f05316: 'sealing-b, USA, Portland, 6block', // 10.06, 452724: 254 MiB, 0.00001297695 FIL
  f08025: 'sealing-b, China, Hong Kong', // 10.06, 452628: 254 MiB, 0.000013004475 FIL
  f08311: 'sealing-b, China, Shenzhen', // 10.06, 452766: 508 MiB, 0.0001309705 FIL
  f08383: 'sealing-b, USA, Portland, 6block', // 10.06, 452344: 254 MiB, 0.000013006925 FIL
  f08482: 'sealing-b, USA, Athol, @why', // 10.04, 421320: 254 MiB, 0.000065117 FIL
  f010088: 'sealing-b, DNS:purumine.com', // 10.06, 452624: 254 MiB, 0.00001300305 FIL
  f018772: 'sealing-b, Australia', // 10.06, 452748: 254 MiB, 0.00006502625 FIL
  f019041: 'sealing-b, Singapore', // 10.06, 452753: 254 MiB, 0.0000650085 FIL
  f020605: 'sealing-b, China, Yibin', // 10.06, 451710: 254 MiB, 0.000012995775 FIL
  f024025: 'sealing-b, China, Chengdu', // 10.06, 452452: 254 MiB, 0.000064868125 FIL
  f024521: 'sealing-b, Korea, Gyeonggi-do', // 10.06, 452657: 254 MiB, 0.000065130375 FIL


  // Price tier C - <= 2 leading zero

  f01238: 'active-c, Vietnam, Hanoi, FILECOIN-VIETNAM', // 10.04, 431954: 254 MiB, 0.012995375 FIL
  f01278: 'active-c, USA, Grand Rapids, MiMiner', // 10.04, 421214: 254 MiB, 0.013011475 FIL
  f02388: 'active-c, Netherlands, Amersfoort, Kroketje', // 10.04, 421256: 254 MiB, 0.012982425 FIL

  f014409: 'sealing-c, USA, Waxhaw', // 10.06, 451782: 254 MiB, 0.01297545 FIL
  f015877: 'sealing-c, China, Jiaxing + USA', // 10.06, 451761: 254 MiB, 0.013009225 FIL

// Min-size

  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 10.04: 268435456 < 943718400 (~1GiB)

  // Error

  f08019: 'error, China, Yantai, 三合', // 10.06: failed to initiate data transfer: deal data transfer failed: response rejected
  f010247: 'error, China, Yantai', // 10.06: failed to initiate data transfer: deal data transfer failed: response rejected
  f019022: "error, China, Xi'an", // 10.06: failed to initiate data transfer: deal data transfer failed: response rejected
  f021339: 'error, China, Jiaxing', // 10.06: failed to initiate data transfer: deal data transfer failed: response rejected

  // Timeout during ask

  f02299: 'timeout-ask, China, Dongguan, Yolo', // 10.06
  f015897: 'timeout-ask, China, Guangdong', // 10.06

}

export default annotations
