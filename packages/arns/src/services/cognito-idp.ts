import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PoolUserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPoolUser: string
}
class PoolUserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'userpool',
  `arn:${string}:cognito-idp:${string}:${string}:userpool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'userpool' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPoolUser: string
  constructor(parameters: PoolUserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPoolUser = parameters.idPoolUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cognito-idp:${this.region}:${this.account}:userpool/${this.idPoolUser}` as const
  }
}
export type { PoolUserArn }
export function poolUserArn<Partition extends ArnPartition = 'aws'>(
  parameters: PoolUserArnParameters<Partition>,
) {
  return new PoolUserArn<Partition>(parameters)
}

export interface WebaclArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
}
class WebaclArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'webacl',
  `arn:${string}:wafv2:${string}:${string}:${string}/webacl/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'webacl' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
  constructor(parameters: WebaclArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.scope = parameters.scope
    this.name = parameters.name
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wafv2:${this.region}:${this.account}:${this.scope}/webacl/${this.name}/${this.id}` as const
  }
}
export type { WebaclArn }
export function webaclArn<Partition extends ArnPartition = 'aws'>(
  parameters: WebaclArnParameters<Partition>,
) {
  return new WebaclArn<Partition>(parameters)
}
