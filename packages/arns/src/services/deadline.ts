export interface BudgetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  farmId: string
  budgetId: string
}
export type BudgetArn = `arn:${string}:deadline:${string}:${string}:farm/${string}/budget/${string}`
export function budgetArn(parameters: BudgetArnParameters): BudgetArn {
  return `arn:${parameters.partition ?? ''}:deadline:${parameters.region}:${parameters.account}:farm/${parameters.farmId}/budget/${parameters.budgetId}`
}

export interface FarmArnParameters {
  partition?: string | undefined
  region: string
  account: string
  farmId: string
}
export type FarmArn = `arn:${string}:deadline:${string}:${string}:farm/${string}`
export function farmArn(parameters: FarmArnParameters): FarmArn {
  return `arn:${parameters.partition ?? ''}:deadline:${parameters.region}:${parameters.account}:farm/${parameters.farmId}`
}

export interface FleetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  farmId: string
  fleetId: string
}
export type FleetArn = `arn:${string}:deadline:${string}:${string}:farm/${string}/fleet/${string}`
export function fleetArn(parameters: FleetArnParameters): FleetArn {
  return `arn:${parameters.partition ?? ''}:deadline:${parameters.region}:${parameters.account}:farm/${parameters.farmId}/fleet/${parameters.fleetId}`
}

export interface JobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  farmId: string
  queueId: string
  jobId: string
}
export type JobArn = `arn:${string}:deadline:${string}:${string}:farm/${string}/queue/${string}/job/${string}`
export function jobArn(parameters: JobArnParameters): JobArn {
  return `arn:${parameters.partition ?? ''}:deadline:${parameters.region}:${parameters.account}:farm/${parameters.farmId}/queue/${parameters.queueId}/job/${parameters.jobId}`
}

export interface LicenseEndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  licenseEndpointId: string
}
export type LicenseEndpointArn = `arn:${string}:deadline:${string}:${string}:license-endpoint/${string}`
export function licenseEndpointArn(parameters: LicenseEndpointArnParameters): LicenseEndpointArn {
  return `arn:${parameters.partition ?? ''}:deadline:${parameters.region}:${parameters.account}:license-endpoint/${parameters.licenseEndpointId}`
}

export interface MeteredProductArnParameters {
  partition?: string | undefined
  region: string
  account: string
  licenseEndpointId: string
  productId: string
}
export type MeteredProductArn = `arn:${string}:deadline:${string}:${string}:license-endpoint/${string}/metered-product/${string}`
export function meteredProductArn(parameters: MeteredProductArnParameters): MeteredProductArn {
  return `arn:${parameters.partition ?? ''}:deadline:${parameters.region}:${parameters.account}:license-endpoint/${parameters.licenseEndpointId}/metered-product/${parameters.productId}`
}

export interface MonitorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  monitorId: string
}
export type MonitorArn = `arn:${string}:deadline:${string}:${string}:monitor/${string}`
export function monitorArn(parameters: MonitorArnParameters): MonitorArn {
  return `arn:${parameters.partition ?? ''}:deadline:${parameters.region}:${parameters.account}:monitor/${parameters.monitorId}`
}

export interface QueueArnParameters {
  partition?: string | undefined
  region: string
  account: string
  farmId: string
  queueId: string
}
export type QueueArn = `arn:${string}:deadline:${string}:${string}:farm/${string}/queue/${string}`
export function queueArn(parameters: QueueArnParameters): QueueArn {
  return `arn:${parameters.partition ?? ''}:deadline:${parameters.region}:${parameters.account}:farm/${parameters.farmId}/queue/${parameters.queueId}`
}

export interface WorkerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  farmId: string
  fleetId: string
  workerId: string
}
export type WorkerArn = `arn:${string}:deadline:${string}:${string}:farm/${string}/fleet/${string}/worker/${string}`
export function workerArn(parameters: WorkerArnParameters): WorkerArn {
  return `arn:${parameters.partition ?? ''}:deadline:${parameters.region}:${parameters.account}:farm/${parameters.farmId}/fleet/${parameters.fleetId}/worker/${parameters.workerId}`
}