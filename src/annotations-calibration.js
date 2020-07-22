const annotations = {
  // Active
  t03662: 'active, China, Shaanxi, 512M, 2h, tue',
  t03850: 'active, China, Beijing, 512M, 2h',
  t04030: 'active, China, Beijing, 512M, 7h, tue',
  t04251: 'active, Canada, Vancouver, 512M, @jimpick, 1h, tue',

  // New, sealing, recycle
  t01852: 'sealing, China, Shenzhen, 64G, tue',
  t02090: 'sealing, China, Guangzhou, 32G, tue',
  t02334: 'sealing, China, Guilin, 512M, tue',
  t02415: 'sealing, China, Foshan, 32G, tue',
  t02603: 'sealing, China, Shenzhen, 64G, tue',
  t02614: 'sealing, Canada, Stratford, 32G, tue',
  t03172: 'sealing, China, Wuxi, 32G, tue',
  t03404: 'sealing, China, Wuhan, 32G, tue',
  t03535: 'sealing, China, Guangdong, 512M, tue',
  t03849: 'sealing, China, Shanghai, 32G, tue',
  t03852: 'sealing, China, Wuhan, 32G, tue',
  t03864: 'sealing, China, Guilin, 512M, tue',
  t03897: 'sealing, China, Beijing, 32G, tue',
  t03944: 'sealing, China, Chengdu, 512M, tue',
  t03996: 'sealing, Poland, Krakow, 512M, @magik6k, tue',
  t04007: 'sealing, USA, San Jose, 32G, tue',
  t04063: 'sealing, China, Yibin, 512M, tue',
  t04071: 'sealing, Brazil, Sao Paulo, 32G, tue',
  t04075: 'sealing, Canada, 32G, tue',
  t04076: 'sealing, China, Guilin, 32G, tue',
  t04086: 'sealing, China, Shenyang, 512M, tue',
  t04089: 'sealing, China, Zhongshan, 32G, tue',
  t04163: 'sealing, China, Beijing, 32G, tue',
  t04174: 'sealing, USA, Sandpoint, 512M, @why, tue',
  t04302: 'sealing, China, Shenzhem, 32G, tue',
  t04303: 'sealing, USA, Boardman, 512M, tue',
  t04305: 'sealing, USA, Boardman, 512M, tue',
  t04388: 'sealing, China, Guangong, 512M, tue',
  t04411: 'sealing, China, Foshan, 32G, tue',
  t04417: 'sealing, Korea, Seoul, 32G, tue',
  t04420: 'sealing, China, Changsha, 32G, tue',
  t04421: 'sealing, China, Shenzhen, 32G, tue',
  t04451: 'sealing, China, Shenzhen, 32G, tue',
  t04458: 'sealing, Netherlands + USA, Dallas, 32G, tue',


  // Asks

  // Error
  t04051: 'error, China, Chengdu, 32G', // sending proposal to storage provider failed: dial backoff
  t04304: 'error, USA, Boardman, 512M', // failed getting peer ID: (get ssize) failed to load miner actor state: read actor head: cbor input had wrong number of fields
  t02200: 'error, USA+China, Galveston+Guangdong, 32G', // deal failed: (State=26) handing off deal to node: AddPiece failed: adding piece to sector: writing piece: RPC error (-32700): unmarshaling params for 'Filecoin.AddPiece' (param: *io.Reader): json: cannot unmarshal object into Go value of type io.Reader

  // Stuck
  t01910: 'new, China, Shijiazhuang, 512M', // StorageDealCheckForAcceptance
  t02150: 'error, China, Hong Kong, 512M', // StorageDealCheckForAcceptance
 
  // XNR

  // NR
  t01680: 'NR, Latvia, Riga, 512M',
  t02930: 'NR, China, Chongqing, 32G',
  t03889: 'NR, China, Foshan, 512M',
  t04223: 'NR, USA, Boardman, 512M, @hannah, 1h',
  t04459: 'NR, China, Shenzhen, 512M',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
}

export default annotations
