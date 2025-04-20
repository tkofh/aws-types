import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface EnvironmentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameEnvironment: string
}
class EnvironmentArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'environment',
  `arn:${string}:airflow:${string}:${string}:environment/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'environment' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameEnvironment: string
  constructor(parameters: EnvironmentArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameEnvironment = parameters.nameEnvironment
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:airflow:${this.region}:${this.account}:environment/${this.nameEnvironment}` as const
  }
}
export type { EnvironmentArn }
export function environmentArn<Partition extends ArnPartition = 'aws'>(
  parameters: EnvironmentArnParameters<Partition>,
) {
  return new EnvironmentArn<Partition>(parameters)
}

export interface RoleRbacArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameEnvironment: string
  readonly nameRole: string
}
class RoleRbacArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'rbac-role',
  `arn:${string}:airflow:${string}:${string}:role/${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'rbac-role' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly nameEnvironment: string
  readonly nameRole: string
  constructor(parameters: RoleRbacArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.nameEnvironment = parameters.nameEnvironment
    this.nameRole = parameters.nameRole
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:airflow:${this.region}:${this.account}:role/${this.nameEnvironment}/${this.nameRole}` as const
  }
}
export type { RoleRbacArn }
export function roleRbacArn<Partition extends ArnPartition = 'aws'>(
  parameters: RoleRbacArnParameters<Partition>,
) {
  return new RoleRbacArn<Partition>(parameters)
}
