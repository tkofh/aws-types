import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface InstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
}
class InstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'instance',
  `arn:${string}:connect:${string}:${string}:instance/${string}`
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
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}` as const
  }
}
export type { InstanceArn }
export function instanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceArnParameters<Partition>,
) {
  return new InstanceArn<Partition>(parameters)
}

export interface ContactArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idContact: string
}
class ContactArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'contact',
  `arn:${string}:connect:${string}:${string}:instance/${string}/contact/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'contact' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idContact: string
  constructor(parameters: ContactArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idContact = parameters.idContact
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/contact/${this.idContact}` as const
  }
}
export type { ContactArn }
export function contactArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContactArnParameters<Partition>,
) {
  return new ContactArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idUser: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:connect:${string}:${string}:instance/${string}/agent/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idUser: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idUser = parameters.idUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/agent/${this.idUser}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

export interface ProfileRoutingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idProfileRouting: string
}
class ProfileRoutingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'routing-profile',
  `arn:${string}:connect:${string}:${string}:instance/${string}/routing-profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'routing-profile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idProfileRouting: string
  constructor(parameters: ProfileRoutingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idProfileRouting = parameters.idProfileRouting
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/routing-profile/${this.idProfileRouting}` as const
  }
}
export type { ProfileRoutingArn }
export function profileRoutingArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileRoutingArnParameters<Partition>,
) {
  return new ProfileRoutingArn<Partition>(parameters)
}

export interface ProfileSecurityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idProfileSecurity: string
}
class ProfileSecurityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'security-profile',
  `arn:${string}:connect:${string}:${string}:instance/${string}/security-profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'security-profile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idProfileSecurity: string
  constructor(parameters: ProfileSecurityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idProfileSecurity = parameters.idProfileSecurity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/security-profile/${this.idProfileSecurity}` as const
  }
}
export type { ProfileSecurityArn }
export function profileSecurityArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileSecurityArnParameters<Partition>,
) {
  return new ProfileSecurityArn<Partition>(parameters)
}

export interface ProfileAuthenticationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idProfileAuthentication: string
}
class ProfileAuthenticationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'authentication-profile',
  `arn:${string}:connect:${string}:${string}:instance/${string}/authentication-profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'authentication-profile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idProfileAuthentication: string
  constructor(parameters: ProfileAuthenticationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idProfileAuthentication = parameters.idProfileAuthentication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/authentication-profile/${this.idProfileAuthentication}` as const
  }
}
export type { ProfileAuthenticationArn }
export function profileAuthenticationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ProfileAuthenticationArnParameters<Partition>) {
  return new ProfileAuthenticationArn<Partition>(parameters)
}

export interface GroupHierarchyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idGroupHierarchy: string
}
class GroupHierarchyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'hierarchy-group',
  `arn:${string}:connect:${string}:${string}:instance/${string}/agent-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hierarchy-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idGroupHierarchy: string
  constructor(parameters: GroupHierarchyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idGroupHierarchy = parameters.idGroupHierarchy
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/agent-group/${this.idGroupHierarchy}` as const
  }
}
export type { GroupHierarchyArn }
export function groupHierarchyArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupHierarchyArnParameters<Partition>,
) {
  return new GroupHierarchyArn<Partition>(parameters)
}

export interface QueueArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idQueue: string
}
class QueueArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'queue',
  `arn:${string}:connect:${string}:${string}:instance/${string}/queue/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'queue' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idQueue: string
  constructor(parameters: QueueArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idQueue = parameters.idQueue
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/queue/${this.idQueue}` as const
  }
}
export type { QueueArn }
export function queueArn<Partition extends ArnPartition = 'aws'>(
  parameters: QueueArnParameters<Partition>,
) {
  return new QueueArn<Partition>(parameters)
}

export interface QueueWildcardArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
}
class QueueWildcardArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'wildcard-queue',
  `arn:${string}:connect:${string}:${string}:instance/${string}/queue/*`
> {
  readonly [ArnResourceTypeBrand] = 'wildcard-queue' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  constructor(parameters: QueueWildcardArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/queue/*` as const
  }
}
export type { QueueWildcardArn }
export function queueWildcardArn<Partition extends ArnPartition = 'aws'>(
  parameters: QueueWildcardArnParameters<Partition>,
) {
  return new QueueWildcardArn<Partition>(parameters)
}

export interface ConnectQuickArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idConnectQuick: string
}
class ConnectQuickArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'quick-connect',
  `arn:${string}:connect:${string}:${string}:instance/${string}/transfer-destination/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'quick-connect' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idConnectQuick: string
  constructor(parameters: ConnectQuickArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idConnectQuick = parameters.idConnectQuick
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/transfer-destination/${this.idConnectQuick}` as const
  }
}
export type { ConnectQuickArn }
export function connectQuickArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectQuickArnParameters<Partition>,
) {
  return new ConnectQuickArn<Partition>(parameters)
}

export interface ConnectQuickWildcardArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
}
class ConnectQuickWildcardArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'wildcard-quick-connect',
  `arn:${string}:connect:${string}:${string}:instance/${string}/transfer-destination/*`
> {
  readonly [ArnResourceTypeBrand] = 'wildcard-quick-connect' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  constructor(parameters: ConnectQuickWildcardArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/transfer-destination/*` as const
  }
}
export type { ConnectQuickWildcardArn }
export function connectQuickWildcardArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectQuickWildcardArnParameters<Partition>,
) {
  return new ConnectQuickWildcardArn<Partition>(parameters)
}

export interface FlowContactArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idFlowContact: string
}
class FlowContactArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'contact-flow',
  `arn:${string}:connect:${string}:${string}:instance/${string}/contact-flow/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'contact-flow' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idFlowContact: string
  constructor(parameters: FlowContactArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idFlowContact = parameters.idFlowContact
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/contact-flow/${this.idFlowContact}` as const
  }
}
export type { FlowContactArn }
export function flowContactArn<Partition extends ArnPartition = 'aws'>(
  parameters: FlowContactArnParameters<Partition>,
) {
  return new FlowContactArn<Partition>(parameters)
}

export interface TemplateTaskArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idTemplateTask: string
}
class TemplateTaskArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'task-template',
  `arn:${string}:connect:${string}:${string}:instance/${string}/task-template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'task-template' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idTemplateTask: string
  constructor(parameters: TemplateTaskArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idTemplateTask = parameters.idTemplateTask
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/task-template/${this.idTemplateTask}` as const
  }
}
export type { TemplateTaskArn }
export function templateTaskArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateTaskArnParameters<Partition>,
) {
  return new TemplateTaskArn<Partition>(parameters)
}

export interface ModuleFlowContactArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idModuleFlowContact: string
}
class ModuleFlowContactArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'contact-flow-module',
  `arn:${string}:connect:${string}:${string}:instance/${string}/flow-module/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'contact-flow-module' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idModuleFlowContact: string
  constructor(parameters: ModuleFlowContactArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idModuleFlowContact = parameters.idModuleFlowContact
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/flow-module/${this.idModuleFlowContact}` as const
  }
}
export type { ModuleFlowContactArn }
export function moduleFlowContactArn<Partition extends ArnPartition = 'aws'>(
  parameters: ModuleFlowContactArnParameters<Partition>,
) {
  return new ModuleFlowContactArn<Partition>(parameters)
}

export interface FlowContactWildcardArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
}
class FlowContactWildcardArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'wildcard-contact-flow',
  `arn:${string}:connect:${string}:${string}:instance/${string}/contact-flow/*`
> {
  readonly [ArnResourceTypeBrand] = 'wildcard-contact-flow' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  constructor(parameters: FlowContactWildcardArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/contact-flow/*` as const
  }
}
export type { FlowContactWildcardArn }
export function flowContactWildcardArn<Partition extends ArnPartition = 'aws'>(
  parameters: FlowContactWildcardArnParameters<Partition>,
) {
  return new FlowContactWildcardArn<Partition>(parameters)
}

export interface OperationOfHoursArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idOperationOfHours: string
}
class OperationOfHoursArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'hours-of-operation',
  `arn:${string}:connect:${string}:${string}:instance/${string}/operating-hours/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hours-of-operation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idOperationOfHours: string
  constructor(parameters: OperationOfHoursArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idOperationOfHours = parameters.idOperationOfHours
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/operating-hours/${this.idOperationOfHours}` as const
  }
}
export type { OperationOfHoursArn }
export function operationOfHoursArn<Partition extends ArnPartition = 'aws'>(
  parameters: OperationOfHoursArnParameters<Partition>,
) {
  return new OperationOfHoursArn<Partition>(parameters)
}

export interface StatusAgentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idStatusAgent: string
}
class StatusAgentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'agent-status',
  `arn:${string}:connect:${string}:${string}:instance/${string}/agent-state/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'agent-status' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idStatusAgent: string
  constructor(parameters: StatusAgentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idStatusAgent = parameters.idStatusAgent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/agent-state/${this.idStatusAgent}` as const
  }
}
export type { StatusAgentArn }
export function statusAgentArn<Partition extends ArnPartition = 'aws'>(
  parameters: StatusAgentArnParameters<Partition>,
) {
  return new StatusAgentArn<Partition>(parameters)
}

export interface StatusAgentWildcardArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
}
class StatusAgentWildcardArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'wildcard-agent-status',
  `arn:${string}:connect:${string}:${string}:instance/${string}/agent-state/*`
> {
  readonly [ArnResourceTypeBrand] = 'wildcard-agent-status' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  constructor(parameters: StatusAgentWildcardArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/agent-state/*` as const
  }
}
export type { StatusAgentWildcardArn }
export function statusAgentWildcardArn<Partition extends ArnPartition = 'aws'>(
  parameters: StatusAgentWildcardArnParameters<Partition>,
) {
  return new StatusAgentWildcardArn<Partition>(parameters)
}

export interface NumberPhoneLegacyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idNumberPhone: string
}
class NumberPhoneLegacyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'legacy-phone-number',
  `arn:${string}:connect:${string}:${string}:instance/${string}/phone-number/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'legacy-phone-number' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idNumberPhone: string
  constructor(parameters: NumberPhoneLegacyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idNumberPhone = parameters.idNumberPhone
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/phone-number/${this.idNumberPhone}` as const
  }
}
export type { NumberPhoneLegacyArn }
export function numberPhoneLegacyArn<Partition extends ArnPartition = 'aws'>(
  parameters: NumberPhoneLegacyArnParameters<Partition>,
) {
  return new NumberPhoneLegacyArn<Partition>(parameters)
}

export interface NumberPhoneLegacyWildcardArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
}
class NumberPhoneLegacyWildcardArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'wildcard-legacy-phone-number',
  `arn:${string}:connect:${string}:${string}:instance/${string}/phone-number/*`
> {
  readonly [ArnResourceTypeBrand] = 'wildcard-legacy-phone-number' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  constructor(parameters: NumberPhoneLegacyWildcardArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/phone-number/*` as const
  }
}
export type { NumberPhoneLegacyWildcardArn }
export function numberPhoneLegacyWildcardArn<
  Partition extends ArnPartition = 'aws',
>(parameters: NumberPhoneLegacyWildcardArnParameters<Partition>) {
  return new NumberPhoneLegacyWildcardArn<Partition>(parameters)
}

export interface NumberPhoneArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNumberPhone: string
}
class NumberPhoneArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'phone-number',
  `arn:${string}:connect:${string}:${string}:phone-number/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'phone-number' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNumberPhone: string
  constructor(parameters: NumberPhoneArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idNumberPhone = parameters.idNumberPhone
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:phone-number/${this.idNumberPhone}` as const
  }
}
export type { NumberPhoneArn }
export function numberPhoneArn<Partition extends ArnPartition = 'aws'>(
  parameters: NumberPhoneArnParameters<Partition>,
) {
  return new NumberPhoneArn<Partition>(parameters)
}

export interface NumberPhoneWildcardArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class NumberPhoneWildcardArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'wildcard-phone-number',
  `arn:${string}:connect:${string}:${string}:phone-number/*`
> {
  readonly [ArnResourceTypeBrand] = 'wildcard-phone-number' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: NumberPhoneWildcardArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:phone-number/*` as const
  }
}
export type { NumberPhoneWildcardArn }
export function numberPhoneWildcardArn<Partition extends ArnPartition = 'aws'>(
  parameters: NumberPhoneWildcardArnParameters<Partition>,
) {
  return new NumberPhoneWildcardArn<Partition>(parameters)
}

export interface AssociationIntegrationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idAssociationIntegration: string
}
class AssociationIntegrationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'integration-association',
  `arn:${string}:connect:${string}:${string}:instance/${string}/integration-association/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'integration-association' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idAssociationIntegration: string
  constructor(parameters: AssociationIntegrationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idAssociationIntegration = parameters.idAssociationIntegration
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/integration-association/${this.idAssociationIntegration}` as const
  }
}
export type { AssociationIntegrationArn }
export function associationIntegrationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AssociationIntegrationArnParameters<Partition>) {
  return new AssociationIntegrationArn<Partition>(parameters)
}

export interface CaseUseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idCaseUse: string
}
class CaseUseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'use-case',
  `arn:${string}:connect:${string}:${string}:instance/${string}/use-case/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'use-case' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idCaseUse: string
  constructor(parameters: CaseUseArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idCaseUse = parameters.idCaseUse
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/use-case/${this.idCaseUse}` as const
  }
}
export type { CaseUseArn }
export function caseUseArn<Partition extends ArnPartition = 'aws'>(
  parameters: CaseUseArnParameters<Partition>,
) {
  return new CaseUseArn<Partition>(parameters)
}

export interface VocabularyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idVocabulary: string
}
class VocabularyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'vocabulary',
  `arn:${string}:connect:${string}:${string}:instance/${string}/vocabulary/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vocabulary' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idVocabulary: string
  constructor(parameters: VocabularyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idVocabulary = parameters.idVocabulary
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/vocabulary/${this.idVocabulary}` as const
  }
}
export type { VocabularyArn }
export function vocabularyArn<Partition extends ArnPartition = 'aws'>(
  parameters: VocabularyArnParameters<Partition>,
) {
  return new VocabularyArn<Partition>(parameters)
}

export interface GroupDistributionTrafficArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupDistributionTraffic: string
}
class GroupDistributionTrafficArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'traffic-distribution-group',
  `arn:${string}:connect:${string}:${string}:traffic-distribution-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'traffic-distribution-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupDistributionTraffic: string
  constructor(parameters: GroupDistributionTrafficArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroupDistributionTraffic = parameters.idGroupDistributionTraffic
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:traffic-distribution-group/${this.idGroupDistributionTraffic}` as const
  }
}
export type { GroupDistributionTrafficArn }
export function groupDistributionTrafficArn<
  Partition extends ArnPartition = 'aws',
>(parameters: GroupDistributionTrafficArnParameters<Partition>) {
  return new GroupDistributionTrafficArn<Partition>(parameters)
}

export interface RuleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idRule: string
}
class RuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'rule',
  `arn:${string}:connect:${string}:${string}:instance/${string}/rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idRule: string
  constructor(parameters: RuleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idRule = parameters.idRule
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/rule/${this.idRule}` as const
  }
}
export type { RuleArn }
export function ruleArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleArnParameters<Partition>,
) {
  return new RuleArn<Partition>(parameters)
}

export interface FormEvaluationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idForm: string
}
class FormEvaluationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'evaluation-form',
  `arn:${string}:connect:${string}:${string}:instance/${string}/evaluation-form/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'evaluation-form' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idForm: string
  constructor(parameters: FormEvaluationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idForm = parameters.idForm
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/evaluation-form/${this.idForm}` as const
  }
}
export type { FormEvaluationArn }
export function formEvaluationArn<Partition extends ArnPartition = 'aws'>(
  parameters: FormEvaluationArnParameters<Partition>,
) {
  return new FormEvaluationArn<Partition>(parameters)
}

export interface EvaluationContactArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idEvaluation: string
}
class EvaluationContactArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'contact-evaluation',
  `arn:${string}:connect:${string}:${string}:instance/${string}/contact-evaluation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'contact-evaluation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idEvaluation: string
  constructor(parameters: EvaluationContactArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idEvaluation = parameters.idEvaluation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/contact-evaluation/${this.idEvaluation}` as const
  }
}
export type { EvaluationContactArn }
export function evaluationContactArn<Partition extends ArnPartition = 'aws'>(
  parameters: EvaluationContactArnParameters<Partition>,
) {
  return new EvaluationContactArn<Partition>(parameters)
}

export interface PromptArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idPrompt: string
}
class PromptArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'prompt',
  `arn:${string}:connect:${string}:${string}:instance/${string}/prompt/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'prompt' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idPrompt: string
  constructor(parameters: PromptArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idPrompt = parameters.idPrompt
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/prompt/${this.idPrompt}` as const
  }
}
export type { PromptArn }
export function promptArn<Partition extends ArnPartition = 'aws'>(
  parameters: PromptArnParameters<Partition>,
) {
  return new PromptArn<Partition>(parameters)
}

export interface ViewManagedCustomerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idView: string
}
class ViewManagedCustomerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'customer-managed-view',
  `arn:${string}:connect:${string}:${string}:instance/${string}/view/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'customer-managed-view' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idView: string
  constructor(parameters: ViewManagedCustomerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idView = parameters.idView
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/view/${this.idView}` as const
  }
}
export type { ViewManagedCustomerArn }
export function viewManagedCustomerArn<Partition extends ArnPartition = 'aws'>(
  parameters: ViewManagedCustomerArnParameters<Partition>,
) {
  return new ViewManagedCustomerArn<Partition>(parameters)
}

export interface ViewManagedAwsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idView: string
}
class ViewManagedAwsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'aws-managed-view',
  `arn:${string}:connect:${string}:aws:view/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'aws-managed-view' as const
  readonly partition: string
  readonly region: string
  readonly idView: string
  constructor(parameters: ViewManagedAwsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idView = parameters.idView
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:aws:view/${this.idView}` as const
  }
}
export type { ViewManagedAwsArn }
export function viewManagedAwsArn<Partition extends ArnPartition = 'aws'>(
  parameters: ViewManagedAwsArnParameters<Partition>,
) {
  return new ViewManagedAwsArn<Partition>(parameters)
}

export interface ViewManagedCustomerQualifiedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idView: string
  readonly qualifierView: string
}
class ViewManagedCustomerQualifiedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'qualified-customer-managed-view',
  `arn:${string}:connect:${string}:${string}:instance/${string}/view/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'qualified-customer-managed-view' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idView: string
  readonly qualifierView: string
  constructor(
    parameters: ViewManagedCustomerQualifiedArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idView = parameters.idView
    this.qualifierView = parameters.qualifierView
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/view/${this.idView}:${this.qualifierView}` as const
  }
}
export type { ViewManagedCustomerQualifiedArn }
export function viewManagedCustomerQualifiedArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ViewManagedCustomerQualifiedArnParameters<Partition>) {
  return new ViewManagedCustomerQualifiedArn<Partition>(parameters)
}

export interface ViewManagedAwsQualifiedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly idView: string
  readonly qualifierView: string
}
class ViewManagedAwsQualifiedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'qualified-aws-managed-view',
  `arn:${string}:connect:${string}:aws:view/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'qualified-aws-managed-view' as const
  readonly partition: string
  readonly region: string
  readonly idView: string
  readonly qualifierView: string
  constructor(parameters: ViewManagedAwsQualifiedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idView = parameters.idView
    this.qualifierView = parameters.qualifierView
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:aws:view/${this.idView}:${this.qualifierView}` as const
  }
}
export type { ViewManagedAwsQualifiedArn }
export function viewManagedAwsQualifiedArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ViewManagedAwsQualifiedArnParameters<Partition>) {
  return new ViewManagedAwsQualifiedArn<Partition>(parameters)
}

export interface VersionViewManagedCustomerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idView: string
  readonly versionView: string
}
class VersionViewManagedCustomerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'customer-managed-view-version',
  `arn:${string}:connect:${string}:${string}:instance/${string}/view/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'customer-managed-view-version' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idView: string
  readonly versionView: string
  constructor(parameters: VersionViewManagedCustomerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idView = parameters.idView
    this.versionView = parameters.versionView
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/view/${this.idView}:${this.versionView}` as const
  }
}
export type { VersionViewManagedCustomerArn }
export function versionViewManagedCustomerArn<
  Partition extends ArnPartition = 'aws',
>(parameters: VersionViewManagedCustomerArnParameters<Partition>) {
  return new VersionViewManagedCustomerArn<Partition>(parameters)
}

export interface FileAttachedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idFile: string
}
class FileAttachedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'attached-file',
  `arn:${string}:connect:${string}:${string}:instance/${string}/file/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'attached-file' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstance: string
  readonly idFile: string
  constructor(parameters: FileAttachedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstance = parameters.idInstance
    this.idFile = parameters.idFile
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.idInstance}/file/${this.idFile}` as const
  }
}
export type { FileAttachedArn }
export function fileAttachedArn<Partition extends ArnPartition = 'aws'>(
  parameters: FileAttachedArnParameters<Partition>,
) {
  return new FileAttachedArn<Partition>(parameters)
}
