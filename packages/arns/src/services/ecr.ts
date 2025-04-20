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
  readonly region: string
  readonly account: string
  readonly nameRepository: string
}
class RepositoryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'repository',
  `arn:${string}:ecr:${string}:${string}:repository/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'repository' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameRepository: string
  constructor(parameters: RepositoryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameRepository = parameters.nameRepository
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ecr:${this.region}:${this.account}:repository/${this.nameRepository}` as const
  }
}
export type { RepositoryArn }
export function repositoryArn<Partition extends ArnPartition = 'aws'>(
  parameters: RepositoryArnParameters<Partition>,
) {
  return new RepositoryArn<Partition>(parameters)
}
