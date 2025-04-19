import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface StreamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamName: string
}
class StreamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'stream',
  `arn:${string}:kinesis:${string}:${string}:stream/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'stream' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamName: string
  constructor(parameters: StreamArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.streamName = parameters.streamName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kinesis:${this.region}:${this.account}:stream/${this.streamName}` as const
  }
}
export type { StreamArn }
export function streamArn<Partition extends ArnPartition = 'aws'>(
  parameters: StreamArnParameters<Partition>,
) {
  return new StreamArn<Partition>(parameters)
}

export interface ConsumerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamType: string
  readonly streamName: string
  readonly consumerName: string
  readonly consumerCreationTimpstamp: string
}
class ConsumerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'consumer',
  `arn:${string}:kinesis:${string}:${string}:${string}/${string}/consumer/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'consumer' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamType: string
  readonly streamName: string
  readonly consumerName: string
  readonly consumerCreationTimpstamp: string
  constructor(parameters: ConsumerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.streamType = parameters.streamType
    this.streamName = parameters.streamName
    this.consumerName = parameters.consumerName
    this.consumerCreationTimpstamp = parameters.consumerCreationTimpstamp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kinesis:${this.region}:${this.account}:${this.streamType}/${this.streamName}/consumer/${this.consumerName}:${this.consumerCreationTimpstamp}` as const
  }
}
export type { ConsumerArn }
export function consumerArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConsumerArnParameters<Partition>,
) {
  return new ConsumerArn<Partition>(parameters)
}

export interface KmsKeyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly keyId: string
}
class KmsKeyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'kmsKey',
  `arn:${string}:kms:${string}:${string}:key/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'kmsKey' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly keyId: string
  constructor(parameters: KmsKeyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.keyId = parameters.keyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:kms:${this.region}:${this.account}:key/${this.keyId}` as const
  }
}
export type { KmsKeyArn }
export function kmsKeyArn<Partition extends ArnPartition = 'aws'>(
  parameters: KmsKeyArnParameters<Partition>,
) {
  return new KmsKeyArn<Partition>(parameters)
}
