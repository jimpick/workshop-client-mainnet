const annotations = {
  // Active
  t01025: 'active, Poland, Krakow, @magik6k, 1h, 1h, 1h, 1h, mon',
  t01135: 'active, Finland, Helsinki, 3h, 1h, 1h, mon',
  t01154: 'active, Canada, Vancouver, @jimpick, 25m, 27m, mon',
  t09095: 'active, China, Foshan, 1h, mon',

  // New, sealing, recycle
  t01003: 'sealing, USA, Seattle, @travisperson, 3h, mon',
  t01021: 'sealing, Brazil, São Paulo, 32G, fri, sun',
  t01062: "sealing, USA, Coeur d'Alene, mon",
  t01119: 'sealing, China, Guandong, 32G, sun',
  t09114: 'sealing, China, Suzhou, mon',
  t09126: 'new, China, Chengdu, mon',

  // Asks
  t09096: 'minask, China, Foshan, sun', // storage price per epoch less than asking price: 2500 < 953674316406

  // Error

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

  // Non-routables with locations
  t01005: 'NR, China, Guilin, 36m, 42m',
  t01128: 'NR, China, Suzhou, 32G, sat',

  // Bootstrappers
  t01000: 'NR - bootstrap',
  t01001: 'NR - bootstrap',
}

export default annotations
