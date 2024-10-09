export interface DetectorArnParameters {
  partition?: string | undefined
  region: string
  account: string
  detectorId: string
}
export type DetectorArn = `arn:${string}:guardduty:${string}:${string}:detector/${string}`
export function detectorArn(parameters: DetectorArnParameters): DetectorArn {
  return `arn:${parameters.partition ?? ''}:guardduty:${parameters.region}:${parameters.account}:detector/${parameters.detectorId}`
}

export interface FilterArnParameters {
  partition?: string | undefined
  region: string
  account: string
  detectorId: string
  filterName: string
}
export type FilterArn = `arn:${string}:guardduty:${string}:${string}:detector/${string}/filter/${string}`
export function filterArn(parameters: FilterArnParameters): FilterArn {
  return `arn:${parameters.partition ?? ''}:guardduty:${parameters.region}:${parameters.account}:detector/${parameters.detectorId}/filter/${parameters.filterName}`
}

export interface IpsetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  detectorId: string
  ipSetId: string
}
export type IpsetArn = `arn:${string}:guardduty:${string}:${string}:detector/${string}/ipset/${string}`
export function ipsetArn(parameters: IpsetArnParameters): IpsetArn {
  return `arn:${parameters.partition ?? ''}:guardduty:${parameters.region}:${parameters.account}:detector/${parameters.detectorId}/ipset/${parameters.ipSetId}`
}

export interface ThreatintelsetArnParameters {
  partition?: string | undefined
  region: string
  account: string
  detectorId: string
  threatIntelSetId: string
}
export type ThreatintelsetArn = `arn:${string}:guardduty:${string}:${string}:detector/${string}/threatintelset/${string}`
export function threatintelsetArn(parameters: ThreatintelsetArnParameters): ThreatintelsetArn {
  return `arn:${parameters.partition ?? ''}:guardduty:${parameters.region}:${parameters.account}:detector/${parameters.detectorId}/threatintelset/${parameters.threatIntelSetId}`
}

export interface PublishingDestinationArnParameters {
  partition?: string | undefined
  region: string
  account: string
  detectorId: string
  publishingDestinationId: string
}
export type PublishingDestinationArn = `arn:${string}:guardduty:${string}:${string}:detector/${string}/publishingDestination/${string}`
export function publishingDestinationArn(parameters: PublishingDestinationArnParameters): PublishingDestinationArn {
  return `arn:${parameters.partition ?? ''}:guardduty:${parameters.region}:${parameters.account}:detector/${parameters.detectorId}/publishingDestination/${parameters.publishingDestinationId}`
}

export interface MalwareprotectionplanArnParameters {
  partition?: string | undefined
  region: string
  account: string
  malwareProtectionPlanId: string
}
export type MalwareprotectionplanArn = `arn:${string}:guardduty:${string}:${string}:malware-protection-plan/${string}`
export function malwareprotectionplanArn(parameters: MalwareprotectionplanArnParameters): MalwareprotectionplanArn {
  return `arn:${parameters.partition ?? ''}:guardduty:${parameters.region}:${parameters.account}:malware-protection-plan/${parameters.malwareProtectionPlanId}`
}