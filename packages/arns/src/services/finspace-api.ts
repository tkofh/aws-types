import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CredentialArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class CredentialArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'credential',
  `arn:${string}:finspace-api:${string}:${string}:/credentials/programmatic`
> {
  readonly [ArnResourceTypeBrand] = 'credential' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: CredentialArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:finspace-api:${this.region}:${this.account}:/credentials/programmatic` as const
  }
}
export type { CredentialArn }
export function credentialArn<Partition extends ArnPartition = 'aws'>(
  parameters: CredentialArnParameters<Partition>,
) {
  return new CredentialArn<Partition>(parameters)
}
