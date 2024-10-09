export interface EnvironmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  environmentId: string
}
export type EnvironmentArn = `arn:${string}:finspace:${string}:${string}:environment/${string}`
export function environmentArn(parameters: EnvironmentArnParameters): EnvironmentArn {
  return `arn:${parameters.partition ?? ''}:finspace:${parameters.region}:${parameters.account}:environment/${parameters.environmentId}`
}

export interface UserArnParameters {
  partition?: string | undefined
  region: string
  account: string
  userId: string
}
export type UserArn = `arn:${string}:finspace:${string}:${string}:user/${string}`
export function userArn(parameters: UserArnParameters): UserArn {
  return `arn:${parameters.partition ?? ''}:finspace:${parameters.region}:${parameters.account}:user/${parameters.userId}`
}

export interface KxEnvironmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  environmentId: string
}
export type KxEnvironmentArn = `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}`
export function kxEnvironmentArn(parameters: KxEnvironmentArnParameters): KxEnvironmentArn {
  return `arn:${parameters.partition ?? ''}:finspace:${parameters.region}:${parameters.account}:kxEnvironment/${parameters.environmentId}`
}

export interface KxUserArnParameters {
  partition?: string | undefined
  region: string
  account: string
  environmentId: string
  userName: string
}
export type KxUserArn = `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}/kxUser/${string}`
export function kxUserArn(parameters: KxUserArnParameters): KxUserArn {
  return `arn:${parameters.partition ?? ''}:finspace:${parameters.region}:${parameters.account}:kxEnvironment/${parameters.environmentId}/kxUser/${parameters.userName}`
}

export interface KxClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  environmentId: string
  kxCluster: string
}
export type KxClusterArn = `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}/kxCluster/${string}`
export function kxClusterArn(parameters: KxClusterArnParameters): KxClusterArn {
  return `arn:${parameters.partition ?? ''}:finspace:${parameters.region}:${parameters.account}:kxEnvironment/${parameters.environmentId}/kxCluster/${parameters.kxCluster}`
}

export interface KxDatabaseArnParameters {
  partition?: string | undefined
  region: string
  account: string
  environmentId: string
  kxDatabase: string
}
export type KxDatabaseArn = `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}/kxDatabase/${string}`
export function kxDatabaseArn(parameters: KxDatabaseArnParameters): KxDatabaseArn {
  return `arn:${parameters.partition ?? ''}:finspace:${parameters.region}:${parameters.account}:kxEnvironment/${parameters.environmentId}/kxDatabase/${parameters.kxDatabase}`
}

export interface KxScalingGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  environmentId: string
  kxScalingGroup: string
}
export type KxScalingGroupArn = `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}/kxScalingGroup/${string}`
export function kxScalingGroupArn(parameters: KxScalingGroupArnParameters): KxScalingGroupArn {
  return `arn:${parameters.partition ?? ''}:finspace:${parameters.region}:${parameters.account}:kxEnvironment/${parameters.environmentId}/kxScalingGroup/${parameters.kxScalingGroup}`
}

export interface KxDataviewArnParameters {
  partition?: string | undefined
  region: string
  account: string
  environmentId: string
  kxDatabase: string
  kxDataview: string
}
export type KxDataviewArn = `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}/kxDatabase/${string}/kxDataview/${string}`
export function kxDataviewArn(parameters: KxDataviewArnParameters): KxDataviewArn {
  return `arn:${parameters.partition ?? ''}:finspace:${parameters.region}:${parameters.account}:kxEnvironment/${parameters.environmentId}/kxDatabase/${parameters.kxDatabase}/kxDataview/${parameters.kxDataview}`
}

export interface KxVolumeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  environmentId: string
  kxVolume: string
}
export type KxVolumeArn = `arn:${string}:finspace:${string}:${string}:kxEnvironment/${string}/kxVolume/${string}`
export function kxVolumeArn(parameters: KxVolumeArnParameters): KxVolumeArn {
  return `arn:${parameters.partition ?? ''}:finspace:${parameters.region}:${parameters.account}:kxEnvironment/${parameters.environmentId}/kxVolume/${parameters.kxVolume}`
}