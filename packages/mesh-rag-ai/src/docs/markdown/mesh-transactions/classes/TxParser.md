[**@meshsdk/transaction**](../README.md)

***

[@meshsdk/transaction](../globals.md) / TxParser

# Class: TxParser

Defined in: [mesh-transaction/src/tx-parser/index.ts:8](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/tx-parser/index.ts#L8)

TxParser class to parse transaction hex strings and resolve UTxOs.

It is used for either manipulating transactions or for unit testing transaction buildings.

## Constructors

### Constructor

> **new TxParser**(`serializer`, `fetcher?`): `TxParser`

Defined in: [mesh-transaction/src/tx-parser/index.ts:9](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/tx-parser/index.ts#L9)

#### Parameters

##### serializer

`IMeshTxSerializer`

##### fetcher?

`IFetcher`

#### Returns

`TxParser`

## Properties

### fetcher?

> `optional` **fetcher**: `IFetcher`

Defined in: [mesh-transaction/src/tx-parser/index.ts:11](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/tx-parser/index.ts#L11)

***

### serializer

> **serializer**: `IMeshTxSerializer`

Defined in: [mesh-transaction/src/tx-parser/index.ts:10](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/tx-parser/index.ts#L10)

## Methods

### getBuilderBody()

> **getBuilderBody**(): `MeshTxBuilderBody`

Defined in: [mesh-transaction/src/tx-parser/index.ts:59](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/tx-parser/index.ts#L59)

#### Returns

`MeshTxBuilderBody`

***

### getBuilderBodyWithoutChange()

> **getBuilderBodyWithoutChange**(): `MeshTxBuilderBody`

Defined in: [mesh-transaction/src/tx-parser/index.ts:61](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/tx-parser/index.ts#L61)

#### Returns

`MeshTxBuilderBody`

***

### parse()

> **parse**(`txHex`, `providedUtxos`): `Promise`\<`MeshTxBuilderBody`\>

Defined in: [mesh-transaction/src/tx-parser/index.ts:14](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/tx-parser/index.ts#L14)

#### Parameters

##### txHex

`string`

##### providedUtxos

`UTxO`[] = `[]`

#### Returns

`Promise`\<`MeshTxBuilderBody`\>

***

### toTester()

> **toTester**(): `TxTester`

Defined in: [mesh-transaction/src/tx-parser/index.ts:64](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/tx-parser/index.ts#L64)

#### Returns

`TxTester`
