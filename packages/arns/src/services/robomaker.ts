import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface RobotApplicationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationName: string
  readonly createdOnEpoch: string
}
class RobotApplicationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'robotApplication', `arn:${string}:robomaker:${string}:${string}:robot-application/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'robotApplication' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationName: string
  readonly createdOnEpoch: string
  constructor(parameters: RobotApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationName = parameters.applicationName
    this.createdOnEpoch = parameters.createdOnEpoch
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:robot-application/${this.applicationName}/${this.createdOnEpoch}` as const
  }
}
export type { RobotApplicationArn }
export function robotApplicationArn<Partition extends ArnPartition = 'aws'>(parameters: RobotApplicationArnParameters<Partition>) {
  return new RobotApplicationArn<Partition>(parameters)
}

export interface SimulationApplicationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationName: string
  readonly createdOnEpoch: string
}
class SimulationApplicationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'simulationApplication', `arn:${string}:robomaker:${string}:${string}:simulation-application/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'simulationApplication' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationName: string
  readonly createdOnEpoch: string
  constructor(parameters: SimulationApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationName = parameters.applicationName
    this.createdOnEpoch = parameters.createdOnEpoch
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:simulation-application/${this.applicationName}/${this.createdOnEpoch}` as const
  }
}
export type { SimulationApplicationArn }
export function simulationApplicationArn<Partition extends ArnPartition = 'aws'>(parameters: SimulationApplicationArnParameters<Partition>) {
  return new SimulationApplicationArn<Partition>(parameters)
}

export interface SimulationJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly simulationJobId: string
}
class SimulationJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'simulationJob', `arn:${string}:robomaker:${string}:${string}:simulation-job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'simulationJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly simulationJobId: string
  constructor(parameters: SimulationJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.simulationJobId = parameters.simulationJobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:simulation-job/${this.simulationJobId}` as const
  }
}
export type { SimulationJobArn }
export function simulationJobArn<Partition extends ArnPartition = 'aws'>(parameters: SimulationJobArnParameters<Partition>) {
  return new SimulationJobArn<Partition>(parameters)
}

export interface SimulationJobBatchArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly simulationJobBatchId: string
}
class SimulationJobBatchArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'simulationJobBatch', `arn:${string}:robomaker:${string}:${string}:simulation-job-batch/${string}`> {
  readonly [ArnResourceTypeBrand] = 'simulationJobBatch' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly simulationJobBatchId: string
  constructor(parameters: SimulationJobBatchArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.simulationJobBatchId = parameters.simulationJobBatchId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:simulation-job-batch/${this.simulationJobBatchId}` as const
  }
}
export type { SimulationJobBatchArn }
export function simulationJobBatchArn<Partition extends ArnPartition = 'aws'>(parameters: SimulationJobBatchArnParameters<Partition>) {
  return new SimulationJobBatchArn<Partition>(parameters)
}

export interface DeploymentJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deploymentJobId: string
}
class DeploymentJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'deploymentJob', `arn:${string}:robomaker:${string}:${string}:deployment-job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'deploymentJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly deploymentJobId: string
  constructor(parameters: DeploymentJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.deploymentJobId = parameters.deploymentJobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:deployment-job/${this.deploymentJobId}` as const
  }
}
export type { DeploymentJobArn }
export function deploymentJobArn<Partition extends ArnPartition = 'aws'>(parameters: DeploymentJobArnParameters<Partition>) {
  return new DeploymentJobArn<Partition>(parameters)
}

export interface RobotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly robotName: string
  readonly createdOnEpoch: string
}
class RobotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'robot', `arn:${string}:robomaker:${string}:${string}:robot/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'robot' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly robotName: string
  readonly createdOnEpoch: string
  constructor(parameters: RobotArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.robotName = parameters.robotName
    this.createdOnEpoch = parameters.createdOnEpoch
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:robot/${this.robotName}/${this.createdOnEpoch}` as const
  }
}
export type { RobotArn }
export function robotArn<Partition extends ArnPartition = 'aws'>(parameters: RobotArnParameters<Partition>) {
  return new RobotArn<Partition>(parameters)
}

export interface DeploymentFleetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fleetName: string
  readonly createdOnEpoch: string
}
class DeploymentFleetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'deploymentFleet', `arn:${string}:robomaker:${string}:${string}:deployment-fleet/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'deploymentFleet' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fleetName: string
  readonly createdOnEpoch: string
  constructor(parameters: DeploymentFleetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.fleetName = parameters.fleetName
    this.createdOnEpoch = parameters.createdOnEpoch
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:deployment-fleet/${this.fleetName}/${this.createdOnEpoch}` as const
  }
}
export type { DeploymentFleetArn }
export function deploymentFleetArn<Partition extends ArnPartition = 'aws'>(parameters: DeploymentFleetArnParameters<Partition>) {
  return new DeploymentFleetArn<Partition>(parameters)
}

export interface WorldGenerationJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly worldGenerationJobId: string
}
class WorldGenerationJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'worldGenerationJob', `arn:${string}:robomaker:${string}:${string}:world-generation-job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'worldGenerationJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly worldGenerationJobId: string
  constructor(parameters: WorldGenerationJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.worldGenerationJobId = parameters.worldGenerationJobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:world-generation-job/${this.worldGenerationJobId}` as const
  }
}
export type { WorldGenerationJobArn }
export function worldGenerationJobArn<Partition extends ArnPartition = 'aws'>(parameters: WorldGenerationJobArnParameters<Partition>) {
  return new WorldGenerationJobArn<Partition>(parameters)
}

export interface WorldExportJobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly worldExportJobId: string
}
class WorldExportJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'worldExportJob', `arn:${string}:robomaker:${string}:${string}:world-export-job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'worldExportJob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly worldExportJobId: string
  constructor(parameters: WorldExportJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.worldExportJobId = parameters.worldExportJobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:world-export-job/${this.worldExportJobId}` as const
  }
}
export type { WorldExportJobArn }
export function worldExportJobArn<Partition extends ArnPartition = 'aws'>(parameters: WorldExportJobArnParameters<Partition>) {
  return new WorldExportJobArn<Partition>(parameters)
}

export interface WorldTemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly worldTemplateJobId: string
}
class WorldTemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'worldTemplate', `arn:${string}:robomaker:${string}:${string}:world-template/${string}`> {
  readonly [ArnResourceTypeBrand] = 'worldTemplate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly worldTemplateJobId: string
  constructor(parameters: WorldTemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.worldTemplateJobId = parameters.worldTemplateJobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:world-template/${this.worldTemplateJobId}` as const
  }
}
export type { WorldTemplateArn }
export function worldTemplateArn<Partition extends ArnPartition = 'aws'>(parameters: WorldTemplateArnParameters<Partition>) {
  return new WorldTemplateArn<Partition>(parameters)
}

export interface WorldArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly worldId: string
}
class WorldArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'world', `arn:${string}:robomaker:${string}:${string}:world/${string}`> {
  readonly [ArnResourceTypeBrand] = 'world' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly worldId: string
  constructor(parameters: WorldArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.worldId = parameters.worldId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:robomaker:${this.region}:${this.account}:world/${this.worldId}` as const
  }
}
export type { WorldArn }
export function worldArn<Partition extends ArnPartition = 'aws'>(parameters: WorldArnParameters<Partition>) {
  return new WorldArn<Partition>(parameters)
}