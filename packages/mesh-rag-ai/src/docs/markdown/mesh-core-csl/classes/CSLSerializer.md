[**@meshsdk/core-csl**](../README.md)

***

[@meshsdk/core-csl](../globals.md) / CSLSerializer

# Class: CSLSerializer

Defined in: [core/serializer.ts:60](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/core/serializer.ts#L60)

## Implements

- `IMeshTxSerializer`

## Constructors

### Constructor

> **new CSLSerializer**(`protocolParams?`): `CSLSerializer`

Defined in: [core/serializer.ts:70](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/core/serializer.ts#L70)

#### Parameters

##### protocolParams?

`Protocol`

#### Returns

`CSLSerializer`

## Properties

### deserializer

> **deserializer**: `IDeserializer`

Defined in: [core/serializer.ts:120](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/core/serializer.ts#L120)

#### Implementation of

`IMeshTxSerializer.deserializer`

***

### meshTxBuilderBody

> **meshTxBuilderBody**: `MeshTxBuilderBody`

Defined in: [core/serializer.ts:66](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/core/serializer.ts#L66)

***

### parser

> **parser**: `ITxParser`

Defined in: [core/serializer.ts:312](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/core/serializer.ts#L312)

#### Implementation of

`IMeshTxSerializer.parser`

***

### parserTxBody

> **parserTxBody**: `MeshTxBuilderBody`

Defined in: [core/serializer.ts:68](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/core/serializer.ts#L68)

***

### protocolParams

> **protocolParams**: `Protocol`

Defined in: [core/serializer.ts:64](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/core/serializer.ts#L64)

Set to true to enable verbose logging for the txBodyJson prior going into build

***

### resolver

> **resolver**: `IResolver`

Defined in: [core/serializer.ts:154](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/core/serializer.ts#L154)

#### Implementation of

`IMeshTxSerializer.resolver`

## Methods

### addSigningKeys()

> **addSigningKeys**(`txHex`, `signingKeys`): `string`

Defined in: [core/serializer.ts:88](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/core/serializer.ts#L88)

#### Parameters

##### txHex

`string`

##### signingKeys

`string`[]

#### Returns

`string`

#### Implementation of

`IMeshTxSerializer.addSigningKeys`

***

### serializeAddress()

> **serializeAddress**(`address`, `networkId?`): `string`

Defined in: [core/serializer.ts:99](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/core/serializer.ts#L99)

#### Parameters

##### address

`Partial`\<`DeserializedAddress`\>

##### networkId?

`number`

#### Returns

`string`

#### Implementation of

`IMeshTxSerializer.serializeAddress`

***

### serializeData()

> **serializeData**(`data`): `string`

Defined in: [core/serializer.ts:95](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/core/serializer.ts#L95)

#### Parameters

##### data

`BuilderData`

#### Returns

`string`

#### Implementation of

`IMeshTxSerializer.serializeData`

***

### serializeOutput()

> **serializeOutput**(`output`): `string`

Defined in: [core/serializer.ts:192](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/core/serializer.ts#L192)

#### Parameters

##### output

`Output`

#### Returns

`string`

#### Implementation of

`IMeshTxSerializer.serializeOutput`

***

### serializePoolId()

> **serializePoolId**(`hash`): `string`

Defined in: [core/serializer.ts:106](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/core/serializer.ts#L106)

#### Parameters

##### hash

`string`

#### Returns

`string`

#### Implementation of

`IMeshTxSerializer.serializePoolId`

***

### serializeRewardAddress()

> **serializeRewardAddress**(`stakeKeyHash`, `isScriptHash?`, `network_id?`): `string`

Defined in: [core/serializer.ts:110](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/core/serializer.ts#L110)

#### Parameters

##### stakeKeyHash

`string`

##### isScriptHash?

`boolean`

##### network\_id?

`0` | `1`

#### Returns

`string`

#### Implementation of

`IMeshTxSerializer.serializeRewardAddress`

***

### serializeTxBody()

> **serializeTxBody**(`txBody`, `protocolParams?`): `string`

Defined in: [core/serializer.ts:74](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/core/serializer.ts#L74)

#### Parameters

##### txBody

`MeshTxBuilderBody`

##### protocolParams?

`Protocol`

#### Returns

`string`

#### Implementation of

`IMeshTxSerializer.serializeTxBody`

***

### serializeTxBodyWithMockSignatures()

> **serializeTxBodyWithMockSignatures**(`txBuilderBody`, `protocolParams`): `string`

Defined in: [core/serializer.ts:260](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/core/serializer.ts#L260)

#### Parameters

##### txBuilderBody

`MeshTxBuilderBody`

##### protocolParams

`Protocol`

#### Returns

`string`

#### Implementation of

`IMeshTxSerializer.serializeTxBodyWithMockSignatures`

***

### serializeValue()

> **serializeValue**(`value`): `string`

Defined in: [core/serializer.ts:308](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/core/serializer.ts#L308)

#### Parameters

##### value

`Asset`[]

#### Returns

`string`

#### Implementation of

`IMeshTxSerializer.serializeValue`
