import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ClientArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idClient: string
}
class ClientArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'client',
  `arn:${string}:iot:${string}:${string}:client/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'client' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idClient: string
  constructor(parameters: ClientArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idClient = parameters.idClient
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:client/${this.idClient}` as const
  }
}
export type { ClientArn }
export function clientArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClientArnParameters<Partition>,
) {
  return new ClientArn<Partition>(parameters)
}

export interface IndexArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameIndex: string
}
class IndexArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'index',
  `arn:${string}:iot:${string}:${string}:index/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'index' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameIndex: string
  constructor(parameters: IndexArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameIndex = parameters.nameIndex
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:index/${this.nameIndex}` as const
  }
}
export type { IndexArn }
export function indexArn<Partition extends ArnPartition = 'aws'>(
  parameters: IndexArnParameters<Partition>,
) {
  return new IndexArn<Partition>(parameters)
}

export interface MetricFleetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMetricFleet: string
}
class MetricFleetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'fleetmetric',
  `arn:${string}:iot:${string}:${string}:fleetmetric/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'fleetmetric' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMetricFleet: string
  constructor(parameters: MetricFleetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMetricFleet = parameters.nameMetricFleet
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:fleetmetric/${this.nameMetricFleet}` as const
  }
}
export type { MetricFleetArn }
export function metricFleetArn<Partition extends ArnPartition = 'aws'>(
  parameters: MetricFleetArnParameters<Partition>,
) {
  return new MetricFleetArn<Partition>(parameters)
}

export interface JobArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
}
class JobArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'job',
  `arn:${string}:iot:${string}:${string}:job/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'job' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idJob: string
  constructor(parameters: JobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idJob = parameters.idJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:job/${this.idJob}` as const
  }
}
export type { JobArn }
export function jobArn<Partition extends ArnPartition = 'aws'>(
  parameters: JobArnParameters<Partition>,
) {
  return new JobArn<Partition>(parameters)
}

export interface TemplateJobArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTemplateJob: string
}
class TemplateJobArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'jobtemplate',
  `arn:${string}:iot:${string}:${string}:jobtemplate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'jobtemplate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTemplateJob: string
  constructor(parameters: TemplateJobArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTemplateJob = parameters.idTemplateJob
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:jobtemplate/${this.idTemplateJob}` as const
  }
}
export type { TemplateJobArn }
export function templateJobArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateJobArnParameters<Partition>,
) {
  return new TemplateJobArn<Partition>(parameters)
}

export interface TunnelArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTunnel: string
}
class TunnelArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'tunnel',
  `arn:${string}:iot:${string}:${string}:tunnel/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'tunnel' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idTunnel: string
  constructor(parameters: TunnelArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idTunnel = parameters.idTunnel
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:tunnel/${this.idTunnel}` as const
  }
}
export type { TunnelArn }
export function tunnelArn<Partition extends ArnPartition = 'aws'>(
  parameters: TunnelArnParameters<Partition>,
) {
  return new TunnelArn<Partition>(parameters)
}

export interface ThingArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameThing: string
}
class ThingArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'thing',
  `arn:${string}:iot:${string}:${string}:thing/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'thing' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameThing: string
  constructor(parameters: ThingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameThing = parameters.nameThing
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:thing/${this.nameThing}` as const
  }
}
export type { ThingArn }
export function thingArn<Partition extends ArnPartition = 'aws'>(
  parameters: ThingArnParameters<Partition>,
) {
  return new ThingArn<Partition>(parameters)
}

export interface GroupThingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupThing: string
}
class GroupThingArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'thinggroup',
  `arn:${string}:iot:${string}:${string}:thinggroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'thinggroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupThing: string
  constructor(parameters: GroupThingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupThing = parameters.nameGroupThing
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:thinggroup/${this.nameGroupThing}` as const
  }
}
export type { GroupThingArn }
export function groupThingArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupThingArnParameters<Partition>,
) {
  return new GroupThingArn<Partition>(parameters)
}

export interface GroupBillingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupBilling: string
}
class GroupBillingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'billinggroup',
  `arn:${string}:iot:${string}:${string}:billinggroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'billinggroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupBilling: string
  constructor(parameters: GroupBillingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupBilling = parameters.nameGroupBilling
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:billinggroup/${this.nameGroupBilling}` as const
  }
}
export type { GroupBillingArn }
export function groupBillingArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupBillingArnParameters<Partition>,
) {
  return new GroupBillingArn<Partition>(parameters)
}

