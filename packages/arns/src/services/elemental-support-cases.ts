import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CaseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly resourceId: string
}
class CaseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'case',
  `arn:${string}:elemental-support-cases::${string}:case/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'case' as const
  readonly partition: Partition
  readonly account: string
  readonly resourceId: string
  constructor(parameters: CaseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elemental-support-cases::${this.account}:case/${this.resourceId}` as const
  }
}
export type { CaseArn }
export function caseArn<Partition extends ArnPartition = 'aws'>(
  parameters: CaseArnParameters<Partition>,
) {
  return new CaseArn<Partition>(parameters)
}
