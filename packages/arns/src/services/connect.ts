export interface InstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
}
export type InstanceArn = `arn:${string}:connect:${string}:${string}:instance/${string}`
export function instanceArn(parameters: InstanceArnParameters): InstanceArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}`
}

export interface ContactArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  contactId: string
}
export type ContactArn = `arn:${string}:connect:${string}:${string}:instance/${string}/contact/${string}`
export function contactArn(parameters: ContactArnParameters): ContactArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/contact/${parameters.contactId}`
}

export interface UserArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  userId: string
}
export type UserArn = `arn:${string}:connect:${string}:${string}:instance/${string}/agent/${string}`
export function userArn(parameters: UserArnParameters): UserArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/agent/${parameters.userId}`
}

export interface RoutingProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  routingProfileId: string
}
export type RoutingProfileArn = `arn:${string}:connect:${string}:${string}:instance/${string}/routing-profile/${string}`
export function routingProfileArn(parameters: RoutingProfileArnParameters): RoutingProfileArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/routing-profile/${parameters.routingProfileId}`
}

export interface SecurityProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  securityProfileId: string
}
export type SecurityProfileArn = `arn:${string}:connect:${string}:${string}:instance/${string}/security-profile/${string}`
export function securityProfileArn(parameters: SecurityProfileArnParameters): SecurityProfileArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/security-profile/${parameters.securityProfileId}`
}

export interface AuthenticationProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  authenticationProfileId: string
}
export type AuthenticationProfileArn = `arn:${string}:connect:${string}:${string}:instance/${string}/authentication-profile/${string}`
export function authenticationProfileArn(parameters: AuthenticationProfileArnParameters): AuthenticationProfileArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/authentication-profile/${parameters.authenticationProfileId}`
}

export interface HierarchyGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  hierarchyGroupId: string
}
export type HierarchyGroupArn = `arn:${string}:connect:${string}:${string}:instance/${string}/agent-group/${string}`
export function hierarchyGroupArn(parameters: HierarchyGroupArnParameters): HierarchyGroupArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/agent-group/${parameters.hierarchyGroupId}`
}

export interface QueueArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  queueId: string
}
export type QueueArn = `arn:${string}:connect:${string}:${string}:instance/${string}/queue/${string}`
export function queueArn(parameters: QueueArnParameters): QueueArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/queue/${parameters.queueId}`
}

