import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface EnvironmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class EnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'environment',
  `arn:${string}:cloud9:${string}:${string}:environment:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'environment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: EnvironmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloud9:${this.region}:${this.account}:environment:${this.resourceId}` as const
  }
}
export type { EnvironmentArn }
export function environmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: EnvironmentArnParameters<Partition>,
) {
  return new EnvironmentArn<Partition>(parameters)
}
