[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / ISpendingBlueprint

# Interface: ISpendingBlueprint

Defined in: [types/blueprint/spending.ts:4](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/spending.ts#L4)

## Properties

### address

> **address**: `string`

Defined in: [types/blueprint/spending.ts:9](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/spending.ts#L9)

***

### cbor

> **cbor**: `string`

Defined in: [types/blueprint/spending.ts:7](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/spending.ts#L7)

***

### hash

> **hash**: `string`

Defined in: [types/blueprint/spending.ts:8](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/spending.ts#L8)

***

### isStakeScriptCredential

> **isStakeScriptCredential**: `boolean`

Defined in: [types/blueprint/spending.ts:11](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/spending.ts#L11)

***

### networkId

> **networkId**: `number`

Defined in: [types/blueprint/spending.ts:6](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/spending.ts#L6)

***

### stakeHash?

> `optional` **stakeHash**: `string`

Defined in: [types/blueprint/spending.ts:10](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/spending.ts#L10)

***

### version

> **version**: `"V1"` \| `"V2"` \| `"V3"`

Defined in: [types/blueprint/spending.ts:5](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/spending.ts#L5)

## Methods

### noParamScript()

> **noParamScript**(`compiledCode`): `this`

Defined in: [types/blueprint/spending.ts:17](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/spending.ts#L17)

#### Parameters

##### compiledCode

`string`

#### Returns

`this`

***

### paramScript()

> **paramScript**(`compiledCode`, `params`, `paramsType`): `this`

Defined in: [types/blueprint/spending.ts:12](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/spending.ts#L12)

#### Parameters

##### compiledCode

`string`

##### params

`string`[]

##### paramsType

[`PlutusDataType`](../type-aliases/PlutusDataType.md)

#### Returns

`this`
