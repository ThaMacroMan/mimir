[**@meshsdk/core-csl**](../README.md)

***

[@meshsdk/core-csl](../globals.md) / OfflineEvaluator

# Class: OfflineEvaluator

Defined in: [offline-providers/offline-evaluator.ts:69](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/offline-providers/offline-evaluator.ts#L69)

OfflineEvaluator implements the IEvaluator interface to provide offline evaluation of Plutus scripts.
This class evaluates Plutus scripts contained in Cardano transactions without requiring network connectivity,
determining their execution costs in terms of memory and CPU steps.

Each script evaluation returns an Action object (excluding the redeemer data) that contains:
- tag: The type of script being executed (CERT | MINT | REWARD | SPEND | VOTE | PROPOSE)
- index: Execution index of the script within the transaction
- budget: Execution costs including:
  - mem: Memory units required
  - steps: CPU steps required

Example usage:
```typescript
import { OfflineEvaluator, OfflineFetcher } from '@meshsdk/core';

// Create fetcher and evaluator instances
const fetcher = new OfflineFetcher();
const evaluator = new OfflineEvaluator(fetcher, 'preprod');

// Add required UTXOs that the transaction references
fetcher.addUTxOs([
  {
    input: {
      txHash: "1234...",
      outputIndex: 0
    },
    output: {
      address: "addr1...",
      amount: [{ unit: "lovelace", quantity: "1000000" }],
      scriptHash: "abcd..." // If this is a script UTXO
    }
  }
]);

// Evaluate Plutus scripts in a transaction
try {
  const actions = await evaluator.evaluateTx(transactionCbor);
  // Example result for a minting script:
  // [{
  //   index: 0,
  //   tag: "MINT",
  //   budget: {
  //     mem: 508703,    // Memory units used
  //     steps: 164980381 // CPU steps used
  //   }
  // }]
} catch (error) {
  console.error('Plutus script evaluation failed:', error);
}
```

## Implements

- `IEvaluator`

## Constructors

### Constructor

> **new OfflineEvaluator**(`fetcher`, `network`, `slotConfig?`): `OfflineEvaluator`

Defined in: [offline-providers/offline-evaluator.ts:80](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/offline-providers/offline-evaluator.ts#L80)

Creates a new instance of OfflineEvaluator.

#### Parameters

##### fetcher

`IFetcher`

An implementation of IFetcher to resolve transaction UTXOs

##### network

The network to evaluate scripts for

`"testnet"` | `"preview"` | `"preprod"` | `"mainnet"`

##### slotConfig?

`Omit`\<`Omit`\<`SlotConfig`, `"startEpoch"`\>, `"epochLength"`\>

Slot configuration for the network (optional, defaults to network-specific values)

#### Returns

`OfflineEvaluator`

## Properties

### slotConfig

> **slotConfig**: `Omit`\<`Omit`\<`SlotConfig`, `"startEpoch"`\>, `"epochLength"`\>

Defined in: [offline-providers/offline-evaluator.ts:72](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/offline-providers/offline-evaluator.ts#L72)

## Methods

### evaluateTx()

> **evaluateTx**(`tx`, `additionalUtxos`, `additionalTxs`): `Promise`\<`Omit`\<`Action`, `"data"`\>[]\>

Defined in: [offline-providers/offline-evaluator.ts:110](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-core-csl/src/offline-providers/offline-evaluator.ts#L110)

Evaluates Plutus scripts in a transaction by resolving its input UTXOs and calculating execution costs.

The method performs these steps:
1. Extracts input references from the transaction
2. Resolves the corresponding UTXOs using the fetcher
3. Verifies all required UTXOs are available
4. Evaluates each Plutus script to determine its memory and CPU costs

#### Parameters

##### tx

`string`

Transaction in CBOR hex format

##### additionalUtxos

`UTxO`[]

##### additionalTxs

`string`[]

#### Returns

`Promise`\<`Omit`\<`Action`, `"data"`\>[]\>

Promise resolving to array of script evaluation results, each containing:
  - tag: Type of script (CERT | MINT | REWARD | SPEND | VOTE | PROPOSE)
  - index: Script execution index
  - budget: Memory units and CPU steps required

#### Throws

Error if any required UTXOs cannot be resolved or if script evaluation fails

#### Implementation of

`IEvaluator.evaluateTx`
