[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / conStr

# Function: conStr()

> **conStr**\<`N`, `T`\>(`constructor`, `fields`): [`ConStr`](../type-aliases/ConStr.md)\<`N`, `T`\>

Defined in: [data/json/constructors.ts:32](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/data/json/constructors.ts#L32)

The utility function to create a Plutus Data constructor object, representing custom data type in JSON

## Type Parameters

### N

`N` *extends* `number`

### T

`T`

## Parameters

### constructor

`N`

The constructor index number

### fields

`T`

The items in array

## Returns

[`ConStr`](../type-aliases/ConStr.md)\<`N`, `T`\>

The Plutus Data constructor object
