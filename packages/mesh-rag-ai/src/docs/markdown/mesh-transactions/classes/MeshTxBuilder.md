[**@meshsdk/transaction**](../README.md)

***

[@meshsdk/transaction](../globals.md) / MeshTxBuilder

# Class: MeshTxBuilder

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:59](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L59)

## Extends

- `MeshTxBuilderCore`

## Constructors

### Constructor

> **new MeshTxBuilder**(`__namedParameters`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:70](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L70)

#### Parameters

##### \_\_namedParameters

[`MeshTxBuilderOptions`](../interfaces/MeshTxBuilderOptions.md) = `{}`

#### Returns

`MeshTxBuilder`

#### Overrides

`MeshTxBuilderCore.constructor`

## Properties

### \_protocolParams

> `protected` **\_protocolParams**: `Protocol` = `DEFAULT_PROTOCOL_PARAMETERS`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:58](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L58)

#### Inherited from

`MeshTxBuilderCore._protocolParams`

***

### collateralQueueItem?

> `protected` `optional` **collateralQueueItem**: `PubKeyTxIn`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:68](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L68)

#### Inherited from

`MeshTxBuilderCore.collateralQueueItem`

***

### evaluator?

> `optional` **evaluator**: `IEvaluator`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:63](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L63)

***

### fetcher?

> `optional` **fetcher**: `IFetcher`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:61](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L61)

***

### manualFee

> `protected` **manualFee**: `undefined` \| `string`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:56](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L56)

#### Inherited from

`MeshTxBuilderCore.manualFee`

***

### meshTxBuilderBody

> **meshTxBuilderBody**: `MeshTxBuilderBody`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:72](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L72)

#### Inherited from

`MeshTxBuilderCore.meshTxBuilderBody`

***

### mintItem?

> `protected` `optional` **mintItem**: `MintItem`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:60](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L60)

#### Inherited from

`MeshTxBuilderCore.mintItem`

***

### queriedTxHashes

> `protected` **queriedTxHashes**: `Set`\<`string`\>

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:66](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L66)

***

### queriedUTxOs

> `protected` **queriedUTxOs**: `object` = `{}`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:67](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L67)

#### Index Signature

\[`x`: `string`\]: `UTxO`[]

***

### refScriptTxInQueueItem?

> `protected` `optional` **refScriptTxInQueueItem**: `RefTxIn`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:70](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L70)

#### Inherited from

`MeshTxBuilderCore.refScriptTxInQueueItem`

***

### serializer

> **serializer**: `IMeshTxSerializer`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:60](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L60)

***

### submitter?

> `optional` **submitter**: `ISubmitter`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:62](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L62)

***

### txEvaluationMultiplier

> **txEvaluationMultiplier**: `number` = `1`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:45](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L45)

#### Inherited from

`MeshTxBuilderCore.txEvaluationMultiplier`

***

### txHex

> **txHex**: `string` = `""`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:64](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L64)

***

### txInQueueItem?

> `protected` `optional` **txInQueueItem**: `TxIn`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:62](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L62)

#### Inherited from

`MeshTxBuilderCore.txInQueueItem`

***

### utxosWithRefScripts

> `protected` **utxosWithRefScripts**: `UTxO`[] = `[]`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:68](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L68)

***

### verbose

> **verbose**: `boolean`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:65](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L65)

***

### voteItem?

> `protected` `optional` **voteItem**: `Vote`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:66](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L66)

#### Inherited from

`MeshTxBuilderCore.voteItem`

***

### withdrawalItem?

> `protected` `optional` **withdrawalItem**: `Withdrawal`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:64](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L64)

#### Inherited from

`MeshTxBuilderCore.withdrawalItem`

## Methods

### \_cloneCore()

> `protected` **\_cloneCore**\<`T`\>(`createInstance`): `T`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:2012](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L2012)

#### Type Parameters

##### T

`T` *extends* `MeshTxBuilderCore`

#### Parameters

##### createInstance

() => `T`

#### Returns

`T`

#### Inherited from

`MeshTxBuilderCore._cloneCore`

***

### addUtxosFromSelection()

> **addUtxosFromSelection**(): `void`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1853](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1853)

#### Returns

`void`

#### Inherited from

`MeshTxBuilderCore.addUtxosFromSelection`

***

### calculateFee()

> **calculateFee**(): `bigint`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1692](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1692)

#### Returns

`bigint`

***

### calculateFeeForSerializedTx()

> **calculateFeeForSerializedTx**(`txSize`): `bigint`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1697](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1697)

#### Parameters

##### txSize

`number`

#### Returns

`bigint`

***

### calculateMinLovelaceForOutput()

> **calculateMinLovelaceForOutput**(`output`): `bigint`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1723](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1723)

#### Parameters

##### output

`Output`

#### Returns

`bigint`

***

### calculateRedeemersFee()

> **calculateRedeemersFee**(): `bigint`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1712](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1712)

#### Returns

`bigint`

***

### calculateRefScriptFee()

> **calculateRefScriptFee**(): `bigint`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1706](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1706)

#### Returns

`bigint`

***

### castBuilderDataToRedeemer()

> `protected` **castBuilderDataToRedeemer**(`redeemer`, `type`, `exUnits`): `Redeemer`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1713](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1713)

#### Parameters

##### redeemer

`object` | `Data`

##### type

`"Mesh"` | `"JSON"` | `"CBOR"`

##### exUnits

###### mem

`number`

###### steps

`number`

#### Returns

`Redeemer`

#### Inherited from

`MeshTxBuilderCore.castBuilderDataToRedeemer`

***

### castRawDataToJsonString()

> `protected` **castRawDataToJsonString**(`rawData`): `string`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1705](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1705)

#### Parameters

##### rawData

`string` | `object`

#### Returns

`string`

#### Inherited from

`MeshTxBuilderCore.castRawDataToJsonString`

***

### certificateRedeemerValue()

> **certificateRedeemerValue**(`redeemer`, `type`, `exUnits`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1368](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1368)

#### Parameters

