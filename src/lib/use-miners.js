import { useEffect, useState } from 'react'

const annotations = {
  t010313: 'Jim NUC',
  t01729: 'sealing',
  t02822: 'sealing',
  t010230: 'validating (stalled)',
  t03869: 'validating stream reset',
  t010202: 'validating stream reset',
  t010215: 'validating stream reset',
  t03828: 'eof',
  t01252: 'stream reset',
  t01710: 'stream reset',
  t01765: 'stream reset',
  t01773: 'stream reset',
  t01781: 'stream reset',
  t03857: 'stream reset',
  t03875: 'stream reset',
  t03866: 'stream reset',
  t09940: 'stream reset',
  t010023: 'stream reset',
  t09921: 'stream reset',
  t010225: 'stream reset',
  t010292: 'stream reset',
  t01719: 'Power 49240726306816',
  t01250: 'Power 18205829496832',
  t010162: 'Power 12127377031168',
  t01737: 'Power 6576131801088',
  t010041: 'Power 5443334176768',
  t03826: 'Power 5325759447040',
  t010196: 'Power 3207266828288',
  t01254: 'Power 2025613950976',
  t01784: 'Power 949187772416',
  t01514: 'Power 927712935936',
  t01689: 'Power 899258777600',
  t010085: 'Power 725849473024',
  t09957: 'Power 719407022080',
  t010144: 'Power 584652423168',
  t010095: 'Power 566935683072',
  t01681: 'Power 207769042944',
  t01788: 'Power 205621559296',
  t02798: 'Power 197568495616',
  t010247: 'Power 188441690112',
  t010206: 'Power 181999239168',
  t03844: 'Power 179851755520',
  t010302: 'Power 177704271872',
  t01751: 'Power 172335562752',
  t010301: 'Power 159987531776',
  t01731: 'Power 137438953472',
  t010304: 'Power 103616086016',
  t010130: 'Power 100931731456',
  t010093: 'Power 77309411328',
  t01723: 'Power 76772540416',
  t010294: 'Power 72477573120',
  t010209: 'Power 68719476736',
  t010071: 'Power 51539607552',
  t01691: 'Power 46707769344',
  t03824: 'Power 39191576576',
  t09929: 'Power 37580963840',
  t01713: 'Power 35970351104',
  t02804: 'Power 35433480192',
  t010046: 'Power 34896609280',
  t010297: 'Power 34359738368',
  t010234: 'Power 34359738368',
  t01700: 'Power 19864223744',
  t01747: 'Power 17716740096',
  t02818: 'Power 12348030976',
  t01761: 'Power 12348030976',
  t010299: 'Power 10200547328',
  t010232: 'Power 8053063680',
  t01741: 'Power 7516192768',
  t09923: 'Power 5905580032',
  t010288: 'Power 5368709120',
  t09914: 'Power 3758096384',
  t01769: 'Power 1610612736',
  t010285: 'Power 1610612736',
  t010241: 'Power 1610612736',
  t010151: 'Power 1610612736',
  t01000: 'Power 1181115392',
  t09948: 'Power 1073741824',
  t01526: 'Power 1073741824',
  t010258: 'Power 1073741824',
  t010200: 'Power 1073741824',
  t010153: 'Power 1073741824',
  t01002: 'Power 1073741824',
  t02796: 'Power 536923648',
  t03839: 'Power 9216'
}

export default function useMiners (client) {
  const [miners, setMiners] = useState()

  useEffect(() => {
    if (!client) return
    let state = { canceled: false }
    ;(async function run () {
      if (state.canceled) return
      /*
      const result = await client.stateListMiners([])
      */
      // Whitelisted
      const result = Object.keys(annotations)
      if (state.canceled) return
      setMiners(result.sort())
    })()
    return () => { state.canceled = true }
  }, [client])

  return [miners, annotations]
}
