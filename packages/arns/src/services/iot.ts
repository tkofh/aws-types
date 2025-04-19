import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ClientArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clientId: string
}
class ClientArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'client', `arn:${string}:iot:${string}:${string}:client/${string}`> {
  readonly [ArnResourceTypeBrand] = 'client' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clientId: string
  constructor(parameters: ClientArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clientId = parameters.clientId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:client/${this.clientId}` as const
  }
}
export type { ClientArn }
export function clientArn<Partition extends ArnPartition = 'aws'>(parameters: ClientArnParameters<Partition>) {
  return new ClientArn<Partition>(parameters)
}

export interface IndexArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexName: string
}
class IndexArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'index', `arn:${string}:iot:${string}:${string}:index/${string}`> {
  readonly [ArnResourceTypeBrand] = 'index' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexName: string
  constructor(parameters: IndexArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.indexName = parameters.indexName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:index/${this.indexName}` as const
  }
}
export type { IndexArn }
export function indexArn<Partition extends ArnPartition = 'aws'>(parameters: IndexArnParameters<Partition>) {
  return new IndexArn<Partition>(parameters)
}

export interface FleetmetricArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fleetMetricName: string
}
class FleetmetricArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'fleetmetric', `arn:${string}:iot:${string}:${string}:fleetmetric/${string}`> {
  readonly [ArnResourceTypeBrand] = 'fleetmetric' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fleetMetricName: string
  constructor(parameters: FleetmetricArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.fleetMetricName = parameters.fleetMetricName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:fleetmetric/${this.fleetMetricName}` as const
  }
}
export type { FleetmetricArn }
export function fleetmetricArn<Partition extends ArnPartition = 'aws'>(parameters: FleetmetricArnParameters<Partition>) {
  return new FleetmetricArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'job', `arn:${string}:iot:${string}:${string}:job/${string}`> {
  readonly [ArnResourceTypeBrand] = 'job' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobId = parameters.jobId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:job/${this.jobId}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(parameters: JobArnParameters<Partition>) {
  return new JobArn<Partition>(parameters)
}

export interface JobtemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobTemplateId: string
}
class JobtemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'jobtemplate', `arn:${string}:iot:${string}:${string}:jobtemplate/${string}`> {
  readonly [ArnResourceTypeBrand] = 'jobtemplate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobTemplateId: string
  constructor(parameters: JobtemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.jobTemplateId = parameters.jobTemplateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:jobtemplate/${this.jobTemplateId}` as const
  }
}
export type { JobtemplateArn }
export function jobtemplateArn<Partition extends ArnPartition = 'aws'>(parameters: JobtemplateArnParameters<Partition>) {
  return new JobtemplateArn<Partition>(parameters)
}

export interface TunnelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tunnelId: string
}
class TunnelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'tunnel', `arn:${string}:iot:${string}:${string}:tunnel/${string}`> {
  readonly [ArnResourceTypeBrand] = 'tunnel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tunnelId: string
  constructor(parameters: TunnelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.tunnelId = parameters.tunnelId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:tunnel/${this.tunnelId}` as const
  }
}
export type { TunnelArn }
export function tunnelArn<Partition extends ArnPartition = 'aws'>(parameters: TunnelArnParameters<Partition>) {
  return new TunnelArn<Partition>(parameters)
}

export interface ThingArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingName: string
}
class ThingArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'thing', `arn:${string}:iot:${string}:${string}:thing/${string}`> {
  readonly [ArnResourceTypeBrand] = 'thing' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingName: string
  constructor(parameters: ThingArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.thingName = parameters.thingName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:thing/${this.thingName}` as const
  }
}
export type { ThingArn }
export function thingArn<Partition extends ArnPartition = 'aws'>(parameters: ThingArnParameters<Partition>) {
  return new ThingArn<Partition>(parameters)
}

export interface ThinggroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingGroupName: string
}
class ThinggroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'thinggroup', `arn:${string}:iot:${string}:${string}:thinggroup/${string}`> {
  readonly [ArnResourceTypeBrand] = 'thinggroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingGroupName: string
  constructor(parameters: ThinggroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.thingGroupName = parameters.thingGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:thinggroup/${this.thingGroupName}` as const
  }
}
export type { ThinggroupArn }
export function thinggroupArn<Partition extends ArnPartition = 'aws'>(parameters: ThinggroupArnParameters<Partition>) {
  return new ThinggroupArn<Partition>(parameters)
}

export interface BillinggroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly billingGroupName: string
}
class BillinggroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'billinggroup', `arn:${string}:iot:${string}:${string}:billinggroup/${string}`> {
  readonly [ArnResourceTypeBrand] = 'billinggroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly billingGroupName: string
  constructor(parameters: BillinggroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.billingGroupName = parameters.billingGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:billinggroup/${this.billingGroupName}` as const
  }
}
export type { BillinggroupArn }
export function billinggroupArn<Partition extends ArnPartition = 'aws'>(parameters: BillinggroupArnParameters<Partition>) {
  return new BillinggroupArn<Partition>(parameters)
}

