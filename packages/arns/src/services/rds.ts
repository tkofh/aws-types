export interface ClusterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dbClusterInstanceName: string
}
export type ClusterArn = `arn:${string}:rds:${string}:${string}:cluster:${string}`
export function clusterArn(parameters: ClusterArnParameters): ClusterArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:cluster:${parameters.dbClusterInstanceName}`
}

export interface ShardgrpArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dbShardGroupResourceId: string
}
export type ShardgrpArn = `arn:${string}:rds:${string}:${string}:shard-group:${string}`
export function shardgrpArn(parameters: ShardgrpArnParameters): ShardgrpArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:shard-group:${parameters.dbShardGroupResourceId}`
}

export interface ClusterAutoBackupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dbClusterAutomatedBackupId: string
}
export type ClusterAutoBackupArn = `arn:${string}:rds:${string}:${string}:cluster-auto-backup:${string}`
export function clusterAutoBackupArn(parameters: ClusterAutoBackupArnParameters): ClusterAutoBackupArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:cluster-auto-backup:${parameters.dbClusterAutomatedBackupId}`
}

export interface AutoBackupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dbInstanceAutomatedBackupId: string
}
export type AutoBackupArn = `arn:${string}:rds:${string}:${string}:auto-backup:${string}`
export function autoBackupArn(parameters: AutoBackupArnParameters): AutoBackupArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:auto-backup:${parameters.dbInstanceAutomatedBackupId}`
}

export interface ClusterEndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dbClusterEndpoint: string
}
export type ClusterEndpointArn = `arn:${string}:rds:${string}:${string}:cluster-endpoint:${string}`
export function clusterEndpointArn(parameters: ClusterEndpointArnParameters): ClusterEndpointArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:cluster-endpoint:${parameters.dbClusterEndpoint}`
}

export interface ClusterPgArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterParameterGroupName: string
}
export type ClusterPgArn = `arn:${string}:rds:${string}:${string}:cluster-pg:${string}`
export function clusterPgArn(parameters: ClusterPgArnParameters): ClusterPgArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:cluster-pg:${parameters.clusterParameterGroupName}`
}

export interface ClusterSnapshotArnParameters {
  partition?: string | undefined
  region: string
  account: string
  clusterSnapshotName: string
}
export type ClusterSnapshotArn = `arn:${string}:rds:${string}:${string}:cluster-snapshot:${string}`
export function clusterSnapshotArn(parameters: ClusterSnapshotArnParameters): ClusterSnapshotArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:cluster-snapshot:${parameters.clusterSnapshotName}`
}

export interface DbArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dbInstanceName: string
}
export type DbArn = `arn:${string}:rds:${string}:${string}:db:${string}`
export function dbArn(parameters: DbArnParameters): DbArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:db:${parameters.dbInstanceName}`
}

export interface EsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  subscriptionName: string
}
export type EsArn = `arn:${string}:rds:${string}:${string}:es:${string}`
export function esArn(parameters: EsArnParameters): EsArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:es:${parameters.subscriptionName}`
}

export interface GlobalClusterArnParameters {
  partition?: string | undefined
  account: string
  globalCluster: string
}
export type GlobalClusterArn = `arn:${string}:rds::${string}:global-cluster:${string}`
export function globalClusterArn(parameters: GlobalClusterArnParameters): GlobalClusterArn {
  return `arn:${parameters.partition ?? ''}:rds::${parameters.account}:global-cluster:${parameters.globalCluster}`
}

export interface OgArnParameters {
  partition?: string | undefined
  region: string
  account: string
  optionGroupName: string
}
export type OgArn = `arn:${string}:rds:${string}:${string}:og:${string}`
export function ogArn(parameters: OgArnParameters): OgArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:og:${parameters.optionGroupName}`
}

export interface PgArnParameters {
  partition?: string | undefined
  region: string
  account: string
  parameterGroupName: string
}
export type PgArn = `arn:${string}:rds:${string}:${string}:pg:${string}`
export function pgArn(parameters: PgArnParameters): PgArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:pg:${parameters.parameterGroupName}`
}

export interface ProxyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dbProxyId: string
}
export type ProxyArn = `arn:${string}:rds:${string}:${string}:db-proxy:${string}`
export function proxyArn(parameters: ProxyArnParameters): ProxyArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:db-proxy:${parameters.dbProxyId}`
}

