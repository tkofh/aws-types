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
  readonly nameInstanceClusterDb: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:rds:${string}:${string}:cluster:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameInstanceClusterDb: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameInstanceClusterDb = parameters.nameInstanceClusterDb
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:cluster:${this.nameInstanceClusterDb}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface GrpShardArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResourceGroupShardDb: string
}
class GrpShardArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'shardgrp',
  `arn:${string}:rds:${string}:${string}:shard-group:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'shardgrp' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResourceGroupShardDb: string
  constructor(parameters: GrpShardArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResourceGroupShardDb = parameters.idResourceGroupShardDb
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:shard-group:${this.idResourceGroupShardDb}` as const
  }
}
export type { GrpShardArn }
export function grpShardArn<Partition extends ArnPartition = 'aws'>(
  parameters: GrpShardArnParameters<Partition>,
) {
  return new GrpShardArn<Partition>(parameters)
}

export interface BackupAutoClusterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBackupAutomatedClusterDb: string
}
class BackupAutoClusterArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'cluster-auto-backup',
  `arn:${string}:rds:${string}:${string}:cluster-auto-backup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster-auto-backup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBackupAutomatedClusterDb: string
  constructor(parameters: BackupAutoClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idBackupAutomatedClusterDb = parameters.idBackupAutomatedClusterDb
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:cluster-auto-backup:${this.idBackupAutomatedClusterDb}` as const
  }
}
export type { BackupAutoClusterArn }
export function backupAutoClusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: BackupAutoClusterArnParameters<Partition>,
) {
  return new BackupAutoClusterArn<Partition>(parameters)
}

export interface BackupAutoArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBackupAutomatedInstanceDb: string
}
class BackupAutoArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'auto-backup',
  `arn:${string}:rds:${string}:${string}:auto-backup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'auto-backup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBackupAutomatedInstanceDb: string
  constructor(parameters: BackupAutoArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idBackupAutomatedInstanceDb = parameters.idBackupAutomatedInstanceDb
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:auto-backup:${this.idBackupAutomatedInstanceDb}` as const
  }
}
export type { BackupAutoArn }
export function backupAutoArn<Partition extends ArnPartition = 'aws'>(
  parameters: BackupAutoArnParameters<Partition>,
) {
  return new BackupAutoArn<Partition>(parameters)
}

export interface EndpointClusterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly endpointClusterDb: string
}
class EndpointClusterArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'cluster-endpoint',
  `arn:${string}:rds:${string}:${string}:cluster-endpoint:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster-endpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly endpointClusterDb: string
  constructor(parameters: EndpointClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.endpointClusterDb = parameters.endpointClusterDb
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:cluster-endpoint:${this.endpointClusterDb}` as const
  }
}
export type { EndpointClusterArn }
export function endpointClusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointClusterArnParameters<Partition>,
) {
  return new EndpointClusterArn<Partition>(parameters)
}

export interface PgClusterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupParameterCluster: string
}
class PgClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster-pg',
  `arn:${string}:rds:${string}:${string}:cluster-pg:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster-pg' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupParameterCluster: string
  constructor(parameters: PgClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupParameterCluster = parameters.nameGroupParameterCluster
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:cluster-pg:${this.nameGroupParameterCluster}` as const
  }
}
export type { PgClusterArn }
export function pgClusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: PgClusterArnParameters<Partition>,
) {
  return new PgClusterArn<Partition>(parameters)
}

export interface SnapshotClusterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSnapshotCluster: string
}
class SnapshotClusterArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'cluster-snapshot',
  `arn:${string}:rds:${string}:${string}:cluster-snapshot:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster-snapshot' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSnapshotCluster: string
  constructor(parameters: SnapshotClusterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSnapshotCluster = parameters.nameSnapshotCluster
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:cluster-snapshot:${this.nameSnapshotCluster}` as const
  }
}
export type { SnapshotClusterArn }
export function snapshotClusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotClusterArnParameters<Partition>,
) {
  return new SnapshotClusterArn<Partition>(parameters)
}

export interface DbArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameInstanceDb: string
}
class DbArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'db',
  `arn:${string}:rds:${string}:${string}:db:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'db' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameInstanceDb: string
  constructor(parameters: DbArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameInstanceDb = parameters.nameInstanceDb
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:db:${this.nameInstanceDb}` as const
  }
}
export type { DbArn }
export function dbArn<Partition extends ArnPartition = 'aws'>(
  parameters: DbArnParameters<Partition>,
) {
  return new DbArn<Partition>(parameters)
}

