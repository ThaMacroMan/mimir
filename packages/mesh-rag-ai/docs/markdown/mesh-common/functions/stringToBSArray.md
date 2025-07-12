[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / stringToBSArray

# Function: stringToBSArray()

> **stringToBSArray**(`hexString`): [`List`](../type-aliases/List.md)\<[`ByteString`](../type-aliases/ByteString.md)\>

Defined in: [data/json/primitives.ts:123](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/data/json/primitives.ts#L123)

Converting a hex string into a ByteString Array, with max 32 bytes on each items

## Parameters

### hexString

`string`

The hex string to be converted into ByteString Array

## Returns

[`List`](../type-aliases/List.md)\<[`ByteString`](../type-aliases/ByteString.md)\>

The ByteString Array representation of the hex string
