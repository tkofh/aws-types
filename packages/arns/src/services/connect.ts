import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface InstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
}
class InstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'instance',
  `arn:${string}:connect:${string}:${string}:instance/${string}`
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
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}` as const
  }
}
export type { InstanceArn }
export function instanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceArnParameters<Partition>,
) {
  return new InstanceArn<Partition>(parameters)
}

export interface ContactArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly contactId: string
}
class ContactArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'contact',
  `arn:${string}:connect:${string}:${string}:instance/${string}/contact/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'contact' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly contactId: string
  constructor(parameters: ContactArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.contactId = parameters.contactId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/contact/${this.contactId}` as const
  }
}
export type { ContactArn }
export function contactArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContactArnParameters<Partition>,
) {
  return new ContactArn<Partition>(parameters)
}

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly userId: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:connect:${string}:${string}:instance/${string}/agent/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly userId: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.userId = parameters.userId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/agent/${this.userId}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

export interface RoutingProfileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly routingProfileId: string
}
class RoutingProfileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'routing-profile',
  `arn:${string}:connect:${string}:${string}:instance/${string}/routing-profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'routing-profile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly routingProfileId: string
  constructor(parameters: RoutingProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.routingProfileId = parameters.routingProfileId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/routing-profile/${this.routingProfileId}` as const
  }
}
export type { RoutingProfileArn }
export function routingProfileArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoutingProfileArnParameters<Partition>,
) {
  return new RoutingProfileArn<Partition>(parameters)
}

export interface SecurityProfileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly securityProfileId: string
}
class SecurityProfileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'security-profile',
  `arn:${string}:connect:${string}:${string}:instance/${string}/security-profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'security-profile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly securityProfileId: string
  constructor(parameters: SecurityProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.securityProfileId = parameters.securityProfileId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/security-profile/${this.securityProfileId}` as const
  }
}
export type { SecurityProfileArn }
export function securityProfileArn<Partition extends ArnPartition = 'aws'>(
  parameters: SecurityProfileArnParameters<Partition>,
) {
  return new SecurityProfileArn<Partition>(parameters)
}

export interface AuthenticationProfileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly authenticationProfileId: string
}
class AuthenticationProfileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'authentication-profile',
  `arn:${string}:connect:${string}:${string}:instance/${string}/authentication-profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'authentication-profile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly authenticationProfileId: string
  constructor(parameters: AuthenticationProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.authenticationProfileId = parameters.authenticationProfileId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/authentication-profile/${this.authenticationProfileId}` as const
  }
}
export type { AuthenticationProfileArn }
export function authenticationProfileArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AuthenticationProfileArnParameters<Partition>) {
  return new AuthenticationProfileArn<Partition>(parameters)
}

export interface HierarchyGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly hierarchyGroupId: string
}
class HierarchyGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'hierarchy-group',
  `arn:${string}:connect:${string}:${string}:instance/${string}/agent-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hierarchy-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly hierarchyGroupId: string
  constructor(parameters: HierarchyGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.hierarchyGroupId = parameters.hierarchyGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/agent-group/${this.hierarchyGroupId}` as const
  }
}
export type { HierarchyGroupArn }
export function hierarchyGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: HierarchyGroupArnParameters<Partition>,
) {
  return new HierarchyGroupArn<Partition>(parameters)
}

export interface QueueArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly queueId: string
}
class QueueArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'queue',
  `arn:${string}:connect:${string}:${string}:instance/${string}/queue/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'queue' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly queueId: string
  constructor(parameters: QueueArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.queueId = parameters.queueId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/queue/${this.queueId}` as const
  }
}
export type { QueueArn }
export function queueArn<Partition extends ArnPartition = 'aws'>(
  parameters: QueueArnParameters<Partition>,
) {
  return new QueueArn<Partition>(parameters)
}

export interface WildcardQueueArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
}
class WildcardQueueArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'wildcard-queue',
  `arn:${string}:connect:${string}:${string}:instance/${string}/queue/*`
> {
  readonly [ArnResourceTypeBrand] = 'wildcard-queue' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  constructor(parameters: WildcardQueueArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/queue/*` as const
  }
}
export type { WildcardQueueArn }
export function wildcardQueueArn<Partition extends ArnPartition = 'aws'>(
  parameters: WildcardQueueArnParameters<Partition>,
) {
  return new WildcardQueueArn<Partition>(parameters)
}

export interface QuickConnectArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly quickConnectId: string
}
class QuickConnectArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'quick-connect',
  `arn:${string}:connect:${string}:${string}:instance/${string}/transfer-destination/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'quick-connect' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly quickConnectId: string
  constructor(parameters: QuickConnectArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.quickConnectId = parameters.quickConnectId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/transfer-destination/${this.quickConnectId}` as const
  }
}
export type { QuickConnectArn }
export function quickConnectArn<Partition extends ArnPartition = 'aws'>(
  parameters: QuickConnectArnParameters<Partition>,
) {
  return new QuickConnectArn<Partition>(parameters)
}

export interface WildcardQuickConnectArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
}
class WildcardQuickConnectArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'wildcard-quick-connect',
  `arn:${string}:connect:${string}:${string}:instance/${string}/transfer-destination/*`
> {
  readonly [ArnResourceTypeBrand] = 'wildcard-quick-connect' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  constructor(parameters: WildcardQuickConnectArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/transfer-destination/*` as const
  }
}
export type { WildcardQuickConnectArn }
export function wildcardQuickConnectArn<Partition extends ArnPartition = 'aws'>(
  parameters: WildcardQuickConnectArnParameters<Partition>,
) {
  return new WildcardQuickConnectArn<Partition>(parameters)
}

export interface ContactFlowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly contactFlowId: string
}
class ContactFlowArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'contact-flow',
  `arn:${string}:connect:${string}:${string}:instance/${string}/contact-flow/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'contact-flow' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly contactFlowId: string
  constructor(parameters: ContactFlowArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.contactFlowId = parameters.contactFlowId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/contact-flow/${this.contactFlowId}` as const
  }
}
export type { ContactFlowArn }
export function contactFlowArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContactFlowArnParameters<Partition>,
) {
  return new ContactFlowArn<Partition>(parameters)
}

export interface TaskTemplateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly taskTemplateId: string
}
class TaskTemplateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'task-template',
  `arn:${string}:connect:${string}:${string}:instance/${string}/task-template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'task-template' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly taskTemplateId: string
  constructor(parameters: TaskTemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.taskTemplateId = parameters.taskTemplateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/task-template/${this.taskTemplateId}` as const
  }
}
export type { TaskTemplateArn }
export function taskTemplateArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskTemplateArnParameters<Partition>,
) {
  return new TaskTemplateArn<Partition>(parameters)
}

export interface ContactFlowModuleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly contactFlowModuleId: string
}
class ContactFlowModuleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'contact-flow-module',
  `arn:${string}:connect:${string}:${string}:instance/${string}/flow-module/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'contact-flow-module' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly contactFlowModuleId: string
  constructor(parameters: ContactFlowModuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.contactFlowModuleId = parameters.contactFlowModuleId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/flow-module/${this.contactFlowModuleId}` as const
  }
}
export type { ContactFlowModuleArn }
export function contactFlowModuleArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContactFlowModuleArnParameters<Partition>,
) {
  return new ContactFlowModuleArn<Partition>(parameters)
}

export interface WildcardContactFlowArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
}
class WildcardContactFlowArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'wildcard-contact-flow',
  `arn:${string}:connect:${string}:${string}:instance/${string}/contact-flow/*`
> {
  readonly [ArnResourceTypeBrand] = 'wildcard-contact-flow' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  constructor(parameters: WildcardContactFlowArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/contact-flow/*` as const
  }
}
export type { WildcardContactFlowArn }
export function wildcardContactFlowArn<Partition extends ArnPartition = 'aws'>(
  parameters: WildcardContactFlowArnParameters<Partition>,
) {
  return new WildcardContactFlowArn<Partition>(parameters)
}

export interface HoursOfOperationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly hoursOfOperationId: string
}
class HoursOfOperationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'hours-of-operation',
  `arn:${string}:connect:${string}:${string}:instance/${string}/operating-hours/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hours-of-operation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly hoursOfOperationId: string
  constructor(parameters: HoursOfOperationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.hoursOfOperationId = parameters.hoursOfOperationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/operating-hours/${this.hoursOfOperationId}` as const
  }
}
export type { HoursOfOperationArn }
export function hoursOfOperationArn<Partition extends ArnPartition = 'aws'>(
  parameters: HoursOfOperationArnParameters<Partition>,
) {
  return new HoursOfOperationArn<Partition>(parameters)
}

export interface AgentStatusArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly agentStatusId: string
}
class AgentStatusArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'agent-status',
  `arn:${string}:connect:${string}:${string}:instance/${string}/agent-state/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'agent-status' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly agentStatusId: string
  constructor(parameters: AgentStatusArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.agentStatusId = parameters.agentStatusId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/agent-state/${this.agentStatusId}` as const
  }
}
export type { AgentStatusArn }
export function agentStatusArn<Partition extends ArnPartition = 'aws'>(
  parameters: AgentStatusArnParameters<Partition>,
) {
  return new AgentStatusArn<Partition>(parameters)
}

export interface WildcardAgentStatusArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
}
class WildcardAgentStatusArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'wildcard-agent-status',
  `arn:${string}:connect:${string}:${string}:instance/${string}/agent-state/*`
> {
  readonly [ArnResourceTypeBrand] = 'wildcard-agent-status' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  constructor(parameters: WildcardAgentStatusArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/agent-state/*` as const
  }
}
export type { WildcardAgentStatusArn }
export function wildcardAgentStatusArn<Partition extends ArnPartition = 'aws'>(
  parameters: WildcardAgentStatusArnParameters<Partition>,
) {
  return new WildcardAgentStatusArn<Partition>(parameters)
}

export interface LegacyPhoneNumberArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly phoneNumberId: string
}
class LegacyPhoneNumberArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'legacy-phone-number',
  `arn:${string}:connect:${string}:${string}:instance/${string}/phone-number/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'legacy-phone-number' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly phoneNumberId: string
  constructor(parameters: LegacyPhoneNumberArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.phoneNumberId = parameters.phoneNumberId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/phone-number/${this.phoneNumberId}` as const
  }
}
export type { LegacyPhoneNumberArn }
export function legacyPhoneNumberArn<Partition extends ArnPartition = 'aws'>(
  parameters: LegacyPhoneNumberArnParameters<Partition>,
) {
  return new LegacyPhoneNumberArn<Partition>(parameters)
}

export interface WildcardLegacyPhoneNumberArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
}
class WildcardLegacyPhoneNumberArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'wildcard-legacy-phone-number',
  `arn:${string}:connect:${string}:${string}:instance/${string}/phone-number/*`
> {
  readonly [ArnResourceTypeBrand] = 'wildcard-legacy-phone-number' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  constructor(parameters: WildcardLegacyPhoneNumberArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/phone-number/*` as const
  }
}
export type { WildcardLegacyPhoneNumberArn }
export function wildcardLegacyPhoneNumberArn<
  Partition extends ArnPartition = 'aws',
>(parameters: WildcardLegacyPhoneNumberArnParameters<Partition>) {
  return new WildcardLegacyPhoneNumberArn<Partition>(parameters)
}

export interface PhoneNumberArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly phoneNumberId: string
}
class PhoneNumberArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'phone-number',
  `arn:${string}:connect:${string}:${string}:phone-number/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'phone-number' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly phoneNumberId: string
  constructor(parameters: PhoneNumberArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.phoneNumberId = parameters.phoneNumberId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:phone-number/${this.phoneNumberId}` as const
  }
}
export type { PhoneNumberArn }
export function phoneNumberArn<Partition extends ArnPartition = 'aws'>(
  parameters: PhoneNumberArnParameters<Partition>,
) {
  return new PhoneNumberArn<Partition>(parameters)
}

export interface WildcardPhoneNumberArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class WildcardPhoneNumberArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'wildcard-phone-number',
  `arn:${string}:connect:${string}:${string}:phone-number/*`
> {
  readonly [ArnResourceTypeBrand] = 'wildcard-phone-number' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: WildcardPhoneNumberArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:phone-number/*` as const
  }
}
export type { WildcardPhoneNumberArn }
export function wildcardPhoneNumberArn<Partition extends ArnPartition = 'aws'>(
  parameters: WildcardPhoneNumberArnParameters<Partition>,
) {
  return new WildcardPhoneNumberArn<Partition>(parameters)
}

export interface IntegrationAssociationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly integrationAssociationId: string
}
class IntegrationAssociationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'integration-association',
  `arn:${string}:connect:${string}:${string}:instance/${string}/integration-association/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'integration-association' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly integrationAssociationId: string
  constructor(parameters: IntegrationAssociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.integrationAssociationId = parameters.integrationAssociationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/integration-association/${this.integrationAssociationId}` as const
  }
}
export type { IntegrationAssociationArn }
export function integrationAssociationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: IntegrationAssociationArnParameters<Partition>) {
  return new IntegrationAssociationArn<Partition>(parameters)
}

export interface UseCaseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly useCaseId: string
}
class UseCaseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'use-case',
  `arn:${string}:connect:${string}:${string}:instance/${string}/use-case/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'use-case' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly useCaseId: string
  constructor(parameters: UseCaseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.useCaseId = parameters.useCaseId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/use-case/${this.useCaseId}` as const
  }
}
export type { UseCaseArn }
export function useCaseArn<Partition extends ArnPartition = 'aws'>(
  parameters: UseCaseArnParameters<Partition>,
) {
  return new UseCaseArn<Partition>(parameters)
}

export interface VocabularyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly vocabularyId: string
}
class VocabularyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'vocabulary',
  `arn:${string}:connect:${string}:${string}:instance/${string}/vocabulary/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'vocabulary' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly vocabularyId: string
  constructor(parameters: VocabularyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.vocabularyId = parameters.vocabularyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/vocabulary/${this.vocabularyId}` as const
  }
}
export type { VocabularyArn }
export function vocabularyArn<Partition extends ArnPartition = 'aws'>(
  parameters: VocabularyArnParameters<Partition>,
) {
  return new VocabularyArn<Partition>(parameters)
}

export interface TrafficDistributionGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trafficDistributionGroupId: string
}
class TrafficDistributionGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'traffic-distribution-group',
  `arn:${string}:connect:${string}:${string}:traffic-distribution-group/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'traffic-distribution-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trafficDistributionGroupId: string
  constructor(parameters: TrafficDistributionGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.trafficDistributionGroupId = parameters.trafficDistributionGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:traffic-distribution-group/${this.trafficDistributionGroupId}` as const
  }
}
export type { TrafficDistributionGroupArn }
export function trafficDistributionGroupArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TrafficDistributionGroupArnParameters<Partition>) {
  return new TrafficDistributionGroupArn<Partition>(parameters)
}

export interface RuleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly ruleId: string
}
class RuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'rule',
  `arn:${string}:connect:${string}:${string}:instance/${string}/rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly ruleId: string
  constructor(parameters: RuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.ruleId = parameters.ruleId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/rule/${this.ruleId}` as const
  }
}
export type { RuleArn }
export function ruleArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleArnParameters<Partition>,
) {
  return new RuleArn<Partition>(parameters)
}

export interface EvaluationFormArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly formId: string
}
class EvaluationFormArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'evaluation-form',
  `arn:${string}:connect:${string}:${string}:instance/${string}/evaluation-form/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'evaluation-form' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly formId: string
  constructor(parameters: EvaluationFormArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.formId = parameters.formId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/evaluation-form/${this.formId}` as const
  }
}
export type { EvaluationFormArn }
export function evaluationFormArn<Partition extends ArnPartition = 'aws'>(
  parameters: EvaluationFormArnParameters<Partition>,
) {
  return new EvaluationFormArn<Partition>(parameters)
}

export interface ContactEvaluationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly evaluationId: string
}
class ContactEvaluationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'contact-evaluation',
  `arn:${string}:connect:${string}:${string}:instance/${string}/contact-evaluation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'contact-evaluation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly evaluationId: string
  constructor(parameters: ContactEvaluationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.evaluationId = parameters.evaluationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/contact-evaluation/${this.evaluationId}` as const
  }
}
export type { ContactEvaluationArn }
export function contactEvaluationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContactEvaluationArnParameters<Partition>,
) {
  return new ContactEvaluationArn<Partition>(parameters)
}

export interface PromptArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly promptId: string
}
class PromptArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'prompt',
  `arn:${string}:connect:${string}:${string}:instance/${string}/prompt/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'prompt' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly promptId: string
  constructor(parameters: PromptArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.promptId = parameters.promptId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/prompt/${this.promptId}` as const
  }
}
export type { PromptArn }
export function promptArn<Partition extends ArnPartition = 'aws'>(
  parameters: PromptArnParameters<Partition>,
) {
  return new PromptArn<Partition>(parameters)
}

export interface CustomerManagedViewArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly viewId: string
}
class CustomerManagedViewArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'customer-managed-view',
  `arn:${string}:connect:${string}:${string}:instance/${string}/view/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'customer-managed-view' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly viewId: string
  constructor(parameters: CustomerManagedViewArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.viewId = parameters.viewId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/view/${this.viewId}` as const
  }
}
export type { CustomerManagedViewArn }
export function customerManagedViewArn<Partition extends ArnPartition = 'aws'>(
  parameters: CustomerManagedViewArnParameters<Partition>,
) {
  return new CustomerManagedViewArn<Partition>(parameters)
}

export interface AwsManagedViewArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly viewId: string
}
class AwsManagedViewArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'aws-managed-view',
  `arn:${string}:connect:${string}:aws:view/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'aws-managed-view' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly viewId: string
  constructor(parameters: AwsManagedViewArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.viewId = parameters.viewId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:aws:view/${this.viewId}` as const
  }
}
export type { AwsManagedViewArn }
export function awsManagedViewArn<Partition extends ArnPartition = 'aws'>(
  parameters: AwsManagedViewArnParameters<Partition>,
) {
  return new AwsManagedViewArn<Partition>(parameters)
}

export interface QualifiedCustomerManagedViewArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly viewId: string
  readonly viewQualifier: string
}
class QualifiedCustomerManagedViewArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'qualified-customer-managed-view',
  `arn:${string}:connect:${string}:${string}:instance/${string}/view/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'qualified-customer-managed-view' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly viewId: string
  readonly viewQualifier: string
  constructor(
    parameters: QualifiedCustomerManagedViewArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.viewId = parameters.viewId
    this.viewQualifier = parameters.viewQualifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/view/${this.viewId}:${this.viewQualifier}` as const
  }
}
export type { QualifiedCustomerManagedViewArn }
export function qualifiedCustomerManagedViewArn<
  Partition extends ArnPartition = 'aws',
>(parameters: QualifiedCustomerManagedViewArnParameters<Partition>) {
  return new QualifiedCustomerManagedViewArn<Partition>(parameters)
}

export interface QualifiedAwsManagedViewArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly viewId: string
  readonly viewQualifier: string
}
class QualifiedAwsManagedViewArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'qualified-aws-managed-view',
  `arn:${string}:connect:${string}:aws:view/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'qualified-aws-managed-view' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly viewId: string
  readonly viewQualifier: string
  constructor(parameters: QualifiedAwsManagedViewArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.viewId = parameters.viewId
    this.viewQualifier = parameters.viewQualifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:aws:view/${this.viewId}:${this.viewQualifier}` as const
  }
}
export type { QualifiedAwsManagedViewArn }
export function qualifiedAwsManagedViewArn<
  Partition extends ArnPartition = 'aws',
>(parameters: QualifiedAwsManagedViewArnParameters<Partition>) {
  return new QualifiedAwsManagedViewArn<Partition>(parameters)
}

export interface CustomerManagedViewVersionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly viewId: string
  readonly viewVersion: string
}
class CustomerManagedViewVersionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'customer-managed-view-version',
  `arn:${string}:connect:${string}:${string}:instance/${string}/view/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'customer-managed-view-version' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly viewId: string
  readonly viewVersion: string
  constructor(parameters: CustomerManagedViewVersionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.viewId = parameters.viewId
    this.viewVersion = parameters.viewVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/view/${this.viewId}:${this.viewVersion}` as const
  }
}
export type { CustomerManagedViewVersionArn }
export function customerManagedViewVersionArn<
  Partition extends ArnPartition = 'aws',
>(parameters: CustomerManagedViewVersionArnParameters<Partition>) {
  return new CustomerManagedViewVersionArn<Partition>(parameters)
}

export interface AttachedFileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly fileId: string
}
class AttachedFileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'attached-file',
  `arn:${string}:connect:${string}:${string}:instance/${string}/file/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'attached-file' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly instanceId: string
  readonly fileId: string
  constructor(parameters: AttachedFileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.instanceId = parameters.instanceId
    this.fileId = parameters.fileId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:connect:${this.region}:${this.account}:instance/${this.instanceId}/file/${this.fileId}` as const
  }
}
export type { AttachedFileArn }
export function attachedFileArn<Partition extends ArnPartition = 'aws'>(
  parameters: AttachedFileArnParameters<Partition>,
) {
  return new AttachedFileArn<Partition>(parameters)
}
