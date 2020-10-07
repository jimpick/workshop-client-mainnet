// Slingshot test results
//
// Additional testing with files > 128MiB in size

const annotations = {
  // Candidates

  f01234: "candidate, Belgium, De Klinge, Eliovp",
  f01799: "candidate, China, Jinan, TokenHome",
  f02301: "candidate, USA",
  f02305: "candidate, China, Dongguan",
  f02622: "candidate, USA, Portland, 6block",
  f02625: "candidate, China, Shanghai, IPFS星际工厂",
  f02633: "candidate, China, Hong Kong",
  f02645: "candidate, China, Hong Kong",
  f03131: "candidate, China, Changsha",
  f03143: "candidate, China, Shijiazhuang + Hong Kong",
  f03223: "candidate, USA",
  f03224: "candidate, Ukraine, Irpin, oboltusov",
  f03339: "candidate, China, Luzhou, benxun",
  f03363: "candidate, Singapore",
  f03482: "candidate, China, Wuxi",
  f03488: "candidate, Korea, Geumcheon-gu",
  f03512: "candidate, New Zealand, Auckland, NZFILECOIN01",
  f03624: "candidate, Germany, Chemnitz, ode",
  f04443: "candidate, China, Shanghai, 罗良科技",
  f05664: "candidate, China, Shenzhen, 艾比特网络科技",
  f07990: "candidate, China, Hong Kong",
  f07998: "candidate, China, Hangzhou",
  f08220: "candidate, China, Shenzhen",
  f09693: "candidate, USA, Portland + Singapore",
  f09731: "candidate, China, Guiyang",
  f09848: "candidate, USA",
  f010257: "candidate, China, Hong Kong, DNS:feiyuipfs.com",
  f010400: "candidate, China, Shenyang",
  f010446: "candidate, Netherlands",
  f010507: "candidate, China, Hangzhou",
  f010558: "candidate, China, Shenzhen + Hong Kong",
  f014394: "candidate, China, Suzhou",
  f014768: "candidate, Singapore",
  f015941: "candidate, Ukraine, Kyiv",
  f016594: "candidate, Germany",
  f017970: "candidate, China, Baoding",
  f018501: "candidate, China, Beijing",
  f018782: "candidate, Singapore + Germany, Frankfurt + USA",
  f018785: "candidate, Singapore + Germany, Frankfurt + USA",
  f019029: "candidate, Serbia, Boljevac",
  f019074: "candidate, China, Guangdong",
  f019118: "candidate, China, Jiaxing",
  f019174: "candidate, UK, Halifax",
  f019240: "candidate, China, Beijing",
  f019638: "candidate, Germany, Frankfurt",
  f020436: "candidate, China, Beijing",
  f021262: "candidate, China, Shanghai",
  f021583: "candidate, China, Jiaxing",
  f021616: "candidate, China, Shanghai",
  f021870: "candidate, USA, Portland",
  f022142: "candidate, USA, Queens",
  f022163: "candidate, NR",
  f022376: "candidate, China, Dongguan",
  f022841: "candidate, China, Zhongshan",
  f023013: "candidate, China, Hong Kong",
  f023179: "candidate, China, Fuzhou",
  f023200: "candidate, China, Shanghai",
  f023467: "candidate, Norway, Oslo",
  f023495: "candidate, China, Beijing + USA, Portland",
  f023501: "candidate, China, Mianyang",
  f024070: "candidate, Japan, Setagaya-ku",
  f024184: "candidate, Korea, Gangnam-gu",
  f024550: "candidate, China, Wenzhou",

  // Live

  // Testing

  f01240: "testing, Netherlands, HidNand",
  f01279: "testing, China, Sichuan",
  f01287: "testing, China, Jiaxing, MaiTian",
  f01800: "testing, China, Shenzhen + Chengdu",
  f02399: "testing, China, Zhejiang",
  f02401: "testing, Canada, Chambly, NBFS Canada",
  f02405: "testing, China, Shenzhen",
  f02415: "testing, China, Hong Kong",
  f02417: "testing, China, Liaoning",
  f02423: "testing, Ukraine, Kyiv, igowreck",
  f02490: "testing, China, Fujian",
  f02492: "testing, China, Shenzhen",
  f02500: "testing, Korea, Seongnam-si",
  f02501: "testing, USA, Portland, 6block",
  f02620: "testing, Poland, Krakow, @magik6k",
  f02623: "testing, USA, Portland, 6block",
  f02668: "testing, China, Chengdu",
  f02772: "testing, China, Chengdu",
  f03134: "testing, China, Cangzhou, 乔木信息",
  f03274: "testing, USA, Portland, 6block",
  f05317: "testing, USA, Portland",
  f07824: "testing, China, Shanghai",
  f07850: "testing, USA, Portland, 6block",
  f08240: "testing, Russia, Novosibirsk, Rabinovitch",
  f08371: "testing, China, Chengdu",
  f08403: "testing, UK, Lower Slaughter",
  f09592: "testing, Japan, Minamata",
  f09675: "testing, China, Weifang",
  f09696: "testing, USA, Portland + Singapore",
  f09770: "testing, China, Xi'an",
  f09833: "testing, USA, San Jose",
  f010084: "testing, China, Beijing",
  f010253: "testing, China, Beijing + USA, Portland",
  f010438: "testing, USA",
  f010479: "testing, France, Fontenay-sous-Bois",
  f010491: "testing, China, Shenzhen",
  f010493: "testing, China, Shanghai",
  f010501: "testing, China, Hangzhou",
  f010505: "testing, China, Wuhan",
  f010513: "testing, China, Chongqing",
  f014281: "testing, Netherlands, Permerend",
  f014569: "testing, NR",
  f015233: "testing, China, Nanjing",
  f015747: "testing, Japan, Setagaya-ku",
  f016482: "testing, USA, Aliquippa",
  f017734: "testing, Australia, Sydney",
  f018780: "testing, Singapore + Germany, Frankfurt + USA",
  f018781: "testing, Singapore + Germany, Frankfurt + USA",
  f018783: "testing, Singapore + Germany, Frankfurt + USA",
  f018784: "testing, Singapore + Germany, Frankfurt + USA",
  f019100: "testing, Romania, Cluj-Napoca",
  f019104: "testing, Canada, Chambly",
  f019243: "testing, USA, Jackson",
  f019354: "testing, Germany, Frankfurt",
  f019824: "testing, USA",
  f020489: "testing, China, Lioaning",
  f020904: "testing, Korea, Uijeongbu-si",
  f020928: "testing, China, Deyang + Singapore",
  f021075: "testing, China, Chengdu",
  f021255: "testing, China, Suzhou + Netherlands",
  f021316: "testing, China, Yangzhou",
  f021328: "testing, China, Dongguan",
  f022261: "testing, China, Luzhou",
  f022289: "testing, China, Mianyang",
  f022352: "testing, Norway, Borgen",
  f021479: "testing, China, Qingdao",
  f022566: "testing, China, Nanchong",
  f022753: "testing, China, Hong Kong",
  f022832: "testing, China",
  f022853: "testing, China, Fuzhou",
  f022855: "testing, Finland, Helsinki",
  f023108: "testing, China, Dongguan",
  f023229: "testing, China, Shandong",
  f023490: "testing, Ukraine, Kyiv",
  f023526: "testing, China, Chongqing",
  f023581: "testing, China, Hong Kong",
  f023647: "testing, Korea, Gangseo-gu",
  f023678: "testing, China, Jiaxing",
  f023825: "testing, USA, Portland",
  f023843: "testing, NR",
  f023939: "testing, NR",
  f023971: "testing, USA, @Brian Y",
  f024015: "testing, USA, Portland",
  f024468: "testing, China, Shenzhen",
  f024496: "testing, China, Dongguan",

  // Transferring

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

  // Transfer failed - failed to initiate data transfer: deal data transfer failed: response rejected

  f03302: 'xfr-failed, China, Chengdu', // 10.06: 254 MiB, 0.000065022375 FIL
  f019437: 'xfr-failed, Korea, Guro-gu', // 10.06: 254 MiB, 0.00006497525 FIL
  f022227: 'xfr-failed, China, Jiangsu', // 10.06: 254 MiB, 0.000064958625 FIL
  f022836: 'xfr-failed, China, Chongqing', // 10.06: 254 MiB, 0 FIL
  f022969: 'xfr-failed, China, Chengdu', // 10.06: 254 MiB, 0.0000648725 FIL 

  // Error

  f08019: 'error, China, Yantai, 三合', // 10.06: failed to initiate data transfer: deal data transfer failed: response rejected
  f010247: 'error, China, Yantai', // 10.06: failed to initiate data transfer: deal data transfer failed: response rejected
  f019022: "error, China, Xi'an", // 10.06: failed to initiate data transfer: deal data transfer failed: response rejected
  f021339: 'error, China, Jiaxing', // 10.06: failed to initiate data transfer: deal data transfer failed: response rejected

  // Timeout during ask

  f02299: 'timeout-ask, China, Dongguan, Yolo', // 10.06
  f02654: "timeout-ask, China, Shanghai", // 10.07
  f03328: "timeout-ask, China, Xinxiang", // 10.07
  f03340: "timeout-ask, China, Xi'an", // 10.07
  f08285: "timeout-ask, Latvia, Riga, stander", // 10.07
  f015897: 'timeout-ask, China, Guangdong', // 10.06
  f019099: "timeout-ask, China, Hong Kong", // 10.07
  f019362: "timeout-ask, China, Hangzhou", // 10.07
  f024030: "timeout-ask, Korea, Gwangju", // 10.07

}

export default annotations
