import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:ecs:${string}:${string}:cluster/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecs:${this.region}:${this.account}:cluster/${this.nameCluster}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface InstanceContainerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly idInstanceContainer: string
}
class InstanceContainerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'container-instance',
  `arn:${string}:ecs:${string}:${string}:container-instance/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'container-instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly idInstanceContainer: string
  constructor(parameters: InstanceContainerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
    this.idInstanceContainer = parameters.idInstanceContainer
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecs:${this.region}:${this.account}:container-instance/${this.nameCluster}/${this.idInstanceContainer}` as const
  }
}
export type { InstanceContainerArn }
export function instanceContainerArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceContainerArnParameters<Partition>,
) {
  return new InstanceContainerArn<Partition>(parameters)
}

export interface ServiceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly nameService: string
}
class ServiceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'service',
  `arn:${string}:ecs:${string}:${string}:service/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'service' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly nameService: string
  constructor(parameters: ServiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
    this.nameService = parameters.nameService
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecs:${this.region}:${this.account}:service/${this.nameCluster}/${this.nameService}` as const
  }
}
export type { ServiceArn }
export function serviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServiceArnParameters<Partition>,
) {
  return new ServiceArn<Partition>(parameters)
}

export interface TaskArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly idTask: string
}
class TaskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'task',
  `arn:${string}:ecs:${string}:${string}:task/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'task' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly idTask: string
  constructor(parameters: TaskArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
    this.idTask = parameters.idTask
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecs:${this.region}:${this.account}:task/${this.nameCluster}/${this.idTask}` as const
  }
}
export type { TaskArn }
export function taskArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskArnParameters<Partition>,
) {
  return new TaskArn<Partition>(parameters)
}

export interface DefinitionTaskArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFamilyDefinitionTask: string
  readonly numberRevisionDefinitionTask: string
}
class DefinitionTaskArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'task-definition',
  `arn:${string}:ecs:${string}:${string}:task-definition/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'task-definition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameFamilyDefinitionTask: string
  readonly numberRevisionDefinitionTask: string
  constructor(parameters: DefinitionTaskArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameFamilyDefinitionTask = parameters.nameFamilyDefinitionTask
    this.numberRevisionDefinitionTask = parameters.numberRevisionDefinitionTask
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecs:${this.region}:${this.account}:task-definition/${this.nameFamilyDefinitionTask}:${this.numberRevisionDefinitionTask}` as const
  }
}
export type { DefinitionTaskArn }
export function definitionTaskArn<Partition extends ArnPartition = 'aws'>(
  parameters: DefinitionTaskArnParameters<Partition>,
) {
  return new DefinitionTaskArn<Partition>(parameters)
}

export interface ProviderCapacityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProviderCapacity: string
}
class ProviderCapacityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'capacity-provider',
  `arn:${string}:ecs:${string}:${string}:capacity-provider/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'capacity-provider' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProviderCapacity: string
  constructor(parameters: ProviderCapacityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameProviderCapacity = parameters.nameProviderCapacity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecs:${this.region}:${this.account}:capacity-provider/${this.nameProviderCapacity}` as const
  }
}
export type { ProviderCapacityArn }
export function providerCapacityArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProviderCapacityArnParameters<Partition>,
) {
  return new ProviderCapacityArn<Partition>(parameters)
}

export interface SetTaskArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly nameService: string
  readonly idSetTask: string
}
class SetTaskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'task-set',
  `arn:${string}:ecs:${string}:${string}:task-set/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'task-set' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly nameService: string
  readonly idSetTask: string
  constructor(parameters: SetTaskArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
    this.nameService = parameters.nameService
    this.idSetTask = parameters.idSetTask
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecs:${this.region}:${this.account}:task-set/${this.nameCluster}/${this.nameService}/${this.idSetTask}` as const
  }
}
export type { SetTaskArn }
export function setTaskArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetTaskArnParameters<Partition>,
) {
  return new SetTaskArn<Partition>(parameters)
}
