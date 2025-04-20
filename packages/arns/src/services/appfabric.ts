import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface BundleAppArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierBundleApp: string
}
class BundleAppArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'appbundle',
  `arn:${string}:appfabric:${string}:${string}:appbundle/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'appbundle' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly identifierBundleApp: string
  constructor(parameters: BundleAppArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.identifierBundleApp = parameters.identifierBundleApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appfabric:${this.region}:${this.account}:appbundle/${this.identifierBundleApp}` as const
  }
}
export type { BundleAppArn }
export function bundleAppArn<Partition extends ArnPartition = 'aws'>(
  parameters: BundleAppArnParameters<Partition>,
) {
  return new BundleAppArn<Partition>(parameters)
}

export interface AuthorizationAppArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBundleApp: string
  readonly identifierAuthorizationApp: string
}
class AuthorizationAppArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'appauthorization',
  `arn:${string}:appfabric:${string}:${string}:appbundle/${string}/appauthorization/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'appauthorization' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBundleApp: string
  readonly identifierAuthorizationApp: string
  constructor(parameters: AuthorizationAppArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idBundleApp = parameters.idBundleApp
    this.identifierAuthorizationApp = parameters.identifierAuthorizationApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appfabric:${this.region}:${this.account}:appbundle/${this.idBundleApp}/appauthorization/${this.identifierAuthorizationApp}` as const
  }
}
export type { AuthorizationAppArn }
export function authorizationAppArn<Partition extends ArnPartition = 'aws'>(
  parameters: AuthorizationAppArnParameters<Partition>,
) {
  return new AuthorizationAppArn<Partition>(parameters)
}

export interface IngestionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBundleApp: string
  readonly identifierIngestion: string
}
class IngestionArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'ingestion',
  `arn:${string}:appfabric:${string}:${string}:appbundle/${string}/ingestion/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ingestion' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBundleApp: string
  readonly identifierIngestion: string
  constructor(parameters: IngestionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idBundleApp = parameters.idBundleApp
    this.identifierIngestion = parameters.identifierIngestion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appfabric:${this.region}:${this.account}:appbundle/${this.idBundleApp}/ingestion/${this.identifierIngestion}` as const
  }
}
export type { IngestionArn }
export function ingestionArn<Partition extends ArnPartition = 'aws'>(
  parameters: IngestionArnParameters<Partition>,
) {
  return new IngestionArn<Partition>(parameters)
}

export interface DestinationIngestionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBundleApp: string
  readonly identifierIngestion: string
  readonly identifierDestinationIngestion: string
}
class DestinationIngestionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'ingestiondestination',
  `arn:${string}:appfabric:${string}:${string}:appbundle/${string}/ingestion/${string}/ingestiondestination/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'ingestiondestination' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idBundleApp: string
  readonly identifierIngestion: string
  readonly identifierDestinationIngestion: string
  constructor(parameters: DestinationIngestionArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idBundleApp = parameters.idBundleApp
    this.identifierIngestion = parameters.identifierIngestion
    this.identifierDestinationIngestion =
      parameters.identifierDestinationIngestion
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:appfabric:${this.region}:${this.account}:appbundle/${this.idBundleApp}/ingestion/${this.identifierIngestion}/ingestiondestination/${this.identifierDestinationIngestion}` as const
  }
}
export type { DestinationIngestionArn }
export function destinationIngestionArn<Partition extends ArnPartition = 'aws'>(
  parameters: DestinationIngestionArnParameters<Partition>,
) {
  return new DestinationIngestionArn<Partition>(parameters)
}
