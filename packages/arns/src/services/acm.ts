import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CertificateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCertificate: string
}
class CertificateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'certificate',
  `arn:${string}:acm:${string}:${string}:certificate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'certificate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCertificate: string
  constructor(parameters: CertificateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCertificate = parameters.idCertificate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:acm:${this.region}:${this.account}:certificate/${this.idCertificate}` as const
  }
}
export type { CertificateArn }
export function certificateArn<Partition extends ArnPartition = 'aws'>(
  parameters: CertificateArnParameters<Partition>,
) {
  return new CertificateArn<Partition>(parameters)
}
