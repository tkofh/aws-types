import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface StudioArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStudio: string
}
class StudioArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'studio',
  `arn:${string}:nimble:${string}:${string}:studio/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'studio' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStudio: string
  constructor(parameters: StudioArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idStudio = parameters.idStudio
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:nimble:${this.region}:${this.account}:studio/${this.idStudio}` as const
  }
}
export type { StudioArn }
export function studioArn<Partition extends ArnPartition = 'aws'>(
  parameters: StudioArnParameters<Partition>,
) {
  return new StudioArn<Partition>(parameters)
}

export interface ImageStreamingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idImageStreaming: string
}
class ImageStreamingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'streaming-image',
  `arn:${string}:nimble:${string}:${string}:streaming-image/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'streaming-image' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idImageStreaming: string
  constructor(parameters: ImageStreamingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idImageStreaming = parameters.idImageStreaming
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:nimble:${this.region}:${this.account}:streaming-image/${this.idImageStreaming}` as const
  }
}
export type { ImageStreamingArn }
export function imageStreamingArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImageStreamingArnParameters<Partition>,
) {
  return new ImageStreamingArn<Partition>(parameters)
}

export interface ComponentStudioArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idComponentStudio: string
}
class ComponentStudioArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'studio-component',
  `arn:${string}:nimble:${string}:${string}:studio-component/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'studio-component' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idComponentStudio: string
  constructor(parameters: ComponentStudioArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idComponentStudio = parameters.idComponentStudio
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:nimble:${this.region}:${this.account}:studio-component/${this.idComponentStudio}` as const
  }
}
export type { ComponentStudioArn }
export function componentStudioArn<Partition extends ArnPartition = 'aws'>(
  parameters: ComponentStudioArnParameters<Partition>,
) {
  return new ComponentStudioArn<Partition>(parameters)
}

export interface ProfileLaunchArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProfileLaunch: string
}
class ProfileLaunchArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'launch-profile',
  `arn:${string}:nimble:${string}:${string}:launch-profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'launch-profile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProfileLaunch: string
  constructor(parameters: ProfileLaunchArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idProfileLaunch = parameters.idProfileLaunch
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:nimble:${this.region}:${this.account}:launch-profile/${this.idProfileLaunch}` as const
  }
}
export type { ProfileLaunchArn }
export function profileLaunchArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileLaunchArnParameters<Partition>,
) {
  return new ProfileLaunchArn<Partition>(parameters)
}

export interface SessionStreamingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSessionStreaming: string
}
class SessionStreamingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'streaming-session',
  `arn:${string}:nimble:${string}:${string}:streaming-session/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'streaming-session' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSessionStreaming: string
  constructor(parameters: SessionStreamingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSessionStreaming = parameters.idSessionStreaming
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:nimble:${this.region}:${this.account}:streaming-session/${this.idSessionStreaming}` as const
  }
}
export type { SessionStreamingArn }
export function sessionStreamingArn<Partition extends ArnPartition = 'aws'>(
  parameters: SessionStreamingArnParameters<Partition>,
) {
  return new SessionStreamingArn<Partition>(parameters)
}

export interface BackupSessionStreamingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBackupSessionStreaming: string
}
class BackupSessionStreamingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'streaming-session-backup',
  `arn:${string}:nimble:${string}:${string}:streaming-session-backup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'streaming-session-backup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBackupSessionStreaming: string
  constructor(parameters: BackupSessionStreamingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idBackupSessionStreaming = parameters.idBackupSessionStreaming
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:nimble:${this.region}:${this.account}:streaming-session-backup/${this.idBackupSessionStreaming}` as const
  }
}
export type { BackupSessionStreamingArn }
export function backupSessionStreamingArn<
  Partition extends ArnPartition = 'aws',
>(parameters: BackupSessionStreamingArnParameters<Partition>) {
  return new BackupSessionStreamingArn<Partition>(parameters)
}

export interface EulaArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEula: string
}
class EulaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'eula',
  `arn:${string}:nimble:${string}:${string}:eula/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'eula' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEula: string
  constructor(parameters: EulaArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEula = parameters.idEula
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:nimble:${this.region}:${this.account}:eula/${this.idEula}` as const
  }
}
export type { EulaArn }
export function eulaArn<Partition extends ArnPartition = 'aws'>(
  parameters: EulaArnParameters<Partition>,
) {
  return new EulaArn<Partition>(parameters)
}

export interface AcceptanceEulaArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAcceptanceEula: string
}
class AcceptanceEulaArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'eula-acceptance',
  `arn:${string}:nimble:${string}:${string}:eula-acceptance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'eula-acceptance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAcceptanceEula: string
  constructor(parameters: AcceptanceEulaArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAcceptanceEula = parameters.idAcceptanceEula
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:nimble:${this.region}:${this.account}:eula-acceptance/${this.idAcceptanceEula}` as const
  }
}
export type { AcceptanceEulaArn }
export function acceptanceEulaArn<Partition extends ArnPartition = 'aws'>(
  parameters: AcceptanceEulaArnParameters<Partition>,
) {
  return new AcceptanceEulaArn<Partition>(parameters)
}
