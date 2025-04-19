import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ConfigurationSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configurationSetName: string
}
class ConfigurationSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuration-set',
  `arn:${string}:ses:${string}:${string}:configuration-set/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configuration-set' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly configurationSetName: string
  constructor(parameters: ConfigurationSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.configurationSetName = parameters.configurationSetName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:configuration-set/${this.configurationSetName}` as const
  }
}
export type { ConfigurationSetArn }
export function configurationSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationSetArnParameters<Partition>,
) {
  return new ConfigurationSetArn<Partition>(parameters)
}

export interface DedicatedIpPoolArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dedicatedIpPool: string
}
class DedicatedIpPoolArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'dedicated-ip-pool',
  `arn:${string}:ses:${string}:${string}:dedicated-ip-pool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dedicated-ip-pool' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dedicatedIpPool: string
  constructor(parameters: DedicatedIpPoolArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dedicatedIpPool = parameters.dedicatedIpPool
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:dedicated-ip-pool/${this.dedicatedIpPool}` as const
  }
}
export type { DedicatedIpPoolArn }
export function dedicatedIpPoolArn<Partition extends ArnPartition = 'aws'>(
  parameters: DedicatedIpPoolArnParameters<Partition>,
) {
  return new DedicatedIpPoolArn<Partition>(parameters)
}

export interface DeliverabilityTestReportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reportId: string
}
class DeliverabilityTestReportArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'deliverability-test-report',
  `arn:${string}:ses:${string}:${string}:deliverability-test-report/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deliverability-test-report' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reportId: string
  constructor(parameters: DeliverabilityTestReportArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.reportId = parameters.reportId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:deliverability-test-report/${this.reportId}` as const
  }
}
export type { DeliverabilityTestReportArn }
export function deliverabilityTestReportArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DeliverabilityTestReportArnParameters<Partition>) {
  return new DeliverabilityTestReportArn<Partition>(parameters)
}

export interface IdentityArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identityName: string
}
class IdentityArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'identity',
  `arn:${string}:ses:${string}:${string}:identity/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'identity' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identityName: string
  constructor(parameters: IdentityArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.identityName = parameters.identityName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:identity/${this.identityName}` as const
  }
}
export type { IdentityArn }
export function identityArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdentityArnParameters<Partition>,
) {
  return new IdentityArn<Partition>(parameters)
}

export interface AddonInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly addonInstanceId: string
}
class AddonInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'addon-instance',
  `arn:${string}:ses:${string}:${string}:addon-instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'addon-instance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly addonInstanceId: string
  constructor(parameters: AddonInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.addonInstanceId = parameters.addonInstanceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:addon-instance/${this.addonInstanceId}` as const
  }
}
export type { AddonInstanceArn }
export function addonInstanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: AddonInstanceArnParameters<Partition>,
) {
  return new AddonInstanceArn<Partition>(parameters)
}

export interface AddonSubscriptionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly addonSubscriptionId: string
}
class AddonSubscriptionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'addon-subscription',
  `arn:${string}:ses:${string}:${string}:addon-subscription/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'addon-subscription' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly addonSubscriptionId: string
  constructor(parameters: AddonSubscriptionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.addonSubscriptionId = parameters.addonSubscriptionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:addon-subscription/${this.addonSubscriptionId}` as const
  }
}
export type { AddonSubscriptionArn }
export function addonSubscriptionArn<Partition extends ArnPartition = 'aws'>(
  parameters: AddonSubscriptionArnParameters<Partition>,
) {
  return new AddonSubscriptionArn<Partition>(parameters)
}

export interface MailmanagerArchiveArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly archiveId: string
}
class MailmanagerArchiveArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'mailmanager-archive',
  `arn:${string}:ses:${string}:${string}:mailmanager-archive/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mailmanager-archive' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly archiveId: string
  constructor(parameters: MailmanagerArchiveArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.archiveId = parameters.archiveId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:mailmanager-archive/${this.archiveId}` as const
  }
}
export type { MailmanagerArchiveArn }
export function mailmanagerArchiveArn<Partition extends ArnPartition = 'aws'>(
  parameters: MailmanagerArchiveArnParameters<Partition>,
) {
  return new MailmanagerArchiveArn<Partition>(parameters)
}

export interface MailmanagerIngressPointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ingressPointId: string
}
class MailmanagerIngressPointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'mailmanager-ingress-point',
  `arn:${string}:ses:${string}:${string}:mailmanager-ingress-point/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mailmanager-ingress-point' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ingressPointId: string
  constructor(parameters: MailmanagerIngressPointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.ingressPointId = parameters.ingressPointId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:mailmanager-ingress-point/${this.ingressPointId}` as const
  }
}
export type { MailmanagerIngressPointArn }
export function mailmanagerIngressPointArn<
  Partition extends ArnPartition = 'aws',
