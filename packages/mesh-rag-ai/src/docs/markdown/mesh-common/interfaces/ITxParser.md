[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / ITxParser

# Interface: ITxParser

Defined in: [interfaces/serializer.ts:42](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/serializer.ts#L42)

## Methods

### getBuilderBody()

> **getBuilderBody**(): [`MeshTxBuilderBody`](../type-aliases/MeshTxBuilderBody.md)

Defined in: [interfaces/serializer.ts:46](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/serializer.ts#L46)

#### Returns

[`MeshTxBuilderBody`](../type-aliases/MeshTxBuilderBody.md)

***

### getBuilderBodyWithoutChange()

> **getBuilderBodyWithoutChange**(): [`MeshTxBuilderBody`](../type-aliases/MeshTxBuilderBody.md)

Defined in: [interfaces/serializer.ts:47](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/serializer.ts#L47)

#### Returns

[`MeshTxBuilderBody`](../type-aliases/MeshTxBuilderBody.md)

***

### getRequiredInputs()

> **getRequiredInputs**(`txHex`): [`TxInput`](../type-aliases/TxInput.md)[]

Defined in: [interfaces/serializer.ts:43](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/serializer.ts#L43)

#### Parameters

##### txHex

`string`

#### Returns

[`TxInput`](../type-aliases/TxInput.md)[]

***

### parse()

> **parse**(`txHex`, `resolvedUtxos?`): `void`

Defined in: [interfaces/serializer.ts:44](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/serializer.ts#L44)

#### Parameters

##### txHex

`string`

##### resolvedUtxos?

[`UTxO`](../type-aliases/UTxO.md)[]

#### Returns

`void`

***

### toTester()

> **toTester**(): [`TxTester`](../classes/TxTester.md)

Defined in: [interfaces/serializer.ts:45](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/serializer.ts#L45)

#### Returns

[`TxTester`](../classes/TxTester.md)