export interface GroupThingDynamicArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupThing: string
}
class GroupThingDynamicArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'dynamicthinggroup',
  `arn:${string}:iot:${string}:${string}:thinggroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dynamicthinggroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupThing: string
  constructor(parameters: GroupThingDynamicArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupThing = parameters.nameGroupThing
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:thinggroup/${this.nameGroupThing}` as const
  }
}
export type { GroupThingDynamicArn }
export function groupThingDynamicArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupThingDynamicArnParameters<Partition>,
) {
  return new GroupThingDynamicArn<Partition>(parameters)
}

export interface TypeThingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTypeThing: string
}
class TypeThingArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'thingtype',
  `arn:${string}:iot:${string}:${string}:thingtype/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'thingtype' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTypeThing: string
  constructor(parameters: TypeThingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTypeThing = parameters.nameTypeThing
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:thingtype/${this.nameTypeThing}` as const
  }
}
export type { TypeThingArn }
export function typeThingArn<Partition extends ArnPartition = 'aws'>(
  parameters: TypeThingArnParameters<Partition>,
) {
  return new TypeThingArn<Partition>(parameters)
}

export interface TopicArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTopic: string
}
class TopicArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'topic',
  `arn:${string}:iot:${string}:${string}:topic/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'topic' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameTopic: string
  constructor(parameters: TopicArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameTopic = parameters.nameTopic
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:topic/${this.nameTopic}` as const
  }
}
export type { TopicArn }
export function topicArn<Partition extends ArnPartition = 'aws'>(
  parameters: TopicArnParameters<Partition>,
) {
  return new TopicArn<Partition>(parameters)
}

export interface FilterTopicArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly filterTopic: string
}
class FilterTopicArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'topicfilter',
  `arn:${string}:iot:${string}:${string}:topicfilter/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'topicfilter' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly filterTopic: string
  constructor(parameters: FilterTopicArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.filterTopic = parameters.filterTopic
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:topicfilter/${this.filterTopic}` as const
  }
}
export type { FilterTopicArn }
export function filterTopicArn<Partition extends ArnPartition = 'aws'>(
  parameters: FilterTopicArnParameters<Partition>,
) {
  return new FilterTopicArn<Partition>(parameters)
}

export interface AliasRoleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly aliasRole: string
}
class AliasRoleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'rolealias',
  `arn:${string}:iot:${string}:${string}:rolealias/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rolealias' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly aliasRole: string
  constructor(parameters: AliasRoleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.aliasRole = parameters.aliasRole
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:rolealias/${this.aliasRole}` as const
  }
}
export type { AliasRoleArn }
export function aliasRoleArn<Partition extends ArnPartition = 'aws'>(
  parameters: AliasRoleArnParameters<Partition>,
) {
  return new AliasRoleArn<Partition>(parameters)
}

export interface AuthorizerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameAuthorizer: string
}
class AuthorizerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'authorizer',
  `arn:${string}:iot:${string}:${string}:authorizer/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'authorizer' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameAuthorizer: string
  constructor(parameters: AuthorizerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameAuthorizer = parameters.nameAuthorizer
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:authorizer/${this.nameAuthorizer}` as const
  }
}
export type { AuthorizerArn }
export function authorizerArn<Partition extends ArnPartition = 'aws'>(
  parameters: AuthorizerArnParameters<Partition>,
) {
  return new AuthorizerArn<Partition>(parameters)
}

export interface PolicyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePolicy: string
}
class PolicyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'policy',
  `arn:${string}:iot:${string}:${string}:policy/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'policy' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePolicy: string
  constructor(parameters: PolicyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePolicy = parameters.namePolicy
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:policy/${this.namePolicy}` as const
  }
}
export type { PolicyArn }
export function policyArn<Partition extends ArnPartition = 'aws'>(
  parameters: PolicyArnParameters<Partition>,
) {
  return new PolicyArn<Partition>(parameters)
}

