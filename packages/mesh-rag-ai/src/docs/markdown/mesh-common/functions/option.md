[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / option

# Function: option()

> **option**\<`T`\>(`value?`): [`Option`](../type-aliases/Option.md)\<`T`\>

Defined in: [data/json/aliases.ts:249](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/data/json/aliases.ts#L249)

The utility function to create a Plutus Data Option in JSON

## Type Parameters

### T

`T`

## Parameters

### value?

`T`

The optional value of the option

## Returns

[`Option`](../type-aliases/Option.md)\<`T`\>

Return None constructor if the value is not provided, otherwise return Some constructor with the value
