[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / mMaybeStakingHash

# Function: mMaybeStakingHash()

> **mMaybeStakingHash**(`stakeCredential`, `isStakeScriptCredential`): [`MMaybeStakingHash`](../type-aliases/MMaybeStakingHash.md)

Defined in: [data/mesh/credentials.ts:57](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/data/mesh/credentials.ts#L57)

The utility function to create a Mesh Data staking hash

## Parameters

### stakeCredential

`string`

The staking credential in hex

### isStakeScriptCredential

`boolean` = `false`

The flag to indicate if the credential is a script credential

## Returns

[`MMaybeStakingHash`](../type-aliases/MMaybeStakingHash.md)

The Mesh Data staking hash object
