import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Channel',
  `arn:${string}:ivs:${string}:${string}:channel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Channel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:channel/${this.resourceId}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelArnParameters<Partition>,
) {
  return new ChannelArn<Partition>(parameters)
}

export interface StreamKeyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class StreamKeyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Stream-Key',
  `arn:${string}:ivs:${string}:${string}:stream-key/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Stream-Key' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: StreamKeyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:stream-key/${this.resourceId}` as const
  }
}
export type { StreamKeyArn }
export function streamKeyArn<Partition extends ArnPartition = 'aws'>(
  parameters: StreamKeyArnParameters<Partition>,
) {
  return new StreamKeyArn<Partition>(parameters)
}

export interface PlaybackKeyPairArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class PlaybackKeyPairArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Playback-Key-Pair',
  `arn:${string}:ivs:${string}:${string}:playback-key/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Playback-Key-Pair' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: PlaybackKeyPairArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:playback-key/${this.resourceId}` as const
  }
}
export type { PlaybackKeyPairArn }
export function playbackKeyPairArn<Partition extends ArnPartition = 'aws'>(
  parameters: PlaybackKeyPairArnParameters<Partition>,
) {
  return new PlaybackKeyPairArn<Partition>(parameters)
}

export interface PlaybackRestrictionPolicyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class PlaybackRestrictionPolicyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Playback-Restriction-Policy',
  `arn:${string}:ivs:${string}:${string}:playback-restriction-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Playback-Restriction-Policy' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: PlaybackRestrictionPolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:playback-restriction-policy/${this.resourceId}` as const
  }
}
export type { PlaybackRestrictionPolicyArn }
export function playbackRestrictionPolicyArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PlaybackRestrictionPolicyArnParameters<Partition>) {
  return new PlaybackRestrictionPolicyArn<Partition>(parameters)
}

export interface RecordingConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class RecordingConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Recording-Configuration',
  `arn:${string}:ivs:${string}:${string}:recording-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Recording-Configuration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: RecordingConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:recording-configuration/${this.resourceId}` as const
  }
}
export type { RecordingConfigurationArn }
export function recordingConfigurationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: RecordingConfigurationArnParameters<Partition>) {
  return new RecordingConfigurationArn<Partition>(parameters)
}

export interface StageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class StageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Stage',
  `arn:${string}:ivs:${string}:${string}:stage/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Stage' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: StageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:stage/${this.resourceId}` as const
  }
}
export type { StageArn }
export function stageArn<Partition extends ArnPartition = 'aws'>(
  parameters: StageArnParameters<Partition>,
) {
  return new StageArn<Partition>(parameters)
}

export interface CompositionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class CompositionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Composition',
  `arn:${string}:ivs:${string}:${string}:composition/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Composition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: CompositionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:composition/${this.resourceId}` as const
  }
}
export type { CompositionArn }
export function compositionArn<Partition extends ArnPartition = 'aws'>(
  parameters: CompositionArnParameters<Partition>,
) {
  return new CompositionArn<Partition>(parameters)
}

export interface EncoderConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class EncoderConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Encoder-Configuration',
  `arn:${string}:ivs:${string}:${string}:encoder-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Encoder-Configuration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: EncoderConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:encoder-configuration/${this.resourceId}` as const
  }
}
export type { EncoderConfigurationArn }
export function encoderConfigurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: EncoderConfigurationArnParameters<Partition>,
) {
  return new EncoderConfigurationArn<Partition>(parameters)
}

export interface StorageConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class StorageConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Storage-Configuration',
  `arn:${string}:ivs:${string}:${string}:storage-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Storage-Configuration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: StorageConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:storage-configuration/${this.resourceId}` as const
  }
}
export type { StorageConfigurationArn }
export function storageConfigurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: StorageConfigurationArnParameters<Partition>,
) {
  return new StorageConfigurationArn<Partition>(parameters)
}

export interface PublicKeyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class PublicKeyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Public-Key',
  `arn:${string}:ivs:${string}:${string}:public-key/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Public-Key' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: PublicKeyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:public-key/${this.resourceId}` as const
  }
}
export type { PublicKeyArn }
export function publicKeyArn<Partition extends ArnPartition = 'aws'>(
  parameters: PublicKeyArnParameters<Partition>,
) {
  return new PublicKeyArn<Partition>(parameters)
}

export interface IngestConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class IngestConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Ingest-Configuration',
  `arn:${string}:ivs:${string}:${string}:ingest-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Ingest-Configuration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: IngestConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:ingest-configuration/${this.resourceId}` as const
  }
}
export type { IngestConfigurationArn }
export function ingestConfigurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: IngestConfigurationArnParameters<Partition>,
) {
  return new IngestConfigurationArn<Partition>(parameters)
}
