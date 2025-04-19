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
  `arn:${string}:es:${string}:${string}:domain/${string}`
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
    return `arn:${this.partition}:es:${this.region}:${this.account}:domain/${this.domainName}` as const
  }
}
export type { DomainArn }
export function domainArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainArnParameters<Partition>,
) {
  return new DomainArn<Partition>(parameters)
}

export interface EsRoleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
}
class EsRoleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'es_role',
  `arn:${string}:iam::${string}:role/aws-service-role/es.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService`
> {
  readonly [ArnResourceTypeBrand] = 'es_role' as const
  readonly partition: Partition
  readonly account: string
  constructor(parameters: EsRoleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:role/aws-service-role/es.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService` as const
  }
}
export type { EsRoleArn }
export function esRoleArn<Partition extends ArnPartition = 'aws'>(
  parameters: EsRoleArnParameters<Partition>,
) {
  return new EsRoleArn<Partition>(parameters)
}

export interface OpensearchserviceRoleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly account: string
}
class OpensearchserviceRoleArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'opensearchservice_role',
  `arn:${string}:iam::${string}:role/aws-service-role/opensearchservice.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService`
> {
  readonly [ArnResourceTypeBrand] = 'opensearchservice_role' as const
  readonly partition: Partition
  readonly account: string
  constructor(parameters: OpensearchserviceRoleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:iam::${this.account}:role/aws-service-role/opensearchservice.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService` as const
  }
}
export type { OpensearchserviceRoleArn }
export function opensearchserviceRoleArn<
  Partition extends ArnPartition = 'aws',
>(parameters: OpensearchserviceRoleArnParameters<Partition>) {
  return new OpensearchserviceRoleArn<Partition>(parameters)
}
