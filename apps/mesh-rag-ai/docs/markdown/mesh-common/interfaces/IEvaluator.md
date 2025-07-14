[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / IEvaluator

# Interface: IEvaluator

Defined in: [interfaces/evaluator.ts:3](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/evaluator.ts#L3)

## Methods

### evaluateTx()

> **evaluateTx**(`tx`, `additionalUtxos?`, `additionalTxs?`): `Promise`\<`Omit`\<[`Action`](../type-aliases/Action.md), `"data"`\>[]\>

Defined in: [interfaces/evaluator.ts:4](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/interfaces/evaluator.ts#L4)

#### Parameters

##### tx

`string`

##### additionalUtxos?

[`UTxO`](../type-aliases/UTxO.md)[]

##### additionalTxs?

`string`[]

#### Returns

`Promise`\<`Omit`\<[`Action`](../type-aliases/Action.md), `"data"`\>[]\>
