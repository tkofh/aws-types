import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface LexiconArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly lexiconName: string
}
class LexiconArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'lexicon', `arn:${string}:polly:${string}:${string}:lexicon/${string}`> {
  readonly [ArnResourceTypeBrand] = 'lexicon' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly lexiconName: string
  constructor(parameters: LexiconArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.lexiconName = parameters.lexiconName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:polly:${this.region}:${this.account}:lexicon/${this.lexiconName}` as const
  }
}
export type { LexiconArn }
export function lexiconArn<Partition extends ArnPartition = 'aws'>(parameters: LexiconArnParameters<Partition>) {
  return new LexiconArn<Partition>(parameters)
}