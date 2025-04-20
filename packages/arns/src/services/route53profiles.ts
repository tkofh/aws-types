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
  `arn:${string}:route53profiles:${string}:${string}:profile/${string}`
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
    return `arn:${this.partition}:route53profiles:${this.region}:${this.account}:profile/${this.idResource}` as const
  }
}
export type { ProfileArn }
export function profileArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileArnParameters<Partition>,
) {
  return new ProfileArn<Partition>(parameters)
}

export interface AssociationProfileArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
}
class AssociationProfileArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'profile-association',
  `arn:${string}:route53profiles:${string}:${string}:profile-association/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'profile-association' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idResource: string
  constructor(parameters: AssociationProfileArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idResource = parameters.idResource
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:route53profiles:${this.region}:${this.account}:profile-association/${this.idResource}` as const
  }
}
export type { AssociationProfileArn }
export function associationProfileArn<Partition extends ArnPartition = 'aws'>(
  parameters: AssociationProfileArnParameters<Partition>,
) {
  return new AssociationProfileArn<Partition>(parameters)
}
