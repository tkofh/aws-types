import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ConnectionsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnection: string
}
class ConnectionsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'connections',
  `arn:${string}:codecatalyst:${string}:${string}:/connections/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connections' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnection: string
  constructor(parameters: ConnectionsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConnection = parameters.idConnection
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codecatalyst:${this.region}:${this.account}:/connections/${this.idConnection}` as const
  }
}
export type { ConnectionsArn }
export function connectionsArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectionsArnParameters<Partition>,
) {
  return new ConnectionsArn<Partition>(parameters)
}

export interface ApplicationsCenterIdentityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplicationCenterIdentity: string
}
class ApplicationsCenterIdentityArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'identity-center-applications',
  `arn:${string}:codecatalyst:${string}:${string}:/identity-center-applications/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'identity-center-applications' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplicationCenterIdentity: string
  constructor(parameters: ApplicationsCenterIdentityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplicationCenterIdentity = parameters.idApplicationCenterIdentity
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codecatalyst:${this.region}:${this.account}:/identity-center-applications/${this.idApplicationCenterIdentity}` as const
  }
}
export type { ApplicationsCenterIdentityArn }
export function applicationsCenterIdentityArn<
  Partition extends ArnPartition = 'aws',
>(parameters: ApplicationsCenterIdentityArnParameters<Partition>) {
  return new ApplicationsCenterIdentityArn<Partition>(parameters)
}

export interface SpaceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly idSpace: string
}
class SpaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'space',
  `arn:${string}:codecatalyst:::space/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'space' as const
  readonly partition: string
  readonly idSpace: string
  constructor(parameters: SpaceArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idSpace = parameters.idSpace
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codecatalyst:::space/${this.idSpace}` as const
  }
}
export type { SpaceArn }
export function spaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: SpaceArnParameters<Partition>,
) {
  return new SpaceArn<Partition>(parameters)
}

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly idSpace: string
  readonly idProject: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'project',
  `arn:${string}:codecatalyst:::space/${string}/project/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'project' as const
  readonly partition: string
  readonly idSpace: string
  readonly idProject: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.idSpace = parameters.idSpace
    this.idProject = parameters.idProject
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codecatalyst:::space/${this.idSpace}/project/${this.idProject}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}
