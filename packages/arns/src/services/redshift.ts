export interface ClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
}
export type ClusterArn = `arn:${string}:redshift:${string}:${string}:cluster:${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:cluster:${parameters.clusterName}`
}

export interface DatashareArnParameters {
  partition?: string | undefined
  region: string
  account: string
  producerClusterNamespace: string
  dataShareName: string
}
export type DatashareArn = `arn:${string}:redshift:${string}:${string}:datashare:${string}/${string}`
export function datashareArn(parameters: DatashareArnParameters): DatashareArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:datashare:${parameters.producerClusterNamespace}/${parameters.dataShareName}`
}

export interface DbgroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  dbGroup: string
}
export type DbgroupArn = `arn:${string}:redshift:${string}:${string}:dbgroup:${string}/${string}`
export function dbgroupArn(parameters: DbgroupArnParameters): DbgroupArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:dbgroup:${parameters.clusterName}/${parameters.dbGroup}`
}

export interface DbnameArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  dbName: string
}
export type DbnameArn = `arn:${string}:redshift:${string}:${string}:dbname:${string}/${string}`
export function dbnameArn(parameters: DbnameArnParameters): DbnameArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:dbname:${parameters.clusterName}/${parameters.dbName}`
}

export interface DbuserArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  dbUser: string
}
export type DbuserArn = `arn:${string}:redshift:${string}:${string}:dbuser:${string}/${string}`
export function dbuserArn(parameters: DbuserArnParameters): DbuserArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:dbuser:${parameters.clusterName}/${parameters.dbUser}`
}

export interface EventsubscriptionArnParameters {
  partition?: string | undefined
  region: string
  account: string
  eventSubscriptionName: string
}
export type EventsubscriptionArn = `arn:${string}:redshift:${string}:${string}:eventsubscription:${string}`
export function eventsubscriptionArn(parameters: EventsubscriptionArnParameters): EventsubscriptionArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:eventsubscription:${parameters.eventSubscriptionName}`
}

export interface HsmclientcertificateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  hsmClientCertificateId: string
}
export type HsmclientcertificateArn = `arn:${string}:redshift:${string}:${string}:hsmclientcertificate:${string}`
export function hsmclientcertificateArn(parameters: HsmclientcertificateArnParameters): HsmclientcertificateArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:hsmclientcertificate:${parameters.hsmClientCertificateId}`
}

export interface HsmconfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  hsmConfigurationId: string
}
export type HsmconfigurationArn = `arn:${string}:redshift:${string}:${string}:hsmconfiguration:${string}`
export function hsmconfigurationArn(parameters: HsmconfigurationArnParameters): HsmconfigurationArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:hsmconfiguration:${parameters.hsmConfigurationId}`
}

export interface NamespaceArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterNamespace: string
}
export type NamespaceArn = `arn:${string}:redshift:${string}:${string}:namespace:${string}`
export function namespaceArn(parameters: NamespaceArnParameters): NamespaceArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:namespace:${parameters.clusterNamespace}`
}

export interface ParametergroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  parameterGroupName: string
}
export type ParametergroupArn = `arn:${string}:redshift:${string}:${string}:parametergroup:${string}`
export function parametergroupArn(parameters: ParametergroupArnParameters): ParametergroupArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:parametergroup:${parameters.parameterGroupName}`
}

export interface SecuritygroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  securityGroupName: string
  owner: string
  ec2SecurityGroupId: string
}
export type SecuritygroupArn = `arn:${string}:redshift:${string}:${string}:securitygroup:${string}/ec2securitygroup/${string}/${string}`
export function securitygroupArn(parameters: SecuritygroupArnParameters): SecuritygroupArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:securitygroup:${parameters.securityGroupName}/ec2securitygroup/${parameters.owner}/${parameters.ec2SecurityGroupId}`
}

