import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface CertificateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class CertificateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'Certificate',
  `arn:${string}:dms:${string}:${string}:cert:*`
> {
  readonly [ArnResourceTypeBrand] = 'Certificate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: CertificateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:cert:*` as const
  }
}
export type { CertificateArn }
export function certificateArn<Partition extends ArnPartition = 'aws'>(
  parameters: CertificateArnParameters<Partition>,
) {
  return new CertificateArn<Partition>(parameters)
}

export interface ProviderDataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class ProviderDataArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DataProvider',
  `arn:${string}:dms:${string}:${string}:data-provider:*`
> {
  readonly [ArnResourceTypeBrand] = 'DataProvider' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: ProviderDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:data-provider:*` as const
  }
}
export type { ProviderDataArn }
export function providerDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProviderDataArnParameters<Partition>,
) {
  return new ProviderDataArn<Partition>(parameters)
}

export interface MigrationDataArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class MigrationDataArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'DataMigration',
  `arn:${string}:dms:${string}:${string}:data-migration:*`
> {
  readonly [ArnResourceTypeBrand] = 'DataMigration' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: MigrationDataArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:data-migration:*` as const
  }
}
export type { MigrationDataArn }
export function migrationDataArn<Partition extends ArnPartition = 'aws'>(
  parameters: MigrationDataArnParameters<Partition>,
) {
  return new MigrationDataArn<Partition>(parameters)
}

export interface EndpointArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class EndpointArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Endpoint',
  `arn:${string}:dms:${string}:${string}:endpoint:*`
> {
  readonly [ArnResourceTypeBrand] = 'Endpoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: EndpointArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:endpoint:*` as const
  }
}
export type { EndpointArn }
export function endpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointArnParameters<Partition>,
) {
  return new EndpointArn<Partition>(parameters)
}

export interface SubscriptionEventArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class SubscriptionEventArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'EventSubscription',
  `arn:${string}:dms:${string}:${string}:es:*`
> {
  readonly [ArnResourceTypeBrand] = 'EventSubscription' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: SubscriptionEventArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:es:*` as const
  }
}
export type { SubscriptionEventArn }
export function subscriptionEventArn<Partition extends ArnPartition = 'aws'>(
  parameters: SubscriptionEventArnParameters<Partition>,
) {
  return new SubscriptionEventArn<Partition>(parameters)
}

export interface ProfileInstanceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class ProfileInstanceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'InstanceProfile',
  `arn:${string}:dms:${string}:${string}:instance-profile:*`
> {
  readonly [ArnResourceTypeBrand] = 'InstanceProfile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: ProfileInstanceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:instance-profile:*` as const
  }
}
export type { ProfileInstanceArn }
export function profileInstanceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileInstanceArnParameters<Partition>,
) {
  return new ProfileInstanceArn<Partition>(parameters)
}

export interface ProjectMigrationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class ProjectMigrationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'MigrationProject',
  `arn:${string}:dms:${string}:${string}:migration-project:*`
> {
  readonly [ArnResourceTypeBrand] = 'MigrationProject' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: ProjectMigrationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:migration-project:*` as const
  }
}
export type { ProjectMigrationArn }
export function projectMigrationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectMigrationArnParameters<Partition>,
) {
  return new ProjectMigrationArn<Partition>(parameters)
}

export interface ConfigReplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class ConfigReplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ReplicationConfig',
  `arn:${string}:dms:${string}:${string}:replication-config:*`
> {
  readonly [ArnResourceTypeBrand] = 'ReplicationConfig' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: ConfigReplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:replication-config:*` as const
  }
}
export type { ConfigReplicationArn }
export function configReplicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConfigReplicationArnParameters<Partition>,
) {
  return new ConfigReplicationArn<Partition>(parameters)
}

export interface InstanceReplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class InstanceReplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ReplicationInstance',
  `arn:${string}:dms:${string}:${string}:rep:*`
> {
  readonly [ArnResourceTypeBrand] = 'ReplicationInstance' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: InstanceReplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:rep:*` as const
  }
}
export type { InstanceReplicationArn }
export function instanceReplicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: InstanceReplicationArnParameters<Partition>,
) {
  return new InstanceReplicationArn<Partition>(parameters)
}

export interface GroupSubnetReplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class GroupSubnetReplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ReplicationSubnetGroup',
  `arn:${string}:dms:${string}:${string}:subgrp:*`
> {
  readonly [ArnResourceTypeBrand] = 'ReplicationSubnetGroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: GroupSubnetReplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:subgrp:*` as const
  }
}
export type { GroupSubnetReplicationArn }
export function groupSubnetReplicationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: GroupSubnetReplicationArnParameters<Partition>) {
  return new GroupSubnetReplicationArn<Partition>(parameters)
}

export interface TaskReplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class TaskReplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ReplicationTask',
  `arn:${string}:dms:${string}:${string}:task:*`
> {
  readonly [ArnResourceTypeBrand] = 'ReplicationTask' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(parameters: TaskReplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:task:*` as const
  }
}
export type { TaskReplicationArn }
export function taskReplicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: TaskReplicationArnParameters<Partition>,
) {
  return new TaskReplicationArn<Partition>(parameters)
}

export interface RunAssessmentTaskReplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class RunAssessmentTaskReplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ReplicationTaskAssessmentRun',
  `arn:${string}:dms:${string}:${string}:assessment-run:*`
> {
  readonly [ArnResourceTypeBrand] = 'ReplicationTaskAssessmentRun' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(
    parameters: RunAssessmentTaskReplicationArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:assessment-run:*` as const
  }
}
export type { RunAssessmentTaskReplicationArn }
export function runAssessmentTaskReplicationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: RunAssessmentTaskReplicationArnParameters<Partition>) {
  return new RunAssessmentTaskReplicationArn<Partition>(parameters)
}

export interface AssessmentIndividualTaskReplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
}
class AssessmentIndividualTaskReplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ReplicationTaskIndividualAssessment',
  `arn:${string}:dms:${string}:${string}:individual-assessment:*`
> {
  readonly [ArnResourceTypeBrand] =
    'ReplicationTaskIndividualAssessment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  constructor(
    parameters: AssessmentIndividualTaskReplicationArnParameters<Partition>,
  ) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:dms:${this.region}:${this.account}:individual-assessment:*` as const
  }
}
export type { AssessmentIndividualTaskReplicationArn }
export function assessmentIndividualTaskReplicationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: AssessmentIndividualTaskReplicationArnParameters<Partition>) {
  return new AssessmentIndividualTaskReplicationArn<Partition>(parameters)
}
