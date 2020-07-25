#! /bin/bash

cat deals.json | jq -r '.[] | {miner, deal: .deals[]} | "TIMESTAMP=`date +%s` bash -c \"time lotus client retrieve --miner=\(.miner) \(.deal.cid) /home/ubuntu/downloads/\(.miner)-\(.deal.dealId)-$TIMESTAMP.jpg 2>&1 | tee /home/ubuntu/downloads/\(.miner)-\(.deal.dealId)-$TIMESTAMP.log\"\n"'
