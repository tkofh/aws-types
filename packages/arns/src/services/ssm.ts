export interface AssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  associationId: string
}
export type AssociationArn = `arn:${string}:ssm:${string}:${string}:association/${string}`
export function associationArn(parameters: AssociationArnParameters): AssociationArn {
  return `arn:${parameters.partition ?? ''}:ssm:${parameters.region}:${parameters.account}:association/${parameters.associationId}`
}

export interface AutomationExecutionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  automationExecutionId: string
}
export type AutomationExecutionArn = `arn:${string}:ssm:${string}:${string}:automation-execution/${string}`
export function automationExecutionArn(parameters: AutomationExecutionArnParameters): AutomationExecutionArn {
  return `arn:${parameters.partition ?? ''}:ssm:${parameters.region}:${parameters.account}:automation-execution/${parameters.automationExecutionId}`
}

export interface AutomationDefinitionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  automationDefinitionName: string
  versionId: string
}
export type AutomationDefinitionArn = `arn:${string}:ssm:${string}:${string}:automation-definition/${string}:${string}`
export function automationDefinitionArn(parameters: AutomationDefinitionArnParameters): AutomationDefinitionArn {
  return `arn:${parameters.partition ?? ''}:ssm:${parameters.region}:${parameters.account}:automation-definition/${parameters.automationDefinitionName}:${parameters.versionId}`
}

export interface BucketArnParameters {
  partition?: string | undefined
  bucketName: string
}
export type BucketArn = `arn:${string}:s3:::${string}`
export function bucketArn(parameters: BucketArnParameters): BucketArn {
  return `arn:${parameters.partition ?? ''}:s3:::${parameters.bucketName}`
}

export interface DocumentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  documentName: string
}
export type DocumentArn = `arn:${string}:ssm:${string}:${string}:document/${string}`
export function documentArn(parameters: DocumentArnParameters): DocumentArn {
  return `arn:${parameters.partition ?? ''}:ssm:${parameters.region}:${parameters.account}:document/${parameters.documentName}`
}

