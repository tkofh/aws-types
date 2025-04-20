import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface SetConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSetConfiguration: string
}
class SetConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'configuration-set',
  `arn:${string}:ses:${string}:${string}:configuration-set/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'configuration-set' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSetConfiguration: string
  constructor(parameters: SetConfigurationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSetConfiguration = parameters.nameSetConfiguration
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:configuration-set/${this.nameSetConfiguration}` as const
  }
}
export type { SetConfigurationArn }
export function setConfigurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetConfigurationArnParameters<Partition>,
) {
  return new SetConfigurationArn<Partition>(parameters)
}

export interface PoolIpDedicatedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly poolIpDedicated: string
}
class PoolIpDedicatedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'dedicated-ip-pool',
  `arn:${string}:ses:${string}:${string}:dedicated-ip-pool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dedicated-ip-pool' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly poolIpDedicated: string
  constructor(parameters: PoolIpDedicatedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.poolIpDedicated = parameters.poolIpDedicated
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:dedicated-ip-pool/${this.poolIpDedicated}` as const
  }
}
export type { PoolIpDedicatedArn }
export function poolIpDedicatedArn<Partition extends ArnPartition = 'aws'>(
  parameters: PoolIpDedicatedArnParameters<Partition>,
) {
  return new PoolIpDedicatedArn<Partition>(parameters)
}

export interface ReportTestDeliverabilityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idReport: string
}
class ReportTestDeliverabilityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'deliverability-test-report',
  `arn:${string}:ses:${string}:${string}:deliverability-test-report/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deliverability-test-report' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idReport: string
  constructor(parameters: ReportTestDeliverabilityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idReport = parameters.idReport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:deliverability-test-report/${this.idReport}` as const
  }
}
export type { ReportTestDeliverabilityArn }
export function reportTestDeliverabilityArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ReportTestDeliverabilityArnParameters<Partition>) {
  return new ReportTestDeliverabilityArn<Partition>(parameters)
}

export interface IdentityArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameIdentity: string
}
class IdentityArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'identity',
  `arn:${string}:ses:${string}:${string}:identity/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'identity' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameIdentity: string
  constructor(parameters: IdentityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameIdentity = parameters.nameIdentity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:identity/${this.nameIdentity}` as const
  }
}
export type { IdentityArn }
export function identityArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdentityArnParameters<Partition>,
) {
  return new IdentityArn<Partition>(parameters)
}

export interface InstanceAddonArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstanceAddon: string
}
class InstanceAddonArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'addon-instance',
  `arn:${string}:ses:${string}:${string}:addon-instance/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'addon-instance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInstanceAddon: string
  constructor(parameters: InstanceAddonArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInstanceAddon = parameters.idInstanceAddon
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:addon-instance/${this.idInstanceAddon}` as const
  }
}
export type { InstanceAddonArn }
export function instanceAddonArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceAddonArnParameters<Partition>,
) {
  return new InstanceAddonArn<Partition>(parameters)
}

export interface SubscriptionAddonArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSubscriptionAddon: string
}
class SubscriptionAddonArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'addon-subscription',
  `arn:${string}:ses:${string}:${string}:addon-subscription/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'addon-subscription' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSubscriptionAddon: string
  constructor(parameters: SubscriptionAddonArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSubscriptionAddon = parameters.idSubscriptionAddon
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:addon-subscription/${this.idSubscriptionAddon}` as const
  }
}
export type { SubscriptionAddonArn }
export function subscriptionAddonArn<Partition extends ArnPartition = 'aws'>(
  parameters: SubscriptionAddonArnParameters<Partition>,
) {
  return new SubscriptionAddonArn<Partition>(parameters)
}

export interface ArchiveManagerMailArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idArchive: string
}
class ArchiveManagerMailArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'mailmanager-archive',
  `arn:${string}:ses:${string}:${string}:mailmanager-archive/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mailmanager-archive' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idArchive: string
  constructor(parameters: ArchiveManagerMailArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idArchive = parameters.idArchive
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:mailmanager-archive/${this.idArchive}` as const
  }
}
export type { ArchiveManagerMailArn }
export function archiveManagerMailArn<Partition extends ArnPartition = 'aws'>(
  parameters: ArchiveManagerMailArnParameters<Partition>,
) {
  return new ArchiveManagerMailArn<Partition>(parameters)
}

export interface PointIngressManagerMailArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPointIngress: string
}
class PointIngressManagerMailArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'mailmanager-ingress-point',
  `arn:${string}:ses:${string}:${string}:mailmanager-ingress-point/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mailmanager-ingress-point' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPointIngress: string
  constructor(parameters: PointIngressManagerMailArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPointIngress = parameters.idPointIngress
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:mailmanager-ingress-point/${this.idPointIngress}` as const
  }
}
export type { PointIngressManagerMailArn }
export function pointIngressManagerMailArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PointIngressManagerMailArnParameters<Partition>) {
  return new PointIngressManagerMailArn<Partition>(parameters)
}

export interface RelaySmtpManagerMailArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRelay: string
}
class RelaySmtpManagerMailArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'mailmanager-smtp-relay',
  `arn:${string}:ses:${string}:${string}:mailmanager-smtp-relay/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mailmanager-smtp-relay' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRelay: string
  constructor(parameters: RelaySmtpManagerMailArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idRelay = parameters.idRelay
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:mailmanager-smtp-relay/${this.idRelay}` as const
  }
}
export type { RelaySmtpManagerMailArn }
export function relaySmtpManagerMailArn<Partition extends ArnPartition = 'aws'>(
  parameters: RelaySmtpManagerMailArnParameters<Partition>,
) {
  return new RelaySmtpManagerMailArn<Partition>(parameters)
}

export interface SetRuleManagerMailArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSetRule: string
}
class SetRuleManagerMailArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'mailmanager-rule-set',
  `arn:${string}:ses:${string}:${string}:mailmanager-rule-set/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mailmanager-rule-set' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSetRule: string
  constructor(parameters: SetRuleManagerMailArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSetRule = parameters.idSetRule
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:mailmanager-rule-set/${this.idSetRule}` as const
  }
}
export type { SetRuleManagerMailArn }
export function setRuleManagerMailArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetRuleManagerMailArnParameters<Partition>,
) {
  return new SetRuleManagerMailArn<Partition>(parameters)
}

export interface PolicyTrafficManagerMailArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPolicyTraffic: string
}
class PolicyTrafficManagerMailArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'mailmanager-traffic-policy',
  `arn:${string}:ses:${string}:${string}:mailmanager-traffic-policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mailmanager-traffic-policy' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPolicyTraffic: string
  constructor(parameters: PolicyTrafficManagerMailArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPolicyTraffic = parameters.idPolicyTraffic
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:mailmanager-traffic-policy/${this.idPolicyTraffic}` as const
  }
}
export type { PolicyTrafficManagerMailArn }
export function policyTrafficManagerMailArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PolicyTrafficManagerMailArnParameters<Partition>) {
  return new PolicyTrafficManagerMailArn<Partition>(parameters)
}

export interface TemplateEmailVerificationCustomArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplate: string
}
class TemplateEmailVerificationCustomArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'custom-verification-email-template',
  `arn:${string}:ses:${string}:${string}:custom-verification-email-template/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'custom-verification-email-template' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplate: string
  constructor(
    parameters: TemplateEmailVerificationCustomArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTemplate = parameters.nameTemplate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:custom-verification-email-template/${this.nameTemplate}` as const
  }
}
export type { TemplateEmailVerificationCustomArn }
export function templateEmailVerificationCustomArn<
  Partition extends ArnPartition = 'aws',
>(parameters: TemplateEmailVerificationCustomArnParameters<Partition>) {
  return new TemplateEmailVerificationCustomArn<Partition>(parameters)
}

export interface TemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplate: string
}
class TemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'template',
  `arn:${string}:ses:${string}:${string}:template/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'template' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTemplate: string
  constructor(parameters: TemplateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTemplate = parameters.nameTemplate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:template/${this.nameTemplate}` as const
  }
}
export type { TemplateArn }
export function templateArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateArnParameters<Partition>,
) {
  return new TemplateArn<Partition>(parameters)
}

export interface ListContactArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameListContact: string
}
class ListContactArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'contact-list',
  `arn:${string}:ses:${string}:${string}:contact-list/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'contact-list' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameListContact: string
  constructor(parameters: ListContactArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameListContact = parameters.nameListContact
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:contact-list/${this.nameListContact}` as const
  }
}
export type { ListContactArn }
export function listContactArn<Partition extends ArnPartition = 'aws'>(
  parameters: ListContactArnParameters<Partition>,
) {
  return new ListContactArn<Partition>(parameters)
}

export interface JobExportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobExport: string
}
class JobExportArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'export-job',
  `arn:${string}:ses:${string}:${string}:export-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'export-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobExport: string
  constructor(parameters: JobExportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJobExport = parameters.idJobExport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:export-job/${this.idJobExport}` as const
  }
}
export type { JobExportArn }
export function jobExportArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobExportArnParameters<Partition>,
) {
  return new JobExportArn<Partition>(parameters)
}

export interface JobImportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobImport: string
}
class JobImportArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'import-job',
  `arn:${string}:ses:${string}:${string}:import-job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'import-job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJobImport: string
  constructor(parameters: JobImportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJobImport = parameters.idJobImport
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ses:${this.region}:${this.account}:import-job/${this.idJobImport}` as const
  }
}
export type { JobImportArn }
export function jobImportArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobImportArnParameters<Partition>,
) {
  return new JobImportArn<Partition>(parameters)
}
