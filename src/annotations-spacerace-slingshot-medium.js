// Slingshot test results
//
// Additional testing with files > 128MiB in size

const annotations = {
  // Candidates

  f01280: "candidate, China, Wuxi, 了凡超算",
  f01287: "candidate, China, Jiaxing, MaiTian",
  f01289: "candidate, China, Hangzhou + USA",
  f02381: "candidate, China, Dongguan, 西野七濑迷叔",
  f02423: "candidate, Ukraine, Kyiv, igowreck",
  f02500: "candidate, Korea, Seongnam-si",
  f02620: "candidate, Poland, Krakow, @magik6k",
  f02668: "candidate, China, Chengdu",
  f03194: "candidate, China, Shenzhen, 成都云存&Npool",
  f03328: "candidate, China, Xinxiang",
  f05316: "candidate, USA, Portland, 6block",
  f05664: "candidate, China, Shenzhen, 艾比特网络科技",
  f07819: "candidate, China, Wuxi, YC--wuxi",
  f07919: "candidate, China, Beijing, Shanghai, Hunan",
  f08240: "candidate, Russia, Novosibirsk, Rabinovitch",
  f08403: "candidate, UK, Lower Slaughter",
  f09569: "candidate, China, Beijing",
  f09696: "candidate, USA, Portland + Singapore",
  f09848: "candidate, USA",
  f010088: "candidate, DNS:purumine.com",
  f010507: "candidate, China, Hangzhou",
  f010528: "candidate, China, Chongqing",
  f018783: "candidate, Singapore + Germany, Frankfurt + USA",
  f019399: "candidate, Korea, Busan",
  f020608: "candidate, Russia",
  f022142: "candidate, USA, Queens",
  f022163: "candidate, NR",
  f023490: "candidate, Ukraine, Kyiv",
  f023495: "candidate, China, Beijing + USA, Portland",
  f023565: "candidate, China, Fuzhou",
  f023660: "candidate, China, Fuzhou",
  f023854: "candidate, China, Fuzhou",
  f024156: "candidate, USA",
  f025017: "candidate, China, Hefei",
  f029404: "candidate, USA, Portland + New Castle",
  f030184: "candidate, USA, Aliquippa",

  // Testing

  f01240: "testing, Netherlands, HidNand",
  f02387: "testing, Canada, Brampton, NBFS Canada",
  f02399: "testing, China, Zhejiang",
  f02405: "testing, China, Shenzhen",
  f02415: "testing, China, Hong Kong",
  f02501: "testing, USA, Portland, 6block",
  f02514: "testing, USA, Portland, 6block",
  f02576: "testing, Denmark, Gjerlev, BenjaminH",
  f02619: "testing, China, Beijing, Blockcasting",
  f02622: "testing, USA, Portland, 6block",
  f02623: "testing, USA, Portland, 6block",
  f02633: "testing, China, Hong Kong",
  f02645: "testing, China, Hong Kong",
  f03347: "testing, China, Shenzhen",
  f03488: "testing, Korea, Geumcheon-gu",
  f03491: "testing, China, Hong Kong",
  f03624: "testing, Germany, Chemnitz, ode",
  f05315: "testing, USA, Portland, 6block",
  f07850: "testing, USA, Portland, 6block",
  f07990: "testing, China, Hong Kong",
  f07998: "testing, China, Hangzhou",
  f08025: "testing, China, Hong Kong",
  f08285: "testing, Latvia, Riga, stander",
  f08383: "testing, USA, Portland, 6block",
  f08482: "testing, USA, Athol, @why",
  f09693: "testing, USA, Portland + Singapore",
  f010241: "testing, China, Beijing + USA, Portland",
  f010253: "testing, China, Beijing + USA, Portland",
  f010257: "testing, China, Hong Kong, DNS:feiyuipfs.com",
  f010479: "testing, France, Fontenay-sous-Bois",
  f010493: "testing, China, Shanghai",
  f010501: "testing, China, Hangzhou",
  f010505: "testing, China, Wuhan",
  f010523: "testing, China, Beijing",
  f010617: "testing, Canada, Surrey, @feiya200",
  f014365: "testing, Australia, Marrickville + Japan, Heiwajima",
  f014409: "testing, USA, Waxhaw",
  f014569: "testing, NR",
  f015877: "testing, China, Jiaxing + USA",
  f015927: "testing, USA, East Islip",
  f018501: "testing, China, Beijing",
  f018780: "testing, Singapore + Germany, Frankfurt + USA",
  f018781: "testing, Singapore + Germany, Frankfurt + USA",
  f018782: "testing, Singapore + Germany, Frankfurt + USA",
  f018785: "testing, Singapore + Germany, Frankfurt + USA",
  f019354: "testing, Germany, Frankfurt",
  f019661: "testing, Russia, Pyatigorsk",
  f019824: "testing, USA",
  f020385: "testing, Korea, Incheon",
  f020605: "testing, China, Yibin",
  f020928: "testing, China, Deyang + Singapore",
  f021265: "testing, China, Wuhan",
  f022289: "testing, China, Mianyang",
  f022352: "testing, Norway, Borgen",
  f022566: "testing, China, Nanchong",
  f022853: "testing, China, Fuzhou",
  f023200: "testing, China, Shanghai",
  f023662: "testing, China, Fuzhou",
  f023678: "testing, China, Jiaxing",
  f023825: "testing, USA, Portland",
  f023853: "testing, China, Fuzhou",
  f023855: "testing, China, Fuzhou",
  f023971: "testing, USA, @Brian Y",
  f024015: "testing, USA, Portland",
  f024016: "testing, USA, Portland",
  f024146: "testing, China, Fuzhou",
  f024147: "testing, China, Fuzhou",
  f024148: "testing, China, Fuzhou",
  f025025: "testing, China, Qingdao",

// Active

  f01152: 'active, China, Beijing',
  f01234: 'active, Belgium, De Klinge, Eliovp',
  f01238: 'active, Vietnam, Hanoi, FILECOIN-VIETNAM',
  f01241: 'active, USA, Portland, 6block',
  f01247: 'active, Canada, Montreal, BigChungus™',
  f01272: 'active, Singapore',
  f01276: 'active, Canada, Brampton, NBFS Canada',
  f01278: 'active, USA, Grand Rapids, MiMiner',
  f01799: 'active, China, Jinan, TokenHome',
  f01800: 'active, China, Shenzhen + Chengdu',
  f02301: 'active, USA',
  f02388: 'active, Netherlands, Amersfoort, Kroketje',
  f02401: 'active, Canada, Chambly, NBFS Canada',
  f02421: 'active, China, Deyang + Singapore, 腾盛科技',

  // Sealing

  f01155: 'sealing, China, Shanghai, DianCun Tech',
  f02665: 'sealing, Netherlands, Amsterdam, fm-ops',
  f03222: 'sealing, China, Yuncheong',
  f010498: 'sealing, China, Shenzhen',
  f020398: 'sealing, China, Zhangjiakou',
  f020541: 'sealing, China, Shanghai',
  f021483: 'sealing, China, Beijing',
  f022070: 'sealing, China, Jieyang',
  f022125: 'sealing, China, Shenzhen',
  f023573: 'sealing, Japan, Kumamoto',
  f023858: 'sealing, China, Fuzhou',
  f023859: 'sealing, China, Fuzhou',
  f023861: 'sealing, China, Fuzhou',
  f023868: 'sealing, China, Fuzhou',
  f023869: 'sealing, China, Fuzhou',
  f023870: 'sealing, China, Fuzhou',
  f023871: 'sealing, China, Fuzhou',
  f023876: 'sealing, China, Fuzhou',
  f023928: 'sealing, China, Fuzhou',
  f023943: 'sealing, USA, Ashburn',
  f023977: 'sealing, China, Fuzhou',
  f023978: 'sealing, China, Fuzhou',
  f023980: 'sealing, China, Fuzhou',
  f023981: 'sealing, China, Fuzhou',
  f024006: 'sealing, China, Fuzhou',
  f024007: 'sealing, China, Fuzhou',
  f024008: 'sealing, China, Fuzhou',
  f024012: 'sealing, China, Fuzhou',
  f024013: 'sealing, China, Fuzhou',
  f024014: 'sealing, China, Fuzhou',
  f024081: 'sealing, China, Fuzhou',
  f024084: 'sealing, China, Fuzhou',
  f024085: 'sealing, China, Fuzhou',
  f024136: 'sealing, China, Fuzhou',
  f024983: 'sealing, China, Hong Kong',
  f029425: 'sealing, NR',
  f029552: 'sealing, China, Changsha',
  f029595: 'sealing, China, Guangdong',
  f029619: 'sealing, China, Hefei',
  f029628: 'sealing, Australia, Brisbane',
  f030144: 'sealing, Korea, Gyeonggi-do',
  f030152: 'sealing, China, Changsha',
  f030219: 'sealing, China, Changsha',

  // Stuck - CheckForAcceptance


  // Min-size


  // min-ask


  // Error


  // Timeout during ask


  // Dial


  // XNR

  // Error during ask
}

export default annotations
