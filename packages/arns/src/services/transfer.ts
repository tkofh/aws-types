import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface UserArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idServer: string
  readonly nameUser: string
}
class UserArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'user',
  `arn:${string}:transfer:${string}:${string}:user/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'user' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idServer: string
  readonly nameUser: string
  constructor(parameters: UserArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idServer = parameters.idServer
    this.nameUser = parameters.nameUser
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transfer:${this.region}:${this.account}:user/${this.idServer}/${this.nameUser}` as const
  }
}
export type { UserArn }
export function userArn<Partition extends ArnPartition = 'aws'>(
  parameters: UserArnParameters<Partition>,
) {
  return new UserArn<Partition>(parameters)
}

export interface ServerArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idServer: string
}
class ServerArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'server',
  `arn:${string}:transfer:${string}:${string}:server/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'server' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idServer: string
  constructor(parameters: ServerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idServer = parameters.idServer
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transfer:${this.region}:${this.account}:server/${this.idServer}` as const
  }
}
export type { ServerArn }
export function serverArn<Partition extends ArnPartition = 'aws'>(
  parameters: ServerArnParameters<Partition>,
) {
  return new ServerArn<Partition>(parameters)
}

export interface WorkflowArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkflow: string
}
class WorkflowArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'workflow',
  `arn:${string}:transfer:${string}:${string}:workflow/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'workflow' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idWorkflow: string
  constructor(parameters: WorkflowArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idWorkflow = parameters.idWorkflow
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transfer:${this.region}:${this.account}:workflow/${this.idWorkflow}` as const
  }
}
export type { WorkflowArn }
export function workflowArn<Partition extends ArnPartition = 'aws'>(
  parameters: WorkflowArnParameters<Partition>,
) {
  return new WorkflowArn<Partition>(parameters)
}

export interface CertificateArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCertificate: string
}
class CertificateArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'certificate',
  `arn:${string}:transfer:${string}:${string}:certificate/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'certificate' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCertificate: string
  constructor(parameters: CertificateArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCertificate = parameters.idCertificate
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transfer:${this.region}:${this.account}:certificate/${this.idCertificate}` as const
  }
}
export type { CertificateArn }
export function certificateArn<Partition extends ArnPartition = 'aws'>(
  parameters: CertificateArnParameters<Partition>,
) {
  return new CertificateArn<Partition>(parameters)
}

export interface ConnectorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnector: string
}
class ConnectorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'connector',
  `arn:${string}:transfer:${string}:${string}:connector/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connector' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnector: string
  constructor(parameters: ConnectorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConnector = parameters.idConnector
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transfer:${this.region}:${this.account}:connector/${this.idConnector}` as const
  }
}
export type { ConnectorArn }
export function connectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectorArnParameters<Partition>,
) {
  return new ConnectorArn<Partition>(parameters)
}

export interface ProfileArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProfile: string
}
class ProfileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'profile',
  `arn:${string}:transfer:${string}:${string}:profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'profile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProfile: string
  constructor(parameters: ProfileArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idProfile = parameters.idProfile
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transfer:${this.region}:${this.account}:profile/${this.idProfile}` as const
  }
}
export type { ProfileArn }
export function profileArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileArnParameters<Partition>,
) {
  return new ProfileArn<Partition>(parameters)
}

export interface AgreementArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAgreement: string
}
class AgreementArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'agreement',
  `arn:${string}:transfer:${string}:${string}:agreement/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'agreement' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAgreement: string
  constructor(parameters: AgreementArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAgreement = parameters.idAgreement
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transfer:${this.region}:${this.account}:agreement/${this.idAgreement}` as const
  }
}
export type { AgreementArn }
export function agreementArn<Partition extends ArnPartition = 'aws'>(
  parameters: AgreementArnParameters<Partition>,
) {
  return new AgreementArn<Partition>(parameters)
}

export interface KeyHostArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idServer: string
  readonly idKeyHost: string
}
class KeyHostArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'host-key',
  `arn:${string}:transfer:${string}:${string}:host-key/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'host-key' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idServer: string
  readonly idKeyHost: string
  constructor(parameters: KeyHostArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idServer = parameters.idServer
    this.idKeyHost = parameters.idKeyHost
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:transfer:${this.region}:${this.account}:host-key/${this.idServer}/${this.idKeyHost}` as const
  }
}
export type { KeyHostArn }
export function keyHostArn<Partition extends ArnPartition = 'aws'>(
  parameters: KeyHostArnParameters<Partition>,
) {
  return new KeyHostArn<Partition>(parameters)
}
