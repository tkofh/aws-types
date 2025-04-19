import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface DatasetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identityPoolId: string
  readonly identityId: string
  readonly datasetName: string
}
class DatasetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'dataset', `arn:${string}:cognito-sync:${string}:${string}:identitypool/${string}/identity/${string}/dataset/${string}`> {
  readonly [ArnResourceTypeBrand] = 'dataset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identityPoolId: string
  readonly identityId: string
  readonly datasetName: string
  constructor(parameters: DatasetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.identityPoolId = parameters.identityPoolId
    this.identityId = parameters.identityId
    this.datasetName = parameters.datasetName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cognito-sync:${this.region}:${this.account}:identitypool/${this.identityPoolId}/identity/${this.identityId}/dataset/${this.datasetName}` as const
  }
}
export type { DatasetArn }
export function datasetArn<Partition extends ArnPartition = 'aws'>(parameters: DatasetArnParameters<Partition>) {
  return new DatasetArn<Partition>(parameters)
}

export interface IdentityArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identityPoolId: string
  readonly identityId: string
}
class IdentityArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'identity', `arn:${string}:cognito-sync:${string}:${string}:identitypool/${string}/identity/${string}`> {
  readonly [ArnResourceTypeBrand] = 'identity' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identityPoolId: string
  readonly identityId: string
  constructor(parameters: IdentityArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.identityPoolId = parameters.identityPoolId
    this.identityId = parameters.identityId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cognito-sync:${this.region}:${this.account}:identitypool/${this.identityPoolId}/identity/${this.identityId}` as const
  }
}
export type { IdentityArn }
export function identityArn<Partition extends ArnPartition = 'aws'>(parameters: IdentityArnParameters<Partition>) {
  return new IdentityArn<Partition>(parameters)
}

export interface IdentitypoolArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identityPoolId: string
}
class IdentitypoolArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'identitypool', `arn:${string}:cognito-sync:${string}:${string}:identitypool/${string}`> {
  readonly [ArnResourceTypeBrand] = 'identitypool' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identityPoolId: string
  constructor(parameters: IdentitypoolArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.identityPoolId = parameters.identityPoolId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cognito-sync:${this.region}:${this.account}:identitypool/${this.identityPoolId}` as const
  }
}
export type { IdentitypoolArn }
export function identitypoolArn<Partition extends ArnPartition = 'aws'>(parameters: IdentitypoolArnParameters<Partition>) {
  return new IdentitypoolArn<Partition>(parameters)
}