// Small file test results
//
// Additional testing will be performed with larger files with
// selected miners

const annotations = {
  // Retest

  f02514: 'retest, USA, Portland, 6block', // client node out of gas
  f02606: 'retest, China, Shanghai', // client node out of gas
  f03222: 'retest, China, Yuncheong, 星云矿池', // client node out of gas
  f03223: 'retest, USA', // client node out of gas
  f03340: "retest, China, Xi'an", // client node out of gas
  f03347: 'retest, China, Shenzhen', // client node out of gas
  f05316: 'retest, USA, Portland, 6block', // client node out of gas
  f06262: 'retest, China, Guangzhou', // client node out of gas
  f06775: 'retest, China, Shenzhen, IPSB&CAAP', // client node out of gas
  f07451: 'retest, China, Hangzhou', // client node out of gas
  f07710: 'retest, Hong Kong', // client node out of gas
  f07731: 'retest, NR', // client node out of gas
  f07752: 'retest, China, Dongguan', // client node out of gas
  f07756: 'retest, DNS:purumine.com', // client node out of gas
  f07772: 'retest, China, Dongguan', // client node out of gas
  f07774: 'retest, China, Shenzhen', // client node out of gas
  f07775: 'retest, China, Shenzhen', // client node out of gas
  f07827: 'retest, China, Wuhan, 天际合', // client node out of gas
  f07830: 'retest, Singapore', // client node out of gas
  f07843: 'retest, NR', // client node out of gas
  f07848: 'retest, China, Wuhan', // client node out of gas
  f07850: 'retest, USA, Portland, 6block', // client node out of gas
  f07857: 'retest, China, Zhengzhou', // client node out of gas
  f07924: 'retest, USA', // client node out of gas
  f07944: 'retest, China, Hangzhou, SupremeTreasure', // client node out of gas
  f07945: 'retest, China, Dongguan', // client node out of gas
  f07947: 'retest, China, Zhengzhou', // client node out of gas
  f09736: 'retest, China, Guangdong', // client node out of gas
  f09753: 'retest, Korea, Pyeongtaek-si', // client node out of gas
  f09761: 'retest, China, Beijing', // client node out of gas
  f09763: 'retest, China, Mianyang,  <13h', // client node out of gas
  f09792: 'retest, USA, Council Bluffs', // client node out of gas
  f09797: 'retest, China, Fuzhou', // client node out of gas
  f010523: 'retest, China, Beijing', // client node out of gas
  f014271: 'retest, China, Fuzhou', // client node out of gas
  f014281: 'retest, Netherlands, Permerend', // client node out of gas
  f014302: 'retest, China, Ningbo', // client node out of gas
  f014307: 'retest, China, Dongguan', // client node out of gas
  f014324: 'retest, Canada, Vancouver', // client node out of gas
  f014329: 'retest, China, Hong Kong', // client node out of gas
  f014335: 'retest, NR', // client node out of gas
  f014348: 'retest, Brazil, Sao Paulo', // client node out of gas
  f014366: 'retest, USA, Mountain View', // client node out of gas
  f014377: 'retest, China, Liaoning', // client node out of gas
  f014380: 'retest, China, Hangzhou + Wuhan + Singapore', // client node out of gas
  f014386: 'retest, Singapore', // client node out of gas
  f014388: 'retest, China, Guangdong', // client node out of gas
  f014407: 'retest, China, Shanghai', // client node out of gas
  f014419: 'retest, USA, San Diego', // client node out of gas
  f014420: 'retest, Russia, Samara', // client node out of gas
  f014425: 'retest, Singapore', // client node out of gas
  f014431: 'retest, Singapore', // client node out of gas
  f014432: 'retest, China, Chengdu', // client node out of gas
  f014436: 'retest, China, Chengdu', // client node out of gas
  f014478: 'retest, Finland', // client node out of gas
  f014483: 'retest, USA, Clarksville', // client node out of gas
  f014495: 'retest, China, Hong Kong', // client node out of gas
  f014514: 'retest, China, Fuzhou', // client node out of gas
  f014533: 'retest, China, Fuzhou', // client node out of gas
  f014547: 'retest, China, Fuzhou', // client node out of gas
  f014572: 'retest, USA', // client node out of gas
  f014606: 'retest, Australia, Sydney', // client node out of gas
  f014609: 'retest, China, Fuzhou', // client node out of gas
  f014632: 'retest, Canada', // client node out of gas
  f014640: 'retest, Hungary', // client node out of gas
  f014660: 'retest, Korea, Busan', // client node out of gas
  f014686: 'retest, Singapore', // client node out of gas
  f014699: 'retest, USA', // client node out of gas
  f014701: 'retest, China, Changzhou', // client node out of gas
  f014706: 'retest, China, Ordos', // client node out of gas
  f014744: 'retest, China, Taiyuan', // client node out of gas
  f014745: 'retest, China, Shenyang', // client node out of gas
  f014764: 'retest, Korea, Wanju', // client node out of gas
  f014778: 'retest, China, Ordos', // client node out of gas
  f014799: 'retest, China, Chongqing', // client node out of gas
  f015061: 'retest, Australia, Sydney', // client node out of gas
  f015231: 'retest, China, Wuxi', // client node out of gas
  f015655: 'retest, Korea, Geumcheon-gu', // client node out of gas
  f015685: 'retest, China, Shanghai', // client node out of gas
  f015709: 'retest, China, Hefei', // client node out of gas
  f015714: 'retest, China, Ordos', // client node out of gas
  f015720: 'retest, China, Ningbo', // client node out of gas
  f015732: 'retest, USA, Portland', // client node out of gas
  f015734: 'retest, China, Qingdao', // client node out of gas
  f015751: 'retest, Canada, Huron East', // client node out of gas
  f015756: 'retest, Finland, Helsinki', // client node out of gas
  f015760: 'retest, Kenya, Nairobi', // client node out of gas
  f015763: 'retest, South Africa, Cape Town', // client node out of gas
  f015771: 'retest, Brazil, Sao Paulo', // client node out of gas
  f015795: 'retest, Brazil, Sao Paulo', // client node out of gas
  f015797: 'retest, Germany, Rostock', // client node out of gas
  f015798: 'retest, Germany', // client node out of gas
  f015800: 'retest, Germany, Sankt Andreasberg', // client node out of gas
  f015802: 'retest, Germany', // client node out of gas
  f015803: 'retest, Germany', // client node out of gas
  f015804: 'retest, Germany, Ismaning', // client node out of gas
  f015805: 'retest, Germany', // client node out of gas
  f015807: 'retest, Germany', // client node out of gas
  f015808: 'retest, Germany', // client node out of gas
  f015809: 'retest, Germany', // client node out of gas
  f015810: 'retest, Germany', // client node out of gas
  f015818: 'retest, Netherlands', // client node out of gas
  f015819: 'retest, China, Fuzhou', // client node out of gas
  f015827: 'retest, Russia', // client node out of gas
  f015839: 'retest, China, Fuzhou', // client node out of gas
  f015846: 'retest, South Africa, Johannesburg', // client node out of gas
  f015877: 'retest, China, Jiaxing + USA', // client node out of gas
  f015941: 'retest, Ukraine, Kyiv', // client node out of gas
  f019041: 'retest, Singapore', // client node out of gas
  f019074: 'retest, China, Guangdong', // client node out of gas
  f019104: 'retest, Canada, Chambly', // client node out of gas
  f019354: 'retest, Germany, Frankfurt', // client node out of gas
  f019362: 'retest, China, Hangzhou', // client node out of gas
  f019437: 'retest, Korea, Guro-gu', // client node out of gas
  f020385: 'retest, Korea, Incheon', // client node out of gas
  f020398: 'retest, China, Zhangjiakou', // client node out of gas
  f020436: 'retest, China, Beijing', // client node out of gas
  f020489: 'retest, China, Lioaning', // client node out of gas
  f020541: 'retest, China, Shanghai', // client node out of gas
  f020608: 'retest, Russia', // client node out of gas
  f021262: 'retest, China, Shanghai', // client node out of gas
  f021274: 'retest, China, Shanghai', // client node out of gas
  f021870: 'retest, USA, Portland', // client node out of gas
  f022142: 'retest, USA, Queens', // client node out of gas
  f022853: 'retest, China, Fuzhou', // client node out of gas
  f023467: 'retest, Norway, Oslo', // client node out of gas
  f023843: 'retest, NR', // client node out of gas
  f023939: 'retest, NR', // client node out of gas
  f023971: 'retest, USA, @Brian Y', // client node out of gas

  // Active

  f01241: 'active, USA, Portland, 6block', // about 7 hours
  f02415: 'active, China, Hong Kong', // about 7 hours
  f02501: 'active, USA, Portland, 6block', // about 7 hours
  f02514: 'active, USA, Portland, 6block', // about 7 hours
  f02622: 'active, USA, Portland, 6block', // about 7 hours
  f02623: 'active, USA, Portland, 6block', // about 7 hours
  f02633: 'active, China, Hong Kong', // about 6 hours
  f02645: 'active, China, Hong Kong', // about 7 hours
  f03273: 'active, USA, Portland, 6block', // about 7 hours
  f03274: 'active, USA, Portland, 6block', // about 7 hours
  f03275: 'active, USA, Portland, 6block', // about 7 hours
  f05317: 'active, USA, Portland', // about 7 hours
  f08025: 'active, China, Hong Kong', // about 7 hours
  f08383: 'active, USA, Portland, 6block', // about 7 hours
  f09693: 'active, USA, Portland + Singapore', // about 7 hours
  f010253: 'active, China, Beijing + USA, Portland', // about 7 hours
  f018780: 'active, Singapore + Germany, Frankfurt + USA', // about 7 hours
  f018781: 'active, Singapore + Germany, Frankfurt + USA', // about 7 hours
  f018783: 'active, Singapore + Germany, Frankfurt + USA', // about 7 hours
  f024015: 'active, USA, Portland', // about 7 hours

  // Active-sealing (active, with in-flight sealing)

  f01234: 'active-sealing, Belgium, De Klinge, Eliovp',
  f01280: 'active-sealing, China, Wuxi, 了凡超算',
  f02299: 'active-sealing, China, Dongguan, Yolo',
  f02668: 'active-sealing, China, Chengdu',
  f03339: 'active-sealing, China, Luzhou, benxun',
  f07819: 'active-sealing, China, Wuxi, YC--wuxi',
  f08019: 'active-sealing, China, Yantai, 三合',
  f08474: 'active-sealing, China, Hong Kong',
  f010048: 'active-sealing, China, Shanghai',
  f010088: 'active-sealing, DNS:purumine.com',
  f010479: 'active-sealing, France, Fontenay-sous-Bois',
  f019100: 'active-sealing, Romania, Cluj-Napoca',
  f021710: 'active-sealing, China, Shijiazhuang',
  f023200: 'active-sealing, China, Shanghai',

  // Sealing

  f01238: 'sealing, Vietnam, Hanoi, FILECOIN-VIETNAM',
  f01247: 'sealing, Canada, Montreal, BigChungus™',
  f01272: 'sealing, Singapore',
  f01277: 'sealing, Sweden, Stockholm, tvsthlm',
  f01278: 'sealing, USA, Grand Rapids, MiMiner',
  f01799: 'sealing, China, Jinan, TokenHome',
  f01800: 'sealing, China, Shenzhen + Chengdu',
  f02301: 'sealing, USA',
  f02381: 'sealing, China, Dongguan, 西野七濑迷叔',
  f02388: 'sealing, Netherlands, Amersfoort, Kroketje',
  f02399: 'sealing, China, Zhejiang',
  f02405: 'sealing, China, Shenzhen',
  f02419: 'sealing, China, Shanghai, yuantai',
  f02625: 'sealing, China, Shanghai, IPFS星际工厂',
  f03222: 'sealing, China, Yuncheong, 星云矿池',
  f03224: 'sealing, Ukraine, Irpin, oboltusov',
  f03345: 'sealing, China, Fuzhou, chh',
  f03364: 'sealing, China, Guangzhou',
  f03482: 'sealing, China, Wuxi',
  f03491: 'sealing, China, Hong Kong',
  f03544: 'sealing, China, Guiyang',
  f04443: 'sealing, China, Shanghai, 罗良科技',
  f05315: 'sealing, USA, Portland, 6block',
  f07709: 'sealing, Korea, Dongjak-gu',
  f07919: 'sealing, China, Beijing, Shanghai, Hunan',
  f07990: 'sealing, China, Hong Kong',
  f08073: 'sealing, China, Qiqihar, QY7TT',
  f08157: 'sealing, China, Beijing + Germany, Frankfurt, 超星际',
  f08204: 'sealing, USA, St. Louis',
  f08264: 'sealing, China, Xianning',
  f08482: 'sealing, USA, Athol, @why',
  f09569: 'sealing, China, Beijing',
  f09696: 'sealing, USA, Portland + Singapore',
  f010063: 'sealing, China, Mianyang',
  f010084: 'sealing, China, Beijing',
  f010241: 'sealing, China, Beijing + USA, Portland',
  f010247: 'sealing, China, Yantai',
  f010257: 'sealing, China, Hong Kong, DNS:feiyuipfs.com',
  f010399: 'sealing, China, Guangzhou',
  f010400: 'sealing, China, Shenyang',
  f010438: 'sealing, USA',
  f010493: 'sealing, China, Shanghai',
  f010498: 'sealing, China, Shenzhen',
  f010505: 'sealing, China, Wuhan',
  f010507: 'sealing, China, Hangzhou',
  f010513: 'sealing, China, Chongqing',
  f010528: 'sealing, China, Chongqing',
  f014394: 'sealing, China, Suzhou',
  f014768: 'sealing, Singapore',
  f015233: 'sealing, China, Nanjing',
  f017665: 'sealing, China, Shenyang',
  f018785: 'sealing, Singapore + Germany, Frankfurt + USA',
  f020523: 'sealing, China, Suzhou',
  f021265: 'sealing, China, Wuhan',
  f021339: 'sealing, China, Jiaxing',
  f021540: 'sealing, Germany, Frankfurt, @hsanjuan',
  f021583: 'sealing, China, Jiaxing',
  f021616: 'sealing, China, Shanghai',
  f022125: 'sealing, China, Shenzhen',
  f022227: 'sealing, China, Jiangsu',
  f022753: 'sealing, China, Hong Kong',
  f022922: 'sealing, China, Shenzhen',
  f023179: 'sealing, China, Fuzhou',
  f023573: 'sealing, Japan, Kumamoto',
  f023647: 'sealing, Korea, Gangseo-gu',
  f023678: 'sealing, China, Jiaxing',
  f024066: 'sealing, NR',
  f024184: 'sealing, Korea, Gangnam-gu',
  f024468: 'sealing, China, Shenzhen',
  f024521: 'sealing, Korea, Gyeonggi-do',
  f024550: 'sealing, China, Wenzhou',
  f024800: 'sealing, China, Hong Kong',
  f024903: 'sealing, China, Mianyang',
  f024969: 'sealing, NR',
  f025007: 'sealing, Korea, Gyeonggi-do',
  f025017: 'sealing, China, Hefei',
  f025019: 'sealing, China, Taiwan, Hsinchu',
  f029421: 'sealing, China, Hong Kong',
  f029490: 'sealing, NR',
  f029552: 'sealing, China, Changsha',
  f029587: 'sealing, Hungary',
  f029619: 'sealing, China, Hefei',
  f030144: 'sealing, Korea, Gyeonggi-do',
  f030152: 'sealing, China, Changsha',
  f030158: 'sealing, China, Hangzhou',
  f030184: 'sealing, USA, Aliquippa',
  f030219: 'sealing, China, Changsha',
  f030226: 'sealing, China, Fuzhou',
  f030230: 'sealing, China, Sichuan',

  // Stuck

  f01240: 'stuck, Netherlands, HidNand', // CheckForAcceptance: about 3 hours
  f02654: 'stuck, China, Shanghai', // CheckForAcceptance: about 8 hours
  f03143: 'stuck, China, Shijiazhuang + Hong Kong', // CheckForAcceptance: about 8 hours
  f03363: 'stuck, Singapore', // CheckForAcceptance: about 8 hours
  f09731: 'stuck, China, Guiyang', // CheckForAcceptance: about 8 hours
  f09833: 'stuck, USA, San Jose', // CheckForAcceptance: about 5 hours
  f010035: 'stuck, Netherlands', // CheckForAcceptance: about 1 hour
  f010501: 'stuck, China, Hangzhou', // CheckForAcceptance: about 8 hours
  f015875: 'stuck, China, Fuzhou', // FundsEnsured: 35 minutes
  f015884: 'stuck, China, Fuzhou', // FundsEnsured: 35 minutes
  f017794: 'stuck, USA, Columbus', // FundsEnsured: 25 minutes
  f017795: 'stuck, USA, Columbus', // FundsEnsured: 25 minutes
  f018772: 'stuck, Australia', // CheckForAcceptance: about 5 hours
  f018884: 'stuck, Russia', // FundsEnsured: 23 minutes
  f019114: 'stuck, USA, Howell', // CheckForAcceptance: about 5 hours
  f019616: 'stuck, USA, Marlborough', // CheckForAcceptance: about 5 hours
  f019638: 'stuck, Germany, Frankfurt', // CheckForAcceptance: about 8 hours
  f019820: 'stuck, Germany', // FundsEnsured: 16 minutes
  f020928: 'stuck, China, Deyang + Singapore', // CheckForAcceptance: 13 minutes
  f021075: 'stuck, China, Chengdu', // CheckForAcceptance: 12 minutes
  f021255: 'stuck, China, Suzhou + Netherlands', // CheckForAcceptance: 11 minutes
  f021346: 'stuck, China, Shanghai', // CheckForAcceptance: 11 minutes
  f021357: 'stuck, China, Shanghai', // CheckForAcceptance: 11 minutes
  f021444: 'stuck, China, Guangzhou', // CheckForAcceptance: 11 minutes
  f021535: 'stuck, China, Chengdu', // FundsEnsured: 11 minutes
  f021580: 'stuck, NR', // FundsEnsured: 10 minutes
  f022015: 'stuck, China, Hangzhou', // FundsEnsured: 10 minutes
  f022031: 'stuck, China, Maoming', // CheckForAcceptance: 10 minutes
  f022072: 'stuck, China, Jieyang', // CheckForAcceptance: 10 minutes
  f022089: 'stuck, China, Beijing', // CheckForAcceptance: about 5 hours
  f022202: 'stuck, USA, Howell', // CheckForAcceptance: about 5 hours
  f022276: 'stuck, Korea, Seoul', // FundsEnsured: 10 minutes
  f022289: 'stuck, China, Mianyang', // CheckForAcceptance: 9 minutes
  f022313: 'stuck, NR', // FundsEnsured: 9 minutes
  f022791: 'stuck, NR', // FundsEnsured: 8 minutes
  f022834: 'stuck, NR', // FundsEnsured: 8 minutes
  f022911: 'stuck, China, Hong Kong', // FundsEnsured: 8 minutes
  f022926: 'stuck, NR', // FundsEnsured: 7 minutes
  f022967: 'stuck, Korea, Seoul', // CheckForAcceptance: 7 minutes
  f022996: 'stuck, NR', // FundsEnsured: 7 minutes
  f023013: 'stuck, China, Hong Kong', // CheckForAcceptance: 7 minutes
  f023181: 'stuck, DNS:poseidon.technology', // FundsEnsured: 7 minutes
  f023190: 'stuck, China, Hefei', // FundsEnsured: 7 minutes
  f023205: 'stuck, NR', // FundsEnsured: 6 minutes
  f023210: 'stuck, China, Dongguan', // FundsEnsured: 6 minutes
  f023229: 'stuck, China, Shandong', // FundsEnsured: 6 minutes
  f023463: 'stuck, NR', // CheckForAcceptance: 6 minutes
  f023482: 'stuck, NR', // FundsEnsured: 6 minutes
  f023495: 'stuck, China, Beijing + USA, Portland', // CheckForAcceptance: 6 minutes
  f023535: 'stuck, China, Hong Kong', // FundsEnsured: 6 minutes
  f023560: 'stuck, NR', // FundsEnsured: 6 minutes
  f023571: 'stuck, NR', // CheckForAcceptance: about 8 hours
  f023581: 'stuck, China, Hong Kong', // FundsEnsured: 6 minutes
  f023583: 'stuck, Korea, Guri-si', // FundsEnsured: 6 minutes
  f023626: 'stuck, NR', // FundsEnsured: 5 minutes
  f023643: 'stuck, NR', // FundsEnsured: 5 minutes
  f023649: 'stuck, Korea, Seoul', // CheckForAcceptance: 5 minutes
  f023651: 'stuck, NR', // FundsEnsured: 5 minutes
  f023655: 'stuck, Australia, Brisbane', // FundsEnsured: 5 minutes
  f023798: 'stuck, China, Shanghai', // CheckForAcceptance: 5 minutes
  f023825: 'stuck, USA, Portland', // CheckForAcceptance: 5 minutes
  f023868: 'stuck, China, Fuzhou', // CheckForAcceptance: 4 minutes
  f023869: 'stuck, China, Fuzhou', // CheckForAcceptance: 4 minutes
  f023870: 'stuck, China, Fuzhou', // CheckForAcceptance: 4 minutes
  f023965: 'stuck, NR', // FundsEnsured: 4 minutes
  f024016: 'stuck, USA, Portland', // CheckForAcceptance: 4 minutes
  f024031: 'stuck, NR', // FundsEnsured: 4 minutes
  f024070: 'stuck, Japan, Setagaya-ku', // CheckForAcceptance: 4 minutes
  f024074: 'stuck, NR', // FundsEnsured: 3 minutes
  f024101: 'stuck, China, Guiyang', // FundsEnsured: 3 minutes
  f024129: 'stuck, China, Zhejiang', // FundsEnsured: 3 minutes
  f024137: 'stuck, NR', // FundsEnsured: 3 minutes
  f024150: 'stuck, UK, Mansfield', // FundsEnsured: 3 minutes
  f024156: 'stuck, USA', // CheckForAcceptance: 3 minutes
  f024190: 'stuck, China, Wenzhou', // FundsEnsured: 3 minutes
  f024483: 'stuck, NR', // FundsEnsured: 3 minutes
  f024556: 'stuck, NR', // FundsEnsured: 3 minutes
  f024557: 'stuck, NR', // FundsEnsured: 3 minutes
  f024558: 'stuck, NR', // FundsEnsured: 3 minutes
  f024559: 'stuck, NR', // FundsEnsured: 3 minutes
  f024563: 'stuck, NR', // FundsEnsured: 3 minutes
  f024565: 'stuck, Korea, Incheon', // FundsEnsured: 3 minutes
  f024893: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: 2 minutes
  f024902: 'stuck, Korea, Incheon', // CheckForAcceptance: about 5 hours
  f024985: 'stuck, China, Shenzhen', // FundsEnsured: 2 minutes
  f025002: 'stuck, NR', // FundsEnsured: 2 minutes
  f025008: 'stuck, Korea, Gyeonggi-do', // FundsEnsured: 2 minutes
  f029368: 'stuck, Korea, Gangseo-gu', // CheckForAcceptance: 2 minutes
  f029556: 'stuck, China, Wuxi', // CheckForAcceptance: about 5 hours
  f029628: 'stuck, Australia, Brisbane', // CheckForAcceptance: about 8 hours
  f030188: 'stuck, China, Yangjiang', // CheckForAcceptance: about 8 hours
  f030278: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 8 hours

  // Busy

  // New

  // Min Size

  f02500: 'min-size, Korea, Seongnam-si', // 131072 < 134217728
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 131072 < 1073741824
  f02606: 'min-size, China, Shanghai', // 131072 < 134217728
  f02620: 'min-size, Poland, Krakow, @magik6k', // 131072 < 536870912
  f03624: 'min-size, Germany, Chemnitz, ode', // 131072 < 134217728
  f05664: 'min-size, China, Shenzhen, 艾比特网络科技', // 131072 < 134217728
  f08403: 'min-size, UK, Lower Slaughter', // 131072 < 134217728
  f014409: 'min-size, USA, Waxhaw', // 131072 < 524288000
  f018501: 'min-size, China, Beijing', // 131072 < 134217728
  f020605: 'min-size, China, Yibin', // 131072 < 134217728
  f022352: 'min-size, Norway, Borgen', // 131072 < 268435456
  f022832: 'min-size, China', // 131072 < 134217728
  f023660: 'min-size, China, Fuzhou', // 131072 < 134217728
  f023662: 'min-size, China, Fuzhou', // 131072 < 134217728
  f023853: 'min-size, China, Fuzhou', // 131072 < 134217728
  f023854: 'min-size, China, Fuzhou', // 131072 < 134217728
  f023855: 'min-size, China, Fuzhou', // 131072 < 134217728
  f024127: 'min-size, China, Fuzhou', // 131072 < 134217728
  f024146: 'min-size, China, Fuzhou', // 131072 < 134217728
  f024147: 'min-size, China, Fuzhou', // 131072 < 134217728
  f025025: 'min-size, China, Qingdao', // 131072 < 134217728
  f029404: 'min-size, USA, Portland + New Castle', // 131072 < 134217728

  // Min Ask

  f07998: 'min-ask, China, Hangzhou', // 20000000 < 61035156
  f09848: 'min-ask, USA', // 20000000 < 1220703125
  f010617: 'min-ask, Canada, Surrey, @feiya200', // 20000000 < 12207031250000000000000000
  f022163: 'min-ask, NR', // 20000000 < 12207031250000000000000000

  // Error

  f01276: 'error, Canada, Brampton, NBFS Canada', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f01279: 'error, China, Sichuan',
  f01287: 'error, China, Jiaxing, MaiTian',
  f02305: 'error, China, Dongguan',
  f02387: 'error, Canada, Brampton, NBFS Canada', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f02401: 'error, Canada, Chambly, NBFS Canada', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f02423: 'error, Ukraine, Kyiv, igowreck', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f02619: 'error, China, Beijing, Blockcasting', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f02767: 'error, Germany, Frankfurt',
  f02772: 'error, China, Chengdu', // stream reset
  f03176: 'error, USA, San Mateo, Five Star-Helmsman&Heiben', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f03194: 'error, China, Shenzhen, 成都云存&Npool',
  f07824: 'error, China, Shanghai', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f07987: 'error, China, Beijing',
  f08136: "error, China, Xi'an",
  f08229: 'error, China, Nanchang',
  f08371: 'error, China, Chengdu', // failed to initiate data transfer: deal data transfer failed: response rejected
  f08532: 'error, USA',
  f09639: 'error, China, Fuzhou',
  f09689: 'error, USA, Portland',
  f09770: "error, China, Xi'an", // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f010010: 'error, China, Changzhou + Hong Kong',
  f010405: 'error, China, Foshan', // EOF
  f010446: 'error, Netherlands', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f010512: 'error, China, Zhengzhou', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 1.372770716970385006 FIL, balance: 1.346274281252783987 FIL): validation failure
  f010558: 'error, China, Shenzhen + Hong Kong',
  f014440: 'error, Hong Kong',
  f014569: 'error, NR',
  f015647: 'error, China, Shenzhen',
  f015753: 'error, China, Guyuan',
  f015767: 'error, Russia, Khabarovsk + Japan, Khabarovsk + USA',
  f017734: 'error, Australia, Sydney', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f018311: "error, China, Xi'an, <23h",
  f018518: "error, China, Xi'an",
  f018782: 'error, Singapore + Germany, Frankfurt + USA',
  f018784: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f019118: 'error, China, Jiaxing',
  f019243: 'error, USA, Jackson',
  f019399: 'error, Korea, Busan',
  f019824: 'error, USA',
  f020904: 'error, Korea, Uijeongbu-si',
  f020923: 'error, China, Cangzhou',
  f020993: 'error, China, Hong Kong',
  f021328: 'error, China, Dongguan', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f022119: 'error, USA, Lovettsville', // deal failed: (State=26) deal data verification failed: error generating CommP: failed to build treeCaused by:    0: failed to create data store    1: No such file or directory (os error 2)
  f022130: 'error, Korea, Seodaemun-gu',
  f022261: 'error, China, Luzhou',
  f022287: 'error, China, Dongguan',
  f022376: 'error, China, Dongguan',
  f022395: 'error, USA, Los Angeles',
  f022512: 'error, Canada, Embrun',
  f022841: 'error, China, Zhongshan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 11.419984826608791163 FIL, balance: 11.338357011046283292 FIL): validation failure
  f022855: 'error, Finland, Helsinki',
  f023207: 'error, undefined',
  f023490: 'error, Ukraine, Kyiv',
  f023565: 'error, China, Fuzhou', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f023661: 'error, China, Zhejiang',
  f024025: 'error, China, Chengdu',
  f024130: 'error, Korea',
  f024526: 'error, Korea', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.627883260614740504 FIL, balance: 0.09533579735187667 FIL): validation failure
  f024617: 'error, Korea, Bucheon-si',
  f024944: 'error, Korea, Yeongdeungpo-dong',
  f029529: 'error, China, Dongguan',
  f029649: 'error, China, Beijing',

  // Dial backoff

  f02540: 'backoff, USA, Rochester',
  f08109: 'backoff, USA, qianyuanyunshuo',
  f09555: 'backoff, Australia, Sydney',
  f09631: 'backoff, China, Changzhou',
  f09808: 'backoff, China, Fuzhou',
  f010308: 'backoff, Germany, Frankfurt',
  f014464: 'backoff, China, Hangzhou + Singapore',
  f023518: 'backoff, China, Taiyuan',

  // Rejected

  f01152: 'rejected, China, Beijing', // syntax error at /home/gc/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /home/gc/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /home/gc/dealfilter.pl line 17.
  f01154: 'rejected, Sweden, Alvsjo',
  f01235: 'rejected, Singapore, IPFSMain',
  f01243: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  f01248: 'rejected, Germany, Frankfurt + China, Guangdong',
  f01291: 'rejected, Sweden, Stockholm, tvsthlm',
  f01475: 'rejected, China, Wuhan + Germany',
  f01782:
    'rejected, China, Hong Kong + Singapore + USA, Portland, hellofil.com',
  f02303: 'rejected, China, Hong Kong + Jiangsu + Netherlands',
  f02417: 'rejected, China, Liaoning', // sh: 1: jq: not found
  f02420: 'rejected, China, Wuhan',
  f02421: 'rejected, China, Deyang + Singapore, 腾盛科技', // Deals from client wallet f3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a are not welcome
  f02422: "rejected, China, Xi'an",
  f02438: 'rejected, Singapore',
  f02490: 'rejected, China, Fujian', // syntax error at /root/.lotusstorage/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /root/.lotusstorage/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /root/.lotusstorage/dealfilter.pl line 23.
  f02503: 'rejected, China, Wuhan',
  f02520: 'rejected, China, Hong Kong + Dongguan',
  f02529: 'rejected, China, Chongqing',
  f02609: 'rejected, USA',
  f02613: 'rejected, China, Chongqing',
  f02614: 'rejected, Singapore',
  f02626: 'rejected, China, Guangzhou + Hong Kong',
  f02627: 'rejected, China, Guilin',
  f02723: 'rejected, China, Hong Kong',
  f02770: 'rejected, China, Hong Kong', // deal.Proposal.Client(t3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a) not in whitelist
  f02838: 'rejected, China, Chengdu, IPFS Harbor-星际港湾',
  f03002: 'rejected, China, Chongqing',
  f03131: 'rejected, China, Changsha',
  f03144: 'rejected, Germany, Frankfurt',
  f03269: 'rejected, Australia',
  f03326: 'rejected, USA, Seattle',
  f03328: 'rejected, China, Xinxiang',
  f03344: 'rejected, China, Guangzhou',
  f03358: 'rejected, Singapore',
  f03362: 'rejected, Germany, Berlin',
  f03367: 'rejected, Singapore',
  f03485: 'rejected, Netherlands',
  f03488: 'rejected, Korea, Geumcheon-gu', // no online
  f03519: 'rejected, USA',
  f07969: 'rejected, China, Hangzhou, FME',
  f08091: 'rejected, USA', // syntax error at /home/gc/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /home/gc/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /home/gc/dealfilter.pl line 17.
  f08103: 'rejected, China, Foshan, 花生酱肠粉',
  f08197: 'rejected, China, Foshan',
  f08203: 'rejected, Germany, Frankfurt',
  f08207: 'rejected, Australia, Brisbane',
  f08399: 'rejected, USA, Sammamish',
  f08572: 'rejected, Brazil, Sao Paulo',
  f08985: 'rejected, USA',
  f09037: 'rejected, Singapore',
  f09087: 'rejected, USA',
  f09565: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  f09605: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  f09620: 'rejected, China, Weifang',
  f09642: 'rejected, Sweden, Alvsjo',
  f09652: 'rejected, Singapore',
  f09675: 'rejected, China, Weifang',
  f09710: 'rejected, China, Jieyang',
  f09737: 'rejected, USA, Sudbury',
  f09825: 'rejected, China, Jinhua',
  f09964: 'rejected, China, Beijing + Jiaxing',
  f010005: 'rejected, China, Zhongshan',
  f010038: 'rejected, China, Hangzhou + Singapore',
  f010056: 'rejected, Singapore',
  f010202: 'rejected, Singapore',
  f010225: 'rejected, China, Ordos',
  f010254: 'rejected, Japan, Minamata',
  f010299: 'rejected, China, Yibin',
  f010419: 'rejected, China, Sichuan',
  f010491: 'rejected, China, Shenzhen',
  f010538: 'rejected, China, Ordos',
  f010616: 'rejected, China, Ordos + Singapore',
  f014233: 'rejected, China, Shanghai',
  f014251: 'rejected, Singapore',
  f014327: 'rejected, China, Ningbo',
  f014365: 'rejected, Australia, Marrickville + Japan, Heiwajima',
  f014395: 'rejected, China, Dongguan',
  f014472: 'rejected, China, Ningbo',
  f014487: 'rejected, China, Shanghai',
  f014683: 'rejected, China, Shenzhen',
  f014793: 'rejected, China, Hangzhou',
  f014804: 'rejected, China, Ordos',
  f014805: 'rejected, China, Ningbo',
  f014813: 'rejected, China, Hangzhou + USA',
  f015726: 'rejected, China, Qingdao',
  f015737: 'rejected, Brazil, Sao Paulo',
  f015747: 'rejected, Japan, Setagaya-ku',
  f015782: 'rejected, Australia',
  f015860: 'rejected, Ukraine, Odessa',
  f015861: 'rejected, Ukraine, Odessa',
  f015862: 'rejected, Ukraine, Odessa',
  f015919: 'rejected, China, Ordos',
  f015925: 'rejected, China, Ordos',
  f015942: 'rejected, China, Ningbo',
  f016398: 'rejected, Singapore',
  f016412: 'rejected, China, Taiwan, Taipei',
  f016563: 'rejected, China, Deyang', // Deals from client wallet f3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a are not welcome
  f017229: 'rejected, USA, Portland',
  f019099: 'rejected, China, Hong Kong',
  f019229: 'rejected, USA, Queens',
  f019279: 'rejected, Canada, Calgary',
  f019422: 'rejected, South Africa, Johannesburg',
  f019661: 'rejected, Russia, Pyatigorsk',
  f020315: 'rejected, China, Guangzhou',
  f020378: 'rejected, Bulgaria, Asenovgrad',
  f020522: 'rejected, Singapore',
  f020648: 'rejected, China, Shenzhen',
  f020742: 'rejected, China, Shanghai + Hangzhou + Shaoxing',
  f020747: 'rejected, China, Xiamen',
  f021316: 'rejected, China, Yangzhou',
  f021461: 'rejected, China, Yangzhou + Singapore', // getting client market balance failed
  f021479: 'rejected, China, Qingdao',
  f021525: 'rejected, China, Guangdong',
  f021532: 'rejected, China, Shanghai',
  f021695: 'rejected, USA',
  f021714: 'rejected, China, Hong Kong',
  f021716: 'rejected, New Zealand, Wellington', // no online
  f021976: 'rejected, NR',
  f022309: 'rejected, Korea, Chuncheon', // no online
  f022373: 'rejected, Singapore',
  f022374: 'rejected, NR',
  f022399: 'rejected, China, Beijing',
  f022566: 'rejected, China, Nanchong',
  f022913: 'rejected, Korea, Uiwang', // no online
  f023462: 'rejected, China, Chengdu',
  f023530: 'rejected, China, Shanghai',
  f023534: 'rejected, China, Chongqing',
  f023627: 'rejected, China, Zhongwei',
  f023858: 'rejected, China, Fuzhou',
  f023859: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023861: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023871: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023876: 'rejected, China, Fuzhou',
  f023928: 'rejected, China, Fuzhou',
  f023977: 'rejected, China, Fuzhou',
  f023978: 'rejected, China, Fuzhou',
  f023980: 'rejected, China, Fuzhou',
  f023981: 'rejected, China, Fuzhou',
  f023982: 'rejected, China, Chongqing',
  f023983: 'rejected, China, Chongqing',
  f023984: 'rejected, China, Chongqing',
  f023985: 'rejected, China, Chongqing',
  f024006: 'rejected, China, Fuzhou',
  f024007: 'rejected, China, Fuzhou',
  f024008: 'rejected, China, Fuzhou',
  f024012: 'rejected, China, Fuzhou',
  f024013: 'rejected, China, Fuzhou',
  f024014: 'rejected, China, Fuzhou',
  f024081: 'rejected, China, Fuzhou',
  f024084: 'rejected, China, Fuzhou',
  f024085: 'rejected, China, Fuzhou',
  f024136: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024148: 'rejected, China, Fuzhou',
  f024611: 'rejected, China, Dongguan',

  // Dial errors

  f01012: 'dial, China, Hong Kong + Guangzhou', // * [/ip4/127.0.0.1/tcp/8888] dial tcp4 127.0.0.1:8888: connect: connection refused  * [/ip4/43.230.90.191/tcp/8888] dial tcp4 43.230.90.191:8888: connect: connection refused  * [/ip4/183.60.252.190/tcp/8888] dial tcp4 183.60.252.190:8888: connect: connection refused
  f01100: 'dial, Serbia, Belgrade, filmine.io', // * [/ip4/93.86.63.113/tcp/12345] dial tcp4 93.86.63.113:12345: connect: connection refused
  f01151: 'dial, USA, Waxhaw',
  f01155: 'dial, China, Shanghai, DianCun Tech', // * [/ip4/203.107.44.156/tcp/39770] dial tcp4 0.0.0.0:41211->203.107.44.156:39770: i/o timeout
  f01229: 'dial, China, Hong Kong', // * [/ip4/43.231.187.27/tcp/1374] dial tcp4 0.0.0.0:40157->43.231.187.27:1374: i/o timeout
  f01231: 'dial, Singapore', // * [/ip4/116.236.73.152/tcp/10240] dial tcp4 116.236.73.152:10240: connect: connection refused
  f01236: 'dial, Singapore',
  f01275: 'dial, Korea, Seongnam-si',
  f01288: 'dial, China, Yibin, BlackStone', // * [/ip4/101.206.243.3/tcp/39695] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWEGMhF2ARqkVRB2zJVTjpstvLKbkuu9nZ1QeCRyTsAM9n, but remote key matches 12D3KooWCAtg67oL9r7bD1HWfHS2YqgjMvESpgX9sA6A9QvgSpHe
  f01289: 'dial, China, Hangzhou + USA',
  f01801: 'dial, Switzerland, Baar, Gogoșel, DNS:akasha.network', // * [/ip4/46.101.187.50/tcp/10222] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHMxq8H6gBb1nxH6YknwX1ZsisFBTgtKJJTWfruBKNKA8, but remote key matches 12D3KooWDXMs6HMEdL7ein6hBWJHv42g7VMGWwUEgH8gYZ8kELYT
  f02307: 'dial, China, Taiyuan, filecoin.monster', // * [/ip4/34.92.71.77/tcp/12345] dial tcp4 0.0.0.0:41211->34.92.71.77:12345: i/o timeout
  f02383: 'dial, China, Shenzhen', // * [/ip4/183.60.90.5/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKzBf1z9Tm6rW1RUXfmPVooKYxan8NzjRmYq9iF8QZsJu, but remote key matches 12D3KooWSD4BWsHzUgnMnDEAMrLpyQAPFQsyHp9KR5a9A2P1hFbc
  f02386: 'dial, Latvia, Riga',
  f02400: 'dial, China, Beijing', // * [/ip4/36.112.26.4/tcp/47996] dial tcp4 36.112.26.4:47996: connect: connection refused
  f02403: 'dial, UK, London, AIM',
  f02414: "dial, China, Xi'an, zhejiangyunchu", // * [/ip4/113.142.1.86/tcp/56768] dial tcp4 113.142.1.86:56768: connect: connection refused
  f02416: 'dial, China, Guangdong, 星际无限', // * [/ip4/103.142.248.7/tcp/2347] dial tcp4 0.0.0.0:41211->103.142.248.7:2347: i/o timeout
  f02418: 'dial, China, Fujian + Netherlands', // * [/ip4/117.48.133.69/tcp/1348] dial tcp4 0.0.0.0:40157->117.48.133.69:1348: i/o timeout  * [/ip4/185.232.59.180/tcp/1348] dial tcp4 0.0.0.0:40157->185.232.59.180:1348: i/o timeout
  f02425: 'dial, USA',
  f02492: 'dial, China, Shenzhen', // * [/ip4/103.142.248.7/tcp/3347] dial tcp4 0.0.0.0:41211->103.142.248.7:3347: i/o timeout
  f02505: 'dial, China, Wuhan', // * [/ip4/101.32.33.237/tcp/18899] dial tcp4 0.0.0.0:41211->101.32.33.237:18899: i/o timeout
  f02516: 'dial, China, Hong Kong',
  f02519: 'dial, Brazil, Sao Paulo', // * [/ip4/52.67.40.200/tcp/10240] dial tcp4 0.0.0.0:41211->52.67.40.200:10240: i/o timeout
  f02528: 'dial, China, Hong Kong + Inner Mongolia',
  f02532: 'dial, Singapore', // * [/ip4/170.33.12.117/tcp/8007] dial tcp4 0.0.0.0:40157->170.33.12.117:8007: i/o timeout
  f02533: 'dial, Spain, Terrassa, LowFeeValidation.com',
  f02534: 'dial, China, Beijing', // * [/ip4/123.58.99.210/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQEAUZycQ6zXsGtQd74vzTkCfPD8rQzWFnbUvK6Qenarc, but remote key matches 12D3KooWCYNTXskYDLQM7rRydZDGAfLiCPfneN1NjmnCBXpMBW49
  f02574: 'dial, Japan, Minamata', // * [/ip4/203.189.40.203/tcp/10250] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWDxS9DwK3FRT3Kf3tSN5j9jMqVg29Vx4GXu3uM9rDzGm2, but remote key matches 12D3KooWKAEN1NS8msS2LBg2c6cLMBFP4BnZLdsHMCz5z85a8fhT
  f02577: 'dial, China, Hong Kong + Russia, Khabarovsk + Japan, Heiwajima',
  f02607: 'dial, China, Beijing', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f02610: 'dial, Netherlands',
  f02621: "dial, China, Xi'an", // * [/ip4/113.200.194.196/tcp/32633] dial tcp4 0.0.0.0:40157->113.200.194.196:32633: i/o timeout
  f02624: 'dial, China, Shanghai, filecoin.cn', // * [/ip4/61.173.81.255/tcp/65501] dial tcp4 0.0.0.0:41211->61.173.81.255:65501: i/o timeout
  f02632: 'dial, China, Tianjin',
  f02657: 'dial, China, Ordos-xfr', // * [/ip4/1.183.72.226/tcp/12308] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLTNxtSBmMCy7VNXNSE8tZVPURHB2onSRTpJqkjWGEitm, but remote key matches 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg
  f02658: 'dial, China, Ningbo, bluematrix', // * [/ip4/123.137.128.188/tcp/3698] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRxbE66sHsxoSSE6uLybmNqXWFPKBdk6QC7KPoSZFx8Xy, but remote key matches 12D3KooWRVsiRe1qEUbpA1YeWoeMRBj3T4EBz1cxSWF6hfV8tELv  * [/ip4/112.15.188.130/tcp/3698] dial tcp4 0.0.0.0:41211->112.15.188.130:3698: i/o timeout
  f02664: 'dial, China, Hangzhou, ciger', // * [/ip4/111.0.120.74/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLfsqniYPeGBvMZN7StQzhgzTG9TB6M2gTNsvs5eDiTQM, but remote key matches 12D3KooWQb1CpdSujwXeyMJroR8qAkekXiZdNXVPKqis5ENXZGVw
  f02665: 'dial, Netherlands, Amsterdam, fm-ops', // * [/ip4/139.178.82.157/tcp/15432] dial tcp4 139.178.82.157:15432: connect: connection refused
  f02721: 'dial, USA',
  f02725: 'dial, China, Hong Kong', // * [/ip4/101.32.38.57/tcp/18899] dial tcp4 101.32.38.57:18899: connect: connection refused
  f02726: 'dial, USA, Brooklyn', // * [/ip4/169.62.51.212/tcp/14567] dial tcp4 0.0.0.0:40157->169.62.51.212:14567: i/o timeout
  f02731: 'dial, Singapore', // * [/ip4/10.30.8.4/tcp/14567] dial tcp4 0.0.0.0:41211->10.30.8.4:14567: i/o timeout
  f02732: 'dial, USA',
  f02755: 'dial, China, Shijiazhuang',
  f02773: 'dial, China, Chengdu', // * [/ip4/118.123.228.198/tcp/48633] dial tcp4 118.123.228.198:48633: connect: connection refused
  f03021: 'dial, China, Hong Kong', // * [/ip4/34.96.185.143/tcp/10240] dial tcp4 34.96.185.143:10240: connect: connection refused  * [/ip4/27.213.97.148/tcp/10240] dial tcp4 0.0.0.0:40157->27.213.97.148:10240: i/o timeout
  f03120: 'dial, China, Guangzhou', // * [/ip4/0.0.0.0/tcp/34566] dial tcp4 0.0.0.0:34566: connect: connection refused
  f03134: 'dial, China, Cangzhou, 乔木信息',
  f03136: "dial, China, Xi'an, Zhejiang Yun Chu Technology Co., Ltd, sat", // * [/ip4/47.57.8.77/tcp/18557] dial tcp4 0.0.0.0:40157->47.57.8.77:18557: i/o timeout
  f03140: 'dial, China, QingDao', // * [/ip4/61.147.123.83/tcp/12222] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGmqm4wXHomWgVABsyRksKz5VXXVSApcceT1ocVBfsaCL, but remote key matches 12D3KooWEwibwjtCTXD4UALEpJU65LStZg8thKDFUxzjyTzGHssq
  f03149: 'dial, USA, Newton',
  f03220: 'dial, China, Ordos', // * [/ip4/1.183.72.226/tcp/12309] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBgi9gSUH7kw88Ko8miGjRWjJrNF2gmkMjy6gchtxgJbL, but remote key matches 12D3KooWDxu2JXzsnxz2L9ZWRXNBypcpQcduWwqmSZfu5EawCDmZ
  f03225: 'dial, China, Guyuan', // * [/ip4/10.100.0.2/tcp/11111] dial tcp4 10.100.0.2:11111: i/o timeout
  f03245: 'dial, USA, Los Angeles', // * [/ip4/120.133.36.67/tcp/23456] dial tcp4 0.0.0.0:41211->120.133.36.67:23456: i/o timeout
  f03266: 'dial, USA', // * [/ip4/169.63.27.151/tcp/14567] dial tcp4 0.0.0.0:41211->169.63.27.151:14567: i/o timeout
  f03276: 'dial, China, Dongguan',
  f03286: 'dial, China, Mianyang',
  f03287: 'dial, USA',
  f03302: 'dial, China, Chengdu', // * [/ip4/182.150.0.20/tcp/5428] dial tcp4 0.0.0.0:41211->182.150.0.20:5428: i/o timeout
  f03305: 'dial, Kenya, Nairobi',
  f03306: 'dial, Australia',
  f03307: 'dial, Australia',
  f03312: 'dial, China, Beijing',
  f03314: 'dial, China, Zhangjiakou-xfr',
  f03317: 'dial, China, Shenzhen + Hong Kong + Jieyang',
  f03320: 'dial, bcm', // * [/ip4/183.36.3.160/tcp/11850] dial tcp4 183.36.3.160:11850: connect: connection refused
  f03325: 'dial, Germany, Frankfurt',
  f03327: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.51/tcp/7000] dial tcp4 0.0.0.0:40157->197.231.176.51:7000: i/o timeout
  f03337: 'dial, China, Sichuan, 朝日&网科巨力',
  f03350: 'dial, China, Wuhan', // * [/ip4/170.33.12.187/tcp/7000] dial tcp4 0.0.0.0:40157->170.33.12.187:7000: i/o timeout  * [/ip4/170.33.12.188/tcp/7000] failed to negotiate security protocol: read tcp4 10.0.1.9:40157->170.33.12.188:7000: read: connection reset by peer
  f03351: 'dial, China, Chengdu', // * [/ip4/182.140.253.150/tcp/10000] dial tcp4 0.0.0.0:40157->182.140.253.150:10000: i/o timeout
  f03359: 'dial, China, Shanghai',
  f03360: 'dial, China, Shaanxi', // * [/ip4/111.19.155.65/tcp/23451] dial tcp4 0.0.0.0:40157->111.19.155.65:23451: i/o timeout
  f03365: 'dial, China, Wuhan + Wuxi',
  f03366: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7000] failed to negotiate security protocol: EOF
  f03427: 'dial, Russia, airalab',
  f03484: 'dial, Netherlands', // * [/ip4/89.149.209.98/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLQrbDFJ4D4i1KcSNqDa64qYMVAmGB2Thiw4xNkwRkgvy, but remote key matches 12D3KooWL6hvc8aM5BTQLHP7w4Qig6RJbU3sQJVD5pW7JFowakNN
  f03490: 'dial, China, Dongguan', // * [/ip4/121.12.167.179/tcp/41113] dial tcp4 121.12.167.179:41113: connect: connection refused
  f03512: 'dial, New Zealand, Auckland, NZFILECOIN01',
  f03515: 'dial, China, Dongguan',
  f03517: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7082] failed to negotiate security protocol: EOF
  f03523: 'dial, China, Wuxi, YC--wuxi',
  f03548: 'dial, Singapore', // * [/ip4/8.209.82.79/tcp/14567] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWE5wkzEfF4zkww8CD1aU9Dvq6c26smunqnK5mJQXuu9ot, but remote key matches 12D3KooWExdbgcJnR1JYaThHyyS8eGSzM3Y2BSpTn1YsKF3MPz7b
  f03620: 'dial, Germany, Frankfurt', // * [/ip4/23.90.146.133/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGVzpdJUqbWmDEuY683SGSdBjUHdpLCwEfB9VvYzKp9LG, but remote key matches 12D3KooWR8VP6fPqS21Rpxo23FE6h425sQEzvtMNJ7jPWLAo3drk
  f03630: 'dial, China, Wuhan',
  f03638: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f03646: 'dial, China, Beijing, JingTang', // * [/ip4/123.125.194.158/tcp/5678] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHaT6Kh6GZgpZ47hK99FnZnTRa3pbSNsy1fMUDGFyczj8, but remote key matches 12D3KooWQb5w1q9YKogjAzrizGTveaSU6b51JFEFr92qx1uyNGkk
  f03702: 'dial, China, Shenzhen + Singapore, LianDongJingLing',
  f03764: 'dial, China, Beijing, foobar', // * [/ip4/123.115.217.138/tcp/24002] dial tcp4 0.0.0.0:40157->123.115.217.138:24002: i/o timeout
  f03766: 'dial, China, Weifang',
  f04921: 'dial, China, Shanghai', // * [/ip4/121.46.237.2/tcp/51818] dial tcp4 121.46.237.2:51818: connect: connection refused
  f07806: 'dial, China, Wuhan, HelloXP', // * [/ip4/58.211.11.131/tcp/1024] dial tcp4 58.211.11.131:1024: connect: connection refused
  f07810: 'dial, Korea',
  f07826: 'dial, China, Shenzhen, 星际医生',
  f07829: 'dial, Japan',
  f07833: 'dial, China, Changzhou, 星巢',
  f07851: 'dial, Netherlands, Purmerend',
  f07956: 'dial, Russia',
  f07961: 'dial, China, Changzhou',
  f07982: 'dial, China, Shenzhen', // * [/ip4/116.30.196.110/tcp/36980] dial tcp4 0.0.0.0:40157->116.30.196.110:36980: i/o timeout
  f07991: 'dial, China, Changsha',
  f08006: 'dial, China, Shaanxi', // * [/ip4/111.19.129.175/tcp/23456] dial tcp4 0.0.0.0:40157->111.19.129.175:23456: i/o timeout
  f08032: 'dial, China, Weifang', // * [/ip4/111.17.220.237/tcp/6666] dial tcp4 111.17.220.237:6666: connect: connection refused  * [/ip4/111.17.220.235/tcp/6666] dial tcp4 111.17.220.235:6666: connect: connection refused
  f08040: 'dial, Australia, Sydney',
  f08042: 'dial, Brazil, Sao Paulo', // * [/ip4/76.223.3.225/tcp/23456] dial tcp4 0.0.0.0:40157->76.223.3.225:23456: i/o timeout
  f08047: 'dial, China, Hangzhou', // * [/ip4/101.71.125.162/tcp/7654] dial tcp4 0.0.0.0:40157->101.71.125.162:7654: i/o timeout
  f08063: 'dial, China, Huizhou', // * [/ip4/113.81.68.244/tcp/12345] dial tcp4 0.0.0.0:40157->113.81.68.244:12345: i/o timeout
  f08076: 'dial, Netherlands, Alphen aan den Rijn, Ang',
  f08088: 'dial, China, Dongguan', // * [/ip4/183.240.203.135/tcp/10240] dial tcp4 183.240.203.135:10240: connect: connection refused
  f08094: 'dial, China, Guangzhou, dongshao',
  f08096: 'dial, China, Wuhan',
  f08101: 'dial, China, Wuxi', // * [/ip4/47.245.136.114/tcp/7000] dial tcp4 0.0.0.0:40157->47.245.136.114:7000: i/o timeout  * [/ip4/47.88.10.179/tcp/7000] dial tcp4 0.0.0.0:40157->47.88.10.179:7000: i/o timeout
  f08135: 'dial, Singapore', // * [/ip4/170.33.12.118/tcp/12345] dial tcp4 0.0.0.0:40157->170.33.12.118:12345: i/o timeout
  f08139: 'dial, China, Shanghai', // * [/ip4/218.79.124.15/tcp/45454] dial tcp4 0.0.0.0:40157->218.79.124.15:45454: i/o timeout
  f08148: 'dial, China, Shanghai',
  f08149: 'dial, China, Jiangmen', // * [/ip4/183.36.3.160/tcp/60015] dial tcp4 183.36.3.160:60015: connect: connection refused
  f08150: 'dial, China, Hangzhou',
  f08161: 'dial, China, Weifang', // * [/ip4/111.17.220.234/tcp/6677] dial tcp4 111.17.220.234:6677: connect: connection refused
  f08170: 'dial, China, Jieyang',
  f08178: 'dial, China, Jiaxing, CAAP-金华', // * [/ip4/61.174.253.25/tcp/2346] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJpwXVGUapvX4nqP1GoAD4eAxobaogY5ZAWC9vfQPUByN, but remote key matches 12D3KooWBKWMoLD3JfU3F9Bobj8c5Ro4fxSb5wqnCRkbFW1mq87o
  f08199: 'dial, USA, Sudbury', // * [/ip4/108.49.193.174/tcp/32002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCbSR2uAa6JhQyfchhBbJd78HXAw7ApsG8HLdBPQEmbNB, but remote key matches 12D3KooWHPScnNKJQyDxMiL8E6y8gTvXm1qg6cUdK9tpjTM1Z49Q
  f08205: 'dial, Brazil, Sao Paulo', // * [/ip4/169.57.182.19/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHfc4VZ321w7MmZYbmMDdkMw3D4h83Ar3q8MEMjLq69PL, but remote key matches 12D3KooWEfyR3PyQidJ2GgBV6Vvncguotx7xi9GRbFvi8RBoytMu
  f08220: 'dial, China, Shenzhen',
  f08235:
    'dial, China, Beijing + Jiaxing + Germany, Frankfurt, 星河华讯&中科星际', // * [/ip4/103.103.177.172/tcp/5678] dial tcp4 0.0.0.0:40157->103.103.177.172:5678: i/o timeout
  f08240: 'dial, Russia, Novosibirsk, Rabinovitch',
  f08242: 'dial, China, Weifang', // * [/ip4/47.242.56.117/tcp/6789] dial tcp4 47.242.56.117:6789: connect: connection refused
  f08243: 'dial, USA, Queens',
  f08257: 'dial, China, Ningbo + USA, Boardman', // * [/ip4/161.117.88.227/tcp/44173] dial tcp4 0.0.0.0:40157->161.117.88.227:44173: i/o timeout  * [/ip4/161.117.249.226/tcp/44173] dial tcp4 0.0.0.0:40157->161.117.249.226:44173: i/o timeout
  f08285: 'dial, Latvia, Riga, stander', // * [/ip4/109.73.97.103/tcp/10240] dial tcp4 0.0.0.0:41211->109.73.97.103:10240: i/o timeout
  f08289: 'dial, Canada, Embrun',
  f08293: 'dial, China, Xinxiang', // * [/ip4/27.50.142.73/tcp/1347] dial tcp4 27.50.142.73:1347: connect: connection refused
  f08295: 'dial, China, Suzhou, IPFS Cloud', // * [/ip4/222.92.5.150/tcp/40699] dial tcp4 0.0.0.0:40157->222.92.5.150:40699: i/o timeout
  f08301: 'dial, Japan, Setagaya-ku, MEIK',
  f08330: 'dial, China, Chengdu, oursoft', // * [/ip4/125.69.0.37/tcp/55009] dial tcp4 125.69.0.37:55009: connect: connection refused
  f08338: 'dial, China, Weifang',
  f08344: 'dial, UK, Hartlepool', // * [/ip4/82.15.108.46/tcp/51437] dial tcp4 0.0.0.0:40157->82.15.108.46:51437: i/o timeout
  f08346: 'dial, Korea',
  f08347: 'dial, China, Chengdu',
  f08358: 'dial, China, Shenzhen', // * [/ip4/119.123.208.233/tcp/45437] dial tcp4 0.0.0.0:40157->119.123.208.233:45437: i/o timeout
  f08384:
    'dial, China, Shandong + Hong Kong + Japan, Heiwajima + Russia, Khabarovsk', // * [/ip4/172.247.228.122/tcp/9999] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSNsVcwPC2FXp3bbV9MyAbi35igscSJh6gb8MkFsyxiy2, but remote key matches 12D3KooWD38od1j4abLotnfpALNPZt3TdjmQ1HqSiQBe1qZpnrCc  * [/ip4/66.42.38.110/tcp/9990] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSNsVcwPC2FXp3bbV9MyAbi35igscSJh6gb8MkFsyxiy2, but remote key matches 12D3KooWD38od1j4abLotnfpALNPZt3TdjmQ1HqSiQBe1qZpnrCc  * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: connection refused
  f08396: 'dial, France, Fontenay-sous-Bois',
  f08405: 'dial, China, Guangdong', // * [/ip4/183.232.116.201/tcp/4001] dial tcp4 183.232.116.201:4001: connect: connection refused
  f08418: 'dial, China, Chansha + USA',
  f08446: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMfLgpGWM87mLbrkNuN6FQ6zExMvzECDSV4qy7FKDqNvq, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f08448: 'dial, China, Guangdong', // * [/ip4/183.232.116.202/tcp/4001] dial tcp4 183.232.116.202:4001: connect: connection refused
  f08481: 'dial, USA, Berkeley',
  f08497: 'dial, Brazil, Sao Paulo', // * [/ip4/18.231.148.87/tcp/46717] dial tcp4 0.0.0.0:40157->18.231.148.87:46717: i/o timeout
  f08568: 'dial, USA, Waxhaw, Meatball Part II',
  f08684: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:40157->182.99.0.109:23450: i/o timeout
  f08685: 'dial, China, Fuzhou',
  f08788: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:40157->182.99.0.103:23450: i/o timeout
  f08793: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:40157->182.99.0.99:23450: i/o timeout
  f08854: 'dial, China, Dongguan', // * [/ip4/121.12.162.85/tcp/10000] dial tcp4 0.0.0.0:40157->121.12.162.85:10000: i/o timeout
  f08895: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f08904: 'dial, China, Deyang', // * [/ip4/125.64.78.27/tcp/4004] dial tcp4 125.64.78.27:4004: connect: connection refused
  f08908: 'dial, USA', // * [/ip4/216.18.214.92/tcp/6666] dial tcp4 0.0.0.0:40157->216.18.214.92:6666: i/o timeout
  f08917: 'dial, China, Beijing',
  f08928: 'dial, USA, Arlington, theartist',
  f08937: 'dial, China, Wuxi, YC--wuxi',
  f08949: 'dial, Norway, Oslo', // * [/ip4/151.252.13.190/tcp/37374] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWE1ubdqszJxdjAAVcZcx2x1PJUNFbNDm52jFkeJoAaPYh, but remote key matches 12D3KooWMpuRzgVuRS6m285cucGgnXWwTnsNtGzjsMJeEqS7UtJw
  f08953: 'dial, China, Fuzhou',
  f08958: 'dial, China, Fuzhou', // * [/ip4/182.99.0.108/tcp/23450] dial tcp4 0.0.0.0:40157->182.99.0.108:23450: i/o timeout
  f08986: 'dial, China, Ordos', // * [/ip4/1.183.72.226/tcp/12308] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCLPAPTjCYyCMBBnv5MkJCaV1o6mawJLha4wdAGkMH1Yq, but remote key matches 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg
  f08991: 'dial, China, Ili', // * [/ip4/124.88.170.140/tcp/16000] dial tcp4 0.0.0.0:40157->124.88.170.140:16000: i/o timeout
  f08995: 'dial, China, Fuzhou',
  f09002: 'dial, Singapore', // * [/ip4/113.200.194.196/tcp/32634] dial tcp4 0.0.0.0:41211->113.200.194.196:32634: i/o timeout
  f09005: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:40157->182.99.0.101:23450: i/o timeout
  f09029: 'dial, China, Wuhan',
  f09036: 'dial, China, Chengdu, CD-oursoft', // * [/ip4/125.69.0.37/tcp/55019] dial tcp4 125.69.0.37:55019: connect: connection refused
  f09048: 'dial, China, Fuzhou',
  f09056: 'dial, China, Shenzhen, SZSQ1', // * [/ip4/119.139.197.93/tcp/20030] dial tcp4 119.139.197.93:20030: connect: connection refused
  f09077: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:40157->218.85.126.210:23450: i/o timeout
  f09082: 'dial, Australia, Canberra',
  f09088: 'dial, China, Changsha', // * [/ip4/175.10.160.70/tcp/13470] dial tcp4 0.0.0.0:40157->175.10.160.70:13470: i/o timeout
  f09091: 'dial, Netherlands', // * [/ip4/185.232.59.179/tcp/2347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLdKXN3LuTbRqgyvSCxCByPifZDTp1p7hLCtQEgwo4uM6, but remote key matches 12D3KooWJDvwMPfJ1ct9V6JpgRrdA7DWEEfcWSQAWCYbRrNxnXYi
  f09261: 'dial, Brazil, Sao Paulo',
  f09523: 'dial, China, Beijing', // * [/ip4/8.210.13.50/tcp/45678] dial tcp4 8.210.13.50:45678: connect: connection refused  * [/ip4/119.161.169.68/tcp/45678] dial tcp4 0.0.0.0:40157->119.161.169.68:45678: i/o timeout
  f09537: 'dial, USA, El Monte',
  f09559: 'dial, Canada, Waterloo',
  f09560: 'dial, Ukraine, Odessa, Wondertan (combined)', // * [/ip4/178.212.192.216/tcp/64002] dial tcp4 178.212.192.216:64002: i/o timeout
  f09561: 'dial, China, Beijing',
  f09573: 'dial, China, Xiamen', // * [/ip4/121.204.250.253/tcp/4567] dial tcp4 121.204.250.253:4567: connect: connection refused
  f09589: 'dial, China, Changsha',
  f09592: 'dial, Japan, Minamata', // * [/ip4/203.189.40.203/tcp/10252] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHrm2Ej8kE29FZ5tABnzzWMeeUqz6UWiG6WfECxEBTJyr, but remote key matches 12D3KooWSpji7fDLrXGiM9Gbcy8tzCTYk5ed7ukmaTAznnLMxqGf
  f09597: 'dial, China, Shanghai', // * [/ip4/47.52.20.42/tcp/8046] failed to negotiate security protocol: EOF
  f09619: 'dial, China, Shanghai',
  f09643: 'dial, China, Beijing',
  f09653: 'dial, China, Chengdu', // * [/ip4/47.242.94.248/tcp/6667] dial tcp4 47.242.94.248:6667: connect: connection refused
  f09656: 'dial, Ukraine, Odessa', // * [/ip4/218.60.28.136/tcp/43368] dial tcp4 218.60.28.136:43368: connect: connection refused
  f09664: 'dial, Australia, Sydney',
  f09671: 'dial, China, Chongqing', // * [/ip4/113.207.109.184/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMdh1of4D5YPvY4g3Y2pCf6mpQvgHx9kg55RvkJdRmP6z, but remote key matches 12D3KooWPw6phtaL2ftZq7wQLjc6z1YoVou4BK48ZzXk3TVNVPjK
  f09672: 'dial, China, Chengdu', // * [/ip4/110.185.107.124/tcp/21735] dial tcp4 110.185.107.124:21735: connect: connection refused
  f09680: 'dial, Japan, Ebisunishi',
  f09704: 'dial, China, Shenzhen',
  f09721: 'dial, ???, CD-oursoft-1', // * [/ip4/125.69.0.37/tcp/55029] dial tcp4 125.69.0.37:55029: connect: connection refused
  f09723: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:40157->218.85.126.210:23450: i/o timeout
  f09729: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/41112] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPumWWQP2mt3t7czSPDq67Fs19Xen3fcSfurqgnTVieAF, but remote key matches 12D3KooWFKKhmTQyDpXH8HFnUZhVjsu2f8r96m5dFkqJnWxFozc5
  f09734: 'dial, China, Dongguan', // * [/ip4/121.12.167.179/tcp/41113] dial tcp4 121.12.167.179:41113: connect: connection refused
  f09748: 'dial, China, Tianjin',
  f09771: 'dial, China, Hangzhou', // * [/ip4/47.57.8.77/tcp/6785] dial tcp4 0.0.0.0:40157->47.57.8.77:6785: i/o timeout
  f09789: 'dial, USA',
  f09801: 'dial, China, Fuzhou', // * [/ip4/182.99.0.108/tcp/23450] dial tcp4 0.0.0.0:43207->182.99.0.108:23450: i/o timeout
  f09809: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:43207->182.99.0.101:23450: i/o timeout
  f09810: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:43207->182.99.0.103:23450: i/o timeout
  f09811: 'dial, China, Dongguan', // * [/ip4/113.105.174.7/tcp/10000] dial tcp4 0.0.0.0:43207->113.105.174.7:10000: i/o timeout
  f09813: 'dial, China, Fuzhou',
  f09814: 'dial, China, Fuzhou',
  f09817: 'dial, China, Fuzhou',
  f09828: 'dial, NR',
  f09830: 'dial, Korea, Geumcheon-gu', // * [/ip4/121.140.143.29/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWEgLZVWfuy9vrTAre3xcnQdKG7vXh3gkwRXzZbdBc9pnF, but remote key matches 12D3KooWSsjSaxoN3tdeWo4y9g34ptm3m7VmhoLvig1WXarkTPEj
  f09838: 'dial, Russia, Irkutsk',
  f09859: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f09969: 'dial, China, Guangzhou', // * [/ip4/183.2.157.250/tcp/1029] dial tcp4 183.2.157.250:1029: connect: connection refused
  f09972: 'dial, Finland, Helsinki',
  f09983: 'dial, China, Guangzhou', // * [/ip4/183.2.157.214/tcp/888] dial tcp4 183.2.157.214:888: connect: connection refused
  f09985: 'dial, China, Qingdao',
  f010015: 'dial, China, Taizhou', // * [/ip4/47.254.31.111/tcp/23456] dial tcp4 0.0.0.0:43207->47.254.31.111:23456: i/o timeout  * [/ip4/47.254.145.29/tcp/23456] dial tcp4 0.0.0.0:43207->47.254.145.29:23456: i/o timeout
  f010020: 'dial, China, Chongqing',
  f010032: 'dial, China, Fuzhou', // * [/ip4/182.99.0.103/tcp/23450] dial tcp4 0.0.0.0:43207->182.99.0.103:23450: i/o timeout
  f010152: 'dial, Germany-cfa',
  f010170: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:43207->182.99.0.109:23450: i/o timeout
  f010223: 'dial, China, Ordos',
  f010224: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:43207->182.99.0.102:23450: i/o timeout
  f010230: 'dial, China, Beijing',
  f010238: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23455] dial tcp4 110.80.33.138:23455: connect: connection refused
  f010268: 'dial, China, Hangzhou', // * [/ip4/47.57.8.77/tcp/8001] dial tcp4 0.0.0.0:38721->47.57.8.77:8001: i/o timeout
  f010270: 'dial, China, Shijiazhuang', // * [/ip4/111.224.179.91/tcp/2233] dial tcp4 0.0.0.0:38721->111.224.179.91:2233: i/o timeout
  f010274: 'dial, China, Fuzhou',
  f010276: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f010287: 'dial, China, Fuzhou', // * [/ip4/182.99.0.97/tcp/23450] dial tcp4 0.0.0.0:38721->182.99.0.97:23450: i/o timeout
  f010289: 'dial, China, Fuzhou', // * [/ip4/182.99.0.96/tcp/23450] dial tcp4 0.0.0.0:38721->182.99.0.96:23450: i/o timeout
  f010291: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:43207->182.99.0.98:23450: i/o timeout
  f010298: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:34511->182.99.0.102:23450: i/o timeout
  f010311: 'dial, Korea, Hwaseong-si',
  f010362: 'dial, Brazil, Sao Paulo',
  f010372: 'dial, Brazil, Sao Paulo', // * [/ip4/52.67.22.220/tcp/46717] dial tcp4 0.0.0.0:34511->52.67.22.220:46717: i/o timeout
  f010374: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAUYDipKeDFH92NqD4RxxUGUZJtiUwH5YD9scLwnavVXP, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f010398: 'dial, Korea, Yeongdeungpo-dong',
  f010411: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f010424: 'dial, Australia, Sydney', // * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:34511->43.241.189.214:39438: i/o timeout
  f010449: 'dial, China, Jiangmen', // * [/ip4/183.36.3.160/tcp/60007] dial tcp4 183.36.3.160:60007: connect: connection refused
  f010495: 'dial, China, Tainjin',
  f010496: 'dial, China, Guangzhou', // * [/ip4/183.2.157.213/tcp/666] dial tcp4 183.2.157.213:666: connect: connection refused
  f010516: 'dial, Brazil, Sao Paulo', // * [/ip4/18.230.25.100/tcp/18888] dial tcp4 0.0.0.0:34511->18.230.25.100:18888: i/o timeout
  f010527: 'dial, China, Shanghai',
  f010533: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12319] dial tcp4 0.0.0.0:34511->47.57.188.137:12319: i/o timeout
  f010541: 'dial, China, Chengdu', // * [/ip4/110.185.107.117/tcp/21736] dial tcp4 110.185.107.117:21736: connect: connection refused  * [/ip4/110.185.107.23/tcp/21735] dial tcp4 110.185.107.23:21735: connect: connection refused
  f010553: 'dial, China, Ordos',
  f010579: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.194/tcp/23450] dial tcp4 0.0.0.0:34511->45.192.184.194:23450: i/o timeout
  f010586: 'dial, China, Fuzhou', // * [/ip4/45.192.184.197/tcp/23450] dial tcp4 0.0.0.0:34511->45.192.184.197:23450: i/o timeout
  f010593: 'dial, USA, East Islip',
  f010598: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/10002] dial tcp4 99.250.201.0:10002: i/o timeout
  f010600: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f010606: 'dial, China, Fuzhou', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:34511->45.192.184.195:23450: i/o timeout
  f010607: 'dial, China, Guangzhou',
  f010608: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:34511->182.99.0.101:23450: i/o timeout
  f010609: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/36666] dial tcp4 0.0.0.0:34511->182.99.0.100:36666: i/o timeout
  f010613: 'dial, Canada, Waterloo',
  f014230: 'dial, China, Fuzhou', // * [/ip4/185.23.181.67/tcp/23450] dial tcp4 0.0.0.0:34511->185.23.181.67:23450: i/o timeout
  f014241: 'dial, Norway, Borgen', // * [/ip4/0.0.0.0/tcp/1347] dial tcp4 0.0.0.0:1347: connect: connection refused  * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNczL8NwzKEd2Np4uiDs42GB3pKcmoABTdM8JJ8v9MRGB, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f014246: 'dial, China, Shenzhen', // * [/ip4/103.40.249.212/tcp/44299] dial tcp4 0.0.0.0:34511->103.40.249.212:44299: i/o timeout
  f014248: 'dial, Turkey', // * [/ip4/185.23.180.67/tcp/23450] dial tcp4 0.0.0.0:34511->185.23.180.67:23450: i/o timeout
  f014259: 'dial, China, Fuzhou',
  f014279: 'dial, Finland, Helsinki',
  f014311: 'dial, China, Ordos',
  f014328: 'dial, Canada, Waterloo',
  f014379: 'dial, Japan, Ebisunishi',
  f014382: 'dial, Singapore',
  f014392: 'dial, Russia, Khabarovsk + USA + Japan, Heiwajima',
  f014393: 'dial, China, Zhejiang',
  f014415: 'dial, USA',
  f014433: 'dial, Singapore',
  f014481: 'dial, China, Shanghai',
  f014522: 'dial, China, Shanghai',
  f014573: 'dial, China, Fuzhou',
  f014634: 'dial, USA, Boardman',
  f014644: 'dial, USA, Berkeley',
  f014782: 'dial, DNS:wlblock.io',
  f014786: 'dial, China, Xiamen',
  f014798: 'dial, Brazil, Sao Paulo',
  f015642: 'dial, China, Fuzhou',
  f015643: 'dial, China, Ordos',
  f015662: 'dial, China, Beijing',
  f015731: 'dial, China, Ordos',
  f015733: 'dial, China, Ordos',
  f015742: 'dial, China, Ningbo',
  f015757: 'dial, China, Hangzhou',
  f015777: 'dial, Australia, Sydney',
  f015801: 'dial, Germany, Ismaning',
  f015806: 'dial, Germany',
  f015826: 'dial, China, Fuzhou',
  f015845: 'dial, China, Fuzhou',
  f015848: 'dial, China, Ordos',
  f015852: 'dial, China, Fuzhou',
  f015855: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:34511->220.176.125.4:23450: i/o timeout
  f015866: 'dial, China, Fuzhou',
  f015872: 'dial, China, Fuzhou', // * [/ip4/45.192.184.205/tcp/23450] dial tcp4 0.0.0.0:34511->45.192.184.205:23450: i/o timeout
  f015873: 'dial, China, Fuzhou',
  f015897: 'dial, China, Guangdong',
  f015900: 'dial, Germany', // * [/ip4/46.4.63.227/tcp/443] dial tcp4 46.4.63.227:443: connect: connection refused
  f015903: 'dial, Germany', // * [/ip4/136.243.48.38/tcp/443] dial tcp4 136.243.48.38:443: connect: connection refused
  f015905: 'dial, Lithuania', // * [/ip4/188.214.129.49/tcp/34751] dial tcp4 0.0.0.0:35839->188.214.129.49:34751: i/o timeout
  f015907: 'dial, Canada, Calgary',
  f015910: 'dial, Turkey', // * [/ip4/185.23.181.67/tcp/23450] dial tcp4 0.0.0.0:35839->185.23.181.67:23450: i/o timeout
  f015914: 'dial, China, Fuzhou',
  f015918: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:35839->220.176.125.2:23450: i/o timeout
  f015922: 'dial, China',
  f015926: 'dial, China', // * [/ip4/162.62.55.44/tcp/12319] dial tcp4 0.0.0.0:35839->162.62.55.44:12319: i/o timeout
  f015927: 'dial, USA, East Islip',
  f015928: 'dial, China, Fuzhou',
  f015933: 'dial, Finland, Helskinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:35839->95.216.99.39:46717: i/o timeout
  f015947: 'dial, Finland, Helsinki',
  f016024: 'dial, China, Fuzhou',
  f016056: 'dial, USA, Arlington', // * [/ip4/69.251.248.175/tcp/6679] dial tcp4 0.0.0.0:35839->69.251.248.175:6679: i/o timeout
  f016202: 'dial, Korea, Songpa-gu', // * [/ip4/118.223.164.15/tcp/42155] dial tcp4 0.0.0.0:35839->118.223.164.15:42155: i/o timeout
  f016207: 'dial, China, Xiamen',
  f016238: 'dial, NR', // * [/ip4/192.168.100.27/tcp/57670] dial tcp4 0.0.0.0:35839->192.168.100.27:57670: i/o timeout
  f016263: 'dial, Australia, Sydney',
  f016279: 'dial, Finland, Helsinki', // * [/ip4/95.216.68.181/tcp/46717] dial tcp4 95.216.68.181:46717: connect: connection refused
  f016297: 'dial, China, Mianyang + USA',
  f016302: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:35839->220.176.125.5:23450: i/o timeout
  f016309: 'dial, USA, Boardman', // * [/ip4/52.41.243.212/tcp/28003] dial tcp4 0.0.0.0:35839->52.41.243.212:28003: i/o timeout
  f016364: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 0.0.0.0:35839->36.33.216.70:10240: i/o timeout
  f016419: 'dial, USA, Mountain View', // * [/ip6/2601:647:4700:7e:b85f:e6cd:bc32:478f/tcp/44545] dial tcp6 [2601:647:4700:7e:b85f:e6cd:bc32:478f]:44545: connect: network is unreachable  * [/ip6/::1/tcp/44545] dial tcp6 [::1]:44545: connect: connection refused  * [/ip4/127.0.0.1/tcp/33585] dial tcp4 127.0.0.1:33585: connect: connection refused  * [/ip4/192.168.86.244/tcp/33585] dial tcp4 0.0.0.0:35839->192.168.86.244:33585: i/o timeout  * [/ip4/73.158.190.21/tcp/58442] dial tcp4 0.0.0.0:35839->73.158.190.21:58442: i/o timeout  * [/ip4/73.158.190.21/tcp/26715] dial tcp4 0.0.0.0:35839->73.158.190.21:26715: i/o timeout
  f016479: 'dial, China, Dongguan',
  f016509: 'dial, China, Fuzhou', // * [/ip4/10.25.40.61/tcp/40271] dial tcp4 0.0.0.0:35839->10.25.40.61:40271: i/o timeout  * [/ip4/220.249.190.57/tcp/44567] dial tcp4 0.0.0.0:35839->220.249.190.57:44567: i/o timeout
  f016511: 'dial, China, Beijing', // * [/ip4/120.233.45.244/tcp/12349] dial tcp4 120.233.45.244:12349: connect: connection refused
  f016525: 'dial, China, Guangzhou', // * [/ip4/8.210.76.199/tcp/18899] dial tcp4 0.0.0.0:35839->8.210.76.199:18899: i/o timeout
  f016579: 'dial, USA, Howell',
  f016594: 'dial, Germany', // * [/ip4/135.181.62.186/tcp/12345] dial tcp4 0.0.0.0:41211->135.181.62.186:12345: i/o timeout
  f016603: 'dial, China, Dongguan', // * [/ip4/121.10.0.90/tcp/57670] dial tcp4 121.10.0.90:57670: connect: no route to host
  f016659: 'dial, USA, Alpharetta', // * [/ip4/192.168.1.64/tcp/41931] dial tcp4 0.0.0.0:35839->192.168.1.64:41931: i/o timeout
  f016850: 'dial, Japan',
  f016866: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:35839->220.176.125.4:23450: i/o timeout
  f016917: 'dial, China, Guangdong', // * [/ip4/183.232.116.200/tcp/4001] dial tcp4 183.232.116.200:4001: connect: connection refused
  f017038: 'dial, China, Fuzhou',
  f017067: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:35839->220.176.125.3:23450: i/o timeout
  f017082: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.194/tcp/23450] dial tcp4 0.0.0.0:35839->45.192.184.194:23450: i/o timeout
  f017136: 'dial, Australia, Sydney',
  f017193: 'dial, Singapore', // * [/ip4/8.211.49.16/tcp/14567] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAqdzpU6946afUESqGnf3GMo4YDojUasgPaG4djLhM8C3, but remote key matches 12D3KooWRoWj1PymQ5oEYrRqmHozWSjFJzHTsnqVkPRRgvj52Q8n
  f017194: 'dial, China, Hefei',
  f017200: 'dial, Lithuania', // * [/ip4/46.166.165.72/tcp/10240] dial tcp4 0.0.0.0:35839->46.166.165.72:10240: i/o timeout
  f017242: 'dial, China, Guangdong', // * [/ip4/103.142.248.7/tcp/4347] dial tcp4 0.0.0.0:35839->103.142.248.7:4347: i/o timeout
  f017244: 'dial, Korea, Seoul', // * [/ip4/141.164.34.113/tcp/41111] dial tcp4 0.0.0.0:35839->141.164.34.113:41111: i/o timeout
  f017250: 'dial, China, Zhejiang',
  f017266: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:35839->220.176.125.2:23450: i/o timeout
  f017273: 'dial, China, Liaoning',
  f017285: 'dial, China, Maoming', // * [/ip4/61.143.232.26/tcp/12345] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRt4eMiHrLrX5pkzkw7VWmxVKH6MEBUM9cY2Rkqdb4ZiM, but remote key matches 12D3KooWF3WXYfXSHjK3bqCJGA5LCXgEP67vwgdqYQgGs1HY9S7w
  f017488: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 35.224.87.15:24002: connect: connection refused
  f017635: 'dial, China, Nanchong',
  f017672: 'dial, China, Cangzhou', // * [/ip4/221.195.0.71/tcp/10240] dial tcp4 221.195.0.71:10240: connect: connection refused
  f017738: 'dial, China', // * [/ip4/101.36.64.212/tcp/42545] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKXPSDMoCiBSyp8j8XYZX3PAsoBj6TkGqsFpvuyXYfqQe, but remote key matches 12D3KooWEnwmWyvHGc5rZZRhTEg6G92RErxxgNijwbCEb8YbiZ8o
  f017796: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:35839->220.176.125.4:23450: i/o timeout
  f017970: 'dial, China, Baoding',
  f018088: 'dial, USA, Mountain View',
  f018119: 'dial, China, Dongguan',
  f018203: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/5678] dial tcp4 0.0.0.0:35839->95.216.99.39:5678: i/o timeout
  f018429: 'dial, Korea, Hwaseong-si',
  f018440: 'dial, Russia, St. Petersburg', // * [/ip4/188.187.61.69/tcp/44389] dial tcp4 0.0.0.0:35839->188.187.61.69:44389: i/o timeout
  f018464: 'dial, Sweden, Stockholm', // * [/ip4/85.30.30.76/tcp/38387] dial tcp4 0.0.0.0:35839->85.30.30.76:38387: i/o timeout
  f018476: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:35839->220.176.125.4:23450: i/o timeout
  f018493: 'dial, Denmark, Kobenhavn S',
  f018498: 'dial, Singapore', // * [/ip4/8.209.119.18/tcp/14567] dial tcp4 0.0.0.0:35839->8.209.119.18:14567: i/o timeout
  f018506: 'dial, USA, New York',
  f018509: 'dial, China, Dongguan', // * [/ip4/113.105.174.6/tcp/10000] dial tcp4 0.0.0.0:35839->113.105.174.6:10000: i/o timeout
  f018525: 'dial, USA, Queens', // * [/ip4/24.90.181.106/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPPX51KkQcQhzM1LKBbu3uV2ZkFsBSmcDjLG7kgKqQbp4, but remote key matches 12D3KooWHcpqZ9Ps8cXHk2JaQVqAhjC7cPiLM14YKTmfAXT1LN3M
  f018540: 'dial, Netherlands',
  f018544: 'dial, Korea, Uijeongbu-si',
  f018562: 'dial, New Zealand, Masterton', // * [/ip4/121.99.224.109/tcp/10241] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWC9jegSfiHcei2BeABkn1PA164oQ7kpx2AQ12ix136988, but remote key matches 12D3KooWDcBfXqrBJvVEZZNfu41waaD2rLDM1H5xNBTJEMu5iec5  * [/ip4/121.99.224.109/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWC9jegSfiHcei2BeABkn1PA164oQ7kpx2AQ12ix136988, but remote key matches 12D3KooWNobH75Kmsr4LhtLbWXpViuRoqtiPUcso2VutUQc4TrtL
  f018803: 'dial, Korea, Seodaemun-gu', // * [/ip4/127.0.0.1/tcp/2345] dial tcp4 127.0.0.1:2345: connect: connection refused  * [/ip4/119.192.136.11/tcp/12345] dial tcp4 119.192.136.11:12345: connect: connection refused
  f018806: 'dial, Finland, Helsinki',
  f018809: 'dial, USA, New York', // * [/ip4/45.61.255.20/tcp/41114] dial tcp4 0.0.0.0:35839->45.61.255.20:41114: i/o timeout
  f018851: 'dial, China, Deyang + Singapore', // * [/ip4/103.242.134.36/tcp/12288] failed to negotiate security protocol: EOF
  f018905: 'dial, Brazil, Sao Paulo',
  f019002: 'dial, USA', // * [/ip4/47.245.132.152/tcp/14567] dial tcp4 0.0.0.0:35839->47.245.132.152:14567: i/o timeout
  f019006: 'dial, Vietman, Ho Chi Minh City + China, Hong Kong',
  f019007: 'dial, China, Shenzhen + Hong Kong', // * [/ip4/154.91.38.15/tcp/51109] dial tcp4 154.91.38.15:51109: connect: connection refused  * [/ip4/103.44.247.132/tcp/51109] dial tcp4 103.44.247.132:51109: connect: connection refused
  f019015: 'dial, China, Hangzhou + Singapore', // * [/ip4/170.33.12.188/tcp/7087] dial tcp4 0.0.0.0:35839->170.33.12.188:7087: i/o timeout  * [/ip4/170.33.12.187/tcp/7087] dial tcp4 0.0.0.0:35839->170.33.12.187:7087: i/o timeout
  f019022: "dial, China, Xi'an", // * [/ip4/113.200.105.8/tcp/1347] dial tcp4 113.200.105.8:1347: connect: connection refused
  f019029: 'dial, Serbia, Boljevac', // * [/ip4/178.220.25.96/tcp/46717] dial tcp4 0.0.0.0:41211->178.220.25.96:46717: i/o timeout  * [/ip4/109.92.96.31/tcp/46717] dial tcp4 0.0.0.0:41211->109.92.96.31:46717: i/o timeout
  f019053: 'dial, Singapore', // * [/ip4/8.211.4.148/tcp/10243] failed to negotiate security protocol: EOF
  f019056: 'dial, South Africa, Cape Town',
  f019068: "dial, China, Ya'an, fri",
  f019071: 'dial, USA, New York',
  f019073: 'dial, Germany, Frankfurt', // * [/ip4/18.157.80.183/tcp/30005] dial tcp4 0.0.0.0:35839->18.157.80.183:30005: i/o timeout
  f019087: 'dial, South Africa, Johannesburg', // * [/ip4/152.32.140.119/tcp/41116] failed to negotiate security protocol: EOF
  f019090: 'dial, South Africa, Johannesburg', // * [/ip4/152.32.140.119/tcp/41115] failed to negotiate security protocol: EOF
  f019091: 'dial, China, Chengdu', // * [/ip4/182.131.4.194/tcp/10080] dial tcp4 182.131.4.194:10080: connect: connection refused
  f019094: 'dial, Brazil, Sao Paulo', // * [/ip4/177.71.173.122/tcp/8888] dial tcp4 0.0.0.0:35839->177.71.173.122:8888: i/o timeout
  f019097: 'dial, Russia, Irkutsk',
  f019133: 'dial, UK, Mansfield', // * [/ip4/92.12.185.10/tcp/24002] dial tcp4 92.12.185.10:24002: i/o timeout
  f019145: 'dial, Brazil, Sao Paulo',
  f019150: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:35839->220.176.125.4:23450: i/o timeout
  f019155: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15110] dial tcp4 0.0.0.0:35839->101.206.156.204:15110: i/o timeout
  f019169: 'dial, Brazil, Sao Paulo',
  f019174: 'dial, UK, Halifax',
  f019182: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15111] dial tcp4 0.0.0.0:35839->101.206.156.204:15111: i/o timeout
  f019185: 'dial, China, Beijing', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f019196: 'dial, China, Shenzhen + Hong Kong',
  f019233: 'dial, Russia', // * [/ip4/158.255.7.196/tcp/46207] dial tcp4 0.0.0.0:35839->158.255.7.196:46207: i/o timeout
  f019240: 'dial, China, Beijing', // * [/ip4/36.112.26.4/tcp/3458] dial tcp4 36.112.26.4:3458: connect: connection refused
  f019248: 'dial, USA, Council Bluffs', // * [/ip4/35.239.142.4/tcp/46717] dial tcp4 0.0.0.0:35839->35.239.142.4:46717: i/o timeout
  f019249: 'dial, USA, Council Bluffs',
  f019280: 'dial, China, Fuzhou', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:35839->220.176.125.4:23450: i/o timeout
  f019281: 'dial, South Africa, Johannesburg',
  f019317: 'dial, Brazil, Sao Paulo', // * [/ip4/177.71.163.156/tcp/10240] dial tcp4 0.0.0.0:35839->177.71.163.156:10240: i/o timeout
  f019325: 'dial, China, Chongqing',
  f019326: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15093] dial tcp4 0.0.0.0:35839->101.206.156.204:15093: i/o timeout
  f019327: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15094] dial tcp4 0.0.0.0:35839->101.206.156.204:15094: i/o timeout
  f019352: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15095] dial tcp4 0.0.0.0:35839->101.206.156.204:15095: i/o timeout
  f019459: 'dial, USA, Alpharetta', // * [/ip4/45.26.152.112/tcp/4137] dial tcp4 45.26.152.112:4137: connect: connection refused
  f019462: 'dial, Netherlands, Groningen', // * [/ip4/34.90.112.11/tcp/46717] dial tcp4 0.0.0.0:35839->34.90.112.11:46717: i/o timeout
  f019515: 'dial, Netherlands, Groningen', // * [/ip4/35.204.3.95/tcp/46717] dial tcp4 0.0.0.0:35839->35.204.3.95:46717: i/o timeout
  f019523: 'dial, USA, Los Angeles', // * [/ip4/47.156.151.169/tcp/33505] dial tcp4 0.0.0.0:35839->47.156.151.169:33505: i/o timeout
  f019551: 'dial, UK',
  f019596: 'dial, USA, Queens',
  f019637: 'dial, China, Nanchang',
  f019660: 'dial, South Korea, Cheonan',
  f019710: 'dial, Australia, Sydney',
  f019779: 'dial, China, Xuancheng',
  f020223: 'dial, China, Guiyang', // * [/ip4/111.85.176.10/tcp/10240] dial tcp4 0.0.0.0:35839->111.85.176.10:10240: i/o timeout
  f020330: 'dial, USA',
  f020331: 'dial, USA',
  f020358: 'dial, China, Xinxiang', // * [/ip4/27.50.142.73/tcp/1347] dial tcp4 27.50.142.73:1347: connect: connection refused
  f020388: 'dial, Korea, Uijeongbu-si',
  f020393: 'dial, China, Beijing', // * [/ip4/123.125.194.158/tcp/6789] dial tcp4 123.125.194.158:6789: connect: connection refused
  f020401: 'dial, USA, Raleigh',
  f020431: 'dial, Korea, Seoul',
  f020452: 'dial, China, Hangzhou + Singapore', // * [/ip4/115.236.22.155/tcp/2052] dial tcp4 115.236.22.155:2052: connect: connection refused  * [/ip4/10.10.12.21/tcp/7000] dial tcp4 0.0.0.0:35839->10.10.12.21:7000: i/o timeout  * [/ip4/170.33.12.186/tcp/17012] dial tcp4 0.0.0.0:35839->170.33.12.186:17012: i/o timeout
  f020516: 'dial, China, Dalian', // * [/ip4/42.202.134.189/tcp/33666] dial tcp4 0.0.0.0:35839->42.202.134.189:33666: i/o timeout
  f020572: 'dial, China, Nanchang', // * [/ip4/220.176.125.123/tcp/23450] dial tcp4 0.0.0.0:35839->220.176.125.123:23450: i/o timeout
  f020604: 'dial, Singapore',
  f020618: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17011] dial tcp4 0.0.0.0:35839->170.33.12.186:17011: i/o timeout
  f020622: 'dial, China, Hong Kong',
  f020626: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:35839->73.158.16.48:30390: i/o timeout
  f020631: 'dial, China, Zhejiang', // * [/ip4/47.102.202.230/tcp/5472] dial tcp4 47.102.202.230:5472: connect: connection refused
  f020771: 'dial, Japan, Setagaya-ku', // * [/ip4/59.138.253.69/tcp/55555] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWB9hQuvFTwgPe23wsd8tmLGpYF9aXjTy8brZjndR3Ubxv, but remote key matches 12D3KooWLmKkqK47NBUy32s67r1ayuvsYkpvsKiEDZUvEAWahX1W
  f020814: 'dial, China, Dongguan',
  f020816: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/11052] dial tcp4 183.63.203.161:11052: i/o timeout
  f020891: 'dial, China, Wenzhou',
  f020967: 'dial, China, Chengdu', // * [/ip4/171.221.236.129/tcp/45001] dial tcp4 171.221.236.129:45001: i/o timeout
  f021142: 'dial, China, Fuzhou',
  f021292: 'dial, China, Hong Kong', // * [/ip4/43.228.183.102/tcp/40573] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKztv937mFfnZpXpHnJP7DFTSMeeJrwjktcs5oSvNmfPN, but remote key matches 12D3KooWQzhuFoqWfap5FT3hD9jTSc1wiP3Sn735mstACYiPuw75
  f021428: 'dial, Norway, Borgen',
  f021463: 'dial, China, Mianyang',
  f021475: 'dial, China, Dongguan', // * [/ip4/183.240.203.136/tcp/34567] dial tcp4 183.240.203.136:34567: connect: connection refused
  f021483: 'dial, China, Beijing', // * [/ip4/124.250.42.202/tcp/24567] dial tcp4 124.250.42.202:24567: connect: connection refused
  f021536: 'dial, NR',
  f021547: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17329] dial tcp4 0.0.0.0:35839->170.33.12.186:17329: i/o timeout
  f021644: 'dial, USA, Berkeley',
  f021961: 'dial, NR', // * [/ip4/110.80.136.19/tcp/7000] dial tcp4 0.0.0.0:35839->110.80.136.19:7000: i/o timeout  * [/ip4/192.168.1.13/tcp/7000] dial tcp4 0.0.0.0:35839->192.168.1.13:7000: i/o timeout
  f022069: 'dial, China, Hong Kong', // * [/ip4/221.127.8.183/tcp/24001] dial tcp4 0.0.0.0:35839->221.127.8.183:24001: i/o timeout
  f022111: 'dial, China, Quanzhou',
  f022122: 'dial, NR',
  f022144: 'dial, China, Fuzhou', // * [/ip4/220.176.125.110/tcp/23450] dial tcp4 0.0.0.0:35839->220.176.125.110:23450: i/o timeout
  f022146: 'dial, China, Fuzhou', // * [/ip4/220.176.125.123/tcp/23450] dial tcp4 0.0.0.0:35839->220.176.125.123:23450: i/o timeout
  f022157: 'dial, China, Fuzhou',
  f022166: 'dial, Norway, Borgen', // * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLsZ4PQtpyZQpEfXvheZHgirJe7bQmse7brRndyaWs3Jh, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f022304: 'dial, China, Taiyuan', // * [/ip4/221.204.177.81/tcp/2222] dial tcp4 221.204.177.81:2222: connect: connection refused
  f022320: 'dial, Korea, Seoul', // * [/ip4/220.119.37.150/tcp/24001] dial tcp4 0.0.0.0:35839->220.119.37.150:24001: i/o timeout
  f022351: 'dial, Korea, Guri-si',
  f022364: 'dial, Korea, Jungang-gu', // * [/ip4/125.129.37.73/tcp/10241] dial tcp4 0.0.0.0:35839->125.129.37.73:10241: i/o timeout
  f022405: 'dial, Russia', // * [/ip4/158.255.7.196/tcp/46175] dial tcp4 0.0.0.0:35839->158.255.7.196:46175: i/o timeout
  f022517: 'dial, China, Taiwan, Taipei',
  f022518: 'dial, DNS:poseidon.technology', // * [/ip4/36.226.75.92/tcp/24000] dial tcp4 36.226.75.92:24000: connect: connection refused
  f022522: 'dial, China, Dongguan',
  f022687: 'dial, China, Chengdu',
  f022737: 'dial, Korea, Gangnum-gu', // * [/ip4/112.216.168.43/tcp/20000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPDeMQg1GK1w8NAnaPS2Pq3DytpW2DZtvQQKA9UheEWAT, but remote key matches 12D3KooWPBwquKY3asxootDXttSQfAUrvotFvv8suATHk2NtRNK6
  f022748: 'dial, China, Xinyang', // * [/ip4/8.209.114.206/tcp/48932] dial tcp4 0.0.0.0:35839->8.209.114.206:48932: i/o timeout
  f022780: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.98/tcp/24001] dial tcp4 211.114.218.98:24001: connect: connection refused
  f022787: 'dial, Korea, Guri-si',
  f022820: 'dial, China, Guangdong', // * [/ip4/183.232.116.200/tcp/4001] dial tcp4 183.232.116.200:4001: connect: connection refused
  f022930: 'dial, NR', // * [/ip4/61.147.117.66/tcp/2257] dial tcp4 61.147.117.66:2257: connect: connection refused  * [/ip4/61.147.117.66/tcp/2053] dial tcp4 61.147.117.66:2053: connect: connection refused  * [/ip4/172.16.5.111/tcp/7000] dial tcp4 0.0.0.0:35839->172.16.5.111:7000: i/o timeout
  f022976: 'dial, Korea, Cheongju-si', // * [/ip4/112.167.204.88/tcp/10241] dial tcp4 112.167.204.88:10241: connect: connection refused
  f023009: 'dial, USA, Berkeley',
  f023016: 'dial, NR',
  f023152: 'dial, China, Quanzhou',
  f023202: 'dial, China, Wuxi',
  f023549: 'dial, China, Zhejiang', // * [/ip4/47.102.202.230/tcp/5472] dial tcp4 47.102.202.230:5472: connect: connection refused
  f023561: 'dial, China, Shenzhen',
  f023586: 'dial, USA, Germantown',
  f023654: 'dial, China, Hong Kong',
  f023674: 'dial, China, Fuzhou',
  f023826: 'dial, USA, Germantown',
  f023882: 'dial, NR',
  f023937: 'dial, China, Fuzhou',
  f024030: 'dial, Korea, Gwangju', // * [/ip4/121.148.37.39/tcp/42055] dial tcp4 121.148.37.39:42055: connect: connection refused
  f024108: 'dial, Korea',
  f024182: 'dial, NR',
  f024511: 'dial, NR',
  f024986: 'dial, China, Zhongshan',
  f029344: 'dial, Korea, Seongnam-si',
  f029412: 'dial, China, Hefei',
  f029425: 'dial, NR', // * [/ip4/61.155.145.133/tcp/8086] dial tcp4 61.155.145.133:8086: connect: connection refused

  // XNR (Not routable)

  f01000: 'xnr, NR - bootstrap',
  f01001: 'xnr, NR - bootstrap',
  f01002: 'xnr, NR - bootstrap',
  f01013: 'xnr, NR',
  f01101: 'xnr, China, Shanghai',
  f01102: 'xnr, China, Shandong',
  f01156: 'xnr, China, Hangzhou',
  f01232: 'xnr, China, Hangzhou',
  f01274: 'xnr, China, Guangdong',
  f02304: 'xnr, USA, Mountain View',
  f02382: 'xnr, China, Zhongshan-cfa',
  f02385: 'xnr, USA, East Islip',
  f02398: 'xnr, China, Hong Kong',
  f02404: 'xnr, Korea, Seoul',
  f02424: 'xnr, Korea, Wanju',
  f02436: 'xnr, Netherlands',
  f02506: 'xnr, USA, Clarksville',
  f02515: 'xnr, China, Hangzhou',
  f02518: 'xnr, China, Shaanxi',
  f02575: 'xnr, USA, Davis',
  f02608: 'xnr, USA, San Jose',
  f02768: 'xnr, China, Hong Kong',
  f02774: 'xnr, Australia, Sydney',
  f02775: 'xnr, China, Hong Kong',
  f03249: 'xnr, NR',
  f03264: 'xnr, Korea, Bucheon-si',
  f03319: 'xnr, NR',
  f03341: 'xnr, NR',
  f03346: 'xnr, China, Huzhou, wckj',
  f03361: 'xnr, China, Guangzhou',
  f03428: 'xnr, China, Beijing + Jiaxing + Germany, Frankfurt',
  f03487: 'xnr, China, Yibin',
  f03619: 'xnr, China, Xiamen',
  f03622: 'xnr, 黑犇科技',
  f03765: 'xnr, Colombia, Medellin',
  f04444: 'xnr, NR',
  f07717: 'xnr, China, Shenyang',
  f07796: 'xnr, China, Hunan',
  f07866: 'xnr, China, Foshan',
  f07931: 'xnr, NR',
  f07959: 'xnr, NR',
  f07964: 'xnr, USA, Ashburn',
  f08022: 'xnr, China, Yibin',
  f08053: 'xnr, NR',
  f08061: 'xnr, China, Foshan',
  f08095: 'xnr, Canada, Surrey',
  f08097: 'xnr, Korea, Pyeongtaek-si',
  f08171: 'xnr, NR',
  f08183: 'xnr, USA, Irvine',
  f08223: 'xnr, NR',
  f08225: 'xnr, Australia, Sydney',
  f08238: 'xnr, NR',
  f08246: 'xnr, USA',
  f08280: 'xnr, NR',
  f08284: 'xnr, China, Liaoning',
  f08290: 'xnr, NR',
  f08311: 'xnr, China, Shenzhen',
  f08315: 'xnr, China, Chongqing',
  f08319: 'xnr, NR',
  f08322: 'xnr, China, Chongqing',
  f08327: 'xnr, NR',
  f08349: 'xnr, China, Guangzhou, hkicloud',
  f08361: 'xnr, Malaysia, Kulai',
  f08385: 'xnr, NR',
  f08388: 'xnr, China, Taizhou',
  f08390: 'xnr, China, Shenzhen',
  f08393: 'xnr, NR',
  f08402: 'xnr, China, Sichuan',
  f08406: 'xnr, China, Shenzhen',
  f08424: 'xnr, China, Chengdu',
  f08425: 'xnr, NR',
  f08429: 'xnr, yfeing',
  f08432: 'xnr, China, Taizhou',
  f08440: 'xnr, France, Fontenay-sous-Bois',
  f08460: 'xnr, NR',
  f08503: 'xnr, NR',
  f08574: 'xnr, USA',
  f08787: 'xnr, China, Yibin',
  f08789: 'xnr, China, Fuzhou',
  f08791: 'xnr, NR',
  f08893: 'xnr, NR',
  f08902: 'xnr, NR',
  f08911: 'xnr, Korea, Wanju',
  f08964: 'xnr, NR',
  f08980: 'xnr, USA, San Jose',
  f08988: 'xnr, Korea, Hwaseong-si',
  f08994: 'xnr, NR',
  f09006: 'xnr, NR',
  f09007: 'xnr, Korea, Hwaseong-si',
  f09035: 'xnr, NR',
  f09053: 'xnr, China, Shenzhen',
  f09055: 'xnr, China, Jieyang',
  f09076: 'xnr, NR',
  f09084: 'xnr, NR',
  f09529: 'xnr, NR',
  f09538: 'xnr, NR',
  f09578: 'xnr, NR',
  f09594: 'xnr, NR',
  f09610: 'xnr, China, Beijing',
  f09629: 'xnr, NR',
  f09662: 'xnr, Canada, Surrey',
  f09707: 'xnr, China, Guangdong',
  f09712: 'xnr, China, Chengdu',
  f09719: 'xnr, Korea, Geumcheon-gu',
  f09733: 'xnr, China, Chongqing',
  f09762: 'xnr, China, Guangdong',
  f09805: 'xnr, China, Fuzhou',
  f09840: 'xnr, China, Baoding',
  f09912: 'xnr, USA, Concord',
  f09966: 'xnr, NR',
  f09974: 'xnr, Canada, Calgary',
  f09997: 'xnr, USA',
  f010009: 'xnr, USA, East Islip',
  f010028: 'xnr, USA, Berkeley',
  f010033: 'xnr, NR',
  f010040: 'xnr, China, Shenzhen',
  f010041: 'xnr, USA, Jackson',
  f010078: 'xnr, China, Zhangjiakou + Hong Kong',
  f010173: 'xnr, Korea, Pyeongtaek-si',
  f010200: 'xnr, NR',
  f010213: 'xnr, NR',
  f010222: 'xnr, NR',
  f010227: 'xnr, China, Xiamen',
  f010244: 'xnr, USA, Newton',
  f010248: 'xnr, China, Yibin',
  f010265: 'xnr, China, Zhengzhou',
  f010275: 'xnr, Korea, Cheongju-si + USA',
  f010277: 'xnr, France, Fontenay-sous-Bois',
  f010281: 'xnr, China, Shanghai',
  f010282: 'xnr, USA, San Francisco',
  f010283: 'xnr, Brazil, Sao Paulo',
  f010292: 'xnr, NR',
  f010293: 'xnr, China, Xiamen',
  f010297: 'xnr, USA, Howell',
  f010303: 'xnr, China, Guangdong',
  f010305: 'xnr, NR',
  f010310: 'xnr, Canada, Surrey',
  f010313: 'xnr, NR',
  f010315: 'xnr, Canada, Surrey',
  f010346: 'xnr, China, Karamay',
  f010382: 'xnr, NR',
  f010402: 'xnr, China, Shenyang',
  f010425: 'xnr, NR',
  f010433: 'xnr, Korea, Seoul',
  f010453: 'xnr, China, Shaanxi',
  f010468: 'xnr, China, Guangzhou',
  f010490: 'xnr, NR',
  f010517: 'xnr, China, Chongqing',
  f010520: 'xnr, China, Hangzhou',
  f010542: 'xnr, China, Ordos',
  f010549: 'xnr, China, Ordos',
  f010551: 'xnr, China, Shenyang',
  f010566: 'xnr, NR',
  f010591: 'xnr, China, Wuhan',
  f010601: 'xnr, NR',
  f010602: 'xnr, China, Guangdong',
  f010603: 'xnr, China, Baoding',
  f010612: 'xnr, USA, Mountain View',
  f014207: 'xnr, USA',
  f014261: 'xnr, China, Fuzhou',
  f014314: 'xnr, Korea, Bucheon-si',
  f014331: 'xnr, China, Chongqing',
  f014354: 'xnr, USA, Concord',
  f014389: 'xnr, China, Chongqing',
  f014477: 'xnr, China, Hangzhou',
  f014486: 'xnr, NR',
  f014540: 'xnr, USA, Newton',
  f014556: 'xnr, Korea, Bucheon-si',
  f014629: 'xnr, NR',
  f014685: 'xnr, Hong Kong',
  f014708: 'xnr, China, Beijing',
  f014741: 'xnr, China, Wuhan',
  f014749: 'xnr, China, Chongqing',
  f014803: 'xnr, China, Beijing',
  f015232: 'xnr, Poland, Warsaw',
  f015724: 'xnr, China, Guangdong',
  f015799: 'xnr, Germany, Rostock',
  f015811: 'xnr, Germany, Lanshut',
  f015812: 'xnr, Germany',
  f015829: 'xnr, China, Beijing',
  f015833: 'xnr, China, Baoding',
  f015867: 'xnr, Netherlands, Amsterdam',
  f015870: 'xnr, China, Hangzhou',
  f015901: 'xnr, Germany',
  f015902: 'xnr, Germany',
  f015920: 'xnr, China, Guangdong',
  f015932: 'xnr, NR',
  f015935: 'xnr, China, Sichuan',
  f015938: 'xnr, Canada, Waterloo',
  f015940: 'xnr, Netherlands, Amsterdam',
  f016140: 'xnr, China, Beijing',
  f016162: 'xnr, France, Borgo',
  f016172: 'xnr, China, Guangdong',
  f016203: 'xnr, China, Chengdu',
  f016217: 'xnr, China, Nanchong',
  f016228: 'xnr, China, Chengdu',
  f016234: 'xnr, China, Chengdu',
  f016262: 'xnr, China, Fuzhou',
  f016271: 'xnr, Korea, Seodaemun-gu',
  f016276: 'xnr, China, Beijing',
  f016299: 'xnr, China, Shanghai',
  f016303: 'xnr, USA, Boardman',
  f016304: 'xnr, USA, Boardman',
  f016305: 'xnr, USA, Boardman',
  f016306: 'xnr, USA, Boardman',
  f016408: 'xnr, NR',
  f016426: 'xnr, NR',
  f016436: 'xnr, Korea, Seoul',
  f016456: 'xnr, China, Zhejiang',
  f016462: 'xnr, USA, Clarksville',
  f016482: 'xnr, USA, Aliquippa',
  f016628: 'xnr, NR',
  f016688: 'xnr, Germany, Frankfurt',
  f016706: 'xnr, China, Guangzhou',
  f016859: 'xnr, NR',
  f017117: 'xnr, Russia, Samara',
  f017171: 'xnr, NR',
  f017181: 'xnr, China, Nanchong',
  f017186: 'xnr, China, Jiaxing',
  f017209: 'xnr, NR',
  f017215: 'xnr, Finland',
  f017216: 'xnr, NR',
  f017236: 'xnr, NR',
  f017251: 'xnr, USA',
  f017294: 'xnr, China, Shenzhen',
  f017323: 'xnr, Poland, Warsaw',
  f017334: 'xnr, China, Fuzhou',
  f017430: 'xnr, Australia, Alexandria-cfa',
  f017618: 'xnr, Korea, Wanju',
  f017628: 'xnr, Brazil, Sao Paulo',
  f017655: 'xnr, NR',
  f017722: 'xnr, NR',
  f017747: 'xnr, NR',
  f017793: 'xnr, NR',
  f018081: 'xnr, Germany',
  f018095: 'xnr, Colombia, Medellin',
  f018128: 'xnr, China, Dongguan',
  f018164: 'xnr, USA, Howell',
  f018369: 'xnr, NR',
  f018393: 'xnr, Colombia, Medellin',
  f018397: 'xnr, USA, Howell',
  f018425: 'xnr, USA, Howell',
  f018437: 'xnr, NR',
  f018441: 'xnr, USA',
  f018445: 'xnr, NR',
  f018446: 'xnr, China, Dongguan',
  f018456: 'xnr, Brazil, Sao Paulo',
  f018474: 'xnr, China, Xiamen',
  f018484: 'xnr, China, Shanghai',
  f018490: 'xnr, Korea, Hwaseong-si',
  f018513: 'xnr, NR',
  f018517: 'xnr, USA, Columbus',
  f018520: 'xnr, China',
  f018530: 'xnr, China, Shaanxi',
  f018531: 'xnr, China, Shaanxi',
  f018537: 'xnr, China, Shaanxi',
  f018538: 'xnr, China, Huzhou',
  f018542: 'xnr, China, Chongqing',
  f018754: 'xnr, China, Dali',
  f018761: 'xnr, Russia, St. Petersburg',
  f018790: 'xnr, China, Chengdu',
  f018802: 'xnr, China, Dongguan',
  f018812: 'xnr, South Africa, Cape Town',
  f018836: 'xnr, NR',
  f018837: 'xnr, China, Shaanxi',
  f018844: 'xnr, NR',
  f018864: 'xnr, Korea, Busan',
  f018865: 'xnr, China, Chengdu',
  f018869: 'xnr, NR',
  f018879: 'xnr, Korea, Geumcheon-gu',
  f018899: 'xnr, China, Shanghai',
  f018911: 'xnr, USA, Portland',
  f019017: 'xnr, China, Wenzhou-cfa',
  f019024: 'xnr, China, Sichuan',
  f019031: 'xnr, NR',
  f019042: 'xnr, China, Shanghai',
  f019048: 'xnr, Brazil, Sao Paulo',
  f019062: 'xnr, Germany',
  f019069: 'xnr, NR',
  f019109: 'xnr, USA, Howell',
  f019123: 'xnr, China, Dongguan',
  f019160: 'xnr, USA, Fremont',
  f019173: 'xnr, China, Nanchong',
  f019184: 'xnr, China, Yibin',
  f019218: 'xnr, China, Dali',
  f019239: 'xnr, China, Jiaxing',
  f019264: 'xnr, NR',
  f019284: 'xnr, China, Foshan',
  f019376: 'xnr, NR',
  f019378: 'xnr, China, Changzhou',
  f019401: 'xnr, Brazil, Sao Paulo',
  f019423: 'xnr, South Africa, Johannesburg',
  f019434: 'xnr, NR',
  f019525: 'xnr, USA, Berkeley',
  f019528: 'xnr, Peru',
  f019547: 'xnr, Peru',
  f019645: 'xnr, Russia, St. Petersburg',
  f019723: 'xnr, China, Zhongshan',
  f019734: 'xnr, NR',
  f019757: 'xnr, NR',
  f019804: 'xnr, China, Chengdu',
  f019806: 'xnr, China, Beijing',
  f019809: 'xnr, NR',
  f019812: 'xnr, NR',
  f019825: 'xnr, China, Hong Kong',
  f020241: 'xnr, NR',
  f020260: 'xnr, NR',
  f020276: 'xnr, China, Xiamen',
  f020281: 'xnr, Korea, Uijeongbu-si',
  f020352: 'xnr, NR',
  f020361: 'xnr, Colombia, Medellin',
  f020366: 'xnr, China, Chengdu',
  f020369: 'xnr, NR',
  f020379: 'xnr, NR',
  f020386: 'xnr, Russia',
  f020390: 'xnr, NR',
  f020408: 'xnr, China, Hong Kong',
  f020432: 'xnr, Korea, Wanju',
  f020433: 'xnr, NR',
  f020439: 'xnr, China, Chengdu',
  f020450: 'xnr, NR',
  f020451: 'xnr, NR',
  f020453: 'xnr, China, Chengdu',
  f020457: 'xnr, NR',
  f020525: 'xnr, China, Dongguan',
  f020559: 'xnr, China, Liaoning',
  f020563: 'xnr, China, Dongguan',
  f020578: 'xnr, Korea, Wanju',
  f020641: 'xnr, NR',
  f020678: 'xnr, China, Wenzhou',
  f020682: 'xnr, NR',
  f020683: 'xnr, China, Changsha',
  f020691: 'xnr, NR',
  f020739: 'xnr, China, Dongguan',
  f020763: 'xnr, China, Luzhou',
  f020775: 'xnr, Japan, Osaka',
  f020786: 'xnr, China, Shenzhen',
  f020788: 'xnr, China, Chengdu',
  f020789: 'xnr, NR',
  f020791: 'xnr, China, Hangzhou',
  f020819: 'xnr, China, Chengdu',
  f020822: 'xnr, China, Shanghai',
  f020896: 'xnr, NR',
  f020899: 'xnr, China, Chengdu',
  f020914: 'xnr, NR',
  f020934: 'xnr, NR',
  f020939: 'xnr, NR',
  f020940: 'xnr, @fu',
  f020957: 'xnr, NR',
  f020961: 'xnr, China, Shanghai',
  f020975: 'xnr, China, Shandong',
  f021069: 'xnr, USA',
  f021083: 'xnr, NR',
  f021092: 'xnr, NR',
  f021095: 'xnr, NR',
  f021254: 'xnr, NR',
  f021286: 'xnr, China, Shaanxi',
  f021307: 'xnr, China, Chengdu',
  f021311: 'xnr, NR',
  f021337: 'xnr, China, Beijing',
  f021418: 'xnr, NR',
  f021494: 'xnr, NR',
  f021500: 'xnr, NR',
  f021504: 'xnr, NR',
  f021505: 'xnr, NR',
  f021509: 'xnr, China, Fuzhou',
  f021527: 'xnr, NR',
  f021555: 'xnr, NR',
  f021574: 'xnr, NR',
  f021684: 'xnr, NR',
  f021699: 'xnr, NR',
  f021704: 'xnr, NR',
  f021725: 'xnr, NR',
  f022016: 'xnr, NR',
  f022030: 'xnr, NR',
  f022033: 'xnr, NR',
  f022038: 'xnr, NR',
  f022070: 'xnr, China, Jieyang',
  f022084: 'xnr, China, Shaanxi',
  f022091: 'xnr, NR',
  f022093: 'xnr, NR',
  f022108: 'xnr, China, Luzhou',
  f022132: 'xnr, China, Dongguan',
  f022171: 'xnr, China, Shanghai',
  f022250: 'xnr, NR',
  f022262: 'xnr, China, Hong Kong',
  f022284: 'xnr, China, Shaanxi',
  f022303: 'xnr, NR',
  f022308: 'xnr, NR',
  f022321: 'xnr, China, Hong Kong',
  f022326: 'xnr, China, Zhongshan',
  f022333: 'xnr, China, Dongguan',
  f022336: 'xnr, NR',
  f022337: 'xnr, NR',
  f022338: 'xnr, NR',
  f022343: 'xnr, China, Dongguan',
  f022361: 'xnr, NR',
  f022372: 'xnr, China, Chengdu',
  f022494: 'xnr, China, Dongguan',
  f022501: 'xnr, Japan, Osaka',
  f022503: 'xnr, NR',
  f022505: 'xnr, China, Shanghai',
  f022562: 'xnr, NR',
  f022564: 'xnr, NR',
  f022683: 'xnr, NR',
  f022755: 'xnr, China, Shenzhen',
  f022776: 'xnr, Korea, Guri-si',
  f022786: 'xnr, NR',
  f022790: 'xnr, China, Luzhou',
  f022797: 'xnr, NR',
  f022804: 'xnr, China, Yibin',
  f022836: 'xnr, China, Chongqing',
  f022838: 'xnr, China, Hong Kong',
  f022857: 'xnr, NR',
  f022906: 'xnr, NR',
  f022912: 'xnr, NR',
  f022954: 'xnr, NR',
  f022969: 'xnr, China, Chengdu',
  f022970: 'xnr, NR',
  f023001: 'xnr, China, Changsha',
  f023021: 'xnr, Korea, Yeongdeungpo-dong',
  f023108: 'xnr, China, Dongguan',
  f023159: 'xnr, NR',
  f023198: 'xnr, NR',
  f023219: 'xnr, NR',
  f023254: 'xnr, NR',
  f023499: 'xnr, NR',
  f023501: 'xnr, China, Mianyang',
  f023505: 'xnr, NR',
  f023526: 'xnr, China, Chongqing',
  f023568: 'xnr, NR',
  f023801: 'xnr, China, Dongguan',
  f023881: 'xnr, China, Fuzhou',
  f023943: 'xnr, USA, Ashburn',
  f023986: 'xnr, Korea, Seoul',
  f024089: 'xnr, NR',
  f024165: 'xnr, NR',
  f024496: 'xnr, China, Dongguan',
  f024802: 'xnr, NR',
  f024894: 'xnr, NR',
  f024895: 'xnr, NR',
  f024983: 'xnr, China, Hong Kong',
  f025028: 'xnr, NR',
  f025044: 'xnr, NR',
  f029416: 'xnr, NR',
  f029477: 'xnr, NR',
  f029566: 'xnr, NR',
  f029595: 'xnr, China, Guangdong',
  f030203: 'xnr, NR'
}

export default annotations
