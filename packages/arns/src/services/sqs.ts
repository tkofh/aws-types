import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface QueueArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameQueue: string
}
class QueueArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'queue',
  `arn:${string}:sqs:${string}:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'queue' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameQueue: string
  constructor(parameters: QueueArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameQueue = parameters.nameQueue
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:sqs:${this.region}:${this.account}:${this.nameQueue}` as const
  }
}
export type { QueueArn }
export function queueArn<Partition extends ArnPartition = 'aws'>(
  parameters: QueueArnParameters<Partition>,
) {
  return new QueueArn<Partition>(parameters)
}
