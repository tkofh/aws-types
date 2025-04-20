import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DetectorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly detectorId: string
}
class DetectorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'detector',
  `arn:${string}:guardduty:${string}:${string}:detector/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'detector' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly detectorId: string
  constructor(parameters: DetectorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.detectorId = parameters.detectorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:guardduty:${this.region}:${this.account}:detector/${this.detectorId}` as const
  }
}
export type { DetectorArn }
export function detectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: DetectorArnParameters<Partition>,
) {
  return new DetectorArn<Partition>(parameters)
}

export interface FilterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly detectorId: string
  readonly filterName: string
}
class FilterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'filter',
  `arn:${string}:guardduty:${string}:${string}:detector/${string}/filter/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'filter' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly detectorId: string
  readonly filterName: string
  constructor(parameters: FilterArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.detectorId = parameters.detectorId
    this.filterName = parameters.filterName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:guardduty:${this.region}:${this.account}:detector/${this.detectorId}/filter/${this.filterName}` as const
  }
}
export type { FilterArn }
export function filterArn<Partition extends ArnPartition = 'aws'>(
  parameters: FilterArnParameters<Partition>,
) {
  return new FilterArn<Partition>(parameters)
}

export interface IpSetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly detectorId: string
  readonly ipSetId: string
}
class IpSetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ipset',
  `arn:${string}:guardduty:${string}:${string}:detector/${string}/ipset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly detectorId: string
  readonly ipSetId: string
  constructor(parameters: IpSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.detectorId = parameters.detectorId
    this.ipSetId = parameters.ipSetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:guardduty:${this.region}:${this.account}:detector/${this.detectorId}/ipset/${this.ipSetId}` as const
  }
}
export type { IpSetArn }
export function ipSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: IpSetArnParameters<Partition>,
) {
  return new IpSetArn<Partition>(parameters)
}

export interface ThreatIntelSetArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly detectorId: string
  readonly threatIntelSetId: string
}
class ThreatIntelSetArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'threatintelset',
  `arn:${string}:guardduty:${string}:${string}:detector/${string}/threatintelset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'threatintelset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly detectorId: string
  readonly threatIntelSetId: string
  constructor(parameters: ThreatIntelSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.detectorId = parameters.detectorId
    this.threatIntelSetId = parameters.threatIntelSetId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:guardduty:${this.region}:${this.account}:detector/${this.detectorId}/threatintelset/${this.threatIntelSetId}` as const
  }
}
export type { ThreatIntelSetArn }
export function threatIntelSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: ThreatIntelSetArnParameters<Partition>,
) {
  return new ThreatIntelSetArn<Partition>(parameters)
}

export interface PublishingDestinationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly detectorId: string
  readonly publishingDestinationId: string
}
class PublishingDestinationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'publishingDestination',
  `arn:${string}:guardduty:${string}:${string}:detector/${string}/publishingDestination/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'publishingDestination' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly detectorId: string
  readonly publishingDestinationId: string
  constructor(parameters: PublishingDestinationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.detectorId = parameters.detectorId
    this.publishingDestinationId = parameters.publishingDestinationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:guardduty:${this.region}:${this.account}:detector/${this.detectorId}/publishingDestination/${this.publishingDestinationId}` as const
  }
}
export type { PublishingDestinationArn }
export function publishingDestinationArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PublishingDestinationArnParameters<Partition>) {
  return new PublishingDestinationArn<Partition>(parameters)
}

export interface MalwareProtectionPlanArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly malwareProtectionPlanId: string
}
class MalwareProtectionPlanArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'malwareprotectionplan',
  `arn:${string}:guardduty:${string}:${string}:malware-protection-plan/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'malwareprotectionplan' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly malwareProtectionPlanId: string
  constructor(parameters: MalwareProtectionPlanArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.malwareProtectionPlanId = parameters.malwareProtectionPlanId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:guardduty:${this.region}:${this.account}:malware-protection-plan/${this.malwareProtectionPlanId}` as const
  }
}
export type { MalwareProtectionPlanArn }
export function malwareProtectionPlanArn<
  Partition extends ArnPartition = 'aws',
>(parameters: MalwareProtectionPlanArnParameters<Partition>) {
  return new MalwareProtectionPlanArn<Partition>(parameters)
}
