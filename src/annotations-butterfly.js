const annotations = {
  // Active
  t01012: 'active, China, Guangdong, 1h, 1h, sat',
  t01025: 'active, Poland, Krakow, @magik6k, 1h, 1h, sat',
  t01027: 'active, China, Foshan, 1h, 1h, sat',
  t01135: 'active, Finland, Helsinki, 3h, sat',
  t01154: 'active, Canada, Vancouver, @jimpick, 25m, sat',

  // New, sealing, recycle
  t01021: 'sealing, Brazil, São Paulo, 32G, fri',
  t01128: 'sealing, China, Suzhou, 32G, sat',

  // Error
  t01119: 'error, China, Guandong, 32G', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: clientMarketBalance.Available too small

  // Stuck
  t01062: "StorageDealCheckForAcceptance, USA, Coeur d'Alene",

  // Non-routables (with power)
  t01020: 'NR, power, 32G',
  t01037: 'NR, power',
  t01065: 'NR, power',
  t01067: 'NR, power',
  t01070: 'NR, power',
  t01081: 'NR, power',
  t01103: 'NR, power',
  t01115: 'NR, power',

  // Non-routables with locations
  t01003: 'NR, USA, @travisperson, 3h',
  t01005: 'NR, China, Guilin, 36m, 42m',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
}

export default annotations
