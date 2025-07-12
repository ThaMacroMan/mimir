[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / IDeserializer

# Interface: IDeserializer

Defined in: [interfaces/serializer.ts:71](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/serializer.ts#L71)

## Properties

### cert

> **cert**: `object`

Defined in: [interfaces/serializer.ts:79](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/serializer.ts#L79)

#### deserializePoolId()

> **deserializePoolId**(`poolId`): `string`

##### Parameters

###### poolId

`string`

##### Returns

`string`

***

### key

> **key**: `object`

Defined in: [interfaces/serializer.ts:72](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/serializer.ts#L72)

#### deserializeAddress()

> **deserializeAddress**(`bech32`): [`DeserializedAddress`](../type-aliases/DeserializedAddress.md)

##### Parameters

###### bech32

`string`

##### Returns

[`DeserializedAddress`](../type-aliases/DeserializedAddress.md)

***

### script

> **script**: `object`

Defined in: [interfaces/serializer.ts:75](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/serializer.ts#L75)

#### deserializeNativeScript()

> **deserializeNativeScript**(`script`): [`DeserializedScript`](../type-aliases/DeserializedScript.md)

##### Parameters

###### script

[`NativeScript`](../type-aliases/NativeScript.md)

##### Returns

[`DeserializedScript`](../type-aliases/DeserializedScript.md)

#### deserializePlutusScript()

> **deserializePlutusScript**(`script`): [`DeserializedScript`](../type-aliases/DeserializedScript.md)

##### Parameters

###### script

[`PlutusScript`](../type-aliases/PlutusScript.md)

##### Returns

[`DeserializedScript`](../type-aliases/DeserializedScript.md)
