import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AgentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idAgent: string
}
class AgentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'agent',
  `arn:${string}:datasync:${string}:${string}:agent/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'agent' as const
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idAgent: string
  constructor(parameters: AgentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccount = parameters.idAccount
    this.idAgent = parameters.idAgent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:datasync:${this.region}:${this.idAccount}:agent/${this.idAgent}` as const
  }
}
export type { AgentArn }
export function agentArn<Partition extends ArnPartition = 'aws'>(
  parameters: AgentArnParameters<Partition>,
) {
  return new AgentArn<Partition>(parameters)
}

export interface LocationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idLocation: string
}
class LocationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'location',
  `arn:${string}:datasync:${string}:${string}:location/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'location' as const
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idLocation: string
  constructor(parameters: LocationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccount = parameters.idAccount
    this.idLocation = parameters.idLocation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:datasync:${this.region}:${this.idAccount}:location/${this.idLocation}` as const
  }
}
export type { LocationArn }
export function locationArn<Partition extends ArnPartition = 'aws'>(
  parameters: LocationArnParameters<Partition>,
) {
  return new LocationArn<Partition>(parameters)
}

export interface TaskArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idTask: string
}
class TaskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'task',
  `arn:${string}:datasync:${string}:${string}:task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'task' as const
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idTask: string
  constructor(parameters: TaskArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccount = parameters.idAccount
    this.idTask = parameters.idTask
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:datasync:${this.region}:${this.idAccount}:task/${this.idTask}` as const
  }
}
export type { TaskArn }
export function taskArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskArnParameters<Partition>,
) {
  return new TaskArn<Partition>(parameters)
}

export interface ExecutionTaskArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idTask: string
  readonly idExecution: string
}
class ExecutionTaskArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'taskexecution',
  `arn:${string}:datasync:${string}:${string}:task/${string}/execution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'taskexecution' as const
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idTask: string
  readonly idExecution: string
  constructor(parameters: ExecutionTaskArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccount = parameters.idAccount
    this.idTask = parameters.idTask
    this.idExecution = parameters.idExecution
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:datasync:${this.region}:${this.idAccount}:task/${this.idTask}/execution/${this.idExecution}` as const
  }
}
export type { ExecutionTaskArn }
export function executionTaskArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExecutionTaskArnParameters<Partition>,
) {
  return new ExecutionTaskArn<Partition>(parameters)
}

export interface SystemStorageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idSystemStorage: string
}
class SystemStorageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'storagesystem',
  `arn:${string}:datasync:${string}:${string}:system/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'storagesystem' as const
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idSystemStorage: string
  constructor(parameters: SystemStorageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccount = parameters.idAccount
    this.idSystemStorage = parameters.idSystemStorage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:datasync:${this.region}:${this.idAccount}:system/${this.idSystemStorage}` as const
  }
}
export type { SystemStorageArn }
export function systemStorageArn<Partition extends ArnPartition = 'aws'>(
  parameters: SystemStorageArnParameters<Partition>,
) {
  return new SystemStorageArn<Partition>(parameters)
}

export interface JobDiscoveryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idSystemStorage: string
  readonly idJobDiscovery: string
}
class JobDiscoveryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'discoveryjob',
  `arn:${string}:datasync:${string}:${string}:system/${string}/job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'discoveryjob' as const
  readonly partition: string
  readonly region: string
  readonly idAccount: string
  readonly idSystemStorage: string
  readonly idJobDiscovery: string
  constructor(parameters: JobDiscoveryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idAccount = parameters.idAccount
    this.idSystemStorage = parameters.idSystemStorage
    this.idJobDiscovery = parameters.idJobDiscovery
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:datasync:${this.region}:${this.idAccount}:system/${this.idSystemStorage}/job/${this.idJobDiscovery}` as const
  }
}
export type { JobDiscoveryArn }
export function jobDiscoveryArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobDiscoveryArnParameters<Partition>,
) {
  return new JobDiscoveryArn<Partition>(parameters)
}
