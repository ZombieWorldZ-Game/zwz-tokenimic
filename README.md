# Zombie Tokenomic

## INSTALL

```bash
yarn
```

## TEST

```bash
yarn test
```

## SCRIPTS

- Deploy to testnet `yarn hardhat --network testnet deploy`.
- Verify `ZwZToken` `npx hardhat verify --network testnet {Deployed ZwZToken Address Addr}`.
- Verify `BrainToken` `npx hardhat verify --network testnet {Deployed BrainToken Address Addr}`.
- Verify `PrivateSaleVestingToken` `yarn hardhat verify --network testnet --constructor-args args/privateTokenSaleArgs.js {Deployed PrivateSaleVestingToken Addr}`.
- Verify `TokenVestingByStage` `yarn hardhat verify --network testnet --constructor-args args/tokenVestingByStageArgs.js {Deployed TokenVestingByStage Addr}`.
- Verify `TokenVestingByStageControllable` `yarn hardhat verify --network testnet --constructor-args args/tokenVestingByStageControllableArgs.js {Deployed TokenVestingByStageControllable Addr}`.
