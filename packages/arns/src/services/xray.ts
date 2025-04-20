import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface GroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroup: string
  readonly id: string
}
class GroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'group',
  `arn:${string}:xray:${string}:${string}:group/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroup: string
  readonly id: string
  constructor(parameters: GroupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroup = parameters.nameGroup
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:xray:${this.region}:${this.account}:group/${this.nameGroup}/${this.id}` as const
  }
}
export type { GroupArn }
export function groupArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupArnParameters<Partition>,
) {
  return new GroupArn<Partition>(parameters)
}

export interface RuleSamplingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRuleSampling: string
}
class RuleSamplingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'sampling-rule',
  `arn:${string}:xray:${string}:${string}:sampling-rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sampling-rule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRuleSampling: string
  constructor(parameters: RuleSamplingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameRuleSampling = parameters.nameRuleSampling
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:xray:${this.region}:${this.account}:sampling-rule/${this.nameRuleSampling}` as const
  }
}
export type { RuleSamplingArn }
export function ruleSamplingArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleSamplingArnParameters<Partition>,
) {
  return new RuleSamplingArn<Partition>(parameters)
}
