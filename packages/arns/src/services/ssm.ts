import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AssociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly associationId: string
}
class AssociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'association',
  `arn:${string}:ssm:${string}:${string}:association/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'association' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly associationId: string
  constructor(parameters: AssociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.associationId = parameters.associationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:association/${this.associationId}` as const
  }
}
export type { AssociationArn }
export function associationArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssociationArnParameters<Partition>,
) {
  return new AssociationArn<Partition>(parameters)
}

export interface AutomationExecutionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly automationExecutionId: string
}
class AutomationExecutionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'automation-execution',
  `arn:${string}:ssm:${string}:${string}:automation-execution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'automation-execution' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly automationExecutionId: string
  constructor(parameters: AutomationExecutionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.automationExecutionId = parameters.automationExecutionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:automation-execution/${this.automationExecutionId}` as const
  }
}
export type { AutomationExecutionArn }
export function automationExecutionArn<Partition extends ArnPartition = 'aws'>(
  parameters: AutomationExecutionArnParameters<Partition>,
) {
  return new AutomationExecutionArn<Partition>(parameters)
}

export interface AutomationDefinitionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly automationDefinitionName: string
  readonly versionId: string
}
class AutomationDefinitionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'automation-definition',
  `arn:${string}:ssm:${string}:${string}:automation-definition/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'automation-definition' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly automationDefinitionName: string
  readonly versionId: string
  constructor(parameters: AutomationDefinitionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.automationDefinitionName = parameters.automationDefinitionName
    this.versionId = parameters.versionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:automation-definition/${this.automationDefinitionName}:${this.versionId}` as const
  }
}
export type { AutomationDefinitionArn }
export function automationDefinitionArn<Partition extends ArnPartition = 'aws'>(
  parameters: AutomationDefinitionArnParameters<Partition>,
) {
  return new AutomationDefinitionArn<Partition>(parameters)
}

export interface BucketArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly bucketName: string
}
class BucketArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'bucket',
  `arn:${string}:s3:::${string}`
> {
  readonly [ArnResourceTypeBrand] = 'bucket' as const
  readonly partition: Partition
  readonly bucketName: string
  constructor(parameters: BucketArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.bucketName = parameters.bucketName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:::${this.bucketName}` as const
  }
}
export type { BucketArn }
export function bucketArn<Partition extends ArnPartition = 'aws'>(
  parameters: BucketArnParameters<Partition>,
) {
  return new BucketArn<Partition>(parameters)
}

export interface DocumentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly documentName: string
}
class DocumentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'document',
  `arn:${string}:ssm:${string}:${string}:document/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'document' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly documentName: string
  constructor(parameters: DocumentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.documentName = parameters.documentName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:document/${this.documentName}` as const
  }
}
export type { DocumentArn }
export function documentArn<Partition extends ArnPartition = 'aws'>(
  parameters: DocumentArnParameters<Partition>,
) {
  return new DocumentArn<Partition>(parameters)
}

export interface IamRoleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly roleName: string
}
class IamRoleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'iam-role',
  `arn:${string}:iam::${string}:role/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'iam-role' as const
  readonly partition: Partition
  readonly account: string
  readonly roleName: string
  constructor(parameters: IamRoleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.roleName = parameters.roleName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:role/${this.roleName}` as const
  }
}
export type { IamRoleArn }
export function iamRoleArn<Partition extends ArnPartition = 'aws'>(
  parameters: IamRoleArnParameters<Partition>,
) {
  return new IamRoleArn<Partition>(parameters)
}

export interface InstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
}
class InstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'instance',
  `arn:${string}:ec2:${string}:${string}:instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  constructor(parameters: InstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:instance/${this.instanceId}` as const
  }
}
export type { InstanceArn }
export function instanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceArnParameters<Partition>,
) {
  return new InstanceArn<Partition>(parameters)
}

export interface MaintenanceWindowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class MaintenanceWindowArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'maintenancewindow',
  `arn:${string}:ssm:${string}:${string}:maintenancewindow/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'maintenancewindow' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: MaintenanceWindowArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:maintenancewindow/${this.resourceId}` as const
  }
}
export type { MaintenanceWindowArn }
export function maintenanceWindowArn<Partition extends ArnPartition = 'aws'>(
  parameters: MaintenanceWindowArnParameters<Partition>,
) {
  return new MaintenanceWindowArn<Partition>(parameters)
}

export interface ManagedInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
}
class ManagedInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'managed-instance',
  `arn:${string}:ssm:${string}:${string}:managed-instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'managed-instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  constructor(parameters: ManagedInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:managed-instance/${this.instanceId}` as const
  }
}
export type { ManagedInstanceArn }
export function managedInstanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ManagedInstanceArnParameters<Partition>,
) {
  return new ManagedInstanceArn<Partition>(parameters)
}

export interface ManagedInstanceInventoryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
}
class ManagedInstanceInventoryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'managed-instance-inventory',
  `arn:${string}:ssm:${string}:${string}:managed-instance-inventory/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'managed-instance-inventory' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  constructor(parameters: ManagedInstanceInventoryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:managed-instance-inventory/${this.instanceId}` as const
  }
}
export type { ManagedInstanceInventoryArn }
export function managedInstanceInventoryArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ManagedInstanceInventoryArnParameters<Partition>) {
  return new ManagedInstanceInventoryArn<Partition>(parameters)
}

export interface OpsItemArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class OpsItemArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'opsitem',
  `arn:${string}:ssm:${string}:${string}:opsitem/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'opsitem' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: OpsItemArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:opsitem/${this.resourceId}` as const
  }
}
export type { OpsItemArn }
export function opsItemArn<Partition extends ArnPartition = 'aws'>(
  parameters: OpsItemArnParameters<Partition>,
) {
  return new OpsItemArn<Partition>(parameters)
}

