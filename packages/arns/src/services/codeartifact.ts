export interface DomainArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainName: string
}
export type DomainArn = `arn:${string}:codeartifact:${string}:${string}:domain/${string}`
export function domainArn(parameters: DomainArnParameters): DomainArn {
  return `arn:${parameters.partition ?? ''}:codeartifact:${parameters.region}:${parameters.account}:domain/${parameters.domainName}`
}

export interface RepositoryArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainName: string
  repositoryName: string
}
export type RepositoryArn = `arn:${string}:codeartifact:${string}:${string}:repository/${string}/${string}`
export function repositoryArn(parameters: RepositoryArnParameters): RepositoryArn {
  return `arn:${parameters.partition ?? ''}:codeartifact:${parameters.region}:${parameters.account}:repository/${parameters.domainName}/${parameters.repositoryName}`
}

export interface PackageGroupArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainName: string
  encodedPackageGroupPattern: string
}
export type PackageGroupArn = `arn:${string}:codeartifact:${string}:${string}:package-group/${string}${string}`
export function packageGroupArn(parameters: PackageGroupArnParameters): PackageGroupArn {
  return `arn:${parameters.partition ?? ''}:codeartifact:${parameters.region}:${parameters.account}:package-group/${parameters.domainName}${parameters.encodedPackageGroupPattern}`
}

export interface PackageArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainName: string
  repositoryName: string
  packageFormat: string
  packageNamespace: string
  packageName: string
}
export type PackageArn = `arn:${string}:codeartifact:${string}:${string}:package/${string}/${string}/${string}/${string}/${string}`
export function packageArn(parameters: PackageArnParameters): PackageArn {
  return `arn:${parameters.partition ?? ''}:codeartifact:${parameters.region}:${parameters.account}:package/${parameters.domainName}/${parameters.repositoryName}/${parameters.packageFormat}/${parameters.packageNamespace}/${parameters.packageName}`
}