export interface DynamicthinggroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingGroupName: string
}
class DynamicthinggroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'dynamicthinggroup', `arn:${string}:iot:${string}:${string}:thinggroup/${string}`> {
  readonly [ArnResourceTypeBrand] = 'dynamicthinggroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingGroupName: string
  constructor(parameters: DynamicthinggroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.thingGroupName = parameters.thingGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:thinggroup/${this.thingGroupName}` as const
  }
}
export type { DynamicthinggroupArn }
export function dynamicthinggroupArn<Partition extends ArnPartition = 'aws'>(parameters: DynamicthinggroupArnParameters<Partition>) {
  return new DynamicthinggroupArn<Partition>(parameters)
}

export interface ThingtypeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingTypeName: string
}
class ThingtypeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'thingtype', `arn:${string}:iot:${string}:${string}:thingtype/${string}`> {
  readonly [ArnResourceTypeBrand] = 'thingtype' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingTypeName: string
  constructor(parameters: ThingtypeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.thingTypeName = parameters.thingTypeName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:thingtype/${this.thingTypeName}` as const
  }
}
export type { ThingtypeArn }
export function thingtypeArn<Partition extends ArnPartition = 'aws'>(parameters: ThingtypeArnParameters<Partition>) {
  return new ThingtypeArn<Partition>(parameters)
}

export interface TopicArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly topicName: string
}
class TopicArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'topic', `arn:${string}:iot:${string}:${string}:topic/${string}`> {
  readonly [ArnResourceTypeBrand] = 'topic' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly topicName: string
  constructor(parameters: TopicArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.topicName = parameters.topicName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:topic/${this.topicName}` as const
  }
}
export type { TopicArn }
export function topicArn<Partition extends ArnPartition = 'aws'>(parameters: TopicArnParameters<Partition>) {
  return new TopicArn<Partition>(parameters)
}

export interface TopicfilterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly topicFilter: string
}
class TopicfilterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'topicfilter', `arn:${string}:iot:${string}:${string}:topicfilter/${string}`> {
  readonly [ArnResourceTypeBrand] = 'topicfilter' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly topicFilter: string
  constructor(parameters: TopicfilterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.topicFilter = parameters.topicFilter
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:topicfilter/${this.topicFilter}` as const
  }
}
export type { TopicfilterArn }
export function topicfilterArn<Partition extends ArnPartition = 'aws'>(parameters: TopicfilterArnParameters<Partition>) {
  return new TopicfilterArn<Partition>(parameters)
}

export interface RolealiasArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly roleAlias: string
}
class RolealiasArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'rolealias', `arn:${string}:iot:${string}:${string}:rolealias/${string}`> {
  readonly [ArnResourceTypeBrand] = 'rolealias' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly roleAlias: string
  constructor(parameters: RolealiasArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.roleAlias = parameters.roleAlias
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:rolealias/${this.roleAlias}` as const
  }
}
export type { RolealiasArn }
export function rolealiasArn<Partition extends ArnPartition = 'aws'>(parameters: RolealiasArnParameters<Partition>) {
  return new RolealiasArn<Partition>(parameters)
}

export interface AuthorizerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly authorizerName: string
}
class AuthorizerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'authorizer', `arn:${string}:iot:${string}:${string}:authorizer/${string}`> {
  readonly [ArnResourceTypeBrand] = 'authorizer' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly authorizerName: string
  constructor(parameters: AuthorizerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.authorizerName = parameters.authorizerName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:authorizer/${this.authorizerName}` as const
  }
}
export type { AuthorizerArn }
export function authorizerArn<Partition extends ArnPartition = 'aws'>(parameters: AuthorizerArnParameters<Partition>) {
  return new AuthorizerArn<Partition>(parameters)
}

export interface PolicyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly policyName: string
}
class PolicyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'policy', `arn:${string}:iot:${string}:${string}:policy/${string}`> {
  readonly [ArnResourceTypeBrand] = 'policy' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly policyName: string
  constructor(parameters: PolicyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.policyName = parameters.policyName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:policy/${this.policyName}` as const
  }
}
export type { PolicyArn }
export function policyArn<Partition extends ArnPartition = 'aws'>(parameters: PolicyArnParameters<Partition>) {
  return new PolicyArn<Partition>(parameters)
}

export interface CertArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificate: string
}
class CertArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'cert', `arn:${string}:iot:${string}:${string}:cert/${string}`> {
  readonly [ArnResourceTypeBrand] = 'cert' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificate: string
  constructor(parameters: CertArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.certificate = parameters.certificate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:cert/${this.certificate}` as const
  }
}
export type { CertArn }
export function certArn<Partition extends ArnPartition = 'aws'>(parameters: CertArnParameters<Partition>) {
  return new CertArn<Partition>(parameters)
}

