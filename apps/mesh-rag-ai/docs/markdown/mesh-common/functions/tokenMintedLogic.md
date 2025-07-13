[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / tokenMintedLogic

# Function: tokenMintedLogic()

> **tokenMintedLogic**(`mints`, `policyId`, `assetName`, `quantity`): `boolean`

Defined in: [tx-tester/index.ts:583](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L583)

Internal logic to check if a token is minted

## Parameters

### mints

[`MintParam`](../type-aliases/MintParam.md)[]

The mints info of the tx builder body

### policyId

`string`

The policy ID of the token

### assetName

`string`

The asset name of the token

### quantity

`number`

The quantity of the token

## Returns

`boolean`

true if the token is minted, false otherwise