export interface CertArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly certificate: string
}
class CertArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cert',
  `arn:${string}:iot:${string}:${string}:cert/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cert' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly certificate: string
  constructor(parameters: CertArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
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

export interface CertCaArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly certificateCa: string
}
class CertCaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cacert',
  `arn:${string}:iot:${string}:${string}:cacert/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cacert' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly certificateCa: string
  constructor(parameters: CertCaArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.certificateCa = parameters.certificateCa
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:cacert/${this.certificateCa}` as const
  }
}
export type { CertCaArn }
export function certCaArn<Partition extends ArnPartition = 'aws'>(
  parameters: CertCaArnParameters<Partition>,
) {
  return new CertCaArn<Partition>(parameters)
}

export interface StreamArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStream: string
}
class StreamArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'stream',
  `arn:${string}:iot:${string}:${string}:stream/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'stream' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idStream: string
  constructor(parameters: StreamArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idStream = parameters.idStream
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:stream/${this.idStream}` as const
  }
}
export type { StreamArn }
export function streamArn<Partition extends ArnPartition = 'aws'>(
  parameters: StreamArnParameters<Partition>,
) {
  return new StreamArn<Partition>(parameters)
}

export interface UpdateOtaArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idUpdateOta: string
}
class UpdateOtaArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'otaupdate',
  `arn:${string}:iot:${string}:${string}:otaupdate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'otaupdate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idUpdateOta: string
  constructor(parameters: UpdateOtaArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idUpdateOta = parameters.idUpdateOta
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:otaupdate/${this.idUpdateOta}` as const
  }
}
export type { UpdateOtaArn }
export function updateOtaArn<Partition extends ArnPartition = 'aws'>(
  parameters: UpdateOtaArnParameters<Partition>,
) {
  return new UpdateOtaArn<Partition>(parameters)
}

export interface AuditScheduledArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSchedule: string
}
class AuditScheduledArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'scheduledaudit',
  `arn:${string}:iot:${string}:${string}:scheduledaudit/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'scheduledaudit' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSchedule: string
  constructor(parameters: AuditScheduledArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSchedule = parameters.nameSchedule
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:scheduledaudit/${this.nameSchedule}` as const
  }
}
export type { AuditScheduledArn }
export function auditScheduledArn<Partition extends ArnPartition = 'aws'>(
  parameters: AuditScheduledArnParameters<Partition>,
) {
  return new AuditScheduledArn<Partition>(parameters)
}

export interface ActionMitigationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameActionMitigation: string
}
class ActionMitigationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'mitigationaction',
  `arn:${string}:iot:${string}:${string}:mitigationaction/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'mitigationaction' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameActionMitigation: string
  constructor(parameters: ActionMitigationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameActionMitigation = parameters.nameActionMitigation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:mitigationaction/${this.nameActionMitigation}` as const
  }
}
export type { ActionMitigationArn }
export function actionMitigationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ActionMitigationArnParameters<Partition>,
) {
  return new ActionMitigationArn<Partition>(parameters)
}

export interface ProfileSecurityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProfileSecurity: string
}
class ProfileSecurityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'securityprofile',
  `arn:${string}:iot:${string}:${string}:securityprofile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'securityprofile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProfileSecurity: string
  constructor(parameters: ProfileSecurityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameProfileSecurity = parameters.nameProfileSecurity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:securityprofile/${this.nameProfileSecurity}` as const
  }
}
export type { ProfileSecurityArn }
export function profileSecurityArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileSecurityArnParameters<Partition>,
) {
  return new ProfileSecurityArn<Partition>(parameters)
}

export interface MetricCustomArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMetric: string
}
class MetricCustomArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'custommetric',
  `arn:${string}:iot:${string}:${string}:custommetric/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'custommetric' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameMetric: string
  constructor(parameters: MetricCustomArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameMetric = parameters.nameMetric
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:custommetric/${this.nameMetric}` as const
  }
}
export type { MetricCustomArn }
export function metricCustomArn<Partition extends ArnPartition = 'aws'>(
  parameters: MetricCustomArnParameters<Partition>,
) {
  return new MetricCustomArn<Partition>(parameters)
}

export interface DimensionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDimension: string
}
class DimensionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dimension',
  `arn:${string}:iot:${string}:${string}:dimension/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dimension' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDimension: string
  constructor(parameters: DimensionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDimension = parameters.nameDimension
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:dimension/${this.nameDimension}` as const
  }
}
export type { DimensionArn }
export function dimensionArn<Partition extends ArnPartition = 'aws'>(
  parameters: DimensionArnParameters<Partition>,
) {
  return new DimensionArn<Partition>(parameters)
}

export interface RuleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRule: string
}
class RuleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'rule',
  `arn:${string}:iot:${string}:${string}:rule/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRule: string
  constructor(parameters: RuleArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameRule = parameters.nameRule
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:rule/${this.nameRule}` as const
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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeDestination: string
  readonly idUu: string
}
class DestinationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'destination',
  `arn:${string}:iot:${string}:${string}:destination/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'destination' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly typeDestination: string
  readonly idUu: string
  constructor(parameters: DestinationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.typeDestination = parameters.typeDestination
    this.idUu = parameters.idUu
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:destination/${this.typeDestination}/${this.idUu}` as const
  }
}
export type { DestinationArn }
export function destinationArn<Partition extends ArnPartition = 'aws'>(
  parameters: DestinationArnParameters<Partition>,
) {
  return new DestinationArn<Partition>(parameters)
}

export interface TemplateProvisioningArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly templateProvisioning: string
}
class TemplateProvisioningArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'provisioningtemplate',
  `arn:${string}:iot:${string}:${string}:provisioningtemplate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'provisioningtemplate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly templateProvisioning: string
  constructor(parameters: TemplateProvisioningArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.templateProvisioning = parameters.templateProvisioning
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:provisioningtemplate/${this.templateProvisioning}` as const
  }
}
export type { TemplateProvisioningArn }
export function templateProvisioningArn<Partition extends ArnPartition = 'aws'>(
  parameters: TemplateProvisioningArnParameters<Partition>,
) {
  return new TemplateProvisioningArn<Partition>(parameters)
}

export interface ConfigurationDomainArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigurationDomain: string
  readonly id: string
}
class ConfigurationDomainArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'domainconfiguration',
  `arn:${string}:iot:${string}:${string}:domainconfiguration/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'domainconfiguration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameConfigurationDomain: string
  readonly id: string
  constructor(parameters: ConfigurationDomainArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameConfigurationDomain = parameters.nameConfigurationDomain
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:domainconfiguration/${this.nameConfigurationDomain}/${this.id}` as const
  }
}
export type { ConfigurationDomainArn }
export function configurationDomainArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationDomainArnParameters<Partition>,
) {
  return new ConfigurationDomainArn<Partition>(parameters)
}

export interface PackageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePackage: string
}
class PackageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'package',
  `arn:${string}:iot:${string}:${string}:package/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'package' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePackage: string
  constructor(parameters: PackageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePackage = parameters.namePackage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:package/${this.namePackage}` as const
  }
}
export type { PackageArn }
export function packageArn<Partition extends ArnPartition = 'aws'>(
  parameters: PackageArnParameters<Partition>,
) {
  return new PackageArn<Partition>(parameters)
}

export interface VersionPackageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePackage: string
  readonly nameVersion: string
}
class VersionPackageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'packageversion',
  `arn:${string}:iot:${string}:${string}:package/${string}/version/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'packageversion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namePackage: string
  readonly nameVersion: string
  constructor(parameters: VersionPackageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namePackage = parameters.namePackage
    this.nameVersion = parameters.nameVersion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:package/${this.namePackage}/version/${this.nameVersion}` as const
  }
}
export type { VersionPackageArn }
export function versionPackageArn<Partition extends ArnPartition = 'aws'>(
  parameters: VersionPackageArnParameters<Partition>,
) {
  return new VersionPackageArn<Partition>(parameters)
}

export interface ProviderCertificateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProviderCertificate: string
}
class ProviderCertificateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'certificateprovider',
  `arn:${string}:iot:${string}:${string}:certificateprovider/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'certificateprovider' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameProviderCertificate: string
  constructor(parameters: ProviderCertificateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameProviderCertificate = parameters.nameProviderCertificate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iot:${this.region}:${this.account}:certificateprovider/${this.nameProviderCertificate}` as const
  }
}
export type { ProviderCertificateArn }
export function providerCertificateArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProviderCertificateArnParameters<Partition>,
) {
  return new ProviderCertificateArn<Partition>(parameters)
}
