import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:redshift:${string}:${string}:cluster:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:cluster:${this.clusterName}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface DataShareArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly producerClusterNamespace: string
  readonly dataShareName: string
}
class DataShareArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'datashare',
  `arn:${string}:redshift:${string}:${string}:datashare:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datashare' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly producerClusterNamespace: string
  readonly dataShareName: string
  constructor(parameters: DataShareArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.producerClusterNamespace = parameters.producerClusterNamespace
    this.dataShareName = parameters.dataShareName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:datashare:${this.producerClusterNamespace}/${this.dataShareName}` as const
  }
}
export type { DataShareArn }
export function dataShareArn<Partition extends ArnPartition = 'aws'>(
  parameters: DataShareArnParameters<Partition>,
) {
  return new DataShareArn<Partition>(parameters)
}

export interface DbGroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly dbGroup: string
}
class DbGroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dbgroup',
  `arn:${string}:redshift:${string}:${string}:dbgroup:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dbgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly dbGroup: string
  constructor(parameters: DbGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.dbGroup = parameters.dbGroup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:dbgroup:${this.clusterName}/${this.dbGroup}` as const
  }
}
export type { DbGroupArn }
export function dbGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: DbGroupArnParameters<Partition>,
) {
  return new DbGroupArn<Partition>(parameters)
}

export interface DbNameArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly dbName: string
}
class DbNameArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dbname',
  `arn:${string}:redshift:${string}:${string}:dbname:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dbname' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly dbName: string
  constructor(parameters: DbNameArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.dbName = parameters.dbName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:dbname:${this.clusterName}/${this.dbName}` as const
  }
}
export type { DbNameArn }
export function dbNameArn<Partition extends ArnPartition = 'aws'>(
  parameters: DbNameArnParameters<Partition>,
) {
  return new DbNameArn<Partition>(parameters)
}

export interface DbUserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly dbUser: string
}
class DbUserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dbuser',
  `arn:${string}:redshift:${string}:${string}:dbuser:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dbuser' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly dbUser: string
  constructor(parameters: DbUserArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.dbUser = parameters.dbUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:dbuser:${this.clusterName}/${this.dbUser}` as const
  }
}
export type { DbUserArn }
export function dbUserArn<Partition extends ArnPartition = 'aws'>(
  parameters: DbUserArnParameters<Partition>,
) {
  return new DbUserArn<Partition>(parameters)
}

export interface EventSubscriptionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventSubscriptionName: string
}
class EventSubscriptionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'eventsubscription',
  `arn:${string}:redshift:${string}:${string}:eventsubscription:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'eventsubscription' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventSubscriptionName: string
  constructor(parameters: EventSubscriptionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.eventSubscriptionName = parameters.eventSubscriptionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:eventsubscription:${this.eventSubscriptionName}` as const
  }
}
export type { EventSubscriptionArn }
export function eventSubscriptionArn<Partition extends ArnPartition = 'aws'>(
  parameters: EventSubscriptionArnParameters<Partition>,
) {
  return new EventSubscriptionArn<Partition>(parameters)
}

export interface HsmClientCertificateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly hsmClientCertificateId: string
}
class HsmClientCertificateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'hsmclientcertificate',
  `arn:${string}:redshift:${string}:${string}:hsmclientcertificate:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hsmclientcertificate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly hsmClientCertificateId: string
  constructor(parameters: HsmClientCertificateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.hsmClientCertificateId = parameters.hsmClientCertificateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:hsmclientcertificate:${this.hsmClientCertificateId}` as const
  }
}
export type { HsmClientCertificateArn }
export function hsmClientCertificateArn<Partition extends ArnPartition = 'aws'>(
  parameters: HsmClientCertificateArnParameters<Partition>,
) {
  return new HsmClientCertificateArn<Partition>(parameters)
}

export interface HsmConfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly hsmConfigurationId: string
}
class HsmConfigurationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'hsmconfiguration',
  `arn:${string}:redshift:${string}:${string}:hsmconfiguration:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hsmconfiguration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly hsmConfigurationId: string
  constructor(parameters: HsmConfigurationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.hsmConfigurationId = parameters.hsmConfigurationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:hsmconfiguration:${this.hsmConfigurationId}` as const
  }
}
export type { HsmConfigurationArn }
export function hsmConfigurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: HsmConfigurationArnParameters<Partition>,
) {
  return new HsmConfigurationArn<Partition>(parameters)
}