export interface SecuritygroupingressCidrArnParameters {
  partition?: string | undefined
  region: string
  account: string
  securityGroupName: string
  ipRange: string
}
export type SecuritygroupingressCidrArn = `arn:${string}:redshift:${string}:${string}:securitygroupingress:${string}/cidrip/${string}`
export function securitygroupingressCidrArn(parameters: SecuritygroupingressCidrArnParameters): SecuritygroupingressCidrArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:securitygroupingress:${parameters.securityGroupName}/cidrip/${parameters.ipRange}`
}

export interface SecuritygroupingressEc2securitygroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  securityGroupName: string
  owner: string
  ece2SecuritygroupId: string
}
export type SecuritygroupingressEc2securitygroupArn = `arn:${string}:redshift:${string}:${string}:securitygroupingress:${string}/ec2securitygroup/${string}/${string}`
export function securitygroupingressEc2securitygroupArn(parameters: SecuritygroupingressEc2securitygroupArnParameters): SecuritygroupingressEc2securitygroupArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:securitygroupingress:${parameters.securityGroupName}/ec2securitygroup/${parameters.owner}/${parameters.ece2SecuritygroupId}`
}

export interface SnapshotArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterName: string
  snapshotName: string
}
export type SnapshotArn = `arn:${string}:redshift:${string}:${string}:snapshot:${string}/${string}`
export function snapshotArn(parameters: SnapshotArnParameters): SnapshotArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:snapshot:${parameters.clusterName}/${parameters.snapshotName}`
}

export interface SnapshotcopygrantArnParameters {
  partition?: string | undefined
  region: string
  account: string
  snapshotCopyGrantName: string
}
export type SnapshotcopygrantArn = `arn:${string}:redshift:${string}:${string}:snapshotcopygrant:${string}`
export function snapshotcopygrantArn(parameters: SnapshotcopygrantArnParameters): SnapshotcopygrantArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:snapshotcopygrant:${parameters.snapshotCopyGrantName}`
}

export interface SnapshotscheduleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  scheduleIdentifier: string
}
export type SnapshotscheduleArn = `arn:${string}:redshift:${string}:${string}:snapshotschedule:${string}`
export function snapshotscheduleArn(parameters: SnapshotscheduleArnParameters): SnapshotscheduleArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:snapshotschedule:${parameters.scheduleIdentifier}`
}

export interface SubnetgroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  subnetGroupName: string
}
export type SubnetgroupArn = `arn:${string}:redshift:${string}:${string}:subnetgroup:${string}`
export function subnetgroupArn(parameters: SubnetgroupArnParameters): SubnetgroupArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:subnetgroup:${parameters.subnetGroupName}`
}

export interface UsagelimitArnParameters {
  partition?: string | undefined
  region: string
  account: string
  usageLimitId: string
}
export type UsagelimitArn = `arn:${string}:redshift:${string}:${string}:usagelimit:${string}`
export function usagelimitArn(parameters: UsagelimitArnParameters): UsagelimitArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:usagelimit:${parameters.usageLimitId}`
}

export interface RedshiftidcapplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  redshiftIdcApplicationId: string
}
export type RedshiftidcapplicationArn = `arn:${string}:redshift:${string}:${string}:redshiftidcapplication:${string}`
export function redshiftidcapplicationArn(parameters: RedshiftidcapplicationArnParameters): RedshiftidcapplicationArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:redshiftidcapplication:${parameters.redshiftIdcApplicationId}`
}

export interface Qev2idcapplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  qev2IdcApplicationId: string
}
export type Qev2idcapplicationArn = `arn:${string}:redshift:${string}:${string}:qev2idcapplication:${string}`
export function qev2idcapplicationArn(parameters: Qev2idcapplicationArnParameters): Qev2idcapplicationArn {
  return `arn:${parameters.partition ?? ''}:redshift:${parameters.region}:${parameters.account}:qev2idcapplication:${parameters.qev2IdcApplicationId}`
}