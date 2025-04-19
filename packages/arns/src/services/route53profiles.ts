import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ProfileArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ProfileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'profile', `arn:${string}:route53profiles:${string}:${string}:profile/${string}`> {
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
    return `arn:${this.partition}:route53profiles:${this.region}:${this.account}:profile/${this.resourceId}` as const
  }
}
export type { ProfileArn }
export function profileArn<Partition extends ArnPartition = 'aws'>(parameters: ProfileArnParameters<Partition>) {
  return new ProfileArn<Partition>(parameters)
}

export interface ProfileAssociationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
}
class ProfileAssociationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'profile-association', `arn:${string}:route53profiles:${string}:${string}:profile-association/${string}`> {
  readonly [ArnResourceTypeBrand] = 'profile-association' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly resourceId: string
  constructor(parameters: ProfileAssociationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.resourceId = parameters.resourceId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53profiles:${this.region}:${this.account}:profile-association/${this.resourceId}` as const
  }
}
export type { ProfileAssociationArn }
export function profileAssociationArn<Partition extends ArnPartition = 'aws'>(parameters: ProfileAssociationArnParameters<Partition>) {
  return new ProfileAssociationArn<Partition>(parameters)
}