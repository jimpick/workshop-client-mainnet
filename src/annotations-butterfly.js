const annotations = {
  // Active
  t01025: 'active, Poland, Krakow, @magik6k, 1h, 1h, 1h, sun',
  t01027: 'active, China, Foshan, 1h, 1h, 9h, sun',
  t01135: 'active, Finland, Helsinki, 3h, 1h, sun',
  t01154: 'active, Canada, Vancouver, @jimpick, 25m, sun',

  // New, sealing, recycle
  t01021: 'sealing, Brazil, São Paulo, 32G, fri, sun',

  // Error
  t01119: 'error, China, Guandong, 32G', // unexpected deal status while waiting for data request: 11 (StorageDealFailing). Provider message: deal rejected: clientMarketBalance.Available too small

  // Stuck
  t01062: "StorageDealCheckForAcceptance, USA, Coeur d'Alene",

  // Possible NR

  // Non-routables (with power)
  t01012: 'NR, China, Guangdong, 1h, 1h, 1h',
  t01020: 'NR, power, 32G',
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

  // Non-routables with locations
  t01003: 'NR, USA, Seattle, @travisperson, 3h',
  t01005: 'NR, China, Guilin, 36m, 42m',
  t01128: 'NR, China, Suzhou, 32G, sat',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
}

export default annotations
