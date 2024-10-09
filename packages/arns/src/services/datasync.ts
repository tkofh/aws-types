export interface AgentArnParameters {
  partition?: string | undefined
  region: string
  accountId: string
  agentId: string
}
export type AgentArn = `arn:${string}:datasync:${string}:${string}:agent/${string}`
export function agentArn(parameters: AgentArnParameters): AgentArn {
  return `arn:${parameters.partition ?? ''}:datasync:${parameters.region}:${parameters.accountId}:agent/${parameters.agentId}`
}

export interface LocationArnParameters {
  partition?: string | undefined
  region: string
  accountId: string
  locationId: string
}
export type LocationArn = `arn:${string}:datasync:${string}:${string}:location/${string}`
export function locationArn(parameters: LocationArnParameters): LocationArn {
  return `arn:${parameters.partition ?? ''}:datasync:${parameters.region}:${parameters.accountId}:location/${parameters.locationId}`
}

export interface TaskArnParameters {
  partition?: string | undefined
  region: string
  accountId: string
  taskId: string
}
export type TaskArn = `arn:${string}:datasync:${string}:${string}:task/${string}`
export function taskArn(parameters: TaskArnParameters): TaskArn {
  return `arn:${parameters.partition ?? ''}:datasync:${parameters.region}:${parameters.accountId}:task/${parameters.taskId}`
}

export interface TaskexecutionArnParameters {
  partition?: string | undefined
  region: string
  accountId: string
  taskId: string
  executionId: string
}
export type TaskexecutionArn = `arn:${string}:datasync:${string}:${string}:task/${string}/execution/${string}`
export function taskexecutionArn(parameters: TaskexecutionArnParameters): TaskexecutionArn {
  return `arn:${parameters.partition ?? ''}:datasync:${parameters.region}:${parameters.accountId}:task/${parameters.taskId}/execution/${parameters.executionId}`
}

export interface StoragesystemArnParameters {
  partition?: string | undefined
  region: string
  accountId: string
  storageSystemId: string
}
export type StoragesystemArn = `arn:${string}:datasync:${string}:${string}:system/${string}`
export function storagesystemArn(parameters: StoragesystemArnParameters): StoragesystemArn {
  return `arn:${parameters.partition ?? ''}:datasync:${parameters.region}:${parameters.accountId}:system/${parameters.storageSystemId}`
}

export interface DiscoveryjobArnParameters {
  partition?: string | undefined
  region: string
  accountId: string
  storageSystemId: string
  discoveryJobId: string
}
export type DiscoveryjobArn = `arn:${string}:datasync:${string}:${string}:system/${string}/job/${string}`
export function discoveryjobArn(parameters: DiscoveryjobArnParameters): DiscoveryjobArn {
  return `arn:${parameters.partition ?? ''}:datasync:${parameters.region}:${parameters.accountId}:system/${parameters.storageSystemId}/job/${parameters.discoveryJobId}`
}