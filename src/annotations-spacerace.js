// Small file test results
//
// Additional testing will be performed with larger files with
// selected miners

const annotations = {

  // Retest

  f01000: 'retest, NR - bootstrap', //  retest
  f01012: 'retest, China, Hong Kong + Guangzhou', //  retest
  f01013: 'retest, NR', //  retest
  f01100: 'retest, Serbia, Belgrade, filmine.io', //  retest
  f01101: 'retest, China, Shanghai', //  retest
  f01156: 'retest, China, Hangzhou', //  retest
  f01229: 'retest, China, Hong Kong', //  retest
  f01231: 'retest, Singapore', //  retest
  f01238: 'retest, Vietnam, Hanoi, FILECOIN-VIETNAM', //  retest
  f01240: 'retest, Netherlands, HidNand', //  retest
  f01248: 'retest, Germany, Frankfurt + China, Guangdong', //  retest
  f01274: 'retest, China, Guangdong', //  retest
  f01277: 'retest, Sweden, Stockholm, tvsthlm', //  retest
  f01278: 'retest, USA, Grand Rapids, MiMiner', //  retest
  f01288: 'retest, China, Yibin, BlackStone', //  retest
  f01782: 'retest, China, Hong Kong + Singapore + USA, Portland, hellofil.com', //  retest
  f01801: 'retest, Switzerland, Baar, Gogoșel, DNS:akasha.network', //  retest
  f02303: 'retest, China, Hong Kong + Jiangsu + Netherlands', //  retest
  f02304: 'retest, USA, Mountain View', //  retest
  f02307: 'retest, China, Taiyuan, filecoin.monster', //  retest
  f02381: 'retest, China, Dongguan, 西野七濑迷叔', //  retest
  f02382: 'retest, China, Zhongshan-cfa', //  retest
  f02383: 'retest, China, Shenzhen', //  retest
  f02398: 'retest, China, Hong Kong', //  retest
  f02400: 'retest, China, Beijing', //  retest
  f02417: 'retest, China, Liaoning', //  retest
  f02418: 'retest, China, Fujian + Netherlands', //  retest
  f02420: 'retest, China, Wuhan', //  retest
  f02424: 'retest, Korea, Wanju', //  retest
  f02436: 'retest, Netherlands', //  retest
  f02505: 'retest, China, Wuhan', //  retest
  f02506: 'retest, USA, Clarksville', //  retest
  f02514: 'retest, USA, Portland, 6block', //  retest
  f02518: 'retest, China, Shaanxi', //  retest
  f02519: 'retest, Brazil, Sao Paulo', //  retest
  f02529: 'retest, China, Chongqing', //  retest
  f02532: 'retest, Singapore', //  retest
  f02534: 'retest, China, Beijing', //  retest
  f02574: 'retest, Japan, Minamata', //  retest
  f02575: 'retest, USA, Davis', //  retest
  f02606: 'retest, China, Shanghai', //  retest
  f02607: 'retest, China, Beijing', //  retest
  f02609: 'retest, USA', //  retest
  f02614: 'retest, Singapore', //  retest
  f02624: 'retest, China, Shanghai, filecoin.cn', //  retest
  f02626: 'retest, China, Guangzhou + Hong Kong', //  retest
  f02657: 'retest, China, Ordos-xfr', //  retest
  f02658: 'retest, China, Ningbo, bluematrix', //  retest
  f02664: 'retest, China, Hangzhou, ciger', //  retest
  f02723: 'retest, China, Hong Kong', //  retest
  f02725: 'retest, China, Hong Kong', //  retest
  f02726: 'retest, USA, Brooklyn', //  retest
  f02731: 'retest, Singapore', //  retest
  f02768: 'retest, China, Hong Kong', //  retest
  f02770: 'retest, China, Hong Kong', //  retest
  f02773: 'retest, China, Chengdu', //  retest
  f02774: 'retest, Australia, Sydney', //  retest
  f03021: 'retest, China, Hong Kong', //  retest
  f03120: 'retest, China, Guangzhou', //  retest
  f03140: 'retest, China, QingDao', //  retest
  f03220: 'retest, China, Ordos', //  retest
  f03222: 'retest, China, Yuncheong, 星云矿池', //  retest
  f03223: 'retest, USA', //  retest
  f03225: 'retest, China, Guyuan', //  retest
  f03245: 'retest, USA, Los Angeles', //  retest
  f03264: 'retest, Korea, Bucheon-si', //  retest
  f03266: 'retest, USA', //  retest
  f03319: 'retest, NR', //  retest
  f03320: 'retest, bcm', //  retest
  f03327: 'retest, Kenya, Nairobi', //  retest
  f03346: 'retest, China, Huzhou, wckj', //  retest
  f03347: 'retest, China, Shenzhen', //  retest
  f03350: 'retest, China, Wuhan', //  retest
  f03351: 'retest, China, Chengdu', //  retest
  f03360: 'retest, China, Shaanxi', //  retest
  f03366: 'retest, China, Wuhan + Wuxi', //  retest
  f03428: 'retest, China, Beijing + Jiaxing + Germany, Frankfurt', //  retest
  f03484: 'retest, Netherlands', //  retest
  f03490: 'retest, China, Dongguan', //  retest
  f03517: 'retest, China, Wuhan + Wuxi', //  retest
  f03548: 'retest, Singapore', //  retest
  f03619: 'retest, China, Xiamen', //  retest
  f03620: 'retest, Germany, Frankfurt', //  retest
  f03622: 'retest, 黑犇科技', //  retest
  f03638: 'retest, USA', //  retest
  f03646: 'retest, China, Beijing, JingTang', //  retest
  f03764: 'retest, China, Beijing, foobar', //  retest
  f03765: 'retest, Colombia, Medellin', //  retest
  f04921: 'retest, China, Shanghai', //  retest
  f05315: 'retest, USA, Portland, 6block', //  retest
  f05316: 'retest, USA, Portland, 6block', //  retest
  f06262: 'retest, China, Guangzhou', //  retest
  f06775: 'retest, China, Shenzhen, IPSB&CAAP', //  retest
  f07451: 'retest, China, Hangzhou', //  retest
  f07710: 'retest, Hong Kong', //  retest
  f07731: 'retest, NR', //  retest
  f07752: 'retest, China, Dongguan', //  retest
  f07756: 'retest, DNS:purumine.com', //  retest
  f07772: 'retest, China, Dongguan', //  retest
  f07774: 'retest, China, Shenzhen', //  retest
  f07775: 'retest, China, Shenzhen', //  retest
  f07827: 'retest, China, Wuhan, 天际合', //  retest
  f07830: 'retest, Singapore', //  retest
  f07843: 'retest, NR', //  retest
  f07848: 'retest, China, Wuhan', //  retest
  f07850: 'retest, USA, Portland, 6block', //  retest
  f07857: 'retest, China, Zhengzhou', //  retest
  f07924: 'retest, USA', //  retest
  f07944: 'retest, China, Hangzhou, SupremeTreasure', //  retest
  f07945: 'retest, China, Dongguan', //  retest
  f07947: 'retest, China, Zhengzhou', //  retest
  f07964: 'retest, USA, Ashburn', //  retest
  f07969: 'retest, China, Hangzhou, FME', //  retest
  f07982: 'retest, China, Shenzhen', //  retest
  f07990: 'retest, China, Hong Kong', //  retest
  f08006: 'retest, China, Shaanxi', //  retest
  f08022: 'retest, China, Yibin', //  retest
  f08032: 'retest, China, Weifang', //  retest
  f08042: 'retest, Brazil, Sao Paulo', //  retest
  f08047: 'retest, China, Hangzhou', //  retest
  f08061: 'retest, China, Foshan', //  retest
  f08063: 'retest, China, Huizhou', //  retest
  f08088: 'retest, China, Dongguan', //  retest
  f08095: 'retest, Canada, Surrey', //  retest
  f08101: 'retest, China, Wuxi', //  retest
  f08135: 'retest, Singapore', //  retest
  f08139: 'retest, China, Shanghai', //  retest
  f08149: 'retest, China, Jiangmen', //  retest
  f08161: 'retest, China, Weifang', //  retest
  f08178: 'retest, China, Jiaxing, CAAP-金华', //  retest
  f08197: 'retest, China, Foshan', //  retest
  f08199: 'retest, USA, Sudbury', //  retest
  f08205: 'retest, Brazil, Sao Paulo', //  retest
  f08223: 'retest, NR', //  retest
  f08235: 'retest, China, Beijing + Jiaxing + Germany, Frankfurt, 星河华讯&中科星际', //  retest
  f08238: 'retest, NR', //  retest
  f08242: 'retest, China, Weifang', //  retest
  f08257: 'retest, China, Ningbo + USA, Boardman', //  retest
  f08280: 'retest, NR', //  retest
  f08284: 'retest, China, Liaoning', //  retest
  f08293: 'retest, China, Xinxiang', //  retest
  f08295: 'retest, China, Suzhou, IPFS Cloud', //  retest
  f08311: 'retest, China, Shenzhen', //  retest
  f08327: 'retest, NR', //  retest
  f08330: 'retest, China, Chengdu, oursoft', //  retest
  f08344: 'retest, UK, Hartlepool', //  retest
  f08358: 'retest, China, Shenzhen', //  retest
  f08384: 'retest, China, Shandong + Hong Kong + Japan, Heiwajima + Russia, Khabarovsk', //  retest
  f08385: 'retest, NR', //  retest
  f08388: 'retest, China, Taizhou', //  retest
  f08399: 'retest, USA, Sammamish', //  retest
  f08405: 'retest, China, Guangdong', //  retest
  f08406: 'retest, China, Shenzhen', //  retest
  f08424: 'retest, China, Chengdu', //  retest
  f08432: 'retest, China, Taizhou', //  retest
  f08440: 'retest, France, Fontenay-sous-Bois', //  retest
  f08446: 'retest, Norway, Borgen', //  retest
  f08448: 'retest, China, Guangdong', //  retest
  f08460: 'retest, NR', //  retest
  f08497: 'retest, Brazil, Sao Paulo', //  retest
  f08503: 'retest, NR', //  retest
  f08684: 'retest, China, Fuzhou', //  retest
  f08788: 'retest, China, Fuzhou', //  retest
  f08791: 'retest, NR', //  retest
  f08793: 'retest, China, Fuzhou', //  retest
  f08854: 'retest, China, Dongguan', //  retest
  f08893: 'retest, NR', //  retest
  f08895: 'retest, Japan, Ebisunishi', //  retest
  f08904: 'retest, China, Deyang', //  retest
  f08908: 'retest, USA', //  retest
  f08911: 'retest, Korea, Wanju', //  retest
  f08949: 'retest, Norway, Oslo', //  retest
  f08958: 'retest, China, Fuzhou', //  retest
  f08964: 'retest, NR', //  retest
  f08986: 'retest, China, Ordos', //  retest
  f08988: 'retest, Korea, Hwaseong-si', //  retest
  f08991: 'retest, China, Ili', //  retest
  f08994: 'retest, NR', //  retest
  f09005: 'retest, China, Fuzhou', //  retest
  f09007: 'retest, Korea, Hwaseong-si', //  retest
  f09035: 'retest, NR', //  retest
  f09036: 'retest, China, Chengdu, CD-oursoft', //  retest
  f09053: 'retest, China, Shenzhen', //  retest
  f09055: 'retest, China, Jieyang', //  retest
  f09056: 'retest, China, Shenzhen, SZSQ1', //  retest
  f09076: 'retest, NR', //  retest
  f09077: 'retest, China, Xiamen', //  retest
  f09084: 'retest, NR', //  retest
  f09088: 'retest, China, Changsha', //  retest
  f09091: 'retest, Netherlands', //  retest
  f09523: 'retest, China, Beijing', //  retest
  f09538: 'retest, NR', //  retest
  f09555: 'retest, Australia, Sydney', //  retest
  f09560: 'retest, Ukraine, Odessa, Wondertan (combined)', //  retest
  f09565: 'retest, Ukraine, Odessa, Wondertan (combined)', //  retest
  f09573: 'retest, China, Xiamen', //  retest
  f09578: 'retest, NR', //  retest
  f09592: 'retest, Japan, Minamata', //  retest
  f09597: 'retest, China, Shanghai', //  retest
  f09610: 'retest, China, Beijing', //  retest
  f09629: 'retest, NR', //  retest
  f09631: 'retest, China, Changzhou', //  retest
  f09653: 'retest, China, Chengdu', //  retest
  f09656: 'retest, Ukraine, Odessa', //  retest
  f09662: 'retest, Canada, Surrey', //  retest
  f09671: 'retest, China, Chongqing', //  retest
  f09672: 'retest, China, Chengdu', //  retest
  f09696: 'retest, USA, Portland + Singapore', //  retest
  f09707: 'retest, China, Guangdong', //  retest
  f09721: 'retest, ???, CD-oursoft-1', //  retest
  f09723: 'retest, China, Xiamen', //  retest
  f09729: 'retest, China, Dongguan', //  retest
  f09733: 'retest, China, Chongqing', //  retest
  f09734: 'retest, China, Dongguan', //  retest
  f09736: 'retest, China, Guangdong', //  retest
  f09753: 'retest, Korea, Pyeongtaek-si', //  retest
  f09761: 'retest, China, Beijing', //  retest
  f09763: 'retest, China, Mianyang,  <13h', //  retest
  f09771: 'retest, China, Hangzhou', //  retest
  f09792: 'retest, USA, Council Bluffs', //  retest
  f09797: 'retest, China, Fuzhou', //  retest
  f09801: 'retest, China, Fuzhou', //  retest
  f09805: 'retest, China, Fuzhou', //  retest
  f09808: 'retest, China, Fuzhou', //  retest
  f09809: 'retest, China, Fuzhou', //  retest
  f09810: 'retest, China, Fuzhou', //  retest
  f09811: 'retest, China, Dongguan', //  retest
  f09825: 'retest, China, Jinhua', //  retest
  f09830: 'retest, Korea, Geumcheon-gu', //  retest
  f09840: 'retest, China, Baoding', //  retest
  f09848: 'retest, USA', //  retest
  f09859: 'retest, USA', //  retest
  f09969: 'retest, China, Guangzhou', //  retest
  f09974: 'retest, Canada, Calgary', //  retest
  f09983: 'retest, China, Guangzhou', //  retest
  f09997: 'retest, USA', //  retest
  f010009: 'retest, USA, East Islip', //  retest
  f010015: 'retest, China, Taizhou', //  retest
  f010032: 'retest, China, Fuzhou', //  retest
  f010033: 'retest, NR', //  retest
  f010035: 'retest, Netherlands', //  retest
  f010040: 'retest, China, Shenzhen', //  retest
  f010041: 'retest, USA, Jackson', //  retest
  f010170: 'retest, China, Fuzhou', //  retest
  f010173: 'retest, Korea, Pyeongtaek-si', //  retest
  f010200: 'retest, NR', //  retest
  f010202: 'retest, Singapore', //  retest
  f010213: 'retest, NR', //  retest
  f010224: 'retest, China, Fuzhou', //  retest
  f010227: 'retest, China, Xiamen', //  retest
  f010238: 'retest, China, Xiamen', //  retest
  f010241: 'retest, China, Beijing + USA, Portland', //  retest
  f010244: 'retest, USA, Newton', //  retest
  f010248: 'retest, China, Yibin', //  retest
  f010268: 'retest, China, Hangzhou', //  retest
  f010270: 'retest, China, Shijiazhuang', //  retest
  f010276: 'retest, USA', //  retest
  f010283: 'retest, Brazil, Sao Paulo', //  retest
  f010287: 'retest, China, Fuzhou', //  retest
  f010289: 'retest, China, Fuzhou', //  retest
  f010291: 'retest, China, Fuzhou', //  retest
  f010292: 'retest, NR', //  retest
  f010293: 'retest, China, Xiamen', //  retest
  f010298: 'retest, China, Fuzhou', //  retest
  f010299: 'retest, China, Yibin', //  retest
  f010313: 'retest, NR', //  retest
  f010315: 'retest, Canada, Surrey', //  retest
  f010346: 'retest, China, Karamay', //  retest
  f010372: 'retest, Brazil, Sao Paulo', //  retest
  f010374: 'retest, Norway, Borgen', //  retest
  f010402: 'retest, China, Shenyang', //  retest
  f010405: 'retest, China, Foshan', //  retest
  f010411: 'retest, USA', //  retest
  f010424: 'retest, Australia, Sydney', //  retest
  f010433: 'retest, Korea, Seoul', //  retest
  f010449: 'retest, China, Jiangmen', //  retest
  f010468: 'retest, China, Guangzhou', //  retest
  f010490: 'retest, NR', //  retest
  f010496: 'retest, China, Guangzhou', //  retest
  f010516: 'retest, Brazil, Sao Paulo', //  retest
  f010520: 'retest, China, Hangzhou', //  retest
  f010523: 'retest, China, Beijing', //  retest
  f010533: 'retest, China, Ordos', //  retest
  f010541: 'retest, China, Chengdu', //  retest
  f010549: 'retest, China, Ordos', //  retest
  f010579: 'retest, South Africa, Johannesburg', //  retest
  f010586: 'retest, China, Fuzhou', //  retest
  f010598: 'retest, Canada, Waterloo', //  retest
  f010600: 'retest, USA', //  retest
  f010602: 'retest, China, Guangdong', //  retest
  f010603: 'retest, China, Baoding', //  retest
  f010606: 'retest, China, Fuzhou', //  retest
  f010608: 'retest, China, Fuzhou', //  retest
  f010609: 'retest, China, Fuzhou', //  retest
  f010612: 'retest, USA, Mountain View', //  retest
  f014207: 'retest, USA', //  retest
  f014230: 'retest, China, Fuzhou', //  retest
  f014241: 'retest, Norway, Borgen', //  retest
  f014246: 'retest, China, Shenzhen', //  retest
  f014248: 'retest, Turkey', //  retest
  f014261: 'retest, China, Fuzhou', //  retest
  f014271: 'retest, China, Fuzhou', //  retest
  f014281: 'retest, Netherlands, Permerend', //  retest
  f014302: 'retest, China, Ningbo', //  retest
  f014307: 'retest, China, Dongguan', //  retest
  f014324: 'retest, Canada, Vancouver', //  retest
  f014329: 'retest, China, Hong Kong', //  retest
  f014335: 'retest, NR', //  retest
  f014348: 'retest, Brazil, Sao Paulo', //  retest
  f014366: 'retest, USA, Mountain View', //  retest
  f014377: 'retest, China, Liaoning', //  retest
  f014380: 'retest, China, Hangzhou + Wuhan + Singapore', //  retest
  f014386: 'retest, Singapore', //  retest
  f014388: 'retest, China, Guangdong', //  retest
  f014407: 'retest, China, Shanghai', //  retest
  f014419: 'retest, USA, San Diego', //  retest
  f014420: 'retest, Russia, Samara', //  retest
  f014425: 'retest, Singapore', //  retest
  f014431: 'retest, Singapore', //  retest
  f014432: 'retest, China, Chengdu', //  retest
  f014436: 'retest, China, Chengdu', //  retest
  f014478: 'retest, Finland', //  retest
  f014483: 'retest, USA, Clarksville', //  retest
  f014495: 'retest, China, Hong Kong', //  retest
  f014514: 'retest, China, Fuzhou', //  retest
  f014533: 'retest, China, Fuzhou', //  retest
  f014547: 'retest, China, Fuzhou', //  retest
  f014572: 'retest, USA', //  retest
  f014606: 'retest, Australia, Sydney', //  retest
  f014609: 'retest, China, Fuzhou', //  retest
  f014632: 'retest, Canada', //  retest
  f014640: 'retest, Hungary', //  retest
  f014660: 'retest, Korea, Busan', //  retest
  f014686: 'retest, Singapore', //  retest
  f014699: 'retest, USA', //  retest
  f014701: 'retest, China, Changzhou', //  retest
  f014706: 'retest, China, Ordos', //  retest
  f014744: 'retest, China, Taiyuan', //  retest
  f014745: 'retest, China, Shenyang', //  retest
  f014764: 'retest, Korea, Wanju', //  retest
  f014778: 'retest, China, Ordos', //  retest
  f014799: 'retest, China, Chongqing', //  retest
  f015061: 'retest, Australia, Sydney', //  retest
  f015231: 'retest, China, Wuxi', //  retest
  f015655: 'retest, Korea, Geumcheon-gu', //  retest
  f015685: 'retest, China, Shanghai', //  retest
  f015709: 'retest, China, Hefei', //  retest
  f015714: 'retest, China, Ordos', //  retest
  f015720: 'retest, China, Ningbo', //  retest
  f015732: 'retest, USA, Portland', //  retest
  f015734: 'retest, China, Qingdao', //  retest
  f015751: 'retest, Canada, Huron East', //  retest
  f015756: 'retest, Finland, Helsinki', //  retest
  f015760: 'retest, Kenya, Nairobi', //  retest
  f015763: 'retest, South Africa, Cape Town', //  retest
  f015771: 'retest, Brazil, Sao Paulo', //  retest
  f015795: 'retest, Brazil, Sao Paulo', //  retest
  f015797: 'retest, Germany, Rostock', //  retest
  f015798: 'retest, Germany', //  retest
  f015800: 'retest, Germany, Sankt Andreasberg', //  retest
  f015802: 'retest, Germany', //  retest
  f015803: 'retest, Germany', //  retest
  f015804: 'retest, Germany, Ismaning', //  retest
  f015805: 'retest, Germany', //  retest
  f015807: 'retest, Germany', //  retest
  f015808: 'retest, Germany', //  retest
  f015809: 'retest, Germany', //  retest
  f015810: 'retest, Germany', //  retest
  f015818: 'retest, Netherlands', //  retest
  f015819: 'retest, China, Fuzhou', //  retest
  f015827: 'retest, Russia', //  retest
  f015839: 'retest, China, Fuzhou', //  retest
  f015846: 'retest, South Africa, Johannesburg', //  retest
  f015855: 'retest, China, Fuzhou', //  retest
  f015860: 'retest, Ukraine, Odessa', //  retest
  f015872: 'retest, China, Fuzhou', //  retest
  f015875: 'retest, China, Fuzhou', //  retest
  f015877: 'retest, China, Jiaxing + USA', //  retest
  f015884: 'retest, China, Fuzhou', //  retest
  f015887: 'retest, China, Fuzhou', //  retest
  f015888: 'retest, China, Fuzhou', //  retest
  f015891: 'retest, China, Shanghai', //  retest
  f015894: 'retest, China, Fuzhou', //  retest
  f015898: 'retest, Lithuania', //  retest
  f015900: 'retest, Germany', //  retest
  f015902: 'retest, Germany', //  retest
  f015903: 'retest, Germany', //  retest
  f015905: 'retest, Lithuania', //  retest
  f015910: 'retest, Turkey', //  retest
  f015918: 'retest, China, Fuzhou', //  retest
  f015920: 'retest, China, Guangdong', //  retest
  f015926: 'retest, China', //  retest
  f015933: 'retest, Finland, Helskinki', //  retest
  f015935: 'retest, China, Sichuan', //  retest
  f015938: 'retest, Canada, Waterloo', //  retest
  f015940: 'retest, Netherlands, Amsterdam', //  retest
  f015941: 'retest, Ukraine, Kyiv', //  retest
  f016056: 'retest, USA, Arlington', //  retest
  f016172: 'retest, China, Guangdong', //  retest
  f016202: 'retest, Korea, Songpa-gu', //  retest
  f016228: 'retest, China, Chengdu', //  retest
  f016234: 'retest, China, Chengdu', //  retest
  f016238: 'retest, NR', //  retest
  f016262: 'retest, China, Fuzhou', //  retest
  f016271: 'retest, Korea, Seodaemun-gu', //  retest
  f016279: 'retest, Finland, Helsinki', //  retest
  f016299: 'retest, China, Shanghai', //  retest
  f016302: 'retest, China, Fuzhou', //  retest
  f016303: 'retest, USA, Boardman', //  retest
  f016305: 'retest, USA, Boardman', //  retest
  f016306: 'retest, USA, Boardman', //  retest
  f016309: 'retest, USA, Boardman', //  retest
  f016364: 'retest, China, Hefei', //  retest
  f016419: 'retest, USA, Mountain View', //  retest
  f016436: 'retest, Korea, Seoul', //  retest
  f016462: 'retest, USA, Clarksville', //  retest
  f016509: 'retest, China, Fuzhou', //  retest
  f016511: 'retest, China, Beijing', //  retest
  f016525: 'retest, China, Guangzhou', //  retest
  f016603: 'retest, China, Dongguan', //  retest
  f016628: 'retest, NR', //  retest
  f016659: 'retest, USA, Alpharetta', //  retest
  f016706: 'retest, China, Guangzhou', //  retest
  f016866: 'retest, China, Fuzhou', //  retest
  f016917: 'retest, China, Guangdong', //  retest
  f017067: 'retest, China, Fuzhou', //  retest
  f017082: 'retest, South Africa, Johannesburg', //  retest
  f017117: 'retest, Russia, Samara', //  retest
  f017181: 'retest, China, Nanchong', //  retest
  f017186: 'retest, China, Jiaxing', //  retest
  f017193: 'retest, Singapore', //  retest
  f017200: 'retest, Lithuania', //  retest
  f017236: 'retest, NR', //  retest
  f017242: 'retest, China, Guangdong', //  retest
  f017244: 'retest, Korea, Seoul', //  retest
  f017266: 'retest, China, Fuzhou', //  retest
  f017285: 'retest, China, Maoming', //  retest
  f017294: 'retest, China, Shenzhen', //  retest
  f017323: 'retest, Poland, Warsaw', //  retest
  f017334: 'retest, China, Fuzhou', //  retest
  f017488: 'retest, USA, Council Bluffs', //  retest
  f017618: 'retest, Korea, Wanju', //  retest
  f017672: 'retest, China, Cangzhou', //  retest
  f017722: 'retest, NR', //  retest
  f017738: 'retest, China', //  retest
  f017747: 'retest, NR', //  retest
  f017793: 'retest, NR', //  retest
  f017794: 'retest, USA, Columbus', //  retest
  f017795: 'retest, USA, Columbus', //  retest
  f017796: 'retest, China, Fuzhou', //  retest
  f018203: 'retest, Finland, Helsinki', //  retest
  f018393: 'retest, Colombia, Medellin', //  retest
  f018397: 'retest, USA, Howell', //  retest
  f018440: 'retest, Russia, St. Petersburg', //  retest
  f018445: 'retest, NR', //  retest
  f018446: 'retest, China, Dongguan', //  retest
  f018456: 'retest, Brazil, Sao Paulo', //  retest
  f018464: 'retest, Sweden, Stockholm', //  retest
  f018476: 'retest, China, Fuzhou', //  retest
  f018490: 'retest, Korea, Hwaseong-si', //  retest
  f018498: 'retest, Singapore', //  retest
  f018501: 'retest, China, Beijing', //  retest
  f018509: 'retest, China, Dongguan', //  retest
  f018513: 'retest, NR', //  retest
  f018525: 'retest, USA, Queens', //  retest
  f018530: 'retest, China, Shaanxi', //  retest
  f018531: 'retest, China, Shaanxi', //  retest
  f018538: 'retest, China, Huzhou', //  retest
  f018542: 'retest, China, Chongqing', //  retest
  f018562: 'retest, New Zealand, Masterton', //  retest
  f018754: 'retest, China, Dali', //  retest
  f018785: 'retest, Singapore + Germany, Frankfurt + USA', //  retest
  f018802: 'retest, China, Dongguan', //  retest
  f018803: 'retest, Korea, Seodaemun-gu', //  retest
  f018809: 'retest, USA, New York', //  retest
  f018836: 'retest, NR', //  retest
  f018844: 'retest, NR', //  retest
  f018851: 'retest, China, Deyang + Singapore', //  retest
  f018864: 'retest, Korea, Busan', //  retest
  f018869: 'retest, NR', //  retest
  f018884: 'retest, Russia', //  retest
  f018899: 'retest, China, Shanghai', //  retest
  f018911: 'retest, USA, Portland', //  retest
  f019002: 'retest, USA', //  retest
  f019007: 'retest, China, Shenzhen + Hong Kong', //  retest
  f019015: 'retest, China, Hangzhou + Singapore', //  retest
  f019017: 'retest, China, Wenzhou-cfa', //  retest
  f019031: 'retest, NR', //  retest
  f019041: 'retest, Singapore', //  retest
  f019048: 'retest, Brazil, Sao Paulo', //  retest
  f019053: 'retest, Singapore', //  retest
  f019062: 'retest, Germany', //  retest
  f019069: 'retest, NR', //  retest
  f019073: 'retest, Germany, Frankfurt', //  retest
  f019074: 'retest, China, Guangdong', //  retest
  f019087: 'retest, South Africa, Johannesburg', //  retest
  f019090: 'retest, South Africa, Johannesburg', //  retest
  f019091: 'retest, China, Chengdu', //  retest
  f019094: 'retest, Brazil, Sao Paulo', //  retest
  f019104: 'retest, Canada, Chambly', //  retest
  f019109: 'retest, USA, Howell', //  retest
  f019123: 'retest, China, Dongguan', //  retest
  f019133: 'retest, UK, Mansfield', //  retest
  f019150: 'retest, China, Fuzhou', //  retest
  f019155: 'retest, China, Chongqing', //  retest
  f019173: 'retest, China, Nanchong', //  retest
  f019182: 'retest, China, Chongqing', //  retest
  f019185: 'retest, China, Beijing', //  retest
  f019218: 'retest, China, Dali', //  retest
  f019233: 'retest, Russia', //  retest
  f019239: 'retest, China, Jiaxing', //  retest
  f019248: 'retest, USA, Council Bluffs', //  retest
  f019280: 'retest, China, Fuzhou', //  retest
  f019317: 'retest, Brazil, Sao Paulo', //  retest
  f019326: 'retest, China, Chongqing', //  retest
  f019327: 'retest, China, Chongqing', //  retest
  f019352: 'retest, China, Chongqing', //  retest
  f019354: 'retest, Germany, Frankfurt', //  retest
  f019362: 'retest, China, Hangzhou', //  retest
  f019376: 'retest, NR', //  retest
  f019378: 'retest, China, Changzhou', //  retest
  f019401: 'retest, Brazil, Sao Paulo', //  retest
  f019423: 'retest, South Africa, Johannesburg', //  retest
  f019434: 'retest, NR', //  retest
  f019437: 'retest, Korea, Guro-gu', //  retest
  f019459: 'retest, USA, Alpharetta', //  retest
  f019462: 'retest, Netherlands, Groningen', //  retest
  f019515: 'retest, Netherlands, Groningen', //  retest
  f019523: 'retest, USA, Los Angeles', //  retest
  f019528: 'retest, Peru', //  retest
  f019547: 'retest, Peru', //  retest
  f019645: 'retest, Russia, St. Petersburg', //  retest
  f019723: 'retest, China, Zhongshan', //  retest
  f019804: 'retest, China, Chengdu', //  retest
  f019806: 'retest, China, Beijing', //  retest
  f019812: 'retest, NR', //  retest
  f019820: 'retest, Germany', //  retest
  f019825: 'retest, China, Hong Kong', //  retest
  f020223: 'retest, China, Guiyang', //  retest
  f020260: 'retest, NR', //  retest
  f020276: 'retest, China, Xiamen', //  retest
  f020281: 'retest, Korea, Uijeongbu-si', //  retest
  f020358: 'retest, China, Xinxiang', //  retest
  f020366: 'retest, China, Chengdu', //  retest
  f020379: 'retest, NR', //  retest
  f020385: 'retest, Korea, Incheon', //  retest
  f020386: 'retest, Russia', //  retest
  f020390: 'retest, NR', //  retest
  f020393: 'retest, China, Beijing', //  retest
  f020398: 'retest, China, Zhangjiakou', //  retest
  f020408: 'retest, China, Hong Kong', //  retest
  f020432: 'retest, Korea, Wanju', //  retest
  f020433: 'retest, NR', //  retest
  f020436: 'retest, China, Beijing', //  retest
  f020450: 'retest, NR', //  retest
  f020452: 'retest, China, Hangzhou + Singapore', //  retest
  f020453: 'retest, China, Chengdu', //  retest
  f020489: 'retest, China, Lioaning', //  retest
  f020516: 'retest, China, Dalian', //  retest
  f020522: 'retest, Singapore', //  retest
  f020525: 'retest, China, Dongguan', //  retest
  f020541: 'retest, China, Shanghai', //  retest
  f020563: 'retest, China, Dongguan', //  retest
  f020572: 'retest, China, Nanchang', //  retest
  f020578: 'retest, Korea, Wanju', //  retest
  f020605: 'retest, China, Yibin', //  retest
  f020608: 'retest, Russia', //  retest
  f020618: 'retest, Singapore', //  retest
  f020626: 'retest, USA, Berkeley', //  retest
  f020631: 'retest, China, Zhejiang', //  retest
  f020641: 'retest, NR', //  retest
  f020678: 'retest, China, Wenzhou', //  retest
  f020683: 'retest, China, Changsha', //  retest
  f020739: 'retest, China, Dongguan', //  retest
  f020763: 'retest, China, Luzhou', //  retest
  f020771: 'retest, Japan, Setagaya-ku', //  retest
  f020775: 'retest, Japan, Osaka', //  retest
  f020786: 'retest, China, Shenzhen', //  retest
  f020788: 'retest, China, Chengdu', //  retest
  f020789: 'retest, NR', //  retest
  f020816: 'retest, China, Dongguan', //  retest
  f020819: 'retest, China, Chengdu', //  retest
  f020822: 'retest, China, Shanghai', //  retest
  f020896: 'retest, NR', //  retest
  f020899: 'retest, China, Chengdu', //  retest
  f020914: 'retest, NR', //  retest
  f020928: 'retest, China, Deyang + Singapore', //  retest
  f020939: 'retest, NR', //  retest
  f020957: 'retest, NR', //  retest
  f020961: 'retest, China, Shanghai', //  retest
  f020967: 'retest, China, Chengdu', //  retest
  f021069: 'retest, USA', //  retest
  f021075: 'retest, China, Chengdu', //  retest
  f021083: 'retest, NR', //  retest
  f021092: 'retest, NR', //  retest
  f021095: 'retest, NR', //  retest
  f021254: 'retest, NR', //  retest
  f021255: 'retest, China, Suzhou + Netherlands', //  retest
  f021262: 'retest, China, Shanghai', //  retest
  f021274: 'retest, China, Shanghai', //  retest
  f021292: 'retest, China, Hong Kong', //  retest
  f021346: 'retest, China, Shanghai', //  retest
  f021357: 'retest, China, Shanghai', //  retest
  f021444: 'retest, China, Guangzhou', //  retest
  f021461: 'retest, China, Yangzhou + Singapore', //  retest
  f021475: 'retest, China, Dongguan', //  retest
  f021479: 'retest, China, Qingdao', //  retest
  f021494: 'retest, NR', //  retest
  f021525: 'retest, China, Guangdong', //  retest
  f021527: 'retest, NR', //  retest
  f021532: 'retest, China, Shanghai', //  retest
  f021535: 'retest, China, Chengdu', //  retest
  f021547: 'retest, Singapore', //  retest
  f021574: 'retest, NR', //  retest
  f021580: 'retest, NR', //  retest
  f021704: 'retest, NR', //  retest
  f021716: 'retest, New Zealand, Wellington', //  retest
  f021725: 'retest, NR', //  retest
  f021870: 'retest, USA, Portland', //  retest
  f021961: 'retest, NR', //  retest
  f022015: 'retest, China, Hangzhou', //  retest
  f022016: 'retest, NR', //  retest
  f022030: 'retest, NR', //  retest
  f022031: 'retest, China, Maoming', //  retest
  f022069: 'retest, China, Hong Kong', //  retest
  f022070: 'retest, China, Jieyang', //  retest
  f022072: 'retest, China, Jieyang', //  retest
  f022084: 'retest, China, Shaanxi', //  retest
  f022091: 'retest, NR', //  retest
  f022108: 'retest, China, Luzhou', //  retest
  f022119: 'retest, USA, Lovettsville', //  retest
  f022132: 'retest, China, Dongguan', //  retest
  f022142: 'retest, USA, Queens', //  retest
  f022144: 'retest, China, Fuzhou', //  retest
  f022146: 'retest, China, Fuzhou', //  retest
  f022166: 'retest, Norway, Borgen', //  retest
  f022171: 'retest, China, Shanghai', //  retest
  f022262: 'retest, China, Hong Kong', //  retest
  f022276: 'retest, Korea, Seoul', //  retest
  f022284: 'retest, China, Shaanxi', //  retest
  f022289: 'retest, China, Mianyang', //  retest
  f022303: 'retest, NR', //  retest
  f022304: 'retest, China, Taiyuan', //  retest
  f022308: 'retest, NR', //  retest
  f022309: 'retest, Korea, Chuncheon', //  retest
  f022313: 'retest, NR', //  retest
  f022320: 'retest, Korea, Seoul', //  retest
  f022326: 'retest, China, Zhongshan', //  retest
  f022361: 'retest, NR', //  retest
  f022364: 'retest, Korea, Jungang-gu', //  retest
  f022373: 'retest, Singapore', //  retest
  f022405: 'retest, Russia', //  retest
  f022501: 'retest, Japan, Osaka', //  retest
  f022505: 'retest, China, Shanghai', //  retest
  f022518: 'retest, DNS:poseidon.technology', //  retest
  f022737: 'retest, Korea, Gangnum-gu', //  retest
  f022748: 'retest, China, Xinyang', //  retest
  f022780: 'retest, Korea, Guri-si', //  retest
  f022790: 'retest, China, Luzhou', //  retest
  f022791: 'retest, NR', //  retest
  f022832: 'retest, China', //  retest
  f022834: 'retest, NR', //  retest
  f022853: 'retest, China, Fuzhou', //  retest
  f022911: 'retest, China, Hong Kong', //  retest
  f022912: 'retest, NR', //  retest
  f022913: 'retest, Korea, Uiwang', //  retest
  f022926: 'retest, NR', //  retest
  f022930: 'retest, NR', //  retest
  f022967: 'retest, Korea, Seoul', //  retest
  f022976: 'retest, Korea, Cheongju-si', //  retest
  f022996: 'retest, NR', //  retest
  f023013: 'retest, China, Hong Kong', //  retest
  f023108: 'retest, China, Dongguan', //  retest
  f023181: 'retest, DNS:poseidon.technology', //  retest
  f023190: 'retest, China, Hefei', //  retest
  f023205: 'retest, NR', //  retest
  f023210: 'retest, China, Dongguan', //  retest
  f023229: 'retest, China, Shandong', //  retest
  f023463: 'retest, NR', //  retest
  f023467: 'retest, Norway, Oslo', //  retest
  f023482: 'retest, NR', //  retest
  f023495: 'retest, China, Beijing + USA, Portland', //  retest
  f023530: 'retest, China, Shanghai', //  retest
  f023535: 'retest, China, Hong Kong', //  retest
  f023549: 'retest, China, Zhejiang', //  retest
  f023560: 'retest, NR', //  retest
  f023581: 'retest, China, Hong Kong', //  retest
  f023583: 'retest, Korea, Guri-si', //  retest
  f023626: 'retest, NR', //  retest
  f023627: 'retest, China, Zhongwei', //  retest
  f023643: 'retest, NR', //  retest
  f023649: 'retest, Korea, Seoul', //  retest
  f023651: 'retest, NR', //  retest
  f023655: 'retest, Australia, Brisbane', //  retest
  f023660: 'retest, China, Fuzhou', //  retest
  f023662: 'retest, China, Fuzhou', //  retest
  f023798: 'retest, China, Shanghai', //  retest
  f023825: 'retest, USA, Portland', //  retest
  f023843: 'retest, NR', //  retest
  f023854: 'retest, China, Fuzhou', //  retest
  f023859: 'retest, China, Fuzhou', //  retest
  f023861: 'retest, China, Fuzhou', //  retest
  f023868: 'retest, China, Fuzhou', //  retest
  f023869: 'retest, China, Fuzhou', //  retest
  f023870: 'retest, China, Fuzhou', //  retest
  f023871: 'retest, China, Fuzhou', //  retest
  f023939: 'retest, NR', //  retest
  f023965: 'retest, NR', //  retest
  f023971: 'retest, USA, @Brian Y', //  retest
  f023982: 'retest, China, Chongqing', //  retest
  f023985: 'retest, China, Chongqing', //  retest
  f024016: 'retest, USA, Portland', //  retest
  f024031: 'retest, NR', //  retest
  f024070: 'retest, Japan, Setagaya-ku', //  retest
  f024074: 'retest, NR', //  retest
  f024101: 'retest, China, Guiyang', //  retest
  f024129: 'retest, China, Zhejiang', //  retest
  f024136: 'retest, China, Fuzhou', //  retest
  f024137: 'retest, NR', //  retest
  f024146: 'retest, China, Fuzhou', //  retest
  f024147: 'retest, China, Fuzhou', //  retest
  f024150: 'retest, UK, Mansfield', //  retest
  f024156: 'retest, USA', //  retest
  f024190: 'retest, China, Wenzhou', //  retest
  f024483: 'retest, NR', //  retest
  f024556: 'retest, NR', //  retest
  f024557: 'retest, NR', //  retest
  f024558: 'retest, NR', //  retest
  f024559: 'retest, NR', //  retest
  f024563: 'retest, NR', //  retest
  f024565: 'retest, Korea, Incheon', //  retest
  f024893: 'retest, Korea, Gyeonggi-do', //  retest
  f024985: 'retest, China, Shenzhen', //  retest
  f025002: 'retest, NR', //  retest
  f025008: 'retest, Korea, Gyeonggi-do', //  retest
  f029368: 'retest, Korea, Gangseo-gu', //  retest

  // Active

  // Active-sealing (active, with in-flight sealing)

  f01234: 'active-sealing, Belgium, De Klinge, Eliovp',
  f01241: 'active-sealing, USA, Portland, 6block',
  f01280: 'active-sealing, China, Wuxi, 了凡超算',
  f02299: 'active-sealing, China, Dongguan, Yolo',
  f02415: 'active-sealing, China, Hong Kong',
  f02501: 'active-sealing, USA, Portland, 6block',
  f02514: 'active-sealing, USA, Portland, 6block',
  f02622: 'active-sealing, USA, Portland, 6block',
  f02623: 'active-sealing, USA, Portland, 6block',
  f02633: 'active-sealing, China, Hong Kong',
  f02645: 'active-sealing, China, Hong Kong',
  f02668: 'active-sealing, China, Chengdu',
  f03273: 'active-sealing, USA, Portland, 6block',
  f03274: 'active-sealing, USA, Portland, 6block',
  f03275: 'active-sealing, USA, Portland, 6block',
  f03339: 'active-sealing, China, Luzhou, benxun',
  f05317: 'active-sealing, USA, Portland',
  f07819: 'active-sealing, China, Wuxi, YC--wuxi',
  f08019: 'active-sealing, China, Yantai, 三合',
  f08025: 'active-sealing, China, Hong Kong',
  f08383: 'active-sealing, USA, Portland, 6block',
  f08474: 'active-sealing, China, Hong Kong',
  f09693: 'active-sealing, USA, Portland + Singapore',
  f010048: 'active-sealing, China, Shanghai',
  f010088: 'active-sealing, DNS:purumine.com',
  f010253: 'active-sealing, China, Beijing + USA, Portland',
  f010479: 'active-sealing, France, Fontenay-sous-Bois',
  f018780: 'active-sealing, Singapore + Germany, Frankfurt + USA',
  f018781: 'active-sealing, Singapore + Germany, Frankfurt + USA',
  f018783: 'active-sealing, Singapore + Germany, Frankfurt + USA',
  f019100: 'active-sealing, Romania, Cluj-Napoca',
  f021710: 'active-sealing, China, Shijiazhuang',
  f023200: 'active-sealing, China, Shanghai',
  f024015: 'active-sealing, USA, Portland',

  // Sealing

  f02405: 'sealing, China, Shenzhen',
  f03491: 'sealing, China, Hong Kong',
  f07919: 'sealing, China, Beijing, Shanghai, Hunan',
  f08264: 'sealing, China, Xianning',
  f08482: 'sealing, USA, Athol, @why',
  f010257: 'sealing, China, Hong Kong, DNS:feiyuipfs.com',
  f022125: 'sealing, China, Shenzhen',
  f029552: 'sealing, China, Changsha',
  f030152: 'sealing, China, Changsha',
  f030219: 'sealing, China, Changsha',

  // Stuck

  f01247: 'stuck, Canada, Montreal, BigChungus™', // CheckForAcceptance: about 4 hours
  f01272: 'stuck, Singapore', // CheckForAcceptance: about 3 hours
  f01799: 'stuck, China, Jinan, TokenHome', // CheckForAcceptance: about 4 hours
  f01800: 'stuck, China, Shenzhen + Chengdu', // CheckForAcceptance: about 3 hours
  f02301: 'stuck, USA', // CheckForAcceptance: about 3 hours
  f02388: 'stuck, Netherlands, Amersfoort, Kroketje', // CheckForAcceptance: about 3 hours
  f02399: 'stuck, China, Zhejiang', // CheckForAcceptance: about 3 hours
  f02419: 'stuck, China, Shanghai, yuantai', // CheckForAcceptance: about 3 hours
  f02625: 'stuck, China, Shanghai, IPFS星际工厂', // CheckForAcceptance: about 3 hours
  f02654: 'stuck, China, Shanghai', // CheckForAcceptance: about 3 hours
  f03143: 'stuck, China, Shijiazhuang + Hong Kong', // CheckForAcceptance: about 4 hours
  f03224: 'stuck, Ukraine, Irpin, oboltusov', // CheckForAcceptance: about 4 hours
  f03345: 'stuck, China, Fuzhou, chh', // CheckForAcceptance: about 3 hours
  f03363: 'stuck, Singapore', // CheckForAcceptance: about 3 hours
  f03364: 'stuck, China, Guangzhou', // CheckForAcceptance: about 3 hours
  f03482: 'stuck, China, Wuxi', // CheckForAcceptance: about 3 hours
  f03544: 'stuck, China, Guiyang', // CheckForAcceptance: about 3 hours
  f04443: 'stuck, China, Shanghai, 罗良科技', // CheckForAcceptance: about 3 hours
  f07709: 'stuck, Korea, Dongjak-gu', // CheckForAcceptance: about 3 hours
  f08073: 'stuck, China, Qiqihar, QY7TT', // CheckForAcceptance: about 3 hours
  f08157: 'stuck, China, Beijing + Germany, Frankfurt, 超星际', // CheckForAcceptance: about 3 hours
  f08204: 'stuck, USA, St. Louis', // CheckForAcceptance: about 3 hours
  f08371: 'stuck, China, Chengdu', // Transferring: about 3 hours
  f09569: 'stuck, China, Beijing', // CheckForAcceptance: about 3 hours
  f09731: 'stuck, China, Guiyang', // CheckForAcceptance: about 3 hours
  f09833: 'stuck, USA, San Jose', // CheckForAcceptance: 20 minutes
  f010063: 'stuck, China, Mianyang', // CheckForAcceptance: about 3 hours
  f010084: 'stuck, China, Beijing', // CheckForAcceptance: about 3 hours
  f010247: 'stuck, China, Yantai', // CheckForAcceptance: about 3 hours
  f010399: 'stuck, China, Guangzhou', // CheckForAcceptance: about 3 hours
  f010400: 'stuck, China, Shenyang', // CheckForAcceptance: about 3 hours
  f010438: 'stuck, USA', // CheckForAcceptance: about 3 hours
  f010493: 'stuck, China, Shanghai', // CheckForAcceptance: about 3 hours
  f010498: 'stuck, China, Shenzhen', // CheckForAcceptance: about 3 hours
  f010501: 'stuck, China, Hangzhou', // CheckForAcceptance: about 3 hours
  f010505: 'stuck, China, Wuhan', // CheckForAcceptance: about 3 hours
  f010507: 'stuck, China, Hangzhou', // CheckForAcceptance: about 3 hours
  f010513: 'stuck, China, Chongqing', // CheckForAcceptance: about 3 hours
  f010528: 'stuck, China, Chongqing', // CheckForAcceptance: about 3 hours
  f014394: 'stuck, China, Suzhou', // CheckForAcceptance: about 3 hours
  f014768: 'stuck, Singapore', // CheckForAcceptance: about 3 hours
  f015233: 'stuck, China, Nanjing', // CheckForAcceptance: about 3 hours
  f017665: 'stuck, China, Shenyang', // CheckForAcceptance: about 3 hours
  f018772: 'stuck, Australia', // CheckForAcceptance: 20 minutes
  f018784: 'stuck, Singapore + Germany, Frankfurt + USA', // Transferring: about 3 hours
  f019114: 'stuck, USA, Howell', // CheckForAcceptance: 20 minutes
  f019616: 'stuck, USA, Marlborough', // CheckForAcceptance: 20 minutes
  f019638: 'stuck, Germany, Frankfurt', // CheckForAcceptance: about 3 hours
  f020523: 'stuck, China, Suzhou', // CheckForAcceptance: 20 minutes
  f021265: 'stuck, China, Wuhan', // CheckForAcceptance: about 3 hours
  f021339: 'stuck, China, Jiaxing', // CheckForAcceptance: about 3 hours
  f021540: 'stuck, Germany, Frankfurt, @hsanjuan', // CheckForAcceptance: about 3 hours
  f021583: 'stuck, China, Jiaxing', // CheckForAcceptance: about 3 hours
  f021616: 'stuck, China, Shanghai', // CheckForAcceptance: about 3 hours
  f022089: 'stuck, China, Beijing', // CheckForAcceptance: 20 minutes
  f022202: 'stuck, USA, Howell', // CheckForAcceptance: 20 minutes
  f022227: 'stuck, China, Jiangsu', // CheckForAcceptance: about 3 hours
  f022753: 'stuck, China, Hong Kong', // CheckForAcceptance: about 3 hours
  f022922: 'stuck, China, Shenzhen', // CheckForAcceptance: about 3 hours
  f023179: 'stuck, China, Fuzhou', // CheckForAcceptance: about 3 hours
  f023571: 'stuck, NR', // CheckForAcceptance: about 3 hours
  f023573: 'stuck, Japan, Kumamoto', // CheckForAcceptance: about 3 hours
  f023647: 'stuck, Korea, Gangseo-gu', // CheckForAcceptance: about 3 hours
  f023678: 'stuck, China, Jiaxing', // CheckForAcceptance: about 3 hours
  f024066: 'stuck, NR', // CheckForAcceptance: about 3 hours
  f024184: 'stuck, Korea, Gangnam-gu', // CheckForAcceptance: about 3 hours
  f024468: 'stuck, China, Shenzhen', // CheckForAcceptance: about 3 hours
  f024521: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f024550: 'stuck, China, Wenzhou', // CheckForAcceptance: about 3 hours
  f024800: 'stuck, China, Hong Kong', // CheckForAcceptance: about 3 hours
  f024902: 'stuck, Korea, Incheon', // CheckForAcceptance: 20 minutes
  f024903: 'stuck, China, Mianyang', // CheckForAcceptance: about 3 hours
  f024969: 'stuck, NR', // CheckForAcceptance: about 3 hours
  f025007: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f025017: 'stuck, China, Hefei', // CheckForAcceptance: about 3 hours
  f025019: 'stuck, China, Taiwan, Hsinchu', // CheckForAcceptance: about 3 hours
  f029421: 'stuck, China, Hong Kong', // CheckForAcceptance: about 3 hours
  f029490: 'stuck, NR', // CheckForAcceptance: about 3 hours
  f029556: 'stuck, China, Wuxi', // CheckForAcceptance: 20 minutes
  f029587: 'stuck, Hungary', // CheckForAcceptance: about 3 hours
  f029619: 'stuck, China, Hefei', // CheckForAcceptance: about 3 hours
  f029628: 'stuck, Australia, Brisbane', // CheckForAcceptance: about 3 hours
  f030144: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours
  f030158: 'stuck, China, Hangzhou', // CheckForAcceptance: about 3 hours
  f030184: 'stuck, USA, Aliquippa', // CheckForAcceptance: about 3 hours
  f030188: 'stuck, China, Yangjiang', // CheckForAcceptance: about 3 hours
  f030226: 'stuck, China, Fuzhou', // CheckForAcceptance: about 3 hours
  f030230: 'stuck, China, Sichuan', // CheckForAcceptance: about 3 hours
  f030278: 'stuck, Korea, Gyeonggi-do', // CheckForAcceptance: about 3 hours

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
  f022352: 'min-size, Norway, Borgen', // 131072 < 268435456
  f023853: 'min-size, China, Fuzhou', // 131072 < 134217728
  f023855: 'min-size, China, Fuzhou', // 131072 < 134217728
  f024127: 'min-size, China, Fuzhou', // 131072 < 134217728
  f025025: 'min-size, China, Qingdao', // 131072 < 134217728
  f029404: 'min-size, USA, Portland + New Castle', // 131072 < 134217728

  // Min Ask

  f07998: 'min-ask, China, Hangzhou', // 20000000 < 61035156
  f010617: 'min-ask, Canada, Surrey, @feiya200', // 20000000 < 12207031250000000000000000
  f022163: 'min-ask, NR', // 20000000 < 12207031250000000000000000

  // Error

  f01276: 'error, Canada, Brampton, NBFS Canada', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f01279: 'error, China, Sichuan', // stream reset
  f01287: 'error, China, Jiaxing, MaiTian', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f02305: 'error, China, Dongguan', // failed to initiate data transfer: deal data transfer failed: response rejected
  f02387: 'error, Canada, Brampton, NBFS Canada', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f02401: 'error, Canada, Chambly, NBFS Canada', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f02414: "error, China, Xi'an, zhejiangyunchu", // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032563514065447773 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02422: "error, China, Xi'an", // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.034507589040546743 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02423: 'error, Ukraine, Kyiv, igowreck', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f02619: 'error, China, Beijing, Blockcasting', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f02621: "error, China, Xi'an", // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.032275184183722169 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f02767: 'error, Germany, Frankfurt', // stream reset
  f02772: 'error, China, Chengdu', // stream reset
  f03136: "error, China, Xi'an, Zhejiang Yun Chu Technology Co., Ltd, sat", // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.028297308103155468 FIL, balance: 0.022451386229255808 FIL): not enough funds to execute transaction
  f03176: 'error, USA, San Mateo, Five Star-Helmsman&Heiben', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f03194: 'error, China, Shenzhen, 成都云存&Npool', // stream reset
  f03340: "error, China, Xi'an", // adding market funds failed: mpool push: failed to push message: not enough funds including pending messages (required: 0.761231267041594684 FIL, balance: 0.742223252290368174 FIL): validation failure
  f07824: 'error, China, Shanghai', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f07987: 'error, China, Beijing', // stream reset
  f08136: "error, China, Xi'an", // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.007194904021232019 FIL, balance: 0.006637083864391413 FIL): not enough funds to execute transaction
  f08229: 'error, China, Nanchang', // stream reset
  f08532: 'error, USA', // stream reset
  f09639: 'error, China, Fuzhou', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.0999999999666495 FIL, balance: 0.000025259918397467 FIL): not enough funds to execute transaction
  f09689: 'error, USA, Portland', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f09770: "error, China, Xi'an", // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f010010: 'error, China, Changzhou + Hong Kong', // stream reset
  f010446: 'error, Netherlands', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f010512: 'error, China, Zhengzhou', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 1.372770716970385006 FIL, balance: 1.346274281252783987 FIL): validation failure
  f010558: 'error, China, Shenzhen + Hong Kong', // stream reset
  f014440: 'error, Hong Kong', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzacecjn6ynbmgn2mdbbx45ccdjpxy4ldeyr5zn62uhf4pdhwus66ekpe n 803, TS: bafy2bzaceddlwreuxuwupryudf5ofpdun2xlhqoyuua73yz3mfm6dl6gqr7go n803)
  f014569: 'error, NR', // stream reset
  f015647: 'error, China, Shenzhen', // EOF
  f015753: 'error, China, Guyuan', // EOF
  f015767: 'error, Russia, Khabarovsk + Japan, Khabarovsk + USA', // stream reset
  f017734: 'error, Australia, Sydney', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f018311: "error, China, Xi'an, <23h", // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004757168101143033 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f018518: "error, China, Xi'an", // adding market funds failed: mpool push: failed to push message: not enough funds (required: 0.004757170560600897 FIL, balance: 0.004668963389900487 FIL): not enough funds to execute transaction
  f018782: 'error, Singapore + Germany, Frankfurt + USA', // failed to initiate data transfer: deal data transfer failed: response rejected
  f019118: 'error, China, Jiaxing', // failed to initiate data transfer: deal data transfer failed: response rejected
  f019243: 'error, USA, Jackson', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f019399: 'error, Korea, Busan', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: found message with equal nonce as the one we are looking for (F:bafy2bzaceaszdvqrjbnajurbnhe4pmfjn4fef3eg5cpfy2tugdgnbsoda65ss n 2933, TS: bafy2bzacebtnrh63plwukzzza43vrvmusfrfadu6yvrkpdmbe3pkghu5tykqc n2933)
  f019824: 'error, USA', // error in deal activation: handling applied event: deal wasn't active: deal=535554, parentState=bafy2bzacebia36nuaxktpjaznt25mioc7eqftnjprkdogb5fnss3oj6nvzaco, h=133366
  f020904: 'error, Korea, Uijeongbu-si', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.13930303019742592 FIL, balance: 0.12144284819453019 FIL): validation failure
  f020923: 'error, China, Cangzhou', // stream reset
  f020993: 'error, China, Hong Kong', // EOF
  f021328: 'error, China, Dongguan', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: protocol not supported
  f022130: 'error, Korea, Seodaemun-gu', // stream reset
  f022261: 'error, China, Luzhou', // EOF
  f022287: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.060606060549986476 FIL, balance: 0.055761302709139222 FIL): validation failure
  f022376: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.09999999997465853 FIL, balance: 0.003419950457033383 FIL): not enough funds to execute transaction
  f022395: 'error, USA, Los Angeles', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 9.263662313821484884 FIL, balance: 9.247324167408334375 FIL): validation failure
  f022512: 'error, Canada, Embrun', // EOF
  f022841: 'error, China, Zhongshan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 11.419984826608791163 FIL, balance: 11.338357011046283292 FIL): validation failure
  f022855: 'error, Finland, Helsinki', // AddPiece failed: getting available sector: getting sector number: ERROR: duplicate key value violates unique constraint "sector_actor_id_id_idx" (SQLSTATE 23505)
  f023207: 'error, undefined', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.099999999968769945 FIL, balance: 0.096176172372952721 FIL): not enough funds to execute transaction
  f023490: 'error, Ukraine, Kyiv', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.10030303025890176 FIL, balance: 0.080326434593729173 FIL): not enough funds to execute transaction
  f023565: 'error, China, Fuzhou', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: handler: websocket connection closed
  f023661: 'error, China, Zhejiang', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.035424497713604415 FIL, balance: 0.016454260054526771 FIL): not enough funds to execute transaction
  f024025: 'error, China, Chengdu', // deal failed: (State=26) error calling node: publishing deal: not enough funds (required: 0.09999999998184258 FIL, balance: 0.044037604834337088 FIL): not enough funds to execute transaction
  f024130: 'error, Korea', // deal failed: (State=26) PublishStorageDeal error: PublishStorageDeals errored: failed to load message: blockstore: block not found
  f024526: 'error, Korea', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds including pending messages (required: 0.627883260614740504 FIL, balance: 0.09533579735187667 FIL): validation failure
  f024617: 'error, Korea, Bucheon-si', // EOF
  f024944: 'error, Korea, Yeongdeungpo-dong', // sending proposal to storage provider failed: exhausted 5 attempts but failed to open stream, err: context deadline exceeded
  f029529: 'error, China, Dongguan', // deal failed: (State=26) error calling node: publishing deal: mpool push: failed to push message: not enough funds (required: 0.030303030285911442 FIL, balance: 0.010888855251567979 FIL): not enough funds to execute transaction
  f029649: 'error, China, Beijing', // AddPiece failed: adding piece to sector: writing piece: acquire unsealed sector: local acquire error: couldn't find a suitable path for a sector

  // Dial backoff

  f02540: 'backoff, USA, Rochester',
  f08109: 'backoff, USA, qianyuanyunshuo',
  f010308: 'backoff, Germany, Frankfurt',
  f014464: 'backoff, China, Hangzhou + Singapore',
  f023518: 'backoff, China, Taiyuan',

  // Rejected

  f01152: 'rejected, China, Beijing', // syntax error at /home/gc/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /home/gc/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /home/gc/dealfilter.pl line 17.
  f01154: 'rejected, Sweden, Alvsjo', // no online
  f01235: 'rejected, Singapore, IPFSMain',
  f01243: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  f01291: 'rejected, Sweden, Stockholm, tvsthlm', // sh: 1: dealfilter.pl: not found
  f01475: 'rejected, China, Wuhan + Germany', // getting client market balance failed
  f02421: 'rejected, China, Deyang + Singapore, 腾盛科技', // Deals from client wallet f3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a are not welcome
  f02438: 'rejected, Singapore',
  f02490: 'rejected, China, Fujian', // syntax error at /root/.lotusstorage/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /root/.lotusstorage/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /root/.lotusstorage/dealfilter.pl line 23.
  f02503: 'rejected, China, Wuhan',
  f02520: 'rejected, China, Hong Kong + Dongguan', // Deals from client wallet f3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a are not welcome
  f02613: 'rejected, China, Chongqing',
  f02627: 'rejected, China, Guilin',
  f02838: 'rejected, China, Chengdu, IPFS Harbor-星际港湾',
  f03002: 'rejected, China, Chongqing',
  f03131: 'rejected, China, Changsha',
  f03144: 'rejected, Germany, Frankfurt',
  f03269: 'rejected, Australia', // getting client market balance failed
  f03326: 'rejected, USA, Seattle', // getting client market balance failed
  f03328: 'rejected, China, Xinxiang',
  f03344: 'rejected, China, Guangzhou', // no online
  f03358: 'rejected, Singapore',
  f03362: 'rejected, Germany, Berlin',
  f03367: 'rejected, Singapore',
  f03485: 'rejected, Netherlands', // getting client market balance failed
  f03488: 'rejected, Korea, Geumcheon-gu', // no online
  f03519: 'rejected, USA', // getting client market balance failed
  f08091: 'rejected, USA', // syntax error at /home/gc/dealfilter.pl line 13, near "my "Global symbol "$denylist" requires explicit package name (did you forget to declare "my $denylist"?) at /home/gc/dealfilter.pl line 13.BEGIN not safe after errors--compilation aborted at /home/gc/dealfilter.pl line 17.
  f08103: 'rejected, China, Foshan, 花生酱肠粉',
  f08203: 'rejected, Germany, Frankfurt',
  f08207: 'rejected, Australia, Brisbane',
  f08572: 'rejected, Brazil, Sao Paulo', // getting client market balance failed
  f08985: 'rejected, USA',
  f09037: 'rejected, Singapore',
  f09087: 'rejected, USA',
  f09605: 'rejected, Ukraine, Odessa, Wondertan (combined)',
  f09620: 'rejected, China, Weifang',
  f09642: 'rejected, Sweden, Alvsjo', // no online
  f09652: 'rejected, Singapore',
  f09675: 'rejected, China, Weifang',
  f09710: 'rejected, China, Jieyang',
  f09737: 'rejected, USA, Sudbury',
  f09964: 'rejected, China, Beijing + Jiaxing',
  f010005: 'rejected, China, Zhongshan', // node error getting client market balance failed: resolve address t3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a: actor not found
  f010038: 'rejected, China, Hangzhou + Singapore',
  f010056: 'rejected, Singapore',
  f010225: 'rejected, China, Ordos',
  f010254: 'rejected, Japan, Minamata', // no online
  f010419: 'rejected, China, Sichuan',
  f010491: 'rejected, China, Shenzhen', // no online
  f010538: 'rejected, China, Ordos',
  f010616: 'rejected, China, Ordos + Singapore',
  f014233: 'rejected, China, Shanghai', // no online
  f014251: 'rejected, Singapore',
  f014327: 'rejected, China, Ningbo',
  f014365: 'rejected, Australia, Marrickville + Japan, Heiwajima',
  f014395: 'rejected, China, Dongguan',
  f014472: 'rejected, China, Ningbo',
  f014487: 'rejected, China, Shanghai', // no online
  f014683: 'rejected, China, Shenzhen',
  f014793: 'rejected, China, Hangzhou',
  f014804: 'rejected, China, Ordos',
  f014805: 'rejected, China, Ningbo',
  f014813: 'rejected, China, Hangzhou + USA',
  f015726: 'rejected, China, Qingdao',
  f015737: 'rejected, Brazil, Sao Paulo', // getting client market balance failed
  f015747: 'rejected, Japan, Setagaya-ku',
  f015782: 'rejected, Australia', // getting client market balance failed
  f015861: 'rejected, Ukraine, Odessa',
  f015862: 'rejected, Ukraine, Odessa',
  f015919: 'rejected, China, Ordos',
  f015925: 'rejected, China, Ordos',
  f015942: 'rejected, China, Ningbo',
  f016398: 'rejected, Singapore',
  f016412: 'rejected, China, Taiwan, Taipei', // sh: ../dealfilter.pl: No such file or directory
  f016563: 'rejected, China, Deyang', // Deals from client wallet f3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a are not welcome
  f017229: 'rejected, USA, Portland',
  f019099: 'rejected, China, Hong Kong', // no online
  f019229: 'rejected, USA, Queens', // getting client market balance failed
  f019279: 'rejected, Canada, Calgary',
  f019422: 'rejected, South Africa, Johannesburg', // no online
  f019661: 'rejected, Russia, Pyatigorsk', // 2020-10-09T20:40:55+03:00stdin: {  "Proposal": {    "PieceCID": {      "/": "baga6ea4seaqiznfzxtzzy7mkntdwcguu4g6lmnbs6nmwo5olc7fcgssobsqomoa"    },    "PieceSize": 131072,    "VerifiedDeal": false,    "Client": "f3wr3qwkknvxrpjgrfw3be4cloeohisfddpbfghfulketsul2w4x5iqlh7n6wbs6ybyhkxtloduej2wkikdb4a",    "Provider": "f019661",    "Label": "mAVWg5AIgOxKh6HXpJjbQzg7rG9AkZLKMimM5GGkzYzSLb/EQnX8",    "StartEpoch": 137841,    "EndEpoch": 715483,    "StoragePricePerEpoch": "20000000",    "ProviderCollateral": "0",    "ClientCollateral": "0"  },  "ClientSignature": {    "Type": 2,    "Data": "p0W0EbwMDLHym7e1lSwYQPuiuq8rTIkCB5nDgejvdGk4dSvZTVwVPo5lK+7JUSStAdnBJb9TKJ2DnwNezFPTU+Dz9rG4htKSULBwG3AmeOVlNthbbscPOlOi1E1bHlrj"  },  "ProposalCid": {    "/": "bafyreie3izq6oryqrofs2crc5tbhr7hdlb2ttd7op75hfmr4ygnzk4ntyu"  },  "AddFundsCid": null,  "PublishCid": null,  "Miner": "12D3KooWGapQWB726LTfoWraBZFtt5f35cg9xtzozbUbsAMT69rm",  "Client": "12D3KooWAMNWKJ2R3XvgFmiDY8Xd59C7VNyUCUWe1rVeT5H4zfLF",  "State": 15,  "PiecePath": "",  "MetadataPath": "",  "SlashEpoch": 0,  "FastRetrieval": true,  "Message": "",  "StoreID": 64,  "FundsReserved": "0",  "Ref": {    "TransferType": "graphsync",    "Root": {      "/": "bafk2bzacea5rfipioxusmnwqzyhowg6qerslfdekmm4rq2jtmm2iw37rccox6"    },    "PieceCid": null,    "PieceSize": 0  },  "AvailableForRetrieval": false,  "DealID": 0,  "CreationTime": "2020-10-09T20:40:55.496054914+03:00"}Deal rejected unconditionally in lotus-miner-dealmaking-filter
  f020315: 'rejected, China, Guangzhou', // sh: jq: command not found
  f020378: 'rejected, Bulgaria, Asenovgrad', // sh: 1: /mnt/SSD-Scratch/.lotusminer/dealfilter.pl: not found
  f020648: 'rejected, China, Shenzhen',
  f020742: 'rejected, China, Shanghai + Hangzhou + Shaoxing', // no online
  f020747: 'rejected, China, Xiamen', // sh: 1: dealfilter.pl: not found
  f021316: 'rejected, China, Yangzhou', // sh: 1: /lotus_data/.lotusstorage/dealfilter.pl: not found
  f021695: 'rejected, USA',
  f021714: 'rejected, China, Hong Kong',
  f021976: 'rejected, NR', // getting client market balance failed
  f022374: 'rejected, NR',
  f022399: 'rejected, China, Beijing', // no online
  f022566: 'rejected, China, Nanchong',
  f023462: 'rejected, China, Chengdu',
  f023534: 'rejected, China, Chongqing',
  f023858: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023876: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023928: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023977: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023978: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023980: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023981: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f023983: 'rejected, China, Chongqing',
  f023984: 'rejected, China, Chongqing',
  f024006: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024007: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024008: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024012: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024013: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024014: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024081: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024084: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024085: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024148: 'rejected, China, Fuzhou', // sh: 1: /opt/nebula/lotus_current/miner/dealfilter.pl: Permission denied
  f024611: 'rejected, China, Dongguan', // no online

  // Dial errors

  f01151: 'dial, USA, Waxhaw', // * [/ip4/71.75.239.182/tcp/41372] dial tcp4 0.0.0.0:39581->71.75.239.182:41372: i/o timeout
  f01155: 'dial, China, Shanghai, DianCun Tech', // * [/ip4/203.107.44.156/tcp/39770] dial tcp4 0.0.0.0:41211->203.107.44.156:39770: i/o timeout
  f01236: 'dial, Singapore', // * [/ip4/170.33.12.95/tcp/16666] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNUoXrGukLWgDUR3F1A617D6yT99bzVrKwdUi53uGMKR4, but remote key matches 12D3KooWGijGVP9N8ebcJNNEEPEGDhWbSJbsW2KtWeqVa5MQvTBx
  f01275: 'dial, Korea, Seongnam-si', // * [/ip4/221.163.91.162/tcp/32230] dial tcp4 0.0.0.0:39581->221.163.91.162:32230: i/o timeout
  f01289: 'dial, China, Hangzhou + USA', // * [/ip4/161.117.249.226/tcp/44163] dial tcp4 0.0.0.0:39581->161.117.249.226:44163: i/o timeout  * [/ip4/161.117.88.227/tcp/44163] dial tcp4 0.0.0.0:39581->161.117.88.227:44163: i/o timeout
  f02386: 'dial, Latvia, Riga', // * [/ip4/91.105.126.144/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPV9PbYzkJgaaxaQ2d79RNkJWWjdC5eBXtmLsWAUwqLMT, but remote key matches 12D3KooWBBghMwnobTZP1Buw72KVEuzURgLPUYaq5WRF1wcygy9C
  f02403: 'dial, UK, London, AIM', // * [/ip4/2.58.47.71/tcp/18888] dial tcp4 0.0.0.0:39581->2.58.47.71:18888: i/o timeout  * [/ip4/2.58.45.33/tcp/18888] dial tcp4 0.0.0.0:39581->2.58.45.33:18888: i/o timeout
  f02416: 'dial, China, Guangdong, 星际无限', // * [/ip4/103.142.248.7/tcp/2347] dial tcp4 0.0.0.0:41211->103.142.248.7:2347: i/o timeout
  f02425: 'dial, USA', // * [/ip4/103.78.229.73/tcp/14567] dial tcp4 103.78.229.73:14567: connect: connection refused
  f02492: 'dial, China, Shenzhen', // * [/ip4/103.142.248.7/tcp/3347] dial tcp4 0.0.0.0:41211->103.142.248.7:3347: i/o timeout
  f02516: 'dial, China, Hong Kong', // * [/ip4/119.28.87.115/tcp/2301] dial tcp4 0.0.0.0:39581->119.28.87.115:2301: i/o timeout
  f02528: 'dial, China, Hong Kong + Inner Mongolia', // * [/ip4/8.209.70.199/tcp/58692] dial tcp4 0.0.0.0:39581->8.209.70.199:58692: i/o timeout
  f02533: 'dial, Spain, Terrassa, LowFeeValidation.com', // * [/ip4/2.139.172.201/tcp/8011] dial tcp4 2.139.172.201:8011: connect: connection refused
  f02577: 'dial, China, Hong Kong + Russia, Khabarovsk + Japan, Heiwajima', // * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: connection refused  * [/ip4/66.42.38.110/tcp/9997] dial tcp4 0.0.0.0:39581->66.42.38.110:9997: i/o timeout  * [/ip4/43.243.100.31/tcp/6777] dial tcp4 0.0.0.0:39581->43.243.100.31:6777: i/o timeout
  f02610: 'dial, Netherlands', // * [/ip4/213.227.129.197/tcp/14567] dial tcp4 213.227.129.197:14567: connect: connection refused
  f02632: 'dial, China, Tianjin', // * [/ip4/150.129.138.199/tcp/8518] dial tcp4 0.0.0.0:39581->150.129.138.199:8518: i/o timeout
  f02665: 'dial, Netherlands, Amsterdam, fm-ops', // * [/ip4/139.178.82.157/tcp/15432] dial tcp4 139.178.82.157:15432: connect: connection refused
  f02721: 'dial, USA', // * [/ip4/135.90.74.200/tcp/14567] dial tcp4 0.0.0.0:39581->135.90.74.200:14567: i/o timeout
  f02732: 'dial, USA', // * [/ip4/141.125.99.190/tcp/14567] dial tcp4 0.0.0.0:39581->141.125.99.190:14567: i/o timeout
  f02755: 'dial, China, Shijiazhuang', // * [/ip4/110.249.208.222/tcp/1479] dial tcp4 0.0.0.0:39581->110.249.208.222:1479: i/o timeout
  f03134: 'dial, China, Cangzhou, 乔木信息', // * [/ip4/221.195.3.146/tcp/10240] dial tcp4 221.195.3.146:10240: connect: connection refused
  f03149: 'dial, USA, Newton', // * [/ip6/2600:8803:3000:2430:0:ff:fde6:85d5/tcp/2889] dial tcp6 [2600:8803:3000:2430:0:ff:fde6:85d5]:2889: connect: network is unreachable  * [/ip4/68.102.245.161/tcp/2889] dial tcp4 68.102.245.161:2889: connect: connection refused
  f03276: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/41112] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCErnjDuHG4fe7pGpe8xWGSQPr9Zq9AteTg9kf4QERBFm, but remote key matches 12D3KooWFKKhmTQyDpXH8HFnUZhVjsu2f8r96m5dFkqJnWxFozc5
  f03286: 'dial, China, Mianyang', // * [/ip4/112.44.246.189/tcp/23455] dial tcp4 0.0.0.0:39581->112.44.246.189:23455: i/o timeout
  f03287: 'dial, USA', // * [/ip4/149.81.122.165/tcp/14567] dial tcp4 0.0.0.0:39581->149.81.122.165:14567: i/o timeout
  f03302: 'dial, China, Chengdu', // * [/ip4/182.150.0.20/tcp/5428] dial tcp4 0.0.0.0:41211->182.150.0.20:5428: i/o timeout
  f03305: 'dial, Kenya, Nairobi', // * [/ip4/197.231.176.52/tcp/7000] dial tcp4 0.0.0.0:39581->197.231.176.52:7000: i/o timeout
  f03306: 'dial, Australia', // * [/ip4/103.29.66.54/tcp/7000] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWS33M7NQzLm8d8a5cz7Vo87bRWo1Sad8dCpxNgN8h3HDA, but remote key matches 12D3KooWRAbtemsWN7MjrrJ6KSmfrnGDnWsCtDu4oHH1eLUzD6a6
  f03307: 'dial, Australia', // * [/ip4/47.74.68.141/tcp/7001] dial tcp4 0.0.0.0:39581->47.74.68.141:7001: i/o timeout
  f03312: 'dial, China, Beijing', // * [/ip4/8.210.13.50/tcp/45678] dial tcp4 8.210.13.50:45678: connect: connection refused  * [/ip4/119.161.169.68/tcp/45678] dial tcp4 0.0.0.0:39581->119.161.169.68:45678: i/o timeout
  f03314: 'dial, China, Zhangjiakou-xfr', // * [/ip4/45.113.32.176/tcp/1112] dial tcp4 0.0.0.0:39581->45.113.32.176:1112: i/o timeout
  f03317: 'dial, China, Shenzhen + Hong Kong + Jieyang', // * [/ip4/170.33.12.164/tcp/9090] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPMgigioxtnUsBqwBemuuxjZLKKpfhT3FmrWumyWDkQEd, but remote key matches 12D3KooWDkgbKexne42yFhovBdv7dEnZA4XpXYchEQpvEKpg2qTJ
  f03325: 'dial, Germany, Frankfurt', // * [/ip4/45.9.10.134/tcp/42243] dial tcp4 45.9.10.134:42243: connect: connection refused
  f03337: 'dial, China, Sichuan, 朝日&网科巨力', // * [/ip4/118.116.2.60/tcp/25033] dial tcp4 118.116.2.60:25033: connect: connection refused  * [/ip4/118.116.2.61/tcp/25033] dial tcp4 118.116.2.61:25033: connect: connection refused
  f03359: 'dial, China, Shanghai', // * [/ip4/47.245.138.110/tcp/2347] dial tcp4 0.0.0.0:39581->47.245.138.110:2347: i/o timeout
  f03365: 'dial, China, Wuhan + Wuxi', // * [/ip4/193.118.43.158/tcp/7084] failed to negotiate security protocol: EOF
  f03427: 'dial, Russia, airalab', // * [/ip4/82.148.21.37/tcp/46717] dial tcp4 82.148.21.37:46717: connect: connection refused
  f03512: 'dial, New Zealand, Auckland, NZFILECOIN01', // * [/ip4/122.57.157.167/tcp/4567] dial tcp4 122.57.157.167:4567: connect: connection refused
  f03515: 'dial, China, Dongguan', // * [/ip4/113.105.174.3/tcp/23456] dial tcp4 113.105.174.3:23456: connect: connection refused
  f03523: 'dial, China, Wuxi, YC--wuxi', // * [/ip4/58.215.232.74/tcp/10010] dial tcp4 58.215.232.74:10010: connect: connection refused  * [/ip4/192.168.1.12/tcp/1001] dial tcp4 192.168.1.12:1001: connect: no route to host
  f03630: 'dial, China, Wuhan', // * [/ip4/170.33.12.78/tcp/17000] dial tcp4 0.0.0.0:39581->170.33.12.78:17000: i/o timeout  * [/ip4/170.33.12.186/tcp/17000] dial tcp4 0.0.0.0:39581->170.33.12.186:17000: i/o timeout
  f03702: 'dial, China, Shenzhen + Singapore, LianDongJingLing', // * [/ip4/218.17.190.89/tcp/10240] dial tcp4 0.0.0.0:39581->218.17.190.89:10240: i/o timeout  * [/ip4/8.209.113.21/tcp/7002] dial tcp4 0.0.0.0:39581->8.209.113.21:7002: i/o timeout
  f03766: 'dial, China, Weifang', // * [/ip4/111.17.220.237/tcp/6666] dial tcp4 111.17.220.237:6666: connect: connection refused
  f07806: 'dial, China, Wuhan, HelloXP', // * [/ip4/58.211.11.131/tcp/1024] dial tcp4 58.211.11.131:1024: connect: connection refused
  f07810: 'dial, Korea', // * [/ip4/61.111.129.217/tcp/33333] dial tcp4 61.111.129.217:33333: connect: connection refused
  f07826: 'dial, China, Shenzhen, 星际医生', // * [/ip4/183.12.27.145/tcp/8888] dial tcp4 0.0.0.0:39581->183.12.27.145:8888: i/o timeout
  f07829: 'dial, Japan', // * [/ip4/163.44.165.168/tcp/30222] dial tcp4 0.0.0.0:39581->163.44.165.168:30222: i/o timeout
  f07833: 'dial, China, Changzhou, 星巢', // * [/ip4/107.155.16.239/tcp/20480] dial tcp4 107.155.16.239:20480: connect: connection refused  * [/ip4/107.155.3.37/tcp/20480] dial tcp4 0.0.0.0:39581->107.155.3.37:20480: i/o timeout
  f07851: 'dial, Netherlands, Purmerend', // * [/ip4/212.32.243.209/tcp/2347] dial tcp4 212.32.243.209:2347: connect: connection refused
  f07956: 'dial, Russia', // * [/ip4/91.218.244.253/tcp/10240] dial tcp4 0.0.0.0:39581->91.218.244.253:10240: i/o timeout
  f07961: 'dial, China, Changzhou', // * [/ip4/58.216.209.94/tcp/6666] dial tcp4 58.216.209.94:6666: connect: connection refused
  f07991: 'dial, China, Changsha', // * [/ip4/113.218.133.192/tcp/13470] dial tcp4 0.0.0.0:39581->113.218.133.192:13470: i/o timeout
  f08040: 'dial, Australia, Sydney', // * [/ip4/43.241.189.214/tcp/39438] dial tcp4 0.0.0.0:39581->43.241.189.214:39438: i/o timeout
  f08076: 'dial, Netherlands, Alphen aan den Rijn, Ang', // * [/ip4/143.178.96.190/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFhbSYbTBYSym7mrxXPfFHupE2oG8LZRjwM3smZKwBYWj, but remote key matches 12D3KooWE3jXWnuX7eXFs2FxY3MZRbsftox1NRGf47iPr5CfFi6B
  f08094: 'dial, China, Guangzhou, dongshao', // * [/ip4/183.2.154.179/tcp/23450] dial tcp4 183.2.154.179:23450: connect: connection refused
  f08096: 'dial, China, Wuhan', // * [/ip4/59.175.128.46/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWARwVoXJ6ZjfgKEpyBv1dsEmQhHrPN9UwxxKoFkrAw98A, but remote key matches 12D3KooWCFhmdmduqq59w8CsEgEX2qi9KQqE9wmTHmqC5W4tcEaA
  f08148: 'dial, China, Shanghai', // * [/ip4/103.108.182.27/tcp/30031] dial tcp4 0.0.0.0:39581->103.108.182.27:30031: i/o timeout
  f08150: 'dial, China, Hangzhou', // * [/ip4/115.199.55.127/tcp/23333] dial tcp4 115.199.55.127:23333: connect: connection refused
  f08170: 'dial, China, Jieyang', // * [/ip4/183.240.204.199/tcp/40573] dial tcp4 183.240.204.199:40573: connect: connection refused
  f08220: 'dial, China, Shenzhen', // * [/ip4/183.47.51.62/tcp/10240] dial tcp4 183.47.51.62:10240: connect: connection refused  * [/ip4/192.168.16.48/tcp/5472] dial tcp4 0.0.0.0:39581->192.168.16.48:5472: i/o timeout
  f08240: 'dial, Russia, Novosibirsk, Rabinovitch', // * [/ip4/80.89.156.216/tcp/12128] dial tcp4 80.89.156.216:12128: connect: connection refused
  f08243: 'dial, USA, Queens', // * [/ip4/108.41.171.148/tcp/55244] dial tcp4 0.0.0.0:39581->108.41.171.148:55244: i/o timeout  * [/ip4/108.41.171.148/tcp/55242] dial tcp4 0.0.0.0:39581->108.41.171.148:55242: i/o timeout  * [/ip4/108.41.171.148/tcp/55241] dial tcp4 0.0.0.0:39581->108.41.171.148:55241: i/o timeout  * [/ip4/108.41.171.148/tcp/55243] dial tcp4 0.0.0.0:39581->108.41.171.148:55243: i/o timeout
  f08285: 'dial, Latvia, Riga, stander', // * [/ip4/109.73.97.103/tcp/10240] dial tcp4 0.0.0.0:41211->109.73.97.103:10240: i/o timeout
  f08289: 'dial, Canada, Embrun', // * [/ip4/148.59.149.162/tcp/10240] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWR8hBuB593YUujHBYAT9Zp48FgfzYeLbPdqow59ZF3dFg, but remote key matches 12D3KooWKi8JTyGdSAL1TFpdF6gmyjXeMeknqNWT6Eft1cxrSzAq
  f08301: 'dial, Japan, Setagaya-ku, MEIK', // * [/ip4/126.159.22.156/tcp/50320] dial tcp4 0.0.0.0:39581->126.159.22.156:50320: i/o timeout
  f08338: 'dial, China, Weifang', // * [/ip4/111.17.220.231/tcp/5566] dial tcp4 0.0.0.0:39581->111.17.220.231:5566: i/o timeout
  f08346: 'dial, Korea', // * [/ip4/59.23.202.120/tcp/23233] dial tcp4 59.23.202.120:23233: connect: connection refused
  f08347: 'dial, China, Chengdu', // * [/ip4/222.209.95.29/tcp/6666] dial tcp4 222.209.95.29:6666: connect: connection refused
  f08396: 'dial, France, Fontenay-sous-Bois', // * [/ip4/90.46.50.228/tcp/24002] dial tcp4 90.46.50.228:24002: connect: connection refused
  f08418: 'dial, China, Chansha + USA', // * [/ip4/27.124.10.49/tcp/7003] dial tcp4 27.124.10.49:7003: connect: connection refused
  f08481: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:39581->73.158.16.48:30390: i/o timeout
  f08568: 'dial, USA, Waxhaw, Meatball Part II', // * [/ip4/71.75.239.182/tcp/41372] dial tcp4 0.0.0.0:39581->71.75.239.182:41372: i/o timeout
  f08685: 'dial, China, Fuzhou', // * [/ip4/182.99.0.96/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.96:23450: i/o timeout
  f08917: 'dial, China, Beijing', // * [/ip4/182.61.174.185/tcp/40000] dial tcp4 182.61.174.185:40000: connect: connection refused
  f08928: 'dial, USA, Arlington, theartist', // * [/ip4/69.251.248.175/tcp/6679] dial tcp4 0.0.0.0:39581->69.251.248.175:6679: i/o timeout
  f08937: 'dial, China, Wuxi, YC--wuxi', // * [/ip4/58.215.232.74/tcp/10200] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAG85TzBibt5LjxuTsz9KhWwQCz9ok65oaPcZ2voYaMZA, but remote key matches 12D3KooWSxGj1viupyBBGuwmhBWpdBJDHGEw7BzcUHqzUHXERH59  * [/ip4/192.168.1.18/tcp/1020] dial tcp4 0.0.0.0:39581->192.168.1.18:1020: i/o timeout
  f08953: 'dial, China, Fuzhou', // * [/ip4/182.99.0.100/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.100:23450: i/o timeout
  f08995: 'dial, China, Fuzhou', // * [/ip4/182.99.0.97/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.97:23450: i/o timeout
  f09002: 'dial, Singapore', // * [/ip4/113.200.194.196/tcp/32634] dial tcp4 0.0.0.0:41211->113.200.194.196:32634: i/o timeout
  f09029: 'dial, China, Wuhan', // * [/ip4/59.175.128.46/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWCkJYhKg9uMf2ocRDRxatUWBveJMSdneMamxDmChG2ULv, but remote key matches 12D3KooWCFhmdmduqq59w8CsEgEX2qi9KQqE9wmTHmqC5W4tcEaA
  f09048: 'dial, China, Fuzhou', // * [/ip4/182.99.0.102/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.102:23450: i/o timeout
  f09082: 'dial, Australia, Canberra', // * [/ip4/101.178.36.30/tcp/24004] dial tcp4 0.0.0.0:39581->101.178.36.30:24004: i/o timeout
  f09261: 'dial, Brazil, Sao Paulo', // * [/ip4/169.57.189.187/tcp/7000] dial tcp4 169.57.189.187:7000: connect: connection refused
  f09537: 'dial, USA, El Monte', // * [/ip4/47.145.150.94/tcp/1024] dial tcp4 0.0.0.0:39581->47.145.150.94:1024: i/o timeout
  f09559: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/31001] dial tcp4 0.0.0.0:39581->99.250.201.0:31001: i/o timeout
  f09561: 'dial, China, Beijing', // * [/ip4/36.112.26.4/tcp/3458] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWFp4nbb4eDyUmWaR5XrjSEzdhtHh35ewdwc59e1tkZBcA, but remote key matches 12D3KooWAKXYhFP3mGbaHnCB5GBCvFe8gniGKoDpTbaY8S9FWruH
  f09589: 'dial, China, Changsha', // * [/ip4/113.218.134.132/tcp/5472] dial tcp4 0.0.0.0:39581->113.218.134.132:5472: i/o timeout
  f09619: 'dial, China, Shanghai', // * [/ip4/222.128.87.66/tcp/10240] dial tcp4 222.128.87.66:10240: connect: connection refused
  f09643: 'dial, China, Beijing', // * [/ip4/203.93.121.130/tcp/38886] dial tcp4 203.93.121.130:38886: connect: connection refused
  f09664: 'dial, Australia, Sydney', // * [/ip4/220.238.233.196/tcp/26201] dial tcp4 0.0.0.0:39581->220.238.233.196:26201: i/o timeout
  f09680: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f09704: 'dial, China, Shenzhen', // * [/ip4/218.17.62.49/tcp/31431] dial tcp4 218.17.62.49:31431: connect: connection refused
  f09748: 'dial, China, Tianjin', // * [/ip4/150.129.138.199/tcp/7518] dial tcp4 0.0.0.0:39581->150.129.138.199:7518: i/o timeout
  f09789: 'dial, USA', // * [/ip4/47.242.77.149/tcp/19914] dial tcp4 0.0.0.0:39581->47.242.77.149:19914: i/o timeout
  f09813: 'dial, China, Fuzhou', // * [/ip4/182.99.0.109/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.109:23450: i/o timeout
  f09814: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.99:23450: i/o timeout
  f09817: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.98:23450: i/o timeout
  f09828: 'dial, NR', // * [/ip4/192.168.0.9/tcp/24002] dial tcp4 192.168.0.9:24002: i/o timeout
  f09838: 'dial, Russia, Irkutsk', // * [/ip4/90.188.226.112/tcp/9555] dial tcp4 0.0.0.0:39581->90.188.226.112:9555: i/o timeout
  f09972: 'dial, Finland, Helsinki', // * [/ip4/95.216.99.39/tcp/46717] dial tcp4 0.0.0.0:39581->95.216.99.39:46717: i/o timeout
  f09985: 'dial, China, Qingdao', // * [/ip4/61.147.123.85/tcp/12223] dial tcp4 61.147.123.85:12223: connect: connection refused
  f010020: 'dial, China, Chongqing', // * [/ip4/113.207.109.184/tcp/21735] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWNXhxeBMqYPF56bZExJzcjeiHDaserGs7YYXNgLtLHVvS, but remote key matches 12D3KooWPw6phtaL2ftZq7wQLjc6z1YoVou4BK48ZzXk3TVNVPjK
  f010152: 'dial, Germany-cfa', // * [/ip4/116.202.129.161/tcp/10666] dial tcp4 116.202.129.161:10666: connect: connection refused
  f010223: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12311] dial tcp4 0.0.0.0:39581->47.57.188.137:12311: i/o timeout
  f010230: 'dial, China, Beijing', // * [/ip4/106.55.236.214/tcp/10022] dial tcp4 106.55.236.214:10022: connect: connection refused
  f010274: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.99:23450: i/o timeout
  f010311: 'dial, Korea, Hwaseong-si', // * [/ip4/106.255.239.43/tcp/24002] dial tcp4 0.0.0.0:39581->106.255.239.43:24002: i/o timeout
  f010362: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.35.11/tcp/46717] dial tcp4 0.0.0.0:39581->15.228.35.11:46717: i/o timeout
  f010398: 'dial, Korea, Yeongdeungpo-dong', // * [/ip4/121.140.143.29/tcp/24002] failed to negotiate security protocol: context deadline exceeded
  f010495: 'dial, China, Tainjin', // * [/ip4/150.129.138.199/tcp/8518] dial tcp4 0.0.0.0:39581->150.129.138.199:8518: i/o timeout
  f010527: 'dial, China, Shanghai', // * [/ip4/116.228.53.133/tcp/10240] failed to negotiate security protocol: unexpected EOF
  f010553: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12316] dial tcp4 0.0.0.0:39581->47.57.188.137:12316: i/o timeout
  f010593: 'dial, USA, East Islip', // * [/ip6/2a0a:e5c1:17f::42/tcp/33823] dial tcp6 [2a0a:e5c1:17f::42]:33823: connect: network is unreachable  * [/ip4/74.88.128.118/tcp/41126] dial tcp4 0.0.0.0:39581->74.88.128.118:41126: i/o timeout  * [/ip4/74.88.128.118/tcp/55519] dial tcp4 0.0.0.0:39581->74.88.128.118:55519: i/o timeout
  f010607: 'dial, China, Guangzhou', // * [/ip4/8.210.76.199/tcp/18899] dial tcp4 0.0.0.0:39581->8.210.76.199:18899: i/o timeout
  f010613: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/20002] dial tcp4 0.0.0.0:39581->99.250.201.0:20002: i/o timeout
  f014259: 'dial, China, Fuzhou', // * [/ip4/45.192.184.193/tcp/23450] dial tcp4 0.0.0.0:39581->45.192.184.193:23450: i/o timeout
  f014279: 'dial, Finland, Helsinki', // * [/ip4/95.217.113.188/tcp/12345] dial tcp4 0.0.0.0:39581->95.217.113.188:12345: i/o timeout
  f014311: 'dial, China, Ordos', // * [/ip4/162.62.55.44/tcp/12309] dial tcp4 0.0.0.0:39581->162.62.55.44:12309: i/o timeout
  f014328: 'dial, Canada, Waterloo', // * [/ip4/99.250.201.0/tcp/10003] dial tcp4 99.250.201.0:10003: i/o timeout
  f014379: 'dial, Japan, Ebisunishi', // * [/ip4/106.185.160.30/tcp/55555] dial tcp4 106.185.160.30:55555: connect: connection refused
  f014382: 'dial, Singapore', // * [/ip4/115.236.22.154/tcp/7177] dial tcp4 115.236.22.154:7177: connect: connection refused
  f014392: 'dial, Russia, Khabarovsk + USA + Japan, Heiwajima', // * [/ip4/66.42.38.110/tcp/9990] failed to negotiate security protocol: read tcp4 10.0.1.52:39581->66.42.38.110:9990: read: connection reset by peer  * [/ip4/172.247.228.122/tcp/9999] dial tcp4 172.247.228.122:9999: connect: connection refused  * [/ip4/92.223.72.130/tcp/9999] dial tcp4 92.223.72.130:9999: connect: connection refused
  f014393: 'dial, China, Zhejiang', // * [/ip4/43.227.216.41/tcp/25677] failed to negotiate security protocol: read tcp4 10.0.1.9:39581->43.227.216.41:25677: read: connection reset by peer
  f014415: 'dial, USA', // * [/ip4/13.248.204.157/tcp/38617] failed to negotiate security protocol: EOF
  f014433: 'dial, Singapore', // * [/ip4/170.33.12.186/tcp/7193] dial tcp4 0.0.0.0:39581->170.33.12.186:7193: i/o timeout  * [/ip4/170.33.12.78/tcp/7193] dial tcp4 0.0.0.0:39581->170.33.12.78:7193: i/o timeout
  f014481: 'dial, China, Shanghai', // * [/ip4/103.242.134.36/tcp/12288] failed to negotiate security protocol: read tcp4 10.0.1.9:39581->103.242.134.36:12288: read: connection reset by peer  * [/ip4/170.33.12.118/tcp/12345] dial tcp4 0.0.0.0:39581->170.33.12.118:12345: i/o timeout
  f014522: 'dial, China, Shanghai', // * [/ip4/81.68.170.164/tcp/5474] dial tcp4 0.0.0.0:39581->81.68.170.164:5474: i/o timeout
  f014573: 'dial, China, Fuzhou', // * [/ip4/182.99.0.101/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.101:23450: i/o timeout
  f014634: 'dial, USA, Boardman', // * [/ip4/54.148.63.7/tcp/10240] dial tcp4 0.0.0.0:39581->54.148.63.7:10240: i/o timeout
  f014644: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:39581->73.158.16.48:30390: i/o timeout
  f014782: 'dial, DNS:wlblock.io', // * [/ip4/18.166.30.112/tcp/3456] dial tcp4 18.166.30.112:3456: connect: connection refused
  f014786: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused  * [/ip4/218.85.126.210/tcp/23450] dial tcp4 0.0.0.0:39581->218.85.126.210:23450: i/o timeout
  f014798: 'dial, Brazil, Sao Paulo', // * [/ip4/18.228.119.165/tcp/5101] dial tcp4 0.0.0.0:39581->18.228.119.165:5101: i/o timeout
  f015642: 'dial, China, Fuzhou', // * [/ip4/220.176.125.20/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.20:23450: i/o timeout
  f015643: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12317] dial tcp4 0.0.0.0:39581->47.57.188.137:12317: i/o timeout
  f015662: 'dial, China, Beijing', // * [/ip4/203.93.121.130/tcp/38886] dial tcp4 203.93.121.130:38886: connect: connection refused
  f015731: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12329] dial tcp4 0.0.0.0:39581->8.209.107.150:12329: i/o timeout
  f015733: 'dial, China, Ordos', // * [/ip4/47.57.188.137/tcp/12500] dial tcp4 0.0.0.0:39581->47.57.188.137:12500: i/o timeout
  f015742: 'dial, China, Ningbo', // * [/ip4/149.28.89.24/tcp/7002] dial tcp4 149.28.89.24:7002: connect: connection refused  * [/ip4/45.77.72.195/tcp/7003] dial tcp4 45.77.72.195:7003: connect: no route to host  * [/ip4/141.164.50.170/tcp/7001] dial tcp4 141.164.50.170:7001: connect: connection refused  * [/ip4/45.32.19.57/tcp/7006] dial tcp4 0.0.0.0:39581->45.32.19.57:7006: i/o timeout  * [/ip4/155.138.144.135/tcp/7007] dial tcp4 0.0.0.0:39581->155.138.144.135:7007: i/o timeout  * [/ip4/104.156.230.123/tcp/7004] dial tcp4 0.0.0.0:39581->104.156.230.123:7004: i/o timeout  * [/ip4/45.77.89.14/tcp/7005] dial tcp4 0.0.0.0:39581->45.77.89.14:7005: i/o timeout
  f015757: 'dial, China, Hangzhou', // * [/ip4/103.46.128.45/tcp/57670] dial tcp4 103.46.128.45:57670: connect: connection refused
  f015777: 'dial, Australia, Sydney', // * [/ip4/52.63.43.218/tcp/8888] dial tcp4 0.0.0.0:39581->52.63.43.218:8888: i/o timeout
  f015801: 'dial, Germany, Ismaning', // * [/ip4/88.198.66.42/tcp/443] dial tcp4 88.198.66.42:443: connect: connection refused
  f015806: 'dial, Germany', // * [/ip4/176.9.59.6/tcp/443] dial tcp4 176.9.59.6:443: connect: connection refused
  f015826: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.2:23450: i/o timeout
  f015845: 'dial, China, Fuzhou', // * [/ip4/220.176.125.20/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.20:23450: i/o timeout
  f015848: 'dial, China, Ordos', // * [/ip4/8.209.107.150/tcp/12321] dial tcp4 0.0.0.0:39581->8.209.107.150:12321: i/o timeout
  f015852: 'dial, China, Fuzhou', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:39581->45.192.184.195:23450: i/o timeout
  f015866: 'dial, China, Fuzhou', // * [/ip4/220.176.125.10/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.10:23450: i/o timeout
  f015873: 'dial, China, Fuzhou', // * [/ip4/182.99.0.98/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.98:23450: i/o timeout
  f015897: 'dial, China, Guangdong', // * [/ip4/43.252.149.169/tcp/4001] dial tcp4 0.0.0.0:39581->43.252.149.169:4001: i/o timeout
  f015907: 'dial, Canada, Calgary', // * [/ip4/70.77.238.98/tcp/46717] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPwoUPJMRoyTS4UJTV4jAeYY4raxtAPEw8VAfgENxBSwg, but remote key matches 12D3KooWNPbyqVXuPQQR3vocTMUbjipL95qHxGjoug56do1r2SCZ
  f015914: 'dial, China, Fuzhou', // * [/ip4/182.99.0.99/tcp/23450] dial tcp4 0.0.0.0:39581->182.99.0.99:23450: i/o timeout
  f015922: 'dial, China', // * [/ip4/162.62.55.44/tcp/12317] dial tcp4 0.0.0.0:39581->162.62.55.44:12317: i/o timeout
  f015927: 'dial, USA, East Islip', // * [/ip4/74.90.130.24/tcp/42047] dial tcp4 74.90.130.24:42047: connect: connection refused
  f015928: 'dial, China, Fuzhou', // * [/ip4/220.176.125.3/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.3:23450: i/o timeout
  f015947: 'dial, Finland, Helsinki', // * [/ip4/95.217.114.57/tcp/45381] dial tcp4 95.217.114.57:45381: connect: connection refused
  f016024: 'dial, China, Fuzhou', // * [/ip4/220.176.125.10/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.10:23450: i/o timeout
  f016207: 'dial, China, Xiamen', // * [/ip4/110.80.33.138/tcp/23450] dial tcp4 110.80.33.138:23450: connect: connection refused
  f016263: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f016297: 'dial, China, Mianyang + USA', // * [/ip4/47.254.128.95/tcp/7000] dial tcp4 0.0.0.0:39581->47.254.128.95:7000: i/o timeout  * [/ip4/47.254.25.128/tcp/7000] dial tcp4 0.0.0.0:39581->47.254.25.128:7000: i/o timeout
  f016479: 'dial, China, Dongguan', // * [/ip4/218.16.123.133/tcp/4001] dial tcp4 218.16.123.133:4001: connect: connection refused
  f016579: 'dial, USA, Howell', // * [/ip4/96.64.7.172/tcp/5472] dial tcp4 0.0.0.0:39581->96.64.7.172:5472: i/o timeout
  f016594: 'dial, Germany', // * [/ip4/135.181.62.186/tcp/12345] dial tcp4 0.0.0.0:41211->135.181.62.186:12345: i/o timeout
  f016850: 'dial, Japan', // * [/ip4/163.44.165.168/tcp/30333] dial tcp4 0.0.0.0:39581->163.44.165.168:30333: i/o timeout
  f017038: 'dial, China, Fuzhou', // * [/ip4/220.176.125.2/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.2:23450: i/o timeout
  f017136: 'dial, Australia, Sydney', // * [/ip4/43.245.162.237/tcp/18375] dial tcp4 43.245.162.237:18375: connect: no route to host
  f017194: 'dial, China, Hefei', // * [/ip4/36.33.216.70/tcp/10240] dial tcp4 0.0.0.0:39581->36.33.216.70:10240: i/o timeout
  f017250: 'dial, China, Zhejiang', // * [/ip4/161.117.88.227/tcp/35252] dial tcp4 0.0.0.0:39581->161.117.88.227:35252: i/o timeout
  f017273: 'dial, China, Liaoning', // * [/ip4/116.132.221.10/tcp/10241] dial tcp4 116.132.221.10:10241: connect: connection refused
  f017635: 'dial, China, Nanchong', // * [/ip4/124.161.87.252/tcp/32005] dial tcp4 0.0.0.0:39581->124.161.87.252:32005: i/o timeout
  f017970: 'dial, China, Baoding', // * [/ip4/222.222.135.67/tcp/37745] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWQAvQySCpQrXHEkh1jcibHA22Cy9nhRkpUjaWbzfgPgfP, but remote key matches 12D3KooWELAAU6d479HNnEPR7npHYZKokeRMeECntLAsh929bgMZ
  f018088: 'dial, USA, Mountain View', // * [/ip6/2601:647:4700:7e:8d28:74f1:99b6:9807/tcp/36371] dial tcp6 [2601:647:4700:7e:8d28:74f1:99b6:9807]:36371: connect: network is unreachable  * [/ip4/127.0.0.1/tcp/41941] dial tcp4 127.0.0.1:41941: connect: connection refused  * [/ip6/::1/tcp/36371] dial tcp6 [::1]:36371: connect: connection refused  * [/ip4/73.158.190.21/tcp/52286] dial tcp4 0.0.0.0:39581->73.158.190.21:52286: i/o timeout  * [/ip4/73.158.190.21/tcp/39083] dial tcp4 0.0.0.0:39581->73.158.190.21:39083: i/o timeout  * [/ip4/192.168.86.244/tcp/41941] dial tcp4 0.0.0.0:39581->192.168.86.244:41941: i/o timeout
  f018119: 'dial, China, Dongguan', // * [/ip4/113.105.174.9/tcp/10000] dial tcp4 0.0.0.0:39581->113.105.174.9:10000: i/o timeout
  f018429: 'dial, Korea, Hwaseong-si', // * [/ip4/112.222.105.76/tcp/24102] dial tcp4 112.222.105.76:24102: i/o timeout
  f018493: 'dial, Denmark, Kobenhavn S', // * [/ip4/185.50.195.183/tcp/10243] dial tcp4 0.0.0.0:39581->185.50.195.183:10243: i/o timeout
  f018506: 'dial, USA, New York', // * [/ip4/47.254.77.92/tcp/41112] failed to negotiate security protocol: EOF
  f018540: 'dial, Netherlands', // * [/ip4/185.232.59.178/tcp/3347] dial tcp4 185.232.59.178:3347: connect: connection refused
  f018544: 'dial, Korea, Uijeongbu-si', // * [/ip4/119.193.190.72/tcp/5472] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWGgihyz3aZvtSpXyZLtarqMxESor6KXzEp3poz8DRwTuZ, but remote key matches 12D3KooWBhrQUQC5gWtHeRNS1V7ThxEv4hKLCk8Z4PZNy7T1oruT
  f018806: 'dial, Finland, Helsinki', // * [/ip4/95.217.114.57/tcp/45381] dial tcp4 0.0.0.0:39581->95.217.114.57:45381: i/o timeout
  f018905: 'dial, Brazil, Sao Paulo', // * [/ip4/18.228.17.31/tcp/2347] dial tcp4 0.0.0.0:39581->18.228.17.31:2347: i/o timeout
  f019006: 'dial, Vietman, Ho Chi Minh City + China, Hong Kong', // * [/ip4/119.28.141.16/tcp/2312] dial tcp4 119.28.141.16:2312: connect: connection refused
  f019022: "dial, China, Xi'an", // * [/ip4/113.200.105.8/tcp/1347] dial tcp4 113.200.105.8:1347: connect: connection refused
  f019029: 'dial, Serbia, Boljevac', // * [/ip4/178.220.25.96/tcp/46717] dial tcp4 0.0.0.0:41211->178.220.25.96:46717: i/o timeout  * [/ip4/109.92.96.31/tcp/46717] dial tcp4 0.0.0.0:41211->109.92.96.31:46717: i/o timeout
  f019056: 'dial, South Africa, Cape Town', // * [/ip4/13.244.216.178/tcp/16079] dial tcp4 0.0.0.0:39581->13.244.216.178:16079: i/o timeout
  f019068: "dial, China, Ya'an, fri", // * [/ip4/110.188.25.2/tcp/30032] dial tcp4 110.188.25.2:30032: connect: connection refused
  f019071: 'dial, USA, New York', // * [/ip4/45.61.255.21/tcp/12345] dial tcp4 0.0.0.0:39581->45.61.255.21:12345: i/o timeout
  f019097: 'dial, Russia, Irkutsk', // * [/ip4/90.188.227.20/tcp/46717] dial tcp4 90.188.227.20:46717: i/o timeout
  f019145: 'dial, Brazil, Sao Paulo', // * [/ip4/54.232.153.175/tcp/16088] dial tcp4 0.0.0.0:39581->54.232.153.175:16088: i/o timeout
  f019169: 'dial, Brazil, Sao Paulo', // * [/ip4/15.228.40.58/tcp/14567] dial tcp4 0.0.0.0:39581->15.228.40.58:14567: i/o timeout
  f019174: 'dial, UK, Halifax', // * [/ip4/185.177.124.24/tcp/42012] dial tcp4 185.177.124.24:42012: connect: connection refused
  f019196: 'dial, China, Shenzhen + Hong Kong', // * [/ip4/103.44.247.132/tcp/51101] dial tcp4 103.44.247.132:51101: connect: connection refused  * [/ip4/115.91.38.15/tcp/51101] dial tcp4 0.0.0.0:39581->115.91.38.15:51101: i/o timeout
  f019240: 'dial, China, Beijing', // * [/ip4/36.112.26.4/tcp/3458] dial tcp4 36.112.26.4:3458: connect: connection refused
  f019249: 'dial, USA, Council Bluffs', // * [/ip4/35.224.87.15/tcp/24002] dial tcp4 35.224.87.15:24002: connect: connection refused
  f019281: 'dial, South Africa, Johannesburg', // * [/ip4/45.192.184.195/tcp/23450] dial tcp4 0.0.0.0:39581->45.192.184.195:23450: i/o timeout
  f019325: 'dial, China, Chongqing', // * [/ip4/101.206.156.204/tcp/15090] dial tcp4 0.0.0.0:39581->101.206.156.204:15090: i/o timeout
  f019551: 'dial, UK', // * [/ip6/2a04:7340:0:1002::205/tcp/1347] dial tcp6 [2a04:7340:0:1002::205]:1347: connect: network is unreachable  * [/ip4/185.37.216.70/tcp/1347] dial tcp4 185.37.216.70:1347: connect: connection refused
  f019596: 'dial, USA, Queens', // * [/ip4/24.90.181.106/tcp/24002] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWJ7XhEorySoQkEyajCdcsr9qcesafyFqS8apNeWwF26Ke, but remote key matches 12D3KooWHcpqZ9Ps8cXHk2JaQVqAhjC7cPiLM14YKTmfAXT1LN3M
  f019637: 'dial, China, Nanchang', // * [/ip4/220.176.125.4/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.4:23450: i/o timeout
  f019660: 'dial, South Korea, Cheonan', // * [/ip4/112.167.204.88/tcp/10241] dial tcp4 112.167.204.88:10241: connect: connection refused
  f019710: 'dial, Australia, Sydney', // * [/ip4/13.55.45.217/tcp/27002] dial tcp4 0.0.0.0:39581->13.55.45.217:27002: i/o timeout
  f019779: 'dial, China, Xuancheng', // * [/ip4/117.71.104.68/tcp/10000] dial tcp4 117.71.104.68:10000: connect: connection refused
  f020330: 'dial, USA', // * [/ip4/10.10.33.155/tcp/14567] dial tcp4 0.0.0.0:39581->10.10.33.155:14567: i/o timeout
  f020331: 'dial, USA', // * [/ip4/10.10.11.81/tcp/14567] dial tcp4 0.0.0.0:39581->10.10.11.81:14567: i/o timeout
  f020388: 'dial, Korea, Uijeongbu-si', // * [/ip4/119.193.190.72/tcp/5472] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWPdmxWWt6PobzkuCgUsUZwyDYM9TGnvAu38rnd4TshTLZ, but remote key matches 12D3KooWBhrQUQC5gWtHeRNS1V7ThxEv4hKLCk8Z4PZNy7T1oruT
  f020401: 'dial, USA, Raleigh', // * [/ip4/136.56.12.204/tcp/27972] dial tcp4 136.56.12.204:27972: i/o timeout
  f020431: 'dial, Korea, Seoul', // * [/ip4/125.128.51.180/tcp/24001] dial tcp4 125.128.51.180:24001: connect: no route to host
  f020604: 'dial, Singapore', // * [/ip4/8.209.106.203/tcp/14567] dial tcp4 0.0.0.0:39581->8.209.106.203:14567: i/o timeout
  f020622: 'dial, China, Hong Kong', // * [/ip4/43.228.183.102/tcp/40573] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWHF5unBQ9CuS2jnnxCzvRHGiMMQbH487tbfoGUAvhY4ik, but remote key matches 12D3KooWQzhuFoqWfap5FT3hD9jTSc1wiP3Sn735mstACYiPuw75
  f020814: 'dial, China, Dongguan', // * [/ip4/183.63.203.161/tcp/11051] dial tcp4 183.63.203.161:11051: i/o timeout
  f020891: 'dial, China, Wenzhou', // * [/ip4/122.228.196.208/tcp/24001] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWSitZhuvzGB9mxZvC1rN6ubezTJUrHV2nXxWaBvJQ1Bji, but remote key matches 12D3KooWDLC4HXzHjaMegLssFx9HwMmyNzhGc4XmcSSP9rZaSFyv
  f021142: 'dial, China, Fuzhou', // * [/ip4/220.176.125.110/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.110:23450: i/o timeout
  f021428: 'dial, Norway, Borgen', // * [/ip4/79.160.78.193/tcp/1347] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWAgRs1gYFCWPQopKBh3nZPDfq3yJ7gjyvvmd9dpyw7mHH, but remote key matches 12D3KooWDaYp2U3XiDeYvXVruQ5BwGUxwobQA62fASdvZGZVb4n8
  f021463: 'dial, China, Mianyang', // * [/ip4/117.175.0.194/tcp/18181] dial tcp4 117.175.0.194:18181: connect: connection refused
  f021483: 'dial, China, Beijing', // * [/ip4/124.250.42.202/tcp/24567] dial tcp4 124.250.42.202:24567: connect: connection refused
  f021536: 'dial, NR', // * [/ip4/183.2.157.247/tcp/7000] dial tcp4 0.0.0.0:39581->183.2.157.247:7000: i/o timeout  * [/ip4/172.20.4.158/tcp/7000] dial tcp4 0.0.0.0:39581->172.20.4.158:7000: i/o timeout
  f021644: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/30390] dial tcp4 0.0.0.0:39581->73.158.16.48:30390: i/o timeout
  f022111: 'dial, China, Quanzhou', // * [/ip4/112.47.13.98/tcp/8081] dial tcp4 112.47.13.98:8081: connect: connection refused
  f022122: 'dial, NR', // * [/ip6/::1/tcp/36657] dial tcp6 [::1]:36657: connect: connection refused  * [/ip4/127.0.0.1/tcp/44189] dial tcp4 127.0.0.1:44189: connect: connection refused  * [/ip4/110.185.107.22/tcp/44189] dial tcp4 0.0.0.0:39581->110.185.107.22:44189: i/o timeout  * [/ip4/172.16.8.107/tcp/44189] dial tcp4 0.0.0.0:39581->172.16.8.107:44189: i/o timeout
  f022157: 'dial, China, Fuzhou', // * [/ip4/220.176.125.5/tcp/23450] dial tcp4 0.0.0.0:39581->220.176.125.5:23450: i/o timeout
  f022351: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.97/tcp/24001] dial tcp4 211.114.218.97:24001: connect: connection refused
  f022517: 'dial, China, Taiwan, Taipei', // * [/ip4/1.171.68.64/tcp/41447] dial tcp4 0.0.0.0:39581->1.171.68.64:41447: i/o timeout
  f022522: 'dial, China, Dongguan', // * [/ip4/113.105.174.12/tcp/10000] dial tcp4 113.105.174.12:10000: connect: connection refused
  f022687: 'dial, China, Chengdu', // * [/ip4/182.131.4.194/tcp/10080] dial tcp4 182.131.4.194:10080: connect: connection refused
  f022787: 'dial, Korea, Guri-si', // * [/ip4/211.114.218.99/tcp/24001] dial tcp4 0.0.0.0:39581->211.114.218.99:24001: i/o timeout
  f022820: 'dial, China, Guangdong', // * [/ip4/183.232.116.200/tcp/4001] dial tcp4 183.232.116.200:4001: connect: connection refused
  f023009: 'dial, USA, Berkeley', // * [/ip4/73.158.16.48/tcp/24001] dial tcp4 0.0.0.0:39581->73.158.16.48:24001: i/o timeout
  f023016: 'dial, NR', // * [/ip4/10.6.1.121/tcp/61121] dial tcp4 10.6.1.121:61121: i/o timeout
  f023152: 'dial, China, Quanzhou', // * [/ip4/112.47.13.98/tcp/32759] dial tcp4 0.0.0.0:39581->112.47.13.98:32759: i/o timeout
  f023202: 'dial, China, Wuxi', // * [/ip4/58.215.232.74/tcp/10200] failed to negotiate security protocol: peer id mismatch: expected 12D3KooWBrUUKAXnschtUgweFhcqt4dEMRkaToUH6hpWxwviM3d2, but remote key matches 12D3KooWSxGj1viupyBBGuwmhBWpdBJDHGEw7BzcUHqzUHXERH59  * [/ip4/192.168.1.18/tcp/1020] dial tcp4 0.0.0.0:39581->192.168.1.18:1020: i/o timeout
  f023561: 'dial, China, Shenzhen', // * [/ip4/127.0.0.1/tcp/40573] dial tcp4 127.0.0.1:40573: connect: connection refused
  f023586: 'dial, USA, Germantown', // * [/ip4/96.255.216.221/tcp/23432] dial tcp4 0.0.0.0:39581->96.255.216.221:23432: i/o timeout
  f023654: 'dial, China, Hong Kong', // * [/ip4/103.100.152.118/tcp/24001] dial tcp4 103.100.152.118:24001: i/o timeout
  f023674: 'dial, China, Fuzhou', // * [/ip4/220.176.125.99/tcp/23450] dial tcp4 220.176.125.99:23450: connect: connection refused
  f023826: 'dial, USA, Germantown', // * [/ip4/96.255.216.221/tcp/23432] dial tcp4 0.0.0.0:39581->96.255.216.221:23432: i/o timeout
  f023882: 'dial, NR', // * [/ip4/192.168.223.128/tcp/7000] dial tcp4 192.168.223.128:7000: connect: no route to host  * [/ip4/119.6.226.2/tcp/2048] dial tcp4 0.0.0.0:39581->119.6.226.2:2048: i/o timeout  * [/ip4/10.21.0.2/tcp/7000] dial tcp4 0.0.0.0:39581->10.21.0.2:7000: i/o timeout  * [/ip4/119.6.226.2/tcp/2052] dial tcp4 0.0.0.0:39581->119.6.226.2:2052: i/o timeout
  f023937: 'dial, China, Fuzhou', // * [/ip4/220.176.125.99/tcp/23450] dial tcp4 220.176.125.99:23450: connect: connection refused
  f024030: 'dial, Korea, Gwangju', // * [/ip4/121.148.37.39/tcp/42055] dial tcp4 121.148.37.39:42055: connect: connection refused
  f024108: 'dial, Korea', // * [/ip4/59.23.202.120/tcp/23234] dial tcp4 59.23.202.120:23234: connect: connection refused
  f024182: 'dial, NR', // * [/ip4/14.136.246.135/tcp/46717] dial tcp4 0.0.0.0:39581->14.136.246.135:46717: i/o timeout
  f024511: 'dial, NR', // * [/ip4/103.44.247.137/tcp/51105] dial tcp4 0.0.0.0:39581->103.44.247.137:51105: i/o timeout
  f024986: 'dial, China, Zhongshan', // * [/ip4/192.168.2.64/tcp/3000] dial tcp4 0.0.0.0:39581->192.168.2.64:3000: i/o timeout
  f029344: 'dial, Korea, Seongnam-si', // * [/ip4/221.163.91.162/tcp/33230] dial tcp4 0.0.0.0:39581->221.163.91.162:33230: i/o timeout
  f029412: 'dial, China, Hefei', // * [/ip4/36.33.216.78/tcp/10240] dial tcp4 36.33.216.78:10240: connect: no route to host
  f029425: 'dial, NR', // * [/ip4/61.155.145.133/tcp/8086] dial tcp4 61.155.145.133:8086: connect: connection refused

  // XNR (Not routable)

  f01001: 'xnr, NR - bootstrap',
  f01002: 'xnr, NR - bootstrap',
  f01102: 'xnr, China, Shandong',
  f01232: 'xnr, China, Hangzhou',
  f02385: 'xnr, USA, East Islip',
  f02404: 'xnr, Korea, Seoul',
  f02515: 'xnr, China, Hangzhou',
  f02608: 'xnr, USA, San Jose',
  f02775: 'xnr, China, Hong Kong',
  f03249: 'xnr, NR',
  f03341: 'xnr, NR',
  f03361: 'xnr, China, Guangzhou',
  f03487: 'xnr, China, Yibin',
  f04444: 'xnr, NR',
  f07717: 'xnr, China, Shenyang',
  f07796: 'xnr, China, Hunan',
  f07866: 'xnr, China, Foshan',
  f07931: 'xnr, NR',
  f07959: 'xnr, NR',
  f08053: 'xnr, NR',
  f08097: 'xnr, Korea, Pyeongtaek-si',
  f08171: 'xnr, NR',
  f08183: 'xnr, USA, Irvine',
  f08225: 'xnr, Australia, Sydney',
  f08246: 'xnr, USA',
  f08290: 'xnr, NR',
  f08315: 'xnr, China, Chongqing',
  f08319: 'xnr, NR',
  f08322: 'xnr, China, Chongqing',
  f08349: 'xnr, China, Guangzhou, hkicloud',
  f08361: 'xnr, Malaysia, Kulai',
  f08390: 'xnr, China, Shenzhen',
  f08393: 'xnr, NR',
  f08402: 'xnr, China, Sichuan',
  f08425: 'xnr, NR',
  f08429: 'xnr, yfeing',
  f08574: 'xnr, USA',
  f08787: 'xnr, China, Yibin',
  f08789: 'xnr, China, Fuzhou',
  f08902: 'xnr, NR',
  f08980: 'xnr, USA, San Jose',
  f09006: 'xnr, NR',
  f09529: 'xnr, NR',
  f09594: 'xnr, NR',
  f09712: 'xnr, China, Chengdu',
  f09719: 'xnr, Korea, Geumcheon-gu',
  f09762: 'xnr, China, Guangdong',
  f09912: 'xnr, USA, Concord',
  f09966: 'xnr, NR',
  f010028: 'xnr, USA, Berkeley',
  f010078: 'xnr, China, Zhangjiakou + Hong Kong',
  f010222: 'xnr, NR',
  f010265: 'xnr, China, Zhengzhou',
  f010275: 'xnr, Korea, Cheongju-si + USA',
  f010277: 'xnr, France, Fontenay-sous-Bois',
  f010281: 'xnr, China, Shanghai',
  f010282: 'xnr, USA, San Francisco',
  f010297: 'xnr, USA, Howell',
  f010303: 'xnr, China, Guangdong',
  f010305: 'xnr, NR',
  f010310: 'xnr, Canada, Surrey',
  f010382: 'xnr, NR',
  f010425: 'xnr, NR',
  f010453: 'xnr, China, Shaanxi',
  f010517: 'xnr, China, Chongqing',
  f010542: 'xnr, China, Ordos',
  f010551: 'xnr, China, Shenyang',
  f010566: 'xnr, NR',
  f010591: 'xnr, China, Wuhan',
  f010601: 'xnr, NR',
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
  f015932: 'xnr, NR',
  f016140: 'xnr, China, Beijing',
  f016162: 'xnr, France, Borgo',
  f016203: 'xnr, China, Chengdu',
  f016217: 'xnr, China, Nanchong',
  f016276: 'xnr, China, Beijing',
  f016304: 'xnr, USA, Boardman',
  f016408: 'xnr, NR',
  f016426: 'xnr, NR',
  f016456: 'xnr, China, Zhejiang',
  f016482: 'xnr, USA, Aliquippa',
  f016688: 'xnr, Germany, Frankfurt',
  f016859: 'xnr, NR',
  f017171: 'xnr, NR',
  f017209: 'xnr, NR',
  f017215: 'xnr, Finland',
  f017216: 'xnr, NR',
  f017251: 'xnr, USA',
  f017430: 'xnr, Australia, Alexandria-cfa',
  f017628: 'xnr, Brazil, Sao Paulo',
  f017655: 'xnr, NR',
  f018081: 'xnr, Germany',
  f018095: 'xnr, Colombia, Medellin',
  f018128: 'xnr, China, Dongguan',
  f018164: 'xnr, USA, Howell',
  f018369: 'xnr, NR',
  f018425: 'xnr, USA, Howell',
  f018437: 'xnr, NR',
  f018441: 'xnr, USA',
  f018474: 'xnr, China, Xiamen',
  f018484: 'xnr, China, Shanghai',
  f018517: 'xnr, USA, Columbus',
  f018520: 'xnr, China',
  f018537: 'xnr, China, Shaanxi',
  f018761: 'xnr, Russia, St. Petersburg',
  f018790: 'xnr, China, Chengdu',
  f018812: 'xnr, South Africa, Cape Town',
  f018837: 'xnr, China, Shaanxi',
  f018865: 'xnr, China, Chengdu',
  f018879: 'xnr, Korea, Geumcheon-gu',
  f019024: 'xnr, China, Sichuan',
  f019042: 'xnr, China, Shanghai',
  f019160: 'xnr, USA, Fremont',
  f019184: 'xnr, China, Yibin',
  f019264: 'xnr, NR',
  f019284: 'xnr, China, Foshan',
  f019525: 'xnr, USA, Berkeley',
  f019734: 'xnr, NR',
  f019757: 'xnr, NR',
  f019809: 'xnr, NR',
  f020241: 'xnr, NR',
  f020352: 'xnr, NR',
  f020361: 'xnr, Colombia, Medellin',
  f020369: 'xnr, NR',
  f020439: 'xnr, China, Chengdu',
  f020451: 'xnr, NR',
  f020457: 'xnr, NR',
  f020559: 'xnr, China, Liaoning',
  f020682: 'xnr, NR',
  f020691: 'xnr, NR',
  f020791: 'xnr, China, Hangzhou',
  f020934: 'xnr, NR',
  f020940: 'xnr, @fu',
  f020975: 'xnr, China, Shandong',
  f021286: 'xnr, China, Shaanxi',
  f021307: 'xnr, China, Chengdu',
  f021311: 'xnr, NR',
  f021337: 'xnr, China, Beijing',
  f021418: 'xnr, NR',
  f021500: 'xnr, NR',
  f021504: 'xnr, NR',
  f021505: 'xnr, NR',
  f021509: 'xnr, China, Fuzhou',
  f021555: 'xnr, NR',
  f021684: 'xnr, NR',
  f021699: 'xnr, NR',
  f022033: 'xnr, NR',
  f022038: 'xnr, NR',
  f022093: 'xnr, NR',
  f022250: 'xnr, NR',
  f022321: 'xnr, China, Hong Kong',
  f022333: 'xnr, China, Dongguan',
  f022336: 'xnr, NR',
  f022337: 'xnr, NR',
  f022338: 'xnr, NR',
  f022343: 'xnr, China, Dongguan',
  f022372: 'xnr, China, Chengdu',
  f022494: 'xnr, China, Dongguan',
  f022503: 'xnr, NR',
  f022562: 'xnr, NR',
  f022564: 'xnr, NR',
  f022683: 'xnr, NR',
  f022755: 'xnr, China, Shenzhen',
  f022776: 'xnr, Korea, Guri-si',
  f022786: 'xnr, NR',
  f022797: 'xnr, NR',
  f022804: 'xnr, China, Yibin',
  f022836: 'xnr, China, Chongqing',
  f022838: 'xnr, China, Hong Kong',
  f022857: 'xnr, NR',
  f022906: 'xnr, NR',
  f022954: 'xnr, NR',
  f022969: 'xnr, China, Chengdu',
  f022970: 'xnr, NR',
  f023001: 'xnr, China, Changsha',
  f023021: 'xnr, Korea, Yeongdeungpo-dong',
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
