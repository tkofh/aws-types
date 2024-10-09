export interface EnabledControlArnParameters {
  partition?: string | undefined
  region: string
  account: string
  enabledControlId: string
}
export type EnabledControlArn = `arn:${string}:controltower:${string}:${string}:enabledcontrol/${string}`
export function enabledControlArn(parameters: EnabledControlArnParameters): EnabledControlArn {
  return `arn:${parameters.partition ?? ''}:controltower:${parameters.region}:${parameters.account}:enabledcontrol/${parameters.enabledControlId}`
}

export interface BaselineArnParameters {
  partition?: string | undefined
  region: string
  baselineId: string
}
export type BaselineArn = `arn:${string}:controltower:${string}::baseline/${string}`
export function baselineArn(parameters: BaselineArnParameters): BaselineArn {
  return `arn:${parameters.partition ?? ''}:controltower:${parameters.region}::baseline/${parameters.baselineId}`
}

export interface EnabledBaselineArnParameters {
  partition?: string | undefined
  region: string
  account: string
  enabledBaselineId: string
}
export type EnabledBaselineArn = `arn:${string}:controltower:${string}:${string}:enabledbaseline/${string}`
export function enabledBaselineArn(parameters: EnabledBaselineArnParameters): EnabledBaselineArn {
  return `arn:${parameters.partition ?? ''}:controltower:${parameters.region}:${parameters.account}:enabledbaseline/${parameters.enabledBaselineId}`
}

export interface LandingZoneArnParameters {
  partition?: string | undefined
  region: string
  account: string
  landingZoneId: string
}
export type LandingZoneArn = `arn:${string}:controltower:${string}:${string}:landingzone/${string}`
export function landingZoneArn(parameters: LandingZoneArnParameters): LandingZoneArn {
  return `arn:${parameters.partition ?? ''}:controltower:${parameters.region}:${parameters.account}:landingzone/${parameters.landingZoneId}`
}