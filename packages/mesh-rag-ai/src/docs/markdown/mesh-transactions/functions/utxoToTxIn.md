[**@meshsdk/transaction**](../README.md)

***

[@meshsdk/transaction](../globals.md) / utxoToTxIn

# Function: utxoToTxIn()

> **utxoToTxIn**(`utxo`): \[`string`, `number`, `Asset`[], `string`\]

Defined in: [mesh-transaction/src/mesh-tx-builder/utils.ts:19](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/utils.ts#L19)

Convert UTxO to TxIn parameters in array for MeshTxBuilder

## Parameters

### utxo

`UTxO`

UTxO

## Returns

\[`string`, `number`, `Asset`[], `string`\]

[txHash, outputIndex, amount, address]
