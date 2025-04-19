import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface DomainArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
}
class DomainArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'domain', `arn:${string}:datazone:${string}:${string}:domain/${string}`> {
  readonly [ArnResourceTypeBrand] = 'domain' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainId: string
  constructor(parameters: DomainArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainId = parameters.domainId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:datazone:${this.region}:${this.account}:domain/${this.domainId}` as const
  }
}
export type { DomainArn }
export function domainArn<Partition extends ArnPartition = 'aws'>(parameters: DomainArnParameters<Partition>) {
  return new DomainArn<Partition>(parameters)
}