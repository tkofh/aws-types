import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface StudioArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly studioId: string
}
class StudioArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'studio',
  `arn:${string}:nimble:${string}:${string}:studio/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'studio' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly studioId: string
  constructor(parameters: StudioArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.studioId = parameters.studioId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:nimble:${this.region}:${this.account}:studio/${this.studioId}` as const
  }
}
export type { StudioArn }
export function studioArn<Partition extends ArnPartition = 'aws'>(
  parameters: StudioArnParameters<Partition>,
) {
  return new StudioArn<Partition>(parameters)
}

export interface StreamingImageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamingImageId: string
}
class StreamingImageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'streaming-image',
  `arn:${string}:nimble:${string}:${string}:streaming-image/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'streaming-image' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamingImageId: string
  constructor(parameters: StreamingImageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.streamingImageId = parameters.streamingImageId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:nimble:${this.region}:${this.account}:streaming-image/${this.streamingImageId}` as const
  }
}
export type { StreamingImageArn }
export function streamingImageArn<Partition extends ArnPartition = 'aws'>(
  parameters: StreamingImageArnParameters<Partition>,
) {
  return new StreamingImageArn<Partition>(parameters)
}

export interface StudioComponentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly studioComponentId: string
}
class StudioComponentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'studio-component',
  `arn:${string}:nimble:${string}:${string}:studio-component/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'studio-component' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly studioComponentId: string
  constructor(parameters: StudioComponentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.studioComponentId = parameters.studioComponentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:nimble:${this.region}:${this.account}:studio-component/${this.studioComponentId}` as const
  }
}
export type { StudioComponentArn }
export function studioComponentArn<Partition extends ArnPartition = 'aws'>(
  parameters: StudioComponentArnParameters<Partition>,
) {
  return new StudioComponentArn<Partition>(parameters)
}

export interface LaunchProfileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly launchProfileId: string
}
class LaunchProfileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'launch-profile',
  `arn:${string}:nimble:${string}:${string}:launch-profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'launch-profile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly launchProfileId: string
  constructor(parameters: LaunchProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.launchProfileId = parameters.launchProfileId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:nimble:${this.region}:${this.account}:launch-profile/${this.launchProfileId}` as const
  }
}
export type { LaunchProfileArn }
export function launchProfileArn<Partition extends ArnPartition = 'aws'>(
  parameters: LaunchProfileArnParameters<Partition>,
) {
  return new LaunchProfileArn<Partition>(parameters)
}

export interface StreamingSessionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamingSessionId: string
}
class StreamingSessionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'streaming-session',
  `arn:${string}:nimble:${string}:${string}:streaming-session/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'streaming-session' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamingSessionId: string
  constructor(parameters: StreamingSessionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.streamingSessionId = parameters.streamingSessionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:nimble:${this.region}:${this.account}:streaming-session/${this.streamingSessionId}` as const
  }
}
export type { StreamingSessionArn }
export function streamingSessionArn<Partition extends ArnPartition = 'aws'>(
  parameters: StreamingSessionArnParameters<Partition>,
) {
  return new StreamingSessionArn<Partition>(parameters)
}

export interface StreamingSessionBackupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamingSessionBackupId: string
}
class StreamingSessionBackupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'streaming-session-backup',
  `arn:${string}:nimble:${string}:${string}:streaming-session-backup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'streaming-session-backup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamingSessionBackupId: string
  constructor(parameters: StreamingSessionBackupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.streamingSessionBackupId = parameters.streamingSessionBackupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:nimble:${this.region}:${this.account}:streaming-session-backup/${this.streamingSessionBackupId}` as const
  }
}
export type { StreamingSessionBackupArn }
export function streamingSessionBackupArn<
  Partition extends ArnPartition = 'aws',
>(parameters: StreamingSessionBackupArnParameters<Partition>) {
  return new StreamingSessionBackupArn<Partition>(parameters)
}

export interface EulaArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eulaId: string
}
class EulaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'eula',
  `arn:${string}:nimble:${string}:${string}:eula/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'eula' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eulaId: string
  constructor(parameters: EulaArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.eulaId = parameters.eulaId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:nimble:${this.region}:${this.account}:eula/${this.eulaId}` as const
  }
}
export type { EulaArn }
export function eulaArn<Partition extends ArnPartition = 'aws'>(
  parameters: EulaArnParameters<Partition>,
) {
  return new EulaArn<Partition>(parameters)
}

export interface EulaAcceptanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eulaAcceptanceId: string
}
class EulaAcceptanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'eula-acceptance',
  `arn:${string}:nimble:${string}:${string}:eula-acceptance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'eula-acceptance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eulaAcceptanceId: string
  constructor(parameters: EulaAcceptanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.eulaAcceptanceId = parameters.eulaAcceptanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:nimble:${this.region}:${this.account}:eula-acceptance/${this.eulaAcceptanceId}` as const
  }
}
export type { EulaAcceptanceArn }
export function eulaAcceptanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: EulaAcceptanceArnParameters<Partition>,
) {
  return new EulaAcceptanceArn<Partition>(parameters)
}
