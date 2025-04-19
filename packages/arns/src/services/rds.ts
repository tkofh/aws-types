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
  readonly dbClusterInstanceName: string
}
class ClusterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster',
  `arn:${string}:rds:${string}:${string}:cluster:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbClusterInstanceName: string
  constructor(parameters: ClusterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dbClusterInstanceName = parameters.dbClusterInstanceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:cluster:${this.dbClusterInstanceName}` as const
  }
}
export type { ClusterArn }
export function clusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterArnParameters<Partition>,
) {
  return new ClusterArn<Partition>(parameters)
}

export interface ShardgrpArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbShardGroupResourceId: string
}
class ShardgrpArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'shardgrp',
  `arn:${string}:rds:${string}:${string}:shard-group:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'shardgrp' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbShardGroupResourceId: string
  constructor(parameters: ShardgrpArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dbShardGroupResourceId = parameters.dbShardGroupResourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:shard-group:${this.dbShardGroupResourceId}` as const
  }
}
export type { ShardgrpArn }
export function shardgrpArn<Partition extends ArnPartition = 'aws'>(
  parameters: ShardgrpArnParameters<Partition>,
) {
  return new ShardgrpArn<Partition>(parameters)
}

export interface ClusterAutoBackupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbClusterAutomatedBackupId: string
}
class ClusterAutoBackupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'cluster-auto-backup',
  `arn:${string}:rds:${string}:${string}:cluster-auto-backup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster-auto-backup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbClusterAutomatedBackupId: string
  constructor(parameters: ClusterAutoBackupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dbClusterAutomatedBackupId = parameters.dbClusterAutomatedBackupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:cluster-auto-backup:${this.dbClusterAutomatedBackupId}` as const
  }
}
export type { ClusterAutoBackupArn }
export function clusterAutoBackupArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterAutoBackupArnParameters<Partition>,
) {
  return new ClusterAutoBackupArn<Partition>(parameters)
}

export interface AutoBackupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbInstanceAutomatedBackupId: string
}
class AutoBackupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'auto-backup',
  `arn:${string}:rds:${string}:${string}:auto-backup:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'auto-backup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbInstanceAutomatedBackupId: string
  constructor(parameters: AutoBackupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dbInstanceAutomatedBackupId = parameters.dbInstanceAutomatedBackupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:auto-backup:${this.dbInstanceAutomatedBackupId}` as const
  }
}
export type { AutoBackupArn }
export function autoBackupArn<Partition extends ArnPartition = 'aws'>(
  parameters: AutoBackupArnParameters<Partition>,
) {
  return new AutoBackupArn<Partition>(parameters)
}

export interface ClusterEndpointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbClusterEndpoint: string
}
class ClusterEndpointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'cluster-endpoint',
  `arn:${string}:rds:${string}:${string}:cluster-endpoint:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster-endpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbClusterEndpoint: string
  constructor(parameters: ClusterEndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dbClusterEndpoint = parameters.dbClusterEndpoint
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:cluster-endpoint:${this.dbClusterEndpoint}` as const
  }
}
export type { ClusterEndpointArn }
export function clusterEndpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterEndpointArnParameters<Partition>,
) {
  return new ClusterEndpointArn<Partition>(parameters)
}

export interface ClusterPgArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterParameterGroupName: string
}
class ClusterPgArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cluster-pg',
  `arn:${string}:rds:${string}:${string}:cluster-pg:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster-pg' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterParameterGroupName: string
  constructor(parameters: ClusterPgArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterParameterGroupName = parameters.clusterParameterGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:cluster-pg:${this.clusterParameterGroupName}` as const
  }
}
export type { ClusterPgArn }
export function clusterPgArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterPgArnParameters<Partition>,
) {
  return new ClusterPgArn<Partition>(parameters)
}

export interface ClusterSnapshotArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterSnapshotName: string
}
class ClusterSnapshotArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'cluster-snapshot',
  `arn:${string}:rds:${string}:${string}:cluster-snapshot:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cluster-snapshot' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly clusterSnapshotName: string
  constructor(parameters: ClusterSnapshotArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.clusterSnapshotName = parameters.clusterSnapshotName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:cluster-snapshot:${this.clusterSnapshotName}` as const
  }
}
export type { ClusterSnapshotArn }
export function clusterSnapshotArn<Partition extends ArnPartition = 'aws'>(
  parameters: ClusterSnapshotArnParameters<Partition>,
) {
  return new ClusterSnapshotArn<Partition>(parameters)
}

