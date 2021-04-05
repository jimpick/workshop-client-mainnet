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

  // Inflight

  f02388: 'inflight, Netherlands, Amersfoort, Kroketje', // FundsReserved: about 1 hour
  f02416: 'inflight, China, Guangdong, 星际无限', // FundsReserved: about 1 hour
  f02769: 'inflight, NR', // FundsReserved: about 1 hour
  f02770: 'inflight, China, Hong Kong', // FundsReserved: about 1 hour
  f02775: 'inflight, China, Hong Kong', // FundsReserved: about 1 hour
  f02777: 'inflight, NR', // FundsReserved: about 1 hour
  f02778: 'inflight, NR', // FundsReserved: about 1 hour
  f02779: 'inflight, NR', // FundsReserved: about 1 hour
  f03224: 'inflight, Ukraine, Kyiv', // FundsReserved: 22 minutes
  f07749: 'inflight, NR', // FundsReserved: about 1 hour
  f010202: 'inflight, Singapore', // FundsReserved: about 1 hour
  f014335: 'inflight, NR', // FundsReserved: about 1 hour
  f014686: 'inflight, Singapore', // FundsReserved: about 1 hour
  f015877: 'inflight, China, Jiaxing + USA', // FundsReserved: about 1 hour
  f015885: 'inflight, China, Jiaxing', // FundsReserved: about 1 hour
  f015925: 'inflight, Singapore', // FundsReserved: 22 minutes
  f015932: 'inflight, NR', // FundsReserved: about 1 hour
  f018538: 'inflight, China, Huzhou', // FundsReserved: about 1 hour
  f020398: 'inflight, China, Zhangjiakou', // FundsReserved: about 1 hour
  f020957: 'inflight, NR', // FundsReserved: about 1 hour
  f021504: 'inflight, NR', // FundsReserved: about 1 hour
  f021695: 'inflight, USA', // FundsReserved: about 1 hour
  f021704: 'inflight, NR', // FundsReserved: about 1 hour
  f021710: 'inflight, China, Shijiazhuang', // FundsReserved: about 1 hour
  f022030: 'inflight, NR', // FundsReserved: about 1 hour
  f022038: 'inflight, NR', // FundsReserved: about 1 hour
  f022093: 'inflight, NR', // FundsReserved: about 1 hour
  f022336: 'inflight, NR', // FundsReserved: about 1 hour
  f022338: 'inflight, NR', // FundsReserved: about 1 hour
  f022361: 'inflight, NR', // FundsReserved: about 1 hour
  f022373: 'inflight, Singapore', // FundsReserved: about 1 hour
  f022374: 'inflight, NR', // FundsReserved: about 1 hour
  f022804: 'inflight, NR', // FundsReserved: about 1 hour
  f023001: 'inflight, China, Changsha', // FundsReserved: about 2 hours
  f023013: 'inflight, NR', // FundsReserved: about 1 hour
  f023205: 'inflight, Singapore', // FundsReserved: about 2 hours
  f023495: 'inflight, China, Karamay', // FundsReserved: about 1 hour
  f023499: 'inflight, NR', // FundsReserved: about 1 hour
  f023530: 'inflight, China, Shanghai', // FundsReserved: about 2 hours
  f023561: 'inflight, China, Shenzhen', // FundsReserved: about 2 hours
  f023626: 'inflight, NR', // FundsReserved: about 1 hour
  f023627: 'inflight, China, Zhongwei', // FundsReserved: about 1 hour
  f023651: 'inflight, NR', // FundsReserved: about 1 hour
  f023678: 'inflight, China, Jiaxing', // FundsReserved: about 1 hour
  f023843: 'inflight, China, Zhangjiakou', // FundsReserved: about 1 hour
  f023882: 'inflight, NR', // FundsReserved: about 1 hour
  f023984: 'inflight, NR', // FundsReserved: about 1 hour
  f024066: 'inflight, China, Chengdu', // FundsReserved: about 2 hours
  f024089: 'inflight, NR', // FundsReserved: about 2 hours
  f024137: 'inflight, Singapore', // FundsReserved: about 2 hours
  f024182: 'inflight, China, Hong Kong', // FundsReserved: about 2 hours
  f024483: 'inflight, NR', // FundsReserved: about 1 hour
  f024563: 'inflight, NR', // FundsReserved: about 1 hour
  f024802: 'inflight, NR', // FundsReserved: about 1 hour
  f024894: 'inflight, NR', // FundsReserved: about 1 hour
  f024895: 'inflight, undefined', // FundsReserved: about 1 hour
  f024972: 'inflight, undefined', // FundsReserved: about 1 hour
  f025002: 'inflight, NR', // FundsReserved: about 2 hours
  f025005: 'inflight, NR', // FundsReserved: about 1 hour
  f025017: 'inflight, China, Hefei, 一三科技-913', // FundsReserved: about 2 hours
  f025019: 'inflight, China, Taiwan, Hsinchu', // FundsReserved: about 2 hours
  f025044: 'inflight, undefined', // FundsReserved: about 1 hour
  f029416: 'inflight, NR', // FundsReserved: about 2 hours
  f029665: 'inflight, China, Shenyang', // FundsReserved: about 2 hours
  f030203: 'inflight, China, Shenzhen', // FundsReserved: about 1 hour
  f030249: 'inflight, NR', // FundsReserved: 39 minutes
  f030272: 'inflight, undefined', // FundsReserved: 39 minutes
  f030331: 'inflight, NR', // FundsReserved: 39 minutes
  f030347: 'inflight, China, Zhejiang', // FundsReserved: 39 minutes
  f030509: 'inflight, undefined', // FundsReserved: 39 minutes
  f030510: 'inflight, undefined', // FundsReserved: 39 minutes
  f030511: 'inflight, undefined', // FundsReserved: 39 minutes
  f030649: 'inflight, NR', // FundsReserved: 39 minutes
  f032824: 'inflight, USA, Cedar Park', // FundsReserved: about 2 hours
  f032833: 'inflight, NR', // FundsReserved: 39 minutes
  f032850: 'inflight, NR', // FundsReserved: 39 minutes
  f032913: 'inflight, China, Shenzhen', // FundsReserved: 39 minutes
  f033130: 'inflight, NR', // FundsReserved: 39 minutes
  f033384: 'inflight, NR', // FundsReserved: 39 minutes
  f033399: 'inflight, NR', // FundsReserved: 39 minutes
  f033456: 'inflight, NR', // FundsReserved: 39 minutes
  f033462: 'inflight, NR', // FundsReserved: 39 minutes
  f033463: 'inflight, NR', // FundsReserved: 39 minutes
  f033475: 'inflight, NR', // FundsReserved: 39 minutes
  f033501: 'inflight, China, Shenzhen', // FundsReserved: 39 minutes
  f033517: 'inflight, China, Changsha', // FundsReserved: 39 minutes
  f034544: 'inflight, NR', // FundsReserved: about 2 hours
  f034545: 'inflight, NR', // FundsReserved: about 2 hours
  f034548: 'inflight, NR', // FundsReserved: about 2 hours
  f034566: 'inflight, NR', // FundsReserved: 39 minutes
  f034567: 'inflight, China, Shenzhen', // FundsReserved: 39 minutes
  f034581: 'inflight, NR', // FundsReserved: 39 minutes
  f034592: 'inflight, NR', // FundsReserved: about 2 hours
  f034658: 'inflight, NR', // FundsReserved: 39 minutes
  f034701: 'inflight, China, Shenzhen', // FundsReserved: about 2 hours
  f034707: 'inflight, NR', // FundsReserved: 39 minutes
  f034710: 'inflight, NR', // FundsReserved: 39 minutes
  f035160: 'inflight, NR', // FundsReserved: 39 minutes
  f035161: 'inflight, NR', // FundsReserved: 39 minutes
  f035364: 'inflight, NR', // FundsReserved: 39 minutes
  f039992: 'inflight, NR', // FundsReserved: 39 minutes
  f040665: 'inflight, NR', // FundsReserved: 39 minutes
  f042855: 'inflight, NR', // FundsReserved: 39 minutes
  f043376: 'inflight, Korea, Incheon', // FundsReserved: 39 minutes
  f043929: 'inflight, NR', // FundsReserved: about 2 hours
  f044315: 'inflight, NR', // FundsReserved: 39 minutes
  f045505: 'inflight, China, Ordos', // FundsReserved: about 2 hours
  f045743: 'inflight, NR', // FundsReserved: 39 minutes
  f045756: 'inflight, China, Hangzhou', // FundsReserved: 39 minutes
  f046248: 'inflight, China, Dongguan', // FundsReserved: 38 minutes
  f048975: 'inflight, NR', // FundsReserved: 38 minutes
  f048986: 'inflight, NR', // FundsReserved: 38 minutes
  f049911: 'inflight, China, Yunfu', // FundsReserved: 38 minutes
  f053140: 'inflight, China, Shenzhen', // FundsReserved: 38 minutes
  f053141: 'inflight, China, Shenzhen', // FundsReserved: 38 minutes
  f053173: 'inflight, NR', // FundsReserved: 38 minutes
  f053229: 'inflight, NR', // FundsReserved: about 2 hours
  f053446: 'inflight, NR', // FundsReserved: 38 minutes
  f054120: 'inflight, NR', // FundsReserved: 38 minutes
  f054267: 'inflight, NR', // FundsReserved: 38 minutes
  f054412: 'inflight, NR', // FundsReserved: 38 minutes
  f054414: 'inflight, NR', // FundsReserved: 38 minutes
  f054417: 'inflight, NR', // FundsReserved: 38 minutes
  f054418: 'inflight, NR', // FundsReserved: 38 minutes
  f054420: 'inflight, NR', // FundsReserved: 38 minutes
  f054422: 'inflight, NR', // FundsReserved: 38 minutes
  f054464: 'inflight, NR', // FundsReserved: 38 minutes
  f054499: 'inflight, NR', // FundsReserved: about 2 hours
  f054526: 'inflight, NR', // FundsReserved: 38 minutes
  f054666: 'inflight, China, Changsha', // FundsReserved: about 2 hours
  f055123: 'inflight, Korea, Busan', // FundsReserved: 38 minutes
  f055446: 'inflight, NR', // FundsReserved: 38 minutes
  f055522: 'inflight, USA', // FundsReserved: 22 minutes
  f056227: 'inflight, NR', // FundsReserved: 38 minutes
  f057070: 'inflight, NR', // FundsReserved: about 1 hour
  f057618: 'inflight, NR', // FundsReserved: 38 minutes
  f057683: 'inflight, NR', // FundsReserved: 38 minutes
  f058349: 'inflight, NR', // FundsReserved: 38 minutes
  f058374: 'inflight, NR', // FundsReserved: about 1 hour
  f059740: 'inflight, Germany, Bottrop', // FundsReserved: about 1 hour
  f059788: 'inflight, China, Zhanjiang', // FundsReserved: 38 minutes
  f059813: 'inflight, NR', // FundsReserved: 38 minutes
  f060114: 'inflight, China, Shenzhen', // FundsReserved: 38 minutes
  f060693: 'inflight, NR', // FundsReserved: 38 minutes
  f060754: 'inflight, NR', // FundsReserved: 38 minutes
  f060805: 'inflight, NR', // FundsReserved: 38 minutes
  f060975: 'inflight, NR', // FundsReserved: 38 minutes
  f061051: 'inflight, NR', // FundsReserved: 38 minutes
  f061170: 'inflight, NR', // FundsReserved: 38 minutes
  f061174: 'inflight, NR', // FundsReserved: 38 minutes
  f061407: 'inflight, China, Shenzhen', // FundsReserved: 38 minutes
  f061503: 'inflight, NR', // FundsReserved: 38 minutes
  f061959: 'inflight, NR', // FundsReserved: about 1 hour
  f062245: 'inflight, NR', // FundsReserved: 38 minutes
  f062475: 'inflight, NR', // FundsReserved: 38 minutes
  f062619: 'inflight, NR', // FundsReserved: 38 minutes
  f062931: 'inflight, NR', // FundsReserved: about 1 hour
  f063996: 'inflight, China, Sichuan', // FundsReserved: 38 minutes
  f064855: 'inflight, NR', // FundsReserved: 38 minutes
  f064908: 'inflight, NR', // FundsReserved: 38 minutes
  f065113: 'inflight, NR', // FundsReserved: 37 minutes
  f065141: 'inflight, NR', // FundsReserved: 37 minutes
  f065174: 'inflight, NR', // FundsReserved: 37 minutes
  f065266: 'inflight, China, Hefei', // FundsReserved: 37 minutes
  f065391: 'inflight, NR', // FundsReserved: 37 minutes
  f065578: 'inflight, NR', // FundsReserved: 37 minutes
  f065610: 'inflight, NR', // FundsReserved: 37 minutes
  f065670: 'inflight, NR', // FundsReserved: 37 minutes
  f065686: 'inflight, NR', // FundsReserved: 37 minutes
  f065881: 'inflight, NR', // FundsReserved: 37 minutes
  f065941: 'inflight, NR', // FundsReserved: 37 minutes
  f066102: 'inflight, NR', // FundsReserved: about 1 hour
  f066210: 'inflight, NR', // FundsReserved: 37 minutes
  f066259: 'inflight, NR', // FundsReserved: about 1 hour
  f066302: 'inflight, NR', // FundsReserved: 37 minutes
  f066476: 'inflight, NR', // FundsReserved: 37 minutes
  f066563: 'inflight, NR', // FundsReserved: 37 minutes
  f067170: 'inflight, NR', // FundsReserved: 37 minutes
  f067375: 'inflight, NR', // FundsReserved: 37 minutes
  f067598: 'inflight, NR', // FundsReserved: 37 minutes
  f068096: 'inflight, China, Sichuan', // FundsReserved: about 1 hour
  f068556: 'inflight, NR', // FundsReserved: 37 minutes
  f068560: 'inflight, China, Changsha', // FundsReserved: 37 minutes
  f068809: 'inflight, NR', // FundsReserved: 37 minutes
  f069391: 'inflight, NR', // FundsReserved: about 1 hour
  f069448: 'inflight, NR', // FundsReserved: 37 minutes
  f070044: 'inflight, China', // FundsReserved: about 1 hour
  f070045: 'inflight, NR', // FundsReserved: 37 minutes
  f070730: 'inflight, NR', // FundsReserved: 37 minutes
  f070802: 'inflight, NR', // FundsReserved: 37 minutes
  f070803: 'inflight, NR', // FundsReserved: 37 minutes
  f070932: 'inflight, NR', // FundsReserved: 37 minutes
  f071287: 'inflight, NR', // FundsReserved: 37 minutes
  f071664: 'inflight, China, Shangdong', // FundsReserved: about 1 hour
  f073196: 'inflight, NR', // FundsReserved: 37 minutes
  f073525: 'inflight, NR', // FundsReserved: 37 minutes
  f073844: 'inflight, NR', // FundsReserved: 37 minutes
  f073888: 'inflight, NR', // FundsReserved: 37 minutes
  f073904: 'inflight, NR', // FundsReserved: 37 minutes
  f077761: 'inflight, NR', // FundsReserved: 37 minutes
  f078465: 'inflight, NR', // FundsReserved: 37 minutes
  f079092: 'inflight, NR', // FundsReserved: 37 minutes
  f079197: 'inflight, China, Karamay', // FundsReserved: 37 minutes
  f079285: 'inflight, NR', // FundsReserved: about 1 hour
  f079425: 'inflight, NR', // FundsReserved: 37 minutes
  f079426: 'inflight, China, Shandong', // FundsReserved: about 1 hour
  f079719: 'inflight, NR', // FundsReserved: 37 minutes
  f080605: 'inflight, NR', // FundsReserved: about 1 hour
  f080868: 'inflight, NR', // FundsReserved: 37 minutes
  f081078: 'inflight, Korea, Busan', // FundsReserved: about 1 hour
  f081969: 'inflight, NR', // FundsReserved: 37 minutes
  f082000: 'inflight, NR', // FundsReserved: 37 minutes
  f082635: 'inflight, NR', // FundsReserved: 37 minutes
  f082730: 'inflight, NR', // FundsReserved: 36 minutes
  f082958: 'inflight, NR', // FundsReserved: about 1 hour
  f083419: 'inflight, NR', // FundsReserved: 36 minutes
  f083474: 'inflight, NR', // FundsReserved: 36 minutes
  f083542: 'inflight, NR', // FundsReserved: 36 minutes
  f083983: 'inflight, NR', // FundsReserved: 36 minutes
  f084135: 'inflight, NR', // FundsReserved: 36 minutes
  f084155: 'inflight, NR', // FundsReserved: 36 minutes
  f084419: 'inflight, NR', // FundsReserved: 36 minutes
  f084907: 'inflight, NR', // FundsReserved: 36 minutes
  f085435: 'inflight, NR', // FundsReserved: 36 minutes
  f085437: 'inflight, NR', // FundsReserved: 36 minutes
  f085486: 'inflight, NR', // FundsReserved: 36 minutes
  f085735: "inflight, China, Ya'an", // FundsReserved: 36 minutes
  f086204: 'inflight, NR', // FundsReserved: 36 minutes
  f086222: 'inflight, NR', // FundsReserved: 36 minutes
  f086240: 'inflight, NR', // FundsReserved: 36 minutes
  f086381: 'inflight, NR', // FundsReserved: 36 minutes
  f086439: 'inflight, NR', // FundsReserved: 36 minutes
  f086442: 'inflight, NR', // FundsReserved: 36 minutes
  f086572: 'inflight, NR', // FundsReserved: 36 minutes
  f086988: 'inflight, NR', // FundsReserved: 36 minutes
  f087096: 'inflight, NR', // FundsReserved: 36 minutes
  f087256: 'inflight, China, Hangzhou', // FundsReserved: 36 minutes
  f087868: 'inflight, NR', // FundsReserved: 36 minutes
  f087879: 'inflight, NR', // FundsReserved: 36 minutes
  f087899: 'inflight, NR', // FundsReserved: 36 minutes
  f087965: 'inflight, China, Suzhou', // FundsReserved: about 1 hour
  f087999: 'inflight, NR', // FundsReserved: 36 minutes
  f088002: 'inflight, NR', // FundsReserved: 36 minutes
  f088125: 'inflight, NR', // FundsReserved: about 1 hour
  f088171: 'inflight, NR', // FundsReserved: 36 minutes
  f088290: 'inflight, NR', // FundsReserved: 36 minutes
  f088400: 'inflight, NR', // FundsReserved: about 1 hour
  f089167: 'inflight, NR', // FundsReserved: 36 minutes
  f089168: 'inflight, NR', // FundsReserved: 36 minutes
  f089173: 'inflight, NR', // FundsReserved: about 1 hour
  f089228: 'inflight, NR', // FundsReserved: about 1 hour
  f089358: 'inflight, NR', // FundsReserved: about 1 hour
  f089380: 'inflight, NR', // FundsReserved: about 1 hour
  f089551: 'inflight, NR', // FundsReserved: about 1 hour
  f089819: 'inflight, NR', // FundsReserved: 36 minutes
  f089920: 'inflight, NR', // FundsReserved: 36 minutes
  f090481: 'inflight, NR', // FundsReserved: 36 minutes
  f090484: 'inflight, NR', // FundsReserved: 36 minutes
  f090492: 'inflight, NR', // FundsReserved: 36 minutes
  f090808: 'inflight, NR', // FundsReserved: 36 minutes
  f090889: 'inflight, NR', // FundsReserved: 36 minutes
  f091143: 'inflight, NR', // FundsReserved: 36 minutes
  f091243: 'inflight, NR', // FundsReserved: 36 minutes
  f091395: 'inflight, NR', // FundsReserved: 36 minutes
  f091798: 'inflight, NR', // FundsReserved: 35 minutes
  f091959: 'inflight, NR', // FundsReserved: 35 minutes
  f091996: 'inflight, NR', // FundsReserved: 35 minutes
  f091999: 'inflight, NR', // FundsReserved: 35 minutes
  f092066: 'inflight, NR', // FundsReserved: 35 minutes
  f092157: 'inflight, NR', // FundsReserved: 35 minutes
  f092228: 'inflight, NR', // FundsReserved: 35 minutes
  f092887: 'inflight, NR', // FundsReserved: 35 minutes
  f093115: 'inflight, NR', // FundsReserved: 35 minutes
  f093144: 'inflight, NR', // FundsReserved: 35 minutes
  f093686: 'inflight, NR', // FundsReserved: 35 minutes
  f093701: 'inflight, NR', // FundsReserved: 35 minutes
  f093907: 'inflight, NR', // FundsReserved: 35 minutes
  f094003: 'inflight, NR', // FundsReserved: 35 minutes
  f094625: 'inflight, NR', // FundsReserved: 35 minutes
  f094765: 'inflight, NR', // FundsReserved: about 1 hour
  f094847: 'inflight, NR', // FundsReserved: 35 minutes
  f094901: 'inflight, Korea, Bucheon-si', // FundsReserved: about 1 hour
  f095334: 'inflight, NR', // FundsReserved: 35 minutes
  f095382: 'inflight, China, Dongguan', // FundsReserved: about 1 hour
  f095970: 'inflight, NR', // FundsReserved: 35 minutes
  f095998: 'inflight, NR', // FundsReserved: 35 minutes
  f096064: 'inflight, NR', // FundsReserved: 35 minutes
  f096072: 'inflight, NR', // FundsReserved: 35 minutes
  f096077: 'inflight, NR', // FundsReserved: 35 minutes
  f096087: 'inflight, NR', // FundsReserved: 35 minutes
  f096172: 'inflight, NR', // FundsReserved: 35 minutes
  f096173: 'inflight, Korea, Gangnam-gu', // FundsReserved: about 1 hour
  f096824: 'inflight, NR', // FundsReserved: 35 minutes
  f096920: 'inflight, NR', // FundsReserved: 35 minutes
  f097182: 'inflight, China, Chengdu', // FundsReserved: about 1 hour
  f097219: 'inflight, NR', // FundsReserved: 35 minutes
  f097403: 'inflight, NR', // FundsReserved: 35 minutes
  f097432: 'inflight, NR', // FundsReserved: 35 minutes
  f097658: 'inflight, NR', // FundsReserved: 21 minutes
  f097687: 'inflight, China, Yangzhou', // FundsReserved: about 1 hour
  f097840: 'inflight, NR', // FundsReserved: 35 minutes
  f097981: 'inflight, NR', // FundsReserved: 35 minutes
  f098743: 'inflight, NR', // FundsReserved: 35 minutes
  f099082: 'inflight, NR', // FundsReserved: 35 minutes
  f099132: 'inflight, NR', // FundsReserved: 34 minutes
  f099239: 'inflight, China, Hong Kong', // FundsReserved: 34 minutes
  f099247: 'inflight, NR', // FundsReserved: 34 minutes
  f099369: 'inflight, NR', // FundsReserved: 34 minutes
  f099884: 'inflight, China, Chengdu', // FundsReserved: 34 minutes
  f099949: 'inflight, China, Chengdu', // FundsReserved: about 1 hour
  f0100033: 'inflight, NR', // FundsReserved: 34 minutes
  f0100034: 'inflight, NR', // FundsReserved: 34 minutes
  f0100786: 'inflight, NR', // FundsReserved: 34 minutes
  f0101016: 'inflight, NR', // FundsReserved: 34 minutes
  f0101017: 'inflight, NR', // FundsReserved: 34 minutes
  f0101018: 'inflight, NR', // FundsReserved: 34 minutes
  f0101019: 'inflight, NR', // FundsReserved: 34 minutes
  f0101133: 'inflight, NR', // FundsReserved: 34 minutes
  f0101403: 'inflight, China, Chengdu', // FundsReserved: about 1 hour
  f0101570: 'inflight, NR', // FundsReserved: 34 minutes
  f0101611: 'inflight, NR', // FundsReserved: 34 minutes
  f0102187: 'inflight, NR', // FundsReserved: 34 minutes
  f0103162: 'inflight, NR', // FundsReserved: 34 minutes
  f0103282: 'inflight, NR', // FundsReserved: 34 minutes
  f0103396: 'inflight, China, Hangzhou', // FundsReserved: about 1 hour
  f0103485: 'inflight, NR', // FundsReserved: 34 minutes
  f0103665: 'inflight, NR', // FundsReserved: 33 minutes
  f0103704: 'inflight, NR', // FundsReserved: 33 minutes
  f0104001: 'inflight, NR', // FundsReserved: 33 minutes
  f0104103: 'inflight, NR', // FundsReserved: 33 minutes
  f0104398: 'inflight, NR', // FundsReserved: 33 minutes
  f0104654: 'inflight, NR', // FundsReserved: 33 minutes
  f0104888: 'inflight, NR', // FundsReserved: 33 minutes
  f0105354: 'inflight, NR', // FundsReserved: 33 minutes
  f0106090: 'inflight, NR', // FundsReserved: 33 minutes
  f0106438: 'inflight, NR', // FundsReserved: 33 minutes
  f0106901: 'inflight, NR', // FundsReserved: 33 minutes
  f0107002: 'inflight, NR', // FundsReserved: 33 minutes
  f0107053: 'inflight, NR', // FundsReserved: 33 minutes
  f0107091: 'inflight, NR', // FundsReserved: 33 minutes
  f0107536: 'inflight, China, Bozhou', // FundsReserved: about 1 hour
  f0107543: 'inflight, NR', // FundsReserved: 33 minutes
  f0107656: 'inflight, NR', // FundsReserved: 33 minutes
  f0107797: 'inflight, NR', // FundsReserved: 33 minutes
  f0107903: 'inflight, NR', // FundsReserved: 33 minutes
  f0108199: 'inflight, NR', // FundsReserved: 33 minutes
  f0108672: 'inflight, NR', // FundsReserved: 33 minutes
  f0109309: 'inflight, NR', // FundsReserved: 33 minutes
  f0109606: 'inflight, NR', // FundsReserved: 33 minutes
  f0109743: 'inflight, China, Yangzhou', // FundsReserved: about 1 hour
  f0109903: 'inflight, NR', // FundsReserved: 33 minutes
  f0110110: 'inflight, NR', // FundsReserved: 33 minutes
  f0110248: 'inflight, NR', // FundsReserved: 33 minutes
  f0110261: 'inflight, NR', // FundsReserved: 33 minutes
  f0110289: 'inflight, NR', // FundsReserved: 33 minutes
  f0110695: 'inflight, NR', // FundsReserved: 33 minutes
  f0110696: 'inflight, NR', // FundsReserved: 32 minutes
  f0110768: 'inflight, Korea, Gwangju', // FundsReserved: about 1 hour
  f0110803: 'inflight, Korea', // FundsReserved: about 1 hour
  f0110808: 'inflight, NR', // FundsReserved: 32 minutes
  f0110944: 'inflight, NR', // FundsReserved: 32 minutes
  f0110996: 'inflight, NR', // FundsReserved: 32 minutes
  f0111007: 'inflight, NR', // FundsReserved: 32 minutes
  f0111384: 'inflight, NR', // FundsReserved: 32 minutes
  f0111434: 'inflight, NR', // FundsReserved: 32 minutes
  f0111467: 'inflight, NR', // FundsReserved: 32 minutes
  f0111469: 'inflight, NR', // FundsReserved: 32 minutes
  f0111499: 'inflight, China, Chengdu', // FundsReserved: about 1 hour
  f0111584: 'inflight, NR', // FundsReserved: about 1 hour
  f0112027: 'inflight, France', // FundsReserved: about 1 hour
  f0112593: 'inflight, NR', // FundsReserved: 32 minutes
  f0112667: 'inflight, NR', // FundsReserved: 32 minutes
  f0112680: 'inflight, NR', // FundsReserved: 32 minutes
  f0112762: 'inflight, NR', // FundsReserved: 32 minutes
  f0112781: 'inflight, NR', // FundsReserved: 32 minutes
  f0112887: 'inflight, NR', // FundsReserved: 32 minutes
  f0113659: 'inflight, NR', // FundsReserved: 32 minutes
  f0113664: 'inflight, France', // FundsReserved: about 1 hour
  f0113735: 'inflight, NR', // FundsReserved: 32 minutes
  f0113754: 'inflight, NR', // FundsReserved: 32 minutes
  f0113777: 'inflight, NR', // FundsReserved: 32 minutes
  f0114118: 'inflight, NR', // FundsReserved: 32 minutes
  f0114153: 'inflight, China, Changsha + Dazhou', // FundsReserved: about 1 hour
  f0114333: 'inflight, NR', // FundsReserved: 32 minutes
  f0114338: 'inflight, China, Maoming', // FundsReserved: about 1 hour
  f0114350: 'inflight, NR', // FundsReserved: 32 minutes
  f0114868: 'inflight, NR', // FundsReserved: 32 minutes
  f0114885: 'inflight, NR', // FundsReserved: 32 minutes
  f0115001: 'inflight, NR', // FundsReserved: 32 minutes
  f0115117: 'inflight, NR', // FundsReserved: 32 minutes
  f0115990: 'inflight, Korea, Gangnam-gu', // FundsReserved: about 1 hour
  f0116211: 'inflight, China, Weifang', // FundsReserved: about 1 hour
  f0116287: 'inflight, China, Shanghai', // FundsReserved: about 1 hour
  f0116766: 'inflight, USA, Westford', // FundsReserved: about 1 hour
  f0117318: 'inflight, NR', // FundsReserved: 32 minutes
  f0117358: 'inflight, NR', // FundsReserved: 32 minutes
  f0117405: 'inflight, NR', // FundsReserved: 32 minutes
  f0117416: 'inflight, NR', // FundsReserved: 32 minutes
  f0117434: 'inflight, NR', // FundsReserved: 32 minutes
  f0117450: 'inflight, NR', // FundsReserved: 32 minutes
  f0117541: 'inflight, NR', // FundsReserved: 32 minutes
  f0117542: 'inflight, NR', // FundsReserved: 32 minutes
  f0117543: 'inflight, NR', // FundsReserved: 32 minutes
  f0117565: 'inflight, NR', // FundsReserved: 32 minutes
  f0118028: 'inflight, NR', // FundsReserved: 32 minutes
  f0118167: 'inflight, NR', // FundsReserved: 32 minutes
  f0118641: 'inflight, NR', // FundsReserved: 32 minutes
  f0118769: 'inflight, China, Fujian', // FundsReserved: 32 minutes
  f0118799: 'inflight, NR', // FundsReserved: 31 minutes
  f0118976: 'inflight, NR', // FundsReserved: 31 minutes
  f0119146: 'inflight, NR', // FundsReserved: 31 minutes
  f0119545: 'inflight, NR', // FundsReserved: 31 minutes
  f0119633: 'inflight, NR', // FundsReserved: about 1 hour
  f0119828: 'inflight, NR', // FundsReserved: 31 minutes
  f0119976: 'inflight, NR', // FundsReserved: 31 minutes
  f0119997: 'inflight, NR', // FundsReserved: 31 minutes
  f0120057: 'inflight, NR', // FundsReserved: 31 minutes
  f0120702: 'inflight, NR', // FundsReserved: 31 minutes
  f0120747: 'inflight, NR', // FundsReserved: 31 minutes
  f0121584: 'inflight, NR', // FundsReserved: 31 minutes
  f0121718: 'inflight, NR', // FundsReserved: 31 minutes
  f0121771: 'inflight, NR', // FundsReserved: 31 minutes
  f0121810: 'inflight, NR', // FundsReserved: 31 minutes
  f0122215: 'inflight, NR', // FundsReserved: 31 minutes
  f0122382: 'inflight, NR', // FundsReserved: 31 minutes
  f0122410: 'inflight, China, Shanghai', // FundsReserved: about 1 hour
  f0122496: 'inflight, NR', // FundsReserved: 31 minutes
  f0122533: 'inflight, NR', // FundsReserved: 31 minutes
  f0122940: 'inflight, NR', // FundsReserved: 31 minutes
  f0123245: 'inflight, NR', // FundsReserved: 31 minutes
  f0123261: 'inflight, NR', // FundsReserved: 31 minutes
  f0123346: 'inflight, NR', // FundsReserved: 31 minutes
  f0123522: 'inflight, NR', // FundsReserved: 31 minutes
  f0123535: 'inflight, NR', // FundsReserved: 30 minutes
  f0124126: 'inflight, NR', // FundsReserved: 30 minutes
  f0124158: 'inflight, NR', // FundsReserved: 30 minutes
  f0124696: 'inflight, NR', // FundsReserved: about 1 hour
  f0124923: 'inflight, NR', // FundsReserved: 30 minutes
  f0124944: 'inflight, NR', // FundsReserved: 30 minutes
  f0125488: 'inflight, NR', // FundsReserved: 30 minutes
  f0126097: 'inflight, NR', // FundsReserved: 30 minutes
  f0126376: 'inflight, NR', // FundsReserved: 30 minutes
  f0126478: 'inflight, China, Ningbo', // FundsReserved: 30 minutes
  f0126661: 'inflight, NR', // FundsReserved: 30 minutes
  f0126698: 'inflight, NR', // FundsReserved: 30 minutes
  f0126702: 'inflight, NR', // FundsReserved: 30 minutes
  f0126898: 'inflight, China, Harbin', // FundsReserved: 30 minutes
  f0127378: 'inflight, NR', // FundsReserved: 30 minutes
  f0127382: 'inflight, NR', // FundsReserved: 30 minutes
  f0127569: 'inflight, NR', // FundsReserved: 30 minutes
  f0127595: 'inflight, NR', // FundsReserved: 30 minutes
  f0127612: 'inflight, NR', // FundsReserved: 30 minutes
  f0127640: 'inflight, NR', // FundsReserved: 30 minutes
  f0127721: 'inflight, NR', // FundsReserved: 30 minutes
  f0127735: 'inflight, NR', // FundsReserved: 30 minutes
  f0128011: 'inflight, NR', // FundsReserved: 30 minutes
  f0128381: 'inflight, NR', // FundsReserved: 30 minutes
  f0128499: 'inflight, NR', // FundsReserved: 30 minutes
  f0128559: 'inflight, NR', // FundsReserved: 30 minutes
  f0128761: 'inflight, NR', // FundsReserved: 30 minutes
  f0128788: 'inflight, NR', // FundsReserved: 30 minutes
  f0128815: 'inflight, NR', // FundsReserved: 30 minutes
  f0128931: 'inflight, NR', // FundsReserved: 30 minutes
  f0129226: 'inflight, NR', // FundsReserved: 30 minutes
  f0129403: 'inflight, NR', // FundsReserved: 30 minutes
  f0129422: 'inflight, NR', // FundsReserved: 30 minutes
  f0129750: 'inflight, NR', // FundsReserved: 30 minutes
  f0130094: 'inflight, NR', // FundsReserved: 30 minutes
  f0130134: 'inflight, NR', // FundsReserved: 30 minutes
  f0130556: 'inflight, NR', // FundsReserved: 30 minutes
  f0130639: 'inflight, NR', // FundsReserved: 30 minutes
  f0130686: 'inflight, NR', // FundsReserved: 30 minutes
  f0130727: 'inflight, NR', // FundsReserved: 30 minutes
  f0130791: 'inflight, NR', // FundsReserved: 30 minutes
  f0130884: 'inflight, NR', // FundsReserved: 29 minutes
  f0130906: 'inflight, NR', // FundsReserved: 29 minutes
  f0131509: 'inflight, NR', // FundsReserved: 29 minutes
  f0131767: 'inflight, NR', // FundsReserved: 29 minutes
  f0131822: 'inflight, NR', // FundsReserved: 29 minutes
  f0132178: 'inflight, China, Ningbo', // FundsReserved: 29 minutes
  f0132313: 'inflight, NR', // FundsReserved: 29 minutes
  f0132461: 'inflight, Korea, Daegu', // FundsReserved: about 1 hour
  f0132618: 'inflight, NR', // FundsReserved: 29 minutes
  f0132638: 'inflight, NR', // FundsReserved: 29 minutes
  f0132706: 'inflight, China, Beijing', // FundsReserved: 29 minutes
  f0133235: 'inflight, NR', // FundsReserved: 29 minutes
  f0133376: 'inflight, NR', // FundsReserved: 29 minutes
  f0133501: 'inflight, NR', // FundsReserved: 29 minutes
  f0133505: 'inflight, NR', // FundsReserved: 29 minutes
  f0133509: 'inflight, NR', // FundsReserved: 29 minutes
  f0133763: 'inflight, NR', // FundsReserved: 29 minutes
  f0133833: 'inflight, NR', // FundsReserved: 29 minutes
  f0133957: 'inflight, NR', // FundsReserved: about 1 hour
  f0134006: 'inflight, NR', // FundsReserved: about 1 hour
  f0134286: 'inflight, NR', // FundsReserved: 29 minutes
  f0134552: 'inflight, NR', // FundsReserved: 29 minutes
  f0134609: 'inflight, NR', // FundsReserved: 29 minutes
  f0134867: 'inflight, NR', // FundsReserved: 29 minutes
  f0135008: 'inflight, NR', // FundsReserved: 29 minutes
  f0135066: 'inflight, NR', // FundsReserved: 29 minutes
  f0135150: 'inflight, NR', // FundsReserved: 29 minutes
  f0135414: 'inflight, NR', // FundsReserved: 29 minutes
  f0135467: 'inflight, NR', // FundsReserved: 29 minutes
  f0135469: 'inflight, NR', // FundsReserved: 29 minutes
  f0135473: 'inflight, NR', // FundsReserved: 29 minutes
  f0135474: 'inflight, NR', // FundsReserved: 29 minutes
  f0135475: 'inflight, NR', // FundsReserved: 29 minutes
  f0135551: 'inflight, NR', // FundsReserved: 29 minutes
  f0135758: 'inflight, NR', // FundsReserved: about 1 hour
  f0135779: 'inflight, NR', // FundsReserved: 29 minutes
  f0135859: 'inflight, NR', // FundsReserved: 29 minutes
  f0135906: 'inflight, NR', // FundsReserved: 29 minutes
  f0135934: 'inflight, NR', // FundsReserved: 29 minutes
  f0136033: 'inflight, NR', // FundsReserved: 29 minutes
  f0136239: 'inflight, NR', // FundsReserved: 29 minutes
  f0136399: 'inflight, NR', // FundsReserved: 29 minutes
  f0136642: 'inflight, NR', // FundsReserved: 29 minutes
  f0136808: 'inflight, NR', // FundsReserved: 29 minutes
  f0136810: 'inflight, NR', // FundsReserved: 28 minutes
  f0136868: 'inflight, NR', // FundsReserved: 28 minutes
  f0137019: 'inflight, NR', // FundsReserved: 28 minutes
  f0137594: 'inflight, NR', // FundsReserved: 28 minutes
  f0137868: 'inflight, NR', // FundsReserved: 28 minutes
  f0141761: 'inflight, NR', // FundsReserved: 28 minutes
  f0141762: 'inflight, NR', // FundsReserved: 28 minutes
  f0142059: 'inflight, NR', // FundsReserved: 28 minutes
  f0142238: 'inflight, NR', // FundsReserved: 28 minutes
  f0142245: 'inflight, NR', // FundsReserved: 28 minutes
  f0142281: 'inflight, NR', // FundsReserved: 28 minutes
  f0142337: 'inflight, NR', // FundsReserved: 28 minutes
  f0142720: 'inflight, NR', // FundsReserved: 28 minutes
  f0142721: 'inflight, NR', // FundsReserved: 28 minutes
  f0142723: 'inflight, NR', // FundsReserved: 28 minutes
  f0143032: 'inflight, NR', // FundsReserved: 28 minutes
  f0143160: 'inflight, China, Ningbo', // FundsReserved: 28 minutes
  f0143162: 'inflight, NR', // FundsReserved: 28 minutes
  f0143361: 'inflight, NR', // FundsReserved: 28 minutes
  f0143511: 'inflight, NR', // FundsReserved: 28 minutes
  f0143666: 'inflight, NR', // FundsReserved: 28 minutes
  f0143858: 'inflight, USA, Calistoga', // FundsReserved: about 1 hour
  f0143907: 'inflight, NR', // FundsReserved: 28 minutes
  f0143999: 'inflight, NR', // FundsReserved: 28 minutes
  f0144069: 'inflight, NR', // FundsReserved: 28 minutes
  f0144304: 'inflight, NR', // FundsReserved: 28 minutes
  f0144314: 'inflight, NR', // FundsReserved: 28 minutes
  f0144316: 'inflight, NR', // FundsReserved: 28 minutes
  f0144528: 'inflight, NR', // FundsReserved: 28 minutes
  f0144530: 'inflight, NR', // FundsReserved: 28 minutes
  f0144615: 'inflight, NR', // FundsReserved: 28 minutes
  f0144618: 'inflight, NR', // FundsReserved: 28 minutes
  f0144724: 'inflight, USA, Los Angeles', // FundsReserved: about 1 hour
  f0144756: 'inflight, NR', // FundsReserved: 28 minutes
  f0144952: 'inflight, NR', // FundsReserved: 28 minutes
  f0145060: 'inflight, NR', // FundsReserved: 28 minutes
  f0145249: 'inflight, NR', // FundsReserved: 28 minutes
  f0145503: 'inflight, NR', // FundsReserved: 28 minutes
  f0145687: 'inflight, NR', // FundsReserved: 28 minutes
  f0145985: 'inflight, NR', // FundsReserved: 28 minutes
  f0145986: 'inflight, NR', // FundsReserved: 27 minutes
  f0146220: 'inflight, NR', // FundsReserved: 27 minutes
  f0146224: 'inflight, NR', // FundsReserved: 27 minutes
  f0146278: 'inflight, NR', // FundsReserved: 27 minutes
  f0146956: 'inflight, NR', // FundsReserved: 27 minutes
  f0147119: 'inflight, NR', // FundsReserved: 27 minutes
  f0147214: 'inflight, NR', // FundsReserved: 27 minutes
  f0147586: 'inflight, NR', // FundsReserved: 27 minutes
  f0147657: 'inflight, NR', // FundsReserved: 27 minutes
  f0147801: 'inflight, NR', // FundsReserved: 27 minutes
  f0148151: 'inflight, NR', // FundsReserved: 27 minutes
  f0148269: 'inflight, NR', // FundsReserved: 27 minutes
  f0148452: 'inflight, NR', // FundsReserved: 27 minutes
  f0148627: 'inflight, NR', // FundsReserved: 27 minutes
  f0149132: 'inflight, NR', // FundsReserved: 27 minutes
  f0149753: 'inflight, NR', // FundsReserved: 27 minutes
  f0149783: 'inflight, NR', // FundsReserved: 27 minutes
  f0149937: 'inflight, NR', // FundsReserved: 27 minutes
  f0150666: 'inflight, NR', // FundsReserved: 27 minutes
  f0150748: 'inflight, NR', // FundsReserved: 27 minutes
  f0150816: 'inflight, NR', // FundsReserved: 27 minutes
  f0150860: 'inflight, NR', // FundsReserved: 27 minutes
  f0150918: 'inflight, NR', // FundsReserved: 27 minutes
  f0151371: 'inflight, NR', // FundsReserved: about 1 hour
  f0151499: 'inflight, NR', // FundsReserved: 27 minutes
  f0151706: 'inflight, NR', // FundsReserved: 27 minutes
  f0151849: 'inflight, NR', // FundsReserved: 27 minutes
  f0152134: 'inflight, NR', // FundsReserved: 27 minutes
  f0152337: 'inflight, NR', // FundsReserved: about 1 hour
  f0152351: 'inflight, NR', // FundsReserved: 27 minutes
  f0152799: 'inflight, NR', // FundsReserved: 27 minutes
  f0152866: 'inflight, NR', // FundsReserved: 27 minutes
  f0153024: 'inflight, NR', // FundsReserved: 27 minutes
  f0153040: 'inflight, NR', // FundsReserved: 27 minutes
  f0153078: 'inflight, NR', // FundsReserved: 27 minutes
  f0153188: 'inflight, NR', // FundsReserved: 27 minutes
  f0153565: 'inflight, NR', // FundsReserved: 27 minutes
  f0153583: 'inflight, NR', // FundsReserved: 27 minutes
  f0153775: 'inflight, NR', // FundsReserved: 27 minutes
  f0153930: 'inflight, NR', // FundsReserved: 27 minutes
  f0153932: 'inflight, NR', // FundsReserved: 27 minutes
  f0153960: 'inflight, NR', // FundsReserved: 26 minutes
  f0153986: 'inflight, China, Changsha', // FundsReserved: about 1 hour
  f0154152: 'inflight, NR', // FundsReserved: 26 minutes
  f0154238: 'inflight, NR', // FundsReserved: 26 minutes
  f0154294: 'inflight, NR', // FundsReserved: 26 minutes
  f0154335: 'inflight, NR', // FundsReserved: 26 minutes
  f0154597: 'inflight, NR', // FundsReserved: 26 minutes
  f0154865: 'inflight, NR', // FundsReserved: 26 minutes
  f0155049: 'inflight, NR', // FundsReserved: 26 minutes
  f0155050: 'inflight, NR', // FundsReserved: 26 minutes
  f0155258: 'inflight, NR', // FundsReserved: 26 minutes
  f0155515: 'inflight, NR', // FundsReserved: 26 minutes
  f0155829: 'inflight, NR', // FundsReserved: 26 minutes
  f0155983: 'inflight, Japan', // FundsReserved: about 1 hour
  f0156214: 'inflight, NR', // FundsReserved: 26 minutes
  f0156333: 'inflight, China, Ningbo', // FundsReserved: 26 minutes
  f0156342: 'inflight, NR', // FundsReserved: 21 minutes
  f0156417: 'inflight, NR', // FundsReserved: 26 minutes
  f0157025: 'inflight, NR', // FundsReserved: 26 minutes
  f0157316: 'inflight, NR', // FundsReserved: 26 minutes
  f0157429: 'inflight, Korea, Bucheon-si', // FundsReserved: about 1 hour
  f0157502: 'inflight, NR', // FundsReserved: 26 minutes
  f0157513: 'inflight, Korea, Geumcheon-gu', // FundsReserved: 21 minutes
  f0157769: 'inflight, China, Changsha', // FundsReserved: 26 minutes
  f0157917: 'inflight, NR', // FundsReserved: 26 minutes
  f0157979: 'inflight, NR', // FundsReserved: 26 minutes
  f0157991: 'inflight, NR', // FundsReserved: 26 minutes
  f0158000: 'inflight, NR', // FundsReserved: 26 minutes
  f0158068: 'inflight, NR', // FundsReserved: 26 minutes
  f0158133: 'inflight, NR', // FundsReserved: 26 minutes
  f0158156: 'inflight, NR', // FundsReserved: 26 minutes
  f0158265: 'inflight, China, Hefei', // FundsReserved: 26 minutes
  f0158276: 'inflight, NR', // FundsReserved: 26 minutes
  f0158335: 'inflight, NR', // FundsReserved: 26 minutes
  f0158728: 'inflight, NR', // FundsReserved: 26 minutes
  f0159067: 'inflight, NR', // FundsReserved: 26 minutes
  f0159333: 'inflight, NR', // FundsReserved: 26 minutes
  f0159380: 'inflight, NR', // FundsReserved: 26 minutes
  f0159449: 'inflight, NR', // FundsReserved: 26 minutes
  f0159517: 'inflight, NR', // FundsReserved: 26 minutes
  f0159632: 'inflight, NR', // FundsReserved: about 1 hour
  f0159649: 'inflight, NR', // FundsReserved: about 1 hour
  f0159654: 'inflight, NR', // FundsReserved: 26 minutes
  f0159660: 'inflight, NR', // FundsReserved: 26 minutes
  f0159689: 'inflight, NR', // FundsReserved: 26 minutes
  f0159883: 'inflight, NR', // FundsReserved: about 1 hour
  f0160135: 'inflight, NR', // FundsReserved: 25 minutes
  f0160137: 'inflight, NR', // FundsReserved: 25 minutes
  f0160735: 'inflight, NR', // FundsReserved: 25 minutes
  f0160819: 'inflight, NR', // FundsReserved: 25 minutes
  f0160870: 'inflight, NR', // FundsReserved: 25 minutes
  f0161468: 'inflight, NR', // FundsReserved: 25 minutes
  f0161542: 'inflight, NR', // FundsReserved: 25 minutes
  f0161819: 'inflight, NR', // FundsReserved: 25 minutes
  f0163275: 'inflight, NR', // FundsReserved: 25 minutes
  f0164260: 'inflight, NR', // FundsReserved: 25 minutes
  f0164326: 'inflight, China, Beijing', // FundsReserved: about 1 hour
  f0166425: 'inflight, NR', // FundsReserved: 25 minutes
  f0166843: 'inflight, NR', // FundsReserved: 25 minutes
  f0166896: 'inflight, NR', // FundsReserved: 25 minutes
  f0167137: 'inflight, China, Shaoxing', // FundsReserved: 21 minutes
  f0167458: 'inflight, NR', // FundsReserved: 25 minutes
  f0167505: 'inflight, China, Beijing', // FundsReserved: about 1 hour
  f0168537: 'inflight, NR', // FundsReserved: 25 minutes
  f0169053: 'inflight, NR', // FundsReserved: 21 minutes
  f0169097: 'inflight, NR', // FundsReserved: 25 minutes
  f0199223: 'inflight, NR', // FundsReserved: about 1 hour
  f0207949: 'inflight, NR', // FundsReserved: 25 minutes
  f0214334: 'inflight, NR', // FundsReserved: 25 minutes
  f0215461: 'inflight, NR', // FundsReserved: 25 minutes
  f0216463: 'inflight, NR', // FundsReserved: 25 minutes
  f0216822: 'inflight, NR', // FundsReserved: 25 minutes
  f0217419: 'inflight, NR', // FundsReserved: 25 minutes
  f0217789: 'inflight, NR', // FundsReserved: 25 minutes
  f0217805: 'inflight, China, Taiwan, Taipei', // FundsReserved: about 1 hour
  f0218072: 'inflight, NR', // FundsReserved: 25 minutes
  f0218092: 'inflight, NR', // FundsReserved: 25 minutes
  f0218407: 'inflight, NR', // FundsReserved: 25 minutes
  f0219106: 'inflight, NR', // FundsReserved: 25 minutes
  f0220911: 'inflight, NR', // FundsReserved: 25 minutes
  f0222611: 'inflight, NR', // FundsReserved: 25 minutes
  f0222811: 'inflight, NR', // FundsReserved: 24 minutes
  f0222947: 'inflight, NR', // FundsReserved: 24 minutes
  f0223033: 'inflight, NR', // FundsReserved: 24 minutes
  f0223102: 'inflight, NR', // FundsReserved: 24 minutes
  f0223103: 'inflight, NR', // FundsReserved: 24 minutes
  f0223104: 'inflight, NR', // FundsReserved: 24 minutes
  f0223316: 'inflight, NR', // FundsReserved: 24 minutes
  f0223933: 'inflight, NR', // FundsReserved: 24 minutes
  f0225285: 'inflight, NR', // FundsReserved: 24 minutes
  f0225880: 'inflight, NR', // FundsReserved: 24 minutes
  f0226303: 'inflight, NR', // FundsReserved: 24 minutes
  f0226418: 'inflight, NR', // FundsReserved: 24 minutes
  f0226520: 'inflight, NR', // FundsReserved: 24 minutes
  f0228232: 'inflight, NR', // FundsReserved: 24 minutes
  f0228855: 'inflight, Korea, Guro-gu', // FundsReserved: about 1 hour
  f0229199: 'inflight, NR', // FundsReserved: 24 minutes
  f0229437: 'inflight, NR', // FundsReserved: 24 minutes
  f0229547: 'inflight, Japan, Yokohama', // FundsReserved: 24 minutes
  f0230449: 'inflight, NR', // FundsReserved: 24 minutes
  f0230799: 'inflight, NR', // FundsReserved: 24 minutes
  f0230861: 'inflight, NR', // FundsReserved: 24 minutes
  f0231112: 'inflight, NR', // FundsReserved: 24 minutes
  f0231481: 'inflight, NR', // FundsReserved: 24 minutes
  f0231782: 'inflight, NR', // FundsReserved: 24 minutes
  f0232358: 'inflight, NR', // FundsReserved: 24 minutes
  f0232459: 'inflight, NR', // FundsReserved: 24 minutes
  f0232650: 'inflight, NR', // FundsReserved: 24 minutes
  f0238968: 'inflight, NR', // FundsReserved: about 1 hour
  f0240035: 'inflight, NR', // FundsReserved: 24 minutes
  f0240185: 'inflight, NR', // FundsReserved: 24 minutes
  f0240456: 'inflight, NR', // FundsReserved: 24 minutes
  f0241666: 'inflight, NR', // FundsReserved: 24 minutes
  f0241764: 'inflight, China, Chengdu', // FundsReserved: about 1 hour
  f0242152: 'inflight, Korea, Guro-gu', // FundsReserved: about 1 hour
  f0242156: 'inflight, NR', // FundsReserved: 24 minutes
  f0242345: 'inflight, NR', // FundsReserved: 24 minutes
  f0242373: 'inflight, NR', // FundsReserved: 24 minutes
  f0364987: 'inflight, Korea, Seoul', // FundsReserved: about 2 hours
  f0377277: 'inflight, NR', // FundsReserved: 24 minutes
  f0391212: 'inflight, NR', // FundsReserved: 24 minutes
  f0391214: 'inflight, NR', // FundsReserved: 24 minutes
  f0391235: 'inflight, NR', // FundsReserved: 24 minutes
  f0391381: 'inflight, NR', // FundsReserved: 24 minutes
  f0391439: 'inflight, NR', // FundsReserved: 24 minutes
  f0392430: 'inflight, NR', // FundsReserved: 23 minutes
  f0392488: 'inflight, NR', // FundsReserved: 23 minutes
  f0392924: 'inflight, NR', // FundsReserved: 23 minutes
  f0392999: 'inflight, NR', // FundsReserved: about 1 hour
  f0393016: 'inflight, NR', // FundsReserved: 23 minutes
  f0393417: 'inflight, NR', // FundsReserved: 23 minutes
  f0394102: 'inflight, NR', // FundsReserved: 23 minutes
  f0395680: 'inflight, NR', // FundsReserved: 23 minutes
  f0395994: 'inflight, NR', // FundsReserved: 23 minutes
  f0396149: 'inflight, NR', // FundsReserved: 23 minutes
  f0396217: 'inflight, NR', // FundsReserved: 23 minutes
  f0396422: 'inflight, NR', // FundsReserved: 23 minutes
  f0396452: 'inflight, NR', // FundsReserved: 23 minutes
  f0396473: 'inflight, NR', // FundsReserved: 23 minutes
  f0396705: 'inflight, NR', // FundsReserved: 23 minutes
  f0397052: 'inflight, NR', // FundsReserved: 23 minutes
  f0397083: 'inflight, NR', // FundsReserved: 23 minutes
  f0397561: 'inflight, NR', // FundsReserved: 23 minutes
  f0397794: 'inflight, NR', // FundsReserved: 23 minutes
  f0397802: 'inflight, NR', // FundsReserved: 23 minutes
  f0398999: 'inflight, NR', // FundsReserved: 23 minutes
  f0399111: 'inflight, NR', // FundsReserved: 23 minutes
  f0399743: 'inflight, NR', // FundsReserved: 23 minutes
  f0399996: 'inflight, NR', // FundsReserved: 23 minutes
  f0400307: 'inflight, NR', // FundsReserved: 23 minutes
  f0402233: 'inflight, NR', // FundsReserved: 23 minutes
  f0402314: 'inflight, NR', // FundsReserved: 21 minutes
  f0402492: 'inflight, NR', // FundsReserved: 23 minutes
  f0402661: 'inflight, NR', // FundsReserved: 23 minutes
  f0402822: 'inflight, NR', // FundsReserved: 23 minutes
  f0403529: 'inflight, NR', // FundsReserved: 23 minutes
  f0404193: 'inflight, NR', // FundsReserved: 23 minutes
  f0404643: 'inflight, NR', // FundsReserved: 23 minutes
  f0406478: 'inflight, NR', // FundsReserved: 23 minutes
  f0406533: 'inflight, NR', // FundsReserved: 23 minutes
  f0407244: 'inflight, NR', // FundsReserved: 23 minutes
  f0407733: 'inflight, NR', // FundsReserved: 23 minutes
  f0408582: 'inflight, NR', // FundsReserved: 22 minutes
  f0408629: 'inflight, NR', // FundsReserved: 22 minutes
  f0409172: 'inflight, NR', // FundsReserved: 22 minutes
  f0409399: 'inflight, NR', // FundsReserved: 22 minutes
  f0409499: 'inflight, NR', // FundsReserved: 22 minutes
  f0410001: 'inflight, NR', // FundsReserved: 22 minutes
  f0410941: 'inflight, NR', // FundsReserved: 22 minutes
  f0419311: 'inflight, NR', // FundsReserved: 22 minutes
  f0419331: 'inflight, NR', // FundsReserved: 22 minutes
  f0419510: 'inflight, NR', // FundsReserved: 22 minutes
  f0419662: 'inflight, NR', // FundsReserved: 22 minutes
  f0419804: 'inflight, NR', // FundsReserved: 22 minutes
  f0419944: 'inflight, NR', // FundsReserved: 22 minutes
  f0419945: 'inflight, NR', // FundsReserved: 22 minutes
  f0420508: 'inflight, NR', // FundsReserved: 22 minutes
  f0421387: 'inflight, NR', // FundsReserved: 22 minutes
  f0421858: 'inflight, NR', // FundsReserved: 22 minutes
  f0422229: 'inflight, NR', // FundsReserved: 22 minutes
  f0422266: 'inflight, NR', // FundsReserved: about 1 hour
  f0422737: 'inflight, NR', // FundsReserved: 22 minutes
  f0423057: 'inflight, NR', // FundsReserved: 22 minutes
  f0423329: 'inflight, NR', // FundsReserved: 22 minutes
  f0424761: 'inflight, NR', // FundsReserved: 22 minutes
  f0427688: 'inflight, NR', // FundsReserved: 22 minutes
  f0427839: 'inflight, NR', // FundsReserved: 22 minutes
  f0427975: 'inflight, NR', // FundsReserved: 22 minutes
  f0427989: 'inflight, NR', // FundsReserved: 22 minutes
  f0428184: 'inflight, NR', // FundsReserved: 22 minutes
  f0429063: 'inflight, NR', // FundsReserved: 22 minutes
  f0429122: 'inflight, NR', // FundsReserved: 22 minutes
  f0430101: 'inflight, NR', // FundsReserved: 22 minutes
  f0432235: 'inflight, NR', // FundsReserved: 22 minutes
  f0433892: 'inflight, NR', // FundsReserved: 22 minutes

  // Unknown

  // Active

  // Active-sealing (active, with in-flight sealing)

  f019806: 'active-sealing, China, Beijing', // 1667911
  f024550: 'active-sealing, China, Wenzhou', // 1667890
  f042567: 'active-sealing, China, Jinhua', // 1667888
  f061158: 'active-sealing, China, Guangdong, phoenix', // 1667884
  f078621: 'active-sealing, Korea, Uiwang', // 1667885
  f081644: 'active-sealing, China, Wenzhou', // 1667886
  f096974: 'active-sealing, China, Chongqing', // 1667889
  f0106949: 'active-sealing, Korea, Seoul', // 1667936
  f0156207: 'active-sealing, Korea, Ulsan', // 1667896
  f0156452: 'active-sealing, Korea, Ulsan', // 1667887
  f0157265: 'active-sealing, China, Zhangjiakou', // 1667941
  f0159961: 'active-sealing, China, Chongqing', // 1667897
  f0165375: 'active-sealing, Korea, Seongnam-si', // 1667895
  f0224894: 'active-sealing, China, Qingdao', // 1667891
  f0228575: 'active-sealing, Canada, Calgary', // 1667892
  f0230200: 'active-sealing, Korea, Gwanak-gu, G-mining', // 1667900
  f0395463: 'active-sealing, Korea, Daegu', // 1667894
  f0395472: 'active-sealing, Korea, Daegu', // 1667893
  f0395473: 'active-sealing, Korea, Daegu', // 1667938
  f0413563: 'active-sealing, Korea, Gangnam-gu', // 1667898

  // Sealing

  f02540: 'sealing, USA, Mobile, Foundry', // 1667906
  f015233: 'sealing, China, Nanjing', // 1667901
  f015734: 'sealing, China, Qingdao', // 1667929
  f016276: 'sealing, China, Beijing', // 1667912
  f016398: 'sealing, China, Shanghai', // 1667943
  f024468: 'sealing, China, Shenzhen', // 1667909
  f030125: 'sealing, China, Nantong', // 1667966
  f033036: 'sealing, China, Liaoning', // 1667927
  f044160: 'sealing, China, Guangzhou, muxing', // 1667922
  f055102: 'sealing, Vietman, Ho Chi Minh City + China', // 1667903
  f055132: 'sealing, Vietman, Ho Chi Minh City + China', // 1667902
  f058369: 'sealing, USA, Boston', // 1668005
  f080103: 'sealing, Korea, Seongnam-si', // 1667899
  f086151: 'sealing, China, Dongguan', // 1667914
  f094374: 'sealing, China, Nanyang', // 1667857
  f097720: 'sealing, Korea, Bucheon-si', // 1667946
  f0110133: 'sealing, China, Ningbo', // 1667908
  f0111885: 'sealing, Korea, Bucheon-si, WINNERS', // 1668004
  f0113331: 'sealing, Korea, Jinju + USA', // 1667907
  f0129805: 'sealing, China, Zhejiang + Australia, Adelaide', // 1667916
  f0131901: 'sealing, Korea, Daejeon', // 1667905
  f0134671: 'sealing, Korea, Gimpo-si', // 1667904
  f0165643: 'sealing, China, Guangzhou', // 1667918
  f0168058: 'sealing, China, Suzhou', // 1667910
  f0239251: 'sealing, Korea, Uiwang', // 1667924
  f0399814: "sealing, China, Ya'an", // 1667939
  f0401287: 'sealing, China, Yibin', // 1667923
  f0402431: 'sealing, China, Hangzhou', // 1667913
  f0419768: 'sealing, Korea, Seongnam-si', // 1667915
  f0434480: 'sealing, USA, Hummelstown', // 1667919
  f0478837: 'sealing, China, Zhangzhou', // 1667861

  // Stuck

  f02490: 'stuck, China, Fujian', // CheckForAcceptance: about 2 hours
  f03339: 'stuck, China, Luzhou, benxun', // CheckForAcceptance: about 2 hours
  f03345: 'stuck, China, Fuzhou, chh', // CheckForAcceptance: about 2 hours
  f08019: 'stuck, China, Yantai, 三合', // CheckForAcceptance: about 2 hours
  f010513: 'stuck, China, Chongqing', // CheckForAcceptance: about 2 hours
  f020489: 'stuck, China, Lioaning', // CheckForAcceptance: about 2 hours
  f022261: 'stuck, China, Luzhou', // CheckForAcceptance: about 2 hours
  f023219: 'stuck, China, Beijing + Zhangjiakou', // CheckForAcceptance: about 2 hours
  f025025: 'stuck, China, Qingdao', // CheckForAcceptance: about 2 hours
  f030408: 'stuck, NR', // CheckForAcceptance: about 2 hours
  f033025: 'stuck, Korea, Daegu', // CheckForAcceptance: about 2 hours
  f039515: 'stuck, China, Chongqing, valarhash', // CheckForAcceptance: about 2 hours
  f053088: 'stuck, China, Shanghai', // CheckForAcceptance: about 2 hours
  f063628: 'stuck, NR', // CheckForAcceptance: about 1 hour
  f0112772: 'stuck, China, Nantong', // CheckForAcceptance: 33 minutes
  f0122815: 'stuck, Korea, Bucheon-si, Healthcarenavi_80', // CheckForAcceptance: about 2 hours
  f0130912: 'stuck, China, Hong Kong', // CheckForAcceptance: about 2 hours
  f0131857: 'stuck, China, Chongqing', // CheckForAcceptance: about 2 hours
  f0137168: 'stuck, China, Beijing', // CheckForAcceptance: about 2 hours
  f0145843: 'stuck, NR', // CheckForAcceptance: 29 minutes
  f0150744: 'stuck, Korea, Ulsan', // CheckForAcceptance: about 2 hours
  f0155687: 'stuck, China, Guangzhou', // CheckForAcceptance: 27 minutes
  f0157564: 'stuck, Korea, Daejeon', // CheckForAcceptance: about 2 hours
  f0165539: 'stuck, Japan, Yokohama', // CheckForAcceptance: about 2 hours
  f0215370: 'stuck, China, Hangzhou', // CheckForAcceptance: about 2 hours
  f0220156: 'stuck, NR', // CheckForAcceptance: 21 minutes
  f0231161: 'stuck, China, Qujing', // CheckForAcceptance: about 2 hours
  f0242420: 'stuck, NR', // CheckForAcceptance: about 2 hours
  f0395459: 'stuck, Korea, Daegu', // CheckForAcceptance: about 2 hours
  f0395462: 'stuck, Korea, Daegu', // CheckForAcceptance: about 2 hours
  f0396846: 'stuck, China, Zhongshan', // CheckForAcceptance: 22 minutes
  f0397675: 'stuck, Korea, Guro-gu', // CheckForAcceptance: about 1 hour
  f0398326: 'stuck, China, Jiangmen', // CheckForAcceptance: about 2 hours
  f0401300: 'stuck, France, Deuil-la-Barre', // CheckForAcceptance: about 2 hours
  f0403177: 'stuck, China, Huizhou', // CheckForAcceptance: about 2 hours
  f0405129: 'stuck, China, Fujian', // CheckForAcceptance: about 2 hours
  f0408717: 'stuck, Korea, Ansan-si', // CheckForAcceptance: about 2 hours
  f0411786: 'stuck, Korea, Busan', // CheckForAcceptance: about 2 hours
  f0430997: 'stuck, Korea', // CheckForAcceptance: about 2 hours
  f0437246: 'stuck, China, Hangzhou', // CheckForAcceptance: about 2 hours
  f0458627: 'stuck, Korea, Seongnam-si', // CheckForAcceptance: about 2 hours
  f0460440: 'stuck, Korea, Seongnam-si', // CheckForAcceptance: about 2 hours
  f0463143: 'stuck, NR', // CheckForAcceptance: about 2 hours
  f0467217: 'stuck, China, Beijing', // CheckForAcceptance: about 2 hours
  f0471266: 'stuck, Japan, Ageo', // CheckForAcceptance: about 2 hours
  f0471691: 'stuck, China, Fujian', // CheckForAcceptance: about 2 hours
  f0482619: 'stuck, Korea, Seongnam-si', // CheckForAcceptance: about 2 hours
  f0490090: 'stuck, Korea, Seoul', // CheckForAcceptance: about 2 hours
  f0492283: 'stuck, USA, Quail Valley', // CheckForAcceptance: about 2 hours
  f0492295: 'stuck, China, Shenzhen', // CheckForAcceptance: about 2 hours
  f0494174: 'stuck, Norway', // CheckForAcceptance: about 2 hours
  f0494332: 'stuck, Ukraine, Sumy', // CheckForAcceptance: about 2 hours

  // Busy

  f022820: 'busy, China, Guangdong', // cannot seal a sector before 648480

  // Min Size

  f01234: 'min-size, Belgium, Bonheiden, Eliovp', // 131072 < 5368709120
  f01240: 'min-size, Netherlands, Dcent', // 131072 < 268435456
  f01247: 'min-size, Canada, Montreal, BigChungus', // 131072 < 67108864
  f01276: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 4294967296
  f01277: 'min-size, Sweden, Stockholm, tvsthlm', // 131072 < 4294967296
  f01278: 'min-size, USA, Grand Rapids, MiMiner', // 131072 < 536870912
  f02387: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 17179869184
  f02401: 'min-size, Canada, Chambly, NBFS Canada', // 131072 < 17179869184
  f02419: 'min-size, China, Shanghai, yuantai', // 131072 < 268435456
  f02500: 'min-size, Korea, Seongnam-si', // 131072 < 67108864
  f02576: 'min-size, Denmark, Gjerlev, BenjaminH', // 131072 < 17179869184
  f02619: 'min-size, China, Beijing, Blockcasting', // 131072 < 1048576
  f02620: 'min-size, Poland, Krakow, @magik6k', // 131072 < 536870912
  f03134: 'min-size, China, Cangzhou, QiaoMu', // 131072 < 1048576
  f03624: 'min-size, Germany, Chemnitz, ode', // 131072 < 8589934592
  f07998: 'min-size, China, Hangzhou, 安问', // 131072 < 17179869184
  f08240: 'min-size, Russia, Novosibirsk, Rabinovitch', // 131072 < 1073741824
  f08399: 'min-size, USA, Sammamish, MiningMusing', // 131072 < 4294967296
  f08403: 'min-size, UK, Lower Slaughter, TippyFlits', // 131072 < 134217728
  f010088: 'min-size, NR', // 131072 < 4294967296
  f010254: 'min-size, Japan, Minamata', // 131072 < 134217728
  f010446: 'min-size, Netherlands, Angelo', // 131072 < 8589934592
  f010479: 'min-size, France, Fontenay-sous-Bois, s0nik42', // 131072 < 8589934592
  f010507: 'min-size, China, Hangzhou', // 131072 < 1073741824
  f010558: 'min-size, NR', // 131072 < 134217728
  f010617: 'min-size, Canada, Surrey, kernelogic2, @feiya200', // 131072 < 4294967296
  f014569: 'min-size, China, Yangzhou', // 131072 < 104857600
  f014768: 'min-size, Singapore, Funktafide, @Funk', // 131072 < 536870912
  f017242: 'min-size, China, Guangdong', // 131072 < 268435456
  f018501: 'min-size, China, Beijing', // 131072 < 1073741824
  f019002: 'min-size, China, Xiamen', // 131072 < 1073741824
  f019104: 'min-size, Canada, Chambly, Northstar', // 131072 < 4294967296
  f019362: 'min-size, China, Hangzhou, 青青子衿', // 131072 < 17179869184
  f019399: 'min-size, Korea, Busan', // 131072 < 268435456
  f019551: 'min-size, UK, Birmingham, Neonix', // 131072 < 134217728
  f020378: 'min-size, Bulgaria, Asenovgrad', // 131072 < 2147483648
  f020385: 'min-size, Korea, Incheon', // 131072 < 536870912
  f020904: 'min-size, Korea, Uijeongbu-si, FILTop', // 131072 < 8589934592
  f021716: 'min-size, New Zealand, Wellington, Info.farm', // 131072 < 536870912
  f021961: 'min-size, China, Fuzhou', // 131072 < 17179869184
  f022142: 'min-size, USA, Queens, Nelson SR2', // 131072 < 2147483648
  f022163: 'min-size, Switzerland, dns:fil.akasha.network', // 131072 < 536870912
  f022289: 'min-size, China, Mianyang', // 131072 < 4294967296
  f022352: 'min-size, Norway, Borgen, TechHedge, @Reiers', // 131072 < 17179869184
  f022399: 'min-size, China, Beijing', // 131072 < 1573031772
  f023467: 'min-size, Norway, Oslo, PhiMining.io', // 131072 < 134217728
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
  f024511: 'min-size, China, Shenzhen', // 131072 < 134217728
  f030335: 'min-size, China, Fujian', // 131072 < 134217728
  f032934: 'min-size, Korea, Incheon', // 131072 < 1073741824
  f033189: 'min-size, NR', // 131072 < 2147483648
  f034047: 'min-size, China, Hangzhou', // 131072 < 1073741824
  f039940: 'min-size, China, Mianyang', // 131072 < 134217728
  f047419: 'min-size, USA, Waukesha', // 131072 < 1073741824
  f048669: 'min-size, NR', // 131072 < 1048576
  f049882: 'min-size, Netherlands, De Rijp, Chipz', // 131072 < 268435456
  f058000: 'min-size, China, Suzhou', // 131072 < 1073741824
  f062353: 'min-size, Germany, Frankfurt', // 131072 < 17179869184
  f064218: 'min-size, USA, Kirkland', // 131072 < 268435456
  f066596: 'min-size, USA, San Diego, PiKNiK & Company', // 131072 < 536870912
  f071624: 'min-size, USA, Boyne City, Adept', // 131072 < 4294967296
  f074738: 'min-size, Korea, Icheon-si', // 131072 < 67108864
  f078522: 'min-size, NR', // 131072 < 4294967296
  f079007: 'min-size, China, Jinan', // 131072 < 104857600
  f079817: "min-size, Russia, Ul'yanovka", // 131072 < 1073741824
  f081222: 'min-size, China, Changzhou', // 131072 < 134217728
  f083920: 'min-size, NR', // 131072 < 1573031772
  f085899: 'min-size, China, Wuxi', // 131072 < 16777216
  f096976: 'min-size, Russia', // 131072 < 1048576
  f097618: 'min-size, China, Suzhou', // 131072 < 524288000
  f097777: 'min-size, Ukraine, Ivano-Frankivsk', // 131072 < 104857600
  f098706: 'min-size, Korea, Icheon-si', // 131072 < 67108864
  f099608: 'min-size, Latvia, Riga, stander', // 131072 < 268435456
  f0100116: 'min-size, Korea, Uljin County', // 131072 < 1073741824
  f0102641: 'min-size, China, Guangzhou', // 131072 < 1536163840
  f0102670: 'min-size, China, Xiamen', // 131072 < 1536163840
  f0104967: 'min-size, Ukraine, Ternopil', // 131072 < 2147483648
  f0109713: 'min-size, China, Beijing', // 131072 < 1536163840
  f0116707: 'min-size, Germany, Dusseldorf', // 131072 < 4294967296
  f0118360: 'min-size, China, Hangzhou', // 131072 < 4294967296
  f0121768: 'min-size, China, Guangdong', // 131072 < 1073741824
  f0121958: 'min-size, Korea, Seoul', // 131072 < 67108864
  f0126824: 'min-size, Korea, Seongnam-si', // 131072 < 67108864
  f0126868: 'min-size, Ukraine, Vinnytsia', // 131072 < 943718400
  f0127896: 'min-size, Bulgaria, Sofia, sofiaminer', // 131072 < 536870912
  f0131611: 'min-size, Korea, Jeju City', // 131072 < 67108864
  f0134991: 'min-size, China, Foshan', // 131072 < 1536163840
  f0135078: 'min-size, USA, Denver', // 131072 < 4294967296
  f0142637: 'min-size, China, Mianyang', // 131072 < 4294967296
  f0145162: 'min-size, Japan, Kumamoto', // 131072 < 1073741824
  f0145874: 'min-size, Canada, Brampton', // 131072 < 4294967296
  f0148143: 'min-size, China, Tianjin', // 131072 < 1048576
  f0151993: 'min-size, Korea, Icheon-si', // 131072 < 33554432
  f0155384: 'min-size, Korea, Seongnam-si', // 131072 < 67108864
  f0157535: 'min-size, Canada, Brampton', // 131072 < 4294967296
  f0158468: 'min-size, China, Guangzhou', // 131072 < 1536163840
  f0161916: 'min-size, NR', // 131072 < 1536524550
  f0165400: 'min-size, Canada, Brampton', // 131072 < 4294967296
  f0187709: 'min-size, Russia, Moscow', // 131072 < 134217728
  f0221135: 'min-size, USA, Atlanta', // 131072 < 10485760
  f0396607: 'min-size, Korea, Icheon-si', // 131072 < 67108864
  f0396844: 'min-size, Korea, Icheon-si', // 131072 < 67108864
  f0406322: 'min-size, USA, Long Beach', // 131072 < 4294967296
  f0406703: 'min-size, USA, Scottsdale', // 131072 < 4294967296
  f0409356: 'min-size, NR', // 131072 < 33554432
  f0426531: 'min-size, Korea, Seongnam-si', // 131072 < 67108864
  f0440182: 'min-size, USA, Des Moines', // 131072 < 2097152
  f0440208: 'min-size, Netherlands, Amsterdam', // 131072 < 2097152
  f0447183: 'min-size, Canada, Montreal', // 131072 < 4294967296
  f0455466: 'min-size, USA, Washington', // 131072 < 268435456

  // Max Size

  // Min Ask

  f01241: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f01279: 'min-ask, China, Sichuan', // 20000000 < 122070312
  f01280: 'min-ask, China, Wuxi', // 20000000 < 12207031250000000
  f02381: 'min-ask, China, Dongguan', // 20000000 < 6103515625000
  f02415:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f02501: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f02514: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f02606: 'min-ask, China, Zhejiang, DataX', // 20000000 < 122070312
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
  f03275: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f03364: 'min-ask, China, Inner Mongolia', // 20000000 < 12207031250000000
  f03482: 'min-ask, China, Karamay', // 20000000 < 12207031250000000
  f03491:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f05315: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f05316: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f05317: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f05664: 'min-ask, China, Hong Kong', // 20000000 < 24414062500000
  f07850: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f07945: 'min-ask, China, Guangzhou', // 20000000 < 122070312500000000
  f07990:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f08025:
    'min-ask, Singapore + USA + Germany, Frankfurt + UK, London + China, Dongguan', // 20000000 < 122070312500000
  f08103: 'min-ask, China, Foshan', // 20000000 < 610351562
  f08157: 'min-ask, China, Beijing + Germany, Frankfurt, 超星际', // 20000000 < 610351562500000
  f08257: 'min-ask, China, Zhejiang + Singapore', // 20000000 < 12207031250
  f08383: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f09693: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f09696: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f09848: 'min-ask, USA, Irvine, BigBearLake', // 20000000 < 1220703125
  f010253: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f010405: 'min-ask, China, Foshan', // 20000000 < 61035156
  f014365: 'min-ask, Australia, Turramurra + Sydney', // 20000000 < 120849609375000
  f014409: 'min-ask, USA, Monroe, Meatball Part III', // 20000000 < 122070312
  f015897: 'min-ask, China, Hong Kong', // 20000000 < 12207031250000000
  f015927: 'min-ask, USA, East Islip, CDImine', // 20000000 < 61035156
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
  f019041: 'min-ask, China, Zhejiang + Singapore, Zheng2', // 20000000 < 122070312
  f019240: 'min-ask, China, Beijing', // 20000000 < 122070312500000
  f019279: 'min-ask, Canada, Calgary', // 20000000 < 24414062
  f020747: 'min-ask, China, Xiamen', // 20000000 < 122070312
  f022130: 'min-ask, Korea, Seodaemun-gu', // 20000000 < 61035156
  f022308: 'min-ask, China, Bozhou', // 20000000 < 12207031250
  f023152: 'min-ask, China, Shandong', // 20000000 < 12207031250000000000000000
  f023565: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f023825: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f024015: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f024016: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f024156: 'min-ask, USA', // 20000000 < 122070312500000
  f024184: 'min-ask, Korea, Yeongdeungpo-dong', // 20000000 < 24414062500
  f029344: 'min-ask, Korea, Seongnam-si', // 20000000 < 1220703125000
  f029401: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f029404: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f030379: 'min-ask, Korea, Uiwang', // 20000000 < 1220703125
  f030384: 'min-ask, China, Shenzhen', // 20000000 < 12207031250000
  f033123: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f033356: 'min-ask, Korea, Yeongdeungpo-dong', // 20000000 < 24414062500
  f039800: 'min-ask, China, Chengdu', // 20000000 < 122070312500000
  f042540: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f042558: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f042635: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f050022: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f052447: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f054370: 'min-ask, China, Dongguan', // 20000000 < 12207031250
  f056611: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f057614: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f057698: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f060072: 'min-ask, China, Chongqing', // 20000000 < 610351562500000
  f061740: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f062260: 'min-ask, China, Guangzhou', // 20000000 < 61035156250000
  f062318: 'min-ask, Korea, Naju', // 20000000 < 12207031250
  f062334: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f062770: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f062811: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f062982: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f065103: 'min-ask, USA + China, Suzhou + Guangzhou + Karamay', // 20000000 < 122070312500000
  f065200: 'min-ask, China, Yibin', // 20000000 < 24414062
  f065280: 'min-ask, Korea, Songpa-gu, Data Store Ltd', // 20000000 < 122070312500000
  f066104: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f069915: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f069919: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f070501: 'min-ask, USA + China, Hong Kong + Guangzhou', // 20000000 < 122070312500000
  f070999: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f071980: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f073448: 'min-ask, NR', // 20000000 < 12207031250000000
  f073552: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f073628: 'min-ask, USA, New Castle', // 20000000 < 122070312500000
  f078772: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f079247: 'min-ask, USA + China, Guangzhou + Beijing + Dongguan + Shenzhen', // 20000000 < 122070312500000
  f079301: 'min-ask, China, Guangzhou + Dongguan + Shenzhen, USA', // 20000000 < 122070312500000
  f080480: 'min-ask, Ukraine, Lviv', // 20000000 < 122070312
  f082356: 'min-ask, China, Jiaxing', // 20000000 < 610351562500
  f082452: 'min-ask, China, Dongguan', // 20000000 < 1220581054687500000
  f083625: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f083903: "min-ask, China, Xi'an", // 20000000 < 122192382812500
  f084879: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f086366: 'min-ask, NR', // 20000000 < 122070312500000
  f092514: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f094614: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f097370: 'min-ask, NR', // 20000000 < 122070312500000
  f097386: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f097914: 'min-ask, NR', // 20000000 < 12207031250000000000000
  f0100082: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0101087: 'min-ask, Korea', // 20000000 < 122070312500000
  f0102374: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102375: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102376: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0102513: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0103851: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0104671: 'min-ask, Japan, Ota-ku', // 20000000 < 122070312500
  f0105074: 'min-ask, China, Shanghai', // 20000000 < 12207031250000000000000
  f0107308: 'min-ask, China, Shenyang', // 20000000 < 1220581054687500000
  f0107995: 'min-ask, NR', // 20000000 < 1220581054687500000
  f0109901: 'min-ask, China, Huludao', // 20000000 < 122070312500000
  f0110442: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0110936: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0114808: 'min-ask, China, Shanghai', // 20000000 < 12207031250000000
  f0114924: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0115744: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0120983: 'min-ask, China, Fujian', // 20000000 < 1220581054687500000
  f0121450: 'min-ask, China, Fujian', // 20000000 < 1220581054687500000
  f0123931: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0124102: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f0124335: 'min-ask, Finland, Helsinki', // 20000000 < 24414062
  f0128974: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0129072: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0129976: 'min-ask, Korea, Gwangju', // 20000000 < 1220703125000
  f0131464: 'min-ask, USA, Ashburn', // 20000000 < 122070312500000000
  f0131654: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0133886: 'min-ask, China, Guangdong', // 20000000 < 366210937500000
  f0133999: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f0134565: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0134682: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f0134778: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f0135738: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0136014: 'min-ask, China, Suzhou', // 20000000 < 12207031250000000
  f0141614: 'min-ask, China, Fujian', // 20000000 < 1220703124877929687500000
  f0145313: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0145385: 'min-ask, Malaysia, Petaling Jaya', // 20000000 < 122070324707031
  f0145784: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0146165: 'min-ask, China, Huizhou', // 20000000 < 122070190429687500000
  f0146875: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0148399: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0149765: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f0149768: 'min-ask, China, Dongguan', // 20000000 < 122070312500000
  f0151034: 'min-ask, USA, Syracuse', // 20000000 < 1220703125000
  f0151281: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0151692: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0152747: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0152854: 'min-ask, China, Huizhou', // 20000000 < 1220581054687500000
  f0153176: 'min-ask, China, Fujian', // 20000000 < 12206909179687500000
  f0154988: 'min-ask, China, Dongguan', // 20000000 < 122070190429687500000
  f0155467: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0157941: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f0158142: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0165111: 'min-ask, China, Guangzhou', // 20000000 < 1220703125000000000
  f0165135: 'min-ask, China, Guangzhou', // 20000000 < 1220703125000000000
  f0215704: 'min-ask, Korea, Icheon-si', // 20000000 < 1220581054687500000
  f0216138: 'min-ask, China, Shenzhen', // 20000000 < 610351562500
  f0216849: 'min-ask, China, Fujian', // 20000000 < 12207031249999999877929687500000
  f0218293: 'min-ask, China, Fujian', // 20000000 < 1220703124877929687500000
  f0220004: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0220632: 'min-ask, China, Fuzhou', // 20000000 < 12206909179687500000
  f0220827: 'min-ask, NR', // 20000000 < 122070312
  f0222962: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0224144: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0224841: 'min-ask, China, Guangzhou', // 20000000 < 12206909179687500000
  f0225058: 'min-ask, China, Fuzhou', // 20000000 < 1220581054687500000
  f0241858: 'min-ask, China, Fuzhou', // 20000000 < 1220703124999877929687500000
  f0392734: 'min-ask, Korea, Icheon-si', // 20000000 < 122070190429687500000
  f0392785: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0395911: 'min-ask, NR', // 20000000 < 121948242187500000
  f0396188: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0397855: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0400103: 'min-ask, China, Hong Kong', // 20000000 < 122070312
  f0401677: 'min-ask, NR', // 20000000 < 12207031250000000000000000
  f0406475: 'min-ask, China, Dongguan', // 20000000 < 122070312500000000
  f0409765: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0410506: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0410701: 'min-ask, China, Changsha', // 20000000 < 61035156250000
  f0413684: 'min-ask, China, Fujian', // 20000000 < 12207031249999999877929687500000
  f0413801: 'min-ask, China, Fujian', // 20000000 < 122070312499999999877929687500000
  f0421061: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0426933: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0427393: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0428177: 'min-ask, China, Huizhou', // 20000000 < 122070190429687500000
  f0431665: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0449662: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0456740: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0456741: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0460078: 'min-ask, China, Shanghai', // 20000000 < 122070312500000000
  f0461752: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0463950: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f0471007: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0490173: 'min-ask, Korea, Jung-gu', // 20000000 < 1220703125000

  // Error

  f01238: 'error, Vietnam, Hanoi, FILECOIN-VIETNAM', // error reading Response message from provider: EOF
  f01272: 'error, Singapore', // error reading Response message from provider: EOF
  f07709: 'error, Korea, Dongjak-gu', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: WaitForPublishDeals exit code: SysErrOutOfGas(7)
  f07830: 'error, China, Zhongshan', // error reading Response message from provider: EOF
  f010241: 'error, China, Beijing + USA, Portland, 6Block-P', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 1.184466118032808896 FIL, balance: 1.070998210095834496 FIL): not enough funds to execute transaction
  f010399: 'error, China, Guangzhou', // failed to complete data transfer: deal data transfer failed: data transfer channel 12D3KooWSrVTGNQP7UaXJYB8r6a2bfEcHzt2gnrHrrqwu5zYK1AD-12D3KooWNaRz2GcsNETTGnZEp5zvJqUesc4Mq3kbrqkbizemRssT-1617589584474572487 failed to transfer data: graphsync response to peer 12D3KooWNaRz2GcsNETTGnZEp5zvJqUesc4Mq3kbrqkbizemRssT did not complete: response status code RequestFailedUnknown
  f017193: "error, China, Xi'an + Singapore", // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f019824: 'error, USA', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.179999999989837828 FIL, balance: 0.050352219286919909 FIL): not enough funds to execute transaction
  f020928: 'error, China, Deyang + Singapore', // error reading Response message from provider: EOF
  f023198: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f024944: 'error, Korea, Yeongdeungpo-dong', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f025007: 'error, Korea, Gyeonggi-do, PINBYTES-eCUBE', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999997019232 FIL, balance: 0.029146741475696545 FIL): not enough funds to execute transaction
  f034350: 'error, NR', // sending proposal to storage provider failed: stream reset
  f054415: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f062937: 'error, NR', // error reading Response message from provider: EOF
  f063869: 'error, NR', // error reading Response message from provider: EOF
  f079370: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f082095: 'error, NR', // error reading Response message from provider: stream reset
  f082617: 'error, China, Fujian', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 1.249586530444476546 FIL, balance: 0.638997080942711885 FIL): not enough funds to execute transaction
  f085777: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f097214: 'error, Korea, Bucheon-si, CryptoHash', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.499999999966222315 FIL, balance: 0.22964974465940677 FIL): not enough funds to execute transaction
  f097569: 'error, NR', // error reading Response message from provider: stream reset
  f098664: 'error, China, Jiangsu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.999999999965056648 FIL, balance: 0.434378824401831168 FIL): not enough funds to execute transaction
  f099705: 'error, China, Zibo', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.49999999996880766 FIL, balance: 0.286292783407156821 FIL): not enough funds to execute transaction
  f0108979: 'error, Korea, Bupyeong-gu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.499999999946901296 FIL, balance: 0.232434605622797802 FIL): not enough funds to execute transaction
  f0109040: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0109043: 'error, China, Karamay', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 1.233174604064038506 FIL, balance: 0.213511646962628839 FIL): not enough funds to execute transaction
  f0111174: 'error, China, Guangzhou', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 1.226415993925651731 FIL, balance: 0.04198169572523634 FIL): not enough funds to execute transaction
  f0112713: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.499999999952759679 FIL, balance: 0.056229381562036481 FIL): not enough funds to execute transaction
  f0115108: 'error, Korea, Yangcheon-gu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.499999999972752432 FIL, balance: 0.316767326079961869 FIL): not enough funds to execute transaction
  f0116436: 'error, Singapore', // error reading Response message from provider: EOF
  f0116445: 'error, Singapore', // error reading Response message from provider: EOF
  f0118317: 'error, Singapore', // error reading Response message from provider: EOF
  f0118330: 'error, Singapore', // error reading Response message from provider: EOF
  f0121533: 'error, China, Zhejiang', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 1.237154740911829929 FIL, balance: 0.246221359439492264 FIL): not enough funds to execute transaction
  f0134516: 'error, Singapore', // error reading Response message from provider: EOF
  f0134518: 'error, China, Guangdong', // error reading Response message from provider: EOF
  f0137489: 'error, UK, Deeside', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999960252364 FIL, balance: 0.035441369245731903 FIL): not enough funds to execute transaction
  f0149455: 'error, NR', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.999999999997014016 FIL, balance: 0.057067400372174404 FIL): not enough funds to execute transaction
  f0150782: 'error, China, Xiamen', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151341: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151366: 'error, China, Fuzhou + Xiamen', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151468: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151487: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0152712: 'error, NR', // error reading Response message from provider: stream reset
  f0158993: 'error, China, Zhangzhou', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0162183: "error, China, Xi'an", // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0162394: 'error, China, Guangzhou', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 1.211860746620322108 FIL, balance: 0.045723826839724376 FIL): not enough funds to execute transaction
  f0227660: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0228401: 'error, Japan', // error reading Response message from provider: EOF
  f0349810: 'error, China, Qinzhou', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.999999999954523891 FIL, balance: 0.967287249945350203 FIL): not enough funds to execute transaction
  f0391143: 'error, China, Shanghai', // error reading Response message from provider: stream reset
  f0396352: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0396751: 'error, NR', // sending proposal to storage provider failed: exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0397332: 'error, NR', // deal failed: (State=26) error calling node: AddFunds errored: handler: websocket connection closed
  f0397728: 'error, China, Dongguan', // deal failed: (State=26) error calling node: AddFunds errored: handler: websocket connection closed
  f0400920: 'error, China, Luzhou', // deal failed: (State=26) error calling node: reserving funds: handler: websocket connection closed
  f0401135: 'error, Singapore', // error reading Response message from provider: EOF
  f0402371: 'error, China, Shanghai', // error reading Response message from provider: EOF
  f0414383: 'error, China, Dongguan', // deal failed: (State=26) error calling node: AddFunds errored: handler: websocket connection closed
  f0432345: 'error, China, Guangdong', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.370255978171123785 FIL, balance: 0.097510270225540741 FIL): not enough funds to execute transaction
  f0494586: 'error, China, Nanchang', // error reading Response message from provider: EOF

  // Dial backoff

  f02520: 'backoff, China, Hong Kong + Dongguan',
  f0152563: 'backoff, China, Chongqing',

  // Rejected

  f01152: 'rejected, China, Beijing',
  f01248: 'rejected, Germany, Frankfurt', // proposed provider collateral above maximum: 70929276268 > 70892439644
  f01289: 'rejected, China, Ningbo', // no online
  f01314: 'rejected, NR', // getting client market balance failed
  f02301: 'rejected, USA',
  f02421: 'rejected, China, Deyang + Singapore', // proposed provider collateral above maximum: 70928753274 > 70926415948
  f02423: 'rejected, Ukraine, Kyiv', // no online
  f02529: 'rejected, China, Chongqing + Singapore',
  f02609: 'rejected, China, Shanghai', // no online
  f02613: 'rejected, China, Chongqing + Singapore',
  f02625: 'rejected, China, Shanghai', // no online
  f02626: 'rejected, Singapore', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f02856: 'rejected, China, Chengdu', // no online
  f03000: 'rejected, China, Chengdu', // no online
  f03249: 'rejected, China, Yunfu',
  f03347: 'rejected, China, Shenzhen', // no online
  f03362: 'rejected, Germany, Berlin',
  f08094: 'rejected, China, Guangzhou', // no online
  f08197: 'rejected, China, Foshan',
  f08264: 'rejected, China, Xianning', // no online
  f09620: 'rejected, China, Weifang', // sh: 1: jq: not found
  f09642: 'rejected, Sweden, Alvsjo',
  f010035: 'rejected, Netherlands + China, Suzhou',
  f010038: 'rejected, China, Hangzhou + Singapore', // proposed provider collateral above maximum: 70924281256 > 70897286790
  f010493: 'rejected, China, Shanghai', // no online
  f010498: 'rejected, China, Shenzhen', // no online
  f010505: 'rejected, China, Wuhan, Interstellar Roewe', // no online
  f010528: 'rejected, China, Chongqing, Interstellar Roewe', // no online
  f014233: 'rejected, China, Shanghai + USA', // no online
  f014327:
    'rejected, China, Ningbo + Japan, Heiwajima + Germany, Frankfurt + USA + Canada, Toronto', // no online
  f014683: 'rejected, China, Dongguan',
  f015747: 'rejected, Japan, Setagaya-ku',
  f017229: 'rejected, China, Sichuan',
  f019099: 'rejected, China, Hong Kong + Guangzhou', // no online
  f019354: 'rejected, Germany, Frankfurt', // proposed provider collateral above maximum: 70926494982 > 70911103638
  f019422: 'rejected, China, Guangzhou', // no online
  f020523: 'rejected, China, Suzhou, changjiang', // sh: 1: VerifiedDeal:true: not found
  f020940: 'rejected, USA, Bellevue',
  f021075: 'rejected, China, Chengdu', // no online
  f021254: 'rejected, NR', // f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q<nil>
  f021255: 'rejected, Netherlands + China, Suzhou',
  f021444: 'rejected, China, Shanghai', // no online
  f021536: 'rejected, NR', // getting client market balance failed
  f021714: 'rejected, China, Hong Kong',
  f022072: 'rejected, China, Jieyang',
  f022125: 'rejected, China, Shenzhen', // no online
  f022566: 'rejected, China, Nanchong',
  f022748: 'rejected, China, Xinyang', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f022832: 'rejected, China, Beijing',
  f023179: 'rejected, China, Fuzhou', // sh: 1: f3rthootwyykyrhrxy3u3eihhxch7q5q7tlmzsxtlxuqwxcl2yvyjsjhrz5g37cjdhdufxm2qhyewt2dufasdf: not found
  f023534: 'rejected, China, Chongqing',
  f023982: 'rejected, China, Chengdu',
  f023983: 'rejected, China, Chongqing',
  f029490: 'rejected, NR',
  f029649: 'rejected, China, Beijing',
  f032888: 'rejected, China, Weifang',
  f034258: 'rejected, China, Mianyang',
  f034777: 'rejected, China, Chengdu', // no online
  f035436: 'rejected, China, Jiangsu', // no online
  f040332: 'rejected, China, Shenzhen', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f042391: 'rejected, China, Fuzhou', // no online
  f042896: 'rejected, China, Deyang', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f047666: 'rejected, China, Suihua', // no online
  f047843: 'rejected, China, Xiamen', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f047857: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f047868: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f048135: 'rejected, China, Chongqing, password interstellar', // sh: 1: /lotus_data/.lotusstorage/dealfilter.pl: not found
  f048968: 'rejected, NR', // no online
  f050260: 'rejected, China, Suzhou',
  f052701: 'rejected, China, Beijing',
  f055335: 'rejected, NR',
  f056226: 'rejected, NR',
  f056406: 'rejected, China, Taizhou', // no online
  f056573: 'rejected, China, Sichuan', // proposed provider collateral above maximum: 70926799844 > 70900606754
  f062473: 'rejected, NR', // no online
  f066270: 'rejected, China, Dongguan', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f066781: 'rejected, China, Beijing',
  f066790: 'rejected, China, Beijing',
  f068528: 'rejected, China, Shanghai', // no online
  f073697: 'rejected, China, Karamay',
  f078899: 'rejected, NR',
  f079618: 'rejected, China, Beijing', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f079815: 'rejected, China, Hangzhou', // getting client market balance failed
  f080444: 'rejected, China, Chengdu', // no online
  f080468: 'rejected, NR', // no online
  f080628: 'rejected, NR', // no online
  f081323: 'rejected, UK, Cambridge', // no online
  f083065: 'rejected, China, Taizhou', // no online
  f083638: 'rejected, China, Chongqing',
  f085710: 'rejected, China, Chengdu', // no online
  f086423: 'rejected, China, Chengdu', // no online
  f087530: 'rejected, China, Shenzhen', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f089840: 'rejected, Korea, Yeongdeungpo-gu', // proposed provider collateral above maximum: 70966035742 > 70962596746
  f090387: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f090864: 'rejected, NR',
  f094128: 'rejected, China, Shenzhen', // no online
  f097126: 'rejected, NR',
  f0100066: 'rejected, NR', // no online
  f0101387: 'rejected, China, Shenzhen', // no online
  f0102358: 'rejected, China, Guizhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0107133: 'rejected, NR', // no online
  f0107753: 'rejected, China, Shanghai', // no online
  f0109272: 'rejected, China, Dongguan', // no online
  f0110762: 'rejected, Korea, Seoul', // no online
  f0111658: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0112075: 'rejected, Korea, Seoul', // no online
  f0112087: 'rejected, China, Xiamen', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0112679: 'rejected, NR', // no online
  f0114043: 'rejected, Korea, Seoul', // no online
  f0114687: 'rejected, China, Dongguan', // no online
  f0116628: 'rejected, China, Shanghai', // no online
  f0117118: 'rejected, NR', // no online
  f0118695: 'rejected, Korea, Seoul', // no online
  f0118917: 'rejected, China, Shaoxing', // no online
  f0120546: 'rejected, Korea, Seoul', // no online
  f0120793: 'rejected, Korea, Seoul', // no online
  f0121260: 'rejected, China, Quinzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0121602: 'rejected, China, Hong Kong', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0122398: 'rejected, NR', // no online
  f0122415: 'rejected, Korea, Seoul', // no online
  f0123281: 'rejected, Korea, Seoul', // no online
  f0123536: 'rejected, China, Fuzhou',
  f0124036: 'rejected, China, Nanchang', // no online
  f0124554: 'rejected, Korea, Gimhae', // proposed provider collateral above maximum: 70958065178 > 70926415948
  f0125863: 'rejected, Korea, Seoul', // no online
  f0126037: 'rejected, Korea, Seoul', // no online
  f0126038: 'rejected, Korea, Seoul', // no online
  f0126039: 'rejected, NR', // no online
  f0127352: 'rejected, Korea, Seoul', // no online
  f0130961: 'rejected, Korea, Seongnam-si',
  f0131331: 'rejected, China, Beijing',
  f0131419: 'rejected, China, Beijing',
  f0134285: "rejected, China, Ya'an + USA", // no online
  f0142135: "rejected, China, Ya'an + USA", // no online
  f0142515: 'rejected, NR', // no online
  f0142606: 'rejected, Korea, Gangseo-gu', // no online
  f0143500: 'rejected, China, Zhejiang', // no online
  f0143928: 'rejected, China, Beijing',
  f0144313: 'rejected, NR', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0146301: 'rejected, China, Shenzhen', // no online
  f0146393: 'rejected, China, Foshan', // no online
  f0146428: 'rejected, NR', // proposed provider collateral above maximum: 70899256414 > 70898894338
  f0147284: 'rejected, Korea, Seongnam-si', // proposed provider collateral above maximum: 70966921566 > 70964923872
  f0147565: 'rejected, China, Shenzhen',
  f0149026: 'rejected, China, Shenzhen',
  f0149444: 'rejected, Korea, Gangseo-gu', // no online
  f0151629: 'rejected, NR', // no online
  f0152943: 'rejected, NR', // sh: 1: jq: not found
  f0153804: 'rejected, NR',
  f0154039: 'rejected, NR', // proposed provider collateral above maximum: 70926088342 > 70911814694
  f0155004: 'rejected, Korea, Seoul', // no online
  f0156264: 'rejected, Korea, Seoul', // no online
  f0158000: 'rejected, NR',
  f0158666: 'rejected, China, Beijing',
  f0158950: 'rejected, China, Beijing',
  f0162385: 'rejected, China, Beijing',
  f0164291: 'rejected, China, Fujian', // no online
  f0166327: 'rejected, NR',
  f0166512: 'rejected, NR',
  f0169153: 'rejected, China, Chengdu',
  f0214631: 'rejected, Korea, Seoul', // no online
  f0215497: 'rejected, Korea, Gangseo-gu', // no online
  f0217771: 'rejected, NR', // miner is not accepting unverified storage deals
  f0222674: 'rejected, China, Quinzhou', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f0223663: 'rejected, China, Beijing',
  f0226324: 'rejected, China, Guangxi', // getting client market balance failed
  f0228335: 'rejected, China, Beijing', // node error getting client market balance failed: resolve address f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q: actor not found
  f0228712: 'rejected, USA', // getting client market balance failed
  f0239688: 'rejected, China, Beijing',
  f0364957: 'rejected, China, Sichuan', // getting client market balance failed
  f0364982: 'rejected, Korea, Seoul', // no online
  f0392458: 'rejected, China, Fuzhou', // no online
  f0397428: 'rejected, Japan, Tokyo', // proposed provider collateral above maximum: 70924853040 > 70912829066
  f0398286: 'rejected, China, Beijing', // no online
  f0398863: 'rejected, Korea, Seoul', // no online
  f0398865: 'rejected, Korea, Seoul', // no online
  f0399083: 'rejected, Korea, Seoul + Kwangmyong', // no online
  f0401254: 'rejected, Korea, Uijeongbu-si', // no online
  f0401348: 'rejected, Korea, Chuncheon', // no online
  f0401416: 'rejected, Japan, Fukuoka', // no online
  f0403858: 'rejected, China, Jiangmen', // no online
  f0409069: 'rejected, NR', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0418632: 'rejected, Singapore', // miner is not accepting unverified storage deals
  f0424969: 'rejected, China, Fuzhou', // incorrect provider for deal
  f0432594: 'rejected, China, Zhengzhou', // no online
  f0451936: 'rejected, NR', // no online
  f0461791: 'rejected, Korea, Gwangju', // proposed provider collateral above maximum: 70968178948 > 70900800020
  f0466405: 'rejected, Germany, Niederaula', // no online
  f0470972: 'rejected, China, Shanghai', // proposed provider collateral above maximum: 70968178948 > 70967470244
  f0475664: 'rejected, China, Zhejiang', // no online
  f0476476: 'rejected, Korea, Namyangju', // no online
  f0482136: 'rejected, China, Fuzhou', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0485876: 'rejected, China, Changchun', // no online
  f0492030: 'rejected, USA, Holmdel', // proposed provider collateral above maximum: 70967470244 > 70966631868
  f0492474: "rejected, China, Xi'an", // no online
  f0497031: 'rejected, China, Shangrao', // proposed provider collateral above maximum: 70967470244 > 70966295716

  // Dial

  f01012: 'dial, China, Guangzhou + Hong Kong', // * [/ip4/127.0.0.1/tcp/8888] dial tcp4 127.0.0.1:8888: connect: connection refused  * [/ip4/43.230.90.191/tcp/8888] dial tcp4 0.0.0.0:46775->43.230.90.191:8888: i/o timeout  * [/ip4/183.60.252.190/tcp/8888] dial tcp4 0.0.0.0:46775->183.60.252.190:8888: i/o timeout
  f01154: 'dial, NR', // * [/ip4/192.168.2.50/tcp/1024] dial tcp4 0.0.0.0:46775->192.168.2.50:1024: i/o timeout
  f01155: 'dial, China, Shanghai', // * [/ip4/203.107.44.156/tcp/39770] dial tcp4 0.0.0.0:46775->203.107.44.156:39770: i/o timeout
  f01231: 'dial, Singapore', // * [/ip4/172.17.32.101/tcp/10241] dial tcp4 0.0.0.0:46775->172.17.32.101:10241: i/o timeout
  f01235: 'dial, Singapore', // * [/ip4/170.33.12.95/tcp/16668] dial tcp4 0.0.0.0:46775->170.33.12.95:16668: i/o timeout
  f01287: 'dial, China, Jiaxing, MaiTian', // * [/ip4/172.16.2.123/tcp/5472] dial tcp4 0.0.0.0:46775->172.16.2.123:5472: i/o timeout  * [/ip4/122.225.68.92/tcp/5472] dial tcp4 0.0.0.0:46775->122.225.68.92:5472: i/o timeout
  f01475: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17031] dial tcp4 0.0.0.0:46775->170.33.12.186:17031: i/o timeout
  f01782: 'dial, China, Shanghai', // * [/ip4/139.196.240.164/tcp/11347] dial tcp4 0.0.0.0:46775->139.196.240.164:11347: i/o timeout
  f01799: 'dial, China, Jinan + Singapore', // * [/ip4/115.236.22.207/tcp/63208] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBSVJEJLvLCFVzhYEfLVmznbL4Horztx4W6bXuYa7w1VJ, but remote key matches 12D3KooWEpE1vGMP8CXc1MrhQh9o6yzWPkKiaLCd8FxefsLGriRh  * [/ip4/222.175.139.190/tcp/63208] dial tcp4 0.0.0.0:46775->222.175.139.190:63208: i/o timeout  * [/ip4/195.123.237.226/tcp/62333] dial tcp4 0.0.0.0:46775->195.123.237.226:62333: i/o timeout
  f01800: 'dial, China, Shenzhen + Chengdu', // * [/ip4/182.131.4.48/tcp/33333] dial tcp4 0.0.0.0:46775->182.131.4.48:33333: i/o timeout
  f02299: 'dial, China, Beijing', // * [/ip4/182.18.83.2/tcp/1024] dial tcp4 0.0.0.0:46775->182.18.83.2:1024: i/o timeout
  f02303: 'dial, Singapore', // * [/ip4/8.209.76.63/tcp/48921] dial tcp4 0.0.0.0:46775->8.209.76.63:48921: i/o timeout
  f02403: 'dial, UK, London + Manchester', // * [/ip4/2.58.47.71/tcp/18888] dial tcp4 0.0.0.0:46775->2.58.47.71:18888: i/o timeout  * [/ip4/2.58.45.33/tcp/18888] dial tcp4 0.0.0.0:46775->2.58.45.33:18888: i/o timeout
  f02405: 'dial, China, Shenzhen', // * [/ip4/192.168.231.206/tcp/4123] dial tcp4 0.0.0.0:46775->192.168.231.206:4123: i/o timeout
  f02417: 'dial, China, Zhangjiakou', // * [/ip4/116.132.221.10/tcp/10240] dial tcp4 0.0.0.0:46775->116.132.221.10:10240: i/o timeout
  f02420: 'dial, USA', // * [/ip4/47.252.2.93/tcp/34571] dial tcp4 0.0.0.0:46775->47.252.2.93:34571: i/o timeout
  f02422: "dial, China, Xi'an", // * [/ip4/117.38.4.82/tcp/22347] dial tcp4 0.0.0.0:46775->117.38.4.82:22347: i/o timeout
  f02425: 'dial, China, Shanghai', // * [/ip4/103.78.229.73/tcp/14567] dial tcp4 0.0.0.0:46775->103.78.229.73:14567: i/o timeout
  f02438: 'dial, China, Guangdong', // * [/ip4/47.115.10.99/tcp/14567] dial tcp4 0.0.0.0:46775->47.115.10.99:14567: i/o timeout
  f02492: 'dial, China, Guangdong', // * [/ip4/103.142.248.7/tcp/3347] dial tcp4 0.0.0.0:46775->103.142.248.7:3347: i/o timeout
  f02503: 'dial, Singapore', // * [/ip4/8.209.71.125/tcp/31432] dial tcp4 0.0.0.0:46775->8.209.71.125:31432: i/o timeout
  f02528: 'dial, Singapore', // * [/ip4/8.209.70.199/tcp/58692] dial tcp4 0.0.0.0:46775->8.209.70.199:58692: i/o timeout
  f02610: 'dial, Netherlands', // * [/ip4/213.227.129.197/tcp/14567] dial tcp4 0.0.0.0:46775->213.227.129.197:14567: i/o timeout
  f02614: 'dial, Singapore', // * [/ip4/170.33.9.50/tcp/32633] dial tcp4 0.0.0.0:46775->170.33.9.50:32633: i/o timeout
  f02654: 'dial, China, Shanghai', // * [/ip4/114.88.222.181/tcp/43355] dial tcp4 0.0.0.0:46775->114.88.222.181:43355: i/o timeout
  f02721: 'dial, USA', // * [/ip4/135.90.74.200/tcp/14567] dial tcp4 0.0.0.0:46775->135.90.74.200:14567: i/o timeout
  f02723: 'dial, China, Tongling', // * [/ip4/60.173.23.17/tcp/23456] dial tcp4 0.0.0.0:46775->60.173.23.17:23456: i/o timeout
  f02725: 'dial, China, Hong Kong', // * [/ip4/101.32.38.57/tcp/18899] dial tcp4 0.0.0.0:46775->101.32.38.57:18899: i/o timeout
  f02726: 'dial, USA, Brooklyn', // * [/ip4/169.62.51.212/tcp/14567] dial tcp4 0.0.0.0:46775->169.62.51.212:14567: i/o timeout
  f02731: 'dial, NR', // * [/ip4/10.30.8.4/tcp/14567] dial tcp4 0.0.0.0:46775->10.30.8.4:14567: i/o timeout
  f02767: 'dial, Germany, Frankfurt', // * [/ip4/18.192.27.227/tcp/37722] dial tcp4 0.0.0.0:46775->18.192.27.227:37722: i/o timeout
  f02838: 'dial, China, Chengdu', // * [/ip4/118.123.228.9/tcp/48633] dial tcp4 0.0.0.0:46775->118.123.228.9:48633: i/o timeout
  f03002: 'dial, China, Chongqing + Singapore', // * [/ip4/8.209.64.163/tcp/18880] dial tcp4 0.0.0.0:46775->8.209.64.163:18880: i/o timeout  * [/ip4/101.206.156.202/tcp/18880] dial tcp4 0.0.0.0:46775->101.206.156.202:18880: i/o timeout
  f03144: 'dial, China, Hong Kong', // * [/ip4/103.214.41.38/tcp/23456] dial tcp4 0.0.0.0:46775->103.214.41.38:23456: i/o timeout
  f03176: 'dial, USA, San Mateo', // * [/ip4/47.88.55.220/tcp/15470] dial tcp4 0.0.0.0:46775->47.88.55.220:15470: i/o timeout  * [/ip4/47.88.57.241/tcp/15470] dial tcp4 0.0.0.0:46775->47.88.57.241:15470: i/o timeout
  f03266: 'dial, USA', // * [/ip4/169.63.27.151/tcp/14567] dial tcp4 0.0.0.0:46775->169.63.27.151:14567: i/o timeout
  f03287: 'dial, USA', // * [/ip4/149.81.122.165/tcp/14567] dial tcp4 0.0.0.0:46775->149.81.122.165:14567: i/o timeout
  f03325: 'dial, China, Guangdong', // * [/ip4/113.107.201.186/tcp/42243] dial tcp4 113.107.201.186:42243: connect: connection refused
  f03328: 'dial, China, Xinxiang, Golden Miner', // * [/ip4/27.50.142.61/tcp/2347] dial tcp4 0.0.0.0:46775->27.50.142.61:2347: i/o timeout
  f03358: 'dial, China, Ordos', // * [/ip4/1.183.72.211/tcp/30001] dial tcp4 0.0.0.0:46775->1.183.72.211:30001: i/o timeout
  f03363: 'dial, China, Ordos', // * [/ip4/1.183.72.210/tcp/30003] dial tcp4 0.0.0.0:46775->1.183.72.210:30003: i/o timeout
  f03367: 'dial, Singapore', // * [/ip4/8.209.99.1/tcp/14567] dial tcp4 0.0.0.0:46775->8.209.99.1:14567: i/o timeout
  f03488: 'dial, Korea, Yeongdeungpo-dong', // * [/ip4/112.216.168.42/tcp/10000] dial tcp4 112.216.168.42:10000: connect: connection refused
  f04443: 'dial, China, Shanghai', // * [/ip4/116.229.183.166/tcp/29847] dial tcp4 0.0.0.0:46775->116.229.183.166:29847: i/o timeout
  f07824: 'dial, NR', // * [/ip4/10.133.13.111/tcp/32759] dial tcp4 0.0.0.0:46775->10.133.13.111:32759: i/o timeout
  f07919: 'dial, China, Beijing, Shanghai, Hunan', // * [/ip4/47.101.4.131/tcp/23456] failed to negotiate security protocol: read tcp4 144.217.11.204:46775->47.101.4.131:23456: read: connection reset by peer  * [/ip4/175.6.66.78/tcp/44913] dial tcp4 0.0.0.0:46775->175.6.66.78:44913: i/o timeout  * [/ip4/101.32.198.187/tcp/23456] dial tcp4 0.0.0.0:46775->101.32.198.187:23456: i/o timeout  * [/ip4/101.32.198.186/tcp/23456] dial tcp4 0.0.0.0:46775->101.32.198.186:23456: i/o timeout  * [/ip4/139.196.136.126/tcp/23456] failed to negotiate security protocol: read tcp4 144.217.11.204:46775->139.196.136.126:23456: read: connection reset by peer
  f07969: 'dial, China, Hangzhou', // * [/ip4/121.52.246.48/tcp/5002] dial tcp4 0.0.0.0:46775->121.52.246.48:5002: i/o timeout
  f08091: 'dial, NR', // * [/ip4/0.0.0.0/tcp/5472] dial tcp4 0.0.0.0:5472: connect: connection refused
  f08101: 'dial, NR', // * [/ip4/192.168.3.11/tcp/32759] dial tcp4 0.0.0.0:46775->192.168.3.11:32759: i/o timeout
  f08148: 'dial, Hong Kong', // * [/ip4/103.108.182.27/tcp/30031] dial tcp4 0.0.0.0:46775->103.108.182.27:30031: i/o timeout
  f08242: 'dial, USA', // * [/ip4/47.242.56.117/tcp/6789] dial tcp4 0.0.0.0:46775->47.242.56.117:6789: i/o timeout
  f09002: "dial, China, Xi'an", // * [/ip4/113.200.194.196/tcp/32634] dial tcp4 0.0.0.0:46775->113.200.194.196:32634: i/o timeout
  f09037: 'dial, Singapore', // * [/ip4/170.33.12.95/tcp/16666] dial tcp4 0.0.0.0:46775->170.33.12.95:16666: i/o timeout
  f09589: 'dial, China, Changsha', // * [/ip4/175.10.162.119/tcp/5472] dial tcp4 0.0.0.0:46775->175.10.162.119:5472: i/o timeout
  f09652: 'dial, Singapore', // * [/ip4/170.33.9.50/tcp/32632] dial tcp4 0.0.0.0:46775->170.33.9.50:32632: i/o timeout
  f09675: 'dial, USA', // * [/ip4/47.242.94.248/tcp/9999] dial tcp4 0.0.0.0:46775->47.242.94.248:9999: i/o timeout  * [/ip4/58.57.65.61/tcp/9999] dial tcp4 0.0.0.0:46775->58.57.65.61:9999: i/o timeout
  f09710: 'dial, China, Shenzhen', // * [/ip4/103.44.253.56/tcp/40573] dial tcp4 0.0.0.0:46775->103.44.253.56:40573: i/o timeout
  f010010: 'dial, China, Changzhou', // * [/ip4/61.177.78.101/tcp/9981] dial tcp4 0.0.0.0:46775->61.177.78.101:9981: i/o timeout
  f010048: 'dial, China, Shanghai', // * [/ip4/124.78.146.207/tcp/65500] dial tcp4 0.0.0.0:46775->124.78.146.207:65500: i/o timeout
  f010056: 'dial, Singapore', // * [/ip4/8.209.82.79/tcp/14567] dial tcp4 0.0.0.0:46775->8.209.82.79:14567: i/o timeout
  f010225: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12312] dial tcp4 0.0.0.0:46775->8.209.107.150:12312: i/o timeout
  f010247: 'dial, China, Yantai', // * [/ip4/122.14.201.169/tcp/10240] dial tcp4 0.0.0.0:46775->122.14.201.169:10240: i/o timeout
  f010400: 'dial, China, Shenyang', // * [/ip4/59.44.27.130/tcp/8787] dial tcp4 59.44.27.130:8787: connect: connection refused
  f010424: 'dial, Australia, Sydney', // * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:46775->43.241.189.214:39438: i/o timeout
  f010491: 'dial, China, Shenzhen', // * [/ip4/116.24.57.90/tcp/8888] dial tcp4 0.0.0.0:46775->116.24.57.90:8888: i/o timeout
  f010501: 'dial, China, Hangzhou, Interstellar Roewe', // * [/ip4/183.134.218.26/tcp/21735] dial tcp4 0.0.0.0:46775->183.134.218.26:21735: i/o timeout
  f010523: 'dial, China, Beijing, Interstellar Roewe', // * [/ip4/123.58.99.210/tcp/21735] dial tcp4 123.58.99.210:21735: connect: no route to host
  f010538: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12320] dial tcp4 0.0.0.0:46775->8.209.107.150:12320: i/o timeout
  f010616: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12313] dial tcp4 0.0.0.0:46775->8.209.107.150:12313: i/o timeout
  f014251: 'dial, China, Shenzhen', // * [/ip4/58.220.66.66/tcp/46166] dial tcp4 0.0.0.0:46775->58.220.66.66:46166: i/o timeout
  f014311: 'dial, Germany, Frankfurt', // * [/ip4/162.62.55.44/tcp/12309] dial tcp4 0.0.0.0:46775->162.62.55.44:12309: i/o timeout
  f014386: 'dial, China, Panzhihua', // * [/ip4/180.149.130.16/tcp/9845] dial tcp4 0.0.0.0:46775->180.149.130.16:9845: i/o timeout
  f014392: 'dial, USA + Russia, Khabarovsk + Japan, Heiwajima', // * [/ip4/66.42.38.110/tcp/9990] dial tcp4 0.0.0.0:46775->66.42.38.110:9990: i/o timeout  * [/ip4/172.247.228.122/tcp/9999] dial tcp4 0.0.0.0:46775->172.247.228.122:9999: i/o timeout  * [/ip4/92.223.72.130/tcp/9999] dial tcp4 0.0.0.0:46775->92.223.72.130:9999: i/o timeout
  f014394: 'dial, China, Suzhou, IPFSCloud', // * [/ip4/222.92.5.147/tcp/42799] dial tcp4 0.0.0.0:46775->222.92.5.147:42799: i/o timeout
  f014395: 'dial, China, Dongguan', // * [/ip4/125.93.73.102/tcp/51105] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJyNmap2Z6WWb6xBqDwUpKeFkGHaBHDkMKhrkd6jj6FEY, but remote key matches 12D3KooWB6MM5Fda1RdDyTdJCPMpvHFq6HSJfPV9DeoqGSbfwe1d
  f014415: 'dial, USA', // * [/ip4/13.248.165.152/tcp/33612] failed to negotiate security protocol: EOF
  f014487: 'dial, Singapore', // * [/ip4/47.241.59.58/tcp/45455] dial tcp4 0.0.0.0:46775->47.241.59.58:45455: i/o timeout
  f014522: 'dial, China, Shanghai', // * [/ip4/81.68.170.164/tcp/5474] dial tcp4 0.0.0.0:46775->81.68.170.164:5474: i/o timeout
  f014706: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12308] dial tcp4 0.0.0.0:46775->8.209.107.150:12308: i/o timeout
  f014778: 'dial, Germany, Frankfurt', // * [/ip4/162.62.55.44/tcp/12310] dial tcp4 0.0.0.0:46775->162.62.55.44:12310: i/o timeout
  f014804: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12314] dial tcp4 0.0.0.0:46775->8.209.107.150:12314: i/o timeout
  f015685: 'dial, China, Shanghai', // * [/ip4/222.64.141.185/tcp/40321] dial tcp4 0.0.0.0:46775->222.64.141.185:40321: i/o timeout
  f015731: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12329] dial tcp4 0.0.0.0:46775->8.209.107.150:12329: i/o timeout
  f015767: 'dial, Russia, Khabarovsk + Japan, Khabarovsk + USA', // * [/ip4/66.42.38.110/tcp/9998] dial tcp4 0.0.0.0:46775->66.42.38.110:9998: i/o timeout  * [/ip4/92.223.72.130/tcp/9998] dial tcp4 0.0.0.0:46775->92.223.72.130:9998: i/o timeout  * [/ip4/172.247.228.122/tcp/9998] dial tcp4 0.0.0.0:46775->172.247.228.122:9998: i/o timeout
  f015848: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12321] dial tcp4 0.0.0.0:46775->8.209.107.150:12321: i/o timeout
  f015919: 'dial, Singapore', // * [/ip4/8.209.107.150/tcp/12316] dial tcp4 0.0.0.0:46775->8.209.107.150:12316: i/o timeout
  f015922: 'dial, Germany, Frankfurt', // * [/ip4/162.62.55.44/tcp/12317] dial tcp4 0.0.0.0:46775->162.62.55.44:12317: i/o timeout
  f015926: 'dial, Germany, Frankfurt', // * [/ip4/162.62.55.44/tcp/12319] dial tcp4 0.0.0.0:46775->162.62.55.44:12319: i/o timeout
  f016563: 'dial, China, Deyang + Singapore', // * [/ip4/125.64.78.27/tcp/8001] dial tcp4 125.64.78.27:8001: connect: connection refused  * [/ip4/161.117.186.53/tcp/8001] failed to negotiate security protocol: read tcp4 144.217.11.204:46775->161.117.186.53:8001: read: connection reset by peer  * [/ip4/192.168.109.1/tcp/8001] dial tcp4 0.0.0.0:46775->192.168.109.1:8001: i/o timeout
  f019074: 'dial, NR', // * [/ip4/192.168.2.55/tcp/3000] dial tcp4 0.0.0.0:46775->192.168.2.55:3000: i/o timeout
  f019100: 'dial, Romania, Cluj-Napoca, noisyfan', // * [/ip4/79.119.122.118/tcp/55555] dial tcp4 0.0.0.0:46775->79.119.122.118:55555: i/o timeout
  f019638: 'dial, China, Ordos', // * [/ip4/1.183.72.210/tcp/30005] dial tcp4 0.0.0.0:46775->1.183.72.210:30005: i/o timeout
  f020315: 'dial, China, Guangzhou', // * [/ip4/103.104.170.72/tcp/56432] dial tcp4 0.0.0.0:46775->103.104.170.72:56432: i/o timeout
  f020330: 'dial, Singapore', // * [/ip4/8.130.24.60/tcp/14567] dial tcp4 0.0.0.0:46775->8.130.24.60:14567: i/o timeout
  f020331: 'dial, China, Beijing', // * [/ip4/39.101.70.154/tcp/14567] dial tcp4 0.0.0.0:46775->39.101.70.154:14567: i/o timeout
  f020436: 'dial, China, Beijing', // * [/ip4/111.197.6.57/tcp/24002] dial tcp4 0.0.0.0:46775->111.197.6.57:24002: i/o timeout
  f020452: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17012] dial tcp4 0.0.0.0:46775->170.33.12.186:17012: i/o timeout
  f020522: 'dial, Singapore', // * [/ip4/8.211.49.16/tcp/14567] dial tcp4 0.0.0.0:46775->8.211.49.16:14567: i/o timeout
  f020604: 'dial, Singapore', // * [/ip4/8.209.106.203/tcp/14567] dial tcp4 0.0.0.0:46775->8.209.106.203:14567: i/o timeout
  f020618: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17011] dial tcp4 0.0.0.0:46775->170.33.12.186:17011: i/o timeout
  f020742: 'dial, China, Shanghai', // * [/ip4/175.24.25.61/tcp/53456] dial tcp4 0.0.0.0:46775->175.24.25.61:53456: i/o timeout
  f021461: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17361] dial tcp4 0.0.0.0:46775->170.33.12.186:17361: i/o timeout
  f021479: 'dial, NR', // * [/ip4/172.18.130.45/tcp/10241] dial tcp4 0.0.0.0:46775->172.18.130.45:10241: i/o timeout
  f021525: 'dial, China, Guangdong', // * [/ip4/121.201.41.87/tcp/14567] dial tcp4 0.0.0.0:46775->121.201.41.87:14567: i/o timeout
  f021532: 'dial, China, Shanghai', // * [/ip4/121.46.237.2/tcp/23456] dial tcp4 0.0.0.0:46775->121.46.237.2:23456: i/o timeout
  f021547: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/17329] dial tcp4 0.0.0.0:46775->170.33.12.186:17329: i/o timeout
  f022111: 'dial, China, Quanzhou', // * [/ip4/112.47.13.98/tcp/8081] dial tcp4 0.0.0.0:46775->112.47.13.98:8081: i/o timeout
  f022227: 'dial, China, Jiangsu', // * [/ip4/112.30.158.226/tcp/10240] dial tcp4 0.0.0.0:46775->112.30.158.226:10240: i/o timeout
  f022522: 'dial, China, Dongguan', // * [/ip4/113.105.174.12/tcp/10000] dial tcp4 0.0.0.0:46775->113.105.174.12:10000: i/o timeout
  f022687: 'dial, China, Chengdu', // * [/ip4/182.131.4.194/tcp/10080] dial tcp4 0.0.0.0:46775->182.131.4.194:10080: i/o timeout
  f022853: 'dial, China, Fuzhou', // * [/ip4/150.242.97.226/tcp/11105] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRrw3MpPrr5gaVyv9hHAyLosb76osgrGAKuByXycihWEY, but remote key matches 12D3KooWMarcqTkhZsmPHAZmZvaGNh6WC16hEfVhA6fvyJVe5HVB
  f023200: 'dial, China, Shanghai', // * [/ip4/175.24.25.61/tcp/13457] dial tcp4 0.0.0.0:46775->175.24.25.61:13457: i/o timeout
  f023462: 'dial, China, Chongqing', // * [/ip4/101.206.156.202/tcp/23018] dial tcp4 101.206.156.202:23018: connect: connection refused
  f023985: 'dial, China, Chongqing', // * [/ip4/101.206.156.202/tcp/23152] dial tcp4 101.206.156.202:23152: connect: connection refused
  f040218: 'dial, China, Wuxi', // * [/ip4/58.215.14.146/tcp/30000] dial tcp4 0.0.0.0:46775->58.215.14.146:30000: i/o timeout
  f057127: 'dial, China, Suzhou', // * [/ip4/58.211.213.210/tcp/20108] dial tcp4 58.211.213.210:20108: connect: connection refused
  f057466: 'dial, China, Guangzhou', // * [/ip4/116.21.71.7/tcp/24001] dial tcp4 0.0.0.0:46775->116.21.71.7:24001: i/o timeout
  f064668: 'dial, China, Hong Kong', // * [/ip4/203.34.199.23/tcp/46717] dial tcp4 203.34.199.23:46717: connect: connection refused
  f086028: 'dial, NR', // * [/ip6/::1/tcp/38985] dial tcp6 [::1]:38985: connect: connection refused  * [/ip4/127.0.0.1/tcp/36033] dial tcp4 127.0.0.1:36033: connect: connection refused  * [/ip4/61.147.117.2/tcp/3445] dial tcp4 0.0.0.0:46775->61.147.117.2:3445: i/o timeout  * [/ip4/61.147.117.2/tcp/3591] dial tcp4 0.0.0.0:46775->61.147.117.2:3591: i/o timeout  * [/ip4/172.16.6.14/tcp/36033] dial tcp4 0.0.0.0:46775->172.16.6.14:36033: i/o timeout
  f089767: 'dial, USA, Bowie', // * [/ip4/76.223.76.26/tcp/33905] dial tcp4 0.0.0.0:46775->76.223.76.26:33905: i/o timeout  * [/ip4/129.168.0.1/tcp/912] dial tcp4 0.0.0.0:46775->129.168.0.1:912: i/o timeout
  f090893: 'dial, USA', // * [/ip4/6.143.143.121/tcp/912] dial tcp4 0.0.0.0:46775->6.143.143.121:912: i/o timeout  * [/ip4/76.223.53.59/tcp/33912] dial tcp4 0.0.0.0:46775->76.223.53.59:33912: i/o timeout
  f096133: 'dial, China, Changsha + Dazhou', // * [/ip4/175.6.66.78/tcp/14913] dial tcp4 0.0.0.0:46775->175.6.66.78:14913: i/o timeout  * [/ip4/175.6.68.154/tcp/14913] dial tcp4 0.0.0.0:46775->175.6.68.154:14913: i/o timeout
  f099387: 'dial, China, Shijiazhuang', // * [/ip4/124.239.180.3/tcp/24001] dial tcp4 124.239.180.3:24001: connect: connection refused
  f0106363: 'dial, NR', // * [/ip4/127.0.0.1/tcp/24001] dial tcp4 127.0.0.1:24001: connect: connection refused
  f0107118: 'dial, China, Hangzhou + Zhejiang', // * [/ip4/125.119.85.69/tcp/24001] dial tcp4 0.0.0.0:46775->125.119.85.69:24001: i/o timeout
  f0107127: 'dial, USA, Daytona Beach', // * [/ip4/172.3.161.97/tcp/24001] dial tcp4 172.3.161.97:24001: connect: connection refused
  f0110804: 'dial, USA, Santa Clara', // * [/ip4/147.92.91.26/tcp/56320] dial tcp4 0.0.0.0:46775->147.92.91.26:56320: i/o timeout
  f0113008: 'dial, China, Hong Kong', // * [/ip4/217.145.236.27/tcp/24001] dial tcp4 0.0.0.0:46775->217.145.236.27:24001: i/o timeout
  f0114867: 'dial, NR', // * [/ip4/175.6.66.78/tcp/64913] dial tcp4 0.0.0.0:46775->175.6.66.78:64913: i/o timeout
  f0117146: 'dial, China, Beijing', // * [/ip4/106.12.253.240/tcp/24001] dial tcp4 106.12.253.240:24001: connect: connection refused
  f0120909: 'dial, China, Changsha', // * [/ip4/127.0.0.1/tcp/7502] dial tcp4 127.0.0.1:7502: connect: connection refused
  f0128191: 'dial, Korea, Gangnam-gu', // * [/ip4/222.121.76.41/tcp/24002] dial tcp4 0.0.0.0:46775->222.121.76.41:24002: i/o timeout
  f0141446: 'dial, China, Suzhou', // * [/ip4/172.18.6.127/tcp/2347] dial tcp4 0.0.0.0:46775->172.18.6.127:2347: i/o timeout  * [/ip4/61.155.145.103/tcp/2347] dial tcp4 0.0.0.0:46775->61.155.145.103:2347: i/o timeout
  f0144194: 'dial, NR', // * [/ip4/175.6.68.154/tcp/49913] dial tcp4 0.0.0.0:46775->175.6.68.154:49913: i/o timeout
  f0145018: 'dial, Korea', // * [/ip4/203.248.27.91/tcp/45018] dial tcp4 0.0.0.0:46775->203.248.27.91:45018: i/o timeout
  f0225676: 'dial, Korea, Guro-gu', // * [/ip4/222.112.183.196/tcp/24001] dial tcp4 0.0.0.0:46775->222.112.183.196:24001: i/o timeout
  f0241022: 'dial, Korea, Geumcheon-gu', // * [/ip4/61.82.145.85/tcp/24001] dial tcp4 61.82.145.85:24001: connect: connection refused
  f0392808: 'dial, NR', // * [/ip4/172.16.35.3/tcp/6789] dial tcp4 0.0.0.0:46775->172.16.35.3:6789: i/o timeout
  f0393119: 'dial, NR', // * [/ip4/172.16.35.5/tcp/6789] dial tcp4 0.0.0.0:46775->172.16.35.5:6789: i/o timeout
  f0393359: 'dial, China, Suzhou', // * [/ip4/58.240.235.162/tcp/24001] dial tcp4 0.0.0.0:46775->58.240.235.162:24001: i/o timeout
  f0397837: 'dial, China, Fuzhou', // * [/ip4/220.176.125.252/tcp/23450] dial tcp4 0.0.0.0:46775->220.176.125.252:23450: i/o timeout
  f0400681: 'dial, USA, Queens', // * [/ip4/72.80.136.205/tcp/24001] dial tcp4 0.0.0.0:46775->72.80.136.205:24001: i/o timeout
  f0401303: 'dial, Korea, Ulju-gun', // * [/ip4/61.76.2.99/tcp/24001] dial tcp4 0.0.0.0:46775->61.76.2.99:24001: i/o timeout
  f0403896: 'dial, USA, Huntersville', // * [/ip4/75.190.204.189/tcp/54998] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBpuRHiQ2CAruoUG5kY79cGRJaS8XoV2tHGt4e8URJoVx, but remote key matches 12D3KooWPsKCyqHajqb2xnPYEWFwbTuXssARKG7dagKq85D3wc1J
  f0427967: 'dial, China, Changsha', // * [/ip4/113.246.243.77/tcp/6660] dial tcp4 113.246.243.77:6660: connect: connection refused
  f0427994: 'dial, China, Jinhua', // * [/ip4/115.209.22.14/tcp/24001] dial tcp4 0.0.0.0:46775->115.209.22.14:24001: i/o timeout
  f0427996: 'dial, Canada, Bois-des-Filion', // * [/ip4/142.116.36.123/tcp/51455] dial tcp4 0.0.0.0:46775->142.116.36.123:51455: i/o timeout
  f0429006: 'dial, China, Zhangzhou', // * [/ip4/117.29.228.50/tcp/20001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWRtij9cQeVVMi7MhNswmaAWVhuXAVWctTsjwoWpJsaou4, but remote key matches 12D3KooW9qbm7iYfBeaGxxDkovwAnYqb2o5GM7xqQSCAcHisC8H3
  f0435140: 'dial, China, Yangzhou', // * [/ip4/58.220.66.161/tcp/1024] dial tcp4 0.0.0.0:46775->58.220.66.161:1024: i/o timeout
  f0447181: 'dial, China, Zibo', // * [/ip4/218.56.104.202/tcp/24002] dial tcp4 0.0.0.0:46775->218.56.104.202:24002: i/o timeout

  // XNR (Not routable)

  f02399: 'xnr, China, Shanghai',
  f03344: 'xnr, China, Guangzhou',
  f014699: 'xnr, NR',
  f021870: 'xnr, China, Jieyang',
  f022922: 'xnr, China, Shenzhen, CAAP-MEG',
  f029585: 'xnr, NR',
  f082001: 'xnr, NR',
  f087890: 'xnr, NR',
  f093658: 'xnr, China, Fujian',
  f094764: 'xnr, NR',
  f098770: 'xnr, USA, Pontiac',
  f0101069: 'xnr, NR',
  f0102313: 'xnr, Korea, Gangseo-gu',
  f0103710: 'xnr, NR',
  f0107322: 'xnr, China, Chengdu',
  f0110283: 'xnr, China, Zhongshan',
  f0111544: 'xnr, Korea, Seoul',
  f0112691: 'xnr, Korea, Seoul',
  f0115238: 'xnr, China, Shenyang',
  f0117211: 'xnr, NR',
  f0117556: 'xnr, NR',
  f0118837: 'xnr, Korea, Seoul',
  f0123275: 'xnr, Korea, Seoul',
  f0124904: 'xnr, NR',
  f0127353: 'xnr, Korea, Seoul',
  f0127354: 'xnr, Korea, Seoul',
  f0127627: 'xnr, NR',
  f0127628: 'xnr, NR',
  f0127629: 'xnr, NR',
  f0127980: 'xnr, Korea, Seoul',
  f0128580: 'xnr, Korea, Seoul',
  f0128581: 'xnr, Korea, Seoul',
  f0128582: 'xnr, Korea, Seoul',
  f0130868: 'xnr, NR',
  f0133379: 'xnr, NR',
  f0141634: 'xnr, China, Changsha',
  f0143110: 'xnr, NR',
  f0146751: 'xnr, China, Jiangsu',
  f0148391: 'xnr, China, Changsha + Japan, Tokyo',
  f0158613: 'xnr, NR',
  f0164126: 'xnr, NR',
  f0165533: 'xnr, NR',
  f0214181: 'xnr, Australia, Mosman',
  f0218559: 'xnr, NR',
  f0223101: 'xnr, NR',
  f0224599: 'xnr, China, Fuzhou',
  f0224984: 'xnr, China, Wuhan',
  f0240392: 'xnr, NR',
  f0241536: 'xnr, NR',
  f0364983: 'xnr, Korea, Seoul',
  f0392194: 'xnr, NR',
  f0399321: 'xnr, NR',
  f0399323: 'xnr, NR',
  f0400264: 'xnr, NR',
  f0407287: 'xnr, NR',
  f0407410: 'xnr, NR',
  f0410242: 'xnr, NR',
  f0423371: 'xnr, Korea, Seoul',
  f0423381: 'xnr, Korea, Seoul',
  f0423713: 'xnr, China, Qingdao',
  f0428150: 'xnr, China, Xiamen',
  f0428661: 'xnr, NR',
  f0432329: 'xnr, NR',
  f0432773: 'xnr, NR',
  f0434411: 'xnr, NR',
  f0435045: 'xnr, Korea, Ulju-gun',
  f0435971: 'xnr, NR',
  f0436065: 'xnr, NR',
  f0441020: 'xnr, NR',
  f0441240: 'xnr, NR',
  f0441372: 'xnr, NR',
  f0444122: 'xnr, NR',
  f0447651: 'xnr, NR',
  f0449072: 'xnr, Korea, Jung-gu',
  f0449088: 'xnr, Korea, Jung-gu',
  f0449196: 'xnr, NR',
  f0456374: 'xnr, NR',
  f0463030: 'xnr, NR',
  f0465286: 'xnr, NR',
  f0467640: 'xnr, NR',
  f0472061: 'xnr, NR',
  f0488888: 'xnr, China, Nanchang',
  f0492222: 'xnr, Canada, Vancouver',

  // Delisted

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
  f07796: 'delist, China, Hunan', // carry-over
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
  f09594: 'delist, NR', // carry-over
  f09610: 'delist, China, Beijing', // carry-over
  f09629: 'delist, NR', // carry-over
  f09662: 'delist, Canada, Surrey', // carry-over
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
  f056393: 'delist, NR', // carry-over
  f057115: 'delist, China, Nanyang', // carry-over
  f057560: 'delist, NR', // carry-over
  f057842: 'delist, Korea, Gyeonggi-do', // carry-over
  f058003: 'delist, China, Shenzhen', // carry-over
  f058321: 'delist, China, Dongguan', // carry-over
  f059280: 'delist, China, Shenzhen', // carry-over
  f059652: 'delist, China, Beijing', // carry-over
  f059705: 'delist, Korea, Naju', // carry-over
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
  f0107171: 'delist, China, Karamay', // carry-over
  f0109163: 'delist, Korea, Songpa-gu', // carry-over
  f0109349: 'delist, NR', // carry-over
  f0110101: 'delist, Korea, Goyang-si', // carry-over
  f0110198: 'delist, Korea, Hwaseong-si', // carry-over
  f0110488: 'delist, China, Chongqing', // carry-over
  f0116513: 'delist, NR', // carry-over
  f0119336: 'delist, Canada, Ottawa', // carry-over
  f0120141: 'delist, Korea, Gangnam-gu', // carry-over
  f0125962: 'delist, Korea, Yongin-si', // carry-over
  f0126535: 'delist, China, Hong Kong', // carry-over
  f0127151: 'delist, Korea, Yongin-si', // carry-over
  f0127157: 'delist, Korea, Yongin-si', // carry-over
  f0127256: 'delist, Korea, Yongin-si', // carry-over
  f0128238: 'delist, Korea, Yongin-si', // carry-over
  f0128239: 'delist, Korea, Yongin-si', // carry-over
  f0128242: 'delist, Korea, Yongin-si', // carry-over
  f0131359: 'delist, China, Fuzhou', // carry-over
  f0132765: 'delist, NR', // carry-over
  f0133486: 'delist, China, Shenzhen', // carry-over
  f0136425: 'delist, Korea, Busan', // carry-over
  f0137475: 'delist, China, Beijing', // carry-over
  f0147676: 'delist, Korea, Seoul', // carry-over
  f0149670: 'delist, NR', // carry-over
  f0156232: 'delist, China, Fuzhou', // carry-over
  f0160291: 'delist, USA', // carry-over
  f0168371: 'delist, Korea, Namyangju', // carry-over
  f0213894: 'delist, China, Hangzhou', // carry-over
  f0215360: 'delist, France', // carry-over
  f0215404: 'delist, China, Suzhou', // carry-over
  f0216068: 'delist, Romania, Iasi', // carry-over
  f0216139: 'delist, Korea, Goyang-si', // carry-over
  f0219415: 'delist, USA, Boardman', // carry-over
  f0219631: 'delist, USA, Council Bluffs', // carry-over
  f0224782: 'delist, USA', // carry-over
  f0226073: 'delist, China, Shenzhen', // carry-over
  f0228350: 'delist, China, Hangzhou', // carry-over
  f0228388: 'delist, USA, Cleveland', // carry-over
  f0230827: 'delist, Korea, Paju', // carry-over
  f0231135: 'delist, USA, Huntersville', // carry-over
  f0232136: 'delist, NR', // carry-over
  f0232437: 'delist, NR', // carry-over
  f0239266: 'delist, NR', // carry-over
  f0240893: 'delist, USA, Queens', // carry-over
  f0241272: 'delist, France, Deuil-la-Barre', // carry-over
  f0241284: 'delist, China, Jiangmen', // carry-over
  f0242260: 'delist, USA, St. Louis', // carry-over
  f0242416: 'delist, USA, Morganville', // carry-over
  f0347476: 'delist, China, Zhengzhou', // carry-over
  f0391370: 'delist, USA, Queens', // carry-over
  f0391520: 'delist, China, Guangzhou', // carry-over
  f0392707: 'delist, Korea, Chuncheon', // carry-over
  f0392712: 'delist, Korea, Ulju-gun', // carry-over
  f0392733: 'delist, USA, Huntersville', // carry-over
  f0394461: 'delist, Korea, Seoul', // carry-over
  f0398338: 'delist, USA, Cleveland', // carry-over
  f0399610: 'delist, Ukraine', // carry-over
  f0402975: 'delist, Korea', // carry-over
  f0408184: 'delist, Switzerland', // carry-over
  f0408696: 'delist, China, Taiwan, Taipei', // carry-over
  f0410023: 'delist, NR', // carry-over
  f0413178: 'delist, China, Suqian', // carry-over
  f0414184: 'delist, Spain, Madrid' // carry-over
}

export default annotations
