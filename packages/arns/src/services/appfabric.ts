import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AppBundleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appBundleIdentifier: string
}
class AppBundleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'appbundle',
  `arn:${string}:appfabric:${string}:${string}:appbundle/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'appbundle' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appBundleIdentifier: string
  constructor(parameters: AppBundleArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appBundleIdentifier = parameters.appBundleIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appfabric:${this.region}:${this.account}:appbundle/${this.appBundleIdentifier}` as const
  }
}
export type { AppBundleArn }
export function appBundleArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppBundleArnParameters<Partition>,
) {
  return new AppBundleArn<Partition>(parameters)
}

export interface AppAuthorizationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appBundleId: string
  readonly appAuthorizationIdentifier: string
}
class AppAuthorizationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'appauthorization',
  `arn:${string}:appfabric:${string}:${string}:appbundle/${string}/appauthorization/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'appauthorization' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appBundleId: string
  readonly appAuthorizationIdentifier: string
  constructor(parameters: AppAuthorizationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appBundleId = parameters.appBundleId
    this.appAuthorizationIdentifier = parameters.appAuthorizationIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appfabric:${this.region}:${this.account}:appbundle/${this.appBundleId}/appauthorization/${this.appAuthorizationIdentifier}` as const
  }
}
export type { AppAuthorizationArn }
export function appAuthorizationArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppAuthorizationArnParameters<Partition>,
) {
  return new AppAuthorizationArn<Partition>(parameters)
}

export interface IngestionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appBundleId: string
  readonly ingestionIdentifier: string
}
class IngestionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ingestion',
  `arn:${string}:appfabric:${string}:${string}:appbundle/${string}/ingestion/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ingestion' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appBundleId: string
  readonly ingestionIdentifier: string
  constructor(parameters: IngestionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appBundleId = parameters.appBundleId
    this.ingestionIdentifier = parameters.ingestionIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appfabric:${this.region}:${this.account}:appbundle/${this.appBundleId}/ingestion/${this.ingestionIdentifier}` as const
  }
}
export type { IngestionArn }
export function ingestionArn<Partition extends ArnPartition = 'aws'>(
  parameters: IngestionArnParameters<Partition>,
) {
  return new IngestionArn<Partition>(parameters)
}

export interface IngestionDestinationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appBundleId: string
  readonly ingestionIdentifier: string
  readonly ingestionDestinationIdentifier: string
}
class IngestionDestinationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ingestiondestination',
  `arn:${string}:appfabric:${string}:${string}:appbundle/${string}/ingestion/${string}/ingestiondestination/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ingestiondestination' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appBundleId: string
  readonly ingestionIdentifier: string
  readonly ingestionDestinationIdentifier: string
  constructor(parameters: IngestionDestinationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appBundleId = parameters.appBundleId
    this.ingestionIdentifier = parameters.ingestionIdentifier
    this.ingestionDestinationIdentifier =
      parameters.ingestionDestinationIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appfabric:${this.region}:${this.account}:appbundle/${this.appBundleId}/ingestion/${this.ingestionIdentifier}/ingestiondestination/${this.ingestionDestinationIdentifier}` as const
  }
}
export type { IngestionDestinationArn }
export function ingestionDestinationArn<Partition extends ArnPartition = 'aws'>(
  parameters: IngestionDestinationArnParameters<Partition>,
) {
  return new IngestionDestinationArn<Partition>(parameters)
}
