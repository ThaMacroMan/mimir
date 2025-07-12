[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / IWallet

# Interface: IWallet

Defined in: [interfaces/wallet.ts:6](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/wallet.ts#L6)

## Extends

- [`IInitiator`](IInitiator.md).[`ISigner`](ISigner.md).[`ISubmitter`](ISubmitter.md)

## Methods

### getAssets()

> **getAssets**(): `Promise`\<[`AssetExtended`](../type-aliases/AssetExtended.md)[]\>

Defined in: [interfaces/wallet.ts:7](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/wallet.ts#L7)

#### Returns

`Promise`\<[`AssetExtended`](../type-aliases/AssetExtended.md)[]\>

***

### getBalance()

> **getBalance**(): `Promise`\<[`Asset`](../type-aliases/Asset.md)[]\>

Defined in: [interfaces/wallet.ts:8](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/wallet.ts#L8)

#### Returns

`Promise`\<[`Asset`](../type-aliases/Asset.md)[]\>

***

### getChangeAddress()

> **getChangeAddress**(): `Promise`\<`string`\>

Defined in: [interfaces/initiator.ts:4](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/initiator.ts#L4)

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`IInitiator`](IInitiator.md).[`getChangeAddress`](IInitiator.md#getchangeaddress)

***

### getCollateral()

> **getCollateral**(): `Promise`\<[`UTxO`](../type-aliases/UTxO.md)[]\>

Defined in: [interfaces/initiator.ts:5](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/initiator.ts#L5)

#### Returns

`Promise`\<[`UTxO`](../type-aliases/UTxO.md)[]\>

#### Inherited from

[`IInitiator`](IInitiator.md).[`getCollateral`](IInitiator.md#getcollateral)

***

### getDRep()

> **getDRep**(): `Promise`\<`undefined` \| \{ `dRepIDCip105`: `string`; `publicKey`: `string`; `publicKeyHash`: `string`; \}\>

Defined in: [interfaces/wallet.ts:14](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/wallet.ts#L14)

#### Returns

`Promise`\<`undefined` \| \{ `dRepIDCip105`: `string`; `publicKey`: `string`; `publicKeyHash`: `string`; \}\>

***

### getExtensions()

> **getExtensions**(): `Promise`\<`number`[]\>

Defined in: [interfaces/wallet.ts:9](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/wallet.ts#L9)

#### Returns

`Promise`\<`number`[]\>

***

### getLovelace()

> **getLovelace**(): `Promise`\<`string`\>

Defined in: [interfaces/wallet.ts:11](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/wallet.ts#L11)

#### Returns

`Promise`\<`string`\>

***

### getNetworkId()

> **getNetworkId**(): `Promise`\<`number`\>

Defined in: [interfaces/wallet.ts:12](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/wallet.ts#L12)

#### Returns

`Promise`\<`number`\>

***

### getPolicyIdAssets()

> **getPolicyIdAssets**(`policyId`): `Promise`\<[`AssetExtended`](../type-aliases/AssetExtended.md)[]\>

Defined in: [interfaces/wallet.ts:23](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/wallet.ts#L23)

#### Parameters

##### policyId

`string`

#### Returns

`Promise`\<[`AssetExtended`](../type-aliases/AssetExtended.md)[]\>

***

### getPolicyIds()

> **getPolicyIds**(): `Promise`\<`string`[]\>

Defined in: [interfaces/wallet.ts:24](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/wallet.ts#L24)

#### Returns

`Promise`\<`string`[]\>

***

### getRegisteredPubStakeKeys()

> **getRegisteredPubStakeKeys**(): `Promise`\<`undefined` \| \{ `pubStakeKeyHashes`: `string`[]; `pubStakeKeys`: `string`[]; \}\>

Defined in: [interfaces/wallet.ts:25](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/wallet.ts#L25)

#### Returns

`Promise`\<`undefined` \| \{ `pubStakeKeyHashes`: `string`[]; `pubStakeKeys`: `string`[]; \}\>

***

### getRewardAddresses()

> **getRewardAddresses**(): `Promise`\<`string`[]\>

Defined in: [interfaces/wallet.ts:13](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/wallet.ts#L13)

#### Returns

`Promise`\<`string`[]\>

***

### getUnregisteredPubStakeKeys()

> **getUnregisteredPubStakeKeys**(): `Promise`\<`undefined` \| \{ `pubStakeKeyHashes`: `string`[]; `pubStakeKeys`: `string`[]; \}\>

Defined in: [interfaces/wallet.ts:32](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/wallet.ts#L32)

#### Returns

`Promise`\<`undefined` \| \{ `pubStakeKeyHashes`: `string`[]; `pubStakeKeys`: `string`[]; \}\>

***

### getUnusedAddresses()

> **getUnusedAddresses**(): `Promise`\<`string`[]\>

Defined in: [interfaces/wallet.ts:22](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/wallet.ts#L22)

#### Returns

`Promise`\<`string`[]\>

***

### getUsedAddresses()

> **getUsedAddresses**(): `Promise`\<`string`[]\>

Defined in: [interfaces/wallet.ts:10](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/wallet.ts#L10)

#### Returns

`Promise`\<`string`[]\>

***

### getUtxos()

> **getUtxos**(): `Promise`\<[`UTxO`](../type-aliases/UTxO.md)[]\>

Defined in: [interfaces/initiator.ts:6](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/initiator.ts#L6)

#### Returns

`Promise`\<[`UTxO`](../type-aliases/UTxO.md)[]\>

#### Inherited from

[`IInitiator`](IInitiator.md).[`getUtxos`](IInitiator.md#getutxos)

***

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

#### Inherited from

[`ISigner`](ISigner.md).[`signData`](ISigner.md#signdata)

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

#### Inherited from

[`ISigner`](ISigner.md).[`signTx`](ISigner.md#signtx)

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

#### Inherited from

[`ISigner`](ISigner.md).[`signTxs`](ISigner.md#signtxs)

***

### submitTx()

> **submitTx**(`tx`): `Promise`\<`string`\>

Defined in: [interfaces/submitter.ts:2](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/submitter.ts#L2)

#### Parameters

##### tx

`string`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`ISubmitter`](ISubmitter.md).[`submitTx`](ISubmitter.md#submittx)
