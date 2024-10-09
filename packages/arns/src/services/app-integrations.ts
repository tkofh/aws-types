export interface EventIntegrationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  eventIntegrationName: string
}
export type EventIntegrationArn = `arn:${string}:app-integrations:${string}:${string}:event-integration/${string}`
export function eventIntegrationArn(parameters: EventIntegrationArnParameters): EventIntegrationArn {
  return `arn:${parameters.partition ?? ''}:app-integrations:${parameters.region}:${parameters.account}:event-integration/${parameters.eventIntegrationName}`
}

export interface EventIntegrationAssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  eventIntegrationName: string
  resourceId: string
}
export type EventIntegrationAssociationArn = `arn:${string}:app-integrations:${string}:${string}:event-integration-association/${string}/${string}`
export function eventIntegrationAssociationArn(parameters: EventIntegrationAssociationArnParameters): EventIntegrationAssociationArn {
  return `arn:${parameters.partition ?? ''}:app-integrations:${parameters.region}:${parameters.account}:event-integration-association/${parameters.eventIntegrationName}/${parameters.resourceId}`
}

export interface DataIntegrationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dataIntegrationId: string
}
export type DataIntegrationArn = `arn:${string}:app-integrations:${string}:${string}:data-integration/${string}`
export function dataIntegrationArn(parameters: DataIntegrationArnParameters): DataIntegrationArn {
  return `arn:${parameters.partition ?? ''}:app-integrations:${parameters.region}:${parameters.account}:data-integration/${parameters.dataIntegrationId}`
}

export interface DataIntegrationAssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dataIntegrationId: string
  resourceId: string
}
export type DataIntegrationAssociationArn = `arn:${string}:app-integrations:${string}:${string}:data-integration-association/${string}/${string}`
export function dataIntegrationAssociationArn(parameters: DataIntegrationAssociationArnParameters): DataIntegrationAssociationArn {
  return `arn:${parameters.partition ?? ''}:app-integrations:${parameters.region}:${parameters.account}:data-integration-association/${parameters.dataIntegrationId}/${parameters.resourceId}`
}

export interface ApplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
}
export type ApplicationArn = `arn:${string}:app-integrations:${string}:${string}:application/${string}`
export function applicationArn(parameters: ApplicationArnParameters): ApplicationArn {
  return `arn:${parameters.partition ?? ''}:app-integrations:${parameters.region}:${parameters.account}:application/${parameters.applicationId}`
}

export interface ApplicationAssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationId: string
  applicationAssociationId: string
}
export type ApplicationAssociationArn = `arn:${string}:app-integrations:${string}:${string}:application-association/${string}/${string}`
export function applicationAssociationArn(parameters: ApplicationAssociationArnParameters): ApplicationAssociationArn {
  return `arn:${parameters.partition ?? ''}:app-integrations:${parameters.region}:${parameters.account}:application-association/${parameters.applicationId}/${parameters.applicationAssociationId}`
}