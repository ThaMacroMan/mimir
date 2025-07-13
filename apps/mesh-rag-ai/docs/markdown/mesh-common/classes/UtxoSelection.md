[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / UtxoSelection

# Class: UtxoSelection

Defined in: [utxo-selection/index.ts:27](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utxo-selection/index.ts#L27)

All UTxO selection algorithms follows below's interface

Supported algorithms:
- largestFirst - CIP2 suggested algorithm
- largestFirstMultiAsset - CIP2 suggested algorithm
- keepRelevant - CIP2 suggested algorithm
- experimental - The always evolving algorithm according to the latest research

## Param

## Param

## Constructors

### Constructor

> **new UtxoSelection**(`threshold`, `includeTxFees`): `UtxoSelection`

Defined in: [utxo-selection/index.ts:31](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utxo-selection/index.ts#L31)

#### Parameters

##### threshold

`string` = `"5000000"`

##### includeTxFees

`boolean` = `true`

#### Returns

`UtxoSelection`

## Methods

### experimental()

> **experimental**(`requiredAssets`, `inputs`): [`UTxO`](../type-aliases/UTxO.md)[]

Defined in: [utxo-selection/index.ts:60](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utxo-selection/index.ts#L60)

#### Parameters

##### requiredAssets

`Map`\<`string`, `string`\>

##### inputs

[`UTxO`](../type-aliases/UTxO.md)[]

#### Returns

[`UTxO`](../type-aliases/UTxO.md)[]

***

### keepRelevant()

> **keepRelevant**(`requiredAssets`, `inputs`): [`UTxO`](../type-aliases/UTxO.md)[]

Defined in: [utxo-selection/index.ts:47](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utxo-selection/index.ts#L47)

#### Parameters

##### requiredAssets

`Map`\<`string`, `string`\>

##### inputs

[`UTxO`](../type-aliases/UTxO.md)[]

#### Returns

[`UTxO`](../type-aliases/UTxO.md)[]

***

### largestFirst()

> **largestFirst**(`requiredAssets`, `inputs`): [`UTxO`](../type-aliases/UTxO.md)[]

Defined in: [utxo-selection/index.ts:36](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utxo-selection/index.ts#L36)

#### Parameters

##### requiredAssets

`Map`\<`string`, `string`\>

##### inputs

[`UTxO`](../type-aliases/UTxO.md)[]

#### Returns

[`UTxO`](../type-aliases/UTxO.md)[]

***

### largestFirstMultiAsset()

> **largestFirstMultiAsset**(`requiredAssets`, `inputs`): [`UTxO`](../type-aliases/UTxO.md)[]

Defined in: [utxo-selection/index.ts:51](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utxo-selection/index.ts#L51)

#### Parameters

##### requiredAssets

`Map`\<`string`, `string`\>

##### inputs

[`UTxO`](../type-aliases/UTxO.md)[]

#### Returns

[`UTxO`](../type-aliases/UTxO.md)[]
