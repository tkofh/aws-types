import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DomainsArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
}
class DomainsArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'domains',
  `arn:${string}:profile:${string}:${string}:domains/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'domains' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  constructor(parameters: DomainsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDomain = parameters.nameDomain
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:profile:${this.region}:${this.account}:domains/${this.nameDomain}` as const
  }
}
export type { DomainsArn }
export function domainsArn<Partition extends ArnPartition = 'aws'>(
  parameters: DomainsArnParameters<Partition>,
) {
  return new DomainsArn<Partition>(parameters)
}

export interface TypesObjectArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  readonly nameTypeObject: string
}
class TypesObjectArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'object-types',
  `arn:${string}:profile:${string}:${string}:domains/${string}/object-types/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'object-types' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  readonly nameTypeObject: string
  constructor(parameters: TypesObjectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDomain = parameters.nameDomain
    this.nameTypeObject = parameters.nameTypeObject
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:profile:${this.region}:${this.account}:domains/${this.nameDomain}/object-types/${this.nameTypeObject}` as const
  }
}
export type { TypesObjectArn }
export function typesObjectArn<Partition extends ArnPartition = 'aws'>(
  parameters: TypesObjectArnParameters<Partition>,
) {
  return new TypesObjectArn<Partition>(parameters)
}

export interface IntegrationsArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  readonly uri: string
}
class IntegrationsArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'integrations',
  `arn:${string}:profile:${string}:${string}:domains/${string}/integrations/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'integrations' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  readonly uri: string
  constructor(parameters: IntegrationsArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDomain = parameters.nameDomain
    this.uri = parameters.uri
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:profile:${this.region}:${this.account}:domains/${this.nameDomain}/integrations/${this.uri}` as const
  }
}
export type { IntegrationsArn }
export function integrationsArn<Partition extends ArnPartition = 'aws'>(
  parameters: IntegrationsArnParameters<Partition>,
) {
  return new IntegrationsArn<Partition>(parameters)
}

export interface StreamsEventArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  readonly nameStreamEvent: string
}
class StreamsEventArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'event-streams',
  `arn:${string}:profile:${string}:${string}:domains/${string}/event-streams/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'event-streams' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  readonly nameStreamEvent: string
  constructor(parameters: StreamsEventArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDomain = parameters.nameDomain
    this.nameStreamEvent = parameters.nameStreamEvent
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:profile:${this.region}:${this.account}:domains/${this.nameDomain}/event-streams/${this.nameStreamEvent}` as const
  }
}
export type { StreamsEventArn }
export function streamsEventArn<Partition extends ArnPartition = 'aws'>(
  parameters: StreamsEventArnParameters<Partition>,
) {
  return new StreamsEventArn<Partition>(parameters)
}

export interface AttributesCalculatedArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  readonly nameAttributeCalculated: string
}
class AttributesCalculatedArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'calculated-attributes',
  `arn:${string}:profile:${string}:${string}:domains/${string}/calculated-attributes/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'calculated-attributes' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  readonly nameAttributeCalculated: string
  constructor(parameters: AttributesCalculatedArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDomain = parameters.nameDomain
    this.nameAttributeCalculated = parameters.nameAttributeCalculated
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:profile:${this.region}:${this.account}:domains/${this.nameDomain}/calculated-attributes/${this.nameAttributeCalculated}` as const
  }
}
export type { AttributesCalculatedArn }
export function attributesCalculatedArn<Partition extends ArnPartition = 'aws'>(
  parameters: AttributesCalculatedArnParameters<Partition>,
) {
  return new AttributesCalculatedArn<Partition>(parameters)
}

export interface DefinitionsSegmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  readonly nameDefinitionSegment: string
}
class DefinitionsSegmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'segment-definitions',
  `arn:${string}:profile:${string}:${string}:domains/${string}/segment-definitions/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'segment-definitions' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameDomain: string
  readonly nameDefinitionSegment: string
  constructor(parameters: DefinitionsSegmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameDomain = parameters.nameDomain
    this.nameDefinitionSegment = parameters.nameDefinitionSegment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:profile:${this.region}:${this.account}:domains/${this.nameDomain}/segment-definitions/${this.nameDefinitionSegment}` as const
  }
}
export type { DefinitionsSegmentArn }
export function definitionsSegmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: DefinitionsSegmentArnParameters<Partition>,
) {
  return new DefinitionsSegmentArn<Partition>(parameters)
}
