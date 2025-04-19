import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface VaultArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vaultName: string
}
class VaultArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'vault', `arn:${string}:glacier:${string}:${string}:vaults/${string}`> {
  readonly [ArnResourceTypeBrand] = 'vault' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly vaultName: string
  constructor(parameters: VaultArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.vaultName = parameters.vaultName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:glacier:${this.region}:${this.account}:vaults/${this.vaultName}` as const
  }
}
export type { VaultArn }
export function vaultArn<Partition extends ArnPartition = 'aws'>(parameters: VaultArnParameters<Partition>) {
  return new VaultArn<Partition>(parameters)
}