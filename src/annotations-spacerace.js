const annotations = {

  // Active - tue
  
  // Active/sealing - tue
 
  // Active - mon
  
  t02304: 'active, USA, Mountain View, 6h',
  t01101: 'active, China, Shanghai, 5h',
  t01102: 'active, China, Shandong, 5h',
  t01274: 'active, China, Guangdong, 11h',
  t02381: 'active, China, Dongguan, 12h',
  t02419: 'active, China, Shanghai, 10h',
  t02420: 'active, China, Wuhan, 7h',
  t03143: 'active, China, Shijiazhuang + Hong Kong, 12h',
  t03351: 'active, China, Chengdu, 10h',
  t07961: 'active, China, Changzhou, 9h',

  // Sealing - mon

  t01152: 'sealing, China, Beijing, mon',
  t01156: 'sealing, China, Hangzhou, mon',
  t01232: 'sealing, China, Hangzhou, mon',
  t01288: 'sealing, China, Yibin, mon',
  t01799: 'sealing, China, Jinan, mon',
  t02301: 'sealing, USA, mon',
  t02382: 'sealing, China, Zhongshan, mon',
  t02385: 'sealing, USA, East Islip, mon',
  t02404: 'sealing, Korea, Seoul, mon',
  t02424: 'sealing, Korea, Wanju, mon',
  t02540: 'sealing, USA, Rochester, mon',
  t02575: 'sealing, USA, Davis, mon',
  t02608: 'sealing, USA, San Jose, mon',
  t02620: 'sealing, Poland, Krakow, @magik6k, mon',
  t02658: 'sealing, China, Ningbo, mon',
  t02665: 'sealing, Netherlands, Amsterdam, mon',
  t03140: 'sealing, China, QingDao, mon',
  t03194: 'sealing, China, Shenzhen, mon',
  t03264: 'sealing, Korea, Bucheon-si, mon',
  t03314: 'sealing, China, Zhangjiakou, mon',
  t03339: 'sealing, China, Luzhou, mon',
  t03340: "sealing, China, Xi, mon",
  t03344: 'sealing, China, Guangzhou, mon',
  t03345: 'sealing, China, Fuzhou, mon',
  t03427: 'sealing, Russia, mon',
  t03512: 'sealing, New Zealand, Auckland, mon',
  t06262: 'sealing, China, Guangzhou, mon',
  t06775: 'sealing, China, Shenzhen, mon',
  t07451: 'sealing, China, Hangzhou, mon',
  t07709: 'sealing, Korea, Dongjak-gu, mon',
  t07710: 'sealing, Hong Kong, mon', 
  t07717: 'sealing, China, Shenyang, mon',
  t07806: 'sealing, China, Wuhan, mon',
  t07848: 'sealing, China, Wuhan, mon',
  t07857: 'sealing, China, Zhengzhou, mon',
  t07924: 'sealing, USA, mon',
  t07947: 'sealing, China, Zhengzhou, mon',
  t07956: 'sealing, Russia, mon',
  t07964: 'sealing, USA, Ashburn, mon',


  // Stuck - mon


  // New


  // Asks

  // Error

  t01272: 'error, Singapore, 12h', // reset
  t03225: 'error, China, Guyuan, mon', // protocol not supported

  // Dial backoff

  t01247: 'backoff, Canada, Montreal, mon',
  t02506: 'backoff, USA, Clarksville',
  t02518: 'backoff, China, Shaanxi, mon',
  t03149: 'backoff, USA, Newton, mon',
  t03305: 'backoff, Kenya, Nairobi',
  t03306: 'backoff, Australia',
  t03307: 'backoff, Australia',
  t08097: 'backoff, Korea, Pyeongtaek-si, mon',

  // Rejected

  t01012: 'rejected, China, Hong Kong + Guangzhou',
  t01100: 'rejected, Serbia, Belgrade',
  t01151: 'rejected, USA, Waxhaw',
  t01154: 'rejected, Sweden, Alvsjo',
  t01155: 'rejected, China, Shanghai',
  t01231: 'rejected, Singapore',
  t01235: 'rejected, Singapore',
  t01236: 'rejected, Singapore',
  t01241: 'rejected, USA, Portland',
  t01243: 'rejected, Ukraine, Odessa',
  t01248: 'rejected, Germany, Frankfurst + China, Guangdong',
  t01277: 'rejected, Sweden, Stockholm',
  t01278: 'rejected, USA, Grand Rapids',
  t01279: 'rejected, China, Sichuan',
  t01280: 'rejected, China, Wuxi',
  t01287: 'rejected, China, Jiaxing',
  t01782: 'rejected, China, Hong Kong + Singapore + USA, Portland',
  t01801: 'rejected, Switzerland, Baar',
  t02303: 'rejected, China, Hong Kong + Jiangsu + Netherlands',
  t02398: 'rejected, China, Hong Kong',
  t02403: 'rejected, UK, London',
  t02405: 'rejected, China, Shenzhen',
  t02415: 'rejected, China, Hong Kong',
  t02416: 'rejected, China, Guangdong',
  t02417: 'rejected, China, Liaoning',
  t02423: 'rejected, Ukraine, Kyiv',
  t02501: 'rejected, USA, Portland',
  t02503: 'rejected, China, Wuhan',
  t02514: 'rejected, USA, Portland',
  t02515: 'rejected, China, Hangzhou',
  t02516: 'rejected, China, Hong Kong',
  t02520: 'rejected, China, Hong Kong + Dongguan',
  t02528: 'rejected, China, Hong Kong + Inner Mongolia',
  t02534: 'rejected, China, Beijing',
  t02574: 'rejected, Japan, Minamata, mon',
  t02606: 'rejected, China, Shanghai',
  t02607: 'rejected, China, Beijing',
  t02614: 'rejected, Singapore, mon',
  t02619: 'rejected, China, Beijing',
  t02622: 'rejected, USA, Portland',
  t02623: 'rejected, USA, Portland',
  t02626: 'rejected, China, Guangzhou + Hong Kong',
  t02755: 'rejected, China, Shijiazhuang',
  t03176: 'rejected, USA, San Mateo',
  t03286: 'rejected, China, Mianyang',
  t03325: 'rejected, Germany, Frankfurt',
  t03347: 'rejected, China, Shenzhen',
  t03361: 'rejected, China, Guangzhou, mon',
  t03428: 'rejected, China, Beijing + Jiaxing + Germany, Frankfurt, mon',
  t03487: 'rejected, China, Yibin',
  t04921: 'rejected, China, Shanghai, mon',
  t07833: 'rejected, China, Changzhou',
  t07851: 'rejected, Netherlands, Purmerend',
  t07866: 'rejected, China, Foshan',
  t07919: 'rejected, China, Beijing, Shanghai, Hunan',
  t08095: 'rejected, Canada, Surrey',
  t08096: 'rejected, China, Wuhan',


  // Dial errors

  t01229: 'dial, China, Hong Kong',
  t02533: 'dial, Spain, Terrassa, mon',
  t02577: 'dial, China, Hong Kong + Russia, Khabarovsk + Japan, Heiwajima',
  t03269: 'dial, Australia',
  t03302: 'dial, China, Chengdu',
  t03327: 'dial, Kenya, Nairobi',
  t03766: 'dial, China, Weifang, mon',
  t07819: 'dial, China, Wuxi',
  t08032: 'dial, China, Weifang',
  t08101: 'dial, China, Wuxi',

  // XNR

  t02436: 'xnr, Netherlands',
  t07796: 'xnr, China, Hunan, mon',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
  t01002: 'NR - bootstrap',
}

export default annotations
