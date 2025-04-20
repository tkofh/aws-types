import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DomainArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
}
class DomainArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'domain',
  `arn:${string}:codeartifact:${string}:${string}:domain/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'domain' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  constructor(parameters: DomainArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDomain = parameters.nameDomain
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codeartifact:${this.region}:${this.account}:domain/${this.nameDomain}` as const
  }
}
export type { DomainArn }
export function domainArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainArnParameters<Partition>,
) {
  return new DomainArn<Partition>(parameters)
}

export interface RepositoryArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  readonly nameRepository: string
}
class RepositoryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'repository',
  `arn:${string}:codeartifact:${string}:${string}:repository/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'repository' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  readonly nameRepository: string
  constructor(parameters: RepositoryArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDomain = parameters.nameDomain
    this.nameRepository = parameters.nameRepository
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codeartifact:${this.region}:${this.account}:repository/${this.nameDomain}/${this.nameRepository}` as const
  }
}
export type { RepositoryArn }
export function repositoryArn<Partition extends ArnPartition = 'aws'>(
  parameters: RepositoryArnParameters<Partition>,
) {
  return new RepositoryArn<Partition>(parameters)
}

export interface GroupPackageArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  readonly patternGroupPackageEncoded: string
}
class GroupPackageArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'package-group',
  `arn:${string}:codeartifact:${string}:${string}:package-group/${string}${string}`
> {
  readonly [ArnResourceTypeBrand] = 'package-group' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  readonly patternGroupPackageEncoded: string
  constructor(parameters: GroupPackageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDomain = parameters.nameDomain
    this.patternGroupPackageEncoded = parameters.patternGroupPackageEncoded
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codeartifact:${this.region}:${this.account}:package-group/${this.nameDomain}${this.patternGroupPackageEncoded}` as const
  }
}
export type { GroupPackageArn }
export function groupPackageArn<Partition extends ArnPartition = 'aws'>(
  parameters: GroupPackageArnParameters<Partition>,
) {
  return new GroupPackageArn<Partition>(parameters)
}

export interface PackageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  readonly nameRepository: string
  readonly formatPackage: string
  readonly namespacePackage: string
  readonly namePackage: string
}
class PackageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'package',
  `arn:${string}:codeartifact:${string}:${string}:package/${string}/${string}/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'package' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  readonly nameRepository: string
  readonly formatPackage: string
  readonly namespacePackage: string
  readonly namePackage: string
  constructor(parameters: PackageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDomain = parameters.nameDomain
    this.nameRepository = parameters.nameRepository
    this.formatPackage = parameters.formatPackage
    this.namespacePackage = parameters.namespacePackage
    this.namePackage = parameters.namePackage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codeartifact:${this.region}:${this.account}:package/${this.nameDomain}/${this.nameRepository}/${this.formatPackage}/${this.namespacePackage}/${this.namePackage}` as const
  }
}
export type { PackageArn }
export function packageArn<Partition extends ArnPartition = 'aws'>(
  parameters: PackageArnParameters<Partition>,
) {
  return new PackageArn<Partition>(parameters)
}