export interface DbArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbInstanceName: string
}
class DbArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'db',
  `arn:${string}:rds:${string}:${string}:db:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'db' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbInstanceName: string
  constructor(parameters: DbArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dbInstanceName = parameters.dbInstanceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:db:${this.dbInstanceName}` as const
  }
}
export type { DbArn }
export function dbArn<Partition extends ArnPartition = 'aws'>(
  parameters: DbArnParameters<Partition>,
) {
  return new DbArn<Partition>(parameters)
}

export interface EsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subscriptionName: string
}
class EsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'es',
  `arn:${string}:rds:${string}:${string}:es:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'es' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subscriptionName: string
  constructor(parameters: EsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.subscriptionName = parameters.subscriptionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:es:${this.subscriptionName}` as const
  }
}
export type { EsArn }
export function esArn<Partition extends ArnPartition = 'aws'>(
  parameters: EsArnParameters<Partition>,
) {
  return new EsArn<Partition>(parameters)
}

export interface GlobalClusterArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly globalCluster: string
}
class GlobalClusterArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'global-cluster',
  `arn:${string}:rds::${string}:global-cluster:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'global-cluster' as const
  readonly partition: Partition
  readonly account: string
  readonly globalCluster: string
  constructor(parameters: GlobalClusterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.globalCluster = parameters.globalCluster
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds::${this.account}:global-cluster:${this.globalCluster}` as const
  }
}
export type { GlobalClusterArn }
export function globalClusterArn<Partition extends ArnPartition = 'aws'>(
  parameters: GlobalClusterArnParameters<Partition>,
) {
  return new GlobalClusterArn<Partition>(parameters)
}

export interface OgArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly optionGroupName: string
}
class OgArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'og',
  `arn:${string}:rds:${string}:${string}:og:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'og' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly optionGroupName: string
  constructor(parameters: OgArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.optionGroupName = parameters.optionGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:og:${this.optionGroupName}` as const
  }
}
export type { OgArn }
export function ogArn<Partition extends ArnPartition = 'aws'>(
  parameters: OgArnParameters<Partition>,
) {
  return new OgArn<Partition>(parameters)
}

export interface PgArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly parameterGroupName: string
}
class PgArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'pg',
  `arn:${string}:rds:${string}:${string}:pg:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'pg' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly parameterGroupName: string
  constructor(parameters: PgArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.parameterGroupName = parameters.parameterGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:pg:${this.parameterGroupName}` as const
  }
}
export type { PgArn }
export function pgArn<Partition extends ArnPartition = 'aws'>(
  parameters: PgArnParameters<Partition>,
) {
  return new PgArn<Partition>(parameters)
}

export interface ProxyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbProxyId: string
}
class ProxyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'proxy',
  `arn:${string}:rds:${string}:${string}:db-proxy:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'proxy' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbProxyId: string
  constructor(parameters: ProxyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dbProxyId = parameters.dbProxyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:db-proxy:${this.dbProxyId}` as const
  }
}
export type { ProxyArn }
export function proxyArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProxyArnParameters<Partition>,
) {
  return new ProxyArn<Partition>(parameters)
}

export interface ProxyEndpointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbProxyEndpointId: string
}
class ProxyEndpointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'proxy-endpoint',
  `arn:${string}:rds:${string}:${string}:db-proxy-endpoint:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'proxy-endpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly dbProxyEndpointId: string
  constructor(parameters: ProxyEndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.dbProxyEndpointId = parameters.dbProxyEndpointId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:db-proxy-endpoint:${this.dbProxyEndpointId}` as const
  }
}
export type { ProxyEndpointArn }
export function proxyEndpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProxyEndpointArnParameters<Partition>,
) {
  return new ProxyEndpointArn<Partition>(parameters)
}

export interface RiArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reservedDbInstanceName: string
}
class RiArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ri',
  `arn:${string}:rds:${string}:${string}:ri:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ri' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly reservedDbInstanceName: string
  constructor(parameters: RiArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.reservedDbInstanceName = parameters.reservedDbInstanceName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:ri:${this.reservedDbInstanceName}` as const
  }
}
export type { RiArn }
export function riArn<Partition extends ArnPartition = 'aws'>(
  parameters: RiArnParameters<Partition>,
) {
  return new RiArn<Partition>(parameters)
}

export interface SecgrpArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityGroupName: string
}
class SecgrpArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'secgrp',
  `arn:${string}:rds:${string}:${string}:secgrp:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'secgrp' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly securityGroupName: string
  constructor(parameters: SecgrpArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.securityGroupName = parameters.securityGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:secgrp:${this.securityGroupName}` as const
  }
}
export type { SecgrpArn }
export function secgrpArn<Partition extends ArnPartition = 'aws'>(
  parameters: SecgrpArnParameters<Partition>,
) {
  return new SecgrpArn<Partition>(parameters)
}

