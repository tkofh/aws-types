import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ContactArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly contactAlias: string
}
class ContactArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'contact',
  `arn:${string}:ssm-contacts:${string}:${string}:contact/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'contact' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly contactAlias: string
  constructor(parameters: ContactArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.contactAlias = parameters.contactAlias
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-contacts:${this.region}:${this.account}:contact/${this.contactAlias}` as const
  }
}
export type { ContactArn }
export function contactArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContactArnParameters<Partition>,
) {
  return new ContactArn<Partition>(parameters)
}

export interface ContactChannelArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly contactAlias: string
  readonly contactChannelId: string
}
class ContactChannelArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'contactchannel',
  `arn:${string}:ssm-contacts:${string}:${string}:contactchannel/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'contactchannel' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly contactAlias: string
  readonly contactChannelId: string
  constructor(parameters: ContactChannelArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.contactAlias = parameters.contactAlias
    this.contactChannelId = parameters.contactChannelId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-contacts:${this.region}:${this.account}:contactchannel/${this.contactAlias}/${this.contactChannelId}` as const
  }
}
export type { ContactChannelArn }
export function contactChannelArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContactChannelArnParameters<Partition>,
) {
  return new ContactChannelArn<Partition>(parameters)
}

export interface EngagementArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly contactAlias: string
  readonly engagementId: string
}
class EngagementArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'engagement',
  `arn:${string}:ssm-contacts:${string}:${string}:engagement/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'engagement' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly contactAlias: string
  readonly engagementId: string
  constructor(parameters: EngagementArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.contactAlias = parameters.contactAlias
    this.engagementId = parameters.engagementId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-contacts:${this.region}:${this.account}:engagement/${this.contactAlias}/${this.engagementId}` as const
  }
}
export type { EngagementArn }
export function engagementArn<Partition extends ArnPartition = 'aws'>(
  parameters: EngagementArnParameters<Partition>,
) {
  return new EngagementArn<Partition>(parameters)
}

export interface PageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly contactAlias: string
  readonly pageId: string
}
class PageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'page',
  `arn:${string}:ssm-contacts:${string}:${string}:page/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'page' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly contactAlias: string
  readonly pageId: string
  constructor(parameters: PageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.contactAlias = parameters.contactAlias
    this.pageId = parameters.pageId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-contacts:${this.region}:${this.account}:page/${this.contactAlias}/${this.pageId}` as const
  }
}
export type { PageArn }
export function pageArn<Partition extends ArnPartition = 'aws'>(
  parameters: PageArnParameters<Partition>,
) {
  return new PageArn<Partition>(parameters)
}

export interface RotationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly rotationId: string
}
class RotationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'rotation',
  `arn:${string}:ssm-contacts:${string}:${string}:rotation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rotation' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly rotationId: string
  constructor(parameters: RotationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.rotationId = parameters.rotationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-contacts:${this.region}:${this.account}:rotation/${this.rotationId}` as const
  }
}
export type { RotationArn }
export function rotationArn<Partition extends ArnPartition = 'aws'>(
  parameters: RotationArnParameters<Partition>,
) {
  return new RotationArn<Partition>(parameters)
}
