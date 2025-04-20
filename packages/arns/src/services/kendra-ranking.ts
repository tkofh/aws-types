import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PlanExecutionRescoreArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPlanExecutionRescore: string
}
class PlanExecutionRescoreArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'rescore-execution-plan',
  `arn:${string}:kendra-ranking:${string}:${string}:rescore-execution-plan/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rescore-execution-plan' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPlanExecutionRescore: string
  constructor(parameters: PlanExecutionRescoreArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPlanExecutionRescore = parameters.idPlanExecutionRescore
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kendra-ranking:${this.region}:${this.account}:rescore-execution-plan/${this.idPlanExecutionRescore}` as const
  }
}
export type { PlanExecutionRescoreArn }
export function planExecutionRescoreArn<Partition extends ArnPartition = 'aws'>(
  parameters: PlanExecutionRescoreArnParameters<Partition>,
) {
  return new PlanExecutionRescoreArn<Partition>(parameters)
}