export interface OpsItemGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class OpsItemGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'opsitemgroup',
  `arn:${string}:ssm:${string}:${string}:opsitemgroup/default`
> {
  readonly [ArnResourceTypeBrand] = 'opsitemgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: OpsItemGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:opsitemgroup/default` as const
  }
}
export type { OpsItemGroupArn }
export function opsItemGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: OpsItemGroupArnParameters<Partition>,
) {
  return new OpsItemGroupArn<Partition>(parameters)
}

export interface OpsMetadataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class OpsMetadataArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'opsmetadata',
  `arn:${string}:ssm:${string}:${string}:opsmetadata/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'opsmetadata' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: OpsMetadataArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:opsmetadata/${this.resourceId}` as const
  }
}
export type { OpsMetadataArn }
export function opsMetadataArn<Partition extends ArnPartition = 'aws'>(
  parameters: OpsMetadataArnParameters<Partition>,
) {
  return new OpsMetadataArn<Partition>(parameters)
}

export interface ParameterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly parameterNameWithoutLeadingSlash: string
}
class ParameterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'parameter',
  `arn:${string}:ssm:${string}:${string}:parameter/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'parameter' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly parameterNameWithoutLeadingSlash: string
  constructor(parameters: ParameterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.parameterNameWithoutLeadingSlash =
      parameters.parameterNameWithoutLeadingSlash
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:parameter/${this.parameterNameWithoutLeadingSlash}` as const
  }
}
export type { ParameterArn }
export function parameterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ParameterArnParameters<Partition>,
) {
  return new ParameterArn<Partition>(parameters)
}

export interface PatchBaselineArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly patchBaselineIdResourceId: string
}
class PatchBaselineArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'patchbaseline',
  `arn:${string}:ssm:${string}:${string}:patchbaseline/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'patchbaseline' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly patchBaselineIdResourceId: string
  constructor(parameters: PatchBaselineArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.patchBaselineIdResourceId = parameters.patchBaselineIdResourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:patchbaseline/${this.patchBaselineIdResourceId}` as const
  }
}
export type { PatchBaselineArn }
export function patchBaselineArn<Partition extends ArnPartition = 'aws'>(
  parameters: PatchBaselineArnParameters<Partition>,
) {
  return new PatchBaselineArn<Partition>(parameters)
}

export interface SessionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sessionId: string
}
class SessionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'session',
  `arn:${string}:ssm:${string}:${string}:session/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'session' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly sessionId: string
  constructor(parameters: SessionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.sessionId = parameters.sessionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:session/${this.sessionId}` as const
  }
}
export type { SessionArn }
export function sessionArn<Partition extends ArnPartition = 'aws'>(
  parameters: SessionArnParameters<Partition>,
) {
  return new SessionArn<Partition>(parameters)
}

export interface ResourceDatasyncArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly syncName: string
}
class ResourceDatasyncArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resourcedatasync',
  `arn:${string}:ssm:${string}:${string}:resource-data-sync/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resourcedatasync' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly syncName: string
  constructor(parameters: ResourceDatasyncArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.syncName = parameters.syncName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:resource-data-sync/${this.syncName}` as const
  }
}
export type { ResourceDatasyncArn }
export function resourceDatasyncArn<Partition extends ArnPartition = 'aws'>(
  parameters: ResourceDatasyncArnParameters<Partition>,
) {
  return new ResourceDatasyncArn<Partition>(parameters)
}

export interface ServiceSettingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ServiceSettingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'servicesetting',
  `arn:${string}:ssm:${string}:${string}:servicesetting/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'servicesetting' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ServiceSettingArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:servicesetting/${this.resourceId}` as const
  }
}
export type { ServiceSettingArn }
export function serviceSettingArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServiceSettingArnParameters<Partition>,
) {
  return new ServiceSettingArn<Partition>(parameters)
}

export interface WindowTargetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly windowTargetId: string
}
class WindowTargetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'windowtarget',
  `arn:${string}:ssm:${string}:${string}:windowtarget/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'windowtarget' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly windowTargetId: string
  constructor(parameters: WindowTargetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.windowTargetId = parameters.windowTargetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:windowtarget/${this.windowTargetId}` as const
  }
}
export type { WindowTargetArn }
export function windowTargetArn<Partition extends ArnPartition = 'aws'>(
  parameters: WindowTargetArnParameters<Partition>,
) {
  return new WindowTargetArn<Partition>(parameters)
}

export interface WindowTaskArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly windowTaskId: string
}
class WindowTaskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'windowtask',
  `arn:${string}:ssm:${string}:${string}:windowtask/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'windowtask' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly windowTaskId: string
  constructor(parameters: WindowTaskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.windowTaskId = parameters.windowTaskId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:windowtask/${this.windowTaskId}` as const
  }
}
export type { WindowTaskArn }
export function windowTaskArn<Partition extends ArnPartition = 'aws'>(
  parameters: WindowTaskArnParameters<Partition>,
) {
  return new WindowTaskArn<Partition>(parameters)
}

export interface TaskArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly taskId: string
}
class TaskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'task',
  `arn:${string}:ecs:${string}:${string}:task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'task' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly taskId: string
  constructor(parameters: TaskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.taskId = parameters.taskId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecs:${this.region}:${this.account}:task/${this.taskId}` as const
  }
}
export type { TaskArn }
export function taskArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskArnParameters<Partition>,
) {
  return new TaskArn<Partition>(parameters)
}
