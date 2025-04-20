import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ClusterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:redshift:${string}:${string}:cluster:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:cluster:${this.nameCluster}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface ShareDataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namespaceClusterProducer: string
  readonly nameShareData: string
}
class ShareDataArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'datashare',
  `arn:${string}:redshift:${string}:${string}:datashare:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'datashare' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namespaceClusterProducer: string
  readonly nameShareData: string
  constructor(parameters: ShareDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namespaceClusterProducer = parameters.namespaceClusterProducer
    this.nameShareData = parameters.nameShareData
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:datashare:${this.namespaceClusterProducer}/${this.nameShareData}` as const
  }
}
export type { ShareDataArn }
export function shareDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: ShareDataArnParameters<Partition>,
) {
  return new ShareDataArn<Partition>(parameters)
}

export interface GroupDbArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly groupDb: string
}
class GroupDbArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dbgroup',
  `arn:${string}:redshift:${string}:${string}:dbgroup:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dbgroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly groupDb: string
  constructor(parameters: GroupDbArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
    this.groupDb = parameters.groupDb
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:dbgroup:${this.nameCluster}/${this.groupDb}` as const
  }
}
export type { GroupDbArn }
export function groupDbArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupDbArnParameters<Partition>,
) {
  return new GroupDbArn<Partition>(parameters)
}

export interface NameDbArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly nameDb: string
}
class NameDbArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dbname',
  `arn:${string}:redshift:${string}:${string}:dbname:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dbname' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly nameDb: string
  constructor(parameters: NameDbArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
    this.nameDb = parameters.nameDb
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:dbname:${this.nameCluster}/${this.nameDb}` as const
  }
}
export type { NameDbArn }
export function nameDbArn<Partition extends ArnPartition = 'aws'>(
  parameters: NameDbArnParameters<Partition>,
) {
  return new NameDbArn<Partition>(parameters)
}

export interface UserDbArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly userDb: string
}
class UserDbArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dbuser',
  `arn:${string}:redshift:${string}:${string}:dbuser:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dbuser' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly userDb: string
  constructor(parameters: UserDbArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
    this.userDb = parameters.userDb
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:dbuser:${this.nameCluster}/${this.userDb}` as const
  }
}
export type { UserDbArn }
export function userDbArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserDbArnParameters<Partition>,
) {
  return new UserDbArn<Partition>(parameters)
}

export interface SubscriptionEventArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSubscriptionEvent: string
}
class SubscriptionEventArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'eventsubscription',
  `arn:${string}:redshift:${string}:${string}:eventsubscription:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'eventsubscription' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSubscriptionEvent: string
  constructor(parameters: SubscriptionEventArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSubscriptionEvent = parameters.nameSubscriptionEvent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:eventsubscription:${this.nameSubscriptionEvent}` as const
  }
}
export type { SubscriptionEventArn }
export function subscriptionEventArn<Partition extends ArnPartition = 'aws'>(
  parameters: SubscriptionEventArnParameters<Partition>,
) {
  return new SubscriptionEventArn<Partition>(parameters)
}

export interface CertificateClientHsmArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCertificateClientHsm: string
}
class CertificateClientHsmArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'hsmclientcertificate',
  `arn:${string}:redshift:${string}:${string}:hsmclientcertificate:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hsmclientcertificate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCertificateClientHsm: string
  constructor(parameters: CertificateClientHsmArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCertificateClientHsm = parameters.idCertificateClientHsm
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:hsmclientcertificate:${this.idCertificateClientHsm}` as const
  }
}
export type { CertificateClientHsmArn }
export function certificateClientHsmArn<Partition extends ArnPartition = 'aws'>(
  parameters: CertificateClientHsmArnParameters<Partition>,
) {
  return new CertificateClientHsmArn<Partition>(parameters)
}

export interface ConfigurationHsmArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfigurationHsm: string
}
class ConfigurationHsmArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'hsmconfiguration',
  `arn:${string}:redshift:${string}:${string}:hsmconfiguration:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'hsmconfiguration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConfigurationHsm: string
  constructor(parameters: ConfigurationHsmArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConfigurationHsm = parameters.idConfigurationHsm
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:hsmconfiguration:${this.idConfigurationHsm}` as const
  }
}
export type { ConfigurationHsmArn }
export function configurationHsmArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigurationHsmArnParameters<Partition>,
) {
  return new ConfigurationHsmArn<Partition>(parameters)
}

