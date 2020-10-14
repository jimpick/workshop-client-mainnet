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

  f01247: 'active, Canada, Montreal, BigChungus™',
  f01272: 'active, Singapore',
  f01278: 'active, USA, Grand Rapids, MiMiner',
  f01782: 'active, China, Hong Kong + Singapore + USA, Portland, hellofil.com',
  f02416: 'active, China, Guangdong, 星际无限',
  f03176: 'active, USA, San Mateo, Five Star-Helmsman&Heiben',
  f03273: 'active, USA, Portland, 6block',
  f03274: 'active, USA, Portland, 6block',
  f03275: 'active, USA, Portland, 6block',
  f03302: 'active, China, Chengdu',
  f03363: 'active, Singapore',
  f03488: 'active, Korea, Geumcheon-gu',
  f05316: 'active, USA, Portland, 6block',
  f05317: 'active, USA, Portland',
  f07819: 'active, China, Wuxi, YC--wuxi',
  f08019: 'active, China, Yantai, 三合',
  f08094: 'active, China, Guangzhou, dongshao',
  f08157: 'active, China, Beijing + Germany, Frankfurt, 超星际',
  f08240: 'active, Russia, Novosibirsk, Rabinovitch',
  f08403: 'active, UK, Lower Slaughter',
  f09696: 'active, USA, Portland + Singapore',
  f010088: 'active, DNS:purumine.com',
  f010491: 'active, China, Shenzhen',
  f010498: 'active, China, Shenzhen',
  f010507: 'active, China, Hangzhou',
  f014768: 'active, Singapore',
  f015927: 'active, USA, East Islip',
  f019551: 'active, UK',
  f020541: 'active, China, Shanghai',
  f021255: 'active, China, Suzhou + Netherlands',
  f021540: 'active, Germany, Frankfurt, @hsanjuan',
  f021870: 'active, USA, Portland',
  f022227: 'active, China, Jiangsu',
  f023152: 'active, China, Quanzhou',
  f023495: 'active, China, Beijing + USA, Portland',
  f023971: 'active, USA, @Brian Y',
  f024012: 'active, China, Fuzhou',
  f024013: 'active, China, Fuzhou',
  f024030: 'active, Korea, Gwangju',
  f024066: 'active, NR',
  f024081: 'active, China, Fuzhou',
  f024084: 'active, China, Fuzhou',
  f024085: 'active, China, Fuzhou',
  f024800: 'active, China, Hong Kong',
  f024969: 'active, NR',
  f025017: 'active, China, Hefei',
  f025019: 'active, China, Taiwan, Hsinchu',
  f029404: 'active, USA, Portland + New Castle',
  f029556: 'active, China, Wuxi',
  f030296: 'active, USA, Cary',
  f030379: 'active, Korea, Uiwang',

  // Active/sealing

  // Sealing

  f01238: 'sealing, Vietnam, Hanoi, FILECOIN-VIETNAM',
  f01800: 'sealing, China, Shenzhen + Chengdu',
  f02301: 'sealing, USA',
  f02388: 'sealing, Netherlands, Amersfoort, Kroketje',
  f02401: 'sealing, Canada, Chambly, NBFS Canada',
  f02492: 'sealing, China, Shenzhen',
  f02501: 'sealing, USA, Portland, 6block',
  f02514: 'sealing, USA, Portland, 6block',
  f02620: 'sealing, Poland, Krakow, @magik6k',
  f02622: 'sealing, USA, Portland, 6block',
  f02623: 'sealing, USA, Portland, 6block',
  f02665: 'sealing, Netherlands, Amsterdam, fm-ops',
  f03223: 'sealing, USA',
  f03340: "sealing, China, Xi'an",
  f05315: 'sealing, USA, Portland, 6block',
  f07850: 'sealing, USA, Portland, 6block',
  f08285: 'sealing, Latvia, Riga, stander',
  f08383: 'sealing, USA, Portland, 6block',
  f09693: 'sealing, USA, Portland + Singapore',
  f09731: 'sealing, China, Guiyang',
  f09770: "sealing, China, Xi'an",
  f010241: 'sealing, China, Beijing + USA, Portland',
  f010247: 'sealing, China, Yantai',
  f010253: 'sealing, China, Beijing + USA, Portland',
  f010446: 'sealing, Netherlands',
  f014324: 'sealing, Canada, Vancouver',
  f015734: 'sealing, China, Qingdao',
  f015877: 'sealing, China, Jiaxing + USA',
  f016594: 'sealing, Germany',
  f019100: 'sealing, Romania, Cluj-Napoca',
  f019104: 'sealing, Canada, Chambly',
  f019118: 'sealing, China, Jiaxing',
  f019243: 'sealing, USA, Jackson',
  f019354: 'sealing, Germany, Frankfurt',
  f019362: 'sealing, China, Hangzhou',
  f020398: 'sealing, China, Zhangjiakou',
  f020436: 'sealing, China, Beijing',
  f021274: 'sealing, China, Shanghai',
  f021339: 'sealing, China, Jiaxing',
  f021346: 'sealing, China, Shanghai',
  f021357: 'sealing, China, Shanghai',
  f021483: 'sealing, China, Beijing',
  f021583: 'sealing, China, Jiaxing',
  f021710: 'sealing, China, Shijiazhuang',
  f022125: 'sealing, China, Shenzhen',
  f022142: 'sealing, USA, Queens',
  f022289: 'sealing, China, Mianyang',
  f022841: 'sealing, China, Zhongshan',
  f022922: 'sealing, China, Shenzhen',
  f023467: 'sealing, Norway, Oslo',
  f023573: 'sealing, Japan, Kumamoto',
  f023825: 'sealing, USA, Portland',
  f023858: 'sealing, China, Fuzhou',
  f023859: 'sealing, China, Fuzhou',
  f023861: 'sealing, China, Fuzhou',
  f023868: 'sealing, China, Fuzhou',
  f023869: 'sealing, China, Fuzhou',
  f023870: 'sealing, China, Fuzhou',
  f023871: 'sealing, China, Fuzhou',
  f023876: 'sealing, China, Fuzhou',
  f023928: 'sealing, China, Fuzhou',
  f023977: 'sealing, China, Fuzhou',
  f023978: 'sealing, China, Fuzhou',
  f023980: 'sealing, China, Fuzhou',
  f023981: 'sealing, China, Fuzhou',
  f024006: 'sealing, China, Fuzhou',
  f024007: 'sealing, China, Fuzhou',
  f024008: 'sealing, China, Fuzhou',
  f024014: 'sealing, China, Fuzhou',
  f024015: 'sealing, USA, Portland',
  f024016: 'sealing, USA, Portland',
  f024130: 'sealing, Korea',
  f024136: 'sealing, China, Fuzhou',
  f024156: 'sealing, USA',
  f024944: 'sealing, Korea, Yeongdeungpo-dong',
  f029566: 'sealing, NR',
  f029587: 'sealing, Hungary',
  f029595: 'sealing, China, Guangdong',
  f029628: 'sealing, Australia, Brisbane',
  f030152: 'sealing, China, Changsha',
  f030219: 'sealing, China, Changsha',
  f030335: 'sealing, China, Fujian',
  f030338: 'sealing, USA, Santa Fe Springs',
  f030518: 'sealing, China, Wuhan',
  f030641: 'sealing, China, Shaanxi',

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
