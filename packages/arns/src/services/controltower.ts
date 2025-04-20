import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ControlEnabledArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idControlEnabled: string
}
class ControlEnabledArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'EnabledControl',
  `arn:${string}:controltower:${string}:${string}:enabledcontrol/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'EnabledControl' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idControlEnabled: string
  constructor(parameters: ControlEnabledArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idControlEnabled = parameters.idControlEnabled
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:controltower:${this.region}:${this.account}:enabledcontrol/${this.idControlEnabled}` as const
  }
}
export type { ControlEnabledArn }
export function controlEnabledArn<Partition extends ArnPartition = 'aws'>(
  parameters: ControlEnabledArnParameters<Partition>,
) {
  return new ControlEnabledArn<Partition>(parameters)
}

export interface BaselineArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idBaseline: string
}
class BaselineArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Baseline',
  `arn:${string}:controltower:${string}::baseline/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Baseline' as const
  readonly partition: string
  readonly region: string
  readonly idBaseline: string
  constructor(parameters: BaselineArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idBaseline = parameters.idBaseline
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:controltower:${this.region}::baseline/${this.idBaseline}` as const
  }
}
export type { BaselineArn }
export function baselineArn<Partition extends ArnPartition = 'aws'>(
  parameters: BaselineArnParameters<Partition>,
) {
  return new BaselineArn<Partition>(parameters)
}

export interface BaselineEnabledArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBaselineEnabled: string
}
class BaselineEnabledArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'EnabledBaseline',
  `arn:${string}:controltower:${string}:${string}:enabledbaseline/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'EnabledBaseline' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBaselineEnabled: string
  constructor(parameters: BaselineEnabledArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idBaselineEnabled = parameters.idBaselineEnabled
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:controltower:${this.region}:${this.account}:enabledbaseline/${this.idBaselineEnabled}` as const
  }
}
export type { BaselineEnabledArn }
export function baselineEnabledArn<Partition extends ArnPartition = 'aws'>(
  parameters: BaselineEnabledArnParameters<Partition>,
) {
  return new BaselineEnabledArn<Partition>(parameters)
}

export interface ZoneLandingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idZoneLanding: string
}
class ZoneLandingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'LandingZone',
  `arn:${string}:controltower:${string}:${string}:landingzone/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'LandingZone' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idZoneLanding: string
  constructor(parameters: ZoneLandingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idZoneLanding = parameters.idZoneLanding
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:controltower:${this.region}:${this.account}:landingzone/${this.idZoneLanding}` as const
  }
}
export type { ZoneLandingArn }
export function zoneLandingArn<Partition extends ArnPartition = 'aws'>(
  parameters: ZoneLandingArnParameters<Partition>,
) {
  return new ZoneLandingArn<Partition>(parameters)
}
