[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / ISigner

# Interface: ISigner

Defined in: [interfaces/signer.ts:3](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/signer.ts#L3)

## Extended by

- [`IWallet`](IWallet.md)

## Methods

### signData()

> **signData**(`payload`, `address?`): `Promise`\<[`DataSignature`](../type-aliases/DataSignature.md)\>

Defined in: [interfaces/signer.ts:4](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/signer.ts#L4)

#### Parameters

##### payload

`string`

##### address?

`string`

#### Returns

`Promise`\<[`DataSignature`](../type-aliases/DataSignature.md)\>

***

### signTx()

> **signTx**(`unsignedTx`, `partialSign?`): `Promise`\<`string`\>

Defined in: [interfaces/signer.ts:5](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/signer.ts#L5)

#### Parameters

##### unsignedTx

`string`

##### partialSign?

`boolean`

#### Returns

`Promise`\<`string`\>

***

### signTxs()

> **signTxs**(`unsignedTxs`, `partialSign?`): `Promise`\<`string`[]\>

Defined in: [interfaces/signer.ts:6](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/signer.ts#L6)

#### Parameters

##### unsignedTxs

`string`[]

##### partialSign?

`boolean`

#### Returns

`Promise`\<`string`[]\>
