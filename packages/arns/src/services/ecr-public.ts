import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface RepositoryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
  readonly nameRepository: string
}
class RepositoryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'repository',
  `arn:${string}:ecr-public::${string}:repository/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'repository' as const
  readonly partition: string
  readonly account: string
  readonly nameRepository: string
  constructor(parameters: RepositoryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.nameRepository = parameters.nameRepository
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecr-public::${this.account}:repository/${this.nameRepository}` as const
  }
}
export type { RepositoryArn }
export function repositoryArn<Partition extends ArnPartition = 'aws'>(
  parameters: RepositoryArnParameters<Partition>,
) {
  return new RepositoryArn<Partition>(parameters)
}

export interface RegistryArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
  readonly idRegistry: string
}
class RegistryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'registry',
  `arn:${string}:ecr-public::${string}:registry/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'registry' as const
  readonly partition: string
  readonly account: string
  readonly idRegistry: string
  constructor(parameters: RegistryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
    this.idRegistry = parameters.idRegistry
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecr-public::${this.account}:registry/${this.idRegistry}` as const
  }
}
export type { RegistryArn }
export function registryArn<Partition extends ArnPartition = 'aws'>(
  parameters: RegistryArnParameters<Partition>,
) {
  return new RegistryArn<Partition>(parameters)
}
