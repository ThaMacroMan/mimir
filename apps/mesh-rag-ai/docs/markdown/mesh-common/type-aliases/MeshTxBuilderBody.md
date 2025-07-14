[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / MeshTxBuilderBody

# Type Alias: MeshTxBuilderBody

> **MeshTxBuilderBody** = `object`

Defined in: [types/transaction-builder/index.ts:21](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L21)

## Properties

### certificates

> **certificates**: [`Certificate`](Certificate.md)[]

Defined in: [types/transaction-builder/index.ts:32](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L32)

***

### chainedTxs

> **chainedTxs**: `string`[]

Defined in: [types/transaction-builder/index.ts:42](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L42)

***

### changeAddress

> **changeAddress**: `string`

Defined in: [types/transaction-builder/index.ts:29](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L29)

***

### collateralReturnAddress?

> `optional` **collateralReturnAddress**: `string`

Defined in: [types/transaction-builder/index.ts:48](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L48)

***

### collaterals

> **collaterals**: [`PubKeyTxIn`](PubKeyTxIn.md)[]

Defined in: [types/transaction-builder/index.ts:25](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L25)

***

### expectedByronAddressWitnesses

> **expectedByronAddressWitnesses**: `string`[]

Defined in: [types/transaction-builder/index.ts:46](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L46)

***

### expectedNumberKeyWitnesses

> **expectedNumberKeyWitnesses**: `number`

Defined in: [types/transaction-builder/index.ts:45](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L45)

***

### extraInputs

> **extraInputs**: [`UTxO`](UTxO.md)[]

Defined in: [types/transaction-builder/index.ts:36](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L36)

***

### fee

> **fee**: [`Quantity`](Quantity.md)

Defined in: [types/transaction-builder/index.ts:24](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L24)

***

### inputs

> **inputs**: [`TxIn`](TxIn.md)[]

Defined in: [types/transaction-builder/index.ts:22](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L22)

***

### inputsForEvaluation

> **inputsForEvaluation**: `Record`\<`string`, [`UTxO`](UTxO.md)\>

Defined in: [types/transaction-builder/index.ts:43](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L43)

***

### metadata

> **metadata**: [`TxMetadata`](TxMetadata.md)

Defined in: [types/transaction-builder/index.ts:30](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L30)

***

### mints

> **mints**: [`MintParam`](MintParam.md)[]

Defined in: [types/transaction-builder/index.ts:28](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L28)

***

### network

> **network**: [`Network`](Network.md) \| `number`[][]

Defined in: [types/transaction-builder/index.ts:44](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L44)

***

### outputs

> **outputs**: [`Output`](Output.md)[]

Defined in: [types/transaction-builder/index.ts:23](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L23)

***

### referenceInputs

> **referenceInputs**: [`RefTxIn`](RefTxIn.md)[]

Defined in: [types/transaction-builder/index.ts:27](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L27)

***

### requiredSignatures

> **requiredSignatures**: `string`[]

Defined in: [types/transaction-builder/index.ts:26](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L26)

***

### selectionConfig

> **selectionConfig**: `object`

Defined in: [types/transaction-builder/index.ts:37](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L37)

#### includeTxFees

> **includeTxFees**: `boolean`

#### strategy

> **strategy**: [`UtxoSelectionStrategy`](UtxoSelectionStrategy.md)

#### threshold

> **threshold**: `string`

***

### signingKey

> **signingKey**: `string`[]

Defined in: [types/transaction-builder/index.ts:35](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L35)

***

### totalCollateral?

> `optional` **totalCollateral**: [`Quantity`](Quantity.md)

Defined in: [types/transaction-builder/index.ts:47](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L47)

***

### validityRange

> **validityRange**: [`ValidityRange`](ValidityRange.md)

Defined in: [types/transaction-builder/index.ts:31](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L31)

***

### votes

> **votes**: [`Vote`](Vote.md)[]

Defined in: [types/transaction-builder/index.ts:34](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L34)

***

### withdrawals

> **withdrawals**: [`Withdrawal`](Withdrawal.md)[]

Defined in: [types/transaction-builder/index.ts:33](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L33)
