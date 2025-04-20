import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ContactArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly aliasContact: string
}
class ContactArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'contact',
  `arn:${string}:ssm-contacts:${string}:${string}:contact/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'contact' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly aliasContact: string
  constructor(parameters: ContactArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.aliasContact = parameters.aliasContact
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-contacts:${this.region}:${this.account}:contact/${this.aliasContact}` as const
  }
}
export type { ContactArn }
export function contactArn<Partition extends ArnPartition = 'aws'>(
  parameters: ContactArnParameters<Partition>,
) {
  return new ContactArn<Partition>(parameters)
}

export interface ChannelContactArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly aliasContact: string
  readonly idChannelContact: string
}
class ChannelContactArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'contactchannel',
  `arn:${string}:ssm-contacts:${string}:${string}:contactchannel/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'contactchannel' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly aliasContact: string
  readonly idChannelContact: string
  constructor(parameters: ChannelContactArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.aliasContact = parameters.aliasContact
    this.idChannelContact = parameters.idChannelContact
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-contacts:${this.region}:${this.account}:contactchannel/${this.aliasContact}/${this.idChannelContact}` as const
  }
}
export type { ChannelContactArn }
export function channelContactArn<Partition extends ArnPartition = 'aws'>(
  parameters: ChannelContactArnParameters<Partition>,
) {
  return new ChannelContactArn<Partition>(parameters)
}

export interface EngagementArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly aliasContact: string
  readonly idEngagement: string
}
class EngagementArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'engagement',
  `arn:${string}:ssm-contacts:${string}:${string}:engagement/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'engagement' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly aliasContact: string
  readonly idEngagement: string
  constructor(parameters: EngagementArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.aliasContact = parameters.aliasContact
    this.idEngagement = parameters.idEngagement
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-contacts:${this.region}:${this.account}:engagement/${this.aliasContact}/${this.idEngagement}` as const
  }
}
export type { EngagementArn }
export function engagementArn<Partition extends ArnPartition = 'aws'>(
  parameters: EngagementArnParameters<Partition>,
) {
  return new EngagementArn<Partition>(parameters)
}

export interface PageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly aliasContact: string
  readonly idPage: string
}
class PageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'page',
  `arn:${string}:ssm-contacts:${string}:${string}:page/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'page' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly aliasContact: string
  readonly idPage: string
  constructor(parameters: PageArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.aliasContact = parameters.aliasContact
    this.idPage = parameters.idPage
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-contacts:${this.region}:${this.account}:page/${this.aliasContact}/${this.idPage}` as const
  }
}
export type { PageArn }
export function pageArn<Partition extends ArnPartition = 'aws'>(
  parameters: PageArnParameters<Partition>,
) {
  return new PageArn<Partition>(parameters)
}

export interface RotationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRotation: string
}
class RotationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'rotation',
  `arn:${string}:ssm-contacts:${string}:${string}:rotation/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rotation' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idRotation: string
  constructor(parameters: RotationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idRotation = parameters.idRotation
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-contacts:${this.region}:${this.account}:rotation/${this.idRotation}` as const
  }
}
export type { RotationArn }
export function rotationArn<Partition extends ArnPartition = 'aws'>(
  parameters: RotationArnParameters<Partition>,
) {
  return new RotationArn<Partition>(parameters)
}
