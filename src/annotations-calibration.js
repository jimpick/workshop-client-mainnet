const annotations = {
  // Active
  t03864: 'active, China, Guilin, 512M, 6h, wed',
  t03897: 'active, China, Beijing, 32G, 16h, wed',
  t04030: 'active, China, Beijing, 512M, 7h, tue, wed',
  t04251: 'active, Canada, Vancouver, 512M, @jimpick, 1h, 1h, wed',
  t04303: 'active, USA, Boardman, 512M, 1h, wed',
  t04305: 'active, USA, Boardman, 512M, 1h, wed',
  t04533: 'active, China, Shenzhen, 512M, 2h, wed',
  t04576: 'active, China, Foshan, 512M, 2h, wed',

  // New, sealing, recycle
  t01852: 'sealing, China, Shenzhen, 64G, tue',
  t02090: 'sealing, China, Guangzhou, 32G, tue',
  t02334: 'sealing, China, Guilin, 512M, tue, wed',
  t02415: 'sealing, China, Foshan, 32G, tue',
  t02603: 'sealing, China, Shenzhen, 64G, tue',
  t02614: 'sealing, Canada, Stratford, 32G, tue',
  t03172: 'sealing, China, Wuxi, 32G, tue',
  t03404: 'sealing, China, Wuhan, 32G, tue',
  t03535: 'sealing, China, Guangdong, 512M, tue, wed',
  t03849: 'sealing, China, Shanghai, 32G, tue',
  t03852: 'sealing, China, Wuhan, 32G, tue',
  t04007: 'sealing, USA, San Jose, 32G, tue',
  t04071: 'sealing, Brazil, Sao Paulo, 32G, tue',
  t04075: 'sealing, Canada, 32G, tue',
  t04076: 'sealing, China, Guilin, 32G, tue',
  t04089: 'sealing, China, Zhongshan, 32G, tue',
  t04115: 'sealing, Korea, Gwangju, 64G, tue',
  t04163: 'sealing, China, Beijing, 32G, tue',
  t04297: 'sealing, Germany, Frankfurt am Main, 64G, tue',
  t04302: 'sealing, China, Shenzhem, 32G, tue',
  t04411: 'sealing, China, Foshan, 32G, tue',
  t04417: 'sealing, Korea, Seoul, 32G, tue',
  t04420: 'sealing, China, Changsha, 32G, tue',
  t04421: 'sealing, China, Shenzhen, 32G, tue',
  t04451: 'sealing, China, Shenzhen, 32G, tue',
  t04458: 'sealing, Netherlands + USA, Dallas, 32G, tue',
  t04480: 'sealing, China, Changsha, 32G, tue',
  t04501: 'sealing, China, Changsha, 32G, tue',
  t04610: 'sealing, China, Hangzhou, 512M, wed',
  t04622: 'sealing, China, Shenzhen, 512M, wed',
  t04663: 'sealing, China, Changsha, 512M, wed',
  t04723: 'sealing, China, Chengdu, 32G, wed',
  t04777: 'sealing, Korea, Geumcheon-gu, 512M, wed',
  t04780: 'sealing, Korea, Guro-gu, 512M, wed',
  t04794: 'sealing, USA, San Jose, 32G, wed',
  t04894: 'sealing, China, Yibin, 512M, wed',
  t04903: 'sealing, China, Zhongshan, 512M, wed',
  t04916: 'sealing, China, Chengdu, 32G, wed',
  t04927: 'sealing, Brazil, Sao Paulo, 32G, wed',


  // Asks

  // Error
  t04304: 'error, USA, Boardman, 512M', // failed getting peer ID: (get ssize) failed to load miner actor state: read actor head: cbor input had wrong number of fields
  t02200: 'error, USA+China, Galveston+Guangdong, 32G', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: RPC error (-32700): unmarshaling params for 'Filecoin.AddPiece' (param: *io.Reader): json: cannot unmarshal object into Go value of type io.Reader
  t04388: 'error, China, Guangong, 512M, tue', // failed to initiate data transfer: deal data transfer failed

  // Stuck
  t01910: 'error, China, Shijiazhuang, 512M', // StorageDealCheckForAcceptance
  t02150: 'error, China, Hong Kong, 512M', // StorageDealCheckForAcceptance
  t03850: 'error, China, Beijing, 512M, 2h, wed', // transferring
  t03996: 'error, Poland, Krakow, 512M, @magik6k, tue, wed', // cfa
  t04147: 'error, China, Beijing, 64G', // StorageDealCheckForAcceptance
  t04174: 'error, USA, Sandpoint, 512M, @why, tue', // StorageDealCheckForAcceptance
  t04695: 'error, China, Shenzhen, 32G, wed', // cfa
  t04791: 'error, China, Shenzhen, 512M, wed', // cfa
 
  // XNR

  // NR
  t01680: 'NR, Latvia, Riga, 512M',
  t02930: 'NR, China, Chongqing, 32G',
  t03662: 'NR, China, Shaanxi, 512M, 2h, tue',
  t03889: 'NR, China, Foshan, 512M',
  t03944: 'NR, China, Chengdu, 512M, 2h',
  t04051: 'NR, China, Chengdu, 32G',
  t04063: 'NR, China, Yibin, 512M, tue',
  t04086: 'NR, China, Shenyang, 512M, 16h, 6h',
  t04223: 'NR, USA, Boardman, 512M, @hannah, 1h',
  t04459: 'NR, China, Shenzhen, 512M',
  t04486: 'NR, China, Changsha, 512M',


  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
}

export default annotations
