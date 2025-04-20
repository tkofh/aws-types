import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CanaryArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly canaryName: string
}
class CanaryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'canary',
  `arn:${string}:synthetics:${string}:${string}:canary:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'canary' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly canaryName: string
  constructor(parameters: CanaryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.canaryName = parameters.canaryName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:synthetics:${this.region}:${this.account}:canary:${this.canaryName}` as const
  }
}
export type { CanaryArn }
export function canaryArn<Partition extends ArnPartition = 'aws'>(
  parameters: CanaryArnParameters<Partition>,
) {
  return new CanaryArn<Partition>(parameters)
}

export interface GroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupId: string
}
class GroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'group',
  `arn:${string}:synthetics:${string}:${string}:group:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupId: string
  constructor(parameters: GroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.groupId = parameters.groupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:synthetics:${this.region}:${this.account}:group:${this.groupId}` as const
  }
}
export type { GroupArn }
export function groupArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupArnParameters<Partition>,
) {
  return new GroupArn<Partition>(parameters)
}
