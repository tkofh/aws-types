import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ResourceMonitorAppArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
}
class ResourceMonitorAppArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'AppMonitorResource',
  `arn:${string}:rum:${string}:${string}:appmonitor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'AppMonitorResource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly name: string
  constructor(parameters: ResourceMonitorAppArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.name = parameters.name
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rum:${this.region}:${this.account}:appmonitor/${this.name}` as const
  }
}
export type { ResourceMonitorAppArn }
export function resourceMonitorAppArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceMonitorAppArnParameters<Partition>,
) {
  return new ResourceMonitorAppArn<Partition>(parameters)
}
