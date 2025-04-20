import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface NameScanArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameScan: string
}
class NameScanArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ScanName',
  `arn:${string}:codeguru-security:${string}:${string}:scans/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ScanName' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameScan: string
  constructor(parameters: NameScanArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameScan = parameters.nameScan
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codeguru-security:${this.region}:${this.account}:scans/${this.nameScan}` as const
  }
}
export type { NameScanArn }
export function nameScanArn<Partition extends ArnPartition = 'aws'>(
  parameters: NameScanArnParameters<Partition>,
) {
  return new NameScanArn<Partition>(parameters)
}
