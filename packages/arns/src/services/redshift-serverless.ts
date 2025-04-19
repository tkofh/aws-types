import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface NamespaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly namespaceId: string
}
class NamespaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'namespace',
  `arn:${string}:redshift-serverless:${string}:${string}:namespace/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'namespace' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly namespaceId: string
  constructor(parameters: NamespaceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.namespaceId = parameters.namespaceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift-serverless:${this.region}:${this.account}:namespace/${this.namespaceId}` as const
  }
}
export type { NamespaceArn }
export function namespaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: NamespaceArnParameters<Partition>,
) {
  return new NamespaceArn<Partition>(parameters)
}

export interface SnapshotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly snapshotId: string
}
class SnapshotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'snapshot',
  `arn:${string}:redshift-serverless:${string}:${string}:snapshot/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'snapshot' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly snapshotId: string
  constructor(parameters: SnapshotArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.snapshotId = parameters.snapshotId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift-serverless:${this.region}:${this.account}:snapshot/${this.snapshotId}` as const
  }
}
export type { SnapshotArn }
export function snapshotArn<Partition extends ArnPartition = 'aws'>(
  parameters: SnapshotArnParameters<Partition>,
) {
  return new SnapshotArn<Partition>(parameters)
}

export interface WorkgroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workgroupId: string
}
class WorkgroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workgroup',
  `arn:${string}:redshift-serverless:${string}:${string}:workgroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workgroupId: string
  constructor(parameters: WorkgroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workgroupId = parameters.workgroupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift-serverless:${this.region}:${this.account}:workgroup/${this.workgroupId}` as const
  }
}
export type { WorkgroupArn }
export function workgroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkgroupArnParameters<Partition>,
) {
  return new WorkgroupArn<Partition>(parameters)
}

export interface RecoveryPointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly recoveryPointId: string
}
class RecoveryPointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'recoveryPoint',
  `arn:${string}:redshift-serverless:${string}:${string}:recoverypoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'recoveryPoint' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly recoveryPointId: string
  constructor(parameters: RecoveryPointArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.recoveryPointId = parameters.recoveryPointId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift-serverless:${this.region}:${this.account}:recoverypoint/${this.recoveryPointId}` as const
  }
}
export type { RecoveryPointArn }
export function recoveryPointArn<Partition extends ArnPartition = 'aws'>(
  parameters: RecoveryPointArnParameters<Partition>,
) {
  return new RecoveryPointArn<Partition>(parameters)
}

export interface EndpointAccessArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly endpointAccessId: string
}
class EndpointAccessArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'endpointAccess',
  `arn:${string}:redshift-serverless:${string}:${string}:managedvpcendpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'endpointAccess' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly endpointAccessId: string
  constructor(parameters: EndpointAccessArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.endpointAccessId = parameters.endpointAccessId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift-serverless:${this.region}:${this.account}:managedvpcendpoint/${this.endpointAccessId}` as const
  }
}
export type { EndpointAccessArn }
export function endpointAccessArn<Partition extends ArnPartition = 'aws'>(
  parameters: EndpointAccessArnParameters<Partition>,
) {
  return new EndpointAccessArn<Partition>(parameters)
}
