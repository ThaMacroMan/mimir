[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / AssetFingerprint

# Class: AssetFingerprint

Defined in: [utils/asset-fingerprint.ts:15](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/asset-fingerprint.ts#L15)

## Properties

### hashBuf

> `readonly` **hashBuf**: `Uint8Array`

Defined in: [utils/asset-fingerprint.ts:16](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/asset-fingerprint.ts#L16)

## Methods

### checksum()

> **checksum**(): `string`

Defined in: [utils/asset-fingerprint.ts:62](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/asset-fingerprint.ts#L62)

#### Returns

`string`

***

### fingerprint()

> **fingerprint**(): `string`

Defined in: [utils/asset-fingerprint.ts:48](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/asset-fingerprint.ts#L48)

#### Returns

`string`

***

### hash()

> **hash**(): `string`

Defined in: [utils/asset-fingerprint.ts:53](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/asset-fingerprint.ts#L53)

#### Returns

`string`

***

### prefix()

> **prefix**(): `string`

Defined in: [utils/asset-fingerprint.ts:57](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/asset-fingerprint.ts#L57)

#### Returns

`string`

***

### fromBech32()

> `static` **fromBech32**(`fingerprint`): `AssetFingerprint`

Defined in: [utils/asset-fingerprint.ts:38](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/asset-fingerprint.ts#L38)

#### Parameters

##### fingerprint

`string`

#### Returns

`AssetFingerprint`

***

### fromHash()

> `static` **fromHash**(`hash`): `AssetFingerprint`

Defined in: [utils/asset-fingerprint.ts:22](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/asset-fingerprint.ts#L22)

#### Parameters

##### hash

`Uint8Array`

#### Returns

`AssetFingerprint`

***

### fromParts()

> `static` **fromParts**(`policyId`, `assetName`): `AssetFingerprint`

Defined in: [utils/asset-fingerprint.ts:26](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/asset-fingerprint.ts#L26)

#### Parameters

##### policyId

`Uint8Array`

##### assetName

`Uint8Array`

#### Returns

`AssetFingerprint`
