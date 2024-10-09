export interface UserArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serverId: string
  userName: string
}
export type UserArn = `arn:${string}:transfer:${string}:${string}:user/${string}/${string}`
export function userArn(parameters: UserArnParameters): UserArn {
  return `arn:${parameters.partition ?? ''}:transfer:${parameters.region}:${parameters.account}:user/${parameters.serverId}/${parameters.userName}`
}

export interface ServerArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serverId: string
}
export type ServerArn = `arn:${string}:transfer:${string}:${string}:server/${string}`
export function serverArn(parameters: ServerArnParameters): ServerArn {
  return `arn:${parameters.partition ?? ''}:transfer:${parameters.region}:${parameters.account}:server/${parameters.serverId}`
}

export interface WorkflowArnParameters {
  partition?: string | undefined
  region: string
  account: string
  workflowId: string
}
export type WorkflowArn = `arn:${string}:transfer:${string}:${string}:workflow/${string}`
export function workflowArn(parameters: WorkflowArnParameters): WorkflowArn {
  return `arn:${parameters.partition ?? ''}:transfer:${parameters.region}:${parameters.account}:workflow/${parameters.workflowId}`
}

export interface CertificateArnParameters {
  partition?: string | undefined
  region: string
  account: string
  certificateId: string
}
export type CertificateArn = `arn:${string}:transfer:${string}:${string}:certificate/${string}`
export function certificateArn(parameters: CertificateArnParameters): CertificateArn {
  return `arn:${parameters.partition ?? ''}:transfer:${parameters.region}:${parameters.account}:certificate/${parameters.certificateId}`
}

export interface ConnectorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  connectorId: string
}
export type ConnectorArn = `arn:${string}:transfer:${string}:${string}:connector/${string}`
export function connectorArn(parameters: ConnectorArnParameters): ConnectorArn {
  return `arn:${parameters.partition ?? ''}:transfer:${parameters.region}:${parameters.account}:connector/${parameters.connectorId}`
}

export interface ProfileArnParameters {
  partition?: string | undefined
  region: string
  account: string
  profileId: string
}
export type ProfileArn = `arn:${string}:transfer:${string}:${string}:profile/${string}`
export function profileArn(parameters: ProfileArnParameters): ProfileArn {
  return `arn:${parameters.partition ?? ''}:transfer:${parameters.region}:${parameters.account}:profile/${parameters.profileId}`
}

export interface AgreementArnParameters {
  partition?: string | undefined
  region: string
  account: string
  agreementId: string
}
export type AgreementArn = `arn:${string}:transfer:${string}:${string}:agreement/${string}`
export function agreementArn(parameters: AgreementArnParameters): AgreementArn {
  return `arn:${parameters.partition ?? ''}:transfer:${parameters.region}:${parameters.account}:agreement/${parameters.agreementId}`
}

export interface HostKeyArnParameters {
  partition?: string | undefined
  region: string
  account: string
  serverId: string
  hostKeyId: string
}
export type HostKeyArn = `arn:${string}:transfer:${string}:${string}:host-key/${string}/${string}`
export function hostKeyArn(parameters: HostKeyArnParameters): HostKeyArn {
  return `arn:${parameters.partition ?? ''}:transfer:${parameters.region}:${parameters.account}:host-key/${parameters.serverId}/${parameters.hostKeyId}`
}