>(parameters: MailmanagerIngressPointArnParameters<Partition>) {
  return new MailmanagerIngressPointArn<Partition>(parameters)
}

export interface MailmanagerSmtpRelayArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly relayId: string
}
class MailmanagerSmtpRelayArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'mailmanager-smtp-relay',
  `arn:${string}:ses:${string}:${string}:mailmanager-smtp-relay/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mailmanager-smtp-relay' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly relayId: string
  constructor(parameters: MailmanagerSmtpRelayArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.relayId = parameters.relayId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:mailmanager-smtp-relay/${this.relayId}` as const
  }
}
export type { MailmanagerSmtpRelayArn }
export function mailmanagerSmtpRelayArn<Partition extends ArnPartition = 'aws'>(
  parameters: MailmanagerSmtpRelayArnParameters<Partition>,
) {
  return new MailmanagerSmtpRelayArn<Partition>(parameters)
}

export interface MailmanagerRuleSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ruleSetId: string
}
class MailmanagerRuleSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'mailmanager-rule-set',
  `arn:${string}:ses:${string}:${string}:mailmanager-rule-set/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mailmanager-rule-set' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ruleSetId: string
  constructor(parameters: MailmanagerRuleSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.ruleSetId = parameters.ruleSetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:mailmanager-rule-set/${this.ruleSetId}` as const
  }
}
export type { MailmanagerRuleSetArn }
export function mailmanagerRuleSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: MailmanagerRuleSetArnParameters<Partition>,
) {
  return new MailmanagerRuleSetArn<Partition>(parameters)
}

export interface MailmanagerTrafficPolicyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trafficPolicyId: string
}
class MailmanagerTrafficPolicyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'mailmanager-traffic-policy',
  `arn:${string}:ses:${string}:${string}:mailmanager-traffic-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mailmanager-traffic-policy' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trafficPolicyId: string
  constructor(parameters: MailmanagerTrafficPolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.trafficPolicyId = parameters.trafficPolicyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:mailmanager-traffic-policy/${this.trafficPolicyId}` as const
  }
}
export type { MailmanagerTrafficPolicyArn }
export function mailmanagerTrafficPolicyArn<
  Partition extends ArnPartition = 'aws',
>(parameters: MailmanagerTrafficPolicyArnParameters<Partition>) {
  return new MailmanagerTrafficPolicyArn<Partition>(parameters)
}

export interface CustomVerificationEmailTemplateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateName: string
}
class CustomVerificationEmailTemplateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'custom-verification-email-template',
  `arn:${string}:ses:${string}:${string}:custom-verification-email-template/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'custom-verification-email-template' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateName: string
  constructor(
    parameters: CustomVerificationEmailTemplateArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.templateName = parameters.templateName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:custom-verification-email-template/${this.templateName}` as const
  }
}
export type { CustomVerificationEmailTemplateArn }
export function customVerificationEmailTemplateArn<
  Partition extends ArnPartition = 'aws',
>(parameters: CustomVerificationEmailTemplateArnParameters<Partition>) {
  return new CustomVerificationEmailTemplateArn<Partition>(parameters)
}

export interface TemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateName: string
}
class TemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'template',
  `arn:${string}:ses:${string}:${string}:template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'template' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly templateName: string
  constructor(parameters: TemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.templateName = parameters.templateName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:template/${this.templateName}` as const
  }
}
export type { TemplateArn }
export function templateArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateArnParameters<Partition>,
) {
  return new TemplateArn<Partition>(parameters)
}

export interface ContactListArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly contactListName: string
}
class ContactListArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'contact-list',
  `arn:${string}:ses:${string}:${string}:contact-list/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'contact-list' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly contactListName: string
  constructor(parameters: ContactListArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.contactListName = parameters.contactListName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:contact-list/${this.contactListName}` as const
  }
}
export type { ContactListArn }
export function contactListArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContactListArnParameters<Partition>,
) {
  return new ContactListArn<Partition>(parameters)
}

export interface ExportJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly exportJobId: string
}
class ExportJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'export-job',
  `arn:${string}:ses:${string}:${string}:export-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'export-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly exportJobId: string
  constructor(parameters: ExportJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.exportJobId = parameters.exportJobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:export-job/${this.exportJobId}` as const
  }
}
export type { ExportJobArn }
export function exportJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: ExportJobArnParameters<Partition>,
) {
  return new ExportJobArn<Partition>(parameters)
}

export interface ImportJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly importJobId: string
}
class ImportJobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'import-job',
  `arn:${string}:ses:${string}:${string}:import-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'import-job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly importJobId: string
  constructor(parameters: ImportJobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.importJobId = parameters.importJobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:import-job/${this.importJobId}` as const
  }
}
export type { ImportJobArn }
export function importJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImportJobArnParameters<Partition>,
) {
  return new ImportJobArn<Partition>(parameters)
}
