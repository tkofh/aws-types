import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface UserpoolArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userPoolId: string
}
class UserpoolArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'userpool', `arn:${string}:cognito-idp:${string}:${string}:userpool/${string}`> {
  readonly [ArnResourceTypeBrand] = 'userpool' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly userPoolId: string
  constructor(parameters: UserpoolArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.userPoolId = parameters.userPoolId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:cognito-idp:${this.region}:${this.account}:userpool/${this.userPoolId}` as const
  }
}
export type { UserpoolArn }
export function userpoolArn<Partition extends ArnPartition = 'aws'>(parameters: UserpoolArnParameters<Partition>) {
  return new UserpoolArn<Partition>(parameters)
}

export interface WebaclArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
}
class WebaclArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'webacl', `arn:${string}:wafv2:${string}:${string}:${string}/webacl/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'webacl' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly scope: string
  readonly name: string
  readonly id: string
  constructor(parameters: WebaclArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.scope = parameters.scope
    this.name = parameters.name
    this.id = parameters.id
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:wafv2:${this.region}:${this.account}:${this.scope}/webacl/${this.name}/${this.id}` as const
  }
}
export type { WebaclArn }
export function webaclArn<Partition extends ArnPartition = 'aws'>(parameters: WebaclArnParameters<Partition>) {
  return new WebaclArn<Partition>(parameters)
}