export interface SnapshotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly snapshotName: string
}
class SnapshotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'snapshot',
  `arn:${string}:rds:${string}:${string}:snapshot:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'snapshot' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly snapshotName: string
  constructor(parameters: SnapshotArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.snapshotName = parameters.snapshotName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:snapshot:${this.snapshotName}` as const
  }
}
export type { SnapshotArn }
export function snapshotArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotArnParameters<Partition>,
) {
  return new SnapshotArn<Partition>(parameters)
}

export interface SubgrpArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subnetGroupName: string
}
class SubgrpArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'subgrp',
  `arn:${string}:rds:${string}:${string}:subgrp:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subgrp' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subnetGroupName: string
  constructor(parameters: SubgrpArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.subnetGroupName = parameters.subnetGroupName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:subgrp:${this.subnetGroupName}` as const
  }
}
export type { SubgrpArn }
export function subgrpArn<Partition extends ArnPartition = 'aws'>(
  parameters: SubgrpArnParameters<Partition>,
) {
  return new SubgrpArn<Partition>(parameters)
}

export interface TargetGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly targetGroupId: string
}
class TargetGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'target-group',
  `arn:${string}:rds:${string}:${string}:target-group:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'target-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly targetGroupId: string
  constructor(parameters: TargetGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.targetGroupId = parameters.targetGroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:target-group:${this.targetGroupId}` as const
  }
}
export type { TargetGroupArn }
export function targetGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: TargetGroupArnParameters<Partition>,
) {
  return new TargetGroupArn<Partition>(parameters)
}

export interface CevArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly engine: string
  readonly engineVersion: string
  readonly customDbEngineVersionId: string
}
class CevArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'cev',
  `arn:${string}:rds:${string}:${string}:cev:${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'cev' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly engine: string
  readonly engineVersion: string
  readonly customDbEngineVersionId: string
  constructor(parameters: CevArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.engine = parameters.engine
    this.engineVersion = parameters.engineVersion
    this.customDbEngineVersionId = parameters.customDbEngineVersionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:cev:${this.engine}/${this.engineVersion}/${this.customDbEngineVersionId}` as const
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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly blueGreenDeploymentIdentifier: string
}
class DeploymentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'deployment',
  `arn:${string}:rds:${string}:${string}:deployment:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'deployment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly blueGreenDeploymentIdentifier: string
  constructor(parameters: DeploymentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.blueGreenDeploymentIdentifier =
      parameters.blueGreenDeploymentIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:deployment:${this.blueGreenDeploymentIdentifier}` as const
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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly integrationIdentifier: string
}
class IntegrationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'integration',
  `arn:${string}:rds:${string}:${string}:integration:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'integration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly integrationIdentifier: string
  constructor(parameters: IntegrationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.integrationIdentifier = parameters.integrationIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:integration:${this.integrationIdentifier}` as const
  }
}
export type { IntegrationArn }
export function integrationArn<Partition extends ArnPartition = 'aws'>(
  parameters: IntegrationArnParameters<Partition>,
) {
  return new IntegrationArn<Partition>(parameters)
}

export interface SnapshotTenantDatabaseArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly snapshotName: string
  readonly tenantResourceId: string
}
class SnapshotTenantDatabaseArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'snapshot-tenant-database',
  `arn:${string}:rds:${string}:${string}:snapshot-tenant-database:${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'snapshot-tenant-database' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly snapshotName: string
  readonly tenantResourceId: string
  constructor(parameters: SnapshotTenantDatabaseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.snapshotName = parameters.snapshotName
    this.tenantResourceId = parameters.tenantResourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:snapshot-tenant-database:${this.snapshotName}:${this.tenantResourceId}` as const
  }
}
export type { SnapshotTenantDatabaseArn }
export function snapshotTenantDatabaseArn<
  Partition extends ArnPartition = 'aws',
>(parameters: SnapshotTenantDatabaseArnParameters<Partition>) {
  return new SnapshotTenantDatabaseArn<Partition>(parameters)
}

export interface TenantDatabaseArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tenantResourceId: string
}
class TenantDatabaseArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'tenant-database',
  `arn:${string}:rds:${string}:${string}:tenant-database:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'tenant-database' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly tenantResourceId: string
  constructor(parameters: TenantDatabaseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.tenantResourceId = parameters.tenantResourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rds:${this.region}:${this.account}:tenant-database:${this.tenantResourceId}` as const
  }
}
export type { TenantDatabaseArn }
export function tenantDatabaseArn<Partition extends ArnPartition = 'aws'>(
  parameters: TenantDatabaseArnParameters<Partition>,
) {
  return new TenantDatabaseArn<Partition>(parameters)
}
