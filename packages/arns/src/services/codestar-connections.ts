import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ConnectionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectionId: string
}
class ConnectionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Connection',
  `arn:${string}:codestar-connections:${string}:${string}:connection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Connection' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly connectionId: string
  constructor(parameters: ConnectionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.connectionId = parameters.connectionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codestar-connections:${this.region}:${this.account}:connection/${this.connectionId}` as const
  }
}
export type { ConnectionArn }
export function connectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectionArnParameters<Partition>,
) {
  return new ConnectionArn<Partition>(parameters)
}

export interface HostArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly hostId: string
}
class HostArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Host',
  `arn:${string}:codestar-connections:${string}:${string}:host/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Host' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly hostId: string
  constructor(parameters: HostArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.hostId = parameters.hostId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codestar-connections:${this.region}:${this.account}:host/${this.hostId}` as const
  }
}
export type { HostArn }
export function hostArn<Partition extends ArnPartition = 'aws'>(
  parameters: HostArnParameters<Partition>,
) {
  return new HostArn<Partition>(parameters)
}

export interface RepositoryLinkArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly repositoryLinkId: string
}
class RepositoryLinkArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RepositoryLink',
  `arn:${string}:codestar-connections:${string}:${string}:repository-link/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RepositoryLink' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly repositoryLinkId: string
  constructor(parameters: RepositoryLinkArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.repositoryLinkId = parameters.repositoryLinkId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codestar-connections:${this.region}:${this.account}:repository-link/${this.repositoryLinkId}` as const
  }
}
export type { RepositoryLinkArn }
export function repositoryLinkArn<Partition extends ArnPartition = 'aws'>(
  parameters: RepositoryLinkArnParameters<Partition>,
) {
  return new RepositoryLinkArn<Partition>(parameters)
}
