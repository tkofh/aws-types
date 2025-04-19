import { type ArnPartition, type ArnRegion, ArnResourceTypeBrand, InternalArn, StringifyArnBrand } from '../internal.js'

export interface ReportPackageArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
}
class ReportPackageArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'report-package', `arn:${string}:artifact:::report-package/*`> {
  readonly [ArnResourceTypeBrand] = 'report-package' as const
  readonly partition: Partition
  constructor(parameters: ReportPackageArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:artifact:::report-package/*` as const
  }
}
export type { ReportPackageArn }
export function reportPackageArn<Partition extends ArnPartition = 'aws'>(parameters: ReportPackageArnParameters<Partition>) {
  return new ReportPackageArn<Partition>(parameters)
}

export interface CustomerAgreementArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly account: string
}
class CustomerAgreementArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'customer-agreement', `arn:${string}:artifact::${string}:customer-agreement/*`> {
  readonly [ArnResourceTypeBrand] = 'customer-agreement' as const
  readonly partition: Partition
  readonly account: string
  constructor(parameters: CustomerAgreementArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.account = parameters.account
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:artifact::${this.account}:customer-agreement/*` as const
  }
}
export type { CustomerAgreementArn }
export function customerAgreementArn<Partition extends ArnPartition = 'aws'>(parameters: CustomerAgreementArnParameters<Partition>) {
  return new CustomerAgreementArn<Partition>(parameters)
}

export interface AgreementArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
}
class AgreementArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'agreement', `arn:${string}:artifact:::agreement/*`> {
  readonly [ArnResourceTypeBrand] = 'agreement' as const
  readonly partition: Partition
  constructor(parameters: AgreementArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:artifact:::agreement/*` as const
  }
}
export type { AgreementArn }
export function agreementArn<Partition extends ArnPartition = 'aws'>(parameters: AgreementArnParameters<Partition>) {
  return new AgreementArn<Partition>(parameters)
}

export interface ReportArnParameters<Partition extends ArnPartition = 'aws'> {
  readonly partition?: Partition | undefined
  readonly region: ArnRegion<Partition>
  readonly reportId: string
  readonly version: string
}
class ReportArn<Partition extends ArnPartition = 'aws'> extends InternalArn<'report', `arn:${string}:artifact:${string}::report/${string}:${string}`> {
  readonly [ArnResourceTypeBrand] = 'report' as const
  readonly partition: Partition
  readonly region: ArnRegion<Partition>
  readonly reportId: string
  readonly version: string
  constructor(parameters: ReportArnParameters<Partition>) {
    super()
    this.partition = (parameters.partition ?? 'aws') as Partition
    this.region = parameters.region
    this.reportId = parameters.reportId
    this.version = parameters.version
  }
  [StringifyArnBrand]() {
    return `arn:${this.partition}:artifact:${this.region}::report/${this.reportId}:${this.version}` as const
  }
}
export type { ReportArn }
export function reportArn<Partition extends ArnPartition = 'aws'>(parameters: ReportArnParameters<Partition>) {
  return new ReportArn<Partition>(parameters)
}