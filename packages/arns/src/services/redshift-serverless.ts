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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNamespace: string
}
class NamespaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'namespace',
  `arn:${string}:redshift-serverless:${string}:${string}:namespace/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'namespace' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNamespace: string
  constructor(parameters: NamespaceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idNamespace = parameters.idNamespace
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift-serverless:${this.region}:${this.account}:namespace/${this.idNamespace}` as const
  }
}
export type { NamespaceArn }
export function namespaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: NamespaceArnParameters<Partition>,
) {
  return new NamespaceArn<Partition>(parameters)
}

export interface SnapshotArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSnapshot: string
}
class SnapshotArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'snapshot',
  `arn:${string}:redshift-serverless:${string}:${string}:snapshot/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'snapshot' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSnapshot: string
  constructor(parameters: SnapshotArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSnapshot = parameters.idSnapshot
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift-serverless:${this.region}:${this.account}:snapshot/${this.idSnapshot}` as const
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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkgroup: string
}
class WorkgroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workgroup',
  `arn:${string}:redshift-serverless:${string}:${string}:workgroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workgroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkgroup: string
  constructor(parameters: WorkgroupArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWorkgroup = parameters.idWorkgroup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift-serverless:${this.region}:${this.account}:workgroup/${this.idWorkgroup}` as const
  }
}
export type { WorkgroupArn }
export function workgroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkgroupArnParameters<Partition>,
) {
  return new WorkgroupArn<Partition>(parameters)
}

export interface PointRecoveryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPointRecovery: string
}
class PointRecoveryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'recoveryPoint',
  `arn:${string}:redshift-serverless:${string}:${string}:recoverypoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'recoveryPoint' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPointRecovery: string
  constructor(parameters: PointRecoveryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPointRecovery = parameters.idPointRecovery
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift-serverless:${this.region}:${this.account}:recoverypoint/${this.idPointRecovery}` as const
  }
}
export type { PointRecoveryArn }
export function pointRecoveryArn<Partition extends ArnPartition = 'aws'>(
  parameters: PointRecoveryArnParameters<Partition>,
) {
  return new PointRecoveryArn<Partition>(parameters)
}

export interface AccessEndpointArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAccessEndpoint: string
}
class AccessEndpointArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'endpointAccess',
  `arn:${string}:redshift-serverless:${string}:${string}:managedvpcendpoint/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'endpointAccess' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAccessEndpoint: string
  constructor(parameters: AccessEndpointArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAccessEndpoint = parameters.idAccessEndpoint
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:redshift-serverless:${this.region}:${this.account}:managedvpcendpoint/${this.idAccessEndpoint}` as const
  }
}
export type { AccessEndpointArn }
export function accessEndpointArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccessEndpointArnParameters<Partition>,
) {
  return new AccessEndpointArn<Partition>(parameters)
}
