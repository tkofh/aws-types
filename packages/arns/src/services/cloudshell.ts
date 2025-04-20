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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
}
class EnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Environment',
  `arn:${string}:cloudshell:${string}:${string}:environment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Environment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEnvironment: string
  constructor(parameters: EnvironmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEnvironment = parameters.idEnvironment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cloudshell:${this.region}:${this.account}:environment/${this.idEnvironment}` as const
  }
}
export type { EnvironmentArn }
export function environmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: EnvironmentArnParameters<Partition>,
) {
  return new EnvironmentArn<Partition>(parameters)
}
