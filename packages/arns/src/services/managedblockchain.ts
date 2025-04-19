import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface NetworkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly networkId: string
}
class NetworkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'network', `arn:${string}:managedblockchain:${string}::networks/${string}`> {
  readonly [ArnResourceTypeBrand] = 'network' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly networkId: string
  constructor(parameters: NetworkArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.networkId = parameters.networkId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:managedblockchain:${this.region}::networks/${this.networkId}` as const
  }
}
export type { NetworkArn }
export function networkArn<Partition extends ArnPartition = 'aws'>(parameters: NetworkArnParameters<Partition>) {
  return new NetworkArn<Partition>(parameters)
}

export interface MemberArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly memberId: string
}
class MemberArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'member', `arn:${string}:managedblockchain:${string}:${string}:members/${string}`> {
  readonly [ArnResourceTypeBrand] = 'member' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly memberId: string
  constructor(parameters: MemberArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.memberId = parameters.memberId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:managedblockchain:${this.region}:${this.account}:members/${this.memberId}` as const
  }
}
export type { MemberArn }
export function memberArn<Partition extends ArnPartition = 'aws'>(parameters: MemberArnParameters<Partition>) {
  return new MemberArn<Partition>(parameters)
}

export interface NodeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly nodeId: string
}
class NodeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'node', `arn:${string}:managedblockchain:${string}:${string}:nodes/${string}`> {
  readonly [ArnResourceTypeBrand] = 'node' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly nodeId: string
  constructor(parameters: NodeArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.nodeId = parameters.nodeId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:managedblockchain:${this.region}:${this.account}:nodes/${this.nodeId}` as const
  }
}
export type { NodeArn }
export function nodeArn<Partition extends ArnPartition = 'aws'>(parameters: NodeArnParameters<Partition>) {
  return new NodeArn<Partition>(parameters)
}

export interface ProposalArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly proposalId: string
}
class ProposalArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'proposal', `arn:${string}:managedblockchain:${string}::proposals/${string}`> {
  readonly [ArnResourceTypeBrand] = 'proposal' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly proposalId: string
  constructor(parameters: ProposalArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.proposalId = parameters.proposalId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:managedblockchain:${this.region}::proposals/${this.proposalId}` as const
  }
}
export type { ProposalArn }
export function proposalArn<Partition extends ArnPartition = 'aws'>(parameters: ProposalArnParameters<Partition>) {
  return new ProposalArn<Partition>(parameters)
}

export interface InvitationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly invitationId: string
}
class InvitationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'invitation', `arn:${string}:managedblockchain:${string}:${string}:invitations/${string}`> {
  readonly [ArnResourceTypeBrand] = 'invitation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly invitationId: string
  constructor(parameters: InvitationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.invitationId = parameters.invitationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:managedblockchain:${this.region}:${this.account}:invitations/${this.invitationId}` as const
  }
}
export type { InvitationArn }
export function invitationArn<Partition extends ArnPartition = 'aws'>(parameters: InvitationArnParameters<Partition>) {
  return new InvitationArn<Partition>(parameters)
}

export interface AccessorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly accessorId: string
}
class AccessorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'accessor', `arn:${string}:managedblockchain:${string}:${string}:accessors/${string}`> {
  readonly [ArnResourceTypeBrand] = 'accessor' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly accessorId: string
  constructor(parameters: AccessorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.accessorId = parameters.accessorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:managedblockchain:${this.region}:${this.account}:accessors/${this.accessorId}` as const
  }
}
export type { AccessorArn }
export function accessorArn<Partition extends ArnPartition = 'aws'>(parameters: AccessorArnParameters<Partition>) {
  return new AccessorArn<Partition>(parameters)
}