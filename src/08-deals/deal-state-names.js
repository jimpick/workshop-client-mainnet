const dealStateNames = [
  // go-fil-markets/storagemarket/dealstatus.go
  'Unknown', // 0
  'ProposalNotFound', // 1
  'ProposalRejected', // 2
  'ProposalAccepted', // 3
  'Staged', // 4
  'Sealing', // 5
  'Finalizing', // 6
  'Active', // 7
  'Expired', // 8
  'Slashed', // 9
  'Rejecting', // 10
  'Failing', // 11
  'FundsEnsured', // 12
  'CheckForAcceptance', // 13
  'Validating', // 14
  'AcceptWait', // 15
  'StartDataTransfer', // 16
  'Transferring', // 17
  'WaitingForData', // 18
  'VerifyData', // 19
  'EnsureProviderFunds', // 20
  'EnsureClientFunds', // 21
  'ProviderFunding', // 22
  'ClientFunding', // 23
  'Publish', // 24
  'Publishing', // 25
  'Error', // 26
  'ProviderTransferRestart', // 27
  'ClientTransferRestart', // 28
]

export default dealStateNames
