import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DirectoryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDirectory: string
}
class DirectoryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'directory',
  `arn:${string}:ds:${string}:${string}:directory/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'directory' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDirectory: string
  constructor(parameters: DirectoryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDirectory = parameters.idDirectory
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ds:${this.region}:${this.account}:directory/${this.idDirectory}` as const
  }
}
export type { DirectoryArn }
export function directoryArn<Partition extends ArnPartition = 'aws'>(
  parameters: DirectoryArnParameters<Partition>,
) {
  return new DirectoryArn<Partition>(parameters)
}
