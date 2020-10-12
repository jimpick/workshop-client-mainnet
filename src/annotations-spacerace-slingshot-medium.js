// Slingshot test results
//
// Additional testing with files > 128MiB in size

const annotations = {

  // Undefined
  f02417: 'rejected, China, Liaoning', // sh: 1: jq: not found
  f03347: 'sealing, China, Shenzhen',
  f014365: 'min-size, Australia, Marrickville + Japan, Heiwajima', // 131072 < 134217728
  f019422: 'rejected, South Africa, Johannesburg', // no online
  f021075: 'stuck, China, Chengdu', // CheckForAcceptance: about 5 hours
  f023013: 'stuck, China, Hong Kong', // CheckForAcceptance: about 5 hours
  f023854: 'sealing, China, Fuzhou',
  f024184: 'stuck, Korea, Gangnam-gu', // CheckForAcceptance: about 7 hours

  f01279: 'stuck, China, Sichuan', // CheckForAcceptance: about 6 hours
  f02416: 'stuck, China, Guangdong, 星际无限', // CheckForAcceptance: about 7 hours
  f02419: 'stuck, China, Shanghai, yuantai', // CheckForAcceptance: about 6 hours
  f02492: 'stuck, China, Shenzhen', // CheckForAcceptance: about 6 hours
  f02606: 'stuck, China, Shanghai', // CheckForAcceptance: about 7 hours
  f02625: 'stuck, China, Shanghai, IPFS星际工厂', // CheckForAcceptance: about 6 hours
  f03134: 'stuck, China, Cangzhou, 乔木信息', // CheckForAcceptance: about 5 hours
  f03143: 'stuck, China, Shijiazhuang + Hong Kong', // CheckForAcceptance: about 7 hours
  f03176: 'stuck, USA, San Mateo, Five Star-Helmsman&Heiben', // CheckForAcceptance: about 7 hours
  f03302: 'stuck, China, Chengdu', // CheckForAcceptance: about 6 hours
  f03345: 'stuck, China, Fuzhou, chh', // CheckForAcceptance: about 6 hours
  f03363: 'stuck, Singapore', // CheckForAcceptance: about 6 hours
  f03364: 'stuck, China, Guangzhou', // FundsEnsured: about 6 hours
  f03482: 'stuck, China, Wuxi', // CheckForAcceptance: about 6 hours
  f03512: 'stuck, New Zealand, Auckland, NZFILECOIN01', // CheckForAcceptance: about 5 hours
  f03544: 'stuck, China, Guiyang', // CheckForAcceptance: about 6 hours
  f04443: 'stuck, China, Shanghai, 罗良科技', // CheckForAcceptance: about 6 hours
  f07806: 'stuck, China, Wuhan, HelloXP', // CheckForAcceptance: about 6 hours
  f07824: 'stuck, China, Shanghai', // CheckForAcceptance: about 6 hours
  f08157: 'stuck, China, Beijing + Germany, Frankfurt, 超星际', // CheckForAcceptance: about 7 hours
  f08204: 'stuck, USA, St. Louis', // CheckForAcceptance: about 6 hours
  f08220: 'stuck, China, Shenzhen', // CheckForAcceptance: about 5 hours
  f08371: 'stuck, China, Chengdu', // CheckForAcceptance: about 6 hours
  f08474: 'stuck, China, Hong Kong', // CheckForAcceptance: about 6 hours
  f010399: 'stuck, China, Guangzhou', // CheckForAcceptance: about 6 hours
  f010400: 'stuck, China, Shenyang', // CheckForAcceptance: about 6 hours
  f010491: 'stuck, China, Shenzhen', // CheckForAcceptance: about 5 hours
  f010513: 'stuck, China, Chongqing', // CheckForAcceptance: about 7 hours
  f010558: 'stuck, China, Shenzhen + Hong Kong', // CheckForAcceptance: about 5 hours
  f014281: 'stuck, Netherlands, Permerend', // CheckForAcceptance: about 5 hours
  f014394: 'stuck, China, Suzhou', // CheckForAcceptance: about 7 hours
  f014768: 'stuck, Singapore', // CheckForAcceptance: about 6 hours
  f015233: 'stuck, China, Nanjing', // CheckForAcceptance: about 7 hours
  f015941: 'stuck, Ukraine, Kyiv', // CheckForAcceptance: about 6 hours
  f016594: 'stuck, Germany', // CheckForAcceptance: about 6 hours
  f017665: 'stuck, China, Shenyang', // CheckForAcceptance: about 6 hours
  f019041: 'stuck, Singapore', // CheckForAcceptance: about 6 hours
  f019104: 'stuck, Canada, Chambly', // CheckForAcceptance: about 6 hours
  f019118: 'stuck, China, Jiaxing', // CheckForAcceptance: about 5 hours
  f019240: 'stuck, China, Beijing', // CheckForAcceptance: about 6 hours
  f019243: 'stuck, USA, Jackson', // CheckForAcceptance: about 5 hours
  f019437: 'stuck, Korea, Guro-gu', // CheckForAcceptance: about 6 hours
  f019638: 'stuck, Germany, Frankfurt', // CheckForAcceptance: about 7 hours
  f020489: 'stuck, China, Lioaning', // CheckForAcceptance: about 6 hours
  f020523: 'stuck, China, Suzhou', // CheckForAcceptance: about 6 hours
  f020904: 'stuck, Korea, Uijeongbu-si', // CheckForAcceptance: about 5 hours
  f021255: 'stuck, China, Suzhou + Netherlands', // CheckForAcceptance: about 5 hours
  f021444: 'stuck, China, Guangzhou', // CheckForAcceptance: about 5 hours
  f021583: 'stuck, China, Jiaxing', // CheckForAcceptance: about 7 hours
  f021710: 'stuck, China, Shijiazhuang', // CheckForAcceptance: about 7 hours
  f021870: 'stuck, USA, Portland', // CheckForAcceptance: about 7 hours
  f022072: 'stuck, China, Jieyang', // CheckForAcceptance: about 5 hours
  f022261: 'stuck, China, Luzhou', // CheckForAcceptance: about 5 hours
  f022522: 'stuck, China, Dongguan', // CheckForAcceptance: about 4 hours
  f022753: 'stuck, China, Hong Kong', // CheckForAcceptance: about 6 hours
  f022855: 'stuck, Finland, Helsinki', // CheckForAcceptance: about 5 hours
  f022922: 'stuck, China, Shenzhen', // CheckForAcceptance: about 6 hours
  f023179: 'stuck, China, Fuzhou', // CheckForAcceptance: about 6 hours
  f023581: 'stuck, China, Hong Kong', // CheckForAcceptance: about 5 hours
  f023647: 'stuck, Korea, Gangseo-gu', // CheckForAcceptance: about 6 hours
  f023649: 'stuck, Korea, Seoul', // CheckForAcceptance: about 5 hours
  f023939: 'stuck, NR', // CheckForAcceptance: about 7 hours
  f024066: 'stuck, NR', // CheckForAcceptance: about 7 hours
  f024127: 'stuck, China, Fuzhou', // CheckForAcceptance: about 6 hours
  f024468: 'stuck, China, Shenzhen', // CheckForAcceptance: about 6 hours
  f024550: 'stuck, China, Wenzhou', // CheckForAcceptance: about 7 hours
  f024800: 'stuck, China, Hong Kong', // CheckForAcceptance: about 7 hours
  f024902: 'stuck, Korea, Incheon', // CheckForAcceptance: about 6 hours
  f024969: 'stuck, NR', // CheckForAcceptance: about 7 hours
  f025007: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 6 hours
  f025019: 'stuck, China, Taiwan, Hsinchu', // CheckForAcceptance: about 6 hours
  f029421: 'stuck, China, Hong Kong', // CheckForAcceptance: about 6 hours
  f029490: 'stuck, NR', // CheckForAcceptance: about 6 hours
  f030158: 'stuck, China, Hangzhou', // CheckForAcceptance: about 6 hours
  f030226: 'stuck, China, Fuzhou', // CheckForAcceptance: about 6 hours
  f030230: 'stuck, China, Sichuan', // CheckForAcceptance: about 6 hours
  f02305: 'xxerror, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.06060606054336054 FIL, balance: 0.042649589674782313 FIL): validation failure
  f03223: 'error, USA', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f03224: 'error, Ukraine, Irpin, oboltusov', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.030303030277742156 FIL, balance: 0.00208063857785629 FIL): not enough funds to execute transaction
  f03273: 'error, USA, Portland, 6block', // deal failed: (State=26) error activating deal: failed to set up called handler: called check error (h: 136634): failed to look up deal on chain: deal 601360 not found
  f03274: 'error, USA, Portland, 6block', // deal failed: (State=26) error activating deal: failed to set up called handler: called check error (h: 136768): failed to look up deal on chain: deal 601378 not found
  f03275: 'error, USA, Portland, 6block', // deal failed: (State=26) error activating deal: failed to set up called handler: called check error (h: 136905): failed to look up deal on chain: deal 601365 not found
  f03339: 'error, China, Luzhou, benxun', // error in deal activation: failed to set up called handler: called check error (h: 137666): client: failed to look up deal on chain: deal 601535 not found
  f05317: 'error, USA, Portland', // deal failed: (State=26) error activating deal: failed to set up called handler: called check error (h: 137196): failed to look up deal on chain: deal 601363 not found
  f08073: 'error, China, Qiqihar, QY7TT', // sending proposal to storage provider failed: stream reset
  f08094: 'error, China, Guangzhou, dongshao', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f010048: 'error, China, Shanghai', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.030303030248094655 FIL, balance: 0.013290485751603667 FIL): not enough funds to execute transaction
  f010063: 'error, China, Mianyang', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f017734: 'error, Australia, Sydney', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f018772: 'error, Australia', // stream reset
  f018784: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f019100: 'error, Romania, Cluj-Napoca', // EOF
  f021328: 'error, China, Dongguan', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f022227: 'error, China, Jiangsu', // stream reset
  f022376: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.099999999946632886 FIL, balance: 0.003419950457033383 FIL): not enough funds to execute transaction
  f022832: 'error, China', // stream reset
  f022841: 'error, China, Zhongshan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.09999999995681995 FIL, balance: 0.016288660356785037 FIL): not enough funds to execute transaction
  f024617: 'error, Korea, Bucheon-si', // EOF
  f02490: 'rejected, China, Fujian', // syntax error at /root/.lotusstorage/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /root/.lotusstorage/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /root/.lotusstorage/dealfilter.pl line 23.
  f08264: 'rejected, China, Xianning', // no online
  f09675: 'rejected, China, Weifang',
  f015747: 'rejected, Japan, Setagaya-ku',
  f016563: 'rejected, China, Deyang', // Deals from client wallet f3vp7m3244tjtxrvg4n2lfedtqnnnzhyno3ym6vnl4wzozztik4f2kvzfbfbgzcga7g3mckddw6x4ahp5n4iwa are not welcome
  f020742: 'rejected, China, Shanghai + Hangzhou + Shaoxing', // no online
  f021316: 'rejected, China, Yangzhou', // sh: 1: /lotus_data/.lotusstorage/dealfilter.pl: not found
  f021479: 'rejected, China, Qingdao',
  f022969: 'rejected, China, Chengdu', // no online
  f023467: 'rejected, Norway, Oslo', // no online
  f023843: 'rejected, NR',
  f02772: 'dial, China, Chengdu', // * [/ip4/118.123.228.196/tcp/48633] dial tcp4 118.123.228.196:48633: connect: connection refused  * [/ip4/118.123.228.197/tcp/48633] dial tcp4 118.123.228.197:48633: connect: connection refused
  f09002: 'dial, Singapore', // * [/ip4/113.200.194.196/tcp/32634] dial tcp4 0.0.0.0:45349->113.200.194.196:32634: i/o timeout
  f09592: 'dial, Japan, Minamata', // * [/ip4/203.189.40.203/tcp/10252] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWKsEsCefspqqDZDJcQMe6AY9pVKQh5BfYQLJMZ8jD3T6c, but remote key matches 12D3KooWSpji7fDLrXGiM9Gbcy8tzCTYk5ed7ukmaTAznnLMxqGf
  f09770: "dial, China, Xi'an", // * [/ip4/161.117.229.243/tcp/9770] dial tcp4 161.117.229.243:9770: connect: connection refused
  f010084: 'dial, China, Beijing', // * [/ip4/106.54.88.171/tcp/10240] dial tcp4 106.54.88.171:10240: i/o timeout
  f010446: 'dial, Netherlands', // * [/ip4/143.178.96.190/tcp/24002] dial tcp4 143.178.96.190:24002: connect: connection refused
  f014329: 'dial, China, Hong Kong', // * [/ip4/65.181.71.9/tcp/5472] dial tcp4 65.181.71.9:5472: connect: connection refused
  f017970: 'dial, China, Baoding', // * [/ip4/222.222.135.67/tcp/37745] dial tcp4 222.222.135.67:37745: connect: connection refused
  f019174: 'dial, UK, Halifax', // * [/ip4/185.177.124.24/tcp/42012] dial tcp4 185.177.124.24:42012: connect: connection refused
  f020923: 'dial, China, Cangzhou', // * [/ip4/221.195.3.147/tcp/10240] dial tcp4 221.195.3.147:10240: connect: connection refused
  f021540: 'dial, Germany, Frankfurt, @hsanjuan', // * [/ip4/18.158.237.250/tcp/6666] dial tcp4 18.158.237.250:6666: connect: connection refused
  f022820: 'dial, China, Guangdong', // * [/ip4/183.232.116.200/tcp/4001] dial tcp4 183.232.116.200:4001: connect: connection refused
  f023229: 'dial, China, Shandong', // * [/ip4/106.74.192.3/tcp/36980] dial tcp4 0.0.0.0:45349->106.74.192.3:36980: i/o timeout
  f024025: 'dial, China, Chengdu', // * [/ip4/171.221.236.129/tcp/32759] dial tcp4 171.221.236.129:32759: connect: connection refused
  f024521: 'dial, Korea, Gyeonggi-do', // * [/ip4/59.6.127.31/tcp/10241] dial tcp4 59.6.127.31:10241: connect: connection refused
  f024903: 'dial, China, Mianyang', // * [/ip6/::1/tcp/39545] dial tcp6 [::1]:39545: connect: connection refused  * [/ip4/127.0.0.1/tcp/37615] dial tcp4 127.0.0.1:37615: connect: connection refused  * [/ip4/117.175.0.137/tcp/37615] dial tcp4 0.0.0.0:45349->117.175.0.137:37615: i/o timeout
  f024986: 'dial, China, Zhongshan', // * [/ip4/192.168.2.64/tcp/3000] dial tcp4 0.0.0.0:45349->192.168.2.64:3000: i/o timeout
  f08311: 'xnr, China, Shenzhen',
  f09731: 'xnr, China, Guiyang',
  f09833: 'xnr, USA, San Jose',
  f010438: 'xnr, USA',
  f016482: 'xnr, USA, Aliquippa',
  f019024: 'xnr, China, Sichuan',
  f019074: 'xnr, China, Guangdong',
  f020975: 'xnr, China, Shandong',
  f022836: 'xnr, China, Chongqing',
  f023108: 'xnr, China, Dongguan',
  f023501: 'xnr, China, Mianyang',
  f023526: 'xnr, China, Chongqing',
  f023571: 'xnr, NR',
  f024101: 'xnr, China, Guiyang',
  f024496: 'xnr, China, Dongguan',

  // Retest

	f02405: "retest, China, Shenzhen", // client node out of gas
	f02415: "retest, China, Hong Kong", // client node out of gas
	f02619: "retest, China, Beijing, Blockcasting", // client node out of gas
	f02622: "retest, USA, Portland, 6block", // client node out of gas
	f02623: "retest, USA, Portland, 6block", // client node out of gas
	f07850: "retest, USA, Portland, 6block", // client node out of gas
	f07990: "retest, China, Hong Kong", // client node out of gas
	f07998: "retest, China, Hangzhou", // client node out of gas
	f08025: "retest, China, Hong Kong", // client node out of gas
	f08285: "retest, Latvia, Riga, stander", // client node out of gas
	f010501: "retest, China, Hangzhou", // client node out of gas
	f010523: "retest, China, Beijing", // client node out of gas
	f014409: "retest, USA, Waxhaw", // client node out of gas
	f014569: "retest, NR", // client node out of gas
	f015877: "retest, China, Jiaxing + USA", // client node out of gas
	f015927: "retest, USA, East Islip", // client node out of gas
	f018785: "retest, Singapore + Germany, Frankfurt + USA", // client node out of gas
	f020385: "retest, Korea, Incheon", // client node out of gas
	f020605: "retest, China, Yibin", // client node out of gas
	f021265: "retest, China, Wuhan", // client node out of gas
	f022289: "retest, China, Mianyang", // client node out of gas
	f022566: "retest, China, Nanchong", // client node out of gas
	f023678: "retest, China, Jiaxing", // client node out of gas

  // Candidates

	f03194: "candidate, China, Shenzhen, 成都云存&Npool",
	f03328: "candidate, China, Xinxiang",
	f05664: "candidate, China, Shenzhen, 艾比特网络科技",
	f024156: "candidate, USA",
	f030184: "candidate, USA, Aliquippa",

  // Testing

  f019661: "testing, Russia, Pyatigorsk",

  // Active

  f01152: "active, China, Beijing",
	f01234: "active, Belgium, De Klinge, Eliovp",
	f01238: "active, Vietnam, Hanoi, FILECOIN-VIETNAM",
	f01241: "active, USA, Portland, 6block",
	f01247: "active, Canada, Montreal, BigChungus™",
	f01272: "active, Singapore",
	f01276: "active, Canada, Brampton, NBFS Canada",
	f01278: "active, USA, Grand Rapids, MiMiner",
	f01799: "active, China, Jinan, TokenHome",
	f01800: "active, China, Shenzhen + Chengdu",
	f02301: "active, USA",
	f02388: "active, Netherlands, Amersfoort, Kroketje",
	f02401: "active, Canada, Chambly, NBFS Canada",
	f02421: "active, China, Deyang + Singapore, 腾盛科技",
	f02490: "active, undefined",
	f02620: "active, Poland, Krakow, @magik6k",
	f03143: "active, undefined",
	f03176: "active, undefined",
	f03223: "active, undefined",
	f03273: "active, undefined",
	f03274: "active, undefined",
	f03339: "active, undefined",
	f03363: "active, undefined",
	f05316: "active, USA, Portland, 6block",
	f05317: "active, undefined",
	f07819: "active, China, Wuxi, YC--wuxi",
	f07919: "active, China, Beijing, Shanghai, Hunan",
	f08073: "active, undefined",
	f08157: "active, undefined",
	f08204: "active, undefined",
	f08240: "active, Russia, Novosibirsk, Rabinovitch",
	f08264: "active, undefined",
	f08403: "active, UK, Lower Slaughter",
	f09569: "active, China, Beijing",
	f09696: "active, USA, Portland + Singapore",
	f09731: "active, undefined",
	f09848: "active, USA",
	f010048: "active, undefined",
	f010088: "active, DNS:purumine.com",
	f010400: "active, undefined",
	f010446: "active, undefined",
	f010507: "active, China, Hangzhou",
	f010558: "active, undefined",
	f014281: "active, undefined",
	f014768: "active, undefined",
	f016563: "active, undefined",
	f016594: "active, undefined",
	f019100: "active, undefined",
	f019399: "active, Korea, Busan",
	f019638: "active, undefined",
	f020608: "active, Russia",
	f020742: "active, undefined",
	f020904: "active, undefined",
	f021255: "active, undefined",
	f021540: "active, undefined",
	f021583: "active, undefined",
	f021710: "active, undefined",
	f021870: "active, undefined",
	f022072: "active, undefined",
	f022142: "active, USA, Queens",
	f022522: "active, undefined",
	f023467: "active, undefined",
	f023490: "active, Ukraine, Kyiv",
	f023495: "active, China, Beijing + USA, Portland",
	f023565: "active, China, Fuzhou",
	f023647: "active, undefined",
	f023649: "active, undefined",
	f024025: "active, undefined",
	f024127: "active, undefined",
	f024800: "active, undefined",
	f024903: "active, undefined",
	f024969: "active, undefined",
	f025017: "active, China, Hefei",
	f025019: "active, undefined",
	f029404: "active, USA, Portland + New Castle", // about 2 hours
	f029490: "active, undefined",

  // Active/sealing

  // Sealing

	f01155: "sealing, China, Shanghai, DianCun Tech",
	f02501: "sealing, USA, Portland, 6block",
	f02514: "sealing, USA, Portland, 6block",
	f03222: "sealing, China, Yuncheong",
	f03488: "sealing, Korea, Geumcheon-gu",
	f05315: "sealing, USA, Portland, 6block",
	f08383: "sealing, USA, Portland, 6block",
	f09693: "sealing, USA, Portland + Singapore",
	f010241: "sealing, China, Beijing + USA, Portland",
	f010253: "sealing, China, Beijing + USA, Portland",
	f019354: "sealing, Germany, Frankfurt",
	f020398: "sealing, China, Zhangjiakou",
	f021483: "sealing, China, Beijing",
	f022125: "sealing, China, Shenzhen",
	f023573: "sealing, Japan, Kumamoto",
	f023825: "sealing, USA, Portland",
	f023858: "sealing, China, Fuzhou",
	f023859: "sealing, China, Fuzhou",
	f023861: "sealing, China, Fuzhou",
	f023868: "sealing, China, Fuzhou",
	f023869: "sealing, China, Fuzhou",
	f023870: "sealing, China, Fuzhou",
	f023871: "sealing, China, Fuzhou",
	f023876: "sealing, China, Fuzhou",
	f023928: "sealing, China, Fuzhou",
	f023977: "sealing, China, Fuzhou",
	f023978: "sealing, China, Fuzhou",
	f023980: "sealing, China, Fuzhou",
	f023981: "sealing, China, Fuzhou",
	f024006: "sealing, China, Fuzhou",
	f024007: "sealing, China, Fuzhou",
	f024008: "sealing, China, Fuzhou",
	f024012: "sealing, China, Fuzhou",
	f024013: "sealing, China, Fuzhou",
	f024014: "sealing, China, Fuzhou",
	f024015: "sealing, USA, Portland",
	f024016: "sealing, USA, Portland",
	f024081: "sealing, China, Fuzhou",
	f024084: "sealing, China, Fuzhou",
	f024085: "sealing, China, Fuzhou",
	f024136: "sealing, China, Fuzhou",
	f029425: "sealing, NR",
	f029552: "sealing, China, Changsha",
	f029595: "sealing, China, Guangdong",
	f029619: "sealing, China, Hefei",
	f029628: "sealing, Australia, Brisbane",
	f030144: "sealing, Korea, Gyeonggi-do",
	f030152: "sealing, China, Changsha",
	f030219: "sealing, China, Changsha",

  // Stuck

	f019824: "stuck, USA", // CheckForAcceptance: about 3 hours
	f023501: "stuck, undefined", // CheckForAcceptance: about 12 hours

  // Min-size

	f010479: "min-size, France, Fontenay-sous-Bois", // 134217728 < 4294967296

  // min-ask


  // Error

	f01240: "error, Netherlands, HidNand", // EOF
	f01277: "error, Sweden, Stockholm, tvsthlm", // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: failed to load message: blockstore: block not found
	f01279: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f01280: "error, China, Wuxi, 了凡超算", // failed to initiate data transfer: deal data transfer failed: response rejected
	f01287: "error, China, Jiaxing, MaiTian", // failed to initiate data transfer: deal data transfer failed: response rejected
	f01289: "error, China, Hangzhou + USA", // failed to initiate data transfer: deal data transfer failed: response rejected
	f02305: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f02381: "error, China, Dongguan, 西野七濑迷叔", // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 452668 not found
	f02387: "error, Canada, Brampton, NBFS Canada", // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
	f02399: "error, China, Zhejiang", // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
	f02416: "error, undefined", // AddPiece failed: adding piece to sector: writing piece: creating unsealed sector file: fallocate '/lotus_data/unsealed/s-t02416-183886': no space left on device
	f02419: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f02423: "error, Ukraine, Kyiv, igowreck", // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 460526 not found
	f02492: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 459904 not found
	f02500: "error, Korea, Seongnam-si", // error in deal activation: failed to set up called handler: called check error (h: 134658): client: failed to look up deal on chain: deal 458722 not found
	f02576: "error, Denmark, Gjerlev, BenjaminH", // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.066168254449834551 FIL, balance: 0.065864025821538587 FIL): not enough funds to execute transaction
	f02606: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f02625: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f02633: "error, China, Hong Kong", // failed to initiate data transfer: deal data transfer failed: response rejected
	f02645: "error, China, Hong Kong", // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.075978404462843351 FIL, balance: 0.072142108337803117 FIL): not enough funds to execute transaction
	f02665: "error, Netherlands, Amsterdam, fm-ops", // error in deal activation: failed to set up called handler: called check error (h: 138721): client: failed to look up deal on chain: deal 513415 not found
	f02668: "error, China, Chengdu", // failed to initiate data transfer: deal data transfer failed: response rejected
	f02772: "error, undefined", // stream reset
	f03134: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f03224: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f03275: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 126007): client: failed to look up deal on chain: deal 421645 not found
	f03302: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f03345: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f03364: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 513490 not found
	f03482: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f03491: "error, China, Hong Kong", // failed to initiate data transfer: deal data transfer failed: response rejected
	f03512: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 134658): client: failed to look up deal on chain: deal 476002 not found
	f03544: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 137772): client: failed to look up deal on chain: deal 512654 not found
	f03624: "error, Germany, Chemnitz, ode", // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
	f04443: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f07806: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512683 not found
	f07824: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f08094: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512816 not found
	f08220: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f08311: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 452766 not found
	f08371: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f08474: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f08482: "error, USA, Athol, @why", // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.094202223837650696 FIL, balance: 0.0873128876205417 FIL): not enough funds to execute transaction
	f09002: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 513466 not found
	f09592: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 458302 not found
	f09675: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 458676 not found
	f09770: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f09833: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 459708 not found
	f010063: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f010084: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f010257: "error, China, Hong Kong, DNS:feiyuipfs.com", // stream reset
	f010399: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f010438: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 458303 not found
	f010491: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f010498: "error, China, Shenzhen", // error in deal activation: failed to set up called handler: called check error (h: 138721): client: failed to look up deal on chain: deal 512849 not found
	f010505: "error, China, Wuhan", // failed to initiate data transfer: deal data transfer failed: response rejected
	f010513: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f010528: "error, China, Chongqing", // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512690 not found
	f010617: "error, Canada, Surrey, @feiya200", // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
	f014329: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 514078 not found
	f014394: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f015233: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f015747: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f015941: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 126007): client: failed to look up deal on chain: deal 421311 not found
	f016482: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 458438 not found
	f017665: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 514063 not found
	f017734: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f017970: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f018501: "error, China, Beijing", // failed to initiate data transfer: deal data transfer failed: response rejected
	f018772: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 134658): client: failed to look up deal on chain: deal 452748 not found
	f018780: "error, Singapore + Germany, Frankfurt + USA", // failed to initiate data transfer: deal data transfer failed: response rejected
	f018781: "error, Singapore + Germany, Frankfurt + USA", // failed to initiate data transfer: deal data transfer failed: response rejected
	f018782: "error, Singapore + Germany, Frankfurt + USA", // failed to initiate data transfer: deal data transfer failed: response rejected
	f018783: "error, Singapore + Germany, Frankfurt + USA", // failed to initiate data transfer: deal data transfer failed: response rejected
	f018784: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f019024: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512672 not found
	f019041: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 452753 not found
	f019074: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f019104: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 134658): client: failed to look up deal on chain: deal 458437 not found
	f019118: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f019174: "error, undefined", // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999984100815 FIL, balance: 0.070383193180510758 FIL): not enough funds to execute transaction
	f019240: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f019243: "error, undefined", // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
	f019437: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f020489: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f020523: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f020541: "error, China, Shanghai", // error in deal activation: failed to set up called handler: called check error (h: 138721): client: failed to look up deal on chain: deal 512799 not found
	f020923: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 137772): client: failed to look up deal on chain: deal 513531 not found
	f020928: "error, China, Deyang + Singapore", // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
	f020975: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512871 not found
	f021328: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f021444: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f021479: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f022070: "error, China, Jieyang", // error in deal activation: failed to set up called handler: called check error (h: 138721): client: failed to look up deal on chain: deal 512712 not found
	f022163: "error, NR", // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.030303030282262568 FIL, balance: 0.015928826163733186 FIL): not enough funds to execute transaction
	f022227: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f022352: "error, Norway, Borgen", // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
	f022376: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f022753: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 460411 not found
	f022832: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f022836: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f022841: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f022853: "error, China, Fuzhou", // failed to initiate data transfer: deal data transfer failed: response rejected
	f022855: "error, undefined", // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.189439786320974232 FIL, balance: 0.077190799415898118 FIL): validation failure
	f022922: "error, undefined", // stream reset
	f022969: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f023108: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f023179: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 134658): client: failed to look up deal on chain: deal 477977 not found
	f023200: "error, China, Shanghai", // failed to initiate data transfer: deal data transfer failed: response rejected
	f023229: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f023526: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f023571: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512577 not found
	f023581: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f023660: "error, China, Fuzhou", // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
	f023662: "error, China, Fuzhou", // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.091284369820604385 FIL, balance: 0.0873128876205417 FIL): not enough funds to execute transaction
	f023843: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f023853: "error, China, Fuzhou", // failed to initiate data transfer: deal data transfer failed: response rejected
	f023855: "error, China, Fuzhou", // failed to initiate data transfer: deal data transfer failed: response rejected
	f023939: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f023943: "error, USA, Ashburn", // error in deal activation: failed to set up called handler: called check error (h: 138721): client: failed to look up deal on chain: deal 512782 not found
	f023971: "error, USA, @Brian Y", // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals exit code: 16
	f024066: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f024101: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 452703 not found
	f024146: "error, China, Fuzhou", // failed to initiate data transfer: deal data transfer failed: response rejected
	f024147: "error, China, Fuzhou", // failed to initiate data transfer: deal data transfer failed: response rejected
	f024148: "error, China, Fuzhou", // failed to initiate data transfer: deal data transfer failed: response rejected
	f024468: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f024496: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f024521: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 132265): client: failed to look up deal on chain: deal 452657 not found
	f024550: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f024617: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 514123 not found
	f024902: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 513576 not found
	f024983: "error, China, Hong Kong", // error in deal activation: failed to set up called handler: called check error (h: 138721): client: failed to look up deal on chain: deal 513548 not found
	f025007: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 512566 not found
	f025025: "error, China, Qingdao", // adding market funds failed: AddFunds exit code: SysErrInsufficientFunds(6)
	f029421: "error, undefined", // error in deal activation: failed to set up called handler: called check error (h: 137565): client: failed to look up deal on chain: deal 513559 not found
	f030158: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f030226: "error, undefined", // failed to initiate data transfer: deal data transfer failed: response rejected
	f030230: "error, undefined", // failed to initiate data transfer: failed to open push data channel: Unable to send request: routing: not found

  // Timeout during ask


  // Dial

	f010493: "dial, China, Shanghai", // * [/ip4/218.78.187.146/tcp/21735] dial tcp4 218.78.187.146:21735: connect: connection refused
	f021316: "dial, undefined", // * [/ip4/58.220.66.88/tcp/2347] dial tcp4 58.220.66.88:2347: connect: connection refused
	f022261: "dial, undefined", // * [/ip4/175.155.178.195/tcp/7777] dial tcp4 175.155.178.195:7777: connect: connection refused
	f022820: "dial, undefined", // * [/ip4/183.232.116.200/tcp/4001] dial tcp4 183.232.116.200:4001: connect: connection refused
	f024986: "dial, undefined", // * [/ip4/192.168.2.64/tcp/3000] dial tcp4 0.0.0.0:42221->192.168.2.64:3000: i/o timeout

  // XNR

  // Error during ask
}

export default annotations
