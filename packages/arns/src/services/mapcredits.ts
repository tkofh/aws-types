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
  readonly partition: string
  readonly agreement: string
  readonly idAgreement: string
}
class AgreementArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'agreement',
  `arn:${string}:mapcredits:::${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'agreement' as const
  readonly partition: string
  readonly agreement: string
  readonly idAgreement: string
  constructor(parameters: AgreementArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.agreement = parameters.agreement
    this.idAgreement = parameters.idAgreement
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mapcredits:::${this.agreement}/${this.idAgreement}` as const
  }
}
export type { AgreementArn }
export function agreementArn<Partition extends ArnPartition = 'aws'>(
  parameters: AgreementArnParameters<Partition>,
) {
  return new AgreementArn<Partition>(parameters)
}
