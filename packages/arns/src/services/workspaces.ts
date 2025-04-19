import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface DirectoryidArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly directoryId: string
}
class DirectoryidArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'directoryid', `arn:${string}:workspaces:${string}:${string}:directory/${string}`> {
  readonly [ArnResourceTypeBrand] = 'directoryid' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly directoryId: string
  constructor(parameters: DirectoryidArnParameters<Partition>) {
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
export type { DirectoryidArn }
export function directoryidArn<Partition extends ArnPartition = 'aws'>(parameters: DirectoryidArnParameters<Partition>) {
  return new DirectoryidArn<Partition>(parameters)
}

export interface WorkspacebundleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly bundleId: string
}
class WorkspacebundleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'workspacebundle', `arn:${string}:workspaces:${string}:${string}:workspacebundle/${string}`> {
  readonly [ArnResourceTypeBrand] = 'workspacebundle' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly bundleId: string
  constructor(parameters: WorkspacebundleArnParameters<Partition>) {
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
export type { WorkspacebundleArn }
export function workspacebundleArn<Partition extends ArnPartition = 'aws'>(parameters: WorkspacebundleArnParameters<Partition>) {
  return new WorkspacebundleArn<Partition>(parameters)
}

export interface WorkspaceidArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceId: string
}
class WorkspaceidArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'workspaceid', `arn:${string}:workspaces:${string}:${string}:workspace/${string}`> {
  readonly [ArnResourceTypeBrand] = 'workspaceid' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workspaceId: string
  constructor(parameters: WorkspaceidArnParameters<Partition>) {
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
export type { WorkspaceidArn }
export function workspaceidArn<Partition extends ArnPartition = 'aws'>(parameters: WorkspaceidArnParameters<Partition>) {
  return new WorkspaceidArn<Partition>(parameters)
}

export interface WorkspaceimageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imageId: string
}
class WorkspaceimageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'workspaceimage', `arn:${string}:workspaces:${string}:${string}:workspaceimage/${string}`> {
  readonly [ArnResourceTypeBrand] = 'workspaceimage' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly imageId: string
  constructor(parameters: WorkspaceimageArnParameters<Partition>) {
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
export type { WorkspaceimageArn }
export function workspaceimageArn<Partition extends ArnPartition = 'aws'>(parameters: WorkspaceimageArnParameters<Partition>) {
  return new WorkspaceimageArn<Partition>(parameters)
}

export interface WorkspaceipgroupArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupId: string
}
class WorkspaceipgroupArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'workspaceipgroup', `arn:${string}:workspaces:${string}:${string}:workspaceipgroup/${string}`> {
  readonly [ArnResourceTypeBrand] = 'workspaceipgroup' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly groupId: string
  constructor(parameters: WorkspaceipgroupArnParameters<Partition>) {
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
export type { WorkspaceipgroupArn }
export function workspaceipgroupArn<Partition extends ArnPartition = 'aws'>(parameters: WorkspaceipgroupArnParameters<Partition>) {
  return new WorkspaceipgroupArn<Partition>(parameters)
}

export interface WorkspacespoolidArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly poolId: string
}
class WorkspacespoolidArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'workspacespoolid', `arn:${string}:workspaces:${string}:${string}:workspacespool/${string}`> {
  readonly [ArnResourceTypeBrand] = 'workspacespoolid' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly poolId: string
  constructor(parameters: WorkspacespoolidArnParameters<Partition>) {
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
export type { WorkspacespoolidArn }
export function workspacespoolidArn<Partition extends ArnPartition = 'aws'>(parameters: WorkspacespoolidArnParameters<Partition>) {
  return new WorkspacespoolidArn<Partition>(parameters)
}

export interface ConnectionaliasArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectionAliasId: string
}
class ConnectionaliasArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'connectionalias', `arn:${string}:workspaces:${string}:${string}:connectionalias/${string}`> {
  readonly [ArnResourceTypeBrand] = 'connectionalias' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectionAliasId: string
  constructor(parameters: ConnectionaliasArnParameters<Partition>) {
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
export type { ConnectionaliasArn }
export function connectionaliasArn<Partition extends ArnPartition = 'aws'>(parameters: ConnectionaliasArnParameters<Partition>) {
  return new ConnectionaliasArn<Partition>(parameters)
}

export interface WorkspaceapplicationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workSpaceApplicationId: string
}
class WorkspaceapplicationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'workspaceapplication', `arn:${string}:workspaces:${string}:${string}:workspaceapplication/${string}`> {
  readonly [ArnResourceTypeBrand] = 'workspaceapplication' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workSpaceApplicationId: string
  constructor(parameters: WorkspaceapplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workSpaceApplicationId = parameters.workSpaceApplicationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces:${this.region}:${this.account}:workspaceapplication/${this.workSpaceApplicationId}` as const
  }
}
export type { WorkspaceapplicationArn }
export function workspaceapplicationArn<Partition extends ArnPartition = 'aws'>(parameters: WorkspaceapplicationArnParameters<Partition>) {
  return new WorkspaceapplicationArn<Partition>(parameters)
}