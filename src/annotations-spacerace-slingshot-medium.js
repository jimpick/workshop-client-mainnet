// Slingshot test results
//
// Additional testing with files > 128MiB in size

const annotations = {
  // Retest

  // Candidates

  f01234: "candidate, Belgium, De Klinge, Eliovp",
  f01241: "candidate, USA, Portland, 6block",
  f01279: "candidate, China, Sichuan",
  f01280: "candidate, China, Wuxi, 了凡超算",
  f01287: "candidate, China, Jiaxing, MaiTian",
  f02381: "candidate, China, Dongguan, 西野七濑迷叔",
  f02416: "candidate, China, Guangdong, 星际无限",
  f02492: "candidate, China, Shenzhen",
  f02606: "candidate, China, Shanghai",
  f02654: "candidate, China, Shanghai",
  f02665: "candidate, Netherlands, Amsterdam, fm-ops",
  f02668: "candidate, China, Chengdu",
  f03222: "candidate, China, Yuncheong, 星云矿池",
  f03224: "candidate, Ukraine, Irpin, oboltusov",
  f03275: "candidate, USA, Portland, 6block",
  f03302: "candidate, China, Chengdu",
  f03345: "candidate, China, Fuzhou, chh",
  f03482: "candidate, China, Wuxi",
  f03512: "candidate, New Zealand, Auckland, NZFILECOIN01",
  f03544: "candidate, China, Guiyang",
  f07709: "candidate, Korea, Dongjak-gu",
  f07806: "candidate, China, Wuhan, HelloXP",
  f07824: "candidate, China, Shanghai",
  f07919: "candidate, China, Beijing, Shanghai, Hunan",
  f08094: "candidate, China, Guangzhou, dongshao",
  f08220: "candidate, China, Shenzhen",
  f08371: "candidate, China, Chengdu",
  f09569: "candidate, China, Beijing",
  f09770: "candidate, China, Xi'an",
  f010084: "candidate, China, Beijing",
  f010399: "candidate, China, Guangzhou",
  f010491: "candidate, China, Shenzhen",
  f010498: "candidate, China, Shenzhen",
  f010505: "candidate, China, Wuhan",
  f010513: "candidate, China, Chongqing",
  f010528: "candidate, China, Chongqing",
  f014394: "candidate, China, Suzhou",
  f015233: "candidate, China, Nanjing",
  f015941: "candidate, Ukraine, Kyiv",
  f017665: "candidate, China, Shenyang",
  f018783: "candidate, Singapore + Germany, Frankfurt + USA",
  f018784: "candidate, Singapore + Germany, Frankfurt + USA",
  f019041: "candidate, Singapore",
  f019074: "candidate, China, Guangdong",
  f019104: "candidate, Canada, Chambly",
  f019118: "candidate, China, Jiaxing",
  f019240: "candidate, China, Beijing",
  f019243: "candidate, USA, Jackson",
  f019661: "candidate, Russia, Pyatigorsk",
  f020489: "candidate, China, Lioaning",
  f020541: "candidate, China, Shanghai",
  f020608: "candidate, Russia",
  f022163: "candidate, NR",
  f022227: "candidate, China, Jiangsu",
  f022261: "candidate, China, Luzhou",
  f022376: "candidate, China, Dongguan",
  f022753: "candidate, China, Hong Kong",
  f022841: "candidate, China, Zhongshan",
  f022853: "candidate, China, Fuzhou",
  f022922: "candidate, China, Shenzhen",
  f023179: "candidate, China, Fuzhou",
  f023581: "candidate, China, Hong Kong",
  f023939: "candidate, NR",
  f024066: "candidate, NR",
  f024101: "candidate, China, Guiyang",
  f024127: "candidate, China, Fuzhou",
  f024468: "candidate, China, Shenzhen",
  f024550: "candidate, China, Wenzhou",
  f024800: "candidate, China, Hong Kong",
  f024969: "candidate, NR",
  f025007: "candidate, Korea, Gyeonggi-do",
  f029421: "candidate, China, Hong Kong",
  f029566: "candidate, NR",
  f030184: "candidate, USA, Aliquippa",

  // Testing

  // Active

  f015927: 'active, USA, East Islip', // about 6 hours
  f029404: 'active, USA, Portland + New Castle',

  // Active/sealing

  // Sealing

  f01238: 'sealing, Vietnam, Hanoi, FILECOIN-VIETNAM',
  f01247: 'sealing, Canada, Montreal, BigChungus™',
  f01272: 'sealing, Singapore',
  f01278: 'sealing, USA, Grand Rapids, MiMiner',
  f01782: 'sealing, China, Hong Kong + Singapore + USA, Portland, hellofil.com',
  f01800: 'sealing, China, Shenzhen + Chengdu',
  f02301: 'sealing, USA',
  f02388: 'sealing, Netherlands, Amersfoort, Kroketje',
  f02401: 'sealing, Canada, Chambly, NBFS Canada',
  f02501: 'sealing, USA, Portland, 6block',
  f02514: 'sealing, USA, Portland, 6block',
  f02620: 'sealing, Poland, Krakow, @magik6k',
  f02622: 'sealing, USA, Portland, 6block',
  f02623: 'sealing, USA, Portland, 6block',
  f03176: 'sealing, USA, San Mateo, Five Star-Helmsman&Heiben',
  f03223: 'sealing, USA',
  f03273: 'sealing, USA, Portland, 6block',
  f03274: 'sealing, USA, Portland, 6block',
  f03340: "sealing, China, Xi'an",
  f03363: 'sealing, Singapore',
  f03488: 'sealing, Korea, Geumcheon-gu',
  f05315: 'sealing, USA, Portland, 6block',
  f05316: 'sealing, USA, Portland, 6block',
  f05317: 'sealing, USA, Portland',
  f07819: 'sealing, China, Wuxi, YC--wuxi',
  f07850: 'sealing, USA, Portland, 6block',
  f08019: 'sealing, China, Yantai, 三合',
  f08157: 'sealing, China, Beijing + Germany, Frankfurt, 超星际',
  f08240: 'sealing, Russia, Novosibirsk, Rabinovitch',
  f08285: 'sealing, Latvia, Riga, stander',
  f08383: 'sealing, USA, Portland, 6block',
  f08403: 'sealing, UK, Lower Slaughter',
  f09693: 'sealing, USA, Portland + Singapore',
  f09696: 'sealing, USA, Portland + Singapore',
  f09731: 'sealing, China, Guiyang',
  f010088: 'sealing, DNS:purumine.com',
  f010241: 'sealing, China, Beijing + USA, Portland',
  f010253: 'sealing, China, Beijing + USA, Portland',
  f010446: 'sealing, Netherlands',
  f010507: 'sealing, China, Hangzhou',
  f010512: 'sealing, China, Zhengzhou',
  f014324: 'sealing, Canada, Vancouver',
  f014768: 'sealing, Singapore',
  f015734: 'sealing, China, Qingdao',
  f015877: 'sealing, China, Jiaxing + USA',
  f016594: 'sealing, Germany',
  f019100: 'sealing, Romania, Cluj-Napoca',
  f019354: 'sealing, Germany, Frankfurt',
  f019362: 'sealing, China, Hangzhou',
  f019551: 'sealing, UK',
  f020398: 'sealing, China, Zhangjiakou',
  f021255: 'sealing, China, Suzhou + Netherlands',
  f021274: 'sealing, China, Shanghai',
  f021339: 'sealing, China, Jiaxing',
  f021346: 'sealing, China, Shanghai',
  f021357: 'sealing, China, Shanghai',
  f021483: 'sealing, China, Beijing',
  f021540: 'sealing, Germany, Frankfurt, @hsanjuan',
  f021583: 'sealing, China, Jiaxing',
  f021710: 'sealing, China, Shijiazhuang',
  f021870: 'sealing, USA, Portland',
  f022125: 'sealing, China, Shenzhen',
  f022142: 'sealing, USA, Queens',
  f022289: 'sealing, China, Mianyang',
  f023152: 'sealing, China, Quanzhou',
  f023467: 'sealing, Norway, Oslo',
  f023495: 'sealing, China, Beijing + USA, Portland',
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
  f023971: 'sealing, USA, @Brian Y',
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
  f024015: 'sealing, USA, Portland',
  f024016: 'sealing, USA, Portland',
  f024030: 'sealing, Korea, Gwangju',
  f024081: 'sealing, China, Fuzhou',
  f024084: 'sealing, China, Fuzhou',
  f024085: 'sealing, China, Fuzhou',
  f024130: 'sealing, Korea',
  f024136: 'sealing, China, Fuzhou',
  f024156: 'sealing, USA',
  f024944: 'sealing, Korea, Yeongdeungpo-dong',
  f025017: 'sealing, China, Hefei',
  f025019: 'sealing, China, Taiwan, Hsinchu',
  f029556: 'sealing, China, Wuxi',
  f029587: 'sealing, Hungary',
  f029595: 'sealing, China, Guangdong',
  f029628: 'sealing, Australia, Brisbane',
  f030144: 'sealing, Korea, Gyeonggi-do',
  f030152: 'sealing, China, Changsha',
  f030219: 'sealing, China, Changsha',
  f030296: 'sealing, USA, Cary',
  f030335: 'sealing, China, Fujian',
  f030338: 'sealing, USA, Santa Fe Springs',
  f030379: 'sealing, Korea, Uiwang',
  f030518: 'sealing, China, Wuhan',
  f030641: 'sealing, China, Shaanxi',

  // Stuck

  f03339: 'stuck, China, Luzhou, benxun', // Transferring: about 2 hours
  f08073: 'stuck, China, Qiqihar, QY7TT', // Transferring: about 2 hours
  f08204: 'stuck, USA, St. Louis', // ProposalAccepted: about 1 hour
  f09639: 'stuck, China, Fuzhou', // CheckForAcceptance: about 4 hours
  f010035: 'stuck, Netherlands', // Transferring: about 4 hours
  f010247: 'stuck, China, Yantai', // CheckForAcceptance: about 4 hours
  f010558: 'stuck, China, Shenzhen + Hong Kong', // Transferring: about 2 hours
  f014281: 'stuck, Netherlands, Permerend', // ProposalAccepted: about 2 hours
  f019824: 'stuck, USA', // CheckForAcceptance: about 7 hours
  f020436: 'stuck, China, Beijing', // CheckForAcceptance: about 4 hours
  f021532: 'stuck, China, Shanghai', // Transferring: about 4 hours
  f022072: 'stuck, China, Jieyang', // Transferring: about 2 hours
  f022287: 'stuck, China, Dongguan', // CheckForAcceptance: about 4 hours
  f023501: 'stuck, China, Mianyang',
  f023649: 'stuck, Korea, Seoul', // ProposalAccepted: 33 minutes
  f029529: 'stuck, China, Dongguan', // ProposalAccepted: about 3 hours
  f030327: 'stuck, China, Beijing', // ProposalAccepted: 39 minutes
  f030347: 'stuck, China, Zhejiang', // Transferring: about 2 hours
  f030391: 'stuck, China, Chengdu', // CheckForAcceptance: about 3 hours

  // Min-size

  f010479: 'min-size, France, Fontenay-sous-Bois', // 134217728 < 4294967296
  f014409: 'min-size, USA, Waxhaw', // 134217728 < 262144000

  // Min-ask

  // Error

  f01240: 'error, Netherlands, HidNand', // EOF
  f01277: 'error, Sweden, Stockholm, tvsthlm', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: failed to load message: blockstore: block not found
  f01289: 'error, China, Hangzhou + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02387: 'error, Canada, Brampton, NBFS Canada', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
  f02399: 'error, China, Zhejiang', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
  f02405: 'error, China, Shenzhen', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02415: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02419: 'error, China, Shanghai, yuantai', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02576: 'error, Denmark, Gjerlev, BenjaminH', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.066168254449834551 FIL, balance: 0.065864025821538587 FIL): not enough funds to execute transaction
  f02619: 'error, China, Beijing, Blockcasting', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02633: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02645: 'error, China, Hong Kong', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.075978404462843351 FIL, balance: 0.072142108337803117 FIL): not enough funds to execute transaction
  f03328: 'error, China, Xinxiang', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03491: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f03624: 'error, Germany, Chemnitz, ode', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
  f07990: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f07998: 'error, China, Hangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f08025: 'error, China, Hong Kong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f08482: 'error, USA, Athol, @why', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.094202223837650696 FIL, balance: 0.0873128876205417 FIL): not enough funds to execute transaction
  f010048: 'error, China, Shanghai', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.03030303029407737 FIL, balance: 0.013282178191148132 FIL): not enough funds to execute transaction
  f010257: 'error, China, Hong Kong, DNS:feiyuipfs.com', // stream reset
  f010501: 'error, China, Hangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010523: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f010617: 'error, Canada, Surrey, @feiya200', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
  f014569: 'error, NR', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018501: 'error, China, Beijing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018780: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018781: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018782: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f018785: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f019638: 'error, Germany, Frankfurt', // deal failed: (State=26) handing off deal to node: open /lotus/32data/markets/deal-638001-bafyreid5if76lgzuesx32kpjb4ywfilgqkadyfccjij4sqpmsfu5r265yq: no such file or directory
  f020523: 'error, China, Suzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f020605: 'error, China, Yibin', // failed to initiate data transfer: deal data transfer failed: response rejected
  f020904: 'error, Korea, Uijeongbu-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.180386954971792647 FIL, balance: 0.156724950608502781 FIL): validation failure
  f020928: 'error, China, Deyang + Singapore', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f021265: 'error, China, Wuhan', // failed to initiate data transfer: failed to open push data channel: Unable to send request: failed to find any peer in table
  f021444: 'error, China, Guangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f022352: 'error, Norway, Borgen', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f022566: 'error, China, Nanchong', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023200: 'error, China, Shanghai', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023492: 'error, China, Beijing', // AddPiece failed: adding piece to sector: writing piece: pieceCid error: generating piece commitment: failed to build treeCaused by:    0: failed to create data store    1: No such file or directory (os error 2)
  f023647: 'error, Korea, Gangseo-gu', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzaced22nsssn7nvsvtx3box6iqud7rjq24quyhhm7pz7nudjuk6ljxzi n 22038, TS: bafy2bzacedsuamqwqn7jwokww3b46wlozo4aor3cphcymumuwyvn3cdtmugdu n22038)
  f023660: 'error, China, Fuzhou', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f023662: 'error, China, Fuzhou', // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.091284369820604385 FIL, balance: 0.0873128876205417 FIL): not enough funds to execute transaction
  f023853: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f023855: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024146: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024147: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f024148: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f025025: 'error, China, Qingdao', // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
  f030158: 'error, China, Hangzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f030226: 'error, China, Fuzhou', // failed to initiate data transfer: deal data transfer failed: response rejected
  f030230: 'error, China, Sichuan', // failed to initiate data transfer: failed to open push data channel: Unable to send request: routing: not found

  // Timeout during ask

  f01799: 'timeout-ask, China, Jinan, TokenHome',
  f03194: 'timeout-ask, China, Shenzhen, 成都云存&Npool',
  f05664: 'timeout-ask, China, Shenzhen, 艾比特网络科技',
  f09848: 'timeout-ask, USA',

  // Rejected

  f02417: 'rejected, China, Liaoning',
  f03347: 'rejected, China, Shenzhen', // proposed provider collateral below minimum: 0 < 4565067147293
  f014365: 'rejected, Australia, Marrickville + Japan, Heiwajima', // sh: 1: /home/miner/.lotusminer/dealfilter.pl: Permission denied
  f019422: 'rejected, South Africa, Johannesburg',
  f020385: 'rejected, Korea, Incheon', // no online
  f021075: 'rejected, China, Chengdu',
  f023013: 'rejected, China, Hong Kong',
  f023490: 'rejected, Ukraine, Kyiv', // Deal from client wallet f3uzvqlaevh6ebgqdeakba6xmvwc3ogl36aphaq4voiyxv3xvhiuwrtlb2kqlyro7zip64titlng2alwnhfywq begins more than 1 days in the future, I do not like that
  f023678: 'rejected, China, Jiaxing', // no online
  f023854: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024184: 'rejected, Korea, Gangnam-gu',

  // Dial

  f010493: 'dial, China, Shanghai', // * [/ip4/218.78.187.146/tcp/21735] dial tcp4 218.78.187.146:21735: connect: connection refused

  // XNR

  // Error during ask
}

export default annotations