export interface EsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSubscription: string
}
class EsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'es',
  `arn:${string}:rds:${string}:${string}:es:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'es' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSubscription: string
  constructor(parameters: EsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSubscription = parameters.nameSubscription
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:es:${this.nameSubscription}` as const
  }
}
export type { EsArn }
export function esArn<Partition extends ArnPartition = 'aws'>(
  parameters: EsArnParameters<Partition>,
) {
  return new EsArn<Partition>(parameters)
}

export interface ClusterGlobalArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly clusterGlobal: string
}
class ClusterGlobalArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'global-cluster',
  `arn:${string}:rds::${string}:global-cluster:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'global-cluster' as const
  readonly partition: string
  readonly account: string
  readonly clusterGlobal: string
  constructor(parameters: ClusterGlobalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.clusterGlobal = parameters.clusterGlobal
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds::${this.account}:global-cluster:${this.clusterGlobal}` as const
  }
}
export type { ClusterGlobalArn }
export function clusterGlobalArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterGlobalArnParameters<Partition>,
) {
  return new ClusterGlobalArn<Partition>(parameters)
}

export interface OgArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupOption: string
}
class OgArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'og',
  `arn:${string}:rds:${string}:${string}:og:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'og' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupOption: string
  constructor(parameters: OgArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupOption = parameters.nameGroupOption
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:og:${this.nameGroupOption}` as const
  }
}
export type { OgArn }
export function ogArn<Partition extends ArnPartition = 'aws'>(
  parameters: OgArnParameters<Partition>,
) {
  return new OgArn<Partition>(parameters)
}

export interface PgArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupParameter: string
}
class PgArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'pg',
  `arn:${string}:rds:${string}:${string}:pg:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pg' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupParameter: string
  constructor(parameters: PgArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupParameter = parameters.nameGroupParameter
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:pg:${this.nameGroupParameter}` as const
  }
}
export type { PgArn }
export function pgArn<Partition extends ArnPartition = 'aws'>(
  parameters: PgArnParameters<Partition>,
) {
  return new PgArn<Partition>(parameters)
}

export interface ProxyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProxyDb: string
}
class ProxyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'proxy',
  `arn:${string}:rds:${string}:${string}:db-proxy:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'proxy' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProxyDb: string
  constructor(parameters: ProxyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idProxyDb = parameters.idProxyDb
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:db-proxy:${this.idProxyDb}` as const
  }
}
export type { ProxyArn }
export function proxyArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProxyArnParameters<Partition>,
) {
  return new ProxyArn<Partition>(parameters)
}

export interface EndpointProxyArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEndpointProxyDb: string
}
class EndpointProxyArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'proxy-endpoint',
  `arn:${string}:rds:${string}:${string}:db-proxy-endpoint:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'proxy-endpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idEndpointProxyDb: string
  constructor(parameters: EndpointProxyArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idEndpointProxyDb = parameters.idEndpointProxyDb
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:db-proxy-endpoint:${this.idEndpointProxyDb}` as const
  }
}
export type { EndpointProxyArn }
export function endpointProxyArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointProxyArnParameters<Partition>,
) {
  return new EndpointProxyArn<Partition>(parameters)
}

export interface RiArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameInstanceDbReserved: string
}
class RiArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ri',
  `arn:${string}:rds:${string}:${string}:ri:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ri' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameInstanceDbReserved: string
  constructor(parameters: RiArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameInstanceDbReserved = parameters.nameInstanceDbReserved
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:ri:${this.nameInstanceDbReserved}` as const
  }
}
export type { RiArn }
export function riArn<Partition extends ArnPartition = 'aws'>(
  parameters: RiArnParameters<Partition>,
) {
  return new RiArn<Partition>(parameters)
}

export interface SecgrpArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupSecurity: string
}
class SecgrpArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'secgrp',
  `arn:${string}:rds:${string}:${string}:secgrp:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'secgrp' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupSecurity: string
  constructor(parameters: SecgrpArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupSecurity = parameters.nameGroupSecurity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:secgrp:${this.nameGroupSecurity}` as const
  }
}
export type { SecgrpArn }
export function secgrpArn<Partition extends ArnPartition = 'aws'>(
  parameters: SecgrpArnParameters<Partition>,
) {
  return new SecgrpArn<Partition>(parameters)
}

export interface SnapshotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSnapshot: string
}
class SnapshotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'snapshot',
  `arn:${string}:rds:${string}:${string}:snapshot:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'snapshot' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSnapshot: string
  constructor(parameters: SnapshotArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSnapshot = parameters.nameSnapshot
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:snapshot:${this.nameSnapshot}` as const
  }
}
export type { SnapshotArn }
export function snapshotArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotArnParameters<Partition>,
) {
  return new SnapshotArn<Partition>(parameters)
}

