import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ClientArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clientId: string
}
class ClientArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'client',
  `arn:${string}:iot:${string}:${string}:client/${string}`
> {
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
export function clientArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClientArnParameters<Partition>,
) {
  return new ClientArn<Partition>(parameters)
}

export interface IndexArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly indexName: string
}
class IndexArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'index',
  `arn:${string}:iot:${string}:${string}:index/${string}`
> {
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
export function indexArn<Partition extends ArnPartition = 'aws'>(
  parameters: IndexArnParameters<Partition>,
) {
  return new IndexArn<Partition>(parameters)
}

export interface FleetMetricArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fleetMetricName: string
}
class FleetMetricArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'fleetmetric',
  `arn:${string}:iot:${string}:${string}:fleetmetric/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'fleetmetric' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly fleetMetricName: string
  constructor(parameters: FleetMetricArnParameters<Partition>) {
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
export type { FleetMetricArn }
export function fleetMetricArn<Partition extends ArnPartition = 'aws'>(
  parameters: FleetMetricArnParameters<Partition>,
) {
  return new FleetMetricArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobId: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'job',
  `arn:${string}:iot:${string}:${string}:job/${string}`
> {
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
export function jobArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobArnParameters<Partition>,
) {
  return new JobArn<Partition>(parameters)
}

export interface JobTemplateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobTemplateId: string
}
class JobTemplateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'jobtemplate',
  `arn:${string}:iot:${string}:${string}:jobtemplate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'jobtemplate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly jobTemplateId: string
  constructor(parameters: JobTemplateArnParameters<Partition>) {
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
export type { JobTemplateArn }
export function jobTemplateArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobTemplateArnParameters<Partition>,
) {
  return new JobTemplateArn<Partition>(parameters)
}

export interface TunnelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tunnelId: string
}
class TunnelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'tunnel',
  `arn:${string}:iot:${string}:${string}:tunnel/${string}`
> {
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
export function tunnelArn<Partition extends ArnPartition = 'aws'>(
  parameters: TunnelArnParameters<Partition>,
) {
  return new TunnelArn<Partition>(parameters)
}

export interface ThingArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingName: string
}
class ThingArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'thing',
  `arn:${string}:iot:${string}:${string}:thing/${string}`
> {
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
export function thingArn<Partition extends ArnPartition = 'aws'>(
  parameters: ThingArnParameters<Partition>,
) {
  return new ThingArn<Partition>(parameters)
}

export interface ThingGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingGroupName: string
}
class ThingGroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'thinggroup',
  `arn:${string}:iot:${string}:${string}:thinggroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'thinggroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingGroupName: string
  constructor(parameters: ThingGroupArnParameters<Partition>) {
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
export type { ThingGroupArn }
export function thingGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: ThingGroupArnParameters<Partition>,
) {
  return new ThingGroupArn<Partition>(parameters)
}

export interface BillingGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly billingGroupName: string
}
class BillingGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'billinggroup',
  `arn:${string}:iot:${string}:${string}:billinggroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'billinggroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly billingGroupName: string
  constructor(parameters: BillingGroupArnParameters<Partition>) {
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
export type { BillingGroupArn }
export function billingGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: BillingGroupArnParameters<Partition>,
) {
  return new BillingGroupArn<Partition>(parameters)
}

export interface DynamicThingGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingGroupName: string
}
class DynamicThingGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'dynamicthinggroup',
  `arn:${string}:iot:${string}:${string}:thinggroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dynamicthinggroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingGroupName: string
  constructor(parameters: DynamicThingGroupArnParameters<Partition>) {
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
export type { DynamicThingGroupArn }
export function dynamicThingGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: DynamicThingGroupArnParameters<Partition>,
) {
  return new DynamicThingGroupArn<Partition>(parameters)
}

export interface ThingTypeArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingTypeName: string
}
class ThingTypeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'thingtype',
  `arn:${string}:iot:${string}:${string}:thingtype/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'thingtype' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly thingTypeName: string
  constructor(parameters: ThingTypeArnParameters<Partition>) {
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
export type { ThingTypeArn }
export function thingTypeArn<Partition extends ArnPartition = 'aws'>(
  parameters: ThingTypeArnParameters<Partition>,
) {
  return new ThingTypeArn<Partition>(parameters)
}

export interface TopicArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly topicName: string
}
class TopicArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'topic',
  `arn:${string}:iot:${string}:${string}:topic/${string}`
