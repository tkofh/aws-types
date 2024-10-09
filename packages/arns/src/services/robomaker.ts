export interface RobotApplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationName: string
  createdOnEpoch: string
}
export type RobotApplicationArn = `arn:${string}:robomaker:${string}:${string}:robot-application/${string}/${string}`
export function robotApplicationArn(parameters: RobotApplicationArnParameters): RobotApplicationArn {
  return `arn:${parameters.partition ?? ''}:robomaker:${parameters.region}:${parameters.account}:robot-application/${parameters.applicationName}/${parameters.createdOnEpoch}`
}

export interface SimulationApplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  applicationName: string
  createdOnEpoch: string
}
export type SimulationApplicationArn = `arn:${string}:robomaker:${string}:${string}:simulation-application/${string}/${string}`
export function simulationApplicationArn(parameters: SimulationApplicationArnParameters): SimulationApplicationArn {
  return `arn:${parameters.partition ?? ''}:robomaker:${parameters.region}:${parameters.account}:simulation-application/${parameters.applicationName}/${parameters.createdOnEpoch}`
}

export interface SimulationJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  simulationJobId: string
}
export type SimulationJobArn = `arn:${string}:robomaker:${string}:${string}:simulation-job/${string}`
export function simulationJobArn(parameters: SimulationJobArnParameters): SimulationJobArn {
  return `arn:${parameters.partition ?? ''}:robomaker:${parameters.region}:${parameters.account}:simulation-job/${parameters.simulationJobId}`
}

export interface SimulationJobBatchArnParameters {
  partition?: string | undefined
  region: string
  account: string
  simulationJobBatchId: string
}
export type SimulationJobBatchArn = `arn:${string}:robomaker:${string}:${string}:simulation-job-batch/${string}`
export function simulationJobBatchArn(parameters: SimulationJobBatchArnParameters): SimulationJobBatchArn {
  return `arn:${parameters.partition ?? ''}:robomaker:${parameters.region}:${parameters.account}:simulation-job-batch/${parameters.simulationJobBatchId}`
}

export interface DeploymentJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  deploymentJobId: string
}
export type DeploymentJobArn = `arn:${string}:robomaker:${string}:${string}:deployment-job/${string}`
export function deploymentJobArn(parameters: DeploymentJobArnParameters): DeploymentJobArn {
  return `arn:${parameters.partition ?? ''}:robomaker:${parameters.region}:${parameters.account}:deployment-job/${parameters.deploymentJobId}`
}

export interface RobotArnParameters {
  partition?: string | undefined
  region: string
  account: string
  robotName: string
  createdOnEpoch: string
}
export type RobotArn = `arn:${string}:robomaker:${string}:${string}:robot/${string}/${string}`
export function robotArn(parameters: RobotArnParameters): RobotArn {
  return `arn:${parameters.partition ?? ''}:robomaker:${parameters.region}:${parameters.account}:robot/${parameters.robotName}/${parameters.createdOnEpoch}`
}

export interface DeploymentFleetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  fleetName: string
  createdOnEpoch: string
}
export type DeploymentFleetArn = `arn:${string}:robomaker:${string}:${string}:deployment-fleet/${string}/${string}`
export function deploymentFleetArn(parameters: DeploymentFleetArnParameters): DeploymentFleetArn {
  return `arn:${parameters.partition ?? ''}:robomaker:${parameters.region}:${parameters.account}:deployment-fleet/${parameters.fleetName}/${parameters.createdOnEpoch}`
}

export interface WorldGenerationJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  worldGenerationJobId: string
}
export type WorldGenerationJobArn = `arn:${string}:robomaker:${string}:${string}:world-generation-job/${string}`
export function worldGenerationJobArn(parameters: WorldGenerationJobArnParameters): WorldGenerationJobArn {
  return `arn:${parameters.partition ?? ''}:robomaker:${parameters.region}:${parameters.account}:world-generation-job/${parameters.worldGenerationJobId}`
}

export interface WorldExportJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  worldExportJobId: string
}
export type WorldExportJobArn = `arn:${string}:robomaker:${string}:${string}:world-export-job/${string}`
export function worldExportJobArn(parameters: WorldExportJobArnParameters): WorldExportJobArn {
  return `arn:${parameters.partition ?? ''}:robomaker:${parameters.region}:${parameters.account}:world-export-job/${parameters.worldExportJobId}`
}

export interface WorldTemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  worldTemplateJobId: string
}
export type WorldTemplateArn = `arn:${string}:robomaker:${string}:${string}:world-template/${string}`
export function worldTemplateArn(parameters: WorldTemplateArnParameters): WorldTemplateArn {
  return `arn:${parameters.partition ?? ''}:robomaker:${parameters.region}:${parameters.account}:world-template/${parameters.worldTemplateJobId}`
}

export interface WorldArnParameters {
  partition?: string | undefined
  region: string
  account: string
  worldId: string
}
export type WorldArn = `arn:${string}:robomaker:${string}:${string}:world/${string}`
export function worldArn(parameters: WorldArnParameters): WorldArn {
  return `arn:${parameters.partition ?? ''}:robomaker:${parameters.region}:${parameters.account}:world/${parameters.worldId}`
}