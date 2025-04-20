import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ProfileArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ProfileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'profile',
  `arn:${string}:b2bi:${string}:${string}:profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'profile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:b2bi:${this.region}:${this.account}:profile/${this.resourceId}` as const
  }
}
export type { ProfileArn }
export function profileArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileArnParameters<Partition>,
) {
  return new ProfileArn<Partition>(parameters)
}

export interface CapabilityArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class CapabilityArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'capability',
  `arn:${string}:b2bi:${string}:${string}:capability/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'capability' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: CapabilityArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:b2bi:${this.region}:${this.account}:capability/${this.resourceId}` as const
  }
}
export type { CapabilityArn }
export function capabilityArn<Partition extends ArnPartition = 'aws'>(
  parameters: CapabilityArnParameters<Partition>,
) {
  return new CapabilityArn<Partition>(parameters)
}

export interface PartnershipArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class PartnershipArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'partnership',
  `arn:${string}:b2bi:${string}:${string}:partnership/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'partnership' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: PartnershipArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:b2bi:${this.region}:${this.account}:partnership/${this.resourceId}` as const
  }
}
export type { PartnershipArn }
export function partnershipArn<Partition extends ArnPartition = 'aws'>(
  parameters: PartnershipArnParameters<Partition>,
) {
  return new PartnershipArn<Partition>(parameters)
}

export interface TransformerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class TransformerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transformer',
  `arn:${string}:b2bi:${string}:${string}:transformer/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transformer' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: TransformerArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:b2bi:${this.region}:${this.account}:transformer/${this.resourceId}` as const
  }
}
export type { TransformerArn }
export function transformerArn<Partition extends ArnPartition = 'aws'>(
  parameters: TransformerArnParameters<Partition>,
) {
  return new TransformerArn<Partition>(parameters)
}