> {
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
export function topicArn<Partition extends ArnPartition = 'aws'>(
  parameters: TopicArnParameters<Partition>,
) {
  return new TopicArn<Partition>(parameters)
}

export interface TopicFilterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly topicFilter: string
}
class TopicFilterArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'topicfilter',
  `arn:${string}:iot:${string}:${string}:topicfilter/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'topicfilter' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly topicFilter: string
  constructor(parameters: TopicFilterArnParameters<Partition>) {
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
export type { TopicFilterArn }
export function topicFilterArn<Partition extends ArnPartition = 'aws'>(
  parameters: TopicFilterArnParameters<Partition>,
) {
  return new TopicFilterArn<Partition>(parameters)
}

export interface RoleAliasArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly roleAlias: string
}
class RoleAliasArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'rolealias',
  `arn:${string}:iot:${string}:${string}:rolealias/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rolealias' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly roleAlias: string
  constructor(parameters: RoleAliasArnParameters<Partition>) {
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
export type { RoleAliasArn }
export function roleAliasArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoleAliasArnParameters<Partition>,
) {
  return new RoleAliasArn<Partition>(parameters)
}

export interface AuthorizerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly authorizerName: string
}
class AuthorizerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'authorizer',
  `arn:${string}:iot:${string}:${string}:authorizer/${string}`
> {
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
export function authorizerArn<Partition extends ArnPartition = 'aws'>(
  parameters: AuthorizerArnParameters<Partition>,
) {
  return new AuthorizerArn<Partition>(parameters)
}

export interface PolicyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly policyName: string
}
class PolicyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'policy',
  `arn:${string}:iot:${string}:${string}:policy/${string}`
> {
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
export function policyArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyArnParameters<Partition>,
) {
  return new PolicyArn<Partition>(parameters)
}

export interface CertArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificate: string
}
class CertArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cert',
  `arn:${string}:iot:${string}:${string}:cert/${string}`
> {
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
export function certArn<Partition extends ArnPartition = 'aws'>(
  parameters: CertArnParameters<Partition>,
) {
  return new CertArn<Partition>(parameters)
}

export interface CaCertArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly caCertificate: string
}
class CaCertArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cacert',
  `arn:${string}:iot:${string}:${string}:cacert/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cacert' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly caCertificate: string
  constructor(parameters: CaCertArnParameters<Partition>) {
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
export type { CaCertArn }
export function caCertArn<Partition extends ArnPartition = 'aws'>(
  parameters: CaCertArnParameters<Partition>,
) {
  return new CaCertArn<Partition>(parameters)
}

export interface StreamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly streamId: string
}
class StreamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'stream',
  `arn:${string}:iot:${string}:${string}:stream/${string}`
> {
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
export function streamArn<Partition extends ArnPartition = 'aws'>(
  parameters: StreamArnParameters<Partition>,
) {
  return new StreamArn<Partition>(parameters)
}

export interface OtaUpdateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly otaUpdateId: string
}
class OtaUpdateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'otaupdate',
  `arn:${string}:iot:${string}:${string}:otaupdate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'otaupdate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly otaUpdateId: string
  constructor(parameters: OtaUpdateArnParameters<Partition>) {
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
export type { OtaUpdateArn }
export function otaUpdateArn<Partition extends ArnPartition = 'aws'>(
  parameters: OtaUpdateArnParameters<Partition>,
) {
  return new OtaUpdateArn<Partition>(parameters)
}

export interface ScheduledAuditArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scheduleName: string
}
class ScheduledAuditArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'scheduledaudit',
  `arn:${string}:iot:${string}:${string}:scheduledaudit/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'scheduledaudit' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scheduleName: string
  constructor(parameters: ScheduledAuditArnParameters<Partition>) {
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
export type { ScheduledAuditArn }
export function scheduledAuditArn<Partition extends ArnPartition = 'aws'>(
  parameters: ScheduledAuditArnParameters<Partition>,
) {
  return new ScheduledAuditArn<Partition>(parameters)
}

export interface MitigationActionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly mitigationActionName: string
}
class MitigationActionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'mitigationaction',
  `arn:${string}:iot:${string}:${string}:mitigationaction/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mitigationaction' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly mitigationActionName: string
  constructor(parameters: MitigationActionArnParameters<Partition>) {
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
export type { MitigationActionArn }
export function mitigationActionArn<Partition extends ArnPartition = 'aws'>(
  parameters: MitigationActionArnParameters<Partition>,
) {
  return new MitigationActionArn<Partition>(parameters)
}

export interface SecurityProfileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityProfileName: string
}
class SecurityProfileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'securityprofile',
  `arn:${string}:iot:${string}:${string}:securityprofile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'securityprofile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityProfileName: string
  constructor(parameters: SecurityProfileArnParameters<Partition>) {
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
export type { SecurityProfileArn }
export function securityProfileArn<Partition extends ArnPartition = 'aws'>(
  parameters: SecurityProfileArnParameters<Partition>,
) {
  return new SecurityProfileArn<Partition>(parameters)
}

export interface CustomMetricArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly metricName: string
}
class CustomMetricArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'custommetric',
  `arn:${string}:iot:${string}:${string}:custommetric/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'custommetric' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly metricName: string
  constructor(parameters: CustomMetricArnParameters<Partition>) {
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
export type { CustomMetricArn }
export function customMetricArn<Partition extends ArnPartition = 'aws'>(
  parameters: CustomMetricArnParameters<Partition>,
) {
  return new CustomMetricArn<Partition>(parameters)
}

export interface DimensionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dimensionName: string
}
class DimensionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dimension',
  `arn:${string}:iot:${string}:${string}:dimension/${string}`
