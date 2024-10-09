export interface ConfigurationSetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  configurationSetName: string
}
export type ConfigurationSetArn = `arn:${string}:ses:${string}:${string}:configuration-set/${string}`
export function configurationSetArn(parameters: ConfigurationSetArnParameters): ConfigurationSetArn {
  return `arn:${parameters.partition ?? ''}:ses:${parameters.region}:${parameters.account}:configuration-set/${parameters.configurationSetName}`
}

export interface DedicatedIpPoolArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dedicatedIpPool: string
}
export type DedicatedIpPoolArn = `arn:${string}:ses:${string}:${string}:dedicated-ip-pool/${string}`
export function dedicatedIpPoolArn(parameters: DedicatedIpPoolArnParameters): DedicatedIpPoolArn {
  return `arn:${parameters.partition ?? ''}:ses:${parameters.region}:${parameters.account}:dedicated-ip-pool/${parameters.dedicatedIpPool}`
}

export interface DeliverabilityTestReportArnParameters {
  partition?: string | undefined
  region: string
  account: string
  reportId: string
}
export type DeliverabilityTestReportArn = `arn:${string}:ses:${string}:${string}:deliverability-test-report/${string}`
export function deliverabilityTestReportArn(parameters: DeliverabilityTestReportArnParameters): DeliverabilityTestReportArn {
  return `arn:${parameters.partition ?? ''}:ses:${parameters.region}:${parameters.account}:deliverability-test-report/${parameters.reportId}`
}

export interface IdentityArnParameters {
  partition?: string | undefined
  region: string
  account: string
  identityName: string
}
export type IdentityArn = `arn:${string}:ses:${string}:${string}:identity/${string}`
export function identityArn(parameters: IdentityArnParameters): IdentityArn {
  return `arn:${parameters.partition ?? ''}:ses:${parameters.region}:${parameters.account}:identity/${parameters.identityName}`
}

export interface AddonInstanceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  addonInstanceId: string
}
export type AddonInstanceArn = `arn:${string}:ses:${string}:${string}:addon-instance/${string}`
export function addonInstanceArn(parameters: AddonInstanceArnParameters): AddonInstanceArn {
  return `arn:${parameters.partition ?? ''}:ses:${parameters.region}:${parameters.account}:addon-instance/${parameters.addonInstanceId}`
}

export interface AddonSubscriptionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  addonSubscriptionId: string
}
export type AddonSubscriptionArn = `arn:${string}:ses:${string}:${string}:addon-subscription/${string}`
export function addonSubscriptionArn(parameters: AddonSubscriptionArnParameters): AddonSubscriptionArn {
  return `arn:${parameters.partition ?? ''}:ses:${parameters.region}:${parameters.account}:addon-subscription/${parameters.addonSubscriptionId}`
}

export interface MailmanagerArchiveArnParameters {
  partition?: string | undefined
  region: string
  account: string
  archiveId: string
}
export type MailmanagerArchiveArn = `arn:${string}:ses:${string}:${string}:mailmanager-archive/${string}`
export function mailmanagerArchiveArn(parameters: MailmanagerArchiveArnParameters): MailmanagerArchiveArn {
  return `arn:${parameters.partition ?? ''}:ses:${parameters.region}:${parameters.account}:mailmanager-archive/${parameters.archiveId}`
}

export interface MailmanagerIngressPointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  ingressPointId: string
}
export type MailmanagerIngressPointArn = `arn:${string}:ses:${string}:${string}:mailmanager-ingress-point/${string}`
export function mailmanagerIngressPointArn(parameters: MailmanagerIngressPointArnParameters): MailmanagerIngressPointArn {
  return `arn:${parameters.partition ?? ''}:ses:${parameters.region}:${parameters.account}:mailmanager-ingress-point/${parameters.ingressPointId}`
}

export interface MailmanagerSmtpRelayArnParameters {
  partition?: string | undefined
  region: string
  account: string
  relayId: string
}
export type MailmanagerSmtpRelayArn = `arn:${string}:ses:${string}:${string}:mailmanager-smtp-relay/${string}`
export function mailmanagerSmtpRelayArn(parameters: MailmanagerSmtpRelayArnParameters): MailmanagerSmtpRelayArn {
  return `arn:${parameters.partition ?? ''}:ses:${parameters.region}:${parameters.account}:mailmanager-smtp-relay/${parameters.relayId}`
}

export interface MailmanagerRuleSetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  ruleSetId: string
}
export type MailmanagerRuleSetArn = `arn:${string}:ses:${string}:${string}:mailmanager-rule-set/${string}`
export function mailmanagerRuleSetArn(parameters: MailmanagerRuleSetArnParameters): MailmanagerRuleSetArn {
  return `arn:${parameters.partition ?? ''}:ses:${parameters.region}:${parameters.account}:mailmanager-rule-set/${parameters.ruleSetId}`
}

export interface MailmanagerTrafficPolicyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  trafficPolicyId: string
}
export type MailmanagerTrafficPolicyArn = `arn:${string}:ses:${string}:${string}:mailmanager-traffic-policy/${string}`
export function mailmanagerTrafficPolicyArn(parameters: MailmanagerTrafficPolicyArnParameters): MailmanagerTrafficPolicyArn {
  return `arn:${parameters.partition ?? ''}:ses:${parameters.region}:${parameters.account}:mailmanager-traffic-policy/${parameters.trafficPolicyId}`
}

export interface CustomVerificationEmailTemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  templateName: string
}
export type CustomVerificationEmailTemplateArn = `arn:${string}:ses:${string}:${string}:custom-verification-email-template/${string}`
export function customVerificationEmailTemplateArn(parameters: CustomVerificationEmailTemplateArnParameters): CustomVerificationEmailTemplateArn {
  return `arn:${parameters.partition ?? ''}:ses:${parameters.region}:${parameters.account}:custom-verification-email-template/${parameters.templateName}`
}

export interface TemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  templateName: string
}
export type TemplateArn = `arn:${string}:ses:${string}:${string}:template/${string}`
export function templateArn(parameters: TemplateArnParameters): TemplateArn {
  return `arn:${parameters.partition ?? ''}:ses:${parameters.region}:${parameters.account}:template/${parameters.templateName}`
}

export interface ContactListArnParameters {
  partition?: string | undefined
  region: string
  account: string
  contactListName: string
}
export type ContactListArn = `arn:${string}:ses:${string}:${string}:contact-list/${string}`
export function contactListArn(parameters: ContactListArnParameters): ContactListArn {
  return `arn:${parameters.partition ?? ''}:ses:${parameters.region}:${parameters.account}:contact-list/${parameters.contactListName}`
}

export interface ExportJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  exportJobId: string
}
export type ExportJobArn = `arn:${string}:ses:${string}:${string}:export-job/${string}`
export function exportJobArn(parameters: ExportJobArnParameters): ExportJobArn {
  return `arn:${parameters.partition ?? ''}:ses:${parameters.region}:${parameters.account}:export-job/${parameters.exportJobId}`
}

export interface ImportJobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  importJobId: string
}
export type ImportJobArn = `arn:${string}:ses:${string}:${string}:import-job/${string}`
export function importJobArn(parameters: ImportJobArnParameters): ImportJobArn {
  return `arn:${parameters.partition ?? ''}:ses:${parameters.region}:${parameters.account}:import-job/${parameters.importJobId}`
}