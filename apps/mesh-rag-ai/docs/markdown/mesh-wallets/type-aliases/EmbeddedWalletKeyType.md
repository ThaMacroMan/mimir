[**@meshsdk/wallet**](../README.md)

***

[@meshsdk/wallet](../globals.md) / EmbeddedWalletKeyType

# Type Alias: EmbeddedWalletKeyType

> **EmbeddedWalletKeyType** = \{ `bech32`: `string`; `type`: `"root"`; \} \| \{ `payment`: `string`; `stake?`: `string`; `type`: `"cli"`; \} \| \{ `type`: `"mnemonic"`; `words`: `string`[]; \} \| \{ `bip32Bytes`: `Uint8Array`; `type`: `"bip32Bytes"`; \}

Defined in: [embedded/index.ts:57](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-wallet/src/embedded/index.ts#L57)
