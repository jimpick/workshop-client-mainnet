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
  f01016246: 'new, autolisted', // carry-over
  f01075157: 'new, auto', // carry-over

  // Inflight

  f010446: 'inflight, Netherlands, Angelo', // FundsReserved: about 2 hours
  f010505: 'inflight, China, Wuhan, Interstellar Roewe', // FundsReserved: about 2 hours
  f0119146: 'inflight, NR', // FundsReserved: about 1 hour
  f0123536: 'inflight, China, Fuzhou', // FundsReserved: about 1 hour
  f0127628: 'inflight, NR', // FundsReserved: about 1 hour
  f0128381: 'inflight, NR', // FundsReserved: about 1 hour
  f0128499: 'inflight, NR', // FundsReserved: about 1 hour
  f0130906: 'inflight, NR', // FundsReserved: about 1 hour
  f0132313: 'inflight, NR', // FundsReserved: about 1 hour
  f0134609: 'inflight, NR', // FundsReserved: about 1 hour
  f0134839: 'inflight, NR', // FundsReserved: about 1 hour
  f0135469: 'inflight, NR', // FundsReserved: about 1 hour
  f0135551: 'inflight, NR', // FundsReserved: about 1 hour
  f0135934: 'inflight, NR', // FundsReserved: about 1 hour
  f0136138: 'inflight, NR', // FundsReserved: about 1 hour
  f0136399: 'inflight, NR', // FundsReserved: about 1 hour
  f0136668: 'inflight, NR', // FundsReserved: about 1 hour
  f0137594: 'inflight, NR', // FundsReserved: about 1 hour
  f0141761: 'inflight, NR', // FundsReserved: about 1 hour
  f0142245: 'inflight, NR', // FundsReserved: about 1 hour
  f0143666: 'inflight, NR', // FundsReserved: about 1 hour
  f0143999: 'inflight, NR', // FundsReserved: about 1 hour
  f0144069: 'inflight, NR', // FundsReserved: about 1 hour
  f0144316: 'inflight, NR', // FundsReserved: about 1 hour
  f0144756: 'inflight, NR', // FundsReserved: about 1 hour
  f0144952: 'inflight, NR', // FundsReserved: about 1 hour
  f0145060: 'inflight, NR', // FundsReserved: about 1 hour
  f0145985: 'inflight, NR', // FundsReserved: about 1 hour
  f0145986: 'inflight, NR', // FundsReserved: about 1 hour
  f0147119: 'inflight, NR', // FundsReserved: about 1 hour
  f0147214: 'inflight, NR', // FundsReserved: about 1 hour
  f0147586: 'inflight, NR', // FundsReserved: about 1 hour
  f0148143: 'inflight, China, Tianjin', // FundsReserved: about 1 hour
  f0148151: 'inflight, NR', // FundsReserved: about 1 hour
  f0148269: 'inflight, NR', // FundsReserved: about 1 hour
  f0148452: 'inflight, NR', // FundsReserved: about 1 hour
  f0148494: 'inflight, NR', // FundsReserved: about 1 hour
  f0149753: 'inflight, NR', // FundsReserved: about 1 hour
  f0150816: 'inflight, NR', // FundsReserved: about 1 hour
  f0150918: 'inflight, NR', // FundsReserved: about 1 hour
  f0151706: 'inflight, NR', // FundsReserved: about 1 hour
  f0151849: 'inflight, NR', // FundsReserved: about 1 hour
  f0152134: 'inflight, NR', // FundsReserved: about 1 hour
  f0152563: 'inflight, China, Chongqing', // FundsReserved: about 1 hour
  f0152799: 'inflight, NR', // FundsReserved: about 1 hour
  f0152866: 'inflight, NR', // FundsReserved: about 1 hour
  f0153024: 'inflight, NR', // FundsReserved: about 1 hour
  f0153040: 'inflight, NR', // FundsReserved: about 1 hour
  f0153188: 'inflight, NR', // FundsReserved: about 1 hour
  f0153565: 'inflight, NR', // FundsReserved: about 1 hour
  f0153583: 'inflight, NR', // FundsReserved: about 1 hour
  f0153775: 'inflight, NR', // FundsReserved: about 1 hour
  f0153960: 'inflight, NR', // FundsReserved: about 1 hour
  f0154152: 'inflight, NR', // FundsReserved: about 1 hour
  f0154294: 'inflight, NR', // FundsReserved: about 1 hour
  f0155049: 'inflight, NR', // FundsReserved: about 1 hour
  f0155258: 'inflight, NR', // FundsReserved: about 1 hour
  f0155515: 'inflight, NR', // FundsReserved: about 1 hour
  f0155687: 'inflight, China, Guangzhou', // FundsReserved: about 1 hour
  f0155829: 'inflight, NR', // FundsReserved: about 1 hour
  f0155983: 'inflight, Japan', // FundsReserved: about 1 hour
  f0156214: 'inflight, NR', // FundsReserved: about 1 hour
  f0156333: 'inflight, China, Ningbo', // FundsReserved: about 1 hour
  f0156342: 'inflight, NR', // FundsReserved: about 1 hour
  f0156417: 'inflight, NR', // FundsReserved: about 1 hour
  f0157025: 'inflight, NR', // FundsReserved: about 1 hour
  f0157115: 'inflight, NR', // FundsReserved: about 1 hour
  f0157127: 'inflight, NR', // FundsReserved: about 1 hour
  f0157316: 'inflight, NR', // FundsReserved: about 1 hour
  f0157502: 'inflight, NR', // FundsReserved: about 1 hour
  f0157769: 'inflight, China, Changsha', // FundsReserved: about 1 hour
  f0157917: 'inflight, NR', // FundsReserved: about 1 hour
  f0157979: 'inflight, NR', // FundsReserved: about 1 hour
  f0157991: 'inflight, NR', // FundsReserved: about 1 hour
  f0158000: 'inflight, NR', // FundsReserved: about 1 hour
  f0158133: 'inflight, NR', // FundsReserved: about 1 hour
  f0158142: 'inflight, China, Karamay', // FundsReserved: about 1 hour
  f0158156: 'inflight, NR', // FundsReserved: about 1 hour
  f0158265: 'inflight, China, Hefei', // FundsReserved: about 1 hour
  f0158335: 'inflight, NR', // FundsReserved: about 1 hour
  f0158613: 'inflight, NR', // FundsReserved: about 1 hour
  f0158728: 'inflight, NR', // FundsReserved: about 1 hour
  f0159067: 'inflight, NR', // FundsReserved: about 1 hour
  f0159333: 'inflight, NR', // FundsReserved: about 1 hour
  f0159449: 'inflight, NR', // FundsReserved: about 1 hour
  f0159517: 'inflight, NR', // FundsReserved: about 1 hour
  f0159632: 'inflight, NR', // FundsReserved: about 1 hour
  f0159654: 'inflight, NR', // FundsReserved: about 1 hour
  f0159660: 'inflight, NR', // FundsReserved: about 1 hour
  f0159689: 'inflight, NR', // FundsReserved: about 1 hour
  f0159883: 'inflight, NR', // FundsReserved: about 1 hour
  f0160137: 'inflight, NR', // FundsReserved: about 1 hour
  f0160735: 'inflight, NR', // FundsReserved: about 1 hour
  f0160819: 'inflight, NR', // FundsReserved: about 1 hour
  f0160870: 'inflight, NR', // FundsReserved: about 1 hour
  f0161468: 'inflight, NR', // FundsReserved: about 1 hour
  f0161819: 'inflight, NR', // FundsReserved: about 1 hour
  f0161916: 'inflight, NR', // FundsReserved: about 1 hour
  f0162183: "inflight, China, Xi'an", // FundsReserved: about 1 hour
  f0163275: 'inflight, NR', // FundsReserved: about 1 hour
  f0165643: 'inflight, China, Guangzhou', // FundsReserved: about 1 hour
  f0166327: 'inflight, NR', // FundsReserved: about 1 hour
  f0166425: 'inflight, NR', // FundsReserved: about 1 hour
  f0166512: 'inflight, NR', // FundsReserved: about 1 hour
  f0166843: 'inflight, NR', // FundsReserved: about 1 hour
  f0166896: 'inflight, NR', // FundsReserved: about 1 hour
  f0167137: 'inflight, China, Shaoxing', // FundsReserved: about 1 hour
  f0167505: 'inflight, China, Beijing', // FundsReserved: about 1 hour
  f0168537: 'inflight, NR', // FundsReserved: about 1 hour
  f0169053: 'inflight, NR', // FundsReserved: about 1 hour
  f0169097: 'inflight, NR', // FundsReserved: about 1 hour
  f0172300: 'inflight, NR', // FundsReserved: about 1 hour
  f0179096: 'inflight, China, Fuzhou', // FundsReserved: about 1 hour
  f0207949: 'inflight, NR', // FundsReserved: about 1 hour
  f0216463: 'inflight, NR', // FundsReserved: about 1 hour
  f0216822: 'inflight, NR', // FundsReserved: about 1 hour
  f0217419: 'inflight, NR', // FundsReserved: about 1 hour
  f0217771: 'inflight, NR', // FundsReserved: about 1 hour
  f0217789: 'inflight, NR', // FundsReserved: about 1 hour
  f0217805: 'inflight, China, Taiwan, Taipei', // FundsReserved: about 1 hour
  f0218072: 'inflight, NR', // FundsReserved: about 1 hour
  f0218092: 'inflight, NR', // FundsReserved: about 1 hour
  f0218407: 'inflight, NR', // FundsReserved: about 1 hour
  f0219106: 'inflight, NR', // FundsReserved: about 1 hour
  f0220156: 'inflight, NR', // FundsReserved: about 1 hour
  f0220632: 'inflight, China, Fuzhou', // FundsReserved: about 1 hour
  f0222611: 'inflight, NR', // FundsReserved: about 1 hour
  f0222811: 'inflight, NR', // FundsReserved: about 1 hour
  f0222947: 'inflight, NR', // FundsReserved: about 1 hour
  f0223033: 'inflight, NR', // FundsReserved: about 1 hour
  f0223101: 'inflight, NR', // FundsReserved: about 1 hour
  f0223102: 'inflight, NR', // FundsReserved: about 1 hour
  f0223103: 'inflight, NR', // FundsReserved: about 1 hour
  f0223104: 'inflight, NR', // FundsReserved: about 1 hour
  f0223106: 'inflight, NR', // FundsReserved: about 1 hour
  f0223316: 'inflight, NR', // FundsReserved: about 1 hour
  f0223933: 'inflight, NR', // FundsReserved: about 1 hour
  f0224894: 'inflight, China, Qingdao', // FundsReserved: about 1 hour
  f0224984: 'inflight, China, Wuhan', // FundsReserved: about 1 hour
  f0225058: 'inflight, China, Fuzhou', // FundsReserved: about 1 hour
  f0225285: 'inflight, NR', // FundsReserved: about 1 hour
  f0226324: 'inflight, China, Guangxi', // FundsReserved: about 1 hour
  f0226418: 'inflight, NR', // FundsReserved: about 1 hour
  f0226520: 'inflight, NR', // FundsReserved: about 1 hour
  f0227472: 'inflight, China, Xiamen', // FundsReserved: about 1 hour
  f0227531: 'inflight, China, Xiamen', // FundsReserved: about 1 hour
  f0227567: 'inflight, China, Zhangzhou', // FundsReserved: about 1 hour
  f0227660: 'inflight, NR', // FundsReserved: about 1 hour
  f0227684: 'inflight, China, Xiamen', // FundsReserved: about 1 hour
  f0228712: 'inflight, USA', // FundsReserved: about 1 hour
  f0229199: 'inflight, NR', // FundsReserved: about 1 hour
  f0229437: 'inflight, NR', // FundsReserved: about 1 hour
  f0230449: 'inflight, NR', // FundsReserved: about 1 hour
  f0230799: 'inflight, NR', // FundsReserved: about 1 hour
  f0230861: 'inflight, NR', // FundsReserved: about 1 hour
  f0231112: 'inflight, NR', // FundsReserved: about 1 hour
  f0231481: 'inflight, NR', // FundsReserved: about 1 hour
  f0231782: 'inflight, NR', // FundsReserved: about 1 hour
  f0232459: 'inflight, NR', // FundsReserved: about 1 hour
  f0239251: 'inflight, Korea, Uiwang', // FundsReserved: about 1 hour
  f0240035: 'inflight, NR', // FundsReserved: about 1 hour
  f0240185: 'inflight, NR', // FundsReserved: about 1 hour
  f0240392: 'inflight, NR', // FundsReserved: about 1 hour
  f0240456: 'inflight, NR', // FundsReserved: about 1 hour
  f0241536: 'inflight, NR', // FundsReserved: about 1 hour
  f0241666: 'inflight, NR', // FundsReserved: about 1 hour
  f0241764: 'inflight, China, Chengdu', // FundsReserved: about 1 hour
  f0242373: 'inflight, NR', // FundsReserved: about 1 hour
  f0242420: 'inflight, NR', // FundsReserved: about 1 hour
  f0349810: 'inflight, China, Qinzhou', // FundsReserved: about 1 hour
  f0364957: 'inflight, China, Sichuan', // FundsReserved: about 1 hour
  f0377277: 'inflight, NR', // FundsReserved: about 1 hour
  f0391143: 'inflight, China, Shanghai', // FundsReserved: about 1 hour
  f0391212: 'inflight, NR', // FundsReserved: about 1 hour
  f0391214: 'inflight, NR', // FundsReserved: about 1 hour
  f0391235: 'inflight, NR', // FundsReserved: about 1 hour
  f0391381: 'inflight, NR', // FundsReserved: about 1 hour
  f0391439: 'inflight, NR', // FundsReserved: about 1 hour
  f0392194: 'inflight, NR', // FundsReserved: about 1 hour
  f0392430: 'inflight, NR', // FundsReserved: about 1 hour
  f0392488: 'inflight, NR', // FundsReserved: about 1 hour
  f0392734: 'inflight, Korea, Icheon-si', // FundsReserved: about 1 hour
  f0392799: 'inflight, NR', // FundsReserved: about 1 hour
  f0392808: 'inflight, NR', // FundsReserved: about 1 hour
  f0392813: 'inflight, NR', // FundsReserved: about 1 hour
  f0392924: 'inflight, NR', // FundsReserved: about 1 hour
  f0392959: 'inflight, NR', // FundsReserved: about 1 hour
  f0392980: 'inflight, NR', // FundsReserved: about 1 hour
  f0392992: 'inflight, NR', // FundsReserved: about 1 hour
  f0392999: 'inflight, NR', // FundsReserved: about 1 hour
  f0393016: 'inflight, NR', // FundsReserved: about 1 hour
  f0393119: 'inflight, NR', // FundsReserved: about 1 hour
  f0393135: 'inflight, NR', // FundsReserved: about 1 hour
  f0393417: 'inflight, NR', // FundsReserved: about 1 hour
  f0394102: 'inflight, NR', // FundsReserved: about 1 hour
  f0395680: 'inflight, NR', // FundsReserved: about 1 hour
  f0395994: 'inflight, NR', // FundsReserved: about 1 hour
  f0396149: 'inflight, NR', // FundsReserved: about 1 hour
  f0396217: 'inflight, NR', // FundsReserved: about 1 hour
  f0396352: 'inflight, NR', // FundsReserved: about 1 hour
  f0396422: 'inflight, NR', // FundsReserved: about 1 hour
  f0396452: 'inflight, NR', // FundsReserved: about 1 hour
  f0396473: 'inflight, NR', // FundsReserved: about 1 hour
  f0396684: 'inflight, China, Xiamen', // FundsReserved: about 1 hour
  f0396720: 'inflight, NR', // FundsReserved: about 1 hour
  f0396732: 'inflight, NR', // FundsReserved: about 1 hour
  f0396751: 'inflight, NR', // FundsReserved: about 1 hour
  f0397083: 'inflight, NR', // FundsReserved: about 1 hour
  f0397561: 'inflight, NR', // FundsReserved: about 1 hour
  f0397794: 'inflight, NR', // FundsReserved: about 1 hour
  f0397802: 'inflight, NR', // FundsReserved: about 1 hour
  f0397837: 'inflight, China, Fuzhou', // FundsReserved: about 1 hour
  f0398286: 'inflight, China, Beijing', // FundsReserved: about 1 hour
  f0398999: 'inflight, NR', // FundsReserved: about 1 hour
  f0399111: 'inflight, NR', // FundsReserved: about 1 hour
  f0399319: 'inflight, NR', // FundsReserved: about 1 hour
  f0399320: 'inflight, NR', // FundsReserved: about 1 hour
  f0399321: 'inflight, NR', // FundsReserved: about 1 hour
  f0399322: 'inflight, NR', // FundsReserved: about 1 hour
  f0399323: 'inflight, NR', // FundsReserved: about 1 hour
  f0399342: 'inflight, NR', // FundsReserved: about 1 hour
  f0399343: 'inflight, NR', // FundsReserved: about 1 hour
  f0399346: 'inflight, NR', // FundsReserved: about 1 hour
  f0399348: 'inflight, NR', // FundsReserved: about 1 hour
  f0399743: 'inflight, NR', // FundsReserved: about 1 hour
  f0399765: 'inflight, NR', // FundsReserved: about 1 hour
  f0399996: 'inflight, NR', // FundsReserved: about 1 hour
  f0400264: 'inflight, NR', // FundsReserved: about 1 hour
  f0400307: 'inflight, NR', // FundsReserved: about 1 hour
  f0400644: 'inflight, NR', // FundsReserved: about 1 hour
  f0400920: 'inflight, China, Luzhou', // FundsReserved: about 1 hour
  f0401287: 'inflight, China, Yibin', // FundsReserved: about 1 hour
  f0402233: 'inflight, NR', // FundsReserved: about 1 hour
  f0402431: 'inflight, China, Hangzhou', // FundsReserved: about 1 hour
  f0402661: 'inflight, NR', // FundsReserved: about 1 hour
  f0402822: 'inflight, NR', // FundsReserved: about 1 hour
  f0403050: 'inflight, NR', // FundsReserved: about 1 hour
  f0403529: 'inflight, NR', // FundsReserved: about 1 hour
  f0404193: 'inflight, NR', // FundsReserved: about 1 hour
  f0404643: 'inflight, NR', // FundsReserved: about 1 hour
  f0406478: 'inflight, NR', // FundsReserved: about 1 hour
  f0406533: 'inflight, NR', // FundsReserved: about 1 hour
  f0407244: 'inflight, NR', // FundsReserved: about 1 hour
  f0407287: 'inflight, NR', // FundsReserved: about 1 hour
  f0407410: 'inflight, NR', // FundsReserved: about 1 hour
  f0407733: 'inflight, NR', // FundsReserved: about 1 hour
  f0408205: 'inflight, NR', // FundsReserved: about 1 hour
  f0408206: 'inflight, NR', // FundsReserved: about 1 hour
  f0408208: 'inflight, NR', // FundsReserved: about 1 hour
  f0408582: 'inflight, NR', // FundsReserved: about 1 hour
  f0408629: 'inflight, NR', // FundsReserved: about 1 hour
  f0408688: 'inflight, NR', // FundsReserved: about 1 hour
  f0408833: 'inflight, NR', // FundsReserved: about 1 hour
  f0409172: 'inflight, NR', // FundsReserved: about 1 hour
  f0409272: 'inflight, NR', // FundsReserved: about 1 hour
  f0409399: 'inflight, NR', // FundsReserved: about 1 hour
  f0409499: 'inflight, NR', // FundsReserved: about 1 hour
  f0409600: 'inflight, NR', // FundsReserved: about 1 hour
  f0410120: 'inflight, NR', // FundsReserved: about 1 hour
  f0410180: 'inflight, NR', // FundsReserved: about 1 hour
  f0410242: 'inflight, NR', // FundsReserved: about 1 hour
  f0410319: 'inflight, NR', // FundsReserved: about 1 hour
  f0410431: 'inflight, NR', // FundsReserved: about 1 hour
  f0410941: 'inflight, NR', // FundsReserved: about 1 hour
  f0411314: 'inflight, NR', // FundsReserved: about 1 hour
  f0411877: 'inflight, NR', // FundsReserved: about 1 hour
  f0413050: 'inflight, NR', // FundsReserved: about 1 hour
  f0413323: 'inflight, NR', // FundsReserved: about 1 hour
  f0413419: 'inflight, NR', // FundsReserved: about 1 hour
  f0413456: 'inflight, NR', // FundsReserved: about 1 hour
  f0413801: 'inflight, China, Fujian', // FundsReserved: about 1 hour
  f0417133: 'inflight, NR', // FundsReserved: about 1 hour
  f0417709: 'inflight, NR', // FundsReserved: about 1 hour
  f0417720: 'inflight, NR', // FundsReserved: about 1 hour
  f0417767: 'inflight, China, Zhangzhou', // FundsReserved: about 1 hour
  f0417893: 'inflight, China, Xiamen', // FundsReserved: about 1 hour
  f0418086: 'inflight, NR', // FundsReserved: about 1 hour
  f0418632: 'inflight, Singapore', // FundsReserved: about 1 hour
  f0418652: 'inflight, NR', // FundsReserved: about 1 hour
  f0419311: 'inflight, NR', // FundsReserved: about 1 hour
  f0419331: 'inflight, NR', // FundsReserved: about 1 hour
  f0419414: 'inflight, NR', // FundsReserved: about 1 hour
  f0419510: 'inflight, NR', // FundsReserved: about 1 hour
  f0419662: 'inflight, NR', // FundsReserved: about 1 hour
  f0419944: 'inflight, NR', // FundsReserved: about 1 hour
  f0419945: 'inflight, NR', // FundsReserved: about 1 hour
  f0420189: 'inflight, NR', // FundsReserved: about 1 hour
  f0420508: 'inflight, NR', // FundsReserved: about 1 hour
  f0421387: 'inflight, NR', // FundsReserved: about 1 hour
  f0421858: 'inflight, NR', // FundsReserved: about 1 hour
  f0422266: 'inflight, NR', // FundsReserved: about 1 hour
  f0422737: 'inflight, NR', // FundsReserved: about 1 hour
  f0423050: 'inflight, NR', // FundsReserved: about 1 hour
  f0423057: 'inflight, NR', // FundsReserved: about 1 hour
  f0423329: 'inflight, NR', // FundsReserved: about 1 hour
  f0424761: 'inflight, NR', // FundsReserved: about 1 hour
  f0424837: 'inflight, NR', // FundsReserved: about 1 hour
  f0425447: 'inflight, NR', // FundsReserved: about 1 hour
  f0427688: 'inflight, NR', // FundsReserved: about 1 hour
  f0427839: 'inflight, NR', // FundsReserved: about 1 hour
  f0427975: 'inflight, NR', // FundsReserved: about 1 hour
  f0427989: 'inflight, NR', // FundsReserved: about 1 hour
  f0428075: 'inflight, NR', // FundsReserved: about 1 hour
  f0428184: 'inflight, NR', // FundsReserved: about 1 hour
  f0428306: 'inflight, NR', // FundsReserved: about 1 hour
  f0428661: 'inflight, NR', // FundsReserved: about 1 hour
  f0429063: 'inflight, NR', // FundsReserved: about 1 hour
  f0429122: 'inflight, NR', // FundsReserved: about 1 hour
  f0430101: 'inflight, NR', // FundsReserved: about 1 hour
  f0432235: 'inflight, NR', // FundsReserved: about 1 hour
  f0432329: 'inflight, NR', // FundsReserved: about 1 hour
  f0432375: 'inflight, NR', // FundsReserved: about 1 hour
  f0432382: 'inflight, NR', // FundsReserved: about 1 hour
  f0432570: 'inflight, NR', // FundsReserved: about 1 hour
  f0432661: 'inflight, NR', // FundsReserved: about 1 hour
  f0432773: 'inflight, NR', // FundsReserved: about 1 hour
  f0433688: 'inflight, NR', // FundsReserved: about 1 hour
  f0433892: 'inflight, NR', // FundsReserved: about 1 hour
  f0434411: 'inflight, NR', // FundsReserved: about 1 hour
  f0435140: 'inflight, China, Yangzhou', // FundsReserved: about 1 hour
  f0435971: 'inflight, NR', // FundsReserved: about 1 hour
  f0436065: 'inflight, NR', // FundsReserved: about 1 hour
  f0436661: 'inflight, NR', // FundsReserved: about 1 hour
  f0437158: 'inflight, NR', // FundsReserved: about 1 hour
  f0441020: 'inflight, NR', // FundsReserved: about 1 hour
  f0441116: 'inflight, NR', // FundsReserved: about 1 hour
  f0441240: 'inflight, NR', // FundsReserved: about 1 hour
  f0441372: 'inflight, NR', // FundsReserved: about 1 hour
  f0441525: 'inflight, NR', // FundsReserved: about 1 hour
  f0441699: 'inflight, NR', // FundsReserved: about 1 hour
  f0441703: 'inflight, NR', // FundsReserved: about 1 hour
  f0442370: 'inflight, NR', // FundsReserved: about 1 hour
  f0442371: 'inflight, NR', // FundsReserved: about 1 hour
  f0442374: 'inflight, NR', // FundsReserved: about 1 hour
  f0442375: 'inflight, NR', // FundsReserved: about 1 hour
  f0442376: 'inflight, NR', // FundsReserved: about 1 hour
  f0442383: 'inflight, NR', // FundsReserved: about 1 hour
  f0442550: 'inflight, NR', // FundsReserved: about 1 hour
  f0442670: 'inflight, NR', // FundsReserved: about 1 hour
  f0442671: 'inflight, NR', // FundsReserved: about 1 hour
  f0442672: 'inflight, NR', // FundsReserved: about 1 hour
  f0443179: 'inflight, NR', // FundsReserved: about 1 hour
  f0443180: 'inflight, NR', // FundsReserved: about 1 hour
  f0443184: 'inflight, NR', // FundsReserved: about 1 hour
  f0443303: 'inflight, NR', // FundsReserved: about 1 hour
  f0443480: 'inflight, NR', // FundsReserved: about 1 hour
  f0447106: 'inflight, NR', // FundsReserved: about 1 hour
  f0447651: 'inflight, NR', // FundsReserved: about 1 hour
  f0448660: 'inflight, NR', // FundsReserved: about 1 hour
  f0449196: 'inflight, NR', // FundsReserved: about 1 hour
  f0449296: 'inflight, NR', // FundsReserved: about 1 hour
  f0450959: 'inflight, NR', // FundsReserved: about 1 hour
  f0451341: 'inflight, NR', // FundsReserved: about 1 hour
  f0451936: 'inflight, NR', // FundsReserved: about 1 hour
  f0452303: 'inflight, NR', // FundsReserved: about 1 hour
  f0452808: 'inflight, NR', // FundsReserved: about 1 hour
  f0455968: 'inflight, NR', // FundsReserved: about 1 hour
  f0457168: 'inflight, NR', // FundsReserved: about 1 hour
  f0459325: 'inflight, NR', // FundsReserved: about 1 hour
  f0460660: 'inflight, NR', // FundsReserved: about 1 hour
  f0461612: 'inflight, NR', // FundsReserved: about 1 hour
  f0461779: 'inflight, NR', // FundsReserved: about 1 hour
  f0463030: 'inflight, NR', // FundsReserved: about 1 hour
  f0463184: 'inflight, NR', // FundsReserved: about 1 hour
  f0464884: 'inflight, NR', // FundsReserved: about 1 hour
  f0465286: 'inflight, NR', // FundsReserved: about 1 hour
  f0465477: 'inflight, NR', // FundsReserved: about 1 hour
  f0465677: 'inflight, NR', // FundsReserved: about 1 hour
  f0465993: 'inflight, NR', // FundsReserved: about 1 hour
  f0466405: 'inflight, Germany, Niederaula', // FundsReserved: about 1 hour
  f0466426: 'inflight, NR', // FundsReserved: about 1 hour
  f0466990: 'inflight, NR', // FundsReserved: about 1 hour
  f0467640: 'inflight, NR', // FundsReserved: about 1 hour
  f0467809: 'inflight, NR', // FundsReserved: about 1 hour
  f0468210: 'inflight, NR', // FundsReserved: about 1 hour
  f0468966: 'inflight, NR', // FundsReserved: about 1 hour
  f0469055: 'inflight, NR', // FundsReserved: about 1 hour
  f0469578: 'inflight, NR', // FundsReserved: about 1 hour
  f0469959: 'inflight, NR', // FundsReserved: about 1 hour
  f0470182: 'inflight, NR', // FundsReserved: about 1 hour
  f0470608: 'inflight, NR', // FundsReserved: about 1 hour
  f0472061: 'inflight, NR', // FundsReserved: about 1 hour
  f0472720: 'inflight, NR', // FundsReserved: about 1 hour
  f0472863: 'inflight, NR', // FundsReserved: about 1 hour
  f0473113: 'inflight, NR', // FundsReserved: about 1 hour
  f0473677: 'inflight, NR', // FundsReserved: about 1 hour
  f0473956: 'inflight, NR', // FundsReserved: about 1 hour
  f0475095: 'inflight, NR', // FundsReserved: about 1 hour
  f0475305: 'inflight, NR', // FundsReserved: about 1 hour
  f0475664: 'inflight, China, Zhejiang', // FundsReserved: about 1 hour
  f0478563: 'inflight, NR', // FundsReserved: about 1 hour
  f0479677: 'inflight, NR', // FundsReserved: about 1 hour
  f0480195: 'inflight, NR', // FundsReserved: about 1 hour
  f0480313: 'inflight, NR', // FundsReserved: about 1 hour
  f0480936: 'inflight, NR', // FundsReserved: about 1 hour
  f0480944: 'inflight, NR', // FundsReserved: about 1 hour
  f0481938: 'inflight, NR', // FundsReserved: about 1 hour
  f0482494: 'inflight, NR', // FundsReserved: about 1 hour
  f0483206: 'inflight, NR', // FundsReserved: about 1 hour
  f0484990: 'inflight, NR', // FundsReserved: about 1 hour
  f0485876: 'inflight, China, Changchun', // FundsReserved: about 1 hour
  f0486952: 'inflight, NR', // FundsReserved: about 1 hour
  f0487097: 'inflight, NR', // FundsReserved: about 1 hour
  f0487098: 'inflight, NR', // FundsReserved: about 1 hour
  f0488215: 'inflight, NR', // FundsReserved: about 1 hour
  f0488689: 'inflight, NR', // FundsReserved: about 1 hour
  f0488733: 'inflight, NR', // FundsReserved: about 1 hour
  f0488851: 'inflight, NR', // FundsReserved: about 1 hour
  f0491919: 'inflight, NR', // FundsReserved: about 1 hour
  f0492009: 'inflight, NR', // FundsReserved: about 1 hour
  f0492360: 'inflight, NR', // FundsReserved: about 1 hour
  f0492474: "inflight, China, Xi'an", // FundsReserved: about 1 hour
  f0492481: 'inflight, NR', // FundsReserved: 44 minutes
  f0492601: 'inflight, NR', // FundsReserved: 44 minutes
  f0492737: 'inflight, NR', // FundsReserved: 44 minutes
  f0493237: 'inflight, NR', // FundsReserved: 44 minutes
  f0494268: 'inflight, NR', // FundsReserved: 44 minutes
  f0494603: 'inflight, NR', // FundsReserved: 44 minutes
  f0494733: 'inflight, NR', // FundsReserved: 44 minutes
  f0496068: 'inflight, NR', // FundsReserved: 44 minutes
  f0496897: 'inflight, NR', // FundsReserved: 44 minutes
  f0497254: 'inflight, NR', // FundsReserved: 44 minutes
  f0497636: 'inflight, China, Harbin', // FundsReserved: 44 minutes
  f0497771: 'inflight, NR', // FundsReserved: 44 minutes
  f0498868: 'inflight, NR', // FundsReserved: 44 minutes
  f0500003: 'inflight, NR', // FundsReserved: 44 minutes
  f0500685: 'inflight, NR', // FundsReserved: 44 minutes
  f0500878: 'inflight, NR', // FundsReserved: 44 minutes
  f0501283: 'inflight, NR', // FundsReserved: 44 minutes
  f0501662: 'inflight, NR', // FundsReserved: 44 minutes
  f0502198: 'inflight, NR', // FundsReserved: 44 minutes
  f0502948: 'inflight, NR', // FundsReserved: 44 minutes
  f0503010: 'inflight, NR', // FundsReserved: 44 minutes
  f0503287: 'inflight, NR', // FundsReserved: 44 minutes
  f0503494: 'inflight, NR', // FundsReserved: 44 minutes
  f0504097: 'inflight, NR', // FundsReserved: 44 minutes
  f0504929: 'inflight, NR', // FundsReserved: 44 minutes
  f0504985: 'inflight, NR', // FundsReserved: 43 minutes
  f0505001: 'inflight, NR', // FundsReserved: 43 minutes
  f0505110: 'inflight, NR', // FundsReserved: 43 minutes
  f0505593: 'inflight, NR', // FundsReserved: 43 minutes
  f0506630: 'inflight, China, Linyi', // FundsReserved: 43 minutes
  f0506800: 'inflight, NR', // FundsReserved: 43 minutes
  f0507913: 'inflight, NR', // FundsReserved: 43 minutes
  f0508328: 'inflight, NR', // FundsReserved: 43 minutes
  f0508622: 'inflight, NR', // FundsReserved: 43 minutes
  f0508892: 'inflight, NR', // FundsReserved: 43 minutes
  f0509062: 'inflight, NR', // FundsReserved: 43 minutes
  f0509980: 'inflight, NR', // FundsReserved: 43 minutes
  f0509981: 'inflight, NR', // FundsReserved: 43 minutes
  f0510701: 'inflight, NR', // FundsReserved: 43 minutes
  f0510957: 'inflight, NR', // FundsReserved: 43 minutes
  f0511070: 'inflight, NR', // FundsReserved: 43 minutes
  f0511318: 'inflight, NR', // FundsReserved: 43 minutes
  f0511385: 'inflight, NR', // FundsReserved: 43 minutes
  f0512066: 'inflight, NR', // FundsReserved: 43 minutes
  f0512693: 'inflight, NR', // FundsReserved: 43 minutes
  f0513685: 'inflight, NR', // FundsReserved: 43 minutes
  f0514000: 'inflight, NR', // FundsReserved: 43 minutes
  f0514235: 'inflight, NR', // FundsReserved: 43 minutes
  f0514241: 'inflight, NR', // FundsReserved: 43 minutes
  f0515264: 'inflight, NR', // FundsReserved: 43 minutes
  f0515360: 'inflight, NR', // FundsReserved: 43 minutes
  f0515389: 'inflight, NR', // FundsReserved: 43 minutes
  f0515461: 'inflight, NR', // FundsReserved: 43 minutes
  f0515626: 'inflight, NR', // FundsReserved: 42 minutes
  f0515674: 'inflight, NR', // FundsReserved: 42 minutes
  f0517655: 'inflight, Korea, Gwangju', // FundsReserved: 42 minutes
  f0518668: 'inflight, NR', // FundsReserved: 42 minutes
  f0518713: 'inflight, NR', // FundsReserved: 42 minutes
  f0519333: 'inflight, NR', // FundsReserved: 42 minutes
  f0519376: 'inflight, NR', // FundsReserved: 42 minutes
  f0519513: 'inflight, NR', // FundsReserved: 42 minutes
  f0520262: 'inflight, China, Fujian', // FundsReserved: 42 minutes
  f0520500: 'inflight, NR', // FundsReserved: 42 minutes
  f0520520: 'inflight, NR', // FundsReserved: 42 minutes
  f0520555: 'inflight, NR', // FundsReserved: 42 minutes
  f0520666: 'inflight, NR', // FundsReserved: 42 minutes
  f0520688: 'inflight, NR', // FundsReserved: 42 minutes
  f0521273: 'inflight, NR', // FundsReserved: 42 minutes
  f0521499: 'inflight, NR', // FundsReserved: 42 minutes
  f0521508: 'inflight, NR', // FundsReserved: 42 minutes
  f0521884: 'inflight, NR', // FundsReserved: 42 minutes
  f0522099: 'inflight, China, Shangrao', // FundsReserved: 42 minutes
  f0523396: 'inflight, NR', // FundsReserved: 42 minutes
  f0523415: 'inflight, NR', // FundsReserved: 42 minutes
  f0523711: 'inflight, NR', // FundsReserved: 42 minutes
  f0536177: 'inflight, NR', // FundsReserved: 42 minutes
  f0592088: 'inflight, NR', // FundsReserved: 42 minutes
  f0601583: 'inflight, NR', // FundsReserved: 41 minutes
  f0602011: 'inflight, NR', // FundsReserved: 41 minutes
  f0646439: 'inflight, NR', // FundsReserved: 41 minutes
  f0652413: 'inflight, NR', // FundsReserved: 41 minutes
  f0652414: 'inflight, NR', // FundsReserved: 41 minutes
  f0663311: 'inflight, NR', // FundsReserved: 41 minutes
  f0665666: 'inflight, NR', // FundsReserved: 41 minutes
  f0666315: 'inflight, NR', // FundsReserved: 41 minutes
  f0670491: 'inflight, NR', // FundsReserved: 41 minutes
  f0671368: 'inflight, NR', // FundsReserved: 41 minutes
  f0671982: 'inflight, NR', // FundsReserved: 41 minutes
  f0672951: 'inflight, NR', // FundsReserved: 41 minutes
  f0673613: 'inflight, NR', // FundsReserved: 41 minutes
  f0673920: 'inflight, NR', // FundsReserved: 41 minutes
  f0673990: 'inflight, NR', // FundsReserved: 41 minutes
  f0674600: 'inflight, NR', // FundsReserved: 41 minutes
  f0674756: 'inflight, NR', // FundsReserved: 41 minutes
  f0674889: 'inflight, NR', // FundsReserved: 41 minutes
  f0675459: 'inflight, NR', // FundsReserved: 41 minutes
  f0675675: 'inflight, NR', // FundsReserved: 41 minutes
  f0676183: 'inflight, NR', // FundsReserved: 41 minutes
  f0676272: 'inflight, NR', // FundsReserved: 41 minutes
  f0678781: 'inflight, NR', // FundsReserved: 41 minutes
  f0679376: 'inflight, NR', // FundsReserved: 41 minutes
  f0680529: 'inflight, NR', // FundsReserved: 41 minutes
  f0680677: 'inflight, NR', // FundsReserved: 40 minutes
  f0680929: 'inflight, NR', // FundsReserved: 40 minutes
  f0680977: 'inflight, NR', // FundsReserved: 40 minutes
  f0681063: 'inflight, NR', // FundsReserved: 40 minutes
  f0681068: 'inflight, NR', // FundsReserved: 40 minutes
  f0682032: 'inflight, China, Shenzhen', // FundsReserved: 40 minutes
  f0683965: 'inflight, NR', // FundsReserved: 40 minutes
  f0684618: 'inflight, NR', // FundsReserved: 40 minutes
  f0685007: 'inflight, NR', // FundsReserved: 40 minutes
  f0685231: 'inflight, NR', // FundsReserved: 40 minutes
  f0685539: 'inflight, NR', // FundsReserved: 40 minutes
  f0685706: 'inflight, NR', // FundsReserved: 40 minutes
  f0685829: 'inflight, NR', // FundsReserved: 40 minutes
  f0686816: 'inflight, NR', // FundsReserved: 40 minutes
  f0687211: 'inflight, NR', // FundsReserved: 40 minutes
  f0688165: 'inflight, NR', // FundsReserved: 40 minutes
  f0689753: 'inflight, NR', // FundsReserved: 40 minutes
  f0690736: 'inflight, NR', // FundsReserved: 40 minutes
  f0690779: 'inflight, NR', // FundsReserved: 40 minutes
  f0691310: 'inflight, NR', // FundsReserved: 40 minutes
  f0693008: 'inflight, China, Shanghai', // FundsReserved: 40 minutes
  f0693127: 'inflight, NR', // FundsReserved: 40 minutes
  f0693765: 'inflight, NR', // FundsReserved: 40 minutes
  f0693793: 'inflight, NR', // FundsReserved: 40 minutes
  f0693817: 'inflight, NR', // FundsReserved: 39 minutes
  f0694099: 'inflight, NR', // FundsReserved: 39 minutes
  f0694149: 'inflight, NR', // FundsReserved: 39 minutes
  f0694232: 'inflight, NR', // FundsReserved: 39 minutes
  f0694999: 'inflight, NR', // FundsReserved: 39 minutes
  f0695289: 'inflight, NR', // FundsReserved: 39 minutes
  f0697249: 'inflight, NR', // FundsReserved: 39 minutes
  f0697913: 'inflight, NR', // FundsReserved: 39 minutes
  f0698688: 'inflight, China, Xinyang', // FundsReserved: 39 minutes
  f0699021: 'inflight, NR', // FundsReserved: 39 minutes
  f0699115: 'inflight, NR', // FundsReserved: 39 minutes
  f0699181: 'inflight, NR', // FundsReserved: 39 minutes
  f0700033: 'inflight, NR', // FundsReserved: 39 minutes
  f0700207: 'inflight, China, Harbin', // FundsReserved: 39 minutes
  f0701056: 'inflight, NR', // FundsReserved: 38 minutes
  f0701144: 'inflight, NR', // FundsReserved: 38 minutes
  f0701226: 'inflight, NR', // FundsReserved: 38 minutes
  f0702010: 'inflight, NR', // FundsReserved: 38 minutes
  f0702054: 'inflight, NR', // FundsReserved: 38 minutes
  f0702377: 'inflight, NR', // FundsReserved: 38 minutes
  f0702810: 'inflight, NR', // FundsReserved: 38 minutes
  f0704898: 'inflight, NR', // FundsReserved: 38 minutes
  f0704940: 'inflight, NR', // FundsReserved: 38 minutes
  f0704941: 'inflight, NR', // FundsReserved: 38 minutes
  f0704966: 'inflight, NR', // FundsReserved: 38 minutes
  f0705136: 'inflight, NR', // FundsReserved: 38 minutes
  f0705521: 'inflight, NR', // FundsReserved: 38 minutes
  f0705937: 'inflight, NR', // FundsReserved: 38 minutes
  f0706206: 'inflight, NR', // FundsReserved: 38 minutes
  f0706999: 'inflight, NR', // FundsReserved: 38 minutes
  f0707159: 'inflight, NR', // FundsReserved: 38 minutes
  f0707197: 'inflight, NR', // FundsReserved: 38 minutes
  f0707777: 'inflight, NR', // FundsReserved: 38 minutes
  f0709896: 'inflight, NR', // FundsReserved: 38 minutes
  f0711266: 'inflight, NR', // FundsReserved: 37 minutes
  f0711289: 'inflight, NR', // FundsReserved: 37 minutes
  f0711445: 'inflight, NR', // FundsReserved: 37 minutes
  f0712676: 'inflight, NR', // FundsReserved: 37 minutes
  f0715209: 'inflight, NR', // FundsReserved: 37 minutes
  f0715446: 'inflight, NR', // FundsReserved: 37 minutes
  f0715561: 'inflight, NR', // FundsReserved: 37 minutes
  f0715639: 'inflight, NR', // FundsReserved: 37 minutes
  f0715904: 'inflight, NR', // FundsReserved: 37 minutes
  f0716103: 'inflight, NR', // FundsReserved: 37 minutes
  f0716170: 'inflight, NR', // FundsReserved: 37 minutes
  f0716283: 'inflight, NR', // FundsReserved: 37 minutes
  f0716775: 'inflight, NR', // FundsReserved: 37 minutes
  f0717289: 'inflight, NR', // FundsReserved: 37 minutes
  f0717905: 'inflight, NR', // FundsReserved: 37 minutes
  f0717987: 'inflight, NR', // FundsReserved: 37 minutes
  f0718311: 'inflight, NR', // FundsReserved: 37 minutes
  f0718313: 'inflight, NR', // FundsReserved: 36 minutes
  f0718366: 'inflight, NR', // FundsReserved: 36 minutes
  f0718552: 'inflight, NR', // FundsReserved: 36 minutes
  f0718962: 'inflight, NR', // FundsReserved: 36 minutes
  f0719301: 'inflight, NR', // FundsReserved: 36 minutes
  f0720785: 'inflight, NR', // FundsReserved: 36 minutes
  f0721721: 'inflight, NR', // FundsReserved: 36 minutes
  f0723381: 'inflight, NR', // FundsReserved: 36 minutes
  f0723538: 'inflight, China, Handan', // FundsReserved: 36 minutes
  f0723604: 'inflight, NR', // FundsReserved: 36 minutes
  f0723950: 'inflight, NR', // FundsReserved: 36 minutes
  f0724023: 'inflight, NR', // FundsReserved: 36 minutes
  f0724097: 'inflight, NR', // FundsReserved: 36 minutes
  f0724216: 'inflight, NR', // FundsReserved: 36 minutes
  f0724728: 'inflight, NR', // FundsReserved: 36 minutes
  f0726270: 'inflight, NR', // FundsReserved: 36 minutes
  f0726841: 'inflight, NR', // FundsReserved: 36 minutes
  f0727962: 'inflight, NR', // FundsReserved: 36 minutes
  f0728817: 'inflight, NR', // FundsReserved: 36 minutes
  f0729412: 'inflight, NR', // FundsReserved: 36 minutes
  f0730670: 'inflight, NR', // FundsReserved: 36 minutes
  f0730917: 'inflight, NR', // FundsReserved: 36 minutes
  f0730942: 'inflight, NR', // FundsReserved: 35 minutes
  f0731061: 'inflight, NR', // FundsReserved: 35 minutes
  f0731150: 'inflight, NR', // FundsReserved: 35 minutes
  f0732272: 'inflight, NR', // FundsReserved: 35 minutes
  f0732862: 'inflight, NR', // FundsReserved: 35 minutes
  f0733076: 'inflight, NR', // FundsReserved: 35 minutes
  f0733242: 'inflight, NR', // FundsReserved: 35 minutes
  f0733626: 'inflight, NR', // FundsReserved: 35 minutes
  f0733692: 'inflight, NR', // FundsReserved: 35 minutes
  f0734053: 'inflight, NR', // FundsReserved: 35 minutes
  f0734759: 'inflight, NR', // FundsReserved: 35 minutes
  f0735027: 'inflight, NR', // FundsReserved: 35 minutes
  f0744093: 'inflight, NR', // FundsReserved: 35 minutes
  f0744513: 'inflight, China, Guangzhou', // FundsReserved: 35 minutes
  f0744622: 'inflight, NR', // FundsReserved: 35 minutes
  f0745068: 'inflight, NR', // FundsReserved: 35 minutes
  f0745192: 'inflight, NR', // FundsReserved: 35 minutes
  f0746628: 'inflight, NR', // FundsReserved: 35 minutes
  f0746945: 'inflight, NR', // FundsReserved: 35 minutes
  f0746991: 'inflight, NR', // FundsReserved: 35 minutes
  f0747522: 'inflight, NR', // FundsReserved: 35 minutes
  f0747777: 'inflight, NR', // FundsReserved: 35 minutes
  f0748101: 'inflight, NR', // FundsReserved: 35 minutes
  f0748137: 'inflight, NR', // FundsReserved: 34 minutes
  f0748179: 'inflight, NR', // FundsReserved: 34 minutes
  f0748875: 'inflight, NR', // FundsReserved: 34 minutes
  f0750779: 'inflight, NR', // FundsReserved: 34 minutes
  f0751099: 'inflight, NR', // FundsReserved: 34 minutes
  f0751450: 'inflight, NR', // FundsReserved: 34 minutes
  f0752442: 'inflight, NR', // FundsReserved: 34 minutes
  f0752620: 'inflight, NR', // FundsReserved: 34 minutes
  f0752635: 'inflight, NR', // FundsReserved: 34 minutes
  f0753027: 'inflight, NR', // FundsReserved: 34 minutes
  f0753228: 'inflight, NR', // FundsReserved: 34 minutes
  f0753402: 'inflight, NR', // FundsReserved: 34 minutes
  f0754755: 'inflight, NR', // FundsReserved: 34 minutes
  f0754993: 'inflight, NR', // FundsReserved: 34 minutes
  f0755327: 'inflight, NR', // FundsReserved: 34 minutes
  f0755650: 'inflight, NR', // FundsReserved: 34 minutes
  f0756840: 'inflight, NR', // FundsReserved: 34 minutes
  f0757233: 'inflight, NR', // FundsReserved: 34 minutes
  f0757610: 'inflight, NR', // FundsReserved: 34 minutes
  f0763048: 'inflight, NR', // FundsReserved: 34 minutes
  f0763082: 'inflight, NR', // FundsReserved: 34 minutes
  f0763093: 'inflight, NR', // FundsReserved: 34 minutes
  f0764901: 'inflight, NR', // FundsReserved: 34 minutes
  f0765036: 'inflight, NR', // FundsReserved: 33 minutes
  f0765071: 'inflight, NR', // FundsReserved: 33 minutes
  f0765173: 'inflight, NR', // FundsReserved: 33 minutes
  f0766038: 'inflight, NR', // FundsReserved: 33 minutes
  f0766177: 'inflight, NR', // FundsReserved: 33 minutes
  f0766756: 'inflight, NR', // FundsReserved: 33 minutes
  f0805343: 'inflight, NR', // FundsReserved: 33 minutes
  f0805402: 'inflight, Korea, Bucheon-si', // FundsReserved: 33 minutes
  f0805486: 'inflight, NR', // FundsReserved: 33 minutes
  f0805567: 'inflight, NR', // FundsReserved: 33 minutes
  f0805612: 'inflight, NR', // FundsReserved: 33 minutes
  f0805622: 'inflight, NR', // FundsReserved: 33 minutes
  f0805666: 'inflight, NR', // FundsReserved: 33 minutes
  f0805872: 'inflight, China, Hangzhou', // FundsReserved: 33 minutes
  f0805937: 'inflight, NR', // FundsReserved: 33 minutes
  f0806336: 'inflight, NR', // FundsReserved: 33 minutes
  f0806347: 'inflight, NR', // FundsReserved: 33 minutes
  f0806395: 'inflight, NR', // FundsReserved: 33 minutes
  f0806758: 'inflight, NR', // FundsReserved: 33 minutes
  f0806904: 'inflight, NR', // FundsReserved: 33 minutes
  f0807383: 'inflight, NR', // FundsReserved: 33 minutes
  f0807384: 'inflight, NR', // FundsReserved: 32 minutes
  f0807385: 'inflight, auto', // FundsReserved: 32 minutes
  f0807386: 'inflight, NR', // FundsReserved: 32 minutes
  f0807387: 'inflight, NR', // FundsReserved: 32 minutes
  f0807388: 'inflight, NR', // FundsReserved: 32 minutes
  f0807389: 'inflight, NR', // FundsReserved: 32 minutes
  f0807390: 'inflight, NR', // FundsReserved: 32 minutes
  f0807392: 'inflight, NR', // FundsReserved: 32 minutes
  f0807446: 'inflight, NR', // FundsReserved: 32 minutes
  f0807472: 'inflight, NR', // FundsReserved: 32 minutes
  f0807839: 'inflight, NR', // FundsReserved: 32 minutes
  f0808766: 'inflight, NR', // FundsReserved: 32 minutes
  f0809570: 'inflight, NR', // FundsReserved: 32 minutes
  f0809927: 'inflight, NR', // FundsReserved: 32 minutes
  f0811662: 'inflight, NR', // FundsReserved: 32 minutes
  f0811878: 'inflight, NR', // FundsReserved: 32 minutes
  f0813061: 'inflight, China, Shanghai', // FundsReserved: 32 minutes
  f0813825: 'inflight, NR', // FundsReserved: 32 minutes
  f0813992: 'inflight, NR', // FundsReserved: 32 minutes
  f0814012: 'inflight, NR', // FundsReserved: 32 minutes
  f0814049: 'inflight, NR', // FundsReserved: 32 minutes
  f0814155: 'inflight, NR', // FundsReserved: 32 minutes
  f0815838: 'inflight, NR', // FundsReserved: 31 minutes
  f0816168: 'inflight, NR', // FundsReserved: 31 minutes
  f0818235: 'inflight, NR', // FundsReserved: 31 minutes
  f0818428: 'inflight, China, Yichang', // FundsReserved: 31 minutes
  f0818625: 'inflight, NR', // FundsReserved: 31 minutes
  f0820770: 'inflight, NR', // FundsReserved: 31 minutes
  f0821595: 'inflight, NR', // FundsReserved: 31 minutes
  f0822151: 'inflight, NR', // FundsReserved: 31 minutes
  f0822441: 'inflight, NR', // FundsReserved: 31 minutes
  f0822818: 'inflight, NR', // FundsReserved: 31 minutes
  f0823127: 'inflight, NR', // FundsReserved: 31 minutes
  f0825528: 'inflight, NR', // FundsReserved: 31 minutes
  f0826272: 'inflight, NR', // FundsReserved: 31 minutes
  f0826566: 'inflight, NR', // FundsReserved: 31 minutes
  f0828538: 'inflight, NR', // FundsReserved: 31 minutes
  f0829506: 'inflight, NR', // FundsReserved: 31 minutes
  f0829765: 'inflight, NR', // FundsReserved: 31 minutes
  f0829836: 'inflight, NR', // FundsReserved: 31 minutes
  f0832131: 'inflight, NR', // FundsReserved: 31 minutes
  f0834841: 'inflight, NR', // FundsReserved: 31 minutes
  f0835180: 'inflight, NR', // FundsReserved: 31 minutes
  f0835613: 'inflight, NR', // FundsReserved: 31 minutes
  f0836160: 'inflight, Korea, Seodaemun-gu', // FundsReserved: 31 minutes
  f0836990: 'inflight, NR', // FundsReserved: 31 minutes
  f0837056: 'inflight, NR', // FundsReserved: 30 minutes
  f0837434: 'inflight, NR', // FundsReserved: 30 minutes
  f0839084: 'inflight, NR', // FundsReserved: 30 minutes
  f0839133: 'inflight, NR', // FundsReserved: 30 minutes
  f0839436: 'inflight, NR', // FundsReserved: 30 minutes
  f0839448: 'inflight, NR', // FundsReserved: 30 minutes
  f0840040: 'inflight, NR', // FundsReserved: 30 minutes
  f0840430: 'inflight, NR', // FundsReserved: 30 minutes
  f0841453: 'inflight, NR', // FundsReserved: 30 minutes
  f0842266: 'inflight, NR', // FundsReserved: 30 minutes
  f0843255: 'inflight, China, Yibin', // FundsReserved: 30 minutes
  f0843558: 'inflight, NR', // FundsReserved: 30 minutes
  f0843713: 'inflight, China, Shaanxi', // FundsReserved: 30 minutes
  f0844271: 'inflight, NR', // FundsReserved: 30 minutes
  f0844849: 'inflight, NR', // FundsReserved: 30 minutes
  f0844916: 'inflight, NR', // FundsReserved: 30 minutes
  f0845186: 'inflight, NR', // FundsReserved: 30 minutes
  f0845296: 'inflight, China, Hong Kong', // FundsReserved: 30 minutes
  f0846191: 'inflight, NR', // FundsReserved: 30 minutes
  f0847138: 'inflight, NR', // FundsReserved: 30 minutes
  f0848972: 'inflight, NR', // FundsReserved: 29 minutes
  f0849079: 'inflight, NR', // FundsReserved: 29 minutes
  f0850130: 'inflight, NR', // FundsReserved: 29 minutes
  f0851322: 'inflight, NR', // FundsReserved: 29 minutes
  f0855056: 'inflight, NR', // FundsReserved: 29 minutes
  f0855584: 'inflight, NR', // FundsReserved: 29 minutes
  f0856336: 'inflight, NR', // FundsReserved: 29 minutes
  f0856508: 'inflight, China, Taiwan, Taoyuan District', // FundsReserved: 29 minutes
  f0856912: 'inflight, NR', // FundsReserved: 29 minutes
  f0857612: 'inflight, NR', // FundsReserved: 29 minutes
  f0858038: 'inflight, China, Shanghai', // FundsReserved: 29 minutes
  f0859013: 'inflight, China, Nanjing', // FundsReserved: 29 minutes
  f0863013: 'inflight, NR', // FundsReserved: 29 minutes
  f0863576: 'inflight, NR', // FundsReserved: 29 minutes
  f0866508: 'inflight, auto', // FundsReserved: 29 minutes
  f0867253: 'inflight, NR', // FundsReserved: 29 minutes
  f0868971: 'inflight, NR', // FundsReserved: 29 minutes
  f0870189: 'inflight, NR', // FundsReserved: 29 minutes
  f0870333: 'inflight, NR', // FundsReserved: 29 minutes
  f0870354: 'inflight, NR', // FundsReserved: 29 minutes
  f0870973: 'inflight, NR', // FundsReserved: 29 minutes
  f0871511: 'inflight, NR', // FundsReserved: 29 minutes
  f0871532: 'inflight, NR', // FundsReserved: 29 minutes
  f0871546: 'inflight, NR', // FundsReserved: 28 minutes
  f0871719: 'inflight, NR', // FundsReserved: 28 minutes
  f0873699: 'inflight, NR', // FundsReserved: 28 minutes
  f0873874: 'inflight, NR', // FundsReserved: 28 minutes
  f0874057: 'inflight, NR', // FundsReserved: 28 minutes
  f0876581: 'inflight, NR', // FundsReserved: 28 minutes
  f0878351: 'inflight, NR', // FundsReserved: 28 minutes
  f0878807: 'inflight, NR', // FundsReserved: 28 minutes
  f0881262: 'inflight, NR', // FundsReserved: 28 minutes
  f0881281: 'inflight, NR', // FundsReserved: 28 minutes
  f0881321: 'inflight, NR', // FundsReserved: 28 minutes
  f0881531: 'inflight, NR', // FundsReserved: 28 minutes
  f0881687: 'inflight, NR', // FundsReserved: 28 minutes
  f0883083: 'inflight, NR', // FundsReserved: 28 minutes
  f0884455: 'inflight, NR', // FundsReserved: 28 minutes
  f0884781: 'inflight, NR', // FundsReserved: 28 minutes
  f0984680: 'inflight, Korea, Jung-gu', // FundsReserved: 28 minutes
  f0984905: 'inflight, NR', // FundsReserved: 28 minutes
  f01001984: 'inflight, NR', // FundsReserved: 28 minutes
  f01002302: 'inflight, NR', // FundsReserved: 28 minutes
  f01016451: 'inflight, NR', // FundsReserved: 28 minutes
  f01016806: 'inflight, NR', // FundsReserved: 28 minutes
  f01016882: 'inflight, NR', // FundsReserved: 28 minutes
  f01017269: 'inflight, USA, Fort Lauterdale', // FundsReserved: 27 minutes
  f01017980: 'inflight, NR', // FundsReserved: 27 minutes
  f01019009: 'inflight, China, Henan', // FundsReserved: 27 minutes
  f01019391: 'inflight, NR', // FundsReserved: 27 minutes
  f01019418: 'inflight, NR', // FundsReserved: 27 minutes
  f01019869: 'inflight, NR', // FundsReserved: 27 minutes
  f01021204: 'inflight, China, Hangzhou', // FundsReserved: 27 minutes
  f01021317: 'inflight, NR', // FundsReserved: 27 minutes
  f01021773: 'inflight, NR', // FundsReserved: 27 minutes
  f01021898: 'inflight, NR', // FundsReserved: 27 minutes
  f01022733: 'inflight, NR', // FundsReserved: 27 minutes
  f01023982: 'inflight, NR', // FundsReserved: 27 minutes
  f01024317: 'inflight, NR', // FundsReserved: 27 minutes
  f01025366: 'inflight, NR', // FundsReserved: 27 minutes
  f01025894: 'inflight, China, Zhengzhou', // FundsReserved: 27 minutes
  f01026560: 'inflight, NR', // FundsReserved: 27 minutes
  f01027747: 'inflight, NR', // FundsReserved: 27 minutes
  f01028552: 'inflight, NR', // FundsReserved: 27 minutes
  f01028659: 'inflight, NR', // FundsReserved: 27 minutes
  f01028902: 'inflight, NR', // FundsReserved: 27 minutes
  f01029008: 'inflight, NR', // FundsReserved: 27 minutes
  f01030424: 'inflight, NR', // FundsReserved: 27 minutes
  f01030435: 'inflight, NR', // FundsReserved: 27 minutes
  f01030442: 'inflight, NR', // FundsReserved: 27 minutes
  f01031823: 'inflight, auto', // FundsReserved: 26 minutes
  f01031867: 'inflight, NR', // FundsReserved: 26 minutes
  f01032055: 'inflight, NR', // FundsReserved: 26 minutes
  f01032314: 'inflight, NR', // FundsReserved: 26 minutes
  f01032657: 'inflight, NR', // FundsReserved: 26 minutes
  f01032858: 'inflight, NR', // FundsReserved: 26 minutes
  f01032903: 'inflight, NR', // FundsReserved: 26 minutes
  f01033096: 'inflight, NR', // FundsReserved: 26 minutes
  f01033119: 'inflight, France, Paris', // FundsReserved: 26 minutes
  f01033390: 'inflight, NR', // FundsReserved: 26 minutes
  f01033805: 'inflight, NR', // FundsReserved: 26 minutes
  f01034007: 'inflight, NR', // FundsReserved: 26 minutes
  f01035021: 'inflight, NR', // FundsReserved: 26 minutes
  f01036920: 'inflight, NR', // FundsReserved: 26 minutes
  f01038189: 'inflight, auto', // FundsReserved: 26 minutes
  f01038199: 'inflight, NR', // FundsReserved: 26 minutes
  f01038389: 'inflight, NR', // FundsReserved: 26 minutes
  f01038625: 'inflight, NR', // FundsReserved: 26 minutes
  f01038663: 'inflight, NR', // FundsReserved: 26 minutes
  f01038679: 'inflight, auto', // FundsReserved: 26 minutes
  f01038861: 'inflight, NR', // FundsReserved: 26 minutes
  f01039350: 'inflight, NR', // FundsReserved: 26 minutes
  f01039576: 'inflight, NR', // FundsReserved: 26 minutes
  f01040516: 'inflight, NR', // FundsReserved: 25 minutes
  f01040817: 'inflight, NR', // FundsReserved: 25 minutes
  f01042229: 'inflight, NR', // FundsReserved: 25 minutes
  f01042276: 'inflight, NR', // FundsReserved: 25 minutes
  f01042409: 'inflight, NR', // FundsReserved: 25 minutes
  f01043193: 'inflight, NR', // FundsReserved: 25 minutes
  f01043666: 'inflight, NR', // FundsReserved: 25 minutes
  f01043780: 'inflight, NR', // FundsReserved: 25 minutes
  f01044086: 'inflight, NR', // FundsReserved: 25 minutes
  f01044297: 'inflight, auto', // FundsReserved: 25 minutes
  f01045078: 'inflight, NR', // FundsReserved: 25 minutes
  f01045198: 'inflight, NR', // FundsReserved: 25 minutes
  f01045784: 'inflight, USA, Ridgewood', // FundsReserved: 25 minutes
  f01045812: 'inflight, China, Taiwan, New Taipei', // FundsReserved: 25 minutes
  f01046069: 'inflight, NR', // FundsReserved: 25 minutes
  f01047011: 'inflight, NR', // FundsReserved: 25 minutes
  f01047445: 'inflight, NR', // FundsReserved: 25 minutes
  f01048770: 'inflight, NR', // FundsReserved: 25 minutes
  f01049102: 'inflight, NR', // FundsReserved: 25 minutes
  f01049468: 'inflight, NR', // FundsReserved: 25 minutes
  f01049739: 'inflight, NR', // FundsReserved: 25 minutes
  f01050978: 'inflight, NR', // FundsReserved: 25 minutes
  f01051178: 'inflight, NR', // FundsReserved: 25 minutes
  f01051743: 'inflight, NR', // FundsReserved: 24 minutes
  f01052311: 'inflight, NR', // FundsReserved: 24 minutes
  f01052556: 'inflight, NR', // FundsReserved: 24 minutes
  f01053413: 'inflight, NR', // FundsReserved: 24 minutes
  f01053601: 'inflight, NR', // FundsReserved: 24 minutes
  f01054527: 'inflight, NR', // FundsReserved: 24 minutes
  f01055821: 'inflight, NR', // FundsReserved: 24 minutes
  f01056608: 'inflight, NR', // FundsReserved: 24 minutes
  f01057193: 'inflight, NR', // FundsReserved: 24 minutes
  f01059489: 'inflight, NR', // FundsReserved: 24 minutes
  f01059620: 'inflight, NR', // FundsReserved: 24 minutes
  f01062232: 'inflight, NR', // FundsReserved: 24 minutes
  f01063832: 'inflight, NR', // FundsReserved: 24 minutes
  f01063833: 'inflight, auto', // FundsReserved: 24 minutes
  f01064991: 'inflight, NR', // FundsReserved: 24 minutes
  f01065505: 'inflight, NR', // FundsReserved: 24 minutes
  f01066009: 'inflight, NR', // FundsReserved: 24 minutes
  f01066517: 'inflight, NR', // FundsReserved: 24 minutes
  f01067573: 'inflight, NR', // FundsReserved: 24 minutes
  f01068111: 'inflight, NR', // FundsReserved: 24 minutes
  f01068287: 'inflight, auto', // FundsReserved: 24 minutes
  f01068331: 'inflight, NR', // FundsReserved: 24 minutes
  f01069894: 'inflight, NR', // FundsReserved: 23 minutes
  f01070040: 'inflight, NR', // FundsReserved: 23 minutes
  f01070149: 'inflight, China, Chengdu', // FundsReserved: 23 minutes
  f01070158: 'inflight, NR', // FundsReserved: 23 minutes
  f01070205: 'inflight, NR', // FundsReserved: 23 minutes
  f01070395: 'inflight, NR', // FundsReserved: 23 minutes
  f01071282: 'inflight, NR', // FundsReserved: 23 minutes
  f01071852: 'inflight, NR', // FundsReserved: 23 minutes
  f01073166: 'inflight, NR', // FundsReserved: 23 minutes
  f01073851: 'inflight, auto', // FundsReserved: 23 minutes
  f01074227: 'inflight, NR', // FundsReserved: 23 minutes
  f01075086: 'inflight, NR', // FundsReserved: 23 minutes
  f01076629: 'inflight, NR', // FundsReserved: 23 minutes
  f01076644: 'inflight, NR', // FundsReserved: 23 minutes
  f01077516: 'inflight, NR', // FundsReserved: 23 minutes
  f01077547: 'inflight, NR', // FundsReserved: 23 minutes
  f01077777: 'inflight, NR', // FundsReserved: 23 minutes
  f01079999: 'inflight, NR', // FundsReserved: 23 minutes
  f01081449: 'inflight, NR', // FundsReserved: 23 minutes
  f01081786: 'inflight, NR', // FundsReserved: 23 minutes
  f01082277: 'inflight, NR', // FundsReserved: 23 minutes
  f01082888: 'inflight, NR', // FundsReserved: 23 minutes
  f01083999: 'inflight, NR', // FundsReserved: 22 minutes
  f01084913: 'inflight, NR', // FundsReserved: 22 minutes
  f01085688: 'inflight, auto', // FundsReserved: 22 minutes
  f01085801: 'inflight, NR', // FundsReserved: 22 minutes
  f01086350: 'inflight, NR', // FundsReserved: 22 minutes
  f01086616: 'inflight, NR', // FundsReserved: 22 minutes
  f01087002: 'inflight, auto', // FundsReserved: 22 minutes
  f01087243: 'inflight, NR', // FundsReserved: 22 minutes
  f01087561: 'inflight, NR', // FundsReserved: 22 minutes
  f01088018: 'inflight, auto', // FundsReserved: 22 minutes
  f01088088: 'inflight, NR', // FundsReserved: 22 minutes
  f01089169: 'inflight, NR', // FundsReserved: 22 minutes
  f01089422: 'inflight, NR', // FundsReserved: 22 minutes
  f01089828: 'inflight, auto', // FundsReserved: 22 minutes
  f01090983: 'inflight, NR', // FundsReserved: 22 minutes
  f01091851: 'inflight, NR', // FundsReserved: 22 minutes
  f01092768: 'inflight, NR', // FundsReserved: 22 minutes
  f01093254: 'inflight, NR', // FundsReserved: 21 minutes
  f01093419: 'inflight, NR', // FundsReserved: 21 minutes
  f01095558: 'inflight, NR', // FundsReserved: 21 minutes
  f01095694: 'inflight, NR', // FundsReserved: 21 minutes
  f01095710: 'inflight, NR', // FundsReserved: 21 minutes
  f01095973: 'inflight, auto', // FundsReserved: 21 minutes
  f01096056: 'inflight, NR', // FundsReserved: 21 minutes
  f01096672: 'inflight, auto', // FundsReserved: 21 minutes
  f01097059: 'inflight, NR', // FundsReserved: 21 minutes
  f01097535: 'inflight, NR', // FundsReserved: 21 minutes
  f01097758: 'inflight, NR', // FundsReserved: 21 minutes
  f01098119: 'inflight, NR', // FundsReserved: 21 minutes
  f01098124: 'inflight, NR', // FundsReserved: 21 minutes
  f01098271: 'inflight, NR', // FundsReserved: 21 minutes
  f01098580: 'inflight, NR', // FundsReserved: 21 minutes
  f01098810: 'inflight, NR', // FundsReserved: 21 minutes
  f01098835: 'inflight, NR', // FundsReserved: 21 minutes
  f01098931: 'inflight, NR', // FundsReserved: 21 minutes
  f01099362: 'inflight, China, Baotou', // FundsReserved: 21 minutes
  f01100262: 'inflight, auto', // FundsReserved: 21 minutes
  f01100636: 'inflight, NR', // FundsReserved: 21 minutes
  f01100914: 'inflight, NR', // FundsReserved: 21 minutes
  f01101196: 'inflight, auto', // FundsReserved: 21 minutes
  f01101397: 'inflight, NR', // FundsReserved: 21 minutes
  f01101426: 'inflight, NR', // FundsReserved: 21 minutes
  f01101881: 'inflight, NR', // FundsReserved: 21 minutes
  f01102006: 'inflight, NR', // FundsReserved: 21 minutes
  f01102085: 'inflight, NR', // FundsReserved: 21 minutes
  f01102936: 'inflight, NR', // FundsReserved: 21 minutes
  f01103850: 'inflight, NR', // FundsReserved: 21 minutes
  f01104012: 'inflight, NR', // FundsReserved: 21 minutes
  f01104018: 'inflight, China, Beijing', // FundsReserved: 21 minutes
  f01104310: 'inflight, NR', // FundsReserved: 21 minutes
  f01105079: 'inflight, NR', // FundsReserved: 21 minutes
  f01105647: 'inflight, auto', // FundsReserved: 21 minutes
  f01105825: 'inflight, NR', // FundsReserved: 21 minutes
  f01105927: "inflight, China, Xi'an", // FundsReserved: 20 minutes
  f01106117: 'inflight, NR', // FundsReserved: 20 minutes
  f01106668: 'inflight, NR', // FundsReserved: 20 minutes
  f01107585: 'inflight, auto', // FundsReserved: 20 minutes
  f01108096: 'inflight, NR', // FundsReserved: 20 minutes
  f01108594: 'inflight, NR', // FundsReserved: 20 minutes
  f01109196: 'inflight, NR', // FundsReserved: 20 minutes
  f01110284: 'inflight, NR', // FundsReserved: 20 minutes
  f01110660: 'inflight, NR', // FundsReserved: 20 minutes
  f01111111: 'inflight, NR', // FundsReserved: 20 minutes
  f01111673: 'inflight, China, Changsha', // FundsReserved: 20 minutes
  f01111831: 'inflight, auto', // FundsReserved: 20 minutes
  f01111881: 'inflight, NR', // FundsReserved: 20 minutes
  f01112163: 'inflight, auto', // FundsReserved: 20 minutes
  f01112504: 'inflight, USA, Gilbert', // FundsReserved: 20 minutes
  f01112541: 'inflight, USA, Fremont', // FundsReserved: 20 minutes
  f01112782: 'inflight, NR', // FundsReserved: 20 minutes
  f01113378: 'inflight, NR', // FundsReserved: 20 minutes
  f01113597: 'inflight, NR', // FundsReserved: 20 minutes
  f01114364: 'inflight, USA, Allentown', // FundsReserved: 20 minutes
  f01114516: 'inflight, NR', // FundsReserved: 20 minutes
  f01114577: 'inflight, NR', // FundsReserved: 20 minutes
  f01115274: 'inflight, Japan, Yokohama', // FundsReserved: 20 minutes
  f01115279: 'inflight, auto', // FundsReserved: 20 minutes
  f01117889: 'inflight, auto', // FundsReserved: 20 minutes
  f01117949: 'inflight, auto', // FundsReserved: 20 minutes
  f01118032: 'inflight, NR', // FundsReserved: 20 minutes
  f01118788: 'inflight, auto', // FundsReserved: 20 minutes
  f01118970: 'inflight, auto', // FundsReserved: 20 minutes
  f01119631: 'inflight, auto', // FundsReserved: 20 minutes
  f01120248: 'inflight, NR', // FundsReserved: 19 minutes
  f01120291: 'inflight, NR', // FundsReserved: 19 minutes
  f01121887: 'inflight, NR', // FundsReserved: 19 minutes
  f01122339: 'inflight, NR', // FundsReserved: 19 minutes
  f01122412: 'inflight, China', // FundsReserved: 19 minutes
  f01123400: 'inflight, auto', // FundsReserved: 19 minutes
  f01123833: 'inflight, auto', // FundsReserved: 19 minutes
  f01125834: 'inflight, auto', // FundsReserved: 19 minutes

  // Unknown

  // Active

  // Active-sealing (active - with in-flight sealing)

  f07709: 'active-sealing, Korea, Dongjak-gu', // 2212157
  f043376: 'active-sealing, Korea, Incheon', // 2212205
  f062318: 'active-sealing, Korea, Naju', // 2212156
  f063628: 'active-sealing, NR', // 2212155
  f079817: "active-sealing, Russia, Ul'yanovka", // 2212154
  f097720: 'active-sealing, Korea, Bucheon-si', // 2212167
  f0110804: 'active-sealing, USA, Santa Clara', // 2212161
  f0113331: 'active-sealing, Korea, Jinju + USA', // 2212158
  f0137168: 'active-sealing, China, Beijing', // 2212199
  f0156207: 'active-sealing, Korea, Ulsan', // 2212280
  f0157513: 'active-sealing, Korea, Geumcheon-gu', // 2212165
  f0162394: 'active-sealing, China, Guangzhou', // 2212171
  f0165375: 'active-sealing, Korea, Seongnam-si', // 2212159
  f0165539: 'active-sealing, Japan, Yokohama', // 2212160
  f0167254: 'active-sealing, Russia, St. Petersburg', // 2212168
  f0214334: 'active-sealing, NR', // 2212204
  f0215370: 'active-sealing, China, Hangzhou', // 2212170
  f0221135: 'active-sealing, USA, Atlanta', // 2212164
  f0228855: 'active-sealing, Korea, Guro-gu', // 2212162
  f0230200: 'active-sealing, Korea, Gwanak-gu, G-mining', // 2212175
  f0397052: 'active-sealing, NR', // 2212207
  f0401416: 'active-sealing, Japan, Fukuoka', // 2212163
  f0433689: 'active-sealing, NR', // 2212182
  f0433690: 'active-sealing, NR', // 2212206
  f0433691: 'active-sealing, China, Wuxi', // 2212208
  f0437246: 'active-sealing, China, Hangzhou', // 2212169
  f0458627: 'active-sealing, Korea, Seongnam-si', // 2212166
  f0460440: 'active-sealing, Korea, Seongnam-si', // 2212172
  f0478837: 'active-sealing, China, Zhangzhou', // 2212127
  f0675909: 'active-sealing, NR', // 2212176
  f0693131: 'active-sealing, China, Zhongshan', // 2212177
  f0694881: 'active-sealing, China, Hangzhou', // 2212191
  f0717913: 'active-sealing, Korea, Jung-gu', // 2212186
  f0720629: 'active-sealing, NR', // 2212174
  f0724219: 'active-sealing, Spain, Vilanova del Cami', // 2212179
  f0747617: 'active-sealing, NR', // 2212181
  f0752695: 'active-sealing, Korea, Seongnam-si', // 2212189
  f0805568: 'active-sealing, Korea, Gangnam-gu', // 2212194
  f0838467: 'active-sealing, Korea, Incheon', // 2212185
  f0845245: 'active-sealing, Korea, Busan', // 2212183
  f0862933: 'active-sealing, USA, Huntersville', // 2212180
  f0864910: 'active-sealing, Korea, Gwangjin-gu', // 2212198
  f0877545: 'active-sealing, China, Ningbo', // 2212173
  f01023503: 'active-sealing, Korea, Busan', // 2212178
  f01039753: 'active-sealing, China, Suqian', // 2212188
  f01050286: 'active-sealing, China, Guangzhou', // 2212184
  f01053334: 'active-sealing, Korea, Mapo-gu', // 2212192
  f01071194: 'active-sealing, USA, San Jose', // 2212190
  f01071719: 'active-sealing, China, Beijing', // 2212196
  f01081349: 'active-sealing, China, Foshan', // 2212200
  f01086762: 'active-sealing, Korea, Seoul', // 2212203
  f01099967: 'active-sealing, USA, London', // 2212221
  f01104889: 'active-sealing, NR', // 2212195
  f01105829: 'active-sealing, Korea', // 2212193
  f01108129: 'active-sealing, NR', // 2212197
  f01110276: 'active-sealing, Korea, Bucheon-si', // 2212201
  f01122113: 'active-sealing, Japan, Tokyo', // 2212220
  f01124409: 'active-sealing, China, Hangzhou', // 2212209

  // Sealing

  f02490: 'sealing, China, Fujian', // 2212236
  f02540: 'sealing, USA, Mobile, Foundry', // 2212235
  f03345: 'sealing, China, Fuzhou, chh', // 2212224
  f014683: 'sealing, China, Dongguan', // 2212286
  f015233: 'sealing, China, Nanjing', // 2212227
  f015877: 'sealing, China, Jiaxing + USA', // 2212225
  f016276: 'sealing, China, Beijing', // 2212241
  f020489: 'sealing, China, Lioaning', // 2212226
  f023219: 'sealing, China, Beijing + Zhangjiakou', // 2212231
  f024550: 'sealing, China, Wenzhou', // 2212233
  f024944: 'sealing, Korea, Yeongdeungpo-dong', // 2212230
  f025025: 'sealing, China, Qingdao', // 2212240
  f039515: 'sealing, China, Chongqing, valarhash', // 2212232
  f042567: 'sealing, China, Jinhua', // 2212234
  f044160: 'sealing, China, Guangzhou, muxing', // 2212228
  f053088: 'sealing, China, Shanghai', // 2212238
  f065610: 'sealing, NR', // 2212303
  f080103: 'sealing, Korea, Seongnam-si', // 2212242
  f081644: 'sealing, China, Wenzhou', // 2212239
  f082635: 'sealing, NR', // 2212243
  f094374: 'sealing, China, Nanyang', // 2212237
  f0110768: 'sealing, Korea, Gwangju', // 2212244
  f0111174: 'sealing, China, Guangzhou', // 2212245
  f0111885: 'sealing, Korea, Bucheon-si, WINNERS', // 2212247
  f0121533: 'sealing, China, Zhejiang', // 2212249
  f0130912: 'sealing, China, Hong Kong', // 2212246
  f0134671: 'sealing, Korea, Gimpo-si', // 2212254
  f0136033: 'sealing, NR', // 2212287
  f0137489: 'sealing, UK, Deeside', // 2212256
  f0146751: 'sealing, China, Jiangsu', // 2212253
  f0149132: 'sealing, NR', // 2212252
  f0149455: 'sealing, NR', // 2212265
  f0156452: 'sealing, Korea, Ulsan', // 2212262
  f0157265: 'sealing, China, Zhangjiakou', // 2212255
  f0187709: 'sealing, Russia, Moscow', // 2212263
  f0215461: 'sealing, NR', // 2212289
  f0396705: 'sealing, NR', // 2212251
  f0397728: 'sealing, China, Dongguan', // 2212248
  f0399814: "sealing, China, Ya'an", // 2212250
  f0401300: 'sealing, France, Deuil-la-Barre', // 2212257
  f0413563: 'sealing, Korea, Gangnam-gu', // 2212259
  f0414383: 'sealing, China, Dongguan', // 2212288
  f0417750: 'sealing, NR', // 2212261
  f0447181: 'sealing, China, Zibo', // 2212264
  f0461791: 'sealing, Korea, Gwangju', // 2212266
  f0514737: 'sealing, Korea, Busan', // 2212268
  f0521569: 'sealing, Korea, Guro-go', // 2212267
  f0690699: 'sealing, NR', // 2212290
  f0722515: 'sealing, Korea, Geumcheon-gu', // 2212274
  f0729674: 'sealing, Canada, Vancouver', // 2212229
  f0731235: 'sealing, Ukraine, Odessa', // 2212223
  f0746416: 'sealing, Korea, Gyeonggi-do', // 2212272
  f0763981: 'sealing, China, Tianjin', // 2212271
  f0813086: 'sealing, Korea, Jung-gu', // 2212260
  f0827934: 'sealing, USA, Port Jefferson', // 2212258
  f0832373: 'sealing, NR', // 2212269
  f0835643: 'sealing, Korea, Songpa-gu', // 2212276
  f0839509: 'sealing, China, Beijing', // 2212273
  f01027268: 'sealing, Korea, Busan', // 2212270
  f01039327: 'sealing, Indonesia, Denpasar', // 2212278
  f01040469: 'sealing, Korea', // 2212275
  f01058790: 'sealing, Japan', // 2212128
  f01069268: 'sealing, NR', // 2212292
  f01079646: 'sealing, China, Shenzhen', // 2212291
  f01086720: 'sealing, Thailand, Bangkok', // 2212302
  f01096590: 'sealing, Russia, Lipetsk', // 2212277
  f01105377: 'sealing, Korea, Jung-gu', // 2212279
  f01106888: 'sealing, China, Beijing', // 2212282
  f01110407: 'sealing, Bulgaria', // 2212296
  f01112335: 'sealing, China, Taiwan, Taoyuan District', // 2212281
  f01112647: "sealing, China, Xi'an", // 2212294
  f01114420: 'sealing, Bulgaria, Sofia', // 2212297
  f01117341: 'sealing, auto', // 2212293
  f01124728: 'sealing, Japan, Yokohama', // 2212295
  f01128326: 'sealing, autolisted', // 2212202

  // Stuck

  f078465: 'stuck, NR', // CheckForAcceptance: 42 minutes
  f085437: 'stuck, NR', // CheckForAcceptance: about 1 hour
  f0119997: 'stuck, NR', // CheckForAcceptance: about 1 hour
  f0131901: 'stuck, Korea, Daejeon', // CheckForAcceptance: about 2 hours
  f0151371: 'stuck, NR', // CheckForAcceptance: 26 minutes
  f0157564: 'stuck, Korea, Daejeon', // CheckForAcceptance: about 2 hours
  f0159380: 'stuck, NR', // CheckForAcceptance: 43 minutes
  f0405129: 'stuck, China, Fujian', // CheckForAcceptance: about 2 hours
  f0482619: 'stuck, Korea, Seongnam-si', // CheckForAcceptance: about 2 hours
  f0709739: 'stuck, China, Handan', // CheckForAcceptance: about 2 hours
  f0723006: 'stuck, Korea, Bucheon-si', // CheckForAcceptance: 37 minutes
  f0756207: 'stuck, Korea', // CheckForAcceptance: about 1 hour
  f0822674: 'stuck, Korea, Seoul', // CheckForAcceptance: 32 minutes
  f01090043: 'stuck, Korea, Bucheon-si', // CheckForAcceptance: 23 minutes

  // Busy

  // Min Size

  f01238: 'min-size, Vietnam, Hanoi, FILECOIN-VIETNAM', // 131072 < 134217728
  f01240: 'min-size, Netherlands, Dcent', // 131072 < 67108864
  f01247: 'min-size, Canada, Montreal, BigChungus', // 131072 < 67108864
  f01272: 'min-size, Singapore', // 131072 < 10485760
  f01276: 'min-size, Canada, Brampton, NBFS Canada', // 131072 < 4294967296
  f01277: 'min-size, Sweden, Stockholm, tvsthlm', // 131072 < 1073741824
  f01278: 'min-size, USA, Grand Rapids, MiMiner', // 131072 < 268435456
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
  f019362: 'min-size, China, Hangzhou, 青青子衿', // 131072 < 17179869184
  f019399: 'min-size, Korea, Busan', // 131072 < 1073741824
  f019551: 'min-size, UK, Birmingham, Neonix', // 131072 < 1048576
  f020385: 'min-size, Korea, Incheon', // 131072 < 8589934592
  f020904: 'min-size, Korea, Uijeongbu-si, FILTop', // 131072 < 8589934592
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
  f097618: 'min-size, China, Suzhou', // 131072 < 524288000
  f099608: 'min-size, Latvia, Riga, stander', // 131072 < 18253611008
  f0104671: 'min-size, Japan, Ota-ku', // 131072 < 1048576
  f0104967: 'min-size, Ukraine, Ternopil', // 131072 < 2147483648
  f0109713: 'min-size, China, Beijing', // 131072 < 1536163840
  f0113008: 'min-size, China, Hong Kong', // 131072 < 33554432
  f0120983: 'min-size, China, Fujian', // 131072 < 268435456
  f0121768: 'min-size, China, Guangdong', // 131072 < 1073741824
  f0121958: 'min-size, Korea, Seoul', // 131072 < 67108864
  f0126868: 'min-size, Ukraine, Vinnytsia', // 131072 < 209715200
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
  f0401254: 'min-size, Korea, Uijeongbu-si', // 131072 < 4294967296
  f0403177: 'min-size, China, Huizhou', // 131072 < 536870912
  f0406322: 'min-size, USA, Long Beach', // 131072 < 4294967296
  f0406703: 'min-size, USA, Scottsdale', // 131072 < 4294967296
  f0436454: 'min-size, China, Wuxi', // 131072 < 67108864
  f0440182: 'min-size, USA, Des Moines', // 131072 < 1048576
  f0440208: 'min-size, Netherlands, Amsterdam', // 131072 < 1048576
  f0440429: 'min-size, Korea, Uiwang', // 131072 < 1073741824
  f0447183: 'min-size, Canada, Montreal', // 131072 < 4294967296
  f0455466: 'min-size, USA, Washington', // 131072 < 1048576
  f0495421: 'min-size, NR', // 131072 < 2147483648
  f0508988: 'min-size, Korea, Bucheon-si', // 131072 < 1073741824
  f0524489: 'min-size, Korea, Pocheon-si', // 131072 < 4294967296
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
  f0773157: 'min-size, Australia, Sydney', // 131072 < 17179869184
  f0828066: 'min-size, USA, San Digeo', // 131072 < 536870912
  f0842485: 'min-size, Korea, Seoul', // 131072 < 31457280
  f0875769: 'min-size, USA, Salt Lake City', // 131072 < 8589934592
  f01021756: 'min-size, Korea, Yeongdeungpo-gu', // 131072 < 268435456
  f01024814: 'min-size, USA, Wilson', // 131072 < 34359738368
  f01035680: 'min-size, USA, Denver', // 131072 < 8589934592
  f01049918: 'min-size, USA, Bothell', // 131072 < 1048576
  f01051828: 'min-size, USA, San Diego', // 131072 < 536870912
  f01063173: 'min-size, Korea, Kayang-dong', // 131072 < 104857600
  f01091840: 'min-size, NR', // 131072 < 4294967296
  f01096727: 'min-size, Korea, Gangseo-gu', // 131072 < 104857600
  f01099052: 'min-size, Korea, Seodaemun-gu', // 131072 < 104857600
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
  f08103: 'min-ask, China, Foshan', // 20000000 < 122070312500000
  f08157: 'min-ask, China, Beijing + Germany, Frankfurt, 超星际', // 20000000 < 610351562500000
  f08257: 'min-ask, China, Zhejiang + Singapore', // 20000000 < 12207031250
  f08383: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f09693: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f09696: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f010253: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f010491: 'min-ask, China, Shenzhen', // 20000000 < 1220703125
  f014394: 'min-ask, China, Suzhou, IPFSCloud', // 20000000 < 1220703125
  f014409: 'min-ask, USA, Monroe, Meatball Part III', // 20000000 < 244140625
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
  f0129976: 'min-ask, Korea, Gwangju', // 20000000 < 1220703125000
  f0131464: 'min-ask, USA, Ashburn', // 20000000 < 122070312500000000
  f0133886: 'min-ask, China, Guangdong', // 20000000 < 366210937500000
  f0133999: 'min-ask, China, Changsha', // 20000000 < 122070312500000
  f0134778: 'min-ask, China, Beijing', // 20000000 < 12206909179687500000
  f0135738: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0136014: 'min-ask, China, Suzhou', // 20000000 < 12207031250000000
  f0136810: 'min-ask, NR', // 20000000 < 12207031250000000000000
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
  f0159961: 'min-ask, China, Chongqing', // 20000000 < 6103515625
  f0164260: 'min-ask, NR', // 20000000 < 122070312499877929687500000
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
  f0401677: 'min-ask, NR', // 20000000 < 12207031250000000000000000
  f0406475: 'min-ask, China, Dongguan', // 20000000 < 122070312500000000
  f0408717: 'min-ask, Korea, Ansan-si', // 20000000 < 1220703125
  f0409356: 'min-ask, NR', // 20000000 < 121948242187500000
  f0409765: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f0410506: 'min-ask, Korea, Seoul', // 20000000 < 1220703125000
  f0410701: 'min-ask, China, Changsha', // 20000000 < 61035156250000
  f0413684: 'min-ask, China, Fujian', // 20000000 < 12207031249999999877929687500000
  f0419768: 'min-ask, Korea, Seongnam-si', // 20000000 < 1220703125000
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
  f01060792: 'min-ask, USA, London', // 20000000 < 36621093
  f01061547: 'min-ask, China, Fujian', // 20000000 < 1220703124999999999999999877929687500000
  f01062230: 'min-ask, NR', // 20000000 < 121948242187500000
  f01062274: 'min-ask, Korea, Busan', // 20000000 < 12207031250
  f01070558: 'min-ask, China, Jinan', // 20000000 < 122070190429687500000
  f01076600: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f01096124: 'min-ask, Korea, Uiwang', // 20000000 < 61035156250000
  f01097836: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01097957: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01098514: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01101298: 'min-ask, Korea, Yongin-si', // 20000000 < 121948242187500000
  f01106157: 'min-ask, China, Xinjiang', // 20000000 < 122070312500000
  f01111457: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f01112547: 'min-ask, USA', // 20000000 < 12207031250000000000000
  f01115166: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f01117775: 'min-ask, Korea, Seongnam-si', // 20000000 < 121948242187500000
  f01118739: 'min-ask, China, Karamay', // 20000000 < 122070312500000
  f01119852: 'min-ask, China, Huizhou', // 20000000 < 1220581054687500000
  f01125511: 'min-ask, autolisted', // 20000000 < 121948242187500000
  f01125783: 'min-ask, autolisted', // 20000000 < 122070312500000

  // Slashed

  // Error

  f01279: 'error, China, Sichuan', // error reading Response message from provider: stream reset
  f08019: 'error, China, Yantai, 三合', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999988780121 FIL, balance: 0.030376631475953794 FIL): not enough funds to execute transaction
  f010513: 'error, China, Chongqing', // error reading Response message from provider: stream reset
  f020928: 'error, China, Deyang + Singapore', // error reading Response message from provider: EOF
  f022820: 'error, China, Guangdong', // failed to complete data transfer: deal data transfer failed: response rejected
  f025007: 'error, Korea, Gyeonggi-do, PINBYTES-eCUBE', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999961342944 FIL, balance: 0.008946636075267192 FIL): not enough funds to execute transaction
  f033036: 'error, China, Liaoning', // error reading Response message from provider: stream reset
  f062937: 'error, NR', // error reading Response message from provider: EOF
  f094901: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.077981846797200733 FIL, balance: 0.01584377081099717 FIL): not enough funds to execute transaction
  f097214: 'error, Korea, Bucheon-si, CryptoHash', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.0775348801069468 FIL, balance: 0.010900785209436825 FIL): not enough funds to execute transaction
  f0112713: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.078077481613765185 FIL, balance: 0.024095982252665369 FIL): not enough funds to execute transaction
  f0115108: 'error, Korea, Yangcheon-gu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.077738597359808056 FIL, balance: 0.01310340203354941 FIL): not enough funds to execute transaction
  f0132461: 'error, Korea, Daegu', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.077075051806990546 FIL, balance: 0.060396128107900918 FIL): not enough funds to execute transaction
  f0136811: 'error, China, Guangdong', // error reading Response message from provider: EOF
  f0488889: 'error, China, Nanchang', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: WaitForPublishDeals errored: handler: websocket connection closed
  f0504054: 'error, China, Luzhou', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.069563733411830854 FIL, balance: 0.012623892884177775 FIL): not enough funds to execute transaction
  f0512170: 'error, Korea, Bucheon-si', // deal failed: (State=11) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.0708372311385182 FIL, balance: 0.015016137011332578 FIL): not enough funds to execute transaction
  f0512179: 'error, Korea, Bucheon-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.066097339476956721 FIL, balance: 0.010405374478160531 FIL): not enough funds to execute transaction
  f0700999: 'error, China, Chengdu', // error reading Response message from provider: stream reset
  f0713585: 'error, Russia', // error reading Response message from provider: stream reset
  f0717969: 'error, USA, Los Angeles', // deal failed: (State=26) deal data verification failed: error generating CommP: failed to build treeCaused by:    0: failed to create data store    1: No such file or directory (os error 2)
  f0870558: 'error, China, Hong Kong', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.049999999999905956 FIL, balance: 0.012803278936807429 FIL): not enough funds to execute transaction
  f0871563: 'error, NR', // deal failed: (State=26) error calling node: publishing deal: GasEstimateMessageGas error: estimating gas used: CallWithGas failed: computing tipset state: [from=f3rp5cajfdudwysf3jtgsdeeujo6uh4i4y5uhmx6bqhytmyljxp6535eotsd4wyq5e2f5ous6o7j6hmei4ndva,to=f03144,n=14544,m=5,h=956978] fatal error: failed to get cbor object bafy2bzacedf6zd3vqhgvwssgs3xevfxie7ffr4t7k6nu77v5abkkrv7lhmrsu: blockstore: block not found (FATAL)
  f01044351: 'error, Korea, Gwangju', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.069624486455893703 FIL, balance: 0.004432781861985863 FIL): not enough funds to execute transaction
  f01112955: 'error, China, Sichuan', // failed to complete data transfer: deal data transfer failed: 12D3KooWDr1z64V5VHNuXcKsLhDRg4U2A8K3nmKfo8RCb15s3m3K-12D3KooWSDxbkm3RK55zWZMuDWFoL7yguG74TRfBHG9zT2cLxPea-1626977271546893488: after 4 consecutive restarts failed to transfer any data
  f01113723: 'error, USA, Gilbert', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.01357908110182615 FIL, balance: 0.00133305765300682 FIL): not enough funds to execute transaction
  f01116725: 'error, USA, Gilbert', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.014167492386184192 FIL, balance: 0.00133305765300682 FIL): not enough funds to execute transaction
  f01116796: 'error, USA, Gilbert', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.013633163947446432 FIL, balance: 0.00133305765300682 FIL): not enough funds to execute transaction
  f01118185: 'error, USA, Gilbert', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.013631543523815728 FIL, balance: 0.00133305765300682 FIL): not enough funds to execute transaction
  f01118563: 'error, USA, Gilbert', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.0139675290180949 FIL, balance: 0.00133305765300682 FIL): not enough funds to execute transaction
  f01120547: 'error, USA, Gilbert', // deal failed: (State=26) error calling node: reserving funds: mpool push: failed to push message: not enough funds (required: 0.013425096972411248 FIL, balance: 0.00133305765300682 FIL): not enough funds to execute transaction

  // Dial backoff

  f02503: 'backoff, Singapore',
  f03224: 'backoff, Ukraine, Kyiv',
  f014233: 'backoff, China, Shanghai + USA',
  f014487: 'backoff, Singapore',
  f015767: 'backoff, Russia, Khabarovsk + Japan, Khabarovsk + USA',
  f022832: 'backoff, China, Beijing',
  f095382: 'backoff, China, Dongguan',
  f099387: 'backoff, China, Shijiazhuang',
  f0101069: 'backoff, NR',
  f0102641: 'backoff, China, Guangzhou',
  f0107127: 'backoff, USA, Daytona Beach',
  f0125863: 'backoff, Korea, Seoul',
  f0148391: 'backoff, China, Changsha + Japan, Tokyo',
  f0155467: 'backoff, Korea, Seongnam-si',
  f0159649: 'backoff, NR',
  f0218293: 'backoff, China, Fujian',
  f0218559: 'backoff, NR',

  // Rejected

  f01154: 'rejected, NR',
  f01248: 'rejected, Germany, Frankfurt', // sh: /root/.lotusminer/dealfilter.pl: No such file or directory
  f01289: 'rejected, China, Ningbo', // no online
  f02301: 'rejected, USA',
  f02303: 'rejected, Singapore', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f02528: 'rejected, Singapore', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f02609: 'rejected, China, Shanghai', // no online
  f02626: 'rejected, Singapore', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f03249: 'rejected, China, Yunfu',
  f03325: 'rejected, China, Guangdong',
  f03339: 'rejected, China, Luzhou, benxun', // no online
  f03347: 'rejected, China, Shenzhen', // no online
  f03362: 'rejected, Germany, Berlin',
  f08094: 'rejected, China, Guangzhou', // no online
  f08197: 'rejected, China, Foshan',
  f09642: 'rejected, Sweden, Alvsjo',
  f010035: 'rejected, Netherlands + China, Suzhou',
  f010241: 'rejected, China, Beijing + USA, Portland, 6Block-P', // no online
  f010405: 'rejected, China, Foshan',
  f010493: 'rejected, China, Shanghai', // no online
  f010498: 'rejected, China, Shenzhen', // no online
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
  f023984: 'rejected, NR',
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
  f054417: 'rejected, NR', // no online
  f056226: 'rejected, NR',
  f056573: 'rejected, China, Sichuan', // no online
  f057466: 'rejected, China, Guangzhou', // no online
  f063869: 'rejected, NR', // deal start epoch is too far in the future: 981300 > 979860
  f064218: 'rejected, USA, Kirkland', // no online
  f065174: 'rejected, NR', // no online
  f066102: 'rejected, NR',
  f066259: 'rejected, NR',
  f066270: 'rejected, China, Dongguan', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f068528: 'rejected, China, Shanghai', // no online
  f070932: 'rejected, NR', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f073697: 'rejected, China, Karamay', // no online
  f079370: 'rejected, China, Zhangzhou', // no online
  f079618: 'rejected, China, Beijing', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f081323: 'rejected, UK, Cambridge', // no online
  f082095: 'rejected, NR', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f083065: 'rejected, China, Taizhou', // no online
  f083638: 'rejected, China, Chongqing', // sh: 1: /lotus_data/.lotusstorage/dealfilter.pl: not found
  f085777: 'rejected, China, Zhangzhou', // no online
  f086423: 'rejected, China, Chengdu', // no online
  f087530: 'rejected, China, Shenzhen', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
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
  f0116436: 'rejected, Singapore', // deal start epoch is too far in the future: 981302 > 979862
  f0116445: 'rejected, Singapore', // miner is not accepting unverified storage deals
  f0116628: 'rejected, China, Shanghai', // no online
  f0117118: 'rejected, NR', // no online
  f0117556: 'rejected, NR', // no online
  f0118317: 'rejected, Singapore', // deal start epoch is too far in the future: 981302 > 959702
  f0118330: 'rejected, Singapore', // deal start epoch is too far in the future: 981302 > 959702
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
  f0124696: 'rejected, NR',
  f0124923: 'rejected, NR',
  f0126037: 'rejected, Korea, Seoul', // no online
  f0126038: 'rejected, Korea, Seoul', // no online
  f0126039: 'rejected, NR', // no online
  f0127352: 'rejected, Korea, Seoul', // no online
  f0127353: 'rejected, Korea, Seoul', // no online
  f0127354: 'rejected, Korea, Seoul', // no online
  f0127980: 'rejected, Korea, Seoul', // no online
  f0128580: 'rejected, Korea, Seoul', // no online
  f0128581: 'rejected, Korea, Seoul', // no online
  f0128582: 'rejected, Korea, Seoul', // no online
  f0130961: 'rejected, Korea, Seongnam-si',
  f0131331: 'rejected, China, Beijing',
  f0131419: 'rejected, China, Beijing',
  f0133957: 'rejected, NR', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f0134286: 'rejected, NR', // no online
  f0134516: 'rejected, Singapore', // deal start epoch is too far in the future: 981304 > 959704
  f0134518: 'rejected, China, Guangdong', // deal start epoch is too far in the future: 981304 > 979864
  f0142515: 'rejected, NR', // no online
  f0143928: 'rejected, China, Beijing',
  f0145843: 'rejected, NR', // no online
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
  f0161542: 'rejected, NR', // deal start epoch is too far in the future: 981371 > 958475
  f0162385: 'rejected, China, Beijing',
  f0164126: 'rejected, NR', // no online
  f0164291: 'rejected, China, Fujian', // no online
  f0169153: 'rejected, China, Chengdu', // sh: 1: jq: not found
  f0214631: 'rejected, Korea, Seoul', // no online
  f0216849: 'rejected, China, Fujian', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
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
  f0401135: 'rejected, Singapore', // deal start epoch is too far in the future: 981306 > 959706
  f0401303: 'rejected, Korea, Ulju-gun', // no online
  f0401348: 'rejected, Korea, Chuncheon', // no online
  f0402371: 'rejected, China, Shanghai', // miner is not accepting unverified storage deals
  f0409069: 'rejected, NR', // Deals from client wallet f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q are not welcome
  f0410001: 'rejected, NR', // forbid f3sml2wt7uzarci2pjvzra64mapi2hgslhtuwyvxgkxi2dbbazxux5eunb5imdo2v2hyylfr3cpe5qjxvrsj3q
  f0417918: 'rejected, NR', // no online
  f0422229: 'rejected, NR', // no online
  f0423371: 'rejected, Korea, Seoul', // no online
  f0423381: 'rejected, Korea, Seoul', // no online
  f0432594: 'rejected, China, Zhengzhou', // no online
  f0435045: 'rejected, Korea, Ulju-gun', // no online
  f0444122: 'rejected, NR', // deal start epoch is too far in the future: 981306 > 979866
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
  f0517213: 'rejected, NR', // deal start epoch is too far in the future: 981307 > 979867
  f0522364: 'rejected, NR', // deal start epoch is too far in the future: 981307 > 959707
  f0522949: 'rejected, China, Beijing', // deal start epoch is too far in the future: 981307 > 959707
  f0524539: 'rejected, Korea, Suwon', // no online
  f0669999: 'rejected, NR', // no online
  f0675287: 'rejected, NR', // no online
  f0678845: 'rejected, China, Zhengzhou', // no online
  f0680538: 'rejected, Korea, Bucheon-si', // no online
  f0687206: 'rejected, China, Hangzhou', // no online
  f0694843: 'rejected, NR', // no online
  f0697462: 'rejected, Korea, Dalseo-gu', // no online
  f0703149: 'rejected, NR',
  f0706693: 'rejected, Belarus, Baranovichi', // no online
  f0709325: 'rejected, Korea, Jung-gu', // no online
  f0709366: 'rejected, China, Hangzhou', // no online
  f0713736: 'rejected, NR', // no online
  f0715235: 'rejected, Korea, Jung-gu', // no online
  f0718665: 'rejected, NR', // no online
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
  f0833793: 'rejected, China, Henan', // no online
  f0836164: 'rejected, USA', // no online
  f0838684: 'rejected, Czechia, Prague', // total deal price less than currently accepted minimum: 0.00001155612 FIL < 0.012 FIL
  f0838852: 'rejected, NR', // no online
  f0838873: 'rejected, USA, Washington', // no online
  f0838893: 'rejected, USA, Des Moines', // no online
  f0838923: 'rejected, Netherlands, Amsterdam', // no online
  f0840060: 'rejected, China, Changchun', // no online
  f0857798: 'rejected, China, Wenzhou', // no online
  f0867312: 'rejected, China, Foshan', // no online
  f0872282: 'rejected, China, Guangzhou', // no online
  f0878005: 'rejected, NR', // no online
  f01024569: 'rejected, China, Hangzhou', // no online
  f01024886: 'rejected, China, Wenzhou', // no online
  f01051151: 'rejected, Korea, Jung-ang', // no online
  f01051152: 'rejected, Korea, Jung-ang', // no online
  f01052991: 'rejected, Korea, Jung-ang', // no online
  f01072221: 'rejected, USA, San Diego', // no online
  f01074953: 'rejected, NR', // no online
  f01075514: 'rejected, Korea, Jung-ang', // no online
  f01075517: 'rejected, Korea, Jung-ang', // no online
  f01075904: 'rejected, NR', // no online
  f01077708: 'rejected, NR', // no online
  f01086553: 'rejected, China, Zhongshan', // no online
  f01086808: 'rejected, NR', // sh: 1: /root/.lotusminer/dealfilter.pl: not found
  f01089898: 'rejected, Korea, Jung-gu', // no online
  f01099820: 'rejected, China, Wenzhou', // no online
  f01104909: 'rejected, China, Shanghai', // no online
  f01117206: 'rejected, China, Jieyang', // no online
  f01119939: 'rejected, USA, Baxter', // no online
  f01121994: 'rejected, China, Nanning', // no online
  f01122640: 'rejected, auto', // no online
  f01128709: 'rejected, autolisted', // no online

  // Fail

  f01012: 'fail, China, Guangzhou + Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFLQGbLNFnsPgpNrF4e1gKCACTY7jQoVyRjQVYioR84UB:  * [/ip4/127.0.0.1/tcp/8888] dial tcp4 127.0.0.1:8888: connect: connection refused  * [/ip4/183.60.252.190/tcp/8888] dial tcp4 0.0.0.0:43351->183.60.252.190:8888: i/o timeout  * [/ip4/43.230.90.191/tcp/8888] dial tcp4 0.0.0.0:43351->43.230.90.191:8888: i/o timeout
  f01152: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFRLNrTpPQrNK98yv2JAFWxXiC2fSFjmfCaWuqNp1RkGM:  * [/ip4/101.36.64.211/tcp/42545] dial tcp4 0.0.0.0:43351->101.36.64.211:42545: i/o timeout
  f01155: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMUvqQ2gKwb8YCM1GKZgcQCVsRAMH97BjzQoN9he91jDo:  * [/ip4/203.107.44.156/tcp/39770] dial tcp4 0.0.0.0:43351->203.107.44.156:39770: i/o timeout  * [/ip4/10.10.20.110/tcp/39770] dial tcp4 0.0.0.0:43351->10.10.20.110:39770: i/o timeout
  f01231: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLmissry3Smj7oSH495SWBwjCh6rQY3GWsnxJvweeZT7r:  * [/ip4/127.0.0.1/tcp/10241] dial tcp4 127.0.0.1:10241: connect: connection refused  * [/ip6/::1/tcp/10241] dial tcp6 [::1]:10241: connect: connection refused  * [/ip4/47.252.15.25/tcp/55242] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWLmissry3Smj7oSH495SWBwjCh6rQY3GWsnxJvweeZT7r, but remote key matches 12D3KooWQWNyWUpMmAgh8f84bneQ5164tDUYjJkJsFWxKrC3UDDD  * [/ip4/172.17.32.101/tcp/10241] dial tcp4 0.0.0.0:43351->172.17.32.101:10241: i/o timeout
  f01235: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEZtCEjeef1Ud7Knw3wmyutuS9nMQ8EiYNvbB5caM1X1F:  * [/ip4/170.33.12.95/tcp/16668] dial tcp4 0.0.0.0:43351->170.33.12.95:16668: i/o timeout
  f01241: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01287: 'fail, China, Jiaxing, MaiTian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJQd43HScS7iBzsggGyoE5yrXAeCcfAqhrB4NrsQX7otw:  * [/ip4/122.225.68.92/tcp/5472] dial tcp4 0.0.0.0:43351->122.225.68.92:5472: i/o timeout  * [/ip4/172.16.2.123/tcp/5472] dial tcp4 0.0.0.0:43351->172.16.2.123:5472: i/o timeout
  f01314: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f01475: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPD6dMSKHegPtnZvhC8ToQHPQEE4kZRxNK6uZv4Dk8nBG:  * [/ip4/170.33.12.186/tcp/17031] dial tcp4 0.0.0.0:43351->170.33.12.186:17031: i/o timeout
  f01782: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAECESUksm2HVdjSY7X1DpDD9dhPHXN8JuRdyGHcky5ox:  * [/ip4/139.196.240.164/tcp/11347] dial tcp4 0.0.0.0:43351->139.196.240.164:11347: i/o timeout
  f01799: 'fail, China, Jinan + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBSVJEJLvLCFVzhYEfLVmznbL4Horztx4W6bXuYa7w1VJ:  * [/ip4/222.175.139.190/tcp/63208] dial tcp4 0.0.0.0:43351->222.175.139.190:63208: i/o timeout  * [/ip4/195.123.237.226/tcp/62333] dial tcp4 0.0.0.0:43351->195.123.237.226:62333: i/o timeout
  f01800: 'fail, China, Shenzhen + Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKpE8ej5zhZ8JBnwEsf3fTy73VBUwaHY8QZcz18Rtmrqr:  * [/ip4/182.131.4.48/tcp/33333] dial tcp4 182.131.4.48:33333: connect: connection refused
  f02299: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEratp7oKx1VPMGZY5xeukYMmKPuxKo92sjsHsx6KSbTE:  * [/ip4/182.18.83.2/tcp/1024] dial tcp4 0.0.0.0:43351->182.18.83.2:1024: i/o timeout
  f02388: 'fail, Netherlands, Amersfoort, Kroketje', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02399: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR76gswS31CE7yMXLhVpesUx9ePgaUYWaJoHY3jLpPenT:  * [/ip4/175.24.25.61/tcp/44449] dial tcp4 0.0.0.0:43351->175.24.25.61:44449: i/o timeout
  f02403: 'fail, UK, London + Manchester', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMj9PnQDUCVunSoYrkbxhLV2rjK8bKBLQML3sCvpPcN8B:  * [/ip4/192.168.200.11/tcp/18888] dial tcp4 0.0.0.0:43351->192.168.200.11:18888: i/o timeout  * [/ip4/2.58.47.71/tcp/18888] dial tcp4 0.0.0.0:43351->2.58.47.71:18888: i/o timeout  * [/ip4/2.58.45.33/tcp/18888] dial tcp4 0.0.0.0:43351->2.58.45.33:18888: i/o timeout
  f02405: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAyXVY9WLfATgPPtJ2wB6T44MachjCV7jNRAmDXs2ZKoP:  * [/ip4/119.147.213.59/tcp/4123] dial tcp4 119.147.213.59:4123: connect: connection refused  * [/ip4/192.168.231.206/tcp/4123] dial tcp4 0.0.0.0:43351->192.168.231.206:4123: i/o timeout
  f02417: 'fail, China, Zhangjiakou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCqGULDJFYkgTYvmzToQA4gTMGwV3ZpfkDgrnjXY6suRS:  * [/ip4/116.132.221.10/tcp/10240] dial tcp4 0.0.0.0:43351->116.132.221.10:10240: i/o timeout
  f02420: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLarDsiyUrxyyAESiMZbmU1kTrcXhLfUw7yU42JeWY8Ad:  * [/ip4/47.252.2.93/tcp/34571] dial tcp4 0.0.0.0:43351->47.252.2.93:34571: i/o timeout
  f02421: 'fail, China, Deyang + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPQgh1tLEZ6sxmnoZ2xX4xLHB8rrxNeEnEA5untT9rhdU:  * [/ip4/192.168.109.3/tcp/5002] dial tcp4 0.0.0.0:43351->192.168.109.3:5002: i/o timeout  * [/ip4/125.64.78.27/tcp/5002] dial tcp4 0.0.0.0:43351->125.64.78.27:5002: i/o timeout  * [/ip4/161.117.186.53/tcp/5002] dial tcp4 0.0.0.0:43351->161.117.186.53:5002: i/o timeout
  f02422: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGLq2Q9mQ8tNynijNfNJj1K7UTUPZKfr5iWXspd617yLo:  * [/ip4/117.38.4.82/tcp/22347] dial tcp4 0.0.0.0:43351->117.38.4.82:22347: i/o timeout
  f02423: 'fail, Ukraine, Kyiv', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRmBqXyx9EXRYJLF28hPw6YoxzErmrSE2twSufnebzPGr:  * [/ip4/176.104.58.70/tcp/1347] dial tcp4 0.0.0.0:43351->176.104.58.70:1347: i/o timeout
  f02425: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCK7wNHxKjxN5CGMGdTLh1VRwxru9cuR7353pPHvCBJ6H:  * [/ip4/196.12.34.77/tcp/2254] dial tcp4 0.0.0.0:43351->196.12.34.77:2254: i/o timeout
  f02438: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMrDPhKaMeJFenXRFd4Rb9Zt111CBY7uY6AoZ93MTbLHw:  * [/ip4/202.34.55.65/tcp/11254] dial tcp4 0.0.0.0:43351->202.34.55.65:11254: i/o timeout
  f02492: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWExafiDYdEKRvWWTRMfZC7t7YzqMmfJDEcp86BXC27TTJ:  * [/ip4/103.142.248.7/tcp/3347] dial tcp4 0.0.0.0:43351->103.142.248.7:3347: i/o timeout
  f02514: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02520: 'fail, China, Hong Kong + Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGuiACQawFqfzpE5LQRKMvLq3qSYvKkEwLgRsVokvCjTj:  * [/ip4/121.14.159.107/tcp/31432] dial tcp4 0.0.0.0:43351->121.14.159.107:31432: i/o timeout  * [/ip4/10.3.4.152/tcp/31432] dial tcp4 0.0.0.0:43351->10.3.4.152:31432: i/o timeout  * [/ip4/8.211.50.10/tcp/31432] dial tcp4 0.0.0.0:43351->8.211.50.10:31432: i/o timeout
  f02529: 'fail, China, Chongqing + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFEZiYoJxqyuANeLtn7tDytRkYzcc9HS6gbaymHgMijWc:  * [/ip4/101.206.156.202/tcp/23004] dial tcp4 0.0.0.0:43351->101.206.156.202:23004: i/o timeout  * [/ip4/8.209.64.163/tcp/23004] dial tcp4 0.0.0.0:43351->8.209.64.163:23004: i/o timeout
  f02610: 'fail, Netherlands', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMnLT8D5yNAdEQbt2fXHFhUVQT2crdGLVktpSo7RCXtnk:  * [/ip4/202.0.16.111/tcp/41254] dial tcp4 0.0.0.0:43351->202.0.16.111:41254: i/o timeout
  f02613: 'fail, China, Chongqing + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSHE6LnRd5b8GdWaCAfBz5NQhq4uZafybStUnYeabgwRB:  * [/ip4/8.209.64.163/tcp/23027] dial tcp4 0.0.0.0:43351->8.209.64.163:23027: i/o timeout  * [/ip4/101.206.156.202/tcp/23027] dial tcp4 0.0.0.0:43351->101.206.156.202:23027: i/o timeout
  f02614: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE6JfBTMyjirNPSRi4AfZjCseRHGzXZvXUmKMsdHViyif:  * [/ip4/170.33.9.50/tcp/32633] dial tcp4 0.0.0.0:43351->170.33.9.50:32633: i/o timeout
  f02619: 'fail, China, Beijing, Blockcasting', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKZRdxtd9tC1tEvUynBRqRqzdxsi3jBmURi9HxftfgZLS:  * [/ip4/0.0.0.0/tcp/10240] dial tcp4 0.0.0.0:10240: connect: connection refused
  f02625: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE1N2gyzrMRA6EywurJGaseGWuTa9Rn5tXdPLZ7yo8QSK:  * [/ip4/101.133.172.142/tcp/1024] failed to negotiate security protocol: EOF
  f02654: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGPpw5iYy388qzkZL4qmJR6RoUQfbUQS5kDz7sDfEVuwJ:  * [/ip4/114.88.222.181/tcp/43355] dial tcp4 0.0.0.0:43351->114.88.222.181:43355: i/o timeout
  f02721: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNNUguf8bGe72cudmWpKobV3Pkkc9Lx3GBDG2AEfDZN9L:  * [/ip4/202.0.32.211/tcp/4254] dial tcp4 0.0.0.0:43351->202.0.32.211:4254: i/o timeout
  f02723: 'fail, China, Tongling', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDvwbbdLgBbuQ3MPPN7gos8XEXekTJxW5NX4DMCfXNUoZ:  * [/ip4/60.173.23.17/tcp/23456] dial tcp4 0.0.0.0:43351->60.173.23.17:23456: i/o timeout
  f02725: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9ygexQt5zAMg1jLPbb3g4fgYfKHZKNcviMxXJk4UJAMX:  * [/ip4/101.32.38.57/tcp/18899] dial tcp4 0.0.0.0:43351->101.32.38.57:18899: i/o timeout
  f02726: 'fail, USA, Brooklyn', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWS4dsPm97xGtEaCSuH4k6uWtrH3A1kH1tKpBejDTPATrK:  * [/ip4/202.0.71.141/tcp/1254] dial tcp4 0.0.0.0:43351->202.0.71.141:1254: i/o timeout
  f02731: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWND88xcsZCdYNSUkqy35ikLpMaDpPMKse1mmMAZrFQyD6:  * [/ip4/202.6.95.44/tcp/21254] dial tcp4 0.0.0.0:43351->202.6.95.44:21254: i/o timeout
  f02767: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQotzkhoCXR7hSo5FMrrsHhYh8q7KSXHx85oZkFd3B8Pg:  * [/ip4/18.192.27.227/tcp/37722] dial tcp4 0.0.0.0:43351->18.192.27.227:37722: i/o timeout
  f02769: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02770: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02775: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02777: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02778: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02779: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f02838: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMwvGx979vAyPA9gSyCcZ5xdLyi25WrJMikiYUG3sdton:  * [/ip4/118.123.228.9/tcp/48633] dial tcp4 0.0.0.0:43351->118.123.228.9:48633: i/o timeout
  f02856: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f03000: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f03002: 'fail, China, Chongqing + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAwqepwZRwQPyBew1FWZo7BvQ6tTP3nyjG8skVU9uWEwL:  * [/ip4/101.206.156.202/tcp/18880] dial tcp4 0.0.0.0:43351->101.206.156.202:18880: i/o timeout  * [/ip4/8.209.64.163/tcp/18880] dial tcp4 0.0.0.0:43351->8.209.64.163:18880: i/o timeout
  f03134: 'fail, China, Cangzhou, QiaoMu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGKAuRMFJPmp6v9DR81vnbnFaToheUDUnMsXtT4MCdWq2:  * [/ip4/111.161.72.108/tcp/4913] dial tcp4 0.0.0.0:43351->111.161.72.108:4913: i/o timeout
  f03144: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFMK8Vg4SH5Wsrvp76JpJvwiuxdXpRyPrWa76Jrj6K4tc:  * [/ip4/103.214.41.38/tcp/23456] dial tcp4 0.0.0.0:43351->103.214.41.38:23456: i/o timeout
  f03176: 'fail, USA, San Mateo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPDyDeAQWj4kSEkVog1NAHJVu9cWpur3uGzH8H92THWPp:  * [/ip4/47.88.55.220/tcp/15470] dial tcp4 0.0.0.0:43351->47.88.55.220:15470: i/o timeout  * [/ip4/47.88.57.241/tcp/15470] dial tcp4 0.0.0.0:43351->47.88.57.241:15470: i/o timeout
  f03266: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRTVB3ued6YhMdyJ2qoQ6cKkVE7pPbfmETAmz61dz8cDj:  * [/ip4/200.226.167.245/tcp/22125] dial tcp4 0.0.0.0:43351->200.226.167.245:22125: i/o timeout
  f03275: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f03287: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPLKQae57X1Wh9afjjBZbujq6qS53GdNbLULuyMARgxPC:  * [/ip4/216.154.66.123/tcp/32215] dial tcp4 0.0.0.0:43351->216.154.66.123:32215: i/o timeout
  f03328: 'fail, China, Xinxiang, Golden Miner', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ3c9CscaFyBbZcVYreTDCQAttS4g5NxomEDiSV7ZHStV:  * [/ip4/27.50.142.61/tcp/2347] dial tcp4 0.0.0.0:43351->27.50.142.61:2347: i/o timeout
  f03344: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f03358: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAAR2DxhxHGbXYBGL5qEawVpYdmRiTE4SxnzcFGVN4Vz3:  * [/ip4/1.183.72.211/tcp/30001] dial tcp4 0.0.0.0:43351->1.183.72.211:30001: i/o timeout
  f03363: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNUoRxEMinMJFfr98yF9UCnakRWRJPPN843BCpVoyiZtw:  * [/ip4/1.183.72.210/tcp/30003] dial tcp4 0.0.0.0:43351->1.183.72.210:30003: i/o timeout
  f03367: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSxtJbCSV1BFbbGoNKiY7tYue55KfaSS71QTYHhpsGXnm:  * [/ip4/95.251.119.33/tcp/3215] dial tcp4 0.0.0.0:43351->95.251.119.33:3215: i/o timeout
  f03624: 'fail, Germany, Chemnitz, ode', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvyqMy8wyyqvc4tPqkRrMcKkG2JNfVyZSX1viC88TXwG:  * [/ip4/87.128.76.11/tcp/29866] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJvyqMy8wyyqvc4tPqkRrMcKkG2JNfVyZSX1viC88TXwG, but remote key matches 12D3KooWDuY4XQ9iVEiCSCihsQaCdPUwdj2j6J83EHrew4hc7KeX
  f04443: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDact5w85YfxchLRcyhhZ2AA9u98PLByXX76Lu5j5VAjS:  * [/ip4/116.229.183.166/tcp/29847] dial tcp4 0.0.0.0:43351->116.229.183.166:29847: i/o timeout
  f05316: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f07749: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f07796: 'fail, China, Hunan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f07824: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQgd9pvSSbFiDf6FsAhBsMSorq8oAGE8C1dLuED83xJoN:  * [/ip4/172.21.108.96/tcp/32759] dial tcp4 0.0.0.0:43351->172.21.108.96:32759: i/o timeout
  f07830: 'fail, China, Zhongshan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWE9SzGnHcweWu3UQaStBR1vmzjXqaN1YCTcSZ9DZ2oRAF:  * [/ip4/178.208.57.59/tcp/21322] dial tcp4 0.0.0.0:43351->178.208.57.59:21322: i/o timeout
  f07919: 'fail, China, Beijing, Shanghai, Hunan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQbtaEAHPhVBuGoQtdnPxFfuKZ7axSiCFeNxuYgQGQYFx:  * [/ip4/139.196.136.126/tcp/23456] failed to negotiate security protocol: read tcp4 144.217.11.204:43351->139.196.136.126:23456: read: connection reset by peer  * [/ip4/47.101.4.131/tcp/23456] dial tcp4 0.0.0.0:43351->47.101.4.131:23456: i/o timeout  * [/ip4/101.32.198.187/tcp/23456] dial tcp4 0.0.0.0:43351->101.32.198.187:23456: i/o timeout  * [/ip4/101.32.198.186/tcp/23456] dial tcp4 0.0.0.0:43351->101.32.198.186:23456: i/o timeout
  f07969: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFUXofzyD12vD1rWnNi9coXTtUqc188pNo2r7sNSgTBYQ:  * [/ip4/121.52.246.48/tcp/5002] dial tcp4 0.0.0.0:43351->121.52.246.48:5002: i/o timeout
  f08091: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWF2fkifBQNtVh9LwQC9m1MvgTTdLVHAezSxATrze3aK25:  * [/ip4/0.0.0.0/tcp/5472] dial tcp4 0.0.0.0:5472: connect: connection refused  * [/ip4/119.18.197.98/tcp/42545] dial tcp4 0.0.0.0:43351->119.18.197.98:42545: i/o timeout
  f08101: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGjb3T4GLL7LXjfahBiaxRJDw2tu3ps42jYM4HcMTJ5P6:  * [/ip4/192.168.3.11/tcp/32759] dial tcp4 0.0.0.0:43351->192.168.3.11:32759: i/o timeout
  f08148: 'fail, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJRifXRHkLaHN8JgPxy6LDmn5JyDaBxqnKLEgZur3S8ZX:  * [/ip4/103.108.182.27/tcp/30031] dial tcp4 0.0.0.0:43351->103.108.182.27:30031: i/o timeout
  f08242: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKPWTxHrJdASejkyzHjU7f3XVECGWSmJFCy9SL65Dcutg:  * [/ip4/47.242.56.117/tcp/6789] dial tcp4 0.0.0.0:43351->47.242.56.117:6789: i/o timeout
  f08264: 'fail, China, Xianning', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWC4HGgmJqCZtaQzLRUSvy21GRhayGtaSES536Ug7mxpqf:  * [/ip4/103.222.191.115/tcp/1161] dial tcp4 0.0.0.0:43351->103.222.191.115:1161: i/o timeout
  f09002: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEEFKcY5USt22uCrNLj6McbDAtkJZRF7ns5atGS8M3rio:  * [/ip4/113.200.194.196/tcp/32634] dial tcp4 0.0.0.0:43351->113.200.194.196:32634: i/o timeout
  f09037: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGijGVP9N8ebcJNNEEPEGDhWbSJbsW2KtWeqVa5MQvTBx:  * [/ip4/170.33.12.95/tcp/16666] dial tcp4 0.0.0.0:43351->170.33.12.95:16666: i/o timeout
  f09620: 'fail, China, Weifang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRHjQb3e5ZEJLbJmfiuTftU9f63ts5c3kr1WCaz7PDMXP:  * [/ip4/58.57.65.80/tcp/9620] dial tcp4 0.0.0.0:43351->58.57.65.80:9620: i/o timeout
  f09652: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAAap3GmuBww6k7oYMLvQeoVVstVFmQaLqThfM9ZFtDqT:  * [/ip4/170.33.9.50/tcp/32632] dial tcp4 0.0.0.0:43351->170.33.9.50:32632: i/o timeout
  f09710: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMceygoywUMfKmgMsESpZwsbALV11E3oUjdoC7iqDbQbr:  * [/ip4/103.44.253.56/tcp/40573] dial tcp4 0.0.0.0:43351->103.44.253.56:40573: i/o timeout
  f010010: 'fail, China, Changzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLxERuXPUWnpW4S66mV4cYHyvTDqMbEarwTyYsL8c4SAe:  * [/ip4/61.177.78.101/tcp/9981] dial tcp4 0.0.0.0:43351->61.177.78.101:9981: i/o timeout
  f010038: 'fail, China, Hangzhou + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQMDhsK57Vu57qPkJ3cg1sciGcQdtdZzr4ed1UyYPSYpu:  * [/ip4/10.10.20.109/tcp/39774] dial tcp4 0.0.0.0:43351->10.10.20.109:39774: i/o timeout  * [/ip4/170.33.12.166/tcp/39774] dial tcp4 0.0.0.0:43351->170.33.12.166:39774: i/o timeout
  f010048: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWErRVHN36TpgVcDrKt5d1wZm8j649cGk29zcYSmxus86u:  * [/ip4/124.78.146.207/tcp/65500] dial tcp4 0.0.0.0:43351->124.78.146.207:65500: i/o timeout
  f010056: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWExdbgcJnR1JYaThHyyS8eGSzM3Y2BSpTn1YsKF3MPz7b:  * [/ip4/8.209.82.79/tcp/14567] dial tcp4 0.0.0.0:43351->8.209.82.79:14567: i/o timeout
  f010202: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f010225: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBwpsvnPsPhoDLLbdkm3tVJaAkxYWzp43H9F5rfESaHun:  * [/ip4/8.209.107.150/tcp/12312] dial tcp4 0.0.0.0:43351->8.209.107.150:12312: i/o timeout
  f010247: 'fail, China, Yantai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLszEHE9KZT2ZBBhNSW4RheKixHT3Bk1GVdhBxwEYYDbS:  * [/ip4/122.14.201.169/tcp/10240] dial tcp4 0.0.0.0:43351->122.14.201.169:10240: i/o timeout
  f010399: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNaRz2GcsNETTGnZEp5zvJqUesc4Mq3kbrqkbizemRssT:  * [/ip4/183.2.154.156/tcp/36699] dial tcp4 0.0.0.0:43351->183.2.154.156:36699: i/o timeout
  f010400: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSPCJCC4kZKxze4Q8u6NWVPQb3wnXrDvbC42bbV1xjzMA:  * [/ip4/59.44.27.130/tcp/8787] dial tcp4 0.0.0.0:43351->59.44.27.130:8787: i/o timeout
  f010424: 'fail, Australia, Sydney', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGGVTP3jL5Gg5YPR7Q8j3RexRDgprF9EvrP4giafV956F:  * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:43351->43.241.189.214:39438: i/o timeout
  f010501: 'fail, China, Hangzhou, Interstellar Roewe', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWETA15epWhb2LReibLRuj6RdhBUvJjpypUNNtmbVFEUs7:  * [/ip4/183.134.218.26/tcp/21735] dial tcp4 0.0.0.0:43351->183.134.218.26:21735: i/o timeout
  f010538: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHTRhvSg4viFHbzoHndBo4riNU5psWY37SxytqhA3cYd5:  * [/ip4/8.209.107.150/tcp/12320] dial tcp4 0.0.0.0:43351->8.209.107.150:12320: i/o timeout
  f010558: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f010616: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSWbS5Ba3SkWFdYyHPXKFZDb6kBPvQCzV7CyGNEo2iAXR:  * [/ip4/8.209.107.150/tcp/12313] dial tcp4 0.0.0.0:43351->8.209.107.150:12313: i/o timeout
  f014251: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQxfYwV563URu95cLTVf6ogdTMTFdwB5CQKFFHPatPfU4:  * [/ip4/58.220.66.66/tcp/46166] dial tcp4 0.0.0.0:43351->58.220.66.66:46166: i/o timeout
  f014311: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDxu2JXzsnxz2L9ZWRXNBypcpQcduWwqmSZfu5EawCDmZ:  * [/ip4/162.62.55.44/tcp/12309] dial tcp4 0.0.0.0:43351->162.62.55.44:12309: i/o timeout
  f014335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f014365: 'fail, Australia, Turramurra + Sydney', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWM7CmoE6ZYynn9b8cJZVDSkCV8Pb1soi5gArzZMkqcoLk:  * [/ip4/139.180.162.246/tcp/10999] dial tcp4 0.0.0.0:43351->139.180.162.246:10999: i/o timeout  * [/ip4/49.176.172.221/tcp/26201] dial tcp4 0.0.0.0:43351->49.176.172.221:26201: i/o timeout
  f014386: 'fail, China, Panzhihua', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK9S1GMd9SqrpLxLJqrp5ekWKCFnx11vsUj1eagFA4p4d:  * [/ip4/180.149.130.16/tcp/9845] dial tcp4 0.0.0.0:43351->180.149.130.16:9845: i/o timeout
  f014392: 'fail, USA + Russia, Khabarovsk + Japan, Heiwajima', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD38od1j4abLotnfpALNPZt3TdjmQ1HqSiQBe1qZpnrCc:  * [/ip4/172.247.228.122/tcp/9999] dial tcp4 0.0.0.0:43351->172.247.228.122:9999: i/o timeout  * [/ip4/92.223.72.130/tcp/9999] dial tcp4 0.0.0.0:43351->92.223.72.130:9999: i/o timeout  * [/ip4/66.42.38.110/tcp/9990] dial tcp4 0.0.0.0:43351->66.42.38.110:9990: i/o timeout
  f014395: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJyNmap2Z6WWb6xBqDwUpKeFkGHaBHDkMKhrkd6jj6FEY:  * [/ip4/125.93.73.102/tcp/51105] dial tcp4 125.93.73.102:51105: connect: connection refused
  f014415: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNM14sFqpmsSAW752NdjvpCxcEGhpTtFNntEW9zjvboT3:  * [/ip4/13.248.165.152/tcp/33612] failed to negotiate security protocol: EOF
  f014522: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKnwHakHiXkurxFTFVi4DTDkGftHzP6sh1khwHPPwcPjo:  * [/ip4/81.68.170.164/tcp/5474] dial tcp4 0.0.0.0:43351->81.68.170.164:5474: i/o timeout
  f014686: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f014699: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f014706: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPa8LfszwQ26MqDtciL85N1ooUeHGygZkfjkVYtqX8qAg:  * [/ip4/8.209.107.150/tcp/12308] dial tcp4 0.0.0.0:43351->8.209.107.150:12308: i/o timeout
  f014778: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLrw43ktH6n1YZ7qqWJw4ijBBD7Zc3iy6AcMktnxM7gVY:  * [/ip4/162.62.55.44/tcp/12310] dial tcp4 0.0.0.0:43351->162.62.55.44:12310: i/o timeout
  f014804: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNaLA26L7fd77idyimauWSobjBkeRA3P554yFcF3Ep24N:  * [/ip4/8.209.107.150/tcp/12314] dial tcp4 0.0.0.0:43351->8.209.107.150:12314: i/o timeout
  f015685: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSHahEVqnoWuoSwL3ZfJnRRTBx9NDc1956W4TBoLbu1zW:  * [/ip4/222.64.141.185/tcp/40321] dial tcp4 0.0.0.0:43351->222.64.141.185:40321: i/o timeout
  f015731: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQvZRpw6L6ErN6WeVYeAPQLvbtAHrXjHQoogiRFVEkEhw:  * [/ip4/8.209.107.150/tcp/12329] dial tcp4 0.0.0.0:43351->8.209.107.150:12329: i/o timeout
  f015734: 'fail, China, Qingdao', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f015848: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHcMzWrWwRwKTekVWyEYipSgmYzRSzkLuRxdLJPXMY6DT:  * [/ip4/8.209.107.150/tcp/12321] dial tcp4 0.0.0.0:43351->8.209.107.150:12321: i/o timeout
  f015919: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAp28a2tL2vCae75zQXQiG5Tnf5ydgwVLNnztZ4sMgfst:  * [/ip4/8.209.107.150/tcp/12316] dial tcp4 0.0.0.0:43351->8.209.107.150:12316: i/o timeout
  f015922: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDaa2ZnPvxDGHPSr6R1oHSfDxJjBLc6mecMCPNcSzhgLz:  * [/ip4/162.62.55.44/tcp/12317] dial tcp4 0.0.0.0:43351->162.62.55.44:12317: i/o timeout
  f015925: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMPTWy68Cpoy7YzGrWE5oJhDmZQ7wqzfaocv8w5eNsLit:  * [/ip4/8.209.107.150/tcp/12318] dial tcp4 0.0.0.0:43351->8.209.107.150:12318: i/o timeout
  f015926: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFGsaBTVoaXyJLGMtdghwdUt6eRgLzT8Y7MYTpyU2U3V6:  * [/ip4/162.62.55.44/tcp/12319] dial tcp4 0.0.0.0:43351->162.62.55.44:12319: i/o timeout
  f015927: 'fail, USA, East Islip, CDImine', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQGPq3PGYwecDrdb8Xv8N8KXqsVs4VP7EXBh671nttjpT:  * [/ip4/69.126.46.133/tcp/40947] dial tcp4 0.0.0.0:43351->69.126.46.133:40947: i/o timeout
  f016563: 'fail, China, Deyang + Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEMbiAa9CFQBe8th6TMMEXyK5UpM7ag18puE1aktkriq1:  * [/ip4/161.117.186.53/tcp/8001] dial tcp4 0.0.0.0:43351->161.117.186.53:8001: i/o timeout  * [/ip4/125.64.78.27/tcp/8001] dial tcp4 0.0.0.0:43351->125.64.78.27:8001: i/o timeout  * [/ip4/192.168.109.2/tcp/8001] dial tcp4 0.0.0.0:43351->192.168.109.2:8001: i/o timeout  * [/ip4/192.168.109.1/tcp/8001] dial tcp4 0.0.0.0:43351->192.168.109.1:8001: i/o timeout
  f017193: "fail, China, Xi'an + Singapore", // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f018538: 'fail, China, Huzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f019074: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLM1TeB6wiFXdKgHPRh5W6wve8NXC13mEk3seDqVttKqg:  * [/ip4/192.168.2.55/tcp/3000] dial tcp4 0.0.0.0:43351->192.168.2.55:3000: i/o timeout
  f019099: 'fail, China, Hong Kong + Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPXNsG3BG7yGEBQVncw6Du279ESDyYHBX3v3kN23zSKsG:  * [/ip4/45.158.182.10/tcp/12345] dial tcp4 0.0.0.0:43351->45.158.182.10:12345: i/o timeout
  f019100: 'fail, Romania, Cluj-Napoca, noisyfan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJFAe3K8ENQMmtZzSYsRoCNfvf8N3Ky15EVhCSoXjMhnP:  * [/ip4/79.119.122.118/tcp/55555] dial tcp4 0.0.0.0:43351->79.119.122.118:55555: i/o timeout
  f019240: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGfchVNtPipXgLz2Tb2zuF6ZvcZCkkgfE8pdgjjriPx9b:  * [/ip4/36.112.26.4/tcp/3458] dial tcp4 0.0.0.0:43351->36.112.26.4:3458: i/o timeout
  f019354: 'fail, Germany, Frankfurt', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLYorbezhim25zw5oAaPH6hpzKajEg4qiD7QcEFTNa1vJ:  * [/ip4/128.1.78.98/tcp/31437] dial tcp4 0.0.0.0:43351->128.1.78.98:31437: i/o timeout
  f019422: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f019638: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPPZz5WJkMn9GG87FYy6WwNE2LseU7KDo5DEA9H4ReWPP:  * [/ip4/1.183.72.210/tcp/30005] dial tcp4 0.0.0.0:43351->1.183.72.210:30005: i/o timeout
  f019806: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f020315: 'fail, China, Guangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMtQk6fPXsKjVok1psu8hGjuktQuFVbbqyndFTWWx6u3J:  * [/ip4/10.2.1.3/tcp/56432] dial tcp4 0.0.0.0:43351->10.2.1.3:56432: i/o timeout  * [/ip4/103.104.170.72/tcp/56432] dial tcp4 0.0.0.0:43351->103.104.170.72:56432: i/o timeout
  f020330: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBXPgkgXp2m35w78Bk43xTDVot5y47ewmVimnMhVkdYtx:  * [/ip4/193.193.193.14/tcp/14356] dial tcp4 0.0.0.0:43351->193.193.193.14:14356: i/o timeout
  f020331: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHPsvkyYG11ibvAQ3kGmoPdPBCfxvjXjZpa9NcVVSySCj:  * [/ip4/39.101.70.154/tcp/14567] dial tcp4 0.0.0.0:43351->39.101.70.154:14567: i/o timeout
  f020436: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRgBCjVvmsgJuE1VzRZ3EgSQoQtasZKAgiQ7zQN2J49N5:  * [/ip4/123.115.219.119/tcp/24002] dial tcp4 0.0.0.0:43351->123.115.219.119:24002: i/o timeout
  f020452: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAojcwZ3xQ8awhrXP4qhi7hH2Nv981JkzQyTsU83UMLkG:  * [/ip4/170.33.12.186/tcp/17012] dial tcp4 0.0.0.0:43351->170.33.12.186:17012: i/o timeout
  f020522: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLwpRZv1RnvGTzE67HkGLZc9HPAMvkJSM9eXBrF7FsfH1:  * [/ip4/8.211.49.16/tcp/14567] dial tcp4 0.0.0.0:43351->8.211.49.16:14567: i/o timeout
  f020604: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG2gh3aMiShLywLbkwB3E64KoMTuAuJvq463bGvmff51A:  * [/ip4/195.82.192.33/tcp/3321] dial tcp4 0.0.0.0:43351->195.82.192.33:3321: i/o timeout
  f020618: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGHFUS8oi1qbinPV4gnuNmU8EatZkYSya7HQahTd95XqU:  * [/ip4/170.33.12.186/tcp/17011] dial tcp4 0.0.0.0:43351->170.33.12.186:17011: i/o timeout
  f020742: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD3yEpkcFCuGh9mEwtyNY8HUxjDDWS7pkC4iGzpygdbDc:  * [/ip4/175.24.25.61/tcp/53456] dial tcp4 0.0.0.0:43351->175.24.25.61:53456: i/o timeout
  f020940: 'fail, USA, Bellevue', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f020957: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021461: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFi6doAcsSUCDhU9EFjSJD6t6up6ko35RD3ZtTdG6rjfC:  * [/ip4/170.33.12.186/tcp/17361] dial tcp4 0.0.0.0:43351->170.33.12.186:17361: i/o timeout
  f021525: 'fail, China, Guangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRPLVYuydRMtVtDSTEi1gpwewniZbpXZeDecSTtstfvAA:  * [/ip4/121.201.41.87/tcp/14567] dial tcp4 0.0.0.0:43351->121.201.41.87:14567: i/o timeout
  f021532: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFB42PdKvKzH2bLS1tXhBjBEMbL1Arcmr8DeHE7TV2wqN:  * [/ip4/121.46.237.2/tcp/23456] dial tcp4 0.0.0.0:43351->121.46.237.2:23456: i/o timeout
  f021536: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQwyZVYs63MDuiqAbvgaGzfFpo1uRmqZicKMuFCoRear3:  * [/ip4/120.133.137.154/tcp/2571] dial tcp4 120.133.137.154:2571: connect: connection refused  * [/ip4/120.133.137.154/tcp/7268] dial tcp4 120.133.137.154:7268: connect: connection refused  * [/ip4/172.20.4.158/tcp/7000] dial tcp4 0.0.0.0:43351->172.20.4.158:7000: i/o timeout
  f021547: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJhmH6Zj4SuNdNrXAThjLcoM1NzDTRuys5rr85ukfoRd7:  * [/ip4/170.33.12.186/tcp/17329] dial tcp4 0.0.0.0:43351->170.33.12.186:17329: i/o timeout
  f021695: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021704: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021710: 'fail, China, Shijiazhuang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021870: 'fail, China, Jieyang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f021961: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f022030: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022038: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022072: 'fail, China, Jieyang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022111: 'fail, China, Quanzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHjd2Mn9oXSg6Anuw5LtXyEtHoqsMSeK8gH495zukLjiQ:  * [/ip4/112.47.13.98/tcp/8081] dial tcp4 0.0.0.0:43351->112.47.13.98:8081: i/o timeout
  f022125: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFqVmmKFirUS75Y28bK4kGTFEydBgo2esUGEhK8oQznQT:  * [/ip4/172.168.0.220/tcp/33457] dial tcp4 0.0.0.0:43351->172.168.0.220:33457: i/o timeout
  f022227: 'fail, China, Jiangsu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFb6Kyw9uZHyB5cN9LSr7VUajpbrE3XJoL2zDdVi6cA2x:  * [/ip4/112.30.158.226/tcp/10240] dial tcp4 0.0.0.0:43351->112.30.158.226:10240: i/o timeout
  f022336: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022338: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022361: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022373: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022374: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022566: 'fail, China, Nanchong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQqBXoRpNnKmNvGst4qvX8n8Hfo1TUg4LATrrciWV2S3i:  * [/ip4/221.10.143.25/tcp/32005] dial tcp4 221.10.143.25:32005: connect: connection refused
  f022687: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDMP23CasGQtJLXWXpNcqBy6ENTuzZ4jsBvyRYkgNmJBE:  * [/ip4/182.131.4.194/tcp/10080] dial tcp4 0.0.0.0:43351->182.131.4.194:10080: i/o timeout
  f022804: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f022922: 'fail, China, Shenzhen, CAAP-MEG', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBNppTbYJGR7RUUKosPBhoVHTHfMKq4HTRcLJxMei7aoP:  * [/ip6/::1/tcp/40781] dial tcp6 [::1]:40781: connect: connection refused
  f023001: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNUTa7nwh7wH8vnHb5cYxHQaYf99N85t18fzRUBRFhgux:  * [/ip4/192.168.1.236/tcp/34617] dial tcp4 0.0.0.0:43351->192.168.1.236:34617: i/o timeout
  f023152: 'fail, China, Shandong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWN1MJM2v2ag8LVDKKz5DbGJuneePgh47Lq8rh1Gec3PWJ:  * [/ip4/106.74.7.4/tcp/32759] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWN1MJM2v2ag8LVDKKz5DbGJuneePgh47Lq8rh1Gec3PWJ, but remote key matches 12D3KooWBZ26N9VbVLBfiutv3uADBSFjr3FM1RbNXDMz4uW37nLN
  f023198: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f023200: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKV6h5S72ZzJvSVvUqoC1Q6i1eKKdYJEaKss2mbDNCnxi:  * [/ip4/175.24.25.61/tcp/13457] dial tcp4 0.0.0.0:43351->175.24.25.61:13457: i/o timeout
  f023205: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSjjE2kccKuZd7nZ2wrZ82rCg9zVMp35vCgZG86H6Gvm7:  * [/ip4/193.194.160.12/tcp/2234] dial tcp4 0.0.0.0:43351->193.194.160.12:2234: i/o timeout
  f023499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023561: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPs912rgbTFiN7KBzjREuDXGqgG4CMDDbei1HBJ3qgvwg:  * [/ip4/103.44.247.32/tcp/40573] dial tcp4 0.0.0.0:43351->103.44.247.32:40573: i/o timeout
  f023626: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023627: 'fail, China, Zhongwei', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023651: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023843: 'fail, China, Zhangjiakou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023882: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f023983: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNhc5Rzgc1c8p9kvBVhrLUB4ZZniwnpi4yQd1WVf952tp:  * [/ip4/61.164.212.154/tcp/28014] dial tcp4 61.164.212.154:28014: connect: connection refused
  f024066: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMjX9ZBRijeCWy8vVJhkar73WYmed1Sa137NZ3W56aHsc:  * [/ip4/182.131.4.197/tcp/10080] dial tcp4 0.0.0.0:43351->182.131.4.197:10080: i/o timeout
  f024089: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWL9BpZhuAK5XLcTozTvCmwnCVL7BL4AisXBJgjfDBovpc:  * [/ip4/10.11.4.210/tcp/1234] dial tcp4 0.0.0.0:43351->10.11.4.210:1234: i/o timeout
  f024137: 'fail, Singapore', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJLMF5W4wheCZMaVuBe57eLV93Wx9azEJhv1mZ1BWk6Js:  * [/ip4/195.146.128.172/tcp/11223] dial tcp4 0.0.0.0:43351->195.146.128.172:11223: i/o timeout
  f024156: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: context deadline exceeded
  f024182: 'fail, China, Hong Kong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQFqPz3vvYGGxB259qZfg3qzoKEnafG8DbfMKUHEUQ26z:  * [/ip4/14.136.246.136/tcp/46717] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQFqPz3vvYGGxB259qZfg3qzoKEnafG8DbfMKUHEUQ26z, but remote key matches 12D3KooWHuQtiCKJykJscPMrNiXaguBWKuhBfKDfGP6ieR6SgwdF
  f024483: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024511: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMgkmvx3KwMPDLEw8QrSZbwhy7umbYpkhNGAg7wLgNKdM:  * [/ip4/103.44.247.137/tcp/51105] dial tcp4 0.0.0.0:43351->103.44.247.137:51105: i/o timeout
  f024563: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024802: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024894: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024895: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f024972: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f025002: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSK67f2i4BYCP4xjUWxhonw38WP7invh47VoUbbXT7zgR:  * [/ip4/202.0.9.112/tcp/31354] dial tcp4 0.0.0.0:43351->202.0.9.112:31354: i/o timeout
  f025005: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f025017: 'fail, China, Hefei, 一三科技-913', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBZeFG1c5zNwCCVnCa6g5TyrUQu5f9oLTYsZyvSigBEXu:  * [/ip4/175.6.250.70/tcp/51105] dial tcp4 0.0.0.0:43351->175.6.250.70:51105: i/o timeout
  f025019: 'fail, China, Taiwan, Hsinchu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPcST189CRdZ2BLrE5NhFz2YQwcfCWdabj12FWwVNBjYj:  * [/ip4/140.113.194.250/tcp/24002] dial tcp4 0.0.0.0:43351->140.113.194.250:24002: i/o timeout
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
  f030384: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNfUzbXzVXqLV9pEubVenJoQHkWtkrR3aSvwyoXc7Kpys:  * [/ip4/103.40.249.175/tcp/12350] dial tcp4 0.0.0.0:43351->103.40.249.175:12350: i/o timeout
  f030408: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030509: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030510: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030511: 'fail, undefined', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f030649: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f032833: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f032850: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f032913: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033025: 'fail, Korea, Daegu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLCrE5QLwGxvodoDNoEjF5BxJV6NCeFuipXbjGYawaHfA:  * [/ip4/59.23.202.120/tcp/58770] dial tcp4 59.23.202.120:58770: connect: connection refused
  f033130: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033384: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033399: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033456: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033462: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033463: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033475: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033501: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f033517: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034350: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034544: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRXVLz2WJA2xkJ5SYzGC1JSnenKMw6Ji3AcArgbigrsPQ:  * [/ip4/192.162.197.113/tcp/3235] dial tcp4 0.0.0.0:43351->192.162.197.113:3235: i/o timeout
  f034545: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGGzwFRoHQ2PkctVAB2mNV67Yg4bJ1G84AQTNpN9y311b:  * [/ip4/83.56.103.132/tcp/13235] dial tcp4 0.0.0.0:43351->83.56.103.132:13235: i/o timeout
  f034548: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ7MPMEqCUUJMo2pszvQnR7prBnujeQuKrvaSyeeqJkCb:  * [/ip4/201.117.103.212/tcp/11235] dial tcp4 0.0.0.0:43351->201.117.103.212:11235: i/o timeout
  f034566: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034567: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034581: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034592: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWK8NjcyE6yfsRYngnMcAXf13CPpS1Kh7nLDMTUd2yRvxW:  * [/ip4/119.147.213.217/tcp/45137] dial tcp4 0.0.0.0:43351->119.147.213.217:45137: i/o timeout
  f034658: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034707: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034710: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f034777: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f035160: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f035161: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f035364: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f039992: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f040218: 'fail, China, Wuxi', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDGtfj4r9yeM9tebHySKRddd43SFjNJ8CQc7LXaCxADoP:  * [/ip4/58.215.14.146/tcp/30000] dial tcp4 0.0.0.0:43351->58.215.14.146:30000: i/o timeout
  f040665: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f042635: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f042855: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f042896: 'fail, China, Deyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWByGP4vQtFmERj16ttS52ifbvRzdiDUz8uyB2WxwXVSbU:  * [/ip4/125.64.78.27/tcp/5003] dial tcp4 0.0.0.0:43351->125.64.78.27:5003: i/o timeout  * [/ip4/192.168.109.5/tcp/5003] dial tcp4 0.0.0.0:43351->192.168.109.5:5003: i/o timeout
  f043929: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRA6mCa3GAoAMnztMPrBHQSMgLd2pcq7XdCFXWgVyAE7N:  * [/ip4/120.232.96.38/tcp/24001] dial tcp4 0.0.0.0:43351->120.232.96.38:24001: i/o timeout
  f044315: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f045505: 'fail, China, Ordos', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGfhqYGvSHHhyQAdPgfHKfVYKHUt2cWycTeEMt1GEq1os:  * [/ip4/1.183.72.226/tcp/12700] dial tcp4 0.0.0.0:43351->1.183.72.226:12700: i/o timeout
  f045743: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f045756: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f046248: 'fail, China, Dongguan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f047666: 'fail, China, Suihua', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJTcEVBF8u3aw7U7uHvwnEQsF3BY9fpEaPrYCYKPrsVbp:  * [/ip4/112.101.133.114/tcp/5678] dial tcp4 0.0.0.0:43351->112.101.133.114:5678: i/o timeout
  f048135: 'fail, China, Chongqing, password interstellar', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPqUnapwijnWynzQcgNrsNff8WoxsshFttPce4bvyt68V:  * [/ip4/113.204.193.50/tcp/27125] dial tcp4 113.204.193.50:27125: connect: connection refused
  f048975: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f048986: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f049911: 'fail, China, Yunfu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f053141: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f053173: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f053446: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054120: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054267: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054412: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054414: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f054415: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f054418: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f054420: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f054422: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054464: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCdBMkc7P346VhjbYz823sUEGeQsqhCs6e1zTHC6M9WXZ:  * [/ip4/0.0.0.0/tcp/5472] dial tcp4 0.0.0.0:5472: connect: connection refused
  f054526: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f054666: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGCMWriKdL1S7spEtCAthnCcGvBEM6zLWTFpGxgNdyERf:  * [/ip4/36.158.255.7/tcp/1024] dial tcp4 0.0.0.0:43351->36.158.255.7:1024: i/o timeout
  f055102: 'fail, Vietman, Ho Chi Minh City + China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEzGYZMVXyirJAqybkGPdZFNYBYjtMWyJbWjw5enUo2fN:  * [/ip4/119.28.141.16/tcp/2820] dial tcp4 0.0.0.0:43351->119.28.141.16:2820: i/o timeout  * [/ip4/193.112.116.169/tcp/2820] dial tcp4 0.0.0.0:43351->193.112.116.169:2820: i/o timeout
  f055132: 'fail, Vietman, Ho Chi Minh City + China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLFUPW2eP4bJhTzDwd5mpepUWUX6Y5QH9NTjVYLVnYSAo:  * [/ip4/119.28.141.16/tcp/2910] dial tcp4 0.0.0.0:43351->119.28.141.16:2910: i/o timeout  * [/ip4/193.112.116.169/tcp/2910] dial tcp4 0.0.0.0:43351->193.112.116.169:2910: i/o timeout
  f055335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f055446: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f056227: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f056406: 'fail, China, Taizhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFjfWgPNNiuxHwratpW5WU8mkF9zb3Q4co4TXB7mRuwdN:  * [/ip4/221.130.79.154/tcp/1347] dial tcp4 0.0.0.0:43351->221.130.79.154:1347: i/o timeout
  f057070: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWKBNGqopBvTEmD15SwX6JapLJ34cv9cCEoWPtUsxQpu4Z:  * [/ip4/117.71.104.68/tcp/10240] dial tcp4 0.0.0.0:43351->117.71.104.68:10240: i/o timeout
  f057127: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvcvRJQHTrxjwH1NqPJnd5HnMQp1mWWzp9LHwBULp7pb:  * [/ip4/58.211.213.210/tcp/20108] dial tcp4 58.211.213.210:20108: connect: connection refused
  f057618: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f057683: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f058349: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f058374: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f059788: 'fail, China, Zhanjiang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEhZ3xDvecQ7K14ByYanCewzQqufzX6P2xFaMQu64x3C8:  * [/ip4/183.2.149.76/tcp/33669] dial tcp4 0.0.0.0:43351->183.2.149.76:33669: i/o timeout
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
  f061959: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA5phDUUZUiXuW5YVF7vVLuYSTsx5Shdp4sH5Ftm2pZQu:  * [/ip4/172.18.113.213/tcp/10241] dial tcp4 0.0.0.0:43351->172.18.113.213:10241: i/o timeout
  f062245: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062473: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062475: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062619: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f062770: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEL13gqLAo2hDiax2PeN2pT3aXVMNpzh3ToxdVFvpVMeV:  * [/ip4/220.176.125.166/tcp/23450] dial tcp4 0.0.0.0:43351->220.176.125.166:23450: i/o timeout
  f062811: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9vBPr3FEUtNTKdzMZTB3aYsjK2o9bpqAaFfVQDViz8ii:  * [/ip4/220.176.125.167/tcp/23450] dial tcp4 0.0.0.0:43351->220.176.125.167:23450: i/o timeout
  f062931: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBcj62i1JiSpJQG3rq8vMs5HrRfKgNP3Xh1hp893k5qYt:  * [/ip4/95.180.132.5/tcp/22124] dial tcp4 0.0.0.0:43351->95.180.132.5:22124: i/o timeout
  f062982: 'fail, China, Fuzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFikUmntbNAjbEbWk7jXHSaA3aQZ6HBG8imPZzQkFzYZk:  * [/ip4/220.176.125.165/tcp/23450] dial tcp4 0.0.0.0:43351->220.176.125.165:23450: i/o timeout
  f063996: 'fail, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f064855: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f064908: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065113: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065141: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065266: 'fail, China, Hefei', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065391: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f065578: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
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
  f068096: 'fail, China, Sichuan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLMSQyXno4UrzArsMy22YhHRAvmzhhZKGbgAUULZCx3tB:  * [/ip4/222.213.23.200/tcp/38999] dial tcp4 0.0.0.0:43351->222.213.23.200:38999: i/o timeout
  f068556: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f068560: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNABE3yaZenjaX91wM18UeiwjLMy96jFRs9tP7cYHTFy4:  * [/ip4/172.16.100.111/tcp/37929] dial tcp4 0.0.0.0:43351->172.16.100.111:37929: i/o timeout
  f068809: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f069391: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRCdFYT9C9jwC6DHGha6wEGMhddnTaVzhNbFPK8oBNGDG:  * [/ip4/192.168.1.10/tcp/32759] dial tcp4 0.0.0.0:43351->192.168.1.10:32759: i/o timeout
  f069448: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f069915: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070044: 'fail, China', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQU9u9dyQq369sqKHyscGqEbG3TKixJTmgSq2Ri4a88nT:  * [/ip4/47.57.185.52/tcp/12600] dial tcp4 0.0.0.0:43351->47.57.185.52:12600: i/o timeout
  f070045: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070730: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWB6g9Dnvb8tFM7uEj73Uj4eMqKDxGXazt68uxhMPnwuWd:  * [/ip4/218.6.162.8/tcp/4007] dial tcp4 218.6.162.8:4007: connect: connection refused  * [/ip4/192.168.109.1/tcp/4007] dial tcp4 0.0.0.0:43351->192.168.109.1:4007: i/o timeout
  f070802: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f070803: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f071287: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f071664: 'fail, China, Shangdong', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQe8HRVWhaTBPvhXnSkz7C58jx5ehof8moeL2hFQ4x2KD:  * [/ip4/10.133.8.210/tcp/32759] dial tcp4 0.0.0.0:43351->10.133.8.210:32759: i/o timeout
  f073196: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073448: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073525: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073844: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073888: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f073904: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f077761: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f078522: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f078621: 'fail, Korea, Uiwang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHo2ffY2a61PQtWTrb1U9Ku8KDwncRk3e1uCVpA3qNndT:  * [/ip4/211.170.59.241/tcp/24001] dial tcp4 0.0.0.0:43351->211.170.59.241:24001: i/o timeout
  f078899: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079007: 'fail, China, Jinan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooW9rii8KJUHwHyNVg1xEM16u7V7rhbgdruT2AFYsjFgb4n:  * [/ip4/112.232.106.138/tcp/3389] dial tcp4 0.0.0.0:43351->112.232.106.138:3389: i/o timeout
  f079092: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079285: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLV22X7z7KdMfiX31Xie9xHsi6UB8wAZ2gLf2JyQ4PuCa:  * [/ip4/172.22.20.109/tcp/10241] dial tcp4 0.0.0.0:43351->172.22.20.109:10241: i/o timeout
  f079425: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079719: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f079815: 'fail, China, Hangzhou', // exhausted 15 attempts but failed to open stream, err: stream reset
  f080444: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080468: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080605: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080608: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080628: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f080868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081078: 'fail, Korea, Busan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMW8ZvKgprKTTmt8cuoC5YYZeJtCn6iBuHWLg6J8rGUts:  * [/ip4/220.119.144.84/tcp/23450] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWMW8ZvKgprKTTmt8cuoC5YYZeJtCn6iBuHWLg6J8rGUts, but remote key matches 12D3KooWLe7nwrhYUwgTjy7B92xgeuVZFVzgXHuM4wGzmcYg6asG
  f081969: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081977: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081988: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f081989: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082000: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082001: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082356: 'fail, China, Jiaxing', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082617: 'fail, China, Fujian', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQoXM8qWNsKEDyb67AmKZCnASvQspN6BLsTuRbBzY999n:  * [/ip4/45.119.63.131/tcp/51105] dial tcp4 0.0.0.0:43351->45.119.63.131:51105: i/o timeout
  f082730: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f082958: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDravhMyWjyuK4TjaVaUvubwhpameXwWCuoixczAwFhsV:  * [/ip4/0.0.0.0/tcp/42545] dial tcp4 0.0.0.0:42545: connect: connection refused  * [/ip4/0.0.0.0/tcp/42547] dial tcp4 0.0.0.0:42547: connect: connection refused
  f083419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f083474: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f083903: "fail, China, Xi'an", // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f083983: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f084135: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f084155: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f084419: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f084907: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f085435: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f085486: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
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
  f087868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087871: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWHFtaQ9Gt8JAcZZ2krjMf2KVdvqcdLiAQtmdRmJms4nij:  * [/ip4/127.0.0.1/tcp/32769] dial tcp4 127.0.0.1:32769: connect: connection refused  * [/ip6/::1/tcp/45581] dial tcp6 [::1]:45581: connect: connection refused  * [/ip4/113.200.194.201/tcp/2138] dial tcp4 113.200.194.201:2138: connect: connection refused  * [/ip4/113.200.194.201/tcp/2147] dial tcp4 113.200.194.201:2147: connect: connection refused  * [/ip4/192.168.2.9/tcp/32769] dial tcp4 0.0.0.0:43351->192.168.2.9:32769: i/o timeout
  f087879: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087888: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087890: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDFUNfn98DPAQMLz5igrTQ3HMYHjyB9zcWcE22UsKPg3m:  * [/ip6/::1/tcp/44731] dial tcp6 [::1]:44731: connect: connection refused  * [/ip4/127.0.0.1/tcp/35147] dial tcp4 127.0.0.1:35147: connect: connection refused  * [/ip4/113.200.194.201/tcp/2265] dial tcp4 113.200.194.201:2265: connect: connection refused  * [/ip4/113.200.194.201/tcp/2249] dial tcp4 113.200.194.201:2249: connect: connection refused  * [/ip4/192.168.2.6/tcp/35147] dial tcp4 0.0.0.0:43351->192.168.2.6:35147: i/o timeout
  f087899: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f087965: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGbhbr32oPyCfLTgv1GoQmwx1V7u5AdquFNPjjm85iHPe:  * [/ip4/58.211.213.210/tcp/2251] dial tcp4 58.211.213.210:2251: connect: connection refused
  f087999: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088002: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088125: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQsq4hmpqQAfNPxLMJQfmiUA2Q1d2yqpfzVZu88GauXzT:  * [/ip4/172.22.22.101/tcp/10241] dial tcp4 0.0.0.0:43351->172.22.22.101:10241: i/o timeout
  f088171: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088290: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f088400: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQksh2T1XcnLj2Fjsrp8DafeLXA5DYTE79EdZunSSdWcb:  * [/ip4/172.22.22.102/tcp/10241] dial tcp4 0.0.0.0:43351->172.22.22.102:10241: i/o timeout
  f089167: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089168: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089173: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWGBUUwC19e5cg914WheUfZmWAjcLAR8yW56vU4Mg5LgFp:  * [/ip4/172.19.108.155/tcp/10241] dial tcp4 0.0.0.0:43351->172.19.108.155:10241: i/o timeout
  f089200: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089228: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRaFywA6bQDMz7x1o5LpkVmjrEBpM8BWGHmrLF1Kvdfbm:  * [/ip4/8.209.65.6/tcp/30126] dial tcp4 0.0.0.0:43351->8.209.65.6:30126: i/o timeout
  f089358: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLHVswzdG7ikc8WFqn6L2wVAfJQWFqKssWk3BGAHEWgbT:  * [/ip4/172.22.7.106/tcp/10241] dial tcp4 0.0.0.0:43351->172.22.7.106:10241: i/o timeout
  f089551: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJCsDBR8rrN7Mdrpxrxpo58c2ymFGMCgWpyeM9suWpj8R:  * [/ip4/121.40.135.72/tcp/26892] dial tcp4 0.0.0.0:43351->121.40.135.72:26892: i/o timeout
  f089767: 'fail, USA, Bowie', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJfJoyXzXHrB2XFZFgxzPrxddyVF3TYHwS9HYcoecruoB:  * [/ip4/76.223.76.26/tcp/33905] dial tcp4 0.0.0.0:43351->76.223.76.26:33905: i/o timeout  * [/ip4/129.168.0.1/tcp/912] dial tcp4 0.0.0.0:43351->129.168.0.1:912: i/o timeout
  f089819: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089910: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f089920: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090481: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090484: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090492: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090889: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f090893: 'fail, USA', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMh6qvtA63P9fB2bQKuR68vDHm8TD3hj85zqKBNKUKmjN:  * [/ip4/76.223.53.59/tcp/33912] dial tcp4 0.0.0.0:43351->76.223.53.59:33912: i/o timeout  * [/ip4/6.143.143.121/tcp/912] dial tcp4 0.0.0.0:43351->6.143.143.121:912: i/o timeout
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
  f095334: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f095970: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f095997: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f095998: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096064: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096072: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096077: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096087: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096133: 'fail, China, Changsha + Dazhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMTTEH1tp88nhvYAvRipkv2Do5uN3Zwf6sYZ5PBEivKQu:  * [/ip4/175.6.68.154/tcp/14913] dial tcp4 0.0.0.0:43351->175.6.68.154:14913: i/o timeout  * [/ip4/175.6.66.78/tcp/14913] dial tcp4 0.0.0.0:43351->175.6.66.78:14913: i/o timeout
  f096172: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096173: 'fail, Korea, Gangnam-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG4jchbdLENPWWnb2rLPt3HosTodvebJ3eni4qAL7bqvb:  * [/ip4/61.78.81.239/tcp/55555] dial tcp4 0.0.0.0:43351->61.78.81.239:55555: i/o timeout  * [/ip4/61.78.81.239/tcp/8800] dial tcp4 0.0.0.0:43351->61.78.81.239:8800: i/o timeout  * [/ip4/61.78.81.239/tcp/12345] dial tcp4 0.0.0.0:43351->61.78.81.239:12345: i/o timeout  * [/ip4/61.78.81.239/tcp/23456] dial tcp4 0.0.0.0:43351->61.78.81.239:23456: i/o timeout  * [/ip4/61.78.81.239/tcp/11111] dial tcp4 0.0.0.0:43351->61.78.81.239:11111: i/o timeout  * [/ip4/61.78.81.239/tcp/22222] dial tcp4 0.0.0.0:43351->61.78.81.239:22222: i/o timeout  * [/ip4/61.78.81.239/tcp/33333] dial tcp4 0.0.0.0:43351->61.78.81.239:33333: i/o timeout  * [/ip4/61.78.81.239/tcp/44444] dial tcp4 0.0.0.0:43351->61.78.81.239:44444: i/o timeout
  f096824: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f096920: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097126: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097182: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDZcnHgYqSaxf5g6EeZ1wCVLGCfHtM7ja3iqH4E1NQKja:  * [/ip4/182.131.4.195/tcp/32759] dial tcp4 182.131.4.195:32759: connect: connection refused
  f097219: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWSXN3igGAjvLVVDF4V2RtyW92FWwiK9mXUVkLN8qEjWhF:  * [/ip4/127.0.0.1/tcp/12345] dial tcp4 127.0.0.1:12345: connect: connection refused
  f097432: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097569: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097658: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097687: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ1AdNGYDDG3J1D4ow3XnPT9vqZ4WdoZXDdEM1uWr4Zvb:  * [/ip4/61.147.81.133/tcp/16017] dial tcp4 61.147.81.133:16017: connect: connection refused
  f097777: 'fail, Ukraine, Ivano-Frankivsk', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPQUZL85hYxdkKzKZecKn7YVQ5VYyYbvm1Dvc7By1K92C:  * [/ip4/176.117.190.49/tcp/29992] dial tcp4 0.0.0.0:43351->176.117.190.49:29992: i/o timeout
  f097840: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f097981: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f098664: 'fail, China, Jiangsu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f098743: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099082: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099132: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099247: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099369: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099705: 'fail, China, Zibo', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQjQn7oVZwMLeHFyFEvEAfuPjktyZgo6Haunp9Xi34MCf:  * [/ip4/218.201.173.80/tcp/24001] dial tcp4 0.0.0.0:43351->218.201.173.80:24001: i/o timeout
  f099884: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f099949: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNbRUwiuhnaRMRqzRXG4zAvtXvaTkbuQW2rQMZY34YEpC:  * [/ip4/182.131.4.195/tcp/32760] dial tcp4 182.131.4.195:32760: connect: connection refused
  f0100033: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0100034: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0100786: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101016: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101017: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101018: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEnpnV8MaTxEYT7e1xCKvB8bwRSANko9wK9jDs6b5N8f3:  * [/ip4/42.236.7.235/tcp/21002] dial tcp4 42.236.7.235:21002: connect: connection refused
  f0101019: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101133: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101403: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLHg2DuAH3MCXcdjhUHJGQkkj18rMizTrUGqrK8jE2JsY:  * [/ip4/182.131.4.195/tcp/32761] dial tcp4 182.131.4.195:32761: connect: connection refused
  f0101570: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0101611: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0102187: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0102313: 'fail, Korea, Gangseo-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD5gFmSzBSDkMinds75LtFLz3jDnggF48TzoswTLPRYS9:  * [/ip4/220.86.32.74/tcp/38491] dial tcp4 220.86.32.74:38491: connect: connection refused
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
  f0105074: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0105354: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0106438: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0106901: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107002: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107053: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107091: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107308: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWR8tJtHhWPg3Sc1vpiosk3k9MjjhXpLXzxhMDRdXrnVkm:  * [/ip4/124.95.138.6/tcp/23450] dial tcp4 0.0.0.0:43351->124.95.138.6:23450: i/o timeout
  f0107322: 'fail, China, Chengdu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0107536: 'fail, China, Bozhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvJDNfP1GYdLSZmqquRpPhwoAWpnMbZtn8oGzVjQCkyj:  * [/ip4/60.174.118.137/tcp/25469] dial tcp4 0.0.0.0:43351->60.174.118.137:25469: i/o timeout
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
  f0109743: 'fail, China, Yangzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLYvFEdMuA4GQUeN5xounAfSBSKcwh5i976nKJ1gGenRu:  * [/ip4/58.220.66.137/tcp/10000] dial tcp4 0.0.0.0:43351->58.220.66.137:10000: i/o timeout
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
  f0111584: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFYYs51hFrAnZ9qjSBc6NjXtrrwVKKT6oqjgexxDxZXLH:  * [/ip4/192.168.3.14/tcp/32759] dial tcp4 0.0.0.0:43351->192.168.3.14:32759: i/o timeout
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
  f0114153: 'fail, China, Changsha + Dazhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNx9sjDfaykDaZ6GS3FUQ9LNZfE4pViXufaCKeAhSZs2F:  * [/ip4/175.6.68.154/tcp/24913] dial tcp4 0.0.0.0:43351->175.6.68.154:24913: i/o timeout  * [/ip4/175.6.66.78/tcp/24913] dial tcp4 0.0.0.0:43351->175.6.66.78:24913: i/o timeout
  f0114333: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114338: 'fail, China, Maoming', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWA8Q2z1wpYNC2dnDKSV6uji9ivBCVgGGt6JFgLE9cp7iz:  * [/ip4/61.143.232.26/tcp/12888] dial tcp4 0.0.0.0:43351->61.143.232.26:12888: i/o timeout
  f0114350: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114867: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0114885: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0115001: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0115117: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0115238: 'fail, China, Shenyang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0115990: 'fail, Korea, Gangnam-gu', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCH9QfkYAUcen5u2UsQrsBgRr6SXF1DzoxmejKC3MpMur:  * [/ip4/61.74.222.134/tcp/36849] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCH9QfkYAUcen5u2UsQrsBgRr6SXF1DzoxmejKC3MpMur, but remote key matches 12D3KooWFbbCe63pSrR7zwsx431Y51pjAc4oKTNdjCmAwwHKGjBY
  f0116211: 'fail, China, Weifang', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWF79gTgqr7VyLQu74NgBvCTuvDfp2CxGK8hxn2EYKzH6L:  * [/ip4/219.83.163.148/tcp/50666] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWF79gTgqr7VyLQu74NgBvCTuvDfp2CxGK8hxn2EYKzH6L, but remote key matches 12D3KooWRpggHrYWrczv3N2h5AAtdVFiX5zsW1duYpnfc1C8hjLa
  f0116287: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFfHAMm4kNbBTJGDqrakZgV8Kw9Y234RddjNNTNd3GFn5:  * [/ip4/172.18.5.97/tcp/2347] dial tcp4 0.0.0.0:43351->172.18.5.97:2347: i/o timeout
  f0116766: 'fail, USA, Westford', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWBfmSEjenJCp9XPzHbTqmUB8xshZP5FSoJXvzTUYn6m6f:  * [/ip4/173.76.173.245/tcp/23456] dial tcp4 0.0.0.0:43351->173.76.173.245:23456: i/o timeout
  f0117146: 'fail, China, Beijing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQ1wxB3gfZJGxydfCyCJzmeP2YJFTysjLfCEHv9PJ6NW9:  * [/ip4/106.12.253.240/tcp/24001] dial tcp4 0.0.0.0:43351->106.12.253.240:24001: i/o timeout
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
  f0119633: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWC9KSsd16NN33UvF4FTfZHkwwVXnEEvT921B2ZjnfF6JZ:  * [/ip4/183.62.138.7/tcp/12358] dial tcp4 0.0.0.0:43351->183.62.138.7:12358: i/o timeout
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
  f0122410: 'fail, China, Shanghai', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMEtbrnU16XPWxnjiTc3EvHL3yxW5jSC96cbnbWc6LMe2:  * [/ip4/172.18.5.108/tcp/1347] dial tcp4 0.0.0.0:43351->172.18.5.108:1347: i/o timeout
  f0122496: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122533: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0122940: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123245: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123261: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123275: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123346: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0123535: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124126: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124158: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124904: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0124944: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0125488: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126097: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126478: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126661: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126698: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126702: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0126898: 'fail, China, Harbin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127378: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127382: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127569: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127595: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127612: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127627: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127629: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127640: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127721: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0127735: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128011: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128381: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128559: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128761: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128788: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128815: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0128931: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0129072: 'fail, China, Karamay', // exhausted 15 attempts but failed to open stream, err: routing: not found
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
  f0130868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0130884: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0131509: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0131654: 'fail, Korea, Seoul', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0131767: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0131822: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0132178: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
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
  f0134006: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRLr5Efqy61nSerZXi5aorAL28qLDVphNovoYSgvpgm7t:  * [/ip4/10.140.8.12/tcp/32759] dial tcp4 0.0.0.0:43351->10.140.8.12:32759: i/o timeout
  f0134285: "fail, China, Ya'an + USA", // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134552: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0134867: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135008: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135066: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135150: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135414: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135467: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135473: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135474: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135475: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135551: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135758: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWDdsHRTxE7ZHiCAvMSSqpBm6DdiXhhuicAMG4oUqdCoAR:  * [/ip4/127.0.0.1/tcp/1346] dial tcp4 127.0.0.1:1346: connect: connection refused  * [/ip4/183.136.236.94/tcp/1346] dial tcp4 0.0.0.0:43351->183.136.236.94:1346: i/o timeout
  f0135779: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135859: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135885: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0135934: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136239: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136399: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136642: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136808: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0136868: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0137019: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
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
  f0142721: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPRjsZzeZDCN28bF4sFjH9cWrtfLpGjXgeLr2bfEMfSuk:  * [/ip4/10.4.104.74/tcp/12288] dial tcp4 0.0.0.0:43351->10.4.104.74:12288: i/o timeout
  f0142723: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAqi4yZBZftta7YUBHtunGYowv7AVKXCoaRA4CZEtadnZ:  * [/ip4/10.4.104.75/tcp/12288] dial tcp4 0.0.0.0:43351->10.4.104.75:12288: i/o timeout
  f0143032: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143110: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143160: 'fail, China, Ningbo', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143162: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143332: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143361: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143500: 'fail, China, Zhejiang', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143511: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0143858: 'fail, USA, Calistoga', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJvQftXwBGoquXhiJxviZ2YJnxnSYCaD8WTe8uVWvXhf2:  * [/ip4/72.52.116.228/tcp/12350] dial tcp4 0.0.0.0:43351->72.52.116.228:12350: i/o timeout
  f0143907: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144194: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144313: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRGhsq49BP7fSr84fuJZpUWe3TxEs1f2HNbeuifyWVRbH:  * [/ip4/10.5.101.90/tcp/12288] dial tcp4 0.0.0.0:43351->10.5.101.90:12288: i/o timeout  * [/ip4/106.74.20.7/tcp/12288] dial tcp4 0.0.0.0:43351->106.74.20.7:12288: i/o timeout
  f0144314: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144528: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144530: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144615: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144618: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0144724: 'fail, USA, Los Angeles', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWQG8mBpQNBfK8sLeJ71Di4n7hwKfW6UHxXXEW3sZZPgiC:  * [/ip4/209.170.228.251/tcp/24001] dial tcp4 0.0.0.0:43351->209.170.228.251:24001: i/o timeout
  f0145249: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145503: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145687: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0145986: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0146220: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0146224: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0146278: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0146393: 'fail, China, Foshan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWPBraDH4aCJTMCjaZ1JBe7nDCJUioSHtkJZ6VWseSumiQ:  * [/ip4/183.2.233.3/tcp/24501] dial tcp4 0.0.0.0:43351->183.2.233.3:24501: i/o timeout
  f0146428: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJqyLnffd3YFB2NrsTw2Y6Rzj869YfmN18GPQbEtBYeTh:  * [/ip4/172.16.2.105/tcp/6789] dial tcp4 0.0.0.0:43351->172.16.2.105:6789: i/o timeout
  f0146956: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147214: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147586: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147657: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0147801: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148143: 'fail, China, Tianjin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148269: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148452: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0148627: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0149937: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150666: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150744: 'fail, Korea, Ulsan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFQaZfLj9xLZfKqo5h8PDT4qq5aeLXEzrNjqqFQLYfYuA:  * [/ip4/61.77.31.17/tcp/25246] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFQaZfLj9xLZfKqo5h8PDT4qq5aeLXEzrNjqqFQLYfYuA, but remote key matches 12D3KooWChiUCJkNLKiz4ybu3Bp3tHvzUmC7DHLntYQtAcjKTYyB
  f0150748: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150782: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0150816: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150860: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0150918: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151366: 'fail, China, Fuzhou + Xiamen', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151436: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151468: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151487: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151498: 'fail, China, Jinan', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151499: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0151536: 'fail, China, Xiamen', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0151849: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152351: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0152563: 'fail, China, Chongqing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAwo844dWRZkHcMjdGQX6TLCHqqjWaYNWRpqjNhtbMnXT:  * [/ip4/192.168.1.100/tcp/24001] dial tcp4 0.0.0.0:43351->192.168.1.100:24001: i/o timeout  * [/ip4/58.43.1.82/tcp/24001] dial tcp4 0.0.0.0:43351->58.43.1.82:24001: i/o timeout
  f0152799: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153078: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153188: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153278: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMFj42RqecNujzB5mk7qrDPPpVGst2yAA4k9kxdkCUeaV:  * [/ip6/::1/tcp/36069] dial tcp6 [::1]:36069: connect: connection refused  * [/ip4/127.0.0.1/tcp/41945] dial tcp4 127.0.0.1:41945: connect: connection refused  * [/ip4/113.200.194.201/tcp/2306] dial tcp4 113.200.194.201:2306: connect: connection refused  * [/ip4/113.200.194.201/tcp/2165] dial tcp4 113.200.194.201:2165: connect: connection refused  * [/ip4/192.168.2.8/tcp/41945] dial tcp4 0.0.0.0:43351->192.168.2.8:41945: i/o timeout
  f0153804: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRYzvW7FieB4gDbRJMU9FRbFd3R6An7FtVBhcaK59mT2g:  * [/ip4/218.13.93.62/tcp/5502] dial tcp4 0.0.0.0:43351->218.13.93.62:5502: i/o timeout
  f0153930: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153932: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0153986: 'fail, China, Changsha', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWG4ngcStum65vCcnjVLEzHziUTdtNcAR4EvXu8QhBGR1H:  * [/ip4/127.0.0.1/tcp/7503] dial tcp4 127.0.0.1:7503: connect: connection refused
  f0154152: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154238: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154335: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154597: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0154865: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155050: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0155983: 'fail, Japan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWCiSxAQf3Hp6t1sFJdRotppHwUUBa6jQaA1bcJd4YEbJ1:  * [/ip4/202.149.23.10/tcp/5472] dial tcp4 0.0.0.0:43351->202.149.23.10:5472: i/o timeout
  f0157917: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0157991: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158068: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158156: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158276: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0158728: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0159449: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0160135: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0160137: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0163275: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0166425: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0168058: 'fail, China, Suzhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWMM38722xUgBthsFgQBF8s2HuokVbV5R1jWgQbGrDjmTr:  * [/ip4/58.211.213.210/tcp/22122] dial tcp4 58.211.213.210:22122: connect: connection refused
  f0199223: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWFnLArFiK8JWmiChXEutsTd1tGw8t5ZNciuST8FNDQ85j:  * [/ip4/110.188.25.20/tcp/24001] dial tcp4 0.0.0.0:43351->110.188.25.20:24001: i/o timeout
  f0226303: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0227660: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: protocol not supported
  f0228232: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEZAh3WfxSFS6trQZYHHU8N8HdJPZhvMYBo281yhTDwQA:  * [/ip4/183.204.60.235/tcp/16017] dial tcp4 0.0.0.0:43351->183.204.60.235:16017: i/o timeout
  f0234567: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0242156: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0396846: 'fail, China, Zhongshan', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWJLaZCfWGiuPKvkjmpgqegkHreQfLGeBjHfcC3ScYiZWA:  * [/ip4/116.6.131.194/tcp/24001] dial tcp4 0.0.0.0:43351->116.6.131.194:24001: i/o timeout
  f0397332: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0419804: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0421392: 'fail, China, Foshan', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0440919: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0441225: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0492030: 'fail, USA, Holmdel', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWLHF3hbaBVf6av1gu4UM47GRrsf1PH1g6ynH2rts71BCp:  * [/ip4/98.109.104.16/tcp/48001] dial tcp4 98.109.104.16:48001: connect: connection refused
  f0519331: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0521831: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0685797: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNgjEWefHYd3BhA4AmJ4ET1g6uAUBkCRYkSebZCn33gDZ:  * [/ip4/220.176.125.163/tcp/23450] dial tcp4 0.0.0.0:43351->220.176.125.163:23450: i/o timeout
  f0694172: 'fail, China, Luzhou', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f0845552: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWF8C8n4KeK7qfx1hjjhZMqEQPrjvRTBbBjJPuyPRvrhnG:  * [/ip4/10.21.10.63/tcp/36863] dial tcp4 0.0.0.0:43351->10.21.10.63:36863: i/o timeout
  f0845976: 'fail, China, Jiaxing', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWNe7iCaSsvRxqnLVAjqWNpw6BbALY1zj6FCBubTMPvYEM:  * [/ip4/61.164.212.154/tcp/29013] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNe7iCaSsvRxqnLVAjqWNpw6BbALY1zj6FCBubTMPvYEM, but remote key matches 12D3KooWFEZiYoJxqyuANeLtn7tDytRkYzcc9HS6gbaymHgMijWc
  f0866966: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01040707: 'fail, China, Tianjin', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWD6q85b77FELfxCckkCcNkPK5sGAZu17wN5LEJg2w1zCP:  * [/ip4/36.106.26.23/tcp/24001] dial tcp4 0.0.0.0:43351->36.106.26.23:24001: i/o timeout
  f01057303: 'fail, China, Huizhou', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWRauh5L4cp8ZgECxihY7LHXqZRaagmgYrz88KwR3qWg9u:  * [/ip6/::1/tcp/23450] dial tcp6 [::1]:23450: connect: connection refused  * [/ip4/127.0.0.1/tcp/23450] dial tcp4 127.0.0.1:23450: connect: connection refused  * [/ip4/121.11.216.28/tcp/23450] dial tcp4 0.0.0.0:43351->121.11.216.28:23450: i/o timeout
  f01065930: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01070319: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01094602: 'fail, China, Harbin', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01095915: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01099312: 'fail, China, Shenzhen', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01103160: 'fail, NR', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWAZyf6RWfHJ1A7rCxiCvoMqxWWZN5MYZaUD7qRofx8KVx:  * [/ip4/220.117.173.3/tcp/24001] dial tcp4 220.117.173.3:24001: connect: connection refused
  f01106730: 'fail, China, Yunfu', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01111131: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01112287: 'fail, Ukraine, Kyiv', // exhausted 15 attempts but failed to open stream, err: failed to dial 12D3KooWEMSiVo8dk4B3AGhiw8JUrRg2boVfxk9XXHLMfRUjy1Gk:  * [/ip4/31.134.121.232/tcp/24001] dial tcp4 0.0.0.0:43351->31.134.121.232:24001: i/o timeout
  f01115949: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01118499: 'fail, auto', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01122448: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01123232: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01124710: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01125371: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01125521: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01125913: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01126419: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01126799: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01127273: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01127909: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128462: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01128800: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01129570: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01129866: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found
  f01130729: 'fail, autolisted', // exhausted 15 attempts but failed to open stream, err: routing: not found

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
  f0826452: 'delist, NR', // carry-over
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
  f01051301: 'delist, NR', // carry-over
  f01060045: 'delist, China, Foshan', // carry-over
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
  f01109622: 'delist, Bulgaria, Sofia' // carry-over
}

export default annotations
