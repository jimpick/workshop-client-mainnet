// Slingshot test results
//
// Additional testing with files > 128MiB in size
//
// These are generated from a second round of testing after attempting
// to store a small file, see annotations-spacerace.js for those results

const annotations = {
  // Retest

  // Candidates

  f058369: 'candidate, USA, Boston', // 1634414
  f01234: 'candidate, Belgium, Bonheiden', // 131072 < 3221225472
  f01240: 'candidate, Netherlands, HidNand', // 131072 < 268435456
  f01247: 'candidate, Canada, Montreal', // 131072 < 536870912
  f01278: 'candidate, USA, Grand Rapids, MiMiner', // 131072 < 536870912
  f02576: 'candidate, Denmark, Gjerlev, BenjaminH', // 131072 < 17179869184
  f07998: 'candidate, China, Hangzhou', // 131072 < 17179869184
  f08399: 'candidate, USA, Sammamish', // 131072 < 4294967296
  f08403: 'candidate, UK, Lower Slaughter, TippyFlits', // 131072 < 536870912
  f09848: 'candidate, USA, Irvine, BigBearLake', // 131072 < 536870912
  f010479: 'candidate, France, Fontenay-sous-Bois, s0nik42', // 131072 < 8589934592
  f010617: 'candidate, Canada, Surrey, kernelogic2, @feiya200', // 131072 < 1073741824
  f014768: 'candidate, Singapore, Funktafide, @Funk', // 131072 < 536870912
  f015927: 'candidate, USA, East Islip, CDImine', // 131072 < 1073741824
  f019104: 'candidate, Canada, Chambly, NBFS DEV', // 131072 < 4294967296
  f019551: 'candidate, UK, Birmingham, @Neofix AF', // 131072 < 268435456
  f021716: 'candidate, New Zealand, Wellington', // 131072 < 536870912
  f022142: 'candidate, USA, Queens, Nelson SR2', // 131072 < 2147483648
  f022163: 'candidate, dns:fil.akasha.network', // 131072 < 536870912
  f023467: 'candidate, Norway, Oslo, PhiMining.io', // 131072 < 134217728
  f023971: 'candidate, USA', // 131072 < 536870912
  f062353: 'candidate, Germany, Frankfurt', // 131072 < 17179869184
  f066596: 'candidate, USA, San Diego', // 131072 < 536870912
  f071624: 'candidate, USA, Boyne City', // 131072 < 4294967296
  f099608: 'candidate, Latvia, Riga', // 131072 < 268435456
  f0127896: 'candidate, Bulgaria, Sofia', // 131072 < 536870912
  f0145874: 'candidate, Canada, Brampton', // 131072 < 4294967296
  f0157535: 'candidate, Canada, Brampton', // 131072 < 4294967296
  f0165400: 'candidate, Canada, Brampton', // 131072 < 4294967296
  f01277: 'candidate, Sweden, Stockholm', // 20000000 < 122070312500000
  f02606: 'candidate, China, Zhejiang', // 20000000 < 122070312
  f014409: 'candidate, USA, Monroe', // 20000000 < 122070312
  f022352: 'candidate, Norway, Borgen, TechHedge, @Reiers', // 20000000 < 21972656
  f019362: 'candidate, China, Hangzhou, 青青子衿', // stream reset
  f019041: 'candidate, China, Zhejiang + Singapore', // no online
  f019100: 'candidate, Romania, Cluj-Napoca', // * [/ip4/79.119.122.118/tcp/55555] dial tcp4 0.0.0.0:37203->79.119.122.118:55555: i/o timeout


  // Active


  // Sealing (active-candidate = previously active, retesting with new deal)

  // Sealing


  // Stuck


  // Busy


  // Min-size


  // Max-size


  // Min-ask


  // Xfr-failed


  // Error


  // Backoff

  // Rejected


  // Dial

  // XNR

  // Error during ask

}

export default annotations
