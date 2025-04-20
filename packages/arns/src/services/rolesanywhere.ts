import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AnchorTrustArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAnchorTrust: string
}
class AnchorTrustArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'trust-anchor',
  `arn:${string}:rolesanywhere:${string}:${string}:trust-anchor/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'trust-anchor' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idAnchorTrust: string
  constructor(parameters: AnchorTrustArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idAnchorTrust = parameters.idAnchorTrust
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rolesanywhere:${this.region}:${this.account}:trust-anchor/${this.idAnchorTrust}` as const
  }
}
export type { AnchorTrustArn }
export function anchorTrustArn<Partition extends ArnPartition = 'aws'>(
  parameters: AnchorTrustArnParameters<Partition>,
) {
  return new AnchorTrustArn<Partition>(parameters)
}

export interface ProfileArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProfile: string
}
class ProfileArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'profile',
  `arn:${string}:rolesanywhere:${string}:${string}:profile/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'profile' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idProfile: string
  constructor(parameters: ProfileArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idProfile = parameters.idProfile
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rolesanywhere:${this.region}:${this.account}:profile/${this.idProfile}` as const
  }
}
export type { ProfileArn }
export function profileArn<Partition extends ArnPartition = 'aws'>(
  parameters: ProfileArnParameters<Partition>,
) {
  return new ProfileArn<Partition>(parameters)
}

export interface SubjectArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSubject: string
}
class SubjectArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'subject',
  `arn:${string}:rolesanywhere:${string}:${string}:subject/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'subject' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idSubject: string
  constructor(parameters: SubjectArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idSubject = parameters.idSubject
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rolesanywhere:${this.region}:${this.account}:subject/${this.idSubject}` as const
  }
}
export type { SubjectArn }
export function subjectArn<Partition extends ArnPartition = 'aws'>(
  parameters: SubjectArnParameters<Partition>,
) {
  return new SubjectArn<Partition>(parameters)
}

export interface CrlArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCrl: string
}
class CrlArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'crl',
  `arn:${string}:rolesanywhere:${string}:${string}:crl/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'crl' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idCrl: string
  constructor(parameters: CrlArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idCrl = parameters.idCrl
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:rolesanywhere:${this.region}:${this.account}:crl/${this.idCrl}` as const
  }
}
export type { CrlArn }
export function crlArn<Partition extends ArnPartition = 'aws'>(
  parameters: CrlArnParameters<Partition>,
) {
  return new CrlArn<Partition>(parameters)
}
