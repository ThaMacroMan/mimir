[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / TxTester

# Class: TxTester

Defined in: [tx-tester/index.ts:15](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L15)

TxTester class for evaluating transactions

## Constructors

### Constructor

> **new TxTester**(`txBody`): `TxTester`

Defined in: [tx-tester/index.ts:25](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L25)

Create a new TxTester instance

#### Parameters

##### txBody

[`MeshTxBuilderBody`](../type-aliases/MeshTxBuilderBody.md)

The transaction builder body

#### Returns

`TxTester`

## Properties

### inputsEvaluating

> **inputsEvaluating**: [`TxIn`](../type-aliases/TxIn.md)[]

Defined in: [tx-tester/index.ts:17](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L17)

***

### outputsEvaluating

> **outputsEvaluating**: [`Output`](../type-aliases/Output.md)[]

Defined in: [tx-tester/index.ts:18](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L18)

***

### traces

> **traces**: `string`[]

Defined in: [tx-tester/index.ts:19](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L19)

***

### txBody

> **txBody**: [`MeshTxBuilderBody`](../type-aliases/MeshTxBuilderBody.md)

Defined in: [tx-tester/index.ts:16](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L16)

## Methods

### addTrace()

> **addTrace**(`funcName`, `message`): `void`

Defined in: [tx-tester/index.ts:37](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L37)

Add a trace to the TxTester

#### Parameters

##### funcName

`string`

The function name where the error occurred

##### message

`string`

The error message

#### Returns

`void`

***

### allInputs()

> **allInputs**(): `this`

Defined in: [tx-tester/index.ts:300](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L300)

Not apply filter to inputs

#### Returns

`this`

The TxTester instance for chaining

***

### allKeysSigned()

> **allKeysSigned**(`keyHashes`): `this`

Defined in: [tx-tester/index.ts:148](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L148)

Checks if all specified keys are signed in the transaction.

#### Parameters

##### keyHashes

`string`[]

The array of key hashes to check

#### Returns

`this`

The TxTester instance for chaining

***

### allOutputs()

> **allOutputs**(): `this`

Defined in: [tx-tester/index.ts:434](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L434)

Not apply filter to outputs

#### Returns

`this`

The TxTester instance for chaining

***

### checkPolicyOnlyBurn()

> **checkPolicyOnlyBurn**(`policyId`): `boolean`

Defined in: [tx-tester/index.ts:284](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L284)

Checks if a specific policy ID is burned in the transaction, ensuring that it is the only minting (i.e. burning item).

#### Parameters

##### policyId

`string`

The policy ID to check

#### Returns

`boolean`

true if the policy is the only burn, false otherwise

***

### errors()

> **errors**(): `string`

Defined in: [tx-tester/index.ts:54](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L54)

Get the error messages if any

#### Returns

`string`

A string representation of the errors or "No errors" if there are none

***

### inputsAt()

> **inputsAt**(`address`): `this`

Defined in: [tx-tester/index.ts:310](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L310)

Filter inputs by address

#### Parameters

##### address

`string`

The address to filter by

#### Returns

`this`

The TxTester instance for chaining

***

### inputsAtWith()

> **inputsAtWith**(`address`, `unit`): `this`

Defined in: [tx-tester/index.ts:375](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L375)

Filter inputs by address and unit

#### Parameters

##### address

`string`

The address to filter by

##### unit

`string`

The unit to filter by

#### Returns

`this`

The TxTester instance for chaining

***

### inputsAtWithPolicy()

> **inputsAtWithPolicy**(`address`, `policyId`): `this`

Defined in: [tx-tester/index.ts:358](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L358)

Filter inputs by address and policy ID

#### Parameters

##### address

`string`

The address to filter by

##### policyId

`string`

The policy ID to filter by

#### Returns

`this`

The TxTester instance for chaining

***

### inputsValue()

> **inputsValue**(`expectedValue`): `this`

Defined in: [tx-tester/index.ts:392](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L392)

Check if inputs contain the expected value.
*Reminder - It must be called after filtering methods for inputs*

#### Parameters

##### expectedValue

`any`

The expected value

#### Returns

`this`

The TxTester instance for chaining

***

### inputsWith()

> **inputsWith**(`unit`): `this`

Defined in: [tx-tester/index.ts:323](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L323)

Filter inputs by unit

#### Parameters

##### unit

`string`

The unit to filter by

#### Returns

`this`

The TxTester instance for chaining

***

### inputsWithPolicy()

> **inputsWithPolicy**(`policyId`): `this`

Defined in: [tx-tester/index.ts:340](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L340)

Filter inputs by policy ID

#### Parameters

##### policyId

`string`

The policy ID to filter by

#### Returns

`this`

The TxTester instance for chaining

***

### keySigned()

> **keySigned**(`keyHash`): `this`

Defined in: [tx-tester/index.ts:116](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L116)

Checks if a specific key is signed in the transaction.

#### Parameters

##### keyHash

`string`

The key hash to check

#### Returns

`this`

The TxTester instance for chaining

***

### oneOfKeysSigned()

> **oneOfKeysSigned**(`keyHashes`): `this`

Defined in: [tx-tester/index.ts:129](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L129)

Checks if any one of the specified keys is signed in the transaction.

#### Parameters

##### keyHashes

`string`[]

The array of key hashes to check

#### Returns

`this`

The TxTester instance for chaining

***

### onlyTokenMinted()

> **onlyTokenMinted**(`policyId`, `assetName`, `quantity`): `this`

Defined in: [tx-tester/index.ts:207](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L207)

Checks if a specific token is minted in the transaction and that it is the only mint.

#### Parameters

##### policyId

`string`

The policy ID of the token

##### assetName

`string`

The asset name of the token

##### quantity

`number`

The quantity of the token

#### Returns

`this`

The TxTester instance for chaining

***

### outputsAt()

> **outputsAt**(`address`): `this`

Defined in: [tx-tester/index.ts:444](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L444)

Filter outputs by address

#### Parameters

##### address

`string`

The address to filter by

#### Returns

`this`

The TxTester instance for chaining

***

### outputsAtWith()

> **outputsAtWith**(`address`, `unit`): `this`

Defined in: [tx-tester/index.ts:503](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L503)

Filter outputs by address and unit

#### Parameters

##### address

`string`

The address to filter by

##### unit

`string`

The unit to filter by

#### Returns

`this`

The TxTester instance for chaining

***

### outputsAtWithPolicy()

> **outputsAtWithPolicy**(`address`, `policyId`): `this`

Defined in: [tx-tester/index.ts:487](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L487)

Filter outputs by address and policy ID

#### Parameters

##### address

`string`

The address to filter by

##### policyId

`string`

The policy ID to filter by

#### Returns

`this`

The TxTester instance for chaining

***

### outputsInlineDatumExist()

> **outputsInlineDatumExist**(`datumCbor`): `this`

Defined in: [tx-tester/index.ts:541](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L541)

Check if outputs contain a specific inline datum.
*Reminder - It must be called after filtering methods for outputs*

#### Parameters

##### datumCbor

`string`

The datum CBOR to check

#### Returns

`this`

The TxTester instance for chaining

***

### outputsValue()

> **outputsValue**(`expectedValue`): `this`

Defined in: [tx-tester/index.ts:519](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L519)

Check if outputs contain the expected value.
*Reminder - It must be called after filtering methods for outputs*

#### Parameters

##### expectedValue

[`MeshValue`](MeshValue.md)

The expected value

#### Returns

`this`

The TxTester instance for chaining

***

### outputsWith()

> **outputsWith**(`unit`): `this`

Defined in: [tx-tester/index.ts:455](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L455)

Filter outputs by unit

#### Parameters

##### unit

`string`

The unit to filter by

#### Returns

`this`

The TxTester instance for chaining

***

### outputsWithPolicy()

> **outputsWithPolicy**(`policyId`): `this`

Defined in: [tx-tester/index.ts:471](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L471)

Filter outputs by policy ID

#### Parameters

##### policyId

`string`

The policy ID to filter by

#### Returns

`this`

The TxTester instance for chaining

***

### policyOnlyMintedToken()

> **policyOnlyMintedToken**(`policyId`, `assetName`, `quantity`): `this`

Defined in: [tx-tester/index.ts:244](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L244)

Checks if a specific token is minted in the transaction, ensuring that it is the only mint for the given policy ID.

#### Parameters

##### policyId

`string`

The policy ID of the token

##### assetName

`string`

The asset name of the token

##### quantity

`number`

The quantity of the token

#### Returns

`this`

The TxTester instance for chaining

***

### success()

> **success**(): `boolean`

Defined in: [tx-tester/index.ts:46](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L46)

Check if the transaction evaluation was successful

#### Returns

`boolean`

true if there are no errors, false otherwise

***

### tokenMinted()

> **tokenMinted**(`policyId`, `assetName`, `quantity`): `this`

Defined in: [tx-tester/index.ts:178](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L178)

Checks if a specific token is minted in the transaction.

#### Parameters

##### policyId

`string`

The policy ID of the token

##### assetName

`string`

The asset name of the token

##### quantity

`number`

The quantity of the token

#### Returns

`this`

The TxTester instance for chaining

***

### validAfter()

> **validAfter**(`requiredTimestamp`): `this`

Defined in: [tx-tester/index.ts:67](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L67)

Checks if the transaction is valid after a specified timestamp.

#### Parameters

##### requiredTimestamp

`number`

The timestamp after which the transaction should be valid

#### Returns

`this`

The TxTester instance for chaining

***

### validBefore()

> **validBefore**(`requiredTimestamp`): `this`

Defined in: [tx-tester/index.ts:90](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L90)

Checks if the transaction is valid before a specified timestamp.

#### Parameters

##### requiredTimestamp

`number`

The timestamp before which the transaction should be valid

#### Returns

`this`

The TxTester instance for chaining