export interface CacertArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly caCertificate: string
}
class CacertArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'cacert', `arn:${string}:iot:${string}:${string}:cacert/${string}`> {
  readonly [ArnResourceTypeBrand] = 'cacert' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly caCertificate: string
  constructor(parameters: CacertArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.caCertificate = parameters.caCertificate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:cacert/${this.caCertificate}` as const
  }
}
export type { CacertArn }
export function cacertArn<Partition extends ArnPartition = 'aws'>(parameters: CacertArnParameters<Partition>) {
  return new CacertArn<Partition>(parameters)
}

export interface StreamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamId: string
}
class StreamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'stream', `arn:${string}:iot:${string}:${string}:stream/${string}`> {
  readonly [ArnResourceTypeBrand] = 'stream' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamId: string
  constructor(parameters: StreamArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.streamId = parameters.streamId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:stream/${this.streamId}` as const
  }
}
export type { StreamArn }
export function streamArn<Partition extends ArnPartition = 'aws'>(parameters: StreamArnParameters<Partition>) {
  return new StreamArn<Partition>(parameters)
}

export interface OtaupdateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly otaUpdateId: string
}
class OtaupdateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'otaupdate', `arn:${string}:iot:${string}:${string}:otaupdate/${string}`> {
  readonly [ArnResourceTypeBrand] = 'otaupdate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly otaUpdateId: string
  constructor(parameters: OtaupdateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.otaUpdateId = parameters.otaUpdateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:otaupdate/${this.otaUpdateId}` as const
  }
}
export type { OtaupdateArn }
export function otaupdateArn<Partition extends ArnPartition = 'aws'>(parameters: OtaupdateArnParameters<Partition>) {
  return new OtaupdateArn<Partition>(parameters)
}

export interface ScheduledauditArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scheduleName: string
}
class ScheduledauditArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'scheduledaudit', `arn:${string}:iot:${string}:${string}:scheduledaudit/${string}`> {
  readonly [ArnResourceTypeBrand] = 'scheduledaudit' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scheduleName: string
  constructor(parameters: ScheduledauditArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.scheduleName = parameters.scheduleName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:scheduledaudit/${this.scheduleName}` as const
  }
}
export type { ScheduledauditArn }
export function scheduledauditArn<Partition extends ArnPartition = 'aws'>(parameters: ScheduledauditArnParameters<Partition>) {
  return new ScheduledauditArn<Partition>(parameters)
}

export interface MitigationactionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly mitigationActionName: string
}
class MitigationactionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'mitigationaction', `arn:${string}:iot:${string}:${string}:mitigationaction/${string}`> {
  readonly [ArnResourceTypeBrand] = 'mitigationaction' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly mitigationActionName: string
  constructor(parameters: MitigationactionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.mitigationActionName = parameters.mitigationActionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:mitigationaction/${this.mitigationActionName}` as const
  }
}
export type { MitigationactionArn }
export function mitigationactionArn<Partition extends ArnPartition = 'aws'>(parameters: MitigationactionArnParameters<Partition>) {
  return new MitigationactionArn<Partition>(parameters)
}

export interface SecurityprofileArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityProfileName: string
}
class SecurityprofileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'securityprofile', `arn:${string}:iot:${string}:${string}:securityprofile/${string}`> {
  readonly [ArnResourceTypeBrand] = 'securityprofile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityProfileName: string
  constructor(parameters: SecurityprofileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.securityProfileName = parameters.securityProfileName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:securityprofile/${this.securityProfileName}` as const
  }
}
export type { SecurityprofileArn }
export function securityprofileArn<Partition extends ArnPartition = 'aws'>(parameters: SecurityprofileArnParameters<Partition>) {
  return new SecurityprofileArn<Partition>(parameters)
}

export interface CustommetricArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly metricName: string
}
class CustommetricArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'custommetric', `arn:${string}:iot:${string}:${string}:custommetric/${string}`> {
  readonly [ArnResourceTypeBrand] = 'custommetric' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly metricName: string
  constructor(parameters: CustommetricArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.metricName = parameters.metricName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:custommetric/${this.metricName}` as const
  }
}
export type { CustommetricArn }
export function custommetricArn<Partition extends ArnPartition = 'aws'>(parameters: CustommetricArnParameters<Partition>) {
  return new CustommetricArn<Partition>(parameters)
}

export interface DimensionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dimensionName: string
}
class DimensionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'dimension', `arn:${string}:iot:${string}:${string}:dimension/${string}`> {
  readonly [ArnResourceTypeBrand] = 'dimension' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dimensionName: string
  constructor(parameters: DimensionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dimensionName = parameters.dimensionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:dimension/${this.dimensionName}` as const
  }
}
export type { DimensionArn }
export function dimensionArn<Partition extends ArnPartition = 'aws'>(parameters: DimensionArnParameters<Partition>) {
  return new DimensionArn<Partition>(parameters)
}

