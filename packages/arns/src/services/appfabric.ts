import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface AppbundleArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appBundleIdentifier: string
}
class AppbundleArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'appbundle',
  `arn:${string}:appfabric:${string}:${string}:appbundle/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'appbundle' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appBundleIdentifier: string
  constructor(parameters: AppbundleArnParameters<Partition>) {
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
export type { AppbundleArn }
export function appbundleArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppbundleArnParameters<Partition>,
) {
  return new AppbundleArn<Partition>(parameters)
}

export interface AppauthorizationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appbundleId: string
  readonly appAuthorizationIdentifier: string
}
class AppauthorizationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'appauthorization',
  `arn:${string}:appfabric:${string}:${string}:appbundle/${string}/appauthorization/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'appauthorization' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appbundleId: string
  readonly appAuthorizationIdentifier: string
  constructor(parameters: AppauthorizationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appbundleId = parameters.appbundleId
    this.appAuthorizationIdentifier = parameters.appAuthorizationIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appfabric:${this.region}:${this.account}:appbundle/${this.appbundleId}/appauthorization/${this.appAuthorizationIdentifier}` as const
  }
}
export type { AppauthorizationArn }
export function appauthorizationArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppauthorizationArnParameters<Partition>,
) {
  return new AppauthorizationArn<Partition>(parameters)
}

export interface IngestionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appbundleId: string
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
  readonly appbundleId: string
  readonly ingestionIdentifier: string
  constructor(parameters: IngestionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appbundleId = parameters.appbundleId
    this.ingestionIdentifier = parameters.ingestionIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appfabric:${this.region}:${this.account}:appbundle/${this.appbundleId}/ingestion/${this.ingestionIdentifier}` as const
  }
}
export type { IngestionArn }
export function ingestionArn<Partition extends ArnPartition = 'aws'>(
  parameters: IngestionArnParameters<Partition>,
) {
  return new IngestionArn<Partition>(parameters)
}

export interface IngestiondestinationArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appbundleId: string
  readonly ingestionIdentifier: string
  readonly ingestionDestinationIdentifier: string
}
class IngestiondestinationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ingestiondestination',
  `arn:${string}:appfabric:${string}:${string}:appbundle/${string}/ingestion/${string}/ingestiondestination/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ingestiondestination' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly appbundleId: string
  readonly ingestionIdentifier: string
  readonly ingestionDestinationIdentifier: string
  constructor(parameters: IngestiondestinationArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.appbundleId = parameters.appbundleId
    this.ingestionIdentifier = parameters.ingestionIdentifier
    this.ingestionDestinationIdentifier =
      parameters.ingestionDestinationIdentifier
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appfabric:${this.region}:${this.account}:appbundle/${this.appbundleId}/ingestion/${this.ingestionIdentifier}/ingestiondestination/${this.ingestionDestinationIdentifier}` as const
  }
}
export type { IngestiondestinationArn }
export function ingestiondestinationArn<Partition extends ArnPartition = 'aws'>(
  parameters: IngestiondestinationArnParameters<Partition>,
) {
  return new IngestiondestinationArn<Partition>(parameters)
}
