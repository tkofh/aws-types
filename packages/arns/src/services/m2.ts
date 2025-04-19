import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ApplicationArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
}
class ApplicationArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Application', `arn:${string}:m2:${string}:${string}:app/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Application' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:m2:${this.region}:${this.account}:app/${this.applicationId}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(parameters: ApplicationArnParameters<Partition>) {
  return new ApplicationArn<Partition>(parameters)
}

export interface EnvironmentArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
}
class EnvironmentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'Environment', `arn:${string}:m2:${string}:${string}:env/${string}`> {
  readonly [ArnResourceTypeBrand] = 'Environment' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly environmentId: string
  constructor(parameters: EnvironmentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.environmentId = parameters.environmentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:m2:${this.region}:${this.account}:env/${this.environmentId}` as const
  }
}
export type { EnvironmentArn }
export function environmentArn<Partition extends ArnPartition = 'aws'>(parameters: EnvironmentArnParameters<Partition>) {
  return new EnvironmentArn<Partition>(parameters)
}