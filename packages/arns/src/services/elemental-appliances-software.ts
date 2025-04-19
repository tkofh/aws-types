import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface QuoteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class QuoteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'quote', `arn:${string}:elemental-appliances-software:${string}:${string}:quote/${string}`> {
  readonly [ArnResourceTypeBrand] = 'quote' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: QuoteArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elemental-appliances-software:${this.region}:${this.account}:quote/${this.resourceId}` as const
  }
}
export type { QuoteArn }
export function quoteArn<Partition extends ArnPartition = 'aws'>(parameters: QuoteArnParameters<Partition>) {
  return new QuoteArn<Partition>(parameters)
}