##### redeemer

`object` | `Data`

##### type

`"Mesh"` | `"JSON"` | `"CBOR"`

##### exUnits

###### mem

`number`

###### steps

`number`

#### Returns

`MeshTxBuilder`

#### Inherited from

`MeshTxBuilderCore.certificateRedeemerValue`

***

### certificateScript()

> **certificateScript**(`scriptCbor`, `version?`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1279](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1279)

Adds a script witness to the certificate

#### Parameters

##### scriptCbor

`string`

The CborHex of the script

##### version?

Optional - The plutus version of the script, null version implies Native Script

`"V1"` | `"V2"` | `"V3"`

#### Returns

`MeshTxBuilder`

#### Inherited from

`MeshTxBuilderCore.certificateScript`

***

### certificateTxInReference()

> **certificateTxInReference**(`txHash`, `txIndex`, `scriptSize?`, `scriptHash?`, `version?`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1323](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1323)

Adds a script witness to the certificate

#### Parameters

##### txHash

`string`

The transaction hash of the reference UTxO

##### txIndex

`number`

The transaction index of the reference UTxO

##### scriptSize?

`string`

The size of the plutus script in bytes referenced (can be obtained by script hex length / 2)

##### scriptHash?

`string`

The script hash of the spending script

##### version?

The plutus version of the script, null version implies Native Script

`"V1"` | `"V2"` | `"V3"`

#### Returns

`MeshTxBuilder`

#### Inherited from

`MeshTxBuilderCore.certificateTxInReference`

***

### chainTx()

> **chainTx**(`txHex`): `this`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1535](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1535)

Add a transaction that is used as input, but not yet reflected on the global blockchain

#### Parameters

##### txHex

`string`

The transaction hex of chained transaction

#### Returns

`this`

The MeshTxBuilderCore instance

#### Inherited from

`MeshTxBuilderCore.chainTx`

***

### changeAddress()

> **changeAddress**(`addr`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1399](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1399)

Configure the address to accept change UTxO

#### Parameters

##### addr

`string`

The address to accept change UTxO

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.changeAddress`

***

### clone()

> `protected` **clone**(): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1727](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1727)

#### Returns

`MeshTxBuilder`

***

### collectAllRequiredSignatures()

> `protected` **collectAllRequiredSignatures**(): `object`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:969](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L969)

#### Returns

`object`

##### byronAddresses

> **byronAddresses**: `Set`\<`string`\>

##### keyHashes

> **keyHashes**: `Set`\<`string`\>

***

### compareCredentials()

> `protected` **compareCredentials**(`credentialA`, `credentialB`): `number`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:349](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L349)

#### Parameters

##### credentialA

`Credential`

##### credentialB

`Credential`

#### Returns

`number`

***

### complete()

> **complete**(`customizedTx?`): `Promise`\<`string`\>

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:151](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L151)

It builds the transaction and query the blockchain for missing information

#### Parameters

##### customizedTx?

`Partial`\<`MeshTxBuilderBody`\>

The optional customized transaction body

#### Returns

`Promise`\<`string`\>

The signed transaction in hex ready to submit / signed by client

***

### completeInputInfo()

> `protected` **completeInputInfo**(`input`): `void`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:656](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L656)

#### Parameters

##### input

`TxIn`

#### Returns

`void`

***

### completeScriptInfo()

> `protected` **completeScriptInfo**(`scriptSource`): `void`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:682](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L682)

#### Parameters

##### scriptSource

`ScriptSource`

#### Returns

`void`

***

### completeSerialization()

> `protected` **completeSerialization**(`customizedTx?`): `Promise`\<`string`\>

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:765](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L765)

#### Parameters

##### customizedTx?

`Partial`\<`MeshTxBuilderBody`\>

#### Returns

`Promise`\<`string`\>

***

### completeSigning()

> **completeSigning**(): `string`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:579](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L579)

Complete the signing process

#### Returns

`string`

The signed transaction in hex

***

### completeSimpleScriptInfo()

> `protected` **completeSimpleScriptInfo**(`simpleScript`): `void`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:698](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L698)

#### Parameters

##### simpleScript

`SimpleScriptSourceInfo`

#### Returns

`void`

***

### completeSync()

> **completeSync**(`customizedTx?`): `string`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:131](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L131)

#### Parameters

##### customizedTx?

`MeshTxBuilderBody`

#### Returns

`string`

***

### completeTxInformation()

> `protected` **completeTxInformation**(`input`): `void`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:641](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L641)

#### Parameters

##### input

`TxIn`

#### Returns

`void`

***

### completeTxParts()

> `protected` **completeTxParts**(): `Promise`\<`void`\>

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:812](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L812)

#### Returns

`Promise`\<`void`\>

***

### completeUnbalanced()

> **completeUnbalanced**(`customizedTx?`): `string`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:117](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L117)

It builds the transaction query the blockchain for missing information

#### Parameters

##### customizedTx?

`MeshTxBuilderBody`

The optional customized transaction body

#### Returns

`string`

The transaction in hex, unbalanced

***

### completeUnbalancedSync()

> **completeUnbalancedSync**(`customizedTx?`): `string`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:558](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L558)

It builds the transaction without dependencies

#### Parameters

##### customizedTx?

`MeshTxBuilderBody`

The optional customized transaction body

#### Returns

`string`

The transaction in hex, unbalanced

***

### delegateStakeCertificate()

> **delegateStakeCertificate**(`rewardAddress`, `poolId`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1148](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1148)

Creates a stake delegation certificate, and adds it to the transaction
This will delegate stake from the corresponding stake address to the pool

#### Parameters

##### rewardAddress

`string`

The bech32 reward address (i.e. start with `stake_xxxxx`)

##### poolId

`string`

poolId can be in either bech32 or hex form

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.delegateStakeCertificate`

***

### deregisterStakeCertificate()

> **deregisterStakeCertificate**(`rewardAddress`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1165](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1165)

Creates a stake deregister certificate, and adds it to the transaction

#### Parameters

##### rewardAddress

