// Slingshot test results
//
// Additional testing with files > 128MiB in size
//
// These are generated from a second round of testing after attempting
// to store a small file, see annotations-spacerace.js for those results

const annotations = {
  // Retest

  f02405: 'retest, China, Shenzhen', // client node out of gas
  f02415: 'retest, China, Hong Kong', // client node out of gas
  f018785: 'retest, Singapore + Germany, Frankfurt + USA', // client node out of gas
  f020385: 'retest, Korea, Incheon', // client node out of gas
  f022566: 'retest, China, Nanchong', // client node out of gas
  f023678: 'retest, China, Jiaxing', // client node out of gas

  // Candidates

  // Testing

  f021262: 'testing, China, Shanghai',

  // Active

  f01238: 'active, Vietnam, Hanoi, FILECOIN-VIETNAM', // 638027
  f01247: 'active, Canada, Montreal, BigChungus™', // 638475
  f01272: 'active, Singapore', // 637896
  f01278: 'active, USA, Grand Rapids, MiMiner', // 637943
  f01782: 'active, China, Hong Kong + Singapore + USA, Portland, hellofil.com', // 636646
  f02301: 'active, USA', // 637950
  f02401: 'active, Canada, Chambly, NBFS Canada', // 637974
  f02416: 'active, China, Guangdong, 星际无限', // 640153
  f02620: 'active, Poland, Krakow, @magik6k', // 638472
  f02645: 'active, China, Hong Kong', // 672439
  f03176: 'active, USA, San Mateo, Five Star-Helmsman&Heiben', // 638488
  f03273: 'active, USA, Portland, 6block', // 638477
  f03274: 'active, USA, Portland, 6block', // 638468
  f03275: 'active, USA, Portland, 6block', // 639959
  f03302: 'active, China, Chengdu', // 639977
  f03363: 'active, Singapore', // 637963
  f03488: 'active, Korea, Geumcheon-gu', // 607595
  f05316: 'active, USA, Portland, 6block', // 637980
  f05317: 'active, USA, Portland', // 638481
  f07819: 'active, China, Wuxi, YC--wuxi', // 637947
  f08019: 'active, China, Yantai, 三合', // 636652
  f08094: 'active, China, Guangzhou, dongshao', // 639950
  f08157: 'active, China, Beijing + Germany, Frankfurt, 超星际', // 638483
  f08240: 'active, Russia, Novosibirsk, Rabinovitch', // 638494
  f08403: 'active, UK, Lower Slaughter', // 638003
  f08474: 'active, China, Hong Kong', // 674230
  f09696: 'active, USA, Portland + Singapore', // 637892
  f09731: 'active, China, Guiyang', // 637872
  f09770: "active, China, Xi'an", // 665564
  f010088: 'active, DNS:purumine.com', // 638482
  f010247: 'active, China, Yantai', // 636657
  f010400: 'active, China, Shenyang', // 674081
  f010446: 'active, Netherlands', // 638591
  f010479: 'active, France, Fontenay-sous-Bois', // 674084
  f010491: 'active, China, Shenzhen', // 640003
  f010498: 'active, China, Shenzhen', // 640173
  f010507: 'active, China, Hangzhou', // 638486
  f014768: 'active, Singapore', // 638484
  f015927: 'active, USA, East Islip', // 610534
  f019029: 'active, Serbia, Boljevac', // 675244
  f019551: 'active, UK', // 636790
  f020436: 'active, China, Beijing', // 636724
  f020541: 'active, China, Shanghai', // 640111
  f021255: 'active, China, Suzhou + Netherlands', // 638037
  f021540: 'active, Germany, Frankfurt, @hsanjuan', // 638555
  f021870: 'active, USA, Portland', // 638471
  f022072: 'active, China, Jieyang', // 675136
  f022142: 'active, USA, Queens', // 638480
  f022227: 'active, China, Jiangsu', // 640662
  f022352: 'active, Norway, Borgen', // 674522 3 minutes
  f022922: 'active, China, Shenzhen', // 639958
  f023152: 'active, China, Quanzhou', // 636787
  f023492: 'active, China, Beijing', // 676869
  f023495: 'active, China, Beijing + USA, Portland', // 638469
  f023647: 'active, Korea, Gangseo-gu', // 674245
  f023854: 'active, China, Fuzhou', // 672627
  f023971: 'active, USA, @Brian Y', // 637125
  f024012: 'active, China, Fuzhou',
  f024013: 'active, China, Fuzhou',
  f024030: 'active, Korea, Gwangju', // 637137
  f024066: 'active, NR', // 639846
  f024081: 'active, China, Fuzhou',
  f024084: 'active, China, Fuzhou',
  f024085: 'active, China, Fuzhou',
  f024800: 'active, China, Hong Kong', // 640042
  f024969: 'active, NR', // 640063
  f025017: 'active, China, Hefei', // 638552
  f025019: 'active, China, Taiwan, Hsinchu', // 637930
  f029368: 'active, Korea, Gangseo-gu', // 672639
  f029490: 'active, NR', // 675184
  f029524: 'active, China, Hong Kong', // 672651
  f029556: 'active, China, Wuxi', // 636729
  f029566: 'active, NR', // 640058
  f030296: 'active, USA, Cary', // 636964
  f030379: 'active, Korea, Uiwang', // 637023
  f032835: 'active, Japan, Setagaya-ku', // 675751
  f032934: 'active, Korea, Incheon', // 674920

  // Active/sealing

  // Sealing

  f01277: 'sealing, Sweden, Stockholm, tvsthlm', // 675441
  f01800: 'sealing, China, Shenzhen + Chengdu', // 637852
  f02388: 'sealing, Netherlands, Amersfoort, Kroketje', // 637890
  f02492: 'sealing, China, Shenzhen', // 640361
  f02622: 'sealing, USA, Portland, 6block', // 610403
  f02623: 'sealing, USA, Portland, 6block', // 610920
  f02665: 'sealing, Netherlands, Amsterdam, fm-ops', // 640077
  f03223: 'sealing, USA', // 637913
  f03264: 'sealing, Korea, Bucheon-si', // 672827
  f03340: "sealing, China, Xi'an", // 636711
  f03347: 'sealing, China, Shenzhen', // 672594
  f03482: 'sealing, China, Wuxi', // 680177
  f03512: 'sealing, New Zealand, Auckland, NZFILECOIN01', // 679779
  f03624: 'sealing, Germany, Chemnitz, ode', // 675480
  f07806: 'sealing, China, Wuhan, HelloXP', // 672730
  f08204: 'sealing, USA, St. Louis', // 684022
  f08285: 'sealing, Latvia, Riga, stander', // 636429
  f08482: 'sealing, USA, Athol, @why', // 675595
  f09693: 'sealing, USA, Portland + Singapore', // 607276
  f010512: 'sealing, China, Zhengzhou', // 675591
  f014281: 'sealing, Netherlands, Permerend', // 683833
  f014324: 'sealing, Canada, Vancouver', // 636892
  f014409: 'sealing, USA, Waxhaw', // 674544
  f015734: 'sealing, China, Qingdao', // 636961
  f016594: 'sealing, Germany', // 637865
  f019100: 'sealing, Romania, Cluj-Napoca', // 638470
  f019104: 'sealing, Canada, Chambly', // 640046
  f019118: 'sealing, China, Jiaxing', // 641067
  f019243: 'sealing, USA, Jackson', // 640152
  f019362: 'sealing, China, Hangzhou', // 636647
  f021274: 'sealing, China, Shanghai', // 636678
  f021339: 'sealing, China, Jiaxing', // 636422
  f021346: 'sealing, China, Shanghai', // 636865
  f021357: 'sealing, China, Shanghai', // 636908
  f021583: 'sealing, China, Jiaxing', // 637878
  f021710: 'sealing, China, Shijiazhuang', // 637997
  f022125: 'sealing, China, Shenzhen', // 677161
  f022163: 'sealing, NR', // 675533
  f022376: 'sealing, China, Dongguan', // 681287
  f022395: 'sealing, USA, Los Angeles', // 672467
  f022753: 'sealing, China, Hong Kong', // 673939
  f022841: 'sealing, China, Zhongshan', // 640061
  f023467: 'sealing, Norway, Oslo', // 637875
  f023490: 'sealing, Ukraine, Kyiv', // 675498
  f023859: 'sealing, China, Fuzhou',
  f023861: 'sealing, China, Fuzhou',
  f023868: 'sealing, China, Fuzhou',
  f023869: 'sealing, China, Fuzhou',
  f023876: 'sealing, China, Fuzhou',
  f023977: 'sealing, China, Fuzhou',
  f023978: 'sealing, China, Fuzhou',
  f023980: 'sealing, China, Fuzhou',
  f023981: 'sealing, China, Fuzhou',
  f024007: 'sealing, China, Fuzhou',
  f024008: 'sealing, China, Fuzhou',
  f024016: 'sealing, USA, Portland', // 607599
  f024130: 'sealing, Korea', // 637065
  f024168: 'sealing, USA, Ashburn', // 675716
  f024550: 'sealing, China, Wenzhou', // 679823
  f024944: 'sealing, Korea, Yeongdeungpo-dong', // 636742
  f025007: 'sealing, Korea, Gyeonggi-do', // 675573
  f029529: 'sealing, China, Dongguan', // 673975
  f029587: 'sealing, Hungary', // 636827
  f030144: 'sealing, Korea, Gyeonggi-do', // 674425
  f030335: 'sealing, China, Fujian', // 636939
  f030338: 'sealing, USA, Santa Fe Springs', // 637119
  f030518: 'sealing, China, Wuhan', // 637121
  f030641: 'sealing, China, Shaanxi', // 636870
  f032865: 'sealing, USA, Redmond', // 672706
  f032951: 'sealing, Korea, Gyeonggi-do', // 675392
  f032976: 'sealing, China, Taiwan, Taipei', // 676210
  f033028: 'sealing, China, Mianyang', // 674716

  // Stuck

  f09639: 'stuck, China, Fuzhou', // CheckForAcceptance: about 2 hours
  f019824: 'stuck, USA', // CheckForAcceptance: about 2 hours
  f030327: 'stuck, China, Beijing', // ProposalAccepted: about 2 hours

  // Min-size

  f09639: 'stuck, China, Fuzhou', // CheckForAcceptance: about 2 hours
  f019824: 'stuck, USA', // CheckForAcceptance: about 2 hours
  f030327: 'stuck, China, Beijing', // ProposalAccepted: about 2 hours

  // Min-ask

  f01234: 'min-ask, Belgium, De Klinge, Eliovp',
  f01279: 'min-ask, China, Sichuan',
  f02381: 'min-ask, China, Dongguan, 西野七濑迷叔',
  f02419: 'min-ask, China, Shanghai, yuantai',
  f02423: 'min-ask, Ukraine, Kyiv, igowreck',
  f02490: 'min-ask, China, Fujian',
  f02654: 'min-ask, China, Shanghai',
  f07709: 'min-ask, Korea, Dongjak-gu',
  f07919: 'min-ask, China, Beijing, Shanghai, Hunan',
  f09569: 'min-ask, China, Beijing',
  f019661: 'min-ask, Russia, Pyatigorsk',
  f020608: 'min-ask, Russia',
  f020747: 'min-ask, China, Xiamen',
  f023581: 'min-ask, China, Hong Kong',
  f024127: 'min-ask, China, Fuzhou',
  f030184: 'min-ask, USA, Aliquippa',
  f033048: 'min-ask, USA, Ashburn',

  // Error

  f01240: 'error, undefined', // EOF
  f01241: 'error, undefined',
  f01280: 'error, China, Wuxi, 了凡超算', // failed to initiate data transfer: deal data transfer failed: response rejected
  f01289: 'error, China, Hangzhou + USA',
  f01799: 'error, China, Jinan, TokenHome', // failed to restart data transfer: channelId on client deal is nil
  f02387: 'error, undefined', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
  f02399: 'error, China, Zhejiang', // failed to restart data transfer: channelId on client deal is nil
  f02501: 'error, USA, Portland, 6block', // error in deal activation: failed to set up called handler: called check error (h: 146885): client: failed to look up deal on chain: deal 607279 not found
  f02514: 'error, USA, Portland, 6block', // error in deal activation: failed to set up called handler: called check error (h: 146885): client: failed to look up deal on chain: deal 607496 not found
  f02576: 'error, Denmark, Gjerlev, BenjaminH', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.066168254449834551 FIL, balance: 0.065864025821538587 FIL): not enough funds to execute transaction
  f02606: 'error, China, Shanghai',
  f02619: 'error, China, Beijing, Blockcasting', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02625: 'error, China, Shanghai, IPFS星际工厂',
  f02633: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02666: 'error, China, Chengdu', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03134: 'error, China, Cangzhou, 乔木信息',
  f03222: 'error, China, Yuncheong, 星云矿池',
  f03224: 'error, Ukraine, Irpin, oboltusov',
  f03328: 'error, undefined',
  f03339: 'error, China, Luzhou, benxun',
  f03345: 'error, China, Fuzhou, chh',
  f03491: 'error, China, Hong Kong',
  f03544: 'error, China, Guiyang',
  f05315: 'error, USA, Portland, 6block', // error in deal activation: failed to set up called handler: called check error (h: 146885): client: failed to look up deal on chain: deal 607278 not found
  f07824: 'error, China, Shanghai',
  f07850: 'error, USA, Portland, 6block', // error in deal activation: failed to set up called handler: called check error (h: 146885): client: failed to look up deal on chain: deal 610523 not found
  f07982: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: response rejected
  f07990: 'error, China, Hong Kong',
  f07998: 'error, China, Hangzhou',
  f08025: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f08073: 'error, China, Qiqihar, QY7TT',
  f08220: 'error, China, Shenzhen', // failed to restart data transfer: channelId on client deal is nil
  f08371: 'error, China, Chengdu',
  f08383: 'error, USA, Portland, 6block', // error in deal activation: failed to set up called handler: called check error (h: 146885): client: failed to look up deal on chain: deal 607283 not found
  f09833: 'error, USA, San Jose',
  f010035: 'error, Netherlands',
  f010241: 'error, China, Beijing + USA, Portland', // error in deal activation: failed to set up called handler: called check error (h: 146885): client: failed to look up deal on chain: deal 607275 not found
  f010253: 'error, China, Beijing + USA, Portland', // error in deal activation: failed to set up called handler: called check error (h: 146885): client: failed to look up deal on chain: deal 607282 not found
  f010257: 'error, undefined', // stream reset
  f010399: 'error, China, Guangzhou',
  f010493: 'error, China, Shanghai', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010501: 'error, China, Hangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010505: 'error, China, Wuhan',
  f010513: 'error, China, Chongqing',
  f010523: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010528: 'error, China, Chongqing',
  f010558: 'error, China, Shenzhen + Hong Kong',
  f010617: 'error, undefined', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
  f014394: 'error, China, Suzhou',
  f014569: 'error, NR', // failed to initiate data transfer: deal data transfer failed: response rejected
  f015233: 'error, China, Nanjing',
  f015877: 'error, China, Jiaxing + USA', // error in deal activation: failed to set up called handler: called check error (h: 146885): client: failed to look up deal on chain: deal 610556 not found
  f017665: 'error, China, Shenyang', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018501: 'error, China, Beijing',
  f018780: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018781: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018782: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018783: 'error, Singapore + Germany, Frankfurt + USA',
  f018784: 'error, Singapore + Germany, Frankfurt + USA', // failed to restart data transfer: channelId on client deal is nil
  f019022: "error, China, Xi'an",
  f019041: 'error, Singapore', // failed to initiate data transfer: deal data transfer failed: response rejected
  f019240: 'error, China, Beijing',
  f019354: 'error, Germany, Frankfurt', // error in deal activation: failed to set up called handler: called check error (h: 146885): client: failed to look up deal on chain: deal 607296 not found
  f019638: 'error, Germany, Frankfurt', // failed to restart data transfer: channelId on client deal is nil
  f020489: 'error, China, Lioaning',
  f020605: 'error, China, Yibin', // failed to restart data transfer: channelId on client deal is nil
  f020928: 'error, undefined', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f021265: 'error, China, Wuhan', // failed to initiate data transfer: failed to open push data channel: Unable to send request: failed to find any peer in table
  f021444: 'error, China, Guangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f021532: 'error, China, Shanghai',
  f022287: 'error, undefined', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f022289: 'error, China, Mianyang', // error in deal activation: failed to set up called handler: called check error (h: 146885): client: failed to look up deal on chain: deal 610397 not found
  f022522: 'error, China, Dongguan', // failed to restart data transfer: channelId on client deal is nil
  f022853: 'error, China, Fuzhou',
  f023179: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023200: 'error, undefined',
  f023565: 'error, China, Fuzhou',
  f023573: 'error, Japan, Kumamoto',
  f023649: 'error, undefined',
  f023660: 'error, China, Fuzhou',
  f023662: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.091284369820604385 FIL, balance: 0.0873128876205417 FIL): not enough funds to execute transaction
  f023825: 'error, USA, Portland', // error in deal activation: failed to set up called handler: called check error (h: 146885): client: failed to look up deal on chain: deal 607604 not found
  f023853: 'error, China, Fuzhou', // failed to restart data transfer: channelId on client deal is nil
  f023855: 'error, China, Fuzhou',
  f023858: 'error, China, Fuzhou',
  f023870: 'error, China, Fuzhou',
  f023871: 'error, China, Fuzhou',
  f023928: 'error, China, Fuzhou',
  f023939: 'error, NR',
  f024006: 'error, China, Fuzhou',
  f024014: 'error, China, Fuzhou',
  f024015: 'error, USA, Portland', // error in deal activation: failed to set up called handler: called check error (h: 146885): client: failed to look up deal on chain: deal 607741 not found
  f024101: 'error, China, Guiyang', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024136: 'error, China, Fuzhou',
  f024146: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024147: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024148: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024156: 'error, USA', // error in deal activation: failed to set up called handler: called check error (h: 146885): client: failed to look up deal on chain: deal 611099 not found
  f024468: 'error, China, Shenzhen', // failed to restart data transfer: channelId on client deal is nil
  f025025: 'error, China, Qingdao', // failed to restart data transfer: channelId on client deal is nil
  f029421: 'error, undefined', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f030125: 'error, China, Nantong',
  f030226: 'error, China, Fuzhou', // failed to restart data transfer: channelId on client deal is nil
  f030230: 'error, China, Sichuan',
  f030284: 'error, China, Shandong',
  f030347: 'error, undefined',
  f030391: 'error, China, Chengdu',
  f032913: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: response rejected

  // Rejected

  f010048: 'rejected, China, Shanghai',
  f014365: 'rejected, undefined', // sh: 1: /home/miner/.lotusminer/dealfilter.pl: Permission denied

  // Dial

  f05664: 'dial, China, Shenzhen, 艾比特网络科技',
  f08257: 'dial, China, Ningbo + USA, Boardman',
  f010084: 'dial, undefined',
  f022261: 'dial, undefined',
  f029377: 'dial, China, Suzhou',

  // XNR

  // Timeout during ask

  f02822: 'timeout-ask, China, Chengdu',
  f08091: 'timeout-ask, USA',
  f015941: 'timeout-ask, Ukraine, Kyiv',
  f019074: 'timeout-ask, China, Guangdong',
  f022820: 'timeout-ask, China, Guangdong',
  f030158: 'timeout-ask, China, Hangzhou',
  f032904: 'timeout-ask, Korea'

  // Error during ask
}

export default annotations
