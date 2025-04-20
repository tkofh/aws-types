import {
  type ArnPartition,
  type ArnRegion,
  ArnResourceTypeBrand,
  InternalArn,
  StringifyArnBrand,
} from '../internal.js'

export interface PackageReportArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
}
class PackageReportArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'report-package',
  `arn:${string}:artifact:::report-package/*`
> {
  readonly [ArnResourceTypeBrand] = 'report-package' as const
  readonly partition: string
  constructor(parameters: PackageReportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:artifact:::report-package/*` as const
  }
}
export type { PackageReportArn }
export function packageReportArn<Partition extends ArnPartition = 'aws'>(
  parameters: PackageReportArnParameters<Partition>,
) {
  return new PackageReportArn<Partition>(parameters)
}

export interface AgreementCustomerArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
  readonly account: string
}
class AgreementCustomerArn<
  Partition extends ArnPartition = 'aws',
> extends InternalArn<
  'customer-agreement',
  `arn:${string}:artifact::${string}:customer-agreement/*`
> {
  readonly [ArnResourceTypeBrand] = 'customer-agreement' as const
  readonly partition: string
  readonly account: string
  constructor(parameters: AgreementCustomerArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:artifact::${this.account}:customer-agreement/*` as const
  }
}
export type { AgreementCustomerArn }
export function agreementCustomerArn<Partition extends ArnPartition = 'aws'>(
  parameters: AgreementCustomerArnParameters<Partition>,
) {
  return new AgreementCustomerArn<Partition>(parameters)
}

export interface AgreementArnParameters<
  Partition extends ArnPartition = 'aws',
> {
  readonly partition: string
}
class AgreementArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'agreement',
  `arn:${string}:artifact:::agreement/*`
> {
  readonly [ArnResourceTypeBrand] = 'agreement' as const
  readonly partition: string
  constructor(parameters: AgreementArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:artifact:::agreement/*` as const
  }
}
export type { AgreementArn }
export function agreementArn<Partition extends ArnPartition = 'aws'>(
  parameters: AgreementArnParameters<Partition>,
) {
  return new AgreementArn<Partition>(parameters)
}

export interface ReportArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition: string
  readonly region: string
  readonly idReport: string
  readonly version: string
}
class ReportArn<Partition extends ArnPartition = 'aws'> extends InternalArn<
  'report',
  `arn:${string}:artifact:${string}::report/${string}:${string}`
> {
  readonly [ArnResourceTypeBrand] = 'report' as const
  readonly partition: string
  readonly region: string
  readonly idReport: string
  readonly version: string
  constructor(parameters: ReportArnParameters<Partition>) {
    super()
    this.partition = parameters.partition
    this.region = parameters.region
    this.idReport = parameters.idReport
    this.version = parameters.version
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:artifact:${this.region}::report/${this.idReport}:${this.version}` as const
  }
}
export type { ReportArn }
export function reportArn<Partition extends ArnPartition = 'aws'>(
  parameters: ReportArnParameters<Partition>,
) {
  return new ReportArn<Partition>(parameters)
}
