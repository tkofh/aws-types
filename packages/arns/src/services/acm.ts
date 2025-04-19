import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface CertificateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificateId: string
}
class CertificateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'certificate', `arn:${string}:acm:${string}:${string}:certificate/${string}`> {
  readonly [ArnResourceTypeBrand] = 'certificate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificateId: string
  constructor(parameters: CertificateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.certificateId = parameters.certificateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:acm:${this.region}:${this.account}:certificate/${this.certificateId}` as const
  }
}
export type { CertificateArn }
export function certificateArn<Partition extends ArnPartition = 'aws'>(parameters: CertificateArnParameters<Partition>) {
  return new CertificateArn<Partition>(parameters)
}