export interface IamRoleArnParameters {
  partition?: string | undefined
  account: string
  roleName: string
}
export type IamRoleArn = `arn:${string}:iam::${string}:role/${string}`
export function iamRoleArn(parameters: IamRoleArnParameters): IamRoleArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:role/${parameters.roleName}`
}

export interface InstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
}
export type InstanceArn = `arn:${string}:ec2:${string}:${string}:instance/${string}`
export function instanceArn(parameters: InstanceArnParameters): InstanceArn {
  return `arn:${parameters.partition ?? ''}:ec2:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}`
}

export interface MaintenancewindowArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type MaintenancewindowArn = `arn:${string}:ssm:${string}:${string}:maintenancewindow/${string}`
export function maintenancewindowArn(parameters: MaintenancewindowArnParameters): MaintenancewindowArn {
  return `arn:${parameters.partition ?? ''}:ssm:${parameters.region}:${parameters.account}:maintenancewindow/${parameters.resourceId}`
}

export interface ManagedInstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
}
export type ManagedInstanceArn = `arn:${string}:ssm:${string}:${string}:managed-instance/${string}`
export function managedInstanceArn(parameters: ManagedInstanceArnParameters): ManagedInstanceArn {
  return `arn:${parameters.partition ?? ''}:ssm:${parameters.region}:${parameters.account}:managed-instance/${parameters.instanceId}`
}

export interface ManagedInstanceInventoryArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
}
export type ManagedInstanceInventoryArn = `arn:${string}:ssm:${string}:${string}:managed-instance-inventory/${string}`
export function managedInstanceInventoryArn(parameters: ManagedInstanceInventoryArnParameters): ManagedInstanceInventoryArn {
  return `arn:${parameters.partition ?? ''}:ssm:${parameters.region}:${parameters.account}:managed-instance-inventory/${parameters.instanceId}`
}

export interface OpsitemArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type OpsitemArn = `arn:${string}:ssm:${string}:${string}:opsitem/${string}`
export function opsitemArn(parameters: OpsitemArnParameters): OpsitemArn {
  return `arn:${parameters.partition ?? ''}:ssm:${parameters.region}:${parameters.account}:opsitem/${parameters.resourceId}`
}

export interface OpsitemgroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type OpsitemgroupArn = `arn:${string}:ssm:${string}:${string}:opsitemgroup/default`
export function opsitemgroupArn(parameters: OpsitemgroupArnParameters): OpsitemgroupArn {
  return `arn:${parameters.partition ?? ''}:ssm:${parameters.region}:${parameters.account}:opsitemgroup/default`
}

export interface OpsmetadataArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type OpsmetadataArn = `arn:${string}:ssm:${string}:${string}:opsmetadata/${string}`
export function opsmetadataArn(parameters: OpsmetadataArnParameters): OpsmetadataArn {
  return `arn:${parameters.partition ?? ''}:ssm:${parameters.region}:${parameters.account}:opsmetadata/${parameters.resourceId}`
}

export interface ParameterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  parameterNameWithoutLeadingSlash: string
}
export type ParameterArn = `arn:${string}:ssm:${string}:${string}:parameter/${string}`
export function parameterArn(parameters: ParameterArnParameters): ParameterArn {
  return `arn:${parameters.partition ?? ''}:ssm:${parameters.region}:${parameters.account}:parameter/${parameters.parameterNameWithoutLeadingSlash}`
}

export interface PatchbaselineArnParameters {
  partition?: string | undefined
  region: string
  account: string
  patchBaselineIdResourceId: string
}
export type PatchbaselineArn = `arn:${string}:ssm:${string}:${string}:patchbaseline/${string}`
export function patchbaselineArn(parameters: PatchbaselineArnParameters): PatchbaselineArn {
  return `arn:${parameters.partition ?? ''}:ssm:${parameters.region}:${parameters.account}:patchbaseline/${parameters.patchBaselineIdResourceId}`
}

export interface SessionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  sessionId: string
}
export type SessionArn = `arn:${string}:ssm:${string}:${string}:session/${string}`
export function sessionArn(parameters: SessionArnParameters): SessionArn {
  return `arn:${parameters.partition ?? ''}:ssm:${parameters.region}:${parameters.account}:session/${parameters.sessionId}`
}

export interface ResourcedatasyncArnParameters {
  partition?: string | undefined
  region: string
  account: string
  syncName: string
}
export type ResourcedatasyncArn = `arn:${string}:ssm:${string}:${string}:resource-data-sync/${string}`
export function resourcedatasyncArn(parameters: ResourcedatasyncArnParameters): ResourcedatasyncArn {
  return `arn:${parameters.partition ?? ''}:ssm:${parameters.region}:${parameters.account}:resource-data-sync/${parameters.syncName}`
}

export interface ServicesettingArnParameters {
  partition?: string | undefined
  region: string
  account: string
  resourceId: string
}
export type ServicesettingArn = `arn:${string}:ssm:${string}:${string}:servicesetting/${string}`
export function servicesettingArn(parameters: ServicesettingArnParameters): ServicesettingArn {
  return `arn:${parameters.partition ?? ''}:ssm:${parameters.region}:${parameters.account}:servicesetting/${parameters.resourceId}`
}

export interface WindowtargetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  windowTargetId: string
}
export type WindowtargetArn = `arn:${string}:ssm:${string}:${string}:windowtarget/${string}`
export function windowtargetArn(parameters: WindowtargetArnParameters): WindowtargetArn {
  return `arn:${parameters.partition ?? ''}:ssm:${parameters.region}:${parameters.account}:windowtarget/${parameters.windowTargetId}`
}

export interface WindowtaskArnParameters {
  partition?: string | undefined
  region: string
  account: string
  windowTaskId: string
}
export type WindowtaskArn = `arn:${string}:ssm:${string}:${string}:windowtask/${string}`
export function windowtaskArn(parameters: WindowtaskArnParameters): WindowtaskArn {
  return `arn:${parameters.partition ?? ''}:ssm:${parameters.region}:${parameters.account}:windowtask/${parameters.windowTaskId}`
}

export interface TaskArnParameters {
  partition?: string | undefined
  region: string
  account: string
  taskId: string
}
export type TaskArn = `arn:${string}:ecs:${string}:${string}:task/${string}`
export function taskArn(parameters: TaskArnParameters): TaskArn {
  return `arn:${parameters.partition ?? ''}:ecs:${parameters.region}:${parameters.account}:task/${parameters.taskId}`
}