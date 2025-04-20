import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface LexiconArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameLexicon: string
}
class LexiconArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'lexicon',
  `arn:${string}:polly:${string}:${string}:lexicon/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'lexicon' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameLexicon: string
  constructor(parameters: LexiconArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameLexicon = parameters.nameLexicon
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:polly:${this.region}:${this.account}:lexicon/${this.nameLexicon}` as const
  }
}
export type { LexiconArn }
export function lexiconArn<Partition extends ArnPartition = 'aws'>(
  parameters: LexiconArnParameters<Partition>,
) {
  return new LexiconArn<Partition>(parameters)
}
