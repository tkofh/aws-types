export interface EventSourceArnParameters {
  partition?: string | undefined
  region: string
  eventSourceName: string
}
export type EventSourceArn = `arn:${string}:events:${string}::event-source/${string}`
export function eventSourceArn(parameters: EventSourceArnParameters): EventSourceArn {
  return `arn:${parameters.partition ?? ''}:events:${parameters.region}::event-source/${parameters.eventSourceName}`
}

export interface EventBusArnParameters {
  partition?: string | undefined
  region: string
  account: string
  eventBusName: string
}
export type EventBusArn = `arn:${string}:events:${string}:${string}:event-bus/${string}`
export function eventBusArn(parameters: EventBusArnParameters): EventBusArn {
  return `arn:${parameters.partition ?? ''}:events:${parameters.region}:${parameters.account}:event-bus/${parameters.eventBusName}`
}

export interface RuleOnDefaultEventBusArnParameters {
  partition?: string | undefined
  region: string
  account: string
  ruleName: string
}
export type RuleOnDefaultEventBusArn = `arn:${string}:events:${string}:${string}:rule/${string}`
export function ruleOnDefaultEventBusArn(parameters: RuleOnDefaultEventBusArnParameters): RuleOnDefaultEventBusArn {
  return `arn:${parameters.partition ?? ''}:events:${parameters.region}:${parameters.account}:rule/${parameters.ruleName}`
}

export interface RuleOnCustomEventBusArnParameters {
  partition?: string | undefined
  region: string
  account: string
  eventBusName: string
  ruleName: string
}
export type RuleOnCustomEventBusArn = `arn:${string}:events:${string}:${string}:rule/${string}/${string}`
export function ruleOnCustomEventBusArn(parameters: RuleOnCustomEventBusArnParameters): RuleOnCustomEventBusArn {
  return `arn:${parameters.partition ?? ''}:events:${parameters.region}:${parameters.account}:rule/${parameters.eventBusName}/${parameters.ruleName}`
}

export interface ArchiveArnParameters {
  partition?: string | undefined
  region: string
  account: string
  archiveName: string
}
export type ArchiveArn = `arn:${string}:events:${string}:${string}:archive/${string}`
export function archiveArn(parameters: ArchiveArnParameters): ArchiveArn {
  return `arn:${parameters.partition ?? ''}:events:${parameters.region}:${parameters.account}:archive/${parameters.archiveName}`
}

export interface ReplayArnParameters {
  partition?: string | undefined
  region: string
  account: string
  replayName: string
}
export type ReplayArn = `arn:${string}:events:${string}:${string}:replay/${string}`
export function replayArn(parameters: ReplayArnParameters): ReplayArn {
  return `arn:${parameters.partition ?? ''}:events:${parameters.region}:${parameters.account}:replay/${parameters.replayName}`
}

export interface ConnectionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  connectionName: string
}
export type ConnectionArn = `arn:${string}:events:${string}:${string}:connection/${string}`
export function connectionArn(parameters: ConnectionArnParameters): ConnectionArn {
  return `arn:${parameters.partition ?? ''}:events:${parameters.region}:${parameters.account}:connection/${parameters.connectionName}`
}

export interface ApiDestinationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  apiDestinationName: string
}
export type ApiDestinationArn = `arn:${string}:events:${string}:${string}:api-destination/${string}`
export function apiDestinationArn(parameters: ApiDestinationArnParameters): ApiDestinationArn {
  return `arn:${parameters.partition ?? ''}:events:${parameters.region}:${parameters.account}:api-destination/${parameters.apiDestinationName}`
}

export interface EndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  endpointName: string
}
export type EndpointArn = `arn:${string}:events:${string}:${string}:endpoint/${string}`
export function endpointArn(parameters: EndpointArnParameters): EndpointArn {
  return `arn:${parameters.partition ?? ''}:events:${parameters.region}:${parameters.account}:endpoint/${parameters.endpointName}`
}

export interface CreateSnapshotArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type CreateSnapshotArn = `arn:${string}:events:${string}:${string}:target/create-snapshot`
export function createSnapshotArn(parameters: CreateSnapshotArnParameters): CreateSnapshotArn {
  return `arn:${parameters.partition ?? ''}:events:${parameters.region}:${parameters.account}:target/create-snapshot`
}

export interface RebootInstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type RebootInstanceArn = `arn:${string}:events:${string}:${string}:target/reboot-instance`
export function rebootInstanceArn(parameters: RebootInstanceArnParameters): RebootInstanceArn {
  return `arn:${parameters.partition ?? ''}:events:${parameters.region}:${parameters.account}:target/reboot-instance`
}

export interface StopInstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type StopInstanceArn = `arn:${string}:events:${string}:${string}:target/stop-instance`
export function stopInstanceArn(parameters: StopInstanceArnParameters): StopInstanceArn {
  return `arn:${parameters.partition ?? ''}:events:${parameters.region}:${parameters.account}:target/stop-instance`
}

export interface TerminateInstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type TerminateInstanceArn = `arn:${string}:events:${string}:${string}:target/terminate-instance`
export function terminateInstanceArn(parameters: TerminateInstanceArnParameters): TerminateInstanceArn {
  return `arn:${parameters.partition ?? ''}:events:${parameters.region}:${parameters.account}:target/terminate-instance`
}