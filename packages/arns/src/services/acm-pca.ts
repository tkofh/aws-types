import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface CertificateAuthorityArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificateAuthorityId: string
}
class CertificateAuthorityArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'certificate-authority', `arn:${string}:acm-pca:${string}:${string}:certificate-authority/${string}`> {
  readonly [ArnResourceTypeBrand] = 'certificate-authority' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificateAuthorityId: string
  constructor(parameters: CertificateAuthorityArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.certificateAuthorityId = parameters.certificateAuthorityId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:acm-pca:${this.region}:${this.account}:certificate-authority/${this.certificateAuthorityId}` as const
  }
}
export type { CertificateAuthorityArn }
export function certificateAuthorityArn<Partition extends ArnPartition = 'aws'>(parameters: CertificateAuthorityArnParameters<Partition>) {
  return new CertificateAuthorityArn<Partition>(parameters)
}