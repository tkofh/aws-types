import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface QuoteArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class QuoteArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'quote',
  `arn:${string}:elemental-appliances-software:${string}:${string}:quote/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'quote' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: QuoteArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:elemental-appliances-software:${this.region}:${this.account}:quote/${this.idResource}` as const
  }
}
export type { QuoteArn }
export function quoteArn<Partition extends ArnPartition = 'aws'>(
  parameters: QuoteArnParameters<Partition>,
) {
  return new QuoteArn<Partition>(parameters)
}
