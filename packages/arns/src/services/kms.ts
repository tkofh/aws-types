import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AliasArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly alias: string
}
class AliasArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'alias',
  `arn:${string}:kms:${string}:${string}:alias/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'alias' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly alias: string
  constructor(parameters: AliasArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.alias = parameters.alias
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kms:${this.region}:${this.account}:alias/${this.alias}` as const
  }
}
export type { AliasArn }
export function aliasArn<Partition extends ArnPartition = 'aws'>(
  parameters: AliasArnParameters<Partition>,
) {
  return new AliasArn<Partition>(parameters)
}

export interface KeyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly keyId: string
}
class KeyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'key',
  `arn:${string}:kms:${string}:${string}:key/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'key' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly keyId: string
  constructor(parameters: KeyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.keyId = parameters.keyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kms:${this.region}:${this.account}:key/${this.keyId}` as const
  }
}
export type { KeyArn }
export function keyArn<Partition extends ArnPartition = 'aws'>(
  parameters: KeyArnParameters<Partition>,
) {
  return new KeyArn<Partition>(parameters)
}
