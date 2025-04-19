import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface CertificateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class CertificateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Certificate', `arn:${string}:dms:${string}:${string}:cert:*`> {
  readonly [ArnResourceTypeBrand] = 'Certificate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: CertificateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:cert:*` as const
  }
}
export type { CertificateArn }
export function certificateArn<Partition extends ArnPartition = 'aws'>(parameters: CertificateArnParameters<Partition>) {
  return new CertificateArn<Partition>(parameters)
}

export interface DataProviderArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class DataProviderArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'DataProvider', `arn:${string}:dms:${string}:${string}:data-provider:*`> {
  readonly [ArnResourceTypeBrand] = 'DataProvider' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: DataProviderArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:data-provider:*` as const
  }
}
export type { DataProviderArn }
export function dataProviderArn<Partition extends ArnPartition = 'aws'>(parameters: DataProviderArnParameters<Partition>) {
  return new DataProviderArn<Partition>(parameters)
}

export interface DataMigrationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class DataMigrationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'DataMigration', `arn:${string}:dms:${string}:${string}:data-migration:*`> {
  readonly [ArnResourceTypeBrand] = 'DataMigration' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: DataMigrationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:data-migration:*` as const
  }
}
export type { DataMigrationArn }
export function dataMigrationArn<Partition extends ArnPartition = 'aws'>(parameters: DataMigrationArnParameters<Partition>) {
  return new DataMigrationArn<Partition>(parameters)
}

export interface EndpointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class EndpointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Endpoint', `arn:${string}:dms:${string}:${string}:endpoint:*`> {
  readonly [ArnResourceTypeBrand] = 'Endpoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: EndpointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:endpoint:*` as const
  }
}
export type { EndpointArn }
export function endpointArn<Partition extends ArnPartition = 'aws'>(parameters: EndpointArnParameters<Partition>) {
  return new EndpointArn<Partition>(parameters)
}

export interface EventSubscriptionArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class EventSubscriptionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'EventSubscription', `arn:${string}:dms:${string}:${string}:es:*`> {
  readonly [ArnResourceTypeBrand] = 'EventSubscription' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: EventSubscriptionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:es:*` as const
  }
}
export type { EventSubscriptionArn }
export function eventSubscriptionArn<Partition extends ArnPartition = 'aws'>(parameters: EventSubscriptionArnParameters<Partition>) {
  return new EventSubscriptionArn<Partition>(parameters)
}

export interface InstanceProfileArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class InstanceProfileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'InstanceProfile', `arn:${string}:dms:${string}:${string}:instance-profile:*`> {
  readonly [ArnResourceTypeBrand] = 'InstanceProfile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: InstanceProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:instance-profile:*` as const
  }
}
export type { InstanceProfileArn }
export function instanceProfileArn<Partition extends ArnPartition = 'aws'>(parameters: InstanceProfileArnParameters<Partition>) {
  return new InstanceProfileArn<Partition>(parameters)
}

export interface MigrationProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class MigrationProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'MigrationProject', `arn:${string}:dms:${string}:${string}:migration-project:*`> {
  readonly [ArnResourceTypeBrand] = 'MigrationProject' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: MigrationProjectArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:migration-project:*` as const
  }
}
export type { MigrationProjectArn }
export function migrationProjectArn<Partition extends ArnPartition = 'aws'>(parameters: MigrationProjectArnParameters<Partition>) {
  return new MigrationProjectArn<Partition>(parameters)
}

export interface ReplicationConfigArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class ReplicationConfigArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'ReplicationConfig', `arn:${string}:dms:${string}:${string}:replication-config:*`> {
  readonly [ArnResourceTypeBrand] = 'ReplicationConfig' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: ReplicationConfigArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:replication-config:*` as const
  }
}
export type { ReplicationConfigArn }
export function replicationConfigArn<Partition extends ArnPartition = 'aws'>(parameters: ReplicationConfigArnParameters<Partition>) {
  return new ReplicationConfigArn<Partition>(parameters)
}

export interface ReplicationInstanceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class ReplicationInstanceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'ReplicationInstance', `arn:${string}:dms:${string}:${string}:rep:*`> {
  readonly [ArnResourceTypeBrand] = 'ReplicationInstance' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: ReplicationInstanceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:rep:*` as const
  }
}
export type { ReplicationInstanceArn }
export function replicationInstanceArn<Partition extends ArnPartition = 'aws'>(parameters: ReplicationInstanceArnParameters<Partition>) {
  return new ReplicationInstanceArn<Partition>(parameters)
}

export interface ReplicationSubnetGroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class ReplicationSubnetGroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'ReplicationSubnetGroup', `arn:${string}:dms:${string}:${string}:subgrp:*`> {
  readonly [ArnResourceTypeBrand] = 'ReplicationSubnetGroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: ReplicationSubnetGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:subgrp:*` as const
  }
}
export type { ReplicationSubnetGroupArn }
export function replicationSubnetGroupArn<Partition extends ArnPartition = 'aws'>(parameters: ReplicationSubnetGroupArnParameters<Partition>) {
  return new ReplicationSubnetGroupArn<Partition>(parameters)
}

export interface ReplicationTaskArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class ReplicationTaskArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'ReplicationTask', `arn:${string}:dms:${string}:${string}:task:*`> {
  readonly [ArnResourceTypeBrand] = 'ReplicationTask' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: ReplicationTaskArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:task:*` as const
  }
}
export type { ReplicationTaskArn }
export function replicationTaskArn<Partition extends ArnPartition = 'aws'>(parameters: ReplicationTaskArnParameters<Partition>) {
  return new ReplicationTaskArn<Partition>(parameters)
}

export interface ReplicationTaskAssessmentRunArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class ReplicationTaskAssessmentRunArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'ReplicationTaskAssessmentRun', `arn:${string}:dms:${string}:${string}:assessment-run:*`> {
  readonly [ArnResourceTypeBrand] = 'ReplicationTaskAssessmentRun' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: ReplicationTaskAssessmentRunArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:assessment-run:*` as const
  }
}
export type { ReplicationTaskAssessmentRunArn }
export function replicationTaskAssessmentRunArn<Partition extends ArnPartition = 'aws'>(parameters: ReplicationTaskAssessmentRunArnParameters<Partition>) {
  return new ReplicationTaskAssessmentRunArn<Partition>(parameters)
}

export interface ReplicationTaskIndividualAssessmentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
}
class ReplicationTaskIndividualAssessmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'ReplicationTaskIndividualAssessment', `arn:${string}:dms:${string}:${string}:individual-assessment:*`> {
  readonly [ArnResourceTypeBrand] = 'ReplicationTaskIndividualAssessment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  constructor(parameters: ReplicationTaskIndividualAssessmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:individual-assessment:*` as const
  }
}
export type { ReplicationTaskIndividualAssessmentArn }
export function replicationTaskIndividualAssessmentArn<Partition extends ArnPartition = 'aws'>(parameters: ReplicationTaskIndividualAssessmentArnParameters<Partition>) {
  return new ReplicationTaskIndividualAssessmentArn<Partition>(parameters)
}