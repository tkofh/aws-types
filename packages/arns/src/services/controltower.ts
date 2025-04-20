import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface EnabledControlArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly enabledControlId: string
}
class EnabledControlArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'EnabledControl',
  `arn:${string}:controltower:${string}:${string}:enabledcontrol/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'EnabledControl' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly enabledControlId: string
  constructor(parameters: EnabledControlArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.enabledControlId = parameters.enabledControlId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:controltower:${this.region}:${this.account}:enabledcontrol/${this.enabledControlId}` as const
  }
}
export type { EnabledControlArn }
export function enabledControlArn<Partition extends ArnPartition = 'aws'>(
  parameters: EnabledControlArnParameters<Partition>,
) {
  return new EnabledControlArn<Partition>(parameters)
}

export interface BaselineArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly baselineId: string
}
class BaselineArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Baseline',
  `arn:${string}:controltower:${string}::baseline/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Baseline' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly baselineId: string
  constructor(parameters: BaselineArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.baselineId = parameters.baselineId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:controltower:${this.region}::baseline/${this.baselineId}` as const
  }
}
export type { BaselineArn }
export function baselineArn<Partition extends ArnPartition = 'aws'>(
  parameters: BaselineArnParameters<Partition>,
) {
  return new BaselineArn<Partition>(parameters)
}

export interface EnabledBaselineArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly enabledBaselineId: string
}
class EnabledBaselineArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'EnabledBaseline',
  `arn:${string}:controltower:${string}:${string}:enabledbaseline/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'EnabledBaseline' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly enabledBaselineId: string
  constructor(parameters: EnabledBaselineArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.enabledBaselineId = parameters.enabledBaselineId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:controltower:${this.region}:${this.account}:enabledbaseline/${this.enabledBaselineId}` as const
  }
}
export type { EnabledBaselineArn }
export function enabledBaselineArn<Partition extends ArnPartition = 'aws'>(
  parameters: EnabledBaselineArnParameters<Partition>,
) {
  return new EnabledBaselineArn<Partition>(parameters)
}

export interface LandingZoneArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly landingZoneId: string
}
class LandingZoneArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'LandingZone',
  `arn:${string}:controltower:${string}:${string}:landingzone/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'LandingZone' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly landingZoneId: string
  constructor(parameters: LandingZoneArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.landingZoneId = parameters.landingZoneId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:controltower:${this.region}:${this.account}:landingzone/${this.landingZoneId}` as const
  }
}
export type { LandingZoneArn }
export function landingZoneArn<Partition extends ArnPartition = 'aws'>(
  parameters: LandingZoneArnParameters<Partition>,
) {
  return new LandingZoneArn<Partition>(parameters)
}
