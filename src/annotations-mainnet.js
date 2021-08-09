// Small file test results
//
// This are based on a test run (usually once a day) where I attempt
// to make deals for a small file (about ~90kB) with as many miners as
// possible. It is expected that most miners will filter based on size.

// Additional testing will be performed with larger files with
// selected miners (>128MiB of data)

// See annotations-spacerace-slingshot-medium.js for larger file results

const annotations = {
  // Retest

  // New

  f01016240: 'new, auto', // carry-over
  f01016245: 'new, autolisted', // carry-over
  f01016246: 'new, autolisted', // carry-over
  f01016249: 'new, autolisted', // carry-over
  f01075157: 'new, auto', // carry-over
  f01100187: 'new, autolisted', // carry-over

  // Inflight

  // Unknown

  // Active

  f01278: 'active, USA, Grand Rapids, MiMiner', // 2217150 1 day
  f07709: 'active, Korea, Dongjak-gu', // 2216607 about 3 hours
  f043376: 'active, Korea, Incheon', // 2216664 about 2 hours
  f062318: 'active, Korea, Naju', // 2216615 about 2 hours
  f063628: 'active, NR', // 2216662 1 day
  f079817: "active, Russia, Ul'yanovka", // 2216611 about 2 hours
  f080103: 'active, Korea, Seongnam-si', // 2216688 about 2 hours
  f094374: 'active, China, Nanyang', // 2216612 about 2 hours
  f097840: 'active, NR', // 2216767 about 2 hours
  f0110804: 'active, USA, Santa Clara', // 2216620 about 7 hours
  f0130912: 'active, China, Hong Kong', // 2216608 2 days
  f0131901: 'active, Korea, Daejeon', // 2216617 about 2 hours
  f0157513: 'active, Korea, Geumcheon-gu', // 2216616 2 days
  f0157564: 'active, Korea, Daejeon', // 2216614 about 2 hours
  f0157991: 'active, NR', // 2216839 about 2 hours
  f0162394: 'active, China, Guangzhou', // 2216624 about 2 hours
  f0165375: 'active, Korea, Seongnam-si', // 2216621 about 2 hours
  f0165539: 'active, Japan, Yokohama', // 2216629 about 7 hours
  f0214334: 'active, NR', // 2216668 about 2 hours
  f0215370: 'active, China, Hangzhou', // 2216682 about 3 hours
  f0218407: 'active, NR', // 2216787 about 23 hours
  f0228855: 'active, Korea, Guro-gu', // 2216622 2 days
  f0397052: 'active, NR', // 2216669 about 3 hours
  f0401416: 'active, Japan, Fukuoka', // 2216630 about 23 hours
  f0433689: 'active, NR', // 2216637 about 2 hours
  f0433690: 'active, NR', // 2216626 about 7 hours
  f0433691: 'active, China, Wuxi', // 2216651 about 2 hours
  f0437246: 'active, China, Hangzhou', // 2216642 about 2 hours
  f0458627: 'active, Korea, Seongnam-si', // 2216628 about 2 hours
  f0460440: 'active, Korea, Seongnam-si', // 2216627 about 2 hours
  f0461791: 'active, Korea, Gwangju', // 2216645 about 2 hours
  f0478837: 'active, China, Zhangzhou', // 2216580 1 day
  f0482619: 'active, Korea, Seongnam-si', // 2216625 about 2 hours
  f0488889: 'active, China, Nanchang', // 2216705 about 2 hours
  f0520555: 'active, NR', // 2216829 about 2 hours
  f0521569: 'active, Korea, Guro-go', // 2216716 2 days
  f0675909: 'active, NR', // 2216652 about 7 hours
  f0694881: 'active, China, Hangzhou', // 2216631 about 2 hours
  f0717913: 'active, Korea, Jung-gu', // 2216633 about 2 hours
  f0722515: 'active, Korea, Geumcheon-gu', // 2216632 about 2 hours
  f0724219: 'active, Spain, Vilanova del Cami', // 2216639 about 2 hours
  f0731235: 'active, Ukraine, Odessa', // 2216646 about 3 hours
  f0747617: 'active, NR', // 2216641 about 2 hours
  f0752695: 'active, Korea, Seongnam-si', // 2216712 about 3 hours
  f0756207: 'active, Korea', // 2216656 about 2 hours
  f0805568: 'active, Korea, Gangnam-gu', // 2216650 about 4 hours
  f0809927: 'active, NR', // 2216885 about 2 hours
  f0845245: 'active, Korea, Busan', // 2216653 2 days
  f0864910: 'active, Korea, Gwangjin-gu', // 2216640 about 2 hours
  f01023503: 'active, Korea, Busan', // 2216638 about 2 hours
  f01039753: 'active, China, Suqian', // 2216758 about 2 hours
  f01050286: 'active, China, Guangzhou', // 2216644 about 2 hours
  f01051301: 'active, NR', // 2216842 about 23 hours
  f01069268: 'active, NR', // 2218464 9 days
  f01071194: 'active, USA, San Jose', // 2216722 about 2 hours
  f01071719: 'active, China, Beijing', // 2216636 about 2 hours
  f01086762: 'active, Korea, Seoul', // 2216643 about 3 hours
  f01090043: 'active, Korea, Bucheon-si', // 2216747 about 3 hours
  f01104889: 'active, NR', // 2216655 about 2 hours
  f01105829: 'active, Korea', // 2216647 about 4 hours
  f01106820: 'active, autolisted', // 2216657 about 2 hours
  f01110276: 'active, Korea, Bucheon-si', // 2216654 about 2 hours
  f01117341: 'active, auto', // 2216678 1 day
  f01119631: 'active, auto', // 2216921 about 2 hours
  f01125552: 'active, autolisted', // 2218459 9 days
  f01128462: 'active, autolisted', // 2216840 about 2 hours
  f01128844: 'active, autolisted', // 2216658 2 days
  f01131751: 'active, autolisted', // 2216660 about 2 hours
  f01132686: 'active, autolisted', // 2216667 about 2 hours
  f01136274: 'active, autolisted', // 2218460 9 days
  f01136592: 'active, autolisted', // 2216666 about 2 hours
  f01137229: 'active, autolisted', // 2216665 1 day
  f01140256: 'active, autolisted', // 2218463 9 days
  f01141810: 'active, autolisted', // 2218462 9 days
  f01141947: 'active, autolisted', // 2218461 9 days

  // Active-sealing (active - with in-flight sealing)

  // Sealing

  // Stuck

  // Busy

  // Min Size

  f01238: 'min-size, Vietnam, Hanoi, FILECOIN-VIETNAM', // 131072 < 134217728
  f01240: 'min-size, Netherlands, Dcent', // 131072 < 67108864
  f01247: 'min-size, Canada, Montreal, BigChungus', // 131072 < 67108864
  f01272: 'min-size, Singapore', // 131072 < 10485760
  f01276: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 4294967296
  f01277: 'min-size, Sweden, Stockholm, tvsthlm', // 131072 < 1073741824
  f02387: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 17179869184
  f02401: 'min-size, Canada, Chambly, NBFS Canada', // 131072 < 17179869184
  f02416: 'min-size, China, Guangdong, 星际无限', // 131072 < 1048576
  f02419: 'min-size, China, Shanghai, yuantai', // 131072 < 268435456
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 131072 < 8589934592
  f02606: 'min-size, China, Zhejiang, DataX', // 131072 < 134217728
  f02620: 'min-size, Poland, Krakow, @magik6k', // 131072 < 536870912
  f03488: 'min-size, Korea, Yeongdeungpo-dong', // 131072 < 1073741824
  f07998: 'min-size, China, Hangzhou, 安问', // 131072 < 17179869184
  f08240: 'min-size, Russia, Novosibirsk, Rabinovitch', // 131072 < 104857600
  f08399: 'min-size, USA, Sammamish, MiningMusing', // 131072 < 4294967296
  f08403: 'min-size, UK, Lower Slaughter, TippyFlits', // 131072 < 134217728
  f09848: 'min-size, USA, Irvine, BigBearLake', // 131072 < 8589934592
  f010088: 'min-size, USA, Kirkland', // 131072 < 1048576
  f010254: 'min-size, Japan, Minamata', // 131072 < 134217728
  f010446: 'min-size, Netherlands, Angelo', // 131072 < 8589934592
  f010479: 'min-size, France, Fontenay-sous-Bois, s0nik42', // 131072 < 1073741824
  f010507: 'min-size, China, Hangzhou', // 131072 < 1073741824
  f010617: 'min-size, Canada, Surrey, kernelogic2, @feiya200', // 131072 < 17179869184
  f014569: 'min-size, China, Yangzhou', // 131072 < 104857600
  f014768: 'min-size, Singapore, Funktafide, @Funk', // 131072 < 1048576
  f017242: 'min-size, China, Guangdong', // 131072 < 268435456
  f018501: 'min-size, China, Beijing', // 131072 < 1073741824
  f019002: 'min-size, China, Xiamen', // 131072 < 1073741824
  f019041: 'min-size, China, Zhejiang + Singapore, Zheng2', // 131072 < 134217728
  f019104: 'min-size, Canada, Chambly, Northstar', // 131072 < 4294967296
  f019362: 'min-size, China, Hangzhou, 青青子衿', // 131072 < 8589934592
  f019399: 'min-size, Korea, Busan', // 131072 < 1073741824
  f019551: 'min-size, UK, Birmingham, Neonix', // 131072 < 1048576
  f020385: 'min-size, Korea, Incheon', // 131072 < 8589934592
  f020904: 'min-size, Korea, Uijeongbu-si, FILTop', // 131072 < 4294967296
  f021716: 'min-size, New Zealand, Wellington, Info.farm', // 131072 < 1048576
  f022142: 'min-size, USA, Queens, Nelson SR2', // 131072 < 8589934592
  f022163: 'min-size, Switzerland, dns:fil.akasha.network', // 131072 < 1073741824
  f022289: 'min-size, China, Mianyang', // 131072 < 4294967296
  f022352: 'min-size, Norway, Borgen, TechHedge, @Reiers', // 131072 < 1048576
  f022399: 'min-size, China, Beijing', // 131072 < 10485760
  f023467: 'min-size, Norway, Oslo, PhiMining.io', // 131072 < 134217728
  f023565: 'min-size, China, Fuzhou', // 131072 < 1536000
  f023660: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023662: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023853: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023854: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023855: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023858: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023859: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023861: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023868: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023869: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023870: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023871: 'min-size, China, Fuzhou', // 131072 < 4294967296
  f023876: 'min-size, China, Fuzhou', // 131072 < 268435456
  f023928: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023971: 'min-size, USA, FLMiner', // 131072 < 536870912
  f023977: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023978: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023980: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f023981: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024006: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024007: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024008: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024012: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024013: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024014: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024081: 'min-size, undefined', // 131072 < 1572864000
  f024084: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024085: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024136: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024146: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024147: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024148: 'min-size, China, Fuzhou', // 131072 < 1572864000
  f024184: 'min-size, Korea, Yeongdeungpo-dong', // 131072 < 1073741824
  f030335: 'min-size, China, Fujian', // 131072 < 134217728
  f030379: 'min-size, Korea, Uiwang', // 131072 < 1073741824
  f032824: 'min-size, USA, Cedar Park', // 131072 < 134217728
  f032934: 'min-size, Korea, Incheon', // 131072 < 1073741824
  f033189: 'min-size, NR', // 131072 < 2147483648
  f034047: 'min-size, China, Hangzhou', // 131072 < 1073741824
  f039940: 'min-size, China, Mianyang', // 131072 < 134217728
  f047419: 'min-size, USA, Waukesha', // 131072 < 17179869184
  f048669: 'min-size, NR', // 131072 < 1048576
  f049882: 'min-size, Netherlands, De Rijp, Chipz', // 131072 < 268435456
  f058369: 'min-size, USA, Boston', // 131072 < 536870912
  f062353: 'min-size, Germany, Frankfurt', // 131072 < 8589934592
  f064668: 'min-size, China, Hong Kong', // 131072 < 1048576
  f066596: 'min-size, USA, San Diego, PiKNiK & Company', // 131072 < 536870912
  f071624: 'min-size, USA, Boyne City, Adept', // 131072 < 4294967296
  f081222: 'min-size, China, Changzhou', // 131072 < 134217728
  f083920: 'min-size, NR', // 131072 < 1573031772
  f085899: 'min-size, China, Wuxi', // 131072 < 16777216
  f089840: 'min-size, Korea, Yeongdeungpo-gu', // 131072 < 31457280
  f099608: 'min-size, Latvia, Riga, stander', // 131072 < 18253611008
  f0104671: 'min-size, Japan, Ota-ku', // 131072 < 1048576
  f0109713: 'min-size, China, Beijing', // 131072 < 1536163840
  f0113008: 'min-size, China, Hong Kong', // 131072 < 33554432
  f0120983: 'min-size, China, Fujian', // 131072 < 268435456
  f0121768: 'min-size, China, Guangdong', // 131072 < 1073741824
  f0121958: 'min-size, Korea, Seoul', // 131072 < 67108864
  f0127896: 'min-size, Bulgaria, Sofia, sofiaminer', // 131072 < 536870912
  f0131611: 'min-size, Korea, Jeju City', // 131072 < 67108864
  f0134565: 'min-size, China, Karamay', // 131072 < 1536524550
  f0134682: 'min-size, China, Beijing', // 131072 < 268435456
  f0134991: 'min-size, China, Foshan', // 131072 < 1536163840
  f0135078: 'min-size, USA, Denver', // 131072 < 8589934592
  f0141446: 'min-size, China, Suzhou', // 131072 < 10485760
  f0142606: 'min-size, Korea, Gangseo-gu', // 131072 < 31457280
  f0142637: 'min-size, China, Mianyang', // 131072 < 4294967296
  f0145162: 'min-size, Japan, Kumamoto', // 131072 < 1073741824
  f0145874: 'min-size, Canada, Brampton', // 131072 < 4294967296
  f0149444: 'min-size, Korea, Gangseo-gu', // 131072 < 31457280
  f0149765: 'min-size, China, Beijing', // 131072 < 268435456
  f0157535: 'min-size, Canada, Brampton', // 131072 < 4294967296
  f0158468: 'min-size, China, Guangzhou', // 131072 < 1536163840
  f0165400: 'min-size, Canada, Brampton', // 131072 < 2147483648
  f0215497: 'min-size, Korea, Gangseo-gu', // 131072 < 31457280
  f0220827: 'min-size, NR', // 131072 < 8589934592
  f0399083: 'min-size, Korea, Seoul + Kwangmyong', // 131072 < 31457280
  f0399610: 'min-size, Ukraine', // 131072 < 5368709120
  f0400103: 'min-size, China, Hong Kong', // 131072 < 1048576
  f0403177: 'min-size, China, Huizhou', // 131072 < 536870912
  f0406322: 'min-size, USA, Long Beach', // 131072 < 4294967296
  f0406703: 'min-size, USA, Scottsdale', // 131072 < 4294967296
  f0436454: 'min-size, China, Wuxi', // 131072 < 67108864
  f0440182: 'min-size, USA, Des Moines', // 131072 < 1048576
  f0440208: 'min-size, Netherlands, Amsterdam', // 131072 < 1048576
  f0440429: 'min-size, Korea, Uiwang', // 131072 < 1073741824
  f0447183: 'min-size, Canada, Montreal', // 131072 < 4294967296
  f0455466: 'min-size, USA, Washington', // 131072 < 1048576
  f0492030: 'min-size, USA, Holmdel', // 131072 < 134217728
  f0495421: 'min-size, NR', // 131072 < 2147483648
  f0508988: 'min-size, Korea, Bucheon-si', // 131072 < 1073741824
  f0533124: 'min-size, Korea, Seoul', // 131072 < 31457280
  f0678914: 'min-size, USA, San Diego', // 131072 < 536870912
  f0688935: 'min-size, China, Yangzhou', // 131072 < 104857600
  f0694396: 'min-size, UK, Dudley', // 131072 < 1048576
  f0707721: 'min-size, Netherlands', // 131072 < 67108864
  f0712678: 'min-size, Korea, Gangseo-gu', // 131072 < 268435456
  f0726405: 'min-size, Korea, Seoul', // 131072 < 31457280
  f0734051: 'min-size, Korea, Hwaseong-si', // 131072 < 2147483648
  f0754373: 'min-size, Netherlands, Rijssen', // 131072 < 268435456
  f0763337: 'min-size, USA, San Diego', // 131072 < 536870912
  f0773157: 'min-size, Australia, Sydney', // 131072 < 67108864
  f0828066: 'min-size, USA, San Digeo', // 131072 < 536870912
  f0838467: 'min-size, Korea, Incheon', // 131072 < 104857600
  f0842485: 'min-size, Korea, Seoul', // 131072 < 31457280
  f0862933: 'min-size, USA, Huntersville', // 131072 < 5368709120
  f0875769: 'min-size, USA, Salt Lake City', // 131072 < 8589934592
  f01021756: 'min-size, Korea, Yeongdeungpo-gu', // 131072 < 268435456
  f01035680: 'min-size, USA, Denver', // 131072 < 8589934592
  f01049918: 'min-size, USA, Bothell', // 131072 < 1048576
  f01051828: 'min-size, USA, San Diego', // 131072 < 536870912
  f01063173: 'min-size, Korea, Kayang-dong', // 131072 < 31457280
  f01087243: 'min-size, NR', // 131072 < 16777216
  f01091840: 'min-size, NR', // 131072 < 4294967296
  f01096124: 'min-size, Korea, Uiwang', // 131072 < 1073741824
  f01096727: 'min-size, Korea, Gangseo-gu', // 131072 < 104857600
  f01099052: 'min-size, Korea, Seodaemun-gu', // 131072 < 31457280
  f01126768: 'min-size, autolisted', // 131072 < 104857600

  // Max Size

  // Min Ask

  f01234: 'min-ask, Belgium, Bonheiden, Eliovp', // 20000000 < 61035156250000
  f01280: 'min-ask, China, Wuxi', // 20000000 < 12207031250000000
  f02381: 'min-ask, China, Dongguan', // 20000000 < 6103515625000
  f02415:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f02500: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f02501: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f02622: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f02623: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f02633:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f02645:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f03143: 'min-ask, Vietman, Ho Chi Minh City + China, Beijing + Shijiazhuang', // 20000000 < 122070312500000
  f03223: 'min-ask, USA', // 20000000 < 610351562500000
  f03273: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f03274: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f03364: 'min-ask, China, Inner Mongolia', // 20000000 < 12207031250000000
  f03482: 'min-ask, China, Karamay', // 20000000 < 12207031250000000
  f03491:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f05315: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f05317: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f05664: 'min-ask, China, Hong Kong', // 20000000 < 12207031250
  f07850: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f07945: 'min-ask, China, Guangzhou', // 20000000 < 122070312500000000
  f07990:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f08025:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f08157: 'min-ask, China, Beijing + Germany, Frankfurt, 超星际', // 20000000 < 610351562500000
  f08257: 'min-ask, China, Zhejiang + Singapore', // 20000000 < 12207031250
  f08383: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f09693: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f09696: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f010253: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f010491: 'min-ask, China, Shenzhen', // 20000000 < 1220703125
  f014394: 'min-ask, China, Suzhou, IPFSCloud', // 20000000 < 1220703125
  f015897: 'min-ask, China, Hong Kong', // 20000000 < 12207031250000000
  f015932: 'min-ask, NR', // 20000000 < 12207031250000000000000
  f015941: 'min-ask, Ukraine, Kyiv', // 20000000 < 24414062
  f017665: 'min-ask, China, Shenyang', // 20000000 < 122070312500000
  f018780:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f018781:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f018782: 'min-ask, Singapore + USA + Germany, Frankfurt + UK, London', // 20000000 < 122070312500000
  f018783:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f018784:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f018785:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f019279: 'min-ask, Canada, Calgary', // 20000000 < 24414062
  f020398: 'min-ask, China, Zhangjiakou', // 20000000 < 1220703125000
  f020747: 'min-ask, China, Xiamen', // 20000000 < 122070312
  f021504: 'min-ask, NR', // 20000000 < 122070190429687500000
  f022093: 'min-ask, NR', // 20000000 < 122070190429687500000
  f022130: 'min-ask, Korea, Seodaemun-gu', // 20000000 < 61035156
  f022308: 'min-ask, China, Bozhou', // 20000000 < 12207031250
  f022522: 'min-ask, China, Dongguan', // 20000000 < 1220703125000000000
  f023495: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f023825: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f024015: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f024016: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f029344: 'min-ask, Korea, Seongnam-si', // 20000000 < 1220703125000
  f029401: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f029404: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f033123: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f033356: 'min-ask, Korea, Yeongdeungpo-dong', // 20000000 < 12207031250000
  f034701: 'min-ask, China, Shenzhen', // 20000000 < 122070190429687500000
  f039800: 'min-ask, China, Chengdu', // 20000000 < 122070312500000
  f042540: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f042558: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f050022: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f052447: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f054370: 'min-ask, China, Dongguan', // 20000000 < 1220703125000000000
  f055123: 'min-ask, Korea, Busan', // 20000000 < 1220703125
  f056611: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f057614: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f057698: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f058000: 'min-ask, China, Suzhou', // 20000000 < 24414062
  f060072: 'min-ask, China, Chongqing', // 20000000 < 610351562500000
  f061158: 'min-ask, China, Guangdong, phoenix', // 20000000 < 6103515625
  f061740: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f062260: 'min-ask, China, Guangzhou', // 20000000 < 61035156250000
  f062334: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f065103: 'min-ask, USA + China, Suzhou + Guangzhou + Karamay', // 20000000 < 122070312500000
  f065200: 'min-ask, China, Yibin', // 20000000 < 24414062
  f065280: 'min-ask, Korea, Songpa-gu, Data Store Ltd', // 20000000 < 122070312500000
  f066104: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f069919: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f070501: 'min-ask, USA + China, Hong Kong + Guangzhou', // 20000000 < 122070312500000
  f070999: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f071980: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f073552: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f073628: 'min-ask, USA, New Castle', // 20000000 < 122070312500000
  f074738: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f078772: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f079197: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f079247: 'min-ask, USA + China, Guangzhou + Beijing + Dongguan + Shenzhen', // 20000000 < 122070312500000
  f079301: 'min-ask, China, Guangzhou + Dongguan + Shenzhen, USA', // 20000000 < 122070312500000
  f079426: 'min-ask, China, Shandong', // 20000000 < 12207031250000000000000000
  f080480: 'min-ask, Ukraine, Lviv', // 20000000 < 122070312
  f082452: 'min-ask, China, Dongguan', // 20000000 < 1220581054687500000
  f083542: 'min-ask, NR', // 20000000 < 1220703125000000000
  f083625: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f083903: "min-ask, China, Xi'an", // 20000000 < 122192382812500
  f084879: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f086151: 'min-ask, China, Dongguan', // 20000000 < 122070324707031
  f092514: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f094614: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f097370: 'min-ask, NR', // 20000000 < 122070312500000
  f097386: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f097914: 'min-ask, NR', // 20000000 < 12207031250000000000000
  f098706: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f098770: 'min-ask, USA, Pontiac', // 20000000 < 12207031250000000
  f099239: 'min-ask, China, Hong Kong', // 20000000 < 12207031250000000
  f0100082: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0100116: 'min-ask, Korea, Uljin County', // 20000000 < 122070312500000
  f0101087: 'min-ask, Korea', // 20000000 < 24414062500000
  f0102374: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102375: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102376: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102513: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102670: 'min-ask, China, Xiamen', // 20000000 < 121948242187500000
  f0103851: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0106949: 'min-ask, Korea, Seoul', // 20000000 < 366210937
  f0107995: 'min-ask, NR', // 20000000 < 121948242187500000
  f0110283: 'min-ask, China, Zhongshan', // 20000000 < 12207031250000000000000000
  f0110442: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0110936: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0110944: 'min-ask, NR', // 20000000 < 61035156250000
  f0114808: 'min-ask, China, Shanghai', // 20000000 < 12207031250000000
  f0114924: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0115744: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0121450: 'min-ask, China, Fujian', // 20000000 < 1220581054687500000
  f0123522: 'min-ask, NR', // 20000000 < 61035156262207031
  f0123931: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0124102: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f0126824: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0128974: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0129072: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0129976: 'min-ask, Korea, Gwangju', // 20000000 < 1220703125000
  f0131464: 'min-ask, USA, Ashburn', // 20000000 < 122070312500000000
  f0133886: 'min-ask, China, Guangdong', // 20000000 < 366210937500000
  f0133999: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f0134778: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f0135738: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0136014: 'min-ask, China, Suzhou', // 20000000 < 12207031250000000
  f0141614: 'min-ask, China, Fujian', // 20000000 < 1220703124877929687500000
  f0145313: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0145385: 'min-ask, Malaysia, Petaling Jaya', // 20000000 < 122070324707031
  f0145784: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0146165: 'min-ask, China, Huizhou', // 20000000 < 122070190429687500000
  f0146875: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0147284: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0148399: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0149768: 'min-ask, China, Dongguan', // 20000000 < 1220703124999877929687500000
  f0151034: 'min-ask, USA, Syracuse', // 20000000 < 123291015625000
  f0151281: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0151692: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0151993: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0152224: 'min-ask, Korea, Yongdu-dong', // 20000000 < 1220703125
  f0152747: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0152854: 'min-ask, China, Huizhou', // 20000000 < 1220703002929687500000
  f0154988: 'min-ask, China, Dongguan', // 20000000 < 122070190429687500000
  f0155384: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0157941: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f0159649: 'min-ask, NR', // 20000000 < 12207031250000000
  f0159961: 'min-ask, China, Chongqing', // 20000000 < 6103515625
  f0165111: 'min-ask, China, Guangzhou', // 20000000 < 1220703125000000000
  f0165135: 'min-ask, China, Guangzhou', // 20000000 < 1220703125000000000
  f0215704: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0216138: 'min-ask, China, Shenzhen', // 20000000 < 610351562500
  f0220004: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0222962: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0224144: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0224841: 'min-ask, China, Guangzhou', // 20000000 < 12206909179687500000
  f0232650: 'min-ask, NR', // 20000000 < 1208496093750000000000000
  f0238968: 'min-ask, NR', // 20000000 < 12207031250000000000000000
  f0241858: 'min-ask, China, Fuzhou', // 20000000 < 1220703124999877929687500000
  f0392785: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0395911: 'min-ask, NR', // 20000000 < 121948242187500000
  f0396188: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0396607: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0396844: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0397855: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0406475: 'min-ask, China, Dongguan', // 20000000 < 122070312500000000
  f0408717: 'min-ask, Korea, Ansan-si', // 20000000 < 1220703125
  f0409356: 'min-ask, NR', // 20000000 < 121948242187500000
  f0409765: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0410506: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0410701: 'min-ask, China, Changsha', // 20000000 < 61035156250000
  f0413684: 'min-ask, China, Fujian', // 20000000 < 12207031249999999877929687500000
  f0421061: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0426531: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0426933: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0427393: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0428177: 'min-ask, China, Huizhou', // 20000000 < 122070190429687500000
  f0431665: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0432345: 'min-ask, China, Guangdong', // 20000000 < 122070312499999877929687500000
  f0449662: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0456740: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0456741: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0460078: 'min-ask, China, Shanghai', // 20000000 < 122070312500000000
  f0461752: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0463950: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0471007: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0488888: 'min-ask, China, Nanchang', // 20000000 < 122070312500000
  f0490173: 'min-ask, Korea, Jung-gu', // 20000000 < 1220703125000
  f0494841: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f0498920: 'min-ask, Korea, Icheon-si', // 20000000 < 121948242187500000
  f0503420: 'min-ask, China, Beijing', // 20000000 < 122070190429687500000
  f0511732: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0513351: 'min-ask, NR', // 20000000 < 24414062500000
  f0518877: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0567567: 'min-ask, China, Beijing', // 20000000 < 12207031250000000000
  f0670902: 'min-ask, NR', // 20000000 < 122070312500000
  f0673645: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0676048: 'min-ask, China, Hangzhou', // 20000000 < 3662109375000
  f0686111: 'min-ask, Korea, Jung-gu', // 20000000 < 1220703125000
  f0690459: 'min-ask, China, Beijing', // 20000000 < 12207031127929687500000
  f0692371: 'min-ask, Malaysia', // 20000000 < 122070312500000
  f0705118: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0705704: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0717254: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0720629: 'min-ask, NR', // 20000000 < 61035156
  f0720636: 'min-ask, Belgium, Bonheiden', // 20000000 < 61035156250000
  f0726742: 'min-ask, China, Fujian', // 20000000 < 1220703124999999999999877929687500000
  f0730266: 'min-ask, China, Chongqing', // 20000000 < 12207031250000000
  f0730353: 'min-ask, Korea, Uijeongbu-si', // 20000000 < 122070190429687500000
  f0745116: 'min-ask, China, Beijing', // 20000000 < 1220703002929687500000
  f0746542: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0749380: 'min-ask, China, Dongguan', // 20000000 < 1220703002929687500000
  f0752322: 'min-ask, USA, Watsonville', // 20000000 < 12207031250000
  f0756338: 'min-ask, NR', // 20000000 < 122070312500000
  f0759826: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0761728: 'min-ask, China, Yichun', // 20000000 < 1220703002929687500000
  f0764041: 'min-ask, China, Dongguan', // 20000000 < 122070312377929687500000
  f0766622: 'min-ask, China, Hangzhou', // 20000000 < 12207031250000
  f0811392: 'min-ask, China, Beijing', // 20000000 < 12207031127929687500000
  f0840770: 'min-ask, USA, Dallas', // 20000000 < 1220703125
  f0842171: 'min-ask, China, Huizhou', // 20000000 < 122070312377929687500000
  f0844439: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0846681: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0849554: 'min-ask, China, Beijing', // 20000000 < 1220703124999877929687500000
  f0870005: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0874231: 'min-ask, China, Yichun', // 20000000 < 122070312377929687500000
  f0875411: 'min-ask, Korea', // 20000000 < 610351562500000
  f0876800: 'min-ask, NR', // 20000000 < 12207031250000000000000
  f0879756: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01002224: 'min-ask, Korea', // 20000000 < 610351562500000
  f01016365: 'min-ask, China, Shanghai', // 20000000 < 1220703125000000000
  f01025778: 'min-ask, China, Fujian', // 20000000 < 1220703124877929687500000
  f01033857: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01033923: 'min-ask, Korea, Yongin-si', // 20000000 < 122070190429687500000
  f01033926: 'min-ask, Korea, Yongin-si', // 20000000 < 122070190429687500000
  f01036234: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01037628: 'min-ask, NR', // 20000000 < 122070190429687500000
  f01038099: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01045957: 'min-ask, NR', // 20000000 < 121948242187500000
  f01050158: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01056782: 'min-ask, China, Huizhou', // 20000000 < 121948242187500000
  f01061547: 'min-ask, China, Fujian', // 20000000 < 1220703124999999999999999877929687500000
  f01062230: 'min-ask, NR', // 20000000 < 121948242187500000
  f01062274: 'min-ask, Korea, Busan', // 20000000 < 12207031250
  f01070558: 'min-ask, China, Jinan', // 20000000 < 122070190429687500000
  f01076600: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f01097836: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01097957: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01098514: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01101298: 'min-ask, Korea, Yongin-si', // 20000000 < 121948242187500000
  f01106157: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01111457: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f01115166: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f01117775: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f01118739: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f01119852: 'min-ask, China, Huizhou', // 20000000 < 1220581054687500000
  f01125511: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01125783: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01127529: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01128468: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01136165: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01137297: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01138014: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01139313: 'min-ask, autolisted', // 20000000 < 122070312500000
  f01139961: 'min-ask, autolisted', // 20000000 < 1220703125000000000

  // Slashed

  // Error

  f02490: 'error, China, Fujian', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceaao2cboibf4fqbo45ub5pinlc5nivnvpbhw64tfbews7cj4pst3o: search msg failed: failed to load message: blockstore: block not found
  f02540: 'error, USA, Mobile, Foundry', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacebe6jzbdoelzc6ux6b7j3cryvmicxmh2dl3jfohfmowtd6h2b3f66: search msg failed: failed to load message: blockstore: block not found
  f03345: 'error, China, Fuzhou, chh', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacebkx7efywrplhb5zsm2lfiooujdt2vfi4yj3pijryt3l2cbr7ihua: search msg failed: failed to load message: blockstore: block not found
  f08019: 'error, China, Yantai, 三合', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.04999999996521275 FIL, balance: 0.027615026867852877 FIL): not enough funds to execute transaction
  f08103: 'error, China, Foshan', // error reading Response message from provider: stream reset
  f014683: 'error, China, Dongguan', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceax2rzesyuotqitonl4kc7jd7ldn6kfctjepodpnu5ziju6f7ac5u: search msg failed: failed to load message: blockstore: block not found
  f015233: 'error, China, Nanjing', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacedn3fp6orh3leyocgcxbyt33lh2jtmtp3rfv4qepqj2afibbt5hhm: search msg failed: failed to load message: blockstore: block not found
  f015877: 'error, China, Jiaxing + USA', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacecjy2wxoxpfcowowihfvraa4bgthxfyrebicj5ozimtynpy7zzdx4: search msg failed: failed to load message: blockstore: block not found
  f016276: 'error, China, Beijing', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacebdzlslpjijrdwj3sh57nzd6iyfvawusluilcouncvgvfgii2lnbo: search msg failed: failed to load message: blockstore: block not found
  f020489: 'error, China, Lioaning', // error in deal activation: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacea6fiea72edkvi25piu3xrcff4boafe4c7wpkhccksgptxqlac7s6: search msg failed: failed to load message: blockstore: block not found
  f020928: 'error, China, Deyang + Singapore', // error reading Response message from provider: EOF
  f023219: 'error, China, Beijing + Zhangjiakou', // error in deal activation: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacedpzhfxyqcgadlyaqxguiu53qnggo4lg3jgzvdvvdz3sweay63ks4: search msg failed: failed to load message: blockstore: block not found
  f024550: 'error, China, Wenzhou', // error in deal activation: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacecft7r6eb5vpzc32aewquqkcvolrd4b4zo2dsd2hzmjkodf4dv7kw: search msg failed: failed to load message: blockstore: block not found
  f024944: 'error, Korea, Yeongdeungpo-dong', // error in deal activation: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceboyla3up3poz2mlcg6khws2qle67y2afcneu7fs2ckcirsmrhlvm: search msg failed: failed to load message: blockstore: block not found
  f025007: 'error, Korea, Gyeonggi-do, PINBYTES-eCUBE', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999955505176 FIL, balance: 0.008946636075267192 FIL): not enough funds to execute transaction
  f025025: 'error, China, Qingdao', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceaquppoa55m6poqa7x66ytaorjniehkw5aly2nbht6dnfr2felqqk: search msg failed: failed to load message: blockstore: block not found
  f033036: 'error, China, Liaoning', // error reading Response message from provider: stream reset
  f039515: 'error, China, Chongqing, valarhash', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceale3zhgl26fei5qzmpz5mttzvgqvvw4a7lce4xoyb7v46bva4uaw: search msg failed: failed to load message: blockstore: block not found
  f042567: 'error, China, Jinhua', // error in deal activation: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacectqeit3fqvndx6zzp3o34uhzalwmgj2eviqkxezunnqjww6zx46u: search msg failed: failed to load message: blockstore: block not found
  f044160: 'error, China, Guangzhou, muxing', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceajbuctuqfc4jhvxcevhqg5roogedmvdfkdgcg6viulyz6tmqotcu: search msg failed: failed to load message: blockstore: block not found
  f062937: 'error, NR', // error reading Response message from provider: EOF
  f073904: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceb534kcsf3hnit2lripqny4ep3sh5uiuporsirvckqkljjprgisya: search msg failed: failed to load message: blockstore: block not found
  f081644: 'error, China, Wenzhou', // error in deal activation: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacedmv47kerucwue4s5qofn6l7gkvrrolkangkdlkbwydpwjhaeutws: search msg failed: failed to load message: blockstore: block not found
  f082635: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacea3n45zg2jmviqkn33he3quvftxexar5ld6jbm5xijhnjp3zxx3a2: search msg failed: failed to load message: blockstore: block not found
  f097214: 'error, Korea, Bucheon-si, CryptoHash', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.227484150111199266 FIL, balance: 0.010014836770168697 FIL): not enough funds to execute transaction
  f097720: 'error, Korea, Bucheon-si', // error in deal activation: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacedfmx477ldi5gd56d6laskxprapk52c73zptkhcks4a6edavdzmqs: search msg failed: failed to load message: blockstore: block not found
  f0110768: 'error, Korea, Gwangju', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceaim6jqitm6ybkpw3leayyfrucxnka5ge7fyg2gl7l3qksk7hq7jc: search msg failed: failed to load message: blockstore: block not found
  f0111174: 'error, China, Guangzhou', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacebye2jkgxunmriwitww7ucdugteuypkgin54ibgqauv4j344gpeho: search msg failed: failed to load message: blockstore: block not found
  f0111885: 'error, Korea, Bucheon-si, WINNERS', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.2322164577527445 FIL, balance: 0.080416790725272195 FIL): not enough funds to execute transaction
  f0112713: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.220010877921046632 FIL, balance: 0.018693022876386898 FIL): not enough funds to execute transaction
  f0113331: 'error, Korea, Jinju + USA', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceb3w7y6u7aauori6nspvv6cnjqftktuyrdzvklgmpguiupb5h2ol6: search msg failed: failed to load message: blockstore: block not found
  f0115108: 'error, Korea, Yangcheon-gu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.218270732244374116 FIL, balance: 0.009528683573874182 FIL): not enough funds to execute transaction
  f0119146: 'error, NR', // error in deal activation: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacea7noeacf3uzkfyqndmabx7xbuxnbfyv22bcq6hwgtutzzqxyujjk: search msg failed: failed to load message: blockstore: block not found
  f0119997: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacea4x46org3bvdmuc7iclqls5zeshli6lsiqnyrqrytpzcfng46knw: search msg failed: failed to load message: blockstore: block not found
  f0121533: 'error, China, Zhejiang', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacedsdelzaczr3muzenfa7zmzpd6wewn7gyeftoy6wosgtjp76thyau: search msg failed: failed to load message: blockstore: block not found
  f0134671: 'error, Korea, Gimpo-si', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacebuvjcmdugups2grq4ibxhk7pwkgotep57lx7nywxixsk6cr7x2w2: search msg failed: failed to load message: blockstore: block not found
  f0136811: 'error, China, Guangdong', // error reading Response message from provider: EOF
  f0137489: 'error, UK, Deeside', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceallad5luzoi7laih7uzmowztekdlozmba5oaplxyxbttpn2ewtcs: search msg failed: failed to load message: blockstore: block not found
  f0146751: 'error, China, Jiangsu', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacebouutgcpvf4eakmiwxluirlbsin4dejvv4cvvcku2lz46h4xuk2q: search msg failed: failed to load message: blockstore: block not found
  f0149455: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacecjierekp3cno3jdnu5e4slvrs66hx453vp2cpqqule5aydqsktew: search msg failed: failed to load message: blockstore: block not found
  f0153278: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacecm26k4ce5wnkrrsf4pg44os5iaaueztst47dnafytbu7vbsrpbnu: search msg failed: failed to load message: blockstore: block not found
  f0156207: 'error, Korea, Ulsan', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceaqgsumxtkl6q2ogvmdg6sqd3qerp4j7yrf3tsgkvuw4h55cacoqy: search msg failed: failed to load message: blockstore: block not found
  f0156452: 'error, Korea, Ulsan', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacedkj565bjhqoj7exmr5zkjp2v7yir7qx4vahyg2a7a7s3flvosrva: search msg failed: failed to load message: blockstore: block not found
  f0157265: 'error, China, Zhangjiakou', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacedg7pqqe2ll3bjbhkqxakuub6xj4x5alxuutr6qsqqkx2jidfxmom: search msg failed: failed to load message: blockstore: block not found
  f0167254: 'error, Russia, St. Petersburg', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacearld4c6ftslk44feyzwlljqszkzrpfl4lme2wxvdqqlcg6p77zlw: search msg failed: failed to load message: blockstore: block not found
  f0215461: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacedy67skysu7hbcuzp6r3bio6jugqpnlkoeznjdiumss7wlyrk5fqs: search msg failed: failed to load message: blockstore: block not found
  f0396705: 'error, NR', // error in deal activation: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacecb3epxzdja25hmhu5l7z23brz5ahg4idvjpmvbdaoid2ymgx6336: search msg failed: failed to load message: blockstore: block not found
  f0396846: 'error, China, Zhongshan', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceaoozacr3odb6vsthx7l5bkrmt4vudvwgkwe236tacp32h4vcchj2: search msg failed: failed to load message: blockstore: block not found
  f0397728: 'error, China, Dongguan', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacedpxt43ffrnr65yuinjlzgfz4fadunfgfbpmwfhkxsbicllhiqrtu: search msg failed: failed to load message: blockstore: block not found
  f0399814: "error, China, Ya'an", // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacebrenk6hjwv4jjf2ormvf6kx62s2clcqkcpqjjv2yahn7r4nmeqzm: search msg failed: failed to load message: blockstore: block not found
  f0401300: 'error, France, Deuil-la-Barre', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacebpbz46pbww3m2duj25dvhsirfvkzhcb7wer5sx27enx4vmc6kshc: search msg failed: failed to load message: blockstore: block not found
  f0405129: 'error, China, Fujian', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceclfrcc2muvqcnz7lrdb6z54dvsg2cnw7zpqq5mtfg6dy6jl65jqm: search msg failed: failed to load message: blockstore: block not found
  f0413563: 'error, Korea, Gangnam-gu', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacebaxvzr4aqa7gjts5aqsd7yefc2drblkak7jpaqxhjg4dqxkvrdna: search msg failed: failed to load message: blockstore: block not found
  f0414383: 'error, China, Dongguan', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacecif52vtzvj7vtvep25amtyvc3mgq33wkqw6r3zhichnk3niowtsa: search msg failed: failed to load message: blockstore: block not found
  f0417750: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaced2pzpkewqq6xmm53euyct2nlw42u5rizre5qsm2fhvmlv56ymf5a: search msg failed: failed to load message: blockstore: block not found
  f0419768: 'error, Korea, Seongnam-si', // AddPiece failed: normal shutdown of state machine
  f0421392: 'error, China, Foshan', // error in deal activation: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacedfqvu7iyvffrnhzmirkkyrdnq6i7uyglblmsnq7fe3g42i4uxcik: search msg failed: failed to load message: blockstore: block not found
  f0422737: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacedebsimpo6e7u55epjzgfad7hlin2iykwmbqasxrx64txsl7tzimy: search msg failed: failed to load message: blockstore: block not found
  f0447181: 'error, China, Zibo', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaced6ovuqdu6iz5ewq5xbshka2ynzbcjpbxvfcwuzymspgvqpflgiae: search msg failed: failed to load message: blockstore: block not found
  f0452303: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacebkcmiizkopgjvhng5cns3i3yn7sx4vxyqpo3re4qi5bu6aooaggw: search msg failed: failed to load message: blockstore: block not found
  f0501283: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacebdal2bdkza4nsecvv7urrok6jmmykyowrbutgvbvuslamkq3mmys: search msg failed: failed to load message: blockstore: block not found
  f0504054: 'error, China, Luzhou', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.09999999994451648 FIL, balance: 0.012623892884177775 FIL): not enough funds to execute transaction
  f0512170: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.2213882346418116 FIL, balance: 0.011154393765263715 FIL): not enough funds to execute transaction
  f0512179: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.217984482670433525 FIL, balance: 0.009748932759559661 FIL): not enough funds to execute transaction
  f0514737: 'error, Korea, Busan', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacecbio2gwa5eoa66pi7ib2aelgybkoccjo4efaiopiqnlphso67iyo: search msg failed: failed to load message: blockstore: block not found
  f0676272: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacebf7vbe4fxm6yogqb2igpuiewvijwyigub5esewqne7pct73nevg4: search msg failed: failed to load message: blockstore: block not found
  f0690699: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacea7h23jpbgtnkdkhc55jv6z4wa7pwu5ume77cntgervtfd7uz4alu: search msg failed: failed to load message: blockstore: block not found
  f0693131: 'error, China, Zhongshan', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacecdohdiru6yihycrtq25tnj5fpnctgapypjad45gewd2vpegxjlag: search msg failed: failed to load message: blockstore: block not found
  f0700999: 'error, China, Chengdu', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 1001520): failed to look up deal on chain: looking for publish deal message bafy2bzacecfv45w7p6ba4tfko6d2o46emapq3dildg5v2ymfqsp5ard5xakvy: search msg failed: failed to load message: blockstore: block not found
  f0717969: 'error, USA, Los Angeles', // deal failed: (State=26) deal data verification failed: error generating CommP: failed to build treeCaused by:    0: failed to create data store    1: No such file or directory (os error 2)
  f0729674: 'error, Canada, Vancouver', // error in deal activation: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceb7fdgfg2zhiw2t3uv4vbniizgqvk2ofonhxu5vdm65kfkh2na56q: search msg failed: failed to load message: blockstore: block not found
  f0746416: 'error, Korea, Gyeonggi-do', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacedf5cdnhb253ocox7rizqtvfellecjyy27r3xenmhfyjbou3vvkgk: search msg failed: failed to load message: blockstore: block not found
  f0763981: 'error, China, Tianjin', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacecjo6apdth6bgceytfmo2ze2yqwgnbs5raau6wdg6ure7h7chavce: search msg failed: failed to load message: blockstore: block not found
  f0813086: 'error, Korea, Jung-gu', // deal failed: (State=11) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.219393441467773704 FIL, balance: 0.072876227042401514 FIL): not enough funds to execute transaction
  f0822674: 'error, Korea, Seoul', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacec3yoqj4laceqq7gk6mtv5bndwbl73upd4f2qltpqfrggt4oameku: search msg failed: failed to load message: blockstore: block not found
  f0832373: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceb64jhwg5halfibd7jzuqsjtcv6jwf5gpmi6wr7dk3x6bq2jduxdg: search msg failed: failed to load message: blockstore: block not found
  f0835643: 'error, Korea, Songpa-gu', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacea7sjvlrjmk6d75rle3zl2lhxhvazne6eyn4wnfk42v7f2ifghvhw: search msg failed: failed to load message: blockstore: block not found
  f0839509: 'error, China, Beijing', // error in deal activation: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceb6axvdrjtwhce7ee3yny3fpaeau7t5tqgdrxeleskoipnxq5lnj6: search msg failed: failed to load message: blockstore: block not found
  f0870558: 'error, China, Hong Kong', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999977758776 FIL, balance: 0.012803278936807429 FIL): not enough funds to execute transaction
  f0871563: 'error, NR', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceaah4o6wdxg4stqm3oqlldozfvlhycaulnneb7xheu2ktxfpqjmyy: search msg failed: failed to load message: blockstore: block not found
  f0877545: 'error, China, Ningbo', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceaoqkkmzbepw6sya3eqpvdnklxe7ti7nakmn7qgsig27soselxayw: search msg failed: failed to load message: blockstore: block not found
  f01019009: 'error, China, Henan', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaced74zenv7vrok7n7h3jgnpiym3uf7cds4c25hufkx6abibavouqda: search msg failed: failed to load message: blockstore: block not found
  f01027268: 'error, Korea, Busan', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacedfcb2h7ebwj5lyfmraxwzwqavywlwrxcufrdodflepsqh2wbqdqi: search msg failed: failed to load message: blockstore: block not found
  f01039327: 'error, Indonesia, Denpasar', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacecaandydxnaw2gzx4tvkxhiu737pekroxqronaglb6wnuek6ogob6: search msg failed: failed to load message: blockstore: block not found
  f01040469: 'error, Korea', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacea2arwy32luqppei2spusxrur2t3452prc53suhjgyiqxmx2a7fx2: search msg failed: failed to load message: blockstore: block not found
  f01044351: 'error, Korea, Gwangju', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.21583450720512747 FIL, balance: 0.004432781861985863 FIL): not enough funds to execute transaction
  f01053334: 'error, Korea, Mapo-gu', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacec4wkhz6ogbw6k77ce2twflwdzxdabsi4y2ct4hsk4ekyzw3ltibu: search msg failed: failed to load message: blockstore: block not found
  f01079646: 'error, China, Shenzhen', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 1001520): failed to look up deal on chain: looking for publish deal message bafy2bzacebhuckwrj3l6xgpxrwtwhzjowtk2oj63a5vagvk55y3uiebnis2kc: search msg failed: failed to load message: blockstore: block not found
  f01096590: 'error, Russia, Lipetsk', // error in deal activation: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceaqggb3ffkf3zspedsxjfdnosfnhy3ol2x2olxux4bfotg6uu6r2k: search msg failed: failed to load message: blockstore: block not found
  f01099312: 'error, China, Shenzhen', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: WaitForPublishDeals errored: handler: websocket connection closed
  f01099362: 'error, China, Baotou', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacecwzh57hj5zif65mu3ntrmjjrxb3ol3quvbd6ky467zvfv4ti2exe: search msg failed: failed to load message: blockstore: block not found
  f01099967: 'error, USA, London', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacebh4e6it7wtdjbmkfemsedl74iti2ykq4ja2lrr4jl4kzull6by7s: search msg failed: failed to load message: blockstore: block not found
  f01106730: 'error, China, Yunfu', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.026383548450293232 FIL, balance: 0.005429869810350996 FIL): not enough funds to execute transaction
  f01108129: 'error, NR', // error in deal activation: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacedrgzwvttx5qhpd5z2ltgzph6jp7u2l4mb2oudooiyyshj54ftpxu: search msg failed: failed to load message: blockstore: block not found
  f01112335: 'error, China, Taiwan, Taoyuan District', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacectfpkheewxk2z2ocdsk3bzqunnmplaraurc4ifndzxqkppg22guo: search msg failed: failed to load message: blockstore: block not found
  f01112955: 'error, China, Sichuan', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.02744679611145876 FIL, balance: 0.004725925450380642 FIL): not enough funds to execute transaction
  f01114420: 'error, Bulgaria, Sofia', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacednh7t55ileqvg4hwjygygdcyrvs6yoyetd6yutuhimeyf3j6rk26: search msg failed: failed to load message: blockstore: block not found
  f01116796: 'error, USA, Gilbert', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.026160217934607841 FIL, balance: 0.00133305765300682 FIL): not enough funds to execute transaction
  f01122113: 'error, Japan, Tokyo', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzaceahtv457itc7y4jo7e7gdj3eyhohhkrepbccze2emv6ibeunk3fs2: search msg failed: failed to load message: blockstore: block not found
  f01132416: 'error, autolisted', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacebzphkmhzada3wqbngtzs5xvrz3t22stqxy73qddc6g55kkvgh3de: search msg failed: failed to load message: blockstore: block not found
  f01133080: 'error, autolisted', // error waiting for deal completion: client: failed to look up deal 2216661 on chain: deal 2216661 not found - deal may not have completed sealing before deal proposal start epoch, or deal may have been slashed
  f01133130: 'error, autolisted', // error waiting for deal pre-commit message to appear on chain: failed to set up called handler: called check error (h: 978480): failed to look up deal on chain: looking for publish deal message bafy2bzacedph74wm5kz2ginsk4itlvo3ws4wrw52drtwo44cwlrr47ya5ppnw: search msg failed: failed to load message: blockstore: block not found
  f01138034: 'error, autolisted', // deal failed: (State=26) error calling node: AddFunds errored: found message with equal nonce as the one we are looking for (F:bafy2bzacebdkmdqk2lkrgyh5fehqu7esq6orvaethjmrxa4zob2jeelhwwzfq n 3323, TS: bafy2bzacedtr5vurgsrjzanevpd3nktsb5bxdussxwju7qsdk3zijocudghhu n3323)

  // Dial backoff

  f02303: 'backoff, Singapore',

  // Rejected

  f01154: 'rejected, NR',
  f02301: 'rejected, USA',
  f02609: 'rejected, China, Shanghai', // no online
  f02626: 'rejected, Singapore', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f03249: 'rejected, China, Yunfu',
  f03339: 'rejected, China, Luzhou, benxun', // no online
  f03347: 'rejected, China, Shenzhen', // no online
  f03362: 'rejected, Germany, Berlin',
  f08197: 'rejected, China, Foshan',
  f09642: 'rejected, Sweden, Alvsjo',
  f010035: 'rejected, Netherlands + China, Suzhou',
  f010241: 'rejected, China, Beijing + USA, Portland, 6Block-P', // no online
  f010405: 'rejected, China, Foshan',
  f010493: 'rejected, China, Shanghai', // no online
  f010498: 'rejected, China, Shenzhen', // no online
  f010501: 'rejected, China, Hangzhou, Interstellar Roewe', // no online
  f010505: 'rejected, China, Wuhan, Interstellar Roewe', // no online
  f010513: 'rejected, China, Chongqing', // no online
  f010528: 'rejected, China, Chongqing, Interstellar Roewe', // no online
  f014327:
    'rejected, China, Ningbo + Japan, Heiwajima + Germany, Frankfurt + USA + Canada, Toronto', // no online
  f015747: 'rejected, Japan, Setagaya-ku',
  f015885: 'rejected, China, Jiaxing', // no online
  f016398: 'rejected, China, Shanghai', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f017229: 'rejected, China, Sichuan',
  f020378: 'rejected, Bulgaria, Asenovgrad',
  f020523: 'rejected, China, Suzhou, changjiang', // sh: 1: VerifiedDeal:true: not found
  f021075: 'rejected, China, Chengdu', // no online
  f021254: 'rejected, NR', // f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q<nil>
  f021255: 'rejected, Netherlands + China, Suzhou',
  f021444: 'rejected, China, Shanghai', // no online
  f021479: 'rejected, NR', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f021714: 'rejected, China, Hong Kong',
  f022261: 'rejected, China, Luzhou', // no online
  f022748: 'rejected, China, Xinyang', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f022853: 'rejected, China, Fuzhou',
  f023013: 'rejected, NR', // no online
  f023179: 'rejected, China, Fuzhou', // sh: 1: f3rthootwyykyrhrxy3u3eihhxch7q5q7tlmzsxtlxuqwxcl2yvyjsjhrz5g37cjdhdufxm2qhyewt2dufasdf: not found
  f023462: 'rejected, China, Chongqing',
  f023530: 'rejected, China, Shanghai', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f023534: 'rejected, China, Chongqing',
  f023678: 'rejected, China, Jiaxing', // no online
  f023982: 'rejected, China, Chengdu',
  f023983: 'rejected, China, Chongqing',
  f023985: 'rejected, China, Chongqing',
  f024468: 'rejected, China, Shenzhen', // no online
  f032888: 'rejected, China, Weifang', // sh: 1: jq: not found
  f034258: 'rejected, China, Mianyang', // no online
  f035436: 'rejected, China, Jiangsu', // no online
  f040332: 'rejected, China, Shenzhen', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f042391: 'rejected, China, Fuzhou', // no online
  f047843: 'rejected, China, Xiamen', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f047857: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f047868: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f048968: 'rejected, NR', // no online
  f050260: 'rejected, China, Suzhou',
  f052701: 'rejected, China, Beijing',
  f053140: 'rejected, China, Shenzhen',
  f053229: 'rejected, NR',
  f056226: 'rejected, NR',
  f056573: 'rejected, China, Sichuan', // no online
  f057466: 'rejected, China, Guangzhou', // no online
  f062473: 'rejected, NR', // no online
  f063869: 'rejected, NR', // deal start epoch is too far in the future: 996225 > 994785
  f064218: 'rejected, USA, Kirkland', // no online
  f065174: 'rejected, NR', // no online
  f066102: 'rejected, NR',
  f066259: 'rejected, NR',
  f066270: 'rejected, China, Dongguan', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f068528: 'rejected, China, Shanghai', // no online
  f068809: 'rejected, NR',
  f070932: 'rejected, NR', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f073697: 'rejected, China, Karamay', // no online
  f079370: 'rejected, China, Zhangzhou', // no online
  f079618: 'rejected, China, Beijing', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f081323: 'rejected, UK, Cambridge', // no online
  f082095: 'rejected, NR', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f083638: 'rejected, China, Chongqing', // sh: 1: /lotus_data/.lotusstorage/dealfilter.pl: not found
  f085486: 'rejected, NR', // no online
  f085777: 'rejected, China, Zhangzhou', // no online
  f086423: 'rejected, China, Chengdu', // no online
  f089168: 'rejected, NR',
  f089380: 'rejected, NR',
  f090387: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f090864: 'rejected, NR',
  f096974: 'rejected, China, Chongqing', // no online
  f0100066: 'rejected, NR', // no online
  f0101387: 'rejected, China, Shenzhen', // no online
  f0102358: 'rejected, China, Guizhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0106363: 'rejected, NR',
  f0107133: 'rejected, NR', // no online
  f0109040: 'rejected, China, Zhangzhou', // no online
  f0109043: 'rejected, China, Karamay', // no online
  f0109272: 'rejected, China, Dongguan', // no online
  f0110133: 'rejected, China, Ningbo', // no online
  f0110762: 'rejected, Korea, Seoul', // no online
  f0111544: 'rejected, Korea, Seoul', // no online
  f0111658: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0112075: 'rejected, Korea, Seoul', // no online
  f0112087: 'rejected, China, Xiamen', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0112679: 'rejected, NR', // no online
  f0112691: 'rejected, Korea, Seoul', // no online
  f0114043: 'rejected, Korea, Seoul', // no online
  f0114687: 'rejected, China, Dongguan', // no online
  f0116436: 'rejected, Singapore', // deal start epoch is too far in the future: 996228 > 994788
  f0116445: 'rejected, Singapore', // miner is not accepting unverified storage deals
  f0116628: 'rejected, China, Shanghai', // no online
  f0117118: 'rejected, NR', // no online
  f0117556: 'rejected, NR', // no online
  f0118317: 'rejected, Singapore', // deal start epoch is too far in the future: 996228 > 974628
  f0118330: 'rejected, Singapore', // deal start epoch is too far in the future: 996228 > 974628
  f0118360: 'rejected, China, Hangzhou', // no online
  f0118695: 'rejected, Korea, Seoul', // no online
  f0118837: 'rejected, Korea, Seoul', // no online
  f0118917: 'rejected, China, Shaoxing', // no online
  f0120546: 'rejected, Korea, Seoul', // no online
  f0120793: 'rejected, Korea, Seoul', // no online
  f0121260: 'rejected, China, Quinzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0121602: 'rejected, China, Hong Kong', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0122398: 'rejected, NR', // no online
  f0122415: 'rejected, Korea, Seoul', // no online
  f0123281: 'rejected, Korea, Seoul', // no online
  f0124036: 'rejected, China, Nanchang', // no online
  f0124554: 'rejected, Korea, Gimhae', // no online
  f0124923: 'rejected, NR',
  f0126037: 'rejected, Korea, Seoul', // no online
  f0126038: 'rejected, Korea, Seoul', // no online
  f0126039: 'rejected, NR', // no online
  f0127352: 'rejected, Korea, Seoul', // no online
  f0127353: 'rejected, Korea, Seoul', // no online
  f0127354: 'rejected, Korea, Seoul', // no online
  f0128580: 'rejected, Korea, Seoul', // no online
  f0128581: 'rejected, Korea, Seoul', // no online
  f0128582: 'rejected, Korea, Seoul', // no online
  f0130961: 'rejected, Korea, Seongnam-si',
  f0131331: 'rejected, China, Beijing',
  f0131419: 'rejected, China, Beijing',
  f0132461: 'rejected, Korea, Daegu', // no online
  f0133957: 'rejected, NR', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f0134286: 'rejected, NR', // no online
  f0134516: 'rejected, Singapore', // deal start epoch is too far in the future: 996230 > 974630
  f0134518: 'rejected, China, Guangdong', // deal start epoch is too far in the future: 996230 > 994790
  f0134867: 'rejected, NR', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0142515: 'rejected, NR', // no online
  f0143928: 'rejected, China, Beijing',
  f0145843: 'rejected, NR', // no online
  f0146220: 'rejected, NR', // no online
  f0146301: 'rejected, China, Shenzhen', // no online
  f0147565: 'rejected, China, Shenzhen',
  f0149026: 'rejected, China, Shenzhen',
  f0151341: 'rejected, China, Zhangzhou', // no online
  f0151629: 'rejected, NR', // no online
  f0152337: 'rejected, NR', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f0152712: 'rejected, NR', // no online
  f0152943: 'rejected, NR', // sh: 1: jq: not found
  f0153176: 'rejected, China, Fujian', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0154039: 'rejected, NR', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0155004: 'rejected, Korea, Seoul', // no online
  f0156264: 'rejected, Korea, Seoul', // no online
  f0157429: 'rejected, Korea, Bucheon-si', // no online
  f0158666: 'rejected, China, Beijing',
  f0158950: 'rejected, China, Beijing',
  f0158993: 'rejected, China, Zhangzhou', // no online
  f0162385: 'rejected, China, Beijing',
  f0164126: 'rejected, NR', // no online
  f0164291: 'rejected, China, Fujian', // no online
  f0169153: 'rejected, China, Chengdu', // sh: 1: jq: not found
  f0214631: 'rejected, Korea, Seoul', // no online
  f0216849: 'rejected, China, Fujian', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0218293: 'rejected, China, Fujian', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0222674: 'rejected, China, Quinzhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0223663: 'rejected, China, Beijing',
  f0228575: 'rejected, Canada, Calgary', // no online
  f0239688: 'rejected, China, Beijing',
  f0364982: 'rejected, Korea, Seoul', // no online
  f0364983: 'rejected, Korea, Seoul', // no online
  f0364987: 'rejected, Korea, Seoul', // no online
  f0392458: 'rejected, China, Fuzhou', // no online
  f0398863: 'rejected, Korea, Seoul', // no online
  f0398865: 'rejected, Korea, Seoul', // no online
  f0401135: 'rejected, Singapore', // deal start epoch is too far in the future: 996233 > 974633
  f0401303: 'rejected, Korea, Ulju-gun', // no online
  f0401348: 'rejected, Korea, Chuncheon', // no online
  f0402371: 'rejected, China, Shanghai', // miner is not accepting unverified storage deals
  f0409069: 'rejected, NR', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0410001: 'rejected, NR', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f0417918: 'rejected, NR', // no online
  f0423371: 'rejected, Korea, Seoul', // no online
  f0423381: 'rejected, Korea, Seoul', // no online
  f0427989: 'rejected, NR',
  f0432594: 'rejected, China, Zhengzhou', // no online
  f0435045: 'rejected, Korea, Ulju-gun', // no online
  f0444122: 'rejected, NR', // deal start epoch is too far in the future: 996235 > 994795
  f0449072: 'rejected, Korea, Jung-gu', // no online
  f0449088: 'rejected, Korea, Jung-gu', // no online
  f0456374: 'rejected, NR', // no online
  f0463143: 'rejected, NR', // no online
  f0466070: 'rejected, NR',
  f0469168: 'rejected, NR', // sh: /root/.lotusminer/dealfilter.pl: No such file or directory
  f0470972: 'rejected, China, Shanghai', // no online
  f0471691: 'rejected, China, Fujian', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0476476: 'rejected, Korea, Namyangju', // no online
  f0497031: 'rejected, China, Shangrao',
  f0513878: 'rejected, China, Guizhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0516456: 'rejected, Korea, Jung-gu', // no online
  f0517213: 'rejected, NR', // deal start epoch is too far in the future: 996236 > 994796
  f0519331: 'rejected, NR', // no online
  f0522364: 'rejected, NR', // deal start epoch is too far in the future: 996236 > 974636
  f0522949: 'rejected, China, Beijing', // deal start epoch is too far in the future: 996236 > 974636
  f0524539: 'rejected, Korea, Suwon', // no online
  f0669999: 'rejected, NR', // no online
  f0671368: 'rejected, NR', // no online
  f0675287: 'rejected, NR', // no online
  f0678845: 'rejected, China, Zhengzhou', // no online
  f0680538: 'rejected, Korea, Bucheon-si', // no online
  f0687206: 'rejected, China, Hangzhou', // no online
  f0694172: 'rejected, China, Luzhou', // no online
  f0694843: 'rejected, NR', // no online
  f0697462: 'rejected, Korea, Dalseo-gu', // no online
  f0706693: 'rejected, Belarus, Baranovichi', // no online
  f0709325: 'rejected, Korea, Jung-gu', // no online
  f0709366: 'rejected, China, Hangzhou', // no online
  f0713736: 'rejected, NR', // no online
  f0715235: 'rejected, Korea, Jung-gu', // no online
  f0718665: 'rejected, NR', // no online
  f0720785: 'rejected, NR', // no online
  f0722658: 'rejected, China, Chengdu', // no online
  f0723162: 'rejected, Korea, Bucheon-si', // no online
  f0723722: 'rejected, USA, New York', // no online
  f0723827: 'rejected, China, Guizhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0726677: 'rejected, Korea, Jung-gu', // no online
  f0727453: 'rejected, Korea, Ulsan', // no online
  f0728347: 'rejected, USA, Queens', // no online
  f0729297: 'rejected, Korea, Gyeonggi-do', // no online
  f0751831: 'rejected, NR', // no online
  f0753055: 'rejected, China, Fuzhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0753213: 'rejected, China, Xiamen', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0753366: 'rejected, China, Fuzhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0753569: 'rejected, China, Beijing',
  f0753959: 'rejected, NR', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0753988: 'rejected, China, Fuzhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0761358: 'rejected, China, Chengdu', // sh: 1: jq: not found
  f0772766: 'rejected, China, Guangzhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0810223: 'rejected, NR', // no online
  f0813083: 'rejected, Korea, Jung-gu', // no online
  f0816782: 'rejected, Korea, Jung-gu', // no online
  f0816783: 'rejected, Korea, Jung-gu', // no online
  f0827006: 'rejected, China, Xuzhou', // no online
  f0827934: 'rejected, USA, Port Jefferson', // no online
  f0833793: 'rejected, China, Henan', // no online
  f0836164: 'rejected, USA', // no online
  f0838684: 'rejected, Czechia, Prague', // total deal price less than currently accepted minimum: 0.00001154552 FIL < 0.024 FIL
  f0838852: 'rejected, NR', // no online
  f0838873: 'rejected, USA, Washington', // no online
  f0838893: 'rejected, USA, Des Moines', // no online
  f0838923: 'rejected, Netherlands, Amsterdam', // no online
  f0845552: 'rejected, NR', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0857798: 'rejected, China, Wenzhou', // no online
  f0867312: 'rejected, China, Foshan', // no online
  f0872282: 'rejected, China, Guangzhou', // no online
  f0878005: 'rejected, NR', // no online
  f01024569: 'rejected, China, Hangzhou', // no online
  f01024886: 'rejected, China, Wenzhou', // no online
  f01044086: 'rejected, NR', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f01045784: 'rejected, USA, Ridgewood', // sh: 1: /home/supernsc/.lotusminer/dealfilter.pl: not found
  f01051151: 'rejected, Korea, Jung-ang', // no online
  f01051152: 'rejected, Korea, Jung-ang', // no online
  f01052991: 'rejected, Korea, Jung-ang', // no online
  f01074953: 'rejected, NR', // no online
  f01075514: 'rejected, Korea, Jung-ang', // no online
  f01075517: 'rejected, Korea, Jung-ang', // no online
  f01075904: 'rejected, NR', // no online
  f01077708: 'rejected, NR', // no online
  f01086553: 'rejected, China, Zhongshan', // no online
  f01089898: 'rejected, Korea, Jung-gu', // no online
  f01095710: 'rejected, NR', // no online
  f01099820: 'rejected, China, Wenzhou', // no online
  f01104909: 'rejected, China, Shanghai', // no online
  f01106888: 'rejected, China, Beijing', // no online
  f01117206: 'rejected, China, Jieyang', // no online
  f01119890: 'rejected, autolisted', // sh: 1: /data/storage/lotuswork/lotusstorage/dealfilter.pl: not found
  f01119939: 'rejected, USA, Baxter', // no online
  f01121994: 'rejected, China, Nanning', // no online
  f01122640: 'rejected, auto', // no online
  f01128709: 'rejected, autolisted', // no online
  f01131466: 'rejected, autolisted', // no online
  f01132323: 'rejected, autolisted', // no online
  f01133668: 'rejected, autolisted', // no online
  f01135819: 'rejected, autolisted', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f01141077: 'rejected, autolisted', // no online
  f01141633: 'rejected, autolisted', // no online

  // Fail

  f01012: 'fail, China, Guangzhou + Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFLQGbLNFnsPgpNrF4e1gKCACTY7jQoVyRjQVYioR84UB:  * [/ip4/127.0.0.1/tcp/8888] dial tcp4 127.0.0.1:8888: connect: connection refused  * [/ip4/43.230.90.191/tcp/8888] dial tcp4 0.0.0.0:40089->43.230.90.191:8888: i/o timeout  * [/ip4/183.60.252.190/tcp/8888] dial tcp4 0.0.0.0:40089->183.60.252.190:8888: i/o timeout
  f01152: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFRLNrTpPQrNK98yv2JAFWxXiC2fSFjmfCaWuqNp1RkGM:  * [/ip4/101.36.64.211/tcp/42545] dial tcp4 0.0.0.0:40089->101.36.64.211:42545: i/o timeout
  f01155: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMUvqQ2gKwb8YCM1GKZgcQCVsRAMH97BjzQoN9he91jDo:  * [/ip4/203.107.44.156/tcp/39770] dial tcp4 0.0.0.0:40089->203.107.44.156:39770: i/o timeout
  f01231: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLmissry3Smj7oSH495SWBwjCh6rQY3GWsnxJvweeZT7r:  * [/ip4/47.252.15.25/tcp/55242] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLmissry3Smj7oSH495SWBwjCh6rQY3GWsnxJvweeZT7r, but remote key matches 12D3KooWQWNyWUpMmAgh8f84bneQ5164tDUYjJkJsFWxKrC3UDDD  * [/ip4/172.17.32.101/tcp/10241] dial tcp4 0.0.0.0:40089->172.17.32.101:10241: i/o timeout
  f01235: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEZtCEjeef1Ud7Knw3wmyutuS9nMQ8EiYNvbB5caM1X1F:  * [/ip4/170.33.12.95/tcp/16668] dial tcp4 0.0.0.0:40089->170.33.12.95:16668: i/o timeout
  f01241: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01248: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBXxUMb8H3o52vUKvSkdU8AYgdAXEcZKLUx5gvGsowZz8:  * [/ip4/128.1.78.100/tcp/31432] dial tcp4 0.0.0.0:40089->128.1.78.100:31432: i/o timeout
  f01279: 'fail, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWARjz8p5k2FbtUAxTNfmMxam7hGn7X9FeD7Yh1KgfuAhK:  * [/ip4/127.0.0.1/tcp/43889] dial tcp4 127.0.0.1:43889: connect: connection refused  * [/ip6/::1/tcp/40925] dial tcp6 [::1]:40925: connect: connection refused  * [/ip4/118.116.2.66/tcp/40000] dial tcp4 0.0.0.0:40089->118.116.2.66:40000: i/o timeout  * [/ip4/172.19.0.33/tcp/43889] dial tcp4 0.0.0.0:40089->172.19.0.33:43889: i/o timeout
  f01287: 'fail, China, Jiaxing, MaiTian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJQd43HScS7iBzsggGyoE5yrXAeCcfAqhrB4NrsQX7otw:  * [/ip4/172.16.2.123/tcp/5472] dial tcp4 0.0.0.0:40089->172.16.2.123:5472: i/o timeout  * [/ip4/122.225.68.92/tcp/5472] dial tcp4 0.0.0.0:40089->122.225.68.92:5472: i/o timeout
  f01289: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWB3ebDwHr7dXPBFo2PEV25VehmXAn3huYZJeWShRPYsMq:  * [/ip4/223.95.197.18/tcp/44163] dial tcp4 0.0.0.0:40089->223.95.197.18:44163: i/o timeout
  f01314: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f01475: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPD6dMSKHegPtnZvhC8ToQHPQEE4kZRxNK6uZv4Dk8nBG:  * [/ip4/170.33.12.186/tcp/17031] dial tcp4 0.0.0.0:40089->170.33.12.186:17031: i/o timeout
  f01782: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAECESUksm2HVdjSY7X1DpDD9dhPHXN8JuRdyGHcky5ox:  * [/ip4/139.196.240.164/tcp/11347] dial tcp4 0.0.0.0:40089->139.196.240.164:11347: i/o timeout
  f01799: 'fail, China, Jinan + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBSVJEJLvLCFVzhYEfLVmznbL4Horztx4W6bXuYa7w1VJ:  * [/ip4/195.123.237.226/tcp/62333] dial tcp4 0.0.0.0:40089->195.123.237.226:62333: i/o timeout  * [/ip4/222.175.139.190/tcp/63208] dial tcp4 0.0.0.0:40089->222.175.139.190:63208: i/o timeout
  f01800: 'fail, China, Shenzhen + Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKpE8ej5zhZ8JBnwEsf3fTy73VBUwaHY8QZcz18Rtmrqr:  * [/ip4/182.131.4.48/tcp/33333] dial tcp4 182.131.4.48:33333: connect: connection refused
  f02299: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEratp7oKx1VPMGZY5xeukYMmKPuxKo92sjsHsx6KSbTE:  * [/ip4/182.18.83.2/tcp/1024] dial tcp4 0.0.0.0:40089->182.18.83.2:1024: i/o timeout
  f02388: 'fail, Netherlands, Amersfoort, Kroketje', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02399: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR76gswS31CE7yMXLhVpesUx9ePgaUYWaJoHY3jLpPenT:  * [/ip4/175.24.25.61/tcp/44449] dial tcp4 0.0.0.0:40089->175.24.25.61:44449: i/o timeout
  f02403: 'fail, UK, London + Manchester', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMj9PnQDUCVunSoYrkbxhLV2rjK8bKBLQML3sCvpPcN8B:  * [/ip4/2.58.45.33/tcp/18888] dial tcp4 0.0.0.0:40089->2.58.45.33:18888: i/o timeout  * [/ip4/2.58.47.71/tcp/18888] dial tcp4 0.0.0.0:40089->2.58.47.71:18888: i/o timeout
  f02405: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAyXVY9WLfATgPPtJ2wB6T44MachjCV7jNRAmDXs2ZKoP:  * [/ip4/119.147.213.59/tcp/4123] dial tcp4 119.147.213.59:4123: connect: connection refused  * [/ip4/192.168.231.206/tcp/4123] dial tcp4 0.0.0.0:40089->192.168.231.206:4123: i/o timeout
  f02417: 'fail, China, Zhangjiakou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCqGULDJFYkgTYvmzToQA4gTMGwV3ZpfkDgrnjXY6suRS:  * [/ip4/116.132.221.10/tcp/10240] dial tcp4 116.132.221.10:10240: connect: connection refused
  f02420: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLarDsiyUrxyyAESiMZbmU1kTrcXhLfUw7yU42JeWY8Ad:  * [/ip4/47.252.2.93/tcp/34571] dial tcp4 0.0.0.0:40089->47.252.2.93:34571: i/o timeout
  f02421: 'fail, China, Deyang + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPQgh1tLEZ6sxmnoZ2xX4xLHB8rrxNeEnEA5untT9rhdU:  * [/ip4/192.168.109.3/tcp/5002] dial tcp4 0.0.0.0:40089->192.168.109.3:5002: i/o timeout  * [/ip4/125.64.78.27/tcp/5002] dial tcp4 0.0.0.0:40089->125.64.78.27:5002: i/o timeout  * [/ip4/161.117.186.53/tcp/5002] dial tcp4 0.0.0.0:40089->161.117.186.53:5002: i/o timeout
  f02422: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGLq2Q9mQ8tNynijNfNJj1K7UTUPZKfr5iWXspd617yLo:  * [/ip4/117.38.4.82/tcp/22347] dial tcp4 0.0.0.0:40089->117.38.4.82:22347: i/o timeout
  f02423: 'fail, Ukraine, Kyiv', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRmBqXyx9EXRYJLF28hPw6YoxzErmrSE2twSufnebzPGr:  * [/ip4/176.104.58.70/tcp/1347] dial tcp4 0.0.0.0:44703->176.104.58.70:1347: i/o timeout
  f02425: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCK7wNHxKjxN5CGMGdTLh1VRwxru9cuR7353pPHvCBJ6H:  * [/ip4/196.12.34.77/tcp/2254] dial tcp4 0.0.0.0:40089->196.12.34.77:2254: i/o timeout
  f02438: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMrDPhKaMeJFenXRFd4Rb9Zt111CBY7uY6AoZ93MTbLHw:  * [/ip4/202.34.55.65/tcp/11254] dial tcp4 0.0.0.0:40089->202.34.55.65:11254: i/o timeout
  f02492: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWExafiDYdEKRvWWTRMfZC7t7YzqMmfJDEcp86BXC27TTJ:  * [/ip4/103.142.248.7/tcp/3347] dial tcp4 0.0.0.0:40089->103.142.248.7:3347: i/o timeout
  f02503: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEvy6gDEmVj8P6rE5HvzSyZzXkeezu6EV3nDcNpDG142T:  * [/ip4/8.209.71.125/tcp/31432] dial tcp4 0.0.0.0:44703->8.209.71.125:31432: i/o timeout
  f02514: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02520: 'fail, China, Hong Kong + Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGuiACQawFqfzpE5LQRKMvLq3qSYvKkEwLgRsVokvCjTj:  * [/ip4/10.3.4.152/tcp/31432] dial tcp4 0.0.0.0:40089->10.3.4.152:31432: i/o timeout  * [/ip4/121.14.159.107/tcp/31432] dial tcp4 0.0.0.0:40089->121.14.159.107:31432: i/o timeout  * [/ip4/8.211.50.10/tcp/31432] dial tcp4 0.0.0.0:40089->8.211.50.10:31432: i/o timeout
  f02528: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRFJDiY5BesoHcBWMwGNyiBK2cx1sKrEkxSTyCk76HwpJ:  * [/ip4/10.3.3.76/tcp/58692] dial tcp4 0.0.0.0:44703->10.3.3.76:58692: i/o timeout  * [/ip4/8.209.70.199/tcp/58692] dial tcp4 0.0.0.0:44703->8.209.70.199:58692: i/o timeout
  f02529: 'fail, China, Chongqing + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFEZiYoJxqyuANeLtn7tDytRkYzcc9HS6gbaymHgMijWc:  * [/ip4/8.209.64.163/tcp/23004] dial tcp4 0.0.0.0:40089->8.209.64.163:23004: i/o timeout  * [/ip4/101.206.156.202/tcp/23004] dial tcp4 0.0.0.0:40089->101.206.156.202:23004: i/o timeout
  f02610: 'fail, Netherlands', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMnLT8D5yNAdEQbt2fXHFhUVQT2crdGLVktpSo7RCXtnk:  * [/ip4/202.0.16.111/tcp/41254] dial tcp4 0.0.0.0:40089->202.0.16.111:41254: i/o timeout
  f02613: 'fail, China, Chongqing + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSHE6LnRd5b8GdWaCAfBz5NQhq4uZafybStUnYeabgwRB:  * [/ip4/101.206.156.202/tcp/23027] dial tcp4 0.0.0.0:40089->101.206.156.202:23027: i/o timeout  * [/ip4/8.209.64.163/tcp/23027] dial tcp4 0.0.0.0:40089->8.209.64.163:23027: i/o timeout
  f02614: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE6JfBTMyjirNPSRi4AfZjCseRHGzXZvXUmKMsdHViyif:  * [/ip4/170.33.9.50/tcp/32633] dial tcp4 0.0.0.0:40089->170.33.9.50:32633: i/o timeout
  f02619: 'fail, China, Beijing, Blockcasting', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKZRdxtd9tC1tEvUynBRqRqzdxsi3jBmURi9HxftfgZLS:  * [/ip4/0.0.0.0/tcp/10240] dial tcp4 0.0.0.0:10240: connect: connection refused
  f02625: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE1N2gyzrMRA6EywurJGaseGWuTa9Rn5tXdPLZ7yo8QSK:  * [/ip4/101.133.172.142/tcp/1024] failed to negotiate security protocol: EOF
  f02654: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGPpw5iYy388qzkZL4qmJR6RoUQfbUQS5kDz7sDfEVuwJ:  * [/ip4/114.88.222.181/tcp/43355] dial tcp4 0.0.0.0:40089->114.88.222.181:43355: i/o timeout
  f02721: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNNUguf8bGe72cudmWpKobV3Pkkc9Lx3GBDG2AEfDZN9L:  * [/ip4/202.0.32.211/tcp/4254] dial tcp4 0.0.0.0:40089->202.0.32.211:4254: i/o timeout
  f02723: 'fail, China, Tongling', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDvwbbdLgBbuQ3MPPN7gos8XEXekTJxW5NX4DMCfXNUoZ:  * [/ip4/60.173.23.17/tcp/23456] dial tcp4 0.0.0.0:40089->60.173.23.17:23456: i/o timeout
  f02725: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9ygexQt5zAMg1jLPbb3g4fgYfKHZKNcviMxXJk4UJAMX:  * [/ip4/101.32.38.57/tcp/18899] dial tcp4 0.0.0.0:40089->101.32.38.57:18899: i/o timeout
  f02726: 'fail, USA, Brooklyn', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWS4dsPm97xGtEaCSuH4k6uWtrH3A1kH1tKpBejDTPATrK:  * [/ip4/202.0.71.141/tcp/1254] dial tcp4 0.0.0.0:40089->202.0.71.141:1254: i/o timeout
  f02731: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWND88xcsZCdYNSUkqy35ikLpMaDpPMKse1mmMAZrFQyD6:  * [/ip4/202.6.95.44/tcp/21254] dial tcp4 0.0.0.0:40089->202.6.95.44:21254: i/o timeout
  f02767: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQotzkhoCXR7hSo5FMrrsHhYh8q7KSXHx85oZkFd3B8Pg:  * [/ip4/18.192.27.227/tcp/37722] dial tcp4 0.0.0.0:40089->18.192.27.227:37722: i/o timeout
  f02769: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02770: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02775: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02778: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02779: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02838: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMwvGx979vAyPA9gSyCcZ5xdLyi25WrJMikiYUG3sdton:  * [/ip4/118.123.228.9/tcp/48633] dial tcp4 0.0.0.0:40089->118.123.228.9:48633: i/o timeout
  f02856: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f03000: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f03002: 'fail, China, Chongqing + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAwqepwZRwQPyBew1FWZo7BvQ6tTP3nyjG8skVU9uWEwL:  * [/ip4/8.209.64.163/tcp/18880] dial tcp4 0.0.0.0:40089->8.209.64.163:18880: i/o timeout  * [/ip4/101.206.156.202/tcp/18880] dial tcp4 0.0.0.0:40089->101.206.156.202:18880: i/o timeout
  f03134: 'fail, China, Cangzhou, QiaoMu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGKAuRMFJPmp6v9DR81vnbnFaToheUDUnMsXtT4MCdWq2:  * [/ip4/111.161.72.108/tcp/4913] dial tcp4 0.0.0.0:40089->111.161.72.108:4913: i/o timeout
  f03144: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFMK8Vg4SH5Wsrvp76JpJvwiuxdXpRyPrWa76Jrj6K4tc:  * [/ip4/103.214.41.38/tcp/23456] dial tcp4 0.0.0.0:40089->103.214.41.38:23456: i/o timeout
  f03176: 'fail, USA, San Mateo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPDyDeAQWj4kSEkVog1NAHJVu9cWpur3uGzH8H92THWPp:  * [/ip4/47.88.55.220/tcp/15470] dial tcp4 0.0.0.0:40089->47.88.55.220:15470: i/o timeout  * [/ip4/47.88.57.241/tcp/15470] dial tcp4 0.0.0.0:40089->47.88.57.241:15470: i/o timeout
  f03224: 'fail, Ukraine, Kyiv', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPQURCRZFxop8t7RKBwPiHSQNn2DYRbtFvz6AzZgaEQ2U:  * [/ip4/176.104.58.70/tcp/1348] dial tcp4 0.0.0.0:44703->176.104.58.70:1348: i/o timeout
  f03266: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRTVB3ued6YhMdyJ2qoQ6cKkVE7pPbfmETAmz61dz8cDj:  * [/ip4/200.226.167.245/tcp/22125] dial tcp4 0.0.0.0:40089->200.226.167.245:22125: i/o timeout
  f03275: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f03287: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPLKQae57X1Wh9afjjBZbujq6qS53GdNbLULuyMARgxPC:  * [/ip4/216.154.66.123/tcp/32215] dial tcp4 0.0.0.0:40089->216.154.66.123:32215: i/o timeout
  f03325: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMY9qD6HqyujzkBMXZFUiVLUjYhL89fF6nexr8T4KS8Mf:  * [/ip4/113.107.201.186/tcp/42243] dial tcp4 113.107.201.186:42243: connect: connection refused
  f03328: 'fail, China, Xinxiang, Golden Miner', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ3c9CscaFyBbZcVYreTDCQAttS4g5NxomEDiSV7ZHStV:  * [/ip4/27.50.142.61/tcp/2347] dial tcp4 0.0.0.0:40089->27.50.142.61:2347: i/o timeout
  f03344: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f03358: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAAR2DxhxHGbXYBGL5qEawVpYdmRiTE4SxnzcFGVN4Vz3:  * [/ip4/1.183.72.211/tcp/30001] dial tcp4 0.0.0.0:40089->1.183.72.211:30001: i/o timeout
  f03363: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNUoRxEMinMJFfr98yF9UCnakRWRJPPN843BCpVoyiZtw:  * [/ip4/1.183.72.210/tcp/30003] dial tcp4 0.0.0.0:40089->1.183.72.210:30003: i/o timeout
  f03367: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSxtJbCSV1BFbbGoNKiY7tYue55KfaSS71QTYHhpsGXnm:  * [/ip4/95.251.119.33/tcp/3215] dial tcp4 0.0.0.0:40089->95.251.119.33:3215: i/o timeout
  f03624: 'fail, Germany, Chemnitz, ode', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvyqMy8wyyqvc4tPqkRrMcKkG2JNfVyZSX1viC88TXwG:  * [/ip4/87.128.76.11/tcp/29866] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJvyqMy8wyyqvc4tPqkRrMcKkG2JNfVyZSX1viC88TXwG, but remote key matches 12D3KooWDuY4XQ9iVEiCSCihsQaCdPUwdj2j6J83EHrew4hc7KeX
  f04443: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDact5w85YfxchLRcyhhZ2AA9u98PLByXX76Lu5j5VAjS:  * [/ip4/116.229.183.166/tcp/29847] dial tcp4 0.0.0.0:40089->116.229.183.166:29847: i/o timeout
  f05316: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f07749: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f07796: 'fail, China, Hunan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f07824: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHK7ZsRLCxHCFuuyURGmcSHaTamF4SFwXBXxVmzjuaxKT:  * [/ip4/10.166.8.11/tcp/32759] dial tcp4 0.0.0.0:40089->10.166.8.11:32759: i/o timeout
  f07830: 'fail, China, Zhongshan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE9SzGnHcweWu3UQaStBR1vmzjXqaN1YCTcSZ9DZ2oRAF:  * [/ip4/178.208.57.59/tcp/21322] dial tcp4 0.0.0.0:40089->178.208.57.59:21322: i/o timeout
  f07919: 'fail, China, Beijing, Shanghai, Hunan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQbtaEAHPhVBuGoQtdnPxFfuKZ7axSiCFeNxuYgQGQYFx:  * [/ip4/139.196.136.126/tcp/23456] failed to negotiate security protocol: read tcp4 144.217.11.204:40089->139.196.136.126:23456: read: connection reset by peer  * [/ip4/47.101.4.131/tcp/23456] dial tcp4 0.0.0.0:40089->47.101.4.131:23456: i/o timeout  * [/ip4/101.32.198.187/tcp/23456] dial tcp4 0.0.0.0:40089->101.32.198.187:23456: i/o timeout  * [/ip4/101.32.198.186/tcp/23456] dial tcp4 0.0.0.0:40089->101.32.198.186:23456: i/o timeout
  f07969: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFUXofzyD12vD1rWnNi9coXTtUqc188pNo2r7sNSgTBYQ:  * [/ip4/121.52.246.48/tcp/5002] dial tcp4 0.0.0.0:40089->121.52.246.48:5002: i/o timeout
  f08091: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWF2fkifBQNtVh9LwQC9m1MvgTTdLVHAezSxATrze3aK25:  * [/ip4/0.0.0.0/tcp/5472] dial tcp4 0.0.0.0:5472: connect: connection refused
  f08094: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRdbaruzV1FLSxZAriWDwHcYPteXyAPdtNaMkx7MMyRwr:  * [/ip4/183.2.154.179/tcp/23450] dial tcp4 0.0.0.0:40089->183.2.154.179:23450: i/o timeout
  f08101: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGjb3T4GLL7LXjfahBiaxRJDw2tu3ps42jYM4HcMTJ5P6:  * [/ip4/192.168.3.11/tcp/32759] dial tcp4 0.0.0.0:40089->192.168.3.11:32759: i/o timeout
  f08148: 'fail, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJRifXRHkLaHN8JgPxy6LDmn5JyDaBxqnKLEgZur3S8ZX:  * [/ip4/103.108.182.27/tcp/30031] dial tcp4 0.0.0.0:40089->103.108.182.27:30031: i/o timeout
  f08242: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKPWTxHrJdASejkyzHjU7f3XVECGWSmJFCy9SL65Dcutg:  * [/ip4/47.242.56.117/tcp/6789] dial tcp4 0.0.0.0:40089->47.242.56.117:6789: i/o timeout
  f08264: 'fail, China, Xianning', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWC4HGgmJqCZtaQzLRUSvy21GRhayGtaSES536Ug7mxpqf:  * [/ip4/103.222.191.115/tcp/1161] dial tcp4 0.0.0.0:40089->103.222.191.115:1161: i/o timeout
  f09002: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEEFKcY5USt22uCrNLj6McbDAtkJZRF7ns5atGS8M3rio:  * [/ip4/113.200.194.196/tcp/32634] dial tcp4 0.0.0.0:40089->113.200.194.196:32634: i/o timeout
  f09037: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGijGVP9N8ebcJNNEEPEGDhWbSJbsW2KtWeqVa5MQvTBx:  * [/ip4/170.33.12.95/tcp/16666] dial tcp4 0.0.0.0:40089->170.33.12.95:16666: i/o timeout
  f09620: 'fail, China, Weifang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRHjQb3e5ZEJLbJmfiuTftU9f63ts5c3kr1WCaz7PDMXP:  * [/ip4/58.57.65.80/tcp/9620] dial tcp4 0.0.0.0:40089->58.57.65.80:9620: i/o timeout
  f09652: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAAap3GmuBww6k7oYMLvQeoVVstVFmQaLqThfM9ZFtDqT:  * [/ip4/170.33.9.50/tcp/32632] dial tcp4 0.0.0.0:40089->170.33.9.50:32632: i/o timeout
  f09710: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMceygoywUMfKmgMsESpZwsbALV11E3oUjdoC7iqDbQbr:  * [/ip4/103.44.253.56/tcp/40573] dial tcp4 0.0.0.0:40089->103.44.253.56:40573: i/o timeout
  f010010: 'fail, China, Changzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLxERuXPUWnpW4S66mV4cYHyvTDqMbEarwTyYsL8c4SAe:  * [/ip4/61.177.78.101/tcp/9981] dial tcp4 0.0.0.0:40089->61.177.78.101:9981: i/o timeout
  f010038: 'fail, China, Hangzhou + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQMDhsK57Vu57qPkJ3cg1sciGcQdtdZzr4ed1UyYPSYpu:  * [/ip4/170.33.12.166/tcp/39774] dial tcp4 0.0.0.0:40089->170.33.12.166:39774: i/o timeout
  f010048: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWErRVHN36TpgVcDrKt5d1wZm8j649cGk29zcYSmxus86u:  * [/ip4/124.78.146.207/tcp/65500] dial tcp4 0.0.0.0:40089->124.78.146.207:65500: i/o timeout
  f010056: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWExdbgcJnR1JYaThHyyS8eGSzM3Y2BSpTn1YsKF3MPz7b:  * [/ip4/8.209.82.79/tcp/14567] dial tcp4 0.0.0.0:40089->8.209.82.79:14567: i/o timeout
  f010202: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f010225: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBwpsvnPsPhoDLLbdkm3tVJaAkxYWzp43H9F5rfESaHun:  * [/ip4/8.209.107.150/tcp/12312] dial tcp4 0.0.0.0:40089->8.209.107.150:12312: i/o timeout
  f010247: 'fail, China, Yantai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLszEHE9KZT2ZBBhNSW4RheKixHT3Bk1GVdhBxwEYYDbS:  * [/ip4/122.14.201.169/tcp/10240] dial tcp4 0.0.0.0:40089->122.14.201.169:10240: i/o timeout
  f010399: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNaRz2GcsNETTGnZEp5zvJqUesc4Mq3kbrqkbizemRssT:  * [/ip4/183.2.154.156/tcp/36699] dial tcp4 0.0.0.0:40089->183.2.154.156:36699: i/o timeout
  f010400: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSPCJCC4kZKxze4Q8u6NWVPQb3wnXrDvbC42bbV1xjzMA:  * [/ip4/59.44.27.130/tcp/8787] dial tcp4 0.0.0.0:40089->59.44.27.130:8787: i/o timeout
  f010424: 'fail, Australia, Sydney', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGGVTP3jL5Gg5YPR7Q8j3RexRDgprF9EvrP4giafV956F:  * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:40089->43.241.189.214:39438: i/o timeout
  f010538: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHTRhvSg4viFHbzoHndBo4riNU5psWY37SxytqhA3cYd5:  * [/ip4/8.209.107.150/tcp/12320] dial tcp4 0.0.0.0:40089->8.209.107.150:12320: i/o timeout
  f010558: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f010616: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSWbS5Ba3SkWFdYyHPXKFZDb6kBPvQCzV7CyGNEo2iAXR:  * [/ip4/8.209.107.150/tcp/12313] dial tcp4 0.0.0.0:40089->8.209.107.150:12313: i/o timeout
  f014233: 'fail, China, Shanghai + USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDokWdGQazetL7NAPQZAxAuy225tvYhxQuckt61S8RnwZ:  * [/ip4/114.88.73.108/tcp/45455] dial tcp4 0.0.0.0:40089->114.88.73.108:45455: i/o timeout  * [/ip4/47.241.72.105/tcp/45455] dial tcp4 0.0.0.0:40089->47.241.72.105:45455: i/o timeout
  f014251: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQxfYwV563URu95cLTVf6ogdTMTFdwB5CQKFFHPatPfU4:  * [/ip4/58.220.66.66/tcp/46166] dial tcp4 0.0.0.0:40089->58.220.66.66:46166: i/o timeout
  f014311: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDxu2JXzsnxz2L9ZWRXNBypcpQcduWwqmSZfu5EawCDmZ:  * [/ip4/162.62.55.44/tcp/12309] dial tcp4 0.0.0.0:40089->162.62.55.44:12309: i/o timeout
  f014335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f014365: 'fail, Australia, Turramurra + Sydney', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWM7CmoE6ZYynn9b8cJZVDSkCV8Pb1soi5gArzZMkqcoLk:  * [/ip4/139.180.162.246/tcp/10999] dial tcp4 0.0.0.0:40089->139.180.162.246:10999: i/o timeout  * [/ip4/49.176.172.221/tcp/26201] dial tcp4 0.0.0.0:40089->49.176.172.221:26201: i/o timeout
  f014386: 'fail, China, Panzhihua', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK9S1GMd9SqrpLxLJqrp5ekWKCFnx11vsUj1eagFA4p4d:  * [/ip4/180.149.130.16/tcp/9845] dial tcp4 0.0.0.0:40089->180.149.130.16:9845: i/o timeout
  f014392: 'fail, USA + Russia, Khabarovsk + Japan, Heiwajima', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD38od1j4abLotnfpALNPZt3TdjmQ1HqSiQBe1qZpnrCc:  * [/ip4/172.247.228.122/tcp/9999] dial tcp4 0.0.0.0:40089->172.247.228.122:9999: i/o timeout  * [/ip4/66.42.38.110/tcp/9990] dial tcp4 0.0.0.0:40089->66.42.38.110:9990: i/o timeout  * [/ip4/92.223.72.130/tcp/9999] dial tcp4 0.0.0.0:40089->92.223.72.130:9999: i/o timeout
  f014395: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJyNmap2Z6WWb6xBqDwUpKeFkGHaBHDkMKhrkd6jj6FEY:  * [/ip4/125.93.73.102/tcp/51105] dial tcp4 125.93.73.102:51105: connect: connection refused
  f014409: 'fail, USA, Monroe, Meatball Part III', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDd6NTSPgrTqKtSXYZrjNpvW68UjLZ8C8SJuGSAK2eyp6:  * [/ip4/66.61.208.206/tcp/41372] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWDd6NTSPgrTqKtSXYZrjNpvW68UjLZ8C8SJuGSAK2eyp6, but remote key matches 12D3KooWAPvcD9f7fDLT1Etb3CfXY1awzb4tzgiZNNN5xBG75Fz3
  f014415: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNM14sFqpmsSAW752NdjvpCxcEGhpTtFNntEW9zjvboT3:  * [/ip4/13.248.165.152/tcp/33612] failed to negotiate security protocol: EOF
  f014487: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPU3eNG2UMTksa3n5YbJGKTNv6R2YstxeTfKSWQduwwpx:  * [/ip4/114.88.73.108/tcp/35353] dial tcp4 0.0.0.0:44703->114.88.73.108:35353: i/o timeout  * [/ip4/47.241.59.58/tcp/45455] dial tcp4 0.0.0.0:44703->47.241.59.58:45455: i/o timeout
  f014522: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKnwHakHiXkurxFTFVi4DTDkGftHzP6sh1khwHPPwcPjo:  * [/ip4/81.68.170.164/tcp/5474] dial tcp4 0.0.0.0:40089->81.68.170.164:5474: i/o timeout
  f014686: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f014699: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f014706: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg:  * [/ip4/8.209.107.150/tcp/12308] dial tcp4 0.0.0.0:40089->8.209.107.150:12308: i/o timeout
  f014778: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLrw43ktH6n1YZ7qqWJw4ijBBD7Zc3iy6AcMktnxM7gVY:  * [/ip4/162.62.55.44/tcp/12310] dial tcp4 0.0.0.0:40089->162.62.55.44:12310: i/o timeout
  f014804: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNaLA26L7fd77idyimauWSobjBkeRA3P554yFcF3Ep24N:  * [/ip4/8.209.107.150/tcp/12314] dial tcp4 0.0.0.0:40089->8.209.107.150:12314: i/o timeout
  f015685: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSHahEVqnoWuoSwL3ZfJnRRTBx9NDc1956W4TBoLbu1zW:  * [/ip4/222.64.141.185/tcp/40321] dial tcp4 0.0.0.0:40089->222.64.141.185:40321: i/o timeout
  f015731: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQvZRpw6L6ErN6WeVYeAPQLvbtAHrXjHQoogiRFVEkEhw:  * [/ip4/8.209.107.150/tcp/12329] dial tcp4 0.0.0.0:40089->8.209.107.150:12329: i/o timeout
  f015734: 'fail, China, Qingdao', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f015767: 'fail, Russia, Khabarovsk + Japan, Khabarovsk + USA', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f015848: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHcMzWrWwRwKTekVWyEYipSgmYzRSzkLuRxdLJPXMY6DT:  * [/ip4/8.209.107.150/tcp/12321] dial tcp4 0.0.0.0:40089->8.209.107.150:12321: i/o timeout
  f015919: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAp28a2tL2vCae75zQXQiG5Tnf5ydgwVLNnztZ4sMgfst:  * [/ip4/8.209.107.150/tcp/12316] dial tcp4 0.0.0.0:40089->8.209.107.150:12316: i/o timeout
  f015922: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDaa2ZnPvxDGHPSr6R1oHSfDxJjBLc6mecMCPNcSzhgLz:  * [/ip4/162.62.55.44/tcp/12317] dial tcp4 0.0.0.0:40089->162.62.55.44:12317: i/o timeout
  f015925: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMPTWy68Cpoy7YzGrWE5oJhDmZQ7wqzfaocv8w5eNsLit:  * [/ip4/8.209.107.150/tcp/12318] dial tcp4 0.0.0.0:40089->8.209.107.150:12318: i/o timeout
  f015926: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFGsaBTVoaXyJLGMtdghwdUt6eRgLzT8Y7MYTpyU2U3V6:  * [/ip4/162.62.55.44/tcp/12319] dial tcp4 0.0.0.0:40089->162.62.55.44:12319: i/o timeout
  f015927: 'fail, USA, East Islip, CDImine', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQGPq3PGYwecDrdb8Xv8N8KXqsVs4VP7EXBh671nttjpT:  * [/ip4/69.126.46.133/tcp/40947] dial tcp4 0.0.0.0:40089->69.126.46.133:40947: i/o timeout
  f016563: 'fail, China, Deyang + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEMbiAa9CFQBe8th6TMMEXyK5UpM7ag18puE1aktkriq1:  * [/ip4/125.64.78.27/tcp/8001] dial tcp4 0.0.0.0:40089->125.64.78.27:8001: i/o timeout  * [/ip4/192.168.109.2/tcp/8001] dial tcp4 0.0.0.0:40089->192.168.109.2:8001: i/o timeout  * [/ip4/161.117.186.53/tcp/8001] dial tcp4 0.0.0.0:40089->161.117.186.53:8001: i/o timeout  * [/ip4/192.168.109.1/tcp/8001] dial tcp4 0.0.0.0:40089->192.168.109.1:8001: i/o timeout
  f017193: "fail, China, Xi'an + Singapore", // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f018538: 'fail, China, Huzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f019074: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLM1TeB6wiFXdKgHPRh5W6wve8NXC13mEk3seDqVttKqg:  * [/ip4/192.168.2.55/tcp/3000] dial tcp4 0.0.0.0:40089->192.168.2.55:3000: i/o timeout
  f019099: 'fail, China, Hong Kong + Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPXNsG3BG7yGEBQVncw6Du279ESDyYHBX3v3kN23zSKsG:  * [/ip4/45.158.182.10/tcp/12345] dial tcp4 0.0.0.0:40089->45.158.182.10:12345: i/o timeout
  f019100: 'fail, Romania, Cluj-Napoca, noisyfan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJFAe3K8ENQMmtZzSYsRoCNfvf8N3Ky15EVhCSoXjMhnP:  * [/ip4/79.119.122.118/tcp/55555] dial tcp4 0.0.0.0:40089->79.119.122.118:55555: i/o timeout
  f019240: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGfchVNtPipXgLz2Tb2zuF6ZvcZCkkgfE8pdgjjriPx9b:  * [/ip4/36.112.26.4/tcp/3458] dial tcp4 0.0.0.0:40089->36.112.26.4:3458: i/o timeout
  f019354: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLYorbezhim25zw5oAaPH6hpzKajEg4qiD7QcEFTNa1vJ:  * [/ip4/128.1.78.98/tcp/31437] dial tcp4 0.0.0.0:44703->128.1.78.98:31437: i/o timeout
  f019422: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f019638: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPPZz5WJkMn9GG87FYy6WwNE2LseU7KDo5DEA9H4ReWPP:  * [/ip4/1.183.72.210/tcp/30005] dial tcp4 0.0.0.0:40089->1.183.72.210:30005: i/o timeout
  f019806: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f020315: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMtQk6fPXsKjVok1psu8hGjuktQuFVbbqyndFTWWx6u3J:  * [/ip4/10.2.1.3/tcp/56432] dial tcp4 0.0.0.0:44703->10.2.1.3:56432: i/o timeout  * [/ip4/103.104.170.72/tcp/56432] dial tcp4 0.0.0.0:44703->103.104.170.72:56432: i/o timeout
  f020330: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBXPgkgXp2m35w78Bk43xTDVot5y47ewmVimnMhVkdYtx:  * [/ip4/193.193.193.14/tcp/14356] dial tcp4 0.0.0.0:40089->193.193.193.14:14356: i/o timeout
  f020331: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHPsvkyYG11ibvAQ3kGmoPdPBCfxvjXjZpa9NcVVSySCj:  * [/ip4/39.101.70.154/tcp/14567] dial tcp4 0.0.0.0:40089->39.101.70.154:14567: i/o timeout
  f020436: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRgBCjVvmsgJuE1VzRZ3EgSQoQtasZKAgiQ7zQN2J49N5:  * [/ip4/123.115.219.119/tcp/24002] dial tcp4 0.0.0.0:40089->123.115.219.119:24002: i/o timeout
  f020452: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAojcwZ3xQ8awhrXP4qhi7hH2Nv981JkzQyTsU83UMLkG:  * [/ip4/170.33.12.186/tcp/17012] dial tcp4 0.0.0.0:40089->170.33.12.186:17012: i/o timeout
  f020522: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLwpRZv1RnvGTzE67HkGLZc9HPAMvkJSM9eXBrF7FsfH1:  * [/ip4/8.211.49.16/tcp/14567] dial tcp4 0.0.0.0:40089->8.211.49.16:14567: i/o timeout
  f020604: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG2gh3aMiShLywLbkwB3E64KoMTuAuJvq463bGvmff51A:  * [/ip4/195.82.192.33/tcp/3321] dial tcp4 0.0.0.0:40089->195.82.192.33:3321: i/o timeout
  f020618: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGHFUS8oi1qbinPV4gnuNmU8EatZkYSya7HQahTd95XqU:  * [/ip4/170.33.12.186/tcp/17011] dial tcp4 0.0.0.0:40089->170.33.12.186:17011: i/o timeout
  f020742: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD3yEpkcFCuGh9mEwtyNY8HUxjDDWS7pkC4iGzpygdbDc:  * [/ip4/175.24.25.61/tcp/53456] dial tcp4 0.0.0.0:40089->175.24.25.61:53456: i/o timeout
  f020940: 'fail, USA, Bellevue', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f020957: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021461: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFi6doAcsSUCDhU9EFjSJD6t6up6ko35RD3ZtTdG6rjfC:  * [/ip4/170.33.12.186/tcp/17361] dial tcp4 0.0.0.0:40089->170.33.12.186:17361: i/o timeout
  f021525: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRPLVYuydRMtVtDSTEi1gpwewniZbpXZeDecSTtstfvAA:  * [/ip4/121.201.41.87/tcp/14567] dial tcp4 0.0.0.0:40089->121.201.41.87:14567: i/o timeout
  f021532: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFB42PdKvKzH2bLS1tXhBjBEMbL1Arcmr8DeHE7TV2wqN:  * [/ip4/121.46.237.2/tcp/23456] dial tcp4 0.0.0.0:40089->121.46.237.2:23456: i/o timeout
  f021536: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021547: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJhmH6Zj4SuNdNrXAThjLcoM1NzDTRuys5rr85ukfoRd7:  * [/ip4/170.33.12.186/tcp/17329] dial tcp4 0.0.0.0:40089->170.33.12.186:17329: i/o timeout
  f021695: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021704: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021710: 'fail, China, Shijiazhuang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021870: 'fail, China, Jieyang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021961: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f022030: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022038: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022072: 'fail, China, Jieyang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022111: 'fail, China, Quanzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHjd2Mn9oXSg6Anuw5LtXyEtHoqsMSeK8gH495zukLjiQ:  * [/ip4/112.47.13.98/tcp/8081] dial tcp4 0.0.0.0:40089->112.47.13.98:8081: i/o timeout
  f022125: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFqVmmKFirUS75Y28bK4kGTFEydBgo2esUGEhK8oQznQT:  * [/ip4/172.168.0.220/tcp/33457] dial tcp4 0.0.0.0:44703->172.168.0.220:33457: i/o timeout
  f022227: 'fail, China, Jiangsu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFb6Kyw9uZHyB5cN9LSr7VUajpbrE3XJoL2zDdVi6cA2x:  * [/ip4/112.30.158.226/tcp/10240] dial tcp4 0.0.0.0:40089->112.30.158.226:10240: i/o timeout
  f022336: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022338: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022361: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022373: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022374: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022566: 'fail, China, Nanchong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQqBXoRpNnKmNvGst4qvX8n8Hfo1TUg4LATrrciWV2S3i:  * [/ip4/221.10.143.25/tcp/32005] dial tcp4 221.10.143.25:32005: connect: connection refused
  f022687: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDMP23CasGQtJLXWXpNcqBy6ENTuzZ4jsBvyRYkgNmJBE:  * [/ip4/182.131.4.194/tcp/10080] dial tcp4 0.0.0.0:40089->182.131.4.194:10080: i/o timeout
  f022804: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022820: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPkML61uXkPFbnaSretqsS8qYmKkrfeEmnhGgfrfQ8UDY:  * [/ip4/45.251.104.73/tcp/6123] dial tcp4 0.0.0.0:40089->45.251.104.73:6123: i/o timeout
  f022832: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEKNh29iao27XzC3rDz3rk1L4g1SAGyYUxcW1jmbbvEjc:  * [/ip4/0.0.0.0/tcp/42545] dial tcp4 0.0.0.0:42545: connect: connection refused  * [/ip4/101.36.64.200/tcp/42545] dial tcp4 0.0.0.0:40089->101.36.64.200:42545: i/o timeout
  f022922: 'fail, China, Shenzhen, CAAP-MEG', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023001: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNUTa7nwh7wH8vnHb5cYxHQaYf99N85t18fzRUBRFhgux:  * [/ip4/192.168.1.236/tcp/34617] dial tcp4 0.0.0.0:40089->192.168.1.236:34617: i/o timeout
  f023152: 'fail, China, Shandong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWN1MJM2v2ag8LVDKKz5DbGJuneePgh47Lq8rh1Gec3PWJ:  * [/ip4/106.74.7.4/tcp/32759] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWN1MJM2v2ag8LVDKKz5DbGJuneePgh47Lq8rh1Gec3PWJ, but remote key matches 12D3KooWBZ26N9VbVLBfiutv3uADBSFjr3FM1RbNXDMz4uW37nLN
  f023198: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f023200: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKV6h5S72ZzJvSVvUqoC1Q6i1eKKdYJEaKss2mbDNCnxi:  * [/ip4/175.24.25.61/tcp/13457] dial tcp4 0.0.0.0:40089->175.24.25.61:13457: i/o timeout
  f023205: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSjjE2kccKuZd7nZ2wrZ82rCg9zVMp35vCgZG86H6Gvm7:  * [/ip4/193.194.160.12/tcp/2234] dial tcp4 0.0.0.0:40089->193.194.160.12:2234: i/o timeout
  f023499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023561: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPs912rgbTFiN7KBzjREuDXGqgG4CMDDbei1HBJ3qgvwg:  * [/ip4/127.0.0.1/tcp/40573] dial tcp4 127.0.0.1:40573: connect: connection refused  * [/ip4/103.44.247.32/tcp/40573] dial tcp4 0.0.0.0:40089->103.44.247.32:40573: i/o timeout
  f023626: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023627: 'fail, China, Zhongwei', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023651: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023843: 'fail, China, Zhangjiakou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023882: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023984: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMvACeFSqXarKUTKFGwmZ5HheSgGssRV6hTafxKg1ZEEP:  * [/ip4/61.164.212.154/tcp/28013] dial tcp4 61.164.212.154:28013: connect: connection refused
  f024066: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMjX9ZBRijeCWy8vVJhkar73WYmed1Sa137NZ3W56aHsc:  * [/ip4/182.131.4.197/tcp/10080] dial tcp4 0.0.0.0:40089->182.131.4.197:10080: i/o timeout
  f024089: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWL9BpZhuAK5XLcTozTvCmwnCVL7BL4AisXBJgjfDBovpc:  * [/ip4/10.11.4.210/tcp/1234] dial tcp4 0.0.0.0:40089->10.11.4.210:1234: i/o timeout
  f024137: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJLMF5W4wheCZMaVuBe57eLV93Wx9azEJhv1mZ1BWk6Js:  * [/ip4/195.146.128.172/tcp/11223] dial tcp4 0.0.0.0:40089->195.146.128.172:11223: i/o timeout
  f024156: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f024182: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQFqPz3vvYGGxB259qZfg3qzoKEnafG8DbfMKUHEUQ26z:  * [/ip4/14.136.246.136/tcp/46717] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQFqPz3vvYGGxB259qZfg3qzoKEnafG8DbfMKUHEUQ26z, but remote key matches 12D3KooWHuQtiCKJykJscPMrNiXaguBWKuhBfKDfGP6ieR6SgwdF
  f024483: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024511: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMgkmvx3KwMPDLEw8QrSZbwhy7umbYpkhNGAg7wLgNKdM:  * [/ip4/103.44.247.137/tcp/51105] dial tcp4 0.0.0.0:40089->103.44.247.137:51105: i/o timeout
  f024563: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024802: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024894: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024895: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024972: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f025002: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSK67f2i4BYCP4xjUWxhonw38WP7invh47VoUbbXT7zgR:  * [/ip4/202.0.9.112/tcp/31354] dial tcp4 0.0.0.0:40089->202.0.9.112:31354: i/o timeout
  f025005: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f025017: 'fail, China, Hefei, 一三科技-913', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBZeFG1c5zNwCCVnCa6g5TyrUQu5f9oLTYsZyvSigBEXu:  * [/ip4/175.6.250.70/tcp/51105] dial tcp4 0.0.0.0:40089->175.6.250.70:51105: i/o timeout
  f025019: 'fail, China, Taiwan, Hsinchu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPcST189CRdZ2BLrE5NhFz2YQwcfCWdabj12FWwVNBjYj:  * [/ip4/140.113.194.250/tcp/24002] dial tcp4 0.0.0.0:40089->140.113.194.250:24002: i/o timeout
  f025044: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f029416: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWM5kp2XVhVakYkZEbNo86dXjxfQWDVUwVDMRBU8WhMyTB:  * [/ip4/0.0.0.0/tcp/1024] dial tcp4 0.0.0.0:1024: connect: connection refused
  f029490: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f029585: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f029649: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f029665: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHBddu2erdfQ6NNGgNfbzZyYaKYAm46kYPQQ1triYHDgA:  * [/ip4/124.95.135.132/tcp/7000] dial tcp4 124.95.135.132:7000: connect: connection refused
  f030125: 'fail, China, Nantong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWP31DDGemmwGuNaKVzEX1nqNWesxWKADFBpRqiwKV7tmT:  * [/ip4/58.221.143.38/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWP31DDGemmwGuNaKVzEX1nqNWesxWKADFBpRqiwKV7tmT, but remote key matches 12D3KooWEJkLQZ4H5awhDNBCAiyHwuD1TgtL6fH9HnDxCV6vDBDv
  f030203: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030249: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030272: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030331: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030347: 'fail, China, Zhejiang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030384: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNfUzbXzVXqLV9pEubVenJoQHkWtkrR3aSvwyoXc7Kpys:  * [/ip4/103.40.249.175/tcp/12350] dial tcp4 0.0.0.0:40089->103.40.249.175:12350: i/o timeout
  f030408: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030509: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030510: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030511: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030649: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f032833: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f032850: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f032913: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033025: 'fail, Korea, Daegu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLCrE5QLwGxvodoDNoEjF5BxJV6NCeFuipXbjGYawaHfA:  * [/ip4/59.23.202.120/tcp/56293] dial tcp4 59.23.202.120:56293: connect: connection refused
  f033130: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033384: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033399: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033456: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033462: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGVgk3YArcNyfEoGTtBnUd376NVzUQ4wePvv4ko724P7X:  * [/ip4/192.168.60.51/tcp/39780] dial tcp4 0.0.0.0:40089->192.168.60.51:39780: i/o timeout
  f033463: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033475: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033501: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033517: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034350: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034544: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRXVLz2WJA2xkJ5SYzGC1JSnenKMw6Ji3AcArgbigrsPQ:  * [/ip4/192.162.197.113/tcp/3235] dial tcp4 0.0.0.0:40089->192.162.197.113:3235: i/o timeout
  f034545: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGGzwFRoHQ2PkctVAB2mNV67Yg4bJ1G84AQTNpN9y311b:  * [/ip4/83.56.103.132/tcp/13235] dial tcp4 0.0.0.0:40089->83.56.103.132:13235: i/o timeout
  f034548: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ7MPMEqCUUJMo2pszvQnR7prBnujeQuKrvaSyeeqJkCb:  * [/ip4/201.117.103.212/tcp/11235] dial tcp4 0.0.0.0:40089->201.117.103.212:11235: i/o timeout
  f034566: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034567: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034581: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034592: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK8NjcyE6yfsRYngnMcAXf13CPpS1Kh7nLDMTUd2yRvxW:  * [/ip4/119.147.213.217/tcp/45137] dial tcp4 0.0.0.0:40089->119.147.213.217:45137: i/o timeout
  f034658: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034707: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034710: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034777: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f035160: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f035161: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f035364: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f039992: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f040218: 'fail, China, Wuxi', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDGtfj4r9yeM9tebHySKRddd43SFjNJ8CQc7LXaCxADoP:  * [/ip4/58.215.14.146/tcp/30000] dial tcp4 0.0.0.0:40089->58.215.14.146:30000: i/o timeout
  f040665: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f042635: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f042855: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLQz47TB6qiLQLZHBBnPqF53eMJHdeYhPN92sby21YhkZ:  * [/ip6/::1/tcp/34271] dial tcp6 [::1]:34271: connect: connection refused  * [/ip4/127.0.0.1/tcp/36659] dial tcp4 127.0.0.1:36659: connect: connection refused  * [/ip4/61.174.254.188/tcp/36659] dial tcp4 61.174.254.188:36659: connect: connection refused  * [/ip4/172.29.128.10/tcp/36659] dial tcp4 0.0.0.0:40089->172.29.128.10:36659: i/o timeout
  f042896: 'fail, China, Deyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWByGP4vQtFmERj16ttS52ifbvRzdiDUz8uyB2WxwXVSbU:  * [/ip4/125.64.78.27/tcp/5003] dial tcp4 0.0.0.0:40089->125.64.78.27:5003: i/o timeout  * [/ip4/192.168.109.5/tcp/5003] dial tcp4 0.0.0.0:40089->192.168.109.5:5003: i/o timeout
  f043929: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRA6mCa3GAoAMnztMPrBHQSMgLd2pcq7XdCFXWgVyAE7N:  * [/ip4/120.232.96.38/tcp/24001] dial tcp4 0.0.0.0:40089->120.232.96.38:24001: i/o timeout
  f044315: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f045505: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGfhqYGvSHHhyQAdPgfHKfVYKHUt2cWycTeEMt1GEq1os:  * [/ip4/1.183.72.226/tcp/12700] dial tcp4 0.0.0.0:40089->1.183.72.226:12700: i/o timeout
  f045743: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f045756: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f046248: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f047666: 'fail, China, Suihua', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJTcEVBF8u3aw7U7uHvwnEQsF3BY9fpEaPrYCYKPrsVbp:  * [/ip4/112.101.133.114/tcp/5678] dial tcp4 112.101.133.114:5678: connect: connection refused
  f048135: 'fail, China, Chongqing, password interstellar', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPqUnapwijnWynzQcgNrsNff8WoxsshFttPce4bvyt68V:  * [/ip4/113.204.193.50/tcp/27125] dial tcp4 0.0.0.0:40089->113.204.193.50:27125: i/o timeout
  f048975: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f048986: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f049911: 'fail, China, Yunfu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f053088: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAiTKuREhzSas7aC6LkDqsg3A8S9tgp6wD9ii63f8tg12:  * [/ip6/240e:388:e13:5900:2ef0:5dff:fe40:5e31/tcp/37655] dial tcp6 [240e:388:e13:5900:2ef0:5dff:fe40:5e31]:37655: connect: network is unreachable  * [/ip4/127.0.0.1/tcp/41833] dial tcp4 127.0.0.1:41833: connect: connection refused  * [/ip6/::1/tcp/37655] dial tcp6 [::1]:37655: connect: connection refused  * [/ip4/192.168.1.70/tcp/41833] dial tcp4 0.0.0.0:40089->192.168.1.70:41833: i/o timeout  * [/ip4/58.33.161.23/tcp/5612] dial tcp4 0.0.0.0:40089->58.33.161.23:5612: i/o timeout
  f053141: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f053173: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f053446: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054120: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054267: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054412: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054414: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f054415: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f054417: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f054418: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f054420: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f054422: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054464: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCdBMkc7P346VhjbYz823sUEGeQsqhCs6e1zTHC6M9WXZ:  * [/ip4/0.0.0.0/tcp/5472] dial tcp4 0.0.0.0:5472: connect: connection refused
  f054526: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054666: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGCMWriKdL1S7spEtCAthnCcGvBEM6zLWTFpGxgNdyERf:  * [/ip4/36.158.255.7/tcp/1024] dial tcp4 0.0.0.0:40089->36.158.255.7:1024: i/o timeout
  f055102: 'fail, Vietman, Ho Chi Minh City + China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEzGYZMVXyirJAqybkGPdZFNYBYjtMWyJbWjw5enUo2fN:  * [/ip4/119.28.141.16/tcp/2820] dial tcp4 0.0.0.0:40089->119.28.141.16:2820: i/o timeout  * [/ip4/193.112.116.169/tcp/2820] dial tcp4 0.0.0.0:40089->193.112.116.169:2820: i/o timeout
  f055132: 'fail, Vietman, Ho Chi Minh City + China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLFUPW2eP4bJhTzDwd5mpepUWUX6Y5QH9NTjVYLVnYSAo:  * [/ip4/193.112.116.169/tcp/2910] dial tcp4 0.0.0.0:40089->193.112.116.169:2910: i/o timeout  * [/ip4/119.28.141.16/tcp/2910] dial tcp4 0.0.0.0:40089->119.28.141.16:2910: i/o timeout
  f055335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f055446: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f056227: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f056406: 'fail, China, Taizhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFjfWgPNNiuxHwratpW5WU8mkF9zb3Q4co4TXB7mRuwdN:  * [/ip4/221.130.79.154/tcp/1347] dial tcp4 0.0.0.0:40089->221.130.79.154:1347: i/o timeout
  f057070: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKBNGqopBvTEmD15SwX6JapLJ34cv9cCEoWPtUsxQpu4Z:  * [/ip4/117.71.104.68/tcp/10240] dial tcp4 0.0.0.0:40089->117.71.104.68:10240: i/o timeout
  f057127: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvcvRJQHTrxjwH1NqPJnd5HnMQp1mWWzp9LHwBULp7pb:  * [/ip4/58.211.213.210/tcp/20108] dial tcp4 58.211.213.210:20108: connect: connection refused
  f057618: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f057683: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f058349: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f058374: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f059788: 'fail, China, Zhanjiang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEhZ3xDvecQ7K14ByYanCewzQqufzX6P2xFaMQu64x3C8:  * [/ip4/183.2.149.76/tcp/33669] dial tcp4 0.0.0.0:40089->183.2.149.76:33669: i/o timeout
  f059813: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060114: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060693: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060754: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060805: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f060975: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061051: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061170: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061174: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061407: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061503: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f061959: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA5phDUUZUiXuW5YVF7vVLuYSTsx5Shdp4sH5Ftm2pZQu:  * [/ip4/172.18.113.213/tcp/10241] dial tcp4 0.0.0.0:40089->172.18.113.213:10241: i/o timeout
  f062245: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062475: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062619: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062770: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEL13gqLAo2hDiax2PeN2pT3aXVMNpzh3ToxdVFvpVMeV:  * [/ip4/220.176.125.166/tcp/23450] dial tcp4 0.0.0.0:40089->220.176.125.166:23450: i/o timeout
  f062811: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9vBPr3FEUtNTKdzMZTB3aYsjK2o9bpqAaFfVQDViz8ii:  * [/ip4/220.176.125.167/tcp/23450] dial tcp4 0.0.0.0:40089->220.176.125.167:23450: i/o timeout
  f062931: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBcj62i1JiSpJQG3rq8vMs5HrRfKgNP3Xh1hp893k5qYt:  * [/ip4/95.180.132.5/tcp/22124] dial tcp4 95.180.132.5:22124: connect: no route to host
  f062982: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFikUmntbNAjbEbWk7jXHSaA3aQZ6HBG8imPZzQkFzYZk:  * [/ip4/220.176.125.165/tcp/23450] dial tcp4 0.0.0.0:40089->220.176.125.165:23450: i/o timeout
  f063996: 'fail, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f064855: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f064908: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065113: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065141: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065266: 'fail, China, Hefei', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065391: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065578: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065610: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065670: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065686: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065881: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065941: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066210: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066302: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066476: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066563: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066781: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f066790: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f067170: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f067375: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f067598: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f068096: 'fail, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLMSQyXno4UrzArsMy22YhHRAvmzhhZKGbgAUULZCx3tB:  * [/ip4/222.213.23.200/tcp/38999] dial tcp4 0.0.0.0:40089->222.213.23.200:38999: i/o timeout
  f068556: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f068560: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNABE3yaZenjaX91wM18UeiwjLMy96jFRs9tP7cYHTFy4:  * [/ip4/172.16.100.111/tcp/37929] dial tcp4 0.0.0.0:40089->172.16.100.111:37929: i/o timeout
  f069391: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRCdFYT9C9jwC6DHGha6wEGMhddnTaVzhNbFPK8oBNGDG:  * [/ip4/192.168.1.10/tcp/32759] dial tcp4 0.0.0.0:40089->192.168.1.10:32759: i/o timeout
  f069448: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f069915: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070044: 'fail, China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQU9u9dyQq369sqKHyscGqEbG3TKixJTmgSq2Ri4a88nT:  * [/ip4/47.57.185.52/tcp/12600] dial tcp4 0.0.0.0:40089->47.57.185.52:12600: i/o timeout
  f070045: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070730: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070802: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070803: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f071287: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f071664: 'fail, China, Shangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQe8HRVWhaTBPvhXnSkz7C58jx5ehof8moeL2hFQ4x2KD:  * [/ip4/10.133.8.210/tcp/32759] dial tcp4 0.0.0.0:40089->10.133.8.210:32759: i/o timeout
  f073196: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073448: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073525: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073844: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073888: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f077761: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f078465: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f078522: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f078621: 'fail, Korea, Uiwang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHo2ffY2a61PQtWTrb1U9Ku8KDwncRk3e1uCVpA3qNndT:  * [/ip4/211.170.59.241/tcp/24001] dial tcp4 0.0.0.0:40089->211.170.59.241:24001: i/o timeout
  f078899: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079007: 'fail, China, Jinan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9rii8KJUHwHyNVg1xEM16u7V7rhbgdruT2AFYsjFgb4n:  * [/ip4/112.232.106.138/tcp/3389] dial tcp4 0.0.0.0:40089->112.232.106.138:3389: i/o timeout
  f079092: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079285: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLV22X7z7KdMfiX31Xie9xHsi6UB8wAZ2gLf2JyQ4PuCa:  * [/ip4/172.22.20.109/tcp/10241] dial tcp4 0.0.0.0:40089->172.22.20.109:10241: i/o timeout
  f079425: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079719: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079815: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f080444: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080468: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080605: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080608: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080628: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081078: 'fail, Korea, Busan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMW8ZvKgprKTTmt8cuoC5YYZeJtCn6iBuHWLg6J8rGUts:  * [/ip4/220.119.144.84/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMW8ZvKgprKTTmt8cuoC5YYZeJtCn6iBuHWLg6J8rGUts, but remote key matches 12D3KooWLe7nwrhYUwgTjy7B92xgeuVZFVzgXHuM4wGzmcYg6asG
  f081969: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081977: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081985: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081988: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081989: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081995: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082000: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082001: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082356: 'fail, China, Jiaxing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082617: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQoXM8qWNsKEDyb67AmKZCnASvQspN6BLsTuRbBzY999n:  * [/ip4/45.119.63.131/tcp/51105] dial tcp4 0.0.0.0:40089->45.119.63.131:51105: i/o timeout
  f082730: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082958: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDravhMyWjyuK4TjaVaUvubwhpameXwWCuoixczAwFhsV:  * [/ip4/0.0.0.0/tcp/42547] dial tcp4 0.0.0.0:42547: connect: connection refused
  f083065: 'fail, China, Taizhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNnvr2St8sipQ8qJfZh5mqBVmrp8pwh1xBTiaMLe4P2nT:  * [/ip4/60.191.150.250/tcp/56780] dial tcp4 0.0.0.0:40089->60.191.150.250:56780: i/o timeout
  f083419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f083474: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f083983: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f084135: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f084155: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f084419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f084907: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f085435: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f085437: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f085710: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f085735: "fail, China, Ya'an", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086028: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086204: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086222: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086240: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086366: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086381: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086439: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086442: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086572: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f086988: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087096: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087256: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087530: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBbkNrd21dYUWppwbyzCb8uWZQJvsgMgARyDoCxvoRB3t:  * [/ip4/183.62.113.67/tcp/31688] dial tcp4 0.0.0.0:40089->183.62.113.67:31688: i/o timeout
  f087868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087871: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087879: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087888: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087890: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087899: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087965: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGbhbr32oPyCfLTgv1GoQmwx1V7u5AdquFNPjjm85iHPe:  * [/ip4/58.211.213.210/tcp/2251] dial tcp4 58.211.213.210:2251: connect: connection refused
  f087999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088002: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088125: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQsq4hmpqQAfNPxLMJQfmiUA2Q1d2yqpfzVZu88GauXzT:  * [/ip4/172.22.22.101/tcp/10241] dial tcp4 0.0.0.0:40089->172.22.22.101:10241: i/o timeout
  f088171: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088290: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088400: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQksh2T1XcnLj2Fjsrp8DafeLXA5DYTE79EdZunSSdWcb:  * [/ip4/172.22.22.102/tcp/10241] dial tcp4 0.0.0.0:40089->172.22.22.102:10241: i/o timeout
  f089167: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089173: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGBUUwC19e5cg914WheUfZmWAjcLAR8yW56vU4Mg5LgFp:  * [/ip4/172.19.108.155/tcp/10241] dial tcp4 0.0.0.0:40089->172.19.108.155:10241: i/o timeout
  f089200: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089228: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRaFywA6bQDMz7x1o5LpkVmjrEBpM8BWGHmrLF1Kvdfbm:  * [/ip4/8.209.65.6/tcp/30126] dial tcp4 0.0.0.0:40089->8.209.65.6:30126: i/o timeout
  f089358: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLHVswzdG7ikc8WFqn6L2wVAfJQWFqKssWk3BGAHEWgbT:  * [/ip4/172.22.7.106/tcp/10241] dial tcp4 0.0.0.0:40089->172.22.7.106:10241: i/o timeout
  f089551: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJCsDBR8rrN7Mdrpxrxpo58c2ymFGMCgWpyeM9suWpj8R:  * [/ip4/121.40.135.72/tcp/26892] dial tcp4 0.0.0.0:40089->121.40.135.72:26892: i/o timeout
  f089767: 'fail, USA, Bowie', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJfJoyXzXHrB2XFZFgxzPrxddyVF3TYHwS9HYcoecruoB:  * [/ip4/129.168.0.1/tcp/912] dial tcp4 0.0.0.0:40089->129.168.0.1:912: i/o timeout
  f089819: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089910: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089920: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090481: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090484: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090492: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090889: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090893: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMh6qvtA63P9fB2bQKuR68vDHm8TD3hj85zqKBNKUKmjN:  * [/ip4/6.143.143.121/tcp/912] dial tcp4 0.0.0.0:44703->6.143.143.121:912: i/o timeout  * [/ip4/76.223.53.59/tcp/33912] dial tcp4 0.0.0.0:44703->76.223.53.59:33912: i/o timeout
  f090900: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091143: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091243: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091395: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091798: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091913: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091958: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091959: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091996: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f091999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f092066: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f092157: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f092228: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f092887: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093115: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093144: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093658: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093686: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093701: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f093907: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094003: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094128: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094625: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094764: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094765: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDidvy8zSZgUZabmKFXzy42g2LV7en7QYG79D3TLgAtcV:  * [/ip4/218.68.85.213/tcp/12350] dial tcp4 218.68.85.213:12350: connect: connection refused
  f094847: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f094901: 'fail, Korea, Bucheon-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG7fkPkNeeJrUkDA5MPotNMKtSTzbMFtm727MAXS4BES3:  * [/ip4/119.197.20.51/tcp/24001] dial tcp4 0.0.0.0:40089->119.197.20.51:24001: i/o timeout
  f095334: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f095382: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFpivFBnTWwf621CrbYU5YhJPJWd66wnLWCnvArSFqbYm:  * [/ip4/125.93.73.102/tcp/2345] dial tcp4 125.93.73.102:2345: connect: connection refused
  f095970: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f095997: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f095998: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096064: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096072: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096077: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096087: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096133: 'fail, China, Changsha + Dazhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMTTEH1tp88nhvYAvRipkv2Do5uN3Zwf6sYZ5PBEivKQu:  * [/ip4/175.6.68.154/tcp/14913] dial tcp4 0.0.0.0:40089->175.6.68.154:14913: i/o timeout  * [/ip4/175.6.66.78/tcp/14913] dial tcp4 0.0.0.0:40089->175.6.66.78:14913: i/o timeout
  f096172: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096173: 'fail, Korea, Gangnam-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG4jchbdLENPWWnb2rLPt3HosTodvebJ3eni4qAL7bqvb:  * [/ip4/61.78.81.239/tcp/11111] dial tcp4 0.0.0.0:40089->61.78.81.239:11111: i/o timeout  * [/ip4/61.78.81.239/tcp/22222] dial tcp4 0.0.0.0:40089->61.78.81.239:22222: i/o timeout  * [/ip4/61.78.81.239/tcp/33333] dial tcp4 0.0.0.0:40089->61.78.81.239:33333: i/o timeout  * [/ip4/61.78.81.239/tcp/44444] dial tcp4 0.0.0.0:40089->61.78.81.239:44444: i/o timeout  * [/ip4/61.78.81.239/tcp/55555] dial tcp4 0.0.0.0:40089->61.78.81.239:55555: i/o timeout  * [/ip4/61.78.81.239/tcp/8800] dial tcp4 0.0.0.0:40089->61.78.81.239:8800: i/o timeout  * [/ip4/61.78.81.239/tcp/12345] dial tcp4 0.0.0.0:40089->61.78.81.239:12345: i/o timeout  * [/ip4/61.78.81.239/tcp/23456] dial tcp4 0.0.0.0:40089->61.78.81.239:23456: i/o timeout
  f096824: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096920: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097126: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097182: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDZcnHgYqSaxf5g6EeZ1wCVLGCfHtM7ja3iqH4E1NQKja:  * [/ip4/182.131.4.195/tcp/32759] dial tcp4 182.131.4.195:32759: connect: connection refused
  f097219: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSXN3igGAjvLVVDF4V2RtyW92FWwiK9mXUVkLN8qEjWhF:  * [/ip4/127.0.0.1/tcp/12345] dial tcp4 127.0.0.1:12345: connect: connection refused
  f097432: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097569: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097618: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBB7P7DFAMTPcmBtbYHZebMN8fmQ2VtRcEbewhhEVDMoC:  * [/ip4/49.75.92.112/tcp/24001] dial tcp4 0.0.0.0:40089->49.75.92.112:24001: i/o timeout
  f097658: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097687: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ1AdNGYDDG3J1D4ow3XnPT9vqZ4WdoZXDdEM1uWr4Zvb:  * [/ip4/61.147.81.133/tcp/16017] dial tcp4 61.147.81.133:16017: connect: connection refused
  f097777: 'fail, Ukraine, Ivano-Frankivsk', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPQUZL85hYxdkKzKZecKn7YVQ5VYyYbvm1Dvc7By1K92C:  * [/ip4/176.117.190.49/tcp/29992] dial tcp4 0.0.0.0:40089->176.117.190.49:29992: i/o timeout
  f097981: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f098664: 'fail, China, Jiangsu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f098743: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099082: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099132: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099247: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099369: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099387: 'fail, China, Shijiazhuang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG5CzuwyhZ4vpEn7DCvSpmurKi2QjTRLNLKGwo44A6MRo:  * [/ip4/124.239.180.3/tcp/24001] dial tcp4 124.239.180.3:24001: connect: connection refused
  f099705: 'fail, China, Zibo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQjQn7oVZwMLeHFyFEvEAfuPjktyZgo6Haunp9Xi34MCf:  * [/ip4/218.201.173.80/tcp/24001] dial tcp4 0.0.0.0:40089->218.201.173.80:24001: i/o timeout
  f099884: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099949: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNbRUwiuhnaRMRqzRXG4zAvtXvaTkbuQW2rQMZY34YEpC:  * [/ip4/182.131.4.195/tcp/32760] dial tcp4 182.131.4.195:32760: connect: connection refused
  f0100033: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0100034: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0100786: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101016: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101017: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101018: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEnpnV8MaTxEYT7e1xCKvB8bwRSANko9wK9jDs6b5N8f3:  * [/ip4/42.236.7.235/tcp/21002] dial tcp4 42.236.7.235:21002: connect: connection refused
  f0101019: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101069: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFbmvaZZJrgrEzAvNLKAFhmyE9z1tRhtQbZ53zifSkJYE:  * [/ip4/58.144.221.28/tcp/2347] dial tcp4 0.0.0.0:44703->58.144.221.28:2347: i/o timeout
  f0101133: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101403: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLHg2DuAH3MCXcdjhUHJGQkkj18rMizTrUGqrK8jE2JsY:  * [/ip4/182.131.4.195/tcp/32761] dial tcp4 182.131.4.195:32761: connect: connection refused
  f0101570: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101611: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0102187: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0102313: 'fail, Korea, Gangseo-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD5gFmSzBSDkMinds75LtFLz3jDnggF48TzoswTLPRYS9:  * [/ip4/220.86.32.74/tcp/38491] dial tcp4 220.86.32.74:38491: connect: connection refused
  f0102641: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAnv5JtoVSUWYuZThhUYHGTAak2UwDa9d92BevuA15hfm:  * [/ip4/124.16.8.144/tcp/23450] dial tcp4 0.0.0.0:44703->124.16.8.144:23450: i/o timeout
  f0103162: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103282: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103396: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLCnguS1TqxnrbCmDoAbJckjLEvo9xko2xvqmojc1ezxE:  * [/ip4/60.190.243.138/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLCnguS1TqxnrbCmDoAbJckjLEvo9xko2xvqmojc1ezxE, but remote key matches 12D3KooWJ9KC3jmmLpSk4pdrMA5Bn3VgCpvJs7QGQfXWGTVmTM2M
  f0103485: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103665: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103704: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0103710: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0104001: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0104103: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0104398: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0104654: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0104888: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0104967: 'fail, Ukraine, Ternopil', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAWKR4YpFqxUc5JrzExgTbA7EPBBDirdF5NWW1BpDa9V7:  * [/ip4/5.58.55.232/tcp/24001] dial tcp4 0.0.0.0:40089->5.58.55.232:24001: i/o timeout
  f0105074: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0105354: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0106438: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0106901: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107002: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107053: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107091: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107127: 'fail, USA, Daytona Beach', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKA2zAAUf6HwAhstuvDZiQUnpbUts2hWyKpit3o1i8wNw:  * [/ip4/172.3.161.97/tcp/24001] dial tcp4 172.3.161.97:24001: connect: connection refused
  f0107308: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR8tJtHhWPg3Sc1vpiosk3k9MjjhXpLXzxhMDRdXrnVkm:  * [/ip4/124.95.138.6/tcp/23450] dial tcp4 0.0.0.0:40089->124.95.138.6:23450: i/o timeout
  f0107322: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107536: 'fail, China, Bozhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvJDNfP1GYdLSZmqquRpPhwoAWpnMbZtn8oGzVjQCkyj:  * [/ip4/60.174.118.137/tcp/25469] dial tcp4 0.0.0.0:40089->60.174.118.137:25469: i/o timeout
  f0107543: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107656: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107753: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKA9j79CoGmZUVocAwFhGyJX7RxKGmc7gFAyNPdwgxVEa:  * [/ip4/101.133.172.142/tcp/1025] failed to negotiate security protocol: EOF
  f0107797: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107903: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0108199: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0108672: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0109309: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0109606: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0109743: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLYvFEdMuA4GQUeN5xounAfSBSKcwh5i976nKJ1gGenRu:  * [/ip4/58.220.66.137/tcp/10000] dial tcp4 0.0.0.0:40089->58.220.66.137:10000: i/o timeout
  f0109901: 'fail, China, Huludao', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJDLBHQKqKjbskjhn3W1qQHV9o9adQvfPoxVLCPm6CvcM:  * [/ip4/42.180.52.64/tcp/8903] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJDLBHQKqKjbskjhn3W1qQHV9o9adQvfPoxVLCPm6CvcM, but remote key matches 12D3KooWKdaL8b6hHdfoNY6Pm1hzbGEkWXXx5hEbiRwdx6ZW5X7g
  f0109903: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110110: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110248: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110261: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110289: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110695: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110696: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0110996: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111007: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111175: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111384: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111434: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111447: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111463: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111467: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111469: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0111499: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEy4PYMX2HMEnL2JEoThNZ2vaTfFyfYxpPXXc6cnSsGPr:  * [/ip4/182.131.4.195/tcp/32762] dial tcp4 182.131.4.195:32762: connect: connection refused
  f0111584: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFYYs51hFrAnZ9qjSBc6NjXtrrwVKKT6oqjgexxDxZXLH:  * [/ip4/192.168.3.14/tcp/32759] dial tcp4 0.0.0.0:40089->192.168.3.14:32759: i/o timeout
  f0112593: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112667: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112680: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112762: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112772: 'fail, China, Nantong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112781: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0112887: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0113735: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0113754: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0113777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114118: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114153: 'fail, China, Changsha + Dazhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNx9sjDfaykDaZ6GS3FUQ9LNZfE4pViXufaCKeAhSZs2F:  * [/ip4/175.6.68.154/tcp/24913] dial tcp4 0.0.0.0:40089->175.6.68.154:24913: i/o timeout  * [/ip4/175.6.66.78/tcp/24913] dial tcp4 0.0.0.0:40089->175.6.66.78:24913: i/o timeout
  f0114333: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114338: 'fail, China, Maoming', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA8Q2z1wpYNC2dnDKSV6uji9ivBCVgGGt6JFgLE9cp7iz:  * [/ip4/61.143.232.26/tcp/12888] dial tcp4 61.143.232.26:12888: connect: connection refused
  f0114350: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114867: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114885: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0115001: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0115117: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0115238: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0115990: 'fail, Korea, Gangnam-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCH9QfkYAUcen5u2UsQrsBgRr6SXF1DzoxmejKC3MpMur:  * [/ip4/125.133.92.205/tcp/36849] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCH9QfkYAUcen5u2UsQrsBgRr6SXF1DzoxmejKC3MpMur, but remote key matches 12D3KooWFbbCe63pSrR7zwsx431Y51pjAc4oKTNdjCmAwwHKGjBY
  f0116211: 'fail, China, Weifang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWF79gTgqr7VyLQu74NgBvCTuvDfp2CxGK8hxn2EYKzH6L:  * [/ip4/219.83.163.148/tcp/50666] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWF79gTgqr7VyLQu74NgBvCTuvDfp2CxGK8hxn2EYKzH6L, but remote key matches 12D3KooWRpggHrYWrczv3N2h5AAtdVFiX5zsW1duYpnfc1C8hjLa
  f0116287: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFfHAMm4kNbBTJGDqrakZgV8Kw9Y234RddjNNTNd3GFn5:  * [/ip4/172.18.5.97/tcp/2347] dial tcp4 0.0.0.0:40089->172.18.5.97:2347: i/o timeout
  f0116766: 'fail, USA, Westford', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBfmSEjenJCp9XPzHbTqmUB8xshZP5FSoJXvzTUYn6m6f:  * [/ip4/173.76.173.245/tcp/23456] dial tcp4 0.0.0.0:40089->173.76.173.245:23456: i/o timeout
  f0117146: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ1wxB3gfZJGxydfCyCJzmeP2YJFTysjLfCEHv9PJ6NW9:  * [/ip4/106.12.253.240/tcp/24001] dial tcp4 0.0.0.0:40089->106.12.253.240:24001: i/o timeout
  f0117211: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117318: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117358: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117405: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117416: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117434: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117450: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117541: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117542: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117543: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0117565: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118028: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118167: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118641: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118769: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118799: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0118976: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0119545: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0119633: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWC9KSsd16NN33UvF4FTfZHkwwVXnEEvT921B2ZjnfF6JZ:  * [/ip4/183.62.138.7/tcp/12358] dial tcp4 0.0.0.0:40089->183.62.138.7:12358: i/o timeout
  f0119828: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0119976: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0120057: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0120702: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0120747: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0120909: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJVJznp7UR73gAUmKDe8TQhRBoGJoS5KrqWxXpPCaQPD5:  * [/ip4/127.0.0.1/tcp/7502] dial tcp4 127.0.0.1:7502: connect: connection refused
  f0121584: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0121718: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0121771: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0121810: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122215: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122382: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122410: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMEtbrnU16XPWxnjiTc3EvHL3yxW5jSC96cbnbWc6LMe2:  * [/ip4/172.18.5.108/tcp/1347] dial tcp4 0.0.0.0:40089->172.18.5.108:1347: i/o timeout
  f0122496: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122533: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122940: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123245: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123261: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123275: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123346: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123535: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123536: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124126: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124158: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124696: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124904: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124944: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0125488: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0125863: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLffYGWNqEjDqwL1hpuMcNzVuMGhKHNQ5HXFbLZfMua1c:  * [/ip4/59.6.127.248/tcp/57001] dial tcp4 0.0.0.0:44703->59.6.127.248:57001: i/o timeout
  f0126097: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126478: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126661: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126698: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126702: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126868: 'fail, Ukraine, Vinnytsia', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEpRsvwx1Vj23sTy6FrnXwsBcKehbGgft9xCKG4xZU3Rz:  * [/ip4/93.75.163.158/tcp/24001] dial tcp4 0.0.0.0:40089->93.75.163.158:24001: i/o timeout
  f0126898: 'fail, China, Harbin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127378: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127382: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127569: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127595: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127612: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127627: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127628: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127629: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127640: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127721: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127735: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127980: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128011: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128381: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128559: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128761: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128788: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128815: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128931: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129226: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129403: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129422: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129750: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129805: 'fail, China, Zhejiang + Australia, Adelaide', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130094: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130134: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130556: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130639: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130686: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130727: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130791: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9qHxv5CfTo4CFvJb7v48GR5m9cw4q2kfY13Z8rSvQM5y:  * [/ip4/127.0.0.1/tcp/40573] dial tcp4 127.0.0.1:40573: connect: connection refused
  f0130884: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130906: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0131509: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0131654: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0131767: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0131822: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0132178: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0132313: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0132618: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0132638: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0132706: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133235: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133376: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133379: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133501: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133505: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133509: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133689: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133763: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0133833: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134006: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRLr5Efqy61nSerZXi5aorAL28qLDVphNovoYSgvpgm7t:  * [/ip4/10.140.8.12/tcp/32759] dial tcp4 0.0.0.0:40089->10.140.8.12:32759: i/o timeout
  f0134285: "fail, China, Ya'an + USA", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134552: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134609: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134839: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135008: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135066: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135150: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135414: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135467: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135469: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135473: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135474: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135475: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135551: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135758: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDdsHRTxE7ZHiCAvMSSqpBm6DdiXhhuicAMG4oUqdCoAR:  * [/ip4/127.0.0.1/tcp/1346] dial tcp4 127.0.0.1:1346: connect: connection refused  * [/ip4/183.136.236.94/tcp/1346] dial tcp4 0.0.0.0:40089->183.136.236.94:1346: i/o timeout
  f0135779: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135859: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135885: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135934: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136033: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136138: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136239: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136399: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136642: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136668: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136810: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0137019: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0137168: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f0137594: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0137868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0141634: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0141761: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0141762: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142059: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142135: "fail, China, Ya'an + USA", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142238: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142245: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142281: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142337: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142720: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0142721: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPRjsZzeZDCN28bF4sFjH9cWrtfLpGjXgeLr2bfEMfSuk:  * [/ip4/10.4.104.74/tcp/12288] dial tcp4 0.0.0.0:40089->10.4.104.74:12288: i/o timeout
  f0142723: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAqi4yZBZftta7YUBHtunGYowv7AVKXCoaRA4CZEtadnZ:  * [/ip4/10.4.104.75/tcp/12288] dial tcp4 0.0.0.0:40089->10.4.104.75:12288: i/o timeout
  f0143032: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143110: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143160: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143162: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143332: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143361: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143500: 'fail, China, Zhejiang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143511: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143858: 'fail, USA, Calistoga', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvQftXwBGoquXhiJxviZ2YJnxnSYCaD8WTe8uVWvXhf2:  * [/ip4/72.52.116.228/tcp/12350] dial tcp4 0.0.0.0:40089->72.52.116.228:12350: i/o timeout
  f0143907: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144069: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144194: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144313: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRGhsq49BP7fSr84fuJZpUWe3TxEs1f2HNbeuifyWVRbH:  * [/ip4/10.5.101.90/tcp/12288] dial tcp4 0.0.0.0:40089->10.5.101.90:12288: i/o timeout  * [/ip4/106.74.20.7/tcp/12288] dial tcp4 0.0.0.0:40089->106.74.20.7:12288: i/o timeout
  f0144314: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144316: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144528: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144530: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144615: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144618: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144724: 'fail, USA, Los Angeles', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQG8mBpQNBfK8sLeJ71Di4n7hwKfW6UHxXXEW3sZZPgiC:  * [/ip4/209.170.228.251/tcp/24001] dial tcp4 209.170.228.251:24001: connect: connection refused
  f0144756: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144952: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145060: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145249: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145503: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145687: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145985: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145986: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0146224: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0146278: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0146393: 'fail, China, Foshan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPBraDH4aCJTMCjaZ1JBe7nDCJUioSHtkJZ6VWseSumiQ:  * [/ip4/183.2.233.3/tcp/24501] dial tcp4 0.0.0.0:40089->183.2.233.3:24501: i/o timeout
  f0146428: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJqyLnffd3YFB2NrsTw2Y6Rzj869YfmN18GPQbEtBYeTh:  * [/ip4/172.16.2.105/tcp/6789] dial tcp4 0.0.0.0:40089->172.16.2.105:6789: i/o timeout
  f0146956: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147119: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147214: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147586: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147657: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147801: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148143: 'fail, China, Tianjin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148151: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148269: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148391: 'fail, China, Changsha + Japan, Tokyo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKceNLAACWruMmmGiATfNpdLuTshjRQMECCYRvqdRAGUm:  * [/ip4/23.10.7.187/tcp/912] dial tcp4 0.0.0.0:44703->23.10.7.187:912: i/o timeout
  f0148452: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148494: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148627: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0149132: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPioc5NM47gU8ebn5wZtE7AJeF7Rj6mpvEXerjru9FJiX:  * [/ip4/43.254.106.6/tcp/63345] dial tcp4 0.0.0.0:40089->43.254.106.6:63345: i/o timeout
  f0149753: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0149937: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150744: 'fail, Korea, Ulsan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFQaZfLj9xLZfKqo5h8PDT4qq5aeLXEzrNjqqFQLYfYuA:  * [/ip4/61.77.31.17/tcp/25246] dial tcp4 61.77.31.17:25246: connect: connection refused
  f0150748: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150782: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0150816: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150860: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150918: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151366: 'fail, China, Fuzhou + Xiamen', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151371: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151436: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151468: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151487: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151498: 'fail, China, Jinan', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151536: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151706: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151849: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152134: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152351: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152563: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAwo844dWRZkHcMjdGQX6TLCHqqjWaYNWRpqjNhtbMnXT:  * [/ip4/58.43.1.82/tcp/24001] dial tcp4 0.0.0.0:44703->58.43.1.82:24001: i/o timeout  * [/ip4/192.168.1.100/tcp/24001] dial tcp4 0.0.0.0:44703->192.168.1.100:24001: i/o timeout
  f0152799: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152866: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153024: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153040: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153078: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153188: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153565: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153583: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153775: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153804: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRYzvW7FieB4gDbRJMU9FRbFd3R6An7FtVBhcaK59mT2g:  * [/ip4/218.13.93.62/tcp/5502] dial tcp4 0.0.0.0:40089->218.13.93.62:5502: i/o timeout
  f0153930: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153932: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153960: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153986: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG4ngcStum65vCcnjVLEzHziUTdtNcAR4EvXu8QhBGR1H:  * [/ip4/127.0.0.1/tcp/7503] dial tcp4 127.0.0.1:7503: connect: connection refused
  f0154152: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154238: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154294: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154597: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154865: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155049: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155050: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155258: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155467: 'fail, Korea, Seongnam-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEcdiiWz7XoUPX8mV1CwWXUWVQrgfbnAAnupw47itSuFA:  * [/ip4/221.163.91.180/tcp/14231] dial tcp4 0.0.0.0:44703->221.163.91.180:14231: i/o timeout
  f0155515: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155687: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155829: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155983: 'fail, Japan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCiSxAQf3Hp6t1sFJdRotppHwUUBa6jQaA1bcJd4YEbJ1:  * [/ip4/202.149.23.10/tcp/5472] dial tcp4 202.149.23.10:5472: connect: connection refused
  f0156214: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0156333: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0156342: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0156417: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157025: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157115: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157127: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157316: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157502: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157769: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157917: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157979: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158000: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158068: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158133: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHw1ytuA6ia2c2wQ7NAmSm7vStuTgeDhhKCpL7t4bY3da:  * [/ip4/10.33.1.17/tcp/6789] dial tcp4 0.0.0.0:40089->10.33.1.17:6789: i/o timeout
  f0158142: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158156: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158265: 'fail, China, Hefei', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158276: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158613: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158728: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159067: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159333: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159380: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159449: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159517: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159632: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDPAdiHZY2J46XsioY41wEghorpiaJxjGFiR7Sru6B7pk:  * [/ip4/10.140.8.11/tcp/32759] dial tcp4 0.0.0.0:40089->10.140.8.11:32759: i/o timeout
  f0159654: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159660: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159689: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159883: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKkHESE49gxVjwHSP1Pk5tXFGfAv8LuzDakUZd42SViFU:  * [/ip4/10.133.9.111/tcp/32759] dial tcp4 0.0.0.0:40089->10.133.9.111:32759: i/o timeout
  f0160135: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0160137: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0160735: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0160819: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0160870: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0161468: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0161542: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWL7DWiea5SD2LDDB4wgzgYyicvMqbYhr9FGy1NmFjRbzP:  * [/ip4/10.10.8.50/tcp/8124] dial tcp4 0.0.0.0:40089->10.10.8.50:8124: i/o timeout
  f0161819: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0161916: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNepasPf214kWmhHRTUS3GGcSgg2HzJBS2gWrnWVwdpse:  * [/ip4/61.147.97.82/tcp/55556] dial tcp4 0.0.0.0:40089->61.147.97.82:55556: i/o timeout
  f0162183: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0163275: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0164260: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDvoPcZdYP1F1VFUGawf2Nt5TCBnVwEdXUebzmMX2SsVA:  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/182.1.4.19/tcp/23450] dial tcp4 0.0.0.0:40089->182.1.4.19:23450: i/o timeout
  f0165643: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166327: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166425: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166512: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166843: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166896: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0167137: 'fail, China, Shaoxing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBNZWmyu93EsfFKRWaunU1ykXxK1ontQcjY5nvEh29kvs:  * [/ip4/115.239.191.45/tcp/24002] dial tcp4 0.0.0.0:40089->115.239.191.45:24002: i/o timeout
  f0167505: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSRFer5yWxcyjXWwa5FSNLZpZcNWxkfi1PqdNjh8EYuYj:  * [/ip4/10.10.8.90/tcp/7002] dial tcp4 0.0.0.0:40089->10.10.8.90:7002: i/o timeout
  f0168058: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMM38722xUgBthsFgQBF8s2HuokVbV5R1jWgQbGrDjmTr:  * [/ip4/58.211.213.210/tcp/22122] dial tcp4 58.211.213.210:22122: connect: connection refused
  f0168537: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0169053: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0169097: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0172300: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0179096: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0187709: 'fail, Russia, Moscow', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHfkMBPkNAe8JvWeS55vMKPfQuFpiF6Y8F8Ez738A1x8w:  * [/ip4/82.204.128.132/tcp/17160] dial tcp4 82.204.128.132:17160: connect: connection refused
  f0199223: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFnLArFiK8JWmiChXEutsTd1tGw8t5ZNciuST8FNDQ85j:  * [/ip4/110.188.25.20/tcp/24001] dial tcp4 110.188.25.20:24001: connect: connection refused
  f0207949: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0216463: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0216822: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0217419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0217771: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJibSxo5yq7eoAH3vvKuhvrEkVxaBK28DChqjhEtJ2CwV:  * [/ip4/103.44.253.105/tcp/12358] dial tcp4 0.0.0.0:40089->103.44.253.105:12358: i/o timeout
  f0217789: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0217805: 'fail, China, Taiwan, Taipei', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE1znzJYLvWnCd3xB1Y6X8AimQL1x2WXsC6R5JDmCHQYS:  * [/ip4/220.130.154.127/tcp/2348] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWE1znzJYLvWnCd3xB1Y6X8AimQL1x2WXsC6R5JDmCHQYS, but remote key matches 12D3KooWL1927LDwXR6UibSv9hhNgQhWbqb1B8RHqNqYWgA3kHGY
  f0218072: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0218092: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0218559: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSa11PfrsyKqW7wZUBXfuK9r6d2xjeeD81Be1EnzPntiz:  * [/ip4/58.144.223.135/tcp/2347] dial tcp4 0.0.0.0:44703->58.144.223.135:2347: i/o timeout
  f0219106: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0220156: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0220632: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0221135: 'fail, USA, Atlanta', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQXfW4Av1F5VDHpAvrKNxZrYxHkNhFF91NnHvvtqTiSru:  * [/ip4/209.195.11.14/tcp/24001] dial tcp4 0.0.0.0:40089->209.195.11.14:24001: i/o timeout
  f0222611: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0222811: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0222947: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223033: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223101: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223102: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223103: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223104: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223106: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223316: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0223933: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0224894: 'fail, China, Qingdao', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0224984: 'fail, China, Wuhan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0225058: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0225285: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0226303: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0226324: 'fail, China, Guangxi', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0226418: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0226520: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0227472: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0227531: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0227567: 'fail, China, Zhangzhou', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0227660: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0227684: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0228232: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEZAh3WfxSFS6trQZYHHU8N8HdJPZhvMYBo281yhTDwQA:  * [/ip4/183.204.60.235/tcp/16017] dial tcp4 0.0.0.0:40089->183.204.60.235:16017: i/o timeout
  f0228712: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0229199: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0229437: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0230200: 'fail, Korea, Gwanak-gu, G-mining', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAqVoLFYKyjXJjR296i3ZzaUxnXu5j7NH3gKFf3kvQDcd:  * [/ip4/121.140.86.21/tcp/36849] dial tcp4 0.0.0.0:44703->121.140.86.21:36849: i/o timeout
  f0230449: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0230799: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0230861: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0231112: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSVBeGTDfyqY3rS8RBhnusdikSLyEPfrkBkoEhLUWgY1Z:  * [/ip4/112.194.96.134/tcp/24001] dial tcp4 112.194.96.134:24001: connect: connection refused
  f0231481: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0231782: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0232459: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0234567: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0239251: 'fail, Korea, Uiwang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0240035: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPZSFGhykg4TBEpKa5LBMNwzmkE8iWLHoR2kCzgQuAhC9:  * [/ip4/115.236.46.164/tcp/20004] dial tcp4 0.0.0.0:40089->115.236.46.164:20004: i/o timeout
  f0240185: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0240392: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0240456: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0241536: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0241666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0241764: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAqoRsdJxx1zaAMFQWG3XV9Y3M3xYV1gTcU3MryCZywfa:  * [/ip4/182.131.4.195/tcp/32800] dial tcp4 182.131.4.195:32800: connect: connection refused
  f0242156: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0242373: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0242420: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0349810: 'fail, China, Qinzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0364957: 'fail, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0377277: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391143: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0391212: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391214: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391235: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391381: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0391439: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392194: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392430: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392488: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392734: 'fail, Korea, Icheon-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMRRvqGs1NbCBQWPqW6gq1erGN7xVNVqpviFXVRjonDWe:  * [/ip4/210.97.12.180/tcp/21306] dial tcp4 210.97.12.180:21306: connect: connection refused
  f0392799: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR7WJ7MStK5W1vv7eEVxuzCYdUHZfoARfBVwogkszfteE:  * [/ip4/172.16.35.3/tcp/6789] dial tcp4 0.0.0.0:40089->172.16.35.3:6789: i/o timeout
  f0392813: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKQa9PSaH2wWh1e8SVvDNtCVrcL1nSVWeE582bmDETeku:  * [/ip4/172.16.35.25/tcp/6789] dial tcp4 0.0.0.0:40089->172.16.35.25:6789: i/o timeout
  f0392924: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392959: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392980: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392992: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0392999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGmQYeDiZRhAMBdmV36spYQGYLbzA11dsHYz2eXkj93Em:  * [/ip4/10.34.1.4/tcp/6789] dial tcp4 0.0.0.0:40089->10.34.1.4:6789: i/o timeout
  f0393016: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLGRUEmvdGKCi9AkHN4UbhRiubs9p1hrNCWMbyNEZNHBg:  * [/ip4/34.66.95.149/tcp/1024] dial tcp4 0.0.0.0:40089->34.66.95.149:1024: i/o timeout
  f0393119: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNnobNqKiP2pSc5fA1c9BuR9G1kwPayN51ixrHeovVnWv:  * [/ip4/172.16.35.5/tcp/6789] dial tcp4 0.0.0.0:40089->172.16.35.5:6789: i/o timeout
  f0393135: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0393417: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0394102: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0395680: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0395994: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHVvLeZq9iYKhwr1cNmZ82ayqNcSyXzcUWQ278dxvf2NE:  * [/ip4/10.10.8.116/tcp/8123] dial tcp4 0.0.0.0:40089->10.10.8.116:8123: i/o timeout
  f0396149: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396217: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396352: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0396422: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396452: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396473: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396684: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0396720: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0396732: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0396751: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0397083: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0397332: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0397561: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0397794: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0397802: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0397837: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEratU2MQneMbEAL9o8kdXcRxM5RyQpU5wPsivnmJUVFa:  * [/ip4/220.176.125.252/tcp/23450] dial tcp4 0.0.0.0:40089->220.176.125.252:23450: i/o timeout
  f0398286: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0398999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399111: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399319: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399320: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399321: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399322: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399323: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399342: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399343: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399346: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399348: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399743: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399765: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0399996: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0400264: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0400307: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWN3wNopyr2kSic3t6TaAPAsRGF9FU5jdeGDzKDmX1qH1Y:  * [/ip4/101.227.175.10/tcp/31347] dial tcp4 0.0.0.0:40089->101.227.175.10:31347: i/o timeout
  f0400644: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0400920: 'fail, China, Luzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0401254: 'fail, Korea, Uijeongbu-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBkZN1PdvoqWTYyPJsJjm6iV3Hn9mFJcGme7PoMPSXJ9q:  * [/ip4/119.193.190.74/tcp/7506] dial tcp4 0.0.0.0:40089->119.193.190.74:7506: i/o timeout
  f0401287: 'fail, China, Yibin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0401677: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0402233: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0402431: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0402661: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0402822: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0403050: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0403529: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0404193: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0404643: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0406478: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0406533: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0407244: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0407287: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0407410: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0407733: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMfqyyWZPU7rfHcz34FtBJbZgWWHQayBPmSQNUugJcEB3:  * [/ip4/8.209.65.6/tcp/30130] failed to negotiate security protocol: EOF
  f0408205: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408206: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408208: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408582: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408629: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408688: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0408833: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0409172: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEdvErGEyk7iwpMnJdJkWhBXjVSqKX8WgNHTWasbiwsiQ:  * [/ip4/172.20.100.36/tcp/10241] dial tcp4 0.0.0.0:40089->172.20.100.36:10241: i/o timeout
  f0409272: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0409399: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0409499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0409600: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410120: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410180: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410242: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410319: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410431: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0410941: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0411314: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0411877: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0413050: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0413323: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0413419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0413456: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0413801: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0417133: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0417709: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0417720: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0417767: 'fail, China, Zhangzhou', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0417893: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0418086: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWP5VxNssfCKZy2Hv8CEbbVbuDni7Rqw6LVsuRWpYjSLoC:  * [/ip4/10.155.8.31/tcp/32759] dial tcp4 0.0.0.0:40089->10.155.8.31:32759: i/o timeout
  f0418632: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNqenLnPxHHVwzUxTZN3SS8Ca53qY4SBaMm973X3oVy4c:  * [/ip4/103.94.227.210/tcp/15001] dial tcp4 103.94.227.210:15001: connect: connection refused
  f0418652: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419311: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419331: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419414: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419510: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419662: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419804: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419944: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419945: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBzsbHafdeXwkHyjRSapH5gQvgCVGmFT9auBsBgyC1KSM:  * [/ip4/115.236.22.226/tcp/24001] dial tcp4 115.236.22.226:24001: connect: connection refused
  f0420189: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0420508: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0421387: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0421858: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0422229: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCYfkYFtixmn7s7gaR3yVKm8gaYexWrvdMAgZLqANcCyU:  * [/ip4/127.0.0.1/tcp/35979] dial tcp4 127.0.0.1:35979: connect: connection refused  * [/ip6/::1/tcp/46589] dial tcp6 [::1]:46589: connect: connection refused  * [/ip4/10.16.0.208/tcp/35979] dial tcp4 0.0.0.0:40089->10.16.0.208:35979: i/o timeout
  f0422266: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAikAHtM6w5s7qqBarGmk7pt5i84Pc6aubiWFwAi8QLLU:  * [/ip4/10.177.5.31/tcp/32759] dial tcp4 0.0.0.0:40089->10.177.5.31:32759: i/o timeout
  f0423050: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0423057: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0423329: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0424761: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0424837: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0425447: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0427688: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0427839: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0427975: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0428075: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0428184: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0428306: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0428661: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0429063: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAuYNMj4P9cHtrXJHv66TLyW8UAdvYXriwKiXv3d2cWE9:  * [/ip4/8.209.65.6/tcp/30131] failed to negotiate security protocol: EOF
  f0429122: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0430101: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432235: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432329: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432375: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432382: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432570: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432661: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0432773: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0433688: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0433892: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0434411: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0435140: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLPo6bJJ2mzLWc8kXHfYyYcNBVhSYG6MtmNLWJQLpeAeS:  * [/ip4/58.220.66.161/tcp/1024] dial tcp4 0.0.0.0:40089->58.220.66.161:1024: i/o timeout
  f0435971: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0436065: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0436661: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0437158: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0440919: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441020: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441116: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441225: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441240: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441372: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441525: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441699: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441703: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442370: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442371: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442374: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442375: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442376: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442383: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPezoBtgHhfwqcUj1mJX9FbodKDxjNfJbFSWUz2emkfgy:  * [/ip4/10.5.101.10/tcp/12288] dial tcp4 0.0.0.0:40089->10.5.101.10:12288: i/o timeout
  f0442550: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442670: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442671: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0442672: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0443179: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0443180: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0443184: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0443303: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0443480: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0447106: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0447651: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0448660: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0449196: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0449296: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0450959: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0451341: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0451936: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0452808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0455968: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0457168: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0459325: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0460660: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0461612: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0461779: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0463030: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0463184: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0464884: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0465286: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0465477: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0465677: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0465993: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0466405: 'fail, Germany, Niederaula', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPdzsAN3aiWo48D6sjbp2tiDC9bvBK4ByQ4NFvv1mYsZL:  * [/ip4/212.102.118.102/tcp/20036] dial tcp4 0.0.0.0:40089->212.102.118.102:20036: i/o timeout
  f0466426: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0466990: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0467640: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0467809: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0468210: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0468966: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0469055: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0469578: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0469959: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0470182: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0470608: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBwYEEMQPJYTMxTu6EPv9tMhPGDVDPPPMrRrxVihXtQYk:  * [/ip4/127.0.0.1/tcp/34361] dial tcp4 127.0.0.1:34361: connect: connection refused  * [/ip6/::1/tcp/40491] dial tcp6 [::1]:40491: connect: connection refused  * [/ip4/113.219.198.31/tcp/34361] dial tcp4 113.219.198.31:34361: connect: connection refused  * [/ip4/113.219.198.2/tcp/34361] dial tcp4 113.219.198.2:34361: connect: connection refused  * [/ip4/113.219.198.32/tcp/34361] dial tcp4 113.219.198.32:34361: connect: connection refused  * [/ip4/113.219.198.33/tcp/34361] dial tcp4 113.219.198.33:34361: connect: connection refused  * [/ip4/113.219.198.34/tcp/34361] dial tcp4 113.219.198.34:34361: connect: connection refused  * [/ip4/192.168.143.216/tcp/34361] dial tcp4 0.0.0.0:40089->192.168.143.216:34361: i/o timeout  * [/ip4/10.80.63.1/tcp/34361] dial tcp4 0.0.0.0:40089->10.80.63.1:34361: i/o timeout  * [/ip4/113.219.198.20/tcp/34361] dial tcp4 0.0.0.0:40089->113.219.198.20:34361: i/o timeout
  f0472061: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0472720: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0472863: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0473113: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0473677: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0473956: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0475095: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0475305: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0475664: 'fail, China, Zhejiang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0478563: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0479677: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0480195: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0480313: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0480936: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0480944: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0481938: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0482494: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0483206: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0484990: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0485876: 'fail, China, Changchun', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0486952: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0487097: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0487098: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0488215: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0488689: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0488733: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0488851: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0490501: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0491919: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0492009: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0492360: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0492474: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCcQZY3rpH8sS971tVv6aQQ9yzY5knHtJYTKqdfJJtkyR:  * [/ip4/127.0.0.1/tcp/33451] dial tcp4 127.0.0.1:33451: connect: connection refused  * [/ip6/::1/tcp/40237] dial tcp6 [::1]:40237: connect: connection refused  * [/ip4/10.80.63.1/tcp/33451] dial tcp4 0.0.0.0:40089->10.80.63.1:33451: i/o timeout  * [/ip4/1.83.126.109/tcp/33451] dial tcp4 0.0.0.0:40089->1.83.126.109:33451: i/o timeout  * [/ip4/192.168.2.3/tcp/33451] dial tcp4 0.0.0.0:40089->192.168.2.3:33451: i/o timeout
  f0492481: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0492601: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0492737: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0493237: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0494268: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0494603: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0494733: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0496068: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0496897: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0497254: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0497636: 'fail, China, Harbin', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEwmdbv9vkcdMHk2mw621fKY9V1Ve3L425RwBwmNpyK2h:  * [/ip4/123.166.135.30/tcp/26635] dial tcp4 0.0.0.0:40089->123.166.135.30:26635: i/o timeout
  f0497771: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0498868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0500003: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0500685: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0500878: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0501662: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0502198: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0502948: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0503010: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0503287: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0503494: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0504097: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0504929: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0504985: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0505001: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0505110: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0505593: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0506630: 'fail, China, Linyi', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAbKEcHLWGs66jR818bSxuZTpCabn1ecF2s4u3kUy8bJr:  * [/ip4/222.174.187.42/tcp/20111] dial tcp4 222.174.187.42:20111: connect: connection refused
  f0506800: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0507913: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0508328: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRYNizkRTsja2Jn6Gssv4gkoc9yB32vpn5K7tMTFXZhvA:  * [/ip4/8.209.65.6/tcp/30132] failed to negotiate security protocol: EOF
  f0508622: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0508892: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0509062: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0509980: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0509981: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0510701: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0510957: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0511070: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0511318: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0511385: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0512066: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0512693: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0513685: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0514000: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0514235: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0514241: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGAGSr5AhezoqmJgVyji8jHaCGg4iMvrUwbo9mTH7qjRG:  * [/ip4/222.112.205.132/tcp/55037] failed to negotiate security protocol: read tcp4 144.217.11.204:44703->222.112.205.132:55037: read: connection reset by peer
  f0515264: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0515360: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0515389: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0515461: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0515626: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRXsoLv5SA7YhLdgMbL3L45tQnkMnfkmWdLnfLnDrG4dr:  * [/ip4/10.155.8.115/tcp/32759] dial tcp4 0.0.0.0:40089->10.155.8.115:32759: i/o timeout
  f0515674: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0517655: 'fail, Korea, Gwangju', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFJm5NeNhiQL4htxCSBKsgB7uS3TZ2dZff5YNeQ1n6uFy:  * [/ip4/121.179.79.12/tcp/55000] failed to negotiate security protocol: read tcp4 144.217.11.204:40089->121.179.79.12:55000: read: connection reset by peer
  f0518668: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0518713: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0519333: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0519376: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0519513: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520262: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJd9LiqnxLc2ytKthfG8SA6w7SjPL3cdq2rttx24Ffso8:  * [/ip6/::1/tcp/42209] dial tcp6 [::1]:42209: connect: connection refused  * [/ip4/127.0.0.1/tcp/36973] dial tcp4 127.0.0.1:36973: connect: connection refused  * [/ip4/121.207.252.87/tcp/36973] dial tcp4 121.207.252.87:36973: connect: connection refused  * [/ip4/10.12.8.3/tcp/36973] dial tcp4 0.0.0.0:40089->10.12.8.3:36973: i/o timeout
  f0520500: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520520: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0520688: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0521273: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0521499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0521508: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0521831: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0521884: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0522099: 'fail, China, Shangrao', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0523396: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0523415: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0523711: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0524489: 'fail, Korea, Pocheon-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBUkYd2MwHenSyJD83ySdtXJAQZkvBey7UECeqBwtxF7a:  * [/ip4/125.142.223.167/tcp/7506] dial tcp4 0.0.0.0:40089->125.142.223.167:7506: i/o timeout
  f0536177: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0592088: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0601583: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0602011: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0646439: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0652413: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0652414: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0663311: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0665666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0666315: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0670491: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0671982: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0672951: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0673613: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0673920: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNqsbphQowDfnYtKjp1qv2HH4AYs7m8uQfFt2RegLJx5X:  * [/ip4/8.209.65.6/tcp/30133] failed to negotiate security protocol: EOF
  f0673990: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0674600: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0674756: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0674889: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0675459: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0675675: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0676183: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0678781: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0679376: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0680529: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0680677: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0680929: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0680977: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0681063: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0681068: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0682032: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSBp35iwToBkDFKcBjtafn2QbyabmA7ysVVcpNwLqnX9U:  * [/ip4/103.39.230.113/tcp/51105] dial tcp4 0.0.0.0:40089->103.39.230.113:51105: i/o timeout
  f0683965: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0684618: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685007: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685231: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685539: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685706: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685797: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNgjEWefHYd3BhA4AmJ4ET1g6uAUBkCRYkSebZCn33gDZ:  * [/ip4/220.176.125.163/tcp/23450] dial tcp4 0.0.0.0:40089->220.176.125.163:23450: i/o timeout
  f0685829: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0686816: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0687211: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0688165: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0689753: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0689917: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBHVQfvMW1G4pntHVScD1RGYJZ72EmhJpob71hDUQJTZF:  * [/ip4/218.186.29.53/tcp/24001] dial tcp4 0.0.0.0:44703->218.186.29.53:24001: i/o timeout
  f0690736: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0690779: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0691310: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0693008: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0693127: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0693765: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0693793: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0693817: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0694099: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0694149: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0694232: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0694999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0695289: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0697249: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0697913: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0698688: 'fail, China, Xinyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGFhWLfQZD8xgY3K4cbDN5aiTLVPy9jADfknj7dEbpCSf:  * [/ip4/183.204.60.235/tcp/24001] dial tcp4 0.0.0.0:40089->183.204.60.235:24001: i/o timeout
  f0699021: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0699115: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0699181: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0700033: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0700207: 'fail, China, Harbin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0701056: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0701144: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0701226: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQKywCe5Nnsa4aYvxEsbsi7D589PxdC2dssmSX8PPQAA5:  * [/ip4/172.18.7.147/tcp/2347] dial tcp4 0.0.0.0:40089->172.18.7.147:2347: i/o timeout
  f0702010: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0702054: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0702377: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0702810: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0703149: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0704898: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0704940: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0704941: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0704966: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0705136: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0705521: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0705937: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0706206: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0706999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNHh5wxLbNfnGTtqX3N4JoTnj32MoBoPZwLXL4xSPhoRh:  * [/ip4/125.122.66.43/tcp/24001] failed to negotiate security protocol: message did not have trailing newline
  f0707159: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0707197: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0707777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0709739: 'fail, China, Handan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLFhEykxak8fDojtzuVUTGZ4uHUZnL9sQTk41F4tpDT8j:  * [/ip4/106.115.185.6/tcp/1024] dial tcp4 0.0.0.0:44703->106.115.185.6:1024: i/o timeout
  f0709896: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0711266: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0711289: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0711445: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0712676: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0713585: 'fail, Russia', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFySoPZk1yBcoDDA7Jb9w5Kf2rHnid4scqn25fGpU3Btz:  * [/ip4/46.148.233.147/tcp/24001] dial tcp4 46.148.233.147:24001: connect: connection refused
  f0715209: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0715446: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0715561: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0715639: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJawwpgeKGSYzfuqFEsfUJQBVJbqw35dEshNt4MwnYtHr:  * [/ip4/67.220.90.13/tcp/24001] dial tcp4 0.0.0.0:40089->67.220.90.13:24001: i/o timeout
  f0715904: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0716103: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0716170: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0716283: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0716775: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0717289: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0717905: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0717987: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0718311: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0718313: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0718366: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNSXKvF3rDjqK5owHyz5YvToLupwEX9tB8SxR3pfBHJCS:  * [/ip4/115.238.239.190/tcp/34395] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNSXKvF3rDjqK5owHyz5YvToLupwEX9tB8SxR3pfBHJCS, but remote key matches 12D3KooWM7Q7x7293jYzujzPMvsBMvghpYeXyDz2vaxTtEM7T8oZ
  f0718552: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0718962: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0719301: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0721721: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0723006: 'fail, Korea, Bucheon-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFviuieFLJR75jf3rPdybnyYxbGW2PGF7WtL4Ts2Nc8c5:  * [/ip4/119.197.20.89/tcp/34001] dial tcp4 0.0.0.0:40089->119.197.20.89:34001: i/o timeout
  f0723381: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0723538: 'fail, China, Handan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCdb7C2xNDAh6zbTwPhjL7PF8yZEiq3HDL4otE2HtoUaJ:  * [/ip4/111.62.109.66/tcp/24001] dial tcp4 0.0.0.0:40089->111.62.109.66:24001: i/o timeout
  f0723604: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0723950: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0724023: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0724097: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0724216: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0724728: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0726270: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0726841: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0727962: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0728817: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0729412: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0730670: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0730917: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0730942: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0731061: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0731150: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0732272: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWL2n7opE3PS2fxEZeFqc4SCGNfFKKWzG61ijk4gBYboLa:  * [/ip4/172.18.7.146/tcp/2347] dial tcp4 0.0.0.0:40089->172.18.7.146:2347: i/o timeout
  f0732862: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0733076: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0733242: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0733626: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0733692: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0734053: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0734759: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0735027: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0744093: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0744513: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK18YecHFy5KA9kHu7uY1JYccCcesgKvCXjMgijX66GcY:  * [/ip4/14.119.111.133/tcp/36284] dial tcp4 14.119.111.133:36284: connect: connection refused  * [/ip4/10.9.3.32/tcp/36284] dial tcp4 0.0.0.0:40089->10.9.3.32:36284: i/o timeout
  f0744622: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0745068: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0745192: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0746628: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0746945: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0746991: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0747522: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0747777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0748101: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0748137: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0748179: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0748875: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0750779: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0751099: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0751450: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0752442: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0752620: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0752635: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0753027: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0753228: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0753402: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0754755: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0754993: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0755327: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0755650: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0756840: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0757233: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0757234: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0757610: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0763048: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0763082: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0763093: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0764901: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0765036: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0765071: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0765173: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0766038: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0766177: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0766756: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805343: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805402: 'fail, Korea, Bucheon-si', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJXhpstx2AEsQihMrP6vWRtbzzVoW89dPShnAraUQF3Fh:  * [/ip4/211.192.248.213/tcp/34001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJXhpstx2AEsQihMrP6vWRtbzzVoW89dPShnAraUQF3Fh, but remote key matches 12D3KooWLwAJ4dZ6H4SjnuwFkKE5GBXsmvG17KmKu3fnkfLZpsZF
  f0805486: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805567: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805612: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805622: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805872: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0805937: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0806336: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0806347: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0806395: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0806758: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0806904: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807383: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807384: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807385: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807386: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807387: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807388: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807389: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807390: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807392: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807446: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807472: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0807839: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0808766: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0809570: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0811662: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0811878: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0813061: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0813825: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0813992: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0814012: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0814049: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0814155: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0815838: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0816168: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0818235: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0818428: 'fail, China, Yichang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWB5fTJhsaHNUVALvngbCqcZtfJyJfRaw2YCWwiheqvpeq:  * [/ip4/119.36.140.201/tcp/24001] dial tcp4 0.0.0.0:40089->119.36.140.201:24001: i/o timeout
  f0818625: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0820770: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0821595: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0822151: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0822441: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0822818: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0823127: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0825528: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0826272: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0826452: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0826566: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0828538: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0829506: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0829765: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0829836: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0832131: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQsVz6W83mxyLgWLzj7Rsr7yaL8DDFvQ1x7GMxQ4ZGQNA:  * [/ip4/10.177.5.11/tcp/32759] dial tcp4 0.0.0.0:40089->10.177.5.11:32759: i/o timeout
  f0834841: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0835180: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0835613: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0836160: 'fail, Korea, Seodaemun-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHwRmkj4Jxfo2YnKJC4YBzTNEGDW6Et4E68r7RYVXk46h:  * [/ip4/211.48.44.88/tcp/24001] dial tcp4 211.48.44.88:24001: connect: connection refused
  f0836990: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0837056: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0837434: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0839084: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0839133: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0839436: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0839448: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0840040: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0840060: 'fail, China, Changchun', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD31mVVSYZcZegvMVhbAq2R2wogACR26Qbw3r8NnWxJRg:  * [/ip4/127.0.0.1/tcp/33455] dial tcp4 127.0.0.1:33455: connect: connection refused  * [/ip6/::1/tcp/33455] dial tcp6 [::1]:33455: connect: connection refused  * [/ip4/139.215.226.71/tcp/33455] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWD31mVVSYZcZegvMVhbAq2R2wogACR26Qbw3r8NnWxJRg, but remote key matches 12D3KooWDkwWxZyds1vF5uCFZwbkmUVTaCMKdwT8nJeohuqg1PXx
  f0840430: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0841453: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0842266: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0843255: 'fail, China, Yibin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0843558: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0843713: 'fail, China, Shaanxi', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0844271: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0844849: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0844916: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0845186: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0845296: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDiQzhqk1pZWdkcTGHxuUsTkV1cPXW7Hts11CKwgUiccH:  * [/ip4/14.136.232.51/tcp/36666] dial tcp4 0.0.0.0:40089->14.136.232.51:36666: i/o timeout  * [/ip4/10.3.0.24/tcp/36666] dial tcp4 0.0.0.0:40089->10.3.0.24:36666: i/o timeout
  f0845528: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0845976: 'fail, China, Jiaxing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNe7iCaSsvRxqnLVAjqWNpw6BbALY1zj6FCBubTMPvYEM:  * [/ip4/61.164.212.154/tcp/29013] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNe7iCaSsvRxqnLVAjqWNpw6BbALY1zj6FCBubTMPvYEM, but remote key matches 12D3KooWFEZiYoJxqyuANeLtn7tDytRkYzcc9HS6gbaymHgMijWc
  f0846191: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0847138: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0848972: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0849079: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0850130: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0851322: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0855056: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0855584: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0856336: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0856508: 'fail, China, Taiwan, Taoyuan District', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLSAeUmariCgq3MYgJVQAorZibNzkigxjajsAK8pXBmWp:  * [/ip4/220.135.231.28/tcp/24001] dial tcp4 0.0.0.0:44703->220.135.231.28:24001: i/o timeout
  f0856912: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0857612: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0858038: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0859013: 'fail, China, Nanjing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQAppdVVbGSQ84HZLJ9hpGYddyewC7kAQMNmpGz4VtwGs:  * [/ip4/221.226.219.122/tcp/24001] dial tcp4 221.226.219.122:24001: connect: connection refused
  f0863013: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0863576: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0866508: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0866966: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0867253: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0868971: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0870189: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0870333: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0870354: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0870973: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0871511: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0871532: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0871546: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0871719: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0873699: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0873874: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0874057: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0876581: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0878351: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0878807: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0881262: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0881281: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0881321: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0881531: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0881687: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0883083: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0884455: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0884781: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0984680: 'fail, Korea, Jung-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBvZ7DkY3YWdnzuBFMc8gBtnddv3ZSMywYi32wvndCWL1:  * [/ip4/211.196.161.124/tcp/24001] dial tcp4 0.0.0.0:40089->211.196.161.124:24001: i/o timeout
  f0984905: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01001984: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01002302: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01016451: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01016806: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01016882: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01017269: 'fail, USA, Fort Lauterdale', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKifDpQWWWJgiZDedWCzL6NC5GZUwJuTDYD9gfw7vyyBd:  * [/ip4/184.105.151.130/tcp/23453] dial tcp4 0.0.0.0:40089->184.105.151.130:23453: i/o timeout
  f01017980: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01019391: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01019418: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01019869: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01021204: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01021317: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01021773: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01021898: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01022733: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01023982: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01024317: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01024814: 'fail, USA, Wilson', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01025366: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01025894: 'fail, China, Zhengzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01026560: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01027747: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01028552: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01028659: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01028902: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01029008: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01030424: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01030435: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01030442: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01031823: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01031867: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01032055: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01032314: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01032657: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01032858: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01032903: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01033096: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01033119: 'fail, France, Paris', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRYpcprWqMFnPUKNY7DvLFGuNNpAwLnSdeLdqocyxjPTP:  * [/ip4/62.210.46.194/tcp/24001] dial tcp4 0.0.0.0:40089->62.210.46.194:24001: i/o timeout
  f01033390: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01033805: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01034007: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01035021: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01036920: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01038189: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01038199: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01038389: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01038625: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01038663: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01038679: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01038861: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01039350: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01039576: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01040516: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01040707: 'fail, China, Tianjin', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD6q85b77FELfxCckkCcNkPK5sGAZu17wN5LEJg2w1zCP:  * [/ip4/36.106.26.23/tcp/24001] dial tcp4 0.0.0.0:40089->36.106.26.23:24001: i/o timeout
  f01040817: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDCVnKZDF54aTAqEK5T53stLd6T3quBSepb2UJepyNb4a:  * [/ip4/221.163.91.165/tcp/14224] dial tcp4 0.0.0.0:40089->221.163.91.165:14224: i/o timeout
  f01042229: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01042276: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01042409: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01043193: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01043666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01043780: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01044297: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01045078: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01045198: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01045812: 'fail, China, Taiwan, New Taipei', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01046069: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01047011: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01047445: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01048770: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01049102: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01049468: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01049739: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01050978: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01051178: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01051743: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01052311: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01052556: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01053413: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01053601: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01054527: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01055821: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01056608: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01057193: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01057303: 'fail, China, Huizhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRauh5L4cp8ZgECxihY7LHXqZRaagmgYrz88KwR3qWg9u:  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/121.11.216.28/tcp/23450] dial tcp4 0.0.0.0:40089->121.11.216.28:23450: i/o timeout
  f01058790: 'fail, Japan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQrYYX2kKC112zMwkPCnZnzSFS9yMc1oekjYcT7n6TdD2:  * [/ip4/202.149.21.25/tcp/33315] dial tcp4 0.0.0.0:40089->202.149.21.25:33315: i/o timeout
  f01059489: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01059620: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01062232: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01063832: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01063833: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01064991: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01065505: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01065930: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01066009: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01066517: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01067573: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01068111: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01068287: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01068331: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01069894: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01070040: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01070149: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCPrJpPFTcYNy9iNSErBsHUWuLaVHkvThh1DmcDRt5TYf:  * [/ip4/125.64.33.80/tcp/33167] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCPrJpPFTcYNy9iNSErBsHUWuLaVHkvThh1DmcDRt5TYf, but remote key matches 12D3KooWApbR1a1aCfyJsHAjD2NDYeeBMWQZrBrqb21ZmbqiixLj
  f01070158: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01070205: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01070319: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01070395: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01071282: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01071852: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01072221: 'fail, USA, San Diego', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA8T2beAxNyc37A3HRSvbDzmS1CKmFcE36aS2rfqE5eRW:  * [/ip4/131.226.249.241/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWA8T2beAxNyc37A3HRSvbDzmS1CKmFcE36aS2rfqE5eRW, but remote key matches 12D3KooWCNCBJUNJrJdTpnTg6HaywjwZo6HRF2ChnAGfsqN14qTX
  f01073166: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01073851: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01074227: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01075086: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01076629: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01076644: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01077516: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01077547: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01077777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01079999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01081349: 'fail, China, Foshan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01081449: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01081786: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01082277: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01082888: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01083999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01084913: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01085688: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLc7i9VwqBKfSETERepHNrP39rog5GM7c29nBvNbgT8MS:  * [/ip4/113.89.33.37/tcp/24001] dial tcp4 0.0.0.0:40089->113.89.33.37:24001: i/o timeout
  f01085801: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01086350: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01086616: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01086720: 'fail, Thailand, Bangkok', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01086808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01087002: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01087561: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01088018: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01088088: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01089169: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01089422: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01089828: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01090983: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01091851: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01092768: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01093254: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01093419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01094602: 'fail, China, Harbin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01095558: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01095694: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01095915: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01095973: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01096056: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01096672: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01097059: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01097535: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01097758: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098119: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098124: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098271: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098580: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098810: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098835: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01098931: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01099739: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01100262: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01100636: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01100914: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01101196: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01101315: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01101397: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01101426: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01101881: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01102006: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01102085: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01102936: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01103160: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAZyf6RWfHJ1A7rCxiCvoMqxWWZN5MYZaUD7qRofx8KVx:  * [/ip4/220.117.173.3/tcp/24001] dial tcp4 220.117.173.3:24001: connect: connection refused
  f01103841: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01103850: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01103923: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01104012: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01104018: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGMXT24ecaKrHNcpRY4eUrwR5qnu2qwyGnZr8cfxacGZJ:  * [/ip4/103.52.172.50/tcp/33690] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGMXT24ecaKrHNcpRY4eUrwR5qnu2qwyGnZr8cfxacGZJ, but remote key matches 12D3KooWFaBcpEdCfe8wLM3jv4M3KqMSRTCqN7Aigsu4VpDQ6uF1
  f01104310: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01105079: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01105377: 'fail, Korea, Jung-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWP8aG4cAJ2T52E6otTwKMBVaXc1h2vz5SLVerfBL3h8L1:  * [/ip4/218.144.83.28/tcp/24002] dial tcp4 0.0.0.0:40089->218.144.83.28:24002: i/o timeout
  f01105647: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01105825: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01105927: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWENsfcLm3e62dFcr3gEdpiQf1nmTKR6hbJcj5md9iJeYt:  * [/ip4/113.142.1.78/tcp/3000] dial tcp4 113.142.1.78:3000: connect: connection refused
  f01106117: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01106668: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01107585: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01108096: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01108193: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01108594: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01109196: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01110284: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01110660: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01111111: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01111131: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01111673: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01111831: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01111881: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01112163: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01112287: 'fail, Ukraine, Kyiv', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEMSiVo8dk4B3AGhiw8JUrRg2boVfxk9XXHLMfRUjy1Gk:  * [/ip4/31.134.121.232/tcp/24001] dial tcp4 31.134.121.232:24001: connect: connection refused
  f01112541: 'fail, USA, Fremont', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01112647: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01112782: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01113378: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01113597: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQXxJ2cP2GyjUXzEUFiy9m4NW3jPLJULeEnoLWBBe5WFN:  * [/ip4/192.168.2.75/tcp/24001] dial tcp4 0.0.0.0:40089->192.168.2.75:24001: i/o timeout
  f01114516: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01114577: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01115274: 'fail, Japan, Yokohama', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01115279: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01115686: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01115949: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01116666: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01117889: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01117949: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01118032: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01118499: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01118788: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01118970: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01119039: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01120248: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01120291: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01121887: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01122339: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01122412: 'fail, China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR3evydQfKXyxBTUjwiF6jCazFWynQEBr6D8x6ZCkwTb8:  * [/ip4/172.19.0.13/tcp/24001] dial tcp4 0.0.0.0:40089->172.19.0.13:24001: i/o timeout
  f01122448: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01123232: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01123400: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01123833: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01124409: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDS6aPiqSH2taKmh1RvrzgaTe2M4bpW6BenwR2RBuwhv9:  * [/ip4/115.231.27.36/tcp/2345] dial tcp4 0.0.0.0:40089->115.231.27.36:2345: i/o timeout
  f01124710: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01124728: 'fail, Japan, Yokohama', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01125371: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01125521: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01125834: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01125858: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01125913: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01126419: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01126517: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01126799: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01127273: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLeNhEomnsdGdDeuCX7Ywe2Bfr4nDJDuSqCHigxxss5Zi:  * [/ip4/127.0.0.1/tcp/46195] dial tcp4 127.0.0.1:46195: connect: connection refused  * [/ip6/::1/tcp/38723] dial tcp6 [::1]:38723: connect: connection refused  * [/ip4/112.82.123.250/tcp/46195] dial tcp4 112.82.123.250:46195: connect: connection refused  * [/ip4/192.168.10.7/tcp/46195] dial tcp4 0.0.0.0:40089->192.168.10.7:46195: i/o timeout
  f01127678: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01127909: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128206: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128302: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128320: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128326: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128800: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01129431: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01129455: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01129528: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01129570: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01129866: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01129867: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130100: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130543: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130544: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130671: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130682: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130729: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130927: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01131460: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01131653: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01131867: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132015: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132422: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132516: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01132656: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01133532: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01134586: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01136391: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01136467: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSFskALJTZAqbhsBVuTaWSseyLHgRDGQHEZhrA94wpUYr:  * [/ip4/36.6.46.68/tcp/24001] dial tcp4 0.0.0.0:40089->36.6.46.68:24001: i/o timeout
  f01136493: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01137656: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01137855: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01138139: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01138209: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01138496: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01138709: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01139232: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01139383: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01139870: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found

  // No Peer

  f096943: 'nopeer, NR', // carry-over
  f0106256: 'nopeer, NR', // carry-over
  f0107916: 'nopeer, NR', // carry-over
  f0111343: 'nopeer, NR', // carry-over
  f0116095: 'nopeer, NR', // carry-over
  f0126469: 'nopeer, NR', // carry-over
  f0126471: 'nopeer, NR', // carry-over
  f0144547: 'nopeer, NR', // carry-over
  f0147487: 'nopeer, NR', // carry-over
  f0147496: 'nopeer, NR', // carry-over
  f0148163: 'nopeer, NR', // carry-over
  f0154020: 'nopeer, NR', // carry-over
  f0159630: 'nopeer, NR', // carry-over
  f0159642: 'nopeer, NR', // carry-over
  f0159711: 'nopeer, NR', // carry-over
  f0164210: 'nopeer, NR', // carry-over
  f0216922: 'nopeer, NR', // carry-over
  f0216923: 'nopeer, NR', // carry-over
  f0218283: 'nopeer, NR', // carry-over
  f0224728: 'nopeer, NR', // carry-over
  f0232255: 'nopeer, NR', // carry-over
  f0232830: 'nopeer, NR', // carry-over
  f0623549: 'nopeer, NR', // carry-over
  f0623725: 'nopeer, NR', // carry-over
  f0680676: 'nopeer, NR', // carry-over
  f0685126: 'nopeer, NR', // carry-over
  f0690964: 'nopeer, NR', // carry-over
  f0690971: 'nopeer, NR', // carry-over
  f0690972: 'nopeer, NR', // carry-over
  f0694908: 'nopeer, NR', // carry-over
  f0694916: 'nopeer, NR', // carry-over
  f0694917: 'nopeer, NR', // carry-over
  f0694928: 'nopeer, NR', // carry-over
  f0694986: 'nopeer, NR', // carry-over
  f0695014: 'nopeer, NR', // carry-over
  f0701089: 'nopeer, NR', // carry-over
  f0701308: 'nopeer, NR', // carry-over
  f0702301: 'nopeer, NR', // carry-over
  f0702302: 'nopeer, NR', // carry-over
  f0702320: 'nopeer, NR', // carry-over
  f0708763: 'nopeer, NR', // carry-over
  f0708764: 'nopeer, NR', // carry-over
  f0723641: 'nopeer, NR', // carry-over
  f0743933: 'nopeer, NR', // carry-over
  f0746543: 'nopeer, NR', // carry-over
  f0747980: 'nopeer, NR', // carry-over
  f0761676: 'nopeer, NR', // carry-over
  f0834426: 'nopeer, NR', // carry-over
  f0858986: 'nopeer, NR', // carry-over
  f0867288: 'nopeer, NR', // carry-over
  f0867296: 'nopeer, NR', // carry-over
  f0867298: 'nopeer, NR', // carry-over
  f0867300: 'nopeer, NR', // carry-over
  f0867429: 'nopeer, NR', // carry-over
  f01016239: 'nopeer, NR', // carry-over
  f01016255: 'nopeer, NR', // carry-over
  f01075153: 'nopeer, NR', // carry-over
  f01075159: 'nopeer, NR', // carry-over
  f01100139: 'nopeer, NR', // carry-over
  f01100182: 'nopeer, NR', // carry-over

  // Delist

  f01000: 'delist, NR - bootstrap', // carry-over
  f01001: 'delist, NR - bootstrap', // carry-over
  f01002: 'delist, NR - bootstrap', // carry-over
  f01013: 'delist, NR', // carry-over
  f01101: 'delist, China, Shanghai', // carry-over
  f01102: 'delist, China, Shandong', // carry-over
  f01156: 'delist, China, Hangzhou', // carry-over
  f01232: 'delist, China, Hangzhou', // carry-over
  f01274: 'delist, China, Guangdong', // carry-over
  f01291: 'delist, Sweden, Stockholm, tvsthlm', // carry-over
  f02304: 'delist, USA, Mountain View', // carry-over
  f02382: 'delist, China, Zhongshan-cfa', // carry-over
  f02385: 'delist, USA, East Islip', // carry-over
  f02398: 'delist, China, Hong Kong', // carry-over
  f02404: 'delist, Korea, Seoul', // carry-over
  f02424: 'delist, Korea, Wanju', // carry-over
  f02436: 'delist, Netherlands', // carry-over
  f02506: 'delist, USA, Clarksville', // carry-over
  f02515: 'delist, China, Hangzhou', // carry-over
  f02518: 'delist, China, Shaanxi', // carry-over
  f02575: 'delist, USA, Davis', // carry-over
  f02608: 'delist, USA, San Jose', // carry-over
  f02665: 'delist, Netherlands, Amsterdam, fm-ops', // carry-over
  f02666: 'delist, China, Chengdu', // carry-over
  f02668: 'delist, China, Chengdu', // carry-over
  f02768: 'delist, China, Hong Kong', // carry-over
  f02774: 'delist, Australia, Sydney', // carry-over
  f02822: 'delist, China, Chengdu', // carry-over
  f02824: 'delist, China, Chengdu', // carry-over
  f03225: 'delist, China, Guyuan', // carry-over
  f03264: 'delist, Korea, Bucheon-si', // carry-over
  f03269: 'delist, Australia', // carry-over
  f03319: 'delist, NR', // carry-over
  f03341: 'delist, NR', // carry-over
  f03346: 'delist, China, Huzhou, wckj', // carry-over
  f03361: 'delist, China, Guangzhou', // carry-over
  f03428: 'delist, China, Beijing + Jiaxing + Germany, Frankfurt', // carry-over
  f03487: 'delist, China, Yibin', // carry-over
  f03519: 'delist, USA, Seattle', // carry-over
  f03544: 'delist, China, Guiyang', // carry-over
  f03619: 'delist, China, Xiamen', // carry-over
  f03622: 'delist, 黑犇科技', // carry-over
  f03765: 'delist, Colombia, Medellin', // carry-over
  f04444: 'delist, NR', // carry-over
  f06262: 'delist, China, Guangzhou', // carry-over
  f07717: 'delist, China, Shenyang', // carry-over
  f07731: 'delist, NR', // carry-over
  f07772: 'delist, China, Dongguan', // carry-over
  f07819: 'delist, China, Wuxi, YC--wuxi', // carry-over
  f07827: 'delist, China, Wuhan, 天际合', // carry-over
  f07843: 'delist, NR', // carry-over
  f07866: 'delist, China, Foshan', // carry-over
  f07924: 'delist, USA', // carry-over
  f07931: 'delist, NR', // carry-over
  f07959: 'delist, NR', // carry-over
  f07964: 'delist, USA, Ashburn', // carry-over
  f07987: 'delist, China, Beijing', // carry-over
  f08022: 'delist, China, Yibin', // carry-over
  f08053: 'delist, NR', // carry-over
  f08061: 'delist, China, Foshan', // carry-over
  f08095: 'delist, Canada, Surrey', // carry-over
  f08097: 'delist, Korea, Pyeongtaek-si', // carry-over
  f08136: "delist, China, Xi'an", // carry-over
  f08171: 'delist, NR', // carry-over
  f08183: 'delist, USA, Irvine', // carry-over
  f08207: 'delist, Australia, Brisbane', // carry-over
  f08223: 'delist, NR', // carry-over
  f08225: 'delist, Australia, Sydney', // carry-over
  f08238: 'delist, NR', // carry-over
  f08246: 'delist, USA', // carry-over
  f08280: 'delist, NR', // carry-over
  f08284: 'delist, China, Liaoning', // carry-over
  f08285: 'delist, Latvia, Riga, stander', // carry-over
  f08290: 'delist, NR', // carry-over
  f08311: 'delist, China, Shenzhen', // carry-over
  f08315: 'delist, China, Chongqing', // carry-over
  f08319: 'delist, NR', // carry-over
  f08322: 'delist, China, Chongqing', // carry-over
  f08327: 'delist, NR', // carry-over
  f08349: 'delist, China, Guangzhou, hkicloud', // carry-over
  f08361: 'delist, Malaysia, Kulai', // carry-over
  f08385: 'delist, NR', // carry-over
  f08388: 'delist, China, Taizhou', // carry-over
  f08390: 'delist, China, Shenzhen', // carry-over
  f08393: 'delist, NR', // carry-over
  f08402: 'delist, China, Sichuan', // carry-over
  f08406: 'delist, China, Shenzhen', // carry-over
  f08424: 'delist, China, Chengdu', // carry-over
  f08425: 'delist, NR', // carry-over
  f08429: 'delist, yfeing', // carry-over
  f08432: 'delist, China, Taizhou', // carry-over
  f08440: 'delist, France, Fontenay-sous-Bois', // carry-over
  f08460: 'delist, NR', // carry-over
  f08482: 'delist, USA, Athol, @why', // carry-over
  f08503: 'delist, NR', // carry-over
  f08532: 'delist, USA', // carry-over
  f08574: 'delist, USA', // carry-over
  f08787: 'delist, China, Yibin', // carry-over
  f08789: 'delist, China, Fuzhou', // carry-over
  f08791: 'delist, NR', // carry-over
  f08893: 'delist, NR', // carry-over
  f08902: 'delist, NR', // carry-over
  f08911: 'delist, Korea, Wanju', // carry-over
  f08964: 'delist, NR', // carry-over
  f08980: 'delist, USA, San Jose', // carry-over
  f08988: 'delist, Korea, Hwaseong-si', // carry-over
  f08994: 'delist, NR', // carry-over
  f09006: 'delist, NR', // carry-over
  f09007: 'delist, Korea, Hwaseong-si', // carry-over
  f09035: 'delist, NR', // carry-over
  f09053: 'delist, China, Shenzhen', // carry-over
  f09055: 'delist, China, Jieyang', // carry-over
  f09076: 'delist, NR', // carry-over
  f09084: 'delist, NR', // carry-over
  f09529: 'delist, NR', // carry-over
  f09538: 'delist, NR', // carry-over
  f09569: 'delist, China, Beijing', // carry-over
  f09578: 'delist, NR', // carry-over
  f09589: 'delist, China, Changsha', // carry-over
  f09594: 'delist, NR', // carry-over
  f09610: 'delist, China, Beijing', // carry-over
  f09629: 'delist, NR', // carry-over
  f09662: 'delist, Canada, Surrey', // carry-over
  f09675: 'delist, USA', // carry-over
  f09689: 'delist, USA, Portland', // carry-over
  f09707: 'delist, China, Guangdong', // carry-over
  f09712: 'delist, China, Chengdu', // carry-over
  f09719: 'delist, Korea, Geumcheon-gu', // carry-over
  f09731: 'delist, China, Guiyang', // carry-over
  f09733: 'delist, China, Chongqing', // carry-over
  f09736: 'delist, China, Guangdong', // carry-over
  f09753: 'delist, Korea, Pyeongtaek-si', // carry-over
  f09762: 'delist, China, Guangdong', // carry-over
  f09805: 'delist, China, Fuzhou', // carry-over
  f09833: 'delist, USA, San Jose', // carry-over
  f09840: 'delist, China, Baoding', // carry-over
  f09912: 'delist, USA, Concord', // carry-over
  f09964: 'delist, Germany, Frankfurt', // carry-over
  f09966: 'delist, NR', // carry-over
  f09974: 'delist, Canada, Calgary', // carry-over
  f09997: 'delist, USA', // carry-over
  f010005: 'delist, China, Zhongshan', // carry-over
  f010009: 'delist, USA, East Islip', // carry-over
  f010028: 'delist, USA, Berkeley', // carry-over
  f010033: 'delist, NR', // carry-over
  f010040: 'delist, China, Shenzhen', // carry-over
  f010041: 'delist, USA, Jackson', // carry-over
  f010078: 'delist, China, Zhangjiakou + Hong Kong', // carry-over
  f010173: 'delist, Korea, Pyeongtaek-si', // carry-over
  f010200: 'delist, NR', // carry-over
  f010213: 'delist, NR', // carry-over
  f010222: 'delist, NR', // carry-over
  f010227: 'delist, China, Xiamen', // carry-over
  f010244: 'delist, USA, Newton', // carry-over
  f010248: 'delist, China, Yibin', // carry-over
  f010265: 'delist, China, Zhengzhou', // carry-over
  f010275: 'delist, Korea, Cheongju-si + USA', // carry-over
  f010277: 'delist, France, Fontenay-sous-Bois', // carry-over
  f010281: 'delist, China, Shanghai', // carry-over
  f010282: 'delist, USA, San Francisco', // carry-over
  f010283: 'delist, Brazil, Sao Paulo', // carry-over
  f010292: 'delist, NR', // carry-over
  f010293: 'delist, China, Xiamen', // carry-over
  f010297: 'delist, USA, Howell', // carry-over
  f010303: 'delist, China, Guangdong', // carry-over
  f010305: 'delist, NR', // carry-over
  f010310: 'delist, Canada, Surrey', // carry-over
  f010313: 'delist, NR', // carry-over
  f010315: 'delist, Canada, Surrey', // carry-over
  f010346: 'delist, China, Karamay', // carry-over
  f010382: 'delist, NR', // carry-over
  f010402: 'delist, China, Shenyang', // carry-over
  f010425: 'delist, NR', // carry-over
  f010433: 'delist, Korea, Seoul', // carry-over
  f010438: 'delist, USA', // carry-over
  f010453: 'delist, China, Shaanxi', // carry-over
  f010468: 'delist, China, Guangzhou', // carry-over
  f010490: 'delist, NR', // carry-over
  f010517: 'delist, China, Chongqing', // carry-over
  f010520: 'delist, China, Hangzhou', // carry-over
  f010523: 'delist, China, Beijing, Interstellar Roewe', // carry-over
  f010542: 'delist, China, Ordos', // carry-over
  f010549: 'delist, China, Ordos', // carry-over
  f010551: 'delist, China, Shenyang', // carry-over
  f010559: 'delist, China, Shenyang', // carry-over
  f010566: 'delist, NR', // carry-over
  f010591: 'delist, China, Wuhan', // carry-over
  f010601: 'delist, NR', // carry-over
  f010602: 'delist, China, Guangdong', // carry-over
  f010603: 'delist, China, Baoding', // carry-over
  f010612: 'delist, USA, Mountain View', // carry-over
  f014207: 'delist, USA', // carry-over
  f014261: 'delist, China, Fuzhou', // carry-over
  f014271: 'delist, China, Fuzhou', // carry-over
  f014314: 'delist, Korea, Bucheon-si', // carry-over
  f014331: 'delist, China, Chongqing', // carry-over
  f014354: 'delist, USA, Concord', // carry-over
  f014366: 'delist, USA, Mountain View', // carry-over
  f014388: 'delist, China, Guangdong', // carry-over
  f014389: 'delist, China, Chongqing', // carry-over
  f014407: 'delist, China, Shanghai', // carry-over
  f014419: 'delist, USA, San Diego', // carry-over
  f014420: 'delist, Russia, Samara', // carry-over
  f014425: 'delist, Singapore', // carry-over
  f014477: 'delist, China, Hangzhou', // carry-over
  f014478: 'delist, Finland', // carry-over
  f014486: 'delist, NR', // carry-over
  f014495: 'delist, China, Hong Kong', // carry-over
  f014514: 'delist, China, Fuzhou', // carry-over
  f014533: 'delist, China, Fuzhou', // carry-over
  f014540: 'delist, USA, Newton', // carry-over
  f014556: 'delist, Korea, Bucheon-si', // carry-over
  f014629: 'delist, NR', // carry-over
  f014660: 'delist, Korea, Busan', // carry-over
  f014685: 'delist, Hong Kong', // carry-over
  f014708: 'delist, China, Beijing', // carry-over
  f014741: 'delist, China, Wuhan', // carry-over
  f014745: 'delist, China, Shenyang', // carry-over
  f014749: 'delist, China, Chongqing', // carry-over
  f014764: 'delist, Korea, Wanju', // carry-over
  f014793: 'delist, China, Hangzhou', // carry-over
  f014799: 'delist, China, Chongqing', // carry-over
  f014803: 'delist, China, Beijing', // carry-over
  f015061: 'delist, Australia, Sydney', // carry-over
  f015232: 'delist, Poland, Warsaw', // carry-over
  f015647: 'delist, China, Shenzhen', // carry-over
  f015709: 'delist, China, Hefei', // carry-over
  f015724: 'delist, China, Guangdong', // carry-over
  f015753: 'delist, China, Guyuan', // carry-over
  f015782: 'delist, Australia', // carry-over
  f015797: 'delist, Germany, Rostock', // carry-over
  f015798: 'delist, Germany', // carry-over
  f015799: 'delist, Germany, Rostock', // carry-over
  f015800: 'delist, Germany, Sankt Andreasberg', // carry-over
  f015802: 'delist, Germany', // carry-over
  f015805: 'delist, Germany', // carry-over
  f015808: 'delist, Germany', // carry-over
  f015809: 'delist, Germany', // carry-over
  f015810: 'delist, Germany', // carry-over
  f015811: 'delist, Germany, Lanshut', // carry-over
  f015812: 'delist, Germany', // carry-over
  f015827: 'delist, Russia', // carry-over
  f015829: 'delist, China, Beijing', // carry-over
  f015833: 'delist, China, Baoding', // carry-over
  f015867: 'delist, Netherlands, Amsterdam', // carry-over
  f015870: 'delist, China, Hangzhou', // carry-over
  f015875: 'delist, China, Fuzhou', // carry-over
  f015891: 'delist, China, Shanghai', // carry-over
  f015901: 'delist, Germany', // carry-over
  f015902: 'delist, Germany', // carry-over
  f015920: 'delist, China, Guangdong', // carry-over
  f015935: 'delist, China, Sichuan', // carry-over
  f015938: 'delist, Canada, Waterloo', // carry-over
  f015940: 'delist, Netherlands, Amsterdam', // carry-over
  f015942: 'delist, China, Ningbo', // carry-over
  f016140: 'delist, China, Beijing', // carry-over
  f016162: 'delist, France, Borgo', // carry-over
  f016172: 'delist, China, Guangdong', // carry-over
  f016203: 'delist, China, Chengdu', // carry-over
  f016217: 'delist, China, Nanchong', // carry-over
  f016228: 'delist, China, Chengdu', // carry-over
  f016234: 'delist, China, Chengdu', // carry-over
  f016262: 'delist, China, Fuzhou', // carry-over
  f016271: 'delist, Korea, Seodaemun-gu', // carry-over
  f016299: 'delist, China, Shanghai', // carry-over
  f016303: 'delist, USA, Boardman', // carry-over
  f016304: 'delist, USA, Boardman', // carry-over
  f016305: 'delist, USA, Boardman', // carry-over
  f016306: 'delist, USA, Boardman', // carry-over
  f016408: 'delist, NR', // carry-over
  f016426: 'delist, NR', // carry-over
  f016436: 'delist, Korea, Seoul', // carry-over
  f016456: 'delist, China, Zhejiang', // carry-over
  f016462: 'delist, USA, Clarksville', // carry-over
  f016482: 'delist, USA, Aliquippa', // carry-over
  f016594: 'delist, Germany', // carry-over
  f016628: 'delist, NR', // carry-over
  f016688: 'delist, Germany, Frankfurt', // carry-over
  f016706: 'delist, China, Guangzhou', // carry-over
  f017117: 'delist, Russia, Samara', // carry-over
  f017171: 'delist, NR', // carry-over
  f017181: 'delist, China, Nanchong', // carry-over
  f017186: 'delist, China, Jiaxing', // carry-over
  f017209: 'delist, NR', // carry-over
  f017215: 'delist, Finland', // carry-over
  f017216: 'delist, NR', // carry-over
  f017236: 'delist, NR', // carry-over
  f017251: 'delist, USA', // carry-over
  f017294: 'delist, China, Shenzhen', // carry-over
  f017323: 'delist, Poland, Warsaw', // carry-over
  f017334: 'delist, China, Fuzhou', // carry-over
  f017430: 'delist, Australia, Alexandria-cfa', // carry-over
  f017618: 'delist, Korea, Wanju', // carry-over
  f017628: 'delist, Brazil, Sao Paulo', // carry-over
  f017655: 'delist, NR', // carry-over
  f017722: 'delist, NR', // carry-over
  f017747: 'delist, NR', // carry-over
  f017793: 'delist, NR', // carry-over
  f018081: 'delist, Germany', // carry-over
  f018095: 'delist, Colombia, Medellin', // carry-over
  f018128: 'delist, China, Dongguan', // carry-over
  f018164: 'delist, USA, Howell', // carry-over
  f018311: "delist, China, Xi'an, <23h", // carry-over
  f018369: 'delist, NR', // carry-over
  f018393: 'delist, Colombia, Medellin', // carry-over
  f018397: 'delist, USA, Howell', // carry-over
  f018425: 'delist, USA, Howell', // carry-over
  f018437: 'delist, NR', // carry-over
  f018441: 'delist, USA', // carry-over
  f018445: 'delist, NR', // carry-over
  f018446: 'delist, China, Dongguan', // carry-over
  f018456: 'delist, Brazil, Sao Paulo', // carry-over
  f018474: 'delist, China, Xiamen', // carry-over
  f018484: 'delist, China, Shanghai', // carry-over
  f018490: 'delist, Korea, Hwaseong-si', // carry-over
  f018513: 'delist, NR', // carry-over
  f018517: 'delist, USA, Columbus', // carry-over
  f018518: "delist, China, Xi'an", // carry-over
  f018520: 'delist, China', // carry-over
  f018530: 'delist, China, Shaanxi', // carry-over
  f018531: 'delist, China, Shaanxi', // carry-over
  f018537: 'delist, China, Shaanxi', // carry-over
  f018542: 'delist, China, Chongqing', // carry-over
  f018754: 'delist, China, Dali', // carry-over
  f018761: 'delist, Russia, St. Petersburg', // carry-over
  f018790: 'delist, China, Chengdu', // carry-over
  f018802: 'delist, China, Dongguan', // carry-over
  f018812: 'delist, South Africa, Cape Town', // carry-over
  f018836: 'delist, NR', // carry-over
  f018837: 'delist, China, Shaanxi', // carry-over
  f018844: 'delist, NR', // carry-over
  f018864: 'delist, Korea, Busan', // carry-over
  f018865: 'delist, China, Chengdu', // carry-over
  f018869: 'delist, NR', // carry-over
  f018879: 'delist, Korea, Geumcheon-gu', // carry-over
  f018899: 'delist, China, Shanghai', // carry-over
  f019017: 'delist, China, Wenzhou-cfa', // carry-over
  f019024: 'delist, China, Sichuan', // carry-over
  f019029: 'delist, Serbia, Boljevac', // carry-over
  f019031: 'delist, NR', // carry-over
  f019042: 'delist, China, Shanghai', // carry-over
  f019048: 'delist, Brazil, Sao Paulo', // carry-over
  f019062: 'delist, Germany', // carry-over
  f019069: 'delist, NR', // carry-over
  f019109: 'delist, USA, Howell', // carry-over
  f019114: 'delist, USA, Howell', // carry-over
  f019118: 'delist, China, Jiaxing', // carry-over
  f019123: 'delist, China, Dongguan', // carry-over
  f019160: 'delist, USA, Fremont', // carry-over
  f019173: 'delist, China, Nanchong', // carry-over
  f019184: 'delist, China, Yibin', // carry-over
  f019218: 'delist, China, Dali', // carry-over
  f019239: 'delist, China, Jiaxing', // carry-over
  f019264: 'delist, NR', // carry-over
  f019284: 'delist, China, Foshan', // carry-over
  f019376: 'delist, NR', // carry-over
  f019378: 'delist, China, Changzhou', // carry-over
  f019401: 'delist, Brazil, Sao Paulo', // carry-over
  f019423: 'delist, South Africa, Johannesburg', // carry-over
  f019434: 'delist, NR', // carry-over
  f019437: 'delist, Korea, Guro-gu', // carry-over
  f019525: 'delist, USA, Berkeley', // carry-over
  f019528: 'delist, Peru', // carry-over
  f019547: 'delist, Peru', // carry-over
  f019645: 'delist, Russia, St. Petersburg', // carry-over
  f019723: 'delist, China, Zhongshan', // carry-over
  f019734: 'delist, NR', // carry-over
  f019757: 'delist, NR', // carry-over
  f019804: 'delist, China, Chengdu', // carry-over
  f019809: 'delist, NR', // carry-over
  f019812: 'delist, NR', // carry-over
  f019824: 'delist, USA', // carry-over
  f019825: 'delist, China, Hong Kong', // carry-over
  f020223: 'delist, China, Guiyang', // carry-over
  f020241: 'delist, NR', // carry-over
  f020260: 'delist, NR', // carry-over
  f020276: 'delist, China, Xiamen', // carry-over
  f020281: 'delist, Korea, Uijeongbu-si', // carry-over
  f020352: 'delist, NR', // carry-over
  f020361: 'delist, Colombia, Medellin', // carry-over
  f020366: 'delist, China, Chengdu', // carry-over
  f020369: 'delist, NR', // carry-over
  f020379: 'delist, NR', // carry-over
  f020386: 'delist, Russia', // carry-over
  f020390: 'delist, NR', // carry-over
  f020408: 'delist, China, Hong Kong', // carry-over
  f020432: 'delist, Korea, Wanju', // carry-over
  f020433: 'delist, NR', // carry-over
  f020439: 'delist, China, Chengdu', // carry-over
  f020450: 'delist, NR', // carry-over
  f020451: 'delist, NR', // carry-over
  f020453: 'delist, China, Chengdu', // carry-over
  f020457: 'delist, NR', // carry-over
  f020525: 'delist, China, Dongguan', // carry-over
  f020541: 'delist, China, Shanghai', // carry-over
  f020559: 'delist, China, Liaoning', // carry-over
  f020563: 'delist, China, Dongguan', // carry-over
  f020578: 'delist, Korea, Wanju', // carry-over
  f020641: 'delist, NR', // carry-over
  f020678: 'delist, China, Wenzhou', // carry-over
  f020682: 'delist, NR', // carry-over
  f020683: 'delist, China, Changsha', // carry-over
  f020691: 'delist, NR', // carry-over
  f020739: 'delist, China, Dongguan', // carry-over
  f020763: 'delist, China, Luzhou', // carry-over
  f020775: 'delist, Japan, Osaka', // carry-over
  f020786: 'delist, China, Shenzhen', // carry-over
  f020788: 'delist, China, Chengdu', // carry-over
  f020789: 'delist, NR', // carry-over
  f020791: 'delist, China, Hangzhou', // carry-over
  f020819: 'delist, China, Chengdu', // carry-over
  f020822: 'delist, China, Shanghai', // carry-over
  f020896: 'delist, NR', // carry-over
  f020899: 'delist, China, Chengdu', // carry-over
  f020914: 'delist, NR', // carry-over
  f020934: 'delist, NR', // carry-over
  f020939: 'delist, NR', // carry-over
  f020961: 'delist, China, Shanghai', // carry-over
  f020975: 'delist, China, Shandong', // carry-over
  f020993: 'delist, China, Hong Kong', // carry-over
  f021069: 'delist, USA', // carry-over
  f021083: 'delist, NR', // carry-over
  f021092: 'delist, NR', // carry-over
  f021095: 'delist, NR', // carry-over
  f021265: 'delist, China, Wuhan', // carry-over
  f021274: 'delist, China, Shanghai', // carry-over
  f021286: 'delist, China, Shaanxi', // carry-over
  f021307: 'delist, China, Chengdu', // carry-over
  f021311: 'delist, NR', // carry-over
  f021337: 'delist, China, Beijing', // carry-over
  f021339: 'delist, China, Jiaxing', // carry-over
  f021346: 'delist, China, Shanghai', // carry-over
  f021357: 'delist, China, Shanghai', // carry-over
  f021418: 'delist, NR', // carry-over
  f021494: 'delist, NR', // carry-over
  f021500: 'delist, NR', // carry-over
  f021505: 'delist, NR', // carry-over
  f021509: 'delist, China, Fuzhou', // carry-over
  f021527: 'delist, NR', // carry-over
  f021535: 'delist, China, Chengdu', // carry-over
  f021555: 'delist, NR', // carry-over
  f021574: 'delist, NR', // carry-over
  f021580: 'delist, NR', // carry-over
  f021583: 'delist, China, Jiaxing', // carry-over
  f021684: 'delist, NR', // carry-over
  f021699: 'delist, NR', // carry-over
  f021725: 'delist, NR', // carry-over
  f021976: 'delist, NR', // carry-over
  f022015: 'delist, China, Hangzhou', // carry-over
  f022016: 'delist, NR', // carry-over
  f022033: 'delist, NR', // carry-over
  f022070: 'delist, China, Jieyang', // carry-over
  f022084: 'delist, China, Shaanxi', // carry-over
  f022089: 'delist, China, Beijing', // carry-over
  f022091: 'delist, NR', // carry-over
  f022108: 'delist, China, Luzhou', // carry-over
  f022119: 'delist, USA, Lovettsville', // carry-over
  f022122: 'delist, NR', // carry-over
  f022132: 'delist, China, Dongguan', // carry-over
  f022171: 'delist, China, Shanghai', // carry-over
  f022202: 'delist, USA, Howell', // carry-over
  f022250: 'delist, NR', // carry-over
  f022262: 'delist, China, Hong Kong', // carry-over
  f022276: 'delist, Korea, Seoul', // carry-over
  f022284: 'delist, China, Shaanxi', // carry-over
  f022287: 'delist, China, Dongguan', // carry-over
  f022303: 'delist, NR', // carry-over
  f022313: 'delist, NR', // carry-over
  f022321: 'delist, China, Hong Kong', // carry-over
  f022326: 'delist, China, Zhongshan', // carry-over
  f022333: 'delist, China, Dongguan', // carry-over
  f022337: 'delist, NR', // carry-over
  f022343: 'delist, China, Dongguan', // carry-over
  f022372: 'delist, China, Chengdu', // carry-over
  f022376: 'delist, China, Dongguan', // carry-over
  f022494: 'delist, China, Dongguan', // carry-over
  f022501: 'delist, Japan, Osaka', // carry-over
  f022503: 'delist, NR', // carry-over
  f022505: 'delist, China, Shanghai', // carry-over
  f022517: 'delist, China, Taiwan, Taipei', // carry-over
  f022562: 'delist, NR', // carry-over
  f022564: 'delist, NR', // carry-over
  f022683: 'delist, NR', // carry-over
  f022755: 'delist, China, Shenzhen', // carry-over
  f022776: 'delist, Korea, Guri-si', // carry-over
  f022786: 'delist, NR', // carry-over
  f022790: 'delist, China, Luzhou', // carry-over
  f022791: 'delist, NR', // carry-over
  f022797: 'delist, NR', // carry-over
  f022834: 'delist, NR', // carry-over
  f022836: 'delist, China, Chongqing', // carry-over
  f022838: 'delist, China, Hong Kong', // carry-over
  f022841: 'delist, China, Zhongshan', // carry-over
  f022857: 'delist, NR', // carry-over
  f022880: 'delist, NR', // carry-over
  f022906: 'delist, NR', // carry-over
  f022911: 'delist, China, Hong Kong', // carry-over
  f022912: 'delist, NR', // carry-over
  f022926: 'delist, NR', // carry-over
  f022930: 'delist, NR', // carry-over
  f022954: 'delist, NR', // carry-over
  f022967: 'delist, Korea, Seoul', // carry-over
  f022969: 'delist, China, Chengdu', // carry-over
  f022970: 'delist, NR', // carry-over
  f022996: 'delist, NR', // carry-over
  f023021: 'delist, Korea, Yeongdeungpo-dong', // carry-over
  f023108: 'delist, China, Dongguan', // carry-over
  f023159: 'delist, NR', // carry-over
  f023207: 'delist, NR', // carry-over
  f023210: 'delist, China, Dongguan', // carry-over
  f023254: 'delist, NR', // carry-over
  f023463: 'delist, NR', // carry-over
  f023482: 'delist, NR', // carry-over
  f023501: 'delist, China, Mianyang', // carry-over
  f023505: 'delist, NR', // carry-over
  f023526: 'delist, China, Chongqing', // carry-over
  f023535: 'delist, China, Hong Kong', // carry-over
  f023560: 'delist, NR', // carry-over
  f023568: 'delist, NR', // carry-over
  f023571: 'delist, NR', // carry-over
  f023581: 'delist, China, Hong Kong, mine-much', // carry-over
  f023643: 'delist, NR', // carry-over
  f023647: 'delist, Korea, Gangseo-gu', // carry-over
  f023649: 'delist, Korea, Seoul, LS&NIHON', // carry-over
  f023661: 'delist, China, Zhejiang', // carry-over
  f023798: 'delist, China, Shanghai', // carry-over
  f023801: 'delist, China, Dongguan', // carry-over
  f023826: 'delist, USA, Germantown', // carry-over
  f023881: 'delist, China, Fuzhou', // carry-over
  f023939: 'delist, NR', // carry-over
  f023943: 'delist, USA, Ashburn', // carry-over
  f023965: 'delist, NR', // carry-over
  f023986: 'delist, Korea, Seoul', // carry-over
  f024031: 'delist, NR', // carry-over
  f024074: 'delist, NR', // carry-over
  f024129: 'delist, China, Zhejiang', // carry-over
  f024153: 'delist, NR', // carry-over
  f024165: 'delist, NR', // carry-over
  f024168: 'delist, USA, Ashburn', // carry-over
  f024496: 'delist, China, Dongguan', // carry-over
  f024526: 'delist, Korea', // carry-over
  f024556: 'delist, NR', // carry-over
  f024557: 'delist, NR', // carry-over
  f024558: 'delist, NR', // carry-over
  f024559: 'delist, NR', // carry-over
  f024611: 'delist, China, Dongguan', // carry-over
  f024902: 'delist, Korea, Incheon', // carry-over
  f024903: 'delist, undefined', // carry-over
  f024969: 'delist, NR', // carry-over
  f025028: 'delist, NR', // carry-over
  f025032: 'delist, China, Beijing', // carry-over
  f029368: 'delist, Korea, Gangseo-gu', // carry-over
  f029421: 'delist, undefined', // carry-over
  f029477: 'delist, undefined', // carry-over
  f029529: 'delist, China, Dongguan', // carry-over
  f029546: 'delist, NR', // carry-over
  f029566: 'delist, NR', // carry-over
  f029595: 'delist, undefined', // carry-over
  f029619: 'delist, undefined', // carry-over
  f029632: 'delist, undefined', // carry-over
  f030230: 'delist, China, Sichuan', // carry-over
  f030231: 'delist, China, Hunan', // carry-over
  f030327: 'delist, China, Beijing', // carry-over
  f030386: 'delist, NR', // carry-over
  f030514: 'delist, NR', // carry-over
  f030518: 'delist, China, Wuhan', // carry-over
  f030521: 'delist, China, Hong Kong', // carry-over
  f030531: 'delist, NR', // carry-over
  f030608: 'delist, China, Mianyang', // carry-over
  f030641: 'delist, China, Shaanxi', // carry-over
  f032865: 'delist, USA, Redmond', // carry-over
  f032887: 'delist, undefined', // carry-over
  f032904: 'delist, undefined', // carry-over
  f032922: 'delist, undefined', // carry-over
  f033014: 'delist, NR', // carry-over
  f033028: 'delist, China, Mianyang', // carry-over
  f033111: 'delist, China, Shanghai', // carry-over
  f033124: 'delist, China, Shanghai', // carry-over
  f033125: 'delist, NR', // carry-over
  f033209: 'delist, NR', // carry-over
  f033224: 'delist, NR', // carry-over
  f033511: 'delist, China, Dongguan', // carry-over
  f033545: 'delist, China, Shenzhen + USA', // carry-over
  f033549: 'delist, China, Quzhou', // carry-over
  f034084: 'delist, China, Chongqing', // carry-over
  f034229: 'delist, USA, Minneapolis', // carry-over
  f034311: 'delist, Korea, Gangnam-gu', // carry-over
  f034362: 'delist, China, Sichuan', // carry-over
  f034652: 'delist, Korea, Yeongdeungpo-dong', // carry-over
  f034666: 'delist, NR', // carry-over
  f040137: 'delist, NR', // carry-over
  f040432: 'delist, NR', // carry-over
  f040468: 'delist, NR', // carry-over
  f040971: 'delist, NR', // carry-over
  f042344: 'delist, Korea', // carry-over
  f042584: 'delist, Australia, Basin View', // carry-over
  f042839: 'delist, Korea, Pocheon-si', // carry-over
  f042901: 'delist, Finland, Helsinki', // carry-over
  f044143: 'delist, China, Taiwan, Taipei', // carry-over
  f044788: 'delist, NR', // carry-over
  f046043: 'delist, China, Shanghai', // carry-over
  f046073: 'delist, China, Shanghai', // carry-over
  f046074: 'delist, China, Shanghai', // carry-over
  f046078: 'delist, China, Shaanxi', // carry-over
  f046315: 'delist, NR', // carry-over
  f046317: 'delist, China, Nanyang', // carry-over
  f047327: 'delist, China, Hong Kong', // carry-over
  f047536: 'delist, NR', // carry-over
  f047858: 'delist, China, Wuhan', // carry-over
  f048172: 'delist, China, Suzhou', // carry-over
  f048192: 'delist, China, Suzhou', // carry-over
  f048545: 'delist, China, Chengdu', // carry-over
  f049990: 'delist, Korea, Incheon', // carry-over
  f052503: 'delist, NR', // carry-over
  f052562: 'delist, NR', // carry-over
  f052740: 'delist, China, Shaanxi', // carry-over
  f054163: 'delist, China, Dongguan', // carry-over
  f054389: 'delist, China, Chongqing', // carry-over
  f054677: 'delist, Finland, Helsinki', // carry-over
  f055040: 'delist, China, Fujian', // carry-over
  f055522: 'delist, USA', // carry-over
  f056393: 'delist, NR', // carry-over
  f057115: 'delist, China, Nanyang', // carry-over
  f057560: 'delist, NR', // carry-over
  f057842: 'delist, Korea, Gyeonggi-do', // carry-over
  f058003: 'delist, China, Shenzhen', // carry-over
  f058321: 'delist, China, Dongguan', // carry-over
  f059280: 'delist, China, Shenzhen', // carry-over
  f059652: 'delist, China, Beijing', // carry-over
  f059705: 'delist, Korea, Naju', // carry-over
  f059740: 'delist, Germany, Bottrop', // carry-over
  f060780: 'delist, Korea, Goyang-si', // carry-over
  f061043: 'delist, China, Changsha', // carry-over
  f061059: 'delist, China, Beijing', // carry-over
  f061196: 'delist, Korea, Yeongdeungpo-dong', // carry-over
  f061430: 'delist, Korea, Naju', // carry-over
  f062375: 'delist, Korea, Gyeonggi-do', // carry-over
  f062445: 'delist, China, Shenzhen', // carry-over
  f062449: 'delist, NR', // carry-over
  f062492: 'delist, China, Hong Kong', // carry-over
  f062552: 'delist, NR', // carry-over
  f062587: 'delist, NR', // carry-over
  f062735: 'delist, China, Hong Kong', // carry-over
  f063173: 'delist, Korea, Gyeonggi-do', // carry-over
  f063780: 'delist, China, Shenyang', // carry-over
  f063921: 'delist, China, Ili', // carry-over
  f064442: 'delist, Japan', // carry-over
  f064688: 'delist, NR', // carry-over
  f065132: 'delist, Denmark, Vipperod', // carry-over
  f065225: 'delist, China, Dongguan', // carry-over
  f065250: 'delist, NR', // carry-over
  f065259: 'delist, NR', // carry-over
  f065426: 'delist, Korea, Gimpo-si', // carry-over
  f065477: 'delist, NR', // carry-over
  f065689: 'delist, NR', // carry-over
  f065718: 'delist, China, Taiwan, Hsinchu', // carry-over
  f065732: 'delist, Korea, Gyeonggi-do', // carry-over
  f065853: 'delist, Korea, Seongnam-si', // carry-over
  f066075: 'delist, NR', // carry-over
  f066289: 'delist, NR', // carry-over
  f066465: 'delist, NR', // carry-over
  f066566: 'delist, Korea, Gwangju', // carry-over
  f066568: 'delist, Korea, Gwangju, aoc-0002', // carry-over
  f066734: 'delist, NR', // carry-over
  f066804: 'delist, China, Zhejiang', // carry-over
  f066845: 'delist, China, Dongguan', // carry-over
  f067083: 'delist, Russia, Moscow', // carry-over
  f067185: 'delist, Korea, Gwangju', // carry-over
  f067195: 'delist, China, Huizhou', // carry-over
  f067283: 'delist, Korea, Seongnam-si', // carry-over
  f067314: 'delist, China, Ningbo', // carry-over
  f067545: 'delist, Canada, Kitchener', // carry-over
  f068253: 'delist, NR', // carry-over
  f068898: 'delist, China, Fuzhou', // carry-over
  f069450: 'delist, NR', // carry-over
  f069661: 'delist, China, Wuxi', // carry-over
  f070288: 'delist, China, Zhangzhou', // carry-over
  f070337: 'delist, China, Zhangzhou', // carry-over
  f070475: 'delist, China, Guyuan', // carry-over
  f070747: 'delist, China, Shenzhen', // carry-over
  f070756: 'delist, China, Beijing', // carry-over
  f070824: 'delist, China, Taiwan, Hsinchu', // carry-over
  f071114: 'delist, China, Shenyang', // carry-over
  f071190: 'delist, Korea, Gyeonggi-do', // carry-over
  f071692: "delist, China, Xi'an", // carry-over
  f071914: 'delist, China, Beijing', // carry-over
  f072737: 'delist, China, Shanghai', // carry-over
  f073048: 'delist, Korea, Gyeonggi-do', // carry-over
  f073535: 'delist, Korea, Gyeonggi-do', // carry-over
  f073783: 'delist, NR', // carry-over
  f073878: 'delist, NR', // carry-over
  f073931: 'delist, NR', // carry-over
  f078425: 'delist, Korea, Bucheon-si', // carry-over
  f078516: 'delist, NR', // carry-over
  f078770: 'delist, China, Karamay', // carry-over
  f080131: 'delist, NR', // carry-over
  f080945: 'delist, China, Shenzhen', // carry-over
  f081987: 'delist, NR', // carry-over
  f082054: 'delist, China, Hefei', // carry-over
  f082175: 'delist, China, Shenyang', // carry-over
  f082250: 'delist, China, Guilin', // carry-over
  f082543: 'delist, Korea, Osan', // carry-over
  f082590: 'delist, China, Taizhou', // carry-over
  f082669: 'delist, USA, Daytona Beach', // carry-over
  f082698: "delist, USA, Xi'an", // carry-over
  f083235: 'delist, Serbia, Belgrade', // carry-over
  f085226: 'delist, Korea, Busan', // carry-over
  f085415: 'delist, NR', // carry-over
  f085682: 'delist, NR', // carry-over
  f085904: 'delist, China, Chongqing', // carry-over
  f085947: 'delist, NR', // carry-over
  f086450: 'delist, NR', // carry-over
  f086610: 'delist, Korea, Gyeonggi-do', // carry-over
  f087931: 'delist, China, Beijing', // carry-over
  f088305: 'delist, Korea, Gyeonggi-do', // carry-over
  f088404: 'delist, Korea, Gyeonggi-do', // carry-over
  f089201: 'delist, Korea, Gyeonggi-do', // carry-over
  f090052: 'delist, China, Suqian', // carry-over
  f090086: 'delist, Korea', // carry-over
  f090104: 'delist, China, Dongguan', // carry-over
  f090363: 'delist, China, Beijing', // carry-over
  f090747: 'delist, Korea, Anyang-si', // carry-over
  f090851: 'delist, China, Ningxia', // carry-over
  f091095: 'delist, Korea, Gwangju + Buk-gu', // carry-over
  f091139: 'delist, Korea, Gyeonggi-do', // carry-over
  f091355: 'delist, China, Chengdu', // carry-over
  f092516: 'delist, USA, Boardman', // carry-over
  f092630: 'delist, Korea, Gyeonggi-do', // carry-over
  f092724: 'delist, China, Beijing', // carry-over
  f092776: 'delist, Korea, Gimhae', // carry-over
  f092971: 'delist, China, Chongqing', // carry-over
  f093212: 'delist, Netherlands', // carry-over
  f093554: 'delist, China, Zhangzhou', // carry-over
  f094085: 'delist, Japan, Ota-ku', // carry-over
  f094430: 'delist, China, Ordos', // carry-over
  f094675: 'delist, NR', // carry-over
  f094785: 'delist, China, Shanghai', // carry-over
  f094825: 'delist, Korea, Gwangju', // carry-over
  f094869: 'delist, China, Shanghai', // carry-over
  f094894: 'delist, Korea, Gwangju', // carry-over
  f094899: 'delist, Korea', // carry-over
  f095049: 'delist, Korea, Bucheon-si', // carry-over
  f095296: 'delist, China, Suqian', // carry-over
  f095398: 'delist, Korea, Sejong', // carry-over
  f095506: 'delist, China, Ningxia', // carry-over
  f095528: 'delist, China, Hangzhou', // carry-over
  f095833: 'delist, Korea, Yongin-si', // carry-over
  f096224: 'delist, China, Chongqing', // carry-over
  f096976: 'delist, Russia', // carry-over
  f097403: 'delist, NR', // carry-over
  f0106090: 'delist, NR', // carry-over
  f0107118: 'delist, China, Hangzhou + Zhejiang', // carry-over
  f0107171: 'delist, China, Karamay', // carry-over
  f0108979: 'delist, Korea, Bupyeong-gu', // carry-over
  f0109163: 'delist, Korea, Songpa-gu', // carry-over
  f0109349: 'delist, NR', // carry-over
  f0110101: 'delist, Korea, Goyang-si', // carry-over
  f0110198: 'delist, Korea, Hwaseong-si', // carry-over
  f0110488: 'delist, China, Chongqing', // carry-over
  f0110803: 'delist, Korea', // carry-over
  f0112027: 'delist, France', // carry-over
  f0113659: 'delist, NR', // carry-over
  f0113664: 'delist, France', // carry-over
  f0116513: 'delist, NR', // carry-over
  f0116707: 'delist, Germany, Dusseldorf', // carry-over
  f0119336: 'delist, Canada, Ottawa', // carry-over
  f0120141: 'delist, Korea, Gangnam-gu', // carry-over
  f0122815: 'delist, Korea, Bucheon-si, Healthcarenavi_80', // carry-over
  f0124335: 'delist, Finland, Helsinki', // carry-over
  f0125962: 'delist, Korea, Yongin-si', // carry-over
  f0126376: 'delist, NR', // carry-over
  f0126535: 'delist, China, Hong Kong', // carry-over
  f0127151: 'delist, Korea, Yongin-si', // carry-over
  f0127157: 'delist, Korea, Yongin-si', // carry-over
  f0127256: 'delist, Korea, Yongin-si', // carry-over
  f0128191: 'delist, Korea, Gangnam-gu', // carry-over
  f0128238: 'delist, Korea, Yongin-si', // carry-over
  f0128239: 'delist, Korea, Yongin-si', // carry-over
  f0128242: 'delist, Korea, Yongin-si', // carry-over
  f0131359: 'delist, China, Fuzhou', // carry-over
  f0131857: 'delist, China, Chongqing', // carry-over
  f0132765: 'delist, NR', // carry-over
  f0133486: 'delist, China, Shenzhen', // carry-over
  f0135906: 'delist, NR', // carry-over
  f0136425: 'delist, Korea, Busan', // carry-over
  f0137475: 'delist, China, Beijing', // carry-over
  f0144304: 'delist, NR', // carry-over
  f0145018: 'delist, Korea', // carry-over
  f0147676: 'delist, Korea, Seoul', // carry-over
  f0149670: 'delist, NR', // carry-over
  f0149783: 'delist, NR', // carry-over
  f0156232: 'delist, China, Fuzhou', // carry-over
  f0160291: 'delist, USA', // carry-over
  f0164326: 'delist, China, Beijing', // carry-over
  f0165533: 'delist, NR', // carry-over
  f0167458: 'delist, NR', // carry-over
  f0168371: 'delist, Korea, Namyangju', // carry-over
  f0213894: 'delist, China, Hangzhou', // carry-over
  f0214181: 'delist, Australia, Mosman', // carry-over
  f0215360: 'delist, France', // carry-over
  f0215404: 'delist, China, Suzhou', // carry-over
  f0216068: 'delist, Romania, Iasi', // carry-over
  f0216139: 'delist, Korea, Goyang-si', // carry-over
  f0219415: 'delist, USA, Boardman', // carry-over
  f0219631: 'delist, USA, Council Bluffs', // carry-over
  f0220911: 'delist, NR', // carry-over
  f0224599: 'delist, China, Fuzhou', // carry-over
  f0224782: 'delist, USA', // carry-over
  f0225676: 'delist, Korea, Guro-gu', // carry-over
  f0225880: 'delist, NR', // carry-over
  f0226073: 'delist, China, Shenzhen', // carry-over
  f0228335: 'delist, China, Beijing', // carry-over
  f0228350: 'delist, China, Hangzhou', // carry-over
  f0228388: 'delist, USA, Cleveland', // carry-over
  f0228401: 'delist, Japan', // carry-over
  f0229547: 'delist, Japan, Yokohama', // carry-over
  f0230827: 'delist, Korea, Paju', // carry-over
  f0231135: 'delist, USA, Huntersville', // carry-over
  f0231161: 'delist, China, Qujing', // carry-over
  f0232136: 'delist, NR', // carry-over
  f0232358: 'delist, NR', // carry-over
  f0232437: 'delist, NR', // carry-over
  f0239266: 'delist, NR', // carry-over
  f0240893: 'delist, USA, Queens', // carry-over
  f0241022: 'delist, Korea, Geumcheon-gu', // carry-over
  f0241272: 'delist, France, Deuil-la-Barre', // carry-over
  f0241284: 'delist, China, Jiangmen', // carry-over
  f0242152: 'delist, Korea, Guro-gu', // carry-over
  f0242260: 'delist, USA, St. Louis', // carry-over
  f0242345: 'delist, NR', // carry-over
  f0242416: 'delist, USA, Morganville', // carry-over
  f0347476: 'delist, China, Zhengzhou', // carry-over
  f0391370: 'delist, USA, Queens', // carry-over
  f0391520: 'delist, China, Guangzhou', // carry-over
  f0392707: 'delist, Korea, Chuncheon', // carry-over
  f0392712: 'delist, Korea, Ulju-gun', // carry-over
  f0392733: 'delist, USA, Huntersville', // carry-over
  f0393359: 'delist, China, Suzhou', // carry-over
  f0394461: 'delist, Korea, Seoul', // carry-over
  f0395459: 'delist, Korea, Daegu', // carry-over
  f0395461: 'delist, Korea, Suseong-gu', // carry-over
  f0395462: 'delist, Korea, Daegu', // carry-over
  f0395463: 'delist, Korea, Daegu', // carry-over
  f0395472: 'delist, Korea, Daegu', // carry-over
  f0395473: 'delist, Korea, Daegu', // carry-over
  f0397428: 'delist, Japan, Tokyo', // carry-over
  f0397675: 'delist, Korea, Guro-gu', // carry-over
  f0398326: 'delist, China, Jiangmen', // carry-over
  f0398338: 'delist, USA, Cleveland', // carry-over
  f0400681: 'delist, USA, Queens', // carry-over
  f0402314: 'delist, NR', // carry-over
  f0402492: 'delist, NR', // carry-over
  f0402975: 'delist, Korea', // carry-over
  f0403858: 'delist, China, Jiangmen', // carry-over
  f0403896: 'delist, USA, Huntersville', // carry-over
  f0408184: 'delist, Switzerland', // carry-over
  f0408696: 'delist, China, Taiwan, Taipei', // carry-over
  f0410023: 'delist, NR', // carry-over
  f0411786: 'delist, Korea, Busan', // carry-over
  f0413178: 'delist, China, Suqian', // carry-over
  f0414184: 'delist, Spain, Madrid', // carry-over
  f0417748: 'delist, China, Changsha', // carry-over
  f0423713: 'delist, China, Qingdao', // carry-over
  f0424969: 'delist, China, Fuzhou', // carry-over
  f0427967: 'delist, China, Changsha', // carry-over
  f0427994: 'delist, China, Jinhua', // carry-over
  f0427996: 'delist, Canada, Bois-des-Filion', // carry-over
  f0428150: 'delist, China, Xiamen', // carry-over
  f0429006: 'delist, China, Zhangzhou', // carry-over
  f0430997: 'delist, Korea', // carry-over
  f0434480: 'delist, USA, Hummelstown', // carry-over
  f0467217: 'delist, China, Beijing', // carry-over
  f0471266: 'delist, Japan, Ageo', // carry-over
  f0482136: 'delist, China, Fuzhou', // carry-over
  f0490090: 'delist, Korea, Seoul', // carry-over
  f0492222: 'delist, Canada, Vancouver', // carry-over
  f0492283: 'delist, USA, Quail Valley', // carry-over
  f0492295: 'delist, China, Shenzhen', // carry-over
  f0494174: 'delist, Norway', // carry-over
  f0494332: 'delist, Ukraine, Sumy', // carry-over
  f0494586: 'delist, China, Nanchang', // carry-over
  f0497837: 'delist, Korea, Gangnam-gu', // carry-over
  f0498102: 'delist, NR', // carry-over
  f0503423: 'delist, NR', // carry-over
  f0504467: 'delist, Korea, Seoul', // carry-over
  f0507420: 'delist, NR', // carry-over
  f0510010: 'delist, Russia, Shchelkovo', // carry-over
  f0510610: 'delist, China, Shangrao', // carry-over
  f0511480: 'delist, China, Yangzhou', // carry-over
  f0518641: 'delist, China, Hangzhou', // carry-over
  f0522078: 'delist, China, Hangzhou', // carry-over
  f0524517: 'delist, Korea, Uijeongbu-si', // carry-over
  f0524577: 'delist, China, Foshan', // carry-over
  f0524589: 'delist, Korea', // carry-over
  f0524945: 'delist, China, Beijing', // carry-over
  f0587126: 'delist, China, Shenyang', // carry-over
  f0601975: 'delist, Korea, Guro-gu', // carry-over
  f0601980: 'delist, Korea, Seoul', // carry-over
  f0602553: 'delist, China, Suqian', // carry-over
  f0607157: 'delist, China, Jieyang', // carry-over
  f0677977: 'delist, USA, Wenham', // carry-over
  f0697132: 'delist, Korea, Busan', // carry-over
  f0697162: 'delist, Finland, Helsinki', // carry-over
  f0698866: 'delist, Finland, Helsinki', // carry-over
  f0706937: 'delist, Korea, Bucheon-si', // carry-over
  f0715707: 'delist, Japan, Yokohama', // carry-over
  f0718079: 'delist, NR', // carry-over
  f0720716: 'delist, Korea, Seoul', // carry-over
  f0720762: 'delist, Korea, Incheon', // carry-over
  f0721545: 'delist, Korea, Seo-gu', // carry-over
  f0723600: 'delist, China, Taiwan, Hsinchu', // carry-over
  f0724179: 'delist, China, Wenzhou', // carry-over
  f0724192: 'delist, Korea, Hwaseong-si', // carry-over
  f0727067: 'delist, Norway', // carry-over
  f0730529: 'delist, USA, Boardman', // carry-over
  f0732291: 'delist, Korea, Incheon', // carry-over
  f0744199: 'delist, China, Taiwan, Hsinchu', // carry-over
  f0751590: 'delist, USA', // carry-over
  f0751619: 'delist, Korea, Ulsan', // carry-over
  f0752215: 'delist, USA, Huntersville', // carry-over
  f0752458: 'delist, Australia, Sydney', // carry-over
  f0755598: 'delist, Korea, Incheon', // carry-over
  f0755602: 'delist, Korea, Incheon', // carry-over
  f0755605: 'delist, Korea, Incheon', // carry-over
  f0755645: 'delist, Korea, Jung-gu', // carry-over
  f0756242: 'delist, China, Taiwan, Taipei', // carry-over
  f0757509: 'delist, Ukraine, Odessa', // carry-over
  f0758143: 'delist, Canada', // carry-over
  f0758230: 'delist, Korea, Geumcheon-gu', // carry-over
  f0758390: 'delist, USA, Phoenix', // carry-over
  f0761445: 'delist, Ukraine, Odessa', // carry-over
  f0765545: 'delist, China, Hangzhou', // carry-over
  f0808705: 'delist, China, Wenzhou', // carry-over
  f0810358: 'delist, Japan, Tokyo', // carry-over
  f0810756: 'delist, Romania, Bucharest', // carry-over
  f0816232: 'delist, Korea, Seoul', // carry-over
  f0816321: 'delist, NR', // carry-over
  f0816420: 'delist, China, Harbin', // carry-over
  f0818665: 'delist, Romania, Bucharest', // carry-over
  f0822032: 'delist, Korea, Incheon', // carry-over
  f0822203: 'delist, Korea, Seoul', // carry-over
  f0832312: 'delist, USA, Auburn', // carry-over
  f0839767: 'delist, Korea, Suwon', // carry-over
  f0843728: 'delist, France', // carry-over
  f0845602: 'delist, NR', // carry-over
  f0846716: 'delist, USA, Santa Clara', // carry-over
  f0853597: 'delist, Korea, Gimpo-si', // carry-over
  f0857779: 'delist, Korea, Dongjak-gu', // carry-over
  f0859880: "delist, China, Ya'an", // carry-over
  f0866501: 'delist, NR', // carry-over
  f0866680: 'delist, China, Henan', // carry-over
  f0869590: 'delist, USA, Salt Lake City', // carry-over
  f0871928: 'delist, China, Taiwan, Taipei', // carry-over
  f0872002: 'delist, NR', // carry-over
  f0873601: 'delist, Romania, Bucharest', // carry-over
  f0873852: 'delist, China, Yangzhou', // carry-over
  f0875458: 'delist, NR', // carry-over
  f0877555: 'delist, USA, Queens', // carry-over
  f0880167: 'delist, NR', // carry-over
  f0883511: 'delist, Korea, Guro-gu', // carry-over
  f0883732: 'delist, Korea, Yeongdeungpo-gu', // carry-over
  f0884747: 'delist, UK, London', // carry-over
  f0884795: 'delist, NR', // carry-over
  f0885079: 'delist, NR', // carry-over
  f0984163: "delist, China, Ma'anshan", // carry-over
  f0984915: 'delist, China, Tianjin', // carry-over
  f0985013: 'delist, Korea, Incheon', // carry-over
  f0986118: 'delist, Korea, Incheon', // carry-over
  f01015491: 'delist, Canada, Montreal', // carry-over
  f01016847: 'delist, China, Henan', // carry-over
  f01017177: 'delist, Japan, Tokyo', // carry-over
  f01019892: 'delist, USA, Lake Elsinore', // carry-over
  f01021896: 'delist, Korea, Seoul', // carry-over
  f01029201: 'delist, China, Beijing', // carry-over
  f01029682: 'delist, USA, Palm Harbour', // carry-over
  f01031325: 'delist, Korea, Busan', // carry-over
  f01031351: 'delist, USA, Palm Harbour', // carry-over
  f01034337: 'delist, Japan, Tokyo', // carry-over
  f01036391: 'delist, Korea, Jung-gu', // carry-over
  f01037829: 'delist, USA, Palm Harbour', // carry-over
  f01038170: 'delist, China, Shenzhen', // carry-over
  f01040006: 'delist, Korea, Jung-gu', // carry-over
  f01041703: 'delist, China, Taiwan, New Taipei', // carry-over
  f01042552: 'delist, Japan, Tokyo', // carry-over
  f01043023: 'delist, NR', // carry-over
  f01043041: 'delist, Germany, Oberursel', // carry-over
  f01044658: 'delist, USA, Fremont', // carry-over
  f01044820: 'delist, Japan, Tokyo', // carry-over
  f01045592: 'delist, NR', // carry-over
  f01045985: 'delist, Russia', // carry-over
  f01046865: 'delist, China, Shenzhen', // carry-over
  f01048957: 'delist, Korea, Gangnam-gu', // carry-over
  f01060045: 'delist, China, Foshan', // carry-over
  f01060792: 'delist, USA, London', // carry-over
  f01061522: 'delist, NR', // carry-over
  f01062833: 'delist, China, Foshan', // carry-over
  f01063481: 'delist, USA, London', // carry-over
  f01067047: 'delist, China, Foshan', // carry-over
  f01072655: 'delist, Sweden, Gothenburg', // carry-over
  f01080779: 'delist, China, Sichuan', // carry-over
  f01090578: 'delist, Russia, Lipetsk', // carry-over
  f01094066: 'delist, China, Beijing', // carry-over
  f01094788: 'delist, Bulgaria, Sofia', // carry-over
  f01095171: 'delist, USA, Covina', // carry-over
  f01095191: 'delist, USA, Rockledge', // carry-over
  f01096465: 'delist, USA', // carry-over
  f01098845: 'delist, USA', // carry-over
  f01101884: 'delist, NR', // carry-over
  f01103281: 'delist, China, Taizhou', // carry-over
  f01104053: 'delist, USA', // carry-over
  f01104210: 'delist, China, Changsha', // carry-over
  f01106369: 'delist, China, Hangzhou', // carry-over
  f01107129: 'delist, USA', // carry-over
  f01108733: 'delist, China, Jieyang', // carry-over
  f01108749: 'delist, USA', // carry-over
  f01109622: 'delist, Bulgaria, Sofia', // carry-over
  f01110407: 'delist, Bulgaria', // carry-over
  f01112504: 'delist, USA, Gilbert',
  f01112547: 'delist, USA',
  f01113723: 'delist, USA, Gilbert',
  f01114364: 'delist, USA, Allentown',
  f01116725: 'delist, USA, Gilbert',
  f01118185: 'delist, USA, Gilbert',
  f01118563: 'delist, USA, Gilbert',
  f01120547: 'delist, USA, Gilbert'
}

export default annotations
