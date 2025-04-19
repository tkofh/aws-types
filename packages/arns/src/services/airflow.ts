import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface EnvironmentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentName: string
}
class EnvironmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'environment', `arn:${string}:airflow:${string}:${string}:environment/${string}`> {
  readonly [ArnResourceTypeBrand] = 'environment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentName: string
  constructor(parameters: EnvironmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.environmentName = parameters.environmentName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:airflow:${this.region}:${this.account}:environment/${this.environmentName}` as const
  }
}
export type { EnvironmentArn }
export function environmentArn<Partition extends ArnPartition = 'aws'>(parameters: EnvironmentArnParameters<Partition>) {
  return new EnvironmentArn<Partition>(parameters)
}

export interface RbacRoleArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentName: string
  readonly roleName: string
}
class RbacRoleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'rbac-role', `arn:${string}:airflow:${string}:${string}:role/${string}/${string}`> {
  readonly [ArnResourceTypeBrand] = 'rbac-role' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentName: string
  readonly roleName: string
  constructor(parameters: RbacRoleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.environmentName = parameters.environmentName
    this.roleName = parameters.roleName
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:airflow:${this.region}:${this.account}:role/${this.environmentName}/${this.roleName}` as const
  }
}
export type { RbacRoleArn }
export function rbacRoleArn<Partition extends ArnPartition = 'aws'>(parameters: RbacRoleArnParameters<Partition>) {
  return new RbacRoleArn<Partition>(parameters)
}