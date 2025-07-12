[**@meshsdk/common**](../README.md)

***

[@meshsdk/common](../globals.md) / BigNum

# Class: BigNum

Defined in: [utils/big-num.ts:1](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/big-num.ts#L1)

## Constructors

### Constructor

> **new BigNum**(`value?`): `BigNum`

Defined in: [utils/big-num.ts:4](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/big-num.ts#L4)

#### Parameters

##### value?

`string` | `number` | `bigint`

#### Returns

`BigNum`

## Properties

### value

> **value**: `bigint`

Defined in: [utils/big-num.ts:2](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/big-num.ts#L2)

## Methods

### checkedAdd()

> **checkedAdd**(`other`): `BigNum`

Defined in: [utils/big-num.ts:31](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/big-num.ts#L31)

#### Parameters

##### other

`BigNum`

#### Returns

`BigNum`

***

### checkedMul()

> **checkedMul**(`other`): `BigNum`

Defined in: [utils/big-num.ts:26](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/big-num.ts#L26)

#### Parameters

##### other

`BigNum`

#### Returns

`BigNum`

***

### checkedSub()

> **checkedSub**(`other`): `BigNum`

Defined in: [utils/big-num.ts:36](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/big-num.ts#L36)

#### Parameters

##### other

`BigNum`

#### Returns

`BigNum`

***

### clampedSub()

> **clampedSub**(`other`): `BigNum`

Defined in: [utils/big-num.ts:41](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/big-num.ts#L41)

#### Parameters

##### other

`BigNum`

#### Returns

`BigNum`

***

### compare()

> **compare**(`other`): `-1` \| `0` \| `1`

Defined in: [utils/big-num.ts:53](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/big-num.ts#L53)

#### Parameters

##### other

`BigNum`

#### Returns

`-1` \| `0` \| `1`

***

### divFloor()

> **divFloor**(`other`): `BigNum`

Defined in: [utils/big-num.ts:21](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/big-num.ts#L21)

#### Parameters

##### other

`BigNum`

#### Returns

`BigNum`

***

### lessThan()

> **lessThan**(`other`): `boolean`

Defined in: [utils/big-num.ts:49](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/big-num.ts#L49)

#### Parameters

##### other

`BigNum`

#### Returns

`boolean`

***

### toString()

> **toString**(): `string`

Defined in: [utils/big-num.ts:65](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/big-num.ts#L65)

#### Returns

`string`

***

### new()

> `static` **new**(`value`): `BigNum`

Defined in: [utils/big-num.ts:12](https://github.com/MeshJS/mesh/blob/1abde1553cbd7cf2cf4e40197fc0de9e4a7d0f49/packages/mesh-common/src/utils/big-num.ts#L12)

#### Parameters

##### value

`undefined` | `string` | `number` | `bigint`

#### Returns

`BigNum`
