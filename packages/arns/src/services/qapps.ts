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
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
}
class ApplicationArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'application',
  `arn:${string}:qbusiness:${string}:${string}:application/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'application' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  constructor(parameters: ApplicationArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qbusiness:${this.region}:${this.account}:application/${this.idApplication}` as const
  }
}
export type { ApplicationArn }
export function applicationArn<Partition extends ArnPartition = 'aws'>(
  parameters: ApplicationArnParameters<Partition>,
) {
  return new ApplicationArn<Partition>(parameters)
}

export interface AppQArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idApp: string
}
class AppQArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'qapp',
  `arn:${string}:qapps:${string}:${string}:application/${string}/qapp/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'qapp' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idApp: string
  constructor(parameters: AppQArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
    this.idApp = parameters.idApp
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qapps:${this.region}:${this.account}:application/${this.idApplication}/qapp/${this.idApp}` as const
  }
}
export type { AppQArn }
export function appQArn<Partition extends ArnPartition = 'aws'>(
  parameters: AppQArnParameters<Partition>,
) {
  return new AppQArn<Partition>(parameters)
}

export interface SessionAppQArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idApp: string
  readonly idSession: string
}
class SessionAppQArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'qapp-session',
  `arn:${string}:qapps:${string}:${string}:application/${string}/qapp/${string}/session/${string}`
> {
  readonly [ArnResourceTypeBrand] = 'qapp-session' as const
  readonly partition: string
  readonly region: string
  readonly account: string
  readonly idApplication: string
  readonly idApp: string
  readonly idSession: string
  constructor(parameters: SessionAppQArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.account = parameters.account
    this.idApplication = parameters.idApplication
    this.idApp = parameters.idApp
    this.idSession = parameters.idSession
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:qapps:${this.region}:${this.account}:application/${this.idApplication}/qapp/${this.idApp}/session/${this.idSession}` as const
  }
}
export type { SessionAppQArn }
export function sessionAppQArn<Partition extends ArnPartition = 'aws'>(
  parameters: SessionAppQArnParameters<Partition>,
) {
  return new SessionAppQArn<Partition>(parameters)
}