> {
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
export function dimensionArn<Partition extends ArnPartition = 'aws'>(
  parameters: DimensionArnParameters<Partition>,
) {
  return new DimensionArn<Partition>(parameters)
}

export interface RuleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly ruleName: string
}
class RuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'rule',
  `arn:${string}:iot:${string}:${string}:rule/${string}`
> {
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
export function ruleArn<Partition extends ArnPartition = 'aws'>(
  parameters: RuleArnParameters<Partition>,
) {
  return new RuleArn<Partition>(parameters)
}

export interface DestinationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly destinationType: string
  readonly uuId: string
}
class DestinationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'destination',
  `arn:${string}:iot:${string}:${string}:destination/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'destination' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly destinationType: string
  readonly uuId: string
  constructor(parameters: DestinationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.destinationType = parameters.destinationType
    this.uuId = parameters.uuId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:destination/${this.destinationType}/${this.uuId}` as const
  }
}
export type { DestinationArn }
export function destinationArn<Partition extends ArnPartition = 'aws'>(
  parameters: DestinationArnParameters<Partition>,
) {
  return new DestinationArn<Partition>(parameters)
}

export interface ProvisioningTemplateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly provisioningTemplate: string
}
class ProvisioningTemplateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'provisioningtemplate',
  `arn:${string}:iot:${string}:${string}:provisioningtemplate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'provisioningtemplate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly provisioningTemplate: string
  constructor(parameters: ProvisioningTemplateArnParameters<Partition>) {
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
export type { ProvisioningTemplateArn }
export function provisioningTemplateArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProvisioningTemplateArnParameters<Partition>,
) {
  return new ProvisioningTemplateArn<Partition>(parameters)
}

export interface DomainConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainConfigurationName: string
  readonly id: string
}
class DomainConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'domainconfiguration',
  `arn:${string}:iot:${string}:${string}:domainconfiguration/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'domainconfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainConfigurationName: string
  readonly id: string
  constructor(parameters: DomainConfigurationArnParameters<Partition>) {
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
export type { DomainConfigurationArn }
export function domainConfigurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainConfigurationArnParameters<Partition>,
) {
  return new DomainConfigurationArn<Partition>(parameters)
}

export interface PackageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly packageName: string
}
class PackageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'package',
  `arn:${string}:iot:${string}:${string}:package/${string}`
> {
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
export function packageArn<Partition extends ArnPartition = 'aws'>(
  parameters: PackageArnParameters<Partition>,
) {
  return new PackageArn<Partition>(parameters)
}

export interface PackageVersionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly packageName: string
  readonly versionName: string
}
class PackageVersionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'packageversion',
  `arn:${string}:iot:${string}:${string}:package/${string}/version/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'packageversion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly packageName: string
  readonly versionName: string
  constructor(parameters: PackageVersionArnParameters<Partition>) {
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
export type { PackageVersionArn }
export function packageVersionArn<Partition extends ArnPartition = 'aws'>(
  parameters: PackageVersionArnParameters<Partition>,
) {
  return new PackageVersionArn<Partition>(parameters)
}

export interface CertificateProviderArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificateProviderName: string
}
class CertificateProviderArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'certificateprovider',
  `arn:${string}:iot:${string}:${string}:certificateprovider/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'certificateprovider' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificateProviderName: string
  constructor(parameters: CertificateProviderArnParameters<Partition>) {
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
export type { CertificateProviderArn }
export function certificateProviderArn<Partition extends ArnPartition = 'aws'>(
  parameters: CertificateProviderArnParameters<Partition>,
) {
  return new CertificateProviderArn<Partition>(parameters)
}
