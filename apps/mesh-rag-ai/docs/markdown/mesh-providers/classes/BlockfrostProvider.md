[**@meshsdk/provider**](../README.md)

***

[@meshsdk/provider](../globals.md) / BlockfrostProvider

# Class: BlockfrostProvider

Defined in: [blockfrost.ts:49](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L49)

Blockfrost provides restful APIs which allows your app to access information stored on the blockchain.

Usage:
```
import { BlockfrostProvider } from "@meshsdk/core";

const provider = new BlockfrostProvider('<Your-API-Key>');

## Implements

- `IFetcher`
- `IListener`
- `ISubmitter`
- `IEvaluator`

## Constructors

### Constructor

> **new BlockfrostProvider**(`baseUrl`): `BlockfrostProvider`

Defined in: [blockfrost.ts:60](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L60)

If you are using a privately hosted Blockfrost instance, you can set the URL in the parameter.

#### Parameters

##### baseUrl

`string`

The base URL of the instance.

#### Returns

`BlockfrostProvider`

### Constructor

> **new BlockfrostProvider**(`projectId`, `version?`): `BlockfrostProvider`

Defined in: [blockfrost.ts:67](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L67)

If you are using [Blockfrost](https://blockfrost.io/) hosted instance, you can set the project ID in the parameter.

#### Parameters

##### projectId

`string`

The project ID of the instance.

##### version?

`number`

The version of the API. Default is 0.

#### Returns

`BlockfrostProvider`

## Methods

### evaluateTx()

> **evaluateTx**(`cbor`): `Promise`\<`Omit`\<`Action`, `"data"`\>[]\>

Defined in: [blockfrost.ts:93](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L93)

Evaluates the resources required to execute the transaction

#### Parameters

##### cbor

`string`

#### Returns

`Promise`\<`Omit`\<`Action`, `"data"`\>[]\>

#### Implementation of

`IEvaluator.evaluateTx`

***

### fetchAccountInfo()

> **fetchAccountInfo**(`address`): `Promise`\<`AccountInfo`\>

Defined in: [blockfrost.ts:136](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L136)

Obtain information about a specific stake account.

#### Parameters

##### address

`string`

Wallet address to fetch account information

#### Returns

`Promise`\<`AccountInfo`\>

#### Implementation of

`IFetcher.fetchAccountInfo`

***

### fetchAddressAssets()

> **fetchAddressAssets**(`address`): `Promise`\<\{[`key`: `string`]: `string`; \}\>

Defined in: [blockfrost.ts:166](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L166)

Fetches the assets for a given address.

#### Parameters

##### address

`string`

The address to fetch assets for

#### Returns

`Promise`\<\{[`key`: `string`]: `string`; \}\>

A map of asset unit to quantity

***

### fetchAddressTransactions()

> **fetchAddressTransactions**(`address`): `Promise`\<`TransactionInfo`[]\>

Defined in: [blockfrost.ts:214](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L214)

Deprecated, use fetchAddressTxs instead

#### Parameters

##### address

`string`

#### Returns

`Promise`\<`TransactionInfo`[]\>

- partial TransactionInfo

***

### fetchAddressTxs()

> **fetchAddressTxs**(`address`, `option`): `Promise`\<`TransactionInfo`[]\>

Defined in: [blockfrost.ts:178](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L178)

Transactions for an address. The `TransactionInfo` would only return the `hash`, `inputs`, and `outputs`.

#### Parameters

##### address

`string`

The address to fetch transactions for

##### option

`IFetcherOptions` = `DEFAULT_FETCHER_OPTIONS`

#### Returns

`Promise`\<`TransactionInfo`[]\>

- partial TransactionInfo

#### Implementation of

`IFetcher.fetchAddressTxs`

***

### fetchAddressUTxOs()

> **fetchAddressUTxOs**(`address`, `asset?`): `Promise`\<`UTxO`[]\>

Defined in: [blockfrost.ts:224](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L224)

UTXOs of the address.

#### Parameters

##### address

`string`

The address to fetch UTXO

##### asset?

`string`

UTXOs of a given asset​

#### Returns

`Promise`\<`UTxO`[]\>

- Array of UTxOs

#### Implementation of

`IFetcher.fetchAddressUTxOs`

***

### fetchAssetAddresses()

> **fetchAssetAddresses**(`asset`): `Promise`\<`object`[]\>

Defined in: [blockfrost.ts:262](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L262)

Fetches the asset addresses for a given asset.

#### Parameters

##### asset

`string`

The asset to fetch addresses for

#### Returns

`Promise`\<`object`[]\>

#### Implementation of

`IFetcher.fetchAssetAddresses`

***

### fetchAssetMetadata()

> **fetchAssetMetadata**(`asset`): `Promise`\<`any`\>

Defined in: [blockfrost.ts:294](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L294)

Fetches the metadata for a given asset.

#### Parameters

##### asset

`string`

The asset to fetch metadata for

#### Returns

`Promise`\<`any`\>

The metadata for the asset

#### Implementation of

`IFetcher.fetchAssetMetadata`

***

### fetchBlockInfo()

> **fetchBlockInfo**(`hash`): `Promise`\<`BlockInfo`\>

Defined in: [blockfrost.ts:354](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L354)

Fetches the block information for a given block hash.

#### Parameters

##### hash

`string`

The block hash to fetch from

#### Returns

`Promise`\<`BlockInfo`\>

The block information

#### Implementation of

`IFetcher.fetchBlockInfo`

***

### fetchCollectionAssets()

> **fetchCollectionAssets**(`policyId`, `cursor`): `Promise`\<\{ `assets`: `Asset`[]; `next`: `null` \| `string` \| `number`; \}\>

Defined in: [blockfrost.ts:389](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L389)

Fetches the list of assets for a given policy ID.

#### Parameters

##### policyId

`string`

The policy ID to fetch assets for

##### cursor

`number` = `1`

The cursor for pagination

#### Returns

`Promise`\<\{ `assets`: `Asset`[]; `next`: `null` \| `string` \| `number`; \}\>

The list of assets and the next cursor

#### Implementation of

`IFetcher.fetchCollectionAssets`

***

### fetchGovernanceProposal()

> **fetchGovernanceProposal**(`txHash`, `certIndex`): `Promise`\<`GovernanceProposalInfo`\>

Defined in: [blockfrost.ts:564](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L564)

Fetches the governance proposal information.

#### Parameters

##### txHash

`string`

The transaction hash of the proposal

##### certIndex

`number`

The certificate index of the proposal

#### Returns

`Promise`\<`GovernanceProposalInfo`\>

The governance proposal information

#### Implementation of

`IFetcher.fetchGovernanceProposal`

***

### fetchHandle()

> **fetchHandle**(`handle`): `Promise`\<`any`\>

Defined in: [blockfrost.ts:413](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L413)

#### Parameters

##### handle

`string`

#### Returns

`Promise`\<`any`\>

***

### fetchHandleAddress()

> **fetchHandleAddress**(`handle`): `Promise`\<`string`\>

Defined in: [blockfrost.ts:430](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L430)

#### Parameters

##### handle

`string`

#### Returns

`Promise`\<`string`\>

***

### fetchLatestBlock()

> **fetchLatestBlock**(): `Promise`\<`BlockInfo`\>

Defined in: [blockfrost.ts:320](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L320)

Fetches the metadata for a given asset.

#### Returns

`Promise`\<`BlockInfo`\>

The metadata for the asset

***

### fetchProtocolParameters()

> **fetchProtocolParameters**(`epoch`): `Promise`\<`Protocol`\>

Defined in: [blockfrost.ts:455](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L455)

Fetch the latest protocol parameters.

#### Parameters

##### epoch

`number` = `Number.NaN`

Optional - The epoch to fetch protocol parameters for

#### Returns

`Promise`\<`Protocol`\>

- Protocol parameters

#### Implementation of

`IFetcher.fetchProtocolParameters`

***

### fetchTxInfo()

> **fetchTxInfo**(`hash`): `Promise`\<`TransactionInfo`\>

Defined in: [blockfrost.ts:496](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L496)

Fetches the transaction information for a given transaction hash.

#### Parameters

##### hash

`string`

The transaction hash to fetch

#### Returns

`Promise`\<`TransactionInfo`\>

The transaction information

#### Implementation of

`IFetcher.fetchTxInfo`

***

### fetchUTxOs()

> **fetchUTxOs**(`hash`, `index?`): `Promise`\<`UTxO`[]\>

Defined in: [blockfrost.ts:533](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L533)

Get UTxOs for a given hash.

#### Parameters

##### hash

`string`

The transaction hash

##### index?

`number`

Optional - The output index for filtering post fetching

#### Returns

`Promise`\<`UTxO`[]\>

- Array of UTxOs

#### Implementation of

`IFetcher.fetchUTxOs`

***

### get()

> **get**(`url`): `Promise`\<`any`\>

Defined in: [blockfrost.ts:602](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L602)

A generic method to fetch data from a URL.

#### Parameters

##### url

`string`

The URL to fetch data from

#### Returns

`Promise`\<`any`\>

- The data fetched from the URL

#### Implementation of

`IFetcher.get`

***

### onTxConfirmed()

> **onTxConfirmed**(`txHash`, `callback`, `limit`): `void`

Defined in: [blockfrost.ts:645](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L645)

Allow you to listen to a transaction confirmation. Upon confirmation, the callback will be called.

#### Parameters

##### txHash

`string`

The transaction hash to listen for confirmation

##### callback

() => `void`

The callback function to call when the transaction is confirmed

##### limit

`number` = `100`

The number of blocks to wait for confirmation

#### Returns

`void`

#### Implementation of

`IListener.onTxConfirmed`

***

### post()

> **post**(`url`, `body`, `headers`): `Promise`\<`any`\>

Defined in: [blockfrost.ts:621](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L621)

A generic method to post data to a URL.

#### Parameters

##### url

`string`

The URL to fetch data from

##### body

`any`

Payload

##### headers

Specify headers, default: { "Content-Type": "application/json" }

###### Content-Type

`string` = `"application/json"`

#### Returns

`Promise`\<`any`\>

- Data

***

### setSubmitTxToBytes()

> **setSubmitTxToBytes**(`value`): `void`

Defined in: [blockfrost.ts:670](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L670)

#### Parameters

##### value

`boolean`

#### Returns

`void`

***

### submitTx()

> **submitTx**(`tx`): `Promise`\<`string`\>

Defined in: [blockfrost.ts:679](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-provider/src/blockfrost.ts#L679)

Submit a serialized transaction to the network.

#### Parameters

##### tx

`string`

The serialized transaction in hex to submit

#### Returns

`Promise`\<`string`\>

The transaction hash of the submitted transaction

#### Implementation of

`ISubmitter.submitTx`
