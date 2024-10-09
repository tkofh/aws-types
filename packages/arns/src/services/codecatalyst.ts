export interface ConnectionsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  connectionId: string
}
export type ConnectionsArn = `arn:${string}:codecatalyst:${string}:${string}:/connections/${string}`
export function connectionsArn(parameters: ConnectionsArnParameters): ConnectionsArn {
  return `arn:${parameters.partition ?? ''}:codecatalyst:${parameters.region}:${parameters.account}:/connections/${parameters.connectionId}`
}

export interface IdentityCenterApplicationsArnParameters {
  partition?: string | undefined
  region: string
  account: string
  identityCenterApplicationId: string
}
export type IdentityCenterApplicationsArn = `arn:${string}:codecatalyst:${string}:${string}:/identity-center-applications/${string}`
export function identityCenterApplicationsArn(parameters: IdentityCenterApplicationsArnParameters): IdentityCenterApplicationsArn {
  return `arn:${parameters.partition ?? ''}:codecatalyst:${parameters.region}:${parameters.account}:/identity-center-applications/${parameters.identityCenterApplicationId}`
}

export interface SpaceArnParameters {
  partition?: string | undefined
  spaceId: string
}
export type SpaceArn = `arn:${string}:codecatalyst:::space/${string}`
export function spaceArn(parameters: SpaceArnParameters): SpaceArn {
  return `arn:${parameters.partition ?? ''}:codecatalyst:::space/${parameters.spaceId}`
}

export interface ProjectArnParameters {
  partition?: string | undefined
  spaceId: string
  projectId: string
}
export type ProjectArn = `arn:${string}:codecatalyst:::space/${string}/project/${string}`
export function projectArn(parameters: ProjectArnParameters): ProjectArn {
  return `arn:${parameters.partition ?? ''}:codecatalyst:::space/${parameters.spaceId}/project/${parameters.projectId}`
}