import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface NetworkArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idNetwork: string
}
class NetworkArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'network',
  `arn:${string}:managedblockchain:${string}::networks/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'network' as const
  readonly partition: string
  readonly region: string
  readonly idNetwork: string
  constructor(parameters: NetworkArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idNetwork = parameters.idNetwork
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:managedblockchain:${this.region}::networks/${this.idNetwork}` as const
  }
}
export type { NetworkArn }
export function networkArn<Partition extends ArnPartition = 'aws'>(
  parameters: NetworkArnParameters<Partition>,
) {
  return new NetworkArn<Partition>(parameters)
}

export interface MemberArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMember: string
}
class MemberArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'member',
  `arn:${string}:managedblockchain:${string}:${string}:members/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'member' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idMember: string
  constructor(parameters: MemberArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idMember = parameters.idMember
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:managedblockchain:${this.region}:${this.account}:members/${this.idMember}` as const
  }
}
export type { MemberArn }
export function memberArn<Partition extends ArnPartition = 'aws'>(
  parameters: MemberArnParameters<Partition>,
) {
  return new MemberArn<Partition>(parameters)
}

export interface NodeArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNode: string
}
class NodeArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'node',
  `arn:${string}:managedblockchain:${string}:${string}:nodes/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'node' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idNode: string
  constructor(parameters: NodeArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idNode = parameters.idNode
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:managedblockchain:${this.region}:${this.account}:nodes/${this.idNode}` as const
  }
}
export type { NodeArn }
export function nodeArn<Partition extends ArnPartition = 'aws'>(
  parameters: NodeArnParameters<Partition>,
) {
  return new NodeArn<Partition>(parameters)
}

export interface ProposalArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idProposal: string
}
class ProposalArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'proposal',
  `arn:${string}:managedblockchain:${string}::proposals/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'proposal' as const
  readonly partition: string
  readonly region: string
  readonly idProposal: string
  constructor(parameters: ProposalArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idProposal = parameters.idProposal
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:managedblockchain:${this.region}::proposals/${this.idProposal}` as const
  }
}
export type { ProposalArn }
export function proposalArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProposalArnParameters<Partition>,
) {
  return new ProposalArn<Partition>(parameters)
}

export interface InvitationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInvitation: string
}
class InvitationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'invitation',
  `arn:${string}:managedblockchain:${string}:${string}:invitations/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'invitation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idInvitation: string
  constructor(parameters: InvitationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idInvitation = parameters.idInvitation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:managedblockchain:${this.region}:${this.account}:invitations/${this.idInvitation}` as const
  }
}
export type { InvitationArn }
export function invitationArn<Partition extends ArnPartition = 'aws'>(
  parameters: InvitationArnParameters<Partition>,
) {
  return new InvitationArn<Partition>(parameters)
}

export interface AccessorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAccessor: string
}
class AccessorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'accessor',
  `arn:${string}:managedblockchain:${string}:${string}:accessors/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'accessor' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAccessor: string
  constructor(parameters: AccessorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAccessor = parameters.idAccessor
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:managedblockchain:${this.region}:${this.account}:accessors/${this.idAccessor}` as const
  }
}
export type { AccessorArn }
export function accessorArn<Partition extends ArnPartition = 'aws'>(
  parameters: AccessorArnParameters<Partition>,
) {
  return new AccessorArn<Partition>(parameters)
}