`string`

The bech32 reward address (i.e. start with `stake_xxxxx`)

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.deregisterStakeCertificate`

***

### drepDeregistrationCertificate()

> **drepDeregistrationCertificate**(`drepId`, `coin`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1224](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1224)

Dregister DRep certificate, and adds it to the transaction

#### Parameters

##### drepId

`string`

The bech32 drep id (i.e. starts with `drep1xxxxx`)

##### coin

`string` = `DREP_DEPOSIT`

DRep registration deposit

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.drepDeregistrationCertificate`

***

### drepRegistrationCertificate()

> **drepRegistrationCertificate**(`drepId`, `anchor?`, `coin?`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1201](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1201)

Registers DRep certificate, and adds it to the transaction

#### Parameters

##### drepId

`string`

The bech32 drep id (i.e. starts with `drep1xxxxx`)

##### anchor?

`Anchor`

The DRep anchor, consists of a URL and a hash of the doc

##### coin?

`string` = `DREP_DEPOSIT`

DRep registration deposit

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.drepRegistrationCertificate`

***

### drepUpdateCertificate()

> **drepUpdateCertificate**(`drepId`, `anchor?`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1244](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1244)

Update DRep certificate, and adds it to the transaction

#### Parameters

##### drepId

`string`

The bech32 drep id (i.e. starts with `drep1xxxxx`)

##### anchor?

`Anchor`

The DRep anchor, consists of a URL and a hash of the doc

#### Returns

`MeshTxBuilder`

#### Inherited from

`MeshTxBuilderCore.drepUpdateCertificate`

***

### emptyTxBuilderBody()

> **emptyTxBuilderBody**(): () => `MeshTxBuilderBody`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1987](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1987)

#### Returns

> (): `MeshTxBuilderBody`

##### Returns

`MeshTxBuilderBody`

#### Inherited from

`MeshTxBuilderCore.emptyTxBuilderBody`

***

### evaluateRedeemers()

> **evaluateRedeemers**(): `Promise`\<`void`\>

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:462](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L462)

#### Returns

`Promise`\<`void`\>

***

### getActualFee()

> **getActualFee**(): `bigint`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1684](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1684)

#### Returns

`bigint`

***

### getAllReferenceInputsSizes()

> `protected` **getAllReferenceInputsSizes**(): `Map`\<`string`, `bigint`\>

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1483](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1483)

#### Returns

`Map`\<`string`, `bigint`\>

***

### getBodyReferenceInputsSizes()

> `protected` **getBodyReferenceInputsSizes**(): \[`string`, `bigint`\][]

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1514](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1514)

#### Returns

\[`string`, `bigint`\][]

***

### getCertificateNativeScript()

> `protected` **getCertificateNativeScript**(`cert`): `undefined` \| `NativeScript`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1342](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1342)

#### Parameters

##### cert

`Certificate`

#### Returns

`undefined` \| `NativeScript`

***

### getCertificatesReferenceInputsSizes()

> `protected` **getCertificatesReferenceInputsSizes**(): \[`string`, `bigint`\][]

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1608](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1608)

#### Returns

\[`string`, `bigint`\][]

***

### getCertificatesRequiredSignatures()

> `protected` **getCertificatesRequiredSignatures**(): `Set`\<`string`\>

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1083](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1083)

#### Returns

`Set`\<`string`\>

***

### getCollateralRequiredSignatures()

> `protected` **getCollateralRequiredSignatures**(): `object`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1032](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1032)

#### Returns

`object`

##### collateralByronAddresses

> **collateralByronAddresses**: `Set`\<`string`\>

##### collateralPaymentCreds

> **collateralPaymentCreds**: `Set`\<`string`\>

***

### getInlinedNativeScript()

> `protected` **getInlinedNativeScript**(`txHash`, `index`): `undefined` \| `NativeScript`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1451](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1451)

#### Parameters

##### txHash

`string`

##### index

`number`

#### Returns

`undefined` \| `NativeScript`

***

### getInputNativeScript()

> `protected` **getInputNativeScript**(`txIn`): `undefined` \| `NativeScript`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1428](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1428)

#### Parameters

##### txIn

`TxIn`

#### Returns

`undefined` \| `NativeScript`

***

### getInputsReferenceInputsSizes()

> `protected` **getInputsReferenceInputsSizes**(): \[`string`, `bigint`\][]

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1525](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1525)

#### Returns

\[`string`, `bigint`\][]

***

### getInputsRequiredSignatures()

> `protected` **getInputsRequiredSignatures**(): `object`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:997](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L997)

#### Returns

`object`

##### byronAddresses

> **byronAddresses**: `Set`\<`string`\>

##### paymentCreds

> **paymentCreds**: `Set`\<`string`\>

***

### getMintNativeScript()

> `protected` **getMintNativeScript**(`mint`): `undefined` \| `NativeScript`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1367](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1367)

#### Parameters

##### mint

`MintParam`

#### Returns

`undefined` \| `NativeScript`

***

### getMintRequiredSignatures()

> `protected` **getMintRequiredSignatures**(): `Set`\<`string`\>

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1204](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1204)

#### Returns

`Set`\<`string`\>

***

### getMintsReferenceInputsSizes()

> `protected` **getMintsReferenceInputsSizes**(): \[`string`, `bigint`\][]

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1549](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1549)

#### Returns

\[`string`, `bigint`\][]

***

### getNativeScriptPubKeys()

> `protected` **getNativeScriptPubKeys**(`nativeScript`): `Set`\<`string`\>

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1282](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1282)

#### Parameters

##### nativeScript

`NativeScript`

#### Returns

`Set`\<`string`\>

***

### getRedeemerCosts()

> `protected` **getRedeemerCosts**(): `Omit`\<`Action`, `"data"`\>[]

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:497](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L497)

#### Returns

`Omit`\<`Action`, `"data"`\>[]

***

### getSerializedSize()

> **getSerializedSize**(): `number`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1680](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1680)

#### Returns

`number`

***

### getTotalDeposit()

> `protected` **getTotalDeposit**(): `bigint`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1228](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1228)

#### Returns

`bigint`

***

### getTotalExecutionUnits()

> **getTotalExecutionUnits**(): `object`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1632](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1632)

#### Returns

`object`

##### memUnits

> **memUnits**: `bigint`

##### stepUnits

> **stepUnits**: `bigint`

***

### getTotalMint()

> `protected` **getTotalMint**(): `Asset`[]

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1266](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1266)

#### Returns

`Asset`[]

***

### getTotalReferenceInputsSize()

> `protected` **getTotalReferenceInputsSize**(): `bigint`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1474](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1474)

#### Returns

`bigint`

***

### getTotalRefund()

> `protected` **getTotalRefund**(): `bigint`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1251](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1251)

#### Returns

`bigint`

***

### getTotalWithdrawal()

> `protected` **getTotalWithdrawal**(): `bigint`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1220](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1220)

#### Returns

`bigint`

***

### getUTxOInfo()

> `protected` **getUTxOInfo**(`txHash`): `Promise`\<`void`\>

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:602](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L602)

Get the UTxO information from the blockchain

#### Parameters

##### txHash

`string`

The TxIn object that contains the txHash and txIndex, while missing amount and address information

#### Returns

`Promise`\<`void`\>

***

### getUtxosForSelection()

> **getUtxosForSelection**(): `Promise`\<`UTxO`[]\>

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:310](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L310)

#### Returns

`Promise`\<`UTxO`[]\>

***

### getVoteNativeScript()

> `protected` **getVoteNativeScript**(`cert`): `undefined` \| `NativeScript`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1319](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1319)

#### Parameters

##### cert

`Vote`

#### Returns

`undefined` \| `NativeScript`

***

### getVoteRequiredSignatures()

> `protected` **getVoteRequiredSignatures**(): `Set`\<`string`\>

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1172](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1172)

#### Returns

`Set`\<`string`\>

***

### getVotesReferenceInputsSizes()

> `protected` **getVotesReferenceInputsSizes**(): \[`string`, `bigint`\][]

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1584](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1584)

#### Returns

\[`string`, `bigint`\][]

***

### getWithdrawalNativeScript()

> `protected` **getWithdrawalNativeScript**(`withdrawal`): `undefined` \| `NativeScript`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1403](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1403)

#### Parameters

##### withdrawal

`Withdrawal`

#### Returns

`undefined` \| `NativeScript`

***

### getWithdrawalRequiredSignatures()

> `protected` **getWithdrawalRequiredSignatures**(): `Set`\<`string`\>

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1059](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1059)

#### Returns

`Set`\<`string`\>

***

### getWithdrawalsReferenceInputsSizes()

> `protected` **getWithdrawalsReferenceInputsSizes**(): \[`string`, `bigint`\][]

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1565](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1565)

#### Returns

\[`string`, `bigint`\][]

***

### inputForEvaluation()

> **inputForEvaluation**(`input`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1545](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1545)

Add a transaction input to provide information for offline evaluation

#### Parameters

##### input

`UTxO`

The input to be added

#### Returns

`MeshTxBuilder`

The MeshTxBuilderCore instance

#### Inherited from

`MeshTxBuilderCore.inputForEvaluation`

***

### invalidBefore()

> **invalidBefore**(`slot`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1409](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1409)

Set the transaction valid interval to be valid only after the slot

#### Parameters

##### slot

`number`

The transaction is valid only after this slot

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.invalidBefore`

