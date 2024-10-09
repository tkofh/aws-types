export interface CreatedBackendArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type CreatedBackendArn = `arn:${string}:amplifybackend:${string}:${string}:/backend/*`
export function createdBackendArn(parameters: CreatedBackendArnParameters): CreatedBackendArn {
  return `arn:${parameters.partition ?? ''}:amplifybackend:${parameters.region}:${parameters.account}:/backend/*`
}

export interface BackendArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
}
export type BackendArn = `arn:${string}:amplifybackend:${string}:${string}:/backend/${string}/*`
export function backendArn(parameters: BackendArnParameters): BackendArn {
  return `arn:${parameters.partition ?? ''}:amplifybackend:${parameters.region}:${parameters.account}:/backend/${parameters.appId}/*`
}

export interface EnvironmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
}
export type EnvironmentArn = `arn:${string}:amplifybackend:${string}:${string}:/backend/${string}/environments/*`
export function environmentArn(parameters: EnvironmentArnParameters): EnvironmentArn {
  return `arn:${parameters.partition ?? ''}:amplifybackend:${parameters.region}:${parameters.account}:/backend/${parameters.appId}/environments/*`
}

export interface ApiArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
}
export type ApiArn = `arn:${string}:amplifybackend:${string}:${string}:/backend/${string}/api/*`
export function apiArn(parameters: ApiArnParameters): ApiArn {
  return `arn:${parameters.partition ?? ''}:amplifybackend:${parameters.region}:${parameters.account}:/backend/${parameters.appId}/api/*`
}

export interface AuthArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
}
export type AuthArn = `arn:${string}:amplifybackend:${string}:${string}:/backend/${string}/auth/*`
export function authArn(parameters: AuthArnParameters): AuthArn {
  return `arn:${parameters.partition ?? ''}:amplifybackend:${parameters.region}:${parameters.account}:/backend/${parameters.appId}/auth/*`
}

export interface JobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
}
export type JobArn = `arn:${string}:amplifybackend:${string}:${string}:/backend/${string}/job/*`
export function jobArn(parameters: JobArnParameters): JobArn {
  return `arn:${parameters.partition ?? ''}:amplifybackend:${parameters.region}:${parameters.account}:/backend/${parameters.appId}/job/*`
}

export interface ConfigArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
}
export type ConfigArn = `arn:${string}:amplifybackend:${string}:${string}:/backend/${string}/config/*`
export function configArn(parameters: ConfigArnParameters): ConfigArn {
  return `arn:${parameters.partition ?? ''}:amplifybackend:${parameters.region}:${parameters.account}:/backend/${parameters.appId}/config/*`
}

export interface TokenArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
}
export type TokenArn = `arn:${string}:amplifybackend:${string}:${string}:/backend/${string}/challenge/*`
export function tokenArn(parameters: TokenArnParameters): TokenArn {
  return `arn:${parameters.partition ?? ''}:amplifybackend:${parameters.region}:${parameters.account}:/backend/${parameters.appId}/challenge/*`
}

export interface StorageArnParameters {
  partition?: string | undefined
  region: string
  account: string
  appId: string
}
export type StorageArn = `arn:${string}:amplifybackend:${string}:${string}:/backend/${string}/storage/*`
export function storageArn(parameters: StorageArnParameters): StorageArn {
  return `arn:${parameters.partition ?? ''}:amplifybackend:${parameters.region}:${parameters.account}:/backend/${parameters.appId}/storage/*`
}