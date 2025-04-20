import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface DataSetArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identityPoolId: string
  readonly identityId: string
  readonly dataSetName: string
}
class DataSetArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'dataset',
  `arn:${string}:cognito-sync:${string}:${string}:identitypool/${string}/identity/${string}/dataset/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'dataset' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identityPoolId: string
  readonly identityId: string
  readonly dataSetName: string
  constructor(parameters: DataSetArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.identityPoolId = parameters.identityPoolId
    this.identityId = parameters.identityId
    this.dataSetName = parameters.dataSetName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cognito-sync:${this.region}:${this.account}:identitypool/${this.identityPoolId}/identity/${this.identityId}/dataset/${this.dataSetName}` as const
  }
}
export type { DataSetArn }
export function dataSetArn<Partition extends ArnPartition = 'aws'>(
  parameters: DataSetArnParameters<Partition>,
) {
  return new DataSetArn<Partition>(parameters)
}

export interface IdentityArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identityPoolId: string
  readonly identityId: string
}
class IdentityArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'identity',
  `arn:${string}:cognito-sync:${string}:${string}:identitypool/${string}/identity/${string}`
> {
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
export function identityArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdentityArnParameters<Partition>,
) {
  return new IdentityArn<Partition>(parameters)
}

export interface IdentityPoolArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identityPoolId: string
}
class IdentityPoolArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'identitypool',
  `arn:${string}:cognito-sync:${string}:${string}:identitypool/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'identitypool' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly identityPoolId: string
  constructor(parameters: IdentityPoolArnParameters<Partition>) {
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
export type { IdentityPoolArn }
export function identityPoolArn<Partition extends ArnPartition = 'aws'>(
  parameters: IdentityPoolArnParameters<Partition>,
) {
  return new IdentityPoolArn<Partition>(parameters)
}
