[**@meshsdk/core-csl**](../README.md)

***

[@meshsdk/core-csl](../globals.md) / evaluateTransaction

# Function: evaluateTransaction()

> **evaluateTransaction**(`txHex`, `resolvedUtxos`, `chainedTxs`, `network`, `slotConfig`): `Omit`\<`Action`, `"data"`\>[]

Defined in: [utils/transaction.ts:70](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/utils/transaction.ts#L70)

## Parameters

### txHex

`string`

### resolvedUtxos

`UTxO`[]

### chainedTxs

`string`[]

### network

`"testnet"` | `"preview"` | `"preprod"` | `"mainnet"`

### slotConfig

`Omit`\<`Omit`\<`SlotConfig`, `"startEpoch"`\>, `"epochLength"`\>

## Returns

`Omit`\<`Action`, `"data"`\>[]