export interface NamespaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namespaceCluster: string
}
class NamespaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'namespace',
  `arn:${string}:redshift:${string}:${string}:namespace:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'namespace' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly namespaceCluster: string
  constructor(parameters: NamespaceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.namespaceCluster = parameters.namespaceCluster
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:namespace:${this.namespaceCluster}` as const
  }
}
export type { NamespaceArn }
export function namespaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: NamespaceArnParameters<Partition>,
) {
  return new NamespaceArn<Partition>(parameters)
}

export interface GroupParameterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupParameter: string
}
class GroupParameterArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'parametergroup',
  `arn:${string}:redshift:${string}:${string}:parametergroup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'parametergroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupParameter: string
  constructor(parameters: GroupParameterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupParameter = parameters.nameGroupParameter
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:parametergroup:${this.nameGroupParameter}` as const
  }
}
export type { GroupParameterArn }
export function groupParameterArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupParameterArnParameters<Partition>,
) {
  return new GroupParameterArn<Partition>(parameters)
}

export interface GroupSecurityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupSecurity: string
  readonly owner: string
  readonly idGroupSecurityEc2: string
}
class GroupSecurityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'securitygroup',
  `arn:${string}:redshift:${string}:${string}:securitygroup:${string}/ec2securitygroup/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'securitygroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupSecurity: string
  readonly owner: string
  readonly idGroupSecurityEc2: string
  constructor(parameters: GroupSecurityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupSecurity = parameters.nameGroupSecurity
    this.owner = parameters.owner
    this.idGroupSecurityEc2 = parameters.idGroupSecurityEc2
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:securitygroup:${this.nameGroupSecurity}/ec2securitygroup/${this.owner}/${this.idGroupSecurityEc2}` as const
  }
}
export type { GroupSecurityArn }
export function groupSecurityArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupSecurityArnParameters<Partition>,
) {
  return new GroupSecurityArn<Partition>(parameters)
}

export interface CidrIngressGroupSecurityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupSecurity: string
  readonly rangeIp: string
}
class CidrIngressGroupSecurityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'securitygroupingress-cidr',
  `arn:${string}:redshift:${string}:${string}:securitygroupingress:${string}/cidrip/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'securitygroupingress-cidr' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupSecurity: string
  readonly rangeIp: string
  constructor(parameters: CidrIngressGroupSecurityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupSecurity = parameters.nameGroupSecurity
    this.rangeIp = parameters.rangeIp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:securitygroupingress:${this.nameGroupSecurity}/cidrip/${this.rangeIp}` as const
  }
}
export type { CidrIngressGroupSecurityArn }
export function cidrIngressGroupSecurityArn<
  Partition extends ArnPartition = 'aws',
>(parameters: CidrIngressGroupSecurityArnParameters<Partition>) {
  return new CidrIngressGroupSecurityArn<Partition>(parameters)
}

export interface GroupSecurityEc2IngressGroupSecurityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupSecurity: string
  readonly owner: string
  readonly idGroupSecurityEc2: string
}
class GroupSecurityEc2IngressGroupSecurityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'securitygroupingress-ec2securitygroup',
  `arn:${string}:redshift:${string}:${string}:securitygroupingress:${string}/ec2securitygroup/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] =
    'securitygroupingress-ec2securitygroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupSecurity: string
  readonly owner: string
  readonly idGroupSecurityEc2: string
  constructor(
    parameters: GroupSecurityEc2IngressGroupSecurityArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupSecurity = parameters.nameGroupSecurity
    this.owner = parameters.owner
    this.idGroupSecurityEc2 = parameters.idGroupSecurityEc2
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:securitygroupingress:${this.nameGroupSecurity}/ec2securitygroup/${this.owner}/${this.idGroupSecurityEc2}` as const
  }
}
export type { GroupSecurityEc2IngressGroupSecurityArn }
export function groupSecurityEc2IngressGroupSecurityArn<
  Partition extends ArnPartition = 'aws',
>(parameters: GroupSecurityEc2IngressGroupSecurityArnParameters<Partition>) {
  return new GroupSecurityEc2IngressGroupSecurityArn<Partition>(parameters)
}

