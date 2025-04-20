import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Channel',
  `arn:${string}:ivs:${string}:${string}:channel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Channel' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:channel/${this.idResource}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelArnParameters<Partition>,
) {
  return new ChannelArn<Partition>(parameters)
}

export interface KeyStreamArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class KeyStreamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Stream-Key',
  `arn:${string}:ivs:${string}:${string}:stream-key/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Stream-Key' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: KeyStreamArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:stream-key/${this.idResource}` as const
  }
}
export type { KeyStreamArn }
export function keyStreamArn<Partition extends ArnPartition = 'aws'>(
  parameters: KeyStreamArnParameters<Partition>,
) {
  return new KeyStreamArn<Partition>(parameters)
}

export interface PairKeyPlaybackArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class PairKeyPlaybackArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Playback-Key-Pair',
  `arn:${string}:ivs:${string}:${string}:playback-key/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Playback-Key-Pair' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: PairKeyPlaybackArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:playback-key/${this.idResource}` as const
  }
}
export type { PairKeyPlaybackArn }
export function pairKeyPlaybackArn<Partition extends ArnPartition = 'aws'>(
  parameters: PairKeyPlaybackArnParameters<Partition>,
) {
  return new PairKeyPlaybackArn<Partition>(parameters)
}

export interface PolicyRestrictionPlaybackArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class PolicyRestrictionPlaybackArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Playback-Restriction-Policy',
  `arn:${string}:ivs:${string}:${string}:playback-restriction-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Playback-Restriction-Policy' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: PolicyRestrictionPlaybackArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:playback-restriction-policy/${this.idResource}` as const
  }
}
export type { PolicyRestrictionPlaybackArn }
export function policyRestrictionPlaybackArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PolicyRestrictionPlaybackArnParameters<Partition>) {
  return new PolicyRestrictionPlaybackArn<Partition>(parameters)
}

export interface ConfigurationRecordingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ConfigurationRecordingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Recording-Configuration',
  `arn:${string}:ivs:${string}:${string}:recording-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Recording-Configuration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ConfigurationRecordingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:recording-configuration/${this.idResource}` as const
  }
}
export type { ConfigurationRecordingArn }
export function configurationRecordingArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigurationRecordingArnParameters<Partition>) {
  return new ConfigurationRecordingArn<Partition>(parameters)
}

export interface StageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class StageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Stage',
  `arn:${string}:ivs:${string}:${string}:stage/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Stage' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: StageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:stage/${this.idResource}` as const
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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class CompositionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Composition',
  `arn:${string}:ivs:${string}:${string}:composition/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Composition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: CompositionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:composition/${this.idResource}` as const
  }
}
export type { CompositionArn }
export function compositionArn<Partition extends ArnPartition = 'aws'>(
  parameters: CompositionArnParameters<Partition>,
) {
  return new CompositionArn<Partition>(parameters)
}

export interface ConfigurationEncoderArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ConfigurationEncoderArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Encoder-Configuration',
  `arn:${string}:ivs:${string}:${string}:encoder-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Encoder-Configuration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ConfigurationEncoderArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:encoder-configuration/${this.idResource}` as const
  }
}
export type { ConfigurationEncoderArn }
export function configurationEncoderArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationEncoderArnParameters<Partition>,
) {
  return new ConfigurationEncoderArn<Partition>(parameters)
}

export interface ConfigurationStorageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ConfigurationStorageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Storage-Configuration',
  `arn:${string}:ivs:${string}:${string}:storage-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Storage-Configuration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ConfigurationStorageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:storage-configuration/${this.idResource}` as const
  }
}
export type { ConfigurationStorageArn }
export function configurationStorageArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationStorageArnParameters<Partition>,
) {
  return new ConfigurationStorageArn<Partition>(parameters)
}

export interface KeyPublicArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class KeyPublicArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Public-Key',
  `arn:${string}:ivs:${string}:${string}:public-key/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Public-Key' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: KeyPublicArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:public-key/${this.idResource}` as const
  }
}
export type { KeyPublicArn }
export function keyPublicArn<Partition extends ArnPartition = 'aws'>(
  parameters: KeyPublicArnParameters<Partition>,
) {
  return new KeyPublicArn<Partition>(parameters)
}

export interface ConfigurationIngestArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ConfigurationIngestArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Ingest-Configuration',
  `arn:${string}:ivs:${string}:${string}:ingest-configuration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Ingest-Configuration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ConfigurationIngestArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ivs:${this.region}:${this.account}:ingest-configuration/${this.idResource}` as const
  }
}
export type { ConfigurationIngestArn }
export function configurationIngestArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationIngestArnParameters<Partition>,
) {
  return new ConfigurationIngestArn<Partition>(parameters)
}
