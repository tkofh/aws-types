export interface NetworkArnParameters {
  partition?: string | undefined
  region: string
  networkId: string
}
export type NetworkArn = `arn:${string}:managedblockchain:${string}::networks/${string}`
export function networkArn(parameters: NetworkArnParameters): NetworkArn {
  return `arn:${parameters.partition ?? ''}:managedblockchain:${parameters.region}::networks/${parameters.networkId}`
}

export interface MemberArnParameters {
  partition?: string | undefined
  region: string
  account: string
  memberId: string
}
export type MemberArn = `arn:${string}:managedblockchain:${string}:${string}:members/${string}`
export function memberArn(parameters: MemberArnParameters): MemberArn {
  return `arn:${parameters.partition ?? ''}:managedblockchain:${parameters.region}:${parameters.account}:members/${parameters.memberId}`
}

export interface NodeArnParameters {
  partition?: string | undefined
  region: string
  account: string
  nodeId: string
}
export type NodeArn = `arn:${string}:managedblockchain:${string}:${string}:nodes/${string}`
export function nodeArn(parameters: NodeArnParameters): NodeArn {
  return `arn:${parameters.partition ?? ''}:managedblockchain:${parameters.region}:${parameters.account}:nodes/${parameters.nodeId}`
}

export interface ProposalArnParameters {
  partition?: string | undefined
  region: string
  proposalId: string
}
export type ProposalArn = `arn:${string}:managedblockchain:${string}::proposals/${string}`
export function proposalArn(parameters: ProposalArnParameters): ProposalArn {
  return `arn:${parameters.partition ?? ''}:managedblockchain:${parameters.region}::proposals/${parameters.proposalId}`
}

export interface InvitationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  invitationId: string
}
export type InvitationArn = `arn:${string}:managedblockchain:${string}:${string}:invitations/${string}`
export function invitationArn(parameters: InvitationArnParameters): InvitationArn {
  return `arn:${parameters.partition ?? ''}:managedblockchain:${parameters.region}:${parameters.account}:invitations/${parameters.invitationId}`
}

export interface AccessorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  accessorId: string
}
export type AccessorArn = `arn:${string}:managedblockchain:${string}:${string}:accessors/${string}`
export function accessorArn(parameters: AccessorArnParameters): AccessorArn {
  return `arn:${parameters.partition ?? ''}:managedblockchain:${parameters.region}:${parameters.account}:accessors/${parameters.accessorId}`
}