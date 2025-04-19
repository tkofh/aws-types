import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ScanNameArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scanName: string
}
class ScanNameArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'ScanName', `arn:${string}:codeguru-security:${string}:${string}:scans/${string}`> {
  readonly [ArnResourceTypeBrand] = 'ScanName' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scanName: string
  constructor(parameters: ScanNameArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.scanName = parameters.scanName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codeguru-security:${this.region}:${this.account}:scans/${this.scanName}` as const
  }
}
export type { ScanNameArn }
export function scanNameArn<Partition extends ArnPartition = 'aws'>(parameters: ScanNameArnParameters<Partition>) {
  return new ScanNameArn<Partition>(parameters)
}