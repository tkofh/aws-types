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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectionId: string
}
class ConnectionsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'connections',
  `arn:${string}:codecatalyst:${string}:${string}:/connections/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'connections' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectionId: string
  constructor(parameters: ConnectionsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.connectionId = parameters.connectionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codecatalyst:${this.region}:${this.account}:/connections/${this.connectionId}` as const
  }
}
export type { ConnectionsArn }
export function connectionsArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectionsArnParameters<Partition>,
) {
  return new ConnectionsArn<Partition>(parameters)
}

export interface IdentityCenterApplicationsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identityCenterApplicationId: string
}
class IdentityCenterApplicationsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'identity-center-applications',
  `arn:${string}:codecatalyst:${string}:${string}:/identity-center-applications/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'identity-center-applications' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identityCenterApplicationId: string
  constructor(parameters: IdentityCenterApplicationsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.identityCenterApplicationId = parameters.identityCenterApplicationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codecatalyst:${this.region}:${this.account}:/identity-center-applications/${this.identityCenterApplicationId}` as const
  }
}
export type { IdentityCenterApplicationsArn }
export function identityCenterApplicationsArn<
  Partition extends ArnPartition = 'aws',
>(parameters: IdentityCenterApplicationsArnParameters<Partition>) {
  return new IdentityCenterApplicationsArn<Partition>(parameters)
}

export interface SpaceArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly spaceId: string
}
class SpaceArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'space',
  `arn:${string}:codecatalyst:::space/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'space' as const
  readonly partition: Partition
  readonly spaceId: string
  constructor(parameters: SpaceArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.spaceId = parameters.spaceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codecatalyst:::space/${this.spaceId}` as const
  }
}
export type { SpaceArn }
export function spaceArn<Partition extends ArnPartition = 'aws'>(
  parameters: SpaceArnParameters<Partition>,
) {
  return new SpaceArn<Partition>(parameters)
}

export interface ProjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly spaceId: string
  readonly projectId: string
}
class ProjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'project',
  `arn:${string}:codecatalyst:::space/${string}/project/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'project' as const
  readonly partition: Partition
  readonly spaceId: string
  readonly projectId: string
  constructor(parameters: ProjectArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.spaceId = parameters.spaceId
    this.projectId = parameters.projectId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codecatalyst:::space/${this.spaceId}/project/${this.projectId}` as const
  }
}
export type { ProjectArn }
export function projectArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProjectArnParameters<Partition>,
) {
  return new ProjectArn<Partition>(parameters)
}