export interface NamespaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterNamespace: string
}
class NamespaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'namespace',
  `arn:${string}:redshift:${string}:${string}:namespace:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'namespace' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterNamespace: string
  constructor(parameters: NamespaceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterNamespace = parameters.clusterNamespace
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:namespace:${this.clusterNamespace}` as const
  }
}
export type { NamespaceArn }
export function namespaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: NamespaceArnParameters<Partition>,
) {
  return new NamespaceArn<Partition>(parameters)
}

export interface ParameterGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly parameterGroupName: string
}
class ParameterGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'parametergroup',
  `arn:${string}:redshift:${string}:${string}:parametergroup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'parametergroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly parameterGroupName: string
  constructor(parameters: ParameterGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.parameterGroupName = parameters.parameterGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:parametergroup:${this.parameterGroupName}` as const
  }
}
export type { ParameterGroupArn }
export function parameterGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: ParameterGroupArnParameters<Partition>,
) {
  return new ParameterGroupArn<Partition>(parameters)
}

export interface SecurityGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityGroupName: string
  readonly owner: string
  readonly ec2SecurityGroupId: string
}
class SecurityGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'securitygroup',
  `arn:${string}:redshift:${string}:${string}:securitygroup:${string}/ec2securitygroup/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'securitygroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityGroupName: string
  readonly owner: string
  readonly ec2SecurityGroupId: string
  constructor(parameters: SecurityGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.securityGroupName = parameters.securityGroupName
    this.owner = parameters.owner
    this.ec2SecurityGroupId = parameters.ec2SecurityGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:securitygroup:${this.securityGroupName}/ec2securitygroup/${this.owner}/${this.ec2SecurityGroupId}` as const
  }
}
export type { SecurityGroupArn }
export function securityGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: SecurityGroupArnParameters<Partition>,
) {
  return new SecurityGroupArn<Partition>(parameters)
}

export interface SecurityGroupIngressCidrArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityGroupName: string
  readonly ipRange: string
}
class SecurityGroupIngressCidrArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'securitygroupingress-cidr',
  `arn:${string}:redshift:${string}:${string}:securitygroupingress:${string}/cidrip/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'securitygroupingress-cidr' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityGroupName: string
  readonly ipRange: string
  constructor(parameters: SecurityGroupIngressCidrArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.securityGroupName = parameters.securityGroupName
    this.ipRange = parameters.ipRange
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:securitygroupingress:${this.securityGroupName}/cidrip/${this.ipRange}` as const
  }
}
export type { SecurityGroupIngressCidrArn }
export function securityGroupIngressCidrArn<
  Partition extends ArnPartition = 'aws',
>(parameters: SecurityGroupIngressCidrArnParameters<Partition>) {
  return new SecurityGroupIngressCidrArn<Partition>(parameters)
}

export interface SecurityGroupIngressEc2SecurityGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityGroupName: string
  readonly owner: string
  readonly ec2SecurityGroupId: string
}
class SecurityGroupIngressEc2SecurityGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'securitygroupingress-ec2securitygroup',
  `arn:${string}:redshift:${string}:${string}:securitygroupingress:${string}/ec2securitygroup/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'securitygroupingress-ec2securitygroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityGroupName: string
  readonly owner: string
  readonly ec2SecurityGroupId: string
  constructor(
    parameters: SecurityGroupIngressEc2SecurityGroupArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.securityGroupName = parameters.securityGroupName
    this.owner = parameters.owner
    this.ec2SecurityGroupId = parameters.ec2SecurityGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:securitygroupingress:${this.securityGroupName}/ec2securitygroup/${this.owner}/${this.ec2SecurityGroupId}` as const
  }
}
export type { SecurityGroupIngressEc2SecurityGroupArn }
export function securityGroupIngressEc2SecurityGroupArn<
  Partition extends ArnPartition = 'aws',
>(parameters: SecurityGroupIngressEc2SecurityGroupArnParameters<Partition>) {
  return new SecurityGroupIngressEc2SecurityGroupArn<Partition>(parameters)
}

