export interface ClientArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clientId: string
}
export type ClientArn = `arn:${string}:iot:${string}:${string}:client/${string}`
export function clientArn(parameters: ClientArnParameters): ClientArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:client/${parameters.clientId}`
}

export interface IndexArnParameters {
  partition?: string | undefined
  region: string
  account: string
  indexName: string
}
export type IndexArn = `arn:${string}:iot:${string}:${string}:index/${string}`
export function indexArn(parameters: IndexArnParameters): IndexArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:index/${parameters.indexName}`
}

export interface FleetmetricArnParameters {
  partition?: string | undefined
  region: string
  account: string
  fleetMetricName: string
}
export type FleetmetricArn = `arn:${string}:iot:${string}:${string}:fleetmetric/${string}`
export function fleetmetricArn(parameters: FleetmetricArnParameters): FleetmetricArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:fleetmetric/${parameters.fleetMetricName}`
}

export interface JobArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobId: string
}
export type JobArn = `arn:${string}:iot:${string}:${string}:job/${string}`
export function jobArn(parameters: JobArnParameters): JobArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:job/${parameters.jobId}`
}

export interface JobtemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  jobTemplateId: string
}
export type JobtemplateArn = `arn:${string}:iot:${string}:${string}:jobtemplate/${string}`
export function jobtemplateArn(parameters: JobtemplateArnParameters): JobtemplateArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:jobtemplate/${parameters.jobTemplateId}`
}

export interface TunnelArnParameters {
  partition?: string | undefined
  region: string
  account: string
  tunnelId: string
}
export type TunnelArn = `arn:${string}:iot:${string}:${string}:tunnel/${string}`
export function tunnelArn(parameters: TunnelArnParameters): TunnelArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:tunnel/${parameters.tunnelId}`
}

export interface ThingArnParameters {
  partition?: string | undefined
  region: string
  account: string
  thingName: string
}
export type ThingArn = `arn:${string}:iot:${string}:${string}:thing/${string}`
export function thingArn(parameters: ThingArnParameters): ThingArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:thing/${parameters.thingName}`
}

export interface ThinggroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  thingGroupName: string
}
export type ThinggroupArn = `arn:${string}:iot:${string}:${string}:thinggroup/${string}`
export function thinggroupArn(parameters: ThinggroupArnParameters): ThinggroupArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:thinggroup/${parameters.thingGroupName}`
}

export interface BillinggroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  billingGroupName: string
}
export type BillinggroupArn = `arn:${string}:iot:${string}:${string}:billinggroup/${string}`
export function billinggroupArn(parameters: BillinggroupArnParameters): BillinggroupArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:billinggroup/${parameters.billingGroupName}`
}

export interface DynamicthinggroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  thingGroupName: string
}
export type DynamicthinggroupArn = `arn:${string}:iot:${string}:${string}:thinggroup/${string}`
export function dynamicthinggroupArn(parameters: DynamicthinggroupArnParameters): DynamicthinggroupArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:thinggroup/${parameters.thingGroupName}`
}

export interface ThingtypeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  thingTypeName: string
}
export type ThingtypeArn = `arn:${string}:iot:${string}:${string}:thingtype/${string}`
export function thingtypeArn(parameters: ThingtypeArnParameters): ThingtypeArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:thingtype/${parameters.thingTypeName}`
}

export interface TopicArnParameters {
  partition?: string | undefined
  region: string
  account: string
  topicName: string
}
export type TopicArn = `arn:${string}:iot:${string}:${string}:topic/${string}`
export function topicArn(parameters: TopicArnParameters): TopicArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:topic/${parameters.topicName}`
}

export interface TopicfilterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  topicFilter: string
}
export type TopicfilterArn = `arn:${string}:iot:${string}:${string}:topicfilter/${string}`
export function topicfilterArn(parameters: TopicfilterArnParameters): TopicfilterArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:topicfilter/${parameters.topicFilter}`
}

export interface RolealiasArnParameters {
  partition?: string | undefined
  region: string
  account: string
  roleAlias: string
}
export type RolealiasArn = `arn:${string}:iot:${string}:${string}:rolealias/${string}`
export function rolealiasArn(parameters: RolealiasArnParameters): RolealiasArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:rolealias/${parameters.roleAlias}`
}

export interface AuthorizerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  authorizerName: string
}
export type AuthorizerArn = `arn:${string}:iot:${string}:${string}:authorizer/${string}`
export function authorizerArn(parameters: AuthorizerArnParameters): AuthorizerArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:authorizer/${parameters.authorizerName}`
}

export interface PolicyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  policyName: string
}
export type PolicyArn = `arn:${string}:iot:${string}:${string}:policy/${string}`
export function policyArn(parameters: PolicyArnParameters): PolicyArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:policy/${parameters.policyName}`
}

