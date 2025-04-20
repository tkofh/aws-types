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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnection: string
}
class ConnectionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Connection',
  `arn:${string}:codestar-connections:${string}:${string}:connection/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Connection' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idConnection: string
  constructor(parameters: ConnectionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idConnection = parameters.idConnection
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codestar-connections:${this.region}:${this.account}:connection/${this.idConnection}` as const
  }
}
export type { ConnectionArn }
export function connectionArn<Partition extends ArnPartition = 'aws'>(
  parameters: ConnectionArnParameters<Partition>,
) {
  return new ConnectionArn<Partition>(parameters)
}

export interface HostArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idHost: string
}
class HostArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'Host',
  `arn:${string}:codestar-connections:${string}:${string}:host/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'Host' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idHost: string
  constructor(parameters: HostArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idHost = parameters.idHost
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codestar-connections:${this.region}:${this.account}:host/${this.idHost}` as const
  }
}
export type { HostArn }
export function hostArn<Partition extends ArnPartition = 'aws'>(
  parameters: HostArnParameters<Partition>,
) {
  return new HostArn<Partition>(parameters)
}

export interface LinkRepositoryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idLinkRepository: string
}
class LinkRepositoryArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'RepositoryLink',
  `arn:${string}:codestar-connections:${string}:${string}:repository-link/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'RepositoryLink' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idLinkRepository: string
  constructor(parameters: LinkRepositoryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idLinkRepository = parameters.idLinkRepository
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codestar-connections:${this.region}:${this.account}:repository-link/${this.idLinkRepository}` as const
  }
}
export type { LinkRepositoryArn }
export function linkRepositoryArn<Partition extends ArnPartition = 'aws'>(
  parameters: LinkRepositoryArnParameters<Partition>,
) {
  return new LinkRepositoryArn<Partition>(parameters)
}