***

### invalidHereafter()

> **invalidHereafter**(`slot`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1419](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1419)

Set the transaction valid interval to be valid only before the slot

#### Parameters

##### slot

`number`

The transaction is valid only before this slot

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.invalidHereafter`

***

### isInputComplete()

> `protected` **isInputComplete**(`txIn`): `boolean`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:713](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L713)

#### Parameters

##### txIn

`TxIn`

#### Returns

`boolean`

***

### isInputInfoComplete()

> `protected` **isInputInfoComplete**(`txIn`): `boolean`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:725](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L725)

#### Parameters

##### txIn

`TxIn`

#### Returns

`boolean`

***

### isMintComplete()

> `protected` **isMintComplete**(`mint`): `boolean`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:731](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L731)

#### Parameters

##### mint

`MintItem`

#### Returns

`boolean`

***

### isRefScriptInfoComplete()

> `protected` **isRefScriptInfoComplete**(`scriptSource`): `boolean`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:745](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L745)

#### Parameters

##### scriptSource

`ScriptSource`

#### Returns

`boolean`

***

### isSimpleRefScriptInfoComplete()

> `protected` **isSimpleRefScriptInfoComplete**(`simpleScriptSource`): `boolean`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:752](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L752)

#### Parameters

##### simpleScriptSource

`SimpleScriptSourceInfo`

#### Returns

`boolean`

***

### makeTxId()

> `protected` **makeTxId**(`txHash`, `index`): `string`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:1470](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L1470)

#### Parameters

##### txHash

`string`

##### index

`number`

#### Returns

`string`

***

### metadataValue()

> **metadataValue**(`label`, `metadata`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1430](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1430)

Add metadata to the transaction

#### Parameters

##### label

The label of the metadata, preferably number

`string` | `number` | `bigint`

##### metadata

The metadata in any format

`object` | `Metadatum`

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.metadataValue`

***

### mint()

> **mint**(`quantity`, `policy`, `name`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:617](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L617)

Set the minting value of transaction

#### Parameters

##### quantity

`string`

The quantity of asset to be minted

##### policy

`string`

The policy id of the asset to be minted

##### name

`string`

The hex of token name of the asset to be minted

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.mint`

***

### mintingScript()

> **mintingScript**(`scriptCBOR`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:637](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L637)

Set the minting script of current mint

#### Parameters

##### scriptCBOR

`string`

The CBOR hex of the minting policy script

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.mintingScript`

***

### mintPlutusScript()

> **mintPlutusScript**(`languageVersion`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:577](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L577)

Set the minting script for the current mint

