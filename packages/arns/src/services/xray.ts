import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface GroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupName: string
  readonly id: string
}
class GroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'group', `arn:${string}:xray:${string}:${string}:group/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupName: string
  readonly id: string
  constructor(parameters: GroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.groupName = parameters.groupName
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:xray:${this.region}:${this.account}:group/${this.groupName}/${this.id}` as const
  }
}
export type { GroupArn }
export function groupArn<Partition extends ArnPartition = 'aws'>(parameters: GroupArnParameters<Partition>) {
  return new GroupArn<Partition>(parameters)
}

export interface SamplingRuleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly samplingRuleName: string
}
class SamplingRuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'sampling-rule', `arn:${string}:xray:${string}:${string}:sampling-rule/${string}`> {
  readonly [ArnResourceTypeBrand] = 'sampling-rule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly samplingRuleName: string
  constructor(parameters: SamplingRuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.samplingRuleName = parameters.samplingRuleName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:xray:${this.region}:${this.account}:sampling-rule/${this.samplingRuleName}` as const
  }
}
export type { SamplingRuleArn }
export function samplingRuleArn<Partition extends ArnPartition = 'aws'>(parameters: SamplingRuleArnParameters<Partition>) {
  return new SamplingRuleArn<Partition>(parameters)
}