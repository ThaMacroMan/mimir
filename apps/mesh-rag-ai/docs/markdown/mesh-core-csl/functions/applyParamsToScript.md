[**@meshsdk/core-csl**](../README.md)

***

[@meshsdk/core-csl](../globals.md) / applyParamsToScript

# Function: applyParamsToScript()

> **applyParamsToScript**(`rawScript`, `params`, `type`): `string`

Defined in: [utils/aiken.ts:13](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/utils/aiken.ts#L13)

Apply parameters to a given script blueprint.

## Parameters

### rawScript

`string`

The raw script CborHex from blueprint.

### params

The parameters to apply, in an array.

`Data`[] | `object`[]

### type

`PlutusDataType` = `"Mesh"`

The type of the parameters, default to be Mesh's Data type. It could also be in JSON and raw CBOR.

## Returns

`string`

The double-cbor encoded script CborHex with the parameters applied.