export interface RuleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ruleName: string
}
class RuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'rule', `arn:${string}:iot:${string}:${string}:rule/${string}`> {
  readonly [ArnResourceTypeBrand] = 'rule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ruleName: string
  constructor(parameters: RuleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.ruleName = parameters.ruleName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:rule/${this.ruleName}` as const
  }
}
export type { RuleArn }
export function ruleArn<Partition extends ArnPartition = 'aws'>(parameters: RuleArnParameters<Partition>) {
  return new RuleArn<Partition>(parameters)
}

export interface DestinationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly destinationType: string
  readonly uuid: string
}
class DestinationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'destination', `arn:${string}:iot:${string}:${string}:destination/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'destination' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly destinationType: string
  readonly uuid: string
  constructor(parameters: DestinationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.destinationType = parameters.destinationType
    this.uuid = parameters.uuid
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:destination/${this.destinationType}/${this.uuid}` as const
  }
}
export type { DestinationArn }
export function destinationArn<Partition extends ArnPartition = 'aws'>(parameters: DestinationArnParameters<Partition>) {
  return new DestinationArn<Partition>(parameters)
}

export interface ProvisioningtemplateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly provisioningTemplate: string
}
class ProvisioningtemplateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'provisioningtemplate', `arn:${string}:iot:${string}:${string}:provisioningtemplate/${string}`> {
  readonly [ArnResourceTypeBrand] = 'provisioningtemplate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly provisioningTemplate: string
  constructor(parameters: ProvisioningtemplateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.provisioningTemplate = parameters.provisioningTemplate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:provisioningtemplate/${this.provisioningTemplate}` as const
  }
}
export type { ProvisioningtemplateArn }
export function provisioningtemplateArn<Partition extends ArnPartition = 'aws'>(parameters: ProvisioningtemplateArnParameters<Partition>) {
  return new ProvisioningtemplateArn<Partition>(parameters)
}

export interface DomainconfigurationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainConfigurationName: string
  readonly id: string
}
class DomainconfigurationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'domainconfiguration', `arn:${string}:iot:${string}:${string}:domainconfiguration/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'domainconfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainConfigurationName: string
  readonly id: string
  constructor(parameters: DomainconfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainConfigurationName = parameters.domainConfigurationName
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:domainconfiguration/${this.domainConfigurationName}/${this.id}` as const
  }
}
export type { DomainconfigurationArn }
export function domainconfigurationArn<Partition extends ArnPartition = 'aws'>(parameters: DomainconfigurationArnParameters<Partition>) {
  return new DomainconfigurationArn<Partition>(parameters)
}

export interface PackageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly packageName: string
}
class PackageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'package', `arn:${string}:iot:${string}:${string}:package/${string}`> {
  readonly [ArnResourceTypeBrand] = 'package' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly packageName: string
  constructor(parameters: PackageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.packageName = parameters.packageName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:package/${this.packageName}` as const
  }
}
export type { PackageArn }
export function packageArn<Partition extends ArnPartition = 'aws'>(parameters: PackageArnParameters<Partition>) {
  return new PackageArn<Partition>(parameters)
}

export interface PackageversionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly packageName: string
  readonly versionName: string
}
class PackageversionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'packageversion', `arn:${string}:iot:${string}:${string}:package/${string}/version/${string}`> {
  readonly [ArnResourceTypeBrand] = 'packageversion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly packageName: string
  readonly versionName: string
  constructor(parameters: PackageversionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.packageName = parameters.packageName
    this.versionName = parameters.versionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:package/${this.packageName}/version/${this.versionName}` as const
  }
}
export type { PackageversionArn }
export function packageversionArn<Partition extends ArnPartition = 'aws'>(parameters: PackageversionArnParameters<Partition>) {
  return new PackageversionArn<Partition>(parameters)
}

export interface CertificateproviderArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificateProviderName: string
}
class CertificateproviderArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'certificateprovider', `arn:${string}:iot:${string}:${string}:certificateprovider/${string}`> {
  readonly [ArnResourceTypeBrand] = 'certificateprovider' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificateProviderName: string
  constructor(parameters: CertificateproviderArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.certificateProviderName = parameters.certificateProviderName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:certificateprovider/${this.certificateProviderName}` as const
  }
}
export type { CertificateproviderArn }
export function certificateproviderArn<Partition extends ArnPartition = 'aws'>(parameters: CertificateproviderArnParameters<Partition>) {
  return new CertificateproviderArn<Partition>(parameters)
}