export interface ProxyEndpointArnParameters {
  partition?: string | undefined
  region: string
  account: string
  dbProxyEndpointId: string
}
export type ProxyEndpointArn = `arn:${string}:rds:${string}:${string}:db-proxy-endpoint:${string}`
export function proxyEndpointArn(parameters: ProxyEndpointArnParameters): ProxyEndpointArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:db-proxy-endpoint:${parameters.dbProxyEndpointId}`
}

export interface RiArnParameters {
  partition?: string | undefined
  region: string
  account: string
  reservedDbInstanceName: string
}
export type RiArn = `arn:${string}:rds:${string}:${string}:ri:${string}`
export function riArn(parameters: RiArnParameters): RiArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:ri:${parameters.reservedDbInstanceName}`
}

export interface SecgrpArnParameters {
  partition?: string | undefined
  region: string
  account: string
  securityGroupName: string
}
export type SecgrpArn = `arn:${string}:rds:${string}:${string}:secgrp:${string}`
export function secgrpArn(parameters: SecgrpArnParameters): SecgrpArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:secgrp:${parameters.securityGroupName}`
}

export interface SnapshotArnParameters {
  partition?: string | undefined
  region: string
  account: string
  snapshotName: string
}
export type SnapshotArn = `arn:${string}:rds:${string}:${string}:snapshot:${string}`
export function snapshotArn(parameters: SnapshotArnParameters): SnapshotArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:snapshot:${parameters.snapshotName}`
}

export interface SubgrpArnParameters {
  partition?: string | undefined
  region: string
  account: string
  subnetGroupName: string
}
export type SubgrpArn = `arn:${string}:rds:${string}:${string}:subgrp:${string}`
export function subgrpArn(parameters: SubgrpArnParameters): SubgrpArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:subgrp:${parameters.subnetGroupName}`
}

export interface TargetGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  targetGroupId: string
}
export type TargetGroupArn = `arn:${string}:rds:${string}:${string}:target-group:${string}`
export function targetGroupArn(parameters: TargetGroupArnParameters): TargetGroupArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:target-group:${parameters.targetGroupId}`
}

export interface CevArnParameters {
  partition?: string | undefined
  region: string
  account: string
  engine: string
  engineVersion: string
  customDbEngineVersionId: string
}
export type CevArn = `arn:${string}:rds:${string}:${string}:cev:${string}/${string}/${string}`
export function cevArn(parameters: CevArnParameters): CevArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:cev:${parameters.engine}/${parameters.engineVersion}/${parameters.customDbEngineVersionId}`
}

export interface DeploymentArnParameters {
  partition?: string | undefined
  region: string
  account: string
  blueGreenDeploymentIdentifier: string
}
export type DeploymentArn = `arn:${string}:rds:${string}:${string}:deployment:${string}`
export function deploymentArn(parameters: DeploymentArnParameters): DeploymentArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:deployment:${parameters.blueGreenDeploymentIdentifier}`
}

export interface IntegrationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  integrationIdentifier: string
}
export type IntegrationArn = `arn:${string}:rds:${string}:${string}:integration:${string}`
export function integrationArn(parameters: IntegrationArnParameters): IntegrationArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:integration:${parameters.integrationIdentifier}`
}

export interface SnapshotTenantDatabaseArnParameters {
  partition?: string | undefined
  region: string
  account: string
  snapshotName: string
  tenantResourceId: string
}
export type SnapshotTenantDatabaseArn = `arn:${string}:rds:${string}:${string}:snapshot-tenant-database:${string}:${string}`
export function snapshotTenantDatabaseArn(parameters: SnapshotTenantDatabaseArnParameters): SnapshotTenantDatabaseArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:snapshot-tenant-database:${parameters.snapshotName}:${parameters.tenantResourceId}`
}

export interface TenantDatabaseArnParameters {
  partition?: string | undefined
  region: string
  account: string
  tenantResourceId: string
}
export type TenantDatabaseArn = `arn:${string}:rds:${string}:${string}:tenant-database:${string}`
export function tenantDatabaseArn(parameters: TenantDatabaseArnParameters): TenantDatabaseArn {
  return `arn:${parameters.partition ?? ''}:rds:${parameters.region}:${parameters.account}:tenant-database:${parameters.tenantResourceId}`
}