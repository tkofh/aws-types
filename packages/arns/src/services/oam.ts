import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface LinkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class LinkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Link',
  `arn:${string}:oam:${string}:${string}:link/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Link' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: LinkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:oam:${this.region}:${this.account}:link/${this.idResource}` as const
  }
}
export type { LinkArn }
export function linkArn<Partition extends ArnPartition = 'aws'>(
  parameters: LinkArnParameters<Partition>,
) {
  return new LinkArn<Partition>(parameters)
}

export interface SinkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class SinkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Sink',
  `arn:${string}:oam:${string}:${string}:sink/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Sink' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: SinkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:oam:${this.region}:${this.account}:sink/${this.idResource}` as const
  }
}
export type { SinkArn }
export function sinkArn<Partition extends ArnPartition = 'aws'>(
  parameters: SinkArnParameters<Partition>,
) {
  return new SinkArn<Partition>(parameters)
}
