import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface ApplicationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationType: string
  readonly applicationId: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:ssm-sap:${string}:${string}:${string}/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationType: string
  readonly applicationId: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationType = parameters.applicationType
    this.applicationId = parameters.applicationId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-sap:${this.region}:${this.account}:${this.applicationType}/${this.applicationId}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface ComponentArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationType: string
  readonly applicationId: string
  readonly componentId: string
}
class ComponentArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'component',
  `arn:${string}:ssm-sap:${string}:${string}:${string}/${string}/COMPONENT/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'component' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationType: string
  readonly applicationId: string
  readonly componentId: string
  constructor(parameters: ComponentArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationType = parameters.applicationType
    this.applicationId = parameters.applicationId
    this.componentId = parameters.componentId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-sap:${this.region}:${this.account}:${this.applicationType}/${this.applicationId}/COMPONENT/${this.componentId}` as const
  }
}
export type { ComponentArn }
export function componentArn<Partition extends ArnPartition = 'aws'>(
  parameters: ComponentArnParameters<Partition>,
) {
  return new ComponentArn<Partition>(parameters)
}

export interface DatabaseArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationType: string
  readonly applicationId: string
  readonly databaseId: string
}
class DatabaseArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'database',
  `arn:${string}:ssm-sap:${string}:${string}:${string}/${string}/DB/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'database' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationType: string
  readonly applicationId: string
  readonly databaseId: string
  constructor(parameters: DatabaseArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationType = parameters.applicationType
    this.applicationId = parameters.applicationId
    this.databaseId = parameters.databaseId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:ssm-sap:${this.region}:${this.account}:${this.applicationType}/${this.applicationId}/DB/${this.databaseId}` as const
  }
}
export type { DatabaseArn }
export function databaseArn<Partition extends ArnPartition = 'aws'>(
  parameters: DatabaseArnParameters<Partition>,
) {
  return new DatabaseArn<Partition>(parameters)
}
