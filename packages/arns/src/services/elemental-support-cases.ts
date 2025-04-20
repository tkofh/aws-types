import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CaseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly idResource: string
}
class CaseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'case',
  `arn:${string}:elemental-support-cases::${string}:case/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'case' as const
  readonly partition: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: CaseArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elemental-support-cases::${this.account}:case/${this.idResource}` as const
  }
}
export type { CaseArn }
export function caseArn<Partition extends ArnPartition = 'aws'>(
  parameters: CaseArnParameters<Partition>,
) {
  return new CaseArn<Partition>(parameters)
}
