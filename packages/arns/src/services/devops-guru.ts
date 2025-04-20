import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface TopicArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTopic: string
}
class TopicArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'topic',
  `arn:${string}:sns:${string}:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'topic' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTopic: string
  constructor(parameters: TopicArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTopic = parameters.nameTopic
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sns:${this.region}:${this.account}:${this.nameTopic}` as const
  }
}
export type { TopicArn }
export function topicArn<Partition extends ArnPartition = 'aws'>(
  parameters: TopicArnParameters<Partition>,
) {
  return new TopicArn<Partition>(parameters)
}
