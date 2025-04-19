import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface RuleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceName: string
}
class RuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'rule', `arn:${string}:rbin:${string}:${string}:rule/${string}`> {
  readonly [ArnResourceTypeBrand] = 'rule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceName: string
  constructor(parameters: RuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceName = parameters.resourceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rbin:${this.region}:${this.account}:rule/${this.resourceName}` as const
  }
}
export type { RuleArn }
export function ruleArn<Partition extends ArnPartition = 'aws'>(parameters: RuleArnParameters<Partition>) {
  return new RuleArn<Partition>(parameters)
}