[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / mCredential

# Function: mCredential()

> **mCredential**(`hash`, `isScriptCredential`): [`MCredential`](../type-aliases/MCredential.md)

Defined in: [data/mesh/credentials.ts:114](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/data/mesh/credentials.ts#L114)

The utility function to create a Mesh Data credential

## Parameters

### hash

`string`

The pub key hash or script hash

### isScriptCredential

`boolean` = `false`

Indicate if the credential is script hash (false for pub key hash)

## Returns

[`MCredential`](../type-aliases/MCredential.md)

Mesh Data credential object
