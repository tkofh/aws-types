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
  `arn:${string}:es:${string}:${string}:domain/${string}`
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
    return `arn:${this.partition}:es:${this.region}:${this.account}:domain/${this.nameDomain}` as const
  }
}
export type { DomainArn }
export function domainArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainArnParameters<Partition>,
) {
  return new DomainArn<Partition>(parameters)
}

export interface RoleEsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly account: string
}
class RoleEsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'es_role',
  `arn:${string}:iam::${string}:role/aws-service-role/es.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService`
> {
  readonly [ArnResourceTypeBrand] = 'es_role' as const
  readonly partition: string
  readonly account: string
  constructor(parameters: RoleEsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:role/aws-service-role/es.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService` as const
  }
}
export type { RoleEsArn }
export function roleEsArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoleEsArnParameters<Partition>,
) {
  return new RoleEsArn<Partition>(parameters)
}

export interface RoleServiceSearchOpenArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
}
class RoleServiceSearchOpenArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'opensearchservice_role',
  `arn:${string}:iam::${string}:role/aws-service-role/opensearchservice.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService`
> {
  readonly [ArnResourceTypeBrand] = 'opensearchservice_role' as const
  readonly partition: string
  readonly account: string
  constructor(parameters: RoleServiceSearchOpenArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:role/aws-service-role/opensearchservice.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService` as const
  }
}
export type { RoleServiceSearchOpenArn }
export function roleServiceSearchOpenArn<
  Partition extends ArnPartition = 'aws',
>(parameters: RoleServiceSearchOpenArnParameters<Partition>) {
  return new RoleServiceSearchOpenArn<Partition>(parameters)
}