export interface SnapshotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly nameSnapshot: string
}
class SnapshotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'snapshot',
  `arn:${string}:redshift:${string}:${string}:snapshot:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'snapshot' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameCluster: string
  readonly nameSnapshot: string
  constructor(parameters: SnapshotArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameCluster = parameters.nameCluster
    this.nameSnapshot = parameters.nameSnapshot
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:snapshot:${this.nameCluster}/${this.nameSnapshot}` as const
  }
}
export type { SnapshotArn }
export function snapshotArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotArnParameters<Partition>,
) {
  return new SnapshotArn<Partition>(parameters)
}

export interface GrantCopySnapshotArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGrantCopySnapshot: string
}
class GrantCopySnapshotArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'snapshotcopygrant',
  `arn:${string}:redshift:${string}:${string}:snapshotcopygrant:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'snapshotcopygrant' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGrantCopySnapshot: string
  constructor(parameters: GrantCopySnapshotArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGrantCopySnapshot = parameters.nameGrantCopySnapshot
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:snapshotcopygrant:${this.nameGrantCopySnapshot}` as const
  }
}
export type { GrantCopySnapshotArn }
export function grantCopySnapshotArn<Partition extends ArnPartition = 'aws'>(
  parameters: GrantCopySnapshotArnParameters<Partition>,
) {
  return new GrantCopySnapshotArn<Partition>(parameters)
}

export interface ScheduleSnapshotArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierSchedule: string
}
class ScheduleSnapshotArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'snapshotschedule',
  `arn:${string}:redshift:${string}:${string}:snapshotschedule:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'snapshotschedule' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierSchedule: string
  constructor(parameters: ScheduleSnapshotArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifierSchedule = parameters.identifierSchedule
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:snapshotschedule:${this.identifierSchedule}` as const
  }
}
export type { ScheduleSnapshotArn }
export function scheduleSnapshotArn<Partition extends ArnPartition = 'aws'>(
  parameters: ScheduleSnapshotArnParameters<Partition>,
) {
  return new ScheduleSnapshotArn<Partition>(parameters)
}

export interface GroupSubnetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupSubnet: string
}
class GroupSubnetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'subnetgroup',
  `arn:${string}:redshift:${string}:${string}:subnetgroup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subnetgroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupSubnet: string
  constructor(parameters: GroupSubnetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupSubnet = parameters.nameGroupSubnet
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:subnetgroup:${this.nameGroupSubnet}` as const
  }
}
export type { GroupSubnetArn }
export function groupSubnetArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupSubnetArnParameters<Partition>,
) {
  return new GroupSubnetArn<Partition>(parameters)
}

export interface LimitUsageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idLimitUsage: string
}
class LimitUsageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'usagelimit',
  `arn:${string}:redshift:${string}:${string}:usagelimit:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'usagelimit' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idLimitUsage: string
  constructor(parameters: LimitUsageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idLimitUsage = parameters.idLimitUsage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:usagelimit:${this.idLimitUsage}` as const
  }
}
export type { LimitUsageArn }
export function limitUsageArn<Partition extends ArnPartition = 'aws'>(
  parameters: LimitUsageArnParameters<Partition>,
) {
  return new LimitUsageArn<Partition>(parameters)
}

export interface ApplicationIdcRedshiftArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplicationIdcRedshift: string
}
class ApplicationIdcRedshiftArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'redshiftidcapplication',
  `arn:${string}:redshift:${string}:${string}:redshiftidcapplication:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'redshiftidcapplication' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplicationIdcRedshift: string
  constructor(parameters: ApplicationIdcRedshiftArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplicationIdcRedshift = parameters.idApplicationIdcRedshift
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:redshiftidcapplication:${this.idApplicationIdcRedshift}` as const
  }
}
export type { ApplicationIdcRedshiftArn }
export function applicationIdcRedshiftArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ApplicationIdcRedshiftArnParameters<Partition>) {
  return new ApplicationIdcRedshiftArn<Partition>(parameters)
}

export interface ApplicationQev2idcArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplicationIdcQev2: string
}
class ApplicationQev2idcArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'qev2idcapplication',
  `arn:${string}:redshift:${string}:${string}:qev2idcapplication:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'qev2idcapplication' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplicationIdcQev2: string
  constructor(parameters: ApplicationQev2idcArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplicationIdcQev2 = parameters.idApplicationIdcQev2
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift:${this.region}:${this.account}:qev2idcapplication:${this.idApplicationIdcQev2}` as const
  }
}
export type { ApplicationQev2idcArn }
export function applicationQev2idcArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationQev2idcArnParameters<Partition>,
) {
  return new ApplicationQev2idcArn<Partition>(parameters)
}
