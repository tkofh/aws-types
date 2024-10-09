export interface ClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
}
export type ClusterArn = `arn:${string}:ecs:${string}:${string}:cluster/${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:ecs:${parameters.region}:${parameters.account}:cluster/${parameters.clusterName}`
}

export interface ContainerInstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  containerInstanceId: string
}
export type ContainerInstanceArn = `arn:${string}:ecs:${string}:${string}:container-instance/${string}/${string}`
export function containerInstanceArn(parameters: ContainerInstanceArnParameters): ContainerInstanceArn {
  return `arn:${parameters.partition ?? ''}:ecs:${parameters.region}:${parameters.account}:container-instance/${parameters.clusterName}/${parameters.containerInstanceId}`
}

export interface ServiceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  serviceName: string
}
export type ServiceArn = `arn:${string}:ecs:${string}:${string}:service/${string}/${string}`
export function serviceArn(parameters: ServiceArnParameters): ServiceArn {
  return `arn:${parameters.partition ?? ''}:ecs:${parameters.region}:${parameters.account}:service/${parameters.clusterName}/${parameters.serviceName}`
}

export interface TaskArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  taskId: string
}
export type TaskArn = `arn:${string}:ecs:${string}:${string}:task/${string}/${string}`
export function taskArn(parameters: TaskArnParameters): TaskArn {
  return `arn:${parameters.partition ?? ''}:ecs:${parameters.region}:${parameters.account}:task/${parameters.clusterName}/${parameters.taskId}`
}

export interface TaskDefinitionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  taskDefinitionFamilyName: string
  taskDefinitionRevisionNumber: string
}
export type TaskDefinitionArn = `arn:${string}:ecs:${string}:${string}:task-definition/${string}:${string}`
export function taskDefinitionArn(parameters: TaskDefinitionArnParameters): TaskDefinitionArn {
  return `arn:${parameters.partition ?? ''}:ecs:${parameters.region}:${parameters.account}:task-definition/${parameters.taskDefinitionFamilyName}:${parameters.taskDefinitionRevisionNumber}`
}

export interface CapacityProviderArnParameters {
  partition?: string | undefined
  region: string
  account: string
  capacityProviderName: string
}
export type CapacityProviderArn = `arn:${string}:ecs:${string}:${string}:capacity-provider/${string}`
export function capacityProviderArn(parameters: CapacityProviderArnParameters): CapacityProviderArn {
  return `arn:${parameters.partition ?? ''}:ecs:${parameters.region}:${parameters.account}:capacity-provider/${parameters.capacityProviderName}`
}

export interface TaskSetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  serviceName: string
  taskSetId: string
}
export type TaskSetArn = `arn:${string}:ecs:${string}:${string}:task-set/${string}/${string}/${string}`
export function taskSetArn(parameters: TaskSetArnParameters): TaskSetArn {
  return `arn:${parameters.partition ?? ''}:ecs:${parameters.region}:${parameters.account}:task-set/${parameters.clusterName}/${parameters.serviceName}/${parameters.taskSetId}`
}