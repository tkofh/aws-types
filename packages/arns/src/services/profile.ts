import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DomainsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
}
class DomainsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'domains',
  `arn:${string}:profile:${string}:${string}:domains/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'domains' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  constructor(parameters: DomainsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainName = parameters.domainName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:profile:${this.region}:${this.account}:domains/${this.domainName}` as const
  }
}
export type { DomainsArn }
export function domainsArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainsArnParameters<Partition>,
) {
  return new DomainsArn<Partition>(parameters)
}

export interface ObjectTypesArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  readonly objectTypeName: string
}
class ObjectTypesArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'object-types',
  `arn:${string}:profile:${string}:${string}:domains/${string}/object-types/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'object-types' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  readonly objectTypeName: string
  constructor(parameters: ObjectTypesArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainName = parameters.domainName
    this.objectTypeName = parameters.objectTypeName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:profile:${this.region}:${this.account}:domains/${this.domainName}/object-types/${this.objectTypeName}` as const
  }
}
export type { ObjectTypesArn }
export function objectTypesArn<Partition extends ArnPartition = 'aws'>(
  parameters: ObjectTypesArnParameters<Partition>,
) {
  return new ObjectTypesArn<Partition>(parameters)
}

export interface IntegrationsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  readonly uri: string
}
class IntegrationsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'integrations',
  `arn:${string}:profile:${string}:${string}:domains/${string}/integrations/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'integrations' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  readonly uri: string
  constructor(parameters: IntegrationsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainName = parameters.domainName
    this.uri = parameters.uri
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:profile:${this.region}:${this.account}:domains/${this.domainName}/integrations/${this.uri}` as const
  }
}
export type { IntegrationsArn }
export function integrationsArn<Partition extends ArnPartition = 'aws'>(
  parameters: IntegrationsArnParameters<Partition>,
) {
  return new IntegrationsArn<Partition>(parameters)
}

export interface EventStreamsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  readonly eventStreamName: string
}
class EventStreamsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'event-streams',
  `arn:${string}:profile:${string}:${string}:domains/${string}/event-streams/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'event-streams' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  readonly eventStreamName: string
  constructor(parameters: EventStreamsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainName = parameters.domainName
    this.eventStreamName = parameters.eventStreamName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:profile:${this.region}:${this.account}:domains/${this.domainName}/event-streams/${this.eventStreamName}` as const
  }
}
export type { EventStreamsArn }
export function eventStreamsArn<Partition extends ArnPartition = 'aws'>(
  parameters: EventStreamsArnParameters<Partition>,
) {
  return new EventStreamsArn<Partition>(parameters)
}

export interface CalculatedAttributesArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  readonly calculatedAttributeName: string
}
class CalculatedAttributesArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'calculated-attributes',
  `arn:${string}:profile:${string}:${string}:domains/${string}/calculated-attributes/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'calculated-attributes' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  readonly calculatedAttributeName: string
  constructor(parameters: CalculatedAttributesArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainName = parameters.domainName
    this.calculatedAttributeName = parameters.calculatedAttributeName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:profile:${this.region}:${this.account}:domains/${this.domainName}/calculated-attributes/${this.calculatedAttributeName}` as const
  }
}
export type { CalculatedAttributesArn }
export function calculatedAttributesArn<Partition extends ArnPartition = 'aws'>(
  parameters: CalculatedAttributesArnParameters<Partition>,
) {
  return new CalculatedAttributesArn<Partition>(parameters)
}

export interface SegmentDefinitionsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  readonly segmentDefinitionName: string
}
class SegmentDefinitionsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'segment-definitions',
  `arn:${string}:profile:${string}:${string}:domains/${string}/segment-definitions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'segment-definitions' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly domainName: string
  readonly segmentDefinitionName: string
  constructor(parameters: SegmentDefinitionsArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.domainName = parameters.domainName
    this.segmentDefinitionName = parameters.segmentDefinitionName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:profile:${this.region}:${this.account}:domains/${this.domainName}/segment-definitions/${this.segmentDefinitionName}` as const
  }
}
export type { SegmentDefinitionsArn }
export function segmentDefinitionsArn<Partition extends ArnPartition = 'aws'>(
  parameters: SegmentDefinitionsArnParameters<Partition>,
) {
  return new SegmentDefinitionsArn<Partition>(parameters)
}
