import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ManagerConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly idManagerConfiguration: string
}
class ManagerConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuration-manager',
  `arn:${string}:ssm-quicksetup::${string}:configuration-manager/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configuration-manager' as const
  readonly partition: string
  readonly account: string
  readonly idManagerConfiguration: string
  constructor(parameters: ManagerConfigurationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idManagerConfiguration = parameters.idManagerConfiguration
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-quicksetup::${this.account}:configuration-manager/${this.idManagerConfiguration}` as const
  }
}
export type { ManagerConfigurationArn }
export function managerConfigurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ManagerConfigurationArnParameters<Partition>,
) {
  return new ManagerConfigurationArn<Partition>(parameters)
}
