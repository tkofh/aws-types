import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:ecs:${string}:${string}:cluster/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecs:${this.region}:${this.account}:cluster/${this.clusterName}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface ContainerInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly containerInstanceId: string
}
class ContainerInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'container-instance',
  `arn:${string}:ecs:${string}:${string}:container-instance/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'container-instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly containerInstanceId: string
  constructor(parameters: ContainerInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.containerInstanceId = parameters.containerInstanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecs:${this.region}:${this.account}:container-instance/${this.clusterName}/${this.containerInstanceId}` as const
  }
}
export type { ContainerInstanceArn }
export function containerInstanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContainerInstanceArnParameters<Partition>,
) {
  return new ContainerInstanceArn<Partition>(parameters)
}

export interface ServiceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly serviceName: string
}
class ServiceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'service',
  `arn:${string}:ecs:${string}:${string}:service/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'service' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly serviceName: string
  constructor(parameters: ServiceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.serviceName = parameters.serviceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecs:${this.region}:${this.account}:service/${this.clusterName}/${this.serviceName}` as const
  }
}
export type { ServiceArn }
export function serviceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServiceArnParameters<Partition>,
) {
  return new ServiceArn<Partition>(parameters)
}

export interface TaskArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly taskId: string
}
class TaskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'task',
  `arn:${string}:ecs:${string}:${string}:task/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'task' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly taskId: string
  constructor(parameters: TaskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.taskId = parameters.taskId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecs:${this.region}:${this.account}:task/${this.clusterName}/${this.taskId}` as const
  }
}
export type { TaskArn }
export function taskArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskArnParameters<Partition>,
) {
  return new TaskArn<Partition>(parameters)
}

export interface TaskDefinitionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly taskDefinitionFamilyName: string
  readonly taskDefinitionRevisionNumber: string
}
class TaskDefinitionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'task-definition',
  `arn:${string}:ecs:${string}:${string}:task-definition/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'task-definition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly taskDefinitionFamilyName: string
  readonly taskDefinitionRevisionNumber: string
  constructor(parameters: TaskDefinitionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.taskDefinitionFamilyName = parameters.taskDefinitionFamilyName
    this.taskDefinitionRevisionNumber = parameters.taskDefinitionRevisionNumber
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecs:${this.region}:${this.account}:task-definition/${this.taskDefinitionFamilyName}:${this.taskDefinitionRevisionNumber}` as const
  }
}
export type { TaskDefinitionArn }
export function taskDefinitionArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskDefinitionArnParameters<Partition>,
) {
  return new TaskDefinitionArn<Partition>(parameters)
}

export interface CapacityProviderArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly capacityProviderName: string
}
class CapacityProviderArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'capacity-provider',
  `arn:${string}:ecs:${string}:${string}:capacity-provider/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'capacity-provider' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly capacityProviderName: string
  constructor(parameters: CapacityProviderArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.capacityProviderName = parameters.capacityProviderName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecs:${this.region}:${this.account}:capacity-provider/${this.capacityProviderName}` as const
  }
}
export type { CapacityProviderArn }
export function capacityProviderArn<Partition extends ArnPartition = 'aws'>(
  parameters: CapacityProviderArnParameters<Partition>,
) {
  return new CapacityProviderArn<Partition>(parameters)
}

export interface TaskSetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly serviceName: string
  readonly taskSetId: string
}
class TaskSetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'task-set',
  `arn:${string}:ecs:${string}:${string}:task-set/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'task-set' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly serviceName: string
  readonly taskSetId: string
  constructor(parameters: TaskSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.serviceName = parameters.serviceName
    this.taskSetId = parameters.taskSetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecs:${this.region}:${this.account}:task-set/${this.clusterName}/${this.serviceName}/${this.taskSetId}` as const
  }
}
export type { TaskSetArn }
export function taskSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskSetArnParameters<Partition>,
) {
  return new TaskSetArn<Partition>(parameters)
}
