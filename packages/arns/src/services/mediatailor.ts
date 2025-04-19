import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface PlaybackConfigurationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class PlaybackConfigurationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'playbackConfiguration', `arn:${string}:mediatailor:${string}:${string}:playbackConfiguration/${string}`> {
  readonly [ArnResourceTypeBrand] = 'playbackConfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: PlaybackConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediatailor:${this.region}:${this.account}:playbackConfiguration/${this.resourceId}` as const
  }
}
export type { PlaybackConfigurationArn }
export function playbackConfigurationArn<Partition extends ArnPartition = 'aws'>(parameters: PlaybackConfigurationArnParameters<Partition>) {
  return new PlaybackConfigurationArn<Partition>(parameters)
}

export interface PrefetchScheduleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class PrefetchScheduleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'prefetchSchedule', `arn:${string}:mediatailor:${string}:${string}:prefetchSchedule/${string}`> {
  readonly [ArnResourceTypeBrand] = 'prefetchSchedule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: PrefetchScheduleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediatailor:${this.region}:${this.account}:prefetchSchedule/${this.resourceId}` as const
  }
}
export type { PrefetchScheduleArn }
export function prefetchScheduleArn<Partition extends ArnPartition = 'aws'>(parameters: PrefetchScheduleArnParameters<Partition>) {
  return new PrefetchScheduleArn<Partition>(parameters)
}

export interface ChannelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelName: string
}
class ChannelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'channel', `arn:${string}:mediatailor:${string}:${string}:channel/${string}`> {
  readonly [ArnResourceTypeBrand] = 'channel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelName: string
  constructor(parameters: ChannelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.channelName = parameters.channelName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediatailor:${this.region}:${this.account}:channel/${this.channelName}` as const
  }
}
export type { ChannelArn }
export function channelArn<Partition extends ArnPartition = 'aws'>(parameters: ChannelArnParameters<Partition>) {
  return new ChannelArn<Partition>(parameters)
}

export interface ProgramArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelName: string
  readonly programName: string
}
class ProgramArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'program', `arn:${string}:mediatailor:${string}:${string}:program/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'program' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly channelName: string
  readonly programName: string
  constructor(parameters: ProgramArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.channelName = parameters.channelName
    this.programName = parameters.programName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediatailor:${this.region}:${this.account}:program/${this.channelName}/${this.programName}` as const
  }
}
export type { ProgramArn }
export function programArn<Partition extends ArnPartition = 'aws'>(parameters: ProgramArnParameters<Partition>) {
  return new ProgramArn<Partition>(parameters)
}

export interface SourceLocationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sourceLocationName: string
}
class SourceLocationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'sourceLocation', `arn:${string}:mediatailor:${string}:${string}:sourceLocation/${string}`> {
  readonly [ArnResourceTypeBrand] = 'sourceLocation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sourceLocationName: string
  constructor(parameters: SourceLocationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.sourceLocationName = parameters.sourceLocationName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediatailor:${this.region}:${this.account}:sourceLocation/${this.sourceLocationName}` as const
  }
}
export type { SourceLocationArn }
export function sourceLocationArn<Partition extends ArnPartition = 'aws'>(parameters: SourceLocationArnParameters<Partition>) {
  return new SourceLocationArn<Partition>(parameters)
}

export interface VodSourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sourceLocationName: string
  readonly vodSourceName: string
}
class VodSourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'vodSource', `arn:${string}:mediatailor:${string}:${string}:vodSource/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'vodSource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sourceLocationName: string
  readonly vodSourceName: string
  constructor(parameters: VodSourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.sourceLocationName = parameters.sourceLocationName
    this.vodSourceName = parameters.vodSourceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediatailor:${this.region}:${this.account}:vodSource/${this.sourceLocationName}/${this.vodSourceName}` as const
  }
}
export type { VodSourceArn }
export function vodSourceArn<Partition extends ArnPartition = 'aws'>(parameters: VodSourceArnParameters<Partition>) {
  return new VodSourceArn<Partition>(parameters)
}

export interface LiveSourceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sourceLocationName: string
  readonly liveSourceName: string
}
class LiveSourceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'liveSource', `arn:${string}:mediatailor:${string}:${string}:liveSource/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'liveSource' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sourceLocationName: string
  readonly liveSourceName: string
  constructor(parameters: LiveSourceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.sourceLocationName = parameters.sourceLocationName
    this.liveSourceName = parameters.liveSourceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:mediatailor:${this.region}:${this.account}:liveSource/${this.sourceLocationName}/${this.liveSourceName}` as const
  }
}
export type { LiveSourceArn }
export function liveSourceArn<Partition extends ArnPartition = 'aws'>(parameters: LiveSourceArnParameters<Partition>) {
  return new LiveSourceArn<Partition>(parameters)
}