import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface RepositoryArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly repositoryName: string
}
class RepositoryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'repository', `arn:${string}:ecr-public::${string}:repository/${string}`> {
  readonly [ArnResourceTypeBrand] = 'repository' as const
  readonly partition: Partition
  readonly account: string
  readonly repositoryName: string
  constructor(parameters: RepositoryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.repositoryName = parameters.repositoryName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecr-public::${this.account}:repository/${this.repositoryName}` as const
  }
}
export type { RepositoryArn }
export function repositoryArn<Partition extends ArnPartition = 'aws'>(parameters: RepositoryArnParameters<Partition>) {
  return new RepositoryArn<Partition>(parameters)
}

export interface RegistryArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
  readonly registryId: string
}
class RegistryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'registry', `arn:${string}:ecr-public::${string}:registry/${string}`> {
  readonly [ArnResourceTypeBrand] = 'registry' as const
  readonly partition: Partition
  readonly account: string
  readonly registryId: string
  constructor(parameters: RegistryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
    this.registryId = parameters.registryId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecr-public::${this.account}:registry/${this.registryId}` as const
  }
}
export type { RegistryArn }
export function registryArn<Partition extends ArnPartition = 'aws'>(parameters: RegistryArnParameters<Partition>) {
  return new RegistryArn<Partition>(parameters)
}