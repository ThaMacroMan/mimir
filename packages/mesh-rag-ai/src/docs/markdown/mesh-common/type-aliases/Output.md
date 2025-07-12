[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / Output

# Type Alias: Output

> **Output** = `object`

Defined in: [types/transaction-builder/output.ts:4](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/output.ts#L4)

## Properties

### address

> **address**: `string`

Defined in: [types/transaction-builder/output.ts:5](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/output.ts#L5)

***

### amount

> **amount**: [`Asset`](Asset.md)[]

Defined in: [types/transaction-builder/output.ts:6](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/output.ts#L6)

***

### datum?

> `optional` **datum**: `object`

Defined in: [types/transaction-builder/output.ts:7](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/output.ts#L7)

#### data

> **data**: [`BuilderData`](BuilderData.md)

#### type

> **type**: `"Hash"` \| `"Inline"` \| `"Embedded"`

***

### referenceScript?

> `optional` **referenceScript**: [`PlutusScript`](PlutusScript.md)

Defined in: [types/transaction-builder/output.ts:11](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/types/transaction-builder/output.ts#L11)
