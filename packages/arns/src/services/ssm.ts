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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssociation: string
}
class AssociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'association',
  `arn:${string}:ssm:${string}:${string}:association/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'association' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAssociation: string
  constructor(parameters: AssociationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAssociation = parameters.idAssociation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:association/${this.idAssociation}` as const
  }
}
export type { AssociationArn }
export function associationArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssociationArnParameters<Partition>,
) {
  return new AssociationArn<Partition>(parameters)
}

export interface ExecutionAutomationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idExecutionAutomation: string
}
class ExecutionAutomationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'automation-execution',
  `arn:${string}:ssm:${string}:${string}:automation-execution/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'automation-execution' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idExecutionAutomation: string
  constructor(parameters: ExecutionAutomationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idExecutionAutomation = parameters.idExecutionAutomation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:automation-execution/${this.idExecutionAutomation}` as const
  }
}
export type { ExecutionAutomationArn }
export function executionAutomationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExecutionAutomationArnParameters<Partition>,
) {
  return new ExecutionAutomationArn<Partition>(parameters)
}

export interface DefinitionAutomationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDefinitionAutomation: string
  readonly idVersion: string
}
class DefinitionAutomationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'automation-definition',
  `arn:${string}:ssm:${string}:${string}:automation-definition/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'automation-definition' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDefinitionAutomation: string
  readonly idVersion: string
  constructor(parameters: DefinitionAutomationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDefinitionAutomation = parameters.nameDefinitionAutomation
    this.idVersion = parameters.idVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:automation-definition/${this.nameDefinitionAutomation}:${this.idVersion}` as const
  }
}
export type { DefinitionAutomationArn }
export function definitionAutomationArn<Partition extends ArnPartition = 'aws'>(
  parameters: DefinitionAutomationArnParameters<Partition>,
) {
  return new DefinitionAutomationArn<Partition>(parameters)
}

export interface BucketArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly nameBucket: string
}
class BucketArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'bucket',
  `arn:${string}:s3:::${string}`
> {
  readonly [ArnResourceTypeBrand] = 'bucket' as const
  readonly partition: string
  readonly nameBucket: string
  constructor(parameters: BucketArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.nameBucket = parameters.nameBucket
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:s3:::${this.nameBucket}` as const
  }
}
export type { BucketArn }
export function bucketArn<Partition extends ArnPartition = 'aws'>(
  parameters: BucketArnParameters<Partition>,
) {
  return new BucketArn<Partition>(parameters)
}

export interface DocumentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDocument: string
}
class DocumentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'document',
  `arn:${string}:ssm:${string}:${string}:document/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'document' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDocument: string
  constructor(parameters: DocumentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDocument = parameters.nameDocument
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:document/${this.nameDocument}` as const
  }
}
export type { DocumentArn }
export function documentArn<Partition extends ArnPartition = 'aws'>(
  parameters: DocumentArnParameters<Partition>,
) {
  return new DocumentArn<Partition>(parameters)
}

export interface RoleIamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly nameRole: string
}
class RoleIamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'iam-role',
  `arn:${string}:iam::${string}:role/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'iam-role' as const
  readonly partition: string
  readonly account: string
  readonly nameRole: string
  constructor(parameters: RoleIamArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.nameRole = parameters.nameRole
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:role/${this.nameRole}` as const
  }
}
export type { RoleIamArn }
export function roleIamArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoleIamArnParameters<Partition>,
) {
  return new RoleIamArn<Partition>(parameters)
}

export interface InstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
}
class InstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'instance',
  `arn:${string}:ec2:${string}:${string}:instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  constructor(parameters: InstanceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ec2:${this.region}:${this.account}:instance/${this.idInstance}` as const
  }
}
export type { InstanceArn }
export function instanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceArnParameters<Partition>,
) {
  return new InstanceArn<Partition>(parameters)
}

export interface WindowMaintenanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class WindowMaintenanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'maintenancewindow',
  `arn:${string}:ssm:${string}:${string}:maintenancewindow/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'maintenancewindow' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: WindowMaintenanceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:maintenancewindow/${this.idResource}` as const
  }
}
export type { WindowMaintenanceArn }
export function windowMaintenanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: WindowMaintenanceArnParameters<Partition>,
) {
  return new WindowMaintenanceArn<Partition>(parameters)
}

export interface InstanceManagedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
}
class InstanceManagedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'managed-instance',
  `arn:${string}:ssm:${string}:${string}:managed-instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'managed-instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  constructor(parameters: InstanceManagedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:managed-instance/${this.idInstance}` as const
  }
}
export type { InstanceManagedArn }
export function instanceManagedArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceManagedArnParameters<Partition>,
) {
  return new InstanceManagedArn<Partition>(parameters)
}

export interface InventoryInstanceManagedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
}
class InventoryInstanceManagedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'managed-instance-inventory',
  `arn:${string}:ssm:${string}:${string}:managed-instance-inventory/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'managed-instance-inventory' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  constructor(parameters: InventoryInstanceManagedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:managed-instance-inventory/${this.idInstance}` as const
  }
}
export type { InventoryInstanceManagedArn }
export function inventoryInstanceManagedArn<
  Partition extends ArnPartition = 'aws',
>(parameters: InventoryInstanceManagedArnParameters<Partition>) {
  return new InventoryInstanceManagedArn<Partition>(parameters)
}

