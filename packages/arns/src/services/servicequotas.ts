import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface QuotaArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly codeService: string
  readonly codeQuota: string
}
class QuotaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'quota',
  `arn:${string}:servicequotas:${string}:${string}:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'quota' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly codeService: string
  readonly codeQuota: string
  constructor(parameters: QuotaArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.codeService = parameters.codeService
    this.codeQuota = parameters.codeQuota
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:servicequotas:${this.region}:${this.account}:${this.codeService}/${this.codeQuota}` as const
  }
}
export type { QuotaArn }
export function quotaArn<Partition extends ArnPartition = 'aws'>(
  parameters: QuotaArnParameters<Partition>,
) {
  return new QuotaArn<Partition>(parameters)
}