export interface SnapshotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly snapshotName: string
}
class SnapshotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'snapshot',
  `arn:${string}:redshift:${string}:${string}:snapshot:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'snapshot' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly snapshotName: string
  constructor(parameters: SnapshotArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterName = parameters.clusterName
    this.snapshotName = parameters.snapshotName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:snapshot:${this.clusterName}/${this.snapshotName}` as const
  }
}
export type { SnapshotArn }
export function snapshotArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotArnParameters<Partition>,
) {
  return new SnapshotArn<Partition>(parameters)
}

export interface SnapshotCopyGrantArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly snapshotCopyGrantName: string
}
class SnapshotCopyGrantArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'snapshotcopygrant',
  `arn:${string}:redshift:${string}:${string}:snapshotcopygrant:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'snapshotcopygrant' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly snapshotCopyGrantName: string
  constructor(parameters: SnapshotCopyGrantArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.snapshotCopyGrantName = parameters.snapshotCopyGrantName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:snapshotcopygrant:${this.snapshotCopyGrantName}` as const
  }
}
export type { SnapshotCopyGrantArn }
export function snapshotCopyGrantArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotCopyGrantArnParameters<Partition>,
) {
  return new SnapshotCopyGrantArn<Partition>(parameters)
}

export interface SnapshotScheduleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scheduleIdentifier: string
}
class SnapshotScheduleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'snapshotschedule',
  `arn:${string}:redshift:${string}:${string}:snapshotschedule:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'snapshotschedule' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scheduleIdentifier: string
  constructor(parameters: SnapshotScheduleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.scheduleIdentifier = parameters.scheduleIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:snapshotschedule:${this.scheduleIdentifier}` as const
  }
}
export type { SnapshotScheduleArn }
export function snapshotScheduleArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotScheduleArnParameters<Partition>,
) {
  return new SnapshotScheduleArn<Partition>(parameters)
}

export interface SubnetGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subnetGroupName: string
}
class SubnetGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'subnetgroup',
  `arn:${string}:redshift:${string}:${string}:subnetgroup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subnetgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subnetGroupName: string
  constructor(parameters: SubnetGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.subnetGroupName = parameters.subnetGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:subnetgroup:${this.subnetGroupName}` as const
  }
}
export type { SubnetGroupArn }
export function subnetGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: SubnetGroupArnParameters<Partition>,
) {
  return new SubnetGroupArn<Partition>(parameters)
}

export interface UsageLimitArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly usageLimitId: string
}
class UsageLimitArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'usagelimit',
  `arn:${string}:redshift:${string}:${string}:usagelimit:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'usagelimit' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly usageLimitId: string
  constructor(parameters: UsageLimitArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.usageLimitId = parameters.usageLimitId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:usagelimit:${this.usageLimitId}` as const
  }
}
export type { UsageLimitArn }
export function usageLimitArn<Partition extends ArnPartition = 'aws'>(
  parameters: UsageLimitArnParameters<Partition>,
) {
  return new UsageLimitArn<Partition>(parameters)
}

export interface RedshiftIdcApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly redshiftIdcApplicationId: string
}
class RedshiftIdcApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'redshiftidcapplication',
  `arn:${string}:redshift:${string}:${string}:redshiftidcapplication:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'redshiftidcapplication' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly redshiftIdcApplicationId: string
  constructor(parameters: RedshiftIdcApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.redshiftIdcApplicationId = parameters.redshiftIdcApplicationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:redshiftidcapplication:${this.redshiftIdcApplicationId}` as const
  }
}
export type { RedshiftIdcApplicationArn }
export function redshiftIdcApplicationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: RedshiftIdcApplicationArnParameters<Partition>) {
  return new RedshiftIdcApplicationArn<Partition>(parameters)
}

export interface Qev2idcApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly qev2IdcApplicationId: string
}
class Qev2idcApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'qev2idcapplication',
  `arn:${string}:redshift:${string}:${string}:qev2idcapplication:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'qev2idcapplication' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly qev2IdcApplicationId: string
  constructor(parameters: Qev2idcApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.qev2IdcApplicationId = parameters.qev2IdcApplicationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:qev2idcapplication:${this.qev2IdcApplicationId}` as const
  }
}
export type { Qev2idcApplicationArn }
export function qev2idcApplicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: Qev2idcApplicationArnParameters<Partition>,
) {
  return new Qev2idcApplicationArn<Partition>(parameters)
}
