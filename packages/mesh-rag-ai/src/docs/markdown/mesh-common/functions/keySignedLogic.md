[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / keySignedLogic

# Function: keySignedLogic()

> **keySignedLogic**(`requiredSignatures`, `keyHash`): `boolean`

Defined in: [tx-tester/index.ts:565](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/tx-tester/index.ts#L565)

Internal logic to check if a key is signed

## Parameters

### requiredSignatures

`string`[]

The required signatures of the tx builder body

### keyHash

`string`

The key hash to check

## Returns

`boolean`

true if the key is signed, false otherwise
