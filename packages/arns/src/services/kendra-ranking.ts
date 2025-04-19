import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface RescoreExecutionPlanArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly rescoreExecutionPlanId: string
}
class RescoreExecutionPlanArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'rescore-execution-plan', `arn:${string}:kendra-ranking:${string}:${string}:rescore-execution-plan/${string}`> {
  readonly [ArnResourceTypeBrand] = 'rescore-execution-plan' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly rescoreExecutionPlanId: string
  constructor(parameters: RescoreExecutionPlanArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.rescoreExecutionPlanId = parameters.rescoreExecutionPlanId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kendra-ranking:${this.region}:${this.account}:rescore-execution-plan/${this.rescoreExecutionPlanId}` as const
  }
}
export type { RescoreExecutionPlanArn }
export function rescoreExecutionPlanArn<Partition extends ArnPartition = 'aws'>(parameters: RescoreExecutionPlanArnParameters<Partition>) {
  return new RescoreExecutionPlanArn<Partition>(parameters)
}