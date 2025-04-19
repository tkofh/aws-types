import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface AppMonitorResourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
}
class AppMonitorResourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'AppMonitorResource', `arn:${string}:rum:${string}:${string}:appmonitor/${string}`> {
  readonly [ArnResourceTypeBrand] = 'AppMonitorResource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly name: string
  constructor(parameters: AppMonitorResourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rum:${this.region}:${this.account}:appmonitor/${this.name}` as const
  }
}
export type { AppMonitorResourceArn }
export function appMonitorResourceArn<Partition extends ArnPartition = 'aws'>(parameters: AppMonitorResourceArnParameters<Partition>) {
  return new AppMonitorResourceArn<Partition>(parameters)
}