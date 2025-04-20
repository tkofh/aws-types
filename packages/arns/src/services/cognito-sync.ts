import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SetDataArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPoolIdentity: string
  readonly idIdentity: string
  readonly nameSetData: string
}
class SetDataArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dataset',
  `arn:${string}:cognito-sync:${string}:${string}:identitypool/${string}/identity/${string}/dataset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dataset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPoolIdentity: string
  readonly idIdentity: string
  readonly nameSetData: string
  constructor(parameters: SetDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPoolIdentity = parameters.idPoolIdentity
    this.idIdentity = parameters.idIdentity
    this.nameSetData = parameters.nameSetData
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cognito-sync:${this.region}:${this.account}:identitypool/${this.idPoolIdentity}/identity/${this.idIdentity}/dataset/${this.nameSetData}` as const
  }
}
export type { SetDataArn }
export function setDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetDataArnParameters<Partition>,
) {
  return new SetDataArn<Partition>(parameters)
}

export interface IdentityArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPoolIdentity: string
  readonly idIdentity: string
}
class IdentityArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'identity',
  `arn:${string}:cognito-sync:${string}:${string}:identitypool/${string}/identity/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'identity' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPoolIdentity: string
  readonly idIdentity: string
  constructor(parameters: IdentityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPoolIdentity = parameters.idPoolIdentity
    this.idIdentity = parameters.idIdentity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cognito-sync:${this.region}:${this.account}:identitypool/${this.idPoolIdentity}/identity/${this.idIdentity}` as const
  }
}
export type { IdentityArn }
export function identityArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdentityArnParameters<Partition>,
) {
  return new IdentityArn<Partition>(parameters)
}

export interface PoolIdentityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPoolIdentity: string
}
class PoolIdentityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'identitypool',
  `arn:${string}:cognito-sync:${string}:${string}:identitypool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'identitypool' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPoolIdentity: string
  constructor(parameters: PoolIdentityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPoolIdentity = parameters.idPoolIdentity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cognito-sync:${this.region}:${this.account}:identitypool/${this.idPoolIdentity}` as const
  }
}
export type { PoolIdentityArn }
export function poolIdentityArn<Partition extends ArnPartition = 'aws'>(
  parameters: PoolIdentityArnParameters<Partition>,
) {
  return new PoolIdentityArn<Partition>(parameters)
}
