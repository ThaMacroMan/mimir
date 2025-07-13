[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / IMintingBlueprint

# Interface: IMintingBlueprint

Defined in: [types/blueprint/minting.ts:4](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/minting.ts#L4)

## Properties

### cbor

> **cbor**: `string`

Defined in: [types/blueprint/minting.ts:6](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/minting.ts#L6)

***

### hash

> **hash**: `string`

Defined in: [types/blueprint/minting.ts:7](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/minting.ts#L7)

***

### version

> **version**: `"V1"` \| `"V2"` \| `"V3"`

Defined in: [types/blueprint/minting.ts:5](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/minting.ts#L5)

## Methods

### noParamScript()

> **noParamScript**(`compiledCode`): `this`

Defined in: [types/blueprint/minting.ts:13](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/minting.ts#L13)

#### Parameters

##### compiledCode

`string`

#### Returns

`this`

***

### paramScript()

> **paramScript**(`compiledCode`, `params`, `paramsType`): `this`

Defined in: [types/blueprint/minting.ts:8](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/blueprint/minting.ts#L8)

#### Parameters

##### compiledCode

`string`

##### params

`string`[]

##### paramsType

[`PlutusDataType`](../type-aliases/PlutusDataType.md)

#### Returns

`this`
