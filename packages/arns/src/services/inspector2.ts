export interface FilterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  ownerId: string
  filterId: string
}
export type FilterArn = `arn:${string}:inspector2:${string}:${string}:owner/${string}/filter/${string}`
export function filterArn(parameters: FilterArnParameters): FilterArn {
  return `arn:${parameters.partition ?? ''}:inspector2:${parameters.region}:${parameters.account}:owner/${parameters.ownerId}/filter/${parameters.filterId}`
}

export interface FindingArnParameters {
  partition?: string | undefined
  region: string
  account: string
  findingId: string
}
export type FindingArn = `arn:${string}:inspector2:${string}:${string}:finding/${string}`
export function findingArn(parameters: FindingArnParameters): FindingArn {
  return `arn:${parameters.partition ?? ''}:inspector2:${parameters.region}:${parameters.account}:finding/${parameters.findingId}`
}

export interface CisScanConfigurationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  ownerId: string
  cisScanConfigurationId: string
}
export type CisScanConfigurationArn = `arn:${string}:inspector2:${string}:${string}:owner/${string}/cis-configuration/${string}`
export function cisScanConfigurationArn(parameters: CisScanConfigurationArnParameters): CisScanConfigurationArn {
  return `arn:${parameters.partition ?? ''}:inspector2:${parameters.region}:${parameters.account}:owner/${parameters.ownerId}/cis-configuration/${parameters.cisScanConfigurationId}`
}