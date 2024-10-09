export interface DomainsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainName: string
}
export type DomainsArn = `arn:${string}:profile:${string}:${string}:domains/${string}`
export function domainsArn(parameters: DomainsArnParameters): DomainsArn {
  return `arn:${parameters.partition ?? ''}:profile:${parameters.region}:${parameters.account}:domains/${parameters.domainName}`
}

export interface ObjectTypesArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainName: string
  objectTypeName: string
}
export type ObjectTypesArn = `arn:${string}:profile:${string}:${string}:domains/${string}/object-types/${string}`
export function objectTypesArn(parameters: ObjectTypesArnParameters): ObjectTypesArn {
  return `arn:${parameters.partition ?? ''}:profile:${parameters.region}:${parameters.account}:domains/${parameters.domainName}/object-types/${parameters.objectTypeName}`
}

export interface IntegrationsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainName: string
  uri: string
}
export type IntegrationsArn = `arn:${string}:profile:${string}:${string}:domains/${string}/integrations/${string}`
export function integrationsArn(parameters: IntegrationsArnParameters): IntegrationsArn {
  return `arn:${parameters.partition ?? ''}:profile:${parameters.region}:${parameters.account}:domains/${parameters.domainName}/integrations/${parameters.uri}`
}

export interface EventStreamsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainName: string
  eventStreamName: string
}
export type EventStreamsArn = `arn:${string}:profile:${string}:${string}:domains/${string}/event-streams/${string}`
export function eventStreamsArn(parameters: EventStreamsArnParameters): EventStreamsArn {
  return `arn:${parameters.partition ?? ''}:profile:${parameters.region}:${parameters.account}:domains/${parameters.domainName}/event-streams/${parameters.eventStreamName}`
}

export interface CalculatedAttributesArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainName: string
  calculatedAttributeName: string
}
export type CalculatedAttributesArn = `arn:${string}:profile:${string}:${string}:domains/${string}/calculated-attributes/${string}`
export function calculatedAttributesArn(parameters: CalculatedAttributesArnParameters): CalculatedAttributesArn {
  return `arn:${parameters.partition ?? ''}:profile:${parameters.region}:${parameters.account}:domains/${parameters.domainName}/calculated-attributes/${parameters.calculatedAttributeName}`
}

export interface SegmentDefinitionsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainName: string
  segmentDefinitionName: string
}
export type SegmentDefinitionsArn = `arn:${string}:profile:${string}:${string}:domains/${string}/segment-definitions/${string}`
export function segmentDefinitionsArn(parameters: SegmentDefinitionsArnParameters): SegmentDefinitionsArn {
  return `arn:${parameters.partition ?? ''}:profile:${parameters.region}:${parameters.account}:domains/${parameters.domainName}/segment-definitions/${parameters.segmentDefinitionName}`
}