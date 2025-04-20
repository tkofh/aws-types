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
  readonly applicationId: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:qbusiness:${string}:${string}:application/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
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
    return `arn:${this.partition}:qbusiness:${this.region}:${this.account}:application/${this.applicationId}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface QAppArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly appId: string
}
class QAppArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'qapp',
  `arn:${string}:qapps:${string}:${string}:application/${string}/qapp/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'qapp' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly appId: string
  constructor(parameters: QAppArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
    this.appId = parameters.appId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qapps:${this.region}:${this.account}:application/${this.applicationId}/qapp/${this.appId}` as const
  }
}
export type { QAppArn }
export function qAppArn<Partition extends ArnPartition = 'aws'>(
  parameters: QAppArnParameters<Partition>,
) {
  return new QAppArn<Partition>(parameters)
}

export interface QAppSessionArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly appId: string
  readonly sessionId: string
}
class QAppSessionArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'qapp-session',
  `arn:${string}:qapps:${string}:${string}:application/${string}/qapp/${string}/session/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'qapp-session' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly account: string
  readonly applicationId: string
  readonly appId: string
  readonly sessionId: string
  constructor(parameters: QAppSessionArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.account = parameters.account
    this.applicationId = parameters.applicationId
    this.appId = parameters.appId
    this.sessionId = parameters.sessionId
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qapps:${this.region}:${this.account}:application/${this.applicationId}/qapp/${this.appId}/session/${this.sessionId}` as const
  }
}
export type { QAppSessionArn }
export function qAppSessionArn<Partition extends ArnPartition = 'aws'>(
  parameters: QAppSessionArnParameters<Partition>,
) {
  return new QAppSessionArn<Partition>(parameters)
}
