import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CanaryArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCanary: string
}
class CanaryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'canary',
  `arn:${string}:synthetics:${string}:${string}:canary:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'canary' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCanary: string
  constructor(parameters: CanaryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCanary = parameters.nameCanary
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:synthetics:${this.region}:${this.account}:canary:${this.nameCanary}` as const
  }
}
export type { CanaryArn }
export function canaryArn<Partition extends ArnPartition = 'aws'>(
  parameters: CanaryArnParameters<Partition>,
) {
  return new CanaryArn<Partition>(parameters)
}

export interface GroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroup: string
}
class GroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'group',
  `arn:${string}:synthetics:${string}:${string}:group:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroup: string
  constructor(parameters: GroupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroup = parameters.idGroup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:synthetics:${this.region}:${this.account}:group:${this.idGroup}` as const
  }
}
export type { GroupArn }
export function groupArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupArnParameters<Partition>,
) {
  return new GroupArn<Partition>(parameters)
}
