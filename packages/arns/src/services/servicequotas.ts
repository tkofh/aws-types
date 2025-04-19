import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface QuotaArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceCode: string
  readonly quotaCode: string
}
class QuotaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'quota', `arn:${string}:servicequotas:${string}:${string}:${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'quota' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serviceCode: string
  readonly quotaCode: string
  constructor(parameters: QuotaArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serviceCode = parameters.serviceCode
    this.quotaCode = parameters.quotaCode
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:servicequotas:${this.region}:${this.account}:${this.serviceCode}/${this.quotaCode}` as const
  }
}
export type { QuotaArn }
export function quotaArn<Partition extends ArnPartition = 'aws'>(parameters: QuotaArnParameters<Partition>) {
  return new QuotaArn<Partition>(parameters)
}