export interface CertArnParameters {
  partition?: string | undefined
  region: string
  account: string
  certificate: string
}
export type CertArn = `arn:${string}:iot:${string}:${string}:cert/${string}`
export function certArn(parameters: CertArnParameters): CertArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:cert/${parameters.certificate}`
}

export interface CacertArnParameters {
  partition?: string | undefined
  region: string
  account: string
  caCertificate: string
}
export type CacertArn = `arn:${string}:iot:${string}:${string}:cacert/${string}`
export function cacertArn(parameters: CacertArnParameters): CacertArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:cacert/${parameters.caCertificate}`
}

export interface StreamArnParameters {
  partition?: string | undefined
  region: string
  account: string
  streamId: string
}
export type StreamArn = `arn:${string}:iot:${string}:${string}:stream/${string}`
export function streamArn(parameters: StreamArnParameters): StreamArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:stream/${parameters.streamId}`
}

export interface OtaupdateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  otaUpdateId: string
}
export type OtaupdateArn = `arn:${string}:iot:${string}:${string}:otaupdate/${string}`
export function otaupdateArn(parameters: OtaupdateArnParameters): OtaupdateArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:otaupdate/${parameters.otaUpdateId}`
}

export interface ScheduledauditArnParameters {
  partition?: string | undefined
  region: string
  account: string
  scheduleName: string
}
export type ScheduledauditArn = `arn:${string}:iot:${string}:${string}:scheduledaudit/${string}`
export function scheduledauditArn(parameters: ScheduledauditArnParameters): ScheduledauditArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:scheduledaudit/${parameters.scheduleName}`
}

export interface MitigationactionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  mitigationActionName: string
}
export type MitigationactionArn = `arn:${string}:iot:${string}:${string}:mitigationaction/${string}`
export function mitigationactionArn(parameters: MitigationactionArnParameters): MitigationactionArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:mitigationaction/${parameters.mitigationActionName}`
}

export interface SecurityprofileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  securityProfileName: string
}
export type SecurityprofileArn = `arn:${string}:iot:${string}:${string}:securityprofile/${string}`
export function securityprofileArn(parameters: SecurityprofileArnParameters): SecurityprofileArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:securityprofile/${parameters.securityProfileName}`
}

export interface CustommetricArnParameters {
  partition?: string | undefined
  region: string
  account: string
  metricName: string
}
export type CustommetricArn = `arn:${string}:iot:${string}:${string}:custommetric/${string}`
export function custommetricArn(parameters: CustommetricArnParameters): CustommetricArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:custommetric/${parameters.metricName}`
}

export interface DimensionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dimensionName: string
}
export type DimensionArn = `arn:${string}:iot:${string}:${string}:dimension/${string}`
export function dimensionArn(parameters: DimensionArnParameters): DimensionArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:dimension/${parameters.dimensionName}`
}

export interface RuleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  ruleName: string
}
export type RuleArn = `arn:${string}:iot:${string}:${string}:rule/${string}`
export function ruleArn(parameters: RuleArnParameters): RuleArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:rule/${parameters.ruleName}`
}

export interface DestinationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  destinationType: string
  uuid: string
}
export type DestinationArn = `arn:${string}:iot:${string}:${string}:destination/${string}/${string}`
export function destinationArn(parameters: DestinationArnParameters): DestinationArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:destination/${parameters.destinationType}/${parameters.uuid}`
}

export interface ProvisioningtemplateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  provisioningTemplate: string
}
export type ProvisioningtemplateArn = `arn:${string}:iot:${string}:${string}:provisioningtemplate/${string}`
export function provisioningtemplateArn(parameters: ProvisioningtemplateArnParameters): ProvisioningtemplateArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:provisioningtemplate/${parameters.provisioningTemplate}`
}

export interface DomainconfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainConfigurationName: string
  id: string
}
export type DomainconfigurationArn = `arn:${string}:iot:${string}:${string}:domainconfiguration/${string}/${string}`
export function domainconfigurationArn(parameters: DomainconfigurationArnParameters): DomainconfigurationArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:domainconfiguration/${parameters.domainConfigurationName}/${parameters.id}`
}

export interface PackageArnParameters {
  partition?: string | undefined
  region: string
  account: string
  packageName: string
}
export type PackageArn = `arn:${string}:iot:${string}:${string}:package/${string}`
export function packageArn(parameters: PackageArnParameters): PackageArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:package/${parameters.packageName}`
}

export interface PackageversionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  packageName: string
  versionName: string
}
export type PackageversionArn = `arn:${string}:iot:${string}:${string}:package/${string}/version/${string}`
export function packageversionArn(parameters: PackageversionArnParameters): PackageversionArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:package/${parameters.packageName}/version/${parameters.versionName}`
}

export interface CertificateproviderArnParameters {
  partition?: string | undefined
  region: string
  account: string
  certificateProviderName: string
}
export type CertificateproviderArn = `arn:${string}:iot:${string}:${string}:certificateprovider/${string}`
export function certificateproviderArn(parameters: CertificateproviderArnParameters): CertificateproviderArn {
  return `arn:${parameters.partition ?? ''}:iot:${parameters.region}:${parameters.account}:certificateprovider/${parameters.certificateProviderName}`
}