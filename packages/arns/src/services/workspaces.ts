import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DirectoryIdArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly directoryId: string
}
class DirectoryIdArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'directoryid',
  `arn:${string}:workspaces:${string}:${string}:directory/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'directoryid' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly directoryId: string
  constructor(parameters: DirectoryIdArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.directoryId = parameters.directoryId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces:${this.region}:${this.account}:directory/${this.directoryId}` as const
  }
}
export type { DirectoryIdArn }
export function directoryIdArn<Partition extends ArnPartition = 'aws'>(
  parameters: DirectoryIdArnParameters<Partition>,
) {
  return new DirectoryIdArn<Partition>(parameters)
}

export interface WorkspaceBundleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly bundleId: string
}
class WorkspaceBundleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'workspacebundle',
  `arn:${string}:workspaces:${string}:${string}:workspacebundle/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workspacebundle' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly bundleId: string
  constructor(parameters: WorkspaceBundleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.bundleId = parameters.bundleId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces:${this.region}:${this.account}:workspacebundle/${this.bundleId}` as const
  }
}
export type { WorkspaceBundleArn }
export function workspaceBundleArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkspaceBundleArnParameters<Partition>,
) {
  return new WorkspaceBundleArn<Partition>(parameters)
}

export interface WorkspaceIdArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceId: string
}
class WorkspaceIdArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'workspaceid',
  `arn:${string}:workspaces:${string}:${string}:workspace/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workspaceid' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceId: string
  constructor(parameters: WorkspaceIdArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workspaceId = parameters.workspaceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces:${this.region}:${this.account}:workspace/${this.workspaceId}` as const
  }
}
export type { WorkspaceIdArn }
export function workspaceIdArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkspaceIdArnParameters<Partition>,
) {
  return new WorkspaceIdArn<Partition>(parameters)
}

export interface WorkspaceImageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imageId: string
}
class WorkspaceImageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'workspaceimage',
  `arn:${string}:workspaces:${string}:${string}:workspaceimage/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workspaceimage' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imageId: string
  constructor(parameters: WorkspaceImageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.imageId = parameters.imageId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces:${this.region}:${this.account}:workspaceimage/${this.imageId}` as const
  }
}
export type { WorkspaceImageArn }
export function workspaceImageArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkspaceImageArnParameters<Partition>,
) {
  return new WorkspaceImageArn<Partition>(parameters)
}

export interface WorkspaceIpGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupId: string
}
class WorkspaceIpGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'workspaceipgroup',
  `arn:${string}:workspaces:${string}:${string}:workspaceipgroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workspaceipgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupId: string
  constructor(parameters: WorkspaceIpGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.groupId = parameters.groupId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces:${this.region}:${this.account}:workspaceipgroup/${this.groupId}` as const
  }
}
export type { WorkspaceIpGroupArn }
export function workspaceIpGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkspaceIpGroupArnParameters<Partition>,
) {
  return new WorkspaceIpGroupArn<Partition>(parameters)
}

export interface WorkspacesPoolIdArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly poolId: string
}
class WorkspacesPoolIdArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'workspacespoolid',
  `arn:${string}:workspaces:${string}:${string}:workspacespool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workspacespoolid' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly poolId: string
  constructor(parameters: WorkspacesPoolIdArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.poolId = parameters.poolId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces:${this.region}:${this.account}:workspacespool/${this.poolId}` as const
  }
}
export type { WorkspacesPoolIdArn }
export function workspacesPoolIdArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkspacesPoolIdArnParameters<Partition>,
) {
  return new WorkspacesPoolIdArn<Partition>(parameters)
}

export interface ConnectionAliasArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectionAliasId: string
}
class ConnectionAliasArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'connectionalias',
  `arn:${string}:workspaces:${string}:${string}:connectionalias/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connectionalias' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectionAliasId: string
  constructor(parameters: ConnectionAliasArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.connectionAliasId = parameters.connectionAliasId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces:${this.region}:${this.account}:connectionalias/${this.connectionAliasId}` as const
  }
}
export type { ConnectionAliasArn }
export function connectionAliasArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectionAliasArnParameters<Partition>,
) {
  return new ConnectionAliasArn<Partition>(parameters)
}

export interface WorkspaceApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceApplicationId: string
}
class WorkspaceApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'workspaceapplication',
  `arn:${string}:workspaces:${string}:${string}:workspaceapplication/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workspaceapplication' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceApplicationId: string
  constructor(parameters: WorkspaceApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workspaceApplicationId = parameters.workspaceApplicationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces:${this.region}:${this.account}:workspaceapplication/${this.workspaceApplicationId}` as const
  }
}
export type { WorkspaceApplicationArn }
export function workspaceApplicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkspaceApplicationArnParameters<Partition>,
) {
  return new WorkspaceApplicationArn<Partition>(parameters)
}
