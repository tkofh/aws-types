import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface IdDirectoryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDirectory: string
}
class IdDirectoryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'directoryid',
  `arn:${string}:workspaces:${string}:${string}:directory/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'directoryid' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDirectory: string
  constructor(parameters: IdDirectoryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDirectory = parameters.idDirectory
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces:${this.region}:${this.account}:directory/${this.idDirectory}` as const
  }
}
export type { IdDirectoryArn }
export function idDirectoryArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdDirectoryArnParameters<Partition>,
) {
  return new IdDirectoryArn<Partition>(parameters)
}

export interface BundleWorkspaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBundle: string
}
class BundleWorkspaceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'workspacebundle',
  `arn:${string}:workspaces:${string}:${string}:workspacebundle/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workspacebundle' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBundle: string
  constructor(parameters: BundleWorkspaceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idBundle = parameters.idBundle
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces:${this.region}:${this.account}:workspacebundle/${this.idBundle}` as const
  }
}
export type { BundleWorkspaceArn }
export function bundleWorkspaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: BundleWorkspaceArnParameters<Partition>,
) {
  return new BundleWorkspaceArn<Partition>(parameters)
}

export interface IdWorkspaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkspace: string
}
class IdWorkspaceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'workspaceid',
  `arn:${string}:workspaces:${string}:${string}:workspace/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workspaceid' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkspace: string
  constructor(parameters: IdWorkspaceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWorkspace = parameters.idWorkspace
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces:${this.region}:${this.account}:workspace/${this.idWorkspace}` as const
  }
}
export type { IdWorkspaceArn }
export function idWorkspaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdWorkspaceArnParameters<Partition>,
) {
  return new IdWorkspaceArn<Partition>(parameters)
}

export interface ImageWorkspaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idImage: string
}
class ImageWorkspaceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'workspaceimage',
  `arn:${string}:workspaces:${string}:${string}:workspaceimage/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workspaceimage' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idImage: string
  constructor(parameters: ImageWorkspaceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idImage = parameters.idImage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces:${this.region}:${this.account}:workspaceimage/${this.idImage}` as const
  }
}
export type { ImageWorkspaceArn }
export function imageWorkspaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ImageWorkspaceArnParameters<Partition>,
) {
  return new ImageWorkspaceArn<Partition>(parameters)
}

export interface GroupIpWorkspaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroup: string
}
class GroupIpWorkspaceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'workspaceipgroup',
  `arn:${string}:workspaces:${string}:${string}:workspaceipgroup/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workspaceipgroup' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idGroup: string
  constructor(parameters: GroupIpWorkspaceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idGroup = parameters.idGroup
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces:${this.region}:${this.account}:workspaceipgroup/${this.idGroup}` as const
  }
}
export type { GroupIpWorkspaceArn }
export function groupIpWorkspaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupIpWorkspaceArnParameters<Partition>,
) {
  return new GroupIpWorkspaceArn<Partition>(parameters)
}

export interface IdPoolWorkspacesArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPool: string
}
class IdPoolWorkspacesArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'workspacespoolid',
  `arn:${string}:workspaces:${string}:${string}:workspacespool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workspacespoolid' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPool: string
  constructor(parameters: IdPoolWorkspacesArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPool = parameters.idPool
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces:${this.region}:${this.account}:workspacespool/${this.idPool}` as const
  }
}
export type { IdPoolWorkspacesArn }
export function idPoolWorkspacesArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdPoolWorkspacesArnParameters<Partition>,
) {
  return new IdPoolWorkspacesArn<Partition>(parameters)
}

export interface AliasConnectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAliasConnection: string
}
class AliasConnectionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'connectionalias',
  `arn:${string}:workspaces:${string}:${string}:connectionalias/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connectionalias' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAliasConnection: string
  constructor(parameters: AliasConnectionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAliasConnection = parameters.idAliasConnection
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces:${this.region}:${this.account}:connectionalias/${this.idAliasConnection}` as const
  }
}
export type { AliasConnectionArn }
export function aliasConnectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: AliasConnectionArnParameters<Partition>,
) {
  return new AliasConnectionArn<Partition>(parameters)
}

export interface ApplicationWorkspaceArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplicationWorkspace: string
}
class ApplicationWorkspaceArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'workspaceapplication',
  `arn:${string}:workspaces:${string}:${string}:workspaceapplication/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workspaceapplication' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplicationWorkspace: string
  constructor(parameters: ApplicationWorkspaceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplicationWorkspace = parameters.idApplicationWorkspace
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:workspaces:${this.region}:${this.account}:workspaceapplication/${this.idApplicationWorkspace}` as const
  }
}
export type { ApplicationWorkspaceArn }
export function applicationWorkspaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationWorkspaceArnParameters<Partition>,
) {
  return new ApplicationWorkspaceArn<Partition>(parameters)
}