#### Parameters

##### languageVersion

The Plutus script version

`"V1"` | `"V2"` | `"V3"`

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.mintPlutusScript`

***

### mintPlutusScriptV1()

> **mintPlutusScriptV1**(): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:586](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L586)

Set the instruction that it is currently using V1 Plutus minting scripts

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.mintPlutusScriptV1`

***

### mintPlutusScriptV2()

> **mintPlutusScriptV2**(): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:595](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L595)

Set the instruction that it is currently using V2 Plutus minting scripts

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.mintPlutusScriptV2`

***

### mintPlutusScriptV3()

> **mintPlutusScriptV3**(): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:604](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L604)

Set the instruction that it is currently using V3 Plutus minting scripts

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.mintPlutusScriptV3`

***

### mintRedeemerValue()

> **mintRedeemerValue**(`redeemer`, `type`, `exUnits`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:729](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L729)

Set the redeemer for the reference input to be spent in same transaction

#### Parameters

##### redeemer

The redeemer in Mesh Data type, JSON in raw constructor like format, or CBOR hex string

`object` | `Data`

##### type

The redeemer data type, either Mesh Data type, JSON in raw constructor like format, or CBOR hex string. Default to be Mesh type

`"Mesh"` | `"JSON"` | `"CBOR"`

##### exUnits

The execution units budget for the redeemer

###### mem

`number`

###### steps

`number`

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.mintRedeemerValue`

***

### mintReferenceTxInRedeemerValue()

> **mintReferenceTxInRedeemerValue**(`redeemer`, `type`, `exUnits`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:700](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L700)

Set the redeemer for minting

#### Parameters

##### redeemer

The redeemer in Mesh Data type, JSON in raw constructor like format, or CBOR hex string

`object` | `Data`

##### type

The redeemer data type, either Mesh Data type, JSON in raw constructor like format, or CBOR hex string. Default to be Mesh type

`"Mesh"` | `"JSON"` | `"CBOR"`

##### exUnits

The execution units budget for the redeemer

###### mem

`number`

###### steps

`number`

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.mintReferenceTxInRedeemerValue`

***

### mintTxInReference()

> **mintTxInReference**(`txHash`, `txIndex`, `scriptSize?`, `scriptHash?`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:667](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L667)

Use reference script for minting

#### Parameters

##### txHash

`string`

The transaction hash of the UTxO

##### txIndex

`number`

The transaction index of the UTxO

##### scriptSize?

`string`

The script size in bytes of the script (can be obtained by script hex length / 2)

##### scriptHash?

`string`

The script hash of the script

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.mintTxInReference`

***

### protocolParams()

> **protocolParams**(`params`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1482](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1482)

Set the protocol parameters to be used for the transaction other than the default one

#### Parameters

##### params

`Partial`\<`Protocol`\>

(Part of) the protocol parameters to be used for the transaction

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.protocolParams`

***

### queryAllTxInfo()

> `protected` **queryAllTxInfo**(`incompleteTxIns`, `incompleteScriptSources`, `incompleteSimpleScriptSources`): `Promise`\<`void`[]\>

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:611](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L611)

#### Parameters

##### incompleteTxIns

`TxIn`[]

##### incompleteScriptSources

`ScriptSource`[]

##### incompleteSimpleScriptSources

`SimpleScriptSourceInfo`[]

#### Returns

`Promise`\<`void`[]\>

***

### queueAllLastItem()

> `protected` **queueAllLastItem**(): `void`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1570](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1570)

#### Returns

`void`

#### Inherited from

`MeshTxBuilderCore.queueAllLastItem`

***

### readOnlyTxInReference()

> **readOnlyTxInReference**(`txHash`, `txIndex`, `scriptSize?`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:559](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L559)

Specify a read only reference input. This reference input is not witnessing anything it is simply provided in the plutus script context.

#### Parameters

##### txHash

`string`

The transaction hash of the reference UTxO

##### txIndex

`number`

The transaction index of the reference UTxO

##### scriptSize?

`number`

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.readOnlyTxInReference`

***

### registerPoolCertificate()

> **registerPoolCertificate**(`poolParams`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1114](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1114)

Creates a pool registration certificate, and adds it to the transaction

#### Parameters

##### poolParams

`PoolParams`

Parameters for pool registration

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.registerPoolCertificate`

***

### registerStakeCertificate()

> **registerStakeCertificate**(`rewardAddress`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1130](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1130)

Creates a stake registration certificate, and adds it to the transaction

#### Parameters

##### rewardAddress

`string`

The bech32 reward address (i.e. start with `stake_xxxxx`)

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.registerStakeCertificate`

***

### removeDuplicateInputs()

> **removeDuplicateInputs**(): `void`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1949](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1949)

#### Returns

`void`

#### Inherited from

`MeshTxBuilderCore.removeDuplicateInputs`

***

### removeDuplicateRefInputs()

> **removeDuplicateRefInputs**(): `void`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1968](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1968)

#### Returns

`void`

#### Inherited from

`MeshTxBuilderCore.removeDuplicateRefInputs`

***

### requiredSignerHash()

> **requiredSignerHash**(`pubKeyHash`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:743](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L743)

Set the required signer of the transaction

#### Parameters

##### pubKeyHash

`string`

The PubKeyHash of the required signer

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.requiredSignerHash`

***

### reset()

> **reset**(): `void`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1992](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1992)

#### Returns

`void`

#### Inherited from

`MeshTxBuilderCore.reset`

***

### retirePoolCertificate()

> **retirePoolCertificate**(`poolId`, `epoch`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1182](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1182)

Creates a pool retire certificate, and adds it to the transaction

#### Parameters

##### poolId

`string`

poolId can be in either bech32 or hex form

##### epoch

`number`