export interface WildcardQueueArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
}
export type WildcardQueueArn = `arn:${string}:connect:${string}:${string}:instance/${string}/queue/*`
export function wildcardQueueArn(parameters: WildcardQueueArnParameters): WildcardQueueArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/queue/*`
}

export interface QuickConnectArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  quickConnectId: string
}
export type QuickConnectArn = `arn:${string}:connect:${string}:${string}:instance/${string}/transfer-destination/${string}`
export function quickConnectArn(parameters: QuickConnectArnParameters): QuickConnectArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/transfer-destination/${parameters.quickConnectId}`
}

export interface WildcardQuickConnectArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
}
export type WildcardQuickConnectArn = `arn:${string}:connect:${string}:${string}:instance/${string}/transfer-destination/*`
export function wildcardQuickConnectArn(parameters: WildcardQuickConnectArnParameters): WildcardQuickConnectArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/transfer-destination/*`
}

export interface ContactFlowArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  contactFlowId: string
}
export type ContactFlowArn = `arn:${string}:connect:${string}:${string}:instance/${string}/contact-flow/${string}`
export function contactFlowArn(parameters: ContactFlowArnParameters): ContactFlowArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/contact-flow/${parameters.contactFlowId}`
}

export interface TaskTemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  taskTemplateId: string
}
export type TaskTemplateArn = `arn:${string}:connect:${string}:${string}:instance/${string}/task-template/${string}`
export function taskTemplateArn(parameters: TaskTemplateArnParameters): TaskTemplateArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/task-template/${parameters.taskTemplateId}`
}

export interface ContactFlowModuleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  contactFlowModuleId: string
}
export type ContactFlowModuleArn = `arn:${string}:connect:${string}:${string}:instance/${string}/flow-module/${string}`
export function contactFlowModuleArn(parameters: ContactFlowModuleArnParameters): ContactFlowModuleArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/flow-module/${parameters.contactFlowModuleId}`
}

export interface WildcardContactFlowArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
}
export type WildcardContactFlowArn = `arn:${string}:connect:${string}:${string}:instance/${string}/contact-flow/*`
export function wildcardContactFlowArn(parameters: WildcardContactFlowArnParameters): WildcardContactFlowArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/contact-flow/*`
}

export interface HoursOfOperationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  hoursOfOperationId: string
}
export type HoursOfOperationArn = `arn:${string}:connect:${string}:${string}:instance/${string}/operating-hours/${string}`
export function hoursOfOperationArn(parameters: HoursOfOperationArnParameters): HoursOfOperationArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/operating-hours/${parameters.hoursOfOperationId}`
}

export interface AgentStatusArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  agentStatusId: string
}
export type AgentStatusArn = `arn:${string}:connect:${string}:${string}:instance/${string}/agent-state/${string}`
export function agentStatusArn(parameters: AgentStatusArnParameters): AgentStatusArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/agent-state/${parameters.agentStatusId}`
}

export interface WildcardAgentStatusArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
}
export type WildcardAgentStatusArn = `arn:${string}:connect:${string}:${string}:instance/${string}/agent-state/*`
export function wildcardAgentStatusArn(parameters: WildcardAgentStatusArnParameters): WildcardAgentStatusArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/agent-state/*`
}

export interface LegacyPhoneNumberArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  phoneNumberId: string
}
export type LegacyPhoneNumberArn = `arn:${string}:connect:${string}:${string}:instance/${string}/phone-number/${string}`
export function legacyPhoneNumberArn(parameters: LegacyPhoneNumberArnParameters): LegacyPhoneNumberArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/phone-number/${parameters.phoneNumberId}`
}

export interface WildcardLegacyPhoneNumberArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
}
export type WildcardLegacyPhoneNumberArn = `arn:${string}:connect:${string}:${string}:instance/${string}/phone-number/*`
export function wildcardLegacyPhoneNumberArn(parameters: WildcardLegacyPhoneNumberArnParameters): WildcardLegacyPhoneNumberArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/phone-number/*`
}

export interface PhoneNumberArnParameters {
  partition?: string | undefined
  region: string
  account: string
  phoneNumberId: string
}
export type PhoneNumberArn = `arn:${string}:connect:${string}:${string}:phone-number/${string}`
export function phoneNumberArn(parameters: PhoneNumberArnParameters): PhoneNumberArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:phone-number/${parameters.phoneNumberId}`
}

export interface WildcardPhoneNumberArnParameters {
  partition?: string | undefined
  region: string
  account: string
}
export type WildcardPhoneNumberArn = `arn:${string}:connect:${string}:${string}:phone-number/*`
export function wildcardPhoneNumberArn(parameters: WildcardPhoneNumberArnParameters): WildcardPhoneNumberArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:phone-number/*`
}

export interface IntegrationAssociationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  integrationAssociationId: string
}
export type IntegrationAssociationArn = `arn:${string}:connect:${string}:${string}:instance/${string}/integration-association/${string}`
export function integrationAssociationArn(parameters: IntegrationAssociationArnParameters): IntegrationAssociationArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/integration-association/${parameters.integrationAssociationId}`
}

export interface UseCaseArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  useCaseId: string
}
export type UseCaseArn = `arn:${string}:connect:${string}:${string}:instance/${string}/use-case/${string}`
export function useCaseArn(parameters: UseCaseArnParameters): UseCaseArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/use-case/${parameters.useCaseId}`
}

export interface VocabularyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  vocabularyId: string
}
export type VocabularyArn = `arn:${string}:connect:${string}:${string}:instance/${string}/vocabulary/${string}`
export function vocabularyArn(parameters: VocabularyArnParameters): VocabularyArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/vocabulary/${parameters.vocabularyId}`
}

export interface TrafficDistributionGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  trafficDistributionGroupId: string
}
export type TrafficDistributionGroupArn = `arn:${string}:connect:${string}:${string}:traffic-distribution-group/${string}`
export function trafficDistributionGroupArn(parameters: TrafficDistributionGroupArnParameters): TrafficDistributionGroupArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:traffic-distribution-group/${parameters.trafficDistributionGroupId}`
}

export interface RuleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  ruleId: string
}
export type RuleArn = `arn:${string}:connect:${string}:${string}:instance/${string}/rule/${string}`
export function ruleArn(parameters: RuleArnParameters): RuleArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/rule/${parameters.ruleId}`
}

export interface EvaluationFormArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  formId: string
}
export type EvaluationFormArn = `arn:${string}:connect:${string}:${string}:instance/${string}/evaluation-form/${string}`
export function evaluationFormArn(parameters: EvaluationFormArnParameters): EvaluationFormArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/evaluation-form/${parameters.formId}`
}

export interface ContactEvaluationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  evaluationId: string
}
export type ContactEvaluationArn = `arn:${string}:connect:${string}:${string}:instance/${string}/contact-evaluation/${string}`
export function contactEvaluationArn(parameters: ContactEvaluationArnParameters): ContactEvaluationArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/contact-evaluation/${parameters.evaluationId}`
}

export interface PromptArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  promptId: string
}
export type PromptArn = `arn:${string}:connect:${string}:${string}:instance/${string}/prompt/${string}`
export function promptArn(parameters: PromptArnParameters): PromptArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/prompt/${parameters.promptId}`
}

export interface CustomerManagedViewArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  viewId: string
}
export type CustomerManagedViewArn = `arn:${string}:connect:${string}:${string}:instance/${string}/view/${string}`
export function customerManagedViewArn(parameters: CustomerManagedViewArnParameters): CustomerManagedViewArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/view/${parameters.viewId}`
}

export interface AwsManagedViewArnParameters {
  partition?: string | undefined
  region: string
  viewId: string
}
export type AwsManagedViewArn = `arn:${string}:connect:${string}:aws:view/${string}`
export function awsManagedViewArn(parameters: AwsManagedViewArnParameters): AwsManagedViewArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:aws:view/${parameters.viewId}`
}

export interface QualifiedCustomerManagedViewArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  viewId: string
  viewQualifier: string
}
export type QualifiedCustomerManagedViewArn = `arn:${string}:connect:${string}:${string}:instance/${string}/view/${string}:${string}`
export function qualifiedCustomerManagedViewArn(parameters: QualifiedCustomerManagedViewArnParameters): QualifiedCustomerManagedViewArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/view/${parameters.viewId}:${parameters.viewQualifier}`
}

export interface QualifiedAwsManagedViewArnParameters {
  partition?: string | undefined
  region: string
  viewId: string
  viewQualifier: string
}
export type QualifiedAwsManagedViewArn = `arn:${string}:connect:${string}:aws:view/${string}:${string}`
export function qualifiedAwsManagedViewArn(parameters: QualifiedAwsManagedViewArnParameters): QualifiedAwsManagedViewArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:aws:view/${parameters.viewId}:${parameters.viewQualifier}`
}

export interface CustomerManagedViewVersionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  viewId: string
  viewVersion: string
}
export type CustomerManagedViewVersionArn = `arn:${string}:connect:${string}:${string}:instance/${string}/view/${string}:${string}`
export function customerManagedViewVersionArn(parameters: CustomerManagedViewVersionArnParameters): CustomerManagedViewVersionArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/view/${parameters.viewId}:${parameters.viewVersion}`
}

export interface AttachedFileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  instanceId: string
  fileId: string
}
export type AttachedFileArn = `arn:${string}:connect:${string}:${string}:instance/${string}/file/${string}`
export function attachedFileArn(parameters: AttachedFileArnParameters): AttachedFileArn {
  return `arn:${parameters.partition ?? ''}:connect:${parameters.region}:${parameters.account}:instance/${parameters.instanceId}/file/${parameters.fileId}`
}