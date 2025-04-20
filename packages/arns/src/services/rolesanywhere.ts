import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface TrustAnchorArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trustAnchorId: string
}
class TrustAnchorArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'trust-anchor',
  `arn:${string}:rolesanywhere:${string}:${string}:trust-anchor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'trust-anchor' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly trustAnchorId: string
  constructor(parameters: TrustAnchorArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.trustAnchorId = parameters.trustAnchorId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rolesanywhere:${this.region}:${this.account}:trust-anchor/${this.trustAnchorId}` as const
  }
}
export type { TrustAnchorArn }
export function trustAnchorArn<Partition extends ArnPartition = 'aws'>(
  parameters: TrustAnchorArnParameters<Partition>,
) {
  return new TrustAnchorArn<Partition>(parameters)
}

export interface ProfileArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly profileId: string
}
class ProfileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'profile',
  `arn:${string}:rolesanywhere:${string}:${string}:profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'profile' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly profileId: string
  constructor(parameters: ProfileArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.profileId = parameters.profileId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rolesanywhere:${this.region}:${this.account}:profile/${this.profileId}` as const
  }
}
export type { ProfileArn }
export function profileArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileArnParameters<Partition>,
) {
  return new ProfileArn<Partition>(parameters)
}

export interface SubjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subjectId: string
}
class SubjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'subject',
  `arn:${string}:rolesanywhere:${string}:${string}:subject/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subject' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly subjectId: string
  constructor(parameters: SubjectArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.subjectId = parameters.subjectId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rolesanywhere:${this.region}:${this.account}:subject/${this.subjectId}` as const
  }
}
export type { SubjectArn }
export function subjectArn<Partition extends ArnPartition = 'aws'>(
  parameters: SubjectArnParameters<Partition>,
) {
  return new SubjectArn<Partition>(parameters)
}

export interface CrlArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly crlId: string
}
class CrlArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'crl',
  `arn:${string}:rolesanywhere:${string}:${string}:crl/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'crl' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly crlId: string
  constructor(parameters: CrlArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.crlId = parameters.crlId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rolesanywhere:${this.region}:${this.account}:crl/${this.crlId}` as const
  }
}
export type { CrlArn }
export function crlArn<Partition extends ArnPartition = 'aws'>(
  parameters: CrlArnParameters<Partition>,
) {
  return new CrlArn<Partition>(parameters)
}
