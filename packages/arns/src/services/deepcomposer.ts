import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ModelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelId: string
}
class ModelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'model', `arn:${string}:deepcomposer:${string}:${string}:model/${string}`> {
  readonly [ArnResourceTypeBrand] = 'model' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly modelId: string
  constructor(parameters: ModelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.modelId = parameters.modelId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deepcomposer:${this.region}:${this.account}:model/${this.modelId}` as const
  }
}
export type { ModelArn }
export function modelArn<Partition extends ArnPartition = 'aws'>(parameters: ModelArnParameters<Partition>) {
  return new ModelArn<Partition>(parameters)
}

export interface CompositionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly compositionId: string
}
class CompositionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'composition', `arn:${string}:deepcomposer:${string}:${string}:composition/${string}`> {
  readonly [ArnResourceTypeBrand] = 'composition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly compositionId: string
  constructor(parameters: CompositionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.compositionId = parameters.compositionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deepcomposer:${this.region}:${this.account}:composition/${this.compositionId}` as const
  }
}
export type { CompositionArn }
export function compositionArn<Partition extends ArnPartition = 'aws'>(parameters: CompositionArnParameters<Partition>) {
  return new CompositionArn<Partition>(parameters)
}

export interface AudioArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly audioId: string
}
class AudioArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'audio', `arn:${string}:deepcomposer:${string}:${string}:audio/${string}`> {
  readonly [ArnResourceTypeBrand] = 'audio' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly audioId: string
  constructor(parameters: AudioArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.audioId = parameters.audioId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:deepcomposer:${this.region}:${this.account}:audio/${this.audioId}` as const
  }
}
export type { AudioArn }
export function audioArn<Partition extends ArnPartition = 'aws'>(parameters: AudioArnParameters<Partition>) {
  return new AudioArn<Partition>(parameters)
}