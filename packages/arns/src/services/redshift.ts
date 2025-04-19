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

export interface DatashareArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly producerClusterNamespace: string
  readonly dataShareName: string
}
class DatashareArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'datashare',
  `arn:${string}:redshift:${string}:${string}:datashare:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datashare' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly producerClusterNamespace: string
  readonly dataShareName: string
  constructor(parameters: DatashareArnParameters<Partition>) {
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
export type { DatashareArn }
export function datashareArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatashareArnParameters<Partition>,
) {
  return new DatashareArn<Partition>(parameters)
}

export interface DbgroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly dbGroup: string
}
class DbgroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dbgroup',
  `arn:${string}:redshift:${string}:${string}:dbgroup:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dbgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly dbGroup: string
  constructor(parameters: DbgroupArnParameters<Partition>) {
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
export type { DbgroupArn }
export function dbgroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: DbgroupArnParameters<Partition>,
) {
  return new DbgroupArn<Partition>(parameters)
}

export interface DbnameArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly dbName: string
}
class DbnameArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dbname',
  `arn:${string}:redshift:${string}:${string}:dbname:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dbname' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly dbName: string
  constructor(parameters: DbnameArnParameters<Partition>) {
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
export type { DbnameArn }
export function dbnameArn<Partition extends ArnPartition = 'aws'>(
  parameters: DbnameArnParameters<Partition>,
) {
  return new DbnameArn<Partition>(parameters)
}

export interface DbuserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly dbUser: string
}
class DbuserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dbuser',
  `arn:${string}:redshift:${string}:${string}:dbuser:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dbuser' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterName: string
  readonly dbUser: string
  constructor(parameters: DbuserArnParameters<Partition>) {
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
export type { DbuserArn }
export function dbuserArn<Partition extends ArnPartition = 'aws'>(
  parameters: DbuserArnParameters<Partition>,
) {
  return new DbuserArn<Partition>(parameters)
}

export interface EventsubscriptionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly eventSubscriptionName: string
}
class EventsubscriptionArn<
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
  constructor(parameters: EventsubscriptionArnParameters<Partition>) {
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
export type { EventsubscriptionArn }
export function eventsubscriptionArn<Partition extends ArnPartition = 'aws'>(
  parameters: EventsubscriptionArnParameters<Partition>,
) {
  return new EventsubscriptionArn<Partition>(parameters)
}

export interface HsmclientcertificateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly hsmClientCertificateId: string
}
class HsmclientcertificateArn<
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
  constructor(parameters: HsmclientcertificateArnParameters<Partition>) {
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
export type { HsmclientcertificateArn }
export function hsmclientcertificateArn<Partition extends ArnPartition = 'aws'>(
  parameters: HsmclientcertificateArnParameters<Partition>,
) {
  return new HsmclientcertificateArn<Partition>(parameters)
}

export interface HsmconfigurationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly hsmConfigurationId: string
}
class HsmconfigurationArn<
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
  constructor(parameters: HsmconfigurationArnParameters<Partition>) {
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
export type { HsmconfigurationArn }
export function hsmconfigurationArn<Partition extends ArnPartition = 'aws'>(
  parameters: HsmconfigurationArnParameters<Partition>,
) {
  return new HsmconfigurationArn<Partition>(parameters)
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

export interface ParametergroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly parameterGroupName: string
}
class ParametergroupArn<
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
  constructor(parameters: ParametergroupArnParameters<Partition>) {
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
export type { ParametergroupArn }
export function parametergroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: ParametergroupArnParameters<Partition>,
) {
  return new ParametergroupArn<Partition>(parameters)
}

export interface SecuritygroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityGroupName: string
  readonly owner: string
  readonly ec2SecurityGroupId: string
}
class SecuritygroupArn<
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
  constructor(parameters: SecuritygroupArnParameters<Partition>) {
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
export type { SecuritygroupArn }
export function securitygroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: SecuritygroupArnParameters<Partition>,
) {
  return new SecuritygroupArn<Partition>(parameters)
}

export interface SecuritygroupingressCidrArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityGroupName: string
  readonly ipRange: string
}
class SecuritygroupingressCidrArn<
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
  constructor(parameters: SecuritygroupingressCidrArnParameters<Partition>) {
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
export type { SecuritygroupingressCidrArn }
export function securitygroupingressCidrArn<
  Partition extends ArnPartition = 'aws',
>(parameters: SecuritygroupingressCidrArnParameters<Partition>) {
  return new SecuritygroupingressCidrArn<Partition>(parameters)
}

export interface SecuritygroupingressEc2securitygroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityGroupName: string
  readonly owner: string
  readonly ece2SecuritygroupId: string
}
class SecuritygroupingressEc2securitygroupArn<
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
  readonly ece2SecuritygroupId: string
  constructor(
    parameters: SecuritygroupingressEc2securitygroupArnParameters<Partition>,
  ) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.securityGroupName = parameters.securityGroupName
    this.owner = parameters.owner
    this.ece2SecuritygroupId = parameters.ece2SecuritygroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:securitygroupingress:${this.securityGroupName}/ec2securitygroup/${this.owner}/${this.ece2SecuritygroupId}` as const
  }
}
export type { SecuritygroupingressEc2securitygroupArn }
export function securitygroupingressEc2securitygroupArn<
  Partition extends ArnPartition = 'aws',
>(parameters: SecuritygroupingressEc2securitygroupArnParameters<Partition>) {
  return new SecuritygroupingressEc2securitygroupArn<Partition>(parameters)
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

export interface SnapshotcopygrantArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly snapshotCopyGrantName: string
}
class SnapshotcopygrantArn<
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
  constructor(parameters: SnapshotcopygrantArnParameters<Partition>) {
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
export type { SnapshotcopygrantArn }
export function snapshotcopygrantArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotcopygrantArnParameters<Partition>,
) {
  return new SnapshotcopygrantArn<Partition>(parameters)
}

export interface SnapshotscheduleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scheduleIdentifier: string
}
class SnapshotscheduleArn<
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
  constructor(parameters: SnapshotscheduleArnParameters<Partition>) {
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
export type { SnapshotscheduleArn }
export function snapshotscheduleArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotscheduleArnParameters<Partition>,
) {
  return new SnapshotscheduleArn<Partition>(parameters)
}

export interface SubnetgroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subnetGroupName: string
}
class SubnetgroupArn<
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
  constructor(parameters: SubnetgroupArnParameters<Partition>) {
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
export type { SubnetgroupArn }
export function subnetgroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: SubnetgroupArnParameters<Partition>,
) {
  return new SubnetgroupArn<Partition>(parameters)
}

export interface UsagelimitArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly usageLimitId: string
}
class UsagelimitArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'usagelimit',
  `arn:${string}:redshift:${string}:${string}:usagelimit:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'usagelimit' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly usageLimitId: string
  constructor(parameters: UsagelimitArnParameters<Partition>) {
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
export type { UsagelimitArn }
export function usagelimitArn<Partition extends ArnPartition = 'aws'>(
  parameters: UsagelimitArnParameters<Partition>,
) {
  return new UsagelimitArn<Partition>(parameters)
}

export interface RedshiftidcapplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly redshiftIdcApplicationId: string
}
class RedshiftidcapplicationArn<
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
  constructor(parameters: RedshiftidcapplicationArnParameters<Partition>) {
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
export type { RedshiftidcapplicationArn }
export function redshiftidcapplicationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: RedshiftidcapplicationArnParameters<Partition>) {
  return new RedshiftidcapplicationArn<Partition>(parameters)
}

export interface Qev2idcapplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly qev2IdcApplicationId: string
}
class Qev2idcapplicationArn<
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
  constructor(parameters: Qev2idcapplicationArnParameters<Partition>) {
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
export type { Qev2idcapplicationArn }
export function qev2idcapplicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: Qev2idcapplicationArnParameters<Partition>,
) {
  return new Qev2idcapplicationArn<Partition>(parameters)
}
