const annotations = {
  // Active
  t01025: 'active, Poland, Krakow, @magik6k, 1h, 1h, 1h, 1h, 1h',
  t01135: 'active, Finland, Helsinki, 3h, 1h, 1h, 1h',
  t01154: 'active, Canada, Vancouver, @jimpick, 25m, 27m, 25m',
  t09095: 'active, China, Foshan, 1h, 1h',
  t09146: 'active, USA, Boardman, 1h',
  t09148: 'active, USA, Boardman, 1h',

  // New, sealing, recycle
  t01003: 'sealing, USA, Seattle, @travisperson, 3h, mon',
  t01021: 'sealing, Brazil, São Paulo, 32G, fri, sun',
  t01119: 'sealing, China, Guandong, 32G, sun',
  t09114: 'sealing, China, Suzhou, 32G, mon',
  t09167: 'new, USA, @travisperson, Seattle',
  t09266: 'new, China, Chengdu',

  // Asks
  t09096: 'minask, China, Foshan, sun', // storage price per epoch less than asking price: 2500 < 953674316406

  // Error
  t01062: "error, USA, Coeur d'Alene", // error in deal activation: handling applied event: deal wasn't active: deal=3390, parentState=bafy2bzacebpfjxdfzxuffwp6ijohzckxoag2k4o6ak6y7p2kwgy7gphjrz3so, h=1201
  t09126: 'error, China, Chengdu', // sending proposal to storage provider failed: dial backoff
  t09274: 'error, China, Suzhou', // error reading Response message: stream reset

  // Stuck

  // Possible NR

  // Non-routables (with power)
  t01012: 'NR, China, Guangdong, 1h, 1h, 1h',
  t01020: 'NR, power, 32G',
  t01027: 'NR, China, Foshan, 1h, 1h, 9h, 1h',
  t01037: 'NR, power',
  t01065: 'NR, power',
  t01067: 'NR, power',
  t01070: 'NR, power',
  t01081: 'NR, power',
  t01103: 'NR, power',
  t01115: 'NR, power',
  t01133: 'NR, power, 32G',
  t01152: 'NR, power, 32G',
  t01159: 'NR, power',
  t09144: 'NR, power',

  // Non-routables with locations
  t01005: 'NR, China, Guilin, 36m, 42m',
  t01128: 'NR, China, Suzhou, 32G, sat',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
}

export default annotations
