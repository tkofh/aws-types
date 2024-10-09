export interface DirectoryidArnParameters {
  partition?: string | undefined
  region: string
  account: string
  directoryId: string
}
export type DirectoryidArn = `arn:${string}:workspaces:${string}:${string}:directory/${string}`
export function directoryidArn(parameters: DirectoryidArnParameters): DirectoryidArn {
  return `arn:${parameters.partition ?? ''}:workspaces:${parameters.region}:${parameters.account}:directory/${parameters.directoryId}`
}

export interface WorkspacebundleArnParameters {
  partition?: string | undefined
  region: string
  account: string
  bundleId: string
}
export type WorkspacebundleArn = `arn:${string}:workspaces:${string}:${string}:workspacebundle/${string}`
export function workspacebundleArn(parameters: WorkspacebundleArnParameters): WorkspacebundleArn {
  return `arn:${parameters.partition ?? ''}:workspaces:${parameters.region}:${parameters.account}:workspacebundle/${parameters.bundleId}`
}

export interface WorkspaceidArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workspaceId: string
}
export type WorkspaceidArn = `arn:${string}:workspaces:${string}:${string}:workspace/${string}`
export function workspaceidArn(parameters: WorkspaceidArnParameters): WorkspaceidArn {
  return `arn:${parameters.partition ?? ''}:workspaces:${parameters.region}:${parameters.account}:workspace/${parameters.workspaceId}`
}

export interface WorkspaceimageArnParameters {
  partition?: string | undefined
  region: string
  account: string
  imageId: string
}
export type WorkspaceimageArn = `arn:${string}:workspaces:${string}:${string}:workspaceimage/${string}`
export function workspaceimageArn(parameters: WorkspaceimageArnParameters): WorkspaceimageArn {
  return `arn:${parameters.partition ?? ''}:workspaces:${parameters.region}:${parameters.account}:workspaceimage/${parameters.imageId}`
}

export interface WorkspaceipgroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  groupId: string
}
export type WorkspaceipgroupArn = `arn:${string}:workspaces:${string}:${string}:workspaceipgroup/${string}`
export function workspaceipgroupArn(parameters: WorkspaceipgroupArnParameters): WorkspaceipgroupArn {
  return `arn:${parameters.partition ?? ''}:workspaces:${parameters.region}:${parameters.account}:workspaceipgroup/${parameters.groupId}`
}

export interface WorkspacespoolidArnParameters {
  partition?: string | undefined
  region: string
  account: string
  poolId: string
}
export type WorkspacespoolidArn = `arn:${string}:workspaces:${string}:${string}:workspacespool/${string}`
export function workspacespoolidArn(parameters: WorkspacespoolidArnParameters): WorkspacespoolidArn {
  return `arn:${parameters.partition ?? ''}:workspaces:${parameters.region}:${parameters.account}:workspacespool/${parameters.poolId}`
}

export interface ConnectionaliasArnParameters {
  partition?: string | undefined
  region: string
  account: string
  connectionAliasId: string
}
export type ConnectionaliasArn = `arn:${string}:workspaces:${string}:${string}:connectionalias/${string}`
export function connectionaliasArn(parameters: ConnectionaliasArnParameters): ConnectionaliasArn {
  return `arn:${parameters.partition ?? ''}:workspaces:${parameters.region}:${parameters.account}:connectionalias/${parameters.connectionAliasId}`
}

export interface WorkspaceapplicationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workSpaceApplicationId: string
}
export type WorkspaceapplicationArn = `arn:${string}:workspaces:${string}:${string}:workspaceapplication/${string}`
export function workspaceapplicationArn(parameters: WorkspaceapplicationArnParameters): WorkspaceapplicationArn {
  return `arn:${parameters.partition ?? ''}:workspaces:${parameters.region}:${parameters.account}:workspaceapplication/${parameters.workSpaceApplicationId}`
}