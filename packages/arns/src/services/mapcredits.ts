import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AgreementArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly agreement: string
  readonly agreementId: string
}
class AgreementArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'agreement',
  `arn:${string}:mapcredits:::${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'agreement' as const
  readonly partition: Partition
  readonly agreement: string
  readonly agreementId: string
  constructor(parameters: AgreementArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.agreement = parameters.agreement
    this.agreementId = parameters.agreementId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mapcredits:::${this.agreement}/${this.agreementId}` as const
  }
}
export type { AgreementArn }
export function agreementArn<Partition extends ArnPartition = 'aws'>(
  parameters: AgreementArnParameters<Partition>,
) {
  return new AgreementArn<Partition>(parameters)
}