export interface ItemOpsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ItemOpsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'opsitem',
  `arn:${string}:ssm:${string}:${string}:opsitem/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'opsitem' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ItemOpsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:opsitem/${this.idResource}` as const
  }
}
export type { ItemOpsArn }
export function itemOpsArn<Partition extends ArnPartition = 'aws'>(
  parameters: ItemOpsArnParameters<Partition>,
) {
  return new ItemOpsArn<Partition>(parameters)
}

export interface GroupItemOpsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class GroupItemOpsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'opsitemgroup',
  `arn:${string}:ssm:${string}:${string}:opsitemgroup/default`
> {
  readonly [ArnResourceTypeBrand] = 'opsitemgroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: GroupItemOpsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:opsitemgroup/default` as const
  }
}
export type { GroupItemOpsArn }
export function groupItemOpsArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupItemOpsArnParameters<Partition>,
) {
  return new GroupItemOpsArn<Partition>(parameters)
}

export interface MetadataOpsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class MetadataOpsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'opsmetadata',
  `arn:${string}:ssm:${string}:${string}:opsmetadata/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'opsmetadata' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: MetadataOpsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:opsmetadata/${this.idResource}` as const
  }
}
export type { MetadataOpsArn }
export function metadataOpsArn<Partition extends ArnPartition = 'aws'>(
  parameters: MetadataOpsArnParameters<Partition>,
) {
  return new MetadataOpsArn<Partition>(parameters)
}

export interface ParameterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly slashLeadingWithoutNameParameter: string
}
class ParameterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'parameter',
  `arn:${string}:ssm:${string}:${string}:parameter/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'parameter' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly slashLeadingWithoutNameParameter: string
  constructor(parameters: ParameterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.slashLeadingWithoutNameParameter =
      parameters.slashLeadingWithoutNameParameter
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:parameter/${this.slashLeadingWithoutNameParameter}` as const
  }
}
export type { ParameterArn }
export function parameterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ParameterArnParameters<Partition>,
) {
  return new ParameterArn<Partition>(parameters)
}

export interface BaselinePatchArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResourceIdBaselinePatch: string
}
class BaselinePatchArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'patchbaseline',
  `arn:${string}:ssm:${string}:${string}:patchbaseline/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'patchbaseline' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResourceIdBaselinePatch: string
  constructor(parameters: BaselinePatchArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResourceIdBaselinePatch = parameters.idResourceIdBaselinePatch
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:patchbaseline/${this.idResourceIdBaselinePatch}` as const
  }
}
export type { BaselinePatchArn }
export function baselinePatchArn<Partition extends ArnPartition = 'aws'>(
  parameters: BaselinePatchArnParameters<Partition>,
) {
  return new BaselinePatchArn<Partition>(parameters)
}

export interface SessionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSession: string
}
class SessionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'session',
  `arn:${string}:ssm:${string}:${string}:session/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'session' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSession: string
  constructor(parameters: SessionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSession = parameters.idSession
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:session/${this.idSession}` as const
  }
}
export type { SessionArn }
export function sessionArn<Partition extends ArnPartition = 'aws'>(
  parameters: SessionArnParameters<Partition>,
) {
  return new SessionArn<Partition>(parameters)
}

export interface DatasyncResourceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSync: string
}
class DatasyncResourceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'resourcedatasync',
  `arn:${string}:ssm:${string}:${string}:resource-data-sync/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'resourcedatasync' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSync: string
  constructor(parameters: DatasyncResourceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSync = parameters.nameSync
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:resource-data-sync/${this.nameSync}` as const
  }
}
export type { DatasyncResourceArn }
export function datasyncResourceArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatasyncResourceArnParameters<Partition>,
) {
  return new DatasyncResourceArn<Partition>(parameters)
}

export interface SettingServiceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class SettingServiceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'servicesetting',
  `arn:${string}:ssm:${string}:${string}:servicesetting/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'servicesetting' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: SettingServiceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:servicesetting/${this.idResource}` as const
  }
}
export type { SettingServiceArn }
export function settingServiceArn<Partition extends ArnPartition = 'aws'>(
  parameters: SettingServiceArnParameters<Partition>,
) {
  return new SettingServiceArn<Partition>(parameters)
}

export interface TargetWindowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTargetWindow: string
}
class TargetWindowArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'windowtarget',
  `arn:${string}:ssm:${string}:${string}:windowtarget/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'windowtarget' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTargetWindow: string
  constructor(parameters: TargetWindowArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTargetWindow = parameters.idTargetWindow
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:windowtarget/${this.idTargetWindow}` as const
  }
}
export type { TargetWindowArn }
export function targetWindowArn<Partition extends ArnPartition = 'aws'>(
  parameters: TargetWindowArnParameters<Partition>,
) {
  return new TargetWindowArn<Partition>(parameters)
}

export interface TaskWindowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTaskWindow: string
}
class TaskWindowArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'windowtask',
  `arn:${string}:ssm:${string}:${string}:windowtask/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'windowtask' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTaskWindow: string
  constructor(parameters: TaskWindowArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTaskWindow = parameters.idTaskWindow
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm:${this.region}:${this.account}:windowtask/${this.idTaskWindow}` as const
  }
}
export type { TaskWindowArn }
export function taskWindowArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskWindowArnParameters<Partition>,
) {
  return new TaskWindowArn<Partition>(parameters)
}

export interface TaskArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTask: string
}
class TaskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'task',
  `arn:${string}:ecs:${string}:${string}:task/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'task' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTask: string
  constructor(parameters: TaskArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTask = parameters.idTask
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecs:${this.region}:${this.account}:task/${this.idTask}` as const
  }
}
export type { TaskArn }
export function taskArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskArnParameters<Partition>,
) {
  return new TaskArn<Partition>(parameters)
}
