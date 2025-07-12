[**@meshsdk/wallet**](../README.md)

***

[@meshsdk/wallet](../globals.md) / CreateMeshWalletOptions

# Type Alias: CreateMeshWalletOptions

> **CreateMeshWalletOptions** = `object`

Defined in: [mesh/index.ts:35](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-wallet/src/mesh/index.ts#L35)

## Properties

### accountIndex?

> `optional` **accountIndex**: `number`

Defined in: [mesh/index.ts:61](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-wallet/src/mesh/index.ts#L61)

***

### accountType?

> `optional` **accountType**: [`AccountType`](AccountType.md)

Defined in: [mesh/index.ts:63](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-wallet/src/mesh/index.ts#L63)

***

### fetcher?

> `optional` **fetcher**: `IFetcher`

Defined in: [mesh/index.ts:37](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-wallet/src/mesh/index.ts#L37)

***

### key

> **key**: \{ `bech32`: `string`; `type`: `"root"`; \} \| \{ `payment`: `string`; `stake?`: `string`; `type`: `"cli"`; \} \| \{ `type`: `"mnemonic"`; `words`: `string`[]; \} \| \{ `bip32Bytes`: `Uint8Array`; `type`: `"bip32Bytes"`; \} \| \{ `address`: `string`; `type`: `"address"`; \}

Defined in: [mesh/index.ts:39](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-wallet/src/mesh/index.ts#L39)

***

### keyIndex?

> `optional` **keyIndex**: `number`

Defined in: [mesh/index.ts:62](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-wallet/src/mesh/index.ts#L62)

***

### networkId

> **networkId**: `0` \| `1`

Defined in: [mesh/index.ts:36](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-wallet/src/mesh/index.ts#L36)

***

### submitter?

> `optional` **submitter**: `ISubmitter`

Defined in: [mesh/index.ts:38](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-wallet/src/mesh/index.ts#L38)
