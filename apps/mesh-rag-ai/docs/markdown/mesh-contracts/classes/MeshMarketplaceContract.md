[**@meshsdk/contract**](../README.md)

***

[@meshsdk/contract](../globals.md) / MeshMarketplaceContract

# Class: MeshMarketplaceContract

Defined in: [mesh-contract/src/marketplace/offchain.ts:48](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/marketplace/offchain.ts#L48)

## Extends

- `MeshTxInitiator`

## Constructors

### Constructor

> **new MeshMarketplaceContract**(`inputs`, `ownerAddress`, `feePercentageBasisPoint`): `MeshMarketplaceContract`

Defined in: [mesh-contract/src/marketplace/offchain.ts:54](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/marketplace/offchain.ts#L54)

#### Parameters

##### inputs

`MeshTxInitiatorInput`

##### ownerAddress

`string`

##### feePercentageBasisPoint

`number`

#### Returns

`MeshMarketplaceContract`

#### Overrides

`MeshTxInitiator.constructor`

## Properties

### feePercentageBasisPoint

> **feePercentageBasisPoint**: `number`

Defined in: [mesh-contract/src/marketplace/offchain.ts:50](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/marketplace/offchain.ts#L50)

***

### fetcher?

> `optional` **fetcher**: `IFetcher`

Defined in: [mesh-contract/src/common.ts:23](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L23)

#### Inherited from

`MeshTxInitiator.fetcher`

***

### languageVersion

> **languageVersion**: `"V1"` \| `"V2"` \| `"V3"` = `"V2"`

Defined in: [mesh-contract/src/common.ts:28](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L28)

#### Inherited from

`MeshTxInitiator.languageVersion`

***

### mesh

> **mesh**: `MeshTxBuilder`

Defined in: [mesh-contract/src/common.ts:22](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L22)

#### Inherited from

`MeshTxInitiator.mesh`

***

### networkId

> **networkId**: `number` = `0`

Defined in: [mesh-contract/src/common.ts:26](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L26)

#### Inherited from

`MeshTxInitiator.networkId`

***

### ownerAddress

> **ownerAddress**: `string`

Defined in: [mesh-contract/src/marketplace/offchain.ts:49](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/marketplace/offchain.ts#L49)

***

### scriptAddress

> **scriptAddress**: `string`

Defined in: [mesh-contract/src/marketplace/offchain.ts:52](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/marketplace/offchain.ts#L52)

***

### scriptCbor

> **scriptCbor**: `string`

Defined in: [mesh-contract/src/marketplace/offchain.ts:51](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/marketplace/offchain.ts#L51)

***

### stakeCredential?

> `optional` **stakeCredential**: `string`

Defined in: [mesh-contract/src/common.ts:25](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L25)

#### Inherited from

`MeshTxInitiator.stakeCredential`

***

### version

> **version**: `number` = `2`

Defined in: [mesh-contract/src/common.ts:27](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L27)

#### Inherited from

`MeshTxInitiator.version`

***

### wallet?

> `optional` **wallet**: `IWallet`

Defined in: [mesh-contract/src/common.ts:24](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L24)

#### Inherited from

`MeshTxInitiator.wallet`

## Methods

### \_getUtxoByTxHash()

> `protected` **\_getUtxoByTxHash**(`txHash`, `scriptCbor?`): `Promise`\<`undefined` \| `UTxO`\>

Defined in: [mesh-contract/src/common.ts:197](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L197)

#### Parameters

##### txHash

`string`

##### scriptCbor?

`string`

#### Returns

`Promise`\<`undefined` \| `UTxO`\>

#### Inherited from

`MeshTxInitiator._getUtxoByTxHash`

***

### delistAsset()

> **delistAsset**(`marketplaceUtxo`): `Promise`\<`string`\>

Defined in: [mesh-contract/src/marketplace/offchain.ts:120](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/marketplace/offchain.ts#L120)

#### Parameters

##### marketplaceUtxo

`UTxO`

#### Returns

`Promise`\<`string`\>

***

### getAddressUtxosWithMinLovelace()

> `protected` **getAddressUtxosWithMinLovelace**(`walletAddress`, `lovelace`, `providedUtxos`): `Promise`\<`UTxO`[]\>

Defined in: [mesh-contract/src/common.ts:147](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L147)

#### Parameters

##### walletAddress

`string`

##### lovelace

`number`

##### providedUtxos

`UTxO`[] = `[]`

#### Returns

`Promise`\<`UTxO`[]\>

#### Inherited from

`MeshTxInitiator.getAddressUtxosWithMinLovelace`

***

### getAddressUtxosWithToken()

> `protected` **getAddressUtxosWithToken**(`walletAddress`, `assetHex`, `userUtxos`): `Promise`\<`UTxO`[]\>

Defined in: [mesh-contract/src/common.ts:164](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L164)

#### Parameters

##### walletAddress

`string`

##### assetHex

`string`

##### userUtxos

`UTxO`[] = `[]`

#### Returns

`Promise`\<`UTxO`[]\>

#### Inherited from

`MeshTxInitiator.getAddressUtxosWithToken`

***

### getScriptAddress()

> **getScriptAddress**(`scriptCbor`): `string`

Defined in: [mesh-contract/src/common.ts:69](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L69)

#### Parameters

##### scriptCbor

`string`

#### Returns

`string`

#### Inherited from

`MeshTxInitiator.getScriptAddress`

***

### getScriptCbor()

> **getScriptCbor**(`pubKeyHash`, `stakeCredentialHash`, `feePercentageBasisPoint`): `string`

Defined in: [mesh-contract/src/marketplace/offchain.ts:74](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/marketplace/offchain.ts#L74)

#### Parameters

##### pubKeyHash

`string`

##### stakeCredentialHash

`string`

##### feePercentageBasisPoint

`number`

#### Returns

`string`

***

### getUtxoByTxHash()

> **getUtxoByTxHash**(`txHash`): `Promise`\<`undefined` \| `UTxO`\>

Defined in: [mesh-contract/src/marketplace/offchain.ts:256](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/marketplace/offchain.ts#L256)

#### Parameters

##### txHash

`string`

#### Returns

`Promise`\<`undefined` \| `UTxO`\>

***

### getWalletCollateral()

> `protected` **getWalletCollateral**(): `Promise`\<`undefined` \| `UTxO`\>

Defined in: [mesh-contract/src/common.ts:107](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L107)

#### Returns

`Promise`\<`undefined` \| `UTxO`\>

#### Inherited from

`MeshTxInitiator.getWalletCollateral`

***

### getWalletDappAddress()

> `protected` **getWalletDappAddress**(): `Promise`\<`undefined` \| `string`\>

Defined in: [mesh-contract/src/common.ts:93](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L93)

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Inherited from

`MeshTxInitiator.getWalletDappAddress`

***

### getWalletInfoForTx()

> `protected` **getWalletInfoForTx**(): `Promise`\<\{ `collateral`: `UTxO`; `utxos`: `UTxO`[]; `walletAddress`: `string`; \}\>

Defined in: [mesh-contract/src/common.ts:181](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L181)

#### Returns

`Promise`\<\{ `collateral`: `UTxO`; `utxos`: `UTxO`[]; `walletAddress`: `string`; \}\>

#### Inherited from

`MeshTxInitiator.getWalletInfoForTx`

***

### getWalletUtxosWithMinLovelace()

> `protected` **getWalletUtxosWithMinLovelace**(`lovelace`, `providedUtxos`): `Promise`\<`UTxO`[]\>

Defined in: [mesh-contract/src/common.ts:115](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L115)

#### Parameters

##### lovelace

`number`

##### providedUtxos

`UTxO`[] = `[]`

#### Returns

`Promise`\<`UTxO`[]\>

#### Inherited from

`MeshTxInitiator.getWalletUtxosWithMinLovelace`

***

### getWalletUtxosWithToken()

> `protected` **getWalletUtxosWithToken**(`assetHex`, `userUtxos`): `Promise`\<`UTxO`[]\>

Defined in: [mesh-contract/src/common.ts:131](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L131)

#### Parameters

##### assetHex

`string`

##### userUtxos

`UTxO`[] = `[]`

#### Returns

`Promise`\<`UTxO`[]\>

#### Inherited from

`MeshTxInitiator.getWalletUtxosWithToken`

***

### listAsset()

> **listAsset**(`asset`, `price`): `Promise`\<`string`\>

Defined in: [mesh-contract/src/marketplace/offchain.ts:101](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/marketplace/offchain.ts#L101)

#### Parameters

##### asset

`string`

##### price

`number`

#### Returns

`Promise`\<`string`\>

***

### purchaseAsset()

> **purchaseAsset**(`marketplaceUtxo`): `Promise`\<`string`\>

Defined in: [mesh-contract/src/marketplace/offchain.ts:149](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/marketplace/offchain.ts#L149)

#### Parameters

##### marketplaceUtxo

`UTxO`

#### Returns

`Promise`\<`string`\>

***

### queryUtxos()

> `protected` **queryUtxos**(`walletAddress`): `Promise`\<`UTxO`[]\>

Defined in: [mesh-contract/src/common.ts:85](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L85)

#### Parameters

##### walletAddress

`string`

#### Returns

`Promise`\<`UTxO`[]\>

#### Inherited from

`MeshTxInitiator.queryUtxos`

***

### relistAsset()

> **relistAsset**(`marketplaceUtxo`, `newPrice`): `Promise`\<`string`\>

Defined in: [mesh-contract/src/marketplace/offchain.ts:219](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/marketplace/offchain.ts#L219)

#### Parameters

##### marketplaceUtxo

`UTxO`

##### newPrice

`number`

#### Returns

`Promise`\<`string`\>

***

### signSubmitReset()

> `protected` **signSubmitReset**(): `Promise`\<`undefined` \| `string`\>

Defined in: [mesh-contract/src/common.ts:78](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/common.ts#L78)

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Inherited from

`MeshTxInitiator.signSubmitReset`

***

### getCompiledCode()

> `static` **getCompiledCode**(`version`): `string`

Defined in: [mesh-contract/src/marketplace/offchain.ts:260](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-contract/src/marketplace/offchain.ts#L260)

#### Parameters

##### version

`number` = `2`

#### Returns

`string`