export interface SubgrpArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupSubnet: string
}
class SubgrpArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'subgrp',
  `arn:${string}:rds:${string}:${string}:subgrp:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subgrp' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameGroupSubnet: string
  constructor(parameters: SubgrpArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameGroupSubnet = parameters.nameGroupSubnet
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:subgrp:${this.nameGroupSubnet}` as const
  }
}
export type { SubgrpArn }
export function subgrpArn<Partition extends ArnPartition = 'aws'>(
  parameters: SubgrpArnParameters<Partition>,
) {
  return new SubgrpArn<Partition>(parameters)
}

export interface GroupTargetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupTarget: string
}
class GroupTargetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'target-group',
  `arn:${string}:rds:${string}:${string}:target-group:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'target-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroupTarget: string
  constructor(parameters: GroupTargetArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroupTarget = parameters.idGroupTarget
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:target-group:${this.idGroupTarget}` as const
  }
}
export type { GroupTargetArn }
export function groupTargetArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupTargetArnParameters<Partition>,
) {
  return new GroupTargetArn<Partition>(parameters)
}

export interface CevArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly engine: string
  readonly versionEngine: string
  readonly idVersionEngineDbCustom: string
}
class CevArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cev',
  `arn:${string}:rds:${string}:${string}:cev:${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cev' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly engine: string
  readonly versionEngine: string
  readonly idVersionEngineDbCustom: string
  constructor(parameters: CevArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.engine = parameters.engine
    this.versionEngine = parameters.versionEngine
    this.idVersionEngineDbCustom = parameters.idVersionEngineDbCustom
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:cev:${this.engine}/${this.versionEngine}/${this.idVersionEngineDbCustom}` as const
  }
}
export type { CevArn }
export function cevArn<Partition extends ArnPartition = 'aws'>(
  parameters: CevArnParameters<Partition>,
) {
  return new CevArn<Partition>(parameters)
}

export interface DeploymentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierDeploymentGreenBlue: string
}
class DeploymentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'deployment',
  `arn:${string}:rds:${string}:${string}:deployment:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deployment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierDeploymentGreenBlue: string
  constructor(parameters: DeploymentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifierDeploymentGreenBlue =
      parameters.identifierDeploymentGreenBlue
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:deployment:${this.identifierDeploymentGreenBlue}` as const
  }
}
export type { DeploymentArn }
export function deploymentArn<Partition extends ArnPartition = 'aws'>(
  parameters: DeploymentArnParameters<Partition>,
) {
  return new DeploymentArn<Partition>(parameters)
}

export interface IntegrationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierIntegration: string
}
class IntegrationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'integration',
  `arn:${string}:rds:${string}:${string}:integration:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'integration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierIntegration: string
  constructor(parameters: IntegrationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifierIntegration = parameters.identifierIntegration
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:integration:${this.identifierIntegration}` as const
  }
}
export type { IntegrationArn }
export function integrationArn<Partition extends ArnPartition = 'aws'>(
  parameters: IntegrationArnParameters<Partition>,
) {
  return new IntegrationArn<Partition>(parameters)
}

export interface DatabaseTenantSnapshotArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSnapshot: string
  readonly idResourceTenant: string
}
class DatabaseTenantSnapshotArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'snapshot-tenant-database',
  `arn:${string}:rds:${string}:${string}:snapshot-tenant-database:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'snapshot-tenant-database' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameSnapshot: string
  readonly idResourceTenant: string
  constructor(parameters: DatabaseTenantSnapshotArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameSnapshot = parameters.nameSnapshot
    this.idResourceTenant = parameters.idResourceTenant
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:snapshot-tenant-database:${this.nameSnapshot}:${this.idResourceTenant}` as const
  }
}
export type { DatabaseTenantSnapshotArn }
export function databaseTenantSnapshotArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DatabaseTenantSnapshotArnParameters<Partition>) {
  return new DatabaseTenantSnapshotArn<Partition>(parameters)
}

export interface DatabaseTenantArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResourceTenant: string
}
class DatabaseTenantArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'tenant-database',
  `arn:${string}:rds:${string}:${string}:tenant-database:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'tenant-database' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResourceTenant: string
  constructor(parameters: DatabaseTenantArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResourceTenant = parameters.idResourceTenant
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:tenant-database:${this.idResourceTenant}` as const
  }
}
export type { DatabaseTenantArn }
export function databaseTenantArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatabaseTenantArnParameters<Partition>,
) {
  return new DatabaseTenantArn<Partition>(parameters)
}
