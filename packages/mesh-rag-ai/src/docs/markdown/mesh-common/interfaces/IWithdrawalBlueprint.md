[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / IWithdrawalBlueprint

# Interface: IWithdrawalBlueprint

Defined in: [types/blueprint/withdrawal.ts:4](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/withdrawal.ts#L4)

## Properties

### address

> **address**: `string`

Defined in: [types/blueprint/withdrawal.ts:9](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/withdrawal.ts#L9)

***

### cbor

> **cbor**: `string`

Defined in: [types/blueprint/withdrawal.ts:7](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/withdrawal.ts#L7)

***

### hash

> **hash**: `string`

Defined in: [types/blueprint/withdrawal.ts:8](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/withdrawal.ts#L8)

***

### networkId

> **networkId**: `number`

Defined in: [types/blueprint/withdrawal.ts:6](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/withdrawal.ts#L6)

***

### version

> **version**: `"V1"` \| `"V2"` \| `"V3"`

Defined in: [types/blueprint/withdrawal.ts:5](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/withdrawal.ts#L5)

## Methods

### noParamScript()

> **noParamScript**(`compiledCode`): `this`

Defined in: [types/blueprint/withdrawal.ts:15](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/withdrawal.ts#L15)

#### Parameters

##### compiledCode

`string`

#### Returns

`this`

***

### paramScript()

> **paramScript**(`compiledCode`, `params`, `paramsType`): `this`

Defined in: [types/blueprint/withdrawal.ts:10](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/withdrawal.ts#L10)

#### Parameters

##### compiledCode

`string`

##### params

`string`[]

##### paramsType

[`PlutusDataType`](../type-aliases/PlutusDataType.md)

#### Returns

`this`