The intended epoch to retire the pool

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.retirePoolCertificate`

***

### sanitizeOutputs()

> `protected` **sanitizeOutputs**(): `Promise`\<`void`\>

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:951](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L951)

#### Returns

`Promise`\<`void`\>

***

### selectUtxos()

> **selectUtxos**(): `Promise`\<`TransactionPrototype`\>

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:205](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L205)

#### Returns

`Promise`\<`TransactionPrototype`\>

***

### selectUtxosFrom()

> **selectUtxosFrom**(`extraInputs`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1457](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1457)

Selects utxos to fill output value and puts them into inputs

#### Parameters

##### extraInputs

`UTxO`[]

The inputs already placed into the object will remain, these extra inputs will be used to fill the remaining  value needed

#### Returns

`MeshTxBuilder`

#### Inherited from

`MeshTxBuilderCore.selectUtxosFrom`

***

### serializeMockTx()

> **serializeMockTx**(): `string`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:101](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L101)

#### Returns

`string`

***

### setCollateralReturnAddress()

> **setCollateralReturnAddress**(`address`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1515](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1515)

Sets the collateral return address, if none is set, the change address will be used

#### Parameters

##### address

`string`

The address to use for collateral return

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.setCollateralReturnAddress`

***

### setFee()

> **setFee**(`fee`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1493](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1493)

Sets a specific fee for the transaction to use

#### Parameters

##### fee

`string`

The specified fee

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.setFee`

***

### setNetwork()

> **setNetwork**(`network`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1525](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1525)

Sets the network to use, this is mainly to know the cost models to be used to calculate script integrity hash

#### Parameters

##### network

The specific network this transaction is being built for ("testnet" | "preview" | "preprod" | "mainnet")

`"testnet"` | `"preview"` | `"preprod"` | `"mainnet"` | `number`[][]

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.setNetwork`

***

### setTotalCollateral()

> **setTotalCollateral**(`collateral`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1505](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1505)

Sets a total collateral for the transaction to use, a collateral return
will be generated to either the change address or the specified collateral return address

#### Parameters

##### collateral

`string`

The specified collateral

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.setTotalCollateral`

***

### signingKey()

> **signingKey**(`skeyHex`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1448](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1448)

Sign the transaction with the private key

#### Parameters

##### skeyHex

`string`

The private key in cborHex (with or without 5820 prefix, i.e. the format when generated from cardano-cli)

#### Returns

`MeshTxBuilder`

#### Inherited from

`MeshTxBuilderCore.signingKey`

***

### simpleScriptTxInReference()

> **simpleScriptTxInReference**(`txHash`, `txIndex`, `spendingScriptHash?`, `scriptSize?`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:231](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L231)

Native script - Set the reference input where it would also be spent in the transaction

#### Parameters

##### txHash

`string`

The transaction hash of the reference UTxO

##### txIndex

`number`

The transaction index of the reference UTxO

##### spendingScriptHash?

`string`

The script hash of the spending script

##### scriptSize?

`string`

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.simpleScriptTxInReference`

***

### sortInputs()

> **sortInputs**(): `void`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:329](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L329)

#### Returns

`void`

***

### sortMints()

> **sortMints**(): `void`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:340](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L340)

#### Returns

`void`

***

### sortTxParts()

> **sortTxParts**(): `void`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:322](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L322)

#### Returns

`void`

***

### sortVotes()

> **sortVotes**(): `void`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:390](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L390)

#### Returns

`void`

***

### sortWithdrawals()

> **sortWithdrawals**(): `void`

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:375](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L375)

#### Returns

`void`

***

### spendingPlutusScript()

> **spendingPlutusScript**(`languageVersion`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:443](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L443)

Set the reference script to be attached with the output

#### Parameters

##### languageVersion

The Plutus script version

`"V1"` | `"V2"` | `"V3"`

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.spendingPlutusScript`

***

### spendingPlutusScriptV1()

> **spendingPlutusScriptV1**(): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:456](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L456)

Set the instruction that it is currently using V1 Plutus spending scripts

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.spendingPlutusScriptV1`

***

### spendingPlutusScriptV2()

> **spendingPlutusScriptV2**(): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:469](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L469)

Set the instruction that it is currently using V2 Plutus spending scripts

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.spendingPlutusScriptV2`

***

### spendingPlutusScriptV3()

> **spendingPlutusScriptV3**(): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:482](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L482)

Set the instruction that it is currently using V3 Plutus spending scripts

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.spendingPlutusScriptV3`

***

### spendingReferenceTxInInlineDatumPresent()

> **spendingReferenceTxInInlineDatumPresent**(): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:532](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L532)

[Alias of txInInlineDatumPresent] Set the instruction that the reference input has inline datum

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.spendingReferenceTxInInlineDatumPresent`

***

### spendingReferenceTxInRedeemerValue()

> **spendingReferenceTxInRedeemerValue**(`redeemer`, `type`, `exUnits`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:544](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L544)

[Alias of txInRedeemerValue] Set the redeemer for the reference input to be spent in same transaction

#### Parameters

##### redeemer

The redeemer in Mesh Data type, JSON in raw constructor like format, or CBOR hex string

`object` | `Data`

##### type

The redeemer data type, either Mesh Data type, JSON in raw constructor like format, or CBOR hex string. Default to be Mesh type

`"Mesh"` | `"JSON"` | `"CBOR"`

##### exUnits

The execution units budget for the redeemer

###### mem

`number`

###### steps

`number`

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.spendingReferenceTxInRedeemerValue`

***

### spendingTxInReference()

> **spendingTxInReference**(`txHash`, `txIndex`, `scriptSize?`, `scriptHash?`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:500](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L500)

Set the reference input where it would also be spent in the transaction

#### Parameters

##### txHash

`string`

The transaction hash of the reference UTxO

##### txIndex

`number`

The transaction index of the reference UTxO

##### scriptSize?

`string`

The script size in bytes of the spending script (can be obtained by script hex length / 2)

##### scriptHash?

`string`

