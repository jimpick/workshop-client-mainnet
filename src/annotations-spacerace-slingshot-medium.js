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
  f02619: 'retest, China, Beijing, Blockcasting', // client node out of gas
  f08025: 'retest, China, Hong Kong', // client node out of gas
  f010523: 'retest, China, Beijing', // client node out of gas
  f014409: 'retest, USA, Waxhaw', // client node out of gas
  f014569: 'retest, NR', // client node out of gas
  f018785: 'retest, Singapore + Germany, Frankfurt + USA', // client node out of gas
  f020385: 'retest, Korea, Incheon', // client node out of gas
  f020605: 'retest, China, Yibin', // client node out of gas
  f022566: 'retest, China, Nanchong', // client node out of gas
  f023678: 'retest, China, Jiaxing', // client node out of gas

  // Candidates

  // Testing

  // Active

  f01247: 'active, Canada, Montreal, BigChungus™', // 638475
  f01272: 'active, Singapore', // 637896
  f01278: 'active, USA, Grand Rapids, MiMiner', // 637943
  f01782: 'active, China, Hong Kong + Singapore + USA, Portland, hellofil.com', // 636646
  f02416: 'active, China, Guangdong, 星际无限', // 640153
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
  f09696: 'active, USA, Portland + Singapore', // 637892
  f010088: 'active, DNS:purumine.com', // 638482
  f010491: 'active, China, Shenzhen', // 640003
  f010498: 'active, China, Shenzhen', // 640173
  f010507: 'active, China, Hangzhou', // 638486
  f014768: 'active, Singapore', // 638484
  f015927: 'active, USA, East Islip', // 610534
  f019551: 'active, UK', // 636790
  f020541: 'active, China, Shanghai', // 640111
  f021255: 'active, China, Suzhou + Netherlands', // 638037
  f021540: 'active, Germany, Frankfurt, @hsanjuan', // 638555
  f021870: 'active, USA, Portland', // 638471
  f022227: 'active, China, Jiangsu', // 640662
  f023152: 'active, China, Quanzhou', // 636787
  f023495: 'active, China, Beijing + USA, Portland', // 638469
  f023971: 'active, USA, @Brian Y', // 637125
  f024012: 'active, China, Fuzhou', // 604376
  f024013: 'active, China, Fuzhou', // 604140
  f024030: 'active, Korea, Gwangju', // 637137
  f024066: 'active, NR', // 639846
  f024081: 'active, China, Fuzhou', // 604430
  f024084: 'active, China, Fuzhou', // 604369
  f024085: 'active, China, Fuzhou', // 604539
  f024800: 'active, China, Hong Kong', // 640042
  f024969: 'active, NR', // 640063
  f025017: 'active, China, Hefei', // 638552
  f025019: 'active, China, Taiwan, Hsinchu', // 637930
  f029404: 'active, USA, Portland + New Castle',
  f029556: 'active, China, Wuxi', // 636729
  f030296: 'active, USA, Cary', // 636964
  f030379: 'active, Korea, Uiwang', // 637023

  // Active/sealing

  // Sealing

  f01238: 'sealing, Vietnam, Hanoi, FILECOIN-VIETNAM', // 638027
  f01800: 'sealing, China, Shenzhen + Chengdu', // 637852
  f02301: 'sealing, USA', // 637950
  f02388: 'sealing, Netherlands, Amersfoort, Kroketje', // 637890
  f02401: 'sealing, Canada, Chambly, NBFS Canada', // 637974
  f02492: 'sealing, China, Shenzhen', // 640361
  f02501: 'sealing, USA, Portland, 6block', // 607279
  f02514: 'sealing, USA, Portland, 6block', // 607496
  f02620: 'sealing, Poland, Krakow, @magik6k', // 638472
  f02622: 'sealing, USA, Portland, 6block', // 610403
  f02623: 'sealing, USA, Portland, 6block', // 610920
  f02665: 'sealing, Netherlands, Amsterdam, fm-ops', // 640077
  f03223: 'sealing, USA', // 637913
  f03340: "sealing, China, Xi'an", // 636711
  f05315: 'sealing, USA, Portland, 6block', // 607278
  f07850: 'sealing, USA, Portland, 6block', // 610523
  f08285: 'sealing, Latvia, Riga, stander', // 636429
  f08383: 'sealing, USA, Portland, 6block', // 607283
  f09693: 'sealing, USA, Portland + Singapore', // 607276
  f09731: 'sealing, China, Guiyang', // 637872
  f09770: "sealing, China, Xi'an", // 665564
  f010241: 'sealing, China, Beijing + USA, Portland', // 607275
  f010247: 'sealing, China, Yantai', // 636657
  f010253: 'sealing, China, Beijing + USA, Portland', // 607282
  f010446: 'sealing, Netherlands', // 638591
  f014324: 'sealing, Canada, Vancouver', // 636892
  f015734: 'sealing, China, Qingdao', // 636961
  f015877: 'sealing, China, Jiaxing + USA', // 610556
  f016594: 'sealing, Germany', // 637865
  f019100: 'sealing, Romania, Cluj-Napoca', // 638470
  f019104: 'sealing, Canada, Chambly', // 640046
  f019118: 'sealing, China, Jiaxing', // 641067
  f019243: 'sealing, USA, Jackson', // 640152
  f019354: 'sealing, Germany, Frankfurt', // 607296
  f019362: 'sealing, China, Hangzhou', // 636647
  f020398: 'sealing, China, Zhangjiakou',
  f020436: 'sealing, China, Beijing', // 636724
  f021274: 'sealing, China, Shanghai', // 636678
  f021339: 'sealing, China, Jiaxing', // 636422
  f021346: 'sealing, China, Shanghai', // 636865
  f021357: 'sealing, China, Shanghai', // 636908
  f021483: 'sealing, China, Beijing',
  f021583: 'sealing, China, Jiaxing', // 637878
  f021710: 'sealing, China, Shijiazhuang', // 637997
  f022125: 'sealing, China, Shenzhen',
  f022142: 'sealing, USA, Queens', // 638480
  f022289: 'sealing, China, Mianyang', // 610397
  f022841: 'sealing, China, Zhongshan', // 640061
  f022922: 'sealing, China, Shenzhen', // 639958
  f023467: 'sealing, Norway, Oslo', // 637875
  f023573: 'sealing, Japan, Kumamoto', // 591570
  f023825: 'sealing, USA, Portland', // 607604
  f023858: 'sealing, China, Fuzhou', // 604593
  f023859: 'sealing, China, Fuzhou', // 604594
  f023861: 'sealing, China, Fuzhou', // 604253
  f023868: 'sealing, China, Fuzhou', // 604342
  f023869: 'sealing, China, Fuzhou', // 604316
  f023870: 'sealing, China, Fuzhou', // 604214
  f023871: 'sealing, China, Fuzhou', // 604455
  f023876: 'sealing, China, Fuzhou', // 604460
  f023928: 'sealing, China, Fuzhou', // 604344
  f023977: 'sealing, China, Fuzhou', // 604247
  f023978: 'sealing, China, Fuzhou', // 604531
  f023980: 'sealing, China, Fuzhou', // 604246
  f023981: 'sealing, China, Fuzhou', // 604268
  f024006: 'sealing, China, Fuzhou', // 604340
  f024007: 'sealing, China, Fuzhou', // 604296
  f024008: 'sealing, China, Fuzhou', // 604228
  f024014: 'sealing, China, Fuzhou', // 604289
  f024015: 'sealing, USA, Portland', // 607741
  f024016: 'sealing, USA, Portland', // 607599
  f024130: 'sealing, Korea', // 637065
  f024136: 'sealing, China, Fuzhou', // 604701
  f024156: 'sealing, USA', // 611099
  f024944: 'sealing, Korea, Yeongdeungpo-dong', // 636742
  f029566: 'sealing, NR', // 640058
  f029587: 'sealing, Hungary', // 636827
  f029595: 'sealing, China, Guangdong',
  f029628: 'sealing, Australia, Brisbane',
  f030152: 'sealing, China, Changsha',
  f030219: 'sealing, China, Changsha',
  f030335: 'sealing, China, Fujian', // 636939
  f030338: 'sealing, USA, Santa Fe Springs', // 637119
  f030518: 'sealing, China, Wuhan', // 637121
  f030641: 'sealing, China, Shaanxi', // 636870

  // Stuck

  f03482: 'stuck, China, Wuxi', // ProposalAccepted: about 3 hours
  f03512: 'stuck, New Zealand, Auckland, NZFILECOIN01', // ProposalAccepted: about 3 hours
  f07806: 'stuck, China, Wuhan, HelloXP', // ProposalAccepted: about 3 hours
  f08204: 'stuck, USA, St. Louis', // ProposalAccepted: about 3 hours
  f09639: 'stuck, China, Fuzhou', // CheckForAcceptance: about 3 hours
  f014281: 'stuck, Netherlands, Permerend', // ProposalAccepted: about 3 hours
  f019824: 'stuck, USA', // CheckForAcceptance: about 3 hours
  f022376: 'stuck, China, Dongguan', // ProposalAccepted: about 3 hours
  f022753: 'stuck, China, Hong Kong', // ProposalAccepted: about 3 hours
  f023501: 'stuck, China, Mianyang',
  f024550: 'stuck, China, Wenzhou', // ProposalAccepted: about 3 hours
  f029529: 'stuck, China, Dongguan', // ProposalAccepted: about 3 hours
  f030327: 'stuck, China, Beijing', // ProposalAccepted: about 3 hours

  // Min-size

  f010479: 'min-size, France, Fontenay-sous-Bois', // 134217728 < 4294967296

  // Min-ask

  f01234: 'min-ask, Belgium, De Klinge, Eliovp',
  f01279: 'min-ask, China, Sichuan',
  f02381: 'min-ask, China, Dongguan, 西野七濑迷叔',
  f02654: 'min-ask, China, Shanghai',
  f07709: 'min-ask, Korea, Dongjak-gu',
  f07919: 'min-ask, China, Beijing, Shanghai, Hunan',
  f09569: 'min-ask, China, Beijing',
  f019661: 'min-ask, Russia, Pyatigorsk',
  f020608: 'min-ask, Russia',
  f023581: 'min-ask, China, Hong Kong',
  f024127: 'min-ask, China, Fuzhou',
  f030184: 'min-ask, USA, Aliquippa',

  // Error

  f01240: 'error, Netherlands, HidNand', // EOF
  f01241: 'error, USA, Portland, 6block', // failed to initiate data transfer: deal data transfer failed: response rejected
  f01277: 'error, Sweden, Stockholm, tvsthlm',
  f01280: 'error, China, Wuxi, 了凡超算', // failed to initiate data transfer: deal data transfer failed: response rejected
  f01289: 'error, China, Hangzhou + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02387: 'error, Canada, Brampton, NBFS Canada', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
  f02399: 'error, China, Zhejiang', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
  f02419: 'error, China, Shanghai, yuantai',
  f02576: 'error, Denmark, Gjerlev, BenjaminH', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.066168254449834551 FIL, balance: 0.065864025821538587 FIL): not enough funds to execute transaction
  f02606: 'error, China, Shanghai', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02633: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02645: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.075978404462843351 FIL, balance: 0.072142108337803117 FIL): not enough funds to execute transaction
  f03222: 'error, China, Yuncheong, 星云矿池', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03224: 'error, Ukraine, Irpin, oboltusov', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03328: 'error, China, Xinxiang', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03339: 'error, China, Luzhou, benxun', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03345: 'error, China, Fuzhou, chh', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03491: 'error, China, Hong Kong',
  f03544: 'error, China, Guiyang', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03624: 'error, Germany, Chemnitz, ode',
  f07824: 'error, China, Shanghai', // failed to initiate data transfer: deal data transfer failed: response rejected
  f07990: 'error, China, Hong Kong',
  f07998: 'error, China, Hangzhou',
  f08073: 'error, China, Qiqihar, QY7TT', // failed to initiate data transfer: deal data transfer failed: response rejected
  f08220: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: response rejected
  f08371: 'error, China, Chengdu', // failed to initiate data transfer: deal data transfer failed: response rejected
  f08482: 'error, USA, Athol, @why',
  f010035: 'error, Netherlands', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010048: 'error, China, Shanghai',
  f010257: 'error, China, Hong Kong, DNS:feiyuipfs.com', // stream reset
  f010399: 'error, China, Guangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010501: 'error, China, Hangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010512: 'error, China, Zhengzhou', // error in deal activation: handling applied event: deal wasn't active: deal=636882, parentState=bafy2bzaceacozikczrbtk4674wqjjln32rt3zu3gsozob7i3gy74arpew4osw, h=143330
  f010558: 'error, China, Shenzhen + Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010617: 'error, Canada, Surrey, @feiya200', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
  f014394: 'error, China, Suzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f015233: 'error, China, Nanjing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f017665: 'error, China, Shenyang', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018501: 'error, China, Beijing',
  f018780: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018781: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018782: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018783: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: failed to open push data channel: Unable to send request: context deadline exceeded
  f019041: 'error, Singapore', // failed to initiate data transfer: deal data transfer failed: response rejected
  f019240: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f019638: 'error, Germany, Frankfurt', // deal failed: (State=26) handing off deal to node: open /lotus/32data/markets/deal-638001-bafyreid5if76lgzuesx32kpjb4ywfilgqkadyfccjij4sqpmsfu5r265yq: no such file or directory
  f020489: 'error, China, Lioaning', // failed to initiate data transfer: deal data transfer failed: response rejected
  f020523: 'error, China, Suzhou',
  f020904: 'error, Korea, Uijeongbu-si',
  f020928: 'error, China, Deyang + Singapore', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f021265: 'error, China, Wuhan', // failed to initiate data transfer: failed to open push data channel: Unable to send request: failed to find any peer in table
  f021444: 'error, China, Guangzhou',
  f021532: 'error, China, Shanghai', // failed to initiate data transfer: deal data transfer failed: response rejected
  f022072: 'error, China, Jieyang', // failed to initiate data transfer: deal data transfer failed: response rejected
  f022163: 'error, NR',
  f022287: 'error, China, Dongguan', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f022352: 'error, Norway, Borgen', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f022853: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023179: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023200: 'error, China, Shanghai', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023492: 'error, China, Beijing',
  f023647: 'error, Korea, Gangseo-gu',
  f023649: 'error, Korea, Seoul', // error validating deal published: waiting for deal publish message: found message with equal nonce as the one we are looking for (F:bafy2bzacedsuamqwqn7jwokww3b46wlozo4aor3cphcymumuwyvn3cdtmugdu n 22038, TS: bafy2bzaceaetmpb2jlzwjvfufufdwmgbqjsvatu46pvjdjgc7stvdhkwqrmi6 n22038)
  f023660: 'error, China, Fuzhou',
  f023662: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.091284369820604385 FIL, balance: 0.0873128876205417 FIL): not enough funds to execute transaction
  f023853: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023855: 'error, China, Fuzhou',
  f023939: 'error, NR', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024101: 'error, China, Guiyang', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024146: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024147: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024148: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024468: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: response rejected
  f025007: 'error, Korea, Gyeonggi-do', // error validating deal published: waiting for deal publish message: found message with equal nonce as the one we are looking for (F:bafy2bzaced7eb4zfcvidarstkxs2l56cjdfm2ovhpdemjddddhdmqpav4hc64 n 56, TS: bafy2bzacedzwakusvrmylcq2lcqw5jdknqgoj2daqxntjobm5h6mjyw2ta2cm n56)
  f025025: 'error, China, Qingdao', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f029421: 'error, China, Hong Kong', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f030144: 'error, Korea, Gyeonggi-do', // error in deal activation: failed to set up called handler: called check error (h: 143916): client: failed to look up deal on chain: deal 593584 not found
  f030158: 'error, China, Hangzhou',
  f030226: 'error, China, Fuzhou',
  f030230: 'error, China, Sichuan',
  f030347: 'error, China, Zhejiang', // failed to initiate data transfer: deal data transfer failed: response rejected
  f030391: 'error, China, Chengdu', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed

  // Rejected

  f02417: 'rejected, China, Liaoning',
  f03347: 'rejected, China, Shenzhen', // proposed provider collateral below minimum: 0 < 4565067147293
  f014365: 'rejected, Australia, Marrickville + Japan, Heiwajima', // sh: 1: /home/miner/.lotusminer/dealfilter.pl: Permission denied
  f019422: 'rejected, South Africa, Johannesburg',
  f021075: 'rejected, China, Chengdu',
  f023013: 'rejected, China, Hong Kong',
  f023490: 'rejected, Ukraine, Kyiv',
  f023854: 'rejected, China, Fuzhou',
  f024184: 'rejected, Korea, Gangnam-gu',

  // Dial

  f010084: 'dial, China, Beijing', // * [/ip4/106.54.88.171/tcp/10240] dial tcp4 106.54.88.171:10240: connect: no route to host
  f010493: 'dial, China, Shanghai', // * [/ip4/218.78.187.146/tcp/21735] dial tcp4 218.78.187.146:21735: connect: connection refused
  f022261: 'dial, China, Luzhou', // * [/ip4/175.155.178.195/tcp/7777] dial tcp4 175.155.178.195:7777: i/o timeout

  // XNR

  // Timeout during ask

  f01287: 'timeout-ask, China, Jiaxing, MaiTian',
  f01799: 'timeout-ask, China, Jinan, TokenHome',
  f02668: 'timeout-ask, China, Chengdu',
  f03194: 'timeout-ask, China, Shenzhen, 成都云存&Npool',
  f05664: 'timeout-ask, China, Shenzhen, 艾比特网络科技',
  f09848: 'timeout-ask, USA',
  f010505: 'timeout-ask, China, Wuhan',
  f010513: 'timeout-ask, China, Chongqing',
  f010528: 'timeout-ask, China, Chongqing',
  f015941: 'timeout-ask, Ukraine, Kyiv',
  f018784: 'timeout-ask, Singapore + Germany, Frankfurt + USA',
  f019074: 'timeout-ask, China, Guangdong'

  // Error during ask
}

export default annotations
