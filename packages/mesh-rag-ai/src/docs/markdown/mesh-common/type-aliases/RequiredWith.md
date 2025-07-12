[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / RequiredWith

# Type Alias: RequiredWith\<T, K\>

> **RequiredWith**\<`T`, `K`\> = `Required`\<`T`\> & `{ [P in K]: Required<T[P]> }`

Defined in: [types/transaction-builder/index.ts:115](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/index.ts#L115)

## Type Parameters

### T

`T`

### K

`K` *extends* keyof `T`
