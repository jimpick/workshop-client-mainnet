// Slingshot test results
//
// Additional testing with files > 128MiB in size

const annotations = {
  // Candidates

  f01240: "candidate, Netherlands, HidNand",
  f01280: "candidate, China, Wuxi, 了凡超算",
  f01287: "candidate, China, Jiaxing, MaiTian",
  f01289: "candidate, China, Hangzhou + USA",
  f02381: "candidate, China, Dongguan, 西野七濑迷叔",
  f02387: "candidate, Canada, Brampton, NBFS Canada",
  f02399: "candidate, China, Zhejiang",
  f02405: "candidate, China, Shenzhen",
  f02415: "candidate, China, Hong Kong",
  f02423: "candidate, Ukraine, Kyiv, igowreck",
  f02500: "candidate, Korea, Seongnam-si",
  f02501: "candidate, USA, Portland, 6block",
  f02514: "candidate, USA, Portland, 6block",
  f02576: "candidate, Denmark, Gjerlev, BenjaminH",
  f02619: "candidate, China, Beijing, Blockcasting",
  f02620: "candidate, Poland, Krakow, @magik6k",
  f02622: "candidate, USA, Portland, 6block",
  f02623: "candidate, USA, Portland, 6block",
  f02633: "candidate, China, Hong Kong",
  f02645: "candidate, China, Hong Kong",
  f02668: "candidate, China, Chengdu",
  f03194: "candidate, China, Shenzhen, 成都云存&Npool",
  f03328: "candidate, China, Xinxiang",
  f03347: "candidate, China, Shenzhen",
  f03488: "candidate, Korea, Geumcheon-gu",
  f03491: "candidate, China, Hong Kong",
  f03624: "candidate, Germany, Chemnitz, ode",
  f05315: "candidate, USA, Portland, 6block",
  f05316: "candidate, USA, Portland, 6block",
  f05664: "candidate, China, Shenzhen, 艾比特网络科技",
  f07819: "candidate, China, Wuxi, YC--wuxi",
  f07850: "candidate, USA, Portland, 6block",
  f07919: "candidate, China, Beijing, Shanghai, Hunan",
  f07990: "candidate, China, Hong Kong",
  f07998: "candidate, China, Hangzhou",
  f08025: "candidate, China, Hong Kong",
  f08240: "candidate, Russia, Novosibirsk, Rabinovitch",
  f08285: "candidate, Latvia, Riga, stander",
  f08383: "candidate, USA, Portland, 6block",
  f08403: "candidate, UK, Lower Slaughter",
  f08482: "candidate, USA, Athol, @why",
  f09569: "candidate, China, Beijing",
  f09693: "candidate, USA, Portland + Singapore",
  f09696: "candidate, USA, Portland + Singapore",
  f09848: "candidate, USA",
  f010088: "candidate, DNS:purumine.com",
  f010241: "candidate, China, Beijing + USA, Portland",
  f010253: "candidate, China, Beijing + USA, Portland",
  f010257: "candidate, China, Hong Kong, DNS:feiyuipfs.com",
  f010479: "candidate, France, Fontenay-sous-Bois",
  f010493: "candidate, China, Shanghai",
  f010501: "candidate, China, Hangzhou",
  f010505: "candidate, China, Wuhan",
  f010507: "candidate, China, Hangzhou",
  f010523: "candidate, China, Beijing",
  f010528: "candidate, China, Chongqing",
  f010617: "candidate, Canada, Surrey, @feiya200",
  f014365: "candidate, Australia, Marrickville + Japan, Heiwajima",
  f014409: "candidate, USA, Waxhaw",
  f014569: "candidate, NR",
  f015877: "candidate, China, Jiaxing + USA",
  f015927: "candidate, USA, East Islip",
  f018501: "candidate, China, Beijing",
  f018780: "candidate, Singapore + Germany, Frankfurt + USA",
  f018781: "candidate, Singapore + Germany, Frankfurt + USA",
  f018782: "candidate, Singapore + Germany, Frankfurt + USA",
  f018783: "candidate, Singapore + Germany, Frankfurt + USA",
  f018785: "candidate, Singapore + Germany, Frankfurt + USA",
  f019354: "candidate, Germany, Frankfurt",
  f019399: "candidate, Korea, Busan",
  f019661: "candidate, Russia, Pyatigorsk",
  f019824: "candidate, USA",
  f020385: "candidate, Korea, Incheon",
  f020605: "candidate, China, Yibin",
  f020608: "candidate, Russia",
  f020928: "candidate, China, Deyang + Singapore",
  f021265: "candidate, China, Wuhan",
  f022142: "candidate, USA, Queens",
  f022163: "candidate, NR",
  f022289: "candidate, China, Mianyang",
  f022352: "candidate, Norway, Borgen",
  f022566: "candidate, China, Nanchong",
  f022853: "candidate, China, Fuzhou",
  f023200: "candidate, China, Shanghai",
  f023490: "candidate, Ukraine, Kyiv",
  f023495: "candidate, China, Beijing + USA, Portland",
  f023565: "candidate, China, Fuzhou",
  f023660: "candidate, China, Fuzhou",
  f023662: "candidate, China, Fuzhou",
  f023678: "candidate, China, Jiaxing",
  f023825: "candidate, USA, Portland",
  f023853: "candidate, China, Fuzhou",
  f023854: "candidate, China, Fuzhou",
  f023855: "candidate, China, Fuzhou",
  f023971: "candidate, USA, @Brian Y",
  f024015: "candidate, USA, Portland",
  f024016: "candidate, USA, Portland",
  f024146: "candidate, China, Fuzhou",
  f024147: "candidate, China, Fuzhou",
  f024148: "candidate, China, Fuzhou",
  f024156: "candidate, USA",
  f025017: "candidate, China, Hefei",
  f025025: "candidate, China, Qingdao",
  f029404: "candidate, USA, Portland + New Castle",
  f030184: "candidate, USA, Aliquippa",

  // Testing

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
