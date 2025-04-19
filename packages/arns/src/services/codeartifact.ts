import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DomainArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
}
class DomainArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'domain',
  `arn:${string}:codeartifact:${string}:${string}:domain/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'domain' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  constructor(parameters: DomainArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainName = parameters.domainName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codeartifact:${this.region}:${this.account}:domain/${this.domainName}` as const
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
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  readonly repositoryName: string
}
class RepositoryArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'repository',
  `arn:${string}:codeartifact:${string}:${string}:repository/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'repository' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  readonly repositoryName: string
  constructor(parameters: RepositoryArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainName = parameters.domainName
    this.repositoryName = parameters.repositoryName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codeartifact:${this.region}:${this.account}:repository/${this.domainName}/${this.repositoryName}` as const
  }
}
export type { RepositoryArn }
export function repositoryArn<Partition extends ArnPartition = 'aws'>(
  parameters: RepositoryArnParameters<Partition>,
) {
  return new RepositoryArn<Partition>(parameters)
}

export interface PackageGroupArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  readonly encodedPackageGroupPattern: string
}
class PackageGroupArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'package-group',
  `arn:${string}:codeartifact:${string}:${string}:package-group/${string}${string}`
> {
  readonly [ArnResourceTypeBrand] = 'package-group' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  readonly encodedPackageGroupPattern: string
  constructor(parameters: PackageGroupArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainName = parameters.domainName
    this.encodedPackageGroupPattern = parameters.encodedPackageGroupPattern
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codeartifact:${this.region}:${this.account}:package-group/${this.domainName}${this.encodedPackageGroupPattern}` as const
  }
}
export type { PackageGroupArn }
export function packageGroupArn<Partition extends ArnPartition = 'aws'>(
  parameters: PackageGroupArnParameters<Partition>,
) {
  return new PackageGroupArn<Partition>(parameters)
}

export interface PackageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  readonly repositoryName: string
  readonly packageFormat: string
  readonly packageNamespace: string
  readonly packageName: string
}
class PackageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'package',
  `arn:${string}:codeartifact:${string}:${string}:package/${string}/${string}/${string}/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'package' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  readonly repositoryName: string
  readonly packageFormat: string
  readonly packageNamespace: string
  readonly packageName: string
  constructor(parameters: PackageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainName = parameters.domainName
    this.repositoryName = parameters.repositoryName
    this.packageFormat = parameters.packageFormat
    this.packageNamespace = parameters.packageNamespace
    this.packageName = parameters.packageName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:codeartifact:${this.region}:${this.account}:package/${this.domainName}/${this.repositoryName}/${this.packageFormat}/${this.packageNamespace}/${this.packageName}` as const
  }
}
export type { PackageArn }
export function packageArn<Partition extends ArnPartition = 'aws'>(
  parameters: PackageArnParameters<Partition>,
) {
  return new PackageArn<Partition>(parameters)
}