The script hash of the spending script

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.spendingTxInReference`

***

### submitTx()

> **submitTx**(`txHex`): `Promise`\<`undefined` \| `string`\>

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:593](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L593)

Submit transactions to the blockchain using the fetcher instance

#### Parameters

##### txHex

`string`

The signed transaction in hex

#### Returns

`Promise`\<`undefined` \| `string`\>

***

### txIn()

> **txIn**(`txHash`, `txIndex`, `amount?`, `address?`, `scriptSize?`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:87](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L87)

Set the input for transaction

#### Parameters

##### txHash

`string`

The transaction hash of the input UTxO

##### txIndex

`number`

The transaction index of the input UTxO

##### amount?

`Asset`[]

The asset amount of index of the input UTxO

##### address?

`string`

The address of the input UTxO

##### scriptSize?

`number`

The size of the ref script at this input (if there isn't one, explicitly put 0 as scriptSize for offline tx building)

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.txIn`

***

### txInCollateral()

> **txInCollateral**(`txHash`, `txIndex`, `amount?`, `address?`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:756](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L756)

Set the collateral UTxO for the transaction

#### Parameters

##### txHash

`string`

The transaction hash of the collateral UTxO

##### txIndex

`number`

The transaction index of the collateral UTxO

##### amount?

`Asset`[]

The asset amount of index of the collateral UTxO

##### address?

`string`

The address of the collateral UTxO

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.txInCollateral`

***

### txInDatumValue()

> **txInDatumValue**(`datum`, `type`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:163](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L163)

Set the input datum for transaction input

#### Parameters

##### datum

The datum in Mesh Data type, JSON in raw constructor like format, or CBOR hex string

`object` | `Data`

##### type

The datum type, either Mesh Data type, JSON in raw constructor like format, or CBOR hex string. Default to be Mesh type

`"Mesh"` | `"JSON"` | `"CBOR"`

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.txInDatumValue`

***

### txInInlineDatumPresent()

> **txInInlineDatumPresent**(): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:203](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L203)

Tell the transaction builder that the input UTxO has inlined datum

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.txInInlineDatumPresent`

***

### txInRedeemerValue()

> **txInRedeemerValue**(`redeemer`, `type`, `exUnits`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:273](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L273)

Set the redeemer for the reference input to be spent in same transaction

#### Parameters

##### redeemer

The redeemer in Mesh Data type, JSON in raw constructor like format, or CBOR hex string

`object` | `Data`

##### type

The redeemer data type, either Mesh Data type, JSON in raw constructor like format, or CBOR hex string. Default to be Mesh type

`"Mesh"` | `"JSON"` | `"CBOR"`

##### exUnits

The execution units budget for the redeemer

###### mem

`number`

###### steps

`number`

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.txInRedeemerValue`

***

### txInScript()

> **txInScript**(`scriptCbor`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:131](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L131)

Set the script for transaction input

#### Parameters

##### scriptCbor

`string`

The CborHex of the script

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.txInScript`

***

### txOut()

> **txOut**(`address`, `amount`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:301](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L301)

Set the output for transaction

#### Parameters

##### address

`string`

The recipient of the output

##### amount

`Asset`[]

The amount of other native assets attached with UTxO

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.txOut`

***

### txOutDatumEmbedValue()

> **txOutDatumEmbedValue**(`datum`, `type`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:392](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L392)

Set the output embed datum for transaction

#### Parameters

##### datum

The datum in Mesh Data type, JSON in raw constructor like format, or CBOR hex string

`object` | `Data`

##### type

The datum type, either Mesh Data type, JSON in raw constructor like format, or CBOR hex string. Default to be Mesh type

`"Mesh"` | `"JSON"` | `"CBOR"`

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.txOutDatumEmbedValue`

***

### txOutDatumHashValue()

> **txOutDatumHashValue**(`datum`, `type`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:319](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L319)

Set the output datum hash for transaction

#### Parameters

##### datum

The datum in Mesh Data type, JSON in raw constructor like format, or CBOR hex string

`object` | `Data`

##### type

The datum type, either Mesh Data type, JSON in raw constructor like format, or CBOR hex string. Default to be Mesh type

`"Mesh"` | `"JSON"` | `"CBOR"`

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.txOutDatumHashValue`

***

### txOutInlineDatumValue()

> **txOutInlineDatumValue**(`datum`, `type`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:355](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L355)

Set the output inline datum for transaction

#### Parameters

##### datum

The datum in Mesh Data type, JSON in raw constructor like format, or CBOR hex string

`object` | `Data`

##### type

The datum type, either Mesh Data type, JSON in raw constructor like format, or CBOR hex string. Default to be Mesh type

`"Mesh"` | `"JSON"` | `"CBOR"`

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.txOutInlineDatumValue`

***

### txOutReferenceScript()

> **txOutReferenceScript**(`scriptCbor`, `version`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:428](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L428)

Set the reference script to be attached with the output

#### Parameters

##### scriptCbor

`string`

The CBOR hex of the script to be attached to UTxO as reference script

##### version

Optional - The Plutus script version. Default to be V3 (Plutus V3)

`"V1"` | `"V2"` | `"V3"`

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.txOutReferenceScript`

***

### updateByTxPrototype()

> **updateByTxPrototype**(`selectionSkeleton`, `final`): `Promise`\<`void`\>

Defined in: [mesh-transaction/src/mesh-tx-builder/index.ts:277](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/index.ts#L277)

#### Parameters

##### selectionSkeleton

`TransactionPrototype`

##### final

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

***

### updateRedeemer()

> `protected` **updateRedeemer**(`meshTxBuilderBody`, `txEvaluation`, `doNotUseMultiplier`): `void`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1743](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1743)

#### Parameters

##### meshTxBuilderBody

`MeshTxBuilderBody`

##### txEvaluation

`Omit`\<`Action`, `"data"`\>[]

##### doNotUseMultiplier

`boolean` = `false`

#### Returns

`void`

#### Inherited from

`MeshTxBuilderCore.updateRedeemer`

***

### vote()

> **vote**(`voter`, `govActionId`, `votingProcedure`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:982](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L982)

Add a vote in the MeshTxBuilder instance

#### Parameters

##### voter

`Voter`

The voter, can be a ConstitutionalCommitee, a DRep or a StakePool

##### govActionId

