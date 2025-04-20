import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface VaultArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameVault: string
}
class VaultArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'vault',
  `arn:${string}:glacier:${string}:${string}:vaults/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vault' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameVault: string
  constructor(parameters: VaultArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameVault = parameters.nameVault
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glacier:${this.region}:${this.account}:vaults/${this.nameVault}` as const
  }
}
export type { VaultArn }
export function vaultArn<Partition extends ArnPartition = 'aws'>(
  parameters: VaultArnParameters<Partition>,
) {
  return new VaultArn<Partition>(parameters)
}
