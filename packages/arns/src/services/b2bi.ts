import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ProfileArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class ProfileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'profile',
  `arn:${string}:b2bi:${string}:${string}:profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'profile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: ProfileArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:b2bi:${this.region}:${this.account}:profile/${this.idResource}` as const
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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class CapabilityArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'capability',
  `arn:${string}:b2bi:${string}:${string}:capability/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'capability' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: CapabilityArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:b2bi:${this.region}:${this.account}:capability/${this.idResource}` as const
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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class PartnershipArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'partnership',
  `arn:${string}:b2bi:${string}:${string}:partnership/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'partnership' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: PartnershipArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:b2bi:${this.region}:${this.account}:partnership/${this.idResource}` as const
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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class TransformerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'transformer',
  `arn:${string}:b2bi:${string}:${string}:transformer/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'transformer' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: TransformerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:b2bi:${this.region}:${this.account}:transformer/${this.idResource}` as const
  }
}
export type { TransformerArn }
export function transformerArn<Partition extends ArnPartition = 'aws'>(
  parameters: TransformerArnParameters<Partition>,
) {
  return new TransformerArn<Partition>(parameters)
}