`RefTxIn`

The transaction hash and transaction id of the governance action

##### votingProcedure

`VotingProcedure`

The voting kind (Yes, No, Abstain) with an optional anchor

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.vote`

***

### voteDelegationCertificate()

> **voteDelegationCertificate**(`drep`, `rewardAddress`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1262](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1262)

Dregister DRep certificate, and adds it to the transaction

#### Parameters

##### drep

`DRep`

##### rewardAddress

`string`

The bech32 reward address (i.e. start with `stake_xxxxx`)

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.voteDelegationCertificate`

***

### votePlutusScript()

> **votePlutusScript**(`languageVersion`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:940](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L940)

Set the instruction that it is currently using a Plutus voting scripts

#### Parameters

##### languageVersion

The Plutus script version

`"V1"` | `"V2"` | `"V3"`

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.votePlutusScript`

***

### votePlutusScriptV1()

> **votePlutusScriptV1**(): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:949](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L949)

Set the instruction that it is currently using V1 Plutus voting scripts

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.votePlutusScriptV1`

***

### votePlutusScriptV2()

> **votePlutusScriptV2**(): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:959](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L959)

Set the instruction that it is currently using V2 Plutus voting scripts

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.votePlutusScriptV2`

***

### votePlutusScriptV3()

> **votePlutusScriptV3**(): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:969](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L969)

Set the instruction that it is currently using V3 Plutus voting scripts

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.votePlutusScriptV3`

***

### voteRedeemerValue()

> **voteRedeemerValue**(`redeemer`, `type`, `exUnits`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1092](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1092)

Set the transaction vote redeemer value in the MeshTxBuilder instance

#### Parameters

##### redeemer

The redeemer in Mesh Data type, JSON in raw constructor like format, or CBOR hex string

`object` | `Data`

##### type

The redeemer data type, either Mesh Data type, JSON in raw constructor like format, or CBOR hex string

`"Mesh"` | `"JSON"` | `"CBOR"`

##### exUnits

The execution units budget for the redeemer

###### mem

`number`

###### steps

`number`

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.voteRedeemerValue`

***

### voteScript()

> **voteScript**(`scriptCbor`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1021](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1021)

Add a voting script to the MeshTxBuilder instance

#### Parameters

##### scriptCbor

`string`

The script in CBOR format

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.voteScript`

***

### voteTxInReference()

> **voteTxInReference**(`txHash`, `txIndex`, `scriptSize?`, `scriptHash?`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:1054](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L1054)

Add a vote reference to the MeshTxBuilder instance

#### Parameters

##### txHash

`string`

The transaction hash of reference UTxO

##### txIndex

`number`

The transaction index of reference UTxO

##### scriptSize?

`string`

The script size in bytes of the vote script (can be obtained by script hex length / 2)

##### scriptHash?

`string`

The script hash of the vote script

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.voteTxInReference`

***

### withdrawal()

> **withdrawal**(`rewardAddress`, `coin`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:823](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L823)

Withdraw stake rewards in the MeshTxBuilder instance

#### Parameters

##### rewardAddress

`string`

The bech32 reward address (i.e. start with `stake_xxxxx`)

##### coin

`string`

The amount of lovelaces in the withdrawal

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.withdrawal`

***

### withdrawalPlutusScript()

> **withdrawalPlutusScript**(`languageVersion`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:782](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L782)

Set the instruction that it is currently using V1 Plutus withdrawal scripts

#### Parameters

##### languageVersion

The Plutus script version

`"V1"` | `"V2"` | `"V3"`

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.withdrawalPlutusScript`

***

### withdrawalPlutusScriptV1()

> **withdrawalPlutusScriptV1**(): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:791](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L791)

Set the instruction that it is currently using a Plutus withdrawal scripts

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.withdrawalPlutusScriptV1`

***

### withdrawalPlutusScriptV2()

> **withdrawalPlutusScriptV2**(): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:801](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L801)

Set the instruction that it is currently using V2 Plutus withdrawal scripts

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.withdrawalPlutusScriptV2`

***

### withdrawalPlutusScriptV3()

> **withdrawalPlutusScriptV3**(): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:811](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L811)

Set the instruction that it is currently using V3 Plutus withdrawal scripts

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.withdrawalPlutusScriptV3`

***

### withdrawalRedeemerValue()

> **withdrawalRedeemerValue**(`redeemer`, `type`, `exUnits`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:915](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L915)

Set the transaction withdrawal redeemer value in the MeshTxBuilder instance

#### Parameters

##### redeemer

The redeemer in Mesh Data type, JSON in raw constructor like format, or CBOR hex string

`object` | `Data`

##### type

The redeemer data type, either Mesh Data type, JSON in raw constructor like format, or CBOR hex string. Default to be Mesh type

`"Mesh"` | `"JSON"` | `"CBOR"`

##### exUnits

The execution units budget for the redeemer

###### mem

`number`

###### steps

`number`

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.withdrawalRedeemerValue`

***

### withdrawalScript()

> **withdrawalScript**(`scriptCbor`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:852](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L852)

Add a withdrawal script to the MeshTxBuilder instance

#### Parameters

##### scriptCbor

`string`

The script in CBOR format

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.withdrawalScript`

***

### withdrawalTxInReference()

> **withdrawalTxInReference**(`txHash`, `txIndex`, `scriptSize?`, `scriptHash?`): `MeshTxBuilder`

Defined in: [mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts:885](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-transaction/src/mesh-tx-builder/tx-builder-core.ts#L885)

Add a withdrawal reference to the MeshTxBuilder instance

#### Parameters

##### txHash

`string`

The transaction hash of reference UTxO

##### txIndex

`number`

The transaction index of reference UTxO

##### scriptSize?

`string`

The script size in bytes of the withdrawal script (can be obtained by script hex length / 2)

##### scriptHash?

`string`

The script hash of the withdrawal script

#### Returns

`MeshTxBuilder`

The MeshTxBuilder instance

#### Inherited from

`MeshTxBuilderCore.withdrawalTxInReference`
