export interface DomainArnParameters {
  partition?: string | undefined
  region: string
  account: string
  domainName: string
}
export type DomainArn = `arn:${string}:es:${string}:${string}:domain/${string}`
export function domainArn(parameters: DomainArnParameters): DomainArn {
  return `arn:${parameters.partition ?? ''}:es:${parameters.region}:${parameters.account}:domain/${parameters.domainName}`
}

export interface EsRoleArnParameters {
  partition?: string | undefined
  account: string
}
export type EsRoleArn = `arn:${string}:iam::${string}:role/aws-service-role/es.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService`
export function esRoleArn(parameters: EsRoleArnParameters): EsRoleArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:role/aws-service-role/es.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService`
}

export interface OpensearchserviceRoleArnParameters {
  partition?: string | undefined
  account: string
}
export type OpensearchserviceRoleArn = `arn:${string}:iam::${string}:role/aws-service-role/opensearchservice.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService`
export function opensearchserviceRoleArn(parameters: OpensearchserviceRoleArnParameters): OpensearchserviceRoleArn {
  return `arn:${parameters.partition ?? ''}:iam::${parameters.account}:role/aws-service-role/opensearchservice.amazonaws.com/AWSServiceRoleForAmazonOpenSearchService`
}