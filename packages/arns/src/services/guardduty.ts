import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DetectorArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDetector: string
}
class DetectorArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'detector',
  `arn:${string}:guardduty:${string}:${string}:detector/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'detector' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDetector: string
  constructor(parameters: DetectorArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDetector = parameters.idDetector
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:guardduty:${this.region}:${this.account}:detector/${this.idDetector}` as const
  }
}
export type { DetectorArn }
export function detectorArn<Partition extends ArnPartition = 'aws'>(
  parameters: DetectorArnParameters<Partition>,
) {
  return new DetectorArn<Partition>(parameters)
}

export interface FilterArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDetector: string
  readonly nameFilter: string
}
class FilterArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'filter',
  `arn:${string}:guardduty:${string}:${string}:detector/${string}/filter/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'filter' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDetector: string
  readonly nameFilter: string
  constructor(parameters: FilterArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDetector = parameters.idDetector
    this.nameFilter = parameters.nameFilter
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:guardduty:${this.region}:${this.account}:detector/${this.idDetector}/filter/${this.nameFilter}` as const
  }
}
export type { FilterArn }
export function filterArn<Partition extends ArnPartition = 'aws'>(
  parameters: FilterArnParameters<Partition>,
) {
  return new FilterArn<Partition>(parameters)
}

export interface SetIpArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDetector: string
  readonly idSetIp: string
}
class SetIpArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ipset',
  `arn:${string}:guardduty:${string}:${string}:detector/${string}/ipset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ipset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDetector: string
  readonly idSetIp: string
  constructor(parameters: SetIpArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDetector = parameters.idDetector
    this.idSetIp = parameters.idSetIp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:guardduty:${this.region}:${this.account}:detector/${this.idDetector}/ipset/${this.idSetIp}` as const
  }
}
export type { SetIpArn }
export function setIpArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetIpArnParameters<Partition>,
) {
  return new SetIpArn<Partition>(parameters)
}

export interface SetIntelThreatArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDetector: string
  readonly idSetIntelThreat: string
}
class SetIntelThreatArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'threatintelset',
  `arn:${string}:guardduty:${string}:${string}:detector/${string}/threatintelset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'threatintelset' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDetector: string
  readonly idSetIntelThreat: string
  constructor(parameters: SetIntelThreatArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDetector = parameters.idDetector
    this.idSetIntelThreat = parameters.idSetIntelThreat
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:guardduty:${this.region}:${this.account}:detector/${this.idDetector}/threatintelset/${this.idSetIntelThreat}` as const
  }
}
export type { SetIntelThreatArn }
export function setIntelThreatArn<Partition extends ArnPartition = 'aws'>(
  parameters: SetIntelThreatArnParameters<Partition>,
) {
  return new SetIntelThreatArn<Partition>(parameters)
}

export interface DestinationPublishingArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDetector: string
  readonly idDestinationPublishing: string
}
class DestinationPublishingArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'publishingDestination',
  `arn:${string}:guardduty:${string}:${string}:detector/${string}/publishingDestination/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'publishingDestination' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idDetector: string
  readonly idDestinationPublishing: string
  constructor(parameters: DestinationPublishingArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idDetector = parameters.idDetector
    this.idDestinationPublishing = parameters.idDestinationPublishing
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:guardduty:${this.region}:${this.account}:detector/${this.idDetector}/publishingDestination/${this.idDestinationPublishing}` as const
  }
}
export type { DestinationPublishingArn }
export function destinationPublishingArn<
  Partition extends ArnPartition = 'aws',
>(parameters: DestinationPublishingArnParameters<Partition>) {
  return new DestinationPublishingArn<Partition>(parameters)
}

export interface PlanProtectionMalwareArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPlanProtectionMalware: string
}
class PlanProtectionMalwareArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'malwareprotectionplan',
  `arn:${string}:guardduty:${string}:${string}:malware-protection-plan/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'malwareprotectionplan' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idPlanProtectionMalware: string
  constructor(parameters: PlanProtectionMalwareArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idPlanProtectionMalware = parameters.idPlanProtectionMalware
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:guardduty:${this.region}:${this.account}:malware-protection-plan/${this.idPlanProtectionMalware}` as const
  }
}
export type { PlanProtectionMalwareArn }
export function planProtectionMalwareArn<
  Partition extends ArnPartition = 'aws',
>(parameters: PlanProtectionMalwareArnParameters<Partition>) {
  return new PlanProtectionMalwareArn<Partition>(parameters)
}
