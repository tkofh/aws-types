import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AuthorityCertificateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAuthorityCertificate: string
}
class AuthorityCertificateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'certificate-authority',
  `arn:${string}:acm-pca:${string}:${string}:certificate-authority/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'certificate-authority' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAuthorityCertificate: string
  constructor(parameters: AuthorityCertificateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAuthorityCertificate = parameters.idAuthorityCertificate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:acm-pca:${this.region}:${this.account}:certificate-authority/${this.idAuthorityCertificate}` as const
  }
}
export type { AuthorityCertificateArn }
export function authorityCertificateArn<Partition extends ArnPartition = 'aws'>(
  parameters: AuthorityCertificateArnParameters<Partition>,
) {
  return new AuthorityCertificateArn<Partition>(parameters)
}
