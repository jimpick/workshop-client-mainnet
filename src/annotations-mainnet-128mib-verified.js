// Slingshot test results
//
// Additional testing with files > 128MiB in size
//
// These are generated from a second round of testing after attempting
// to store a small file, see annotations-spacerace.js for those results

const annotations = {
  // Retest

  // Candidates

	f01277: "candidate, Sweden, Stockholm", // carry-over
	f019100: "candidate, Romania, Cluj-Napoca", // carry-over
	f0127896: "candidate, Bulgaria, Sofia", // carry-over

  // Active


  // Sealing (active-candidate = previously active, retesting with new deal)

  // Sealing


  // Stuck

	f02606: "stuck, China, Zhejiang", // CheckForAcceptance: 8 minutes
	f023467: "stuck, Norway, Oslo, PhiMining.io", // CheckForAcceptance: 5 minutes
	f058369: "stuck, USA, Boston", // CheckForAcceptance: 10 minutes

  // Busy


  // Min-size

	f01234: "min-size, Belgium, Bonheiden, Eliovp", // 134217728 < 3221225472
	f01240: "min-size, Netherlands, Dcent", // 134217728 < 268435456
	f01278: "min-size, USA, Grand Rapids, MiMiner", // 134217728 < 536870912
	f02576: "min-size, Denmark, Gjerlev, BenjaminH", // 134217728 < 17179869184
	f07998: "min-size, China, Hangzhou", // 134217728 < 17179869184
	f08399: "min-size, USA, Sammamish", // 134217728 < 4294967296
	f08403: "min-size, UK, Lower Slaughter, TippyFlits", // 134217728 < 536870912
	f09848: "min-size, USA, Irvine, BigBearLake", // 134217728 < 536870912
	f010479: "min-size, France, Fontenay-sous-Bois, s0nik42", // 134217728 < 8589934592
	f010617: "min-size, Canada, Surrey, kernelogic2, @feiya200", // 134217728 < 1073741824
	f014409: "min-size, USA, Monroe", // 134217728 < 4294967296
	f014768: "min-size, Singapore, Funktafide, @Funk", // 134217728 < 536870912
	f015927: "min-size, USA, East Islip, CDImine", // 134217728 < 1073741824
	f019104: "min-size, Canada, Chambly, NBFS DEV", // 268435456 < 4294967296
	f019362: "min-size, China, Hangzhou, 青青子衿", // 134217728 < 17179869184
	f019551: "min-size, UK, Birmingham, @Neofix AF", // 134217728 < 268435456
	f021716: "min-size, New Zealand, Wellington", // 134217728 < 536870912
	f022142: "min-size, USA, Queens, Nelson SR2", // 134217728 < 2147483648
	f022163: "min-size, dns:fil.akasha.network", // 134217728 < 536870912
	f022352: "min-size, Norway, Borgen, TechHedge, @Reiers", // 134217728 < 536870912
	f023971: "min-size, USA", // 134217728 < 536870912
	f062353: "min-size, Germany, Frankfurt", // 134217728 < 17179869184
	f066596: "min-size, USA, San Diego", // 134217728 < 536870912
	f071624: "min-size, USA, Boyne City", // 134217728 < 4294967296
	f099608: "min-size, Latvia, Riga", // 134217728 < 268435456
	f0145874: "min-size, Canada, Brampton", // 134217728 < 4294967296
	f0157535: "min-size, Canada, Brampton", // 134217728 < 4294967296
	f0165400: "min-size, Canada, Brampton", // 134217728 < 4294967296

  // Max-size

	f019041: "max-size, China, Zhejiang + Singapore", // 134217728 > 1048576

  // Min-ask


  // Xfr-failed


  // Error


  // Backoff

  // Rejected

	f01247: "rejected, Canada, Montreal", // Sorry, we are currently not accepting deals! To store data with us, contact eric(at)chainsafe(dot)io

  // Dial

  // XNR

  // Error during ask

}

export default annotations
