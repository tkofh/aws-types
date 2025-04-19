import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface AgentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly agentId: string
}
class AgentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'agent', `arn:${string}:datasync:${string}:${string}:agent/${string}`> {
  readonly [ArnResourceTypeBrand] = 'agent' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly agentId: string
  constructor(parameters: AgentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.accountId = parameters.accountId
    this.agentId = parameters.agentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:datasync:${this.region}:${this.accountId}:agent/${this.agentId}` as const
  }
}
export type { AgentArn }
export function agentArn<Partition extends ArnPartition = 'aws'>(parameters: AgentArnParameters<Partition>) {
  return new AgentArn<Partition>(parameters)
}

export interface LocationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly locationId: string
}
class LocationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'location', `arn:${string}:datasync:${string}:${string}:location/${string}`> {
  readonly [ArnResourceTypeBrand] = 'location' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly locationId: string
  constructor(parameters: LocationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.accountId = parameters.accountId
    this.locationId = parameters.locationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:datasync:${this.region}:${this.accountId}:location/${this.locationId}` as const
  }
}
export type { LocationArn }
export function locationArn<Partition extends ArnPartition = 'aws'>(parameters: LocationArnParameters<Partition>) {
  return new LocationArn<Partition>(parameters)
}

export interface TaskArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly taskId: string
}
class TaskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'task', `arn:${string}:datasync:${string}:${string}:task/${string}`> {
  readonly [ArnResourceTypeBrand] = 'task' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly taskId: string
  constructor(parameters: TaskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.accountId = parameters.accountId
    this.taskId = parameters.taskId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:datasync:${this.region}:${this.accountId}:task/${this.taskId}` as const
  }
}
export type { TaskArn }
export function taskArn<Partition extends ArnPartition = 'aws'>(parameters: TaskArnParameters<Partition>) {
  return new TaskArn<Partition>(parameters)
}

export interface TaskexecutionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly taskId: string
  readonly executionId: string
}
class TaskexecutionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'taskexecution', `arn:${string}:datasync:${string}:${string}:task/${string}/execution/${string}`> {
  readonly [ArnResourceTypeBrand] = 'taskexecution' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly taskId: string
  readonly executionId: string
  constructor(parameters: TaskexecutionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.accountId = parameters.accountId
    this.taskId = parameters.taskId
    this.executionId = parameters.executionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:datasync:${this.region}:${this.accountId}:task/${this.taskId}/execution/${this.executionId}` as const
  }
}
export type { TaskexecutionArn }
export function taskexecutionArn<Partition extends ArnPartition = 'aws'>(parameters: TaskexecutionArnParameters<Partition>) {
  return new TaskexecutionArn<Partition>(parameters)
}

export interface StoragesystemArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly storageSystemId: string
}
class StoragesystemArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'storagesystem', `arn:${string}:datasync:${string}:${string}:system/${string}`> {
  readonly [ArnResourceTypeBrand] = 'storagesystem' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly storageSystemId: string
  constructor(parameters: StoragesystemArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.accountId = parameters.accountId
    this.storageSystemId = parameters.storageSystemId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:datasync:${this.region}:${this.accountId}:system/${this.storageSystemId}` as const
  }
}
export type { StoragesystemArn }
export function storagesystemArn<Partition extends ArnPartition = 'aws'>(parameters: StoragesystemArnParameters<Partition>) {
  return new StoragesystemArn<Partition>(parameters)
}

export interface DiscoveryjobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly storageSystemId: string
  readonly discoveryJobId: string
}
class DiscoveryjobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'discoveryjob', `arn:${string}:datasync:${string}:${string}:system/${string}/job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'discoveryjob' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly accountId: string
  readonly storageSystemId: string
  readonly discoveryJobId: string
  constructor(parameters: DiscoveryjobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.accountId = parameters.accountId
    this.storageSystemId = parameters.storageSystemId
    this.discoveryJobId = parameters.discoveryJobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:datasync:${this.region}:${this.accountId}:system/${this.storageSystemId}/job/${this.discoveryJobId}` as const
  }
}
export type { DiscoveryjobArn }
export function discoveryjobArn<Partition extends ArnPartition = 'aws'>(parameters: DiscoveryjobArnParameters<Partition>) {
  return new DiscoveryjobArn<Partition>(parameters)
}