import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ApplicationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
}
class ApplicationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'application', `arn:${string}:dax:${string}:${string}:cache/${string}`> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dax:${this.region}:${this.account}:cache/${this.clusterName}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(parameters: ApplicationArnParameters<Partition>) {
  return new ApplicationArn<Partition>(parameters)
}