import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serverId: string
  readonly userName: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'user', `arn:${string}:transfer:${string}:${string}:user/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serverId: string
  readonly userName: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serverId = parameters.serverId
    this.userName = parameters.userName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transfer:${this.region}:${this.account}:user/${this.serverId}/${this.userName}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(parameters: UserArnParameters<Partition>) {
  return new UserArn<Partition>(parameters)
}

export interface ServerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serverId: string
}
class ServerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'server', `arn:${string}:transfer:${string}:${string}:server/${string}`> {
  readonly [ArnResourceTypeBrand] = 'server' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serverId: string
  constructor(parameters: ServerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serverId = parameters.serverId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transfer:${this.region}:${this.account}:server/${this.serverId}` as const
  }
}
export type { ServerArn }
export function serverArn<Partition extends ArnPartition = 'aws'>(parameters: ServerArnParameters<Partition>) {
  return new ServerArn<Partition>(parameters)
}

export interface WorkflowArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workflowId: string
}
class WorkflowArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'workflow', `arn:${string}:transfer:${string}:${string}:workflow/${string}`> {
  readonly [ArnResourceTypeBrand] = 'workflow' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly workflowId: string
  constructor(parameters: WorkflowArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.workflowId = parameters.workflowId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transfer:${this.region}:${this.account}:workflow/${this.workflowId}` as const
  }
}
export type { WorkflowArn }
export function workflowArn<Partition extends ArnPartition = 'aws'>(parameters: WorkflowArnParameters<Partition>) {
  return new WorkflowArn<Partition>(parameters)
}

export interface CertificateArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificateId: string
}
class CertificateArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'certificate', `arn:${string}:transfer:${string}:${string}:certificate/${string}`> {
  readonly [ArnResourceTypeBrand] = 'certificate' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly certificateId: string
  constructor(parameters: CertificateArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.certificateId = parameters.certificateId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transfer:${this.region}:${this.account}:certificate/${this.certificateId}` as const
  }
}
export type { CertificateArn }
export function certificateArn<Partition extends ArnPartition = 'aws'>(parameters: CertificateArnParameters<Partition>) {
  return new CertificateArn<Partition>(parameters)
}

export interface ConnectorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorId: string
}
class ConnectorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'connector', `arn:${string}:transfer:${string}:${string}:connector/${string}`> {
  readonly [ArnResourceTypeBrand] = 'connector' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectorId: string
  constructor(parameters: ConnectorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.connectorId = parameters.connectorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transfer:${this.region}:${this.account}:connector/${this.connectorId}` as const
  }
}
export type { ConnectorArn }
export function connectorArn<Partition extends ArnPartition = 'aws'>(parameters: ConnectorArnParameters<Partition>) {
  return new ConnectorArn<Partition>(parameters)
}

export interface ProfileArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly profileId: string
}
class ProfileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'profile', `arn:${string}:transfer:${string}:${string}:profile/${string}`> {
  readonly [ArnResourceTypeBrand] = 'profile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly profileId: string
  constructor(parameters: ProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.profileId = parameters.profileId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transfer:${this.region}:${this.account}:profile/${this.profileId}` as const
  }
}
export type { ProfileArn }
export function profileArn<Partition extends ArnPartition = 'aws'>(parameters: ProfileArnParameters<Partition>) {
  return new ProfileArn<Partition>(parameters)
}

export interface AgreementArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly agreementId: string
}
class AgreementArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'agreement', `arn:${string}:transfer:${string}:${string}:agreement/${string}`> {
  readonly [ArnResourceTypeBrand] = 'agreement' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly agreementId: string
  constructor(parameters: AgreementArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.agreementId = parameters.agreementId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transfer:${this.region}:${this.account}:agreement/${this.agreementId}` as const
  }
}
export type { AgreementArn }
export function agreementArn<Partition extends ArnPartition = 'aws'>(parameters: AgreementArnParameters<Partition>) {
  return new AgreementArn<Partition>(parameters)
}

export interface HostKeyArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serverId: string
  readonly hostKeyId: string
}
class HostKeyArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'host-key', `arn:${string}:transfer:${string}:${string}:host-key/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'host-key' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly serverId: string
  readonly hostKeyId: string
  constructor(parameters: HostKeyArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.serverId = parameters.serverId
    this.hostKeyId = parameters.hostKeyId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transfer:${this.region}:${this.account}:host-key/${this.serverId}/${this.hostKeyId}` as const
  }
}
export type { HostKeyArn }
export function hostKeyArn<Partition extends ArnPartition = 'aws'>(parameters: HostKeyArnParameters<Partition>) {
  return new HostKeyArn<Partition>(parameters)
}