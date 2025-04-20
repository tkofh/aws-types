import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ApplicationRobotArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameApplication: string
  readonly epochOnCreated: string
}
class ApplicationRobotArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'robotApplication',
  `arn:${string}:robomaker:${string}:${string}:robot-application/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'robotApplication' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameApplication: string
  readonly epochOnCreated: string
  constructor(parameters: ApplicationRobotArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameApplication = parameters.nameApplication
    this.epochOnCreated = parameters.epochOnCreated
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:robot-application/${this.nameApplication}/${this.epochOnCreated}` as const
  }
}
export type { ApplicationRobotArn }
export function applicationRobotArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationRobotArnParameters<Partition>,
) {
  return new ApplicationRobotArn<Partition>(parameters)
}

export interface ApplicationSimulationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameApplication: string
  readonly epochOnCreated: string
}
class ApplicationSimulationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'simulationApplication',
  `arn:${string}:robomaker:${string}:${string}:simulation-application/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'simulationApplication' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameApplication: string
  readonly epochOnCreated: string
  constructor(parameters: ApplicationSimulationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameApplication = parameters.nameApplication
    this.epochOnCreated = parameters.epochOnCreated
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:simulation-application/${this.nameApplication}/${this.epochOnCreated}` as const
  }
}
export type { ApplicationSimulationArn }
export function applicationSimulationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ApplicationSimulationArnParameters<Partition>) {
  return new ApplicationSimulationArn<Partition>(parameters)
}

export interface JobSimulationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobSimulation: string
}
class JobSimulationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'simulationJob',
  `arn:${string}:robomaker:${string}:${string}:simulation-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'simulationJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobSimulation: string
  constructor(parameters: JobSimulationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJobSimulation = parameters.idJobSimulation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:simulation-job/${this.idJobSimulation}` as const
  }
}
export type { JobSimulationArn }
export function jobSimulationArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobSimulationArnParameters<Partition>,
) {
  return new JobSimulationArn<Partition>(parameters)
}

export interface BatchJobSimulationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBatchJobSimulation: string
}
class BatchJobSimulationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'simulationJobBatch',
  `arn:${string}:robomaker:${string}:${string}:simulation-job-batch/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'simulationJobBatch' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBatchJobSimulation: string
  constructor(parameters: BatchJobSimulationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idBatchJobSimulation = parameters.idBatchJobSimulation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:simulation-job-batch/${this.idBatchJobSimulation}` as const
  }
}
export type { BatchJobSimulationArn }
export function batchJobSimulationArn<Partition extends ArnPartition = 'aws'>(
  parameters: BatchJobSimulationArnParameters<Partition>,
) {
  return new BatchJobSimulationArn<Partition>(parameters)
}

export interface JobDeploymentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobDeployment: string
}
class JobDeploymentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'deploymentJob',
  `arn:${string}:robomaker:${string}:${string}:deployment-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deploymentJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobDeployment: string
  constructor(parameters: JobDeploymentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJobDeployment = parameters.idJobDeployment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:deployment-job/${this.idJobDeployment}` as const
  }
}
export type { JobDeploymentArn }
export function jobDeploymentArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobDeploymentArnParameters<Partition>,
) {
  return new JobDeploymentArn<Partition>(parameters)
}

export interface RobotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRobot: string
  readonly epochOnCreated: string
}
class RobotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'robot',
  `arn:${string}:robomaker:${string}:${string}:robot/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'robot' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRobot: string
  readonly epochOnCreated: string
  constructor(parameters: RobotArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameRobot = parameters.nameRobot
    this.epochOnCreated = parameters.epochOnCreated
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:robot/${this.nameRobot}/${this.epochOnCreated}` as const
  }
}
export type { RobotArn }
export function robotArn<Partition extends ArnPartition = 'aws'>(
  parameters: RobotArnParameters<Partition>,
) {
  return new RobotArn<Partition>(parameters)
}

export interface FleetDeploymentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFleet: string
  readonly epochOnCreated: string
}
class FleetDeploymentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'deploymentFleet',
  `arn:${string}:robomaker:${string}:${string}:deployment-fleet/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deploymentFleet' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFleet: string
  readonly epochOnCreated: string
  constructor(parameters: FleetDeploymentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameFleet = parameters.nameFleet
    this.epochOnCreated = parameters.epochOnCreated
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:deployment-fleet/${this.nameFleet}/${this.epochOnCreated}` as const
  }
}
export type { FleetDeploymentArn }
export function fleetDeploymentArn<Partition extends ArnPartition = 'aws'>(
  parameters: FleetDeploymentArnParameters<Partition>,
) {
  return new FleetDeploymentArn<Partition>(parameters)
}

export interface JobGenerationWorldArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobGenerationWorld: string
}
class JobGenerationWorldArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'worldGenerationJob',
  `arn:${string}:robomaker:${string}:${string}:world-generation-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'worldGenerationJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobGenerationWorld: string
  constructor(parameters: JobGenerationWorldArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJobGenerationWorld = parameters.idJobGenerationWorld
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:world-generation-job/${this.idJobGenerationWorld}` as const
  }
}
export type { JobGenerationWorldArn }
export function jobGenerationWorldArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobGenerationWorldArnParameters<Partition>,
) {
  return new JobGenerationWorldArn<Partition>(parameters)
}

export interface JobExportWorldArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobExportWorld: string
}
class JobExportWorldArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'worldExportJob',
  `arn:${string}:robomaker:${string}:${string}:world-export-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'worldExportJob' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobExportWorld: string
  constructor(parameters: JobExportWorldArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJobExportWorld = parameters.idJobExportWorld
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:world-export-job/${this.idJobExportWorld}` as const
  }
}
export type { JobExportWorldArn }
export function jobExportWorldArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobExportWorldArnParameters<Partition>,
) {
  return new JobExportWorldArn<Partition>(parameters)
}

export interface TemplateWorldArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobTemplateWorld: string
}
class TemplateWorldArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'worldTemplate',
  `arn:${string}:robomaker:${string}:${string}:world-template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'worldTemplate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobTemplateWorld: string
  constructor(parameters: TemplateWorldArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJobTemplateWorld = parameters.idJobTemplateWorld
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:world-template/${this.idJobTemplateWorld}` as const
  }
}
export type { TemplateWorldArn }
export function templateWorldArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateWorldArnParameters<Partition>,
) {
  return new TemplateWorldArn<Partition>(parameters)
}

export interface WorldArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorld: string
}
class WorldArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'world',
  `arn:${string}:robomaker:${string}:${string}:world/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'world' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorld: string
  constructor(parameters: WorldArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWorld = parameters.idWorld
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:world/${this.idWorld}` as const
  }
}
export type { WorldArn }
export function worldArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorldArnParameters<Partition>,
) {
  return new WorldArn<Partition>(parameters)
}
