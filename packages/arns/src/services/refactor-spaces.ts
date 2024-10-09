export interface EnvironmentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  environmentId: string
}
export type EnvironmentArn = `arn:${string}:refactor-spaces:${string}:${string}:environment/${string}`
export function environmentArn(parameters: EnvironmentArnParameters): EnvironmentArn {
  return `arn:${parameters.partition ?? ''}:refactor-spaces:${parameters.region}:${parameters.account}:environment/${parameters.environmentId}`
}

export interface ApplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  environmentId: string
  applicationId: string
}
export type ApplicationArn = `arn:${string}:refactor-spaces:${string}:${string}:environment/${string}/application/${string}`
export function applicationArn(parameters: ApplicationArnParameters): ApplicationArn {
  return `arn:${parameters.partition ?? ''}:refactor-spaces:${parameters.region}:${parameters.account}:environment/${parameters.environmentId}/application/${parameters.applicationId}`
}

export interface ServiceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  environmentId: string
  applicationId: string
  serviceId: string
}
export type ServiceArn = `arn:${string}:refactor-spaces:${string}:${string}:environment/${string}/application/${string}/service/${string}`
export function serviceArn(parameters: ServiceArnParameters): ServiceArn {
  return `arn:${parameters.partition ?? ''}:refactor-spaces:${parameters.region}:${parameters.account}:environment/${parameters.environmentId}/application/${parameters.applicationId}/service/${parameters.serviceId}`
}

export interface RouteArnParameters {
  partition?: string | undefined
  region: string
  account: string
  environmentId: string
  applicationId: string
  routeId: string
}
export type RouteArn = `arn:${string}:refactor-spaces:${string}:${string}:environment/${string}/application/${string}/route/${string}`
export function routeArn(parameters: RouteArnParameters): RouteArn {
  return `arn:${parameters.partition ?? ''}:refactor-spaces:${parameters.region}:${parameters.account}:environment/${parameters.environmentId}/application/${parameters.applicationId}/route/${parameters.routeId}`
}