import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ConfigurationPlaybackArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ConfigurationPlaybackArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'playbackConfiguration',
  `arn:${string}:mediatailor:${string}:${string}:playbackConfiguration/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'playbackConfiguration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ConfigurationPlaybackArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediatailor:${this.region}:${this.account}:playbackConfiguration/${this.idResource}` as const
  }
}
export type { ConfigurationPlaybackArn }
export function configurationPlaybackArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ConfigurationPlaybackArnParameters<Partition>) {
  return new ConfigurationPlaybackArn<Partition>(parameters)
}

export interface SchedulePrefetchArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class SchedulePrefetchArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'prefetchSchedule',
  `arn:${string}:mediatailor:${string}:${string}:prefetchSchedule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'prefetchSchedule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: SchedulePrefetchArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediatailor:${this.region}:${this.account}:prefetchSchedule/${this.idResource}` as const
  }
}
export type { SchedulePrefetchArn }
export function schedulePrefetchArn<Partition extends ArnPartition = 'aws'>(
  parameters: SchedulePrefetchArnParameters<Partition>,
) {
  return new SchedulePrefetchArn<Partition>(parameters)
}

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameChannel: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'channel',
  `arn:${string}:mediatailor:${string}:${string}:channel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'channel' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameChannel: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameChannel = parameters.nameChannel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediatailor:${this.region}:${this.account}:channel/${this.nameChannel}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelArnParameters<Partition>,
) {
  return new ChannelArn<Partition>(parameters)
}

export interface ProgramArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameChannel: string
  readonly nameProgram: string
}
class ProgramArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'program',
  `arn:${string}:mediatailor:${string}:${string}:program/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'program' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameChannel: string
  readonly nameProgram: string
  constructor(parameters: ProgramArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameChannel = parameters.nameChannel
    this.nameProgram = parameters.nameProgram
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediatailor:${this.region}:${this.account}:program/${this.nameChannel}/${this.nameProgram}` as const
  }
}
export type { ProgramArn }
export function programArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProgramArnParameters<Partition>,
) {
  return new ProgramArn<Partition>(parameters)
}

export interface LocationSourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameLocationSource: string
}
class LocationSourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'sourceLocation',
  `arn:${string}:mediatailor:${string}:${string}:sourceLocation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'sourceLocation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameLocationSource: string
  constructor(parameters: LocationSourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameLocationSource = parameters.nameLocationSource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediatailor:${this.region}:${this.account}:sourceLocation/${this.nameLocationSource}` as const
  }
}
export type { LocationSourceArn }
export function locationSourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: LocationSourceArnParameters<Partition>,
) {
  return new LocationSourceArn<Partition>(parameters)
}

export interface SourceVodArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameLocationSource: string
  readonly nameSourceVod: string
}
class SourceVodArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'vodSource',
  `arn:${string}:mediatailor:${string}:${string}:vodSource/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vodSource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameLocationSource: string
  readonly nameSourceVod: string
  constructor(parameters: SourceVodArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameLocationSource = parameters.nameLocationSource
    this.nameSourceVod = parameters.nameSourceVod
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediatailor:${this.region}:${this.account}:vodSource/${this.nameLocationSource}/${this.nameSourceVod}` as const
  }
}
export type { SourceVodArn }
export function sourceVodArn<Partition extends ArnPartition = 'aws'>(
  parameters: SourceVodArnParameters<Partition>,
) {
  return new SourceVodArn<Partition>(parameters)
}

export interface SourceLiveArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameLocationSource: string
  readonly nameSourceLive: string
}
class SourceLiveArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'liveSource',
  `arn:${string}:mediatailor:${string}:${string}:liveSource/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'liveSource' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameLocationSource: string
  readonly nameSourceLive: string
  constructor(parameters: SourceLiveArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameLocationSource = parameters.nameLocationSource
    this.nameSourceLive = parameters.nameSourceLive
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediatailor:${this.region}:${this.account}:liveSource/${this.nameLocationSource}/${this.nameSourceLive}` as const
  }
}
export type { SourceLiveArn }
export function sourceLiveArn<Partition extends ArnPartition = 'aws'>(
  parameters: SourceLiveArnParameters<Partition>,
) {
  return new SourceLiveArn<Partition>(parameters)
}
