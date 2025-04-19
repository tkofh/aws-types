import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface CurArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reportName: string
}
class CurArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'cur', `arn:${string}:cur:${string}:${string}:definition/${string}`> {
  readonly [ArnResourceTypeBrand] = 'cur' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reportName: string
  constructor(parameters: CurArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.reportName = parameters.reportName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cur:${this.region}:${this.account}:definition/${this.reportName}` as const
  }
}
export type { CurArn }
export function curArn<Partition extends ArnPartition = 'aws'>(parameters: CurArnParameters<Partition>) {
  return new CurArn<Partition>(parameters)
}