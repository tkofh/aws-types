import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ConfigurationManagerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly configurationManagerId: string
}
class ConfigurationManagerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'configuration-manager', `arn:${string}:ssm-quicksetup::${string}:configuration-manager/${string}`> {
  readonly [ArnResourceTypeBrand] = 'configuration-manager' as const
  readonly partition: Partition
  readonly account: string
  readonly configurationManagerId: string
  constructor(parameters: ConfigurationManagerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.configurationManagerId = parameters.configurationManagerId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-quicksetup::${this.account}:configuration-manager/${this.configurationManagerId}` as const
  }
}
export type { ConfigurationManagerArn }
export function configurationManagerArn<Partition extends ArnPartition = 'aws'>(parameters: ConfigurationManagerArnParameters<Partition>) {
  return new ConfigurationManagerArn<Partition>(parameters)
}