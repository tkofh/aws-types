import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ModelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idModel: string
}
class ModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'model',
  `arn:${string}:deepcomposer:${string}:${string}:model/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'model' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idModel: string
  constructor(parameters: ModelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idModel = parameters.idModel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deepcomposer:${this.region}:${this.account}:model/${this.idModel}` as const
  }
}
export type { ModelArn }
export function modelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModelArnParameters<Partition>,
) {
  return new ModelArn<Partition>(parameters)
}

export interface CompositionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idComposition: string
}
class CompositionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'composition',
  `arn:${string}:deepcomposer:${string}:${string}:composition/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'composition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idComposition: string
  constructor(parameters: CompositionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idComposition = parameters.idComposition
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deepcomposer:${this.region}:${this.account}:composition/${this.idComposition}` as const
  }
}
export type { CompositionArn }
export function compositionArn<Partition extends ArnPartition = 'aws'>(
  parameters: CompositionArnParameters<Partition>,
) {
  return new CompositionArn<Partition>(parameters)
}

export interface AudioArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAudio: string
}
class AudioArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'audio',
  `arn:${string}:deepcomposer:${string}:${string}:audio/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'audio' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAudio: string
  constructor(parameters: AudioArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAudio = parameters.idAudio
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deepcomposer:${this.region}:${this.account}:audio/${this.idAudio}` as const
  }
}
export type { AudioArn }
export function audioArn<Partition extends ArnPartition = 'aws'>(
  parameters: AudioArnParameters<Partition>,
) {
  return new AudioArn<Partition>(parameters)
}
