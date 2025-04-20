import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface StreamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameStream: string
}
class StreamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'stream',
  `arn:${string}:kinesis:${string}:${string}:stream/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'stream' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameStream: string
  constructor(parameters: StreamArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameStream = parameters.nameStream
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kinesis:${this.region}:${this.account}:stream/${this.nameStream}` as const
  }
}
export type { StreamArn }
export function streamArn<Partition extends ArnPartition = 'aws'>(
  parameters: StreamArnParameters<Partition>,
) {
  return new StreamArn<Partition>(parameters)
}

export interface ConsumerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeStream: string
  readonly nameStream: string
  readonly nameConsumer: string
  readonly stampTimeCreationConsumer: string
}
class ConsumerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'consumer',
  `arn:${string}:kinesis:${string}:${string}:${string}/${string}/consumer/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'consumer' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeStream: string
  readonly nameStream: string
  readonly nameConsumer: string
  readonly stampTimeCreationConsumer: string
  constructor(parameters: ConsumerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.typeStream = parameters.typeStream
    this.nameStream = parameters.nameStream
    this.nameConsumer = parameters.nameConsumer
    this.stampTimeCreationConsumer = parameters.stampTimeCreationConsumer
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kinesis:${this.region}:${this.account}:${this.typeStream}/${this.nameStream}/consumer/${this.nameConsumer}:${this.stampTimeCreationConsumer}` as const
  }
}
export type { ConsumerArn }
export function consumerArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConsumerArnParameters<Partition>,
) {
  return new ConsumerArn<Partition>(parameters)
}

export interface KeyKmsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idKey: string
}
class KeyKmsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'kmsKey',
  `arn:${string}:kms:${string}:${string}:key/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'kmsKey' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idKey: string
  constructor(parameters: KeyKmsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idKey = parameters.idKey
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kms:${this.region}:${this.account}:key/${this.idKey}` as const
  }
}
export type { KeyKmsArn }
export function keyKmsArn<Partition extends ArnPartition = 'aws'>(
  parameters: KeyKmsArnParameters<Partition>,
) {
  return new KeyKmsArn<Partition>(parameters)
}
